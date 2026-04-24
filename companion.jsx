/* ============================================================
   COMPANION DIALOGUE — Phase-based speech bubbles with character avatars
   Characters appear at key lesson moments with contextual lines.
   Uses globals: SFX, CharacterAvatar, PLATFORM_DATA
   ============================================================ */

const COMPANION_LINES = {
  welcome: [
    "Ready for a new adventure? Let's go!",
    "Welcome back! Today's going to be awesome!",
    "Hey there! I've got something great for you!",
    "Let's level up together! This will be fun!"
  ],
  midLesson: [
    "Great progress! You're doing amazing!",
    "This is important! Pay close attention here.",
    "You're on fire! Keep that momentum going!",
    "Almost there! Stay focused, you've got this!"
  ],
  preQuiz: [
    "Quiz time! Show what you've learned!",
    "Trust your knowledge! You're ready for this!",
    "Time to prove your skills! Let's do it!",
    "You've trained hard — now crush this quiz!"
  ]
};

function CompanionDialogue({ charId, phase, onDismiss }) {
  const [visible, setVisible] = React.useState(true);

  if (!visible) return null;

  /* Deterministic line pick based on charId + phase */
  const seed = (charId || '').split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  const lines = COMPANION_LINES[phase] || COMPANION_LINES.welcome;
  const line = lines[seed % lines.length];

  /* Resolve character name from PLATFORM_DATA */
  const charData = (typeof PLATFORM_DATA !== 'undefined' && PLATFORM_DATA.characters)
    ? PLATFORM_DATA.characters.find(c => c.id === charId)
    : null;
  const charName = charData ? charData.name : (charId || 'Companion');

  function handleDismiss() {
    setVisible(false);
    if (typeof SFX !== 'undefined') SFX?.click?.();
    if (onDismiss) onDismiss();
  }

  return (
    <div
      className="companion-box"
      onClick={handleDismiss}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        padding: 12,
        cursor: 'pointer',
        animation: 'slideUp 0.35s ease-out'
      }}
    >
      <div style={{ flexShrink: 0 }}>
        <CharacterAvatar charId={charId} size={48} />
      </div>

      <div
        className="companion-bubble"
        style={{
          position: 'relative',
          background: '#fffbe6',
          border: '3px solid #333',
          borderRadius: 12,
          padding: '10px 14px',
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 11,
          lineHeight: 1.6,
          color: '#222',
          imageRendering: 'pixelated'
        }}
      >
        {/* CSS triangle pointer — left side */}
        <div style={{
          position: 'absolute',
          left: -12,
          top: 14,
          width: 0,
          height: 0,
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          borderRight: '12px solid #333'
        }} />
        <div style={{
          position: 'absolute',
          left: -8,
          top: 15,
          width: 0,
          height: 0,
          borderTop: '7px solid transparent',
          borderBottom: '7px solid transparent',
          borderRight: '10px solid #fffbe6'
        }} />

        <div style={{ fontWeight: 'bold', marginBottom: 4, color: charData?.color || '#E52521' }}>
          {charName}
        </div>
        <div>{line}</div>
      </div>

      <span
        className="companion-dismiss"
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 8,
          color: '#888',
          alignSelf: 'flex-end',
          whiteSpace: 'nowrap'
        }}
      >
        ✕ CLOSE
      </span>
    </div>
  );
}

Object.assign(window, { CompanionDialogue, COMPANION_LINES });
