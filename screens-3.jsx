/* ============================================================
   SCREENS PART 3 — Badges, Leaderboard, Shop, Glossary
   ============================================================ */

/* ============ 7. BADGES ============ */
function ScreenBadges() {
  const state = useAppState();
  const badges = PLATFORM_DATA.badges.map(b => ({
    ...b,
    earned: state.progress.badgesEarned.includes(b.id)
  }));

  return (
    <div className="screen" style={{ paddingTop: 90, paddingBottom: 80 }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <NavPill>
          <NavBtn to="/map" label="MAP" icon="🗺️"/>
          <NavBtn to="/profile" label="PROFILE" icon="👤"/>
          <NavBtn to="/badges" label="BADGES" icon="🏆" current="/badges"/>
          <NavBtn to="/leaderboard" label="RANKING" icon="📊"/>
          <NavBtn to="/shop" label="SHOP" icon="🪙"/>
          <NavBtn to="/glossary" label="GLOSSARY" icon="📖"/>
        </NavPill>

        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h1 style={{ fontFamily: 'var(--font-pixel)', fontSize: 40, color: 'var(--accent)', margin: 0, textShadow: '4px 4px 0 #000' }}>
            🏆 BADGES
          </h1>
          <div style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 12 }}>
            Unlocked {badges.filter(b => b.earned).length} of {badges.length}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
          {badges.map(b => (
            <div key={b.id} className="card" style={{
              padding: 24, textAlign: 'center',
              opacity: b.earned ? 1 : 0.45,
              position: 'relative',
              animation: b.earned ? 'float-y 3s ease-in-out infinite' : 'none'
            }}>
              {b.earned && (
                <div style={{
                  position: 'absolute', top: -8, right: -8,
                  background: 'var(--accent-3)', color: '#fff',
                  fontFamily: 'var(--font-pixel)', fontSize: 8,
                  padding: '4px 8px', border: '3px solid #000'
                }}>EARNED</div>
              )}
              <div style={{
                fontSize: 64, marginBottom: 12,
                filter: b.earned ? 'drop-shadow(0 0 12px var(--accent-2))' : 'grayscale(1)'
              }}>{b.icon}</div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 12, marginBottom: 8, color: 'var(--text)' }}>
                {b.name.toUpperCase()}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.4 }}>
                {b.earned ? b.desc : '🔒 ' + b.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============ 8. LEADERBOARD ============ */
function ScreenLeaderboard() {
  return (
    <div className="screen" style={{ paddingTop: 90, paddingBottom: 80 }}>
      <div className="container" style={{ maxWidth: 900 }}>
        <NavPill>
          <NavBtn to="/map" label="MAP" icon="🗺️"/>
          <NavBtn to="/profile" label="PROFILE" icon="👤"/>
          <NavBtn to="/badges" label="BADGES" icon="🏆"/>
          <NavBtn to="/leaderboard" label="RANKING" icon="📊" current="/leaderboard"/>
          <NavBtn to="/shop" label="SHOP" icon="🪙"/>
          <NavBtn to="/glossary" label="GLOSSARY" icon="📖"/>
        </NavPill>

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 style={{ fontFamily: 'var(--font-pixel)', fontSize: 40, color: 'var(--accent)', margin: 0, textShadow: '4px 4px 0 #000' }}>
            📊 HIGH SCORES
          </h1>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 12 }}>Global · This Week</div>
        </div>

        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '60px 1fr 100px 120px 120px',
            background: '#000', color: 'var(--accent-2)',
            padding: '14px 20px', fontFamily: 'var(--font-pixel)', fontSize: 10, letterSpacing: '0.1em'
          }}>
            <div>RANK</div>
            <div>PLAYER</div>
            <div style={{ textAlign: 'center' }}>LVL</div>
            <div style={{ textAlign: 'center' }}>XP</div>
            <div style={{ textAlign: 'center' }}>COINS</div>
          </div>
          {PLATFORM_DATA.leaderboard.sort((a,b) => a.rank - b.rank).map((p, i) => {
            const medal = p.rank === 1 ? '🥇' : p.rank === 2 ? '🥈' : p.rank === 3 ? '🥉' : '';
            return (
              <div key={p.name} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr 100px 120px 120px',
                padding: '16px 20px', alignItems: 'center',
                background: p.isYou ? 'var(--accent-2)' : (i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.04)'),
                color: p.isYou ? '#000' : 'var(--text)',
                borderTop: '2px solid rgba(0,0,0,0.1)',
                fontFamily: 'var(--font-ui)',
                transform: p.isYou ? 'scale(1.02)' : 'none',
                boxShadow: p.isYou ? 'inset 0 0 0 4px #000' : 'none'
              }}>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 14, color: p.rank <= 3 ? 'var(--accent)' : p.isYou ? '#000' : 'var(--text)' }}>
                  {medal || `#${p.rank}`}
                </div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span>{p.country}</span>
                  <span>{p.name.toUpperCase()}</span>
                  {p.isYou && <span style={{ fontSize: 10, background: '#000', color: 'var(--accent-2)', padding: '2px 8px' }}>YOU</span>}
                </div>
                <div style={{ textAlign: 'center', fontFamily: 'var(--font-pixel)', fontSize: 12 }}>{p.level}</div>
                <div style={{ textAlign: 'center', fontFamily: 'var(--font-pixel)', fontSize: 12 }}>{p.xp.toLocaleString()}</div>
                <div style={{ textAlign: 'center', fontFamily: 'var(--font-pixel)', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <PixelCoin size={16}/>
                  {p.coins.toLocaleString()}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ============ 9. SHOP ============ */
function ScreenShop() {
  const state = useAppState();
  const [purchased, setPurchased] = React.useState(null);

  const buy = (item) => {
    if (state.player.coins < item.price) return;
    SFX?.coin?.();
    AppStore.awardCoins(-item.price);
    setPurchased(item.id);
    setTimeout(() => setPurchased(null), 1500);
  };

  return (
    <div className="screen" style={{ paddingTop: 90, paddingBottom: 80 }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <NavPill>
          <NavBtn to="/map" label="MAP" icon="🗺️"/>
          <NavBtn to="/profile" label="PROFILE" icon="👤"/>
          <NavBtn to="/badges" label="BADGES" icon="🏆"/>
          <NavBtn to="/leaderboard" label="RANKING" icon="📊"/>
          <NavBtn to="/shop" label="SHOP" icon="🪙" current="/shop"/>
          <NavBtn to="/glossary" label="GLOSSARY" icon="📖"/>
        </NavPill>

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 72, marginBottom: 12 }}>🏪</div>
          <h1 style={{ fontFamily: 'var(--font-pixel)', fontSize: 36, color: 'var(--accent)', margin: 0, textShadow: '4px 4px 0 #000' }}>
            TOAD'S ITEM SHOP
          </h1>
          <div style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 12, background: '#000', color: 'var(--accent-2)', padding: '10px 20px', fontFamily: 'var(--font-pixel)', fontSize: 14, border: '4px solid var(--accent-2)' }}>
            <PixelCoin size={24}/> YOUR COINS: {state.player.coins}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
          {PLATFORM_DATA.shop.map(item => {
            const canAfford = state.player.coins >= item.price;
            return (
              <div key={item.id} className="card" style={{
                padding: 20, textAlign: 'center',
                opacity: canAfford ? 1 : 0.6, position: 'relative',
                animation: purchased === item.id ? 'shake 0.4s' : 'none'
              }}>
                {item.cosmetic && (
                  <div style={{ position: 'absolute', top: 8, right: 8, fontFamily: 'var(--font-pixel)', fontSize: 8, color: 'var(--accent)', background: 'var(--accent-2)', padding: '3px 6px', border: '2px solid #000' }}>
                    COSMETIC
                  </div>
                )}
                <div style={{ fontSize: 56, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 12, marginBottom: 8 }}>
                  {item.name.toUpperCase()}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 14, lineHeight: 1.4, minHeight: 32 }}>
                  {item.desc}
                </div>
                {item.qty > 0 && (
                  <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--accent-3)', marginBottom: 8 }}>
                    OWNED: ×{item.qty}
                  </div>
                )}
                <button onClick={() => buy(item)} disabled={!canAfford} style={{
                  width: '100%', padding: '10px', fontFamily: 'var(--font-pixel)', fontSize: 11,
                  background: canAfford ? 'var(--accent-2)' : '#999',
                  color: '#000', border: '3px solid #000',
                  cursor: canAfford ? 'pointer' : 'not-allowed',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                }}>
                  <PixelCoin size={18}/> {item.price}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ============ 10. GLOSSARY ============ */
function ScreenGlossary() {
  const [flipped, setFlipped] = React.useState(new Set());

  const flip = (i) => {
    SFX?.click?.();
    setFlipped(prev => {
      const s = new Set(prev);
      s.has(i) ? s.delete(i) : s.add(i);
      return s;
    });
  };

  return (
    <div className="screen" style={{ paddingTop: 90, paddingBottom: 80 }}>
      <div className="container" style={{ maxWidth: 1200 }}>
        <NavPill>
          <NavBtn to="/map" label="MAP" icon="🗺️"/>
          <NavBtn to="/profile" label="PROFILE" icon="👤"/>
          <NavBtn to="/badges" label="BADGES" icon="🏆"/>
          <NavBtn to="/leaderboard" label="RANKING" icon="📊"/>
          <NavBtn to="/shop" label="SHOP" icon="🪙"/>
          <NavBtn to="/glossary" label="GLOSSARY" icon="📖" current="/glossary"/>
        </NavPill>

        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h1 style={{ fontFamily: 'var(--font-pixel)', fontSize: 36, color: 'var(--accent)', margin: 0, textShadow: '4px 4px 0 #000' }}>
            📖 GLOSSARY
          </h1>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 12 }}>
            Tap a card to flip. {PLATFORM_DATA.glossary.length} terms across 8 worlds.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
          {PLATFORM_DATA.glossary.map((g, i) => {
            const isFlipped = flipped.has(i);
            return (
              <div key={i}
                onClick={() => flip(i)}
                style={{
                  perspective: 1000, cursor: 'pointer', height: 180
                }}>
                <div style={{
                  position: 'relative', width: '100%', height: '100%',
                  transition: 'transform 0.6s',
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'none'
                }}>
                  {/* Front */}
                  <div className="card" style={{
                    position: 'absolute', inset: 0,
                    backfaceVisibility: 'hidden',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    padding: 16, textAlign: 'center',
                    background: 'var(--card-bg)'
                  }}>
                    <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--accent)', marginBottom: 12, letterSpacing: '0.1em' }}>
                      WORLD {g.world} · {PLATFORM_DATA.worlds[g.world - 1]?.icon}
                    </div>
                    <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 16, color: 'var(--text)', marginBottom: 12, lineHeight: 1.2 }}>
                      {g.term.toUpperCase()}
                    </div>
                    <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 8, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                      TAP TO FLIP ↻
                    </div>
                  </div>
                  {/* Back */}
                  <div className="card" style={{
                    position: 'absolute', inset: 0,
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    padding: 16,
                    background: 'var(--accent)', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: 13, lineHeight: 1.5 }}>{g.def}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenBadges, ScreenLeaderboard, ScreenShop, ScreenGlossary });
