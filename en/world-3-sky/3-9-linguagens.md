---
title: "Level 3-9 -- RPG Classes: Programming Languages"
description: "Discover the main programming languages -- Python, JavaScript, TypeScript, C#, Java, Go, Rust, C/C++, HTML/CSS and SQL -- like character classes in an RPG, each with strengths, weaknesses and specializations"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agentic-devops
  - mario
  - world-3
  - linguagens
  - python
  - javascript
  - typescript
  - csharp
  - java
  - go
  - rust
---

# Level 3-9 -- RPG Classes: Programming Languages

---

## Change Log

| Version | Date       | Author                                  | Description        |
|---------|------------|----------------------------------------|--------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation  |

---

## Table of Contents

- [Prologue: The Class Selection Screen](#prologue-the-class-selection-screen)
- [1. Why Are There So Many Languages?](#1-why-are-there-so-many-languages)
  - [1.1 The Need for Diversity](#11-the-need-for-diversity)
  - [1.2 Compiled vs Interpreted](#12-compiled-vs-interpreted)
  - [1.3 Typing: Strong vs Weak, Static vs Dynamic](#13-typing-strong-vs-weak-static-vs-dynamic)
- [2. Python -- The Mage (Versatile and Powerful)](#2-python----the-mage-versatile-and-powerful)
  - [2.1 Character Sheet](#21-character-sheet)
  - [2.2 When to Use Python](#22-when-to-use-python)
  - [2.3 Code Example](#23-code-example)
  - [2.4 Ecosystem and Tools](#24-ecosystem-and-tools)
- [3. JavaScript -- The Rogue (Fast and Omnipresent)](#3-javascript----the-rogue-fast-and-omnipresent)
  - [3.1 Character Sheet](#31-character-sheet)
  - [3.2 When to Use JavaScript](#32-when-to-use-javascript)
  - [3.3 The Rogue's Traps](#33-the-rogues-traps)
  - [3.4 Code Example](#34-code-example)
- [4. TypeScript -- The Armored Rogue](#4-typescript----the-armored-rogue)
  - [4.1 Character Sheet](#41-character-sheet)
  - [4.2 Why TypeScript Exists](#42-why-typescript-exists)
  - [4.3 Comparative Example: JS vs TS](#43-comparative-example-js-vs-ts)
  - [4.4 When to Use TypeScript](#44-when-to-use-typescript)
- [5. C# -- The Knight (Microsoft's Champion)](#5-c----the-knight-microsofts-champion)
  - [5.1 Character Sheet](#51-character-sheet)
  - [5.2 The .NET Ecosystem](#52-the-net-ecosystem)
  - [5.3 Code Example](#53-code-example)
  - [5.4 When to Use C#](#54-when-to-use-c)
- [6. Java -- The Tank (Old, Reliable, Heavy)](#6-java----the-tank-old-reliable-heavy)
  - [6.1 Character Sheet](#61-character-sheet)
  - [6.2 Write Once, Run Anywhere](#62-write-once-run-anywhere)
  - [6.3 When to Use Java](#63-when-to-use-java)
- [7. Go -- The Speed Runner](#7-go----the-speed-runner)
  - [7.1 Character Sheet](#71-character-sheet)
  - [7.2 The Philosophy of Go](#72-the-philosophy-of-go)
  - [7.3 When to Use Go](#73-when-to-use-go)
- [8. Rust -- The Indestructible Fortress](#8-rust----the-indestructible-fortress)
  - [8.1 Character Sheet](#81-character-sheet)
  - [8.2 The Borrow Checker: The Merciless Guard](#82-the-borrow-checker-the-merciless-guard)
  - [8.3 When to Use Rust](#83-when-to-use-rust)
- [9. C and C++ -- The Legendary Elders](#9-c-and-c----the-legendary-elders)
  - [9.1 Character Sheet](#91-character-sheet)
  - [9.2 When to Use C/C++](#92-when-to-use-cc)
- [10. HTML and CSS -- The Visual Artisans](#10-html-and-css----the-visual-artisans)
  - [10.1 Character Sheet](#101-character-sheet)
  - [10.2 HTML: The Castle's Structure](#102-html-the-castles-structure)
  - [10.3 CSS: The Castle's Decoration](#103-css-the-castles-decoration)
- [11. SQL -- The Castle's Librarian](#11-sql----the-castles-librarian)
  - [11.1 Character Sheet](#111-character-sheet)
  - [11.2 Essential Commands](#112-essential-commands)
  - [11.3 When to Use SQL](#113-when-to-use-sql)
- [12. Comparative Table: All Classes](#12-comparative-table-all-classes)
- [13. How to Choose Your Class](#13-how-to-choose-your-class)
  - [13.1 Decision Guide by Goal](#131-decision-guide-by-goal)
  - [13.2 The Council of the Wise](#132-the-council-of-the-wise)
- [14. Polyglotism: The Multiclass Warrior](#14-polyglotism-the-multiclass-warrior)
- [References](#references)

---

## Prologue: The Class Selection Screen

Sofia arrived at an enormous room in the Mushroom Kingdom. On the walls, dozens of weapons and armor gleamed -- each with unique powers. In the center, a hologram spun showing character sheets.

Toadette appeared with a thick book under her arm.

*"Sofia, up until now you've learned the tools of the trade -- terminal, Git, editors. But you haven't chosen your CLASS yet. In every RPG, you need to choose: will you be a Mage? A Rogue? A Knight? A Tank? Each class has different strengths, weaknesses, and specializations."*

Sofia looked confused. *"But do I have to choose just one?"*

Toadette smiled. *"In the real world, the best adventurers are MULTICLASS -- they master one main class and know several others. But first, you need to understand each one. Welcome to Level 3-9: the Class Selection Screen."*

---

## 1. Why Are There So Many Languages?

### 1.1 The Need for Diversity

There are hundreds of programming languages because **different problems require different tools**. You don't use a hammer to tighten a screw, and you don't use a screwdriver to drive a nail.

> **MARIO ANALOGY:** Each Mario level requires a different approach. Water levels need swimming. Sky levels need flying. Ice levels need balance. A single skill doesn't solve everything. Likewise, a single language isn't ideal for everything.

### 1.2 Compiled vs Interpreted

| Type | How it works | Speed | Error detection | Examples |
|------|-------------|-------|----------------|----------|
| **Compiled** | Entire code translated BEFORE running | Fast | Before execution | C, C++, Rust, Go |
| **Interpreted** | Code translated LINE BY LINE while running | Slower | During execution | Python, Ruby, PHP |
| **JIT (Just-In-Time)** | Mix: interprets first, compiles the hot parts | Medium-fast | Mixed | JavaScript, Java, C# |

> **MARIO ANALOGY:** Compiled languages are like **building the entire level before playing** -- takes a while to build, but the level runs perfectly. Interpreted languages are like **building the level while Mario runs** -- more flexible, but there may be surprises along the way. JIT is like having a **fast builder running ahead** of Mario, building the level just a few meters ahead.

### 1.3 Typing: Strong vs Weak, Static vs Dynamic

| Type | Meaning | Example | Languages |
|------|---------|---------|-----------|
| **Static** | Types defined before running | `int x = 5;` -- x is ALWAYS an integer | TypeScript, C#, Java, Go, Rust |
| **Dynamic** | Types defined while running | `x = 5` then `x = "text"` -- x changes | Python, JavaScript, Ruby, PHP |
| **Strong** | Doesn't mix types without permission | `"5" + 3` = ERROR | Python, Rust, Java |
| **Weak** | Mixes types "magically" | `"5" + 3` = `"53"` (!) | JavaScript, PHP |

> **MARIO ANALOGY:** Static typing is like **declaring at the beginning of the level what weapon you'll use** -- if you said "sword," you can't use a bow mid-level. Dynamic typing is like being able to **swap weapons at any time**. Strong typing is like a **guard who checks if you're using the right weapon**. Weak typing is like a guard who says "eh, close enough" and lets you through.

---

## 2. Python -- The Mage (Versatile and Powerful)

### 2.1 Character Sheet

```
╔════════════════════════════════════════╗
║  CLASS: MAGE                           ║
║  NAME: Python                          ║
║  CREATOR: Guido van Rossum (1991)      ║
║                                        ║
║  STATS:                                ║
║  Strength ......... ██████░░░░  6/10   ║
║  Speed ............ ████░░░░░░  4/10   ║
║  Versatility ...... ██████████ 10/10   ║
║  Ease of Use ...... █████████░  9/10   ║
║  Ecosystem ........ █████████░  9/10   ║
║  Employability .... █████████░  9/10   ║
║                                        ║
║  TYPE: Interpreted, Dynamic, Strong    ║
║  PARADIGM: Multi-paradigm             ║
╚════════════════════════════════════════╝
```

> **MARIO ANALOGY:** Python is the **Mage** -- versatile, powerful, capable of doing almost anything. Masters AI spells, automation, web, data. Not the fastest in melee combat (performance), but its spells reach everything. Ideal for beginners because the spells are easy to learn.

### 2.2 When to Use Python

| Scenario | Strength | Example |
|----------|----------|---------|
| **AI / Machine Learning** | Dominant | TensorFlow, PyTorch, Scikit-learn |
| **Data Science** | Dominant | Pandas, NumPy, Matplotlib |
| **Automation / Scripts** | Excellent | Automating repetitive tasks |
| **Web Backend** | Good | Django, Flask, FastAPI |
| **DevOps** | Good | Ansible, infrastructure scripts |
| **Games** | Educational | Pygame (not for AAA production) |
| **Mobile** | Weak | Not the best choice |
| **Frontend** | No | Python doesn't run in the browser |

### 2.3 Code Example

```python
# Python is famous for being readable -- almost like English
def greeting(name: str) -> str:
    """Returns a personalized greeting."""
    return f"Welcome to the Mushroom Kingdom, {name}!"

# List of power-ups
power_ups = ["Mushroom", "Fire Flower", "Star", "Cape"]

# Filter power-ups that start with "S"
special = [p for p in power_ups if p.startswith("S")]
print(special)  # ["Star"]

# Classes
class Character:
    def __init__(self, name: str, power: int):
        self.name = name
        self.power = power

    def attack(self) -> str:
        return f"{self.name} attacks with power {self.power}!"

mario = Character("Mario", 10)
print(mario.attack())  # "Mario attacks with power 10!"
```

### 2.4 Ecosystem and Tools

| Tool | What it's for |
|------|--------------|
| **pip** | Package manager |
| **venv / conda** | Virtual environments |
| **Django** | Full-stack web framework |
| **FastAPI** | Modern and fast API |
| **Flask** | Micro web framework |
| **pytest** | Testing framework |
| **black** | Code formatter |
| **mypy** | Type checker |
| **Jupyter** | Interactive notebooks (data science) |

---

## 3. JavaScript -- The Rogue (Fast and Omnipresent)

### 3.1 Character Sheet

```
╔════════════════════════════════════════╗
║  CLASS: ROGUE                          ║
║  NAME: JavaScript                      ║
║  CREATOR: Brendan Eich (1995)          ║
║                                        ║
║  STATS:                                ║
║  Strength ......... ███████░░░  7/10   ║
║  Speed ............ ████████░░  8/10   ║
║  Versatility ...... █████████░  9/10   ║
║  Ease of Use ...... ███████░░░  7/10   ║
║  Ecosystem ........ ██████████ 10/10   ║
║  Employability .... ██████████ 10/10   ║
║                                        ║
║  TYPE: JIT, Dynamic, Weak              ║
║  PARADIGM: Multi-paradigm             ║
╚════════════════════════════════════════╝
```

> **MARIO ANALOGY:** JavaScript is the **Rogue** -- fast, present in ALL places (browser, server, mobile, desktop), and incredibly versatile. But it has hidden traps (type coercion, confusing `this`, `undefined` vs `null`). An experienced Rogue is devastating; a novice Rogue falls into their own traps.

### 3.2 When to Use JavaScript

| Scenario | Strength | Example |
|----------|----------|---------|
| **Web Frontend** | Absolute dominance | React, Vue, Angular |
| **Backend** | Excellent | Node.js, Express, Fastify |
| **Full-stack** | Excellent | Next.js, Nuxt.js |
| **Mobile** | Good | React Native, Ionic |
| **Desktop** | Good | Electron (VS Code is Electron!) |
| **Serverless** | Excellent | AWS Lambda, Azure Functions |
| **AI/ML** | Growing | TensorFlow.js |
| **IoT** | Possible | Johnny-Five |

**Notable fact:** JavaScript is the **only language** that runs natively in all browsers in the world. That's why it's inescapable for web development.

### 3.3 The Rogue's Traps

JavaScript has infamous behaviors that surprise beginners:

```javascript
// Type coercion: JavaScript "guesses" what you meant
"5" + 3        // "53" (concatenated strings!)
"5" - 3        // 2   (did math!)
"5" * "3"      // 15  (did math!)
true + true    // 2   (true = 1, so 1 + 1 = 2)
[] + []        // ""  (two empty arrays = empty string?!)
[] + {}        // "[object Object]"
{} + []        // 0   (?????)

// Loose vs strict comparison
0 == ""        // true  (DANGER! Use ===)
0 === ""       // false (correct!)
null == undefined  // true
null === undefined // false

// Bizarre typeof
typeof null     // "object" (historical bug, never fixed)
typeof NaN      // "number" (Not-a-Number is... a number?)
typeof []       // "object" (array is an object?)
```

> **MARIO ANALOGY:** These traps are like **invisible blocks** in Mario's path. You're running normally and suddenly hit a block you couldn't see. Experienced Rogues know all the invisible blocks and dodge them; beginners run right into them.

### 3.4 Code Example

```javascript
// Modern JavaScript (ES6+)
const greeting = (name) => `Welcome to the Mushroom Kingdom, ${name}!`;

// Destructuring
const character = { name: "Mario", power: 10, lives: 3 };
const { name, power } = character;

// Async/Await (asynchronous operations)
async function fetchTasks() {
  try {
    const response = await fetch("/api/tarefas");
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
}

// Array methods (very commonly used!)
const powerUps = ["Mushroom", "Fire Flower", "Star", "Cape"];
const large = powerUps.filter(p => p.length > 5);
const names = powerUps.map(p => p.toUpperCase());
const total = powerUps.reduce((acc, p) => acc + p.length, 0);
```

---

## 4. TypeScript -- The Armored Rogue

### 4.1 Character Sheet

```
╔════════════════════════════════════════╗
║  CLASS: ARMORED ROGUE                  ║
║  NAME: TypeScript                      ║
║  CREATOR: Microsoft / Anders Hejlsberg ║
║  YEAR: 2012                            ║
║                                        ║
║  STATS:                                ║
║  Strength ......... ████████░░  8/10   ║
║  Speed ............ ████████░░  8/10   ║
║  Versatility ...... █████████░  9/10   ║
║  Ease of Use ...... ██████░░░░  6/10   ║
║  Ecosystem ........ ██████████ 10/10   ║
║  Employability .... ██████████ 10/10   ║
║                                        ║
║  TYPE: JIT (compiles to JS), Static    ║
║  PARADIGM: Multi-paradigm             ║
╚════════════════════════════════════════╝
```

> **MARIO ANALOGY:** TypeScript is the **Armored Rogue** -- has all the agility and versatility of JavaScript (Rogue), but with type armor that protects against traps. Moves a bit slower (needs to compile), but arrives alive at the end of the level much more often. It's like Mario picking up armor: becomes heavier, but protected.

### 4.2 Why TypeScript Exists

TypeScript was created by Microsoft to solve JavaScript's problems in large projects:

| JavaScript Problem | TypeScript Solution |
|-------------------|-------------------|
| Type errors only appear in production | Type errors appear in the editor |
| No reliable autocomplete | Perfect autocomplete |
| Hard to refactor large projects | Safe refactoring |
| Outdated documentation | Types are living documentation |
| Subtle coercion bugs | Compiler blocks before running |

### 4.3 Comparative Example: JS vs TS

```javascript
// JavaScript -- no protection
function calculateDamage(attacker, defender) {
  return attacker.power - defender.defense;
  // What if attacker.power doesn't exist? undefined - number = NaN
  // What if defender is null? TypeError in production!
}
```

```typescript
// TypeScript -- with type armor
interface Character {
  name: string;
  power: number;
  defense: number;
  lives: number;
}

function calculateDamage(attacker: Character, defender: Character): number {
  return attacker.power - defender.defense;
  // If you pass something without "power" or "defense", the compiler BLOCKS it
  // Before running. Before going to production. Before causing a bug.
}

// The editor shows an error IMMEDIATELY if you try:
calculateDamage("Mario", 42); // ERROR: string is not a Character!
```

### 4.4 When to Use TypeScript

**Short answer: whenever you would use JavaScript on a serious project.**

| Scenario | Recommendation |
|----------|---------------|
| Simple personal project | JavaScript is fine |
| Team project | TypeScript strongly recommended |
| Company project | TypeScript mandatory |
| Open source library | TypeScript recommended |
| Quick prototype (hackathon) | JavaScript might be faster |
| Anything with more than 1000 lines | TypeScript |

---

## 5. C# -- The Knight (Microsoft's Champion)

### 5.1 Character Sheet

```
╔════════════════════════════════════════╗
║  CLASS: KNIGHT                         ║
║  NAME: C# (C-Sharp)                   ║
║  CREATOR: Microsoft / Anders Hejlsberg ║
║  YEAR: 2000                            ║
║                                        ║
║  STATS:                                ║
║  Strength ......... █████████░  9/10   ║
║  Speed ............ ████████░░  8/10   ║
║  Versatility ...... ████████░░  8/10   ║
║  Ease of Use ...... ███████░░░  7/10   ║
║  Ecosystem ........ ████████░░  8/10   ║
║  Employability .... ████████░░  8/10   ║
║                                        ║
║  TYPE: Compiled (JIT), Static, Strong  ║
║  PARADIGM: OOP + Functional           ║
╚════════════════════════════════════════╝
```

> **MARIO ANALOGY:** C# is the **Knight** -- Microsoft's champion. Full armor (strong typing), powerful sword (performance), formal training (object-oriented). Excellent for building castles (enterprise applications), serving the kingdom (Azure/cloud), and protecting territories (security). Not as fast as the Rogue, but more resilient.

### 5.2 The .NET Ecosystem

C# lives within the **.NET** ecosystem, which includes:

| Component | What it's for | In Mario |
|-----------|--------------|----------|
| **.NET Runtime** | Engine that runs C# | The console that runs the game |
| **ASP.NET Core** | Web framework | Castle construction kit |
| **Entity Framework** | ORM for databases | Toad <-> Database translator |
| **MAUI** | Cross-platform apps | Play on any console |
| **Blazor** | Frontend with C# (instead of JS!) | Knight doing Rogue's work |
| **Azure SDK** | Azure integration | Access to the cloud kingdom |
| **Unity** | Game engine | Build your own Mario! |

### 5.3 Code Example

```csharp
// C# -- Object-oriented, typed, elegant
public class Character
{
    public string Name { get; set; }
    public int Power { get; set; }
    public int Lives { get; set; }

    public Character(string name, int power, int lives)
    {
        Name = name;
        Power = power;
        Lives = lives;
    }

    public string Attack() => $"{Name} attacks with power {Power}!";
}

// Usage
var mario = new Character("Mario", 10, 3);
Console.WriteLine(mario.Attack()); // "Mario attacks with power 10!"

// LINQ (elegant queries on collections)
var powerUps = new List<string> { "Mushroom", "Fire Flower", "Star", "Cape" };
var large = powerUps.Where(p => p.Length > 5).ToList();

// Async/Await (C# had it BEFORE JavaScript!)
public async Task<List<Task>> FetchTasksAsync()
{
    var response = await _httpClient.GetAsync("/api/tarefas");
    return await response.Content.ReadFromJsonAsync<List<Task>>();
}
```

### 5.4 When to Use C#

| Scenario | Strength | Details |
|----------|----------|---------|
| **Enterprise backend** | Dominant | APIs, microservices, corporate systems |
| **Azure Cloud** | Dominant | Native integrations, first-class SDKs |
| **Games (Unity)** | Dominant | Most indie games use Unity + C# |
| **Windows Desktop** | Excellent | WPF, WinForms, MAUI |
| **Cross-platform Mobile** | Good | MAUI, Xamarin |
| **Web frontend** | Growing | Blazor (WebAssembly) |
| **AI/ML** | Good | ML.NET, Semantic Kernel |

---

## 6. Java -- The Tank (Old, Reliable, Heavy)

### 6.1 Character Sheet

```
╔════════════════════════════════════════╗
║  CLASS: TANK                           ║
║  NAME: Java                            ║
║  CREATOR: James Gosling / Sun (1995)   ║
║                                        ║
║  STATS:                                ║
║  Strength ......... █████████░  9/10   ║
║  Speed ............ ███████░░░  7/10   ║
║  Versatility ...... ███████░░░  7/10   ║
║  Ease of Use ...... █████░░░░░  5/10   ║
║  Ecosystem ........ █████████░  9/10   ║
║  Employability .... █████████░  9/10   ║
║                                        ║
║  TYPE: Compiled (JIT/JVM), Static      ║
║  PARADIGM: OOP                         ║
╚════════════════════════════════════════╝
```

> **MARIO ANALOGY:** Java is the **Tank** -- slow to start (verbose, lots of configuration), but once it gets going, it's UNSTOPPABLE. Runs on any terrain (JVM = any operating system). Used in large battles (banking systems, telecommunications, government). Not elegant, but indestructible in prolonged combat.

### 6.2 Write Once, Run Anywhere

Java's motto is "write once, run anywhere" thanks to the JVM (Java Virtual Machine):

```
Java Code (.java)
     |
     v
javac Compiler
     |
     v
Bytecode (.class)  <-- Intermediate code
     |
     v
JVM (Java Virtual Machine)  <-- Exists for Windows, Mac, Linux
     |
     v
Result
```

### 6.3 When to Use Java

| Scenario | Strength |
|----------|----------|
| **Android** | Historically dominant (now Kotlin shares the space) |
| **Enterprise backend** | Banks, telecommunications, government |
| **Big Data** | Hadoop, Spark, Kafka -- all are Java |
| **Microservices** | Spring Boot is extremely popular |
| **Legacy systems** | Millions of Java systems in the world |

---

## 7. Go -- The Speed Runner

### 7.1 Character Sheet

```
╔════════════════════════════════════════╗
║  CLASS: SPEED RUNNER                   ║
║  NAME: Go (Golang)                     ║
║  CREATOR: Google (2009)                ║
║                                        ║
║  STATS:                                ║
║  Strength ......... ████████░░  8/10   ║
║  Speed ............ █████████░  9/10   ║
║  Versatility ...... ██████░░░░  6/10   ║
║  Ease of Use ...... ████████░░  8/10   ║
║  Ecosystem ........ ███████░░░  7/10   ║
║  Employability .... ████████░░  8/10   ║
║                                        ║
║  TYPE: Compiled, Static, Strong        ║
║  PARADIGM: Procedural + Concurrency   ║
╚════════════════════════════════════════╝
```

> **MARIO ANALOGY:** Go is the **Speed Runner** -- built for speed and efficiency. Compiles in seconds, single binary with no dependencies, lightweight and fast. Ideal for levels where every millisecond counts (microservices, CLIs, infrastructure). Doesn't have elaborate spells (no generics until recently, no inheritance), but what it does, it does FAST.

### 7.2 The Philosophy of Go

Go was created by Google to solve scale problems:

- **Radical simplicity**: few keywords, few ways to do things
- **Fast compilation**: seconds, not minutes
- **Native concurrency**: goroutines and channels
- **Single binary**: no external dependencies for deployment
- **Opinionated**: `gofmt` formats code automatically -- no style debates

```go
package main

import "fmt"

// Simple function
func greeting(name string) string {
    return fmt.Sprintf("Welcome to the Mushroom Kingdom, %s!", name)
}

// Goroutine (lightweight concurrency)
func main() {
    go func() {
        fmt.Println("Running in parallel!")
    }()

    fmt.Println(greeting("Sofia"))
}
```

### 7.3 When to Use Go

| Scenario | Strength |
|----------|----------|
| **CLIs and tools** | Docker, Kubernetes, Terraform -- all written in Go |
| **Microservices** | Lightweight binary, simple deployment |
| **High-performance APIs** | Thousands of requests per second |
| **DevOps/Infrastructure** | The dominant cloud-native language |
| **Proxy/Load Balancer** | Native concurrency |

---

## 8. Rust -- The Indestructible Fortress

### 8.1 Character Sheet

```
╔════════════════════════════════════════╗
║  CLASS: INDESTRUCTIBLE FORTRESS        ║
║  NAME: Rust                            ║
║  CREATOR: Mozilla (2010)               ║
║                                        ║
║  STATS:                                ║
║  Strength ......... ██████████ 10/10   ║
║  Speed ............ ██████████ 10/10   ║
║  Versatility ...... ███████░░░  7/10   ║
║  Ease of Use ...... ███░░░░░░░  3/10   ║
║  Ecosystem ........ ██████░░░░  6/10   ║
║  Employability .... ███████░░░  7/10   ║
║                                        ║
║  TYPE: Compiled, Static, Strong        ║
║  PARADIGM: Multi-paradigm             ║
╚════════════════════════════════════════╝
```

> **MARIO ANALOGY:** Rust is the **Indestructible Fortress**. Maximum performance (C/C++ level) WITH memory safety guaranteed by the compiler. It's like building a castle that is simultaneously fast to traverse AND impossible to invade. The cost? Learning to build is MUCH harder. The Borrow Checker (merciless guard) rejects your code if it's not perfect. But once built, the castle is impregnable.

### 8.2 The Borrow Checker: The Merciless Guard

The "borrow checker" is the system that makes Rust so safe:

```rust
fn main() {
    let s1 = String::from("Mario");  // s1 owns the string
    let s2 = s1;                     // ownership TRANSFERRED to s2

    // println!("{}", s1);  // ERROR! s1 no longer owns it!
    println!("{}", s2);     // OK! s2 is the owner now

    // Borrowing
    let s3 = String::from("Luigi");
    let len = calculate_length(&s3);  // Borrows s3, doesn't transfer
    println!("{} has {} letters", s3, len); // s3 is still valid!
}

fn calculate_length(s: &String) -> usize {
    s.len()
}
```

> **MARIO ANALOGY:** In Rust, each item (value) has exactly ONE owner. If Mario passes the Mushroom to Luigi, Mario no longer has the Mushroom. If Mario LENDS the Mushroom (reference), Luigi can LOOK but can't MODIFY (unless it's a mutable borrow). These rules are strict, but they guarantee that no item mysteriously disappears or gets duplicated.

### 8.3 When to Use Rust

| Scenario | Strength |
|----------|----------|
| **Operating systems** | Linux kernel accepts Rust! |
| **Browsers** | Firefox uses Rust |
| **WebAssembly** | Compilation to web with native performance |
| **Embedded/IoT** | No garbage collector, total control |
| **CLI tools** | ripgrep, exa, bat -- fast tools |
| **Blockchain** | Solana is written in Rust |

---

## 9. C and C++ -- The Legendary Elders

### 9.1 Character Sheet

```
╔════════════════════════════════════════╗
║  CLASS: LEGENDARY ELDER                ║
║  NAME: C (1972) / C++ (1979)           ║
║  CREATOR: Dennis Ritchie / Bjarne S.   ║
║                                        ║
║  STATS:                                ║
║  Strength ......... ██████████ 10/10   ║
║  Speed ............ ██████████ 10/10   ║
║  Versatility ...... ████████░░  8/10   ║
║  Ease of Use ...... ██░░░░░░░░  2/10   ║
║  Ecosystem ........ ███████░░░  7/10   ║
║  Employability .... ███████░░░  7/10   ║
║                                        ║
║  TYPE: Compiled, Static, Weak          ║
║  PARADIGM: Procedural (C) / OOP (C++) ║
╚════════════════════════════════════════╝
```

> **MARIO ANALOGY:** C and C++ are the **Legendary Elders** -- the founders of the kingdom. All other characters were built on their legacy. Linux, Windows, macOS, Python, JavaScript, Java -- all written in C or C++ under the hood. Absolute power, but with great power comes great responsibility (and memory bugs). They're like the original map of the first Mario -- every modern game was built on that foundation.

### 9.2 When to Use C/C++

| Scenario | Language |
|----------|----------|
| **Operating systems** | C (Linux, Windows) |
| **Drivers and firmware** | C |
| **AAA Games** | C++ (Unreal Engine) |
| **Compilers** | C/C++ |
| **Databases** | C/C++ (PostgreSQL is written in C!) |
| **Embedded** | C |
| **Critical performance** | C++ |

---

## 10. HTML and CSS -- The Visual Artisans

### 10.1 Character Sheet

```
╔════════════════════════════════════════╗
║  CLASS: VISUAL ARTISAN                 ║
║  NAME: HTML + CSS                      ║
║  NOTE: These are NOT programming       ║
║        languages! They are markup      ║
║        (HTML) and styling (CSS)        ║
║        languages                       ║
║                                        ║
║  STATS:                                ║
║  Strength ......... ███░░░░░░░  3/10   ║
║  Speed ............ ██████████ 10/10   ║
║  Versatility ...... █████░░░░░  5/10   ║
║  Ease of Use ...... █████████░  9/10   ║
║  Ecosystem ........ ████████░░  8/10   ║
║  Employability .... ██████████ 10/10   ║
║                                        ║
║  TYPE: Markup + Style (declarative)    ║
╚════════════════════════════════════════╝
```

> **MARIO ANALOGY:** HTML and CSS are the **Visual Artisans** of the kingdom. HTML is the architect who defines the castle's STRUCTURE (walls, doors, windows). CSS is the decorator who defines the APPEARANCE (colors, sizes, positions). Without them, there is no visual interface. They don't fight (they're not programming languages), but without them, there would be no castles to protect.

### 10.2 HTML: The Castle's Structure

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>TodoApp - Mushroom Kingdom</title>
</head>
<body>
    <header>
        <h1>My Tasks</h1>
        <nav>
            <a href="#pending">Pending</a>
            <a href="#done">Done</a>
        </nav>
    </header>

    <main>
        <section id="pending">
            <h2>Pending Tasks</h2>
            <ul>
                <li>Save Princess Peach</li>
                <li>Collect 100 coins</li>
                <li>Defeat Bowser</li>
            </ul>
        </section>
    </main>

    <footer>
        <p>Mushroom Kingdom - 2026</p>
    </footer>
</body>
</html>
```

### 10.3 CSS: The Castle's Decoration

```css
/* CSS defines HOW things look */
body {
    font-family: 'Press Start 2P', cursive; /* Pixel art style font */
    background-color: #5c94fc;              /* Mario sky blue */
    color: #fff;
}

header {
    background-color: #e52521;  /* Mario red */
    padding: 20px;
    text-align: center;
}

.pending-task {
    background-color: #fbd000;  /* Coin yellow */
    border-radius: 8px;
    padding: 16px;
    margin: 8px 0;
}

.completed-task {
    background-color: #43b047;  /* 1-UP green */
    text-decoration: line-through;
}

/* Responsive: works on mobile too! */
@media (max-width: 768px) {
    header { padding: 10px; }
    .pending-task { margin: 4px 0; }
}
```

---

## 11. SQL -- The Castle's Librarian

### 11.1 Character Sheet

```
╔════════════════════════════════════════╗
║  CLASS: LIBRARIAN                      ║
║  NAME: SQL (Structured Query Language) ║
║  CREATOR: IBM (1970s)                  ║
║                                        ║
║  STATS:                                ║
║  Strength ......... ████████░░  8/10   ║
║  Speed ............ ████████░░  8/10   ║
║  Versatility ...... ████░░░░░░  4/10   ║
║  Ease of Use ...... ████████░░  8/10   ║
║  Ecosystem ........ █████████░  9/10   ║
║  Employability .... █████████░  9/10   ║
║                                        ║
║  TYPE: Declarative, domain-specific    ║
╚════════════════════════════════════════╝
```

> **MARIO ANALOGY:** SQL is the **Castle's Librarian** -- doesn't fight, doesn't build, but KNOWS WHERE EVERYTHING IS. Want to find all coins collected in World 3? SQL finds them. Want to know how many lives Mario lost in level 2-4? SQL answers. Every castle (application) that stores treasures (data) needs a Librarian.

### 11.2 Essential Commands

```sql
-- Create table (shelf in the library)
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    done BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Insert data (add book to shelf)
INSERT INTO tasks (title) VALUES ('Save the Princess');
INSERT INTO tasks (title) VALUES ('Collect 100 coins');

-- Query data (search for a book)
SELECT * FROM tasks;                          -- Everything
SELECT * FROM tasks WHERE done = false;       -- Only pending
SELECT COUNT(*) FROM tasks;                   -- How many exist

-- Update data (correct information in a book)
UPDATE tasks SET done = true WHERE id = 1;

-- Delete data (remove a book)
DELETE FROM tasks WHERE id = 2;

-- Advanced queries
SELECT title, created_at
FROM tasks
WHERE done = false
ORDER BY created_at DESC
LIMIT 10;
```

### 11.3 When to Use SQL

| Database | Type | SQL Language | When to Use |
|----------|------|-------------|-------------|
| **PostgreSQL** | Relational | Standard SQL + extensions | Most projects |
| **MySQL** | Relational | Standard SQL | Web, WordPress, simple projects |
| **SQLite** | Relational (file) | Standard SQL | Mobile apps, prototyping |
| **SQL Server** | Relational | T-SQL | Microsoft ecosystem |
| **MongoDB** | NoSQL (document) | Doesn't use SQL (uses its own queries) | Flexible data, native JSON |

---

## 12. Comparative Table: All Classes

| Language | RPG Class | Best For | Difficulty | Salary (trend) |
|----------|-----------|----------|------------|----------------|
| **Python** | Mage | AI, data, automation | Easy | High (AI is trending) |
| **JavaScript** | Rogue | Web full-stack | Medium | High (massive demand) |
| **TypeScript** | Armored Rogue | Professional web | Medium | High |
| **C#** | Knight | Enterprise, Azure, Unity | Medium | High |
| **Java** | Tank | Enterprise, Android | Medium-High | High |
| **Go** | Speed Runner | DevOps, microservices | Medium | Very High |
| **Rust** | Fortress | Systems, performance | Very High | Very High |
| **C/C++** | Elder | Systems, AAA games | Very High | High |
| **HTML/CSS** | Artisan | Visual interface | Easy | Medium (alone) |
| **SQL** | Librarian | Databases | Easy-Medium | High |

---

## 13. How to Choose Your Class

### 13.1 Decision Guide by Goal

| Your Goal | First Language | Second Language | Why |
|-----------|---------------|-----------------|-----|
| **Web full-stack** | JavaScript/TypeScript | Python or C# | JS dominates the frontend, is good on backend |
| **AI and Data Science** | Python | SQL | Python is dominant in AI, SQL for data |
| **Games** | C# (Unity) | C++ (Unreal) | Dominant engines use these |
| **Mobile** | JavaScript (React Native) | Swift/Kotlin (native) | Cross-platform vs native |
| **DevOps/Cloud** | Python | Go | Scripts + cloud-native tools |
| **Enterprise/Microsoft** | C# | TypeScript | .NET ecosystem + frontend |
| **Systems/Performance** | Rust | C | Memory safety + legacy |
| **Just getting started** | Python | JavaScript | Easiest, most learning resources |

### 13.2 The Council of the Wise

Toadette gathered the guild's wise ones to give advice to Sofia:

- **"There is no perfect language."** Each one makes trade-offs. Accept it.
- **"Learn concepts, not syntax."** Those who understand programming logic switch languages easily.
- **"Start with one, expand to two."** Don't try to learn 5 at the same time.
- **"Follow the market, but also your passion."** If AI excites you, go with Python. If web fascinates you, go with JavaScript.
- **"The best language is the one that solves YOUR problem."** Don't get caught up in language wars.

---

## 14. Polyglotism: The Multiclass Warrior

The best developers are **polyglots** -- they speak several "languages." They don't master all of them equally, but they know enough to choose the right one for each situation.

**T-shaped skills model:**

```
Breadth (broad knowledge)
|
|  Python   JS/TS   C#   SQL   Go   HTML/CSS   Rust
|  -------- ------- ---- ----- ---- ---------- -----
|     |        |      |    |     |      |         |
|     |        |      |    |     |      |         |
|     |        |      |    |     |      |         |
|     v        |      |    |     |      |         |
|  (deep)      |      |    |     |      |         |
|              v      |    |     |      |         |
|           (deep)    |    |     |      |         |
|                     v    |     |      |         |
|                          |     |      |         |
Depth (specialization)
```

> **MARIO ANALOGY:** The expert player doesn't master just one class -- they know when to use the Mage (Python) to solve data puzzles, when to switch to the Rogue (JS) for web agility levels, and when to summon the Knight (C#) for the enterprise battle. The secret is to have ONE OR TWO favorite classes and KNOW the others well enough to know when to call upon them.

---

## References

- [Python -- Official Site](https://www.python.org/)
- [JavaScript -- MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [TypeScript -- Official Site](https://www.typescriptlang.org/)
- [C# -- Microsoft Documentation](https://learn.microsoft.com/pt-br/dotnet/csharp/)
- [Java -- Oracle](https://www.oracle.com/java/)
- [Go -- Official Site](https://go.dev/)
- [Rust -- Official Site](https://www.rust-lang.org/)
- [MDN Web Docs -- HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [MDN Web Docs -- CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [PostgreSQL -- SQL Tutorial](https://www.postgresql.org/docs/current/tutorial.html)
- [Stack Overflow Developer Survey 2025](https://survey.stackoverflow.co/2025/)
- [TIOBE Index -- Language Ranking](https://www.tiobe.com/tiobe-index/)
- [GitHub Octoverse -- Most Used Languages](https://octoverse.github.com/)

---

*End of Level 3-9. Sofia now knows the available classes. In the next level, she learns about the weapons and armor each class can use: Frameworks and Libraries.*

---

<div align="center">

⬅️ [Previous: Level 3-8: Internet](3-8-internet.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 3-10: Frameworks](3-10-frameworks.md)

</div>
