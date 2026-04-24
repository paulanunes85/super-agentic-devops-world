/* ============================================================
   MARKDOWN RENDERER V3 — pixel-themed, interactive, alive
   Features: callouts, copy buttons, glossary tooltips,
             animated headings, section coin drops, tables,
             lightbox, line numbers, task lists, animations
   NOTE: dangerouslySetInnerHTML is used intentionally here as
   all content comes from local .md files bundled with the app,
   not from user input. The inline() function HTML-escapes all
   text before adding formatting tags.
   ============================================================ */

/* Glossary lookup for tooltips */
window._glossaryMap = null;
function getGlossaryMap() {
  if (window._glossaryMap) return window._glossaryMap;
  const map = {};
  (window.PLATFORM_DATA?.glossary || []).forEach(g => {
    map[g.term.toLowerCase()] = g.def;
  });
  window._glossaryMap = map;
  return map;
}

/* ============ GLOSSARY TERM COMPONENT ============ */
function GlossaryTerm({ term, children }) {
  const [show, setShow] = React.useState(false);
  const glossary = getGlossaryMap();
  const def = glossary[term.toLowerCase()];
  if (!def) return <span>{children}</span>;

  return (
    <span
      className="glossary-term"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && <span className="glossary-tooltip">{def}</span>}
    </span>
  );
}

/* ============ IMAGE LIGHTBOX COMPONENT ============ */
function ImageLightbox({ src, alt, onClose }) {
  return (
    <div className="md-lightbox" onClick={onClose}>
      <button className="close-btn" onClick={onClose}>✕ CLOSE</button>
      <img src={src} alt={alt} onClick={e => e.stopPropagation()}/>
    </div>
  );
}

/* ============ CODE BLOCK WITH COPY + LINE NUMBERS + TRY IT ============ */
function CodeBlock({ lang, content }) {
  const [copied, setCopied] = React.useState(false);
  const isShell = /^(bash|shell|sh|zsh)$/i.test(lang || '');
  const lines = content.split('\n');
  const showLineNumbers = lines.length > 3;

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      SFX?.click?.();
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleTryIt = () => {
    const playground = document.querySelector('.code-playground, [data-component="CodePlayground"]');
    if (playground) {
      playground.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const renderContent = () => {
    if (!showLineNumbers && !isShell) {
      return <pre style={{
        margin: 0, padding: 16,
        fontFamily: 'var(--font-mono)', fontSize: 13,
        lineHeight: 1.6, overflow: 'auto', whiteSpace: 'pre'
      }}>{content}</pre>;
    }

    return (
      <pre style={{
        margin: 0, padding: 16,
        fontFamily: 'var(--font-mono)', fontSize: 13,
        lineHeight: 1.6, overflow: 'auto', whiteSpace: 'pre'
      }}>
        {lines.map((line, idx) => {
          const lineNum = showLineNumbers
            ? <span style={{ display: 'inline-block', width: 36, color: '#888', userSelect: 'none', textAlign: 'right', marginRight: 12, fontSize: 11 }}>{idx + 1}</span>
            : null;
          const prompt = (isShell && !line.startsWith('#') && line.trim() !== '')
            ? <span style={{ color: '#43A047', userSelect: 'none' }}>$ </span>
            : null;
          return (
            <span key={idx}>
              {lineNum}{prompt}{line}{idx < lines.length - 1 ? '\n' : ''}
            </span>
          );
        })}
      </pre>
    );
  };

  return (
    <div className="md-code-block" data-lang={lang || undefined}>
      <div className="md-code-header">
        <span>{(lang || 'CODE').toUpperCase()}</span>
        <div style={{ display: 'flex', gap: 6 }}>
          {isShell && (
            <button
              className="md-code-copy"
              onClick={handleTryIt}
              style={{ background: '#43A047', color: '#fff' }}
            >
              ▶ TRY IT
            </button>
          )}
          <button
            className={`md-code-copy ${copied ? 'copied' : ''}`}
            onClick={handleCopy}
          >
            {copied ? '✓ COPIED' : '📋 COPY'}
          </button>
        </div>
      </div>
      {renderContent()}
    </div>
  );
}

/* ============ CALLOUT COMPONENT ============ */
function Callout({ type, icon, title, children }) {
  return (
    <div className={`md-callout ${type}`}>
      <span className="md-callout-icon">{icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-pixel)', fontSize: 10,
          color: type === 'tip' ? '#2E7D32' : type === 'warning' ? '#E65100' : type === 'boss' ? '#C62828' : '#1565C0',
          marginBottom: 6, letterSpacing: '0.1em'
        }}>
          {title}
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.5 }}>{children}</div>
      </div>
    </div>
  );
}

/* ============ ANIMATED HEADING ============ */
function AnimatedHeading({ level, html }) {
  const sizes = [0, 28, 22, 18, 15, 13, 12];
  const colors = [null, '#E52521', '#E52521', '#049CD8', '#1A1A1A', '#555', '#888'];

  /* Content is from local trusted .md files, pre-escaped by inline() */
  return React.createElement('div', { style: { margin: level === 1 ? '32px 0 20px' : level === 2 ? '28px 0 14px' : '20px 0 10px' } },
    React.createElement(`h${level}`, {
      style: {
        fontFamily: 'var(--font-pixel)',
        fontSize: sizes[level] + 'px',
        color: colors[level],
        margin: 0,
        lineHeight: 1.4,
        textShadow: level <= 2 ? '2px 2px 0 rgba(0,0,0,0.15)' : 'none',
        animation: level === 1 ? 'heading-pulse 3s ease-in-out infinite' : 'none'
      },
      dangerouslySetInnerHTML: { __html: html }
    }),
    level <= 2 && React.createElement('span', { className: 'md-heading-bar', style: { width: level === 1 ? '100%' : '60%' } })
  );
}

/* ============ MARKDOWN PARSER ============ */
window.renderMarkdown = function renderMarkdown(md) {
  if (!md) return [];

  // Strip YAML front-matter
  md = md.replace(/^---\n[\s\S]*?\n---\n/, '');

  const lines = md.split('\n');
  const blocks = [];
  let i = 0;

  /* inline() escapes HTML first, then applies formatting.
     All text is HTML-escaped before any tag insertion. */
  const inline = (text) => {
    let t = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    // Inline code
    t = t.replace(/`([^`]+)`/g, '<code class="md-inline-code">$1</code>');
    // Bold
    t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // Italic
    t = t.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>');
    t = t.replace(/(?<![\w_])_([^_\n]+)_(?![\w_])/g, '<em>$1</em>');
    // Strikethrough
    t = t.replace(/~~([^~]+)~~/g, '<del>$1</del>');
    // Links — add md-link class, plus md-link-external for external links
    t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, href) => {
      const isExternal = /^https?:\/\//.test(href);
      const cls = isExternal ? 'md-link md-link-external' : 'md-link';
      return `<a href="${href}" target="_blank" rel="noopener" class="${cls}">${label}</a>`;
    });
    // Auto-detect glossary terms in text
    const glossary = getGlossaryMap();
    const terms = Object.keys(glossary);
    if (terms.length > 0) {
      terms.sort((a, b) => b.length - a.length);
      terms.forEach(term => {
        const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const re = new RegExp(`(?<![\\w-])${escaped}(?![\\w-])(?![^<]*>)`, 'gi');
        t = t.replace(re, `<span class="glossary-term" data-term="${term}">$&</span>`);
      });
    }
    return t;
  };

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { i++; continue; }

    // Skip HTML div/align tags (pass through without breaking flow)
    if (/^<\/?div[\s>]/i.test(line.trim()) || /^<br\s*\/?>$/i.test(line.trim())) {
      i++; continue;
    }

    // HTML img tags (for SVG diagrams)
    const imgMatch = line.match(/^<img\s+src="([^"]+)"(?:\s+alt="([^"]*)")?(?:\s+width="(\d+)")?[^>]*\/?>/i);
    if (imgMatch) {
      blocks.push({ type: 'image', src: imgMatch[1], alt: imgMatch[2] || '', width: imgMatch[3] || '100%' });
      i++; continue;
    }

    // Markdown image ![alt](url)
    const mdImgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
    if (mdImgMatch && !line.startsWith('![Badge')) {
      blocks.push({ type: 'image', src: mdImgMatch[2], alt: mdImgMatch[1], width: '100%' });
      i++; continue;
    }

    // Callout blocks: > [!TIP], > [!WARNING], > [!NOTE], > **Tip**
    if (line.startsWith('>')) {
      const quoteLines = [];
      while (i < lines.length && lines[i].startsWith('>')) {
        quoteLines.push(lines[i].slice(1).trim());
        i++;
      }
      const joined = quoteLines.join(' ');

      if (/^\[!TIP\]/i.test(joined) || /^🍄/i.test(joined) || /^\*\*tip/i.test(joined) || /^\*\*dica/i.test(joined)) {
        blocks.push({ type: 'callout', calloutType: 'tip', icon: '🍄', title: 'MARIO TIP',
          content: inline(joined.replace(/^\[!TIP\]\s*/i, '').replace(/^🍄\s*/, '').replace(/^\*\*(?:tip|dica)[:\s]?\*\*\s*/i, '')) });
      } else if (/^\[!WARNING\]/i.test(joined) || /^⚠️/i.test(joined) || /^\*\*warning/i.test(joined) || /^\*\*aviso/i.test(joined)) {
        blocks.push({ type: 'callout', calloutType: 'warning', icon: '⚠️', title: 'WARNING!',
          content: inline(joined.replace(/^\[!WARNING\]\s*/i, '').replace(/^⚠️\s*/, '').replace(/^\*\*(?:warning|aviso)[:\s]?\*\*\s*/i, '')) });
      } else if (/^\[!BOSS\]/i.test(joined) || /^🐢/i.test(joined) || /^\*\*boss/i.test(joined)) {
        blocks.push({ type: 'callout', calloutType: 'boss', icon: '🐢', title: 'BOSS KNOWLEDGE',
          content: inline(joined.replace(/^\[!BOSS\]\s*/i, '').replace(/^🐢\s*/, '').replace(/^\*\*boss[:\s]?\*\*\s*/i, '')) });
      } else if (/^\[!NOTE\]/i.test(joined) || /^\*\*note/i.test(joined) || /^\*\*nota/i.test(joined)) {
        blocks.push({ type: 'callout', calloutType: 'info', icon: '📘', title: 'INFO',
          content: inline(joined.replace(/^\[!NOTE\]\s*/i, '').replace(/^\*\*(?:note|nota)[:\s]?\*\*\s*/i, '')) });
      } else {
        blocks.push({ type: 'quote', content: inline(joined) });
      }
      continue;
    }

    // Code block
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      blocks.push({ type: 'code', lang, content: codeLines.join('\n') });
      continue;
    }

    // Headings
    const hMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (hMatch) {
      blocks.push({ type: 'heading', level: hMatch[1].length, content: inline(hMatch[2]) });
      i++; continue;
    }

    // HR
    if (/^---+$/.test(line.trim())) {
      blocks.push({ type: 'hr' });
      i++; continue;
    }

    // Table
    if (line.startsWith('|') && i + 1 < lines.length && /^\|[\s:|-]+\|/.test(lines[i+1])) {
      const headers = line.split('|').slice(1, -1).map(s => s.trim());
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        rows.push(lines[i].split('|').slice(1, -1).map(s => inline(s.trim())));
        i++;
      }
      blocks.push({ type: 'table', headers: headers.map(inline), rows });
      continue;
    }

    // Task list (must check before regular list)
    if (/^\s*[-*+]\s+\[([ xX])\]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*+]\s+\[([ xX])\]\s+/.test(lines[i])) {
        const taskMatch = lines[i].match(/^\s*[-*+]\s+\[([ xX])\]\s+(.*)$/);
        if (taskMatch) {
          items.push({ checked: taskMatch[1].toLowerCase() === 'x', text: inline(taskMatch[2]) });
        }
        i++;
      }
      blocks.push({ type: 'tasklist', items });
      continue;
    }

    // List
    if (/^\s*[-*+]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
      const items = [];
      const ordered = /^\s*\d+\.\s+/.test(line);
      while (i < lines.length && (/^\s*[-*+]\s+/.test(lines[i]) || /^\s*\d+\.\s+/.test(lines[i]))) {
        items.push(inline(lines[i].replace(/^\s*([-*+]|\d+\.)\s+/, '')));
        i++;
      }
      blocks.push({ type: 'list', ordered, items });
      continue;
    }

    // Paragraph
    const paraLines = [];
    while (i < lines.length && lines[i].trim() && !lines[i].startsWith('#') && !lines[i].startsWith('```') && !lines[i].startsWith('>') && !lines[i].startsWith('|') && !/^\s*[-*+]\s+/.test(lines[i]) && !/^\s*\d+\.\s+/.test(lines[i]) && !/^---+$/.test(lines[i].trim())) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ type: 'paragraph', content: inline(paraLines.join(' ')) });
    }
  }

  return blocks;
};

/* ============ REACT RENDERER ============ */
window.MDBlocks = function MDBlocks({ blocks }) {
  const [visibleSections, setVisibleSections] = React.useState(new Set([0, 1, 2]));
  const [lightbox, setLightbox] = React.useState(null);
  const sectionRef = React.useRef({});

  // Observe sections for coin-drop effect
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = parseInt(e.target.dataset.sectionIdx, 10);
          setVisibleSections(prev => {
            if (prev.has(idx)) return prev;
            SFX?.coin?.();
            const next = new Set(prev);
            next.add(idx);
            return next;
          });
        }
      });
    }, { threshold: 0.3 });

    Object.values(sectionRef.current).forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [blocks.length]);

  let headingCount = 0;
  let paragraphCount = 0;

  const lessonId = window._currentLessonId;
  const worldId = lessonId ? parseInt(lessonId.split('-')[0], 10) : 1;
  const quizData = window.QUIZZES?.[lessonId] || [];
  const totalBlocks = blocks.length;
  const kcPoint1 = Math.floor(totalBlocks * 0.33);
  const kcPoint2 = Math.floor(totalBlocks * 0.66);

  /* All dangerouslySetInnerHTML content is from local .md files,
     pre-escaped by inline() which HTML-escapes before formatting. */
  let kcInserted = 0;
  const elements = blocks.flatMap((b, i) => {
    let rendered = null;
    switch (b.type) {
      case 'heading': {
        headingCount++;
        const isSection = b.level <= 2;
        const sectionIdx = headingCount;
        rendered = (
          <div
            key={i}
            ref={el => { if (isSection) sectionRef.current[sectionIdx] = el; }}
            data-section-idx={sectionIdx}
          >
            <AnimatedHeading level={b.level} html={b.content} />
          </div>
        );
        break;
      }
      case 'paragraph': {
        const pIdx = paragraphCount++;
        const delay = Math.min(pIdx * 0.05, 1);
        rendered = (
          <p
            key={i}
            className="md-paragraph"
            style={{
              fontSize: 15, lineHeight: 1.65, margin: '12px 0', color: 'var(--text)',
              animationDelay: `${delay}s`
            }}
            dangerouslySetInnerHTML={{ __html: b.content }}
          />
        );
        break;
      }
      case 'code':
        rendered = <CodeBlock key={i} lang={b.lang} content={b.content} />;
        break;
      case 'callout':
        rendered = (
          <Callout key={i} type={b.calloutType} icon={b.icon} title={b.title}>
            <span dangerouslySetInnerHTML={{ __html: b.content }} />
          </Callout>
        );
        break;
      case 'tasklist':
        rendered = (
          <div key={i} className="md-list" style={{ margin: '12px 0' }}>
            {b.items.map((item, j) => (
              <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6, fontSize: 15, lineHeight: 1.7 }}>
                <span className={`md-checkbox${item.checked ? ' checked' : ''}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 20, height: 20, minWidth: 20,
                    border: '3px solid #000', background: item.checked ? '#43A047' : '#fff',
                    color: '#fff', fontWeight: 'bold', fontSize: 12, marginTop: 3,
                    boxShadow: '2px 2px 0 #000'
                  }}
                >
                  {item.checked ? '✓' : ''}
                </span>
                <span style={{ textDecoration: item.checked ? 'line-through' : 'none', opacity: item.checked ? 0.7 : 1 }}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            ))}
          </div>
        );
        break;
      case 'list':
        rendered = React.createElement(b.ordered ? 'ol' : 'ul', {
          key: i,
          className: b.ordered ? 'md-list ordered' : 'md-list',
          style: { paddingLeft: 28, margin: '12px 0', fontSize: 15, lineHeight: 1.7 }
        }, b.items.map((it, j) => <li key={j} style={{ marginBottom: 6 }} dangerouslySetInnerHTML={{ __html: it }}/>));
        break;
      case 'quote':
        rendered = (
          <blockquote key={i} className="md-quote" dangerouslySetInnerHTML={{ __html: b.content }}/>
        );
        break;
      case 'table':
        rendered = (
          <div key={i} className="md-table-wrapper">
            <table className="md-table">
              <thead>
                <tr style={{ background: '#000', color: '#FBD000', position: 'sticky', top: 0, zIndex: 1 }}>
                  {b.headers.map((h, j) => (
                    <th key={j} style={{ padding: '10px 14px', textAlign: 'left', fontFamily: 'var(--font-pixel)', fontSize: 10, letterSpacing: '0.05em' }} dangerouslySetInnerHTML={{ __html: h }}/>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((row, ri) => (
                  <tr key={ri} style={{
                    background: ri % 2 === 0 ? '#FFF' : '#FFF8DC',
                    borderTop: '2px solid #000',
                    transition: 'background 0.15s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#E3F2FD'}
                  onMouseLeave={e => e.currentTarget.style.background = ri % 2 === 0 ? '#FFF' : '#FFF8DC'}
                  >
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '10px 14px', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: cell }}/>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{
              fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--text-muted)',
              textAlign: 'right', padding: '4px 8px', letterSpacing: '0.05em'
            }}>
              {b.rows.length} ROW{b.rows.length !== 1 ? 'S' : ''}
            </div>
          </div>
        );
        break;
      case 'image':
        rendered = (
          <div key={i} className="md-image-card">
            <img
              src={b.src}
              alt={b.alt}
              style={{
                maxWidth: typeof b.width === 'string' && b.width.includes('%') ? b.width : `${b.width}px`,
                width: '100%', height: 'auto',
                imageRendering: 'auto', cursor: 'pointer'
              }}
              onClick={() => setLightbox({ src: b.src, alt: b.alt })}
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
            />
            <div style={{ display: 'none', padding: 12, fontFamily: 'var(--font-pixel)', fontSize: 10, color: 'var(--text-muted)' }}>
              {b.alt || 'Diagram not available'}
            </div>
            {b.alt && (
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--text-muted)', marginTop: 8, letterSpacing: '0.05em' }}>
                {b.alt}
              </div>
            )}
          </div>
        );
        break;
      case 'hr':
        rendered = <div key={i} className="md-hr"/>;
        break;
      default:
        rendered = null;
    }

    const extras = [];
    // Insert knowledge check at ~33% and ~66%
    if ((i === kcPoint1 || i === kcPoint2) && quizData.length > 0 && kcInserted < 2) {
      extras.push(<KnowledgeCheck key={'kc-' + i} question={quizData[kcInserted]} lessonId={lessonId}/>);
      kcInserted++;
    }
    // Insert flashcard after certain headings
    if (b.type === 'heading' && b.level === 2 && headingCount % 3 === 0) {
      extras.push(<FlashcardDeck key={'fc-' + i} worldId={worldId}/>);
    }
    return rendered ? [rendered, ...extras] : extras;
  });

  return (
    <>
      {elements}
      {lightbox && <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)}/>}
    </>
  );
};

/* Export for global use */
Object.assign(window, { GlossaryTerm, CodeBlock, Callout, AnimatedHeading, ImageLightbox });
