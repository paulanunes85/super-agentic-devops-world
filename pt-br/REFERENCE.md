---
title: "Analogia Mario — Guia de Referencia Completo"
description: "Mapeamento completo de conceitos Agentic DevOps para analogias Super Mario Bros"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "reference", "mapping"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-03-18 | Paula Silva | Versao inicial — Edicao Super Mario Bros |

# Analogia Mario — Guia de Referencia Completo
## Mapeamento Universal: Agentic DevOps = Super Mario Bros

> **Regra de Ouro**: Qualquer pessoa que ja jogou Mario (ou viu alguem jogar) consegue entender Agentic DevOps com este guia.

---

## 1. O MUNDO

| Agentic DevOps | Super Mario | Por que funciona |
|---|---|---|
| **Ecossistema Agentic DevOps** | O **Mushroom Kingdom** inteiro | O universo completo onde tudo acontece |
| **Seu Projeto (TodoApp)** | A **missao de salvar a Princesa** | O objetivo final que motiva toda a jornada |
| **Sofia (a aprendiz)** | **Mario** — o heroi principal | Comeca pequeno, vai ganhando poderes ao longo do caminho |
| **Repositorio GitHub** | O **mapa do mundo** com todos os mundos e fases | Onde tudo esta organizado e acessivel |
| **Codigo fonte** | Os **blocos, moedas e cenarios** de cada fase | O que voce constroi e interage |

---

## 2. OS PERSONAGENS (Agents)

| Agent Tecnico | Personagem Mario | Habilidade Unica |
|---|---|---|
| **Orchestrator** | **Mario** — o heroi principal que coordena tudo | Sabe quando chamar cada personagem, lidera a equipe |
| **React Frontend Engineer** | **Luigi** — agil e alto, especialista em pulos | Domina a interface visual, componentes e animacoes |
| **PostgreSQL DBA** | **Toad** — guardiao do castelo e dos tesouros | Cuida dos dados, otimiza queries, protege o banco |
| **DevOps Expert** | **Yoshi** — pode engolir inimigos e voar | Infraestrutura, containers, CI/CD — faz o impossivel |
| **QA Engineer** | **Princesa Peach** — flutua e verifica tudo | Testa cada canto, encontra bugs escondidos, garante qualidade |
| **Code Reviewer** | **Toadette** — juiza rigorosa mas justa | Revisa codigo, aponta problemas, mantem padroes |
| **Debug Mode** | **Detective Luigi (Luigi's Mansion)** — caca fantasmas | Investiga bugs misteriosos, segue pistas, resolve misterios |

**Como funciona**: Cada personagem tem seu **arquivo .agent.md** = sua **ficha de personagem**. Nela esta escrito: nome, poderes, quando chamar, o que sabe fazer e o que NAO sabe.

---

## 3. OS POWER-UPS (Skills)

| Skill Tecnica | Power-Up Mario | Quando Usar |
|---|---|---|
| **workflow-feature** | **Super Mushroom** (cogumelo) — te faz crescer | Quando precisa criar algo novo (feature) — te da poder completo |
| **workflow-bugfix** | **Super Star** (estrela) — invencivel por tempo limitado | Quando tem bug urgente — modo turbo de investigar e corrigir |
| **workflow-deploy** | **Cape Feather** (pena/capa) — te faz voar | Quando precisa lancar em producao — te leva ate la |
| **workflow-codereview** | **Fire Flower** (flor de fogo) — dispara bolas de fogo | Quando precisa revisar codigo — ataca problemas um por um |
| **conventional-commit** | **Coin** (moeda) — padrao, todo mundo conhece | Padroniza mensagens de commit — simples e universal |
| **jest-testing** | **1-UP Mushroom** (cogumelo verde) — vida extra | Testes dao vida extra ao projeto — previnem morte |
| **multi-stage-dockerfile** | **Mini Mushroom** — te deixa pequeno e eficiente | Container otimizado — menor, mais rapido, mais eficiente |
| **postgresql-review** | **Ice Flower** (flor de gelo) — congela inimigos | Analisa queries lentas e as otimiza — "congela" problemas de performance |

**Como funciona**: Cada Power-Up vive numa pasta com um arquivo **SKILL.md** = o **manual do power-up**. Explica o que faz, quando ativar, e como usar passo a passo.

**Regra importante**: Power-Ups sao ativados **automaticamente** quando o jogo (Copilot) percebe que voce precisa. Voce nao precisa decorar — o jogo sente a situacao e oferece o power-up certo.

---

## 4. AS REGRAS DO JOGO (Instructions)

| Instruction Tecnica | Regra do Mario | Caracteristica |
|---|---|---|
| **copilot-instructions.md** (global) | **Gravidade** — sempre puxa pra baixo | Sempre ativa, afeta TUDO, ninguem precisa lembrar |
| **backend.instructions.md** | **Regras de fase subaquatica** — so valem debaixo d'agua | So se aplicam aos arquivos do backend |
| **frontend.instructions.md** | **Regras de fase aerea** — so valem no ceu | So se aplicam aos arquivos do frontend |
| **database.instructions.md** | **Regras do castelo** — so valem dentro do castelo | So se aplicam aos arquivos do banco de dados |

**Como funciona**: Regras do jogo sao **INVISVEIS e AUTOMATICAS**. Voce nao "ativa" a gravidade — ela sempre esta la. Da mesma forma, Instructions nao precisam ser invocadas. Elas SEMPRE se aplicam ao contexto correto.

**3 Niveis de Regras**:
- **Regras Universais** = Gravidade (afeta todo o Mushroom Kingdom)
- **Regras Regionais** = Regras da agua, do ceu, do castelo (afetam so aquela area)
- **Regras Pessoais** = Seu estilo de jogar (so afeta voce)

---

## 5. OS WARP PIPES (Prompts)

| Prompt Tecnico | Warp Pipe Mario | O que faz |
|---|---|---|
| **new-component.prompt.md** | **Cano verde para area secreta de blocos** | Pula direto para criar um componente novo |
| **add-endpoint.prompt.md** | **Cano verde para area secreta subterranea** | Pula direto para criar uma rota de API |
| **create-migration.prompt.md** | **Cano verde para area secreta do castelo** | Pula direto para alterar o banco de dados |

**Como funciona**: Warp Pipes sao **atalhos reutilizaveis**. Em vez de percorrer toda a fase (escrever tudo do zero), voce entra no cano e SAI direto onde precisa. Cada Warp Pipe aceita **ingredientes** (variaveis) — voce diz o nome do componente, e o cano te leva la.

**Dois modos**:
- **Modo Agent** = O cano te leva E constroi a fase para voce (cria arquivos, escreve codigo)
- **Modo Ask** = O cano te leva E te MOSTRA o mapa (explica, analisa, responde)

---

## 6. OS BLOCOS "?" (Hooks)

| Hook Tecnico | Bloco "?" Mario | Quando Dispara |
|---|---|---|
| **pre-commit** | **Bloco "?" que voce bate ANTES de passar** | Antes de salvar o commit — verifica se ta tudo certo |
| **commit-msg** | **Bloco que verifica se voce tem a chave certa** | Verifica se a mensagem do commit segue o padrao |
| **pre-push** | **Bloco "?" GIGANTE no final da fase** | Antes de enviar codigo — roda todos os testes |
| **post-commit** | **Bloco que solta moeda DEPOIS que voce passa** | Depois do commit — notifica o time |

**Como funciona**: Voce esta correndo pela fase (desenvolvendo). Quando bate num Bloco "?", algo acontece AUTOMATICAMENTE:
- **Bloco de Protecao**: Se o codigo tem erro, o bloco BLOQUEIA sua passagem (commit rejeitado). Voce precisa consertar para prosseguir.
- **Bloco de Melhoria**: O bloco auto-formata seu codigo (como ganhar um power-up sem pedir)
- **Bloco de Notificacao**: O bloco avisa seu time no Slack (como uma moeda que aparece no placar)

**Hooks vs GitHub Actions**:
- **Blocos "?"** = Reacao INSTANTANEA na fase (seu computador local). Rapido, bloqueia.
- **GitHub Actions** = O **Lakitu** (aquele cara na nuvem) que verifica TUDO de cima depois que voce termina a fase. Mais lento, mais completo, ninguem escapa.

---

## 7. OS WARP ZONES (MCP)

| MCP Tecnico | Warp Zone Mario | Onde Leva |
|---|---|---|
| **Figma MCP** | **Warp Zone para o Mundo dos Designs** | Seu personagem viaja ate la, pega cores e tipografia, e volta |
| **PostgreSQL MCP** | **Warp Zone para o Mundo Subterraneo dos Dados** | Faz queries, explora tabelas, traz informacoes do banco |
| **Azure Boards MCP** | **Warp Zone para o Mundo das Tarefas** | Cria e atualiza tasks, checa sprints, gerencia projetos |
| **GitHub MCP** | **Warp Zone para o Mundo dos Repos** | Acessa issues, PRs, codigo em outros repositorios |
| **Slack MCP** | **Warp Zone para o Mundo da Comunicacao** | Envia e le mensagens do time |

**Como funciona**: Sem Warp Zones, Mario fica preso em um unico mundo — so ve o que esta na frente dele. Com Warp Zones, Mario viaja para OUTROS MUNDOS, pega recursos e volta mais poderoso.

**Sem MCP** = Mario so no World 1. Limitado.
**Com MCP** = Mario viaja entre World 1, 2, 3, 4... Ilimitado.

**Seguranca**: A chave do Warp Zone (API Key) NUNCA fica exposta. Voce guarda no bolso secreto (.env) e so mostra quando precisa entrar no portal.

---

## 8. O MULTIPLAYER COORDENADO (Orquestracao)

| Orquestracao Tecnica | Multiplayer Mario | Como Funciona |
|---|---|---|
| **Orchestrator Agent** | **Player 1 (Mario)** coordenando o time | Recebe a missao, decide quem faz o que |
| **Delegacao** | **Passar o controle** para outro personagem | "Luigi, essa fase e sua!" — delega para o especialista |
| **Handoff** | **Tag-team** — um sai, outro entra | Quando Luigi termina, passa para Toad continuar |
| **Exit Criteria** | **Checkpoint flag** no meio da fase | So passa o controle quando chegar no checkpoint |
| **Gate Final** | **Boss Battle** no final do castelo | 4 chefes em sequencia: TSC, Jest, ESLint, Zero Any |
| **Escalation** | **Game Over → Chamar outro jogador** | Se o agente nao consegue, chama o humano |

**Os 4 Mundos (Workflows)**:

### World 1: FEATURE (Criar Algo Novo)
```
Fase 1-1: Plan     → Olhar o mapa, planejar a rota
Fase 1-2: Implement → Correr pela fase, coletar moedas, pular obstaculos
Fase 1-3: Review    → Checkpoint — verificar se pegou tudo
Fase 1-4: Verify    → Boss Battle — TSC + Jest + ESLint + Zero Any
```

### World 2: BUGFIX (Corrigir Problema)
```
Fase 2-1: Reproduce → Encontrar onde o inimigo aparece
Fase 2-2: Debug     → Investigar por que o inimigo esta la
Fase 2-3: Fix       → Derrotar o inimigo
Fase 2-4: Test      → Verificar que ele nao volta
```

### World 3: DEPLOY (Lancar em Producao)
```
Fase 3-1: Build     → Construir o castelo
Fase 3-2: Test      → Testar se as portas abrem
Fase 3-3: Lint      → Verificar se nao tem armadilhas
Fase 3-4: Verify    → Abrir as portas para o publico
```

### World 4: CODE REVIEW (Revisar Codigo)
```
Fase 4-1: Lint      → Verificar estilo (moedas alinhadas?)
Fase 4-2: Security  → Verificar armadilhas escondidas
Fase 4-3: Review    → Jogar a fase inteira como teste
Fase 4-4: Approve   → "CLEAR!" — fase aprovada
```

---

## 9. AS 6 CAMADAS DE POWER-UP (Contexto)

Como no Mario, onde voce pode combinar power-ups (mushroom + fire flower + star), no Agentic DevOps existem 6 camadas de contexto que se acumulam:

| Camada | Mario Equivalente | Exemplo |
|---|---|---|
| **1. Personal** | **Seu estilo de jogar** (agressivo, cauteloso) | Preferencias pessoais do dev |
| **2. Organization** | **Regras do torneio** (tempo limite, vidas) | Politicas da empresa |
| **3. Repository** | **Regras desta fase especifica** | Padroes deste projeto |
| **4. Path-Specific** | **Regras da area** (agua, ceu, castelo) | Regras para backend vs frontend |
| **5. Agent** | **Poderes do personagem atual** | Especialidade do agente |
| **6. User Prompt** | **Seu comando AGORA** ("pula!", "atira!") | O que voce pediu ao Copilot |

**Stacking**: Todas as camadas se SOMAM. Mario nao perde a gravidade quando pega Fire Flower. Da mesma forma, um Agent React nao perde as regras do repositorio quando recebe um prompt.

---

## 10. BOSS BATTLES (Gates Finais)

Antes de completar qualquer World, voce enfrenta 4 chefes em sequencia:

| Boss | O que Verifica | Se Perder... |
|---|---|---|
| **Boss 1: TSC (Bowser Jr)** | Tipos TypeScript corretos, zero erros | Volta pra fase e corrige os tipos |
| **Boss 2: Jest (Boom Boom)** | Todos os testes passando | Volta e conserta os testes |
| **Boss 3: ESLint (Kamek)** | Qualidade do codigo, zero warnings | Volta e limpa o codigo |
| **Boss 4: Zero Any (Bowser)** | Nenhum `any` no TypeScript | Volta e define todos os tipos |

**So passa para o proximo World quando TODOS os bosses forem derrotados.**

---

## 11. MAPA COMPLETO DO JOGO (Estrutura de Diretorios)

```
todo-app-workshop/                          🏰 O Mushroom Kingdom
├── .github/
│   ├── agents/                             🎮 Tela de Selecao de Personagem
│   │   ├── orchestrator.agent.md           → Mario (lider)
│   │   ├── react-engineer.agent.md         → Luigi (frontend)
│   │   ├── dba.agent.md                    → Toad (banco de dados)
│   │   ├── devops-expert.agent.md          → Yoshi (infraestrutura)
│   │   ├── qa-engineer.agent.md            → Peach (qualidade)
│   │   ├── code-reviewer.agent.md          → Toadette (revisao)
│   │   └── debug-mode.agent.md             → Detective Luigi (debug)
│   ├── skills/                             ⭐ Loja de Power-Ups
│   │   ├── workflow-feature/SKILL.md       → Super Mushroom
│   │   ├── workflow-bugfix/SKILL.md        → Super Star
│   │   ├── workflow-deploy/SKILL.md        → Cape Feather
│   │   ├── workflow-codereview/SKILL.md    → Fire Flower
│   │   ├── conventional-commit/SKILL.md    → Coin
│   │   ├── jest-testing/SKILL.md           → 1-UP Mushroom
│   │   ├── multi-stage-dockerfile/SKILL.md → Mini Mushroom
│   │   └── postgresql-review/SKILL.md      → Ice Flower
│   ├── instructions/                       📏 Regras do Jogo
│   │   ├── backend.instructions.md         → Regras subaquaticas
│   │   ├── frontend.instructions.md        → Regras aereas
│   │   └── database.instructions.md        → Regras do castelo
│   ├── prompts/                            🟢 Warp Pipes
│   │   ├── new-component.prompt.md         → Cano para area de blocos
│   │   ├── add-endpoint.prompt.md          → Cano para area subterranea
│   │   └── create-migration.prompt.md      → Cano para area do castelo
│   └── copilot-instructions.md             🌍 Gravidade (regra universal)
├── .vscode/
│   └── mcp.json                            🌀 Mapa dos Warp Zones
├── frontend/                               ☁️ Fases Aereas
├── backend/                                🌊 Fases Subaquaticas
├── prisma/                                 🏰 O Castelo
└── docker-compose.yml                      🗺️ Mapa do Mundo
```

---

## 12. TABELA DECISORIA RAPIDA

| Voce quer... | Crie um... | E como no Mario... |
|---|---|---|
| Um companheiro especializado | **Agent** (.agent.md) | Selecionar um personagem na tela de selecao |
| Ensinar uma habilidade ao Copilot | **Skill** (SKILL.md) | Pegar um Power-Up no Bloco "?" |
| Regras que sempre se aplicam | **Instruction** (.instructions.md) | Gravidade, lava mata — sempre ativo |
| Um atalho reutilizavel | **Prompt** (.prompt.md) | Entrar num Warp Pipe |
| Conectar ferramenta externa | **MCP** (mcp.json) | Abrir um Warp Zone para outro mundo |
| Automacao no commit/push | **Hook** (Husky) | Bater num Bloco "?" automatico |

---

## 13. GLOSSARIO GAMER — 30 TERMOS-CHAVE

| # | Termo Tecnico | Em Mario |
|---|---|---|
| 1 | Agent | Personagem jogavel (Mario, Luigi, Toad...) |
| 2 | Skill | Power-Up (Mushroom, Fire Flower, Star...) |
| 3 | Instruction | Regra do jogo (gravidade, lava mata...) |
| 4 | Prompt | Warp Pipe (atalho para area especifica) |
| 5 | Hook | Bloco "?" (bate e algo acontece) |
| 6 | MCP | Warp Zone (portal para outro mundo) |
| 7 | Orchestrator | Player 1 coordenando o multiplayer |
| 8 | Handoff | Tag-team — trocar de personagem |
| 9 | Gate Final | Boss Battle no castelo |
| 10 | Exit Criteria | Checkpoint flag — so passa se cumprir |
| 11 | .agent.md | Ficha do personagem na tela de selecao |
| 12 | SKILL.md | Manual do Power-Up |
| 13 | .instructions.md | Livro de regras do jogo |
| 14 | .prompt.md | Mapa do Warp Pipe |
| 15 | mcp.json | Mapa dos Warp Zones |
| 16 | Frontmatter YAML | Stats do personagem (nome, poder, tipo) |
| 17 | Body Markdown | Descricao dos poderes e como usar |
| 18 | applyTo | Area onde a regra vale (agua, ceu, castelo) |
| 19 | tools | Inventario do personagem |
| 20 | description | Bio do personagem na tela de selecao |
| 21 | Pre-commit | Bloco "?" ANTES da checkpoint flag |
| 22 | Post-commit | Moeda que aparece DEPOIS de passar |
| 23 | Pre-push | Bloco "?" GIGANTE no fim da fase |
| 24 | Deploy | Fase final — abrir portas do castelo |
| 25 | CI/CD | Lakitu na nuvem verificando de cima |
| 26 | TypeScript | Armadura que protege de bugs |
| 27 | ESLint | Verificacao de equipamento antes da fase |
| 28 | Jest | Treino contra bonecos antes do boss |
| 29 | Retry | Continuar da checkpoint apos perder vida |
| 30 | Escalation | Game Over → chamar outro jogador humano |

---

*Este documento e a referencia central para toda a analogia Mario aplicada ao conteudo Agentic DevOps. Cada capitulo (4A a 4H) deve seguir este mapeamento consistentemente.*

---

## 14. NOVAS ANALOGIAS (Worlds 5, 7, 8)

> **Contexto**: Com a expansao do guia para 8 Worlds, novos conceitos precisam de analogias Mario. Esta secao cobre IA, Agentes, Frameworks e conceitos avancados introduzidos nos Worlds 5, 7 e 8.

### Agentes — Conceitos Fundamentais

| Conceito | Analogia Mario | Por que funciona |
|---|---|---|
| **Agent (fundamentalmente)** | **NPC que ganhou vida** — pensa, decide, age | NPCs em jogos seguem scripts; um agente vai alem, toma decisoes proprias |
| **IDE Agent** | **Companion no bolso** — anda COM voce na fase | Esta sempre ali do seu lado enquanto voce joga, respondendo em tempo real |
| **Background Agent** | **NPC trabalhando em castelo distante** enquanto voce joga | Voce nem ve, mas ele esta la construindo, testando, preparando |
| **Dev Agent** | **Companion que ajuda a CONSTRUIR o jogo** | Ajuda quem cria as fases, nao quem joga |
| **Productive Agent** | **Companion que ajuda a JOGAR o jogo** (end-user) | Ajuda o jogador final, nao o criador |
| **Autonomous Agent** | **Yoshi que voa sozinho** com guardrails | Tem liberdade para agir, mas com limites definidos para nao sair do mapa |

### GitHub Copilot — Modos de Operacao

| Conceito | Analogia Mario | Por que funciona |
|---|---|---|
| **Copilot Ask Mode** | **Toad's Hint House** — perguntar dicas ao NPC | Voce vai ate o Toad, pergunta, ele responde. Nao faz nada por voce |
| **Copilot Plan Mode** | **Mapa da Fase** — ver o caminho antes de jogar | Mostra a rota completa, obstaculos e power-ups, mas voce ainda precisa jogar |
| **Copilot Agent Mode** | **Yoshi no autopilot** — companion joga COM voce | Yoshi corre, pula e come inimigos junto com voce. Colaboracao ativa |
| **GitHub Coding Agent** | **Yoshi autonomo** — faz a fase sozinho | Voce descreve a missao, Yoshi vai e volta com a fase completa |

### GitHub Advanced Security

| Conceito | Analogia Mario | Por que funciona |
|---|---|---|
| **GitHub Advanced Security** | **Escudo Estelar** — protecao automatica contra inimigos invisiveis | Protege sem voce precisar fazer nada, detecta ameacas que voce nao ve |
| **Code Scanning** | **Detector de armadilhas** — encontra perigos escondidos no codigo | Como um item que revela blocos falsos e armadilhas invisiveis na fase |
| **Secret Scanning** | **Alarme anti-roubo** — detecta se chaves secretas vazaram | Se alguem roubar sua chave do castelo, o alarme dispara imediatamente |
| **Dependabot** | **Toad inspetor** — verifica se seus itens estao atualizados | Toad verifica seu inventario e avisa: "Esse mushroom esta vencido!" |

### Frameworks de IA (World 7)

| Conceito | Analogia Mario | Por que funciona |
|---|---|---|
| **AI Foundry** | **Forja de Magikoopa** — onde armas magicas sao criadas | Magikoopa cria feiticos; a Forja e onde modelos de IA sao construidos e refinados |
| **RAG** | **Biblioteca Magica** — consultar livros no meio da batalha | Em vez de decorar tudo, voce consulta a biblioteca quando precisa de informacao |
| **LangChain** | **Cadeia de Power-Ups** — combo system | Mushroom + Fire Flower + Star em sequencia = combo devastador |
| **AutoGen** | **Auto-team-builder** — descreve missao, monta equipe | Voce diz "preciso salvar a princesa" e o sistema monta Mario + Luigi + Toad + Yoshi |
| **Semantic Kernel** | **Motor universal de magia** — funciona com qualquer sistema | O motor por tras de todos os feiticos, independente de quem lanca |
| **4 Canais de Operacao** | **4 mundos onde agentes vivem e operam** | Cada tipo de agente opera em seu proprio mundo com regras proprias |
| **IDP/Backstage** | **Praca Central / Hub Castle** (Mario 64) | O hub central de onde voce acessa todos os mundos — pula nos quadros e vai |

### Conceitos Complementares

| Conceito | Analogia Mario | Por que funciona |
|---|---|---|
| **Codespaces** | **Arcade na nuvem** — joga de qualquer lugar, sem instalar nada | Qualquer computador vira seu console — so precisa de internet |
| **Token Optimization** | **Orcamento de moedas por fase** — gaste com sabedoria | Cada fase tem um limite de moedas; gaste nas acoes que importam |
| **Issues** | **Quest Board** — quadro de missoes | O quadro na praca da vila onde todas as missoes estao listadas |
| **Projects** | **Campaign Map** — mapa da campanha com progresso | O mapa geral mostrando quais fases voce ja completou e quais faltam |

---

*Secao 14 adicionada para cobrir os conceitos dos Worlds 5, 7 e 8. Todas as novas analogias seguem o mesmo padrao das secoes anteriores: conceito tecnico → equivalente Mario → justificativa.*

---

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [GitHub Copilot — Concepts and Agents](https://docs.github.com/en/copilot/concepts/agents)
- [Azure AI Services](https://learn.microsoft.com/en-us/azure/ai-services/)
