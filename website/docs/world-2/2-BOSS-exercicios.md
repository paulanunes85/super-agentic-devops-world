---
title: "Level 2-BOSS -- Boss Battle: Practical Exercises Level 2"
description: "Practical exercises from World 2 (Underground Caves): create environments, build APIs, configure security, DNS, agile methodologies, IaC, and observability"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - exercises
  - practice
  - boss-battle
  - environments
  - api
  - security
  - devops
  - observability
  - world-2
  - mario
---

# Level 2-BOSS -- Boss Battle: Practical Exercises Level 2

---

## Change Log

| Version | Date       | Author                                  | Description          |
|---------|------------|----------------------------------------|----------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation    |

---

## Table of Contents

- [Prologue: Boom Boom Appears](#prologue-boom-boom-appears)
- [1. Boss Battle Rules](#1-boss-battle-rules)
- [2. Quest 2-1: Parallel Worlds (Environments)](#2-quest-2-1-parallel-worlds-environments)
  - [2.1 Exercise: Create Environment Branches](#21-exercise-create-environment-branches)
  - [2.2 Exercise: Configure Variables per Environment](#22-exercise-configure-variables-per-environment)
  - [2.3 BONUS Challenge: Ephemeral Environment](#23-bonus-challenge-ephemeral-environment)
- [3. Quest 2-2: The Messenger (APIs)](#3-quest-2-2-the-messenger-apis)
  - [3.1 Exercise: Build a Simple REST API](#31-exercise-build-a-simple-rest-api)
  - [3.2 Exercise: Test with curl](#32-exercise-test-with-curl)
  - [3.3 BONUS Challenge: Document with Swagger](#33-bonus-challenge-document-with-swagger)
- [4. Quest 2-3: Protection Spells (Security)](#4-quest-2-3-protection-spells-security)
  - [4.1 Exercise: Configure .env and .gitignore](#41-exercise-configure-env-and-gitignore)
  - [4.2 Exercise: Configure GitHub Secrets](#42-exercise-configure-github-secrets)
  - [4.3 BONUS Challenge: Create a Key Vault on Azure](#43-bonus-challenge-create-a-key-vault-on-azure)
- [5. Quest 2-4: The World Map (DNS)](#5-quest-2-4-the-world-map-dns)
  - [5.1 Exercise: Investigate DNS with Tools](#51-exercise-investigate-dns-with-tools)
  - [5.2 Exercise: Map the Anatomy of URLs](#52-exercise-map-the-anatomy-of-urls)
- [6. Quest 2-5: Tournament Rules (Methodologies)](#6-quest-2-5-tournament-rules-methodologies)
  - [6.1 Exercise: Create a Kanban Board in GitHub Projects](#61-exercise-create-a-kanban-board-in-github-projects)
  - [6.2 Exercise: Write User Stories](#62-exercise-write-user-stories)
  - [6.3 Exercise: Simulate a Sprint Planning](#63-exercise-simulate-a-sprint-planning)
- [7. Quest 2-6: The DevOps Alliance (IaC)](#7-quest-2-6-the-devops-alliance-iac)
  - [7.1 Exercise: Write a Bicep Blueprint](#71-exercise-write-a-bicep-blueprint)
  - [7.2 Exercise: Basic CI Pipeline](#72-exercise-basic-ci-pipeline)
  - [7.3 BONUS Challenge: Terraform Init-Plan-Apply](#73-bonus-challenge-terraform-init-plan-apply)
- [8. Quest 2-7: The Senses (Observability)](#8-quest-2-7-the-senses-observability)
  - [8.1 Exercise: Add Structured Logging](#81-exercise-add-structured-logging)
  - [8.2 Exercise: Create Health Check Endpoint](#82-exercise-create-health-check-endpoint)
  - [8.3 BONUS Challenge: Simple Dashboard](#83-bonus-challenge-simple-dashboard)
- [9. Final Boss Battle: The Integrated Challenge](#9-final-boss-battle-the-integrated-challenge)
- [10. Scoring Table and Self-Assessment](#10-scoring-table-and-self-assessment)
- [References](#references)

---

## Prologue: Boom Boom Appears

Sofia had traversed all the levels of the Underground Caves. She learned about environments, APIs, security, DNS, methodologies, DevOps, and observability. She knew the theory. Now it was time to prove she knew the practice.

At the end of the last tunnel, a huge room opened up. In the center, a familiar enemy was spinning his arms menacingly: **Boom Boom** -- the boss of the Underground Caves.

*"Theory is nice,"* Boom Boom growled. *"But here in the Caves, only those who know how to DO things get through. I have 7 challenges for you, one for each level you crossed. Complete them all, and World 3 opens up."*

Toadette adjusted her whistle. *"You can do the exercises in any order you want, Sofia. Each quest has tiers: Basic (required), Intermediate (recommended), and BONUS (for heroes). Good luck!"*

---

## 1. Boss Battle Rules

**Requirements:**
- Computer with VS Code installed
- Git configured
- Node.js 18+ installed
- GitHub account (free)
- Azure account (optional -- for BONUS exercises)

**Scoring System:**

| Tier | Points | Description |
|------|--------|-------------|
| Basic | 1 point | The minimum to pass |
| Intermediate | 2 points | Demonstrates understanding |
| BONUS | 3 points | Goes beyond expectations |

**To defeat Boom Boom:** Minimum of **10 points** (from 7 basic quests = 7 points + 1 intermediate)

**To defeat Boom Boom with a star:** **21+ points** (all bonuses!)

---

## 2. Quest 2-1: Parallel Worlds (Environments)

### 2.1 Exercise: Create Environment Branches

**Tier: Basic (1 point)**

Create a GitHub repository with 3 branches representing environments:

```bash
# 1. Create local repository
mkdir todoapp-world2 && cd todoapp-world2
git init

# 2. Create initial file
echo '# TodoApp - World 2 Boss Battle' > README.md
git add README.md
git commit -m "feat: start TodoApp project"

# 3. Create environment branches
git branch develop     # Dev environment
git branch staging     # Staging environment
# main = Production

# 4. Push to GitHub
# (create the repo on GitHub first)
git remote add origin https://github.com/YOUR_USERNAME/todoapp-world2.git
git push -u origin main
git push origin develop
git push origin staging
```

**Proof of completion:** Screenshot showing the 3 branches on GitHub.

### 2.2 Exercise: Configure Variables per Environment

**Tier: Intermediate (2 points)**

Create different configuration files for each environment:

```bash
# Create configuration files
touch .env.example .env.development .env.staging
```

```bash
# .env.example (goes in the repository)
DATABASE_URL=
API_KEY=
LOG_LEVEL=
NODE_ENV=
```

```bash
# .env.development (does NOT go in the repository)
DATABASE_URL=postgresql://localhost:5432/todoapp_dev
API_KEY=dev-fake-key-12345
LOG_LEVEL=debug
NODE_ENV=development
```

```bash
# .env.staging (does NOT go in the repository)
DATABASE_URL=postgresql://staging-db:5432/todoapp_staging
API_KEY=staging-key-abc-456
LOG_LEVEL=info
NODE_ENV=staging
```

```bash
# .gitignore
.env
.env.development
.env.staging
.env.production
node_modules/
```

**Proof of completion:** Show that `.env.example` is in the repo and the `.env.*` files are not.

### 2.3 BONUS Challenge: Ephemeral Environment

**Tier: BONUS (3 points)**

Configure an automatic **deploy preview** using Vercel or Netlify for each Pull Request. When you open a PR, a temporary environment should be created automatically.

---

## 3. Quest 2-2: The Messenger (APIs)

### 3.1 Exercise: Build a Simple REST API

**Tier: Basic (1 point)**

Create an API with 5 endpoints (task CRUD):

```bash
# Setup
npm init -y
npm install express
```

Create the `server.js` file with:
- `GET /tarefas` -- List all
- `GET /tarefas/:id` -- Find by ID
- `POST /tarefas` -- Create new
- `PUT /tarefas/:id` -- Update
- `DELETE /tarefas/:id` -- Remove

Each endpoint should return the correct status code:
- 200 for success
- 201 for creation
- 204 for delete
- 404 for not found
- 400 for invalid request

**Proof of completion:** API running on `localhost:3000` responding to all 5 endpoints.

### 3.2 Exercise: Test with curl

**Tier: Intermediate (2 points)**

Create a `test-api.sh` file that tests ALL endpoints with curl:

```bash
#!/bin/bash
# test-api.sh -- Tests all API endpoints

echo "=== Testing TodoApp API ==="

echo "\n--- GET /tarefas (list) ---"
curl -s http://localhost:3000/tarefas | jq .

echo "\n--- POST /tarefas (create) ---"
curl -s -X POST http://localhost:3000/tarefas \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Test task", "concluida": false}' | jq .

echo "\n--- GET /tarefas/1 (find by ID) ---"
curl -s http://localhost:3000/tarefas/1 | jq .

echo "\n--- PUT /tarefas/1 (update) ---"
curl -s -X PUT http://localhost:3000/tarefas/1 \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Updated task", "concluida": true}' | jq .

echo "\n--- DELETE /tarefas/1 (remove) ---"
curl -s -X DELETE http://localhost:3000/tarefas/1 -w "\nStatus: %{http_code}\n"

echo "\n--- GET /tarefas/999 (not found) ---"
curl -s http://localhost:3000/tarefas/999 -w "\nStatus: %{http_code}\n"

echo "\n=== Tests completed ==="
```

**Proof of completion:** Script output showing all tests passing.

### 3.3 BONUS Challenge: Document with Swagger

**Tier: BONUS (3 points)**

Add Swagger/OpenAPI documentation to your API using `swagger-ui-express` and `swagger-jsdoc`. When accessing `http://localhost:3000/api-docs`, the interactive documentation should appear.

---

## 4. Quest 2-3: Protection Spells (Security)

### 4.1 Exercise: Configure .env and .gitignore

**Tier: Basic (1 point)**

1. Install `dotenv`: `npm install dotenv`
2. Create a `.env` file with at least 3 variables
3. Configure `.gitignore` to ignore `.env`
4. Create `.env.example` with the variables (without values)
5. In the code, use `process.env.VARIABLE` instead of hardcoded values

**Verification:**
```bash
# This should show .env.example but NOT .env
git status
```

**Proof of completion:** `.env.example` in the repo, `.env` ignored by Git.

### 4.2 Exercise: Configure GitHub Secrets

**Tier: Intermediate (2 points)**

1. In your GitHub repository, go to Settings > Secrets > Actions
2. Create 3 secrets:
   - `DATABASE_URL`
   - `API_KEY`
   - `JWT_SECRET`
3. Create a simple workflow that uses these secrets:

```yaml
# .github/workflows/test-secrets.yml
name: Test Secrets
on: workflow_dispatch

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Verify secrets exist
        env:
          DB_URL: ${{ secrets.DATABASE_URL }}
          KEY: ${{ secrets.API_KEY }}
          JWT: ${{ secrets.JWT_SECRET }}
        run: |
          if [ -z "$DB_URL" ]; then echo "DATABASE_URL not configured!"; exit 1; fi
          if [ -z "$KEY" ]; then echo "API_KEY not configured!"; exit 1; fi
          if [ -z "$JWT" ]; then echo "JWT_SECRET not configured!"; exit 1; fi
          echo "All secrets configured correctly!"
          echo "Note: values NEVER appear in logs (***)"
```

**Proof of completion:** Workflow executed successfully showing "All secrets configured correctly".

### 4.3 BONUS Challenge: Create a Key Vault on Azure

**Tier: BONUS (3 points)**

If you have an Azure account:

```bash
# 1. Create Resource Group
az group create --name rg-todoapp-boss --location brazilsouth

# 2. Create Key Vault
az keyvault create --name kv-todoapp-boss --resource-group rg-todoapp-boss

# 3. Store a secret
az keyvault secret set --vault-name kv-todoapp-boss \
  --name "DatabasePassword" --value "YourPasswordHere"

# 4. Retrieve the secret
az keyvault secret show --vault-name kv-todoapp-boss \
  --name "DatabasePassword" --query value -o tsv
```

**Proof of completion:** Screenshot of the Key Vault in the Azure portal with the secret created.

---

## 5. Quest 2-4: The World Map (DNS)

### 5.1 Exercise: Investigate DNS with Tools

**Tier: Basic (1 point)**

Use DNS tools to investigate 3 domains:

```bash
# Investigate github.com
nslookup github.com
dig github.com
dig github.com MX
dig github.com NS

# Investigate google.com
nslookup google.com
dig google.com

# Investigate microsoft.com
nslookup microsoft.com
dig microsoft.com TXT
```

**Answer:**
1. What is the IP of `github.com`?
2. What are the Name Servers for `github.com`?
3. What is the email service (MX) for `github.com`?
4. How long (TTL) does the A record stay in the cache?

**Proof of completion:** Answers to the 4 questions with command evidence.

### 5.2 Exercise: Map the Anatomy of URLs

**Tier: Intermediate (2 points)**

Decompose 5 URLs identifying each component:

```
1. https://api.github.com/repos/microsoft/vscode/issues?state=open
   Protocol: _______
   Subdomain: _______
   Domain: _______
   TLD: _______
   Path: _______
   Query string: _______

2. https://portal.azure.com/#blade/Microsoft_Azure_Monitoring

3. https://www.google.com.br/search?q=devops+mario

4. https://docs.github.com/en/actions/learn-github-actions

5. postgresql://admin:senha@db.todoapp.com:5432/todoapp_prod
   (Connection URI -- identify user, password, host, port, database)
```

---

## 6. Quest 2-5: Tournament Rules (Methodologies)

### 6.1 Exercise: Create a Kanban Board in GitHub Projects

**Tier: Basic (1 point)**

1. On GitHub, create a Project with "Board" view
2. Create the columns: `Backlog`, `To Do`, `In Progress`, `In Review`, `Done`
3. Create at least 5 Issues (quests) for the TodoApp:
   - A new feature
   - A bug fix
   - A performance improvement
   - A documentation task
   - A technical task (tech debt)
4. Distribute the Issues across the columns

**Proof of completion:** Link to the GitHub Project with at least 5 Issues.

### 6.2 Exercise: Write User Stories

**Tier: Intermediate (2 points)**

Write 5 complete User Stories with acceptance criteria for the TodoApp:

```markdown
## User Story #1
**As a** TodoApp user,
**I want to** filter tasks by priority (high, medium, low),
**so that** I can focus on the most important tasks first.

### Acceptance Criteria
- [ ] Filter buttons appear above the list
- [ ] Clicking "High" shows only high-priority tasks
- [ ] "All" filter shows all tasks
- [ ] The active filter is visually highlighted
- [ ] The task count updates when filtering

### Story Points: 5
### Labels: feature, frontend
```

Repeat for 4 more User Stories.

### 6.3 Exercise: Simulate a Sprint Planning

**Tier: BONUS (3 points)**

1. Define the team velocity: 20 Story Points per Sprint
2. Prioritize the User Stories from the previous exercise
3. Select which ones fit in Sprint 1
4. Document the Sprint Backlog
5. Write the "Sprint Goal" (Sprint objective in one sentence)

---

## 7. Quest 2-6: The DevOps Alliance (IaC)

### 7.1 Exercise: Write a Bicep Blueprint

**Tier: Basic (1 point)**

Create a `main.bicep` file that defines the TodoApp infrastructure:

```bicep
// main.bicep
param environment string = 'dev'
param location string = 'brazilsouth'

resource appServicePlan 'Microsoft.Web/serverfarms@2023-01-01' = {
  name: 'plan-todoapp-${environment}'
  location: location
  sku: {
    name: 'F1'  // Free tier!
  }
  kind: 'linux'
  properties: {
    reserved: true
  }
}

resource webApp 'Microsoft.Web/sites@2023-01-01' = {
  name: 'app-todoapp-${environment}-${uniqueString(resourceGroup().id)}'
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: 'NODE|20-lts'
    }
  }
}

output appUrl string = 'https://${webApp.properties.defaultHostName}'
```

**Proof of completion:** `main.bicep` file in the repository. (No need to deploy.)

### 7.2 Exercise: Basic CI Pipeline

**Tier: Intermediate (2 points)**

Create a GitHub Actions workflow that runs on every push:

```yaml
# .github/workflows/ci.yml
name: CI Pipeline
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Check lint (if configured)
        run: npm run lint --if-present

      - name: Run tests (if configured)
        run: npm test --if-present

      - name: Build
        run: npm run build --if-present

      - name: Verification complete
        run: echo "CI Pipeline completed successfully!"
```

**Proof of completion:** Green CI badge on GitHub.

### 7.3 BONUS Challenge: Terraform Init-Plan-Apply

**Tier: BONUS (3 points)**

If you have Terraform and Azure CLI:

1. Install Terraform
2. Write a basic `main.tf`
3. Run `terraform init`
4. Run `terraform plan` (show the output)
5. Run `terraform apply` (if you have an Azure account)
6. Run `terraform destroy` (clean up resources)

---

## 8. Quest 2-7: The Senses (Observability)

### 8.1 Exercise: Add Structured Logging

**Tier: Basic (1 point)**

Add structured logs to your API from exercise 2-2:

```bash
npm install winston
```

Requirements:
- All endpoints log when they are called (INFO)
- Errors are logged with details (ERROR)
- Logs in JSON format
- Each log includes: timestamp, level, message, relevant data

**Proof of completion:** Log output showing requests being logged in JSON.

### 8.2 Exercise: Create Health Check Endpoint

**Tier: Intermediate (2 points)**

Add two health check endpoints:

```javascript
// GET /health -- Basic check
// Returns: { status: "healthy", uptime: 123.45, timestamp: "..." }

// GET /health/detailed -- Complete check
// Returns: { status: "healthy", checks: { api: "up", memory: "ok" } }
```

Requirements:
- `/health` returns 200 if the server is running
- `/health/detailed` checks memory and returns status
- If memory > 90%, status = "degraded" and returns 503

**Proof of completion:** Both endpoints responding correctly.

### 8.3 BONUS Challenge: Simple Dashboard

**Tier: BONUS (3 points)**

Create a simple HTML page (`/dashboard`) that shows:
- Number of requests since the server started
- Number of errors
- Server uptime
- Last request received

It can be simple -- the goal is to practice collecting and displaying metrics.

---

## 9. Final Boss Battle: The Integrated Challenge

**Tier: MEGA BONUS (5 points)**

Combine EVERYTHING you learned in a single project:

1. **Repository** with branches `main`, `staging`, `develop`
2. **REST API** with task CRUD (5 endpoints)
3. **Security**: `.env` + `.gitignore` + `.env.example`
4. **CI Pipeline**: GitHub Actions running on every push
5. **Kanban Board**: GitHub Project with Issues for the TodoApp
6. **Logs**: Winston with structured JSON logs
7. **Health Check**: `/health` and `/health/detailed` endpoints
8. **IaC**: `main.bicep` file with the infrastructure

```
Final project structure:
todoapp-world2/
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   ├── server.js
│   ├── routes/
│   │   ├── tarefas.js
│   │   └── health.js
│   └── middleware/
│       └── logger.js
├── infra/
│   └── main.bicep
├── test-api.sh
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

**Proof of completion:** Public repository on GitHub with all the items above.

---

## 10. Scoring Table and Self-Assessment

| Quest | Exercise | Tier | Points | Completed? |
|-------|----------|------|--------|------------|
| 2-1 | Environment branches | Basic | 1 | [ ] |
| 2-1 | Variables per environment | Intermediate | 2 | [ ] |
| 2-1 | Ephemeral environment | BONUS | 3 | [ ] |
| 2-2 | Simple REST API | Basic | 1 | [ ] |
| 2-2 | Test with curl | Intermediate | 2 | [ ] |
| 2-2 | Swagger docs | BONUS | 3 | [ ] |
| 2-3 | .env and .gitignore | Basic | 1 | [ ] |
| 2-3 | GitHub Secrets | Intermediate | 2 | [ ] |
| 2-3 | Azure Key Vault | BONUS | 3 | [ ] |
| 2-4 | Investigate DNS | Basic | 1 | [ ] |
| 2-4 | Anatomy of URLs | Intermediate | 2 | [ ] |
| 2-5 | Kanban Board | Basic | 1 | [ ] |
| 2-5 | User Stories | Intermediate | 2 | [ ] |
| 2-5 | Sprint Planning | BONUS | 3 | [ ] |
| 2-6 | Bicep Blueprint | Basic | 1 | [ ] |
| 2-6 | CI Pipeline | Intermediate | 2 | [ ] |
| 2-6 | Terraform | BONUS | 3 | [ ] |
| 2-7 | Structured logging | Basic | 1 | [ ] |
| 2-7 | Health Check | Intermediate | 2 | [ ] |
| 2-7 | Simple dashboard | BONUS | 3 | [ ] |
| FINAL | Integrated Challenge | MEGA BONUS | 5 | [ ] |

**Result:**

| Score | Classification | Mario Analogy |
|-------|---------------|---------------|
| 0-6 | Keep trying | Mario fell into the pit. Try again! |
| 7-9 | Almost there! | Mario reached the boss but did not win. One more life! |
| 10-14 | **Boom Boom defeated!** | Congratulations! World 3 unlocked! |
| 15-20 | Dominant victory | Boom Boom defeated WITHOUT taking damage |
| 21-30 | Speed Run Master | Boom Boom defeated in record time |
| 31-38 | **Legend of the Mushroom Kingdom** | Completed ALL challenges. You are a legend! |

---

## References

1. GitHub Docs -- Creating a repository: https://docs.github.com/repositories/creating-and-managing-repositories
2. Express.js: https://expressjs.com/
3. dotenv: https://github.com/motdotla/dotenv
4. GitHub Actions: https://docs.github.com/actions
5. Azure Bicep: https://learn.microsoft.com/azure/azure-resource-manager/bicep/
6. Winston Logger: https://github.com/winstonjs/winston
7. curl Manual: https://curl.se/docs/manual.html

---

*"Boom Boom has been defeated. The Underground Caves have been conquered. You now understand the invisible infrastructure that supports the entire Mushroom Kingdom -- environments, APIs, security, DNS, methodologies, DevOps, and observability. World 3 -- Sky World -- awaits you!"*

```
+================================================+
|                                                |
|    WORLD 2 COMPLETE!                           |
|                                                |
|    Boom Boom: DEFEATED                         |
|    Underground Caves: CONQUERED                |
|                                                |
|    Next stop:                                  |
|    WORLD 3 -- Sky World                        |
|    (Tools and Languages)                       |
|                                                |
|    "It's-a me, Infrastructure!"                |
|                                                |
+================================================+
```

---

<div align="center">

⬅️ [Previous: Level 2-7: Observability](2-7-observabilidade.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 3-1: Skill Tree](../world-3-sky/3-1-arvore_habilidades.md)

</div>
