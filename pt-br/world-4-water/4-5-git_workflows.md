---
title: "Fase 4-5 -- Fluxos de Trabalho: Git Workflows"
description: "Git Flow, GitHub Flow, trunk-based development e GitLab Flow — como organizar o trabalho do time no Mushroom Kingdom"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agentic-devops
  - mario
  - world-4
  - git
  - git-flow
  - github-flow
  - trunk-based
  - branching
---

# Fase 4-5 -- Fluxos de Trabalho: Git Workflows

---

## Change Log

| Versao | Data       | Autor                                  | Descricao          |
|--------|------------|----------------------------------------|--------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial    |

---

## Sumario

- [Prologo: O Caos das Branches](#prologo-o-caos-das-branches)
- [1. O Que E um Git Workflow?](#1-o-que-e-um-git-workflow)
  - [1.1 Por Que Precisamos de Regras](#11-por-que-precisamos-de-regras)
  - [1.2 Conceitos Fundamentais](#12-conceitos-fundamentais)
- [2. Git Flow: O Torneio Formal](#2-git-flow-o-torneio-formal)
  - [2.1 As 5 Branches do Git Flow](#21-as-5-branches-do-git-flow)
  - [2.2 Diagrama Completo](#22-diagrama-completo)
  - [2.3 Fluxo de Feature](#23-fluxo-de-feature)
  - [2.4 Fluxo de Release](#24-fluxo-de-release)
  - [2.5 Fluxo de Hotfix](#25-fluxo-de-hotfix)
  - [2.6 Quando Usar Git Flow](#26-quando-usar-git-flow)
- [3. GitHub Flow: A Partida Casual](#3-github-flow-a-partida-casual)
  - [3.1 Regras Simples](#31-regras-simples)
  - [3.2 O Fluxo Completo](#32-o-fluxo-completo)
  - [3.3 Pull Requests: O Coracao do GitHub Flow](#33-pull-requests-o-coracao-do-github-flow)
  - [3.4 Quando Usar GitHub Flow](#34-quando-usar-github-flow)
- [4. Trunk-Based Development: Todos no Mesmo Campo](#4-trunk-based-development-todos-no-mesmo-campo)
  - [4.1 A Filosofia](#41-a-filosofia)
  - [4.2 Como Funciona](#42-como-funciona)
  - [4.3 Feature Flags no Trunk-Based](#43-feature-flags-no-trunk-based)
  - [4.4 Quando Usar Trunk-Based](#44-quando-usar-trunk-based)
- [5. GitLab Flow: O Meio-Termo](#5-gitlab-flow-o-meio-termo)
  - [5.1 Environment Branches](#51-environment-branches)
  - [5.2 Release Branches](#52-release-branches)
  - [5.3 Quando Usar GitLab Flow](#53-quando-usar-gitlab-flow)
- [6. Branching: Universos Paralelos](#6-branching-universos-paralelos)
  - [6.1 Nomenclatura de Branches](#61-nomenclatura-de-branches)
  - [6.2 Branch Protection Rules](#62-branch-protection-rules)
  - [6.3 Boas Praticas de Branching](#63-boas-praticas-de-branching)
- [7. Merge: Quando Universos Colidem](#7-merge-quando-universos-colidem)
  - [7.1 Merge Strategies](#71-merge-strategies)
  - [7.2 Merge Conflicts: A Colisao](#72-merge-conflicts-a-colisao)
  - [7.3 Resolvendo Conflitos](#73-resolvendo-conflitos)
- [8. Code Review no Workflow](#8-code-review-no-workflow)
  - [8.1 O Processo de Review](#81-o-processo-de-review)
  - [8.2 Checklist de Review](#82-checklist-de-review)
  - [8.3 Automated Checks](#83-automated-checks)
- [9. Comparacao de Workflows](#9-comparacao-de-workflows)
  - [9.1 Tabela Comparativa](#91-tabela-comparativa)
  - [9.2 Arvore de Decisao](#92-arvore-de-decisao)
- [10. Tabela Final de Resumo](#10-tabela-final-de-resumo)
- [Referencias](#referencias)

---

## Prologo: O Caos das Branches

O time de Sofia cresceu. Agora eram 5 desenvolvedores trabalhando no TodoApp ao mesmo tempo. E o caos se instalou.

Mario estava trabalhando na feature de notificacoes. Luigi, na feature de times. Toad, num bug critico. Peach, na melhoria de performance. Todos no branch `main`. Todos fazendo push ao mesmo tempo. Conflitos a cada hora. Codigo quebrado a cada merge.

Yoshi reuniu o time.

*"Pessoal, imaginem que todos nos estamos jogando no MESMO Mushroom Kingdom ao mesmo tempo, na MESMA fase. Mario pula num buraco que Luigi acabou de preencher. Toad coleta uma moeda que Peach acabou de mover. Caos total."*

*"A solucao? **Universos paralelos.** Cada jogador entra no seu proprio universo (branch), faz o que precisa, e quando termina, os universos se fundem (merge) de volta. Mas precisamos de REGRAS para essa fusao funcionar sem destruir o mundo."*

*"Essas regras sao os **Git Workflows**."*

---

## 1. O Que E um Git Workflow?

### 1.1 Por Que Precisamos de Regras

Um **Git Workflow** e um conjunto de convencoes que define como um time usa branches, commits, merges e releases no Git.

> **Analogia Mario**: Um Git Workflow e o **regulamento de um torneio** de Mario. Define: como os jogadores se inscrevem (criam branches), como as partidas funcionam (commits), como os resultados sao apurados (code review), e como os vencedores sao anunciados (merge para main).

**Sem workflow definido:**

- Ninguem sabe onde colocar novas features
- Branches vivem por semanas (e conflitam)
- Nao tem como saber o que esta em producao
- Hotfixes sao um pesadelo
- Code review nao acontece consistentemente

### 1.2 Conceitos Fundamentais

| Conceito | Descricao | Analogia Mario |
|----------|-----------|----------------|
| **Branch** | Copia independente do codigo | Universo paralelo |
| **Commit** | Snapshot do codigo num momento | Save point / checkpoint |
| **Merge** | Unir duas branches | Fundir universos paralelos |
| **Pull Request** | Pedido para fazer merge com revisao | Submeter resultado para juiz avaliar |
| **Tag** | Marco nomeado (v1.0, v2.0) | Trofeu de fase concluida |
| **Rebase** | Reescrever historico de commits | Reorganizar checkpoints |
| **Cherry-pick** | Pegar um commit especifico de outro branch | Pegar um power-up especifico de outro universo |

---

## 2. Git Flow: O Torneio Formal

### 2.1 As 5 Branches do Git Flow

**Git Flow** (criado por Vincent Driessen em 2010) usa 5 tipos de branches com papeis bem definidos:

| Branch | Duracao | Proposito | Analogia Mario |
|--------|---------|-----------|----------------|
| **main** | Permanente | Codigo em producao | O Mushroom Kingdom REAL — sempre estavel |
| **develop** | Permanente | Codigo em desenvolvimento | Campo de treino oficial |
| **feature/*** | Temporaria | Nova funcionalidade | Universo paralelo de treino |
| **release/*** | Temporaria | Preparacao para lancamento | Ensaio geral antes do torneio |
| **hotfix/*** | Temporaria | Correcao urgente em producao | Equipe de emergencia |

> **Analogia Mario**: Git Flow e como um **torneio oficial** de Mario com regras formais:
> - `main` = o campo oficial onde os jogos sao transmitidos (producao)
> - `develop` = o campo de treino onde todos praticam (desenvolvimento)
> - `feature/*` = salas individuais de treino (cada jogador treina uma tecnica)
> - `release/*` = ensaio geral antes do torneio (testes finais)
> - `hotfix/*` = equipe medica que entra no campo oficial em emergencia

### 2.2 Diagrama Completo

```
main:     ●────────────────●────────────────●────────●
          │   v1.0         │   v1.1         │hotfix  │ v1.2
          │                │                │        │
release:  │         ●──────●                │        │
          │         │  testes finais        │        │
          │         │                       │        │
develop:  ●─────●───●───●──────●───●───●────●────●───●
          │     │       │      │   │   │         │
feature:  │     ●───●───●      │   │   │         │
          │     feat-A         │   │   │         │
          │                    ●───●───●         │
          │                    feat-B            │
          │                                      │
hotfix:   │                              ●───●───●
          │                              correcao urgente
```

### Diagrama: Git Flow vs GitHub Flow

**Git Flow** -- multiplas branches de longa duracao (`main`, `develop`, `feature/*`, `release/*`, `hotfix/*`). Ideal para ciclos de release planejados.


**GitHub Flow** -- apenas `main` e feature branches de curta duracao. Cada merge via Pull Request. Ideal para deploy continuo.


### 2.3 Fluxo de Feature

```bash
# 1. Criar branch de feature a partir de develop
git checkout develop
git pull origin develop
git checkout -b feature/notificacoes

# 2. Desenvolver (varios commits)
git add .
git commit -m "feat: adiciona servico de notificacoes"
git commit -m "feat: adiciona template de email"
git commit -m "test: adiciona testes de notificacao"

# 3. Manter atualizado com develop
git fetch origin
git rebase origin/develop
# Ou: git merge origin/develop

# 4. Abrir Pull Request: feature/notificacoes → develop
# Code review, CI/CD, aprovacao

# 5. Merge para develop
git checkout develop
git merge --no-ff feature/notificacoes
git push origin develop

# 6. Deletar branch de feature
git branch -d feature/notificacoes
git push origin --delete feature/notificacoes
```

### 2.4 Fluxo de Release

```bash
# 1. Criar branch de release a partir de develop
git checkout develop
git checkout -b release/1.1.0

# 2. Apenas correcoes de bugs e preparacao
git commit -m "fix: corrige bug de formatacao na notificacao"
git commit -m "chore: atualiza versao para 1.1.0"
git commit -m "docs: atualiza changelog"

# 3. Testes finais no ambiente de staging

# 4. Merge para main (producao!)
git checkout main
git merge --no-ff release/1.1.0
git tag -a v1.1.0 -m "Release 1.1.0 - Notificacoes"
git push origin main --tags

# 5. Merge de volta para develop (traz as correcoes)
git checkout develop
git merge --no-ff release/1.1.0
git push origin develop

# 6. Deletar branch de release
git branch -d release/1.1.0
```

### 2.5 Fluxo de Hotfix

```bash
# Bug critico em producao! Emergencia!

# 1. Criar branch de hotfix a partir de main
git checkout main
git checkout -b hotfix/1.1.1

# 2. Corrigir o bug
git commit -m "fix: corrige crash ao enviar notificacao para usuario sem email"

# 3. Merge para main (corrigir producao)
git checkout main
git merge --no-ff hotfix/1.1.1
git tag -a v1.1.1 -m "Hotfix 1.1.1 - Corrige crash de notificacao"
git push origin main --tags

# 4. Merge para develop (nao perder a correcao)
git checkout develop
git merge --no-ff hotfix/1.1.1
git push origin develop

# 5. Deletar branch de hotfix
git branch -d hotfix/1.1.1
```

### 2.6 Quando Usar Git Flow

**Use Git Flow quando:**

- Releases sao planejadas e periodicas (a cada 2-4 semanas)
- Precisa manter multiplas versoes em producao
- Time grande com processo formal
- Software com ciclo de release definido
- Apps mobile (versoes em app stores)

**NAO use Git Flow quando:**

- Deploy continuo (varias vezes por dia)
- Time pequeno e agil
- Web apps com CI/CD rapido
- Startups em fase de experimentacao

---

## 3. GitHub Flow: A Partida Casual

### 3.1 Regras Simples

**GitHub Flow** e drasticamente mais simples que Git Flow. Tem apenas 6 regras:

1. `main` esta **SEMPRE** pronta para deploy
2. Para trabalhar em algo novo, crie um branch a partir de `main`
3. Faca commits regularmente e faca push para o branch remoto
4. Abra um **Pull Request** quando estiver pronto (ou para pedir feedback)
5. Apos aprovacao e CI verde, faca merge para `main`
6. Faca deploy imediatamente apos o merge

> **Analogia Mario**: GitHub Flow e uma **partida casual** de Mario. Regras simples: jogue, se divirta, mostre o resultado. Sem brackets formais, sem eliminatorias, sem ensaio geral. Direto ao ponto.

```
main:    ●────────────●────────────●────────●
         │            │            │        │
branch:  └──●──●──●───┘            │        │
             feat-A    PR/merge    │        │
                                   │        │
branch:            └──●──●──●──●───┘        │
                      feat-B    PR/merge    │
                                            │
branch:                    └──●──●──●───────┘
                              bugfix    PR/merge
```

### 3.2 O Fluxo Completo

```bash
# 1. Criar branch a partir de main (nome descritivo)
git checkout main
git pull origin main
git checkout -b add-dark-mode

# 2. Desenvolver e commitar
git add .
git commit -m "feat: adiciona toggle de dark mode"
git commit -m "feat: implementa tema escuro com CSS variables"
git commit -m "test: adiciona testes de dark mode"

# 3. Push para remoto (cedo e frequentemente)
git push origin add-dark-mode

# 4. Abrir Pull Request no GitHub
gh pr create \
  --title "feat: adiciona dark mode" \
  --body "## O que muda
  - Toggle de dark mode no header
  - Tema escuro usando CSS custom properties
  - Preferencia salva no localStorage

  ## Como testar
  1. Clicar no icone de lua no header
  2. Verificar que o tema muda
  3. Recarregar a pagina e verificar que a preferencia persiste"

# 5. CI roda automaticamente, reviewers aprovam

# 6. Merge (via GitHub UI ou CLI)
gh pr merge --squash

# 7. Deploy automatico via CI/CD (apos merge em main)
```

### 3.3 Pull Requests: O Coracao do GitHub Flow

O **Pull Request (PR)** e onde tudo acontece no GitHub Flow:

```
┌────────────────────────────────────────────────┐
│ Pull Request #42: feat: adiciona dark mode      │
├────────────────────────────────────────────────┤
│                                                 │
│ Status Checks:                                  │
│   ✅ CI: Build         (2m 34s)                │
│   ✅ CI: Tests         (4m 12s)                │
│   ✅ CI: Lint          (0m 45s)                │
│   ✅ CI: Type Check    (1m 23s)                │
│   ✅ Security Scan     (3m 01s)                │
│                                                 │
│ Reviews:                                        │
│   ✅ Toadette: "LGTM! Otimo uso de CSS vars"  │
│   ✅ Luigi: "Aprovado. Testei no mobile."      │
│                                                 │
│ [Squash and Merge]  [Close]                    │
└────────────────────────────────────────────────┘
```

### 3.4 Quando Usar GitHub Flow

**Use GitHub Flow quando:**

- Deploy continuo (varias vezes por dia)
- Time pequeno a medio (1-15 devs)
- Web apps com CI/CD rapido
- Nao precisa manter multiplas versoes
- Quer simplicidade maxima

---

## 4. Trunk-Based Development: Todos no Mesmo Campo

### 4.1 A Filosofia

**Trunk-Based Development (TBD)** leva a simplicidade ao extremo: **todos trabalham diretamente no trunk (main)**, com branches curtissimos (horas, nao dias).

> **Analogia Mario**: Trunk-Based e como todos os jogadores no **mesmo campo**, ao mesmo tempo, jogando juntos. Nao existem universos paralelos longos. Se alguem precisa praticar uma tecnica nova, sai rapidamente, pratica por alguns minutos e volta ao campo principal.

```
main:  ●──●──●──●──●──●──●──●──●──●──●──●──●──●──●
       │  │     │        │  │        │        │
       │  └──●──┘        │  └──●─────┘        │
       │  branch (2h)    │  branch (4h)       │
       └──●──┘                                │
       commit direto                          └──●──┘
       (pair programming)                     branch (1h)
```

### 4.2 Como Funciona

**Regras do Trunk-Based:**

1. **Branch principal (main/trunk)** e sempre deployavel
2. Branches de feature duram **no maximo 1-2 dias** (ideal: horas)
3. Commits frequentes e pequenos na main
4. **Feature flags** para esconder funcionalidades inacabadas
5. CI extremamente rapido (build + test em minutos)
6. Pair programming para commits diretos na main

```bash
# Trunk-Based: branch de vida curta
git checkout main
git pull
git checkout -b small-fix

# Fazer a mudanca (PEQUENA)
git add .
git commit -m "fix: corrige padding do botao de completar"
git push origin small-fix

# PR, review rapido, merge
# Total: 2 horas do inicio ao merge

# OU: commit direto (pair programming com CI forte)
git checkout main
git add .
git commit -m "refactor: extrai funcao de validacao de email"
git push origin main
```

### 4.3 Feature Flags no Trunk-Based

Como voce faz deploy de codigo inacabado sem mostrar ao usuario? **Feature flags!**

```javascript
// Codigo pode estar na main ANTES de estar pronto
app.get('/api/search', verifyToken, async (req, res) => {
  if (featureFlags.isEnabled('advanced-search', req.user)) {
    // Busca avancada (ainda em desenvolvimento)
    return advancedSearch(req, res);
  }

  // Busca simples (versao atual)
  return simpleSearch(req, res);
});

// A funcao advancedSearch pode estar 50% implementada
// Mas ninguem a ve — a flag esta desligada para todos
```

### 4.4 Quando Usar Trunk-Based

**Use Trunk-Based quando:**

- Time sabe fazer commits pequenos e frequentes
- CI/CD e extremamente rapido e confiavel
- Feature flags estao em uso
- Time pratica pair programming
- Google, Facebook, Netflix, Microsoft usam TBD em escala

**NAO use Trunk-Based quando:**

- CI e lento ou pouco confiavel
- Time nao tem disciplina de commits pequenos
- Nao tem feature flags implementados
- Time esta comecando com Git

---

## 5. GitLab Flow: O Meio-Termo

### 5.1 Environment Branches

**GitLab Flow** com environment branches conecta branches a ambientes:

```
feature/X ──PR──→ main ──auto──→ staging ──manual──→ production
                    │               │                    │
                    │         testes de               deploy
                    │         integracao              aprovado
                    │
               codigo aprovado
               pelo code review
```

```bash
# GitLab Flow com environment branches
# 1. Feature branch → main (code review)
git checkout -b feature/reports
# ... desenvolver ...
# PR para main, review, merge

# 2. main → staging (automatico)
# CI/CD faz deploy automatico em staging

# 3. staging → production (manual/aprovacao)
# Apos testes em staging, promover para producao
git checkout production
git merge main
git push origin production
```

### 5.2 Release Branches

Para projetos que precisam manter versoes:

```
main:         ●──●──●──●──●──●──●──●──●
              │        │              │
release/1.0:  └──●──●──●              │
                 │  │  │              │
                 │  v1.0.1            │
                 v1.0.0   v1.0.2     │
                                      │
release/2.0:                          └──●──●
                                         │
                                         v2.0.0
```

### 5.3 Quando Usar GitLab Flow

**Use GitLab Flow quando:**

- Precisa de ambientes bem definidos (staging, production)
- Quer algo entre a simplicidade do GitHub Flow e a formalidade do Git Flow
- Deploy nao e automatico — precisa de aprovacao
- Precisa manter algumas versoes em paralelo

---

## 6. Branching: Universos Paralelos

### 6.1 Nomenclatura de Branches

Uma boa nomenclatura facilita entender o proposito de cada branch:

| Prefixo | Proposito | Exemplo |
|---------|-----------|---------|
| `feature/` | Nova funcionalidade | `feature/dark-mode` |
| `fix/` ou `bugfix/` | Correcao de bug | `fix/login-crash` |
| `hotfix/` | Correcao urgente em producao | `hotfix/security-patch` |
| `chore/` | Tarefas de manutencao | `chore/update-dependencies` |
| `refactor/` | Refatoracao de codigo | `refactor/extract-auth-service` |
| `docs/` | Documentacao | `docs/api-reference` |
| `test/` | Adicionar/corrigir testes | `test/notification-service` |

```bash
# Com ID da issue
feature/42-dark-mode
fix/108-login-crash
chore/55-update-node-version
```

### 6.2 Branch Protection Rules

Configurar protecoes na branch `main` no GitHub:

```
Branch Protection Rules para "main":
  ✅ Require pull request before merging
     - Required approving reviews: 2
     - Dismiss stale pull request approvals
  ✅ Require status checks to pass
     - CI: Build
     - CI: Tests
     - CI: Lint
     - CI: Security Scan
  ✅ Require conversation resolution before merging
  ✅ Require signed commits
  ✅ Do not allow bypassing the above settings
  ❌ Allow force pushes (NUNCA na main!)
  ❌ Allow deletions (NUNCA na main!)
```

### 6.3 Boas Praticas de Branching

1. **Branches curtos**: Merge em 1-3 dias (maximo 1 semana)
2. **Atualize frequentemente**: Rebase/merge da main no seu branch
3. **Um proposito por branch**: Nao misture feature + bugfix + refactor
4. **Delete apos merge**: Branches mortos poluem o repositorio
5. **Nomeie bem**: O nome deve descrever o que esta sendo feito

---

## 7. Merge: Quando Universos Colidem

### 7.1 Merge Strategies

| Estrategia | Como Funciona | Quando Usar |
|------------|---------------|-------------|
| **Merge Commit** | Cria um commit de merge (preserva historico) | Quer manter historico completo |
| **Squash and Merge** | Junta todos os commits em um so | Feature com muitos commits pequenos |
| **Rebase and Merge** | Reaplica commits no topo da main | Historico linear e limpo |

```
Merge Commit:           Squash and Merge:       Rebase and Merge:
  ●──●──●──M            ●──S                    ●──●──●
  │     │  │            │  │                    │     │
  ●──●──●──┘            │  └ (1 commit)         │     │
  (preserva tudo)       (limpo)                 (linear)
```

> **Analogia Mario**:
> - **Merge commit** = registrar TODOS os treinos antes do jogo oficial
> - **Squash** = resumir todos os treinos em uma unica ficha: "treinou ataque"
> - **Rebase** = reorganizar os treinos como se tivessem acontecido em sequencia perfeita

### 7.2 Merge Conflicts: A Colisao

**Merge conflicts** acontecem quando duas branches modificam a **mesma parte** do mesmo arquivo.

> **Analogia Mario**: Dois jogadores em universos paralelos modificaram a MESMA sala do castelo. Mario pintou de vermelho, Luigi pintou de verde. Quando os universos se fundem... conflito! Alguem precisa decidir qual cor fica (ou misturar).

```
<<<<<<< HEAD (sua branch)
const BUTTON_COLOR = 'red';
=======
const BUTTON_COLOR = 'green';
>>>>>>> feature/luigi-green-theme
```

### 7.3 Resolvendo Conflitos

```bash
# 1. Git avisa sobre conflito
git merge feature/new-theme
# Auto-merging src/styles.js
# CONFLICT (content): Merge conflict in src/styles.js
# Automatic merge failed; fix conflicts and then commit the result.

# 2. Abrir o arquivo e resolver manualmente
# Escolher uma versao, outra, ou combinar

# ANTES (conflito):
<<<<<<< HEAD
const THEME = 'dark';
=======
const THEME = 'light';
>>>>>>> feature/new-theme

# DEPOIS (resolvido):
const THEME = getUserPreference() || 'dark'; // Usa preferencia do usuario

# 3. Marcar como resolvido e commitar
git add src/styles.js
git commit -m "merge: resolve conflito de tema, usa preferencia do usuario"
```

**Dica**: Use o VS Code para resolver conflitos visualmente — ele mostra opcoes "Accept Current", "Accept Incoming", "Accept Both".

---

## 8. Code Review no Workflow

### 8.1 O Processo de Review

```
Autor abre PR → Reviewer(s) notificado(s) → Review começa
                                               │
                                    ┌──────────┼──────────┐
                                    │          │          │
                                ✅ Approve  💬 Comment  ❌ Request
                                    │          │      Changes
                                    │          │          │
                                    │    Discussao    Autor faz
                                    │                 correcoes
                                    │                    │
                                    └─────── Merge ◄─────┘
```

### 8.2 Checklist de Review

```markdown
## Checklist de Code Review do Mushroom Kingdom

### Funcionalidade
- [ ] O codigo faz o que a issue/ticket pede?
- [ ] Edge cases estao tratados?
- [ ] Erros sao tratados graciosamente?

### Qualidade
- [ ] O codigo e legivel e compreensivel?
- [ ] Nomes de variaveis e funcoes sao descritivos?
- [ ] Nao tem codigo duplicado?
- [ ] Funcoes sao pequenas e fazem uma unica coisa?

### Seguranca
- [ ] Nao tem secrets hardcoded?
- [ ] Inputs sao validados e sanitizados?
- [ ] Autorizacao esta correta?

### Testes
- [ ] Testes unitarios para logica nova?
- [ ] Testes de integracao para novos endpoints?
- [ ] Todos os testes passando?

### Performance
- [ ] Queries otimizadas (sem N+1)?
- [ ] Nao tem loops desnecessarios?
```

### 8.3 Automated Checks

```yaml
# .github/workflows/pr-checks.yml
name: PR Checks

on:
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install dependencies
        run: npm ci

      - name: Type Check (Boss 1: TSC)
        run: npx tsc --noEmit

      - name: Lint (Boss 3: ESLint)
        run: npx eslint . --max-warnings 0

      - name: Tests (Boss 2: Jest)
        run: npx jest --coverage --ci

      - name: Zero Any Check (Boss 4)
        run: |
          ANY_COUNT=$(grep -r ":\s*any" src/ --include="*.ts" -c || echo 0)
          if [ "$ANY_COUNT" -gt "0" ]; then
            echo "Encontrados $ANY_COUNT usos de 'any'. Corrija antes de fazer merge."
            exit 1
          fi

      - name: Security Scan
        run: npm audit --audit-level=high
```

---

## 9. Comparacao de Workflows

### 9.1 Tabela Comparativa

| Criterio | Git Flow | GitHub Flow | Trunk-Based | GitLab Flow |
|----------|:--------:|:-----------:|:-----------:|:-----------:|
| **Complexidade** | Alta | Baixa | Media | Media |
| **Branches permanentes** | 2 | 1 | 1 | 2-3 |
| **Velocidade de deploy** | Lenta | Rapida | Muito rapida | Media |
| **Multiplas versoes** | Sim | Nao | Nao | Sim |
| **Tamanho do time** | Grande | Pequeno-medio | Qualquer | Medio-grande |
| **Disciplina necessaria** | Media | Baixa | Alta | Media |
| **Feature flags** | Opcional | Opcional | Essencial | Opcional |
| **CI/CD** | Importante | Importante | Critico | Importante |

### 9.2 Arvore de Decisao

```
Precisa manter multiplas versoes em producao?
├── SIM → Ciclo de release e formal (semanas)?
│         ├── SIM → Git Flow
│         └── NAO → GitLab Flow (release branches)
│
└── NAO → Time tem disciplina para commits pequenos e frequentes?
          ├── SIM → CI/CD e rapido e confiavel?
          │         ├── SIM → Trunk-Based Development
          │         └── NAO → GitHub Flow
          │
          └── NAO → GitHub Flow (comece simples)
```

---

## 10. Tabela Final de Resumo

| Conceito | O Que E | Analogia Mario |
|----------|---------|----------------|
| **Git Flow** | Workflow formal com 5 branches | Torneio oficial com brackets formais |
| **GitHub Flow** | Workflow simples: branch, PR, merge | Partida casual — simples e direto |
| **Trunk-Based** | Todos na main, branches curtissimos | Todos no mesmo campo, treinos rapidos |
| **GitLab Flow** | Branches ligados a ambientes | Fase de treino, ensaio geral, jogo oficial |
| **Branch** | Copia independente do codigo | Universo paralelo |
| **Merge** | Unir duas branches | Fusao de universos |
| **Pull Request** | Pedido de merge com revisao | Submeter resultado ao juiz |
| **Merge Conflict** | Duas branches editaram a mesma coisa | Dois jogadores modificaram a mesma sala |
| **Branch Protection** | Regras que protegem a main | Guardas que protegem o campo oficial |
| **Code Review** | Revisao de codigo por pares | Juiz avaliando a jogada |

---

## Referencias

- [Vincent Driessen — A Successful Git Branching Model (Git Flow)](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Flow — Understanding the GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow)
- [Trunk-Based Development](https://trunkbaseddevelopment.com/)
- [GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)
- [Atlassian — Comparing Workflows](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [Microsoft — Branch Strategy](https://learn.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance)
- [GitHub — Branch Protection Rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-a-branch-protection-rule)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Google Engineering Practices — Code Review](https://google.github.io/eng-practices/review/)

---

*Fase 4-5 completa! Voce aprendeu os principais workflows do Git e quando usar cada um. Na proxima fase, vamos mergulhar em estruturas de dados e JSON — como organizar as moedas, estrelas e cogumelos. Prepare-se para o Nivel 4-6!*

---

<div align="center">

⬅️ [Anterior: Fase 4-4: Deploy Avancado](4-4-deploy_avancado.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 4-6: Estruturas de Dados](4-6-estruturas_dados.md)

</div>
