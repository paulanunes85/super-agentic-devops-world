---
title: "Level 2-6 -- The Alliance between Classes: DevOps and IaC"
description: "DevOps as the alliance between developers and operations, and Infrastructure as Code with Terraform, Bicep, and ARM Templates to build castles automatically"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - devops
  - iac
  - terraform
  - bicep
  - arm-templates
  - infrastructure-as-code
  - world-2
  - mario
---

# Level 2-6 -- The Alliance between Classes: DevOps and IaC

---

## Change Log

| Version | Date       | Author                                  | Description          |
|---------|------------|----------------------------------------|----------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Initial creation    |

---

## Table of Contents

- [Prologue: The War between Two Guilds](#prologue-the-war-between-two-guilds)
- [1. The Problem: Devs vs Ops](#1-the-problem-devs-vs-ops)
  - [1.1 The World Before DevOps](#11-the-world-before-devops)
  - [1.2 The Wall of Confusion](#12-the-wall-of-confusion)
- [2. DevOps: The Great Alliance](#2-devops-the-great-alliance)
  - [2.1 What is DevOps?](#21-what-is-devops)
  - [2.2 The 3 Pillars: Culture, Automation, Measurement](#22-the-3-pillars-culture-automation-measurement)
  - [2.3 The Infinite Loop of DevOps](#23-the-infinite-loop-of-devops)
- [3. CI/CD: The Hard-Working Lakitus (In-Depth Review)](#3-cicd-the-hard-working-lakitus-in-depth-review)
  - [3.1 Continuous Integration (CI)](#31-continuous-integration-ci)
  - [3.2 Continuous Delivery vs Continuous Deployment](#32-continuous-delivery-vs-continuous-deployment)
  - [3.3 Full Pipeline: From Code to User](#33-full-pipeline-from-code-to-user)
- [4. Infrastructure as Code (IaC): The Magic Blueprints](#4-infrastructure-as-code-iac-the-magic-blueprints)
  - [4.1 The Problem: Building Castles Manually](#41-the-problem-building-castles-manually)
  - [4.2 The Solution: Self-Building Blueprints](#42-the-solution-self-building-blueprints)
  - [4.3 Declarative vs Imperative](#43-declarative-vs-imperative)
- [5. Terraform: The Universal Blueprint Language](#5-terraform-the-universal-blueprint-language)
  - [5.1 What is Terraform?](#51-what-is-terraform)
  - [5.2 HCL: The Language of Blueprints](#52-hcl-the-language-of-blueprints)
  - [5.3 The 4 Fundamental Commands](#53-the-4-fundamental-commands)
  - [5.4 Practical Example: Creating Infrastructure on Azure](#54-practical-example-creating-infrastructure-on-azure)
  - [5.5 State: Terraform's Memory](#55-state-terraforms-memory)
- [6. Bicep: Azure's Native Language](#6-bicep-azures-native-language)
  - [6.1 What is Bicep?](#61-what-is-bicep)
  - [6.2 Bicep vs ARM Templates](#62-bicep-vs-arm-templates)
  - [6.3 Practical Example in Bicep](#63-practical-example-in-bicep)
- [7. ARM Templates: The Original Scrolls](#7-arm-templates-the-original-scrolls)
- [8. Terraform vs Bicep vs ARM: Which One to Choose?](#8-terraform-vs-bicep-vs-arm-which-one-to-choose)
- [9. GitOps: Versioned Infrastructure](#9-gitops-versioned-infrastructure)
- [10. Final Summary Table](#10-final-summary-table)
- [References](#references)

---

## Prologue: The War between Two Guilds

In the Mushroom Kingdom, there were two powerful guilds that could not stand each other.

The **Builders Guild** (Developers -- Devs) was formed by Mario, Luigi, and their companions. They created incredible levels, with colorful blocks, creative enemies, and innovative mechanics. But they did not know (nor did they want to know) how to maintain the servers that hosted those levels.

The **Engineers Guild** (Operations -- Ops) was formed by Yoshi and his colleagues. They kept the servers running, the worlds accessible, and the infrastructure standing. But they did not know (nor did they want to know) how the level code worked.

The result? A predictable disaster.

The Devs created levels that did not work on the Ops' servers. The Ops complained that the Devs wrote impossible code to run. The Devs threw the code over the wall and said: "It works on my machine!" The Ops returned the code and said: "Well, it doesn't work here!"

Until one day, Princess Peach -- tired of the fighting -- decreed: *"Enough with two separate guilds. From today on, you are one: the **DevOps Alliance**. Builders and Engineers working together, from start to finish."*

And that is how DevOps was born in the Mushroom Kingdom.

---

## 1. The Problem: Devs vs Ops

### 1.1 The World Before DevOps

```
Before DevOps:

DEV (Builders)                  OPS (Engineers)
+-------------------+          +-------------------+
| Writes code       |          | Maintains servers |
| Creates features  |  WALL    | Configures networks|
| Tests locally     |  OF      | Does manual deploy|
| "It works on      | CONFUSION| "It doesn't work  |
|  my machine!"     |  |||    |  on the server!"  |
+-------------------+  |||    +-------------------+
                       |||
               The famous "Wall of Confusion"
```

### 1.2 The Wall of Confusion

| What Devs Wanted | What Ops Wanted | The Conflict |
|------------------|-----------------|--------------|
| Ship fast | Stability | Dev wants to change, Ops wants to keep |
| New features | Fewer changes | Each change is risk |
| Freedom | Control | Dev wants to experiment, Ops wants to standardize |
| Fast feedback | Safe process | Dev wants deploy in 5 min, Ops wants 5 approvals |

> **MARIO ANALOGY:** It is like the **level builders** of Mario and the **server engineers** did not talk to each other. The builders create a level with lava and clouds, but the servers cannot handle lava and clouds at the same time. The engineers turn off the clouds without warning, and the players fall into the void. Chaos.

---

## 2. DevOps: The Great Alliance

### 2.1 What is DevOps?

**DevOps** is a **culture** and set of practices that unite development (Dev) and operations (Ops) to deliver software with greater speed, quality, and reliability.

DevOps is NOT:
- A specific tool
- A job title ("DevOps Engineer" is an oversimplification)
- A separate team
- Just automation

DevOps IS:
- A **culture** of collaboration between Dev and Ops
- A set of **practices** (CI/CD, IaC, monitoring)
- A **mindset** of shared responsibility
- An **infinite loop** of continuous improvement

> **MARIO ANALOGY:** DevOps is the **alliance between the Builders Guild (Devs/Mario) and the Engineers Guild (Ops/Yoshi)**. Instead of two separate guilds throwing code over the wall, now it is a single team that builds, tests, launches, monitors, and improves -- together. Mario does not toss the level to Yoshi and walk away. They both build, launch, and take care of the level TOGETHER.

### 2.2 The 3 Pillars: Culture, Automation, Measurement

| Pillar | What It Means | Mario Analogy |
|--------|--------------|---------------|
| **Culture** | Collaboration, trust, shared responsibility | All characters play together, without blaming |
| **Automation** | CI/CD, IaC, automated tests | Lakitus automating repetitive tasks |
| **Measurement** | Metrics, monitoring, feedback | Dashboard showing health of the Mushroom Kingdom |

### Diagram: The DevOps Infinity Loop

```mermaid
graph LR
    PLAN["📋 PLAN<br/><i>Choose your quest</i>"]
    CODE["💻 CODE<br/><i>Write the solution</i>"]
    BUILD["🔨 BUILD<br/><i>Compile & package</i>"]
    TEST["🧪 TEST<br/><i>Verify it works</i>"]

    RELEASE["📦 RELEASE<br/><i>Prepare for launch</i>"]
    DEPLOY["🚀 DEPLOY<br/><i>Ship to castle</i>"]
    OPERATE["🔧 OPERATE<br/><i>Keep it running</i>"]
    MONITOR["📊 MONITOR<br/><i>Watch the kingdom</i>"]

    PLAN --> CODE --> BUILD --> TEST
    TEST --> RELEASE --> DEPLOY --> OPERATE --> MONITOR
    MONITOR --> PLAN

    style PLAN fill:#1976D2,stroke:#0D47A1,color:#fff
    style CODE fill:#388E3C,stroke:#1B5E20,color:#fff
    style BUILD fill:#F57C00,stroke:#E65100,color:#fff
    style TEST fill:#7B1FA2,stroke:#4A148C,color:#fff
    style RELEASE fill:#C2185B,stroke:#880E4F,color:#fff
    style DEPLOY fill:#D32F2F,stroke:#B71C1C,color:#fff
    style OPERATE fill:#00796B,stroke:#004D40,color:#fff
    style MONITOR fill:#455A64,stroke:#263238,color:#fff
```

### 2.3 The Infinite Loop of DevOps

```
        PLAN --> CODE --> BUILD --> TEST
       /                                  \
      /          DEV                       \
LEARN                                      RELEASE
      \          OPS                       /
       \                                  /
        MONITOR <-- OPERATE <-- DEPLOY
```

The cycle NEVER stops. It is an infinite loop of:
1. **Plan** -- Plan what to build
2. **Code** -- Write the code
3. **Build** -- Compile/package
4. **Test** -- Test automatically
5. **Release** -- Prepare for launch
6. **Deploy** -- Put into production
7. **Operate** -- Keep it running
8. **Monitor** -- Observe metrics and behavior
9. **Learn** -- Learn from data and feedback
10. **Back to Plan** with the learnings

> **MARIO ANALOGY:** The DevOps cycle is like the **game design loop**: create the level (Code), compile (Build), test (Test), release to players (Deploy), observe how they play (Monitor), learn what to improve (Learn), and redesign the level (Plan). It is the same infinite loop that made Mario evolve from a simple 1985 game into today's masterpieces.

---

## 3. CI/CD: The Hard-Working Lakitus (In-Depth Review)

### 3.1 Continuous Integration (CI)

**CI** is the practice of integrating code frequently (multiple times per day) and automatically verifying it with tests.

```
Dev makes a commit
    |
    v
GitHub Actions (Lakitu) triggers automatically:
    |
    +---> Downloads the code
    +---> Installs dependencies
    +---> Runs linters (ESLint)
    +---> Compiles TypeScript (TSC)
    +---> Runs tests (Jest)
    +---> Reports result: PASSED or FAILED
```

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npm test
```

### 3.2 Continuous Delivery vs Continuous Deployment

| Aspect | Continuous Delivery | Continuous Deployment |
|--------|--------------------|-----------------------|
| **Meaning** | Code READY for deploy at any time | AUTOMATIC deploy to production |
| **Human approval** | Yes (someone clicks "Deploy") | No (automatic) |
| **Risk** | Lower (human verifies) | Requires excellent tests |
| **Speed** | Fast | As fast as possible |
| **Mario Analogy** | Level ready, waiting for the player to press START | Level automatically published when it is ready |

### 3.3 Full Pipeline: From Code to User

```
CODE --> CI --> STAGING --> APPROVAL --> PRODUCTION
  |        |        |            |            |
  |    Automated  Deploy     Human or     Final
  |    tests      to        automatic     deploy
  |              staging
  |
  v
[Developer pushes]
  |
  v
[CI: lint + build + test] ----FAILED?----> Notifies dev
  |
  PASSED
  |
  v
[Automatic deploy to Staging]
  |
  v
[Integration tests in Staging]
  |
  PASSED
  |
  v
[Approval (manual or automatic)]
  |
  v
[Deploy to Production]
  |
  v
[Continuous monitoring]
```

---

## 4. Infrastructure as Code (IaC): The Magic Blueprints

### 4.1 The Problem: Building Castles Manually

Before IaC, to create infrastructure (servers, databases, networks), someone had to:

1. Open the Azure portal (web console)
2. Click on "Create Resource"
3. Fill out 15 forms
4. Click "Create"
5. Wait
6. Repeat for each resource (server, database, network, DNS...)
7. Pray that no configuration was forgotten
8. Document everything in a Google Docs (that nobody updates)

**Problems:**
- **Not reproducible**: "How did Yoshi configure the staging server again?"
- **Human error**: One wrong click and the production database dies
- **Drift**: Staging and production gradually become different over time
- **No history**: Who changed what, when?
- **Slow**: Creating a new environment takes hours/days

> **MARIO ANALOGY:** Building infrastructure manually is like **Magikoopa building castles brick by brick, by hand**. Each castle turns out different. If you need to rebuild, nobody remembers how it was done. If the castle falls, it takes weeks to redo it.

### 4.2 The Solution: Self-Building Blueprints

**Infrastructure as Code (IaC)** is the practice of defining infrastructure in **code files** (blueprints) that can be versioned, reviewed, and executed automatically.

```
BEFORE (manual):
  Yoshi opens the Azure portal -> clicks 50 times -> prays

AFTER (IaC):
  Yoshi writes a blueprint file -> runs a command -> infrastructure created
  If you need to recreate it: run the same command again -> identical
```

> **MARIO ANALOGY:** IaC is like having a **magic blueprint** that self-builds castles. Instead of stacking bricks by hand, you write in the blueprint: "Castle with 3 towers, 1 drawbridge, 1 treasure room." Cast the spell, and the castle materializes. Need another identical one? Cast it again. The blueprint is versioned in Git -- you know exactly how each castle was built.

### 4.3 Declarative vs Imperative

| Approach | How It Works | Mario Analogy | Example |
|----------|-------------|---------------|---------|
| **Declarative** | "I want a castle with 3 towers" (describes the RESULT) | "I want the castle LIKE THIS" -- magic builds it | Terraform, Bicep, ARM |
| **Imperative** | "First lay the foundation, then raise wall 1, then..." (describes the STEPS) | "Do this, then that, then that other thing" | Bash scripts, Azure CLI |

**Declarative (Terraform):**
```hcl
# "I want a castle with these characteristics"
resource "azurerm_app_service" "todoapp" {
  name                = "meu-todoapp"
  location            = "Brazil South"
  resource_group_name = "meu-grupo"
  # Terraform figures out HOW to create it
}
```

**Imperative (Bash script):**
```bash
# "Do exactly these steps, in this order"
az group create --name meu-grupo --location brazilsouth
az appservice plan create --name meu-plano --resource-group meu-grupo
az webapp create --name meu-todoapp --resource-group meu-grupo --plan meu-plano
```

---

## 5. Terraform: The Universal Blueprint Language

### 5.1 What is Terraform?

**Terraform** is an open-source tool from HashiCorp for Infrastructure as Code. Its superpower: it works with ANY cloud (Azure, AWS, GCP, and 3000+ services).

> **MARIO ANALOGY:** Terraform is the **universal blueprint language** of the Mushroom Kingdom. It works in any kingdom -- if you learn Terraform, you can build castles in the Azure Kingdom, the AWS Kingdom, the GCP Kingdom... with the SAME language. It is like a language that all kingdoms understand.

### 5.2 HCL: The Language of Blueprints

Terraform uses **HCL** (HashiCorp Configuration Language):

```hcl
# main.tf -- The blueprint for our TodoApp

# Define the provider (which kingdom we are building in)
provider "azurerm" {
  features {}
}

# Create the terrain (Resource Group)
resource "azurerm_resource_group" "todoapp" {
  name     = "rg-todoapp-prod"
  location = "Brazil South"
}

# Build the castle plan (App Service Plan)
resource "azurerm_service_plan" "todoapp" {
  name                = "plan-todoapp-prod"
  resource_group_name = azurerm_resource_group.todoapp.name
  location            = azurerm_resource_group.todoapp.location
  os_type             = "Linux"
  sku_name            = "B1"
}

# Build the castle (App Service)
resource "azurerm_linux_web_app" "todoapp" {
  name                = "app-todoapp-prod"
  resource_group_name = azurerm_resource_group.todoapp.name
  location            = azurerm_resource_group.todoapp.location
  service_plan_id     = azurerm_service_plan.todoapp.id

  site_config {
    application_stack {
      node_version = "20-lts"
    }
  }
}

# Build the treasure room (PostgreSQL)
resource "azurerm_postgresql_flexible_server" "todoapp" {
  name                   = "psql-todoapp-prod"
  resource_group_name    = azurerm_resource_group.todoapp.name
  location               = azurerm_resource_group.todoapp.location
  administrator_login    = "dbadmin"
  administrator_password = var.db_password  # Comes from a variable, NEVER hardcoded!
  sku_name               = "B_Standard_B1ms"
  version                = "16"
}
```

### 5.3 The 4 Fundamental Commands

| Command | What It Does | Mario Analogy |
|---------|-------------|---------------|
| `terraform init` | Initializes the project, downloads providers | Loading the game and selecting the world |
| `terraform plan` | Shows what WILL be created/changed (without executing) | Viewing the level map before playing |
| `terraform apply` | Executes the plan and creates the infrastructure | Building the castle for real |
| `terraform destroy` | Destroys all created infrastructure | Demolishing the castle (be careful!) |

```bash
# 1. Initialize
terraform init
# "Loading providers... Azure provider v3.x installed!"

# 2. Plan (see what will happen)
terraform plan
# "Plan: 4 to add, 0 to change, 0 to destroy"
# (Will create: resource group, app service plan, app service, postgresql)

# 3. Apply (build for real)
terraform apply
# "Do you want to perform these actions? yes"
# "Apply complete! Resources: 4 added, 0 changed, 0 destroyed."

# 4. Destroy (when no longer needed)
terraform destroy
# "Plan: 0 to add, 0 to change, 4 to destroy"
```

### 5.4 Practical Example: Creating Infrastructure on Azure

```hcl
# variables.tf -- Variables (configurable values)
variable "environment" {
  description = "Environment (dev, staging, prod)"
  type        = string
  default     = "dev"
}

variable "db_password" {
  description = "Database password"
  type        = string
  sensitive   = true  # Never shown in logs!
}

# main.tf -- Using variables to create different environments
resource "azurerm_resource_group" "todoapp" {
  name     = "rg-todoapp-${var.environment}"
  location = "Brazil South"

  tags = {
    environment = var.environment
    project     = "todoapp"
    managed_by  = "terraform"
  }
}
```

```bash
# Create Dev environment
terraform apply -var="environment=dev" -var="db_password=dev-pass"

# Create Staging environment (same infrastructure, different name!)
terraform apply -var="environment=staging" -var="db_password=stg-pass"

# Create Production environment
terraform apply -var="environment=prod" -var="db_password=prod-pass"
```

> **MARIO ANALOGY:** With Terraform, you write the blueprint ONCE and create as many castles as you want. It is like having a magic stamp: `stamp("dev")` creates the Dev castle. `stamp("staging")` creates the Staging castle. `stamp("prod")` creates the Production castle. SAME blueprint, THREE castles identical in structure but with different configurations.

### 5.5 State: Terraform's Memory

The **state** (terraform.tfstate) is like Terraform's memory -- it remembers what it already created, so it can compare with what you want.

```
Current state (state):  Castle with 3 towers
Desired code:           Castle with 4 towers
Terraform plan:         "I need to add 1 tower"
Terraform apply:        Adds the 4th tower (without destroying the 3 existing ones)
```

---

## 6. Bicep: Azure's Native Language

### 6.1 What is Bicep?

**Bicep** is Microsoft's native IaC language, specific to Azure. It is simpler than ARM Templates and designed to be easy to read.

> **MARIO ANALOGY:** If Terraform is the universal language that works across all kingdoms, Bicep is the **native language of the Azure Kingdom** -- simpler, more direct, optimized for those who only build on Azure.

### 6.2 Bicep vs ARM Templates

| Aspect | ARM Templates | Bicep |
|--------|--------------|-------|
| **Format** | JSON (verbose) | Custom language (concise) |
| **Readability** | Difficult | Easy |
| **Lines of code** | Many | Few |
| **Mario Analogy** | Ancient scrolls full of details | Modern, clean blueprint |

### 6.3 Practical Example in Bicep

```bicep
// main.bicep -- TodoApp Blueprint in Bicep

param environment string = 'dev'
param location string = 'brazilsouth'

// Terrain (Resource Group already exists, Bicep creates resources within it)

// Castle plan
resource appServicePlan 'Microsoft.Web/serverfarms@2023-01-01' = {
  name: 'plan-todoapp-${environment}'
  location: location
  sku: {
    name: 'B1'
  }
  kind: 'linux'
  properties: {
    reserved: true
  }
}

// The castle (App Service)
resource webApp 'Microsoft.Web/sites@2023-01-01' = {
  name: 'app-todoapp-${environment}'
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: 'NODE|20-lts'
    }
  }
}

// Output: Castle URL
output appUrl string = 'https://${webApp.properties.defaultHostName}'
```

```bash
# Deploy with Bicep
az deployment group create \
  --resource-group rg-todoapp-dev \
  --template-file main.bicep \
  --parameters environment=dev
```

---

## 7. ARM Templates: The Original Scrolls

**ARM Templates** (Azure Resource Manager) are Microsoft's original IaC format. Written in JSON, they are verbose but powerful.

```json
{
  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "environment": {
      "type": "string",
      "defaultValue": "dev"
    }
  },
  "resources": [
    {
      "type": "Microsoft.Web/serverfarms",
      "apiVersion": "2023-01-01",
      "name": "[concat('plan-todoapp-', parameters('environment'))]",
      "location": "[resourceGroup().location]",
      "sku": { "name": "B1" },
      "kind": "linux",
      "properties": { "reserved": true }
    }
  ]
}
```

> **MARIO ANALOGY:** ARM Templates are like the **ancient scrolls** of the Mushroom Kingdom. They work perfectly, but they are long, full of details, and hard to read. Bicep is the modern, simplified version of those scrolls.

---

## 8. Terraform vs Bicep vs ARM: Which One to Choose?

| Aspect | Terraform | Bicep | ARM Templates |
|--------|-----------|-------|---------------|
| **Multi-cloud** | Yes (Azure, AWS, GCP) | No (Azure only) | No (Azure only) |
| **Language** | HCL | Bicep | JSON |
| **Readability** | Good | Great | Poor |
| **Learning curve** | Medium | Easy | Difficult |
| **Ecosystem** | Enormous (3000+ providers) | Azure complete | Azure complete |
| **State** | Requires management | Managed by Azure | Managed by Azure |
| **Community** | Huge | Growing | Stable |
| **Mario Analogy** | Universal language for all kingdoms | Native language of the Azure Kingdom | Ancient scrolls of Azure |

**Recommendation for beginners:**
- **Azure only?** Start with **Bicep** -- simpler, well integrated
- **Multi-cloud?** Learn **Terraform** -- universally useful
- **ARM Templates?** Only if you NEED them (legacy, specific tools)

---

## 9. GitOps: Versioned Infrastructure

**GitOps** is the practice of using Git as the source of truth for infrastructure. Every infra change goes through PR, review, and approval -- just like code.

```
GitOps Flow:

1. Dev creates branch: feature/add-redis
2. Dev writes Terraform/Bicep to add Redis
3. Dev opens PR with the changes
4. Reviewer analyzes the terraform plan
5. PR approved and merged
6. Pipeline automatically applies the changes
7. Infrastructure updated!

Benefits:
- Complete history (who changed what, when)
- Code Review for infrastructure
- Easy rollback (git revert)
- Reproducible environments
```

> **MARIO ANALOGY:** GitOps is like having an **official record book** of all constructions in the Mushroom Kingdom. Want to add a tower to the castle? Write the proposal, submit for review, the council approves, and only then is the tower built. Everything documented, everything traceable, everything reversible.

---

## 10. Final Summary Table

| Concept | Technical Explanation | Mario Analogy |
|---------|----------------------|---------------|
| **DevOps** | Culture + practices uniting Dev and Ops | Alliance between Builders (Devs) and Engineers (Ops) |
| **CI** | Continuous Integration -- automated tests on every commit | Lakitu testing every brick automatically |
| **CD** | Continuous Delivery/Deployment -- code always ready for production | Castle always ready to open its doors |
| **IaC** | Infrastructure defined in code | Magic blueprints that self-build castles |
| **Terraform** | Multi-cloud IaC tool | Universal blueprint language |
| **Bicep** | Azure-native IaC language | Native language of the Azure Kingdom |
| **ARM Templates** | Azure's original IaC format (JSON) | Ancient scrolls of the kingdom |
| **State** | Memory of what Terraform already created | Terraform remembers which castles it built |
| **GitOps** | Git as the source of truth for infra | Official record book of constructions |
| **Declarative** | Describes WHAT you want | "I want a castle with 3 towers" |
| **Imperative** | Describes HOW to do it | "Place brick A, then B, then C" |
| **Pipeline** | Automated sequence of steps | Castle assembly line |
| **DevOps Cycle** | Plan-Code-Build-Test-Release-Deploy-Operate-Monitor | Infinite loop of building, launching, and improving |

---

## References

1. Microsoft Learn -- What is DevOps: https://learn.microsoft.com/devops/what-is-devops
2. Terraform Documentation: https://developer.hashicorp.com/terraform/docs
3. Azure Bicep Documentation: https://learn.microsoft.com/azure/azure-resource-manager/bicep/
4. ARM Templates: https://learn.microsoft.com/azure/azure-resource-manager/templates/
5. The Phoenix Project (book about DevOps): https://itrevolution.com/the-phoenix-project/
6. DORA Metrics: https://dora.dev/
7. GitOps Principles: https://opengitops.dev/

---

*"The greatest revolution in the Mushroom Kingdom was not a new power-up or a new weapon. It was when Builders and Engineers stopped fighting and started working together. DevOps is not a tool -- it is an alliance. And IaC is the magic that lets this alliance build castles in minutes, not months."*

*Next Warp Pipe: Level 2-7 -- The Character's Senses: Observability*

---

<div align="center">

⬅️ [Previous: Level 2-5: Methodologies](2-5-metodologias.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 2-7: Observability](2-7-observabilidade.md)

</div>
