/* ============================================================
   PIXEL AVATARS — 16x16 pixel art character portraits
   Style reference: Sofia pixel portrait (curly hair, glasses)
   ============================================================ */

/* Sofia — Developer Hero (brown curly hair, glasses, red accent) */
function AvatarSofia({ size = 64 }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} style={{ shapeRendering: 'crispEdges', imageRendering: 'pixelated' }}>
      {/* Background */}
      <rect x="0" y="0" width="16" height="16" fill="#C9A0DC"/>
      {/* Hair — curly brown */}
      <rect x="3" y="1" width="10" height="1" fill="#5C3A1E"/>
      <rect x="2" y="2" width="12" height="1" fill="#5C3A1E"/>
      <rect x="1" y="3" width="14" height="1" fill="#6B4423"/>
      <rect x="1" y="4" width="3" height="1" fill="#6B4423"/>
      <rect x="12" y="4" width="3" height="1" fill="#6B4423"/>
      <rect x="1" y="5" width="2" height="1" fill="#5C3A1E"/>
      <rect x="13" y="5" width="2" height="1" fill="#5C3A1E"/>
      <rect x="1" y="6" width="2" height="2" fill="#6B4423"/>
      <rect x="13" y="6" width="2" height="2" fill="#6B4423"/>
      {/* Hair highlights */}
      <rect x="4" y="2" width="2" height="1" fill="#8B5E3C"/>
      <rect x="10" y="2" width="2" height="1" fill="#8B5E3C"/>
      <rect x="5" y="1" width="1" height="1" fill="#8B5E3C"/>
      {/* Face */}
      <rect x="4" y="4" width="8" height="7" fill="#F5C4A1"/>
      <rect x="3" y="5" width="1" height="5" fill="#F5C4A1"/>
      <rect x="12" y="5" width="1" height="5" fill="#F5C4A1"/>
      {/* Forehead */}
      <rect x="4" y="3" width="8" height="1" fill="#F5C4A1"/>
      <rect x="4" y="3" width="8" height="1" fill="#6B4423"/> {/* Bangs */}
      <rect x="5" y="3" width="2" height="1" fill="#5C3A1E"/>
      <rect x="9" y="3" width="2" height="1" fill="#5C3A1E"/>
      {/* Glasses frames */}
      <rect x="4" y="6" width="3" height="2" fill="transparent" stroke="#4A4A4A" strokeWidth="0.6"/>
      <rect x="9" y="6" width="3" height="2" fill="transparent" stroke="#4A4A4A" strokeWidth="0.6"/>
      <rect x="7" y="6" width="2" height="1" fill="#4A4A4A"/> {/* Bridge */}
      {/* Eyes (green, behind glasses) */}
      <rect x="5" y="6" width="1" height="2" fill="#2E7D32"/>
      <rect x="10" y="6" width="1" height="2" fill="#2E7D32"/>
      <rect x="5" y="6" width="1" height="1" fill="#fff"/>
      <rect x="10" y="6" width="1" height="1" fill="#fff"/>
      <rect x="5" y="7" width="1" height="1" fill="#1B5E20"/>
      <rect x="10" y="7" width="1" height="1" fill="#1B5E20"/>
      {/* Nose */}
      <rect x="7" y="8" width="2" height="1" fill="#E8A882"/>
      {/* Mouth — smile */}
      <rect x="5" y="9" width="1" height="1" fill="#D4956B"/>
      <rect x="6" y="10" width="4" height="1" fill="#E57373"/>
      <rect x="10" y="9" width="1" height="1" fill="#D4956B"/>
      <rect x="7" y="10" width="2" height="1" fill="#FFF"/>
      {/* Neck */}
      <rect x="6" y="11" width="4" height="1" fill="#F5C4A1"/>
      {/* Shirt (red — matches Mario red accent) */}
      <rect x="3" y="12" width="10" height="4" fill="#E52521"/>
      <rect x="2" y="13" width="1" height="3" fill="#E52521"/>
      <rect x="13" y="13" width="1" height="3" fill="#E52521"/>
      {/* Collar detail */}
      <rect x="7" y="12" width="2" height="1" fill="#C62828"/>
    </svg>
  );
}

/* Lucas — Cloud Architect (short blond hair, blue eyes, green shirt) */
function AvatarLucas({ size = 64 }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} style={{ shapeRendering: 'crispEdges', imageRendering: 'pixelated' }}>
      {/* Background */}
      <rect x="0" y="0" width="16" height="16" fill="#A5D6A7"/>
      {/* Hair — short neat blond */}
      <rect x="4" y="1" width="8" height="1" fill="#C9A84C"/>
      <rect x="3" y="2" width="10" height="1" fill="#C9A84C"/>
      <rect x="3" y="3" width="10" height="1" fill="#D4B85C"/>
      <rect x="3" y="4" width="2" height="1" fill="#C9A84C"/>
      <rect x="11" y="4" width="2" height="1" fill="#C9A84C"/>
      {/* Face */}
      <rect x="4" y="4" width="8" height="7" fill="#FDDCB5"/>
      <rect x="3" y="5" width="1" height="5" fill="#FDDCB5"/>
      <rect x="12" y="5" width="1" height="5" fill="#FDDCB5"/>
      {/* Eyes (blue) */}
      <rect x="5" y="6" width="2" height="2" fill="#1976D2"/>
      <rect x="9" y="6" width="2" height="2" fill="#1976D2"/>
      <rect x="5" y="6" width="1" height="1" fill="#fff"/>
      <rect x="9" y="6" width="1" height="1" fill="#fff"/>
      <rect x="6" y="7" width="1" height="1" fill="#0D47A1"/>
      <rect x="10" y="7" width="1" height="1" fill="#0D47A1"/>
      {/* Eyebrows */}
      <rect x="5" y="5" width="2" height="1" fill="#8B6914"/>
      <rect x="9" y="5" width="2" height="1" fill="#8B6914"/>
      {/* Nose */}
      <rect x="7" y="8" width="2" height="1" fill="#E8C9A0"/>
      {/* Mouth */}
      <rect x="6" y="9" width="4" height="1" fill="#E57373"/>
      {/* Neck */}
      <rect x="6" y="11" width="4" height="1" fill="#FDDCB5"/>
      {/* Shirt (green — cloud/pipe green) + tie */}
      <rect x="3" y="12" width="10" height="4" fill="#43B047"/>
      <rect x="2" y="13" width="1" height="3" fill="#43B047"/>
      <rect x="13" y="13" width="1" height="3" fill="#43B047"/>
      <rect x="7" y="12" width="2" height="4" fill="#2E7D32"/> {/* Tie */}
      <rect x="6" y="12" width="4" height="1" fill="#fff"/> {/* Collar */}
    </svg>
  );
}

/* Maya — AI Engineer (dark hair with purple streak, magic vibe) */
function AvatarMaya({ size = 64 }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} style={{ shapeRendering: 'crispEdges', imageRendering: 'pixelated' }}>
      {/* Background */}
      <rect x="0" y="0" width="16" height="16" fill="#F8BBD0"/>
      {/* Hair — long dark with purple highlights */}
      <rect x="4" y="1" width="8" height="1" fill="#2C1810"/>
      <rect x="3" y="2" width="10" height="1" fill="#2C1810"/>
      <rect x="2" y="3" width="12" height="1" fill="#1A0E0A"/>
      <rect x="2" y="4" width="2" height="1" fill="#1A0E0A"/>
      <rect x="12" y="4" width="2" height="1" fill="#1A0E0A"/>
      <rect x="1" y="5" width="2" height="3" fill="#2C1810"/>
      <rect x="13" y="5" width="2" height="3" fill="#2C1810"/>
      <rect x="1" y="8" width="2" height="4" fill="#1A0E0A"/>
      <rect x="13" y="8" width="2" height="4" fill="#1A0E0A"/>
      {/* Purple hair streak */}
      <rect x="10" y="2" width="2" height="1" fill="#9C27B0"/>
      <rect x="12" y="4" width="1" height="2" fill="#9C27B0"/>
      <rect x="13" y="6" width="1" height="3" fill="#7B1FA2"/>
      {/* Wizard hat tip (small) */}
      <rect x="7" y="0" width="2" height="1" fill="#7B1FA2"/>
      <rect x="6" y="1" width="1" height="1" fill="#9C27B0"/>
      <rect x="9" y="1" width="1" height="1" fill="#9C27B0"/>
      {/* Face */}
      <rect x="4" y="4" width="8" height="7" fill="#D4A574"/>
      <rect x="3" y="5" width="1" height="5" fill="#D4A574"/>
      <rect x="12" y="5" width="1" height="5" fill="#D4A574"/>
      {/* Eyes (purple/violet) */}
      <rect x="5" y="6" width="2" height="2" fill="#7B1FA2"/>
      <rect x="9" y="6" width="2" height="2" fill="#7B1FA2"/>
      <rect x="5" y="6" width="1" height="1" fill="#fff"/>
      <rect x="9" y="6" width="1" height="1" fill="#fff"/>
      <rect x="6" y="7" width="1" height="1" fill="#4A148C"/>
      <rect x="10" y="7" width="1" height="1" fill="#4A148C"/>
      {/* Eyelashes */}
      <rect x="4" y="5" width="1" height="1" fill="#1A0E0A"/>
      <rect x="11" y="5" width="1" height="1" fill="#1A0E0A"/>
      {/* Nose */}
      <rect x="7" y="8" width="2" height="1" fill="#C08A5A"/>
      {/* Mouth — slight smile */}
      <rect x="6" y="9" width="4" height="1" fill="#E91E63"/>
      <rect x="7" y="10" width="2" height="1" fill="#D4A574"/>
      {/* Neck */}
      <rect x="6" y="11" width="4" height="1" fill="#D4A574"/>
      {/* Robe (pink/magenta — magic) */}
      <rect x="3" y="12" width="10" height="4" fill="#FF2E88"/>
      <rect x="2" y="13" width="1" height="3" fill="#FF2E88"/>
      <rect x="13" y="13" width="1" height="3" fill="#FF2E88"/>
      {/* Star brooch */}
      <rect x="7" y="13" width="2" height="2" fill="#FBD000"/>
    </svg>
  );
}

/* Kenji — Security Guardian (dark short hair, serious, blue ninja) */
function AvatarKenji({ size = 64 }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} style={{ shapeRendering: 'crispEdges', imageRendering: 'pixelated' }}>
      {/* Background */}
      <rect x="0" y="0" width="16" height="16" fill="#81D4FA"/>
      {/* Hair — dark spiky short */}
      <rect x="5" y="0" width="6" height="1" fill="#1A1A1A"/>
      <rect x="4" y="1" width="8" height="1" fill="#1A1A1A"/>
      <rect x="3" y="2" width="10" height="1" fill="#1A1A1A"/>
      <rect x="3" y="3" width="10" height="1" fill="#2C2C2C"/>
      <rect x="3" y="4" width="2" height="1" fill="#1A1A1A"/>
      <rect x="11" y="4" width="2" height="1" fill="#1A1A1A"/>
      {/* Spiky hair detail */}
      <rect x="4" y="0" width="1" height="1" fill="#1A1A1A"/>
      <rect x="11" y="0" width="1" height="1" fill="#1A1A1A"/>
      {/* Face */}
      <rect x="4" y="4" width="8" height="4" fill="#F5DEB3"/>
      <rect x="3" y="5" width="1" height="3" fill="#F5DEB3"/>
      <rect x="12" y="5" width="1" height="3" fill="#F5DEB3"/>
      {/* Ninja mask (covers lower face) */}
      <rect x="3" y="8" width="10" height="3" fill="#0D47A1"/>
      <rect x="2" y="9" width="1" height="2" fill="#0D47A1"/>
      <rect x="13" y="9" width="1" height="2" fill="#0D47A1"/>
      {/* Mask band across forehead */}
      <rect x="2" y="4" width="12" height="1" fill="#0D47A1"/>
      <rect x="14" y="4" width="1" height="2" fill="#0D47A1"/> {/* Band tail */}
      <rect x="15" y="5" width="1" height="1" fill="#0D47A1"/>
      {/* Eyes (intense, narrow) */}
      <rect x="5" y="5" width="2" height="2" fill="#fff"/>
      <rect x="9" y="5" width="2" height="2" fill="#fff"/>
      <rect x="6" y="6" width="1" height="1" fill="#1A1A1A"/>
      <rect x="10" y="6" width="1" height="1" fill="#1A1A1A"/>
      {/* Eyebrows (stern) */}
      <rect x="4" y="5" width="3" height="1" fill="#1A1A1A"/>
      <rect x="9" y="5" width="3" height="1" fill="#1A1A1A"/>
      {/* Eyes visible above mask */}
      <rect x="5" y="6" width="1" height="1" fill="#B3E5FC"/>
      <rect x="9" y="6" width="1" height="1" fill="#B3E5FC"/>
      {/* Neck */}
      <rect x="6" y="11" width="4" height="1" fill="#0D47A1"/>
      {/* Ninja outfit (dark blue) */}
      <rect x="3" y="12" width="10" height="4" fill="#049CD8"/>
      <rect x="2" y="13" width="1" height="3" fill="#049CD8"/>
      <rect x="13" y="13" width="1" height="3" fill="#049CD8"/>
      {/* Belt */}
      <rect x="3" y="13" width="10" height="1" fill="#1A1A1A"/>
      {/* Shuriken on belt */}
      <rect x="7" y="13" width="2" height="1" fill="#B0BEC5"/>
    </svg>
  );
}

/* Avatar dispatcher — returns the right component by character ID */
function CharacterAvatar({ charId, size = 64 }) {
  switch (charId) {
    case 'sofia': return <AvatarSofia size={size}/>;
    case 'lucas': return <AvatarLucas size={size}/>;
    case 'maya': return <AvatarMaya size={size}/>;
    case 'kenji': return <AvatarKenji size={size}/>;
    default: return <AvatarSofia size={size}/>;
  }
}

Object.assign(window, { AvatarSofia, AvatarLucas, AvatarMaya, AvatarKenji, CharacterAvatar });
