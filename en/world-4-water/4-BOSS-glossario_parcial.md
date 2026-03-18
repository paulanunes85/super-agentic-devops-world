---
title: "Level 4-BOSS -- Boss Battle: Architecture Challenges"
description: "Boss Battle against King Boo — 6 practical architecture challenges combining authentication, cloud, deploy, cache, messaging and more"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agentic-devops
  - mario
  - world-4
  - boss-battle
  - challenges
  - architecture
  - exercises
---

# Level 4-BOSS -- Boss Battle: Architecture Challenges

---

## Change Log

| Version | Date       | Author                                  | Description          |
|---------|------------|----------------------------------------|----------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Initial creation    |

---

## Table of Contents

- [Prologue: King Boo Appears](#prologue-king-boo-appears)
- [1. Boss Battle Rules](#1-boss-battle-rules)
- [2. Challenge 1: Designing the Authentication System](#2-challenge-1-designing-the-authentication-system)
  - [2.1 The Scenario](#21-the-scenario)
  - [2.2 Requirements](#22-requirements)
  - [2.3 Exercise: Flow Diagram](#23-exercise-flow-diagram)
  - [2.4 Exercise: JWT Implementation](#24-exercise-jwt-implementation)
  - [2.5 Exercise: RBAC for the TodoApp](#25-exercise-rbac-for-the-todoapp)
  - [2.6 Approval Criteria](#26-approval-criteria)
- [3. Challenge 2: Choose the Right Architecture](#3-challenge-2-choose-the-right-architecture)
  - [3.1 Scenario A: Startup with 3 Devs](#31-scenario-a-startup-with-3-devs)
  - [3.2 Scenario B: Company with 50 Devs](#32-scenario-b-company-with-50-devs)
  - [3.3 Scenario C: Event Processing](#33-scenario-c-event-processing)
  - [3.4 Exercise: Justify Your Choices](#34-exercise-justify-your-choices)
- [4. Challenge 3: Deploy Strategy for the TodoApp](#4-challenge-3-deploy-strategy-for-the-todoapp)
  - [4.1 The Scenario](#41-the-scenario)
  - [4.2 Exercise: Deploy Plan](#42-exercise-deploy-plan)
  - [4.3 Exercise: CI/CD Pipeline](#43-exercise-cicd-pipeline)
  - [4.4 Exercise: Rollback Plan](#44-exercise-rollback-plan)
- [5. Challenge 4: Cache and Performance Under Pressure](#5-challenge-4-cache-and-performance-under-pressure)
  - [5.1 The Scenario](#51-the-scenario)
  - [5.2 Exercise: Performance Diagnosis](#52-exercise-performance-diagnosis)
  - [5.3 Exercise: Cache Strategy](#53-exercise-cache-strategy)
  - [5.4 Exercise: Optimize the API](#54-exercise-optimize-the-api)
- [6. Challenge 5: Designing Messaging](#6-challenge-5-designing-messaging)
  - [6.1 The Scenario](#61-the-scenario)
  - [6.2 Exercise: Event Diagram](#62-exercise-event-diagram)
  - [6.3 Exercise: Implement Producer and Consumer](#63-exercise-implement-producer-and-consumer)
  - [6.4 Exercise: Dead Letter Handling](#64-exercise-dead-letter-handling)
- [7. Challenge 6: The Final Boss — Complete Project](#7-challenge-6-the-final-boss--complete-project)
  - [7.1 The Grand Challenge](#71-the-grand-challenge)
  - [7.2 System Requirements](#72-system-requirements)
  - [7.3 Deliverables](#73-deliverables)
  - [7.4 Evaluation Criteria](#74-evaluation-criteria)
- [8. World 4 Glossary](#8-world-4-glossary)
- [9. Answer Key and Tips](#9-answer-key-and-tips)
- [10. Next Steps: World 5](#10-next-steps-world-5)
- [References](#references)

---

## Prologue: King Boo Appears

Sofia had traversed the entire Water World. She learned about authentication, cloud models, software architecture, advanced deploy, Git workflows, data structures, cache, performance, and messaging. She was feeling powerful.

But then, upon reaching the final castle of World 4, the lights went out. A laugh echoed through the walls.

*"Boo hoo hoo!"*

**King Boo** appeared floating in the center of the hall — the invisible ghost that tests your ability to think about architecture.

*"Sofia,"* said King Boo with a mysterious smile, *"the challenges I bring are different. It's not enough to know what JWT, cache, or microservices are. You need to know WHEN to use them, WHY to use them, and HOW to combine everything. My challenges are invisible — there's no obvious answer. You need to THINK."*

Yoshi nudged Sofia's shoulder. *"King Boo is the trickiest boss. He doesn't attack with strength — he attacks with confusion. The problems seem simple, but they have layers. Like every good Mario boss, you need to find the pattern."*

Sofia took a deep breath. *"Let's go."*

---

## 1. Boss Battle Rules

**How this Boss Battle works:**

| Rule | Description |
|------|------------|
| **6 Challenges** | Each challenge is a real scenario requiring architectural thinking |
| **No single answer** | Multiple solutions are valid — what matters is the JUSTIFICATION |
| **Combine concepts** | Each challenge requires knowledge from multiple World 4 levels |
| **Diagrams count** | Draw diagrams whenever possible |
| **Think about trade-offs** | Every decision has advantages AND disadvantages |

**Difficulty levels:**

| Level | Stars | Description |
|-------|-------|------------|
| **Goomba** | * | Guided exercise, step by step |
| **Koopa** | ** | Exercise with freedom, requires thinking |
| **Hammer Bro** | *** | Complex challenge, multiple possible solutions |
| **Boss** | **** | Complete project, combines everything |

---

## 2. Challenge 1: Designing the Authentication System

*Level 4-1: Auth, JWT, OAuth | Difficulty: ** Koopa*

### 2.1 The Scenario

The TodoApp has grown and now needs a robust authentication system. Currently, anyone can access any API endpoint without identifying themselves. You need to protect the system.

**System users:**
- **Regular users**: Create and manage their own tasks
- **Moderators**: Can view and edit any user's tasks
- **Admins**: Can do everything, including managing users and settings

### 2.2 Requirements

1. Login with email/password (local)
2. Login with Google (OAuth)
3. JWT for stateless authentication
4. RBAC with 3 roles: user, moderator, admin
5. Rate limiting on the login endpoint
6. Refresh token for session renewal

### 2.3 Exercise: Flow Diagram

**Draw the sequence diagram for each flow:**

```
Exercise A: Registration flow with email/password
  - Client sends data → API validates → Hash password → Save to database → Generate JWT → Return

Exercise B: Login flow with Google (OAuth)
  - Client clicks "Login with Google" → Redirect → Google authenticates → Callback → Create/find user → Generate JWT → Return

Exercise C: Token renewal flow
  - Access token expired → Client sends refresh token → API validates → Generate new access token → Return
```

**Your drawing here:**

```
(Draw the diagram using ASCII art or a tool of your choice)

Tip: Use the format:
  Client → API → Database
      ←           ←
```

### 2.4 Exercise: JWT Implementation

**Complete the code:**

```javascript
// TODO: Complete the authentication middleware
function authMiddleware(req, res, next) {
  // 1. Extract token from Authorization header
  // Format: "Bearer <token>"
  // YOUR CODE HERE

  // 2. Check if token exists
  // YOUR CODE HERE

  // 3. Decode and validate the token
  // YOUR CODE HERE

  // 4. Add user data to req
  // YOUR CODE HERE

  // 5. Call next() if everything is OK
  // YOUR CODE HERE
}

// TODO: Complete the authorization middleware
function requireRole(allowedRoles) {
  return (req, res, next) => {
    // 1. Check if req.user exists (already authenticated)
    // YOUR CODE HERE

    // 2. Check if the user's role is in the allowed roles list
    // YOUR CODE HERE

    // 3. If authorized, next(). If not, 403 Forbidden.
    // YOUR CODE HERE
  };
}

// TODO: Apply the middlewares to routes
const router = express.Router();

// Any authenticated user
router.get('/api/todos', /* YOUR CODE */, getTodos);

// Moderator or admin only
router.get('/api/todos/all', /* YOUR CODE */, getAllTodos);

// Admin only
router.delete('/api/users/:id', /* YOUR CODE */, deleteUser);
```

### 2.5 Exercise: RBAC for the TodoApp

**Create the complete permissions table:**

```
Copy and fill in the table:

| Action                        | User | Moderator | Admin |
|-------------------------------|:----:|:---------:|:-----:|
| View own tasks                |      |           |       |
| Create task                   |      |           |       |
| Edit own task                 |      |           |       |
| Delete own task               |      |           |       |
| View others' tasks            |      |           |       |
| Edit others' tasks            |      |           |       |
| Delete others' tasks          |      |           |       |
| View user list                |      |           |       |
| Create user                   |      |           |       |
| Delete user                   |      |           |       |
| Change roles                  |      |           |       |
| View settings                 |      |           |       |
| Change settings               |      |           |       |
```

### 2.6 Approval Criteria

- [ ] Flow diagram for all 3 scenarios
- [ ] Auth middleware implemented correctly
- [ ] Roles middleware implemented correctly
- [ ] Complete and coherent RBAC table
- [ ] Rate limiting explained

---

## 3. Challenge 2: Choose the Right Architecture

*Levels 4-2 and 4-3: Cloud Models + Architecture | Difficulty: *** Hammer Bro*

### 3.1 Scenario A: Startup with 3 Devs

**Context**: A startup with 3 developers wants to build a task management app for teams. They have an MVP to deliver in 2 months. Limited budget. They don't know if they'll have 100 or 100,000 users.

**Answer:**

1. Which architectural style? (Monolith, microservices, serverless?)
2. Which cloud model? (IaaS, PaaS, SaaS, Serverless?)
3. Which specific Azure service?
4. Which database?
5. Justify EACH choice with advantages and trade-offs.

```
Your Plan:
  Architecture: _______________
  Reason: _______________

  Cloud model: _______________
  Azure service: _______________
  Reason: _______________

  Database: _______________
  Reason: _______________

  Trade-offs I accept: _______________
```

### 3.2 Scenario B: Company with 50 Devs

**Context**: An established company with 50 developers across 6 teams needs to rebuild their e-commerce system. The current system is a monolith that is slow, hard to maintain, and doesn't scale. They have 2 million active users.

**Answer the same 5 questions above.**

### 3.3 Scenario C: Event Processing

**Context**: An IoT company receives data from 10,000 sensors, each sending data every 5 seconds. The data needs to be processed, stored, and generate real-time alerts. Traffic varies greatly: peak of 50,000 messages/second, minimum of 100/second.

**Answer the same questions, considering:**

- Highly variable traffic
- Real-time processing
- High data volume
- Cost needs to follow usage

### 3.4 Exercise: Justify Your Choices

For EACH scenario, fill in:

```markdown
## Scenario [A/B/C]

### Decision 1: Architecture
- Choice: _______________
- Why YES: _______________
- Why NOT the alternatives: _______________
- Risk of this choice: _______________

### Decision 2: Cloud Model
- Choice: _______________
- Why YES: _______________
- Estimated cost: _______________

### Decision 3: Database
- Choice: _______________
- Why YES: _______________

### Architecture Diagram
(Draw the architecture using ASCII art)
```

---

## 4. Challenge 3: Deploy Strategy for the TodoApp

*Levels 4-4 and 4-5: Advanced Deploy + Git Workflows | Difficulty: ** Koopa*

### 4.1 The Scenario

The TodoApp has 50,000 active users. You need to release a major update: a new notification system. The feature involves changes to the backend, frontend, and database. The team has 8 developers.

### 4.2 Exercise: Deploy Plan

**Define the complete strategy:**

```markdown
## Deploy Plan: Notifications v2

### Chosen Git Workflow: _______________
Reason: _______________

### Deploy Strategy: _______________
Reason: _______________

### Required Feature Flags:
1. _______________
2. _______________

### Rollout Phases:
Phase 1 (___% of users): _______________
Phase 2 (___% of users): _______________
Phase 3 (___% of users): _______________
Phase 4 (100%): _______________

### Metrics to Monitor:
1. _______________
2. _______________
3. _______________

### Rollback Criteria:
Revert IMMEDIATELY if: _______________
Revert within 1 hour if: _______________
```

### 4.3 Exercise: CI/CD Pipeline

**Write the pipeline file:**

```yaml
# .github/workflows/deploy.yml
# TODO: Complete the pipeline with:
# 1. Build and tests
# 2. Deploy to staging
# 3. Integration tests on staging
# 4. Deploy to production (with manual approval)
# 5. Post-deploy health check
# 6. Automatic rollback if health check fails

name: Deploy TodoApp
on:
  push:
    branches: [main]

jobs:
  # YOUR PIPELINE HERE
```

### 4.4 Exercise: Rollback Plan

**For each component, describe how to rollback:**

```
| Component | How to Revert | Estimated Time | Risk |
|-----------|---------------|----------------|------|
| Backend   |               |                |      |
| Frontend  |               |                |      |
| Database  |               |                |      |
| Cache     |               |                |      |
```

---

## 5. Challenge 4: Cache and Performance Under Pressure

*Levels 4-6 and 4-7: Data Structures + Cache | Difficulty: *** Hammer Bro*

### 5.1 The Scenario

The TodoApp is slow. Users complain that the task list takes 4 seconds to load. You investigated and found the following problems:

1. The main query does N+1 (fetches user, then fetches each user's tasks individually)
2. There is no cache of any kind
3. Avatar images are served directly from the server (no CDN)
4. The frontend loads ALL components at once (no lazy loading)
5. The task search runs a database query on EVERY keystroke

### 5.2 Exercise: Performance Diagnosis

**For each problem, identify:**

```markdown
| Problem | Impact (ms) | World 4 Level | Solution |
|---------|-------------|---------------|----------|
| N+1 query |            | 4-7           |          |
| No cache |            | 4-7           |          |
| No CDN   |            | 4-7           |          |
| No lazy loading |     | 4-7           |          |
| Query on every keystroke |   | 4-6    |          |
```

### 5.3 Exercise: Cache Strategy

**Design the complete cache strategy:**

```markdown
## What to Cache:
| Data | Where to Cache | TTL | Strategy | Invalidation |
|------|---------------|-----|----------|-------------|
| User's task list |  |  |  |  |
| User profile |  |  |  |  |
| Search results |  |  |  |  |
| Static assets |  |  |  |  |
| Global settings |  |  |  |  |
```

### 5.4 Exercise: Optimize the API

**Rewrite the optimized endpoint:**

```javascript
// BEFORE: Slow (4 seconds)
app.get('/api/todos', async (req, res) => {
  const user = await db.users.findById(req.user.id);
  const todos = [];
  const todoIds = await db.todos.findIds({ userId: user.id });
  for (const id of todoIds) {
    const todo = await db.todos.findById(id);
    const tags = await db.tags.findByTodoId(id);
    todo.tags = tags;
    todos.push(todo);
  }
  res.json(todos);
});

// AFTER: Optimized
// TODO: Rewrite with:
// 1. Cache (Redis)
// 2. Optimized query (no N+1)
// 3. Pagination
// 4. Compressed response
app.get('/api/todos', async (req, res) => {
  // YOUR CODE HERE
});
```

---

## 6. Challenge 5: Designing Messaging

*Level 4-8: Messaging | Difficulty: *** Hammer Bro*

### 6.1 The Scenario

The TodoApp needs to implement the following asynchronous features:

1. **Send email** when a task is created
2. **Send push notification** when a task is assigned to someone
3. **Generate PDF report** when the user requests it
4. **Sync with Google Calendar** when task has a date
5. **Record audit log** for every action

### 6.2 Exercise: Event Diagram

**Draw the architecture diagram showing:**

- Which events exist
- Which services publish which events
- Which services consume which events
- Which pattern to use (queue vs pub/sub)

```
Your diagram:

Producer(s)          Broker              Consumer(s)
┌──────────┐     ┌──────────────┐     ┌──────────────┐
│          │────→│              │────→│              │
│          │     │              │     │              │
└──────────┘     └──────────────┘     └──────────────┘

(Complete with actual services and events)
```

### 6.3 Exercise: Implement Producer and Consumer

```javascript
// TODO: Implement the producer that publishes events
// when a task is created
async function createTodoWithEvents(userId, todoData) {
  // 1. Create task in database
  // YOUR CODE

  // 2. Publish 'todo.created' event
  // YOUR CODE

  // 3. If it has a date, publish 'todo.calendar_sync_needed' event
  // YOUR CODE

  // 4. Return the created task
  // YOUR CODE
}

// TODO: Implement the notification consumer
// that processes 'todo.created' events
async function notificationConsumer(message) {
  // 1. Extract event data
  // YOUR CODE

  // 2. Fetch user notification preferences
  // YOUR CODE

  // 3. Send email IF user has email notifications enabled
  // YOUR CODE

  // 4. Send push IF user has push notifications enabled
  // YOUR CODE

  // 5. ACK the message
  // YOUR CODE
}
```

### 6.4 Exercise: Dead Letter Handling

**Describe what to do when each type of failure occurs:**

```markdown
| Failure | Likely Cause | Retry? | Max Retries | Action on DLQ |
|---------|-------------|:------:|:-----------:|---------------|
| Email not sent |  |  |  |  |
| Push notification failed |  |  |  |  |
| PDF not generated |  |  |  |  |
| Calendar sync failed |  |  |  |  |
| Message with invalid format |  |  |  |  |
```

---

## 7. Challenge 6: The Final Boss — Complete Project

*All World 4 levels | Difficulty: **** Boss*

### 7.1 The Grand Challenge

You have been hired to design the architecture of a **project management system** (simplified Trello/Asana style) for a company with 200 employees.

### 7.2 System Requirements

**Functional:**
- Create and manage projects, lists, and tasks (cards)
- Assign tasks to team members
- Comments and attachments on tasks
- Real-time notifications
- Dashboard with metrics and reports
- Full-text search on tasks and comments

**Non-Functional:**
- 200 simultaneous users (peak: 500)
- API response time: < 500ms (P95)
- Availability: 99.9%
- Data must be encrypted in transit and at rest
- Audit of all actions

**Constraints:**
- Team of 6 developers
- Monthly infrastructure budget: up to R$ 5,000
- Deadline: MVP in 3 months
- Must use Azure as cloud provider

### 7.3 Deliverables

```markdown
## Deliverable 1: Architecture Document

### 1.1 Architectural Style
- Choice and justification
- High-level diagram

### 1.2 Cloud Model and Azure Services
- List of services with justification
- Monthly cost estimate

### 1.3 Authentication System
- Auth strategy (JWT? OAuth? Both?)
- RBAC model
- Flow diagram

### 1.4 Data Strategy
- Chosen database(s)
- Simplified schema of main tables
- Cache strategy (what, where, TTL)

### 1.5 Messaging Strategy
- Which events exist
- Pub/Sub or Queue for each case
- Event flow diagram

### 1.6 Deploy Strategy
- Chosen Git Workflow
- Deploy strategy (blue-green, canary, etc.)
- Simplified CI/CD pipeline
- Rollback plan

### 1.7 Performance
- Performance goals (metrics with values)
- Cache strategy
- CDN
- Planned optimizations
```

### 7.4 Evaluation Criteria

| Criterion | Weight | Description |
|-----------|--------|------------|
| **Coherence** | 25% | Do the decisions make sense together? |
| **Justification** | 25% | Does each choice have a clear "why"? |
| **Trade-offs** | 20% | Are advantages AND disadvantages recognized? |
| **Practicality** | 15% | Is it feasible with the given team and budget? |
| **Diagrams** | 15% | Are diagrams clear and informative? |

**Scale:**

| Grade | Meaning |
|-------|---------|
| **S (Super Star)** | Excellent — coherent, justified decisions with clear trade-offs |
| **A (Mushroom)** | Good — most decisions well justified |
| **B (Coin)** | Acceptable — some decisions without justification |
| **C (1-UP)** | Needs improvement — incoherent or unjustified decisions |

---

## 8. World 4 Glossary

| # | Term | Definition | Mario Analogy |
|---|------|-----------|---------------|
| 1 | **Authentication** | Verify identity | Prove you're Mario, not Bowser |
| 2 | **Authorization** | Verify permission | Does Mario have the room key? |
| 3 | **JWT** | Self-contained signed token | Peach's magic seal |
| 4 | **OAuth 2.0** | Delegated authentication | Asking the King to confirm |
| 5 | **RBAC** | Role-based access control | Different keys per character |
| 6 | **Hashing** | Irreversible transformation | Magic fingerprint |
| 7 | **IaaS** | Infrastructure as a Service | Empty land — build everything |
| 8 | **PaaS** | Platform as a Service | Ready castle — just decorate |
| 9 | **SaaS** | Software as a Service | Luxury hotel — move in |
| 10 | **Serverless** | On-demand computing | Magic rooms that appear and vanish |
| 11 | **Monolith** | Single application | One giant castle |
| 12 | **Microservices** | Independent services | Village of specialized houses |
| 13 | **MVC** | Model-View-Controller | Vault + Throne Room + War Room |
| 14 | **Clean Architecture** | Concentric layers | Castle walls |
| 15 | **Event-Driven** | Communication through events | Messenger bells |
| 16 | **Blue-Green** | Two environments, swap | Two castles, flip the sign |
| 17 | **Canary** | Gradual deploy | Send Toad to explore first |
| 18 | **Rolling** | Update one instance at a time | Replace guards one by one |
| 19 | **Feature Flag** | Toggle functionality on/off | Invisible doors |
| 20 | **Rollback** | Revert to previous version | Emergency portal |
| 21 | **Git Flow** | Formal workflow | Tournament with brackets |
| 22 | **GitHub Flow** | Simple workflow | Casual match |
| 23 | **Trunk-Based** | Everyone on main | Everyone on the same field |
| 24 | **Array** | Ordered list | Row of coins |
| 25 | **Object** | Key-value collection | Treasure chest |
| 26 | **JSON** | Data exchange format | Universal treasure map |
| 27 | **Cache** | Fast temporary storage | Power-ups in your pocket |
| 28 | **Redis** | In-memory database | Ultra-fast magic pocket |
| 29 | **CDN** | Content delivery network | Shops in every world |
| 30 | **Lazy Loading** | Load on demand | Build room when someone enters |
| 31 | **N+1 Problem** | Excessive queries | Going to the shop N times |
| 32 | **Message Queue** | Message queue | Parakoopa mail carriers |
| 33 | **RabbitMQ** | Message broker | Central post office |
| 34 | **Service Bus** | Managed message broker | Royal express mail |
| 35 | **Pub/Sub** | Publish to many | Bulletin board |
| 36 | **Dead Letter Queue** | Failure queue | Returned mail |
| 37 | **Idempotency** | 2x = same result | Duplicate letter has no effect |
| 38 | **Shared Responsibility** | Who takes care of what | Royal guards vs personal guards |
| 39 | **TTL** | Cache time to live | Item expiration date |
| 40 | **API Gateway** | Single entry point | Kingdom's main gate |

---

## 9. Answer Key and Tips

**General tips for the challenges:**

**Challenge 1 (Auth):**
- Remember: Authentication ALWAYS before Authorization
- JWT for stateless APIs, sessions for traditional apps
- NEVER store passwords in plain text — always bcrypt
- Rate limiting is essential on the login endpoint

**Challenge 2 (Architecture):**
- Startup with 3 devs → Monolith is almost always the right answer
- 50 devs with legacy system → Strangler Fig to migrate gradually
- IoT with variable traffic → Serverless + Event Hub

**Challenge 3 (Deploy):**
- 50,000 users → Canary is the safest strategy
- Always have feature flags for new features
- Pipeline should include: build → test → staging → production
- Database rollback is the most dangerous — plan carefully

**Challenge 4 (Cache):**
- Cache-aside is the simplest and most effective strategy
- Redis for frequent data, CDN for static assets
- Debounce for searches (wait for user to stop typing)
- Include/eager loading to eliminate N+1

**Challenge 5 (Messaging):**
- Email and notification → Pub/Sub (multiple consumers)
- PDF → Queue (one dedicated consumer)
- Audit → Pub/Sub (subscribes to ALL events)
- Always implement idempotency in consumers

**Challenge 6 (Final Boss):**
- Start with a modular monolith (MVC or Clean Architecture)
- PaaS (App Service) to maintain simplicity
- PostgreSQL with Redis as cache
- Azure Service Bus for messaging
- GitHub Flow with canary deployment
- Justify EVERYTHING — the justification is worth more than the choice

---

## 10. Next Steps: World 5

Congratulations on completing World 4 — Water World!

You now master:

- Advanced protection (Auth, JWT, OAuth, RBAC)
- Cloud models (IaaS, PaaS, SaaS, Serverless)
- Software architecture (Monolith, Microservices, MVC, Clean)
- Advanced deploy (Blue-Green, Canary, Rolling, Feature Flags)
- Git Workflows (Git Flow, GitHub Flow, Trunk-Based)
- Data structures and JSON
- Cache and performance (Redis, CDN, Lazy Loading)
- Messaging (RabbitMQ, Service Bus, Pub/Sub, DLQ)

**In World 5 — Night Sky (Advanced Agentic DevOps)**, you will explore:

- Evolution from DevOps to Agentic DevOps
- AI maturity levels
- GitHub Copilot in all modes
- Types of AI agents
- MCP in detail
- GitHub Advanced Security

*King Boo has been defeated! But the journey continues. See you in the next World, Sofia!*

---

## References

- [JWT.io — JSON Web Tokens](https://jwt.io/)
- [Microsoft — Cloud Architecture Patterns](https://learn.microsoft.com/en-us/azure/architecture/patterns/)
- [Martin Fowler — Microservices](https://martinfowler.com/articles/microservices.html)
- [Azure App Service — Deployment Slots](https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots)
- [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow)
- [Redis — Documentation](https://redis.io/docs/)
- [Azure CDN](https://learn.microsoft.com/en-us/azure/cdn/)
- [Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/)
- [RabbitMQ — Tutorials](https://www.rabbitmq.com/tutorials)
- [Martin Fowler — Feature Toggles](https://martinfowler.com/articles/feature-toggles.html)
- [OWASP — Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [12 Factor App](https://12factor.net/)

---

*World 4 COMPLETE! King Boo defeated! Sofia now masters the foundations of Advanced Architecture. The next challenge awaits in the night sky of World 5. See you there!*

---

<div align="center">

⬅️ [Previous: Level 4-8: Messaging](4-8-mensageria.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 5-1: DevOps Evolution](../world-5-bowser-castle-1/5-1_devops-evolution.md)

</div>
