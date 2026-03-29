import type {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  type?: 'tip' | 'warning' | 'danger' | 'info';
  title?: string;
}

const icons = {
  tip: '⭐',
  warning: '⚠️',
  danger: '💀',
  info: '❓',
};

const colors = {
  tip: 'var(--mario-gold)',
  warning: 'var(--mario-orange)',
  danger: 'var(--mario-red)',
  info: 'var(--mario-blue)',
};

export default function MarioTip({ children, type = 'tip', title }: Props) {
  return (
    <div style={{
      border: `3px solid ${colors[type]}`,
      borderRadius: '12px',
      padding: '1rem 1.25rem',
      margin: '1.5rem 0',
      background: `color-mix(in srgb, ${colors[type]} 6%, transparent)`,
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: '-14px',
        left: '16px',
        background: colors[type],
        borderRadius: '8px',
        padding: '2px 10px',
        fontSize: '0.75rem',
        fontWeight: 700,
        color: type === 'tip' ? '#333' : 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
      }}>
        <span>{icons[type]}</span>
        <span>{title || type.toUpperCase()}</span>
      </div>
      <div style={{ marginTop: '0.5rem' }}>{children}</div>
    </div>
  );
}
