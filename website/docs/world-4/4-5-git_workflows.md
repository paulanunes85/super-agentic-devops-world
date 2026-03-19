---
title: "Level 4-5 -- Workflows: Git Workflows"
description: "Git Flow, GitHub Flow, trunk-based development and GitLab Flow — how to organize the team's work in the Mushroom Kingdom"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
tags:
  - agentic-devops
  - mario
  - world-4
  - git
  - git-flow
  - github-flow
  - trunk-based
  - branching
sidebar_position: 5
format: md
---

# Level 4-5 -- Workflows: Git Workflows

---

## Change Log

| Version | Date       | Author                                  | Description          |
|---------|------------|----------------------------------------|----------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation     |

---

## Table of Contents

- [Prologue: The Branch Chaos](#prologue-the-branch-chaos)
- [1. What Is a Git Workflow?](#1-what-is-a-git-workflow)
  - [1.1 Why We Need Rules](#11-why-we-need-rules)
  - [1.2 Fundamental Concepts](#12-fundamental-concepts)
- [2. Git Flow: The Formal Tournament](#2-git-flow-the-formal-tournament)
  - [2.1 The 5 Branches of Git Flow](#21-the-5-branches-of-git-flow)
  - [2.2 Complete Diagram](#22-complete-diagram)
  - [2.3 Feature Flow](#23-feature-flow)
  - [2.4 Release Flow](#24-release-flow)
  - [2.5 Hotfix Flow](#25-hotfix-flow)
  - [2.6 When to Use Git Flow](#26-when-to-use-git-flow)
- [3. GitHub Flow: The Casual Match](#3-github-flow-the-casual-match)
  - [3.1 Simple Rules](#31-simple-rules)
  - [3.2 The Complete Flow](#32-the-complete-flow)
  - [3.3 Pull Requests: The Heart of GitHub Flow](#33-pull-requests-the-heart-of-github-flow)
  - [3.4 When to Use GitHub Flow](#34-when-to-use-github-flow)
- [4. Trunk-Based Development: Everyone on the Same Field](#4-trunk-based-development-everyone-on-the-same-field)
  - [4.1 The Philosophy](#41-the-philosophy)
  - [4.2 How It Works](#42-how-it-works)
  - [4.3 Feature Flags in Trunk-Based](#43-feature-flags-in-trunk-based)
  - [4.4 When to Use Trunk-Based](#44-when-to-use-trunk-based)
- [5. GitLab Flow: The Middle Ground](#5-gitlab-flow-the-middle-ground)
  - [5.1 Environment Branches](#51-environment-branches)
  - [5.2 Release Branches](#52-release-branches)
  - [5.3 When to Use GitLab Flow](#53-when-to-use-gitlab-flow)
- [6. Branching: Parallel Universes](#6-branching-parallel-universes)
  - [6.1 Branch Naming Conventions](#61-branch-naming-conventions)
  - [6.2 Branch Protection Rules](#62-branch-protection-rules)
  - [6.3 Branching Best Practices](#63-branching-best-practices)
- [7. Merge: When Universes Collide](#7-merge-when-universes-collide)
  - [7.1 Merge Strategies](#71-merge-strategies)
  - [7.2 Merge Conflicts: The Collision](#72-merge-conflicts-the-collision)
  - [7.3 Resolving Conflicts](#73-resolving-conflicts)
- [8. Code Review in the Workflow](#8-code-review-in-the-workflow)
  - [8.1 The Review Process](#81-the-review-process)
  - [8.2 Review Checklist](#82-review-checklist)
  - [8.3 Automated Checks](#83-automated-checks)
- [9. Workflow Comparison](#9-workflow-comparison)
  - [9.1 Comparison Table](#91-comparison-table)
  - [9.2 Decision Tree](#92-decision-tree)
- [10. Final Summary Table](#10-final-summary-table)
- [References](#references)

---

## Prologue: The Branch Chaos

<div align="center">
<img src="/img/diagrams/git-branching.svg" alt="Git Flow vs GitHub Flow" width="780" />
<br/><em>Git Flow vs GitHub Flow</em>
</div>

Sofia's team had grown. Now there were 5 developers working on TodoApp at the same time. And chaos took over.

Mario was working on the notifications feature. Luigi, on the teams feature. Toad, on a critical bug. Peach, on a performance improvement. All on the `main` branch. All pushing at the same time. Conflicts every hour. Broken code at every merge.

Yoshi gathered the team.

*"Folks, imagine that we're all playing in the SAME Mushroom Kingdom at the same time, on the SAME level. Mario jumps into a pit that Luigi just filled in. Toad collects a coin that Peach just moved. Total chaos."*

*"The solution? **Parallel universes.** Each player enters their own universe (branch), does what they need, and when they're done, the universes merge back together. But we need RULES for this fusion to work without destroying the world."*

*"These rules are the **Git Workflows**."*

---

## 1. What Is a Git Workflow?

### 1.1 Why We Need Rules

A **Git Workflow** is a set of conventions that defines how a team uses branches, commits, merges, and releases in Git.

> **Mario Analogy**: A Git Workflow is the **rulebook of a tournament** in Mario. It defines: how players register (create branches), how matches work (commits), how results are evaluated (code review), and how winners are announced (merge to main).

**Without a defined workflow:**

- Nobody knows where to put new features
- Branches live for weeks (and conflict)
- There's no way to know what's in production
- Hotfixes are a nightmare
- Code review doesn't happen consistently

### 1.2 Fundamental Concepts

| Concept | Description | Mario Analogy |
|---------|-------------|---------------|
| **Branch** | Independent copy of the code | Parallel universe |
| **Commit** | Snapshot of the code at a point in time | Save point / checkpoint |
| **Merge** | Joining two branches | Fusing parallel universes |
| **Pull Request** | Request to merge with review | Submitting results for a judge to evaluate |
| **Tag** | Named milestone (v1.0, v2.0) | Trophy for completing a level |
| **Rebase** | Rewrite commit history | Reorganize checkpoints |
| **Cherry-pick** | Take a specific commit from another branch | Grab a specific power-up from another universe |

---

## 2. Git Flow: The Formal Tournament

### 2.1 The 5 Branches of Git Flow

**Git Flow** (created by Vincent Driessen in 2010) uses 5 types of branches with well-defined roles:

| Branch | Duration | Purpose | Mario Analogy |
|--------|----------|---------|---------------|
| **main** | Permanent | Code in production | The REAL Mushroom Kingdom — always stable |
| **develop** | Permanent | Code in development | Official training ground |
| **feature/*** | Temporary | New functionality | Parallel training universe |
| **release/*** | Temporary | Preparation for launch | Dress rehearsal before the tournament |
| **hotfix/*** | Temporary | Urgent fix in production | Emergency team |

> **Mario Analogy**: Git Flow is like an **official Mario tournament** with formal rules:
> - `main` = the official field where games are broadcast (production)
> - `develop` = the training ground where everyone practices (development)
> - `feature/*` = individual training rooms (each player practices a technique)
> - `release/*` = dress rehearsal before the tournament (final tests)
> - `hotfix/*` = medical team that enters the official field in an emergency

### 2.2 Complete Diagram

```
main:     ●────────────────●────────────────●────────●
          │   v1.0         │   v1.1         │hotfix  │ v1.2
          │                │                │        │
release:  │         ●──────●                │        │
          │         │  final tests          │        │
          │         │                       │        │
develop:  ●─────●───●───●──────●───●───●────●────●───●
          │     │       │      │   │   │         │
feature:  │     ●───●───●      │   │   │         │
          │     feat-A         │   │   │         │
          │                    ●───●───●         │
          │                    feat-B            │
          │                                      │
hotfix:   │                              ●───●───●
          │                              urgent fix
```

### 2.3 Feature Flow

```bash
# 1. Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/notificacoes

# 2. Develop (several commits)
git add .
git commit -m "feat: adiciona servico de notificacoes"
git commit -m "feat: adiciona template de email"
git commit -m "test: adiciona testes de notificacao"

# 3. Keep updated with develop
git fetch origin
git rebase origin/develop
# Or: git merge origin/develop

# 4. Open Pull Request: feature/notificacoes → develop
# Code review, CI/CD, approval

# 5. Merge to develop
git checkout develop
git merge --no-ff feature/notificacoes
git push origin develop

# 6. Delete feature branch
git branch -d feature/notificacoes
git push origin --delete feature/notificacoes
```

### 2.4 Release Flow

```bash
# 1. Create release branch from develop
git checkout develop
git checkout -b release/1.1.0

# 2. Bug fixes and preparation only
git commit -m "fix: corrige bug de formatacao na notificacao"
git commit -m "chore: atualiza versao para 1.1.0"
git commit -m "docs: atualiza changelog"

# 3. Final tests in the staging environment

# 4. Merge to main (production!)
git checkout main
git merge --no-ff release/1.1.0
git tag -a v1.1.0 -m "Release 1.1.0 - Notificacoes"
git push origin main --tags

# 5. Merge back to develop (brings the fixes)
git checkout develop
git merge --no-ff release/1.1.0
git push origin develop

# 6. Delete release branch
git branch -d release/1.1.0
```

### 2.5 Hotfix Flow

```bash
# Critical bug in production! Emergency!

# 1. Create hotfix branch from main
git checkout main
git checkout -b hotfix/1.1.1

# 2. Fix the bug
git commit -m "fix: corrige crash ao enviar notificacao para usuario sem email"

# 3. Merge to main (fix production)
git checkout main
git merge --no-ff hotfix/1.1.1
git tag -a v1.1.1 -m "Hotfix 1.1.1 - Corrige crash de notificacao"
git push origin main --tags

# 4. Merge to develop (don't lose the fix)
git checkout develop
git merge --no-ff hotfix/1.1.1
git push origin develop

# 5. Delete hotfix branch
git branch -d hotfix/1.1.1
```

### 2.6 When to Use Git Flow

**Use Git Flow when:**

- Releases are planned and periodic (every 2-4 weeks)
- You need to maintain multiple versions in production
- Large team with a formal process
- Software with a defined release cycle
- Mobile apps (versions in app stores)

**DO NOT use Git Flow when:**

- Continuous deployment (several times a day)
- Small and agile team
- Web apps with fast CI/CD
- Startups in the experimentation phase

---

## 3. GitHub Flow: The Casual Match

### 3.1 Simple Rules

**GitHub Flow** is drastically simpler than Git Flow. It has only 6 rules:

1. `main` is **ALWAYS** ready for deploy
2. To work on something new, create a branch from `main`
3. Make commits regularly and push to the remote branch
4. Open a **Pull Request** when you're ready (or to ask for feedback)
5. After approval and green CI, merge to `main`
6. Deploy immediately after the merge

> **Mario Analogy**: GitHub Flow is a **casual Mario match**. Simple rules: play, have fun, show the result. No formal brackets, no eliminations, no dress rehearsal. Straight to the point.

```
main:    ●────────────●────────────●────────●
         │            │            │        │
branch:  └──●──●──●───┘            │        │
             feat-A    PR/merge    │        │
                                   │        │
branch:            └──●──●──●──●───┘        │
                      feat-B    PR/merge    │
                                            │
branch:                    └──●──●──●───────┘
                              bugfix    PR/merge
```

### 3.2 The Complete Flow

```bash
# 1. Create branch from main (descriptive name)
git checkout main
git pull origin main
git checkout -b add-dark-mode

# 2. Develop and commit
git add .
git commit -m "feat: adiciona toggle de dark mode"
git commit -m "feat: implementa tema escuro com CSS variables"
git commit -m "test: adiciona testes de dark mode"

# 3. Push to remote (early and often)
git push origin add-dark-mode

# 4. Open Pull Request on GitHub
gh pr create \
  --title "feat: adiciona dark mode" \
  --body "## O que muda
  - Toggle de dark mode no header
  - Tema escuro usando CSS custom properties
  - Preferencia salva no localStorage

  ## Como testar
  1. Clicar no icone de lua no header
  2. Verificar que o tema muda
  3. Recarregar a pagina e verificar que a preferencia persiste"

# 5. CI runs automatically, reviewers approve

# 6. Merge (via GitHub UI or CLI)
gh pr merge --squash

# 7. Automatic deploy via CI/CD (after merge to main)
```

### 3.3 Pull Requests: The Heart of GitHub Flow

The **Pull Request (PR)** is where everything happens in GitHub Flow:

```
┌────────────────────────────────────────────────┐
│ Pull Request #42: feat: adiciona dark mode      │
├────────────────────────────────────────────────┤
│                                                 │
│ Status Checks:                                  │
│   ✅ CI: Build         (2m 34s)                │
│   ✅ CI: Tests         (4m 12s)                │
│   ✅ CI: Lint          (0m 45s)                │
│   ✅ CI: Type Check    (1m 23s)                │
│   ✅ Security Scan     (3m 01s)                │
│                                                 │
│ Reviews:                                        │
│   ✅ Toadette: "LGTM! Great use of CSS vars"  │
│   ✅ Luigi: "Approved. Tested on mobile."      │
│                                                 │
│ [Squash and Merge]  [Close]                    │
└────────────────────────────────────────────────┘
```

### 3.4 When to Use GitHub Flow

**Use GitHub Flow when:**

- Continuous deployment (several times a day)
- Small to medium team (1-15 devs)
- Web apps with fast CI/CD
- No need to maintain multiple versions
- You want maximum simplicity

---

## 4. Trunk-Based Development: Everyone on the Same Field

### 4.1 The Philosophy

**Trunk-Based Development (TBD)** takes simplicity to the extreme: **everyone works directly on the trunk (main)**, with very short-lived branches (hours, not days).

> **Mario Analogy**: Trunk-Based is like all players on the **same field**, at the same time, playing together. There are no long parallel universes. If someone needs to practice a new technique, they step out briefly, practice for a few minutes, and return to the main field.

```
main:  ●──●──●──●──●──●──●──●──●──●──●──●──●──●──●
       │  │     │        │  │        │        │
       │  └──●──┘        │  └──●─────┘        │
       │  branch (2h)    │  branch (4h)       │
       └──●──┘                                │
       direct commit                          └──●──┘
       (pair programming)                     branch (1h)
```

### 4.2 How It Works

**Trunk-Based Rules:**

1. **Main branch (main/trunk)** is always deployable
2. Feature branches last **at most 1-2 days** (ideal: hours)
3. Frequent, small commits to main
4. **Feature flags** to hide unfinished features
5. Extremely fast CI (build + test in minutes)
6. Pair programming for direct commits to main

```bash
# Trunk-Based: short-lived branch
git checkout main
git pull
git checkout -b small-fix

# Make the change (SMALL)
git add .
git commit -m "fix: corrige padding do botao de completar"
git push origin small-fix

# PR, quick review, merge
# Total: 2 hours from start to merge

# OR: direct commit (pair programming with strong CI)
git checkout main
git add .
git commit -m "refactor: extrai funcao de validacao de email"
git push origin main
```

### 4.3 Feature Flags in Trunk-Based

How do you deploy unfinished code without showing it to the user? **Feature flags!**

```javascript
// Code can be on main BEFORE it's ready
app.get('/api/search', verifyToken, async (req, res) => {
  if (featureFlags.isEnabled('advanced-search', req.user)) {
    // Advanced search (still in development)
    return advancedSearch(req, res);
  }

  // Simple search (current version)
  return simpleSearch(req, res);
});

// The advancedSearch function can be 50% implemented
// But nobody sees it — the flag is off for everyone
```

### 4.4 When to Use Trunk-Based

**Use Trunk-Based when:**

- The team knows how to make small, frequent commits
- CI/CD is extremely fast and reliable
- Feature flags are in use
- The team practices pair programming
- Google, Facebook, Netflix, Microsoft use TBD at scale

**DO NOT use Trunk-Based when:**

- CI is slow or unreliable
- The team lacks discipline for small commits
- Feature flags are not implemented
- The team is just getting started with Git

---

## 5. GitLab Flow: The Middle Ground

### 5.1 Environment Branches

**GitLab Flow** with environment branches connects branches to environments:

```
feature/X ──PR──→ main ──auto──→ staging ──manual──→ production
                    │               │                    │
                    │         integration              deploy
                    │         tests                    approved
                    │
               code approved
               by code review
```

```bash
# GitLab Flow with environment branches
# 1. Feature branch → main (code review)
git checkout -b feature/reports
# ... develop ...
# PR to main, review, merge

# 2. main → staging (automatic)
# CI/CD deploys automatically to staging

# 3. staging → production (manual/approval)
# After testing in staging, promote to production
git checkout production
git merge main
git push origin production
```

### 5.2 Release Branches

For projects that need to maintain versions:

```
main:         ●──●──●──●──●──●──●──●──●
              │        │              │
release/1.0:  └──●──●──●              │
                 │  │  │              │
                 │  v1.0.1            │
                 v1.0.0   v1.0.2     │
                                      │
release/2.0:                          └──●──●
                                         │
                                         v2.0.0
```

### 5.3 When to Use GitLab Flow

**Use GitLab Flow when:**

- You need well-defined environments (staging, production)
- You want something between the simplicity of GitHub Flow and the formality of Git Flow
- Deploy is not automatic — requires approval
- You need to maintain some versions in parallel

---

## 6. Branching: Parallel Universes

### 6.1 Branch Naming Conventions

Good naming conventions make it easy to understand the purpose of each branch:

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feature/` | New functionality | `feature/dark-mode` |
| `fix/` or `bugfix/` | Bug fix | `fix/login-crash` |
| `hotfix/` | Urgent fix in production | `hotfix/security-patch` |
| `chore/` | Maintenance tasks | `chore/update-dependencies` |
| `refactor/` | Code refactoring | `refactor/extract-auth-service` |
| `docs/` | Documentation | `docs/api-reference` |
| `test/` | Add/fix tests | `test/notification-service` |

```bash
# With issue ID
feature/42-dark-mode
fix/108-login-crash
chore/55-update-node-version
```

### 6.2 Branch Protection Rules

Configure protections on the `main` branch in GitHub:

```
Branch Protection Rules for "main":
  ✅ Require pull request before merging
     - Required approving reviews: 2
     - Dismiss stale pull request approvals
  ✅ Require status checks to pass
     - CI: Build
     - CI: Tests
     - CI: Lint
     - CI: Security Scan
  ✅ Require conversation resolution before merging
  ✅ Require signed commits
  ✅ Do not allow bypassing the above settings
  ❌ Allow force pushes (NEVER on main!)
  ❌ Allow deletions (NEVER on main!)
```

### 6.3 Branching Best Practices

1. **Short-lived branches**: Merge within 1-3 days (1 week maximum)
2. **Update frequently**: Rebase/merge from main into your branch
3. **One purpose per branch**: Don't mix feature + bugfix + refactor
4. **Delete after merge**: Dead branches pollute the repository
5. **Name well**: The name should describe what is being done

---

## 7. Merge: When Universes Collide

### 7.1 Merge Strategies

| Strategy | How It Works | When to Use |
|----------|-------------|-------------|
| **Merge Commit** | Creates a merge commit (preserves history) | Want to keep complete history |
| **Squash and Merge** | Combines all commits into one | Feature with many small commits |
| **Rebase and Merge** | Reapplies commits on top of main | Clean, linear history |

```
Merge Commit:           Squash and Merge:       Rebase and Merge:
  ●──●──●──M            ●──S                    ●──●──●
  │     │  │            │  │                    │     │
  ●──●──●──┘            │  └ (1 commit)         │     │
  (preserves all)       (clean)                 (linear)
```

> **Mario Analogy**:
> - **Merge commit** = record ALL training sessions before the official game
> - **Squash** = summarize all training sessions into a single card: "trained attack"
> - **Rebase** = reorganize the training sessions as if they happened in perfect sequence

### 7.2 Merge Conflicts: The Collision

**Merge conflicts** happen when two branches modify the **same part** of the same file.

> **Mario Analogy**: Two players in parallel universes modified the SAME room in the castle. Mario painted it red, Luigi painted it green. When the universes merge... conflict! Someone has to decide which color stays (or mix them).

```
<<<<<<< HEAD (your branch)
const BUTTON_COLOR = 'red';
=======
const BUTTON_COLOR = 'green';
>>>>>>> feature/luigi-green-theme
```

### 7.3 Resolving Conflicts

```bash
# 1. Git warns about the conflict
git merge feature/new-theme
# Auto-merging src/styles.js
# CONFLICT (content): Merge conflict in src/styles.js
# Automatic merge failed; fix conflicts and then commit the result.

# 2. Open the file and resolve manually
# Choose one version, the other, or combine them

# BEFORE (conflict):
<<<<<<< HEAD
const THEME = 'dark';
=======
const THEME = 'light';
>>>>>>> feature/new-theme

# AFTER (resolved):
const THEME = getUserPreference() || 'dark'; // Uses user preference

# 3. Mark as resolved and commit
git add src/styles.js
git commit -m "merge: resolve theme conflict, uses user preference"
```

**Tip**: Use VS Code to resolve conflicts visually — it shows "Accept Current", "Accept Incoming", "Accept Both" options.

---

## 8. Code Review in the Workflow

### 8.1 The Review Process

```
Author opens PR → Reviewer(s) notified → Review begins
                                               │
                                    ┌──────────┼──────────┐
                                    │          │          │
                                ✅ Approve  💬 Comment  ❌ Request
                                    │          │      Changes
                                    │          │          │
                                    │    Discussion    Author makes
                                    │                 corrections
                                    │                    │
                                    └─────── Merge ◄─────┘
```

### 8.2 Review Checklist

```markdown
## Mushroom Kingdom Code Review Checklist

### Functionality
- [ ] Does the code do what the issue/ticket asks?
- [ ] Are edge cases handled?
- [ ] Are errors handled gracefully?

### Quality
- [ ] Is the code readable and understandable?
- [ ] Are variable and function names descriptive?
- [ ] Is there no duplicated code?
- [ ] Are functions small and do a single thing?

### Security
- [ ] No hardcoded secrets?
- [ ] Are inputs validated and sanitized?
- [ ] Is authorization correct?

### Tests
- [ ] Unit tests for new logic?
- [ ] Integration tests for new endpoints?
- [ ] Are all tests passing?

### Performance
- [ ] Optimized queries (no N+1)?
- [ ] No unnecessary loops?
```

### 8.3 Automated Checks

```yaml
# .github/workflows/pr-checks.yml
name: PR Checks

on:
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install dependencies
        run: npm ci

      - name: Type Check (Boss 1: TSC)
        run: npx tsc --noEmit

      - name: Lint (Boss 3: ESLint)
        run: npx eslint . --max-warnings 0

      - name: Tests (Boss 2: Jest)
        run: npx jest --coverage --ci

      - name: Zero Any Check (Boss 4)
        run: |
          ANY_COUNT=$(grep -r ":\s*any" src/ --include="*.ts" -c || echo 0)
          if [ "$ANY_COUNT" -gt "0" ]; then
            echo "Found $ANY_COUNT uses of 'any'. Fix them before merging."
            exit 1
          fi

      - name: Security Scan
        run: npm audit --audit-level=high
```

---

## 9. Workflow Comparison

### 9.1 Comparison Table

| Criterion | Git Flow | GitHub Flow | Trunk-Based | GitLab Flow |
|-----------|:--------:|:-----------:|:-----------:|:-----------:|
| **Complexity** | High | Low | Medium | Medium |
| **Permanent branches** | 2 | 1 | 1 | 2-3 |
| **Deploy speed** | Slow | Fast | Very fast | Medium |
| **Multiple versions** | Yes | No | No | Yes |
| **Team size** | Large | Small-medium | Any | Medium-large |
| **Discipline required** | Medium | Low | High | Medium |
| **Feature flags** | Optional | Optional | Essential | Optional |
| **CI/CD** | Important | Important | Critical | Important |

### 9.2 Decision Tree

```
Need to maintain multiple versions in production?
├── YES → Is the release cycle formal (weeks)?
│         ├── YES → Git Flow
│         └── NO → GitLab Flow (release branches)
│
└── NO → Does the team have discipline for small, frequent commits?
          ├── YES → Is CI/CD fast and reliable?
          │         ├── YES → Trunk-Based Development
          │         └── NO → GitHub Flow
          │
          └── NO → GitHub Flow (start simple)
```

---

## 10. Final Summary Table

| Concept | What It Is | Mario Analogy |
|---------|-----------|---------------|
| **Git Flow** | Formal workflow with 5 branches | Official tournament with formal brackets |
| **GitHub Flow** | Simple workflow: branch, PR, merge | Casual match — simple and direct |
| **Trunk-Based** | Everyone on main, very short-lived branches | Everyone on the same field, quick training sessions |
| **GitLab Flow** | Branches linked to environments | Training level, dress rehearsal, official game |
| **Branch** | Independent copy of the code | Parallel universe |
| **Merge** | Joining two branches | Fusing universes |
| **Pull Request** | Merge request with review | Submitting result to the judge |
| **Merge Conflict** | Two branches edited the same thing | Two players modified the same room |
| **Branch Protection** | Rules that protect main | Guards that protect the official field |
| **Code Review** | Peer code review | Judge evaluating the play |

---

## References

- [Vincent Driessen — A Successful Git Branching Model (Git Flow)](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Flow — Understanding the GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow)
- [Trunk-Based Development](https://trunkbaseddevelopment.com/)
- [GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)
- [Atlassian — Comparing Workflows](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [Microsoft — Branch Strategy](https://learn.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance)
- [GitHub — Branch Protection Rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-a-branch-protection-rule)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Google Engineering Practices — Code Review](https://google.github.io/eng-practices/review/)

---

*Level 4-5 complete! You learned the main Git workflows and when to use each one. In the next level, we'll dive into data structures and JSON — how to organize coins, stars, and mushrooms. Get ready for Level 4-6!*
