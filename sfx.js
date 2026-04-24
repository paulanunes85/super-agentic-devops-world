/* ============================================================
   SFX — 8-bit sounds generated with Web Audio API
   No external files. Mutable via AppStore.settings.sound.
   ============================================================ */

window.SFX = (() => {
  let ctx = null;
  function getCtx() {
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch (e) { return null; }
    }
    return ctx;
  }

  function isEnabled() {
    return window.AppStore?.get()?.settings?.sound !== false;
  }

  /* Play a sequence of tones */
  function play(notes, gainStart = 0.2) {
    if (!isEnabled()) return;
    const c = getCtx();
    if (!c) return;
    if (c.state === 'suspended') c.resume();

    let t = c.currentTime;
    for (const n of notes) {
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = n.type || 'square';
      osc.frequency.setValueAtTime(n.freq, t);
      if (n.slideTo) {
        osc.frequency.exponentialRampToValueAtTime(n.slideTo, t + n.dur);
      }
      gain.gain.setValueAtTime(gainStart, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + n.dur);
      osc.connect(gain).connect(c.destination);
      osc.start(t);
      osc.stop(t + n.dur);
      t += n.dur * (n.overlap || 1);
    }
  }

  /* Pre-composed sounds */
  const sounds = {
    coin: () => play([
      { freq: 988, dur: 0.08 },
      { freq: 1319, dur: 0.3 }
    ], 0.15),

    jump: () => play([
      { freq: 400, slideTo: 900, dur: 0.18, type: 'square' }
    ], 0.12),

    click: () => play([
      { freq: 660, dur: 0.04, type: 'square' }
    ], 0.1),

    levelUp: () => play([
      { freq: 523, dur: 0.12 },
      { freq: 659, dur: 0.12 },
      { freq: 784, dur: 0.12 },
      { freq: 1047, dur: 0.25 }
    ], 0.18),

    powerUp: () => play([
      { freq: 523, dur: 0.08 },
      { freq: 784, dur: 0.08 },
      { freq: 1047, dur: 0.08 },
      { freq: 1319, dur: 0.15 }
    ], 0.15),

    correct: () => play([
      { freq: 880, dur: 0.1 },
      { freq: 1319, dur: 0.2 }
    ], 0.15),

    wrong: () => play([
      { freq: 200, dur: 0.12 },
      { freq: 150, dur: 0.18 }
    ], 0.2),

    boss: () => play([
      { freq: 110, dur: 0.15, type: 'sawtooth' },
      { freq: 98,  dur: 0.15, type: 'sawtooth' },
      { freq: 87,  dur: 0.15, type: 'sawtooth' },
      { freq: 73,  dur: 0.25, type: 'sawtooth' }
    ], 0.2),

    warp: () => play([
      { freq: 800, slideTo: 200, dur: 0.3, type: 'sine' },
      { freq: 200, slideTo: 1200, dur: 0.4, type: 'sine' }
    ], 0.15),

    fanfare: () => play([
      { freq: 523, dur: 0.1 },
      { freq: 659, dur: 0.1 },
      { freq: 784, dur: 0.1 },
      { freq: 1047, dur: 0.15 },
      { freq: 784, dur: 0.08 },
      { freq: 1047, dur: 0.3 }
    ], 0.18),

    type: () => play([
      { freq: 800 + Math.random() * 200, dur: 0.02, type: 'square' }
    ], 0.05)
  };

  return sounds;
})();
