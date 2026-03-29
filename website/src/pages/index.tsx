import type {ReactNode} from 'react';
import {useState} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {motion} from 'framer-motion';
import {TypeAnimation} from 'react-type-animation';
import ScrollReveal from '@site/src/components/animations/ScrollReveal';
import CountUp from '@site/src/components/animations/CountUp';

import styles from './index.module.css';

/* ===== PIXEL IMAGE HELPER ===== */
function PixelImg({src, alt, size = 64}: {src: string; alt: string; size?: number}) {
  const url = useBaseUrl(src);
  return (
    <img
      src={url}
      alt={alt}
      width={size}
      height={size}
      style={{imageRendering: 'pixelated'}}
      loading="lazy"
    />
  );
}

/* ===== HUD ===== */
function HUD() {
  return (
    <div className="hud">
      <div className="hud__item">
        <span className="hud__label">WORLDS</span>
        <span className="hud__value">8</span>
      </div>
      <div className="hud__item">
        <span className="hud__label">LEVELS</span>
        <span className="hud__value">70+</span>
      </div>
      <div className="hud__item">
        <span className="hud__label">DIAGRAMS</span>
        <span className="hud__value">14</span>
      </div>
      <div className="hud__item">
        <span className="hud__label">TERMS</span>
        <span className="hud__value">124+</span>
      </div>
      <div className="hud__item">
        <span className="hud__label">LIVES</span>
        <span className="hud__value">MADE FOR SOFIA</span>
      </div>
    </div>
  );
}

/* ===== ? BLOCK ===== */
function QuestionBlock({onClick, hit}: {onClick: () => void; hit: boolean}) {
  return (
    <div
      className={`q-block ${hit ? 'q-block--hit' : ''}`}
      onClick={onClick}
      title="Hit me!"
    >
      {hit ? '' : '?'}
    </div>
  );
}

/* ===== HERO ===== */
function Hero() {
  const {siteConfig} = useDocusaurusContext();
  const [hits, setHits] = useState([false, false, false, false, false]);
  const messages = [
    '1UP! You got a Power-Up!',
    'Coin collected! Keep going!',
    'Star Power activated!',
    'Fire Flower obtained!',
    'Cape Feather! You can fly!',
  ];
  const [message, setMessage] = useState('');

  function hitBlock(i: number) {
    if (hits[i]) return;
    const newHits = [...hits];
    newHits[i] = true;
    setHits(newHits);
    setMessage(messages[i]);
    setTimeout(() => setMessage(''), 2000);
  }

  return (
    <header className="hero--game">
      <div className="cloud cloud--1">&#9729;</div>
      <div className="cloud cloud--2">&#9729;</div>
      <div className="cloud cloud--3">&#9729;</div>

      <div className="hero__content">
        <HUD />

        <div className="question-blocks">
          {hits.map((h, i) => (
            <QuestionBlock key={i} hit={h} onClick={() => hitBlock(i)} />
          ))}
        </div>

        {message && (
          <div className={styles.coinMessage}>{message}</div>
        )}

        <div className={styles.heroMascot}>
          <PixelImg src="/img/ai-agent-mascot.png" alt="AI Agent" size={120} />
        </div>

        <h1 className="hero__game-title">
          {siteConfig.title}
        </h1>
        <p className="hero__game-subtitle">{siteConfig.tagline}</p>

        <Link className="btn-start" to="/docs/intro">
          PRESS START
        </Link>
      </div>
    </header>
  );
}

/* ===== STATS ===== */
function Stats() {
  const items = [
    { num: 8, suffix: '', label: 'Worlds' },
    { num: 70, suffix: '+', label: 'Levels' },
    { num: 14, suffix: '', label: 'SVG Diagrams' },
    { num: 124, suffix: '+', label: 'Glossary Terms' },
    { num: 2, suffix: '', label: 'Languages' },
  ];
  return (
    <section className="stats-row">
      {items.map((s, i) => (
        <ScrollReveal key={i} delay={i * 0.1}>
          <div className="stat">
            <span className="stat__number">
              <CountUp end={s.num} suffix={s.suffix} />
            </span>
            <span className="stat__label">{s.label}</span>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}

/* ===== FEATURES ===== */
const features = [
  { img: '/img/features/agents.png', title: 'Agents = Characters', desc: 'AI Agents are the playable characters of DevOps. They observe, think, plan, and act — autonomously.' },
  { img: '/img/features/skills.png', title: 'Skills = Power-Ups', desc: 'Each new skill makes the agent more capable — like grabbing a Fire Flower or a Cape Feather.' },
  { img: '/img/features/instructions.png', title: 'Instructions = Rules', desc: 'Custom instructions define how agents behave — the rulebook that shapes every action they take.' },
  { img: '/img/features/hooks.png', title: 'Hooks = ? Blocks', desc: 'Hooks trigger actions at key moments. Hit the block — something always happens.' },
  { img: '/img/features/mcp.png', title: 'MCP = Warp Zones', desc: 'Model Context Protocol connects agents to external tools — instant teleportation to any system.' },
  { img: '/img/features/sdd.png', title: 'SDD = Blueprints', desc: 'Spec-Driven Development: design the castle blueprint before building it. Architecture first.' },
];

function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <Heading as="h2" style={{textAlign: 'center', marginBottom: '0.3rem'}}>
          Every Concept Has a Mario Equivalent
        </Heading>
        <p style={{textAlign: 'center', color: 'var(--ifm-color-emphasis-600)', marginBottom: '2rem', fontSize: '0.95rem'}}>
          If you've ever played Mario, you can understand DevOps.
        </p>
        <div className="row">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 0.08} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className="col col--12" style={{marginBottom: '1.5rem'}}>
                <div className="feature-block">
                  <div className="feature-block__icon">
                    <PixelImg src={f.img} alt={f.title} size={80} />
                  </div>
                  <div className="feature-block__title">{f.title}</div>
                  <p className="feature-block__desc">{f.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== STORY ===== */
function Story() {
  return (
    <section className="story">
      <div className="container">
        <Heading as="h2" style={{textAlign: 'center'}}>
          Made for Sofia
        </Heading>
        <div className="story__content">
          <p>
            Sofia is my daughter. When she asked me to teach her about software development,
            I realized that the usual tutorials weren't built for someone starting from absolute zero.
          </p>
          <p>
            So I decided to explain everything through <strong>Super Mario World</strong> — a game
            where the rules are simple, the progression is clear, and anyone can play.
          </p>
          <blockquote>
            <p>
              <strong>"Made for Sofia"</strong> is more than a subtitle. It's a promise: this content
              was built with the same care, patience, and love that a parent puts into
              teaching their child. No jargon without explanation. No concept without an analogy.
            </p>
            <p><em>Every developer starts at World 1-1. Sofia did. And now, so can you.</em></p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ===== WORLD MAP ===== */
const worlds = [
  { img: '/img/worlds/world-1.png', name: 'World 1', theme: 'Green Plains', desc: 'VS Code, Git, GitHub, Actions, Azure', link: '/docs/world-1/1-1-vs-code', levels: 8, num: 1 },
  { img: '/img/worlds/world-2.png', name: 'World 2', theme: 'Underground', desc: 'APIs, Security, DNS, DevOps', link: '/docs/world-2/2-1-ambientes', levels: 8, num: 2 },
  { img: '/img/worlds/world-3.png', name: 'World 3', theme: 'Sky World', desc: 'Docker, Tests, Languages, Frameworks', link: '/docs/world-3/3-1-arvore_habilidades', levels: 12, num: 3 },
  { img: '/img/worlds/world-4.png', name: 'World 4', theme: 'Water World', desc: 'Auth, Architecture, Deploy, Cache', link: '/docs/world-4/4-1-auth', levels: 9, num: 4 },
  { img: '/img/worlds/world-5.png', name: 'World 5', theme: "Bowser's Castle 1", desc: 'Copilot, AI Agents, GHAS, SDD', link: '/docs/world-5/5-1_devops-evolution', levels: 11, num: 5 },
  { img: '/img/worlds/world-6.png', name: 'World 6', theme: "Bowser's Castle 2", desc: 'Skills, Hooks, MCP, Orchestration', link: '/docs/world-6/6-1-custom-agents', levels: 10, num: 6 },
  { img: '/img/worlds/world-7.png', name: 'World 7', theme: 'Star World', desc: 'RAG, LangChain, IDP/Backstage', link: '/docs/world-7/7-1-azure-ai-foundry', levels: 7, num: 7 },
  { img: '/img/worlds/world-8.png', name: 'World 8', theme: 'Final Castle', desc: 'Complete Picture, Glossary', link: '/docs/world-8/8-1-how-everything-connects', levels: 4, num: 8 },
];

function WorldMap() {
  const [hoveredWorld, setHoveredWorld] = useState<number | null>(null);

  return (
    <section className="world-map">
      <div className="container">
        <Heading as="h2" className="world-map__title">
          The World Map
        </Heading>
        <p className="world-map__subtitle">
          8 Worlds from beginner to advanced — choose your path
        </p>

        <div className={styles.progressBar}>
          <div className={styles.progressTrack}>
            {worlds.map((w) => (
              <div
                key={w.num}
                className={`${styles.progressDot} ${hoveredWorld === w.num ? styles.progressDotActive : ''}`}
                style={{
                  background: `var(--world-${w.num})`,
                  left: `${((w.num - 1) / 7) * 100}%`,
                }}
                title={w.theme}
              />
            ))}
          </div>
        </div>

        <div className="row world-path">
          {worlds.map((w) => (
            <div key={w.num} className="col col--3" style={{marginBottom: '1.2rem'}}>
              <Link
                to={w.link}
                style={{textDecoration: 'none', color: 'inherit'}}
                onMouseEnter={() => setHoveredWorld(w.num)}
                onMouseLeave={() => setHoveredWorld(null)}
              >
                <div className={`world-card world-card--${w.num}`}>
                  <div className="world-card__emoji">
                    <PixelImg src={w.img} alt={w.theme} size={72} />
                  </div>
                  <Heading as="h3" className="world-card__name">
                    {w.name}
                  </Heading>
                  <p className="world-card__theme">{w.theme}</p>
                  <p className="world-card__desc">{w.desc}</p>
                  <div style={{textAlign: 'center'}}>
                    <span className="world-card__levels">{w.levels} Levels</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== QUICK START ===== */
const quickLinks = [
  { img: '/img/features/copilot.png', label: 'GitHub Copilot', world: 'W5-3', to: '/docs/world-5/5-3_github-copilot' },
  { img: '/img/features/brain.png', label: 'What is an AI Agent', world: 'W5-4', to: '/docs/world-5/5-4_what-is-an-agent' },
  { img: '/img/features/books.png', label: 'RAG', world: 'W7-2', to: '/docs/world-7/7-2-rag' },
  { img: '/img/features/sdd.png', label: 'Spec-Driven Development', world: 'W5-10', to: '/docs/world-5/5-10_sdd' },
  { img: '/img/features/agents.png', label: 'Custom Agents', world: 'W6-1', to: '/docs/world-6/6-1-custom-agents' },
  { img: '/img/features/hooks.png', label: 'Hands-on Project', world: 'W7-Boss', to: '/docs/world-7/7-boss-practical-project' },
];

function QuickStart() {
  return (
    <section className="quickstart">
      <div className="container">
        <Heading as="h2" style={{textAlign: 'center', marginBottom: '0.3rem'}}>
          Quick Start
        </Heading>
        <p style={{textAlign: 'center', color: 'var(--ifm-color-emphasis-600)', marginBottom: '1.5rem'}}>
          Know the basics? Warp directly to what you need.
        </p>

        <div className="pipe-divider" style={{marginBottom: '1rem'}}>
          <div className="pipe-divider__pipe" />
        </div>

        <div className="row" style={{justifyContent: 'center'}}>
          <div className="col col--6">
            {quickLinks.map((q, i) => (
              <Link key={i} to={q.to} className="pipe-link">
                <span className="pipe-link__icon">
                  <PixelImg src={q.img} alt={q.label} size={32} />
                </span>
                <span className="pipe-link__label">{q.label}</span>
                <span className="pipe-link__world">{q.world}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== BANNER ===== */
function Banner() {
  const bannerSrc = useBaseUrl('/img/super-agentic-devops-world-banner.jpeg');
  return (
    <section className="banner-section">
      <div className="container">
        <img
          src={bannerSrc}
          alt="Super Agentic DevOps World — Made for Sofia"
          className="banner-image"
          style={{maxWidth: '850px', width: '100%'}}
          loading="lazy"
        />
        <div style={{marginTop: '2rem'}}>
          <Link className="btn-start btn-green" to="/docs/intro">
            START AT WORLD 1-1
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ===== PAGE ===== */
export default function Home(): ReactNode {
  return (
    <Layout
      title="Press START to Learn"
      description="The complete guide to Agentic DevOps explained through Super Mario World analogies">
      <Hero />
      <main>
        <Stats />
        <Features />
        <Story />
        <WorldMap />
        <QuickStart />
        <Banner />
      </main>
    </Layout>
  );
}
