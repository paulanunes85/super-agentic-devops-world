---
title: "Capitulo 4B — Agent Skills & SKILL.md / A Loja de Power-Ups"
description: "Como criar e organizar Agent Skills usando arquivos SKILL.md para montar a colecao de poderes dos seus personagens de IA."
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "2.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-6", "skills", "skill-md"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 2.0.0 | 2026-03-18 | Paula Silva | Versao Mario Bros — reescrita completa com analogias Super Mario |
| 1.0.0 | 2026-03-06 | Paula Silva | Versao original com analogias RPG |

# Capitulo 4B — Agent Skills & SKILL.md / A Loja de Power-Ups — Como Criar a Colecao de Poderes dos seus Personagens

---

**Preparado para:** Sofia
**Versao:** 2.0 (Edicao Mushroom Kingdom)
**Autora:** Paula Silva | Software Global Black Belt, Microsoft Americas
**Data:** Marco 2026
**Idioma:** Portugues do Brasil (pt-BR)
**Colecao:** Agentic DevOps

---

## SUMARIO

- [Prologo: Entrando na Loja de Power-Ups](#prologo-entrando-na-loja-de-power-ups)
- [1. O que sao Agent Skills?](#1-o-que-sao-agent-skills)
  - [1.1 O Mecanismo: Como o Copilot Carrega Skills](#11-o-mecanismo-como-o-copilot-carrega-skills)
  - [1.2 Skills sao um Padrao Aberto](#12-skills-sao-um-padrao-aberto)
  - [1.3 Skills Complementam Agents](#13-skills-complementam-agents)
  - [1.4 A Analogia Mario: Tela de Power-Ups](#14-a-analogia-mario-tela-de-power-ups)
  - [1.5 Tabela Comparativa: Agent vs Skill](#15-tabela-comparativa-agent-vs-skill)
  - [1.6 Links e Documentacao](#16-links-e-documentacao)
- [2. Estrutura de uma Skill](#2-estrutura-de-uma-skill)
  - [2.1 Anatomia Completa de um Skill Folder](#21-anatomia-completa-de-um-skill-folder)
  - [2.2 Carregamento Automatico vs Sob Demanda](#22-carregamento-automatico-vs-sob-demanda)
  - [2.3 A Analogia Mario: Anatomia de um Power-Up](#23-a-analogia-mario-anatomia-de-um-power-up)
- [3. Formato do SKILL.md](#3-formato-do-skillmd)
  - [3.1 Frontmatter: Os Metadados Criticos](#31-frontmatter-os-metadados-criticos)
  - [3.2 A Descricao e o Ativador Semantico](#32-a-descricao-e-o-ativador-semantico)
  - [3.3 O Corpo: Markdown Livre com Estrutura](#33-o-corpo-markdown-livre-com-estrutura)
  - [3.4 Exemplo Completo: Skill 'workflow-feature'](#34-exemplo-completo-skill-workflow-feature)
  - [3.5 Exemplo Completo: Skill 'conventional-commit'](#35-exemplo-completo-skill-conventional-commit)
- [4. Built-in vs Project vs Personal Skills](#4-built-in-vs-project-vs-personal-skills)
  - [4.1 Quando Usar Cada Tipo](#41-quando-usar-cada-tipo)
- [5. Estudo de Caso: As 8 Skills do TodoApp](#5-estudo-de-caso-as-8-skills-do-todoapp)
  - [5.1 Tabela das 8 Skills do TodoApp](#51-tabela-das-8-skills-do-todoapp)
  - [5.2 Como Esses Skills se Integram](#52-como-esses-skills-se-integram)
- [6. Boas Praticas para Escrever Skills](#6-boas-praticas-para-escrever-skills)
  - [6.1 10 Principios para Skills Excelentes](#61-10-principios-para-skills-excelentes)
  - [6.2 Anti-Padroes: O que NAO Fazer](#62-anti-padroes-o-que-nao-fazer)
  - [6.3 Slash Commands: Invocando Skills Explicitamente](#63-slash-commands-invocando-skills-explicitamente)

---

## Prologo: Entrando na Loja de Power-Ups

Sofia correu pela fase e parou em frente a uma construcao enorme feita de blocos brilhantes. Era a **Loja de Power-Ups** do Mushroom Kingdom — o lugar onde todos os personagens vinham buscar seus poderes. Acima da porta, um letreiro de neon piscava: "POWER-UPS — Torne seus personagens invenciveis!"

Ao entrar, ela viu prateleiras infinitas repletas de **Blocos "?"** de todas as cores. Cada Bloco continha um Power-Up diferente — nao eram simples cogumelos ou flores. Eram **poderes completos**, cada um guardando uma habilidade unica que seus personagens poderiam aprender e dominar.

As paredes da Loja brilhavam com cores vibrantes. Nos Blocos dourados, ela viu registros de jogadores lendarios: aqueles que desbloquearam o **Power-Up da Busca Perfeita de Bugs**, a **Super Star do Deploy Automatico**, a **Fire Flower da Revisao de Codigo**. Cada Bloco "?" continha uma descricao clara de quando aquele poder deveria ser ativado e, dentro dele, o conhecimento completo de como usa-lo.

O Toad guardiao da Loja se aproximou de Sofia com um sorriso. *"Bem-vinda, Jogadora! Voce nao veio aqui apenas para conhecer os Power-Ups que ja existem. Voce veio para aprender a CRIAR novos Power-Ups para seus personagens. Como montar uma Tela de Power-Ups unica, poderosa e equilibrada. Como transformar um personagem basico em um heroi lendario do Mushroom Kingdom."*

Sofia comecou a perceber a verdadeira magnitude de sua jornada. Dominar Agent Skills nao era apenas memorizar comandos. Era aprender a linguagem secreta atraves da qual personagens ganhavam poderes. Era entender o delicado equilibrio entre um Power-Up bem descrito e um personagem que desconhecia completamente quando utiliza-lo.

Este capitulo e a sua **Loja de Power-Ups pessoal**. Cada secao revelara um novo poder, cada tabela desvendara um segredo. Ao final, voce sera capaz de criar personagens tao poderosos que desafiarao ate mesmo os maiores chefoes do Mushroom Kingdom.

---

## 1. O que sao Agent Skills?

Agent Skills (ou simplesmente "Skills") sao componentes portaveis e reutilizaveis de conhecimento que ensinam seus personagens — seus agentes de IA — como executar tarefas especializadas. Nao sao apenas fragmentos de documentacao: sao **Power-Ups vivos** que o Copilot le, compreende e aplica automaticamente quando reconhece que eles sao relevantes para a tarefa atual.

Pense em Skills como uma **colecao de Power-Ups dentro de Blocos "?"**. Cada Power-Up tem tres caracteristicas essenciais: (1) Uma descricao clara do que ele faz (o efeito do poder), (2) As condicoes de ativacao (quando o poder e liberado), e (3) O corpo do poder (as instrucoes exatas de como usa-lo). Quando alguem precisa de um Power-Up especifico, nao precisa memorizar manualmente: a IA sente a presenca da descricao, reconhece que e relevante, e carrega todo o conhecimento do Skill como contexto na conversa.

### 1.1 O Mecanismo: Como o Copilot Carrega Skills

O fluxo e elegante e automatico:

1. Voce envia um prompt ao Copilot (em VS Code, CLI ou Coding Agent)
2. O Copilot le a descricao do seu arquivo SKILL.md (frontmatter + primeira linha da descricao)
3. Se a descricao **combinar semanticamente** com o que voce pediu, o Skill e marcado como relevante
4. Todo o conteudo do Skill — scripts, exemplos, referencias — e carregado como contexto na conversa
5. O Copilot agora possui informacoes detalhadas sobre como executar aquela tarefa especifica
6. Voce recebe uma resposta **muito mais precisa e contextualizada**

> Pense assim: voce esta correndo pela fase e bate num Bloco "?". Se o Power-Up dentro dele combinar com o que voce precisa, ele e ativado automaticamente. Voce nao precisa decorar onde esta cada Bloco — o jogo sente a situacao e oferece o Power-Up certo!

### 1.2 Skills sao um Padrao Aberto

As Skills **nao sao proprietarias do Copilot**. E um padrao aberto que funciona com:

- GitHub Copilot em VS Code
- GitHub Copilot CLI (linha de comando)
- GitHub Copilot Coding Agent
- Qualquer ferramenta que respeite a estrutura de folders com SKILL.md

Isso significa que seus Power-Ups sao **portaveis**. Voce pode move-los, compartilha-los, utiliza-los em diferentes fases do Mushroom Kingdom, e sempre funcionarao da mesma forma. E um investimento duradouro.

### 1.3 Skills Complementam Agents

Nos capitulos anteriores, voce aprendeu sobre **Agents** (Custom Agents, Capitulo 4A). E importante entender a relacao entre os dois:

- **Agent (Personagem)** = E a entidade, o personagem jogavel, o "quem". Um Agent tem uma identidade definida, um proposito, uma perspectiva unica. E o Mario, o Luigi, o Toad, o Yoshi.
- **Skill (Power-Up)** = E a habilidade, o conhecimento, o "como". Um Skill representa UMA capacidade especifica que o personagem pode executar. E o Super Mushroom, a Fire Flower, a Super Star.

Um personagem SEM Power-Ups e como o Mario pequenino que morre com um unico toque. Um Power-Up SEM um personagem e como um cogumelo deslizando sozinho pela fase, esperando por alguem que o pegue. Juntos, eles formam uma forca formidavel.

### 1.4 A Analogia Mario: Tela de Power-Ups

Para entender profundamente como Skills funcionam, pense em como Power-Ups funcionam no Super Mario Bros:

**Mario Level 1 (Small Mario)** comeca pequeno com apenas "Pulo Basico" — um salto simples que qualquer um pode dar.

Ao atingir **Level 5 (Big Mario)**, ele pega o **Super Mushroom** — cresce de tamanho, ganha resistencia, e agora aguenta um golpe sem morrer.

No **Level 10 (Fire Mario)**, obtem a **Fire Flower** — uma habilidade devastadora que dispara bolas de fogo, destruindo inimigos a distancia.

No **Level 15 (Cape Mario)**, aprende a usar a **Cape Feather** — uma pena magica que permite voar sobre obstaculos e planar sobre fases inteiras.

Cada Power-Up tem: (a) Uma **descricao clara** (o que faz), (b) **Condicoes de ativacao** (quando pegar), (c) Um **efeito exato** (o impacto no gameplay).

**Agora aplique isso a Agent Skills:**

- Seu personagem e como o Mario comecando sua jornada no World 1-1.
- Cada Skill que voce cria e como um Power-Up na Loja de Power-Ups.
- A "descricao" do Skill (frontmatter) e exatamente como o visual e a cor do Bloco "?" — e ele que diz ao jogo qual poder esta dentro.
- O "body" do Skill (o conteudo) e como o efeito do Power-Up — as instrucoes detalhadas de COMO o poder funciona.
- Quando voce escreve uma descricao clara, voce esta dizendo ao Copilot: "Este Power-Up se ativa quando alguem pedir [X]. Quando ativado, faz [Y]."

**Um personagem com muitos Power-Ups bem estruturados e como o Mario com Mushroom + Fire Flower + Cape Feather + Star — praticamente invencivel!**


### 1.5 Tabela Comparativa: Agent vs Skill

| Dimensao | Agent (Personagem) | Skill (Power-Up) |
|---|---|---|
| **Analogia Mario** | Personagem jogavel (Mario, Luigi, Toad...) | Power-Up do Bloco "?" (Mushroom, Fire Flower, Star...) |
| **O que Define?** | Identidade, Proposito, Perspectiva | Uma capacidade especifica, um "como fazer" |
| **Arquivo Principal** | arquivos .md ou .json (Custom Agents) | SKILL.md em uma folder |
| **Ativacao** | Voce seleciona o personagem explicitamente | Ativacao automatica ao reconhecer descricao relevante |
| **Pode ter Folder?** | Sim (e um sistema completo) | Sim (Skill e um folder com SKILL.md + recursos) |
| **Portabilidade** | Vinculado ao workspace/projeto | Completamente portavel, padrao aberto |
| **Pode ser Invocado Direto?** | Sim (como Agent ou Custom Agent) | Nao — ativado pela semantica da descricao |
| **Exemplo** | DBA Assistant (Toad especializado em bancos) | postgresql-review (Power-Up: revisar queries PostgreSQL) |

### 1.6 Links e Documentacao

Fonte: About Agent Skills - GitHub Docs — https://docs.github.com/en/copilot/concepts/agents/about-agent-skills

---

## 2. Estrutura de uma Skill

Toda Skill segue uma arquitetura bem definida. Entender essa estrutura e o primeiro passo para criar Power-Ups poderosos e reutilizaveis.

### 2.1 Anatomia Completa de um Skill Folder

Um Skill e um **folder** que contem varios tipos de arquivos. Aqui esta a estrutura recomendada:

```
my-awesome-skill/
├── SKILL.md                 <- OBRIGATORIO: Frontmatter + descricao + instrucoes
├── scripts/
│   ├── deploy.sh           <- Scripts executaveis que o Skill utiliza
│   ├── validate.js         <- Podem estar em qualquer linguagem
│   └── rollback.py
├── references/
│   ├── best-practices.md   <- Documentacao de apoio, guias
│   ├── troubleshooting.md  <- Solucoes para problemas comuns
│   └── architecture.md
├── examples/
│   ├── example-1.ts        <- Exemplos praticos de como usar
│   ├── example-2.ts
│   └── README.md           <- Leia-me com explicacoes
└── README.md               <- Opcional: visao geral da skill
```

### 2.2 Carregamento Automatico vs Sob Demanda

E crucial entender o que o Copilot carrega automaticamente vs sob demanda:

- **Carregado AUTOMATICAMENTE:** Apenas o arquivo SKILL.md. O Copilot le o frontmatter e a descricao para determinar se o Skill e relevante.
- **Carregado SOB DEMANDA:** Scripts, referencias, exemplos. Estes sao carregados APENAS se o Copilot decide que o Skill e relevante E se voce ou o contexto os menciona ou os referencia.

**Implicacao pratica:** Mantenha seu SKILL.md conciso e claro. Coloque detalhes complexos em referencias. O Copilot carregara as referencias se precisar, mas nao as sobrecarregara desnecessariamente.

> Pense assim: quando Mario bate num Bloco "?", primeiro aparece o Power-Up (o SKILL.md). Se ele pegar o Power-Up, ai sim o efeito completo e ativado (scripts, referencias). O Bloco nao despeja TUDO de uma vez — primeiro mostra o que tem, depois ativa o efeito completo.

### 2.3 A Analogia Mario: Anatomia de um Power-Up

Pense em um Skill como um **Power-Up completo dentro de um Bloco "?":**

- **SKILL.md (O Power-Up Principal):** O item que sai do Bloco "?". E o Cogumelo, a Flor, a Estrela. Contem o nome do poder, seus efeitos, e as instrucoes fundamentais de como usa-lo.

- **scripts/ (Itens Complementares):** Os itens extras que vem junto com o Power-Up. Sao como as moedas extras e os blocos escondidos que aparecem quando voce ativa uma area secreta. Componentes concretos que o poder precisa para funcionar.

- **references/ (Manuais de Fase):** Guias e mapas da fase. Se voce nao sabe como funciona uma mecanica especifica, consulte o manual. O personagem nao precisa de toda essa informacao para usar o Power-Up (ele ja sabe o basico), mas e bom ter a mao.

- **examples/ (Replays e Gameplays):** Gravacoes de fases anteriores. "Aqui esta um exemplo de quando a Fire Flower foi usada contra o Bowser. Aqui esta outro exemplo contra os Koopa Troopas." Esses replays ajudam novos jogadores a entender quando e como usar cada poder.

- **README.md (Entrada no Catalogo da Loja):** Uma pagina no catalogo da Loja de Power-Ups. Visao geral, historia, variacoes.

---

## 3. Formato do SKILL.md

O arquivo SKILL.md e o coracao de cada Skill. Sua estrutura e simples mas crucial: um **frontmatter YAML**, seguido por um **corpo em Markdown livre**.

### 3.1 Frontmatter: Os Metadados Criticos

Todo SKILL.md deve comecar com um bloco YAML entre tres hifens (`---`):

```yaml
---
name: Nome do Power-Up (obrigatorio)
description: |
  Uma descricao clara e concisa (2-3 linhas maximo).
  Esta descricao e o ATIVADOR semantico.
  O Copilot a le e decide se o Skill e relevante.
---

## Corpo do Skill em Markdown Livre
Aqui comeca o conteudo principal...
```

### 3.2 A Descricao e o Ativador Semantico

A descricao no frontmatter e **a cor e o brilho do Bloco "?"**. E ela que o Copilot le para determinar se o Skill e relevante para o seu prompt. Uma descricao vaga ou ambigua levara a Power-Ups que nunca sao ativados quando deveriam — como um Bloco "?" invisivel que ninguem consegue encontrar.

- Ruim: "Descricao sobre coisas tecnicas"
- Ruim: "Sistema de deployment"
- Bom: "Fazer deploy de aplicacao Node.js em Kubernetes usando GitHub Actions com validacao de saude"
- Bom: "Revisar queries PostgreSQL quanto a indices ausentes, N+1 queries e planos de execucao ineficientes"

A descricao deve ser **especifica o suficiente** para evitar ativacoes falsas (false positives), mas **generica o suficiente** para cobrir variacoes legitimas do caso de uso.

> Pense assim: se a descricao do Bloco "?" disser apenas "poder", ninguem sabe o que tem dentro. Mas se disser "Super Mushroom — te faz crescer e aguentar um golpe", todo mundo sabe exatamente quando pegar!

### 3.3 O Corpo: Markdown Livre com Estrutura

Apos o frontmatter, voce pode escrever qualquer coisa em Markdown. A estrutura recomendada e:

```markdown
## Visao Geral — Explique brevemente o que o Skill faz
## Pre-requisitos — O que e necessario antes de usar
## Passos — Instrucoes passo a passo, ou fases em sequencia
## Referencias de Arquivo — Links relativos para scripts/references/examples
## Troubleshooting — Problemas comuns e solucoes
```

### 3.4 Exemplo Completo: Skill 'workflow-feature' (Workflow Completo)

Este e um exemplo real, comentado em detalhes, de um Skill de workflow para implementar uma nova feature. Pense nele como o **Super Mushroom** — o Power-Up que te faz crescer e te da capacidade total para criar algo novo:

```yaml
---
name: Workflow Feature Development
description: |
  Implementar uma nova feature do zero: planejar design, escrever codigo,
  criar testes, revisar codigo, fazer deploy e monitorar. Inclui boas
  praticas de branching, commits convencionais e CI/CD.
---
```

```markdown
## Visao Geral

Este Skill guia voce atraves do ciclo completo de desenvolvimento de uma
nova feature em um projeto moderno. Ele cobre:

- Planejamento e design da feature
- Criacao de branch feature
- Implementacao com testes
- Code review e melhorias
- Deploy em staging e producao
- Monitoramento pos-deploy

## Pre-requisitos

- Git instalado e configurado
- Node.js 18+ e npm
- Acesso ao repositorio
- Acesso ao pipeline CI/CD (GitHub Actions)
- Credenciais de deploy

## Fases do Workflow

### Fase 1: Planejamento (Planning)

1. Abra uma issue detalhada descrevendo a feature
   - User story: "Como um [role], preciso [funcionalidade]"
   - Criterios de aceitacao: Listar requisitos especificos
   - Tarefas tecnicas: Quebrar em subtarefas menores

2. Aprove a design com stakeholders
   - Crie um ADR (Architecture Decision Record)
   - Documente as principais decisoes tecnicas
   - Identifique dependencias externas

3. Prepare o ambiente
   - Clone o repositorio localmente
   - Instale dependencias: `npm install`
   - Execute testes existentes: `npm test`

### Fase 2: Desenvolvimento (Implementation)

1. Crie um branch feature
   ```bash
   git checkout -b feat/minha-feature
   ```

2. Implemente o codigo
   - Siga o padrao de projeto existente
   - Mantenha funcoes pequenas e testaveis
   - Adicione comentarios para logica complexa

3. Escreva testes (Jest)
   - Testes unitarios para funcoes
   - Testes de integracao para fluxos
   - Cobertura minima de 80%

4. Commit com Conventional Commits
   ```
   feat(payments): adicionar suporte a pagamento parcelado

   - Implementa 3 e 6 parcelas
   - Valida juros de mercado
   - Integra com Stripe API

   Closes #1234
   ```

### Fase 3: Revisao (Code Review)

1. Push para remote
   ```bash
   git push origin feat/minha-feature
   ```

2. Abra um Pull Request
   - Use o template de PR
   - Descreva mudancas principais
   - Linke a issue relacionada
   - Mencione reviewers

3. Aguarde aprovacao
   - Resolva comentarios
   - Re-request review apos mudancas
   - Merge apenas com aprovacao

### Fase 4: Verificacao (Verification)

1. Verifique CI/CD
   - Todos os testes passam?
   - Cobertura de testes OK?
   - Build sem warnings?

2. Deploy em staging
   ```bash
   npm run deploy:staging
   ```

3. Teste em staging
   - Teste os fluxos principais
   - Verifique logs de erro
   - Teste em diferentes navegadores

### Fase 5: Deploy em Producao

1. Merge para main (se tudo OK)
   - Squash or rebase antes de merge
   - Verifique commit message

2. Deploy automatico e acionado
   - GitHub Actions roda testes
   - Build de producao
   - Deploy em producao

3. Monitore
   - Verifique dashboards (Datadog, New Relic)
   - Monitore alertas
   - Verifique logs de erro

## Referencias de Arquivo

- Scripts: veja `scripts/deploy.sh` para os comandos exatos
- Exemplo pratico: `examples/feature-payments-setup.md`
- Troubleshooting comum: `references/feature-dev-troubleshooting.md`

## Troubleshooting

**Q: Testes locais passam mas CI falha?**
A: Verifique versoes de Node. CI pode usar Node 18 e voce estar em 16.

**Q: Deploy em staging funcionou mas producao falha?**
A: Variaveis de ambiente podem ser diferentes. Verifique .env.production.

**Q: Como faco rollback apos deploy?**
A: Execute `npm run rollback`. Veja `scripts/rollback.sh` para detalhes.
```

### 3.5 Exemplo Completo: Skill 'conventional-commit' (Commits Convencionais)

Este e um exemplo menor, focado em uma tarefa especifica: escrever commits convencionais. Pense nele como uma **Coin (Moeda)** — padrao, universal, todo mundo conhece:

```yaml
---
name: Conventional Commits
description: |
  Escrever commits seguindo o padrao Conventional Commits:
  type(scope): subject. Inclui breaking changes, closes issues,
  e mantem historico limpo e legivel.
---
```

```markdown
## Visao Geral

Conventional Commits e um padrao que torna a historia de commits
legivel para maquinas e humanos. Ativa automacao de CHANGELOG,
versionamento semantico e analise de historico.

## Formato

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Tipos Validos

- `feat`: Nova funcionalidade
- `fix`: Correcao de bug
- `docs`: Apenas documentacao
- `style`: Formatacao, whitespace (sem mudanca de codigo)
- `refactor`: Refatoracao sem nova feature ou fix
- `perf`: Melhoria de performance
- `test`: Adicionar ou atualizar testes
- `chore`: Atualizacoes de build, dependencies, etc

## Exemplos

Bom:
```
feat(auth): adicionar autenticacao via OAuth2 Google

- Implementa login via Google
- Cria novo endpoint /auth/google
- Salva tokens em sessao

Closes #456
```

Bom:
```
fix(api): corrigir N+1 query em listagem de usuarios

A query estava fazendo 1 query por usuario. Agora usa
eager loading com includes().

Closes #789
```

Ruim: `fix stuff`
Ruim: `atualizacao importante no codigo`

## Breaking Changes

Se a mudanca quebra compatibilidade anterior, adicione `!`:
```
feat(api)!: remover endpoint /v1/users (use /v2/users)
```

Ou no footer:
```
BREAKING CHANGE: /v1/users descontinuado em favor de /v2/users
```

## Scope

O scope identifica qual parte do projeto e afetada:
- `auth`, `payments`, `database`, `api`, `ui`, etc.

Mantenha consistente com seu projeto.
```

---

## 4. Built-in vs Project vs Personal Skills

Skills podem ser categorizados em tres tipos, dependendo de onde vivem e quem pode acessa-los. A analogia Mario: Power-Ups que todo personagem ja tem (todo Mario comeca sabendo pular), Power-Ups da fase atual (especificos daquele mundo), e Power-Ups secretos (escondidos em areas que so voce encontrou).

| Tipo | O que sao? | Localizacao | Analogia Mario | Exemplos |
|---|---|---|---|---|
| **Built-in Skills** | Skills que vem com o Copilot, Microsoft ou GitHub. Conhecimento padrao que toda IA possui. | Servidor GitHub Copilot (nuvem) | **Pulo basico do Mario**: todo Mario ja nasce sabendo pular. Nao precisa de Power-Up. | - Escrever codigo Python - Revisar pull requests - Debugging basico |
| **Project Skills** | Skills especificos do seu projeto. Documentacao, padroes, scripts que sua equipe mantem. | Folder `.copilot/skills` ou `docs/skills` no seu repositorio | **Power-Ups da fase**: Super Mushrooms e Fire Flowers que ficam nos Blocos "?" daquele mundo especifico. Todo jogador daquela fase pode pega-los. | - jest-testing-para-nosso-projeto - workflow-deploy-terraform - coding-standards-typescript |
| **Personal Skills** | Skills que voce cria para casos muito especificos, pessoais. Seu conhecimento customizado. | Seu workspace local, `~/.copilot/skills` ou equivalente | **Area secreta**: um Warp Zone escondido que so VOCE descobriu. Leva a Power-Ups que ninguem mais conhece. | - meu-framework-custom - padrao-especifico-da-minha-empresa - scripts-pessoais-de-automacao |

### 4.1 Quando Usar Cada Tipo

- Use **Built-in Skills** quando a tarefa e generica e qualquer desenvolvedor com Copilot deveria saber fazer. (Todo Mario sabe pular.)
- Use **Project Skills** quando a tarefa segue padroes especificos do projeto. Todos na equipe precisam desse conhecimento. (Todos os jogadores dessa fase precisam do mesmo Super Mushroom.)
- Use **Personal Skills** quando e um detalhe muito especifico, uma otimizacao pessoal, ou um experimento que voce esta tentando. (Sua area secreta pessoal com Power-Ups customizados.)

---

## 5. Estudo de Caso: As 8 Skills do TodoApp

Para ilustrar os conceitos, vamos examinar um projeto real que implementa Skills: um aplicativo TODO completo (backend Node.js com Express + PostgreSQL, frontend React). Este projeto possui 8 Skills bem estruturadas que cobrem o ciclo completo de desenvolvimento.

Pense nelas como os **8 Power-Ups classicos** que voce encontra no Mushroom Kingdom:

### 5.1 Tabela das 8 Skills do TodoApp

| # | Nome do Skill | Folder Path | Power-Up Mario | Quando se Ativa? | Fases/Conteudo |
|---|---|---|---|---|---|
| 1 | workflow-feature | `.copilot/skills/workflow-feature/` | Super Mushroom (te faz crescer) | Quando voce pede: "adicione uma nova feature" | Plan -> Implement -> Test -> Review -> Deploy |
| 2 | workflow-bugfix | `.copilot/skills/workflow-bugfix/` | Super Star (invencivel temporario) | Quando voce pede: "corrija este bug" ou "ha um problema" | Diagnose -> Isolate -> Fix -> Test -> Verify |
| 3 | workflow-deploy | `.copilot/skills/workflow-deploy/` | Cape Feather (te faz voar) | Quando voce pede: "faca deploy" ou "publique isso" | Build -> Stage -> Test -> Prod -> Monitor |
| 4 | workflow-codereview | `.copilot/skills/workflow-codereview/` | Fire Flower (dispara bolas de fogo) | Quando voce pede: "revise este codigo" ou "analise esse PR" | Security -> Performance -> Style -> Tests -> Approve |
| 5 | conventional-commit | `.copilot/skills/conventional-commit/` | Coin (moeda — padrao universal) | Quando voce escreve um commit | Type -> Scope -> Subject -> Body -> Footer |
| 6 | jest-testing | `.copilot/skills/jest-testing/` | 1-UP Mushroom (vida extra) | Quando voce pede: "escreva testes" ou "teste isso" | Unit Tests -> Integration -> Mocks -> Coverage |
| 7 | multi-stage-dockerfile | `.copilot/skills/multi-stage-dockerfile/` | Mini Mushroom (pequeno e eficiente) | Quando voce pede: "crie um Dockerfile" ou "containerize isso" | Builder Stage -> Prod Stage -> Optimization |
| 8 | postgresql-review | `.copilot/skills/postgresql-review/` | Ice Flower (congela problemas) | Quando voce pede: "revise minha query PostgreSQL" | Indexes -> Query Plan -> N+1 -> Optimization |

### 5.2 Como Esses Skills se Integram

Esses 8 Power-Ups formam um **ecossistema coeso no Mushroom Kingdom**. Quando voce trabalha no TodoApp:

1. Voce pede: "Adicione um recurso de notificacoes por email"
2. **workflow-feature** (Super Mushroom) e ativado. Ele guia voce pelo planejamento e implementacao — voce cresce e fica pronto para a fase.
3. Voce escreve codigo. **jest-testing** (1-UP Mushroom) e ativado quando voce pede testes — vidas extras para o projeto.
4. Voce escreve queries PostgreSQL. **postgresql-review** (Ice Flower) avalia se estao otimizadas — congela problemas de performance.
5. Voce faz commits. **conventional-commit** (Coin) garante que siga o padrao — moedas padrao que todo mundo reconhece.
6. Voce cria um Dockerfile. **multi-stage-dockerfile** (Mini Mushroom) ajuda com boas praticas — container pequeno e eficiente.
7. Voce abre um PR. **workflow-codereview** (Fire Flower) oferece um checklist de revisao — ataca problemas um por um.
8. Tudo pronto. **workflow-deploy** (Cape Feather) orquestra o deploy automatico para producao — voa ate o servidor de producao.

Cada Power-Up e independente (portavel), mas juntos eles criam um fluxo de trabalho coerente e poderoso. Isso e a forca real de uma boa **Loja de Power-Ups**.

---

## 6. Boas Praticas para Escrever Skills

### 6.1 10 Principios para Skills Excelentes

1. **Descricao Clara e Especifica:** Evite ambiguidades. A descricao e o ativador semantico. Seja tao claro que a IA entenda de primeira — como a cor e formato de cada Power-Up no Mario: voce VE e ja sabe o que faz.

2. **Documentacao Estruturada:** Use headings (##, ###), listas, tabelas. Estrutura facilita leitura e compreensao automatica — como os mapas de fase que mostram claramente onde estao os Blocos "?".

3. **Exemplos Praticos:** Nao apenas explique teoricamente. Mostre exemplos reais de quando/como usar. Um replay de gameplay vale mais que mil explicacoes.

4. **Scripts Reutilizaveis:** Se o Skill contem automacao (scripts, comandos), coloque em `scripts/` e referencie de forma clara — como itens guardados no inventario, prontos para usar.

5. **Referencias Completas:** Links para documentacao oficial, guides, blogs. Nao force o Copilot a inventar respostas quando ha documentacao boa — como um manual da fase que explica cada mecanica.

6. **Troubleshooting Section:** Antecipe problemas comuns. Uma secao "Problemas e Solucoes" economiza tempo do jogador — como um guia de "se voce morreu nessa parte, tente isso".

7. **Versionamento:** Mantenha Skills atualizados. Se mudar a API de uma ferramenta, atualize o Skill. Versione claramente — Power-Ups desatualizados podem causar bugs inesperados.

8. **Modularidade:** Um Skill = Uma responsabilidade. Nao tente fazer tudo em um Skill. Crie Skills pequenos e focados — cada Bloco "?" contem UM Power-Up, nao dez.

9. **Testabilidade:** Se o Skill contem formulas, algoritmos ou logica, inclua testes. Comprovabilidade aumenta confianca — teste o Power-Up antes de usar na Boss Battle.

10. **Manutencao Colaborativa:** Se trabalha em equipe, documente como manter o Skill atualizado. Quem e responsavel? Como reportar problemas? — como uma equipe de manutencao da Loja de Power-Ups.

### 6.2 Anti-Padroes: O que NAO Fazer

- **Descricao vaga:** "Skill sobre desenvolvimento". Muito generico — e como um Bloco "?" sem cor, ninguem sabe o que tem dentro.
- **Sem estrutura:** Parede de texto sem headings nem listas — e como uma fase sem sinalizacao, impossivel de navegar.
- **Sem exemplos:** Apenas teoria, nenhum exemplo pratico — e como explicar um Power-Up sem nunca mostrar ele em acao.
- **Muito grande:** Um unico SKILL.md com 1000 linhas. Quebre em multiplos Skills — nenhum Bloco "?" contem o jogo inteiro.
- **Sem referencias:** Nao linka documentacao oficial, forca improviso — e como jogar sem manual nenhum.
- **Desatualizado:** Referencia versao 3 de uma ferramenta que ja esta na versao 7 — e como usar o mapa de Super Mario Bros 1 pra jogar Super Mario World.
- **Sem testes:** Contem formulas/scripts mas ninguem sabe se funciona realmente — e como um Power-Up que pode ser bugado.
- **Ambiguo:** Pode significar 3 coisas diferentes, confunde o Copilot — e como um Bloco "?" que as vezes da Mushroom, as vezes da veneno.

### 6.3 Slash Commands: Invocando Skills Explicitamente

Enquanto Skills normalmente sao ativados automaticamente (voce bate no Bloco "?" durante a fase), voce pode invocar um Skill explicitamente usando um **slash command** (comando de barra). Em VS Code com Copilot Chat:

```
/skill conventional-commit
```

Ou em alguns ambientes:

```
@skill:workflow-deploy
```

Isso forca o Copilot a carregar aquele Skill especifico, mesmo que nao tenha reconhecido automaticamente. E como ir direto na Loja de Power-Ups e pedir: "Me da a Fire Flower!" — em vez de esperar encontrar um Bloco "?" na fase. Util quando voce sabe exatamente qual Power-Up precisa, mas nao encontrou o Bloco certo.

---

## Progressao de Power-Ups: A Jornada do Jogador

Aqui esta como a evolucao dos Power-Ups se compara a evolucao do Mario:

```
TELA DE POWER-UPS — Progressao do Jogador


Level 1  -> Small Mario (Pulo Basico)
             = Companion sem Skills
             Faz o minimo. Um toque e morre.

Level 5  -> Big Mario (Super Mushroom)
             = Companion com Skills basicas (conventional-commit, jest-testing)
             Mais resistente, aguenta erros, tem padrao.

Level 10 -> Fire Mario (Fire Flower)
             = Companion com Skills intermediarias (workflow-feature, codereview)
             Ataca problemas a distancia, cria features completas.

Level 15 -> Cape Mario (Cape Feather)
             = Companion com Skills avancadas (workflow-deploy, multi-stage-dockerfile)
             VOA sobre obstaculos, faz deploy em producao, domina infraestrutura.

BONUS    -> Star Mario (Super Star)
             = Companion com TODAS as 8 Skills + orquestracao
             INVENCIVEL. Modo turbo. Nada o derruba.
```

---

**Anterior:** 4A — Custom Agents | **Proximo:** 4C — Custom Instructions

---

### Power-Up Desbloqueado!

Sofia agora domina Agent Skills e a Loja de Power-Ups.
Ela guardou todos os Power-Ups no seu inventario e seguiu para a proxima fase do Mushroom Kingdom...

**Mapeamento rapido deste capitulo:**

| Conceito Original | Versao Mario |
|---|---|
| Biblioteca de Habilidades | Loja de Power-Ups |
| Skill / Habilidade | Power-Up / Bloco "?" |
| Arvore de Skills | Tela de Power-Ups |
| Agent / Companion | Personagem (Mario, Luigi, Toad...) |
| Grimorio / Feitico | Bloco "?" / Power-Up |
| Guerreiro / Mago / Paladino | Mario / Luigi / Toad |
| Guild / Guilda | Mushroom Kingdom |

---

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Customizing Copilot](https://docs.github.com/en/copilot/customizing-copilot)
- [Copilot Agents Concepts](https://docs.github.com/en/copilot/concepts/agents)
- [Using Copilot Agent Mode](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-agent-mode)

---

<div align="center">

⬅️ [Anterior: Fase 6-1: Custom Agents](6-1-custom-agents.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 6-3: Custom Instructions](6-3-custom-instructions.md)

</div>
