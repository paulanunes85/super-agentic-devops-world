---
title: "Fase 1-BOSS — Boss Battle: Exercicios Praticos Level 1"
description: "Exercicios praticos que cobrem todos os fundamentos do World 1 — a boss battle contra Bowser Jr."
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-1", "exercicios", "boss-battle", "fundamentos"]
---

# Fase 1-BOSS — Boss Battle: Exercicios Praticos Level 1

---

## Change Log

| Versao | Data       | Autor        | Descricao                     |
|--------|------------|--------------|-------------------------------|
| 1.0.0  | 2026-03-18 | Paula Silva  | Criacao inicial (Edicao Mario)|

---

## Sumario

- [Prologo — Bowser Jr. Te Espera](#prologo--bowser-jr-te-espera)
- [As Regras da Boss Battle](#as-regras-da-boss-battle)
- [Quest 1 — Ligar o Console (VS Code)](#quest-1--ligar-o-console-vs-code)
- [Quest 2 — Primeiro Save Game (Git)](#quest-2--primeiro-save-game-git)
- [Quest 3 — Entrar no Servidor Multiplayer (GitHub)](#quest-3--entrar-no-servidor-multiplayer-github)
- [Quest 4 — Primeiro Push (Git + GitHub)](#quest-4--primeiro-push-git--github)
- [Quest 5 — Quadro de Missoes (Issues)](#quest-5--quadro-de-missoes-issues)
- [Quest 6 — Universo Paralelo (Branches e PR)](#quest-6--universo-paralelo-branches-e-pr)
- [Quest 7 — Acordar o Lakitu (GitHub Actions)](#quest-7--acordar-o-lakitu-github-actions)
- [Quest 8 — Pedir Ajuda ao Companion (Copilot)](#quest-8--pedir-ajuda-ao-companion-copilot)
- [Quest 9 — Explorar o Mundo Aberto (Azure)](#quest-9--explorar-o-mundo-aberto-azure)
- [Quest 10 — Boss Final: O Projeto Mushroom Kingdom](#quest-10--boss-final-o-projeto-mushroom-kingdom)
- [Gabarito e Dicas](#gabarito-e-dicas)
- [Placar Final — Avalie seu Desempenho](#placar-final--avalie-seu-desempenho)
- [Referencias](#referencias)

---

## Prologo — Bowser Jr. Te Espera

Sofia chegou ao final do World 1. A frente dela, um portao de pedra com o simbolo do Bowser Jr. — o primeiro boss da jornada. Atras do portao, dez salas de desafio. Cada sala testa uma habilidade aprendida nas fases anteriores.

"Voce nao vai aprender nada novo aqui," disse a voz. "Vai PROVAR que aprendeu. Cada quest e uma sala de desafio. Complete todas e o portao se abre. Bowser Jr. sera derrotado. E voce estara pronta para o World 2."

As regras sao simples:

```
╔═══════════════════════════════════════════╗
║         BOSS BATTLE — BOWSER JR.         ║
║                                           ║
║  10 Quests (salas de desafio)             ║
║  Dificuldade crescente                    ║
║  Cada quest vale pontos                   ║
║  Para derrotar Bowser Jr: 70+ pontos     ║
║                                           ║
║  Sem consulta? Bonus de 20%              ║
║  Com consulta? Normal (sem penalidade)   ║
║                                           ║
║  "It's-a boss time!"                     ║
╚═══════════════════════════════════════════╝
```

---

## As Regras da Boss Battle

| Regra | Descricao |
|-------|----------|
| **Faca tudo na pratica** | Nao basta ler — abra o terminal, o VS Code, o GitHub, e FACA |
| **Documente com prints** | Tire screenshots de cada etapa concluida |
| **Pode consultar as fases** | Voltar as fases 1-1 a 1-7 nao e derrota — e estrategia |
| **Pode usar Copilot** | O companion existe para ser usado — so nao deixe ele fazer tudo |
| **Se travar, pule** | Tente a proxima quest e volte depois |
| **Tempo sugerido** | 2-4 horas para todas as 10 quests |

---

## Quest 1 — Ligar o Console (VS Code)

**Fase de referencia:** 1-1 (VS Code)
**Pontos:** 10
**Dificuldade:** Facil

### Objetivo

Prove que seu "console" esta pronto para jogar.

### Tarefas

- [ ] **1.1** Abra o VS Code e tire um screenshot da tela inicial
- [ ] **1.2** Abra o terminal integrado (`` Ctrl+` ``) e execute:
  ```bash
  code --version
  node --version
  git --version
  ```
  Tire um screenshot mostrando as 3 versoes
- [ ] **1.3** Instale as seguintes extensoes (se ainda nao tiver):
  - GitHub Copilot
  - GitHub Copilot Chat
  - GitLens
  - Error Lens
- [ ] **1.4** Mude o tema de cores do VS Code para qualquer tema escuro
- [ ] **1.5** Abra o Command Palette (`Ctrl+Shift+P`) e execute `Developer: Show Running Extensions`. Tire um screenshot

### Criterio de Sucesso

Todas as ferramentas instaladas, versoes visiveis, extensoes rodando.

> **ANALOGIA MARIO:** Voce esta na sala de preparacao antes da boss battle. Verificando se o controle funciona, os botoes respondem, os power-ups estao no inventario.

---

## Quest 2 — Primeiro Save Game (Git)

**Fase de referencia:** 1-2 (Git)
**Pontos:** 15
**Dificuldade:** Facil

### Objetivo

Criar um repositorio Git do zero e fazer seus primeiros commits.

### Tarefas

- [ ] **2.1** No terminal, crie uma pasta chamada `boss-battle-world1`:
  ```bash
  mkdir boss-battle-world1
  cd boss-battle-world1
  ```
- [ ] **2.2** Inicialize o Git:
  ```bash
  git init
  ```
- [ ] **2.3** Configure seu nome e email (se ainda nao fez):
  ```bash
  git config user.name "Seu Nome"
  git config user.email "seu@email.com"
  ```
- [ ] **2.4** Crie um arquivo `README.md` com o seguinte conteudo:
  ```markdown
  # Boss Battle — World 1

  Meu projeto de exercicios do World 1 do Agentic DevOps.

  ## Autor
  [Seu nome]

  ## Data
  [Data de hoje]
  ```
- [ ] **2.5** Faca o primeiro commit:
  ```bash
  git add README.md
  git commit -m "feat: criar projeto boss-battle-world1"
  ```
- [ ] **2.6** Crie um arquivo `heroi.js` com o seguinte codigo:
  ```javascript
  const heroi = {
    nome: "Sofia",
    vidas: 3,
    moedas: 0,
    mundo: 1,
    fase: "BOSS"
  };

  console.log("=== BOSS BATTLE ===");
  console.log(`Heroi: ${heroi.nome}`);
  console.log(`Vidas: ${heroi.vidas}`);
  console.log(`Moedas: ${heroi.moedas}`);
  console.log(`Localizacao: World ${heroi.mundo} - Fase ${heroi.fase}`);
  ```
- [ ] **2.7** Faca o segundo commit:
  ```bash
  git add heroi.js
  git commit -m "feat: adicionar ficha do heroi"
  ```
- [ ] **2.8** Execute `git log --oneline` e tire um screenshot mostrando os 2 commits

### Criterio de Sucesso

Dois commits no historico, ambos com mensagens claras seguindo Conventional Commits.

---

## Quest 3 — Entrar no Servidor Multiplayer (GitHub)

**Fase de referencia:** 1-3 (GitHub)
**Pontos:** 10
**Dificuldade:** Facil

### Objetivo

Criar um repositorio no GitHub e conecta-lo ao seu repositorio local.

### Tarefas

- [ ] **3.1** Acesse https://github.com e faca login
- [ ] **3.2** Crie um novo repositorio chamado `boss-battle-world1`:
  - Publico
  - SEM README (ja temos um local)
  - SEM .gitignore
  - SEM licenca
- [ ] **3.3** Conecte o repositorio local ao remoto:
  ```bash
  git remote add origin https://github.com/SEU-USUARIO/boss-battle-world1.git
  git branch -M main
  git push -u origin main
  ```
- [ ] **3.4** Acesse o repositorio no navegador e tire um screenshot mostrando o README.md renderizado

### Criterio de Sucesso

Repositorio visivel no GitHub com README renderizado e arquivo `heroi.js`.

---

## Quest 4 — Primeiro Push (Git + GitHub)

**Fase de referencia:** 1-2 + 1-3
**Pontos:** 10
**Dificuldade:** Facil

### Objetivo

Fazer alteracoes locais, commitar e enviar para o GitHub.

### Tarefas

- [ ] **4.1** Edite o arquivo `heroi.js` — adicione uma funcao:
  ```javascript
  function coletarMoeda(heroi) {
    heroi.moedas += 1;
    console.log(`${heroi.nome} coletou uma moeda! Total: ${heroi.moedas}`);
    if (heroi.moedas % 100 === 0) {
      heroi.vidas += 1;
      console.log(`*** 1-UP! ${heroi.nome} ganhou uma vida extra! Vidas: ${heroi.vidas} ***`);
    }
  }

  // Coletar 3 moedas
  coletarMoeda(heroi);
  coletarMoeda(heroi);
  coletarMoeda(heroi);
  ```
- [ ] **4.2** Verifique o status: `git status`
- [ ] **4.3** Veja o que mudou: `git diff`
- [ ] **4.4** Commit:
  ```bash
  git add heroi.js
  git commit -m "feat: adicionar sistema de coleta de moedas"
  ```
- [ ] **4.5** Push:
  ```bash
  git push origin main
  ```
- [ ] **4.6** Verifique no GitHub que as mudancas apareceram

### Criterio de Sucesso

Terceiro commit visivel no GitHub com a funcao de moedas.

---

## Quest 5 — Quadro de Missoes (Issues)

**Fase de referencia:** 1-3 (GitHub Issues)
**Pontos:** 10
**Dificuldade:** Facil

### Objetivo

Usar Issues como quadro de missoes.

### Tarefas

- [ ] **5.1** No repositorio GitHub, crie **3 Issues**:

  **Issue #1:**
  ```
  Titulo: feat: adicionar sistema de vidas
  Descricao: O heroi deve poder perder e ganhar vidas.
  Quando as vidas chegam a 0, mostrar "GAME OVER".
  Label: enhancement
  ```

  **Issue #2:**
  ```
  Titulo: feat: adicionar power-ups
  Descricao: Criar power-ups que o heroi pode coletar:
  - Super Mushroom (vida extra)
  - Fire Flower (ataque)
  - Super Star (invencibilidade temporaria)
  Label: enhancement
  ```

  **Issue #3:**
  ```
  Titulo: docs: melhorar README com instrucoes de uso
  Descricao: Adicionar secao "Como executar" no README.
  Label: documentation
  ```

- [ ] **5.2** Tire um screenshot da lista de Issues

### Criterio de Sucesso

3 Issues criadas com titulos claros, descricoes uteis e labels atribuidas.

---

## Quest 6 — Universo Paralelo (Branches e PR)

**Fase de referencia:** 1-2 + 1-3 (Branches e PRs)
**Pontos:** 20
**Dificuldade:** Media

### Objetivo

Criar uma branch, fazer alteracoes, e abrir um Pull Request.

### Tarefas

- [ ] **6.1** Crie uma branch para resolver a Issue #3:
  ```bash
  git switch -c docs/melhorar-readme
  ```

- [ ] **6.2** Edite o `README.md` — adicione instrucoes de uso:
  ```markdown
  ## Como executar

  1. Clone o repositorio:
     ```bash
     git clone https://github.com/SEU-USUARIO/boss-battle-world1.git
     ```
  2. Entre na pasta:
     ```bash
     cd boss-battle-world1
     ```
  3. Execute:
     ```bash
     node heroi.js
     ```

  ## Tecnologias

  - JavaScript (Node.js)
  - Git + GitHub
  ```

- [ ] **6.3** Commit e push:
  ```bash
  git add README.md
  git commit -m "docs: adicionar instrucoes de execucao ao README (#3)"
  git push origin docs/melhorar-readme
  ```

- [ ] **6.4** No GitHub, crie um **Pull Request**:
  - Base: `main`
  - Compare: `docs/melhorar-readme`
  - Titulo: "docs: melhorar README com instrucoes de uso"
  - Descricao: "Resolve #3 — Adiciona secao 'Como executar' ao README"

- [ ] **6.5** No PR, revise as mudancas na aba "Files changed"
- [ ] **6.6** Faca merge do PR (botao "Merge pull request")
- [ ] **6.7** Volte ao terminal e atualize seu local:
  ```bash
  git switch main
  git pull origin main
  ```
- [ ] **6.8** Verifique que a Issue #3 foi fechada automaticamente (por causa do "Resolve #3")

### Criterio de Sucesso

PR criado, revisado, merged. Issue #3 fechada automaticamente. Branch `main` local atualizada.

> **ANALOGIA MARIO:** Voce entrou num universo paralelo (branch), completou a missao (editar README), voltou ao universo principal (merge), e a quest foi marcada como completa no quadro de missoes (Issue fechada).

---

## Quest 7 — Acordar o Lakitu (GitHub Actions)

**Fase de referencia:** 1-4 (GitHub Actions)
**Pontos:** 15
**Dificuldade:** Media

### Objetivo

Criar um workflow de GitHub Actions que roda automaticamente.

### Tarefas

- [ ] **7.1** No seu repositorio local, crie a estrutura de pastas:
  ```bash
  mkdir -p .github/workflows
  ```

- [ ] **7.2** Crie o arquivo `.github/workflows/boss-battle-ci.yml`:
  ```yaml
  name: Boss Battle CI

  on:
    push:
      branches: [main]
    pull_request:
      branches: [main]

  jobs:
    verificar-heroi:
      runs-on: ubuntu-latest
      steps:
        - name: Baixar codigo
          uses: actions/checkout@v4

        - name: Configurar Node.js
          uses: actions/setup-node@v4
          with:
            node-version: '20'

        - name: Executar o jogo
          run: node heroi.js

        - name: Relatorio do Lakitu
          run: |
            echo "================================="
            echo "  LAKITU REPORT — BOSS BATTLE"
            echo "================================="
            echo "Status: APROVADO"
            echo "Data: $(date)"
            echo "Branch: ${{ github.ref_name }}"
            echo "Autor: ${{ github.actor }}"
            echo "================================="
  ```

- [ ] **7.3** Commit e push:
  ```bash
  git add .github/workflows/boss-battle-ci.yml
  git commit -m "ci: adicionar workflow de CI para boss battle"
  git push origin main
  ```

- [ ] **7.4** Va ao GitHub → aba **Actions** → veja o workflow rodando
- [ ] **7.5** Quando concluir, clique no job e tire um screenshot mostrando:
  - O output de `node heroi.js`
  - O relatorio do Lakitu
  - O status verde (success)

### Criterio de Sucesso

Workflow rodou com sucesso. Output do heroi e relatorio do Lakitu visiveis nos logs.

> **ANALOGIA MARIO:** Voce escreveu o pergaminho de instrucoes, entregou ao Lakitu, e ele executou tudo automaticamente na nuvem. Agora, toda vez que voce fizer push, o Lakitu vai verificar tudo.

---

## Quest 8 — Pedir Ajuda ao Companion (Copilot)

**Fase de referencia:** 1-6 (AI / Copilot)
**Pontos:** 10
**Dificuldade:** Facil

### Objetivo

Usar o GitHub Copilot para gerar codigo e aprender.

### Tarefas

- [ ] **8.1** No VS Code, abra o Copilot Chat e faca 3 perguntas:
  1. "Explique o que e git rebase em termos simples, como se eu fosse uma iniciante"
  2. "Quais sao os 5 comandos Git mais usados no dia a dia?"
  3. "O que e uma API REST? Explique com analogia de restaurante"

- [ ] **8.2** Crie um novo arquivo `power-ups.js` e escreva APENAS o comentario:
  ```javascript
  // Criar uma classe PowerUp com tipos: SuperMushroom, FireFlower, SuperStar
  // Cada power-up tem: nome, efeito, duracao (em segundos)
  // SuperMushroom: +1 vida, permanente
  // FireFlower: ataque de fogo, 30 segundos
  // SuperStar: invencibilidade, 10 segundos
  ```
  Deixe o Copilot sugerir o codigo. Aceite com `Tab`.

- [ ] **8.3** Revise o codigo gerado. O Copilot fez algo errado ou incompleto? Anote.

- [ ] **8.4** Commit:
  ```bash
  git add power-ups.js
  git commit -m "feat: adicionar sistema de power-ups (co-authored by Copilot)"
  git push origin main
  ```

### Criterio de Sucesso

Copilot usado para aprender (chat) e gerar codigo (autocomplete). Codigo revisado antes de commitar.

---

## Quest 9 — Explorar o Mundo Aberto (Azure)

**Fase de referencia:** 1-5 (Azure)
**Pontos:** 10
**Dificuldade:** Media

### Objetivo

Dar os primeiros passos no Azure.

### Tarefas

- [ ] **9.1** Acesse https://portal.azure.com e faca login
- [ ] **9.2** Tire um screenshot do Dashboard do Azure Portal
- [ ] **9.3** Crie um **Resource Group**:
  - Nome: `rg-boss-battle`
  - Regiao: `Brazil South`
- [ ] **9.4** Explore a secao **"All Services"** e identifique onde estao:
  - App Service (Computacao)
  - Storage Accounts (Armazenamento)
  - Azure SQL (Banco de dados)
  - Azure Monitor (Monitoramento)

  Anote os nomes e categorias.

- [ ] **9.5** Abra o **Cloud Shell** (icone de terminal no topo do portal) e execute:
  ```bash
  az group list --output table
  ```
  Tire um screenshot mostrando seu Resource Group.

- [ ] **9.6** **IMPORTANTE — Limpeza:** Delete o Resource Group para nao gastar credito:
  ```bash
  az group delete --name rg-boss-battle --yes --no-wait
  ```

### Criterio de Sucesso

Resource Group criado, servicos explorados, Cloud Shell usado, limpeza realizada.

> **ANALOGIA MARIO:** Voce entrou no mundo aberto, construiu um pequeno reino, explorou o mapa, e demoliu tudo ao sair (para nao gastar moedas). Bom jogador!

---

## Quest 10 — Boss Final: O Projeto Mushroom Kingdom

**Fase de referencia:** Todas (1-1 a 1-7)
**Pontos:** 25 (BOSS!)
**Dificuldade:** Dificil

### Objetivo

Unir TUDO que aprendeu em um mini-projeto coeso.

### Tarefas

- [ ] **10.1** No seu repositorio `boss-battle-world1`, crie uma nova branch:
  ```bash
  git switch -c feature/boss-battle
  ```

- [ ] **10.2** Crie um arquivo `boss-battle.js` que simula uma boss battle:
  ```javascript
  // ============================================
  // BOSS BATTLE — BOWSER JR.
  // ============================================
  // Crie um programa que:
  // 1. Define o heroi (nome, vidas, moedas, power-ups)
  // 2. Define o boss (Bowser Jr., com HP)
  // 3. Simula 5 rodadas de batalha:
  //    - Cada rodada, o heroi ataca (dano aleatorio 10-30)
  //    - Cada rodada, o boss ataca (heroi perde 1 vida com 30% de chance)
  //    - Se o heroi tiver FireFlower, dano e dobrado
  //    - Se o heroi tiver SuperStar, nao perde vidas naquela rodada
  // 4. No final, mostra quem venceu
  //
  // DICA: Use Math.random() para numeros aleatorios
  // DICA: Pode pedir ajuda ao Copilot!
  ```
  **Implemente o programa.** Use Copilot como companion, mas revise tudo.

- [ ] **10.3** Teste localmente:
  ```bash
  node boss-battle.js
  ```

- [ ] **10.4** Crie uma Issue no GitHub:
  ```
  Titulo: feat: implementar simulacao de boss battle
  Descricao: Criar programa que simula a batalha contra Bowser Jr.
  com sistema de dano, vidas e power-ups.
  ```

- [ ] **10.5** Commit e push:
  ```bash
  git add boss-battle.js
  git commit -m "feat: implementar boss battle contra Bowser Jr (#4)"
  git push origin feature/boss-battle
  ```

- [ ] **10.6** Crie um **Pull Request** vinculado a Issue

- [ ] **10.7** Verifique que o workflow de CI rodou no PR e passou

- [ ] **10.8** Faca merge do PR

- [ ] **10.9** Atualize seu local:
  ```bash
  git switch main
  git pull origin main
  ```

- [ ] **10.10** Execute `git log --oneline` e tire um screenshot final mostrando todo o historico

### Criterio de Sucesso

Programa funcional, testado, versionado com Git, revisado via PR, CI passando, merged na main. **O fluxo completo do World 1 em acao.**

> **ANALOGIA MARIO:** Esta e a sala do boss. Voce usou TODAS as habilidades: o console (VS Code), o memory card (Git), o servidor (GitHub), os Lakitus (Actions), e o companion (Copilot). Se chegou ate aqui, Bowser Jr. foi derrotado.

---

## Gabarito e Dicas

### Se voce travou na Quest 6 (PR):
Lembre-se: primeiro crie a branch, depois faca as mudancas, commit, push da branch, e so entao crie o PR no GitHub.

### Se voce travou na Quest 7 (Actions):
O caminho do arquivo YAML precisa ser EXATAMENTE `.github/workflows/nome.yml`. Cuidado com indentacao (2 espacos, nunca tabs).

### Se voce travou na Quest 10 (Boss Battle):
Use o Copilot! Escreva os comentarios descrevendo o que quer e deixe o Copilot sugerir. Depois revise e ajuste.

### Dica geral:
Se algo der erro, leia a mensagem de erro com calma. 90% das vezes, a resposta esta na propria mensagem.

---

## Placar Final — Avalie seu Desempenho

| Quest | Pontos | Seu Score |
|-------|--------|-----------|
| Quest 1 — VS Code | 10 | ___/10 |
| Quest 2 — Git | 15 | ___/15 |
| Quest 3 — GitHub | 10 | ___/10 |
| Quest 4 — Push | 10 | ___/10 |
| Quest 5 — Issues | 10 | ___/10 |
| Quest 6 — Branch+PR | 20 | ___/20 |
| Quest 7 — Actions | 15 | ___/15 |
| Quest 8 — Copilot | 10 | ___/10 |
| Quest 9 — Azure | 10 | ___/10 |
| Quest 10 — Boss Final | 25 | ___/25 |
| **TOTAL** | **135** | **___/135** |

### Classificacao

| Pontos | Resultado | Analogia Mario |
|--------|----------|----------------|
| **120-135** | **S Rank** — Perfeito! | Zerou todas as Star Coins da fase |
| **100-119** | **A Rank** — Excelente! | Completou com tempo de sobra |
| **80-99** | **B Rank** — Muito bom! | Completou sem perder vidas |
| **70-79** | **C Rank** — Bowser Jr. derrotado! | Completou por pouco! |
| **50-69** | **D Rank** — Quase la... | Tente de novo — revise as fases |
| **0-49** | **Game Over** | Volte ao World 1-1 e refaca as fases |

```
╔═══════════════════════════════════════════════════╗
║                                                   ║
║    ★ ★ ★  BOWSER JR. DERROTADO!  ★ ★ ★          ║
║                                                   ║
║    "Thank you Sofia!                              ║
║     You have cleared World 1!"                    ║
║                                                   ║
║    Habilidades desbloqueadas:                     ║
║    ✓ Desenvolvimento Local (VS Code + Git)        ║
║    ✓ Colaboracao (GitHub)                         ║
║    ✓ Automacao (GitHub Actions)                   ║
║    ✓ Cloud (Azure)                                ║
║    ✓ IA (Copilot + Azure AI)                      ║
║                                                   ║
║    → WORLD 2 DESBLOQUEADO!                        ║
║      Cavernas Subterraneas (Infraestrutura)       ║
║                                                   ║
║    "It's-a me, Developer!"                        ║
║                                                   ║
╚═══════════════════════════════════════════════════╝
```

---

## Referencias

- [Visual Studio Code](https://code.visualstudio.com)
- [Git — Documentacao](https://git-scm.com/docs)
- [GitHub Docs](https://docs.github.com)
- [GitHub Actions Quickstart](https://docs.github.com/en/actions/quickstart)
- [Microsoft Azure — Free Account](https://azure.microsoft.com/free)
- [GitHub Copilot](https://docs.github.com/en/copilot)
- [Node.js](https://nodejs.org)
- [Conventional Commits](https://www.conventionalcommits.org)
- [GitHub CLI (gh)](https://cli.github.com)

---

*"Bowser Jr. caiu. Mas ele era so o primeiro boss. Os mundos seguintes tem desafios muito maiores. Mas agora eu sei: com as ferramentas certas e a base solida, eu consigo enfrentar qualquer coisa." — Sofia, guardando o primeiro trofeu.*
