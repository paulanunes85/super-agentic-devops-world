---
title: "Fase 2-BOSS -- Boss Battle: Exercicios Praticos Level 2"
description: "Exercicios praticos do World 2 (Cavernas Subterraneas): crie ambientes, construa APIs, configure seguranca, DNS, metodologias agile, IaC e observabilidade"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - exercicios
  - pratica
  - boss-battle
  - ambientes
  - api
  - seguranca
  - devops
  - observabilidade
  - world-2
  - mario
---

# Fase 2-BOSS -- Boss Battle: Exercicios Praticos Level 2

---

## Change Log

| Versao | Data       | Autor                                  | Descricao          |
|--------|------------|----------------------------------------|--------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Criacao inicial    |

---

## Sumario

- [Prologo: Boom Boom Aparece](#prologo-boom-boom-aparece)
- [1. Regras da Boss Battle](#1-regras-da-boss-battle)
- [2. Quest 2-1: Mundos Paralelos (Ambientes)](#2-quest-2-1-mundos-paralelos-ambientes)
  - [2.1 Exercicio: Criar Branches de Ambiente](#21-exercicio-criar-branches-de-ambiente)
  - [2.2 Exercicio: Configurar Variaveis por Ambiente](#22-exercicio-configurar-variaveis-por-ambiente)
  - [2.3 Desafio BONUS: Ambiente Efemero](#23-desafio-bonus-ambiente-efemero)
- [3. Quest 2-2: O Mensageiro (APIs)](#3-quest-2-2-o-mensageiro-apis)
  - [3.1 Exercicio: Construir uma API REST Simples](#31-exercicio-construir-uma-api-rest-simples)
  - [3.2 Exercicio: Testar com curl](#32-exercicio-testar-com-curl)
  - [3.3 Desafio BONUS: Documentar com Swagger](#33-desafio-bonus-documentar-com-swagger)
- [4. Quest 2-3: Feiticos de Protecao (Seguranca)](#4-quest-2-3-feiticos-de-protecao-seguranca)
  - [4.1 Exercicio: Configurar .env e .gitignore](#41-exercicio-configurar-env-e-gitignore)
  - [4.2 Exercicio: Configurar GitHub Secrets](#42-exercicio-configurar-github-secrets)
  - [4.3 Desafio BONUS: Criar um Key Vault no Azure](#43-desafio-bonus-criar-um-key-vault-no-azure)
- [5. Quest 2-4: O Mapa do Mundo (DNS)](#5-quest-2-4-o-mapa-do-mundo-dns)
  - [5.1 Exercicio: Investigar DNS com Ferramentas](#51-exercicio-investigar-dns-com-ferramentas)
  - [5.2 Exercicio: Mapear a Anatomia de URLs](#52-exercicio-mapear-a-anatomia-de-urls)
- [6. Quest 2-5: Regras do Torneio (Metodologias)](#6-quest-2-5-regras-do-torneio-metodologias)
  - [6.1 Exercicio: Criar um Quadro Kanban no GitHub Projects](#61-exercicio-criar-um-quadro-kanban-no-github-projects)
  - [6.2 Exercicio: Escrever User Stories](#62-exercicio-escrever-user-stories)
  - [6.3 Exercicio: Simular um Sprint Planning](#63-exercicio-simular-um-sprint-planning)
- [7. Quest 2-6: A Alianca DevOps (IaC)](#7-quest-2-6-a-alianca-devops-iac)
  - [7.1 Exercicio: Escrever um Blueprint Bicep](#71-exercicio-escrever-um-blueprint-bicep)
  - [7.2 Exercicio: Pipeline CI Basico](#72-exercicio-pipeline-ci-basico)
  - [7.3 Desafio BONUS: Terraform Init-Plan-Apply](#73-desafio-bonus-terraform-init-plan-apply)
- [8. Quest 2-7: Os Sentidos (Observabilidade)](#8-quest-2-7-os-sentidos-observabilidade)
  - [8.1 Exercicio: Adicionar Logging Estruturado](#81-exercicio-adicionar-logging-estruturado)
  - [8.2 Exercicio: Criar Health Check Endpoint](#82-exercicio-criar-health-check-endpoint)
  - [8.3 Desafio BONUS: Dashboard Simples](#83-desafio-bonus-dashboard-simples)
- [9. Boss Battle Final: O Desafio Integrado](#9-boss-battle-final-o-desafio-integrado)
- [10. Tabela de Pontuacao e Auto-Avaliacao](#10-tabela-de-pontuacao-e-auto-avaliacao)
- [Referencias](#referencias)

---

## Prologo: Boom Boom Aparece

Sofia havia atravessado todas as fases das Cavernas Subterraneas. Aprendeu sobre ambientes, APIs, seguranca, DNS, metodologias, DevOps e observabilidade. Sabia a teoria. Agora era hora de provar que sabia a pratica.

No final do ultimo tunel, uma sala enorme se abriu. No centro, um inimigo familiar girava os bracos ameacadoramente: **Boom Boom** -- o boss das Cavernas Subterraneas.

*"Teoria e bonita,"* rosnou Boom Boom. *"Mas aqui nas Cavernas, so passa quem sabe FAZER. Tenho 7 desafios para voce, um para cada fase que voce atravessou. Complete todos, e o World 3 se abre."*

Toadette ajustou o apito. *"Voce pode fazer os exercicios na ordem que quiser, Sofia. Cada quest tem niveis: Basico (obrigatorio), Intermediario (recomendado), e BONUS (para herois). Boa sorte!"*

---

## 1. Regras da Boss Battle

**Requisitos:**
- Computador com VS Code instalado
- Git configurado
- Node.js 18+ instalado
- Conta no GitHub (gratuita)
- Conta no Azure (opcional -- para exercicios BONUS)

**Sistema de Pontuacao:**

| Nivel | Pontos | Descricao |
|-------|--------|-----------|
| Basico | 1 ponto | O minimo para passar |
| Intermediario | 2 pontos | Demonstra compreensao |
| BONUS | 3 pontos | Vai alem do esperado |

**Para derrotar Boom Boom:** Minimo de **10 pontos** (de 7 quests basicas = 7 pontos + 1 intermediaria)

**Para derrotar Boom Boom com estrela:** **21+ pontos** (todos os bonus!)

---

## 2. Quest 2-1: Mundos Paralelos (Ambientes)

### 2.1 Exercicio: Criar Branches de Ambiente

**Nivel: Basico (1 ponto)**

Crie um repositorio no GitHub com 3 branches representando ambientes:

```bash
# 1. Criar repositorio local
mkdir todoapp-world2 && cd todoapp-world2
git init

# 2. Criar arquivo inicial
echo '# TodoApp - World 2 Boss Battle' > README.md
git add README.md
git commit -m "feat: iniciar projeto TodoApp"

# 3. Criar branches de ambiente
git branch develop     # Ambiente Dev
git branch staging     # Ambiente Staging
# main = Producao

# 4. Enviar para GitHub
# (crie o repo no GitHub primeiro)
git remote add origin https://github.com/SEU_USUARIO/todoapp-world2.git
git push -u origin main
git push origin develop
git push origin staging
```

**Prova de conclusao:** Screenshot mostrando as 3 branches no GitHub.

### 2.2 Exercicio: Configurar Variaveis por Ambiente

**Nivel: Intermediario (2 pontos)**

Crie arquivos de configuracao diferentes para cada ambiente:

```bash
# Criar arquivos de configuracao
touch .env.example .env.development .env.staging
```

```bash
# .env.example (vai no repositorio)
DATABASE_URL=
API_KEY=
LOG_LEVEL=
NODE_ENV=
```

```bash
# .env.development (NAO vai no repositorio)
DATABASE_URL=postgresql://localhost:5432/todoapp_dev
API_KEY=dev-fake-key-12345
LOG_LEVEL=debug
NODE_ENV=development
```

```bash
# .env.staging (NAO vai no repositorio)
DATABASE_URL=postgresql://staging-db:5432/todoapp_staging
API_KEY=staging-key-abc-456
LOG_LEVEL=info
NODE_ENV=staging
```

```bash
# .gitignore
.env
.env.development
.env.staging
.env.production
node_modules/
```

**Prova de conclusao:** Mostre que `.env.example` esta no repo e os `.env.*` nao estao.

### 2.3 Desafio BONUS: Ambiente Efemero

**Nivel: BONUS (3 pontos)**

Configure um **deploy preview** automatico usando Vercel ou Netlify para cada Pull Request. Quando voce abrir um PR, um ambiente temporario deve ser criado automaticamente.

---

## 3. Quest 2-2: O Mensageiro (APIs)

### 3.1 Exercicio: Construir uma API REST Simples

**Nivel: Basico (1 ponto)**

Crie uma API com 5 endpoints (CRUD de tarefas):

```bash
# Setup
npm init -y
npm install express
```

Crie o arquivo `server.js` com:
- `GET /tarefas` -- Listar todas
- `GET /tarefas/:id` -- Buscar por ID
- `POST /tarefas` -- Criar nova
- `PUT /tarefas/:id` -- Atualizar
- `DELETE /tarefas/:id` -- Remover

Cada endpoint deve retornar o status code correto:
- 200 para sucesso
- 201 para criacao
- 204 para delete
- 404 para nao encontrado
- 400 para requisicao invalida

**Prova de conclusao:** API rodando em `localhost:3000` respondendo aos 5 endpoints.

### 3.2 Exercicio: Testar com curl

**Nivel: Intermediario (2 pontos)**

Crie um arquivo `test-api.sh` que testa TODOS os endpoints com curl:

```bash
#!/bin/bash
# test-api.sh -- Testa todos os endpoints da API

echo "=== Testando API TodoApp ==="

echo "\n--- GET /tarefas (listar) ---"
curl -s http://localhost:3000/tarefas | jq .

echo "\n--- POST /tarefas (criar) ---"
curl -s -X POST http://localhost:3000/tarefas \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Tarefa de teste", "concluida": false}' | jq .

echo "\n--- GET /tarefas/1 (buscar por ID) ---"
curl -s http://localhost:3000/tarefas/1 | jq .

echo "\n--- PUT /tarefas/1 (atualizar) ---"
curl -s -X PUT http://localhost:3000/tarefas/1 \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Tarefa atualizada", "concluida": true}' | jq .

echo "\n--- DELETE /tarefas/1 (remover) ---"
curl -s -X DELETE http://localhost:3000/tarefas/1 -w "\nStatus: %{http_code}\n"

echo "\n--- GET /tarefas/999 (nao encontrado) ---"
curl -s http://localhost:3000/tarefas/999 -w "\nStatus: %{http_code}\n"

echo "\n=== Testes concluidos ==="
```

**Prova de conclusao:** Output do script mostrando todos os testes passando.

### 3.3 Desafio BONUS: Documentar com Swagger

**Nivel: BONUS (3 pontos)**

Adicione documentacao Swagger/OpenAPI a sua API usando `swagger-ui-express` e `swagger-jsdoc`. Ao acessar `http://localhost:3000/api-docs`, a documentacao interativa deve aparecer.

---

## 4. Quest 2-3: Feiticos de Protecao (Seguranca)

### 4.1 Exercicio: Configurar .env e .gitignore

**Nivel: Basico (1 ponto)**

1. Instale `dotenv`: `npm install dotenv`
2. Crie um arquivo `.env` com pelo menos 3 variaveis
3. Configure `.gitignore` para ignorar `.env`
4. Crie `.env.example` com as variaveis (sem valores)
5. No codigo, use `process.env.VARIAVEL` em vez de valores hardcoded

**Verificacao:**
```bash
# Isso deve mostrar .env.example mas NAO .env
git status
```

**Prova de conclusao:** `.env.example` no repo, `.env` ignorado pelo Git.

### 4.2 Exercicio: Configurar GitHub Secrets

**Nivel: Intermediario (2 pontos)**

1. No seu repositorio GitHub, va em Settings > Secrets > Actions
2. Crie 3 secrets:
   - `DATABASE_URL`
   - `API_KEY`
   - `JWT_SECRET`
3. Crie um workflow simples que usa esses secrets:

```yaml
# .github/workflows/test-secrets.yml
name: Test Secrets
on: workflow_dispatch

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Verificar secrets existem
        env:
          DB_URL: ${{ secrets.DATABASE_URL }}
          KEY: ${{ secrets.API_KEY }}
          JWT: ${{ secrets.JWT_SECRET }}
        run: |
          if [ -z "$DB_URL" ]; then echo "DATABASE_URL nao configurado!"; exit 1; fi
          if [ -z "$KEY" ]; then echo "API_KEY nao configurado!"; exit 1; fi
          if [ -z "$JWT" ]; then echo "JWT_SECRET nao configurado!"; exit 1; fi
          echo "Todos os secrets configurados corretamente!"
          echo "Nota: os valores NUNCA aparecem nos logs (***)"
```

**Prova de conclusao:** Workflow executado com sucesso mostrando "Todos os secrets configurados".

### 4.3 Desafio BONUS: Criar um Key Vault no Azure

**Nivel: BONUS (3 pontos)**

Se voce tem conta Azure:

```bash
# 1. Criar Resource Group
az group create --name rg-todoapp-boss --location brazilsouth

# 2. Criar Key Vault
az keyvault create --name kv-todoapp-boss --resource-group rg-todoapp-boss

# 3. Guardar um secret
az keyvault secret set --vault-name kv-todoapp-boss \
  --name "DatabasePassword" --value "SuaSenhaAqui"

# 4. Buscar o secret
az keyvault secret show --vault-name kv-todoapp-boss \
  --name "DatabasePassword" --query value -o tsv
```

**Prova de conclusao:** Screenshot do Key Vault no portal Azure com o secret criado.

---

## 5. Quest 2-4: O Mapa do Mundo (DNS)

### 5.1 Exercicio: Investigar DNS com Ferramentas

**Nivel: Basico (1 ponto)**

Use ferramentas de DNS para investigar 3 dominios:

```bash
# Investigar github.com
nslookup github.com
dig github.com
dig github.com MX
dig github.com NS

# Investigar google.com
nslookup google.com
dig google.com

# Investigar microsoft.com
nslookup microsoft.com
dig microsoft.com TXT
```

**Responda:**
1. Qual o IP de `github.com`?
2. Quais sao os Name Servers de `github.com`?
3. Qual o servico de email (MX) de `github.com`?
4. Quanto tempo (TTL) o registro A fica no cache?

**Prova de conclusao:** Respostas as 4 perguntas com evidencia dos comandos.

### 5.2 Exercicio: Mapear a Anatomia de URLs

**Nivel: Intermediario (2 pontos)**

Desmontar 5 URLs identificando cada componente:

```
1. https://api.github.com/repos/microsoft/vscode/issues?state=open
   Protocolo: _______
   Subdominio: _______
   Dominio: _______
   TLD: _______
   Caminho: _______
   Query string: _______

2. https://portal.azure.com/#blade/Microsoft_Azure_Monitoring

3. https://www.google.com.br/search?q=devops+mario

4. https://docs.github.com/en/actions/learn-github-actions

5. postgresql://admin:senha@db.todoapp.com:5432/todoapp_prod
   (URI de conexao -- identifique usuario, senha, host, porta, banco)
```

---

## 6. Quest 2-5: Regras do Torneio (Metodologias)

### 6.1 Exercicio: Criar um Quadro Kanban no GitHub Projects

**Nivel: Basico (1 ponto)**

1. No GitHub, crie um Project com view "Board"
2. Crie as colunas: `Backlog`, `To Do`, `In Progress`, `In Review`, `Done`
3. Crie pelo menos 5 Issues (quests) para o TodoApp:
   - Uma feature nova
   - Um bug fix
   - Uma melhoria de performance
   - Uma tarefa de documentacao
   - Uma tarefa tecnica (tech debt)
4. Distribua as Issues nas colunas

**Prova de conclusao:** Link para o GitHub Project com pelo menos 5 Issues.

### 6.2 Exercicio: Escrever User Stories

**Nivel: Intermediario (2 pontos)**

Escreva 5 User Stories completas com criterios de aceitacao para o TodoApp:

```markdown
## User Story #1
**Como** usuario do TodoApp,
**eu quero** filtrar tarefas por prioridade (alta, media, baixa),
**para que** eu possa focar nas tarefas mais importantes primeiro.

### Criterios de Aceitacao
- [ ] Botoes de filtro aparecem acima da lista
- [ ] Ao clicar em "Alta", so tarefas de alta prioridade aparecem
- [ ] Filtro "Todas" mostra todas as tarefas
- [ ] O filtro ativo e destacado visualmente
- [ ] A contagem de tarefas atualiza ao filtrar

### Story Points: 5
### Labels: feature, frontend
```

Repita para mais 4 User Stories.

### 6.3 Exercicio: Simular um Sprint Planning

**Nivel: BONUS (3 pontos)**

1. Defina a velocidade do time: 20 Story Points por Sprint
2. Priorize as User Stories do exercicio anterior
3. Selecione quais cabem no Sprint 1
4. Documente o Sprint Backlog
5. Escreva o "Sprint Goal" (objetivo do Sprint em uma frase)

---

## 7. Quest 2-6: A Alianca DevOps (IaC)

### 7.1 Exercicio: Escrever um Blueprint Bicep

**Nivel: Basico (1 ponto)**

Crie um arquivo `main.bicep` que define a infraestrutura do TodoApp:

```bicep
// main.bicep
param environment string = 'dev'
param location string = 'brazilsouth'

resource appServicePlan 'Microsoft.Web/serverfarms@2023-01-01' = {
  name: 'plan-todoapp-${environment}'
  location: location
  sku: {
    name: 'F1'  // Free tier!
  }
  kind: 'linux'
  properties: {
    reserved: true
  }
}

resource webApp 'Microsoft.Web/sites@2023-01-01' = {
  name: 'app-todoapp-${environment}-${uniqueString(resourceGroup().id)}'
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      linuxFxVersion: 'NODE|20-lts'
    }
  }
}

output appUrl string = 'https://${webApp.properties.defaultHostName}'
```

**Prova de conclusao:** Arquivo `main.bicep` no repositorio. (Nao precisa fazer deploy.)

### 7.2 Exercicio: Pipeline CI Basico

**Nivel: Intermediario (2 pontos)**

Crie um workflow GitHub Actions que roda a cada push:

```yaml
# .github/workflows/ci.yml
name: CI Pipeline
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Instalar dependencias
        run: npm ci

      - name: Verificar lint (se configurado)
        run: npm run lint --if-present

      - name: Rodar testes (se configurados)
        run: npm test --if-present

      - name: Build
        run: npm run build --if-present

      - name: Verificacao concluida
        run: echo "CI Pipeline concluido com sucesso!"
```

**Prova de conclusao:** Badge verde do CI no GitHub.

### 7.3 Desafio BONUS: Terraform Init-Plan-Apply

**Nivel: BONUS (3 pontos)**

Se voce tem Terraform e Azure CLI:

1. Instale Terraform
2. Escreva um `main.tf` basico
3. Execute `terraform init`
4. Execute `terraform plan` (mostre o output)
5. Execute `terraform apply` (se tiver conta Azure)
6. Execute `terraform destroy` (limpe os recursos)

---

## 8. Quest 2-7: Os Sentidos (Observabilidade)

### 8.1 Exercicio: Adicionar Logging Estruturado

**Nivel: Basico (1 ponto)**

Adicione logs estruturados a sua API do exercicio 2-2:

```bash
npm install winston
```

Requisitos:
- Todos os endpoints logam quando sao chamados (INFO)
- Erros sao logados com detalhes (ERROR)
- Logs em formato JSON
- Cada log inclui: timestamp, level, message, dados relevantes

**Prova de conclusao:** Output do log mostrando requisicoes sendo logadas em JSON.

### 8.2 Exercicio: Criar Health Check Endpoint

**Nivel: Intermediario (2 pontos)**

Adicione dois endpoints de health check:

```javascript
// GET /health -- Verificacao basica
// Retorna: { status: "healthy", uptime: 123.45, timestamp: "..." }

// GET /health/detailed -- Verificacao completa
// Retorna: { status: "healthy", checks: { api: "up", memory: "ok" } }
```

Requisitos:
- `/health` retorna 200 se o servidor esta rodando
- `/health/detailed` verifica memoria e retorna status
- Se memoria > 90%, status = "degraded" e retorna 503

**Prova de conclusao:** Ambos os endpoints respondendo corretamente.

### 8.3 Desafio BONUS: Dashboard Simples

**Nivel: BONUS (3 pontos)**

Crie uma pagina HTML simples (`/dashboard`) que mostra:
- Numero de requisicoes desde que o servidor iniciou
- Numero de erros
- Uptime do servidor
- Ultima requisicao recebida

Pode ser simples -- o objetivo e praticar a coleta e exibicao de metricas.

---

## 9. Boss Battle Final: O Desafio Integrado

**Nivel: MEGA BONUS (5 pontos)**

Combine TUDO que voce aprendeu em um unico projeto:

1. **Repositorio** com branches `main`, `staging`, `develop`
2. **API REST** com CRUD de tarefas (5 endpoints)
3. **Seguranca**: `.env` + `.gitignore` + `.env.example`
4. **CI Pipeline**: GitHub Actions rodando a cada push
5. **Kanban Board**: GitHub Project com Issues para o TodoApp
6. **Logs**: Winston com logs estruturados em JSON
7. **Health Check**: Endpoints `/health` e `/health/detailed`
8. **IaC**: Arquivo `main.bicep` com a infraestrutura

```
Estrutura final do projeto:
todoapp-world2/
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   ├── server.js
│   ├── routes/
│   │   ├── tarefas.js
│   │   └── health.js
│   └── middleware/
│       └── logger.js
├── infra/
│   └── main.bicep
├── test-api.sh
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

**Prova de conclusao:** Repositorio publico no GitHub com todos os itens acima.

---

## 10. Tabela de Pontuacao e Auto-Avaliacao

| Quest | Exercicio | Nivel | Pontos | Concluido? |
|-------|-----------|-------|--------|------------|
| 2-1 | Branches de ambiente | Basico | 1 | [ ] |
| 2-1 | Variaveis por ambiente | Intermediario | 2 | [ ] |
| 2-1 | Ambiente efemero | BONUS | 3 | [ ] |
| 2-2 | API REST simples | Basico | 1 | [ ] |
| 2-2 | Testar com curl | Intermediario | 2 | [ ] |
| 2-2 | Swagger docs | BONUS | 3 | [ ] |
| 2-3 | .env e .gitignore | Basico | 1 | [ ] |
| 2-3 | GitHub Secrets | Intermediario | 2 | [ ] |
| 2-3 | Azure Key Vault | BONUS | 3 | [ ] |
| 2-4 | Investigar DNS | Basico | 1 | [ ] |
| 2-4 | Anatomia de URLs | Intermediario | 2 | [ ] |
| 2-5 | Quadro Kanban | Basico | 1 | [ ] |
| 2-5 | User Stories | Intermediario | 2 | [ ] |
| 2-5 | Sprint Planning | BONUS | 3 | [ ] |
| 2-6 | Blueprint Bicep | Basico | 1 | [ ] |
| 2-6 | Pipeline CI | Intermediario | 2 | [ ] |
| 2-6 | Terraform | BONUS | 3 | [ ] |
| 2-7 | Logging estruturado | Basico | 1 | [ ] |
| 2-7 | Health Check | Intermediario | 2 | [ ] |
| 2-7 | Dashboard simples | BONUS | 3 | [ ] |
| FINAL | Desafio Integrado | MEGA BONUS | 5 | [ ] |

**Resultado:**

| Pontuacao | Classificacao | Analogia Mario |
|-----------|-------------|----------------|
| 0-6 | Continue tentando | Mario caiu no buraco. Tente de novo! |
| 7-9 | Quase la! | Mario chegou ao boss mas nao venceu. Uma vida a mais! |
| 10-14 | **Boom Boom derrotado!** | Parabens! World 3 desbloqueado! |
| 15-20 | Vitoria dominante | Boom Boom derrotado SEM tomar dano |
| 21-30 | Speed Run Master | Boom Boom derrotado em tempo recorde |
| 31-38 | **Lenda do Mushroom Kingdom** | Completou TODOS os desafios. Voce e uma lenda! |

---

## Referencias

1. GitHub Docs -- Creating a repository: https://docs.github.com/repositories/creating-and-managing-repositories
2. Express.js: https://expressjs.com/
3. dotenv: https://github.com/motdotla/dotenv
4. GitHub Actions: https://docs.github.com/actions
5. Azure Bicep: https://learn.microsoft.com/azure/azure-resource-manager/bicep/
6. Winston Logger: https://github.com/winstonjs/winston
7. curl Manual: https://curl.se/docs/manual.html

---

*"Boom Boom foi derrotado. As Cavernas Subterraneas foram conquistadas. Voce agora entende a infraestrutura invisivel que sustenta todo o Mushroom Kingdom -- ambientes, APIs, seguranca, DNS, metodologias, DevOps e observabilidade. O World 3 -- Mundo Aereo -- espera por voce!"*

```
+================================================+
|                                                |
|    WORLD 2 COMPLETE!                           |
|                                                |
|    Boom Boom: DERROTADO                        |
|    Cavernas Subterraneas: CONQUISTADAS         |
|                                                |
|    Proxima parada:                             |
|    WORLD 3 -- Mundo Aereo                      |
|    (Ferramentas e Linguagens)                  |
|                                                |
|    "It's-a me, Infrastructure!"                |
|                                                |
+================================================+
```

---

<div align="center">

⬅️ [Anterior: Fase 2-7: Observabilidade](2-7-observabilidade.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 3-1: Arvore de Habilidades](../world-3-sky/3-1-arvore_habilidades.md)

</div>
