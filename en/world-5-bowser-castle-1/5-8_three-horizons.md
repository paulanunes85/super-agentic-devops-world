---
title: "Level 5-8 -- The Three Horizons: Evolution Strategy"
description: "The Three Horizons framework for progressive adoption of AI and Agentic DevOps in organizations, from foundation to complete transformation."
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - three-horizons
  - strategy
  - adoption
  - platform-engineering
  - foundation
  - acceleration
  - transformation
  - mario
  - world-5
---

# Level 5-8 -- The Three Horizons: Evolution Strategy

## Change Log

| Version | Date       | Author       | Description                        |
|---------|------------|--------------|------------------------------------|
| 1.0.0   | 2026-03-18 | Paula Silva  | Initial chapter creation           |

---

## Table of Contents

- [Introduction -- The Map of the Three Kingdoms](#introduction--the-map-of-the-three-kingdoms)
- [Section 1 -- What are the Three Horizons?](#section-1--what-are-the-three-horizons)
  - [1.1 Framework Definition](#11-framework-definition)
  - [1.2 Why Three Horizons?](#12-why-three-horizons)
  - [1.3 The Mario Analogy: The Three Kingdoms of the Mushroom Kingdom](#13-the-mario-analogy-the-three-kingdoms-of-the-mushroom-kingdom)
  - [1.4 Master Table: The Three Horizons](#14-master-table-the-three-horizons)
- [Section 2 -- Horizon 1: Foundation (Building Roads and Bridges)](#section-2--horizon-1-foundation-building-roads-and-bridges)
  - [2.1 What is Horizon 1](#21-what-is-horizon-1)
  - [2.2 Mario Analogy: Building Roads and Bridges](#22-mario-analogy-building-roads-and-bridges)
  - [2.3 What to Do in Horizon 1](#23-what-to-do-in-horizon-1)
  - [2.4 Horizon 1 Technologies](#24-horizon-1-technologies)
  - [2.5 Signs You've Completed Horizon 1](#25-signs-youve-completed-horizon-1)
  - [2.6 Common Mistakes in Horizon 1](#26-common-mistakes-in-horizon-1)
- [Section 3 -- Horizon 2: Acceleration (Adding Vehicles and Fast Travel)](#section-3--horizon-2-acceleration-adding-vehicles-and-fast-travel)
  - [3.1 What is Horizon 2](#31-what-is-horizon-2)
  - [3.2 Mario Analogy: Vehicles and Fast Travel](#32-mario-analogy-vehicles-and-fast-travel)
  - [3.3 What to Do in Horizon 2](#33-what-to-do-in-horizon-2)
  - [3.4 Horizon 2 Technologies](#34-horizon-2-technologies)
  - [3.5 The 3 Pillars of Each Horizon](#35-the-3-pillars-of-each-horizon)
  - [3.6 Signs You've Completed Horizon 2](#36-signs-youve-completed-horizon-2)
- [Section 4 -- Horizon 3: Transformation (Flying and Teleporting)](#section-4--horizon-3-transformation-flying-and-teleporting)
  - [4.1 What is Horizon 3](#41-what-is-horizon-3)
  - [4.2 Mario Analogy: Flying and Teleporting](#42-mario-analogy-flying-and-teleporting)
  - [4.3 What to Do in Horizon 3](#43-what-to-do-in-horizon-3)
  - [4.4 Horizon 3 Technologies](#44-horizon-3-technologies)
  - [4.5 Signs You're in Horizon 3](#45-signs-youre-in-horizon-3)
- [Section 5 -- The 3 Pillars of Each Horizon in Detail](#section-5--the-3-pillars-of-each-horizon-in-detail)
  - [5.1 Pillar 1: Developer Productivity (Attack Power)](#51-pillar-1-developer-productivity-attack-power)
  - [5.2 Pillar 2: DevOps Lifecycle (Quest Cycle)](#52-pillar-2-devops-lifecycle-quest-cycle)
  - [5.3 Pillar 3: Application Platform (World Infrastructure)](#53-pillar-3-application-platform-world-infrastructure)
  - [5.4 Table of the 3 Pillars per Horizon](#54-table-of-the-3-pillars-per-horizon)
- [Section 6 -- Comparing the Three Horizons in Practice](#section-6--comparing-the-three-horizons-in-practice)
  - [6.1 Scenario: Creating a New Feature](#61-scenario-creating-a-new-feature)
  - [6.2 Scenario: Responding to an Incident](#62-scenario-responding-to-an-incident)
  - [6.3 Scenario: Onboarding a New Dev](#63-scenario-onboarding-a-new-dev)
- [Section 7 -- Practical Roadmap: How to Evolve Between Horizons](#section-7--practical-roadmap-how-to-evolve-between-horizons)
  - [7.1 From H1 to H2: What Needs to Happen](#71-from-h1-to-h2-what-needs-to-happen)
  - [7.2 From H2 to H3: What Needs to Happen](#72-from-h2-to-h3-what-needs-to-happen)
  - [7.3 Realistic Timeline](#73-realistic-timeline)
- [Section 8 -- The Journey is Cumulative, Not Substitutive](#section-8--the-journey-is-cumulative-not-substitutive)
  - [8.1 Each Horizon Includes the Previous One](#81-each-horizon-includes-the-previous-one)
  - [8.2 Don't Skip Horizons](#82-dont-skip-horizons)
- [Section 9 -- How to Identify Which Horizon You're In](#section-9--how-to-identify-which-horizon-youre-in)
  - [9.1 Checklist per Horizon](#91-checklist-per-horizon)
  - [9.2 Quick Self-Assessment](#92-quick-self-assessment)
- [What We Learned -- Summary Table](#what-we-learned--summary-table)
- [References](#references)

---

## Introduction -- The Map of the Three Kingdoms

Sofia was looking at a huge map on the castle wall. The map showed the Mushroom Kingdom divided into three distinct regions, each with a different level of development:

The first region showed dirt roads, wooden bridges, and simple villages. It was functional but basic.

The second region showed paved roads, fast vehicles, and villages with magic -- everything faster and more efficient.

The third region was spectacular: characters flying, teleportation portals, castles that built themselves, and an army of coordinated companions.

"These are the Three Horizons," explained the strategist Toad, pointing at the map. "Every organization starts at Horizon 1 -- building the foundation. Then it evolves to Horizon 2 -- accelerating with magic and technology. And finally reaches Horizon 3 -- complete transformation, where the impossible becomes routine."

Sofia looked at the three kingdoms. "And I'm... at Horizon 1?"

"You're already between 1 and 2, Sofia. The secret is not to try jumping straight to 3. In RPGs, you don't equip legendary armor at level 1. First you need to level up, improve your stats, and only THEN are you ready."

---

## Section 1 -- What are the Three Horizons?

### 1.1 Framework Definition

**Three Horizons** is a strategy for companies to adopt new technologies progressively -- without trying to change everything at once (which usually goes wrong).

The framework divides the transformation journey into three sequential and cumulative phases:

- **Horizon 1 (Foundation):** Stabilize and standardize. Build the base.
- **Horizon 2 (Acceleration):** Automate and enhance. Add speed.
- **Horizon 3 (Transformation):** AI-Native and Agentic. Fundamentally change how work is done.

### 1.2 Why Three Horizons?

Most companies fail when adopting new technologies because they try to go from 0 to 100 all at once. The result: chaos, waste, and rejection by the team.

The Three Horizons solve this with gradual evolution:

- H1 ensures the **fundamentals** are solid
- H2 uses the fundamentals to **accelerate** with AI and automation
- H3 transforms the way of working with **autonomous agents**

### 1.3 The Mario Analogy: The Three Kingdoms of the Mushroom Kingdom

> **MARIO ANALOGY:** Imagine the Mushroom Kingdom is being built in three phases:
>
> **Horizon 1 (Foundation):** Building roads and bridges. Before adding vehicles, you need ROADS. Before doing fast-travel, you need BRIDGES. H1 is about building the basic infrastructure: CI/CD, GitHub Enterprise, coding standards, basic security. Without this, nothing works.
>
> **Horizon 2 (Acceleration):** Adding vehicles and fast-travel. Now that the roads exist, you put VEHICLES on them (Copilot, GHAS, IDP). Mario doesn't have to walk anymore -- he rides a Yoshi, a kart, or uses an express pipe. Everything faster, but on the same H1 infrastructure.
>
> **Horizon 3 (Transformation):** Unlocking flight and teleportation. Mario doesn't need roads anymore! With the Cape Feather, he FLIES. With advanced Warp Zones, he TELEPORTS. Autonomous agents go on missions by themselves. The castle builds itself. It's a FUNDAMENTAL change in how the game works.

### 1.4 Master Table: The Three Horizons

| Horizon | Name | Mario Analogy | What Happens | Technologies |
|---|---|---|---|---|
| **H1** | Foundation -- Stabilize and Standardize | Building roads and bridges with solid foundations | Standardize processes, implement CI/CD, adopt GitHub Enterprise, establish Inner Source | GitHub Enterprise Cloud, GitHub Actions, Azure DevOps migration, basic security |
| **H2** | Acceleration -- Automate and Enhance | Adding vehicles and fast-travel (enchanting the castle with magic) | Adopt Copilot, automate testing and security, implement IDP, platform engineering | GitHub Copilot, GitHub Advanced Security (GHAS), Azure AI Foundry, IDP with templates |
| **H3** | Transformation -- AI-Native and Agentic | Unlocking flight and teleportation (the castle comes alive) | Spec-Driven Development, autonomous agents, multi-agent workflows, self-healing | Copilot Agent Mode, Coding Agents, MCP, Azure SRE Agent, Spec-Kit |

---

## Section 2 -- Horizon 1: Foundation (Building Roads and Bridges)

### 2.1 What is Horizon 1

Horizon 1 is about **stabilizing and standardizing**. Before accelerating (H2) or transforming (H3), you need a solid foundation. Without a foundation, anything you build on top will crumble.

The focus of H1:

- **Unify tools:** Everyone on GitHub Enterprise (a single platform)
- **Standardize processes:** CI/CD, branching strategy, code review, deploy
- **Implement basic security:** Authentication, authorization, secrets management
- **Establish Inner Source:** Code sharing across teams
- **Migrate from legacy tools:** Azure DevOps → GitHub, Jenkins → GitHub Actions

### 2.2 Mario Analogy: Building Roads and Bridges

> **MARIO ANALOGY:** In H1, you're building the Mushroom Kingdom's ROADS. Before Mario can run fast, he needs a PATH. Before using vehicles, he needs BRIDGES over the chasms. H1 isn't glamorous -- there are no shiny power-ups, no magic companions. But it's ESSENTIAL.
>
> Without roads, Mario has to walk through dirt, forest, and mud. Each stage takes three times as long. With paved roads, Mario already runs faster, even without power-ups. The road IS the first power-up -- just an infrastructure one.

### 2.3 What to Do in Horizon 1

| Action | What It Means | Mario Analogy |
|---|---|---|
| **Migrate to GitHub Enterprise** | Centralize all code on one platform | Building the Kingdom's MAIN ROAD |
| **Implement CI/CD with GitHub Actions** | Basic build, test, deploy automation | Adding automatic checkpoints on the roads |
| **Define branching strategy** | GitFlow, trunk-based, or GitHub Flow | Defining the TRAFFIC RULES |
| **Establish code review** | Every PR needs review before merge | Adding inspection guard posts on the bridges |
| **Configure basic security** | Branch protection, CODEOWNERS, 2FA | Building WALLS around the villages |
| **Inner Source** | Teams share code internally | Opening paths between villages (not just the main road) |
| **Document standards** | Contribution guides, PR templates | Road signs on the highways |

### 2.4 Horizon 1 Technologies

| Technology | Category | What It's For |
|---|---|---|
| **GitHub Enterprise Cloud** | Platform | Centralize code, PRs, issues, projects |
| **GitHub Actions** | CI/CD | Automated build, test, deploy pipelines |
| **Azure DevOps Migration** | Migration | Progressively migrate from ADO to GitHub |
| **Branch Protection Rules** | Security | Protect main branches |
| **CODEOWNERS** | Governance | Define owners for each code area |
| **Conventional Commits** | Standardization | Standardize commit messages |
| **SemVer** | Versioning | Semantic versioning of releases |

### 2.5 Signs You've Completed Horizon 1

- [ ] All code is on GitHub Enterprise
- [ ] All teams use CI/CD with GitHub Actions
- [ ] Every PR goes through mandatory code review
- [ ] Branch protection is configured on all repos
- [ ] Basic security implemented (2FA, SSO)
- [ ] Standards documented and followed
- [ ] Inner Source working between teams

### 2.6 Common Mistakes in Horizon 1

| Mistake | Consequence | How to Avoid |
|---|---|---|
| Skipping H1 and going straight to H2/H3 | Agents without foundation = chaos | Resist the temptation to skip steps |
| Migrating everything at once | Overwhelmed team, resistance | Migrate incrementally: one team at a time |
| Not documenting standards | Each team does things differently | Create a contribution guide BEFORE migrating |
| Ignoring basic security | Exposed vulnerabilities | Security is H1, not H2 |

---

## Section 3 -- Horizon 2: Acceleration (Adding Vehicles and Fast Travel)

### 3.1 What is Horizon 2

Horizon 2 is about **accelerating and enhancing** what already works. Now that the foundation is solid (H1), you add AI and automation to make everything faster, safer, and more efficient.

The focus of H2:

- **Adopt GitHub Copilot:** AI assisting development
- **Implement GHAS:** Automated security with AI
- **Platform Engineering:** IDP (Internal Developer Platform)
- **Intelligent automation:** AI-powered automated testing, AI code review
- **Azure AI Foundry:** Build and customize AI models

### 3.2 Mario Analogy: Vehicles and Fast Travel

> **MARIO ANALOGY:** In H2, the H1 roads now have VEHICLES. Mario can ride Yoshi (Copilot) to go faster. He can use karts (IDP) for long trips. He can use express pipes (templates) to jump straight to where he needs to go. And the castle now has magic (GHAS) that detects invaders automatically.
>
> H2 does NOT change the roads -- it adds things ON TOP of the roads. If the roads don't exist (H1 not done), the vehicles have nowhere to run. That's why H1 comes first.

### 3.3 What to Do in Horizon 2

| Action | What It Means | Mario Analogy |
|---|---|---|
| **Adopt Copilot** | Devs use Copilot to write code faster | Riding Yoshi -- companion that helps in real time |
| **Implement GHAS** | Code scanning, secret scanning, Dependabot | Installing magic trap detectors on the roads |
| **Automate tests with AI** | Automatic test generation | Automatic training before each boss battle |
| **IDP with templates** | Devs create new projects in minutes | Ready-made item shops along the way |
| **Platform Engineering** | Self-service platform for devs | Fast-travel center for all villages |
| **Azure AI Foundry** | Build and use AI models | The Forge where magic weapons are crafted |

### 3.4 Horizon 2 Technologies

| Technology | Category | What It's For |
|---|---|---|
| **GitHub Copilot** | Productivity | AI for code writing and review |
| **GitHub Advanced Security** | Security | Code scanning, secret scanning, Dependabot |
| **Azure AI Foundry** | AI | Build and customize AI models |
| **IDP (Backstage/Port)** | Platform | Self-service portal for developers |
| **Project templates** | Standardization | New projects created with standards in minutes |
| **Copilot Autofix** | Security | Automatic vulnerability fixes |

### 3.5 The 3 Pillars of Each Horizon

Each horizon is supported by 3 pillars:

| Pillar | Mario Analogy | What It Covers |
|---|---|---|
| **Developer Productivity** | The warrior's attack power | Tools that make the dev produce more and better: IDE, Copilot, templates, automation |
| **DevOps Lifecycle** | The game's quest cycle | From code to deploy: CI/CD, testing, security, monitoring -- the complete pipeline |
| **Application Platform** | The game world's infrastructure | Where the code runs: cloud, containers, Kubernetes, IDP, self-service for devs |

### 3.6 Signs You've Completed Horizon 2

- [ ] 80%+ of devs use Copilot daily
- [ ] GHAS active on all critical repositories
- [ ] AI-powered automated tests generating coverage
- [ ] IDP working -- devs create projects in minutes
- [ ] AI-assisted code review
- [ ] Productivity metrics being collected (DORA metrics)
- [ ] Automated security in the pipeline

---

## Section 4 -- Horizon 3: Transformation (Flying and Teleporting)

### 4.1 What is Horizon 3

Horizon 3 is the **total transformation**. The way of working changes fundamentally. AI agents don't just help -- they ARE team members. Development shifts from "humans write code" to "humans define specifications, agents execute."

The focus of H3:

- **Spec-Driven Development:** Specifications first, code generated by agents
- **Autonomous agents:** Coding Agents, SRE Agents, Review Agents
- **Multi-agent workflows:** Multiple coordinated agents
- **Integrated MCP:** Agents connected to all tools
- **Self-healing:** Systems that auto-correct themselves

### 4.2 Mario Analogy: Flying and Teleporting

> **MARIO ANALOGY:** In H3, Mario no longer needs roads (H1) or vehicles (H2) for day-to-day tasks. With the **Cape Feather**, he FLIES -- goes straight where he needs to without following paths. With **advanced Warp Zones**, he TELEPORTS. Autonomous companions go on missions and return with results. The castle BUILDS ITSELF based on blueprints (specs).
>
> This doesn't mean the roads and vehicles disappeared! They CONTINUE to exist for when they're needed. But the PRIMARY mode of operation is now completely different. It's like the difference between walking and teleporting -- entirely different levels of efficiency.

### 4.3 What to Do in Horizon 3

| Action | What It Means | Mario Analogy |
|---|---|---|
| **Adopt Spec-Driven Development** | Devs write specs, agents generate code | Mario draws the blueprint, NPC builds the castle |
| **Use Coding Agents** | Agents resolve issues and open PRs on their own | Yoshi goes on solo missions and returns with results |
| **Implement MCP** | Agents connected to external tools | Warp Zones to all worlds |
| **Agent Mode as default** | Agent Mode is the primary development mode | Yoshi autopilot as the default game mode |
| **Azure SRE Agent** | Agents respond to incidents autonomously | Autonomous guardians defending the castle 24/7 |
| **Multi-agent workflows** | Multiple agents coordinated by an orchestrator | Army of companions with a commander |

### 4.4 Horizon 3 Technologies

| Technology | Category | What It's For |
|---|---|---|
| **Copilot Agent Mode** | Development | Agent executes complex tasks in the IDE |
| **GitHub Coding Agent** | Automation | Resolves issues and opens PRs autonomously |
| **MCP** | Integration | Connects agents to external tools |
| **Azure SRE Agent** | Operations | Autonomous incident response |
| **Spec-Kit** | Methodology | Specification-driven development |
| **Custom Agents (.agent.md)** | Configuration | Specialized agents per domain |
| **Multi-agent Orchestration** | Coordination | Orchestrate multiple agents |

### 4.5 Signs You're in Horizon 3

- [ ] Spec-Driven Development is the standard workflow
- [ ] Coding Agents resolve issues regularly
- [ ] MCP connected to at least 3 external tools
- [ ] Production incidents handled by SRE Agents
- [ ] Custom Agents configured for each project domain
- [ ] Multi-agent workflows for complex features
- [ ] Devs spend more time reviewing than writing code

---

## Section 5 -- The 3 Pillars of Each Horizon in Detail

### 5.1 Pillar 1: Developer Productivity (Attack Power)

| Horizon | What Changes | Mario Analogy |
|---|---|---|
| **H1** | Standardized IDE, extensions, snippets | Basic sword and simple armor |
| **H2** | Copilot Completions + Chat, templates | Enchanted sword + combat manual |
| **H3** | Agent Mode, Coding Agents, Spec-Driven | Army of companions + legendary weapons |

### 5.2 Pillar 2: DevOps Lifecycle (Quest Cycle)

| Horizon | What Changes | Mario Analogy |
|---|---|---|
| **H1** | Basic CI/CD, manual tests, standardized deploy | Stages with checkpoint flag and clear rules |
| **H2** | AI testing, security with GHAS, Copilot review | Stages with trap detectors and auto-save |
| **H3** | Agentic pipeline, self-healing, SRE Agent | Stages that self-repair and companions that patrol |

### 5.3 Pillar 3: Application Platform (World Infrastructure)

| Horizon | What Changes | Mario Analogy |
|---|---|---|
| **H1** | Basic cloud, containers, Kubernetes | Castles built with bricks |
| **H2** | IDP, self-service, templates | Castles assembled with prefab kits |
| **H3** | Fully agentic platform, AI auto-scaling | Castles that build and adapt themselves |

### 5.4 Table of the 3 Pillars per Horizon

| Pillar | H1 (Foundation) | H2 (Acceleration) | H3 (Transformation) |
|---|---|---|---|
| **Developer Productivity** | IDE + standardized extensions | Copilot + templates + IDP | Agent Mode + Coding Agents + Specs |
| **DevOps Lifecycle** | GitHub Actions + basic CI/CD | GHAS + Copilot review + AI testing | Agentic pipeline + SRE Agent |
| **Application Platform** | Cloud + containers + K8s | IDP + self-service + templates | Self-managed platform by agents |

---

## Section 6 -- Comparing the Three Horizons in Practice

### 6.1 Scenario: Creating a New Feature

| Horizon | How It Works | Time | Mario Analogy |
|---|---|---|---|
| **H1** | Dev reads spec, writes all code, configures CI/CD, creates PR, waits for review | 3-5 days | Mario builds the castle brick by brick |
| **H2** | Dev uses Copilot to write faster, GHAS scans, IDP generates template | 1-2 days | Mario assembles with prefab kit + Yoshi helps |
| **H3** | Dev writes spec, Coding Agent generates code and opens PR, dev reviews | 2-4 hours | Mario delivers the blueprint, NPC builds the castle |

### 6.2 Scenario: Responding to an Incident

| Horizon | How It Works | Response Time |
|---|---|---|
| **H1** | On-call dev wakes up, analyzes logs manually, implements fix | 2-4 hours |
| **H2** | Alert with rich context (GHAS, metrics), dev resolves with Copilot | 30-60 minutes |
| **H3** | SRE Agent detects, diagnoses, applies fix automatically, notifies dev | 5-15 minutes |

### 6.3 Scenario: Onboarding a New Dev

| Horizon | How It Works | Time to Productivity |
|---|---|---|
| **H1** | New dev reads docs, sets up environment manually, asks for help | 2-4 weeks |
| **H2** | IDP with template, Copilot for questions, automated docs | 3-5 days |
| **H3** | Codespace ready in minutes, agent as tutor, spec-driven from day 1 | 1-2 days |

---

## Section 7 -- Practical Roadmap: How to Evolve Between Horizons

### 7.1 From H1 to H2: What Needs to Happen

```
CHECKLIST H1 → H2:

[  ] CI/CD working in 100% of repos
[  ] Code review as an established practice
[  ] Basic security implemented
[  ] Team comfortable with Git and GitHub
[  ] Inner Source working
[  ] Standards documented

ACTIONS TO START H2:
1. Copilot pilot with 2-3 teams (2 weeks)
2. Enable GHAS on the most critical repos (1 week)
3. Configure Copilot Autofix (1 week)
4. Start building the IDP (1-3 months)
5. Expand Copilot to all teams (1 month)
```

### 7.2 From H2 to H3: What Needs to Happen

```
CHECKLIST H2 → H3:

[  ] Copilot adopted by 80%+ of devs
[  ] GHAS active and delivering value
[  ] IDP functional and in use
[  ] DORA metrics being collected
[  ] Team mature in AI usage

ACTIONS TO START H3:
1. Spec-Driven Dev pilot with 1 team (1 month)
2. Configure Custom Agents (.agent.md) for the project (1 week)
3. Configure MCP for Azure Boards + database + GitHub (2 weeks)
4. Coding Agent pilot on low-complexity issues (2 weeks)
5. Progressively expand to more teams (3-6 months)
```

### 7.3 Realistic Timeline

```
MONTH 1-6:    ████████████████████████████████  HORIZON 1
              Foundation, standardization, migration

MONTH 4-12:             ████████████████████████████████  HORIZON 2
                        Copilot, GHAS, IDP, acceleration
                        (overlap with late H1)

MONTH 10-24:                         ████████████████████████████████  HORIZON 3
                                     Agents, MCP, Spec-Driven, transformation
                                     (overlap with late H2)
```

Note: the horizons OVERLAP. You don't finish H1 and then start H2. You start H2 when H1 is mature enough, and start H3 when H2 is mature.

---

## Section 8 -- The Journey is Cumulative, Not Substitutive

### 8.1 Each Horizon Includes the Previous One

```
H3 = H1 + H2 + new capabilities
H2 = H1 + new capabilities
H1 = foundation

It's NOT: H1 → discard H1 → H2 → discard H2 → H3
It IS:    H1 → H1 + H2 → H1 + H2 + H3
```

> **MARIO ANALOGY:** Mario doesn't throw away the sword when he gets the shield. And he doesn't throw away the shield when he gets companions. He ACCUMULATES: sword + shield + companions. Each horizon ADDS to the arsenal, it doesn't replace the previous one.

### 8.2 Don't Skip Horizons

| What happens if you skip... | Result |
|---|---|
| **H1 (go straight to H2)** | Copilot without CI/CD = AI-generated code without tests, without review, without pipeline. Chaos. |
| **H1 and H2 (go straight to H3)** | Coding Agent without foundation = agents generating code without standards, without security, without governance. Disaster. |
| **H2 (go from H1 to H3)** | Autonomous agents without the H2 experience = team doesn't know how to evaluate agent output. High risk. |

---

## Section 9 -- How to Identify Which Horizon You're In

### 9.1 Checklist per Horizon

**You're in H1 if:**
- Still migrating to GitHub Enterprise
- CI/CD inconsistent across teams
- Basic security incomplete
- Standards not documented
- Inner Source nonexistent

**You're in H2 if:**
- GitHub Enterprise stable
- CI/CD working, starting to use Copilot
- GHAS being implemented
- IDP under construction
- Team learning to use AI

**You're in H3 if:**
- Copilot and GHAS mature
- Spec-Driven Development in practice
- Coding Agents resolving issues
- MCP connected to tools
- Agents as team members

### 9.2 Quick Self-Assessment

Count how many "yes" answers you have for each horizon. Your level is the horizon with the most "yes" answers:

| Horizon | Question | Yes/No |
|---|---|---|
| H1 | Is all code on GitHub Enterprise? | |
| H1 | CI/CD on 100% of repos? | |
| H1 | Mandatory code review on all PRs? | |
| H2 | 80%+ of devs using Copilot? | |
| H2 | GHAS active on critical repos? | |
| H2 | IDP functional? | |
| H3 | Spec-Driven Dev as a practice? | |
| H3 | Coding Agents resolving issues? | |
| H3 | MCP connected to 3+ tools? | |

---

## What We Learned -- Summary Table

| Concept | What It Is | Mario Analogy | Why It Matters |
|---|---|---|---|
| **Three Horizons** | Progressive adoption framework | Three kingdoms of the Mushroom Kingdom | Gradual evolution, not a leap in the dark |
| **H1 -- Foundation** | Stabilize, standardize, build the base | Building roads and bridges | Without a foundation, nothing stands |
| **H2 -- Acceleration** | Add AI and automation | Vehicles and fast-travel | Go faster on a solid base |
| **H3 -- Transformation** | AI-Native, autonomous agents | Flying and teleporting | Fundamentally change how work is done |
| **3 Pillars** | Productivity, Lifecycle, Platform | Attack, Quests, World | Each horizon improves all 3 pillars |
| **Cumulative** | Each H includes the previous one | Sword + shield + companions | Don't discard what already works |

---

## References

| Resource | Type | Link |
|---|---|---|
| Three Horizons of Growth (McKinsey) | Framework | https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/enduring-ideas-the-three-horizons-of-growth |
| GitHub Enterprise Cloud | Platform | https://github.com/enterprise |
| GitHub Advanced Security | Security | https://github.com/features/security |
| GitHub Copilot | AI | https://github.com/features/copilot |
| Platform Engineering (Gartner) | Research | https://www.gartner.com/en/articles/what-is-platform-engineering |
| Azure SRE Agent | Operations | https://learn.microsoft.com/en-us/azure/sre-agent |
| Playbook Azure DevOps → GitHub | Migration | https://learn.microsoft.com/en-us/devops/develop/git/migrate-from-tfvc-to-git |
| DORA Metrics | Metrics | https://dora.dev |

---

*Level 5-8 complete! You now understand the Three Horizons strategy and know that evolution is gradual, cumulative, and built on solid foundations. Don't try to fly before building roads. But know that FLIGHT is closer than you think. In the next level, the Boss Battle of World 5!*

---

<div align="center">

⬅️ [Previous: Level 5-7: MCP Deep Dive](5-7_mcp-deep-dive.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 5-9: GitHub Advanced Security](5-9_github-advanced-security.md)

</div>
