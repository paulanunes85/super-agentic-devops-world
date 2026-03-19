---
title: "Level 4-7 -- Super Star Mode: Cache and Performance"
description: "Redis, CDN, cache strategies, performance optimization and lazy loading — how to activate Super Star mode and make everything run at maximum speed"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
tags:
  - agentic-devops
  - mario
  - world-4
  - cache
  - redis
  - cdn
  - performance
  - lazy-loading
sidebar_position: 7
format: md
---

# Level 4-7 -- Super Star Mode: Cache and Performance

---

## Change Log

| Version | Date       | Author                                  | Description          |
|---------|------------|----------------------------------------|----------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation    |

---

## Table of Contents

- [Prologue: Why Is It So Slow?](#prologue-why-is-it-so-slow)
- [1. What Is Performance?](#1-what-is-performance)
  - [1.1 Fundamental Metrics](#11-fundamental-metrics)
  - [1.2 Why Performance Matters](#12-why-performance-matters)
  - [1.3 The 3-Second Rule](#13-the-3-second-rule)
- [2. Cache: Power-Ups in Your Pocket](#2-cache-power-ups-in-your-pocket)
  - [2.1 What Is Cache](#21-what-is-cache)
  - [2.2 How Cache Works](#22-how-cache-works)
  - [2.3 Cache Hit vs Cache Miss](#23-cache-hit-vs-cache-miss)
  - [2.4 Cache Levels](#24-cache-levels)
- [3. Redis: The Magic Pocket](#3-redis-the-magic-pocket)
  - [3.1 What Is Redis](#31-what-is-redis)
  - [3.2 Redis Data Structures](#32-redis-data-structures)
  - [3.3 Redis in Practice: TodoApp](#33-redis-in-practice-todoapp)
  - [3.4 Common Patterns with Redis](#34-common-patterns-with-redis)
  - [3.5 Redis on Azure](#35-redis-on-azure)
- [4. CDN: Item Shops in Every World](#4-cdn-item-shops-in-every-world)
  - [4.1 What Is CDN](#41-what-is-cdn)
  - [4.2 How CDN Works](#42-how-cdn-works)
  - [4.3 Configuring CDN on Azure](#43-configuring-cdn-on-azure)
  - [4.4 What to Put on the CDN](#44-what-to-put-on-the-cdn)
- [5. Cache Strategies](#5-cache-strategies)
  - [5.1 Cache-Aside (Lazy Loading)](#51-cache-aside-lazy-loading)
  - [5.2 Write-Through](#52-write-through)
  - [5.3 Write-Behind (Write-Back)](#53-write-behind-write-back)
  - [5.4 TTL: Cache Time to Live](#54-ttl-cache-time-to-live)
  - [5.5 Cache Invalidation](#55-cache-invalidation)
- [6. Backend Performance](#6-backend-performance)
  - [6.1 Query Optimization (N+1 Problem)](#61-query-optimization-n1-problem)
  - [6.2 Database Indexes](#62-database-indexes)
  - [6.3 Connection Pooling](#63-connection-pooling)
  - [6.4 Response Compression](#64-response-compression)
- [7. Frontend Performance](#7-frontend-performance)
  - [7.1 Lazy Loading: Build When Needed](#71-lazy-loading-build-when-needed)
  - [7.2 Code Splitting](#72-code-splitting)
  - [7.3 Image Optimization](#73-image-optimization)
  - [7.4 Debounce and Throttle](#74-debounce-and-throttle)
- [8. Performance Monitoring](#8-performance-monitoring)
  - [8.1 Core Web Vitals](#81-core-web-vitals)
  - [8.2 APM: Application Performance Monitoring](#82-apm-application-performance-monitoring)
  - [8.3 Profiling Tools](#83-profiling-tools)
- [9. Performance Checklist](#9-performance-checklist)
- [10. Final Summary Table](#10-final-summary-table)
- [References](#references)

---

## Prologue: Why Is It So Slow?

Sofia's TodoApp was working perfectly with 10 users. But when it grew to 1,000, the problems started. Pages took 5 seconds to load. The API was responding in 3 seconds. Users were abandoning the application.

Yoshi analyzed the system and made a diagnosis.

*"Sofia, imagine that every time Mario needs a mushroom, he goes back to the START of the level to buy one at the shop. Goes all the way there, buys it, comes back to where he was. Each mushroom takes 30 seconds round trip."*

*"That's ridiculous,"* said Sofia. *"Why doesn't he keep mushrooms in his pocket?"*

*"EXACTLY!"* Yoshi cheered. *"That's **cache**. Instead of fetching data from the database on every request (going to the shop), you keep the most-used data in memory (pocket). Pocket access: 1 millisecond. Shop access: 100 milliseconds. 100 times faster."*

*"And when Mario has the Super Star, EVERYTHING gets fast — he runs faster, he's invincible, he passes right through enemies. That's the performance **Star Mode**: cache + CDN + optimization = maximum speed."*

---

## 1. What Is Performance?

### 1.1 Fundamental Metrics

| Metric | What It Measures | Good | Bad | Mario |
|--------|-----------------|------|-----|-------|
| **Latency** | Time between request and response | < 200ms | > 1s | Mario's jump time |
| **Throughput** | Requests per second | > 1000 rps | < 100 rps | Coins collected per minute |
| **TTFB** | Time to First Byte | < 200ms | > 600ms | Time until the first item appears |
| **FCP** | First Contentful Paint | < 1.8s | > 3s | Time until the level starts to appear |
| **TTI** | Time to Interactive | < 3.8s | > 7.3s | Time until you can play |
| **P95** | 95% of requests are below... | < 500ms | > 2s | 95% of jumps are fast |

### 1.2 Why Performance Matters

| Statistic | Source |
|-----------|--------|
| 53% of users abandon if it takes more than 3s | Google |
| Every 100ms of extra latency = -1% in sales | Amazon |
| 1 second slower = -7% in conversions | Akamai |
| Performance is a ranking factor on Google | Google Search |

### 1.3 The 3-Second Rule

```
0 - 100ms:   Instant — user doesn't notice delay
100 - 300ms: Fast — user notices slight delay
300 - 1000ms: Acceptable — user notices but tolerates
1 - 3s:      Slow — user gets impatient
3 - 5s:      Very slow — many give up
> 5s:        Unacceptable — most give up
```

---

## 2. Cache: Power-Ups in Your Pocket

### 2.1 What Is Cache

**Cache** is a temporary high-speed storage layer that keeps frequently accessed data so that future requests can be served more quickly.

> **Mario Analogy**: Cache is keeping the **most-used power-ups in your pocket** instead of going back to the shop every time. If Mario uses mushrooms frequently, it makes sense to have some in his pocket. If he needs a rare item he never uses, then he goes to the shop.

### 2.2 How Cache Works

```
WITHOUT CACHE:
  User → API → Database (100ms) → API → User
  Total: ~150ms

WITH CACHE:
  User → API → Cache (1ms) → API → User
  Total: ~5ms  (30x faster!)

  If not in cache:
  User → API → Cache (miss) → Database (100ms) → Save to cache → User
  Total: ~155ms (first time), then 5ms
```

### 2.3 Cache Hit vs Cache Miss

| Situation | What Happens | Mario |
|-----------|-------------|-------|
| **Cache Hit** | Data found in cache | Mushroom in pocket — use immediately |
| **Cache Miss** | Data NOT in cache | Empty pocket — need to go to the shop |
| **Cache Hit Rate** | Percentage of hits | % of times the item was already in your pocket |

```
Goal: Cache Hit Rate > 90%

If 100 requests arrive:
  90 found in cache (hit) → 90 * 5ms = 450ms total
  10 go to database (miss) → 10 * 150ms = 1500ms total
  Total: 1950ms for 100 requests

Without cache:
  100 * 150ms = 15000ms (15 seconds!)

With cache:
  1950ms (2 seconds!) → 7.7x faster
```

### 2.4 Cache Levels

```
Level 1: Browser Cache (on the user's computer)
  └── CSS, JS, images — the browser stores locally
      Fastest: 0ms (already on the computer!)

Level 2: CDN Cache (on servers close to the user)
  └── Static assets — copies on servers around the world
      Fast: 10-50ms

Level 3: Application Cache (Redis/Memcached)
  └── Query results, sessions, computed data
      Fast: 1-5ms

Level 4: Database Cache (buffer pool)
  └── Recent queries stay in database memory
      Moderate: 10-50ms

Level 5: Database (disk)
  └── Persistent data on disk
      Slow: 50-200ms
```

> **Mario Analogy**: Cache levels are like levels of access to items:
> - **In your pocket** (browser) = instant
> - **At the nearest shop** (CDN) = fast
> - **At the central warehouse** (Redis) = very fast
> - **In the castle vault** (database cache) = reasonable
> - **In the underground mine** (disk) = slow

---

## 3. Redis: The Magic Pocket

### 3.1 What Is Redis

**Redis (Remote Dictionary Server)** is an **in-memory** (RAM) database that works as a cache, message broker, and database.

> **Mario Analogy**: Redis is Mario's **magic pocket** — an item pouch that fits anywhere, provides instant access to any item, and can store different types of things: coins (strings), item lists (lists), inventory (hashes).

**Why is Redis so fast?**

| Storage | Speed | Analogy |
|---------|-------|---------|
| **Disk (HDD)** | ~10ms | Going to the basement to fetch something |
| **Disk (SSD)** | ~0.1ms | Going to the hallway closet |
| **Memory (RAM)** | ~0.001ms | It's in your pocket |
| **Redis** | ~0.1-1ms (over network) | Magic pocket connected over the network |

### 3.2 Redis Data Structures

```bash
# STRING — simple value
SET user:mario:name "Mario"
GET user:mario:name  # "Mario"

# With expiration (TTL)
SET session:abc123 "mario-001" EX 3600  # expires in 1 hour

# HASH — object (like a mini-chest)
HSET user:mario name "Mario" coins 42 lives 3
HGET user:mario name     # "Mario"
HGETALL user:mario       # name "Mario" coins "42" lives "3"

# LIST — ordered list
LPUSH notifications:mario "New task created"
LPUSH notifications:mario "Task completed"
LRANGE notifications:mario 0 -1  # All notifications

# SET — collection without duplicates
SADD online-users "mario" "luigi" "toad"
SISMEMBER online-users "mario"  # 1 (true)
SMEMBERS online-users           # "mario" "luigi" "toad"

# SORTED SET — collection ordered by score
ZADD leaderboard 100 "mario" 85 "luigi" 72 "toad"
ZRANGE leaderboard 0 -1 WITHSCORES  # Ranking
ZREVRANGE leaderboard 0 2           # Top 3
```

### 3.3 Redis in Practice: TodoApp

```javascript
const Redis = require('ioredis');
const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: 6379,
  password: process.env.REDIS_PASSWORD
});

// Cache for task list
async function getTodos(userId) {
  const cacheKey = `todos:${userId}`;

  // 1. Try to fetch from cache
  const cached = await redis.get(cacheKey);
  if (cached) {
    console.log('Cache HIT! Returning from Redis');
    return JSON.parse(cached);
  }

  // 2. Cache miss — fetch from database
  console.log('Cache MISS! Fetching from database...');
  const todos = await db.todos.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' }
  });

  // 3. Save to cache (expires in 5 minutes)
  await redis.set(cacheKey, JSON.stringify(todos), 'EX', 300);

  return todos;
}

// Invalidate cache when data changes
async function createTodo(userId, data) {
  const todo = await db.todos.create({ data: { ...data, userId } });

  // Invalidate user's cache (data changed!)
  await redis.del(`todos:${userId}`);

  return todo;
}

async function updateTodo(todoId, userId, data) {
  const todo = await db.todos.update({ where: { id: todoId }, data });

  // Invalidate cache
  await redis.del(`todos:${userId}`);

  return todo;
}
```

### 3.4 Common Patterns with Redis

```javascript
// RATE LIMITING: Limit requests per user
async function rateLimiter(userId, limit = 100, windowSeconds = 60) {
  const key = `ratelimit:${userId}`;
  const current = await redis.incr(key);

  if (current === 1) {
    await redis.expire(key, windowSeconds);
  }

  if (current > limit) {
    throw new Error('Rate limit exceeded. Please try again shortly.');
  }

  return { remaining: limit - current, total: limit };
}

// SESSION STORE: Store sessions in Redis
async function createSession(userId) {
  const sessionId = generateUUID();
  const sessionData = {
    userId,
    createdAt: Date.now(),
    lastActivity: Date.now()
  };

  await redis.set(
    `session:${sessionId}`,
    JSON.stringify(sessionData),
    'EX', 86400 // 24 hours
  );

  return sessionId;
}

// LEADERBOARD: Real-time ranking
async function updateLeaderboard(userId, score) {
  await redis.zadd('leaderboard', score, userId);
}

async function getTopPlayers(count = 10) {
  return await redis.zrevrange('leaderboard', 0, count - 1, 'WITHSCORES');
}

// HEAVY COMPUTATION CACHE
async function getMonthlyReport(userId, month) {
  const key = `report:${userId}:${month}`;
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);

  // Heavy computation (complex query, aggregations)
  const report = await computeMonthlyReport(userId, month);

  // Cache for 1 hour (report doesn't change often)
  await redis.set(key, JSON.stringify(report), 'EX', 3600);

  return report;
}
```

### 3.5 Redis on Azure

```bash
# Create Azure Cache for Redis
az redis create \
  --name todoapp-cache \
  --resource-group mushroom-kingdom \
  --location eastus \
  --sku Basic \
  --vm-size C0

# Get connection string
az redis list-keys \
  --name todoapp-cache \
  --resource-group mushroom-kingdom
```

---

## 4. CDN: Item Shops in Every World

### 4.1 What Is CDN

**CDN (Content Delivery Network)** is a network of servers distributed around the world that stores copies of your static content close to users.

> **Mario Analogy**: Imagine that the Mushroom Kingdom has a single item shop in World 1. All players from all worlds need to go there to buy items. Huge line, takes forever. CDN is like placing **item shops in EVERY world**. The player in World 7 buys from World 7, no need to go to World 1.

### 4.2 How CDN Works

```
WITHOUT CDN:
  User (Brazil) ──── 200ms ────→ Server (USA) ──→ Response
  User (Japan) ──── 300ms ────→ Server (USA) ──→ Response
  User (Europe) ──── 150ms ───→ Server (USA) ──→ Response

WITH CDN:
  User (Brazil) ──── 20ms ────→ CDN (Sao Paulo) ──→ Response
  User (Japan) ──── 10ms ────→ CDN (Tokyo) ──→ Response
  User (Europe) ──── 15ms ───→ CDN (Frankfurt) ──→ Response
```

```
                     ┌─── CDN Sao Paulo ←── User Brazil
                     │
Origin Server ────→ CDN Hub ──── CDN Frankfurt ←── User Europe
  (USA)              │
                     └─── CDN Tokyo ←──── User Japan
```

### 4.3 Configuring CDN on Azure

```bash
# Azure CDN
az cdn profile create \
  --name todoapp-cdn \
  --resource-group mushroom-kingdom \
  --sku Standard_Microsoft

az cdn endpoint create \
  --name todoapp-assets \
  --profile-name todoapp-cdn \
  --resource-group mushroom-kingdom \
  --origin todoapp-mario.azurewebsites.net \
  --origin-host-header todoapp-mario.azurewebsites.net
```

```javascript
// In the frontend: use CDN URLs for assets
const CDN_URL = 'https://todoapp-assets.azureedge.net';

// Instead of:
<img src="/images/logo.png" />

// Use:
<img src={`${CDN_URL}/images/logo.png`} />
<link rel="stylesheet" href={`${CDN_URL}/css/app.css`} />
<script src={`${CDN_URL}/js/bundle.js`}></script>
```

### 4.4 What to Put on the CDN

| Content | CDN? | Why |
|---------|:----:|-----|
| Images (PNG, JPG, SVG) | Yes | Large files, don't change |
| CSS and JavaScript | Yes | Compiled static files |
| Fonts (WOFF2) | Yes | Don't change, used on every page |
| Videos | Yes | Enormous files |
| API responses | Depends | Only if public data that rarely changes |
| Dynamic HTML | Usually no | Content changes per user |
| User data | No | Private and dynamic |

---

## 5. Cache Strategies

### 5.1 Cache-Aside (Lazy Loading)

The most common strategy: check the cache first; if it's not there, fetch from the source and save to cache.

> **Mario Analogy**: Mario checks his pocket. Got a mushroom? Use it from the pocket. Don't have one? Go to the shop, buy one, and keep an extra in the pocket for next time.

```javascript
async function getUser(userId) {
  // 1. Check cache
  const cached = await cache.get(`user:${userId}`);
  if (cached) return cached;

  // 2. Fetch from source
  const user = await db.users.findById(userId);

  // 3. Save to cache
  await cache.set(`user:${userId}`, user, { ttl: 300 });

  return user;
}
```

### 5.2 Write-Through

Every write goes to the cache AND the database at the same time.

> **Mario Analogy**: When Mario gets an item, he puts it in his pocket AND registers it in the castle inventory simultaneously.

```javascript
async function updateUser(userId, data) {
  // 1. Update in database
  const user = await db.users.update(userId, data);

  // 2. Update in cache immediately
  await cache.set(`user:${userId}`, user, { ttl: 300 });

  return user;
}
```

### 5.3 Write-Behind (Write-Back)

The write goes to the cache first and then (asynchronously) to the database.

> **Mario Analogy**: Mario puts the item in his pocket immediately and asks Toad to register it in the inventory when he has time.

```javascript
async function incrementViewCount(todoId) {
  // Update ONLY in cache (instant)
  await redis.incr(`views:${todoId}`);

  // A separate job syncs with the database periodically
  // (every 5 minutes, for example)
}

// Sync job
async function syncViewCounts() {
  const keys = await redis.keys('views:*');
  for (const key of keys) {
    const todoId = key.split(':')[1];
    const count = await redis.get(key);
    await db.todos.update(todoId, { viewCount: parseInt(count) });
  }
}
```

### 5.4 TTL: Cache Time to Live

**TTL (Time to Live)** defines how long data stays in the cache.

| Data | Suggested TTL | Why |
|------|--------------|-----|
| User session | 24h | Doesn't change often |
| Task list | 5 min | Changes frequently |
| User profile | 1h | Rarely changes |
| Global settings | 24h | Almost never changes |
| Search results | 1 min | Can become outdated |
| Public data (homepage) | 5 min | Slight staleness is acceptable |

### 5.5 Cache Invalidation

> *"There are only two hard things in Computer Science: cache invalidation and naming things."* — Phil Karlton

**Invalidation strategies:**

```javascript
// 1. TTL-based: Expires automatically after a defined time
await redis.set('key', 'value', 'EX', 300); // 5 minutes

// 2. Event-based: Invalidate when data changes
async function updateTodo(todoId, userId, data) {
  await db.todos.update(todoId, data);
  await redis.del(`todos:${userId}`);     // Invalidate list
  await redis.del(`todo:${todoId}`);      // Invalidate item
}

// 3. Pattern-based: Invalidate everything matching a pattern
async function invalidateUserCache(userId) {
  const keys = await redis.keys(`*:${userId}:*`);
  if (keys.length > 0) {
    await redis.del(...keys);
  }
}

// 4. Version-based: Change the cache version
async function getTodosV2(userId) {
  const version = await redis.get(`todos:version:${userId}`) || '1';
  const key = `todos:${userId}:v${version}`;
  // ... cache logic ...
}

async function invalidateTodosCache(userId) {
  await redis.incr(`todos:version:${userId}`); // New version = cache miss
}
```

---

## 6. Backend Performance

### 6.1 Query Optimization (N+1 Problem)

The **N+1 problem** is the most common performance villain in APIs.

> **Mario Analogy**: Imagine Mario needs coins from 100 levels. The N+1 is like Mario going to EACH level individually (100 trips). The solution is to request them all at once (1 trip).

```javascript
// N+1 PROBLEM ❌
// 1 query to fetch users + N queries to fetch each user's tasks
const users = await db.users.findMany(); // 1 query
for (const user of users) {
  user.todos = await db.todos.findMany({ where: { userId: user.id } });
  // +N queries (if there are 100 users = 100 queries!)
}
// Total: 101 queries 💀

// SOLUTION: Eager Loading / Include ✅
const users = await db.users.findMany({
  include: { todos: true }  // Fetches everything in 1-2 queries
});
// Total: 2 queries 🎉

// ALTERNATIVE SOLUTION: Batch Loading
const users = await db.users.findMany();
const userIds = users.map(u => u.id);
const allTodos = await db.todos.findMany({
  where: { userId: { in: userIds } }
});
// Total: 2 queries 🎉
```

### 6.2 Database Indexes

**Indexes** are like the index of a book — instead of reading every page, you go straight to the right page.

```sql
-- WITHOUT index: database reads ALL rows (full table scan)
-- With 1 million tasks = 1 million comparisons
SELECT * FROM todos WHERE user_id = 'mario-001';

-- WITH index: database jumps directly to the correct rows
-- With 1 million tasks = ~20 comparisons (B-tree)
CREATE INDEX idx_todos_user_id ON todos(user_id);

-- Composite index for queries with multiple conditions
CREATE INDEX idx_todos_user_completed ON todos(user_id, completed);
-- Optimizes: SELECT * FROM todos WHERE user_id = 'mario-001' AND completed = false;

-- Check if indexes are being used
EXPLAIN ANALYZE SELECT * FROM todos WHERE user_id = 'mario-001';
```

### 6.3 Connection Pooling

Instead of creating a new database connection for each request (expensive), reuse connections from a **pool**.

> **Mario Analogy**: Without pool = dig a new tunnel to the castle on every visit. With pool = keep 10 tunnels open and reuse them.

```javascript
// Prisma already does connection pooling automatically
// But it can be configured:
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `${DATABASE_URL}?connection_limit=10&pool_timeout=20`
    }
  }
});
```

### 6.4 Response Compression

```javascript
const compression = require('compression');

// Compress all HTTP responses
app.use(compression({
  level: 6,          // Compression level (1-9)
  threshold: 1024,   // Only compress if > 1KB
  filter: (req, res) => {
    // Compress JSON and text
    return compression.filter(req, res);
  }
}));

// Result: 100KB response → 15KB (85% smaller, faster)
```

---

## 7. Frontend Performance

### 7.1 Lazy Loading: Build When Needed

**Lazy Loading** is loading resources only when they are needed.

> **Mario Analogy**: Lazy loading is like building castle rooms **only when someone enters**. Instead of building 100 rooms all at once (slow), you build each room the moment someone opens the door. If no one visits room 47, it's never built (resource savings).

```jsx
// Lazy Loading React components
import { lazy, Suspense } from 'react';

// NOT loaded immediately — only when needed
const AdminPanel = lazy(() => import('./AdminPanel'));
const Reports = lazy(() => import('./Reports'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<TodoList />} />           {/* Loads immediately */}
        <Route path="/admin" element={<AdminPanel />} />     {/* Loads on demand */}
        <Route path="/reports" element={<Reports />} />      {/* Loads on demand */}
        <Route path="/settings" element={<Settings />} />    {/* Loads on demand */}
      </Routes>
    </Suspense>
  );
}
```

```html
<!-- Lazy Loading images -->
<img src="hero.jpg" loading="eager" />     <!-- Loads immediately (above the fold) -- />
<img src="feature1.jpg" loading="lazy" />  <!-- Loads when visible -- />
<img src="feature2.jpg" loading="lazy" />  <!-- Loads when visible -- />
```

### 7.2 Code Splitting

Splitting JavaScript into multiple smaller files that are loaded on demand.

```javascript
// Before: a single bundle.js of 2MB (everything at once)
// After: main.js (200KB) + admin.js (300KB) + reports.js (500KB)

// Webpack does this automatically with dynamic imports
const AdminModule = () => import(/* webpackChunkName: "admin" */ './admin');
```

### 7.3 Image Optimization

| Format | When to Use | Size vs JPG |
|--------|-------------|-------------|
| **WebP** | Most images | 25-35% smaller |
| **AVIF** | Modern browsers | 50% smaller |
| **SVG** | Icons and logos | Vector (scalable) |
| **JPG** | Photos (fallback) | Reference |
| **PNG** | Transparency needed | Larger |

```html
<!-- Serve optimal format for each browser -->
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" loading="lazy" />
</picture>
```

### 7.4 Debounce and Throttle

```javascript
// DEBOUNCE: Wait for the user to STOP typing before searching
// Analogy: Only deliver the letter when Mario stops writing
function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

const searchTodos = debounce(async (query) => {
  const results = await api.get(`/todos/search?q=${query}`);
  setSearchResults(results);
}, 300); // Wait 300ms after the last keystroke

// THROTTLE: Execute at most once every X ms
// Analogy: Mario can only jump once per second
function throttle(func, limit) {
  let lastRun = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastRun >= limit) {
      lastRun = now;
      func(...args);
    }
  };
}

const handleScroll = throttle(() => {
  // Check if more items need to be loaded (infinite scroll)
  if (isNearBottom()) loadMoreTodos();
}, 200); // Maximum once every 200ms
```

---

## 8. Performance Monitoring

### 8.1 Core Web Vitals

| Metric | What It Measures | Good | Mario |
|--------|-----------------|------|-------|
| **LCP** (Largest Contentful Paint) | Largest visible element loaded | < 2.5s | Time until the main scenery appears |
| **FID** (First Input Delay) | Response time to first click | < 100ms | Reaction time when pressing the button |
| **CLS** (Cumulative Layout Shift) | How much the page "jumps" | < 0.1 | Does the scenery stay still or keep moving? |

### 8.2 APM: Application Performance Monitoring

```javascript
// Azure Application Insights
const appInsights = require('applicationinsights');
appInsights.setup(process.env.APPINSIGHTS_CONNECTION_STRING)
  .setAutoCollectRequests(true)
  .setAutoCollectPerformance(true)
  .setAutoCollectExceptions(true)
  .setAutoCollectDependencies(true)
  .start();

// Custom metric
const client = appInsights.defaultClient;

// Measure operation time
async function getTodos(userId) {
  const start = Date.now();
  const todos = await db.todos.findMany({ where: { userId } });
  const duration = Date.now() - start;

  client.trackMetric({ name: 'getTodos_duration', value: duration });
  client.trackEvent({ name: 'getTodos', properties: { userId, count: todos.length } });

  return todos;
}
```

### 8.3 Profiling Tools

| Tool | What It Does | When to Use |
|------|-------------|-------------|
| **Chrome DevTools** | Frontend performance | Investigate browser slowness |
| **Lighthouse** | Complete web performance audit | Before each deploy |
| **Azure Application Insights** | Complete APM | Production monitoring |
| **Redis CLI INFO** | Redis metrics | Check cache hit rate |
| **pg_stat_statements** | Slow PostgreSQL queries | Optimize database |
| **Artillery** | Load testing | Test under load |

---

## 9. Performance Checklist

```markdown
## Star Mode Checklist ⭐

### Backend
- [ ] Redis for frequently accessed data
- [ ] Database indexes for common queries
- [ ] Connection pooling configured
- [ ] N+1 queries eliminated (use include/eager loading)
- [ ] gzip/brotli compression enabled
- [ ] Pagination on all lists

### Frontend
- [ ] CDN for static assets
- [ ] Lazy loading for components and images
- [ ] Code splitting configured
- [ ] Optimized images (WebP/AVIF)
- [ ] Debounce on searches and inputs
- [ ] Bundle size monitored

### Infrastructure
- [ ] CDN configured and working
- [ ] Redis/cache in production
- [ ] Monitoring/APM active
- [ ] Health checks configured
- [ ] Auto-scaling enabled

### Metrics
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Cache hit rate > 90%
- [ ] P95 API latency < 500ms
```

---

## 10. Final Summary Table

| Concept | What It Is | Mario Analogy |
|---------|-----------|---------------|
| **Cache** | Fast temporary storage | Power-ups in your pocket |
| **Redis** | Ultra-fast in-memory database | Mario's magic pocket |
| **CDN** | Distributed server network | Item shops in every world |
| **Cache Hit** | Data found in cache | Item in pocket — use immediately |
| **Cache Miss** | Data NOT in cache | Empty pocket — go to the shop |
| **TTL** | Cache time to live | Item expiration date |
| **Cache Invalidation** | Clear outdated cache | Throw away expired items |
| **Lazy Loading** | Load on demand | Build the room when someone enters |
| **N+1 Problem** | Excessive database queries | Going to the shop 100 times instead of 1 |
| **Index** | Shortcut for database lookups | Book index |
| **Debounce** | Wait before acting | Wait for Mario to stop writing |
| **Code Splitting** | Split JS into smaller parts | Load only the current level |

---

## References

- [Redis — Official Documentation](https://redis.io/docs/)
- [Azure Cache for Redis](https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/)
- [Azure CDN — Documentation](https://learn.microsoft.com/en-us/azure/cdn/)
- [Web.dev — Core Web Vitals](https://web.dev/vitals/)
- [MDN — Lazy Loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)
- [React — Code Splitting](https://react.dev/reference/react/lazy)
- [Azure Application Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)
- [Prisma — Query Optimization](https://www.prisma.io/docs/guides/performance-and-optimization)
- [Google — Speed is Key](https://web.dev/why-speed-matters/)
- [Caching Strategies — AWS](https://aws.amazon.com/caching/best-practices/)

---

*Level 4-7 complete! You learned how to activate the performance Star Mode with cache, Redis, CDN, and optimizations. In the next level, we'll explore messaging and queues — the Mushroom Kingdom's postal service. Get ready for Level 4-8!*
