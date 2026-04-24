/* ============================================================
   NAVIGATION COMPONENTS — Breadcrumbs, Search, Next Quest,
   Mini Progress, Onboarding, Shortcuts Help
   ============================================================ */

const { useState, useEffect, useRef, useCallback } = React;

/* ============ BREADCRUMBS ============ */

function Breadcrumbs({ items }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap',
      fontFamily: 'var(--font-pixel)', fontSize: 9, letterSpacing: '0.05em',
      padding: '8px 0', color: 'var(--text)', opacity: 0.85
    }}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {i > 0 && <span style={{ color: '#888', margin: '0 2px' }}>›</span>}
            {item.to && !isLast ? (
              <span
                onClick={() => { SFX?.click?.(); navigateWithWarp(item.to); }}
                style={{
                  cursor: 'pointer', color: 'var(--accent-2)',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4
                }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </span>
            ) : (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--text)' }}>
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ============ SEARCH OVERLAY ============ */

function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const results = React.useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const found = [];

    // Search lessons
    const worlds = PLATFORM_DATA?.worlds || [];
    for (const world of worlds) {
      for (const level of world.levels) {
        if (
          level.title.toLowerCase().includes(q) ||
          level.topic.toLowerCase().includes(q) ||
          level.id.toLowerCase().includes(q)
        ) {
          found.push({
            category: 'LESSON',
            label: `${level.id} — ${level.title}`,
            sub: level.topic,
            to: `/lesson/${level.id}`
          });
        }
        if (found.length >= 15) break;
      }
      if (found.length >= 15) break;
    }

    // Search glossary
    if (found.length < 15) {
      const glossary = PLATFORM_DATA?.glossary || [];
      for (const entry of glossary) {
        if (
          entry.term.toLowerCase().includes(q) ||
          entry.def.toLowerCase().includes(q)
        ) {
          found.push({
            category: 'GLOSSARY',
            label: entry.term,
            sub: entry.def.length > 60 ? entry.def.slice(0, 60) + '...' : entry.def,
            to: '/glossary'
          });
        }
        if (found.length >= 15) break;
      }
    }

    // Search worlds
    if (found.length < 15) {
      for (const world of worlds) {
        if (world.name.toLowerCase().includes(q) || world.subtitle.toLowerCase().includes(q)) {
          found.push({
            category: 'WORLD',
            label: `${world.icon} ${world.name}`,
            sub: world.subtitle,
            to: `/world/${world.id}`
          });
        }
        if (found.length >= 15) break;
      }
    }

    return found.slice(0, 15);
  }, [query]);

  // Group results by category
  const grouped = {};
  results.forEach(r => {
    if (!grouped[r.category]) grouped[r.category] = [];
    grouped[r.category].push(r);
  });

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(0,0,0,0.88)', display: 'flex',
      flexDirection: 'column', alignItems: 'center', paddingTop: 80
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: '90%', maxWidth: 600
      }}>
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search lessons, glossary, worlds..."
          style={{
            width: '100%', padding: '16px 20px',
            fontFamily: 'var(--font-pixel)', fontSize: 14,
            background: '#1a1a2e', color: '#FFD700',
            border: '3px solid #FFD700', outline: 'none',
            letterSpacing: '0.05em', boxSizing: 'border-box'
          }}
        />

        {results.length > 0 && (
          <div style={{
            marginTop: 8, background: '#1a1a2e', border: '2px solid #333',
            maxHeight: 400, overflowY: 'auto'
          }}>
            {Object.entries(grouped).map(([cat, items]) => (
              <div key={cat}>
                <div style={{
                  padding: '8px 16px', fontFamily: 'var(--font-pixel)', fontSize: 8,
                  color: '#888', letterSpacing: '0.1em', borderBottom: '1px solid #333',
                  textTransform: 'uppercase'
                }}>{cat}</div>
                {items.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => { onClose(); navigateWithWarp(item.to); }}
                    style={{
                      padding: '10px 16px', cursor: 'pointer',
                      borderBottom: '1px solid #222', transition: 'background 0.15s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#2a2a4e'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{
                      fontFamily: 'var(--font-pixel)', fontSize: 10, color: '#FFD700',
                      letterSpacing: '0.05em'
                    }}>{item.label}</div>
                    <div style={{
                      fontFamily: 'var(--font-pixel)', fontSize: 8, color: '#888',
                      marginTop: 2
                    }}>{item.sub}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {query.trim() && results.length === 0 && (
          <div style={{
            marginTop: 8, padding: 20, background: '#1a1a2e',
            border: '2px solid #333', textAlign: 'center',
            fontFamily: 'var(--font-pixel)', fontSize: 10, color: '#888'
          }}>No results found for "{query}"</div>
        )}

        <div style={{
          marginTop: 12, textAlign: 'center',
          fontFamily: 'var(--font-pixel)', fontSize: 8, color: '#666'
        }}>ESC to close</div>
      </div>
    </div>
  );
}

/* ============ NEXT QUEST ============ */

function NextQuest() {
  const state = useAppState();
  const quest = AppStore.getNextQuest();
  if (!quest) return null;

  const world = PLATFORM_DATA?.worlds?.find(w => w.id === quest.world);
  const level = world?.levels?.find(l => l.id === quest.level);
  if (!level) return null;

  return (
    <div
      onClick={() => { SFX?.click?.(); navigateWithWarp(`/lesson/${quest.level}`); }}
      style={{
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '14px 20px', cursor: 'pointer',
        background: 'linear-gradient(90deg, rgba(67,176,71,0.15), rgba(251,208,0,0.10))',
        border: '3px solid var(--card-border)',
        boxShadow: '4px 4px 0 #000', marginBottom: 24,
        transition: 'transform 0.15s'
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'none'}
    >
      <CharacterAvatar charId={state.player.character} size={48}/>
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-pixel)', fontSize: 8, color: '#FFD700',
          letterSpacing: '0.1em', marginBottom: 4
        }}>CONTINUE YOUR QUEST</div>
        <div style={{
          fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--text)',
          letterSpacing: '0.05em'
        }}>
          {level.id} — {level.title}
        </div>
        <div style={{
          fontFamily: 'var(--font-pixel)', fontSize: 8, color: '#888', marginTop: 2
        }}>
          {world.icon} {world.name} &middot; {level.topic}
        </div>
      </div>
      <span style={{
        fontFamily: 'var(--font-pixel)', fontSize: 18, color: '#FFD700',
        animation: 'blink 1s infinite'
      }}>▶</span>
    </div>
  );
}

/* ============ MINI PROGRESS ============ */

function MiniProgress() {
  const state = useAppState();
  const worlds = PLATFORM_DATA?.worlds || [];

  let totalLevels = 0;
  let totalCompleted = 0;

  const bars = worlds.map(world => {
    const levelCount = world.levels.length;
    const completed = world.levels.filter(l =>
      state.progress.levelsCompleted.includes(l.id)
    ).length;
    totalLevels += levelCount;
    totalCompleted += completed;
    const pct = levelCount > 0 ? Math.round((completed / levelCount) * 100) : 0;

    return { world, completed, levelCount, pct };
  });

  const totalPct = totalLevels > 0 ? Math.round((totalCompleted / totalLevels) * 100) : 0;

  return (
    <div style={{
      padding: 16, background: 'var(--card-bg)',
      border: '3px solid var(--card-border)', boxShadow: '4px 4px 0 #000'
    }}>
      <div style={{
        fontFamily: 'var(--font-pixel)', fontSize: 9, color: '#FFD700',
        letterSpacing: '0.1em', marginBottom: 12
      }}>
        PROGRESS &middot; {totalCompleted}/{totalLevels} ({totalPct}%)
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {bars.map(({ world, completed, levelCount, pct }) => (
          <div key={world.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontFamily: 'var(--font-pixel)', fontSize: 8, color: '#888',
              minWidth: 20, textAlign: 'right'
            }}>W{world.id}</span>
            <div style={{
              flex: 1, height: 8, background: '#222', border: '1px solid #444',
              position: 'relative', overflow: 'hidden'
            }}>
              <div style={{
                width: `${pct}%`, height: '100%',
                background: world.color, transition: 'width 0.4s ease'
              }}></div>
            </div>
            <span style={{
              fontFamily: 'var(--font-pixel)', fontSize: 7, color: '#888',
              minWidth: 30
            }}>{completed}/{levelCount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ ONBOARDING ============ */

function Onboarding({ onDone }) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      icon: '🗺️',
      title: 'WELCOME TO THE MAP',
      body: 'This is your world map! Each world contains lessons on DevOps, Cloud, and AI topics. Navigate between worlds to explore new territory.'
    },
    {
      icon: '📖',
      title: 'LESSONS & BOSSES',
      body: 'Each level is a lesson with reading, code examples, and a quiz. Boss levels test everything you learned in that world. Earn stars by acing quizzes!'
    },
    {
      icon: '⭐',
      title: 'XP, COINS & BADGES',
      body: 'Complete lessons to earn XP and coins. Level up, unlock badges, and climb the leaderboard. Spend coins in the shop for power-ups!'
    },
    {
      icon: '🌱',
      title: 'START AT W1-1',
      body: 'Your quest begins at World 1, Level 1: "Pressing START" — learn about VS Code, your game console for coding. Good luck, hero!'
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      AppStore.markOnboardingDone();
      onDone();
    }
  };

  const handleSkip = () => {
    AppStore.markOnboardingDone();
    onDone();
  };

  const current = steps[step];

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9998,
      background: 'rgba(0,0,0,0.92)', display: 'flex',
      alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        width: '90%', maxWidth: 440, padding: 32,
        background: '#1a1a2e', border: '3px solid #FFD700',
        boxShadow: '6px 6px 0 #000', textAlign: 'center'
      }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>{current.icon}</div>
        <div style={{ marginBottom: 16 }}>
          <CharacterAvatar charId="sofia" size={56}/>
        </div>
        <div style={{
          fontFamily: 'var(--font-pixel)', fontSize: 13, color: '#FFD700',
          letterSpacing: '0.08em', marginBottom: 12
        }}>{current.title}</div>
        <div style={{
          fontFamily: 'var(--font-pixel)', fontSize: 9, color: '#ccc',
          lineHeight: 1.7, marginBottom: 24, letterSpacing: '0.03em'
        }}>{current.body}</div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
          <button onClick={handleSkip} style={{
            padding: '8px 18px', fontFamily: 'var(--font-pixel)', fontSize: 9,
            background: 'transparent', color: '#888', border: '2px solid #444',
            cursor: 'pointer', letterSpacing: '0.05em'
          }}>SKIP</button>
          <button onClick={handleNext} style={{
            padding: '8px 24px', fontFamily: 'var(--font-pixel)', fontSize: 10,
            background: '#FFD700', color: '#000', border: '3px solid #C89B00',
            cursor: 'pointer', letterSpacing: '0.05em', fontWeight: 'bold'
          }}>{step === steps.length - 1 ? "LET'S GO!" : 'NEXT'}</button>
        </div>

        {/* Step dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
          {steps.map((_, i) => (
            <div key={i} style={{
              width: 10, height: 10,
              background: i === step ? '#FFD700' : i < step ? '#43B047' : '#444',
              border: '1px solid #000', transition: 'background 0.2s'
            }}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============ SHORTCUTS HELP ============ */

function ShortcutsHelp({ onClose }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const shortcuts = [
    { key: 'M', desc: 'Map' },
    { key: 'P', desc: 'Profile' },
    { key: 'N', desc: 'Next Lesson' },
    { key: '/', desc: 'Search' },
    { key: '?', desc: 'This Help' },
    { key: '1-8', desc: 'Jump to World' },
    { key: 'ESC', desc: 'Close' }
  ];

  const keyStyle = {
    display: 'inline-block',
    padding: '3px 8px',
    fontFamily: 'var(--font-pixel)',
    fontSize: 9,
    background: '#FFD700',
    color: '#000',
    border: '2px solid #C89B00',
    boxShadow: '2px 2px 0 #000',
    minWidth: 20,
    textAlign: 'center',
    letterSpacing: '0.05em',
    fontWeight: 'bold'
  };

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(0,0,0,0.85)', display: 'flex',
      alignItems: 'center', justifyContent: 'center'
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: '90%', maxWidth: 360, padding: 24,
        background: '#1a1a2e', border: '3px solid #FFD700',
        boxShadow: '6px 6px 0 #000'
      }}>
        <div style={{
          fontFamily: 'var(--font-pixel)', fontSize: 12, color: '#FFD700',
          letterSpacing: '0.08em', marginBottom: 20, textAlign: 'center'
        }}>KEYBOARD SHORTCUTS</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {shortcuts.map(s => (
            <div key={s.key} style={{
              display: 'flex', alignItems: 'center', gap: 12
            }}>
              <span style={keyStyle}>{s.key}</span>
              <span style={{
                fontFamily: 'var(--font-pixel)', fontSize: 9, color: '#ccc',
                letterSpacing: '0.05em'
              }}>{s.desc}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 20, textAlign: 'center' }}>
          <button onClick={onClose} style={{
            padding: '8px 20px', fontFamily: 'var(--font-pixel)', fontSize: 9,
            background: 'transparent', color: '#FFD700', border: '2px solid #FFD700',
            cursor: 'pointer', letterSpacing: '0.05em'
          }}>CLOSE</button>
        </div>
      </div>
    </div>
  );
}

/* Export globals */
Object.assign(window, { Breadcrumbs, SearchOverlay, NextQuest, MiniProgress, Onboarding, ShortcutsHelp });
