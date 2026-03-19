---
title: "Level 2-5 -- The Tournament Rules: Agile Methodologies"
description: "Agile, Scrum, and Kanban explained as tournaments and quest systems from the Mushroom Kingdom -- how to organize development teams"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agile
  - scrum
  - kanban
  - methodologies
  - sprints
  - world-2
  - mario
---

# Level 2-5 -- The Tournament Rules: Agile Methodologies

---

## Change Log

| Version | Date       | Author                                  | Description          |
|---------|------------|----------------------------------------|----------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation    |

---

## Table of Contents

- [Prologue: The Disorganized Team](#prologue-the-disorganized-team)
- [1. Before Agile: The Waterfall World](#1-before-agile-the-waterfall-world)
  - [1.1 The Waterfall Model](#11-the-waterfall-model)
  - [1.2 Why Waterfall Fails in Software](#12-why-waterfall-fails-in-software)
- [2. The Agile Manifesto: The New Rules of the Game](#2-the-agile-manifesto-the-new-rules-of-the-game)
  - [2.1 The 4 Values of Agile](#21-the-4-values-of-agile)
  - [2.2 The 12 Principles](#22-the-12-principles)
- [3. Scrum: The Structured Tournament](#3-scrum-the-structured-tournament)
  - [3.1 What Is Scrum?](#31-what-is-scrum)
  - [3.2 The 3 Scrum Roles](#32-the-3-scrum-roles)
  - [3.3 The 5 Scrum Events](#33-the-5-scrum-events)
  - [3.4 The 3 Scrum Artifacts](#34-the-3-scrum-artifacts)
  - [3.5 The Complete Sprint Cycle](#35-the-complete-sprint-cycle)
- [4. Kanban: The Quest Board](#4-kanban-the-quest-board)
  - [4.1 What Is Kanban?](#41-what-is-kanban)
  - [4.2 The Kanban Board: To Do, Doing, Done](#42-the-kanban-board-to-do-doing-done)
  - [4.3 WIP Limits: Simultaneous Quest Limit](#43-wip-limits-simultaneous-quest-limit)
  - [4.4 Kanban in Practice: GitHub Projects](#44-kanban-in-practice-github-projects)
- [5. Scrum vs Kanban: Which to Choose?](#5-scrum-vs-kanban-which-to-choose)
- [6. User Stories: The Adventurer's Quests](#6-user-stories-the-adventurers-quests)
  - [6.1 What Is a User Story?](#61-what-is-a-user-story)
  - [6.2 Acceptance Criteria: The Victory Conditions](#62-acceptance-criteria-the-victory-conditions)
  - [6.3 Story Points: The Difficulty Level](#63-story-points-the-difficulty-level)
- [7. Tools in Practice](#7-tools-in-practice)
  - [7.1 GitHub Issues as Quests](#71-github-issues-as-quests)
  - [7.2 GitHub Projects as a Quest Board](#72-github-projects-as-a-quest-board)
  - [7.3 Azure Boards](#73-azure-boards)
- [8. Agile Ceremonies: The Team's Rituals](#8-agile-ceremonies-the-teams-rituals)
  - [8.1 Daily Standup: Lightning Meeting](#81-daily-standup-lightning-meeting)
  - [8.2 Sprint Planning: Dungeon Planning](#82-sprint-planning-dungeon-planning)
  - [8.3 Sprint Review: The Boss Battle Debrief](#83-sprint-review-the-boss-battle-debrief)
  - [8.4 Sprint Retrospective: Lessons Learned](#84-sprint-retrospective-lessons-learned)
- [9. Common Agile Mistakes](#9-common-agile-mistakes)
- [10. Final Summary Table](#10-final-summary-table)
- [References](#references)

---

## Prologue: The Disorganized Team

Sofia had a team of 5 people working on the TodoApp. It seemed like a capable team: Luigi on frontend, Toad on the database, Yoshi on DevOps, Peach on QA, and herself, Sofia (Mario), coordinating everything.

The problem? Total chaos.

Luigi was finishing features that Toad didn't have database support for yet. Yoshi was trying to deploy code that Peach hadn't tested. Sofia didn't know what each person was working on. Everyone was busy, but nothing was done.

*"It seems like we're all running in different directions,"* said Sofia.

Toadette -- the judge of the Mushroom Kingdom tournaments -- appeared with a whistle hanging from her neck and a whiteboard under her arm.

*"Your problem isn't a lack of talent,"* said Toadette. *"It's a lack of **tournament rules**. Imagine if Mario Kart had no rules: no defined laps, no positions, no timer. Everyone racing without knowing where to go. THAT'S what's happening with your team."*

She placed the whiteboard on the wall. *"I'm going to teach you two ways to organize the tournament: **Scrum** and **Kanban**. The rules that separate chaos from productivity."*

---

## 1. Before Agile: The Waterfall World

### 1.1 The Waterfall Model

Before Agile, the software world used the **Waterfall** model. The name comes from the idea that the process "falls" from one phase to the next, without going back:

```
1. Requirements     (6 months planning)
       |
       v
2. Design           (3 months designing)
       |
       v
3. Implementation   (6 months coding)
       |
       v
4. Testing          (3 months testing)
       |
       v
5. Deploy           (1 month launching)
       |
       v
6. Maintenance      (forever)

Total: 18+ months before the user sees ANYTHING
```

> **MARIO ANALOGY:** Waterfall is like planning an entire Mario game before building a SINGLE level. You spend 6 months designing ALL 8 worlds on paper, 3 months creating sprites, 6 months programming, 3 months testing, and only then let someone play. If at the end the player says "I wanted water levels, not sky levels" -- you need to redo everything.

### 1.2 Why Waterfall Fails in Software

| Problem | Explanation | Mario Analogy |
|---------|-----------|---------------|
| Late feedback | User only sees the product at the end | Player only tests after 18 months |
| Expensive changes | Going back to a previous phase costs a lot | Redesigning World 1 when you're already at World 8 |
| Requirements change | The world changes while you're building | By the time the game is ready, players want something else |
| High risk | All or nothing -- works or fails | Betting everything on a single life, no checkpoint |

---

## 2. The Agile Manifesto: The New Rules of the Game

In 2001, 17 developers gathered and created the **Agile Manifesto** -- a document that changed the software industry forever.

### 2.1 The 4 Values of Agile

| Agile Value | Instead of... | Mario Analogy |
|------------|-------------|---------------|
| **Individuals and interactions** | Processes and tools | **Players working together** instead of following manuals |
| **Working software** | Extensive documentation | **Playable level** instead of 500 pages of design |
| **Customer collaboration** | Contract negotiation | **Player testing and giving feedback** instead of waiting 18 months |
| **Responding to change** | Following a rigid plan | **Adapting the game** based on feedback instead of insisting on the original plan |

### 2.2 The 12 Principles

The most important principles for beginners:

1. **Frequent deliveries** -- Deliver small working pieces regularly
2. **Changes are welcome** -- Even late in development
3. **Working software** is the measure of progress
4. **Simplicity** -- Maximize the work NOT done
5. **Self-organizing teams** -- The team decides how to work
6. **Regular reflection** -- The team stops and thinks about how to improve

> **MARIO ANALOGY:** Instead of building the entire game at once, build **one level at a time**. Launch World 1-1, see if players like it, adjust, then build 1-2. If players ask for water levels, change the plan. Small deliveries, constant feedback, continuous adaptation.

---

## 3. Scrum: The Structured Tournament

### 3.1 What Is Scrum?

**Scrum** is an agile framework that organizes work into short, fixed cycles called **Sprints**. Each Sprint is like a "round" of a tournament with clear rules.

> **MARIO ANALOGY:** Scrum is a **Mario Kart tournament** with defined rules. Each race (Sprint) lasts a fixed time (2 weeks). Before each race, the team decides the track (Sprint Planning). Daily, they check positions (Daily Standup). At the end of the race, they review the results (Sprint Review) and discuss how to improve (Retrospective).

### 3.2 The 3 Scrum Roles

| Role | Responsibility | Mario Analogy | Who on Sofia's Team |
|------|---------------|---------------|---------------------|
| **Product Owner** | Defines WHAT to build. Prioritizes work | **Princess Peach** -- defines the mission and priorities | The product manager |
| **Scrum Master** | Ensures the team follows the rules. Removes obstacles | **Lakitu** (the one on the cloud with the camera) -- observes, guides, flags problems | Toadette (the judge) |
| **Development Team** | HOW to build. Does the work | **Mario, Luigi, Toad, Yoshi** -- the players who execute | Sofia and the dev team |

**Product Owner (Princess Peach):**
- Creates and prioritizes the **Product Backlog** (list of everything that needs to be done)
- Decides what is most important
- Represents the voice of the user/customer
- Accepts or rejects the completed work

**Scrum Master (Lakitu):**
- Facilitates the ceremonies (meetings)
- Removes impediments ("the server is down!" -- resolves or escalates)
- Protects the team from interruptions
- Is NOT the boss -- is the facilitator

**Development Team (the players):**
- 3 to 9 people
- Self-organized (decides how to do the work)
- Cross-functional (has all the necessary skills)
- Responsible for delivery

### 3.3 The 5 Scrum Events

| Event | When | Duration | Mario Analogy |
|-------|------|----------|---------------|
| **Sprint** | Complete work cycle | 1-4 weeks (usually 2) | A timed dungeon run |
| **Sprint Planning** | Start of Sprint | 2-4 hours | Planning before entering the dungeon |
| **Daily Scrum** | Every day | 15 minutes max | Quick team huddle between levels |
| **Sprint Review** | End of Sprint | 1-2 hours | Debrief after defeating the boss |
| **Sprint Retrospective** | After the Review | 1-1.5 hours | Lessons learned: what to do better |

### 3.4 The 3 Scrum Artifacts

| Artifact | What It Is | Mario Analogy |
|----------|-----------|---------------|
| **Product Backlog** | COMPLETE list of everything that needs to be done in the product | List of ALL the game's quests |
| **Sprint Backlog** | What will be done in THIS Sprint | Quests selected for THIS dungeon run |
| **Increment** | The working product at the end of the Sprint | The dungeon completed -- new area unlocked |

**Product Backlog (TodoApp example):**
```
Priority    | Quest (User Story)                    | Points
1 (high)    | Add task with title                   | 3
2 (high)    | Mark task as completed                | 2
3 (high)    | Delete task                           | 2
4 (medium)  | Filter tasks by status                | 5
5 (medium)  | Login with Google                     | 8
6 (medium)  | Dark mode                             | 3
7 (low)     | Export tasks as PDF                   | 5
8 (low)     | Push notifications                    | 13
9 (low)     | Share list with other users           | 8
```

### 3.5 The Complete Sprint Cycle

```
+------------------------------------------------------------------+
|                      SPRINT (2 weeks)                             |
|                                                                  |
|  Day 1: SPRINT PLANNING                                         |
|  "Which quests are we going to complete in this dungeon run?"    |
|  Team selects: Quest 1, 2, 3 (total: 7 points)                  |
|                                                                  |
|  Days 1-10: DEVELOPMENT                                         |
|  +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+ |
|  | D1  | D2  | D3  | D4  | D5  | D6  | D7  | D8  | D9  | D10 | |
|  +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+ |
|    ^     ^     ^     ^     ^     ^     ^     ^     ^     ^       |
|    |     |     |     |     |     |     |     |     |     |       |
|  [15-min Daily Standup each morning]                             |
|  "What did I do yesterday? What am I doing today? Any blockers?" |
|                                                                  |
|  Day 10: SPRINT REVIEW                                           |
|  "Look at what we built! Test it! Give feedback!"                |
|  Demo for stakeholders                                           |
|                                                                  |
|  Day 10: SPRINT RETROSPECTIVE                                   |
|  "What went well? What to improve? What to try differently?"    |
|                                                                  |
+------------------------------------------------------------------+
          |
          v
  [Next Sprint starts the following day]
```

> **MARIO ANALOGY:** A Sprint is a **timed dungeon run**. The team has 2 weeks to complete the selected quests. Every day, the team meets briefly (Daily Standup) to sync up: "Luigi finished the filter component yesterday. Today Toad is going to create the table in the database. Yoshi is blocked because Docker isn't working -- Toadette will help." At the end, the team shows what they built (Sprint Review) and discusses how to improve (Retrospective). Then, a new dungeon run.

---

## 4. Kanban: The Quest Board

### 4.1 What Is Kanban?

**Kanban** is a visual agile method that focuses on continuous workflow. There are no fixed sprints -- work flows continuously.

> **MARIO ANALOGY:** Kanban is like the **quest board** in the Mushroom Kingdom village square. The quests are there, organized by status: "To Do", "Doing", "Done". Adventurers pick quests from the board, complete them, and put them back. There are no "rounds" -- it's continuous flow.

### 4.2 The Kanban Board: To Do, Doing, Done

```
+------------------+------------------+------------------+
|     TO DO        |     DOING        |      DONE        |
+------------------+------------------+------------------+
| [Filter by       | [Add             | [Create basic    |
|  status]         |  task] -Luigi    |  layout]         |
|                  |                  |                  |
| [Google Login]   | [Create tasks    | [Project         |
|                  |  table] -Toad    |  setup]          |
| [Dark mode]      |                  |                  |
|                  | [Config CI/CD]   | [Model           |
| [Export PDF]     |  -Yoshi          |  database]       |
|                  |                  |                  |
| [Notifications]  |                  |                  |
+------------------+------------------+------------------+
```

In practice, many teams use more detailed columns:

```
+----------+-----------+----------+-----------+--------+
| Backlog  | To Do     | In       | In Review | Done   |
|          | (Sprint)  | Progress |           |        |
+----------+-----------+----------+-----------+--------+
```

### 4.3 WIP Limits: Simultaneous Quest Limit

**WIP** (Work In Progress) Limit is the maximum number of items that can be "Doing" at the same time.

```
        DOING (Limit: 3)
+-------------------------------+
| [Task 1] [Task 2] [T3]       |  <- 3 of 3 (at the limit!)
+-------------------------------+

If someone wants to start a Task 4,
they MUST finish one of the 3 first.
```

> **MARIO ANALOGY:** WIP Limit is like the maximum number of **active quests** an adventurer can carry. In an RPG, you can't accept 50 quests at the same time -- otherwise you won't finish any. Better to have 3 active quests and finish all of them than 20 half-done quests. **Stop starting and start finishing.**

**Why WIP Limits work:**
- Force the team to FINISH before STARTING
- Reduce multitasking (context switching)
- Identify bottlenecks (if "In Review" is always full, need more reviewers)
- Increase delivery speed (fewer items in parallel = each one finishes faster)

### 4.4 Kanban in Practice: GitHub Projects

**GitHub Projects** has an integrated Kanban board:

```
1. Go to the repository on GitHub
2. "Projects" tab > New Project
3. Choose "Board" (Kanban board)
4. Create columns: Backlog | To Do | In Progress | Review | Done
5. Drag Issues (quests) between columns
6. Configure automations (PR merged -> moves to Done)
```

---

## 5. Scrum vs Kanban: Which to Choose?

| Aspect | Scrum | Kanban |
|--------|-------|--------|
| **Mario Analogy** | Tournament with fixed rounds | Quest board with continuous flow |
| **Cycles** | Fixed Sprints (2 weeks) | Continuous flow |
| **Roles** | Product Owner, Scrum Master, Dev Team | No specific roles defined |
| **Meetings** | Sprint Planning, Daily, Review, Retro | None required (but recommended) |
| **Changes** | No changes during the Sprint | Can change at any time |
| **Metrics** | Velocity (points per Sprint) | Lead Time, Cycle Time |
| **Ideal for** | Projects with regular deliveries | Support, maintenance, variable flow |
| **Complexity** | More rules to learn | Simpler to get started |
| **Predictability** | High (know what comes out each Sprint) | Medium (depends on the flow) |

> **TIP:** Many teams use **Scrumban** -- a mix of both. Scrum's sprints with Kanban's visual board. Use whatever works best for your team.

---

## 6. User Stories: The Adventurer's Quests

### 6.1 What Is a User Story?

A **User Story** is a short description of a feature from the user's perspective:

```
As a [type of user],
I want [feature],
so that [benefit/value].
```

**Examples for the TodoApp:**

```
As a user,
I want to add a task with a title and description,
so that I can organize my activities.

As a user,
I want to filter tasks by status (completed/pending),
so that I can quickly see what's left to do.

As an administrator,
I want to see system usage metrics,
so that I can understand how users use the app.
```

> **MARIO ANALOGY:** A User Story is a **quest description** on the quest board: "As an adventurer, I want to defeat the Boom Boom of World 2, so that I unlock World 3." The quest says who (adventurer), what (defeat Boom Boom), and why (unlock World 3).

### 6.2 Acceptance Criteria: The Victory Conditions

Each quest has victory conditions -- without them, how do you know if you've completed it?

```
User Story: Add task
Acceptance Criteria:
  [x] Title field accepts up to 200 characters
  [x] Description field is optional
  [x] When saved, task appears in the list immediately
  [x] Task is saved in the database
  [x] If title is empty, shows error message
  [x] Does not allow creating duplicate tasks
```

> **MARIO ANALOGY:** Acceptance criteria are like the **victory conditions** of a level: "Collect ALL red coins, defeat ALL enemies, and reach the flagpole in under 200 seconds." If you missed one coin, the level wasn't completed.

### 6.3 Story Points: The Difficulty Level

**Story Points** measure the complexity/effort of a User Story. The Fibonacci sequence is used: 1, 2, 3, 5, 8, 13, 21.

| Points | Complexity | Mario Analogy |
|--------|-----------|---------------|
| **1** | Trivial | Goomba -- one jump and done |
| **2** | Simple | Koopa -- requires 2 jumps |
| **3** | Moderate | Koopa with shell -- requires some thought |
| **5** | Complex | Hammer Bro -- requires skill |
| **8** | Very complex | Lakitu -- difficult and unpredictable |
| **13** | Huge | Mini-boss -- takes time and effort |
| **21** | Gigantic | Boss Battle -- break it into smaller quests! |

---

## 7. Tools in Practice

### 7.1 GitHub Issues as Quests

```markdown
# Issue #42: Implement task filter by status

## Description
As a user, I want to filter tasks by status to quickly see
what's left to do.

## Acceptance Criteria
- [ ] "All", "Pending", "Completed" buttons at the top of the list
- [ ] Filter works in real time (no reload)
- [ ] URL changes to reflect the filter (e.g., /tarefas?status=pendente)
- [ ] Unit tests covering all scenarios

## Story Points: 5
## Labels: feature, frontend, sprint-3
## Assignee: @luigi
```

### 7.2 GitHub Projects as a Quest Board

GitHub Projects lets you create visual boards connected to Issues and PRs:

```
Sprint 3 -- Board View:
+-----------+-------------+-----------+----------+--------+
| Backlog   | Sprint Todo | Doing     | Review   | Done   |
+-----------+-------------+-----------+----------+--------+
| #45 Dark  | #42 Filter  | #40 CRUD  | #39 Auth | #38 UI |
| #46 Export| #43 Tests   | #41 API   |          | #37 DB |
| #47 Notif |             |           |          | #36 CI |
+-----------+-------------+-----------+----------+--------+
```

### 7.3 Azure Boards

**Azure Boards** is the project management tool in Azure DevOps:

```
Azure Boards offers:
- Work Items (User Stories, Tasks, Bugs)
- Sprints with team capacity
- Drag-and-drop Kanban board
- Burndown charts (progress graph)
- Integration with GitHub and Azure Repos
```

---

## 8. Agile Ceremonies: The Team's Rituals

### 8.1 Daily Standup: Lightning Meeting

**When:** Every day, same time
**Duration:** 15 minutes MAXIMUM
**Who:** The entire development team

Each person answers 3 questions:
1. **What did I do yesterday?**
2. **What am I going to do today?**
3. **Do I have any blockers?**

```
TodoApp Team Daily:

Mario (Sofia): "Yesterday I finished the form validation.
                Today I'll integrate with the API. No blockers."

Luigi: "Yesterday I worked on the filter component.
        Today I'll continue. Blocker: I need test data
        from Toad."

Toad: "Yesterday I created the database migration.
       Today I'll populate it with test data for Luigi.
       No blockers."

Yoshi: "Yesterday I configured the staging pipeline.
        Today I'll test the automatic deploy.
        Blocker: I need Azure access -- can Toadette
        help?"

Toadette (Scrum Master): "Noted! I'll request access for
                          Yoshi right away."
```

> **MARIO ANALOGY:** Daily Standup is the **quick team huddle** between levels. Everyone gathers for 15 minutes, says what level they're on, where they're heading, and if there's any obstacle in the way. It's quick, standing up (standup), and no rambling.

### 8.2 Sprint Planning: Dungeon Planning

**When:** Start of Sprint
**Duration:** 2-4 hours
**What happens:**

1. Product Owner presents the most important quests from the Backlog
2. Team discusses each quest and estimates the effort (Story Points)
3. Team selects which quests fit in the Sprint
4. Team defines HOW they will implement each quest

```
Sprint Planning -- Sprint 3:

Product Owner: "The priorities are: task filter (#42),
                automated tests (#43), and improve
                API performance (#44)."

Team estimates: #42 = 5 points, #43 = 3 points, #44 = 8 points
Team velocity: ~13 points per Sprint
Team selects: #42 + #43 + #44 = 16 points (too much!)
Adjustment: #42 + #43 = 8 points + bonus task if time allows
```

### 8.3 Sprint Review: The Boss Battle Debrief

**When:** End of Sprint
**Duration:** 1-2 hours
**What happens:**

1. Team **demos** what they built (working software!)
2. Stakeholders test and give feedback
3. Product Owner accepts or rejects the increments
4. Discussion about next priorities

> **MARIO ANALOGY:** Sprint Review is the **debrief after the Boss Battle**. The team gathers, shows the replay of the fight: "Look, we defeated the Boom Boom using this strategy. Luigi did the main attack, Toad healed, Yoshi flanked." The audience (stakeholders) watches and comments: "Nice, but next time try attacking from the right."

### 8.4 Sprint Retrospective: Lessons Learned

**When:** After the Sprint Review
**Duration:** 1-1.5 hours
**What happens:**

Three questions:
1. **What went well?** (keep doing)
2. **What went wrong?** (stop doing)
3. **What can we improve?** (try next time)

```
Sprint 3 Retro:

Went well:
  + Daily standups are quick and useful
  + Luigi and Toad worked well together
  + Automatic deploy worked on the first try

Went wrong:
  - We underestimated task #44 (estimated 8, spent 13)
  - Code reviews took too long (sat 3 days in "In Review")
  - Toadette got sick and no one facilitated the daily

Improve:
  -> Break large tasks into smaller ones
  -> Set a fixed time for code review (1h/day)
  -> Have a Scrum Master backup
```

---

## 9. Common Agile Mistakes

| Mistake | Problem | Mario Analogy | Solution |
|---------|---------|---------------|---------|
| **Daily becomes a long meeting** | 15 min turns into 1 hour of discussion | Huddle becomes a lecture | 15-min timer, discussions outside the daily |
| **Sprint with no delivery** | Nothing done at the end of the sprint | Dungeon run without completing any quest | Smaller quests, focus on FINISHING |
| **Infinite backlog** | 200+ items without prioritization | Quest board with 500 missions | Clean and prioritize regularly |
| **Scrum without retrospective** | Team never improves | Never analyzes the battle replay | Retro is MANDATORY |
| **Estimates as promises** | "You PROMISED 5 points!" | Turning estimates into contracts | Story Points are estimates, not promises |

---

## 10. Final Summary Table

| Concept | Technical Explanation | Mario Analogy |
|---------|---------------------|---------------|
| **Agile** | Iterative and adaptive development philosophy | Build the game one level at a time, with feedback |
| **Scrum** | Framework with sprints, roles, and ceremonies | Tournament with timed rounds and rules |
| **Sprint** | 1-4 week work cycle | Timed dungeon run (2 weeks) |
| **Kanban** | Visual continuous flow method | Quest board (To Do, Doing, Done) |
| **Product Backlog** | List of everything that needs to be done | Complete list of the game's quests |
| **Sprint Backlog** | What will be done this Sprint | Quests for this dungeon run |
| **Daily Standup** | 15-min daily meeting | Quick team huddle between levels |
| **Sprint Review** | Demo and feedback at Sprint end | Debrief after the Boss Battle |
| **Retrospective** | Reflection on what to improve | Lessons learned from the battle |
| **User Story** | Feature description from user's perspective | Quest description on the quest board |
| **Story Points** | Complexity estimate | Enemy difficulty level |
| **WIP Limit** | Simultaneous work limit | Maximum active quests at the same time |
| **Product Owner** | Defines priorities | Princess Peach -- defines the mission |
| **Scrum Master** | Facilitates and removes obstacles | Lakitu -- observes, guides, signals |
| **Velocity** | Points delivered per Sprint | XP earned per dungeon run |

---

## References

1. Agile Manifesto: https://agilemanifesto.org/
2. Scrum Guide (official): https://scrumguides.org/
3. Kanban University: https://kanban.university/
4. GitHub Projects: https://docs.github.com/issues/planning-and-tracking-with-projects
5. Azure Boards: https://learn.microsoft.com/azure/devops/boards/
6. Mountain Goat Software -- User Stories: https://www.mountaingoatsoftware.com/agile/user-stories
7. Atlassian -- Scrum vs Kanban: https://www.atlassian.com/agile/kanban/kanban-vs-scrum

---

*"Every team needs rules. Without rules, even the best team in the Mushroom Kingdom falls into chaos. Scrum and Kanban aren't bureaucracy -- they're the tournament rules that turn 5 disorganized adventurers into a legendary team."*

*Next Warp Pipe: Level 2-6 -- The Alliance Between Classes: DevOps and IaC*

---

<div align="center">

⬅️ [Previous: Level 2-4: DNS](2-4-dns.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 2-6: DevOps](2-6-devops.md)

</div>
