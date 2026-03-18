---
title: "Level 1-2 — Save Game: Git and the Save System"
description: "Learn Git from scratch — the version control system that works like the most powerful save game ever created."
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-1", "git", "fundamentals"]
---

# Level 1-2 — Save Game: Git and the Save System

---

## Change Log

| Version | Date       | Author       | Description                     |
|---------|------------|--------------|-------------------------------|
| 1.0.0   | 2026-03-18 | Paula Silva  | Initial creation (Mario Edition)|

---

## Table of Contents

- [Prologue — The Player Who Lost Everything](#prologue--the-player-who-lost-everything)
- [1. What Is Version Control?](#1-what-is-version-control)
  - [1.1 The Problem: No Save Game](#11-the-problem-no-save-game)
  - [1.2 The Solution: Git — The Ultimate Memory Card](#12-the-solution-git--the-ultimate-memory-card)
  - [1.3 Table: Git vs Mario's Save System](#13-table-git-vs-marios-save-system)
- [2. Installing Git — Buying the Memory Card](#2-installing-git--buying-the-memory-card)
  - [2.1 Windows](#21-windows)
  - [2.2 macOS](#22-macos)
  - [2.3 Linux](#23-linux)
  - [2.4 Initial Setup — Engraving Your Name on the Memory Card](#24-initial-setup--engraving-your-name-on-the-memory-card)
- [3. Fundamental Concepts — The Memory Card Manual](#3-fundamental-concepts--the-memory-card-manual)
  - [3.1 Repository (Repo) — The Game Cartridge](#31-repository-repo--the-game-cartridge)
  - [3.2 The .git Folder — The Memory Card Chip](#32-the-git-folder--the-memory-card-chip)
  - [3.3 The 3 States: Working, Staging, Committed](#33-the-3-states-working-staging-committed)
  - [3.4 Diagram: The 3 States of Git](#34-diagram-the-3-states-of-git)

<div align="center">
<img src="../../diagrams/svg/git-workflow.svg" alt="Git workflow: Working Directory → Staging → Repository" width="800">
<br><em>Git workflow: Working Directory → Staging → Repository</em>
</div>
- [4. Your First Repository — Inserting the Memory Card](#4-your-first-repository--inserting-the-memory-card)
  - [4.1 git init — Formatting the Memory Card](#41-git-init--formatting-the-memory-card)
  - [4.2 git status — Checking the Save State](#42-git-status--checking-the-save-state)
  - [4.3 git add — Selecting What to Save](#43-git-add--selecting-what-to-save)
  - [4.4 git commit — Actually Saving](#44-git-commit--actually-saving)
  - [4.5 Full Practice: From Zero to First Commit](#45-full-practice-from-zero-to-first-commit)
- [5. Save History — git log](#5-save-history--git-log)
  - [5.1 Viewing Your History](#51-viewing-your-history)
  - [5.2 Understanding the git log Output](#52-understanding-the-git-log-output)
  - [5.3 Alternative Formats](#53-alternative-formats)
- [6. Undoing Things — Going Back in Time](#6-undoing-things--going-back-in-time)
  - [6.1 git checkout — Loading an Old Save](#61-git-checkout--loading-an-old-save)
  - [6.2 git diff — Comparing Saves](#62-git-diff--comparing-saves)
  - [6.3 git restore — Undoing Changes](#63-git-restore--undoing-changes)
- [7. Branches — Parallel Universes](#7-branches--parallel-universes)
  - [7.1 What Is a Branch?](#71-what-is-a-branch)
  - [7.2 Creating a Branch](#72-creating-a-branch)
  - [7.3 Switching Branches](#73-switching-branches)
  - [7.4 Merge — Joining Universes](#74-merge--joining-universes)
  - [7.5 Diagram: Branches as Parallel Universes](#75-diagram-branches-as-parallel-universes)
- [8. Commit Best Practices — The Art of Saving Well](#8-commit-best-practices--the-art-of-saving-well)
  - [8.1 Clear Commit Messages](#81-clear-commit-messages)
  - [8.2 Small and Frequent Commits](#82-small-and-frequent-commits)
  - [8.3 Conventional Commits — The Coin Standard](#83-conventional-commits--the-coin-standard)
- [9. Git in VS Code — The Visual Save System](#9-git-in-vs-code--the-visual-save-system)
  - [9.1 Source Control Panel](#91-source-control-panel)
  - [9.2 Visual Indicators](#92-visual-indicators)
  - [9.3 GitLens — Super Save Vision](#93-gitlens--super-save-vision)
- [10. Essential Commands Table](#10-essential-commands-table)
- [Summary — What We Learned in Level 1-2](#summary--what-we-learned-in-level-1-2)
- [References](#references)

---

## Prologue — The Player Who Lost Everything

Sofia was proud. After hours working on the code, she had built something beautiful — a program that worked perfectly. Then she decided to "improve" a part. Changed one thing here, another there, one more over there...

And everything broke.

"No problem," thought Sofia, "I'll undo everything and go back to how it was before."

But... she couldn't remember exactly what she had changed. There were dozens of changes across multiple files. `Ctrl+Z` only went back so far. The program remained broken. Hours of work were lost.

Sofia felt that pain every player knows: **losing the save game**. That moment in Mario where you've cleared 7 worlds, the console shuts off due to a power outage, and you discover you didn't save. All those hours of gaming — lost forever.

"If only there were a way to **go back in time**," she murmured.

There is. It's called **Git**.

"Welcome to Level 1-2," said a familiar voice. "Here you'll learn something that will change your life as a developer: the most powerful save game system ever created. With it, you'll NEVER lose work again. Never be afraid to experiment again. And never say 'I don't remember how it was before.' Git remembers EVERYTHING."

---

## 1. What Is Version Control?

### 1.1 The Problem: No Save Game

Imagine playing Mario without any save system. You start at World 1-1, die at 4-3, and go back to the beginning. Every time. No checkpoints, no continues, no memory card.

That would be insane, right? Nobody would play like that.

Well, that's exactly what happens when you program without version control:

| Without Git | Mario Equivalent |
|---------|---------------------|
| You make changes and lose the previous version | Passing a level and the previous level disappearing forever |
| You don't know what changed between yesterday and today | Not remembering which levels you've already cleared |
| Two people edit the same file and one overwrites the other | Two players playing on the same save and one erasing the other's progress |
| Something breaks and you can't go back | Dying and going back to the start of the game |
| You make manual copies (project_v1, project_v2_final, project_v2_final_FINAL) | Having 47 memory cards labeled by hand |

### 1.2 The Solution: Git — The Ultimate Memory Card

**Git** is a **distributed version control system**. In simple words: Git is a tool that **tracks all changes** you make to your files, allows you to **go back to any point in time**, and makes it possible for **multiple people to work on the same project** without conflicts.

Git was created in 2005 by **Linus Torvalds** (the same creator of Linux) because he needed a better system to manage the thousands of contributions to the Linux kernel.

> **MARIO ANALOGY:** Git is the **perfect memory card**. Imagine a memory card that:
> - **Saves automatically** every time you ask (commit)
> - **Never corrupts** — all saves remain intact forever
> - **Stores ALL saves** — doesn't overwrite, accumulates
> - **Lets you go back to ANY save** — no matter how long ago
> - **Lets you create parallel universes** (branches) — test different paths without affecting the main save
> - **Lets multiple players play the same game** — each with their own save, then merge everything
> - **Records who did what** — knows which player completed which level

### 1.3 Table: Git vs Mario's Save System

| Git Concept | Function | Mario Analogy |
|-------------|--------|----------------|
| **Repository (repo)** | The project folder tracked by Git | The **game cartridge** — contains all levels and saves |
| **Commit** | A snapshot of the project state | A **save game** — captures exactly how everything is at that moment |
| **Staging Area** | Temporary area before saving | **Confirmation screen** — "Are you sure you want to save?" |
| **Working Directory** | Your working folder (unsaved changes) | The **level in progress** — you're playing but haven't saved yet |
| **.git folder** | Hidden folder that stores the entire history | The **memory card chip** — where data is recorded |
| **Branch** | Independent line of development | **Parallel universe** — same level, different paths |
| **Merge** | Join two branches | **Merge two parallel universes** into one |
| **git log** | History of all commits | **List of all saves** with date, time, and description |
| **git diff** | Difference between two versions | **Compare two saves** — see what changed |
| **git checkout** | Switch branch or go back to a commit | **Load a different save** |
| **HEAD** | The most recent commit (where you are now) | **Your current save** — the latest checkpoint |

---

## 2. Installing Git — Buying the Memory Card

### 2.1 Windows

1. Go to **https://git-scm.com/download/win**
2. Download the installer
3. Run the `.exe`
4. In the installation options, accept the defaults (they're good)
5. **Important:** On the "Adjusting your PATH environment" screen, select **"Git from the command line and also from 3rd-party software"**
6. Keep clicking "Next" and "Install"

### 2.2 macOS

macOS may already have Git installed. Check:

```bash
git --version
```

If it's not installed:

```bash
# Via Homebrew (recommended)
brew install git

# Or install Xcode Command Line Tools
xcode-select --install
```

### 2.3 Linux

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install git

# Fedora
sudo dnf install git
```

### 2.4 Initial Setup — Engraving Your Name on the Memory Card

Before using Git, you need to tell it who you are. Every save (commit) will be signed with your name and email.

```bash
git config --global user.name "Sofia"
git config --global user.email "sofia@email.com"
```

Check the configuration:

```bash
git config --list
```

> **MARIO ANALOGY:** This is like **engraving your name on the memory card**. Every save you make from here on will show "Save by: Sofia". If other players also use the same game, each save shows who made it.

---

## 3. Fundamental Concepts — The Memory Card Manual

### 3.1 Repository (Repo) — The Game Cartridge

A **repository** (or **repo**) is a project folder that's being tracked by Git. Any folder can become a repository — just run `git init` inside it.

> **MARIO ANALOGY:** The repository is the **game cartridge**. Inside it are all the levels (code files), all the saves (commits), and the entire game history (version history). Without the cartridge, there's no game. Without the repository, there's no project.

### 3.2 The .git Folder — The Memory Card Chip

When you initialize a repository, Git creates a hidden folder called `.git` inside your project. This folder contains **everything** Git needs: commit history, configurations, branches, etc.

```
mushroom-kingdom/
├── .git/              ← The memory card chip (DON'T TOUCH!)
│   ├── objects/       ← All saves stored
│   ├── refs/          ← Pointers to branches and tags
│   ├── HEAD           ← Points to the current save
│   └── config         ← Repo configurations
├── fase1-1.js         ← Your code
└── README.md          ← Project description
```

> **WARNING:** Never delete or manually edit the `.git` folder. It's like opening the memory card with a screwdriver and messing with the circuits — you could corrupt everything.

### 3.3 The 3 States: Working, Staging, Committed

In Git, your files can be in 3 different states. Understanding this is fundamental:

| State | What It Means | Mario Analogy |
|--------|----------------|----------------|
| **Working Directory** (Modified) | You changed a file but haven't asked to save | You're **playing the level** — progress exists, but you haven't saved |
| **Staging Area** (Staged) | You marked a file to be included in the next save | You **selected "Save Game"** from the menu — you're on the confirmation screen |
| **Committed** (Saved) | The file was permanently saved in the history | The **save was recorded** on the memory card — safe forever |

### 3.4 Diagram: The 3 States of Git

```
+-------------------+      git add      +-------------------+     git commit     +-------------------+
|                   | ----------------> |                   | -----------------> |                   |
|  WORKING          |                   |  STAGING          |                    |  REPOSITORY       |
|  DIRECTORY        |                   |  AREA             |                    |  (.git)           |
|                   |                   |                   |                    |                   |
|  "Playing the     |                   |  "Confirmation    |                    |  "Save recorded!" |
|   level"          |                   |   screen"         |                    |  (permanent,      |
|  (unsaved         |                   |  (ready to        |                    |   on memory card) |
|   changes)        |                   |   save)           |                    |                   |
+-------------------+                   +-------------------+                    +-------------------+
        ^                                                                               |
        |                              git checkout                                     |
        +-------------------------------------------------------------------------------+
        "Load old save"
```

---

## 4. Your First Repository — Inserting the Memory Card

Let's do it hands-on. Open the VS Code terminal in your project folder.

### 4.1 git init — Formatting the Memory Card

```bash
cd mushroom-kingdom
git init
```

Expected output:
```
Initialized empty Git repository in /home/sofia/mushroom-kingdom/.git/
```

> **MARIO ANALOGY:** You just **inserted and formatted the memory card**. The `.git` folder was created. Git is now watching everything that happens in this folder — ready to save when you ask.

### 4.2 git status — Checking the Save State

The `git status` command is your best friend. It shows exactly where each file is (working, staging, or committed).

```bash
git status
```

Expected output:
```
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        fase1-1.js

nothing added to commit but untracked files present (use "git add" to track)
```

This means: "Hey, I see the file `fase1-1.js`, but you never asked me to track it. Want me to track it?"

> **MARIO ANALOGY:** `git status` is like opening the **save menu** and seeing the situation: "Level in progress, progress not saved." Git tells you exactly what's happening.

### 4.3 git add — Selecting What to Save

The `git add` command moves files from the Working Directory to the Staging Area. You're saying: "include this file in the next save."

```bash
# Add a specific file
git add fase1-1.js

# Or add all modified files
git add .
```

Check the status again:

```bash
git status
```

Output:
```
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   fase1-1.js
```

The file is now in the Staging Area — on the save confirmation screen.

> **MARIO ANALOGY:** `git add` is like selecting **which data to include in the save**. In modern games, you can choose: "Save World 1 progress? Yes. Save collected items? Yes. Save settings? No." `git add` gives you that control — you decide exactly what goes into the save.

### 4.4 git commit — Actually Saving

The `git commit` command creates a permanent snapshot of what's in the Staging Area. Every commit needs a **message** describing what was done.

```bash
git commit -m "feat: create first level of the Mushroom Kingdom"
```

Output:
```
[main (root-commit) a1b2c3d] feat: create first level of the Mushroom Kingdom
 1 file changed, 25 insertions(+)
 create mode 100644 fase1-1.js
```

**Done!** Your first save is recorded. Forever. No matter what you do from here on — that save exists and can be recovered at any time.

> **MARIO ANALOGY:** `git commit` is the moment the save is **recorded on the memory card**. The screen flashes, a sound plays, and the message appears: "Progress saved!" The commit message (`-m "..."`) is the **save description** — like "World 1-1 complete, 10 coins collected."

### 4.5 Full Practice: From Zero to First Commit

Let's repeat the complete process, step by step:

```bash
# 1. Create project
mkdir meu-primeiro-repo
cd meu-primeiro-repo

# 2. Initialize Git (insert memory card)
git init

# 3. Create a file
echo "# My First Project" > README.md

# 4. Check status (what changed?)
git status

# 5. Add to staging (select for save)
git add README.md

# 6. Check status again (confirm selection)
git status

# 7. Commit! (actually save)
git commit -m "feat: add initial README"

# 8. Verify the save was made
git status
git log
```

---

## 5. Save History — git log

### 5.1 Viewing Your History

`git log` shows all commits (saves) made in the repository, from newest to oldest.

```bash
git log
```

### 5.2 Understanding the git log Output

```
commit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t (HEAD -> main)
Author: Sofia <sofia@email.com>
Date:   Tue Mar 18 10:30:00 2026 -0300

    feat: create first level of the Mushroom Kingdom
```

| Field | Meaning | Mario Analogy |
|-------|-----------|----------------|
| `commit a1b2c3d...` | Unique commit ID (SHA-1 hash) | Save serial number — unique in the universe |
| `HEAD -> main` | This is the current commit on the main branch | "You are here" on the map |
| `Author: Sofia` | Who made the commit | Which player saved |
| `Date:` | When it was made | Save date and time |
| Message | Description of what was done | Save annotation ("World 1-1, 10 coins") |

### 5.3 Alternative Formats

```bash
# Summarized — one line per commit
git log --oneline

# With branch graph
git log --oneline --graph --all

# Last 5 commits
git log -5

# With details of which files changed
git log --stat
```

The `--oneline` format is especially useful:

```
a1b2c3d (HEAD -> main) feat: create first level of the Mushroom Kingdom
```

> **MARIO ANALOGY:** `git log` is like opening the **save list** on the memory card. You see all the saves you've ever made, when you made them, and the description of each one. Perfect for deciding "which save do I want to go back to?"

---

## 6. Undoing Things — Going Back in Time

One of Git's superpowers is the ability to **go back in time**. Something broke? Go back to a previous save.

### 6.1 git checkout — Loading an Old Save

To see how the project was at a previous commit:

```bash
# Temporarily go back to a specific commit
git checkout a1b2c3d

# Go back to the most recent commit
git checkout main
```

> **MARIO ANALOGY:** `git checkout` is like **loading an old save** from the memory card. The game goes back to the exact state of that save. Everything that happened after "disappears" temporarily — but the more recent saves still exist on the memory card. You can go back to the most recent save at any time.

### 6.2 git diff — Comparing Saves

To see exactly what changed between the current state and the last commit:

```bash
# See unsaved changes (working vs last commit)
git diff

# See changes in the staging area
git diff --staged

# Compare two commits
git diff a1b2c3d b4c5d6e
```

The output shows added lines (in green with `+`) and removed lines (in red with `-`).

> **MARIO ANALOGY:** `git diff` is like watching the **replay** comparing two saves. "In save 1, Mario had 3 lives and 10 coins. In save 2, Mario has 2 lives and 45 coins. Difference: lost 1 life, gained 35 coins."

### 6.3 git restore — Undoing Changes

If you modified a file and want to discard the changes (go back to the last save):

```bash
# Discard changes to a specific file
git restore fase1-1.js

# Discard ALL unsaved changes
git restore .
```

> **WARNING:** `git restore` discards changes permanently. It's like clicking "Don't Save" when exiting the game — unsaved progress disappears.

---

## 7. Branches — Parallel Universes

### 7.1 What Is a Branch?

A **branch** is an **independent line of development**. It's as if you could create a **parallel universe** of your project, run experiments in that universe, and then decide: "I liked it, I'll bring this to the main universe" or "I didn't like it, I'll discard this universe."

> **MARIO ANALOGY:** Imagine that at World 1-3, the path splits in two. You can go via the upper route (through the clouds) or the lower route (through the pipes). A branch is like being able to go both ways AT THE SAME TIME, in parallel universes. At the end, you choose which route turned out better — or combine both.

### 7.2 Creating a Branch

```bash
# Create a new branch
git branch feature-coins

# Create and switch to it immediately
git switch -c feature-coins
# or (old command, also works)
git checkout -b feature-coins
```

### 7.3 Switching Branches

```bash
# Switch to another branch
git switch feature-coins
# or
git checkout feature-coins

# Go back to the main branch
git switch main

# List all branches
git branch
```

> **MARIO ANALOGY:** `git switch` is like **entering a portal to the parallel universe**. Everything you do in that universe doesn't affect the main universe (main). It's safe to experiment.

### 7.4 Merge — Joining Universes

When you finish working on a branch and want to bring the changes to the main branch:

```bash
# 1. Go back to main
git switch main

# 2. Merge the feature branch
git merge feature-coins
```

> **MARIO ANALOGY:** `git merge` is like **joining the two parallel universes**. The cloud route and the pipe route merge at the same destination, with everything you collected in both.

**Merge Conflicts:** Sometimes, two players edit the same line of the same file in different branches. When you try to merge the branches, Git says: "Hey, two players changed the same thing — I don't know which to keep. You decide." This is called a **merge conflict**, and you need to resolve it manually. Don't worry about this now — in Level 1-3 (GitHub) we'll go deeper.

### 7.5 Diagram: Branches as Parallel Universes

```
                    ← feature-coins (parallel universe)
                   /                    \
  commit1 → commit2 → commit3            → commit6 (merge!)
                   \                    /
                    → commit4 → commit5
                    ← main (main universe)

  Translation:
  - At commit2, you created a parallel universe (branch)
  - In both universes, work happened in parallel
  - At commit6, the universes were joined (merge)
```

---

## 8. Commit Best Practices — The Art of Saving Well

### 8.1 Clear Commit Messages

A good commit message explains **what** was done and **why**. Think: if you go back to this save 6 months from now, will the message help you understand what happened?

**Bad:**
```
git commit -m "updates"
git commit -m "fix"
git commit -m "asdfg"
git commit -m "WIP"
```

**Good:**
```
git commit -m "feat: add coin counting system"
git commit -m "fix: correct bug that allowed jumping through walls"
git commit -m "docs: add README with installation instructions"
```

> **MARIO ANALOGY:** Imagine opening your save list and seeing: "Save 1", "Save 2", "Save 3"... versus "World 1-1 complete, 15 coins", "World 1-2, found secret passage", "World 1-3, before the boss". Which list is more useful?

### 8.2 Small and Frequent Commits

Make commits **small and frequent**, not one giant commit at the end of the day.

| Practice | Mario Analogy |
|---------|----------------|
| One commit per logical task | Save after each level, not after each world |
| Commit works on its own | Each save is playable — don't save mid-jump |
| Commit frequently | Save at each significant progress, not every 5 seconds |

### 8.3 Conventional Commits — The Coin Standard

**Conventional Commits** is a standard for commit messages that the entire team follows. The format is:

```
type: short description
```

| Type | When to Use | Mario Analogy |
|------|------------|----------------|
| `feat` | New feature | Build a new level |
| `fix` | Bug fix | Fix a broken block |
| `docs` | Documentation | Update the game manual |
| `style` | Formatting (no logic change) | Reorganize coins in the level |
| `refactor` | Restructure code without changing behavior | Rebuild the level with the same layout |
| `test` | Add tests | Test the level before publishing |
| `chore` | Maintenance tasks | Clean the tool room |

---

## 9. Git in VS Code — The Visual Save System

### 9.1 Source Control Panel

VS Code has native Git integration. Click the branch icon in the Activity Bar (or `Ctrl+Shift+G`) to open the **Source Control panel**.

There you can:
- See all modified files
- Click `+` to add to staging (`git add`)
- Write the commit message in the text box
- Click the check to commit

> **MARIO ANALOGY:** The Source Control panel is the **visual save game menu** — instead of typing commands in the terminal, you click buttons. Easier for beginners, but does the same thing.

### 9.2 Visual Indicators

VS Code shows each file's Git state with colors:

| Color/Icon | Meaning | Mario Analogy |
|-----------|-----------|----------------|
| **U** (green) | Untracked — new file, not tracked | New level the memory card doesn't know yet |
| **M** (yellow) | Modified — file changed since last save | Level in progress with unsaved progress |
| **A** (green) | Added — added to staging | Level selected for the next save |
| **D** (red) | Deleted — file removed | Level destroyed |
| **C** (yellow) | Conflict — merge conflict | Two players edited the same part |

### 9.3 GitLens — Super Save Vision

The **GitLens** extension adds superpowers to Git in VS Code:
- Shows **who wrote each line** (git blame)
- Shows **when each line was changed**
- Makes it easier to navigate through history

---

## 10. Essential Commands Table

| Command | What It Does | Mario Analogy |
|---------|-----------|----------------|
| `git init` | Initializes a repository | Format the memory card |
| `git status` | Shows current state | Open the save menu |
| `git add file` | Adds to staging | Select data for the save |
| `git add .` | Adds EVERYTHING to staging | Select ALL data |
| `git commit -m "msg"` | Creates a permanent save | Record the save on the memory card |
| `git log` | Shows save history | List of all saves |
| `git log --oneline` | Summarized history | Compact save list |
| `git diff` | Shows what changed | Compare current save with previous |
| `git branch name` | Creates a branch | Create a parallel universe |
| `git switch name` | Switches branch | Enter the parallel universe |
| `git merge name` | Merges branches | Join parallel universes |
| `git restore file` | Undoes local changes | Discard unsaved progress |
| `git checkout hash` | Goes back to an old commit | Load an old save |

---

## Summary — What We Learned in Level 1-2

| Concept | What It Is | Mario Analogy |
|----------|---------|----------------|
| **Git** | Version control system | The ultimate memory card |
| **Repository** | Folder tracked by Git | Game cartridge |
| **.git** | Hidden folder with entire history | Memory card chip |
| **Commit** | Permanent project snapshot | Save game |
| **Staging** | Pre-save preparation area | Save confirmation screen |
| **Branch** | Parallel development line | Parallel universe |
| **Merge** | Branch joining | Merge parallel universes |
| **git log** | Commit history | Save list |
| **git diff** | Difference between versions | Compare two saves |
| **Conventional Commits** | Message standard | Organized save descriptions |

```
+-------------------------------------------+
|                                           |
|    LEVEL 1-2 COMPLETE!                    |
|                                           |
|    ★ Git installed and configured         |
|    ★ First repository created             |
|    ★ First commit made                    |
|    ★ Save history explored                |
|    ★ Branches (parallel universes)        |
|                                           |
|    → Next level: 1-3 GitHub              |
|      (Multiplayer Server)                |
|                                           |
+-------------------------------------------+
```

---

## References

- [Git — Official Site](https://git-scm.com)
- [Git Documentation — Reference](https://git-scm.com/docs)
- [Pro Git Book (free)](https://git-scm.com/book/en/v2)
- [GitHub — Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Conventional Commits](https://www.conventionalcommits.org/en/)
- [VS Code — Version Control](https://code.visualstudio.com/docs/sourcecontrol/overview)
- [Atlassian — Git Tutorials](https://www.atlassian.com/git/tutorials)

---

*"Now nobody can take my saves from me." — Sofia, holding tight to her Git memory card.*

---

<div align="center">

⬅️ [Previous: Level 1-1: VS Code](1-1-vs-code.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 1-3: GitHub](1-3-github.md)

</div>
