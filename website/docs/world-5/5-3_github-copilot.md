---
title: "Level 5-3 -- The Ultimate Companion: Complete GitHub Copilot Guide"
description: "Complete guide to all modes and capabilities of GitHub Copilot, from Completions to Coding Agent, with detailed analogies from the Mario universe."
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
tags:
  - github-copilot
  - completions
  - chat
  - inline-chat
  - ask-mode
  - plan-mode
  - agent-mode
  - coding-agent
  - copilot-cli
  - mario
  - world-5
sidebar_position: 4
format: md
---

# Level 5-3 -- The Ultimate Companion: Complete GitHub Copilot Guide

## Change Log

| Version | Date       | Author       | Description                        |
|---------|------------|--------------|------------------------------------|
| 1.0.0   | 2026-03-18 | Paula Silva  | Initial chapter creation           |

---

## Table of Contents

- [Introduction -- The Most Powerful Companion in the Mushroom Kingdom](#introduction--the-most-powerful-companion-in-the-mushroom-kingdom)
- [Section 1 -- Overview: All Copilot Modes](#section-1--overview-all-copilot-modes)
  - [1.1 The Complete Companion Map](#11-the-complete-companion-map)
  - [1.2 Master Table: All Modes](#12-master-table-all-modes)
- [Section 2 -- Completions: The Companion that Whispers Tips](#section-2--completions-the-companion-that-whispers-tips)
  - [2.1 What are Completions](#21-what-are-completions)
  - [2.2 How Completions Work](#22-how-completions-work)
  - [2.3 Mario Analogy: The Companion's Whisper](#23-mario-analogy-the-companions-whisper)
  - [2.4 Tips for Better Completions](#24-tips-for-better-completions)
  - [2.5 Practical Completion Examples](#25-practical-completion-examples)
  - [2.6 When to Use Completions](#26-when-to-use-completions)
- [Section 3 -- Chat: Talking with the Companion](#section-3--chat-talking-with-the-companion)
  - [3.1 What is Copilot Chat](#31-what-is-copilot-chat)
  - [3.2 How Chat Works](#32-how-chat-works)
  - [3.3 Mario Analogy: Talking with Yoshi by the Campfire](#33-mario-analogy-talking-with-yoshi-by-the-campfire)
  - [3.4 Types of Questions for Chat](#34-types-of-questions-for-chat)
  - [3.5 Context in Chat: Participants and References](#35-context-in-chat-participants-and-references)
  - [3.6 Practical Chat Examples](#36-practical-chat-examples)
- [Section 4 -- Inline Chat: The Companion Points at the Code](#section-4--inline-chat-the-companion-points-at-the-code)
  - [4.1 What is Inline Chat](#41-what-is-inline-chat)
  - [4.2 How Inline Chat Works](#42-how-inline-chat-works)
  - [4.3 Mario Analogy: Point and Say "Improve This"](#43-mario-analogy-point-and-say-improve-this)
  - [4.4 Ideal Scenarios for Inline Chat](#44-ideal-scenarios-for-inline-chat)
  - [4.5 Practical Inline Chat Examples](#45-practical-inline-chat-examples)
- [Section 5 -- Ask Mode: Toad's Hint House](#section-5--ask-mode-toads-hint-house)
  - [5.1 What is Ask Mode](#51-what-is-ask-mode)
  - [5.2 How Ask Mode Works](#52-how-ask-mode-works)
  - [5.3 Mario Analogy: Toad's Hint House](#53-mario-analogy-toads-hint-house)
  - [5.4 When to Use Ask Mode](#54-when-to-use-ask-mode)
  - [5.5 Practical Ask Mode Examples](#55-practical-ask-mode-examples)
- [Section 6 -- Plan Mode: The Level Map](#section-6--plan-mode-the-level-map)
  - [6.1 What is Plan Mode](#61-what-is-plan-mode)
  - [6.2 How Plan Mode Works](#62-how-plan-mode-works)
  - [6.3 Mario Analogy: The Complete Level Map](#63-mario-analogy-the-complete-level-map)
  - [6.4 When to Use Plan Mode](#64-when-to-use-plan-mode)
  - [6.5 Practical Plan Mode Example](#65-practical-plan-mode-example)
- [Section 7 -- Agent Mode: Yoshi Plays WITH You](#section-7--agent-mode-yoshi-plays-with-you)
  - [7.1 What is Agent Mode](#71-what-is-agent-mode)
  - [7.2 How Agent Mode Works](#72-how-agent-mode-works)
  - [7.3 Mario Analogy: Yoshi on Autopilot](#73-mario-analogy-yoshi-on-autopilot)
  - [7.4 What Agent Mode Can Do](#74-what-agent-mode-can-do)
  - [7.5 The Agent Mode Cycle](#75-the-agent-mode-cycle)
  - [7.6 Practical Agent Mode Example](#76-practical-agent-mode-example)
  - [7.7 Tips for Using Agent Mode](#77-tips-for-using-agent-mode)
- [Section 8 -- Coding Agent: Yoshi Goes Solo](#section-8--coding-agent-yoshi-goes-solo)
  - [8.1 What is the Coding Agent](#81-what-is-the-coding-agent)
  - [8.2 How the Coding Agent Works](#82-how-the-coding-agent-works)
  - [8.3 Mario Analogy: Yoshi on a Solo Mission](#83-mario-analogy-yoshi-on-a-solo-mission)
  - [8.4 When to Use the Coding Agent](#84-when-to-use-the-coding-agent)
  - [8.5 The Complete Coding Agent Flow](#85-the-complete-coding-agent-flow)
  - [8.6 Practical Coding Agent Example](#86-practical-coding-agent-example)
  - [8.7 Limitations and Cautions](#87-limitations-and-cautions)
- [Section 9 -- Copilot on GitHub.com](#section-9--copilot-on-githubcom)
  - [9.1 What is Copilot on GitHub.com](#91-what-is-copilot-on-githubcom)
  - [9.2 Features on GitHub.com](#92-features-on-githubcom)
  - [9.3 Mario Analogy: The Companion on the World Map](#93-mario-analogy-the-companion-on-the-world-map)
- [Section 10 -- Copilot in CLI: The Companion in the Terminal](#section-10--copilot-in-cli-the-companion-in-the-terminal)
  - [10.1 What is Copilot in CLI](#101-what-is-copilot-in-cli)
  - [10.2 How to Use Copilot in CLI](#102-how-to-use-copilot-in-cli)
  - [10.3 Mario Analogy: The Companion in the Command Room](#103-mario-analogy-the-companion-in-the-command-room)
  - [10.4 Practical Copilot in CLI Examples](#104-practical-copilot-in-cli-examples)
- [Section 11 -- Complete Comparison Table: All Modes](#section-11--complete-comparison-table-all-modes)
- [Section 12 -- Golden Tips for Using Copilot](#section-12--golden-tips-for-using-copilot)
  - [12.1 The Golden Rule](#121-the-golden-rule)
  - [12.2 Tips Table](#122-tips-table)
  - [12.3 Common Mistakes](#123-common-mistakes)
- [Section 13 -- The Companion Journey: Which Mode to Use When](#section-13--the-companion-journey-which-mode-to-use-when)
  - [13.1 Decision Tree](#131-decision-tree)
  - [13.2 Day-to-Day Scenarios](#132-day-to-day-scenarios)
- [What We Learned -- Summary Table](#what-we-learned--summary-table)
- [References](#references)

---

## Introduction -- The Most Powerful Companion in the Mushroom Kingdom

<div align="center">
<img src="/img/diagrams/copilot-modes.svg" alt="GitHub Copilot modes spectrum by autonomy level" width="800" />
<br/><em>GitHub Copilot modes spectrum by autonomy level</em>
</div>

Sofia entered a special room in the castle -- the **Companion Training Room**. In the center, on an illuminated pedestal, a Yoshi egg floated glowing with energy. But this was no ordinary Yoshi. Around the pedestal, holographic panels showed EIGHT different operating modes:

- **Whisper** -- Yoshi whispers tips as you walk
- **Conversation** -- You stop and talk with Yoshi face to face
- **Point** -- Yoshi points at something specific and suggests improvements
- **Consult** -- You go to Toad's Hint House and ask questions
- **Map** -- Yoshi shows the complete map before you start
- **Autopilot** -- Yoshi plays WITH you, executing complex actions
- **Solo Mission** -- Yoshi goes alone to complete a mission
- **Terminal** -- Yoshi helps you in the command room

"Eight modes?" Sofia was impressed. "I thought Copilot only did autocomplete!"

The instructor Toad smiled. "Most people think that. That's why they use 10% of Copilot's power. Today you're going to learn ALL the modes. When you're done, you'll have a companion that does MUCH more than whisper tips."

---

## Section 1 -- Overview: All Copilot Modes

### 1.1 The Complete Companion Map

GitHub Copilot isn't a single tool -- it's an ECOSYSTEM of modes that complement each other. Each mode has a purpose, an autonomy level, and an ideal use context.

The autonomy progression:

```
LESS AUTONOMY ---------------------------------------- MORE AUTONOMY

Completions -> Chat -> Inline Chat -> Ask -> Plan -> Agent Mode -> Coding Agent
 (whispers)  (talks)   (points)   (consults) (maps) (plays with you) (goes solo)
```

### 1.2 Master Table: All Modes

| Mode | What It Does | Mario Analogy | Autonomy | Where It Runs |
|---|---|---|---|---|
| **Completions** | Suggests lines of code as you type | Companion that whispers tips | Very low | IDE (VS Code, JetBrains) |
| **Chat** | You ask questions and it responds with code and explanations | Talking with Yoshi by the campfire | Low | IDE (side panel) |
| **Inline Chat** | Chat directly on the selected code snippet | Companion points at the block and suggests | Low-medium | IDE (inline in editor) |
| **Ask Mode** | Read-only mode: explains, analyzes, answers | Toad's Hint House -- asking the wise NPC | Low | IDE (Chat with toggle) |
| **Plan Mode** | Shows the plan before executing | Complete level map before playing | Medium | IDE (Chat with toggle) |
| **Agent Mode** | Executes complex tasks: creates files, installs deps, runs tests | Yoshi on autopilot playing WITH you | High | IDE (Chat with toggle) |
| **Coding Agent** | Resolves issues and opens PRs autonomously | Yoshi on a solo mission -- goes and returns with results | Very high | GitHub.com (background) |
| **Copilot on GitHub.com** | Assistant in the browser for PRs, issues, code | Companion on the world map | Variable | GitHub.com (browser) |
| **Copilot in CLI** | Assistant on the command line | Companion in the command room | Low-medium | Terminal |

---

## Section 2 -- Completions: The Companion that Whispers Tips

### 2.1 What are Completions

**Completions** (or Suggestions) are the most basic and most-used Copilot mode. As you type code, Copilot analyzes the context -- your open files, the function name, comments, surrounding code -- and suggests entire lines or blocks of code in gray text.

You accept with `Tab`, reject by ignoring, or see alternatives with `Alt+]` and `Alt+[`.

### 2.2 How Completions Work

Copilot uses several signals to generate relevant completions:

1. **Current file context:** The code you've already written in the file
2. **Open files:** Other open files in the editor serve as reference
3. **Function/variable name:** Descriptive names give Copilot clues
4. **Comments:** Comments are the most powerful way to guide completions
5. **Project patterns:** Copilot learns the style of your project
6. **Language:** Each language has specific patterns

### 2.3 Mario Analogy: The Companion's Whisper

> **MARIO ANALOGY:** Imagine Yoshi walking beside Mario and, with every step, whispering tips in his ear: "there's a coin above", "stomp on that Goomba", "jump now". Mario can follow the tips or ignore them. Yoshi doesn't force anything -- he just suggests, in real time, based on what he sees around him.
>
> If Mario is near a "?" block, Yoshi whispers "jump here!". If Mario is writing a function name `calcularDesconto`, Yoshi whispers the entire function body. The clearer the context (function name, comments), the better the whispers.

### 2.4 Tips for Better Completions

| Tip | Why | Example |
|---|---|---|
| **Write descriptive comments** | Copilot uses comments as context for suggestions | `// Function that calculates the discount based on total value and customer type` |
| **Give examples in your code** | Showing an example helps Copilot understand the pattern | Write the first item in a list, Copilot completes the others |
| **Use clear names for variables and functions** | Descriptive names give more context | `calcularDescontoCliente()` instead of `calc()` or `func1()` |
| **Open relevant files** | Copilot reads open files as context | Open the model and controller when creating the route |
| **Keep the project organized** | Well-structured projects give better context | Separate folders for components, hooks, services |

### 2.5 Practical Completion Examples

**Example 1: Comment guides the completion**
```typescript
// Function that validates an email address
// Returns true if the email is valid, false otherwise
function validarEmail(email: string): boolean {
  // Copilot suggests:
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

**Example 2: Function name guides the completion**
```typescript
function buscarUsuarioPorId(id: number): Promise<Usuario> {
  // Copilot suggests:
  return prisma.usuario.findUnique({
    where: { id },
  });
}
```

**Example 3: Repetitive pattern**
```typescript
const rotas = [
  { path: '/usuarios', component: UsuariosPage },
  { path: '/tarefas', component: TarefasPage },
  // Copilot suggests based on the pattern:
  { path: '/projetos', component: ProjetosPage },
  { path: '/configuracoes', component: ConfiguracoesPage },
];
```

### 2.6 When to Use Completions

| Scenario | Is Completions Ideal? | Why |
|---|---|---|
| Writing day-to-day code | Yes | Accelerates typing by 2-5x |
| Creating functions with clear logic | Yes | Comment + name = excellent completion |
| Repetitive / boilerplate code | Yes | Pattern matching is Copilot's strength |
| Complex business logic | Partially | Good for skeleton, needs detail adjustments |
| Security-critical code | With caution | ALWAYS review security suggestions |
| Learning a new language | Yes | Shows idiomatic patterns of the language |

---

## Section 3 -- Chat: Talking with the Companion

### 3.1 What is Copilot Chat

**Copilot Chat** is a side panel in VS Code (or JetBrains) where you can talk to Copilot in natural language. You ask questions, request explanations, request code, and Copilot responds with your project's context.

### 3.2 How Chat Works

Chat has access to:
- Your entire project (files, folder structure)
- Currently open file
- Selected code (if any)
- Terminal and outputs
- Conversation history

### 3.3 Mario Analogy: Talking with Yoshi by the Campfire

> **MARIO ANALOGY:** Completions are quick whispers while you're running through the level. Chat is when you STOP, sit by the campfire with Yoshi, and have a full conversation. "Yoshi, how do I beat that boss?" "Yoshi, explain how this game mechanic works." "Yoshi, help me plan the route for the next level."
>
> At the campfire, you can ask long questions, get detailed explanations, and plan. It's not something to use while running -- it's for when you need to STOP and THINK.

### 3.4 Types of Questions for Chat

| Question Type | Example | What You Get |
|---|---|---|
| **Explanation** | "Explain what this function does" | Natural language description of the code |
| **Debugging** | "Why is this loop slow?" | Problem analysis + solution suggestion |
| **Generation** | "Create a React hook for debounce" | Complete code + explanation |
| **Refactoring** | "How can I improve this function?" | Improvement suggestions with code |
| **Tests** | "Generate unit tests for this function" | Complete tests with Jest/Vitest |
| **Documentation** | "Generate JSDoc documentation for this function" | Formatted documentation |
| **Architecture** | "What's the best way to structure this module?" | Architecture suggestion with examples |

### 3.5 Context in Chat: Participants and References

Chat has a powerful context system:

**Participants (@):**
- `@workspace` -- References the entire workspace/project
- `@vscode` -- Questions about VS Code
- `@terminal` -- References terminal content
- `@github` -- Accesses GitHub information (issues, PRs, repos)

**References (#):**
- `#file:nome.ts` -- References a specific file
- `#selection` -- References selected code
- `#editor` -- References the open file in the editor
- `#codebase` -- Searches the entire codebase

**Example combining participants and references:**
```
@workspace Explain the backend architecture,
focusing on #file:server.ts and #file:routes/index.ts
```

### 3.6 Practical Chat Examples

**Example 1: Debugging**
```
You: "This endpoint is returning 500. Here's the error log:
[paste the log]. What could be causing it?"

Copilot: "Based on the log, the error is on line 42 of userController.ts.
You're trying to access `user.email` but `user` can be null when
the ID doesn't exist in the database. Add a check:

if (!user) {
  return res.status(404).json({ error: 'User not found' });
}
"
```

**Example 2: Learning**
```
You: "Explain what the Repository pattern is in TypeScript
and how I would apply it in my project"

Copilot: [Detailed explanation + example with code from your project]
```

---

## Section 4 -- Inline Chat: The Companion Points at the Code

### 4.1 What is Inline Chat

**Inline Chat** is Chat, but DIRECTLY in the code. You select a code snippet, press `Ctrl+I` (or `Cmd+I` on Mac), and a dialog box appears right there, inline in the editor. You say what you want, and Copilot modifies the selected code.

### 4.2 How Inline Chat Works

1. Select a code snippet
2. Press `Ctrl+I` / `Cmd+I`
3. Type what you want (e.g., "refactor to use async/await")
4. Copilot shows the diff -- what will change
5. You accept, reject, or ask for adjustments

### 4.3 Mario Analogy: Point and Say "Improve This"

> **MARIO ANALOGY:** Inline Chat is when Mario points at a specific block in the level and tells the companion: "Yoshi, look at THIS block. Improve it." It's not a general conversation about the entire level -- it's about THAT specific block. Yoshi looks, analyzes, and suggests a targeted improvement.
>
> "Yoshi, this wall is weak. Reinforce it." Yoshi sees the wall, understands the surrounding context (which other walls exist, what the castle's style is), and reinforces THAT wall while maintaining consistency with the rest.

### 4.4 Ideal Scenarios for Inline Chat

| Scenario | Command | Result |
|---|---|---|
| **Refactor function** | "Refactor to use early returns" | Code refactored with early returns |
| **Add types** | "Add TypeScript typing" | Types added to function/variable |
| **Improve performance** | "Optimize this loop" | Optimized loop with explanation |
| **Translate** | "Convert from JavaScript to TypeScript" | Converted code with types |
| **Simplify** | "Simplify this logic" | Cleaner, more readable code |
| **Document** | "Add JSDoc" | Documentation added inline |

### 4.5 Practical Inline Chat Examples

**Example: Select a function and request refactoring**

Before:
```typescript
function processarPedido(pedido) {
  if (pedido !== null) {
    if (pedido.itens.length > 0) {
      if (pedido.status === 'pendente') {
        // process
        return calcularTotal(pedido);
      }
    }
  }
  return null;
}
```

Inline Chat command: "Refactor using early returns and add TypeScript types"

After:
```typescript
function processarPedido(pedido: Pedido | null): number | null {
  if (!pedido) return null;
  if (pedido.itens.length === 0) return null;
  if (pedido.status !== 'pendente') return null;

  return calcularTotal(pedido);
}
```

---

## Section 5 -- Ask Mode: Toad's Hint House

### 5.1 What is Ask Mode

**Ask Mode** is a special Chat mode where Copilot ONLY answers questions -- it doesn't modify files, doesn't create anything, doesn't execute anything. It's a purely informational and safe mode.

### 5.2 How Ask Mode Works

In the VS Code Chat panel, you can switch between modes using the selector at the top:
- **Ask** -- Only responds (doesn't modify anything)
- **Edit** -- Can edit files
- **Agent** -- Can execute complex actions

### 5.3 Mario Analogy: Toad's Hint House

> **MARIO ANALOGY:** Ask Mode is like visiting **Toad's Hint House** -- that little house on the map where a wise Toad answers your questions. You walk in, ask "how do I beat the World 3 Boss?", and Toad explains in detail. But Toad does NOT leave the house and go defeat the boss for you. He only PROVIDES INFORMATION.
>
> This is perfect for when you want to LEARN or UNDERSTAND something without the risk of Copilot accidentally modifying your files. It's the safest mode -- zero risk of side effects.

### 5.4 When to Use Ask Mode

| Scenario | Why Ask Mode |
|---|---|
| Understanding unfamiliar code | Explains without risk of modifying |
| Learning a concept | Pure information, no action |
| Evaluating architecture options | Compares alternatives without implementing |
| Investigating a bug | Analyzes without "trying to fix" prematurely |
| Preparing for a task | Understands the scope before starting to code |
| Mental code review | Ask for analysis of a snippet before submitting |

### 5.5 Practical Ask Mode Examples

```
[Ask Mode]

You: "Explain the architecture pattern of this project.
What are the main modules and how do they connect?"

Copilot: "Your project follows a layered architecture:
1. Frontend (React) in /frontend -- components, hooks, services
2. Backend (Express) in /backend -- controllers, services, models
3. Database (PostgreSQL) via Prisma in /prisma
The communication between frontend and backend happens via REST API...
[detailed explanation WITHOUT modifying any files]"

You: "What security risks do you see in this code?"

Copilot: "I identified 3 potential risks:
1. The /api/users endpoint doesn't validate the JWT token...
2. The SQL query in userService.ts uses string concatenation...
3. CORS is configured as '*' in production...
[detailed explanation of each risk + how to fix, but WITHOUT modifying]"
```

---

## Section 6 -- Plan Mode: The Level Map

### 6.1 What is Plan Mode

**Plan Mode** is when Copilot analyzes your request and shows a DETAILED PLAN of everything it will do BEFORE executing any action. You see the complete map, evaluate if it makes sense, and only then authorize execution.

### 6.2 How Plan Mode Works

1. You describe what you want in Chat (in Agent or Edit mode)
2. Copilot generates a plan: which files will be modified, what will be created, what will be removed
3. You review the plan
4. If you agree, you authorize execution
5. If you disagree, you adjust the request and Copilot generates a new plan

### 6.3 Mario Analogy: The Complete Level Map

> **MARIO ANALOGY:** Plan Mode is when Yoshi SHOWS YOU THE MAP of the level before you start playing. "Look, Mario: there are 3 Goombas here, a chasm there, a secret pipe at the end that leads to the boss. I suggest this route [shows the route on the map]. Do you want to follow this plan or prefer another path?"
>
> You SEE everything before committing. If the plan seems risky ("Yoshi, I don't want to cross that chasm"), you adjust before starting. It's like having X-ray vision of the level before stepping into it.

### 6.4 When to Use Plan Mode

| Scenario | Why Plan Mode |
|---|---|
| Large tasks (new feature) | Ensures Copilot understood the scope |
| Broad refactoring | See all files that will be affected |
| Architecture change | Evaluate the impact before executing |
| First time using Agent Mode | Understand what will happen before authorizing |
| Ambiguous task | Validate Copilot's interpretation |

### 6.5 Practical Plan Mode Example

```
You: "Add a real-time notification system
using WebSocket to the TodoApp"

Copilot [Plan Mode]:

EXECUTION PLAN:

1. Create /backend/src/websocket/server.ts
   - Configure WebSocket server with socket.io
   - Define events: 'task:created', 'task:updated', 'task:deleted'

2. Modify /backend/src/server.ts
   - Integrate WebSocket server with Express
   - Add authentication middleware for WebSocket

3. Create /frontend/src/hooks/useNotifications.ts
   - Custom hook for WebSocket connection
   - Notification state management

4. Create /frontend/src/components/NotificationBell.tsx
   - UI component to display notifications
   - Badge with unread notification count

5. Modify /frontend/src/components/TaskList.tsx
   - Integrate notification hook
   - Update list in real time when receiving event

6. Create tests:
   - /backend/src/__tests__/websocket.test.ts
   - /frontend/src/__tests__/useNotifications.test.ts

7. Install dependencies:
   - socket.io (backend)
   - socket.io-client (frontend)

New files: 4
Modified files: 2
Dependencies: 2

Do you want to proceed with this plan?
```

---

## Section 7 -- Agent Mode: Yoshi Plays WITH You

### 7.1 What is Agent Mode

**Agent Mode** is the most powerful mode within the IDE. When activated, Copilot stops being a passive assistant and becomes an **active agent** that can:

- Create and modify files
- Run commands in the terminal
- Install dependencies
- Execute tests
- Analyze errors and try to fix them
- Perform multiple actions in sequence

### 7.2 How Agent Mode Works

In the VS Code Chat, select "Agent" in the mode selector. Then, describe the task:

```
"Create a React login form component with validation,
unit tests, and integrate with the existing authentication API"
```

Copilot in Agent Mode:
1. Plans the task (may show the plan first)
2. Creates the necessary files
3. Writes the code
4. Runs tests to verify
5. If tests fail, analyzes the error and tries to fix it
6. Repeats until everything works (or asks for help)

### 7.3 Mario Analogy: Yoshi on Autopilot

> **MARIO ANALOGY:** Agent Mode is when Yoshi enters **autopilot** mode and starts playing WITH you actively. You say "Yoshi, I need to get through this level", and Yoshi starts: eats enemies, collects coins, opens secret blocks, and does everything needed to complete the level. You're there watching and directing -- "no, go right", "grab that mushroom" -- but Yoshi does the heavy lifting.
>
> The crucial difference: Yoshi plays WITHIN your level, WITH you present. You see everything he does in real time. If he does something wrong, you can stop and correct immediately. It's active collaboration, not blind delegation.

### 7.4 What Agent Mode Can Do

| Capability | Example | Mario Analogy |
|---|---|---|
| **Create files** | Creates components, services, tests | Yoshi builds new blocks in the level |
| **Modify files** | Refactors, adds features, fixes bugs | Yoshi repositions existing blocks |
| **Run terminal** | `npm install`, `npm test`, `git status` | Yoshi uses special tools |
| **Analyze errors** | Reads error messages and diagnoses | Yoshi investigates why the block broke |
| **Iterate** | If test fails, tries to fix and run again | Yoshi tries again with a different approach |
| **Use MCP** | Accesses external tools via Warp Zones | Yoshi travels to other worlds to get resources |

### 7.5 The Agent Mode Cycle

```
+---------------+
|  HUMAN        |  "Create a notification system"
|  gives order  |
+-------+-------+
        |
        v
+---------------+
|  PLANS        |  Analyzes the codebase, defines the plan
|               |
+-------+-------+
        |
        v
+---------------+
|  EXECUTES     |  Creates files, writes code, installs deps
|               |
+-------+-------+
        |
        v
+---------------+
|  VERIFIES     |  Runs tests, checks for compilation errors
|               |<---- If it fails, goes back to EXECUTES
+-------+-------+
        | (if it passes)
        v
+---------------+
|  PRESENTS     |  Shows the result to the human
|               |
+-------+-------+
        |
        v
+---------------+
|  HUMAN        |  Reviews, adjusts, approves
|  reviews      |
+---------------+
```

### 7.6 Practical Agent Mode Example

```
You: "Add pagination to the task list. 10 items per page.
Include navigation buttons and show total pages."

[Agent Mode in action:]

> Analyzing codebase...
> Found TaskList.tsx and taskService.ts

> Modifying backend:
  - Adding skip/take parameters to the GET /api/tasks endpoint
  - Returning total records in the response

> Modifying frontend:
  - Creating hook usePagination in /frontend/src/hooks/usePagination.ts
  - Creating component Pagination in /frontend/src/components/Pagination.tsx
  - Modifying TaskList.tsx to use pagination

> Running tests...
> 2 tests failed:
  - TaskList.test.tsx: component expects prop 'tasks' but now receives 'paginatedTasks'
  - taskService.test.ts: endpoint signature changed

> Fixing tests...
> Running tests again...
> All 14 tests passed!

Summary:
- 2 files created (usePagination.ts, Pagination.tsx)
- 3 files modified (tasks endpoint, TaskList, tests)
- 14 tests passing
```

### 7.7 Tips for Using Agent Mode

| Tip | Why | Example |
|---|---|---|
| **Be specific** | Agent Mode executes LITERALLY what you ask | "10 items per page, Previous/Next buttons, show 'Page X of Y'" |
| **Ask one step at a time** | Smaller tasks = better results | "First, add pagination to the backend" -> then "now add it to the frontend" |
| **Review the result** | Agent Mode isn't perfect | Read each file created/modified |
| **Use with #codebase** | Gives more context to the agent | "Looking at #codebase, add pagination following the same style" |
| **Combine with Plan Mode** | See the plan before executing | Start in Plan, review, then switch to Agent |

---

## Section 8 -- Coding Agent: Yoshi Goes Solo

### 8.1 What is the Coding Agent

The **Coding Agent** (also called **Copilot Workspace** or **GitHub Copilot Coding Agent**) is an agent that runs ON GITHUB, not in your IDE. You assign an issue to it, and it:

1. Reads the issue
2. Reads the codebase
3. Plans the solution
4. Creates a branch
5. Writes the code
6. Writes tests
7. Opens a complete PR
8. Describes what it did and why

All of this **autonomously**, without you being present.

### 8.2 How the Coding Agent Works

```
STEP 1: You create an Issue on GitHub
  "Add search field to the task list with 300ms debounce"

STEP 2: You assign it to the Coding Agent
  Assign -> Copilot (or use the /assign-copilot command)

STEP 3: The Coding Agent works (you can go get coffee)
  - Reads the issue and codebase
  - Plans the implementation
  - Creates branch: copilot/add-search-field
  - Writes SearchBar.tsx, useSearch.ts, tests
  - Runs CI/CD automatically

STEP 4: Coding Agent opens a PR
  - Title: "Add search field with debounce to task list"
  - Description: detailed explanation of what was done
  - Files: list of files created/modified
  - Tests: test status

STEP 5: You review the PR
  - Read the code
  - Suggest adjustments (comments on the PR)
  - Coding Agent can respond and make adjustments
  - You approve and merge
```

### 8.3 Mario Analogy: Yoshi on a Solo Mission

> **MARIO ANALOGY:** The Coding Agent is when Yoshi goes on a **solo mission**. Mario looks at the Quest Board (GitHub Issues), sees a mission ("Defeat the Koopa in level 3-2 and collect the hidden star"), and says: "Yoshi, this mission is yours. Go and come back when you're done."
>
> Yoshi goes alone. He knows the territory (read the codebase), knows how to fight (has development skills), and has a clear objective (the issue). He goes, completes the mission, and comes back with the result: "Boss, here's the star. I defeated the Koopa using fire flower. Here's the mission report (PR description)."
>
> Mario (you) reviews the report. "Hmm, Yoshi, you should have grabbed the coins too." Yoshi adjusts and delivers again. Only when Mario approves is the mission considered complete.

### 8.4 When to Use the Coding Agent

| Scenario | Ideal for Coding Agent? | Why |
|---|---|---|
| Well-defined bug with steps to reproduce | Yes | Clear issue = predictable result |
| Small, well-specified feature | Yes | Limited scope = less risk |
| Mechanical refactoring (rename, move) | Yes | Repetitive tasks are perfect |
| Adding tests for existing code | Yes | Code already exists, just needs tests |
| Complex feature with lots of ambiguity | No | Coding Agent doesn't handle ambiguity well |
| Architecture change | No | Requires high-level human decisions |
| Security-critical code | With supervision | Always review carefully |

### 8.5 The Complete Coding Agent Flow

```
+--------------------------------------------------------------+
|                    CODING AGENT FLOW                          |
|                                                               |
|  [Issue]                                                      |
|     |                                                         |
|     v                                                         |
|  [Coding Agent reads issue + codebase]                        |
|     |                                                         |
|     v                                                         |
|  [Plans: which files to create/modify]                        |
|     |                                                         |
|     v                                                         |
|  [Creates branch + implements + tests]                        |
|     |                                                         |
|     v                                                         |
|  [CI/CD runs automatically]                                   |
|     |                                                         |
|     +-- CI passes --> [Opens PR]                              |
|     |                    |                                     |
|     |                    v                                     |
|     |                [Dev reviews]                             |
|     |                    |                                     |
|     |                    +-- Approves --> [Merge]              |
|     |                    |                                     |
|     |                    +-- Requests change --> [Agent adjusts]|
|     |                                            |             |
|     |                                            +--> [PR]    |
|     |                                                         |
|     +-- CI fails --> [Agent tries to fix]                     |
|                          |                                     |
|                          +--> [Runs CI again]                  |
|                                                               |
+--------------------------------------------------------------+
```

### 8.6 Practical Coding Agent Example

```markdown
## Issue #42: Add dark mode to TodoApp

### Description
Implement dark mode toggle in the application.
Should use CSS variables for colors.
Should persist the preference in localStorage.
Should respect the operating system preference as default.

### Acceptance criteria
- [ ] Toggle in the header
- [ ] Colors via CSS variables
- [ ] Persistence in localStorage
- [ ] Respect prefers-color-scheme
- [ ] Smooth transition (200ms)
- [ ] Tests covering toggle and persistence
```

Coding Agent result (PR):

```
PR #87: Implement dark mode with system preference support

## What was done
- Created useTheme hook with toggle, persistence, and system preference
- Created ThemeToggle component in the header
- Created /frontend/src/styles/themes.css with CSS variables
- Modified App.tsx to use ThemeProvider
- Added 8 unit tests covering all scenarios

## Files created
- frontend/src/hooks/useTheme.ts
- frontend/src/components/ThemeToggle.tsx
- frontend/src/styles/themes.css
- frontend/src/__tests__/useTheme.test.ts

## Files modified
- frontend/src/App.tsx
- frontend/src/components/Header.tsx

## Tests: 8/8 passing
## CI: All checks passing
```

### 8.7 Limitations and Cautions

| Limitation | Impact | How to Mitigate |
|---|---|---|
| **Doesn't understand business context** | May implement something technically correct but wrong for the business | Write detailed issues with business context |
| **May generate non-idiomatic code** | Code works but doesn't follow project patterns | Use .agent.md and instructions to define patterns |
| **Doesn't do deploys** | Only creates the PR, doesn't deploy | Configure CI/CD for automatic deploy after merge |
| **Can get "stuck"** | If the problem is too complex, may loop | Define timeout and monitor progress |
| **Security** | Generated code needs security review | ALWAYS review Coding Agent PRs, especially for security |

> **COPILOT GOLDEN RULE:** Copilot is an accelerator, not a substitute. It makes you go 10x faster, but YOU need to know how to drive. An AI companion following a level 1 player who knows nothing will still create chaos. Learn the fundamentals!

---

## Section 9 -- Copilot on GitHub.com

### 9.1 What is Copilot on GitHub.com

Copilot also works directly in the browser, on GitHub.com. Without needing an IDE, you can use Copilot to:

- Summarize long PRs
- Explain code snippets
- Suggest issue descriptions
- Summarize discussions
- Navigate the codebase with natural language questions

### 9.2 Features on GitHub.com

| Feature | What It Does | Where |
|---|---|---|
| **PR Summaries** | Generates automatic PR summary | On the PR page |
| **Code Explanation** | Explains code snippets | In the file view |
| **Issue Suggestions** | Suggests labels, assignees | On the issues page |
| **Copilot Chat** | Chat with repository context | Copilot icon on GitHub.com |
| **Search** | Semantic search in the codebase | Search bar |
| **Review Assistance** | Helps review PRs | In the review tab |

### 9.3 Mario Analogy: The Companion on the World Map

> **MARIO ANALOGY:** Copilot on GitHub.com is like having Yoshi on the WORLD MAP, not inside the level. You're looking at the general map (GitHub.com), seeing which levels exist (repos), which missions are pending (issues), and which reports have arrived (PRs). Yoshi is there on the map to summarize things, explain, and help navigate. But he's not INSIDE any level -- he's on the overview.

---

## Section 10 -- Copilot in CLI: The Companion in the Terminal

### 10.1 What is Copilot in CLI

**Copilot in CLI** (Command Line Interface) is Copilot in the terminal. You use commands like `gh copilot suggest` and `gh copilot explain` to get help directly on the command line.

### 10.2 How to Use Copilot in CLI

```bash
# Ask for a command suggestion
gh copilot suggest "how do I find all .ts files modified in the last 7 days"

# Copilot suggests:
# find . -name "*.ts" -mtime -7

# Ask for a command explanation
gh copilot explain "git rebase -i HEAD~3"

# Copilot explains:
# This command opens an interactive rebase of the last 3 commits.
# You can reorder, squash, edit, or remove commits...
```

### 10.3 Mario Analogy: The Companion in the Command Room

> **MARIO ANALOGY:** Copilot in CLI is like having Yoshi in the castle's **command room**. You're at the control console (terminal), full of levers and buttons (commands), and don't know which one to press. Yoshi is right there beside you: "Want to find all the Goombas in level 3? Pull THIS lever (find . -name '*.ts')." Or you point to an unknown lever and ask: "What does this one do?" And Yoshi explains.

### 10.4 Practical Copilot in CLI Examples

```bash
# Scenario 1: Don't remember how to create a Docker container
gh copilot suggest "create Docker container from Dockerfile in current folder"
# -> docker build -t meu-app . && docker run -p 3000:3000 meu-app

# Scenario 2: Complex Git command
gh copilot suggest "see which branches were merged into main in the last 30 days"
# -> git log --merges --since="30 days ago" main --oneline

# Scenario 3: Explain a mysterious command
gh copilot explain "awk '{print $2}' /etc/passwd | sort | uniq -c | sort -rn"
# -> This command:
# 1. Extracts the second field from /etc/passwd
# 2. Sorts alphabetically
# 3. Counts unique occurrences
# 4. Sorts by count (highest first)
```

---

## Section 11 -- Complete Comparison Table: All Modes

| Aspect | Completions | Chat | Inline Chat | Ask Mode | Plan Mode | Agent Mode | Coding Agent | GitHub.com | CLI |
|---|---|---|---|---|---|---|---|---|---|
| **Mario Analogy** | Whisper | Campfire | Point | Hint House | Map | Yoshi autopilot | Yoshi solo | World map | Command room |
| **Autonomy** | Very low | Low | Low-medium | Low | Medium | High | Very high | Variable | Low-medium |
| **Modifies files** | No | Yes* | Yes | No | No (shows plan) | Yes | Yes | No | No |
| **Runs terminal** | No | No | No | No | No | Yes | Yes | No | Suggests |
| **Requires IDE** | Yes | Yes | Yes | Yes | Yes | Yes | No | No | No |
| **Runs in background** | No | No | No | No | No | No | Yes | No | No |
| **Speed** | Instant | Seconds | Seconds | Seconds | Seconds | Minutes | Minutes-hours | Seconds | Seconds |
| **Risk** | Zero | Low | Low | Zero | Zero | Medium | Medium | Zero | Low |
| **Best for** | Day-to-day | Questions | Refactoring | Learning | Planning | Features | Issues | Navigating | Terminal |

---

## Section 12 -- Golden Tips for Using Copilot

### 12.1 The Golden Rule

> **GOLDEN RULE:** Copilot is an accelerator, not a substitute. It makes you go 10x faster, but YOU need to know how to drive. An AI companion following a level 1 player who knows nothing will still create chaos. Learn the fundamentals!

### 12.2 Tips Table

| Tip | Why | Example |
|---|---|---|
| **Write descriptive comments** | Copilot uses comments as context | `// Function that calculates discount based on total value and customer type` |
| **Give examples in your code** | Showing an example helps understand the pattern | Write the first item in a list, Copilot completes the others |
| **Use clear names** | Descriptive names give more context | `calcularDescontoCliente()` instead of `calc()` |
| **Open relevant files** | Copilot reads open files as context | Open the model and controller when creating the route |
| **Use Chat to ask questions** | Instead of googling, ask Copilot | "Why is this loop slow? How can I optimize it?" |
| **ALWAYS review** | Copilot isn't perfect -- it can generate incorrect or insecure code | Read and understand each suggestion before accepting |
| **Start small** | Smaller pieces = better results | "Create the pagination hook" -> then "now the component" |
| **Use #references** | Gives specific context to Copilot | `#file:userService.ts how to add cache to this service?` |

### 12.3 Common Mistakes

| Mistake | Consequence | How to Avoid |
|---|---|---|
| **Accepting everything without reading** | Code with bugs or insecure | ALWAYS read before accepting |
| **Vague prompts** | Generic and useless results | Be specific: say exactly what you want |
| **Ignoring context** | Copilot generates code disconnected from the project | Open relevant files, use #references |
| **Not using Ask Mode** | Modifies files when you just wanted information | Use Ask Mode for risk-free questions |
| **Asking for huge tasks** | Agent Mode gets confused on giant tasks | Break into smaller subtasks |
| **Not checking security** | Generated code may have vulnerabilities | Always run SAST/DAST on generated code |

---

## Section 13 -- The Companion Journey: Which Mode to Use When

### 13.1 Decision Tree

```
Do you need help with code?
|
+-- Just want to UNDERSTAND something?
|   +-- Use ASK MODE (Hint House)
|
+-- Want to PLAN before executing?
|   +-- Use PLAN MODE (Level Map)
|
+-- Currently TYPING code?
|   +-- Leave COMPLETIONS active (Whispers)
|
+-- Want to IMPROVE a specific snippet?
|   +-- Use INLINE CHAT (Point + Improve)
|
+-- Have a GENERAL question?
|   +-- Use CHAT (Campfire)
|
+-- Need a COMPLEX TASK in the IDE?
|   +-- Use AGENT MODE (Yoshi Autopilot)
|
+-- Have an ISSUE to resolve without urgency?
|   +-- Use CODING AGENT (Yoshi Solo)
|
+-- In the TERMINAL and need help?
|   +-- Use COPILOT CLI (Command Room)
|
+-- On GITHUB.COM browsing?
    +-- Use COPILOT on GitHub.com (World Map)
```

### 13.2 Day-to-Day Scenarios

| Scenario | Recommended Mode | Why |
|---|---|---|
| Writing new code | Completions + Chat | Whispers to accelerate + campfire for questions |
| Reviewing a colleague's PR | Ask Mode | Understand code without risk of modifying |
| Creating a complete feature | Plan Mode -> Agent Mode | Plan first, execute after |
| Fixing an urgent bug | Agent Mode | Let the agent investigate and propose a fix |
| Low-priority issue | Coding Agent | Delegate and review when you have time |
| Learning a new language | Ask Mode + Completions | Questions + idiomatic suggestions |
| Refactoring a function | Inline Chat | Select, request refactoring, accept |
| Writing tests | Agent Mode | "Generate tests for all backend services" |
| Can't remember a git command | Copilot CLI | `gh copilot suggest "undo last commit"` |

---

## What We Learned -- Summary Table

| Mode | What It Does | Mario Analogy | When to Use |
|---|---|---|---|
| **Completions** | Suggests code as you type | Companion whispers tips | Day-to-day programming |
| **Chat** | Conversation with explanations and code | Yoshi at the campfire | Questions, brainstorming |
| **Inline Chat** | Improves selected snippet | Points at block and improves | Refactoring specific code |
| **Ask Mode** | Responds WITHOUT modifying anything | Toad's Hint House | Understand, learn, investigate |
| **Plan Mode** | Shows plan before executing | Complete level map | Planning large features |
| **Agent Mode** | Executes complex tasks in the IDE | Yoshi plays WITH you | Creating features, fixing bugs |
| **Coding Agent** | Resolves issues and opens PRs solo | Yoshi on a solo mission | Well-defined issues |
| **GitHub.com** | Assistant in the browser | Companion on the world map | Navigating, reviewing, summarizing |
| **CLI** | Assistant in the terminal | Companion in the command room | Terminal commands |

---

## References

| Resource | Type | Link |
|---|---|---|
| GitHub Copilot Official Documentation | Documentation | https://docs.github.com/copilot |
| Copilot Chat in VS Code | Tutorial | https://code.visualstudio.com/docs/copilot/copilot-chat |
| GitHub Copilot CLI | Documentation | https://github.com/github/copilot-cli |
| Copilot Adventures | Hands-on labs | https://github.com/microsoft/CopilotAdventures |
| GitHub Skills | Platform | https://learn.github.com |
| Copilot for Business | Documentation | https://docs.github.com/copilot/copilot-business |
| VS Code Copilot Agent Mode | Docs | https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode |
| GitHub Blog -- Copilot Updates | Blog | https://github.blog/ai-and-ml/github-copilot/ |
| Awesome Copilot | Curated list | https://github.com/github/awesome-copilot |

---

*Level 5-3 complete! You now know ALL Copilot modes -- from whispers to an autonomous army. Remember: Copilot is your companion, not your substitute. The better you communicate with it, the better the results. In the next level, we'll understand what an AI Agent is in depth!*
