---
title: "Level 2-1 -- Parallel Worlds: Environments (Dev, Staging, Production)"
description: "Understand why different copies of your game exist and how Dev, Staging, and Production work as parallel worlds in the Mushroom Kingdom"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - environments
  - dev
  - staging
  - production
  - infrastructure
  - world-2
  - mario
---

# Level 2-1 -- Parallel Worlds: Environments (Dev, Staging, Production)

---

## Change Log

| Version | Date       | Author                                  | Description          |
|---------|------------|----------------------------------------|--------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation    |

---

## Table of Contents

- [Prologue: The Three Copies of the Mushroom Kingdom](#prologue-the-three-copies-of-the-mushroom-kingdom)
- [1. Why Do We Need Different Environments?](#1-why-do-we-need-different-environments)
  - [1.1 The Problem with Testing in the Real World](#11-the-problem-with-testing-in-the-real-world)
  - [1.2 The Solution: Parallel Worlds](#12-the-solution-parallel-worlds)
- [2. The Three Worlds: Dev, Staging, and Production](#2-the-three-worlds-dev-staging-and-production)
  - [2.1 World 1 -- Development (Dev): The Training Ground](#21-world-1----development-dev-the-training-ground)
  - [2.2 World 2 -- Staging: The Dress Rehearsal](#22-world-2----staging-the-dress-rehearsal)
  - [2.3 World 3 -- Production: The Real Castle](#23-world-3----production-the-real-castle)
- [3. Comparison Table: The Three Worlds](#3-comparison-table-the-three-worlds)
- [4. How Code Travels Between Worlds](#4-how-code-travels-between-worlds)
  - [4.1 The Promotion Pipeline](#41-the-promotion-pipeline)
  - [4.2 The Gateway Rules](#42-the-gateway-rules)
  - [4.3 Diagram: The Code Journey](#43-diagram-the-code-journey)
- [5. Environments in Practice: Azure and GitHub](#5-environments-in-practice-azure-and-github)
  - [5.1 Branches as Portals](#51-branches-as-portals)
  - [5.2 Azure App Service Slots](#52-azure-app-service-slots)
  - [5.3 Environment Variables per World](#53-environment-variables-per-world)
- [6. Local Environments vs Cloud Environments](#6-local-environments-vs-cloud-environments)
  - [6.1 Your Computer: The Tutorial World](#61-your-computer-the-tutorial-world)
  - [6.2 Docker: Packing the World in a Box](#62-docker-packing-the-world-in-a-box)
- [7. Classic Mistakes and How to Avoid Them](#7-classic-mistakes-and-how-to-avoid-them)
  - [7.1 The 5 Deadly Sins of Environments](#71-the-5-deadly-sins-of-environments)
  - [7.2 Horror Stories: Deploying Straight to Production](#72-horror-stories-deploying-straight-to-production)
- [8. Feature Flags: Hidden Secrets in the Worlds](#8-feature-flags-hidden-secrets-in-the-worlds)
- [9. Ephemeral Environments: Temporary Worlds](#9-ephemeral-environments-temporary-worlds)
- [10. Final Summary Table](#10-final-summary-table)
- [References](#references)

---

## Prologue: The Three Copies of the Mushroom Kingdom

Sofia was excited. She had created her first application -- a simple but functional TodoApp -- and wanted to show it to the whole world. Without thinking twice, she deployed it straight to real users.

The result? Total disaster.

The application had a bug that deleted all tasks when the user clicked "Save." Hundreds of people lost their data. Sofia was devastated.

Yoshi -- the DevOps Engineer on the team -- appeared flying and landed beside her.

*"Sofia,"* said Yoshi calmly, *"you made the most classic mistake of all: you tested in the real world. Imagine if in Mario you could practice the levels before playing for real. No losing lives. No Game Over. No consequences. Well -- we have that in software development. We call them **environments**."*

Yoshi opened a map with three versions of the Mushroom Kingdom, side by side. They looked identical, but each one had a different purpose.

*"Welcome to Level 2-1. Here you'll learn that you never -- NEVER -- test in the real world."*

---

## 1. Why Do We Need Different Environments?

### 1.1 The Problem with Testing in the Real World

Imagine that Nintendo wanted to test a new mechanic in Super Mario Bros. Instead of testing internally, they sent the update directly to all players worldwide. The new mechanic had a bug: Mario fell infinitely into the first pit and never came back. Millions of players stuck. Nobody can play. Total chaos.

This is **exactly** what happens when you make changes directly in production.

**Problems with changing the real world directly:**

- Real users are affected immediately
- You can't easily "undo" -- the damage is already done
- Bugs can cause data loss, financial loss, or loss of trust
- You don't have time to investigate calmly -- everyone is screaming
- The stress is enormous and leads to more mistakes

### 1.2 The Solution: Parallel Worlds

The solution the software industry adopted decades ago is simple and brilliant: **create copies of the world**.

Instead of having just one Mushroom Kingdom (the real one, where players are), you create **three versions**:

1. **A copy where you can play freely** (Dev)
2. **A copy nearly identical to the real one for serious testing** (Staging)
3. **The real world, where real players are** (Production)

> **MARIO ANALOGY:** Think of parallel worlds like those secret levels in Super Mario World. World 1 (Dev) is like **Star Road** -- a safe place where you can test crazy things without consequences. World 2 (Staging) is like the **Special World** -- looks like the real world but with fewer people, perfect for a dress rehearsal. World 3 (Production) is the **real Mushroom Kingdom** -- with real players, Toads counting on you, and the Princess waiting in the castle. If you mess up here, everyone feels it.

---

## 2. The Three Worlds: Dev, Staging, and Production

### 2.1 World 1 -- Development (Dev): The Training Ground

The **Development** (Dev) environment is your personal playground. Here you can:

- Write new code without fear
- Break things and fix them calmly
- Test wild ideas
- Use fake data (not real user data)
- Deploy as many times as you want

**Dev environment characteristics:**

```
Environment: Development
Typical URL: dev.myapp.com or localhost:3000
Database: Copy with fake/simulated data
Users: Only developers on the team
Consequence of bug: None -- only you are affected
Deploy frequency: Multiple times per day
```

> **MARIO ANALOGY:** Dev is like **World 1-1 in training mode**. You have infinite lives, can die as many times as you want, and nobody is judging you. It's the place to learn to jump, try new power-ups, and understand the mechanics without pressure.

**What runs in the Dev environment?**

- Your local code (on your computer)
- A local database (usually with made-up data)
- Simulated services (mocks) instead of real services
- Debug tools enabled
- Detailed logs to help investigate problems

**Practical example:**

```bash
# Running the application in Dev (your computer)
npm run dev

# The application runs on localhost:3000
# Local database with test data
# If you break something, only you see it
```

### 2.2 World 2 -- Staging: The Dress Rehearsal

The **Staging** environment is a (nearly) identical copy of the real world, but without real users. It's like a dress rehearsal for a theater play: real set, real costumes, real lighting -- but the audience seats are empty.

**Staging environment characteristics:**

```
Environment: Staging
Typical URL: staging.myapp.com
Database: Copy of production structure, anonymized data
Users: QA team, product managers, stakeholders
Consequence of bug: Found before reaching real users
Deploy frequency: Multiple times per week
```

> **MARIO ANALOGY:** Staging is like the **dress rehearsal before the Boss Battle**. The castle is identical to the final castle -- same enemies, same traps, same lava. But if you die, you don't lose the game. It's the chance to practice fighting Bowser under real conditions before facing him for real.

**Why is Staging important?**

1. **Tests integration**: In Dev, each developer tests their piece. In Staging, everything works together.
2. **Tests with realistic data**: Data that resembles real data (but anonymized).
3. **Tests performance**: In Dev you run everything on your computer. In Staging, it runs in the cloud like production.
4. **Business validation**: The product manager can see and approve before launch.
5. **Acceptance tests**: The QA team (Princess Peach!) runs the final tests.

**Practical example:**

```bash
# Automatic deploy to Staging via GitHub Actions
# When the PR is approved and merged into the 'staging' branch:
git checkout staging
git merge feature/nova-funcionalidade
git push origin staging
# GitHub Actions automatically deploys to staging.myapp.com
```

### 2.3 World 3 -- Production: The Real Castle

The **Production** environment is the **real world**. It's where your users are. Where real money changes hands. Where real data is stored. Where reputation is built or destroyed.

**Production environment characteristics:**

```
Environment: Production
Typical URL: myapp.com (no prefix)
Database: Real user data
Users: All end users -- real people
Consequence of bug: Loss of revenue, data, trust, reputation
Deploy frequency: Controlled (weekly, biweekly, or continuous)
```

> **MARIO ANALOGY:** Production is the **real Mushroom Kingdom with real players**. The Princess is in the castle, the Toads are in the villages, and the players are running through the levels. If you introduce a bug here, the Goombas start flying, the pipes lead to the wrong places, and players get furious. EVERYTHING you do here has real consequences.

**Sacred rules of Production:**

1. **NEVER make changes directly in production** -- always go through Dev and Staging first
2. **NEVER use production data in Dev or Staging** without anonymizing
3. **ALWAYS have a rollback plan** -- how to revert if something goes wrong
4. **ALWAYS monitor after deploy** -- watch metrics, logs, alerts
5. **ALWAYS have backups** -- if the castle catches fire, you can rebuild

---

---

## 3. Comparison Table: The Three Worlds

| Aspect | Dev (Training) | Staging (Rehearsal) | Production (Real) |
|---------|-------------|-------------------|-----------------|
| **Mario Analogy** | Star Road -- free practice | Special World -- dress rehearsal | Real Mushroom Kingdom |
| **Who uses** | Developers | QA, PMs, stakeholders | End users |
| **Data** | Fake/simulated | Anonymized/realistic | Real |
| **Consequence of bug** | None | Caught in time | Disaster |
| **URL** | localhost or dev.app.com | staging.app.com | app.com |
| **Deploy** | Multiple times/day | Multiple times/week | Controlled |
| **Debug** | Enabled | Partially enabled | Disabled |
| **Logs** | Super detailed | Detailed | Essential |
| **Performance** | Doesn't matter much | Tested | Critical |
| **Cost** | Low (local) | Medium (smaller cloud) | High (full cloud) |
| **Access** | Open to devs | Restricted to team | Super restricted |

---

## 4. How Code Travels Between Worlds

### 4.1 The Promotion Pipeline

Code is born in Dev and "moves up" until it reaches Production. This process is called **promotion**. Code never skips steps -- just like in Mario, you can't go straight from World 1-1 to the final castle.

```
Dev  ──────>  Staging  ──────>  Production
 |               |                  |
 | Unit          | Integration      | Continuous
 | Tests         | Tests            | Monitoring
 | Code Review   | QA Tests         | Alerts
 |               | Performance      | Rollback ready
```

### 4.2 The Gateway Rules

For code to "clear the level" (be promoted), it needs to meet criteria:

**From Dev to Staging:**
- All unit tests pass
- Code Review approved by at least 1 person
- No lint or typing errors
- Branch merged into the staging branch

**From Staging to Production:**
- All integration tests pass
- Acceptance tests (QA) approved
- Performance tested and within limits
- Product manager approval
- Branch merged into the main/production branch

> **MARIO ANALOGY:** Think of the **checkpoint flags** in Mario. To move from one World to the next, you need to defeat the boss of the current World. Similarly, for your code to go from Dev to Staging, it needs to "defeat" the unit tests. To go from Staging to Production, it needs to defeat the integration tests and QA approval.

### 4.3 Diagram: The Code Journey

```
+-------------------+     +-------------------+     +-------------------+
|   DEV (World 1)   |     | STAGING (World 2) |     | PRODUCTION(World3)|
|                   |     |                   |     |                   |
|  Developer        |     |  QA Tests         |     |  Real users       |
|  writes code      |     |  Load tests       |     |  Real data        |
|  Local tests      |     |  PM validation    |     |  Monitoring       |
|  Code Review      |     |  Performance      |     |  Alerts           |
|                   |     |                   |     |                   |
+--------+----------+     +--------+----------+     +-------------------+
         |                         |                         ^
         | PR approved             | Tests OK                |
         | Tests pass              | QA approves             |
         +------------------------>+------------------------>+
                                                    Controlled deploy
```

---

## 5. Environments in Practice: Azure and GitHub

### 5.1 Branches as Portals

In Git, each environment usually corresponds to a specific **branch**:

```
main (or production)  ──>  Production
staging               ──>  Staging
develop               ──>  Dev (integration)
feature/*             ──>  Dev (local)
```

> **MARIO ANALOGY:** Branches are like **Warp Pipes** (green pipes) that lead to different worlds. The `main` pipe leads to the real Mushroom Kingdom (Production). The `staging` pipe leads to the Special World (Staging). The `develop` pipe leads to Star Road (Dev). Each pipe has a different destination.

**Example with GitHub:**

```bash
# Create a new feature (you're in Dev)
git checkout -b feature/adicionar-filtro

# Develop, test locally, commit
git add .
git commit -m "feat: adicionar filtro de tarefas por data"

# Push to GitHub and create Pull Request
git push origin feature/adicionar-filtro
# PR: feature/adicionar-filtro -> develop

# After approval, merge develop -> staging
# After tests in staging, merge staging -> main
# Deploy to production!
```

### 5.2 Azure App Service Slots

Azure has a feature called **Deployment Slots** that is perfect for managing environments:

```
Azure App Service: myapp
├── Slot: production (myapp.azurewebsites.net)
├── Slot: staging (myapp-staging.azurewebsites.net)
└── Slot: dev (myapp-dev.azurewebsites.net)
```

The magic of slots is the **swap**: when everything is OK in staging, you can "swap" staging and production instantly. If something goes wrong, swap back.

> **MARIO ANALOGY:** Deployment Slots are like **magic doors** in the castle. You prepare everything in the staging room, and when it's ready, the magic door SWAPS the rooms -- what was staging becomes production, and what was production becomes staging (backup). If something goes wrong, swap again.

```bash
# Swap staging to production in Azure CLI
az webapp deployment slot swap \
  --resource-group meu-grupo \
  --name meuapp \
  --slot staging \
  --target-slot production
```

### 5.3 Environment Variables per World

Each environment has its own **environment variables** -- configurations that change from one world to another:

```bash
# Dev Environment
DATABASE_URL=postgresql://localhost:5432/todoapp_dev
API_KEY=dev-fake-key-12345
LOG_LEVEL=debug
FEATURE_FLAG_NOVO_FILTRO=true

# Staging Environment
DATABASE_URL=postgresql://staging-db.azure.com:5432/todoapp_staging
API_KEY=staging-key-abc-456
LOG_LEVEL=info
FEATURE_FLAG_NOVO_FILTRO=true

# Production Environment
DATABASE_URL=postgresql://prod-db.azure.com:5432/todoapp
API_KEY=prod-real-key-xyz-789
LOG_LEVEL=warn
FEATURE_FLAG_NOVO_FILTRO=false  # Not yet enabled for real users!
```

> **MARIO ANALOGY:** Environment variables are like the **rules that change between worlds**. In World 1 (Dev), Mario has infinite lives and enemies are weak. In World 2 (Staging), enemies are stronger but there are still extra checkpoints. In World 3 (Production), it's the real game -- no extra lives, no easy mode.

---

## 6. Local Environments vs Cloud Environments

### 6.1 Your Computer: The Tutorial World

Even before reaching the Dev environment in the cloud, there's an even more basic level: your **local environment**.

```
Level 0: Your computer (localhost)  ──  The game tutorial
Level 1: Dev in the cloud           ──  World 1
Level 2: Staging in the cloud       ──  World 2
Level 3: Production in the cloud    ──  World 3
```

On your computer you:
- Edit code in VS Code
- Run the application with `npm run dev`
- Access it at `http://localhost:3000`
- Use a local database (or Docker container)
- Have total control over everything

### 6.2 Docker: Packing the World in a Box

Docker lets you run a "miniature" of the production environment on your computer. It's like having a portable Mushroom Kingdom inside a box.

```yaml
# docker-compose.yml -- Your portable Mushroom Kingdom
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:senha@db:5432/todoapp
      - NODE_ENV=development

  db:
    image: postgres:16
    environment:
      - POSTGRES_DB=todoapp
      - POSTGRES_PASSWORD=senha
    ports:
      - "5432:5432"
```

```bash
# Spin up the entire world with one command
docker-compose up

# Now you have app + database running locally
# Identical (or very close) to what runs in production
```

---

## 7. Classic Mistakes and How to Avoid Them

### 7.1 The 5 Deadly Sins of Environments

| Sin | What Happens | Mario Analogy | How to Avoid |
|-----|-------------|----------------|-------------|
| **Deploy straight to Production** | Users affected by bugs | Playing the Boss Battle without training | Always go through Dev and Staging |
| **Using real data in Dev** | Sensitive data leaks | Using real coins in training | Anonymize data or use fake data |
| **Wrong configurations** | Production app pointing to Dev DB | Green pipe leading to the wrong world | Use separate environment variables |
| **Skipping Staging** | Bugs only discovered in Production | Facing Bowser without rehearsing | Never skip the dress rehearsal |
| **No rollback plan** | No way to go back | No checkpoint before the boss | Always have swap/rollback ready |

### 7.2 Horror Stories: Deploying Straight to Production

**Story 1: The bank that deleted data**
A developer ran a database cleanup script. He THOUGHT he was in Dev, but he was in Production. Thousands of financial records were deleted. It took 48 hours to restore from backup.

**Story 2: The unfinished feature**
A developer committed half-finished code straight to the main branch. The automatic deploy sent it to production. Half the users saw a button that did nothing. The other half saw errors on screen.

**Story 3: The password in the code**
A dev put the production database password directly in the code (hardcoded) and pushed it to the public repository. Automated bots found the password within minutes and broke into the database.

> **MARIO LESSON:** All these stories could have been avoided with separate environments, environment variables, and a proper promotion pipeline. It's like dying in Mario because you didn't use the checkpoint -- painful and entirely avoidable.

---

## 8. Feature Flags: Hidden Secrets in the Worlds

**Feature Flags** are switches that let you enable or disable features without doing a new deploy. They're like secret blocks in Mario that only appear when you know where to hit.

```javascript
// Checking a Feature Flag
if (featureFlags.isEnabled('novo-filtro-por-data')) {
  // Show the new filter (new feature)
  renderNovoFiltro();
} else {
  // Show the old filter (existing feature)
  renderFiltroAntigo();
}
```

**How Feature Flags work with environments:**

```
Dev:       novo-filtro-por-data = TRUE   (devs testing)
Staging:   novo-filtro-por-data = TRUE   (QA testing)
Production:  novo-filtro-por-data = FALSE  (not yet for users)

# When everything is OK:
Production:  novo-filtro-por-data = TRUE   (enabled for everyone!)
```

> **MARIO ANALOGY:** Feature Flags are like the **invisible blocks** in Mario. The block is there, but it only appears when you jump in the right spot. Similarly, the feature is in the code, but it only appears for those who have the flag enabled. You can enable it for 1% of users, then 10%, then 50%, then 100% -- like gradually revealing secret blocks.

---

## 9. Ephemeral Environments: Temporary Worlds

A modern practice is creating **ephemeral** (temporary) environments for each Pull Request. When you open a PR, an automatic environment is created. When the PR is closed, the environment is destroyed.

```
PR #123: feature/novo-filtro
  └── Automatic environment: pr-123.myapp.com
      (created automatically, destroyed when PR is closed)

PR #124: feature/dark-mode
  └── Automatic environment: pr-124.myapp.com
      (another isolated, independent environment)
```

> **MARIO ANALOGY:** Ephemeral environments are like the **bonus levels** that appear and disappear. You enter, test, collect what you need, and the level vanishes. Each PR has its own exclusive bonus level -- without interfering with other players' levels.

**Tools that create ephemeral environments:**
- **Vercel** -- Automatic Preview Deployments for each PR
- **Netlify** -- Deploy Preview for frontend
- **Azure Static Web Apps** -- Staging environments per PR
- **GitHub Codespaces** -- Complete development environment in the cloud

---

## 10. Final Summary Table

| Concept | Technical Explanation | Mario Analogy |
|----------|-------------------|----------------|
| **Dev Environment** | Where developers write and test code | World 1 -- training ground with infinite lives |
| **Staging Environment** | Production copy for final rehearsal | World 2 -- dress rehearsal before the Boss Battle |
| **Production Environment** | The real world with real users | World 3 -- the real Mushroom Kingdom |
| **Promotion Pipeline** | Code moves from Dev to Staging to Production | Checkpoint flags between worlds |
| **Deployment Slots** | Azure slots for each environment | Magic doors that swap rooms |
| **Environment Variables** | Environment-specific configurations | Rules that change between worlds |
| **Feature Flags** | Switches for features | Invisible blocks that appear when enabled |
| **Ephemeral Environments** | Temporary environments per PR | Bonus levels that appear and disappear |
| **Rollback** | Revert to previous version | Return to checkpoint after dying |
| **Swap** | Swap staging and production instantly | Magic door that swaps two rooms |

---

## References

1. Microsoft Azure -- Deployment Slots: https://learn.microsoft.com/azure/app-service/deploy-staging-slots
2. GitHub Docs -- Environments: https://docs.github.com/actions/deployment/targeting-different-environments
3. Martin Fowler -- Feature Toggles: https://martinfowler.com/articles/feature-toggles.html
4. The Twelve-Factor App -- Config: https://12factor.net/config
5. Vercel -- Preview Deployments: https://vercel.com/docs/deployments/preview-deployments

---

*"In Mario, you NEVER face Bowser without training first. In software, you NEVER launch to users without testing in Dev and Staging. The rule is the same: practice, rehearse, and only then go to the real world."*

*Next Warp Pipe: Level 2-2 -- The Messenger Between Kingdoms: APIs*

---

<div align="center">

⬅️ [Previous: Level 1-BOSS: Exercises](../world-1-green-plains/1-boss-exercises.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 2-2: APIs](2-2-apis.md)

</div>
