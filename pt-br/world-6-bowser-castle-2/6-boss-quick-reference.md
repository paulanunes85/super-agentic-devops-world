---
title: "Capitulo 4H — Referencia Rapida (Cheat Sheet) / O Mapa Completo do Mushroom Kingdom"
description: "Guia de referencia rapida com todos os conceitos, comandos e configuracoes do Agentic DevOps em um unico lugar."
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "2.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-6", "cheat-sheet", "reference"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 2.0.0 | 2026-03-18 | Paula Silva | Versao Mario Bros — reescrita completa com analogias Super Mario |
| 1.0.0 | 2026-03-06 | Paula Silva | Versao original com analogias RPG |

# Capitulo 4H — Referencia Rapida (Cheat Sheet)
## O Mapa Completo do Mushroom Kingdom — Tudo que Voce Precisa Saber em um So Lugar

---

**Versao:** 2.0 — Edicao Mushroom Kingdom
**Autora:** Paula Silva | Microsoft Latam Software GBB
**Preparado para:** Sofia
**Data:** Marco 2026
**Idioma:** Portugues do Brasil (pt-BR)
**Colecao:** Agentic DevOps — Edicao Super Mario Bros

---

## SECAO 0: Introducao

### O Mapa do Mushroom Kingdom

Sofia descobriu o **Mapa Completo do Mushroom Kingdom** — um mapa detalhado que mostra todas as fases, Warp Zones, Power-Ups, personagens e segredos do vasto mundo Agentic DevOps. Este documento e sua referencia rapida, sua bussola magica para navegar em qualquer situacao, seu guia definitivo de consulta.

Aqui voce encontrara tudo o que aprendeu em um so lugar, organizado como o mapa de um jogo do Mario: fases claramente marcadas, itens identificados, e caminhos secretos revelados. Trata-se de uma ferramenta de consulta rapida, um **cheat sheet** para salvar o dia quando voce precisar lembrar daquele detalhe especifico.

> Lembra aqueles mapas que vinham nos manuais dos jogos antigos do Mario? Este documento e EXATAMENTE isso — mas para Agentic DevOps!

---

## SECAO 1: Estrutura de Diretorios COMPLETA

### O Mapa do Mushroom Kingdom — Arvore de Arquivos

Aqui esta a arvore completa do ecossistema com CADA arquivo explicado. Este e o coracao da arquitetura.

```
todo-app-workshop/                              Mushroom Kingdom (o mundo inteiro)
|
+-- .github/
|   |
|   +-- agents/                                 Tela de Selecao de Personagem
|   |   +-- orchestrator.agent.md               -> Mario (Player 1, lider do time)
|   |   +-- react-engineer.agent.md             -> Luigi (agil, pula alto, frontend)
|   |   +-- dba.agent.md                        -> Toad (guardiao do castelo e dados)
|   |   +-- devops-expert.agent.md              -> Yoshi (voa, engole inimigos, infra)
|   |   +-- qa-engineer.agent.md                -> Peach (flutua, testa tudo)
|   |   +-- code-reviewer.agent.md              -> Toadette (juiza rigorosa)
|   |   +-- debug-mode.agent.md                 -> Detective Luigi (caca bugs)
|   |
|   +-- skills/                                 Loja de Power-Ups
|   |   +-- workflow-feature/SKILL.md           -> Super Mushroom (criar algo novo)
|   |   +-- workflow-bugfix/SKILL.md            -> Super Star (corrigir bug rapido)
|   |   +-- workflow-deploy/SKILL.md            -> Cape Feather (voar ate producao)
|   |   +-- workflow-codereview/SKILL.md        -> Fire Flower (atacar problemas)
|   |   +-- conventional-commit/SKILL.md        -> Coin (padrao universal)
|   |   +-- jest-testing/SKILL.md               -> 1-UP Mushroom (vida extra)
|   |   +-- multi-stage-dockerfile/SKILL.md     -> Mini Mushroom (pequeno e eficiente)
|   |   +-- postgresql-review/SKILL.md          -> Ice Flower (congela problemas)
|   |
|   +-- instructions/                           Regras do Jogo
|   |   +-- backend.instructions.md             -> Regras da fase subaquatica
|   |   +-- frontend.instructions.md            -> Regras da fase aerea
|   |   +-- database.instructions.md            -> Regras do castelo
|   |
|   +-- prompts/                                Warp Pipes (canos verdes)
|   |   +-- new-component.prompt.md             -> Cano para area secreta de blocos
|   |   +-- add-endpoint.prompt.md              -> Cano para area subterranea
|   |   +-- create-migration.prompt.md          -> Cano para area do castelo
|   |
|   +-- copilot-instructions.md                 Gravidade (regra universal, sempre ativa)
|
+-- .vscode/
|   +-- mcp.json                                Mapa dos Warp Zones
|
+-- frontend/                                   Fases Aereas (mundo do Luigi)
+-- backend/                                    Fases Subaquaticas (mundo do Toad)
+-- prisma/                                     O Castelo (banco de dados)
+-- docker-compose.yml                          Mapa do Mundo (como tudo se conecta)
```

---

## SECAO 2: Tabela Decisoria: "O que Devo Criar?"

### 6 Cenarios Reais e a Resposta Correta

| # | Cenario | O que Criar | Arquivo | Analogia Mario |
|---|---|---|---|---|
| 1 | Companheiro especializado | **Agent** | `.agent.md` | Selecionar um personagem na tela de selecao (Mario, Luigi, Toad...) |
| 2 | Ensinar uma habilidade ao Copilot | **Skill** | `SKILL.md` | Pegar um Power-Up no Bloco "?" (Mushroom, Fire Flower, Star...) |
| 3 | Regras que sempre se aplicam | **Instruction** | `.instructions.md` | Gravidade, lava mata — regras sempre ativas, ninguem precisa lembrar |
| 4 | Comando reutilizavel | **Prompt** | `.prompt.md` | Entrar num Warp Pipe (cano verde) — atalho direto para onde precisa |
| 5 | Ferramenta externa | **MCP** | `mcp.json` | Abrir um Warp Zone para outro mundo (Figma, PostgreSQL, Slack...) |
| 6 | Automacao no commit/push | **Hook** | `.github/workflows` | Bater num Bloco "?" automatico — algo acontece sem voce pedir |

### Quando Usar Cada Um — Guia Visual

> **Precisa de um personagem novo?** -> Agent (`.agent.md`)
> **Precisa de um poder novo?** -> Skill (`SKILL.md`)
> **Precisa de uma regra nova?** -> Instruction (`.instructions.md`)
> **Precisa de um atalho?** -> Prompt (`.prompt.md`)
> **Precisa conectar outro mundo?** -> MCP (`mcp.json`)
> **Precisa de automacao?** -> Hook (Husky/GitHub Actions)

---

## SECAO 3: Cheat Sheet de Frontmatter

### Todos os Campos YAML Explicados

#### .agent.md (Ficha do Personagem)

| Campo | Obrigatorio? | Tipo | Exemplo | Analogia Mario |
|---|---|---|---|---|
| `name` | Sim | string | `React Engineer` | Nome do personagem (Luigi) |
| `description` | Sim | string | `Especialista em componentes` | Bio na tela de selecao |
| `tools` | Nao | array | `["file_search", "repo_search"]` | Inventario do personagem |
| `model` | Nao | string | `claude-opus-4-6` | Level do personagem |

#### SKILL.md (Manual do Power-Up)

| Campo | Obrigatorio? | Tipo | Exemplo | Analogia Mario |
|---|---|---|---|---|
| `name` | Sim | string | `Jest Testing` | Nome do Power-Up (1-UP Mushroom) |
| `description` | Sim | string | `Escreve testes Jest` | O que o Power-Up faz |

#### .instructions.md (Regras do Jogo)

| Campo | Obrigatorio? | Tipo | Exemplo | Analogia Mario |
|---|---|---|---|---|
| `applyTo` | Sim | glob | `backend/**/*.ts` | Zona onde a regra vale (agua, ceu, castelo) |
| `instructions` | Sim | string | `Use async/await sempre` | A regra em si (gravidade, lava mata) |

---

## SECAO 4: Inventario Completo do TodoApp

### Todos os 22 Componentes do Mushroom Kingdom

#### Personagens (7 Agents)

| # | Nome | Tipo | Arquivo | Personagem Mario |
|---|---|---|---|---|
| 1 | Orchestrator | Coordenador | `orchestrator.agent.md` | Mario (Player 1) |
| 2 | React Engineer | Frontend | `react-engineer.agent.md` | Luigi (pula alto) |
| 3 | DBA | Backend/Dados | `dba.agent.md` | Toad (guardiao) |
| 4 | DevOps Expert | DevOps | `devops-expert.agent.md` | Yoshi (voa) |
| 5 | QA Engineer | Testes | `qa-engineer.agent.md` | Peach (flutua e testa) |
| 6 | Code Reviewer | Revisao | `code-reviewer.agent.md` | Toadette (juiza) |
| 7 | Debug Mode | Debug | `debug-mode.agent.md` | Detective Luigi |

#### Power-Ups (8 Skills)

| # | Nome | Tipo | Arquivo | Power-Up Mario |
|---|---|---|---|---|
| 1 | Workflow Feature | Feature | `workflow-feature/SKILL.md` | Super Mushroom (te faz crescer) |
| 2 | Workflow Bugfix | Bug | `workflow-bugfix/SKILL.md` | Super Star (invencivel por tempo limitado) |
| 3 | Workflow Deploy | Deploy | `workflow-deploy/SKILL.md` | Cape Feather (te faz voar) |
| 4 | Workflow CodeReview | Review | `workflow-codereview/SKILL.md` | Fire Flower (bolas de fogo contra problemas) |
| 5 | Conventional Commit | Git | `conventional-commit/SKILL.md` | Coin (padrao, todo mundo conhece) |
| 6 | Jest Testing | Tests | `jest-testing/SKILL.md` | 1-UP Mushroom (vida extra ao projeto) |
| 7 | Multi-stage Dockerfile | Docker | `multi-stage-dockerfile/SKILL.md` | Mini Mushroom (pequeno e eficiente) |
| 8 | PostgreSQL Review | DB | `postgresql-review/SKILL.md` | Ice Flower (congela problemas de performance) |

#### Warp Pipes (3 Prompts)

| # | Nome | Arquivo | Destino |
|---|---|---|---|
| 1 | New Component | `new-component.prompt.md` | Area secreta de blocos (criar componente) |
| 2 | Add Endpoint | `add-endpoint.prompt.md` | Area subterranea (criar rota de API) |
| 3 | Create Migration | `create-migration.prompt.md` | Area do castelo (alterar banco de dados) |

#### Regras do Jogo (3 Instructions + 1 Global)

| # | Nome | Arquivo | Zona de Efeito |
|---|---|---|---|
| 1 | Copilot Instructions | `copilot-instructions.md` | Gravidade (universal, afeta TUDO) |
| 2 | Backend Instructions | `backend.instructions.md` | Regras subaquaticas (so backend) |
| 3 | Frontend Instructions | `frontend.instructions.md` | Regras aereas (so frontend) |
| 4 | Database Instructions | `database.instructions.md` | Regras do castelo (so banco de dados) |

#### Warp Zones (1 MCP Config)

| # | Nome | Arquivo | Funcao |
|---|---|---|---|
| 1 | MCP Config | `mcp.json` | Mapa de todos os Warp Zones (Figma, PostgreSQL, Azure...) |

---

## SECAO 5: Os 4 Worlds (Workflows)

### Mapa Rapido de Cada World

#### World 1: FEATURE (Super Mushroom)
```
Fase 1-1: Plan      -> Olhar o mapa, planejar a rota
Fase 1-2: Implement -> Correr pela fase, coletar moedas, pular obstaculos
Fase 1-3: Review    -> Checkpoint — verificar se pegou tudo
Fase 1-4: Verify    -> Boss Battle — Bowser Jr + Boom Boom + Kamek + Bowser
```

#### World 2: BUGFIX (Super Star)
```
Fase 2-1: Reproduce -> Encontrar onde o inimigo aparece
Fase 2-2: Debug     -> Investigar por que o inimigo esta la
Fase 2-3: Fix       -> Derrotar o inimigo
Fase 2-4: Test      -> Verificar que ele nao volta
```

#### World 3: DEPLOY (Cape Feather)
```
Fase 3-1: Build  -> Construir o castelo
Fase 3-2: Test   -> Testar se as portas abrem
Fase 3-3: Lint   -> Verificar se nao tem armadilhas
Fase 3-4: Verify -> Abrir as portas para o publico
```

#### World 4: CODE REVIEW (Fire Flower)
```
Fase 4-1: Lint     -> Verificar estilo (moedas alinhadas?)
Fase 4-2: Security -> Verificar armadilhas escondidas
Fase 4-3: Review   -> Jogar a fase inteira como teste
Fase 4-4: Approve  -> "CLEAR!" — fase aprovada!
```

---

## SECAO 6: Boss Battles (Gates Finais)

### Os 4 Bosses que Voce Precisa Derrotar

| Boss | Personagem Mario | O que Verifica | Se Perder... |
|---|---|---|---|
| **Boss 1: TSC** | Bowser Jr | Tipos TypeScript corretos, zero erros | Volta pra fase e corrige os tipos |
| **Boss 2: Jest** | Boom Boom | Todos os testes passando (100%) | Volta e conserta os testes |
| **Boss 3: ESLint** | Kamek (Magikoopa) | Qualidade do codigo, zero warnings | Volta e limpa o codigo |
| **Boss 4: Zero Any** | Bowser | Nenhum `any` no TypeScript | Volta e define todos os tipos |

> **Regra de Ouro:** So passa para o proximo World quando TODOS os 4 Bosses forem derrotados. Sem excecoes!

---

## SECAO 7: As 6 Camadas de Power-Up (Contexto)

### Power-Up Slots que se Acumulam

| Camada | Power-Up Slot | Quem Controla | Analogia Mario |
|---|---|---|---|
| **1. Personal** | Seu estilo de jogar | O individuo | Preferencia do jogador ("eu sempre jogo com Mario") |
| **2. Organization** | Regras do torneio | Lideranca tecnica | Regras do campeonato ("todos usam controle padrao") |
| **3. Repository** | Regras deste World | Mantenedores do repo | Regras deste mundo ("aqui os Koopas deslizam no gelo") |
| **4. Path-Specific** | Regras da area | Especialistas | Regras da fase ("na agua, Mario nada; no ceu, voa") |
| **5. Agent** | Poderes do personagem | Dono do agente | Ficha do personagem ("Luigi pula mais alto") |
| **6. User Prompt** | Comando AGORA | Voce! | "Pula!", "Atira!", "Corre!" |

> **Stacking:** Todas as camadas se SOMAM. Mario nao perde a gravidade quando pega Fire Flower. Da mesma forma, um Agent nao perde as regras do repositorio quando recebe um prompt. POWER-UP MAXIMO!

---

## SECAO 8: Warp Zones (MCP)

### Mapa dos Mundos Conectados

| Warp Zone | Mundo Destino | Tools Principais | Para que Serve |
|---|---|---|---|
| **Figma MCP** | Mundo dos Designs | `get_design_data`, `get_colors`, `get_typography` | Buscar cores, tipografia, componentes visuais |
| **PostgreSQL MCP** | Mundo Subterraneo dos Dados | `query`, `get_schema`, `list_tables` | Fazer queries, explorar tabelas, buscar dados |
| **Azure Boards MCP** | Mundo das Tarefas | `create_work_item`, `update_work_item`, `list_work_items` | Criar/atualizar tasks, checar sprints |
| **GitHub MCP** | Mundo dos Repos | `list_repos`, `get_issue`, `create_pull_request` | Acessar issues, PRs, codigo em outros repos |
| **Slack MCP** | Mundo da Comunicacao | `send_message`, `list_channels` | Enviar e ler mensagens do time |

> **Seguranca:** A chave do Warp Zone (API Key) NUNCA fica exposta. Guarde no bolso secreto (`.env`) e so mostre quando precisar entrar!

---

## SECAO 9: Glossario Gamer — 30 Termos-Chave

### Dicionario Agentic DevOps com Analogias Mario

| # | Termo Tecnico | Em Portugues | Analogia Mario |
|---|---|---|---|
| 1 | **Agent** | Agente | Personagem jogavel (Mario, Luigi, Toad...) |
| 2 | **Skill** | Habilidade | Power-Up (Mushroom, Fire Flower, Star...) |
| 3 | **Instruction** | Instrucao | Regra do jogo (gravidade, lava mata...) |
| 4 | **Prompt** | Comando | Warp Pipe — cano verde para atalho |
| 5 | **Hook** | Gancho | Bloco "?" — bate e algo acontece |
| 6 | **MCP** | Protocolo de Contexto | Warp Zone — portal para outro mundo |
| 7 | **Orchestrator** | Orquestrador | Player 1 (Mario) coordenando o multiplayer |
| 8 | **Handoff** | Passagem de controle | Tag-team — trocar de personagem |
| 9 | **Gate Final** | Portao de validacao | Boss Battle (Bowser Jr -> Boom Boom -> Kamek -> Bowser) |
| 10 | **Exit Criteria** | Criterio de saida | Checkpoint Flag — so passa se cumprir |
| 11 | **.agent.md** | Arquivo agente | Ficha do personagem na tela de selecao |
| 12 | **SKILL.md** | Arquivo skill | Manual do Power-Up |
| 13 | **.instructions.md** | Arquivo instrucao | Livro de regras do jogo |
| 14 | **.prompt.md** | Arquivo prompt | Mapa do Warp Pipe |
| 15 | **mcp.json** | Config MCP | Mapa dos Warp Zones |
| 16 | **Frontmatter YAML** | Cabecalho YAML | Stats do personagem (nome, poder, tipo) |
| 17 | **Body Markdown** | Corpo do documento | Descricao dos poderes e como usar |
| 18 | **applyTo** | Aplicar em | Zona onde a regra vale (agua, ceu, castelo) |
| 19 | **tools** | Ferramentas | Inventario do personagem |
| 20 | **description** | Descricao | Bio do personagem na tela de selecao |
| 21 | **Pre-commit** | Pre-commit | Bloco "?" ANTES da Checkpoint Flag |
| 22 | **Post-commit** | Pos-commit | Moeda que aparece DEPOIS de passar |
| 23 | **Pre-push** | Pre-push | Bloco "?" GIGANTE no fim da fase |
| 24 | **Deploy** | Lancamento | Fase final — abrir portas do castelo para o publico |
| 25 | **CI/CD** | Integracao/Entrega | Lakitu na nuvem verificando tudo de cima |
| 26 | **TypeScript** | TypeScript | Armadura que protege de bugs |
| 27 | **ESLint** | ESLint | Verificacao de equipamento antes da fase |
| 28 | **Jest** | Jest | Treino contra bonecos antes do Boss real |
| 29 | **Retry** | Tentativa | Continuar da Checkpoint apos perder vida (1-UP!) |
| 30 | **Escalation** | Escalacao | Game Over -> chamar outro jogador humano |

---

## SECAO 10: Handoffs Rapidos

### Tabela de Referencia para Tag-Team

| Aspecto | O que e | Analogia Mario |
|---|---|---|
| **Exit Criteria** | Condicoes para passar o controle | Checkpoint Flag — so avanca se cumprir |
| **Shared Data** | Info passada entre personagens | Mario mostra o mapa para Luigi antes de trocar |
| **Retries** | Tentar novamente apos falha | 1-UP Mushroom — vida extra para tentar de novo |
| **Escalation** | Humano precisa intervir | Game Over — chamar jogador humano |

---

## SECAO 11: Links Oficiais da Documentacao

### Sua Biblioteca de Referencia

| # | Titulo | Resumo |
|---|---|---|
| 1 | [Custom Agents](https://docs.github.com/en/copilot) | Guia completo sobre agents personalizados |
| 2 | [Agent Skills](https://docs.github.com/en/copilot) | Conceitos sobre skills de agentes |
| 3 | [Creating Skills](https://docs.github.com/en/copilot) | Como criar skills do zero |
| 4 | [Custom Instructions](https://docs.github.com/en/copilot) | Setup de instrucoes customizadas |
| 5 | [Agent Mode](https://docs.github.com/en/copilot) | Usando o modo agente no Copilot |
| 6 | [MCP Protocol](https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp) | Integracao com Model Context Protocol |
| 7 | [Cheat Sheet](https://docs.github.com/en/copilot) | Referencia rapida oficial |
| 8 | [Awesome Copilot](https://github.com/nicepkg/awesome-copilot) | Recursos comunitarios curados |
| 9 | [VS Code Skills](https://docs.github.com/en/copilot) | Skills no VS Code |

---

## SECAO 12: Sua Jornada Continua

### Parabens, Sofia!

Voce completou a jornada pelo Mushroom Kingdom inteiro e descobriu o **Mapa Completo**! Voce possui agora o conhecimento para navegar qualquer desafio Agentic DevOps. Todos os Worlds foram desbloqueados, todos os Bosses foram derrotados, todos os Power-Ups foram coletados!

### Suas 7 Quests Finais (Pos-Game)

Como em todo bom jogo do Mario, depois de derrotar o Bowser ainda tem conteudo pos-game! Aqui estao suas 7 Star Coins finais para coletar:

**Quest 1 — O Primeiro Personagem:** Crie seu primeiro agente (`.agent.md`) para um projeto pessoal. Escolha: quem sera seu Mario?

**Quest 2 — A Loja de Power-Ups:** Escreva 3 skills (`SKILL.md`) para seus workflows mais comuns. Monte sua loja!

**Quest 3 — As Regras do Mundo:** Configure instructions para padroes de codigo. Defina a gravidade do seu mundo!

**Quest 4 — Os Warp Pipes:** Crie 4 prompt files para tarefas comuns. Construa seus atalhos!

**Quest 5 — Os Warp Zones:** Integre 2 MCP servers (Figma, Slack, PostgreSQL...). Abra portais para outros mundos!

**Quest 6 — Os Blocos "?":** Configure hooks com GitHub Actions. Instale armadilhas automaticas!

**Quest 7 — O Modo Multiplayer:** Orquestracao completa com multiplos agentes trabalhando em time. Ative o multiplayer!

### Dicas de Sobrevivencia no Mushroom Kingdom

1. **Comece pequeno** — Mario comeca Small Mario antes de pegar o Mushroom. Crie agentes simples primeiro.
2. **Teste tudo isoladamente** — Nao enfrente o Bowser sem treinar nos Goombas primeiro.
3. **Documente enquanto cria** — Um bom mapa salva vidas. Anote o que funciona.
4. **Reutilize e compartilhe** — Power-Ups sao compartilhaveis. Nao reinvente a roda.
5. **Monitore seus agentes** — Fique de olho no que seus personagens estao fazendo.
6. **Itere e versione** — Cada versao e um New Game+. Melhore sempre.
7. **Contribua a comunidade** — Compartilhe seus mapas e Power-Ups com outros jogadores!

---

| Anterior: 4G Orquestracao | Colecao Completa! |
|---|---|

---

**Achievement Desbloqueado: "Mapa Completo do Mushroom Kingdom — Mestra Level 6!"**

Sofia coletou todas as Star Coins, derrotou todos os Bosses, desbloqueou todos os Worlds, e agora possui o mapa completo do Mushroom Kingdom. A jornada Agentic DevOps esta completa!

*Este documento e a referencia central para toda a analogia Mario aplicada ao conteudo Agentic DevOps. Consulte sempre que precisar de uma resposta rapida!*

---

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Customizing Copilot](https://docs.github.com/en/copilot/customizing-copilot)
- [Copilot Agents Concepts](https://docs.github.com/en/copilot/concepts/agents)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [Husky - Git Hooks](https://typicode.github.io/husky/)
- [Conventional Commits](https://www.conventionalcommits.org/)
