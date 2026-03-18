---
title: "Level 7-BOSS — Boss Battle: Building Your First Agent"
description: "Hands-on project: building your first RAG agent with Python and Mario analogies"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-7", "project", "rag-agent", "hands-on"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-03-18 | Paula Silva | Initial version — Super Mario Bros Edition |

# Level 7-BOSS — Boss Battle: Building Your First Agent
## The Final Hands-On Project — Toad Helper, Your AI Assistant

---

**Prepared for:** Sofia
**Version:** 2.0 — Mushroom Kingdom Edition
**Author:** Paula Silva | Microsoft Latam Software GBB
**Date:** March 2026
**Language:** English
**Collection:** Agentic DevOps — Super Mario Bros Edition

---

## TABLE OF CONTENTS

1. [Introduction — The Star World Final Boss Battle](#introduction)
2. [The Project: Toad Helper](#the-project)
3. [Toad Helper Architecture](#architecture)
4. [Prerequisites — Gearing Up for the Battle](#prerequisites)
5. [Step 1 — Project Structure](#step-1)
6. [Step 2 — The Agent Engine (LLM Connection)](#step-2)
7. [Step 3 — The Royal Library (RAG)](#step-3)
8. [Step 4 — The Tool Inventory (Tools)](#step-4)
9. [Step 5 — The Complete Agent](#step-5)
10. [Step 6 — Testing the Toad Helper](#step-6)
11. [Step 7 — Improvements and Next Steps](#step-7)
12. [Final Checklist — Boss Defeated?](#checklist)
13. [Conclusion — Power-Up Unlocked!](#conclusion)

---

## Introduction — The Star World Final Boss Battle

Sofia arrived at the final level of Star World (World 7). Behind the giant door, a warning:

> **"FINAL BOSS BATTLE — You learned about agents, frameworks, channels, and IDPs. Now prove you've mastered it all: BUILD YOUR OWN AGENT!"**

This is the most important level in all of Star World. It's not theory — it's **pure practice**. You'll build, from scratch, a functional AI agent that:

1. Connects to an LLM (language model)
2. Queries your local documents (RAG)
3. Has tools to search and process information
4. Runs as a simple Python script

At the end, you'll have a **Toad Helper** — your own intelligent NPC that answers questions about your project by consulting the Royal Library (your docs).

---

## 1. The Project: Toad Helper

### What We're Going to Build

We'll build the **Toad Helper** — an AI agent that works like Toad in the Mushroom Kingdom: a helpful assistant that knows the kingdom (your project) and answers questions by consulting the Royal Library (your documents).

### What the Toad Helper Does

| Question | What Toad Does | Result |
|---|---|---|
| *"What does this project do?"* | Reads the README and summarizes | Clear explanation of the project |
| *"What technologies do we use?"* | Searches the docs for technologies | List of technologies with description |
| *"How do I deploy?"* | Finds the deploy guide in the docs | Step-by-step deploy guide |
| *"What endpoints does the API have?"* | Searches the API docs | List of endpoints |
| *"Who created this project?"* | Reads document metadata | Author information |

### Mario Analogy: Building Your Own Toad NPC

You're in the **character creation workshop** of the Mushroom Kingdom. You'll create a Toad NPC that:

- **Has a brain** (LLM connection — the intelligence engine)
- **Consults the Royal Library** (RAG — searches kingdom documents)
- **Has tools on his belt** (tools — can read files, list directories)
- **Responds in English** (speaks the kingdom's language)

```
┌──────────────────────────────────────────────────────────┐
│                    TOAD HELPER                              │
│              Your First AI Agent                           │
│                                                           │
│  ┌──────────────────────────────────────────────────┐    │
│  │                                                   │    │
│  │        ┌─────────────┐                           │    │
│  │        │    BRAIN    │ ← LLM (GPT-4o)           │    │
│  │        │  (AI Engine)│                           │    │
│  │        └──────┬──────┘                           │    │
│  │               │                                   │    │
│  │        ┌──────▼──────┐                           │    │
│  │        │   ROYAL     │ ← RAG (your docs)         │    │
│  │        │  LIBRARY    │                           │    │
│  │        └──────┬──────┘                           │    │
│  │               │                                   │    │
│  │   ┌───────────┼───────────┐                      │    │
│  │   │           │           │                      │    │
│  │   ▼           ▼           ▼                      │    │
│  │ ┌─────┐   ┌─────┐   ┌─────┐                    │    │
│  │ │ READ│   │ LIST │   │SEARCH│  ← Tools          │    │
│  │ │DOCS │   │ DIR  │   │ TEXT │                    │    │
│  │ └─────┘   └─────┘   └─────┘                    │    │
│  │                                                   │    │
│  └──────────────────────────────────────────────────┘    │
│                                                           │
│  Sofia: "Toad, how do I deploy?"                          │
│  Toad: "I checked the Royal Library! Here's the guide..." │
└──────────────────────────────────────────────────────────┘
```

---

## 2. Toad Helper Architecture

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      TOAD HELPER — ARCHITECTURE                  │
│                                                                   │
│  ┌──────────┐                                                    │
│  │   USER   │  "How do I deploy the project?"                    │
│  │ (Sofia)  │                                                    │
│  └─────┬────┘                                                    │
│        │                                                          │
│        ▼                                                          │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │                    TOAD HELPER (main.py)                   │    │
│  │                                                           │    │
│  │  1. Receives the user's question                          │    │
│  │  2. Searches for relevant documents (RAG)                 │    │
│  │  3. Assembles the context (question + found docs)         │    │
│  │  4. Sends to the LLM                                      │    │
│  │  5. Returns the answer                                    │    │
│  │                                                           │    │
│  │  ┌────────────────┐  ┌────────────────┐                  │    │
│  │  │  RAG MODULE    │  │ TOOLS MODULE   │                  │    │
│  │  │                │  │                │                  │    │
│  │  │ Indexes docs   │  │ read_file()    │                  │    │
│  │  │ Searches by    │  │ list_dir()     │                  │    │
│  │  │ similarity     │  │ search_text()  │                  │    │
│  │  └───────┬────────┘  └───────┬────────┘                  │    │
│  │          │                   │                            │    │
│  │          ▼                   ▼                            │    │
│  │  ┌────────────────────────────────────────┐              │    │
│  │  │          LLM CONNECTOR                  │              │    │
│  │  │   OpenAI API / Azure OpenAI / Ollama    │              │    │
│  │  └────────────────────────────────────────┘              │    │
│  └──────────────────────────────────────────────────────────┘    │
│        │                                                          │
│        ▼                                                          │
│  ┌──────────┐                                                    │
│  │ RESPONSE │  "To deploy, follow these steps: ..."              │
│  └──────────┘                                                    │
│                                                                   │
│  DOCUMENTS FOLDER (the "Royal Library"):                          │
│  docs/                                                            │
│  ├── README.md         ← About the project                       │
│  ├── DEPLOY.md         ← Deploy guide                            │
│  ├── API.md            ← API documentation                       │
│  ├── ARCHITECTURE.md   ← System architecture                     │
│  └── CONTRIBUTING.md   ← How to contribute                       │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Components

| Component | Function | Mario Analogy |
|---|---|---|
| **main.py** | Entry point — Toad himself | The Toad character in the game |
| **rag.py** | Searches for relevant documents | The Royal Library of the castle |
| **tools.py** | Tools that Toad can use | Toad's utility belt |
| **config.py** | Configurations (API key, etc.) | The game options (volume, controls) |
| **docs/** | Folder with project documents | The books and scrolls of the Library |

---

## 3. Prerequisites — Gearing Up for the Battle

Before facing the Boss, you need to gear up. Make sure you have:

### Required Software

```bash
# Python 3.10 or higher
python3 --version
# Should show: Python 3.10.x or higher

# pip (Python package manager)
pip3 --version

# git (version control)
git --version
```

### API Key

You need access to an LLM. Options:

| Provider | How to Get | Cost |
|---|---|---|
| **OpenAI** | Create account at platform.openai.com | Pay-as-you-go (~$0.01 per question) |
| **Azure OpenAI** | Create resource on Azure | Pay-as-you-go |
| **Ollama (local)** | Install ollama.com, run local model | Free (uses your machine) |

For this tutorial, we'll use **OpenAI** as an example, but the code works with any provider with small adaptations.

### Python Packages

```bash
# Create a virtual environment (best practice)
python3 -m venv toad-env
source toad-env/bin/activate  # Linux/Mac
# toad-env\Scripts\activate   # Windows

# Install dependencies
pip install openai tiktoken
```

> **Note:** We're using only `openai` and `tiktoken` to keep the project simple. In a more advanced agent, you'd use Semantic Kernel, LangChain, or another framework. Here, the goal is to **understand the fundamentals** without abstraction layers.

---

## 4. Step 1 — Project Structure

Create the following folder structure:

```bash
# Create the project directory
mkdir toad-helper
cd toad-helper

# Create the structure
mkdir docs
mkdir src
```

The final structure will be:

```
toad-helper/                    ← Project root
├── docs/                       ← The Royal Library (your documents)
│   ├── README.md               ← About the project
│   ├── DEPLOY.md               ← Deploy guide
│   ├── API.md                  ← API documentation
│   └── ARCHITECTURE.md         ← Architecture
├── src/                        ← Toad Helper source code
│   ├── config.py               ← Configurations
│   ├── tools.py                ← Toad's tools
│   ├── rag.py                  ← Royal Library search
│   └── main.py                 ← The Toad Helper itself
├── .env                        ← API key (NEVER commit this!)
└── requirements.txt            ← Dependencies
```

### Create the Example Documents (The Royal Library)

First, let's create the documents that Toad will consult. These are examples — replace them with the **real** documents from your project.

```bash
# docs/README.md
```

Create the file `docs/README.md` with this content:

```markdown
# TodoApp — Task Management Application

## About
TodoApp is a web application for personal task management.
It allows you to create, edit, delete and mark tasks as completed.

## Technologies
- Frontend: React 18 with TypeScript
- Backend: Node.js with Express
- Database: PostgreSQL 15
- ORM: Prisma
- Tests: Jest
- Container: Docker + Docker Compose
- CI/CD: GitHub Actions

## Team
- Author: Sofia Silva
- Team: Team Alpha
- Company: Mushroom Kingdom Inc.

## Repository
github.com/mushroom-kingdom/todoapp
```

Create the file `docs/DEPLOY.md`:

```markdown
# Deploy Guide — TodoApp

## Prerequisites
- Docker installed
- Access to the container registry
- Environment variables configured

## Local Deploy (Development)
1. Clone the repository
2. Copy .env.example to .env
3. Run: docker-compose up -d
4. Access: http://localhost:3000

## Staging Deploy
1. Merge into the 'develop' branch
2. GitHub Actions runs automatically:
   - Frontend and backend build
   - Unit and integration tests
   - Docker image push
   - Deploy to staging environment
3. Verify: https://staging.todoapp.mushroom-kingdom.com

## Production Deploy
1. Create a Pull Request from 'develop' to 'main'
2. Get 2 code review approvals
3. Merge into 'main'
4. GitHub Actions runs automatically:
   - All tests
   - Production build
   - Blue-green deploy
   - Smoke tests
   - Traffic promotion
5. Verify: https://todoapp.mushroom-kingdom.com

## Rollback
In case of problems:
1. Access GitHub Actions
2. Run the 'rollback' workflow
3. Select the previous version
4. Confirm the rollback
```

Create the file `docs/API.md`:

```markdown
# API Documentation — TodoApp

## Base URL
- Development: http://localhost:4000/api
- Staging: https://staging-api.todoapp.mushroom-kingdom.com/api
- Production: https://api.todoapp.mushroom-kingdom.com/api

## Authentication
All routes (except login and register) require a JWT token
in the header Authorization: Bearer <token>

## Endpoints

### POST /api/auth/login
Authenticates the user and returns a JWT token.
Body: { "email": "string", "password": "string" }
Response: { "token": "string", "user": { "id", "name", "email" } }

### POST /api/auth/register
Registers a new user.
Body: { "name": "string", "email": "string", "password": "string" }
Response: { "user": { "id", "name", "email" } }

### GET /api/todos
Lists all tasks for the authenticated user.
Response: [{ "id", "title", "completed", "createdAt" }]

### POST /api/todos
Creates a new task.
Body: { "title": "string" }
Response: { "id", "title", "completed": false, "createdAt" }

### PUT /api/todos/:id
Updates a task.
Body: { "title": "string", "completed": boolean }
Response: { "id", "title", "completed", "updatedAt" }

### DELETE /api/todos/:id
Deletes a task.
Response: 204 No Content
```

Create the file `docs/ARCHITECTURE.md`:

```markdown
# Architecture — TodoApp

## Overview
TodoApp follows a 3-layer architecture:

1. Frontend (React SPA)
2. Backend (REST API with Express)
3. Database (PostgreSQL)

## Frontend
- React 18 with TypeScript
- Vite as bundler
- React Router for navigation
- Context API for global state
- Axios for HTTP calls

## Backend
- Node.js 20 LTS
- Express 4.x
- Prisma ORM
- JWT for authentication
- Bcrypt for password hashing
- Validation middleware with Zod

## Database
- PostgreSQL 15
- Managed via Prisma Migrations
- Connection pooling via PgBouncer in production

## Infrastructure
- Docker containers for each layer
- Docker Compose for local development
- GitHub Actions for CI/CD
- Azure Container Apps in production

## Diagram
Frontend (React) → Backend (Express) → PostgreSQL
       ↑                    ↑
       └── CDN (assets)     └── Redis (cache)
```

---

## 5. Step 2 — The Agent Engine (LLM Connection)

Let's start with Toad's brain — the LLM connection.

### File: src/config.py

```python
# src/config.py
# Toad Helper configurations
# Analogy: The game options (volume, controls, difficulty)

import os

# ==============================================
# LLM CONFIGURATION
# The API key is the "VIP pass" to talk to
# Toad's brain. NEVER share or commit it!
# ==============================================

# Load the API key securely
# Option 1: Environment variable (recommended)
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY", "")

# Model to use
# gpt-4o = smarter, more expensive
# gpt-4o-mini = fast, cheap, good for testing
MODEL = "gpt-4o-mini"

# Documents directory (the Royal Library)
DOCS_DIR = "docs"

# Toad's personality
SYSTEM_PROMPT = """You are the Toad Helper, a helpful assistant from the Mushroom Kingdom.
Your role is to answer questions about the project by consulting the available documentation.

Rules:
1. Always respond in English.
2. Base your answers ONLY on the provided documents.
3. If you can't find the information in the documents, honestly say you don't know.
4. Be clear, direct and friendly.
5. Use examples when possible.
6. If the question is about something unrelated to the project, politely say
   that you only know about the TodoApp project.
"""

# Maximum tokens in the response
MAX_TOKENS = 1024

# Temperature (0 = deterministic, 1 = creative)
# For a docs assistant, 0.3 is ideal (precise but not robotic)
TEMPERATURE = 0.3
```

### File: .env

```bash
# .env — Secret environment variables
# NEVER commit this file! Add it to .gitignore!
# Analogy: The secret vault in the castle where keys are kept

OPENAI_API_KEY=sk-your-key-here
```

### File: .gitignore

```
# .gitignore — Files that Git should ignore
# Analogy: Things that must NOT leave the castle

.env
toad-env/
__pycache__/
*.pyc
```

---

## 6. Step 3 — The Royal Library (RAG)

RAG (Retrieval-Augmented Generation) is the technique that allows Toad to **search for information in documents** before responding. Instead of making up answers, he consults the Royal Library.

### How RAG Works

```
┌──────────────────────────────────────────────────────────┐
│                     RAG — HOW IT WORKS                     │
│                                                           │
│  1. INDEXING (once, at startup)                           │
│     ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐          │
│     │README│   │DEPLOY│   │ API  │   │ARCHIT│          │
│     │ .md  │   │ .md  │   │ .md  │   │ .md  │          │
│     └──┬───┘   └──┬───┘   └──┬───┘   └──┬───┘          │
│        │          │          │          │                │
│        ▼          ▼          ▼          ▼                │
│     [Split into smaller pieces (chunks)]                  │
│        │          │          │          │                │
│        ▼          ▼          ▼          ▼                │
│     ┌──────────────────────────────────────┐             │
│     │        DOCUMENT INDEX                 │             │
│     │  (list of chunks with their texts)   │             │
│     └──────────────────────────────────────┘             │
│                                                           │
│  2. SEARCH (for each question)                            │
│     Question: "How do I deploy?"                          │
│        │                                                  │
│        ▼                                                  │
│     [Search for most relevant chunks]                     │
│        │                                                  │
│        ▼                                                  │
│     Found: chunk from DEPLOY.md                           │
│        │                                                  │
│        ▼                                                  │
│     Send question + context to the LLM                    │
│        │                                                  │
│        ▼                                                  │
│     Response based on real documents                       │
└──────────────────────────────────────────────────────────┘
```

### File: src/rag.py

```python
# src/rag.py
# RAG Module — The Toad Helper's Royal Library
# Analogy: The organization and search system of the
#           Royal Library in the Mushroom Kingdom Castle.
#           Each book is divided into pages, and the librarian
#           knows how to find the right page for each question.

import os
import re
from typing import List, Tuple


class RoyalLibrary:
    """The Royal Library of the Mushroom Kingdom.

    Indexes all documents and allows searching
    for the most relevant excerpts for a question.

    Analogy: The librarian Toad who organizes all
    the scrolls and knows how to find any information.
    """

    def __init__(self, docs_directory: str):
        """Initializes the library by reading all documents.

        Args:
            docs_directory: Path to the documents folder.
                           Analogy: The Royal Library's address.
        """
        self.directory = docs_directory
        self.chunks: List[dict] = []  # Indexed document chunks
        self._index_documents()

    def _index_documents(self):
        """Reads all documents and splits them into chunks.

        Analogy: The librarian opens each book, separates it into
        chapters/sections, and catalogs each section for quick search.
        """
        print(f"Indexing documents in '{self.directory}'...")

        # Check if directory exists
        if not os.path.exists(self.directory):
            print(f"WARNING: Directory '{self.directory}' not found!")
            return

        # Iterate through all .md files in the directory
        for filename in sorted(os.listdir(self.directory)):
            if filename.endswith(".md"):
                filepath = os.path.join(self.directory, filename)
                try:
                    with open(filepath, "r", encoding="utf-8") as f:
                        content = f.read()
                except Exception as e:
                    print(f"  Error reading {filename}: {e}")
                    continue

                # Split the document into sections (by ## headers)
                sections = self._split_into_sections(content, filename)
                self.chunks.extend(sections)
                print(f"  Indexed: {filename} ({len(sections)} sections)")

        print(f"Total: {len(self.chunks)} sections indexed.\n")

    def _split_into_sections(self, text: str, filename: str) -> List[dict]:
        """Splits a document into sections using Markdown headers.

        Each section becomes a 'chunk' — a searchable piece.

        Analogy: Separating a large book into smaller chapters
        so the librarian can quickly find the right chapter.

        Args:
            text: Complete document content.
            filename: Source file name.

        Returns:
            List of dictionaries with text and metadata for each section.
        """
        sections = []

        # Split by headers (## or #)
        parts = re.split(r'\n(?=#{1,3}\s)', text)

        for part in parts:
            part = part.strip()
            if not part:
                continue

            # Extract the section title (first line starting with #)
            lines = part.split('\n')
            title = lines[0].lstrip('#').strip() if lines else "Untitled"

            sections.append({
                "text": part,
                "filename": filename,
                "title": title,
                "size": len(part)
            })

        return sections

    def search(self, question: str, max_results: int = 3) -> List[dict]:
        """Searches for the most relevant chunks for a question.

        Uses simple keyword search. In a more advanced system,
        we'd use vector embeddings.

        Analogy: The librarian hears your question, thinks about
        which keywords are important, and goes to find the
        scrolls containing those words.

        Args:
            question: The user's question.
            max_results: How many chunks to return (default: 3).

        Returns:
            List of the most relevant chunks, ordered by relevance.
        """
        if not self.chunks:
            return []

        # Extract keywords from the question (words with 3+ characters)
        words = set(
            w.lower() for w in re.findall(r'\w+', question)
            if len(w) >= 3
        )

        # Score each chunk based on how many keywords it contains
        results = []
        for chunk in self.chunks:
            text_lower = chunk["text"].lower()
            score = sum(
                1 for word in words
                if word in text_lower
            )

            # Bonus if the word appears in the title
            title_lower = chunk["title"].lower()
            title_bonus = sum(
                2 for word in words
                if word in title_lower
            )

            total_score = score + title_bonus

            if total_score > 0:
                results.append({
                    **chunk,
                    "score": total_score
                })

        # Sort by score (highest first) and return the best
        results.sort(key=lambda x: x["score"], reverse=True)
        return results[:max_results]

    def format_context(self, chunks: List[dict]) -> str:
        """Formats the found chunks into text to send to the LLM.

        Analogy: The librarian arranges the found scrolls on a
        table, in order of relevance, ready for consultation.

        Args:
            chunks: List of chunks found by the search.

        Returns:
            Formatted text with the relevant excerpts.
        """
        if not chunks:
            return "No relevant documents found in the Royal Library."

        parts = ["RELEVANT DOCUMENTS FROM THE ROYAL LIBRARY:\n"]
        for i, chunk in enumerate(chunks, 1):
            parts.append(
                f"--- Document {i} (Source: {chunk['filename']}) ---\n"
                f"{chunk['text']}\n"
            )

        return "\n".join(parts)
```

---

## 7. Step 4 — The Tool Inventory (Tools)

Tools are functions that Toad can use to interact with the file system and search for additional information.

### File: src/tools.py

```python
# src/tools.py
# Toad Helper Tools — The Utility Belt
# Analogy: The items Toad carries on his belt:
#           a flashlight (read files), a map (list dirs),
#           and a magnifying glass (search text).

import os
import re
from typing import List, Optional


def read_file(filepath: str) -> str:
    """Reads the content of a file.

    Analogy: Toad grabs the flashlight and illuminates a
    specific scroll to read its content.

    Args:
        filepath: Path of the file to read.

    Returns:
        File content or error message.
    """
    try:
        # Security check: don't allow access outside the project
        absolute_path = os.path.abspath(filepath)
        project_dir = os.path.abspath(".")

        if not absolute_path.startswith(project_dir):
            return "ERROR: Access denied. I can only read files within the project."

        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Limit size to avoid exceeding LLM context
        if len(content) > 5000:
            content = content[:5000] + "\n\n[... content truncated (file too large) ...]"

        return content

    except FileNotFoundError:
        return f"ERROR: File '{filepath}' not found."
    except PermissionError:
        return f"ERROR: No permission to read '{filepath}'."
    except Exception as e:
        return f"ERROR reading file: {e}"


def list_directory(path: str = ".") -> str:
    """Lists files and folders in a directory.

    Analogy: Toad opens the map and shows all paths
    and rooms visible from the current position.

    Args:
        path: Directory to list (default: current directory).

    Returns:
        Formatted list of files and folders.
    """
    try:
        items = sorted(os.listdir(path))
        result = [f"Contents of '{path}':\n"]

        for item in items:
            full_path = os.path.join(path, item)
            if item.startswith("."):
                continue  # Ignore hidden files

            if os.path.isdir(full_path):
                result.append(f"  [folder] {item}/")
            else:
                size = os.path.getsize(full_path)
                result.append(f"  [file] {item} ({size} bytes)")

        return "\n".join(result)

    except FileNotFoundError:
        return f"ERROR: Directory '{path}' not found."
    except Exception as e:
        return f"ERROR listing directory: {e}"


def search_text(term: str, directory: str = "docs") -> str:
    """Searches for a term in all .md files in a directory.

    Analogy: Toad grabs the magic magnifying glass and searches
    for a specific word across all scrolls in the Royal Library.

    Args:
        term: Text to search for.
        directory: Where to search (default: docs folder).

    Returns:
        Excerpts where the term was found.
    """
    if not term or len(term) < 2:
        return "ERROR: Search term too short (minimum 2 characters)."

    results = []

    try:
        for filename in sorted(os.listdir(directory)):
            if not filename.endswith(".md"):
                continue

            filepath = os.path.join(directory, filename)
            with open(filepath, "r", encoding="utf-8") as f:
                lines = f.readlines()

            for i, line in enumerate(lines):
                if term.lower() in line.lower():
                    # Show the found line with context
                    start = max(0, i - 1)
                    end = min(len(lines), i + 2)
                    context = "".join(lines[start:end]).strip()
                    results.append(
                        f"\nFound in {filename} (line {i + 1}):\n"
                        f"  {context}"
                    )

        if not results:
            return f"Term '{term}' not found in any document."

        return f"Search for '{term}':\n" + "\n".join(results[:10])

    except Exception as e:
        return f"ERROR in search: {e}"


# Registry of all available tools
# Analogy: The official inventory of Toad's utility belt
AVAILABLE_TOOLS = {
    "read_file": {
        "function": read_file,
        "description": "Reads the content of a specific file",
        "usage": "read_file('docs/README.md')"
    },
    "list_directory": {
        "function": list_directory,
        "description": "Lists files and folders in a directory",
        "usage": "list_directory('docs')"
    },
    "search_text": {
        "function": search_text,
        "description": "Searches for a term in all documents",
        "usage": "search_text('deploy')"
    }
}
```

---

## 8. Step 5 — The Complete Agent

Now let's put it all together in the main file — the complete Toad Helper!

### File: src/main.py

```python
# src/main.py
# TOAD HELPER — Your First AI Agent
#
# Analogy: This is Toad himself. He receives questions,
# consults the Royal Library, uses his tools, and
# responds with wisdom and friendliness.
#
# Usage: python src/main.py

import os
import sys

# Add root directory to path for imports
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from openai import OpenAI
from src.config import (
    OPENAI_API_KEY,
    MODEL,
    DOCS_DIR,
    SYSTEM_PROMPT,
    MAX_TOKENS,
    TEMPERATURE,
)
from src.rag import RoyalLibrary
from src.tools import read_file, list_directory, search_text


def load_api_key():
    """Loads the API key, trying multiple sources.

    Analogy: Looking for the castle key — first
    in your pocket, then in the vault, then under the mat.
    """
    key = OPENAI_API_KEY

    # Try loading from .env file if variable is not set
    if not key:
        env_path = os.path.join(
            os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
            ".env"
        )
        if os.path.exists(env_path):
            with open(env_path, "r") as f:
                for line in f:
                    if line.startswith("OPENAI_API_KEY="):
                        key = line.strip().split("=", 1)[1]
                        break

    if not key or key == "sk-your-key-here":
        print("=" * 60)
        print("  ERROR: API key not configured!")
        print()
        print("  Configure using one of these methods:")
        print("  1. Environment variable: export OPENAI_API_KEY=sk-...")
        print("  2. .env file: OPENAI_API_KEY=sk-...")
        print("=" * 60)
        sys.exit(1)

    return key


class ToadHelper:
    """The Toad Helper — Your AI assistant for the project.

    Analogy: Toad is the most helpful NPC in the Mushroom Kingdom.
    He knows the Royal Library (your docs), has tools
    on his belt, and a powerful brain (LLM) to understand
    and answer questions.
    """

    def __init__(self):
        """Initializes the Toad Helper.

        Analogy: Toad wakes up, puts on his uniform, grabs the
        utility belt, and opens the Royal Library for consultation.
        """
        print("=" * 60)
        print("  TOAD HELPER — Initializing...")
        print("=" * 60)
        print()

        # 1. Connect to the LLM (the brain)
        key = load_api_key()
        self.client = OpenAI(api_key=key)
        self.model = MODEL
        print(f"  Brain connected: {self.model}")

        # 2. Index the Royal Library (RAG)
        self.library = RoyalLibrary(DOCS_DIR)

        # 3. Conversation history
        self.history: list = [
            {"role": "system", "content": SYSTEM_PROMPT}
        ]

        print("  Toad Helper ready to help!\n")

    def think(self, question: str) -> str:
        """Processes a question and generates a response.

        Flow:
        1. Search for relevant documents in the Royal Library
        2. Assemble the context (question + documents)
        3. Send to the LLM
        4. Return the response

        Analogy: Toad hears the question, runs to the Library,
        finds the relevant scrolls, reads everything, and comes
        back with the answer.

        Args:
            question: The user's question.

        Returns:
            The Toad Helper's response.
        """
        # Step 1: Search the Royal Library
        relevant_chunks = self.library.search(question)
        docs_context = self.library.format_context(relevant_chunks)

        # Step 2: Check if the user asked to use a tool
        tool_response = self._check_tools(question)

        # Step 3: Assemble the message with context
        user_message = f"""User question: {question}

{docs_context}
"""
        # Add tool result if any
        if tool_response:
            user_message += f"\nTool result:\n{tool_response}\n"

        # Step 4: Add to history and send to the LLM
        self.history.append({"role": "user", "content": user_message})

        try:
            response = self.client.chat.completions.create(
                model=self.model,
                messages=self.history,
                max_tokens=MAX_TOKENS,
                temperature=TEMPERATURE,
            )

            response_text = response.choices[0].message.content

            # Save to history for future context
            self.history.append(
                {"role": "assistant", "content": response_text}
            )

            # Limit history to avoid exceeding context
            if len(self.history) > 20:
                # Keep system prompt + last 18 messages
                self.history = [self.history[0]] + self.history[-18:]

            return response_text

        except Exception as e:
            return f"Error querying the LLM: {e}"

    def _check_tools(self, question: str) -> str:
        """Checks if the question requires tool usage.

        Analogy: Toad looks at the utility belt and
        decides if he needs the flashlight, the map, or the magnifying glass.

        Args:
            question: The user's question.

        Returns:
            Tool result or empty string.
        """
        question_lower = question.lower()

        # Detect file listing requests
        if any(p in question_lower for p in [
            "list file", "which file", "file list",
            "show file", "what file", "structure"
        ]):
            return list_directory("docs")

        # Detect specific search requests
        if "search" in question_lower or "find" in question_lower:
            # Extract the search term (words after "search/find")
            for trigger in ["search", "find"]:
                if trigger in question_lower:
                    idx = question_lower.index(trigger) + len(trigger)
                    term = question[idx:].strip().strip('"').strip("'")
                    if term:
                        return search_text(term)

        return ""


def main():
    """Main function — Starts the Toad Helper.

    Analogy: The player (Sofia) meets Toad in the Central Plaza
    and starts a conversation.
    """
    # Initialize the Toad Helper
    toad = ToadHelper()

    # Welcome banner
    print("=" * 60)
    print("  TOAD HELPER")
    print("  Your AI assistant for the project")
    print()
    print("  Special commands:")
    print("    'exit'    — End the conversation")
    print("    'clear'   — Clear conversation history")
    print("    'files'   — List available documents")
    print("=" * 60)
    print()

    while True:
        try:
            # Receive question from user
            question = input("Sofia: ").strip()

            # Special commands
            if not question:
                continue

            if question.lower() in ["sair", "exit", "quit"]:
                print("\nToad: Until the next adventure! It was a pleasure helping!")
                break

            if question.lower() in ["limpar", "clear"]:
                toad.history = [toad.history[0]]  # Keep only the system prompt
                print("\nToad: History cleared! Ready for new questions.\n")
                continue

            if question.lower() in ["arquivos", "files"]:
                print(f"\n{list_directory('docs')}\n")
                continue

            # Process the question
            print("\nToad: (consulting the Royal Library...)\n")
            response = toad.think(question)
            print(f"Toad: {response}\n")

        except KeyboardInterrupt:
            print("\n\nToad: See you later! Press Ctrl+C again to exit.")
            break
        except EOFError:
            print("\nToad: Until next time!")
            break


if __name__ == "__main__":
    main()
```

### File: requirements.txt

```
# requirements.txt — Project dependencies
# Analogy: List of ingredients for the potion

openai>=1.0.0
tiktoken>=0.5.0
```

---

## 9. Step 6 — Testing the Toad Helper

### Run the Agent

```bash
# In the toad-helper/ project root
# Make sure the virtual environment is active

# Option 1: Environment variable
export OPENAI_API_KEY="sk-your-key-here"
python src/main.py

# Option 2: .env file already configured
python src/main.py
```

### Conversation Examples

```
================================================================
  TOAD HELPER
  Your AI assistant for the project
================================================================

Sofia: What does this project do?

Toad: (consulting the Royal Library...)

Toad: TodoApp is a web application for personal task management.
With it, you can create, edit, delete and mark tasks as completed.

The project uses the following technologies:
- Frontend: React 18 with TypeScript
- Backend: Node.js with Express
- Database: PostgreSQL 15
- ORM: Prisma
- Tests: Jest
- Containers: Docker + Docker Compose
- CI/CD: GitHub Actions

Sofia: How do I deploy to production?

Toad: (consulting the Royal Library...)

Toad: To deploy to production, follow these steps:

1. Create a Pull Request from 'develop' to 'main'
2. Get 2 code review approvals
3. Merge into 'main'
4. GitHub Actions runs automatically:
   - All tests
   - Production build
   - Blue-green deploy
   - Smoke tests
   - Traffic promotion
5. Verify at: https://todoapp.mushroom-kingdom.com

In case of problems, you can rollback by accessing
GitHub Actions and running the 'rollback' workflow.

Sofia: What endpoints does the API have?

Toad: (consulting the Royal Library...)

Toad: The TodoApp API has the following endpoints:

Authentication:
- POST /api/auth/login — Authenticates user and returns JWT
- POST /api/auth/register — Registers a new user

Tasks:
- GET /api/todos — Lists all tasks for the user
- POST /api/todos — Creates a new task
- PUT /api/todos/:id — Updates a task
- DELETE /api/todos/:id — Deletes a task

All routes (except login and register) require a JWT token
in the header Authorization: Bearer <token>.

Sofia: exit

Toad: Until the next adventure! It was a pleasure helping!
```

---

## 10. Step 7 — Improvements and Next Steps

The Toad Helper we built is functional but basic. Here are improvements you can implement:

### Level 1: Simple Improvements

| Improvement | What to Do | Mario Analogy |
|---|---|---|
| **More documents** | Add more .md files to the docs/ folder | More books in the Royal Library |
| **Better search** | Use TF-IDF or BM25 for ranking | More experienced librarian |
| **Terminal colors** | Use the `colorama` library for colored output | Nicer game visuals |
| **Save conversations** | Save history to JSON file | Adventure journal |

### Level 2: Intermediate Improvements

| Improvement | What to Do | Mario Analogy |
|---|---|---|
| **Vector embeddings** | Use OpenAI embeddings for semantic search | Librarian who understands meaning, not just words |
| **Semantic Kernel** | Migrate to Semantic Kernel with plugins | Upgrade Toad's engine |
| **Web interface** | Create an interface with Streamlit or Gradio | Nice portal instead of terminal |
| **More tools** | Add: run commands, git status, etc. | More items on Toad's belt |

### Level 3: Advanced Improvements

| Improvement | What to Do | Mario Analogy |
|---|---|---|
| **Multi-agent** | Use AutoGen to create a team of agents | Coordinated multiplayer team |
| **Deploy** | Publish on Azure with AI Agents SDK | Take Toad to production |
| **MCP** | Connect to external tools via MCP | Warp Zones to other worlds |
| **Channel 3** | Integrate with GitHub to respond in issues | Toad in the Parakoopa mail system |

### Evolution Diagram

```
┌────────────────────────────────────────────────────────────┐
│              TOAD HELPER EVOLUTION                           │
│                                                             │
│  LEVEL 1 (You are here!)                                    │
│  ┌────────────┐                                             │
│  │ Toad Basic │  Python + OpenAI + simple RAG               │
│  │ Terminal   │  Keyword search                             │
│  └─────┬──────┘                                             │
│        │                                                    │
│        ▼                                                    │
│  LEVEL 2                                                    │
│  ┌────────────┐                                             │
│  │ Toad Pro   │  Semantic Kernel + Embeddings               │
│  │ Web        │  Beautiful web interface                    │
│  │ Interface  │  More tools                                 │
│  └─────┬──────┘                                             │
│        │                                                    │
│        ▼                                                    │
│  LEVEL 3                                                    │
│  ┌────────────┐                                             │
│  │ Toad Team  │  Multi-agent + MCP + Deploy                 │
│  │ Multi-Agent│  Complete team of agents                    │
│  │ Production │  Running in production                      │
│  └────────────┘                                             │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

---

## 11. Final Checklist — Boss Defeated?

Check if you completed all the steps. Each marked item is a hit on the Boss!

### Project Structure
- [ ] Created the `toad-helper/` folder with the correct structure
- [ ] Created the `docs/` folder with at least 3 .md documents
- [ ] Created the `src/` folder with the 4 Python files
- [ ] Created the `.env` file with your API key
- [ ] Created `.gitignore` to protect secrets

### Code
- [ ] `src/config.py` — Configurations defined (model, temperature, system prompt)
- [ ] `src/rag.py` — RoyalLibrary indexes and searches documents
- [ ] `src/tools.py` — 3 tools working (read, list, search)
- [ ] `src/main.py` — ToadHelper connects everything and runs in terminal

### Functionality
- [ ] The agent starts without errors
- [ ] The agent indexes documents correctly
- [ ] The agent answers questions based on documents
- [ ] The agent uses tools when appropriate
- [ ] The agent responds in English
- [ ] The agent admits when it doesn't know something
- [ ] The "exit" command terminates the agent
- [ ] The "clear" command clears history
- [ ] The "files" command lists documents

### Understanding
- [ ] You understand what RAG (Retrieval-Augmented Generation) is
- [ ] You understand what Tools are (functions the agent can use)
- [ ] You understand what the System Prompt is (the agent's personality)
- [ ] You understand why the API key must NEVER be committed
- [ ] You know the difference between Semantic Kernel, AutoGen, AI Agents SDK and Copilot Studio

### Boss Hit Counter

```
┌──────────────────────────────────────────────┐
│          BOSS BATTLE — RESULT                 │
│                                               │
│  0-5 checked:   Boss still strong             │
│  6-10 checked:  Boss weakening                │
│  11-15 checked: Boss almost defeated          │
│  16-18 checked: Boss DEFEATED!                │
│                                               │
│  18/18 = PERFECT VICTORY! Extra Star Coin!    │
└──────────────────────────────────────────────┘
```

---

## Conclusion — Power-Up Unlocked!

Sofia finished the Boss Battle. Her Toad Helper is working — answering questions, consulting documents, using tools. She built an AI agent **from scratch**, understanding each piece:

| Piece | What It Does | What Sofia Learned |
|---|---|---|
| **LLM (Brain)** | Understands questions and generates responses | How to connect to an AI model |
| **RAG (Library)** | Searches for information in documents | How to give specific knowledge to the agent |
| **Tools** | Interacts with the file system | How to give practical abilities to the agent |
| **System Prompt** | Defines personality and rules | How to control the agent's behavior |
| **History** | Remembers previous conversations | How to maintain context between questions |

### What Sofia Achieved in Star World (World 7)

| Level | What She Learned | Power-Up |
|---|---|---|
| **7-4** | Microsoft Agentic Framework | Universal Controller + Team Builder + Official Kit + Mario Maker |
| **7-5** | The 4 Operation Channels | IDE + Portal + ChatOps + Background |
| **7-6** | IDP and Backstage | Hub Castle with Catalog + Templates + Docs + Plugins + Search |
| **7-BOSS** | Build an Agent | Functional Toad Helper with LLM + RAG + Tools |

### Journey Recap

```
┌────────────────────────────────────────────────────────────┐
│                                                             │
│  STAR WORLD (WORLD 7) — COMPLETE!                           │
│                                                             │
│  Level 7-4: Learned the frameworks     ████████████ 100%    │
│  Level 7-5: Understood the 4 channels  ████████████ 100%    │
│  Level 7-6: Mastered IDP and Backstage ████████████ 100%    │
│  Level 7-BOSS: Built an agent          ████████████ 100%    │
│                                                             │
│  ★ ★ ★ STAR WORLD COMPLETE ★ ★ ★                           │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

---

**POWER-UP UNLOCKED: You now know how to build AI agents!**

Sofia is no longer just a player in the Mushroom Kingdom. She is now a **character creator**. She can build her own intelligent NPCs, give them knowledge, tools and personality. And that changes everything.

Next time Sofia faces a challenge — whether understanding a new project, navigating complex documentation, or automating repetitive tasks — she knows she can create a Toad Helper to assist her.

Star World is complete. But Sofia's journey in the Mushroom Kingdom continues. New worlds await, new bosses have appeared, and new power-ups are yet to come.

**Until the next adventure!**

---

| Previous: Level 7-6 — IDP and Backstage | Next: World 8 (coming soon) |
|---|---|

---

**Skill Unlocked!**
Sofia completed Star World and built her first AI agent!
All Star Coins from World 7 have been collected!

**Sources:**
- OpenAI API — https://platform.openai.com/docs
- Semantic Kernel — https://learn.microsoft.com/en-us/semantic-kernel/
- RAG Pattern — https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview
- Python Documentation — https://docs.python.org/3/

---

## References

- LangChain Python — https://python.langchain.com
- Semantic Kernel — https://learn.microsoft.com/en-us/semantic-kernel/
