---
title: "Level 5-9 -- The Star Shield: GitHub Advanced Security"
description: "GitHub Advanced Security: Code Scanning, Secret Scanning and Dependabot with Mario analogies"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-5", "ghas", "security", "code-scanning"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-03-18 | Paula Silva | Initial version — Super Mario Bros Edition |

# Level 5-9 -- The Star Shield: GitHub Advanced Security

---

**Prepared for:** Sofia
**Version:** 1.0 (Mushroom Kingdom Edition)
**Author:** Paula Silva | Microsoft Latam Software GBB
**Date:** March 2026
**Language:** English (translated from pt-BR)
**Collection:** Agentic DevOps -- Complete Software Development Guide

---

## TABLE OF CONTENTS

- [Introduction -- The Castle Needs More Than Walls](#introduction--the-castle-needs-more-than-walls)
- [Section 1 -- What is GitHub Advanced Security (GHAS)](#section-1--what-is-github-advanced-security-ghas)
  - [GHAS Overview](#ghas-overview)
  - [The 4 Security Pillars](#the-4-security-pillars)
  - [Table: The 4 Pillars vs Castle Defenses](#table-the-4-pillars-vs-castle-defenses)
- [Section 2 -- Code Scanning (CodeQL): The Trap Detector](#section-2--code-scanning-codeql-the-trap-detector)
  - [What is Code Scanning](#what-is-code-scanning)
  - [How CodeQL Works](#how-codeql-works)
  - [Types of Vulnerabilities CodeQL Detects](#types-of-vulnerabilities-codeql-detects)
  - [Configuring Code Scanning](#configuring-code-scanning)
  - [Copilot Autofix: The Automatic Repairer](#copilot-autofix-the-automatic-repairer)
- [Section 3 -- Secret Scanning: The Anti-Theft Alarm](#section-3--secret-scanning-the-anti-theft-alarm)
  - [What is Secret Scanning](#what-is-secret-scanning)
  - [What Counts as a "Secret"](#what-counts-as-a-secret)
  - [How Secret Scanning Works](#how-secret-scanning-works)
  - [Push Protection: The Final Barrier](#push-protection-the-final-barrier)
  - [Configuring Secret Scanning](#configuring-secret-scanning)
- [Section 4 -- Dependabot: The Inspector Toad](#section-4--dependabot-the-inspector-toad)
  - [What is Dependabot](#what-is-dependabot)
  - [Dependabot's 3 Functions](#dependabots-3-functions)
  - [How Dependabot Works](#how-dependabot-works)
  - [Configuring Dependabot](#configuring-dependabot)
- [Section 5 -- Supply Chain Security: The Trustworthy Item Shop](#section-5--supply-chain-security-the-trustworthy-item-shop)
  - [What is Supply Chain Security](#what-is-supply-chain-security)
  - [Types of Supply Chain Attacks](#types-of-supply-chain-attacks)
  - [GitHub's Defenses](#githubs-defenses)
  - [Dependency Graph and SBOM](#dependency-graph-and-sbom)
- [Section 6 -- Security Overview Dashboard: The Control Room](#section-6--security-overview-dashboard-the-control-room)
  - [What is the Security Overview](#what-is-the-security-overview)
  - [Dashboard Metrics](#dashboard-metrics)
  - [Using the Dashboard in Practice](#using-the-dashboard-in-practice)
- [Section 7 -- Push Protection: The Gate That Won't Open for Secrets](#section-7--push-protection-the-gate-that-wont-open-for-secrets)
  - [What is Push Protection](#what-is-push-protection)
  - [How Push Protection Works](#how-push-protection-works)
  - [What Happens When Push Protection Blocks](#what-happens-when-push-protection-blocks)
- [Section 8 -- Master Table: Everything Together](#section-8--master-table-everything-together)
- [Section 9 -- Why This Matters: A Leaked Secret = Game Over](#section-9--why-this-matters-a-leaked-secret--game-over)
  - [Real Game Over Stories](#real-game-over-stories)
  - [The Cost of NOT Having Security](#the-cost-of-not-having-security)
  - [The Cost of HAVING Security](#the-cost-of-having-security)
- [What We Learned -- Summary Table](#what-we-learned--summary-table)

---

## Introduction -- The Castle Needs More Than Walls

Sofia had just built something incredible. Her castle in the Mushroom Kingdom was complete -- solid walls, tall tower, flag on top, working drawbridge. She was proud. "My castle is perfect!" she said, admiring the construction.

The security Toad appeared beside her, carrying a flashlight and a clipboard. He looked at the castle, then at Sofia, and shook his head.

"The castle looks beautiful, Sofia. But... did you check for hidden traps in the walls? Someone may have planted a bomb in block 47 without you knowing."

Sofia frowned. "Traps? I built every block!"

"Yes, but you used third-party blocks, right? Ready-made packages from the Item Shop? Did you check whether any of them came with a hidden trap?" He looked at the door. "And the castle key... where is it?"

"Right there, in my inventory--" Sofia stopped. The key was lying on the ground, visible to anyone passing by.

"Exactly," said the Toad. "Your castle key is exposed. Any Koopa walking by could grab it and get in. And those blocks you got from the Shop? Three of them are outdated and have known vulnerabilities. An attacker could use any of those gaps to break in."

Sofia turned pale. "What do I do?"

The Toad smiled. "You activate the **Star Shield** -- GitHub Advanced Security. It's like having a complete security system for your castle: trap detectors, anti-theft alarms, item inspectors, and a control room where you can see everything. Come with me."

---

## Section 1 -- What is GitHub Advanced Security (GHAS)

### GHAS Overview

**GitHub Advanced Security (GHAS)** is a set of security tools integrated directly into GitHub that protect your code, your dependencies, and your secrets. It's not a separate tool you need to install -- it's INSIDE GitHub, functioning as an invisible and constant layer of protection.

GHAS works on three fronts simultaneously:
1. **Finding problems in YOUR code** (Code Scanning)
2. **Finding leaked secrets** (Secret Scanning)
3. **Finding problems in your DEPENDENCIES** (Dependabot)

And all of this happens **automatically**, without you needing to remember to run scans. It's like having guards patrolling the castle 24 hours a day, 7 days a week.

> **MARIO ANALOGY:** GHAS is the **Star Shield** -- that legendary power-up that gives the castle total protection. It's not just ONE item. It's a COMPLETE defense system: cameras (Code Scanning), alarms (Secret Scanning), inspectors (Dependabot), and a control room (Security Dashboard). Each component protects against a different type of threat. Together, they form a fortress.

### The 4 Security Pillars

### Table: The 4 Pillars vs Castle Defenses

| GHAS Pillar | What It Protects | Against What | Mario Analogy | Status |
|---|---|---|---|---|
| **Code Scanning (CodeQL)** | Your source code | Vulnerabilities in code you wrote | **Trap visor** -- reveals hidden bombs in blocks | Available for all public repos; GHAS for private ones |
| **Secret Scanning** | Credentials and secrets | Passwords, API keys, tokens leaked in code | **Anti-theft alarm** -- triggers if the castle key is exposed | Available for all public repos; GHAS for private ones |
| **Dependabot** | Your dependencies | Vulnerabilities in third-party packages | **Inspector Toad** -- checks if your purchased items are safe | Available free for everyone |
| **Security Overview** | Overall view | Lack of visibility into security status | **Control room** -- sees everything from above, all alerts in one place | Available with GHAS |

---

## Section 2 -- Code Scanning (CodeQL): The Trap Detector

### What is Code Scanning

**Code Scanning** is the ability to automatically analyze your source code for security vulnerabilities, bugs, and dangerous patterns. The main engine behind Code Scanning is **CodeQL** -- a semantic analysis engine that understands your code as a searchable database.

CodeQL doesn't just look for text patterns (like a `grep`). It **understands** your code's flow: where data comes from, where it passes through, and where it ends up. This allows it to find complex vulnerabilities that simpler tools can't detect.

> **MARIO ANALOGY:** Code Scanning is like having a **special visor** that reveals hidden traps in a stage BEFORE you step on them. Without the visor, you see a normal stage -- blocks, coins, platforms. With the visor, you see: "CAREFUL! That block at position 47 has a hidden bomb. That green pipe leads to a trap. That coin is bait." The visor doesn't change the stage -- it shows you what was hidden.

### How CodeQL Works

```
YOUR CODE                     CodeQL                    RESULT
    │                           │                          │
    v                           v                          v
┌──────────┐            ┌──────────────┐           ┌───────────┐
│ function │            │ Transforms   │           │ ALERT:    │
│ login(   │  ────────> │ code into a  │ ────────> │ SQL       │
│   user,  │            │ searchable   │           │ Injection │
│   pass   │            │ database     │           │ at line   │
│ ) {      │            │              │           │ 42        │
│  query(  │            │ Runs         │           │           │
│   "SELECT│            │ security     │           │ SUGGESTION│
│   * FROM │            │ queries      │           │ Use       │
│   users  │            │              │           │ prepared  │
│   WHERE  │            │ Finds        │           │ statements│
│   name=" │            │ dangerous    │           │           │
│   + user │            │ patterns     │           │           │
│  )       │            │              │           │           │
│ }        │            │              │           │           │
└──────────┘            └──────────────┘           └───────────┘
```

Code Scanning steps:
1. **Trigger:** A push or PR automatically triggers the scan
2. **Build:** CodeQL compiles your code and creates a semantic database
3. **Analysis:** Security queries run against the database
4. **Results:** Found vulnerabilities appear as alerts on the PR or in the Security tab
5. **Fix:** You (or Copilot Autofix) fix the problem

### Types of Vulnerabilities CodeQL Detects

| Vulnerability | What It Is | Risk | Mario Analogy | Example |
|---|---|---|---|---|
| **SQL Injection** | Attacker injects SQL commands via user input | CRITICAL -- full database access | Koopa who enters through the intake pipe and reaches the treasure directly | `query("SELECT * FROM users WHERE name=" + userInput)` |
| **Cross-Site Scripting (XSS)** | Attacker injects malicious JavaScript into the page | HIGH -- session theft, user data | Goomba disguised as a coin -- you grab it and lose a life | `<div>{userInput}</div>` without sanitization |
| **Path Traversal** | Attacker accesses files outside the allowed directory | HIGH -- reading sensitive files | Koopa who discovers a secret passage out of the castle | `readFile("/data/" + userInput)` where input is `../../etc/passwd` |
| **Insecure Deserialization** | Attacker sends a malicious object that gets executed | CRITICAL -- remote code execution | Trojan gift -- looks like an item but is a bomb | `JSON.parse(untrustedInput)` with eval |
| **Hard-coded Credentials** | Passwords or keys written directly in code | CRITICAL -- direct system access | Castle key hanging on the front door | `password = "admin123"` |
| **Broken Authentication** | Flaws in identity verification | HIGH -- unauthorized access | Castle door that anyone can open | Missing token verification on protected routes |

### Configuring Code Scanning

To enable Code Scanning on your repository, simply add a GitHub Actions workflow:

```yaml
# .github/workflows/codeql-analysis.yml
name: "CodeQL Analysis"

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 8 * * 1'  # Monday at 8am (weekly scan)

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      security-events: write
    strategy:
      matrix:
        language: [ 'javascript', 'typescript' ]
        # Supported languages: javascript, typescript, python,
        # java, csharp, cpp, go, ruby, swift, kotlin

    steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Initialize CodeQL
      uses: github/codeql-action/init@v3
      with:
        languages: ${{ matrix.language }}
        # queries: +security-extended  # For more detections

    - name: Autobuild
      uses: github/codeql-action/autobuild@v3

    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v3
```

> **MARIO ANALOGY:** Configuring CodeQL is like installing the **trap detection system** in your castle. You define: "Scan EVERY TIME someone enters through the main door (push to main), EVERY TIME someone requests permission to enter (Pull Request), and EVERY Monday morning as a routine inspection (schedule)." Once installed, the system works on its own. You only need to pay attention when it sounds the alarm.

### Copilot Autofix: The Automatic Repairer

When CodeQL finds a vulnerability, **Copilot Autofix** can automatically generate a fix suggestion. It analyzes the vulnerability, understands the code's context, and proposes the minimum change needed to resolve the problem.

```
CODEQL FOUND:
  Vulnerability: SQL Injection at line 42
  File: src/api/users.ts
  Vulnerable code:
    const result = await db.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );

COPILOT AUTOFIX SUGGESTS:
  Fix: Use prepared statement
  Fixed code:
    const result = await db.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
  Explanation: "Replaced string concatenation with a
               prepared parameter ($1) to prevent
               SQL Injection."
```

> **MARIO ANALOGY:** CodeQL is the visor that finds the trap. Copilot Autofix is the Toad who says: *"I found a bomb in block 47. Here's the safe block to put in its place. Want me to swap it?"* You can accept the swap or make the fix yourself.

---

## Section 3 -- Secret Scanning: The Anti-Theft Alarm

### What is Secret Scanning

**Secret Scanning** is the ability to automatically detect when credentials, API keys, tokens, passwords, or other secrets are accidentally committed to the repository. It monitors every push, every commit, every file, looking for patterns that match known secrets.

Secret Scanning works in partnership with more than 200 service providers (AWS, Azure, Google Cloud, Stripe, Twilio, etc.) that supply their secrets' patterns. When a secret is detected, the provider can be notified automatically to revoke access.

> **MARIO ANALOGY:** Secret Scanning is an **anti-theft alarm** installed throughout the entire castle. If someone drops the castle key on the floor (commit with API key), the alarm triggers IMMEDIATELY. But it doesn't stop there -- the alarm also notifies the locksmith (service provider) to change the lock (revoke the secret). All automatic, all instant.

### What Counts as a "Secret"

| Secret Type | Example | Risk if Leaked | Mario Analogy |
|---|---|---|---|
| **API Key** | `AKIAIOSFODNN7EXAMPLE` (AWS) | Attacker uses your cloud resources (and you pay) | Key that opens the coin chest -- intruder takes all the coins |
| **Access Token** | `ghp_xxxxxxxxxxxxxxxxxxxx` (GitHub) | Attacker accesses your repos, code, configurations | Castle master key -- opens ALL doors |
| **Database Password** | `DATABASE_URL=postgres://user:password@host/db` | Attacker accesses, modifies, or deletes your data | Treasury key -- direct access to the vault |
| **Private Key** | `-----BEGIN RSA PRIVATE KEY-----` | Attacker impersonates you on any system | Royal seal -- intruder can impersonate the King |
| **OAuth Token** | `ya29.xxxxxxxxxxxxxxxxxxxx` (Google) | Attacker accesses linked Google accounts | VIP pass -- access to restricted areas |
| **Webhook Secret** | `whsec_xxxxxxxxxxxxxxxxxx` (Stripe) | Attacker can forge financial transactions | Official stamp -- can forge kingdom documents |

### How Secret Scanning Works

```
YOU PUSH CODE
         │
         v
  ┌──────────────────┐
  │ SECRET SCANNING   │
  │ analyzes every    │
  │ file, every       │
  │ line, every       │
  │ commit            │
  └────────┬─────────┘
           │
      ┌────┴────┐
   CLEAN     SECRET DETECTED!
     │              │
     v              v
  ┌──────┐   ┌──────────────────────┐
  │ OK   │   │ 1. Alert on GitHub   │
  │ All  │   │ 2. Email to you      │
  │ good │   │ 3. Notify provider   │
  └──────┘   │ 4. Provider revokes  │
             │    the secret        │
             └──────────────────────┘
```

The process happens in milliseconds:

| Step | What Happens | Time | Mario Analogy |
|---|---|---|---|
| **1. Detection** | Scan finds a secret pattern in the code | Milliseconds | Alarm detects the key on the floor |
| **2. Validation** | Verifies the secret is real (not a placeholder) | Milliseconds | Alarm confirms it's the REAL key, not a copy |
| **3. Alert** | Creates an alert in the repo's Security tab | Seconds | Siren sounds in the castle |
| **4. Notification** | Sends email to admins and whoever made the commit | Seconds | Messenger runs to you |
| **5. Partner** | Notifies the service provider (AWS, Azure, etc.) | Seconds | Messenger runs to the locksmith |
| **6. Revocation** | Provider automatically revokes the secret | Minutes | Locksmith changes the lock |

### Push Protection: The Final Barrier

**Push Protection** is an EXTRA security layer that blocks the push BEFORE the secret reaches the repository. Instead of detecting after the secret has already been committed, Push Protection prevents it from being sent.

```
WITHOUT PUSH PROTECTION:
  You push → secret goes to repo → scan detects → alert → you remove
  (But the secret was public for some time!)

WITH PUSH PROTECTION:
  You push → scan detects BEFORE accepting → BLOCKS → secret never arrives
  (The secret was never public!)
```

> **MARIO ANALOGY:** Push Protection is like a **gate with a metal detector** at the castle entrance. WITHOUT the gate, you walk into the castle carrying a bomb (secret) unknowingly, the bomb is detected INSIDE the castle, and everyone panics to remove it. WITH the gate, you try to enter, the detector beeps, and the guard says: *"Hey, you've got something dangerous there. Remove it before entering."* The bomb never enters the castle.

### Configuring Secret Scanning

Secret Scanning is enabled on the repository's Settings page:

```
Repository → Settings → Code security and analysis

  Secret scanning:                    [Enable]
  Push protection:                    [Enable]

  ☑ Scan for generic secrets (AI-powered)
  ☑ Alert on exposure of partner patterns
  ☑ Notify partners for automatic revocation
```

For additional protection, add a robust `.gitignore` and use environment variables:

```bash
# .gitignore -- NEVER commit these files
.env
.env.local
.env.production
*.key
*.pem
credentials.json
service-account.json
```

```bash
# Use environment variables instead of hardcoded values
# WRONG (secret in code):
API_KEY = "sk-xxxxxxxxxxxxxxxxxxxxx"

# RIGHT (secret in environment variable):
API_KEY = os.environ.get("API_KEY")
# The actual value is in .env (which is in .gitignore)
# or in GitHub Secrets (Settings → Secrets)
```

---

## Section 4 -- Dependabot: The Inspector Toad

### What is Dependabot

**Dependabot** is a bot integrated into GitHub that monitors your dependencies (packages, libraries, frameworks you use) and alerts you when any of them has a known vulnerability or is outdated. Besides alerting you, it can create automatic Pull Requests with the necessary update.

In practice, almost every modern project uses dozens to hundreds of dependencies. And each of those dependencies has its OWN dependencies. It's a huge chain. Monitoring everything manually would be impossible -- and that's where Dependabot comes in.

> **MARIO ANALOGY:** Dependabot is the **Inspector Toad** who checks your inventory regularly. Imagine you bought a sword from the Mushroom Kingdom Item Shop. Months later, it's discovered that batch of swords had a defect -- they break in the middle of battle. The Inspector Toad knocks on your door and says: *"Sofia, that sword you bought last month? It has a known defect. Here's the corrected version. Want me to swap it for you?"* He monitors ALL your items, EVERY day, and alerts you when any of them has a problem.

### Dependabot's 3 Functions

| Function | What It Does | When It Activates | Mario Analogy |
|---|---|---|---|
| **Dependabot Alerts** | Warns when a dependency has a known vulnerability | When a new CVE is published for one of your dependencies | Inspector Toad knocking on the door: "Your sword has a defect!" |
| **Dependabot Security Updates** | Creates an automatic PR with the security fix | When a fix exists for the vulnerability | Inspector Toad bringing the new sword: "Can I swap it for you?" |
| **Dependabot Version Updates** | Creates PRs to keep dependencies on the latest version | Periodically (daily, weekly, monthly) | Inspector Toad doing a general review: "These 5 items have newer versions" |

### How Dependabot Works

```
YOUR PROJECT                   DEPENDABOT                  RESULT
    │                              │                          │
    v                              v                          v
┌──────────┐              ┌──────────────┐            ┌───────────┐
│ package  │              │ Compares your│            │ ALERT:    │
│ .json:   │  ─────────>  │ dependencies │ ─────────> │ lodash    │
│          │              │ against      │            │ 4.17.20   │
│ lodash:  │              │ vulnerability│            │ has CVE   │
│  4.17.20 │              │ database     │            │           │
│ express: │              │ (GitHub      │            │ PR created│
│  4.18.1  │              │  Advisory    │            │ updating  │
│ react:   │              │  Database)   │            │ to        │
│  18.2.0  │              │              │            │ 4.17.21   │
│          │              │              │            │           │
└──────────┘              └──────────────┘            └───────────┘
```

Example of a PR created by Dependabot:

```
PR #312: Bump lodash from 4.17.20 to 4.17.21

Dependabot updated lodash from 4.17.20 to 4.17.21.

Changelog:
  - Fixes Prototype Pollution vulnerability (CVE-2021-23337)
  - Severity: HIGH
  - CVSS Score: 7.2

Compatibility:
  - No breaking changes
  - All tests passed

────────────────────────────
This PR was created automatically by Dependabot.
```

> **MARIO ANALOGY:** The Inspector Toad did all the work: found the defective item, fetched the corrected version from the Shop, brought it to you, and explained exactly what the defect was and how the new version fixes it. You just need to approve the swap (merge the PR). If you want, you can test the new sword before accepting (run the tests).

### Configuring Dependabot

Create a `.github/dependabot.yml` file in your repository:

```yaml
# .github/dependabot.yml
version: 2
updates:
  # npm dependencies (frontend and backend JavaScript/TypeScript)
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"       # Check weekly
      day: "monday"            # Every Monday
      time: "09:00"            # At 9am
      timezone: "America/Sao_Paulo"
    open-pull-requests-limit: 10  # Maximum 10 open PRs
    labels:
      - "dependencies"
      - "automated"
    commit-message:
      prefix: "chore(deps):"  # Commit message prefix
    # Group minor updates to reduce PRs
    groups:
      dev-dependencies:
        patterns:
          - "@types/*"
          - "eslint*"
          - "jest*"
          - "typescript"
        update-types:
          - "minor"
          - "patch"

  # GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"
    labels:
      - "ci/cd"
      - "automated"

  # Docker
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
    labels:
      - "infrastructure"
      - "automated"
```

> **MARIO ANALOGY:** Configuring Dependabot is like giving instructions to the Inspector Toad: "Inspect my inventory every Monday at 9am. Check combat items (npm), transport items (GitHub Actions), and construction items (Docker). If you find more than 10 problems, resolve the 10 most critical ones first. And group minor updates so you don't overwhelm me with too many alerts."

---

## Section 5 -- Supply Chain Security: The Trustworthy Item Shop

### What is Supply Chain Security

**Supply Chain Security** is the practice of ensuring that all dependencies, tools, and components you use in your project are **secure, authentic, and free of malicious code**. The name "supply chain" comes from the physical-world analogy: just as you trust that food at the supermarket isn't poisoned, you trust that packages on npm/PyPI/Maven don't contain malware.

But what if the supply chain is compromised? What if someone injects malicious code into a popular package? What if the Mushroom Kingdom Item Shop starts selling cursed items?

> **MARIO ANALOGY:** Supply Chain Security is ensuring that the **Mushroom Kingdom Item Shop** isn't selling cursed items. You buy a Super Mushroom thinking you'll grow... but it's actually a Poison Mushroom in disguise that shrinks you. The Shop looked trustworthy, the item looked legitimate, but someone tampered with the product before it reached the shelf. Supply Chain Security is having inspectors checking every item before it enters the Shop.

### Types of Supply Chain Attacks

| Attack | How It Works | Risk | Mario Analogy |
|---|---|---|---|
| **Typosquatting** | Package with a name similar to the original (e.g., `loadsh` instead of `lodash`) | You install the wrong package with malware | Shop sells "Super Mushron" (almost like Super Mushroom) -- looks real, but it's poison |
| **Dependency Confusion** | Public package with the same name as your company's internal package | Build system installs the public (malicious) one instead of the internal one | Shop sells a cheap copy of an exclusive castle item -- looks the same, but it's fake |
| **Maintainer Takeover** | Attacker takes control of a popular package | Next update comes with malware | New Shop owner replaces real items with cursed ones |
| **Build System Compromise** | Attacker compromises a package's build system | Compiled package contains malware even with clean source code | Item factory tampers with the product AFTER it leaves the original recipe |

### GitHub's Defenses

| Defense | How It Protects | What You See | Mario Analogy |
|---|---|---|---|
| **Dependency Graph** | Maps ALL your dependencies (direct and transitive) | Visual graph of who depends on whom | Map of ALL items in your inventory, including what's inside each one |
| **Dependency Review** | Shows which dependencies a PR adds/removes and their risks | Alerts on the PR: "This dependency has 3 vulnerabilities" | Inspector who analyzes each new item before it enters the castle |
| **Advisory Database** | Database of known vulnerabilities in packages | Base used by Dependabot for comparison | Book listing all defective items ever discovered |
| **npm Provenance** | Verifies the package was built by the author's official CI | Authenticity seal on the package | Official authenticity stamp -- "This item was made at the original factory" |
| **SBOM (Software Bill of Materials)** | Complete list of all components in your software | Exportable document with all dependencies | Official castle inventory -- list of ALL items used in construction |

### Dependency Graph and SBOM

The **Dependency Graph** is like an X-ray of your project -- it shows everything your code uses, including dependencies of dependencies (transitive):

```
YOUR PROJECT
├── react 18.2.0          (you chose)
│   ├── react-dom 18.2.0  (react needs)
│   └── scheduler 0.23.0  (react needs)
├── express 4.18.1         (you chose)
│   ├── body-parser 1.20.0 (express needs)
│   │   └── bytes 3.1.2    (body-parser needs)
│   ├── cookie 0.5.0       (express needs)
│   └── qs 6.11.0          (express needs)
├── lodash 4.17.21         (you chose)
└── prisma 5.0.0           (you chose)
    ├── @prisma/client     (prisma needs)
    └── @prisma/engines    (prisma needs)

Total: 4 direct dependencies, 10+ transitive
Any one of them could have a vulnerability!
```

> **MARIO ANALOGY:** You bought 4 items from the Shop (react, express, lodash, prisma). But INSIDE each item, there are other smaller components you didn't directly choose. Express, for example, came with body-parser, cookie, and qs embedded. If any of those internal components has a defect, YOUR castle is at risk. The Dependency Graph shows that entire chain. And the SBOM is the official list: "My castle was built with THESE 14 components."

---

## Section 6 -- Security Overview Dashboard: The Control Room

### What is the Security Overview

The **Security Overview** is a centralized dashboard that shows the security status of all your repositories in one place. Instead of going into each repository individually to check alerts, you see everything from above -- like a control room with monitors showing every sector of the castle.

> **MARIO ANALOGY:** The Security Overview is the castle's **Control Room**. Imagine a room at the top of the tower with monitors showing every door, every hallway, every window. One monitor shows: "East Door: SECURE." Another: "North Hallway: ALERT -- defective item detected." Another: "Treasury: SECURE -- last inspection 2 hours ago." You don't need to walk through the entire castle to know what's happening -- it's all right in front of you.

### Dashboard Metrics

| Metric | What It Shows | Why It Matters | Mario Analogy |
|---|---|---|---|
| **Open alerts** | How many vulnerabilities haven't been fixed yet | Know the size of the problem | How many doors have defects in the castle |
| **Alerts by severity** | Critical, High, Medium, Low | Prioritize what to fix first | Which doors lead to the treasury (critical) vs pantry (low) |
| **Mean time to fix (MTTR)** | How long it takes to fix vulnerabilities | Measure response speed | How long between detecting a broken door and fixing it |
| **Scanning coverage** | How many repos have scanning enabled | Know if all castles are protected | How many castles have the alarm system installed |
| **Trend** | Alerts increasing or decreasing over time | Know if the situation is improving | Is the castle getting more secure or less secure? |
| **Exposed secrets** | How many credentials were detected in code | Immediate critical alert | How many castle keys are lying on the floor |

### Using the Dashboard in Practice

```
SECURITY OVERVIEW -- Mushroom Kingdom Corp
─────────────────────────────────────────────

TOTAL ALERTS:    23
  Critical:       2  ████░░░░░░  (ATTENTION!)
  High:           5  ██████████
  Medium:        10  ████████████████████
  Low:            6  ████████████

COVERAGE:
  Code Scanning:    45/50 repos (90%)  ██████████████████░░
  Secret Scanning:  50/50 repos (100%) ████████████████████
  Dependabot:       48/50 repos (96%)  ███████████████████░

TREND (last 30 days):
  Open alerts:    ↓ 15%  (improving!)
  MTTR:           ↓ 20%  (faster!)
  New alerts:     → 0%   (stable)

TOP REPOSITORIES WITH MOST ALERTS:
  1. todo-app-backend     (8 alerts -- 2 critical)
  2. payment-service      (5 alerts -- 0 critical)
  3. auth-gateway         (4 alerts -- 0 critical)

RECOMMENDED ACTIONS:
  ⚡ 2 CRITICAL alerts in todo-app-backend need
     immediate attention (SQL Injection + Exposed Secret)
  📋 5 repos without Code Scanning -- enable this week
```

> **MARIO ANALOGY:** The Control Room tells you: "Sofia, your main castle (todo-app-backend) has 2 CRITICAL PROBLEMS -- a trap in the throne room and an exposed key at the entrance. The other castles are okay but 5 of them don't have the alarm system installed yet. Overall, security improved 15% in the past month. But those 2 critical problems need to be resolved NOW."

---

## Section 7 -- Push Protection: The Gate That Won't Open for Secrets

### What is Push Protection

**Push Protection** is a Secret Scanning feature that prevents secrets from being sent to the repository. Instead of detecting afterward (and having to remediate), it **blocks at the source**.

Push Protection works both on `git push` via terminal and on the GitHub web interface. It's the last line of defense before a secret becomes public.

### How Push Protection Works

```
YOU AT THE TERMINAL:

$ git add .
$ git commit -m "feat: add payment integration"
$ git push origin main

PUSH PROTECTION KICKS IN:

Remote: ╔═════════════════════════════════════════════════╗
Remote: ║        PUSH BLOCKED -- SECRET DETECTED          ║
Remote: ╠═════════════════════════════════════════════════╣
Remote: ║                                                 ║
Remote: ║  Secret type: Stripe API Key                    ║
Remote: ║  File: src/services/payment.ts                  ║
Remote: ║  Line: 12                                       ║
Remote: ║                                                 ║
Remote: ║  To push, you must first remove the secret      ║
Remote: ║  from your commits.                             ║
Remote: ║                                                 ║
Remote: ║  See: https://docs.github.com/secret-scanning   ║
Remote: ╚═════════════════════════════════════════════════╝

! [remote rejected] main -> main (push declined due to secret detection)
```

### What Happens When Push Protection Blocks

| Step | What to Do | Command | Mario Analogy |
|---|---|---|---|
| **1. Understand** | Read the error message -- which secret, which file, which line | (read the message) | Guard shows the dangerous item: "This can't come in" |
| **2. Remove** | Remove the secret from the code and use an environment variable | Move to `.env` or GitHub Secrets | Keep the key in the secret pocket instead of carrying it in plain sight |
| **3. Clean history** | Remove the secret from commit history | `git rebase` or BFG Repo Cleaner | Erase footprints so no one follows the trail |
| **4. Re-push** | Push again without the secret | `git push origin main` | Pass through the gate clean -- no prohibited items |

```bash
# Practical steps to resolve:

# 1. Remove the secret from the file
# Instead of:
#   STRIPE_KEY = "sk_live_xxxxx"
# Use:
#   STRIPE_KEY = process.env.STRIPE_KEY

# 2. Add to .env (which is in .gitignore):
echo 'STRIPE_KEY=sk_live_xxxxx' >> .env

# 3. Add to GitHub Secrets (for CI/CD):
gh secret set STRIPE_KEY --body "sk_live_xxxxx"

# 4. Commit the fix and push:
git add src/services/payment.ts
git commit -m "fix: move Stripe key to environment variable"
git push origin main
# Now it passes!
```

> **MARIO ANALOGY:** The gate detected you were carrying the castle key visibly. The guard stopped you: *"You can't enter with the key like that! Put it in your secret pocket (.env) and register it at the secure key room (GitHub Secrets). Then you can enter."* You put the key in the right place, and the gate opens. Simple as that.

---

## Section 8 -- Master Table: Everything Together

| GHAS Feature | What It Does | Against What | Mario Analogy | How to Enable |
|---|---|---|---|---|
| **Code Scanning (CodeQL)** | Scans your code for vulnerabilities | SQL Injection, XSS, Path Traversal, and 200+ patterns | **Trap visor** -- reveals hidden bombs in blocks | Add workflow `.github/workflows/codeql-analysis.yml` |
| **Copilot Autofix** | Suggests automatic fixes for vulnerabilities | Vulnerabilities found by Code Scanning | **Repairer Toad** -- brings the replacement block and offers to swap | Automatically enabled with Code Scanning + Copilot |
| **Secret Scanning** | Detects leaked credentials in code | API keys, tokens, passwords, exposed private keys | **Anti-theft alarm** -- triggers when the key is exposed | Settings → Code security → Enable Secret Scanning |
| **Push Protection** | Blocks push containing secrets | Secrets being accidentally committed | **Gate with detector** -- blocks entry of prohibited items | Settings → Code security → Enable Push Protection |
| **Dependabot Alerts** | Warns about vulnerabilities in dependencies | Outdated packages with known CVEs | **Inspector Toad** -- warns that your item has a defect | Automatic for public repos; Settings for private ones |
| **Dependabot Updates** | Creates PRs to update dependencies | Outdated dependencies | **Inspector Toad** -- brings the corrected version for you | Create `.github/dependabot.yml` |
| **Dependency Graph** | Maps all project dependencies | Lack of visibility into used components | **Inventory X-ray** -- shows everything inside each item | Automatic for all repos |
| **Security Overview** | Centralized security dashboard | Lack of overall security status view | **Control room** -- monitors showing the entire castle | Available at Organization → Security |

---

## Section 9 -- Why This Matters: A Leaked Secret = Game Over

### Real Game Over Stories

These aren't hypothetical scenarios. These are things that actually happened:

| Incident | What Happened | Consequence | Could Have Been Prevented with... |
|---|---|---|---|
| **Uber (2016)** | Developers committed AWS credentials in a GitHub repo | Data of 57 million users and drivers leaked. Uber paid $148 million in settlement. | Secret Scanning + Push Protection |
| **Samsung (2022)** | Signing keys leaked in a public repository | Attackers could sign malware as if it were an official Samsung app | Secret Scanning |
| **Log4Shell (2021)** | Critical vulnerability in the Log4j library (used by millions of projects) | Remote code execution on ANY system with Log4j | Dependabot (alerted hours after the CVE was published) |
| **event-stream (2018)** | New maintainer of npm package injected malware | Malware stole Bitcoin from developer wallets | Dependency Review + Supply Chain Security |
| **Codecov (2021)** | Supply chain attack on Codecov's CI | Credentials from thousands of repositories exposed | Supply Chain Security + Secret rotation |

### The Cost of NOT Having Security

| What Happens | Financial Cost | Reputation Cost | Time Cost |
|---|---|---|---|
| **Leaked API key** | Hundreds to thousands of dollars in fraudulent usage | Incident notice to clients | Days to investigate, revoke, rotate |
| **Leaked user data** | LGPD/GDPR fines (up to 4% of global revenue) | Loss of trust, users leave | Months of investigation and remediation |
| **Exploited vulnerability** | Incident response, forensics, restoration costs | Negative media headlines | Weeks of recovery |
| **Supply chain attack** | Compromise of all downstream clients | Trust crisis across the entire ecosystem | Months to identify and clean up |

> **MARIO ANALOGY:** A leaked secret is like leaving the castle key on the door. It doesn't matter how thick the walls are, how strong the guards are, how deep the moat is. If the key is on the door, any Koopa walks in. And once inside, they can steal the treasure (data), kidnap the princess (bring down the service), or plant bombs (malware). **A single exposed key nullifies ALL the castle's security.** That's why GHAS isn't optional -- it's ESSENTIAL. And the cost of enabling GHAS is infinitely less than the cost of an incident.

### The Cost of HAVING Security

| Investment | What It Costs | What It Prevents | ROI |
|---|---|---|---|
| **Enable GHAS** | Configuration time (minutes to hours) | All incidents listed above | Astronomical |
| **Code Scanning** | Minutes of CI per push | Vulnerabilities in production | Each vulnerability found = weeks of remediation saved |
| **Secret Scanning** | Zero performance cost | Credential leaks | Each blocked secret = potentially millions saved |
| **Dependabot** | PRs to review (minutes) | Vulnerable dependencies in production | Each security update = risk eliminated |
| **Push Protection** | Seconds of delay on push (when detected) | Secrets reaching the repo | Total prevention vs costly remediation |

---

## What We Learned -- Summary Table

| Topic | Key Concept | Mario Analogy | Practical Application |
|---|---|---|---|
| **GHAS** | Complete security suite integrated into GitHub | Star Shield -- complete defense system for the castle | Enable all available features for your repositories |
| **Code Scanning** | Detects vulnerabilities in your code | Trap visor that reveals hidden bombs | Configure CodeQL workflow + enable Copilot Autofix |
| **Secret Scanning** | Detects leaked credentials in the repository | Anti-theft alarm that triggers when the key is exposed | Enable + enable Push Protection |
| **Push Protection** | Blocks push containing secrets | Gate with detector at the castle entrance | Enable for prevention (much better than remediation) |
| **Dependabot** | Monitors and updates vulnerable dependencies | Inspector Toad who checks if your items are safe | Configure `dependabot.yml` with schedule and grouping |
| **Supply Chain** | Ensure dependencies are secure and authentic | Certification that the Item Shop doesn't sell cursed items | Use Dependency Graph, Dependency Review, SBOM |
| **Security Dashboard** | Centralized view of security status | Control room with monitors of the entire castle | Review regularly, prioritize critical alerts |
| **Real Game Over** | A leaked secret can cost millions | One key on the door nullifies all castle defenses | Security isn't optional -- it's the first thing to configure |

---

### POWER-UP UNLOCKED!

Sofia now understands GitHub Advanced Security as a complete defense system -- not an isolated tool, but a layered shield that protects code, secrets, dependencies, and the entire supply chain. She knows that security isn't something you add at the end -- it's something you enable at the START and monitor ALWAYS.

She looked at her castle in the Mushroom Kingdom. Now it had the trap visor (Code Scanning), the anti-theft alarm (Secret Scanning), the gate with detector (Push Protection), the Inspector Toad (Dependabot), the Item Shop certification (Supply Chain Security), and the control room (Security Overview). It wasn't just a beautiful castle anymore. It was a fortress.

"Before, I thought security was boring and complicated," Sofia admitted. "Now I see it's like locking your front door. You don't do it because it's fun -- you do it because the alternative is much worse."

The security Toad smiled. "Exactly, Sofia. And the best part? Once configured, it works on its own. You can go back to playing your stages in peace, knowing the castle is protected."

She stored this power-up in her inventory and headed to the next stage of the Mushroom Kingdom...

*Press START to continue...*

---

## References

- [GitHub Code Security](https://docs.github.com/en/code-security)
- [GitHub Code Scanning](https://docs.github.com/en/code-security/code-scanning)
- [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning)
- [GitHub Dependabot](https://docs.github.com/en/code-security/dependabot)

---

<div align="center">

⬅️ [Previous: Level 5-8: Three Horizons](5-8_three-horizons.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 5-10: SDD](5-10_sdd.md)

</div>
