---
title: "Level 6-8 -- Wise Coins: How to Save Tokens in GitHub Copilot"
description: "Complete guide to token optimization in GitHub Copilot, covering context management, chat, completions, agent mode, enterprise governance, and ROI metrics -- all with Super Mario Bros. analogies."
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - token-optimization
  - github-copilot
  - context-management
  - enterprise-governance
  - roi
  - world-6
  - mario
---

# Level 6-8 -- Wise Coins: How to Save Tokens in GitHub Copilot

---

## Change Log

| Version | Date       | Author       | Description                          |
|---------|------------|-------------|--------------------------------------|
| 1.0.0   | 2026-03-18 | Paula Silva  | Initial creation with Mario analogies |

---

## Table of Contents

- [Prologue: The Mushroom Kingdom's Coin Budget](#prologue-the-mushroom-kingdoms-coin-budget)
- [1. What Are Tokens?](#1-what-are-tokens)
  - [1.1 Tokens as Mario's Coins](#11-tokens-as-marios-coins)
  - [1.2 How Tokenization Works](#12-how-tokenization-works)
  - [1.3 The Context Window: The Size of the Coin Bag](#13-the-context-window-the-size-of-the-coin-bag)
  - [1.4 Table: Models and Their Coin Limits](#14-table-models-and-their-coin-limits)
- [2. Context Management in VS Code](#2-context-management-in-vs-code)
  - [2.1 The Player's Inventory: What Copilot Sees](#21-the-players-inventory-what-copilot-sees)
  - [2.2 Open Tabs = Equipped Items](#22-open-tabs--equipped-items)
  - [2.3 Relevant Files vs Noise](#23-relevant-files-vs-noise)
  - [2.4 The Power of .github/copilot-instructions.md](#24-the-power-of-githubcopilot-instructionsmd)
  - [2.5 Workspace Indexing: The Complete Level Map](#25-workspace-indexing-the-complete-level-map)
  - [2.6 Practice: Organizing Your Inventory](#26-practice-organizing-your-inventory)
- [3. Chat Optimization](#3-chat-optimization)
  - [3.1 Wasteful Prompts vs Efficient Prompts](#31-wasteful-prompts-vs-efficient-prompts)
  - [3.2 The Multi-Coin Block Rule](#32-the-multi-coin-block-rule)
  - [3.3 Chat Variables: Warp Pipe Shortcuts](#33-chat-variables-warp-pipe-shortcuts)
  - [3.4 Conversation History: The Player's Memory](#34-conversation-history-the-players-memory)
  - [3.5 When to Start a New Conversation](#35-when-to-start-a-new-conversation)
  - [3.6 Table: Approximate Cost per Interaction Type](#36-table-approximate-cost-per-interaction-type)
- [4. Completions Optimization (Inline)](#4-completions-optimization-inline)
  - [4.1 The Intelligent Auto-Complete](#41-the-intelligent-auto-complete)
  - [4.2 Completions Context: Mario's Field of Vision](#42-completions-context-marios-field-of-vision)
  - [4.3 Comments as Guides: Level Signposts](#43-comments-as-guides-level-signposts)
  - [4.4 Naming Conventions: Names That Tell Stories](#44-naming-conventions-names-that-tell-stories)
  - [4.5 Practice: Maximizing Completions with Minimum Tokens](#45-practice-maximizing-completions-with-minimum-tokens)
- [5. Efficiency in Agent Mode](#5-efficiency-in-agent-mode)
  - [5.1 Agent Mode: Yoshi on Autopilot -- Powerful but Expensive](#51-agent-mode-yoshi-on-autopilot--powerful-but-expensive)
  - [5.2 The Anatomy of an Agent Mode Session](#52-the-anatomy-of-an-agent-mode-session)
  - [5.3 Strategies to Reduce Agent Mode Cost](#53-strategies-to-reduce-agent-mode-cost)
  - [5.4 Agent Mode vs Ask Mode vs Completions: When to Use Each](#54-agent-mode-vs-ask-mode-vs-completions-when-to-use-each)
  - [5.5 Background Agents and Token Consumption](#55-background-agents-and-token-consumption)
  - [5.6 Table: Relative Cost by Mode](#56-table-relative-cost-by-mode)
- [6. Enterprise Governance](#6-enterprise-governance)
  - [6.1 The King Must Control the Treasury](#61-the-king-must-control-the-treasury)
  - [6.2 Usage Policies: Tournament Rules](#62-usage-policies-tournament-rules)
  - [6.3 Access Controls and Permissions](#63-access-controls-and-permissions)
  - [6.4 Consumption Monitoring: The Game Scoreboard](#64-consumption-monitoring-the-game-scoreboard)
  - [6.5 Content Exclusions: Forbidden Map Areas](#65-content-exclusions-forbidden-map-areas)
  - [6.6 Audit Logs: The Match Replay](#66-audit-logs-the-match-replay)
  - [6.7 Table: Available Enterprise Controls](#67-table-available-enterprise-controls)
- [7. Model Selection](#7-model-selection)
  - [7.1 Each Level Calls for a Different Power-Up](#71-each-level-calls-for-a-different-power-up)
  - [7.2 Models Available in Copilot](#72-models-available-in-copilot)
  - [7.3 Cost vs Capability: The Decision Matrix](#73-cost-vs-capability-the-decision-matrix)
  - [7.4 When to Use Each Model](#74-when-to-use-each-model)
  - [7.5 Multi-Model Strategy: Combining Power-Ups](#75-multi-model-strategy-combining-power-ups)
- [8. ROI Metrics](#8-roi-metrics)
  - [8.1 Measuring Returns: How Many Coins Did You Save?](#81-measuring-returns-how-many-coins-did-you-save)
  - [8.2 Productivity Metrics](#82-productivity-metrics)
  - [8.3 Quality Metrics](#83-quality-metrics)
  - [8.4 Cost Metrics](#84-cost-metrics)
  - [8.5 The Copilot Dashboard: Your Real-Time Scoreboard](#85-the-copilot-dashboard-your-real-time-scoreboard)
  - [8.6 Calculating ROI in Practice](#86-calculating-roi-in-practice)
  - [8.7 Table: Complete ROI Framework](#87-table-complete-roi-framework)
- [9. Practical Guide: 10 Golden Rules to Save Tokens](#9-practical-guide-10-golden-rules-to-save-tokens)
- [10. Final Summary Table](#10-final-summary-table)
- [References](#references)

---

## Prologue: The Mushroom Kingdom's Coin Budget

Sofia had learned to master agents, create skills, define instructions, use reusable prompts, configure hooks, connect tools via MCP, and even orchestrate multiple agents in harmony. But there was a secret that experienced Mushroom Kingdom players knew well: **coins aren't infinite**.

In Super Mario, each level has a limited number of coins. A novice player runs through the entire level, picking up 1 coin here, 1 coin there -- spending time and energy to accumulate loose change. The experienced player, however, knows where the **multi-coin blocks** are -- those blocks that, when hit repeatedly, release 5, 10, 15 coins at once. The master player knows about the **invisible blocks** and the **secret rooms** full of coins.

Tokens in GitHub Copilot work exactly the same way. Each interaction consumes tokens -- your digital coins. A wasteful prompt is like running through the level picking up 1 coin at a time. An optimized prompt is like finding the multi-coin block. And this chapter will teach you to be the player who **always finds the secret rooms**.

*"Coins aren't infinite, Sofia. But with wisdom, 100 coins are worth more than 1,000."*

---

## 1. What Are Tokens?

### 1.1 Tokens as Mario's Coins

In the digital Mushroom Kingdom of GitHub Copilot, **tokens are the coins** that fuel all the magic. Just as Mario needs coins to buy power-ups, Copilot needs tokens to process your requests.

A **token** is the smallest unit of text that a language model processes. It's not exactly a word -- it's more like a "linguistic LEGO piece". Examples:

```
"Development"     = 3-4 tokens (the model breaks it into pieces)
"Dev"             = 1 token (short enough to be a single piece)
"Hello World"     = 2 tokens
"function getData() { return fetch('/api') }" = ~12 tokens
```

**The perfect analogy**: Imagine each token as a Mario coin. When you ask Copilot a question, you are:

1. **Paying INPUT coins** (your prompt + context) -- the coins you put into the block
2. **Receiving OUTPUT coins** (Copilot's response) -- the coins that come out of the block

The longer your prompt, the more input coins. The longer the response, the more output coins. **Both count toward your budget.**

### 1.2 How Tokenization Works

The tokenization process is like the game transforming the scenery into blocks:

```
Original text:      "Create a function that calculates BMI"
                          |
                     [Tokenizer]
                          |
Resulting tokens:    ["Create", " a", " function", " that",
                      " calculates", " BM", "I"]
                          |
                    Total: ~7 tokens
```

**Practical rules** for estimating tokens:

| Language   | General Rule                           | Example                    |
|-----------|----------------------------------------|----------------------------|
| English   | 1 token ~ 4 characters / 0.75 words   | "Hello world" ~ 2 tokens   |
| Portuguese | 1 token ~ 3 characters (more expensive!) | "Ola mundo" ~ 3-4 tokens |
| Code      | 1 token ~ 3-4 characters               | `console.log()` ~ 4 tokens |
| JSON      | Extra tokens for formatting            | `{"key": "value"}` ~ 7 tokens |

**Note**: Portuguese consumes **more tokens** than English for the same content. This happens because models were predominantly trained in English, so Portuguese words are "broken" into more pieces. It's as if Brazilian coins were worth less in the Mushroom Kingdom -- you need more coins to buy the same item.

### 1.3 The Context Window: The Size of the Coin Bag

Each model has a **context window** -- the maximum number of tokens it can process at once. Think of it as the size of Mario's coin bag:

```
+--------------------------------------------------+
|  CONTEXT WINDOW = COIN BAG                       |
|                                                  |
|  [User prompt]          -> Input coins           |
|  [File context]         -> Input coins           |
|  [System instructions]  -> Input coins           |
|  [Conversation history] -> Input coins           |
|  [Model response]       -> Output coins          |
|                                                  |
|  EVERYTHING together must FIT in the bag!        |
+--------------------------------------------------+
```

If the bag is full, the model **discards** the oldest information -- like coins falling through a hole when the bag overflows. That's why very long conversations lose context: the first messages "fall out" to make room.

### 1.4 Table: Models and Their Coin Limits

| Model           | Context Window | Mario Analogy                                    |
|-----------------|---------------|--------------------------------------------------|
| GPT-4o          | 128K tokens   | Large bag -- fits an entire World's map          |
| GPT-4o mini     | 128K tokens   | Large bag but cheaper -- bronze coins            |
| Claude 3.5 Sonnet| 200K tokens  | Huge bag -- fits the map of two Worlds           |
| Claude Opus 4   | 200K+ tokens  | Explorer's backpack -- the largest available     |
| o1              | 128K tokens   | Special bag -- coins are worth more (reasoning)  |
| Gemini 2.0      | 1M+ tokens    | Treasure chest -- fits almost everything         |

---

## 2. Context Management in VS Code

### 2.1 The Player's Inventory: What Copilot Sees

When you open VS Code and use Copilot, it doesn't see **everything** on your computer. It only sees what's in your **active inventory** -- just as Mario can only use items that are equipped, not those stored in the chest.

The context Copilot receives includes:

```
+-----------------------------------------------+
|  COPILOT'S INVENTORY (Context Window)          |
|                                               |
|  1. [Current file]       -- Main item         |
|  2. [Open tabs]          -- Equipped items    |
|  3. [Imports/deps]       -- Related items     |
|  4. [copilot-instructions] -- Game rules      |
|  5. [Chat history]       -- Recent memory     |
|  6. [Workspace index]    -- Level map         |
|                                               |
|  TOTAL: Everything combined must fit!         |
+-----------------------------------------------+
```

### 2.2 Open Tabs = Equipped Items

Each open tab in VS Code is an item that Copilot **can** consult as context. But beware -- more open tabs means more tokens consumed to provide context to the model.

**The novice player's mistake**: Opening 30 tabs and expecting Copilot to "understand everything." This is like carrying 30 items in your inventory -- you become heavy and slow.

**The experienced player's strategy**:

```
WRONG (30 tabs, overloaded inventory):
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | ...
+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+
  ^-- Copilot confused, polluted context, wasted tokens

RIGHT (3-5 relevant tabs):
+----------+----------+----------+
| Model.ts | Service  | Test.ts  |
+----------+----------+----------+
  ^-- Copilot focused, clean context, optimized tokens
```

**Practical rule**: Keep only the **3 to 5 tabs** directly related to what you're doing open. Close everything else.

### 2.3 Relevant Files vs Noise

Copilot uses heuristics to decide which files are relevant. You can help it by being explicit:

**Technique 1 -- Direct mentions in chat**:
```
@workspace Look at the file src/models/User.ts and create a
similar service for Product
```

**Technique 2 -- Open reference files before asking**:
If you want Copilot to follow a pattern, open a file that exemplifies that pattern before making your request.

**Technique 3 -- Use `#file` in chat**:
```
Refactor #file:src/services/auth.ts following the pattern
of #file:src/services/user.ts
```

This is like pointing Mario to exactly which block to hit, instead of letting him run around the whole level searching.

### 2.4 The Power of .github/copilot-instructions.md

The `copilot-instructions.md` file is your project's **gravity** -- always active, always present, with no significant additional cost per interaction. It defines rules that Copilot follows automatically:

```markdown
# Copilot Instructions

## Code Style
- Use TypeScript strict mode
- Prefer interfaces over types
- Pure functions whenever possible

## Project Patterns
- Repository Pattern for data access
- Services for business logic
- Thin Controllers (routing only)

## Conventions
- English names for code
- Comments in Portuguese
- Commits following Conventional Commits
```

**Why it saves tokens**: Without this file, you'd need to repeat these instructions in EVERY prompt. With it, Copilot already knows. It's like gravity -- you don't need to say "apply gravity" in every level.

**Real cost**: The file is included as context in every interaction, but if it's concise (200-500 words), the cost is minimal compared to manually repeating instructions in each prompt.

### 2.5 Workspace Indexing: The Complete Level Map

Copilot indexes the entire workspace to understand the project structure. This costs tokens initially but saves tokens in the long run:

```
WITHOUT INDEXING:
  You: "Where is the authentication function?"
  Copilot: "I don't know. Give me more context." (wasted tokens)
  You: "It's in src/services/auth.ts, function validateToken"
  Copilot: "Now I understand. [response]" (duplicated tokens)

WITH INDEXING:
  You: "Where is the authentication function?"
  Copilot: "Found it in src/services/auth.ts, function
            validateToken. [complete response]" (optimized tokens)
```

It's like the difference between playing a level in the dark vs with the map revealed. The map costs coins to buy, but saves much more by avoiding wrong paths.

### 2.6 Practice: Organizing Your Inventory

**Exercise -- Before and After**:

```
BEFORE (Disorganized inventory):
- 25 open tabs (15 irrelevant)
- No copilot-instructions.md
- Vague prompts: "fix this"
- Result: ~2000 tokens per interaction

AFTER (Optimized inventory):
- 4 open tabs (all relevant)
- copilot-instructions.md configured
- Specific prompts: "Add email validation
  in UserService.createUser, following the pattern of
  validatePhone that already exists"
- Result: ~800 tokens per interaction = 60% savings
```

---

## 3. Chat Optimization

### 3.1 Wasteful Prompts vs Efficient Prompts

The difference between a wasteful prompt and an efficient one is the same as running through the entire level picking up 1 coin at a time vs hitting the multi-coin block:

```
WASTEFUL (1 coin at a time):
  "What is a service?"
  "How do I create a service?"
  "Give me a service example"
  "Now adapt it to my project"
  "Now add validation"
  Total: 5 interactions, ~5000 tokens

EFFICIENT (Multi-coin block):
  "Create a ProductService in src/services/product.ts
   following the UserService pattern, with CRUD methods
   and required field validation (name, price).
   Use the ProductRepository."
  Total: 1 interaction, ~1500 tokens = 70% savings
```

### 3.2 The Multi-Coin Block Rule

To create efficient prompts, follow the **COIN** pattern:

| Letter | Meaning | Example |
|--------|---------|---------|
| **C** | **Context** -- Where am I in the game | "In the file src/services/" |
| **O** | **Objective** -- What I want | "Create a product service" |
| **I** | **Input/Reference** -- Examples to follow | "Following the UserService pattern" |
| **N** | **Nuances** -- Specific details | "With validation, TypeScript strict, no any" |

**Complete example using COIN**:

```
[C] I'm working on the TodoApp backend in TypeScript.
[O] I need to create a POST /api/products endpoint that
    accepts name, price, and category.
[I] Follow the pattern of the POST /api/todos endpoint that
    already exists in src/routes/todos.ts.
[N] Add Zod validation, return 201 with the created product,
    and 400 if validation fails. Don't use 'any'.
```

### 3.3 Chat Variables: Warp Pipe Shortcuts

VS Code offers special variables in Copilot's chat that function as Warp Pipes -- shortcuts that save tokens:

| Variable | What it does | Savings |
|----------|-------------|---------|
| `#file:path` | Includes file content | Avoids copy/paste |
| `#selection` | Includes selected text | Focuses on the exact snippet |
| `#terminalLastCommand` | Includes last command and output | Avoids describing errors |
| `@workspace` | Searches the entire project | Avoids "where is X?" |
| `#codebase` | References the indexed codebase | Broad and efficient context |

**Savings example**:

```
WITHOUT variables (wasteful):
  "I have this error: TypeError: Cannot read properties
   of undefined (reading 'map') in the file
   src/components/TodoList.tsx on line 42 where I
   do todos.map(todo => ...) and todos comes from
   the useTodos hook that returns..."
  (~80 tokens just to describe the problem)

WITH variables (efficient):
  "Fix the error in #selection from #file:src/components/TodoList.tsx.
   The #terminalLastCommand shows the stack trace."
  (~25 tokens for the same problem = 70% savings)
```

### 3.4 Conversation History: The Player's Memory

Every previous message in the conversation is included as context in the next message. This means long conversations become **exponentially more expensive**:

```
Message 1:  [prompt 1] + [response 1]                    = 500 tokens
Message 2:  [prompt 1] + [response 1] + [prompt 2] + [response 2] = 1500 tokens
Message 3:  [all previous] + [prompt 3] + [response 3]   = 3000 tokens
Message 10: [EVERYTHING]                                   = 15000+ tokens
```

It's like a snowball rolling downhill -- starts small and becomes enormous.

### 3.5 When to Start a New Conversation

| Situation | Action | Mario Analogy |
|-----------|--------|---------------|
| Changed topic | New conversation | Started new level -- inventory reset |
| Conversation > 10 messages | New conversation with summary | Level too long -- use the Warp Zone |
| Response got confused | New conversation reformulated | Game Over -- restart the level |
| Same topic, refining | Continue the conversation | Same level -- keep the power-ups |

**Advanced technique -- Transition Summary**:

```
"Summarize our previous conversation about the ProductService
in 3 bullet points and then continue implementing the
search-by-category method."
```

This compresses 10 messages into 1 paragraph -- like a Warp Pipe that takes you straight to where you left off.

### 3.6 Table: Approximate Cost per Interaction Type

| Interaction Type | Typical Tokens (Input) | Typical Tokens (Output) | Analogy |
|-----------------|------------------------|------------------------|---------|
| Inline completion | 500-2000 | 50-200 | Individual coin |
| Simple chat | 1000-3000 | 200-1000 | Coin block |
| Chat with `#file` | 2000-5000 | 500-2000 | Multi-coin block |
| Chat with `@workspace` | 3000-8000 | 500-3000 | Secret coin room |
| Agent Mode (session) | 10000-50000 | 5000-20000 | Entire bonus level |

---

## 4. Completions Optimization (Inline)

### 4.1 The Intelligent Auto-Complete

Completions are the suggestions that appear while you type -- the gray ghost that completes your code. They are the **cheapest** way to use Copilot because they process little context and generate little text.

```
You type:       function calculateTotalPrice(items
Copilot suggests: : CartItem[]): number {
                  return items.reduce((total, item) =>
                    total + item.price * item.quantity, 0);
                }
```

**Cost**: Low. Completions use a reduced context window (usually the current file + nearby open tabs). They're like coins that appear along the path -- you pick them up without detour.

### 4.2 Completions Context: Mario's Field of Vision

Copilot for completions mainly looks at:

```
+------------------------------------------+
|  FIELD OF VISION (Completion Context)    |
|                                          |
|  1. Lines ABOVE the cursor (primary)    |
|  2. Lines BELOW the cursor (secondary)  |
|  3. Related open tabs                   |
|  4. File imports                        |
|  5. Types and interfaces                |
|                                          |
|  DOES NOT look at: Closed files, distant |
|  folders, terminal, previous chat        |
+------------------------------------------+
```

**Optimization**: Place definitions and types **before** the code that uses them. This maximizes available context at no extra cost.

### 4.3 Comments as Guides: Level Signposts

Comments before code function as signposts that guide Copilot:

```typescript
// BAD: No comment (Copilot guesses)
function process(data) {
  // Copilot: ??? (may generate anything)
}

// GOOD: With a guiding comment (Copilot knows what to do)
// Validates required product fields (name, price > 0)
// Returns { valid: boolean, errors: string[] }
function validateProduct(data: ProductInput): ValidationResult {
  // Copilot: Generates exactly what was described
}
```

**Cost of a comment**: ~10-20 tokens. **Savings from generating correct code on the first try**: ~500-2000 tokens (avoids corrections in chat).

### 4.4 Naming Conventions: Names That Tell Stories

Descriptive names are **free** context -- the model understands the intent from the name:

```typescript
// BAD: Generic names = lost Copilot = more corrections later
function proc(d: any): any { }
const x = getData();

// GOOD: Descriptive names = accurate Copilot = zero corrections
function validateAndTransformUserInput(rawInput: UserFormData): ValidatedUser { }
const activeSubscriptions = getActiveSubscriptionsByPlan(planId);
```

**Cost**: Zero extra tokens. **Savings**: Enormous -- good names are like signs that guide Copilot down the right path without spending additional coins.

### 4.5 Practice: Maximizing Completions with Minimum Tokens

**Recipe for optimized completions**:

1. **Open the reference files** (types, interfaces, related services)
2. **Write the function signature** with explicit types
3. **Add a comment** of 1-2 lines describing the behavior
4. **Start typing** and let Copilot complete
5. **Accept with Tab** if correct, **reject and refine the comment** if not

```
Total cost of this approach:  ~300 tokens
Cost of asking in chat:       ~2000 tokens
Savings:                      ~85%
```

---

## 5. Efficiency in Agent Mode

### 5.1 Agent Mode: Yoshi on Autopilot -- Powerful but Expensive

Agent Mode is like putting Yoshi on autopilot -- he runs, jumps, eats enemies, and completes the level for you. But every action Yoshi takes consumes coins. And he takes **many** actions:

```
TYPICAL AGENT MODE CYCLE:
  1. Reads your prompt                      (~500 tokens)
  2. Analyzes the workspace                 (~2000 tokens)
  3. Reads relevant files                   (~3000 tokens)
  4. Plans the solution                     (~1000 tokens)
  5. Generates code                         (~2000 tokens)
  6. Checks for errors                      (~1000 tokens)
  7. Adjusts if necessary                   (~2000 tokens)
  8. Runs tests (if configured)             (~1500 tokens)
  9. Presents result                        (~500 tokens)
                                    _______________
                          TOTAL:    ~13500 tokens (1 task)
```

Compare with an inline completion that costs ~300 tokens. Agent Mode is **45x more expensive** per interaction.

### 5.2 The Anatomy of an Agent Mode Session

Understanding what happens "behind the curtain" helps optimize:

```
+--------------------------------------------------+
|  AGENT MODE -- Internal Flow                     |
|                                                  |
|  [Your Prompt]                                   |
|       |                                          |
|       v                                          |
|  [System Prompt + Instructions]  <-- Fixed tokens|
|       |                                          |
|       v                                          |
|  [Workspace Analysis]  <-- Variable tokens       |
|       |                                          |
|       v                                          |
|  [File Reading]  <-- Variable tokens             |
|       |                                          |
|       v                                          |
|  [Planning]  <-- Reasoning tokens                |
|       |                                          |
|       v                                          |
|  [Execution: Edit/Create/Delete]                 |
|       |                                          |
|       v                                          |
|  [Verification and Loop]  <-- May repeat N times!|
|       |                                          |
|       v                                          |
|  [Final Result]                                  |
+--------------------------------------------------+
```

The critical point is the **verification loop** -- if Agent Mode finds errors, it tries to fix them automatically, and each attempt consumes more tokens. A loop of 5 attempts can turn a 13,000-token task into 50,000+.

### 5.3 Strategies to Reduce Agent Mode Cost

**Strategy 1 -- Be Specific (Avoid Loops)**:

```
BAD (vague -- Agent Mode will explore a lot):
  "Improve the backend code"
  -> Agent reads EVERYTHING, tries EVERYTHING, spends MANY coins

GOOD (specific -- Agent Mode goes straight to the point):
  "In the file src/services/todo.ts, add try/catch error
   handling to the create and update methods,
   logging errors with winston and returning error 500."
  -> Agent reads 2 files, makes 2 changes, spends FEW coins
```

**Strategy 2 -- Provide Pre-Digested Context**:

```
EXPENSIVE (Agent Mode discovers on its own):
  "Write tests for the TodoService"
  -> Agent needs to: read the service, understand the structure,
     discover the test framework, find examples...

CHEAP (you provided the context):
  "Create Jest tests for TodoService (#file:src/services/todo.ts)
   following the pattern of #file:src/services/__tests__/user.test.ts.
   Test the create, getAll, and delete methods."
  -> Agent already knows EVERYTHING it needs, goes straight.
```

**Strategy 3 -- Break Into Smaller Tasks**:

```
EXPENSIVE (one mega-task):
  "Create a complete authentication module with login,
   registration, password reset, JWT, middleware, tests,
   and documentation."
  -> One ENORMOUS session that may fail midway

CHEAP (several smaller tasks):
  Session 1: "Create the User model with email and passwordHash fields"
  Session 2: "Create the AuthService with login and register"
  Session 3: "Create the JWT authentication middleware"
  Session 4: "Create tests for the AuthService"
  -> 4 smaller sessions, more controllable, lower total
```

### 5.4 Agent Mode vs Ask Mode vs Completions: When to Use Each

| Task | Recommended Mode | Relative Cost | Mario Analogy |
|------|-----------------|--------------|---------------|
| Complete a line | Completion | 1x (coin) | Coin on the path |
| Understand a concept | Ask Mode | 3x (block) | Toad's Hint House |
| Plan a feature | Ask/Plan Mode | 5x (blocks) | Level map |
| Implement simple feature | Agent Mode | 15x (room) | Yoshi helping |
| Refactor complex module | Agent Mode | 30x (level) | Yoshi on autopilot |
| Create module from scratch | Agent Mode | 50x (world) | Entire bonus level |

**Golden rule**: Use the **cheapest** mode that solves the problem. Don't send Yoshi to do what a simple coin on the path can solve.

### 5.5 Background Agents and Token Consumption

Background Agents (Coding Agents) run independently, usually on GitHub. They consume tokens without you seeing in real time -- like an NPC working in a distant castle.

**Precautions**:

- Define a **clear scope** in the issue before triggering the agent
- Use specific **exit criteria** to avoid infinite loops
- Monitor consumption on the GitHub dashboard
- Prefer **well-defined and isolated** tasks

```
GOOD for Background Agent:
  "Update all dependencies in package.json to
   the latest versions, run the tests, and create
   a PR with the changes."

BAD for Background Agent:
  "Improve the project's code quality."
  (Too vague -- agent may run indefinitely)
```

### 5.6 Table: Relative Cost by Mode

| Mode | Tokens per Interaction | Relative Cost | Best For |
|------|----------------------|--------------|----------|
| Inline Completion | 300-2000 | 1x | Completing lines and functions |
| Chat Ask Mode | 1000-5000 | 3-5x | Questions and explanations |
| Chat Edit Mode | 2000-8000 | 5-10x | Targeted edits |
| Agent Mode (simple) | 5000-15000 | 10-20x | Small features |
| Agent Mode (complex) | 15000-50000 | 30-60x | Large features |
| Background Agent | 50000-200000 | 80-200x | Autonomous tasks |

---

## 6. Enterprise Governance

### 6.1 The King Must Control the Treasury

In a company, tokens are like the coins of the Mushroom Kingdom's Royal Treasury. The King (administrator) must ensure that:

- No one spends too many coins
- Coins are used on missions that matter
- Records exist for every expenditure
- Forbidden map areas are blocked

### 6.2 Usage Policies: Tournament Rules

GitHub Copilot Enterprise and Business allow configuring policies that function as tournament rules:

```
+--------------------------------------------------+
|  ENTERPRISE POLICIES                             |
|                                                  |
|  [x] Enable Copilot Chat                        |
|  [x] Enable Completions                         |
|  [x] Enable Agent Mode                          |
|  [ ] Allow third-party models                    |
|  [x] Require review of generated code            |
|  [x] Block on critical private repositories      |
|                                                  |
|  Allowed models: GPT-4o, Claude Sonnet           |
|  Blocked models: (none non-audited)              |
+--------------------------------------------------+
```

### 6.3 Access Controls and Permissions

| Level | Who Controls | What They Configure | Analogy |
|-------|-------------|--------------------|---------|
| Organization | Org admin | Global policies, allowed models | King of the Mushroom Kingdom |
| Team | Team lead | Team-level adjustments | Squad captain |
| Repository | Maintainer | Repo-specific rules | Castle guardian |
| Individual | Developer | Personal preferences | Player's play style |

### 6.4 Consumption Monitoring: The Game Scoreboard

GitHub provides Copilot consumption dashboards that function as the game scoreboard:

**Available metrics**:

- **Accepted vs rejected suggestions** -- Copilot's accuracy rate
- **Lines of code generated** -- Productivity
- **Active users** -- Who's playing
- **Most used languages** -- Which worlds are most popular
- **Trends over time** -- Improving or declining

```
EXAMPLE DASHBOARD:
+--------------------------------------------------+
|  COPILOT USAGE -- Mushroom Kingdom Stats         |
|                                                  |
|  Active users:      42 / 50 licenses             |
|  Acceptance rate:   35%                          |
|  Lines generated:   12,450 this week             |
|  Most used mode:    Completions (72%)            |
|  Top language:      TypeScript (45%)             |
|                                                  |
|  [==========----------] 35% acceptance rate      |
|  Target: 40%                                     |
+--------------------------------------------------+
```

### 6.5 Content Exclusions: Forbidden Map Areas

Content Exclusions allow blocking Copilot from accessing certain files or repositories:

```yaml
# .github/copilot-content-exclusions.yaml
exclusions:
  - path: "**/*.env"           # Secrets -- forbidden area!
  - path: "**/secrets/**"      # Treasure vault -- no one enters
  - path: "**/legacy/**"       # Abandoned castle -- don't copy this
  - repo: "company/compliance" # Compliance repo -- humans only
```

It's like marking map areas as "forbidden" -- Mario simply can't enter there.

### 6.6 Audit Logs: The Match Replay

Audit logs record all interactions with Copilot:

| Event | What It Records | What It's For |
|-------|----------------|--------------|
| `copilot.suggestion_accepted` | Accepted suggestion | Measure adoption |
| `copilot.suggestion_rejected` | Rejected suggestion | Identify problems |
| `copilot.chat_interaction` | Chat usage | Measure engagement |
| `copilot.agent_session` | Agent mode session | Monitor high cost |

### 6.7 Table: Available Enterprise Controls

| Control | Copilot Individual | Copilot Business | Copilot Enterprise |
|---------|-------------------|-------------------|-------------------|
| Completions | Yes | Yes | Yes |
| Chat | Yes | Yes | Yes |
| Agent Mode | Yes | Yes | Yes |
| Content Exclusions | No | Yes | Yes |
| Audit Logs | No | Yes | Yes |
| Usage Metrics | Basic | Advanced | Complete |
| Knowledge Bases | No | No | Yes |
| Org Policies | No | Yes | Yes |
| Model Fine-tuning | No | No | Yes |
| IP Indemnity | No | Yes | Yes |

---

## 7. Model Selection

### 7.1 Each Level Calls for a Different Power-Up

You don't use the Super Star (invincibility) to pick up a single coin. Likewise, you don't need the most expensive model to complete a line of code.

Model selection is one of the **most impactful** strategies for optimizing tokens, because different models have dramatically different costs for the same result.

### 7.2 Models Available in Copilot

GitHub Copilot allows selecting between different models in chat:

| Model | Strength | Weakness | Relative Cost |
|-------|---------|----------|--------------|
| GPT-4o | Balanced, good at everything | May be overkill for simple tasks | Medium |
| GPT-4o mini | Fast and cheap | Less accurate on complex tasks | Low |
| Claude 3.5 Sonnet | Great for long code | More expensive in input tokens | Medium-High |
| Claude Opus 4 | Advanced reasoning | Slower and more expensive | High |
| o1 | Superior logical reasoning | Very expensive, very slow | Very High |
| o3-mini | Good and affordable reasoning | Less creative | Medium |

### 7.3 Cost vs Capability: The Decision Matrix

```
COST
  ^
  |  [o1]              <- Final boss (only when truly needed)
  |
  |  [Claude Opus 4]   <- Bowser's Castle (complex tasks)
  |
  |  [Claude Sonnet]   <- Intermediate levels
  |  [GPT-4o]
  |
  |  [o3-mini]         <- Levels with reasoning but limited budget
  |
  |  [GPT-4o mini]     <- Green Plains (day to day)
  |
  +---------------------------------> CAPABILITY
```

### 7.4 When to Use Each Model

| Task | Recommended Model | Justification |
|------|------------------|--------------|
| Day-to-day completions | GPT-4o mini / Default | Fast, cheap, sufficient |
| Simple chat questions | GPT-4o mini | Doesn't need deep reasoning |
| Generate complex code | GPT-4o / Claude Sonnet | Good cost-quality balance |
| Large refactoring | Claude Sonnet / Opus | Wide context window |
| Complex debugging | o1 / o3-mini | Superior logical reasoning |
| Architecture review | Claude Opus / o1 | Deep analysis justifies the cost |
| Agent Mode features | GPT-4o / Claude Sonnet | Multiple interactions -- price matters |

### 7.5 Multi-Model Strategy: Combining Power-Ups

The smartest strategy is using different models for different tasks -- like using different power-ups on each level:

```
MULTI-MODEL STRATEGY:

Phase of the Day    Model            Cost    Analogy
------------------------------------------------------------
Completions         GPT-4o mini     $       Coins on the path
Quick chat          GPT-4o mini     $       Toad's Hint House
New feature         GPT-4o          $$      Super Mushroom
Refactoring         Claude Sonnet   $$$     Fire Flower
Impossible bug      o1              $$$$    Super Star
Architecture review Claude Opus     $$$$    Cape Feather

Weighted average: $$ (instead of $$$ if using GPT-4o for everything)
```

---

## 8. ROI Metrics

### 8.1 Measuring Returns: How Many Coins Did You Save?

ROI (Return on Investment) for Copilot is simple to think about with the Mario analogy: **how many more levels can you complete with the same number of coins?**

In practice, ROI = (Value Generated - Cost) / Cost

### 8.2 Productivity Metrics

| Metric | How to Measure | Typical Target | Analogy |
|--------|---------------|---------------|---------|
| Accepted suggestions (%) | Copilot Dashboard | >30% | Power-up accuracy rate |
| Lines generated per week | Copilot Dashboard | Increasing | Coins collected per level |
| Development time | Before/after comparison | -30% | Time to complete the level |
| PRs per week | GitHub metrics | +20% | Levels completed per session |
| Time to first suggestion | Observation | <1s | Companion's reaction time |

### 8.3 Quality Metrics

| Metric | How to Measure | Typical Target | Analogy |
|--------|---------------|---------------|---------|
| Bugs in production | Issue tracker | Decreasing | Game Overs per World |
| Code review cycles | PR metrics | -25% | Attempts to beat the boss |
| Test coverage | CI/CD reports | >80% | Percentage of map explored |
| Security issues | GHAS reports | Decreasing | Undetected traps |

### 8.4 Cost Metrics

| Metric | How to Measure | Consideration |
|--------|---------------|--------------|
| Cost per license/month | GitHub invoice | $19 (Business) or $39 (Enterprise) |
| Cost per dev hour saved | (License / Hours saved) | Target: <$5/hour |
| Cost avoided in bugs | (Bugs avoided x Average fix cost) | Usually 10-50x the license cost |
| Additional token cost | API usage (if applicable) | Monitor spikes |

### 8.5 The Copilot Dashboard: Your Real-Time Scoreboard

GitHub provides native metrics at **github.com/organizations/{org}/settings/copilot/usage**:

```
+--------------------------------------------------+
|  COPILOT ROI DASHBOARD                           |
|  Mushroom Kingdom Metrics                        |
|                                                  |
|  PRODUCTIVITY                                    |
|  [========--------] 42% acceptance rate          |
|  [==========------] 65% of devs active           |
|  12,450 lines generated this week                |
|                                                  |
|  ESTIMATED SAVINGS                               |
|  Hours saved: ~120h/week                         |
|  License cost: $1,950/month (50 devs)            |
|  Value generated: ~$12,000/month                 |
|  ROI: 515%                                       |
|                                                  |
+--------------------------------------------------+
```

### 8.6 Calculating ROI in Practice

**Simplified formula**:

```
ROI = ((Hours Saved x Cost/Hour) - License Cost)
      / License Cost x 100

Example:
  - 50 developers
  - Each saves 5h/week with Copilot
  - Average cost/hour: $50
  - License cost: $19/dev/month (Business)

  Monthly savings = 50 devs x 5h x 4 weeks x $50 = $50,000
  Monthly cost    = 50 devs x $19 = $950
  ROI             = ($50,000 - $950) / $950 x 100 = 5,163%
```

Even with conservative estimates (2h/week saved), the ROI is positive. Copilot pays for itself on the first day of use.

### 8.7 Table: Complete ROI Framework

| Dimension | Metric | Source | Frequency | Responsible |
|-----------|--------|--------|-----------|-------------|
| Adoption | % active users | GitHub Dashboard | Weekly | Admin |
| Adoption | Acceptance rate | GitHub Dashboard | Weekly | Admin |
| Productivity | PRs/week | GitHub metrics | Monthly | Eng Manager |
| Productivity | Cycle time | GitHub metrics | Monthly | Eng Manager |
| Quality | Bugs/sprint | Issue tracker | Sprint | QA Lead |
| Quality | Code coverage | CI/CD | Sprint | QA Lead |
| Cost | Cost/license | GitHub invoice | Monthly | Finance |
| Cost | Hours saved | Survey + metrics | Quarterly | Eng Manager |
| Security | Vulnerabilities | GHAS | Monthly | Security |
| Satisfaction | Dev NPS | Internal survey | Quarterly | People |

---

## 9. Practical Guide: 10 Golden Rules to Save Tokens

These are the 10 rules every Mushroom Kingdom player must follow:

### Rule 1 -- Close Unnecessary Tabs

```
BEFORE: 25 open tabs = overloaded inventory = wasted tokens
AFTER: 3-5 relevant tabs = clean inventory = optimized tokens
```

### Rule 2 -- Use copilot-instructions.md

Write the rules ONCE. Copilot follows them automatically in EVERY interaction. It's like setting gravity -- you don't need to repeat it.

### Rule 3 -- Prefer Completions for Simple Tasks

Completions cost 1/10 of chat and 1/50 of Agent Mode. For completing functions and lines of code, Tab is your best friend.

### Rule 4 -- Use the COIN Pattern for Prompts

**C**ontext + **O**bjective + **I**nput/Reference + **N**uances = efficient prompt that solves it on the first try.

### Rule 5 -- Start New Conversations Frequently

Long conversations become exponentially more expensive. Changed topic = new conversation. Started rambling = new conversation with summary.

### Rule 6 -- Use Chat Variables

`#file`, `#selection`, `@workspace` are Warp Pipes that save dozens of description tokens.

### Rule 7 -- Choose the Right Model for the Task

GPT-4o mini for day to day. GPT-4o for features. Claude for refactoring. o1 only when you truly need deep reasoning.

### Rule 8 -- Break Large Tasks Into Smaller Ones

A 50,000-token task can become 4 tasks of 8,000 tokens = 32,000 tokens total + more control.

### Rule 9 -- Write Descriptive Names

Good names are free context. `validateUserEmail` tells Copilot more than `check` without costing extra tokens.

### Rule 10 -- Monitor and Adjust

Use the GitHub dashboard to track acceptance rate. If it's below 30%, your prompts need improvement, not Copilot.

---

## 10. Final Summary Table

| Concept | Mario Analogy | Practical Tip |
|---------|--------------|--------------|
| Token | Mario's coin | Every interaction costs coins |
| Context Window | Coin bag | It has a limit -- don't fill it with junk |
| Completion | Coin on the path | Cheapest, use for simple things |
| Chat | Coin block | Medium cost, be specific |
| Agent Mode | Bonus level | High cost, use with strategy |
| Background Agent | NPC in a distant castle | Very expensive, define clear scope |
| copilot-instructions.md | Gravity | Configure once, works forever |
| Open tabs | Equipped items | Less is more -- 3 to 5 relevant ones |
| `#file`, `@workspace` | Warp Pipes | Shortcuts that save tokens |
| New conversation | Level reset | Long history = exponential cost |
| Right model | Right power-up | Don't use Star to pick up 1 coin |
| Dashboard | Game scoreboard | Monitor to improve |
| Content Exclusions | Forbidden areas | Block what shouldn't be accessed |
| COIN Pattern | Multi-coin block | Context + Objective + Input + Nuances |
| ROI | Coins invested vs earned | Copilot pays for itself on the first day |

---

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot) -- Official GitHub Copilot documentation
- [GitHub Copilot Trust Center](https://resources.github.com/copilot-trust-center/) -- Trust and privacy center
- [GitHub Copilot for Business](https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-business) -- Business plan
- [GitHub Copilot for Enterprise](https://docs.github.com/en/copilot/overview-of-github-copilot/about-github-copilot-enterprise) -- Enterprise plan
- [GitHub Copilot Metrics API](https://docs.github.com/en/rest/copilot/copilot-metrics) -- Metrics API
- [OpenAI Tokenizer](https://platform.openai.com/tokenizer) -- Token counting tool
- [Prompt Engineering Guide](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot) -- Prompt engineering guide
- [GitHub Copilot Content Exclusions](https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/configuring-content-exclusions-for-github-copilot) -- Content exclusions configuration
- [VS Code Copilot Settings](https://code.visualstudio.com/docs/copilot/overview) -- Copilot settings in VS Code
- [GitHub Copilot Workspace Indexing](https://docs.github.com/en/copilot/using-github-copilot/indexing-repositories-for-copilot-chat) -- Repository indexing

---

*"In the Mushroom Kingdom, coins are precious. Don't waste them running after 1 coin at a time. Find the multi-coin blocks, discover the secret rooms, and spend wisely. A wise player with 100 coins achieves more than a lost player with 1,000."*

*Level 6-8 complete. You now know how to spend coins like a professional.*

*Next: World 8 -- The Final Castle. Everything connects.*

---

<div align="center">

⬅️ [Previous: Level 6-7: Orchestration](6-7-orchestration.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 6-BOSS: Quick Reference](6-boss-quick-reference.md)

</div>
