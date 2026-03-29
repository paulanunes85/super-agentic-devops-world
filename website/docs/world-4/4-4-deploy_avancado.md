---
title: "Level 4-4 -- Launch Strategies: Advanced Deploy"
description: "Blue-green, canary, rolling, feature flags, A/B testing and rollback — how to change the castle doors without visitors noticing"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agentic-devops
  - mario
  - world-4
  - deploy
  - blue-green
  - canary
  - rolling
  - feature-flags
  - rollback
---

# Level 4-4 -- Launch Strategies: Advanced Deploy

<div class="docs-hero">
  <img src="/super-agentic-devops-world/img/docs/4-4-deploy_avancado.png" alt="Level 4-4 -- Launch Strategies: Advanced Deploy" />
</div>


---

## Change Log

| Version | Date       | Author                                  | Description          |
|---------|------------|----------------------------------------|----------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation     |

---

## Table of Contents

- [Prologue: The Invisible Changing of the Guard](#prologue-the-invisible-changing-of-the-guard)
- [1. The Problem with Traditional Deploy](#1-the-problem-with-traditional-deploy)
  - [1.1 The "Big Bang" Deploy](#11-the-big-bang-deploy)
  - [1.2 Downtime: The Enemy](#12-downtime-the-enemy)
  - [1.3 What We Want: Zero Downtime](#13-what-we-want-zero-downtime)
- [2. Blue-Green Deployment: Two Identical Castles](#2-blue-green-deployment-two-identical-castles)
  - [2.1 How It Works](#21-how-it-works)
  - [2.2 Flow Diagram](#22-flow-diagram)
  - [2.3 Implementation on Azure](#23-implementation-on-azure)
  - [2.4 Pros and Cons](#24-pros-and-cons)
- [3. Canary Deployment: Toad the Explorer](#3-canary-deployment-toad-the-explorer)
  - [3.1 How It Works](#31-how-it-works)
  - [3.2 Gradual Progression](#32-gradual-progression)
  - [3.3 Metrics for Decision Making](#33-metrics-for-decision-making)
  - [3.4 Practical Implementation](#34-practical-implementation)
- [4. Rolling Deployment: Gradual Changing of the Guard](#4-rolling-deployment-gradual-changing-of-the-guard)
  - [4.1 How It Works](#41-how-it-works)
  - [4.2 Rolling Update on Kubernetes](#42-rolling-update-on-kubernetes)
  - [4.3 Important Settings](#43-important-settings)
- [5. Feature Flags: Invisible Doors](#5-feature-flags-invisible-doors)
  - [5.1 What Are Feature Flags](#51-what-are-feature-flags)
  - [5.2 Types of Feature Flags](#52-types-of-feature-flags)
  - [5.3 Simple Implementation](#53-simple-implementation)
  - [5.4 Feature Flag Tools](#54-feature-flag-tools)
  - [5.5 Best Practices](#55-best-practices)
- [6. A/B Testing: Two Versions of the Castle](#6-ab-testing-two-versions-of-the-castle)
  - [6.1 What Is A/B Testing](#61-what-is-ab-testing)
  - [6.2 How It Works Technically](#62-how-it-works-technically)
  - [6.3 Metrics and Decisions](#63-metrics-and-decisions)
- [7. Rollback: The Emergency Portal](#7-rollback-the-emergency-portal)
  - [7.1 When to Roll Back](#71-when-to-roll-back)
  - [7.2 Rollback Strategies](#72-rollback-strategies)
  - [7.3 Automatic Rollback](#73-automatic-rollback)
  - [7.4 Database Rollback: The Hardest Problem](#74-database-rollback-the-hardest-problem)
- [8. GitOps: The Map Is the Truth](#8-gitops-the-map-is-the-truth)
  - [8.1 The GitOps Principle](#81-the-gitops-principle)
  - [8.2 How GitOps Works](#82-how-gitops-works)
- [9. Strategy Comparison](#9-strategy-comparison)
  - [9.1 Comparison Table](#91-comparison-table)
  - [9.2 Decision Tree](#92-decision-tree)
- [10. Final Summary Table](#10-final-summary-table)
- [References](#references)

---

## Prologue: The Invisible Changing of the Guard

Sofia had just added an amazing feature to TodoApp — email notifications. She ran all the tests, reviewed the code, and felt confident. She clicked "deploy" and... 500 users lost access for 3 minutes while the new code was being installed.

Yoshi — the DevOps engineer — showed up shaking his head.

*"Sofia, imagine you're the queen of the Mushroom Kingdom and you need to replace all the castle guards. If you fire the old guards and only THEN hire the new ones, the castle is unprotected during the switch. The invaders take advantage."*

*"But how do I switch without leaving the castle unprotected?"*

*"There are several strategies,"* Yoshi opened a map with diagrams. *"You can have **two identical castles** and simply switch which one visitors are directed to. Or send an **explorer** first to test if the path is safe. Or replace the guards **one at a time**, without anyone noticing."*

*"Welcome to advanced deploy. Here, nobody notices that something changed — and that's the goal."*

---

## 1. The Problem with Traditional Deploy

<div align="center">
<img src="../../diagrams/svg/deploy-strategies.svg" alt="Deployment strategies" width="780" />
<br/><em>Deployment strategies</em>
</div>

### 1.1 The "Big Bang" Deploy

Traditional deploy works like this:

```
1. Stop the old application          → Users without access
2. Install new version               → Users without access
3. Start new version                 → Users without access
4. Check if it works                 → Maybe users with access
5. If it doesn't work → revert      → More time without access
```

> **Mario Analogy**: It's like closing the entire Mushroom Kingdom to renovate a single room. Nobody can play during the renovation.

### 1.2 Downtime: The Enemy

**Downtime** is the time during which the application is unavailable.

| Level | Downtime/Year | Availability | Mario |
|-------|--------------|--------------|-------|
| Bad | 87.6 hours | 99% | Castle closes 1 hour per week |
| Good | 8.76 hours | 99.9% | Castle closes 1 hour per month |
| Very good | 52.56 min | 99.99% | Castle closes 5 min per month |
| Excellent | 5.26 min | 99.999% | Castle closes 30 sec per month |

### 1.3 What We Want: Zero Downtime

**Zero Downtime Deployment** means updating the application without ANY user noticing that something changed.

```
BEFORE: v1.0 running → [DOWNTIME] → v2.0 running

AFTER:  v1.0 running → v1.0 + v2.0 running → v2.0 running
                        (smooth transition)
```

---

## 2. Blue-Green Deployment: Two Identical Castles

### 2.1 How It Works

In **Blue-Green Deployment**, you maintain **two identical environments**: one active (Blue) and one inactive (Green).

> **Mario Analogy**: Imagine two identical castles side by side — Blue Castle and Green Castle. All visitors are at the Blue Castle. You renovate the Green Castle in silence. When the renovation is ready and tested, you simply change the direction sign — now visitors go to the Green Castle. If something goes wrong, change the sign back in seconds.

### 2.2 Flow Diagram

```
State 1: Blue active, Green inactive
                    ┌─────────────────┐
  Users ──────────→ │  BLUE (v1.0)    │  ← Active
                    │  Blue Castle    │
                    └─────────────────┘
                    ┌─────────────────┐
                    │  GREEN (v1.0)   │  ← Inactive
                    │  Green Castle   │
                    └─────────────────┘

State 2: Deploy v2.0 to Green (users don't notice)
                    ┌─────────────────┐
  Users ──────────→ │  BLUE (v1.0)    │  ← Still active
                    └─────────────────┘
                    ┌─────────────────┐
  Testers ────────→ │  GREEN (v2.0)   │  ← Testing
                    └─────────────────┘

State 3: Switch! Green becomes active
                    ┌─────────────────┐
                    │  BLUE (v1.0)    │  ← Inactive (backup)
                    └─────────────────┘
                    ┌─────────────────┐
  Users ──────────→ │  GREEN (v2.0)   │  ← Active!
                    └─────────────────┘

Problems? Switch back in seconds!
```

### 2.3 Implementation on Azure

```bash
# Azure App Service has native "Deployment Slots" for Blue-Green

# 1. Create the App Service (Blue — production)
az webapp create \
  --name todoapp-mario \
  --resource-group mushroom-kingdom \
  --plan mario-plan

# 2. Create a staging slot (Green)
az webapp deployment slot create \
  --name todoapp-mario \
  --resource-group mushroom-kingdom \
  --slot staging

# 3. Deploy the new version to the staging slot (Green)
az webapp deployment source config-local-git \
  --name todoapp-mario \
  --resource-group mushroom-kingdom \
  --slot staging

git push azure-staging main

# 4. Test the staging slot
curl https://todoapp-mario-staging.azurewebsites.net/health

# 5. SWAP! Switch staging <-> production (zero downtime)
az webapp deployment slot swap \
  --name todoapp-mario \
  --resource-group mushroom-kingdom \
  --slot staging \
  --target-slot production

# 6. Problems? Swap back!
az webapp deployment slot swap \
  --name todoapp-mario \
  --resource-group mushroom-kingdom \
  --slot staging \
  --target-slot production
```

### 2.4 Pros and Cons

| Pros | Cons |
|------|------|
| Zero downtime | Double cost (two environments) |
| Instant rollback | Database must be compatible with both versions |
| Test environment identical to production | User sessions may be lost during swap |
| Simple to understand | Doesn't scale well for microservices (too many pairs) |

---

## 3. Canary Deployment: Toad the Explorer

### 3.1 How It Works

In **Canary Deployment**, the new version is first released to a **small percentage** of users. If everything goes well, it gradually increases to 100%.

> **Mario Analogy**: Before Mario enters the dangerous cave, he sends **Toad** first — the explorer. Toad goes in, checks if it's safe, comes back and reports. If everything is fine, Mario enters with confidence. If Toad encounters problems, Mario takes a different path.

### 3.2 Gradual Progression

```
Phase 1 (Canary):     5% → new version    95% → old version
                       └── Monitor metrics for 30 min

Phase 2 (Expansion):  25% → new version    75% → old version
                       └── Monitor metrics for 1 hour

Phase 3 (Majority):   50% → new version    50% → old version
                       └── Monitor metrics for 2 hours

Phase 4 (Almost there): 90% → new version  10% → old version
                       └── Monitor metrics for 1 hour

Phase 5 (Complete):   100% → new version    0% → old version
                       └── Deploy complete!
```

### 3.3 Metrics for Decision Making

Which metrics to monitor to decide whether to advance or revert:

| Metric | Acceptable Threshold | If Exceeded |
|--------|---------------------|-------------|
| **Error rate (HTTP 5xx)** | < 1% | Revert immediately |
| **P95 Latency** | < 500ms | Investigate, possibly revert |
| **CPU/Memory** | < 80% | Investigate |
| **Error logs** | No new errors | Investigate |
| **User satisfaction** | No complaints | Investigate |

### 3.4 Practical Implementation

```yaml
# Kubernetes: Canary with Ingress NGINX
# canary-deployment.yaml

apiVersion: apps/v1
kind: Deployment
metadata:
  name: todoapp-canary
  labels:
    app: todoapp
    version: v2.0
spec:
  replicas: 1  # Few pods for canary
  selector:
    matchLabels:
      app: todoapp
      version: v2.0
  template:
    metadata:
      labels:
        app: todoapp
        version: v2.0
    spec:
      containers:
      - name: todoapp
        image: todoapp:v2.0
        ports:
        - containerPort: 3000

---
# Ingress with canary annotation
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: todoapp-canary
  annotations:
    nginx.ingress.kubernetes.io/canary: "true"
    nginx.ingress.kubernetes.io/canary-weight: "10"  # 10% of traffic
spec:
  rules:
  - host: todoapp.mushroom.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: todoapp-canary
            port:
              number: 3000
```

```bash
# Gradual canary progression
# Phase 1: 5%
kubectl annotate ingress todoapp-canary \
  nginx.ingress.kubernetes.io/canary-weight="5" --overwrite

# Monitor... all good? Advance to 25%
kubectl annotate ingress todoapp-canary \
  nginx.ingress.kubernetes.io/canary-weight="25" --overwrite

# Monitor... all good? Advance to 50%
kubectl annotate ingress todoapp-canary \
  nginx.ingress.kubernetes.io/canary-weight="50" --overwrite

# All good? Promote canary to production
kubectl set image deployment/todoapp-stable todoapp=todoapp:v2.0
kubectl delete deployment todoapp-canary
```

---

## 4. Rolling Deployment: Gradual Changing of the Guard

### 4.1 How It Works

In **Rolling Deployment**, instances are updated **one at a time** (or in batches), while the rest keep running.

> **Mario Analogy**: Imagine 10 guards protecting the castle. Instead of replacing them all at once (castle unprotected), you replace **one guard at a time**. The old guard leaves, the new one enters and takes the post. Meanwhile, the other 9 keep working. Nobody notices the switch.

```
Time 0:  [v1] [v1] [v1] [v1] [v1]  ← 5 instances v1
Time 1:  [v2] [v1] [v1] [v1] [v1]  ← 1 updated
Time 2:  [v2] [v2] [v1] [v1] [v1]  ← 2 updated
Time 3:  [v2] [v2] [v2] [v1] [v1]  ← 3 updated
Time 4:  [v2] [v2] [v2] [v2] [v1]  ← 4 updated
Time 5:  [v2] [v2] [v2] [v2] [v2]  ← All updated!
```

### 4.2 Rolling Update on Kubernetes

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: todoapp
spec:
  replicas: 5
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1     # At most 1 pod unavailable
      maxSurge: 1            # At most 1 extra pod
  selector:
    matchLabels:
      app: todoapp
  template:
    metadata:
      labels:
        app: todoapp
    spec:
      containers:
      - name: todoapp
        image: todoapp:v2.0
        ports:
        - containerPort: 3000
        readinessProbe:        # Only receives traffic when ready
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 10
        livenessProbe:         # Restarts if unhealthy
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 15
          periodSeconds: 20
```

### 4.3 Important Settings

| Parameter | What It Does | Mario Analogy |
|-----------|-------------|---------------|
| **maxUnavailable** | How many instances can be down at the same time | How many guards can be switching at the same time |
| **maxSurge** | How many extra instances can exist during the update | How many extra guards can temporarily be present |
| **readinessProbe** | Checks if the instance is ready to receive traffic | New guard ready for duty? |
| **livenessProbe** | Checks if the instance is alive and healthy | Guard still standing? |

---

---

## 5. Feature Flags: Invisible Doors

### 5.1 What Are Feature Flags

**Feature Flags** (or feature toggles) are switches that allow you to **turn features on or off** without deploying.

> **Mario Analogy**: Feature flags are **invisible doors** in the castle. The door exists, but only some players can see and open it. For the others, it's just a normal wall. When you decide the door is ready, you make it visible to everyone — without needing to rebuild anything.

### 5.2 Types of Feature Flags

| Type | Duration | Use | Mario |
|------|----------|-----|-------|
| **Release Flag** | Temporary | Hide unfinished feature | Door that will be revealed in the next update |
| **Experiment Flag** | Temporary | A/B testing | Half the players see the blue door, half see the red one |
| **Ops Flag** | Permanent | Disable feature in emergency | Panic button that closes a room in case of fire |
| **Permission Flag** | Permanent | Enable for specific groups | Door that only opens for VIP members |

### 5.3 Simple Implementation

```javascript
// feature-flags.js — Basic implementation
const featureFlags = {
  'new-notification-system': {
    enabled: true,
    percentage: 50,          // 50% of users
    allowedUsers: ['mario-001', 'luigi-002'],  // Specific users
    allowedRoles: ['admin', 'beta-tester']     // Specific roles
  },
  'dark-mode': {
    enabled: true,
    percentage: 100           // All users
  },
  'experimental-ai': {
    enabled: true,
    percentage: 5,            // Only 5% of users
    allowedRoles: ['admin']
  }
};

function isFeatureEnabled(featureName, user) {
  const flag = featureFlags[featureName];
  if (!flag || !flag.enabled) return false;

  // Does the specific user have access?
  if (flag.allowedUsers?.includes(user.id)) return true;

  // Does the user's role have access?
  if (flag.allowedRoles?.includes(user.role)) return true;

  // Percentage: use userId hash for consistency
  const hash = hashCode(user.id);
  const userPercentile = Math.abs(hash) % 100;
  return userPercentile < flag.percentage;
}

// Usage in code
app.get('/api/notifications', verifyToken, async (req, res) => {
  if (isFeatureEnabled('new-notification-system', req.user)) {
    // New notification system
    const notifications = await newNotificationService.getAll(req.user.id);
    res.json(notifications);
  } else {
    // Legacy system
    const notifications = await legacyNotificationService.getAll(req.user.id);
    res.json(notifications);
  }
});
```

```jsx
// In the frontend
function TodoApp({ user }) {
  return (
    <div>
      <TodoList />

      {isFeatureEnabled('dark-mode', user) && (
        <DarkModeToggle />
      )}

      {isFeatureEnabled('experimental-ai', user) && (
        <AIAssistant />
      )}
    </div>
  );
}
```

### 5.4 Feature Flag Tools

| Tool | Type | Highlight |
|------|------|-----------|
| **Azure App Configuration** | Azure Service | Native integration with Azure |
| **LaunchDarkly** | SaaS | Market leader, many features |
| **Unleash** | Open Source | Self-hosted, free |
| **Flagsmith** | Open Source/SaaS | Simple and flexible |
| **Split.io** | SaaS | Focus on experimentation |

### 5.5 Best Practices

1. **Clean up temporary flags**: Feature flags that are not removed become technical debt
2. **Name them descriptively**: `enable-notification-v2` > `flag-123`
3. **Document them**: Who created it, why it exists, when to remove it
4. **Test both paths**: Test with flag ON and OFF
5. **Have a kill switch**: For critical features, be able to disable them instantly

---

## 6. A/B Testing: Two Versions of the Castle

### 6.1 What Is A/B Testing

**A/B Testing** is the practice of presenting two different versions of something to different groups of users, measuring which performs better, and choosing the winner.

> **Mario Analogy**: Imagine Nintendo is unsure about the design of a new level. Half the players get version A (with more coins) and half get version B (with more power-ups). After 1 week, Nintendo checks which version players liked more and adopts that one.

### 6.2 How It Works Technically

```javascript
// A/B Test: "Complete Task" Button
// Version A: Green button with text "Complete"
// Version B: Blue button with text "Done!"

function getExperimentVariant(userId, experimentId) {
  // Consistent hash — same user always sees the same version
  const hash = hashCode(`${userId}-${experimentId}`);
  return hash % 2 === 0 ? 'A' : 'B';
}

// In the frontend
function CompleteButton({ todo, user }) {
  const variant = getExperimentVariant(user.id, 'complete-button-redesign');

  if (variant === 'A') {
    return (
      <button className="btn-green" onClick={() => completeTodo(todo.id)}>
        Complete
      </button>
    );
  } else {
    return (
      <button className="btn-blue" onClick={() => completeTodo(todo.id)}>
        Done!
      </button>
    );
  }
}

// Tracking
async function completeTodo(todoId) {
  await api.put(`/todos/${todoId}`, { completed: true });

  // Record metric for the A/B test
  analytics.track('todo_completed', {
    experiment: 'complete-button-redesign',
    variant: getExperimentVariant(currentUser.id, 'complete-button-redesign')
  });
}
```

### 6.3 Metrics and Decisions

| Metric | Version A | Version B | Winner |
|--------|-----------|-----------|--------|
| Click rate | 45% | 52% | B |
| Time to click | 3.2s | 2.1s | B |
| Error rate | 0.5% | 0.3% | B |
| **Result** | | | **Version B wins!** |

---

## 7. Rollback: The Emergency Portal

### 7.1 When to Roll Back

**Rollback** is reverting to the previous version when something goes wrong.

> **Mario Analogy**: Rollback is the **emergency portal** that takes you back to the old castle. If the new castle is on fire, you don't stay trying to put it out — you jump into the portal and go back to safety. Then, calmly, you investigate what went wrong.

**Indicators for immediate rollback:**

- Error rate > 5%
- Latency > 3x normal
- Crash loops (application restarting infinitely)
- Data loss
- Security vulnerability discovered

### 7.2 Rollback Strategies

| Strategy | How | Speed | Mario |
|----------|-----|-------|-------|
| **Blue-Green swap** | Switch to previous environment | Seconds | Flip the direction sign |
| **Redeploy previous version** | Deploy the previous image/tag | Minutes | Rebuild the old castle |
| **Git revert** | Revert commit in Git, redeploy | Minutes | Go back in time |
| **Feature flag off** | Turn off the flag for the problematic feature | Seconds | Close the invisible door |
| **Kubernetes rollback** | Revert to previous revision | Seconds | Restore checkpoint |

```bash
# Kubernetes: instant rollback
kubectl rollout undo deployment/todoapp

# Rollback to a specific revision
kubectl rollout history deployment/todoapp
kubectl rollout undo deployment/todoapp --to-revision=3

# Azure App Service: swap back
az webapp deployment slot swap \
  --name todoapp-mario \
  --resource-group mushroom-kingdom \
  --slot staging \
  --target-slot production

# Docker: use previous tag
docker pull todoapp:v1.9.0
docker stop todoapp-current
docker run -d --name todoapp-current todoapp:v1.9.0
```

### 7.3 Automatic Rollback

```yaml
# GitHub Actions: automatic rollback if health check fails
name: Deploy with Auto-Rollback

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy new version
        run: |
          az webapp deployment slot swap \
            --name todoapp-mario \
            --resource-group mushroom-kingdom \
            --slot staging \
            --target-slot production

      - name: Health check (wait 60s)
        run: |
          sleep 60
          STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://todoapp-mario.azurewebsites.net/health)
          if [ "$STATUS" != "200" ]; then
            echo "Health check failed! Status: $STATUS"
            echo "ROLLBACK_NEEDED=true" >> $GITHUB_ENV
          fi

      - name: Automatic rollback
        if: env.ROLLBACK_NEEDED == 'true'
        run: |
          echo "Executing emergency rollback..."
          az webapp deployment slot swap \
            --name todoapp-mario \
            --resource-group mushroom-kingdom \
            --slot staging \
            --target-slot production
          echo "Rollback complete! Previous version restored."
          exit 1  # Fail the pipeline to alert the team
```

### 7.4 Database Rollback: The Hardest Problem

Application rollback is simple. Database rollback is **dangerous**.

> **Mario Analogy**: Reverting code is like swapping the castle furniture back. Reverting the database is like trying to "un-demolish" a wall you knocked down — the bricks don't go back into place easily.

**Rules for safe migrations:**

1. **Migrations must be compatible with both the old and new versions** (forward-compatible)
2. **Never delete columns immediately** — deprecate first, delete in the next deploy
3. **Add columns as nullable** — the old version doesn't break
4. **Test the migration rollback before deploying**

```javascript
// Safe migration: add column
// Works with v1.0 AND v2.0
exports.up = async (knex) => {
  await knex.schema.alterTable('todos', (table) => {
    table.string('category').nullable().defaultTo(null);
    // nullable! The old version doesn't know about this column, and that's fine.
  });
};

exports.down = async (knex) => {
  await knex.schema.alterTable('todos', (table) => {
    table.dropColumn('category');
  });
};
```

---

## 8. GitOps: The Map Is the Truth

### 8.1 The GitOps Principle

**GitOps** is the practice of using Git as the **single source of truth** for infrastructure and deployments.

> **Mario Analogy**: In the Mushroom Kingdom, the **official map** (Git) is the absolute truth. If the map says the castle has 5 towers, the castle MUST have 5 towers. If someone builds an extra tower without updating the map, the tower is automatically demolished. The map ALWAYS reflects reality, and reality ALWAYS reflects the map.

### 8.2 How GitOps Works

```
1. Developer makes a change in the Git repository
2. Pull Request is reviewed and approved
3. Merge to main branch
4. GitOps agent (ArgoCD/Flux) detects the change
5. Agent applies changes to the cluster automatically
6. If the actual state diverges from Git, the agent corrects it automatically
```

```
Git (Source of Truth)                Cluster (Actual State)
┌──────────────────┐                ┌──────────────────┐
│ replicas: 3      │ ──sync──→      │ pods: 3          │
│ image: v2.0      │                │ image: v2.0      │
│ memory: 512Mi    │                │ memory: 512Mi    │
└──────────────────┘                └──────────────────┘

If someone manually changes the cluster to 5 pods,
GitOps detects it and REVERTS to 3 (as Git says).
```

---

## 9. Strategy Comparison

### 9.1 Comparison Table

| Strategy | Zero Downtime | Rollback | Cost | Complexity | Best For |
|----------|:------------:|:--------:|:----:|:----------:|----------|
| **Big Bang** | No | Slow | Low | Low | Simple projects |
| **Blue-Green** | Yes | Instant | High | Medium | Critical apps |
| **Canary** | Yes | Fast | Medium | High | High-traffic apps |
| **Rolling** | Yes | Medium | Low | Medium | Kubernetes/containers |
| **Feature Flag** | Yes | Instant | Low | Medium | Risky features |

### 9.2 Decision Tree

```
How much downtime is acceptable?
├── "None" → Are there many diverse users?
│             ├── YES → Canary Deployment
│             └── NO → Blue-Green Deployment
│
├── "A few seconds" → Using Kubernetes?
│                      ├── YES → Rolling Update
│                      └── NO → Blue-Green
│
└── "A few minutes" → Big Bang (simple and works)
```

---

## 10. Final Summary Table

| Concept | What It Is | Mario Analogy |
|---------|-----------|---------------|
| **Blue-Green** | Two environments, instant switch | Two castles, flip the sign |
| **Canary** | Release to a few first | Send Toad to explore first |
| **Rolling** | Update instances one by one | Replace guards one by one |
| **Feature Flag** | Turn features on/off | Invisible doors in the castle |
| **A/B Testing** | Two versions, measure which is better | Two levels, see which players prefer |
| **Rollback** | Revert to previous version | Emergency portal to the old castle |
| **GitOps** | Git as source of truth | The official map is reality |
| **Zero Downtime** | Deploy without interruption | Switch without closing the castle |
| **Health Check** | Verify the app is healthy | Guard checking if everything is fine |

---

## References

- [Azure App Service — Deployment Slots](https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots)
- [Kubernetes — Rolling Updates](https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/)
- [Microsoft — Canary Deployments](https://learn.microsoft.com/en-us/azure/architecture/framework/devops/release-engineering-cd#canary-deployment)
- [Martin Fowler — Feature Toggles](https://martinfowler.com/articles/feature-toggles.html)
- [Azure App Configuration — Feature Flags](https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-feature-management)
- [LaunchDarkly — Feature Flags Best Practices](https://launchdarkly.com/blog/feature-flag-best-practices/)
- [ArgoCD — GitOps](https://argo-cd.readthedocs.io/en/stable/)
- [Flux — GitOps Toolkit](https://fluxcd.io/)
- [Microsoft — Blue-Green Deployments](https://learn.microsoft.com/en-us/azure/architecture/example-scenario/blue-green-spring/blue-green-spring)

---

*Level 4-4 complete! You learned the main advanced deploy strategies. In the next level, we'll explore Git Workflows — how to organize the team's workflow. Get ready for Level 4-5!*

---

<div align="center">

⬅️ [Previous: Level 4-3: Architecture](4-3-arquitetura.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 4-5: Git Workflows](4-5-git_workflows.md)

</div>
