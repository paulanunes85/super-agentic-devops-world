interface Props {
  mario: string;
  devops: string;
  marioIcon?: string;
  devopsIcon?: string;
  children?: React.ReactNode;
}

export default function ConceptCard({ mario, devops, marioIcon = '🍄', devopsIcon = '⚙️', children }: Props) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      margin: '1.5rem 0',
      border: '2px solid var(--ifm-color-emphasis-200)',
      borderRadius: '12px',
      overflow: 'hidden',
    }}>
      <div style={{
        padding: '1rem 1.25rem',
        background: 'rgba(229, 37, 33, 0.04)',
        borderRight: '2px solid var(--ifm-color-emphasis-200)',
      }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.5rem' }}>
          {marioIcon} Mario World
        </div>
        <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{mario}</div>
      </div>
      <div style={{
        padding: '1rem 1.25rem',
        background: 'rgba(4, 156, 216, 0.04)',
      }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.6, marginBottom: '0.5rem' }}>
          {devopsIcon} DevOps
        </div>
        <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{devops}</div>
      </div>
      {children && (
        <div style={{ gridColumn: '1 / -1', padding: '0.75rem 1.25rem', borderTop: '1px solid var(--ifm-color-emphasis-200)', fontSize: '0.9rem' }}>
          {children}
        </div>
      )}
    </div>
  );
}
