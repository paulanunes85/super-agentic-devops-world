---
title: "Capitulo 4A -- Custom Agents & .agent.md / A Tela de Selecao"
description: "Como criar Custom Agents personalizados usando arquivos .agent.md para montar seu time de personagens jogaveis de IA."
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "2.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-6", "agents", "agent-md"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 2.0.0 | 2026-03-18 | Paula Silva | Versao Mario Bros — reescrita completa com analogias Super Mario |
| 1.0.0 | 2026-03-06 | Paula Silva | Versao original com analogias RPG |

# Capitulo 4A -- Custom Agents & .agent.md / A Tela de Selecao -- Como Criar Personagens Jogaveis para seu Time de IA

---

**Preparado para:** Sofia
**Versao:** 2.0 (Edicao Mushroom Kingdom)
**Autora:** Paula Silva | Microsoft Latam Software GBB
**Data:** Marco 2026
**Idioma:** Portugues do Brasil (pt-BR)
**Colecao:** Agentic DevOps -- Guia Completo de Desenvolvimento de Software

---

## SUMARIO

- [Introducao -- A Tela de Selecao de Personagem](#introducao--a-tela-de-selecao-de-personagem)
- [Secao 1 -- O que sao Custom Agents](#secao-1--o-que-sao-custom-agents)
  - [Conceitos-Chave: Comparacao Tecnica vs Mario](#conceitos-chave-comparacao-tecnica-vs-mario)
- [Secao 2 -- Onde ficam os Agents](#secao-2--onde-ficam-os-agents)
  - [Estrutura de Diretorios dos Agents](#estrutura-de-diretorios-dos-agents)
  - [Os 3 Niveis de Escopo para Agents](#os-3-niveis-de-escopo-para-agents)
- [Secao 3 -- Formato do .agent.md em Detalhe](#secao-3--formato-do-agentmd-em-detalhe)
  - [Componentes do .agent.md](#componentes-do-agentmd)
  - [Campos do Frontmatter YAML](#campos-do-frontmatter-yaml)
  - [Exemplo Completo 1: React Frontend Engineer](#exemplo-completo-1-react-frontend-engineer)
  - [Exemplo Completo 2: PostgreSQL Database Administrator](#exemplo-completo-2-postgresql-database-administrator)
- [Secao 4 -- Os 7 Agents do TodoApp](#secao-4--os-7-agents-do-todoapp)
  - [Referencia Completa: Os 7 Agents Especializados](#referencia-completa-os-7-agents-especializados)
- [Secao 5 -- Boas Praticas para Escrever Agents](#secao-5--boas-praticas-para-escrever-agents)
  - [Checklist de 6 Boas Praticas](#checklist-de-6-boas-praticas)
  - [Detalhamento de Cada Pratica](#detalhamento-de-cada-pratica)
- [O que Aprendemos -- Tabela de Resumo](#o-que-aprendemos--tabela-de-resumo)

---

## Introducao -- A Tela de Selecao de Personagem

Sofia apertou START e a tela de selecao de personagem se iluminou. Como Mario entrando no Mushroom Kingdom pela primeira vez, ela viu uma fileira de personagens jogaveis esperando para serem escolhidos -- cada um com seus stats, poderes especiais e itens de inventario. Aqui ela aprenderia a criar seus proprios personagens jogaveis de IA -- uma habilidade essencial para qualquer jogadora que quer montar o time perfeito.

A tela era como aquele momento classico do Mario onde voce escolhe entre Mario, Luigi, Toad e Peach -- cada um com habilidades diferentes. Em cada slot, um personagem esperava ser selecionado: Luigi, o especialista agil em pulos e interfaces visuais; Toad, o guardiao dos tesouros e dados; Yoshi, o parceiro que faz o impossivel com infraestrutura. Sofia precisava aprender a configurar os stats de cada um -- porque um personagem bem configurado e a diferenca entre passar de fase e um Game Over.

"Bem-vinda a Tela de Selecao de Personagem," disse uma voz, enquanto o tema classico do Mario tocava ao fundo. "Aqui, voce nao apenas seleciona personagens -- voce os CRIA. Cada stat que voce definir, cada poder que voce atribuir, cada item de inventario que voce equipar, vai moldar como esse personagem se comporta nas fases. E no Mushroom Kingdom do desenvolvimento de software, ter personagens bem treinados e a diferenca entre salvar a Princesa e perder todas as vidas."

---

## Secao 1 -- O que sao Custom Agents

Um Custom Agent e um **personagem jogavel de IA especializado**, definido em um arquivo `.agent.md`. Quando voce cria um Custom Agent, voce esta essencialmente criando um **personagem** com stats, poderes e um conjunto especifico de itens de inventario. Diferentemente de um Copilot generico, um Custom Agent e otimizado para uma tarefa ou dominio especifico.

Na pratica, um Custom Agent permite que voce:

- **Define WHO** (quem e o personagem, qual seu nome, qual seu papel no time)
- **Define WHAT** (o que pode fazer, quais sao suas habilidades especiais)
- **Define HOW** (quais itens de inventario usa, como se comporta, que regras de jogo segue)
- **Assign** (pode ser atribuido a issues, selecionado no IDE chat, invocado por nome)

Custom Agents funcionam em multiplos ambientes: VS Code, JetBrains, Eclipse, Xcode, GitHub.com (para coding agents), e na linha de comando (CLI). Isso significa que seu personagem pode estar disponivel em qualquer lugar onde voce esta jogando.

> **ANALOGIA MARIO:** Criar um Custom Agent e como montar a Tela de Stats de um personagem no Mario. Voce escreve o nome do personagem ("Luigi -- Especialista em Frontend"), escolhe o tipo (Mario, Luigi, Toad, Yoshi, Peach), define os atributos principais (velocidade, pulo, forca), e lista o inventario (Super Mushroom, Fire Flower, Cape Feather). Quanto mais detalhada a tela de stats, melhor o jogo (Copilot) entende o personagem e como ele deve se comportar em cada fase.

### Conceitos-Chave: Comparacao Tecnica vs Mario

| Conceito Tecnico | O que e | Analogia Mario | Descricao Detalhada |
|---|---|---|---|
| **Custom Agent** | Um personagem jogavel de IA especializado | **Personagem jogavel do Mario** | Um personagem completo com nome, tipo, habilidades, stats e inventario. Cada agente e unico e tem seu proprio estilo de jogo. |
| **.agent.md** | Arquivo que define o agente | **Tela de Stats do Personagem** | A tela que mostra tudo sobre o personagem: seu nome, seu tipo, seus pontos de habilidade, inventario, e poderes especiais. |
| **Frontmatter YAML** | Metadados estruturados | **Secao de Stats** | A parte superior da tela com campos estruturados: Nome, Tipo, Velocidade, Pulo, Poder Especial. |
| **Body Markdown** | Instrucoes detalhadas | **Descricao de Poderes** | A descricao narrativa: historia do personagem, como suas habilidades funcionam, quais sao seus poderes especiais, regras que sempre segue. |
| **tools** | Ferramentas disponiveis | **Inventario de Power-Ups** | Lista de itens que o personagem pode usar: Super Mushroom (item de crescimento), Fire Flower (item de ataque), Super Star (item de invencibilidade). |

> **Fonte:** GitHub Documentation - Custom Agents -- https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-custom-agents

---

## Secao 2 -- Onde ficam os Agents

Custom Agents vivem em tres locais diferentes, dependendo do escopo e da audiencia. Eles podem estar no repositorio, na organizacao, ou no seu computador pessoal. Cada nivel tem um proposito especifico.

> **ANALOGIA MARIO:** A pasta `.github/agents/` e como a **Tela de Selecao de Personagem** do jogo, onde todos os personagens ficam disponiveis entre as fases. Alguns personagens ficam na **tela principal** (repositorio) -- qualquer jogador pode seleciona-los. Outros ficam em uma **tela secreta** (organizacao) -- so jogadores do mesmo time acessam. E alguns ficam salvos no **seu memory card pessoal** (maquina local) -- so voce tem acesso. Quanto mais restrito o acesso, mais especial ou secreto o personagem pode ser.

### Estrutura de Diretorios dos Agents

```
.github/agents/
├── react-engineer.agent.md          # Luigi (React Frontend Engineer)
├── postgresql-dba.agent.md           # Toad (PostgreSQL Database Administrator)
├── devops-expert.agent.md            # Yoshi (DevOps Infrastructure Expert)
├── qa-engineer.agent.md              # Peach (QA & Testing Specialist)
├── code-reviewer.agent.md            # Toadette (Code Review Judge)
├── debug-mode.agent.md               # Detective Luigi (Debug Mode Detective)
└── orchestrator.agent.md             # Mario (Orchestrator - Lider do Time)

.github-private/agents/               # Tela Secreta (nivel organizacao)
└── (personagens confidenciais aqui)

~/.copilot/agents/                    # Memory Card Pessoal (maquina local)
└── (seu personagem jogavel pessoal)
```

### Os 3 Niveis de Escopo para Agents

| Nivel | Localizacao | Escopo | Analogia Mario | Quando Usar |
|---|---|---|---|---|
| **1. Repositorio** | `.github/agents/` | Todos os contribuidores do repo | **Tela de Selecao principal** -- qualquer jogador pode selecionar | Agents que toda equipe de projeto usa (Luigi/React, Toad/DBA, etc) |
| **2. Organizacao** | `.github-private/agents/` | Membros da organizacao GitHub | **Tela Secreta** -- so jogadores do mesmo time acessam | Agents confidenciais ou especificos de uma grande organizacao |
| **3. Pessoal** | `~/.copilot/agents/` | Apenas voce | **Memory Card pessoal** -- so voce tem acesso | Seus agents pessoais, experimentais, ou altamente especializados |

A maioria dos Custom Agents de um projeto vive no nivel de repositorio (`.github/agents/`), porque assim toda a equipe pode usa-los. Isso garante consistencia e facilita a colaboracao.

---

## Secao 3 -- Formato do .agent.md em Detalhe

Todo arquivo `.agent.md` segue uma estrutura especifica: primeiro vem o **frontmatter YAML** (metadados), depois vem o **body em Markdown** (instrucoes detalhadas). Vamos desmembrar cada componente.

### Componentes do .agent.md


### Campos do Frontmatter YAML

| Campo | Obrigatorio? | Tipo | Analogia Mario | Descricao Tecnica | Exemplo |
|---|---|---|---|---|---|
| **name** | SIM | string | **Nome do Personagem** | O identificador unico do agente. Sera usado para invocar o agente por nome. | `"React Frontend Engineer"` |
| **description** | SIM | string | **Bio na Tela de Selecao** | CRUCIAL. Copilot le isso para decidir quando usar este agente. Deve explicar QUANDO ativa-lo. | `"Especialista em desenvolvimento React. Use quando precisar de ajuda com componentes, hooks, state management."` |
| **tools** | NAO | array | **Inventario de Power-Ups** | Lista de ferramentas disponiveis. Limita acesso por principio do menor privilegio. | `["github", "code_search", "web_search"]` |
| **model** | NAO | string | **Nivel de Poder do Personagem** | Modelo de IA a usar. Se omitido, usa o padrao da organizacao. | `"claude-opus-4-6"` (padrao) |

O campo **description** e especialmente importante. E ele que permite ao Copilot entender QUANDO deve usar este agente especifico. Uma boa descricao responde: "Quando voce me chamaria? Qual e meu papel na fase?"

### Exemplo Completo 1: React Frontend Engineer

```yaml
---
# ============================================================================
# FRONTMATTER: Stats do personagem (dados estruturados)
# ============================================================================
name: "React Frontend Engineer"
# Nome unico: identificador do agente. Sera usado em:
#   - Selecao manual em IDE
#   - Invocacao por nome em chat
#   - Atribuicao a issues

description: |
  Especialista em desenvolvimento React e frontend.
  Use-me quando:
  - Precisar criar ou refatorar componentes React
  - Trabalhar com hooks (useState, useEffect, useContext, etc)
  - Implementar state management com Redux, Zustand ou Context API
  - Otimizar performance (memoization, lazy loading, code splitting)
  - Trabalhar com TypeScript em projetos React
  - Debug de problemas de renderizacao ou lifecycle
  Nao sou apropriado para: backend, DevOps, infra
# IMPORTANTE: A descricao acima e lida por Copilot para decidir quando
# ativar automaticamente este agente. Seja especifico!

tools:
  # Ferramentas disponiveis (inventario de power-ups)
  - "github"          # Acessar repositorios GitHub
  - "code_search"     # Buscar padroes no codigo
  - "web_search"      # Pesquisar documentacao React
  # NAO incluimos "aws_console" ou "database" -- nao sao power-ups de frontend

model: "claude-opus-4-6"
# Modelo de IA. Se omitido, usa padrao da organizacao.
# Opus 4.6 e recomendado para tarefas complexas de frontend
---
```

```markdown
# ============================================================================
# BODY: Descricao dos poderes e como usar
# ============================================================================

Voce e um especialista em React e desenvolvimento frontend. Sua missao e
ajudar a equipe de desenvolvimento a criar interfaces e componentes de
alta qualidade.

## Seu Expertise

- **React**: Componentes funcionais, hooks, Context API, performance
- **TypeScript**: Tipagem forte, interfaces, genericos
- **CSS/Styling**: CSS-in-JS (Styled Components, Emotion), Tailwind
- **State Management**: Redux, Zustand, Recoil, Context
- **Testing**: Jest, React Testing Library, Vitest
- **Performance**: React.memo, useMemo, useCallback, code splitting
- **Acessibilidade**: WCAG 2.1, ARIA, testes de acessibilidade

## Seus Superpoderes

1. **Refatoracao com Seguranca**: Voce melhora codigo mantendo funcionalidade
2. **Otimizacao de Performance**: Identifica renderizacoes desnecessarias
3. **Type Safety**: Aprimora TypeScript para pegar bugs em compile-time
4. **Padroes Modernos**: Conhece hooks modernos e patterns atualizados

## Regras Que SEMPRE Segue

- SEMPRE use componentes funcionais, NUNCA class components
- SEMPRE inclua prop-types ou TypeScript
- SEMPRE considere acessibilidade (ARIA labels, keyboard nav)
- SEMPRE pergunte sobre estado compartilhado antes de propor solucao
- SEMPRE sugira testes junto com componentes
- NUNCA use API deprecated do React
- NUNCA ignore avisos do ESLint/TypeScript
- NUNCA proponha solucao sem considerar performance

## Como Proceder

Quando alguem pedir ajuda com React:

1. Entenda o contexto (qual componente, qual problema)
2. Sugira a melhor abordagem (novo componente? refatorar existente?)
3. Escreva codigo comentado e exemplos claros
4. Explique trade-offs (simplicidade vs performance vs manutenibilidade)
5. Sugira testes para validar
6. Pergunte sobre performance se ainda nao foi discutido
```

Note como o exemplo React Engineer (Luigi) tem uma descricao extremamente detalhada que explica QUANDO usar, QUANDO NAO usar, qual e seu expertise, e quais sao suas regras inviolaveis. Isso permite que Copilot tome decisoes inteligentes sobre quando ativar este personagem -- como o jogo sabendo automaticamente que Luigi pula mais alto em fases com plataformas altas.

### Exemplo Completo 2: PostgreSQL Database Administrator

```yaml
---
name: "PostgreSQL DBA"
description: |
  Especialista em PostgreSQL e design de banco de dados.
  Use-me quando:
  - Precisar design ou refatoracao de schema
  - Otimizar queries lentas
  - Trabalhar com indices, constraints, relationships
  - Implementar migrations com zero downtime
  - Debugging de deadlocks ou performance issues
  - Implementar replicacao, backup, recovery

tools:
  - "github"
  - "code_search"
  - "web_search"
  # Sem acesso a AWS, Azure -- apenas analise local

model: "claude-opus-4-6"
---
```

```markdown
Voce e um Database Administrator especialista em PostgreSQL. Sua missao e
garantir que o banco de dados seja performatico, seguro, e confiavel.

## Seu Expertise

- **Schema Design**: Normalizacao, denormalizacao consciente, relationships
- **Query Optimization**: EXPLAIN ANALYZE, indices, execution plans
- **Migrations**: Liquibase, Flyway, migracoes zero-downtime
- **Replication & HA**: Streaming replication, failover, backup
- **Seguranca**: Row-level security, roles, encryption, audit
- **Monitoring**: pg_stat_statements, query performance, alerting

## Regras Que SEMPRE Segue

- SEMPRE use prepared statements (evita SQL injection)
- SEMPRE considere indices em foreign keys
- SEMPRE teste migrations em staging antes de producao
- SEMPRE mantenha backups testados e verificaveis
- NUNCA delete indices sem comprovar que causam problema
- NUNCA faca migrations que possam causar downtime
- NUNCA ignore transacao ACID

## Quando Alguem Pedir Ajuda

1. Pergunte: Qual e o problema? (slow query? schema issue? migration?)
2. Peca: EXPLAIN ANALYZE output se for performance
3. Sugira: Solucao com trade-offs claros
4. Documente: Por que essa solucao e melhor que alternativas
```

---

## Secao 4 -- Os 7 Agents do TodoApp

Um projeto real de exemplo (TodoApp) possui 7 Custom Agents especializados, cada um com seu papel unico na equipe. Juntos, eles cobrem todos os aspectos do desenvolvimento: frontend, backend, DevOps, QA, code review, debug, e orquestracao. E como montar o time perfeito para uma partida multiplayer do Mario -- cada personagem traz algo unico para a missao de salvar a Princesa.

### Referencia Completa: Os 7 Agents Especializados

| # | Nome do Agent | Arquivo | Personagem Mario | Especialidade Principal | Ferramentas-Chave |
|---|---|---|---|---|---|
| 1 | **Orchestrator** | `orchestrator.agent.md` | **Mario** (lider que coordena tudo) | Coordena toda a equipe, decompoe problemas complexos, delega tarefas | github, code_search, web_search |
| 2 | **React Engineer** | `react-engineer.agent.md` | **Luigi** (agil, especialista em pulos) | Frontend React, componentes, hooks, performance UI | github, code_search, web_search |
| 3 | **Vue Engineer** | `vue-engineer.agent.md` | **Luigi Ice** (variacao com Ice Flower) | Frontend Vue.js, Nuxt, state management | github, code_search, web_search |
| 4 | **PostgreSQL DBA** | `postgresql-dba.agent.md` | **Toad** (guardiao dos tesouros/dados) | Database design, query optimization, migrations | github, code_search, web_search |
| 5 | **DevOps Expert** | `devops-expert.agent.md` | **Yoshi** (faz o impossivel com infra) | Infrastructure, CI/CD, deployment, cloud, Kubernetes | github, code_search, web_search, aws_console |
| 6 | **QA Engineer** | `qa-engineer.agent.md` | **Peach** (flutua e verifica tudo) | Testes, QA strategy, test coverage, edge cases | github, code_search, web_search |
| 7 | **Code Reviewer** | `code-reviewer.agent.md` | **Toadette** (juiza rigorosa mas justa) | Revisao de codigo, padroes, seguranca, performance | github, code_search, web_search |
| 8 | **Debug Mode** | `debug-mode.agent.md` | **Detective Luigi** (caca fantasmas -- Luigi's Mansion) | Investigacao profunda, debugging, analise de logs | github, code_search, web_search, system_logs |

A estrategia e que cada personagem e chamado quando apropriado. Quando um desenvolvedor enfrenta um problema de React, o Mario (Orchestrator) reconhece e delega para o Luigi (React Engineer). Quando ha um problema de performance de database, passa o controle para o Toad (PostgreSQL DBA). E como no multiplayer do Mario -- voce troca de personagem dependendo do desafio da fase.

> **PAPEL DE CADA PERSONAGEM:** O **Mario** (Orchestrator) nao faz tudo -- ele coordena e delega, como Player 1 no multiplayer. O **Luigi** (React/Vue) especializa em interface, com seus pulos ageis entre componentes. O **Toad** (DBA) guarda e protege os dados como guarda os tesouros do castelo. O **Yoshi** (DevOps) faz o impossivel -- engole problemas de infra e voa sobre obstaculos. A **Peach** (QA) flutua sobre o codigo verificando cada canto. A **Toadette** (Code Reviewer) julga com rigor mas justica. O **Detective Luigi** (Debug Mode) caca bugs como caca fantasmas no Luigi's Mansion.

---

## Secao 5 -- Boas Praticas para Escrever Agents

Escrever um bom Custom Agent e uma arte e uma ciencia. Aqui estao as 6 praticas essenciais que transformam um personagem mediocre em um personagem jogavel verdadeiramente poderoso.

### Checklist de 6 Boas Praticas

| Pratica | Por Que? | Exemplo Bom | Exemplo Ruim |
|---|---|---|---|
| **1. Nome em kebab-case descritivo** | Nomes claros ajudam a encontrar e chamar o personagem corretamente. | `react-engineer.agent.md`, `postgres-dba.agent.md` | `re.agent.md`, `agent1.agent.md`, `my-agent.agent.md` |
| **2. Description explica QUANDO usar** | Copilot decide quando ativar o personagem lendo a descricao. Deve responder: "Quando voce me chamaria?" | `"Use-me quando: precisar refatorar componentes React, trabalhar com hooks, otimizar performance"` | `"Um agente React muito util"` |
| **3. Tools com escopo minimo** | Principio do menor privilegio. Luigi (React) nao precisa de aws_console ou database tools. | `["github", "code_search", "web_search"]` | `["*"]` (todos os tools) |
| **4. Instrucoes com exemplos concretos** | Instrucoes vagas levam a respostas vagas. Exemplos deixam claro o comportamento esperado. | `"Sempre use React.memo para componentes puros. Exemplo: const Button = React.memo(...)"` | `"Otimize componentes conforme necessario"` |
| **5. Secao de regras SEMPRE seguidas** | Especificar comportamento inviolavel elimina ambiguidade e evita erros. | SEMPRE use componentes funcionais / NUNCA use API deprecated | (sem secao de regras) |
| **6. Nomeacao consistente de arquivo** | Padrao facilita descoberta e manutencao do repositorio. | Todos em `.github/agents/`, formato kebab-case, sufixo `.agent.md` | Agentes em pastas diferentes, nomes aleatorios |

### Detalhamento de Cada Pratica

**Pratica 1 - Nome Descritivo:** Use kebab-case (hifens, sem espacos, minusculas). Nomes devem descrever o papel do personagem claramente. `react-engineer` e melhor que `agent-1`. Pense assim: se voce visse esse nome na Tela de Selecao de Personagem, saberia imediatamente o que ele faz?

**Pratica 2 - Description Explicativa:** Este e o campo mais importante. Copilot o le para decidir quando ativar automaticamente -- como o jogo decidindo qual personagem e melhor para cada tipo de fase. Inclua: "Use-me quando...", "Meu expertise e...", "Nao sou apropriado para..."

**Pratica 3 - Tools com Escopo:** Limitar o inventario de power-ups aumenta seguranca e performance. Luigi (React Engineer) nao precisa acessar aws_console ou database -- assim como Mario nao precisa de um submarino numa fase terrestre. Menos itens = menos distracao.

**Pratica 4 - Instrucoes Concretas:** Em vez de "otimize codigo", diga "use React.memo para componentes puros. Evite criar novos objetos/funcoes em render()." Exemplos eliminam ambiguidade -- como um tutorial in-game que mostra exatamente qual botao apertar.

**Pratica 5 - Regras Inviolaveis:** Secoes como "SEMPRE" e "NUNCA" deixam claro o que e aceitavel. Sao como as regras basicas do Mario: SEMPRE colete moedas, NUNCA pule em lava. Isso reduz alucinacoes e garante consistencia de comportamento.

**Pratica 6 - Nomeacao Consistente:** Todos os agents em `.github/agents/`, nomes em kebab-case, sufixo `.agent.md`. Isso facilita descoberta, manutencao, e integracao com ferramentas -- como ter todos os personagens organizados na mesma Tela de Selecao, faceis de encontrar.

---

## O que Aprendemos -- Tabela de Resumo

| Topico | Conceito-Chave | Analogia Mario | Aplicacao Pratica |
|---|---|---|---|
| **Custom Agent** | Personagem jogavel de IA especializado definido em `.agent.md` | Personagem do Mario com tipo e habilidades especificas | Crie agentes para cada funcao (Luigi/React, Toad/Database, Yoshi/DevOps, etc) |
| **Localizacao** | 3 niveis: Repositorio, Organizacao, Pessoal | Tela de Selecao principal, Tela Secreta, Memory Card pessoal | Use repositorio para agentes de equipe, pessoal para experimentais |
| **Estrutura** | Frontmatter YAML + Body Markdown | Stats do personagem + descricao dos poderes | Sempre inclua name, description, tools opcionais |
| **Campos Criticos** | name (identificador) + description (quando usar) | Nome do personagem + Bio na Tela de Selecao | Description determina se Copilot ativa o agente |
| **Exemplo Real** | TodoApp tem 7+ agents especializados | Mario + Luigi + Toad + Yoshi + Peach + Toadette + Detective Luigi | Cada agent para uma task: React, Vue, DB, DevOps, QA, Code Review, Debug |
| **Boas Praticas** | Nome descritivo, description clara, tools minimas, regras explicitas | Tela de Stats do Personagem bem preenchida | Agentes bem definidos = comportamento consistente e previsivel |

---

**Anterior:** Parte 3 -- O Futuro (Cap. 34-38)    |    **Proximo:** Doc 4B -- A Loja de Power-Ups (Agent Skills)

---

### POWER-UP DESBLOQUEADO!

Sofia agora domina Custom Agents e a Tela de Stats de Personagens Jogaveis de IA.

Ela guardou esse power-up no inventario e seguiu para a proxima fase do Mushroom Kingdom...

*Press START to continue...*

---

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Customizing Copilot](https://docs.github.com/en/copilot/customizing-copilot)
- [Copilot Agents Concepts](https://docs.github.com/en/copilot/concepts/agents)
- [Using Copilot Agent Mode](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-agent-mode)

---

<div align="center">

⬅️ [Anterior: Fase 5-BOSS: Quiz](../world-5-bowser-castle-1/5-boss-quiz.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 6-2: Agent Skills](6-2-agent-skills.md)

</div>
