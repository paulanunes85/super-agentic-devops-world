---
title: "Level 1-3 — Multiplayer Server: GitHub (Repos, Issues, PRs, Projects)"
description: "GitHub as the multiplayer platform where developers collaborate — from repositories to Pull Requests."
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-1", "github", "fundamentals"]
---

# Level 1-3 — Multiplayer Server: GitHub (Repos, Issues, PRs, Projects)

<div class="docs-hero">
  <img src="/super-agentic-devops-world/img/docs/1-3-github.png" alt="Level 1-3 — Multiplayer Server: GitHub (Repos, Issues, PRs, Projects)" />
</div>


---

## Change Log

| Version | Date       | Author       | Description                     |
|---------|------------|--------------|-------------------------------|
| 1.0.0   | 2026-03-18 | Paula Silva  | Initial creation (Mario Edition)|

---

## Table of Contents

- [Prologue — From Solo Player to Multiplayer](#prologue--from-solo-player-to-multiplayer)
- [1. What Is GitHub?](#1-what-is-github)
  - [1.1 Git vs GitHub — Memory Card vs Online Server](#11-git-vs-github--memory-card-vs-online-server)
  - [1.2 Why GitHub?](#12-why-github)
  - [1.3 Table: GitHub vs Mario's Multiplayer Server](#13-table-github-vs-marios-multiplayer-server)
- [2. Creating Your Account — Joining the Server](#2-creating-your-account--joining-the-server)
  - [2.1 Step by Step](#21-step-by-step)
  - [2.2 Your Profile — The Player Card](#22-your-profile--the-player-card)
- [3. Repositories on GitHub — Shared Worlds](#3-repositories-on-github--shared-worlds)
  - [3.1 Creating Your First Repository on GitHub](#31-creating-your-first-repository-on-github)
  - [3.2 README.md — The Game's Title Screen](#32-readmemd--the-games-title-screen)
  - [3.3 Public vs Private](#33-public-vs-private)
- [4. Push and Pull — Upload and Download Saves](#4-push-and-pull--upload-and-download-saves)
  - [4.1 Connecting Local to Remote](#41-connecting-local-to-remote)
  - [4.2 git push — Uploading Saves to the Server](#42-git-push--uploading-saves-to-the-server)
  - [4.3 git pull — Downloading Saves from the Server](#43-git-pull--downloading-saves-from-the-server)
  - [4.4 Diagram: Local-Remote Flow](#44-diagram-local-remote-flow)
- [5. Clone and Fork — Copying Games](#5-clone-and-fork--copying-games)
  - [5.1 git clone — Download a Copy of the Game](#51-git-clone--download-a-copy-of-the-game)
  - [5.2 Fork — Create Your Own Version](#52-fork--create-your-own-version)
  - [5.3 Table: Clone vs Fork](#53-table-clone-vs-fork)
- [6. Issues — The Quest Board](#6-issues--the-quest-board)
  - [6.1 What Are Issues?](#61-what-are-issues)
  - [6.2 Creating an Issue](#62-creating-an-issue)
  - [6.3 Labels — Mission Type Tags](#63-labels--mission-type-tags)
  - [6.4 Issue Templates](#64-issue-templates)
- [7. Pull Requests — Request for Acceptance](#7-pull-requests--request-for-acceptance)
  - [7.1 What Is a Pull Request?](#71-what-is-a-pull-request)
  - [7.2 The Complete PR Flow](#72-the-complete-pr-flow)
  - [7.3 Code Review — Team Inspection](#73-code-review--team-inspection)
  - [7.4 Diagram: PR Lifecycle](#74-diagram-pr-lifecycle)
- [8. Projects — The Campaign Map](#8-projects--the-campaign-map)
  - [8.1 What Are GitHub Projects?](#81-what-are-github-projects)
  - [8.2 Typical Columns](#82-typical-columns)
  - [8.3 Automations](#83-automations)
- [9. Branches on GitHub — Online Parallel Universes](#9-branches-on-github--online-parallel-universes)
  - [9.1 Branch Protection Rules](#91-branch-protection-rules)
  - [9.2 The Multiplayer Workflow](#92-the-multiplayer-workflow)
- [10. Codespaces — The Cloud Arcade](#10-codespaces--the-cloud-arcade)
  - [10.1 What Is Codespaces?](#101-what-is-codespaces)
  - [10.2 When to Use](#102-when-to-use)
- [11. Extra GitHub Features](#11-extra-github-features)
  - [11.1 GitHub Pages — Publish Your Game](#111-github-pages--publish-your-game)
  - [11.2 GitHub Discussions](#112-github-discussions)
  - [11.3 GitHub Releases](#113-github-releases)
- [Summary — What We Learned in Level 1-3](#summary--what-we-learned-in-level-1-3)
- [References](#references)

---

## Prologue — From Solo Player to Multiplayer

<div align="center">
<img src="../../diagrams/svg/github-platform.svg" alt="GitHub platform map and its features" width="800">
<br><em>GitHub platform map and its features</em>
</div>

Up until now, Sofia had been playing alone. She had her console (VS Code), her memory card (Git), and built levels in the comfort of her living room. But she was missing something: **other players**.

In solo Mario, you do everything alone. But in multiplayer Mario, something magical happens — one player creates a level, another tests it, another suggests improvements, and together they build something much bigger than any one of them could do alone. The problem is: how do you connect all these players? How do you share saves? How do you ensure one player doesn't overwrite another's work?

The answer is simple: you need a **multiplayer server**. And the multiplayer server of software development is called **GitHub**.

"Up until now, you've played offline," said the voice. "Now it's time to connect to the server. On GitHub, millions of players around the world share their games, collaborate on projects, and build incredible things together. And you're going to be part of it."

---

## 1. What Is GitHub?

### 1.1 Git vs GitHub — Memory Card vs Online Server

A common confusion: **Git** and **GitHub** are different things.

| | Git | GitHub |
|--|-----|--------|
| **What it is** | Version control tool | Web platform for hosting repos |
| **Where it runs** | On YOUR computer (local) | In the CLOUD (remote servers) |
| **Function** | Track changes, make commits, branches | Host repos online, collaborate, PR, Issues |
| **Mario Analogy** | The **memory card** (saves locally) | The **online multiplayer server** (connects players) |
| **Needs internet?** | No | Yes |
| **Who created it** | Linus Torvalds (2005) | Tom Preston-Werner, Chris Wanstrath (2008) |
| **Alternatives** | Mercurial, SVN | GitLab, Bitbucket, Azure DevOps |

> **MARIO ANALOGY:** Git is the **memory card** — works offline, saves on your console. GitHub is the **online server** — when you connect to Wi-Fi, your saves go to the cloud and other players can access them. You can play offline with Git all day, but when you want to share or collaborate, you upload to GitHub.

### 1.2 Why GitHub?

- **100+ million developers** use GitHub
- It's where most of the world's **open-source code** lives
- Natively integrated with **VS Code**, **Git**, **GitHub Copilot**, **GitHub Actions**
- Free for personal use and open-source projects
- Owned by **Microsoft** since 2018

### 1.3 Table: GitHub vs Mario's Multiplayer Server

| GitHub Feature | What It Does | Mario Analogy |
|--------------|-----------|----------------|
| **Repository** | Hosts the project's code | The **game world** online — all levels hosted on the server |
| **Push** | Sends local commits to the server | **Save upload** — sends your progress to the cloud |
| **Pull** | Downloads commits from the server to local | **Update download** — brings the most recent progress |
| **Clone** | Copies an entire repository to your computer | **Download the game** — complete copy to play offline |
| **Fork** | Creates an independent copy of a repo on your profile | **Create your version of the game** — based on the original, but yours |
| **Pull Request** | Asks for your changes to be accepted into the main project | **"Hey team, accept my changes!"** — formal proposal |
| **Issues** | Registers bugs, tasks, ideas | **Quest Board** — list of quests |
| **Projects** | Organizes Issues into visual boards | **Campaign map** — shows overall progress |
| **Codespaces** | Cloud development environment | **Cloud arcade** — play from any computer |
| **Profile** | Your public profile with contributions | **Player card** — stats, achievements, history |

---

## 2. Creating Your Account — Joining the Server

### 2.1 Step by Step

1. Go to **https://github.com**
2. Click **"Sign up"**
3. Enter your **email**
4. Create a **username** (your player name — choose wisely, it will follow you throughout your career)
5. Create a **strong password**
6. Verify your email
7. Done — you're on the server!

> **Veteran Tip:** Your GitHub username is like your **gamertag**. Choose something professional and memorable. Recruiters and companies will see it. "sofia-dev" is better than "xXx_DarkCoder_xXx".

### 2.2 Your Profile — The Player Card

Your GitHub profile shows:
- **Photo** (character avatar)
- **Bio** (player description)
- **Repositories** (games created)
- **Contribution Graph** (the famous "green carpet" — shows your daily activity)
- **Followers/Following** (friends on the server)

The Contribution Graph is especially motivating — each green square represents a day you made commits. The greener, the more active. Many developers treat it as a "consecutive days played" streak — keeping the streak going.

---

## 3. Repositories on GitHub — Shared Worlds

### 3.1 Creating Your First Repository on GitHub

**Through the website:**
1. Click the `+` in the top right corner
2. Select **"New repository"**
3. Fill in:
   - **Repository name:** `mushroom-kingdom`
   - **Description:** "My first project — Learning software development"
   - **Visibility:** Public (so other players can see)
   - Check **"Add a README file"**
4. Click **"Create repository"**

**Through the terminal (with GitHub CLI):**
```bash
gh repo create mushroom-kingdom --public --description "My first project"
```

### 3.2 README.md — The Game's Title Screen

The `README.md` file is the **first thing** anyone sees when visiting your repository. It's the **title screen** of your game.

A good README contains:
- **Project name** (game title)
- **Description** (what the game is about)
- **How to install/run** (how to turn on the console and play)
- **How to contribute** (how other players can help)
- **License** (usage rules)

Basic Markdown example:

```markdown
# Mushroom Kingdom

My first software development project!

## How to run

1. Clone the repository: `git clone https://github.com/sofia/mushroom-kingdom.git`
2. Enter the folder: `cd mushroom-kingdom`
3. Run: `node fase1-1.js`

## Technologies

- JavaScript
- Node.js
```

### 3.3 Public vs Private

| Type | Who can see | Mario Analogy |
|------|--------------|----------------|
| **Public** | Anyone on the internet | **Open-world** game — any player can enter and explore |
| **Private** | Only you and those you invite | **Private** game — only invited players enter |

---

## 4. Push and Pull — Upload and Download Saves

### 4.1 Connecting Local to Remote

To connect your local repository (computer) to the remote repository (GitHub):

```bash
# If you already have a local repo and created one on GitHub
git remote add origin https://github.com/your-username/mushroom-kingdom.git
git branch -M main
git push -u origin main
```

Or, if you prefer to clone the GitHub repository first:
```bash
git clone https://github.com/your-username/mushroom-kingdom.git
cd mushroom-kingdom
```

### 4.2 git push — Uploading Saves to the Server

```bash
git push origin main
```

This sends all your local commits to GitHub.

> **MARIO ANALOGY:** `git push` is like **uploading your save to the cloud**. Your local saves (memory card) are copied to the server. Now, even if your console explodes, your saves are safe in the cloud. Plus, other players can download your saves.

### 4.3 git pull — Downloading Saves from the Server

```bash
git pull origin main
```

This downloads the most recent commits from GitHub to your computer.

> **MARIO ANALOGY:** `git pull` is like **downloading the latest game update**. If another player made changes and uploaded to the server, you need to download those changes to have the most up-to-date version.

### 4.4 Diagram: Local-Remote Flow

```
+---------------------------+                    +---------------------------+
|     YOUR COMPUTER         |                    |     GITHUB (Server)       |
|                           |                    |                           |
|  Working → Staging → Repo |  --- git push -->  |  Remote Repository        |
|  Directory   Area   (.git)|                    |  (origin/main)            |
|                           |  <-- git pull ---  |                           |
|  "Your console + personal |                    |  "Multiplayer server      |
|   memory card"            |                    |   in the cloud"           |
+---------------------------+                    +---------------------------+
                                                          |
                                                    git clone
                                                          |
                                                          v
                                                 +---------------------------+
                                                 |  ANOTHER PLAYER'S        |
                                                 |  COMPUTER                |
                                                 |                           |
                                                 |  "Another console that    |
                                                 |   downloaded the game"    |
                                                 +---------------------------+
```

---

## 5. Clone and Fork — Copying Games

### 5.1 git clone — Download a Copy of the Game

`git clone` copies an entire repository from GitHub to your computer, including the full commit history.

```bash
git clone https://github.com/user/project.git
```

> **MARIO ANALOGY:** `git clone` is like **downloading the entire game** from the server to play on your console. You get all the levels, all the saves, everything. And now you can play offline.

### 5.2 Fork — Create Your Own Version

A **fork** is different from a clone. When you fork a repository on GitHub, an **independent copy** is created on your profile. You can modify anything you want without affecting the original.

To fork:
1. Go to the repository on GitHub
2. Click the **"Fork"** button in the top right corner
3. Select your profile as the destination

> **MARIO ANALOGY:** Fork is like **creating your own version of the game**. You take the original "Super Mario Bros" and create "Super Sofia Bros" — based on the original, but now it's YOURS. You can change levels, add characters, change rules. The original game is not affected.

### 5.3 Table: Clone vs Fork

| | Clone | Fork |
|--|-------|------|
| **Where it lives** | On your computer | On your GitHub profile |
| **Link to original** | Points to the original repo | Independent copy |
| **Permission to push** | Only if you have access | Always (it's yours!) |
| **When to use** | Work on a repo you have access to | Contribute to third-party projects |
| **Analogy** | Download the game to play | Create your version of the game |

---

## 6. Issues — The Quest Board

### 6.1 What Are Issues?

**Issues** are like a **Quest Board** in the game. Each Issue is a quest — it could be:
- A **bug** to fix (enemy to defeat)
- A **feature** to create (new level to build)
- An **improvement** to make (equipment upgrade)
- A **question** from the team (help request at the tavern)

> **MARIO ANALOGY:** Issues are the **quest board in the village square**. Any player can look at the board and see: "Quest 1: Fix broken bridge in World 2. Quest 2: Build new secret level. Quest 3: Bug — Goomba going through wall." Players pick quests and go work on them.

### 6.2 Creating an Issue

On the repository in GitHub:
1. Click the **"Issues"** tab
2. Click **"New issue"**
3. Fill in:
   - **Title:** Short and clear title
   - **Description:** Mission details
   - **Labels:** Categories (bug, enhancement, etc.)
   - **Assignees:** Who will work on it
4. Click **"Submit new issue"**

Example:
```
Title: Bug — Coin count doesn't update after collecting
Description:
When the player collects a coin, the scoreboard doesn't update.

Steps to reproduce:
1. Run `node fase1-1.js`
2. Collect a coin
3. Notice the scoreboard shows 0

Expected: Scoreboard should show 1
```

### 6.3 Labels — Mission Type Tags

| Label | Color | Meaning | Mario Analogy |
|-------|-----|-----------|----------------|
| `bug` | Red | Something is broken | Enemy to defeat |
| `enhancement` | Blue | New feature | New level to build |
| `documentation` | Yellow | Documentation | Update the manual |
| `good first issue` | Green | Good for beginners | Easy quest for new players |
| `help wanted` | Green | Needs help | Request for reinforcements |
| `priority: high` | Red | Urgent | Urgent boss battle |

### 6.4 Issue Templates

You can create templates to standardize Issues. It's like having **pre-made forms** on the quest board:

- **Bug Report** template: fields for reproduction steps, expected result, actual result
- **Feature Request** template: description, motivation, alternatives considered

---

## 7. Pull Requests — Request for Acceptance

### 7.1 What Is a Pull Request?

A **Pull Request (PR)** is a formal proposal to include your changes in the main code. It's the central collaboration mechanism on GitHub.

> **MARIO ANALOGY:** Imagine you built a new secret level for the game. You can't just insert it into the main game — you need to show the team: "Look, I built this level. Can you test it? Can you review it? If everything is fine, include it in the game." This process is a Pull Request. You're saying: **"Hey team, accept my changes!"**

### 7.2 The Complete PR Flow

```
1. Create local branch       → git switch -c feature-coins
2. Make changes               → (edit code)
3. Commit                     → git commit -m "feat: add coins"
4. Push the branch            → git push origin feature-coins
5. Create PR on GitHub        → (through the site or CLI)
6. Team review                → (code review)
7. Approval and merge         → (Merge button on GitHub)
8. Branch deleted             → (cleanup)
```

**Creating a PR through the terminal:**
```bash
gh pr create --title "feat: add coin system" --body "Added coin counting in level 1-1"
```

**Creating through the site:**
1. Go to the repository on GitHub
2. Click **"Pull requests"**
3. Click **"New pull request"**
4. Select the source and destination branches
5. Fill in title and description
6. Click **"Create pull request"**

### 7.3 Code Review — Team Inspection

Before a PR is accepted, other team members **review** the code:
- **Comments** on specific lines: "This variable should have a different name"
- **Approval** (Approve): "All good, you can merge"
- **Request changes** (Request changes): "Missing error handling for this case"

> **MARIO ANALOGY:** Code Review is like when **Toadette inspects the level** before releasing it to players. She tests every jump, checks every block, looks for bugs. Only when she approves does the level enter the official game.

### 7.4 Diagram: PR Lifecycle

```
  Branch created          Code written           PR opened
       |                      |                     |
       v                      v                     v
  [feature-coins] → [commits made] → [PR on GitHub]
                                              |
                                        Code Review
                                         /        \
                                  Approved      Changes requested
                                     |               |
                                  [Merge]       [Dev fixes]
                                     |               |
                              Branch deleted    New commit
                                                     |
                                              [PR updated]
                                                     |
                                              [Review again]
```

---

## 8. Projects — The Campaign Map

### 8.1 What Are GitHub Projects?

**GitHub Projects** is a project management tool integrated into GitHub. It works like a **Kanban board** — columns with cards that you move as work progresses.

> **MARIO ANALOGY:** Projects is the game's **campaign map**. You see all the levels (Issues) organized in columns: "Not started", "In progress", "Complete". The map shows the big picture — which levels remain, which are being played, which have been cleared.

### 8.2 Typical Columns

| Column | Meaning | Mario Analogy |
|--------|-----------|----------------|
| **Backlog** | Tasks identified but not prioritized | Levels discovered but not explored |
| **To Do** | Next tasks to work on | Next levels in the queue |
| **In Progress** | Tasks currently being worked on | Level in progress — someone playing |
| **In Review** | Tasks done, awaiting review (PR) | Level built, Toadette inspecting |
| **Done** | Completed tasks | Level complete — flag planted |

### 8.3 Automations

GitHub Projects can move cards automatically:
- Issue created → goes to "Backlog"
- PR opened linked to Issue → moves to "In Review"
- PR merged → moves to "Done"

> **MARIO ANALOGY:** It's as if the campaign map updated itself. When you enter a level, it changes color. When you complete it, the flag appears. No need to update manually.

---

## 9. Branches on GitHub — Online Parallel Universes

### 9.1 Branch Protection Rules

On GitHub, you can protect the `main` branch with rules:

| Rule | What It Does | Mario Analogy |
|------|-----------|----------------|
| **Require PR** | Nobody pushes directly to main | No level enters the game without inspection |
| **Require Review** | At least 1 person must approve | Toadette must approve first |
| **Require Status Checks** | Automated tests must pass | Lakitu must validate from above |
| **No Force Push** | Can't overwrite history | Can't erase old saves |

### 9.2 The Multiplayer Workflow

The typical team workflow:

```
1. Pick an Issue (quest) from the board
2. Create a branch for that Issue
3. Work on the branch (make commits)
4. Open a PR when done
5. Team reviews the PR
6. Merge to main when approved
7. Delete the branch
8. Repeat
```

> **MARIO ANALOGY:** Each player picks a quest from the board, enters their parallel universe (branch), completes the quest, shows the team (PR), and when everyone approves, the result is incorporated into the main game (merge to main). Nobody touches the main game directly — everything goes through inspection.

---

## 10. Codespaces — The Cloud Arcade

### 10.1 What Is Codespaces?

**GitHub Codespaces** is a complete development environment **in the cloud**. With one click, you have a VS Code running in the browser, with all the repository code ready to edit.

> **MARIO ANALOGY:** Codespaces is like a **cloud arcade**. You don't need to have the console at home — just go to the arcade (open the browser), sit down, and play. The game is already there, configured, ready. Works from any computer, anywhere. Perfect when you're on a work computer, at a library, or on a friend's phone.

### 10.2 When to Use

| Situation | Use Codespaces? |
|---------|----------------|
| You can't install anything on the computer | Yes |
| You want to quickly contribute to an open-source project | Yes |
| You're on a different computer than usual | Yes |
| You want to quickly test something without setup | Yes |
| You have your computer configured and unstable internet | No — use local |

To open a Codespace:
1. Go to the repository on GitHub
2. Click the green **"Code"** button
3. Select the **"Codespaces"** tab
4. Click **"Create codespace on main"**

In seconds, a complete VS Code opens in your browser.

---

## 11. Extra GitHub Features

### 11.1 GitHub Pages — Publish Your Game

**GitHub Pages** lets you turn a repository into a **website accessible on the internet** — for free.

> **MARIO ANALOGY:** It's like publishing your game so that anyone in the world can play. No need for your own server. GitHub hosts it for you.

### 11.2 GitHub Discussions

**Discussions** is a forum within the repository. Unlike Issues (quests), Discussions are for open conversations, questions, ideas.

> **MARIO ANALOGY:** If Issues are the quest board, Discussions is the **tavern** — the place where players chat, exchange tips, and discuss strategies.

### 11.3 GitHub Releases

**Releases** are official project versions, with downloads and update notes.

> **MARIO ANALOGY:** Releases are like **game versions** — "Super Mario Bros v1.0", "Super Mario Bros v1.1 (bug patch)", "Super Mario Bros v2.0 (new worlds)". Each release marks an important milestone.

---

## Summary — What We Learned in Level 1-3

| Concept | What It Is | Mario Analogy |
|----------|---------|----------------|
| **GitHub** | Repository hosting and collaboration platform | Online multiplayer server |
| **Push** | Send commits to the server | Upload saves to the cloud |
| **Pull** | Download commits from the server | Download updates |
| **Clone** | Copy repository to the computer | Download the complete game |
| **Fork** | Create independent copy on your profile | Create your version of the game |
| **Issues** | Register tasks, bugs, ideas | Quest Board |
| **Pull Request** | Proposal of changes for review | "Hey team, accept my changes!" |
| **Projects** | Kanban board for managing work | Campaign map |
| **Codespaces** | VS Code in the cloud | Cloud arcade |
| **Branch Protection** | Protection rules for the main branch | Mandatory inspection rules |
| **README** | Project description | Game title screen |

```
+-------------------------------------------+
|                                           |
|    LEVEL 1-3 COMPLETE!                    |
|                                           |
|    ★ GitHub account created               |
|    ★ Online repository created            |
|    ★ Push and Pull mastered               |
|    ★ Issues and PRs understood            |
|    ★ Projects explored                    |
|    ★ Codespaces tested                    |
|                                           |
|    → Next level: 1-4 GitHub Actions      |
|      (The Working Lakitus)               |
|                                           |
+-------------------------------------------+
```

---

## References

- [GitHub — Official Site](https://github.com)
- [GitHub Docs — Getting Started](https://docs.github.com/en/get-started)
- [GitHub Docs — Issues](https://docs.github.com/en/issues)
- [GitHub Docs — Pull Requests](https://docs.github.com/en/pull-requests)
- [GitHub Docs — Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- [GitHub Docs — Codespaces](https://docs.github.com/en/codespaces)
- [GitHub CLI (gh)](https://cli.github.com)
- [GitHub Pages](https://pages.github.com)
- [GitHub Skills — Interactive Courses](https://skills.github.com)

---

*"Now I'm not a solo player anymore. I'm part of a team." — Sofia, joining the multiplayer server.*

---

<div align="center">

⬅️ [Previous: Level 1-2: Git](1-2-git.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 1-4: GitHub Actions](1-4-github-actions.md)

</div>
