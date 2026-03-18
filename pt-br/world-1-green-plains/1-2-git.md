---
title: "Fase 1-2 — Save Game: Git e o Sistema de Saves"
description: "Aprenda Git do zero — o sistema de controle de versao que funciona como o save game mais poderoso ja criado."
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-1", "git", "fundamentos"]
---

# Fase 1-2 — Save Game: Git e o Sistema de Saves

---

## Change Log

| Versao | Data       | Autor        | Descricao                     |
|--------|------------|--------------|-------------------------------|
| 1.0.0  | 2026-03-18 | Paula Silva  | Criacao inicial (Edicao Mario)|

---

## Sumario

- [Prologo — O Jogador que Perdeu Tudo](#prologo--o-jogador-que-perdeu-tudo)
- [1. O que e Controle de Versao?](#1-o-que-e-controle-de-versao)
  - [1.1 O Problema: Sem Save Game](#11-o-problema-sem-save-game)
  - [1.2 A Solucao: Git — O Memory Card Definitivo](#12-a-solucao-git--o-memory-card-definitivo)
  - [1.3 Tabela: Git vs Sistema de Save do Mario](#13-tabela-git-vs-sistema-de-save-do-mario)
- [2. Instalando o Git — Comprando o Memory Card](#2-instalando-o-git--comprando-o-memory-card)
  - [2.1 Windows](#21-windows)
  - [2.2 macOS](#22-macos)
  - [2.3 Linux](#23-linux)
  - [2.4 Configuracao Inicial — Gravando seu Nome no Memory Card](#24-configuracao-inicial--gravando-seu-nome-no-memory-card)
- [3. Conceitos Fundamentais — O Manual do Memory Card](#3-conceitos-fundamentais--o-manual-do-memory-card)
  - [3.1 Repositorio (Repo) — O Cartucho do Jogo](#31-repositorio-repo--o-cartucho-do-jogo)
  - [3.2 A Pasta .git — O Chip do Memory Card](#32-a-pasta-git--o-chip-do-memory-card)
  - [3.3 Os 3 Estados: Working, Staging, Committed](#33-os-3-estados-working-staging-committed)
  - [3.4 Diagrama: Os 3 Estados do Git](#34-diagrama-os-3-estados-do-git)

<div align="center">
<img src="../../diagrams/svg/git-workflow.svg" alt="Fluxo de trabalho do Git: Working Directory → Staging → Repository" width="800">
<br><em>Fluxo de trabalho do Git: Working Directory → Staging → Repository</em>
</div>
- [4. Seu Primeiro Repositorio — Inserindo o Memory Card](#4-seu-primeiro-repositorio--inserindo-o-memory-card)
  - [4.1 git init — Formatando o Memory Card](#41-git-init--formatando-o-memory-card)
  - [4.2 git status — Verificando o Estado do Save](#42-git-status--verificando-o-estado-do-save)
  - [4.3 git add — Selecionando o que Salvar](#43-git-add--selecionando-o-que-salvar)
  - [4.4 git commit — Salvando de Verdade](#44-git-commit--salvando-de-verdade)
  - [4.5 Pratica Completa: Do Zero ao Primeiro Commit](#45-pratica-completa-do-zero-ao-primeiro-commit)
- [5. Historico de Saves — git log](#5-historico-de-saves--git-log)
  - [5.1 Vendo seu Historico](#51-vendo-seu-historico)
  - [5.2 Entendendo a Saida do git log](#52-entendendo-a-saida-do-git-log)
  - [5.3 Formatos Alternativos](#53-formatos-alternativos)
- [6. Desfazendo Coisas — Voltando no Tempo](#6-desfazendo-coisas--voltando-no-tempo)
  - [6.1 git checkout — Carregando um Save Antigo](#61-git-checkout--carregando-um-save-antigo)
  - [6.2 git diff — Comparando Saves](#62-git-diff--comparando-saves)
  - [6.3 git restore — Desfazendo Alteracoes](#63-git-restore--desfazendo-alteracoes)
- [7. Branches — Universos Paralelos](#7-branches--universos-paralelos)
  - [7.1 O que e uma Branch?](#71-o-que-e-uma-branch)
  - [7.2 Criando uma Branch](#72-criando-uma-branch)
  - [7.3 Trocando de Branch](#73-trocando-de-branch)
  - [7.4 Merge — Juntando Universos](#74-merge--juntando-universos)
  - [7.5 Diagrama: Branches como Universos Paralelos](#75-diagrama-branches-como-universos-paralelos)
- [8. Boas Praticas de Commits — A Arte de Salvar Bem](#8-boas-praticas-de-commits--a-arte-de-salvar-bem)
  - [8.1 Mensagens de Commit Claras](#81-mensagens-de-commit-claras)
  - [8.2 Commits Pequenos e Frequentes](#82-commits-pequenos-e-frequentes)
  - [8.3 Conventional Commits — O Padrao das Moedas](#83-conventional-commits--o-padrao-das-moedas)
- [9. Git no VS Code — O Save System Visual](#9-git-no-vs-code--o-save-system-visual)
  - [9.1 Source Control Panel](#91-source-control-panel)
  - [9.2 Indicadores Visuais](#92-indicadores-visuais)
  - [9.3 GitLens — Super Visao dos Saves](#93-gitlens--super-visao-dos-saves)
- [10. Tabela de Comandos Essenciais](#10-tabela-de-comandos-essenciais)
- [Resumo — O que Aprendemos na Fase 1-2](#resumo--o-que-aprendemos-na-fase-1-2)
- [Referencias](#referencias)

---

## Prologo — O Jogador que Perdeu Tudo

Sofia estava orgulhosa. Depois de horas trabalhando no codigo, ela tinha construido algo bonito — um programa que funcionava perfeitamente. Entao ela decidiu "melhorar" uma parte. Mudou uma coisa aqui, outra ali, mais uma la...

E tudo quebrou.

"Nao tem problema," pensou Sofia, "eu desfaco tudo e volto ao que era antes."

Mas... ela nao lembrava exatamente o que tinha mudado. Eram dezenas de alteracoes em varios arquivos. O `Ctrl+Z` so voltava ate certo ponto. O programa continuava quebrado. As horas de trabalho estavam perdidas.

Sofia sentiu aquela dor que todo jogador conhece: **perder o save game**. Aquele momento no Mario onde voce zerou 7 mundos, o console desliga por falta de energia, e voce descobre que nao salvou. Todas aquelas horas de jogo — perdidas para sempre.

"Se ao menos existisse um jeito de **voltar no tempo**," murmurou ela.

Existe. Chama-se **Git**.

"Bem-vinda a Fase 1-2," disse uma voz familiar. "Aqui voce vai aprender algo que vai mudar sua vida como desenvolvedora: o sistema de save game mais poderoso ja criado. Com ele, voce NUNCA mais vai perder trabalho. Nunca mais vai ter medo de experimentar. E nunca mais vai dizer 'eu nao lembro como era antes.' O Git lembra de TUDO."

---

## 1. O que e Controle de Versao?

### 1.1 O Problema: Sem Save Game

Imagine jogar Mario sem nenhum sistema de save. Voce comeca no World 1-1, morre no 4-3, e volta para o comeco. Toda vez. Sem checkpoints, sem continues, sem memory card.

Seria insano, certo? Ninguem jogaria assim.

Pois e exatamente isso que acontece quando voce programa sem controle de versao:

| Sem Git | Equivalente no Mario |
|---------|---------------------|
| Voce faz alteracoes e perde a versao anterior | Passar de fase e a fase anterior desaparecer para sempre |
| Voce nao sabe o que mudou entre ontem e hoje | Nao lembrar quais fases ja zerou |
| Duas pessoas editam o mesmo arquivo e um sobrescreve o outro | Dois jogadores jogando no mesmo save e um apagando o progresso do outro |
| Algo quebra e voce nao consegue voltar atras | Morrer e voltar ao inicio do jogo |
| Voce faz copias manuais (projeto_v1, projeto_v2_final, projeto_v2_final_FINAL) | Ter 47 memory cards rotulados a mao |

### 1.2 A Solucao: Git — O Memory Card Definitivo

**Git** e um **sistema de controle de versao distribuido**. Em palavras simples: Git e uma ferramenta que **rastreia todas as alteracoes** que voce faz nos seus arquivos, permite **voltar a qualquer ponto no tempo**, e possibilita que **varias pessoas trabalhem no mesmo projeto** sem conflitos.

Git foi criado em 2005 por **Linus Torvalds** (o mesmo criador do Linux) porque ele precisava de um sistema melhor para gerenciar as milhares de contribuicoes ao kernel do Linux.

> **ANALOGIA MARIO:** O Git e o **memory card perfeito**. Imagine um memory card que:
> - **Salva automaticamente** toda vez que voce pede (commit)
> - **Nunca se corrompe** — todos os saves ficam intactos para sempre
> - **Guarda TODOS os saves** — nao sobrescreve, acumula
> - **Permite voltar a QUALQUER save** — nao importa quanto tempo atras
> - **Permite criar universos paralelos** (branches) — testar caminhos diferentes sem afetar o save principal
> - **Permite que multiplos jogadores joguem no mesmo jogo** — cada um com seu save, depois juntam tudo
> - **Registra quem fez o que** — sabe qual jogador completou qual fase

### 1.3 Tabela: Git vs Sistema de Save do Mario

| Conceito Git | Funcao | Analogia Mario |
|-------------|--------|----------------|
| **Repository (repo)** | A pasta do projeto rastreada pelo Git | O **cartucho do jogo** — contem todas as fases e saves |
| **Commit** | Um snapshot (foto) do estado do projeto | Um **save game** — captura exatamente como tudo esta naquele momento |
| **Staging Area** | Area temporaria antes de salvar | **Tela de confirmacao** — "Tem certeza que quer salvar?" |
| **Working Directory** | Sua pasta de trabalho (modificacoes ainda nao salvas) | A **fase em andamento** — voce esta jogando mas ainda nao salvou |
| **.git folder** | Pasta oculta que armazena todo o historico | O **chip do memory card** — onde os dados ficam gravados |
| **Branch** | Linha de desenvolvimento independente | **Universo paralelo** — mesma fase, caminhos diferentes |
| **Merge** | Juntar duas branches | **Unir dois universos paralelos** num so |
| **git log** | Historico de todos os commits | **Lista de todos os saves** com data, hora e descricao |
| **git diff** | Diferenca entre duas versoes | **Comparar dois saves** — ver o que mudou |
| **git checkout** | Trocar de branch ou voltar a um commit | **Carregar um save diferente** |
| **HEAD** | O commit mais recente (onde voce esta agora) | **Seu save atual** — o ultimo checkpoint |

---

## 2. Instalando o Git — Comprando o Memory Card

### 2.1 Windows

1. Va para **https://git-scm.com/download/win**
2. Baixe o instalador
3. Execute o `.exe`
4. Nas opcoes de instalacao, aceite os padroes (eles sao bons)
5. **Importante:** Na tela "Adjusting your PATH environment", selecione **"Git from the command line and also from 3rd-party software"**
6. Continue clicando "Next" e "Install"

### 2.2 macOS

O macOS ja pode ter o Git instalado. Verifique:

```bash
git --version
```

Se nao estiver instalado:

```bash
# Via Homebrew (recomendado)
brew install git

# Ou instale o Xcode Command Line Tools
xcode-select --install
```

### 2.3 Linux

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install git

# Fedora
sudo dnf install git
```

### 2.4 Configuracao Inicial — Gravando seu Nome no Memory Card

Antes de usar o Git, voce precisa dizer a ele quem voce e. Todo save (commit) sera assinado com seu nome e email.

```bash
git config --global user.name "Sofia"
git config --global user.email "sofia@email.com"
```

Verifique a configuracao:

```bash
git config --list
```

> **ANALOGIA MARIO:** Isso e como **gravar seu nome no memory card**. Todo save que voce fizer daqui para frente vai mostrar "Save by: Sofia". Se outros jogadores tambem usarem o mesmo jogo, cada save mostra quem fez.

---

## 3. Conceitos Fundamentais — O Manual do Memory Card

### 3.1 Repositorio (Repo) — O Cartucho do Jogo

Um **repositorio** (ou **repo**) e uma pasta de projeto que esta sendo rastreada pelo Git. Qualquer pasta pode virar um repositorio — basta executar `git init` dentro dela.

> **ANALOGIA MARIO:** O repositorio e o **cartucho do jogo**. Dentro dele estao todas as fases (arquivos de codigo), todos os saves (commits), e toda a historia do jogo (historico de versoes). Sem o cartucho, nao tem jogo. Sem o repositorio, nao tem projeto.

### 3.2 A Pasta .git — O Chip do Memory Card

Quando voce inicializa um repositorio, o Git cria uma pasta oculta chamada `.git` dentro do seu projeto. Esta pasta contem **tudo** que o Git precisa: historico de commits, configuracoes, branches, etc.

```
mushroom-kingdom/
├── .git/              ← O chip do memory card (NAO TOQUE!)
│   ├── objects/       ← Todos os saves armazenados
│   ├── refs/          ← Ponteiros para branches e tags
│   ├── HEAD           ← Aponta para o save atual
│   └── config         ← Configuracoes do repo
├── fase1-1.js         ← Seu codigo
└── README.md          ← Descricao do projeto
```

> **AVISO:** Nunca delete ou edite a pasta `.git` manualmente. E como abrir o memory card com uma chave de fenda e mexer nos circuitos — voce pode corromper tudo.

### 3.3 Os 3 Estados: Working, Staging, Committed

No Git, seus arquivos podem estar em 3 estados diferentes. Entender isso e fundamental:

| Estado | O que Significa | Analogia Mario |
|--------|----------------|----------------|
| **Working Directory** (Modificado) | Voce alterou um arquivo, mas nao pediu para salvar | Voce esta **jogando a fase** — progresso existe, mas nao salvou |
| **Staging Area** (Preparado) | Voce marcou um arquivo para ser incluido no proximo save | Voce **selecionou "Save Game"** no menu — esta na tela de confirmacao |
| **Committed** (Salvo) | O arquivo foi salvo permanentemente no historico | O **save foi gravado** no memory card — seguro para sempre |


### 3.4 Diagrama: Os 3 Estados do Git

```
+-------------------+      git add      +-------------------+     git commit     +-------------------+
|                   | ----------------> |                   | -----------------> |                   |
|  WORKING          |                   |  STAGING          |                    |  REPOSITORY       |
|  DIRECTORY        |                   |  AREA             |                    |  (.git)           |
|                   |                   |                   |                    |                   |
|  "Jogando a fase" |                   |  "Tela de         |                    |  "Save gravado!"  |
|  (modificacoes    |                   |   confirmacao"    |                    |  (permanente,     |
|   nao salvas)     |                   |  (pronto para     |                    |   no memory card) |
|                   |                   |   salvar)         |                    |                   |
+-------------------+                   +-------------------+                    +-------------------+
        ^                                                                               |
        |                              git checkout                                     |
        +-------------------------------------------------------------------------------+
        "Carregar save antigo"
```

---

## 4. Seu Primeiro Repositorio — Inserindo o Memory Card

Vamos fazer na pratica. Abra o terminal do VS Code na pasta do seu projeto.

### 4.1 git init — Formatando o Memory Card

```bash
cd mushroom-kingdom
git init
```

Saida esperada:
```
Initialized empty Git repository in /home/sofia/mushroom-kingdom/.git/
```

> **ANALOGIA MARIO:** Voce acabou de **inserir e formatar o memory card**. A pasta `.git` foi criada. O Git agora esta observando tudo que acontece nessa pasta — pronto para salvar quando voce pedir.

### 4.2 git status — Verificando o Estado do Save

O comando `git status` e seu melhor amigo. Ele mostra exatamente onde cada arquivo esta (working, staging ou committed).

```bash
git status
```

Saida esperada:
```
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        fase1-1.js

nothing added to commit but untracked files present (use "git add" to track)
```

Isso significa: "Ei, eu vejo o arquivo `fase1-1.js`, mas voce nunca me pediu para rastrear ele. Quer que eu rastreie?"

> **ANALOGIA MARIO:** `git status` e como abrir o **menu de save** e ver a situacao: "Fase em andamento, progresso nao salvo." O Git te diz exatamente o que esta acontecendo.

### 4.3 git add — Selecionando o que Salvar

O comando `git add` move arquivos do Working Directory para a Staging Area. Voce esta dizendo: "inclua este arquivo no proximo save."

```bash
# Adicionar um arquivo especifico
git add fase1-1.js

# Ou adicionar todos os arquivos modificados
git add .
```

Verifique o status novamente:

```bash
git status
```

Saida:
```
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   fase1-1.js
```

O arquivo agora esta na Staging Area — na tela de confirmacao do save.

> **ANALOGIA MARIO:** `git add` e como selecionar **quais dados incluir no save**. Em jogos modernos, voce pode escolher: "Salvar progresso do World 1? Sim. Salvar itens coletados? Sim. Salvar configuracoes? Nao." O `git add` te da esse controle — voce decide exatamente o que entra no save.

### 4.4 git commit — Salvando de Verdade

O comando `git commit` cria um snapshot permanente do que esta na Staging Area. Todo commit precisa de uma **mensagem** que descreve o que foi feito.

```bash
git commit -m "feat: criar primeira fase do Mushroom Kingdom"
```

Saida:
```
[main (root-commit) a1b2c3d] feat: criar primeira fase do Mushroom Kingdom
 1 file changed, 25 insertions(+)
 create mode 100644 fase1-1.js
```

**Pronto!** Seu primeiro save foi gravado. Para sempre. Nao importa o que voce faca daqui para frente — esse save existe e pode ser recuperado a qualquer momento.

> **ANALOGIA MARIO:** `git commit` e o momento em que o save e **gravado no memory card**. A tela pisca, um som toca, e a mensagem aparece: "Progresso salvo!" A mensagem do commit (`-m "..."`) e a **descricao do save** — como "World 1-1 completo, 10 moedas coletadas."

### 4.5 Pratica Completa: Do Zero ao Primeiro Commit

Vamos repetir o processo completo, passo a passo:

```bash
# 1. Criar projeto
mkdir meu-primeiro-repo
cd meu-primeiro-repo

# 2. Inicializar Git (inserir memory card)
git init

# 3. Criar um arquivo
echo "# Meu Primeiro Projeto" > README.md

# 4. Verificar status (o que mudou?)
git status

# 5. Adicionar a staging (selecionar para save)
git add README.md

# 6. Verificar status novamente (confirmar selecao)
git status

# 7. Commit! (salvar de verdade)
git commit -m "feat: adicionar README inicial"

# 8. Verificar que o save foi feito
git status
git log
```

---

## 5. Historico de Saves — git log

### 5.1 Vendo seu Historico

O `git log` mostra todos os commits (saves) feitos no repositorio, do mais recente ao mais antigo.

```bash
git log
```

### 5.2 Entendendo a Saida do git log

```
commit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t (HEAD -> main)
Author: Sofia <sofia@email.com>
Date:   Tue Mar 18 10:30:00 2026 -0300

    feat: criar primeira fase do Mushroom Kingdom
```

| Campo | Significado | Analogia Mario |
|-------|-----------|----------------|
| `commit a1b2c3d...` | ID unico do commit (hash SHA-1) | Numero de serie do save — unico no universo |
| `HEAD -> main` | Este e o commit atual na branch main | "Voce esta aqui" no mapa |
| `Author: Sofia` | Quem fez o commit | Qual jogador salvou |
| `Date:` | Quando foi feito | Data e hora do save |
| Mensagem | Descricao do que foi feito | Anotacao no save ("World 1-1, 10 moedas") |

### 5.3 Formatos Alternativos

```bash
# Resumido — uma linha por commit
git log --oneline

# Com grafico de branches
git log --oneline --graph --all

# Ultimos 5 commits
git log -5

# Com detalhes de quais arquivos mudaram
git log --stat
```

O formato `--oneline` e especialmente util:

```
a1b2c3d (HEAD -> main) feat: criar primeira fase do Mushroom Kingdom
```

> **ANALOGIA MARIO:** `git log` e como abrir a **lista de saves** no memory card. Voce ve todos os saves que ja fez, quando fez, e a descricao de cada um. Perfeito para decidir "para qual save eu quero voltar?"

---

## 6. Desfazendo Coisas — Voltando no Tempo

Um dos super-poderes do Git e a capacidade de **voltar no tempo**. Algo quebrou? Volte para um save anterior.

### 6.1 git checkout — Carregando um Save Antigo

Para ver como o projeto era num commit anterior:

```bash
# Voltar temporariamente a um commit especifico
git checkout a1b2c3d

# Voltar para o commit mais recente
git checkout main
```

> **ANALOGIA MARIO:** `git checkout` e como **carregar um save antigo** do memory card. O jogo volta ao estado exato daquele save. Tudo que aconteceu depois "desaparece" temporariamente — mas os saves mais recentes continuam existindo no memory card. Voce pode voltar para o save mais recente a qualquer momento.

### 6.2 git diff — Comparando Saves

Para ver exatamente o que mudou entre o estado atual e o ultimo commit:

```bash
# Ver mudancas nao salvas (working vs ultimo commit)
git diff

# Ver mudancas na staging area
git diff --staged

# Comparar dois commits
git diff a1b2c3d b4c5d6e
```

A saida mostra linhas adicionadas (em verde com `+`) e removidas (em vermelho com `-`).

> **ANALOGIA MARIO:** `git diff` e como ver o **replay** comparando dois saves. "No save 1, Mario tinha 3 vidas e 10 moedas. No save 2, Mario tem 2 vidas e 45 moedas. Diferenca: perdeu 1 vida, ganhou 35 moedas."

### 6.3 git restore — Desfazendo Alteracoes

Se voce modificou um arquivo e quer descartar as alteracoes (voltar ao ultimo save):

```bash
# Descartar alteracoes de um arquivo especifico
git restore fase1-1.js

# Descartar TODAS as alteracoes nao salvas
git restore .
```

> **AVISO:** `git restore` descarta alteracoes permanentemente. E como clicar "Nao Salvar" ao sair do jogo — o progresso nao salvo desaparece.

---

## 7. Branches — Universos Paralelos

### 7.1 O que e uma Branch?

Uma **branch** e uma **linha de desenvolvimento independente**. E como se voce pudesse criar um **universo paralelo** do seu projeto, fazer experimentos nesse universo, e depois decidir: "gostei, vou trazer isso para o universo principal" ou "nao gostei, vou descartar esse universo."

> **ANALOGIA MARIO:** Imagine que no World 1-3, o caminho se divide em dois. Voce pode ir pela rota superior (atraves das nuvens) ou pela rota inferior (pelos canos). Uma branch e como poder ir pelos dois caminhos AO MESMO TEMPO, em universos paralelos. No final, voce escolhe qual rota ficou melhor — ou combina as duas.

### 7.2 Criando uma Branch

```bash
# Criar uma nova branch
git branch feature-moedas

# Criar e ja mudar para ela
git switch -c feature-moedas
# ou (comando antigo, tambem funciona)
git checkout -b feature-moedas
```

### 7.3 Trocando de Branch

```bash
# Mudar para outra branch
git switch feature-moedas
# ou
git checkout feature-moedas

# Voltar para a branch principal
git switch main

# Listar todas as branches
git branch
```

> **ANALOGIA MARIO:** `git switch` e como **entrar num portal para o universo paralelo**. Tudo que voce faz nesse universo nao afeta o universo principal (main). E seguro experimentar.

### 7.4 Merge — Juntando Universos

Quando voce termina o trabalho numa branch e quer trazer as alteracoes para a branch principal:

```bash
# 1. Voltar para main
git switch main

# 2. Juntar a branch feature
git merge feature-moedas
```

> **ANALOGIA MARIO:** `git merge` e como **unir os dois universos paralelos**. A rota das nuvens e a rota dos canos se juntam no mesmo destino, com tudo que voce coletou em ambas.

**Conflitos de Merge:** As vezes, dois jogadores editam a mesma linha do mesmo arquivo em branches diferentes. Quando voce tenta unir as branches, o Git diz: "Ei, dois jogadores mudaram a mesma coisa — eu nao sei qual manter. Voce decide." Isso se chama **conflito de merge**, e voce precisa resolver manualmente. Nao se preocupe com isso agora — na Fase 1-3 (GitHub) vamos aprofundar.

### 7.5 Diagrama: Branches como Universos Paralelos

```
                    ← feature-moedas (universo paralelo)
                   /                    \
  commit1 → commit2 → commit3            → commit6 (merge!)
                   \                    /
                    → commit4 → commit5
                    ← main (universo principal)

  Traduzindo:
  - No commit2, voce criou um universo paralelo (branch)
  - Nos dois universos, trabalho aconteceu em paralelo
  - No commit6, os universos foram unidos (merge)
```

---

## 8. Boas Praticas de Commits — A Arte de Salvar Bem

### 8.1 Mensagens de Commit Claras

Uma boa mensagem de commit explica **o que** foi feito e **por que**. Pense: se voce voltar a este save daqui a 6 meses, a mensagem vai te ajudar a entender o que aconteceu?

**Ruins:**
```
git commit -m "updates"
git commit -m "fix"
git commit -m "asdfg"
git commit -m "WIP"
```

**Boas:**
```
git commit -m "feat: adicionar sistema de contagem de moedas"
git commit -m "fix: corrigir bug que permitia pular paredes"
git commit -m "docs: adicionar README com instrucoes de instalacao"
```

> **ANALOGIA MARIO:** Imagine abrir sua lista de saves e ver: "Save 1", "Save 2", "Save 3"... versus "World 1-1 completo, 15 moedas", "World 1-2, encontrei passagem secreta", "World 1-3, antes do boss". Qual lista e mais util?

### 8.2 Commits Pequenos e Frequentes

Faca commits **pequenos e frequentes**, nao um commit gigante no final do dia.

| Pratica | Analogia Mario |
|---------|----------------|
| Um commit por tarefa logica | Salvar depois de cada fase, nao depois de cada mundo |
| Commit funciona sozinho | Cada save e jogavel — nao salvar no meio de um pulo |
| Commit frequente | Salvar a cada progresso significativo, nao a cada 5 segundos |

### 8.3 Conventional Commits — O Padrao das Moedas

**Conventional Commits** e um padrao para mensagens de commit que todo o time segue. O formato e:

```
tipo: descricao curta
```

| Tipo | Quando Usar | Analogia Mario |
|------|------------|----------------|
| `feat` | Nova funcionalidade | Construir uma nova fase |
| `fix` | Correcao de bug | Consertar um bloco quebrado |
| `docs` | Documentacao | Atualizar o manual do jogo |
| `style` | Formatacao (sem mudar logica) | Reorganizar moedas na fase |
| `refactor` | Reestruturar codigo sem mudar comportamento | Reconstruir a fase com o mesmo layout |
| `test` | Adicionar testes | Testar a fase antes de publicar |
| `chore` | Tarefas de manutencao | Limpar a sala de ferramentas |

---

## 9. Git no VS Code — O Save System Visual

### 9.1 Source Control Panel

O VS Code tem integracao nativa com Git. Clique no icone de ramificacao na Activity Bar (ou `Ctrl+Shift+G`) para abrir o **Source Control panel**.

Nele voce pode:
- Ver todos os arquivos modificados
- Clicar no `+` para adicionar a staging (`git add`)
- Escrever a mensagem de commit na caixa de texto
- Clicar no check para commitar

> **ANALOGIA MARIO:** O Source Control panel e o **menu de save game visual** — em vez de digitar comandos no terminal, voce clica botoes. Mais facil para iniciantes, mas faz a mesma coisa.

### 9.2 Indicadores Visuais

O VS Code mostra o estado Git de cada arquivo com cores:

| Cor/Icone | Significado | Analogia Mario |
|-----------|-----------|----------------|
| **U** (verde) | Untracked — arquivo novo, nao rastreado | Fase nova que o memory card ainda nao conhece |
| **M** (amarelo) | Modified — arquivo alterado desde o ultimo save | Fase em andamento com progresso nao salvo |
| **A** (verde) | Added — adicionado a staging | Fase selecionada para o proximo save |
| **D** (vermelho) | Deleted — arquivo removido | Fase destruida |
| **C** (amarelo) | Conflito — merge conflict | Dois jogadores editaram a mesma parte |

### 9.3 GitLens — Super Visao dos Saves

A extensao **GitLens** adiciona super-poderes ao Git no VS Code:
- Mostra **quem escreveu cada linha** (git blame)
- Mostra **quando cada linha foi alterada**
- Facilita a navegacao pelo historico

---

## 10. Tabela de Comandos Essenciais

| Comando | O que Faz | Analogia Mario |
|---------|-----------|----------------|
| `git init` | Inicializa um repositorio | Formatar o memory card |
| `git status` | Mostra o estado atual | Abrir o menu de save |
| `git add arquivo` | Adiciona a staging | Selecionar dados para o save |
| `git add .` | Adiciona TUDO a staging | Selecionar TODOS os dados |
| `git commit -m "msg"` | Cria um save permanente | Gravar o save no memory card |
| `git log` | Mostra historico de saves | Lista de todos os saves |
| `git log --oneline` | Historico resumido | Lista compacta de saves |
| `git diff` | Mostra o que mudou | Comparar save atual com anterior |
| `git branch nome` | Cria uma branch | Criar universo paralelo |
| `git switch nome` | Troca de branch | Entrar no universo paralelo |
| `git merge nome` | Junta branches | Unir universos paralelos |
| `git restore arquivo` | Desfaz alteracoes locais | Descartar progresso nao salvo |
| `git checkout hash` | Volta a um commit antigo | Carregar save antigo |

---

## Resumo — O que Aprendemos na Fase 1-2

| Conceito | O que E | Analogia Mario |
|----------|---------|----------------|
| **Git** | Sistema de controle de versao | O memory card definitivo |
| **Repositorio** | Pasta rastreada pelo Git | Cartucho do jogo |
| **.git** | Pasta oculta com todo o historico | Chip do memory card |
| **Commit** | Snapshot permanente do projeto | Save game |
| **Staging** | Area de preparacao pre-save | Tela de confirmacao do save |
| **Branch** | Linha de desenvolvimento paralela | Universo paralelo |
| **Merge** | Juncao de branches | Unir universos paralelos |
| **git log** | Historico de commits | Lista de saves |
| **git diff** | Diferenca entre versoes | Comparar dois saves |
| **Conventional Commits** | Padrao de mensagens | Descricao organizada dos saves |

```
+-------------------------------------------+
|                                           |
|    FASE 1-2 COMPLETA!                     |
|                                           |
|    ★ Git instalado e configurado          |
|    ★ Primeiro repositorio criado          |
|    ★ Primeiro commit realizado            |
|    ★ Historico de saves explorado         |
|    ★ Branches (universos paralelos)       |
|                                           |
|    → Proxima fase: 1-3 GitHub             |
|      (Servidor Multiplayer)               |
|                                           |
+-------------------------------------------+
```

---

## Referencias

- [Git — Site Oficial](https://git-scm.com)
- [Git Documentation — Reference](https://git-scm.com/docs)
- [Pro Git Book (gratuito)](https://git-scm.com/book/pt-br/v2)
- [GitHub — Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Conventional Commits](https://www.conventionalcommits.org/pt-br/)
- [VS Code — Version Control](https://code.visualstudio.com/docs/sourcecontrol/overview)
- [Atlassian — Git Tutorials](https://www.atlassian.com/git/tutorials)

---

*"Agora ninguem mais me tira meus saves." — Sofia, segurando firme seu memory card Git.*

---

<div align="center">

⬅️ [Anterior: Fase 1-1: VS Code](1-1-vs-code.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 1-3: GitHub](1-3-github.md)

</div>
