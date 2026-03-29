---
title: "Level 3-6 -- The Castle of Data: Databases"
description: "Databases demystified with a Mario analogy -- SQL as organized chests, NoSQL as mixed loot bags, CRUD as the castle's basic operations, and Prisma as Toad's magic assistant"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-3", "databases", "sql", "nosql", "postgresql", "mongodb", "prisma"]
---

# Level 3-6 -- The Castle of Data: Databases

<div class="docs-hero">
  <img src="/super-agentic-devops-world/img/docs/3-6-banco_dados.png" alt="Level 3-6 -- The Castle of Data: Databases" />
</div>


---

## Change Log

| Version | Date       | Author                                     | Description                   |
|---------|------------|--------------------------------------------|-------------------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation (Mario Edition)|

---

## Table of Contents

- [Prologue: Toad's Vault](#prologue-toads-vault)
- [1. What Is a Database?](#1-what-is-a-database)
  - [1.1 Data Is the Kingdom's Treasure](#11-data-is-the-kingdoms-treasure)
  - [1.2 Why Not Store in Files?](#12-why-not-store-in-files)
  - [1.3 The Role of the Database](#13-the-role-of-the-database)
- [2. SQL vs NoSQL: Organized Chests vs Loot Bags](#2-sql-vs-nosql-organized-chests-vs-loot-bags)
  - [2.1 Relational Databases (SQL): The Organized Castle](#21-relational-databases-sql-the-organized-castle)
  - [2.2 Non-Relational Databases (NoSQL): The Flexible Warehouse](#22-non-relational-databases-nosql-the-flexible-warehouse)
  - [2.3 Comparison Table: SQL vs NoSQL](#23-comparison-table-sql-vs-nosql)
  - [2.4 When to Use Each One](#24-when-to-use-each-one)
- [3. CRUD: The 4 Fundamental Operations](#3-crud-the-4-fundamental-operations)
  - [3.1 Create -- Store New Treasure](#31-create----store-new-treasure)
  - [3.2 Read -- Check the Treasure](#32-read----check-the-treasure)
  - [3.3 Update -- Update the Treasure](#33-update----update-the-treasure)
  - [3.4 Delete -- Remove Treasure](#34-delete----remove-treasure)
  - [3.5 Complete CRUD Table](#35-complete-crud-table)
- [4. Tables: The Organized Shelves](#4-tables-the-organized-shelves)
  - [4.1 Structure of a Table](#41-structure-of-a-table)
  - [4.2 Data Types: Types of Treasure](#42-data-types-types-of-treasure)
  - [4.3 Primary Key: The Treasure's Unique ID](#43-primary-key-the-treasures-unique-id)
  - [4.4 Constraints: Shelf Rules](#44-constraints-shelf-rules)
- [5. Relationships: Connecting the Shelves](#5-relationships-connecting-the-shelves)
  - [5.1 One-to-Many (1:N)](#51-one-to-many-1n)
  - [5.2 Many-to-Many (M:N)](#52-many-to-many-mn)
  - [5.3 One-to-One (1:1)](#53-one-to-one-11)
  - [5.4 Foreign Keys: The Connecting Links](#54-foreign-keys-the-connecting-links)
  - [5.5 TodoApp ER Diagram](#55-todoapp-er-diagram)
- [6. SQL: The Castle's Language](#6-sql-the-castles-language)
  - [6.1 SELECT: Search for Treasures](#61-select-search-for-treasures)
  - [6.2 INSERT: Store Treasures](#62-insert-store-treasures)
  - [6.3 UPDATE: Update Treasures](#63-update-update-treasures)
  - [6.4 DELETE: Remove Treasures](#64-delete-remove-treasures)
  - [6.5 WHERE: Filter by Condition](#65-where-filter-by-condition)
  - [6.6 JOIN: Combine Shelves](#66-join-combine-shelves)
  - [6.7 ORDER BY and LIMIT: Sort and Limit](#67-order-by-and-limit-sort-and-limit)
  - [6.8 GROUP BY and Aggregations](#68-group-by-and-aggregations)
- [7. PostgreSQL: The Most Robust Castle](#7-postgresql-the-most-robust-castle)
  - [7.1 Why PostgreSQL?](#71-why-postgresql)
  - [7.2 Installation and Setup](#72-installation-and-setup)
  - [7.3 Creating the TodoApp Database](#73-creating-the-todoapp-database)
  - [7.4 Advanced Features](#74-advanced-features)
- [8. MongoDB: The Flexible Warehouse](#8-mongodb-the-flexible-warehouse)
  - [8.1 Documents Instead of Tables](#81-documents-instead-of-tables)
  - [8.2 When MongoDB Shines](#82-when-mongodb-shines)
  - [8.3 MongoDB Example](#83-mongodb-example)
- [9. Prisma: Toad's Magic Assistant](#9-prisma-toads-magic-assistant)
  - [9.1 What Is an ORM?](#91-what-is-an-orm)
  - [9.2 Prisma Schema: The Castle Map](#92-prisma-schema-the-castle-map)
  - [9.3 Prisma Client: The Assistant](#93-prisma-client-the-assistant)
  - [9.4 Migrations: Renovating the Castle](#94-migrations-renovating-the-castle)
  - [9.5 Prisma Studio: The Panoramic View](#95-prisma-studio-the-panoramic-view)
- [10. Indexes: The Catalog for Fast Searching](#10-indexes-the-catalog-for-fast-searching)
  - [10.1 The Slow Search Problem](#101-the-slow-search-problem)
  - [10.2 How Indexes Work](#102-how-indexes-work)
  - [10.3 Creating Indexes](#103-creating-indexes)
  - [10.4 When to Create and When Not to Create Indexes](#104-when-to-create-and-when-not-to-create-indexes)
- [11. Database Security](#11-database-security)
  - [11.1 SQL Injection: The Castle Attack](#111-sql-injection-the-castle-attack)
  - [11.2 Backup: The Evacuation Plan](#112-backup-the-evacuation-plan)
  - [11.3 Passwords and Secure Connections](#113-passwords-and-secure-connections)
- [12. Databases in Practice: Complete TodoApp](#12-databases-in-practice-complete-todoapp)
  - [12.1 Complete Schema with Prisma](#121-complete-schema-with-prisma)
  - [12.2 Everyday Queries](#122-everyday-queries)
  - [12.3 Docker Compose with PostgreSQL](#123-docker-compose-with-postgresql)
- [Summary -- What We Learned in Level 3-6](#summary----what-we-learned-in-level-3-6)
- [References](#references)

---

## Prologue: Toad's Vault

Sofia built a beautiful TodoApp. Perfect frontend, functional backend. But there was a problem: every time she restarted the server, ALL the tasks disappeared. It was like playing Mario and losing all your progress when turning off the console.

Toad -- the team's Database Engineer -- appeared carrying an enormous ledger.

*"Sofia, where are you storing the tasks?"* asked Toad.

*"In the server's memory. In a JavaScript array."*

Toad nearly dropped the book. *"In MEMORY? Sofia, memory is temporary! It's like keeping coins in Mario's pocket while playing. When the level ends, the pocket empties. You need a VAULT."*

Toad opened the doors to an enormous castle. Inside, there were endless shelves, each with labeled and organized chests.

*"This is a **Database**. A permanent vault for your data. The tasks stay here, safe, organized, and accessible 24 hours a day. Even if the server goes down, the data remains. Even if the castle catches fire, we have backup copies in other castles."*

*"All of that just to store tasks?"* asked Sofia.

*"Tasks, users, settings, logs, history -- EVERYTHING that matters in your application lives in the database. If the code is the application's muscle, the database is the heart. Without it, nothing works."*

*"Welcome to Level 3-6 -- the Castle of Data."*

---

## 1. What Is a Database?

### 1.1 Data Is the Kingdom's Treasure

In any application, **data** is what has the most value:

- **TodoApp:** User tasks
- **Social Network:** Posts, photos, friendships
- **E-commerce:** Products, orders, payments
- **Bank:** Balances, transactions, accounts

Without data, the application is just an empty shell -- a castle without treasures.

> **MARIO ANALOGY:** Data is the **treasure of the Mushroom Kingdom**: coins, stars, lives, collected power-ups, completed levels, time records. Imagine playing 100 hours and losing EVERYTHING because there was nowhere to save. The database is **Toad's castle vault** -- the safe place where all treasures are stored permanently.

### 1.2 Why Not Store in Files?

*"Can't I just save it in a JSON file?"*

For very simple projects, yes. But files have serious problems:

| Problem | JSON File | Database |
|---------|-----------|----------|
| **Search** | Loads EVERYTHING into memory to search | Optimized search with indexes |
| **Concurrency** | 2 users writing = corrupted | Multiple simultaneous users |
| **Size** | Slow with millions of records | Optimized for billions |
| **Security** | Anyone can read the file | Authentication and authorization |
| **Backup** | Manual and fragile | Automated and reliable |
| **Relationships** | Hard to manage | Native and optimized |

### 1.3 The Role of the Database

A database does much more than "store data":

1. **Store** data permanently and in an organized way
2. **Search** data quickly (even across billions of records)
3. **Protect** data against unauthorized access
4. **Ensure consistency** (atomic transactions)
5. **Scale** to millions of users
6. **Backup** automatically against data loss
7. **Relate** data to each other (users + tasks)

---

## 2. SQL vs NoSQL: Organized Chests vs Loot Bags

### 2.1 Relational Databases (SQL): The Organized Castle

**Relational** databases organize data in **tables** with defined **columns** and **rows** of data. They use the **SQL** (Structured Query Language) language for queries.

```
TABLE: tarefas
+----+-----------------+-----------+---------------------+
| id | titulo          | concluida | criada_em           |
+----+-----------------+-----------+---------------------+
|  1 | Estudar Docker  | false     | 2026-03-18 10:00:00 |
|  2 | Fazer deploy    | true      | 2026-03-17 09:00:00 |
|  3 | Escrever testes | false     | 2026-03-18 14:00:00 |
+----+-----------------+-----------+---------------------+
```

> **MARIO ANALOGY:** SQL databases are like **organized treasure chests with labels**. Each chest (table) has compartments (columns) with clear labels: "Coins", "Stars", "Mushrooms". Each item (row) is in the right compartment. You know exactly where to find everything. And if an item doesn't fit in any compartment, it does NOT go in the chest.

**Examples of SQL databases:**
- **PostgreSQL** -- The most robust and versatile (our focus)
- **MySQL** -- Very popular, used by WordPress
- **SQLite** -- Lightweight, runs from a local file
- **SQL Server** -- From Microsoft, strong in corporate environments

### 2.2 Non-Relational Databases (NoSQL): The Flexible Warehouse

**NoSQL** databases don't use rigid tables. Data is stored in more flexible formats: JSON documents, key-value pairs, graphs, etc.

```json
// DOCUMENT: task (MongoDB)
{
  "_id": "64a1b2c3d4e5f6a7b8c9d0e1",
  "titulo": "Estudar Docker",
  "concluida": false,
  "criada_em": "2026-03-18T10:00:00Z",
  "tags": ["docker", "devops", "high-priority"],
  "subtarefas": [
    { "titulo": "Instalar Docker", "feita": true },
    { "titulo": "Criar Dockerfile", "feita": false }
  ]
}
```

> **MARIO ANALOGY:** NoSQL databases are like **mixed loot bags**. Each bag can contain different items: one bag has 3 coins and 1 star, another has 5 mushrooms and 2 fire flowers, another has just 1 cape feather. There are no fixed compartments -- each bag decides what to hold. More flexible, but less predictable.

**Types of NoSQL databases:**

| Type | How it works | Example | Best use |
|------|-------------|---------|----------|
| **Document** | Flexible JSON/BSON | MongoDB, CosmosDB | Apps with varied data |
| **Key-Value** | Simple Key → Value | Redis, DynamoDB | Cache, sessions |
| **Columnar** | Columns instead of rows | Cassandra, ScyllaDB | Analytics, time-series |
| **Graph** | Nodes and edges | Neo4j, Neptune | Social networks, relationships |

### 2.3 Comparison Table: SQL vs NoSQL

| Aspect | SQL (Relational) | NoSQL (Non-Relational) |
|--------|-----------------|----------------------|
| **Structure** | Tables with fixed schema | Flexible, no fixed schema |
| **Language** | Standardized SQL | Varies by database |
| **Relationships** | Native (JOINs) | Manual or embedded |
| **Consistency** | Strong (ACID) | Eventual (BASE) |
| **Scalability** | Vertical (more power) | Horizontal (more machines) |
| **Best for** | Structured data | Semi/unstructured data |
| **Analogy** | Organized chests | Loot bags |

### 2.4 When to Use Each One

| Use SQL When | Use NoSQL When |
|-------------|---------------|
| Data has a clear and predictable structure | Data varies greatly from record to record |
| Relationships are important | Data is independent |
| Consistency is critical (banking, healthcare) | Speed is more important than consistency |
| Complex queries (JOINs, aggregations) | Simple queries (search by key) |
| TodoApp, E-commerce, ERP | IoT, logs, cache, social media feeds |

**For the TodoApp:** We'll use **PostgreSQL** (SQL). Our tasks have a clear structure (title, completed, date), belong to users (relationship), and we need consistency.

---

## 3. CRUD: The 4 Fundamental Operations

Every interaction with a database comes down to 4 operations: **CRUD**.

### 3.1 Create -- Store New Treasure

```sql
INSERT INTO tarefas (titulo, concluida) VALUES ('Estudar SQL', false);
```

> **MARIO ANALOGY:** Create is like **storing a new coin in the vault**. You collected something, now you're storing it permanently.

### 3.2 Read -- Check the Treasure

```sql
SELECT * FROM tarefas;
SELECT titulo FROM tarefas WHERE concluida = false;
```

> **MARIO ANALOGY:** Read is like **looking inside the vault** to see what's in there. You can see everything or filter: "show me only the gold coins."

### 3.3 Update -- Update the Treasure

```sql
UPDATE tarefas SET concluida = true WHERE id = 1;
```

> **MARIO ANALOGY:** Update is like **swapping a coin for a polished coin**. The item stays in the vault, but with updated properties.

### 3.4 Delete -- Remove Treasure

```sql
DELETE FROM tarefas WHERE id = 1;
```

> **MARIO ANALOGY:** Delete is like **removing an item from the vault** permanently. Be careful: without a backup, the item is gone forever.

### 3.5 Complete CRUD Table

| Operation | SQL | HTTP Verb | Prisma | Mario Analogy |
|-----------|-----|-----------|--------|---------------|
| **Create** | INSERT | POST | create() | Store new treasure |
| **Read** | SELECT | GET | findMany() / findUnique() | Check the vault |
| **Update** | UPDATE | PUT/PATCH | update() | Update treasure |
| **Delete** | DELETE | DELETE | delete() | Remove treasure |

---

## 4. Tables: The Organized Shelves

### 4.1 Structure of a Table

A table is like an organized **spreadsheet**:

```
TABLE: usuarios
+----+---------+-------------------+--------+---------------------+
| id | nome    | email             | ativo  | criado_em           |
+----+---------+-------------------+--------+---------------------+
|  1 | Sofia   | sofia@email.com   | true   | 2026-01-15 08:00:00 |
|  2 | Luigi   | luigi@email.com   | true   | 2026-02-20 14:30:00 |
|  3 | Peach   | peach@email.com   | false  | 2026-03-01 10:00:00 |
+----+---------+-------------------+--------+---------------------+

Column = Type of information (name, email, etc.)
Row    = A specific record (one user)
Cell   = A specific piece of data (Luigi's email)
```

> **MARIO ANALOGY:** A table is like an **organized shelf** in Toad's castle. The "users" shelf has dividers for "name", "email", "active". Each object on the shelf (row) is a user. Each divider (column) holds a specific type of information.

### 4.2 Data Types: Types of Treasure

Each column accepts only **one type** of data:

| SQL Type | Description | Example | Mario Analogy |
|----------|-----------|---------|---------------|
| `INTEGER` | Whole number | 42, -1, 0 | Number of coins |
| `TEXT` / `VARCHAR` | Text | "Sofia", "Study" | Character name |
| `BOOLEAN` | True/False | true, false | Is Mario alive? |
| `TIMESTAMP` | Date and time | 2026-03-18 10:00 | When the item was collected |
| `DECIMAL` | Number with decimals | 9.99, 100.50 | Shop price |
| `UUID` | Unique identifier | a1b2c3d4-... | Item code |
| `JSON` / `JSONB` | Structured data | {"tags": [...]} | Item backpack |
| `SERIAL` | Auto-incrementing integer | 1, 2, 3, 4... | Automatic number |

### 4.3 Primary Key: The Treasure's Unique ID

Every table needs a **Primary Key** -- a unique identifier for each record. It's like the **serial number** of each treasure in the vault.

```sql
CREATE TABLE tarefas (
  id SERIAL PRIMARY KEY,     -- Auto-incremented unique ID
  titulo VARCHAR(200) NOT NULL,
  concluida BOOLEAN DEFAULT false,
  criada_em TIMESTAMP DEFAULT NOW()
);
```

> **MARIO ANALOGY:** The Primary Key is like the **unique number of each treasure** in the vault. No two treasures can have the same number. If you ask for "treasure #42", you know EXACTLY which one. No ambiguity.

### 4.4 Constraints: Shelf Rules

Constraints are **rules** that data must obey:

| Constraint | What it does | Example |
|-----------|-------------|---------|
| `PRIMARY KEY` | Unique and required | id INT PRIMARY KEY |
| `NOT NULL` | Cannot be empty | titulo VARCHAR(200) NOT NULL |
| `UNIQUE` | Cannot be repeated | email VARCHAR UNIQUE |
| `DEFAULT` | Default value if not provided | concluida BOOLEAN DEFAULT false |
| `CHECK` | Custom validation | CHECK (prioridade IN ('alta','media','baixa')) |
| `FOREIGN KEY` | References another table | usuario_id INT REFERENCES usuarios(id) |

---

## 5. Relationships: Connecting the Shelves

### 5.1 One-to-Many (1:N)

The most common relationship. **One** record connects to **many** records.

```
1 User → N Tasks
Sofia has 5 tasks
Luigi has 3 tasks
Peach has 8 tasks
```

```sql
-- The "tarefas" table references "usuarios"
CREATE TABLE tarefas (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  usuario_id INTEGER REFERENCES usuarios(id)  -- Foreign Key!
);
```

> **MARIO ANALOGY:** One player (Mario) has MANY coins. The relationship is 1:N. Each coin knows who it belongs to (Foreign Key = "this coin is Mario's"). But each coin belongs to only ONE player.

### 5.2 Many-to-Many (M:N)

When many records connect to many other records. Requires an **intermediary table**.

```
Tasks ←→ Tags
"Study Docker" has tags: "docker", "devops"
"docker" is in: "Study Docker", "Create Dockerfile"
```

```sql
-- Intermediary table (junction table)
CREATE TABLE tarefas_tags (
  tarefa_id INTEGER REFERENCES tarefas(id),
  tag_id INTEGER REFERENCES tags(id),
  PRIMARY KEY (tarefa_id, tag_id)
);
```

### 5.3 One-to-One (1:1)

Rare. One record connects to exactly one other record.

```
1 User → 1 Profile
Sofia → { avatar: "sofia.png", bio: "Dev in training" }
```

### 5.4 Foreign Keys: The Connecting Links

A **Foreign Key** is the column that connects one table to another.

```sql
-- In the tarefas table, usuario_id is a Foreign Key
-- It "points" to the usuarios table

INSERT INTO tarefas (titulo, usuario_id) VALUES ('Estudar', 1);
-- This task belongs to the user with id = 1 (Sofia)

-- If we try to reference a user that doesn't exist:
INSERT INTO tarefas (titulo, usuario_id) VALUES ('Teste', 999);
-- ERROR! user 999 doesn't exist. The database PROTECTS integrity.
```

> **MARIO ANALOGY:** Foreign Keys are like **chain links** connecting different shelves. The tasks shelf has a link that connects each task to its owner on the users shelf. If you try to connect to a user that doesn't exist, the link won't close -- the database prevents orphaned data.

### 5.5 TodoApp ER Diagram

```
┌───────────────────┐       ┌───────────────────┐
│     usuarios      │       │     tarefas       │
├───────────────────┤       ├───────────────────┤
│ id (PK)           │──┐    │ id (PK)           │
│ nome              │  │    │ titulo            │
│ email (UNIQUE)    │  │    │ descricao         │
│ senha_hash        │  └───>│ usuario_id (FK)   │
│ criado_em         │       │ concluida         │
│ atualizado_em     │       │ prioridade        │
└───────────────────┘       │ criada_em         │
                            │ atualizada_em     │
                            └─────────┬─────────┘
                                      │
                            ┌─────────▼─────────┐
                            │   tarefas_tags    │
                            ├───────────────────┤
                            │ tarefa_id (FK)    │
                            │ tag_id (FK)       │
                            └─────────┬─────────┘
                                      │
                            ┌─────────▼─────────┐
                            │      tags         │
                            ├───────────────────┤
                            │ id (PK)           │
                            │ nome (UNIQUE)     │
                            │ cor               │
                            └───────────────────┘
```

---

## 6. SQL: The Castle's Language

### 6.1 SELECT: Search for Treasures

```sql
-- Search for everything
SELECT * FROM tarefas;

-- Search for specific columns
SELECT titulo, concluida FROM tarefas;

-- Search with alias
SELECT titulo AS "Task", concluida AS "Done?" FROM tarefas;
```

### 6.2 INSERT: Store Treasures

```sql
-- Insert one task
INSERT INTO tarefas (titulo, usuario_id)
VALUES ('Estudar PostgreSQL', 1);

-- Insert multiple at once
INSERT INTO tarefas (titulo, usuario_id) VALUES
  ('Criar API', 1),
  ('Escrever testes', 1),
  ('Fazer deploy', 1);

-- Insert and return the created record
INSERT INTO tarefas (titulo, usuario_id)
VALUES ('Nova tarefa', 1)
RETURNING *;
```

### 6.3 UPDATE: Update Treasures

```sql
-- Update a specific task
UPDATE tarefas
SET concluida = true, atualizada_em = NOW()
WHERE id = 1;

-- CAUTION: without WHERE, it updates ALL rows!
UPDATE tarefas SET concluida = true;  -- ALL become completed!
```

### 6.4 DELETE: Remove Treasures

```sql
-- Remove a specific task
DELETE FROM tarefas WHERE id = 1;

-- Remove all completed tasks
DELETE FROM tarefas WHERE concluida = true;

-- CAUTION: without WHERE, it deletes EVERYTHING!
DELETE FROM tarefas;  -- ALL tasks disappear!
```

> **MARIO ANALOGY:** `UPDATE` and `DELETE` without `WHERE` are like using `rm -rf /` in the terminal -- they destroy everything. ALWAYS use `WHERE` to specify what you want to change or delete. It's like aiming before shooting a fireball: without aiming, you hit everything around you.

### 6.5 WHERE: Filter by Condition

```sql
-- Incomplete tasks
SELECT * FROM tarefas WHERE concluida = false;

-- Tasks from user 1
SELECT * FROM tarefas WHERE usuario_id = 1;

-- Tasks created today
SELECT * FROM tarefas WHERE criada_em >= CURRENT_DATE;

-- Combining conditions (AND, OR)
SELECT * FROM tarefas
WHERE concluida = false AND prioridade = 'alta';

SELECT * FROM tarefas
WHERE prioridade = 'alta' OR prioridade = 'media';

-- Partial text search (LIKE)
SELECT * FROM tarefas WHERE titulo LIKE '%Docker%';

-- Search in a list (IN)
SELECT * FROM tarefas WHERE prioridade IN ('alta', 'media');
```

### 6.6 JOIN: Combine Shelves

JOINs allow you to **combine data from different tables** in a single query.

```sql
-- Search for tasks WITH the user's name
SELECT
  tarefas.titulo,
  tarefas.concluida,
  usuarios.nome AS "owner"
FROM tarefas
INNER JOIN usuarios ON tarefas.usuario_id = usuarios.id;

-- Result:
-- titulo              | concluida | owner
-- --------------------|-----------|-------
-- Estudar Docker      | false     | Sofia
-- Fazer deploy        | true      | Sofia
-- Criar componente    | false     | Luigi
```

> **MARIO ANALOGY:** JOIN is like **connecting two shelves** to see combined information. The tasks shelf knows the `usuario_id`, but not the name. The users shelf knows the name. The JOIN connects them both: "show me the tasks AND the name of who created them."

**Types of JOIN:**

| Type | What it returns | Analogy |
|------|---------------|---------|
| `INNER JOIN` | Only records that exist in BOTH tables | Coins that HAVE an owner |
| `LEFT JOIN` | All from the left + matches from the right | All users, even without tasks |
| `RIGHT JOIN` | All from the right + matches from the left | All tasks, even without an owner |
| `FULL JOIN` | All from both tables | Everyone, with or without a match |

### 6.7 ORDER BY and LIMIT: Sort and Limit

```sql
-- Sort by date (most recent first)
SELECT * FROM tarefas ORDER BY criada_em DESC;

-- Sort by priority and then by title
SELECT * FROM tarefas ORDER BY prioridade ASC, titulo ASC;

-- Get only the first 10
SELECT * FROM tarefas ORDER BY criada_em DESC LIMIT 10;

-- Pagination (page 2, 10 items per page)
SELECT * FROM tarefas ORDER BY criada_em DESC LIMIT 10 OFFSET 10;
```

### 6.8 GROUP BY and Aggregations

```sql
-- Count tasks per user
SELECT
  usuarios.nome,
  COUNT(tarefas.id) AS total_tasks
FROM usuarios
LEFT JOIN tarefas ON usuarios.id = tarefas.usuario_id
GROUP BY usuarios.nome;

-- Result:
-- nome   | total_tasks
-- -------|------------
-- Sofia  | 5
-- Luigi  | 3
-- Peach  | 8

-- Aggregation functions
SELECT
  COUNT(*) AS total,                    -- count
  COUNT(*) FILTER (WHERE concluida) AS completed,  -- count with filter
  MIN(criada_em) AS first,              -- minimum
  MAX(criada_em) AS last                -- maximum
FROM tarefas;
```

---

## 7. PostgreSQL: The Most Robust Castle

### 7.1 Why PostgreSQL?

PostgreSQL is the most **advanced** open source relational database in the world:

- **35+ years** of development
- **ACID compliant** (guaranteed consistency)
- **Extensible** (PostGIS for geodata, pgvector for AI)
- **Native JSON** (can function as NoSQL too!)
- **Excellent performance** for complex workloads
- **Huge** and active community
- **Free** (PostgreSQL license, very permissive)

| Comparison | PostgreSQL | MySQL | SQLite |
|-----------|-----------|-------|--------|
| **Type** | Server | Server | Local file |
| **ACID** | Full | Partial | Full |
| **JSON** | Native (JSONB) | Basic | No |
| **Extensions** | Many | Few | None |
| **Use** | Production, analytics | Simple web | Prototype, mobile |
| **Analogy** | Fortified castle | Solid house | Comfortable tent |

### 7.2 Installation and Setup

**With Docker (recommended):**

```bash
# Run PostgreSQL in a container
$ docker run -d \
  --name postgres-dev \
  -e POSTGRES_USER=sofia \
  -e POSTGRES_PASSWORD=minhasenha \
  -e POSTGRES_DB=todoapp \
  -p 5432:5432 \
  -v pgdata:/var/lib/postgresql/data \
  postgres:16-alpine

# Connect to the database
$ docker exec -it postgres-dev psql -U sofia -d todoapp
```

**Directly on the system:**
- macOS: `brew install postgresql@16`
- Ubuntu: `sudo apt install postgresql-16`
- Windows: Download from postgresql.org

### 7.3 Creating the TodoApp Database

```sql
-- Create users table
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  senha_hash VARCHAR(255) NOT NULL,
  ativo BOOLEAN DEFAULT true,
  criado_em TIMESTAMP DEFAULT NOW(),
  atualizado_em TIMESTAMP DEFAULT NOW()
);

-- Create tasks table
CREATE TABLE tarefas (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  descricao TEXT,
  concluida BOOLEAN DEFAULT false,
  prioridade VARCHAR(10) DEFAULT 'media'
    CHECK (prioridade IN ('alta', 'media', 'baixa')),
  usuario_id INTEGER NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  criada_em TIMESTAMP DEFAULT NOW(),
  atualizada_em TIMESTAMP DEFAULT NOW()
);

-- Create tags table
CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(50) UNIQUE NOT NULL,
  cor VARCHAR(7) DEFAULT '#808080'
);

-- Create tasks <-> tags relationship table
CREATE TABLE tarefas_tags (
  tarefa_id INTEGER REFERENCES tarefas(id) ON DELETE CASCADE,
  tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (tarefa_id, tag_id)
);

-- Insert sample data
INSERT INTO usuarios (nome, email, senha_hash) VALUES
  ('Sofia', 'sofia@email.com', '$2b$10$hash1'),
  ('Luigi', 'luigi@email.com', '$2b$10$hash2');

INSERT INTO tarefas (titulo, prioridade, usuario_id) VALUES
  ('Estudar PostgreSQL', 'alta', 1),
  ('Criar API REST', 'alta', 1),
  ('Escrever testes', 'media', 1),
  ('Fazer deploy', 'baixa', 2);
```

### 7.4 Advanced Features

**JSONB -- Flexible data within SQL:**

```sql
-- JSONB column for flexible metadata
ALTER TABLE tarefas ADD COLUMN metadata JSONB DEFAULT '{}';

UPDATE tarefas
SET metadata = '{"estimativa": "2h", "sprint": 5, "labels": ["backend"]}'
WHERE id = 1;

-- Search by JSON content
SELECT * FROM tarefas
WHERE metadata->>'sprint' = '5';
```

**Full-Text Search -- Text search:**

```sql
-- Advanced text search
SELECT * FROM tarefas
WHERE to_tsvector('portuguese', titulo || ' ' || COALESCE(descricao, ''))
      @@ to_tsquery('portuguese', 'docker & deploy');
```

---

## 8. MongoDB: The Flexible Warehouse

### 8.1 Documents Instead of Tables

MongoDB stores data as **JSON documents** (BSON internally):

```javascript
// MongoDB document (equivalent to a "row")
{
  _id: ObjectId("64a1b2c3d4e5f6a7b8c9d0e1"),
  titulo: "Estudar MongoDB",
  concluida: false,
  prioridade: "alta",
  usuario: {
    nome: "Sofia",
    email: "sofia@email.com"
  },
  tags: ["nosql", "banco-de-dados"],
  subtarefas: [
    { titulo: "Instalar MongoDB", feita: true },
    { titulo: "CRUD basico", feita: false }
  ],
  criadaEm: ISODate("2026-03-18T10:00:00Z")
}
```

**Fundamental difference:** In SQL, related data lives in separate tables (JOIN). In MongoDB, related data can live **inside the same document** (embedding).

### 8.2 When MongoDB Shines

| Scenario | Is MongoDB better? | Why |
|----------|-------------------|-----|
| Data with variable structure | Yes | Flexible schema |
| IoT (sensors, logs) | Yes | High volume, simple structure |
| Cache and sessions | Yes | Fast for simple reads |
| Rapid prototyping | Yes | No need to define a schema |
| Complex transactions | No | SQL is stronger here |
| Complex relationships | No | SQL JOINs are superior |
| Simple TodoApp | No | SQL is more suitable |

### 8.3 MongoDB Example

```javascript
// CRUD operations in MongoDB (Node.js driver)

// Create
await db.collection('tarefas').insertOne({
  titulo: 'Estudar MongoDB',
  concluida: false,
  tags: ['nosql'],
  criadaEm: new Date()
});

// Read
const tarefas = await db.collection('tarefas')
  .find({ concluida: false })
  .sort({ criadaEm: -1 })
  .toArray();

// Update
await db.collection('tarefas').updateOne(
  { _id: ObjectId('...') },
  { $set: { concluida: true } }
);

// Delete
await db.collection('tarefas').deleteOne({ _id: ObjectId('...') });
```

---

## 9. Prisma: Toad's Magic Assistant

### 9.1 What Is an ORM?

An **ORM** (Object-Relational Mapping) is a tool that translates between the code world (JavaScript/TypeScript objects) and the database world (SQL tables). Instead of writing SQL manually, you use ORM methods.

| Without ORM (raw SQL) | With ORM (Prisma) |
|----------------------|-------------------|
| `SELECT * FROM tarefas WHERE id = 1` | `prisma.tarefa.findUnique({ where: { id: 1 } })` |
| Loose SQL string in the code | Method with auto-complete and typing |
| Vulnerable to SQL Injection | Automatically protected |
| No type validation | TypeScript checks at compile time |

> **MARIO ANALOGY:** Without an ORM, you talk to Toad's vault in an **ancient language** (raw SQL) -- it works, but it's easy to make mistakes. With an ORM (Prisma), you have a **magic assistant** who translates your requests to the vault's language perfectly, with auto-complete and error checking.

### 9.2 Prisma Schema: The Castle Map

The **Prisma Schema** defines the structure of your database:

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Usuario {
  id          Int       @id @default(autoincrement())
  nome        String
  email       String    @unique
  senhaHash   String    @map("senha_hash")
  ativo       Boolean   @default(true)
  criadoEm    DateTime  @default(now()) @map("criado_em")
  atualizadoEm DateTime @default(now()) @updatedAt @map("atualizado_em")

  tarefas     Tarefa[]  // 1:N relationship

  @@map("usuarios")
}

model Tarefa {
  id          Int        @id @default(autoincrement())
  titulo      String     @db.VarChar(200)
  descricao   String?
  concluida   Boolean    @default(false)
  prioridade  String     @default("media")
  criadaEm    DateTime   @default(now()) @map("criada_em")
  atualizadaEm DateTime @default(now()) @updatedAt @map("atualizada_em")

  usuario     Usuario    @relation(fields: [usuarioId], references: [id], onDelete: Cascade)
  usuarioId   Int        @map("usuario_id")

  tags        Tag[]      // M:N relationship (implicit)

  @@map("tarefas")
}

model Tag {
  id     Int      @id @default(autoincrement())
  nome   String   @unique
  cor    String   @default("#808080")

  tarefas Tarefa[] // M:N relationship (implicit)

  @@map("tags")
}
```

### 9.3 Prisma Client: The Assistant

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// CREATE -- Create a task
const novaTarefa = await prisma.tarefa.create({
  data: {
    titulo: 'Estudar Prisma',
    prioridade: 'alta',
    usuarioId: 1,
    tags: {
      connectOrCreate: [
        {
          where: { nome: 'prisma' },
          create: { nome: 'prisma', cor: '#2D3748' }
        }
      ]
    }
  },
  include: { tags: true }  // Include tags in the response
});

// READ -- Fetch user's tasks with tags
const tarefas = await prisma.tarefa.findMany({
  where: {
    usuarioId: 1,
    concluida: false,
  },
  include: {
    usuario: { select: { nome: true } },
    tags: true,
  },
  orderBy: { criadaEm: 'desc' },
  take: 10,  // LIMIT 10
});

// UPDATE -- Complete a task
const atualizada = await prisma.tarefa.update({
  where: { id: 1 },
  data: { concluida: true },
});

// DELETE -- Remove a task
await prisma.tarefa.delete({
  where: { id: 1 },
});

// AGGREGATION -- Count tasks by priority
const contagem = await prisma.tarefa.groupBy({
  by: ['prioridade'],
  _count: { id: true },
  where: { usuarioId: 1 },
});
```

**Advantages of Prisma:**
- **Full auto-complete** with TypeScript
- **Type safety** -- type errors detected before running
- **Optimized queries** generated automatically
- **Native SQL Injection protection**
- **Prisma Studio** to visualize data in the browser

### 9.4 Migrations: Renovating the Castle

When you change the schema (add a column, create a table), you need a **migration** -- a controlled change to the database.

```bash
# Create a migration after changing the schema
$ npx prisma migrate dev --name add-priority

# Prisma will:
# 1. Detect changes in the schema
# 2. Generate a SQL migration file
# 3. Apply it to the database
# 4. Regenerate the Prisma Client
```

**Generated migration file:**

```sql
-- prisma/migrations/20260318_adicionar_prioridade/migration.sql
ALTER TABLE "tarefas"
ADD COLUMN "prioridade" VARCHAR(10) DEFAULT 'media'
CHECK ("prioridade" IN ('alta', 'media', 'baixa'));
```

> **MARIO ANALOGY:** Migrations are like **controlled renovations to the castle**. Instead of demolishing and rebuilding (dropping and recreating tables), you make incremental changes: add a room here, enlarge a window there. And everything is documented -- you can see the history of all renovations.

### 9.5 Prisma Studio: The Panoramic View

```bash
$ npx prisma studio
# Opens in the browser: http://localhost:5555
# Visual interface to view and edit data
```

Prisma Studio is like a **panoramic view of the castle** -- you see all the shelves, all the treasures, and can edit directly through the interface.

---

## 10. Indexes: The Catalog for Fast Searching

### 10.1 The Slow Search Problem

Without an index, the database needs to read ALL rows to find what you want (full table scan). With 1 million tasks, each search takes a while.

```sql
-- Without index: The database reads 1,000,000 rows
SELECT * FROM tarefas WHERE titulo = 'Estudar Docker';
-- Time: 500ms (slow!)

-- With index: The database checks the catalog and goes straight there
CREATE INDEX idx_tarefas_titulo ON tarefas(titulo);
SELECT * FROM tarefas WHERE titulo = 'Estudar Docker';
-- Time: 2ms (fast!)
```

### 10.2 How Indexes Work

> **MARIO ANALOGY:** Imagine Toad's vault with 1 million treasures. Without a catalog, to find the "Golden Star", Toad needs to open EACH chest one by one. With an **organized catalog** (index), Toad looks up: "Golden Star -> Shelf 7, Chest 42." Goes straight there. An index is exactly that -- an organized catalog that points to the exact location of the data.

**Technically:** An index is a data structure (usually a B-tree) that maps column values to disk locations. It's like a book's index -- instead of reading the entire book, you look up the index and go straight to the right page.

### 10.3 Creating Indexes

```sql
-- Simple index (one column)
CREATE INDEX idx_tarefas_usuario ON tarefas(usuario_id);

-- Composite index (multiple columns)
CREATE INDEX idx_tarefas_usuario_concluida ON tarefas(usuario_id, concluida);

-- Unique index (guarantees uniqueness)
CREATE UNIQUE INDEX idx_usuarios_email ON usuarios(email);

-- Partial index (only for some records)
CREATE INDEX idx_tarefas_pendentes ON tarefas(usuario_id)
WHERE concluida = false;
```

**In Prisma:**

```prisma
model Tarefa {
  // ...
  usuarioId   Int @map("usuario_id")

  @@index([usuarioId])                       // Simple index
  @@index([usuarioId, concluida])            // Composite index
  @@map("tarefas")
}
```

### 10.4 When to Create and When Not to Create Indexes

| Create an index when | DON'T create an index when |
|---------------------|--------------------------|
| Column used in WHERE frequently | Small table (<1000 rows) |
| Column used in JOIN | Column rarely queried |
| Column used in ORDER BY | Column with few distinct values (boolean) |
| Column with many distinct values | Table with many writes and few reads |

**Cost of indexes:** Indexes speed up reads (SELECT) but make writes (INSERT/UPDATE/DELETE) slightly slower, because the index needs to be updated as well. It's a tradeoff.

---

## 11. Database Security

### 11.1 SQL Injection: The Castle Attack

**SQL Injection** is when an attacker injects malicious SQL code through user inputs.

```javascript
// VULNERABLE (NEVER do this!)
const query = `SELECT * FROM usuarios WHERE email = '${email}'`;
// If email = "'; DROP TABLE usuarios; --"
// The query becomes: SELECT * FROM usuarios WHERE email = ''; DROP TABLE usuarios; --'
// ENTIRE TABLE DELETED!

// SAFE (use parameters or ORM)
const query = 'SELECT * FROM usuarios WHERE email = $1';
await pool.query(query, [email]);

// SAFEST (use Prisma)
await prisma.usuario.findUnique({ where: { email } });
// Prisma NEVER allows SQL Injection
```

> **MARIO ANALOGY:** SQL Injection is like an **invader disguised as a visitor**. They enter the castle and, instead of asking to see the treasures, they shout commands at the guards: "DESTROY EVERYTHING!" If the guards obey blindly (query without sanitization), the castle is destroyed. Prisma is like smart guards who verify EVERY command before executing.

### 11.2 Backup: The Evacuation Plan

```bash
# Backup with pg_dump
$ pg_dump -U sofia todoapp > backup_20260318.sql

# Restore backup
$ psql -U sofia todoapp < backup_20260318.sql

# Automated backup with Docker
$ docker exec postgres-dev pg_dump -U sofia todoapp > backup.sql
```

**Backup strategy (3-2-1):**
- **3** copies of the data
- **2** different types of media
- **1** offsite copy (off-premises)

### 11.3 Passwords and Secure Connections

```bash
# Connection string (NEVER expose in code!)
DATABASE_URL="postgresql://sofia:SenhaForte123!@db.exemplo.com:5432/todoapp?sslmode=require"

# Rules:
# 1. Always use SSL (sslmode=require)
# 2. Strong password (minimum 16 characters)
# 3. Connection string in .env (NEVER in code)
# 4. .env in .gitignore (NEVER in the repository)
# 5. Different credentials for dev/staging/production
```

---

## 12. Databases in Practice: Complete TodoApp

### 12.1 Complete Schema with Prisma

```prisma
// prisma/schema.prisma -- Complete TodoApp Schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Usuario {
  id           Int       @id @default(autoincrement())
  nome         String    @db.VarChar(100)
  email        String    @unique @db.VarChar(255)
  senhaHash    String    @map("senha_hash")
  ativo        Boolean   @default(true)
  criadoEm     DateTime  @default(now()) @map("criado_em")
  atualizadoEm DateTime  @default(now()) @updatedAt @map("atualizado_em")

  tarefas      Tarefa[]

  @@map("usuarios")
}

model Tarefa {
  id           Int       @id @default(autoincrement())
  titulo       String    @db.VarChar(200)
  descricao    String?
  concluida    Boolean   @default(false)
  prioridade   Prioridade @default(MEDIA)
  criadaEm     DateTime  @default(now()) @map("criada_em")
  atualizadaEm DateTime  @default(now()) @updatedAt @map("atualizada_em")

  usuario      Usuario   @relation(fields: [usuarioId], references: [id], onDelete: Cascade)
  usuarioId    Int       @map("usuario_id")
  tags         Tag[]

  @@index([usuarioId])
  @@index([usuarioId, concluida])
  @@map("tarefas")
}

model Tag {
  id      Int      @id @default(autoincrement())
  nome    String   @unique @db.VarChar(50)
  cor     String   @default("#808080") @db.VarChar(7)
  tarefas Tarefa[]

  @@map("tags")
}

enum Prioridade {
  ALTA
  MEDIA
  BAIXA
}
```

### 12.2 Everyday Queries

```typescript
// === COMMON TODOAPP QUERIES ===

// 1. Dashboard: User summary
const dashboard = await prisma.usuario.findUnique({
  where: { id: userId },
  include: {
    tarefas: {
      select: {
        id: true,
        titulo: true,
        concluida: true,
        prioridade: true,
        tags: true,
      },
      orderBy: { criadaEm: 'desc' },
    },
    _count: {
      select: { tarefas: true },
    },
  },
});

// 2. Filter tasks by priority and status
const tarefasUrgentes = await prisma.tarefa.findMany({
  where: {
    usuarioId: userId,
    concluida: false,
    prioridade: 'ALTA',
  },
  include: { tags: true },
  orderBy: { criadaEm: 'asc' },
});

// 3. Statistics
const stats = await prisma.tarefa.groupBy({
  by: ['prioridade', 'concluida'],
  where: { usuarioId: userId },
  _count: { id: true },
});

// 4. Search tasks by tag
const tarefasComTag = await prisma.tarefa.findMany({
  where: {
    usuarioId: userId,
    tags: {
      some: { nome: 'urgente' },
    },
  },
});

// 5. Transaction: Move all tasks from one user to another
await prisma.$transaction(async (tx) => {
  await tx.tarefa.updateMany({
    where: { usuarioId: oldUserId },
    data: { usuarioId: newUserId },
  });
  await tx.usuario.update({
    where: { id: oldUserId },
    data: { ativo: false },
  });
});
```

### 12.3 Docker Compose with PostgreSQL

```yaml
# docker-compose.yml for development
version: '3.8'

services:
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: sofia
      POSTGRES_PASSWORD: dev_password_123
      POSTGRES_DB: todoapp
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U sofia"]
      interval: 5s
      timeout: 5s
      retries: 5

  api:
    build: ./backend
    ports:
      - "3001:3001"
    environment:
      DATABASE_URL: postgresql://sofia:dev_password_123@db:5432/todoapp
    depends_on:
      db:
        condition: service_healthy
    command: >
      sh -c "npx prisma migrate deploy && npm run dev"

volumes:
  pgdata:
```

```bash
# Development workflow
$ docker-compose up -d              # Start everything
$ npx prisma migrate dev            # Apply migrations
$ npx prisma studio                 # Visualize data
$ npm run dev                       # Run the application
```

---

## Summary -- What We Learned in Level 3-6

| Concept | Mario Analogy | Key Point |
|---------|---------------|-----------|
| Database | Toad's castle vault | Permanent and organized storage |
| SQL | Organized chests with labels | Fixed structure, native relationships |
| NoSQL | Mixed loot bags | Flexible, no fixed schema |
| CRUD | Create/Read/Update/Delete | The 4 fundamental operations |
| Table | Organized shelf | Columns (types) + Rows (records) |
| Primary Key | Treasure's unique number | Required unique identifier |
| Foreign Key | Chain link between shelves | Connects tables |
| JOIN | Combining shelves to see combinations | Combines data from different tables |
| PostgreSQL | The most robust castle | Advanced relational database |
| MongoDB | The flexible warehouse | JSON documents without schema |
| Prisma | Toad's magic assistant | ORM with TypeScript and auto-complete |
| Migration | Controlled castle renovation | Incremental schema changes |
| Index | Catalog for fast searching | Speeds up SELECT, costs on INSERT |
| SQL Injection | Disguised invader | Always use ORM or parameters |

**The big lesson:** The database is the heart of your application. The code can be rewritten, the frontend can be redesigned, but user data is irreplaceable. Treat your database with the same respect Toad gives to the Mushroom Kingdom's treasures: with organization, security, and backups. Because at the end of the day, what matters isn't the castle -- it's the treasures inside it.

---

## References

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [SQL Tutorial -- W3Schools](https://www.w3schools.com/sql/)
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
- [Use the Index, Luke -- SQL Indexing](https://use-the-index-luke.com/)
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
- [OWASP SQL Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
- [Azure Database for PostgreSQL](https://learn.microsoft.com/pt-br/azure/postgresql/)
- [Database Design -- Lucidchart Guide](https://www.lucidchart.com/pages/database-diagram/database-design)

---

*Level 3-6 complete! You mastered the Castle of Data -- the heart of any application. With that, you've completed World 3: Sky World! All the essential tools and languages are in your inventory. In the next World, you'll learn to coordinate all of this with Agentic DevOps.*

---

<div align="center">

⬅️ [Previous: Level 3-5: Open Source](3-5-open_source.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 3-7: Best Practices](3-7-boas_praticas.md)

</div>
