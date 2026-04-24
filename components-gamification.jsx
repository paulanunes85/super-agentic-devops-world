/* ============================================================
   GAMIFICATION COMPONENTS — Badge Unlock, World Clear,
   Combo Display, Daily Challenge
   ============================================================ */

const { useState, useEffect, useRef, useCallback } = React;

/* ============ BADGE UNLOCK OVERLAY ============ */

function BadgeUnlock({ badge, onDone }) {
  useEffect(() => {
    SFX?.fanfare?.();
  }, []);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(0,0,0,0.85)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 24, padding: 32
    }}>
      {/* Title */}
      <div style={{
        fontFamily: 'var(--font-pixel)', fontSize: 14, color: '#FBD000',
        letterSpacing: '0.15em', textTransform: 'uppercase',
        textShadow: '0 0 16px rgba(251,208,0,0.6)',
        animation: 'blink 1.2s ease-in-out infinite'
      }}>
        ACHIEVEMENT UNLOCKED!
      </div>

      {/* Badge icon with mushroom-grow + gold glow */}
      <div style={{
        fontSize: 128, lineHeight: 1,
        animation: 'mushroomGrow 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards',
        filter: 'drop-shadow(0 0 24px rgba(251,208,0,0.7)) drop-shadow(0 0 48px rgba(251,208,0,0.4))'
      }}>
        {badge.icon}
      </div>

      {/* Badge name */}
      <div style={{
        fontFamily: 'var(--font-pixel)', fontSize: 18, color: '#FFFFFF',
        textAlign: 'center', letterSpacing: '0.1em',
        textShadow: '3px 3px 0 #000'
      }}>
        {badge.name}
      </div>

      {/* Badge description */}
      <div style={{
        fontFamily: 'var(--font-ui)', fontSize: 16, color: '#BBB',
        textAlign: 'center', maxWidth: 400
      }}>
        {badge.desc}
      </div>

      {/* Continue button */}
      <button onClick={onDone} style={{
        marginTop: 16, padding: '14px 40px',
        fontFamily: 'var(--font-pixel)', fontSize: 12,
        background: '#FBD000', color: '#000',
        border: '4px solid #000', cursor: 'pointer',
        boxShadow: '6px 6px 0 #000', letterSpacing: '0.1em'
      }}>
        CONTINUE
      </button>

      {/* Inline animation keyframes */}
      <style>{`
        @keyframes mushroomGrow {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* ============ WORLD CLEAR OVERLAY ============ */

function WorldClear({ world, stats, onDone }) {
  useEffect(() => {
    SFX?.fanfare?.();
  }, []);

  const FIREWORK_COLORS = ['#E52521', '#FBD000', '#43B047', '#049CD8', '#FF2E88', '#FF6B35'];
  const fireworks = useRef(
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 60 + 10,
      color: FIREWORK_COLORS[i % FIREWORK_COLORS.length],
      delay: Math.random() * 2,
      size: Math.random() * 6 + 4
    }))
  ).current;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(0,0,0,0.85)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 20, padding: 32, overflow: 'hidden'
    }}>
      {/* Firework particles */}
      {fireworks.map(fw => (
        <div key={fw.id} style={{
          position: 'absolute',
          left: `${fw.left}%`, top: `${fw.top}%`,
          width: fw.size, height: fw.size,
          borderRadius: '50%',
          background: fw.color,
          animation: `fireworkPop 1.4s ease-out ${fw.delay}s infinite`,
          pointerEvents: 'none'
        }} />
      ))}

      {/* World icon */}
      <div style={{ fontSize: 80, lineHeight: 1 }}>
        {world.icon}
      </div>

      {/* Title */}
      <div style={{
        fontFamily: 'var(--font-pixel)', fontSize: 18, color: '#FBD000',
        letterSpacing: '0.15em', textTransform: 'uppercase',
        textShadow: '0 0 16px rgba(251,208,0,0.6)'
      }}>
        WORLD CLEAR!
      </div>

      {/* World name */}
      <div style={{
        fontFamily: 'var(--font-pixel)', fontSize: 13, color: '#FFF',
        textShadow: '3px 3px 0 #000', letterSpacing: '0.08em'
      }}>
        {world.name}
      </div>

      {/* Stats card */}
      <div style={{
        background: 'rgba(255,255,255,0.08)',
        border: '3px solid rgba(251,208,0,0.4)',
        padding: '20px 32px', minWidth: 240,
        display: 'flex', flexDirection: 'column', gap: 12,
        alignItems: 'center'
      }}>
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: '#FBD000', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>⚡</span> XP EARNED: <span style={{ color: '#FFF' }}>+{stats.xp}</span>
        </div>
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: '#FBD000', display: 'flex', alignItems: 'center', gap: 8 }}>
          <PixelCoin size={16} /> COINS: <span style={{ color: '#FFF' }}>+{stats.coins}</span>
        </div>
        <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: '#FBD000', display: 'flex', alignItems: 'center', gap: 8 }}>
          <PixelStar size={16} /> STARS: <span style={{ color: '#FFF' }}>{stats.stars}</span>
        </div>
      </div>

      {/* Continue button */}
      <button onClick={onDone} style={{
        marginTop: 12, padding: '14px 40px',
        fontFamily: 'var(--font-pixel)', fontSize: 12,
        background: '#FBD000', color: '#000',
        border: '4px solid #000', cursor: 'pointer',
        boxShadow: '6px 6px 0 #000', letterSpacing: '0.1em'
      }}>
        CONTINUE
      </button>

      {/* Firework animation */}
      <style>{`
        @keyframes fireworkPop {
          0%   { transform: translateY(0) scale(1); opacity: 1; }
          50%  { transform: translateY(-40px) scale(1.8); opacity: 0.8; }
          100% { transform: translateY(-80px) scale(0.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ============ COMBO DISPLAY ============ */

function ComboDisplay({ combo }) {
  if (combo < 2) return null;

  let multiplier, fontSize, glowSize;
  if (combo >= 5) {
    multiplier = 3;
    fontSize = 28;
    glowSize = '0 0 24px rgba(255,46,136,0.8), 0 0 48px rgba(255,46,136,0.4)';
  } else if (combo >= 3) {
    multiplier = 2;
    fontSize = 22;
    glowSize = '0 0 16px rgba(251,208,0,0.7), 0 0 32px rgba(251,208,0,0.3)';
  } else {
    multiplier = 1.5;
    fontSize = 16;
    glowSize = '0 0 10px rgba(67,176,71,0.6), 0 0 20px rgba(67,176,71,0.3)';
  }

  const color = combo >= 5 ? '#FF2E88' : combo >= 3 ? '#FBD000' : '#43B047';

  return (
    <div style={{
      fontFamily: 'var(--font-pixel)', fontSize,
      color, letterSpacing: '0.1em',
      textShadow: glowSize,
      animation: 'shake 0.3s ease-in-out',
      textAlign: 'center', padding: '8px 0'
    }}>
      COMBO &times;{multiplier}!
    </div>
  );
}

/* ============ DAILY CHALLENGE ============ */

function DailyChallenge() {
  const state = useAppState();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const challenge = AppStore.getDailyChallenge();
  if (!challenge) return null;

  const isDone = challenge.done;
  const question = challenge.question;

  const handleOpen = () => {
    if (isDone) return;
    SFX?.click?.();
    setOpen(true);
  };

  const handleAnswer = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);

    const correct = idx === question.correct;
    if (correct) {
      SFX?.powerUp?.();
      AppStore.awardCoins(30);   // x3 coins (base 10)
      AppStore.awardXP(60);      // x2 XP (base 30)
    } else {
      SFX?.wrong?.();
    }
    AppStore.completeDailyChallenge(correct);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
    setAnswered(false);
  };

  /* --- Closed state: Q-Block button --- */
  if (!open) {
    return (
      <div onClick={handleOpen} style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: 6, cursor: isDone ? 'default' : 'pointer',
        animation: isDone ? 'none' : 'dailyFloat 2s ease-in-out infinite',
        filter: isDone ? 'grayscale(0.6) brightness(0.7)' : 'drop-shadow(0 0 12px rgba(251,208,0,0.5))'
      }}>
        <PixelQBlock size={56} hit={isDone} />
        <div style={{
          fontFamily: 'var(--font-pixel)', fontSize: 8,
          color: isDone ? '#888' : '#FBD000',
          letterSpacing: '0.12em',
          textShadow: isDone ? 'none' : '0 0 8px rgba(251,208,0,0.5)'
        }}>
          {isDone ? 'DONE' : 'DAILY'}
        </div>

        <style>{`
          @keyframes dailyFloat {
            0%, 100% { transform: translateY(0); }
            50%      { transform: translateY(-6px); }
          }
        `}</style>
      </div>
    );
  }

  /* --- Open state: Full-screen quiz overlay --- */
  const isCorrect = selected === question.correct;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9998,
      background: 'rgba(0,0,0,0.88)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 20, padding: 32
    }}>
      {/* Header */}
      <div style={{
        fontFamily: 'var(--font-pixel)', fontSize: 14, color: '#FBD000',
        letterSpacing: '0.12em', textShadow: '0 0 12px rgba(251,208,0,0.5)'
      }}>
        DAILY CHALLENGE
      </div>

      <div style={{
        fontFamily: 'var(--font-pixel)', fontSize: 8, color: '#AAA',
        letterSpacing: '0.08em'
      }}>
        BONUS: x3 COINS &bull; x2 XP
      </div>

      {/* Question card */}
      <div style={{
        background: 'rgba(255,255,255,0.06)',
        border: '3px solid rgba(251,208,0,0.3)',
        padding: '24px 28px', maxWidth: 520, width: '100%'
      }}>
        <div style={{
          fontFamily: 'var(--font-ui)', fontSize: 16, color: '#FFF',
          lineHeight: 1.6, marginBottom: 20
        }}>
          {question.q}
        </div>

        {/* Answer options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {question.options.map((opt, idx) => {
            let bg = 'rgba(255,255,255,0.04)';
            let borderColor = 'rgba(255,255,255,0.15)';

            if (answered) {
              if (idx === question.correct) {
                bg = 'rgba(67,176,71,0.25)';
                borderColor = '#43B047';
              } else if (idx === selected && idx !== question.correct) {
                bg = 'rgba(229,37,33,0.25)';
                borderColor = '#E52521';
              }
            }

            return (
              <button key={idx} onClick={() => handleAnswer(idx)} style={{
                padding: '12px 16px', textAlign: 'left',
                fontFamily: 'var(--font-ui)', fontSize: 14, color: '#FFF',
                background: bg,
                border: `2px solid ${borderColor}`,
                cursor: answered ? 'default' : 'pointer',
                transition: 'all 0.2s'
              }}>
                {String.fromCharCode(65 + idx)}. {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanation + result (shown after answer) */}
      {answered && (
        <div style={{
          maxWidth: 520, width: '100%',
          padding: '16px 20px',
          background: isCorrect ? 'rgba(67,176,71,0.12)' : 'rgba(229,37,33,0.12)',
          border: `2px solid ${isCorrect ? '#43B047' : '#E52521'}`,
        }}>
          <div style={{
            fontFamily: 'var(--font-pixel)', fontSize: 12,
            color: isCorrect ? '#43B047' : '#E52521',
            marginBottom: 8
          }}>
            {isCorrect ? 'CORRECT! +30 COINS +60 XP' : 'WRONG!'}
          </div>
          {question.explanation && (
            <div style={{
              fontFamily: 'var(--font-ui)', fontSize: 14, color: '#CCC',
              lineHeight: 1.5
            }}>
              {question.explanation}
            </div>
          )}
        </div>
      )}

      {/* Close button (only after answering) */}
      {answered && (
        <button onClick={handleClose} style={{
          marginTop: 8, padding: '12px 36px',
          fontFamily: 'var(--font-pixel)', fontSize: 11,
          background: '#FBD000', color: '#000',
          border: '4px solid #000', cursor: 'pointer',
          boxShadow: '6px 6px 0 #000', letterSpacing: '0.1em'
        }}>
          CLOSE
        </button>
      )}
    </div>
  );
}

/* Export globals */
Object.assign(window, { BadgeUnlock, WorldClear, ComboDisplay, DailyChallenge });
