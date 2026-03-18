---
title: "Chapter 4F — MCP (Model Context Protocol) / The Warp Zones"
description: "How to use the Model Context Protocol to connect your AI agents to external tools and services."
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "2.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-6", "mcp", "model-context-protocol"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 2.0.0 | 2026-03-18 | Paula Silva | Mario Bros version — complete rewrite with Super Mario analogies |
| 1.0.0 | 2026-03-06 | Paula Silva | Original version with RPG analogies |

# Chapter 4F — MCP (Model Context Protocol)
## The Warp Zones — Connecting Your Characters to Other Worlds

---

**Prepared for:** Sofia
**Version:** 2.0 — Mushroom Kingdom Edition
**Author:** Paula Silva | Microsoft Latam Software GBB
**Date:** March 2026
**Language:** English (translated from pt-BR)
**Collection:** Agentic DevOps — Super Mario Bros Edition

---

## TABLE OF CONTENTS

1. [Introduction: The Warp Zone Room](#introduction)
2. [What is MCP?](#what-is-mcp)
3. [MCP Architecture: The 4 Pillars](#mcp-architecture)
4. [How to Configure MCP](#how-to-configure-mcp)
5. [Popular MCP Servers](#popular-mcp-servers)
6. [MCP Security](#mcp-security)
7. [MCP + Agents = Complete Agentic DevOps](#mcp-agents)
8. [Next Steps](#next-steps)

---

## Introduction: The Warp Zone Room

Sofia arrived at a secret room in the Mushroom Kingdom — that hidden room behind a wall of blocks that everyone has seen in World 1-2 of Super Mario Bros. There stood three glowing pipes, each leading to a completely different world. The first pipe, with a bluish glow, led to the **Figma World**, where designs come to life in colors and typography. The second pipe, dark green, led to the **PostgreSQL Underground World**, where ancient data is stored in tables and columns. In the corner, the purple pipe led to the **Azure Boards World**, where tasks and projects flow like coins in a bonus level.

Each pipe represents a **Warp Zone** — a connection to external tools, parallel worlds that would normally remain isolated from your character's reality (your AI agent). But with MCP, these Warp Zones open up. Your character can now **travel** through them, fetch information, execute actions, and return with knowledge from other worlds.

Welcome to the chapter where you learn to build and use these **Warp Zones**.

> Remember in the original Super Mario Bros, when you found that secret room that said "WELCOME TO WARP ZONE" and had pipes that took you straight to advanced worlds? MCP is exactly that — except instead of skipping worlds, you CONNECT worlds!

---

## What is MCP?

**MCP** stands for **Model Context Protocol** — an open, standardized protocol that allows AI agents to connect to external tools and data. It's not exclusive to GitHub Copilot or any single platform. MCP is a universal contract that says: *"If you follow these rules, I can connect to you."*

Think of MCP as an agreement between your character and the external world. The character says: *"I want information about designs, or database data, or task status."* And MCP responds: *"Great! Here are the tools you can use to access that."*

### The Mario Analogy: Warp Zones

Your character (Mario) lives in **World 1** — he knows everything inside this world (code files, local documentation, your project's context). But this knowledge is limited. He can't see designs in Figma, can't run queries on the database, can't update a card in Azure Boards.

With MCP, you open **Warp Zones** to other worlds. Each Warp Zone leads to an **MCP Server** — a special world where unique resources exist. The **Figma MCP Server** lives in the World of Designs. The **PostgreSQL MCP Server** lives in the Underground World of Data. And so on.

When your character needs information from another world, he **enters the Warp Zone** (makes an MCP request), **grabs the information**, and **comes back with it**. Suddenly, he's no longer a Mario stuck in World 1. He's a Mario who can travel between ALL the worlds, collecting power-ups and resources from each one!

| Situation | Mario Analogy |
|---|---|
| **Without MCP** | Mario stuck in World 1. Limited. Only sees what's in front of him. |
| **With MCP** | Mario travels between World 1, 2, 3, 4... Unlimited! Collects resources from all worlds. |

### Without MCP vs With MCP

**Without MCP:** The agent is isolated. It sees code, documentation, error messages. But it can't check a design in Figma, can't run a SQL query, can't update a task. It needs to ask the user to do those things. It's like Mario without Warp Zones — walking level by level, no shortcuts.

**With MCP:** The agent is a true team member. It can read designs, run queries, create tasks, update status. It becomes a complete DevOps agent. It's like Mario with access to ALL the Warp Zones — traveling freely between worlds, collecting what it needs and coming back more powerful!

### MCP is an Open Standard

One crucial thing: **MCP doesn't belong to anyone.** It's not exclusive to GitHub Copilot. It's not Microsoft's, it's not Anthropic's. It's an open standard — any tool can implement an MCP server, and any agent that understands MCP can connect to it.

This means you're not locked into an ecosystem. If you create an MCP Server for your custom tool, any AI agent that supports MCP (Claude, GitHub Copilot, and many others) can use it.

> Think of it this way: the Warp Zone is a universal standard. It doesn't matter if you're playing on NES, SNES, Switch, or emulator — the Warp Zone works the same. MCP is like that: it works on any agent that supports the protocol.

---

## MCP Architecture: The 4 Pillars

MCP isn't complicated. It has 4 main components. Let's explore each one.

### 1. MCP Server (The Other World)

The MCP Server is the **world** on the other side of the Warp Zone. It's a process (usually running on the local machine or on a remote server) that exposes tools and data to be accessed via MCP.

**Examples:**
- A Figma MCP server that exposes the Figma API (World of Designs)
- A PostgreSQL MCP server that allows running queries on the database (Underground World of Data)
- A GitHub MCP server that fetches repository information (World of Repos)

The server implements the logic: when a client requests a tool, the server executes and returns the result.

> Each MCP Server is like a different world in Mario. The Water World has fish and coral. The Castle World has lava and Bowser. Each world has its own unique resources and challenges.

### 2. MCP Client (Mario Traveling Through the Warp Zone)

The MCP Client is your **character** — the AI agent. It's the side that MAKES requests. When the character needs data (e.g., *"I want to know the design colors"*), it enters the Warp Zone and makes an MCP call to the server.

The client (your agent) doesn't implement any logic from the other world. It only knows how to **travel through the Warp Zone** and talk to the servers via MCP, and then uses the tools they expose.

> Mario doesn't need to know how to build the Water World. He just needs to know how to swim when he gets there! Similarly, the MCP Client doesn't need to implement Figma's logic — it just needs to know how to communicate with the Figma server.

### 3. Tools (Items Available in That World)

Tools are the **items** that the server offers. Each tool is an action or query that the client can perform — like the specific items that exist in each Mario world.

**Examples:**
- A `read_file` tool on the file server (like finding a mushroom in a block)
- A `query_database` tool on the PostgreSQL MCP (like finding hidden coins)
- A `get_design_colors` tool on the Figma MCP (like finding the Fire Flower)

The client discovers which tools are available when it connects to the server, and then can use them.

> When Mario enters the Water World, he discovers he can swim, collect starfish, and defeat Cheep Cheep fish. In the Castle World, he can jump over lava and face Bowser. Each world has its own "items" and available actions!

### 4. Context (Collected Resources)

Context is the information that flows between client and server. When the client sends a request, it sends context (data, parameters). The server processes and returns context (result).

MCP also supports **resources** — information that the server makes continuously available (like a file, a design, database data). The client can access these resources to read data.

> It's like Mario's backpack. When he travels to another world, he brings information about what he needs. When he returns, he brings the resources he collected. Context is this exchange of information between worlds!

### Summary Table: The 4 Pillars

| Component | What It Is | Mario Analogy | Example | Technical Detail |
|---|---|---|---|---|
| **MCP Server** | Tool provider | The other world beyond the Warp Zone | Figma MCP Server providing access to designs | Process that implements handlers for tools and resources |
| **MCP Client** | Tool consumer | Mario traveling through the Warp Zone | Your AI agent making requests | Connects to the server and uses available tools |
| **Tools** | Available actions | Items available in that world | `read_design`, `query_data`, `create_task` | Function with input parameters and structured output |
| **Context / Resources** | Shared data | Resources collected between worlds | Design files, database rows, task lists | Information that flows between client and server |

---

## How to Configure MCP

MCP is configured via JSON file. In VS Code with Copilot, you edit `.vscode/mcp.json`. In it, you declare the MCP servers (Warp Zones) you want to use and how to connect to them.

> Think of `mcp.json` as the **Warp Zone Map**. It lists: which worlds exist, how to reach each one, and what the entry password (API Key) is.

### mcp.json File Structure

```json
{
  "mcpServers": {
    "server-id": {
      "type": "stdio" | "sse",
      "command": "node | python | bash | ...",
      "args": ["path/to/script.js", "arg1", "arg2"],
      "env": {
        "VAR_NAME": "${input:varName}",
        "API_KEY": "${env:FIGMA_API_KEY}"
      },
      "alwaysAllow": ["tool-name"]
    }
  }
}
```

### Fields Explained

| Field | What It Does | Mario Analogy |
|---|---|---|
| **type** | How the client connects to the server. `"stdio"` = local process (default). `"sse"` = HTTP streaming. | Pipe type: green (local) or golden (remote) |
| **command** | Which program to run. Can be `node`, `python`, `bash`, etc. | Which character enters the pipe |
| **args** | Command arguments. Usually the script path and parameters. | Destination world coordinates |
| **env** | Environment variables. Use `${env:VAR_NAME}` to read from the system or `${input:varName}` to ask the user. | Secret keys to open the Warp Zone |
| **alwaysAllow** | Tools that don't need user confirmation. Use carefully. | Items Mario can grab without needing to confirm |

### Example 1: Figma MCP Server (Warp Zone to the World of Designs)

Connecting to Figma to read designs and colors directly.

```json
{
  "mcpServers": {
    "figma": {
      "type": "stdio",
      "command": "node",
      "args": [
        "~/.local/share/npm/lib/node_modules/figma-mcp-server/index.js"
      ],
      "env": {
        "FIGMA_API_KEY": "${input:figmaApiKey}",
        "FIGMA_FILE_ID": "${input:figmaFileId}"
      }
    }
  }
}
```

**What it does:** When your character needs design information (colors, typography, components), it can enter this Warp Zone and use the `get_design_data` tool from the Figma MCP Server. It's like Mario entering a pipe that leads to the World of Designs and coming back with a color palette!

### Example 2: PostgreSQL MCP Server (Warp Zone to the Underground World of Data)

Connecting to a PostgreSQL database to run queries directly.

```json
{
  "mcpServers": {
    "postgres": {
      "type": "stdio",
      "command": "node",
      "args": [
        "~/.local/share/npm/lib/node_modules/@modelcontextprotocol/server-postgres/dist/index.js"
      ],
      "env": {
        "PGHOST": "${input:pgHost}",
        "PGPORT": "${input:pgPort}",
        "PGUSER": "${input:pgUser}",
        "PGPASSWORD": "${input:pgPassword}",
        "PGDATABASE": "${input:pgDatabase}"
      }
    }
  }
}
```

**What it does:** Your character can run SQL queries and explore the database structure. Tools like `query`, `get_schema`, `list_tables` become available. It's like Toad (the data guardian) traveling through the underground Warp Zone to fetch treasures hidden in tables!

### Example 3: Azure Boards MCP Server (Warp Zone to the World of Tasks)

Connecting to Azure Boards to manage work items and projects.

```json
{
  "mcpServers": {
    "azure-devops": {
      "type": "stdio",
      "command": "node",
      "args": [
        "~/.local/share/npm/lib/node_modules/@modelcontextprotocol/server-azure-devops/dist/index.js"
      ],
      "env": {
        "AZURE_DEVOPS_ORG": "${input:azureOrg}",
        "AZURE_DEVOPS_PROJECT": "${input:azureProject}",
        "AZURE_DEVOPS_TOKEN": "${input:azureToken}",
        "AZURE_DEVOPS_PAT": "${env:AZURE_DEVOPS_PAT}"
      }
    }
  }
}
```

**What it does:** Your character can create, update, and list work items. It can check sprints, assignees, status. Tools like `create_work_item`, `update_work_item`, `list_work_items`. It's like having access to the Mushroom Kingdom's quest board — seeing which quests are pending, which are in progress, and which have been completed!

---

## Popular MCP Servers

There are several ready-to-use MCP servers (Warp Zones). Here are the main ones:

| Name | NPM Package | What It Does (World It Opens) | Main Tools | Use Case |
|---|---|---|---|---|
| **filesystem** | `@anthropic/mcp-server-filesystem` | Warp Zone to the World of Files | `read_file`, `write_file`, `list_directory`, `delete_file` | Your character manages files like a human |
| **PostgreSQL** | `@modelcontextprotocol/server-postgres` | Warp Zone to the Underground World of Data | `query`, `get_schema`, `list_tables`, `describe_table` | Agent can explore and query DBs |
| **GitHub** | `@anthropic/mcp-server-github` | Warp Zone to the World of Repos | `list_repos`, `get_issue`, `create_pull_request`, `list_files` | Full integration with your GitHub workflow |
| **Figma** | `figma-mcp-server` (community) | Warp Zone to the World of Designs | `get_design_data`, `list_files`, `get_colors`, `get_typography` | Designs are accessible as context |
| **Azure DevOps** | `@modelcontextprotocol/server-azure-devops` | Warp Zone to the World of Tasks | `create_work_item`, `update_work_item`, `list_work_items` | Agent manages tasks and projects |
| **Slack** | `@modelcontextprotocol/server-slack` | Warp Zone to the World of Communication | `send_message`, `list_channels`, `get_conversation_history` | Agent can communicate with the team |
| **Docker** | `docker-mcp-server` (community) | Warp Zone to the World of Containers | `list_containers`, `run_container`, `stop_container`, `exec_command` | DevOps agent controls your infrastructure |
| **Memory** | `@modelcontextprotocol/server-memory` | Warp Zone to the World of Memories | `save_memory`, `retrieve_memory`, `list_memories` | Agent maintains context between conversations |

---

## MCP Security

When you connect an agent to external tools, security is critical. Here are the essential practices.

### Golden Rule: Never Hardcode Secrets

**NEVER do this:**
```
"FIGMA_API_KEY": "sk-fgkjf983jf983jf"
```
Hardcoded secrets can leak. It's like shouting the location of a secret Warp Zone in the middle of the Mushroom Kingdom — everyone hears it, including the Koopas!

**ALWAYS do this:**
Use `${input:varName}` or `${env:VAR_NAME}` to read from environment variables or ask the user.

### The Mario Analogy: The Warp Zone Key

Imagine the database password is the **secret key to a Warp Zone**. You never shout that key in the middle of a level full of enemies. You keep it in your **secret pocket** (`.env` file), and only show it when you need to enter the Warp Zone.

With MCP it's the same. Your `API_KEY` is the Warp Zone key. You don't put it in the `mcp.json` file, don't put it in git, don't put it anywhere visible. You store it in a `.env` file (which you **NEVER** commit to git), or you ask the user to enter it when needed (`${input:varName}`).

### Security Best Practices Table

| Practice | Why | Bad Example | Good Example |
|---|---|---|---|
| Use `${env:VAR_NAME}` | Reads environment variables from the system | `PGPASSWORD: "password123"` | `PGPASSWORD: ${env:POSTGRES_PASSWORD}` |
| Use `.env` files | `.env` is a local file that isn't committed to git | Secrets in git | Secrets in `.env`, `.gitignore` includes `.env` |
| Use `${input:varName}` | Asks the user to enter the value | API_KEY visible in the file | `API_KEY: ${input:apiKey}` (asks when used) |
| `alwaysAllow` with care | Tools that run without confirmation | `delete_database` in alwaysAllow | Only read-only tools in alwaysAllow |
| Tokens with expiration | Use tokens that expire, not permanent passwords | Permanent password | JWT token with 1-hour TTL |
| Logs and auditing | Record who used which tool and when | No logs | Logs in `/var/log/mcp/` with timestamps |

> **Mario's Rule:** The Star (invincibility star) has a limited duration. Your tokens should be the same — temporary, not eternal!

---

## MCP + Agents = Complete Agentic DevOps

Now you understand MCP in isolation. But what's the big picture? How does MCP fit into Agentic DevOps?

### The Complete Mushroom Kingdom Team

| Component | Mario Analogy | What It Does |
|---|---|---|
| **Agent** (Who) | Playable character (Mario, Luigi, Toad...) | Your character, the AI agent |
| **Skill** (How) | Power-Up (Super Mushroom, Fire Flower...) | A specific competency the agent has |
| **Instruction** (Rules) | Game rules (gravity, lava kills...) | How the agent should behave |
| **Prompt** (Shortcuts) | Warp Pipe (green pipe to secret area) | The action you invoke to make the agent act |
| **Hook** (Automations) | "?" Block (hit it and something happens) | Automatic triggers |
| **MCP** (Connections) | Warp Zone (portal to another world) | Connections to other worlds |

### The Complete Vision

**Without MCP:** Your character becomes a solo player stuck in World 1. They read code, suggest changes, but can't check designs, can't query the database, can't update tasks. They need to ask the human to do those things. Mario without Warp Zones.

**With MCP:** Your character becomes a champion of the entire Mushroom Kingdom. They read code, check designs in the Figma World, query the database in the Underground World, update tasks in the Tasks World, notify the team in the Slack World, all automatically. They become a complete member of your team. Mario WITH Warp Zones — traveling freely between all worlds!

> **The Magic of MCP:** Transforms a Mario stuck in World 1 into a Mario who travels through ALL the worlds. Multiplies your impact capacity by orders of magnitude.

---

## Next Steps: Building Your Own MCP Server

Now that you understand how to use ready-made Warp Zones, what if you need to create a Warp Zone to a custom world? You can create your own MCP Server!

An MCP Server is a Node.js script (or Python, or any language) that implements the MCP protocol. It needs to expose tools and resources that the client can call.

**To create your own server, you need to:**

1. **Install the MCP SDK:** `npm install @modelcontextprotocol/sdk`
2. **Create a script** that implements the Server class
3. **Define the tools** you want to expose (the items of your world)
4. **Add handlers** for each tool
5. **Publish on npm** (optional) or use locally
6. **Configure in your `mcp.json`** with `command: "node"` and `args: ["path/to/server.js"]`

> It's like building your own world in Mario Maker! You define the scenery, the blocks, the items, the enemies — and then connect that world to the main map so Mario can visit.

---

## Sofia Unlocked the Warp Zones!

Sofia entered the Warp Zone room as a beginner who only knew World 1. She left as a **Warp Zone Master** who understands how to connect her characters to any world, open portals to external tools, and create a fully connected and automated development environment.

The Warp Zones are open. The worlds are within your reach. Your characters can now travel freely between all of them!

**Next stop:** Coordinated Multiplayer Mode — playing as a team!

---

**POWER-UP UNLOCKED!**
Sofia now masters MCP and Warp Zones.
She collected the Star Coin from this world and headed to the next...

**Source:** Model Context Protocol - Official Documentation — https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp

---

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Extending Copilot Chat with MCP](https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [MCP Specification](https://spec.modelcontextprotocol.io)

---

<div align="center">

⬅️ [Previous: Level 6-5: Hooks](6-5-hooks.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 6-7: Orchestration](6-7-orchestration.md)

</div>
