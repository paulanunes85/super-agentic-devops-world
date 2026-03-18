---
title: "Mario Analogy — Complete Reference Guide"
description: "Complete mapping of Agentic DevOps concepts to Super Mario Bros analogies"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "reference", "mapping"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-03-18 | Paula Silva | Initial version — Super Mario Bros Edition |

# Mario Analogy — Complete Reference Guide
## Universal Mapping: Agentic DevOps = Super Mario Bros

> **Golden Rule**: Anyone who has ever played Mario (or watched someone play) can understand Agentic DevOps with this guide.

---

## 1. THE WORLD

| Agentic DevOps | Super Mario | Why it works |
|---|---|---|
| **Agentic DevOps Ecosystem** | The entire **Mushroom Kingdom** | The complete universe where everything happens |
| **Your Project (TodoApp)** | The **mission to save the Princess** | The ultimate goal that drives the entire journey |
| **Sofia (the learner)** | **Mario** — the main hero | Starts small, gains powers along the way |
| **GitHub Repository** | The **world map** with all worlds and levels | Where everything is organized and accessible |
| **Source code** | The **blocks, coins, and scenery** of each level | What you build and interact with |

---

## 2. THE CHARACTERS (Agents)

| Technical Agent | Mario Character | Unique Ability |
|---|---|---|
| **Orchestrator** | **Mario** — the main hero who coordinates everything | Knows when to call each character, leads the team |
| **React Frontend Engineer** | **Luigi** — agile and tall, jump specialist | Masters the visual interface, components, and animations |
| **PostgreSQL DBA** | **Toad** — guardian of the castle and treasures | Takes care of data, optimizes queries, protects the database |
| **DevOps Expert** | **Yoshi** — can swallow enemies and fly | Infrastructure, containers, CI/CD — makes the impossible happen |
| **QA Engineer** | **Princess Peach** — floats and checks everything | Tests every corner, finds hidden bugs, ensures quality |
| **Code Reviewer** | **Toadette** — strict but fair judge | Reviews code, points out issues, maintains standards |
| **Debug Mode** | **Detective Luigi (Luigi's Mansion)** — ghost hunter | Investigates mysterious bugs, follows clues, solves mysteries |

**How it works**: Each character has their own **`.agent.md` file** = their **character sheet**. It contains: name, powers, when to call them, what they can do and what they CANNOT do.

---

## 3. THE POWER-UPS (Skills)

| Technical Skill | Mario Power-Up | When to Use |
|---|---|---|
| **workflow-feature** | **Super Mushroom** — makes you grow | When you need to create something new (feature) — gives you full power |
| **workflow-bugfix** | **Super Star** — invincible for a limited time | When there's an urgent bug — turbo mode to investigate and fix |
| **workflow-deploy** | **Cape Feather** — makes you fly | When you need to deploy to production — takes you there |
| **workflow-codereview** | **Fire Flower** — shoots fireballs | When you need to review code — attacks problems one by one |
| **conventional-commit** | **Coin** — standard, everyone knows it | Standardizes commit messages — simple and universal |
| **jest-testing** | **1-UP Mushroom** (green mushroom) — extra life | Tests give your project extra lives — they prevent death |
| **multi-stage-dockerfile** | **Mini Mushroom** — makes you small and efficient | Optimized container — smaller, faster, more efficient |
| **postgresql-review** | **Ice Flower** — freezes enemies | Analyzes slow queries and optimizes them — "freezes" performance problems |

**How it works**: Each Power-Up lives in a folder with a **SKILL.md** file = the **power-up manual**. It explains what it does, when to activate it, and how to use it step by step.

**Important rule**: Power-Ups are activated **automatically** when the game (Copilot) senses that you need them. You don't need to memorize — the game feels the situation and offers the right power-up.

---

## 4. THE GAME RULES (Instructions)

| Technical Instruction | Mario Rule | Characteristic |
|---|---|---|
| **copilot-instructions.md** (global) | **Gravity** — always pulls you down | Always active, affects EVERYTHING, no one needs to remember |
| **backend.instructions.md** | **Underwater level rules** — only apply underwater | Only apply to backend files |
| **frontend.instructions.md** | **Sky level rules** — only apply in the sky | Only apply to frontend files |
| **database.instructions.md** | **Castle rules** — only apply inside the castle | Only apply to database files |

**How it works**: Game rules are **INVISIBLE and AUTOMATIC**. You don't "activate" gravity — it's always there. Likewise, Instructions don't need to be invoked. They ALWAYS apply to the correct context.

**3 Levels of Rules**:
- **Universal Rules** = Gravity (affects the entire Mushroom Kingdom)
- **Regional Rules** = Water, sky, castle rules (only affect that area)
- **Personal Rules** = Your play style (only affects you)

---

## 5. THE WARP PIPES (Prompts)

| Technical Prompt | Mario Warp Pipe | What it Does |
|---|---|---|
| **new-component.prompt.md** | **Green pipe to secret block area** | Jumps straight to creating a new component |
| **add-endpoint.prompt.md** | **Green pipe to secret underground area** | Jumps straight to creating an API route |
| **create-migration.prompt.md** | **Green pipe to secret castle area** | Jumps straight to modifying the database |

**How it works**: Warp Pipes are **reusable shortcuts**. Instead of going through the entire level (writing everything from scratch), you enter the pipe and COME OUT right where you need to be. Each Warp Pipe accepts **ingredients** (variables) — you provide the component name, and the pipe takes you there.

**Two modes**:
- **Agent Mode** = The pipe takes you AND builds the level for you (creates files, writes code)
- **Ask Mode** = The pipe takes you AND SHOWS you the map (explains, analyzes, answers)

---

## 6. THE "?" BLOCKS (Hooks)

| Technical Hook | Mario "?" Block | When it Fires |
|---|---|---|
| **pre-commit** | **"?" Block you hit BEFORE passing** | Before saving the commit — checks if everything is right |
| **commit-msg** | **Block that checks if you have the right key** | Checks if the commit message follows the standard |
| **pre-push** | **GIANT "?" Block at the end of the level** | Before pushing code — runs all tests |
| **post-commit** | **Block that drops a coin AFTER you pass** | After the commit — notifies the team |

**How it works**: You're running through the level (developing). When you hit a "?" Block, something happens AUTOMATICALLY:
- **Protection Block**: If the code has an error, the block BLOCKS your path (commit rejected). You need to fix it to proceed.
- **Enhancement Block**: The block auto-formats your code (like getting a power-up without asking)
- **Notification Block**: The block notifies your team on Slack (like a coin appearing on the scoreboard)

**Hooks vs GitHub Actions**:
- **"?" Blocks** = INSTANT reaction in the level (your local computer). Fast, blocking.
- **GitHub Actions** = **Lakitu** (that guy on the cloud) who checks EVERYTHING from above after you finish the level. Slower, more thorough, no one escapes.

---

## 7. THE WARP ZONES (MCP)

| Technical MCP | Mario Warp Zone | Where it Leads |
|---|---|---|
| **Figma MCP** | **Warp Zone to the Design World** | Your character travels there, grabs colors and typography, and comes back |
| **PostgreSQL MCP** | **Warp Zone to the Underground Data World** | Runs queries, explores tables, brings back information from the database |
| **Azure Boards MCP** | **Warp Zone to the Task World** | Creates and updates tasks, checks sprints, manages projects |
| **GitHub MCP** | **Warp Zone to the Repo World** | Accesses issues, PRs, code in other repositories |
| **Slack MCP** | **Warp Zone to the Communication World** | Sends and reads team messages |

**How it works**: Without Warp Zones, Mario is stuck in a single world — he can only see what's in front of him. With Warp Zones, Mario travels to OTHER WORLDS, grabs resources, and comes back more powerful.

**Without MCP** = Mario only in World 1. Limited.
**With MCP** = Mario travels between World 1, 2, 3, 4... Unlimited.

**Security**: The Warp Zone key (API Key) is NEVER exposed. You keep it in your secret pocket (.env) and only show it when you need to enter the portal.

---

## 8. COORDINATED MULTIPLAYER (Orchestration)

| Technical Orchestration | Mario Multiplayer | How it Works |
|---|---|---|
| **Orchestrator Agent** | **Player 1 (Mario)** coordinating the team | Receives the mission, decides who does what |
| **Delegation** | **Passing the controller** to another character | "Luigi, this level is yours!" — delegates to the specialist |
| **Handoff** | **Tag-team** — one leaves, another enters | When Luigi finishes, passes to Toad to continue |
| **Exit Criteria** | **Checkpoint flag** in the middle of the level | Only passes control when reaching the checkpoint |
| **Final Gate** | **Boss Battle** at the end of the castle | 4 bosses in sequence: TSC, Jest, ESLint, Zero Any |
| **Escalation** | **Game Over → Call another player** | If the agent can't do it, calls the human |

**The 4 Worlds (Workflows)**:

### World 1: FEATURE (Create Something New)
```
Level 1-1: Plan     → Look at the map, plan the route
Level 1-2: Implement → Run through the level, collect coins, jump over obstacles
Level 1-3: Review    → Checkpoint — check if you got everything
Level 1-4: Verify    → Boss Battle — TSC + Jest + ESLint + Zero Any
```

### World 2: BUGFIX (Fix a Problem)
```
Level 2-1: Reproduce → Find where the enemy appears
Level 2-2: Debug     → Investigate why the enemy is there
Level 2-3: Fix       → Defeat the enemy
Level 2-4: Test      → Verify it doesn't come back
```

### World 3: DEPLOY (Ship to Production)
```
Level 3-1: Build     → Build the castle
Level 3-2: Test      → Test if the doors open
Level 3-3: Lint      → Check for traps
Level 3-4: Verify    → Open the doors to the public
```

### World 4: CODE REVIEW (Review Code)
```
Level 4-1: Lint      → Check style (coins aligned?)
Level 4-2: Security  → Check for hidden traps
Level 4-3: Review    → Play through the entire level as a test
Level 4-4: Approve   → "CLEAR!" — level approved
```

---

## 9. THE 6 LAYERS OF POWER-UP (Context)

Like in Mario, where you can combine power-ups (mushroom + fire flower + star), in Agentic DevOps there are 6 layers of context that stack up:

| Layer | Mario Equivalent | Example |
|---|---|---|
| **1. Personal** | **Your play style** (aggressive, cautious) | Developer's personal preferences |
| **2. Organization** | **Tournament rules** (time limit, lives) | Company policies |
| **3. Repository** | **Rules for this specific level** | Standards for this project |
| **4. Path-Specific** | **Area rules** (water, sky, castle) | Rules for backend vs frontend |
| **5. Agent** | **Current character's powers** | Agent's specialty |
| **6. User Prompt** | **Your command NOW** ("jump!", "shoot!") | What you asked Copilot |

**Stacking**: All layers ADD UP. Mario doesn't lose gravity when he picks up a Fire Flower. Likewise, a React Agent doesn't lose the repository rules when it receives a prompt.

---

## 10. BOSS BATTLES (Final Gates)

Before completing any World, you face 4 bosses in sequence:

| Boss | What it Checks | If You Lose... |
|---|---|---|
| **Boss 1: TSC (Bowser Jr)** | Correct TypeScript types, zero errors | Go back to the level and fix the types |
| **Boss 2: Jest (Boom Boom)** | All tests passing | Go back and fix the tests |
| **Boss 3: ESLint (Kamek)** | Code quality, zero warnings | Go back and clean the code |
| **Boss 4: Zero Any (Bowser)** | No `any` in TypeScript | Go back and define all types |

**You only move on to the next World when ALL bosses are defeated.**

---

## 11. COMPLETE GAME MAP (Directory Structure)

```
todo-app-workshop/                          🏰 The Mushroom Kingdom
├── .github/
│   ├── agents/                             🎮 Character Selection Screen
│   │   ├── orchestrator.agent.md           → Mario (leader)
│   │   ├── react-engineer.agent.md         → Luigi (frontend)
│   │   ├── dba.agent.md                    → Toad (database)
│   │   ├── devops-expert.agent.md          → Yoshi (infrastructure)
│   │   ├── qa-engineer.agent.md            → Peach (quality)
│   │   ├── code-reviewer.agent.md          → Toadette (review)
│   │   └── debug-mode.agent.md             → Detective Luigi (debug)
│   ├── skills/                             ⭐ Power-Up Shop
│   │   ├── workflow-feature/SKILL.md       → Super Mushroom
│   │   ├── workflow-bugfix/SKILL.md        → Super Star
│   │   ├── workflow-deploy/SKILL.md        → Cape Feather
│   │   ├── workflow-codereview/SKILL.md    → Fire Flower
│   │   ├── conventional-commit/SKILL.md    → Coin
│   │   ├── jest-testing/SKILL.md           → 1-UP Mushroom
│   │   ├── multi-stage-dockerfile/SKILL.md → Mini Mushroom
│   │   └── postgresql-review/SKILL.md      → Ice Flower
│   ├── instructions/                       📏 Game Rules
│   │   ├── backend.instructions.md         → Underwater rules
│   │   ├── frontend.instructions.md        → Sky rules
│   │   └── database.instructions.md        → Castle rules
│   ├── prompts/                            🟢 Warp Pipes
│   │   ├── new-component.prompt.md         → Pipe to block area
│   │   ├── add-endpoint.prompt.md          → Pipe to underground area
│   │   └── create-migration.prompt.md      → Pipe to castle area
│   └── copilot-instructions.md             🌍 Gravity (universal rule)
├── .vscode/
│   └── mcp.json                            🌀 Warp Zones Map
├── frontend/                               ☁️ Sky Levels
├── backend/                                🌊 Underwater Levels
├── prisma/                                 🏰 The Castle
└── docker-compose.yml                      🗺️ World Map
```

---

## 12. QUICK DECISION TABLE

| You want to... | Create a... | It's like in Mario... |
|---|---|---|
| A specialized companion | **Agent** (.agent.md) | Selecting a character on the selection screen |
| Teach Copilot a skill | **Skill** (SKILL.md) | Grabbing a Power-Up from a "?" Block |
| Rules that always apply | **Instruction** (.instructions.md) | Gravity, lava kills — always active |
| A reusable shortcut | **Prompt** (.prompt.md) | Entering a Warp Pipe |
| Connect an external tool | **MCP** (mcp.json) | Opening a Warp Zone to another world |
| Automation on commit/push | **Hook** (Husky) | Hitting an automatic "?" Block |

---

## 13. GAMER GLOSSARY — 30 KEY TERMS

| # | Technical Term | In Mario |
|---|---|---|
| 1 | Agent | Playable character (Mario, Luigi, Toad...) |
| 2 | Skill | Power-Up (Mushroom, Fire Flower, Star...) |
| 3 | Instruction | Game rule (gravity, lava kills...) |
| 4 | Prompt | Warp Pipe (shortcut to a specific area) |
| 5 | Hook | "?" Block (hit it and something happens) |
| 6 | MCP | Warp Zone (portal to another world) |
| 7 | Orchestrator | Player 1 coordinating the multiplayer |
| 8 | Handoff | Tag-team — switch characters |
| 9 | Final Gate | Boss Battle in the castle |
| 10 | Exit Criteria | Checkpoint flag — only passes if met |
| 11 | .agent.md | Character sheet on the selection screen |
| 12 | SKILL.md | Power-Up manual |
| 13 | .instructions.md | Game rules book |
| 14 | .prompt.md | Warp Pipe map |
| 15 | mcp.json | Warp Zones map |
| 16 | YAML Frontmatter | Character stats (name, power, type) |
| 17 | Markdown Body | Description of powers and how to use them |
| 18 | applyTo | Area where the rule applies (water, sky, castle) |
| 19 | tools | Character's inventory |
| 20 | description | Character bio on the selection screen |
| 21 | Pre-commit | "?" Block BEFORE the checkpoint flag |
| 22 | Post-commit | Coin that appears AFTER you pass |
| 23 | Pre-push | GIANT "?" Block at the end of the level |
| 24 | Deploy | Final level — open the castle doors |
| 25 | CI/CD | Lakitu on the cloud checking from above |
| 26 | TypeScript | Armor that protects against bugs |
| 27 | ESLint | Equipment check before the level |
| 28 | Jest | Training against dummies before the boss |
| 29 | Retry | Continue from checkpoint after losing a life |
| 30 | Escalation | Game Over → call another human player |

---

*This document is the central reference for the entire Mario analogy applied to Agentic DevOps content. Each chapter (4A to 4H) should follow this mapping consistently.*

---

## 14. NEW ANALOGIES (Worlds 5, 7, 8)

> **Context**: With the expansion of the guide to 8 Worlds, new concepts need Mario analogies. This section covers AI, Agents, Frameworks, and advanced concepts introduced in Worlds 5, 7, and 8.

### Agents — Fundamental Concepts

| Concept | Mario Analogy | Why it works |
|---|---|---|
| **Agent (fundamentally)** | **NPC that came to life** — thinks, decides, acts | NPCs in games follow scripts; an agent goes beyond, makes its own decisions |
| **IDE Agent** | **Companion in your pocket** — walks WITH you through the level | Always there by your side while you play, responding in real time |
| **Background Agent** | **NPC working in a distant castle** while you play | You don't even see it, but it's there building, testing, preparing |
| **Dev Agent** | **Companion that helps BUILD the game** | Helps those who create the levels, not those who play |
| **Productive Agent** | **Companion that helps PLAY the game** (end-user) | Helps the final player, not the creator |
| **Autonomous Agent** | **Yoshi that flies on its own** with guardrails | Has freedom to act, but with defined limits so it doesn't fly off the map |

### GitHub Copilot — Operating Modes

| Concept | Mario Analogy | Why it works |
|---|---|---|
| **Copilot Ask Mode** | **Toad's Hint House** — ask the NPC for tips | You go to Toad, ask, he answers. Doesn't do anything for you |
| **Copilot Plan Mode** | **Level Map** — see the path before playing | Shows the complete route, obstacles, and power-ups, but you still need to play |
| **Copilot Agent Mode** | **Yoshi on autopilot** — companion plays WITH you | Yoshi runs, jumps, and eats enemies together with you. Active collaboration |
| **GitHub Coding Agent** | **Autonomous Yoshi** — completes the level alone | You describe the mission, Yoshi goes and comes back with the completed level |

### GitHub Advanced Security

| Concept | Mario Analogy | Why it works |
|---|---|---|
| **GitHub Advanced Security** | **Star Shield** — automatic protection against invisible enemies | Protects without you having to do anything, detects threats you can't see |
| **Code Scanning** | **Trap detector** — finds hidden dangers in the code | Like an item that reveals fake blocks and invisible traps in the level |
| **Secret Scanning** | **Anti-theft alarm** — detects if secret keys have leaked | If someone steals your castle key, the alarm goes off immediately |
| **Dependabot** | **Inspector Toad** — checks if your items are up to date | Toad checks your inventory and warns: "This mushroom is expired!" |

### AI Frameworks (World 7)

| Concept | Mario Analogy | Why it works |
|---|---|---|
| **AI Foundry** | **Magikoopa's Forge** — where magical weapons are created | Magikoopa creates spells; the Forge is where AI models are built and refined |
| **RAG** | **Magic Library** — consult books in the middle of battle | Instead of memorizing everything, you consult the library when you need information |
| **LangChain** | **Power-Up Chain** — combo system | Mushroom + Fire Flower + Star in sequence = devastating combo |
| **AutoGen** | **Auto-team-builder** — describe mission, assemble team | You say "I need to save the princess" and the system assembles Mario + Luigi + Toad + Yoshi |
| **Semantic Kernel** | **Universal magic engine** — works with any system | The engine behind all spells, regardless of who casts them |
| **4 Operating Channels** | **4 worlds where agents live and operate** | Each type of agent operates in its own world with its own rules |
| **IDP/Backstage** | **Central Square / Hub Castle** (Mario 64) | The central hub from which you access all worlds — jump into the paintings and go |

### Complementary Concepts

| Concept | Mario Analogy | Why it works |
|---|---|---|
| **Codespaces** | **Arcade in the cloud** — play from anywhere, no installation needed | Any computer becomes your console — you just need internet |
| **Token Optimization** | **Coin budget per level** — spend wisely | Each level has a coin limit; spend on the actions that matter |
| **Issues** | **Quest Board** — mission board | The board in the village square where all missions are listed |
| **Projects** | **Campaign Map** — campaign map with progress | The general map showing which levels you've already completed and which remain |

---

*Section 14 added to cover concepts from Worlds 5, 7, and 8. All new analogies follow the same pattern as previous sections: technical concept → Mario equivalent → justification.*

---

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [GitHub Copilot — Concepts and Agents](https://docs.github.com/en/copilot/concepts/agents)
- [Azure AI Services](https://learn.microsoft.com/en-us/azure/ai-services/)
