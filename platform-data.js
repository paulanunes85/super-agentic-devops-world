/* ============================================================
   PLATFORM DATA — Worlds, Lessons, Badges, Characters
   ============================================================ */

window.PLATFORM_DATA = {
  characters: [
    { id: "sofia",  name: "Sofia",  role: "Developer Hero",     color: "#E52521", emoji: "👩‍💻", desc: "Curious, fast learner. Great with Git & GitHub." },
    { id: "lucas",  name: "Lucas",  role: "Cloud Architect",    color: "#43B047", emoji: "👨‍💼", desc: "Loves infra. Azure wizard in training." },
    { id: "maya",   name: "Maya",   role: "AI Engineer",        color: "#FF2E88", emoji: "🧙‍♀️", desc: "AI whisperer. Summons agents." },
    { id: "kenji",  name: "Kenji",  role: "Security Guardian",  color: "#049CD8", emoji: "🥷",    desc: "Zero-trust samurai. Finds every CVE." }
  ],

  worlds: [
    {
      id: 1, slug: "green-plains",
      name: "Green Plains",
      subtitle: "Fundamentals",
      color: "#43B047",
      icon: "🌱",
      unlocked: true,
      levels: [
        { id: "1-1", title: "Pressing START",   topic: "VS Code",         sub: "The Game Console",           xp: 150, coins: 25, status: "active" },
        { id: "1-2", title: "Save Game",        topic: "Git",             sub: "Version Control",            xp: 200, coins: 35, status: "unlocked" },
        { id: "1-3", title: "The Cloud Castle", topic: "GitHub",          sub: "Your Repository Kingdom",    xp: 220, coins: 40, status: "unlocked"   },
        { id: "1-4", title: "Auto-Warp Pipes",  topic: "GitHub Actions",  sub: "CI/CD Automation",           xp: 260, coins: 45, status: "unlocked"   },
        { id: "1-5", title: "Azure Horizons",   topic: "Azure",           sub: "Cloud Platform",             xp: 280, coins: 50, status: "unlocked"   },
        { id: "1-6", title: "AI Companions",    topic: "Azure AI",        sub: "Models & Services",          xp: 300, coins: 55, status: "unlocked"   },
        { id: "1-7", title: "Connection Wires", topic: "Integrations",    sub: "Linking Services",           xp: 260, coins: 45, status: "unlocked"   },
        { id: "1-B", title: "BOSS — Bowser Jr.", topic: "Practice",        sub: "Build your first app",       xp: 500, coins: 100, status: "unlocked", boss: true }
      ]
    },
    {
      id: 2, slug: "underground-caves",
      name: "Underground Caves",
      subtitle: "Infrastructure & DevOps Foundations",
      color: "#8B5A2B",
      icon: "🕳️",
      unlocked: true,
      levels: [
        { id: "2-1", title: "Parallel Worlds",             topic: "Environments",     sub: "Dev, Staging, Production",          xp: 220, coins: 35, status: "unlocked" },
        { id: "2-2", title: "Messenger Between Kingdoms",  topic: "APIs",             sub: "HTTP methods & REST",               xp: 240, coins: 40, status: "unlocked" },
        { id: "2-3", title: "Protection Spells",           topic: "Security",         sub: "Secrets, HTTPS, Key Vault",         xp: 260, coins: 45, status: "unlocked" },
        { id: "2-4", title: "The World Map",               topic: "DNS",              sub: "Domains & resolution",              xp: 220, coins: 35, status: "unlocked" },
        { id: "2-5", title: "Tournament Rules",            topic: "Methodologies",    sub: "Agile, Scrum, Kanban",              xp: 240, coins: 40, status: "unlocked" },
        { id: "2-6", title: "Alliance of Classes",         topic: "DevOps",           sub: "DevOps culture & IaC",              xp: 280, coins: 50, status: "unlocked" },
        { id: "2-7", title: "Character's Senses",          topic: "Observability",    sub: "Logs, metrics, alerts",             xp: 280, coins: 50, status: "unlocked" },
        { id: "2-B", title: "BOSS — Dry Bones",            topic: "Practice",         sub: "Practical exercises",               xp: 500, coins: 100, status: "unlocked", boss: true }
      ]
    },
    {
      id: 3, slug: "sky-world",
      name: "Sky World",
      subtitle: "Tools & Languages",
      color: "#049CD8",
      icon: "☁️",
      unlocked: true,
      levels: [
        { id: "3-1",  title: "Skill Tree",           topic: "Evolution Path",   sub: "Progression map",               xp: 220, coins: 35, status: "unlocked" },
        { id: "3-2",  title: "Command Console",      topic: "Terminal",         sub: "Bash, PowerShell, CLI",         xp: 260, coins: 45, status: "unlocked" },
        { id: "3-3",  title: "Art of Packaging",     topic: "Docker",           sub: "Containers & Compose",          xp: 300, coins: 55, status: "unlocked" },
        { id: "3-4",  title: "Training Ground",      topic: "Testing",          sub: "Unit, Integration, E2E",        xp: 280, coins: 50, status: "unlocked" },
        { id: "3-5",  title: "Mushroom Licenses",    topic: "Open Source",      sub: "Licenses & contributions",      xp: 220, coins: 35, status: "unlocked" },
        { id: "3-6",  title: "Castle of Data",       topic: "Databases",        sub: "SQL, NoSQL, Prisma",            xp: 320, coins: 60, status: "unlocked" },
        { id: "3-7",  title: "Guild Best Practices", topic: "Best Practices",   sub: "SemVer, README, repo rules",    xp: 240, coins: 40, status: "unlocked" },
        { id: "3-8",  title: "Kingdom Pipes",        topic: "Internet",         sub: "TCP/IP, HTTP, DNS, ports",      xp: 260, coins: 45, status: "unlocked" },
        { id: "3-9",  title: "RPG Classes",          topic: "Languages",        sub: "Py, JS, TS, C#, Java, Go, Rust",xp: 280, coins: 50, status: "unlocked" },
        { id: "3-10", title: "Weapons & Armor",      topic: "Frameworks",       sub: "React, .NET, Django, Spring",   xp: 280, coins: 50, status: "unlocked" },
        { id: "3-11", title: "The Inventory",        topic: "Packages",         sub: "npm, pip, NuGet",               xp: 240, coins: 40, status: "unlocked" },
        { id: "3-B",  title: "BOSS — Angry Sun",     topic: "Practice",         sub: "Tooling challenges",            xp: 600, coins: 120, status: "unlocked", boss: true }
      ]
    },
    {
      id: 4, slug: "water-world",
      name: "Water World",
      subtitle: "Advanced Architecture",
      color: "#1E88E5",
      icon: "🌊",
      unlocked: true,
      levels: [
        { id: "4-1", title: "Advanced Protection",   topic: "Auth",             sub: "JWT, OAuth 2.0, SSO",           xp: 300, coins: 55, status: "unlocked" },
        { id: "4-2", title: "Service Tiers",         topic: "Cloud Models",     sub: "IaaS, PaaS, SaaS, Serverless",  xp: 260, coins: 45, status: "unlocked" },
        { id: "4-3", title: "Fortress Map",          topic: "Architecture",     sub: "Monolith, microservices, MVC",  xp: 320, coins: 60, status: "unlocked" },
        { id: "4-4", title: "Launch Strategies",     topic: "Advanced Deploy",  sub: "Blue-green, canary, rolling",   xp: 300, coins: 55, status: "unlocked" },
        { id: "4-5", title: "Team Workflows",        topic: "Git Workflows",    sub: "Git Flow, trunk-based",         xp: 260, coins: 45, status: "unlocked" },
        { id: "4-6", title: "Coins & Stars",         topic: "Data Structures",  sub: "Arrays, objects, JSON",         xp: 280, coins: 50, status: "unlocked" },
        { id: "4-7", title: "Super Star Mode",       topic: "Cache",            sub: "Redis, CDN, lazy loading",      xp: 320, coins: 60, status: "unlocked" },
        { id: "4-8", title: "Kingdom Mail",          topic: "Messaging",        sub: "Queues, Service Bus, Kafka",    xp: 320, coins: 60, status: "unlocked" },
        { id: "4-B", title: "BOSS — Big Bertha",     topic: "Challenge",        sub: "Architecture boss",             xp: 700, coins: 140, status: "unlocked", boss: true }
      ]
    },
    {
      id: 5, slug: "bowser-castle-1",
      name: "Bowser's Castle I",
      subtitle: "AI & Agents Theory",
      color: "#E52521",
      icon: "🏰",
      unlocked: true,
      levels: [
        { id: "5-1",  title: "Swords to Robots",        topic: "DevOps Evolution",    sub: "From Traditional to Agentic",   xp: 300, coins: 55, status: "unlocked" },
        { id: "5-2",  title: "Apprentice → Legendary",  topic: "AI Maturity",         sub: "5 maturity levels",             xp: 280, coins: 50, status: "unlocked" },
        { id: "5-3",  title: "Ultimate Companion",      topic: "GitHub Copilot",      sub: "All Copilot modes",             xp: 340, coins: 65, status: "unlocked" },
        { id: "5-4",  title: "NPCs Come Alive",         topic: "What is an Agent",    sub: "LLM + Tools + Memory + Goals",  xp: 280, coins: 50, status: "unlocked" },
        { id: "5-5",  title: "Who's Who",               topic: "Agent Types",         sub: "IDE, Background, Dev, Prod",    xp: 300, coins: 55, status: "unlocked" },
        { id: "5-6",  title: "Yoshis Fly Solo",         topic: "Autonomous Agents",   sub: "Planning loops & guardrails",   xp: 320, coins: 60, status: "unlocked" },
        { id: "5-7",  title: "Universal Warp Zones",    topic: "MCP Deep Dive",       sub: "Model Context Protocol",        xp: 340, coins: 65, status: "unlocked" },
        { id: "5-8",  title: "Three Horizons",          topic: "Evolution Strategy",  sub: "Adoption framework",            xp: 260, coins: 45, status: "unlocked" },
        { id: "5-9",  title: "Star Shield",             topic: "GHAS",                sub: "Code & Secret Scanning",        xp: 320, coins: 60, status: "unlocked" },
        { id: "5-10", title: "Castle Blueprint",        topic: "SDD",                 sub: "Spec-Driven Development",       xp: 340, coins: 65, status: "unlocked" },
        { id: "5-B",  title: "BOSS — Bowser I",         topic: "Quiz",                sub: "Review battle",                 xp: 800, coins: 160, status: "unlocked", boss: true }
      ]
    },
    {
      id: 6, slug: "bowser-castle-2",
      name: "Bowser's Castle II",
      subtitle: "Copilot Ecosystem (Hands-on)",
      color: "#B22222",
      icon: "🔥",
      unlocked: true,
      levels: [
        { id: "6-1", title: "Character Select",      topic: "Custom Agents",        sub: ".agent.md files",            xp: 320, coins: 60, status: "unlocked" },
        { id: "6-2", title: "Power-Up Shop",         topic: "Agent Skills",         sub: "SKILL.md & abilities",       xp: 320, coins: 60, status: "unlocked" },
        { id: "6-3", title: "Game Rulebook",         topic: "Custom Instructions",  sub: "Permanent Copilot rules",    xp: 280, coins: 50, status: "unlocked" },
        { id: "6-4", title: "Reusable Warp Pipes",   topic: "Prompt Files",         sub: ".prompt.md automation",      xp: 280, coins: 50, status: "unlocked" },
        { id: "6-5", title: "The ? Blocks",          topic: "Hooks",                sub: "Automatic triggers",         xp: 300, coins: 55, status: "unlocked" },
        { id: "6-6", title: "Practical Warp Zones",  topic: "MCP Practical",        sub: "MCP in production",          xp: 320, coins: 60, status: "unlocked" },
        { id: "6-7", title: "Coordinated Multi",     topic: "Orchestration",        sub: "Lean Agent + Rich Skill",    xp: 340, coins: 65, status: "unlocked" },
        { id: "6-8", title: "Wise Coins",            topic: "Token Economy",        sub: "Optimize token usage",       xp: 300, coins: 55, status: "unlocked" },
        { id: "6-B", title: "BOSS — Bowser II",      topic: "Cheat Sheet",          sub: "Quick reference battle",     xp: 900, coins: 180, status: "unlocked", boss: true }
      ]
    },
    {
      id: 7, slug: "star-world",
      name: "Star World",
      subtitle: "AI Frameworks & Production",
      color: "#FFD700",
      icon: "⭐",
      unlocked: true,
      levels: [
        { id: "7-1", title: "Magikoopa's Forge",       topic: "Azure AI Foundry",       sub: "Model Catalog, Prompt Flow",   xp: 360, coins: 70, status: "unlocked" },
        { id: "7-2", title: "Magic Library",           topic: "RAG",                    sub: "Embeddings + Vector DB",       xp: 380, coins: 75, status: "unlocked" },
        { id: "7-3", title: "Power-Up Chain",          topic: "LangChain",              sub: "Chains, agents, LCEL",         xp: 380, coins: 75, status: "unlocked" },
        { id: "7-4", title: "Framework of Heroes",     topic: "MS Agentic Framework",   sub: "SK, AutoGen, AI SDK",          xp: 360, coins: 70, status: "unlocked" },
        { id: "7-5", title: "4 Worlds of Agents",      topic: "Four Channels",          sub: "IDE, Chat, ChatOps, BG",       xp: 340, coins: 65, status: "unlocked" },
        { id: "7-6", title: "Central Plaza",           topic: "IDP & Backstage",        sub: "Internal Developer Platform",  xp: 360, coins: 70, status: "unlocked" },
        { id: "7-B", title: "BOSS — Practical Project",topic: "Build an Agent",         sub: "Your first RAG agent",         xp: 1000, coins: 200, status: "unlocked", boss: true }
      ]
    },
    {
      id: 8, slug: "final-castle",
      name: "Final Castle",
      subtitle: "The Complete Picture",
      color: "#1A1A1A",
      icon: "🏯",
      unlocked: true,
      levels: [
        { id: "8-1", title: "Complete Map",           topic: "Everything Connects",  sub: "Panoramic view",            xp: 400, coins: 80, status: "unlocked" },
        { id: "8-2", title: "Boss Rush",              topic: "All Worlds",           sub: "Challenging scenarios",     xp: 800, coins: 160, status: "unlocked" },
        { id: "8-3", title: "End & Beginning",        topic: "Next Steps",           sub: "Certs, communities",        xp: 300, coins: 55, status: "unlocked" },
        { id: "8-F", title: "FINAL — Encyclopedia",   topic: "Glossary",             sub: "120+ terms",                xp: 2000, coins: 500, status: "unlocked", boss: true }
      ]
    }
  ],

  badges: [
    { id: "first-commit",   name: "First Commit",      icon: "🎖️", desc: "Made your first Git commit",        earned: true  },
    { id: "pr-master",      name: "PR Master",         icon: "🔀", desc: "Merged 5 pull requests",            earned: true  },
    { id: "pipeline-pro",   name: "Pipeline Pro",      icon: "⚙️", desc: "Built a working CI/CD pipeline",    earned: false },
    { id: "cloud-climber",  name: "Cloud Climber",     icon: "☁️", desc: "Deployed to Azure",                 earned: false },
    { id: "ai-whisperer",   name: "AI Whisperer",      icon: "🧙", desc: "Integrated a Copilot agent",        earned: false },
    { id: "security-sage",  name: "Security Sage",     icon: "🛡️", desc: "Patched a critical vulnerability",  earned: false },
    { id: "speedrun-king",  name: "Speedrun King",     icon: "⚡", desc: "Complete World 1 in under 2 hours", earned: false },
    { id: "boss-slayer",    name: "Boss Slayer",       icon: "🏆", desc: "Defeated your first Boss",          earned: false }
  ],

  leaderboard: [
    { rank: 1, name: "mario_dev",     level: 47, xp: 24800, coins: 3250, country: "🇧🇷" },
    { rank: 2, name: "princess_peach",level: 44, xp: 22100, coins: 2980, country: "🇺🇸" },
    { rank: 3, name: "luigi_ops",     level: 41, xp: 19600, coins: 2740, country: "🇯🇵" },
    { rank: 4, name: "toad_sre",      level: 38, xp: 17200, coins: 2510, country: "🇩🇪" },
    { rank: 5, name: "yoshi_qa",      level: 36, xp: 16400, coins: 2380, country: "🇲🇽" },
    { rank: 6, name: "bowser_chaos",  level: 34, xp: 15100, coins: 2240, country: "🇨🇦" },
    { rank: 7, name: "you",           level: 8,  xp: 1250,  coins: 180,  country: "🇧🇷", isYou: true },
    { rank: 8, name: "daisy_cloud",   level: 32, xp: 14200, coins: 2100, country: "🇪🇸" }
  ],

  shop: [
    { id: "hint",         name: "Hint Mushroom",   icon: "🍄", price: 50,  desc: "Reveals a hint for any quiz", qty: 3 },
    { id: "skip",         name: "Warp Pipe",        icon: "🟢", price: 200, desc: "Skip one level instantly",    qty: 0 },
    { id: "double-xp",    name: "Super Star",       icon: "⭐", price: 150, desc: "Double XP for next lesson",   qty: 1 },
    { id: "revive",       name: "1-UP",             icon: "💚", price: 100, desc: "Extra life in quiz mode",     qty: 2 },
    { id: "skin-luigi",   name: "Luigi Skin",       icon: "👘", price: 500, desc: "Change Sofia to green outfit",qty: 0, cosmetic: true },
    { id: "skin-fire",    name: "Fire Flower Skin", icon: "🔥", price: 750, desc: "Flaming hero outfit",         qty: 0, cosmetic: true },
    { id: "theme-neon",   name: "Neon Theme",       icon: "🌃", price: 1000,desc: "Unlock Neon platform theme",  qty: 1, cosmetic: true },
    { id: "theme-arcade", name: "Arcade Theme",     icon: "🕹️", price: 1000,desc: "Unlock Arcade 80s theme",     qty: 1, cosmetic: true }
  ],

  glossary: [
    /* World 1 — Green Plains (Fundamentals) */
    { term: "VS Code", def: "Your game console for writing software — the IDE where it all begins.", world: 1 },
    { term: "Git", def: "The ultimate save system — version control that records every change.", world: 1 },
    { term: "Commit", def: "A saved snapshot in Git — like a memory card save point.", world: 1 },
    { term: "Repository", def: "A project's folder tracked by Git, including all history — the world map.", world: 1 },
    { term: "Branch", def: "A parallel universe in Git where you work without breaking main.", world: 1 },
    { term: "Pull Request", def: "A proposal to merge changes, reviewed by peers — a team quest.", world: 1 },
    { term: "GitHub", def: "Cloud castle where heroes store their adventures — remote repo hosting.", world: 1 },
    { term: "GitHub Actions", def: "Lakitu on the cloud — CI/CD automation that checks everything from above.", world: 1 },
    { term: "CI/CD", def: "Continuous Integration / Delivery — automated pipeline that builds, tests, and ships code.", world: 1 },
    { term: "Azure", def: "Microsoft's cloud platform — castle kingdom of services.", world: 1 },
    { term: "Copilot", def: "GitHub's AI pair programmer, embedded in VS Code — your companion.", world: 1 },
    { term: "Deploy", def: "Ship code to production — open the castle doors to the public.", world: 1 },
    { term: "Pipeline", def: "A chain of automated build/test/deploy steps.", world: 1 },

    /* World 2 — Underground Caves (Infrastructure) */
    { term: "Environment", def: "Dev, Staging, Production — parallel worlds where your app runs.", world: 2 },
    { term: "API", def: "Application Programming Interface — messenger between kingdoms (HTTP methods & REST).", world: 2 },
    { term: "REST", def: "REpresentational State Transfer — the standard protocol for APIs using HTTP methods.", world: 2 },
    { term: "HTTPS", def: "HTTP over TLS — encrypted communication channel protecting data in transit.", world: 2 },
    { term: "Key Vault", def: "Azure's secret vault — manages secrets, keys, and certificates securely.", world: 2 },
    { term: "DNS", def: "Domain Name System — the phonebook of the internet. Names → IPs.", world: 2 },
    { term: "Scrum", def: "Agile framework with sprints, stand-ups, and retrospectives.", world: 2 },
    { term: "Kanban", def: "Visual workflow management — board + WIP limits for smooth flow.", world: 2 },
    { term: "DevOps", def: "Culture + practices uniting Dev and Ops — the alliance of classes.", world: 2 },
    { term: "IaC", def: "Infrastructure as Code — version your cloud with Terraform or Bicep.", world: 2 },
    { term: "Observability", def: "The three pillars: Logs, Metrics, Traces — your character's senses.", world: 2 },

    /* World 3 — Sky World (Tools & Languages) */
    { term: "Terminal", def: "Command line interface — the debug/cheat menu where you run commands.", world: 3 },
    { term: "Docker", def: "Container platform — a shrink-ray for your app into lightweight packages.", world: 3 },
    { term: "Container", def: "Lightweight isolated runtime sharing the host kernel — a portable level.", world: 3 },
    { term: "Dockerfile", def: "Blueprint for building a container image — the level construction script.", world: 3 },
    { term: "Unit Test", def: "Tests a single function in isolation — training against dummies.", world: 3 },
    { term: "E2E Test", def: "End-to-end test that exercises the full stack like a real user.", world: 3 },
    { term: "Open Source", def: "Software with public source code — community-built power-ups.", world: 3 },
    { term: "SQL", def: "Structured Query Language — the language of relational databases.", world: 3 },
    { term: "NoSQL", def: "Non-relational databases — flexible schemas for specific access patterns.", world: 3 },
    { term: "SemVer", def: "Semantic Versioning — MAJOR.MINOR.PATCH version numbering.", world: 3 },
    { term: "TypeScript", def: "JavaScript with static types — armor that protects against bugs.", world: 3 },
    { term: "Python", def: "Versatile language for data science, scripting, AI/ML, and automation.", world: 3 },
    { term: "React", def: "UI library for building component-based user interfaces.", world: 3 },
    { term: "npm", def: "Node.js package manager — the power-up shop for JavaScript.", world: 3 },

    /* World 4 — Water World (Advanced Architecture) */
    { term: "JWT", def: "JSON Web Token — a signed token carrying claims for authentication.", world: 4 },
    { term: "OAuth", def: "Delegated authorization protocol — who can do what on whose behalf.", world: 4 },
    { term: "Microservices", def: "Architecture of small independent services — each with its own castle.", world: 4 },
    { term: "Serverless", def: "You don't manage servers; pay per execution — invisible infrastructure.", world: 4 },
    { term: "Blue-Green Deploy", def: "Two parallel environments — switch traffic for zero-downtime releases.", world: 4 },
    { term: "Canary Deploy", def: "Send small % to new version, monitor, then expand — safe rollout.", world: 4 },
    { term: "Feature Flag", def: "Turn features on/off at runtime without deploy — ship dark, flip on.", world: 4 },
    { term: "Terraform", def: "Infrastructure as Code tool — describe cloud resources declaratively.", world: 4 },
    { term: "Kubernetes", def: "Container orchestration — the arcade boss of distributed systems.", world: 4 },
    { term: "JSON", def: "JavaScript Object Notation — universal data format for APIs.", world: 4 },
    { term: "Cache", def: "Memory-speed data store — reuse results instead of recomputing.", world: 4 },
    { term: "CDN", def: "Content Delivery Network — edge nodes serving content close to users.", world: 4 },
    { term: "Message Queue", def: "Async buffer decoupling producers and consumers — kingdom mail.", world: 4 },

    /* World 5 — Bowser's Castle I (AI & Agents Theory) */
    { term: "Agentic DevOps", def: "DevOps augmented with AI agents that can plan and act autonomously.", world: 5 },
    { term: "AI Maturity", def: "5 levels from Apprentice to Legendary — your evolution path.", world: 5 },
    { term: "Agent", def: "LLM + Tools + Memory + Goals — an NPC that came to life and makes its own decisions.", world: 5 },
    { term: "Agent Loop", def: "Observe → Plan → Act → Observe cycle of autonomous agents.", world: 5 },
    { term: "IDE Agent", def: "Companion in your pocket — walks WITH you through the level in your editor.", world: 5 },
    { term: "Background Agent", def: "NPC working in a distant castle — async tasks while you're away.", world: 5 },
    { term: "Autonomous Agent", def: "Yoshi that flies solo with guardrails — freedom within defined limits.", world: 5 },
    { term: "Zero Trust", def: "Never trust, always verify — security model for the agentic era.", world: 5 },
    { term: "GHAS", def: "GitHub Advanced Security — Star Shield with Code Scanning, Secret Scanning, Dependabot.", world: 5 },
    { term: "SDD", def: "Spec-Driven Development — write the spec, let the agent implement to it.", world: 5 },
    { term: "Guardrails", def: "Limits on tools, domains, budgets, and approval gates for agent safety.", world: 5 },
    { term: "LLM", def: "Large Language Model — the brain behind chat AI and agents.", world: 5 },

    /* World 6 — Bowser's Castle II (Copilot Ecosystem) */
    { term: "Custom Agent", def: "Specialized agent defined in .agent.md — a character sheet on the selection screen.", world: 6 },
    { term: "Skill", def: "Reusable capability in SKILL.md — a Power-Up manual for agents.", world: 6 },
    { term: "Custom Instructions", def: "Permanent rules for Copilot — invisible gravity that always applies.", world: 6 },
    { term: "Prompt File", def: ".prompt.md reusable shortcut — a Warp Pipe to a specific task.", world: 6 },
    { term: "Hook", def: "Automatic trigger on events — a '?' Block that fires on commit/push.", world: 6 },
    { term: "MCP", def: "Model Context Protocol — Warp Zones letting agents travel to other tool worlds.", world: 6 },
    { term: "Orchestrator", def: "Player 1 coordinating the multiplayer — lean agent delegating to specialists.", world: 6 },
    { term: "Handoff", def: "Tag-team — one agent finishes, passes control to the next specialist.", world: 6 },
    { term: "Token Optimization", def: "Coin budget per level — spend wisely on the actions that matter.", world: 6 },
    { term: "Agentic", def: "AI that acts on goals, not just answers — uses tools in a loop.", world: 6 },

    /* World 7 — Star World (AI Frameworks) */
    { term: "AI Foundry", def: "Magikoopa's Forge — discover, evaluate, deploy, and manage AI models.", world: 7 },
    { term: "RAG", def: "Retrieval-Augmented Generation — Magic Library, consult docs to ground answers.", world: 7 },
    { term: "Embeddings", def: "Vectors representing semantic meaning of text — similar meaning → close vectors.", world: 7 },
    { term: "Vector DB", def: "Database storing embeddings with ANN search for semantic retrieval.", world: 7 },
    { term: "LangChain", def: "Power-Up Chain — framework for composing LLM apps with chains, agents, tools.", world: 7 },
    { term: "Semantic Kernel", def: "Microsoft's universal magic engine — AI orchestration SDK with plugins.", world: 7 },
    { term: "AutoGen", def: "Auto-team-builder — framework for multi-agent conversations.", world: 7 },
    { term: "IDP", def: "Internal Developer Platform — Central Hub Castle from which you access all worlds.", world: 7 },
    { term: "Backstage", def: "Spotify's open-source IDP — software catalog centralizing services and ownership.", world: 7 },

    /* World 8 — Final Castle (Complete Picture) */
    { term: "Systems Thinking", def: "Understanding how all pieces connect across the entire SDLC.", world: 8 },
    { term: "Escalation", def: "Game Over → call another human player when the agent can't do it.", world: 8 },
    { term: "Codespaces", def: "Arcade in the cloud — play from anywhere, no installation needed.", world: 8 }
  ]
};

/* ============================================================
   LESSON CONTENT — 2 full lessons from the real repo
   ============================================================ */
window.LESSONS = {
  "1-1": {
    id: "1-1",
    title: "Pressing START: VS Code, the Game Console",
    world: 1,
    topic: "VS Code",
    companion: "sofia",
    estimatedMin: 15,
    prologue: "Sofia looked at the screen. A cursor blinked patiently, waiting. It was like that moment in Super Mario Bros when the title screen appears and the game waits for you to press START. Nothing happens until you take the first step.",
    sections: [
      {
        heading: "1. The Console",
        body: "Just as you need a console (Nintendo, PlayStation, Xbox) to play Mario, you need a place to write, see, and run code. VS Code is that place — your game console for writing software.",
        visual: "console"
      },
      {
        heading: "2. VS Code Parts vs Console Parts",
        body: "Sidebar = Navigation Menu. Central Editor = Game Screen. Status Bar = HUD. Terminal = Debug Menu. Command Palette = Cheat Menu (Ctrl+Shift+P).",
        visual: "vscode-map"
      },
      {
        heading: "3. Extensions = Controller Accessories",
        body: "Extensions add power to your console. Essentials: Prettier (autoformat), GitLens (see history), GitHub Copilot (your AI companion), Live Server (preview HTML).",
        visual: "extensions"
      }
    ],
    codeExample: {
      lang: "bash",
      title: "Your first combo",
      code: "# Open the terminal\nCtrl + `\n\n# Check Node is installed\nnode --version\n\n# Run your first command\necho \"Hello, Mushroom Kingdom!\""
    },
    quiz: [
      {
        q: "What is the Command Palette shortcut in VS Code?",
        options: ["Ctrl + P", "Ctrl + Shift + P", "Ctrl + K", "F1 only"],
        correct: 1,
        explain: "Ctrl+Shift+P (or Cmd+Shift+P on Mac) opens the Command Palette — the cheat menu."
      },
      {
        q: "Which extension is your AI companion for coding?",
        options: ["Prettier", "GitLens", "GitHub Copilot", "Live Server"],
        correct: 2,
        explain: "GitHub Copilot is your AI pair programmer, right inside VS Code."
      },
      {
        q: "VS Code's Terminal is like the...",
        options: ["Main menu", "Pause screen", "Debug/Cheat menu", "Save screen"],
        correct: 2,
        explain: "The integrated terminal is where you run commands — your debug menu."
      }
    ]
  },
  "1-2": {
    id: "1-2",
    title: "Save Game: Git and the Save System",
    world: 1,
    topic: "Git",
    companion: "sofia",
    estimatedMin: 20,
    prologue: "Lucas lost 3 hours of work. No save, no memory card, nothing. Git is the ultimate memory card — not one save slot, but infinite ones.",
    sections: [
      {
        heading: "1. Version Control = Save System",
        body: "Git records every change you commit — like creating a new save slot on your memory card. You can return to any slot at any time.",
        visual: "savegame"
      },
      {
        heading: "2. The Three States",
        body: "Working directory (your desk) → Staging area (your tray) → Repository (your memory card). Move files through these with add → commit.",
        visual: "three-states"
      },
      {
        heading: "3. Branches = Parallel Universes",
        body: "A branch lets you try ideas without breaking the main game. Create with `git checkout -b feature`. Merge back when ready.",
        visual: "branches"
      }
    ],
    codeExample: {
      lang: "bash",
      title: "The Save Game combo",
      code: "# Initialize repo (format memory card)\ngit init\n\n# Check status\ngit status\n\n# Select files to save\ngit add README.md\n\n# Save with a message\ngit commit -m \"feat: press START\"\n\n# View history\ngit log --oneline"
    },
    quiz: [
      {
        q: "Which command actually saves changes to your Git history?",
        options: ["git save", "git add", "git commit", "git push"],
        correct: 2,
        explain: "git commit writes a permanent snapshot. git add just stages files for the next commit."
      },
      {
        q: "What does a branch represent?",
        options: ["A bug in Git", "A parallel universe of your code", "A remote backup", "A deleted file"],
        correct: 1,
        explain: "A branch is an independent line of development — your parallel universe."
      },
      {
        q: "Order the three Git states:",
        options: [
          "Commit → Stage → Work",
          "Work → Stage → Commit",
          "Stage → Work → Commit",
          "Work → Commit → Stage"
        ],
        correct: 1,
        explain: "You Work on files → Stage them with add → Commit them to history."
      }
    ]
  },
  "1-3": {
    id: "1-3",
    title: "The Cloud Castle: GitHub",
    world: 1,
    topic: "GitHub",
    companion: "sofia",
    estimatedMin: 18,
    prologue: "Your save games are safe locally — but what if the console breaks? GitHub is the cloud castle where all heroes store their adventures.",
    sections: [
      {
        heading: "1. GitHub = Cloud Memory Card",
        body: "GitHub stores your Git repos in the cloud. You can access them from any console, and share with other players worldwide.",
        visual: "cloud"
      },
      {
        heading: "2. Push & Pull",
        body: "`git push` sends your saves to the cloud castle. `git pull` brings the latest changes from the castle to your console.",
        visual: "pushpull"
      },
      {
        heading: "3. Pull Requests = Team Quests",
        body: "A Pull Request proposes your changes to the team. Others review, comment, and approve — like a boss battle you win together.",
        visual: "pr"
      }
    ],
    codeExample: {
      lang: "bash",
      title: "Connect to the castle",
      code: "# Link your local repo to GitHub\ngit remote add origin https://github.com/you/repo.git\n\n# Push to the cloud (first time)\ngit push -u origin main\n\n# Get latest changes\ngit pull"
    },
    quiz: [
      {
        q: "What does `git push` do?",
        options: ["Deletes your code", "Sends local commits to the remote", "Compresses files", "Logs you out"],
        correct: 1,
        explain: "push uploads your local commits to the remote (e.g. GitHub)."
      },
      {
        q: "A Pull Request is...",
        options: ["A way to delete branches", "A proposed change for team review", "An error message", "A deploy command"],
        correct: 1,
        explain: "PRs are how teams review, discuss, and merge changes."
      },
      {
        q: "Who owns the code pushed to a public GitHub repo?",
        options: ["GitHub", "The original author (with their license)", "Microsoft", "Nobody"],
        correct: 1,
        explain: "You retain ownership; the license you pick controls how others can use it."
      }
    ]
  }
};
