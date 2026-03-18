---
title: "Level 8-2 -- Boss Rush: Review of All Worlds"
description: "Complete review with 8 challenging scenarios based on real situations, each combining knowledge from multiple Worlds. Boss Rush mode -- face all bosses with all your power-ups."
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - review
  - boss-rush
  - scenarios
  - exercises
  - world-8
  - mario
---

# Level 8-2 -- Boss Rush: Review of All Worlds

---

## Change Log

| Version | Date       | Author       | Description                          |
|---------|------------|--------------|--------------------------------------|
| 1.0.0   | 2026-03-18 | Paula Silva  | Initial creation with Mario analogies |

---

## Table of Contents

- [Prologue: The Boss Rush Arena](#prologue-the-boss-rush-arena)
- [How the Boss Rush Works](#how-the-boss-rush-works)
- [Boss 1: The Giant Goomba (World 1 -- Fundamentals)](#boss-1-the-giant-goomba-world-1--fundamentals)
  - [Scenario](#scenario)
  - [Your Mission](#your-mission)
  - [Toad's Tips](#toads-tips)
  - [Guided Solution](#guided-solution)
  - [Required Power-Ups](#required-power-ups)
- [Boss 2: The Blooper from the Depths (World 2 -- Infrastructure)](#boss-2-the-blooper-from-the-depths-world-2--infrastructure)
  - [Scenario](#scenario-1)
  - [Your Mission](#your-mission-1)
  - [Toad's Tips](#toads-tips-1)
  - [Guided Solution](#guided-solution-1)
  - [Required Power-Ups](#required-power-ups-1)
- [Boss 3: The Evil Lakitu (World 3 -- Tools)](#boss-3-the-evil-lakitu-world-3--tools)
  - [Scenario](#scenario-2)
  - [Your Mission](#your-mission-2)
  - [Toad's Tips](#toads-tips-2)
  - [Guided Solution](#guided-solution-2)
  - [Required Power-Ups](#required-power-ups-2)
- [Boss 4: The Poisonous Cheep-Cheep (World 4 -- Architecture)](#boss-4-the-poisonous-cheep-cheep-world-4--architecture)
  - [Scenario](#scenario-3)
  - [Your Mission](#your-mission-3)
  - [Toad's Tips](#toads-tips-3)
  - [Guided Solution](#guided-solution-3)
  - [Required Power-Ups](#required-power-ups-3)
- [Boss 5: Bowser Jr (World 5 -- AI and Agents)](#boss-5-bowser-jr-world-5--ai-and-agents)
  - [Scenario](#scenario-4)
  - [Your Mission](#your-mission-4)
  - [Toad's Tips](#toads-tips-4)
  - [Guided Solution](#guided-solution-4)
  - [Required Power-Ups](#required-power-ups-4)
- [Boss 6: Kamek the Illusionist (World 6 -- Copilot Ecosystem)](#boss-6-kamek-the-illusionist-world-6--copilot-ecosystem)
  - [Scenario](#scenario-5)
  - [Your Mission](#your-mission-5)
  - [Toad's Tips](#toads-tips-5)
  - [Guided Solution](#guided-solution-5)
  - [Required Power-Ups](#required-power-ups-5)
- [Boss 7: The Supreme Magikoopa (World 7 -- AI Frameworks)](#boss-7-the-supreme-magikoopa-world-7--ai-frameworks)
  - [Scenario](#scenario-6)
  - [Your Mission](#your-mission-6)
  - [Toad's Tips](#toads-tips-6)
  - [Guided Solution](#guided-solution-6)
  - [Required Power-Ups](#required-power-ups-6)
- [FINAL Boss: The Ultimate Bowser (All Worlds)](#final-boss-the-ultimate-bowser-all-worlds)
  - [Scenario](#scenario-7)
  - [Your Mission](#your-mission-7)
  - [Toad's Tips](#toads-tips-7)
  - [Guided Solution](#guided-solution-7)
  - [Required Power-Ups](#required-power-ups-7)
- [Final Scoreboard: Results Table](#final-scoreboard-results-table)
- [Summary Table: Concepts per Boss](#summary-table-concepts-per-boss)
- [References](#references)

---

## Prologue: The Boss Rush Arena

Sofia entered the most feared room in the Final Castle: the **Boss Rush Arena**. The walls were decorated with trophies from the bosses of each World -- the Giant Goomba, the Blooper, Lakitu, Cheep-Cheep, Bowser Jr, Kamek, Magikoopa, and there in the back, in the shadows, the enormous silhouette of **Bowser** himself.

*"Congratulations on making it this far,"* said the voice. *"But before you claim final victory, you need to prove that you've mastered EVERYTHING you've learned. In this arena, you'll face 8 scenarios -- one for each World. Each scenario requires you to combine knowledge from multiple worlds. It's not enough to know how to jump -- you need to know how to jump, shoot, fly, and swim all at the same time."*

Sofia adjusted her power-ups. It was time for the Boss Rush.

---

## How the Boss Rush Works

Each boss follows this structure:

```
+--------------------------------------------------+
|  STRUCTURE OF EACH BOSS                          |
|                                                  |
|  1. SCENARIO: Real situation you face            |
|  2. YOUR MISSION: What you need to do            |
|  3. TOAD'S TIPS: Clues for the solution          |
|  4. GUIDED SOLUTION: Detailed step by step       |
|  5. REQUIRED POWER-UPS: Worlds involved          |
|                                                  |
|  INCREASING DIFFICULTY:                          |
|  Boss 1: [==--------] Easy                       |
|  Boss 2: [===-------] Easy+                      |
|  Boss 3: [=====-----] Medium                     |
|  Boss 4: [======----] Medium+                    |
|  Boss 5: [=======---] Hard                       |
|  Boss 6: [========--] Hard+                      |
|  Boss 7: [==========-] Expert                    |
|  Boss F: [==========] FINAL                      |
+--------------------------------------------------+
```

### Diagram: Boss Battle Sequence

```mermaid
flowchart LR
    CODE["YOUR CODE\nReady for battle"]

    subgraph BOSS1["BOSS 1: TSC\nBowser Jr\nType Checking"]
        TSC["TypeScript Compiler\nAre all types correct?\nNo type errors allowed!"]
        TSC_PASS["DEFEATED"]
        TSC_FAIL["GAME OVER\nFix type errors"]
    end

    subgraph BOSS2["BOSS 2: JEST\nBoom Boom\nAll Tests Passing"]
        JEST["Test Runner\nDo all tests pass?\nNo failures allowed!"]
        JEST_PASS["DEFEATED"]
        JEST_FAIL["GAME OVER\nFix failing tests"]
    end

    subgraph BOSS3["BOSS 3: ESLINT\nKamek\nCode Quality"]
        ESLINT["Linter\nIs code clean?\nNo lint errors allowed!"]
        ESLINT_PASS["DEFEATED"]
        ESLINT_FAIL["GAME OVER\nFix lint errors"]
    end

    subgraph BOSS4["BOSS 4: ZERO ANY\nBowser\nNo TypeScript Escapes"]
        ZEROANY["Any Counter\nZero uses of any type?\nNo escapes allowed!"]
        ZEROANY_PASS["DEFEATED"]
        ZEROANY_FAIL["GAME OVER\nRemove all any types"]
    end

    VICTORY["VICTORY\nAll bosses defeated!"]
    DEPLOY["DEPLOY TO PRODUCTION\nGame Complete!"]

    CODE -->|"Challenge 1"| TSC
    TSC -->|"PASS"| TSC_PASS
    TSC -->|"FAIL"| TSC_FAIL
    TSC_PASS -->|"Challenge 2"| JEST
    JEST -->|"PASS"| JEST_PASS
    JEST -->|"FAIL"| JEST_FAIL
    JEST_PASS -->|"Challenge 3"| ESLINT
    ESLINT -->|"PASS"| ESLINT_PASS
    ESLINT -->|"FAIL"| ESLINT_FAIL
    ESLINT_PASS -->|"Final Boss"| ZEROANY
    ZEROANY -->|"PASS"| ZEROANY_PASS
    ZEROANY -->|"FAIL"| ZEROANY_FAIL
    ZEROANY_PASS -->|"ALL CLEAR"| VICTORY
    VICTORY -->|"Ship it!"| DEPLOY

    TSC_FAIL -->|"Retry"| CODE
    JEST_FAIL -->|"Retry"| CODE
    ESLINT_FAIL -->|"Retry"| CODE
    ZEROANY_FAIL -->|"Retry"| CODE

    style CODE fill:#3498DB,color:#fff
    style BOSS1 fill:#E67E22,color:#fff
    style BOSS2 fill:#9B59B6,color:#fff
    style BOSS3 fill:#E67E22,color:#fff
    style BOSS4 fill:#C0392B,color:#fff
    style VICTORY fill:#F1C40F,color:#000,stroke-width:3px
    style DEPLOY fill:#27AE60,color:#fff,stroke-width:4px
    style TSC_FAIL fill:#E74C3C,color:#fff
    style JEST_FAIL fill:#E74C3C,color:#fff
    style ESLINT_FAIL fill:#E74C3C,color:#fff
    style ZEROANY_FAIL fill:#E74C3C,color:#fff
    style TSC_PASS fill:#27AE60,color:#fff
    style JEST_PASS fill:#27AE60,color:#fff
    style ESLINT_PASS fill:#27AE60,color:#fff
    style ZEROANY_PASS fill:#27AE60,color:#fff
```

**Rule**: Try to solve each scenario BEFORE looking at the guided solution. Real learning comes from trying.

---

## Boss 1: The Giant Goomba (World 1 -- Fundamentals)

**Difficulty**: [==--------] Easy
**Main World**: 1 (Green Plains)
**Combined Worlds**: 1 + 3

### Scenario

You've just been hired as a junior developer at MushKingdom Tech. On your first day, your tech lead Pedro says:

*"Welcome! We have a project called `mushroom-store`. I need you to: clone the repository, create a branch for your feature, make a simple change (add your name to the README), commit with a standard message, and open a Pull Request. The repository is on the company's GitHub."*

### Your Mission

1. Clone the `mushroom-store` repository from GitHub
2. Create a branch called `feature/add-sofia-to-team`
3. Add your name to the contributors list in README.md
4. Commit following the Conventional Commits standard
5. Push the branch
6. Open a Pull Request on GitHub
7. Ensure the CI (GitHub Actions) passes

### Toad's Tips

- Remember the basic flow: clone -> branch -> edit -> commit -> push -> PR
- Conventional Commits: `docs: add Sofia to contributors list`
- The CI may fail if the README has a formatting error (Markdown lint)
- Check if `.github/workflows/ci.yml` exists before pushing

### Guided Solution

```bash
# Step 1: Clone the repository (W1 - Git)
git clone https://github.com/mushkingdom/mushroom-store.git
cd mushroom-store

# Step 2: Create branch (W1 - Git)
git checkout -b feature/add-sofia-to-team

# Step 3: Edit the README (W1 - VS Code)
# Open VS Code and add to the README:
# ## Contributors
# - Pedro (Tech Lead)
# - Sofia (Junior Developer) <-- NEW

# Step 4: Commit with standard (W1 - Git + W3 - Best Practices)
git add README.md
git commit -m "docs: add Sofia to contributors list"

# Step 5: Push (W1 - Git + GitHub)
git push -u origin feature/add-sofia-to-team

# Step 6: Open PR on GitHub (W1 - GitHub)
# Go to GitHub > Pull Requests > New Pull Request
# Base: main <- Compare: feature/add-sofia-to-team
# Title: "docs: add Sofia to contributors list"
# Description: "Adding Sofia as a new project contributor"

# Step 7: Verify CI (W1 - GitHub Actions)
# Wait for the CI workflow to run and check if it passed
# If it failed: read the logs, fix, commit again
```

### Required Power-Ups

| Power-Up | World | Usage |
|----------|-------|-------|
| VS Code | W1 | Editor for making changes |
| Git | W1 | Clone, branch, commit, push |
| GitHub | W1 | PR and collaboration |
| GitHub Actions | W1 | Automated CI |
| Conventional Commits | W3 | Message standard |

---

## Boss 2: The Blooper from the Depths (World 2 -- Infrastructure)

**Difficulty**: [===-------] Easy+
**Main World**: 2 (Caves)
**Combined Worlds**: 1 + 2 + 3

### Scenario

The team receives a complaint: *"The site is down!"*. You check and the site really isn't responding. The tech lead asks:

*"I need you to investigate: check the environments (dev, staging, prod), look at the logs, find out if it's a DNS, API, or database problem, and give me a diagnosis."*

### Your Mission

1. Check which environment has the problem (dev, staging, production)
2. Check if DNS is resolving correctly
3. Verify if the API responds (endpoint /health)
4. Verify if the database is accessible
5. Analyze the logs on the observability dashboard
6. Create an issue on GitHub with the diagnosis
7. Propose a solution

### Toad's Tips

- Start with the basics: `ping`, `nslookup`, `curl`
- If DNS resolves but the API doesn't respond, the problem is on the server
- If the API responds but with a 500 error, the problem might be the database
- Logs are your best friends -- look for "ERROR" and "FATAL"
- The real problem: the SSL certificate expired yesterday at 23:59

### Guided Solution

```bash
# Step 1: Check DNS (W2 - DNS)
nslookup mushroom-store.com
# Result: Resolves to 20.30.40.50 -- DNS OK

# Step 2: Check connectivity (W2 - Infrastructure)
curl -v https://mushroom-store.com/health
# Result: SSL_ERROR_EXPIRED_CERT -- FOUND!

# Step 3: Check certificate (W2 - Security)
openssl s_client -connect mushroom-store.com:443 2>/dev/null | \
  openssl x509 -noout -dates
# notAfter=Mar 17 23:59:59 2026 GMT  <-- EXPIRED YESTERDAY!

# Step 4: Check environments (W2 - Environments)
curl -k https://staging.mushroom-store.com/health
# Result: {"status": "healthy"} -- Staging OK (different cert)
curl -k https://mushroom-store.com/health
# Result: {"status": "healthy"} -- API works, cert expired

# Step 5: Analyze logs (W2 - Observability)
# In Grafana/Azure Monitor: filter by "SSL" or "certificate"
# Found: "WARNING: Certificate expires in 1 day" (yesterday)

# Step 6: Create issue (W1 - GitHub)
# Title: "fix: SSL certificate expired on production"
# Description:
#   Root cause: SSL certificate expired on 2026-03-17
#   Impact: site inaccessible via HTTPS in production
#   Staging not affected (different certificate)
#   Solution: renew certificate + set up auto-renewal

# Step 7: Solution (W2 - DevOps/IaC)
# Renew certificate via Let's Encrypt:
# certbot renew --force-renewal
# Set up cron job for auto-renewal:
# 0 3 1 * * certbot renew --quiet
```

### Required Power-Ups

| Power-Up | World | Usage |
|----------|-------|-------|
| Terminal | W3 | Diagnostic commands |
| DNS | W2 | Verify name resolution |
| Security | W2 | Diagnose SSL certificate |
| Observability | W2 | Analyze logs |
| Environments | W2 | Check dev vs staging vs prod |
| GitHub Issues | W1 | Document the problem |

---

## Boss 3: The Evil Lakitu (World 3 -- Tools)

**Difficulty**: [=====-----] Medium
**Main World**: 3 (Sky World)
**Combined Worlds**: 1 + 2 + 3 + 5

### Scenario

The team needs a **new development environment** that any developer can spin up in minutes. Today, each dev spends 2-3 hours configuring the environment manually. The tech lead asks:

*"Create a Docker Compose that brings up the entire application: React frontend, Node.js backend, PostgreSQL, and Redis. Add automated tests and configure Copilot to help."*

### Your Mission

1. Create a `docker-compose.yml` with 4 services (frontend, backend, db, redis)
2. Create optimized Dockerfiles with multi-stage build for frontend and backend
3. Configure volumes for database persistence
4. Add healthchecks for all services
5. Create a `setup.sh` script that configures everything at once
6. Write tests that verify if services are healthy
7. Use Copilot to help with creation (record which prompts you used)

### Toad's Tips

- Multi-stage build: use one image for build and another for runtime
- Healthchecks: `curl -f http://localhost:3000/health || exit 1`
- Named volumes for PostgreSQL: `pgdata:/var/lib/postgresql/data`
- Redis doesn't need a volume (cache is ephemeral)
- Use `.env` for environment variables (never hardcode passwords)

### Guided Solution

```yaml
# docker-compose.yml (W3 - Docker)
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://localhost:4000
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
    depends_on:
      backend:
        condition: service_healthy

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "4000:4000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mushroom
      - REDIS_URL=redis://redis:6379
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:4000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_started

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mushroom
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d mushroom"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  pgdata:
```

```dockerfile
# backend/Dockerfile -- Multi-stage (W3 - Optimized Docker)

# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Stage 2: Runtime (much smaller image)
FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
EXPOSE 4000
CMD ["node", "dist/server.js"]
```

```bash
# Prompt used in Copilot (W5):
# "Create a docker-compose.yml for an application with
#  React frontend, Node.js backend, PostgreSQL and Redis.
#  Include healthchecks, multi-stage Dockerfiles and
#  volumes for database persistence."

# Integration tests (W3 - Tests):
# test/integration/docker-health.test.js
```

### Required Power-Ups

| Power-Up | World | Usage |
|----------|-------|-------|
| Docker | W3 | Containers and Docker Compose |
| Tests | W3 | Verify service health |
| Databases | W3 | PostgreSQL with persistence |
| Terminal | W3 | Execute commands |
| GitHub Copilot | W5 | Assist with creation |
| Environments | W2 | Variable configuration |

---

## Boss 4: The Poisonous Cheep-Cheep (World 4 -- Architecture)

**Difficulty**: [======----] Medium+
**Main World**: 4 (Aquatic World)
**Combined Worlds**: 1 + 2 + 3 + 4

### Scenario

The mushroom-store is growing and the monolith can't handle it anymore. The CTO decides to migrate to **microservices** and implement **blue-green deploy**. You are responsible for:

*"Break the products module into an independent microservice. Configure JWT authentication between services. Implement blue-green deploy on Azure. Everything needs to have zero downtime."*

### Your Mission

1. Extract the products module from the monolith into a microservice
2. Define the REST API for the new service (OpenAPI/Swagger)
3. Implement JWT authentication for service-to-service communication
4. Configure the blue-green deploy pipeline
5. Implement health checks and readiness probes
6. Create a rollback plan in case something goes wrong
7. Document the new architecture

### Toad's Tips

- Blue-green: two identical environments, instant traffic switch
- JWT between services: service-to-service auth, not the same as user auth
- Use API Gateway to route traffic between blue and green
- Rollback = point traffic back to the previous environment
- Zero downtime = mandatory health check before releasing traffic

### Guided Solution

```
ARCHITECTURE BEFORE (Monolith):
+-----------------------------------+
|  mushroom-store (monolith)        |
|  +--------+  +--------+  +-----+ |
|  | Users  |  |Products|  |Orders| |
|  +--------+  +--------+  +-----+ |
+-----------------------------------+

ARCHITECTURE AFTER (Microservices):
+----------------+    JWT    +-------------------+
| mushroom-store |<--------->| product-service   |
| (no Products)  |           | (independent)     |
+--------+-------+           +--------+----------+
         |                            |
         v                            v
   [PostgreSQL 1]              [PostgreSQL 2]
   (users, orders)             (products)
```

```yaml
# API Definition (W4 - APIs + Architecture)
# product-service/openapi.yaml
openapi: 3.0.3
info:
  title: Product Service API
  version: 1.0.0
paths:
  /api/products:
    get:
      summary: List all products
      security:
        - bearerAuth: []  # JWT required
      responses:
        '200':
          description: List of products
    post:
      summary: Create a product
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateProduct'
```

```yaml
# Blue-Green Deploy (W4 - Advanced Deploy)
# .github/workflows/deploy-blue-green.yml
name: Blue-Green Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Green
        run: |
          az webapp deployment slot create \
            --name product-service \
            --slot green

      - name: Health Check Green
        run: |
          for i in {1..10}; do
            STATUS=$(curl -s -o /dev/null -w "%{http_code}" \
              https://product-service-green.azurewebsites.net/health)
            if [ "$STATUS" = "200" ]; then
              echo "Green is healthy!"
              exit 0
            fi
            sleep 5
          done
          echo "Green failed health check!"
          exit 1

      - name: Swap Blue <-> Green
        run: |
          az webapp deployment slot swap \
            --name product-service \
            --slot green \
            --target-slot production

      - name: Verify Production
        run: |
          curl -f https://product-service.azurewebsites.net/health
```

```
ROLLBACK PLAN:
  If something goes wrong after the swap:
  1. az webapp deployment slot swap \
       --name product-service \
       --slot green \
       --target-slot production
     (Swap back -- instant)
  2. Investigate logs in Azure Monitor
  3. Fix and re-deploy
```

### Required Power-Ups

| Power-Up | World | Usage |
|----------|-------|-------|
| Microservices | W4 | Service architecture |
| Auth/JWT | W4 | Authentication between services |
| Deploy Blue-Green | W4 | Zero downtime deployment |
| APIs (OpenAPI) | W2 | Contract definition |
| GitHub Actions | W1 | Deploy pipeline |
| Azure | W1 | Hosting platform |
| Docker | W3 | Service packaging |

---

## Boss 5: Bowser Jr (World 5 -- AI and Agents)

**Difficulty**: [=======---] Hard
**Main World**: 5 (Bowser's Castle 1)
**Combined Worlds**: 1 + 3 + 4 + 5

### Scenario

Your app has a **production bug** that is affecting 30% of users: the shopping cart randomly loses items. The CTO demands urgent resolution. You need to use all AI tools to solve it fast.

*"Use Copilot to find the bug, fix it, make sure it doesn't come back, and deploy the fix. We have 2 hours."*

### Your Mission

1. Use `git bisect` to find the commit that introduced the bug
2. Use Copilot Agent Mode to analyze and propose the fix
3. Implement the fix with Copilot's help
4. Create tests that verify the bug doesn't come back (regression)
5. Configure GHAS to scan for related vulnerabilities
6. Do an emergency deploy (hotfix)
7. Monitor that the fix resolved the problem

### Toad's Tips

- `git bisect` is perfect for finding when a bug was introduced
- The bug is likely a race condition in Redis (cache invalidation)
- Copilot's Agent Mode can analyze the code and suggest a fix quickly
- Hotfix: create branch from `main`, fix, merge directly (bypass feature branch)
- Monitor the error rate after deploy to confirm the fix

### Guided Solution

```bash
# Step 1: Find the guilty commit (W1 - Advanced Git)
git bisect start
git bisect bad HEAD              # current version has the bug
git bisect good v2.2.0           # last version without the bug
# Git will checkout intermediate commits
# For each one, test: does the cart lose items?
# Result: commit abc123 "feat: add Redis caching to cart"
git bisect reset
```

```
# Step 2: Analyze with Copilot Agent Mode (W5)
Sofia in Copilot:
  "Analyze commit abc123 that added Redis cache to the
   cart. Users are randomly losing items.
   I suspect a race condition in cache invalidation.
   Analyze src/services/cart.ts and src/cache/redis.ts"

Copilot (Agent Mode):
  "I found the problem. In cart.ts:87, the updateCart() method
   updates the database AFTER invalidating the cache. If another
   request arrives between the invalidation and the database update,
   the cache will be reloaded with stale data (stale read).

   Suggested fix: use the cache-aside pattern -- update the database
   FIRST, then invalidate the cache. Or use a distributed lock."
```

```typescript
// Step 3: Implement fix (W5 - Copilot + W3 - Code)

// BEFORE (bug): invalidates cache, then updates database
async updateCart(userId: string, items: CartItem[]) {
  await this.cache.del(`cart:${userId}`);     // invalidate
  await this.db.cart.update({ userId, items }); // update
  // BUG: between del() and update(), another request reads
  // empty cache and reloads stale data from the database
}

// AFTER (fix): updates database, then invalidates cache
async updateCart(userId: string, items: CartItem[]) {
  await this.db.cart.update({ userId, items }); // update FIRST
  await this.cache.del(`cart:${userId}`);        // then invalidate
  // SAFE: even if another request reloads the cache,
  // it will get the NEW data from the database
}
```

```bash
# Step 4: Regression tests (W3 - Tests)
# test/regression/cart-race-condition.test.ts
# Test that simulates concurrent requests to the cart
# and verifies that items are not lost

# Step 5: GHAS scan (W5 - Security)
# Check if there are other similar race conditions in the code

# Step 6: Hotfix deploy (W4 - Deploy + W1 - Git)
git checkout main
git checkout -b hotfix/cart-race-condition
git add .
git commit -m "fix: resolve cart race condition in Redis cache invalidation"
git push -u origin hotfix/cart-race-condition
# Create PR -> Quick merge -> Automatic deploy

# Step 7: Monitor (W2 - Observability)
# Grafana: monitor cart error rate
# Expected: drop from 30% to 0% within 15 minutes
```

### Required Power-Ups

| Power-Up | World | Usage |
|----------|-------|-------|
| Git bisect | W1 | Find the guilty commit |
| Copilot Agent Mode | W5 | Analyze and suggest fix |
| Regression tests | W3 | Prevent recurrence |
| GHAS | W5 | Vulnerability scanning |
| Hotfix deploy | W4 | Emergency fix |
| Observability | W2 | Post-deploy monitoring |
| Redis/Cache | W4 | Understand the problem |

---

## Boss 6: Kamek the Illusionist (World 6 -- Copilot Ecosystem)

**Difficulty**: [========--] Hard+
**Main World**: 6 (Bowser's Castle 2)
**Combined Worlds**: 1 + 3 + 5 + 6

### Scenario

The company wants to **standardize** GitHub Copilot usage for the entire team of 20 developers. Today, each one uses it their own way -- no custom agents, no skills, no instructions. The result: inconsistent prompts, code without standards, and wasted tokens.

*"Configure the complete Copilot ecosystem for our project: agents, skills, instructions, prompts, hooks, and MCP. I want any new dev to be productive on their first day."*

### Your Mission

1. Create the `copilot-instructions.md` with project standards
2. Create 3 Custom Agents (.agent.md): Backend, Frontend, and DBA
3. Create 2 Skills (SKILL.md): workflow-feature and workflow-bugfix
4. Create 2 Prompt Files (.prompt.md): new-component and add-endpoint
5. Configure Hooks (pre-commit and commit-msg)
6. Configure MCP to connect to PostgreSQL and Figma
7. Document everything for the team

### Toad's Tips

- copilot-instructions.md goes in the `.github/` root
- Agents go in `.github/agents/`
- Skills go in `.github/skills/`
- Prompts go in `.github/prompts/`
- MCP goes in `.vscode/mcp.json`
- Hooks go via Husky in `package.json`

### Guided Solution

```markdown
# Step 1: copilot-instructions.md (W6 - Instructions)
# .github/copilot-instructions.md

# Copilot Instructions - MushKingdom Store

## Stack
- Frontend: React 18 + TypeScript 5 + Tailwind CSS
- Backend: Node.js 20 + Express + Prisma
- Database: PostgreSQL 16
- Cache: Redis 7
- Tests: Jest + React Testing Library

## Conventions
- TypeScript strict mode, zero `any`
- Conventional Commits (feat, fix, docs, chore)
- Repository Pattern for data access
- Variable and function names in English
- Comments in Portuguese

## Standards
- Every public function must have JSDoc
- Every endpoint must have validation with Zod
- Every service must have unit tests (>80% coverage)
```

```markdown
# Step 2: Custom Agent - Backend (W6 - Agents)
# .github/agents/backend-engineer.agent.md

---
name: "Backend Engineer"
description: "Specialist in Node.js, Express, and Prisma"
tools:
  - codebase
  - terminal
  - file
applyTo: "backend/**"
---

# Backend Engineer Agent

You are a senior backend engineer specialized in:
- Node.js with TypeScript strict
- Express with middleware pattern
- Prisma ORM with PostgreSQL
- Validation with Zod
- Testing with Jest

## Rules
- Never use `any` -- always define types
- Always return structured errors
- Always add logs with winston
- Follow the existing Repository Pattern
```

```json
// Step 6: MCP Config (W6 - MCP)
// .vscode/mcp.json
{
  "servers": {
    "postgresql": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres",
               "postgresql://user:pass@localhost:5432/mushroom"]
    },
    "figma": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-figma"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "${FIGMA_TOKEN}"
      }
    }
  }
}
```

```json
// Step 5: Hooks via Husky (W6 - Hooks)
// package.json (partial)
{
  "scripts": {
    "prepare": "husky install"
  }
}

// .husky/pre-commit
// #!/bin/sh
// npx lint-staged

// .husky/commit-msg
// #!/bin/sh
// npx commitlint --edit $1
```

### Required Power-Ups

| Power-Up | World | Usage |
|----------|-------|-------|
| Custom Agents | W6 | Create specialized personas |
| Skills | W6 | Define workflows |
| Instructions | W6 | Automatic rules |
| Prompt Files | W6 | Reusable shortcuts |
| Hooks | W6 | Commit automation |
| MCP | W6 | Connect tools |
| GitHub Copilot | W5 | Foundation for everything |
| Git | W1 | Config versioning |

---

## Boss 7: The Supreme Magikoopa (World 7 -- AI Frameworks)

**Difficulty**: [==========-] Expert
**Main World**: 7 (Star World)
**Combined Worlds**: 2 + 3 + 5 + 6 + 7

### Scenario

MushKingdom Tech's support team receives 200+ tickets per day. 60% are questions that the documentation already answers. The CTO wants:

*"Build a RAG agent that answers customer questions using our documentation. Use AI Foundry, connect via MCP, and publish on the IDP. The agent must know when it doesn't know and escalate to humans."*

### Your Mission

1. Index the product documentation in Azure AI Search
2. Configure a GPT-4o model in Azure AI Foundry
3. Create a RAG flow: question -> search -> context -> response
4. Implement guardrails: detection of out-of-scope topics
5. Configure automatic escalation to a human when the agent doesn't know
6. Connect the agent to the ticket system via MCP
7. Publish the agent on the IDP/Backstage as a cataloged service
8. Define success metrics (automatic resolution, satisfaction)

### Toad's Tips

- Azure AI Search to index documents in 500-token chunks
- Use embeddings (text-embedding-ada-002) for vector representation
- The system prompt should instruct the agent to say "I don't know" when it can't find relevant documentation
- Confidence threshold: if score < 0.7, escalate to a human
- Custom MCP server to connect to the ticket system (Zendesk, Jira Service Desk, etc.)

### Guided Solution

```
RAG AGENT ARCHITECTURE:

  Customer asks a question
        |
        v
  +--[API Gateway]--+
        |
        v
  +--[Embedding]----+  Converts question into vector
        |
        v
  +--[AI Search]----+  Searches for similar documents
        |
        v
  +--[Rank & Filter]+  Score > 0.7? Continue : Escalate
        |
        v
  +--[GPT-4o]-------+  Generates response with doc context
        |
        v
  +--[Guardrails]---+  Checks: is it about our product?
        |                       No inappropriate content?
        v                       Does the response make sense?
  +--[Response]-----+
        |
        v
  Customer receives response
  (or escalates to human if score < 0.7)
```

```python
# Simplified RAG flow (W7 - RAG + AI Foundry)
from azure.search.documents import SearchClient
from openai import AzureOpenAI

# 1. Search for relevant documents
search_client = SearchClient(endpoint, index_name, credential)
results = search_client.search(
    search_text=None,
    vector_queries=[{
        "kind": "vector",
        "vector": get_embedding(user_question),
        "k_nearest_neighbors": 5,
        "fields": "content_vector"
    }]
)

# 2. Check confidence
top_score = results[0]['@search.score']
if top_score < 0.7:
    escalate_to_human(user_question)
    return "I'll transfer you to a specialized agent."

# 3. Build context
context = "\n".join([r['content'] for r in results])

# 4. Generate response with GPT-4o
client = AzureOpenAI(endpoint=ai_endpoint, api_key=ai_key)
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": f"""
         You are a MushKingdom Store assistant.
         Answer ONLY based on the provided context.
         If the information is not in the context, say:
         'I could not find that information in the documentation.
          I will transfer you to an agent.'
         Context: {context}
         """},
        {"role": "user", "content": user_question}
    ]
)
```

```yaml
# Registration in IDP/Backstage (W7 - IDP)
# catalog-info.yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: support-rag-agent
  description: RAG agent for customer support
  annotations:
    backstage.io/techdocs-ref: dir:.
spec:
  type: service
  lifecycle: production
  owner: team-ai
  system: customer-support
  providesApis:
    - support-agent-api
```

### Required Power-Ups

| Power-Up | World | Usage |
|----------|-------|-------|
| AI Foundry | W7 | Model platform |
| RAG | W7 | Contextual search |
| LangChain/Semantic Kernel | W7 | Flow orchestration |
| IDP/Backstage | W7 | Service cataloging |
| MCP | W6 | Connect to ticket system |
| Copilot | W5 | Assist with development |
| APIs | W2 | Agent endpoints |
| Tests | W3 | Validate responses |
| Observability | W2 | Monitor performance |

---

## FINAL Boss: The Ultimate Bowser (All Worlds)

**Difficulty**: [==========] FINAL
**Main World**: ALL
**Combined Worlds**: 1 + 2 + 3 + 4 + 5 + 6 + 7

### Scenario

MushKingdom Tech has been acquired by a larger company. You need to **migrate the entire ecosystem** to a new infrastructure, keeping everything running. The challenge:

*"We have 30 days to migrate the repository, the infrastructure, the CI/CD, the agents, the RAG, and the IDP to the new GitHub organization. Zero downtime. No data lost. All agents need to keep working. And we need to document EVERYTHING for the new team."*

### Your Mission

1. **Plan** the migration (timeline, dependencies, risks)
2. **Migrate repositories** to the new GitHub organization (W1)
3. **Reconfigure environments** and secrets in the new infra (W2)
4. **Migrate containers** and Docker pipelines (W3)
5. **Update deploy** to point to the new Azure (W4)
6. **Migrate Copilot configuration** (agents, skills, instructions, MCP) (W5+W6)
7. **Migrate RAG agent** and reindex documents (W7)
8. **Update IDP** with new endpoints and owners (W7)
9. **Test EVERYTHING** end-to-end
10. **Document** for the new team
11. **Monitor** for 2 weeks post-migration (W2)
12. **Present** final report to leadership (W8)

### Toad's Tips

- Do it in phases: infra first, then code, then AI
- Use blue-green for the switch: new environment running in parallel
- Secrets should never be copied in plain text -- use Azure Key Vault
- GitHub Importer to migrate repos with complete history
- MCP configs need new tokens/credentials
- RAG needs to reindex -- embeddings are not portable between AI Search accounts

### Guided Solution

```
MIGRATION TIMELINE (30 DAYS):

Week 1: INFRASTRUCTURE (W1 + W2)
+--------------------------------------------------+
| Day 1-2: Create new org on GitHub                |
|          Configure policies and teams             |
| Day 3-4: Migrate repositories with GitHub Importer|
|          Verify history, branches, tags           |
| Day 5:   Configure secrets in new Azure          |
|          Key Vault for credentials                |
+--------------------------------------------------+

Week 2: BUILD AND DEPLOY (W3 + W4)
+--------------------------------------------------+
| Day 6-7: Migrate Dockerfiles and docker-compose  |
|          Create new Azure Container Registry      |
| Day 8-9: Reconfigure GitHub Actions workflows    |
|          Point to new ACR and new Azure           |
| Day 10:  Configure blue-green deploy in new env  |
|          Test pipeline end-to-end                 |
+--------------------------------------------------+

Week 3: COPILOT AND AI (W5 + W6 + W7)
+--------------------------------------------------+
| Day 11-12: Migrate .github/agents, skills, etc.  |
|            Update copilot-instructions.md         |
| Day 13-14: Reconfigure MCP with new credentials  |
|            Test PostgreSQL and Figma connections   |
| Day 15:    Migrate AI Foundry: new endpoint      |
|            Reindex documents in AI Search         |
|            Validate RAG agent responses           |
+--------------------------------------------------+

Week 4: TESTING AND CUTOVER (ALL)
+--------------------------------------------------+
| Day 16-18: Complete end-to-end tests             |
|            Smoke tests on all services            |
|            Load and performance tests             |
| Day 19:    CUTOVER: switch DNS to new infra      |
|            Monitor metrics for 24h                |
| Day 20-22: Shut down old infrastructure          |
|            Update IDP/Backstage                   |
| Day 23-25: Buffer for unexpected problems        |
| Day 26-30: Final documentation + training        |
+--------------------------------------------------+
```

```
POST-MIGRATION CHECKLIST:
  [ ] Repositories migrated with complete history
  [ ] CI/CD running in the new org
  [ ] All tests passing
  [ ] Blue-green deploy working
  [ ] GHAS configured and scanning
  [ ] Copilot configured with agents/skills/MCP
  [ ] RAG agent responding correctly
  [ ] IDP updated with new services
  [ ] DNS pointing to new infra
  [ ] Zero downtime during cutover
  [ ] Complete documentation for new team
  [ ] Active monitoring for 2 weeks
```

### Required Power-Ups

| Power-Up | World | Usage |
|----------|-------|-------|
| Git/GitHub | W1 | Migrate repositories |
| GitHub Actions | W1 | Reconfigure CI/CD |
| Azure | W1 | New infrastructure |
| Environments | W2 | Configure dev/staging/prod |
| Security | W2 | Migrate secrets |
| Observability | W2 | Monitor migration |
| DNS | W2 | Switch DNS records |
| Docker | W3 | Migrate containers |
| Tests | W3 | Validate migration |
| Deploy Blue-Green | W4 | Zero downtime cutover |
| Auth/JWT | W4 | Reconfigure authentication |
| Copilot | W5 | Configure in new org |
| GHAS | W5 | Security in new environment |
| Agents/Skills/MCP | W6 | Migrate Copilot ecosystem |
| Token Optimization | W6 | Maintain efficiency |
| AI Foundry | W7 | Migrate models |
| RAG | W7 | Reindex documents |
| IDP | W7 | Update catalog |

**This boss requires ALL power-ups from ALL Worlds. If you've made it this far and can solve this scenario, you've completed the game.**

---

## Final Scoreboard: Results Table

After defeating all bosses, evaluate your performance:

| Boss | World | Difficulty | Your Rating | Needed the Solution? |
|------|-------|------------|-------------|---------------------|
| 1. Giant Goomba | W1 | Easy | [ ] Mastered [ ] Needed tips | [ ] Yes [ ] No |
| 2. Blooper | W2 | Easy+ | [ ] Mastered [ ] Needed tips | [ ] Yes [ ] No |
| 3. Lakitu | W3 | Medium | [ ] Mastered [ ] Needed tips | [ ] Yes [ ] No |
| 4. Cheep-Cheep | W4 | Medium+ | [ ] Mastered [ ] Needed tips | [ ] Yes [ ] No |
| 5. Bowser Jr | W5 | Hard | [ ] Mastered [ ] Needed tips | [ ] Yes [ ] No |
| 6. Kamek | W6 | Hard+ | [ ] Mastered [ ] Needed tips | [ ] Yes [ ] No |
| 7. Magikoopa | W7 | Expert | [ ] Mastered [ ] Needed tips | [ ] Yes [ ] No |
| 8. Bowser | ALL | FINAL | [ ] Mastered [ ] Needed tips | [ ] Yes [ ] No |

```
RATING:
  8/8 without solution: MUSHROOM KINGDOM MASTER
  6-7/8 without solution: VETERAN HERO
  4-5/8 without solution: EXPERIENCED ADVENTURER
  2-3/8 without solution: EVOLVING APPRENTICE
  0-1/8 without solution: NEEDS TO REVISIT THE WORLDS
```

---

## Summary Table: Concepts per Boss

| Boss | Concepts Tested | Worlds |
|------|----------------|--------|
| 1. Goomba | Git, GitHub, PR, CI, Conventional Commits | W1, W3 |
| 2. Blooper | DNS, SSL, Logs, Environments, Diagnostics | W1, W2, W3 |
| 3. Lakitu | Docker, Compose, Multi-stage, Tests, Copilot | W1, W2, W3, W5 |
| 4. Cheep-Cheep | Microservices, JWT, Blue-Green, OpenAPI, Azure | W1, W2, W3, W4 |
| 5. Bowser Jr | Git bisect, Agent Mode, Race condition, Hotfix, GHAS | W1, W2, W3, W4, W5 |
| 6. Kamek | Agents, Skills, Instructions, Prompts, Hooks, MCP | W1, W3, W5, W6 |
| 7. Magikoopa | RAG, AI Foundry, Embeddings, Guardrails, IDP | W2, W3, W5, W6, W7 |
| 8. Bowser | EVERYTHING: complete ecosystem migration | W1-W7 |

---

## References

- [Git Bisect Documentation](https://git-scm.com/docs/git-bisect) -- Git bisect documentation
- [Docker Compose Documentation](https://docs.docker.com/compose/) -- Docker Compose documentation
- [Azure Deployment Slots](https://learn.microsoft.com/azure/app-service/deploy-staging-slots) -- Blue-Green with Azure
- [GitHub Copilot Agent Mode](https://docs.github.com/en/copilot/using-github-copilot/using-agent-mode) -- Agent Mode docs
- [GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security) -- GHAS
- [Azure AI Search](https://learn.microsoft.com/azure/search/) -- Azure AI Search documentation
- [Backstage.io Catalog](https://backstage.io/docs/features/software-catalog/) -- Service catalog
- [OpenAPI Specification](https://spec.openapis.org/oas/v3.1.0) -- OpenAPI specification
- [Conventional Commits](https://www.conventionalcommits.org/) -- Commit standard
- [Husky](https://typicode.github.io/husky/) -- Easy Git hooks

---

*"You've faced all the bosses. From the simplest Goomba to the most fearsome Bowser. With each victory, you didn't just demonstrate knowledge -- you demonstrated the ability to COMBINE knowledge from different worlds. That's what sets an ordinary player apart from a Mushroom Kingdom master."*

*Level 8-2 complete. Boss Rush mode: COMPLETE.*

*Next: Level 8-3 -- The End and the Beginning. Where to go after saving the Princess?*

---

<div align="center">

⬅️ [Previous: Level 8-1: How Everything Connects](8-1-how-everything-connects.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 8-3: Next Steps](8-3-next-steps.md)

</div>
