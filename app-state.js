/* ============================================================
   APP STATE — player progress, XP, coins, badges, theme
   localStorage-backed, Supabase-ready shape
   ============================================================ */

const STORAGE_KEY = "sadw_player_v1";

const DEFAULT_STATE = {
  player: {
    id: null,
    username: "new_player",
    character: "sofia",
    level: 1,
    xp: 0,
    xpToNext: 200,
    coins: 0,
    streak: 0,
    lastActiveDate: null,
    combo: 0,
    maxCombo: 0,
    joinedAt: null,
    currentWorld: 1,
    currentLevel: "1-1"
  },
  progress: {
    worldsUnlocked: [1],
    levelsCompleted: [],
    levelStars: {},  // { "1-1": 3 }
    badgesEarned: [],
    lessonsRead: [],
    worldsCompleted: [],
    dailyChallengeDate: null,
    dailyChallengeCorrect: 0,
    glossaryViewed: [],
    sectionsRead: {},
    onboardingDone: false
  },
  inventory: {
    "hint": 3, "revive": 2, "double-xp": 1
  },
  settings: {
    theme: "pixel",
    sound: false,
    reduceMotion: false
  }
  /* theme locked to pixel in v1 */
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    // Merge with defaults (handle new fields)
    return {
      ...structuredClone(DEFAULT_STATE),
      ...parsed,
      player: { ...DEFAULT_STATE.player, ...(parsed.player || {}) },
      progress: { ...DEFAULT_STATE.progress, ...(parsed.progress || {}) },
      inventory: { ...DEFAULT_STATE.inventory, ...(parsed.inventory || {}) },
      settings: { ...DEFAULT_STATE.settings, ...(parsed.settings || {}) }
    };
  } catch (e) {
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/* XP curve: level N needs 200 * N xp */
function xpForLevel(level) { return 200 * level; }

/* React hook-ish global store (simple pub/sub) */
window.AppStore = (() => {
  let state = loadState();
  const listeners = new Set();

  function set(updater) {
    state = typeof updater === 'function' ? updater(state) : { ...state, ...updater };
    saveState(state);
    listeners.forEach(fn => fn(state));
  }

  function get() { return state; }

  function subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }

  /* Actions */
  function awardXP(amount) {
    set(s => {
      let newXP = s.player.xp + amount;
      let newLevel = s.player.level;
      let needed = xpForLevel(newLevel);
      while (newXP >= needed) {
        newXP -= needed;
        newLevel++;
        needed = xpForLevel(newLevel);
      }
      return { ...s, player: { ...s.player, xp: newXP, xpToNext: needed, level: newLevel } };
    });
  }

  function awardCoins(amount) {
    set(s => ({ ...s, player: { ...s.player, coins: s.player.coins + amount } }));
  }

  function completeLevel(levelId, stars, rewards) {
    set(s => {
      const completed = s.progress.levelsCompleted.includes(levelId)
        ? s.progress.levelsCompleted
        : [...s.progress.levelsCompleted, levelId];
      return {
        ...s,
        progress: {
          ...s.progress,
          levelsCompleted: completed,
          levelStars: { ...s.progress.levelStars, [levelId]: Math.max(stars, s.progress.levelStars[levelId] || 0) }
        }
      };
    });
    if (rewards) {
      awardXP(rewards.xp || 0);
      awardCoins(rewards.coins || 0);
    }
    updateStreak();
  }

  function setCharacter(charId) {
    set(s => ({ ...s, player: { ...s.player, character: charId } }));
  }
  function setUsername(name) {
    set(s => ({ ...s, player: { ...s.player, username: name, joinedAt: s.player.joinedAt || new Date().toISOString() } }));
  }
  function setTheme(theme) {
    set(s => ({ ...s, settings: { ...s.settings, theme } }));
    document.documentElement.setAttribute('data-theme', theme);
  }
  function reset() { set(structuredClone(DEFAULT_STATE)); }

  /* --- Streak tracking --- */
  function updateStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const last = state.player.lastActiveDate;
    if (last === today) return; // already active today

    let newStreak = 1;
    if (last) {
      const lastDate = new Date(last);
      const todayDate = new Date(today);
      const diffDays = Math.round((todayDate - lastDate) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        newStreak = state.player.streak + 1;
      }
      // diffDays > 1 → reset to 1 (already set)
    }

    set(s => ({ ...s, player: { ...s.player, streak: newStreak, lastActiveDate: today } }));

    // Milestone bonus coins
    const milestones = { 3: 50, 7: 150, 14: 400, 30: 1000 };
    if (milestones[newStreak]) {
      awardCoins(milestones[newStreak]);
    }
  }

  /* --- Combo system --- */
  function trackCombo(correct) {
    set(s => {
      const newCombo = correct ? s.player.combo + 1 : 0;
      const newMax = Math.max(newCombo, s.player.maxCombo);
      return { ...s, player: { ...s.player, combo: newCombo, maxCombo: newMax } };
    });
  }

  function getComboMultiplier() {
    const c = state.player.combo;
    if (c >= 5) return 3;
    if (c >= 3) return 2;
    if (c >= 2) return 1.5;
    return 1;
  }

  /* --- Badge checking --- */
  const BADGE_CRITERIA = {
    "first-commit":   s => s.progress.levelsCompleted.includes("1-2"),
    "pr-master":      s => s.progress.levelsCompleted.includes("1-3"),
    "pipeline-pro":   s => s.progress.levelsCompleted.includes("1-4"),
    "cloud-climber":  s => s.progress.levelsCompleted.includes("1-5"),
    "ai-whisperer":   s => s.progress.levelsCompleted.some(id => id.startsWith("5-")),
    "security-sage":  s => s.progress.levelsCompleted.includes("5-9"),
    "speedrun-king":  s => {
      const w1Levels = (window.PLATFORM_DATA?.worlds?.find(w => w.id === 1)?.levels || []).map(l => l.id);
      return w1Levels.length > 0 && w1Levels.every(id => s.progress.levelsCompleted.includes(id));
    },
    "boss-slayer":    s => s.progress.levelsCompleted.some(id => id.endsWith("-B") || id.endsWith("-F"))
  };

  function checkBadges() {
    const s = state;
    const newlyEarned = [];
    for (const [badgeId, check] of Object.entries(BADGE_CRITERIA)) {
      if (!s.progress.badgesEarned.includes(badgeId) && check(s)) {
        newlyEarned.push(badgeId);
      }
    }
    if (newlyEarned.length > 0) {
      set(s => ({
        ...s,
        progress: { ...s.progress, badgesEarned: [...s.progress.badgesEarned, ...newlyEarned] }
      }));
    }
    return newlyEarned;
  }

  /* --- World completion --- */
  function checkWorldComplete(worldId) {
    const world = window.PLATFORM_DATA?.worlds?.find(w => w.id === worldId);
    if (!world) return false;
    const allDone = world.levels.every(l => state.progress.levelsCompleted.includes(l.id));
    if (allDone && !state.progress.worldsCompleted.includes(worldId)) {
      set(s => ({
        ...s,
        progress: { ...s.progress, worldsCompleted: [...s.progress.worldsCompleted, worldId] }
      }));
    }
    return allDone;
  }

  /* --- Navigation helpers --- */
  function getNextQuest() {
    const worlds = window.PLATFORM_DATA?.worlds || [];
    for (const world of worlds) {
      for (const level of world.levels) {
        if (!state.progress.levelsCompleted.includes(level.id)) {
          return { world: world.id, level: level.id };
        }
      }
    }
    return null; // all complete
  }

  /* --- Daily challenge --- */
  function getDailyChallenge() {
    const today = new Date().toISOString().slice(0, 10);
    const quizzes = window.QUIZZES || {};
    const allQuestions = [];
    for (const [lessonId, questions] of Object.entries(quizzes)) {
      questions.forEach(q => allQuestions.push({ lessonId, question: q }));
    }
    if (allQuestions.length === 0) return null;

    // Deterministic seed from date
    let seed = 0;
    for (let i = 0; i < today.length; i++) seed = ((seed << 5) - seed + today.charCodeAt(i)) | 0;
    seed = Math.abs(seed);
    const idx = seed % allQuestions.length;
    const picked = allQuestions[idx];
    const done = state.progress.dailyChallengeDate === today;
    return { lessonId: picked.lessonId, question: picked.question, done };
  }

  function completeDailyChallenge(correct) {
    const today = new Date().toISOString().slice(0, 10);
    set(s => ({
      ...s,
      progress: {
        ...s.progress,
        dailyChallengeDate: today,
        dailyChallengeCorrect: s.progress.dailyChallengeCorrect + (correct ? 1 : 0)
      }
    }));
  }

  /* --- Glossary & onboarding --- */
  function viewGlossaryTerm(term) {
    if (state.progress.glossaryViewed.includes(term)) return;
    set(s => ({
      ...s,
      progress: { ...s.progress, glossaryViewed: [...s.progress.glossaryViewed, term] }
    }));
  }

  function markSectionRead(lessonId, sectionIdx) {
    set(s => {
      const current = s.progress.sectionsRead[lessonId] || [];
      if (current.includes(sectionIdx)) return s;
      return {
        ...s,
        progress: {
          ...s.progress,
          sectionsRead: { ...s.progress.sectionsRead, [lessonId]: [...current, sectionIdx] }
        }
      };
    });
  }

  function markOnboardingDone() {
    set(s => ({ ...s, progress: { ...s.progress, onboardingDone: true } }));
  }

  /* Init theme from storage on boot */
  document.documentElement.setAttribute('data-theme', state.settings.theme);

  return {
    get, set, subscribe,
    awardXP, awardCoins, completeLevel, setCharacter, setUsername, setTheme, reset,
    updateStreak, trackCombo, getComboMultiplier, checkBadges,
    checkWorldComplete, getNextQuest, getDailyChallenge, completeDailyChallenge,
    viewGlossaryTerm, markSectionRead, markOnboardingDone
  };
})();

/* Tiny React hook helper */
window.useAppState = function useAppState() {
  const [, force] = React.useState(0);
  React.useEffect(() => window.AppStore.subscribe(() => force(n => n + 1)), []);
  return window.AppStore.get();
};

/* Hash router */
window.useRoute = function useRoute() {
  const [route, setRoute] = React.useState(() => window.location.hash.slice(1) || "/");
  React.useEffect(() => {
    const onHash = () => setRoute(window.location.hash.slice(1) || "/");
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return route;
};

window.navigate = function navigate(path) {
  window.location.hash = path;
  window.scrollTo(0, 0);
};
