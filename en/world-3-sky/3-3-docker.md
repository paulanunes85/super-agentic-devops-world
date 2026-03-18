---
title: "Level 3-3 -- The Art of Packaging: Docker and Containers"
description: "Docker demystified with Mario analogy — images as recipes, containers as finished dishes, Dockerfile as the recipe card, and Docker Compose as the meal planner"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-3", "docker", "containers", "dockerfile", "docker-compose"]
---

# Level 3-3 -- The Art of Packaging: Docker and Containers

---

## Change Log

| Version | Date       | Author                                     | Description                   |
|---------|------------|--------------------------------------------|-------------------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Initial creation (Mario Edition)|

---

## Table of Contents

- [Prologue: "It Works on My Machine"](#prologue-it-works-on-my-machine)
- [1. The Problem Docker Solves](#1-the-problem-docker-solves)
  - [1.1 Dependency Hell](#11-dependency-hell)
  - [1.2 The Solution: Package Everything Together](#12-the-solution-package-everything-together)
- [2. Fundamental Concepts](#2-fundamental-concepts)
  - [2.1 Image: The Recipe](#21-image-the-recipe)
  - [2.2 Container: The Finished Dish](#22-container-the-finished-dish)
  - [2.3 Dockerfile: The Recipe Card](#23-dockerfile-the-recipe-card)
  - [2.4 Docker Hub: The Recipe Sharing Server](#24-docker-hub-the-recipe-sharing-server)
  - [2.5 Concepts Table](#25-concepts-table)

<div align="center">
<img src="../../diagrams/svg/docker-architecture.svg" alt="Docker architecture: from Dockerfile to Container" width="800">
<br><em>Docker architecture: from Dockerfile to Container</em>
</div>
- [3. Dockerfile: Writing Your First Recipe](#3-dockerfile-writing-your-first-recipe)
  - [3.1 Anatomy of a Dockerfile](#31-anatomy-of-a-dockerfile)
  - [3.2 Essential Instructions](#32-essential-instructions)
  - [3.3 First Dockerfile: Node.js App](#33-first-dockerfile-nodejs-app)
  - [3.4 .dockerignore: What Does NOT Go in the Lunchbox](#34-dockerignore-what-does-not-go-in-the-lunchbox)
- [4. Essential Docker Commands](#4-essential-docker-commands)
  - [4.1 Build Image (docker build)](#41-build-image-docker-build)
  - [4.2 Run Container (docker run)](#42-run-container-docker-run)
  - [4.3 Manage Containers](#43-manage-containers)
  - [4.4 Manage Images](#44-manage-images)
  - [4.5 Command Table](#45-command-table)
- [5. Volumes: Persistent Data](#5-volumes-persistent-data)
  - [5.1 The Problem: Containers Are Ephemeral](#51-the-problem-containers-are-ephemeral)
  - [5.2 Volumes: The Permanent Vault](#52-volumes-the-permanent-vault)
  - [5.3 Bind Mounts: Real World Mirror](#53-bind-mounts-real-world-mirror)
- [6. Networking: Containers Talking](#6-networking-containers-talking)
  - [6.1 Ports: Castle Doors](#61-ports-castle-doors)
  - [6.2 Docker Networks: Connected Kingdoms](#62-docker-networks-connected-kingdoms)
- [7. Docker Compose: The Meal Planner](#7-docker-compose-the-meal-planner)
  - [7.1 The Problem: Multiple Containers](#71-the-problem-multiple-containers)
  - [7.2 docker-compose.yml: The Complete Menu](#72-docker-composeyml-the-complete-menu)
  - [7.3 Complete Example: TodoApp with Frontend + Backend + Database](#73-complete-example-todoapp-with-frontend--backend--database)
  - [7.4 Docker Compose Commands](#74-docker-compose-commands)
- [8. Multi-Stage Builds: Big Kitchen, Small Plate](#8-multi-stage-builds-big-kitchen-small-plate)
  - [8.1 The Size Problem](#81-the-size-problem)
  - [8.2 The Multi-Stage Solution](#82-the-multi-stage-solution)
  - [8.3 Practical Example: Optimized React App](#83-practical-example-optimized-react-app)
  - [8.4 Size Comparison](#84-size-comparison)
- [9. Docker Best Practices](#9-docker-best-practices)
  - [9.1 The 10 Commandments of Dockerfile](#91-the-10-commandments-of-dockerfile)
  - [9.2 Container Security](#92-container-security)
  - [9.3 Layer Cache Optimization](#93-layer-cache-optimization)
- [10. Docker in the Development Workflow](#10-docker-in-the-development-workflow)
  - [10.1 Local Development with Docker](#101-local-development-with-docker)
  - [10.2 Docker in CI/CD](#102-docker-in-cicd)
  - [10.3 Docker in Production](#103-docker-in-production)
- [11. Troubleshooting: When the Container Won't Start](#11-troubleshooting-when-the-container-wont-start)
- [Summary -- What We Learned in Level 3-3](#summary----what-we-learned-in-level-3-3)
- [References](#references)

---

## Prologue: "It Works on My Machine"

Sofia was proud. After weeks of work, her TodoApp was perfect. It ran beautifully on her computer. Responsive frontend, fast backend, integrated database. Everything working.

Then she sent the code to Luigi to test.

*"Sofia, it doesn't work."*

*"Impossible! It works perfectly on my machine!"*

*"Well, on mine it doesn't. My Node.js is version 16, yours is 18. My PostgreSQL is 14, yours is 15. And I don't have the DATABASE_URL environment variable configured."*

Yoshi appeared flying between the two.

*"This is the most classic problem in software development,"* said Yoshi. *"The code works on your machine but not on others'. You know why? Because you only sent the code. It's like sending a cake recipe but not sending the oven, the ingredients, and the exact measurements."*

Yoshi pulled a magic lunchbox out of his pocket.

*"This is Docker. Instead of just sending the recipe, you package EVERYTHING: the oven, the ingredients, the measurements, the temperature, and even the timer. Whoever receives the lunchbox just needs to open it and heat it up. It works IDENTICALLY in any kitchen in the world."*

Sofia looked at the lunchbox with shining eyes. *"You're telling me I can package my entire application -- with Node.js, PostgreSQL, environment variables, everything -- in a little box that runs on any computer?"*

*"Exactly. Welcome to Level 3-3."*

---

## 1. The Problem Docker Solves

### 1.1 Dependency Hell

A modern application depends on many things:

```
Your Application
├── Node.js v20.x (specific version!)
├── npm v10.x
├── PostgreSQL v16
├── Redis v7.2
├── DATABASE_URL variable
├── REDIS_URL variable
├── API_KEY variable
├── SSL Certificates
├── Operating system packages (libssl, libpq, etc.)
└── OS-specific configurations
```

If ANY of these dependencies are different on another machine, your application might:
- Fail to install
- Install but not run
- Run but with bugs
- Run but with different performance

> **MARIO ANALOGY:** Imagine each Mario level required a different console. Level 1-1 runs on the SNES. Level 1-2 needs the Nintendo 64. Level 1-3 only works on GameCube. Impossible, right? That's exactly how applications behave without Docker -- each one needs a specific "console" (environment).

### 1.2 The Solution: Package Everything Together

Docker solves this by creating **complete packages** (containers) that include:

- Your application
- All dependencies
- The minimum necessary operating system
- All configurations

```
WITHOUT Docker:
[Your Code] → "install Node 20, PostgreSQL 16, configure PATH..."
              → 50 manual steps, each machine different

WITH Docker:
[Your Code + Dockerfile] → docker build → docker run
                         → 2 commands, works IDENTICALLY on any machine
```

---

## 2. Fundamental Concepts

### 2.1 Image: The Recipe

A **Docker image** is like a **recipe**. It describes exactly:
- Which ingredients (dependencies) to use
- The order of the steps
- What the expected final result is

A recipe isn't food -- it's the instruction for making food. Similarly, an image isn't a running program -- it's the instruction for creating a running program.

```
Docker Image = Recipe
├── Base: Ubuntu 22.04 (type of oven)
├── Install Node.js 20 (ingredient 1)
├── Copy code (ingredient 2)
├── Install dependencies (mix)
├── Compile (bake)
└── Define startup command (serve)
```

**Image characteristics:**
- **Immutable**: Once created, never changes
- **Layered**: Each instruction creates a layer
- **Reusable**: The same image runs on any machine with Docker
- **Versionable**: Can have tags (v1.0, v2.0, latest)

### 2.2 Container: The Finished Dish

A **container** is a **running instance** of an image. If the image is the recipe, the container is the finished dish served at the table.

```
1 Recipe (Image) → Can make multiple dishes (Containers)

Image: node-app:v1.0
├── Container 1: running on port 3000
├── Container 2: running on port 3001
└── Container 3: running on port 3002
```

**Container characteristics:**
- **Ephemeral**: Can be created and destroyed easily
- **Isolated**: Each container runs separately from others
- **Lightweight**: Share the host's kernel (different from VMs)
- **Reproducible**: Same container runs identically anywhere

> **MARIO ANALOGY:** The **image** is the recipe for a Mushroom Kingdom birthday cake. You can make 10 cakes (containers) with the same recipe, and they'll all be identical. If one cake falls on the floor (container crashes), you make another identical one in seconds using the same recipe. The recipe is never affected by what happens to the cakes.

### 2.3 Dockerfile: The Recipe Card

The **Dockerfile** is the text file where you write the recipe (instructions for creating the image).

```dockerfile
# Dockerfile = Recipe Card
# Each line is a step in the recipe

FROM node:20-alpine       # Step 1: Start with the Node.js oven
WORKDIR /app              # Step 2: Go to the work counter
COPY package*.json ./     # Step 3: Get the ingredient list
RUN npm install           # Step 4: Buy all ingredients
COPY . .                  # Step 5: Put everything on the counter
RUN npm run build         # Step 6: Mix and bake
EXPOSE 3000               # Step 7: Open the serving window
CMD ["npm", "start"]      # Step 8: Serve!
```

### 2.4 Docker Hub: The Recipe Sharing Server

**Docker Hub** is like an **online recipe sharing server**. Developers from around the world share their images there.

```bash
# Download official Node.js image from Docker Hub
$ docker pull node:20-alpine

# Download official PostgreSQL image
$ docker pull postgres:16

# Upload your own image to Docker Hub
$ docker push meuusuario/meu-app:v1.0
```

**Popular official images on Docker Hub:**

| Image | What It Is | Downloads |
|-------|-----------|-----------|
| `node` | Node.js runtime | 1B+ |
| `postgres` | PostgreSQL database | 1B+ |
| `nginx` | Web server | 1B+ |
| `redis` | In-memory cache | 1B+ |
| `python` | Python runtime | 1B+ |
| `alpine` | Minimalist Linux (5MB!) | 1B+ |

### 2.5 Concepts Table

| Docker Concept | Mario Analogy | Cooking Analogy | Description |
|---------------|--------------|-----------------|-------------|
| **Image** | Level recipe | Cake recipe | Immutable template |
| **Container** | Level running | Finished cake | Active instance of the image |
| **Dockerfile** | Level construction card | Written recipe card | Instructions for creating the image |
| **Docker Hub** | Community level store | Online recipe book | Image repository |
| **Volume** | Save file that persists | Fridge (stores food) | Persistent data |
| **Network** | Pipes between levels | Corridor between kitchens | Communication between containers |
| **docker-compose** | World planner | Complete menu | Orchestrates multiple containers |
| **Layer** | Level layer | Recipe step | Each instruction = one layer |

---

## 3. Dockerfile: Writing Your First Recipe

### 3.1 Anatomy of a Dockerfile

Every Dockerfile follows a pattern:

```dockerfile
# 1. BASE IMAGE (which oven to use)
FROM <base-image>:<tag>

# 2. CONFIGURATION (prepare the kitchen)
WORKDIR /app
ENV NODE_ENV=production

# 3. DEPENDENCIES (buy ingredients)
COPY package*.json ./
RUN npm install

# 4. CODE (put on the counter)
COPY . .

# 5. COMPILATION (bake)
RUN npm run build

# 6. EXPOSURE (open the window)
EXPOSE 3000

# 7. EXECUTION (serve)
CMD ["npm", "start"]
```

### 3.2 Essential Instructions

| Instruction | What It Does | Cooking Analogy | Example |
|------------|-------------|-----------------|---------|
| `FROM` | Defines base image | Choose type of oven | `FROM node:20-alpine` |
| `WORKDIR` | Sets working directory | Go to the counter | `WORKDIR /app` |
| `COPY` | Copies files to image | Put ingredient on counter | `COPY . .` |
| `RUN` | Executes command during build | Execute recipe step | `RUN npm install` |
| `ENV` | Sets environment variable | Adjust temperature | `ENV PORT=3000` |
| `EXPOSE` | Documents port | Open serving window | `EXPOSE 3000` |
| `CMD` | Command when starting container | Serve the dish | `CMD ["npm", "start"]` |
| `ENTRYPOINT` | Fixed startup command | The official waiter | `ENTRYPOINT ["node"]` |
| `ARG` | Build-only variable | Temporary note | `ARG VERSION=1.0` |
| `HEALTHCHECK` | Health check | Taste the dish | `HEALTHCHECK CMD curl localhost:3000` |

### 3.3 First Dockerfile: Node.js App

```dockerfile
# ====================================
# Dockerfile for a TodoApp Node.js
# ====================================

# Step 1: Use Node.js 20 with Alpine Linux (lightweight image)
FROM node:20-alpine

# Step 2: Create and enter the working directory
WORKDIR /app

# Step 3: Copy ONLY the dependency files first
# (This optimizes cache -- if package.json hasn't changed, skip npm install)
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm ci --only=production

# Step 5: Copy the rest of the code
COPY . .

# Step 6: Compile TypeScript
RUN npm run build

# Step 7: Document the port
EXPOSE 3000

# Step 8: Command to start the application
CMD ["node", "dist/index.js"]
```

> **MARIO ANALOGY:** Each step of the Dockerfile is like building a layer of a level. `FROM` is the ground (base). `COPY package.json` are the first blocks. `RUN npm install` is positioning the power-ups. `COPY . .` is adding the enemies and coins. `CMD` is positioning Mario at the start. When someone runs `docker run`, the level begins!

### 3.4 .dockerignore: What Does NOT Go in the Lunchbox

`.dockerignore` works like `.gitignore` -- it tells Docker what NOT to copy into the image:

```
# .dockerignore
node_modules          # Will be installed inside the container
npm-debug.log
.git                  # Git history doesn't need to go
.env                  # NEVER send secrets to the image!
.env.local
dist                  # Will be compiled inside the container
coverage              # Test reports
*.md                  # Documentation doesn't run
.vscode               # Editor settings
.DS_Store             # macOS junk
```

**Why this matters:** Without `.dockerignore`, Docker copies EVERYTHING -- including `node_modules` (hundreds of MB), `.git` (entire history), and useless files. Your image becomes huge and slow.

---

## 4. Essential Docker Commands

### 4.1 Build Image (docker build)

```bash
# Build image from Dockerfile in current folder
$ docker build -t meu-app:v1.0 .

# Explained:
# docker build    = "build an image"
# -t meu-app:v1.0 = "name it 'meu-app' with tag 'v1.0'"
# .               = "use the Dockerfile in this folder"

# Build with different name
$ docker build -t minha-empresa/todo-app:latest .

# Build without cache (recompiles everything from scratch)
$ docker build --no-cache -t meu-app:v1.0 .
```

> **MARIO ANALOGY:** `docker build` is like **compiling a level** in the level editor. You've written the instructions (Dockerfile), now Docker assembles everything into an image ready to play.

### 4.2 Run Container (docker run)

```bash
# Run a simple container
$ docker run meu-app:v1.0

# Run with mapped port (-p host:container)
$ docker run -p 3000:3000 meu-app:v1.0
# Port 3000 on your computer points to port 3000 in the container

# Run in background (-d = detached)
$ docker run -d -p 3000:3000 meu-app:v1.0

# Run with environment variable
$ docker run -e DATABASE_URL="postgresql://..." meu-app:v1.0

# Run with volume (persistent data)
$ docker run -v meus-dados:/app/data meu-app:v1.0

# Run with custom name
$ docker run --name meu-todo -d -p 3000:3000 meu-app:v1.0

# Run and enter the container's terminal
$ docker run -it meu-app:v1.0 /bin/sh
```

### 4.3 Manage Containers

```bash
# See running containers
$ docker ps

# See ALL containers (including stopped ones)
$ docker ps -a

# Stop a container
$ docker stop meu-todo

# Start a stopped container
$ docker start meu-todo

# Restart
$ docker restart meu-todo

# View container logs
$ docker logs meu-todo

# View logs in real time
$ docker logs -f meu-todo

# Enter a running container's terminal
$ docker exec -it meu-todo /bin/sh

# Remove stopped container
$ docker rm meu-todo

# Forcefully remove container (even if running)
$ docker rm -f meu-todo
```

### 4.4 Manage Images

```bash
# List local images
$ docker images

# Download image from Docker Hub
$ docker pull node:20-alpine

# Remove image
$ docker rmi meu-app:v1.0

# Clean everything not in use
$ docker system prune -a
# CAUTION: Removes EVERYTHING not in use!
```

### 4.5 Command Table

| Command | What It Does | Mario Analogy |
|---------|-------------|---------------|
| `docker build` | Creates image | Compile the level |
| `docker run` | Creates and runs container | Press START on the level |
| `docker ps` | Lists active containers | See levels in progress |
| `docker stop` | Stops container | Pause the game |
| `docker start` | Restarts stopped container | Unpause |
| `docker rm` | Removes container | Delete save file |
| `docker logs` | View logs | Watch level replay |
| `docker exec` | Enter container | Enter a running level |
| `docker images` | Lists images | See available recipes |
| `docker pull` | Downloads image | Download level from store |
| `docker push` | Uploads image | Share level |

---

## 5. Volumes: Persistent Data

### 5.1 The Problem: Containers Are Ephemeral

Containers are **disposable**. When you remove a container, ALL data inside it is lost. It's like a Mario level that resets when you die -- everything you did vanishes.

```bash
# Container with database
$ docker run -d postgres:16

# You create tables, insert data...
# Then remove the container:
$ docker rm -f <id>

# ALL the data is gone!
```

### 5.2 Volumes: The Permanent Vault

**Volumes** are persistent storage. Data survives even when the container is destroyed.

```bash
# Create volume
$ docker volume create dados-postgres

# Use volume in container
$ docker run -d \
  -v dados-postgres:/var/lib/postgresql/data \
  -e POSTGRES_PASSWORD=minhasenha \
  postgres:16

# Now, even if the container is removed,
# the data remains in the volume!
```

> **MARIO ANALOGY:** A volume is like a **save vault** that exists outside the level. The level (container) can be destroyed and recreated, but your save (data) is safe in the vault. It's like a PlayStation memory card -- the game can crash, but your progress is saved on the card.

### 5.3 Bind Mounts: Real World Mirror

Bind mounts map a folder from your computer into the container. Perfect for development!

```bash
# Map local folder to container
$ docker run -d \
  -v $(pwd)/src:/app/src \
  -p 3000:3000 \
  meu-app:dev

# Now, editing files on your computer
# automatically updates inside the container!
```

**When to use what:**

| Type | When to Use | Example |
|------|------------|---------|
| **Volume** | Data that must persist | Database, uploads |
| **Bind Mount** | Local development | Source code, configs |
| **tmpfs** | Sensitive temporary data | Secrets in memory |

---

## 6. Networking: Containers Talking

### 6.1 Ports: Castle Doors

Containers are isolated -- like castles with locked doors. To access a service inside the container, you need to **map ports**.

```bash
# -p <host-port>:<container-port>
$ docker run -p 3000:3000 meu-frontend
$ docker run -p 8080:3001 meu-backend
$ docker run -p 5432:5432 meu-banco

# Now in your browser:
# localhost:3000 → Frontend
# localhost:8080 → Backend
# localhost:5432 → Database
```

> **MARIO ANALOGY:** Ports are like the **castle doors**. The castle (container) has internal doors (port 3000 inside). You need to connect an external door (port 3000 on your computer) to an internal door to get in. `-p 8080:3000` means: "door 8080 on the outside leads to door 3000 on the inside."

### 6.2 Docker Networks: Connected Kingdoms

Containers on the same Docker network can communicate by **name**.

```bash
# Create network
$ docker network create minha-rede

# Run containers on the same network
$ docker run -d --name banco --network minha-rede postgres:16
$ docker run -d --name api --network minha-rede -e DATABASE_URL="postgresql://banco:5432/db" meu-backend

# The backend can access the database by the name "banco"!
```

---

## 7. Docker Compose: The Meal Planner

### 7.1 The Problem: Multiple Containers

A real application has multiple services:

```bash
# Without Docker Compose, you need to run EVERYTHING manually:
$ docker network create todo-net
$ docker run -d --name db --network todo-net -v db-data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=senha postgres:16
$ docker run -d --name redis --network todo-net redis:7
$ docker run -d --name api --network todo-net -p 3001:3001 -e DATABASE_URL=... todo-backend
$ docker run -d --name web --network todo-net -p 3000:3000 todo-frontend

# 4 long commands. Need to stop everything? 4 more commands.
# Need to recreate? 4 more commands. Unsustainable.
```

### 7.2 docker-compose.yml: The Complete Menu

Docker Compose lets you define **all services** in a single file:

```yaml
# docker-compose.yml
# The complete TodoApp menu

version: '3.8'

services:
  # Dish 1: Database
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: sofia
      POSTGRES_PASSWORD: senha_secreta
      POSTGRES_DB: todoapp
    volumes:
      - db-data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U sofia"]
      interval: 5s
      timeout: 5s
      retries: 5

  # Dish 2: Cache
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  # Dish 3: Backend API
  api:
    build: ./backend
    ports:
      - "3001:3001"
    environment:
      DATABASE_URL: postgresql://sofia:senha_secreta@db:5432/todoapp
      REDIS_URL: redis://redis:6379
      NODE_ENV: development
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_started
    volumes:
      - ./backend/src:/app/src  # Hot reload in dev

  # Dish 4: Frontend
  web:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      NEXT_PUBLIC_API_URL: http://localhost:3001
    depends_on:
      - api
    volumes:
      - ./frontend/src:/app/src  # Hot reload in dev

volumes:
  db-data:  # Persistent volume for the database
```

> **MARIO ANALOGY:** `docker-compose.yml` is like the **world planner** in Mario. Instead of building each level manually (each container), you define the entire world in a single file: which levels exist, how they connect, what items each level needs. A single command (`docker-compose up`) and the entire world comes to life.

### 7.3 Complete Example: TodoApp with Frontend + Backend + Database

**Folder structure:**

```
todo-app/
├── docker-compose.yml          # Complete menu
├── frontend/
│   ├── Dockerfile              # Frontend recipe
│   ├── package.json
│   └── src/
├── backend/
│   ├── Dockerfile              # Backend recipe
│   ├── package.json
│   └── src/
└── prisma/
    └── schema.prisma           # Database structure
```

**Backend Dockerfile:**

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 3001
CMD ["node", "dist/index.js"]
```

**Frontend Dockerfile:**

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
```

### 7.4 Docker Compose Commands

```bash
# Start all services
$ docker-compose up

# Start in background
$ docker-compose up -d

# Start rebuilding images
$ docker-compose up --build

# Shut down everything
$ docker-compose down

# Shut down and remove volumes (CAUTION: deletes data!)
$ docker-compose down -v

# View logs for all services
$ docker-compose logs

# View logs for a specific service
$ docker-compose logs api

# View service status
$ docker-compose ps

# Execute command in a service
$ docker-compose exec api npx prisma migrate dev
```

| Compose Command | What It Does | Mario Analogy |
|----------------|-------------|---------------|
| `up` | Starts all services | Turn on all worlds |
| `up -d` | Starts in background | Worlds running off-screen |
| `up --build` | Rebuilds and starts | Recompile and restart |
| `down` | Shuts everything down | Turn off the console |
| `down -v` | Shuts down + deletes data | Factory reset |
| `logs` | View logs | Watch replay of everything |
| `ps` | View status | View world map |
| `exec` | Run command in service | Enter a level |

---

## 8. Multi-Stage Builds: Big Kitchen, Small Plate

### 8.1 The Size Problem

A simple Dockerfile includes EVERYTHING in the final image: compilers, build tools, development files. It's like shipping the entire kitchen along with the dish.

```dockerfile
# BAD Dockerfile (giant image)
FROM node:20          # 1.1 GB base!
WORKDIR /app
COPY . .
RUN npm install       # Includes devDependencies
RUN npm run build
CMD ["node", "dist/index.js"]

# Result: 1.5+ GB image
```

### 8.2 The Multi-Stage Solution

Multi-stage build uses **two stages**: one for cooking (build) and another for serving (production).

```dockerfile
# ===== STAGE 1: BIG KITCHEN (build) =====
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ===== STAGE 2: SMALL PLATE (production) =====
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
EXPOSE 3000
CMD ["node", "dist/index.js"]

# Result: ~150 MB image!
```

> **MARIO ANALOGY:** Multi-stage build is like **cooking in a big restaurant kitchen** (stage 1) and then **serving on a small elegant plate** (stage 2). In the kitchen, you need huge pots, knives, blenders, an industrial oven -- everything. But the customer only gets the final dish, beautiful and compact. You don't ship the kitchen with the food.

### 8.3 Practical Example: Optimized React App

```dockerfile
# ===== STAGE 1: React Build =====
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ===== STAGE 2: Serve with Nginx =====
FROM nginx:alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Result:
# Stage 1 (discarded): 1.2 GB
# Stage 2 (final):     25 MB!
```

### 8.4 Size Comparison

| Approach | Image Size | Deploy Time | Security |
|----------|-----------|-------------|----------|
| No multi-stage (node:20) | ~1.5 GB | Slow | Low (tools exposed) |
| Multi-stage (node:20-alpine) | ~150 MB | Fast | Medium |
| Multi-stage (nginx:alpine) | ~25 MB | Very fast | High |
| Distroless | ~15 MB | Near-instant | Very high |

---

## 9. Docker Best Practices

### 9.1 The 10 Commandments of Dockerfile

1. **Use Alpine images** whenever possible (smaller, more secure)
2. **Copy package.json BEFORE the code** (optimizes cache)
3. **Use .dockerignore** (exclude node_modules, .git, .env)
4. **Use multi-stage builds** (smaller images in production)
5. **Don't run as root** (use `USER node`)
6. **Use `npm ci` instead of `npm install`** (deterministic installation)
7. **Define HEALTHCHECK** (Docker knows if the app is alive)
8. **Use specific image versions** (node:20.11, not node:latest)
9. **Minimize layers** (combine RUNs when possible)
10. **Don't put secrets in the Dockerfile** (use environment variables or secrets)

### 9.2 Container Security

```dockerfile
# BEST PRACTICE: Don't run as root
FROM node:20-alpine

# Create unprivileged user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

WORKDIR /app
COPY --from=builder --chown=nextjs:nodejs /app .

# Switch to unprivileged user
USER nextjs

EXPOSE 3000
CMD ["node", "dist/index.js"]
```

> **MARIO ANALOGY:** Running a container as root is like playing with **permanent Star Power** -- seems great, but if a hacker takes control, they also have Star Power. Running as a regular user is like playing normal -- if the hacker gets in, they're Small Mario and can't cause as much damage.

### 9.3 Layer Cache Optimization

```dockerfile
# BAD: any code change invalidates the npm install cache
COPY . .
RUN npm install

# GOOD: package.json rarely changes, npm install stays cached
COPY package*.json ./
RUN npm ci
COPY . .
```

Docker caches each layer. If a layer hasn't changed, it's reused. By copying `package.json` separately, `npm ci` only re-executes when dependencies change -- not when you change the code.

---

## 10. Docker in the Development Workflow

### 10.1 Local Development with Docker

```bash
# Start complete dev environment
$ docker-compose up

# What happens:
# 1. PostgreSQL starts on port 5432
# 2. Redis starts on port 6379
# 3. Backend starts on port 3001 (with hot reload)
# 4. Frontend starts on port 3000 (with hot reload)
# 5. Everything connected automatically

# Now you edit code in VS Code
# and changes appear INSTANTLY in the browser!
```

### 10.2 Docker in CI/CD

```yaml
# .github/workflows/ci.yml
name: CI Pipeline

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_PASSWORD: teste
        ports:
          - 5432:5432
    steps:
      - uses: actions/checkout@v4
      - name: Build and Test
        run: |
          docker build -t meu-app:test .
          docker run meu-app:test npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Build and Push
        run: |
          docker build -t meuregistry/meu-app:${{ github.sha }} .
          docker push meuregistry/meu-app:${{ github.sha }}
```

### 10.3 Docker in Production

In production, containers run on **orchestrators** like Kubernetes or Azure Container Apps:

```
Development (your computer)
    → docker-compose up

CI/CD (GitHub Actions)
    → docker build → docker push

Production (Azure/AWS/GCP)
    → Kubernetes / Container Apps
    → Automatic scaling
    → Health checks
    → Load balancing
```

---

## 11. Troubleshooting: When the Container Won't Start

| Problem | Likely Cause | Solution |
|---------|-------------|---------|
| "port already in use" | Something already using the port | `docker ps` and stop the previous container, or change the port |
| "ENOENT: no such file" | File not copied | Check COPY in Dockerfile and .dockerignore |
| "npm ERR! code ELIFECYCLE" | Build error | `docker build --no-cache` for clean rebuild |
| Container starts and dies | App crashed | `docker logs <id>` to see the error |
| "connection refused" to database | DB not ready yet | Use `depends_on` with healthcheck |
| Image too large | No multi-stage | Implement multi-stage build |
| Changes not appearing | Layer cache | `docker-compose up --build` |

**Universal debug command:**

```bash
# See what happened in the container's last moments
$ docker logs --tail 50 <container-id>

# Enter the container to investigate
$ docker exec -it <container-id> /bin/sh
```

---

## Summary -- What We Learned in Level 3-3

| Concept | Mario/Cooking Analogy | Main Command |
|---------|----------------------|--------------|
| Docker | Magic lunchbox | `docker` |
| Image | Recipe | `docker build` |
| Container | Finished dish | `docker run` |
| Dockerfile | Recipe card | Text file |
| Docker Hub | Online recipe book | `docker pull/push` |
| Volume | Save vault | `-v data:/path` |
| Port | Castle door | `-p 3000:3000` |
| Docker Compose | World planner | `docker-compose up` |
| Multi-stage | Big kitchen, small plate | `FROM ... AS builder` |
| .dockerignore | List of what not to package | Text file |

**The big lesson:** Docker eliminates "it works on my machine" forever. You package everything -- code, dependencies, operating system, configurations -- into a little box that runs identically anywhere. From your computer to the cloud server, the result is ALWAYS the same. It's the ultimate power of reproducibility.

---

## References

- [Docker Official Documentation](https://docs.docker.com/)
- [Docker Hub -- Image Repository](https://hub.docker.com/)
- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)
- [Docker Compose Reference](https://docs.docker.com/compose/compose-file/)
- [Docker Best Practices -- Official Guide](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Multi-Stage Builds -- Docker Docs](https://docs.docker.com/build/building/multi-stage/)
- [Node.js Docker Best Practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)
- [Docker Security -- OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html)
- [Azure Container Apps -- Microsoft Learn](https://learn.microsoft.com/pt-br/azure/container-apps/)
- [Play with Docker -- Free Online Lab](https://labs.play-with-docker.com/)

---

*Level 3-3 complete! You've mastered Docker -- the art of packaging applications to work anywhere. In the next level, we'll train before battle: Software Testing, the art of ensuring everything works BEFORE you ship.*

---

<div align="center">

⬅️ [Previous: Level 3-2: Terminal](3-2-terminal.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 3-4: Tests](3-4-testes.md)

</div>
