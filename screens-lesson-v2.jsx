/* ============================================================
   LESSON VIEWER V2 — loads full markdown from content/ folder
   ============================================================ */

function ScreenLessonV2({ lessonId }) {
  const [md, setMd] = React.useState(null);
  const [blocks, setBlocks] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [phase, setPhase] = React.useState('read');
  const [quizIdx, setQuizIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [showExplain, setShowExplain] = React.useState(false);
  const [coinPops, setCoinPops] = React.useState([]);
  const [qBlockHit, setQBlockHit] = React.useState(false);
  const [newBadge, setNewBadge] = React.useState(null);

  const state = useAppState();
  window._currentLessonId = lessonId;

  const quiz = QUIZZES[lessonId] || [];
  // Find level across all worlds (works for W1-W8)
  const worldId = parseInt(lessonId.split('-')[0], 10);
  const world = PLATFORM_DATA.worlds.find(w => w.id === worldId);
  const level = world?.levels.find(l => l.id === lessonId);

  React.useEffect(() => {
    setLoading(true); setError(null);
    fetch(`content/${lessonId}.md`)
      .then(r => { if (!r.ok) throw new Error('404'); return r.text(); })
      .then(text => {
        setMd(text);
        setBlocks(renderMarkdown(text));
        setLoading(false);
      })
      .catch(e => { setError(e.message); setLoading(false); });
  }, [lessonId]);

  const answer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplain(true);
    const correct = idx === quiz[quizIdx].correct;
    AppStore.trackCombo(correct);
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
    if (quizIdx < quiz.length - 1) {
      setQuizIdx(quizIdx + 1);
    } else {
      const correctCount = answers.filter(a => a.correct).length + (selected === quiz[quizIdx].correct ? 1 : 0);
      const stars = correctCount === quiz.length ? 3 : correctCount >= quiz.length - 1 ? 2 : 1;
      const rewards = level ? { xp: Math.round(level.xp * (stars/3)), coins: Math.round(level.coins * (stars/3)) } : { xp: 100, coins: 20 };
      AppStore.completeLevel(lessonId, stars, rewards);
      const earned = AppStore.checkBadges();
      AppStore.checkWorldComplete(worldId);
      if (earned.length > 0) {
        const badge = PLATFORM_DATA.badges.find(b => b.id === earned[0]);
        if (badge) setNewBadge(badge);
      }
      SFX?.fanfare?.();
      setPhase('results');
    }
  };

  if (loading) return (
    <div className="screen" style={{ paddingTop: 120, textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 16, animation: 'blink 1s infinite' }}>LOADING...</div>
    </div>
  );

  if (error) return (
    <div className="screen" style={{ paddingTop: 120, textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'var(--font-pixel)' }}>LESSON NOT FOUND</h2>
      <p>Try refreshing or serving via HTTP.</p>
      <button onClick={() => navigate('/world/1')} className="btn">← BACK</button>
    </div>
  );

  /* RESULTS */
  if (phase === 'results') {
    const correctCount = answers.filter(a => a.correct).length;
    const stars = correctCount === quiz.length ? 3 : correctCount >= quiz.length - 1 ? 2 : 1;
    const xpEarned = level ? Math.round(level.xp * (stars/3)) : 100;
    const coinsEarned = level ? Math.round(level.coins * (stars/3)) : 20;

    return (
      <div className="screen" style={{ paddingTop: 120, textAlign: 'center' }}>
        {newBadge && <BadgeUnlock badge={newBadge} onDone={() => setNewBadge(null)}/>}
        <div className="container" style={{ maxWidth: 680 }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 14, color: 'var(--accent-2)', marginBottom: 16, letterSpacing: '0.2em' }}>
            LEVEL {lessonId} COMPLETE!
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
                <div style={{ fontSize: 40 }}>{correctCount}/{quiz.length}</div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 11, marginTop: 4 }}>CORRECT</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => { SFX?.click?.(); navigateWithWarp(`/world/${worldId}`); }} className="btn">◀ WORLD MAP</button>
            <button onClick={() => { SFX?.click?.(); navigateWithWarp('/profile'); }} className="btn btn-primary">PROFILE ▶</button>
            {/* Next lesson button */}
            {(() => {
              const curWorld = PLATFORM_DATA.worlds.find(w => w.id === worldId);
              if (!curWorld) return null;
              const idx = curWorld.levels.findIndex(l => l.id === lessonId);
              let next = curWorld.levels[idx + 1];
              if (!next) {
                // Jump to next world's first level
                const nextWorld = PLATFORM_DATA.worlds.find(w => w.id === worldId + 1);
                next = nextWorld?.levels[0];
              }
              if (next) return <button onClick={() => { SFX?.warp?.(); setPhase('read'); setQuizIdx(0); setAnswers([]); navigateWithWarp(`/lesson/${next.id}`); }} className="btn btn-green">▶ NEXT LEVEL ({next.id})</button>;
            })()}
          </div>
        </div>
      </div>
    );
  }

  /* READ */
  if (phase === 'read') {
    return (
      <div className="screen" style={{ paddingTop: 90, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 920 }}>
          <Breadcrumbs items={[
            { label: 'MAP', icon: '🗺️', to: '/map' },
            { label: 'WORLD ' + worldId, icon: world?.icon || '🌍', to: '/world/' + worldId },
            { label: 'LEVEL ' + lessonId, icon: '📚' }
          ]}/>
          <button onClick={() => { SFX?.click?.(); navigateWithWarp(`/world/${worldId}`); }} style={{
            fontFamily: 'var(--font-pixel)', fontSize: 10, background: 'transparent',
            border: '3px solid var(--text)', color: 'var(--text)', padding: '8px 14px',
            cursor: 'pointer', marginBottom: 20
          }}>◀ LEVEL SELECT</button>

          {level && (
            <div style={{ marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="chip">LVL {lessonId}</span>
              <span className="chip" style={{ background: '#049CD8', color: '#fff' }}>{level.topic}</span>
              <span className="chip">🪙 UP TO {level.coins}</span>
              <span className="chip">⚡ UP TO {level.xp} XP</span>
              <span className="chip">❓ {quiz.length} QUESTIONS</span>
            </div>
          )}

          <CompanionDialogue charId={state.player.character} phase="welcome"/>

          {/* Rendered markdown */}
          <div className="card" style={{ padding: '12px 32px 32px' }}>
            <MDBlocks blocks={blocks}/>
          </div>

          {window.DRAG_CHALLENGES?.[lessonId] && (
            <div className="card" style={{ padding: '12px 24px 24px', marginTop: 16 }}>
              <DragSequence challenge={window.DRAG_CHALLENGES[lessonId]}/>
            </div>
          )}
          {window.FILL_GAPS?.[lessonId] && (
            <div className="card" style={{ padding: '12px 24px 24px', marginTop: 16 }}>
              <FillGap gaps={window.FILL_GAPS[lessonId]}/>
            </div>
          )}

          {/* Start quiz CTA */}
            <CompanionDialogue charId={state.player.character} phase="preQuiz"/>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            {quiz.length > 0 ? (
              <>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 12, marginBottom: 12, color: 'var(--text)' }}>
                  READY FOR THE BOSS QUESTION?
                </div>
                <button onClick={() => setPhase('quiz')} className="btn btn-primary" style={{ fontSize: 18, padding: '18px 36px' }}>
                  ▶ START QUIZ ({quiz.length} Q)
                </button>
              </>
            ) : (
              <>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 12, marginBottom: 12, color: 'var(--text)' }}>
                  LEVEL READ — CLAIM YOUR REWARD
                </div>
                <button onClick={() => setPhase('done')} className="btn btn-green" style={{ fontSize: 18, padding: '18px 36px' }}>
                  ▶ COMPLETE LEVEL
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* QUIZ */
  const q = quiz[quizIdx];
  return (
    <div className="screen" style={{ paddingTop: 100, paddingBottom: 80, position: 'relative' }}>
      {coinPops.map(cp => (
        <div key={cp.id} style={{ position: 'fixed', left: `${cp.x}%`, top: '50%', animation: 'coin-pop 1.2s ease-out forwards', zIndex: 500 }}>
          <PixelCoin size={40}/>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 14, color: 'var(--accent-2)', textShadow: '2px 2px 0 #000', marginTop: -6 }}>+10</div>
        </div>
      ))}

      <div className="container" style={{ maxWidth: 820 }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-pixel)', fontSize: 10, marginBottom: 8 }}>
            <span>QUESTION {quizIdx + 1} / {quiz.length}</span>
            <span>❤️❤️❤️</span>
          </div>
          <div className="progress-bar">
            <div className="fill" style={{ width: `${((quizIdx) / quiz.length) * 100}%` }}></div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <ComboDisplay combo={AppStore.get().player.combo}/>
        </div>

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ display: 'inline-block', marginBottom: 20 }}>
            <PixelQBlock size={64} hit={qBlockHit}/>
          </div>
          <h2 style={{ fontFamily: 'var(--font-pixel)', fontSize: 18, color: 'var(--text)', margin: 0, lineHeight: 1.5, textShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}>{q.q}</h2>
        </div>

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
                background: bg, color, border: '4px solid var(--card-border)',
                boxShadow: isSelected ? '3px 3px 0 #000' : '6px 6px 0 #000',
                cursor: show ? 'default' : 'pointer',
                transform: show && isSelected ? 'translate(3px, 3px)' : 'none',
                transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: 14
              }}>
                <span style={{
                  fontFamily: 'var(--font-pixel)', fontSize: 14,
                  width: 34, height: 34, borderRadius: '50%',
                  background: show && isCorrect ? '#fff' : 'var(--accent-2)',
                  color: '#000', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  border: '3px solid #000', flexShrink: 0
                }}>{String.fromCharCode(65 + i)}</span>
                <span>{opt}</span>
                {show && isCorrect && <span style={{ marginLeft: 'auto', fontSize: 22 }}>✅</span>}
                {show && isSelected && !isCorrect && <span style={{ marginLeft: 'auto', fontSize: 22 }}>❌</span>}
              </button>
            );
          })}
        </div>

        {showExplain && (
          <div className="card" style={{ padding: 20, marginBottom: 20, borderLeft: '8px solid var(--accent-2)', animation: 'slide-up 0.3s ease-out' }}>
            <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--accent)', marginBottom: 8 }}>💡 EXPLANATION</div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>{q.explain}</p>
          </div>
        )}
        {showExplain && (
          <div style={{ textAlign: 'center' }}>
            <button onClick={nextQuiz} className="btn btn-primary" style={{ fontSize: 16 }}>
              {quizIdx < quiz.length - 1 ? 'NEXT QUESTION ▶' : 'FINISH LEVEL ▶'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

window.ScreenLesson = ScreenLessonV2;
