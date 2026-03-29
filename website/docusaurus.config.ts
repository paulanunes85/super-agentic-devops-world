import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Super Agentic DevOps World',
  tagline: 'Made for Sofia — DevOps & AI Agents explained through Super Mario World analogies',
  favicon: 'img/favicon.svg',

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
    format: 'detect',
  },

  clientModules: [
    './src/clientModules/worldTheme.ts',
  ],

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'DevOps, AI Agents, GitHub Copilot, Kubernetes, Docker, CI/CD, RAG, MCP, tutorial, learning, Super Mario World',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Paula Silva',
      },
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR'],
    localeConfigs: {
      en: { label: 'English', direction: 'ltr' },
      'pt-BR': { label: 'Português (BR)', direction: 'ltr' },
    },
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'pt'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        indexBlog: false,
      },
    ],
  ],

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
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',

    metadata: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@paulanunes85' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Super Agentic DevOps World' },
    ],

    announcementBar: {
      id: 'launch_2026',
      content: '⭐ <b>8 Worlds · 70+ Levels · 14 Diagrams</b> — The complete guide to Agentic DevOps, explained through Super Mario World. <a href="/super-agentic-devops-world/docs/intro">Start your journey!</a>',
      backgroundColor: '#1A1A2E',
      textColor: '#FBD000',
      isCloseable: true,
    },

    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },

    navbar: {
      hideOnScroll: true,
      title: 'Super Agentic DevOps World',
      logo: {
        alt: 'Super Agentic DevOps World — AI Agent',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        width: 36,
        height: 36,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'worldsSidebar',
          position: 'left',
          label: '🗺️ Worlds',
        },
        {
          to: '/docs/intro',
          label: '📖 Index',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/paulanunes85/super-agentic-devops-world',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
            { label: '🕳️ World 2 — Underground', to: '/docs/world-2/2-1-ambientes' },
            { label: '☁️ World 3 — Sky World', to: '/docs/world-3/3-1-arvore_habilidades' },
            { label: '🌊 World 4 — Water World', to: '/docs/world-4/4-1-auth' },
          ],
        },
        {
          title: 'Advanced',
          items: [
            { label: '🏰 World 5 — AI & Agents', to: '/docs/world-5/5-1_devops-evolution' },
            { label: '🔥 World 6 — Copilot Ecosystem', to: '/docs/world-6/6-1-custom-agents' },
            { label: '⭐ World 7 — Star World', to: '/docs/world-7/7-1-azure-ai-foundry' },
            { label: '👑 World 8 — Final Castle', to: '/docs/world-8/8-1-how-everything-connects' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Brand Guide', to: '/docs/brand-guide' },
            { label: 'GitHub', href: 'https://github.com/paulanunes85/super-agentic-devops-world' },
            { label: 'Author — Paula Silva', href: 'https://github.com/paulanunes85' },
          ],
        },
      ],
      copyright: `Made for Sofia with ❤️ by <a href="https://github.com/paulanunes85" target="_blank" rel="noopener">Paula Silva</a> · Software Global Black Belt, Microsoft Americas · © ${new Date().getFullYear()}`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json', 'python', 'typescript', 'csharp', 'sql', 'docker', 'powershell', 'jsx', 'tsx'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
