---
title: "Level 1-6 — The Magic of the Game: Azure AI and AI Foundry"
description: "Introduction to Azure AI services, GitHub Copilot, and Azure AI Foundry — the magic that transforms development."
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
tags: ["agentic-devops", "mario", "world-1", "azure-ai", "ai-foundry", "copilot", "fundamentals"]
sidebar_position: 6
format: md
---

# Level 1-6 — The Magic of the Game: Azure AI and AI Foundry

---

## Change Log

| Version | Date       | Author       | Description                     |
|---------|------------|--------------|-------------------------------|
| 1.0.0   | 2026-03-18 | Paula Silva  | Initial creation (Mario Edition)|

---

## Table of Contents

- [Prologue — When the Game Gets Magic](#prologue--when-the-game-gets-magic)
- [1. What Is Artificial Intelligence?](#1-what-is-artificial-intelligence)
  - [1.1 AI in Simple Words](#11-ai-in-simple-words)
  - [1.2 The Types of AI That Matter to You](#12-the-types-of-ai-that-matter-to-you)
  - [1.3 Table: Types of AI vs Types of Magic in Mario](#13-table-types-of-ai-vs-types-of-magic-in-mario)
- [2. Azure AI Services — The Magical Arsenal](#2-azure-ai-services--the-magical-arsenal)
  - [2.1 Services Overview](#21-services-overview)
  - [2.2 Azure OpenAI Service — The Most Powerful Spell Book](#22-azure-openai-service--the-most-powerful-spell-book)
  - [2.3 GPT Models — The Individual Spells](#23-gpt-models--the-individual-spells)
  - [2.4 Embeddings — The Magic of Understanding](#24-embeddings--the-magic-of-understanding)
  - [2.5 Complete Table: Azure AI Services](#25-complete-table-azure-ai-services)
- [3. Azure AI Foundry — Magikoopa's Forge (Introduction)](#3-azure-ai-foundry--magikoopas-forge-introduction)
  - [3.1 What Is AI Foundry?](#31-what-is-ai-foundry)
  - [3.2 What You Can Do in the Forge](#32-what-you-can-do-in-the-forge)
  - [3.3 Model Catalog — The Spell Shelf](#33-model-catalog--the-spell-shelf)
  - [3.4 Playground — The Testing Arena](#34-playground--the-testing-arena)
  - [3.5 Table: AI Foundry Components](#35-table-ai-foundry-components)
- [4. GitHub Copilot — Your First AI Companion](#4-github-copilot--your-first-ai-companion)
  - [4.1 What Is Copilot?](#41-what-is-copilot)
  - [4.2 Copilot Operating Modes](#42-copilot-operating-modes)
  - [4.3 Copilot in VS Code — Using It in Practice](#43-copilot-in-vs-code--using-it-in-practice)
  - [4.4 Tips for Using Copilot Well](#44-tips-for-using-copilot-well)
- [5. Fundamental AI Concepts for Developers](#5-fundamental-ai-concepts-for-developers)
  - [5.1 Prompts — Requests to the Wizard](#51-prompts--requests-to-the-wizard)
  - [5.2 Tokens — The Cost of Magic](#52-tokens--the-cost-of-magic)
  - [5.3 Context — What the Wizard Knows](#53-context--what-the-wizard-knows)
  - [5.4 Temperature — Creativity vs Precision](#54-temperature--creativity-vs-precision)
  - [5.5 Table: AI Concepts vs Mario Magic](#55-table-ai-concepts-vs-mario-magic)
- [6. Responsible AI — The Rules of Magic](#6-responsible-ai--the-rules-of-magic)
  - [6.1 Microsoft's 6 Principles](#61-microsofts-6-principles)
  - [6.2 Content Safety — The Protection Filter](#62-content-safety--the-protection-filter)
- [7. Basic Prompt Engineering — The Art of Requesting Spells](#7-basic-prompt-engineering--the-art-of-requesting-spells)
  - [7.1 What Is Prompt Engineering?](#71-what-is-prompt-engineering)
  - [7.2 Basic Techniques](#72-basic-techniques)
  - [7.3 Practical Examples](#73-practical-examples)
- [8. Practice: Your First Use of AI](#8-practice-your-first-use-of-ai)
  - [8.1 Using Copilot to Write Code](#81-using-copilot-to-write-code)
  - [8.2 Using Copilot Chat to Learn](#82-using-copilot-chat-to-learn)
  - [8.3 Using the AI Foundry Playground](#83-using-the-ai-foundry-playground)
- [Summary — What We Learned in Level 1-6](#summary--what-we-learned-in-level-1-6)
- [References](#references)

---

## Prologue — When the Game Gets Magic

In the first worlds of Mario, everything is physical — blocks, pipes, coins, jumps. But at some point, the game introduces **magic**: Fire Flowers that shoot fireballs, Super Stars that make Mario invincible, Cape Feathers that let him fly. The game mechanics change. What was possible multiplies exponentially.

Sofia was at that exact point in her journey. Until now, everything was "manual" — writing code line by line, testing manually, setting everything up from scratch. But the world had changed. A new force had appeared in the Mushroom Kingdom: **Artificial Intelligence**.

"Magic," Sofia whispered, seeing for the first time Copilot complete 10 lines of code that would have taken her 15 minutes to write. "This is pure magic."

"It's not magic," the voice replied. "These are mathematical models trained with billions of parameters that predict the most likely next sequence of tokens given a context. But... you can call it magic if you want. The effect is the same."

This level will introduce the **magic system** of your game: Azure AI Services, Azure AI Foundry, and GitHub Copilot. You don't need to understand all the math behind it — just as Mario doesn't need to understand the physics of fire to use the Fire Flower. You need to know: **what exists**, **when to use it**, and **how to get started**.

---

## 1. What Is Artificial Intelligence?

### 1.1 AI in Simple Words

**Artificial Intelligence (AI)** is the ability of computers to do things that would normally require human intelligence: understand language, recognize images, make decisions, generate text, solve problems.

In practice for developers, AI in 2026 mainly means:

- **Generating code** from natural language descriptions
- **Understanding and summarizing** long texts
- **Answering questions** about code, documentation, and concepts
- **Translating** between programming languages
- **Analyzing** data and finding patterns
- **Automating** repetitive tasks with intelligence

### 1.2 The Types of AI That Matter to You

| Type | What It Does | Example |
|------|-------------|---------|
| **Generative AI** | Creates new content (text, code, images) | GPT-4o, Claude, DALL-E |
| **NLP** (Natural Language Processing) | Understands and processes human language | Translators, chatbots, summarizers |
| **Computer Vision** | Understands images and videos | Facial recognition, OCR |
| **AI for Code** | Specialized in understanding and generating code | GitHub Copilot, Codex |

### 1.3 Table: Types of AI vs Types of Magic in Mario

| AI Type | Mario Analogy | What It Does in the Game |
|---------|---------------|-------------------------|
| **Generative AI (GPT-4o)** | **Supreme spell book** | Generates any type of magic — text, code, analysis |
| **GitHub Copilot** | **Magical companion (Yoshi with powers)** | Walks alongside you, suggests spells while you play |
| **Embeddings** | **Comprehension magic** | Understands the deep meaning of things (not just the words) |
| **Vision AI** | **Magical eye** | Sees and understands images, screenshots, diagrams |
| **Speech AI** | **Magical ear** | Hears and transcribes voice to text |
| **AI Foundry** | **Magikoopa's Forge** | Place where new spells are created and refined |
| **Content Safety** | **Anti-dark magic shield** | Blocks dangerous or harmful spells |

---

## 2. Azure AI Services — The Magical Arsenal

### 2.1 Services Overview

Azure offers a complete arsenal of AI services, all accessible via APIs:

```
Azure AI Services
├── Azure OpenAI Service     ← GPT-4o, GPT-4, DALL-E (the most powerful)
├── AI Language               ← Understand and analyze text
├── AI Vision                 ← Understand images
├── AI Speech                 ← Speech to text and text to speech
├── AI Search                 ← Intelligent data search
├── AI Document Intelligence  ← Extract data from documents
├── Content Safety            ← Filter harmful content
└── AI Foundry                ← Unified platform for building solutions
```

### 2.2 Azure OpenAI Service — The Most Powerful Spell Book

**Azure OpenAI Service** is where the most powerful models live: GPT-4o, GPT-4, GPT-4 Turbo, DALL-E 3, Whisper. It's the enterprise version of OpenAI, running on Azure's secure infrastructure.

| Model | Specialty | Mario Analogy |
|-------|-----------|---------------|
| **GPT-4o** | The most advanced — text, vision, audio | **Supreme spell** — does everything, the most powerful |
| **GPT-4 Turbo** | Fast and with large context (128K tokens) | **Quick spell** — almost as strong, much faster |
| **GPT-4o mini** | Lightweight and affordable for simple tasks | **Basic spell** — efficient for everyday use |
| **DALL-E 3** | Generates images from text | **Illusion spell** — creates images from nothing |
| **Whisper** | Transcribes audio to text | **Hearing spell** — listens and transcribes |

> **MARIO ANALOGY:** Azure OpenAI Service is the **most powerful spell book in the game**. Inside it are the individual spells (models). GPT-4o is the strongest spell — capable of understanding text, images, and audio, and generating incredibly intelligent responses. GPT-4o mini is the lighter version — not as strong, but much faster and cheaper.

### 2.3 GPT Models — The Individual Spells

**How do GPT models work?**

In simple terms: you give an instruction (prompt) and the model generates a response. The model was trained on enormous amounts of text and learned patterns of language, logic, and knowledge.

```
YOU:     "Write a JavaScript function that calculates factorial"
GPT-4o:  function fatorial(n) {
           if (n <= 1) return 1;
           return n * fatorial(n - 1);
         }
```

### 2.4 Embeddings — The Magic of Understanding

**Embeddings** transform text into numerical vectors that capture the **meaning** of words. This enables:
- Searching documents by meaning (not just keywords)
- Comparing how similar two texts are
- Creating recommendation systems

> **MARIO ANALOGY:** Embeddings are like a **deep comprehension magic**. Instead of just reading the words, this magic understands the MEANING. If you ask "how do I save the game?" and the documentation says "make a commit to record your progress," the embeddings magic understands they are the same thing — even though they use different words.

### 2.5 Complete Table: Azure AI Services

| Service | What It Does | Mario Analogy | When to Use |
|---------|-------------|---------------|------------|
| **Azure OpenAI** | GPT-4o, DALL-E models | Supreme spell book | Generate text, code, images |
| **AI Language** | Sentiment analysis, summarization, NER | Speed reading spell | Understand large texts |
| **AI Vision** | Image analysis, OCR | Magical eye | Read documents, analyze photos |
| **AI Speech** | Speech to text, text to speech | Magical ear and voice | Transcribe meetings, accessibility |
| **AI Search** | Intelligent search with AI | Magical compass | Search through your own documents |
| **Document Intelligence** | Extract data from PDFs, forms | Scroll reader | Automate document reading |
| **Content Safety** | Filter harmful content | Anti-dark magic shield | Protect apps from improper content |

---

## 3. Azure AI Foundry — Magikoopa's Forge (Introduction)

### 3.1 What Is AI Foundry?

**Azure AI Foundry** (formerly Azure AI Studio) is Microsoft's **unified platform** for creating, testing, evaluating, and deploying AI solutions. It's where you go when you want to do more than simply call a model — you want to **create your own solution**.

> **MARIO ANALOGY:** AI Foundry is **Magikoopa's Forge** — the laboratory where spells are created. While Azure OpenAI Service gives you access to ready-made spells, the Forge lets you CREATE new spells, COMBINE existing spells, TEST THEM in controlled arenas, and LAUNCH THEM onto the battlefield. It's for those who want to go beyond just using magic — who want to become a wizard.

### 3.2 What You Can Do in the Forge

1. **Choose** from dozens of models (GPT-4o, Llama, Phi, Mistral, etc.)
2. **Configure** the model with your own data and instructions
3. **Test** in the Playground before launching
4. **Evaluate** response quality with metrics
5. **Deploy** as a production-ready API
6. **Monitor** production performance

### 3.3 Model Catalog — The Spell Shelf

The Model Catalog is where you choose which model to use. It has models from various sources:

| Source | Examples | Analogy |
|--------|---------|---------|
| **OpenAI** | GPT-4o, GPT-4, DALL-E | Spells from the most famous school |
| **Meta** | Llama 3 | Open-source spells from the rival school |
| **Microsoft** | Phi-3, Phi-4 | Lightweight and efficient spells from the local school |
| **Mistral** | Mistral Large, Mixtral | High-quality French spells |
| **Cohere** | Command R+ | Enterprise-specialized spells |

### 3.4 Playground — The Testing Arena

The **Playground** is a web interface where you can chat directly with the models, test prompts, and adjust settings — all without writing code.

Access it at: **https://ai.azure.com**

> **MARIO ANALOGY:** The Playground is the **testing arena** inside the Forge. Before taking a spell to the battlefield (production), you test it in the arena. "Does this prompt work? Is the response good? Does the model understand what I want?" All of this without risk.

### 3.5 Table: AI Foundry Components

| Component | Function | Mario Analogy |
|-----------|---------|---------------|
| **Model Catalog** | Choose the base model | Shelf of spell books |
| **Playground** | Test models interactively | Testing arena |
| **Prompt Flow** | Create visual AI pipelines | Step-by-step enchantment recipe |
| **Evaluation** | Measure response quality | Judge that evaluates the spell's strength |
| **Deployment** | Publish as an API | Send spell to the battlefield |
| **Fine-tuning** | Customize model with your data | Modify spell for your specific enemies |

---

## 4. GitHub Copilot — Your First AI Companion

### 4.1 What Is Copilot?

**GitHub Copilot** is an AI tool for developers that works directly in VS Code (and other editors). It was trained on code from millions of repositories and deeply understands programming.

> **MARIO ANALOGY:** Copilot is your **first magical companion**. Imagine a Yoshi that, besides carrying you on its back, also SUGGESTS where to go, COMPLETES the jumps you start, and EXPLAINS what each part of the level does. It doesn't play for you — but it plays WITH you, making everything faster and less frustrating.

### 4.2 Copilot Operating Modes

| Mode | What It Does | Mario Analogy | When to Use |
|------|-------------|---------------|------------|
| **Autocomplete** | Suggests code in real time as you type | Yoshi anticipates the next jump | Writing code day to day |
| **Chat (Ask)** | Answers questions about code | **Toad's Hint House** — asking for tips | Clearing up doubts, requesting explanations |
| **Chat (Edit)** | Edits existing code by instruction | Asking Yoshi to reorganize the level | Refactoring, fixing, improving |
| **Chat (Agent)** | Executes complex multi-step tasks | **Yoshi on autopilot** — works alongside you | Creating features, investigating bugs |
| **Inline Chat** | Contextual chat on the code line | Companion whispering in your ear | Quick fixes, specific explanations |

### 4.3 Copilot in VS Code — Using It in Practice

**Autocomplete:**
1. Start typing in the editor
2. Copilot suggests code in gray
3. Press `Tab` to accept or keep typing to ignore

```javascript
// Write a comment describing what you want:
// function that calculates the price with discount

// Copilot suggests automatically:
function calcularPrecoComDesconto(preco, percentualDesconto) {
  const desconto = preco * (percentualDesconto / 100);
  return preco - desconto;
}
```

**Chat:**
1. Open Copilot Chat (`Ctrl+Shift+I` or click the chat icon)
2. Type your question in English or any language
3. Copilot responds with explanations and code

Example questions:
```
"Explain what this code does"
"How do I make an HTTP request in JavaScript?"
"Find bugs in this code"
"Rewrite using async/await"
"Create tests for this function"
```

### 4.4 Tips for Using Copilot Well

| Tip | Why | Example |
|-----|-----|---------|
| **Write clear comments** | Copilot uses comments as context | `// function that validates email and returns true/false` |
| **Be specific** | The more context, the better the suggestion | "Create a REST API in Express with a GET /users route" |
| **Always review** | Copilot can make mistakes or generate insecure code | Never accept code without understanding what it does |
| **Use examples** | Show an example and ask for more | "Do the same as the example above, but for products" |
| **Iterate** | If the response isn't good, refine the request | "Now add error handling" |

> **MARIO ANALOGY:** Copilot is like any companion — sometimes it suggests the wrong path. Yoshi can lead you off a cliff if you're not paying attention. ALWAYS review what Copilot generates. It's an assistant, not a replacement. The final responsibility is YOURS.

---

## 5. Fundamental AI Concepts for Developers

### 5.1 Prompts — Requests to the Wizard

A **prompt** is the instruction you give to the AI model. The quality of the response depends directly on the quality of the prompt.

> **MARIO ANALOGY:** The prompt is like the **request you make to the wizard**. If you say "do magic," the wizard doesn't know what to do. If you say "throw a fireball in the direction of the Goomba 10 meters ahead," the wizard knows exactly what to do. The clearer and more specific the request, the more precise the magic.

### 5.2 Tokens — The Cost of Magic

**Tokens** are the units that AI models process. An English word averages about 1.3 tokens. Each call to a model consumes tokens — and tokens cost money.

| Model | Approximate cost (input) | Approximate cost (output) |
|-------|------------------------|--------------------------|
| GPT-4o | $2.50 / 1M tokens | $10.00 / 1M tokens |
| GPT-4o mini | $0.15 / 1M tokens | $0.60 / 1M tokens |

> **MARIO ANALOGY:** Tokens are the **coins you spend** to cast spells. Powerful spells (GPT-4o) cost more coins. Basic spells (GPT-4o mini) cost less. You have a coin budget per level — spend wisely.

### 5.3 Context — What the Wizard Knows

**Context** is all the information the model has available to generate a response. More context generally leads to better responses.

| Context | Example | Result |
|---------|---------|--------|
| **No context** | "Fix the bug" | Model doesn't know which bug |
| **With context** | "Fix the bug in the calcularDesconto function that returns NaN when the input is a string" | Model knows exactly what to do |

### 5.4 Temperature — Creativity vs Precision

**Temperature** is a parameter that controls how "creative" the model is:

| Temperature | Behavior | When to Use |
|------------|----------|------------|
| **0** | Deterministic, predictable | Code, data, facts |
| **0.3-0.5** | Slightly creative | Summaries, explanations |
| **0.7-1.0** | Quite creative | Brainstorming, narratives |

> **MARIO ANALOGY:** Temperature is like the wizard's **level of improvisation**. Temperature 0 = the wizard follows the book to the letter (perfect for code). Temperature 1 = the wizard improvises and invents creative spells (could be brilliant or disastrous).

### 5.5 Table: AI Concepts vs Mario Magic

| AI Concept | What It Is | Mario Analogy |
|-----------|---------|---------------|
| **Prompt** | Instruction for the model | Request to the wizard |
| **Token** | Processing unit | Coin to cast a spell |
| **Context** | Information available to the model | What the wizard knows before acting |
| **Temperature** | Creativity level | Improvisation vs following the book |
| **Model** | The AI engine (GPT-4o, etc.) | The specific spell book |
| **Response** | The model's output | The result of the magic |
| **Fine-tuning** | Customizing a model with your own data | Modifying the spell for your scenario |
| **RAG** | Giving your own documents to the model | Giving a library to the wizard before acting |

---

## 6. Responsible AI — The Rules of Magic

### 6.1 Microsoft's 6 Principles

Microsoft follows 6 principles of responsible AI:

| Principle | Meaning | Mario Analogy |
|-----------|---------|---------------|
| **Fairness** | AI must not discriminate against groups | Magic works the same for all characters |
| **Reliability** | AI must work safely and predictably | Spell can't blow up in your face |
| **Privacy** | AI must protect personal data | Wizard doesn't reveal players' secrets |
| **Inclusiveness** | AI must benefit everyone | Magic accessible to all players |
| **Transparency** | It must be clear how the AI works | Player knows when they're using magic |
| **Accountability** | Humans are responsible for AI outcomes | The player is responsible for how they use magic |

### 6.2 Content Safety — The Protection Filter

**Content Safety** is a service that filters harmful content in AI responses: hate speech, violence, sexual content, self-harm.

> **MARIO ANALOGY:** Content Safety is the **anti-dark magic shield**. Even if someone tries to cast a dangerous spell, the shield blocks it. It ensures that magic is only used for good.

---

## 7. Basic Prompt Engineering — The Art of Requesting Spells

### 7.1 What Is Prompt Engineering?

**Prompt Engineering** is the art of writing clear and effective instructions for AI models. It's an increasingly important skill for developers.

### 7.2 Basic Techniques

| Technique | Description | Example |
|-----------|-----------|---------|
| **Be specific** | Detail what you want | "Create a JavaScript function called `calcular_imc` that takes weight and height..." |
| **Give context** | Explain the scenario | "I'm building a to-do app in React with TypeScript..." |
| **Give examples** | Show the desired format | "Format: `{ id: number, nome: string, completa: boolean }`" |
| **Define the role** | Say who the model should be | "You are a software security specialist..." |
| **Ask step by step** | Instruct it to think in stages | "Analyze the bug step by step: 1) identify the cause, 2) explain, 3) fix" |

### 7.3 Practical Examples

**Bad prompt:**
```
make an api
```

**Good prompt:**
```
Create a REST API in Node.js with Express that has:
- GET /moedas route — returns all collected coins
- POST /moedas route — registers a new collected coin
- Each coin has: id, value, level_collected, date
- Use TypeScript
- Include error handling
- Add explanatory comments
```

**Prompt in Copilot Chat:**
```
@workspace Explain the architecture of this project.
What are the main components and how do they connect?
```

---

## 8. Practice: Your First Use of AI

### 8.1 Using Copilot to Write Code

Create a new file `fase1-6-magia.js` and write comments to guide Copilot:

```javascript
// Create a Hero class with name, lives, and coins
// The hero can collect coins, lose lives, and gain extra lives
// When the hero loses all lives, game over
// When they collect 100 coins, they gain 1 extra life

// [Let Copilot suggest the code]
```

### 8.2 Using Copilot Chat to Learn

In Copilot Chat, try:

```
1. "What is a Promise in JavaScript? Explain as if I were a beginner."
2. "What's the difference between let, const, and var?"
3. "Create 3 exercises for me to practice JavaScript functions"
4. "Review this code and suggest improvements: [paste your code]"
```

### 8.3 Using the AI Foundry Playground

1. Go to **https://ai.azure.com**
2. Navigate to the **Playground**
3. Select a model (GPT-4o)
4. In the **System Message**, write: "You are a programming tutor for beginners. Always respond in English, with practical examples and game analogies."
5. Ask questions and watch the AI respond

---

## Summary — What We Learned in Level 1-6

| Concept | What It Is | Mario Analogy |
|---------|---------|---------------|
| **AI** | Computers performing intelligent tasks | The magic of the game |
| **Azure OpenAI** | GPT models on Azure | Supreme spell book |
| **GPT-4o** | Most advanced model | Most powerful spell |
| **Embeddings** | Vectors that capture meaning | Deep comprehension magic |
| **AI Foundry** | Platform for building AI solutions | Magikoopa's Forge |
| **Copilot** | AI for developers in VS Code | Magical companion (Yoshi) |
| **Prompt** | Instruction for the model | Request to the wizard |
| **Token** | Processing/cost unit | Coin to cast a spell |
| **Temperature** | Model creativity | Wizard's level of improvisation |
| **Responsible AI** | Ethical principles for AI use | Rules of magic |
| **Prompt Engineering** | Art of writing good instructions | Art of requesting effective spells |

```
+-------------------------------------------+
|                                           |
|    LEVEL 1-6 COMPLETE!                    |
|                                           |
|    ★ AI understood                        |
|    ★ Azure AI Services explored           |
|    ★ AI Foundry introduced                |
|    ★ Copilot basics mastered              |
|    ★ Prompt Engineering started           |
|    ★ Responsible AI understood            |
|                                           |
|    → Next level: 1-7 Complete Flow        |
|      (How Everything Connects)            |
|                                           |
+-------------------------------------------+
```

---

## References

- [Azure OpenAI Service](https://learn.microsoft.com/azure/ai-services/openai)
- [Azure AI Foundry](https://ai.azure.com)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Azure AI Services Overview](https://learn.microsoft.com/azure/ai-services)
- [Microsoft Responsible AI](https://www.microsoft.com/ai/responsible-ai)
- [OpenAI — GPT-4o](https://openai.com/gpt-4o)
- [Prompt Engineering Guide](https://learn.microsoft.com/azure/ai-services/openai/concepts/prompt-engineering)
- [Azure Content Safety](https://learn.microsoft.com/azure/ai-services/content-safety)
- [GitHub Copilot — Best Practices](https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)

---

*"Magic doesn't replace skill — it amplifies it. The best wizard is the one who knows the right spell for every situation." — Sofia, casting her first perfect prompt.*
