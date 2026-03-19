---
title: "Fase 7-3 — A Cadeia de Power-Ups: LangChain"
description: "LangChain: chains, agents, tools e LCEL para construir aplicacoes de IA com analogias Mario"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-7", "langchain", "chains", "agents"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-03-18 | Paula Silva | Versao inicial — Edicao Super Mario Bros |

# Fase 7-3 — A Cadeia de Power-Ups: LangChain

---

**Preparado para:** Sofia
**Versao:** 2.0 (Edicao Mushroom Kingdom)
**Autora:** Paula Silva | Software Global Black Belt, Microsoft Americas
**Data:** Marco 2026
**Idioma:** Portugues do Brasil (pt-BR)
**Colecao:** Agentic DevOps — World 7: Star World (AI Frameworks)

---

## SUMARIO

- [Prologo: O Combo Impossivel](#prologo-o-combo-impossivel)
- [1. O que e LangChain?](#1-o-que-e-langchain)
  - [1.1 O Problema que LangChain Resolve](#11-o-problema-que-langchain-resolve)
  - [1.2 LangChain em Uma Frase](#12-langchain-em-uma-frase)
  - [1.3 A Analogia Mario: Combos de Power-Ups](#13-a-analogia-mario-combos-de-power-ups)
- [2. Os Componentes Fundamentais](#2-os-componentes-fundamentais)
  - [2.1 Models — O Cerebro](#21-models--o-cerebro)
  - [2.2 Prompts — As Instrucoes](#22-prompts--as-instrucoes)
  - [2.3 Chains — As Sequencias de Operacoes](#23-chains--as-sequencias-de-operacoes)
  - [2.4 Agents — Os Tomadores de Decisao](#24-agents--os-tomadores-de-decisao)
  - [2.5 Tools — As Ferramentas do Inventario](#25-tools--as-ferramentas-do-inventario)
  - [2.6 Memory — A Memoria de Fases Anteriores](#26-memory--a-memoria-de-fases-anteriores)
  - [2.7 LCEL — A Notacao de Combos](#27-lcel--a-notacao-de-combos)
  - [2.8 Tabela Completa de Componentes](#28-tabela-completa-de-componentes)
- [3. Chains em Detalhes: A Arte do Combo](#3-chains-em-detalhes-a-arte-do-combo)
  - [3.1 O que e uma Chain?](#31-o-que-e-uma-chain)
  - [3.2 Tipos de Chains](#32-tipos-de-chains)
  - [3.3 Exemplos Visuais de Chains](#33-exemplos-visuais-de-chains)
  - [3.4 Codigo Python: Sua Primeira Chain](#34-codigo-python-sua-primeira-chain)
- [4. LCEL: A Linguagem dos Combos](#4-lcel-a-linguagem-dos-combos)
  - [4.1 O que e LCEL?](#41-o-que-e-lcel)
  - [4.2 O Operador Pipe (|)](#42-o-operador-pipe-)
  - [4.3 Exemplos de LCEL](#43-exemplos-de-lcel)
  - [4.4 A Analogia Mario: A Notacao de Combos](#44-a-analogia-mario-a-notacao-de-combos)
- [5. Agents: Os Personagens que Pensam Sozinhos](#5-agents-os-personagens-que-pensam-sozinhos)
  - [5.1 Chain vs Agent: Qual a Diferenca?](#51-chain-vs-agent-qual-a-diferenca)
  - [5.2 Como um Agent Funciona](#52-como-um-agent-funciona)
  - [5.3 O Ciclo ReAct: Pensar, Agir, Observar](#53-o-ciclo-react-pensar-agir-observar)
  - [5.4 Codigo Python: Criando um Agent](#54-codigo-python-criando-um-agent)
  - [5.5 A Analogia Mario: O Personagem Autonomo](#55-a-analogia-mario-o-personagem-autonomo)
- [6. Tools: O Inventario de Itens](#6-tools-o-inventario-de-itens)
  - [6.1 O que sao Tools?](#61-o-que-sao-tools)
  - [6.2 Tools Disponiveis](#62-tools-disponiveis)
  - [6.3 Criando suas Proprias Tools](#63-criando-suas-proprias-tools)
  - [6.4 Codigo Python: Tool Customizada](#64-codigo-python-tool-customizada)
- [7. Memory: Lembrando de Fases Anteriores](#7-memory-lembrando-de-fases-anteriores)
  - [7.1 O Problema: LLMs Nao Lembram](#71-o-problema-llms-nao-lembram)
  - [7.2 Tipos de Memory](#72-tipos-de-memory)
  - [7.3 Codigo Python: Adicionando Memory](#73-codigo-python-adicionando-memory)
  - [7.4 A Analogia Mario: O Diario de Aventuras](#74-a-analogia-mario-o-diario-de-aventuras)
- [8. Exemplo Completo: Assistente de Codigo Mario](#8-exemplo-completo-assistente-de-codigo-mario)
  - [8.1 O que Vamos Construir](#81-o-que-vamos-construir)
  - [8.2 Codigo Completo](#82-codigo-completo)
  - [8.3 Explicacao Passo a Passo](#83-explicacao-passo-a-passo)
- [9. Quando Usar LangChain vs Alternativas](#9-quando-usar-langchain-vs-alternativas)
  - [9.1 LangChain vs Chamada Direta a API](#91-langchain-vs-chamada-direta-a-api)
  - [9.2 LangChain vs LangGraph](#92-langchain-vs-langgraph)
  - [9.3 LangChain vs Semantic Kernel](#93-langchain-vs-semantic-kernel)
  - [9.4 Tabela Decisoria](#94-tabela-decisoria)
- [10. Tabela Final: Componente / Funcao / Analogia / Codigo](#10-tabela-final-componente--funcao--analogia--codigo)

---

## Prologo: O Combo Impossivel

Sofia assistia a uma batalha epica. Na arena do Star World, um Mario lendario enfrentava uma horda de inimigos — Goombas, Koopa Troopas, Hammer Bros, e ate um Bowser Jr. Qualquer um esperaria que Mario usasse seus power-ups um de cada vez: primeiro o Mushroom, depois a Fire Flower, depois a Star.

Mas esse Mario era diferente. Ele nao usava power-ups isoladamente. Ele os **encadeava em combos devastadores**:

**Combo 1 — "Furia de Fogo":**
Mushroom (cresce) → Fire Flower (ganha poder de fogo) → Sprint (corre em direcao aos Goombas) → Triple Fireball (lanca tres bolas de fogo em sequencia) → RESULTADO: 5 Goombas derrotados de uma vez!

**Combo 2 — "Voo do Trovao":**
Cape Feather (ganha capa) → Jump Alto (pula no ar) → Glide (plana sobre os inimigos) → Ground Pound (mergulha com forca) → RESULTADO: todos os Koopa Troopas esmagados!

**Combo 3 — "Estrela Cadente":**
Star (invencibilidade) → Sprint Maximo → Colisao com Inimigos → Chain Kill → RESULTADO: tudo destruido no caminho!

Sofia ficou fascinada. *"Como ele faz isso?! Como ele sabe qual combo usar em cada situacao?"*

Um Toad ao lado dela sorriu. *"Ele usa a **Cadeia de Power-Ups**. E um sistema que permite montar combos, encadear power-ups, e ate criar personagens que **decidem sozinhos** qual combo usar dependendo da situacao. Quer aprender?"*

Os olhos de Sofia brilharam. *"Quero!"*

A **Cadeia de Power-Ups** e o **LangChain** — o framework mais popular para construir aplicacoes de IA que encadeiam operacoes em combos poderosos. E este capitulo e o seu manual de combos.

---

## 1. O que e LangChain?

### 1.1 O Problema que LangChain Resolve

Chamar um LLM diretamente (como fazer uma requisicao a API do GPT-4) e como usar UM UNICO power-up por vez. Funciona para tarefas simples, mas para tarefas complexas voce precisa de **multiplas operacoes encadeadas**:

**Tarefa simples (1 chamada):**
```
Pergunta → LLM → Resposta
"Qual a capital da Franca?" → GPT-4 → "Paris"
```

**Tarefa complexa (multiplas operacoes):**
```
1. Receber pergunta do usuario
2. Buscar documentos relevantes (RAG)
3. Classificar o tipo de pergunta
4. Escolher o modelo certo para o tipo
5. Gerar resposta com contexto
6. Verificar seguranca da resposta
7. Formatar a resposta
8. Salvar na memoria
9. Retornar ao usuario
```

Fazer tudo isso manualmente, escrevendo codigo para cada etapa, seria **trabalhoso, repetitivo e propenso a erros**. E ai que entra o LangChain.

### 1.2 LangChain em Uma Frase

> **LangChain e um framework Python (e JavaScript) que facilita construir aplicacoes que encadeiam operacoes de IA — modelos, prompts, buscas, ferramentas — em pipelines poderosas e reutilizaveis.**

Ou na linguagem Mario:

> **LangChain e o sistema de combos do Mario — permite encadear power-ups em sequencias devastadoras que nenhum power-up sozinho conseguiria realizar.**

### 1.3 A Analogia Mario: Combos de Power-Ups

| Conceito LangChain | Analogia Mario | O que Faz |
|---|---|---|
| **LangChain (framework)** | Sistema de Combos do Mario | Permite montar e executar sequencias de power-ups |
| **Chain** | Um combo especifico | Mushroom → Fire Flower → Star = combo "Furia Flamejante" |
| **Agent** | Personagem que escolhe o combo | Mario olha os inimigos e decide: "Vou usar o combo Voo do Trovao!" |
| **Tool** | Item no inventario | Bola de fogo, capa, martelo — itens que o personagem pode usar |
| **Memory** | Diario de aventuras | "No World 3, o Boss era fraco a gelo — vou lembrar disso!" |
| **LCEL** | Notacao de combo | ↑↑↓↓←→←→BA = a forma escrita de representar o combo |
| **Prompt** | Instrucao para o personagem | "Use bola de fogo contra Goombas, gelo contra Boos" |
| **Model** | O cerebro do personagem | Qual Mario usar: Mario (GPT-4), Luigi (Claude), Yoshi (Llama) |

---


## 2. Os Componentes Fundamentais

LangChain e construido em torno de componentes modulares que se encaixam como peças de LEGO. Vamos conhecer cada um.

### 2.1 Models — O Cerebro

O componente **Model** e a interface com o LLM — o "cerebro" que processa as informacoes e gera respostas. LangChain suporta multiplos provedores:

```python
# GPT-4o (OpenAI/Azure)
from langchain_openai import ChatOpenAI
model_gpt = ChatOpenAI(model="gpt-4o")

# Claude (Anthropic)
from langchain_anthropic import ChatAnthropic
model_claude = ChatAnthropic(model="claude-sonnet-4-20250514")

# Llama (via Ollama, local)
from langchain_ollama import ChatOllama
model_llama = ChatOllama(model="llama3")
```

> Analogia Mario: O Model e qual **personagem** voce escolhe na tela de selecao. Mario (GPT-4o) e o mais versatil. Luigi (Claude) e bom em fases longas. Yoshi (Llama) e customizavel e gratuito. Cada um tem forcas diferentes, mas todos sabem jogar.

### 2.2 Prompts — As Instrucoes

O componente **Prompt** e o template de instrucoes que voce envia ao modelo. LangChain oferece templates reutilizaveis:

```python
from langchain_core.prompts import ChatPromptTemplate

# Template simples
prompt = ChatPromptTemplate.from_messages([
    ("system", "Voce e um assistente que explica programacao "
               "usando analogias do Super Mario Bros. "
               "Responda em portugues do Brasil."),
    ("human", "{pergunta}")
])

# Usar o template
mensagem = prompt.invoke({"pergunta": "O que e uma variavel?"})
```

**Tipos de Prompt Templates:**

| Tipo | Quando Usar | Exemplo |
|---|---|---|
| **ChatPromptTemplate** | Conversas com system/user/assistant | Chatbots, assistentes |
| **PromptTemplate** | Texto simples com variaveis | Geracao de conteudo, resumos |
| **FewShotPromptTemplate** | Incluir exemplos no prompt | Classificacao, formatacao especifica |
| **MessagesPlaceholder** | Inserir historico de mensagens | Conversas com memoria |

> Analogia Mario: Prompts sao como as **instrucoes escritas** que voce da ao seu personagem antes da fase: "Use bola de fogo contra inimigos vermelhos, bola de gelo contra inimigos azuis, e pule nos outros." Quanto mais claras as instrucoes, melhor o personagem joga.

### 2.3 Chains — As Sequencias de Operacoes

**Chains** sao o coracao do LangChain — sequencias de operacoes conectadas onde a saida de uma alimenta a entrada da proxima.

```
CHAIN SIMPLES:
Prompt → Model → Output

CHAIN MEDIA:
Prompt → Model → Parser → Formatter → Output

CHAIN COMPLEXA:
Input → Classifier → Branch A: RAG Chain
                   → Branch B: Direct Chain
                   → Branch C: Tool Chain
                   → Merger → Output
```

**Codigo de uma chain simples:**

```python
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

# Componentes
prompt = ChatPromptTemplate.from_messages([
    ("system", "Explique o conceito usando analogias do Mario."),
    ("human", "{conceito}")
])
model = ChatOpenAI(model="gpt-4o-mini")
parser = StrOutputParser()

# Montar a chain (usando LCEL)
chain = prompt | model | parser

# Executar
resultado = chain.invoke({"conceito": "recursao"})
print(resultado)
```

> Analogia Mario: Uma chain e um **combo**. Voce define a sequencia de movimentos (power-ups), e quando ativa o combo, todos os movimentos executam em ordem. O combo `prompt | model | parser` e como `Mushroom | Fire Flower | Fire Ball` — um fluxo que transforma uma entrada simples em algo poderoso.

### 2.4 Agents — Os Tomadores de Decisao

Enquanto Chains seguem uma sequencia **fixa** (sempre fazem A, depois B, depois C), **Agents** sao **autonomos** — eles decidem em tempo real qual acao tomar com base na situacao.

```
CHAIN (sequencia fixa):
  Sempre: A → B → C → D
  Nao importa a situacao, sempre segue a mesma ordem.

AGENT (decisao autonoma):
  Olha a situacao e decide:
  "Hmm, esse inimigo e de fogo... vou usar gelo!"
  → Usa Tool: Ice Ball
  "OK, agora tem um abismo... preciso voar!"
  → Usa Tool: Cape Feather
  "Encontrei um bau... vou abrir!"
  → Usa Tool: Open Chest
  "Missao concluida!"
  → Retorna resultado
```

> Analogia Mario: Uma chain e como um **percurso pre-definido** — Mario corre pela fase sempre pelo mesmo caminho. Um agent e como um **jogador experiente** que observa a fase, analisa os inimigos, e decide no momento qual power-up usar. O agent PENSA antes de agir.

### 2.5 Tools — As Ferramentas do Inventario

**Tools** sao funcoes externas que o Agent pode usar. Sao como itens no inventario do Mario — cada um faz algo diferente.

**Tools comuns no LangChain:**

| Tool | O que Faz | Analogia Mario |
|---|---|---|
| **search** (Tavily, Google) | Busca na web | Binóculo — ve alem da fase atual |
| **wikipedia** | Consulta Wikipedia | Enciclopedia do Mushroom Kingdom |
| **python_repl** | Executa codigo Python | Bancada de engenharia do Toad |
| **calculator** | Faz calculos matematicos | Abaco magico |
| **sql_database** | Consulta banco de dados | Chave do castelo de Toad (dados) |
| **file_management** | Le e escreve arquivos | Mochila de inventario |
| **requests** | Faz chamadas HTTP a APIs | Portal Warp Zone para outros mundos |

### 2.6 Memory — A Memoria de Fases Anteriores

**Memory** permite que o LLM "lembre" de conversas anteriores. Sem memory, cada mensagem e tratada como se fosse a primeira — o modelo nao sabe o que voce disse 2 minutos atras.

```
SEM MEMORY:
  Voce: "Meu nome e Sofia"
  Bot: "Prazer, Sofia!"
  Voce: "Qual e meu nome?"
  Bot: "Desculpe, nao sei seu nome." ← esqueceu!

COM MEMORY:
  Voce: "Meu nome e Sofia"
  Bot: "Prazer, Sofia!"
  Voce: "Qual e meu nome?"
  Bot: "Seu nome e Sofia!" ← lembrou!
```

> Analogia Mario: Sem memory, Mario comeca CADA fase sem lembrar de nada — como se fosse a primeira vez. Com memory, Mario tem um **diario de aventuras** onde anota tudo: "World 3 tinha inimigos de gelo", "O Boss do World 5 e fraco a fogo", "Sofia prefere explicacoes curtas." Nas proximas fases, ele consulta o diario e joga melhor.

### 2.7 LCEL — A Notacao de Combos

**LCEL (LangChain Expression Language)** e a sintaxe para escrever chains de forma concisa e elegante. Usa o operador **pipe** (`|`) para conectar componentes.

```python
# LCEL: a notacao de combos
chain = prompt | model | parser

# Equivale a:
# 1. Executa prompt (gera a mensagem)
# 2. Envia para model (gera a resposta)
# 3. Passa pelo parser (formata a saida)
```

> Analogia Mario: LCEL e como a **notacao de combos** dos jogos de luta. Em jogos de luta, combos sao escritos como `↑↑↓↓←→←→BA`. No LangChain, combos sao escritos como `prompt | model | parser`. E uma forma compacta e elegante de descrever uma sequencia de acoes.

### 2.8 Tabela Completa de Componentes

| # | Componente | O que Faz | Analogia Mario | Codigo Exemplo |
|---|---|---|---|---|
| 1 | **Model** | Interface com o LLM | Personagem na tela de selecao (Mario, Luigi, Yoshi) | `ChatOpenAI(model="gpt-4o")` |
| 2 | **Prompt** | Template de instrucoes | Instrucoes para o personagem antes da fase | `ChatPromptTemplate.from_messages([...])` |
| 3 | **Chain** | Sequencia de operacoes | Combo de power-ups (Mushroom → Fire → Star) | `prompt \| model \| parser` |
| 4 | **Agent** | Tomador de decisao autonomo | Jogador que decide qual combo usar | `create_react_agent(model, tools)` |
| 5 | **Tool** | Funcao externa utilizavel | Item no inventario (bola de fogo, capa, martelo) | `@tool def search(...)` |
| 6 | **Memory** | Memoria de conversas anteriores | Diario de aventuras do Mario | `ConversationBufferMemory()` |
| 7 | **LCEL** | Sintaxe para montar chains | Notacao de combo (↑↑↓↓←→←→BA) | `prompt \| model \| parser` |
| 8 | **Output Parser** | Formata a saida do LLM | Placar que mostra o resultado formatado | `StrOutputParser()` |
| 9 | **Retriever** | Busca documentos relevantes | Mochila magica do RAG Mario | `vectorstore.as_retriever()` |
| 10 | **Callback** | Monitora execucao | Camera de replay mostrando cada acao | `StdOutCallbackHandler()` |

---

## 3. Chains em Detalhes: A Arte do Combo

### 3.1 O que e uma Chain?

Uma Chain e uma **sequencia de operacoes** onde a saida de cada operacao e a entrada da proxima. E o conceito central do LangChain — o "Chain" no nome!

```
ANALOGIA DO COMBO:

INPUT (situacao da fase)
  │
  v
OPERACAO 1 (primeiro power-up)
  │
  v
OPERACAO 2 (segundo power-up)
  │
  v
OPERACAO 3 (terceiro power-up)
  │
  v
OUTPUT (resultado devastador)
```

### 3.2 Tipos de Chains

| Tipo de Chain | Fluxo | Analogia Mario | Quando Usar |
|---|---|---|---|
| **Sequential** | A → B → C (linear) | Combo em linha reta | Tarefas simples em sequencia |
| **Parallel** | A + B + C (simultaneo) | Tres jogadores atacando ao mesmo tempo | Tarefas independentes |
| **Branching** | Se X: vai para A. Se Y: vai para B | Escolher caminho na bifurcacao da fase | Logica condicional |
| **Map-Reduce** | Dividir em partes, processar, combinar | Dividir a fase entre jogadores, depois juntar moedas | Processar muitos documentos |
| **Router** | Classificar e direcionar | Toad direcionando: "Pergunta tecnica? Va pro Luigi!" | Multiplos especialistas |

### 3.3 Exemplos Visuais de Chains

**Chain Sequential (Combo Linear):**
```
"O que e Python?" → [Prompt Template] → [GPT-4o] → [Parser] → "Python e como..."
                     (instrucoes)        (cerebro)   (formato)   (resposta)
```

**Chain com RAG (Combo com Biblioteca):**
```
"Como instalar o SDK?" → [Embedding] → [Vector Search] → [Prompt + Contexto] → [GPT-4o] → Resposta
                          (selo)        (busca na        (combina pergunta      (gera
                                        biblioteca)       + documentos)          resposta)
```

**Chain com Branching (Combo com Bifurcacao):**
```
"Pergunta do usuario" → [Classificador] → E tecnica?
                                           │
                                  ┌────────┴────────┐
                                  │                 │
                                  v                 v
                            [Chain Tecnica]   [Chain Geral]
                            (busca docs +     (responde
                             GPT-4)           direto GPT-4o-mini)
                                  │                 │
                                  └────────┬────────┘
                                           v
                                    [Resposta Final]
```

### 3.4 Codigo Python: Sua Primeira Chain

Vamos construir uma chain completa passo a passo:

```python
# ============================================
# PRIMEIRA CHAIN: Explicador Mario
# Recebe um conceito de programacao e explica
# usando analogias do Super Mario Bros
# ============================================

# Passo 1: Instalar dependencias
# pip install langchain langchain-openai

# Passo 2: Importar componentes
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

# Passo 3: Criar o Model (escolher o personagem)
# Mario = GPT-4o (versatil e poderoso)
modelo = ChatOpenAI(
    model="gpt-4o-mini",       # qual modelo usar
    temperature=0.7,            # criatividade (0=serio, 1=criativo)
    api_key="sua-chave-aqui"   # chave de acesso
)

# Passo 4: Criar o Prompt (instrucoes para o personagem)
prompt = ChatPromptTemplate.from_messages([
    ("system",
     "Voce e o Professor Mario, um mestre em ensinar "
     "programacao usando analogias do jogo Super Mario Bros. "
     "Regras: "
     "1. SEMPRE use analogias com elementos do Mario "
     "2. Explique de forma simples e divertida "
     "3. De um exemplo pratico em Python "
     "4. Responda em portugues do Brasil "
     "5. Limite a resposta a 200 palavras"),
    ("human", "Explique o conceito: {conceito}")
])

# Passo 5: Criar o Parser (formatador de saida)
parser = StrOutputParser()

# Passo 6: MONTAR A CHAIN (o combo!)
# LCEL: prompt | modelo | parser
chain_explicador = prompt | modelo | parser
#                   │        │        │
#                   │        │        └── Passo 3: formatar saida
#                   │        └── Passo 2: gerar resposta
#                   └── Passo 1: montar instrucoes

# Passo 7: EXECUTAR A CHAIN (ativar o combo!)
resultado = chain_explicador.invoke({"conceito": "lista em Python"})
print(resultado)

# Saida esperada (algo como):
# "Uma lista em Python e como a fila de moedas que o Mario
#  coleta numa fase! Cada moeda tem uma posicao na fila
#  (indice), e voce pode adicionar novas moedas ou remover
#  as que ja pegou.
#
#  Exemplo:
#  moedas = ['ouro', 'prata', 'estrela']  # cria a fila
#  moedas.append('cogumelo')               # adiciona no final
#  print(moedas[0])                        # pega a primeira: 'ouro'
#  moedas.pop()                            # remove a ultima"
```

**Explicacao do codigo como combo:**

```
COMBO "EXPLICADOR MARIO":
=========================

Power-Up 1: PROMPT (instrucoes)
  → Transforma {conceito} em uma mensagem formatada
  → Saida: mensagem com system + user

Power-Up 2: MODEL (cerebro)
  → Recebe a mensagem e gera uma resposta
  → Saida: objeto de resposta do LLM

Power-Up 3: PARSER (formatador)
  → Extrai o texto puro da resposta
  → Saida: string com a explicacao

RESULTADO: Explicacao do conceito usando analogias do Mario!
```

---

## 4. LCEL: A Linguagem dos Combos

### 4.1 O que e LCEL?

LCEL (LangChain Expression Language) e a **sintaxe moderna** do LangChain para compor chains. Usa o operador `|` (pipe) para conectar componentes de forma intuitiva e poderosa.

**Vantagens do LCEL:**
- **Legibilidade**: `prompt | model | parser` e claro e conciso
- **Streaming**: Suporte nativo a streaming de respostas
- **Async**: Suporte a operacoes assincronas
- **Batch**: Processar multiplas entradas de uma vez
- **Fallback**: Definir alternativas se algo falhar
- **Retry**: Tentar novamente automaticamente em caso de erro

### 4.2 O Operador Pipe (|)

O operador `|` conecta dois componentes: a saida do componente a esquerda vira a entrada do componente a direita.

```python
# Cada | e uma conexao entre power-ups

chain = prompt | model | parser
#       │         │       │
#       │         │       └── 3. Recebe a resposta do model, extrai texto
#       │         └── 2. Recebe o prompt formatado, gera resposta
#       └── 1. Recebe variaveis, monta o prompt
```

### 4.3 Exemplos de LCEL

**Chain simples:**
```python
chain = prompt | model | parser
```

**Chain com RAG:**
```python
chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | model
    | parser
)
```

**Chain com fallback (plano B):**
```python
# Se GPT-4o falhar, usa GPT-4o-mini como backup
model_principal = ChatOpenAI(model="gpt-4o")
model_backup = ChatOpenAI(model="gpt-4o-mini")

chain = prompt | model_principal.with_fallbacks([model_backup]) | parser
```

**Chain com multiplas saidas (parallel):**
```python
from langchain_core.runnables import RunnableParallel

chain = RunnableParallel(
    resumo=prompt_resumo | model | parser,
    traducao=prompt_traducao | model | parser,
    sentimento=prompt_sentimento | model | parser,
)
# Executa TRES chains em paralelo e retorna um dicionario
# {"resumo": "...", "traducao": "...", "sentimento": "..."}
```

### 4.4 A Analogia Mario: A Notacao de Combos

```
NOTACAO DE COMBOS — COMPARACAO
================================

JOGO DE LUTA:
  Hadouken = ↓↘→ + Soco
  Shoryuken = →↓↘ + Soco
  Super Combo = ↓↘→↓↘→ + Soco Forte

LANGCHAIN (LCEL):
  Explicar = prompt | model | parser
  RAG      = retriever | prompt | model | parser
  Complexo = classificador | router | [chain_a, chain_b] | merger

MARIO (Power-Ups):
  Furia de Fogo = Mushroom | Fire Flower | Sprint | Triple Fireball
  Voo do Trovao = Cape | Jump | Glide | Ground Pound
  Estrela Cadente = Star | Sprint Max | Chain Kill
```

**A moral**: LCEL e uma **linguagem concisa para expressar combos**. Assim como um jogador de luta decora a notacao dos combos (↓↘→), um desenvolvedor LangChain decora a notacao LCEL (`prompt | model | parser`). Ambos sao formas compactas de representar sequencias complexas.

---

## 5. Agents: Os Personagens que Pensam Sozinhos

### 5.1 Chain vs Agent: Qual a Diferenca?

Esta e uma das distincoes mais importantes no LangChain:

| Aspecto | Chain | Agent |
|---|---|---|
| **Fluxo** | Fixo e predefinido | Dinamico e adaptativo |
| **Decisao** | Nao decide — segue a sequencia | Decide em tempo real qual acao tomar |
| **Ferramentas** | Usa ferramentas em ordem fixa | Escolhe qual ferramenta usar e quando |
| **Complexidade** | Mais simples, mais previsivel | Mais complexo, mais flexivel |
| **Depuracao** | Facil — siga a sequencia | Mais dificil — decisoes sao dinamicas |
| **Analogia Mario** | Percurso pre-definido (speedrun) | Jogador adaptativo (explorador) |
| **Quando usar** | Tarefas com passos claros e fixos | Tarefas que exigem decisao e adaptacao |

```
CHAIN (Speedrun):
  Sempre segue o mesmo caminho:
  Inicio → Pular bloco → Pegar moeda → Desviar do Goomba → Final
  Rapido, eficiente, previsivel.

AGENT (Explorador):
  Observa e decide:
  "Hmm, tem um Goomba na frente... vou usar bola de fogo."
  "OK, agora tem um abismo... preciso da capa."
  "Encontrei uma area secreta! Vou explorar."
  "Voltei. Agora vou para o final da fase."
  Flexivel, adaptativo, inteligente.
```

### 5.2 Como um Agent Funciona

Um Agent funciona em um **ciclo de decisao** que se repete ate a tarefa ser concluida:

```
CICLO DO AGENT
===============

     ┌──────────────────────────────────────┐
     │                                      │
     v                                      │
┌─────────┐    ┌──────────┐    ┌─────────┐ │
│ PENSAR  │───>│  AGIR    │───>│OBSERVAR │─┘
│         │    │          │    │         │
│"O que eu│    │ Executa  │    │"O que   │
│ devo    │    │ a acao   │    │ aconteceu│
│ fazer?" │    │ escolhida│    │ ?"      │
└─────────┘    └──────────┘    └─────────┘

Repete ate:
  - A tarefa estar completa
  - Ou atingir o limite de iteracoes
```

### 5.3 O Ciclo ReAct: Pensar, Agir, Observar

O padrao mais usado em Agents e o **ReAct** (Reasoning + Acting). O Agent alterna entre raciocinar e agir:

```
EXEMPLO DE CICLO ReAct:
========================

Pergunta: "Qual o clima em Sao Paulo hoje e quanto e 25°C em Fahrenheit?"

ITERACAO 1:
  PENSAMENTO: "Preciso saber o clima em SP. Vou usar a ferramenta de busca."
  ACAO: search("clima Sao Paulo hoje")
  OBSERVACAO: "Sao Paulo: 25°C, parcialmente nublado"

ITERACAO 2:
  PENSAMENTO: "Agora preciso converter 25°C para Fahrenheit. Vou calcular."
  ACAO: calculator("25 * 9/5 + 32")
  OBSERVACAO: "77"

ITERACAO 3:
  PENSAMENTO: "Tenho todas as informacoes. Vou montar a resposta final."
  RESPOSTA FINAL: "Em Sao Paulo hoje esta 25°C (77°F), parcialmente nublado."
```

### 5.4 Codigo Python: Criando um Agent

```python
# ============================================
# AGENT: Mario Autonomo
# Um agent que decide sozinho quais tools usar
# para responder perguntas sobre programacao
# ============================================

from langchain_openai import ChatOpenAI
from langchain.agents import create_react_agent, AgentExecutor
from langchain_core.tools import tool
from langchain import hub

# Passo 1: Definir as Tools (itens do inventario)
@tool
def buscar_documentacao(query: str) -> str:
    """Busca na documentacao tecnica. Use quando precisar
    de informacoes sobre bibliotecas, APIs ou frameworks."""
    # Simulacao — em producao, faria uma busca real
    docs = {
        "python lista": "Listas em Python sao colecoes ordenadas e mutaveis.",
        "python dict": "Dicionarios sao colecoes de pares chave-valor.",
        "python func": "Funcoes sao blocos de codigo reutilizaveis."
    }
    for chave, valor in docs.items():
        if chave in query.lower():
            return valor
    return "Documentacao nao encontrada para: " + query

@tool
def executar_codigo(codigo: str) -> str:
    """Executa codigo Python e retorna o resultado.
    Use quando precisar demonstrar um exemplo pratico."""
    try:
        # CUIDADO: em producao, use sandbox seguro!
        resultado = eval(codigo)
        return f"Resultado: {resultado}"
    except Exception as e:
        return f"Erro: {str(e)}"

@tool
def explicar_com_mario(conceito: str) -> str:
    """Cria uma analogia com Super Mario Bros para
    explicar um conceito. Use sempre que possivel
    para tornar a explicacao mais divertida."""
    analogias = {
        "lista": "Lista e como a fila de moedas numa fase do Mario!",
        "funcao": "Funcao e como um Power-Up — voce define uma vez e usa varias!",
        "loop": "Loop e como correr numa fase circular ate encontrar a saida!",
        "variavel": "Variavel e como um Bloco ? — guarda algo dentro!",
    }
    for chave, valor in analogias.items():
        if chave in conceito.lower():
            return valor
    return f"Hmm, deixa eu pensar numa analogia Mario para '{conceito}'..."

# Passo 2: Criar o Model (o cerebro do personagem)
modelo = ChatOpenAI(model="gpt-4o-mini", temperature=0.3)

# Passo 3: Definir as Tools disponiveis
tools = [buscar_documentacao, executar_codigo, explicar_com_mario]

# Passo 4: Criar o Agent (personagem autonomo)
prompt = hub.pull("hwchase17/react")  # prompt padrao ReAct
agent = create_react_agent(modelo, tools, prompt)

# Passo 5: Criar o Executor (motor do jogo)
executor = AgentExecutor(
    agent=agent,
    tools=tools,
    verbose=True,      # mostra o raciocinio do agent
    max_iterations=5   # maximo de iteracoes
)

# Passo 6: Executar!
resultado = executor.invoke({
    "input": "Explique o que e uma lista em Python "
             "com uma analogia do Mario e mostre um exemplo"
})

print(resultado["output"])

# O Agent vai:
# 1. PENSAR: "Preciso buscar documentacao sobre listas"
# 2. AGIR: buscar_documentacao("python lista")
# 3. OBSERVAR: "Listas em Python sao colecoes ordenadas..."
# 4. PENSAR: "Agora preciso da analogia Mario"
# 5. AGIR: explicar_com_mario("lista")
# 6. OBSERVAR: "Lista e como a fila de moedas..."
# 7. PENSAR: "Preciso de um exemplo pratico"
# 8. AGIR: executar_codigo("[1, 2, 3] + [4, 5]")
# 9. OBSERVAR: "Resultado: [1, 2, 3, 4, 5]"
# 10. RESPOSTA FINAL: Combinacao de tudo!
```

### 5.5 A Analogia Mario: O Personagem Autonomo

```
AGENT MARIO EM ACAO
====================

Situacao: Mario entra numa sala com 3 inimigos diferentes

INVENTARIO (Tools):
  [Bola de Fogo]  - eficaz contra Goombas
  [Bola de Gelo]  - eficaz contra Piranha Plants
  [Martelo]       - eficaz contra Koopa Troopas
  [Biblioteca]    - consultar manual de inimigos

CICLO 1:
  PENSAR: "Vejo um Goomba. Que item usar? Vou consultar o manual."
  AGIR: Biblioteca("fraqueza do Goomba")
  OBSERVAR: "Goombas sao fracos a fogo"

CICLO 2:
  PENSAR: "Goomba e fraco a fogo. Vou usar bola de fogo!"
  AGIR: Bola de Fogo → Goomba
  OBSERVAR: "Goomba derrotado!"

CICLO 3:
  PENSAR: "Proximo: Piranha Plant. E uma planta, gelo deve funcionar."
  AGIR: Bola de Gelo → Piranha Plant
  OBSERVAR: "Piranha Plant congelada e derrotada!"

CICLO 4:
  PENSAR: "Ultimo: Koopa Troopa. Vou usar o martelo."
  AGIR: Martelo → Koopa Troopa
  OBSERVAR: "Koopa Troopa derrotado!"

CICLO 5:
  PENSAR: "Todos os inimigos derrotados. Missao concluida!"
  RESPOSTA FINAL: "Sala limpa! Goombas com fogo, Piranhas com
                   gelo, Koopas com martelo."
```

**A moral**: o Agent nao segue um roteiro fixo. Ele **observa**, **raciocina**, **age**, e **adapta** sua estrategia com base no que encontra. Cada Tool e um item no inventario que ele pode usar quando julgar necessario. Isso torna o Agent incrivelmente flexivel — mas tambem mais complexo de depurar.

---

## 6. Tools: O Inventario de Itens

### 6.1 O que sao Tools?

Tools sao **funcoes que o Agent pode chamar** para interagir com o mundo externo. Sem Tools, o Agent so pode "pensar" (usar o LLM). Com Tools, ele pode buscar na web, executar codigo, consultar bancos de dados, enviar emails, e muito mais.

### 6.2 Tools Disponiveis

O ecossistema LangChain oferece dezenas de Tools prontas:

| Categoria | Tools Disponiveis | Analogia Mario |
|---|---|---|
| **Busca** | Tavily, Google Search, Bing, DuckDuckGo | Binoculo / Telescopio |
| **Conhecimento** | Wikipedia, Arxiv, PubMed | Biblioteca do Mushroom Kingdom |
| **Codigo** | Python REPL, Shell | Bancada de engenharia do Toad |
| **Matematica** | Calculator, Wolfram Alpha | Abaco magico |
| **Dados** | SQL Database, CSV, JSON | Chave do castelo dos dados |
| **Arquivos** | File Management, Directory | Mochila de inventario |
| **Web** | Requests, Web Scraping | Portal Warp Zone |
| **Comunicacao** | Gmail, Slack | Pombo-correio do reino |

### 6.3 Criando suas Proprias Tools

Voce pode criar Tools customizadas para qualquer funcionalidade:

```python
from langchain_core.tools import tool

@tool
def consultar_preco(produto: str) -> str:
    """Consulta o preco de um produto na loja.
    Use quando o usuario perguntar sobre precos."""
    precos = {
        "mushroom": "R$ 10,00",
        "fire flower": "R$ 25,00",
        "star": "R$ 50,00",
        "1-up": "R$ 100,00"
    }
    produto_lower = produto.lower()
    if produto_lower in precos:
        return f"O preco do {produto} e {precos[produto_lower]}"
    return f"Produto '{produto}' nao encontrado no catalogo."
```

**Regras para boas Tools:**
1. **Nome claro**: O agent usa o nome para decidir quando usar
2. **Descricao precisa**: A docstring e CRITICA — o agent le para decidir
3. **Parametros tipados**: Ajuda o agent a formatar a entrada
4. **Retorno util**: Retorne informacao que o agent possa usar
5. **Tratamento de erros**: Retorne mensagens de erro claras

### 6.4 Codigo Python: Tool Customizada

```python
from langchain_core.tools import tool
from typing import Optional

@tool
def analisar_fase_mario(
    world: int,
    level: int,
    dificuldade: Optional[str] = "normal"
) -> str:
    """Analisa uma fase especifica do Super Mario Bros e retorna
    informacoes sobre inimigos, power-ups e segredos.
    Use quando alguem perguntar sobre uma fase especifica do Mario.

    Args:
        world: Numero do world (1-8)
        level: Numero do level (1-4)
        dificuldade: Nivel de dificuldade (facil, normal, dificil)
    """
    fases = {
        (1, 1): {
            "inimigos": ["Goomba", "Koopa Troopa"],
            "powerups": ["Super Mushroom", "Fire Flower"],
            "segredos": ["Warp Zone no cano verde apos o terceiro bloco"],
            "dificuldade": "facil"
        },
        (7, 1): {
            "inimigos": ["Magikoopa", "Dry Bones", "Thwomp"],
            "powerups": ["Star", "Ice Flower"],
            "segredos": ["Area secreta atras da segunda tocha"],
            "dificuldade": "dificil"
        }
    }

    fase = fases.get((world, level))
    if not fase:
        return f"Fase {world}-{level} nao encontrada no banco de dados."

    return (
        f"Fase {world}-{level} ({fase['dificuldade']}):\n"
        f"Inimigos: {', '.join(fase['inimigos'])}\n"
        f"Power-ups: {', '.join(fase['powerups'])}\n"
        f"Segredos: {', '.join(fase['segredos'])}"
    )
```

---

## 7. Memory: Lembrando de Fases Anteriores

### 7.1 O Problema: LLMs Nao Lembram

LLMs sao **stateless** — cada chamada e independente. O modelo nao tem nenhuma memoria entre chamadas. Isso significa que, sem Memory:

```
CONVERSA SEM MEMORY:

[Chamada 1]
  User: "Estou aprendendo Python. Pode me ajudar?"
  Bot:  "Claro! Python e otimo para iniciantes..."

[Chamada 2]
  User: "E sobre aquilo que falamos, tem mais dicas?"
  Bot:  "Desculpe, nao sei do que voce esta falando.
        Sobre o que gostaria de dicas?"
        ← NAO LEMBRA da conversa anterior!
```

Memory resolve isso armazenando o historico e enviando junto com cada nova mensagem.

### 7.2 Tipos de Memory

| Tipo | Como Funciona | Analogia Mario | Quando Usar |
|---|---|---|---|
| **ConversationBufferMemory** | Guarda TODA a conversa | Diario completo — cada aventura registrada | Conversas curtas (< 20 mensagens) |
| **ConversationBufferWindowMemory** | Guarda as ultimas N mensagens | Diario com espaco limitado — so as ultimas paginas | Conversas medias, controle de custo |
| **ConversationSummaryMemory** | Resume a conversa periodicamente | Diario com resumos — "nos ultimos 3 mundos, aprendi que..." | Conversas longas |
| **ConversationSummaryBufferMemory** | Combina buffer recente + resumo antigo | Diario com ultimas paginas detalhadas + resumo das antigas | Melhor dos dois mundos |
| **VectorStoreMemory** | Busca memorias relevantes por similaridade | Biblioteca de memorias — encontra a mais relevante | Conversas muito longas, multi-sessao |

### 7.3 Codigo Python: Adicionando Memory

```python
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.chat_history import InMemoryChatMessageHistory
from langchain_core.runnables.history import RunnableWithMessageHistory

# Passo 1: Criar o modelo e prompt
modelo = ChatOpenAI(model="gpt-4o-mini")

prompt = ChatPromptTemplate.from_messages([
    ("system",
     "Voce e o Professor Mario, um assistente educacional "
     "que usa analogias do Super Mario Bros. "
     "Lembre-se do contexto da conversa."),
    MessagesPlaceholder(variable_name="history"),  # ← AQUI: historico
    ("human", "{input}")
])

chain = prompt | modelo

# Passo 2: Criar armazenamento de historico
store = {}

def get_session_history(session_id: str):
    if session_id not in store:
        store[session_id] = InMemoryChatMessageHistory()
    return store[session_id]

# Passo 3: Envolver a chain com memoria
chain_com_memoria = RunnableWithMessageHistory(
    chain,
    get_session_history,
    input_messages_key="input",
    history_messages_key="history",
)

# Passo 4: Conversar! (com memoria)
config = {"configurable": {"session_id": "sofia-123"}}

# Mensagem 1
r1 = chain_com_memoria.invoke(
    {"input": "Oi! Meu nome e Sofia e estou aprendendo Python"},
    config=config
)
print(r1.content)
# "Ola, Sofia! Bem-vinda ao Mushroom Kingdom da programacao!..."

# Mensagem 2 — O bot LEMBRA quem e Sofia!
r2 = chain_com_memoria.invoke(
    {"input": "O que e uma funcao?"},
    config=config
)
print(r2.content)
# "Sofia, uma funcao e como um Power-Up do Mario!
#  Voce define uma vez e pode usar sempre que quiser..."

# Mensagem 3 — O bot LEMBRA o contexto completo!
r3 = chain_com_memoria.invoke(
    {"input": "Pode me dar um exemplo baseado no que discutimos?"},
    config=config
)
print(r3.content)
# "Claro, Sofia! Ja que voce esta aprendendo Python,
#  vamos criar uma funcao Power-Up..."
#  ← LEMBRA o nome, o topico, e o contexto!
```

### 7.4 A Analogia Mario: O Diario de Aventuras

```
DIARIO DE AVENTURAS DO MARIO (Memory)
=======================================

Pagina 1 (World 1):
  "Aprendi que Goombas morrem com um pulo.
   Sofia me pediu para explicar variaveis."

Pagina 2 (World 2):
  "Fase aquatica — inimigos se movem diferente.
   Sofia perguntou sobre listas. Usei analogia de moedas."

Pagina 3 (World 3):
  "Fase aerea — preciso usar capa para voar.
   Sofia quer aprender funcoes. Vou usar analogia de Power-Ups."

Pagina 4 (World 4): [PAGINA ATUAL]
  "Sofia me pediu exemplo pratico.
   Vou combinar tudo que discutimos:
   - Variavel (World 1)
   - Lista (World 2)
   - Funcao (World 3)
   Em um exemplo unificado!"

TIPOS DE DIARIO:

Buffer Memory     = Todas as paginas guardadas (diario completo)
Window Memory     = So as ultimas 3 paginas (diario com limite)
Summary Memory    = Resumo de cada world (diario condensado)
Vector Memory     = Busca a pagina mais relevante (diario magico)
```

---

## 8. Exemplo Completo: Assistente de Codigo Mario

### 8.1 O que Vamos Construir

Um assistente completo que:
1. Recebe perguntas sobre programacao
2. Busca na documentacao (RAG)
3. Explica com analogias Mario
4. Mostra exemplos de codigo
5. Lembra do contexto da conversa (Memory)

### 8.2 Codigo Completo

```python
# ============================================
# ASSISTENTE DE CODIGO MARIO — COMPLETO
# Combina: Model + Prompt + Chain + RAG + Memory
# ============================================

from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough, RunnableParallel
from langchain_community.vectorstores import Chroma
from langchain_core.documents import Document

# ── PASSO 1: Preparar a Base de Conhecimento (mini-RAG) ──

# Documentos sobre Python (em producao, seriam seus docs reais)
documentos = [
    Document(
        page_content="Variaveis em Python sao como caixas que guardam valores. "
                     "Voce cria com nome = valor. Exemplo: pontos = 100",
        metadata={"topico": "variaveis"}
    ),
    Document(
        page_content="Listas em Python sao colecoes ordenadas. Crie com colchetes: "
                     "moedas = [1, 5, 10]. Acesse por indice: moedas[0] retorna 1.",
        metadata={"topico": "listas"}
    ),
    Document(
        page_content="Funcoes sao blocos reutilizaveis de codigo. Defina com def: "
                     "def pular(): print('Mario pulou!'). Chame com pular().",
        metadata={"topico": "funcoes"}
    ),
    Document(
        page_content="Loops for repetem acoes. Exemplo: for moeda in moedas: "
                     "print(moeda). Percorre cada item da lista.",
        metadata={"topico": "loops"}
    ),
    Document(
        page_content="Dicionarios guardam pares chave-valor. Exemplo: "
                     "mario = {'vidas': 3, 'moedas': 50, 'poder': 'fogo'}. "
                     "Acesse com mario['vidas'] que retorna 3.",
        metadata={"topico": "dicionarios"}
    ),
    Document(
        page_content="Classes em Python definem objetos com atributos e metodos. "
                     "class Personagem: def __init__(self, nome): self.nome = nome. "
                     "Crie instancias: mario = Personagem('Mario').",
        metadata={"topico": "classes"}
    ),
]

# Criar vector store local com Chroma
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vectorstore = Chroma.from_documents(documentos, embeddings)
retriever = vectorstore.as_retriever(search_kwargs={"k": 2})

# ── PASSO 2: Criar o Prompt Mestre ──

prompt = ChatPromptTemplate.from_messages([
    ("system",
     "Voce e o Professor Mario, o melhor professor de programacao "
     "do Mushroom Kingdom!\n\n"
     "REGRAS SAGRADAS:\n"
     "1. SEMPRE use analogias com Super Mario Bros\n"
     "2. Explique de forma simples, divertida e educativa\n"
     "3. Inclua um exemplo pratico em Python\n"
     "4. Responda em portugues do Brasil\n"
     "5. Se tiver contexto da documentacao, use-o como base\n"
     "6. Limite respostas a 300 palavras\n\n"
     "DOCUMENTACAO RELEVANTE:\n{context}\n\n"
     "Use a documentacao acima para fundamentar sua resposta."),
    MessagesPlaceholder(variable_name="history", optional=True),
    ("human", "{question}")
])

# ── PASSO 3: Montar a Chain RAG ──

modelo = ChatOpenAI(model="gpt-4o-mini", temperature=0.7)
parser = StrOutputParser()

def formatar_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)

chain_mario = (
    RunnableParallel(
        context=retriever | formatar_docs,
        question=RunnablePassthrough(),
        history=lambda x: []  # simplificado
    )
    | prompt
    | modelo
    | parser
)

# ── PASSO 4: Executar! ──

# Pergunta 1
print("=" * 50)
print("PERGUNTA 1: O que sao variaveis?")
print("=" * 50)
resposta1 = chain_mario.invoke("O que sao variaveis em Python?")
print(resposta1)

# Pergunta 2
print("\n" + "=" * 50)
print("PERGUNTA 2: Como usar listas?")
print("=" * 50)
resposta2 = chain_mario.invoke("Como uso listas em Python?")
print(resposta2)

# Pergunta 3
print("\n" + "=" * 50)
print("PERGUNTA 3: O que sao classes?")
print("=" * 50)
resposta3 = chain_mario.invoke("Explique classes em Python")
print(resposta3)
```

### 8.3 Explicacao Passo a Passo

```
FLUXO DO ASSISTENTE MARIO
==========================

1. PERGUNTA ENTRA
   "O que sao variaveis em Python?"
          │
          v
2. BUSCA NA BIBLIOTECA (RAG - Retriever)
   → Encontra: "Variaveis em Python sao como caixas..."
   → Encontra: "Dicionarios guardam pares chave-valor..."
          │
          v
3. MONTA O PROMPT (Template)
   System: "Voce e o Professor Mario..."
   Contexto: [documentos encontrados]
   Pergunta: "O que sao variaveis?"
          │
          v
4. GERA RESPOSTA (Model - GPT-4o-mini)
   "Variaveis sao como os Blocos '?' do Mario!
    Cada bloco guarda algo dentro — pode ser um
    numero, um texto, ou ate uma lista de moedas..."
          │
          v
5. FORMATA (Parser)
   String limpa e formatada
          │
          v
6. RETORNA AO USUARIO
   Resposta educativa com analogia Mario + codigo Python!
```

---

## 9. Quando Usar LangChain vs Alternativas

### 9.1 LangChain vs Chamada Direta a API

| Aspecto | Chamada Direta (requests/SDK) | LangChain |
|---|---|---|
| **Complexidade** | Minima | Media |
| **Flexibilidade** | Total (voce controla tudo) | Alta (mas segue padroes do framework) |
| **Produtividade** | Baixa (muito codigo manual) | Alta (abstrações prontas) |
| **Curva de aprendizado** | Baixa | Media |
| **Ideal para** | Tarefas simples, 1-2 chamadas | Pipelines complexas, RAG, agents |
| **Analogia Mario** | Jogar com controles basicos (D-pad + 2 botoes) | Jogar com controle pro (analogicos + triggers + combos) |

**Regra**: Se sua tarefa e "enviar prompt, receber resposta" — use chamada direta. Se precisa de RAG, agents, memory, chains complexas — use LangChain.

### 9.2 LangChain vs LangGraph

LangGraph e um projeto **do mesmo time** do LangChain, mas com uma filosofia diferente:

| Aspecto | LangChain | LangGraph |
|---|---|---|
| **Estrutura** | Chains (sequencias lineares) | Grafos (nodes e edges) |
| **Fluxo** | Linear ou com branches simples | Ciclos, loops, fluxos complexos |
| **Agents** | Agents basicos com ReAct | Agents avancados com estado persistente |
| **Estado** | Simples (input/output) | Rico (estado global compartilhado) |
| **Complexidade** | Media | Alta |
| **Ideal para** | RAG, chatbots, pipelines simples | Multi-agent, workflows complexos, orquestracao |
| **Analogia Mario** | Combo linear (A → B → C) | Mapa completo da fase (vai, volta, bifurca, cicla) |

```
LANGCHAIN (Chain linear):
  A → B → C → D → Resultado

LANGGRAPH (Grafo com ciclos):
  A → B → C
       ↑   │
       │   v
       └── D (se D falhar, volta para B e tenta de novo)
```

**Regra**: Use LangChain para pipelines lineares e RAG. Use LangGraph para workflows complexos com ciclos, multi-agents e decisoes sofisticadas.

### 9.3 LangChain vs Semantic Kernel

Semantic Kernel e o framework de IA da **Microsoft** (alternativa ao LangChain):

| Aspecto | LangChain | Semantic Kernel |
|---|---|---|
| **Criador** | LangChain Inc. | Microsoft |
| **Linguagens** | Python, JavaScript | Python, C#, Java |
| **Ecossistema** | Enorme, comunidade gigante | Crescendo, integracao Azure nativa |
| **Integracao Azure** | Boa (via langchain-azure) | Excelente (nativa) |
| **Documentacao** | Extensa mas as vezes confusa | Clara e bem organizada |
| **Comunidade** | Muito grande | Grande, em crescimento |
| **Ideal para** | Projetos Python, RAG, prototipagem | Projetos Azure/.NET, enterprise |
| **Analogia Mario** | Controle Nintendo (universal) | Controle Xbox (otimizado para o ecossistema) |

### 9.4 Tabela Decisoria

```
QUAL FRAMEWORK USAR? FLUXO DE DECISAO
=======================================

Sua tarefa e simples (1-2 chamadas ao LLM)?
  │
  ├── SIM → Use CHAMADA DIRETA a API
  │         (nao precisa de framework)
  │
  └── NAO → Precisa de RAG, chains ou agents?
            │
            ├── SIM → Pipelines lineares ou RAG?
            │         │
            │         ├── SIM → Use LANGCHAIN
            │         │         (chains, RAG, agents basicos)
            │         │
            │         └── NAO → Workflows complexos com ciclos?
            │                   │
            │                   ├── SIM → Use LANGGRAPH
            │                   │         (grafos, multi-agent)
            │                   │
            │                   └── NAO → Ecossistema Azure/.NET?
            │                             │
            │                             ├── SIM → Use SEMANTIC KERNEL
            │                             │
            │                             └── NAO → Use LANGCHAIN
            │
            └── NAO → Use CHAMADA DIRETA
```

---

## 10. Tabela Final: Componente / Funcao / Analogia / Codigo

| # | Componente | O que Faz | Analogia Mario | Codigo Exemplo |
|---|---|---|---|---|
| 1 | **Model** | Interface com LLM | Personagem na tela de selecao | `ChatOpenAI(model="gpt-4o")` |
| 2 | **Prompt** | Template de instrucoes | Instrucoes antes da fase | `ChatPromptTemplate.from_messages([...])` |
| 3 | **Chain** | Sequencia de operacoes | Combo de power-ups | `prompt \| model \| parser` |
| 4 | **Agent** | Decisor autonomo | Jogador que escolhe o combo | `create_react_agent(model, tools)` |
| 5 | **Tool** | Funcao externa | Item no inventario | `@tool def buscar(...): ...` |
| 6 | **Memory** | Historico de conversa | Diario de aventuras | `ConversationBufferMemory()` |
| 7 | **LCEL** | Sintaxe de composicao | Notacao de combo (↑↑↓↓←→) | `a \| b \| c` |
| 8 | **Retriever** | Busca documentos (RAG) | Mochila magica | `vectorstore.as_retriever()` |
| 9 | **Output Parser** | Formata saida | Placar formatado | `StrOutputParser()` |
| 10 | **Callback** | Monitora execucao | Camera de replay | `StdOutCallbackHandler()` |
| 11 | **Embedding** | Texto para vetores | Selo magico de Toadette | `OpenAIEmbeddings()` |
| 12 | **Vector Store** | Banco de vetores | Prateleira encantada | `Chroma.from_documents(...)` |
| 13 | **Document Loader** | Le documentos | Coletor de pergaminhos | `PyPDFLoader("doc.pdf")` |
| 14 | **Text Splitter** | Quebra documentos | Cortador de pergaminhos | `RecursiveCharacterTextSplitter(...)` |

---

## Progressao LangChain: A Jornada do Mestre de Combos

```
PROGRESSAO LANGCHAIN — De Novato a Mestre
==========================================

Nivel 1 -> Aprendiz de Combos
             = Chain simples: prompt | model | parser
             Uma unica sequencia linear. Funcional e direto.

Nivel 2 -> Combatente
             = Chains com RAG: retriever | prompt | model | parser
             Consulta documentos antes de responder. Respostas fundamentadas.

Nivel 3 -> Guerreiro
             = Agents com Tools
             O personagem decide sozinho qual ferramenta usar.
             Flexivel e adaptativo.

Nivel 4 -> Mestre de Combos
             = Chains complexas com Memory + RAG + Agents
             Sistema completo: lembra conversas, consulta docs,
             usa ferramentas, decide autonomamente.

MESTRE  -> Mario Lendario
             = LangGraph + Multi-Agent + Orquestracao
             Multiplos personagens trabalhando juntos,
             cada um com seu inventario e especialidade.
             O sistema definitivo.
```

---

**Anterior:** Fase 7-2 — A Biblioteca Magica (RAG) | **Proximo:** Fase 7-4 (em breve)

---

### Combo Desbloqueado!

Sofia agora domina a Cadeia de Power-Ups — LangChain.
Ela aprendeu a montar combos devastadores, criar personagens autonomos, equipar inventarios de ferramentas, e dar memoria aos seus companheiros.
O Star World revelou seus segredos mais poderosos, e Sofia agora possui o conhecimento para construir aplicacoes de IA sofisticadas usando o framework mais popular do mercado.

**Mapeamento rapido deste capitulo:**

| Conceito Original | Versao Mario |
|---|---|
| LangChain | Sistema de Combos do Mario |
| Chain | Combo de power-ups (Mushroom → Fire → Star) |
| Agent | Jogador autonomo que decide qual combo usar |
| Tool | Item no inventario (bola de fogo, capa, martelo) |
| Memory | Diario de aventuras — lembra de fases anteriores |
| LCEL | Notacao de combo (↑↑↓↓←→←→BA) |
| Model | Personagem na tela de selecao (Mario, Luigi, Yoshi) |
| Prompt | Instrucoes escritas para o personagem |
| Retriever | Mochila magica do RAG Mario |
| Output Parser | Placar que mostra resultado formatado |
| LangGraph | Mapa completo da fase (com ciclos e bifurcacoes) |
| Semantic Kernel | Controle Xbox (otimizado para ecossistema Microsoft) |

---

## References

- LangChain Python Documentation — https://python.langchain.com/docs/get_started/introduction
- LangChain JavaScript Documentation — https://js.langchain.com/

---

<div align="center">

⬅️ [Anterior: Fase 7-2: RAG](7-2-rag.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 7-4: Microsoft Agentic Framework](7-4-microsoft-agentic-framework.md)

</div>
