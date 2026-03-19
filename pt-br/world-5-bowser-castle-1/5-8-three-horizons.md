---
title: "Fase 5-8 -- Os Tres Horizontes: Estrategia de Evolucao"
description: "O framework Three Horizons para adocao progressiva de IA e Agentic DevOps nas organizacoes, desde a fundacao ate a transformacao completa."
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - three-horizons
  - estrategia
  - adocao
  - platform-engineering
  - fundacao
  - aceleracao
  - transformacao
  - mario
  - world-5
---

# Fase 5-8 -- Os Tres Horizontes: Estrategia de Evolucao

## Change Log

| Versao | Data       | Autor        | Descricao                          |
|--------|------------|--------------|------------------------------------|
| 1.0.0  | 2026-03-18 | Paula Silva  | Criacao inicial do capitulo        |

---

## Sumario

- [Introducao -- O Mapa dos Tres Reinos](#introducao--o-mapa-dos-tres-reinos)
- [Secao 1 -- O que sao os Three Horizons?](#secao-1--o-que-sao-os-three-horizons)
  - [1.1 Definicao do Framework](#11-definicao-do-framework)
  - [1.2 Por Que Tres Horizontes?](#12-por-que-tres-horizontes)
  - [1.3 A Analogia Mario: Os Tres Reinos do Mushroom Kingdom](#13-a-analogia-mario-os-tres-reinos-do-mushroom-kingdom)
  - [1.4 Tabela Mestra: Os Tres Horizontes](#14-tabela-mestra-os-tres-horizontes)
- [Secao 2 -- Horizonte 1: Fundacao (Construir Estradas e Pontes)](#secao-2--horizonte-1-fundacao-construir-estradas-e-pontes)
  - [2.1 O que e o Horizonte 1](#21-o-que-e-o-horizonte-1)
  - [2.2 Analogia Mario: Construir Estradas e Pontes](#22-analogia-mario-construir-estradas-e-pontes)
  - [2.3 O que Fazer no Horizonte 1](#23-o-que-fazer-no-horizonte-1)
  - [2.4 Tecnologias do Horizonte 1](#24-tecnologias-do-horizonte-1)
  - [2.5 Sinais de que Voce Completou o Horizonte 1](#25-sinais-de-que-voce-completou-o-horizonte-1)
  - [2.6 Erros Comuns no Horizonte 1](#26-erros-comuns-no-horizonte-1)
- [Secao 3 -- Horizonte 2: Aceleracao (Adicionar Veiculos e Fast Travel)](#secao-3--horizonte-2-aceleracao-adicionar-veiculos-e-fast-travel)
  - [3.1 O que e o Horizonte 2](#31-o-que-e-o-horizonte-2)
  - [3.2 Analogia Mario: Veiculos e Fast Travel](#32-analogia-mario-veiculos-e-fast-travel)
  - [3.3 O que Fazer no Horizonte 2](#33-o-que-fazer-no-horizonte-2)
  - [3.4 Tecnologias do Horizonte 2](#34-tecnologias-do-horizonte-2)
  - [3.5 Os 3 Pilares de Cada Horizonte](#35-os-3-pilares-de-cada-horizonte)
  - [3.6 Sinais de que Voce Completou o Horizonte 2](#36-sinais-de-que-voce-completou-o-horizonte-2)
- [Secao 4 -- Horizonte 3: Transformacao (Voar e Teletransportar)](#secao-4--horizonte-3-transformacao-voar-e-teletransportar)
  - [4.1 O que e o Horizonte 3](#41-o-que-e-o-horizonte-3)
  - [4.2 Analogia Mario: Voar e Teletransportar](#42-analogia-mario-voar-e-teletransportar)
  - [4.3 O que Fazer no Horizonte 3](#43-o-que-fazer-no-horizonte-3)
  - [4.4 Tecnologias do Horizonte 3](#44-tecnologias-do-horizonte-3)
  - [4.5 Sinais de que Voce Esta no Horizonte 3](#45-sinais-de-que-voce-esta-no-horizonte-3)
- [Secao 5 -- Os 3 Pilares de Cada Horizonte em Detalhes](#secao-5--os-3-pilares-de-cada-horizonte-em-detalhes)
  - [5.1 Pilar 1: Developer Productivity (Poder de Ataque)](#51-pilar-1-developer-productivity-poder-de-ataque)
  - [5.2 Pilar 2: DevOps Lifecycle (Ciclo de Quests)](#52-pilar-2-devops-lifecycle-ciclo-de-quests)
  - [5.3 Pilar 3: Application Platform (Infraestrutura do Mundo)](#53-pilar-3-application-platform-infraestrutura-do-mundo)
  - [5.4 Tabela dos 3 Pilares por Horizonte](#54-tabela-dos-3-pilares-por-horizonte)
- [Secao 6 -- Comparando os Tres Horizontes na Pratica](#secao-6--comparando-os-tres-horizontes-na-pratica)
  - [6.1 Cenario: Criar uma Nova Feature](#61-cenario-criar-uma-nova-feature)
  - [6.2 Cenario: Responder a um Incidente](#62-cenario-responder-a-um-incidente)
  - [6.3 Cenario: Onboarding de Novo Dev](#63-cenario-onboarding-de-novo-dev)
- [Secao 7 -- Roadmap Pratico: Como Evoluir entre Horizontes](#secao-7--roadmap-pratico-como-evoluir-entre-horizontes)
  - [7.1 De H1 para H2: O que Precisa Acontecer](#71-de-h1-para-h2-o-que-precisa-acontecer)
  - [7.2 De H2 para H3: O que Precisa Acontecer](#72-de-h2-para-h3-o-que-precisa-acontecer)
  - [7.3 Timeline Realista](#73-timeline-realista)
- [Secao 8 -- A Jornada e Cumulativa, Nao Substitutiva](#secao-8--a-jornada-e-cumulativa-nao-substitutiva)
  - [8.1 Cada Horizonte Inclui o Anterior](#81-cada-horizonte-inclui-o-anterior)
  - [8.2 Nao Pule Horizontes](#82-nao-pule-horizontes)
- [Secao 9 -- Como Identificar em Qual Horizonte Voce Esta](#secao-9--como-identificar-em-qual-horizonte-voce-esta)
  - [9.1 Checklist por Horizonte](#91-checklist-por-horizonte)
  - [9.2 Autoavaliacao Rapida](#92-autoavaliacao-rapida)
- [O que Aprendemos -- Tabela de Resumo](#o-que-aprendemos--tabela-de-resumo)
- [Referencias](#referencias)

---

## Introducao -- O Mapa dos Tres Reinos

Sofia estava olhando um mapa enorme na parede do castelo. O mapa mostrava o Mushroom Kingdom dividido em tres regioes distintas, cada uma com um nivel de desenvolvimento diferente:

A primeira regiao mostrava estradas de terra, pontes de madeira e vilas simples. Era funcional, mas basica.

A segunda regiao mostrava estradas pavimentadas, veiculos rapidos, e vilas com magia -- tudo mais rapido e mais eficiente.

A terceira regiao era espetacular: personagens voando, portais de teletransporte, castelos que se construiam sozinhos, e um exercito de companions coordenados.

"Esses sao os Tres Horizontes," explicou o Toad estrategista, apontando para o mapa. "Toda organizacao comeca no Horizonte 1 -- construindo a base. Depois evolui para o Horizonte 2 -- acelerando com magia e tecnologia. E finalmente chega ao Horizonte 3 -- transformacao completa, onde o impossivel se torna rotina."

Sofia olhou para os tres reinos. "E eu estou... no Horizonte 1?"

"Voce ja esta entre o 1 e o 2, Sofia. O segredo e nao tentar pular direto para o 3. No RPG, voce nao equipa a armadura lendaria no nivel 1. Primeiro precisa subir de nivel, melhorar suas stats, e so ENTAO esta pronta."

---

## Secao 1 -- O que sao os Three Horizons?

### 1.1 Definicao do Framework

**Three Horizons** (Tres Horizontes) e uma estrategia para empresas adotarem novas tecnologias de forma progressiva -- sem tentar mudar tudo de uma vez (o que geralmente da errado).

O framework divide a jornada de transformacao em tres fases sequenciais e cumulativas:

- **Horizonte 1 (Fundacao):** Estabilizar e padronizar. Construir a base.
- **Horizonte 2 (Aceleracao):** Automatizar e potencializar. Adicionar velocidade.
- **Horizonte 3 (Transformacao):** IA-Native e Agentico. Mudar fundamentalmente como se trabalha.

### 1.2 Por Que Tres Horizontes?

A maioria das empresas falha ao adotar novas tecnologias porque tenta ir de 0 a 100 de uma vez. O resultado: caos, desperdicio, e rejeicao pela equipe.

Os Three Horizons resolvem isso com evolucao gradual:

- H1 garante que os **fundamentos** estao solidos
- H2 usa os fundamentos para **acelerar** com IA e automacao
- H3 transforma o modo de trabalho com **agentes autonomos**

### 1.3 A Analogia Mario: Os Tres Reinos do Mushroom Kingdom

> **ANALOGIA MARIO:** Imagine que o Mushroom Kingdom esta sendo construido em tres fases:
>
> **Horizonte 1 (Fundacao):** Construir estradas e pontes. Antes de colocar veiculos, voce precisa de ESTRADAS. Antes de fazer fast-travel, voce precisa de PONTES. H1 e sobre construir a infraestrutura basica: CI/CD, GitHub Enterprise, padroes de codigo, seguranca basica. Sem isso, nada funciona.
>
> **Horizonte 2 (Aceleracao):** Adicionar veiculos e fast-travel. Agora que as estradas existem, voce coloca VEICULOS nelas (Copilot, GHAS, IDP). Mario nao precisa mais andar a pe -- ele pega um Yoshi, um kart, ou usa um cano express. Tudo mais rapido, mas sobre a mesma infraestrutura do H1.
>
> **Horizonte 3 (Transformacao):** Desbloquear voo e teletransporte. Mario nao precisa mais de estradas! Com a Cape Feather, ele VOA. Com Warp Zones avancados, ele se TELETRANSPORTA. Agents autonomos fazem missoes sozinhos. O castelo se constroi sozinho. E uma mudanca FUNDAMENTAL de como o jogo funciona.

### 1.4 Tabela Mestra: Os Tres Horizontes

| Horizonte | Nome | Analogia Mario | O que Acontece | Tecnologias |
|---|---|---|---|---|
| **H1** | Fundacao -- Estabilizar e Padronizar | Construir estradas e pontes com fundacoes solidas | Padronizar processos, implementar CI/CD, adotar GitHub Enterprise, estabelecer Inner Source | GitHub Enterprise Cloud, GitHub Actions, Azure DevOps migration, seguranca basica |
| **H2** | Aceleracao -- Automatizar e Potencializar | Adicionar veiculos e fast-travel (encantar o castelo com magia) | Adotar Copilot, automatizar testes e seguranca, implementar IDP, platform engineering | GitHub Copilot, GitHub Advanced Security (GHAS), Azure AI Foundry, IDP com templates |
| **H3** | Transformacao -- AI-Native e Agentic | Desbloquear voo e teletransporte (o castelo ganha vida propria) | Spec-Driven Development, agentes autonomos, multi-agent workflows, auto-recuperacao | Copilot Agent Mode, Coding Agents, MCP, Azure SRE Agent, Spec-Kit |

---

## Secao 2 -- Horizonte 1: Fundacao (Construir Estradas e Pontes)

### 2.1 O que e o Horizonte 1

O Horizonte 1 e sobre **estabilizar e padronizar**. Antes de acelerar (H2) ou transformar (H3), voce precisa de uma base solida. Sem fundacao, qualquer coisa que voce construir em cima vai desmoronar.

O foco do H1:

- **Unificar ferramentas:** Todo mundo no GitHub Enterprise (uma unica plataforma)
- **Padronizar processos:** CI/CD, branching strategy, code review, deploy
- **Implementar seguranca basica:** Autenticacao, autorizacao, secrets management
- **Estabelecer Inner Source:** Compartilhamento de codigo entre equipes
- **Migrar de ferramentas legadas:** Azure DevOps → GitHub, Jenkins → GitHub Actions

### 2.2 Analogia Mario: Construir Estradas e Pontes

> **ANALOGIA MARIO:** No H1, voce esta construindo as ESTRADAS do Mushroom Kingdom. Antes de Mario poder correr rapido, ele precisa de um CAMINHO. Antes de usar veiculos, precisa de PONTES sobre os abismos. O H1 nao e glamoroso -- nao tem power-ups brilhantes, nao tem companions magicos. Mas e ESSENCIAL.
>
> Sem estradas, Mario precisa andar por terra, floresta e lama. Cada fase demora o triplo. Com estradas pavimentadas, Mario ja corre mais rapido, mesmo sem power-ups. A estrada E o primeiro power-up -- so que de infraestrutura.

### 2.3 O que Fazer no Horizonte 1

| Acao | O que Significa | Analogia Mario |
|---|---|---|
| **Migrar para GitHub Enterprise** | Centralizar todo o codigo numa plataforma | Construir a ESTRADA PRINCIPAL do Kingdom |
| **Implementar CI/CD com GitHub Actions** | Automacao basica de build, test, deploy | Adicionar checkpoints automaticos nas estradas |
| **Definir branching strategy** | GitFlow, trunk-based, ou GitHub Flow | Definir as REGRAS de transito |
| **Estabelecer code review** | Todo PR precisa de review antes de merge | Adicionar guaritas de inspeccao nas pontes |
| **Configurar seguranca basica** | Branch protection, CODEOWNERS, 2FA | Construir MUROS ao redor das vilas |
| **Inner Source** | Times compartilham codigo internamente | Abrir caminhos entre as vilas (nao so a estrada principal) |
| **Documentar padroes** | Guias de contribuicao, templates de PR | Placas de sinalizacao nas estradas |

### 2.4 Tecnologias do Horizonte 1

| Tecnologia | Categoria | Para que Serve |
|---|---|---|
| **GitHub Enterprise Cloud** | Plataforma | Centralizar codigo, PRs, issues, projetos |
| **GitHub Actions** | CI/CD | Pipelines automatizadas de build, test, deploy |
| **Azure DevOps Migration** | Migracao | Migrar de ADO para GitHub progressivamente |
| **Branch Protection Rules** | Seguranca | Proteger branches principais |
| **CODEOWNERS** | Governanca | Definir donos de cada area do codigo |
| **Conventional Commits** | Padronizacao | Padronizar mensagens de commit |
| **SemVer** | Versionamento | Versionamento semantico de releases |

### 2.5 Sinais de que Voce Completou o Horizonte 1

- [ ] Todo o codigo esta no GitHub Enterprise
- [ ] Todas as equipes usam CI/CD com GitHub Actions
- [ ] Todo PR passa por code review obrigatorio
- [ ] Branch protection esta configurado em todos os repos
- [ ] Seguranca basica implementada (2FA, SSO)
- [ ] Padroes documentados e seguidos
- [ ] Inner Source funcionando entre equipes

### 2.6 Erros Comuns no Horizonte 1

| Erro | Consequencia | Como Evitar |
|---|---|---|
| Pular H1 e ir direto para H2/H3 | Agentes sem fundacao = caos | Resista a tentacao de pular etapas |
| Migrar tudo de uma vez | Time sobrecarregado, resistencia | Migre incrementalmente: um time de cada vez |
| Nao documentar padroes | Cada time faz diferente | Crie um guia de contribuicao ANTES de migrar |
| Ignorar seguranca basica | Vulnerabilidades expostas | Seguranca e H1, nao H2 |

---

## Secao 3 -- Horizonte 2: Aceleracao (Adicionar Veiculos e Fast Travel)

### 3.1 O que e o Horizonte 2

O Horizonte 2 e sobre **acelerar e potencializar** o que ja funciona. Agora que a base esta solida (H1), voce adiciona IA e automacao para fazer tudo mais rapido, mais seguro e mais eficiente.

O foco do H2:

- **Adotar GitHub Copilot:** IA assistindo o desenvolvimento
- **Implementar GHAS:** Seguranca automatica com IA
- **Platform Engineering:** IDP (Internal Developer Platform)
- **Automacao inteligente:** Testes automatizados com IA, code review com IA
- **Azure AI Foundry:** Construir e customizar modelos de IA

### 3.2 Analogia Mario: Veiculos e Fast Travel

> **ANALOGIA MARIO:** No H2, as estradas do H1 agora tem VEICULOS. Mario pode montar em Yoshi (Copilot) para ir mais rapido. Pode usar karts (IDP) para viagens longas. Pode usar canos express (templates) para pular direto para onde precisa. E o castelo agora tem magia (GHAS) que detecta invasores automaticamente.
>
> O H2 NAO muda as estradas -- ele adiciona coisas EM CIMA das estradas. Se as estradas nao existirem (H1 nao feito), os veiculos nao tem onde rodar. Por isso H1 vem primeiro.

### 3.3 O que Fazer no Horizonte 2

| Acao | O que Significa | Analogia Mario |
|---|---|---|
| **Adotar Copilot** | Devs usam Copilot para escrever codigo mais rapido | Montar em Yoshi -- companion que ajuda em tempo real |
| **Implementar GHAS** | Code scanning, secret scanning, Dependabot | Instalar detectores de armadilhas magicos nas estradas |
| **Automatizar testes com IA** | Geracao automatica de testes | Treinos automaticos antes de cada boss battle |
| **IDP com templates** | Devs criam projetos novos em minutos | Lojas de itens prontos no caminho |
| **Platform Engineering** | Plataforma self-service para devs | Centro de fast-travel para todas as vilas |
| **Azure AI Foundry** | Construir e usar modelos de IA | A Forja onde armas magicas sao criadas |

### 3.4 Tecnologias do Horizonte 2

| Tecnologia | Categoria | Para que Serve |
|---|---|---|
| **GitHub Copilot** | Produtividade | IA para escrita e revisao de codigo |
| **GitHub Advanced Security** | Seguranca | Code scanning, secret scanning, Dependabot |
| **Azure AI Foundry** | IA | Construir e customizar modelos de IA |
| **IDP (Backstage/Port)** | Plataforma | Portal self-service para desenvolvedores |
| **Templates de projeto** | Padronizacao | Novos projetos criados com padrao em minutos |
| **Copilot Autofix** | Seguranca | Correcao automatica de vulnerabilidades |

### 3.5 Os 3 Pilares de Cada Horizonte

Cada horizonte e sustentado por 3 pilares:

| Pilar | Analogia Mario | O que Cobre |
|---|---|---|
| **Developer Productivity** (Produtividade do Desenvolvedor) | Poder de ataque do guerreiro | Ferramentas que fazem o dev produzir mais e melhor: IDE, Copilot, templates, automacao |
| **DevOps Lifecycle** (Ciclo de Vida DevOps) | O ciclo de quests do jogo | Do codigo ao deploy: CI/CD, testes, seguranca, monitoramento -- o pipeline completo |
| **Application Platform** (Plataforma de Aplicacao) | A infraestrutura do mundo do jogo | Onde o codigo roda: nuvem, containers, Kubernetes, IDP, self-service para devs |

### 3.6 Sinais de que Voce Completou o Horizonte 2

- [ ] 80%+ dos devs usam Copilot diariamente
- [ ] GHAS ativo em todos os repositorios criticos
- [ ] Testes automatizados com IA gerando cobertura
- [ ] IDP funcionando -- devs criam projetos em minutos
- [ ] Code review assistido por IA
- [ ] Metricas de produtividade sendo coletadas (DORA metrics)
- [ ] Seguranca automatizada no pipeline

---

## Secao 4 -- Horizonte 3: Transformacao (Voar e Teletransportar)

### 4.1 O que e o Horizonte 3

O Horizonte 3 e a **transformacao total**. O modo de trabalhar muda fundamentalmente. Agentes de IA nao apenas ajudam -- eles SAO membros da equipe. O desenvolvimento deixa de ser "humano escreve codigo" e passa a ser "humano define especificacoes, agentes executam".

O foco do H3:

- **Spec-Driven Development:** Especificacoes primeiro, codigo gerado por agentes
- **Agentes autonomos:** Coding Agents, SRE Agents, Review Agents
- **Multi-agent workflows:** Multiplos agentes coordenados
- **MCP integrado:** Agentes conectados a todas as ferramentas
- **Auto-recuperacao:** Sistemas que se auto-corrigem

### 4.2 Analogia Mario: Voar e Teletransportar

> **ANALOGIA MARIO:** No H3, Mario nao precisa mais de estradas (H1) nem de veiculos (H2) para as tarefas do dia a dia. Com a **Cape Feather**, ele VOA -- vai direto para onde precisa sem seguir caminhos. Com **Warp Zones avancados**, ele se TELETRANSPORTA. Companions autonomos saem em missoes e voltam com resultados. O castelo se CONSTROI sozinho baseado em plantas (specs).
>
> Isso nao significa que as estradas e veiculos desapareceram! Eles CONTINUAM existindo para quando sao necessarios. Mas o modo PRINCIPAL de operar agora e completamente diferente. E como a diferenca entre andar a pe e teletransportar -- mesmo mundos diferentes de eficiencia.

### 4.3 O que Fazer no Horizonte 3

| Acao | O que Significa | Analogia Mario |
|---|---|---|
| **Adotar Spec-Driven Development** | Devs escrevem specs, agentes geram codigo | Mario desenha a planta, NPC constroi o castelo |
| **Usar Coding Agents** | Agentes resolvem issues e abrem PRs sozinhos | Yoshi vai em missoes solo e volta com resultados |
| **Implementar MCP** | Agentes conectados a ferramentas externas | Warp Zones para todos os mundos |
| **Agent Mode como padrao** | Agent Mode e o modo principal de desenvolvimento | Yoshi autopilot como modo padrao de jogo |
| **Azure SRE Agent** | Agentes respondem a incidentes autonomamente | Guardioes autonomos que defendem o castelo 24/7 |
| **Multi-agent workflows** | Multiplos agentes coordenados por orquestrador | Exercito de companions com comandante |

### 4.4 Tecnologias do Horizonte 3

| Tecnologia | Categoria | Para que Serve |
|---|---|---|
| **Copilot Agent Mode** | Desenvolvimento | Agente executa tarefas complexas no IDE |
| **GitHub Coding Agent** | Automacao | Resolve issues e abre PRs autonomamente |
| **MCP** | Integracao | Conecta agentes a ferramentas externas |
| **Azure SRE Agent** | Operacoes | Resposta autonoma a incidentes |
| **Spec-Kit** | Metodologia | Desenvolvimento orientado a especificacoes |
| **Custom Agents (.agent.md)** | Configuracao | Agentes especializados por dominio |
| **Multi-agent Orchestration** | Coordenacao | Orquestrar multiplos agentes |

### 4.5 Sinais de que Voce Esta no Horizonte 3

- [ ] Spec-Driven Development e o fluxo padrao
- [ ] Coding Agents resolvem issues regularmente
- [ ] MCP conectado a pelo menos 3 ferramentas externas
- [ ] Incidentes em producao tratados por SRE Agents
- [ ] Custom Agents configurados para cada dominio do projeto
- [ ] Multi-agent workflows para features complexas
- [ ] Devs gastam mais tempo revisando do que escrevendo codigo

---

## Secao 5 -- Os 3 Pilares de Cada Horizonte em Detalhes

### 5.1 Pilar 1: Developer Productivity (Poder de Ataque)

| Horizonte | O que Muda | Analogia Mario |
|---|---|---|
| **H1** | IDE padronizado, extensions, snippets | Espada basica e armadura simples |
| **H2** | Copilot Completions + Chat, templates | Espada encantada + manual de combate |
| **H3** | Agent Mode, Coding Agents, Spec-Driven | Exercito de companions + armas lendarias |

### 5.2 Pilar 2: DevOps Lifecycle (Ciclo de Quests)

| Horizonte | O que Muda | Analogia Mario |
|---|---|---|
| **H1** | CI/CD basico, testes manuais, deploy padronizado | Fases com checkpoint flag e regras claras |
| **H2** | Testes com IA, seguranca com GHAS, Copilot review | Fases com detectores de armadilha e auto-save |
| **H3** | Pipeline agentica, auto-recuperacao, SRE Agent | Fases que se auto-reparam e companions que patrulham |

### 5.3 Pilar 3: Application Platform (Infraestrutura do Mundo)

| Horizonte | O que Muda | Analogia Mario |
|---|---|---|
| **H1** | Cloud basico, containers, Kubernetes | Castelos construidos com tijolos |
| **H2** | IDP, self-service, templates | Castelos montados com kits pre-fabricados |
| **H3** | Plataforma totalmente agentica, auto-scaling com IA | Castelos que se constroem e se adaptam sozinhos |

### 5.4 Tabela dos 3 Pilares por Horizonte

| Pilar | H1 (Fundacao) | H2 (Aceleracao) | H3 (Transformacao) |
|---|---|---|---|
| **Developer Productivity** | IDE + extensoes padronizadas | Copilot + templates + IDP | Agent Mode + Coding Agents + Specs |
| **DevOps Lifecycle** | GitHub Actions + CI/CD basico | GHAS + Copilot review + testes IA | Pipeline agentica + SRE Agent |
| **Application Platform** | Cloud + containers + K8s | IDP + self-service + templates | Plataforma auto-gerenciada por agentes |

---

## Secao 6 -- Comparando os Tres Horizontes na Pratica

### 6.1 Cenario: Criar uma Nova Feature

| Horizonte | Como Funciona | Tempo | Analogia Mario |
|---|---|---|---|
| **H1** | Dev le spec, escreve todo codigo, configura CI/CD, faz PR, espera review | 3-5 dias | Mario constroi o castelo tijolo por tijolo |
| **H2** | Dev usa Copilot pra escrever mais rapido, GHAS escaneia, IDP gera template | 1-2 dias | Mario monta com kit pre-fabricado + Yoshi ajuda |
| **H3** | Dev escreve spec, Coding Agent gera codigo e abre PR, dev revisa | 2-4 horas | Mario entrega a planta, NPC constroi o castelo |

### 6.2 Cenario: Responder a um Incidente

| Horizonte | Como Funciona | Tempo de Resposta |
|---|---|---|
| **H1** | Dev de plantao acorda, analisa logs manualmente, implementa fix | 2-4 horas |
| **H2** | Alerta com contexto rico (GHAS, metricas), dev resolve com Copilot | 30-60 minutos |
| **H3** | SRE Agent detecta, diagnostica, aplica fix automaticamente, notifica dev | 5-15 minutos |

### 6.3 Cenario: Onboarding de Novo Dev

| Horizonte | Como Funciona | Tempo ate Produtividade |
|---|---|---|
| **H1** | Novo dev le docs, configura ambiente manualmente, pede ajuda | 2-4 semanas |
| **H2** | IDP com template, Copilot para duvidas, docs automatizados | 3-5 dias |
| **H3** | Codespace pronto em minutos, agente como tutor, spec-driven desde dia 1 | 1-2 dias |

---

## Secao 7 -- Roadmap Pratico: Como Evoluir entre Horizontes

### 7.1 De H1 para H2: O que Precisa Acontecer

```
CHECKLIST H1 → H2:

[  ] CI/CD funcionando em 100% dos repos
[  ] Code review como pratica estabelecida
[  ] Seguranca basica implementada
[  ] Equipe confortavel com Git e GitHub
[  ] Inner Source funcionando
[  ] Padroes documentados

ACOES PARA INICIAR H2:
1. Piloto Copilot com 2-3 equipes (2 semanas)
2. Habilitar GHAS nos repos mais criticos (1 semana)
3. Configurar Copilot Autofix (1 semana)
4. Iniciar construcao do IDP (1-3 meses)
5. Expandir Copilot para todas as equipes (1 mes)
```

### 7.2 De H2 para H3: O que Precisa Acontecer

```
CHECKLIST H2 → H3:

[  ] Copilot adotado por 80%+ dos devs
[  ] GHAS ativo e gerando valor
[  ] IDP funcional e usado
[  ] Metricas DORA sendo coletadas
[  ] Equipe madura em uso de IA

ACOES PARA INICIAR H3:
1. Piloto Spec-Driven Dev com 1 equipe (1 mes)
2. Configurar Custom Agents (.agent.md) para o projeto (1 semana)
3. Configurar MCP para Azure Boards + banco + GitHub (2 semanas)
4. Piloto Coding Agent em issues de baixa complexidade (2 semanas)
5. Expandir progressivamente para mais equipes (3-6 meses)
```

### 7.3 Timeline Realista

```
MES 1-6:    ████████████████████████████████  HORIZONTE 1
            Fundacao, padronizacao, migracao

MES 4-12:             ████████████████████████████████  HORIZONTE 2
                      Copilot, GHAS, IDP, aceleracao
                      (sobreposicao com H1 final)

MES 10-24:                           ████████████████████████████████  HORIZONTE 3
                                     Agents, MCP, Spec-Driven, transformacao
                                     (sobreposicao com H2 final)
```

Note: os horizontes se SOBREPOEM. Voce nao termina H1 e comeca H2. Voce comeca H2 quando H1 esta maduro o suficiente, e comeca H3 quando H2 esta maduro.

---

## Secao 8 -- A Jornada e Cumulativa, Nao Substitutiva

### 8.1 Cada Horizonte Inclui o Anterior

```
H3 = H1 + H2 + novas capacidades
H2 = H1 + novas capacidades
H1 = fundacao

Nao e: H1 → descarta H1 → H2 → descarta H2 → H3
E:     H1 → H1 + H2 → H1 + H2 + H3
```

> **ANALOGIA MARIO:** Mario nao joga fora a espada quando ganha o escudo. E nao joga fora o escudo quando ganha companions. Ele ACUMULA: espada + escudo + companions. Cada horizonte ADICIONA ao arsenal, nao substitui o anterior.

### 8.2 Nao Pule Horizontes

| O que acontece se pular... | Resultado |
|---|---|
| **H1 (ir direto para H2)** | Copilot sem CI/CD = codigo gerado por IA sem testes, sem review, sem pipeline. Caos. |
| **H1 e H2 (ir direto para H3)** | Coding Agent sem fundacao = agentes gerando codigo sem padroes, sem seguranca, sem governanca. Desastre. |
| **H2 (ir de H1 para H3)** | Agentes autonomos sem a experiencia de H2 = equipe nao sabe avaliar output de agentes. Risco alto. |

---

## Secao 9 -- Como Identificar em Qual Horizonte Voce Esta

### 9.1 Checklist por Horizonte

**Voce esta no H1 se:**
- Ainda migrando para GitHub Enterprise
- CI/CD inconsistente entre times
- Seguranca basica incompleta
- Padroes nao documentados
- Inner Source inexistente

**Voce esta no H2 se:**
- GitHub Enterprise estavel
- CI/CD funcionando, comecando a usar Copilot
- GHAS sendo implementado
- IDP em construcao
- Equipe aprendendo a usar IA

**Voce esta no H3 se:**
- Copilot e GHAS maduros
- Spec-Driven Development em pratica
- Coding Agents resolvendo issues
- MCP conectado a ferramentas
- Agentes como membros da equipe

### 9.2 Autoavaliacao Rapida

Conte quantos "sim" voce tem em cada horizonte. Seu nivel e o horizonte com mais "sim":

| Horizonte | Pergunta | Sim/Nao |
|---|---|---|
| H1 | Todo codigo esta no GitHub Enterprise? | |
| H1 | CI/CD em 100% dos repos? | |
| H1 | Code review obrigatorio em todos os PRs? | |
| H2 | 80%+ dos devs usam Copilot? | |
| H2 | GHAS ativo nos repos criticos? | |
| H2 | IDP funcional? | |
| H3 | Spec-Driven Dev como pratica? | |
| H3 | Coding Agents resolvendo issues? | |
| H3 | MCP conectado a 3+ ferramentas? | |

---

## O que Aprendemos -- Tabela de Resumo

| Conceito | O que E | Analogia Mario | Por que Importa |
|---|---|---|---|
| **Three Horizons** | Framework de adocao progressiva | Tres reinos do Mushroom Kingdom | Evolucao gradual, nao salto no escuro |
| **H1 -- Fundacao** | Estabilizar, padronizar, construir base | Construir estradas e pontes | Sem fundacao, nada se sustenta |
| **H2 -- Aceleracao** | Adicionar IA e automacao | Veiculos e fast-travel | Fazer mais rapido sobre base solida |
| **H3 -- Transformacao** | AI-Native, agentes autonomos | Voar e teletransportar | Mudar fundamentalmente como se trabalha |
| **3 Pilares** | Productivity, Lifecycle, Platform | Ataque, Quests, Mundo | Cada horizonte melhora os 3 pilares |
| **Cumulativo** | Cada H inclui o anterior | Espada + escudo + companions | Nao descarte o que ja funciona |

---

## Referencias

| Recurso | Tipo | Link |
|---|---|---|
| Three Horizons of Growth (McKinsey) | Framework | https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/enduring-ideas-the-three-horizons-of-growth |
| GitHub Enterprise Cloud | Plataforma | https://github.com/enterprise |
| GitHub Advanced Security | Seguranca | https://github.com/features/security |
| GitHub Copilot | IA | https://github.com/features/copilot |
| Platform Engineering (Gartner) | Pesquisa | https://www.gartner.com/en/articles/what-is-platform-engineering |
| Azure SRE Agent | Operacoes | https://learn.microsoft.com/en-us/azure/sre-agent |
| Playbook Azure DevOps → GitHub | Migracao | https://learn.microsoft.com/en-us/devops/develop/git/migrate-from-tfvc-to-git |
| DORA Metrics | Metricas | https://dora.dev |

---

*Fase 5-8 concluida! Voce agora entende a estrategia dos Tres Horizontes e sabe que a evolucao e gradual, cumulativa e construida sobre fundacoes solidas. Nao tente voar antes de construir estradas. Mas saiba que o VOO esta mais perto do que voce imagina. Na proxima fase, a Boss Battle do World 5!*

---

<div align="center">

⬅️ [Anterior: Fase 5-7: MCP Deep Dive](5-7-mcp-deep-dive.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 5-9: GitHub Advanced Security](5-9-github-advanced-security.md)

</div>
