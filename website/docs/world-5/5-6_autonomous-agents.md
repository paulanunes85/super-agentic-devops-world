---
title: "Level 5-6 -- The Yoshis that Fly Solo: Autonomous Agents"
description: "Autonomous agents, planning loops, and guardrails explained with Mario analogies"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
tags: ["agentic-devops", "mario", "world-5", "autonomous-agents", "guardrails"]
sidebar_position: 7
format: md
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-03-18 | Paula Silva | Initial version — Super Mario Bros Edition |

# Level 5-6 -- The Yoshis that Fly Solo: Autonomous Agents

---

**Prepared for:** Sofia
**Version:** 1.0 (Mushroom Kingdom Edition)
**Author:** Paula Silva | Software Global Black Belt, Microsoft Americas
**Date:** March 2026
**Language:** Brazilian Portuguese (pt-BR)
**Collection:** Agentic DevOps -- Complete Software Development Guide

---

## TABLE OF CONTENTS

- [Introduction -- The Yoshi that Learned to Fly](#introduction--the-yoshi-that-learned-to-fly)
- [Section 1 -- What Makes an Agent "Autonomous"](#section-1--what-makes-an-agent-autonomous)
  - [Autonomous vs Assisted: The Definition](#autonomous-vs-assisted-the-definition)
  - [The 5 Pillars of Autonomy](#the-5-pillars-of-autonomy)
  - [Table: Assisted vs Autonomous](#table-assisted-vs-autonomous)
- [Section 2 -- The Autonomous Planning Loop](#section-2--the-autonomous-planning-loop)
  - [The 6 Stages of Planning](#the-6-stages-of-planning)
  - [Complete Example: Coding Agent Solving an Issue](#complete-example-coding-agent-solving-an-issue)
  - [The Power of Self-Evaluation](#the-power-of-self-evaluation)
- [Section 3 -- Guardrails: The Invisible Walls](#section-3--guardrails-the-invisible-walls)
  - [What Are Guardrails](#what-are-guardrails)
  - [The 6 Types of Guardrails](#the-6-types-of-guardrails)
  - [Complete Guardrails Table](#complete-guardrails-table)
  - [Configuring Guardrails in Practice](#configuring-guardrails-in-practice)
- [Section 4 -- Human-in-the-Loop: The Player Never Loses Control](#section-4--human-in-the-loop-the-player-never-loses-control)
  - [What Is Human-in-the-Loop](#what-is-human-in-the-loop)
  - [Intervention Points](#intervention-points)
  - [The Principle of Proportional Control](#the-principle-of-proportional-control)
- [Section 5 -- Real Examples of Autonomous Agents](#section-5--real-examples-of-autonomous-agents)
  - [GitHub Copilot Coding Agent](#github-copilot-coding-agent)
  - [Multi-Agent Conversations](#multi-agent-conversations)
  - [Autonomous Agents in CI/CD](#autonomous-agents-in-cicd)
- [Section 6 -- Trust Levels: The "I've Got This" Scale](#section-6--trust-levels-the-ive-got-this-scale)
  - [The 4 Trust Levels](#the-4-trust-levels)
  - [How to Level Up](#how-to-level-up)
  - [Supervision Table by Level](#supervision-table-by-level)
- [Section 7 -- Risks and Mitigations: The Dangers of Flying Too High](#section-7--risks-and-mitigations-the-dangers-of-flying-too-high)
  - [The 4 Major Risks](#the-4-major-risks)
  - [Risks and Mitigations Table](#risks-and-mitigations-table)
  - [The Golden Rule](#the-golden-rule)
- [Section 8 -- Building Trust: From Zero to Autonomous](#section-8--building-trust-from-zero-to-autonomous)
  - [The 4-Week Plan](#the-4-week-plan)
  - [Signs You Can Increase Autonomy](#signs-you-can-increase-autonomy)
  - [Signs You Should Decrease Autonomy](#signs-you-should-decrease-autonomy)
- [What We Learned -- Summary Table](#what-we-learned--summary-table)

---

## Introduction -- The Yoshi that Learned to Fly

<div align="center">
<img src="/img/diagrams/autonomous-agent-flow.svg" alt="Autonomous agent planning flow" width="780" />
<br/><em>Autonomous agent planning flow</em>
</div>

Sofia was at the top of a mountain in World 5 when she saw something incredible. A blue Yoshi took off from a distant platform, flew over a valley full of Koopas, dodged three Bullet Bills, collected a star hidden behind a cloud, and landed smoothly on the next platform -- all by himself, with no one riding him.

"He... he did all that by himself?!" Sofia exclaimed, jaw dropped.

The Toad beside her nodded. "That's an Autonomous Yoshi. You don't need to ride him and control every movement. You say: 'Yoshi, I need that star behind the cloud.' And he goes. Plans the route, dodges obstacles, grabs the star, and comes back."

"But... what if he makes a mistake? What if he flies off the map?"

"Excellent question," the Toad pointed to nearly invisible glowing lines at the edges of the scenery. "See those lines? Those are **Guardrails** -- invisible walls. Yoshi can fly anywhere WITHIN those walls. But he never goes beyond the limits. And if he encounters something he can't figure out, he comes back and asks you. He's autonomous, not uncontrollable."

Sofia looked from Yoshi to the Guardrails. "So autonomy isn't the absence of control..."

"Autonomy is **freedom with intelligent limits**," the Toad completed. "And that's exactly what you'll learn in this level."

---

## Section 1 -- What Makes an Agent "Autonomous"

### Autonomous vs Assisted: The Definition

An agent is considered **autonomous** when it can receive a **high-level goal** and complete the entire task **without human intervention at each step**. It doesn't wait for detailed instructions -- it decomposes the problem, plans the approach, chooses tools, executes, evaluates the result, and iterates until completion.

The fundamental difference:

- **Assisted Agent:** "Tell me exactly what to do at each step and I'll do it."
- **Autonomous Agent:** "Tell me what you want in the end and I'll figure out how to get there."

> **MARIO ANALOGY:** An **assisted** Yoshi is one you ride and control: "Jump here. Now swallow that enemy. Now run right. Now jump again." You give each command. An **autonomous** Yoshi is one you tell: "Yoshi, I need to get to that platform up there" and he figures out the best route on his own: jump off that wall, use the flutter jump, swallow that Koopa for a boost, and land on the platform. Same destination, but the path is HIS decision.

### The 5 Pillars of Autonomy

For an agent to be truly autonomous, it needs to master 5 capabilities:

| Pillar | What It Means | Without It | With It | Mario Analogy |
|---|---|---|---|---|
| **1. Decomposition** | Break a big goal into sub-tasks | Tries to solve everything at once (and fails) | Divides into manageable steps | Yoshi that breaks "get up there" into "jump, swallow, fly, land" |
| **2. Planning** | Create logical sequence of actions | Acts randomly | Follows structured plan | Yoshi that traces the route before taking off |
| **3. Tool Selection** | Choose the right tool for each sub-task | Uses the same tool for everything | Uses the ideal tool for each step | Yoshi that knows when to swallow, when to spit, when to fly |
| **4. Self-Evaluation** | Verify if the result is correct | Delivers without checking | Tests and validates before delivering | Yoshi that confirms he landed on the right platform |
| **5. Error Recovery** | Handle failures without human help | Stops at the first error | Tries an alternative approach | Yoshi that, if the route fails, tries another one |

### Table: Assisted vs Autonomous

| Aspect | Assisted Agent | Autonomous Agent |
|---|---|---|
| **Input** | Detailed, step-by-step instructions | High-level goal |
| **Planning** | Human plans, agent executes | Agent plans and executes |
| **Decisions** | Human makes all decisions | Agent makes decisions within guardrails |
| **Errors** | Agent stops and asks for help | Agent tries to solve it alone, escalates if needed |
| **Supervision** | Constant (at each step) | Occasional (at the start and end) |
| **Speed** | Limited by human speed | Limited by agent speed (generally faster) |
| **Risk** | Low (human validates everything) | Medium (guardrails mitigate) |
| **Best for** | Critical tasks, important decisions | Repetitive, well-defined tasks |
| **Mario Analogy** | You riding Yoshi, controlling | Yoshi flying solo on a mission |

---

## Section 2 -- The Autonomous Planning Loop

### The 6 Stages of Planning

When an autonomous agent receives a goal, it executes a sophisticated planning loop:

```
                    ┌──────────────────────┐
                    │   GOAL RECEIVED      │
                    │ "Resolve this issue" │
                    └──────────┬───────────┘
                               │
                               v
                    ┌──────────────────────┐
                    │ 1. DECOMPOSITION     │
                    │ Break into sub-tasks │
                    └──────────┬───────────┘
                               │
                               v
                    ┌──────────────────────┐
                    │ 2. PLANNING          │
                    │ Order sub-tasks      │
                    └──────────┬───────────┘
                               │
                               v
                    ┌──────────────────────┐
                    │ 3. TOOL SELECTION    │
                    │ Choose tools         │
                    └──────────┬───────────┘
                               │
                               v
              ┌────────────────────────────────┐
              │ 4. EXECUTION                   │
              │ Execute each sub-task          │◄──┐
              └──────────────┬─────────────────┘   │
                             │                     │
                             v                     │
              ┌────────────────────────────────┐   │
              │ 5. SELF-EVALUATION             │   │
              │ "Did it work? Correct result?" │   │
              └──────────────┬─────────────────┘   │
                             │                     │
                        ┌────┴────┐                │
                        NO       YES               │
                        │         │                │
                        v         v                │
              ┌──────────┐  ┌──────────────┐       │
              │ 6. ADJUST│  │  DELIVER     │       │
              │ Change   │──┘  Final       │       │
              │ plan     │     result      │       │
              └──────────┘  └──────────────┘
```

| Stage | What Happens | Example (Bug Fix) | Mario Analogy |
|---|---|---|---|
| **1. Decomposition** | Big goal → smaller sub-tasks | "Fix login bug" → a) understand bug, b) find code, c) fix, d) test, e) create PR | "Reach the star" → a) jump wall, b) dodge Bullet Bill, c) fly to cloud, d) grab star |
| **2. Planning** | Order sub-tasks in logical sequence | First understand, then find, then fix, then test | First jump, then dodge, then fly |
| **3. Tool Selection** | Choose the right tool for each step | code_search to find, edit to fix, terminal to test | Jump for wall, flutter to dodge, flight for cloud |
| **4. Execution** | Run each sub-task in sequence | Search "login" in code → find bug on line 42 → edit file | Jump → dodge → fly |
| **5. Self-Evaluation** | Check: did it work? | Run tests → did they all pass? | Am I on the right platform? |
| **6. Iteration** | If it didn't work, adjust and repeat | Test failed → read error → adjust fix → test again | Fell? Try another route |

### Complete Example: Coding Agent Solving an Issue

See how the GitHub Copilot Coding Agent solves an issue in a completely autonomous way:

```
ISSUE #247: "The 'Save' button doesn't work when the form
             has empty optional fields"

─── STAGE 1: DECOMPOSITION ───────────────────────────────────

The agent reads the issue and decomposes:
  Sub-task 1: Understand the form structure
  Sub-task 2: Reproduce the bug (find relevant code)
  Sub-task 3: Identify the root cause
  Sub-task 4: Write the fix
  Sub-task 5: Add tests
  Sub-task 6: Verify everything passes
  Sub-task 7: Create PR with description

─── STAGE 2: PLANNING ───────────────────────────────────

Plan: 1→2→3→4→5→6→7 (sequential)

─── STAGE 3: TOOL SELECTION ──────────────────────────────

  Sub-task 1: code_search (search form components)
  Sub-task 2: file_read (read the found code)
  Sub-task 3: reasoning (analyze code logic)
  Sub-task 4: file_edit (modify the file)
  Sub-task 5: file_edit (create test file)
  Sub-task 6: terminal (run npm test)
  Sub-task 7: github (create PR)

─── STAGE 4: EXECUTION ──────────────────────────────────

[code_search] Searching "SaveButton" and "form submit"...
  → Found: src/components/SaveForm.tsx

[file_read] Reading SaveForm.tsx...
  → Line 38: if (!formData.name || !formData.email || !formData.phone)
  → PROBLEM: phone is optional but is in the validation as required!

[file_edit] Fixing SaveForm.tsx...
  → Line 38: if (!formData.name || !formData.email)
  → Removed phone from required validation

[file_edit] Creating SaveForm.test.tsx...
  → Test 1: "should save when optional fields are empty"
  → Test 2: "should block when required fields are empty"
  → Test 3: "should save when all fields are filled"

─── STAGE 5: SELF-EVALUATION ─────────────────────────────

[terminal] npm test -- --testPathPattern=SaveForm
  → Test 1: PASS
  → Test 2: PASS
  → Test 3: PASS
  → TypeScript: zero errors
  → ESLint: zero warnings

  Evaluation: ALL TESTS PASSED ✓

─── STAGE 6: NO ADJUSTMENT NEEDED ─────────────────────

─── STAGE 7: DELIVERY ───────────────────────────────────

[github] Creating PR...
  Branch: fix/issue-247-save-button-optional-fields
  Title: "Fix save button when optional fields are empty"
  Description: "The save validation was treating the optional
                'phone' field as required. Removed it from the
                mandatory check. Added 3 tests to cover the
                scenarios."
  → PR #248 created and ready for review
```

> **MARIO ANALOGY:** Yoshi received the mission: "Grab the star behind the cloud." He took off, traced the route (dodge the Bullet Bill from the left, rise on the air current, go around the cloud from above), executed each step, verified he grabbed the right star, and returned to the platform with the star in his mouth. If the Bullet Bill had changed course, he would have adjusted the plan mid-flight. Mission complete, without needing a command every second.

### The Power of Self-Evaluation

Self-evaluation is what separates an autonomous agent from a dumb script. A script executes and that's it -- it doesn't care if it worked. An autonomous agent **verifies the result** and **adjusts if necessary**.

| Scenario | Script (No Self-Evaluation) | Autonomous Agent (With Self-Evaluation) |
|---|---|---|
| Test fails after fix | Delivers broken code | Reads the error, understands the problem, adjusts the fix, tests again |
| File not found | Fatal error, stops everything | Searches for alternative names, checks if it moved |
| Missing dependency | Build failure | Installs the dependency, re-runs the build |
| TypeScript error | Ignores and moves on | Analyzes the type error, fixes it, re-verifies |
| PR with conflict | Creates broken PR | Resolves the conflict, verifies the resolution is correct |

---

## Section 3 -- Guardrails: The Invisible Walls

### What Are Guardrails

**Guardrails** are limits and restrictions that define the safe space within which an autonomous agent can operate. They exist to ensure that the agent, no matter how autonomous, never does something dangerous or outside the permitted scope.

Guardrails are not restrictions that get in the way -- they are protections that allow you to give MORE autonomy to the agent safely. Without guardrails, you'd be afraid to grant autonomy. With guardrails, you can grant autonomy with confidence.

> **MARIO ANALOGY:** Guardrails are the **invisible walls** at the boundaries of each Mario level. You never noticed them because they're... invisible. But they're there. Mario can't leave the map, can't fall below the lower limit, can't walk infinitely to the left. These invisible walls don't hinder gameplay -- they ENABLE gameplay. Without them, Mario would fall into the infinite void. An autonomous Yoshi with guardrails can fly freely WITHIN the map. Without guardrails, he'd fly out of the game and never come back.

### The 6 Types of Guardrails

| Type | What It Limits | Why It Exists | Example | Mario Analogy |
|---|---|---|---|---|
| **1. Scope** | WHAT the agent can do | Prevents the agent from doing things outside its responsibility | "Can only edit files in the /frontend folder" | Level walls -- Yoshi can only fly within this level |
| **2. Approval** | WHO authorizes critical actions | Ensures human oversight at key moments | "PRs to main require human approval" | Castle gate -- only opens with the player's key |
| **3. Budget** | HOW MUCH it can spend (tokens, API calls, time) | Prevents cost explosion | "Maximum 50,000 tokens per execution" | Coin limit -- Yoshi can't spend more than 100 coins per mission |
| **4. Time** | HOW LONG it can run | Prevents infinite loops | "Timeout of 30 minutes" | Level timer -- limited time |
| **5. Security** | WHAT it cannot touch | Protects critical resources | "Never access production database" | Indestructible blocks -- Yoshi can't break certain walls |
| **6. Reversibility** | HOW to undo | Ensures actions can be reverted | "All changes via PR (reversible), never direct commit" | Checkpoint -- if something goes wrong, return here |

### Complete Guardrails Table

| Guardrail | Configuration | What It Prevents | What It Allows | Risk Level Without It |
|---|---|---|---|---|
| **File Scope** | `paths: ["src/**", "tests/**"]` | Agent editing infra configs, CI/CD, security | Agent editing source code and tests | HIGH -- agent could alter deploy pipeline |
| **Branch Protection** | Mandatory PRs for `main` | Direct commit to production | Agent creating PRs that will be reviewed | CRITICAL -- unreviewed code in production |
| **Token Budget** | `max_tokens: 50000` | Agent consuming resources infinitely | Agent working within a budget | MEDIUM -- unexpected cost in API calls |
| **Timeout** | `timeout: 30m` | Infinite loop consuming resources | Agent working for a reasonable time | MEDIUM -- process stuck forever |
| **Approval Gates** | `require_approval: ["deploy", "delete"]` | Deploy or deletion without oversight | Agent preparing everything, human approving final action | CRITICAL -- accidental deploy or data loss |
| **Read-Only in Prod** | `production: read_only` | Any writes to production | Agent reading production logs and metrics | CRITICAL -- accidental change in production |
| **Secret Exclusion** | `exclude: ["*.env", "secrets/**"]` | Agent reading or exposing secrets | Agent working with code without access to credentials | CRITICAL -- credential leak |
| **Tool Restrictions** | `tools: ["read", "edit", "search"]` | Agent executing dangerous terminal commands | Agent reading, editing, and searching code safely | HIGH -- execution of destructive commands |

### Configuring Guardrails in Practice

Guardrails can be configured at various levels:

**Level 1 -- In the Agent File (.agent.md)**
```yaml
---
name: "Frontend Fix Agent"
description: "Fixes bugs in the frontend. Scope limited to /frontend."
tools:
  - "github"
  - "code_search"
  # Does NOT include "terminal" -- cannot execute commands
  # Does NOT include "admin" -- cannot access sensitive configs
---
```

**Level 2 -- In Repository Configuration**
```yaml
# .github/copilot-coding-agent.yml (conceptual example)
coding_agent:
  allowed_paths:
    - "src/**"
    - "tests/**"
    - "docs/**"
  blocked_paths:
    - ".github/workflows/**"
    - "infrastructure/**"
    - ".env*"
  max_files_changed: 10
  require_tests: true
  auto_merge: false  # ALWAYS requires human approval
```

**Level 3 -- In GitHub (Branch Protection)**
```
Branch: main
  ☑ Require pull request before merging
  ☑ Require approvals (minimum: 1)
  ☑ Require status checks to pass
  ☑ Require conversation resolution
  ☐ Allow force pushes (NEVER!)
  ☐ Allow deletions (NEVER!)
```

> **MARIO ANALOGY:** Configuring guardrails is like the Level Designer configuring the invisible walls of each level. **Level 1** (Agent): define each character's powers and limitations -- Yoshi can fly but can't spit fire. **Level 2** (Repository): define the level rules -- this level has walls here, here, and here, and the floor is lava there. **Level 3** (GitHub): define the ENTIRE GAME rules -- to advance worlds, you must defeat the boss, and no one can skip the boss.

---

## Section 4 -- Human-in-the-Loop: The Player Never Loses Control

### What Is Human-in-the-Loop

**Human-in-the-Loop (HITL)** is the principle that, no matter how autonomous the agent is, the human ALWAYS has the option to intervene, review, approve, or reject critical decisions.

HITL doesn't mean the human does the agent's work. It means the human is the **final decision-maker** for high-impact actions. The agent does the heavy lifting, the human validates the result.

> **MARIO ANALOGY:** Imagine Yoshi can fly autonomously through the entire level. But when he reaches the Boss door, he lands and says: *"I'm ready to go in. Do you want me to?"* He doesn't enter the Boss room alone -- that decision is YOURS. You can say "Go!" or "Wait, let me check if you're at full health first." Yoshi did all the work of getting there, but the critical decision belongs to the player. That's Human-in-the-Loop.

### Intervention Points

| Moment | What the Agent Does | What the Human Decides | Example |
|---|---|---|---|
| **Before starting** | Presents the plan | Approve or adjust the plan | "I'll fix it by editing these 3 files. OK?" |
| **Before critical action** | Prepares the action | Authorize execution | "I'm going to delete this database table. May I proceed?" |
| **After completing** | Delivers result | Accept or reject | "PR ready for review. Merge?" |
| **When encountering uncertainty** | Explains the doubt | Provide direction | "I found 2 ways to solve this. Which do you prefer?" |
| **When encountering an error** | Explains the error | Decide next steps | "The tests failed. Want me to try another approach?" |

### The Principle of Proportional Control

The amount of human supervision should be **proportional to the risk** of the action:

```
LOW RISK → MINIMAL SUPERVISION
  Example: Fix typo in comment
  Agent: Does it and shows in PR
  Human: Approves with one click

MEDIUM RISK → MODERATE SUPERVISION
  Example: Refactor validation function
  Agent: Does it and explains changes in detail
  Human: Reviews code, runs tests, approves

HIGH RISK → RIGOROUS SUPERVISION
  Example: Alter database schema
  Agent: Prepares migration and STOPS
  Human: Reviews, tests in staging, approves deploy

CRITICAL RISK → HUMAN DECIDES EVERYTHING
  Example: Production deploy on Black Friday
  Agent: Prepares everything, presents checklist
  Human: Executes each step manually with agent watching
```

---

## Section 5 -- Real Examples of Autonomous Agents

### GitHub Copilot Coding Agent

The Coding Agent is the most concrete example of an autonomous agent in DevOps today:

**How it works:**
1. You assign an issue to Copilot (`@copilot` on the issue)
2. The agent reads the issue, analyzes the repository, creates a plan
3. Creates a branch, an isolated codespace
4. Writes code, runs tests, iterates
5. Opens a Pull Request with a detailed description
6. You review and merge (or request changes)

```
CODING AGENT FLOW:

Issue assigned to @copilot
        │
        v
   ┌─────────────┐
   │ Reads issue  │
   │ and repo     │
   └──────┬──────┘
          │
          v
   ┌─────────────┐
   │ Creates      │
   │ branch and   │
   │ codespace    │
   └──────┬──────┘
          │
          v
   ┌─────────────┐
   │ Writes       │
   │ code         │◄──────────┐
   └──────┬──────┘           │
          │                  │
          v                  │
   ┌─────────────┐           │
   │ Runs tests   │    ┌─────┴─────┐
   └──────┬──────┘    │ Adjusts   │
          │           │ code      │
     ┌────┴────┐      └───────────┘
    PASS     FAIL──────────┘
     │
     v
   ┌─────────────┐
   │ Opens PR     │
   │ with         │
   │ description  │
   └──────┬──────┘
          │
          v
   ┌─────────────┐
   │ HUMAN        │
   │ reviews      │
   └─────────────┘
```

**Coding Agent Guardrails:**
- Runs in an **isolated** codespace (doesn't touch your environment)
- All changes via **Pull Request** (reviewable, reversible)
- Respects **branch protection** (can't merge on its own)
- Limited to the **scope of the issue** (doesn't go off doing other things)
- Has a **timeout** (doesn't run infinitely)

> **MARIO ANALOGY:** The Coding Agent is an elite Yoshi. You show the mission on the map (issue), he takes off, does all the work, and comes back with the treasure (PR). But he NEVER puts the treasure in the real chest (merge) by himself -- he hands it to you for you to decide. And he works in an isolated space (codespace) -- if something goes wrong, it doesn't affect the real castle (production).

### Multi-Agent Conversations

In an advanced scenario, multiple autonomous agents can converse with each other to solve a complex problem:

```
SCENARIO: Implement payment system

ORCHESTRATOR (Mario): "I need a payment system.
                       Luigi, create the UI components.
                       Toad, create the database tables.
                       Yoshi, prepare the deploy."

LUIGI (React Agent):  "Creating components... PaymentForm.tsx,
                       PaymentHistory.tsx, OrderSummary.tsx.
                       Toad, I'll need a
                       GET /api/payments endpoint."

TOAD (DBA Agent):     "Creating tables payments, transactions,
                       payment_methods. Luigi, the fields returned
                       in the endpoint will be: id, amount, status, date."

YOSHI (DevOps Agent): "Preparing Dockerfile and kubernetes manifests.
                       Luigi, Toad -- when you're done, let me know
                       so I can configure the environment variables."

ORCHESTRATOR (Mario): "Luigi is done, Toad is done. Yoshi, you can
                       finalize. Peach, review everything."

PEACH (QA Agent):     "Reviewing... found an edge case: what
                       happens when a payment is refunded?
                       Luigi, there's a missing 'refunded' state in the UI."

LUIGI (React Agent):  "Good catch, Peach! Adding 'refunded' state
                       to the component..."
```

### Autonomous Agents in CI/CD

Autonomous agents are already a reality in CI/CD:

| Agent | Trigger | Autonomous Action | Guardrail |
|---|---|---|---|
| **Dependabot** | Outdated dependency detected | Creates PR with update | Human must approve merge |
| **CodeQL** | Push to repository | Scans code, reports vulnerabilities | Can block merge if critical issue found |
| **Copilot Autofix** | Security alert | Generates PR with automatic fix | Human reviews before merge |
| **Renovate** | New dependency version | Creates PR grouping compatible updates | Tests must pass before merge |

---

## Section 6 -- Trust Levels: The "I've Got This" Scale

### The 4 Trust Levels

The relationship between human and autonomous agent evolves across 4 trust levels:

| Level | Name | Agent's Phrase | What Happens | Mario Analogy |
|---|---|---|---|---|
| **1** | **"Watch me do it"** | "I'll do it while you watch" | Agent executes, human supervises each step in real time | Yoshi walking slowly, you observing each movement |
| **2** | **"Done, check it out"** | "I'm done, review the result" | Agent executes alone, shows complete result for review | Yoshi returned from mission, shows everything he did |
| **3** | **"Done, here's the summary"** | "I did such-and-such. Here's the summary." | Agent executes and reports, human only intervenes if something seems off | Yoshi sent message: "Star collected, 3 Koopas defeated" |
| **4** | **"I've got this"** | "You can go do something else" | Agent executes autonomously, human is notified only if necessary | Yoshi went on mission, you went to play another level |

> **MARIO ANALOGY:** Think about how you build trust in characters throughout the game. At the start, you don't trust ANYONE -- you do everything yourself. Then, you ride Yoshi but control every step (Level 1). Over time, you let Yoshi handle entire sections while you watch (Level 2). Later, you receive a summary of what he did (Level 3). And finally, you trust him so much that you send him on missions and go do something else (Level 4). Trust is BUILT, not assumed.

### How to Level Up

| From → To | What Needs to Happen | How Long | Example |
|---|---|---|---|
| **1 → 2** | Agent completes 5-10 tasks without errors under supervision | 1-2 weeks | "The Coding Agent got the last 8 issues right. I can stop watching each step." |
| **2 → 3** | Agent completes 20-30 tasks with quick reviews (few adjustments) | 2-4 weeks | "The Coding Agent's PRs need few adjustments. I can just read the summary." |
| **3 → 4** | Agent completes 50+ tasks with >95% accuracy rate | 1-3 months | "Dependabot has never missed a dependency update. I can set it to auto-merge for patches." |

### Supervision Table by Level

| Level | Review Frequency | Review Depth | Time Invested | Trust |
|---|---|---|---|---|
| **1 -- Watch me do it** | Each action | Line by line | High | Low |
| **2 -- Done, check it out** | Each delivery | Complete result | Medium | Medium |
| **3 -- Done, here's the summary** | Each summary | Only summary and metrics | Low | High |
| **4 -- I've got this** | Only alerts | Only anomalies | Minimal | Very High |

---

## Section 7 -- Risks and Mitigations: The Dangers of Flying Too High

### The 4 Major Risks

Autonomous agents are powerful, but they carry real risks that need to be managed:

**1. Hallucination**

The agent "invents" information or makes decisions based on facts that don't exist. It may reference functions that don't exist, use APIs with incorrect parameters, or generate code that looks right but is logically wrong.

> **MARIO ANALOGY:** Yoshi thinks there's an invisible platform in the air and jumps confidently... but the platform doesn't exist. He falls into the abyss. Hallucination is when the agent "sees" something that isn't there and acts as if it were.

**2. Infinite Loop**

The agent gets stuck in a cycle: tries to solve, fails, tries again the same way, fails again, repeats... forever. Each iteration consumes resources (tokens, time, money).

> **MARIO ANALOGY:** Yoshi keeps running into a wall, trying to pass, hitting, backing up, running again, hitting... infinitely. He never stops to think "maybe I need to go OVER this wall instead of through it."

**3. Cost Explosion**

The agent consumes far more resources than expected. Each LLM call costs money. An agent in an infinite loop or one that decomposes a task into hundreds of sub-tasks can generate significant costs.

> **MARIO ANALOGY:** Yoshi decides that to grab one coin, he needs to defeat ALL the enemies in the level, rebuild ALL the platforms, and repaint ALL the scenery. A simple task becomes an unnecessary epic production -- and spends all the coins in the treasury.

**4. Security**

The agent may access sensitive resources, leak information, or execute dangerous actions. If an agent has access to the terminal and production, it can cause real damage.

> **MARIO ANALOGY:** Yoshi enters the wrong castle (production environment instead of staging), opens the doors, and all the Koopas invade. Or he finds the kingdom's secret key (API key) and accidentally drops it in the middle of the plaza (public log).

### Risks and Mitigations Table

| Risk | Probability | Impact | Mitigation | Corresponding Guardrail |
|---|---|---|---|---|
| **Hallucination** | Medium-High | Medium | Automated tests, code review, output validation | Self-evaluation + mandatory tests |
| **Infinite Loop** | Medium | Medium-High | Timeout, iteration limit | Time + budget guardrail |
| **Cost Explosion** | Medium | High | Maximum budget, cost alerts | Budget guardrail |
| **Security** | Low-Medium | Critical | Minimum scope, isolation, no production access | Scope + security guardrails |
| **Incorrect code** | Medium | Medium | Mandatory tests, human code review | CI/CD + branch protection |
| **Irreversible actions** | Low | Critical | Everything via PR (reversible), approval for destructive actions | Approval + reversibility guardrail |

### The Golden Rule

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   GOLDEN RULE OF AUTONOMOUS AGENTS:                          ║
║                                                              ║
║   "Never give an agent more power than you're willing        ║
║    to fix if it makes a mistake."                            ║
║                                                              ║
║   If the agent can edit 5 files and get it wrong → OK,       ║
║   you revert the PR in 2 clicks.                             ║
║                                                              ║
║   If the agent can delete the production database and get    ║
║   it wrong → NOT OK. You don't revert that in 2 clicks.     ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

> **MARIO ANALOGY:** You let Yoshi fly through the level collecting coins? Sure -- if he messes up, you lost some coins. You let Yoshi fly solo to the game's final Boss and fight for you? Probably not -- if he loses, you lose the entire game. The level of autonomy should be proportional to the cost of failure.

---

## Section 8 -- Building Trust: From Zero to Autonomous

### The 4-Week Plan

Don't start at Level 4. Start at Level 1 and evolve gradually:

| Week | Level | What to Do | What to Observe | Mario Analogy |
|---|---|---|---|---|
| **Week 1** | **Level 1 -- Watch me do it** | Assign simple issues to the Coding Agent. Watch each step. Review each line. | Code quality, accuracy in understanding the issue, number of adjustments needed | Riding Yoshi for the first time, going slow |
| **Week 2** | **Level 2 -- Done, check it out** | Assign medium issues. Let the agent work. Review the complete PR. | Resolution time, number of review back-and-forths, test coverage | Letting Yoshi run faster, observing the result |
| **Week 3** | **Level 3 -- Done, here's the summary** | Assign multiple issues. Read PR summaries. Faster review. | Accuracy rate, frequency of problems, time saved | Sending Yoshi on missions, reading the reports |
| **Week 4** | **Evaluate** | Analyze metrics from the 3 weeks. Decide if the agent is ready for more autonomy. | Trends, improvement or decline, recurring error types | Evaluating if Yoshi is ready for solo missions |

### Signs You Can Increase Autonomy

- Agent's PRs need few or no adjustments
- Tests the agent writes cover edge cases
- The agent identifies and resolves secondary issues (beyond the issue)
- Review time decreasing each week
- Zero security incidents or out-of-scope actions

### Signs You Should Decrease Autonomy

- PRs with logical errors that tests didn't catch
- Agent misinterpreting issues frequently
- Costs rising without proportional productivity increase
- Agent making changes outside the issue's scope
- Any security incident, no matter how small

---

## What We Learned -- Summary Table

| Topic | Key Concept | Mario Analogy | Practical Application |
|---|---|---|---|
| **Autonomous vs Assisted** | Autonomous = receives goal, executes alone | Yoshi flying solo vs Yoshi you control | Autonomous agents save time on well-defined tasks |
| **Planning Loop** | Decompose → Plan → Select Tools → Execute → Evaluate → Iterate | Yoshi that traces route, dodges obstacles, verifies result | The power is in self-evaluation and iteration |
| **Guardrails** | Limits that enable safe autonomy | Invisible walls that keep Yoshi within the map | Scope, approval, budget, time, security, reversibility |
| **Human-in-the-Loop** | Human decides at critical moments | Yoshi stops at the Boss door and asks | Supervision proportional to risk |
| **Trust Levels** | "Watch me do it" → "Done, check it out" → "Done, here's the summary" → "I've got this" | Trust built over successful missions | Start supervising, increase gradually |
| **Risks** | Hallucination, loops, cost, security | Yoshi jumping on an imaginary platform, running into a wall | Guardrails and human review mitigate all |
| **Building Trust** | 4 weeks of gradual evolution | From beginner Yoshi to elite Yoshi | Observe metrics, adjust autonomy based on results |

---

### POWER-UP UNLOCKED!

Sofia now understands autonomous agents -- not as magic, but as engineering. She knows that autonomy without guardrails is a Yoshi flying off the map. She knows that trust is built, not assumed. And she knows that the secret is giving the agent exactly the right amount of freedom: enough to be useful, limited enough to be safe.

She looked at the autonomous Yoshi that had landed beside her, holding a star in his mouth. "You're incredible," she said. "But I know you're only incredible BECAUSE you have guardrails. Without them, you'd be a danger."

Yoshi blinked, agreeing. Even he knew that freedom without limits isn't freedom -- it's chaos.

Sofia stored this power-up in her inventory and headed to the next level of the Mushroom Kingdom...

*Press START to continue...*

---

## References

- [GitHub Copilot — Concepts and Agents](https://docs.github.com/en/copilot/concepts/agents)
- [Azure AI Services](https://learn.microsoft.com/en-us/azure/ai-services/)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
