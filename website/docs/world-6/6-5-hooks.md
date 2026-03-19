---
title: "Chapter 4E — Hooks / The ? Blocks — Automatic Triggers"
description: "How to configure Hooks to create automatic triggers in development, using Husky and commit conventions."
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "2.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-6", "hooks", "husky"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 2.0.0 | 2026-03-18 | Paula Silva | Mario Bros version — complete rewrite with Super Mario analogies |
| 1.0.0 | 2026-03-06 | Paula Silva | Original version with RPG analogies |

# Chapter 4E — Hooks
## The "?" Blocks — Automatic Triggers in Development

---

**Prepared for:** Sofia
**Version:** 2.0 — Mario Edition
**Author:** Paula Silva | Software Global Black Belt, Microsoft Americas
**Date:** March 2026
**Language:** English (translated from pt-BR)
**Collection:** Agentic DevOps

---

## TABLE OF CONTENTS

- Introduction — The Level of "?" Blocks
- What are Hooks
- Mario Analogy — The Smart "?" Blocks
- What can a Hook do?
- Events and Lifecycle
- Table of Events and Available Hooks
- Detailed Use Cases
- Structure of a Hook
- Project Architecture with Hooks
- Installation and Basic Configuration
- Example 1: Pre-commit Hook with Validation
- Example 2: Commit-msg Hook with Conventional Commits
- Example 3: Pre-push Hook with Tests
- package.json with Validation Scripts
- Hooks vs GitHub Actions
- Detailed Comparison
- When to Use Hooks?
- When to Use GitHub Actions?
- Ideal Flow — Hooks + GitHub Actions
- Practical Examples — Complete Code
- Best Practices and Troubleshooting
- Conclusion

---

## Introduction — The Level of "?" Blocks

Sofia entered the Level of "?" Blocks.

The entire level was full of them — golden blocks with question marks floating in the air, at different heights and positions. Some glowed intensely, others pulsed gently. Each one seemed to wait patiently until someone came along and hit it from below.

But there was something different about this level. The "?" Blocks were neither random nor dangerous. They were **smart**. Some released validation mushrooms that blocked incorrect paths. Others released automatic formatting coins, improving your code without you even asking. Some even triggered notification stars that alerted the entire team about your progress.

Sofia realized: these "?" Blocks weren't created to get in the way. They were protection, improvement, and automation systems. And this entire structure — this perfect coordination of events and actions — had a name: **Hooks**.

In this chapter, she will discover how Hooks work, when they fire, how to configure your own automatic "?" Blocks, and how to use them to protect and improve your code before it reaches the central repository.

> **A Hook is an automatic trigger that executes actions at specific moments in the development lifecycle. Just as a "?" Block fires when Mario hits it from below, a Hook fires when an event occurs.**

---

## What are Hooks

Hooks are automation mechanisms that intercept events in the development flow and execute automatic actions in response. Unlike manual actions that a developer consciously performs, Hooks operate silently, firing their functions when specific conditions are met.

Imagine a developer working in their repository. Every action they take — saving a file, creating a commit, doing a push — is an event in the project's lifecycle. Hooks observe these events and, when one occurs, automatically execute a series of predefined tasks.

---

## Mario Analogy — The Smart "?" Blocks

In Super Mario Bros, everyone knows the "?" Blocks. You're running through the level and see that golden block floating in the air. What do you do? Jump and hit it from below! And when you hit it, something happens AUTOMATICALLY:

1. **Mario runs through the level** (you're developing code) — EVENT
2. **Mario jumps and hits the "?" Block** (you make a commit/push) — TRIGGER DETECTION
3. **The block is activated** (the Hook detects the event) — EXECUTION
4. **Something comes out of the block** (mushroom, coin, star, flower) — ACTION
5. **Mario receives the result** (code validated, formatted, or blocked) — OUTCOME

Hooks work exactly like this. But instead of mushrooms and coins, we have validations, formatting, and automatic tests.

There are different **types** of "?" Blocks:

**Protection "?" Blocks** — If Mario hits the block and the code has errors, a Buzzy Beetle comes out that BLOCKS the path. The commit cannot proceed. You need to fix it to continue.

**Improvement "?" Blocks** — Mario hits the block and a mushroom comes out that auto-formats the code, making it prettier without manual effort. Like getting a Super Mushroom without asking!

**Notification "?" Blocks** — After Mario passes through the level, the block releases coins that appear on the entire team's scoreboard, notifying teammates about the new progress.

**Logging "?" Blocks** — Every block that Mario hits gets recorded on the scoreboard, creating detailed logs for future audits.

---

## What can a Hook do?

Hooks have two main powers:

**Execute Shell Commands** — Run Python scripts, Node.js, or any tool installed in the developer's local environment.

**Block or Allow Continuation** — A Hook can examine the result of a command and decide: "Let it proceed" (exit code 0) or "Stop everything" (exit code 1).

For example, a **pre-commit** Hook can:
- Run ESLint to check for linting errors
- Run Prettier to automatically format code
- Run quick unit tests
- Validate that the commit follows message standards (e.g., Conventional Commits)
- If any validation fails, BLOCK the commit so the developer fixes the issues

A **pre-push** Hook can:
- Run the complete test suite
- Check code coverage
- Build the project to ensure nothing broke
- If any test fails, block the push until everything passes

---

## Events and Lifecycle

A software project's lifecycle is full of events. Each event is a moment at which a Hook can fire. Understanding these events is like knowing the position of each "?" Block in the level — you need to know where they are to make the most of them.

### Table of Events and Available Hooks

| Event | When It Fires | Common Use Case | Example Command | Type of "?" Block |
|---|---|---|---|---|
| **pre-commit** | Before saving the commit | Validate syntax, run linting, format code | `npm run lint && npm run prettier` | Protection + Improvement "?" Block |
| **commit-msg** | After the message is written, before saving | Validate that the message follows Conventional Commits | `npm run validate:commit-msg` | Protection "?" Block |
| **post-commit** | Immediately after the commit is saved | Notify channels, update logs, generate reports | `curl https://slack.com/hooks/...` | Coin Block (notification) |
| **pre-push** | Before sending commits to the remote repository | Run full test suite, check coverage | `npm run test:full && npm run coverage` | GIANT Protection "?" Block |
| **post-push** | After the push was sent (success) | Trigger CI/CD pipeline, notify team | `npm run deploy:staging` | Coin Block + Action |
| **post-merge** | After merging a branch | Install new dependencies, run migrations | `npm install && npm run db:migrate` | Auto-adjustment "?" Block |
| **prepare-commit-msg** | After the default message is created | Auto-fill information (ticket #, branch) | `echo '[TICKET-123]' >> $1` | Improvement "?" Block |
| **file-change (custom)** | When a specific file is modified | Auto-format TypeScript, validate YAML | `npx prettier --write src/**/*.ts` | Improvement "?" Block |

---

## Detailed Use Cases

### Pre-commit Hook — The "?" Block Before the Checkpoint

This is the first "?" Block Mario encounters when trying to save his progress. It's like a giant golden block positioned right in front of the checkpoint flag — you HAVE to hit it to pass.

- Runs ESLint and other linters to find syntax and style errors
- Runs Prettier to automatically format code
- Validates types with TypeScript (`tsc --noEmit`)
- If ANY validation fails, the commit is BLOCKED until the developer fixes the issues
- If everything passes, the commit is allowed naturally

### Commit-msg Hook — The "?" Block that Checks if You Have the Right Key

This "?" Block examines the commit message to ensure it follows a standard (e.g., Conventional Commits). It's like those blocks that only release their content if you have the right key — in this case, the "key" is formatting your message correctly.

- Checks if the message starts with a type (`feat:`, `fix:`, `docs:`, etc.)
- Checks if there's a clear description
- Can validate if it references a ticket (#123)
- If invalid, rejects the commit and asks the developer to rewrite

### Post-commit Hook — The Coin Block After the Checkpoint

After Mario passes through the checkpoint successfully, this block releases coins that appear on everyone's scoreboard — it's the notification for the team.

- Notify a Slack channel with the change
- Generate a report and save it to a log file
- Update a progress dashboard
- Send email to stakeholders

**Note:** Post-commit CANNOT block the commit (it's already saved), but can take other actions. The coin has already left the block!

### Pre-push Hook — The GIANT "?" Block at the End of the Level

Before sending your code to the central castle (remote repository), Mario encounters a GIANT "?" Block — that huge block that requires much more to activate and has much greater consequences.

- Runs `npm test` (full suite, not just quick tests)
- Checks test coverage
- Builds the project (`npm run build`) to ensure there are no build errors
- If ANY test fails, the push is BLOCKED
- The developer cannot send broken code to the central repository

### Post-push Hook — The Block that Activates Lakitu

After the push was sent successfully, this block wakes up **Lakitu** (that guy on the cloud) who starts processes in the cloud.

- Trigger the CI/CD pipeline on GitHub Actions or GitLab CI
- Start automatic deploy to staging or production
- Create a follow-up issue
- Notify QA or DevOps teams

---

## Structure of a Hook

Hooks aren't created from nothing. There are tools and patterns that make their configuration easier. The most popular is **Husky**, a Node.js library that elegantly manages Git Hooks.

### Project Architecture with Hooks

A typical project with Hooks ("?" Blocks) has this structure:

```
my-project/
├── .husky/                    # Level of "?" Blocks (managed by Husky)
│   ├── _/                     # Husky internal scripts
│   ├── pre-commit             # "?" Block before the checkpoint
│   ├── commit-msg             # "?" Block that checks the key
│   ├── pre-push               # GIANT "?" Block at the end of the level
│   └── prepare-commit-msg     # Preparation "?" Block
├── .git/
├── src/
├── tests/
├── .npmrc ou .yarnrc          # Package manager configuration
├── package.json               # Dependencies (including Husky)
├── .eslintrc.json             # Linting configuration
├── .prettierrc                # Formatting configuration
├── jest.config.js             # Testing configuration
└── README.md
```

### Installation and Basic Configuration

**Step 1: Install Husky**
```bash
npm install husky --save-dev
npx husky install
```

**Step 2: Create a Pre-commit "?" Block**
```bash
npx husky add .husky/pre-commit "npm run lint && npm run prettier"
# This creates the .husky/pre-commit file with the command
```

**Step 3: Create a Commit-msg "?" Block**
```bash
npx husky add .husky/commit-msg "npm run validate:commit-msg"
# This "?" Block will validate the message before allowing the commit
```

---

## Example 1: Pre-commit Hook with Validation

**File:** `.husky/pre-commit`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "Starting pre-commit validations..."

# Run ESLint
echo "Checking linting..."
npm run lint
LINT_EXIT=$?

# Run Prettier (formatting)
echo "Formatting code..."
npm run prettier
PRETTIER_EXIT=$?

# Run Type-check
echo "Checking types..."
npm run type-check
TYPE_EXIT=$?

# If any validation failed, block the commit
if [ $LINT_EXIT -ne 0 ] || [ $PRETTIER_EXIT -ne 0 ] || [ $TYPE_EXIT -ne 0 ]; then
    echo "Validations failed. Commit blocked."
    exit 1
fi

echo "All validations passed. Commit allowed."
exit 0
```

This "?" Block does the following: first it checks linting (`npm run lint`), then formats the code (`npm run prettier`), then checks types (`npm run type-check`). If ANY command returns an error code (exit code != 0), the "?" Block returns 1, blocking the commit. This ensures that no broken code reaches the repository.

**Mario Analogy:** It's like a "?" Block that you hit and it performs a triple check — it checks if you have the mushroom (lint ok), the fire flower (format ok), and the armor (types ok). If any is missing, the block stops you until you grab all the power-ups.

---

## Example 2: Commit-msg Hook with Conventional Commits

**File:** `.husky/commit-msg`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

COMMIT_MSG=$(cat "$1")

# Conventional Commits pattern
# Valid: feat: add login feature
#        fix: correct typo
#        docs: update README
#        Invalid: added new feature

PATTERN="^(feat|fix|docs|style|refactor|test|chore|perf)(\(.+\))?: .{1,}"

if ! echo "$COMMIT_MSG" | grep -E "$PATTERN" > /dev/null; then
    echo "Invalid commit message."
    echo "Use the pattern: <type>(<scope>): <subject>"
    echo "Valid types: feat, fix, docs, style, refactor, test, chore, perf"
    echo "Example: feat(auth): add two-factor authentication"
    exit 1
fi

echo "Valid commit message."
exit 0
```

This "?" Block validates that every commit message follows the Conventional Commits standard. If the message doesn't match the pattern, the commit is blocked and a help message is displayed.

**Mario Analogy:** It's like that block that only opens if you have the right key. The "key" here is formatting your message in the correct pattern (`feat:`, `fix:`, `docs:`...). Without the right key, the block won't let you pass!

---

## Example 3: Pre-push Hook with Tests

**File:** `.husky/pre-push`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "Running full test suite..."

# Run all tests
npm run test:full
TEST_EXIT=$?

if [ $TEST_EXIT -ne 0 ]; then
    echo "Tests failed. Push blocked."
    echo "Fix the tests before pushing."
    exit 1
fi

echo "Building the project..."
npm run build
BUILD_EXIT=$?

if [ $BUILD_EXIT -ne 0 ]; then
    echo "Build failed. Push blocked."
    exit 1
fi

echo "All tests passed and the build was successful. Push allowed."
exit 0
```

This GIANT "?" Block ensures that no code with failing tests reaches the remote repository. It also verifies that the project can build correctly.

**Mario Analogy:** It's the GIANT "?" Block at the end of the level, right before the flag. You need ALL your strength to activate it (runs ALL the tests), and if you don't pass, you can't complete the level. It's the last guardian before the castle!

---

## package.json with Validation Scripts

```json
{
  "name": "my-agentic-devops-project",
  "version": "1.0.0",
  "scripts": {
    "lint": "eslint src/**/*.ts --max-warnings 0",
    "prettier": "prettier --write src/**/*.{ts,tsx,json}",
    "type-check": "tsc --noEmit",
    "test:quick": "jest --testPathPattern=src --maxWorkers=1",
    "test:full": "jest --coverage",
    "build": "tsc && webpack",
    "validate:commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  },
  "devDependencies": {
    "husky": "^8.0.0",
    "@commitlint/cli": "^17.0.0",
    "@commitlint/config-conventional": "^17.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0",
    "typescript": "^5.0.0",
    "jest": "^29.0.0"
  }
}
```

---

## Hooks vs GitHub Actions

Both are powerful automation tools, but they work in completely different contexts. Understanding the difference is crucial for knowing when to use each one.

### Detailed Comparison

| Aspect | Hooks (Husky) | GitHub Actions | Mario Analogy |
|---|---|---|---|
| **Where It Runs** | Developer's local computer | GitHub server (cloud) | "?" Blocks in the level vs Lakitu watching from the sky |
| **When It Fires** | During development (commit, push, etc.) | After code reaches the repository | Block in the level vs Lakitu after you pass |
| **Execution Time** | Instant (seconds) | Minutes (queuing + execution) | Immediate reaction vs Delayed reaction |
| **File Access** | All local, uncommitted files | Only files in the repository | Mario's inventory vs The castle's library |
| **Can It Block?** | YES - blocks commit/push | NO - can only report failure | Block stops you vs Lakitu sends notification |
| **Cost** | Free (runs locally) | Free up to 2000 minutes/month per account | No local cost vs Cloud minutes |
| **Best For** | Quick validations, linting, formatting | Long tests, builds, deploy, notifications | Quick check in the level vs Ceremony at the castle |
| **Bypass Risk** | Can be bypassed with `--no-verify` | Cannot be bypassed (on the server) | Mario can skip the block vs Lakitu always sees |
| **Setup** | Simple (`npm install` + `npx husky add`) | Requires `.github/workflows/` file | Easy block to place vs Building Lakitu requires planning |
| **Visibility** | Only the developer sees | Entire team sees the logs on GitHub | Private block vs Public event |

### When to Use Hooks?

- FAST validations (linting, formatting, type-check)
- INSTANT feedback for the developer
- MANDATORY commit standards (conventional commits)
- Prevent junk or incomplete commits
- FAST tests (unit tests, not integration tests)
- Auto-fixing common issues (prettier, auto-import)

### When to Use GitHub Actions?

- LONG tests (full suites, integration tests)
- Build and compilation
- Automatic deploy to staging/production
- Generate reports or artifacts
- Notify external systems (Slack, JIRA, email)
- Execute tasks that need credentials/secrets
- Ensure that NOBODY can bypass

### Ideal Flow — Hooks + GitHub Actions

The best practice is to use both together — "?" Blocks in the level AND Lakitu in the cloud:

```
DEVELOPER COMMITS:
  1. Pre-commit ("?" Block): Lint + Prettier + Type-check (FAST, BLOCKS if fails)
  2. Commit-msg (Key "?" Block): Validate message (Conventional Commits)
  3. Post-commit (Coin Block): Notify (optional)

DEVELOPER PUSHES:
  4. Pre-push (GIANT "?" Block): Quick tests (BLOCKS if fails)
  5. Git push to repository

CODE IN THE REPOSITORY:
  6. GitHub Actions (Lakitu) fires: npm test (full suite)
  7. GitHub Actions (Lakitu) fires: npm run build
  8. GitHub Actions (Lakitu) fires: Deploy if everything passed
  9. GitHub Actions (Lakitu) notifies: Slack, email, dashboard
```

This way, the developer gets INSTANT feedback ("?" Blocks) and the team gets quality guarantees (Lakitu in the cloud). It's the best of both worlds!

---

## Practical Examples — Complete Code

### Example 1: Conventional Commit Validator

**Objective:** Ensure that ALL commits follow the Conventional Commits standard
**Trigger:** commit-msg (fires when the message is typed)
**Action:** Validate pattern; if invalid, reject with help message

**File:** `.husky/commit-msg`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# ============================================================
# Conventional Commit Hook
# Validates that the message follows: type(scope): description
# Valid types: feat, fix, docs, style, refactor, test, chore
# ============================================================

COMMIT_MSG_FILE=$1
COMMIT_MSG=$(head -n1 "$COMMIT_MSG_FILE")

# Remove comments (#)
CLEAN_MSG=$(echo "$COMMIT_MSG" | sed 's/#.*//' | xargs)

# Regex pattern
# Accepts: feat: description
#          feat(auth): add login
#          fix: bug in parser
#          REVERT: previous commit
# Rejects: added new feature
#          implement dashboard

PATTERN="^(feat|fix|docs|style|refactor|test|chore|perf|revert)(\([a-z-]+\))?: .{1,}"

if ! echo "$CLEAN_MSG" | grep -qE "$PATTERN"; then
    echo ""
    echo "COMMIT REJECTED: Message in invalid format."
    echo ""
    echo "Expected pattern:"
    echo "  <type>(<scope>): <description>"
    echo ""
    echo "Valid types: feat, fix, docs, style, refactor, test, chore, perf, revert"
    echo ""
    echo "Valid examples:"
    echo "  feat: add user authentication"
    echo "  feat(auth): implement two-factor auth"
    echo "  fix(api): resolve null pointer exception"
    echo "  docs: update installation instructions"
    echo "  refactor(core): simplify event loop"
    echo ""
    echo "Your message: $COMMIT_MSG"
    echo ""
    exit 1
fi

echo "Valid commit message. Proceeding..."
exit 0
```

- **Success:** Commit proceeds normally
- **Failure:** Commit is rejected with clear instructions on how to fix it

**Mario Analogy:** The "?" Block that checks if you have the right key. If the format of your message doesn't match the pattern (the key), the block stops you and shows exactly which key you need.

### Example 2: ESLint Auto-fix on Pre-commit

**Objective:** Run linting and fix issues automatically before allowing the commit
**Trigger:** pre-commit (fires when the developer tries to commit)
**Action:** Run `eslint --fix`, then prettier; if there are non-fixable errors, block

**File:** `.husky/pre-commit`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# ============================================================
# Pre-commit Hook: Linting + Formatting
# Runs ESLint with auto-fix and Prettier
# ============================================================

echo "Pre-commit validation started..."
echo ""

# Define colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get list of staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(ts|tsx|js|jsx|json)$')

if [ -z "$STAGED_FILES" ]; then
    echo "No JS/TS files to validate."
    exit 0
fi

echo "Files to validate:"
echo "$STAGED_FILES" | sed 's/^/  - /'
echo ""

# ============================================================
# Step 1: ESLint with auto-fix
# ============================================================
echo "${YELLOW}Step 1/3: Running ESLint with auto-fix...${NC}"

if npx eslint $STAGED_FILES --fix --max-warnings 0; then
    echo "${GREEN}ESLint passed.${NC}"
else
    echo "${RED}ESLint found errors it couldn't fix.${NC}"
    echo "   Fix the errors manually and try again."
    exit 1
fi
echo ""

# ============================================================
# Step 2: Prettier for formatting
# ============================================================
echo "${YELLOW}Step 2/3: Running Prettier...${NC}"

if npx prettier --write $STAGED_FILES > /dev/null 2>&1; then
    echo "${GREEN}Prettier ran successfully.${NC}"
else
    echo "${RED}Prettier failed.${NC}"
    exit 1
fi
echo ""

# ============================================================
# Step 3: Type-checking with TypeScript
# ============================================================
echo "${YELLOW}Step 3/3: Running type-check...${NC}"

if npx tsc --noEmit; then
    echo "${GREEN}Type-check passed.${NC}"
else
    echo "${RED}Type-check found errors.${NC}"
    echo "   Fix the type errors and try again."
    exit 1
fi
echo ""

echo "${GREEN}All validations passed!${NC}"
echo "   Modified files were re-staged automatically."

# Re-add files that were auto-fixed
git add $STAGED_FILES

exit 0
```

- **Success:** Files are auto-formatted and re-added to staging; commit proceeds
- **Failure:** If ESLint finds non-fixable errors or TypeScript detects type issues, the commit is blocked

**Mario Analogy:** It's a triple "?" Block! You hit it and three power-ups come out in sequence: first ESLint (mushroom that auto-fixes), then Prettier (star that formats everything), then TypeScript (fire flower that checks types). If any power-up fails, the block stops you until you're ready.

### Example 3: Jest Test Runner on Pre-push

**Objective:** Run tests automatically before pushing; if any test fails, block push
**Trigger:** pre-push (fires when the developer tries to `git push`)
**Action:** Run full test suite; if ANY test fails, reject push

**File:** `.husky/pre-push`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# ============================================================
# Pre-push Hook: Jest Test Suite
# Ensures no broken code is pushed
# ============================================================

echo "Pre-push validation started..."
echo ""

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# ============================================================
# Check changes relative to the remote
# ============================================================
echo "${BLUE}Analyzing commits to push...${NC}"

# Get local and remote branch
LOCAL_BRANCH=$(git rev-parse --abbrev-ref HEAD)
REMOTE_BRANCH="origin/$LOCAL_BRANCH"

# Check if remote branch exists
if ! git rev-parse --verify "$REMOTE_BRANCH" > /dev/null 2>&1; then
    REMOTE_BRANCH="origin/main"  # Fallback to main if remote doesn't exist
fi

# List commits that will be pushed
COMMITS=$(git log $REMOTE_BRANCH..HEAD --oneline 2>/dev/null | wc -l)
echo "Branch: $LOCAL_BRANCH"
echo "Commits to push: $COMMITS"
echo ""

# ============================================================
# Step 1: Run tests with Jest
# ============================================================
echo "${YELLOW}Step 1/3: Running Jest test suite...${NC}"

if npm run test -- --passWithNoTests; then
    echo "${GREEN}All tests passed.${NC}"
else
    echo "${RED}Tests failed. Push blocked.${NC}"
    echo "   Fix the tests before pushing:"
    echo "   $ npm run test -- --watch"
    exit 1
fi
echo ""

# ============================================================
# Step 2: Check code coverage
# ============================================================
echo "${YELLOW}Step 2/3: Checking test coverage...${NC}"

COVERAGE_THRESHOLD=70

if npm run test:coverage > /tmp/jest_coverage.log 2>&1; then
    COVERAGE=$(grep -oP 'Lines\s+:\s+\K[^%]*' /tmp/jest_coverage.log | head -1 | xargs)
    if (( $(echo "$COVERAGE >= $COVERAGE_THRESHOLD" | bc -l) )); then
        echo "${GREEN}Coverage adequate: ${COVERAGE}%${NC}"
    else
        echo "${YELLOW}Low coverage: ${COVERAGE}% (minimum: ${COVERAGE_THRESHOLD}%)${NC}"
        echo "   Consider adding more tests."
    fi
else
    echo "${YELLOW}Could not calculate coverage.${NC}"
fi
echo ""

# ============================================================
# Step 3: Project build
# ============================================================
echo "${YELLOW}Step 3/3: Building the project...${NC}"

if npm run build > /tmp/build.log 2>&1; then
    echo "${GREEN}Build successful.${NC}"
else
    echo "${RED}Build failed. Push blocked.${NC}"
    echo "   Fix compilation errors:"
    tail -20 /tmp/build.log
    exit 1
fi
echo ""

echo "${GREEN}Validation complete. Push allowed!${NC}"
exit 0
```

- **Success:** Tests pass, coverage is acceptable, build compiles; push is allowed
- **Failure:** If tests fail or build breaks, push is blocked immediately

**Mario Analogy:** It's the GIANT "?" Block at the end of the level — that huge block that only appears before the castle. You need to pass three challenges (tests, coverage, build) to activate it. If you fail any one, you don't enter the castle (remote repository). It's the boss of "?" Blocks!

---

## Complete package.json Configuration

```json
{
  "name": "@agentic-devops/hooks-example",
  "version": "2.0.0",
  "description": "Complete Hooks example for Agentic DevOps",
  "main": "dist/index.js",
  "scripts": {
    "lint": "eslint src/**/*.{ts,tsx} --max-warnings 0",
    "lint:fix": "eslint src/**/*.{ts,tsx} --fix",
    "prettier": "prettier --write src/**/*.{ts,tsx,json,md}",
    "prettier:check": "prettier --check src/**/*.{ts,tsx,json,md}",
    "type-check": "tsc --noEmit",
    "test": "jest --testPathPattern=src --maxWorkers=1",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "build": "tsc && webpack --mode production",
    "dev": "tsc --watch & webpack --mode development --watch",
    "validate:commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  },
  "devDependencies": {
    "@commitlint/cli": "^17.6.7",
    "@commitlint/config-conventional": "^17.6.7",
    "@types/jest": "^29.5.0",
    "@types/node": "^20.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint": "^8.44.0",
    "husky": "^8.0.3",
    "jest": "^29.5.0",
    "prettier": "^3.0.0",
    "ts-jest": "^29.1.0",
    "typescript": "^5.1.0",
    "webpack": "^5.88.0",
    "webpack-cli": "^5.1.0"
  }
}
```

---

## Best Practices and Troubleshooting

### Best Practices for Configuring "?" Blocks

**1. Keep "?" Blocks Fast:** If a pre-commit Hook takes more than 10 seconds, developers will use `--no-verify` (skip the block) or look for a faster tool. Nobody likes waiting in the middle of a level!

- ESLint + Prettier: 2-5 seconds
- TypeScript type-check: 3-8 seconds
- Quick tests (unit): 5-15 seconds
- Integration tests: too slow for pre-commit
- Deploy: too slow for pre-push

**2. Provide Clear Error Messages:** When a "?" Block rejects something, the developer needs to know exactly why and how to fix it.

- BAD: "Error 1"
- GOOD: "ESLint failed on line 42 of src/auth.ts: Variable never used. Remove or use the variable."
- BAD: "Validation failed"
- GOOD: "Invalid commit message. Use pattern: feat: description. Example: feat: add login screen"

**3. Allow Conscious Bypass:** Developers need to be able to bypass "?" Blocks in emergencies, but it should be a conscious decision. It's like Mario who can skip a block if he wants, but knows he'll miss the power-up.

- Pre-commit and commit-msg can be bypassed with: `git commit --no-verify`
- Pre-push can be bypassed with: `git push --no-verify`
- This is recorded in the git log, so there's accountability
- For true blocking, use branch protection rules on GitHub (that's Lakitu — he ALWAYS sees)

**4. Document Your "?" Blocks:** New team members need to understand why each "?" Block exists.

- Create a HOOKS.md file at the project root
- List each Hook, its purpose, and how to bypass if necessary
- Include examples of common error messages

### Common Troubleshooting

**Problem:** Hook doesn't execute after git clone
**Cause:** .husky wasn't installed
**Solution:** `npm install && npx husky install`
**Prevent:** Add `"prepare": "husky install"` to package.json

**Problem:** "permission denied" when running Hook
**Cause:** `.husky/pre-commit` doesn't have execute permission
**Solution:** `chmod +x .husky/*`
**Or:** `git update-index --chmod=+x .husky/pre-commit`

**Problem:** Developer bypasses Hook with --no-verify
**Cause:** They're in a hurry or frustrated with slow Hook
**Solution:** Optimize the Hook to be faster
**Or:** Configure branch protection on GitHub to guarantee quality even with --no-verify (Lakitu in the cloud always sees!)

**Problem:** Hook works locally but not on GitHub Actions
**Cause:** Different environment, different versions, or missing dependencies
**Solution:**
- Make sure GitHub Actions installs the same dependencies: `npm ci`
- Check Node.js version in Actions vs local
- Run the same commands in both environments

---

## Conclusion

Sofia left the Level of "?" Blocks with new knowledge. She now understood that Hooks weren't obstacles, but **allies** — smart "?" Blocks that protect code and allow developers to work with confidence.

Each "?" Block (event), each mechanism (configuration), each power-up that comes out of the block (validation) worked in perfect synchronization. And best of all: everything was invisible when working correctly. Mario simply runs through the level, hits the blocks, and trusts that they're doing their job — releasing validation mushrooms, notification coins, and formatting stars.

But Sofia also knew: "?" Blocks alone weren't enough. They protected within the level, but the true security of the Mushroom Kingdom came from additional layers — Lakitu in the cloud (GitHub Actions), branch protection, code review. Each tool had its place.

She looked ahead to the next level — the MCP (Model Context Protocol) level. There, she would learn how to open Warp Zones to other worlds, connect external tools, and create even more powerful automations.

**Additional resources:** Visit https://github.com/typicode/husky for complete Husky documentation, and https://www.conventionalcommits.org/ for the Conventional Commits standard.

---

## POWER-UP UNLOCKED!

**Sofia now masters the "?" Blocks and Smart Hooks.**
She stored this knowledge and headed to the next level of the Mushroom Kingdom...

---

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Customizing Copilot](https://docs.github.com/en/copilot/customizing-copilot)
- [Husky - Git Hooks](https://typicode.github.io/husky/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

<div align="center">

⬅️ [Previous: Level 6-4: Prompt Files](6-4-prompt-files.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 6-6: MCP Practical](6-6-mcp-practical.md)

</div>
