---
title: "Fase 7-BOSS — Boss Battle: Construindo seu Primeiro Agente"
description: "Projeto pratico: construindo seu primeiro agente RAG com Python e analogias Mario"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-7", "project", "rag-agent", "hands-on"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-03-18 | Paula Silva | Versao inicial — Edicao Super Mario Bros |

# Fase 7-BOSS — Boss Battle: Construindo seu Primeiro Agente
## O Projeto Pratico Final — Toad Helper, seu Assistente de IA

---

**Preparado para:** Sofia
**Versao:** 2.0 — Edicao Mushroom Kingdom
**Autora:** Paula Silva | Microsoft Latam Software GBB
**Data:** Marco 2026
**Idioma:** Portugues do Brasil (pt-BR)
**Colecao:** Agentic DevOps — Edicao Super Mario Bros

---

## SUMARIO

1. [Introducao — A Boss Battle Final do Star World](#introducao)
2. [O Projeto: Toad Helper](#o-projeto)
3. [Arquitetura do Toad Helper](#arquitetura)
4. [Pre-Requisitos — Equipando-se para a Batalha](#pre-requisitos)
5. [Passo 1 — Estrutura do Projeto](#passo-1)
6. [Passo 2 — O Motor do Agente (Conexao com LLM)](#passo-2)
7. [Passo 3 — A Biblioteca Real (RAG)](#passo-3)
8. [Passo 4 — O Inventario de Ferramentas (Tools)](#passo-4)
9. [Passo 5 — O Agente Completo](#passo-5)
10. [Passo 6 — Testando o Toad Helper](#passo-6)
11. [Passo 7 — Melhorias e Proximos Passos](#passo-7)
12. [Checklist Final — Boss Derrotado?](#checklist)
13. [Conclusao — Power-Up Desbloqueado!](#conclusao)

---

## Introducao — A Boss Battle Final do Star World

Sofia chegou a fase final do Star World (World 7). Atras da porta gigante, um aviso:

> **"BOSS BATTLE FINAL — Voce aprendeu sobre agentes, frameworks, canais, e IDPs. Agora prove que domina tudo: CONSTRUA SEU PROPRIO AGENTE!"**

Esta e a fase mais importante de todo o Star World. Nao e teoria — e **pratica pura**. Voce vai construir, do zero, um agente de IA funcional que:

1. Se conecta a um LLM (modelo de linguagem)
2. Consulta seus documentos locais (RAG)
3. Tem ferramentas (tools) para buscar e processar informacoes
4. Roda como um script Python simples

No final, voce tera um **Toad Helper** — seu proprio NPC inteligente que responde perguntas sobre o seu projeto consultando a Biblioteca Real (seus docs).

---

## 1. O Projeto: Toad Helper

### O que Vamos Construir

Vamos construir o **Toad Helper** — um agente de IA que funciona como o Toad no Mushroom Kingdom: um assistente prestativo que conhece o reino (seu projeto) e responde perguntas consultando a Biblioteca Real (seus documentos).

### O que o Toad Helper Faz

| Pergunta | O que o Toad Faz | Resultado |
|---|---|---|
| *"O que faz este projeto?"* | Le o README e resume | Explicacao clara do projeto |
| *"Quais tecnologias usamos?"* | Busca nos docs as tecnologias | Lista de tecnologias com descricao |
| *"Como faco deploy?"* | Encontra o guia de deploy nos docs | Passo a passo de deploy |
| *"Quais endpoints a API tem?"* | Busca nos docs de API | Lista de endpoints |
| *"Quem criou este projeto?"* | Le metadados dos docs | Informacao do autor |

### Analogia Mario: Construindo seu Proprio Toad NPC

Voce esta na **oficina de criacao de personagens** do Mushroom Kingdom. Vai criar um Toad NPC que:

- **Tem um cerebro** (conexao com LLM — o motor de inteligencia)
- **Consulta a Biblioteca Real** (RAG — busca nos documentos do reino)
- **Tem ferramentas no cinto** (tools — pode ler arquivos, listar diretorios)
- **Responde em portugues** (fala a lingua do reino)

```
┌──────────────────────────────────────────────────────────┐
│                    TOAD HELPER                              │
│              Seu Primeiro Agente de IA                      │
│                                                           │
│  ┌──────────────────────────────────────────────────┐    │
│  │                                                   │    │
│  │        ┌─────────────┐                           │    │
│  │        │   CEREBRO   │ ← LLM (GPT-4o)           │    │
│  │        │  (Motor IA) │                           │    │
│  │        └──────┬──────┘                           │    │
│  │               │                                   │    │
│  │        ┌──────▼──────┐                           │    │
│  │        │ BIBLIOTECA  │ ← RAG (seus docs)         │    │
│  │        │   REAL      │                           │    │
│  │        └──────┬──────┘                           │    │
│  │               │                                   │    │
│  │   ┌───────────┼───────────┐                      │    │
│  │   │           │           │                      │    │
│  │   ▼           ▼           ▼                      │    │
│  │ ┌─────┐   ┌─────┐   ┌─────┐                    │    │
│  │ │ LER │   │LISTAR│   │BUSCAR│  ← Tools          │    │
│  │ │DOCS │   │ DIR  │   │TEXTO │                    │    │
│  │ └─────┘   └─────┘   └─────┘                    │    │
│  │                                                   │    │
│  └──────────────────────────────────────────────────┘    │
│                                                           │
│  Sofia: "Toad, como faco deploy?"                         │
│  Toad: "Consultei a Biblioteca Real! Aqui esta o guia..." │
└──────────────────────────────────────────────────────────┘
```

---

## 2. Arquitetura do Toad Helper

### Diagrama de Arquitetura

```
┌─────────────────────────────────────────────────────────────────┐
│                      TOAD HELPER — ARQUITETURA                   │
│                                                                   │
│  ┌──────────┐                                                    │
│  │ USUARIO  │  "Como faco deploy do projeto?"                    │
│  │ (Sofia)  │                                                    │
│  └─────┬────┘                                                    │
│        │                                                          │
│        ▼                                                          │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │                    TOAD HELPER (main.py)                   │    │
│  │                                                           │    │
│  │  1. Recebe a pergunta do usuario                          │    │
│  │  2. Busca documentos relevantes (RAG)                     │    │
│  │  3. Monta o contexto (pergunta + docs encontrados)        │    │
│  │  4. Envia para o LLM                                      │    │
│  │  5. Retorna a resposta                                    │    │
│  │                                                           │    │
│  │  ┌────────────────┐  ┌────────────────┐                  │    │
│  │  │  MODULO RAG    │  │ MODULO TOOLS   │                  │    │
│  │  │                │  │                │                  │    │
│  │  │ Indexa docs    │  │ ler_arquivo()  │                  │    │
│  │  │ Busca por      │  │ listar_dir()   │                  │    │
│  │  │ similaridade   │  │ buscar_texto() │                  │    │
│  │  └───────┬────────┘  └───────┬────────┘                  │    │
│  │          │                   │                            │    │
│  │          ▼                   ▼                            │    │
│  │  ┌────────────────────────────────────────┐              │    │
│  │  │          CONECTOR LLM                   │              │    │
│  │  │   OpenAI API / Azure OpenAI / Ollama    │              │    │
│  │  └────────────────────────────────────────┘              │    │
│  └──────────────────────────────────────────────────────────┘    │
│        │                                                          │
│        ▼                                                          │
│  ┌──────────┐                                                    │
│  │ RESPOSTA │  "Para fazer deploy, siga estes passos: ..."       │
│  └──────────┘                                                    │
│                                                                   │
│  PASTA DE DOCUMENTOS (a "Biblioteca Real"):                       │
│  docs/                                                            │
│  ├── README.md         ← Sobre o projeto                         │
│  ├── DEPLOY.md         ← Guia de deploy                          │
│  ├── API.md            ← Documentacao da API                     │
│  ├── ARCHITECTURE.md   ← Arquitetura do sistema                  │
│  └── CONTRIBUTING.md   ← Como contribuir                         │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Componentes

| Componente | Funcao | Analogia Mario |
|---|---|---|
| **main.py** | Ponto de entrada — o Toad em si | O personagem Toad no jogo |
| **rag.py** | Busca documentos relevantes | A Biblioteca Real do castelo |
| **tools.py** | Ferramentas que o Toad pode usar | O cinto de utilidades do Toad |
| **config.py** | Configuracoes (chave API, etc.) | As opcoes do jogo (volume, controles) |
| **docs/** | Pasta com os documentos do projeto | Os livros e pergaminhos da Biblioteca |

---

## 3. Pre-Requisitos — Equipando-se para a Batalha

Antes de enfrentar o Boss, voce precisa se equipar. Certifique-se de ter:

### Software Necessario

```bash
# Python 3.10 ou superior
python3 --version
# Deve mostrar: Python 3.10.x ou superior

# pip (gerenciador de pacotes Python)
pip3 --version

# git (controle de versao)
git --version
```

### Chave de API

Voce precisa de acesso a um LLM. Opcoes:

| Provedor | Como Obter | Custo |
|---|---|---|
| **OpenAI** | Criar conta em platform.openai.com | Pay-as-you-go (~$0.01 por pergunta) |
| **Azure OpenAI** | Criar recurso no Azure | Pay-as-you-go |
| **Ollama (local)** | Instalar ollama.com, rodar modelo local | Gratuito (usa sua maquina) |

Para este tutorial, vamos usar **OpenAI** como exemplo, mas o codigo funciona com qualquer provedor com pequenas adaptacoes.

### Pacotes Python

```bash
# Criar um ambiente virtual (boa pratica)
python3 -m venv toad-env
source toad-env/bin/activate  # Linux/Mac
# toad-env\Scripts\activate   # Windows

# Instalar dependencias
pip install openai tiktoken
```

> **Nota:** Usamos apenas `openai` e `tiktoken` para manter o projeto simples. Em um agente mais avancado, voce usaria Semantic Kernel, LangChain, ou outro framework. Aqui, o objetivo e **entender os fundamentos** sem camadas de abstracao.

---

## 4. Passo 1 — Estrutura do Projeto

Crie a seguinte estrutura de pastas:

```bash
# Criar o diretorio do projeto
mkdir toad-helper
cd toad-helper

# Criar a estrutura
mkdir docs
mkdir src
```

A estrutura final sera:

```
toad-helper/                    ← Raiz do projeto
├── docs/                       ← A Biblioteca Real (seus documentos)
│   ├── README.md               ← Sobre o projeto
│   ├── DEPLOY.md               ← Guia de deploy
│   ├── API.md                  ← Documentacao da API
│   └── ARCHITECTURE.md         ← Arquitetura
├── src/                        ← Codigo do Toad Helper
│   ├── config.py               ← Configuracoes
│   ├── tools.py                ← Ferramentas do Toad
│   ├── rag.py                  ← Busca na Biblioteca Real
│   └── main.py                 ← O Toad Helper em si
├── .env                        ← Chave API (NUNCA commit isso!)
└── requirements.txt            ← Dependencias
```

### Criar os Documentos de Exemplo (A Biblioteca Real)

Primeiro, vamos criar os documentos que o Toad vai consultar. Estes sao exemplos — substitua pelos documentos **reais** do seu projeto.

```bash
# docs/README.md
```

Crie o arquivo `docs/README.md` com este conteudo:

```markdown
# TodoApp — Aplicacao de Gerenciamento de Tarefas

## Sobre
O TodoApp e uma aplicacao web para gerenciamento de tarefas pessoais.
Permite criar, editar, excluir e marcar tarefas como concluidas.

## Tecnologias
- Frontend: React 18 com TypeScript
- Backend: Node.js com Express
- Banco de Dados: PostgreSQL 15
- ORM: Prisma
- Testes: Jest
- Container: Docker + Docker Compose
- CI/CD: GitHub Actions

## Time
- Autora: Sofia Silva
- Time: Time Alpha
- Empresa: Mushroom Kingdom Inc.

## Repositorio
github.com/mushroom-kingdom/todoapp
```

Crie o arquivo `docs/DEPLOY.md`:

```markdown
# Guia de Deploy — TodoApp

## Pre-requisitos
- Docker instalado
- Acesso ao registry de containers
- Variaveis de ambiente configuradas

## Deploy Local (Desenvolvimento)
1. Clone o repositorio
2. Copie .env.example para .env
3. Execute: docker-compose up -d
4. Acesse: http://localhost:3000

## Deploy em Staging
1. Faca merge na branch 'develop'
2. GitHub Actions executa automaticamente:
   - Build do frontend e backend
   - Testes unitarios e de integracao
   - Push da imagem Docker
   - Deploy no ambiente de staging
3. Verifique: https://staging.todoapp.mushroom-kingdom.com

## Deploy em Producao
1. Crie uma Pull Request de 'develop' para 'main'
2. Obtenha 2 aprovacoes de code review
3. Faca merge na 'main'
4. GitHub Actions executa automaticamente:
   - Todos os testes
   - Build de producao
   - Deploy blue-green
   - Smoke tests
   - Promocao do trafego
5. Verifique: https://todoapp.mushroom-kingdom.com

## Rollback
Em caso de problemas:
1. Acesse GitHub Actions
2. Execute o workflow 'rollback'
3. Selecione a versao anterior
4. Confirme o rollback
```

Crie o arquivo `docs/API.md`:

```markdown
# Documentacao da API — TodoApp

## Base URL
- Desenvolvimento: http://localhost:4000/api
- Staging: https://staging-api.todoapp.mushroom-kingdom.com/api
- Producao: https://api.todoapp.mushroom-kingdom.com/api

## Autenticacao
Todas as rotas (exceto login e registro) requerem um token JWT
no header Authorization: Bearer <token>

## Endpoints

### POST /api/auth/login
Autentica o usuario e retorna um token JWT.
Body: { "email": "string", "password": "string" }
Resposta: { "token": "string", "user": { "id", "name", "email" } }

### POST /api/auth/register
Registra um novo usuario.
Body: { "name": "string", "email": "string", "password": "string" }
Resposta: { "user": { "id", "name", "email" } }

### GET /api/todos
Lista todas as tarefas do usuario autenticado.
Resposta: [{ "id", "title", "completed", "createdAt" }]

### POST /api/todos
Cria uma nova tarefa.
Body: { "title": "string" }
Resposta: { "id", "title", "completed": false, "createdAt" }

### PUT /api/todos/:id
Atualiza uma tarefa.
Body: { "title": "string", "completed": boolean }
Resposta: { "id", "title", "completed", "updatedAt" }

### DELETE /api/todos/:id
Exclui uma tarefa.
Resposta: 204 No Content
```

Crie o arquivo `docs/ARCHITECTURE.md`:

```markdown
# Arquitetura — TodoApp

## Visao Geral
O TodoApp segue uma arquitetura de 3 camadas:

1. Frontend (React SPA)
2. Backend (API REST com Express)
3. Banco de Dados (PostgreSQL)

## Frontend
- React 18 com TypeScript
- Vite como bundler
- React Router para navegacao
- Context API para estado global
- Axios para chamadas HTTP

## Backend
- Node.js 20 LTS
- Express 4.x
- Prisma ORM
- JWT para autenticacao
- Bcrypt para hash de senhas
- Middleware de validacao com Zod

## Banco de Dados
- PostgreSQL 15
- Gerenciado via Prisma Migrations
- Connection pooling via PgBouncer em producao

## Infraestrutura
- Docker containers para cada camada
- Docker Compose para desenvolvimento local
- GitHub Actions para CI/CD
- Azure Container Apps em producao

## Diagrama
Frontend (React) → Backend (Express) → PostgreSQL
       ↑                    ↑
       └── CDN (assets)     └── Redis (cache)
```

---

## 5. Passo 2 — O Motor do Agente (Conexao com LLM)

Vamos comecar pelo cerebro do Toad — a conexao com o LLM.

### Arquivo: src/config.py

```python
# src/config.py
# Configuracoes do Toad Helper
# Analogia: As opcoes do jogo (volume, controles, dificuldade)

import os

# ==============================================
# CONFIGURACAO DO LLM
# A chave da API e o "passe VIP" para falar com
# o cerebro do Toad. NUNCA compartilhe ou commite!
# ==============================================

# Carregar a chave de API de forma segura
# Opcao 1: Variavel de ambiente (recomendado)
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY", "")

# Modelo a ser usado
# gpt-4o = mais inteligente, mais caro
# gpt-4o-mini = rapido, barato, bom para testes
MODELO = "gpt-4o-mini"

# Diretorio dos documentos (a Biblioteca Real)
DOCS_DIR = "docs"

# Personalidade do Toad
SYSTEM_PROMPT = """Voce e o Toad Helper, um assistente prestativo do Mushroom Kingdom.
Sua funcao e responder perguntas sobre o projeto consultando a documentacao disponivel.

Regras:
1. Sempre responda em portugues do Brasil (pt-BR).
2. Baseie suas respostas APENAS nos documentos fornecidos.
3. Se nao encontrar a informacao nos documentos, diga honestamente que nao sabe.
4. Seja claro, direto e amigavel.
5. Use exemplos quando possivel.
6. Se a pergunta for sobre algo nao relacionado ao projeto, diga educadamente
   que voce so sabe sobre o projeto TodoApp.
"""

# Numero maximo de tokens na resposta
MAX_TOKENS = 1024

# Temperatura (0 = deterministico, 1 = criativo)
# Para um assistente de docs, 0.3 e ideal (preciso mas nao robotico)
TEMPERATURA = 0.3
```

### Arquivo: .env

```bash
# .env — Variaveis de ambiente secretas
# NUNCA commite este arquivo! Adicione ao .gitignore!
# Analogia: O cofre secreto do castelo onde guardam as chaves

OPENAI_API_KEY=sk-sua-chave-aqui
```

### Arquivo: .gitignore

```
# .gitignore — Arquivos que o Git deve ignorar
# Analogia: Coisas que NAO saem do castelo

.env
toad-env/
__pycache__/
*.pyc
```

---

## 6. Passo 3 — A Biblioteca Real (RAG)

RAG (Retrieval-Augmented Generation) e a tecnica que permite ao Toad **buscar informacoes nos documentos** antes de responder. Em vez de inventar respostas, ele consulta a Biblioteca Real.

### Como o RAG Funciona

```
┌──────────────────────────────────────────────────────────┐
│                     RAG — COMO FUNCIONA                    │
│                                                           │
│  1. INDEXACAO (uma vez, no inicio)                         │
│     ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐          │
│     │README│   │DEPLOY│   │ API  │   │ARCHIT│          │
│     │ .md  │   │ .md  │   │ .md  │   │ .md  │          │
│     └──┬───┘   └──┬───┘   └──┬───┘   └──┬───┘          │
│        │          │          │          │                │
│        ▼          ▼          ▼          ▼                │
│     [Divide em pedacos menores (chunks)]                  │
│        │          │          │          │                │
│        ▼          ▼          ▼          ▼                │
│     ┌──────────────────────────────────────┐             │
│     │        INDICE DE DOCUMENTOS           │             │
│     │  (lista de pedacos com seus textos)   │             │
│     └──────────────────────────────────────┘             │
│                                                           │
│  2. BUSCA (a cada pergunta)                               │
│     Pergunta: "Como faco deploy?"                         │
│        │                                                  │
│        ▼                                                  │
│     [Busca os pedacos mais relevantes]                    │
│        │                                                  │
│        ▼                                                  │
│     Encontra: chunk do DEPLOY.md                          │
│        │                                                  │
│        ▼                                                  │
│     Envia pergunta + contexto para o LLM                  │
│        │                                                  │
│        ▼                                                  │
│     Resposta baseada nos documentos reais                  │
└──────────────────────────────────────────────────────────┘
```

### Arquivo: src/rag.py

```python
# src/rag.py
# Modulo RAG — A Biblioteca Real do Toad Helper
# Analogia: O sistema de organizacao e busca da Biblioteca
#           Real do Castelo do Mushroom Kingdom.
#           Cada livro e dividido em paginas, e o bibliotecario
#           sabe encontrar a pagina certa para cada pergunta.

import os
import re
from typing import List, Tuple


class BibliotecaReal:
    """A Biblioteca Real do Mushroom Kingdom.

    Indexa todos os documentos e permite buscar
    os trechos mais relevantes para uma pergunta.

    Analogia: O bibliotecario Toad que organiza todos
    os pergaminhos e sabe encontrar qualquer informacao.
    """

    def __init__(self, diretorio_docs: str):
        """Inicializa a biblioteca lendo todos os documentos.

        Args:
            diretorio_docs: Caminho para a pasta de documentos.
                           Analogia: O endereco da Biblioteca Real.
        """
        self.diretorio = diretorio_docs
        self.chunks: List[dict] = []  # Pedacos de documentos indexados
        self._indexar_documentos()

    def _indexar_documentos(self):
        """Le todos os documentos e divide em pedacos (chunks).

        Analogia: O bibliotecario abre cada livro, separa em
        capitulos/secoes, e cataloga cada secao para busca rapida.
        """
        print(f"Indexando documentos em '{self.diretorio}'...")

        # Verificar se o diretorio existe
        if not os.path.exists(self.diretorio):
            print(f"AVISO: Diretorio '{self.diretorio}' nao encontrado!")
            return

        # Percorrer todos os arquivos .md no diretorio
        for arquivo in sorted(os.listdir(self.diretorio)):
            if arquivo.endswith(".md"):
                caminho = os.path.join(self.diretorio, arquivo)
                try:
                    with open(caminho, "r", encoding="utf-8") as f:
                        conteudo = f.read()
                except Exception as e:
                    print(f"  Erro ao ler {arquivo}: {e}")
                    continue

                # Dividir o documento em secoes (por headers ##)
                secoes = self._dividir_em_secoes(conteudo, arquivo)
                self.chunks.extend(secoes)
                print(f"  Indexado: {arquivo} ({len(secoes)} secoes)")

        print(f"Total: {len(self.chunks)} secoes indexadas.\n")

    def _dividir_em_secoes(self, texto: str, nome_arquivo: str) -> List[dict]:
        """Divide um documento em secoes usando headers Markdown.

        Cada secao se torna um 'chunk' — um pedaco buscavel.

        Analogia: Separar um livro grande em capitulos menores
        para que o bibliotecario possa encontrar rapidamente
        o capitulo certo.

        Args:
            texto: Conteudo completo do documento.
            nome_arquivo: Nome do arquivo de origem.

        Returns:
            Lista de dicionarios com texto e metadados de cada secao.
        """
        secoes = []

        # Dividir por headers (## ou #)
        partes = re.split(r'\n(?=#{1,3}\s)', texto)

        for parte in partes:
            parte = parte.strip()
            if not parte:
                continue

            # Extrair o titulo da secao (primeira linha que comeca com #)
            linhas = parte.split('\n')
            titulo = linhas[0].lstrip('#').strip() if linhas else "Sem titulo"

            secoes.append({
                "texto": parte,
                "arquivo": nome_arquivo,
                "titulo": titulo,
                "tamanho": len(parte)
            })

        return secoes

    def buscar(self, pergunta: str, max_resultados: int = 3) -> List[dict]:
        """Busca os chunks mais relevantes para uma pergunta.

        Usa busca por palavras-chave simples. Em um sistema
        mais avancado, usariamos embeddings vetoriais.

        Analogia: O bibliotecario ouve sua pergunta, pensa em
        quais palavras-chave sao importantes, e vai buscar os
        pergaminhos que contem essas palavras.

        Args:
            pergunta: A pergunta do usuario.
            max_resultados: Quantos chunks retornar (padrao: 3).

        Returns:
            Lista dos chunks mais relevantes, ordenados por relevancia.
        """
        if not self.chunks:
            return []

        # Extrair palavras-chave da pergunta (palavras com 3+ caracteres)
        palavras = set(
            p.lower() for p in re.findall(r'\w+', pergunta)
            if len(p) >= 3
        )

        # Pontuar cada chunk baseado em quantas palavras-chave contem
        resultados = []
        for chunk in self.chunks:
            texto_lower = chunk["texto"].lower()
            pontuacao = sum(
                1 for palavra in palavras
                if palavra in texto_lower
            )

            # Bonus se a palavra aparece no titulo
            titulo_lower = chunk["titulo"].lower()
            bonus_titulo = sum(
                2 for palavra in palavras
                if palavra in titulo_lower
            )

            pontuacao_total = pontuacao + bonus_titulo

            if pontuacao_total > 0:
                resultados.append({
                    **chunk,
                    "pontuacao": pontuacao_total
                })

        # Ordenar por pontuacao (maior primeiro) e retornar os melhores
        resultados.sort(key=lambda x: x["pontuacao"], reverse=True)
        return resultados[:max_resultados]

    def formatar_contexto(self, chunks: List[dict]) -> str:
        """Formata os chunks encontrados em texto para enviar ao LLM.

        Analogia: O bibliotecario organiza os pergaminhos encontrados
        numa mesa, em ordem de relevancia, prontos para consulta.

        Args:
            chunks: Lista de chunks encontrados pela busca.

        Returns:
            Texto formatado com os trechos relevantes.
        """
        if not chunks:
            return "Nenhum documento relevante encontrado na Biblioteca Real."

        partes = ["DOCUMENTOS RELEVANTES DA BIBLIOTECA REAL:\n"]
        for i, chunk in enumerate(chunks, 1):
            partes.append(
                f"--- Documento {i} (Fonte: {chunk['arquivo']}) ---\n"
                f"{chunk['texto']}\n"
            )

        return "\n".join(partes)
```

---

## 7. Passo 4 — O Inventario de Ferramentas (Tools)

Tools sao funcoes que o Toad pode usar para interagir com o sistema de arquivos e buscar informacoes adicionais.

### Arquivo: src/tools.py

```python
# src/tools.py
# Ferramentas do Toad Helper — O Cinto de Utilidades
# Analogia: Os itens que o Toad carrega no cinto:
#           uma lanterna (ler arquivos), um mapa (listar dirs),
#           e uma lupa (buscar texto).

import os
import re
from typing import List, Optional


def ler_arquivo(caminho: str) -> str:
    """Le o conteudo de um arquivo.

    Analogia: Toad pega a lanterna e ilumina um pergaminho
    especifico para ler seu conteudo.

    Args:
        caminho: Caminho do arquivo a ser lido.

    Returns:
        Conteudo do arquivo ou mensagem de erro.
    """
    try:
        # Verificacao de seguranca: nao permitir acesso fora do projeto
        caminho_absoluto = os.path.abspath(caminho)
        diretorio_projeto = os.path.abspath(".")

        if not caminho_absoluto.startswith(diretorio_projeto):
            return "ERRO: Acesso negado. So posso ler arquivos dentro do projeto."

        with open(caminho, "r", encoding="utf-8") as f:
            conteudo = f.read()

        # Limitar tamanho para nao estourar o contexto do LLM
        if len(conteudo) > 5000:
            conteudo = conteudo[:5000] + "\n\n[... conteudo truncado (arquivo muito grande) ...]"

        return conteudo

    except FileNotFoundError:
        return f"ERRO: Arquivo '{caminho}' nao encontrado."
    except PermissionError:
        return f"ERRO: Sem permissao para ler '{caminho}'."
    except Exception as e:
        return f"ERRO ao ler arquivo: {e}"


def listar_diretorio(caminho: str = ".") -> str:
    """Lista os arquivos e pastas de um diretorio.

    Analogia: Toad abre o mapa e mostra todos os caminhos
    e salas visiveis a partir da posicao atual.

    Args:
        caminho: Diretorio a ser listado (padrao: diretorio atual).

    Returns:
        Lista formatada de arquivos e pastas.
    """
    try:
        itens = sorted(os.listdir(caminho))
        resultado = [f"Conteudo de '{caminho}':\n"]

        for item in itens:
            caminho_completo = os.path.join(caminho, item)
            if item.startswith("."):
                continue  # Ignorar arquivos ocultos

            if os.path.isdir(caminho_completo):
                resultado.append(f"  [pasta] {item}/")
            else:
                tamanho = os.path.getsize(caminho_completo)
                resultado.append(f"  [arquivo] {item} ({tamanho} bytes)")

        return "\n".join(resultado)

    except FileNotFoundError:
        return f"ERRO: Diretorio '{caminho}' nao encontrado."
    except Exception as e:
        return f"ERRO ao listar diretorio: {e}"


def buscar_texto(termo: str, diretorio: str = "docs") -> str:
    """Busca um termo em todos os arquivos .md de um diretorio.

    Analogia: Toad pega a lupa magica e busca uma palavra
    especifica em todos os pergaminhos da Biblioteca Real.

    Args:
        termo: Texto a ser buscado.
        diretorio: Onde buscar (padrao: pasta docs).

    Returns:
        Trechos onde o termo foi encontrado.
    """
    if not termo or len(termo) < 2:
        return "ERRO: Termo de busca muito curto (minimo 2 caracteres)."

    resultados = []

    try:
        for arquivo in sorted(os.listdir(diretorio)):
            if not arquivo.endswith(".md"):
                continue

            caminho = os.path.join(diretorio, arquivo)
            with open(caminho, "r", encoding="utf-8") as f:
                linhas = f.readlines()

            for i, linha in enumerate(linhas):
                if termo.lower() in linha.lower():
                    # Mostrar a linha encontrada com contexto
                    inicio = max(0, i - 1)
                    fim = min(len(linhas), i + 2)
                    contexto = "".join(linhas[inicio:fim]).strip()
                    resultados.append(
                        f"\nEncontrado em {arquivo} (linha {i + 1}):\n"
                        f"  {contexto}"
                    )

        if not resultados:
            return f"Termo '{termo}' nao encontrado em nenhum documento."

        return f"Busca por '{termo}':\n" + "\n".join(resultados[:10])

    except Exception as e:
        return f"ERRO na busca: {e}"


# Registro de todas as ferramentas disponiveis
# Analogia: O inventario oficial do cinto de utilidades do Toad
FERRAMENTAS_DISPONIVEIS = {
    "ler_arquivo": {
        "funcao": ler_arquivo,
        "descricao": "Le o conteudo de um arquivo especifico",
        "uso": "ler_arquivo('docs/README.md')"
    },
    "listar_diretorio": {
        "funcao": listar_diretorio,
        "descricao": "Lista arquivos e pastas de um diretorio",
        "uso": "listar_diretorio('docs')"
    },
    "buscar_texto": {
        "funcao": buscar_texto,
        "descricao": "Busca um termo em todos os documentos",
        "uso": "buscar_texto('deploy')"
    }
}
```

---

## 8. Passo 5 — O Agente Completo

Agora vamos juntar tudo no arquivo principal — o Toad Helper completo!

### Arquivo: src/main.py

```python
# src/main.py
# TOAD HELPER — Seu Primeiro Agente de IA
#
# Analogia: Este e o Toad em pessoa. Ele recebe perguntas,
# consulta a Biblioteca Real, usa suas ferramentas, e
# responde com sabedoria e simpatia.
#
# Uso: python src/main.py

import os
import sys

# Adicionar o diretorio raiz ao path para imports
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from openai import OpenAI
from src.config import (
    OPENAI_API_KEY,
    MODELO,
    DOCS_DIR,
    SYSTEM_PROMPT,
    MAX_TOKENS,
    TEMPERATURA,
)
from src.rag import BibliotecaReal
from src.tools import ler_arquivo, listar_diretorio, buscar_texto


def carregar_chave_api():
    """Carrega a chave da API, tentando varias fontes.

    Analogia: Procurar a chave do castelo — primeiro
    no bolso, depois no cofre, depois embaixo do tapete.
    """
    chave = OPENAI_API_KEY

    # Tentar carregar do arquivo .env se a variavel nao estiver definida
    if not chave:
        env_path = os.path.join(
            os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
            ".env"
        )
        if os.path.exists(env_path):
            with open(env_path, "r") as f:
                for linha in f:
                    if linha.startswith("OPENAI_API_KEY="):
                        chave = linha.strip().split("=", 1)[1]
                        break

    if not chave or chave == "sk-sua-chave-aqui":
        print("=" * 60)
        print("  ERRO: Chave da API nao configurada!")
        print()
        print("  Configure de uma destas formas:")
        print("  1. Variavel de ambiente: export OPENAI_API_KEY=sk-...")
        print("  2. Arquivo .env: OPENAI_API_KEY=sk-...")
        print("=" * 60)
        sys.exit(1)

    return chave


class ToadHelper:
    """O Toad Helper — Seu assistente de IA para o projeto.

    Analogia: Toad e o NPC mais prestativo do Mushroom Kingdom.
    Ele conhece a Biblioteca Real (seus docs), tem ferramentas
    no cinto, e um cerebro poderoso (LLM) para entender e
    responder perguntas.
    """

    def __init__(self):
        """Inicializa o Toad Helper.

        Analogia: Toad acorda, veste o uniforme, pega o cinto
        de ferramentas, e abre a Biblioteca Real para consulta.
        """
        print("=" * 60)
        print("  TOAD HELPER — Inicializando...")
        print("=" * 60)
        print()

        # 1. Conectar ao LLM (o cerebro)
        chave = carregar_chave_api()
        self.cliente = OpenAI(api_key=chave)
        self.modelo = MODELO
        print(f"  Cerebro conectado: {self.modelo}")

        # 2. Indexar a Biblioteca Real (RAG)
        self.biblioteca = BibliotecaReal(DOCS_DIR)

        # 3. Historico de conversa
        self.historico: list = [
            {"role": "system", "content": SYSTEM_PROMPT}
        ]

        print("  Toad Helper pronto para ajudar!\n")

    def pensar(self, pergunta: str) -> str:
        """Processa uma pergunta e gera uma resposta.

        Fluxo:
        1. Buscar documentos relevantes na Biblioteca Real
        2. Montar o contexto (pergunta + documentos)
        3. Enviar para o LLM
        4. Retornar a resposta

        Analogia: Toad ouve a pergunta, corre ate a Biblioteca,
        encontra os pergaminhos relevantes, le tudo, e volta
        com a resposta.

        Args:
            pergunta: A pergunta do usuario.

        Returns:
            A resposta do Toad Helper.
        """
        # Passo 1: Buscar na Biblioteca Real
        chunks_relevantes = self.biblioteca.buscar(pergunta)
        contexto_docs = self.biblioteca.formatar_contexto(chunks_relevantes)

        # Passo 2: Verificar se o usuario pediu para usar uma ferramenta
        resposta_ferramenta = self._verificar_ferramentas(pergunta)

        # Passo 3: Montar a mensagem com contexto
        mensagem_usuario = f"""Pergunta do usuario: {pergunta}

{contexto_docs}
"""
        # Adicionar resultado de ferramenta se houver
        if resposta_ferramenta:
            mensagem_usuario += f"\nResultado de ferramenta:\n{resposta_ferramenta}\n"

        # Passo 4: Adicionar ao historico e enviar para o LLM
        self.historico.append({"role": "user", "content": mensagem_usuario})

        try:
            resposta = self.cliente.chat.completions.create(
                model=self.modelo,
                messages=self.historico,
                max_tokens=MAX_TOKENS,
                temperature=TEMPERATURA,
            )

            texto_resposta = resposta.choices[0].message.content

            # Guardar no historico para contexto futuro
            self.historico.append(
                {"role": "assistant", "content": texto_resposta}
            )

            # Limitar historico para nao estourar o contexto
            if len(self.historico) > 20:
                # Manter system prompt + ultimas 18 mensagens
                self.historico = [self.historico[0]] + self.historico[-18:]

            return texto_resposta

        except Exception as e:
            return f"Erro ao consultar o LLM: {e}"

    def _verificar_ferramentas(self, pergunta: str) -> str:
        """Verifica se a pergunta requer uso de ferramentas.

        Analogia: Toad olha para o cinto de ferramentas e
        decide se precisa da lanterna, do mapa, ou da lupa.

        Args:
            pergunta: A pergunta do usuario.

        Returns:
            Resultado da ferramenta ou string vazia.
        """
        pergunta_lower = pergunta.lower()

        # Detectar pedidos de listagem de arquivos
        if any(p in pergunta_lower for p in [
            "listar arquivo", "quais arquivo", "lista de arquivo",
            "mostrar arquivo", "que arquivo", "estrutura"
        ]):
            return listar_diretorio("docs")

        # Detectar pedidos de busca especifica
        if "buscar" in pergunta_lower or "procurar" in pergunta_lower:
            # Extrair o termo de busca (palavras apos "buscar/procurar")
            for gatilho in ["buscar", "procurar"]:
                if gatilho in pergunta_lower:
                    idx = pergunta_lower.index(gatilho) + len(gatilho)
                    termo = pergunta[idx:].strip().strip('"').strip("'")
                    if termo:
                        return buscar_texto(termo)

        return ""


def main():
    """Funcao principal — Inicia o Toad Helper.

    Analogia: O jogador (Sofia) encontra o Toad na Praca Central
    e comeca a conversar.
    """
    # Inicializar o Toad Helper
    toad = ToadHelper()

    # Banner de boas-vindas
    print("=" * 60)
    print("  TOAD HELPER")
    print("  Seu assistente de IA para o projeto")
    print()
    print("  Comandos especiais:")
    print("    'sair'     — Encerrar a conversa")
    print("    'limpar'   — Limpar historico da conversa")
    print("    'arquivos' — Listar documentos disponiveis")
    print("=" * 60)
    print()

    while True:
        try:
            # Receber pergunta do usuario
            pergunta = input("Sofia: ").strip()

            # Comandos especiais
            if not pergunta:
                continue

            if pergunta.lower() in ["sair", "exit", "quit"]:
                print("\nToad: Ate a proxima aventura! Foi um prazer ajudar!")
                break

            if pergunta.lower() == "limpar":
                toad.historico = [toad.historico[0]]  # Manter so o system prompt
                print("\nToad: Historico limpo! Pronto para novas perguntas.\n")
                continue

            if pergunta.lower() == "arquivos":
                print(f"\n{listar_diretorio('docs')}\n")
                continue

            # Processar a pergunta
            print("\nToad: (consultando a Biblioteca Real...)\n")
            resposta = toad.pensar(pergunta)
            print(f"Toad: {resposta}\n")

        except KeyboardInterrupt:
            print("\n\nToad: Ate logo! Pressione Ctrl+C de novo para sair.")
            break
        except EOFError:
            print("\nToad: Ate a proxima!")
            break


if __name__ == "__main__":
    main()
```

### Arquivo: requirements.txt

```
# requirements.txt — Dependencias do projeto
# Analogia: Lista de ingredientes para a pocao

openai>=1.0.0
tiktoken>=0.5.0
```

---

## 9. Passo 6 — Testando o Toad Helper

### Executar o Agente

```bash
# Na raiz do projeto toad-helper/
# Certifique-se de que o ambiente virtual esta ativo

# Opcao 1: Variavel de ambiente
export OPENAI_API_KEY="sk-sua-chave-aqui"
python src/main.py

# Opcao 2: Arquivo .env ja configurado
python src/main.py
```

### Exemplos de Conversa

```
================================================================
  TOAD HELPER
  Seu assistente de IA para o projeto
================================================================

Sofia: O que faz este projeto?

Toad: (consultando a Biblioteca Real...)

Toad: O TodoApp e uma aplicacao web para gerenciamento de tarefas
pessoais. Com ela, voce pode criar, editar, excluir e marcar tarefas
como concluidas.

O projeto usa as seguintes tecnologias:
- Frontend: React 18 com TypeScript
- Backend: Node.js com Express
- Banco de Dados: PostgreSQL 15
- ORM: Prisma
- Testes: Jest
- Containers: Docker + Docker Compose
- CI/CD: GitHub Actions

Sofia: Como faco deploy em producao?

Toad: (consultando a Biblioteca Real...)

Toad: Para fazer deploy em producao, siga estes passos:

1. Crie uma Pull Request da branch 'develop' para 'main'
2. Obtenha 2 aprovacoes de code review
3. Faca merge na 'main'
4. O GitHub Actions executa automaticamente:
   - Todos os testes
   - Build de producao
   - Deploy blue-green
   - Smoke tests
   - Promocao do trafego
5. Verifique em: https://todoapp.mushroom-kingdom.com

Em caso de problemas, voce pode fazer rollback acessando
GitHub Actions e executando o workflow 'rollback'.

Sofia: Quais endpoints a API tem?

Toad: (consultando a Biblioteca Real...)

Toad: A API do TodoApp tem os seguintes endpoints:

Autenticacao:
- POST /api/auth/login — Autentica o usuario e retorna JWT
- POST /api/auth/register — Registra um novo usuario

Tarefas:
- GET /api/todos — Lista todas as tarefas do usuario
- POST /api/todos — Cria uma nova tarefa
- PUT /api/todos/:id — Atualiza uma tarefa
- DELETE /api/todos/:id — Exclui uma tarefa

Todas as rotas (exceto login e registro) requerem um token JWT
no header Authorization: Bearer <token>.

Sofia: sair

Toad: Ate a proxima aventura! Foi um prazer ajudar!
```

---

## 10. Passo 7 — Melhorias e Proximos Passos

O Toad Helper que construimos e funcional mas basico. Aqui estao melhorias que voce pode implementar:

### Nivel 1: Melhorias Simples

| Melhoria | O que Fazer | Analogia Mario |
|---|---|---|
| **Mais documentos** | Adicione mais arquivos .md na pasta docs/ | Mais livros na Biblioteca Real |
| **Busca melhor** | Use TF-IDF ou BM25 para ranking | Bibliotecario mais experiente |
| **Cores no terminal** | Use a biblioteca `colorama` para colorir output | Visual mais bonito do jogo |
| **Salvar conversas** | Grave historico em arquivo JSON | Diario de aventuras |

### Nivel 2: Melhorias Intermediarias

| Melhoria | O que Fazer | Analogia Mario |
|---|---|---|
| **Embeddings vetoriais** | Use embeddings da OpenAI para busca semantica | Bibliotecario que entende o significado, nao so as palavras |
| **Semantic Kernel** | Migre para Semantic Kernel com plugins | Upgrade do motor do Toad |
| **Interface web** | Crie uma interface com Streamlit ou Gradio | Portal bonito em vez de terminal |
| **Mais ferramentas** | Adicione: executar comandos, git status, etc. | Mais itens no cinto do Toad |

### Nivel 3: Melhorias Avancadas

| Melhoria | O que Fazer | Analogia Mario |
|---|---|---|
| **Multi-agente** | Use AutoGen para criar um time de agentes | Time multiplayer coordenado |
| **Deploy** | Publique no Azure com AI Agents SDK | Levar o Toad para producao |
| **MCP** | Conecte a ferramentas externas via MCP | Warp Zones para outros mundos |
| **Canal 3** | Integre com GitHub para responder em issues | Toad no sistema de correio Parakoopa |

### Diagrama de Evolucao

```
┌────────────────────────────────────────────────────────────┐
│              EVOLUCAO DO TOAD HELPER                         │
│                                                             │
│  NIVEL 1 (Voce esta aqui!)                                  │
│  ┌────────────┐                                             │
│  │ Toad Basic │  Python + OpenAI + RAG simples              │
│  │ Terminal   │  Busca por palavras-chave                   │
│  └─────┬──────┘                                             │
│        │                                                    │
│        ▼                                                    │
│  NIVEL 2                                                    │
│  ┌────────────┐                                             │
│  │ Toad Pro   │  Semantic Kernel + Embeddings               │
│  │ Interface  │  Interface web bonita                       │
│  │ Web        │  Mais ferramentas                           │
│  └─────┬──────┘                                             │
│        │                                                    │
│        ▼                                                    │
│  NIVEL 3                                                    │
│  ┌────────────┐                                             │
│  │ Toad Team  │  Multi-agente + MCP + Deploy                │
│  │ Multi-Agent│  Time completo de agentes                   │
│  │ Production │  Rodando em producao                        │
│  └────────────┘                                             │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

---

## 11. Checklist Final — Boss Derrotado?

Verifique se voce completou todos os passos. Cada item marcado e um golpe no Boss!

### Estrutura do Projeto
- [ ] Criou a pasta `toad-helper/` com a estrutura correta
- [ ] Criou a pasta `docs/` com pelo menos 3 documentos .md
- [ ] Criou a pasta `src/` com os 4 arquivos Python
- [ ] Criou o arquivo `.env` com sua chave de API
- [ ] Criou o `.gitignore` para proteger segredos

### Codigo
- [ ] `src/config.py` — Configuracoes definidas (modelo, temperatura, system prompt)
- [ ] `src/rag.py` — BibliotecaReal indexa e busca documentos
- [ ] `src/tools.py` — 3 ferramentas funcionando (ler, listar, buscar)
- [ ] `src/main.py` — ToadHelper conecta tudo e roda no terminal

### Funcionamento
- [ ] O agente inicia sem erros
- [ ] O agente indexa os documentos corretamente
- [ ] O agente responde perguntas baseado nos documentos
- [ ] O agente usa ferramentas quando apropriado
- [ ] O agente responde em portugues
- [ ] O agente admite quando nao sabe algo
- [ ] O comando "sair" encerra o agente
- [ ] O comando "limpar" limpa o historico
- [ ] O comando "arquivos" lista os documentos

### Entendimento
- [ ] Voce entende o que e RAG (Retrieval-Augmented Generation)
- [ ] Voce entende o que sao Tools (ferramentas que o agente pode usar)
- [ ] Voce entende o que e o System Prompt (personalidade do agente)
- [ ] Voce entende por que a chave da API NUNCA deve ser commitada
- [ ] Voce sabe a diferenca entre Semantic Kernel, AutoGen, AI Agents SDK e Copilot Studio

### Contagem de Golpes no Boss

```
┌──────────────────────────────────────────────┐
│          BOSS BATTLE — RESULTADO              │
│                                               │
│  0-5 marcados:   Boss ainda forte             │
│  6-10 marcados:  Boss enfraquecendo           │
│  11-15 marcados: Boss quase derrotado         │
│  16-18 marcados: Boss DERROTADO!              │
│                                               │
│  18/18 = VITORIA PERFEITA! Star Coin Extra!   │
└──────────────────────────────────────────────┘
```

---

## Conclusao — Power-Up Desbloqueado!

Sofia terminou a Boss Battle. Seu Toad Helper esta funcionando — respondendo perguntas, consultando documentos, usando ferramentas. Ela construiu um agente de IA **do zero**, entendendo cada peca:

| Peca | O que Faz | O que Sofia Aprendeu |
|---|---|---|
| **LLM (Cerebro)** | Entende perguntas e gera respostas | Como conectar a um modelo de IA |
| **RAG (Biblioteca)** | Busca informacoes nos documentos | Como dar conhecimento especifico ao agente |
| **Tools (Ferramentas)** | Interage com o sistema de arquivos | Como dar habilidades praticas ao agente |
| **System Prompt** | Define personalidade e regras | Como controlar o comportamento do agente |
| **Historico** | Lembra de conversas anteriores | Como manter contexto entre perguntas |

### O que Sofia Conquistou no Star World (World 7)

| Fase | O que Aprendeu | Power-Up |
|---|---|---|
| **7-4** | Microsoft Agentic Framework | Controle Universal + Montador de Times + Kit Oficial + Mario Maker |
| **7-5** | Os 4 Canais de Operacao | IDE + Portal + ChatOps + Background |
| **7-6** | IDP e Backstage | Hub Castle com Catalogo + Templates + Docs + Plugins + Search |
| **7-BOSS** | Construir um Agente | Toad Helper funcional com LLM + RAG + Tools |

### Recapitulando a Jornada

```
┌────────────────────────────────────────────────────────────┐
│                                                             │
│  STAR WORLD (WORLD 7) — COMPLETO!                           │
│                                                             │
│  Fase 7-4: Conheceu os frameworks      ████████████ 100%    │
│  Fase 7-5: Entendeu os 4 canais        ████████████ 100%    │
│  Fase 7-6: Dominou IDP e Backstage     ████████████ 100%    │
│  Fase 7-BOSS: Construiu um agente      ████████████ 100%    │
│                                                             │
│  ★ ★ ★ STAR WORLD COMPLETE ★ ★ ★                           │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

---

**POWER-UP DESBLOQUEADO: Voce agora sabe construir agentes de IA!**

Sofia nao e mais apenas uma jogadora do Mushroom Kingdom. Ela agora e uma **criadora de personagens**. Ela pode construir seus proprios NPCs inteligentes, dar a eles conhecimento, ferramentas e personalidade. E isso muda tudo.

Da proxima vez que Sofia enfrentar um desafio — seja entender um projeto novo, navegar em documentacao complexa, ou automatizar tarefas repetitivas — ela sabe que pode criar um Toad Helper para ajuda-la.

O Star World esta completo. Mas a jornada de Sofia no Mushroom Kingdom continua. Novos mundos esperam, novos bosses apareceram, e novos power-ups estao por vir.

**Ate a proxima aventura!**

---

| Anterior: Fase 7-6 — IDP e Backstage | Proximo: World 8 (em breve) |
|---|---|

---

**Habilidade Desbloqueada!**
Sofia completou o Star World e construiu seu primeiro agente de IA!
Todas as Star Coins do World 7 foram coletadas!

**Fontes:**
- OpenAI API — https://platform.openai.com/docs
- Semantic Kernel — https://learn.microsoft.com/en-us/semantic-kernel/
- RAG Pattern — https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview
- Python Documentation — https://docs.python.org/3/

---

## References

- LangChain Python — https://python.langchain.com
- Semantic Kernel — https://learn.microsoft.com/en-us/semantic-kernel/
