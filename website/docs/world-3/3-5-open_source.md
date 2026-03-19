---
title: "Level 3-5 -- Licenses of the Mushroom Kingdom: Open Source"
description: "Open Source explained with a Mario analogy -- sharing custom levels, licenses as usage rules, contributions as community improvements, and forks as alternate versions"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-3", "open-source", "licenses", "github", "community"]
---

# Level 3-5 -- Licenses of the Mushroom Kingdom: Open Source

---

## Change Log

| Version | Date       | Author                                     | Description                   |
|---------|------------|--------------------------------------------|-------------------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation (Mario Edition)|

---

## Table of Contents

- [Prologue: The World of Custom Levels](#prologue-the-world-of-custom-levels)
- [1. What Is Open Source?](#1-what-is-open-source)
  - [1.1 Open Code: The Visible Recipe](#11-open-code-the-visible-recipe)
  - [1.2 Open Source vs Closed Source vs Free Software](#12-open-source-vs-closed-source-vs-free-software)
  - [1.3 Why Do Companies Invest in Open Source?](#13-why-do-companies-invest-in-open-source)
- [2. The History That Changed the World](#2-the-history-that-changed-the-world)
  - [2.1 From Laboratories to Linux](#21-from-laboratories-to-linux)
  - [2.2 The GitHub Revolution](#22-the-github-revolution)
  - [2.3 Open Source Today: Impressive Numbers](#23-open-source-today-impressive-numbers)
- [3. Licenses: The Rules of Sharing](#3-licenses-the-rules-of-sharing)
  - [3.1 Why Do Licenses Matter?](#31-why-do-licenses-matter)
  - [3.2 MIT: Share Freely](#32-mit-share-freely)
  - [3.3 Apache 2.0: Share with Credit](#33-apache-20-share-with-credit)
  - [3.4 GPL: Share and Everyone Must Share](#34-gpl-share-and-everyone-must-share)
  - [3.5 BSD: The Simplest of All](#35-bsd-the-simplest-of-all)
  - [3.6 ISC and Unlicense: The Bare Minimum](#36-isc-and-unlicense-the-bare-minimum)
  - [3.7 License Comparison Table](#37-license-comparison-table)
  - [3.8 How to Choose the Right License](#38-how-to-choose-the-right-license)
- [4. Essential Open Source Projects for Devs](#4-essential-open-source-projects-for-devs)
  - [4.1 Languages and Runtimes](#41-languages-and-runtimes)
  - [4.2 Frameworks and Libraries](#42-frameworks-and-libraries)
  - [4.3 Tools and Infrastructure](#43-tools-and-infrastructure)
- [5. How to Contribute: Helping Build Community Levels](#5-how-to-contribute-helping-build-community-levels)
  - [5.1 Ways to Contribute (Not Just Code!)](#51-ways-to-contribute-not-just-code)
  - [5.2 Finding Your First Project](#52-finding-your-first-project)
  - [5.3 The Complete Contribution Workflow](#53-the-complete-contribution-workflow)
  - [5.4 Anatomy of a Good Pull Request](#54-anatomy-of-a-good-pull-request)
  - [5.5 Etiquette and Best Practices](#55-etiquette-and-best-practices)
- [6. Fork: Creating Your Alternate Version](#6-fork-creating-your-alternate-version)
  - [6.1 What Is a Fork?](#61-what-is-a-fork)
  - [6.2 Fork to Contribute vs Fork to Diverge](#62-fork-to-contribute-vs-fork-to-diverge)
  - [6.3 Famous Forks That Changed the World](#63-famous-forks-that-changed-the-world)
- [7. Open Source Communities: The Kingdoms of the Mushroom Kingdom](#7-open-source-communities-the-kingdoms-of-the-mushroom-kingdom)
  - [7.1 How Communities Work](#71-how-communities-work)
  - [7.2 Roles in the Community](#72-roles-in-the-community)
  - [7.3 Code of Conduct](#73-code-of-conduct)
- [8. Creating Your Own Open Source Project](#8-creating-your-own-open-source-project)
  - [8.1 Launch Checklist](#81-launch-checklist)
  - [8.2 README: The Level Manual](#82-readme-the-level-manual)
  - [8.3 CONTRIBUTING.md: The Guide for New Players](#83-contributingmd-the-guide-for-new-players)
- [9. Open Source and Career](#9-open-source-and-career)
  - [9.1 How Open Source Boosts Your Career](#91-how-open-source-boosts-your-career)
  - [9.2 GitHub Profile as Portfolio](#92-github-profile-as-portfolio)
  - [9.3 Incentive Programs](#93-incentive-programs)
- [10. Security and Responsibility in Open Source](#10-security-and-responsibility-in-open-source)
  - [10.1 Supply Chain Security](#101-supply-chain-security)
  - [10.2 Dependabot and Updates](#102-dependabot-and-updates)
- [Summary -- What We Learned in Level 3-5](#summary----what-we-learned-in-level-3-5)
- [References](#references)

---

## Prologue: The World of Custom Levels

Sofia finished playing an incredible level in Super Mario Maker. The design was brilliant -- platforms that moved in sync with the music, secrets hidden in every corner, a surprising boss battle at the end. And the best part: the level was created by a player like her, on the other side of the world.

*"How can someone create something this good and make it available FOR FREE?"* Sofia thought.

Toadette -- the team's Code Reviewer -- appeared beside her.

*"That's called **Open Source**,"* said Toadette. *"In the gaming world, it's like Mario Maker: people create levels and share them for everyone to play and learn from. In the software world, it's the same thing. Someone creates a program, makes the **source code** (the complete recipe) available, and anyone can use, study, modify, and improve it."*

*"But what if someone takes the code and sells it as their own?"*

*"Great question! That's why **licenses** exist. They are the sharing rules. Some say 'do whatever you want.' Others say 'use it, but give credit.' Others say 'use it, but if you modify it, share as well.' Each project chooses its own rules."*

Sofia thought about all the programs she used: VS Code, Node.js, React, PostgreSQL, Docker, Git. *"Wait... all of that is Open Source?"*

*"ALL of it. The entire ecosystem you use to develop software was built by communities of people sharing their work. Welcome to Level 3-5. Here you'll understand how this world works -- and how to be part of it."*

---

## 1. What Is Open Source?

### 1.1 Open Code: The Visible Recipe

**Open Source** means that the **source code** of a piece of software is publicly available. Anyone can:

1. **View** the code (read the recipe)
2. **Use** the software (cook the dish)
3. **Modify** the code (adapt the recipe)
4. **Distribute** their modifications (share the adapted recipe)

> **MARIO ANALOGY:** Open Source is like **Mario Maker** -- a universe where players create and share their own levels. The "code" of each level (the arrangement of blocks, enemies, power-ups) is visible to everyone. You can play the level, study how it was made, copy elements for your own levels, and even create an improved version.

**Contrast with Closed Source:**

| Aspect | Open Source | Closed Source |
|--------|-----------|--------------|
| Code visible | Yes, to everyone | No, only the company |
| Who can modify | Anyone | Only the company |
| Cost | Generally free | Generally paid |
| Transparency | Full | None |
| Examples | Linux, VS Code, React | Windows (kernel), Photoshop |

### 1.2 Open Source vs Closed Source vs Free Software

These terms are related but different:

| Term | Meaning | Mario Analogy |
|------|---------|---------------|
| **Open Source** | Source code visible and modifiable | Mario Maker level: visible, playable, editable |
| **Closed Source** | Source code hidden | Official Nintendo level: play, but don't see how it was made |
| **Free Software** | Emphasizes freedom (not price) | "Free as in freedom, not as in free beer" |
| **Freeware** | Free but closed source | Free game you can't modify |
| **Source Available** | Code visible but not freely editable | Level you can see, but not edit |

**Free Software vs Open Source:** The difference is philosophical. Free Software (Richard Stallman, FSF) emphasizes the user's **freedom**. Open Source (OSI) emphasizes the **practical benefits** of open code. In practice, the licenses tend to be the same.

### 1.3 Why Do Companies Invest in Open Source?

It seems counterintuitive -- why would a company give away code for free? The reasons are strategic:

1. **Adoption**: More people use it when it's free (VS Code vs paid IDE)
2. **Quality**: Thousands of eyes find more bugs than an internal team
3. **Innovation**: The community contributes features the company didn't think of
4. **Talent**: Devs want to work at companies that contribute to open source
5. **Ecosystem**: The paid product depends on healthy open source tools

**Real examples:**

| Company | Open Source Project | Related Paid Product |
|---------|-------------------|----------------------|
| Microsoft | VS Code, TypeScript | Azure, GitHub Enterprise |
| Meta | React, Jest | Ads platform |
| Google | Kubernetes, Angular, Go | Google Cloud |
| Vercel | Next.js | Vercel Platform |
| HashiCorp | Terraform | Terraform Cloud |

---

## 2. The History That Changed the World

### 2.1 From Laboratories to Linux

- **1969-1970:** Unix is born at Bell Labs. Code shared with universities.
- **1983:** Richard Stallman launches the GNU project. "Software should be free."
- **1991:** Linus Torvalds creates **Linux** -- the kernel that today runs on 90%+ of the world's servers, Android, and even smart refrigerators.
- **1998:** The term "Open Source" is officially adopted by the OSI.

### 2.2 The GitHub Revolution

- **2008:** GitHub launches. Contributing to Open Source becomes as easy as clicking "Fork."
- **2018:** Microsoft acquires GitHub for $7.5 billion (the same Microsoft that in 2001 called Linux a "cancer").
- **Today:** GitHub has 100M+ developers and 420M+ repositories.

### 2.3 Open Source Today: Impressive Numbers

- **97%** of commercial software uses open source components
- **90%+** of the world's servers run Linux
- **100%** of the top 500 supercomputers run Linux
- **73%+** of websites use JavaScript (open source)
- The estimated value of global open source software exceeds **$8 trillion**

---

## 3. Licenses: The Rules of Sharing

### 3.1 Why Do Licenses Matter?

Without a license, publicly available source code is **NOT automatically** open source. Legally, without an explicit license, **no one** has permission to use, copy, or modify it.

> **MARIO ANALOGY:** Imagine you create a level in Mario Maker and post it online. Without clear rules, questions arise: "Can I copy your level?" "Can I modify it and post it as mine?" "Can I use your ideas in a commercial compilation?" The license answers ALL of these questions in advance.

### 3.2 MIT: Share Freely

The **MIT license** is the most popular in the world. Simple and permissive.

**Rule:** Do whatever you want, just keep the original copyright.

```
MIT License

Copyright (c) 2026 Sofia Developer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

**What you CAN do:**
- Use commercially
- Modify freely
- Distribute
- Use in private projects

**What you MUST do:**
- Include the license and original copyright

**What you DON'T need to do:**
- Share your modifications
- Give credit beyond the license

> **MARIO ANALOGY:** MIT is like posting a level with the rule: **"Do whatever you want with my level. Use, modify, sell. Just don't erase my name from the credits."** It's the most generous license.

**Famous projects with MIT:** React, jQuery, Vue.js, Express.js, Rails, .NET

### 3.3 Apache 2.0: Share with Credit

The **Apache 2.0 license** is similar to MIT, but with additional patent protections.

**Rule:** Use freely, but give credit and document changes.

**Difference from MIT:**
- Includes a **patent protection** clause
- Requires **documentation of significant changes**
- Offers more legal protection for the contributor

> **MARIO ANALOGY:** Apache is like: **"Use my level freely. If you modify it, note what you changed. And nobody can sue you for using my design ideas."**

**Famous projects with Apache 2.0:** Kubernetes, Android (AOSP), TypeScript, Terraform

### 3.4 GPL: Share and Everyone Must Share

The **GPL** (GNU General Public License) is the most famous **copyleft** license. It ensures that the software and ALL its modifications remain open source.

**Rule:** Use and modify, but if you distribute, the code MUST remain open source with the same license.

**Versions:**
- **GPLv2:** Used by the Linux kernel
- **GPLv3:** More modern version with extra protections
- **LGPL:** "Light" version that allows linking with proprietary software
- **AGPL:** Server version (if running on a server, must share)

> **MARIO ANALOGY:** GPL is like: **"Use my level. Modify freely. BUT if you publish your modified version, the ENTIRE level (including your modifications) must be open to everyone. Nobody can close what was opened."** It's "copyleft" -- the opposite of copyright.

**Famous projects with GPL:** Linux (kernel), GCC, WordPress, MySQL

### 3.5 BSD: The Simplest of All

The **BSD license** is extremely permissive -- even more than MIT in some variants.

**Variants:**
- **BSD 2-Clause (Simplified):** Use freely, keep copyright
- **BSD 3-Clause:** + don't use the author's name to promote your product

**Famous projects with BSD:** FreeBSD, OpenBSD, Nginx (originally)

### 3.6 ISC and Unlicense: The Bare Minimum

- **ISC:** Functionally equivalent to MIT, but with shorter text
- **Unlicense:** Dedicated to the public domain -- NO restrictions whatsoever

### 3.7 License Comparison Table

| License | Commercial use? | Must keep copyright? | Must open modifications? | Patent protection? | Mario Analogy |
|---------|----------------|---------------------|------------------------|-------------------|---------------|
| **MIT** | Yes | Yes | No | No | "Do whatever you want, just keep my name" |
| **Apache 2.0** | Yes | Yes | No (but document) | Yes | "Use, document changes, no lawsuits" |
| **GPL v3** | Yes | Yes | YES (mandatory!) | Yes | "Use, but everything must stay open" |
| **LGPL** | Yes | Yes | Only if you modify the lib | Yes | "Use in your level, only open if you change my blocks" |
| **BSD 2** | Yes | Yes | No | No | "Go ahead, have fun" |
| **Unlicense** | Yes | No | No | No | "Do whatever you want. No rules." |

### 3.8 How to Choose the Right License

**Quick flowchart:**

```
Do you want modifications to be mandatorily open source?
├── YES → GPL v3
│         └── Only for libraries? → LGPL
│         └── Includes server use? → AGPL
└── NO → Do you want patent protection?
          ├── YES → Apache 2.0
          └── NO → MIT (most popular, simplest)
```

---

## 4. Essential Open Source Projects for Devs

### 4.1 Languages and Runtimes

| Project | License | What it is | GitHub Stars |
|---------|---------|-----------|-------------|
| Node.js | MIT | JavaScript Runtime | 110k+ |
| TypeScript | Apache 2.0 | Typed superset of JS | 105k+ |
| Python | PSF | Programming language | 65k+ |
| Rust | MIT/Apache 2.0 | Systems language | 100k+ |
| Go | BSD 3 | Google's language | 125k+ |

### 4.2 Frameworks and Libraries

| Project | License | What it is | GitHub Stars |
|---------|---------|-----------|-------------|
| React | MIT | UI Library | 230k+ |
| Next.js | MIT | React Framework | 130k+ |
| Vue.js | MIT | Progressive Framework | 210k+ |
| Express.js | MIT | Node.js Framework | 66k+ |
| Tailwind CSS | MIT | Utility CSS Framework | 85k+ |

### 4.3 Tools and Infrastructure

| Project | License | What it is | GitHub Stars |
|---------|---------|-----------|-------------|
| VS Code | MIT | Code editor | 165k+ |
| Git | GPL v2 | Version control | 53k+ |
| Docker | Apache 2.0 | Containerization | 70k+ |
| Kubernetes | Apache 2.0 | Orchestration | 112k+ |
| PostgreSQL | PostgreSQL (permissive) | Database | 16k+ |
| Linux | GPL v2 | Operating system | 185k+ |

---

## 5. How to Contribute: Helping Build Community Levels

### 5.1 Ways to Contribute (Not Just Code!)

Many people think contributing to open source is only about writing code. There are MANY other ways:

| Type of Contribution | Difficulty | Example |
|---------------------|-----------|---------|
| **Report bugs** | Easy | Open an issue describing the problem |
| **Documentation** | Easy | Fix a typo, improve an explanation |
| **Translation** | Easy | Translate docs to another language |
| **Answer issues** | Easy | Help someone with a question |
| **Tests** | Medium | Add missing tests |
| **Bug fix** | Medium | Fix an existing bug |
| **Feature** | Hard | Implement a new feature |
| **Code review** | Hard | Review others' PRs |
| **Mentoring** | Hard | Help new contributors |
| **Design** | Medium | Improve UI/UX, create icons |

> **MARIO ANALOGY:** Contributing to open source is like helping improve levels in Mario Maker. You don't need to build the entire level. You can: report that a block is bugged (bug report), improve the level description (documentation), translate the description (translation), fix a misplaced block (bug fix), or add a secret area (feature).

### 5.2 Finding Your First Project

**Tips for finding welcoming projects:**

1. **Look for labels "good first issue" or "help wanted"** on GitHub
2. **Start with projects you use** (React, Next.js, Jest, etc.)
3. **Use GitHub Explore** (github.com/explore)
4. **Participate in events** like Hacktoberfest
5. **Focus on documentation first** -- it's the easiest path

**Where to search:**

- [GitHub "good first issue" search](https://github.com/topics/good-first-issue)
- [First Timers Only](https://www.firsttimersonly.com/)
- [Up For Grabs](https://up-for-grabs.net/)
- [Good First Issues](https://goodfirstissues.com/)

### 5.3 The Complete Contribution Workflow

```
1. FIND      → Find a project and an issue to work on
2. FORK      → Create a copy of the project on your GitHub
3. CLONE     → Download the copy to your computer
4. BRANCH    → Create a branch for your change
5. CODE      → Make the change
6. TEST      → Run the project's tests
7. COMMIT    → Save your changes
8. PUSH      → Push to YOUR fork on GitHub
9. PR        → Open a Pull Request to the original project
10. REVIEW   → Respond to maintainers' comments
11. MERGE    → Your contribution is accepted!
```

**Corresponding commands:**

```bash
# 2. Fork: Click "Fork" on GitHub (web interface)

# 3. Clone
$ git clone https://github.com/YOUR-USERNAME/cool-project.git
$ cd cool-project

# 4. Add upstream (original project)
$ git remote add upstream https://github.com/ORIGINAL/cool-project.git

# 5. Create branch
$ git checkout -b fix/fix-readme-typo

# 6-7. Make changes, test, commit
$ git add README.md
$ git commit -m "docs: fix typo in installation instructions"

# 8. Push to YOUR fork
$ git push origin fix/fix-readme-typo

# 9. Open PR: Go to GitHub and click "Compare & pull request"
```

### 5.4 Anatomy of a Good Pull Request

```markdown
## Description
Fixed a typo in the installation section of the README.
"instale" was spelled as "instal".

## Changes
- README.md: Line 42 - fixed "instal" to "instale"

## Related issue
Closes #123

## Checklist
- [x] Read the CONTRIBUTING.md
- [x] Tests passing
- [x] Documentation updated (if applicable)
```

### 5.5 Etiquette and Best Practices

**DOs:**
- Read the CONTRIBUTING.md BEFORE starting
- Ask before implementing large features
- Be respectful and patient
- Accept feedback with humility
- Keep PRs small and focused
- Write clear commit messages

**DON'Ts:**
- Don't open a PR without testing
- Don't ignore the project's code style
- Don't take rejections personally
- Don't make giant PRs that change everything
- Don't spam trivial PRs just to "contribute"

---

## 6. Fork: Creating Your Alternate Version

### 6.1 What Is a Fork?

A **fork** is a complete copy of a repository to your account. From that copy, you can make any modifications without affecting the original project.

> **MARIO ANALOGY:** A fork is like **copying a Mario Maker level** to your account and modifying it freely. The original level remains intact. Your copy is yours alone. If your version turns out better, you can suggest the changes back to the original creator (Pull Request).

```bash
# Fork: Done via the button on GitHub

# Clone YOUR fork
$ git clone https://github.com/sofia/react.git

# Now you have a complete copy of React!
# You can modify whatever you want without affecting Facebook/Meta
```

### 6.2 Fork to Contribute vs Fork to Diverge

| Type | Intent | Example |
|------|--------|---------|
| **Fork to contribute** | Make changes and propose them back (PR) | 99% of forks |
| **Fork to diverge** | Create your own version with a different direction | Rare, but it happens |

### 6.3 Famous Forks That Changed the World

| Fork | Original | What happened |
|------|---------|---------------|
| **MariaDB** | MySQL | Oracle bought MySQL; the community forked |
| **LibreOffice** | OpenOffice | Oracle mismanaged it; the community forked |
| **io.js** | Node.js | Community wanted open governance; they later reunited |
| **Chromium → Chrome** | Chromium (open source) | Google added proprietary features |

---

## 7. Open Source Communities: The Kingdoms of the Mushroom Kingdom

### 7.1 How Communities Work

Open source projects are maintained by **communities** -- groups of people who voluntarily dedicate time to improving the software.

**Common channels:**
- **GitHub Issues:** Bugs and feature requests
- **GitHub Discussions:** Conversations and questions
- **Discord/Slack:** Real-time communication
- **Forums:** Long, detailed discussions
- **Conferences:** In-person or online meetups

### 7.2 Roles in the Community

| Role | Description | Mario Analogy |
|------|-----------|---------------|
| **Creator/Author** | Created the original project | Level creator |
| **Maintainer** | Keeps the project active, accepts PRs | Moderator who approves levels |
| **Contributor** | Has had a PR accepted | Player who improved a level |
| **Committer** | Has merge permission | Official world editor |
| **User** | Uses but doesn't contribute (that's ok!) | Player who just plays |

### 7.3 Code of Conduct

Most projects have a **Code of Conduct** -- rules for coexistence. The basic principles:

1. Be respectful and inclusive
2. Accept constructive criticism
3. Focus on what's best for the community
4. Do not harass, insult, or discriminate
5. Conflicts are resolved by the maintainers

---

## 8. Creating Your Own Open Source Project

### 8.1 Launch Checklist

```
[ ] Clean, functional code
[ ] Detailed README.md
[ ] LICENSE (choose a license!)
[ ] CONTRIBUTING.md
[ ] CODE_OF_CONDUCT.md
[ ] Proper .gitignore
[ ] Basic tests passing
[ ] CI/CD configured (GitHub Actions)
[ ] Issue templates (bug report, feature request)
[ ] PR template
```

### 8.2 README: The Level Manual

A good README has:

```markdown
# Project Name

Short, clear description of what the project does.

## Installation

Step-by-step installation guide.

## Usage

Usage examples.

## Contributing

Link to CONTRIBUTING.md.

## License

MIT / Apache 2.0 / etc.
```

### 8.3 CONTRIBUTING.md: The Guide for New Players

```markdown
# How to Contribute

## Local Setup
1. Fork the repository
2. Clone: `git clone ...`
3. Install dependencies: `npm install`
4. Run tests: `npm test`

## Workflow
1. Create a branch: `git checkout -b feat/my-feature`
2. Make your changes
3. Run the tests
4. Open a Pull Request

## Conventions
- Commits: Conventional Commits
- Code Style: ESLint + Prettier (configured)
- Tests: Required for new features
```

---

## 9. Open Source and Career

### 9.1 How Open Source Boosts Your Career

1. **Visible portfolio:** Contributions are public on your GitHub
2. **Networking:** You meet devs from all over the world
3. **Learning:** Reading code from mature projects is the best school
4. **Reputation:** Active contributors are recognized by the community
5. **Interviews:** Many companies value (and ask for) open source contributions
6. **Mentoring:** Maintainers review your code and give high-quality feedback

### 9.2 GitHub Profile as Portfolio

Your GitHub profile is your **technical portfolio**. Recruiters look at:

- Contribution graph (activity frequency)
- Public repositories (personal projects)
- PRs accepted in relevant projects
- Quality of commit messages
- README profile (pinned important repos)

### 9.3 Incentive Programs

| Program | Organizer | What it is |
|---------|----------|-----------|
| **Hacktoberfest** | DigitalOcean | 4 PRs in October → t-shirt/tree planted |
| **Google Summer of Code** | Google | Scholarship to contribute to open source projects |
| **GitHub Sponsors** | GitHub | Receive money for maintaining projects |
| **MLH Fellowship** | Major League Hacking | Scholarship to contribute to open source |
| **Outreachy** | Software Freedom Conservancy | Internship for underrepresented groups |

---

## 10. Security and Responsibility in Open Source

### 10.1 Supply Chain Security

When you install an npm package, you trust the **entire chain of dependencies**. A package may depend on dozens of other packages, which depend on others...

```bash
$ npm install express
# Installs express + 57 dependencies!

# If ONE of those 57 dependencies has malicious code...
# Your project is compromised.
```

**How to protect yourself:**

1. **Use `npm audit`** regularly
2. **Enable Dependabot** on GitHub (automatic updates)
3. **Use lockfiles** (package-lock.json) -- guarantees exact versions
4. **Check before installing** -- is the package popular? Maintained? Secure?
5. **Enable GitHub Advanced Security** for code scanning

### 10.2 Dependabot and Updates

**Dependabot** (from GitHub) automatically:
- Checks your dependencies for vulnerabilities
- Creates PRs to update insecure packages
- Keeps your dependencies up to date

> **MARIO ANALOGY:** Dependabot is like the **inspector Toad** who regularly checks your inventory. *"This Mushroom is expired! This Fire Flower has a defect! This Shell might explode!"* He doesn't just warn you -- he already brings the updated item for you to swap.

---

## Summary -- What We Learned in Level 3-5

| Concept | Mario Analogy | Key Point |
|---------|---------------|-----------|
| Open Source | Custom Mario Maker levels | Code visible, usable, modifiable |
| MIT | "Do whatever you want, keep credit" | Most popular, simplest |
| Apache 2.0 | "Use, document, no lawsuits" | Patent protection |
| GPL | "Use, but everything stays open" | Copyleft -- mandatory sharing |
| Fork | Copy a level to modify | Independent copy of the repository |
| Pull Request | Suggest an improvement back | Proposal of change to the original |
| Contribution | Improving community levels | Not just code -- docs, bugs, translation |
| Community | Kingdoms of players | Maintainers, contributors, users |
| Dependabot | Inspector Toad checking inventory | Automatic dependency security |

**The big lesson:** Open Source is not charity -- it's the most efficient software development model ever invented. The entire ecosystem you use (VS Code, Node.js, React, PostgreSQL, Docker, Git, Linux) is open source. Contributing is not just "giving away for free" -- it's learning from the best, building reputation, and being part of something bigger than yourself. The entire Mushroom Kingdom was built by players like you.

---

## References

- [Open Source Initiative (OSI)](https://opensource.org/)
- [Choose a License -- GitHub](https://choosealicense.com/)
- [Open Source Guide -- GitHub](https://opensource.guide/pt/)
- [First Timers Only](https://www.firsttimersonly.com/)
- [Good First Issues](https://goodfirstissues.com/)
- [Hacktoberfest](https://hacktoberfest.com/)
- [GitHub Sponsors](https://github.com/sponsors)
- [GNU Licenses Explained](https://www.gnu.org/licenses/licenses.html)
- [npm Security Best Practices](https://docs.npmjs.com/packages-and-modules/securing-your-code)
- [GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security)

---

*Level 3-5 complete! You understood the world of Open Source -- the ecosystem that built practically everything you use. In the next and final level of this World, we'll enter the Castle of Data: Databases.*

---

<div align="center">

⬅️ [Previous: Level 3-4: Tests](3-4-testes.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 3-6: Databases](3-6-banco_dados.md)

</div>
