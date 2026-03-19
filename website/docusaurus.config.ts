import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Super Agentic DevOps World',
  tagline: 'Made for Sofia — DevOps & AI Agents explained through Super Mario World analogies',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://paulanunes85.github.io',
  baseUrl: '/super-agentic-devops-world/',

  organizationName: 'paulanunes85',
  projectName: 'super-agentic-devops-world',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  markdown: {
    format: "md",
  },

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR'],
    localeConfigs: {
      en: { label: 'English', direction: 'ltr' },
      'pt-BR': { label: 'Português (BR)', direction: 'ltr' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/paulanunes85/super-agentic-devops-world/tree/main/website/',
          showLastUpdateTime: true,
          remarkPlugins: [],
          rehypePlugins: [],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Super Agentic DevOps World',
      logo: {
        alt: 'Super Agentic DevOps World',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'worldsSidebar',
          position: 'left',
          label: '🗺️ Worlds',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/paulanunes85/super-agentic-devops-world',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Worlds',
          items: [
            { label: '🌿 World 1 — Green Plains', to: '/docs/world-1/1-1-vs-code' },
            { label: '🕳️ World 2 — Underground', to: '/docs/world-2/2-1-environments' },
            { label: '☁️ World 3 — Sky World', to: '/docs/world-3/3-1-skill-tree' },
            { label: '🌊 World 4 — Water World', to: '/docs/world-4/4-1-auth' },
          ],
        },
        {
          title: 'Advanced',
          items: [
            { label: '🏰 World 5 — AI & Agents', to: '/docs/world-5/5-1-devops-evolution' },
            { label: '🔥 World 6 — Copilot Ecosystem', to: '/docs/world-6/6-1-custom-agents' },
            { label: '⭐ World 7 — Star World', to: '/docs/world-7/7-1-ai-foundry' },
            { label: '👑 World 8 — Final Castle', to: '/docs/world-8/8-1-connections' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/paulanunes85/super-agentic-devops-world' },
            { label: 'Brand Guide', to: '/docs/brand-guide' },
          ],
        },
      ],
      copyright: `Made for Sofia with ❤️ by <a href="https://github.com/paulanunes85">Paula Silva</a> · Software Global Black Belt, Microsoft Americas`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json', 'python', 'typescript', 'csharp', 'sql', 'docker'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
