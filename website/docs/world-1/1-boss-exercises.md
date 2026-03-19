---
title: "Level 1-BOSS — Boss Battle: Practical Exercises Level 1"
description: "Practical exercises covering all the fundamentals of World 1 — the boss battle against Bowser Jr."
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
tags: ["agentic-devops", "mario", "world-1", "exercises", "boss-battle", "fundamentals"]
sidebar_position: 8
format: md
---

# Level 1-BOSS — Boss Battle: Practical Exercises Level 1

---

## Change Log

| Version | Date       | Author       | Description                     |
|---------|------------|--------------|-------------------------------|
| 1.0.0   | 2026-03-18 | Paula Silva  | Initial creation (Mario Edition)|

---

## Table of Contents

- [Prologue — Bowser Jr. Awaits You](#prologue--bowser-jr-awaits-you)
- [The Rules of the Boss Battle](#the-rules-of-the-boss-battle)
- [Quest 1 — Turn On the Console (VS Code)](#quest-1--turn-on-the-console-vs-code)
- [Quest 2 — First Save Game (Git)](#quest-2--first-save-game-git)
- [Quest 3 — Join the Multiplayer Server (GitHub)](#quest-3--join-the-multiplayer-server-github)
- [Quest 4 — First Push (Git + GitHub)](#quest-4--first-push-git--github)
- [Quest 5 — Quest Board (Issues)](#quest-5--quest-board-issues)
- [Quest 6 — Parallel Universe (Branches and PR)](#quest-6--parallel-universe-branches-and-pr)
- [Quest 7 — Wake Up the Lakitu (GitHub Actions)](#quest-7--wake-up-the-lakitu-github-actions)
- [Quest 8 — Ask the Companion for Help (Copilot)](#quest-8--ask-the-companion-for-help-copilot)
- [Quest 9 — Explore the Open World (Azure)](#quest-9--explore-the-open-world-azure)
- [Quest 10 — Final Boss: The Mushroom Kingdom Project](#quest-10--final-boss-the-mushroom-kingdom-project)
- [Answer Key and Tips](#answer-key-and-tips)
- [Final Score — Rate Your Performance](#final-score--rate-your-performance)
- [References](#references)

---

## Prologue — Bowser Jr. Awaits You

Sofia reached the end of World 1. Before her, a stone gate bearing the symbol of Bowser Jr. — the first boss of the journey. Behind the gate, ten challenge rooms. Each room tests a skill learned in the previous levels.

"You won't learn anything new here," said the voice. "You will PROVE that you've learned. Each quest is a challenge room. Complete them all and the gate opens. Bowser Jr. will be defeated. And you'll be ready for World 2."

The rules are simple:

```
╔═══════════════════════════════════════════╗
║         BOSS BATTLE — BOWSER JR.         ║
║                                           ║
║  10 Quests (challenge rooms)              ║
║  Increasing difficulty                    ║
║  Each quest is worth points               ║
║  To defeat Bowser Jr: 70+ points         ║
║                                           ║
║  No reference material? 20% bonus        ║
║  With reference material? Normal          ║
║  (no penalty)                             ║
║                                           ║
║  "It's-a boss time!"                     ║
╚═══════════════════════════════════════════╝
```

---

## The Rules of the Boss Battle

| Rule | Description |
|------|-----------|
| **Do everything in practice** | Don't just read — open the terminal, VS Code, GitHub, and DO IT |
| **Document with screenshots** | Take screenshots of each completed step |
| **You can refer to the levels** | Going back to levels 1-1 through 1-7 is not defeat — it's strategy |
| **You can use Copilot** | The companion exists to be used — just don't let it do everything |
| **If you're stuck, skip ahead** | Try the next quest and come back later |
| **Suggested time** | 2-4 hours for all 10 quests |

---

## Quest 1 — Turn On the Console (VS Code)

**Reference level:** 1-1 (VS Code)
**Points:** 10
**Difficulty:** Easy

### Objective

Prove that your "console" is ready to play.

### Tasks

- [ ] **1.1** Open VS Code and take a screenshot of the start screen
- [ ] **1.2** Open the integrated terminal (`` Ctrl+` ``) and run:
  ```bash
  code --version
  node --version
  git --version
  ```
  Take a screenshot showing all 3 versions
- [ ] **1.3** Install the following extensions (if you haven't already):
  - GitHub Copilot
  - GitHub Copilot Chat
  - GitLens
  - Error Lens
- [ ] **1.4** Change the VS Code color theme to any dark theme
- [ ] **1.5** Open the Command Palette (`Ctrl+Shift+P`) and run `Developer: Show Running Extensions`. Take a screenshot

### Success Criteria

All tools installed, versions visible, extensions running.

> **MARIO ANALOGY:** You're in the preparation room before the boss battle. Checking that the controller works, the buttons respond, and the power-ups are in your inventory.

---

## Quest 2 — First Save Game (Git)

**Reference level:** 1-2 (Git)
**Points:** 15
**Difficulty:** Easy

### Objective

Create a Git repository from scratch and make your first commits.

### Tasks

- [ ] **2.1** In the terminal, create a folder called `boss-battle-world1`:
  ```bash
  mkdir boss-battle-world1
  cd boss-battle-world1
  ```
- [ ] **2.2** Initialize Git:
  ```bash
  git init
  ```
- [ ] **2.3** Configure your name and email (if you haven't already):
  ```bash
  git config user.name "Your Name"
  git config user.email "your@email.com"
  ```
- [ ] **2.4** Create a `README.md` file with the following content:
  ```markdown
  # Boss Battle — World 1

  My World 1 exercises project from Agentic DevOps.

  ## Author
  [Your name]

  ## Date
  [Today's date]
  ```
- [ ] **2.5** Make the first commit:
  ```bash
  git add README.md
  git commit -m "feat: create boss-battle-world1 project"
  ```
- [ ] **2.6** Create a file `heroi.js` with the following code:
  ```javascript
  const heroi = {
    nome: "Sofia",
    vidas: 3,
    moedas: 0,
    mundo: 1,
    fase: "BOSS"
  };

  console.log("=== BOSS BATTLE ===");
  console.log(`Hero: ${heroi.nome}`);
  console.log(`Lives: ${heroi.vidas}`);
  console.log(`Coins: ${heroi.moedas}`);
  console.log(`Location: World ${heroi.mundo} - Level ${heroi.fase}`);
  ```
- [ ] **2.7** Make the second commit:
  ```bash
  git add heroi.js
  git commit -m "feat: add hero profile"
  ```
- [ ] **2.8** Run `git log --oneline` and take a screenshot showing the 2 commits

### Success Criteria

Two commits in the history, both with clear messages following Conventional Commits.

---

## Quest 3 — Join the Multiplayer Server (GitHub)

**Reference level:** 1-3 (GitHub)
**Points:** 10
**Difficulty:** Easy

### Objective

Create a repository on GitHub and connect it to your local repository.

### Tasks

- [ ] **3.1** Go to https://github.com and log in
- [ ] **3.2** Create a new repository called `boss-battle-world1`:
  - Public
  - WITHOUT README (we already have a local one)
  - WITHOUT .gitignore
  - WITHOUT license
- [ ] **3.3** Connect the local repository to the remote:
  ```bash
  git remote add origin https://github.com/YOUR-USERNAME/boss-battle-world1.git
  git branch -M main
  git push -u origin main
  ```
- [ ] **3.4** Visit the repository in the browser and take a screenshot showing the rendered README.md

### Success Criteria

Repository visible on GitHub with rendered README and `heroi.js` file.

---

## Quest 4 — First Push (Git + GitHub)

**Reference level:** 1-2 + 1-3
**Points:** 10
**Difficulty:** Easy

### Objective

Make local changes, commit, and push to GitHub.

### Tasks

- [ ] **4.1** Edit the file `heroi.js` — add a function:
  ```javascript
  function coletarMoeda(heroi) {
    heroi.moedas += 1;
    console.log(`${heroi.nome} collected a coin! Total: ${heroi.moedas}`);
    if (heroi.moedas % 100 === 0) {
      heroi.vidas += 1;
      console.log(`*** 1-UP! ${heroi.nome} earned an extra life! Lives: ${heroi.vidas} ***`);
    }
  }

  // Collect 3 coins
  coletarMoeda(heroi);
  coletarMoeda(heroi);
  coletarMoeda(heroi);
  ```
- [ ] **4.2** Check the status: `git status`
- [ ] **4.3** See what changed: `git diff`
- [ ] **4.4** Commit:
  ```bash
  git add heroi.js
  git commit -m "feat: add coin collection system"
  ```
- [ ] **4.5** Push:
  ```bash
  git push origin main
  ```
- [ ] **4.6** Verify on GitHub that the changes appeared

### Success Criteria

Third commit visible on GitHub with the coin function.

---

## Quest 5 — Quest Board (Issues)

**Reference level:** 1-3 (GitHub Issues)
**Points:** 10
**Difficulty:** Easy

### Objective

Use Issues as a quest board.

### Tasks

- [ ] **5.1** In the GitHub repository, create **3 Issues**:

  **Issue #1:**
  ```
  Title: feat: add lives system
  Description: The hero should be able to lose and gain lives.
  When lives reach 0, show "GAME OVER".
  Label: enhancement
  ```

  **Issue #2:**
  ```
  Title: feat: add power-ups
  Description: Create power-ups that the hero can collect:
  - Super Mushroom (extra life)
  - Fire Flower (attack)
  - Super Star (temporary invincibility)
  Label: enhancement
  ```

  **Issue #3:**
  ```
  Title: docs: improve README with usage instructions
  Description: Add a "How to run" section to the README.
  Label: documentation
  ```

- [ ] **5.2** Take a screenshot of the Issues list

### Success Criteria

3 Issues created with clear titles, useful descriptions, and assigned labels.

---

## Quest 6 — Parallel Universe (Branches and PR)

**Reference level:** 1-2 + 1-3 (Branches and PRs)
**Points:** 20
**Difficulty:** Medium

### Objective

Create a branch, make changes, and open a Pull Request.

### Tasks

- [ ] **6.1** Create a branch to resolve Issue #3:
  ```bash
  git switch -c docs/melhorar-readme
  ```

- [ ] **6.2** Edit `README.md` — add usage instructions:
  ```markdown
  ## How to run

  1. Clone the repository:
     ```bash
     git clone https://github.com/YOUR-USERNAME/boss-battle-world1.git
     ```
  2. Enter the folder:
     ```bash
     cd boss-battle-world1
     ```
  3. Run:
     ```bash
     node heroi.js
     ```

  ## Technologies

  - JavaScript (Node.js)
  - Git + GitHub
  ```

- [ ] **6.3** Commit and push:
  ```bash
  git add README.md
  git commit -m "docs: add execution instructions to README (#3)"
  git push origin docs/melhorar-readme
  ```

- [ ] **6.4** On GitHub, create a **Pull Request**:
  - Base: `main`
  - Compare: `docs/melhorar-readme`
  - Title: "docs: improve README with usage instructions"
  - Description: "Resolves #3 — Adds 'How to run' section to the README"

- [ ] **6.5** In the PR, review the changes in the "Files changed" tab
- [ ] **6.6** Merge the PR (click "Merge pull request")
- [ ] **6.7** Return to the terminal and update your local copy:
  ```bash
  git switch main
  git pull origin main
  ```
- [ ] **6.8** Verify that Issue #3 was automatically closed (because of "Resolves #3")

### Success Criteria

PR created, reviewed, merged. Issue #3 automatically closed. Local `main` branch updated.

> **MARIO ANALOGY:** You entered a parallel universe (branch), completed the mission (edit README), returned to the main universe (merge), and the quest was marked as complete on the quest board (Issue closed).

---

## Quest 7 — Wake Up the Lakitu (GitHub Actions)

**Reference level:** 1-4 (GitHub Actions)
**Points:** 15
**Difficulty:** Medium

### Objective

Create a GitHub Actions workflow that runs automatically.

### Tasks

- [ ] **7.1** In your local repository, create the folder structure:
  ```bash
  mkdir -p .github/workflows
  ```

- [ ] **7.2** Create the file `.github/workflows/boss-battle-ci.yml`:
  ```yaml
  name: Boss Battle CI

  on:
    push:
      branches: [main]
    pull_request:
      branches: [main]

  jobs:
    verificar-heroi:
      runs-on: ubuntu-latest
      steps:
        - name: Download code
          uses: actions/checkout@v4

        - name: Set up Node.js
          uses: actions/setup-node@v4
          with:
            node-version: '20'

        - name: Run the game
          run: node heroi.js

        - name: Lakitu Report
          run: |
            echo "================================="
            echo "  LAKITU REPORT — BOSS BATTLE"
            echo "================================="
            echo "Status: APPROVED"
            echo "Date: $(date)"
            echo "Branch: ${{ github.ref_name }}"
            echo "Author: ${{ github.actor }}"
            echo "================================="
  ```

- [ ] **7.3** Commit and push:
  ```bash
  git add .github/workflows/boss-battle-ci.yml
  git commit -m "ci: add CI workflow for boss battle"
  git push origin main
  ```

- [ ] **7.4** Go to GitHub -> **Actions** tab -> watch the workflow run
- [ ] **7.5** When it completes, click the job and take a screenshot showing:
  - The output of `node heroi.js`
  - The Lakitu report
  - The green status (success)

### Success Criteria

Workflow ran successfully. Hero output and Lakitu report visible in the logs.

> **MARIO ANALOGY:** You wrote the instruction scroll, handed it to Lakitu, and it executed everything automatically in the cloud. Now, every time you push, Lakitu will check everything.

---

## Quest 8 — Ask the Companion for Help (Copilot)

**Reference level:** 1-6 (AI / Copilot)
**Points:** 10
**Difficulty:** Easy

### Objective

Use GitHub Copilot to generate code and learn.

### Tasks

- [ ] **8.1** In VS Code, open Copilot Chat and ask 3 questions:
  1. "Explain what git rebase is in simple terms, as if I were a beginner"
  2. "What are the 5 most used Git commands in daily work?"
  3. "What is a REST API? Explain with a restaurant analogy"

- [ ] **8.2** Create a new file `power-ups.js` and write ONLY the comment:
  ```javascript
  // Create a PowerUp class with types: SuperMushroom, FireFlower, SuperStar
  // Each power-up has: name, effect, duration (in seconds)
  // SuperMushroom: +1 life, permanent
  // FireFlower: fire attack, 30 seconds
  // SuperStar: invincibility, 10 seconds
  ```
  Let Copilot suggest the code. Accept with `Tab`.

- [ ] **8.3** Review the generated code. Did Copilot make any mistakes or leave things incomplete? Make notes.

- [ ] **8.4** Commit:
  ```bash
  git add power-ups.js
  git commit -m "feat: add power-up system (co-authored by Copilot)"
  git push origin main
  ```

### Success Criteria

Copilot used for learning (chat) and code generation (autocomplete). Code reviewed before committing.

---

## Quest 9 — Explore the Open World (Azure)

**Reference level:** 1-5 (Azure)
**Points:** 10
**Difficulty:** Medium

### Objective

Take your first steps in Azure.

### Tasks

- [ ] **9.1** Go to https://portal.azure.com and log in
- [ ] **9.2** Take a screenshot of the Azure Portal Dashboard
- [ ] **9.3** Create a **Resource Group**:
  - Name: `rg-boss-battle`
  - Region: `Brazil South`
- [ ] **9.4** Explore the **"All Services"** section and identify where these are:
  - App Service (Compute)
  - Storage Accounts (Storage)
  - Azure SQL (Databases)
  - Azure Monitor (Monitoring)

  Note the names and categories.

- [ ] **9.5** Open the **Cloud Shell** (terminal icon at the top of the portal) and run:
  ```bash
  az group list --output table
  ```
  Take a screenshot showing your Resource Group.

- [ ] **9.6** **IMPORTANT — Cleanup:** Delete the Resource Group to avoid spending credits:
  ```bash
  az group delete --name rg-boss-battle --yes --no-wait
  ```

### Success Criteria

Resource Group created, services explored, Cloud Shell used, cleanup completed.

> **MARIO ANALOGY:** You entered the open world, built a small kingdom, explored the map, and demolished everything when you left (to avoid spending coins). Smart player!

---

## Quest 10 — Final Boss: The Mushroom Kingdom Project

**Reference level:** All (1-1 through 1-7)
**Points:** 25 (BOSS!)
**Difficulty:** Hard

### Objective

Bring together EVERYTHING you've learned in a cohesive mini-project.

### Tasks

- [ ] **10.1** In your `boss-battle-world1` repository, create a new branch:
  ```bash
  git switch -c feature/boss-battle
  ```

- [ ] **10.2** Create a file `boss-battle.js` that simulates a boss battle:
  ```javascript
  // ============================================
  // BOSS BATTLE — BOWSER JR.
  // ============================================
  // Create a program that:
  // 1. Defines the hero (name, lives, coins, power-ups)
  // 2. Defines the boss (Bowser Jr., with HP)
  // 3. Simulates 5 rounds of battle:
  //    - Each round, the hero attacks (random damage 10-30)
  //    - Each round, the boss attacks (hero loses 1 life with 30% chance)
  //    - If the hero has FireFlower, damage is doubled
  //    - If the hero has SuperStar, they don't lose lives that round
  // 4. At the end, shows who won
  //
  // TIP: Use Math.random() for random numbers
  // TIP: You can ask Copilot for help!
  ```
  **Implement the program.** Use Copilot as a companion, but review everything.

- [ ] **10.3** Test locally:
  ```bash
  node boss-battle.js
  ```

- [ ] **10.4** Create an Issue on GitHub:
  ```
  Title: feat: implement boss battle simulation
  Description: Create a program that simulates the battle against Bowser Jr.
  with a damage, lives, and power-ups system.
  ```

- [ ] **10.5** Commit and push:
  ```bash
  git add boss-battle.js
  git commit -m "feat: implement boss battle against Bowser Jr (#4)"
  git push origin feature/boss-battle
  ```

- [ ] **10.6** Create a **Pull Request** linked to the Issue

- [ ] **10.7** Verify that the CI workflow ran on the PR and passed

- [ ] **10.8** Merge the PR

- [ ] **10.9** Update your local copy:
  ```bash
  git switch main
  git pull origin main
  ```

- [ ] **10.10** Run `git log --oneline` and take a final screenshot showing the full history

### Success Criteria

Working program, tested, version-controlled with Git, reviewed via PR, CI passing, merged to main. **The complete World 1 flow in action.**

> **MARIO ANALOGY:** This is the boss room. You used ALL your skills: the console (VS Code), the memory card (Git), the server (GitHub), the Lakitus (Actions), and the companion (Copilot). If you made it this far, Bowser Jr. has been defeated.

---

## Answer Key and Tips

### If you got stuck on Quest 6 (PR):
Remember: first create the branch, then make the changes, commit, push the branch, and only then create the PR on GitHub.

### If you got stuck on Quest 7 (Actions):
The YAML file path must be EXACTLY `.github/workflows/name.yml`. Watch your indentation (2 spaces, never tabs).

### If you got stuck on Quest 10 (Boss Battle):
Use Copilot! Write comments describing what you want and let Copilot suggest. Then review and adjust.

### General tip:
If something goes wrong, read the error message carefully. 90% of the time, the answer is in the error message itself.

---

## Final Score — Rate Your Performance

| Quest | Points | Your Score |
|-------|--------|-----------|
| Quest 1 — VS Code | 10 | ___/10 |
| Quest 2 — Git | 15 | ___/15 |
| Quest 3 — GitHub | 10 | ___/10 |
| Quest 4 — Push | 10 | ___/10 |
| Quest 5 — Issues | 10 | ___/10 |
| Quest 6 — Branch+PR | 20 | ___/20 |
| Quest 7 — Actions | 15 | ___/15 |
| Quest 8 — Copilot | 10 | ___/10 |
| Quest 9 — Azure | 10 | ___/10 |
| Quest 10 — Final Boss | 25 | ___/25 |
| **TOTAL** | **135** | **___/135** |

### Ranking

| Points | Result | Mario Analogy |
|--------|--------|---------------|
| **120-135** | **S Rank** — Perfect! | Collected all the Star Coins in the level |
| **100-119** | **A Rank** — Excellent! | Completed with time to spare |
| **80-99** | **B Rank** — Very good! | Completed without losing lives |
| **70-79** | **C Rank** — Bowser Jr. defeated! | Completed by a hair! |
| **50-69** | **D Rank** — Almost there... | Try again — review the levels |
| **0-49** | **Game Over** | Go back to World 1-1 and redo the levels |

```
╔═══════════════════════════════════════════════════╗
║                                                   ║
║    ★ ★ ★  BOWSER JR. DEFEATED!  ★ ★ ★           ║
║                                                   ║
║    "Thank you Sofia!                              ║
║     You have cleared World 1!"                    ║
║                                                   ║
║    Skills unlocked:                               ║
║    ✓ Local Development (VS Code + Git)            ║
║    ✓ Collaboration (GitHub)                       ║
║    ✓ Automation (GitHub Actions)                  ║
║    ✓ Cloud (Azure)                                ║
║    ✓ AI (Copilot + Azure AI)                      ║
║                                                   ║
║    → WORLD 2 UNLOCKED!                            ║
║      Underground Caverns (Infrastructure)         ║
║                                                   ║
║    "It's-a me, Developer!"                        ║
║                                                   ║
╚═══════════════════════════════════════════════════╝
```

---

## References

- [Visual Studio Code](https://code.visualstudio.com)
- [Git — Documentation](https://git-scm.com/docs)
- [GitHub Docs](https://docs.github.com)
- [GitHub Actions Quickstart](https://docs.github.com/en/actions/quickstart)
- [Microsoft Azure — Free Account](https://azure.microsoft.com/free)
- [GitHub Copilot](https://docs.github.com/en/copilot)
- [Node.js](https://nodejs.org)
- [Conventional Commits](https://www.conventionalcommits.org)
- [GitHub CLI (gh)](https://cli.github.com)

---

*"Bowser Jr. has fallen. But he was only the first boss. The following worlds have much greater challenges. But now I know: with the right tools and a solid foundation, I can face anything." — Sofia, storing her first trophy.*
