---
title: "Fase 4-6 -- Moedas, Estrelas e Cogumelos: Estruturas de Dados e JSON"
description: "Arrays, objetos, JSON, parsing, estruturas aninhadas e respostas de API — como organizar os tesouros do Mushroom Kingdom"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agentic-devops
  - mario
  - world-4
  - estruturas-dados
  - json
  - arrays
  - objetos
  - api
---

# Fase 4-6 -- Moedas, Estrelas e Cogumelos: Estruturas de Dados e JSON

---

## Change Log

| Versao | Data       | Autor                                  | Descricao          |
|--------|------------|----------------------------------------|--------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Criacao inicial    |

---

## Sumario

- [Prologo: O Inventario do Mario](#prologo-o-inventario-do-mario)
- [1. Por Que Estruturas de Dados Importam?](#1-por-que-estruturas-de-dados-importam)
  - [1.1 Dados Estao em Todo Lugar](#11-dados-estao-em-todo-lugar)
  - [1.2 O Problema dos Dados Desorganizados](#12-o-problema-dos-dados-desorganizados)
- [2. Tipos Primitivos: Os Itens Basicos](#2-tipos-primitivos-os-itens-basicos)
  - [2.1 String, Number, Boolean, Null, Undefined](#21-string-number-boolean-null-undefined)
  - [2.2 Quando Usar Cada Tipo](#22-quando-usar-cada-tipo)
- [3. Arrays: Fila de Moedas](#3-arrays-fila-de-moedas)
  - [3.1 O Que E um Array](#31-o-que-e-um-array)
  - [3.2 Operacoes Basicas com Arrays](#32-operacoes-basicas-com-arrays)
  - [3.3 Metodos Poderosos de Array](#33-metodos-poderosos-de-array)
  - [3.4 Encadeando Metodos](#34-encadeando-metodos)
- [4. Objetos: Bau do Tesouro](#4-objetos-bau-do-tesouro)
  - [4.1 O Que E um Objeto](#41-o-que-e-um-objeto)
  - [4.2 Acessando Propriedades](#42-acessando-propriedades)
  - [4.3 Manipulando Objetos](#43-manipulando-objetos)
  - [4.4 Destructuring: Abrindo o Bau](#44-destructuring-abrindo-o-bau)
  - [4.5 Spread Operator: Clonando o Bau](#45-spread-operator-clonando-o-bau)
- [5. JSON: O Mapa do Tesouro Universal](#5-json-o-mapa-do-tesouro-universal)
  - [5.1 O Que E JSON](#51-o-que-e-json)
  - [5.2 Regras do JSON](#52-regras-do-json)
  - [5.3 JSON vs Objeto JavaScript](#53-json-vs-objeto-javascript)
  - [5.4 Parsing e Stringify](#54-parsing-e-stringify)
- [6. Estruturas Aninhadas: Bau Dentro de Bau](#6-estruturas-aninhadas-bau-dentro-de-bau)
  - [6.1 Arrays de Objetos](#61-arrays-de-objetos)
  - [6.2 Objetos com Arrays](#62-objetos-com-arrays)
  - [6.3 Estruturas Profundamente Aninhadas](#63-estruturas-profundamente-aninhadas)
  - [6.4 Acessando Dados Aninhados com Seguranca](#64-acessando-dados-aninhados-com-seguranca)
- [7. Respostas de API: O Formato Padrao](#7-respostas-de-api-o-formato-padrao)
  - [7.1 Estrutura de Resposta Padrao](#71-estrutura-de-resposta-padrao)
  - [7.2 Paginacao](#72-paginacao)
  - [7.3 Erros Padronizados](#73-erros-padronizados)
  - [7.4 Consumindo APIs: Fetch e Axios](#74-consumindo-apis-fetch-e-axios)
- [8. Map, Set e Outras Estruturas](#8-map-set-e-outras-estruturas)
  - [8.1 Map: O Dicionario de Traducao](#81-map-o-dicionario-de-traducao)
  - [8.2 Set: A Colecao Sem Repetidos](#82-set-a-colecao-sem-repetidos)
  - [8.3 Stack e Queue: Pilha e Fila](#83-stack-e-queue-pilha-e-fila)
- [9. TypeScript: Tipos para Suas Estruturas](#9-typescript-tipos-para-suas-estruturas)
  - [9.1 Interfaces e Types](#91-interfaces-e-types)
  - [9.2 Generics: Estruturas Flexiveis](#92-generics-estruturas-flexiveis)
- [10. Tabela Final de Resumo](#10-tabela-final-de-resumo)
- [Referencias](#referencias)

---

## Prologo: O Inventario do Mario

Sofia estava construindo a API do TodoApp e precisava decidir como organizar os dados. Quando um usuario pedia a lista de tarefas, como o servidor deveria responder? Como representar uma tarefa que tem titulo, descricao, prioridade, data de criacao e subtarefas?

Toad — o guardiao dos dados — sentou com Sofia.

*"Sofia, pense no inventario do Mario. Mario coleta muitos itens: moedas, cogumelos, estrelas, flores de fogo. Cada item tem propriedades diferentes. Uma moeda tem apenas valor. Um cogumelo tem tipo e efeito. Uma estrela tem duracao. Como organizar tudo isso?"*

Sofia pensou. *"Uma lista de itens?"*

*"Sim! Uma lista (**array**) de itens. E cada item e um **objeto** com propriedades. E o formato universal para trocar essas informacoes entre sistemas e o **JSON**. E o mapa do tesouro que QUALQUER sistema consegue ler."*

---

## 1. Por Que Estruturas de Dados Importam?

### 1.1 Dados Estao em Todo Lugar

Todo software trabalha com dados. Todo dado precisa de organizacao.

| Onde | Dados | Estrutura |
|------|-------|-----------|
| **Banco de dados** | Usuarios, tarefas, comentarios | Tabelas e relacoes |
| **API** | Requisicoes e respostas | JSON |
| **Frontend** | Estado da aplicacao | Objetos e arrays |
| **Configuracao** | Settings da app | JSON, YAML, ENV |
| **Cache** | Dados temporarios | Key-value pairs |

### 1.2 O Problema dos Dados Desorganizados

```javascript
// RUIM: Dados desorganizados
const todoTitle = "Comprar cogumelos";
const todoPriority = "high";
const todoCompleted = false;
const todoUserId = "mario-001";
// E se tiver 100 tarefas? 400 variaveis?

// BOM: Dados organizados em objeto
const todo = {
  title: "Comprar cogumelos",
  priority: "high",
  completed: false,
  userId: "mario-001"
};

// MELHOR: Lista de tarefas em array de objetos
const todos = [
  { title: "Comprar cogumelos", priority: "high", completed: false },
  { title: "Salvar Peach", priority: "urgent", completed: false },
  { title: "Coletar 100 moedas", priority: "medium", completed: true }
];
```

---

## 2. Tipos Primitivos: Os Itens Basicos

### 2.1 String, Number, Boolean, Null, Undefined

| Tipo | O Que E | Exemplo | Analogia Mario |
|------|---------|---------|----------------|
| **String** | Texto | `"Mario"` | Nome escrito no bone |
| **Number** | Numero | `42`, `3.14` | Quantidade de moedas |
| **Boolean** | Verdadeiro/Falso | `true`, `false` | Estrela ativa? Sim/Nao |
| **Null** | Vazio intencional | `null` | Slot de item vazio (por escolha) |
| **Undefined** | Nao definido | `undefined` | Slot que nunca existiu |

```javascript
const playerName = "Mario";        // String
const coins = 42;                  // Number
const hasStarPower = true;         // Boolean
const equippedItem = null;         // Null — Mario escolheu nao equipar nada
let nextPowerUp;                   // Undefined — ainda nao foi definido
```

### 2.2 Quando Usar Cada Tipo

```javascript
// No TodoApp
const todo = {
  id: "todo-001",              // String (identificador unico)
  title: "Comprar cogumelos",  // String (texto do usuario)
  priority: 3,                 // Number (1-5)
  completed: false,            // Boolean (sim/nao)
  deletedAt: null,            // Null (nao foi deletado — soft delete)
  // description: ???          // Undefined (campo opcional nao fornecido)
};
```

---

## 3. Arrays: Fila de Moedas

### 3.1 O Que E um Array

Um **array** e uma lista ordenada de elementos. Cada elemento tem uma posicao (index) comecando em 0.

> **Analogia Mario**: Um array e uma **fila de moedas** alinhadas. A primeira moeda esta na posicao 0, a segunda na posicao 1, e assim por diante. Voce pode adicionar moedas no final, remover do inicio, ou pegar uma moeda especifica pela posicao.

```javascript
// Array simples — fila de moedas
const coins = ["gold", "gold", "silver", "gold", "star-coin"];
//              [0]     [1]     [2]       [3]     [4]

console.log(coins[0]);       // "gold" — primeira moeda
console.log(coins[4]);       // "star-coin" — ultima moeda
console.log(coins.length);   // 5 — total de moedas
```

### 3.2 Operacoes Basicas com Arrays

```javascript
const items = ["mushroom", "fire-flower", "star"];

// Adicionar no final
items.push("cape-feather");
// ["mushroom", "fire-flower", "star", "cape-feather"]

// Adicionar no inicio
items.unshift("coin");
// ["coin", "mushroom", "fire-flower", "star", "cape-feather"]

// Remover do final
const lastItem = items.pop();
// lastItem = "cape-feather"
// ["coin", "mushroom", "fire-flower", "star"]

// Remover do inicio
const firstItem = items.shift();
// firstItem = "coin"
// ["mushroom", "fire-flower", "star"]

// Verificar se contem
items.includes("star");     // true
items.includes("yoshi");    // false

// Encontrar posicao
items.indexOf("fire-flower"); // 1
items.indexOf("yoshi");       // -1 (nao encontrado)

// Tamanho
items.length;                 // 3
```

### 3.3 Metodos Poderosos de Array

```javascript
const todos = [
  { id: 1, title: "Salvar Peach", priority: "high", completed: false },
  { id: 2, title: "Coletar moedas", priority: "low", completed: true },
  { id: 3, title: "Derrotar Bowser", priority: "high", completed: false },
  { id: 4, title: "Encontrar Yoshi", priority: "medium", completed: true },
  { id: 5, title: "Comprar cogumelos", priority: "low", completed: false },
];

// FILTER: Filtrar (pegar apenas os que atendem uma condicao)
const pendentes = todos.filter(todo => !todo.completed);
// [{ id: 1, ... }, { id: 3, ... }, { id: 5, ... }]

const highPriority = todos.filter(todo => todo.priority === "high");
// [{ id: 1, title: "Salvar Peach" }, { id: 3, title: "Derrotar Bowser" }]

// MAP: Transformar (criar novo array com itens modificados)
const titles = todos.map(todo => todo.title);
// ["Salvar Peach", "Coletar moedas", "Derrotar Bowser", ...]

const withStatus = todos.map(todo => ({
  ...todo,
  status: todo.completed ? "DONE" : "PENDING"
}));

// FIND: Encontrar o primeiro que atende a condicao
const bowserTask = todos.find(todo => todo.title.includes("Bowser"));
// { id: 3, title: "Derrotar Bowser", ... }

// SOME: Algum atende a condicao? (retorna boolean)
const hasUrgent = todos.some(todo => todo.priority === "high");
// true

// EVERY: Todos atendem a condicao? (retorna boolean)
const allDone = todos.every(todo => todo.completed);
// false

// REDUCE: Acumular/agregar valores
const totalCompleted = todos.reduce((count, todo) => {
  return todo.completed ? count + 1 : count;
}, 0);
// 2

// SORT: Ordenar
const byPriority = [...todos].sort((a, b) => {
  const order = { high: 1, medium: 2, low: 3 };
  return order[a.priority] - order[b.priority];
});
```

> **Analogia Mario**:
> - **filter** = pegar so as moedas de ouro (ignorar as de prata)
> - **map** = transformar todas as moedas em estrelas
> - **find** = encontrar a primeira estrela dourada
> - **some** = alguma moeda e especial?
> - **every** = todas as moedas foram coletadas?
> - **reduce** = contar o valor total de todas as moedas

### 3.4 Encadeando Metodos

```javascript
// Pegar os titulos das tarefas pendentes de alta prioridade, em maiusculas
const urgentTitles = todos
  .filter(todo => !todo.completed)           // So pendentes
  .filter(todo => todo.priority === "high")  // So alta prioridade
  .map(todo => todo.title.toUpperCase())     // Pegar titulo em maiusculas
  .sort();                                    // Ordenar A-Z

// ["DERROTAR BOWSER", "SALVAR PEACH"]
```

---

## 4. Objetos: Bau do Tesouro

### 4.1 O Que E um Objeto

Um **objeto** e uma colecao de pares **chave-valor**. Cada chave e unica e mapeia para um valor.

> **Analogia Mario**: Um objeto e um **bau do tesouro** com compartimentos etiquetados. Cada compartimento (chave) tem uma etiqueta (nome) e guarda um item (valor). Voce abre o compartimento "name" e encontra "Mario". Abre "coins" e encontra 42.

```javascript
// Objeto: Bau do Tesouro do Mario
const mario = {
  name: "Mario",              // String
  coins: 42,                  // Number
  lives: 3,                   // Number
  hasStarPower: false,        // Boolean
  currentWorld: "4-6",        // String
  items: ["mushroom", "fire-flower"],  // Array
  stats: {                    // Objeto aninhado
    jumps: 1247,
    enemies: 89,
    deaths: 12
  }
};
```

### 4.2 Acessando Propriedades

```javascript
// Notacao de ponto (mais comum)
mario.name;          // "Mario"
mario.coins;         // 42
mario.stats.jumps;   // 1247

// Notacao de colchetes (para chaves dinamicas)
mario["name"];       // "Mario"
const key = "coins";
mario[key];          // 42

// Verificar se propriedade existe
"name" in mario;             // true
"powerLevel" in mario;       // false
mario.hasOwnProperty("coins"); // true
```

### 4.3 Manipulando Objetos

```javascript
const todo = {
  id: "todo-001",
  title: "Salvar Peach",
  completed: false
};

// Adicionar propriedade
todo.priority = "high";
todo.createdAt = new Date().toISOString();

// Modificar propriedade
todo.completed = true;
todo.title = "Salvar Peach (URGENTE)";

// Remover propriedade
delete todo.priority;

// Listar chaves
Object.keys(todo);     // ["id", "title", "completed", "createdAt"]

// Listar valores
Object.values(todo);   // ["todo-001", "Salvar Peach (URGENTE)", true, "2026-03-18..."]

// Listar pares [chave, valor]
Object.entries(todo);  // [["id", "todo-001"], ["title", "Salvar Peach..."], ...]

// Iterar sobre propriedades
for (const [key, value] of Object.entries(todo)) {
  console.log(`${key}: ${value}`);
}
```

### 4.4 Destructuring: Abrindo o Bau

**Destructuring** permite extrair valores de objetos em variaveis de forma elegante.

> **Analogia Mario**: Em vez de abrir o bau e pegar cada item um por um, voce abre o bau e todos os itens que precisa saltam diretamente para suas maos.

```javascript
const todo = {
  id: "todo-001",
  title: "Salvar Peach",
  priority: "high",
  completed: false,
  userId: "mario-001"
};

// Sem destructuring (verboso)
const id = todo.id;
const title = todo.title;
const priority = todo.priority;

// Com destructuring (elegante)
const { id, title, priority } = todo;

// Com rename
const { id: todoId, title: todoTitle } = todo;

// Com valor padrao
const { category = "geral" } = todo;  // "geral" (nao existe em todo)

// Em parametros de funcao
function displayTodo({ title, priority, completed }) {
  console.log(`[${priority}] ${title} - ${completed ? 'DONE' : 'PENDING'}`);
}
displayTodo(todo);  // [high] Salvar Peach - PENDING
```

### 4.5 Spread Operator: Clonando o Bau

**Spread operator (...)** permite clonar e combinar objetos.

> **Analogia Mario**: Spread e como criar uma **copia exata** de um bau do tesouro. Voce pode copiar tudo e adicionar itens extras, ou combinar dois baus em um.

```javascript
const todo = { id: 1, title: "Salvar Peach", completed: false };

// Clonar objeto (copia superficial)
const todoCopy = { ...todo };

// Clonar e modificar
const updatedTodo = { ...todo, completed: true, updatedAt: new Date() };
// { id: 1, title: "Salvar Peach", completed: true, updatedAt: ... }

// Combinar objetos
const defaults = { priority: "medium", category: "geral" };
const userInput = { title: "Nova tarefa", priority: "high" };
const newTodo = { ...defaults, ...userInput, id: generateId() };
// { priority: "high", category: "geral", title: "Nova tarefa", id: "..." }
// Note: priority de userInput sobrescreveu o de defaults
```

---

## 5. JSON: O Mapa do Tesouro Universal

### 5.1 O Que E JSON

**JSON (JavaScript Object Notation)** e um formato de texto leve para troca de dados. E o formato padrao para comunicacao entre APIs.

> **Analogia Mario**: JSON e o **mapa do tesouro universal** do Mushroom Kingdom. Nao importa se voce fala a lingua do Mario (JavaScript), do Luigi (Python) ou do Toad (Java) — todos conseguem ler o mesmo mapa JSON. E o esperanto dos dados.

```json
{
  "player": "Mario",
  "world": "4-6",
  "coins": 42,
  "lives": 3,
  "hasStarPower": false,
  "items": ["mushroom", "fire-flower"],
  "currentPosition": {
    "x": 128,
    "y": 64
  }
}
```

### 5.2 Regras do JSON

| Regra | Valido | Invalido |
|-------|--------|----------|
| Chaves DEVEM ser strings com aspas duplas | `"name": "Mario"` | `name: "Mario"` ou `'name': 'Mario'` |
| Strings DEVEM usar aspas duplas | `"Mario"` | `'Mario'` |
| Sem trailing comma | `{"a": 1, "b": 2}` | `{"a": 1, "b": 2,}` |
| Sem comentarios | (sem comentarios) | `// isso e um comentario` |
| Sem funcoes | (apenas dados) | `"action": function() {}` |
| Sem undefined | `null` | `undefined` |

```json
// VALIDO ✅
{
  "name": "Mario",
  "age": 35,
  "isHero": true,
  "enemy": null,
  "items": ["mushroom", "star"]
}

// INVALIDO ❌
{
  name: "Mario",          // chave sem aspas
  'age': 35,              // aspas simples
  "isHero": true,
  "items": ["mushroom",], // trailing comma
  // comentario           // comentarios nao permitidos
}
```

### 5.3 JSON vs Objeto JavaScript

```javascript
// Objeto JavaScript — vive na memoria do programa
const marioObj = {
  name: "Mario",       // chave sem aspas (valido em JS)
  greet() {            // pode ter funcoes
    return `Hi, I'm ${this.name}`;
  },
  age: undefined       // pode ter undefined
};

// JSON — formato de TEXTO para transporte
const marioJson = '{"name": "Mario", "age": 35, "isHero": true}';
// Sem funcoes, sem undefined, chaves com aspas duplas
```

### 5.4 Parsing e Stringify

```javascript
// JSON.stringify — Objeto → Texto JSON (empacotar o bau para transporte)
const todo = { id: 1, title: "Salvar Peach", completed: false };
const jsonString = JSON.stringify(todo);
// '{"id":1,"title":"Salvar Peach","completed":false}'

// Com formatacao bonita (para debug)
const prettyJson = JSON.stringify(todo, null, 2);
// {
//   "id": 1,
//   "title": "Salvar Peach",
//   "completed": false
// }

// JSON.parse — Texto JSON → Objeto (abrir o bau transportado)
const jsonFromApi = '{"id":1,"title":"Salvar Peach","completed":false}';
const todoObj = JSON.parse(jsonFromApi);
console.log(todoObj.title);  // "Salvar Peach"

// CUIDADO: JSON.parse pode lancar erro se o JSON for invalido
try {
  const data = JSON.parse("isso nao e json");
} catch (error) {
  console.error("JSON invalido:", error.message);
  // SyntaxError: Unexpected token i in JSON at position 0
}
```

> **Analogia Mario**:
> - `JSON.stringify` = embalar o bau do tesouro para enviar pelo correio (objeto → texto)
> - `JSON.parse` = desembalar o bau quando chega (texto → objeto)

---

## 6. Estruturas Aninhadas: Bau Dentro de Bau

### 6.1 Arrays de Objetos

A estrutura mais comum em APIs: uma lista de "coisas", onde cada "coisa" tem propriedades.

```javascript
// Array de tarefas — cada tarefa e um objeto
const todos = [
  {
    id: "todo-001",
    title: "Salvar Peach",
    priority: "high",
    completed: false,
    tags: ["urgente", "principal"]
  },
  {
    id: "todo-002",
    title: "Coletar 100 moedas",
    priority: "medium",
    completed: true,
    tags: ["colecao"]
  },
  {
    id: "todo-003",
    title: "Encontrar todas as estrelas",
    priority: "low",
    completed: false,
    tags: ["colecao", "exploracao"]
  }
];

// Operacoes comuns
const pendentes = todos.filter(t => !t.completed);
const urgentes = todos.filter(t => t.tags.includes("urgente"));
const titulos = todos.map(t => t.title);
```

### 6.2 Objetos com Arrays

```javascript
// Usuario com lista de tarefas
const user = {
  id: "mario-001",
  name: "Mario",
  email: "mario@mushroom.com",
  role: "admin",
  todos: [
    { id: 1, title: "Salvar Peach", completed: false },
    { id: 2, title: "Derrotar Bowser", completed: false }
  ],
  teams: ["mushroom-squad", "star-team"],
  settings: {
    theme: "dark",
    language: "pt-BR",
    notifications: {
      email: true,
      push: false,
      sms: false
    }
  }
};
```

### 6.3 Estruturas Profundamente Aninhadas

```json
{
  "game": {
    "title": "Super Mario Bros",
    "worlds": [
      {
        "id": 4,
        "name": "Mundo Aquatico",
        "theme": "underwater",
        "levels": [
          {
            "id": "4-1",
            "name": "Protecao Avancada",
            "enemies": [
              { "type": "Cheep Cheep", "count": 12, "speed": "medium" },
              { "type": "Blooper", "count": 5, "speed": "fast" }
            ],
            "powerUps": ["mushroom", "fire-flower"],
            "secrets": {
              "hiddenBlocks": 3,
              "warpPipe": { "destination": "4-3", "hidden": true }
            }
          }
        ]
      }
    ]
  }
}
```

### 6.4 Acessando Dados Aninhados com Seguranca

```javascript
const data = { game: { worlds: [{ levels: [{ name: "4-1" }] }] } };

// PERIGOSO: Se qualquer nivel for null/undefined, CRASH
const levelName = data.game.worlds[0].levels[0].name; // Funciona aqui...
const bad = data.game.worlds[5].levels[0].name; // TypeError: Cannot read property 'levels' of undefined

// SEGURO: Optional Chaining (?.)
const safeName = data?.game?.worlds?.[0]?.levels?.[0]?.name;
// "4-1" (ou undefined se qualquer parte nao existir)

const safeNotFound = data?.game?.worlds?.[5]?.levels?.[0]?.name;
// undefined (sem crash!)

// Com valor padrao (Nullish Coalescing ??)
const nameOrDefault = data?.game?.worlds?.[5]?.levels?.[0]?.name ?? "Nivel desconhecido";
// "Nivel desconhecido"
```

> **Analogia Mario**: Optional chaining e como abrir um bau com cuidado. Se o bau nao existir, voce simplesmente para — em vez de explodir tentando abrir algo que nao esta la.

---

## 7. Respostas de API: O Formato Padrao

### 7.1 Estrutura de Resposta Padrao

```javascript
// Resposta de SUCESSO — lista
{
  "success": true,
  "data": [
    { "id": 1, "title": "Salvar Peach", "completed": false },
    { "id": 2, "title": "Coletar moedas", "completed": true }
  ],
  "meta": {
    "total": 42,
    "page": 1,
    "perPage": 10,
    "totalPages": 5
  }
}

// Resposta de SUCESSO — item unico
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Salvar Peach",
    "priority": "high",
    "completed": false,
    "createdAt": "2026-03-18T10:30:00Z",
    "updatedAt": "2026-03-18T14:20:00Z"
  }
}

// Resposta de ERRO
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Tarefa nao encontrada",
    "details": {
      "todoId": "todo-999",
      "hint": "Verifique se o ID esta correto"
    }
  }
}
```

### 7.2 Paginacao

```javascript
// Requisicao: GET /api/todos?page=2&perPage=10&sort=createdAt&order=desc

// Resposta com paginacao
{
  "success": true,
  "data": [
    // ... 10 tarefas da pagina 2
  ],
  "meta": {
    "total": 42,
    "page": 2,
    "perPage": 10,
    "totalPages": 5,
    "hasNextPage": true,
    "hasPreviousPage": true
  },
  "links": {
    "self": "/api/todos?page=2&perPage=10",
    "first": "/api/todos?page=1&perPage=10",
    "previous": "/api/todos?page=1&perPage=10",
    "next": "/api/todos?page=3&perPage=10",
    "last": "/api/todos?page=5&perPage=10"
  }
}
```

### 7.3 Erros Padronizados

| Status Code | Significado | Quando Usar |
|-------------|-------------|-------------|
| **200** | OK | Sucesso geral |
| **201** | Created | Recurso criado com sucesso |
| **204** | No Content | Deletado com sucesso (sem corpo) |
| **400** | Bad Request | Dados invalidos enviados |
| **401** | Unauthorized | Nao autenticado |
| **403** | Forbidden | Autenticado mas sem permissao |
| **404** | Not Found | Recurso nao encontrado |
| **409** | Conflict | Conflito (ex: email duplicado) |
| **422** | Unprocessable Entity | Validacao falhou |
| **429** | Too Many Requests | Rate limit excedido |
| **500** | Internal Server Error | Bug no servidor |

### 7.4 Consumindo APIs: Fetch e Axios

```javascript
// Usando Fetch (nativo do browser e Node.js 18+)
async function getTodos() {
  try {
    const response = await fetch('/api/todos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();  // Parse do JSON
    return result.data;  // Array de todos
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    throw error;
  }
}

// Usando Axios (biblioteca popular)
const axios = require('axios');

async function createTodo(title, priority) {
  try {
    const response = await axios.post('/api/todos', {
      title,
      priority
    }, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return response.data.data;  // O todo criado
  } catch (error) {
    if (error.response) {
      // Servidor respondeu com erro
      console.error('Erro:', error.response.data.error.message);
    } else {
      // Erro de rede
      console.error('Erro de rede:', error.message);
    }
    throw error;
  }
}
```

---

## 8. Map, Set e Outras Estruturas

### 8.1 Map: O Dicionario de Traducao

**Map** e como um objeto, mas com chaves de QUALQUER tipo (nao apenas strings).

> **Analogia Mario**: Map e um **dicionario de traducao** onde a "chave" pode ser qualquer coisa — um objeto, um numero, outro mapa. Enquanto objetos so aceitam strings como chave, Map aceita tudo.

```javascript
const userCache = new Map();

// Chaves podem ser qualquer tipo
userCache.set("mario-001", { name: "Mario", role: "admin" });
userCache.set("luigi-002", { name: "Luigi", role: "user" });

// Operacoes
userCache.get("mario-001");      // { name: "Mario", role: "admin" }
userCache.has("mario-001");      // true
userCache.size;                  // 2
userCache.delete("luigi-002");   // Remove Luigi

// Iterar
for (const [key, value] of userCache) {
  console.log(`${key}: ${value.name}`);
}
```

### 8.2 Set: A Colecao Sem Repetidos

**Set** e uma colecao onde cada valor e **unico** — nao permite duplicados.

> **Analogia Mario**: Set e como uma **colecao de figurinhas** — voce nao pode ter duas figurinhas iguais. Se tentar adicionar uma que ja tem, ela e ignorada.

```javascript
const uniqueTags = new Set();

uniqueTags.add("urgente");
uniqueTags.add("trabalho");
uniqueTags.add("urgente");    // Ignorado! Ja existe
uniqueTags.add("pessoal");

console.log(uniqueTags.size);  // 3 (nao 4!)
console.log([...uniqueTags]);  // ["urgente", "trabalho", "pessoal"]

// Uso pratico: remover duplicados de um array
const tags = ["mario", "luigi", "mario", "toad", "luigi"];
const uniqueArray = [...new Set(tags)];
// ["mario", "luigi", "toad"]
```

### 8.3 Stack e Queue: Pilha e Fila

```javascript
// STACK (Pilha) — LIFO: Last In, First Out
// Analogia: Pilha de moedas — a ultima colocada e a primeira tirada
const stack = [];
stack.push("moeda-1");  // Colocar no topo
stack.push("moeda-2");
stack.push("moeda-3");
stack.pop();             // Remove "moeda-3" (topo)

// QUEUE (Fila) — FIFO: First In, First Out
// Analogia: Fila de Toads esperando para entrar no castelo
const queue = [];
queue.push("Toad-1");   // Entrar no final da fila
queue.push("Toad-2");
queue.push("Toad-3");
queue.shift();           // Remove "Toad-1" (primeiro da fila)
```

---

## 9. TypeScript: Tipos para Suas Estruturas

### 9.1 Interfaces e Types

```typescript
// Definir a FORMA dos dados com TypeScript
interface Todo {
  id: string;
  title: string;
  description?: string;     // Opcional (?)
  priority: 'low' | 'medium' | 'high';  // Union type
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  userId: string;
  tags: string[];            // Array de strings
  subtasks?: Subtask[];      // Array opcional de subtarefas
}

interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'moderator' | 'user';
  todos: Todo[];
  settings: UserSettings;
}

interface UserSettings {
  theme: 'light' | 'dark';
  language: string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
}

// API Response generico
interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta?: {
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
  };
  error?: {
    code: string;
    message: string;
  };
}

// Uso
type TodoListResponse = ApiResponse<Todo[]>;
type SingleTodoResponse = ApiResponse<Todo>;
type UserResponse = ApiResponse<User>;
```

### 9.2 Generics: Estruturas Flexiveis

```typescript
// Funcao generica que funciona com qualquer tipo
function findById<T extends { id: string }>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}

// Funciona com Todo
const todo = findById<Todo>(todos, "todo-001");

// Funciona com User
const user = findById<User>(users, "mario-001");

// Funciona com qualquer coisa que tenha 'id'
```

---

## 10. Tabela Final de Resumo

| Conceito | O Que E | Analogia Mario |
|----------|---------|----------------|
| **Array** | Lista ordenada de elementos | Fila de moedas [coin, coin, coin] |
| **Objeto** | Colecao de chave-valor | Bau do tesouro {name: "star", power: 100} |
| **JSON** | Formato texto para troca de dados | Mapa do tesouro universal |
| **Aninhamento** | Estrutura dentro de estrutura | Bau dentro de bau |
| **filter** | Selecionar itens que atendem condicao | Pegar so moedas de ouro |
| **map** | Transformar cada item | Transformar moedas em estrelas |
| **find** | Encontrar primeiro item | Encontrar a estrela dourada |
| **reduce** | Acumular valores | Contar total de moedas |
| **Destructuring** | Extrair valores elegantemente | Abrir bau e itens saltam pra mao |
| **Spread** | Clonar/combinar estruturas | Clonar bau do tesouro |
| **Optional Chaining** | Acessar dados aninhados com seguranca | Abrir bau com cuidado |
| **Map (estrutura)** | Dicionario com chaves de qualquer tipo | Dicionario de traducao |
| **Set** | Colecao sem duplicados | Colecao de figurinhas |
| **Stack** | Pilha (LIFO) | Pilha de moedas |
| **Queue** | Fila (FIFO) | Fila de Toads |

---

## Referencias

- [MDN — JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [MDN — Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN — JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [MDN — Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [MDN — Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN — Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [TypeScript — Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [JSON.org — Especificacao](https://www.json.org/json-en.html)
- [Axios — HTTP Client](https://axios-http.com/docs/intro)
- [Microsoft — REST API Guidelines](https://github.com/microsoft/api-guidelines)

---

*Fase 4-6 completa! Voce aprendeu como organizar dados com arrays, objetos e JSON. Na proxima fase, vamos explorar cache e performance — como fazer tudo rodar na velocidade da Super Star. Prepare-se para o Nivel 4-7!*

---

<div align="center">

⬅️ [Anterior: Fase 4-5: Git Workflows](4-5-git_workflows.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 4-7: Cache e Performance](4-7-cache_performance.md)

</div>
