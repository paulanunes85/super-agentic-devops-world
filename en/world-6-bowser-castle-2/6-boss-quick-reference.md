---
title: "Chapter 4H — Quick Reference (Cheat Sheet) / The Complete Map of the Mushroom Kingdom"
description: "Quick reference guide with all Agentic DevOps concepts, commands, and configurations in one place."
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "2.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-6", "cheat-sheet", "reference"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 2.0.0 | 2026-03-18 | Paula Silva | Mario Bros version — complete rewrite with Super Mario analogies |
| 1.0.0 | 2026-03-06 | Paula Silva | Original version with RPG analogies |

# Chapter 4H — Quick Reference (Cheat Sheet)
## The Complete Map of the Mushroom Kingdom — Everything You Need to Know in One Place

---

**Version:** 2.0 — Mushroom Kingdom Edition
**Author:** Paula Silva | Microsoft Latam Software GBB
**Prepared for:** Sofia
**Date:** March 2026
**Language:** English (translated from pt-BR)
**Collection:** Agentic DevOps — Super Mario Bros Edition

---

## SECTION 0: Introduction

### The Mushroom Kingdom Map

Sofia discovered the **Complete Map of the Mushroom Kingdom** — a detailed map showing all the levels, Warp Zones, Power-Ups, characters, and secrets of the vast Agentic DevOps world. This document is your quick reference, your magic compass for navigating any situation, your definitive consultation guide.

Here you'll find everything you've learned in one place, organized like a Mario game map: levels clearly marked, items identified, and secret paths revealed. It's a quick-reference tool, a **cheat sheet** to save the day when you need to remember that specific detail.

> Remember those maps that came in the manuals of old Mario games? This document is EXACTLY that — but for Agentic DevOps!

---

## SECTION 1: COMPLETE Directory Structure

### The Mushroom Kingdom Map — File Tree

Here is the complete ecosystem tree with EACH file explained. This is the heart of the architecture.

```
todo-app-workshop/                              Mushroom Kingdom (the entire world)
|
+-- .github/
|   |
|   +-- agents/                                 Character Selection Screen
|   |   +-- orchestrator.agent.md               -> Mario (Player 1, team leader)
|   |   +-- react-engineer.agent.md             -> Luigi (agile, jumps high, frontend)
|   |   +-- dba.agent.md                        -> Toad (castle and data guardian)
|   |   +-- devops-expert.agent.md              -> Yoshi (flies, swallows enemies, infra)
|   |   +-- qa-engineer.agent.md                -> Peach (floats, tests everything)
|   |   +-- code-reviewer.agent.md              -> Toadette (rigorous judge)
|   |   +-- debug-mode.agent.md                 -> Detective Luigi (bug hunter)
|   |
|   +-- skills/                                 Power-Up Shop
|   |   +-- workflow-feature/SKILL.md           -> Super Mushroom (create something new)
|   |   +-- workflow-bugfix/SKILL.md            -> Super Star (fix a bug fast)
|   |   +-- workflow-deploy/SKILL.md            -> Cape Feather (fly to production)
|   |   +-- workflow-codereview/SKILL.md        -> Fire Flower (attack problems)
|   |   +-- conventional-commit/SKILL.md        -> Coin (universal standard)
|   |   +-- jest-testing/SKILL.md               -> 1-UP Mushroom (extra life)
|   |   +-- multi-stage-dockerfile/SKILL.md     -> Mini Mushroom (small and efficient)
|   |   +-- postgresql-review/SKILL.md          -> Ice Flower (freeze problems)
|   |
|   +-- instructions/                           Game Rules
|   |   +-- backend.instructions.md             -> Underwater level rules
|   |   +-- frontend.instructions.md            -> Sky level rules
|   |   +-- database.instructions.md            -> Castle rules
|   |
|   +-- prompts/                                Warp Pipes (green pipes)
|   |   +-- new-component.prompt.md             -> Pipe to secret block area
|   |   +-- add-endpoint.prompt.md              -> Pipe to underground area
|   |   +-- create-migration.prompt.md          -> Pipe to castle area
|   |
|   +-- copilot-instructions.md                 Gravity (universal rule, always active)
|
+-- .vscode/
|   +-- mcp.json                                Warp Zone Map
|
+-- frontend/                                   Sky Levels (Luigi's world)
+-- backend/                                    Underwater Levels (Toad's world)
+-- prisma/                                     The Castle (database)
+-- docker-compose.yml                          World Map (how everything connects)
```

---

## SECTION 2: Decision Table: "What Should I Create?"

### 6 Real Scenarios and the Correct Answer

| # | Scenario | What to Create | File | Mario Analogy |
|---|---|---|---|---|
| 1 | Specialized companion | **Agent** | `.agent.md` | Select a character on the selection screen (Mario, Luigi, Toad...) |
| 2 | Teach a skill to Copilot | **Skill** | `SKILL.md` | Grab a Power-Up from the "?" Block (Mushroom, Fire Flower, Star...) |
| 3 | Rules that always apply | **Instruction** | `.instructions.md` | Gravity, lava kills — always-active rules, nobody needs to remember |
| 4 | Reusable command | **Prompt** | `.prompt.md` | Enter a Warp Pipe (green pipe) — direct shortcut to where you need |
| 5 | External tool | **MCP** | `mcp.json` | Open a Warp Zone to another world (Figma, PostgreSQL, Slack...) |
| 6 | Automation on commit/push | **Hook** | `.github/workflows` | Hit an automatic "?" Block — something happens without you asking |

### When to Use Each — Visual Guide

> **Need a new character?** -> Agent (`.agent.md`)
> **Need a new power?** -> Skill (`SKILL.md`)
> **Need a new rule?** -> Instruction (`.instructions.md`)
> **Need a shortcut?** -> Prompt (`.prompt.md`)
> **Need to connect another world?** -> MCP (`mcp.json`)
> **Need automation?** -> Hook (Husky/GitHub Actions)

---

## SECTION 3: Frontmatter Cheat Sheet

### All YAML Fields Explained

#### .agent.md (Character Card)

| Field | Required? | Type | Example | Mario Analogy |
|---|---|---|---|---|
| `name` | Yes | string | `React Engineer` | Character name (Luigi) |
| `description` | Yes | string | `Component specialist` | Bio on the selection screen |
| `tools` | No | array | `["file_search", "repo_search"]` | Character inventory |
| `model` | No | string | `claude-opus-4-6` | Character level |

#### SKILL.md (Power-Up Manual)

| Field | Required? | Type | Example | Mario Analogy |
|---|---|---|---|---|
| `name` | Yes | string | `Jest Testing` | Power-Up name (1-UP Mushroom) |
| `description` | Yes | string | `Writes Jest tests` | What the Power-Up does |

#### .instructions.md (Game Rules)

| Field | Required? | Type | Example | Mario Analogy |
|---|---|---|---|---|
| `applyTo` | Yes | glob | `backend/**/*.ts` | Zone where the rule applies (water, sky, castle) |
| `instructions` | Yes | string | `Always use async/await` | The rule itself (gravity, lava kills) |

---

## SECTION 4: Complete TodoApp Inventory

### All 22 Components of the Mushroom Kingdom

#### Characters (7 Agents)

| # | Name | Type | File | Mario Character |
|---|---|---|---|---|
| 1 | Orchestrator | Coordinator | `orchestrator.agent.md` | Mario (Player 1) |
| 2 | React Engineer | Frontend | `react-engineer.agent.md` | Luigi (jumps high) |
| 3 | DBA | Backend/Data | `dba.agent.md` | Toad (guardian) |
| 4 | DevOps Expert | DevOps | `devops-expert.agent.md` | Yoshi (flies) |
| 5 | QA Engineer | Testing | `qa-engineer.agent.md` | Peach (floats and tests) |
| 6 | Code Reviewer | Review | `code-reviewer.agent.md` | Toadette (judge) |
| 7 | Debug Mode | Debug | `debug-mode.agent.md` | Detective Luigi |

#### Power-Ups (8 Skills)

| # | Name | Type | File | Mario Power-Up |
|---|---|---|---|---|
| 1 | Workflow Feature | Feature | `workflow-feature/SKILL.md` | Super Mushroom (makes you grow) |
| 2 | Workflow Bugfix | Bug | `workflow-bugfix/SKILL.md` | Super Star (invincible for limited time) |
| 3 | Workflow Deploy | Deploy | `workflow-deploy/SKILL.md` | Cape Feather (makes you fly) |
| 4 | Workflow CodeReview | Review | `workflow-codereview/SKILL.md` | Fire Flower (fireballs against problems) |
| 5 | Conventional Commit | Git | `conventional-commit/SKILL.md` | Coin (standard, everyone knows it) |
| 6 | Jest Testing | Tests | `jest-testing/SKILL.md` | 1-UP Mushroom (extra life for the project) |
| 7 | Multi-stage Dockerfile | Docker | `multi-stage-dockerfile/SKILL.md` | Mini Mushroom (small and efficient) |
| 8 | PostgreSQL Review | DB | `postgresql-review/SKILL.md` | Ice Flower (freezes performance problems) |

#### Warp Pipes (3 Prompts)

| # | Name | File | Destination |
|---|---|---|---|
| 1 | New Component | `new-component.prompt.md` | Secret block area (create component) |
| 2 | Add Endpoint | `add-endpoint.prompt.md` | Underground area (create API route) |
| 3 | Create Migration | `create-migration.prompt.md` | Castle area (modify database) |

#### Game Rules (3 Instructions + 1 Global)

| # | Name | File | Zone of Effect |
|---|---|---|---|
| 1 | Copilot Instructions | `copilot-instructions.md` | Gravity (universal, affects EVERYTHING) |
| 2 | Backend Instructions | `backend.instructions.md` | Underwater rules (backend only) |
| 3 | Frontend Instructions | `frontend.instructions.md` | Sky rules (frontend only) |
| 4 | Database Instructions | `database.instructions.md` | Castle rules (database only) |

#### Warp Zones (1 MCP Config)

| # | Name | File | Function |
|---|---|---|---|
| 1 | MCP Config | `mcp.json` | Map of all Warp Zones (Figma, PostgreSQL, Azure...) |

---

## SECTION 5: The 4 Worlds (Workflows)

### Quick Map of Each World

#### World 1: FEATURE (Super Mushroom)
```
Level 1-1: Plan      -> Look at the map, plan the route
Level 1-2: Implement -> Run through the level, collect coins, jump obstacles
Level 1-3: Review    -> Checkpoint — check if you got everything
Level 1-4: Verify    -> Boss Battle — Bowser Jr + Boom Boom + Kamek + Bowser
```

#### World 2: BUGFIX (Super Star)
```
Level 2-1: Reproduce -> Find where the enemy appears
Level 2-2: Debug     -> Investigate why the enemy is there
Level 2-3: Fix       -> Defeat the enemy
Level 2-4: Test      -> Verify it doesn't come back
```

#### World 3: DEPLOY (Cape Feather)
```
Level 3-1: Build  -> Build the castle
Level 3-2: Test   -> Test if the doors open
Level 3-3: Lint   -> Check for traps
Level 3-4: Verify -> Open the doors to the public
```

#### World 4: CODE REVIEW (Fire Flower)
```
Level 4-1: Lint     -> Check style (coins aligned?)
Level 4-2: Security -> Check for hidden traps
Level 4-3: Review   -> Play the entire level as a test
Level 4-4: Approve  -> "CLEAR!" — level approved!
```

---

## SECTION 6: Boss Battles (Final Gates)

### The 4 Bosses You Need to Defeat

| Boss | Mario Character | What It Checks | If You Lose... |
|---|---|---|---|
| **Boss 1: TSC** | Bowser Jr | Correct TypeScript types, zero errors | Go back to the level and fix the types |
| **Boss 2: Jest** | Boom Boom | All tests passing (100%) | Go back and fix the tests |
| **Boss 3: ESLint** | Kamek (Magikoopa) | Code quality, zero warnings | Go back and clean up the code |
| **Boss 4: Zero Any** | Bowser | No `any` in TypeScript | Go back and define all types |

> **Golden Rule:** You only move to the next World when ALL 4 Bosses are defeated. No exceptions!

---

## SECTION 7: The 6 Power-Up Layers (Context)

### Power-Up Slots that Stack

| Layer | Power-Up Slot | Who Controls | Mario Analogy |
|---|---|---|---|
| **1. Personal** | Your play style | The individual | Player preference ("I always play with Mario") |
| **2. Organization** | Tournament rules | Technical leadership | Championship rules ("everyone uses standard controller") |
| **3. Repository** | This World's rules | Repo maintainers | This world's rules ("here the Koopas slide on ice") |
| **4. Path-Specific** | Area rules | Specialists | Level rules ("in water, Mario swims; in sky, flies") |
| **5. Agent** | Character powers | Agent owner | Character card ("Luigi jumps higher") |
| **6. User Prompt** | Command NOW | You! | "Jump!", "Shoot!", "Run!" |

> **Stacking:** All layers ADD UP. Mario doesn't lose gravity when he grabs Fire Flower. Similarly, an Agent doesn't lose the repository rules when it receives a prompt. MAXIMUM POWER-UP!

---

## SECTION 8: Warp Zones (MCP)

### Map of Connected Worlds

| Warp Zone | Destination World | Main Tools | What It's For |
|---|---|---|---|
| **Figma MCP** | World of Designs | `get_design_data`, `get_colors`, `get_typography` | Fetch colors, typography, visual components |
| **PostgreSQL MCP** | Underground World of Data | `query`, `get_schema`, `list_tables` | Run queries, explore tables, fetch data |
| **Azure Boards MCP** | World of Tasks | `create_work_item`, `update_work_item`, `list_work_items` | Create/update tasks, check sprints |
| **GitHub MCP** | World of Repos | `list_repos`, `get_issue`, `create_pull_request` | Access issues, PRs, code in other repos |
| **Slack MCP** | World of Communication | `send_message`, `list_channels` | Send and read team messages |

> **Security:** The Warp Zone key (API Key) is NEVER exposed. Keep it in your secret pocket (`.env`) and only show it when you need to enter!

---

## SECTION 9: Gamer Glossary — 30 Key Terms

### Agentic DevOps Dictionary with Mario Analogies

| # | Technical Term | In Plain English | Mario Analogy |
|---|---|---|---|
| 1 | **Agent** | Agent | Playable character (Mario, Luigi, Toad...) |
| 2 | **Skill** | Skill | Power-Up (Mushroom, Fire Flower, Star...) |
| 3 | **Instruction** | Instruction | Game rule (gravity, lava kills...) |
| 4 | **Prompt** | Command | Warp Pipe — green pipe shortcut |
| 5 | **Hook** | Hook | "?" Block — hit it and something happens |
| 6 | **MCP** | Context Protocol | Warp Zone — portal to another world |
| 7 | **Orchestrator** | Orchestrator | Player 1 (Mario) coordinating multiplayer |
| 8 | **Handoff** | Control transfer | Tag-team — switch characters |
| 9 | **Final Gate** | Validation gate | Boss Battle (Bowser Jr -> Boom Boom -> Kamek -> Bowser) |
| 10 | **Exit Criteria** | Exit criteria | Checkpoint Flag — only passes if met |
| 11 | **.agent.md** | Agent file | Character card on the selection screen |
| 12 | **SKILL.md** | Skill file | Power-Up manual |
| 13 | **.instructions.md** | Instruction file | Game rulebook |
| 14 | **.prompt.md** | Prompt file | Warp Pipe map |
| 15 | **mcp.json** | MCP config | Warp Zone map |
| 16 | **Frontmatter YAML** | YAML header | Character stats (name, power, type) |
| 17 | **Body Markdown** | Document body | Description of powers and how to use them |
| 18 | **applyTo** | Apply to | Zone where the rule applies (water, sky, castle) |
| 19 | **tools** | Tools | Character inventory |
| 20 | **description** | Description | Character bio on the selection screen |
| 21 | **Pre-commit** | Pre-commit | "?" Block BEFORE the Checkpoint Flag |
| 22 | **Post-commit** | Post-commit | Coin that appears AFTER passing |
| 23 | **Pre-push** | Pre-push | GIANT "?" Block at the end of the level |
| 24 | **Deploy** | Launch | Final level — open the castle doors to the public |
| 25 | **CI/CD** | Integration/Delivery | Lakitu in the cloud checking everything from above |
| 26 | **TypeScript** | TypeScript | Armor that protects against bugs |
| 27 | **ESLint** | ESLint | Equipment check before the level |
| 28 | **Jest** | Jest | Training against dummies before the real Boss |
| 29 | **Retry** | Retry | Continue from Checkpoint after losing a life (1-UP!) |
| 30 | **Escalation** | Escalation | Game Over -> call another human player |

---

## SECTION 10: Quick Handoffs

### Tag-Team Reference Table

| Aspect | What It Is | Mario Analogy |
|---|---|---|
| **Exit Criteria** | Conditions to pass control | Checkpoint Flag — only advances if met |
| **Shared Data** | Info passed between characters | Mario shows the map to Luigi before switching |
| **Retries** | Try again after failure | 1-UP Mushroom — extra life to try again |
| **Escalation** | Human needs to intervene | Game Over — call human player |

---

## SECTION 11: Official Documentation Links

### Your Reference Library

| # | Title | Summary |
|---|---|---|
| 1 | [Custom Agents](https://docs.github.com/en/copilot) | Complete guide on custom agents |
| 2 | [Agent Skills](https://docs.github.com/en/copilot) | Concepts about agent skills |
| 3 | [Creating Skills](https://docs.github.com/en/copilot) | How to create skills from scratch |
| 4 | [Custom Instructions](https://docs.github.com/en/copilot) | Custom instructions setup |
| 5 | [Agent Mode](https://docs.github.com/en/copilot) | Using agent mode in Copilot |
| 6 | [MCP Protocol](https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp) | Model Context Protocol integration |
| 7 | [Cheat Sheet](https://docs.github.com/en/copilot) | Official quick reference |
| 8 | [Awesome Copilot](https://github.com/nicepkg/awesome-copilot) | Curated community resources |
| 9 | [VS Code Skills](https://docs.github.com/en/copilot) | Skills in VS Code |

---

## SECTION 12: Your Journey Continues

### Congratulations, Sofia!

You've completed the journey through the entire Mushroom Kingdom and discovered the **Complete Map**! You now possess the knowledge to navigate any Agentic DevOps challenge. All Worlds have been unlocked, all Bosses have been defeated, all Power-Ups have been collected!

### Your 7 Final Quests (Post-Game)

Like every good Mario game, after defeating Bowser there's still post-game content! Here are your 7 final Star Coins to collect:

**Quest 1 — The First Character:** Create your first agent (`.agent.md`) for a personal project. Choose: who will be your Mario?

**Quest 2 — The Power-Up Shop:** Write 3 skills (`SKILL.md`) for your most common workflows. Build your shop!

**Quest 3 — The World Rules:** Configure instructions for code standards. Define your world's gravity!

**Quest 4 — The Warp Pipes:** Create 4 prompt files for common tasks. Build your shortcuts!

**Quest 5 — The Warp Zones:** Integrate 2 MCP servers (Figma, Slack, PostgreSQL...). Open portals to other worlds!

**Quest 6 — The "?" Blocks:** Configure hooks with GitHub Actions. Install automatic traps!

**Quest 7 — Multiplayer Mode:** Complete orchestration with multiple agents working as a team. Activate multiplayer!

### Survival Tips for the Mushroom Kingdom

1. **Start small** — Mario starts as Small Mario before grabbing the Mushroom. Create simple agents first.
2. **Test everything in isolation** — Don't face Bowser without training on Goombas first.
3. **Document as you create** — A good map saves lives. Write down what works.
4. **Reuse and share** — Power-Ups are shareable. Don't reinvent the wheel.
5. **Monitor your agents** — Keep an eye on what your characters are doing.
6. **Iterate and version** — Each version is a New Game+. Always improve.
7. **Contribute to the community** — Share your maps and Power-Ups with other players!

---

| Previous: 4G Orchestration | Complete Collection! |
|---|---|

---

**Achievement Unlocked: "Complete Map of the Mushroom Kingdom — Master Level 6!"**

Sofia collected all the Star Coins, defeated all the Bosses, unlocked all the Worlds, and now possesses the complete map of the Mushroom Kingdom. The Agentic DevOps journey is complete!

*This document is the central reference for the entire Mario analogy applied to Agentic DevOps content. Consult it whenever you need a quick answer!*

---

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Customizing Copilot](https://docs.github.com/en/copilot/customizing-copilot)
- [Copilot Agents Concepts](https://docs.github.com/en/copilot/concepts/agents)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [Husky - Git Hooks](https://typicode.github.io/husky/)
- [Conventional Commits](https://www.conventionalcommits.org/)
