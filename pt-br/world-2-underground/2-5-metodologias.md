---
title: "Fase 2-5 -- As Regras do Torneio: Metodologias Ageis"
description: "Agile, Scrum e Kanban explicados como torneios e sistemas de quest do Mushroom Kingdom -- como organizar equipes de desenvolvimento"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agile
  - scrum
  - kanban
  - metodologias
  - sprints
  - world-2
  - mario
---

# Fase 2-5 -- As Regras do Torneio: Metodologias Ageis

---

## Change Log

| Versao | Data       | Autor                                  | Descricao          |
|--------|------------|----------------------------------------|--------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial    |

---

## Sumario

- [Prologo: O Time sem Organizacao](#prologo-o-time-sem-organizacao)
- [1. Antes do Agile: O Mundo Waterfall](#1-antes-do-agile-o-mundo-waterfall)
  - [1.1 O Modelo Cascata](#11-o-modelo-cascata)
  - [1.2 Por Que Waterfall Falha em Software](#12-por-que-waterfall-falha-em-software)
- [2. O Manifesto Agile: As Novas Regras do Jogo](#2-o-manifesto-agile-as-novas-regras-do-jogo)
  - [2.1 Os 4 Valores do Agile](#21-os-4-valores-do-agile)
  - [2.2 Os 12 Principios](#22-os-12-principios)
- [3. Scrum: O Torneio Estruturado](#3-scrum-o-torneio-estruturado)
  - [3.1 O Que e Scrum?](#31-o-que-e-scrum)
  - [3.2 Os 3 Papeis do Scrum](#32-os-3-papeis-do-scrum)
  - [3.3 Os 5 Eventos do Scrum](#33-os-5-eventos-do-scrum)
  - [3.4 Os 3 Artefatos do Scrum](#34-os-3-artefatos-do-scrum)
  - [3.5 O Ciclo Completo de um Sprint](#35-o-ciclo-completo-de-um-sprint)
- [4. Kanban: O Quadro de Quests](#4-kanban-o-quadro-de-quests)
  - [4.1 O Que e Kanban?](#41-o-que-e-kanban)
  - [4.2 O Quadro Kanban: To Do, Doing, Done](#42-o-quadro-kanban-to-do-doing-done)
  - [4.3 WIP Limits: Limite de Quests Simultaneas](#43-wip-limits-limite-de-quests-simultaneas)
  - [4.4 Kanban na Pratica: GitHub Projects](#44-kanban-na-pratica-github-projects)
- [5. Scrum vs Kanban: Qual Escolher?](#5-scrum-vs-kanban-qual-escolher)
- [6. User Stories: As Quests do Aventureiro](#6-user-stories-as-quests-do-aventureiro)
  - [6.1 O Que e uma User Story?](#61-o-que-e-uma-user-story)
  - [6.2 Criterios de Aceitacao: As Condicoes de Vitoria](#62-criterios-de-aceitacao-as-condicoes-de-vitoria)
  - [6.3 Story Points: O Nivel de Dificuldade](#63-story-points-o-nivel-de-dificuldade)
- [7. Ferramentas na Pratica](#7-ferramentas-na-pratica)
  - [7.1 GitHub Issues como Quests](#71-github-issues-como-quests)
  - [7.2 GitHub Projects como Quadro de Quests](#72-github-projects-como-quadro-de-quests)
  - [7.3 Azure Boards](#73-azure-boards)
- [8. Cerimonias Agile: Os Rituais do Time](#8-cerimonias-agile-os-rituais-do-time)
  - [8.1 Daily Standup: Reuniao Relampago](#81-daily-standup-reuniao-relampago)
  - [8.2 Sprint Planning: Planejamento da Dungeon](#82-sprint-planning-planejamento-da-dungeon)
  - [8.3 Sprint Review: O Debrief da Boss Battle](#83-sprint-review-o-debrief-da-boss-battle)
  - [8.4 Sprint Retrospective: Licoes Aprendidas](#84-sprint-retrospective-licoes-aprendidas)
- [9. Erros Comuns em Agile](#9-erros-comuns-em-agile)
- [10. Tabela Final de Resumo](#10-tabela-final-de-resumo)
- [Referencias](#referencias)

---

## Prologo: O Time sem Organizacao

Sofia tinha um time de 5 pessoas trabalhando no TodoApp. Parecia um time capaz: Luigi no frontend, Toad no banco de dados, Yoshi no DevOps, Peach no QA, e ela, Sofia (Mario), coordenando tudo.

O problema? Total caos.

Luigi terminava features que Toad ainda nao tinha suporte no banco. Yoshi tentava fazer deploy de codigo que Peach nao tinha testado. Sofia nao sabia no que cada um estava trabalhando. Todo mundo estava ocupado, mas nada estava pronto.

*"Parece que estamos todos correndo em direcoes diferentes,"* disse Sofia.

Toadette -- a juiza dos torneiros do Mushroom Kingdom -- apareceu com um apito pendurado no pescoco e um quadro branco debaixo do braco.

*"O problema de voces nao e falta de talento,"* disse Toadette. *"E falta de **regras de torneio**. Imaginem se o Mario Kart nao tivesse regras: sem voltas definidas, sem posicoes, sem cronometro. Todo mundo correndo sem saber para onde. E ISSO que esta acontecendo com o time de voces."*

Ela colocou o quadro branco na parede. *"Vou ensinar a voces duas formas de organizar o torneio: **Scrum** e **Kanban**. As regras que separam o caos da produtividade."*

---

## 1. Antes do Agile: O Mundo Waterfall

### 1.1 O Modelo Cascata

Antes do Agile, o mundo do software usava o modelo **Waterfall** (cascata). O nome vem da ideia de que o processo "cai" de uma fase para outra, sem voltar:

```
1. Requisitos     (6 meses planejando)
       |
       v
2. Design         (3 meses desenhando)
       |
       v
3. Implementacao  (6 meses codando)
       |
       v
4. Testes         (3 meses testando)
       |
       v
5. Deploy         (1 mes lancando)
       |
       v
6. Manutencao     (para sempre)

Total: 18+ meses antes do usuario ver QUALQUER coisa
```

> **ANALOGIA MARIO:** Waterfall e como planejar um jogo de Mario inteiro antes de construir UMA unica fase. Voce passa 6 meses desenhando TODOS os 8 mundos no papel, 3 meses criando sprites, 6 meses programando, 3 meses testando, e so entao deixa alguem jogar. Se ao final o jogador disser "eu queria fases aquaticas, nao aereas" -- voce precisa refazer tudo.

### 1.2 Por Que Waterfall Falha em Software

| Problema | Explicacao | Analogia Mario |
|----------|-----------|----------------|
| Feedback tardio | Usuario so ve o produto no final | Jogador so testa depois de 18 meses |
| Mudancas caras | Voltar para uma fase anterior custa muito | Redesenhar o World 1 quando voce ja esta no World 8 |
| Requisitos mudam | O mundo muda enquanto voce esta construindo | Quando o jogo fica pronto, os jogadores querem outra coisa |
| Risco alto | Tudo ou nada -- funciona ou falha | Aposta tudo numa unica vida, sem checkpoint |

---

## 2. O Manifesto Agile: As Novas Regras do Jogo

Em 2001, 17 desenvolvedores se reuniram e criaram o **Manifesto Agile** -- um documento que mudou a industria de software para sempre.

### 2.1 Os 4 Valores do Agile

| Valor Agile | Em vez de... | Analogia Mario |
|------------|-------------|----------------|
| **Individuos e interacoes** | Processos e ferramentas | **Jogadores trabalhando juntos** em vez de seguir manuais |
| **Software funcionando** | Documentacao extensa | **Fase jogavel** em vez de 500 paginas de design |
| **Colaboracao com o cliente** | Negociacao de contratos | **Jogador testando e dando feedback** em vez de esperar 18 meses |
| **Responder a mudancas** | Seguir um plano rigido | **Adaptar o jogo** conforme feedback em vez de insistir no plano original |

### 2.2 Os 12 Principios

Os principios mais importantes para iniciantes:

1. **Entregas frequentes** -- Entregue pequenos pedacos funcionais regularmente
2. **Mudancas sao bem-vindas** -- Mesmo tarde no desenvolvimento
3. **Software funcionando** e a medida de progresso
4. **Simplicidade** -- Maximize o trabalho NAO feito
5. **Equipes auto-organizadas** -- O time decide como trabalhar
6. **Reflexao regular** -- O time para e pensa em como melhorar

> **ANALOGIA MARIO:** Em vez de construir o jogo inteiro de uma vez, construa **uma fase de cada vez**. Lance o World 1-1, veja se os jogadores gostam, ajuste, depois construa o 1-2. Se os jogadores pedirem fases aquaticas, mude o plano. Entregas pequenas, feedback constante, adaptacao continua.

---

## 3. Scrum: O Torneio Estruturado

### 3.1 O Que e Scrum?

**Scrum** e um framework agile que organiza o trabalho em ciclos curtos e fixos chamados **Sprints**. Cada Sprint e como uma "rodada" de torneio com regras claras.

> **ANALOGIA MARIO:** Scrum e um **torneio de Mario Kart** com regras definidas. Cada corrida (Sprint) dura um tempo fixo (2 semanas). Antes de cada corrida, o time decide a pista (Sprint Planning). Diariamente, checam posicoes (Daily Standup). Ao final da corrida, revisam o resultado (Sprint Review) e discutem como melhorar (Retrospective).

### 3.2 Os 3 Papeis do Scrum

| Papel | Responsabilidade | Analogia Mario | Quem no Time da Sofia |
|-------|-----------------|----------------|----------------------|
| **Product Owner** | Define O QUE construir. Prioriza o trabalho | **Princesa Peach** -- define a missao e prioridades | O gerente de produto |
| **Scrum Master** | Garante que o time segue as regras. Remove obstaculos | **Lakitu** (o de nuvem com a camera) -- observa, guia, sinaliza problemas | Toadette (a juiza) |
| **Development Team** | COMO construir. Faz o trabalho | **Mario, Luigi, Toad, Yoshi** -- os jogadores que executam | Sofia e o time de devs |

**Product Owner (Princesa Peach):**
- Cria e prioriza o **Product Backlog** (lista de tudo que precisa ser feito)
- Decide o que e mais importante
- Representa a voz do usuario/cliente
- Aceita ou rejeita o trabalho feito

**Scrum Master (Lakitu):**
- Facilita as cerimonias (reunioes)
- Remove impedimentos ("o servidor caiu!" -- resolve ou escala)
- Protege o time de interrupcoes
- NAO e o chefe -- e o facilitador

**Development Team (os jogadores):**
- 3 a 9 pessoas
- Auto-organizado (decide como fazer o trabalho)
- Cross-funcional (tem todas as skills necessarias)
- Responsavel pela entrega

### 3.3 Os 5 Eventos do Scrum

| Evento | Quando | Duracao | Analogia Mario |
|--------|--------|---------|----------------|
| **Sprint** | Ciclo completo de trabalho | 1-4 semanas (geralmente 2) | Uma dungeon run cronometrada |
| **Sprint Planning** | Inicio do Sprint | 2-4 horas | Planejamento antes de entrar na dungeon |
| **Daily Scrum** | Todo dia | 15 minutos max | Huddle rapido do time entre fases |
| **Sprint Review** | Final do Sprint | 1-2 horas | Debrief apos derrotar o boss |
| **Sprint Retrospective** | Apos a Review | 1-1.5 hora | Licoes aprendidas: o que fazer melhor |

### 3.4 Os 3 Artefatos do Scrum

| Artefato | O que E | Analogia Mario |
|----------|---------|----------------|
| **Product Backlog** | Lista COMPLETA de tudo que precisa ser feito no produto | Lista de TODAS as quests do jogo |
| **Sprint Backlog** | Lista do que sera feito NESTE Sprint | Quests selecionadas para ESTA dungeon run |
| **Increment** | O produto funcionando ao final do Sprint | A dungeon completada -- nova area desbloqueada |

**Product Backlog (exemplo TodoApp):**
```
Prioridade  | Quest (User Story)                    | Pontos
1 (alta)    | Adicionar tarefa com titulo            | 3
2 (alta)    | Marcar tarefa como concluida           | 2
3 (alta)    | Deletar tarefa                         | 2
4 (media)   | Filtrar tarefas por status             | 5
5 (media)   | Login com Google                       | 8
6 (media)   | Dark mode                              | 3
7 (baixa)   | Exportar tarefas como PDF              | 5
8 (baixa)   | Notificacoes push                      | 13
9 (baixa)   | Compartilhar lista com outros usuarios | 8
```

### 3.5 O Ciclo Completo de um Sprint

```
+------------------------------------------------------------------+
|                      SPRINT (2 semanas)                           |
|                                                                  |
|  Dia 1: SPRINT PLANNING                                         |
|  "Quais quests vamos completar nessa dungeon run?"               |
|  Time seleciona: Quest 1, 2, 3 (total: 7 pontos)                |
|                                                                  |
|  Dias 1-10: DESENVOLVIMENTO                                     |
|  +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+ |
|  | D1  | D2  | D3  | D4  | D5  | D6  | D7  | D8  | D9  | D10 | |
|  +-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+ |
|    ^     ^     ^     ^     ^     ^     ^     ^     ^     ^       |
|    |     |     |     |     |     |     |     |     |     |       |
|  [Daily Standup de 15min cada manha]                             |
|  "O que fiz ontem? O que faco hoje? Tenho impedimentos?"         |
|                                                                  |
|  Dia 10: SPRINT REVIEW                                           |
|  "Olhem o que construimos! Testem! Opinem!"                      |
|  Demo para stakeholders                                          |
|                                                                  |
|  Dia 10: SPRINT RETROSPECTIVE                                   |
|  "O que deu certo? O que melhorar? O que tentar diferente?"      |
|                                                                  |
+------------------------------------------------------------------+
          |
          v
  [Proximo Sprint comeca no dia seguinte]
```

> **ANALOGIA MARIO:** Um Sprint e uma **dungeon run cronometrada**. O time tem 2 semanas para completar as quests selecionadas. Todo dia, o time se reune rapidamente (Daily Standup) para sincronizar: "Luigi terminou o componente de filtro ontem. Hoje Toad vai criar a tabela no banco. Yoshi esta bloqueado porque o Docker nao funciona -- Toadette vai ajudar." No final, o time mostra o que construiu (Sprint Review) e discute como melhorar (Retrospective). Depois, nova dungeon run.

---

## 4. Kanban: O Quadro de Quests

### 4.1 O Que e Kanban?

**Kanban** e um metodo agile visual que foca no fluxo continuo de trabalho. Nao tem sprints fixos -- o trabalho flui continuamente.

> **ANALOGIA MARIO:** Kanban e como o **quest board** (quadro de missoes) na praca da vila do Mushroom Kingdom. As quests estao la, organizadas por status: "A Fazer", "Fazendo", "Feito". Aventureiros pegam quests do quadro, completam, e colocam de volta. Nao tem "rodadas" -- e fluxo continuo.

### 4.2 O Quadro Kanban: To Do, Doing, Done

```
+------------------+------------------+------------------+
|     TO DO        |     DOING        |      DONE        |
|   (A Fazer)      |   (Fazendo)      |     (Feito)      |
+------------------+------------------+------------------+
| [Filtrar por     | [Adicionar       | [Criar layout    |
|  status]         |  tarefa] -Luigi  |  basico]         |
|                  |                  |                  |
| [Login Google]   | [Criar tabela    | [Setup do        |
|                  |  tarefas] -Toad  |  projeto]        |
| [Dark mode]      |                  |                  |
|                  | [Config CI/CD]   | [Modelar         |
| [Exportar PDF]   |  -Yoshi          |  banco dados]    |
|                  |                  |                  |
| [Notificacoes]   |                  |                  |
+------------------+------------------+------------------+
```

Na pratica, muitos times usam colunas mais detalhadas:

```
+----------+-----------+----------+-----------+--------+
| Backlog  | To Do     | In       | In Review | Done   |
|          | (Sprint)  | Progress |           |        |
+----------+-----------+----------+-----------+--------+
```

### 4.3 WIP Limits: Limite de Quests Simultaneas

**WIP** (Work In Progress) Limit e o numero maximo de itens que podem estar "Fazendo" ao mesmo tempo.

```
        DOING (Limite: 3)
+-------------------------------+
| [Tarefa 1] [Tarefa 2] [T3]   |  <- 3 de 3 (no limite!)
+-------------------------------+

Se alguem quiser comecar uma Tarefa 4,
PRECISA terminar uma das 3 primeiro.
```

> **ANALOGIA MARIO:** WIP Limit e como o numero maximo de **quests ativas** que um aventureiro pode carregar. No RPG, voce nao pode aceitar 50 quests ao mesmo tempo -- senao nao termina nenhuma. Melhor ter 3 quests ativas e terminar todas do que 20 quests meio-feitas. **Parar de comecar e comecar a terminar.**

**Por que WIP Limits funcionam:**
- Forca o time a TERMINAR antes de COMECAR
- Reduz o "multitasking" (trocar de contexto)
- Identifica gargalos (se "In Review" esta sempre cheio, precisa mais revisores)
- Aumenta a velocidade de entrega (menos itens em paralelo = cada um termina mais rapido)

### 4.4 Kanban na Pratica: GitHub Projects

O **GitHub Projects** tem um quadro Kanban integrado:

```
1. Va ao repositorio no GitHub
2. Aba "Projects" > New Project
3. Escolha "Board" (quadro Kanban)
4. Crie colunas: Backlog | To Do | In Progress | Review | Done
5. Arraste Issues (quests) entre as colunas
6. Configure automacoes (PR mergeado -> move para Done)
```

---

## 5. Scrum vs Kanban: Qual Escolher?

| Aspecto | Scrum | Kanban |
|---------|-------|--------|
| **Analogia Mario** | Torneio com rodadas fixas | Quest board com fluxo continuo |
| **Ciclos** | Sprints fixos (2 semanas) | Fluxo continuo |
| **Papeis** | Product Owner, Scrum Master, Dev Team | Nao define papeis especificos |
| **Reunioes** | Sprint Planning, Daily, Review, Retro | Nenhuma obrigatoria (mas recomendadas) |
| **Mudancas** | Nao muda durante o Sprint | Pode mudar a qualquer momento |
| **Metricas** | Velocity (pontos por Sprint) | Lead Time, Cycle Time |
| **Ideal para** | Projetos com entregas regulares | Suporte, manutencao, fluxo variavel |
| **Complexidade** | Mais regras para aprender | Mais simples para comecar |
| **Previsibilidade** | Alta (sabe o que sai a cada Sprint) | Media (depende do fluxo) |

> **DICA:** Muitos times usam **Scrumban** -- uma mistura dos dois. Sprints do Scrum com o quadro visual do Kanban. Use o que funcionar melhor para o seu time.

---

## 6. User Stories: As Quests do Aventureiro

### 6.1 O Que e uma User Story?

Uma **User Story** e uma descricao curta de uma funcionalidade do ponto de vista do usuario:

```
Como [tipo de usuario],
eu quero [funcionalidade],
para que [beneficio/valor].
```

**Exemplos para o TodoApp:**

```
Como usuario,
eu quero adicionar uma tarefa com titulo e descricao,
para que eu possa organizar minhas atividades.

Como usuario,
eu quero filtrar tarefas por status (concluida/pendente),
para que eu possa ver rapidamente o que falta fazer.

Como administrador,
eu quero ver metricas de uso do sistema,
para que eu possa entender como os usuarios usam o app.
```

> **ANALOGIA MARIO:** Uma User Story e uma **descricao de quest** no quadro de missoes: "Como aventureiro, eu quero derrotar o Boom Boom do World 2, para que eu desbloqueie o World 3." A quest diz quem (aventureiro), o que (derrotar Boom Boom), e por que (desbloquear World 3).

### 6.2 Criterios de Aceitacao: As Condicoes de Vitoria

Cada quest tem condicoes de vitoria -- sem elas, como saber se voce completou?

```
User Story: Adicionar tarefa
Criterios de Aceitacao:
  [x] Campo de titulo aceita ate 200 caracteres
  [x] Campo de descricao e opcional
  [x] Ao salvar, tarefa aparece na lista imediatamente
  [x] Tarefa e salva no banco de dados
  [x] Se titulo estiver vazio, mostra mensagem de erro
  [x] Nao permite criar tarefas duplicadas
```

> **ANALOGIA MARIO:** Criterios de aceitacao sao como as **condicoes de vitoria** de uma fase: "Pegar TODAS as moedas vermelhas, derrotar TODOS os inimigos, e chegar ao mastro em menos de 200 segundos." Se faltou uma moeda, a fase nao foi completada.

### 6.3 Story Points: O Nivel de Dificuldade

**Story Points** medem a complexidade/esforco de uma User Story. Usa-se a sequencia de Fibonacci: 1, 2, 3, 5, 8, 13, 21.

| Pontos | Complexidade | Analogia Mario |
|--------|-------------|----------------|
| **1** | Trivial | Goomba -- um pulo e ja era |
| **2** | Simples | Koopa -- precisa de 2 pulos |
| **3** | Moderado | Koopa com casco -- precisa pensar um pouco |
| **5** | Complexo | Hammer Bro -- exige habilidade |
| **8** | Muito complexo | Lakitu -- dificil e imprevisivel |
| **13** | Enorme | Mini-boss -- leva tempo e esforco |
| **21** | Gigantesco | Boss Battle -- quebre em quests menores! |

---

## 7. Ferramentas na Pratica

### 7.1 GitHub Issues como Quests

```markdown
# Issue #42: Implementar filtro de tarefas por status

## Descricao
Como usuario, eu quero filtrar tarefas por status para ver rapidamente
o que falta fazer.

## Criterios de Aceitacao
- [ ] Botoes "Todas", "Pendentes", "Concluidas" no topo da lista
- [ ] Filtro funciona em tempo real (sem reload)
- [ ] URL muda para refletir o filtro (ex: /tarefas?status=pendente)
- [ ] Testes unitarios cobrindo todos os cenarios

## Story Points: 5
## Labels: feature, frontend, sprint-3
## Assignee: @luigi
```

### 7.2 GitHub Projects como Quadro de Quests

GitHub Projects permite criar boards visuais conectados a Issues e PRs:

```
Sprint 3 -- Board View:
+-----------+-------------+-----------+----------+--------+
| Backlog   | Sprint Todo | Doing     | Review   | Done   |
+-----------+-------------+-----------+----------+--------+
| #45 Dark  | #42 Filtro  | #40 CRUD  | #39 Auth | #38 UI |
| #46 Export| #43 Testes  | #41 API   |          | #37 DB |
| #47 Notif |             |           |          | #36 CI |
+-----------+-------------+-----------+----------+--------+
```

### 7.3 Azure Boards

O **Azure Boards** e a ferramenta de gerenciamento de projetos do Azure DevOps:

```
Azure Boards oferece:
- Work Items (User Stories, Tasks, Bugs)
- Sprints com capacidade do time
- Quadro Kanban drag-and-drop
- Burndown charts (grafico de progresso)
- Integracao com GitHub e Azure Repos
```

---

## 8. Cerimonias Agile: Os Rituais do Time

### 8.1 Daily Standup: Reuniao Relampago

**Quando:** Todo dia, mesmo horario
**Duracao:** 15 minutos MAXIMO
**Quem:** Todo o time de desenvolvimento

Cada pessoa responde 3 perguntas:
1. **O que fiz ontem?**
2. **O que vou fazer hoje?**
3. **Tenho algum impedimento?**

```
Daily do Time TodoApp:

Mario (Sofia): "Ontem terminei a validacao do formulario.
                Hoje vou integrar com a API. Sem impedimentos."

Luigi: "Ontem trabalhei no componente de filtro.
        Hoje continuo. Impedimento: preciso dos dados de
        teste do Toad."

Toad: "Ontem criei a migration do banco.
       Hoje vou popular com dados de teste para o Luigi.
       Sem impedimentos."

Yoshi: "Ontem configurei o pipeline de staging.
        Hoje vou testar o deploy automatico.
        Impedimento: preciso de acesso ao Azure -- Toadette
        pode resolver?"

Toadette (Scrum Master): "Anotado! Vou pedir o acesso para
                          o Yoshi agora mesmo."
```

> **ANALOGIA MARIO:** Daily Standup e o **huddle rapido** do time entre fases. Todos se reunem por 15 minutos, dizem em que fase estao, para onde vao, e se tem algum obstaculo no caminho. E rapido, de pe (standup), e sem enrolacao.

### 8.2 Sprint Planning: Planejamento da Dungeon

**Quando:** Inicio do Sprint
**Duracao:** 2-4 horas
**O que acontece:**

1. Product Owner apresenta as quests mais importantes do Backlog
2. Time discute cada quest e estima o esforco (Story Points)
3. Time seleciona quais quests cabem no Sprint
4. Time define COMO vai implementar cada quest

```
Sprint Planning -- Sprint 3:

Product Owner: "As prioridades sao: filtro de tarefas (#42),
                testes automatizados (#43), e melhorar
                performance da API (#44)."

Time estima: #42 = 5 pontos, #43 = 3 pontos, #44 = 8 pontos
Velocidade do time: ~13 pontos por Sprint
Time seleciona: #42 + #43 + #44 = 16 pontos (demais!)
Ajuste: #42 + #43 = 8 pontos + task bonus se sobrar tempo
```

### 8.3 Sprint Review: O Debrief da Boss Battle

**Quando:** Final do Sprint
**Duracao:** 1-2 horas
**O que acontece:**

1. Time faz **demo** do que construiu (software funcionando!)
2. Stakeholders testam e dao feedback
3. Product Owner aceita ou rejeita os incrementos
4. Discussao sobre proximas prioridades

> **ANALOGIA MARIO:** Sprint Review e o **debrief apos a Boss Battle**. O time se reune, mostra o replay da luta: "Olha, derrotamos o Boom Boom usando essa estrategia. Luigi fez o ataque principal, Toad curou, Yoshi flanqueou." O publico (stakeholders) assiste e comenta: "Legal, mas na proxima vez tentem atacar pela direita."

### 8.4 Sprint Retrospective: Licoes Aprendidas

**Quando:** Apos a Sprint Review
**Duracao:** 1-1.5 hora
**O que acontece:**

Tres perguntas:
1. **O que deu certo?** (continuar fazendo)
2. **O que deu errado?** (parar de fazer)
3. **O que podemos melhorar?** (tentar na proxima)

```
Retro do Sprint 3:

Deu certo:
  + Daily standups estao rapidas e uteis
  + Luigi e Toad trabalharam bem juntos
  + Deploy automatico funcionou de primeira

Deu errado:
  - Subestimamos a tarefa #44 (estimamos 8, gastamos 13)
  - Code reviews demoraram (ficaram 3 dias no "In Review")
  - Toadette ficou doente e ninguem facilitou a daily

Melhorar:
  -> Quebrar tarefas grandes em menores
  -> Combinar horario fixo para code review (1h/dia)
  -> Ter backup do Scrum Master
```

---

## 9. Erros Comuns em Agile

| Erro | Problema | Analogia Mario | Solucao |
|------|---------|----------------|---------|
| **Daily vira reuniao longa** | 15 min vira 1 hora de discussao | Huddle vira palestra | Timer de 15 min, discussoes fora da daily |
| **Sprint sem entrega** | Nada pronto ao final do sprint | Dungeon run sem completar nenhuma quest | Quests menores, foco em TERMINAR |
| **Backlog infinito** | 200+ itens sem priorizacao | Quest board com 500 missoes | Limpar e priorizar regularmente |
| **Scrum sem retrospectiva** | Time nunca melhora | Nunca analisa o replay da batalha | Retro e OBRIGATORIA |
| **Estimativas como promessa** | "Voce PROMETEU 5 pontos!" | Transformar estimativa em contrato | Story Points sao estimativas, nao promessas |

---

## 10. Tabela Final de Resumo

| Conceito | Explicacao Tecnica | Analogia Mario |
|----------|-------------------|----------------|
| **Agile** | Filosofia de desenvolvimento iterativo e adaptativo | Construir o jogo uma fase de cada vez, com feedback |
| **Scrum** | Framework com sprints, papeis e cerimonias | Torneio com rodadas cronometradas e regras |
| **Sprint** | Ciclo de trabalho de 1-4 semanas | Dungeon run cronometrada (2 semanas) |
| **Kanban** | Metodo visual de fluxo continuo | Quadro de quests (To Do, Doing, Done) |
| **Product Backlog** | Lista de tudo que precisa ser feito | Lista completa de quests do jogo |
| **Sprint Backlog** | O que sera feito neste Sprint | Quests desta dungeon run |
| **Daily Standup** | Reuniao diaria de 15 min | Huddle rapido do time entre fases |
| **Sprint Review** | Demo e feedback no final do Sprint | Debrief apos a Boss Battle |
| **Retrospective** | Reflexao sobre o que melhorar | Licoes aprendidas da batalha |
| **User Story** | Descricao de funcionalidade do ponto de vista do usuario | Descricao de quest no quadro de missoes |
| **Story Points** | Estimativa de complexidade | Nivel de dificuldade do inimigo |
| **WIP Limit** | Limite de trabalho simultaneo | Maximo de quests ativas ao mesmo tempo |
| **Product Owner** | Define prioridades | Princesa Peach -- define a missao |
| **Scrum Master** | Facilita e remove obstaculos | Lakitu -- observa, guia, sinaliza |
| **Velocity** | Pontos entregues por Sprint | XP ganhada por dungeon run |

---

## Referencias

1. Manifesto Agile: https://agilemanifesto.org/
2. Scrum Guide (oficial): https://scrumguides.org/
3. Kanban University: https://kanban.university/
4. GitHub Projects: https://docs.github.com/issues/planning-and-tracking-with-projects
5. Azure Boards: https://learn.microsoft.com/azure/devops/boards/
6. Mountain Goat Software -- User Stories: https://www.mountaingoatsoftware.com/agile/user-stories
7. Atlassian -- Scrum vs Kanban: https://www.atlassian.com/agile/kanban/kanban-vs-scrum

---

*"Todo time precisa de regras. Sem regras, ate o melhor time do Mushroom Kingdom cai no caos. Scrum e Kanban nao sao burocracias -- sao as regras do torneio que transformam 5 aventureiros desorganizados em uma equipe lendaria."*

*Proximo Warp Pipe: Fase 2-6 -- A Alianca entre Classes: DevOps e IaC*
