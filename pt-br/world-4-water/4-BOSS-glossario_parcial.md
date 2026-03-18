---
title: "Fase 4-BOSS -- Boss Battle: Desafios de Arquitetura"
description: "Boss Battle contra King Boo — 6 desafios praticos de arquitetura que combinam autenticacao, cloud, deploy, cache, mensageria e mais"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agentic-devops
  - mario
  - world-4
  - boss-battle
  - desafios
  - arquitetura
  - exercicios
---

# Fase 4-BOSS -- Boss Battle: Desafios de Arquitetura

---

## Change Log

| Versao | Data       | Autor                                  | Descricao          |
|--------|------------|----------------------------------------|--------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial    |

---

## Sumario

- [Prologo: King Boo Aparece](#prologo-king-boo-aparece)
- [1. Regras da Boss Battle](#1-regras-da-boss-battle)
- [2. Desafio 1: Projetando o Sistema de Autenticacao](#2-desafio-1-projetando-o-sistema-de-autenticacao)
  - [2.1 O Cenario](#21-o-cenario)
  - [2.2 Requisitos](#22-requisitos)
  - [2.3 Exercicio: Diagrama de Fluxo](#23-exercicio-diagrama-de-fluxo)
  - [2.4 Exercicio: Implementacao JWT](#24-exercicio-implementacao-jwt)
  - [2.5 Exercicio: RBAC para o TodoApp](#25-exercicio-rbac-para-o-todoapp)
  - [2.6 Criterios de Aprovacao](#26-criterios-de-aprovacao)
- [3. Desafio 2: Escolha a Arquitetura Certa](#3-desafio-2-escolha-a-arquitetura-certa)
  - [3.1 Cenario A: Startup com 3 Devs](#31-cenario-a-startup-com-3-devs)
  - [3.2 Cenario B: Empresa com 50 Devs](#32-cenario-b-empresa-com-50-devs)
  - [3.3 Cenario C: Processamento de Eventos](#33-cenario-c-processamento-de-eventos)
  - [3.4 Exercicio: Justifique Suas Escolhas](#34-exercicio-justifique-suas-escolhas)
- [4. Desafio 3: Estrategia de Deploy para o TodoApp](#4-desafio-3-estrategia-de-deploy-para-o-todoapp)
  - [4.1 O Cenario](#41-o-cenario)
  - [4.2 Exercicio: Plano de Deploy](#42-exercicio-plano-de-deploy)
  - [4.3 Exercicio: Pipeline CI/CD](#43-exercicio-pipeline-cicd)
  - [4.4 Exercicio: Plano de Rollback](#44-exercicio-plano-de-rollback)
- [5. Desafio 4: Cache e Performance sob Pressao](#5-desafio-4-cache-e-performance-sob-pressao)
  - [5.1 O Cenario](#51-o-cenario)
  - [5.2 Exercicio: Diagnostico de Performance](#52-exercicio-diagnostico-de-performance)
  - [5.3 Exercicio: Estrategia de Cache](#53-exercicio-estrategia-de-cache)
  - [5.4 Exercicio: Otimizar a API](#54-exercicio-otimizar-a-api)
- [6. Desafio 5: Desenhando Mensageria](#6-desafio-5-desenhando-mensageria)
  - [6.1 O Cenario](#61-o-cenario)
  - [6.2 Exercicio: Diagrama de Eventos](#62-exercicio-diagrama-de-eventos)
  - [6.3 Exercicio: Implementar Producer e Consumer](#63-exercicio-implementar-producer-e-consumer)
  - [6.4 Exercicio: Dead Letter Handling](#64-exercicio-dead-letter-handling)
- [7. Desafio 6: O Boss Final — Projeto Completo](#7-desafio-6-o-boss-final--projeto-completo)
  - [7.1 O Grande Desafio](#71-o-grande-desafio)
  - [7.2 Requisitos do Sistema](#72-requisitos-do-sistema)
  - [7.3 Entregaveis](#73-entregaveis)
  - [7.4 Criterios de Avaliacao](#74-criterios-de-avaliacao)
- [8. Glossario do World 4](#8-glossario-do-world-4)
- [9. Gabarito e Dicas](#9-gabarito-e-dicas)
- [10. Proximos Passos: World 5](#10-proximos-passos-world-5)
- [Referencias](#referencias)

---

## Prologo: King Boo Aparece

Sofia havia atravessado todo o Mundo Aquatico. Aprendeu sobre autenticacao, modelos de nuvem, arquitetura de software, deploy avancado, Git workflows, estruturas de dados, cache, performance e mensageria. Estava se sentindo poderosa.

Mas entao, ao chegar ao castelo final do World 4, as luzes apagaram. Uma risada ecoou pelas paredes.

*"Boo hoo hoo!"*

**King Boo** apareceu flutuando no centro do salao — o fantasma invisivel que testa sua capacidade de pensar em arquitetura.

*"Sofia,"* disse King Boo com um sorriso misterioso, *"os desafios que eu trago sao diferentes. Nao basta saber o que e JWT, cache ou microservicos. Voce precisa saber QUANDO usar, POR QUE usar e COMO combinar tudo. Meus desafios sao invisiveis — nao tem resposta obvia. Voce precisa PENSAR."*

Yoshi encostou no ombro de Sofia. *"King Boo e o boss mais traicoeiro. Ele nao ataca com forca — ataca com confusao. Os problemas parecem simples, mas tem camadas. Como todo bom boss do Mario, voce precisa encontrar o padrao."*

Sofia respirou fundo. *"Vamos la."*

---

## 1. Regras da Boss Battle

**Como funciona esta Boss Battle:**

| Regra | Descricao |
|-------|-----------|
| **6 Desafios** | Cada desafio e um cenario real que exige pensamento arquitetural |
| **Sem resposta unica** | Multiplas solucoes sao validas — o importante e a JUSTIFICATIVA |
| **Combine conceitos** | Cada desafio requer conhecimento de multiplas fases do World 4 |
| **Diagramas contam** | Desenhe diagramas sempre que possivel |
| **Pense em trade-offs** | Toda decisao tem vantagens E desvantagens |

**Niveis de dificuldade:**

| Nivel | Estrelas | Descricao |
|-------|----------|-----------|
| **Goomba** | * | Exercicio guiado, passo a passo |
| **Koopa** | ** | Exercicio com liberdade, requer pensamento |
| **Hammer Bro** | *** | Desafio complexo, multiplas solucoes possiveis |
| **Boss** | **** | Projeto completo, combina tudo |

---

## 2. Desafio 1: Projetando o Sistema de Autenticacao

*Fase 4-1: Auth, JWT, OAuth | Dificuldade: ** Koopa*

### 2.1 O Cenario

O TodoApp cresceu e agora precisa de um sistema de autenticacao robusto. Atualmente, qualquer pessoa pode acessar qualquer endpoint da API sem se identificar. Voce precisa proteger o sistema.

**Usuarios do sistema:**
- **Usuarios normais**: Criam e gerenciam suas proprias tarefas
- **Moderadores**: Podem ver e editar tarefas de qualquer usuario
- **Admins**: Podem tudo, incluindo gerenciar usuarios e configuracoes

### 2.2 Requisitos

1. Login com email/senha (local)
2. Login com Google (OAuth)
3. JWT para autenticacao stateless
4. RBAC com 3 roles: user, moderator, admin
5. Rate limiting no endpoint de login
6. Refresh token para renovar sessoes

### 2.3 Exercicio: Diagrama de Fluxo

**Desenhe o diagrama de sequencia para cada fluxo:**

```
Exercicio A: Fluxo de registro com email/senha
  - Cliente envia dados → API valida → Hash senha → Salva no banco → Gera JWT → Retorna

Exercicio B: Fluxo de login com Google (OAuth)
  - Cliente clica "Login com Google" → Redireciona → Google autentica → Callback → Cria/busca usuario → Gera JWT → Retorna

Exercicio C: Fluxo de renovacao de token
  - Access token expirado → Cliente envia refresh token → API valida → Gera novo access token → Retorna
```

**Seu desenho aqui:**

```
(Desenhe o diagrama usando ASCII art ou ferramenta de sua preferencia)

Dica: Use o formato:
  Cliente → API → Banco
      ←           ←
```

### 2.4 Exercicio: Implementacao JWT

**Complete o codigo:**

```javascript
// TODO: Complete o middleware de autenticacao
function authMiddleware(req, res, next) {
  // 1. Extrair token do header Authorization
  // Formato: "Bearer <token>"
  // SEU CODIGO AQUI

  // 2. Verificar se token existe
  // SEU CODIGO AQUI

  // 3. Decodificar e validar o token
  // SEU CODIGO AQUI

  // 4. Adicionar dados do usuario ao req
  // SEU CODIGO AQUI

  // 5. Chamar next() se tudo estiver ok
  // SEU CODIGO AQUI
}

// TODO: Complete o middleware de autorizacao
function requireRole(allowedRoles) {
  return (req, res, next) => {
    // 1. Verificar se req.user existe (ja autenticado)
    // SEU CODIGO AQUI

    // 2. Verificar se o role do usuario esta na lista de roles permitidos
    // SEU CODIGO AQUI

    // 3. Se autorizado, next(). Se nao, 403 Forbidden.
    // SEU CODIGO AQUI
  };
}

// TODO: Aplique os middlewares nas rotas
const router = express.Router();

// Qualquer usuario autenticado
router.get('/api/todos', /* SEU CODIGO */, getTodos);

// Apenas moderator ou admin
router.get('/api/todos/all', /* SEU CODIGO */, getAllTodos);

// Apenas admin
router.delete('/api/users/:id', /* SEU CODIGO */, deleteUser);
```

### 2.5 Exercicio: RBAC para o TodoApp

**Crie a tabela de permissoes completa:**

```
Copie e preencha a tabela:

| Acao                    | User | Moderator | Admin |
|-------------------------|:----:|:---------:|:-----:|
| Ver proprias tarefas    |      |           |       |
| Criar tarefa            |      |           |       |
| Editar propria tarefa   |      |           |       |
| Deletar propria tarefa  |      |           |       |
| Ver tarefas de outros   |      |           |       |
| Editar tarefa de outros |      |           |       |
| Deletar tarefa de outro |      |           |       |
| Ver lista de usuarios   |      |           |       |
| Criar usuario           |      |           |       |
| Deletar usuario         |      |           |       |
| Alterar roles           |      |           |       |
| Ver configuracoes       |      |           |       |
| Alterar configuracoes   |      |           |       |
```

### 2.6 Criterios de Aprovacao

- [ ] Diagrama de fluxo para os 3 cenarios
- [ ] Middleware de auth implementado corretamente
- [ ] Middleware de roles implementado corretamente
- [ ] Tabela RBAC completa e coerente
- [ ] Rate limiting explicado

---

## 3. Desafio 2: Escolha a Arquitetura Certa

*Fases 4-2 e 4-3: Cloud Models + Arquitetura | Dificuldade: *** Hammer Bro*

### 3.1 Cenario A: Startup com 3 Devs

**Contexto**: Uma startup com 3 desenvolvedores quer construir um app de gerenciamento de tarefas para equipes. Tem MVP para entregar em 2 meses. Orcamento limitado. Nao sabe se vai ter 100 ou 100.000 usuarios.

**Responda:**

1. Qual estilo arquitetural? (Monolito, microservicos, serverless?)
2. Qual modelo de nuvem? (IaaS, PaaS, SaaS, Serverless?)
3. Qual servico Azure especifico?
4. Qual banco de dados?
5. Justifique CADA escolha com vantagens e trade-offs.

```
Seu Plano:
  Arquitetura: _______________
  Motivo: _______________

  Modelo de nuvem: _______________
  Servico Azure: _______________
  Motivo: _______________

  Banco de dados: _______________
  Motivo: _______________

  Trade-offs que aceito: _______________
```

### 3.2 Cenario B: Empresa com 50 Devs

**Contexto**: Uma empresa estabelecida com 50 desenvolvedores em 6 equipes precisa reconstruir seu sistema de e-commerce. O sistema atual e um monolito que esta lento, dificil de manter e nao escala. Tem 2 milhoes de usuarios ativos.

**Responda as mesmas 5 perguntas acima.**

### 3.3 Cenario C: Processamento de Eventos

**Contexto**: Uma empresa de IoT recebe dados de 10.000 sensores, cada um enviando dados a cada 5 segundos. Os dados precisam ser processados, armazenados e gerar alertas em tempo real. Trafego varia muito: pico de 50.000 mensagens/segundo, minimo de 100/segundo.

**Responda as mesmas perguntas, considerando:**

- Trafego altamente variavel
- Processamento em tempo real
- Volume alto de dados
- Custo precisa acompanhar o uso

### 3.4 Exercicio: Justifique Suas Escolhas

Para CADA cenario, preencha:

```markdown
## Cenario [A/B/C]

### Decisao 1: Arquitetura
- Escolha: _______________
- Por que SIM: _______________
- Por que NAO as alternativas: _______________
- Risco dessa escolha: _______________

### Decisao 2: Modelo de Nuvem
- Escolha: _______________
- Por que SIM: _______________
- Custo estimado: _______________

### Decisao 3: Banco de Dados
- Escolha: _______________
- Por que SIM: _______________

### Diagrama de Arquitetura
(Desenhe a arquitetura usando ASCII art)
```

---

## 4. Desafio 3: Estrategia de Deploy para o TodoApp

*Fases 4-4 e 4-5: Deploy Avancado + Git Workflows | Dificuldade: ** Koopa*

### 4.1 O Cenario

O TodoApp tem 50.000 usuarios ativos. Voce precisa lancar uma atualizacao grande: novo sistema de notificacoes. A feature envolve mudancas no backend, frontend e banco de dados. O time tem 8 desenvolvedores.

### 4.2 Exercicio: Plano de Deploy

**Defina a estrategia completa:**

```markdown
## Plano de Deploy: Notificacoes v2

### Git Workflow Escolhido: _______________
Motivo: _______________

### Estrategia de Deploy: _______________
Motivo: _______________

### Feature Flags Necessarias:
1. _______________
2. _______________

### Fases do Rollout:
Fase 1 (___% dos usuarios): _______________
Fase 2 (___% dos usuarios): _______________
Fase 3 (___% dos usuarios): _______________
Fase 4 (100%): _______________

### Metricas a Monitorar:
1. _______________
2. _______________
3. _______________

### Criterios de Rollback:
Reverter IMEDIATAMENTE se: _______________
Reverter em 1 hora se: _______________
```

### 4.3 Exercicio: Pipeline CI/CD

**Escreva o arquivo de pipeline:**

```yaml
# .github/workflows/deploy.yml
# TODO: Complete o pipeline com:
# 1. Build e testes
# 2. Deploy para staging
# 3. Testes de integracao em staging
# 4. Deploy para producao (com aprovacao manual)
# 5. Health check pos-deploy
# 6. Rollback automatico se health check falhar

name: Deploy TodoApp
on:
  push:
    branches: [main]

jobs:
  # SEU PIPELINE AQUI
```

### 4.4 Exercicio: Plano de Rollback

**Para cada componente, descreva como fazer rollback:**

```
| Componente | Como Reverter | Tempo Estimado | Risco |
|------------|---------------|----------------|-------|
| Backend    |               |                |       |
| Frontend   |               |                |       |
| Banco      |               |                |       |
| Cache      |               |                |       |
```

---

## 5. Desafio 4: Cache e Performance sob Pressao

*Fases 4-6 e 4-7: Estruturas de Dados + Cache | Dificuldade: *** Hammer Bro*

### 5.1 O Cenario

O TodoApp esta lento. Os usuarios reclamam que a lista de tarefas demora 4 segundos para carregar. Voce investigou e encontrou os seguintes problemas:

1. A query principal faz N+1 (busca usuario, depois busca tarefas de cada usuario individualmente)
2. Nao tem nenhum tipo de cache
3. Imagens de avatar sao servidas diretamente do servidor (sem CDN)
4. O frontend carrega TODOS os componentes de uma vez (sem lazy loading)
5. A busca de tarefas faz uma query no banco a CADA tecla digitada

### 5.2 Exercicio: Diagnostico de Performance

**Para cada problema, identifique:**

```markdown
| Problema | Impacto (ms) | Fase do World 4 | Solucao |
|----------|-------------|-----------------|---------|
| N+1 query |            | 4-7             |         |
| Sem cache |            | 4-7             |         |
| Sem CDN   |            | 4-7             |         |
| Sem lazy loading |     | 4-7             |         |
| Query a cada tecla |   | 4-6             |         |
```

### 5.3 Exercicio: Estrategia de Cache

**Projete a estrategia de cache completa:**

```markdown
## O Que Cachear:
| Dado | Onde Cachear | TTL | Estrategia | Invalidacao |
|------|-------------|-----|------------|-------------|
| Lista de tarefas do usuario |  |  |  |  |
| Perfil do usuario |  |  |  |  |
| Resultados de busca |  |  |  |  |
| Assets estaticos |  |  |  |  |
| Configuracoes globais |  |  |  |  |
```

### 5.4 Exercicio: Otimizar a API

**Reescreva o endpoint otimizado:**

```javascript
// ANTES: Lento (4 segundos)
app.get('/api/todos', async (req, res) => {
  const user = await db.users.findById(req.user.id);
  const todos = [];
  const todoIds = await db.todos.findIds({ userId: user.id });
  for (const id of todoIds) {
    const todo = await db.todos.findById(id);
    const tags = await db.tags.findByTodoId(id);
    todo.tags = tags;
    todos.push(todo);
  }
  res.json(todos);
});

// DEPOIS: Otimizado
// TODO: Reescreva com:
// 1. Cache (Redis)
// 2. Query otimizada (sem N+1)
// 3. Paginacao
// 4. Response comprimido
app.get('/api/todos', async (req, res) => {
  // SEU CODIGO AQUI
});
```

---

## 6. Desafio 5: Desenhando Mensageria

*Fase 4-8: Mensageria | Dificuldade: *** Hammer Bro*

### 6.1 O Cenario

O TodoApp precisa implementar as seguintes funcionalidades assincronas:

1. **Enviar email** quando uma tarefa e criada
2. **Enviar notificacao push** quando uma tarefa e atribuida a alguem
3. **Gerar relatorio PDF** quando o usuario solicita
4. **Sincronizar com Google Calendar** quando tarefa tem data
5. **Registrar log de auditoria** para toda acao

### 6.2 Exercicio: Diagrama de Eventos

**Desenhe o diagrama de arquitetura mostrando:**

- Quais eventos existem
- Quais servicos publicam quais eventos
- Quais servicos consomem quais eventos
- Qual padrao usar (queue vs pub/sub)

```
Seu diagrama:

Producer(s)          Broker              Consumer(s)
┌──────────┐     ┌──────────────┐     ┌──────────────┐
│          │────→│              │────→│              │
│          │     │              │     │              │
└──────────┘     └──────────────┘     └──────────────┘

(Complete com os servicos e eventos reais)
```

### 6.3 Exercicio: Implementar Producer e Consumer

```javascript
// TODO: Implemente o producer que publica eventos
// quando uma tarefa e criada
async function createTodoWithEvents(userId, todoData) {
  // 1. Criar tarefa no banco
  // SEU CODIGO

  // 2. Publicar evento 'todo.created'
  // SEU CODIGO

  // 3. Se tem data, publicar evento 'todo.calendar_sync_needed'
  // SEU CODIGO

  // 4. Retornar a tarefa criada
  // SEU CODIGO
}

// TODO: Implemente o consumer de notificacoes
// que processa eventos 'todo.created'
async function notificationConsumer(message) {
  // 1. Extrair dados do evento
  // SEU CODIGO

  // 2. Buscar preferencias de notificacao do usuario
  // SEU CODIGO

  // 3. Enviar email SE usuario tem notificacao por email ativa
  // SEU CODIGO

  // 4. Enviar push SE usuario tem notificacao push ativa
  // SEU CODIGO

  // 5. ACK da mensagem
  // SEU CODIGO
}
```

### 6.4 Exercicio: Dead Letter Handling

**Descreva o que fazer quando cada tipo de falha acontece:**

```markdown
| Falha | Causa Provavel | Retry? | Max Retries | Acao na DLQ |
|-------|---------------|:------:|:-----------:|-------------|
| Email nao enviou |  |  |  |  |
| Push notification falhou |  |  |  |  |
| PDF nao gerou |  |  |  |  |
| Calendar sync falhou |  |  |  |  |
| Mensagem com formato invalido |  |  |  |  |
```

---

## 7. Desafio 6: O Boss Final — Projeto Completo

*Todas as fases do World 4 | Dificuldade: **** Boss*

### 7.1 O Grande Desafio

Voce foi contratado(a) para projetar a arquitetura de um **sistema de gerenciamento de projetos** (estilo Trello/Asana simplificado) para uma empresa de 200 funcionarios.

### 7.2 Requisitos do Sistema

**Funcionais:**
- Criar e gerenciar projetos, listas e tarefas (cards)
- Atribuir tarefas a membros da equipe
- Comentarios e anexos em tarefas
- Notificacoes em tempo real
- Dashboard com metricas e relatorios
- Busca full-text em tarefas e comentarios

**Nao-Funcionais:**
- 200 usuarios simultanos (pico: 500)
- Tempo de resposta da API: < 500ms (P95)
- Disponibilidade: 99.9%
- Dados devem ser criptografados em transito e em repouso
- Auditoria de todas as acoes

**Restricoes:**
- Time de 6 desenvolvedores
- Budget mensal de infra: ate R$ 5.000
- Prazo: MVP em 3 meses
- Deve usar Azure como provedor de nuvem

### 7.3 Entregaveis

```markdown
## Entregavel 1: Documento de Arquitetura

### 1.1 Estilo Arquitetural
- Escolha e justificativa
- Diagrama de alto nivel

### 1.2 Modelo de Nuvem e Servicos Azure
- Lista de servicos com justificativa
- Estimativa de custo mensal

### 1.3 Sistema de Autenticacao
- Estrategia de auth (JWT? OAuth? Ambos?)
- Modelo RBAC
- Diagrama de fluxo

### 1.4 Estrategia de Dados
- Banco(s) de dados escolhido(s)
- Schema simplificado das principais tabelas
- Estrategia de cache (o que, onde, TTL)

### 1.5 Estrategia de Mensageria
- Quais eventos existem
- Pub/Sub ou Queue para cada caso
- Diagrama de fluxo de eventos

### 1.6 Estrategia de Deploy
- Git Workflow escolhido
- Estrategia de deploy (blue-green, canary, etc.)
- Pipeline CI/CD simplificado
- Plano de rollback

### 1.7 Performance
- Metas de performance (metricas com valores)
- Estrategia de cache
- CDN
- Otimizacoes planejadas
```

### 7.4 Criterios de Avaliacao

| Criterio | Peso | Descricao |
|----------|------|-----------|
| **Coerencia** | 25% | As decisoes fazem sentido juntas? |
| **Justificativa** | 25% | Cada escolha tem um "por que" claro? |
| **Trade-offs** | 20% | Reconhece vantagens E desvantagens? |
| **Praticidade** | 15% | E viavel com o time e budget dado? |
| **Diagramas** | 15% | Diagramas claros e informativos? |

**Escala:**

| Nota | Significado |
|------|-------------|
| **S (Super Star)** | Excelente — decisoes coerentes, justificadas, com trade-offs claros |
| **A (Mushroom)** | Bom — maioria das decisoes bem justificadas |
| **B (Coin)** | Aceitavel — algumas decisoes sem justificativa |
| **C (1-UP)** | Precisa melhorar — decisoes incoerentes ou sem justificativa |

---

## 8. Glossario do World 4

| # | Termo | Definicao | Analogia Mario |
|---|-------|-----------|----------------|
| 1 | **Authentication** | Verificar identidade | Provar que e Mario, nao Bowser |
| 2 | **Authorization** | Verificar permissao | Mario tem a chave da sala? |
| 3 | **JWT** | Token autocontido assinado | Selo magico de Peach |
| 4 | **OAuth 2.0** | Delegacao de autenticacao | Pedir ao Rei para confirmar |
| 5 | **RBAC** | Controle baseado em papeis | Chaves diferentes por personagem |
| 6 | **Hashing** | Transformacao irreversivel | Impressao digital magica |
| 7 | **IaaS** | Infraestrutura como servico | Terreno vazio — construa tudo |
| 8 | **PaaS** | Plataforma como servico | Castelo pronto — so decore |
| 9 | **SaaS** | Software como servico | Hotel luxo — mude-se |
| 10 | **Serverless** | Computacao sob demanda | Quartos magicos que aparecem e somem |
| 11 | **Monolito** | Aplicacao unica | Castelo gigante unico |
| 12 | **Microservicos** | Servicos independentes | Vila de casas especializadas |
| 13 | **MVC** | Model-View-Controller | Cofre + Sala do Trono + Sala de Guerra |
| 14 | **Clean Architecture** | Camadas concentricas | Muralhas do castelo |
| 15 | **Event-Driven** | Comunicacao por eventos | Sinos mensageiros |
| 16 | **Blue-Green** | Dois ambientes, troca | Dois castelos, virar a placa |
| 17 | **Canary** | Deploy gradual | Mandar Toad explorar primeiro |
| 18 | **Rolling** | Atualizar uma instancia por vez | Trocar guardas um por um |
| 19 | **Feature Flag** | Ligar/desligar funcionalidade | Portas invisiveis |
| 20 | **Rollback** | Reverter para versao anterior | Portal de emergencia |
| 21 | **Git Flow** | Workflow formal | Torneio com brackets |
| 22 | **GitHub Flow** | Workflow simples | Partida casual |
| 23 | **Trunk-Based** | Todos na main | Todos no mesmo campo |
| 24 | **Array** | Lista ordenada | Fila de moedas |
| 25 | **Object** | Colecao chave-valor | Bau do tesouro |
| 26 | **JSON** | Formato de troca de dados | Mapa do tesouro universal |
| 27 | **Cache** | Armazenamento temporario rapido | Power-ups no bolso |
| 28 | **Redis** | Banco in-memory | Bolso magico ultra-rapido |
| 29 | **CDN** | Rede de distribuicao | Lojas em cada mundo |
| 30 | **Lazy Loading** | Carregar sob demanda | Construir quarto quando entrar |
| 31 | **N+1 Problem** | Queries excessivas | Ir a loja N vezes |
| 32 | **Message Queue** | Fila de mensagens | Parakoopas carteiros |
| 33 | **RabbitMQ** | Message broker | Correio central |
| 34 | **Service Bus** | Message broker gerenciado | Correio real express |
| 35 | **Pub/Sub** | Publicar para muitos | Quadro de avisos |
| 36 | **Dead Letter Queue** | Fila de falhas | Correio devolvido |
| 37 | **Idempotencia** | 2x = mesmo resultado | Carta duplicada sem efeito |
| 38 | **Shared Responsibility** | Quem cuida do que | Guardas reais vs guardas pessoais |
| 39 | **TTL** | Tempo de vida do cache | Validade do item |
| 40 | **API Gateway** | Ponto de entrada unico | Portao principal do reino |

---

## 9. Gabarito e Dicas

**Dicas gerais para os desafios:**

**Desafio 1 (Auth):**
- Lembre-se: Authentication SEMPRE antes de Authorization
- JWT para APIs stateless, sessoes para apps tradicionais
- NUNCA guarde senhas em texto puro — sempre bcrypt
- Rate limiting e essencial no endpoint de login

**Desafio 2 (Arquitetura):**
- Startup com 3 devs → Monolito e quase sempre a resposta certa
- 50 devs com sistema legado → Strangler Fig para migrar gradualmente
- IoT com trafego variavel → Serverless + Event Hub

**Desafio 3 (Deploy):**
- 50.000 usuarios → Canary e a estrategia mais segura
- Sempre tenha feature flags para features novas
- Pipeline deve incluir: build → test → staging → producao
- Rollback do banco e o mais perigoso — planeje com cuidado

**Desafio 4 (Cache):**
- Cache-aside e a estrategia mais simples e eficaz
- Redis para dados frequentes, CDN para assets estaticos
- Debounce para buscas (esperar usuario parar de digitar)
- Include/eager loading para eliminar N+1

**Desafio 5 (Mensageria):**
- Email e notificacao → Pub/Sub (multiplos consumers)
- PDF → Queue (um consumer dedicado)
- Audit → Pub/Sub (se inscreve em TODOS os eventos)
- Sempre implemente idempotencia nos consumers

**Desafio 6 (Boss Final):**
- Comece com monolito modular (MVC ou Clean Architecture)
- PaaS (App Service) para manter simplicidade
- PostgreSQL com Redis como cache
- Azure Service Bus para mensageria
- GitHub Flow com canary deployment
- Justifique TUDO — a justificativa vale mais que a escolha

---

## 10. Proximos Passos: World 5

Parabens por completar o World 4 — Mundo Aquatico!

Voce agora domina:

- Protecao avancada (Auth, JWT, OAuth, RBAC)
- Modelos de nuvem (IaaS, PaaS, SaaS, Serverless)
- Arquitetura de software (Monolito, Microservicos, MVC, Clean)
- Deploy avancado (Blue-Green, Canary, Rolling, Feature Flags)
- Git Workflows (Git Flow, GitHub Flow, Trunk-Based)
- Estruturas de dados e JSON
- Cache e performance (Redis, CDN, Lazy Loading)
- Mensageria (RabbitMQ, Service Bus, Pub/Sub, DLQ)

**No World 5 — Ceu Noturno (Agentic DevOps Avancado)**, voce vai explorar:

- Evolucao do DevOps para Agentic DevOps
- Niveis de maturidade em IA
- GitHub Copilot em todos os modos
- Tipos de agentes de IA
- MCP detalhado
- GitHub Advanced Security

*King Boo foi derrotado! Mas o caminho continua. Ate o proximo World, Sofia!*

---

## Referencias

- [JWT.io — JSON Web Tokens](https://jwt.io/)
- [Microsoft — Cloud Architecture Patterns](https://learn.microsoft.com/en-us/azure/architecture/patterns/)
- [Martin Fowler — Microservices](https://martinfowler.com/articles/microservices.html)
- [Azure App Service — Deployment Slots](https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots)
- [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow)
- [Redis — Documentacao](https://redis.io/docs/)
- [Azure CDN](https://learn.microsoft.com/en-us/azure/cdn/)
- [Azure Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/)
- [RabbitMQ — Tutorials](https://www.rabbitmq.com/tutorials)
- [Martin Fowler — Feature Toggles](https://martinfowler.com/articles/feature-toggles.html)
- [OWASP — Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [12 Factor App](https://12factor.net/)

---

*World 4 COMPLETO! King Boo derrotado! Sofia domina agora as fundacoes de Arquitetura Avancada. O proximo desafio espera no ceu noturno do World 5. Ate la!*
