import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          ⭐ {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            🎮 Press START — Begin the Journey
          </Link>
        </div>
      </div>
    </header>
  );
}

const worlds = [
  { emoji: '🌿', name: 'World 1', theme: 'Green Plains', desc: 'VS Code, Git, GitHub, Actions, Azure', link: '/docs/world-1/1-1-vs-code', levels: 8 },
  { emoji: '🕳️', name: 'World 2', theme: 'Underground', desc: 'APIs, Security, DNS, DevOps', link: '/docs/world-2/2-1-ambientes', levels: 8 },
  { emoji: '☁️', name: 'World 3', theme: 'Sky World', desc: 'Docker, Tests, Languages, Frameworks', link: '/docs/world-3/3-1-arvore_habilidades', levels: 12 },
  { emoji: '🌊', name: 'World 4', theme: 'Water World', desc: 'Auth, Architecture, Deploy, Cache', link: '/docs/world-4/4-1-auth', levels: 9 },
  { emoji: '🏰', name: 'World 5', theme: "Bowser's Castle 1", desc: 'Copilot, AI Agents, GHAS, SDD', link: '/docs/world-5/5-1-devops-evolution', levels: 11 },
  { emoji: '🔥', name: 'World 6', theme: "Bowser's Castle 2", desc: 'Skills, Hooks, MCP, Orchestration', link: '/docs/world-6/6-1-custom-agents', levels: 10 },
  { emoji: '⭐', name: 'World 7', theme: 'Star World', desc: 'RAG, LangChain, IDP/Backstage', link: '/docs/world-7/7-1-azure-ai-foundry', levels: 7 },
  { emoji: '👑', name: 'World 8', theme: 'Final Castle', desc: 'Complete Picture, Glossary', link: '/docs/world-8/8-1-how-everything-connects', levels: 4 },
];

function WorldMap() {
  return (
    <section style={{ padding: '2rem 0' }}>
      <div className="container">
        <Heading as="h2" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          🗺️ The World Map
        </Heading>
        <div className="row">
          {worlds.map((w, i) => (
            <div key={i} className="col col--3" style={{ marginBottom: '1rem' }}>
              <Link to={w.link} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '1rem', height: '100%', border: '2px solid #E52521', borderRadius: '8px' }}>
                  <div style={{ fontSize: '2rem', textAlign: 'center' }}>{w.emoji}</div>
                  <Heading as="h3" style={{ textAlign: 'center', fontSize: '1rem', margin: '0.5rem 0' }}>
                    {w.name}
                  </Heading>
                  <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#666', margin: '0' }}>
                    {w.theme} · {w.levels} Levels
                  </p>
                  <p style={{ textAlign: 'center', fontSize: '0.8rem', margin: '0.5rem 0 0' }}>
                    {w.desc}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section style={{ padding: '2rem 0', backgroundColor: 'var(--ifm-background-surface-color)' }}>
      <div className="container">
        <Heading as="h2" style={{ textAlign: 'center' }}>
          🤝 Made for Sofia
        </Heading>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p>
            Sofia is my daughter. When she asked me to teach her about software development,
            I realized that the usual tutorials weren't built for someone starting from absolute zero.
          </p>
          <p>
            So I decided to explain everything through <strong>Super Mario World</strong> — a game
            where the rules are simple, the progression is clear, and anyone can play.
          </p>
          <p>
            <em>Every developer starts at World 1-1. Sofia did. And now, so can you.</em>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Press START to Learn"
      description="The complete guide to Agentic DevOps explained through Super Mario World analogies">
      <HomepageHeader />
      <main>
        <Story />
        <WorldMap />
      </main>
    </Layout>
  );
}
