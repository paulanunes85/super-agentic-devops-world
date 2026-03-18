---
title: "Fase 3-6 -- O Castelo dos Dados: Bancos de Dados"
description: "Bancos de dados desmistificados com analogia Mario — SQL como baus organizados, NoSQL como sacos de loot misto, CRUD como operacoes basicas do castelo, e Prisma como o assistente magico do Toad"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-3", "banco-de-dados", "sql", "nosql", "postgresql", "mongodb", "prisma"]
---

# Fase 3-6 -- O Castelo dos Dados: Bancos de Dados

---

## Change Log

| Versao | Data       | Autor                                      | Descricao                     |
|--------|------------|--------------------------------------------|-------------------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial (Edicao Mario)|

---

## Sumario

- [Prologo: O Cofre do Toad](#prologo-o-cofre-do-toad)
- [1. O Que e um Banco de Dados?](#1-o-que-e-um-banco-de-dados)
  - [1.1 Dados Sao o Tesouro do Reino](#11-dados-sao-o-tesouro-do-reino)
  - [1.2 Por Que Nao Guardar em Arquivos?](#12-por-que-nao-guardar-em-arquivos)
  - [1.3 O Papel do Banco de Dados](#13-o-papel-do-banco-de-dados)
- [2. SQL vs NoSQL: Baus Organizados vs Sacos de Loot](#2-sql-vs-nosql-baus-organizados-vs-sacos-de-loot)
  - [2.1 Bancos Relacionais (SQL): O Castelo Organizado](#21-bancos-relacionais-sql-o-castelo-organizado)
  - [2.2 Bancos Nao-Relacionais (NoSQL): O Deposito Flexivel](#22-bancos-nao-relacionais-nosql-o-deposito-flexivel)
  - [2.3 Tabela Comparativa: SQL vs NoSQL](#23-tabela-comparativa-sql-vs-nosql)
  - [2.4 Quando Usar Cada Um](#24-quando-usar-cada-um)
- [3. CRUD: As 4 Operacoes Fundamentais](#3-crud-as-4-operacoes-fundamentais)
  - [3.1 Create -- Guardar Tesouro Novo](#31-create----guardar-tesouro-novo)
  - [3.2 Read -- Consultar o Tesouro](#32-read----consultar-o-tesouro)
  - [3.3 Update -- Atualizar o Tesouro](#33-update----atualizar-o-tesouro)
  - [3.4 Delete -- Remover Tesouro](#34-delete----remover-tesouro)
  - [3.5 Tabela CRUD Completa](#35-tabela-crud-completa)
- [4. Tabelas: As Prateleiras Organizadas](#4-tabelas-as-prateleiras-organizadas)
  - [4.1 Estrutura de uma Tabela](#41-estrutura-de-uma-tabela)
  - [4.2 Tipos de Dados: Tipos de Tesouro](#42-tipos-de-dados-tipos-de-tesouro)
  - [4.3 Primary Key: O ID Unico do Tesouro](#43-primary-key-o-id-unico-do-tesouro)
  - [4.4 Constraints: Regras da Prateleira](#44-constraints-regras-da-prateleira)
- [5. Relacionamentos: Conectando as Prateleiras](#5-relacionamentos-conectando-as-prateleiras)
  - [5.1 Um-para-Muitos (1:N)](#51-um-para-muitos-1n)
  - [5.2 Muitos-para-Muitos (M:N)](#52-muitos-para-muitos-mn)
  - [5.3 Um-para-Um (1:1)](#53-um-para-um-11)
  - [5.4 Foreign Keys: Os Elos de Conexao](#54-foreign-keys-os-elos-de-conexao)
  - [5.5 Diagrama ER do TodoApp](#55-diagrama-er-do-todoapp)
- [6. SQL: A Linguagem do Castelo](#6-sql-a-linguagem-do-castelo)
  - [6.1 SELECT: Buscar Tesouros](#61-select-buscar-tesouros)
  - [6.2 INSERT: Guardar Tesouros](#62-insert-guardar-tesouros)
  - [6.3 UPDATE: Atualizar Tesouros](#63-update-atualizar-tesouros)
  - [6.4 DELETE: Remover Tesouros](#64-delete-remover-tesouros)
  - [6.5 WHERE: Filtrar por Condicao](#65-where-filtrar-por-condicao)
  - [6.6 JOIN: Unir Prateleiras](#66-join-unir-prateleiras)
  - [6.7 ORDER BY e LIMIT: Organizar e Limitar](#67-order-by-e-limit-organizar-e-limitar)
  - [6.8 GROUP BY e Agregacoes](#68-group-by-e-agregacoes)
- [7. PostgreSQL: O Castelo Mais Robusto](#7-postgresql-o-castelo-mais-robusto)
  - [7.1 Por Que PostgreSQL?](#71-por-que-postgresql)
  - [7.2 Instalacao e Setup](#72-instalacao-e-setup)
  - [7.3 Criando o Banco do TodoApp](#73-criando-o-banco-do-todoapp)
  - [7.4 Funcionalidades Avancadas](#74-funcionalidades-avancadas)
- [8. MongoDB: O Deposito Flexivel](#8-mongodb-o-deposito-flexivel)
  - [8.1 Documentos em vez de Tabelas](#81-documentos-em-vez-de-tabelas)
  - [8.2 Quando MongoDB Brilha](#82-quando-mongodb-brilha)
  - [8.3 Exemplo com MongoDB](#83-exemplo-com-mongodb)
- [9. Prisma: O Assistente Magico do Toad](#9-prisma-o-assistente-magico-do-toad)
  - [9.1 O Que e um ORM?](#91-o-que-e-um-orm)
  - [9.2 Prisma Schema: O Mapa do Castelo](#92-prisma-schema-o-mapa-do-castelo)
  - [9.3 Prisma Client: O Assistente](#93-prisma-client-o-assistente)
  - [9.4 Migrations: Reformando o Castelo](#94-migrations-reformando-o-castelo)
  - [9.5 Prisma Studio: A Vista Panoramica](#95-prisma-studio-a-vista-panoramica)
- [10. Indices: O Catalogo para Busca Rapida](#10-indices-o-catalogo-para-busca-rapida)
  - [10.1 O Problema da Busca Lenta](#101-o-problema-da-busca-lenta)
  - [10.2 Como Indices Funcionam](#102-como-indices-funcionam)
  - [10.3 Criando Indices](#103-criando-indices)
  - [10.4 Quando Criar e Quando Nao Criar Indices](#104-quando-criar-e-quando-nao-criar-indices)
- [11. Seguranca do Banco de Dados](#11-seguranca-do-banco-de-dados)
  - [11.1 SQL Injection: O Ataque ao Castelo](#111-sql-injection-o-ataque-ao-castelo)
  - [11.2 Backup: O Plano de Evacuacao](#112-backup-o-plano-de-evacuacao)
  - [11.3 Senhas e Conexoes Seguras](#113-senhas-e-conexoes-seguras)
- [12. Banco de Dados na Pratica: TodoApp Completo](#12-banco-de-dados-na-pratica-todoapp-completo)
  - [12.1 Schema Completo com Prisma](#121-schema-completo-com-prisma)
  - [12.2 Queries do Dia a Dia](#122-queries-do-dia-a-dia)
  - [12.3 Docker Compose com PostgreSQL](#123-docker-compose-com-postgresql)
- [Resumo -- O que Aprendemos na Fase 3-6](#resumo----o-que-aprendemos-na-fase-3-6)
- [Referencias](#referencias)

---

## Prologo: O Cofre do Toad

Sofia construiu um TodoApp lindo. Frontend perfeito, backend funcional. Mas tinha um problema: toda vez que ela reiniciava o servidor, TODAS as tarefas desapareciam. Era como jogar Mario e perder todo o progresso ao desligar o console.

Toad -- o Engenheiro de Banco de Dados do time -- apareceu carregando um enorme livro de registros.

*"Sofia, onde voce esta guardando as tarefas?"* perguntou Toad.

*"Na memoria do servidor. Num array em JavaScript."*

Toad quase deixou o livro cair. *"Na MEMORIA? Sofia, memoria e temporaria! E como guardar moedas no bolso do Mario enquanto joga. Quando a fase termina, o bolso esvazia. Voce precisa de um COFRE."*

Toad abriu as portas de um enorme castelo. Dentro, havia prateleiras infinitas, cada uma com baus etiquetados e organizados.

*"Isso e um **Banco de Dados**. Um cofre permanente para seus dados. As tarefas ficam aqui, seguras, organizadas, e acessiveis 24 horas por dia. Mesmo que o servidor caia, os dados permanecem. Mesmo que o castelo pegue fogo, temos copias de seguranca em outros castelos."*

*"Tudo isso so para guardar tarefas?"* perguntou Sofia.

*"Tarefas, usuarios, configuracoes, logs, historico -- TUDO que importa no seu aplicativo vive no banco de dados. Se o codigo e o musculo da aplicacao, o banco de dados e o coracao. Sem ele, nada funciona."*

*"Bem-vinda a Fase 3-6 -- o Castelo dos Dados."*

---

## 1. O Que e um Banco de Dados?

### 1.1 Dados Sao o Tesouro do Reino

Em qualquer aplicacao, **dados** sao o que tem mais valor:

- **TodoApp:** As tarefas dos usuarios
- **Rede Social:** Posts, fotos, amizades
- **E-commerce:** Produtos, pedidos, pagamentos
- **Banco:** Saldos, transacoes, contas

Sem dados, a aplicacao e apenas uma casca vazia -- um castelo sem tesouros.

> **ANALOGIA MARIO:** Dados sao os **tesouros do Mushroom Kingdom**: moedas, estrelas, vidas, power-ups coletados, fases completadas, records de tempo. Imagine jogar 100 horas e perder TUDO porque nao tinha onde salvar. O banco de dados e o **cofre do castelo do Toad** -- o lugar seguro onde todos os tesouros sao guardados permanentemente.

### 1.2 Por Que Nao Guardar em Arquivos?

*"Nao posso simplesmente salvar num arquivo JSON?"*

Para projetos muito simples, sim. Mas arquivos tem problemas serios:

| Problema | Arquivo JSON | Banco de Dados |
|----------|-------------|----------------|
| **Busca** | Carrega TUDO na memoria para buscar | Busca otimizada com indices |
| **Concorrencia** | 2 usuarios escrevendo = corrompido | Multiplos usuarios simultaneos |
| **Tamanho** | Lento com milhoes de registros | Otimizado para bilhoes |
| **Seguranca** | Qualquer um pode ler o arquivo | Autenticacao e autorizacao |
| **Backup** | Manual e fragil | Automatizado e confiavel |
| **Relacionamentos** | Dificil de gerenciar | Nativo e otimizado |

### 1.3 O Papel do Banco de Dados

Um banco de dados faz muito mais que "guardar dados":

1. **Armazenar** dados de forma permanente e organizada
2. **Buscar** dados rapidamente (mesmo em bilhoes de registros)
3. **Proteger** dados contra acesso nao autorizado
4. **Garantir consistencia** (transacoes atomicas)
5. **Escalar** para milhoes de usuarios
6. **Backup** automatico contra perda de dados
7. **Relacionar** dados entre si (usuarios + tarefas)

---

## 2. SQL vs NoSQL: Baus Organizados vs Sacos de Loot

### 2.1 Bancos Relacionais (SQL): O Castelo Organizado

Bancos **relacionais** organizam dados em **tabelas** com **colunas** definidas e **linhas** de dados. Usam a linguagem **SQL** (Structured Query Language) para consultas.

```
TABELA: tarefas
+----+-----------------+-----------+---------------------+
| id | titulo          | concluida | criada_em           |
+----+-----------------+-----------+---------------------+
|  1 | Estudar Docker  | false     | 2026-03-18 10:00:00 |
|  2 | Fazer deploy    | true      | 2026-03-17 09:00:00 |
|  3 | Escrever testes | false     | 2026-03-18 14:00:00 |
+----+-----------------+-----------+---------------------+
```

> **ANALOGIA MARIO:** Bancos SQL sao como **baus de tesouro organizados com etiquetas**. Cada bau (tabela) tem compartimentos (colunas) com labels claros: "Moedas", "Estrelas", "Cogumelos". Cada item (linha) esta no compartimento certo. Voce sabe exatamente onde encontrar cada coisa. E se o item nao se encaixa em nenhum compartimento, ele NAO entra no bau.

**Exemplos de bancos SQL:**
- **PostgreSQL** -- O mais robusto e versátil (nosso foco)
- **MySQL** -- Muito popular, usado pelo WordPress
- **SQLite** -- Leve, roda em arquivo local
- **SQL Server** -- Da Microsoft, forte em ambiente corporativo

### 2.2 Bancos Nao-Relacionais (NoSQL): O Deposito Flexivel

Bancos **NoSQL** nao usam tabelas rigidas. Os dados sao guardados em formatos mais flexiveis: documentos JSON, pares chave-valor, grafos, etc.

```json
// DOCUMENTO: tarefa (MongoDB)
{
  "_id": "64a1b2c3d4e5f6a7b8c9d0e1",
  "titulo": "Estudar Docker",
  "concluida": false,
  "criada_em": "2026-03-18T10:00:00Z",
  "tags": ["docker", "devops", "prioridade-alta"],
  "subtarefas": [
    { "titulo": "Instalar Docker", "feita": true },
    { "titulo": "Criar Dockerfile", "feita": false }
  ]
}
```

> **ANALOGIA MARIO:** Bancos NoSQL sao como **sacos de loot misto**. Cada saco pode conter itens diferentes: um saco tem 3 moedas e 1 estrela, outro tem 5 cogumelos e 2 flores de fogo, outro tem so 1 capa de voo. Nao tem compartimentos fixos -- cada saco decide o que guardar. Mais flexivel, mas menos previsivel.

**Tipos de bancos NoSQL:**

| Tipo | Como funciona | Exemplo | Uso ideal |
|------|-------------|---------|-----------|
| **Documento** | JSON/BSON flexivel | MongoDB, CosmosDB | Apps com dados variados |
| **Chave-Valor** | Key → Value simples | Redis, DynamoDB | Cache, sessoes |
| **Colunar** | Colunas em vez de linhas | Cassandra, ScyllaDB | Analytics, time-series |
| **Grafo** | Nos e arestas | Neo4j, Neptune | Redes sociais, relacoes |

### 2.3 Tabela Comparativa: SQL vs NoSQL

| Aspecto | SQL (Relacional) | NoSQL (Nao-Relacional) |
|---------|-----------------|----------------------|
| **Estrutura** | Tabelas com schema fixo | Flexivel, sem schema fixo |
| **Linguagem** | SQL padronizado | Varia por banco |
| **Relacionamentos** | Nativo (JOINs) | Manual ou embutido |
| **Consistencia** | Forte (ACID) | Eventual (BASE) |
| **Escalabilidade** | Vertical (mais potencia) | Horizontal (mais maquinas) |
| **Melhor para** | Dados estruturados | Dados semi/nao-estruturados |
| **Analogia** | Baus organizados | Sacos de loot |

### 2.4 Quando Usar Cada Um

| Use SQL Quando | Use NoSQL Quando |
|---------------|-----------------|
| Dados tem estrutura clara e previsivel | Dados variam muito de registro para registro |
| Relacionamentos sao importantes | Dados sao independentes |
| Consistencia e critica (banco, saude) | Velocidade e mais importante que consistencia |
| Queries complexas (JOINs, agregacoes) | Queries simples (buscar por chave) |
| TodoApp, E-commerce, ERP | IoT, logs, cache, feeds de redes sociais |

**Para o TodoApp:** Usaremos **PostgreSQL** (SQL). Nossas tarefas tem estrutura clara (titulo, concluida, data), pertencem a usuarios (relacionamento), e precisamos de consistencia.

---

## 3. CRUD: As 4 Operacoes Fundamentais

Toda interacao com banco de dados se resume a 4 operacoes: **CRUD**.

### 3.1 Create -- Guardar Tesouro Novo

```sql
INSERT INTO tarefas (titulo, concluida) VALUES ('Estudar SQL', false);
```

> **ANALOGIA MARIO:** Create e como **guardar uma nova moeda no cofre**. Voce coletou algo, agora esta guardando permanentemente.

### 3.2 Read -- Consultar o Tesouro

```sql
SELECT * FROM tarefas;
SELECT titulo FROM tarefas WHERE concluida = false;
```

> **ANALOGIA MARIO:** Read e como **olhar dentro do cofre** para ver o que tem la. Voce pode ver tudo ou filtrar: "mostre so as moedas de ouro."

### 3.3 Update -- Atualizar o Tesouro

```sql
UPDATE tarefas SET concluida = true WHERE id = 1;
```

> **ANALOGIA MARIO:** Update e como **trocar uma moeda por uma moeda polida**. O item continua no cofre, mas com propriedades atualizadas.

### 3.4 Delete -- Remover Tesouro

```sql
DELETE FROM tarefas WHERE id = 1;
```

> **ANALOGIA MARIO:** Delete e como **tirar um item do cofre** permanentemente. Cuidado: sem backup, o item some para sempre.

### 3.5 Tabela CRUD Completa

| Operacao | SQL | HTTP Verb | Prisma | Analogia Mario |
|----------|-----|-----------|--------|----------------|
| **Create** | INSERT | POST | create() | Guardar tesouro novo |
| **Read** | SELECT | GET | findMany() / findUnique() | Consultar o cofre |
| **Update** | UPDATE | PUT/PATCH | update() | Atualizar tesouro |
| **Delete** | DELETE | DELETE | delete() | Remover tesouro |

---

## 4. Tabelas: As Prateleiras Organizadas

### 4.1 Estrutura de uma Tabela

Uma tabela e como uma **planilha** organizada:

```
TABELA: usuarios
+----+---------+-------------------+--------+---------------------+
| id | nome    | email             | ativo  | criado_em           |
+----+---------+-------------------+--------+---------------------+
|  1 | Sofia   | sofia@email.com   | true   | 2026-01-15 08:00:00 |
|  2 | Luigi   | luigi@email.com   | true   | 2026-02-20 14:30:00 |
|  3 | Peach   | peach@email.com   | false  | 2026-03-01 10:00:00 |
+----+---------+-------------------+--------+---------------------+

Coluna = Tipo de informacao (nome, email, etc.)
Linha  = Um registro especifico (um usuario)
Celula = Um dado especifico (o email do Luigi)
```

> **ANALOGIA MARIO:** Uma tabela e como uma **prateleira organizada** no castelo do Toad. A prateleira "usuarios" tem divisorias para "nome", "email", "ativo". Cada objeto na prateleira (linha) e um usuario. Cada divisoria (coluna) guarda um tipo especifico de informacao.

### 4.2 Tipos de Dados: Tipos de Tesouro

Cada coluna aceita apenas **um tipo** de dado:

| Tipo SQL | Descricao | Exemplo | Analogia Mario |
|----------|----------|---------|----------------|
| `INTEGER` | Numero inteiro | 42, -1, 0 | Quantidade de moedas |
| `TEXT` / `VARCHAR` | Texto | "Sofia", "Estudar" | Nome do personagem |
| `BOOLEAN` | Verdadeiro/Falso | true, false | Mario esta vivo? |
| `TIMESTAMP` | Data e hora | 2026-03-18 10:00 | Quando coletou o item |
| `DECIMAL` | Numero com casas | 9.99, 100.50 | Preco da loja |
| `UUID` | Identificador unico | a1b2c3d4-... | Codigo do item |
| `JSON` / `JSONB` | Dados estruturados | {"tags": [...]} | Mochila de itens |
| `SERIAL` | Inteiro auto-incremento | 1, 2, 3, 4... | Numero automatico |

### 4.3 Primary Key: O ID Unico do Tesouro

Toda tabela precisa de uma **Primary Key** (chave primaria) -- um identificador unico para cada registro. E como o **numero de serie** de cada tesouro no cofre.

```sql
CREATE TABLE tarefas (
  id SERIAL PRIMARY KEY,     -- ID unico auto-incrementado
  titulo VARCHAR(200) NOT NULL,
  concluida BOOLEAN DEFAULT false,
  criada_em TIMESTAMP DEFAULT NOW()
);
```

> **ANALOGIA MARIO:** A Primary Key e como o **numero unico de cada tesouro** no cofre. Nao podem existir dois tesouros com o mesmo numero. Se voce pedir "tesouro #42", sabe EXATAMENTE qual e. Sem ambiguidade.

### 4.4 Constraints: Regras da Prateleira

Constraints sao **regras** que os dados devem obedecer:

| Constraint | O que faz | Exemplo |
|-----------|----------|---------|
| `PRIMARY KEY` | Unico e obrigatorio | id INT PRIMARY KEY |
| `NOT NULL` | Nao pode ser vazio | titulo VARCHAR(200) NOT NULL |
| `UNIQUE` | Nao pode repetir | email VARCHAR UNIQUE |
| `DEFAULT` | Valor padrao se nao informado | concluida BOOLEAN DEFAULT false |
| `CHECK` | Validacao personalizada | CHECK (prioridade IN ('alta','media','baixa')) |
| `FOREIGN KEY` | Referencia outra tabela | usuario_id INT REFERENCES usuarios(id) |

---

## 5. Relacionamentos: Conectando as Prateleiras

### 5.1 Um-para-Muitos (1:N)

O relacionamento mais comum. **Um** registro se conecta a **muitos** registros.

```
1 Usuario → N Tarefas
Sofia tem 5 tarefas
Luigi tem 3 tarefas
Peach tem 8 tarefas
```

```sql
-- A tabela "tarefas" referencia "usuarios"
CREATE TABLE tarefas (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  usuario_id INTEGER REFERENCES usuarios(id)  -- Foreign Key!
);
```

> **ANALOGIA MARIO:** Um jogador (Mario) tem MUITAS moedas. A relacao e 1:N. Cada moeda sabe de quem e (Foreign Key = "essa moeda e do Mario"). Mas cada moeda pertence a so UM jogador.

### 5.2 Muitos-para-Muitos (M:N)

Quando muitos registros se conectam a muitos outros. Precisa de uma **tabela intermediaria**.

```
Tarefas ←→ Tags
"Estudar Docker" tem tags: "docker", "devops"
"docker" esta em: "Estudar Docker", "Criar Dockerfile"
```

```sql
-- Tabela intermediaria (junction table)
CREATE TABLE tarefas_tags (
  tarefa_id INTEGER REFERENCES tarefas(id),
  tag_id INTEGER REFERENCES tags(id),
  PRIMARY KEY (tarefa_id, tag_id)
);
```

### 5.3 Um-para-Um (1:1)

Raro. Um registro se conecta a exatamente um outro registro.

```
1 Usuario → 1 Perfil
Sofia → { avatar: "sofia.png", bio: "Dev em aprendizado" }
```

### 5.4 Foreign Keys: Os Elos de Conexao

**Foreign Key** (chave estrangeira) e a coluna que conecta uma tabela a outra.

```sql
-- Na tabela tarefas, usuario_id e uma Foreign Key
-- Ela "aponta" para a tabela usuarios

INSERT INTO tarefas (titulo, usuario_id) VALUES ('Estudar', 1);
-- Essa tarefa pertence ao usuario com id = 1 (Sofia)

-- Se tentarmos referenciar um usuario que nao existe:
INSERT INTO tarefas (titulo, usuario_id) VALUES ('Teste', 999);
-- ERRO! usuario 999 nao existe. O banco PROTEGE a integridade.
```

> **ANALOGIA MARIO:** Foreign Keys sao como **elos de corrente** conectando prateleiras diferentes. A prateleira de tarefas tem um elo que liga cada tarefa a seu dono na prateleira de usuarios. Se voce tentar conectar a um usuario que nao existe, o elo nao se fecha -- o banco impede dados orfaos.

### 5.5 Diagrama ER do TodoApp

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

## 6. SQL: A Linguagem do Castelo

### 6.1 SELECT: Buscar Tesouros

```sql
-- Buscar tudo
SELECT * FROM tarefas;

-- Buscar colunas especificas
SELECT titulo, concluida FROM tarefas;

-- Buscar com alias (apelido)
SELECT titulo AS "Tarefa", concluida AS "Feita?" FROM tarefas;
```

### 6.2 INSERT: Guardar Tesouros

```sql
-- Inserir uma tarefa
INSERT INTO tarefas (titulo, usuario_id)
VALUES ('Estudar PostgreSQL', 1);

-- Inserir multiplas de uma vez
INSERT INTO tarefas (titulo, usuario_id) VALUES
  ('Criar API', 1),
  ('Escrever testes', 1),
  ('Fazer deploy', 1);

-- Inserir e retornar o registro criado
INSERT INTO tarefas (titulo, usuario_id)
VALUES ('Nova tarefa', 1)
RETURNING *;
```

### 6.3 UPDATE: Atualizar Tesouros

```sql
-- Atualizar uma tarefa especifica
UPDATE tarefas
SET concluida = true, atualizada_em = NOW()
WHERE id = 1;

-- CUIDADO: sem WHERE, atualiza TODAS as linhas!
UPDATE tarefas SET concluida = true;  -- TODAS ficam concluidas!
```

### 6.4 DELETE: Remover Tesouros

```sql
-- Remover tarefa especifica
DELETE FROM tarefas WHERE id = 1;

-- Remover todas as tarefas concluidas
DELETE FROM tarefas WHERE concluida = true;

-- CUIDADO: sem WHERE, deleta TUDO!
DELETE FROM tarefas;  -- TODAS as tarefas somem!
```

> **ANALOGIA MARIO:** `UPDATE` e `DELETE` sem `WHERE` sao como usar `rm -rf /` no terminal -- destroem tudo. SEMPRE use `WHERE` para especificar o que quer mudar ou deletar. E como mirar antes de atirar uma fireball: sem mira, voce acerta tudo ao redor.

### 6.5 WHERE: Filtrar por Condicao

```sql
-- Tarefas nao concluidas
SELECT * FROM tarefas WHERE concluida = false;

-- Tarefas do usuario 1
SELECT * FROM tarefas WHERE usuario_id = 1;

-- Tarefas criadas hoje
SELECT * FROM tarefas WHERE criada_em >= CURRENT_DATE;

-- Combinando condicoes (AND, OR)
SELECT * FROM tarefas
WHERE concluida = false AND prioridade = 'alta';

SELECT * FROM tarefas
WHERE prioridade = 'alta' OR prioridade = 'media';

-- Busca por texto parcial (LIKE)
SELECT * FROM tarefas WHERE titulo LIKE '%Docker%';

-- Busca em lista (IN)
SELECT * FROM tarefas WHERE prioridade IN ('alta', 'media');
```

### 6.6 JOIN: Unir Prateleiras

JOINs permitem **combinar dados de tabelas diferentes** numa unica consulta.

```sql
-- Buscar tarefas COM o nome do usuario
SELECT
  tarefas.titulo,
  tarefas.concluida,
  usuarios.nome AS "dono"
FROM tarefas
INNER JOIN usuarios ON tarefas.usuario_id = usuarios.id;

-- Resultado:
-- titulo              | concluida | dono
-- --------------------|-----------|-------
-- Estudar Docker      | false     | Sofia
-- Fazer deploy        | true      | Sofia
-- Criar componente    | false     | Luigi
```

> **ANALOGIA MARIO:** JOIN e como **conectar duas prateleiras** para ver informacoes combinadas. A prateleira de tarefas sabe o `usuario_id`, mas nao o nome. A prateleira de usuarios sabe o nome. O JOIN conecta as duas: "me mostre as tarefas E o nome de quem as criou."

**Tipos de JOIN:**

| Tipo | O que retorna | Analogia |
|------|-------------|----------|
| `INNER JOIN` | So registros que existem em AMBAS as tabelas | Moedas que TEM dono |
| `LEFT JOIN` | Todos da esquerda + matches da direita | Todos os usuarios, mesmo sem tarefas |
| `RIGHT JOIN` | Todos da direita + matches da esquerda | Todas as tarefas, mesmo sem dono |
| `FULL JOIN` | Todos de ambas as tabelas | Todo mundo, com ou sem match |

### 6.7 ORDER BY e LIMIT: Organizar e Limitar

```sql
-- Ordenar por data (mais recente primeiro)
SELECT * FROM tarefas ORDER BY criada_em DESC;

-- Ordenar por prioridade e depois por titulo
SELECT * FROM tarefas ORDER BY prioridade ASC, titulo ASC;

-- Pegar apenas os 10 primeiros
SELECT * FROM tarefas ORDER BY criada_em DESC LIMIT 10;

-- Paginacao (pagina 2, 10 itens por pagina)
SELECT * FROM tarefas ORDER BY criada_em DESC LIMIT 10 OFFSET 10;
```

### 6.8 GROUP BY e Agregacoes

```sql
-- Contar tarefas por usuario
SELECT
  usuarios.nome,
  COUNT(tarefas.id) AS total_tarefas
FROM usuarios
LEFT JOIN tarefas ON usuarios.id = tarefas.usuario_id
GROUP BY usuarios.nome;

-- Resultado:
-- nome   | total_tarefas
-- -------|---------------
-- Sofia  | 5
-- Luigi  | 3
-- Peach  | 8

-- Funcoes de agregacao
SELECT
  COUNT(*) AS total,                    -- contar
  COUNT(*) FILTER (WHERE concluida) AS concluidas,  -- contar com filtro
  MIN(criada_em) AS primeira,           -- minimo
  MAX(criada_em) AS ultima              -- maximo
FROM tarefas;
```

---

## 7. PostgreSQL: O Castelo Mais Robusto

### 7.1 Por Que PostgreSQL?

PostgreSQL e o banco relacional **mais avancado** do mundo open source:

- **35+ anos** de desenvolvimento
- **ACID compliant** (consistencia garantida)
- **Extensivel** (PostGIS para geodados, pgvector para IA)
- **JSON nativo** (pode funcionar como NoSQL tambem!)
- **Performance** excelente para workloads complexos
- **Comunidade** enorme e ativa
- **Gratuito** (licenca PostgreSQL, super permissiva)

| Comparacao | PostgreSQL | MySQL | SQLite |
|-----------|-----------|-------|--------|
| **Tipo** | Servidor | Servidor | Arquivo local |
| **ACID** | Completo | Parcial | Completo |
| **JSON** | Nativo (JSONB) | Basico | Nao |
| **Extensoes** | Muitas | Poucas | Nenhuma |
| **Uso** | Producao, analytics | Web simples | Prototipo, mobile |
| **Analogia** | Castelo fortificado | Casa solida | Barraca confortavel |

### 7.2 Instalacao e Setup

**Com Docker (recomendado):**

```bash
# Rodar PostgreSQL em container
$ docker run -d \
  --name postgres-dev \
  -e POSTGRES_USER=sofia \
  -e POSTGRES_PASSWORD=minhasenha \
  -e POSTGRES_DB=todoapp \
  -p 5432:5432 \
  -v pgdata:/var/lib/postgresql/data \
  postgres:16-alpine

# Conectar ao banco
$ docker exec -it postgres-dev psql -U sofia -d todoapp
```

**Diretamente no sistema:**
- macOS: `brew install postgresql@16`
- Ubuntu: `sudo apt install postgresql-16`
- Windows: Baixar do postgresql.org

### 7.3 Criando o Banco do TodoApp

```sql
-- Criar tabela de usuarios
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  senha_hash VARCHAR(255) NOT NULL,
  ativo BOOLEAN DEFAULT true,
  criado_em TIMESTAMP DEFAULT NOW(),
  atualizado_em TIMESTAMP DEFAULT NOW()
);

-- Criar tabela de tarefas
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

-- Criar tabela de tags
CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(50) UNIQUE NOT NULL,
  cor VARCHAR(7) DEFAULT '#808080'
);

-- Criar tabela de relacao tarefas <-> tags
CREATE TABLE tarefas_tags (
  tarefa_id INTEGER REFERENCES tarefas(id) ON DELETE CASCADE,
  tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (tarefa_id, tag_id)
);

-- Inserir dados de exemplo
INSERT INTO usuarios (nome, email, senha_hash) VALUES
  ('Sofia', 'sofia@email.com', '$2b$10$hash1'),
  ('Luigi', 'luigi@email.com', '$2b$10$hash2');

INSERT INTO tarefas (titulo, prioridade, usuario_id) VALUES
  ('Estudar PostgreSQL', 'alta', 1),
  ('Criar API REST', 'alta', 1),
  ('Escrever testes', 'media', 1),
  ('Fazer deploy', 'baixa', 2);
```

### 7.4 Funcionalidades Avancadas

**JSONB -- Dados flexiveis dentro de SQL:**

```sql
-- Coluna JSONB para metadados flexiveis
ALTER TABLE tarefas ADD COLUMN metadata JSONB DEFAULT '{}';

UPDATE tarefas
SET metadata = '{"estimativa": "2h", "sprint": 5, "labels": ["backend"]}'
WHERE id = 1;

-- Buscar pelo conteudo JSON
SELECT * FROM tarefas
WHERE metadata->>'sprint' = '5';
```

**Full-Text Search -- Busca textual:**

```sql
-- Busca textual avancada
SELECT * FROM tarefas
WHERE to_tsvector('portuguese', titulo || ' ' || COALESCE(descricao, ''))
      @@ to_tsquery('portuguese', 'docker & deploy');
```

---

## 8. MongoDB: O Deposito Flexivel

### 8.1 Documentos em vez de Tabelas

MongoDB guarda dados como **documentos JSON** (BSON internamente):

```javascript
// Documento MongoDB (equivalente a uma "linha")
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

**Diferenca fundamental:** Em SQL, dados relacionados ficam em tabelas separadas (JOIN). Em MongoDB, dados relacionados podem ficar **dentro do mesmo documento** (embedding).

### 8.2 Quando MongoDB Brilha

| Cenario | MongoDB e melhor? | Por que |
|---------|------------------|---------|
| Dados com estrutura variavel | Sim | Schema flexivel |
| IoT (sensores, logs) | Sim | Volume alto, estrutura simples |
| Cache e sessoes | Sim | Rapido para leitura simples |
| Prototipagem rapida | Sim | Nao precisa definir schema |
| Transacoes complexas | Nao | SQL e mais forte aqui |
| Relacionamentos complexos | Nao | JOINs do SQL sao superiores |
| TodoApp simples | Nao | SQL e mais adequado |

### 8.3 Exemplo com MongoDB

```javascript
// Operacoes CRUD no MongoDB (Node.js driver)

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

## 9. Prisma: O Assistente Magico do Toad

### 9.1 O Que e um ORM?

**ORM** (Object-Relational Mapping) e uma ferramenta que traduz entre o mundo do codigo (objetos JavaScript/TypeScript) e o mundo do banco (tabelas SQL). Em vez de escrever SQL manualmente, voce usa metodos do ORM.

| Sem ORM (SQL puro) | Com ORM (Prisma) |
|--------------------|--------------------|
| `SELECT * FROM tarefas WHERE id = 1` | `prisma.tarefa.findUnique({ where: { id: 1 } })` |
| String SQL solta no codigo | Metodo com auto-complete e tipagem |
| Vulneravel a SQL Injection | Protegido automaticamente |
| Sem validacao de tipos | TypeScript verifica em compile time |

> **ANALOGIA MARIO:** Sem ORM, voce conversa com o cofre do Toad em **idioma antigo** (SQL puro) -- funciona, mas e facil errar. Com ORM (Prisma), voce tem um **assistente magico** que traduz seus pedidos para o idioma do cofre perfeitamente, com auto-complete e verificacao de erros.

### 9.2 Prisma Schema: O Mapa do Castelo

O **Prisma Schema** define a estrutura do seu banco de dados:

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

  tarefas     Tarefa[]  // Relacao 1:N

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

  tags        Tag[]      // Relacao M:N (implicita)

  @@map("tarefas")
}

model Tag {
  id     Int      @id @default(autoincrement())
  nome   String   @unique
  cor    String   @default("#808080")

  tarefas Tarefa[] // Relacao M:N (implicita)

  @@map("tags")
}
```

### 9.3 Prisma Client: O Assistente

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// CREATE -- Criar tarefa
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
  include: { tags: true }  // Inclui as tags na resposta
});

// READ -- Buscar tarefas do usuario com tags
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

// UPDATE -- Concluir tarefa
const atualizada = await prisma.tarefa.update({
  where: { id: 1 },
  data: { concluida: true },
});

// DELETE -- Remover tarefa
await prisma.tarefa.delete({
  where: { id: 1 },
});

// AGREGACAO -- Contar tarefas por prioridade
const contagem = await prisma.tarefa.groupBy({
  by: ['prioridade'],
  _count: { id: true },
  where: { usuarioId: 1 },
});
```

**Vantagens do Prisma:**
- **Auto-complete** total com TypeScript
- **Type safety** -- erros de tipo detectados antes de rodar
- **Queries otimizadas** geradas automaticamente
- **Protecao contra SQL Injection** nativa
- **Prisma Studio** para visualizar dados no navegador

### 9.4 Migrations: Reformando o Castelo

Quando voce muda o schema (adicionar coluna, criar tabela), precisa de uma **migration** -- uma mudanca controlada no banco.

```bash
# Criar migration apos mudar o schema
$ npx prisma migrate dev --name adicionar-prioridade

# O Prisma:
# 1. Detecta as mudancas no schema
# 2. Gera um arquivo SQL de migracao
# 3. Aplica no banco de dados
# 4. Regenera o Prisma Client
```

**Arquivo de migration gerado:**

```sql
-- prisma/migrations/20260318_adicionar_prioridade/migration.sql
ALTER TABLE "tarefas"
ADD COLUMN "prioridade" VARCHAR(10) DEFAULT 'media'
CHECK ("prioridade" IN ('alta', 'media', 'baixa'));
```

> **ANALOGIA MARIO:** Migrations sao como **reformas controladas no castelo**. Em vez de demolir e reconstruir (dropar e recriar tabelas), voce faz mudancas incrementais: adicionar um comodo aqui, ampliar uma janela ali. E tudo e documentado -- voce pode ver o historico de todas as reformas.

### 9.5 Prisma Studio: A Vista Panoramica

```bash
$ npx prisma studio
# Abre no navegador: http://localhost:5555
# Interface visual para ver e editar dados
```

O Prisma Studio e como uma **vista panoramica do castelo** -- voce ve todas as prateleiras, todos os tesouros, e pode editar diretamente pela interface.

---

## 10. Indices: O Catalogo para Busca Rapida

### 10.1 O Problema da Busca Lenta

Sem indice, o banco precisa ler TODAS as linhas para encontrar o que voce quer (full table scan). Com 1 milhao de tarefas, cada busca demora.

```sql
-- Sem indice: O banco le 1.000.000 de linhas
SELECT * FROM tarefas WHERE titulo = 'Estudar Docker';
-- Tempo: 500ms (lento!)

-- Com indice: O banco consulta o catalogo e vai direto
CREATE INDEX idx_tarefas_titulo ON tarefas(titulo);
SELECT * FROM tarefas WHERE titulo = 'Estudar Docker';
-- Tempo: 2ms (rapido!)
```

### 10.2 Como Indices Funcionam

> **ANALOGIA MARIO:** Imagine o cofre do Toad com 1 milhao de tesouros. Sem catalogo, para encontrar a "Estrela Dourada", Toad precisa abrir CADA bau um por um. Com um **catalogo organizado** (indice), Toad consulta: "Estrela Dourada → Prateleira 7, Bau 42." Vai direto. Um indice e exatamente isso -- um catalogo organizado que aponta para a localizacao exata do dado.

**Tecnicamente:** Um indice e uma estrutura de dados (geralmente B-tree) que mapeia valores da coluna para localizacoes no disco. E como o indice remissivo de um livro -- em vez de ler o livro inteiro, voce consulta o indice e vai direto a pagina certa.

### 10.3 Criando Indices

```sql
-- Indice simples (uma coluna)
CREATE INDEX idx_tarefas_usuario ON tarefas(usuario_id);

-- Indice composto (multiplas colunas)
CREATE INDEX idx_tarefas_usuario_concluida ON tarefas(usuario_id, concluida);

-- Indice unico (garante unicidade)
CREATE UNIQUE INDEX idx_usuarios_email ON usuarios(email);

-- Indice parcial (so para alguns registros)
CREATE INDEX idx_tarefas_pendentes ON tarefas(usuario_id)
WHERE concluida = false;
```

**No Prisma:**

```prisma
model Tarefa {
  // ...
  usuarioId   Int @map("usuario_id")

  @@index([usuarioId])                       // Indice simples
  @@index([usuarioId, concluida])            // Indice composto
  @@map("tarefas")
}
```

### 10.4 Quando Criar e Quando Nao Criar Indices

| Crie indice quando | NAO crie indice quando |
|-------------------|----------------------|
| Coluna usada em WHERE frequentemente | Tabela pequena (<1000 linhas) |
| Coluna usada em JOIN | Coluna raramente consultada |
| Coluna usada em ORDER BY | Coluna com poucos valores distintos (boolean) |
| Coluna com muitos valores distintos | Tabela com muitas escritas e poucas leituras |

**Custo de indices:** Indices aceleram leitura (SELECT) mas deixam escrita (INSERT/UPDATE/DELETE) um pouco mais lenta, porque o indice precisa ser atualizado junto. E um tradeoff.

---

## 11. Seguranca do Banco de Dados

### 11.1 SQL Injection: O Ataque ao Castelo

**SQL Injection** e quando um atacante insere codigo SQL malicioso atraves de inputs do usuario.

```javascript
// VULNERAVEL (NUNCA faca isso!)
const query = `SELECT * FROM usuarios WHERE email = '${email}'`;
// Se email = "'; DROP TABLE usuarios; --"
// A query vira: SELECT * FROM usuarios WHERE email = ''; DROP TABLE usuarios; --'
// TABELA INTEIRA DELETADA!

// SEGURO (use parametros ou ORM)
const query = 'SELECT * FROM usuarios WHERE email = $1';
await pool.query(query, [email]);

// MAIS SEGURO (use Prisma)
await prisma.usuario.findUnique({ where: { email } });
// Prisma NUNCA permite SQL Injection
```

> **ANALOGIA MARIO:** SQL Injection e como um **invasor que se disfarça de visitante**. Ele entra no castelo e, em vez de pedir para ver os tesouros, ele grita comandos para os guardas: "DESTRUAM TUDO!" Se os guardas obedecerem cegamente (query sem sanitizacao), o castelo e destruido. Prisma e como guardas inteligentes que verificam CADA comando antes de executar.

### 11.2 Backup: O Plano de Evacuacao

```bash
# Backup com pg_dump
$ pg_dump -U sofia todoapp > backup_20260318.sql

# Restaurar backup
$ psql -U sofia todoapp < backup_20260318.sql

# Backup automatizado com Docker
$ docker exec postgres-dev pg_dump -U sofia todoapp > backup.sql
```

**Estrategia de backup (3-2-1):**
- **3** copias dos dados
- **2** tipos de midia diferentes
- **1** copia offsite (fora do local)

### 11.3 Senhas e Conexoes Seguras

```bash
# Connection string (NUNCA exponha em codigo!)
DATABASE_URL="postgresql://sofia:SenhaForte123!@db.exemplo.com:5432/todoapp?sslmode=require"

# Regras:
# 1. Sempre use SSL (sslmode=require)
# 2. Senha forte (minimo 16 caracteres)
# 3. Connection string em .env (NUNCA no codigo)
# 4. .env no .gitignore (NUNCA no repositorio)
# 5. Diferentes credenciais para dev/staging/producao
```

---

## 12. Banco de Dados na Pratica: TodoApp Completo

### 12.1 Schema Completo com Prisma

```prisma
// prisma/schema.prisma -- Schema completo do TodoApp

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

### 12.2 Queries do Dia a Dia

```typescript
// === QUERIES COMUNS DO TODOAPP ===

// 1. Dashboard: Resumo do usuario
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

// 2. Filtrar tarefas por prioridade e status
const tarefasUrgentes = await prisma.tarefa.findMany({
  where: {
    usuarioId: userId,
    concluida: false,
    prioridade: 'ALTA',
  },
  include: { tags: true },
  orderBy: { criadaEm: 'asc' },
});

// 3. Estatisticas
const stats = await prisma.tarefa.groupBy({
  by: ['prioridade', 'concluida'],
  where: { usuarioId: userId },
  _count: { id: true },
});

// 4. Buscar tarefas por tag
const tarefasComTag = await prisma.tarefa.findMany({
  where: {
    usuarioId: userId,
    tags: {
      some: { nome: 'urgente' },
    },
  },
});

// 5. Transacao: Mover todas tarefas de um usuario para outro
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

### 12.3 Docker Compose com PostgreSQL

```yaml
# docker-compose.yml para desenvolvimento
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
# Fluxo de desenvolvimento
$ docker-compose up -d              # Sobe tudo
$ npx prisma migrate dev            # Aplica migrations
$ npx prisma studio                 # Visualiza dados
$ npm run dev                       # Roda a aplicacao
```

---

## Resumo -- O que Aprendemos na Fase 3-6

| Conceito | Analogia Mario | Ponto-Chave |
|---------|----------------|-------------|
| Banco de dados | Cofre do castelo do Toad | Armazenamento permanente e organizado |
| SQL | Baus organizados com etiquetas | Estrutura fixa, relacionamentos nativos |
| NoSQL | Sacos de loot misto | Flexivel, sem schema fixo |
| CRUD | Create/Read/Update/Delete | As 4 operacoes fundamentais |
| Tabela | Prateleira organizada | Colunas (tipos) + Linhas (registros) |
| Primary Key | Numero unico do tesouro | Identificador unico obrigatorio |
| Foreign Key | Elo de corrente entre prateleiras | Conecta tabelas |
| JOIN | Unir prateleiras para ver combinacoes | Combina dados de tabelas diferentes |
| PostgreSQL | O castelo mais robusto | Banco relacional avancado |
| MongoDB | O deposito flexivel | Documentos JSON sem schema |
| Prisma | Assistente magico do Toad | ORM com TypeScript e auto-complete |
| Migration | Reforma controlada do castelo | Mudancas incrementais no schema |
| Indice | Catalogo para busca rapida | Acelera SELECT, custa em INSERT |
| SQL Injection | Invasor disfarçado | Sempre use ORM ou parametros |

**A grande licao:** O banco de dados e o coracao da sua aplicacao. O codigo pode ser reescrito, o frontend pode ser redesenhado, mas os dados dos usuarios sao insubstituiveis. Trate seu banco de dados com o mesmo respeito que o Toad trata os tesouros do Mushroom Kingdom: com organizacao, seguranca, e backup. Porque no final do dia, o que importa nao e o castelo -- sao os tesouros dentro dele.

---

## Referencias

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

*Fase 3-6 completa! Voce dominou o Castelo dos Dados -- o coracao de qualquer aplicacao. Com isso, voce completou o World 3: Mundo Aereo! Todas as ferramentas e linguagens essenciais estao no seu inventario. Na proxima World, voce vai aprender a coordenar tudo isso com Agentic DevOps.*

---

<div align="center">

⬅️ [Anterior: Fase 3-5: Open Source](3-5-open_source.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 3-7: Boas Praticas](3-7-boas_praticas.md)

</div>
