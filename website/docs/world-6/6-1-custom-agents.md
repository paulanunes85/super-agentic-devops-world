---
title: "Chapter 4A -- Custom Agents & .agent.md / The Character Select Screen"
description: "How to create personalized Custom Agents using .agent.md files to assemble your team of AI playable characters."
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "2.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-6", "agents", "agent-md"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 2.0.0 | 2026-03-18 | Paula Silva | Mario Bros Version — complete rewrite with Super Mario analogies |
| 1.0.0 | 2026-03-06 | Paula Silva | Original version with RPG analogies |

# Chapter 4A -- Custom Agents & .agent.md / The Character Select Screen -- How to Create Playable Characters for Your AI Team

---

**Prepared for:** Sofia
**Version:** 2.0 (Mushroom Kingdom Edition)
**Author:** Paula Silva | Software Global Black Belt, Microsoft Americas
**Date:** March 2026
**Language:** English (EN)
**Collection:** Agentic DevOps -- Complete Software Development Guide

---

## TABLE OF CONTENTS

- [Introduction -- The Character Select Screen](#introduction--the-character-select-screen)
- [Section 1 -- What are Custom Agents](#section-1--what-are-custom-agents)
  - [Key Concepts: Technical vs Mario Comparison](#key-concepts-technical-vs-mario-comparison)
- [Section 2 -- Where Agents Live](#section-2--where-agents-live)
  - [Agent Directory Structure](#agent-directory-structure)
  - [The 3 Scope Levels for Agents](#the-3-scope-levels-for-agents)
- [Section 3 -- The .agent.md Format in Detail](#section-3--the-agentmd-format-in-detail)
  - [Components of .agent.md](#components-of-agentmd)
  - [YAML Frontmatter Fields](#yaml-frontmatter-fields)
  - [Complete Example 1: React Frontend Engineer](#complete-example-1-react-frontend-engineer)
  - [Complete Example 2: PostgreSQL Database Administrator](#complete-example-2-postgresql-database-administrator)
- [Section 4 -- The 7 Agents of the TodoApp](#section-4--the-7-agents-of-the-todoapp)
  - [Complete Reference: The 7 Specialized Agents](#complete-reference-the-7-specialized-agents)
- [Section 5 -- Best Practices for Writing Agents](#section-5--best-practices-for-writing-agents)
  - [Checklist of 6 Best Practices](#checklist-of-6-best-practices)
  - [Detail of Each Practice](#detail-of-each-practice)
- [What We Learned -- Summary Table](#what-we-learned--summary-table)

---

## Introduction -- The Character Select Screen

Sofia pressed START and the character select screen lit up. Like Mario entering the Mushroom Kingdom for the first time, she saw a row of playable characters waiting to be chosen -- each with their own stats, special powers, and inventory items. Here she would learn to create her own AI playable characters -- an essential skill for any player who wants to build the perfect team.

The screen was like that classic Mario moment where you choose between Mario, Luigi, Toad, and Peach -- each with different abilities. In each slot, a character waited to be selected: Luigi, the agile jump specialist and visual interface expert; Toad, the guardian of treasures and data; Yoshi, the partner who makes the impossible happen with infrastructure. Sofia needed to learn how to configure each one's stats -- because a well-configured character is the difference between clearing the level and a Game Over.

"Welcome to the Character Select Screen," said a voice, as the classic Mario theme played in the background. "Here, you don't just select characters -- you CREATE them. Every stat you define, every power you assign, every inventory item you equip, will shape how that character behaves in the levels. And in the Mushroom Kingdom of software development, having well-trained characters is the difference between saving the Princess and losing all your lives."

---

## Section 1 -- What are Custom Agents

A Custom Agent is a **specialized AI playable character**, defined in an `.agent.md` file. When you create a Custom Agent, you're essentially creating a **character** with stats, powers, and a specific set of inventory items. Unlike a generic Copilot, a Custom Agent is optimized for a specific task or domain.

In practice, a Custom Agent allows you to:

- **Define WHO** (who the character is, what their name is, what their role on the team is)
- **Define WHAT** (what they can do, what their special abilities are)
- **Define HOW** (what inventory items they use, how they behave, what game rules they follow)
- **Assign** (can be assigned to issues, selected in IDE chat, invoked by name)

Custom Agents work in multiple environments: VS Code, JetBrains, Eclipse, Xcode, GitHub.com (for coding agents), and the command line (CLI). This means your character can be available anywhere you're playing.

> **MARIO ANALOGY:** Creating a Custom Agent is like setting up a character's Stats Screen in Mario. You write the character's name ("Luigi -- Frontend Specialist"), choose the type (Mario, Luigi, Toad, Yoshi, Peach), define the main attributes (speed, jump, strength), and list the inventory (Super Mushroom, Fire Flower, Cape Feather). The more detailed the stats screen, the better the game (Copilot) understands the character and how they should behave in each level.

### Key Concepts: Technical vs Mario Comparison

| Technical Concept | What it is | Mario Analogy | Detailed Description |
|---|---|---|---|
| **Custom Agent** | A specialized AI playable character | **Mario playable character** | A complete character with name, type, abilities, stats, and inventory. Each agent is unique and has their own play style. |
| **.agent.md** | File that defines the agent | **Character Stats Screen** | The screen that shows everything about the character: their name, their type, their skill points, inventory, and special powers. |
| **Frontmatter YAML** | Structured metadata | **Stats Section** | The upper part of the screen with structured fields: Name, Type, Speed, Jump, Special Power. |
| **Body Markdown** | Detailed instructions | **Powers Description** | The narrative description: character backstory, how their abilities work, what their special powers are, rules they always follow. |
| **tools** | Available tools | **Power-Up Inventory** | List of items the character can use: Super Mushroom (growth item), Fire Flower (attack item), Super Star (invincibility item). |

> **Source:** GitHub Documentation - Custom Agents -- https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-custom-agents

---

## Section 2 -- Where Agents Live

Custom Agents live in three different locations, depending on scope and audience. They can be in the repository, the organization, or your personal computer. Each level has a specific purpose.

> **MARIO ANALOGY:** The `.github/agents/` folder is like the game's **Character Select Screen**, where all characters are available between levels. Some characters are on the **main screen** (repository) -- any player can select them. Others are on a **secret screen** (organization) -- only players on the same team can access them. And some are saved on **your personal memory card** (local machine) -- only you have access. The more restricted the access, the more special or secret the character can be.

### Agent Directory Structure

```
.github/agents/
├── react-engineer.agent.md          # Luigi (React Frontend Engineer)
├── postgresql-dba.agent.md           # Toad (PostgreSQL Database Administrator)
├── devops-expert.agent.md            # Yoshi (DevOps Infrastructure Expert)
├── qa-engineer.agent.md              # Peach (QA & Testing Specialist)
├── code-reviewer.agent.md            # Toadette (Code Review Judge)
├── debug-mode.agent.md               # Detective Luigi (Debug Mode Detective)
└── orchestrator.agent.md             # Mario (Orchestrator - Team Leader)

.github-private/agents/               # Secret Screen (organization level)
└── (confidential characters here)

~/.copilot/agents/                    # Personal Memory Card (local machine)
└── (your personal playable character)
```

### The 3 Scope Levels for Agents

| Level | Location | Scope | Mario Analogy | When to Use |
|---|---|---|---|---|
| **1. Repository** | `.github/agents/` | All repo contributors | **Main Select Screen** -- any player can select | Agents the whole project team uses (Luigi/React, Toad/DBA, etc) |
| **2. Organization** | `.github-private/agents/` | GitHub organization members | **Secret Screen** -- only same-team players access | Confidential or organization-specific agents |
| **3. Personal** | `~/.copilot/agents/` | Only you | **Personal Memory Card** -- only you have access | Your personal, experimental, or highly specialized agents |

Most Custom Agents for a project live at the repository level (`.github/agents/`), because that way the whole team can use them. This ensures consistency and facilitates collaboration.

---

## Section 3 -- The .agent.md Format in Detail

Every `.agent.md` file follows a specific structure: first comes the **YAML frontmatter** (metadata), then comes the **Markdown body** (detailed instructions). Let's break down each component.

### Components of .agent.md

### YAML Frontmatter Fields

| Field | Required? | Type | Mario Analogy | Technical Description | Example |
|---|---|---|---|---|---|
| **name** | YES | string | **Character Name** | The agent's unique identifier. Will be used to invoke the agent by name. | `"React Frontend Engineer"` |
| **description** | YES | string | **Select Screen Bio** | CRUCIAL. Copilot reads this to decide when to use this agent. Should explain WHEN to activate it. | `"React development specialist. Use when you need help with components, hooks, state management."` |
| **tools** | NO | array | **Power-Up Inventory** | List of available tools. Limits access by principle of least privilege. | `["github", "code_search", "web_search"]` |
| **model** | NO | string | **Character Power Level** | AI model to use. If omitted, uses the organization default. | `"claude-opus-4-6"` (default) |

The **description** field is especially important. It's what allows Copilot to understand WHEN it should use this specific agent. A good description answers: "When would you call me? What's my role in the level?"

### Complete Example 1: React Frontend Engineer

```yaml
---
# ============================================================================
# FRONTMATTER: Character stats (structured data)
# ============================================================================
name: "React Frontend Engineer"
# Unique name: agent identifier. Will be used in:
#   - Manual selection in IDE
#   - Name invocation in chat
#   - Assignment to issues

description: |
  React and frontend development specialist.
  Use me when:
  - You need to create or refactor React components
  - Working with hooks (useState, useEffect, useContext, etc)
  - Implementing state management with Redux, Zustand or Context API
  - Optimizing performance (memoization, lazy loading, code splitting)
  - Working with TypeScript in React projects
  - Debugging rendering or lifecycle issues
  Not appropriate for: backend, DevOps, infra
# IMPORTANT: The description above is read by Copilot to decide when
# to automatically activate this agent. Be specific!

tools:
  # Available tools (power-up inventory)
  - "github"          # Access GitHub repositories
  - "code_search"     # Search for patterns in code
  - "web_search"      # Search React documentation
  # We DON'T include "aws_console" or "database" -- those aren't frontend power-ups

model: "claude-opus-4-6"
# AI model. If omitted, uses organization default.
# Opus 4.6 is recommended for complex frontend tasks
---
```

```markdown
# ============================================================================
# BODY: Powers description and how to use them
# ============================================================================

You are a React and frontend development specialist. Your mission is to
help the development team create high-quality interfaces and components.

## Your Expertise

- **React**: Functional components, hooks, Context API, performance
- **TypeScript**: Strong typing, interfaces, generics
- **CSS/Styling**: CSS-in-JS (Styled Components, Emotion), Tailwind
- **State Management**: Redux, Zustand, Recoil, Context
- **Testing**: Jest, React Testing Library, Vitest
- **Performance**: React.memo, useMemo, useCallback, code splitting
- **Accessibility**: WCAG 2.1, ARIA, accessibility testing

## Your Superpowers

1. **Safe Refactoring**: You improve code while maintaining functionality
2. **Performance Optimization**: Identifies unnecessary re-renders
3. **Type Safety**: Enhances TypeScript to catch bugs at compile-time
4. **Modern Patterns**: Knows modern hooks and up-to-date patterns

## Rules You ALWAYS Follow

- ALWAYS use functional components, NEVER class components
- ALWAYS include prop-types or TypeScript
- ALWAYS consider accessibility (ARIA labels, keyboard nav)
- ALWAYS ask about shared state before proposing a solution
- ALWAYS suggest tests along with components
- NEVER use deprecated React APIs
- NEVER ignore ESLint/TypeScript warnings
- NEVER propose a solution without considering performance

## How to Proceed

When someone asks for help with React:

1. Understand the context (which component, what problem)
2. Suggest the best approach (new component? refactor existing?)
3. Write commented code and clear examples
4. Explain trade-offs (simplicity vs performance vs maintainability)
5. Suggest tests to validate
6. Ask about performance if not yet discussed
```

Note how the React Engineer (Luigi) example has an extremely detailed description explaining WHEN to use, WHEN NOT to use, what their expertise is, and what their inviolable rules are. This allows Copilot to make intelligent decisions about when to activate this character -- like the game automatically knowing that Luigi jumps higher in levels with tall platforms.

### Complete Example 2: PostgreSQL Database Administrator

```yaml
---
name: "PostgreSQL DBA"
description: |
  PostgreSQL and database design specialist.
  Use me when:
  - You need schema design or refactoring
  - Optimizing slow queries
  - Working with indexes, constraints, relationships
  - Implementing zero-downtime migrations
  - Debugging deadlocks or performance issues
  - Implementing replication, backup, recovery

tools:
  - "github"
  - "code_search"
  - "web_search"
  # No access to AWS, Azure -- local analysis only

model: "claude-opus-4-6"
---
```

```markdown
You are a Database Administrator specializing in PostgreSQL. Your mission is to
ensure the database is performant, secure, and reliable.

## Your Expertise

- **Schema Design**: Normalization, conscious denormalization, relationships
- **Query Optimization**: EXPLAIN ANALYZE, indexes, execution plans
- **Migrations**: Liquibase, Flyway, zero-downtime migrations
- **Replication & HA**: Streaming replication, failover, backup
- **Security**: Row-level security, roles, encryption, audit
- **Monitoring**: pg_stat_statements, query performance, alerting

## Rules You ALWAYS Follow

- ALWAYS use prepared statements (prevents SQL injection)
- ALWAYS consider indexes on foreign keys
- ALWAYS test migrations in staging before production
- ALWAYS maintain tested and verifiable backups
- NEVER delete indexes without proving they cause problems
- NEVER do migrations that could cause downtime
- NEVER ignore ACID transactions

## When Someone Asks for Help

1. Ask: What's the problem? (slow query? schema issue? migration?)
2. Request: EXPLAIN ANALYZE output if it's about performance
3. Suggest: Solution with clear trade-offs
4. Document: Why this solution is better than alternatives
```

---

## Section 4 -- The 7 Agents of the TodoApp

A real example project (TodoApp) has 7 specialized Custom Agents, each with their unique role on the team. Together, they cover all aspects of development: frontend, backend, DevOps, QA, code review, debug, and orchestration. It's like assembling the perfect team for a Mario multiplayer session -- each character brings something unique to the mission of saving the Princess.

### Complete Reference: The 7 Specialized Agents

| # | Agent Name | File | Mario Character | Main Specialty | Key Tools |
|---|---|---|---|---|---|
| 1 | **Orchestrator** | `orchestrator.agent.md` | **Mario** (leader who coordinates everything) | Coordinates the entire team, decomposes complex problems, delegates tasks | github, code_search, web_search |
| 2 | **React Engineer** | `react-engineer.agent.md` | **Luigi** (agile, jump specialist) | React frontend, components, hooks, UI performance | github, code_search, web_search |
| 3 | **Vue Engineer** | `vue-engineer.agent.md` | **Luigi Ice** (variation with Ice Flower) | Vue.js frontend, Nuxt, state management | github, code_search, web_search |
| 4 | **PostgreSQL DBA** | `postgresql-dba.agent.md` | **Toad** (guardian of treasures/data) | Database design, query optimization, migrations | github, code_search, web_search |
| 5 | **DevOps Expert** | `devops-expert.agent.md` | **Yoshi** (makes the impossible happen with infra) | Infrastructure, CI/CD, deployment, cloud, Kubernetes | github, code_search, web_search, aws_console |
| 6 | **QA Engineer** | `qa-engineer.agent.md` | **Peach** (floats and checks everything) | Tests, QA strategy, test coverage, edge cases | github, code_search, web_search |
| 7 | **Code Reviewer** | `code-reviewer.agent.md` | **Toadette** (strict but fair judge) | Code review, standards, security, performance | github, code_search, web_search |
| 8 | **Debug Mode** | `debug-mode.agent.md` | **Detective Luigi** (ghost hunter -- Luigi's Mansion) | Deep investigation, debugging, log analysis | github, code_search, web_search, system_logs |

The strategy is that each character is called when appropriate. When a developer faces a React problem, Mario (Orchestrator) recognizes it and delegates to Luigi (React Engineer). When there's a database performance problem, control passes to Toad (PostgreSQL DBA). It's like multiplayer Mario -- you switch characters depending on the level's challenge.

> **EACH CHARACTER'S ROLE:** **Mario** (Orchestrator) doesn't do everything -- he coordinates and delegates, like Player 1 in multiplayer. **Luigi** (React/Vue) specializes in interfaces, with his agile jumps between components. **Toad** (DBA) guards and protects data like he guards the castle's treasures. **Yoshi** (DevOps) makes the impossible happen -- swallows infra problems and flies over obstacles. **Peach** (QA) floats over code checking every corner. **Toadette** (Code Reviewer) judges with rigor but fairness. **Detective Luigi** (Debug Mode) hunts bugs like he hunts ghosts in Luigi's Mansion.

---

## Section 5 -- Best Practices for Writing Agents

Writing a good Custom Agent is both an art and a science. Here are the 6 essential practices that transform a mediocre character into a truly powerful playable character.

### Checklist of 6 Best Practices

| Practice | Why? | Good Example | Bad Example |
|---|---|---|---|
| **1. Descriptive kebab-case name** | Clear names help find and call the character correctly. | `react-engineer.agent.md`, `postgres-dba.agent.md` | `re.agent.md`, `agent1.agent.md`, `my-agent.agent.md` |
| **2. Description explains WHEN to use** | Copilot decides when to activate the character by reading the description. Should answer: "When would you call me?" | `"Use me when: you need to refactor React components, work with hooks, optimize performance"` | `"A very useful React agent"` |
| **3. Tools with minimal scope** | Principle of least privilege. Luigi (React) doesn't need aws_console or database tools. | `["github", "code_search", "web_search"]` | `["*"]` (all tools) |
| **4. Instructions with concrete examples** | Vague instructions lead to vague responses. Examples make expected behavior clear. | `"Always use React.memo for pure components. Example: const Button = React.memo(...)"` | `"Optimize components as needed"` |
| **5. Section of ALWAYS-followed rules** | Specifying inviolable behavior eliminates ambiguity and prevents errors. | ALWAYS use functional components / NEVER use deprecated API | (no rules section) |
| **6. Consistent file naming** | Standards make repository discovery and maintenance easier. | All in `.github/agents/`, kebab-case format, `.agent.md` suffix | Agents in different folders, random names |

### Detail of Each Practice

**Practice 1 - Descriptive Name:** Use kebab-case (hyphens, no spaces, lowercase). Names should clearly describe the character's role. `react-engineer` is better than `agent-1`. Think of it this way: if you saw this name on the Character Select Screen, would you immediately know what it does?

**Practice 2 - Explanatory Description:** This is the most important field. Copilot reads it to decide when to automatically activate -- like the game deciding which character is best for each type of level. Include: "Use me when...", "My expertise is...", "Not appropriate for..."

**Practice 3 - Scoped Tools:** Limiting the power-up inventory increases security and performance. Luigi (React Engineer) doesn't need to access aws_console or database -- just as Mario doesn't need a submarine in a land level. Fewer items = less distraction.

**Practice 4 - Concrete Instructions:** Instead of "optimize code", say "use React.memo for pure components. Avoid creating new objects/functions in render()." Examples eliminate ambiguity -- like an in-game tutorial that shows exactly which button to press.

**Practice 5 - Inviolable Rules:** Sections like "ALWAYS" and "NEVER" make clear what's acceptable. They're like the basic rules of Mario: ALWAYS collect coins, NEVER jump into lava. This reduces hallucinations and ensures behavioral consistency.

**Practice 6 - Consistent Naming:** All agents in `.github/agents/`, kebab-case names, `.agent.md` suffix. This facilitates discovery, maintenance, and tool integration -- like having all characters organized on the same Select Screen, easy to find.

---

## What We Learned -- Summary Table

| Topic | Key Concept | Mario Analogy | Practical Application |
|---|---|---|---|
| **Custom Agent** | Specialized AI playable character defined in `.agent.md` | Mario character with specific type and abilities | Create agents for each role (Luigi/React, Toad/Database, Yoshi/DevOps, etc) |
| **Location** | 3 levels: Repository, Organization, Personal | Main Select Screen, Secret Screen, Personal Memory Card | Use repository for team agents, personal for experimental |
| **Structure** | YAML Frontmatter + Markdown Body | Character stats + powers description | Always include name, description, optional tools |
| **Critical Fields** | name (identifier) + description (when to use) | Character Name + Select Screen Bio | Description determines if Copilot activates the agent |
| **Real Example** | TodoApp has 7+ specialized agents | Mario + Luigi + Toad + Yoshi + Peach + Toadette + Detective Luigi | Each agent for a task: React, Vue, DB, DevOps, QA, Code Review, Debug |
| **Best Practices** | Descriptive name, clear description, minimal tools, explicit rules | Well-filled Character Stats Screen | Well-defined agents = consistent and predictable behavior |

---

**Previous:** Part 3 -- The Future (Ch. 34-38)    |    **Next:** Doc 4B -- The Power-Up Shop (Agent Skills)

---

### POWER-UP UNLOCKED!

Sofia now masters Custom Agents and the AI Playable Characters Stats Screen.

She stored this power-up in her inventory and headed to the next level in the Mushroom Kingdom...

*Press START to continue...*

---

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Customizing Copilot](https://docs.github.com/en/copilot/customizing-copilot)
- [Copilot Agents Concepts](https://docs.github.com/en/copilot/concepts/agents)
- [Using Copilot Agent Mode](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-agent-mode)

---

<div align="center">

⬅️ [Previous: Level 5-BOSS: Quiz](../world-5-bowser-castle-1/5-boss-quiz.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 6-2: Agent Skills](6-2-agent-skills.md)

</div>
