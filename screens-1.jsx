/* ============================================================
   SCREENS PART 1 — Landing, Login, Map, Level, Lesson
   ============================================================ */

/* ============ 1. LANDING / START SCREEN ============ */
function ScreenLanding() {
  const [pressed, setPressed] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Enter' || e.key === ' ') handleStart(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleStart = () => {
    setPressed(true);
    SFX?.jump?.();
    setTimeout(() => navigateWithWarp('/login'), 800);
  };

  return (
    <div className="screen" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      paddingTop: 120, paddingBottom: 80, position: 'relative', minHeight: '100vh',
      textAlign: 'center'
    }}>
      {/* Decorative clouds */}
      <div style={{ position: 'absolute', top: 100, left: '8%', opacity: 0.9, animation: 'float-y 4s ease-in-out infinite' }}>
        <PixelCloud size={50}/>
      </div>
      <div style={{ position: 'absolute', top: 180, right: '12%', opacity: 0.9, animation: 'float-y 5s ease-in-out infinite' }}>
        <PixelCloud size={70}/>
      </div>
      <div style={{ position: 'absolute', top: 300, left: '20%', opacity: 0.7, animation: 'float-y 6s ease-in-out infinite 1s' }}>
        <PixelCloud size={40}/>
      </div>

      {/* Floating coins */}
      <div style={{ position: 'absolute', top: 200, right: '20%', animation: 'float-y 2s infinite' }}><PixelCoin size={36}/></div>
      <div style={{ position: 'absolute', top: 420, left: '15%', animation: 'float-y 2.5s infinite 0.5s' }}><PixelCoin size={36}/></div>

      {/* Title */}
      <div style={{ marginBottom: 20 }}>
        <div style={{
          fontFamily: 'var(--font-pixel)', fontSize: 20,
          color: 'var(--accent-2)',
          textShadow: '3px 3px 0 #000',
          letterSpacing: '0.2em', marginBottom: 16
        }}>
          ★ PRESENTS ★
        </div>
        <h1 style={{
          fontFamily: 'var(--font-pixel)', fontSize: 72,
          color: 'var(--accent)', margin: 0,
          textShadow: '6px 6px 0 #000, 12px 12px 0 rgba(0,0,0,0.3)',
          letterSpacing: '0.02em',
          lineHeight: 1.1
        }}>
          SUPER<br/>AGENTIC
        </h1>
        <h2 style={{
          fontFamily: 'var(--font-pixel)', fontSize: 48,
          color: 'var(--accent-2)', margin: '16px 0 0',
          textShadow: '5px 5px 0 #000',
          letterSpacing: '0.05em'
        }}>
          DEVOPS WORLD
        </h2>
        <div style={{
          fontFamily: 'var(--font-pixel)', fontSize: 14,
          color: '#fff', marginTop: 20,
          textShadow: '2px 2px 0 #000',
          letterSpacing: '0.15em'
        }}>
          ~ A LEARNING ADVENTURE ~
        </div>
      </div>

      {/* Mario + Mushroom + Star cluster */}
      <div style={{ display: 'flex', gap: 40, alignItems: 'flex-end', marginTop: 32, marginBottom: 40 }}>
        <div style={{ animation: 'float-y 2.2s ease-in-out infinite' }}><PixelMushroom size={80}/></div>
        <div><PixelMario size={120}/></div>
        <div style={{ animation: 'float-y 1.8s ease-in-out infinite 0.3s' }}><PixelStar size={72}/></div>
      </div>

      {/* PRESS START button */}
      <button onClick={handleStart} style={{
        fontFamily: 'var(--font-pixel)', fontSize: 22,
        background: 'var(--accent)', color: '#fff',
        border: '5px solid #000',
        padding: '20px 44px',
        letterSpacing: '0.1em',
        cursor: 'pointer',
        boxShadow: pressed ? '2px 2px 0 #000' : '8px 8px 0 #000',
        animation: pressed ? 'shake 0.3s' : 'blink 1.5s infinite',
        transform: pressed ? 'translate(4px, 4px)' : 'none',
        transition: 'transform 0.15s'
      }}>
        ▶ PRESS START
      </button>
      <div style={{ marginTop: 20, fontFamily: 'var(--font-pixel)', fontSize: 9, color: '#000', textShadow: '1px 1px 0 #fff' }}>
        PRESS ENTER OR SPACE
      </div>

      {/* Bottom strip */}
      <div style={{ marginTop: 60, fontFamily: 'var(--font-pixel)', fontSize: 9, color: '#000', textShadow: '1px 1px 0 rgba(255,255,255,0.5)' }}>
        © 2026 PAULA SILVA · @paulasilvatech · v1.0
      </div>
    </div>
  );
}

/* ============ 2. LOGIN / PICK CHARACTER ============ */
function ScreenLogin() {
  const state = useAppState();
  const [username, setUsername] = React.useState(state.player.username === 'new_player' ? '' : state.player.username);
  const [picked, setPicked] = React.useState(state.player.character);

  const handleStart = () => {
    if (!username.trim()) return;
    SFX?.fanfare?.();
    AppStore.setUsername(username.trim());
    AppStore.setCharacter(picked);
    navigateWithWarp('/map');
  };

  return (
    <div className="screen" style={{ paddingTop: 100, paddingBottom: 80 }}>
      <div className="container" style={{ maxWidth: 960 }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 12, color: 'var(--accent-2)', marginBottom: 8, letterSpacing: '0.2em' }}>
            LEVEL 0-0
          </div>
          <h1 style={{ fontFamily: 'var(--font-pixel)', fontSize: 42, color: 'var(--accent)', margin: 0, textShadow: '4px 4px 0 #000' }}>
            CHOOSE YOUR HERO
          </h1>
        </div>

        {/* Username input */}
        <div className="card" style={{ padding: 32, marginBottom: 32 }}>
          <label style={{ fontFamily: 'var(--font-pixel)', fontSize: 12, display: 'block', marginBottom: 12, color: 'var(--text)' }}>
            ENTER YOUR PLAYER NAME:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value.slice(0, 20))}
            placeholder="PLAYER_01"
            autoFocus
            style={{
              width: '100%', padding: '16px 20px',
              fontFamily: 'var(--font-pixel)', fontSize: 16,
              background: '#F5F0E1', color: '#000',
              border: '4px solid #000', outline: 'none',
              letterSpacing: '0.05em'
            }}
          />
        </div>

        {/* Character grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 32 }}>
          {PLATFORM_DATA.characters.map(char => (
            <div
              key={char.id}
              onClick={() => setPicked(char.id)}
              className="card"
              style={{
                padding: 20, textAlign: 'center', cursor: 'pointer',
                background: picked === char.id ? char.color : 'var(--card-bg)',
                color: picked === char.id ? '#fff' : 'var(--text)',
                transform: picked === char.id ? 'translate(-3px, -3px)' : 'none',
                boxShadow: picked === char.id ? '10px 10px 0 #000' : 'var(--card-shadow)',
                transition: 'all 0.15s'
              }}
            >
              <div style={{ marginBottom: 8 }}><CharacterAvatar charId={char.id} size={72}/></div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 14, marginBottom: 8 }}>
                {char.name.toUpperCase()}
              </div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 8, opacity: 0.9, marginBottom: 10, letterSpacing: '0.05em' }}>
                {char.role.toUpperCase()}
              </div>
              <div style={{ fontSize: 11, lineHeight: 1.4, opacity: 0.95 }}>
                {char.desc}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleStart}
            disabled={!username.trim()}
            className="btn btn-primary"
            style={{ fontSize: 18, padding: '18px 48px', opacity: username.trim() ? 1 : 0.4 }}
          >
            ▶ START ADVENTURE
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============ 3. WORLD MAP ============ */
function ScreenMap() {
  const state = useAppState();
  const worlds = PLATFORM_DATA.worlds;

  // Positions along the path (percentages of container)
  const positions = [
    { x: 10, y: 70 }, { x: 22, y: 45 }, { x: 35, y: 72 }, { x: 48, y: 40 },
    { x: 60, y: 68 }, { x: 72, y: 35 }, { x: 84, y: 60 }, { x: 93, y: 28 }
  ];

  return (
    <div className="screen" style={{ paddingTop: 90, paddingBottom: 80 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--accent-2)', marginBottom: 8, letterSpacing: '0.2em' }}>
            ADVENTURE MAP
          </div>
          <h1 style={{ fontFamily: 'var(--font-pixel)', fontSize: 38, color: 'var(--accent)', margin: 0, textShadow: '4px 4px 0 #000' }}>
            8 WORLDS · 40+ LEVELS
          </h1>
        </div>

        <NavPill>
          <NavBtn to="/map" label="MAP" icon="🗺️" current="/map"/>
          <NavBtn to="/profile" label="PROFILE" icon="👤"/>
          <NavBtn to="/badges" label="BADGES" icon="🏆"/>
          <NavBtn to="/leaderboard" label="RANKING" icon="📊"/>
          <NavBtn to="/shop" label="SHOP" icon="🪙"/>
          <NavBtn to="/glossary" label="GLOSSARY" icon="📖"/>
        </NavPill>

        <NextQuest/>

        {/* Map canvas */}
        <div style={{
          position: 'relative', width: '100%', height: 520,
          background: 'linear-gradient(180deg, #87CEEB 0%, #5FB8E6 40%, #43B047 70%, #2E7D32 100%)',
          border: '5px solid #000',
          boxShadow: '10px 10px 0 #000',
          overflow: 'hidden',
          marginBottom: 24
        }}>
          {/* decorative clouds */}
          <div style={{ position: 'absolute', top: 30, left: '15%' }}><PixelCloud size={50}/></div>
          <div style={{ position: 'absolute', top: 50, right: '20%' }}><PixelCloud size={70}/></div>
          <div style={{ position: 'absolute', top: 120, left: '55%' }}><PixelCloud size={40}/></div>

          {/* Path (dashed connecting line) */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="4" fill="#FFF" stroke="#000" strokeWidth="2"/>
              </pattern>
            </defs>
            {positions.map((p, i) => {
              if (i === positions.length - 1) return null;
              const next = positions[i + 1];
              return (
                <line key={i}
                  x1={`${p.x}%`} y1={`${p.y}%`}
                  x2={`${next.x}%`} y2={`${next.y}%`}
                  stroke="url(#dots)" strokeWidth="10" strokeDasharray="2 18"
                  style={{ filter: 'drop-shadow(0 2px 0 rgba(0,0,0,0.3))' }}
                />
              );
            })}
          </svg>

          {/* World nodes */}
          {worlds.map((w, i) => {
            const pos = positions[i];
            const unlocked = w.unlocked;
            const isCurrent = w.id === state.player.currentWorld;
            return (
              <button
                key={w.id}
                onClick={() => { if (unlocked) { SFX?.click?.(); navigateWithWarp(`/world/${w.id}`); } }}
                style={{
                  position: 'absolute',
                  left: `${pos.x}%`, top: `${pos.y}%`,
                  transform: 'translate(-50%, -50%)',
                  width: 88, height: 88,
                  background: unlocked ? w.color : '#555',
                  border: '4px solid #000',
                  color: unlocked ? '#fff' : '#999',
                  cursor: unlocked ? 'pointer' : 'not-allowed',
                  boxShadow: isCurrent ? '0 0 0 4px #FBD000, 6px 6px 0 #000' : '6px 6px 0 #000',
                  fontFamily: 'var(--font-pixel)',
                  animation: isCurrent ? 'float-y 2s infinite' : 'none',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  padding: 4
                }}
              >
                <div style={{ fontSize: 32, lineHeight: 1 }}>{unlocked ? w.icon : '🔒'}</div>
                <div style={{ fontSize: 9, marginTop: 4, letterSpacing: '0.05em' }}>W {w.id}</div>
              </button>
            );
          })}

          {/* Mario at current world */}
          <div style={{
            position: 'absolute',
            left: `${positions[state.player.currentWorld - 1].x}%`,
            top: `${positions[state.player.currentWorld - 1].y - 12}%`,
            transform: 'translate(-50%, -100%)',
            animation: 'float-y 1.2s infinite',
            zIndex: 5
          }}>
            <PixelMario size={48}/>
          </div>
        </div>

        {/* World details strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {worlds.slice(0, 4).map(w => (
            <div key={w.id} className="card" style={{
              padding: 16, textAlign: 'center',
              opacity: w.unlocked ? 1 : 0.5,
              borderLeftWidth: 8, borderLeftColor: w.color,
              cursor: w.unlocked ? 'pointer' : 'not-allowed'
            }} onClick={() => { if (w.unlocked) { SFX?.click?.(); navigateWithWarp(`/world/${w.id}`); } }}>
              <div style={{ fontSize: 32 }}>{w.unlocked ? w.icon : '🔒'}</div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, marginTop: 8, color: 'var(--text)' }}>
                W{w.id}-{w.name.toUpperCase()}
              </div>
              <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 4 }}>{w.subtitle}</div>
            </div>
          ))}
        </div>

        {/* Daily Challenge + Progress */}
        <div style={{ display: 'flex', gap: 24, marginTop: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <DailyChallenge/>
          </div>
          <div style={{ flex: 1, minWidth: 280 }}>
            <MiniProgress/>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============ 4. WORLD LEVEL LIST ============ */
function ScreenWorld({ worldId }) {
  const state = useAppState();
  const world = PLATFORM_DATA.worlds.find(w => w.id === parseInt(worldId));
  if (!world) return <div className="screen">World not found.</div>;

  return (
    <div className="screen" style={{ paddingTop: 90, paddingBottom: 80 }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <button onClick={() => { SFX?.click?.(); navigateWithWarp('/map'); }} style={{
          fontFamily: 'var(--font-pixel)', fontSize: 11,
          background: 'transparent', border: '3px solid var(--text)', color: 'var(--text)',
          padding: '8px 14px', cursor: 'pointer', marginBottom: 24
        }}>◀ BACK TO MAP</button>

        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 72, marginBottom: 8 }}>{world.icon}</div>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 12, color: world.color, letterSpacing: '0.2em', marginBottom: 8 }}>
            WORLD {world.id}
          </div>
          <h1 style={{ fontFamily: 'var(--font-pixel)', fontSize: 42, color: 'var(--text)', margin: 0, textShadow: '3px 3px 0 rgba(0,0,0,0.3)' }}>
            {world.name.toUpperCase()}
          </h1>
          <div style={{ marginTop: 8, fontSize: 14, color: 'var(--text-muted)' }}>{world.subtitle}</div>
        </div>

        {/* Levels grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          {world.levels.map(lvl => {
            const locked = lvl.status === 'locked';
            const completed = lvl.status === 'complete';
            const active = lvl.status === 'active';
            return (
              <div key={lvl.id}
                onClick={() => { if (!locked) { SFX?.click?.(); navigateWithWarp(`/lesson/${lvl.id}`); } }}
                className="card"
                style={{
                  padding: 20, cursor: locked ? 'not-allowed' : 'pointer',
                  opacity: locked ? 0.5 : 1,
                  position: 'relative', minHeight: 200,
                  background: lvl.boss ? '#E52521' : 'var(--card-bg)',
                  color: lvl.boss ? '#fff' : 'var(--text)',
                  transition: 'transform 0.15s'
                }}
                onMouseEnter={(e) => !locked && (e.currentTarget.style.transform = 'translate(-4px, -4px)')}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
              >
                {active && (
                  <div style={{
                    position: 'absolute', top: -8, right: -8,
                    background: 'var(--accent-2)', color: '#000',
                    fontFamily: 'var(--font-pixel)', fontSize: 9,
                    padding: '4px 8px', border: '3px solid #000',
                    animation: 'blink 1.2s infinite'
                  }}>
                    ▶ PLAY NEXT
                  </div>
                )}
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, opacity: 0.7, marginBottom: 6, letterSpacing: '0.1em' }}>
                  LEVEL {lvl.id}
                </div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 14, marginBottom: 10, lineHeight: 1.3 }}>
                  {locked ? '🔒 LOCKED' : lvl.title.toUpperCase()}
                </div>
                {!locked && (
                  <>
                    <div style={{ fontSize: 13, marginBottom: 6, opacity: 0.85 }}>
                      <strong>{lvl.topic}</strong> — {lvl.sub}
                    </div>
                    <div style={{ display: 'flex', gap: 8, marginTop: 14, alignItems: 'center', fontFamily: 'var(--font-pixel)', fontSize: 10 }}>
                      <span style={{ color: lvl.boss ? '#FFD700' : 'var(--accent)' }}>⚡ {lvl.xp}</span>
                      <span style={{ color: lvl.boss ? '#FFD700' : 'var(--accent-2)' }}>🪙 {lvl.coins}</span>
                      {completed && (
                        <span style={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
                          <span>⭐</span><span>⭐</span><span>⭐</span>
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenLanding, ScreenLogin, ScreenMap, ScreenWorld });
