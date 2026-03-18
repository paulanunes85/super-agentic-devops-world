---
title: "Fase 3-BOSS -- Boss Battle: Exercicios Praticos Level 3"
description: "Exercicios praticos do World 3 (Mundo Aereo): crie Dockerfile, escreva testes com Jest, configure package.json, domine o terminal, escolha linguagens e frameworks -- Boss Battle contra Kamek o Magikoopa"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agentic-devops
  - mario
  - world-3
  - exercicios
  - pratica
  - boss-battle
  - docker
  - jest
  - terminal
  - linguagens
---

# Fase 3-BOSS -- Boss Battle: Exercicios Praticos Level 3

---

## Change Log

| Versao | Data       | Autor                                  | Descricao          |
|--------|------------|----------------------------------------|--------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial    |

---

## Sumario

- [Prologo: Kamek o Magikoopa Aparece](#prologo-kamek-o-magikoopa-aparece)
- [1. Regras da Boss Battle](#1-regras-da-boss-battle)
- [2. Quest 3-1: A Fortaleza Docker (Dockerfile)](#2-quest-3-1-a-fortaleza-docker-dockerfile)
  - [2.1 Exercicio: Criar um Dockerfile Basico](#21-exercicio-criar-um-dockerfile-basico)
  - [2.2 Exercicio: Multi-Stage Build](#22-exercicio-multi-stage-build)
  - [2.3 Desafio BONUS: Docker Compose Completo](#23-desafio-bonus-docker-compose-completo)
- [3. Quest 3-2: O Campo de Treino (Testes com Jest)](#3-quest-3-2-o-campo-de-treino-testes-com-jest)
  - [3.1 Exercicio: Primeiros Testes Unitarios](#31-exercicio-primeiros-testes-unitarios)
  - [3.2 Exercicio: Testes com Mocks](#32-exercicio-testes-com-mocks)
  - [3.3 Desafio BONUS: Cobertura de 80%](#33-desafio-bonus-cobertura-de-80)
- [4. Quest 3-3: O Inventario (package.json)](#4-quest-3-3-o-inventario-packagejson)
  - [4.1 Exercicio: Criar package.json Completo](#41-exercicio-criar-packagejson-completo)
  - [4.2 Exercicio: Scripts Avancados](#42-exercicio-scripts-avancados)
  - [4.3 Desafio BONUS: Auditoria de Seguranca](#43-desafio-bonus-auditoria-de-seguranca)
- [5. Quest 3-4: Magia no Terminal](#5-quest-3-4-magia-no-terminal)
  - [5.1 Exercicio: Comandos Essenciais](#51-exercicio-comandos-essenciais)
  - [5.2 Exercicio: Pipes e Encadeamento](#52-exercicio-pipes-e-encadeamento)
  - [5.3 Desafio BONUS: Script de Automacao](#53-desafio-bonus-script-de-automacao)
- [6. Quest 3-5: Escolha de Classe (Linguagens)](#6-quest-3-5-escolha-de-classe-linguagens)
  - [6.1 Exercicio: Identificar Linguagens por Cenario](#61-exercicio-identificar-linguagens-por-cenario)
  - [6.2 Exercicio: Hello World em 3 Linguagens](#62-exercicio-hello-world-em-3-linguagens)
  - [6.3 Desafio BONUS: Comparar Performance](#63-desafio-bonus-comparar-performance)
- [7. Quest 3-6: A Armaria (Frameworks)](#7-quest-3-6-a-armaria-frameworks)
  - [7.1 Exercicio: Criar API com Express](#71-exercicio-criar-api-com-express)
  - [7.2 Exercicio: Frontend com React](#72-exercicio-frontend-com-react)
  - [7.3 Desafio BONUS: Full-Stack com Next.js](#73-desafio-bonus-full-stack-com-nextjs)
- [8. Quest 3-7: Regras da Guilda (Boas Praticas)](#8-quest-3-7-regras-da-guilda-boas-praticas)
  - [8.1 Exercicio: Criar Repositorio Profissional](#81-exercicio-criar-repositorio-profissional)
  - [8.2 Exercicio: CODEOWNERS e CONTRIBUTING](#82-exercicio-codeowners-e-contributing)
  - [8.3 Desafio BONUS: Release com SemVer](#83-desafio-bonus-release-com-semver)
- [9. Quest 3-8: Os Canos da Internet](#9-quest-3-8-os-canos-da-internet)
  - [9.1 Exercicio: Explorar com curl](#91-exercicio-explorar-com-curl)
  - [9.2 Exercicio: Status Codes na Pratica](#92-exercicio-status-codes-na-pratica)
  - [9.3 Desafio BONUS: Investigar DNS](#93-desafio-bonus-investigar-dns)
- [10. Boss Battle Final: O Desafio Integrado de Kamek](#10-boss-battle-final-o-desafio-integrado-de-kamek)
- [11. Tabela de Pontuacao e Auto-Avaliacao](#11-tabela-de-pontuacao-e-auto-avaliacao)
- [Referencias](#referencias)

---

## Prologo: Kamek o Magikoopa Aparece

Sofia havia atravessado todo o Mundo Aereo. Aprendeu boas praticas, entendeu como a internet funciona, conheceu as linguagens de programacao, escolheu suas armas entre frameworks e bibliotecas, e organizou seu inventario de pacotes. Sabia a teoria. Agora era hora de provar.

No topo da torre mais alta do Mundo Aereo, o ceu escureceu. Uma figura montada numa vassoura voadora apareceu entre as nuvens: **Kamek o Magikoopa** -- o feiticeiro pessoal do Bowser, mestre de ilusoes e armadilhas.

*"Entao voce e a tal Sofia que quer atravessar meu mundo?"* Kamek girou o cetro magico, criando simbolos de codigo no ar. *"Teoria e facil. Qualquer Goomba consegue ler um livro. Mas FAZER... ah, fazer e outra historia."*

Kamek estalou os dedos e 8 portais magicos se abriram ao redor da torre.

*"Oito desafios. Cada portal leva a um exercicio pratico. Complete todos e voce passa para o World 4. Falhe e... bem, voce volta para o inicio do World 3."*

Toadette surgiu voando num bloco "?" flutuante. *"Calma, Sofia. Voce pode fazer os exercicios na ordem que quiser. Cada quest tem niveis: Basico (obrigatorio), Intermediario (recomendado), e BONUS (para herois). Eu vou te acompanhar e avaliar. Boa sorte!"*

---

## 1. Regras da Boss Battle

**Requisitos:**

- Computador com VS Code instalado
- Git configurado
- Node.js 18+ instalado
- Docker Desktop instalado (para Quest 3-1)
- Python 3.11+ instalado (para Quest 3-5)
- Conta no GitHub (gratuita)

**Sistema de Pontuacao:**

| Nivel | Pontos | Descricao |
|-------|--------|-----------|
| Basico | 1 ponto | O minimo para derrotar o feitico de Kamek |
| Intermediario | 2 pontos | Mostra que voce realmente entendeu |
| BONUS | 3 pontos | Voce impressionou ate o Kamek |

**Para derrotar Kamek:** Minimo de **12 pontos** (de 8 quests basicas = 8 pontos + 2 intermediarias)

**Para derrotar Kamek com Super Star:** **32+ pontos** (todos os bonus! Lendario!)

**Para cada exercicio voce ganha Power-Ups virtuais:**

| Pontuacao | Power-Up Conquistado |
|-----------|---------------------|
| 8-11 pontos | Mushroom (passagem basica) |
| 12-17 pontos | Fire Flower (passagem com honra) |
| 18-25 pontos | Cape Feather (passagem voando) |
| 26-31 pontos | Super Star (quase invencivel!) |
| 32+ pontos | Star Road (acesso a area secreta!) |

---

## 2. Quest 3-1: A Fortaleza Docker (Dockerfile)

### 2.1 Exercicio: Criar um Dockerfile Basico

**Nivel: Basico (1 ponto)**

Crie um projeto Node.js simples e um Dockerfile para empacota-lo:

```bash
# 1. Criar projeto
mkdir boss-quest-docker && cd boss-quest-docker
npm init -y
npm install express
```

```javascript
// index.js
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Mario diz: A Fortaleza Docker esta de pe!',
    versao: '1.0.0',
    mundo: 'World 3 - Boss Battle'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Fortaleza rodando na porta ${PORT}`);
});
```

**Sua missao:** Crie um `Dockerfile` que:

1. Use a imagem `node:20-alpine` como base
2. Defina o diretorio de trabalho como `/app`
3. Copie `package.json` e `package-lock.json` primeiro (para cache)
4. Rode `npm ci --production`
5. Copie o resto do codigo
6. Exponha a porta 3000
7. Defina o comando de inicio: `node index.js`

**Prova de conclusao:** Rode `docker build -t boss-docker .` e `docker run -p 3000:3000 boss-docker`, depois acesse `http://localhost:3000` e veja a mensagem JSON.

### 2.2 Exercicio: Multi-Stage Build

**Nivel: Intermediario (2 pontos)**

Modifique o Dockerfile para usar **multi-stage build**:

```dockerfile
# Etapa 1: BUILD (instalar tudo, compilar)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Se tiver TypeScript: RUN npm run build

# Etapa 2: PRODUCAO (so o necessario)
FROM node:20-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --production && npm cache clean --force
COPY --from=builder /app/index.js ./
EXPOSE 3000
USER node
CMD ["node", "index.js"]
```

**Sua missao:**

1. Implemente o multi-stage build acima
2. Compare o tamanho da imagem antes e depois (`docker images`)
3. Adicione `USER node` para nao rodar como root
4. Adicione um `.dockerignore` com: `node_modules`, `.git`, `*.md`, `.env`

**Prova de conclusao:** Screenshot mostrando a diferenca de tamanho entre as imagens.

### 2.3 Desafio BONUS: Docker Compose Completo

**Nivel: BONUS (3 pontos)**

Crie um `docker-compose.yml` que suba:

1. Sua aplicacao Node.js (porta 3000)
2. PostgreSQL (porta 5432)
3. Um volume para persistir dados do banco
4. Variaveis de ambiente via `.env`

```yaml
# docker-compose.yml (complete voce!)
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:senha@db:5432/todoapp
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    # Complete: ports, environment, volumes...
```

**Prova de conclusao:** `docker-compose up` sobe tudo e `http://localhost:3000/health` retorna `"status": "UP"`.

---

## 3. Quest 3-2: O Campo de Treino (Testes com Jest)

### 3.1 Exercicio: Primeiros Testes Unitarios

**Nivel: Basico (1 ponto)**

Crie funcoes de um gerenciador de tarefas e teste-as:

```bash
mkdir boss-quest-jest && cd boss-quest-jest
npm init -y
npm install -D jest
```

```javascript
// tarefas.js
export function criarTarefa(titulo) {
  if (!titulo || titulo.trim() === '') {
    throw new Error('Titulo obrigatorio');
  }
  return {
    id: Date.now(),
    titulo: titulo.trim(),
    feita: false,
    criadaEm: new Date().toISOString()
  };
}

export function completarTarefa(tarefa) {
  if (!tarefa) throw new Error('Tarefa invalida');
  return { ...tarefa, feita: true, completadaEm: new Date().toISOString() };
}

export function filtrarPendentes(tarefas) {
  return tarefas.filter(t => !t.feita);
}

export function contarPorStatus(tarefas) {
  const feitas = tarefas.filter(t => t.feita).length;
  return { feitas, pendentes: tarefas.length - feitas, total: tarefas.length };
}
```

**Sua missao:** Crie `tarefas.test.js` com pelo menos 8 testes:

1. `criarTarefa` com titulo valido retorna objeto correto
2. `criarTarefa` sem titulo lanca erro
3. `criarTarefa` com string vazia lanca erro
4. `criarTarefa` com espacos lanca erro (trim)
5. `completarTarefa` marca como feita
6. `completarTarefa` com null lanca erro
7. `filtrarPendentes` retorna so pendentes
8. `contarPorStatus` retorna contagem correta

**Prova de conclusao:** `npm test` com TODOS os 8 testes passando (verde).

### 3.2 Exercicio: Testes com Mocks

**Nivel: Intermediario (2 pontos)**

Crie uma funcao que depende de uma API externa e teste com mocks:

```javascript
// api.js
export async function buscarTarefasDoServidor(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Erro ${response.status}: ${response.statusText}`);
  }
  const data = await response.json();
  return data.map(t => ({
    id: t.id,
    titulo: t.title || t.titulo,
    feita: t.completed || t.feita || false
  }));
}
```

**Sua missao:** Teste `buscarTarefasDoServidor` sem fazer requisicao HTTP real:

1. Mock a funcao `fetch` com `jest.fn()`
2. Teste cenario de sucesso (status 200, dados validos)
3. Teste cenario de erro (status 500)
4. Teste cenario de dados malformados

### 3.3 Desafio BONUS: Cobertura de 80%

**Nivel: BONUS (3 pontos)**

1. Configure Jest para gerar relatorio de cobertura
2. Adicione ao `package.json`: `"test:coverage": "jest --coverage"`
3. Escreva testes suficientes para atingir **80% de cobertura** em todas as metricas (statements, branches, functions, lines)
4. Adicione `coverage/` ao `.gitignore`

**Prova de conclusao:** Screenshot do relatorio de cobertura mostrando >= 80% em todas as metricas.

---

## 4. Quest 3-3: O Inventario (package.json)

### 4.1 Exercicio: Criar package.json Completo

**Nivel: Basico (1 ponto)**

Crie um projeto do zero com `package.json` profissional:

```bash
mkdir boss-quest-inventario && cd boss-quest-inventario
npm init -y
```

**Sua missao:** O `package.json` deve conter:

1. `name`, `version` (1.0.0), `description` preenchidos
2. `"type": "module"` (ESM)
3. Pelo menos 3 `dependencies` (express, zod, dotenv)
4. Pelo menos 3 `devDependencies` (jest, eslint, prettier)
5. `engines` com `"node": ">=18.0.0"`
6. `license`: "MIT"
7. `author` com seu nome

**Prova de conclusao:** `npm install` roda sem erros e `node -e "import('./package.json', { assert: { type: 'json' } })"` funciona.

### 4.2 Exercicio: Scripts Avancados

**Nivel: Intermediario (2 pontos)**

Adicione estes scripts ao package.json e faca todos funcionarem:

```json
{
  "scripts": {
    "start": "node src/index.js",
    "dev": "node --watch src/index.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src/",
    "format": "prettier --write src/",
    "validate": "npm run lint && npm test",
    "prepare": "echo 'Hooks configurados!'"
  }
}
```

**Sua missao:**

1. Crie o arquivo `src/index.js` com um servidor Express basico
2. Configure ESLint (`.eslintrc.json`) e Prettier (`.prettierrc`)
3. Rode `npm run validate` e faca passar sem erros

**Prova de conclusao:** `npm run validate` executa lint E testes com sucesso.

### 4.3 Desafio BONUS: Auditoria de Seguranca

**Nivel: BONUS (3 pontos)**

1. Rode `npm audit` e documente as vulnerabilidades encontradas (se houver)
2. Tente resolver com `npm audit fix`
3. Adicione um script `"audit": "npm audit --audit-level=moderate"`
4. Configure Dependabot criando `.github/dependabot.yml`

**Prova de conclusao:** Screenshot do `npm audit` e do arquivo `dependabot.yml` criado.

---

## 5. Quest 3-4: Magia no Terminal

### 5.1 Exercicio: Comandos Essenciais

**Nivel: Basico (1 ponto)**

Execute os seguintes comandos e capture a saida:

```bash
# 1. Navegacao e listagem
ls -la                       # Listar arquivos com detalhes
pwd                          # Mostrar diretorio atual
mkdir -p projeto/src/utils   # Criar estrutura de pastas

# 2. Manipulacao de arquivos
touch projeto/src/index.js   # Criar arquivo vazio
cp projeto/src/index.js projeto/src/backup.js  # Copiar
mv projeto/src/backup.js projeto/src/main.js   # Mover/renomear

# 3. Visualizacao
cat /etc/hosts               # Ver conteudo de arquivo
head -5 /etc/hosts           # Primeiras 5 linhas
wc -l /etc/hosts             # Contar linhas

# 4. Busca
find projeto/ -name "*.js"   # Encontrar arquivos .js
grep -r "function" projeto/  # Buscar texto em arquivos

# 5. Informacoes do sistema
whoami                       # Seu usuario
date                         # Data atual
df -h                        # Espaco em disco
```

**Sua missao:** Execute cada comando, entenda o que faz, e anote a saida dos 5 grupos.

**Prova de conclusao:** Arquivo `respostas-terminal.txt` com a saida de cada grupo de comandos.

### 5.2 Exercicio: Pipes e Encadeamento

**Nivel: Intermediario (2 pontos)**

Pipes (`|`) conectam a saida de um comando na entrada do proximo:

```bash
# Contar quantos arquivos .js existem no projeto
find . -name "*.js" | wc -l

# Listar pacotes instalados e filtrar por "express"
npm ls --all | grep express

# Ver historico do git e filtrar por autor
git log --oneline | head -10

# Ver processos e filtrar por node
ps aux | grep node

# Ordenar dependencias do package.json
cat package.json | python3 -c "import sys,json; d=json.load(sys.stdin); print('\n'.join(sorted(d.get('dependencies',{}).keys())))"
```

**Sua missao:**

1. Use pipe para contar quantos arquivos `.json` existem no seu projeto
2. Use pipe para encontrar a dependencia mais pesada no `node_modules`
3. Crie um comando que lista todas as `TODO` comments no codigo (`grep -r "TODO" | wc -l`)

### 5.3 Desafio BONUS: Script de Automacao

**Nivel: BONUS (3 pontos)**

Crie um script bash `setup.sh` que automatiza a configuracao de um novo projeto:

```bash
#!/bin/bash
# setup.sh - Configurador automatico de projeto

PROJECT_NAME=${1:-"meu-projeto"}

echo "Criando projeto: $PROJECT_NAME"

# 1. Criar estrutura de pastas
mkdir -p "$PROJECT_NAME"/{src,tests,docs}

# 2. Inicializar npm
cd "$PROJECT_NAME"
npm init -y

# 3. Instalar dependencias
npm install express dotenv zod
npm install -D jest eslint prettier typescript @types/node

# 4. Criar arquivos essenciais
# (Complete: .gitignore, README.md, .eslintrc.json, etc.)

# 5. Inicializar git
git init
git add .
git commit -m "feat: iniciar projeto $PROJECT_NAME"

echo "Projeto $PROJECT_NAME criado com sucesso!"
```

**Sua missao:** Complete o script para que crie um projeto pronto para uso, incluindo:

- `.gitignore` com node_modules, .env, dist, coverage
- `README.md` basico
- `.eslintrc.json` com configuracao minima
- `src/index.js` com servidor Express basico
- `tests/index.test.js` com um teste basico

**Prova de conclusao:** `bash setup.sh meu-app` cria um projeto completo e `cd meu-app && npm test` funciona.

---

## 6. Quest 3-5: Escolha de Classe (Linguagens)

### 6.1 Exercicio: Identificar Linguagens por Cenario

**Nivel: Basico (1 ponto)**

Para cada cenario, escolha a(s) linguagem(ns) mais adequada(s) e justifique:

| # | Cenario | Sua Escolha | Justificativa |
|---|---------|-------------|---------------|
| 1 | Construir uma interface web interativa | ? | ? |
| 2 | Criar um modelo de IA para reconhecer imagens | ? | ? |
| 3 | Desenvolver um jogo 3D indie | ? | ? |
| 4 | Criar uma CLI para gerenciar servidores | ? | ? |
| 5 | Construir um sistema bancario corporativo | ? | ? |
| 6 | Desenvolver um driver para hardware | ? | ? |
| 7 | Criar uma API REST moderna e rapida | ? | ? |
| 8 | Analisar dados de vendas num Jupyter Notebook | ? | ? |
| 9 | Construir um app mobile cross-platform | ? | ? |
| 10 | Otimizar um servidor que precisa de performance maxima | ? | ? |

**Prova de conclusao:** Tabela preenchida com escolhas corretas e justificativas convincentes.

### 6.2 Exercicio: Hello World em 3 Linguagens

**Nivel: Intermediario (2 pontos)**

Escreva e execute "Hello, Mushroom Kingdom!" em 3 linguagens diferentes:

**JavaScript:**
```javascript
// hello.js
console.log("Hello, Mushroom Kingdom!");
// Rode: node hello.js
```

**Python:**
```python
# hello.py
print("Hello, Mushroom Kingdom!")
# Rode: python3 hello.py
```

**Sua missao:** Implemente tambem em uma terceira linguagem de sua escolha (C#, Go, Rust, Java, etc.) e rode com sucesso.

**Prova de conclusao:** Screenshot mostrando os 3 programas rodando com saida correta.

### 6.3 Desafio BONUS: Comparar Performance

**Nivel: BONUS (3 pontos)**

Crie um programa identico em JavaScript e Python que:

1. Gere uma lista de 1 milhao de numeros aleatorios
2. Ordene a lista
3. Calcule a soma de todos os numeros
4. Meca o tempo de execucao

```javascript
// benchmark.js
const inicio = performance.now();

const numeros = Array.from({ length: 1_000_000 }, () => Math.random() * 1000);
numeros.sort((a, b) => a - b);
const soma = numeros.reduce((acc, n) => acc + n, 0);

const fim = performance.now();
console.log(`Soma: ${soma.toFixed(2)}`);
console.log(`Tempo: ${(fim - inicio).toFixed(2)}ms`);
```

```python
# benchmark.py
import time
import random

inicio = time.time()

numeros = [random.random() * 1000 for _ in range(1_000_000)]
numeros.sort()
soma = sum(numeros)

fim = time.time()
print(f"Soma: {soma:.2f}")
print(f"Tempo: {(fim - inicio) * 1000:.2f}ms")
```

**Prova de conclusao:** Tabela comparando os tempos de execucao e sua analise sobre as diferencas.

---

## 7. Quest 3-6: A Armaria (Frameworks)

### 7.1 Exercicio: Criar API com Express

**Nivel: Basico (1 ponto)**

Crie uma API REST completa de tarefas com Express:

```bash
mkdir boss-quest-api && cd boss-quest-api
npm init -y
npm install express
```

**Sua missao:** A API deve ter 5 endpoints:

| Metodo | Rota | O que faz |
|--------|------|----------|
| GET | `/api/tarefas` | Listar todas as tarefas |
| GET | `/api/tarefas/:id` | Buscar tarefa por ID |
| POST | `/api/tarefas` | Criar nova tarefa |
| PUT | `/api/tarefas/:id` | Atualizar tarefa |
| DELETE | `/api/tarefas/:id` | Deletar tarefa |

Requisitos:
- Dados podem ficar em memoria (array)
- POST deve retornar status 201
- GET por ID inexistente deve retornar 404
- DELETE deve retornar status 204

**Prova de conclusao:** Teste todos os 5 endpoints com `curl` e mostre as respostas.

### 7.2 Exercicio: Frontend com React

**Nivel: Intermediario (2 pontos)**

Crie um frontend React que consome sua API:

```bash
npx create-react-app boss-quest-frontend
# ou
npm create vite@latest boss-quest-frontend -- --template react
```

**Sua missao:**

1. Componente `ListaTarefas` que mostra todas as tarefas
2. Componente `FormTarefa` com input e botao para criar
3. Botao de "completar" em cada tarefa
4. Botao de "deletar" em cada tarefa
5. Comunicacao com a API via `fetch`

**Prova de conclusao:** Screenshot do frontend funcionando com dados da API.

### 7.3 Desafio BONUS: Full-Stack com Next.js

**Nivel: BONUS (3 pontos)**

Crie a mesma aplicacao usando Next.js (API routes + frontend no mesmo projeto):

```bash
npx create-next-app@latest boss-quest-fullstack
```

**Sua missao:**

1. API route em `app/api/tarefas/route.ts` com GET e POST
2. Pagina em `app/page.tsx` com lista de tarefas
3. Server Components para dados iniciais
4. Client Components para interatividade

**Prova de conclusao:** Aplicacao rodando com `npm run dev`, mostrando lista e permitindo criar tarefas.

---

## 8. Quest 3-7: Regras da Guilda (Boas Praticas)

### 8.1 Exercicio: Criar Repositorio Profissional

**Nivel: Basico (1 ponto)**

Crie um repositorio GitHub com TODOS os arquivos essenciais:

**Sua missao:** O repositorio deve conter:

1. `README.md` com: titulo, descricao, instalacao, uso, tecnologias, licenca
2. `.gitignore` adequado para Node.js
3. `LICENSE` (MIT)
4. `package.json` com version `1.0.0`

**Prova de conclusao:** Link do repositorio no GitHub com todos os arquivos visiveis.

### 8.2 Exercicio: CODEOWNERS e CONTRIBUTING

**Nivel: Intermediario (2 pontos)**

Adicione ao repositorio:

1. `.github/CODEOWNERS` com regras para diferentes pastas
2. `CONTRIBUTING.md` com guia completo para contribuidores
3. `CODE_OF_CONDUCT.md` baseado no Contributor Covenant
4. Issue templates em `.github/ISSUE_TEMPLATE/`

**Prova de conclusao:** PR aberto no repositorio mostrando todos os arquivos criados.

### 8.3 Desafio BONUS: Release com SemVer

**Nivel: BONUS (3 pontos)**

1. Crie 3 commits significativos (feat, fix, docs)
2. Crie uma tag `v1.0.0` e faca um GitHub Release
3. Faca um fix e crie a tag `v1.0.1`
4. Adicione uma feature e crie a tag `v1.1.0`
5. Escreva `CHANGELOG.md` documentando as 3 versoes

```bash
# Criar tags e releases
git tag -a v1.0.0 -m "Primeiro lancamento"
git push origin v1.0.0

# No GitHub: Releases > Create Release > Escolher tag > Escrever notas
```

**Prova de conclusao:** 3 releases no GitHub com CHANGELOG atualizado.

---

## 9. Quest 3-8: Os Canos da Internet

### 9.1 Exercicio: Explorar com curl

**Nivel: Basico (1 ponto)**

Use `curl` para explorar APIs publicas:

```bash
# 1. Buscar dados de um usuario GitHub
curl https://api.github.com/users/octocat

# 2. Ver os headers de resposta
curl -I https://www.google.com

# 3. Fazer POST para criar recurso (httpbin eco)
curl -X POST https://httpbin.org/post \
  -H "Content-Type: application/json" \
  -d '{"nome": "Mario", "missao": "Salvar a Princesa"}'

# 4. Ver status code
curl -o /dev/null -s -w "%{http_code}" https://www.google.com

# 5. Testar endpoint inexistente
curl -s -w "\nStatus: %{http_code}\n" https://api.github.com/nao-existe
```

**Sua missao:** Execute cada comando, anote o resultado e explique:

1. Qual o Content-Type da resposta do GitHub?
2. Quais headers o Google retorna?
3. O httpbin retornou os dados que voce enviou?
4. Qual o status code de cada request?

### 9.2 Exercicio: Status Codes na Pratica

**Nivel: Intermediario (2 pontos)**

Crie um servidor Express que retorna diferentes status codes:

```javascript
// status-server.js
import express from 'express';
const app = express();

app.get('/200', (req, res) => res.status(200).json({ msg: "OK!" }));
app.get('/201', (req, res) => res.status(201).json({ msg: "Criado!" }));
app.get('/204', (req, res) => res.status(204).send());
app.get('/301', (req, res) => res.redirect(301, '/200'));
app.get('/400', (req, res) => res.status(400).json({ erro: "Bad Request" }));
app.get('/401', (req, res) => res.status(401).json({ erro: "Nao autorizado" }));
app.get('/403', (req, res) => res.status(403).json({ erro: "Proibido" }));
app.get('/404', (req, res) => res.status(404).json({ erro: "Nao encontrado" }));
app.get('/500', (req, res) => res.status(500).json({ erro: "Erro interno" }));

app.listen(3000);
```

**Sua missao:**

1. Rode o servidor
2. Teste cada endpoint com `curl -v`
3. Para cada status code, escreva: numero, nome, significado, analogia Mario

### 9.3 Desafio BONUS: Investigar DNS

**Nivel: BONUS (3 pontos)**

1. Use `nslookup` para descobrir o IP de 5 sites diferentes (google.com, github.com, microsoft.com, amazon.com, cloudflare.com)
2. Use `dig` (Mac/Linux) para ver a resolucao completa
3. Edite `/etc/hosts` para criar um dominio local que aponta para 127.0.0.1
4. Crie um servidor Express que responde nesse dominio local
5. Documente todo o processo

**Prova de conclusao:** Documento com IPs, saida do dig, e screenshot do dominio local funcionando.

---

## 10. Boss Battle Final: O Desafio Integrado de Kamek

**Nivel: TODOS OS NIVEIS (5 pontos bonus!)**

Kamek lanca seu feitico mais poderoso: o **Desafio Integrado**. Voce precisa criar um projeto que combina TUDO do World 3:

**Missao: Criar o TodoApp do Mushroom Kingdom**

1. **Boas Praticas (3-7):** README, .gitignore, LICENSE, CONTRIBUTING, CODEOWNERS
2. **Internet (3-8):** API REST com status codes corretos
3. **Linguagens (3-9):** TypeScript no backend
4. **Frameworks (3-10):** Express + React (ou Next.js)
5. **Pacotes (3-11):** package.json completo com scripts
6. **Docker (anterior):** Dockerfile funcional
7. **Testes (anterior):** Pelo menos 5 testes passando

**Entrega:**

```
boss-battle-final/
├── README.md                 # Documentacao completa
├── .gitignore                # Node + Docker + .env
├── LICENSE                   # MIT
├── CONTRIBUTING.md           # Guia para contribuidores
├── .github/
│   └── CODEOWNERS            # Ownership definido
├── package.json              # Completo com scripts
├── Dockerfile                # Multi-stage build
├── docker-compose.yml        # App + PostgreSQL
├── src/
│   ├── index.ts              # Servidor Express TypeScript
│   └── routes/
│       └── tarefas.ts        # CRUD completo
├── tests/
│   └── tarefas.test.ts       # 5+ testes
└── CHANGELOG.md              # Versao 1.0.0
```

**Criterios de avaliacao:**

| Criterio | Pontos |
|----------|--------|
| Estrutura de pastas organizada | 1 |
| README completo e profissional | 1 |
| API funcionando com 5 endpoints | 1 |
| Testes passando (5+ testes) | 1 |
| Dockerfile funcional | 1 |
| **Total** | **5** |

> **NOTA:** Este desafio e BONUS e vale 5 pontos extras! Se voce completar o desafio integrado, Kamek sera derrotado de forma espetacular.

---

## 11. Tabela de Pontuacao e Auto-Avaliacao

### Calculando Sua Pontuacao

| Quest | Basico (1pt) | Intermediario (2pt) | BONUS (3pt) | Seus Pontos |
|-------|-------------|--------------------:|------------:|------------:|
| 3-1: Docker | Dockerfile basico | Multi-stage | Docker Compose | ____ |
| 3-2: Jest | 8 testes unitarios | Testes com mocks | 80% cobertura | ____ |
| 3-3: package.json | package.json completo | Scripts avancados | Auditoria | ____ |
| 3-4: Terminal | Comandos essenciais | Pipes | Script automacao | ____ |
| 3-5: Linguagens | Identificar por cenario | Hello World x3 | Performance | ____ |
| 3-6: Frameworks | API Express | Frontend React | Next.js full-stack | ____ |
| 3-7: Boas Praticas | Repo profissional | CODEOWNERS etc. | Releases SemVer | ____ |
| 3-8: Internet | curl explorar | Status codes server | DNS investigar | ____ |
| **Boss Final** | -- | -- | Desafio Integrado (5pt) | ____ |
| **TOTAL** | | | | **____ / 53** |

### Resultados

| Pontuacao | Resultado | Power-Up | Frase do Kamek |
|-----------|----------|----------|----------------|
| 0-7 | Kamek venceu | Nenhum | *"Volta para o inicio, novata!"* |
| 8-11 | Vitoria apertada | Mushroom | *"Hmm... sorte de iniciante."* |
| 12-17 | Vitoria solida | Fire Flower | *"Nada mal para uma aprendiz..."* |
| 18-25 | Vitoria impressionante | Cape Feather | *"Voce... voce e mais forte do que pensei!"* |
| 26-31 | Vitoria dominante | Super Star | *"Impossivel! Como uma novata pode...?!"* |
| 32-40 | Vitoria lendaria | Star Road | *"Bowser precisa saber sobre voce..."* |
| 41-53 | Vitoria ABSOLUTA | Star Road + 1-UP | *"Eu... eu me rendo. Voce e a verdadeira heroina."* |

### Reflexao Final

Apos completar os exercicios, responda:

1. **Qual quest foi mais facil?** Por que?
2. **Qual quest foi mais dificil?** O que faltou?
3. **Qual conceito voce mais gostou?** Quer se aprofundar?
4. **O que voce faria diferente?** Se comecasse de novo?
5. **Proximo passo:** Qual skill quer desenvolver primeiro?

---

## Referencias

- [Docker -- Documentacao Oficial](https://docs.docker.com/)
- [Docker -- Best Practices para Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- [Jest -- Documentacao Oficial](https://jestjs.io/)
- [npm -- Documentacao de package.json](https://docs.npmjs.com/cli/configuring-npm/package-json)
- [Express.js -- Guia de Inicio](https://expressjs.com/pt-br/starter/hello-world.html)
- [React -- Tutorial Oficial](https://react.dev/learn)
- [Next.js -- Tutorial](https://nextjs.org/learn)
- [curl -- Tutorial](https://curl.se/docs/tutorial.html)
- [GitHub -- Criando Repositorios](https://docs.github.com/pt/repositories/creating-and-managing-repositories)
- [GitHub -- Releases](https://docs.github.com/pt/repositories/releasing-projects-on-github)
- [Contributor Covenant](https://www.contributor-covenant.org/)
- [Conventional Commits](https://www.conventionalcommits.org/pt-br/)

---

*Fim da Boss Battle do World 3! Se Sofia derrotou Kamek, as portas do World 4 se abrem -- o mundo da Orquestracao e dos Agents. A jornada continua!*
