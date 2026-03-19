---
title: "Level 2-7 -- The Character's Senses: Observability"
description: "Logs, metrics, alerts, Azure Monitor, and Application Insights -- how to monitor the health of your world with Mario's senses"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
tags:
  - observability
  - logs
  - metrics
  - alerts
  - azure-monitor
  - application-insights
  - world-2
  - mario
sidebar_position: 7
format: md
---

# Level 2-7 -- The Character's Senses: Observability

---

## Change Log

| Version | Date       | Author                                  | Description          |
|---------|------------|----------------------------------------|----------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation    |

---

## Table of Contents

- [Prologue: The Blind Player](#prologue-the-blind-player)
- [1. What is Observability?](#1-what-is-observability)
  - [1.1 The 3 Pillars of Observability](#11-the-3-pillars-of-observability)
  - [1.2 Monitoring vs Observability](#12-monitoring-vs-observability)
- [2. Logs: Mario's Diary](#2-logs-marios-diary)
  - [2.1 What Are Logs?](#21-what-are-logs)
  - [2.2 Log Levels](#22-log-levels)
  - [2.3 Structured Logging: The Organized Diary](#23-structured-logging-the-organized-diary)
  - [2.4 What to Log (and What NOT to Log)](#24-what-to-log-and-what-not-to-log)
- [3. Metrics: The Health Bar and the Coin Counter](#3-metrics-the-health-bar-and-the-coin-counter)
  - [3.1 What Are Metrics?](#31-what-are-metrics)
  - [3.2 The 4 Golden Signals](#32-the-4-golden-signals)
  - [3.3 Business Metrics vs Technical Metrics](#33-business-metrics-vs-technical-metrics)
  - [3.4 RED and USE: Two Metrics Frameworks](#34-red-and-use-two-metrics-frameworks)
- [4. Traces: The Journey Map](#4-traces-the-journey-map)
  - [4.1 What Are Traces?](#41-what-are-traces)
  - [4.2 Distributed Tracing: Following Toad](#42-distributed-tracing-following-toad)
- [5. Alerts: The Danger Jingle](#5-alerts-the-danger-jingle)
  - [5.1 What Are Alerts?](#51-what-are-alerts)
  - [5.2 Configuring Smart Alerts](#52-configuring-smart-alerts)
  - [5.3 Alert Fatigue: The Boy Who Cried Wolf](#53-alert-fatigue-the-boy-who-cried-wolf)
- [6. Dashboards: The Pause Screen](#6-dashboards-the-pause-screen)
  - [6.1 What is a Dashboard?](#61-what-is-a-dashboard)
  - [6.2 Ideal Dashboard for the TodoApp](#62-ideal-dashboard-for-the-todoapp)
- [7. Azure Monitor: The Command Center](#7-azure-monitor-the-command-center)
  - [7.1 What is Azure Monitor?](#71-what-is-azure-monitor)
  - [7.2 Azure Monitor Components](#72-azure-monitor-components)
- [8. Application Insights: The Application X-Ray](#8-application-insights-the-application-x-ray)
  - [8.1 What is Application Insights?](#81-what-is-application-insights)
  - [8.2 Setting Up in the TodoApp](#82-setting-up-in-the-todoapp)
  - [8.3 What You Get Automatically](#83-what-you-get-automatically)
- [9. Practice: Implementing Observability in the TodoApp](#9-practice-implementing-observability-in-the-todoapp)
  - [9.1 Adding Structured Logs](#91-adding-structured-logs)
  - [9.2 Custom Metrics](#92-custom-metrics)
  - [9.3 Health Checks](#93-health-checks)
- [10. Final Summary Table](#10-final-summary-table)
- [References](#references)

---

## Prologue: The Blind Player

Sofia's TodoApp had been in production for a week. Everything seemed calm. Until the phone rang.

*"Sofia, the app is slow!"* a user complained.

Sofia opened the app. For her, it worked normally. *"Strange, it's fast here..."*

Thirty minutes later, another user: *"I can't save tasks!"*

Sofia tried to save a task. It worked. *"How strange..."*

An hour later, TEN users complaining. Sofia panicked. She did not know:
- How many users were being affected?
- What was the exact error?
- When did it start?
- What caused it?

She was **blind**. The app was sick, but she had no way to see the symptoms.

Yoshi appeared and diagnosed the problem in 2 minutes. *"The database is at 98% CPU because a query is stuck. It started at 14:32 when you did that deploy."*

*"How do you know all that?!"* asked Sofia, amazed.

Yoshi showed her his **dashboard** -- a screen full of graphs, numbers, and indicators.

*"These are the **senses** of your app, Sofia. Without them, you are like Mario playing with the screen turned off. You can't see enemies, you can't see pits, you can't see the timer running out. You need **observability**."*

---

## 1. What is Observability?

**Observability** is the ability to understand the internal state of a system from its external data (logs, metrics, traces).

In simple terms: it is the ability to answer **any question** about your system, even questions you did not anticipate.

> **MARIO ANALOGY:** Observability is like **Mario's senses** during the game. The eyes see enemies and obstacles (logs). The health bar shows health, coins, and time (metrics). The danger jingle warns when time is running out (alerts). The pause screen shows all the stats (dashboard). Without these senses, Mario is blind, deaf, and mute -- running in the dark.

### 1.1 The 3 Pillars of Observability

| Pillar | What It Is | Mario Analogy | Example |
|--------|-----------|---------------|---------|
| **Logs** | Detailed record of events | Mario's diary: "14:32 - Entered World 2. 14:33 - Stomped on a Goomba." | `[ERROR] 14:32:15 - Failed to connect to database` |
| **Metrics** | Numbers representing the system's state | Health bar + coin counter + timer | CPU: 87%, Memory: 4.2GB, Requests/s: 342 |
| **Traces** | Complete path of a request | Map showing where Mario went through the level | Request -> API -> DB -> Cache -> Response (250ms) |

### 1.2 Monitoring vs Observability

| Aspect | Monitoring | Observability |
|--------|-----------|---------------|
| **Question** | "Is the system working?" | "WHY is the system not working?" |
| **Approach** | Checks KNOWN things | Allows investigating UNKNOWN things |
| **Mario Analogy** | Checking if Mario is alive or dead | Understanding WHY Mario died (enemy? pit? time?) |
| **Example** | Alert: "Server is down" | Investigation: "The server went down because query X locked the database" |

---

## 2. Logs: Mario's Diary

### 2.1 What Are Logs?

**Logs** are textual records of events that happen in the system. Each log is a "diary entry" with timestamp, level, and message.

```
2026-03-18T14:32:15.123Z [INFO]  Server started on port 3000
2026-03-18T14:32:16.456Z [INFO]  Database connection established
2026-03-18T14:33:01.789Z [WARN]  Slow query detected: 1.5s (limit: 1.0s)
2026-03-18T14:33:45.012Z [ERROR] Failed to save task: connection timeout
2026-03-18T14:34:00.345Z [ERROR] Database not responding after 3 attempts
```

> **MARIO ANALOGY:** Logs are **Mario's adventure diary**. Each line is an entry: "14:32 - Entered World 2-1. 14:33 - Stomped on a Goomba and earned 100 points. 14:34 - WATCH OUT! Almost fell into the pit. 14:35 - ERROR! Got hit by a Hammer Bro, lost 1 life." When something goes wrong, you open the diary and investigate what happened.

### 2.2 Log Levels

| Level | When to Use | Mario Analogy | Color |
|-------|------------|---------------|-------|
| **DEBUG** | Technical details for developers | Exact coordinates of each of Mario's steps | Gray |
| **INFO** | Normal, expected events | "Mario entered World 2" "Mario collected a coin" | Green |
| **WARN** | Something suspicious, but not critical | "Mario with only 1 life remaining" | Yellow |
| **ERROR** | Something went wrong, affects functionality | "Mario fell into the pit!" | Red |
| **FATAL** | System is going to crash/stop | "Game Over -- all lives lost" | Dark red |

```javascript
// Examples in code:
const logger = require('winston');

// DEBUG -- technical detail
logger.debug('Query executed: SELECT * FROM tarefas WHERE user_id=42');

// INFO -- normal event
logger.info('Task created successfully', { taskId: 123, userId: 42 });

// WARN -- attention
logger.warn('Slow query detected', { duration: '1.5s', query: 'SELECT...' });

// ERROR -- something went wrong
logger.error('Failed to save task', { error: 'Connection timeout', taskId: 123 });

// FATAL -- system crashing
logger.fatal('Database unreachable. Shutting down application.');
```

### 2.3 Structured Logging: The Organized Diary

**Structured logs** use JSON format instead of plain text, making search and analysis easier:

```json
// Structured log (GOOD -- easy to filter and search)
{
  "timestamp": "2026-03-18T14:33:45.012Z",
  "level": "error",
  "message": "Failed to save task",
  "service": "todoapp-api",
  "traceId": "abc-123-def-456",
  "userId": 42,
  "taskId": 123,
  "error": "Connection timeout",
  "duration_ms": 5023
}

// Unstructured log (BAD -- hard to filter)
// "2026-03-18 14:33:45 ERROR - Failed to save task 123 for user 42: timeout"
```

> **MARIO ANALOGY:** A structured log is like a **well-organized diary with tables**: Date, Location, Event, Result. An unstructured log is a scrawled diary where you write everything in a stream and then can't find anything later.

### 2.4 What to Log (and What NOT to Log)

| LOG | DO NOT LOG |
|-----|-----------|
| Received requests | Passwords and tokens |
| Errors and exceptions | Personal data (SSN, credit card) |
| Response time | Medical information |
| User actions (what, not data) | Full request content |
| Connections and disconnections | API Keys and secrets |
| State changes | Credit card data |

---

## 3. Metrics: The Health Bar and the Coin Counter

### 3.1 What Are Metrics?

**Metrics** are numerical values that represent the system's state over time. They are collected at regular intervals and stored as time series.

```
Metric: cpu_percent
  14:30 -> 45%
  14:31 -> 47%
  14:32 -> 62%
  14:33 -> 87%   <-- Something is wrong!
  14:34 -> 98%   <-- ALERT!
  14:35 -> 95%
```

> **MARIO ANALOGY:** Metrics are the **HUD (Heads-Up Display)** of Mario -- the information that appears on screen at all times: **health bar** (CPU), **coin counter** (requests per second), **timer** (response time), **lives counter** (available instances). You look at these numbers and instantly know how the game is going.

### 3.2 The 4 Golden Signals

Google defined the **4 Golden Signals** -- the 4 most important metrics for any service:

| Signal | What It Measures | Mario Analogy | Example |
|--------|-----------------|---------------|---------|
| **Latency** | Response time | Time it takes Mario to complete the level | API responds in 200ms |
| **Traffic** | Volume of requests | How many players are playing | 500 requests per second |
| **Errors** | Error rate | How many times Mario dies | 2% of requests fail |
| **Saturation** | How full the system is | How many enemies on screen at the same time | CPU at 85%, memory at 70% |

### 3.3 Business Metrics vs Technical Metrics

| Type | Examples | Mario Analogy | Who Looks |
|------|---------|---------------|-----------|
| **Technical** | CPU, memory, disk, latency | Console health (fps, temperature) | Engineers |
| **Business** | Active users, tasks created, revenue | Number of players, levels completed, coins | Product/Business |

```
Technical Metrics for TodoApp:
  cpu_percent: 45%
  memory_used_mb: 512
  requests_per_second: 342
  error_rate: 0.5%
  p95_latency_ms: 180

Business Metrics for TodoApp:
  active_users_now: 1,234
  tasks_created_today: 5,678
  tasks_completed_today: 3,456
  completion_rate: 61%
  new_users_today: 89
```

### 3.4 RED and USE: Two Metrics Frameworks

**RED Method** (for services):
- **R**ate: How many requests per second?
- **E**rrors: How many fail?
- **D**uration: How long do they take?

**USE Method** (for resources):
- **U**tilization: How busy is it? (CPU 85%)
- **S**aturation: Is there a queue? (Queue: 50 items)
- **E**rrors: Is something failing? (Disk errors: 3)

---

## 4. Traces: The Journey Map

### 4.1 What Are Traces?

A **trace** is the record of the complete path that a request takes through the system, with the time spent at each stage.

```
Trace ID: abc-123-def-456
Total: 250ms

[Browser] --(15ms)--> [API Gateway] --(5ms)--> [Auth Service]
                           |
                           +--(30ms)--> [Todo Service] --(150ms)--> [PostgreSQL]
                                              |
                                              +--(20ms)--> [Cache Redis]
                           |
                           +--(30ms)--> [Response formatted and sent]
```

> **MARIO ANALOGY:** A trace is the **map showing where Mario went** during the level, with the time spent in each section: "Entered through the pipe (15ms), ran through the Goomba area (30ms), STOPPED in Toad's room (150ms -- BOTTLENECK!), grabbed the item (20ms), exited through the flagpole (30ms). Total time: 250ms. The bottleneck was Toad's room -- needs investigation."

### 4.2 Distributed Tracing: Following Toad

In systems with many services (microservices), a single request can pass through 5, 10, 20 different services. **Distributed Tracing** follows that request through ALL services.

```
Request "Create Task":
  [Frontend] -> [API Gateway] -> [Auth] -> [TodoService] -> [DB] -> [Notification]

Without tracing: "The task took 5 seconds. Where is the problem?"
                 Nobody knows.

With tracing: "The task took 5 seconds.
              Frontend: 50ms
              API Gateway: 10ms
              Auth: 30ms
              TodoService: 100ms
              DB: 4700ms  <-- THE PROBLEM IS HERE!
              Notification: 110ms"
```

---

## 5. Alerts: The Danger Jingle

### 5.1 What Are Alerts?

**Alerts** are automatic notifications triggered when a metric exceeds a defined threshold.

```
Alert Rule:
  IF cpu_percent > 90% FOR MORE THAN 5 minutes
  THEN send notification to the team

Alert Rule:
  IF error_rate > 5% FOR MORE THAN 2 minutes
  THEN send URGENT notification + call the on-call engineer
```

> **MARIO ANALOGY:** Alerts are the **danger jingle** in Mario. When the timer is running out, the music speeds up -- ALERT! When Mario has 1 life, the game changes tone -- ATTENTION! You do not need to stare at the numbers all the time; the system itself WARNS you when something is wrong.

### 5.2 Configuring Smart Alerts

| Metric | Warning Threshold | Critical Threshold | Action |
|--------|-------------------|-------------------|--------|
| CPU | > 70% for 10 min | > 90% for 5 min | Slack + Email |
| Memory | > 80% for 10 min | > 95% for 5 min | Slack + Email + Pager |
| Error Rate | > 2% for 5 min | > 5% for 2 min | Slack + Pager |
| Latency P95 | > 500ms for 10 min | > 2s for 5 min | Slack + Email |
| Disk | > 80% | > 90% | Email |
| Health Check | 1 failure | 3 consecutive failures | Pager + Auto-restart |

### 5.3 Alert Fatigue: The Boy Who Cried Wolf

**Alert Fatigue** is when you have SO MANY alerts that the team stops paying attention. It is the equivalent of the boy who cried "Wolf!" all the time.

**Symptoms of Alert Fatigue:**
- Team ignores alerts in Slack
- "Oh, it's just that same old alert..."
- Critical alert lost among 50 insignificant alerts

**How to avoid it:**
1. **Few alerts, well calibrated** -- only alert when HUMAN action is needed
2. **Clear levels** -- Warning (can wait) vs Critical (must act NOW)
3. **Group alerts** -- 10 alerts from the same problem become 1
4. **Review regularly** -- delete alerts that never lead to action

> **MARIO ANALOGY:** If the danger jingle played EVERY second, Mario would stop paying attention. The jingle only plays when the timer is REALLY running out -- rarely, and when it plays, you KNOW you need to run. Good alerts are like that: rare, meaningful, and actionable.

---

## 6. Dashboards: The Pause Screen

### 6.1 What is a Dashboard?

A **dashboard** is a visual screen that shows the most important metrics of your system in real time. It is like the Mario pause screen that shows all the stats.

> **MARIO ANALOGY:** The dashboard is the **pause screen** of the game. When you press PAUSE, you see: remaining lives, coins collected, time remaining, current world, active power-ups. A dashboard does the same thing for your application: it shows health, performance, errors, and usage -- all in a single glance.

### 6.2 Ideal Dashboard for the TodoApp

```
+================================================================+
|                    TodoApp -- Dashboard                         |
+================================================================+
|                                                                |
|  OVERALL HEALTH: [===GREEN===]  All OK                        |
|                                                                |
+----------------+----------------+----------------+--------------+
| Active         | Requests/s     | Error Rate     | Latency P95  |
| Users: 1,234   | 342 req/s      | 0.5%           | 180ms        |
| [graph]        | [graph]        | [graph]        | [graph]      |
+----------------+----------------+----------------+--------------+
|                                                                |
| CPU: [====45%====         ]  Memory: [========72%=====      ]  |
| Disk: [==30%=              ]  DB Connections: 23/100           |
|                                                                |
+----------------------------------------------------------------+
|                                                                |
| LATEST ERRORS:                                                 |
| 14:33:45 [ERROR] Timeout saving task (userId: 42)             |
| 14:31:12 [WARN]  Slow query: 1.5s (tasks by status)          |
| 14:28:00 [INFO]  Deploy v2.3.1 completed successfully         |
|                                                                |
+----------------------------------------------------------------+
| BUSINESS METRICS:                                              |
| Tasks created today: 5,678     | Completed: 3,456 (61%)      |
| New users: 89                  | 7-day retention: 72%        |
+----------------------------------------------------------------+
```

---

## 7. Azure Monitor: The Command Center

### 7.1 What is Azure Monitor?

**Azure Monitor** is Microsoft Azure's complete monitoring platform. It is the "command center" that collects, analyzes, and visualizes data from all infrastructure.

> **MARIO ANALOGY:** Azure Monitor is the **control center of the Mushroom Kingdom** -- a room with screens showing ALL worlds simultaneously. Operators (Lakitus) observe everything: castle health, pipe traffic, invading enemies, resources running low. If something goes wrong in any world, the control center knows first.

### 7.2 Azure Monitor Components

| Component | What It Does | Mario Analogy |
|-----------|-------------|---------------|
| **Metrics** | Collects and displays numerical metrics | The counters on the game HUD |
| **Logs (Log Analytics)** | Stores and queries logs with KQL | The library of diaries from all the Toads |
| **Alerts** | Triggers automatic notifications | The castle alarm system |
| **Dashboards** | Customizable visual screens | The customized pause screen |
| **Application Insights** | Deep application monitoring | Detailed X-ray of Mario |
| **Workbooks** | Interactive reports | Weekly kingdom reports |

**Example KQL (Kusto Query Language) query:**

```kusto
// Find errors in the last 30 minutes
traces
| where timestamp > ago(30m)
| where severityLevel >= 3  // ERROR and FATAL
| project timestamp, message, customDimensions
| order by timestamp desc
| take 50

// Calculate error rate per hour
requests
| summarize
    totalRequests = count(),
    failedRequests = countif(success == false),
    errorRate = round(100.0 * countif(success == false) / count(), 2)
  by bin(timestamp, 1h)
| order by timestamp desc
```

---

## 8. Application Insights: The Application X-Ray

### 8.1 What is Application Insights?

**Application Insights** is an Azure Monitor service specifically for monitoring applications. It automatically collects:

- HTTP requests (response time, status codes)
- Exceptions and errors
- Dependencies (database, external APIs)
- Browser performance (frontend)
- Distributed traces

> **MARIO ANALOGY:** If Azure Monitor is the control center for the entire kingdom, Application Insights is the **detailed X-ray of Mario** -- it shows EVERYTHING happening internally: heartbeat (requests), broken bones (errors), temperature (CPU), blood flow (traces between services).

### 8.2 Setting Up in the TodoApp

```javascript
// 1. Install the package
// npm install applicationinsights

// 2. Configure at the start of the application
const appInsights = require('applicationinsights');
appInsights.setup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING)
  .setAutoCollectRequests(true)       // Collects requests automatically
  .setAutoCollectPerformance(true)    // Collects performance metrics
  .setAutoCollectExceptions(true)     // Collects exceptions
  .setAutoCollectDependencies(true)   // Collects calls to database, APIs, etc.
  .setAutoCollectConsole(true)        // Collects console.log as traces
  .start();

// 3. Done! Application Insights is now monitoring everything.

// 4. Optionally, add custom telemetry:
const client = appInsights.defaultClient;

// Track custom event
client.trackEvent({
  name: "TaskCreated",
  properties: { userId: "42", priority: "high" }
});

// Track custom metric
client.trackMetric({
  name: "PendingTasks",
  value: 23
});
```

### 8.3 What You Get Automatically

```
After configuring Application Insights, you get FOR FREE:

+------------------------------------------+
| Application Map                          |
| (visual map of all services              |
|  and their dependencies)                 |
+------------------------------------------+

+------------------------------------------+
| Live Metrics                             |
| (real-time metrics --                    |
|  requests, errors, CPU, memory)          |
+------------------------------------------+

+------------------------------------------+
| Failure Analysis                         |
| (automatic error analysis --             |
|  groups by type, shows trends)           |
+------------------------------------------+

+------------------------------------------+
| Performance Analysis                     |
| (identifies slow operations and          |
|  bottlenecks automatically)              |
+------------------------------------------+

+------------------------------------------+
| Smart Detection                          |
| (AI that detects anomalies               |
|  before you notice them)                 |
+------------------------------------------+
```

---

## 9. Practice: Implementing Observability in the TodoApp

### 9.1 Adding Structured Logs

```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()  // Structured logs!
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

// Using in endpoints:
app.post('/tarefas', (req, res) => {
  const start = Date.now();

  logger.info('Creating task', {
    userId: req.user.id,
    title: req.body.titulo
  });

  try {
    const tarefa = criarTarefa(req.body);
    const duration = Date.now() - start;

    logger.info('Task created successfully', {
      taskId: tarefa.id,
      userId: req.user.id,
      duration_ms: duration
    });

    res.status(201).json(tarefa);
  } catch (error) {
    logger.error('Failed to create task', {
      userId: req.user.id,
      error: error.message,
      stack: error.stack,
      duration_ms: Date.now() - start
    });

    res.status(500).json({ error: 'Internal error' });
  }
});
```

### 9.2 Custom Metrics

```javascript
const client = require('prom-client');

// Counter for tasks created
const tasksCreated = new client.Counter({
  name: 'todoapp_tasks_created_total',
  help: 'Total tasks created',
  labelNames: ['priority']
});

// Response time histogram
const responseTime = new client.Histogram({
  name: 'todoapp_request_duration_seconds',
  help: 'Request response time',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.05, 0.1, 0.25, 0.5, 1, 2.5, 5]
});

// Gauge for pending tasks (goes up and down)
const pendingTasks = new client.Gauge({
  name: 'todoapp_pending_tasks',
  help: 'Current number of pending tasks'
});

// Using:
app.post('/tarefas', (req, res) => {
  const timer = responseTime.startTimer();

  // ... create task ...

  tasksCreated.inc({ priority: req.body.prioridade || 'normal' });
  pendingTasks.inc();
  timer({ method: 'POST', route: '/tarefas', status: '201' });
});
```

### 9.3 Health Checks

**Health Checks** are endpoints that indicate whether the application is healthy:

```javascript
// Basic health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.APP_VERSION || '1.0.0',
    uptime: process.uptime()
  });
});

// Detailed health check (verifies dependencies)
app.get('/health/detailed', async (req, res) => {
  const checks = {
    database: await checkDatabase(),
    redis: await checkRedis(),
    externalApi: await checkExternalApi()
  };

  const allHealthy = Object.values(checks).every(c => c.status === 'up');

  res.status(allHealthy ? 200 : 503).json({
    status: allHealthy ? 'healthy' : 'degraded',
    timestamp: new Date().toISOString(),
    checks
  });
});

// Verification functions
async function checkDatabase() {
  try {
    await db.query('SELECT 1');
    return { status: 'up', latency: '5ms' };
  } catch (e) {
    return { status: 'down', error: e.message };
  }
}
```

> **MARIO ANALOGY:** Health Checks are like the **quick test** Mario does before starting a level: "Do I have lives? Check. Power-up active? Check. Timer working? Check. Controls responding? Check. All OK -- let's play!" If something fails the check, better investigate before starting.

---

## 10. Final Summary Table

| Concept | Technical Explanation | Mario Analogy |
|---------|----------------------|---------------|
| **Observability** | Ability to understand the internal state of the system | Mario's senses during the game |
| **Logs** | Textual record of events | Mario's adventure diary |
| **Metrics** | Numerical values over time | Health bar + coins + timer (HUD) |
| **Traces** | Complete path of a request | Map of where Mario went through the level |
| **Alerts** | Automatic notifications when thresholds are exceeded | Danger jingle when time runs out |
| **Dashboard** | Visual screen with real-time metrics | Pause screen showing all the stats |
| **Azure Monitor** | Complete monitoring platform | Mushroom Kingdom command center |
| **Application Insights** | Deep application monitoring | Detailed X-ray of Mario |
| **Health Check** | Endpoint that verifies application health | Quick test before starting the level |
| **4 Golden Signals** | Latency, Traffic, Errors, Saturation | Level time, active players, deaths, enemies on screen |
| **KQL** | Log query language in Azure | Query in the diary library |
| **Alert Fatigue** | Excess of alerts leading to ignoring all of them | Danger jingle playing all the time |
| **Structured Logging** | Logs in organized JSON format | Diary with organized tables |

---

## References

1. Microsoft Learn -- Azure Monitor: https://learn.microsoft.com/azure/azure-monitor/
2. Microsoft Learn -- Application Insights: https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview
3. Google SRE Book -- Monitoring: https://sre.google/sre-book/monitoring-distributed-systems/
4. OpenTelemetry: https://opentelemetry.io/
5. Grafana: https://grafana.com/
6. Winston (Node.js logger): https://github.com/winstonjs/winston
7. The 4 Golden Signals: https://sre.google/sre-book/monitoring-distributed-systems/#xref_monitoring_golden-signals

---

*"In Mario, the screen shows you EVERYTHING you need to know: lives, coins, time, power-ups. Imagine playing with the screen turned off -- impossible. Observability is the 'screen turned on' for your software. Without it, you are playing in the dark."*

*Next Warp Pipe: Level 2-BOSS -- Boss Battle: Practical Exercises Level 2*
