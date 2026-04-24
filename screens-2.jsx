/* ============================================================
   SCREENS PART 2 — Lesson (content + quiz), Profile, Badges
   ============================================================ */

/* ============ 5. LESSON (content + quiz + code) ============ */
function ScreenLesson({ lessonId }) {
  const lesson = LESSONS[lessonId];
  const state = useAppState();
  const [phase, setPhase] = React.useState('read'); // read | code | quiz | results
  const [quizIdx, setQuizIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [showExplain, setShowExplain] = React.useState(false);
  const [coinPops, setCoinPops] = React.useState([]);
  const [qBlockHit, setQBlockHit] = React.useState(false);

  if (!lesson) {
    return (
      <div className="screen" style={{ paddingTop: 120, textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-pixel)' }}>Lesson not ready</h2>
        <p>We're still building this one. Try 1-1, 1-2, or 1-3!</p>
        <button onClick={() => navigate('/map')} className="btn">← BACK</button>
      </div>
    );
  }

  const char = PLATFORM_DATA.characters.find(c => c.id === lesson.companion);
  const level = PLATFORM_DATA.worlds.find(w => w.id === lesson.world)?.levels.find(l => l.id === lesson.id);

  const answer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplain(true);
    const correct = idx === lesson.quiz[quizIdx].correct;
    if (correct) {
      SFX?.correct?.();
      const id = Date.now();
      setCoinPops(p => [...p, { id, x: 50 + Math.random() * 20 - 10 }]);
      setTimeout(() => setCoinPops(p => p.filter(x => x.id !== id)), 1200);
      setQBlockHit(true);
      setTimeout(() => setQBlockHit(false), 200);
    } else {
      SFX?.wrong?.();
    }
    setAnswers(a => [...a, { q: quizIdx, correct }]);
  };

  const nextQuiz = () => {
    setSelected(null); setShowExplain(false);
    if (quizIdx < lesson.quiz.length - 1) {
      setQuizIdx(quizIdx + 1);
    } else {
      // finish
      const correctCount = answers.filter(a => a.correct).length + (selected === lesson.quiz[quizIdx].correct ? 1 : 0);
      const stars = correctCount === lesson.quiz.length ? 3 : correctCount >= lesson.quiz.length - 1 ? 2 : 1;
      const rewards = level ? { xp: Math.round(level.xp * (stars/3)), coins: Math.round(level.coins * (stars/3)) } : { xp: 100, coins: 20 };
      AppStore.completeLevel(lesson.id, stars, rewards);
      setPhase('results');
    }
  };

  /* ---- RESULTS PHASE ---- */
  if (phase === 'results') {
    const correctCount = answers.filter(a => a.correct).length;
    const stars = correctCount === lesson.quiz.length ? 3 : correctCount >= lesson.quiz.length - 1 ? 2 : 1;
    const xpEarned = level ? Math.round(level.xp * (stars/3)) : 100;
    const coinsEarned = level ? Math.round(level.coins * (stars/3)) : 20;

    return (
      <div className="screen" style={{ paddingTop: 120, textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 680 }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 14, color: 'var(--accent-2)', marginBottom: 16, letterSpacing: '0.2em' }}>
            LEVEL {lesson.id} COMPLETE!
          </div>
          <h1 style={{ fontFamily: 'var(--font-pixel)', fontSize: 42, color: 'var(--accent)', margin: 0, textShadow: '4px 4px 0 #000' }}>
            🎉 COURSE CLEAR! 🎉
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 40, marginBottom: 40 }}>
            {[1, 2, 3].map(s => (
              <div key={s} style={{
                transform: s <= stars ? 'scale(1)' : 'scale(0.6)',
                opacity: s <= stars ? 1 : 0.3,
                transition: `all 0.5s ${s * 0.3}s`,
                animation: s <= stars ? `slide-up 0.6s ${s * 0.3}s both` : 'none'
              }}>
                <PixelStar size={88}/>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: 28, marginBottom: 32 }}>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 14, marginBottom: 20 }}>REWARDS EARNED</div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 40 }}>⚡</div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 18, color: 'var(--accent)', marginTop: 4 }}>+{xpEarned} XP</div>
              </div>
              <div>
                <PixelCoin size={48}/>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 18, color: 'var(--accent-2)', marginTop: 4 }}>+{coinsEarned}</div>
              </div>
              <div>
                <div style={{ fontSize: 40 }}>{correctCount}/{lesson.quiz.length}</div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, marginTop: 4 }}>CORRECT</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button onClick={() => { SFX?.click?.(); navigateWithWarp(`/world/${lesson.world}`); }} className="btn">◀ WORLD MAP</button>
            <button onClick={() => { SFX?.click?.(); navigateWithWarp('/profile'); }} className="btn btn-primary">PROFILE ▶</button>
          </div>
        </div>
      </div>
    );
  }

  /* ---- READ PHASE ---- */
  if (phase === 'read') {
    return (
      <div className="screen" style={{ paddingTop: 90, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 920 }}>
          <button onClick={() => { SFX?.click?.(); navigateWithWarp(`/world/${lesson.world}`); }} style={{
            fontFamily: 'var(--font-pixel)', fontSize: 10, background: 'transparent',
            border: '3px solid var(--text)', color: 'var(--text)', padding: '8px 14px',
            cursor: 'pointer', marginBottom: 20
          }}>◀ LEVEL SELECT</button>

          {/* Header */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--accent-2)', marginBottom: 8, letterSpacing: '0.2em' }}>
              LEVEL {lesson.id} · {lesson.topic.toUpperCase()}
            </div>
            <h1 style={{ fontFamily: 'var(--font-pixel)', fontSize: 28, color: 'var(--accent)', margin: 0, lineHeight: 1.3, textShadow: '3px 3px 0 #000' }}>
              {lesson.title}
            </h1>
            <div style={{ display: 'flex', gap: 12, marginTop: 12, fontFamily: 'var(--font-pixel)', fontSize: 10 }}>
              <span className="chip">⏱️ {lesson.estimatedMin} MIN</span>
              <span className="chip">❓ {lesson.quiz.length} QUESTIONS</span>
              <span className="chip">🪙 UP TO {level?.coins || 30}</span>
            </div>
          </div>

          {/* Prologue panel with companion */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 24,
            background: 'var(--card-bg)', border: '4px solid var(--card-border)',
            padding: 24, boxShadow: 'var(--card-shadow)', marginBottom: 32
          }}>
            <div style={{ width: 96, textAlign: 'center' }}>
              <CharacterAvatar charId={char.id} size={80}/>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, marginTop: 8, color: char.color }}>
                {char.name.toUpperCase()}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--text-muted)', marginBottom: 8 }}>
                ~ PROLOGUE ~
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, color: 'var(--text)' }}>{lesson.prologue}</p>
            </div>
          </div>

          {/* Sections */}
          {lesson.sections.map((sec, i) => (
            <div key={i} className="card" style={{ marginBottom: 20, padding: 24 }}>
              <h3 style={{ fontFamily: 'var(--font-pixel)', fontSize: 15, color: 'var(--accent)', margin: '0 0 12px', textShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}>
                {sec.heading}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, color: 'var(--text)' }}>{sec.body}</p>
            </div>
          ))}

          {/* Code example */}
          <div style={{
            background: '#0D1117', color: '#E6EDF3', border: '4px solid #000',
            borderRadius: 'var(--btn-radius)', marginBottom: 32, overflow: 'hidden',
            boxShadow: 'var(--card-shadow)'
          }}>
            <div style={{
              background: '#161B22', padding: '10px 16px', borderBottom: '3px solid #30363D',
              display: 'flex', alignItems: 'center', gap: 10,
              fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--accent-2)'
            }}>
              <span style={{ fontSize: 14 }}>💻</span>
              {lesson.codeExample.title.toUpperCase()}
              <span style={{ marginLeft: 'auto', fontSize: 8, color: '#8B949E' }}>{lesson.codeExample.lang.toUpperCase()}</span>
            </div>
            <pre style={{
              margin: 0, padding: 20, fontFamily: 'var(--font-mono)', fontSize: 13,
              lineHeight: 1.6, overflow: 'auto'
            }}>{lesson.codeExample.code}</pre>
          </div>

          {/* Continue */}
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => setPhase('quiz')} className="btn btn-primary" style={{ fontSize: 16, padding: '16px 32px' }}>
              ▶ START QUIZ
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ---- QUIZ PHASE ---- */
  const q = lesson.quiz[quizIdx];
  return (
    <div className="screen" style={{ paddingTop: 100, paddingBottom: 80, position: 'relative' }}>
      {/* Coin pops */}
      {coinPops.map(cp => (
        <div key={cp.id} style={{
          position: 'fixed', left: `${cp.x}%`, top: '50%',
          animation: 'coin-pop 1.2s ease-out forwards', zIndex: 500
        }}>
          <PixelCoin size={40}/>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 14, color: 'var(--accent-2)', textShadow: '2px 2px 0 #000', marginTop: -6 }}>+10</div>
        </div>
      ))}

      <div className="container" style={{ maxWidth: 820 }}>
        {/* Progress */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-pixel)', fontSize: 10, marginBottom: 8 }}>
            <span>QUESTION {quizIdx + 1} / {lesson.quiz.length}</span>
            <span>❤️❤️❤️</span>
          </div>
          <div className="progress-bar">
            <div className="fill" style={{ width: `${((quizIdx) / lesson.quiz.length) * 100}%` }}></div>
          </div>
        </div>

        {/* Q-block with question */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ display: 'inline-block', marginBottom: 20 }}>
            <PixelQBlock size={64} hit={qBlockHit}/>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-pixel)', fontSize: 18, color: 'var(--text)',
            margin: 0, lineHeight: 1.5, textShadow: '2px 2px 0 rgba(0,0,0,0.2)'
          }}>{q.q}</h2>
        </div>

        {/* Options */}
        <div style={{ display: 'grid', gap: 12, marginBottom: 24 }}>
          {q.options.map((opt, i) => {
            const isSelected = selected === i;
            const isCorrect = i === q.correct;
            const show = selected !== null;
            let bg = 'var(--card-bg)';
            let color = 'var(--text)';
            if (show) {
              if (isCorrect) { bg = '#43B047'; color = '#fff'; }
              else if (isSelected) { bg = '#E52521'; color = '#fff'; }
            }
            return (
              <button key={i} onClick={() => answer(i)} disabled={show} style={{
                padding: '18px 24px', textAlign: 'left',
                fontFamily: 'var(--font-ui)', fontSize: 15,
                background: bg, color,
                border: '4px solid var(--card-border)',
                boxShadow: isSelected ? '3px 3px 0 #000' : '6px 6px 0 #000',
                cursor: show ? 'default' : 'pointer',
                transform: show && isSelected ? 'translate(3px, 3px)' : 'none',
                transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: 14
              }}>
                <span style={{
                  fontFamily: 'var(--font-pixel)', fontSize: 14,
                  width: 34, height: 34, borderRadius: '50%',
                  background: show && isCorrect ? '#fff' : 'var(--accent-2)',
                  color: '#000', display: 'inline-flex',
                  alignItems: 'center', justifyContent: 'center',
                  border: '3px solid #000', flexShrink: 0
                }}>{String.fromCharCode(65 + i)}</span>
                <span>{opt}</span>
                {show && isCorrect && <span style={{ marginLeft: 'auto', fontSize: 22 }}>✅</span>}
                {show && isSelected && !isCorrect && <span style={{ marginLeft: 'auto', fontSize: 22 }}>❌</span>}
              </button>
            );
          })}
        </div>

        {/* Explanation + next */}
        {showExplain && (
          <div className="card" style={{
            padding: 20, marginBottom: 20,
            borderLeft: '8px solid var(--accent-2)',
            animation: 'slide-up 0.3s ease-out'
          }}>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--accent)', marginBottom: 8 }}>
              💡 EXPLANATION
            </div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>{q.explain}</p>
          </div>
        )}
        {showExplain && (
          <div style={{ textAlign: 'center' }}>
            <button onClick={nextQuiz} className="btn btn-primary" style={{ fontSize: 16 }}>
              {quizIdx < lesson.quiz.length - 1 ? 'NEXT QUESTION ▶' : 'FINISH LEVEL ▶'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ============ 6. PROFILE / DASHBOARD ============ */
function ScreenProfile() {
  const state = useAppState();
  const char = PLATFORM_DATA.characters.find(c => c.id === state.player.character);
  const totalLevels = PLATFORM_DATA.worlds.reduce((sum, w) => sum + w.levels.length, 0);
  const earnedBadges = PLATFORM_DATA.badges.filter(b => b.earned).length;
  const xpPercent = Math.min(100, (state.player.xp / state.player.xpToNext) * 100);

  return (
    <div className="screen" style={{ paddingTop: 90, paddingBottom: 80 }}>
      <div className="container" style={{ maxWidth: 1200 }}>
        <NavPill>
          <NavBtn to="/map" label="MAP" icon="🗺️"/>
          <NavBtn to="/profile" label="PROFILE" icon="👤" current="/profile"/>
          <NavBtn to="/badges" label="BADGES" icon="🏆"/>
          <NavBtn to="/leaderboard" label="RANKING" icon="📊"/>
          <NavBtn to="/shop" label="SHOP" icon="🪙"/>
          <NavBtn to="/glossary" label="GLOSSARY" icon="📖"/>
        </NavPill>

        <Breadcrumbs items={[
          { label: 'MAP', icon: '🗺️', to: '/map' },
          { label: 'PROFILE', icon: '👤' }
        ]}/>
        <NextQuest/>

        {/* Hero profile card */}
        <div className="card" style={{ padding: 32, marginBottom: 24, background: `linear-gradient(135deg, ${char.color} 0%, ${char.color}dd 100%)`, color: '#fff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 32, alignItems: 'center' }}>
            <div style={{ filter: 'drop-shadow(3px 3px 0 #000)' }}><CharacterAvatar charId={char.id} size={120}/></div>
            <div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, opacity: 0.9, letterSpacing: '0.2em' }}>
                {char.role.toUpperCase()}
              </div>
              <h1 style={{ fontFamily: 'var(--font-pixel)', fontSize: 34, margin: '8px 0', textShadow: '3px 3px 0 #000' }}>
                {state.player.username.toUpperCase()}
              </h1>
              <div style={{ display: 'flex', gap: 12, fontFamily: 'var(--font-pixel)', fontSize: 10 }}>
                <span style={{ background: 'rgba(0,0,0,0.3)', padding: '6px 10px', border: '2px solid #000' }}>
                  LVL {state.player.level}
                </span>
                <span style={{ background: 'rgba(0,0,0,0.3)', padding: '6px 10px', border: '2px solid #000' }}>
                  🔥 {state.progress.levelsCompleted.length}/{totalLevels} LESSONS
                </span>
                <span style={{ background: 'rgba(0,0,0,0.3)', padding: '6px 10px', border: '2px solid #000' }}>
                  🏆 {earnedBadges}/{PLATFORM_DATA.badges.length} BADGES
                </span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 56, lineHeight: 1 }}>⚡</div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 24, marginTop: 4, textShadow: '2px 2px 0 #000' }}>
                {state.player.xp}
              </div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, opacity: 0.9 }}>
                / {state.player.xpToNext} TO NEXT LVL
              </div>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <div className="progress-bar" style={{ borderColor: '#000' }}>
              <div className="fill" style={{ width: `${xpPercent}%` }}></div>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
          {[
            { icon: '⚡', label: 'TOTAL XP', val: state.player.xp + state.player.level * 200 - 200 },
            { icon: '🪙', label: 'COINS', val: state.player.coins },
            { icon: '🏆', label: 'BADGES', val: `${earnedBadges}/${PLATFORM_DATA.badges.length}` },
            { icon: '🔥', label: 'STREAK', val: `${state.player.streak} DAYS` }
          ].map(s => (
            <div key={s.label} className="card" style={{ padding: 20, textAlign: 'center' }}>
              <div style={{ fontSize: 32 }}>{s.icon}</div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 22, color: 'var(--accent)', marginTop: 6 }}>{s.val}</div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--text-muted)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Current quest */}
        <div className="card" style={{ padding: 24, marginBottom: 24 }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--accent-2)', marginBottom: 12, letterSpacing: '0.2em' }}>
            CURRENT QUEST
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-pixel)', fontSize: 16, margin: '0 0 4px' }}>LEVEL 1-3 — GITHUB</h3>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>The Cloud Castle · Push, Pull, PRs</div>
            </div>
            <button onClick={() => { SFX?.click?.(); navigateWithWarp('/lesson/1-3'); }} className="btn btn-primary">▶ RESUME</button>
          </div>
        </div>

        {/* Recent lessons */}
        <div className="card" style={{ padding: 24 }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--accent-2)', marginBottom: 16, letterSpacing: '0.2em' }}>
            RECENT LEVELS
          </div>
          {PLATFORM_DATA.worlds[0].levels.slice(0, 3).map((lvl, i) => (
            <div key={lvl.id} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '14px 0', borderBottom: i < 2 ? '2px dashed rgba(0,0,0,0.15)' : 'none'
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--accent)' }}>LVL {lvl.id}</div>
                <div style={{ fontSize: 14, marginTop: 2 }}>{lvl.title} — {lvl.topic}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-pixel)', fontSize: 10 }}>
                {lvl.status === 'complete' && <span>⭐⭐⭐</span>}
                {lvl.status === 'active' && <span style={{ color: 'var(--accent)' }}>▶ PLAYING</span>}
                {lvl.status === 'locked' && <span style={{ opacity: 0.4 }}>🔒</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenLesson, ScreenProfile });
