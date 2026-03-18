---
title: "Level 3-8 -- The Mushroom Kingdom Pipes: How the Internet Works"
description: "Understand TCP/IP, HTTP/HTTPS, DNS, ports, request/response and status codes -- like the plumbing system (green pipes) that connects the entire Mushroom Kingdom"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agentic-devops
  - mario
  - world-3
  - internet
  - tcp-ip
  - http
  - dns
  - redes
---

# Level 3-8 -- The Mushroom Kingdom Pipes: How the Internet Works

---

## Change Log

| Version | Date       | Author                                  | Description        |
|---------|------------|----------------------------------------|--------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Initial creation  |

---

## Table of Contents

- [Prologue: The Mushroom Kingdom Plumbing](#prologue-the-mushroom-kingdom-plumbing)
- [1. What Is the Internet, Anyway?](#1-what-is-the-internet-anyway)
  - [1.1 The Network of Networks](#11-the-network-of-networks)
  - [1.2 A Brief History](#12-a-brief-history)
  - [1.3 Internet vs Web](#13-internet-vs-web)
- [2. TCP/IP: The Plumbing System](#2-tcpip-the-plumbing-system)
  - [2.1 The 4-Layer Model](#21-the-4-layer-model)
  - [2.2 IP: The Address of Each Pipe](#22-ip-the-address-of-each-pipe)
  - [2.3 TCP vs UDP: Reliable vs Fast Plumbing](#23-tcp-vs-udp-reliable-vs-fast-plumbing)
  - [2.4 How Data Travels](#24-how-data-travels)
- [3. HTTP and HTTPS: The Water in the Pipes](#3-http-and-https-the-water-in-the-pipes)
  - [3.1 What Is HTTP](#31-what-is-http)
  - [3.2 Anatomy of an HTTP Request](#32-anatomy-of-an-http-request)
  - [3.3 HTTP Methods: The Types of Messages](#33-http-methods-the-types-of-messages)
  - [3.4 HTTPS: Armored Pipes](#34-https-armored-pipes)
- [4. DNS: The Kingdom's Postal Service](#4-dns-the-kingdoms-postal-service)
  - [4.1 What Is DNS](#41-what-is-dns)
  - [4.2 How DNS Resolution Works](#42-how-dns-resolution-works)
  - [4.3 DNS Record Types](#43-dns-record-types)
  - [4.4 DNS in Practice](#44-dns-in-practice)
- [5. Ports: The Numbered Pipe Entrances](#5-ports-the-numbered-pipe-entrances)
  - [5.1 What Are Ports](#51-what-are-ports)
  - [5.2 Important Ports](#52-important-ports)
  - [5.3 Ports in Local Development](#53-ports-in-local-development)
- [6. Request and Response: Round Trip Through the Pipe](#6-request-and-response-round-trip-through-the-pipe)
  - [6.1 The Complete Cycle](#61-the-complete-cycle)
  - [6.2 Headers: Labels on the Package](#62-headers-labels-on-the-package)
  - [6.3 Body: The Package Contents](#63-body-the-package-contents)
- [7. Status Codes: The Response Codes](#7-status-codes-the-response-codes)
  - [7.1 The 5 Status Families](#71-the-5-status-families)
  - [7.2 The Most Important Status Codes](#72-the-most-important-status-codes)
  - [7.3 Status Codes with Mario Analogies](#73-status-codes-with-mario-analogies)
- [8. URLs: The Complete Address](#8-urls-the-complete-address)
  - [8.1 Anatomy of a URL](#81-anatomy-of-a-url)
  - [8.2 Query Parameters and Fragments](#82-query-parameters-and-fragments)
- [9. How Everything Connects: The Path of a Request](#9-how-everything-connects-the-path-of-a-request)
  - [9.1 Complete Step by Step](#91-complete-step-by-step)
  - [9.2 Visual Diagram](#92-visual-diagram)
- [10. Tools for Exploring the Network](#10-tools-for-exploring-the-network)
  - [10.1 curl: The Terminal Plumber](#101-curl-the-terminal-plumber)
  - [10.2 Browser DevTools: X-Ray of the Pipes](#102-browser-devtools-x-ray-of-the-pipes)
  - [10.3 Postman and Insomnia: Control Panel](#103-postman-and-insomnia-control-panel)
- [11. Final Summary Table](#11-final-summary-table)
- [References](#references)

---

## Prologue: The Mushroom Kingdom Plumbing

Sofia was building her TodoApp. The frontend ran in the browser, the backend on a Node.js server, and the database was PostgreSQL. Everything worked perfectly on her computer. But when she tried to access it from another device, nothing happened.

*"Why does my app only work on my machine?"* asked Sofia, frustrated.

Yoshi landed beside her and opened a huge map of the Mushroom Kingdom -- but it wasn't the usual level map. It was the map of the **plumbing system** -- the network of green pipes that connects ALL places in the kingdom.

*"Sofia,"* explained Yoshi, *"your app works on your machine because everything is in the same place. But when you want someone else to access it, you need the PIPES. The pipes are the Internet -- the plumbing system that connects all the computers in the world. And to use the pipes, you need to understand how they work."*

Yoshi pointed to a giant green pipe in the center of the map.

*"Welcome to Level 3-8. Here you learn how the Mushroom Kingdom pipes work -- and why Mario is, in fact, a plumber."*

---

## 1. What Is the Internet, Anyway?

### 1.1 The Network of Networks

The Internet is, fundamentally, a **network of networks**. Billions of computers connected by cables, fiber optics, satellites, and radio waves, all speaking the same "language" (protocols).

> **MARIO ANALOGY:** The Internet is the **green pipe system** of the Mushroom Kingdom. Each pipe connects two places. The ENTIRE network of pipes allows Mario to travel from any place to any other place in the kingdom. Without the pipes, each area would be isolated -- you could only access what is immediately around you.

**Impressive numbers (2025):**

- ~5 billion connected users
- ~1 billion websites
- ~400 thousand km of submarine fiber optic cables
- Average response time: 30-100 milliseconds between continents

### 1.2 A Brief History

| Year | Event | In Mario |
|------|-------|----------|
| 1969 | ARPANET: 4 connected computers | First pipe connecting 2 castles |
| 1983 | TCP/IP becomes the standard | Standardization of pipe types |
| 1989 | Tim Berners-Lee invents the World Wide Web | Public map of all pipes |
| 1993 | Mosaic browser: the web becomes visual | Pipes get transparent windows |
| 2007 | iPhone: internet in your pocket | Portable pocket pipe |
| 2020+ | Cloud computing dominates | Entire castles in the cloud |

### 1.3 Internet vs Web

**Internet** is the physical infrastructure (cables, routers, protocols). **Web** is a service that runs ON TOP of the internet (sites, pages, APIs).

| Concept | What It Is | In Mario |
|---------|-----------|----------|
| **Internet** | The network of cables and protocols | The physical pipes |
| **Web (WWW)** | Sites and pages accessible by browser | The areas the pipes lead to |
| **Email** | Another service on the internet | Letters sent through the pipes |
| **FTP** | File transfer | Large packages sent through the pipes |
| **DNS** | Translation of names to addresses | Postal service that finds the right pipe |

---

## 2. TCP/IP: The Plumbing System

### 2.1 The 4-Layer Model

TCP/IP (Transmission Control Protocol / Internet Protocol) is the set of rules that defines how data travels across the internet. It is organized into 4 layers:

```
╔══════════════════════════════════════════════════╗
║  4. APPLICATION  (HTTP, HTTPS, FTP, SMTP, DNS)   ║  <- What travels through the pipe
║  3. TRANSPORT    (TCP, UDP)                       ║  <- How the pipe guarantees delivery
║  2. INTERNET     (IP, ICMP)                       ║  <- Origin and destination address
║  1. ACCESS       (Ethernet, Wi-Fi, Fiber)         ║  <- The physical pipe
╚══════════════════════════════════════════════════╝
```

> **MARIO ANALOGY:** Think of the pipe system in 4 levels:
> 1. **The physical pipe** (green tube, metal, connected to the ground) = Access Layer
> 2. **The address written on the pipe** (World 1-1, World 3-2) = Internet Layer (IP)
> 3. **The system that ensures Mario arrives in one piece** (doesn't lose parts on the way) = Transport Layer (TCP)
> 4. **What Mario carries** (coins, mushrooms, letters) = Application Layer (HTTP)

### 2.2 IP: The Address of Each Pipe

Each device connected to the internet has an **IP address** -- a unique number that identifies that device on the network.

**IPv4** (the old standard, but still dominant):

```
192.168.1.100       <- Local address (your network)
8.8.8.8             <- Google DNS
20.60.2.65          <- An Azure server
```

**IPv6** (the new standard, with many more addresses):

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

**Types of IP addresses:**

| Type | Range | In Mario | Example |
|------|-------|----------|---------|
| **Localhost** | 127.0.0.1 | Inside your own room | Accessing your own computer |
| **Local network** | 192.168.x.x / 10.x.x.x | Inside your castle | Computers on the same Wi-Fi network |
| **Public** | Any other | Throughout the entire Mushroom Kingdom | Servers accessible via the internet |

### 2.3 TCP vs UDP: Reliable vs Fast Plumbing

| Characteristic | TCP | UDP |
|---------------|-----|-----|
| **Reliability** | Guarantees delivery of ALL packets | No guarantee (best effort) |
| **Order** | Delivers in the correct order | May arrive out of order |
| **Speed** | Slower (verifies everything) | Faster (doesn't verify) |
| **Connection** | Requires connection first (handshake) | Fire and forget |
| **Usage** | Web, email, file transfer | Live video, online games, DNS |

> **MARIO ANALOGY:**
> - **TCP** = Sending a package via **tracked mail**. You know exactly where it is, if it arrived, and you can complain if it's lost. Mario sends a registered letter and waits for the confirmation receipt.
> - **UDP** = **Shouting a message through the pipe** and hoping it arrives. Fast, but if part of the message gets lost along the way, tough luck. Ideal for when speed matters more than perfection (live video, multiplayer games).

### 2.4 How Data Travels

When you access a website, your data is:

1. **Split into packets** (small, numbered pieces)
2. **Wrapped with the address** of origin and destination (IP)
3. **Sent via different routes** (each packet can go through a different pipe!)
4. **Reassembled at the destination** (in the correct order, thanks to TCP)

```
Your Computer                               Server
[HTML Page]                                 [HTML Page]
     |                                           ^
     v                                           |
[Packet 1] [Packet 2] [Packet 3]    ->    [1] [2] [3] reassembled
     |          |          |
     v          v          v
  Route A    Route B    Route A      <-- Can go through different pipes!
```

> **MARIO ANALOGY:** It's like sending a **treasure map** cut into 3 pieces. Each piece goes through a different pipe (faster). At the destination, the pieces are reunited in the correct order to recompose the complete map.

---

## 3. HTTP and HTTPS: The Water in the Pipes

### 3.1 What Is HTTP

**HTTP** (HyperText Transfer Protocol) is the protocol that defines how browsers and servers communicate. It's the "language" they speak.

> **MARIO ANALOGY:** HTTP is the **water that flows through the pipes**. The pipes (TCP/IP) are the infrastructure. The water (HTTP) is what actually carries things from one place to another. When Mario enters a pipe, the water transports him to the destination.

**HTTP characteristics:**

- **Stateless**: Each request is independent. The server doesn't "remember" previous requests
- **Request-Response**: Always works in pairs -- question and answer
- **Text-based**: Messages are readable text (you can read an HTTP request!)

### 3.2 Anatomy of an HTTP Request

An HTTP request has 3 parts:

```http
GET /api/tarefas HTTP/1.1              <-- Request Line
Host: meuapp.com                       <-- Headers
Accept: application/json
Authorization: Bearer token123

                                       <-- Blank line (separates headers from body)
                                       <-- Body (empty for GET)
```

An HTTP response also has 3 parts:

```http
HTTP/1.1 200 OK                        <-- Status Line
Content-Type: application/json         <-- Headers
Content-Length: 125

[                                      <-- Body (response content)
  { "id": 1, "titulo": "Estudar HTTP", "feita": false },
  { "id": 2, "titulo": "Criar API", "feita": true }
]
```

### 3.3 HTTP Methods: The Types of Messages

| Method | What it does | Idempotent? | In Mario | Example |
|--------|-------------|-------------|----------|---------|
| **GET** | Fetch data | Yes | Look inside the "?" block | `GET /api/tarefas` |
| **POST** | Create something new | No | Put a coin in the block | `POST /api/tarefas` |
| **PUT** | Update completely | Yes | Replace all the block's contents | `PUT /api/tarefas/1` |
| **PATCH** | Update partially | No | Change just one coin inside the block | `PATCH /api/tarefas/1` |
| **DELETE** | Remove | Yes | Destroy the block | `DELETE /api/tarefas/1` |
| **HEAD** | Fetch only headers | Yes | Peek at the block without opening it | `HEAD /api/tarefas` |
| **OPTIONS** | See available methods | Yes | Ask what the block accepts | `OPTIONS /api/tarefas` |

**Idempotent** means: if you perform the same operation 10 times, the result is the same as doing it once. GET the same resource 10 times = same result. DELETE the same resource 10 times = same result (deleted on the first, the other 9 have no effect). But POST 10 times = 10 resources created!

### 3.4 HTTPS: Armored Pipes

**HTTPS** = HTTP + **TLS** (Transport Layer Security). The data is **encrypted** before traveling through the pipe.

```
HTTP:  You send "password: 12345" and anyone along the way can read it
HTTPS: You send "x8#kL!9@mZ" and only the destination can decode it
```

> **MARIO ANALOGY:** HTTP is a transparent glass pipe -- any Goomba looking from outside can see what's passing through. HTTPS is an **armored, opaque pipe** -- even if an enemy intercepts it, they can't see the content. The padlock in the browser indicates: "this pipe is armored."

**How HTTPS works (simplified):**

1. Your browser asks the server: "I want a secure connection"
2. Server sends its **certificate** (like an ID document)
3. Browser verifies if the certificate is valid
4. Both agree on a temporary **encryption key**
5. All data travels encrypted from here on

**NEVER** send sensitive data (passwords, tokens, credit cards) over HTTP. Always HTTPS.

---

## 4. DNS: The Kingdom's Postal Service

### 4.1 What Is DNS

**DNS** (Domain Name System) is the system that translates readable names (like `google.com`) into IP addresses (like `142.250.80.46`). Humans prefer names. Computers prefer numbers. DNS does the translation.

> **MARIO ANALOGY:** DNS is the **Mushroom Kingdom's postal service**. You don't need to know that Peach's Castle is at coordinates (142, 250, 80, 46). You just say "Peach's Castle" and the postal service knows the way. DNS translates pretty names into technical addresses.

### 4.2 How DNS Resolution Works

When you type `www.meuapp.com` in the browser:

```
1. Browser: "What's the IP of www.meuapp.com?"
       |
       v
2. Local cache: "I already know! It's 20.60.2.65" (if accessed before)
       |  (if it doesn't know...)
       v
3. Your ISP's DNS Resolver: "Let me ask..."
       |
       v
4. Root DNS Server: "I don't know meuapp.com, but .com is over there -->  "
       |
       v
5. TLD Server (.com): "meuapp.com? Ask Name Server X"
       |
       v
6. Authoritative Name Server: "www.meuapp.com = 20.60.2.65!"
       |
       v
7. Response travels back the same path to the browser
       |
       v
8. Browser connects to 20.60.2.65 via HTTP/HTTPS
```

> **MARIO ANALOGY:** Imagine you want to find "Bowser's Castle". You ask at the local information desk (cache). If they don't know, they ask the regional post office (resolver). The regional post office asks the kingdom's central post office (root). The central one says "Castles are in the castle department" (TLD). The castle department says "Bowser is at coordinates X,Y,Z" (authoritative). The response travels back the same path.

### 4.3 DNS Record Types

| Type | What it does | Example | In Mario |
|------|-------------|---------|----------|
| **A** | Name -> IPv4 | `meuapp.com` -> `20.60.2.65` | Castle name -> coordinates |
| **AAAA** | Name -> IPv6 | `meuapp.com` -> `2001:db8::1` | Expanded coordinates |
| **CNAME** | Name -> Another name | `www.meuapp.com` -> `meuapp.com` | Castle nickname |
| **MX** | Email server | `meuapp.com` -> `mail.meuapp.com` | Where the castle's post office is |
| **TXT** | Free text | Domain verification | Sign with information |
| **NS** | Name Server | Who responds for this domain | Who is the responsible mail carrier |
| **SOA** | Start of Authority | Domain information | Castle's birth certificate |

### 4.4 DNS in Practice

**Checking DNS in the terminal:**

```bash
# Find the IP of a domain
nslookup google.com

# Detailed information
dig google.com

# See step-by-step resolution
dig +trace google.com

# On Windows
nslookup google.com
```

**The hosts file (local DNS):**

Your computer has a file that works as local DNS:

```bash
# /etc/hosts (Mac/Linux) or C:\Windows\System32\drivers\etc\hosts (Windows)
127.0.0.1    localhost
127.0.0.1    meuapp.local
192.168.1.50 servidor-dev.local
```

> **MARIO ANALOGY:** The hosts file is like a **personal phone book** in your pocket. Before going to the post office to ask, you check your list first. If the number is there, you dial directly.

---

## 5. Ports: The Numbered Pipe Entrances

### 5.1 What Are Ports

A computer can run **many services** at the same time (web, email, database). Ports are **numbers** (0 to 65535) that identify which service should receive the communication.

> **MARIO ANALOGY:** Ports are the **numbered entrances of the pipes**. The castle has a single IP address but dozens of ports. Port 80 is the main entrance (HTTP). Port 443 is the secure entrance (HTTPS). Port 5432 is the secret entrance to the data vault (PostgreSQL). When you send a message, you need to say not only WHERE it's going, but WHICH PORT to use.

### 5.2 Important Ports

| Port | Service | What it's for | In Mario |
|------|---------|--------------|----------|
| **80** | HTTP | Sites without encryption | Castle's main entrance (no guard) |
| **443** | HTTPS | Sites with encryption | Main entrance with guard (secure) |
| **22** | SSH | Secure remote server access | Secret entrance for administrators |
| **3000** | Dev (Node/React) | Development server | Training port |
| **5432** | PostgreSQL | Database | Treasure vault |
| **3306** | MySQL | Database | Another vault |
| **27017** | MongoDB | NoSQL database | Unorganized vault (but fast) |
| **6379** | Redis | In-memory cache | Quick cabinet near the door |
| **8080** | HTTP Alternative | Proxy, Tomcat, dev | Alternative port |
| **25** | SMTP | Email sending | Mailbox |

### 5.3 Ports in Local Development

When you run applications locally, each one occupies a different port:

```bash
# React frontend running on port 3000
npm start              # http://localhost:3000

# Express backend running on port 4000
node server.js         # http://localhost:4000

# PostgreSQL running on port 5432
psql -h localhost -p 5432

# All at the same time, each on its own port!
```

**Classic error: "Port already in use"**

```bash
# Means: another process is already using this port
# Solution 1: Find out who's using it
lsof -i :3000

# Solution 2: Kill the process
kill -9 <PID>

# Solution 3: Use another port
PORT=3001 npm start
```

> **MARIO ANALOGY:** "Port already in use" is like trying to enter a pipe that **already has someone inside**. Two Marios don't fit in the same pipe. Either you wait for the other one to come out, or you use another pipe (another port).

---

## 6. Request and Response: Round Trip Through the Pipe

### 6.1 The Complete Cycle

All HTTP communication follows the **Request-Response** (question-answer) pattern:

```
CLIENT (Browser)                       SERVER (Backend)
     |                                      |
     |  --- REQUEST (question) ---------->  |
     |  "GET /api/tarefas"                  |
     |                                      | (processing...)
     |  <-- RESPONSE (answer) ----------   |
     |  "200 OK + task list"                |
     |                                      |
```

> **MARIO ANALOGY:** It's like sending a **message through the pipe and getting the answer back**. Mario sends "Hey Peach, do you have any coins there?" (request). The message travels through the pipe. Peach receives it, counts the coins, and sends back: "I have 42 coins!" (response). The pipe works in both directions.

### 6.2 Headers: Labels on the Package

Headers are **metadata** -- information ABOUT the message, not the content itself.

**Common Request headers:**

| Header | What it does | Example |
|--------|-------------|---------|
| `Host` | Which server | `Host: meuapp.com` |
| `Accept` | What type of response I accept | `Accept: application/json` |
| `Authorization` | My credentials | `Authorization: Bearer token123` |
| `Content-Type` | Type of content I'm sending | `Content-Type: application/json` |
| `User-Agent` | Who I am (browser) | `User-Agent: Chrome/120.0` |
| `Cookie` | Session data | `Cookie: session=abc123` |

**Common Response headers:**

| Header | What it does | Example |
|--------|-------------|---------|
| `Content-Type` | Type of content returned | `Content-Type: application/json` |
| `Content-Length` | Response size | `Content-Length: 1234` |
| `Set-Cookie` | Set cookie in the browser | `Set-Cookie: session=abc123` |
| `Cache-Control` | Cache rules | `Cache-Control: max-age=3600` |
| `Access-Control-Allow-Origin` | CORS -- who can access | `Access-Control-Allow-Origin: *` |

> **MARIO ANALOGY:** Headers are the **labels stuck on the package**. The label says: sender, recipient, content type ("fragile!"), shipping date, and special instructions. The package content is the body. The labels are the headers.

### 6.3 Body: The Package Contents

The body is the actual content. Not every request has a body:

- **GET** and **DELETE**: usually WITHOUT body
- **POST**, **PUT**, **PATCH**: usually WITH body

**Body example (JSON):**

```json
{
  "titulo": "Aprender sobre HTTP",
  "descricao": "Entender request/response",
  "feita": false,
  "prioridade": "alta"
}
```

---

## 7. Status Codes: The Response Codes

### 7.1 The 5 Status Families

Every HTTP response comes with a **status code** -- a 3-digit number that says what happened:

| Family | Range | Meaning | In Mario |
|--------|-------|---------|----------|
| **1xx** | 100-199 | Informational | "I got your request, hold on..." |
| **2xx** | 200-299 | SUCCESS | "Mission complete!" |
| **3xx** | 300-399 | Redirection | "You've been sent to another pipe" |
| **4xx** | 400-499 | CLIENT ERROR | "YOU made a mistake" |
| **5xx** | 500-599 | SERVER ERROR | "THE SERVER broke" |

### 7.2 The Most Important Status Codes

**Success (2xx):**

| Code | Name | Meaning |
|------|------|---------|
| **200** | OK | All good, here's what you asked for |
| **201** | Created | Created successfully |
| **204** | No Content | Done, but nothing to return |

**Redirection (3xx):**

| Code | Name | Meaning |
|------|------|---------|
| **301** | Moved Permanently | Permanently changed address |
| **302** | Found (Redirect) | Temporary redirect |
| **304** | Not Modified | Nothing changed, use the cache |

**Client Error (4xx):**

| Code | Name | Meaning |
|------|------|---------|
| **400** | Bad Request | Your request is malformed |
| **401** | Unauthorized | You didn't identify yourself |
| **403** | Forbidden | You identified yourself, but don't have permission |
| **404** | Not Found | The resource doesn't exist |
| **405** | Method Not Allowed | This endpoint doesn't accept this method |
| **409** | Conflict | Conflict with the current state |
| **422** | Unprocessable Entity | Invalid data |
| **429** | Too Many Requests | You sent too many requests |

**Server Error (5xx):**

| Code | Name | Meaning |
|------|------|---------|
| **500** | Internal Server Error | Something broke on the server |
| **502** | Bad Gateway | Proxy couldn't talk to the server |
| **503** | Service Unavailable | Server overloaded/maintenance |
| **504** | Gateway Timeout | Proxy waited too long, server didn't respond |

### 7.3 Status Codes with Mario Analogies

| Code | In Mario |
|------|----------|
| **200 OK** | Mario reached the end of the level successfully |
| **201 Created** | Mario built a new block |
| **204 No Content** | Mario opened the block but it was empty |
| **301 Moved** | The castle permanently moved to a new location |
| **304 Not Modified** | The castle is the same as last time you visited |
| **400 Bad Request** | Mario tried to enter the pipe upside down |
| **401 Unauthorized** | Mario tried to enter the castle without showing the invitation |
| **403 Forbidden** | Mario showed the invitation but isn't VIP enough |
| **404 Not Found** | Mario went to the address but the castle doesn't exist |
| **429 Too Many** | Mario hit the block too fast, block jammed |
| **500 Server Error** | The entire castle collapsed (the castle's fault!) |
| **503 Unavailable** | The castle is under renovation, come back later |

---

## 8. URLs: The Complete Address

### 8.1 Anatomy of a URL

```
https://www.meuapp.com:443/api/tarefas?status=pendente&limit=10#titulo
 |         |            |     |            |                      |
 |         |            |     |            |                      +-- Fragment
 |         |            |     |            +-- Query Parameters
 |         |            |     +-- Path
 |         |            +-- Port
 |         +-- Domain (Host)
 +-- Protocol (Scheme)
```

| Part | Example | What It Is | In Mario |
|------|---------|-----------|----------|
| **Protocol** | `https://` | How to connect | Pipe type (armored) |
| **Domain** | `www.meuapp.com` | Where the server is | Castle name |
| **Port** | `:443` | Which entrance | Castle door number |
| **Path** | `/api/tarefas` | Which resource | Which room of the castle |
| **Query** | `?status=pendente` | Filters and parameters | "I only want the gold coins" |
| **Fragment** | `#titulo` | Position on the page | "Go straight to the throne room" |

### 8.2 Query Parameters and Fragments

**Query Parameters** pass data in the URL:

```
GET /api/tarefas?status=pendente&limit=10&page=2

Parameters:
  status = pendente    (filter by status)
  limit  = 10          (maximum 10 results)
  page   = 2           (second page)
```

**Fragments** indicate a position on the page:

```
https://meusite.com/docs/api#autenticacao

The browser goes directly to the "autenticacao" section on the page
(fragments are NOT sent to the server -- only the browser uses them)
```

---

## 9. How Everything Connects: The Path of a Request

### 9.1 Complete Step by Step

When you type `https://www.meuapp.com/api/tarefas` in the browser:

1. **Browser checks local DNS cache** -- "Do I already know the IP?"
2. **If not, resolves DNS** -- Asks the DNS server (chain of questions)
3. **Receives IP**: `20.60.2.65`
4. **Opens TCP connection** with `20.60.2.65:443` (three-way handshake: SYN, SYN-ACK, ACK)
5. **Negotiates TLS** (certificate, encryption key)
6. **Sends encrypted HTTP request**
7. **Server receives**, processes, queries database
8. **Server sends response** with status 200 and JSON data
9. **Browser receives**, decrypts, renders
10. **Connection can be reused** (keep-alive) or closed

### 9.2 Visual Diagram

```
[You type URL]
       |
       v
[DNS Resolve] --> "meuapp.com = 20.60.2.65"
       |
       v
[TCP Connect] --> SYN -> SYN-ACK -> ACK (handshake)
       |
       v
[TLS Handshake] --> Certificate + Key (if HTTPS)
       |
       v
[HTTP Request] --> GET /api/tarefas HTTP/1.1
       |
       v
[Server Processes] --> Queries database, builds response
       |
       v
[HTTP Response] --> 200 OK + JSON
       |
       v
[Browser Renders] --> You see the page!
```

> **MARIO ANALOGY:** The complete path is: Mario decides to go to Peach's Castle (types URL). Checks the map to find the right pipe (DNS). Enters the pipe and handshakes with the guard (TCP). Shows ID and receives the secret key (TLS). Sends the encrypted message through the pipe (HTTP Request). Peach reads it, prepares the answer, and sends it back (Response). Mario receives and reads the answer (renders).

---

## 10. Tools for Exploring the Network

### 10.1 curl: The Terminal Plumber

`curl` is the command-line tool for making HTTP requests:

```bash
# Simple GET
curl https://api.github.com/users/octocat

# GET with visible headers
curl -v https://api.github.com/users/octocat

# POST with JSON body
curl -X POST https://api.meuapp.com/tarefas \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Aprender curl", "feita": false}'

# PUT
curl -X PUT https://api.meuapp.com/tarefas/1 \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Aprender curl", "feita": true}'

# DELETE
curl -X DELETE https://api.meuapp.com/tarefas/1

# Save response to file
curl -o resposta.json https://api.github.com/users/octocat

# View only headers
curl -I https://www.google.com
```

### 10.2 Browser DevTools: X-Ray of the Pipes

Open the browser DevTools (F12) and go to the **Network** tab:

- **Each line** = an HTTP request
- **Status** = the response code (200, 404, etc.)
- **Time** = how long it took
- **Size** = response size
- **Click a line** to see headers, body, detailed timing

**Pro tip:** Filter by type (XHR/Fetch to see only API calls, Doc to see HTML pages, etc.)

### 10.3 Postman and Insomnia: Control Panel

To test APIs visually, use tools like **Postman** or **Insomnia**:

- Graphical interface for creating requests
- Save collections of endpoints
- Define environment variables
- Generate documentation automatically
- Test with different scenarios

---

## 11. Final Summary Table

| Concept | What It Is | In Mario | Command/Tool |
|---------|-----------|----------|-------------|
| **Internet** | Global computer network | Complete pipe system | -- |
| **TCP/IP** | Communication protocols | Plumbing rules | `ping`, `traceroute` |
| **HTTP** | Web protocol | Water in the pipes | `curl`, browser |
| **HTTPS** | Encrypted HTTP | Armored pipes | Padlock in the browser |
| **DNS** | Name -> IP translation | Postal service | `nslookup`, `dig` |
| **Port** | Service entrance | Numbered castle door | `:3000`, `:443` |
| **Request** | Outgoing message | Question sent through the pipe | Headers + Body |
| **Response** | Return message | Answer coming through the pipe | Status + Headers + Body |
| **Status Code** | Operation result | Success, error, redirect | 200, 404, 500 |
| **URL** | Complete address | Full destination address | `protocol://domain:port/path` |

> **GOLDEN RULE:** Everything on the web is request and response. No matter how complex the application is, at its core, it's always: someone asks (request), someone answers (response), and the pipes (TCP/IP) carry the message from one side to the other.

---

## References

- [MDN Web Docs -- An Overview of HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview)
- [MDN Web Docs -- HTTP Status Codes](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
- [MDN Web Docs -- What is a URL?](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- [Cloudflare -- What is DNS?](https://www.cloudflare.com/pt-br/learning/dns/what-is-dns/)
- [Cloudflare -- What is TCP/IP?](https://www.cloudflare.com/pt-br/learning/ddos/glossary/tcp-ip/)
- [Cloudflare -- What is HTTPS?](https://www.cloudflare.com/pt-br/learning/ssl/what-is-https/)
- [curl -- Official Documentation](https://curl.se/docs/)
- [HTTP.cat -- Illustrated Status Codes](https://http.cat/)
- [Postman -- Documentation](https://learning.postman.com/docs/getting-started/overview/)
- [RFC 2616 -- HTTP/1.1](https://datatracker.ietf.org/doc/html/rfc2616)

---

*End of Level 3-8. Now that Sofia understands how the Mushroom Kingdom pipes work, it's time to choose her weapons: programming languages.*
