---
title: "Level 1-1 — Pressing START: VS Code, the Game Console"
description: "First contact with VS Code — the console where the entire development adventure takes place."
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-1", "vs-code", "fundamentals"]
---

# Level 1-1 — Pressing START: VS Code, the Game Console

---

## Change Log

| Version | Date       | Author       | Description                     |
|---------|------------|--------------|-------------------------------|
| 1.0.0   | 2026-03-18 | Paula Silva  | Initial creation (Mario Edition)|

---

## Table of Contents

- [Prologue — Pressing START](#prologue--pressing-start)
- [1. What Is Code?](#1-what-is-code)
  - [1.1 The Language of the Mushroom Kingdom](#11-the-language-of-the-mushroom-kingdom)
  - [1.2 Code Is Like Level Instructions](#12-code-is-like-level-instructions)
  - [1.3 From Text to Program: How the Magic Works](#13-from-text-to-program-how-the-magic-works)
- [2. What Is VS Code?](#2-what-is-vs-code)
  - [2.1 The Game Console](#21-the-game-console)
  - [2.2 Why VS Code?](#22-why-vs-code)
  - [2.3 Table: VS Code Parts vs Console Parts](#23-table-vs-code-parts-vs-console-parts)
- [3. Installing VS Code — Turning On the Console](#3-installing-vs-code--turning-on-the-console)
  - [3.1 Step by Step: Windows](#31-step-by-step-windows)
  - [3.2 Step by Step: macOS](#32-step-by-step-macos)
  - [3.3 Step by Step: Linux](#33-step-by-step-linux)
  - [3.4 Verifying the Installation](#34-verifying-the-installation)
- [4. Getting to Know the Screen — The Main Menu](#4-getting-to-know-the-screen--the-main-menu)
  - [4.1 Sidebar — The Navigation Menu](#41-sidebar--the-navigation-menu)
  - [4.2 Central Editor — The Game Screen](#42-central-editor--the-game-screen)
  - [4.3 Status Bar — The Game HUD](#43-status-bar--the-game-hud)
  - [4.4 Command Palette — The Cheat Menu](#44-command-palette--the-cheat-menu)
  - [4.5 Visual Map: VS Code Anatomy](#45-visual-map-vs-code-anatomy)
- [5. Extensions — Controller Accessories](#5-extensions--controller-accessories)
  - [5.1 What Are Extensions?](#51-what-are-extensions)
  - [5.2 Essential Extensions for Beginners](#52-essential-extensions-for-beginners)
  - [5.3 How to Install Extensions](#53-how-to-install-extensions)
  - [5.4 GitHub Copilot — Your First Companion](#54-github-copilot--your-first-companion)
- [6. The Integrated Terminal — The Debug Menu](#6-the-integrated-terminal--the-debug-menu)
  - [6.1 What Is the Terminal?](#61-what-is-the-terminal)
  - [6.2 Opening the Terminal](#62-opening-the-terminal)
  - [6.3 Basic Commands — Your First Cheats](#63-basic-commands--your-first-cheats)
  - [6.4 Table: Terminal Commands vs Game Actions](#64-table-terminal-commands-vs-game-actions)
- [7. Your First File — Level 1-1 Complete](#7-your-first-file--level-1-1-complete)
  - [7.1 Creating a Folder (Your First World)](#71-creating-a-folder-your-first-world)
  - [7.2 Creating a File (Your First Level)](#72-creating-a-file-your-first-level)
  - [7.3 Writing Code (Building the Level)](#73-writing-code-building-the-level)
  - [7.4 Saving (Manual Save Game)](#74-saving-manual-save-game)
  - [7.5 Running (Pressing Play)](#75-running-pressing-play)
- [8. Keyboard Shortcuts — Secret Combos](#8-keyboard-shortcuts--secret-combos)
  - [8.1 The 10 Shortcuts Every Player Needs](#81-the-10-shortcuts-every-player-needs)
  - [8.2 Combo Table](#82-combo-table)
- [9. Basic Settings — Adjusting the Console](#9-basic-settings--adjusting-the-console)
  - [9.1 Color Theme (Console Skin)](#91-color-theme-console-skin)
  - [9.2 Font Size](#92-font-size)
  - [9.3 Auto Save — Automatic Saving](#93-auto-save--automatic-saving)
- [Summary — What We Learned in Level 1-1](#summary--what-we-learned-in-level-1-1)
- [References](#references)

---

## Prologue — Pressing START

Sofia looked at the screen. A cursor blinked patiently, waiting. It was like that moment in Super Mario Bros when the title screen appears and the game waits for you to press START. Nothing happens until you take the first step.

In the software development world, that START button has a name: **Visual Studio Code** — or simply **VS Code**. Just as you need a console (Nintendo, PlayStation, Xbox) to play Mario, you need a place to write, see, and run code. VS Code is that place.

"But I've never written code in my life," thought Sofia.

Perfect. Nobody is born knowing how to jump on Goombas. In the original Mario's World 1-1, the game teaches you to play *by playing* — the first Goomba comes walking toward you and you instinctively figure out that you need to jump. No manual. No tutorial. The level design teaches.

This level works the same way. By the end of it, you will have:

- Installed VS Code (turned on the console)
- Explored the interface (understood the controller buttons)
- Installed extensions (connected accessories to the controller)
- Used the terminal (accessed the debug menu)
- Created and run your first code file (completed your first level)

Press START. Let's begin.

---

## 1. What Is Code?

### 1.1 The Language of the Mushroom Kingdom

Before talking about VS Code, we need to answer the most basic question of all: **what is code?**

Code is a set of **written instructions** that tell the computer what to do. Just as a musical score tells a musician which notes to play, code tells the computer which actions to execute.

> **MARIO ANALOGY:** Imagine you could write instructions for Mario instead of controlling him with a joystick. Instead of pressing buttons, you would write:
>
> ```
> mario.walk(right, 5)
> mario.jump()
> mario.collectCoin()
> mario.enterPipe()
> ```
>
> That is code. These are instructions that describe actions. The computer reads those instructions and executes them, one by one, just as Mario would execute each command.

### 1.2 Code Is Like Level Instructions

In Mario, every level was built by someone. Someone decided: "here goes a block, there goes a Goomba, over there goes a coin." That person wrote *instructions* that the game interprets to build the level.

When you write code, you're doing the same thing — building something that other people will use. It could be:

- A **website** (like a level that players visit)
- An **application** (like a complete game)
- An **automation** (like a Lakitu that does things automatically)
- An **API** (like a pipe that connects two worlds)

### 1.3 From Text to Program: How the Magic Works

Code is written in **plain text**. It's not a drawing, it's not a diagram — it's words and symbols that follow specific rules (the **syntax** of the programming language).

The process works like this:

```
You write code (text) → Computer reads the text → Computer executes the instructions → Result appears on screen
```

> **MARIO ANALOGY:** It's like writing a script for a theater play. You write the lines and actions on paper (code). The actors read the script (the computer interprets). The actors perform the actions on stage (the program runs). The audience sees the result (the user interacts with the program).

There are many programming languages — Python, JavaScript, TypeScript, C#, Java, Go, and hundreds of others. Each has its own syntax, like different spoken languages. But they all do the same thing: give instructions to the computer.

For this journey, we'll mainly use **JavaScript/TypeScript** and **Python** — but don't worry about that now. First, let's turn on the console.

---

## 2. What Is VS Code?

### 2.1 The Game Console

**Visual Studio Code (VS Code)** is a **free code editor**, created by Microsoft, used by millions of developers worldwide. It's the most popular editor on the planet — and for good reasons.

> **MARIO ANALOGY:** VS Code is your **video game console**. Just as you need a Nintendo Switch to play Mario, you need VS Code to "play" software development. The console isn't the game itself — it's the **platform** where games run. Likewise, VS Code isn't the code itself — it's the place where you **write, edit, test, and run** code.

Without a console, you don't play. Without VS Code (or another editor), you don't develop.

### 2.2 Why VS Code?

There are other code editors (Vim, Sublime Text, Atom, JetBrains). So why VS Code?

| Reason | Explanation | Mario Analogy |
|--------|-----------|----------------|
| **Free** | Costs zero dollars | Like a console that comes for free |
| **Lightweight** | Doesn't require a powerful computer | Runs even on a handheld console |
| **Extensible** | Thousands of extensions available | Accepts hundreds of accessories and cartridges |
| **Cross-platform** | Works on Windows, Mac, and Linux | Plays on any TV |
| **Integrated terminal** | Command line inside the editor | Debug menu built into the console |
| **Integrated Git** | Native version control | Save game system comes pre-installed |
| **GitHub Copilot** | AI natively integrated | Smart companion included |
| **Community** | Millions of users, endless tutorials | The largest gaming community in the world |

### 2.3 Table: VS Code Parts vs Console Parts

| VS Code Part | What It Does | Mario Analogy |
|-------------------|-----------|----------------|
| **Editor** | Where you write code | The **game screen** — where the action happens |
| **Explorer (Sidebar)** | Shows your files and folders | The **level menu** — lists all available levels |
| **Terminal** | Executes system commands | The **debug/cheat menu** — powerful commands |
| **Source Control** | Manages Git (saves) | The **save game system** — manages your saves |
| **Extensions** | Installs additional plugins | The **accessories shop** — improves your controller |
| **Command Palette** | Searches and executes any command | The **secret menu** — accesses EVERYTHING with one shortcut |
| **Status Bar** | Shows current state information | The **HUD** (Heads-Up Display) — lives, coins, time |
| **Activity Bar** | Icons on the left side | The **controller buttons** — each opens a function |
| **Minimap** | Reduced view of the code | The **level map** — panoramic view |
| **Breadcrumbs** | Path of the current file | The **map location** — "World 1 > Level 3 > Room 2" |

---

## 3. Installing VS Code — Turning On the Console

Time to turn on the console. Installation is simple and takes less than 5 minutes.

### 3.1 Step by Step: Windows

1. Open your browser (Chrome, Edge, Firefox)
2. Go to **https://code.visualstudio.com**
3. Click the big blue button **"Download for Windows"**
4. Run the downloaded `.exe` file
5. During installation, check **all** options:
   - "Add to PATH" (important!)
   - "Register Code as an editor for supported file types"
   - "Add 'Open with Code' action to Windows Explorer"
6. Click "Install" and wait
7. Click "Finish"

> **Player Tip:** Checking "Add to PATH" is like registering your console on the Wi-Fi network — it allows other programs to find it automatically.

### 3.2 Step by Step: macOS

1. Open your browser
2. Go to **https://code.visualstudio.com**
3. Click **"Download for Mac"**
4. Open the downloaded `.zip` file
5. Drag **Visual Studio Code.app** to the **Applications** folder
6. Open VS Code from Launchpad or Applications
7. To use in the terminal: open the Command Palette (`Cmd+Shift+P`), type `shell command`, and select **"Install 'code' command in PATH"**

### 3.3 Step by Step: Linux

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install code

# Or via Snap
sudo snap install code --classic

# Fedora/RHEL
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo dnf install code
```

### 3.4 Verifying the Installation

Open a terminal (Command Prompt on Windows, Terminal on Mac/Linux) and type:

```bash
code --version
```

If a version number appears (something like `1.96.0`), congratulations — your console is on.

> **MARIO ANALOGY:** This is like turning on the console and seeing the title screen. If the title screen appeared, you're ready to play.

---

## 4. Getting to Know the Screen — The Main Menu

When you open VS Code for the first time, it can look intimidating. Many areas, many icons. But like any game menu screen, once you understand the layout, everything makes sense.

### 4.1 Sidebar — The Navigation Menu

The left sidebar is your game's **navigation menu**. It has several icons:

| Icon | Name | Function | Mario Analogy |
|------|------|--------|----------------|
| Files | **Explorer** | Shows the project file tree | Level selection menu |
| Magnifying glass | **Search** | Searches text across all files | Search for a specific item in the inventory |
| Branch | **Source Control** | Manages Git (commits, branches) | Save games menu |
| Bug | **Run & Debug** | Runs and debugs code | Debug mode — playing in slow motion |
| Blocks | **Extensions** | Installs and manages extensions | Console accessories shop |

### 4.2 Central Editor — The Game Screen

The large central space is where you write code. It's the **game screen** itself — where the action happens.

Important characteristics:

- **Tabs** at the top: each open file is a tab, like having multiple levels open at the same time
- **Line numbers** on the left: show which line you're on (like coordinates on the map)
- **Syntax highlighting**: code appears in color, with each type of element in a different color (keywords in purple, strings in green, numbers in orange). This is like the game map using colors to differentiate land, water, and lava
- **IntelliSense**: intelligent autocomplete that suggests code as you type (like the game suggesting which power to use)

### 4.3 Status Bar — The Game HUD

At the bottom of the screen, the status bar shows important information:

| Information | What It Shows | Mario Analogy |
|-----------|-------------|----------------|
| Line and Column | Cursor position (Ln 42, Col 15) | Mario's coordinates on the map |
| Language | File language (JavaScript, Python) | Which world you're playing |
| Encoding | Text format (UTF-8) | Cartridge format (NTSC, PAL) |
| Git Branch | Current branch (main, develop) | Which save slot is active |
| Errors/Warnings | Code problems | Enemies detected on radar |

### 4.4 Command Palette — The Cheat Menu

The **Command Palette** is VS Code's most powerful feature. It lets you access ANY editor function by typing its name.

To open:
- **Windows/Linux:** `Ctrl+Shift+P`
- **macOS:** `Cmd+Shift+P`

> **MARIO ANALOGY:** The Command Palette is the game's **cheat menu**. You know those secret codes that unlock powers? In VS Code, you open the Command Palette and type what you want to do — and the editor does it. Want to change the theme? Type "theme". Want to format the code? Type "format". Want to install an extension? Type "install extension". It's the shortcut to EVERYTHING.

Examples of what you can do:

```
> Preferences: Color Theme        → Change the console skin
> Terminal: Create New Terminal    → Open the debug menu
> File: New File                   → Create a new level
> Git: Clone Repository            → Download a game
> Extensions: Install Extensions   → Go to the accessories shop
```

### 4.5 Visual Map: VS Code Anatomy

```
+------------------------------------------------------------------+
|  [Menu Bar]  File  Edit  View  ...              ← Menu Bar       |
+------+-----------------------------------------------------------+
|      |  [Tab1.js]  [Tab2.py]  [Tab3.md]        ← Tabs (Levels)  |
|  A   |                                                            |
|  c   |   1 | function greetHero(name) {         ← Line           |
|  t   |   2 |   console.log("Hello, " + name);      numbers       |
|  i   |   3 |   console.log("Welcome to the");                    |
|  v   |   4 |   console.log("Mushroom Kingdom!");                 |
|  i   |   5 | }                                   ← Central       |
|  t   |   6 |                                       Editor        |
|  y   |   7 | greetHero("Sofia");                  (Game Screen)  |
|      |   8 |                                                      |
|  B   |                                                   [Mini]   |
|  a   |                                                   [map ]   |
|  r   |                                                   [    ]   |
+------+-----------------------------------------------------------+
|  [main] ✓ 0 Errors  0 Warnings    Ln 7, Col 1   JavaScript      |
|  ↑ Branch    ↑ Code health        ↑ Position    ↑ World          |
+------------------------------------------------------------------+
|  TERMINAL                                        ← Debug Menu    |
|  $ node app.js                                                    |
|  Hello, Sofia                                                     |
|  Welcome to the                                                   |
|  Mushroom Kingdom!                                                |
+------------------------------------------------------------------+
```

---

## 5. Extensions — Controller Accessories

### 5.1 What Are Extensions?

Extensions are **plugins** that add functionality to VS Code. The base editor is already powerful, but with extensions it becomes *unstoppable*.

> **MARIO ANALOGY:** Extensions are like **controller accessories** for the video game. The standard controller works fine, but if you add an ergonomic grip, a headset, a keyboard adapter — the experience improves dramatically. The console is the same, but the accessories expand what you can do with it.

### 5.2 Essential Extensions for Beginners

| Extension | What It Does | Mario Analogy | Priority |
|----------|-----------|----------------|----------|
| **Portuguese (Brazil) Language Pack** | Translates the interface to Portuguese | Change the game menu language | High |
| **GitHub Copilot** | AI that suggests code in real time | **Companion** that whispers tips during the level | High |
| **GitHub Copilot Chat** | Chat with AI inside the editor | Talk to the companion and ask for help | High |
| **Python** | Full support for Python | Cartridge that enables Python games | Medium |
| **ESLint** | Detects errors in JavaScript/TypeScript | Invisible trap detector in the level | Medium |
| **Prettier** | Formats code automatically | Auto inventory organizer | Medium |
| **GitLens** | Shows detailed Git history | Save game replay — see who did what | Medium |
| **Material Icon Theme** | Beautiful icons for file types | Skins for menu icons | Low |
| **Error Lens** | Shows errors directly on the line | Enemies are highlighted in red in the level | Medium |

### 5.3 How to Install Extensions

**Method 1 — Through the interface:**
1. Click the blocks icon in the Activity Bar (or `Ctrl+Shift+X`)
2. Type the extension name in the search bar
3. Click **Install**

**Method 2 — Through the Command Palette:**
1. Open the Command Palette (`Ctrl+Shift+P`)
2. Type `Extensions: Install Extensions`
3. Search and install

**Method 3 — Through the terminal:**
```bash
code --install-extension ms-python.python
code --install-extension GitHub.copilot
code --install-extension GitHub.copilot-chat
```

### 5.4 GitHub Copilot — Your First Companion

**GitHub Copilot** deserves special attention. It's an AI extension that works as a **smart companion** that walks alongside you throughout the entire journey.

> **MARIO ANALOGY:** Copilot is like having a **Yoshi** that walks with you through every level. He observes what you're doing, anticipates your next moves, and suggests actions. If you start jumping in a direction, Yoshi already suggests the best path. If you start writing a function, Copilot already suggests how to complete it.

What Copilot does:
- **Autocomplete** — suggests entire lines of code as you type
- **Chat** — answers questions about code directly in the editor
- **Explain** — explains code snippets you don't understand
- **Fix** — suggests fixes for errors

To use it, you need a GitHub account (we'll see that in Level 1-3) and the extension installed.

---

## 6. The Integrated Terminal — The Debug Menu

### 6.1 What Is the Terminal?

The **terminal** (also called *command line*, *console*, *shell*, or *prompt*) is a text-based interface for interacting directly with the computer. Instead of clicking buttons and menus, you **type commands**.

> **MARIO ANALOGY:** The terminal is the game's **debug/cheat menu**. While the graphical interface (editor, sidebar, menus) is the "normal" game that everyone sees, the terminal is the hidden menu where advanced players execute powerful commands. It's like accessing a special mode where you can teleport to any level, list all items, or perform actions that the graphical interface doesn't offer.

### 6.2 Opening the Terminal

Inside VS Code:
- **Shortcut:** `` Ctrl+` `` (backtick) on Windows/Linux, or `` Cmd+` `` on macOS
- **Menu:** Terminal > New Terminal
- **Command Palette:** `Terminal: Create New Terminal`

The terminal appears at the bottom of VS Code, splitting the screen with the editor.

### 6.3 Basic Commands — Your First Cheats

Here are the most basic commands you'll use from day one:

**Navigation:**
```bash
pwd                     # Shows where you are (Print Working Directory)
ls                      # Lists files in the current folder (macOS/Linux)
dir                     # Lists files in the current folder (Windows)
cd folder-name          # Enters a folder
cd ..                   # Goes back one folder
```

**File manipulation:**
```bash
mkdir my-project        # Creates a folder
touch file.js           # Creates an empty file (macOS/Linux)
cat file.js             # Shows file contents (macOS/Linux)
rm file.js              # Removes a file (be careful!)
```

**Running code:**
```bash
node file.js            # Runs JavaScript with Node.js
python file.py          # Runs Python
```

### 6.4 Table: Terminal Commands vs Game Actions

| Command | What It Does | Mario Analogy |
|---------|-----------|----------------|
| `pwd` | Shows current directory | See which world/level you're in |
| `ls` / `dir` | Lists folder contents | Open the map and see the items in the level |
| `cd folder` | Enters a folder | Enter a green pipe |
| `cd ..` | Goes back one folder | Exit the pipe and go back |
| `mkdir name` | Creates a folder | Build a new world |
| `touch file` | Creates a file | Create an empty level |
| `rm file` | Removes a file | Destroy a level (irreversible!) |
| `node file.js` | Runs JavaScript | Press PLAY on the level |
| `clear` | Clears the terminal screen | Reset the screen |
| `code .` | Opens VS Code in the current folder | Turn on the console in this world |

> **IMPORTANT WARNING:** The `rm` (remove) command is like **lava in Mario** — if you fall in, there's no coming back. Deleting a file through the terminal is permanent. There's no "recycle bin." Be very careful.

---

## 7. Your First File — Level 1-1 Complete

Now let's create your first program. This is the hands-on part — the moment you actually play the level.

### 7.1 Creating a Folder (Your First World)

Open the VS Code terminal and type:

```bash
mkdir mushroom-kingdom
cd mushroom-kingdom
code .
```

This creates a folder called `mushroom-kingdom`, enters it, and opens VS Code in that folder. A new VS Code window will appear.

> **MARIO ANALOGY:** You just created **World 1** and entered it. The empty folder is the world waiting to be filled with levels.

### 7.2 Creating a File (Your First Level)

In VS Code:
1. Click the **New File** icon in Explorer (or `Ctrl+N`)
2. Save the file as `fase1-1.js` (`Ctrl+S`)

Or through the terminal:
```bash
touch fase1-1.js
```

### 7.3 Writing Code (Building the Level)

In the `fase1-1.js` file, write the following:

```javascript
// Level 1-1: My first program
// Author: Sofia
// Date: Today!

// Greeting the player
console.log("=================================");
console.log("   WELCOME TO MUSHROOM KINGDOM    ");
console.log("=================================");
console.log("");

// Hero information
let heroName = "Sofia";
let world = 1;
let level = 1;
let coins = 0;
let lives = 3;

console.log("Hero: " + heroName);
console.log("Location: World " + world + "-" + level);
console.log("Coins: " + coins);
console.log("Lives: " + lives);
console.log("");

// Collecting coins
coins = coins + 10;
console.log(heroName + " collected 10 coins!");
console.log("Total coins: " + coins);
console.log("");

// Final message
console.log("Level 1-1 complete!");
console.log("Press START to continue...");
```

Don't worry if you don't understand everything yet. Let's explain each part:

| Line | What It Does | Mario Analogy |
|------|-----------|----------------|
| `//` | Comment — the computer ignores it | Info sign in the level (just for the player to read) |
| `console.log()` | Shows text on screen | Message that appears on the HUD |
| `let heroName = "Sofia"` | Creates a variable with a value | Store an item in the inventory |
| `coins = coins + 10` | Changes the variable's value | Collect coins and update the scoreboard |
| `+` (in strings) | Joins texts | Combine items to form a message |

### 7.4 Saving (Manual Save Game)

Save the file:
- **Windows/Linux:** `Ctrl+S`
- **macOS:** `Cmd+S`

You'll see that the white dot on the file tab disappears — this means the file is saved.

> **MARIO ANALOGY:** `Ctrl+S` is the **manual save game**. Always save before testing. In Level 1-2 (Git), you'll learn a much more powerful save system — like having a memory card with a complete history of all saves.

### 7.5 Running (Pressing Play)

Open the terminal (`` Ctrl+` ``) and run:

```bash
node fase1-1.js
```

You should see:

```
=================================
   WELCOME TO MUSHROOM KINGDOM
=================================

Hero: Sofia
Location: World 1-1
Coins: 0
Lives: 3

Sofia collected 10 coins!
Total coins: 10

Level 1-1 complete!
Press START to continue...
```

**Congratulations!** You just ran your first program. This is equivalent to completing World 1-1 in Mario — the first level, simple, but it proves you know how to press the right buttons.

> **Note:** If the `node` command doesn't work, you need to install **Node.js**. Go to https://nodejs.org and download the LTS version. Node.js is like an **emulator** — it allows your computer to "run" JavaScript programs.

---

## 8. Keyboard Shortcuts — Secret Combos

Professional Mario players use complex combos. Professional developers use keyboard shortcuts. The effect is the same: you do more in less time.

### 8.1 The 10 Shortcuts Every Player Needs

These are the shortcuts you'll use **every day**. Memorize them like you memorize the controller buttons.

### 8.2 Combo Table

| # | Combo (Windows/Linux) | Combo (macOS) | What It Does | Mario Analogy |
|---|----------------------|--------------|-----------|----------------|
| 1 | `Ctrl+S` | `Cmd+S` | Save file | Save game |
| 2 | `Ctrl+Shift+P` | `Cmd+Shift+P` | Open Command Palette | Cheat menu |
| 3 | `` Ctrl+` `` | `` Cmd+` `` | Open/close terminal | Open/close debug menu |
| 4 | `Ctrl+P` | `Cmd+P` | Find file by name | Teleport to a level |
| 5 | `Ctrl+Shift+F` | `Cmd+Shift+F` | Find text in all files | Search for an item across the entire world |
| 6 | `Ctrl+D` | `Cmd+D` | Select next occurrence | Select next identical enemy |
| 7 | `Alt+Up/Down` | `Option+Up/Down` | Move line up/down | Reposition a block in the level |
| 8 | `Ctrl+/` | `Cmd+/` | Comment/uncomment line | Disable/enable a trap |
| 9 | `Ctrl+Z` | `Cmd+Z` | Undo | Go back in time (undo) |
| 10 | `Ctrl+Shift+K` | `Cmd+Shift+K` | Delete entire line | Destroy an entire block |

> **Veteran Player Tip:** You don't need to memorize all of them now. Start with `Ctrl+S` (save), `Ctrl+Shift+P` (Command Palette), and `` Ctrl+` `` (terminal). The others will come naturally with practice — just as you don't memorize all of Mario's combos before playing, you learn them by playing.

---

## 9. Basic Settings — Adjusting the Console

Just as you adjust brightness, volume, and controller sensitivity before playing, you can adjust VS Code to be more comfortable.

### 9.1 Color Theme (Console Skin)

VS Code comes with a dark theme by default, but you can change it:

1. Open the Command Palette (`Ctrl+Shift+P`)
2. Type `Color Theme`
3. Select `Preferences: Color Theme`
4. Navigate the options with arrow keys and press Enter

Popular themes:
- **Dark+ (Default Dark)** — Standard dark (most devs use dark themes)
- **Light+ (Default Light)** — Standard light
- **One Dark Pro** — Popular dark theme (extension)
- **Dracula** — Dark theme with vibrant colors (extension)

### 9.2 Font Size

To increase or decrease the font:
- **Increase:** `Ctrl++` (Windows/Linux) or `Cmd++` (macOS)
- **Decrease:** `Ctrl+-` or `Cmd+-`
- **Reset:** `Ctrl+0` or `Cmd+0`

Or open Settings (`Ctrl+,`) and search for `Font Size`.

### 9.3 Auto Save — Automatic Saving

By default, VS Code **does not auto-save**. To enable auto save:

1. Open Settings (`Ctrl+,`)
2. Search for `Auto Save`
3. Change from `off` to `afterDelay` (saves after 1 second without typing)

> **MARIO ANALOGY:** Auto Save is like enabling the **automatic checkpoint**. Without it, if you close the game without saving, you lose your progress. With it, the game saves on its own every few seconds.

---

## Summary — What We Learned in Level 1-1

| Concept | What It Is | Mario Analogy |
|----------|---------|----------------|
| **Code** | Written instructions for the computer | Script that builds the levels |
| **VS Code** | Editor where you write code | The video game console |
| **Interface** | Layout with sidebar, editor, terminal, status bar | The game screen with HUD, map, and menus |
| **Extensions** | Plugins that add functionality | Controller accessories |
| **Terminal** | Command line inside VS Code | Debug/cheat menu |
| **Command Palette** | Shortcut to any command | Secret cheat menu |
| **Copilot** | AI that suggests code | Smart companion (Yoshi) |
| **First program** | `.js` file run with `node` | Your first completed level |
| **Shortcuts** | Key combinations for quick actions | Secret controller combos |
| **Auto Save** | Automatic saving | Automatic checkpoint |

**Checkpoint reached!** You completed Level 1-1. The console is on, the accessories are connected, and you ran your first level. In the next level (1-2), you'll learn something fundamental: how to **truly save your progress** using Git — the most powerful save game system that exists.

```
+-------------------------------------------+
|                                           |
|    LEVEL 1-1 COMPLETE!                    |
|                                           |
|    ★ VS Code installed                    |
|    ★ Interface explored                   |
|    ★ Extensions installed                 |
|    ★ Terminal mastered                    |
|    ★ First program executed              |
|                                           |
|    → Next level: 1-2 Save Game (Git)     |
|                                           |
+-------------------------------------------+
```

---

## References

- [Visual Studio Code — Official Site](https://code.visualstudio.com)
- [VS Code Docs — Getting Started](https://code.visualstudio.com/docs)
- [VS Code Keyboard Shortcuts Reference](https://code.visualstudio.com/docs/getstarted/keybindings)
- [Node.js — Official Site](https://nodejs.org)
- [GitHub Copilot — Documentation](https://docs.github.com/en/copilot)
- [VS Code Extensions Marketplace](https://marketplace.visualstudio.com/vscode)
- [VS Code Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)

---

*"It's-a me, Developer!" — Sofia, upon completing her first level.*

---

<div align="center">

🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 1-2: Git](1-2-git.md)

</div>
