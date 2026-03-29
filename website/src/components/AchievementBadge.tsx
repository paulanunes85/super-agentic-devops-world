import {useState} from 'react';

interface Props {
  name: string;
  world?: number;
  icon?: string;
}

const worldColors = [
  '', '#43B047', '#8B5E3C', '#5C94FC', '#1E90FF',
  '#8B0000', '#FF6B35', '#FBD000', '#9B59B6',
];

export default function AchievementBadge({ name, world = 1, icon = '🏆' }: Props) {
  const [unlocked, setUnlocked] = useState(false);
  const color = worldColors[world] || '#E52521';

  return (
    <button
      onClick={() => setUnlocked(!unlocked)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 14px',
        borderRadius: '20px',
        border: `2px solid ${color}`,
        background: unlocked ? color : 'transparent',
        color: unlocked ? 'white' : color,
        fontWeight: 700,
        fontSize: '0.8rem',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: unlocked ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      <span>{icon}</span>
      <span>{name}</span>
      {unlocked && <span style={{ fontSize: '0.65rem' }}>UNLOCKED!</span>}
    </button>
  );
}
