---
title: "Level 7-1 — Magikoopa's Forge: Azure AI Foundry"
description: "Azure AI Foundry: Model Catalog, Prompt Flow, Evaluation and Deployment with Mario analogies"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-7", "ai-foundry", "azure-ai"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-03-18 | Paula Silva | Initial version — Super Mario Bros Edition |

# Level 7-1 — Magikoopa's Forge: Azure AI Foundry

---

**Prepared for:** Sofia
**Version:** 2.0 (Mushroom Kingdom Edition)
**Author:** Paula Silva | Software Global Black Belt, Microsoft Americas
**Date:** March 2026
**Language:** English (translated from pt-BR)
**Collection:** Agentic DevOps — World 7: Star World (AI Frameworks)

---

## TABLE OF CONTENTS

- [Prologue: Entering Magikoopa's Forge](#prologue-entering-magikoopas-forge)
- [1. What is Azure AI Foundry?](#1-what-is-azure-ai-foundry)
  - [1.1 From Azure AI Studio to Azure AI Foundry](#11-from-azure-ai-studio-to-azure-ai-foundry)
  - [1.2 Why a Forge?](#12-why-a-forge)
  - [1.3 The Mario Analogy: Magikoopa's Laboratory](#13-the-mario-analogy-magikoopas-laboratory)
- [2. The Components of the Forge](#2-the-components-of-the-forge)
  - [2.1 Model Catalog — The Spell Book Shelf](#21-model-catalog--the-spell-book-shelf)
  - [2.2 Prompt Flow — The Enchantment Recipe](#22-prompt-flow--the-enchantment-recipe)
  - [2.3 Evaluation — The Testing Arena](#23-evaluation--the-testing-arena)
  - [2.4 Deployment — To the Battlefield](#24-deployment--to-the-battlefield)
  - [2.5 Complete Table: Forge Components](#25-complete-table-forge-components)
- [3. Available Models: The Spell Arsenal](#3-available-models-the-spell-arsenal)
  - [3.1 OpenAI Models (GPT)](#31-openai-models-gpt)
  - [3.2 Open-Source and Partner Models](#32-open-source-and-partner-models)
  - [3.3 Model Table: Which Spell to Choose?](#33-model-table-which-spell-to-choose)
- [4. Prompt Flow: The Enchantment Recipe in Detail](#4-prompt-flow-the-enchantment-recipe-in-detail)
  - [4.1 What is a Flow?](#41-what-is-a-flow)
  - [4.2 Types of Nodes](#42-types-of-nodes)
  - [4.3 Visual Example: Customer Service Flow](#43-visual-example-customer-service-flow)
  - [4.4 The Mario Analogy: Building a Potion Recipe](#44-the-mario-analogy-building-a-potion-recipe)
- [5. Fine-Tuning: Modifying Spells for Your Enemies](#5-fine-tuning-modifying-spells-for-your-enemies)
  - [5.1 What is Fine-Tuning?](#51-what-is-fine-tuning)
  - [5.2 When to Use Fine-Tuning?](#52-when-to-use-fine-tuning)
  - [5.3 The Fine-Tuning Process](#53-the-fine-tuning-process)
  - [5.4 The Mario Analogy: Customizing the Spell](#54-the-mario-analogy-customizing-the-spell)
- [6. RAG in Azure AI Foundry](#6-rag-in-azure-ai-foundry)
  - [6.1 Integration with Azure AI Search](#61-integration-with-azure-ai-search)
  - [6.2 Adding Your Data to the Model](#62-adding-your-data-to-the-model)
  - [6.3 The Mario Analogy: Giving the Wizard a Library](#63-the-mario-analogy-giving-the-wizard-a-library)
- [7. Security and Responsible AI](#7-security-and-responsible-ai)
  - [7.1 Content Safety](#71-content-safety)
  - [7.2 Responsible AI Dashboard](#72-responsible-ai-dashboard)
  - [7.3 The Mario Analogy: The Rules of the Forge](#73-the-mario-analogy-the-rules-of-the-forge)
- [8. Hands-On: Creating a Simple Chatbot in AI Foundry](#8-hands-on-creating-a-simple-chatbot-in-ai-foundry)
  - [8.1 Complete Step by Step](#81-complete-step-by-step)
  - [8.2 Testing Your Chatbot](#82-testing-your-chatbot)
  - [8.3 Publishing Your Chatbot](#83-publishing-your-chatbot)
- [9. Final Table: Component / Function / Mario Analogy](#9-final-table-component--function--mario-analogy)

---

## Prologue: Entering Magikoopa's Forge

Sofia had traversed entire worlds. She defeated Goombas in World 1, navigated treacherous waters in World 2, flew over clouds in World 3, and faced dark castles in World 4. Now, arriving at the **Star World** — the legendary World 7 — she realized the rules were changing. The levels here were not like the previous ones. They were more complex, more powerful, more... magical.

At the center of Star World stood an imposing structure made of dark bricks and shining crystals: **Magikoopa's Forge**. Multicolored sparks flew from the chimneys, and inside you could hear the sound of rhythmic hammering — as if someone were creating something powerful.

Magikoopa — the most feared wizard of the Mushroom Kingdom — was not merely an enemy. He was a **spell artisan**. Inside his Forge, he created devastating spells, tested experimental enchantments, and refined potions to perfection. It was a complete laboratory: shelves of spell books, a testing workbench, bubbling cauldrons, and a portal for sending his creations to the battlefield.

Sofia pushed open the heavy metal door and entered. *"Welcome to my Forge,"* said a deep voice. *"Here, we don't just use magic — we CREATE it. Are you ready to learn the art of forging artificial intelligence?"*

This chapter is your entry into **Magikoopa's Forge** — Azure AI Foundry. Here, you will learn to choose base spells, combine them into powerful recipes, test them in controlled arenas, and send them to the battlefield. Let's begin.

---

## 1. What is Azure AI Foundry?

Azure AI Foundry is Microsoft's **unified platform for creating, testing, evaluating, and deploying artificial intelligence solutions**. Think of it as a complete laboratory where you can:

- **Choose** an AI model (GPT-4o, Claude, Llama, Phi, Mistral, and many others)
- **Configure** that model with your own data and instructions
- **Test** the model in real-world scenarios before launching
- **Evaluate** the quality of responses with objective metrics
- **Deploy** the model as a production-ready API
- **Monitor** performance after launch

It is essentially a **complete development environment for AI** — from the initial idea to production.

### 1.1 From Azure AI Studio to Azure AI Foundry

If you've already heard of "Azure AI Studio," know that it **evolved and was renamed** to Azure AI Foundry. The change was not just in name — the Foundry brought:

- A more intuitive and modern interface
- Better integration with the Azure ecosystem
- Expanded support for third-party models
- More robust evaluation tools
- Enhanced Prompt Flow
- Unified SDK (azure-ai-projects)

> Think of it this way: Azure AI Studio was like Magikoopa's old workshop — functional, but with limited tools. Azure AI Foundry is the **modern forge** — with state-of-the-art equipment, more space, more power.

### 1.2 Why a Forge?

The name "Foundry" (forge) is no accident. In a medieval forge, you:

1. **Choose the raw metal** (the base model)
2. **Heat and shape** (configure with prompts and data)
3. **Test the resistance** (evaluate quality and safety)
4. **Temper and refine** (fine-tuning and optimization)
5. **Send to the knight** (deploy to production)

Azure AI Foundry follows exactly this flow. You enter with a raw idea and come out with an AI solution ready for the real world.

### 1.3 The Mario Analogy: Magikoopa's Laboratory

Imagine Magikoopa's laboratory, the wizard of the Mushroom Kingdom:

| Forge Element | In Magikoopa's Laboratory | In Azure AI Foundry |
|---|---|---|
| **The Forge itself** | Magikoopa's complete laboratory | The Azure AI Foundry platform |
| **Book shelf** | Spell books of all types | Model Catalog |
| **Workbench** | Where Magikoopa mixes ingredients | Prompt Flow (visual workflow) |
| **Testing arena** | Training dummies to test spells | Evaluation (model assessment) |
| **Delivery portal** | Magic portal that sends weapons to the battlefield | Deployment |
| **Rule book** | Forge safety rules | Responsible AI |
| **Cauldrons** | Where spells are refined | Fine-tuning |

**Magikoopa doesn't use generic spells.** He chooses the right spell for each enemy, adjusts the power, tests on training dummies, and only then sends it to the battlefield. This is exactly what you will do in Azure AI Foundry.

---

## 2. The Components of the Forge

Azure AI Foundry is composed of several components that work together. Let's get to know each one.

### 2.1 Model Catalog — The Spell Book Shelf

The **Model Catalog** is the first place you visit when entering the Forge. It contains **hundreds of AI models** organized by type, capability, and provider. It's like a giant library of spell books, where each book contains a different type of magic.

**What you'll find in the Model Catalog:**

- **Language models** (LLMs): GPT-4o, GPT-4, Claude, Llama, Phi, Mistral
- **Vision models**: GPT-4o (multimodal), Florence
- **Embedding models**: text-embedding-ada, Cohere Embed
- **Speech models**: Whisper, Azure Speech
- **Specialized models**: models for code, medicine, finance

**How it works:**

1. You access the Model Catalog in the Azure AI Foundry portal
2. Filter by task (chat, completions, embeddings, vision)
3. Compare models side by side (price, speed, quality)
4. Select the ideal model for your needs
5. Deploy with a single click

> In Magikoopa's language: you enter the Forge library, browse the "Fire Spells" shelf, compare "Basic Fireball" with "Devastating Inferno," and choose the one that best fits your mission.

### 2.2 Prompt Flow — The Enchantment Recipe

**Prompt Flow** is the most powerful and creative component of the Forge. It allows you to create **visual workflows** that chain AI operations — like a potion recipe with multiple steps.

**What you can do with Prompt Flow:**

- Create chatbots with complex logic
- Process documents automatically
- Classify and route customer questions
- Combine multiple models in a single pipeline
- Integrate with external APIs and databases

**How it works visually:**

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐     ┌──────────────┐
│    INPUT    │────>│   PROCESS    │────>│  AI MODEL   │────>│   OUTPUT     │
│  (question) │     │  (prepare)   │     │  (respond)  │     │  (response)  │
└─────────────┘     └──────────────┘     └─────────────┘     └──────────────┘
```

Each box is a **node** in the flow. You drag, connect, configure — and just like that, you have a working AI pipeline.

> In Magikoopa's language: Prompt Flow is the **enchantment recipe**. Step 1: gather ingredients (input). Step 2: mix in the correct order (processing). Step 3: cast the spell (AI model). Step 4: the enchantment manifests (output). If you get the order or ingredients wrong, the spell fails!

### 2.3 Evaluation — The Testing Arena

Before sending any spell to the battlefield, Magikoopa tests it on **training dummies**. In Azure AI Foundry, **Evaluation** serves exactly this purpose.

**What you can evaluate:**

- **Relevance**: Is the response relevant to the question?
- **Coherence**: Does the response make logical sense?
- **Fluency**: Is the response well written?
- **Groundedness**: Is the response based on the provided data?
- **Similarity**: Does the response resemble the expected answer?
- **Safety**: Is the response safe and appropriate?

**How it works:**

1. You create a **test dataset** (questions + expected answers)
2. Run your model/flow against this dataset
3. The Foundry calculates metrics automatically
4. You see a **dashboard** with scores for each metric
5. Compare model versions side by side

> In Magikoopa's language: you place **training dummies** (dataset) in the arena, cast your spells (model), and measure the impact. Did the dummy fall? Great, the spell worked. Did the dummy stay standing? Weak spell, needs adjustment. Did the spell hit the wrong dummy? Aiming problem (relevance).

### 2.4 Deployment — To the Battlefield

After your model is tested and approved, it's time to send it to the **battlefield** — that is, put it into production so that real applications can use it.

**Deployment options:**

- **Managed Online Endpoint**: Azure hosts everything for you (simplest)
- **Serverless API**: Pay only for usage, no infrastructure management
- **Container Deployment**: For those who need full control
- **Provisioned Throughput**: Reserved capacity for high demand

**What you get after deployment:**

- An **API URL** (endpoint) that any application can call
- **Access keys** (API keys) for authentication
- **Monitoring dashboard** with usage metrics
- **Version control** to update the model without downtime

> In Magikoopa's language: deployment is like **opening a magic portal** between the Forge and the battlefield. Your allies (applications) send requests through the portal ("I need a spell against this Goomba!"), and the spell arrives instantly. The portal has a guardian (API key) that only lets authorized allies through.

### 2.5 Complete Table: Forge Components

| Component | What It Does | Mario Analogy | When to Use |
|---|---|---|---|
| **Model Catalog** | Catalog with hundreds of available AI models | Shelf of spell books in Magikoopa's library | When you need to choose which model to use |
| **Prompt Flow** | Visual editor for creating AI pipelines | The enchantment recipe — ingredients, order, execution | When you need to create complex multi-step flows |
| **Evaluation** | Automatic quality assessment of responses | Testing arena with training dummies | When you need to measure if the model is good enough |
| **Deployment** | Deploy the model as a production API | Magic portal that sends spells to the battlefield | When the model is ready to be used by real applications |
| **Fine-tuning** | Customization of a base model with your data | Modifying a spell to be effective against a specific enemy | When the base model isn't specific enough |
| **Content Safety** | Safety filters for generated content | Forge rules that prevent forbidden spells | Always — safety is not optional |
| **Monitoring** | Post-deployment monitoring of usage and quality | Crystal ball showing how spells are performing in the field | After deployment, to ensure everything works well |
| **Playground** | Interactive environment for quickly testing models | Magikoopa's quick experiment table | When you want to test a model before creating a full flow |

---

## 3. Available Models: The Spell Arsenal

One of the great strengths of Azure AI Foundry is that it's not limited to Microsoft or OpenAI models. It offers a **diverse catalog** of models from different providers — like a shelf of spells from different schools of magic.

### 3.1 OpenAI Models (GPT)

The GPT models are the **most well-known and popular spells** in the arsenal:

**GPT-4o (the "o" stands for "omni")**
- The most versatile: understands text, images, audio, and video
- Extremely fast and intelligent
- Ideal for chatbots, image analysis, multimodal processing
- Mario analogy: the **Star Power** — does everything, shines in any situation

**GPT-4**
- Complex and deep reasoning
- Best for tasks requiring logic and detailed analysis
- Ideal for code, math, legal reasoning
- Mario analogy: the **Cape Feather** — flies high, sees everything from above, analyzes the complete scenario

**GPT-4o-mini**
- Lightweight and economical version of GPT-4o
- 90% of the quality for 20% of the cost
- Ideal for simple high-volume tasks
- Mario analogy: the **Mini Mushroom** — small but surprisingly efficient

### 3.2 Open-Source and Partner Models

The Foundry also offers third-party models:

**Claude (Anthropic)**
- Excellent at long conversations and document analysis
- Strong with detailed and nuanced instructions
- Mario analogy: **Luigi** — different from the main character, but equally capable, sometimes even better in certain levels

**Llama (Meta)**
- Open-source — you can see and modify the code
- Options in different sizes (8B, 70B, 405B parameters)
- Ideal for those who want full control
- Mario analogy: **Yoshi** — versatile, customizable, can "swallow" different abilities

**Phi (Microsoft)**
- Small models with surprising performance
- Excellent cost-benefit for specific tasks
- Can run on modest hardware
- Mario analogy: **Toad** — small but incredibly fast and efficient

**Mistral**
- European models with excellent multilingual performance
- Compact and efficient options
- Mario analogy: **Allied Koopa Troopa** — unexpectedly powerful for its size

### 3.3 Model Table: Which Spell to Choose?

| Model | Provider | Main Strength | Relative Cost | Mario Analogy | Best For |
|---|---|---|---|---|---|
| **GPT-4o** | OpenAI | Multimodal, versatile | High | Star Power | Advanced chatbots, multimedia analysis |
| **GPT-4o-mini** | OpenAI | Cost-benefit | Low | Mini Mushroom | High volume, simple tasks |
| **GPT-4** | OpenAI | Deep reasoning | Very High | Cape Feather | Complex logic, code, math |
| **Claude** | Anthropic | Long conversations, analysis | High | Luigi | Extensive documents, detailed instructions |
| **Llama 3** | Meta | Open-source, flexible | Variable | Yoshi | Full customization, self-hosting |
| **Phi-4** | Microsoft | Compact, efficient | Very Low | Toad | Edge devices, specific tasks |
| **Mistral Large** | Mistral AI | Multilingual, European | Medium | Allied Koopa | Multilingual applications |

**Golden rule for choosing:** Start with the cheapest model that meets your needs. If it's not enough, move up to the next level. Don't use GPT-4 to answer "What is the capital of France?" — that would be like using a Star Power to defeat a single Goomba.

---

## 4. Prompt Flow: The Enchantment Recipe in Detail

Prompt Flow deserves a dedicated section because it's the most creative and powerful component of the Forge.

### 4.1 What is a Flow?

A Flow is a **sequence of connected operations** that process input data and produce an output. Each operation is called a **node**, and nodes are connected by **edges** that define the execution order.

Available Flow types:

- **Standard Flow**: Generic flow for any AI pipeline
- **Chat Flow**: Optimized for conversations with history
- **Evaluation Flow**: For evaluating the quality of another flow

### 4.2 Types of Nodes

Each node in Prompt Flow performs a specific operation:

| Node Type | What It Does | Mario Analogy | Example |
|---|---|---|---|
| **LLM** | Calls a language model | Casting the spell | "Answer this question: ..." |
| **Python** | Executes Python code | Mixing ingredients by hand | Process text, calculate, filter |
| **Prompt** | Prompt template with variables | Base enchantment recipe | "You are an assistant that {behavior}" |
| **Embedding** | Converts text to numerical vectors | Translating the spell to magical language | Transform a question into an embedding |
| **Index Lookup** | Searches a vector database | Looking in the library for the right book | Search for relevant documents |
| **Content Safety** | Checks content safety | Forge guardian checking the spell | Block inappropriate content |

### 4.3 Visual Example: Customer Service Flow

Let's build a simple flow that answers customer questions about a product:

```
                    ┌──────────────────────────────────────────────────┐
                    │           FLOW: Customer Service                  │
                    └──────────────────────────────────────────────────┘

┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│    INPUT     │    │   CLASSIFY   │    │    SEARCH    │    │   GENERATE   │
│              │    │              │    │              │    │              │
│  Customer    │───>│ Python: is   │───>│ Index Lookup:│───>│ LLM: generate│
│  question    │    │ it technical │    │ search       │    │ response with│
│              │    │ or sales?    │    │ relevant docs│    │ context      │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
                           │                                       │
                           │                                       v
                           │                               ┌──────────────┐
                           │                               │    OUTPUT    │
                           │                               │              │
                           └──────────────────────────────>│  Formatted   │
                             (if simple question,          │  response    │
                              answer directly)             │  for customer│
                                                           └──────────────┘
```

**Flow step by step:**

1. **Input**: The customer sends "How do I reset my password?"
2. **Classify** (Python node): The code analyzes the question and classifies it as "technical support"
3. **Search** (Index Lookup node): Searches the product manuals for sections about password reset
4. **Generate** (LLM node): Sends to GPT-4o: "Based on this manual [context], answer: How to reset the password?"
5. **Output**: "To reset your password, go to Settings > Security > Change Password..."

### 4.4 The Mario Analogy: Building a Potion Recipe

Imagine Magikoopa needs to create an **Invincibility Potion** (equivalent to Star Power):

```
INVINCIBILITY POTION RECIPE (Magikoopa's Prompt Flow)
=====================================================

Step 1: GATHER INGREDIENTS (Input node)
   → Golden Mushroom + Star Water + Rainbow Dust

Step 2: CLASSIFY INGREDIENTS (Python node)
   → Check quality: "Is this mushroom fresh?"
   → If bad, discard and get another

Step 3: MIX IN THE RIGHT ORDER (LLM node)
   → First the dust, then the water, lastly the mushroom
   → Stir 3 times clockwise

Step 4: TEST THE POTION (Content Safety node)
   → Give a drop to a test dummy
   → Did the dummy become invincible? Yes → continue
   → Did the dummy explode? No → adjust recipe

Step 5: BOTTLE IT (Output node)
   → Potion ready for use on the battlefield!
```

**The moral**: just as a potion needs ingredients in the right order, a Prompt Flow needs nodes in the right sequence. If Magikoopa adds the mushroom before the water, the potion fails. If you put the LLM before searching for context, the response will be generic and imprecise.

---

## 5. Fine-Tuning: Modifying Spells for Your Enemies

### 5.1 What is Fine-Tuning?

Fine-tuning is the process of **taking a pre-trained model and adjusting it with your own data** so that it becomes a specialist in a specific domain. The base model already knows a lot (it was trained on billions of texts), but with fine-tuning it learns the specifics of YOUR business.

**Without fine-tuning:**
- "What is an invoice?" → Generic Wikipedia-style answer

**With fine-tuning (your company's data):**
- "What is an invoice?" → "In our company, invoices are issued through the SAP system, type NF-e, following process X..."

### 5.2 When to Use Fine-Tuning?

| Situation | Fine-Tuning? | Alternative | Why |
|---|---|---|---|
| Answers about your specific domain | Maybe | RAG | RAG is simpler and more flexible in most cases |
| Very specific output format | Yes | - | Fine-tuning teaches the model to format as you want |
| Specific technical vocabulary | Yes | - | The model learns your jargon |
| Cost reduction (shorter prompts) | Yes | - | Model already "knows" the context, needs fewer instructions |
| Data changes frequently | No | RAG | Fine-tuning is expensive to retrain; RAG updates easily |
| Generic task (summarize, translate) | No | Prompt Engineering | Base models already do this well |

### 5.3 The Fine-Tuning Process

```
FINE-TUNING PROCESS IN AZURE AI FOUNDRY
========================================

1. PREPARE DATA
   ┌────────────────────────────────────┐
   │  JSONL format:                      │
   │  {"prompt": "question", "completion": "answer"} │
   │  {"prompt": "question", "completion": "answer"} │
   │  ... (minimum ~50 examples, ideal 500+)         │
   └────────────────────────────────────┘

2. CHOOSE BASE MODEL
   → GPT-4o-mini (cheaper for fine-tuning)
   → GPT-4o (more expensive, more capable)

3. CONFIGURE TRAINING
   → Number of epochs (how many times the model sees the data)
   → Learning rate (learning speed)
   → Batch size (how many examples at a time)

4. TRAIN
   → The Foundry trains the model on your data
   → Can take from minutes to hours
   → You follow progress in real time

5. EVALUATE
   → Test the fine-tuned model vs the base model
   → Compare quality metrics
   → Verify if it improved in your domain

6. DEPLOY
   → Deploy the custom model as an API
```

### 5.4 The Mario Analogy: Customizing the Spell

Imagine Magikoopa has a generic **Fireball** spell. It works against all enemies but isn't especially effective against any in particular.

**Generic spell (base model):**
- Against Goombas: deals 5 damage (out of 10)
- Against Koopa Troopas: deals 5 damage (out of 10)
- Against Boo (ghosts): deals 5 damage (out of 10)

Now, Magikoopa decides to **customize the spell for ghosts** (fine-tuning):

1. **Gathers data**: Collects 500 records of battles against ghosts
2. **Studies the patterns**: "Ghosts are vulnerable to concentrated light and heat"
3. **Modifies the spell**: Adjusts the flame frequency, adds a luminous component
4. **Tests in the arena**: Casts against ghost dummies

**Customized spell (fine-tuned model):**
- Against Goombas: deals 4 damage (slightly worse)
- Against Koopa Troopas: deals 4 damage (slightly worse)
- Against Boo (ghosts): deals **9** damage (almost perfect!)

**The lesson**: fine-tuning **specializes** the model. It gets better at what you trained it on, but may lose some generality. Choose wisely when to specialize.

---

## 6. RAG in Azure AI Foundry

RAG (Retrieval-Augmented Generation) is one of the most powerful features of Azure AI Foundry. You'll learn RAG in depth in Level 7-2, but here's a preview of how it works INSIDE the Forge.

### 6.1 Integration with Azure AI Search

Azure AI Foundry integrates natively with **Azure AI Search** — an intelligent search service that functions as the Forge's **Magic Library**.

**How the integration works:**

1. You upload your documents (PDFs, Word, websites, databases)
2. AI Search breaks them into chunks, converts to embeddings, and indexes them
3. In Prompt Flow, you add an **Index Lookup** node
4. When a question arrives, the node searches for relevant documents
5. The LLM receives the question + documents and generates a grounded response

### 6.2 Adding Your Data to the Model

In Azure AI Foundry, you can add data to the model in three ways:

**1. On Your Data (in the Playground):**
- The simplest approach
- You upload files in the Playground
- The Foundry automatically creates a search index
- The model starts answering based on your documents

**2. Via Prompt Flow:**
- More control and flexibility
- You create search nodes and combine with LLM nodes
- Can customize how the search works
- Ideal for production pipelines

**3. Via SDK/API:**
- Full programmatic control
- Integrates with your existing code
- For advanced developers

### 6.3 The Mario Analogy: Giving the Wizard a Library

**Magikoopa WITHOUT RAG:**
- Student asks: "What is Bowser Jr's weakness in this level?"
- Magikoopa answers: "Hmm... enemies are generally weak to fire..." (generic, possibly wrong)

**Magikoopa WITH RAG (integrated with the Forge library):**
- Student asks: "What is Bowser Jr's weakness in this level?"
- Magikoopa opens the library, finds the "Level 7-1 Manual"
- Reads: "Bowser Jr in this level is vulnerable to ice balls on the third jump"
- Answers: "Bowser Jr's weakness in this level is ice balls, specifically on the third jump" (precise and grounded!)

---

## 7. Security and Responsible AI

### 7.1 Content Safety

Azure AI Foundry includes a robust **Content Safety** system that acts as a **Forge guardian**. It automatically filters:

- **Violent or hateful content**: Blocks responses that promote violence
- **Sexual content**: Filters inappropriate material
- **Self-harm**: Prevents content that encourages self-harm
- **Jailbreak attacks**: Detects attempts to bypass model rules

**Filtering levels:**

| Level | Strictness | Mario Analogy | When to Use |
|---|---|---|---|
| **Low** | Filters only the most severe | Open gate — almost everything passes | Internal applications, adults |
| **Medium** | Balanced filtering | Gate with guardian — checks before | Most applications |
| **High** | Strict filtering | Gate with Thwomp — blocks almost everything | Applications for children, regulated sectors |
| **Custom** | You define the rules | You build your own gate | Specific needs |

### 7.2 Responsible AI Dashboard

Azure AI Foundry offers a **Responsible AI dashboard** that monitors:

- **Fairness**: Does the model treat all groups equally?
- **Reliability**: Is the model consistent in its responses?
- **Privacy**: Does the model protect sensitive data?
- **Inclusiveness**: Does the model work well for all users?
- **Transparency**: Are the model's decisions explainable?
- **Accountability**: Is there traceability of the model's actions?

### 7.3 The Mario Analogy: The Rules of the Forge

Every forge has **safety rules**. Magikoopa's Forge is no different:

```
MAGIKOOPA'S FORGE RULES (Responsible AI)
==========================================

Rule 1: NO FORBIDDEN SPELLS
   → Weapons of mass destruction spells are not allowed
   → (Content Safety: blocks harmful content)

Rule 2: SPELLS MUST BE FAIR
   → A spell cannot work only against one type of enemy due to bias
   → (Fairness: model treats everyone equally)

Rule 3: SPELLS MUST BE RELIABLE
   → If a spell works today, it must work tomorrow
   → (Reliability: consistency in responses)

Rule 4: SPELLS DON'T REVEAL SECRETS
   → No spell can expose personal information of allies
   → (Privacy: data protection)

Rule 5: SPELLS ARE TRACKED
   → Every spell use is recorded in the Forge's ledger
   → (Accountability: traceability)

Rule 6: MAGIKOOPA EXPLAINS HIS SPELLS
   → If someone asks "why did this spell do that?", there must be an answer
   → (Transparency: explainability)
```

**The moral**: powerful AI comes with great responsibility. It's not enough to create a model that works — it needs to be safe, fair, and transparent. A powerful but irresponsible Magikoopa is a danger to the entire Mushroom Kingdom.

---

## 8. Hands-On: Creating a Simple Chatbot in AI Foundry

Now let's get hands-on! We'll create a simple chatbot in Azure AI Foundry, step by step.

### 8.1 Complete Step by Step

**Prerequisites:**
- Active Azure account (you can create a free account at azure.microsoft.com)
- Access to Azure AI Foundry (ai.azure.com)

**Step 1: Create a Project in Azure AI Foundry**

```
1. Go to https://ai.azure.com
2. Click "Create a project"
3. Fill in:
   - Name: "my-first-chatbot"
   - Resource Group: create a new one or select existing
   - Region: East US 2 (or the closest to you)
4. Click "Create"
5. Wait for creation (may take 1-2 minutes)
```

> Mario analogy: you just opened your own Forge within the Mushroom Kingdom. Now you have a workbench ready to create spells!

**Step 2: Access the Playground**

```
1. In your project, click "Playgrounds" in the sidebar
2. Select "Chat playground"
3. You'll see a chat interface with settings
```

> Mario analogy: you sat down at Magikoopa's experiment table. Here, you can test spells quickly before creating a complete recipe.

**Step 3: Select a Model**

```
1. At the top of the Playground, click "Deployment"
2. Select "Create new deployment"
3. Choose: GPT-4o-mini (cheapest to start)
4. Name it: "my-gpt4o-mini"
5. Click "Deploy"
6. Wait for deployment
```

> Mario analogy: you went to the spell book shelf, picked up the "Basic Spells Manual" (GPT-4o-mini), and placed it on the workbench. Ready to experiment!

**Step 4: Configure the System Prompt**

```
In the "System message" field, write:

"You are the Mario Assistant, a friendly chatbot that helps
beginner players understand programming concepts
using Super Mario Bros analogies.

Rules:
- Always use analogies with Mario characters and elements
- Be patient and educational
- Use practical examples
- Respond in English
- If you don't know the answer, say so honestly"
```

> Mario analogy: you just gave instructions to your spell. Instead of being a generic spell, it now has a personality and a specific purpose. It's like telling Magikoopa: "This spell should seem friendly and use gaming language."

**Step 5: Test the Chatbot**

```
In the chat field, write your first message:

You: "What is a variable in programming?"

The chatbot should respond something like:
"A variable is like a '?' Block in Super Mario!
When Mario hits a '?' Block, something comes out
— it could be a mushroom, a coin, a star.
Similarly, a variable is a 'little box' that
stores something inside: a number, a text, a list.
You give the box a name (variable name)
and put something inside (variable value)."
```

> Mario analogy: your spell is working! You cast an enchantment ("What is a variable?") and received a magical, contextualized response. The Forge is operational!

**Step 6: Adjust Parameters**

In the Playground, you can adjust:

| Parameter | What It Does | Recommended Value | Mario Analogy |
|---|---|---|---|
| **Temperature** | Response creativity (0=predictable, 1=creative) | 0.7 | Spell intensity: 0=always the same, 1=unpredictable |
| **Max tokens** | Maximum response length | 800 | Spell duration: how many words it can produce |
| **Top P** | Vocabulary diversity | 0.95 | Variety of ingredients the spell uses |
| **Frequency penalty** | Penalizes word repetition | 0.3 | Prevents the spell from repeating the same effect |
| **Presence penalty** | Encourages new topics | 0.3 | Makes the spell explore new areas |

### 8.2 Testing Your Chatbot

Try different questions to see how the chatbot behaves:

```
Test 1: "What is a for loop?"
Test 2: "Explain object-oriented programming"
Test 3: "What is an API?"
Test 4: "How does Git work?"
Test 5: "What is a database?"
```

For each response, evaluate:
- Did the response use Mario analogies? (relevance to system prompt)
- Is the response technically correct? (accuracy)
- Is the response easy to understand? (clarity)
- Is the response the right length? (conciseness)

If any response isn't good, adjust the system prompt or parameters.

### 8.3 Publishing Your Chatbot

When you're satisfied with the chatbot in the Playground:

```
1. Click "Deploy" or "Deploy to a web app"
2. Choose: "Azure Web App" for a web page
3. Configure:
   - App name: "chatbot-mario-sofia"
   - Plan: Free (for testing)
   - Authentication: Enabled
4. Click "Deploy"
5. In a few minutes, you'll have a public URL!
```

> Mario analogy: your spell is no longer confined to the Forge. You opened the magic portal and sent the spell to the battlefield. Any ally (user) can access the URL and use the chatbot. The magic is available to the world!

**Alternative: Deploy as API**

If you want other applications to use your chatbot:

```
1. In the Foundry, go to "Deployments"
2. Copy the "Endpoint URL" and "API Key"
3. Use in any application:

import requests

url = "https://my-endpoint.openai.azure.com/..."
headers = {"api-key": "YOUR-KEY-HERE"}
body = {
    "messages": [
        {"role": "system", "content": "You are the Mario Assistant..."},
        {"role": "user", "content": "What is a variable?"}
    ]
}

response = requests.post(url, headers=headers, json=body)
print(response.json()["choices"][0]["message"]["content"])
```

---

## 9. Final Table: Component / Function / Mario Analogy

| # | Component | What It Does | Mario Analogy | Practical Tip |
|---|---|---|---|---|
| 1 | **Azure AI Foundry** | Complete platform for creating AI solutions | Magikoopa's Forge — complete spell laboratory | Access at ai.azure.com |
| 2 | **Model Catalog** | Catalog with hundreds of models | Shelf of spell books | Start with GPT-4o-mini (cheapest) |
| 3 | **Playground** | Interactive testing environment | Quick experiment table | Use to prototype before creating a flow |
| 4 | **Prompt Flow** | Visual AI pipeline editor | Enchantment recipe — ingredients in the right order | Start with a simple 3-node flow |
| 5 | **Evaluation** | Model quality assessment | Testing arena with training dummies | Create at least 50 test questions |
| 6 | **Deployment** | Deploy as a production API | Magic portal that sends spells to the battlefield | Use Serverless API to start |
| 7 | **Fine-tuning** | Customize the model with your data | Modify a spell for a specific enemy | Only use if RAG doesn't solve your problem |
| 8 | **Content Safety** | Safety filters | Forge guardian that blocks forbidden spells | Always enable, never disable in production |
| 9 | **RAG / On Your Data** | Add your documents to the model | Give the wizard a Magic Library | Ideal for internal documentation |
| 10 | **Monitoring** | Post-deployment monitoring | Magikoopa's crystal ball | Set up cost and usage alerts |
| 11 | **SDK (azure-ai-projects)** | Programmatic access to everything | Spell book in code | Use for automation and integration |
| 12 | **Responsible AI** | AI governance and ethics | Sacred rules of the Forge | Not optional — it's mandatory |

---

## Forge Progression: The Wizard Apprentice's Journey

```
PROGRESSION IN MAGIKOOPA'S FORGE
==================================

Level 1 -> Apprentice (Playground)
             = Tests basic spells at the experiment table
             Experiments with models, adjusts prompts, sees results.

Level 2 -> Alchemist (Prompt Flow)
             = Creates enchantment recipes with multiple steps
             Combines nodes, creates pipelines, integrates with data.

Level 3 -> Wizard (Fine-tuning + RAG)
             = Customizes spells for specific domains
             Specializes models, adds knowledge libraries.

Level 4 -> Archmage (Deployment + Monitoring)
             = Sends spells to the battlefield and monitors
             Deploys to production, monitors usage, adjusts in real time.

MASTER  -> Magikoopa (Full Mastery)
             = Masters ALL components of the Forge
             Creates end-to-end complete AI solutions.
```

---

**Previous:** World 6 | **Next:** Level 7-2 — The Magic Library: RAG

---

### Spell Forged!

Sofia now knows Magikoopa's Forge — Azure AI Foundry.
She learned to choose models, create flows, test in arenas, and send spells to the battlefield.
The next level will lead her to discover the **Magic Library** — RAG, the power to give unlimited knowledge to any AI model...

**Quick mapping for this chapter:**

| Original Concept | Mario Version |
|---|---|
| Azure AI Foundry | Magikoopa's Forge |
| Model Catalog | Shelf of spell books |
| Prompt Flow | Enchantment recipe |
| Evaluation | Testing arena with training dummies |
| Deployment | Magic portal to the battlefield |
| Fine-tuning | Customize a spell for a specific enemy |
| Content Safety | Forge guardian |
| Responsible AI | Sacred rules of the Forge |
| Playground | Quick experiment table |
| Monitoring | Magikoopa's crystal ball |

---

## References

- Azure AI Foundry — https://ai.azure.com
- Azure AI Studio Documentation — https://learn.microsoft.com/en-us/azure/ai-studio/

---

<div align="center">

⬅️ [Previous: Level 6-BOSS: Quick Reference](../world-6-bowser-castle-2/6-boss-quick-reference.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 7-2: RAG](7-2-rag.md)

</div>
