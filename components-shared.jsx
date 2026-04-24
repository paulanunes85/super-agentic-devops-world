/* ============================================================
   SHARED COMPONENTS — HUD, Sprites, Layout, Transitions
   Enhanced: animated XP bar, streak fire, sound toggle,
   warp pipe transitions, scroll progress, parallax backgrounds
   ============================================================ */

const { useState, useEffect, useRef, useCallback } = React;

/* ============ PIXEL SPRITES (CSS-drawn) ============ */

function PixelMario({ size = 64, running = false }) {
  return (
    <div style={{
      width: size, height: size, position: 'relative',
      imageRendering: 'pixelated',
      animation: running ? 'shake 0.4s infinite' : 'none'
    }}>
      <svg viewBox="0 0 16 16" width={size} height={size} style={{ shapeRendering: 'crispEdges' }}>
        {/* Hat */}
        <rect x="5" y="1" width="6" height="1" fill="#E52521"/>
        <rect x="4" y="2" width="8" height="2" fill="#E52521"/>
        {/* Face */}
        <rect x="4" y="4" width="1" height="2" fill="#000"/>
        <rect x="5" y="4" width="3" height="2" fill="#FFC890"/>
        <rect x="8" y="4" width="1" height="2" fill="#000"/>
        <rect x="9" y="4" width="2" height="2" fill="#FFC890"/>
        <rect x="11" y="4" width="1" height="2" fill="#8B4513"/>
        {/* Mustache */}
        <rect x="4" y="6" width="1" height="1" fill="#8B4513"/>
        <rect x="5" y="6" width="6" height="1" fill="#8B4513"/>
        <rect x="11" y="6" width="1" height="1" fill="#8B4513"/>
        <rect x="5" y="7" width="6" height="1" fill="#FFC890"/>
        {/* Body */}
        <rect x="4" y="8" width="8" height="1" fill="#E52521"/>
        <rect x="3" y="9" width="2" height="3" fill="#E52521"/>
        <rect x="5" y="9" width="6" height="3" fill="#1E40AF"/>
        <rect x="11" y="9" width="2" height="3" fill="#E52521"/>
        <rect x="7" y="10" width="1" height="1" fill="#FFD700"/>
        <rect x="10" y="10" width="1" height="1" fill="#FFD700"/>
        {/* Legs */}
        <rect x="5" y="12" width="2" height="3" fill="#1E40AF"/>
        <rect x="9" y="12" width="2" height="3" fill="#1E40AF"/>
        {/* Shoes */}
        <rect x="4" y="14" width="3" height="1" fill="#000"/>
        <rect x="9" y="14" width="3" height="1" fill="#000"/>
      </svg>
    </div>
  );
}

function PixelMushroom({ size = 48, color = "#E52521" }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} style={{ shapeRendering: 'crispEdges' }}>
      <rect x="4" y="1" width="8" height="1" fill={color}/>
      <rect x="2" y="2" width="12" height="1" fill={color}/>
      <rect x="1" y="3" width="14" height="1" fill={color}/>
      <rect x="1" y="4" width="14" height="2" fill={color}/>
      <rect x="3" y="3" width="2" height="2" fill="#FFF"/>
      <rect x="11" y="3" width="2" height="2" fill="#FFF"/>
      <rect x="7" y="4" width="2" height="2" fill="#FFF"/>
      <rect x="1" y="6" width="14" height="1" fill="#FFE4C4"/>
      <rect x="5" y="7" width="6" height="1" fill="#FFE4C4"/>
      <rect x="5" y="8" width="6" height="4" fill="#FFF8DC"/>
      <rect x="6" y="9" width="1" height="2" fill="#000"/>
      <rect x="9" y="9" width="1" height="2" fill="#000"/>
      <rect x="0" y="3" width="1" height="3" fill="#000"/>
      <rect x="15" y="3" width="1" height="3" fill="#000"/>
      <rect x="4" y="7" width="1" height="5" fill="#000"/>
      <rect x="11" y="7" width="1" height="5" fill="#000"/>
      <rect x="5" y="12" width="6" height="1" fill="#000"/>
    </svg>
  );
}

function PixelStar({ size = 36 }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} style={{ shapeRendering: 'crispEdges' }}>
      <rect x="7" y="1" width="2" height="2" fill="#FBD000"/>
      <rect x="6" y="3" width="4" height="1" fill="#FBD000"/>
      <rect x="1" y="4" width="14" height="2" fill="#FBD000"/>
      <rect x="2" y="6" width="12" height="2" fill="#FBD000"/>
      <rect x="3" y="8" width="10" height="2" fill="#FBD000"/>
      <rect x="2" y="10" width="4" height="2" fill="#FBD000"/>
      <rect x="10" y="10" width="4" height="2" fill="#FBD000"/>
      <rect x="1" y="12" width="3" height="2" fill="#FBD000"/>
      <rect x="12" y="12" width="3" height="2" fill="#FBD000"/>
      <rect x="6" y="6" width="1" height="2" fill="#000"/>
      <rect x="9" y="6" width="1" height="2" fill="#000"/>
    </svg>
  );
}

function PixelPipe({ height = 120, active = false }) {
  return (
    <div style={{ position: 'relative', width: 80, height, display: 'inline-block' }}>
      <svg viewBox={`0 0 16 ${Math.floor(height/5)}`} width={80} height={height} style={{ shapeRendering: 'crispEdges' }}>
        <rect x="0" y="0" width="16" height="3" fill="#43B047"/>
        <rect x="0" y="0" width="16" height="1" fill="#8BC34A"/>
        <rect x="1" y="1" width="2" height="1" fill="#C5F5A9"/>
        <rect x="0" y="2" width="16" height="1" fill="#2E7D32"/>
        <rect x="2" y="3" width="12" height={Math.floor(height/5) - 3} fill="#43B047"/>
        <rect x="2" y="3" width="2" height={Math.floor(height/5) - 3} fill="#8BC34A"/>
        <rect x="12" y="3" width="2" height={Math.floor(height/5) - 3} fill="#2E7D32"/>
      </svg>
      {active && <div style={{
        position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)',
        width: 40, height: 8, background: '#000', animation: 'blink 1s infinite'
      }}></div>}
    </div>
  );
}

function PixelCoin({ size = 28 }) {
  return <span className="coin" style={{ width: size, height: size }}></span>;
}

function PixelBrick({ size = 48 }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} style={{ shapeRendering: 'crispEdges' }}>
      <rect x="0" y="0" width="16" height="16" fill="#D4822A"/>
      <rect x="0" y="0" width="16" height="2" fill="#A0522D"/>
      <rect x="0" y="7" width="16" height="1" fill="#A0522D"/>
      <rect x="0" y="14" width="16" height="2" fill="#8B4513"/>
      <rect x="7" y="2" width="1" height="5" fill="#8B4513"/>
      <rect x="3" y="8" width="1" height="6" fill="#8B4513"/>
      <rect x="11" y="8" width="1" height="6" fill="#8B4513"/>
    </svg>
  );
}

function PixelQBlock({ size = 48, hit = false }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} style={{ shapeRendering: 'crispEdges', transition: 'transform 0.15s', transform: hit ? 'translateY(-6px)' : 'none' }}>
      <rect x="0" y="0" width="16" height="16" fill={hit ? "#8B6000" : "#FBD000"}/>
      <rect x="0" y="0" width="16" height="1" fill="#FFE866"/>
      <rect x="0" y="0" width="1" height="16" fill="#FFE866"/>
      <rect x="0" y="15" width="16" height="1" fill="#C89B00"/>
      <rect x="15" y="0" width="1" height="16" fill="#C89B00"/>
      {!hit && <>
        <rect x="5" y="4" width="6" height="1" fill="#000"/>
        <rect x="4" y="5" width="2" height="2" fill="#000"/>
        <rect x="10" y="5" width="2" height="2" fill="#000"/>
        <rect x="10" y="7" width="2" height="2" fill="#000"/>
        <rect x="8" y="9" width="2" height="2" fill="#000"/>
        <rect x="7" y="11" width="2" height="1" fill="#000"/>
        <rect x="7" y="13" width="2" height="1" fill="#000"/>
      </>}
    </svg>
  );
}

function PixelCloud({ size = 80 }) {
  return (
    <svg viewBox="0 0 32 16" width={size*2} height={size} style={{ shapeRendering: 'crispEdges' }}>
      <rect x="6" y="4" width="4" height="8" fill="#FFF"/>
      <rect x="10" y="2" width="4" height="12" fill="#FFF"/>
      <rect x="14" y="4" width="4" height="8" fill="#FFF"/>
      <rect x="18" y="2" width="4" height="12" fill="#FFF"/>
      <rect x="22" y="4" width="4" height="8" fill="#FFF"/>
    </svg>
  );
}

function PixelGround({ width = 100 }) {
  return (
    <div style={{ width: `${width}%`, height: 60, background: '#D4822A', position: 'relative', borderTop: '4px solid #000' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(90deg, #8B4513 2px, transparent 2px), linear-gradient(0deg, #8B4513 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
    </div>
  );
}

/* ============ WARP PIPE TRANSITION ============ */
window._warpActive = false;
window.navigateWithWarp = function navigateWithWarp(path) {
  if (window._warpActive) return;
  window._warpActive = true;
  SFX?.warp?.();

  const overlay = document.getElementById('warp-overlay');
  if (overlay) {
    overlay.classList.add('active');
    setTimeout(() => {
      navigate(path);
      setTimeout(() => {
        overlay.classList.remove('active');
        window._warpActive = false;
      }, 400);
    }, 500);
  } else {
    navigate(path);
    window._warpActive = false;
  }
};

/* ============ PARALLAX BACKGROUND ============ */
function ParallaxBG({ worldId }) {
  const biomeClass = worldId ? `biome-${worldId}` : 'biome-1';
  const showClouds = [1, 3].includes(worldId);
  const showStars = [7, 8].includes(worldId);
  const showLava = [5, 6].includes(worldId);
  const showWaves = [4].includes(worldId);

  return (
    <>
      <div className={`parallax-layer ${biomeClass}`} style={{ background: 'none' }}></div>
      {showClouds && <div className="parallax-layer clouds"></div>}
      {showStars && <div className="parallax-layer stars"></div>}
      {showLava && <div className="parallax-layer lava"></div>}
      {showWaves && <div className="parallax-layer waves"></div>}
    </>
  );
}

/* ============ SCROLL PROGRESS BAR ============ */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-progress">
      <div className="fill" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

/* ============ HUD (Enhanced) ============ */
function HUD({ onSearch, onShortcuts }) {
  const state = useAppState();
  const [flash, setFlash] = useState(null);
  const [soundOn, setSoundOn] = useState(state.settings?.sound !== false);
  const prev = useRef({ xp: state.player.xp, coins: state.player.coins });
  const xpPercent = Math.min(100, (state.player.xp / state.player.xpToNext) * 100);

  useEffect(() => {
    if (state.player.coins > prev.current.coins) {
      setFlash('coins');
      SFX?.coin?.();
      setTimeout(() => setFlash(null), 1200);
    }
    if (state.player.xp > prev.current.xp) {
      setFlash('xp');
      SFX?.powerUp?.();
      setTimeout(() => setFlash(null), 1200);
    }
    prev.current = { xp: state.player.xp, coins: state.player.coins };
  }, [state.player.xp, state.player.coins]);

  const toggleSound = () => {
    const newVal = !soundOn;
    setSoundOn(newVal);
    AppStore.set(s => ({ ...s, settings: { ...s.settings, sound: newVal } }));
    if (newVal) SFX?.click?.();
  };

  return (
    <header className="hud">
      <div className="brand" onClick={() => { SFX?.click?.(); navigateWithWarp('/map'); }}>
        ⭐ SADW
      </div>
      <div className="stats">
        <div className="stat">
          <span className="icn">🏆</span>
          <span className="val">LVL {String(state.player.level).padStart(2, '0')}</span>
        </div>
        <div className="stat" style={{ animation: flash === 'xp' ? 'shake 0.3s' : '' }}>
          <span className="icn">⚡</span>
          <span className="val">{state.player.xp}</span>
          <div className={`hud-xp-bar ${flash === 'xp' ? 'flash' : ''}`}>
            <div className="fill" style={{ width: `${xpPercent}%` }}></div>
          </div>
        </div>
        <div className="stat" style={{ animation: flash === 'coins' ? 'shake 0.3s' : '' }}>
          <PixelCoin size={18}/>
          <span className="val">×{state.player.coins}</span>
        </div>
        {state.player.streak > 0 && (
          <div className="stat">
            <span className="streak-fire">🔥</span>
            <span className="val">{state.player.streak}</span>
          </div>
        )}
        <div className="stat" onClick={() => { SFX?.click?.(); navigateWithWarp('/profile'); }} style={{ cursor: 'pointer' }}>
          <span className="icn">👤</span>
          <span className="val">{state.player.username}</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 6, marginLeft: 16 }}>
        <button onClick={onSearch} title="Search (press /)"
          style={{
            background: 'transparent', border: '2px solid var(--hud-accent)',
            color: 'var(--hud-accent)', padding: '6px 10px',
            fontFamily: 'var(--font-pixel)', fontSize: 9,
            cursor: 'pointer', letterSpacing: '0.05em'
          }}>🔍</button>
        <button onClick={onShortcuts} title="Keyboard shortcuts (press ?)"
          style={{
            background: 'transparent', border: '2px solid var(--hud-accent)',
            color: 'var(--hud-accent)', padding: '6px 10px',
            fontFamily: 'var(--font-pixel)', fontSize: 9,
            cursor: 'pointer', letterSpacing: '0.05em'
          }}>⌨️</button>
        <button onClick={toggleSound}
          title={soundOn ? 'Sound ON' : 'Sound OFF'}
          style={{
            background: 'transparent', border: '2px solid var(--hud-accent)',
            color: 'var(--hud-accent)', padding: '6px 10px',
            fontFamily: 'var(--font-pixel)', fontSize: 9,
            cursor: 'pointer', letterSpacing: '0.05em',
            opacity: soundOn ? 1 : 0.5
          }}>{soundOn ? '🔊' : '🔇'}</button>
        <button onClick={() => { if (confirm('Reset all progress?')) { AppStore.reset(); navigate('/'); } }}
          style={{
            background: 'transparent', border: '2px solid var(--hud-accent)',
            color: 'var(--hud-accent)', padding: '6px 10px',
            fontFamily: 'var(--font-pixel)', fontSize: 9,
            cursor: 'pointer', letterSpacing: '0.05em'
          }}>⟲</button>
      </div>
    </header>
  );
}

/* ============ Nav pill ============ */
function NavPill({ children }) {
  return (
    <nav style={{
      display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap',
      marginBottom: 32, marginTop: 8
    }}>
      {children}
    </nav>
  );
}

function NavBtn({ to, label, icon, current }) {
  const active = current === to;
  return (
    <button onClick={() => { SFX?.click?.(); navigateWithWarp(to); }} style={{
      padding: '10px 16px', fontFamily: 'var(--font-pixel)', fontSize: 10,
      background: active ? 'var(--accent-2)' : 'var(--card-bg)',
      color: active ? '#000' : 'var(--text)',
      border: '3px solid var(--card-border)',
      cursor: 'pointer', letterSpacing: '0.05em',
      display: 'flex', alignItems: 'center', gap: 6,
      boxShadow: active ? '4px 4px 0 #000' : 'none'
    }}>
      <span>{icon}</span>
      {label}
    </button>
  );
}

/* ============ WARP OVERLAY (rendered in App) ============ */
function WarpOverlay() {
  return (
    <div id="warp-overlay" className="warp-overlay">
      <div className="pipe-top"></div>
      <div className="pipe-bottom"></div>
      <div className="pipe-center">WARPING...</div>
    </div>
  );
}

/* Export globals */
Object.assign(window, {
  PixelMario, PixelMushroom, PixelStar, PixelPipe, PixelCoin,
  PixelBrick, PixelQBlock, PixelCloud, PixelGround,
  HUD, NavPill, NavBtn, WarpOverlay, ParallaxBG, ScrollProgress,
  navigateWithWarp
});
