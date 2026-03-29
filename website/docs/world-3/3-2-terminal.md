---
title: "Level 3-2 -- The Command Console: Terminal"
description: "Master the Terminal — the developer's debug/cheat menu. Bash, PowerShell, essential commands, and the power of Warp Pipes (|) that connect commands"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-3", "terminal", "bash", "powershell", "cli"]
---

# Level 3-2 -- The Command Console: Terminal

<div class="docs-hero">
  <img src="/super-agentic-devops-world/img/docs/3-2-terminal.png" alt="Level 3-2 -- The Command Console: Terminal" />
</div>


---

## Change Log

| Version | Date       | Author                                     | Description                   |
|---------|------------|--------------------------------------------|-------------------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation (Mario Edition)|

---

## Table of Contents

- [Prologue: The Secret Menu](#prologue-the-secret-menu)
- [1. What Is the Terminal?](#1-what-is-the-terminal)
  - [1.1 The Interface Before the Interface](#11-the-interface-before-the-interface)
  - [1.2 Terminal vs GUI: Control vs Button](#12-terminal-vs-gui-control-vs-button)
  - [1.3 Why Does Every Developer Need the Terminal?](#13-why-does-every-developer-need-the-terminal)
- [2. Shells: The Different Controllers](#2-shells-the-different-controllers)
  - [2.1 Bash -- The Classic Controller](#21-bash----the-classic-controller)
  - [2.2 Zsh -- The Pro Controller](#22-zsh----the-pro-controller)
  - [2.3 PowerShell -- The Microsoft Controller](#23-powershell----the-microsoft-controller)
  - [2.4 Comparison Table: Shells](#24-comparison-table-shells)
  - [2.5 Which Shell to Choose?](#25-which-shell-to-choose)
- [3. Navigation: Walking Through the Mushroom Kingdom](#3-navigation-walking-through-the-mushroom-kingdom)
  - [3.1 pwd -- Where Am I?](#31-pwd----where-am-i)
  - [3.2 ls -- Look Around](#32-ls----look-around)
  - [3.3 cd -- Walk to a Location](#33-cd----walk-to-a-location)
  - [3.4 Absolute vs Relative Paths](#34-absolute-vs-relative-paths)
  - [3.5 Diagram: The File System as a Map](#35-diagram-the-file-system-as-a-map)
- [4. File Manipulation: Building and Destroying Blocks](#4-file-manipulation-building-and-destroying-blocks)
  - [4.1 mkdir -- Build a Block](#41-mkdir----build-a-block)
  - [4.2 touch -- Create an Item](#42-touch----create-an-item)
  - [4.3 cp -- Duplicate an Item](#43-cp----duplicate-an-item)
  - [4.4 mv -- Move/Rename an Item](#44-mv----moverename-an-item)
  - [4.5 rm -- Destroy a Block](#45-rm----destroy-a-block)
  - [4.6 Complete Table: File Manipulation](#46-complete-table-file-manipulation)
- [5. Reading Files: Investigating Content](#5-reading-files-investigating-content)
  - [5.1 cat -- Read Everything at Once](#51-cat----read-everything-at-once)
  - [5.2 head and tail -- Peek at the Beginning and End](#52-head-and-tail----peek-at-the-beginning-and-end)
  - [5.3 less -- Read Page by Page](#53-less----read-page-by-page)
  - [5.4 wc -- Count Lines, Words, Characters](#54-wc----count-lines-words-characters)
- [6. Search: Finding Hidden Secrets](#6-search-finding-hidden-secrets)
  - [6.1 grep -- The Pattern Detector](#61-grep----the-pattern-detector)
  - [6.2 find -- The Map Explorer](#62-find----the-map-explorer)
  - [6.3 which -- Where Is the Program?](#63-which----where-is-the-program)
- [7. Pipes and Redirection: Warp Pipes Connecting Commands](#7-pipes-and-redirection-warp-pipes-connecting-commands)
  - [7.1 The Pipe (|) -- The Warp Pipe of Commands](#71-the-pipe----the-warp-pipe-of-commands)
  - [7.2 Redirection (> and >>) -- Save to File](#72-redirection--and-----save-to-file)
  - [7.3 Practical Examples of Chained Pipes](#73-practical-examples-of-chained-pipes)
- [8. Permissions: Who Can Do What](#8-permissions-who-can-do-what)
  - [8.1 The Linux/macOS Permissions System](#81-the-linuxmacos-permissions-system)
  - [8.2 chmod -- Change Permissions](#82-chmod----change-permissions)
  - [8.3 sudo -- The Star Power](#83-sudo----the-star-power)
- [9. Environment Variables: Secret Settings](#9-environment-variables-secret-settings)
  - [9.1 What Are Environment Variables?](#91-what-are-environment-variables)
  - [9.2 PATH -- The Shortcut Map](#92-path----the-shortcut-map)
  - [9.3 .env Files -- The Secret Pocket](#93-env-files----the-secret-pocket)
- [10. Scripts: Automating Combos](#10-scripts-automating-combos)
  - [10.1 Your First Bash Script](#101-your-first-bash-script)
  - [10.2 Scripts with Parameters](#102-scripts-with-parameters)
  - [10.3 Conditionals and Loops](#103-conditionals-and-loops)
- [11. Essential Commands for Developers](#11-essential-commands-for-developers)
  - [11.1 Git in the Terminal](#111-git-in-the-terminal)
  - [11.2 npm/Node.js in the Terminal](#112-npmnodejs-in-the-terminal)
  - [11.3 Docker in the Terminal](#113-docker-in-the-terminal)
- [12. Pro Tips: Shortcuts and Tricks](#12-pro-tips-shortcuts-and-tricks)
  - [12.1 The 10 Time-Saving Shortcuts](#121-the-10-time-saving-shortcuts)
  - [12.2 Command History](#122-command-history)
  - [12.3 Aliases: Creating Your Own Shortcuts](#123-aliases-creating-your-own-shortcuts)
- [Summary -- What We Learned in Level 3-2](#summary----what-we-learned-in-level-3-2)
- [References](#references)

---

## Prologue: The Secret Menu

Sofia was frustrated. She knew how to click buttons, drag folders, and use menus. But every time a tutorial said "open the terminal and type...", she felt a chill. The black screen with a blinking cursor felt hostile, like a locked door to an unknown dimension.

Yoshi appeared flying and landed beside her.

*"Sofia, are you afraid of the terminal?"* Yoshi asked with a smile.

*"It feels like hacker stuff. I don't know what I'm doing in there."*

Yoshi laughed. *"You know those secret cheat menus in games? The ones you open with a button combo and suddenly have infinite powers? The terminal is EXACTLY that. It's the debug/cheat menu for your computer. While other users are limited to the buttons someone designed for them, you -- with the terminal -- have access to EVERYTHING."*

*"Everything?"*

*"Everything. Every file, every process, every setting. And more: you can COMBINE commands like fighting combos. A single command is a punch. Two commands connected by a pipe are a devastating combo. Three? Fatality."*

Sofia opened the terminal. The cursor blinked, waiting.

*"Let's start with the basics,"* said Yoshi. *"ls = look around. cd = walk. mkdir = build a block. Simple as A, B, Start."*

---

## 1. What Is the Terminal?

### 1.1 The Interface Before the Interface

Before icons, before windows, before the mouse -- the terminal existed. This is how humans communicated with computers for decades: typing text commands and receiving text responses.

The terminal is a **Command Line Interface** (CLI). Instead of clicking buttons, you **type instructions**. Instead of seeing pretty icons, you **read text responses**.

> **MARIO ANALOGY:** The terminal is the game's **debug/cheat menu**. The GUI (graphical interface) is the normal game -- beautiful, intuitive, with buttons and menus. The terminal is the mode where you type secret codes and access functions the normal game hides. In the GUI you click "Create Folder." In the terminal you type `mkdir minha-pasta` -- faster, more powerful, and with far more options.

**What the terminal is NOT:**

- It's not dangerous (unless you delete things without thinking)
- It's not just for hackers (every dev uses it daily)
- It's not hard (the basic commands are simple)
- It's not outdated (it's MORE efficient than the GUI for many tasks)

### 1.2 Terminal vs GUI: Control vs Button

| Feature | GUI (Graphical Interface) | Terminal (CLI) |
|---------|------------------------|----------------|
| **How it works** | Click buttons | Type commands |
| **Speed** | Limited by menus | Fast once learned |
| **Power** | Only what's visible | Access to EVERYTHING |
| **Automation** | Hard | Easy (scripts) |
| **Learning curve** | Low | Medium (then becomes easy) |
| **Precision** | Good for simple tasks | Excellent for complex tasks |
| **Reproducibility** | Hard to repeat | Easy (copy the command) |

> **MARIO ANALOGY:** GUI is like playing Mario with **on-screen touch buttons** -- it works, but it's limited and slow. Terminal is like playing with a **real controller** -- at first you need to learn where the buttons are, but after memorizing them, you're 10x faster and more precise.

### 1.3 Why Does Every Developer Need the Terminal?

1. **Git works in the terminal** -- commits, branches, merges
2. **npm/Node.js works in the terminal** -- installing packages, running projects
3. **Docker works in the terminal** -- containers, images, volumes
4. **Deploy works in the terminal** -- cloud CLIs (az, aws, gcloud)
5. **Automation is only possible in the terminal** -- scripts, CI/CD
6. **Advanced debugging needs the terminal** -- logs, processes, networking
7. **Servers only have a terminal** -- no GUI in the cloud
8. **Tutorials use the terminal** -- 90% of instructions are commands

**Important fact:** Production servers (where your application runs in the cloud) **have no graphical interface**. Only terminal. If you can't use a terminal, you can't manage your application in production.

---

## 2. Shells: The Different Controllers

### 2.1 Bash -- The Classic Controller

**Bash** (Bourne Again SHell) is the most widely used shell in the world. It's the default on Linux and was the default on macOS until recently.

```bash
# Bash is like the SNES controller -- classic, reliable, everyone knows it
$ echo "I am Bash!"
I am Bash!
```

**Where to find it:**
- Linux: Comes pre-installed
- macOS: Available (Zsh is now the default)
- Windows: Via WSL (Windows Subsystem for Linux) or Git Bash

**Characteristics:**
- Simple and straightforward
- Tons of documentation and tutorials
- Works on any Linux server
- Widely known scripting syntax

### 2.2 Zsh -- The Pro Controller

**Zsh** (Z Shell) is the default shell on modern macOS. It's like a turbocharged Bash with smart auto-complete, visual themes, and plugins.

```zsh
# Zsh is like the Switch Pro controller -- everything from the classic + extras
$ echo "I am Zsh!"
I am Zsh!
```

**What sets it apart:** With the **Oh My Zsh** framework, you get:
- Advanced auto-complete (type half, press Tab)
- Visual themes (your terminal looks great)
- Plugins for Git, Docker, Node, etc.
- Smart history

### 2.3 PowerShell -- The Microsoft Controller

**PowerShell** is Microsoft's shell. Unlike Bash/Zsh, it works with **objects** instead of plain text.

```powershell
# PowerShell is like the Xbox controller -- Microsoft ecosystem
PS> Write-Output "I am PowerShell!"
I am PowerShell!
```

**What sets it apart:**
- Native on Windows
- Integrated with Azure and Microsoft 365
- Descriptive cmdlets (Get-Process, Set-Location)
- Works with objects (more structured than text)

### 2.4 Comparison Table: Shells

| Feature | Bash | Zsh | PowerShell |
|---------|------|-----|-----------|
| **Default system** | Linux | macOS | Windows |
| **Data type** | Text | Text | Objects |
| **Auto-complete** | Basic | Excellent | Good |
| **Plugins** | Few | Many (Oh My Zsh) | Modules |
| **Scripts** | .sh | .zsh | .ps1 |
| **Server usage** | Dominant | Rare | Windows Server |
| **Learning curve** | Low | Low | Medium |
| **Mario Analogy** | SNES Controller | Switch Pro Controller | Xbox Controller |

### 2.5 Which Shell to Choose?

**Recommendation for beginners:**
- **macOS:** Use Zsh (already the default) + install Oh My Zsh
- **Windows:** Install WSL2 + use Bash/Zsh inside Linux
- **Linux:** Use Bash (comes built-in) or install Zsh

**Golden rule:** Learn Bash first. The basic commands (ls, cd, mkdir, etc.) work in both Bash AND Zsh. PowerShell has different commands, but many aliases that mimic Bash.

---

## 3. Navigation: Walking Through the Mushroom Kingdom

Your computer's file system is like the **Mushroom Kingdom map**. It has folders (worlds), subfolders (levels), and files (items). Navigating means walking through this map.

### 3.1 pwd -- Where Am I?

`pwd` (**P**rint **W**orking **D**irectory) shows where you are right now.

```bash
$ pwd
/home/sofia/projetos

# Analogy: You pressed SELECT and the map showed your position
# You are in the "home" world, in the "sofia" kingdom, in the "projetos" level
```

> **MARIO ANALOGY:** `pwd` is like **opening the map** in the game. You see exactly which world and level you're in. Before walking anywhere, it's always good to know where you are.

### 3.2 ls -- Look Around

`ls` (**L**i**S**t) shows what exists where you are.

```bash
$ ls
README.md  package.json  src/  node_modules/  .gitignore

# Analogy: You looked around and saw the items and available paths
```

**Useful variations:**

```bash
# ls -la = full view (hidden items + details)
$ ls -la
total 48
drwxr-xr-x   8 sofia  staff   256 Mar 18 10:00 .
drwxr-xr-x   5 sofia  staff   160 Mar 17 09:00 ..
-rw-r--r--   1 sofia  staff    40 Mar 18 10:00 .gitignore    # hidden item!
-rw-r--r--   1 sofia  staff   890 Mar 18 10:00 README.md
-rw-r--r--   1 sofia  staff  1200 Mar 18 10:00 package.json
drwxr-xr-x  12 sofia  staff   384 Mar 18 10:00 src

# ls -lh = human-readable sizes (KB, MB instead of bytes)
$ ls -lh
-rw-r--r--  1 sofia  staff   890B Mar 18 10:00 README.md
-rw-r--r--  1 sofia  staff   1.2K Mar 18 10:00 package.json
```

> **MARIO ANALOGY:** `ls` is like **looking around in the level**. You see the blocks, coins, pipes, and enemies. `ls -la` is looking with a magnifying glass -- it reveals hidden items (hidden files like `.gitignore`) that are normally invisible.

### 3.3 cd -- Walk to a Location

`cd` (**C**hange **D**irectory) moves you to another folder.

```bash
# Enter a folder (walk to a level)
$ cd src
$ pwd
/home/sofia/projetos/src

# Go back one folder (return to the world map)
$ cd ..
$ pwd
/home/sofia/projetos

# Go back to Home (teleport to start)
$ cd ~
$ pwd
/home/sofia

# Go anywhere (absolute path)
$ cd /home/sofia/projetos/src/components
```

> **MARIO ANALOGY:** `cd` is like **walking on the map**. `cd folder` = enter a level. `cd ..` = return to the world map. `cd ~` = go back to the starting castle. `cd /full/path` = warp pipe directly to any point on the map.

**Pro tip:** Use **Tab** to auto-complete folder names. Start typing and press Tab:

```bash
$ cd pro[TAB]
$ cd projetos/    # auto-completes!
```

### 3.4 Absolute vs Relative Paths

**Absolute Path** = complete address from the root:
```bash
$ cd /home/sofia/projetos/meu-app/src
# It's like giving the full address: "Mushroom Kingdom > World 3 > Level 2 > Secret Area"
```

**Relative Path** = address from where you are:
```bash
$ cd src/components
# It's like saying: "From where I am, go to src, then components"
```

**Path shortcuts:**

| Shortcut | Meaning | Mario Analogy |
|----------|---------|---------------|
| `.` | Current folder | Where you are now |
| `..` | Parent folder (above) | Go back one level on the map |
| `~` | User's Home folder | Starting castle |
| `/` | System root | The entire Mushroom Kingdom |
| `-` | Previous folder | Go back to where you were |

### 3.5 Diagram: The File System as a Map

```
/ (root -- The entire Mushroom Kingdom)
├── home/
│   └── sofia/ (~  -- Your castle)
│       ├── projetos/
│       │   ├── todo-app/          -- Main project
│       │   │   ├── src/           -- Source code
│       │   │   │   ├── components/ -- Sky levels
│       │   │   │   ├── pages/      -- Worlds
│       │   │   │   └── utils/      -- Useful items
│       │   │   ├── package.json   -- Inventory
│       │   │   └── .gitignore     -- Hidden items list
│       │   └── portfolio/         -- Second project
│       ├── Downloads/             -- Item shop
│       └── .bashrc                -- Secret settings
├── usr/
│   └── bin/                       -- Installed tools
├── tmp/                           -- Temporary items
└── etc/                           -- System rules
```

---

## 4. File Manipulation: Building and Destroying Blocks

### 4.1 mkdir -- Build a Block

`mkdir` (**M**a**K**e **DIR**ectory) creates folders.

```bash
# Create a folder
$ mkdir meu-projeto

# Create nested folders at once (-p = parents)
$ mkdir -p meu-projeto/src/components

# Analogy: Build a block. With -p, build an entire tower of blocks.
```

> **MARIO ANALOGY:** `mkdir` is like **building a block** in the level editor. You create structure to organize your level. `mkdir -p` is building an entire staircase at once -- it creates all intermediate blocks automatically.

### 4.2 touch -- Create an Item

`touch` creates empty files.

```bash
# Create a file
$ touch index.html

# Create multiple files at once
$ touch style.css script.js README.md

# Analogy: Place empty items (coins, "?" blocks) ready to fill
```

### 4.3 cp -- Duplicate an Item

`cp` (**C**o**P**y) copies files or folders.

```bash
# Copy file
$ cp original.txt copia.txt

# Copy entire folder (-r = recursive)
$ cp -r pasta-original/ pasta-copia/

# Analogy: Duplicate a block. The original stays where it is.
```

### 4.4 mv -- Move/Rename an Item

`mv` (**M**o**V**e) moves OR renames.

```bash
# Move file to another folder
$ mv arquivo.txt pasta/

# Rename file (move to the same place with a different name)
$ mv nome-velho.txt nome-novo.txt

# Analogy: Drag a block to another position in the level
```

### 4.5 rm -- Destroy a Block

`rm` (**R**e**M**ove) deletes files and folders. **CAUTION: there's no recycle bin in the terminal!**

```bash
# Delete file
$ rm arquivo-inutil.txt

# Delete folder and all contents (-r = recursive, -f = force)
$ rm -rf pasta-inteira/

# DANGER: NEVER do this
$ rm -rf /    # This DESTROYS the entire system. NEVER.
```

> **MARIO ANALOGY:** `rm` is like **permanently destroying a block**. Unlike the game, there's no "undo." The block is gone forever. `rm -rf /` is like destroying the entire Mushroom Kingdom -- permanent Game Over. **ALWAYS** think twice before using `rm`.

**Safety tip:** Before deleting, use `ls` to see what's in the folder. Better to check than to regret.

### 4.6 Complete Table: File Manipulation

| Command | What It Does | Mario Analogy | Example |
|---------|-------------|---------------|---------|
| `mkdir` | Creates folder | Build block | `mkdir src` |
| `mkdir -p` | Creates nested folders | Tower of blocks | `mkdir -p a/b/c` |
| `touch` | Creates empty file | Place empty item | `touch app.js` |
| `cp` | Copies | Duplicate block | `cp a.txt b.txt` |
| `cp -r` | Copies folder | Duplicate world | `cp -r src/ backup/` |
| `mv` | Moves/Renames | Drag block | `mv old.js new.js` |
| `rm` | Deletes file | Destroy item | `rm temp.txt` |
| `rm -rf` | Deletes entire folder | Destroy world | `rm -rf build/` |
| `rmdir` | Deletes empty folder | Destroy empty block | `rmdir pasta-vazia/` |

---

## 5. Reading Files: Investigating Content

### 5.1 cat -- Read Everything at Once

`cat` (**C**onc**AT**enate) shows the entire content of a file.

```bash
$ cat package.json
{
  "name": "todo-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  }
}

# Analogy: Open a chest and see all the contents at once
```

**When to use:** Small files (up to 50 lines). For large files, use `less`.

### 5.2 head and tail -- Peek at the Beginning and End

```bash
# See the first 10 lines
$ head arquivo.txt

# See the first 5 lines
$ head -n 5 arquivo.txt

# See the last 10 lines
$ tail arquivo.txt

# See the last 20 lines
$ tail -n 20 arquivo.txt

# SUPERPOWER: Watch logs in real time (-f = follow)
$ tail -f logs/app.log
# Shows new lines as they appear! Perfect for debugging.
```

> **MARIO ANALOGY:** `head` is like peeking at the **beginning of a level** before entering. `tail` is like seeing the **end** (where's the boss?). `tail -f` is like having a **live camera** showing what's happening in the level in real time.

### 5.3 less -- Read Page by Page

```bash
$ less arquivo-grande.txt

# Inside less:
# Space    = next page
# b        = previous page
# /word    = search for "word"
# q        = quit
```

### 5.4 wc -- Count Lines, Words, Characters

```bash
$ wc arquivo.txt
  100   450  3200 arquivo.txt
# 100 lines, 450 words, 3200 characters

# Lines only
$ wc -l arquivo.txt
100 arquivo.txt

# Count files in a folder
$ ls | wc -l
15
```

---

## 6. Search: Finding Hidden Secrets

### 6.1 grep -- The Pattern Detector

`grep` (**G**lobal **R**egular **E**xpression **P**rint) searches for text inside files. It's the most powerful command for finding things.

```bash
# Search for the word "error" in a file
$ grep "error" logs/app.log

# Search in all files in a folder (-r = recursive)
$ grep -r "TODO" src/

# Search ignoring case (-i)
$ grep -ri "password" .

# Search and show line number (-n)
$ grep -rn "function" src/*.js

# Search and count occurrences (-c)
$ grep -c "import" src/App.tsx
12
```

> **MARIO ANALOGY:** `grep` is like the **secret block detector**. You know something is hidden but don't know where. `grep` scans the entire level and marks exactly where it found what you're looking for. `grep -r "bug"` is like asking: "show me every hidden bug in the entire kingdom."

**Practical examples for devs:**

```bash
# Find all TODOs in the project
$ grep -rn "TODO" src/

# Find where a function is used
$ grep -rn "handleSubmit" src/

# Find imports of a package
$ grep -rn "from 'react'" src/

# Find environment variables being used
$ grep -rn "process.env" src/
```

### 6.2 find -- The Map Explorer

`find` searches for **files and folders** by name, type, size, date, etc.

```bash
# Find all .tsx files in the src folder
$ find src -name "*.tsx"

# Find all files modified in the last 24 hours
$ find . -mtime -1

# Find files larger than 1MB
$ find . -size +1M

# Find and delete all .log files (CAUTION!)
$ find . -name "*.log" -delete
```

> **MARIO ANALOGY:** `grep` searches for **content inside blocks** (text inside files). `find` searches for **the blocks themselves** (files by name, type, size). Use `grep` for "what's inside?" and `find` for "where is it?".

### 6.3 which -- Where Is the Program?

```bash
# Where is Node.js installed?
$ which node
/usr/local/bin/node

# Where is Git?
$ which git
/usr/bin/git

# Is the program installed?
$ which docker
/usr/local/bin/docker
```

---

## 7. Pipes and Redirection: Warp Pipes Connecting Commands

### 7.1 The Pipe (|) -- The Warp Pipe of Commands

The **pipe** (`|`) is the most powerful concept in the terminal. It takes the **output of one command** and sends it as **input to another command**. Exactly like a **Warp Pipe** in Mario: you enter one pipe and come out somewhere else.

```bash
# Without pipe (two separate commands)
$ ls -la           # List all files
$ grep ".tsx"      # Search for .tsx (but search in what?)

# With pipe (connected by the Warp Pipe!)
$ ls -la | grep ".tsx"
# ls lists everything → pipe sends the list → grep filters only .tsx
```

> **MARIO ANALOGY:** The pipe `|` is literally a **green Warp Pipe**. Mario (data) enters through the top opening (output of the first command) and exits through the bottom opening (input of the second command). You can chain as many pipes as you want -- like an underground pipe network transporting Mario throughout the entire level.

**Progressive examples:**

```bash
# 1 pipe: List processes and filter for node
$ ps aux | grep node

# 2 pipes: List, filter, and count
$ ps aux | grep node | wc -l

# 3 pipes: Search, filter, sort, and get top 5
$ grep -r "import" src/ | grep ".tsx" | sort | head -5

# Complete pipe in a dev's daily routine:
$ git log --oneline | head -10
# Shows the 10 most recent commits cleanly
```

### 7.2 Redirection (> and >>) -- Save to File

```bash
# > saves to file (OVERWRITES)
$ echo "Hello World" > hello.txt

# >> appends to the end (APPEND)
$ echo "Another line" >> hello.txt

# Save command output to file
$ ls -la > lista-arquivos.txt

# Save errors to a separate file
$ npm build 2> erros.log

# Save everything (output + errors) to one file
$ npm build &> build-completo.log
```

> **MARIO ANALOGY:** `>` is like a **Warp Pipe that leads to a chest** -- everything that comes out of the command is stored in the file. `>>` is a pipe that **adds to the chest** without erasing what was already there. `>` alone **empties the chest first**.

### 7.3 Practical Examples of Chained Pipes

```bash
# Count how many TypeScript files exist in the project
$ find . -name "*.ts" -o -name "*.tsx" | wc -l

# See which packages are installed and search for a specific one
$ npm list | grep react

# Find the 5 largest files in the project
$ find . -type f -exec du -h {} + | sort -rh | head -5

# See who contributed the most (commits by author)
$ git log --format='%an' | sort | uniq -c | sort -rn

# Search for TODOs and organize by file
$ grep -rn "TODO" src/ | sort

# Monitor logs filtering only errors
$ tail -f app.log | grep "ERROR"
```

---

## 8. Permissions: Who Can Do What

### 8.1 The Linux/macOS Permissions System

Each file has three types of permissions for three groups of users:

```
-rwxr-xr--  1  sofia  staff  arquivo.sh
│├─┤├─┤├─┤
│ │   │  └── Others (everyone else): r-- (read only)
│ │   └───── Group: r-x (read + execute)
│ └───────── Owner: rwx (read + write + execute)
└─────────── Type (- = file, d = directory)
```

| Letter | Permission | Number | Mario Analogy |
|--------|-----------|--------|---------------|
| `r` | Read | 4 | See the level |
| `w` | Write | 2 | Modify the level |
| `x` | Execute | 1 | Play the level |
| `-` | No permission | 0 | Locked level |

### 8.2 chmod -- Change Permissions

```bash
# Give execute permission to the owner
$ chmod u+x script.sh

# Give all permissions to the owner (rwx = 7)
$ chmod 755 script.sh
# 7 = owner (rwx), 5 = group (r-x), 5 = others (r-x)

# Make file read-only
$ chmod 444 importante.txt
```

**Common number table:**

| Number | Permission | Typical Use |
|--------|-----------|-----------|
| `755` | rwxr-xr-x | Executable scripts |
| `644` | rw-r--r-- | Normal files |
| `700` | rwx------ | Private files |
| `600` | rw------- | SSH keys, .env |

### 8.3 sudo -- The Star Power

`sudo` (**S**uper **U**ser **DO**) runs a command as administrator. It's the **Star Power** of the terminal.

```bash
# Install program (requires admin permission)
$ sudo apt install docker
[sudo] password for sofia: ****

# Edit system file
$ sudo nano /etc/hosts
```

> **MARIO ANALOGY:** `sudo` is like grabbing the **Star** (invincibility star). Temporarily, you have absolute power over the system. You can go anywhere, do anything. But just like the Star, use it with CARE -- absolute power means you can absolutely destroy things.

**Security rule:** Never use `sudo` without understanding what the command does. It's like using the Star to run through the level without looking -- you might knock down things you shouldn't.

---

## 9. Environment Variables: Secret Settings

### 9.1 What Are Environment Variables?

Environment variables are **settings that the system and its programs consult**. They're like the **hidden rules** of the game that affect behavior without you seeing them.

```bash
# View an environment variable
$ echo $HOME
/home/sofia

$ echo $USER
sofia

# View ALL environment variables
$ env

# Create a temporary variable
$ export MEU_NOME="Sofia"
$ echo $MEU_NOME
Sofia
```

### 9.2 PATH -- The Shortcut Map

The `PATH` variable is the most important one. It tells the terminal **where to look for programs**.

```bash
$ echo $PATH
/usr/local/bin:/usr/bin:/bin:/home/sofia/.local/bin

# The terminal looks for programs in these folders, in order:
# 1. /usr/local/bin
# 2. /usr/bin
# 3. /bin
# 4. /home/sofia/.local/bin
```

> **MARIO ANALOGY:** `PATH` is like the **Warp Zone map**. When you type `node`, the terminal doesn't know where `node` is. It checks the `PATH` and looks in each location on the list until it finds it. If `node` isn't in any `PATH` folder, the terminal says "command not found" -- like trying to enter a Warp Zone that doesn't exist on the map.

### 9.3 .env Files -- The Secret Pocket

`.env` files store sensitive settings (passwords, API keys, database URLs):

```bash
# .env file
DATABASE_URL=postgresql://user:senha@localhost:5432/meubanco
API_KEY=sk-abc123def456
SECRET_KEY=minha-chave-super-secreta
NODE_ENV=development
```

**GOLDEN RULE:** `.env` files NEVER go into Git. Always add to `.gitignore`:

```bash
$ echo ".env" >> .gitignore
```

> **MARIO ANALOGY:** The `.env` is Mario's **secret pocket**. It stores castle keys, secret door passwords, and access credentials. You NEVER show the pocket's contents to anyone (never commit the `.env`). If someone steals your keys, they can enter all your castles.

---

## 10. Scripts: Automating Combos

### 10.1 Your First Bash Script

A script is a sequence of commands saved in a file. Instead of typing 10 commands every time, you run 1 script.

```bash
#!/bin/bash
# setup-projeto.sh -- Sets up a new project

echo "Creating project structure..."
mkdir -p src/{components,pages,utils}
mkdir -p tests
mkdir -p docs

echo "Creating initial files..."
touch src/index.ts
touch src/components/.gitkeep
touch tests/.gitkeep
touch README.md
touch .gitignore
touch .env.example

echo "Initializing Git..."
git init
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore

echo "Project created successfully!"
```

To run:

```bash
$ chmod +x setup-projeto.sh    # Give execute permission
$ ./setup-projeto.sh           # Run the script
```

> **MARIO ANALOGY:** A script is like **recording a button combo** and then executing it all with a single button press. Instead of pressing Up, Up, Down, Down, Left, Right, A, B, Start... you press one button and the combo executes on its own. The more combos you record, the less repetitive work you have.

### 10.2 Scripts with Parameters

```bash
#!/bin/bash
# criar-componente.sh -- Creates a React component

NOME=$1  # First parameter

if [ -z "$NOME" ]; then
    echo "Usage: ./criar-componente.sh ComponentName"
    exit 1
fi

mkdir -p "src/components/$NOME"

cat > "src/components/$NOME/$NOME.tsx" << EOF
import React from 'react';

interface ${NOME}Props {
  // props here
}

export const $NOME: React.FC<${NOME}Props> = () => {
  return (
    <div>
      <h1>$NOME</h1>
    </div>
  );
};
EOF

cat > "src/components/$NOME/$NOME.test.tsx" << EOF
import { render, screen } from '@testing-library/react';
import { $NOME } from './$NOME';

describe('$NOME', () => {
  it('should render correctly', () => {
    render(<$NOME />);
    expect(screen.getByText('$NOME')).toBeInTheDocument();
  });
});
EOF

echo "Component $NOME created successfully!"
```

### 10.3 Conditionals and Loops

```bash
#!/bin/bash
# verificar-projeto.sh -- Checks if the project is healthy

echo "Checking project..."

# Conditional: check if node_modules exists
if [ -d "node_modules" ]; then
    echo "node_modules found"
else
    echo "node_modules NOT found. Running npm install..."
    npm install
fi

# Loop: check each required file
ARQUIVOS=("package.json" "tsconfig.json" ".gitignore" "README.md")

for arquivo in "${ARQUIVOS[@]}"; do
    if [ -f "$arquivo" ]; then
        echo "[OK] $arquivo found"
    else
        echo "[MISSING] $arquivo not found!"
    fi
done

# Check if Git is initialized
if [ -d ".git" ]; then
    echo "[OK] Git initialized"
    echo "Current branch: $(git branch --show-current)"
else
    echo "[MISSING] Git not initialized!"
fi

echo "Check complete!"
```

---

## 11. Essential Commands for Developers

### 11.1 Git in the Terminal

```bash
# Daily Git workflow
$ git status                    # See what changed
$ git add .                     # Add everything to staging
$ git commit -m "feat: add login page"  # Save snapshot
$ git push                      # Send to GitHub
$ git pull                      # Download updates
$ git log --oneline -10         # See last 10 commits
$ git branch                    # See branches
$ git checkout -b nova-feature  # Create and switch to branch
```

### 11.2 npm/Node.js in the Terminal

```bash
# Node.js project management
$ npm init -y                   # Create package.json
$ npm install react             # Install package
$ npm install -D jest           # Install as dev dependency
$ npm run dev                   # Run development script
$ npm run build                 # Compile for production
$ npm test                      # Run tests
$ npx create-next-app@latest    # Execute without installing globally
```

### 11.3 Docker in the Terminal

```bash
# Essential Docker commands (preview of Level 3-3!)
$ docker build -t meu-app .     # Build image
$ docker run -p 3000:3000 meu-app  # Run container
$ docker ps                     # See running containers
$ docker stop <id>              # Stop container
$ docker-compose up             # Start all services
$ docker-compose down           # Shut down all services
```

---

## 12. Pro Tips: Shortcuts and Tricks

### 12.1 The 10 Time-Saving Shortcuts

| Shortcut | What It Does | Time Saved |
|----------|-------------|-----------|
| `Tab` | Auto-completes | 50% of typing |
| `Ctrl+C` | Cancels running command | Saves from infinite wait |
| `Ctrl+L` | Clears the screen | Visual organization |
| `Ctrl+R` | Search history | No need to retype |
| `Ctrl+A` | Go to beginning of line | Quick navigation |
| `Ctrl+E` | Go to end of line | Quick navigation |
| `Ctrl+W` | Delete previous word | Quick editing |
| `Ctrl+U` | Delete entire line | Quick reset |
| `!!` | Repeat last command | Re-execution |
| `sudo !!` | Repeat with sudo | Quick permission fix |

### 12.2 Command History

```bash
# View full history
$ history

# Search history (interactive)
$ Ctrl+R  # type part of the command

# Re-execute specific command
$ !42     # executes command number 42 from history

# See last 20 commands
$ history | tail -20
```

### 12.3 Aliases: Creating Your Own Shortcuts

Aliases are custom shortcuts. Add to your `~/.bashrc` or `~/.zshrc`:

```bash
# Useful aliases for devs
alias ll='ls -la'
alias gs='git status'
alias gc='git commit -m'
alias gp='git push'
alias gl='git log --oneline -20'
alias dev='npm run dev'
alias build='npm run build'
alias dc='docker-compose'
alias dcu='docker-compose up -d'
alias dcd='docker-compose down'

# Creative aliases
alias please='sudo'                # please apt install docker
alias oops='git reset --soft HEAD~1'  # undo last commit (keeping changes)
```

After adding, activate:

```bash
$ source ~/.zshrc    # or ~/.bashrc
```

> **MARIO ANALOGY:** Aliases are like **remapping the controller buttons**. Instead of pressing L+R+A+B for a combo, you map everything to a single button. `gs` instead of `git status`. `dcu` instead of `docker-compose up -d`. Your controller, your rules.

---

## Summary -- What We Learned in Level 3-2

| Concept | Command(s) | Mario Analogy |
|---------|-----------|---------------|
| Terminal | CLI | Debug/cheat menu |
| Shell | Bash, Zsh, PowerShell | Types of controllers |
| Where am I | `pwd` | Open map |
| Look around | `ls` | Observe the level |
| Walk | `cd` | Move on the map |
| Build block | `mkdir` | Create structure |
| Create item | `touch` | Place empty item |
| Copy | `cp` | Duplicate block |
| Move | `mv` | Drag block |
| Destroy | `rm` | Destroy permanently |
| Read content | `cat`, `less`, `head`, `tail` | Open chest |
| Search text | `grep` | Secret detector |
| Search file | `find` | Map explorer |
| Pipe (`\|`) | Connect commands | Warp Pipe between commands |
| Permissions | `chmod`, `sudo` | Keys and Star Power |
| Variables | `export`, `.env` | Secret settings |
| Scripts | `.sh` | Automated combos |
| Aliases | `alias` | Remap controller |

**The big lesson:** The terminal is not your enemy -- it's your superpower. Every command you learn is a new button on your controller. And the more buttons you master, the more devastating combos you can execute. No real developer survives without the terminal. Embrace it.

---

## References

- [Bash Reference Manual -- GNU](https://www.gnu.org/software/bash/manual/bash.html)
- [Linux Command Line Basics -- Ubuntu](https://ubuntu.com/tutorials/command-line-for-beginners)
- [The Linux Command Line -- William Shotts (free book)](https://linuxcommand.org/tlcl.php)
- [Oh My Zsh -- Framework for Zsh](https://ohmyz.sh/)
- [PowerShell Documentation -- Microsoft](https://learn.microsoft.com/pt-br/powershell/)
- [ExplainShell -- Explains any command](https://explainshell.com/)
- [tldr pages -- Simplified command documentation](https://tldr.sh/)
- [Bash Scripting Tutorial -- Ryan's Tutorials](https://ryanstutorials.net/bash-scripting-tutorial/)
- [WSL Documentation -- Microsoft](https://learn.microsoft.com/pt-br/windows/wsl/)
- [Terminal Tips -- VS Code Docs](https://code.visualstudio.com/docs/terminal/basics)

---

*Level 3-2 complete! You've mastered the Terminal -- the secret menu that transforms anyone into a power user. In the next level, we'll learn to package entire applications with Docker -- the developer's magic lunchbox.*

---

<div align="center">

⬅️ [Previous: Level 3-1: Skill Tree](3-1-arvore_habilidades.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 3-3: Docker](3-3-docker.md)

</div>
