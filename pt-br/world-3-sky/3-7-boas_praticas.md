---
title: "Fase 3-7 -- Boas Praticas da Guilda: SemVer, README e Regras do Repositorio"
description: "Aprenda as boas praticas essenciais de qualquer projeto profissional: versionamento semantico, documentacao, .gitignore, CONTRIBUTING, CODE_OF_CONDUCT e CODEOWNERS -- como as regras da Guilda do Mushroom Kingdom"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agentic-devops
  - mario
  - world-3
  - boas-praticas
  - semver
  - readme
  - gitignore
  - contributing
  - codeowners
---

# Fase 3-7 -- Boas Praticas da Guilda: SemVer, README e Regras do Repositorio

---

## Change Log

| Versao | Data       | Autor                                  | Descricao          |
|--------|------------|----------------------------------------|--------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial    |

---

## Sumario

- [Prologo: As Regras da Guilda Postadas na Parede](#prologo-as-regras-da-guilda-postadas-na-parede)
- [1. Por Que Projetos Precisam de Regras?](#1-por-que-projetos-precisam-de-regras)
  - [1.1 O Caos Sem Regras](#11-o-caos-sem-regras)
  - [1.2 A Guilda Organizada](#12-a-guilda-organizada)
- [2. SemVer: O Sistema de Numeracao de Versoes](#2-semver-o-sistema-de-numeracao-de-versoes)
  - [2.1 O Que E Versionamento Semantico](#21-o-que-e-versionamento-semantico)
  - [2.2 Os Tres Numeros Magicos: MAJOR.MINOR.PATCH](#22-os-tres-numeros-magicos-majorminorpatch)
  - [2.3 Exemplos Praticos de SemVer](#23-exemplos-praticos-de-semver)
  - [2.4 Pre-release e Build Metadata](#24-pre-release-e-build-metadata)
  - [2.5 Regras de Ouro do SemVer](#25-regras-de-ouro-do-semver)
- [3. README.md: O Manual do Jogo](#3-readmemd-o-manual-do-jogo)
  - [3.1 Por Que Todo Projeto Precisa de um README](#31-por-que-todo-projeto-precisa-de-um-readme)
  - [3.2 Anatomia de um README Perfeito](#32-anatomia-de-um-readme-perfeito)
  - [3.3 Template de README Profissional](#33-template-de-readme-profissional)
  - [3.4 Badges: Os Emblemas do Heroi](#34-badges-os-emblemas-do-heroi)
- [4. .gitignore: A Lista "Nao Empacote"](#4-gitignore-a-lista-nao-empacote)
  - [4.1 O Que E e Por Que Existe](#41-o-que-e-e-por-que-existe)
  - [4.2 Sintaxe do .gitignore](#42-sintaxe-do-gitignore)
  - [4.3 .gitignore por Linguagem](#43-gitignore-por-linguagem)
  - [4.4 Erros Classicos com .gitignore](#44-erros-classicos-com-gitignore)
- [5. CONTRIBUTING.md: Como se Juntar a Guilda](#5-contributingmd-como-se-juntar-a-guilda)
  - [5.1 Por Que Documentar Como Contribuir](#51-por-que-documentar-como-contribuir)
  - [5.2 Estrutura de um Bom CONTRIBUTING](#52-estrutura-de-um-bom-contributing)
  - [5.3 Template Completo](#53-template-completo)
- [6. CODE_OF_CONDUCT.md: O Codigo de Honra da Guilda](#6-code_of_conductmd-o-codigo-de-honra-da-guilda)
  - [6.1 Por Que Ter um Codigo de Conduta](#61-por-que-ter-um-codigo-de-conduta)
  - [6.2 Contributor Covenant](#62-contributor-covenant)
  - [6.3 Aplicando o Codigo de Conduta](#63-aplicando-o-codigo-de-conduta)
- [7. CODEOWNERS: Quem Guarda Cada Sala do Castelo](#7-codeowners-quem-guarda-cada-sala-do-castelo)
  - [7.1 O Que E o CODEOWNERS](#71-o-que-e-o-codeowners)
  - [7.2 Sintaxe e Exemplos](#72-sintaxe-e-exemplos)
  - [7.3 Estrategias de Ownership](#73-estrategias-de-ownership)
- [8. LICENSE: A Licenca de Uso do Jogo](#8-license-a-licenca-de-uso-do-jogo)
  - [8.1 Por Que Licencas Importam](#81-por-que-licencas-importam)
  - [8.2 Licencas Mais Comuns](#82-licencas-mais-comuns)
- [9. Outros Arquivos Essenciais](#9-outros-arquivos-essenciais)
  - [9.1 CHANGELOG.md](#91-changelogmd)
  - [9.2 .editorconfig](#92-editorconfig)
  - [9.3 .nvmrc e .tool-versions](#93-nvmrc-e-tool-versions)
- [10. Tabela Final: O Kit Completo da Guilda](#10-tabela-final-o-kit-completo-da-guilda)
- [Referencias](#referencias)

---

## Prologo: As Regras da Guilda Postadas na Parede

Sofia estava empolgada. Havia criado seu primeiro projeto no GitHub, escrito codigo funcional, e ate configurado o terminal como uma profissional. Mas quando convidou colegas para contribuir no projeto, o caos se instalou.

Alguem subiu a pasta `node_modules` inteira para o repositorio -- 40.000 arquivos. Outro contribuidor mudou a API completamente sem avisar, quebrando o codigo de todo mundo. Ninguem sabia como rodar o projeto localmente. E dois contribuidores comecaram a discutir nos comentarios de um Pull Request.

Toadette -- a Code Reviewer do time -- apareceu com um rolo de pergaminho nas maos.

*"Sofia,"* disse Toadette balancando a cabeca, *"voce construiu um castelo sem regras. E como uma guilda de aventureiros sem regulamento: todo mundo faz o que quer, e o resultado e destruicao. Toda guilda que se preze tem regras postadas na parede. Todo projeto profissional tambem."*

Toadette desenrolou o pergaminho. Nele, estavam escritas as Regras da Guilda do Mushroom Kingdom: como numerar versoes, como documentar o projeto, o que nao empacotar, como novos membros podem se juntar, o codigo de honra, e quem e responsavel por cada area.

*"Bem-vinda a Fase 3-7. Aqui voce aprende que codigo sem regras e um castelo sem fundacao."*

---

## 1. Por Que Projetos Precisam de Regras?

### 1.1 O Caos Sem Regras

Imagine o Mushroom Kingdom sem regras. Mario pula em qualquer direcao. Goombas caminham para onde querem. Os Warp Pipes levam para destinos aleatorios. Os blocos "?" dao itens imprevisíveis. Seria impossivel jogar.

Projetos de software sem regras claras sofrem do mesmo problema:

| Problema | Consequencia | Em Mario |
|----------|-------------|----------|
| Sem versionamento | Ninguem sabe qual versao esta rodando | Qual edicao do jogo voce tem? Ninguem sabe |
| Sem README | Novos devs nao sabem como comecar | Jogar sem manual -- apertar botoes aleatorios |
| Sem .gitignore | Arquivos enormes e sensiveis no repo | Carregar 10.000 moedas falsas na mochila |
| Sem CONTRIBUTING | Cada um contribui de um jeito diferente | Cada jogador inventa suas proprias regras |
| Sem CODE_OF_CONDUCT | Conflitos pessoais sem resolucao | Jogadores brigando no multiplayer sem moderador |
| Sem CODEOWNERS | Ninguem sabe quem revisar | Quem guarda a sala do tesouro? Todo mundo e ninguem |

### 1.2 A Guilda Organizada

Uma guilda organizada tem:

- **Placa na entrada** com o nome e a missao (README)
- **Sistema de ranking** claro (SemVer)
- **Lista de itens proibidos** na mochila (.gitignore)
- **Manual para novos membros** (CONTRIBUTING)
- **Codigo de honra** (CODE_OF_CONDUCT)
- **Mapa de responsabilidades** (CODEOWNERS)
- **Licenca de operacao** (LICENSE)

> **ANALOGIA MARIO:** As boas praticas de um repositorio sao como as **regras da Guilda** postadas na parede do salao principal. Quando um novo aventureiro entra na guilda, ele olha para a parede e sabe exatamente: como a guilda funciona, o que e permitido, o que e proibido, e quem e responsavel pelo que. Sem essas regras, a guilda vira um bando desorganizado.

---

## 2. SemVer: O Sistema de Numeracao de Versoes

### 2.1 O Que E Versionamento Semantico

**Semantic Versioning** (SemVer) e um sistema de numeracao de versoes que usa tres numeros separados por pontos: `MAJOR.MINOR.PATCH`. Cada numero tem um significado especifico, e ao mudar um deles, voce comunica algo ao mundo.

> **ANALOGIA MARIO:** SemVer e o **sistema de numeracao das edicoes do jogo**. `1.0.0` e o lancamento original do Super Mario Bros. `1.1.0` e quando adicionam fases novas. `1.0.1` e quando corrigem um bug que fazia Mario travar. E `2.0.0` e o Super Mario Bros 2 -- tao diferente que pode nao ser compativel com os saves antigos.

### 2.2 Os Tres Numeros Magicos: MAJOR.MINOR.PATCH

```
MAJOR . MINOR . PATCH
  |       |       |
  |       |       +--- Correcao de bug (nao muda nada para quem usa)
  |       +----------- Nova funcionalidade (compativel com versao anterior)
  +------------------- Mudanca incompativel (pode quebrar quem depende de voce)
```

**Detalhando cada numero:**

| Numero | Quando Incrementar | Exemplo Mario | Exemplo Codigo |
|--------|-------------------|---------------|----------------|
| **PATCH** (0.0.X) | Corrigiu um bug, sem mudar funcionalidade | Corrigiu o bug que fazia Mario flutuar | `1.0.0` -> `1.0.1` |
| **MINOR** (0.X.0) | Adicionou funcionalidade nova, compativel | Adicionou fase bonus secreta | `1.0.1` -> `1.1.0` |
| **MAJOR** (X.0.0) | Mudanca que quebra compatibilidade | Mudou controles completamente | `1.1.0` -> `2.0.0` |

**Regra critica:** Quando incrementa MAJOR, MINOR e PATCH voltam a zero. Quando incrementa MINOR, PATCH volta a zero.

```
1.9.3  -> Adicionou feature    -> 1.10.0   (MINOR sobe, PATCH zera)
1.10.0 -> Corrigiu bug         -> 1.10.1   (PATCH sobe)
1.10.1 -> Mudanca incompativel -> 2.0.0    (MAJOR sobe, MINOR e PATCH zeram)
```

### 2.3 Exemplos Praticos de SemVer

**Cenario 1: Biblioteca de autenticacao**

```
1.0.0  - Lancamento: funcao login(user, password)
1.0.1  - Fix: corrigiu bug de timeout
1.1.0  - Adicionou funcao logout()
1.2.0  - Adicionou funcao resetPassword()
2.0.0  - MUDOU: login agora exige login({user, password, mfa})
         Quem usava login(user, password) QUEBRA
```

**Cenario 2: O jogo Super Mario**

```
1.0.0  - Super Mario Bros original (NES)
1.1.0  - Adicionaram fases secretas (Star Road) -- compativel
1.1.1  - Corrigiram bug de wall jump -- compativel
1.2.0  - Adicionaram multiplayer cooperativo -- compativel
2.0.0  - Super Mario Bros 2 -- engine novo, controles diferentes, INCOMPATIVEL
3.0.0  - Super Mario Bros 3 -- mundos, power-ups, mapa completamente novos
```

### 2.4 Pre-release e Build Metadata

Alem dos tres numeros, SemVer permite marcadores adicionais:

```
1.0.0-alpha     --> Versao alpha (pre-lancamento, muito cedo)
1.0.0-beta.1    --> Primeira versao beta
1.0.0-beta.2    --> Segunda versao beta
1.0.0-rc.1      --> Release Candidate 1 ("quase pronto")
1.0.0           --> Versao final!
1.0.0+build.123 --> Metadado de build (nao afeta versionamento)
```

> **ANALOGIA MARIO:** Pre-releases sao como as **versoes de teste** do jogo. Alpha e quando so os desenvolvedores jogam. Beta e quando convidam um grupo pequeno de testadores. Release Candidate e o "quase pronto" -- ultima rodada de testes antes de lancar para o mundo.

### 2.5 Regras de Ouro do SemVer

1. **Versao 0.y.z** = Desenvolvimento inicial. Qualquer coisa pode mudar a qualquer momento
2. **Versao 1.0.0** = API publica definida. A partir daqui, SemVer vale de verdade
3. **NUNCA** mude codigo sem mudar versao
4. **NUNCA** quebre compatibilidade sem incrementar MAJOR
5. **Patch** so para bugfix. Se adicionou feature, e MINOR
6. **Deprecate** antes de remover. Avise que vai mudar antes de mudar

---

## 3. README.md: O Manual do Jogo

### 3.1 Por Que Todo Projeto Precisa de um README

O README.md e o **primeiro arquivo** que qualquer pessoa ve quando entra no seu repositorio. E a vitrine do seu projeto. E o manual que vem na caixa do jogo.

> **ANALOGIA MARIO:** O README e o **manual do jogo** que vem dentro da caixa do cartucho. Sem ele, voce liga o console e nao sabe: quais botoes apertar, qual e o objetivo, quem sao os personagens, como salvar o progresso. Voce ate consegue jogar apertando botoes aleatorios, mas a experiencia e terrivel.

**O que acontece sem README:**

- Novos devs passam horas tentando entender o projeto
- Ninguem sabe como instalar ou rodar localmente
- Contribuicoes sao inconsistentes
- O projeto parece abandonado/amador

**O que acontece com um bom README:**

- Novos devs comecam a contribuir em minutos
- Reducao de perguntas repetitivas (esta no manual!)
- O projeto parece profissional e bem cuidado
- Voce mesmo, daqui a 6 meses, vai agradecer

### 3.2 Anatomia de um README Perfeito

Um README profissional tem estas secoes (em ordem):

| Secao | Obrigatoria? | O que contem | Em Mario |
|-------|-------------|-------------|----------|
| **Titulo + Logo** | Sim | Nome do projeto e badge visual | Capa do jogo |
| **Badges** | Recomendado | Status de CI, versao, licenca | Emblemas na capa |
| **Descricao** | Sim | O que o projeto faz (1-3 frases) | "Resgate a Princesa Peach!" |
| **Demo/Screenshot** | Recomendado | Visual do projeto | Screenshots na caixa |
| **Instalacao** | Sim | Como rodar localmente | "Insira o cartucho e ligue" |
| **Uso** | Sim | Exemplos de como usar | "Pressione A para pular" |
| **Tecnologias** | Recomendado | Stack utilizada | "Compativel com NES" |
| **Contribuicao** | Recomendado | Link para CONTRIBUTING.md | "Aceita multiplayer!" |
| **Licenca** | Sim | Tipo de licenca | Copyright Nintendo |
| **Autores** | Recomendado | Quem criou | Shigeru Miyamoto |

### 3.3 Template de README Profissional

```markdown
# Nome do Projeto

![Badge CI](https://img.shields.io/badge/build-passing-green)
![Badge Version](https://img.shields.io/badge/version-1.0.0-blue)
![Badge License](https://img.shields.io/badge/license-MIT-yellow)

> Descricao curta e poderosa do projeto em 1-2 frases.

## Sobre o Projeto

Descricao mais detalhada. O que o projeto resolve? Qual problema ataca?
Para quem e destinado?

### Screenshot / Demo

![Screenshot do projeto](./docs/screenshot.png)

## Como Comecar

### Pre-requisitos

- Node.js >= 18
- npm >= 9
- PostgreSQL >= 15

### Instalacao

1. Clone o repositorio:
   ```bash
   git clone https://github.com/usuario/projeto.git
   cd projeto
   ```

2. Instale dependencias:
   ```bash
   npm install
   ```

3. Configure variaveis de ambiente:
   ```bash
   cp .env.example .env
   ```

4. Rode o projeto:
   ```bash
   npm run dev
   ```

## Como Usar

Exemplos de uso com codigo ou screenshots.

## Tecnologias

- **Frontend:** React + TypeScript
- **Backend:** Node.js + Express
- **Banco:** PostgreSQL + Prisma
- **CI/CD:** GitHub Actions
- **Deploy:** Azure App Service

## Como Contribuir

Veja [CONTRIBUTING.md](./CONTRIBUTING.md) para detalhes.

## Licenca

Distribuido sob licenca MIT. Veja [LICENSE](./LICENSE).

## Autores

- **Seu Nome** - [@seu_github](https://github.com/seu_github)
```

### 3.4 Badges: Os Emblemas do Heroi

Badges sao aquelas imagens pequenas no topo do README que mostram informacoes rapidas:

```markdown
<!-- Shields.io - servico gratuito de badges -->
![Build](https://img.shields.io/github/actions/workflow/status/user/repo/ci.yml)
![Version](https://img.shields.io/github/package-json/v/user/repo)
![License](https://img.shields.io/github/license/user/repo)
![Coverage](https://img.shields.io/codecov/c/github/user/repo)
![Issues](https://img.shields.io/github/issues/user/repo)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)
```

> **ANALOGIA MARIO:** Badges sao como os **emblemas que Mario coleta** ao completar fases. Cada badge comunica uma conquista: "Build passando" = "Fase completa". "Cobertura 90%" = "Coletou quase todas as moedas". "PRs Welcome" = "Multiplayer ativado!".

---

## 4. .gitignore: A Lista "Nao Empacote"

### 4.1 O Que E e Por Que Existe

O `.gitignore` e um arquivo que diz ao Git: "ignore estes arquivos -- nao os rastreie, nao os commite, finja que nao existem."

> **ANALOGIA MARIO:** O `.gitignore` e a **lista de "nao empacote"** da mochila de viagem. Quando Mario vai de uma fase para outra, ele nao leva TUDO -- deixa para tras o lixo, os itens temporarios e os segredos que nao devem ser compartilhados. A lista diz: "node_modules? Nao empacote, e muito pesado. .env? Nao empacote, tem segredos. build/? Nao empacote, pode ser recriado."

**Por que .gitignore e essencial:**

| O que ignorar | Por que | Exemplo |
|---------------|---------|---------|
| **Dependencias** | Enormes, recriáveis | `node_modules/`, `venv/` |
| **Segredos** | Chaves, senhas, tokens | `.env`, `*.pem`, `credentials.json` |
| **Build artifacts** | Gerados automaticamente | `dist/`, `build/`, `*.o` |
| **Arquivos de sistema** | Especificos da sua maquina | `.DS_Store`, `Thumbs.db` |
| **Arquivos de IDE** | Preferencias pessoais | `.idea/`, `.vscode/settings.json` |
| **Logs** | Temporarios, grandes | `*.log`, `logs/` |
| **Cache** | Temporarios, recriáveis | `.cache/`, `.next/` |

### 4.2 Sintaxe do .gitignore

```bash
# Comentarios comecam com #

# Ignorar um arquivo especifico
.env
secrets.json

# Ignorar uma pasta inteira (com / no final)
node_modules/
dist/
build/

# Wildcard: ignorar todos os arquivos .log
*.log

# Wildcard: ignorar todos os .env com qualquer sufixo
.env.*

# Excecao: NAO ignorar este arquivo especifico (mesmo que a regra diga)
!.env.example

# Ignorar pasta em qualquer nivel de profundidade
**/cache/

# Ignorar arquivo em qualquer nivel de profundidade
**/*.tmp
```

**Regras de precedencia:**

1. Padroes mais especificos sobrescrevem padroes mais gerais
2. `!` nega (desfaz) uma regra anterior
3. Padroes sao avaliados de cima para baixo

### 4.3 .gitignore por Linguagem

**Node.js / JavaScript / TypeScript:**

```bash
node_modules/
dist/
build/
.env
.env.*
!.env.example
*.log
.next/
.nuxt/
coverage/
.cache/
```

**Python:**

```bash
__pycache__/
*.py[cod]
venv/
.env
*.egg-info/
dist/
build/
.pytest_cache/
htmlcov/
```

**C# / .NET:**

```bash
bin/
obj/
*.user
*.suo
.vs/
packages/
*.nupkg
```

**Dica profissional:** Use o site **gitignore.io** (ou `npx gitignore node`) para gerar .gitignore otimizado para sua linguagem.

### 4.4 Erros Classicos com .gitignore

**Erro 1: Adicionar .gitignore depois de commitar arquivos**

```bash
# PROBLEMA: Voce ja commitou node_modules/
# Adicionar ao .gitignore agora NAO remove do historico!

# SOLUCAO: Remover do rastreamento (sem deletar do disco)
git rm -r --cached node_modules/
git commit -m "chore: remover node_modules do rastreamento"
```

**Erro 2: Commitar segredos acidentalmente**

```bash
# Se voce commitou .env com senhas reais:
# 1. MUDE TODAS AS SENHAS IMEDIATAMENTE
# 2. Adicione ao .gitignore
# 3. Use git-filter-branch ou BFG Repo-Cleaner para limpar historico
# 4. Force push (com cuidado!)
```

> **ANALOGIA MARIO:** Commitar segredos e como **deixar a chave do castelo caida no chao de uma fase publica**. Qualquer Goomba que passe vai pegar. E mesmo que voce pegue a chave de volta, o Goomba ja pode ter feito uma copia. Por isso: mude as senhas IMEDIATAMENTE.

---

## 5. CONTRIBUTING.md: Como se Juntar a Guilda

### 5.1 Por Que Documentar Como Contribuir

Sem um CONTRIBUTING.md, cada contribuidor inventa seu proprio processo. Um usa `fix: bug`, outro usa `BUGFIX - corrigido`, outro nem escreve mensagem de commit. O resultado e caos.

> **ANALOGIA MARIO:** CONTRIBUTING.md e o **manual de como se juntar a guilda**. Quando um novo aventureiro quer entrar, ele precisa saber: qual o processo de admissao? Que equipamentos deve usar? Que regras seguir? Sem isso, cada membro novo inventa seu proprio estilo e a guilda vira uma bagunca.

### 5.2 Estrutura de um Bom CONTRIBUTING

Um bom CONTRIBUTING.md responde a estas perguntas:

1. **Como reportar bugs?** (Issues com template)
2. **Como sugerir features?** (Issues com template)
3. **Como preparar o ambiente?** (Setup local)
4. **Qual o fluxo de trabalho?** (Branch -> Code -> PR)
5. **Quais padroes seguir?** (Estilo de codigo, commits)
6. **Como testar?** (Rodar testes antes do PR)
7. **O que acontece depois do PR?** (Review process)

### 5.3 Template Completo

```markdown
# Como Contribuir

Obrigado por querer contribuir! Siga este guia para que sua
contribuicao seja integrada rapidamente.

## Reportar Bugs

1. Verifique se o bug ja nao foi reportado em Issues
2. Abra uma nova Issue usando o template de Bug Report
3. Inclua: passos para reproduzir, resultado esperado vs obtido, screenshots

## Sugerir Features

1. Abra uma Issue usando o template de Feature Request
2. Descreva o problema que a feature resolve
3. Sugira uma solucao (opcional)

## Preparar o Ambiente

1. Fork o repositorio
2. Clone seu fork: `git clone https://github.com/SEU_USUARIO/projeto.git`
3. Crie uma branch: `git checkout -b feat/minha-feature`
4. Instale dependencias: `npm install`
5. Rode os testes: `npm test`

## Padroes

### Commits
Usamos Conventional Commits:
- `feat:` nova funcionalidade
- `fix:` correcao de bug
- `docs:` documentacao
- `style:` formatacao
- `refactor:` refatoracao
- `test:` testes
- `chore:` tarefas gerais

### Codigo
- ESLint + Prettier configurados (roda automaticamente no pre-commit)
- TypeScript strict mode
- Testes para toda funcionalidade nova

## Enviar Pull Request

1. Atualize sua branch com main: `git rebase main`
2. Rode testes: `npm test`
3. Rode lint: `npm run lint`
4. Push: `git push origin feat/minha-feature`
5. Abra um Pull Request com descricao clara
6. Aguarde review -- responda comentarios rapidamente

## Processo de Review

- PRs precisam de pelo menos 1 aprovacao
- CI deve estar verde (testes + lint passando)
- Autor do PR faz o merge apos aprovacao
```

---

## 6. CODE_OF_CONDUCT.md: O Codigo de Honra da Guilda

### 6.1 Por Que Ter um Codigo de Conduta

Projetos open source reúnem pessoas de diferentes culturas, fusos horarios, niveis de experiencia e personalidades. Sem regras claras de convivencia, conflitos pessoais podem destruir uma comunidade.

> **ANALOGIA MARIO:** O CODE_OF_CONDUCT e o **Codigo de Honra da Guilda**. Em qualquer RPG multiplayer, existem regras de conduta: nao roubar itens de outros jogadores, nao usar linguagem abusiva, nao sabotar missoes em grupo. Quem viola as regras e expulso da guilda. O Codigo de Honra garante que todos possam jogar juntos em paz.

### 6.2 Contributor Covenant

O padrao mais usado no mundo e o **Contributor Covenant** (usado por Linux, Rails, Swift, Kubernetes e milhares de outros projetos):

```markdown
# Codigo de Conduta do Contribuidor

## Nosso Compromisso

Nos, como membros, contribuidores e lideres, nos comprometemos
a tornar a participacao em nossa comunidade uma experiencia livre
de assedio para todos, independentemente de idade, tamanho corporal,
deficiencia visivel ou invisivel, etnia, caracteristicas sexuais,
identidade e expressao de genero, nivel de experiencia, educacao,
status socioeconomico, nacionalidade, aparencia pessoal, raca,
religiao ou identidade e orientacao sexual.

## Nossos Padroes

Exemplos de comportamento que contribuem para um ambiente positivo:
- Usar linguagem acolhedora e inclusiva
- Respeitar pontos de vista diferentes
- Aceitar critica construtiva com graca
- Focar no que e melhor para a comunidade
- Mostrar empatia com outros membros

Exemplos de comportamento inaceitavel:
- Uso de linguagem ou imagens sexualizadas
- Trolling, comentarios insultuosos/depreciativos
- Assedio publico ou privado
- Publicar informacoes privadas de outros
- Outra conduta considerada inapropriada

## Aplicacao

Casos de comportamento abusivo devem ser reportados para:
[EMAIL_DO_MANTENEDOR]

Todas as reclamacoes serao analisadas e investigadas.
```

### 6.3 Aplicando o Codigo de Conduta

Ter um CODE_OF_CONDUCT e apenas o primeiro passo. Aplicar e o que importa:

| Violacao | Acao | Em Mario |
|----------|------|----------|
| Primeira ofensa leve | Aviso privado | "Cuidado, Goomba!" |
| Reincidencia | Aviso publico | Ban temporario do multiplayer |
| Assedio | Ban temporario | Expulso da guilda por 30 dias |
| Violacao grave | Ban permanente | Expulso permanentemente |

---

## 7. CODEOWNERS: Quem Guarda Cada Sala do Castelo

### 7.1 O Que E o CODEOWNERS

O arquivo `CODEOWNERS` (localizado em `.github/CODEOWNERS`) define **quem e automaticamente solicitado para revisar** quando alguem abre um Pull Request que modifica determinados arquivos.

> **ANALOGIA MARIO:** CODEOWNERS e o **mapa de quem guarda cada sala do castelo**. A sala do trono e guardada por Peach. A cozinha e guardada por Toad. A torre e guardada por Luigi. Quando alguem entra numa sala (modifica um arquivo), o guardiao daquela sala e automaticamente chamado para verificar.

### 7.2 Sintaxe e Exemplos

O CODEOWNERS fica em `.github/CODEOWNERS`:

```bash
# Cada linha: padrao de arquivo + dono(s)

# Donos default (tudo que nao tem regra especifica)
* @tech-lead

# Frontend: Luigi e o guardiao
/frontend/                @luigi
/frontend/src/components/ @luigi @designer

# Backend: Toad e o guardiao
/backend/                 @toad
/backend/src/routes/      @toad @security-team

# Banco de dados: DBA e guardiao absoluto
/prisma/                  @dba
*.sql                     @dba

# DevOps: Yoshi guarda a infraestrutura
/docker-compose.yml       @yoshi
/Dockerfile               @yoshi
/.github/workflows/       @yoshi

# Documentacao: qualquer um do time de docs
/docs/                    @docs-team
README.md                 @docs-team @tech-lead

# Seguranca: time de seguranca SEMPRE revisa
*.env.example             @security-team
CODEOWNERS                @tech-lead @security-team
```

### 7.3 Estrategias de Ownership

| Estrategia | Quando Usar | Vantagem | Risco |
|------------|-------------|----------|-------|
| **Um dono por area** | Time pequeno | Claro quem revisa | Gargalo se pessoa sair |
| **Time por area** | Time medio | Distribuicao de carga | Pode ter "efeito espectador" |
| **Hierarquia** | Time grande | Default + especialistas | Mais complexo de manter |
| **Cross-review** | Aprendizado | Todos aprendem tudo | Reviews mais lentas |

> **ANALOGIA MARIO:** A melhor estrategia depende do tamanho da sua guilda. Uma guilda de 3 membros nao precisa de hierarquia complexa. Uma guilda de 50 membros precisa de capitaes de equipe para cada area do castelo.

---

## 8. LICENSE: A Licenca de Uso do Jogo

### 8.1 Por Que Licencas Importam

Sem licenca, o padrao legal e: **ninguem pode usar, copiar ou distribuir seu codigo**. Isso e o oposto do que a maioria dos projetos open source quer.

> **ANALOGIA MARIO:** A LICENSE e como a **licenca de distribuicao do jogo**. O jogo original do Mario e da Nintendo -- voce nao pode copiar e vender. Mas se a Nintendo lançasse com licenca MIT, qualquer pessoa poderia modificar e redistribuir o jogo livremente.

### 8.2 Licencas Mais Comuns

| Licenca | Permissividade | Permite Uso Comercial | Exige Credito | Derivados Devem Ser Open Source |
|---------|---------------|----------------------|---------------|-------------------------------|
| **MIT** | Muito alta | Sim | Sim | Nao |
| **Apache 2.0** | Alta | Sim | Sim | Nao |
| **GPL v3** | Media | Sim | Sim | SIM |
| **BSD 3-Clause** | Alta | Sim | Sim | Nao |
| **Creative Commons** | Variavel | Depende | Depende | Depende |
| **Unlicense** | Total | Sim | Nao | Nao |

**Guia rapido de decisao:**

- Quer maxima liberdade para todos? **MIT**
- Quer protecao de patentes tambem? **Apache 2.0**
- Quer que derivados tambem sejam open source? **GPL v3**
- Nao sabe? **MIT** (e a mais popular no GitHub)

---

## 9. Outros Arquivos Essenciais

### 9.1 CHANGELOG.md

O CHANGELOG registra **todas as mudancas notaveis** do projeto, organizado por versao:

```markdown
# Changelog

## [1.2.0] - 2026-03-15
### Adicionado
- Filtro de tarefas por data
- Exportacao para CSV

### Corrigido
- Bug que duplicava tarefas ao salvar rapidamente
- Erro de autenticacao com tokens expirados

## [1.1.0] - 2026-03-01
### Adicionado
- Modo escuro
- Notificacoes push
```

> **ANALOGIA MARIO:** O CHANGELOG e o **historico de patch notes do jogo** -- aquele documento que diz "na versao 1.2, adicionamos a fase Ghost House e corrigimos o bug do pulo infinito."

### 9.2 .editorconfig

O `.editorconfig` padroniza configuracoes basicas de editor entre TODOS os membros do time:

```ini
# .editorconfig
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[*.py]
indent_size = 4

[Makefile]
indent_style = tab
```

### 9.3 .nvmrc e .tool-versions

Estes arquivos fixam a versao das ferramentas necessarias:

```bash
# .nvmrc (fixa versao do Node.js)
20.11.0

# .tool-versions (asdf - multiplas ferramentas)
nodejs 20.11.0
python 3.12.0
```

> **ANALOGIA MARIO:** E como especificar **qual console e necessario para jogar**. "Este jogo requer: Super Nintendo versao 1.1 + Controle Modelo B." Se voce tentar jogar num console diferente, pode nao funcionar.

---

## 10. Tabela Final: O Kit Completo da Guilda

| Arquivo | Obrigatorio? | Analogia Mario | O que faz |
|---------|-------------|----------------|-----------|
| `README.md` | SIM | Manual do jogo | Explica o projeto para o mundo |
| `.gitignore` | SIM | Lista "nao empacote" | Define o que nao vai pro repositorio |
| `LICENSE` | SIM | Licenca de distribuicao | Define como outros podem usar o codigo |
| `CONTRIBUTING.md` | Recomendado | Manual de admissao da guilda | Explica como contribuir |
| `CODE_OF_CONDUCT.md` | Recomendado | Codigo de honra | Regras de convivencia |
| `CODEOWNERS` | Recomendado | Guardioes das salas | Quem revisa cada area do codigo |
| `CHANGELOG.md` | Recomendado | Patch notes | Historico de mudancas |
| `.editorconfig` | Recomendado | Padrao do console | Configuracao unificada de editor |
| `.nvmrc` | Opcional | Versao do console | Fixa versao do Node.js |
| `package.json` | Depende | Inventario completo | Metadados + dependencias |

> **REGRA DE OURO:** Nenhum projeto profissional existe sem pelo menos README, .gitignore e LICENSE. Esses tres sao o **minimo absoluto** -- como Mario sem poder pular: tecnicamente existe, mas nao funciona direito.

---

## Referencias

- [Semantic Versioning 2.0.0 -- Especificacao Oficial](https://semver.org/)
- [GitHub -- Sobre READMEs](https://docs.github.com/pt/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)
- [GitHub -- Ignorando Arquivos](https://docs.github.com/pt/get-started/getting-started-with-git/ignoring-files)
- [gitignore.io -- Gerador de .gitignore](https://www.toptal.com/developers/gitignore)
- [Contributor Covenant -- Codigo de Conduta](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)
- [GitHub -- Sobre CODEOWNERS](https://docs.github.com/pt/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [Choose a License -- Guia de Licencas](https://choosealicense.com/)
- [Keep a Changelog -- Padrao de Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
- [EditorConfig -- Padrao de Configuracao](https://editorconfig.org/)
- [Conventional Commits -- Padrao de Commits](https://www.conventionalcommits.org/pt-br/)

---

*Fim da Fase 3-7. Na proxima fase, Sofia descobre como os canos do Mushroom Kingdom funcionam -- a rede de comunicacao que conecta tudo: a Internet.*
