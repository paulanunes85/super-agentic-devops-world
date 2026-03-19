---
title: "Level 4-2 -- Service Tiers: Cloud Models"
description: "IaaS, PaaS, SaaS, and Serverless explained as castle levels in the Mushroom Kingdom — from empty land to a fully furnished castle"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
tags:
  - agentic-devops
  - mario
  - world-4
  - cloud
  - iaas
  - paas
  - saas
  - serverless
sidebar_position: 2
format: md
---

# Level 4-2 -- Service Tiers: Cloud Models

---

## Change Log

| Version | Date       | Author                                  | Description        |
|---------|------------|----------------------------------------|--------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation   |

---

## Table of Contents

- [Prologue: The Construction Dilemma](#prologue-the-construction-dilemma)
- [1. What Is Cloud Computing?](#1-what-is-cloud-computing)
  - [1.1 Before the Cloud: The On-Premises World](#11-before-the-cloud-the-on-premises-world)
  - [1.2 The Cloud Revolution](#12-the-cloud-revolution)
  - [1.3 The Three Great Cloud Kingdoms](#13-the-three-great-cloud-kingdoms)
- [2. IaaS: Empty Land — Build Everything](#2-iaas-empty-land--build-everything)
  - [2.1 What You Get](#21-what-you-get)
  - [2.2 What You Need to Do](#22-what-you-need-to-do)
  - [2.3 Real-World IaaS Examples](#23-real-world-iaas-examples)
  - [2.4 When to Use IaaS](#24-when-to-use-iaas)
- [3. PaaS: Pre-Built Castle — Just Decorate](#3-paas-pre-built-castle--just-decorate)
  - [3.1 What You Get](#31-what-you-get)
  - [3.2 What You Need to Do](#32-what-you-need-to-do)
  - [3.3 Real-World PaaS Examples](#33-real-world-paas-examples)
  - [3.4 When to Use PaaS](#34-when-to-use-paas)
- [4. SaaS: Furnished Castle — Move In](#4-saas-furnished-castle--move-in)
  - [4.1 What You Get](#41-what-you-get)
  - [4.2 What You Need to Do](#42-what-you-need-to-do)
  - [4.3 Real-World SaaS Examples](#43-real-world-saas-examples)
  - [4.4 When to Use SaaS](#44-when-to-use-saas)
- [5. Serverless: Magic — Appears When Needed](#5-serverless-magic--appears-when-needed)
  - [5.1 The Serverless Concept](#51-the-serverless-concept)
  - [5.2 How Serverless Works](#52-how-serverless-works)
  - [5.3 Azure Functions: Practical Example](#53-azure-functions-practical-example)
  - [5.4 Advantages and Limitations](#54-advantages-and-limitations)
- [6. Visual Comparison: Pizza as a Service](#6-visual-comparison-pizza-as-a-service)
- [7. Shared Responsibility Model](#7-shared-responsibility-model)
  - [7.1 What Is Shared Responsibility](#71-what-is-shared-responsibility)
  - [7.2 Responsibility Table](#72-responsibility-table)
  - [7.3 Why This Matters](#73-why-this-matters)
- [8. Deployment Models: Where the Castle Is Located](#8-deployment-models-where-the-castle-is-located)
  - [8.1 Public Cloud](#81-public-cloud)
  - [8.2 Private Cloud](#82-private-cloud)
  - [8.3 Hybrid Cloud](#83-hybrid-cloud)
  - [8.4 Multi-Cloud](#84-multi-cloud)
- [9. Cloud Costs: Mushroom Kingdom Economics](#9-cloud-costs-mushroom-kingdom-economics)
  - [9.1 Pay-as-you-go](#91-pay-as-you-go)
  - [9.2 Reserved Instances](#92-reserved-instances)
  - [9.3 Spot Instances](#93-spot-instances)
  - [9.4 Free Tiers](#94-free-tiers)
- [10. Choosing the Right Model](#10-choosing-the-right-model)
  - [10.1 Decision Tree](#101-decision-tree)
  - [10.2 Final Summary Table](#102-final-summary-table)
- [References](#references)

---

## Prologue: The Construction Dilemma

Sofia needed to put her TodoApp online for real users. But when she started researching, she got lost with so many options: virtual machines, app services, serverless functions, containers...

Yoshi — the DevOps Engineer — flew in and landed beside her.

*"Sofia, think of it this way,"* said Yoshi. *"You want to live in a new place. What are your options?"*

Sofia thought. *"Buy land and build from scratch?"*

*"That's **IaaS** — Infrastructure as a Service. You get empty land. You need to build everything: foundation, walls, roof, plumbing, electrical..."*

*"Or... buy a semi-furnished apartment?"*

*"That's **PaaS** — Platform as a Service. The castle is already built. You just need to decorate — put in your furniture, paintings, your stuff."*

*"Or rent a fully furnished Airbnb?"*

*"That's **SaaS** — Software as a Service. Everything is ready. You arrive with your suitcase and start using it."*

*"And there's one more option,"* Yoshi winked. *"Imagine a **magic** castle that only appears when someone knocks on the door and disappears when everyone leaves. You only pay for the minutes someone was inside."*

Sofia's eyes widened. *"That exists?"*

*"Welcome to **Serverless**."*

---

## 1. What Is Cloud Computing?

### 1.1 Before the Cloud: The On-Premises World

Before the cloud, every company needed its own **physical servers**. Imagine that for each castle in the Mushroom Kingdom, you needed to:

- Buy the land (datacenter)
- Build the structure (physical servers)
- Install all infrastructure (network, electrical, cooling)
- Hire guards 24/7 (IT team)
- Perform constant maintenance (updates, repairs)

**On-premises problems:**

| Problem | Mario Analogy |
|---------|---------------|
| **High upfront cost** | Buy land + build castle before having residents |
| **Waste** | Huge castle with 90% of rooms empty |
| **Slow scalability** | Need to build a new wing of the castle (takes months) |
| **Constant maintenance** | Roof leaks, walls crack, pipes clog |
| **Disaster risk** | Fire in the castle = total loss |

### 1.2 The Cloud Revolution

Cloud computing solves these problems by offering computational resources **on demand, over the internet**.

> **Mario Analogy**: Instead of each character building their own castle, there is a **huge kingdom** (Azure, AWS, GCP) with thousands of ready-made castles. You rent what you need, for as long as you need it. If you need more space, just ask. If you no longer need it, give it back.

**The 5 essential characteristics of the cloud (NIST):**

1. **Self-service on-demand**: Request resources without human approval
2. **Broad network access**: Access from anywhere via internet
3. **Resource pooling**: Resources shared among many users
4. **Rapid elasticity**: Scale quickly up or down
5. **Measured service**: Pay only for what you use

### 1.3 The Three Great Cloud Kingdoms

| Provider | Mario Analogy | Strength |
|----------|---------------|----------|
| **Microsoft Azure** | Mushroom Kingdom — vast and organized | Microsoft integration, hybrid, enterprise |
| **Amazon AWS** | Koopa Kingdom — the largest and oldest | Variety of services, market share |
| **Google Cloud** | Star Kingdom — innovative and agile | AI/ML, Kubernetes, BigQuery |

---

## 2. IaaS: Empty Land — Build Everything

### 2.1 What You Get

With **IaaS (Infrastructure as a Service)**, the cloud provider supplies the basic infrastructure:

> **Mario Analogy**: IaaS is receiving **empty land** in the Mushroom Kingdom. The land already has access to water and electricity (network and internet), but you need to build EVERYTHING: foundation, walls, roof, decoration, security.

**What the provider handles:**

- Physical hardware (servers, storage, network)
- Virtualization (hypervisor)
- Datacenter (power, cooling, physical security)

**What YOU handle:**

- Operating system (Linux, Windows)
- Middleware and runtime
- Application
- Data
- Application security
- OS patches and updates
- Virtual network configuration

### 2.2 What You Need to Do

```bash
# Example: Create a VM in Azure (IaaS)
az vm create \
  --resource-group mushroom-kingdom \
  --name mario-server \
  --image Ubuntu2204 \
  --size Standard_B2s \
  --admin-username mario \
  --generate-ssh-keys

# Now YOU need to:
# 1. Connect via SSH
ssh mario@<server-ip>

# 2. Install Node.js
sudo apt update && sudo apt install -y nodejs npm

# 3. Install dependencies
npm install

# 4. Configure NGINX as reverse proxy
sudo apt install -y nginx

# 5. Configure SSL certificate
sudo certbot --nginx -d todoapp.mushroom.com

# 6. Configure firewall
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# 7. Configure monitoring
# 8. Configure backups
# 9. Configure auto-restart
# ... and MUCH more
```

### 2.3 Real-World IaaS Examples

| Service | Provider | What It Does |
|---------|----------|-------------|
| **Azure Virtual Machines** | Microsoft | Virtual machines with any OS |
| **Amazon EC2** | AWS | Elastic compute instances |
| **Google Compute Engine** | Google | Customizable VMs |
| **Azure Virtual Network** | Microsoft | Private virtual networks |
| **Azure Disk Storage** | Microsoft | Disks for VMs |

### 2.4 When to Use IaaS

**Use IaaS when:**

- You need total control over the operating system
- You have legacy applications that don't run on PaaS
- You need very specific hardware/software configurations
- You have an infrastructure team to manage it
- You need specific compliance requiring OS control

**DON'T use IaaS when:**

- You simply want to put a web app online
- You don't have a team to manage servers
- You want to focus on code, not infrastructure

---

## 3. PaaS: Pre-Built Castle — Just Decorate

### 3.1 What You Get

With **PaaS (Platform as a Service)**, the provider handles all infrastructure AND the platform. You just need to bring your application.

> **Mario Analogy**: PaaS is like receiving an **already-built castle** in the Mushroom Kingdom. Walls, roof, plumbing, electrical — everything ready. You just need to put in your furniture (code) and decorate (configure).

**What the provider handles:**

- Everything from IaaS (hardware, network, virtualization)
- Operating system
- Middleware and runtime (Node.js, Python, .NET)
- Patches and updates
- Automatic scalability
- Load balancing

**What YOU handle:**

- Your application (code)
- Your data
- Application configurations

### 3.2 What You Need to Do

```bash
# Example: Deploy to Azure App Service (PaaS)

# 1. Create the App Service
az webapp create \
  --resource-group mushroom-kingdom \
  --plan mario-plan \
  --name todoapp-mario \
  --runtime "NODE:18-lts"

# 2. Deploy the code
az webapp deployment source config-local-git \
  --name todoapp-mario \
  --resource-group mushroom-kingdom

git remote add azure <azure-url>
git push azure main

# DONE! No installing Node.js, no configuring NGINX,
# no SSL, no firewall. All automatic.
```

**Compare with IaaS**: in IaaS there were ~9 manual steps. In PaaS, it was 2 commands.

### 3.3 Real-World PaaS Examples

| Service | Provider | What It Does |
|---------|----------|-------------|
| **Azure App Service** | Microsoft | Web app hosting |
| **Azure SQL Database** | Microsoft | Managed SQL database |
| **Heroku** | Salesforce | Simple PaaS for devs |
| **AWS Elastic Beanstalk** | AWS | Automated deploy |
| **Google App Engine** | Google | Scalable apps |
| **Azure Container Apps** | Microsoft | Managed containers |

### 3.4 When to Use PaaS

**Use PaaS when:**

- You want to focus on code, not infrastructure
- You need fast and simple deployment
- You want automatic scalability without configuration
- You don't have or don't want a dedicated infrastructure team
- You're building web apps, APIs, or microservices

**DON'T use PaaS when:**

- You need total control over the OS
- You have very specific hardware requirements
- Legacy application that doesn't adapt to PaaS

---

## 4. SaaS: Furnished Castle — Move In

### 4.1 What You Get

With **SaaS (Software as a Service)**, you receive a **complete application ready to use**. No installation, configuration, or maintenance needed.

> **Mario Analogy**: SaaS is like arriving at a **completely furnished castle** in the Mushroom Kingdom. Bed made, food in the fridge, guards at the door. You just need to walk in and start living. You don't need to know how the electrical works or who does the maintenance.

**What the provider handles:**

- EVERYTHING: hardware, OS, platform, application, data (backup), security, updates

**What YOU handle:**

- Your data within the application
- User settings
- Who has access

### 4.2 What You Need to Do

```
1. Open the browser
2. Access the website
3. Create an account (or login with OAuth)
4. Start using

No deploy. No code. No server.
```

### 4.3 Real-World SaaS Examples

| Service | What It Does | You Use It For |
|---------|-------------|---------------|
| **Microsoft 365** | Productivity suite | Email, Word, Excel, Teams |
| **GitHub** | Code platform | Repositories, CI/CD, Issues |
| **Slack** | Communication | Team messages |
| **Salesforce** | CRM | Managing clients |
| **Notion** | Documentation | Project wiki |
| **Vercel** | Frontend deploy | Hosting Next.js sites |
| **Figma** | Design | Creating interfaces |

### 4.4 When to Use SaaS

**Use SaaS when:**

- The ready-made solution meets your needs
- You don't want to build something that already exists
- You want to start using it immediately
- You prefer paying a monthly subscription over developing internally

**DON'T use SaaS when:**

- You need deep customization
- You have security requirements that demand total control
- The subscription cost is higher than building internally
- The ready-made solution doesn't fit your specific use case

---

## 5. Serverless: Magic — Appears When Needed

### 5.1 The Serverless Concept

**Serverless** doesn't mean "without servers" — the servers exist, but you **don't need to think about them**. The provider manages everything automatically.

> **Mario Analogy**: Serverless is like a **magic** castle in the Mushroom Kingdom. Rooms only appear when someone needs them and **disappear** when nobody is using them anymore. You don't pay for the entire castle — you pay only for the rooms that were used and for the time they were open.

**Serverless characteristics:**

- **Event-driven**: Code executes in response to events
- **Auto-scaling**: Scales from 0 to thousands automatically
- **Pay-per-execution**: Pay only when the code runs
- **No server management**: Zero server management
- **Ephemeral**: Instances are temporary

### 5.2 How Serverless Works

```
Traditional Model (IaaS/PaaS):
  Server running 24/7 → Even without anyone using it → $$$ per hour

Serverless Model:
  Nobody using → Nothing running → $0
  Request arrives → Function starts → Processes → Responds → Shuts down → $0.0001
  1000 simultaneous requests → 1000 instances → Process → $0.10
```

```
Time -->  00:00        06:00        12:00        18:00        00:00
            |            |            |            |            |
Traditional: [=========SERVER RUNNING 24H=========] = $72/day

Serverless:  [_]  [_]   [|||]  [||||||||||] [|||]  [_] = $2/day
              ^    ^       ^         ^          ^    ^
              1    3      50       500        100    5
              req  req    req      req        req   req
```

### 5.3 Azure Functions: Practical Example

```javascript
// Azure Function: Send email when a task is created
// File: CreateTodoNotification/index.js

module.exports = async function (context, req) {
  context.log('New task created! Sending notification...');

  const { title, userId, priority } = req.body;

  // Fetch user email
  const user = await getUser(userId);

  // Send email
  await sendEmail({
    to: user.email,
    subject: `New task: ${title}`,
    body: `You created the task "${title}" with priority ${priority}.`
  });

  context.res = {
    status: 200,
    body: { message: 'Notification sent successfully' }
  };
};
```

```json
// function.json — trigger configuration
{
  "bindings": [
    {
      "authLevel": "function",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": ["post"]
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}
```

**Other trigger types:**

| Trigger | When It Fires | Mario Analogy |
|---------|--------------|---------------|
| **HTTP** | HTTP request arrives | Someone knocks on the castle door |
| **Timer** | At scheduled times | The castle clock strikes (every hour) |
| **Blob** | File added to storage | New letter arrives at the post office |
| **Queue** | Message arrives in queue | Parakoopa delivers a package |
| **Database** | Data changed in database | Toad records a change in the registry book |

### 5.4 Advantages and Limitations

| Advantage | Limitation |
|----------|-----------|
| Pay only for actual use | Cold start (delay to "wake up") |
| Scales automatically from 0 to infinity | Execution time limit (5-10 min) |
| Zero server management | Difficult to debug locally |
| Simple deploy (just the code) | Vendor lock-in |
| Ideal for microservices | Not ideal for long processes |

---

## 6. Visual Comparison: Pizza as a Service

A classic industry analogy, adapted for Mario:

```
                On-Premises    IaaS          PaaS          SaaS         Serverless
                (Your castle)  (Land)        (Castle)      (Hotel)      (Magic)
Application     [YOU]          [YOU]         [YOU]         [provider]   [YOU*]
Data            [YOU]          [YOU]         [YOU]         [provider]   [YOU]
Runtime         [YOU]          [YOU]         [provider]    [provider]   [provider]
Middleware      [YOU]          [YOU]         [provider]    [provider]   [provider]
OS              [YOU]          [YOU]         [provider]    [provider]   [provider]
Virtualization  [YOU]          [provider]    [provider]    [provider]   [provider]
Servers         [YOU]          [provider]    [provider]    [provider]   [provider]
Storage         [YOU]          [provider]    [provider]    [provider]   [provider]
Network         [YOU]          [provider]    [provider]    [provider]   [provider]

* In serverless you write ONLY individual functions, not the entire app
```

> **Mario Analogy**:
> - **On-Premises** = You build the entire Mushroom Kingdom from scratch
> - **IaaS** = You receive land in the Mushroom Kingdom, build the castle
> - **PaaS** = You receive the castle ready, bring your furniture
> - **SaaS** = You move into the King's castle, everything ready
> - **Serverless** = Magic rooms that appear and disappear as needed

---

## 7. Shared Responsibility Model

### 7.1 What Is Shared Responsibility

The **shared responsibility model** defines who takes care of what between you and the cloud provider.

> **Mario Analogy**: In the Mushroom Kingdom, there are royal guards (provider) and personal guards (you). The royal guards protect the outer walls, but what happens INSIDE your room is your responsibility. If you leave your room door open, it's not the royal guards' fault.

### 7.2 Responsibility Table

| Layer | On-Prem | IaaS | PaaS | SaaS |
|-------|---------|------|------|------|
| **Data and access** | You | You | You | You |
| **Application** | You | You | You | Provider |
| **Identity** | You | Shared | Shared | Shared |
| **Runtime/OS** | You | You | Provider | Provider |
| **Network** | You | Shared | Provider | Provider |
| **Physical infra** | You | Provider | Provider | Provider |

### 7.3 Why This Matters

**You are ALWAYS responsible for:**

1. **Your data** — encryption, classification, retention
2. **Access control** — who can access what
3. **Identity management** — passwords, MFA, roles
4. **Security configuration** — application firewalls, CORS

**Classic mistake**: thinking that "if it's in the cloud, the provider handles everything." NO. The cloud protects the infrastructure, but YOUR application's security is YOUR responsibility.

> **Mario Analogy**: The Mushroom Kingdom can have the best walls in the world, but if Mario leaves the vault door open with a sign reading "Password: 1234", Bowser walks right in.

---

## 8. Deployment Models: Where the Castle Is Located

### 8.1 Public Cloud

Shared infrastructure, accessible via internet, managed by the provider.

> **Mario Analogy**: A condominium in the Mushroom Kingdom. Multiple residents share infrastructure (elevator, reception, pool), but each has their own private apartment.

**Examples**: Azure, AWS, GCP

**Advantages**: Low cost, fast scalability, zero physical maintenance

### 8.2 Private Cloud

Infrastructure dedicated exclusively to one organization.

> **Mario Analogy**: A private castle. Only you and your guests use it. More privacy, more control, more cost.

**Examples**: Azure Stack, VMware Private Cloud

**Advantages**: Total control, strict compliance, sensitive data

### 8.3 Hybrid Cloud

Combination of public and private cloud, connected to each other.

> **Mario Analogy**: Mario lives in his private castle, but uses condominium services (pool, gym). Sensitive data stays in the castle; common applications stay in the condominium.

**Examples**: Azure Arc, AWS Outposts

**Advantages**: Flexibility, gradual migration, best of both worlds

### 8.4 Multi-Cloud

Using more than one public cloud provider simultaneously.

> **Mario Analogy**: Mario has an apartment in the Mushroom Kingdom (Azure) AND in the Star Kingdom (GCP). Uses the best of each kingdom for different needs.

**Advantages**: Avoid vendor lock-in, use the best service from each provider
**Disadvantages**: Management complexity, higher operational cost

---

## 9. Cloud Costs: Mushroom Kingdom Economics

### 9.1 Pay-as-you-go

Pay only for what you use, like a water bill.

```
January usage:  100 hours of VM + 50 GB storage = $25
February usage: 200 hours of VM + 50 GB storage = $45
March usage:    10 hours of VM + 50 GB storage = $8
```

> **Mario Analogy**: Like paying per coin collected. If you collected 100 coins, you pay 100. If you collected 10, you pay 10.

### 9.2 Reserved Instances

Commitment of 1 or 3 years in exchange for a discount (up to 72%).

> **Mario Analogy**: Buying an annual pass for the Mushroom Kingdom instead of paying per day. Cheaper overall, but you commit.

### 9.3 Spot Instances

Using the provider's idle capacity at a very low price (up to 90% discount), but it can be interrupted at any time.

> **Mario Analogy**: Rooms that are empty in the castle. You can use them for almost nothing, but if the original owner returns, you need to leave immediately.

### 9.4 Free Tiers

Free resources to experiment with.

| Azure Service | Free Tier |
|---------------|-----------|
| **App Service** | 10 apps, 1 GB storage |
| **Azure Functions** | 1 million executions/month |
| **Azure SQL** | 100,000 vCPU-seconds/month |
| **Cosmos DB** | 1000 RU/s, 25 GB |
| **Azure DevOps** | 5 users, free pipelines |

---

## 10. Choosing the Right Model

### 10.1 Decision Tree

```
Do you need total control over the OS?
  ├── YES → Need specific hardware?
  │         ├── YES → On-Premises
  │         └── NO → IaaS (Azure VM)
  │
  └── NO → Are you building an application?
            ├── YES → Is it a complete web app/API?
            │         ├── YES → PaaS (App Service)
            │         └── NO → Are they individual event-driven functions?
            │                   ├── YES → Serverless (Azure Functions)
            │                   └── NO → PaaS or Containers (Container Apps)
            │
            └── NO → Do you want to use a ready-made solution?
                      └── YES → SaaS (Microsoft 365, GitHub, etc.)
```

### 10.2 Final Summary Table

| Model | Mario Analogy | You Manage | Provider Manages | Azure Example | Cost | Complexity |
|-------|---------------|-----------|-----------------|---------------|------|------------|
| **On-Prem** | Build the kingdom | EVERYTHING | Nothing | Azure Stack | High | Very high |
| **IaaS** | Empty land | OS, app, data | Physical infra | Azure VM | Medium | High |
| **PaaS** | Ready castle | App, data | Infra + platform | App Service | Medium | Low |
| **SaaS** | Luxury hotel | Configuration | EVERYTHING | Microsoft 365 | Variable | Very low |
| **Serverless** | Magic | Functions | EVERYTHING (even scaling) | Azure Functions | Low* | Medium |

*Low for intermittent use; can be high for constant use.

---

## References

- [Azure — What is cloud computing?](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing/)
- [Azure — Cloud service models](https://learn.microsoft.com/en-us/training/modules/describe-cloud-service-types/)
- [Azure — Shared responsibility model](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility)
- [Azure App Service — Documentation](https://learn.microsoft.com/en-us/azure/app-service/)
- [Azure Functions — Documentation](https://learn.microsoft.com/en-us/azure/azure-functions/)
- [Azure Virtual Machines — Documentation](https://learn.microsoft.com/en-us/azure/virtual-machines/)
- [NIST — Definition of Cloud Computing](https://csrc.nist.gov/publications/detail/sp/800-145/final)
- [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)
- [Azure Free Account](https://azure.microsoft.com/en-us/free/)

---

*Level 4-2 complete! Now you know the difference between building from scratch (IaaS), decorating a ready castle (PaaS), living in a hotel (SaaS), and using magic (Serverless). In the next level, we'll explore Software Architecture — how to design the castle blueprint. Get ready for Level 4-3!*
