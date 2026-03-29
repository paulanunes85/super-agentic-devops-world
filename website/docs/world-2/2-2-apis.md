---
title: "Level 2-2 -- The Messenger Between Kingdoms: APIs"
description: "How different parts of a system talk to each other through APIs, HTTP methods, status codes, and the difference between Frontend, Backend, and Full Stack"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - api
  - rest
  - http
  - frontend
  - backend
  - full-stack
  - status-codes
  - world-2
  - mario
---

# Level 2-2 -- The Messenger Between Kingdoms: APIs

<div class="docs-hero">
  <img src="/super-agentic-devops-world/img/docs/2-2-apis.png" alt="Level 2-2 -- The Messenger Between Kingdoms: APIs" />
</div>


---

## Change Log

| Version | Date       | Author                                  | Description          |
|---------|------------|----------------------------------------|--------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation    |

---

## Table of Contents

- [Prologue: The Toad Messenger](#prologue-the-toad-messenger)
- [1. Frontend, Backend, and Full Stack: The Kingdoms of the Mushroom Kingdom](#1-frontend-backend-and-full-stack-the-kingdoms-of-the-mushroom-kingdom)
  - [1.1 The Frontend: What the Player Sees](#11-the-frontend-what-the-player-sees)
  - [1.2 The Backend: What Happens Behind the Scenes](#12-the-backend-what-happens-behind-the-scenes)
  - [1.3 The Full Stack: The Complete Adventurer](#13-the-full-stack-the-complete-adventurer)
  - [1.4 Table: Frontend vs Backend vs Full Stack](#14-table-frontend-vs-backend-vs-full-stack)
- [2. What Is an API?](#2-what-is-an-api)
  - [2.1 Fundamental Definition](#21-fundamental-definition)
  - [2.2 Why Do APIs Exist?](#22-why-do-apis-exist)
  - [2.3 APIs in Everyday Life](#23-apis-in-everyday-life)
- [3. REST: The Messenger's Protocol](#3-rest-the-messengers-protocol)
  - [3.1 What Is REST?](#31-what-is-rest)
  - [3.2 The 6 REST Principles](#32-the-6-rest-principles)
  - [3.3 URLs as Mushroom Kingdom Addresses](#33-urls-as-mushroom-kingdom-addresses)
- [4. HTTP Methods: The Toad's Missions](#4-http-methods-the-toads-missions)
  - [4.1 GET -- Fetch Information](#41-get----fetch-information)
  - [4.2 POST -- Deliver a Package](#42-post----deliver-a-package)
  - [4.3 PUT -- Replace Something](#43-put----replace-something)
  - [4.4 PATCH -- Fix Something](#44-patch----fix-something)
  - [4.5 DELETE -- Destroy Something](#45-delete----destroy-something)
  - [4.6 Complete Table: HTTP Methods](#46-complete-table-http-methods)
- [5. Status Codes: The Messenger's Replies](#5-status-codes-the-messengers-replies)
  - [5.1 2xx Family -- Mission Accomplished](#51-2xx-family----mission-accomplished)
  - [5.2 3xx Family -- Redirect](#52-3xx-family----redirect)
  - [5.3 4xx Family -- Requester Error](#53-4xx-family----requester-error)
  - [5.4 5xx Family -- Castle Error](#54-5xx-family----castle-error)
  - [5.5 Table: The Most Important Status Codes](#55-table-the-most-important-status-codes)
- [6. JSON: The Lingua Franca of the Mushroom Kingdom](#6-json-the-lingua-franca-of-the-mushroom-kingdom)
  - [6.1 What Is JSON?](#61-what-is-json)
  - [6.2 Basic Structure](#62-basic-structure)
  - [6.3 JSON in Practice: Request and Response](#63-json-in-practice-request-and-response)
- [7. Building an API in Practice](#7-building-an-api-in-practice)
  - [7.1 Complete Example: Tasks API (TodoApp)](#71-complete-example-tasks-api-todoapp)
  - [7.2 Testing with curl and Postman](#72-testing-with-curl-and-postman)
- [8. APIs in the Cloud: Azure API Management](#8-apis-in-the-cloud-azure-api-management)
- [9. API Best Practices](#9-api-best-practices)
- [10. Final Summary Table](#10-final-summary-table)
- [References](#references)

---

## Prologue: The Toad Messenger

Sofia was building her TodoApp application. The frontend (the screen the user sees) was beautiful, with colorful buttons and smooth animations. The backend (the server that stores the data) was working, with the database full of test tasks. But there was a problem: the two weren't talking to each other.

*"My frontend knows the user clicked 'Add Task',"* Sofia complained. *"But how does it tell the backend to save that task in the database?"*

At that moment, a Toad dressed as a mailman appeared running across the screen.

*"I'm the Toad Messenger!"* he said, adjusting his mail bag. *"My job is to carry messages between the Frontend Castle and the Backend Castle. You give me a letter (request), I take it to the right castle, they give me a response, and I bring it back. Simple, fast, reliable."*

*"That,"* explained Yoshi in the background, *"is an **API**. And the Toad Messenger is the best of them all."*

---

## 1. Frontend, Backend, and Full Stack: The Kingdoms of the Mushroom Kingdom

Before talking about APIs, we need to understand the two great kingdoms they connect.

### 1.1 The Frontend: What the Player Sees

The **Frontend** is everything the user sees and interacts with directly. It's the visual part of the application.

**In Mario:** The Frontend is the **game screen** -- the scenery, the clouds, the blocks, Mario moving, the coin counter, the lives score. Everything you SEE.

**In practice:**
- HTML = the page structure (the blocks, the ground, the scenery)
- CSS = the appearance (colors, fonts, animations)
- JavaScript = the interactivity (when you click, something happens)
- React/Vue/Angular = frameworks that organize everything

```
What the user sees:
+----------------------------------+
|  [Logo]    [Menu]    [Login]     |
|                                  |
|  My Tasks:                       |
|  [x] Study APIs                  |
|  [ ] Create first endpoint       |
|  [ ] Test with Postman           |
|                                  |
|  [+ Add Task]                    |
+----------------------------------+
```

### 1.2 The Backend: What Happens Behind the Scenes

The **Backend** is everything that happens behind the curtains. The user never sees the backend directly.

**In Mario:** The Backend is the **game engine** -- the code that calculates whether Mario fell in a pit, whether he hit an enemy, how many coins he has, whether time ran out. You don't see this code, but it's there making everything work.

**In practice:**
- Server that processes requests
- Database that stores information
- Business logic (application rules)
- Authentication and security
- Node.js, Python, Java, C#, Go = common backend languages

```
What happens behind the scenes:
+----------------------------------+
|  SERVER                          |
|  - Receives request              |
|  - Validates data                |
|  - Queries database              |
|  - Applies business rules        |
|  - Returns response              |
+----------------------------------+
         |
+----------------------------------+
|  DATABASE                        |
|  - Stores tasks                  |
|  - Stores users                  |
|  - Keeps history                 |
+----------------------------------+
```

### 1.3 The Full Stack: The Complete Adventurer

A **Full Stack** developer works on both Frontend and Backend. It's like Mario who knows how to do everything: jump (frontend), fight (backend), swim (database), and fly (deploy).

> **MARIO ANALOGY:** If the Frontend is Luigi (specialist in jumps and visuals) and the Backend is Toad (guardian of data and treasures), the Full Stack is **Mario** -- he knows a bit of everything. He's not necessarily the best in each specific area, but he can handle any situation.

### 1.4 Table: Frontend vs Backend vs Full Stack

| Aspect | Frontend | Backend | Full Stack |
|---------|----------|---------|------------|
| **Mario Analogy** | Luigi -- visual and agility | Toad -- data and treasures | Mario -- does everything |
| **What it does** | Visual interface | Logic and data | Both |
| **Languages** | HTML, CSS, JS, React | Node.js, Python, Java | All |
| **Where it runs** | User's browser | Server in the cloud | Both |
| **User sees it?** | Yes, directly | No, invisible | Partially |
| **Focus** | User experience | Performance and security | Connection between both |

---

## 2. What Is an API?

### 2.1 Fundamental Definition

**API** stands for **Application Programming Interface**. It's a set of rules that defines how two pieces of software talk to each other.

In simple terms: an API is the **contract** that says:
- **What questions** you can ask
- **How** to formulate the question
- **What answers** you'll receive

> **MARIO ANALOGY:** An API is like the **Toad Messenger** between castles. The Frontend (Castle 1) wants information that's in the Backend (Castle 2). It can't go there alone -- it needs to send Toad. Toad knows: what type of message to accept, which castle to deliver to, how to format the response, and how long it takes. Toad IS the API.

### 2.2 Why Do APIs Exist?

Without APIs, each part of the system would have to know EVERYTHING about the other parts. It would be as if every Mario character needed to know how the physics engine works internally.

**With API (organized):**
```
Frontend: "Toad, bring me the task list"
Toad (API): goes to the backend, fetches data, brings back formatted response
Frontend: receives and displays on screen
```

**Without API (chaos):**
```
Frontend: needs to know SQL, database connection, server IP,
          database port, table schema, queries...
          EVERYTHING the backend knows
```

APIs create **separation of responsibilities**. Each part does what it does best.

### 2.3 APIs in Everyday Life

You use APIs all the time without realizing it:

| Action | API Involved | What Happens |
|------|---------------|----------------|
| Open Instagram | Instagram API | Fetches posts, likes, stories from server |
| Order Uber | Uber API | Sends location, finds driver, calculates price |
| Check weather | Weather API | Sends city, receives temperature and forecast |
| Pay with Pix | Bank API | Sends amount and key, processes transfer |
| Login with Google | Google OAuth API | Verifies identity without creating new account |

---

---

## 3. REST: The Messenger's Protocol

### 3.1 What Is REST?

**REST** (Representational State Transfer) is the most common style for building web APIs. It's like a protocol -- a set of rules the Toad Messenger follows.

> **MARIO ANALOGY:** REST is like the **Toad Messenger's code of conduct**. It defines: use the Mushroom Kingdom address system (URLs). Each message must be self-explanatory (no prior context needed). Use standard verbs (GET, POST, PUT, DELETE). And always respond with a status code.

### 3.2 The 6 REST Principles

| Principle | Explanation | Mario Analogy |
|-----------|-----------|----------------|
| **Client-Server** | Frontend and Backend are separated | Castle 1 and Castle 2 are independent |
| **Stateless** | Each request is independent | Toad doesn't remember the previous message |
| **Cacheable** | Responses can be stored | Toad notes the response to avoid going twice |
| **Uniform Interface** | Standardized URLs and verbs | All castles use the same address system |
| **Layered System** | Can have intermediaries | Toad can pass through other Toads on the way |
| **Code on Demand** | Server can send code | The castle can send a power-up with the response |

### 3.3 URLs as Mushroom Kingdom Addresses

Each resource (thing) in the API has a unique address called a **URL** (or **endpoint**):

```
https://api.mushroom-kingdom.com/v1/tarefas
|_____|  |________________________| |_| |______|
  |              |                  |      |
protocol     domain             version  resource

Examples:
GET    /tarefas          = List all tasks
GET    /tarefas/42       = Get task with ID 42
POST   /tarefas          = Create a new task
PUT    /tarefas/42       = Update task 42 completely
PATCH  /tarefas/42       = Partially update task 42
DELETE /tarefas/42       = Remove task 42
```

> **MARIO ANALOGY:** URLs are **castle addresses** in the Mushroom Kingdom. `/tarefas` is like saying "I'm going to the Tasks Castle." `/tarefas/42` is "I'm going to Room 42 of the Tasks Castle." The HTTP method says what you want to do there: GET = visit and look, POST = deliver something, DELETE = destroy something.

---

## 4. HTTP Methods: The Toad's Missions

### 4.1 GET -- Fetch Information

**GET** is the simplest mission: "go there and bring me information." It doesn't change anything on the server, it just fetches data.

```http
GET /tarefas HTTP/1.1
Host: api.todoapp.com

Response:
HTTP/1.1 200 OK
Content-Type: application/json

[
  { "id": 1, "titulo": "Estudar APIs", "concluida": false },
  { "id": 2, "titulo": "Criar endpoint", "concluida": true }
]
```

> **MARIO ANALOGY:** GET is Toad saying: *"I went to the Backend Castle, asked for the task list, and brought it back for you. I didn't touch anything, just looked and copied."*

### 4.2 POST -- Deliver a Package

**POST** is when you want to **create something new** on the server. You send data along with the request.

```http
POST /tarefas HTTP/1.1
Host: api.todoapp.com
Content-Type: application/json

{
  "titulo": "Aprender sobre status codes",
  "concluida": false
}

Response:
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 3,
  "titulo": "Aprender sobre status codes",
  "concluida": false,
  "criadaEm": "2026-03-18T10:00:00Z"
}
```

> **MARIO ANALOGY:** POST is Toad saying: *"I'm taking this package (data) to the Backend Castle. They'll open it, register it, and give me a receipt (response with ID)."*

### 4.3 PUT -- Replace Something

**PUT** replaces an entire resource. You send the complete object, and the server swaps everything.

```http
PUT /tarefas/3 HTTP/1.1
Host: api.todoapp.com
Content-Type: application/json

{
  "titulo": "Aprender sobre status codes HTTP",
  "concluida": true
}

Response:
HTTP/1.1 200 OK
```

> **MARIO ANALOGY:** PUT is Toad saying: *"The owner of task 3 wants to replace EVERYTHING. Take this new object and completely replace the old one."*

### 4.4 PATCH -- Fix Something

**PATCH** updates only a part of the resource. It's more surgical than PUT.

```http
PATCH /tarefas/3 HTTP/1.1
Host: api.todoapp.com
Content-Type: application/json

{
  "concluida": true
}

Response:
HTTP/1.1 200 OK
```

> **MARIO ANALOGY:** PATCH is Toad saying: *"You only need to change ONE thing in task 3: mark it as completed. The rest stays as it is."*

### 4.5 DELETE -- Destroy Something

**DELETE** removes a resource from the server.

```http
DELETE /tarefas/3 HTTP/1.1
Host: api.todoapp.com

Response:
HTTP/1.1 204 No Content
```

> **MARIO ANALOGY:** DELETE is Toad saying: *"The owner ordered task 3 destroyed. Poof! Gone. It doesn't exist anymore."*

### 4.6 Complete Table: HTTP Methods

| Method | Action | Mario Analogy | Example | Safe? | Idempotent? |
|--------|------|----------------|---------|---------|--------------|
| **GET** | Fetch | "Bring me information" | List tasks | Yes | Yes |
| **POST** | Create | "Deliver this package" | Create new task | No | No |
| **PUT** | Replace | "Swap everything for this" | Update entire task | No | Yes |
| **PATCH** | Partial update | "Fix just this part" | Mark as completed | No | No |
| **DELETE** | Remove | "Destroy this" | Remove task | No | Yes |

**Safe** = doesn't alter data on the server (GET is safe -- just looks).
**Idempotent** = doing it 1x or 100x gives the same result (DELETE 100x = item remains deleted).

---

## 5. Status Codes: The Messenger's Replies

When Toad returns from a mission, he brings a **status code** that summarizes the result. This code is a 3-digit number.

### 5.1 2xx Family -- Mission Accomplished

Codes starting with **2** mean **SUCCESS**.

| Code | Name | Meaning | Mario Analogy |
|--------|------|-------------|----------------|
| **200** | OK | Everything worked | Toad came back with the delivery. Mission accomplished! |
| **201** | Created | Something new was created | Toad delivered the package and the castle created something new |
| **204** | No Content | Done, but nothing to return | Toad destroyed the item. Nothing to bring back |

### 5.2 3xx Family -- Redirect

Codes starting with **3** mean **MOVED**.

| Code | Name | Meaning | Mario Analogy |
|--------|------|-------------|----------------|
| **301** | Moved Permanently | The castle moved permanently | "The princess isn't in this castle anymore. She moved to the castle on Street B" |
| **302** | Found (Temporary) | Temporarily somewhere else | "The princess is visiting another castle. She'll be back tomorrow" |
| **304** | Not Modified | Nothing changed since last time | "Toad, you already brought this info before. Use the copy you have" |

### 5.3 4xx Family -- Requester Error

Codes starting with **4** mean **YOU MESSED UP** (the client sent something wrong).

| Code | Name | Meaning | Mario Analogy |
|--------|------|-------------|----------------|
| **400** | Bad Request | Malformed request | Toad brought an illegible letter. The castle didn't understand |
| **401** | Unauthorized | No credentials | Toad arrived at the castle but doesn't have the key. "Who are you?" |
| **403** | Forbidden | Insufficient credentials | Toad has the key, but doesn't have permission for this room |
| **404** | Not Found | Resource doesn't exist | **Castle not found!** The address leads nowhere |
| **405** | Method Not Allowed | Wrong method | "You can't DESTROY this castle! You can only VISIT!" |
| **409** | Conflict | Data conflict | "A task with that name already exists!" |
| **422** | Unprocessable Entity | Invalid data | "Toad's letter makes sense, but the data is wrong" |
| **429** | Too Many Requests | Too many requests | "Toad, you've been here 100 times today! Rest!" |

### 5.4 5xx Family -- Castle Error

Codes starting with **5** mean **THE SERVER MESSED UP** (the castle has problems).

| Code | Name | Meaning | Mario Analogy |
|--------|------|-------------|----------------|
| **500** | Internal Server Error | Generic server error | **The castle is on fire!** Something went very wrong inside |
| **502** | Bad Gateway | Intermediary received invalid response | The intermediary Toad received a strange response from the castle |
| **503** | Service Unavailable | Server overloaded or in maintenance | "The castle is closed for renovations. Try tomorrow" |
| **504** | Gateway Timeout | Timed out | Toad waited and waited... but the castle never responded |

### 5.5 Table: The Most Important Status Codes

```
2xx = GREEN   = Everything fine!
3xx = YELLOW  = Moved
4xx = ORANGE  = You messed up
5xx = RED     = The server messed up

The 7 you WILL use every day:
200 = OK (mission accomplished)
201 = Created (new item created)
400 = Bad Request (illegible letter)
401 = Unauthorized (no key)
404 = Not Found (castle doesn't exist)
422 = Unprocessable (invalid data)
500 = Internal Error (castle on fire)
```

---

## 6. JSON: The Lingua Franca of the Mushroom Kingdom

### 6.1 What Is JSON?

**JSON** (JavaScript Object Notation) is the most used format for exchanging data between Frontend and Backend. It's the language the Toad Messenger speaks.

### 6.2 Basic Structure

```json
{
  "nome": "Sofia",
  "nivel": 2,
  "vidas": 3,
  "powerUps": ["mushroom", "fireFlower"],
  "posicao": {
    "mundo": "Underground Caves",
    "fase": "2-2"
  },
  "ativa": true
}
```

**Data types in JSON:**
- **String**: `"text in quotes"`
- **Number**: `42`, `3.14`
- **Boolean**: `true` or `false`
- **Array**: `["list", "of", "items"]`
- **Object**: `{ "key": "value" }`
- **Null**: `null` (empty/nothing)

### 6.3 JSON in Practice: Request and Response

```
REQUEST (Frontend -> Backend):
POST /tarefas
{
  "titulo": "Aprender JSON",
  "prioridade": "alta"
}

RESPONSE (Backend -> Frontend):
201 Created
{
  "id": 42,
  "titulo": "Aprender JSON",
  "prioridade": "alta",
  "concluida": false,
  "criadaEm": "2026-03-18T10:30:00Z",
  "criadaPor": "sofia"
}
```

> **MARIO ANALOGY:** JSON is the **official language** of the Mushroom Kingdom. When Toad carries a letter, it's written in JSON. When the castle responds, the response is also in JSON. All kingdoms understand JSON -- it's like the universal language that lets Toads from different castles communicate.

---

## 7. Building an API in Practice

### 7.1 Complete Example: Tasks API (TodoApp)

Here's a simple API using Node.js with Express:

```javascript
const express = require('express');
const app = express();
app.use(express.json());

// Simplified "database" (in memory)
let tarefas = [
  { id: 1, titulo: "Estudar APIs", concluida: false },
  { id: 2, titulo: "Criar backend", concluida: false }
];
let proximoId = 3;

// GET /tarefas -- List all tasks
// Toad: "Bring me the complete task list"
app.get('/tarefas', (req, res) => {
  res.status(200).json(tarefas);
});

// GET /tarefas/:id -- Get a specific task
// Toad: "Bring me task number X"
app.get('/tarefas/:id', (req, res) => {
  const tarefa = tarefas.find(t => t.id === parseInt(req.params.id));
  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa nao encontrada" });
    // 404 = Castle not found!
  }
  res.status(200).json(tarefa);
});

// POST /tarefas -- Create new task
// Toad: "Deliver this package to the castle"
app.post('/tarefas', (req, res) => {
  const { titulo } = req.body;
  if (!titulo) {
    return res.status(400).json({ erro: "Titulo e obrigatorio" });
    // 400 = Illegible letter!
  }
  const novaTarefa = {
    id: proximoId++,
    titulo,
    concluida: false
  };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
  // 201 = Package delivered and registered!
});

// PUT /tarefas/:id -- Update task completely
// Toad: "Replace everything in task X"
app.put('/tarefas/:id', (req, res) => {
  const index = tarefas.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ erro: "Tarefa nao encontrada" });
  }
  tarefas[index] = { id: parseInt(req.params.id), ...req.body };
  res.status(200).json(tarefas[index]);
});

// DELETE /tarefas/:id -- Remove task
// Toad: "Destroy task X"
app.delete('/tarefas/:id', (req, res) => {
  const index = tarefas.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ erro: "Tarefa nao encontrada" });
  }
  tarefas.splice(index, 1);
  res.status(204).send();
  // 204 = Destroyed. Nothing to return.
});

// Start the server
app.listen(3000, () => {
  console.log('Backend Castle listening on port 3000!');
});
```

### 7.2 Testing with curl and Postman

**Testing with curl (terminal):**

```bash
# GET -- List tasks
curl http://localhost:3000/tarefas

# POST -- Create task
curl -X POST http://localhost:3000/tarefas \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Aprender curl"}'

# PUT -- Update task
curl -X PUT http://localhost:3000/tarefas/1 \
  -H "Content-Type: application/json" \
  -d '{"titulo": "APIs dominadas!", "concluida": true}'

# DELETE -- Remove task
curl -X DELETE http://localhost:3000/tarefas/2
```

**Postman** is a visual tool for testing APIs. Instead of typing commands in the terminal, you fill out nice forms and see formatted responses. It's like having a visual map of the Mushroom Kingdom instead of walking in the dark.

---

## 8. APIs in the Cloud: Azure API Management

When your API goes to production, you need more control. **Azure API Management (APIM)** is like a fortified castle around your API:

| APIM Feature | What It Does | Mario Analogy |
|-------------|-----------|----------------|
| **Gateway** | Single entry point | Main castle gate |
| **Rate Limiting** | Limits requests per minute | "Only 100 Toads per hour!" |
| **Authentication** | Verifies identity | Guard at the door asking for password |
| **Caching** | Stores frequent responses | Toad notes response to avoid going twice |
| **Analytics** | Usage metrics | Counts how many Toads passed through |
| **Versioning** | Multiple API versions | Castle v1 and Castle v2 coexist |

---

## 9. API Best Practices

| Practice | Good Example | Bad Example | Why |
|---------|-------------|-------------|---------|
| URLs as nouns | `/tarefas` | `/getTarefas` | The verb is already in the HTTP method |
| Plural for collections | `/tarefas` | `/tarefa` | Consistency |
| Versioning | `/v1/tarefas` | `/tarefas` | Allows evolution without breaking |
| Correct status codes | `201` for creation | `200` for everything | Clear communication |
| Pagination | `/tarefas?page=1&limit=20` | Return 10,000 items | Performance |
| Error handling | `{"erro": "Titulo obrigatorio"}` | `500 Internal Error` | Helpful messages |
| HTTPS always | `https://api.com` | `http://api.com` | Security |

---

## 10. Final Summary Table

| Concept | Technical Explanation | Mario Analogy |
|----------|-------------------|----------------|
| **API** | Interface that connects systems | Toad Messenger between castles |
| **REST** | Architecture style for web APIs | Toad's code of conduct |
| **GET** | Fetch information | "Bring me information" |
| **POST** | Create new resource | "Deliver this package" |
| **PUT** | Replace resource | "Swap everything for this" |
| **PATCH** | Partially update | "Fix just this part" |
| **DELETE** | Remove resource | "Destroy this" |
| **200 OK** | Success | Mission accomplished |
| **404 Not Found** | Resource doesn't exist | Castle not found |
| **500 Internal Error** | Server error | Castle on fire |
| **JSON** | Data format | Official language of the Mushroom Kingdom |
| **Frontend** | Visual interface | Luigi -- visual and agility |
| **Backend** | Logic and data | Toad -- guardian of treasures |
| **Full Stack** | Frontend + Backend | Mario -- does everything |
| **Endpoint** | URL of a resource | Address of a castle |

---

## References

1. MDN Web Docs -- HTTP Methods: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods
2. MDN Web Docs -- HTTP Status Codes: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
3. REST API Tutorial: https://restfulapi.net/
4. Microsoft Learn -- Azure API Management: https://learn.microsoft.com/azure/api-management/
5. Express.js Documentation: https://expressjs.com/
6. JSON.org: https://www.json.org/json-pt.html
7. Postman Learning Center: https://learning.postman.com/

---

*"In the Mushroom Kingdom, no castle works alone. They all depend on the Toad Messenger (API) to communicate. Learn to speak Toad's language, and you'll be able to connect any castle to any other."*

---

<div align="center">

⬅️ [Previous: Level 2-1: Environments](2-1-ambientes.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 2-3: Security](2-3-seguranca.md)

</div>

*Next Warp Pipe: Level 2-3 -- Protection Spells: Security*
