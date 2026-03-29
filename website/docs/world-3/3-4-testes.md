---
title: "Level 3-4 -- Training Before the Battle: Software Testing"
description: "Software testing demystified with a Mario analogy -- unit tests as training dummies, integration as enemy combos, E2E as full battle simulation, and TDD as planning the fight before fighting"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-3", "testing", "jest", "tdd", "qa", "test-pyramid"]
---

# Level 3-4 -- Training Before the Battle: Software Testing

<div class="docs-hero">
  <img src="/super-agentic-devops-world/img/docs/3-4-testes.png" alt="Level 3-4 -- Training Before the Battle: Software Testing" />
</div>


---

## Change Log

| Version | Date       | Author                                     | Description                   |
|---------|------------|--------------------------------------------|-------------------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation (Mario Edition)|

---

## Table of Contents

- [Prologue: The Training Dojo](#prologue-the-training-dojo)
- [1. Why Test?](#1-why-test)
  - [1.1 The Cost of Not Testing](#11-the-cost-of-not-testing)
  - [1.2 Confidence to Change](#12-confidence-to-change)
  - [1.3 Living Documentation](#13-living-documentation)
- [2. The Test Pyramid: Many Small, Few Large](#2-the-test-pyramid-many-small-few-large)
  - [2.1 Base: Unit Tests (Many)](#21-base-unit-tests-many)
  - [2.2 Middle: Integration Tests (Some)](#22-middle-integration-tests-some)
  - [2.3 Top: End-to-End Tests (Few)](#23-top-end-to-end-tests-few)
  - [2.4 Pyramid Diagram](#24-pyramid-diagram)
- [3. Unit Tests: Hitting One Dummy at a Time](#3-unit-tests-hitting-one-dummy-at-a-time)
  - [3.1 What Is a Unit Test?](#31-what-is-a-unit-test)
  - [3.2 Anatomy of a Test: Arrange-Act-Assert](#32-anatomy-of-a-test-arrange-act-assert)
  - [3.3 Jest: The Training Arena](#33-jest-the-training-arena)
  - [3.4 First Test with Jest](#34-first-test-with-jest)
  - [3.5 Matchers: The Verifications](#35-matchers-the-verifications)
  - [3.6 Testing Real TodoApp Functions](#36-testing-real-todoapp-functions)
- [4. Integration Tests: Two Dummies at the Same Time](#4-integration-tests-two-dummies-at-the-same-time)
  - [4.1 What Is an Integration Test?](#41-what-is-an-integration-test)
  - [4.2 Testing API + Database](#42-testing-api--database)
  - [4.3 Supertest: Testing HTTP APIs](#43-supertest-testing-http-apis)
  - [4.4 Test Database](#44-test-database)
- [5. End-to-End Tests: Full Battle Simulation](#5-end-to-end-tests-full-battle-simulation)
  - [5.1 What Is an E2E Test?](#51-what-is-an-e2e-test)
  - [5.2 Cypress and Playwright: The Simulators](#52-cypress-and-playwright-the-simulators)
  - [5.3 E2E Test Example](#53-e2e-test-example)
- [6. TDD: Plan the Fight Before Fighting](#6-tdd-plan-the-fight-before-fighting)
  - [6.1 What Is TDD?](#61-what-is-tdd)
  - [6.2 The Red-Green-Refactor Cycle](#62-the-red-green-refactor-cycle)
  - [6.3 TDD in Practice: Creating a Filter Function](#63-tdd-in-practice-creating-a-filter-function)
  - [6.4 When to Use TDD and When Not To](#64-when-to-use-tdd-and-when-not-to)
- [7. Mocks, Stubs, and Spies: Substitute Dummies](#7-mocks-stubs-and-spies-substitute-dummies)
  - [7.1 Mock: The Stunt Double](#71-mock-the-stunt-double)
  - [7.2 Stub: The Programmed Response](#72-stub-the-programmed-response)
  - [7.3 Spy: The Secret Agent](#73-spy-the-secret-agent)
  - [7.4 When to Use Each One](#74-when-to-use-each-one)
- [8. Coverage: Percentage of Dummies Tested](#8-coverage-percentage-of-dummies-tested)
  - [8.1 What Is Coverage?](#81-what-is-coverage)
  - [8.2 Generating a Coverage Report with Jest](#82-generating-a-coverage-report-with-jest)
  - [8.3 What Percentage to Aim For?](#83-what-percentage-to-aim-for)
  - [8.4 Coverage Is Not Everything](#84-coverage-is-not-everything)
- [9. React Component Tests](#9-react-component-tests)
  - [9.1 Testing Library: Testing Like the User](#91-testing-library-testing-like-the-user)
  - [9.2 Testing Rendering](#92-testing-rendering)
  - [9.3 Testing Interactions](#93-testing-interactions)
  - [9.4 Testing States and Effects](#94-testing-states-and-effects)
- [10. Tests in CI/CD: Automating the Dojo](#10-tests-in-cicd-automating-the-dojo)
  - [10.1 Tests in GitHub Actions](#101-tests-in-github-actions)
  - [10.2 Blocking PRs Without Tests](#102-blocking-prs-without-tests)
- [11. QA: Princess Peach in Action](#11-qa-princess-peach-in-action)
  - [11.1 The Role of QA](#111-the-role-of-qa)
  - [11.2 Manual QA vs Automated QA](#112-manual-qa-vs-automated-qa)
- [Summary -- What We Learned in Level 3-4](#summary----what-we-learned-in-level-3-4)
- [References](#references)

---

## Prologue: The Training Dojo

Sofia was about to deploy the TodoApp. Everything seemed to work. She clicked "Add Task" -- it worked. Clicked "Mark as Complete" -- it worked. Clicked "Delete" -- it worked.

*"Done! It works perfectly!"* said Sofia, her finger already on the deploy button.

Peach -- the QA Engineer -- appeared flying in with her parasol and landed gently.

*"Wait, Sofia. Did you test with an empty task? With a 10,000-character text? With special characters? With two users at the same time? With slow internet? With the database down?"*

Sofia went silent.

*"You ran 3 manual tests and thought you were ready,"* said Peach gently. *"But a TodoApp has hundreds of possible scenarios. Testing each one manually would take days. And every time you change a single line of code, you'd have to test EVERYTHING again."*

*"So how do I test all of that?"*

Peach smiled and opened the door to a dojo. Inside, there were hundreds of training dummies, each representing a different scenario.

*"You don't test manually. You write **code that tests the code**. Each training dummy is an automated test. Once written, it tests for you FOREVER. Every time you change something, the dummies test everything in seconds."*

*"Welcome to Level 3-4. Here you'll learn to train before every battle."*

---

## 1. Why Test?

### 1.1 The Cost of Not Testing

| When the Bug Is Found | Cost to Fix | Mario Analogy |
|----------------------|-------------|---------------|
| During development | 1x (cheap) | Dying in training -- no consequences |
| In code review | 5x | Dying in rehearsal -- the team notices |
| In staging/QA | 10x | Dying in the level before the boss -- delays everything |
| In production | 100x | Dying in the final Boss Battle -- public Game Over |
| Discovered by the user | 1000x | Game Over + players uninstall the game |

**Real industry data:**
- Companies spend **30-50% of development time** fixing bugs
- Bugs found in production cost **6-100x more** than bugs found in testing
- Well-tested software has **40-90% fewer bugs** in production

### 1.2 Confidence to Change

The most underestimated benefit of tests is the **confidence to change code**.

Without tests: *"I'll change this function... but what if it breaks something? Better not touch it."*

With tests: *"I'll change this function. If I break something, the tests will tell me in 30 seconds."*

> **MARIO ANALOGY:** Tests are like having a **training ground** before each boss battle. You can experiment with strategies, try different attacks, see what works -- all without losing real lives. When you enter the real battle, you already know exactly what to do.

### 1.3 Living Documentation

Well-written tests function as **documentation** for your code. Someone new to the project can read the tests and understand:

- What each function does
- Which inputs are accepted
- Which outputs are expected
- Which edge cases were considered

```javascript
// This test is also documentation:
describe('calculateDiscount', () => {
  it('should apply 10% discount for purchases above $100', () => {
    expect(calcularDesconto(150)).toBe(135);
  });

  it('should not apply discount for purchases below $100', () => {
    expect(calcularDesconto(50)).toBe(50);
  });

  it('should return 0 for negative values', () => {
    expect(calcularDesconto(-10)).toBe(0);
  });
});
// By reading these tests, you know EXACTLY how calcularDesconto works!
```

---

## 2. The Test Pyramid: Many Small, Few Large

### 2.1 Base: Unit Tests (Many)

- **What they test:** A function, a method, an isolated unit
- **Quantity:** Hundreds to thousands
- **Speed:** Milliseconds each
- **Maintenance cost:** Low

### 2.2 Middle: Integration Tests (Some)

- **What they test:** Two or more parts working together
- **Quantity:** Tens to hundreds
- **Speed:** Seconds each
- **Maintenance cost:** Medium

### 2.3 Top: End-to-End Tests (Few)

- **What they test:** The entire system, from start to finish
- **Quantity:** Tens
- **Speed:** Minutes each
- **Maintenance cost:** High

### 2.4 Pyramid Diagram

```
        /\
       /  \          E2E (few, slow, expensive)
      / E2E\         = Full battle simulation
     /______\
    /        \       Integration (some, medium)
   /Integration\     = Two dummies at the same time
  /____________\
 /              \    Unit (many, fast, cheap)
/  Unit Tests    \   = One dummy at a time
/==================\
```

> **MARIO ANALOGY:** The test pyramid is like training before facing Bowser:
>
> **Base (Unit):** Practice EACH move individually. Jump? Perfect. Fireball? Perfect. Sprint? Perfect. Hundreds of repetitions of each isolated move.
>
> **Middle (Integration):** Combine moves. Jump + fireball in sequence. Sprint + long jump over a gap. Tens of combinations.
>
> **Top (E2E):** Simulate the entire battle against Bowser. From beginning to end, as if it were real. Only a few times, because it takes long and is exhausting.
>
> If you only train isolated moves (unit), you may fail at the combination. If you only train the full battle (E2E), you won't improve individual moves. The secret is the **pyramid**: lots of base, some middle, little top.

---

## 3. Unit Tests: Hitting One Dummy at a Time

### 3.1 What Is a Unit Test?

A unit test verifies ONE thing. One function. One method. One unit of behavior. If the function receives X, it must return Y. Period.

```javascript
// Function to test
function somar(a, b) {
  return a + b;
}

// Unit test
test('somar 2 + 3 should return 5', () => {
  expect(somar(2, 3)).toBe(5);
});
```

> **MARIO ANALOGY:** Unit test = hitting **one training dummy** at a time. You're not fighting the boss. You're practicing a specific move on a specific target. "Does the jump hit the Goomba?" Yes? Next dummy.

### 3.2 Anatomy of a Test: Arrange-Act-Assert

Every test follows the **AAA** (Arrange-Act-Assert) pattern:

```javascript
test('should mark task as completed', () => {
  // ARRANGE (Set up) -- Set up the scenario
  const tarefa = { id: 1, titulo: 'Estudar', concluida: false };

  // ACT (Execute) -- Perform the action
  const resultado = concluirTarefa(tarefa);

  // ASSERT (Verify) -- Check the result
  expect(resultado.concluida).toBe(true);
});
```

> **MARIO ANALOGY:**
> - **Arrange** = Position the dummy (training dummy) in the right spot
> - **Act** = Deliver the blow
> - **Assert** = Verify whether the dummy fell / whether the attack landed

### 3.3 Jest: The Training Arena

**Jest** is the most popular testing framework for JavaScript/TypeScript. It's fast, simple, and comes with everything built in (runner, matchers, mocks, coverage).

**Installation:**

```bash
$ npm install -D jest @types/jest ts-jest
```

**Basic configuration (`jest.config.js`):**

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts', '**/*.spec.ts'],
  collectCoverageFrom: ['src/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
```

**Scripts in `package.json`:**

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### 3.4 First Test with Jest

**Code file (`src/utils/tarefa.ts`):**

```typescript
export interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
  criadaEm: Date;
}

export function criarTarefa(titulo: string): Tarefa {
  if (!titulo || titulo.trim() === '') {
    throw new Error('Titulo nao pode ser vazio');
  }

  return {
    id: Date.now(),
    titulo: titulo.trim(),
    concluida: false,
    criadaEm: new Date(),
  };
}

export function concluirTarefa(tarefa: Tarefa): Tarefa {
  return { ...tarefa, concluida: true };
}

export function filtrarConcluidas(tarefas: Tarefa[]): Tarefa[] {
  return tarefas.filter(t => t.concluida);
}

export function filtrarPendentes(tarefas: Tarefa[]): Tarefa[] {
  return tarefas.filter(t => !t.concluida);
}
```

**Test file (`src/utils/tarefa.test.ts`):**

```typescript
import {
  criarTarefa,
  concluirTarefa,
  filtrarConcluidas,
  filtrarPendentes,
  Tarefa,
} from './tarefa';

describe('criarTarefa', () => {
  it('should create a task with the correct title', () => {
    const tarefa = criarTarefa('Estudar TypeScript');
    expect(tarefa.titulo).toBe('Estudar TypeScript');
  });

  it('should create the task as not completed', () => {
    const tarefa = criarTarefa('Fazer deploy');
    expect(tarefa.concluida).toBe(false);
  });

  it('should trim extra spaces from the title', () => {
    const tarefa = criarTarefa('  Limpar codigo  ');
    expect(tarefa.titulo).toBe('Limpar codigo');
  });

  it('should throw an error with an empty title', () => {
    expect(() => criarTarefa('')).toThrow('Titulo nao pode ser vazio');
  });

  it('should throw an error with a title of only spaces', () => {
    expect(() => criarTarefa('   ')).toThrow('Titulo nao pode ser vazio');
  });

  it('should generate a unique ID', () => {
    const t1 = criarTarefa('Tarefa 1');
    const t2 = criarTarefa('Tarefa 2');
    expect(t1.id).not.toBe(t2.id);
  });
});

describe('concluirTarefa', () => {
  it('should mark the task as completed', () => {
    const tarefa = criarTarefa('Testar app');
    const concluida = concluirTarefa(tarefa);
    expect(concluida.concluida).toBe(true);
  });

  it('should not modify the original task (immutability)', () => {
    const tarefa = criarTarefa('Imutavel');
    concluirTarefa(tarefa);
    expect(tarefa.concluida).toBe(false); // original unchanged
  });
});

describe('filtrarConcluidas', () => {
  const tarefas: Tarefa[] = [
    { id: 1, titulo: 'A', concluida: true, criadaEm: new Date() },
    { id: 2, titulo: 'B', concluida: false, criadaEm: new Date() },
    { id: 3, titulo: 'C', concluida: true, criadaEm: new Date() },
  ];

  it('should return only completed tasks', () => {
    const resultado = filtrarConcluidas(tarefas);
    expect(resultado).toHaveLength(2);
    expect(resultado.every(t => t.concluida)).toBe(true);
  });

  it('should return an empty array if none are completed', () => {
    const pendentes = [
      { id: 1, titulo: 'A', concluida: false, criadaEm: new Date() },
    ];
    expect(filtrarConcluidas(pendentes)).toHaveLength(0);
  });
});

describe('filtrarPendentes', () => {
  it('should return only pending tasks', () => {
    const tarefas: Tarefa[] = [
      { id: 1, titulo: 'A', concluida: true, criadaEm: new Date() },
      { id: 2, titulo: 'B', concluida: false, criadaEm: new Date() },
    ];
    const resultado = filtrarPendentes(tarefas);
    expect(resultado).toHaveLength(1);
    expect(resultado[0].titulo).toBe('B');
  });
});
```

**Running the tests:**

```bash
$ npm test

 PASS  src/utils/tarefa.test.ts
  criarTarefa
    ✓ should create a task with the correct title (2 ms)
    ✓ should create the task as not completed (1 ms)
    ✓ should trim extra spaces from the title
    ✓ should throw an error with an empty title (3 ms)
    ✓ should throw an error with a title of only spaces (1 ms)
    ✓ should generate a unique ID (1 ms)
  concluirTarefa
    ✓ should mark the task as completed
    ✓ should not modify the original task (immutability)
  filtrarConcluidas
    ✓ should return only completed tasks
    ✓ should return an empty array if none are completed
  filtrarPendentes
    ✓ should return only pending tasks

Tests: 11 passed, 11 total
Time:  1.2 s
```

### 3.5 Matchers: The Verifications

Jest offers dozens of **matchers** (verifications):

| Matcher | What it verifies | Example |
|---------|-----------------|---------|
| `toBe(x)` | Exact equality | `expect(2+2).toBe(4)` |
| `toEqual(x)` | Deep equality (objects) | `expect(obj).toEqual({a:1})` |
| `toBeTruthy()` | Truthy value | `expect('text').toBeTruthy()` |
| `toBeFalsy()` | Falsy value | `expect(0).toBeFalsy()` |
| `toBeNull()` | Null value | `expect(null).toBeNull()` |
| `toBeUndefined()` | Undefined value | `expect(undefined).toBeUndefined()` |
| `toContain(x)` | Array contains item | `expect([1,2,3]).toContain(2)` |
| `toHaveLength(n)` | Array has N items | `expect([1,2]).toHaveLength(2)` |
| `toThrow()` | Function throws error | `expect(fn).toThrow()` |
| `toMatch(regex)` | String matches regex | `expect('abc').toMatch(/b/)` |
| `toBeGreaterThan(n)` | Greater than | `expect(10).toBeGreaterThan(5)` |
| `toHaveBeenCalled()` | Mock was called | `expect(mockFn).toHaveBeenCalled()` |

### 3.6 Testing Real TodoApp Functions

```typescript
describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(); // Reset before each test
  });

  describe('add', () => {
    it('should add a task to the list', () => {
      service.adicionar('Nova tarefa');
      expect(service.listar()).toHaveLength(1);
    });

    it('should reject a duplicate task', () => {
      service.adicionar('Estudar');
      expect(() => service.adicionar('Estudar')).toThrow('Tarefa ja existe');
    });

    it('should accept a task with up to 200 characters', () => {
      const titulo = 'a'.repeat(200);
      expect(() => service.adicionar(titulo)).not.toThrow();
    });

    it('should reject a task with more than 200 characters', () => {
      const titulo = 'a'.repeat(201);
      expect(() => service.adicionar(titulo)).toThrow('Titulo muito longo');
    });
  });

  describe('remove', () => {
    it('should remove an existing task', () => {
      service.adicionar('Para remover');
      service.remover(1);
      expect(service.listar()).toHaveLength(0);
    });

    it('should throw an error when removing a non-existent task', () => {
      expect(() => service.remover(999)).toThrow('Tarefa nao encontrada');
    });
  });
});
```

---

## 4. Integration Tests: Two Dummies at the Same Time

### 4.1 What Is an Integration Test?

Integration tests verify whether **two or more parts** work correctly together. A function may work perfectly in isolation but fail when communicating with the database.

> **MARIO ANALOGY:** Training the jump works perfectly in the air (unit). But what about jumping ONTO a moving platform? What about a jump followed by a fireball? Integration tests the combination: two game pieces interacting.

### 4.2 Testing API + Database

```typescript
import { app } from '../src/app';
import { prisma } from '../src/database';
import request from 'supertest';

describe('Tasks API (integration)', () => {
  // Clean database before each test
  beforeEach(async () => {
    await prisma.tarefa.deleteMany();
  });

  // Close connection after all tests
  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('POST /api/tarefas', () => {
    it('should create a task and save it to the database', async () => {
      const response = await request(app)
        .post('/api/tarefas')
        .send({ titulo: 'Tarefa de teste' })
        .expect(201);

      expect(response.body.titulo).toBe('Tarefa de teste');
      expect(response.body.id).toBeDefined();

      // Verify it was actually saved to the database
      const tarefaNoBanco = await prisma.tarefa.findUnique({
        where: { id: response.body.id },
      });
      expect(tarefaNoBanco).not.toBeNull();
      expect(tarefaNoBanco?.titulo).toBe('Tarefa de teste');
    });

    it('should return 400 with an empty title', async () => {
      const response = await request(app)
        .post('/api/tarefas')
        .send({ titulo: '' })
        .expect(400);

      expect(response.body.error).toBe('Titulo nao pode ser vazio');
    });
  });

  describe('GET /api/tarefas', () => {
    it('should list all tasks', async () => {
      // Arrange: create 3 tasks directly in the database
      await prisma.tarefa.createMany({
        data: [
          { titulo: 'Tarefa 1' },
          { titulo: 'Tarefa 2' },
          { titulo: 'Tarefa 3' },
        ],
      });

      // Act + Assert
      const response = await request(app)
        .get('/api/tarefas')
        .expect(200);

      expect(response.body).toHaveLength(3);
    });
  });

  describe('PATCH /api/tarefas/:id/concluir', () => {
    it('should mark a task as completed', async () => {
      const tarefa = await prisma.tarefa.create({
        data: { titulo: 'Para concluir' },
      });

      const response = await request(app)
        .patch(`/api/tarefas/${tarefa.id}/concluir`)
        .expect(200);

      expect(response.body.concluida).toBe(true);
    });
  });
});
```

### 4.3 Supertest: Testing HTTP APIs

**Supertest** lets you test HTTP endpoints without needing to start the server:

```bash
$ npm install -D supertest @types/supertest
```

It sends real HTTP requests to your Express/Fastify app and verifies the responses.

### 4.4 Test Database

**Golden rule:** NEVER use the production database for tests. Use a separate database.

```bash
# .env.test
DATABASE_URL="postgresql://user:pass@localhost:5432/todoapp_test"
```

```json
// package.json
{
  "scripts": {
    "test:integration": "DATABASE_URL=postgresql://... jest --config jest.integration.config.js"
  }
}
```

---

## 5. End-to-End Tests: Full Battle Simulation

### 5.1 What Is an E2E Test?

E2E (End-to-End) tests simulate **a real user** using your application. They open a browser, click buttons, fill out forms, and verify that everything works.

> **MARIO ANALOGY:** E2E is the **full battle simulation**. It's not training a single move (unit). It's not combining two moves (integration). It's playing the ENTIRE level, from start to finish, as if it were real. Enter the castle, get past the enemies, grab the power-up, dodge the lava, and defeat the boss.

### 5.2 Cypress and Playwright: The Simulators

| Tool | Advantage | Disadvantage |
|------|-----------|--------------|
| **Cypress** | Easy to learn, visual debugging | Chrome only (by default) |
| **Playwright** | Multi-browser, fast, Microsoft | Slightly steeper learning curve |

### 5.3 E2E Test Example

**With Playwright:**

```typescript
import { test, expect } from '@playwright/test';

test.describe('TodoApp - Full flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should add, complete, and remove a task', async ({ page }) => {
    // 1. Add task
    await page.fill('[data-testid="input-nova-tarefa"]', 'Comprar leite');
    await page.click('[data-testid="btn-adicionar"]');

    // Verify it appeared in the list
    await expect(page.locator('[data-testid="lista-tarefas"]'))
      .toContainText('Comprar leite');

    // 2. Mark as completed
    await page.click('[data-testid="checkbox-tarefa-1"]');

    // Verify it is crossed out
    await expect(page.locator('[data-testid="tarefa-1"]'))
      .toHaveClass(/concluida/);

    // 3. Remove task
    await page.click('[data-testid="btn-remover-1"]');

    // Verify it disappeared
    await expect(page.locator('[data-testid="lista-tarefas"]'))
      .not.toContainText('Comprar leite');
  });

  test('should show a message when the list is empty', async ({ page }) => {
    await expect(page.locator('[data-testid="mensagem-vazia"]'))
      .toContainText('Nenhuma tarefa cadastrada');
  });

  test('should persist tasks after reloading the page', async ({ page }) => {
    // Add task
    await page.fill('[data-testid="input-nova-tarefa"]', 'Persistente');
    await page.click('[data-testid="btn-adicionar"]');

    // Reload page
    await page.reload();

    // Task should still be there
    await expect(page.locator('[data-testid="lista-tarefas"]'))
      .toContainText('Persistente');
  });
});
```

---

## 6. TDD: Plan the Fight Before Fighting

### 6.1 What Is TDD?

**TDD** (Test-Driven Development) is a technique where you write the **test BEFORE the code**. Sounds strange? It's like planning your battle strategy before entering the arena.

### 6.2 The Red-Green-Refactor Cycle

```
1. RED    → Write a test that FAILS (the code doesn't exist yet)
2. GREEN  → Write the MINIMUM code to make the test PASS
3. REFACTOR → Improve the code while keeping the tests passing
```

```
    ┌──────────┐
    │   RED    │ ← Write a failing test
    │  (fails) │
    └────┬─────┘
         │
    ┌────▼─────┐
    │  GREEN   │ ← Write minimum code
    │ (passes) │
    └────┬─────┘
         │
    ┌────▼─────┐
    │ REFACTOR │ ← Improve code
    │(continues│   (tests keep passing)
    └────┬─────┘
         │
         └──────→ Back to RED (next test)
```

> **MARIO ANALOGY:** TDD is like **planning the fight before fighting**:
>
> **RED:** You sketch on paper: "The jump must hit the Goomba 3 blocks away." The test exists, but Mario doesn't know how to jump like that yet -- FAIL.
>
> **GREEN:** You teach Mario to jump exactly 3 blocks. Now the test PASSES.
>
> **REFACTOR:** You improve the jump animation, optimize the physics -- but the jump still reaches 3 blocks. Tests keep passing.

### 6.3 TDD in Practice: Creating a Filter Function

**Step 1 -- RED:** Write the test first

```typescript
// filtro.test.ts
import { filtrarPorPrioridade } from './filtro';

describe('filtrarPorPrioridade', () => {
  it('should return high priority tasks', () => {
    const tarefas = [
      { id: 1, titulo: 'A', prioridade: 'alta' },
      { id: 2, titulo: 'B', prioridade: 'baixa' },
      { id: 3, titulo: 'C', prioridade: 'alta' },
    ];

    const resultado = filtrarPorPrioridade(tarefas, 'alta');
    expect(resultado).toHaveLength(2);
  });
});
```

```bash
$ npm test
FAIL  filtro.test.ts
  ✕ should return high priority tasks
  # Cannot find module './filtro'
```

**Step 2 -- GREEN:** Write the minimum code

```typescript
// filtro.ts
export function filtrarPorPrioridade(tarefas: any[], prioridade: string) {
  return tarefas.filter(t => t.prioridade === prioridade);
}
```

```bash
$ npm test
PASS  filtro.test.ts
  ✓ should return high priority tasks
```

**Step 3 -- REFACTOR:** Improve with types and safety

```typescript
// filtro.ts (refactored)
type Prioridade = 'alta' | 'media' | 'baixa';

interface TarefaComPrioridade {
  id: number;
  titulo: string;
  prioridade: Prioridade;
}

export function filtrarPorPrioridade(
  tarefas: TarefaComPrioridade[],
  prioridade: Prioridade
): TarefaComPrioridade[] {
  return tarefas.filter(t => t.prioridade === prioridade);
}
```

```bash
$ npm test
PASS  # Tests keep passing! ✓
```

### 6.4 When to Use TDD and When Not To

| Scenario | TDD? | Why |
|----------|------|-----|
| Complex business logic | Yes | Needs clarity before implementing |
| Utility functions | Yes | Well-defined behavior |
| Bug fix | Yes | Write a test that reproduces the bug first |
| Quick prototype | No | Prioritize speed, test later |
| Visual interface/CSS | No | Hard to test appearance with code |
| Exploration/research | No | You don't know what you want yet |

---

## 7. Mocks, Stubs, and Spies: Substitute Dummies

### 7.1 Mock: The Stunt Double

A **mock** replaces a real dependency with a controlled fake version. Useful when you don't want to call the real database or API during the test.

```typescript
// Mock of the email service
const enviarEmail = jest.fn();

test('should send an email when creating an urgent task', () => {
  criarTarefaUrgente('Deploy urgente', enviarEmail);

  expect(enviarEmail).toHaveBeenCalledWith(
    'time@empresa.com',
    'Nova tarefa urgente: Deploy urgente'
  );
});
```

> **MARIO ANALOGY:** A mock is like a **training dummy that imitates a real enemy**. You don't want to fight the real Bowser in training. You use a dummy that looks like Bowser, moves like Bowser, but isn't the real Bowser.

### 7.2 Stub: The Programmed Response

A **stub** is a function that returns a fixed value, without any real logic.

```typescript
// Database stub
const buscarTarefa = jest.fn().mockResolvedValue({
  id: 1,
  titulo: 'Tarefa mockada',
  concluida: false,
});

test('should display a task from the database', async () => {
  const tarefa = await buscarTarefa(1);
  expect(tarefa.titulo).toBe('Tarefa mockada');
});
```

### 7.3 Spy: The Secret Agent

A **spy** observes a real function without replacing it. It records whether it was called, with what arguments, how many times.

```typescript
test('should call console.log when completing a task', () => {
  const spy = jest.spyOn(console, 'log');

  concluirTarefa(tarefa);

  expect(spy).toHaveBeenCalledWith('Tarefa concluida:', tarefa.titulo);
  spy.mockRestore(); // Restore original
});
```

### 7.4 When to Use Each One

| Tool | When to Use | Mario Analogy |
|------|------------|---------------|
| **Mock** | Replace external dependency (DB, API, email) | Training dummy imitating the boss |
| **Stub** | Provide a fixed, controlled response | Dummy that always falls in the same spot |
| **Spy** | Observe without modifying | Hidden camera in training |

---

## 8. Coverage: Percentage of Dummies Tested

### 8.1 What Is Coverage?

Coverage measures **what percentage of your code is executed by the tests**.

- **Lines Coverage:** % of lines executed
- **Branch Coverage:** % of if/else paths tested
- **Functions Coverage:** % of functions called
- **Statements Coverage:** % of statements executed

### 8.2 Generating a Coverage Report with Jest

```bash
$ npm test -- --coverage

--------------------|---------|----------|---------|---------|
File                | % Stmts | % Branch | % Funcs | % Lines |
--------------------|---------|----------|---------|---------|
All files           |   92.5  |    85.7  |   100   |   91.3  |
 tarefa.ts          |   100   |    100   |   100   |   100   |
 filtro.ts          |   100   |    100   |   100   |   100   |
 todoService.ts     |   85    |    71.4  |   100   |   83.3  |
--------------------|---------|----------|---------|---------|
```

### 8.3 What Percentage to Aim For?

| Coverage | Meaning | Recommendation |
|----------|---------|----------------|
| 0-30% | Almost no tests | Dangerous. Start now. |
| 30-50% | Covering the basics | Minimum acceptable for small projects |
| 50-70% | Good coverage | Standard for most projects |
| 70-80% | Very good coverage | Ideal for important projects |
| 80-90% | Excellent | Standard for critical projects |
| 90-100% | Nearly perfect | Caution: 100% does not guarantee zero bugs |

### 8.4 Coverage Is Not Everything

**CAUTION:** High coverage does not mean good tests. You can have 100% coverage with bad tests:

```typescript
// Test with 100% coverage BUT useless:
test('function exists', () => {
  calcularDesconto(100); // Executed the function (100% lines coverage)
  // But didn't verify the result! No expect!
});

// Test with coverage AND quality:
test('should apply the correct discount', () => {
  expect(calcularDesconto(100)).toBe(90);   // Verified!
  expect(calcularDesconto(50)).toBe(50);    // Tested edge case!
  expect(calcularDesconto(-1)).toBe(0);     // Tested error!
});
```

> **MARIO ANALOGY:** Coverage is like the **percentage of training dummies you tested**. Having tested 80% of the dummies is great. But if you only gave each dummy a light tap (without checking if it fell), the training was worthless. Coverage measures QUANTITY. The quality of your `expect()` calls measures EFFECTIVENESS.

---

## 9. React Component Tests

### 9.1 Testing Library: Testing Like the User

**React Testing Library** tests components from the user's perspective -- not from the implementation's perspective.

```bash
$ npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

**Philosophy:** "The more your tests resemble the way the user uses it, the more confidence they give you."

### 9.2 Testing Rendering

```typescript
import { render, screen } from '@testing-library/react';
import { TodoItem } from './TodoItem';

test('should render the task title', () => {
  render(<TodoItem titulo="Comprar leite" concluida={false} />);

  expect(screen.getByText('Comprar leite')).toBeInTheDocument();
});

test('should show strikethrough when completed', () => {
  render(<TodoItem titulo="Feito" concluida={true} />);

  const elemento = screen.getByText('Feito');
  expect(elemento).toHaveStyle('text-decoration: line-through');
});
```

### 9.3 Testing Interactions

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoForm } from './TodoForm';

test('should call onSubmit when adding a task', async () => {
  const handleSubmit = jest.fn();
  render(<TodoForm onSubmit={handleSubmit} />);

  // Type in the input
  await userEvent.type(screen.getByRole('textbox'), 'Nova tarefa');

  // Click the button
  await userEvent.click(screen.getByRole('button', { name: /adicionar/i }));

  // Verify the function was called
  expect(handleSubmit).toHaveBeenCalledWith('Nova tarefa');
});

test('should clear the input after adding', async () => {
  render(<TodoForm onSubmit={jest.fn()} />);

  const input = screen.getByRole('textbox');
  await userEvent.type(input, 'Tarefa');
  await userEvent.click(screen.getByRole('button', { name: /adicionar/i }));

  expect(input).toHaveValue('');
});
```

### 9.4 Testing States and Effects

```typescript
import { render, screen, waitFor } from '@testing-library/react';
import { TodoList } from './TodoList';

// API mock
jest.mock('../api', () => ({
  fetchTarefas: jest.fn().mockResolvedValue([
    { id: 1, titulo: 'Tarefa do mock', concluida: false },
  ]),
}));

test('should load tasks from the API on mount', async () => {
  render(<TodoList />);

  // Wait for async loading
  await waitFor(() => {
    expect(screen.getByText('Tarefa do mock')).toBeInTheDocument();
  });
});

test('should show loading while fetching', () => {
  render(<TodoList />);
  expect(screen.getByText('Carregando...')).toBeInTheDocument();
});
```

---

## 10. Tests in CI/CD: Automating the Dojo

### 10.1 Tests in GitHub Actions

```yaml
# .github/workflows/test.yml
name: Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_PASSWORD: teste
          POSTGRES_DB: todoapp_test
        ports:
          - 5432:5432
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm test -- --coverage

      - name: Run integration tests
        run: npm run test:integration
        env:
          DATABASE_URL: postgresql://postgres:teste@localhost:5432/todoapp_test

      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

### 10.2 Blocking PRs Without Tests

Configure branch protection rules on GitHub to require that ALL tests pass before merging:

1. Settings > Branches > Add rule
2. Branch name pattern: `main`
3. Check "Require status checks to pass"
4. Select the "test" job

Now, no PR enters `main` without passing tests.

> **MARIO ANALOGY:** It's like placing a **mandatory checkpoint** before the Boss Battle. The game won't let you enter the castle without completing the training. Likewise, GitHub won't let code enter `main` without passing tests.

---

## 11. QA: Princess Peach in Action

### 11.1 The Role of QA

Peach -- the QA Engineer -- doesn't just run automated tests. She:

1. **Plans test scenarios** that devs didn't think of
2. **Tests edge cases**
3. **Does exploratory testing** (uses the app like a real user)
4. **Checks accessibility** (does the app work for everyone?)
5. **Tests performance** (can the app handle many users?)
6. **Documents bugs** with steps to reproduce

### 11.2 Manual QA vs Automated QA

| Type | When to Use | Done by |
|------|------------|---------|
| **Manual exploratory** | Exploring new flows, UX, accessibility | Human (QA) |
| **Automated unit** | Business logic, pure functions | Code (Jest) |
| **Automated integration** | API + Database, interacting services | Code (Supertest) |
| **Automated E2E** | Critical flows (login, payment) | Code (Playwright) |
| **Visual regression** | Detecting visual changes | Code (Percy, Chromatic) |
| **Performance** | Load, stress, latency | Tool (k6, Artillery) |

---

## Summary -- What We Learned in Level 3-4

| Concept | Mario Analogy | Tool |
|---------|---------------|------|
| Unit test | One training dummy | Jest |
| Integration test | Two dummies at the same time | Jest + Supertest |
| E2E test | Full battle simulation | Playwright, Cypress |
| TDD | Plan the fight beforehand | Red-Green-Refactor |
| Mock | Dummy imitating the boss | jest.fn() |
| Stub | Dummy with a fixed response | mockResolvedValue |
| Spy | Hidden camera | jest.spyOn() |
| Coverage | % of dummies tested | jest --coverage |
| Pyramid | Many small, few large | Strategy |
| QA | Princess Peach inspecting | Manual + Automated |

**The big lesson:** Tests are not extras. They are as important as the code itself. Code without tests is like a Mario who never trained going into the Boss Battle -- you might get lucky once, but you'll eventually lose. Tests give you the confidence to change, the safety to deploy, and the documentation to understand. Write tests. Always.

---

## References

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Cypress Documentation](https://docs.cypress.io/)
- [Testing Trophy -- Kent C. Dodds](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)
- [Test Pyramid -- Martin Fowler](https://martinfowler.com/articles/practical-test-pyramid.html)
- [TDD by Example -- Kent Beck](https://www.oreilly.com/library/view/test-driven-development/0321146530/)
- [Supertest -- GitHub](https://github.com/ladjs/supertest)
- [Jest Mocking -- Official Guide](https://jestjs.io/docs/mock-functions)
- [Microsoft Testing Best Practices](https://learn.microsoft.com/pt-br/dotnet/core/testing/unit-testing-best-practices)

---

*Level 3-4 complete! You learned to train before every battle. In the next level, we'll explore the world of Open Source -- where developers share their creations like custom Mario levels.*

---

<div align="center">

⬅️ [Previous: Level 3-3: Docker](3-3-docker.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 3-5: Open Source](3-5-open_source.md)

</div>
