---
title: "Capitulo 4E — Hooks / Os Blocos ? — Gatilhos Automaticos"
description: "Como configurar Hooks para criar gatilhos automaticos no desenvolvimento, usando Husky e convencoes de commit."
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "2.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-6", "hooks", "husky"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 2.0.0 | 2026-03-18 | Paula Silva | Versao Mario Bros — reescrita completa com analogias Super Mario |
| 1.0.0 | 2026-03-06 | Paula Silva | Versao original com analogias RPG |

# Capitulo 4E — Hooks
## Os Blocos "?" — Gatilhos Automaticos no Desenvolvimento

---

**Preparado para:** Sofia
**Versao:** 2.0 — Edicao Mario
**Autora:** Paula Silva | Software Global Black Belt, Microsoft Americas
**Data:** Marco 2026
**Idioma:** Portugues do Brasil (pt-BR)
**Colecao:** Agentic DevOps

---

## SUMARIO

- Introducao — A Fase dos Blocos "?"
- O que sao Hooks
- Analogia Mario — Os Blocos "?" Inteligentes
- O que um Hook pode fazer?
- Eventos e Ciclo de Vida
- Tabela de Eventos e Hooks Disponiveis
- Detalhamento de Casos de Uso
- Estrutura de um Hook
- Arquitetura de Projeto com Hooks
- Instalacao e Configuracao Basica
- Exemplo 1: Hook Pre-commit com Validacao
- Exemplo 2: Hook Commit-msg com Conventional Commits
- Exemplo 3: Hook Pre-push com Testes
- package.json com Scripts de Validacao
- Hooks vs GitHub Actions
- Comparacao Detalhada
- Quando Usar Hooks?
- Quando Usar GitHub Actions?
- Fluxo Ideal — Hooks + GitHub Actions
- Exemplos Praticos — Codigo Completo
- Boas Praticas e Troubleshooting
- Conclusao

---

## Introducao — A Fase dos Blocos "?"

Sofia entrou na Fase dos Blocos "?".

A fase inteira estava repleta deles — blocos dourados com pontos de interrogacao flutuando no ar, em diferentes alturas e posicoes. Alguns brilhavam com intensidade, outros pulsavam suavemente. Cada um parecia esperar pacientemente ate que alguem viesse e batesse nele por baixo.

Mas havia algo diferente nesta fase. Os Blocos "?" nao eram aleatorios nem perigosos. Eram **inteligentes**. Alguns soltavam cogumelos de validacao que bloqueavam caminhos incorretos. Outros liberavam moedas de formatacao automatica, melhorando seu codigo sem que voce pedisse. Alguns ainda acionavam estrelas de notificacao que avisavam todo o time sobre seu progresso.

Sofia percebeu: esses Blocos "?" nao foram criados para atrapalhar. Eram sistemas de protecao, de melhoria, de automacao. E essa estrutura toda — essa coordenacao perfeita de eventos e acoes — tinha um nome: **Hooks**.

Neste capitulo, ela descobrira como os Hooks funcionam, quando disparam, como configurar seus proprios Blocos "?" automaticos, e como usa-los para proteger e melhorar seu codigo antes que ele chegue ao repositorio central.

> **Um Hook e um gatilho automatico que executa acoes em momentos especificos do ciclo de desenvolvimento. Assim como um Bloco "?" dispara quando Mario bate nele por baixo, um Hook dispara quando um evento ocorre.**

---

## O que sao Hooks

Hooks sao mecanismos de automacao que interceptam eventos no fluxo de desenvolvimento e executam acoes automaticas em resposta. Diferentemente de acoes manuais que um desenvolvedor executa conscientemente, Hooks operam em silencio, disparando suas funcoes quando condicoes especificas sao atendidas.

Imagine um desenvolvedor trabalhando em seu repositorio. Cada acao que ele toma — salvando um arquivo, criando um commit, fazendo um push — e um evento no ciclo de vida do projeto. Os Hooks observam esses eventos e, quando um ocorre, executam automaticamente uma serie de tarefas predefinidas.

---

## Analogia Mario — Os Blocos "?" Inteligentes

No Super Mario Bros, todo mundo conhece os Blocos "?". Voce esta correndo pela fase e ve aquele bloco dourado flutuando no ar. O que voce faz? Pula e bate nele por baixo! E quando bate, algo acontece AUTOMATICAMENTE:

1. **Mario corre pela fase** (voce esta desenvolvendo codigo) — EVENT
2. **Mario pula e bate no Bloco "?"** (voce faz um commit/push) — TRIGGER DETECTION
3. **O bloco e ativado** (o Hook detecta o evento) — EXECUTION
4. **Algo sai do bloco** (cogumelo, moeda, estrela, flor) — ACTION
5. **Mario recebe o resultado** (codigo validado, formatado ou bloqueado) — OUTCOME

Os Hooks funcionam exatamente assim. Mas em vez de cogumelos e moedas, temos validacoes, formatacoes e testes automaticos.

Existem diferentes **tipos** de Blocos "?":

**Blocos "?" de Protecao** — Se Mario bate no bloco e o codigo tem erros, sai um Buzzy Beetle que BLOQUEIA a passagem. O commit nao pode prosseguir. Voce precisa consertar para continuar.

**Blocos "?" de Melhoria** — Mario bate no bloco e sai um cogumelo que auto-formata o codigo, tornando-o mais bonito sem esforco manual. Como pegar um Super Mushroom sem pedir!

**Blocos "?" de Notificacao** — Depois que Mario passa pela fase, o bloco solta moedas que aparecem no placar de todo o time, notificando companheiros sobre o novo progresso.

**Blocos "?" de Registro** — Cada bloco que Mario bate fica registrado no placar, criando logs detalhados para futuras auditorias.

---

## O que um Hook pode fazer?

Os Hooks tem dois poderes principais:

**Executar Comandos Shell** — Rodar scripts Python, Node.js, ou qualquer ferramenta instalada no ambiente local do desenvolvedor.

**Bloquear ou Permitir Continuacao** — Um Hook pode examinar o resultado de um comando e decidir: "Deixar prosseguir" (exit code 0) ou "Parar tudo" (exit code 1).

Por exemplo, um Hook **pre-commit** pode:
- Executar ESLint para verificar erros de linting
- Executar Prettier para formatar o codigo automaticamente
- Executar testes unitarios rapidos
- Validar que o commit segue padroes de mensagem (ex: Conventional Commits)
- Se qualquer validacao falhar, BLOQUEAR o commit para que o desenvolvedor corrija os problemas

Um Hook **pre-push** pode:
- Rodar a suite completa de testes
- Verificar a cobertura de codigo
- Compilar o projeto para garantir que nada quebrou
- Se algum teste falhar, bloquear o push ate que tudo passe

---


## Eventos e Ciclo de Vida

O ciclo de vida de um projeto de software e repleto de eventos. Cada evento e um momento no qual um Hook pode disparar. Entender esses eventos e como conhecer a posicao de cada Bloco "?" na fase — voce precisa saber onde eles estao para aproveitar ao maximo.

### Tabela de Eventos e Hooks Disponiveis

| Evento | Quando Dispara | Caso de Uso Comum | Comando Exemplo | Tipo de Bloco "?" |
|---|---|---|---|---|
| **pre-commit** | Antes de salvar o commit | Validar sintaxe, rodar linting, formatar codigo | `npm run lint && npm run prettier` | Bloco "?" de Protecao + Melhoria |
| **commit-msg** | Depois que a mensagem e escrita, antes de salvar | Validar que a mensagem segue Conventional Commits | `npm run validate:commit-msg` | Bloco "?" de Protecao |
| **post-commit** | Imediatamente apos o commit ser salvo | Notificar canais, atualizar logs, gerar relatorios | `curl https://slack.com/hooks/...` | Bloco de Moedas (notificacao) |
| **pre-push** | Antes de enviar commits para o repositorio remoto | Rodar suite completa de testes, verificar coverage | `npm run test:full && npm run coverage` | Bloco "?" GIGANTE de Protecao |
| **post-push** | Depois que o push foi enviado (sucesso) | Disparar CI/CD pipeline, notificar equipe | `npm run deploy:staging` | Bloco de Moedas + Acao |
| **post-merge** | Apos fazer merge de um branch | Instalar dependencias novas, rodar migrations | `npm install && npm run db:migrate` | Bloco "?" de Auto-ajuste |
| **prepare-commit-msg** | Depois que a mensagem padrao e criada | Auto-preencher informacoes (ticket #, branch) | `echo '[TICKET-123]' >> $1` | Bloco "?" de Melhoria |
| **file-change (custom)** | Quando um arquivo especifico e modificado | Auto-formatar TypeScript, validar YAML | `npx prettier --write src/**/*.ts` | Bloco "?" de Melhoria |

---

## Detalhamento de Casos de Uso

### Pre-commit Hook — O Bloco "?" Antes do Checkpoint

Este e o primeiro Bloco "?" que Mario encontra quando tenta salvar seu progresso. E como um bloco dourado gigante posicionado bem na frente da checkpoint flag — voce TEM que bater nele para passar.

- Roda ESLint e outros linters para encontrar erros de sintaxe e estilo
- Executa Prettier para formatar automaticamente o codigo
- Valida tipos com TypeScript (`tsc --noEmit`)
- Se QUALQUER validacao falhar, o commit e BLOQUEADO ate que o desenvolvedor corrija os problemas
- Se tudo passar, o commit e permitido naturalmente

### Commit-msg Hook — O Bloco "?" que Verifica se Voce Tem a Chave Certa

Este Bloco "?" examina a mensagem de commit para garantir que segue um padrao (ex: Conventional Commits). E como aqueles blocos que so liberam o conteudo se voce tiver a chave certa — neste caso, a "chave" e formatar a mensagem corretamente.

- Verifica se a mensagem comeca com tipo (`feat:`, `fix:`, `docs:`, etc.)
- Verifica se ha uma descricao clara
- Pode validar se referencia um ticket (#123)
- Se invalido, rejeita o commit e pede que o desenvolvedor reescreva

### Post-commit Hook — O Bloco de Moedas Depois do Checkpoint

Depois que Mario passa pelo checkpoint com sucesso, este bloco solta moedas que aparecem no placar de todos — e a notificacao para o time.

- Notificar um canal Slack com a mudanca
- Gerar um relatorio e salva-lo em um arquivo de log
- Atualizar um dashboard de progresso
- Enviar email para stakeholders

**Nota:** Post-commit NAO consegue bloquear o commit (ja foi salvo), mas pode tomar outras acoes. A moeda ja saiu do bloco!

### Pre-push Hook — O Bloco "?" GIGANTE no Final da Fase

Antes de enviar seu codigo para o castelo central (repositorio remoto), Mario encontra um Bloco "?" GIGANTE — aquele bloco enorme que exige muito mais para ser ativado e tem consequencias muito maiores.

- Executa `npm test` (suite completa, nao apenas testes rapidos)
- Verifica cobertura de testes
- Compila o projeto (`npm run build`) para garantir que nao ha erros de build
- Se QUALQUER teste falhar, o push e BLOQUEADO
- O desenvolvedor nao consegue enviar codigo quebrado para o repositorio central

### Post-push Hook — O Bloco que Ativa o Lakitu

Depois que o push foi enviado com sucesso, este bloco acorda o **Lakitu** (aquele cara na nuvem) que inicia processos na nuvem.

- Disparar o CI/CD pipeline no GitHub Actions ou GitLab CI
- Iniciar deploy automatico para staging ou producao
- Criar uma issue de acompanhamento
- Notificar equipes de QA ou DevOps

---

## Estrutura de um Hook

Hooks nao sao criados do nada. Existem ferramentas e padroes que facilitam sua configuracao. A mais popular e o **Husky**, uma biblioteca Node.js que gerencia Hooks Git de forma elegante.

### Arquitetura de Projeto com Hooks

Um projeto tipico com Hooks (Blocos "?") tem esta estrutura:

```
my-project/
├── .husky/                    # Fase dos Blocos "?" (gerenciado por Husky)
│   ├── _/                     # Scripts internos do Husky
│   ├── pre-commit             # Bloco "?" antes do checkpoint
│   ├── commit-msg             # Bloco "?" que verifica a chave
│   ├── pre-push               # Bloco "?" GIGANTE no final da fase
│   └── prepare-commit-msg     # Bloco "?" de preparacao
├── .git/
├── src/
├── tests/
├── .npmrc ou .yarnrc          # Configuracao de package manager
├── package.json               # Dependencias (incluindo Husky)
├── .eslintrc.json             # Configuracao de linting
├── .prettierrc                # Configuracao de formatacao
├── jest.config.js             # Configuracao de testes
└── README.md
```

### Instalacao e Configuracao Basica

**Passo 1: Instalar Husky**
```bash
npm install husky --save-dev
npx husky install
```

**Passo 2: Criar um Bloco "?" Pre-commit**
```bash
npx husky add .husky/pre-commit "npm run lint && npm run prettier"
# Isso cria o arquivo .husky/pre-commit com o comando
```

**Passo 3: Criar um Bloco "?" Commit-msg**
```bash
npx husky add .husky/commit-msg "npm run validate:commit-msg"
# Este Bloco "?" validara a mensagem antes de permitir o commit
```

---

## Exemplo 1: Hook Pre-commit com Validacao

**Arquivo:** `.husky/pre-commit`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "Iniciando validacoes pre-commit..."

# Rodar ESLint
echo "Verificando linting..."
npm run lint
LINT_EXIT=$?

# Rodar Prettier (formatacao)
echo "Formatando codigo..."
npm run prettier
PRETTIER_EXIT=$?

# Rodar Type-check
echo "Verificando tipos..."
npm run type-check
TYPE_EXIT=$?

# Se qualquer validacao falhou, bloquear o commit
if [ $LINT_EXIT -ne 0 ] || [ $PRETTIER_EXIT -ne 0 ] || [ $TYPE_EXIT -ne 0 ]; then
    echo "Validacoes falharam. Commit bloqueado."
    exit 1
fi

echo "Todas as validacoes passaram. Commit permitido."
exit 0
```

Este Bloco "?" faz o seguinte: primeiro verifica o linting (`npm run lint`), depois formata o codigo (`npm run prettier`), depois verifica tipos (`npm run type-check`). Se QUALQUER comando retorna um codigo de erro (exit code != 0), o Bloco "?" retorna 1, bloqueando o commit. Isso garante que nenhum codigo quebrado chega ao repositorio.

**Analogia Mario:** E como um Bloco "?" que voce bate e ele faz uma verificacao tripla — checa se voce tem o cogumelo (lint ok), a flor de fogo (formato ok) e a armadura (tipos ok). Se falta algum, o bloco te bloqueia ate voce pegar todos os power-ups.

---

## Exemplo 2: Hook Commit-msg com Conventional Commits

**Arquivo:** `.husky/commit-msg`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

COMMIT_MSG=$(cat "$1")

# Padrao de Conventional Commits
# Valido: feat: add login feature
#         fix: correct typo
#         docs: update README
#         Invalid: added new feature

PATTERN="^(feat|fix|docs|style|refactor|test|chore|perf)(\(.+\))?: .{1,}"

if ! echo "$COMMIT_MSG" | grep -E "$PATTERN" > /dev/null; then
    echo "Mensagem de commit invalida."
    echo "Use o padrao: <type>(<scope>): <subject>"
    echo "Tipos validos: feat, fix, docs, style, refactor, test, chore, perf"
    echo "Exemplo: feat(auth): add two-factor authentication"
    exit 1
fi

echo "Mensagem de commit valida."
exit 0
```

Este Bloco "?" valida que toda mensagem de commit segue o padrao Conventional Commits. Se a mensagem nao combinar com o padrao, o commit e bloqueado e uma mensagem de ajuda e exibida.

**Analogia Mario:** E como aquele bloco que so abre se voce tiver a chave certa. A "chave" aqui e formatar sua mensagem no padrao correto (`feat:`, `fix:`, `docs:`...). Sem a chave certa, o bloco nao libera a passagem!

---

## Exemplo 3: Hook Pre-push com Testes

**Arquivo:** `.husky/pre-push`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "Executando suite completa de testes..."

# Rodar todos os testes
npm run test:full
TEST_EXIT=$?

if [ $TEST_EXIT -ne 0 ]; then
    echo "Testes falharam. Push bloqueado."
    echo "Corrija os testes antes de fazer push."
    exit 1
fi

echo "Compilando o projeto..."
npm run build
BUILD_EXIT=$?

if [ $BUILD_EXIT -ne 0 ]; then
    echo "Build falhou. Push bloqueado."
    exit 1
fi

echo "Todos os testes passaram e o build foi bem-sucedido. Push permitido."
exit 0
```

Este Bloco "?" GIGANTE garante que nenhum codigo com testes falhando chegue ao repositorio remoto. Tambem verifica que o projeto consegue fazer build corretamente.

**Analogia Mario:** E o Bloco "?" GIGANTE que fica no final da fase, bem antes da bandeira. Voce precisa de TODA sua forca para ativa-lo (roda TODOS os testes), e se nao passar, voce nao consegue completar a fase. E o ultimo guardiao antes do castelo!

---

## package.json com Scripts de Validacao

```json
{
  "name": "my-agentic-devops-project",
  "version": "1.0.0",
  "scripts": {
    "lint": "eslint src/**/*.ts --max-warnings 0",
    "prettier": "prettier --write src/**/*.{ts,tsx,json}",
    "type-check": "tsc --noEmit",
    "test:quick": "jest --testPathPattern=src --maxWorkers=1",
    "test:full": "jest --coverage",
    "build": "tsc && webpack",
    "validate:commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  },
  "devDependencies": {
    "husky": "^8.0.0",
    "@commitlint/cli": "^17.0.0",
    "@commitlint/config-conventional": "^17.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0",
    "typescript": "^5.0.0",
    "jest": "^29.0.0"
  }
}
```

---

## Hooks vs GitHub Actions

Ambas sao ferramentas de automacao poderosas, mas funcionam em contextos completamente diferentes. Entender a diferenca e crucial para saber quando usar cada uma.

### Comparacao Detalhada

| Aspecto | Hooks (Husky) | GitHub Actions | Analogia Mario |
|---|---|---|---|
| **Onde Executa** | Computador local do dev | Servidor GitHub (nuvem) | Blocos "?" na fase vs Lakitu vigiando do ceu |
| **Quando Dispara** | Durante o desenvolvimento (commit, push, etc) | Depois que codigo chega ao repositorio | Bloco na fase vs Lakitu depois que voce passa |
| **Tempo de Execucao** | Instantaneo (segundos) | Minutos (enfileiramento + execucao) | Reacao imediata vs Reacao atrasada |
| **Acesso a Arquivos** | Todos os arquivos locais, nao-commitados | Apenas arquivos no repositorio | Inventario do Mario vs Biblioteca do castelo |
| **Pode Bloquear?** | SIM - bloqueia commit/push | NAO - pode apenas reportar falha | Bloco te para vs Lakitu manda notificacao |
| **Custo** | Gratuito (roda localmente) | Gratuito ate 2000 minutos/mes por conta | Sem custo local vs Minutos na nuvem |
| **Melhor Para** | Validacoes rapidas, linting, formatacao | Testes longos, builds, deploy, notificacoes | Verificacao rapida na fase vs Cerimonia no castelo |
| **Risco de Bypass** | Pode ser contornado com `--no-verify` | Nao pode ser contornado (no servidor) | Mario pode pular o bloco vs Lakitu sempre ve |
| **Setup** | Simples (`npm install` + `npx husky add`) | Requer arquivo `.github/workflows/` | Bloco facil de colocar vs Construir Lakitu requer planejamento |
| **Visibilidade** | Apenas o desenvolvedor ve | Toda a equipe ve os logs no GitHub | Bloco privado vs Evento publico |

### Quando Usar Hooks?

- Validacoes RAPIDAS (linting, formatacao, type-check)
- Feedback INSTANTANEO para o desenvolvedor
- Padroes de COMMIT obrigatorios (conventional commits)
- Evitar commits-lixo ou incompletos
- Testes RAPIDOS (unit tests, nao testes de integracao)
- Auto-fixing de problemas comuns (prettier, auto-import)

### Quando Usar GitHub Actions?

- Testes LONGOS (suites completas, testes de integracao)
- Build e compilacao
- Deploy automatico para staging/producao
- Gerar relatorios ou artefatos
- Notificar sistemas externos (Slack, JIRA, email)
- Executar tasks que precisam de credenciais/secrets
- Garantir que NINGUEM consegue fazer bypass

### Fluxo Ideal — Hooks + GitHub Actions

A melhor pratica e usar ambos em conjunto — Blocos "?" na fase E Lakitu na nuvem:

```
DESENVOLVEDOR COMMITA:
  1. Pre-commit (Bloco "?"): Lint + Prettier + Type-check (RAPIDO, BLOQUEIA se falha)
  2. Commit-msg (Bloco "?" da chave): Validar mensagem (Conventional Commits)
  3. Post-commit (Bloco de moedas): Notificar (opcional)

DESENVOLVEDOR FAZ PUSH:
  4. Pre-push (Bloco "?" GIGANTE): Testes rapidos (BLOQUEIA se falha)
  5. Git push para repositorio

CODIGO NO REPOSITORIO:
  6. GitHub Actions (Lakitu) dispara: npm test (suite completa)
  7. GitHub Actions (Lakitu) dispara: npm run build
  8. GitHub Actions (Lakitu) dispara: Deploy se tudo passou
  9. GitHub Actions (Lakitu) notifica: Slack, email, dashboard
```

Desse modo, o desenvolvedor fica com feedback INSTANTANEO (Blocos "?") e o time fica com garantias de qualidade (Lakitu na nuvem). E o melhor dos dois mundos!

---

## Exemplos Praticos — Codigo Completo

### Exemplo 1: Conventional Commit Validator

**Objetivo:** Garantir que TODOS os commits seguem o padrao Conventional Commits
**Trigger:** commit-msg (dispara quando a mensagem e digitada)
**Acao:** Validar padrao; se invalido, rejeitar com mensagem de ajuda

**Arquivo:** `.husky/commit-msg`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# ============================================================
# Conventional Commit Hook
# Valida que a mensagem segue: type(scope): description
# Tipos validos: feat, fix, docs, style, refactor, test, chore
# ============================================================

COMMIT_MSG_FILE=$1
COMMIT_MSG=$(head -n1 "$COMMIT_MSG_FILE")

# Remover comentarios (#)
CLEAN_MSG=$(echo "$COMMIT_MSG" | sed 's/#.*//' | xargs)

# Padrao regex
# Aceita: feat: description
#         feat(auth): add login
#         fix: bug in parser
#         REVERT: previous commit
# Rejeita: added new feature
#         implement dashboard

PATTERN="^(feat|fix|docs|style|refactor|test|chore|perf|revert)(\([a-z-]+\))?: .{1,}"

if ! echo "$CLEAN_MSG" | grep -qE "$PATTERN"; then
    echo ""
    echo "COMMIT REJEITADO: Mensagem em formato invalido."
    echo ""
    echo "Padrao esperado:"
    echo "  <type>(<scope>): <description>"
    echo ""
    echo "Tipos validos: feat, fix, docs, style, refactor, test, chore, perf, revert"
    echo ""
    echo "Exemplos validos:"
    echo "  feat: add user authentication"
    echo "  feat(auth): implement two-factor auth"
    echo "  fix(api): resolve null pointer exception"
    echo "  docs: update installation instructions"
    echo "  refactor(core): simplify event loop"
    echo ""
    echo "Sua mensagem: $COMMIT_MSG"
    echo ""
    exit 1
fi

echo "Mensagem de commit valida. Prosseguindo..."
exit 0
```

- **Sucesso:** Commit prossegue normalmente
- **Falha:** Commit e rejeitado com instrucoes claras sobre como corrigir

**Analogia Mario:** O Bloco "?" que verifica se voce tem a chave certa. Se o formato da sua mensagem nao bate com o padrao (a chave), o bloco te bloqueia e mostra exatamente qual chave voce precisa.

### Exemplo 2: ESLint Auto-fix no Pre-commit

**Objetivo:** Executar linting e corrigir problemas automaticamente antes de permitir o commit
**Trigger:** pre-commit (dispara quando o desenvolvedor tenta fazer commit)
**Acao:** Rodar `eslint --fix`, depois prettier; se houver erros nao-corrigiveis, bloquear

**Arquivo:** `.husky/pre-commit`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# ============================================================
# Pre-commit Hook: Linting + Formatting
# Executa ESLint com auto-fix e Prettier
# ============================================================

echo "Pre-commit validation iniciado..."
echo ""

# Definir cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Obter lista de arquivos staged
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(ts|tsx|js|jsx|json)$')

if [ -z "$STAGED_FILES" ]; then
    echo "Nenhum arquivo JS/TS para validar."
    exit 0
fi

echo "Arquivos para validar:"
echo "$STAGED_FILES" | sed 's/^/  - /'
echo ""

# ============================================================
# Step 1: ESLint com auto-fix
# ============================================================
echo "${YELLOW}Step 1/3: Executando ESLint com auto-fix...${NC}"

if npx eslint $STAGED_FILES --fix --max-warnings 0; then
    echo "${GREEN}ESLint passou.${NC}"
else
    echo "${RED}ESLint encontrou erros que nao conseguiu corrigir.${NC}"
    echo "   Corrija os erros manualmente e tente novamente."
    exit 1
fi
echo ""

# ============================================================
# Step 2: Prettier para formatacao
# ============================================================
echo "${YELLOW}Step 2/3: Executando Prettier...${NC}"

if npx prettier --write $STAGED_FILES > /dev/null 2>&1; then
    echo "${GREEN}Prettier executado com sucesso.${NC}"
else
    echo "${RED}Prettier falhou.${NC}"
    exit 1
fi
echo ""

# ============================================================
# Step 3: Type-checking com TypeScript
# ============================================================
echo "${YELLOW}Step 3/3: Executando type-check...${NC}"

if npx tsc --noEmit; then
    echo "${GREEN}Type-check passou.${NC}"
else
    echo "${RED}Type-check encontrou erros.${NC}"
    echo "   Corrija os erros de tipo e tente novamente."
    exit 1
fi
echo ""

echo "${GREEN}Todas as validacoes passaram!${NC}"
echo "   Arquivos modificados foram re-staged automaticamente."

# Re-add arquivos que foram auto-fixados
git add $STAGED_FILES

exit 0
```

- **Sucesso:** Arquivos sao auto-formatados e re-adicionados ao staging; commit prossegue
- **Falha:** Se ESLint encontra erros nao-corrigiveis ou TypeScript detecta problemas de tipo, o commit e bloqueado

**Analogia Mario:** E um Bloco "?" triplo! Voce bate e saem tres power-ups em sequencia: primeiro o ESLint (cogumelo que corrige automaticamente), depois o Prettier (estrela que formata tudo), depois o TypeScript (flor de fogo que verifica tipos). Se algum power-up falhar, o bloco te para ate voce estar pronto.

### Exemplo 3: Jest Test Runner no Pre-push

**Objetivo:** Rodar testes automaticamente antes de fazer push; se algum teste falha, bloquear push
**Trigger:** pre-push (dispara quando o desenvolvedor tenta fazer `git push`)
**Acao:** Executar suite completa de testes; se QUALQUER teste falha, rejeitar push

**Arquivo:** `.husky/pre-push`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# ============================================================
# Pre-push Hook: Jest Test Suite
# Garante que nenhum codigo quebrado e pushado
# ============================================================

echo "Pre-push validation iniciado..."
echo ""

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# ============================================================
# Verificar mudancas relativas ao remote
# ============================================================
echo "${BLUE}Analisando commits a fazer push...${NC}"

# Obter branch local e remoto
LOCAL_BRANCH=$(git rev-parse --abbrev-ref HEAD)
REMOTE_BRANCH="origin/$LOCAL_BRANCH"

# Verificar se remote branch existe
if ! git rev-parse --verify "$REMOTE_BRANCH" > /dev/null 2>&1; then
    REMOTE_BRANCH="origin/main"  # Fallback para main se nao existe remote
fi

# Listar commits que serao pushados
COMMITS=$(git log $REMOTE_BRANCH..HEAD --oneline 2>/dev/null | wc -l)
echo "Branch: $LOCAL_BRANCH"
echo "Commits a fazer push: $COMMITS"
echo ""

# ============================================================
# Step 1: Rodar testes com Jest
# ============================================================
echo "${YELLOW}Step 1/3: Executando Jest test suite...${NC}"

if npm run test -- --passWithNoTests; then
    echo "${GREEN}Todos os testes passaram.${NC}"
else
    echo "${RED}Testes falharam. Push bloqueado.${NC}"
    echo "   Corrija os testes antes de fazer push:"
    echo "   $ npm run test -- --watch"
    exit 1
fi
echo ""

# ============================================================
# Step 2: Verificar cobertura de codigo
# ============================================================
echo "${YELLOW}Step 2/3: Verificando cobertura de testes...${NC}"

COVERAGE_THRESHOLD=70

if npm run test:coverage > /tmp/jest_coverage.log 2>&1; then
    COVERAGE=$(grep -oP 'Lines\s+:\s+\K[^%]*' /tmp/jest_coverage.log | head -1 | xargs)
    if (( $(echo "$COVERAGE >= $COVERAGE_THRESHOLD" | bc -l) )); then
        echo "${GREEN}Cobertura adequada: ${COVERAGE}%${NC}"
    else
        echo "${YELLOW}Cobertura baixa: ${COVERAGE}% (minimo: ${COVERAGE_THRESHOLD}%)${NC}"
        echo "   Considere adicionar mais testes."
    fi
else
    echo "${YELLOW}Nao foi possivel calcular cobertura.${NC}"
fi
echo ""

# ============================================================
# Step 3: Build do projeto
# ============================================================
echo "${YELLOW}Step 3/3: Compilando o projeto...${NC}"

if npm run build > /tmp/build.log 2>&1; then
    echo "${GREEN}Build bem-sucedido.${NC}"
else
    echo "${RED}Build falhou. Push bloqueado.${NC}"
    echo "   Corrija erros de compilacao:"
    tail -20 /tmp/build.log
    exit 1
fi
echo ""

echo "${GREEN}Validacao completa. Push permitido!${NC}"
exit 0
```

- **Sucesso:** Testes passam, cobertura esta aceitavel, build compila; push e permitido
- **Falha:** Se testes falham ou build quebra, push e bloqueado imediatamente

**Analogia Mario:** E o Bloco "?" GIGANTE no final da fase — aquele bloco enorme que so aparece antes do castelo. Voce precisa passar por tres desafios (testes, cobertura, build) para ativa-lo. Se falhar em qualquer um, voce nao entra no castelo (repositorio remoto). E o boss dos Blocos "?"!

---

## Configuracao Completa do package.json

```json
{
  "name": "@agentic-devops/hooks-example",
  "version": "2.0.0",
  "description": "Exemplo completo de Hooks para o Agentic DevOps",
  "main": "dist/index.js",
  "scripts": {
    "lint": "eslint src/**/*.{ts,tsx} --max-warnings 0",
    "lint:fix": "eslint src/**/*.{ts,tsx} --fix",
    "prettier": "prettier --write src/**/*.{ts,tsx,json,md}",
    "prettier:check": "prettier --check src/**/*.{ts,tsx,json,md}",
    "type-check": "tsc --noEmit",
    "test": "jest --testPathPattern=src --maxWorkers=1",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "build": "tsc && webpack --mode production",
    "dev": "tsc --watch & webpack --mode development --watch",
    "validate:commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  },
  "devDependencies": {
    "@commitlint/cli": "^17.6.7",
    "@commitlint/config-conventional": "^17.6.7",
    "@types/jest": "^29.5.0",
    "@types/node": "^20.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint": "^8.44.0",
    "husky": "^8.0.3",
    "jest": "^29.5.0",
    "prettier": "^3.0.0",
    "ts-jest": "^29.1.0",
    "typescript": "^5.1.0",
    "webpack": "^5.88.0",
    "webpack-cli": "^5.1.0"
  }
}
```

---

## Boas Praticas e Troubleshooting

### Boas Praticas ao Configurar Blocos "?"

**1. Mantenha Blocos "?" Rapidos:** Se um pre-commit Hook leva mais de 10 segundos, os desenvolvedores vao usar `--no-verify` (pular o bloco) ou procurar uma ferramenta mais rapida. Ninguem gosta de ficar esperando no meio da fase!

- ESLint + Prettier: 2-5 segundos
- TypeScript type-check: 3-8 segundos
- Testes rapidos (unitarios): 5-15 segundos
- Testes de integracao: muito lento para pre-commit
- Deploy: muito lento para pre-push

**2. Forneca Mensagens de Erro Claras:** Quando um Bloco "?" rejeita algo, o desenvolvedor precisa saber exatamente por que e como corrigir.

- RUIM: "Erro 1"
- BOM: "ESLint falhou na linha 42 de src/auth.ts: Variavel nunca usada. Remova ou use a variavel."
- RUIM: "Validacao falhou"
- BOM: "Mensagem de commit invalida. Use padrao: feat: description. Exemplo: feat: add login screen"

**3. Permita Bypass Consciente:** Desenvolvedores precisam poder contornar Blocos "?" em emergencias, mas deve ser uma decisao consciente. E como o Mario que pode pular um bloco se quiser, mas sabe que vai perder o power-up.

- Pre-commit e commit-msg podem ser contornados com: `git commit --no-verify`
- Pre-push pode ser contornado com: `git push --no-verify`
- Isso fica registrado no git log, entao ha accountability
- Para bloquear de verdade, use branch protection rules no GitHub (isso e o Lakitu — ele SEMPRE ve)

**4. Documente Seus Blocos "?":** Novos membros da equipe precisam entender por que cada Bloco "?" existe.

- Crie um arquivo HOOKS.md na raiz do projeto
- Liste cada Hook, seu proposito, e como contornar se necessario
- Inclua exemplos de mensagens de erro comuns

### Troubleshooting Comum

**Problema:** Hook nao executa apos git clone
**Causa:** .husky nao foi instalado
**Solucao:** `npm install && npx husky install`
**Previna:** Adicione `"prepare": "husky install"` ao package.json

**Problema:** "permission denied" ao executar Hook
**Causa:** `.husky/pre-commit` nao tem permissao de execucao
**Solucao:** `chmod +x .husky/*`
**Ou:** `git update-index --chmod=+x .husky/pre-commit`

**Problema:** Desenvolvedor contorna Hook com --no-verify
**Causa:** Eles estao com pressa ou frustrados com o Hook lento
**Solucao:** Otimize o Hook para ser mais rapido
**Ou:** Configure branch protection no GitHub para garantir qualidade mesmo com --no-verify (Lakitu na nuvem sempre ve!)

**Problema:** Hook funciona localmente mas nao no GitHub Actions
**Causa:** Ambiente diferente, versoes diferentes, ou dependencias faltando
**Solucao:**
- Certifique-se que GitHub Actions instala as mesmas dependencias: `npm ci`
- Verifique Node.js version no Actions vs local
- Execute os mesmos comandos em ambos os ambientes

---

## Conclusao

Sofia saiu da Fase dos Blocos "?" com um novo conhecimento. Ela agora entendia que Hooks nao eram obstaculos, mas **aliados** — Blocos "?" inteligentes que protegem o codigo e permitem que desenvolvedores trabalhem com confianca.

Cada Bloco "?" (evento), cada mecanismo (configuracao), cada power-up que sai do bloco (validacao) trabalhava em perfeita sincronizacao. E o melhor: tudo era invisivel quando funcionava corretamente. Mario simplesmente corre pela fase, bate nos blocos, e confia que eles estao fazendo seu trabalho — soltando cogumelos de validacao, moedas de notificacao e estrelas de formatacao.

Mas Sofia tambem sabia: Blocos "?" sozinhos nao eram suficientes. Eles protegiam dentro da fase, mas a verdadeira seguranca do Mushroom Kingdom vinha de camadas adicionais — Lakitu na nuvem (GitHub Actions), branch protection, code review. Cada ferramenta tinha seu lugar.

Ela olhou para a proxima fase — a do MCP (Model Context Protocol). La, aprenderia como abrir Warp Zones para outros mundos, conectar ferramentas externas e criar automacoes ainda mais poderosas.

**Recursos adicionais:** Visite https://github.com/typicode/husky para documentacao completa do Husky, e https://www.conventionalcommits.org/ para o padrao de Conventional Commits.

---

**<- Anterior: 4D — Prompt Files (Os Warp Pipes)**    |    **-> Proximo: 4F — MCP (Os Warp Zones)**

---

## Habilidade Desbloqueada!

**Sofia agora domina os Blocos "?" e Hooks Inteligentes.**
Ela guardou esse conhecimento e seguiu para a proxima fase do Mushroom Kingdom...

---

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Customizing Copilot](https://docs.github.com/en/copilot/customizing-copilot)
- [Husky - Git Hooks](https://typicode.github.io/husky/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

<div align="center">

⬅️ [Anterior: Fase 6-4: Prompt Files](6-4-prompt-files.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 6-6: MCP Practical](6-6-mcp-practical.md)

</div>
