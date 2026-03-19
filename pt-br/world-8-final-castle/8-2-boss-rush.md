---
title: "Fase 8-2 -- Boss Rush: Revisao de Todos os Mundos"
description: "Revisao completa com 8 cenarios desafiadores baseados em situacoes reais, cada um combinando conhecimentos de multiplos Worlds. Boss Rush mode -- enfrente todos os bosses com todos os seus power-ups."
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - revisao
  - boss-rush
  - cenarios
  - exercicios
  - world-8
  - mario
---

# Fase 8-2 -- Boss Rush: Revisao de Todos os Mundos

---

## Change Log

| Versao | Data       | Autor        | Descricao                          |
|--------|------------|--------------|------------------------------------|
| 1.0.0  | 2026-03-18 | Paula Silva  | Criacao inicial com analogias Mario |

---

## Sumario

- [Prologo: A Arena do Boss Rush](#prologo-a-arena-do-boss-rush)
- [Como Funciona o Boss Rush](#como-funciona-o-boss-rush)
- [Boss 1: O Goomba Gigante (World 1 -- Fundamentos)](#boss-1-o-goomba-gigante-world-1--fundamentos)
  - [Cenario](#cenario)
  - [Sua Missao](#sua-missao)
  - [Dicas do Toad](#dicas-do-toad)
  - [Solucao Guiada](#solucao-guiada)
  - [Power-Ups Necessarios](#power-ups-necessarios)
- [Boss 2: O Blooper das Profundezas (World 2 -- Infraestrutura)](#boss-2-o-blooper-das-profundezas-world-2--infraestrutura)
  - [Cenario](#cenario-1)
  - [Sua Missao](#sua-missao-1)
  - [Dicas do Toad](#dicas-do-toad-1)
  - [Solucao Guiada](#solucao-guiada-1)
  - [Power-Ups Necessarios](#power-ups-necessarios-1)
- [Boss 3: O Lakitu Malvado (World 3 -- Ferramentas)](#boss-3-o-lakitu-malvado-world-3--ferramentas)
  - [Cenario](#cenario-2)
  - [Sua Missao](#sua-missao-2)
  - [Dicas do Toad](#dicas-do-toad-2)
  - [Solucao Guiada](#solucao-guiada-2)
  - [Power-Ups Necessarios](#power-ups-necessarios-2)
- [Boss 4: O Cheep-Cheep Venenoso (World 4 -- Arquitetura)](#boss-4-o-cheep-cheep-venenoso-world-4--arquitetura)
  - [Cenario](#cenario-3)
  - [Sua Missao](#sua-missao-3)
  - [Dicas do Toad](#dicas-do-toad-3)
  - [Solucao Guiada](#solucao-guiada-3)
  - [Power-Ups Necessarios](#power-ups-necessarios-3)
- [Boss 5: O Bowser Jr (World 5 -- IA e Agentes)](#boss-5-o-bowser-jr-world-5--ia-e-agentes)
  - [Cenario](#cenario-4)
  - [Sua Missao](#sua-missao-4)
  - [Dicas do Toad](#dicas-do-toad-4)
  - [Solucao Guiada](#solucao-guiada-4)
  - [Power-Ups Necessarios](#power-ups-necessarios-4)
- [Boss 6: O Kamek Ilusionista (World 6 -- Copilot Ecosystem)](#boss-6-o-kamek-ilusionista-world-6--copilot-ecosystem)
  - [Cenario](#cenario-5)
  - [Sua Missao](#sua-missao-5)
  - [Dicas do Toad](#dicas-do-toad-5)
  - [Solucao Guiada](#solucao-guiada-5)
  - [Power-Ups Necessarios](#power-ups-necessarios-5)
- [Boss 7: O Magikoopa Supremo (World 7 -- Frameworks IA)](#boss-7-o-magikoopa-supremo-world-7--frameworks-ia)
  - [Cenario](#cenario-6)
  - [Sua Missao](#sua-missao-6)
  - [Dicas do Toad](#dicas-do-toad-6)
  - [Solucao Guiada](#solucao-guiada-6)
  - [Power-Ups Necessarios](#power-ups-necessarios-6)
- [Boss FINAL: O Bowser Definitivo (Todos os Worlds)](#boss-final-o-bowser-definitivo-todos-os-worlds)
  - [Cenario](#cenario-7)
  - [Sua Missao](#sua-missao-7)
  - [Dicas do Toad](#dicas-do-toad-7)
  - [Solucao Guiada](#solucao-guiada-7)
  - [Power-Ups Necessarios](#power-ups-necessarios-7)
- [Placar Final: Tabela de Resultados](#placar-final-tabela-de-resultados)
- [Tabela de Resumo: Conceitos por Boss](#tabela-de-resumo-conceitos-por-boss)
- [Referencias](#referencias)

---

## Prologo: A Arena do Boss Rush

Sofia entrou na sala mais temida do Castelo Final: a **Arena do Boss Rush**. As paredes eram decoradas com trofeeis dos bosses de cada World -- o Goomba Gigante, o Blooper, o Lakitu, o Cheep-Cheep, o Bowser Jr, o Kamek, o Magikoopa, e la no fundo, na penumbra, a sombra enorme do proprio **Bowser**.

*"Parabens por chegar ate aqui,"* disse a voz. *"Mas antes de reivindicar a vitoria final, voce precisa provar que domina TUDO que aprendeu. Nesta arena, voce enfrentara 8 cenarios -- um para cada World. Cada cenario exige que voce combine conhecimentos de multiplos mundos. Nao basta saber pular -- voce precisa saber pular, atirar, voar e nadar ao mesmo tempo."*

Sofia ajustou seus power-ups. Era hora do Boss Rush.

---

## Como Funciona o Boss Rush

Cada boss segue esta estrutura:

```
+--------------------------------------------------+
|  ESTRUTURA DE CADA BOSS                          |
|                                                  |
|  1. CENARIO: Situacao real que voce enfrenta     |
|  2. SUA MISSAO: O que voce precisa fazer         |
|  3. DICAS DO TOAD: Pistas para a solucao         |
|  4. SOLUCAO GUIADA: Passo a passo detalhado      |
|  5. POWER-UPS NECESSARIOS: Worlds envolvidos     |
|                                                  |
|  DIFICULDADE CRESCENTE:                          |
|  Boss 1: [==--------] Facil                      |
|  Boss 2: [===-------] Facil+                     |
|  Boss 3: [=====-----] Medio                      |
|  Boss 4: [======----] Medio+                     |
|  Boss 5: [=======---] Dificil                    |
|  Boss 6: [========--] Dificil+                   |
|  Boss 7: [==========-] Expert                    |
|  Boss F: [==========] FINAL                      |
+--------------------------------------------------+
```


**Regra**: Tente resolver cada cenario ANTES de olhar a solucao guiada. O aprendizado real vem da tentativa.

---

## Boss 1: O Goomba Gigante (World 1 -- Fundamentos)

**Dificuldade**: [==--------] Facil
**World Principal**: 1 (Planicie Verde)
**Worlds Combinados**: 1 + 3

### Cenario

Voce acabou de ser contratado como desenvolvedora junior na empresa MushKingdom Tech. No primeiro dia, seu tech lead Pedro diz:

*"Bem-vinda! Temos um projeto chamado `mushroom-store`. Preciso que voce: clone o repositorio, crie uma branch para sua feature, faca uma alteracao simples (adicionar seu nome ao README), commite com uma mensagem padrao, e abra um Pull Request. O repositorio esta no GitHub da empresa."*

### Sua Missao

1. Clonar o repositorio `mushroom-store` do GitHub
2. Criar uma branch chamada `feature/add-sofia-to-team`
3. Adicionar seu nome a lista de contribuidores no README.md
4. Fazer commit seguindo o padrao Conventional Commits
5. Fazer push da branch
6. Abrir um Pull Request no GitHub
7. Garantir que o CI (GitHub Actions) passe

### Dicas do Toad

- Lembre do fluxo basico: clone -> branch -> edit -> commit -> push -> PR
- Conventional Commits: `docs: add Sofia to contributors list`
- O CI pode falhar se o README tiver erro de formatacao (Markdown lint)
- Verifique se o `.github/workflows/ci.yml` existe antes de fazer push

### Solucao Guiada

```bash
# Passo 1: Clonar o repositorio (W1 - Git)
git clone https://github.com/mushkingdom/mushroom-store.git
cd mushroom-store

# Passo 2: Criar branch (W1 - Git)
git checkout -b feature/add-sofia-to-team

# Passo 3: Editar o README (W1 - VS Code)
# Abrir VS Code e adicionar ao README:
# ## Contribuidores
# - Pedro (Tech Lead)
# - Sofia (Junior Developer) <-- NOVO

# Passo 4: Commit com padrao (W1 - Git + W3 - Boas Praticas)
git add README.md
git commit -m "docs: add Sofia to contributors list"

# Passo 5: Push (W1 - Git + GitHub)
git push -u origin feature/add-sofia-to-team

# Passo 6: Abrir PR no GitHub (W1 - GitHub)
# Ir ao GitHub > Pull Requests > New Pull Request
# Base: main <- Compare: feature/add-sofia-to-team
# Titulo: "docs: add Sofia to contributors list"
# Descricao: "Adicionando Sofia como nova contribuidora do projeto"

# Passo 7: Verificar CI (W1 - GitHub Actions)
# Aguardar o workflow CI rodar e verificar se passou
# Se falhou: ler os logs, corrigir, commitar de novo
```

### Power-Ups Necessarios

| Power-Up | World | Uso |
|----------|-------|-----|
| VS Code | W1 | Editor para fazer a edicao |
| Git | W1 | Clone, branch, commit, push |
| GitHub | W1 | PR e colaboracao |
| GitHub Actions | W1 | CI automatizado |
| Conventional Commits | W3 | Padrao de mensagem |

---

## Boss 2: O Blooper das Profundezas (World 2 -- Infraestrutura)

**Dificuldade**: [===-------] Facil+
**World Principal**: 2 (Cavernas)
**Worlds Combinados**: 1 + 2 + 3

### Cenario

A equipe recebe uma reclamacao: *"O site esta fora do ar!"*. Voce verifica e o site realmente nao responde. O tech lead pede:

*"Preciso que voce investigue: verifique os ambientes (dev, staging, prod), olhe os logs, descubra se e problema de DNS, API ou banco de dados, e me de um diagnostico."*

### Sua Missao

1. Verificar qual ambiente esta com problema (dev, staging, producao)
2. Checar se o DNS esta resolvendo corretamente
3. Verificar se a API responde (endpoint /health)
4. Verificar se o banco de dados esta acessivel
5. Analisar os logs no dashboard de observabilidade
6. Criar uma issue no GitHub com o diagnostico
7. Propor uma solucao

### Dicas do Toad

- Comece pelo basico: `ping`, `nslookup`, `curl`
- Se o DNS resolve mas a API nao responde, o problema e no servidor
- Se a API responde mas com erro 500, o problema pode ser no banco
- Logs sao seus melhores amigos -- procure por "ERROR" e "FATAL"
- O problema real: o certificado SSL expirou ontem as 23:59

### Solucao Guiada

```bash
# Passo 1: Verificar DNS (W2 - DNS)
nslookup mushroom-store.com
# Resultado: Resolve para 20.30.40.50 -- DNS OK

# Passo 2: Verificar conectividade (W2 - Infraestrutura)
curl -v https://mushroom-store.com/health
# Resultado: SSL_ERROR_EXPIRED_CERT -- ENCONTRADO!

# Passo 3: Verificar certificado (W2 - Seguranca)
openssl s_client -connect mushroom-store.com:443 2>/dev/null | \
  openssl x509 -noout -dates
# notAfter=Mar 17 23:59:59 2026 GMT  <-- EXPIROU ONTEM!

# Passo 4: Verificar ambientes (W2 - Ambientes)
curl -k https://staging.mushroom-store.com/health
# Resultado: {"status": "healthy"} -- Staging OK (cert diferente)
curl -k https://mushroom-store.com/health
# Resultado: {"status": "healthy"} -- API funciona, cert expirou

# Passo 5: Analisar logs (W2 - Observabilidade)
# No Grafana/Azure Monitor: filtrar por "SSL" ou "certificate"
# Encontra: "WARNING: Certificate expires in 1 day" (ontem)

# Passo 6: Criar issue (W1 - GitHub)
# Titulo: "fix: SSL certificate expired on production"
# Descricao:
#   Root cause: certificado SSL expirou em 2026-03-17
#   Impacto: site inacessivel via HTTPS em producao
#   Staging nao afetado (certificado diferente)
#   Solucao: renovar certificado + configurar auto-renovacao

# Passo 7: Solucao (W2 - DevOps/IaC)
# Renovar certificado via Let's Encrypt:
# certbot renew --force-renewal
# Configurar cron job para auto-renovacao:
# 0 3 1 * * certbot renew --quiet
```

### Power-Ups Necessarios

| Power-Up | World | Uso |
|----------|-------|-----|
| Terminal | W3 | Comandos de diagnostico |
| DNS | W2 | Verificar resolucao de nomes |
| Seguranca | W2 | Diagnosticar certificado SSL |
| Observabilidade | W2 | Analisar logs |
| Ambientes | W2 | Verificar dev vs staging vs prod |
| GitHub Issues | W1 | Documentar o problema |

---

## Boss 3: O Lakitu Malvado (World 3 -- Ferramentas)

**Dificuldade**: [=====-----] Medio
**World Principal**: 3 (Mundo Aereo)
**Worlds Combinados**: 1 + 2 + 3 + 5

### Cenario

O time precisa de um **novo ambiente de desenvolvimento** que qualquer desenvolvedor possa levantar em minutos. Hoje, cada dev gasta 2-3 horas configurando o ambiente manualmente. O tech lead pede:

*"Crie um Docker Compose que suba toda a aplicacao: frontend React, backend Node.js, PostgreSQL, e Redis. Adicione testes automatizados e configure o Copilot para ajudar."*

### Sua Missao

1. Criar um `docker-compose.yml` com 4 servicos (frontend, backend, db, redis)
2. Criar Dockerfiles otimizados com multi-stage build para frontend e backend
3. Configurar volumes para persistencia do banco
4. Adicionar healthchecks para todos os servicos
5. Criar um script `setup.sh` que configura tudo de uma vez
6. Escrever testes que verificam se os servicos estao saudaveis
7. Usar o Copilot para ajudar na criacao (registrar quais prompts usou)

### Dicas do Toad

- Multi-stage build: use uma imagem para build e outra para runtime
- Healthchecks: `curl -f http://localhost:3000/health || exit 1`
- Volumes nomeados para PostgreSQL: `pgdata:/var/lib/postgresql/data`
- Redis nao precisa de volume (cache e efemero)
- Use `.env` para variaveis de ambiente (nunca hardcode senhas)

### Solucao Guiada

```yaml
# docker-compose.yml (W3 - Docker)
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://localhost:4000
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
    depends_on:
      backend:
        condition: service_healthy

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "4000:4000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mushroom
      - REDIS_URL=redis://redis:6379
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:4000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_started

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mushroom
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d mushroom"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  pgdata:
```

```dockerfile
# backend/Dockerfile -- Multi-stage (W3 - Docker otimizado)

# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Stage 2: Runtime (imagem muito menor)
FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
EXPOSE 4000
CMD ["node", "dist/server.js"]
```

```bash
# Prompt usado no Copilot (W5):
# "Crie um docker-compose.yml para uma aplicacao com
#  React frontend, Node.js backend, PostgreSQL e Redis.
#  Inclua healthchecks, multi-stage Dockerfiles e
#  volumes para persistencia do banco."

# Testes de integracao (W3 - Testes):
# test/integration/docker-health.test.js
```

### Power-Ups Necessarios

| Power-Up | World | Uso |
|----------|-------|-----|
| Docker | W3 | Containers e Docker Compose |
| Testes | W3 | Verificar saude dos servicos |
| Bancos de Dados | W3 | PostgreSQL com persistencia |
| Terminal | W3 | Executar comandos |
| GitHub Copilot | W5 | Ajudar na criacao |
| Ambientes | W2 | Configuracao de variaveis |

---

## Boss 4: O Cheep-Cheep Venenoso (World 4 -- Arquitetura)

**Dificuldade**: [======----] Medio+
**World Principal**: 4 (Mundo Aquatico)
**Worlds Combinados**: 1 + 2 + 3 + 4

### Cenario

A mushroom-store esta crescendo e o monolito nao aguenta mais. O CTO decide migrar para **microservices** e implementar **deploy blue-green**. Voce e responsavel por:

*"Quebre o modulo de produtos em um microservice independente. Configure autenticacao JWT entre os servicos. Implemente deploy blue-green no Azure. Tudo precisa ter zero downtime."*

### Sua Missao

1. Extrair o modulo de produtos do monolito para um microservice
2. Definir a API REST do novo servico (OpenAPI/Swagger)
3. Implementar autenticacao JWT para comunicacao entre servicos
4. Configurar o pipeline de deploy blue-green
5. Implementar health checks e readiness probes
6. Criar um plano de rollback caso algo de errado
7. Documentar a nova arquitetura

### Dicas do Toad

- Blue-green: dois ambientes identicos, troca instantanea de trafego
- JWT entre servicos: service-to-service auth, nao e o mesmo que user auth
- Use API Gateway para rotear trafego entre blue e green
- Rollback = apontar o trafego de volta para o ambiente anterior
- Zero downtime = health check obrigatorio antes de liberar trafego

### Solucao Guiada

```
ARQUITETURA ANTES (Monolito):
+-----------------------------------+
|  mushroom-store (monolito)        |
|  +--------+  +--------+  +-----+ |
|  | Users  |  |Products|  |Orders| |
|  +--------+  +--------+  +-----+ |
+-----------------------------------+

ARQUITETURA DEPOIS (Microservices):
+----------------+    JWT    +-------------------+
| mushroom-store |<--------->| product-service   |
| (sem Products) |           | (independente)    |
+--------+-------+           +--------+----------+
         |                            |
         v                            v
   [PostgreSQL 1]              [PostgreSQL 2]
   (users, orders)             (products)
```

```yaml
# Definicao da API (W4 - APIs + Arquitetura)
# product-service/openapi.yaml
openapi: 3.0.3
info:
  title: Product Service API
  version: 1.0.0
paths:
  /api/products:
    get:
      summary: Lista todos os produtos
      security:
        - bearerAuth: []  # JWT obrigatorio
      responses:
        '200':
          description: Lista de produtos
    post:
      summary: Cria um produto
      security:
        - bearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateProduct'
```

```yaml
# Deploy Blue-Green (W4 - Deploy Avancado)
# .github/workflows/deploy-blue-green.yml
name: Blue-Green Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Green
        run: |
          az webapp deployment slot create \
            --name product-service \
            --slot green

      - name: Health Check Green
        run: |
          for i in {1..10}; do
            STATUS=$(curl -s -o /dev/null -w "%{http_code}" \
              https://product-service-green.azurewebsites.net/health)
            if [ "$STATUS" = "200" ]; then
              echo "Green is healthy!"
              exit 0
            fi
            sleep 5
          done
          echo "Green failed health check!"
          exit 1

      - name: Swap Blue <-> Green
        run: |
          az webapp deployment slot swap \
            --name product-service \
            --slot green \
            --target-slot production

      - name: Verify Production
        run: |
          curl -f https://product-service.azurewebsites.net/health
```

```
PLANO DE ROLLBACK:
  Se algo der errado apos o swap:
  1. az webapp deployment slot swap \
       --name product-service \
       --slot green \
       --target-slot production
     (Swap de volta -- instantaneo)
  2. Investigar logs no Azure Monitor
  3. Corrigir e re-deployar
```

### Power-Ups Necessarios

| Power-Up | World | Uso |
|----------|-------|-----|
| Microservices | W4 | Arquitetura do servico |
| Auth/JWT | W4 | Autenticacao entre servicos |
| Deploy Blue-Green | W4 | Zero downtime deployment |
| APIs (OpenAPI) | W2 | Definicao do contrato |
| GitHub Actions | W1 | Pipeline de deploy |
| Azure | W1 | Plataforma de hospedagem |
| Docker | W3 | Empacotamento do servico |

---

## Boss 5: O Bowser Jr (World 5 -- IA e Agentes)

**Dificuldade**: [=======---] Dificil
**World Principal**: 5 (Castelo Bowser 1)
**Worlds Combinados**: 1 + 3 + 4 + 5

### Cenario

Seu app tem um **bug em producao** que esta afetando 30% dos usuarios: o carrinho de compras perde itens aleatoriamente. O CTO exige resolucao urgente. Voce precisa usar todas as ferramentas de IA para resolver rapido.

*"Use o Copilot para encontrar o bug, corrija-o, garanta que nao volta, e deploye a correcao. Temos 2 horas."*

### Sua Missao

1. Usar `git bisect` para encontrar o commit que introduziu o bug
2. Usar o Copilot Agent Mode para analisar e propor a correcao
3. Implementar a correcao com ajuda do Copilot
4. Criar testes que verificam que o bug nao volta (regressao)
5. Configurar o GHAS para escanear vulnerabilidades relacionadas
6. Fazer deploy de emergencia (hotfix)
7. Monitorar que o fix resolveu o problema

### Dicas do Toad

- `git bisect` e perfeito para encontrar quando um bug foi introduzido
- O bug provavelmente e uma race condition no Redis (cache invalidation)
- Agent Mode do Copilot pode analisar o codigo e sugerir fix rapidamente
- Hotfix: crie branch de `main`, corrija, merge direto (bypass feature branch)
- Monitore a taxa de erro apos o deploy para confirmar a correcao

### Solucao Guiada

```bash
# Passo 1: Encontrar o commit culpado (W1 - Git avancado)
git bisect start
git bisect bad HEAD              # versao atual tem bug
git bisect good v2.2.0           # ultima versao sem bug
# Git vai fazer checkout de commits intermediarios
# Para cada um, testar: o carrinho perde itens?
# Resultado: commit abc123 "feat: add Redis caching to cart"
git bisect reset
```

```
# Passo 2: Analisar com Copilot Agent Mode (W5)
Sofia no Copilot:
  "Analise o commit abc123 que adicionou cache Redis ao
   carrinho. Usuarios estao perdendo itens aleatoriamente.
   Suspeito de race condition na invalidacao do cache.
   Analise src/services/cart.ts e src/cache/redis.ts"

Copilot (Agent Mode):
  "Encontrei o problema. Em cart.ts:87, o metodo updateCart()
   atualiza o banco DEPOIS de invalidar o cache. Se outro
   request chegar entre a invalidacao e a atualizacao do banco,
   o cache vai ser recarregado com dados antigos (stale read).

   Fix sugerido: usar padrao cache-aside -- atualizar o banco
   PRIMEIRO, depois invalidar o cache. Ou usar lock distribuido."
```

```typescript
// Passo 3: Implementar fix (W5 - Copilot + W3 - Codigo)

// ANTES (bug): invalida cache, depois atualiza banco
async updateCart(userId: string, items: CartItem[]) {
  await this.cache.del(`cart:${userId}`);     // invalida
  await this.db.cart.update({ userId, items }); // atualiza
  // BUG: entre del() e update(), outro request le cache
  // vazio e recarrega dados antigos do banco
}

// DEPOIS (fix): atualiza banco, depois invalida cache
async updateCart(userId: string, items: CartItem[]) {
  await this.db.cart.update({ userId, items }); // atualiza PRIMEIRO
  await this.cache.del(`cart:${userId}`);        // depois invalida
  // SEGURO: mesmo se outro request recarregar cache,
  // vai pegar os dados NOVOS do banco
}
```

```bash
# Passo 4: Testes de regressao (W3 - Testes)
# test/regression/cart-race-condition.test.ts
# Teste que simula requests concorrentes ao carrinho
# e verifica que itens nao sao perdidos

# Passo 5: GHAS scan (W5 - Seguranca)
# Verificar se ha outras race conditions similares no codigo

# Passo 6: Hotfix deploy (W4 - Deploy + W1 - Git)
git checkout main
git checkout -b hotfix/cart-race-condition
git add .
git commit -m "fix: resolve cart race condition in Redis cache invalidation"
git push -u origin hotfix/cart-race-condition
# Criar PR -> Merge rapido -> Deploy automatico

# Passo 7: Monitorar (W2 - Observabilidade)
# Grafana: monitorar taxa de erro do carrinho
# Esperado: queda de 30% para 0% em 15 minutos
```

### Power-Ups Necessarios

| Power-Up | World | Uso |
|----------|-------|-----|
| Git bisect | W1 | Encontrar commit culpado |
| Copilot Agent Mode | W5 | Analisar e sugerir fix |
| Testes de regressao | W3 | Prevenir reincidencia |
| GHAS | W5 | Scan de vulnerabilidades |
| Deploy hotfix | W4 | Correcao de emergencia |
| Observabilidade | W2 | Monitorar pos-deploy |
| Redis/Cache | W4 | Entender o problema |

---

## Boss 6: O Kamek Ilusionista (World 6 -- Copilot Ecosystem)

**Dificuldade**: [========--] Dificil+
**World Principal**: 6 (Castelo Bowser 2)
**Worlds Combinados**: 1 + 3 + 5 + 6

### Cenario

A empresa quer **padronizar** o uso do GitHub Copilot para todo o time de 20 desenvolvedores. Hoje, cada um usa do seu jeito -- sem agentes customizados, sem skills, sem instructions. O resultado: prompts inconsistentes, codigo sem padrao, e tokens desperdicados.

*"Configure o ecossistema completo do Copilot para nosso projeto: agents, skills, instructions, prompts, hooks e MCP. Quero que qualquer dev novo consiga ser produtivo no primeiro dia."*

### Sua Missao

1. Criar o `copilot-instructions.md` com padroes do projeto
2. Criar 3 Custom Agents (.agent.md): Backend, Frontend e DBA
3. Criar 2 Skills (SKILL.md): workflow-feature e workflow-bugfix
4. Criar 2 Prompt Files (.prompt.md): new-component e add-endpoint
5. Configurar Hooks (pre-commit e commit-msg)
6. Configurar MCP para conectar ao PostgreSQL e ao Figma
7. Documentar tudo para o time

### Dicas do Toad

- copilot-instructions.md vai na raiz de `.github/`
- Agents vao em `.github/agents/`
- Skills vao em `.github/skills/`
- Prompts vao em `.github/prompts/`
- MCP vai em `.vscode/mcp.json`
- Hooks vao via Husky no `package.json`

### Solucao Guiada

```markdown
# Passo 1: copilot-instructions.md (W6 - Instructions)
# .github/copilot-instructions.md

# Copilot Instructions - MushKingdom Store

## Stack
- Frontend: React 18 + TypeScript 5 + Tailwind CSS
- Backend: Node.js 20 + Express + Prisma
- Database: PostgreSQL 16
- Cache: Redis 7
- Tests: Jest + React Testing Library

## Convencoes
- TypeScript strict mode, zero `any`
- Conventional Commits (feat, fix, docs, chore)
- Repository Pattern para acesso a dados
- Nomes de variaveis e funcoes em ingles
- Comentarios em portugues

## Padroes
- Toda funcao publica deve ter JSDoc
- Todo endpoint deve ter validacao com Zod
- Todo service deve ter testes unitarios (>80% coverage)
```

```markdown
# Passo 2: Custom Agent - Backend (W6 - Agents)
# .github/agents/backend-engineer.agent.md

---
name: "Backend Engineer"
description: "Especialista em Node.js, Express e Prisma"
tools:
  - codebase
  - terminal
  - file
applyTo: "backend/**"
---

# Backend Engineer Agent

Voce e um engenheiro backend senior especializado em:
- Node.js com TypeScript strict
- Express com middleware pattern
- Prisma ORM com PostgreSQL
- Validacao com Zod
- Testes com Jest

## Regras
- Nunca use `any` -- sempre defina tipos
- Sempre retorne erros estruturados
- Sempre adicione logs com winston
- Siga o Repository Pattern existente
```

```json
// Passo 6: MCP Config (W6 - MCP)
// .vscode/mcp.json
{
  "servers": {
    "postgresql": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres",
               "postgresql://user:pass@localhost:5432/mushroom"]
    },
    "figma": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-figma"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "${FIGMA_TOKEN}"
      }
    }
  }
}
```

```json
// Passo 5: Hooks via Husky (W6 - Hooks)
// package.json (parcial)
{
  "scripts": {
    "prepare": "husky install"
  }
}

// .husky/pre-commit
// #!/bin/sh
// npx lint-staged

// .husky/commit-msg
// #!/bin/sh
// npx commitlint --edit $1
```

### Power-Ups Necessarios

| Power-Up | World | Uso |
|----------|-------|-----|
| Custom Agents | W6 | Criar personagens especializados |
| Skills | W6 | Definir workflows |
| Instructions | W6 | Regras automaticas |
| Prompt Files | W6 | Atalhos reutilizaveis |
| Hooks | W6 | Automacao no commit |
| MCP | W6 | Conectar ferramentas |
| GitHub Copilot | W5 | Base de tudo |
| Git | W1 | Versionamento da config |

---

## Boss 7: O Magikoopa Supremo (World 7 -- Frameworks IA)

**Dificuldade**: [==========-] Expert
**World Principal**: 7 (Star World)
**Worlds Combinados**: 2 + 3 + 5 + 6 + 7

### Cenario

O time de suporte da MushKingdom Tech recebe 200+ tickets por dia. 60% sao perguntas que a documentacao ja responde. O CTO quer:

*"Construa um agente RAG que responda perguntas dos clientes usando nossa documentacao. Use AI Foundry, conecte via MCP, e publique no IDP. O agente deve saber quando nao sabe e escalar para humanos."*

### Sua Missao

1. Indexar a documentacao do produto no Azure AI Search
2. Configurar um modelo GPT-4o no Azure AI Foundry
3. Criar um fluxo RAG: pergunta -> busca -> contexto -> resposta
4. Implementar guardrails: deteccao de topicos fora do escopo
5. Configurar escalacao automatica para humano quando o agente nao sabe
6. Conectar o agente ao sistema de tickets via MCP
7. Publicar o agente no IDP/Backstage como servico catalogado
8. Definir metricas de sucesso (resolucao automatica, satisfacao)

### Dicas do Toad

- Azure AI Search para indexar documentos em chunks de 500 tokens
- Use embeddings (text-embedding-ada-002) para representacao vetorial
- Prompt do sistema deve instruir o agente a dizer "nao sei" quando nao encontrar documentacao relevante
- Threshold de confianca: se score < 0.7, escalar para humano
- MCP server customizado para conectar ao sistema de tickets (Zendesk, Jira Service Desk, etc.)

### Solucao Guiada

```
ARQUITETURA DO AGENTE RAG:

  Cliente faz pergunta
        |
        v
  +--[API Gateway]--+
        |
        v
  +--[Embedding]----+  Converte pergunta em vetor
        |
        v
  +--[AI Search]----+  Busca documentos similares
        |
        v
  +--[Rank & Filter]+  Score > 0.7? Continua : Escala
        |
        v
  +--[GPT-4o]-------+  Gera resposta com contexto dos docs
        |
        v
  +--[Guardrails]---+  Verifica: e sobre nosso produto?
        |                         Nao tem conteudo improrio?
        v                         Resposta faz sentido?
  +--[Resposta]-----+
        |
        v
  Cliente recebe resposta
  (ou escala para humano se score < 0.7)
```

```python
# Fluxo RAG simplificado (W7 - RAG + AI Foundry)
from azure.search.documents import SearchClient
from openai import AzureOpenAI

# 1. Buscar documentos relevantes
search_client = SearchClient(endpoint, index_name, credential)
results = search_client.search(
    search_text=None,
    vector_queries=[{
        "kind": "vector",
        "vector": get_embedding(user_question),
        "k_nearest_neighbors": 5,
        "fields": "content_vector"
    }]
)

# 2. Verificar confianca
top_score = results[0]['@search.score']
if top_score < 0.7:
    escalate_to_human(user_question)
    return "Vou transferir para um atendente especializado."

# 3. Montar contexto
context = "\n".join([r['content'] for r in results])

# 4. Gerar resposta com GPT-4o
client = AzureOpenAI(endpoint=ai_endpoint, api_key=ai_key)
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": f"""
         Voce e um assistente da MushKingdom Store.
         Responda APENAS com base no contexto fornecido.
         Se a informacao nao estiver no contexto, diga:
         'Nao encontrei essa informacao na documentacao.
          Vou transferir para um atendente.'
         Contexto: {context}
         """},
        {"role": "user", "content": user_question}
    ]
)
```

```yaml
# Registro no IDP/Backstage (W7 - IDP)
# catalog-info.yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: support-rag-agent
  description: Agente RAG para suporte ao cliente
  annotations:
    backstage.io/techdocs-ref: dir:.
spec:
  type: service
  lifecycle: production
  owner: team-ai
  system: customer-support
  providesApis:
    - support-agent-api
```

### Power-Ups Necessarios

| Power-Up | World | Uso |
|----------|-------|-----|
| AI Foundry | W7 | Plataforma de modelos |
| RAG | W7 | Busca contextual |
| LangChain/Semantic Kernel | W7 | Orquestracao do fluxo |
| IDP/Backstage | W7 | Catalogar o servico |
| MCP | W6 | Conectar ao sistema de tickets |
| Copilot | W5 | Ajudar no desenvolvimento |
| APIs | W2 | Endpoints do agente |
| Testes | W3 | Validar respostas |
| Observabilidade | W2 | Monitorar performance |

---

## Boss FINAL: O Bowser Definitivo (Todos os Worlds)

**Dificuldade**: [==========] FINAL
**World Principal**: TODOS
**Worlds Combinados**: 1 + 2 + 3 + 4 + 5 + 6 + 7

### Cenario

A MushKingdom Tech foi adquirida por uma empresa maior. Voce precisa **migrar todo o ecossistema** para uma nova infraestrutura, mantendo tudo funcionando. O desafio:

*"Temos 30 dias para migrar o repositorio, a infraestrutura, o CI/CD, os agentes, o RAG, e o IDP para a nova organizacao no GitHub. Zero downtime. Nenhum dado perdido. Todos os agentes precisam continuar funcionando. E preciso documentar TUDO para o novo time."*

### Sua Missao

1. **Planejar** a migracao (cronograma, dependencias, riscos)
2. **Migrar repositorios** para a nova organizacao GitHub (W1)
3. **Reconfigurar ambientes** e segredos na nova infra (W2)
4. **Migrar containers** e pipelines Docker (W3)
5. **Atualizar deploy** para apontar para o novo Azure (W4)
6. **Migrar configuracao Copilot** (agents, skills, instructions, MCP) (W5+W6)
7. **Migrar agente RAG** e reindexar documentos (W7)
8. **Atualizar IDP** com novos endpoints e donos (W7)
9. **Testar TUDO** end-to-end
10. **Documentar** para o novo time
11. **Monitorar** por 2 semanas pos-migracao (W2)
12. **Apresentar** relatorio final para lideranca (W8)

### Dicas do Toad

- Faca em fases: infra primeiro, depois codigo, depois IA
- Use blue-green para a troca: novo ambiente rodando em paralelo
- Secrets nunca devem ser copiados em texto -- use Azure Key Vault
- GitHub Importer para migrar repos com historico completo
- MCP configs precisam de novos tokens/credentials
- RAG precisa reindexar -- os embeddings nao sao portaveis entre contas AI Search

### Solucao Guiada

```
CRONOGRAMA DE MIGRACAO (30 DIAS):

Semana 1: INFRAESTRUTURA (W1 + W2)
+--------------------------------------------------+
| Dia 1-2: Criar nova org no GitHub                |
|          Configurar policies e teams              |
| Dia 3-4: Migrar repositorios com GitHub Importer |
|          Verificar historico, branches, tags      |
| Dia 5:   Configurar secrets no novo Azure        |
|          Key Vault para credenciais               |
+--------------------------------------------------+

Semana 2: BUILD E DEPLOY (W3 + W4)
+--------------------------------------------------+
| Dia 6-7: Migrar Dockerfiles e docker-compose     |
|          Criar novos Azure Container Registry     |
| Dia 8-9: Reconfigurar GitHub Actions workflows   |
|          Apontar para novo ACR e novo Azure       |
| Dia 10:  Configurar deploy blue-green no novo env|
|          Testar pipeline end-to-end               |
+--------------------------------------------------+

Semana 3: COPILOT E IA (W5 + W6 + W7)
+--------------------------------------------------+
| Dia 11-12: Migrar .github/agents, skills, etc.   |
|            Atualizar copilot-instructions.md      |
| Dia 13-14: Reconfigurar MCP com novas credenciais|
|            Testar conexoes PostgreSQL e Figma     |
| Dia 15:    Migrar AI Foundry: novo endpoint      |
|            Reindexar documentos no AI Search      |
|            Validar respostas do agente RAG        |
+--------------------------------------------------+

Semana 4: TESTE E CUTOVER (TODOS)
+--------------------------------------------------+
| Dia 16-18: Testes end-to-end completos           |
|            Smoke tests em todos os servicos       |
|            Testes de carga e performance          |
| Dia 19:    CUTOVER: trocar DNS para nova infra   |
|            Monitorar metricas por 24h             |
| Dia 20-22: Desligar infraestrutura antiga        |
|            Atualizar IDP/Backstage                |
| Dia 23-25: Buffer para problemas inesperados     |
| Dia 26-30: Documentacao final + treinamento      |
+--------------------------------------------------+
```

```
CHECKLIST POS-MIGRACAO:
  [ ] Repositorios migrados com historico completo
  [ ] CI/CD rodando na nova org
  [ ] Todos os testes passando
  [ ] Deploy blue-green funcionando
  [ ] GHAS configurado e escaneando
  [ ] Copilot configurado com agents/skills/MCP
  [ ] Agente RAG respondendo corretamente
  [ ] IDP atualizado com novos servicos
  [ ] DNS apontando para nova infra
  [ ] Zero downtime durante cutover
  [ ] Documentacao completa para novo time
  [ ] Monitoramento ativo por 2 semanas
```

### Power-Ups Necessarios

| Power-Up | World | Uso |
|----------|-------|-----|
| Git/GitHub | W1 | Migrar repositorios |
| GitHub Actions | W1 | Reconfigurar CI/CD |
| Azure | W1 | Nova infraestrutura |
| Ambientes | W2 | Configurar dev/staging/prod |
| Seguranca | W2 | Migrar segredos |
| Observabilidade | W2 | Monitorar migracao |
| DNS | W2 | Trocar apontamento |
| Docker | W3 | Migrar containers |
| Testes | W3 | Validar migracao |
| Deploy Blue-Green | W4 | Zero downtime cutover |
| Auth/JWT | W4 | Reconfigurar autenticacao |
| Copilot | W5 | Configurar na nova org |
| GHAS | W5 | Seguranca no novo ambiente |
| Agents/Skills/MCP | W6 | Migrar ecossistema Copilot |
| Token Optimization | W6 | Manter eficiencia |
| AI Foundry | W7 | Migrar modelos |
| RAG | W7 | Reindexar documentos |
| IDP | W7 | Atualizar catalogo |

**Este boss requer TODOS os power-ups de TODOS os Worlds. Se voce chegou ate aqui e consegue resolver este cenario, voce completou o jogo.**

---

## Placar Final: Tabela de Resultados

Apos derrotar todos os bosses, avalie seu desempenho:

| Boss | World | Dificuldade | Sua Avaliacao | Precisou da Solucao? |
|------|-------|-------------|---------------|---------------------|
| 1. Goomba Gigante | W1 | Facil | [ ] Dominei [ ] Precisei de dicas | [ ] Sim [ ] Nao |
| 2. Blooper | W2 | Facil+ | [ ] Dominei [ ] Precisei de dicas | [ ] Sim [ ] Nao |
| 3. Lakitu | W3 | Medio | [ ] Dominei [ ] Precisei de dicas | [ ] Sim [ ] Nao |
| 4. Cheep-Cheep | W4 | Medio+ | [ ] Dominei [ ] Precisei de dicas | [ ] Sim [ ] Nao |
| 5. Bowser Jr | W5 | Dificil | [ ] Dominei [ ] Precisei de dicas | [ ] Sim [ ] Nao |
| 6. Kamek | W6 | Dificil+ | [ ] Dominei [ ] Precisei de dicas | [ ] Sim [ ] Nao |
| 7. Magikoopa | W7 | Expert | [ ] Dominei [ ] Precisei de dicas | [ ] Sim [ ] Nao |
| 8. Bowser | TODOS | FINAL | [ ] Dominei [ ] Precisei de dicas | [ ] Sim [ ] Nao |

```
RATING:
  8/8 sem solucao: MESTRE DO MUSHROOM KINGDOM
  6-7/8 sem solucao: HEROI VETERANO
  4-5/8 sem solucao: AVENTUREIRO EXPERIENTE
  2-3/8 sem solucao: APRENDIZ EM EVOLUCAO
  0-1/8 sem solucao: PRECISA REVISITAR OS WORLDS
```

---

## Tabela de Resumo: Conceitos por Boss

| Boss | Conceitos Testados | Worlds |
|------|-------------------|--------|
| 1. Goomba | Git, GitHub, PR, CI, Conventional Commits | W1, W3 |
| 2. Blooper | DNS, SSL, Logs, Ambientes, Diagnostico | W1, W2, W3 |
| 3. Lakitu | Docker, Compose, Multi-stage, Testes, Copilot | W1, W2, W3, W5 |
| 4. Cheep-Cheep | Microservices, JWT, Blue-Green, OpenAPI, Azure | W1, W2, W3, W4 |
| 5. Bowser Jr | Git bisect, Agent Mode, Race condition, Hotfix, GHAS | W1, W2, W3, W4, W5 |
| 6. Kamek | Agents, Skills, Instructions, Prompts, Hooks, MCP | W1, W3, W5, W6 |
| 7. Magikoopa | RAG, AI Foundry, Embeddings, Guardrails, IDP | W2, W3, W5, W6, W7 |
| 8. Bowser | TUDO: migracao completa do ecossistema | W1-W7 |

---

## Referencias

- [Git Bisect Documentation](https://git-scm.com/docs/git-bisect) -- Documentacao do git bisect
- [Docker Compose Documentation](https://docs.docker.com/compose/) -- Documentacao do Docker Compose
- [Azure Deployment Slots](https://learn.microsoft.com/azure/app-service/deploy-staging-slots) -- Blue-Green com Azure
- [GitHub Copilot Agent Mode](https://docs.github.com/en/copilot/using-github-copilot/using-agent-mode) -- Agent Mode docs
- [GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security) -- GHAS
- [Azure AI Search](https://learn.microsoft.com/azure/search/) -- Documentacao do Azure AI Search
- [Backstage.io Catalog](https://backstage.io/docs/features/software-catalog/) -- Catalogo de servicos
- [OpenAPI Specification](https://spec.openapis.org/oas/v3.1.0) -- Especificacao OpenAPI
- [Conventional Commits](https://www.conventionalcommits.org/) -- Padrao de commits
- [Husky](https://typicode.github.io/husky/) -- Git hooks faceis

---

*"Voce enfrentou todos os bosses. Do Goomba mais simples ao Bowser mais temivel. Com cada vitoria, voce nao apenas demonstrou conhecimento -- voce demonstrou a capacidade de COMBINAR conhecimentos de mundos diferentes. E isso que diferencia um jogador comum de um mestre do Mushroom Kingdom."*

*Fase 8-2 concluida. Boss Rush mode: COMPLETE.*

---

<div align="center">

⬅️ [Anterior: Fase 8-1: How Everything Connects](8-1-how-everything-connects.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 8-3: Next Steps](8-3-next-steps.md)

</div>
