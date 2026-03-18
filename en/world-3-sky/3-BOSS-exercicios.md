---
title: "Level 3-BOSS -- Boss Battle: Practical Exercises Level 3"
description: "Practical exercises for World 3 (Sky World): create Dockerfiles, write tests with Jest, configure package.json, master the terminal, choose languages and frameworks -- Boss Battle against Kamek the Magikoopa"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agentic-devops
  - mario
  - world-3
  - exercicios
  - pratica
  - boss-battle
  - docker
  - jest
  - terminal
  - linguagens
---

# Level 3-BOSS -- Boss Battle: Practical Exercises Level 3

---

## Change Log

| Version | Date       | Author                                  | Description          |
|---------|------------|----------------------------------------|----------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Initial creation    |

---

## Table of Contents

- [Prologue: Kamek the Magikoopa Appears](#prologue-kamek-the-magikoopa-appears)
- [1. Boss Battle Rules](#1-boss-battle-rules)
- [2. Quest 3-1: The Docker Fortress (Dockerfile)](#2-quest-3-1-the-docker-fortress-dockerfile)
  - [2.1 Exercise: Create a Basic Dockerfile](#21-exercise-create-a-basic-dockerfile)
  - [2.2 Exercise: Multi-Stage Build](#22-exercise-multi-stage-build)
  - [2.3 BONUS Challenge: Complete Docker Compose](#23-bonus-challenge-complete-docker-compose)
- [3. Quest 3-2: The Training Ground (Tests with Jest)](#3-quest-3-2-the-training-ground-tests-with-jest)
  - [3.1 Exercise: First Unit Tests](#31-exercise-first-unit-tests)
  - [3.2 Exercise: Tests with Mocks](#32-exercise-tests-with-mocks)
  - [3.3 BONUS Challenge: 80% Coverage](#33-bonus-challenge-80-coverage)
- [4. Quest 3-3: The Inventory (package.json)](#4-quest-3-3-the-inventory-packagejson)
  - [4.1 Exercise: Create a Complete package.json](#41-exercise-create-a-complete-packagejson)
  - [4.2 Exercise: Advanced Scripts](#42-exercise-advanced-scripts)
  - [4.3 BONUS Challenge: Security Audit](#43-bonus-challenge-security-audit)
- [5. Quest 3-4: Terminal Magic](#5-quest-3-4-terminal-magic)
  - [5.1 Exercise: Essential Commands](#51-exercise-essential-commands)
  - [5.2 Exercise: Pipes and Chaining](#52-exercise-pipes-and-chaining)
  - [5.3 BONUS Challenge: Automation Script](#53-bonus-challenge-automation-script)
- [6. Quest 3-5: Class Selection (Languages)](#6-quest-3-5-class-selection-languages)
  - [6.1 Exercise: Identify Languages by Scenario](#61-exercise-identify-languages-by-scenario)
  - [6.2 Exercise: Hello World in 3 Languages](#62-exercise-hello-world-in-3-languages)
  - [6.3 BONUS Challenge: Compare Performance](#63-bonus-challenge-compare-performance)
- [7. Quest 3-6: The Armory (Frameworks)](#7-quest-3-6-the-armory-frameworks)
  - [7.1 Exercise: Create an API with Express](#71-exercise-create-an-api-with-express)
  - [7.2 Exercise: Frontend with React](#72-exercise-frontend-with-react)
  - [7.3 BONUS Challenge: Full-Stack with Next.js](#73-bonus-challenge-full-stack-with-nextjs)
- [8. Quest 3-7: Guild Rules (Best Practices)](#8-quest-3-7-guild-rules-best-practices)
  - [8.1 Exercise: Create a Professional Repository](#81-exercise-create-a-professional-repository)
  - [8.2 Exercise: CODEOWNERS and CONTRIBUTING](#82-exercise-codeowners-and-contributing)
  - [8.3 BONUS Challenge: Release with SemVer](#83-bonus-challenge-release-with-semver)
- [9. Quest 3-8: The Internet Pipes](#9-quest-3-8-the-internet-pipes)
  - [9.1 Exercise: Explore with curl](#91-exercise-explore-with-curl)
  - [9.2 Exercise: Status Codes in Practice](#92-exercise-status-codes-in-practice)
  - [9.3 BONUS Challenge: Investigate DNS](#93-bonus-challenge-investigate-dns)
- [10. Final Boss Battle: Kamek's Integrated Challenge](#10-final-boss-battle-kameks-integrated-challenge)
- [11. Scoring Table and Self-Assessment](#11-scoring-table-and-self-assessment)
- [References](#references)

---

## Prologue: Kamek the Magikoopa Appears

Sofia had crossed the entire Sky World. She learned best practices, understood how the internet works, got to know the programming languages, chose her weapons among frameworks and libraries, and organized her package inventory. She knew the theory. Now it was time to prove it.

At the top of the highest tower in the Sky World, the sky darkened. A figure riding a flying broomstick appeared among the clouds: **Kamek the Magikoopa** -- Bowser's personal sorcerer, master of illusions and traps.

*"So you're the Sofia who wants to cross my world?"* Kamek spun his magic wand, creating code symbols in the air. *"Theory is easy. Any Goomba can read a book. But DOING... ah, doing is another story."*

Kamek snapped his fingers and 8 magic portals opened around the tower.

*"Eight challenges. Each portal leads to a practical exercise. Complete them all and you move on to World 4. Fail and... well, you go back to the beginning of World 3."*

Toadette appeared flying on a floating "?" block. *"Calm down, Sofia. You can do the exercises in any order you want. Each quest has levels: Basic (required), Intermediate (recommended), and BONUS (for heroes). I'll accompany you and evaluate. Good luck!"*

---

## 1. Boss Battle Rules

**Requirements:**

- Computer with VS Code installed
- Git configured
- Node.js 18+ installed
- Docker Desktop installed (for Quest 3-1)
- Python 3.11+ installed (for Quest 3-5)
- GitHub account (free)

**Scoring System:**

| Level | Points | Description |
|-------|--------|-------------|
| Basic | 1 point | The minimum to break Kamek's spell |
| Intermediate | 2 points | Shows that you really understood |
| BONUS | 3 points | You impressed even Kamek |

**To defeat Kamek:** Minimum of **12 points** (from 8 basic quests = 8 points + 2 intermediate)

**To defeat Kamek with Super Star:** **32+ points** (all bonuses! Legendary!)

**For each exercise you earn virtual Power-Ups:**

| Score | Power-Up Earned |
|-------|----------------|
| 8-11 points | Mushroom (basic passage) |
| 12-17 points | Fire Flower (passage with honor) |
| 18-25 points | Cape Feather (passage by flying) |
| 26-31 points | Super Star (nearly invincible!) |
| 32+ points | Star Road (access to secret area!) |

---

## 2. Quest 3-1: The Docker Fortress (Dockerfile)

### 2.1 Exercise: Create a Basic Dockerfile

**Level: Basic (1 point)**

Create a simple Node.js project and a Dockerfile to package it:

```bash
# 1. Create project
mkdir boss-quest-docker && cd boss-quest-docker
npm init -y
npm install express
```

```javascript
// index.js
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Mario says: The Docker Fortress stands!',
    versao: '1.0.0',
    mundo: 'World 3 - Boss Battle'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Fortress running on port ${PORT}`);
});
```

**Your mission:** Create a `Dockerfile` that:

1. Uses the `node:20-alpine` image as base
2. Sets the working directory to `/app`
3. Copies `package.json` and `package-lock.json` first (for cache)
4. Runs `npm ci --production`
5. Copies the rest of the code
6. Exposes port 3000
7. Defines the start command: `node index.js`

**Proof of completion:** Run `docker build -t boss-docker .` and `docker run -p 3000:3000 boss-docker`, then visit `http://localhost:3000` and see the JSON message.

### 2.2 Exercise: Multi-Stage Build

**Level: Intermediate (2 points)**

Modify the Dockerfile to use **multi-stage build**:

```dockerfile
# Stage 1: BUILD (install everything, compile)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# If using TypeScript: RUN npm run build

# Stage 2: PRODUCTION (only what's needed)
FROM node:20-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --production && npm cache clean --force
COPY --from=builder /app/index.js ./
EXPOSE 3000
USER node
CMD ["node", "index.js"]
```

**Your mission:**

1. Implement the multi-stage build above
2. Compare the image size before and after (`docker images`)
3. Add `USER node` to avoid running as root
4. Add a `.dockerignore` with: `node_modules`, `.git`, `*.md`, `.env`

**Proof of completion:** Screenshot showing the size difference between images.

### 2.3 BONUS Challenge: Complete Docker Compose

**Level: BONUS (3 points)**

Create a `docker-compose.yml` that brings up:

1. Your Node.js application (port 3000)
2. PostgreSQL (port 5432)
3. A volume to persist database data
4. Environment variables via `.env`

```yaml
# docker-compose.yml (you complete it!)
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:senha@db:5432/todoapp
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    # Complete: ports, environment, volumes...
```

**Proof of completion:** `docker-compose up` brings everything up and `http://localhost:3000/health` returns `"status": "UP"`.

---

## 3. Quest 3-2: The Training Ground (Tests with Jest)

### 3.1 Exercise: First Unit Tests

**Level: Basic (1 point)**

Create task manager functions and test them:

```bash
mkdir boss-quest-jest && cd boss-quest-jest
npm init -y
npm install -D jest
```

```javascript
// tarefas.js
export function criarTarefa(titulo) {
  if (!titulo || titulo.trim() === '') {
    throw new Error('Titulo obrigatorio');
  }
  return {
    id: Date.now(),
    titulo: titulo.trim(),
    feita: false,
    criadaEm: new Date().toISOString()
  };
}

export function completarTarefa(tarefa) {
  if (!tarefa) throw new Error('Tarefa invalida');
  return { ...tarefa, feita: true, completadaEm: new Date().toISOString() };
}

export function filtrarPendentes(tarefas) {
  return tarefas.filter(t => !t.feita);
}

export function contarPorStatus(tarefas) {
  const feitas = tarefas.filter(t => t.feita).length;
  return { feitas, pendentes: tarefas.length - feitas, total: tarefas.length };
}
```

**Your mission:** Create `tarefas.test.js` with at least 8 tests:

1. `criarTarefa` with valid title returns correct object
2. `criarTarefa` without title throws error
3. `criarTarefa` with empty string throws error
4. `criarTarefa` with spaces throws error (trim)
5. `completarTarefa` marks as done
6. `completarTarefa` with null throws error
7. `filtrarPendentes` returns only pending
8. `contarPorStatus` returns correct count

**Proof of completion:** `npm test` with ALL 8 tests passing (green).

### 3.2 Exercise: Tests with Mocks

**Level: Intermediate (2 points)**

Create a function that depends on an external API and test with mocks:

```javascript
// api.js
export async function buscarTarefasDoServidor(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Erro ${response.status}: ${response.statusText}`);
  }
  const data = await response.json();
  return data.map(t => ({
    id: t.id,
    titulo: t.title || t.titulo,
    feita: t.completed || t.feita || false
  }));
}
```

**Your mission:** Test `buscarTarefasDoServidor` without making real HTTP requests:

1. Mock the `fetch` function with `jest.fn()`
2. Test success scenario (status 200, valid data)
3. Test error scenario (status 500)
4. Test malformed data scenario

### 3.3 BONUS Challenge: 80% Coverage

**Level: BONUS (3 points)**

1. Configure Jest to generate coverage reports
2. Add to `package.json`: `"test:coverage": "jest --coverage"`
3. Write enough tests to reach **80% coverage** across all metrics (statements, branches, functions, lines)
4. Add `coverage/` to `.gitignore`

**Proof of completion:** Screenshot of the coverage report showing >= 80% across all metrics.

---

## 4. Quest 3-3: The Inventory (package.json)

### 4.1 Exercise: Create a Complete package.json

**Level: Basic (1 point)**

Create a project from scratch with a professional `package.json`:

```bash
mkdir boss-quest-inventario && cd boss-quest-inventario
npm init -y
```

**Your mission:** The `package.json` must contain:

1. `name`, `version` (1.0.0), `description` filled in
2. `"type": "module"` (ESM)
3. At least 3 `dependencies` (express, zod, dotenv)
4. At least 3 `devDependencies` (jest, eslint, prettier)
5. `engines` with `"node": ">=18.0.0"`
6. `license`: "MIT"
7. `author` with your name

**Proof of completion:** `npm install` runs without errors and `node -e "import('./package.json', { assert: { type: 'json' } })"` works.

### 4.2 Exercise: Advanced Scripts

**Level: Intermediate (2 points)**

Add these scripts to package.json and make them all work:

```json
{
  "scripts": {
    "start": "node src/index.js",
    "dev": "node --watch src/index.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src/",
    "format": "prettier --write src/",
    "validate": "npm run lint && npm test",
    "prepare": "echo 'Hooks configurados!'"
  }
}
```

**Your mission:**

1. Create the file `src/index.js` with a basic Express server
2. Configure ESLint (`.eslintrc.json`) and Prettier (`.prettierrc`)
3. Run `npm run validate` and make it pass without errors

**Proof of completion:** `npm run validate` executes lint AND tests successfully.

### 4.3 BONUS Challenge: Security Audit

**Level: BONUS (3 points)**

1. Run `npm audit` and document the vulnerabilities found (if any)
2. Try to resolve with `npm audit fix`
3. Add a script `"audit": "npm audit --audit-level=moderate"`
4. Configure Dependabot by creating `.github/dependabot.yml`

**Proof of completion:** Screenshot of `npm audit` and the `dependabot.yml` file created.

---

## 5. Quest 3-4: Terminal Magic

### 5.1 Exercise: Essential Commands

**Level: Basic (1 point)**

Execute the following commands and capture the output:

```bash
# 1. Navigation and listing
ls -la                       # List files with details
pwd                          # Show current directory
mkdir -p projeto/src/utils   # Create folder structure

# 2. File manipulation
touch projeto/src/index.js   # Create empty file
cp projeto/src/index.js projeto/src/backup.js  # Copy
mv projeto/src/backup.js projeto/src/main.js   # Move/rename

# 3. Viewing
cat /etc/hosts               # View file contents
head -5 /etc/hosts           # First 5 lines
wc -l /etc/hosts             # Count lines

# 4. Searching
find projeto/ -name "*.js"   # Find .js files
grep -r "function" projeto/  # Search text in files

# 5. System information
whoami                       # Your user
date                         # Current date
df -h                        # Disk space
```

**Your mission:** Execute each command, understand what it does, and note the output from the 5 groups.

**Proof of completion:** File `respostas-terminal.txt` with the output of each command group.

### 5.2 Exercise: Pipes and Chaining

**Level: Intermediate (2 points)**

Pipes (`|`) connect the output of one command to the input of the next:

```bash
# Count how many .js files exist in the project
find . -name "*.js" | wc -l

# List installed packages and filter by "express"
npm ls --all | grep express

# View git history and filter by author
git log --oneline | head -10

# View processes and filter by node
ps aux | grep node

# Sort dependencies from package.json
cat package.json | python3 -c "import sys,json; d=json.load(sys.stdin); print('\n'.join(sorted(d.get('dependencies',{}).keys())))"
```

**Your mission:**

1. Use pipe to count how many `.json` files exist in your project
2. Use pipe to find the heaviest dependency in `node_modules`
3. Create a command that lists all `TODO` comments in the code (`grep -r "TODO" | wc -l`)

### 5.3 BONUS Challenge: Automation Script

**Level: BONUS (3 points)**

Create a bash script `setup.sh` that automates new project setup:

```bash
#!/bin/bash
# setup.sh - Automatic project configurator

PROJECT_NAME=${1:-"meu-projeto"}

echo "Creating project: $PROJECT_NAME"

# 1. Create folder structure
mkdir -p "$PROJECT_NAME"/{src,tests,docs}

# 2. Initialize npm
cd "$PROJECT_NAME"
npm init -y

# 3. Install dependencies
npm install express dotenv zod
npm install -D jest eslint prettier typescript @types/node

# 4. Create essential files
# (Complete: .gitignore, README.md, .eslintrc.json, etc.)

# 5. Initialize git
git init
git add .
git commit -m "feat: initialize project $PROJECT_NAME"

echo "Project $PROJECT_NAME created successfully!"
```

**Your mission:** Complete the script so it creates a ready-to-use project, including:

- `.gitignore` with node_modules, .env, dist, coverage
- Basic `README.md`
- `.eslintrc.json` with minimal configuration
- `src/index.js` with a basic Express server
- `tests/index.test.js` with a basic test

**Proof of completion:** `bash setup.sh meu-app` creates a complete project and `cd meu-app && npm test` works.

---

## 6. Quest 3-5: Class Selection (Languages)

### 6.1 Exercise: Identify Languages by Scenario

**Level: Basic (1 point)**

For each scenario, choose the most suitable language(s) and justify:

| # | Scenario | Your Choice | Justification |
|---|----------|-------------|---------------|
| 1 | Build an interactive web interface | ? | ? |
| 2 | Create an AI model for image recognition | ? | ? |
| 3 | Develop a 3D indie game | ? | ? |
| 4 | Create a CLI for managing servers | ? | ? |
| 5 | Build a corporate banking system | ? | ? |
| 6 | Develop a hardware driver | ? | ? |
| 7 | Create a modern, fast REST API | ? | ? |
| 8 | Analyze sales data in a Jupyter Notebook | ? | ? |
| 9 | Build a cross-platform mobile app | ? | ? |
| 10 | Optimize a server that needs maximum performance | ? | ? |

**Proof of completion:** Table filled with correct choices and convincing justifications.

### 6.2 Exercise: Hello World in 3 Languages

**Level: Intermediate (2 points)**

Write and execute "Hello, Mushroom Kingdom!" in 3 different languages:

**JavaScript:**
```javascript
// hello.js
console.log("Hello, Mushroom Kingdom!");
// Run: node hello.js
```

**Python:**
```python
# hello.py
print("Hello, Mushroom Kingdom!")
# Run: python3 hello.py
```

**Your mission:** Also implement in a third language of your choice (C#, Go, Rust, Java, etc.) and run it successfully.

**Proof of completion:** Screenshot showing all 3 programs running with correct output.

### 6.3 BONUS Challenge: Compare Performance

**Level: BONUS (3 points)**

Create an identical program in JavaScript and Python that:

1. Generates a list of 1 million random numbers
2. Sorts the list
3. Calculates the sum of all numbers
4. Measures execution time

```javascript
// benchmark.js
const inicio = performance.now();

const numeros = Array.from({ length: 1_000_000 }, () => Math.random() * 1000);
numeros.sort((a, b) => a - b);
const soma = numeros.reduce((acc, n) => acc + n, 0);

const fim = performance.now();
console.log(`Soma: ${soma.toFixed(2)}`);
console.log(`Tempo: ${(fim - inicio).toFixed(2)}ms`);
```

```python
# benchmark.py
import time
import random

inicio = time.time()

numeros = [random.random() * 1000 for _ in range(1_000_000)]
numeros.sort()
soma = sum(numeros)

fim = time.time()
print(f"Soma: {soma:.2f}")
print(f"Tempo: {(fim - inicio) * 1000:.2f}ms")
```

**Proof of completion:** Table comparing execution times and your analysis of the differences.

---

## 7. Quest 3-6: The Armory (Frameworks)

### 7.1 Exercise: Create an API with Express

**Level: Basic (1 point)**

Create a complete task REST API with Express:

```bash
mkdir boss-quest-api && cd boss-quest-api
npm init -y
npm install express
```

**Your mission:** The API must have 5 endpoints:

| Method | Route | What it does |
|--------|-------|-------------|
| GET | `/api/tarefas` | List all tasks |
| GET | `/api/tarefas/:id` | Find task by ID |
| POST | `/api/tarefas` | Create new task |
| PUT | `/api/tarefas/:id` | Update task |
| DELETE | `/api/tarefas/:id` | Delete task |

Requirements:
- Data can stay in memory (array)
- POST must return status 201
- GET by non-existent ID must return 404
- DELETE must return status 204

**Proof of completion:** Test all 5 endpoints with `curl` and show the responses.

### 7.2 Exercise: Frontend with React

**Level: Intermediate (2 points)**

Create a React frontend that consumes your API:

```bash
npx create-react-app boss-quest-frontend
# or
npm create vite@latest boss-quest-frontend -- --template react
```

**Your mission:**

1. `ListaTarefas` component that shows all tasks
2. `FormTarefa` component with input and button to create
3. "Complete" button on each task
4. "Delete" button on each task
5. Communication with the API via `fetch`

**Proof of completion:** Screenshot of the frontend working with data from the API.

### 7.3 BONUS Challenge: Full-Stack with Next.js

**Level: BONUS (3 points)**

Create the same application using Next.js (API routes + frontend in the same project):

```bash
npx create-next-app@latest boss-quest-fullstack
```

**Your mission:**

1. API route in `app/api/tarefas/route.ts` with GET and POST
2. Page in `app/page.tsx` with task list
3. Server Components for initial data
4. Client Components for interactivity

**Proof of completion:** Application running with `npm run dev`, showing the list and allowing task creation.

---

## 8. Quest 3-7: Guild Rules (Best Practices)

### 8.1 Exercise: Create a Professional Repository

**Level: Basic (1 point)**

Create a GitHub repository with ALL essential files:

**Your mission:** The repository must contain:

1. `README.md` with: title, description, installation, usage, technologies, license
2. `.gitignore` suitable for Node.js
3. `LICENSE` (MIT)
4. `package.json` with version `1.0.0`

**Proof of completion:** Link to the GitHub repository with all files visible.

### 8.2 Exercise: CODEOWNERS and CONTRIBUTING

**Level: Intermediate (2 points)**

Add to the repository:

1. `.github/CODEOWNERS` with rules for different folders
2. `CONTRIBUTING.md` with a complete guide for contributors
3. `CODE_OF_CONDUCT.md` based on the Contributor Covenant
4. Issue templates in `.github/ISSUE_TEMPLATE/`

**Proof of completion:** PR opened in the repository showing all created files.

### 8.3 BONUS Challenge: Release with SemVer

**Level: BONUS (3 points)**

1. Create 3 meaningful commits (feat, fix, docs)
2. Create a tag `v1.0.0` and make a GitHub Release
3. Make a fix and create the tag `v1.0.1`
4. Add a feature and create the tag `v1.1.0`
5. Write `CHANGELOG.md` documenting the 3 versions

```bash
# Create tags and releases
git tag -a v1.0.0 -m "First release"
git push origin v1.0.0

# On GitHub: Releases > Create Release > Choose tag > Write notes
```

**Proof of completion:** 3 releases on GitHub with updated CHANGELOG.

---

## 9. Quest 3-8: The Internet Pipes

### 9.1 Exercise: Explore with curl

**Level: Basic (1 point)**

Use `curl` to explore public APIs:

```bash
# 1. Fetch data from a GitHub user
curl https://api.github.com/users/octocat

# 2. View response headers
curl -I https://www.google.com

# 3. POST to create resource (httpbin echo)
curl -X POST https://httpbin.org/post \
  -H "Content-Type: application/json" \
  -d '{"nome": "Mario", "missao": "Salvar a Princesa"}'

# 4. View status code
curl -o /dev/null -s -w "%{http_code}" https://www.google.com

# 5. Test non-existent endpoint
curl -s -w "\nStatus: %{http_code}\n" https://api.github.com/nao-existe
```

**Your mission:** Execute each command, note the result and explain:

1. What is the Content-Type of GitHub's response?
2. What headers does Google return?
3. Did httpbin return the data you sent?
4. What is the status code of each request?

### 9.2 Exercise: Status Codes in Practice

**Level: Intermediate (2 points)**

Create an Express server that returns different status codes:

```javascript
// status-server.js
import express from 'express';
const app = express();

app.get('/200', (req, res) => res.status(200).json({ msg: "OK!" }));
app.get('/201', (req, res) => res.status(201).json({ msg: "Created!" }));
app.get('/204', (req, res) => res.status(204).send());
app.get('/301', (req, res) => res.redirect(301, '/200'));
app.get('/400', (req, res) => res.status(400).json({ erro: "Bad Request" }));
app.get('/401', (req, res) => res.status(401).json({ erro: "Unauthorized" }));
app.get('/403', (req, res) => res.status(403).json({ erro: "Forbidden" }));
app.get('/404', (req, res) => res.status(404).json({ erro: "Not found" }));
app.get('/500', (req, res) => res.status(500).json({ erro: "Internal error" }));

app.listen(3000);
```

**Your mission:**

1. Run the server
2. Test each endpoint with `curl -v`
3. For each status code, write: number, name, meaning, Mario analogy

### 9.3 BONUS Challenge: Investigate DNS

**Level: BONUS (3 points)**

1. Use `nslookup` to discover the IP of 5 different sites (google.com, github.com, microsoft.com, amazon.com, cloudflare.com)
2. Use `dig` (Mac/Linux) to see the full resolution
3. Edit `/etc/hosts` to create a local domain that points to 127.0.0.1
4. Create an Express server that responds on that local domain
5. Document the entire process

**Proof of completion:** Document with IPs, dig output, and screenshot of the local domain working.

---

## 10. Final Boss Battle: Kamek's Integrated Challenge

**Level: ALL LEVELS (5 bonus points!)**

Kamek casts his most powerful spell: the **Integrated Challenge**. You need to create a project that combines EVERYTHING from World 3:

**Mission: Create the Mushroom Kingdom TodoApp**

1. **Best Practices (3-7):** README, .gitignore, LICENSE, CONTRIBUTING, CODEOWNERS
2. **Internet (3-8):** REST API with correct status codes
3. **Languages (3-9):** TypeScript on the backend
4. **Frameworks (3-10):** Express + React (or Next.js)
5. **Packages (3-11):** Complete package.json with scripts
6. **Docker (previous):** Functional Dockerfile
7. **Tests (previous):** At least 5 tests passing

**Deliverable:**

```
boss-battle-final/
├── README.md                 # Complete documentation
├── .gitignore                # Node + Docker + .env
├── LICENSE                   # MIT
├── CONTRIBUTING.md           # Guide for contributors
├── .github/
│   └── CODEOWNERS            # Ownership defined
├── package.json              # Complete with scripts
├── Dockerfile                # Multi-stage build
├── docker-compose.yml        # App + PostgreSQL
├── src/
│   ├── index.ts              # Express TypeScript server
│   └── routes/
│       └── tarefas.ts        # Complete CRUD
├── tests/
│   └── tarefas.test.ts       # 5+ tests
└── CHANGELOG.md              # Version 1.0.0
```

**Evaluation criteria:**

| Criterion | Points |
|-----------|--------|
| Organized folder structure | 1 |
| Complete and professional README | 1 |
| Working API with 5 endpoints | 1 |
| Passing tests (5+ tests) | 1 |
| Functional Dockerfile | 1 |
| **Total** | **5** |

> **NOTE:** This challenge is BONUS and is worth 5 extra points! If you complete the integrated challenge, Kamek will be defeated spectacularly.

---

## 11. Scoring Table and Self-Assessment

### Calculating Your Score

| Quest | Basic (1pt) | Intermediate (2pt) | BONUS (3pt) | Your Points |
|-------|------------|-------------------:|------------:|------------:|
| 3-1: Docker | Basic Dockerfile | Multi-stage | Docker Compose | ____ |
| 3-2: Jest | 8 unit tests | Tests with mocks | 80% coverage | ____ |
| 3-3: package.json | Complete package.json | Advanced scripts | Audit | ____ |
| 3-4: Terminal | Essential commands | Pipes | Automation script | ____ |
| 3-5: Languages | Identify by scenario | Hello World x3 | Performance | ____ |
| 3-6: Frameworks | Express API | React frontend | Next.js full-stack | ____ |
| 3-7: Best Practices | Professional repo | CODEOWNERS etc. | SemVer releases | ____ |
| 3-8: Internet | curl exploration | Status codes server | DNS investigation | ____ |
| **Boss Final** | -- | -- | Integrated Challenge (5pt) | ____ |
| **TOTAL** | | | | **____ / 53** |

### Results

| Score | Result | Power-Up | Kamek's Quote |
|-------|--------|----------|---------------|
| 0-7 | Kamek won | None | *"Go back to the start, rookie!"* |
| 8-11 | Close victory | Mushroom | *"Hmm... beginner's luck."* |
| 12-17 | Solid victory | Fire Flower | *"Not bad for an apprentice..."* |
| 18-25 | Impressive victory | Cape Feather | *"You... you're stronger than I thought!"* |
| 26-31 | Dominant victory | Super Star | *"Impossible! How can a rookie...?!"* |
| 32-40 | Legendary victory | Star Road | *"Bowser needs to know about you..."* |
| 41-53 | ABSOLUTE victory | Star Road + 1-UP | *"I... I surrender. You are the true heroine."* |

### Final Reflection

After completing the exercises, answer:

1. **Which quest was the easiest?** Why?
2. **Which quest was the hardest?** What was missing?
3. **Which concept did you enjoy the most?** Want to go deeper?
4. **What would you do differently?** If you started over?
5. **Next step:** Which skill do you want to develop first?

---

## References

- [Docker -- Official Documentation](https://docs.docker.com/)
- [Docker -- Best Practices for Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Jest -- Official Documentation](https://jestjs.io/)
- [npm -- package.json Documentation](https://docs.npmjs.com/cli/configuring-npm/package-json)
- [Express.js -- Getting Started Guide](https://expressjs.com/pt-br/starter/hello-world.html)
- [React -- Official Tutorial](https://react.dev/learn)
- [Next.js -- Tutorial](https://nextjs.org/learn)
- [curl -- Tutorial](https://curl.se/docs/tutorial.html)
- [GitHub -- Creating Repositories](https://docs.github.com/pt/repositories/creating-and-managing-repositories)
- [GitHub -- Releases](https://docs.github.com/pt/repositories/releasing-projects-on-github)
- [Contributor Covenant](https://www.contributor-covenant.org/)
- [Conventional Commits](https://www.conventionalcommits.org/pt-br/)

---

*End of the World 3 Boss Battle! If Sofia defeated Kamek, the doors to World 4 open -- the world of Orchestration and Agents. The journey continues!*

---

<div align="center">

⬅️ [Previous: Level 3-11: Packages](3-11-pacotes.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 4-1: Auth](../world-4-water/4-1-auth.md)

</div>
