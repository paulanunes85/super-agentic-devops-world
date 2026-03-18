---
title: "Fase 3-5 -- Licencas do Mushroom Kingdom: Open Source"
description: "Open Source explicado com analogia Mario — compartilhar niveis customizados, licencas como regras de uso, contribuicoes como melhorias comunitarias, e forks como versoes alternativas"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-3", "open-source", "licencas", "github", "comunidade"]
---

# Fase 3-5 -- Licencas do Mushroom Kingdom: Open Source

---

## Change Log

| Versao | Data       | Autor                                      | Descricao                     |
|--------|------------|--------------------------------------------|-------------------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial (Edicao Mario)|

---

## Sumario

- [Prologo: O Mundo dos Niveis Customizados](#prologo-o-mundo-dos-niveis-customizados)
- [1. O Que e Open Source?](#1-o-que-e-open-source)
  - [1.1 Codigo Aberto: A Receita Visivel](#11-codigo-aberto-a-receita-visivel)
  - [1.2 Open Source vs Closed Source vs Free Software](#12-open-source-vs-closed-source-vs-free-software)
  - [1.3 Por Que Empresas Investem em Open Source?](#13-por-que-empresas-investem-em-open-source)
- [2. A Historia que Mudou o Mundo](#2-a-historia-que-mudou-o-mundo)
  - [2.1 Dos Laboratorios ao Linux](#21-dos-laboratorios-ao-linux)
  - [2.2 A Revolucao GitHub](#22-a-revolucao-github)
  - [2.3 Open Source Hoje: Numeros que Impressionam](#23-open-source-hoje-numeros-que-impressionam)
- [3. Licencas: As Regras de Compartilhamento](#3-licencas-as-regras-de-compartilhamento)
  - [3.1 Por Que Licencas Importam?](#31-por-que-licencas-importam)
  - [3.2 MIT: Compartilhe Livremente](#32-mit-compartilhe-livremente)
  - [3.3 Apache 2.0: Compartilhe com Credito](#33-apache-20-compartilhe-com-credito)
  - [3.4 GPL: Compartilhe e Todos Devem Compartilhar](#34-gpl-compartilhe-e-todos-devem-compartilhar)
  - [3.5 BSD: A Mais Simples de Todas](#35-bsd-a-mais-simples-de-todas)
  - [3.6 ISC e Unlicense: O Minimo Possivel](#36-isc-e-unlicense-o-minimo-possivel)
  - [3.7 Tabela Comparativa de Licencas](#37-tabela-comparativa-de-licencas)
  - [3.8 Como Escolher a Licenca Certa](#38-como-escolher-a-licenca-certa)
- [4. Projetos Open Source Essenciais para Devs](#4-projetos-open-source-essenciais-para-devs)
  - [4.1 Linguagens e Runtimes](#41-linguagens-e-runtimes)
  - [4.2 Frameworks e Bibliotecas](#42-frameworks-e-bibliotecas)
  - [4.3 Ferramentas e Infraestrutura](#43-ferramentas-e-infraestrutura)
- [5. Como Contribuir: Ajudando a Construir Niveis Comunitarios](#5-como-contribuir-ajudando-a-construir-niveis-comunitarios)
  - [5.1 Formas de Contribuir (Nao So Codigo!)](#51-formas-de-contribuir-nao-so-codigo)
  - [5.2 Encontrando Seu Primeiro Projeto](#52-encontrando-seu-primeiro-projeto)
  - [5.3 O Fluxo Completo de Contribuicao](#53-o-fluxo-completo-de-contribuicao)
  - [5.4 Anatomia de um Bom Pull Request](#54-anatomia-de-um-bom-pull-request)
  - [5.5 Etiqueta e Boas Praticas](#55-etiqueta-e-boas-praticas)
- [6. Fork: Criando Sua Versao Alternativa](#6-fork-criando-sua-versao-alternativa)
  - [6.1 O Que e um Fork?](#61-o-que-e-um-fork)
  - [6.2 Fork para Contribuir vs Fork para Divergir](#62-fork-para-contribuir-vs-fork-para-divergir)
  - [6.3 Forks Famosos que Mudaram o Mundo](#63-forks-famosos-que-mudaram-o-mundo)
- [7. Comunidades Open Source: Os Reinos do Mushroom Kingdom](#7-comunidades-open-source-os-reinos-do-mushroom-kingdom)
  - [7.1 Como Comunidades Funcionam](#71-como-comunidades-funcionam)
  - [7.2 Papeis na Comunidade](#72-papeis-na-comunidade)
  - [7.3 Codigo de Conduta](#73-codigo-de-conduta)
- [8. Criando Seu Proprio Projeto Open Source](#8-criando-seu-proprio-projeto-open-source)
  - [8.1 Checklist de Lancamento](#81-checklist-de-lancamento)
  - [8.2 README: O Manual da Fase](#82-readme-o-manual-da-fase)
  - [8.3 CONTRIBUTING.md: O Guia para Novos Jogadores](#83-contributingmd-o-guia-para-novos-jogadores)
- [9. Open Source e Carreira](#9-open-source-e-carreira)
  - [9.1 Como Open Source Impulsiona Sua Carreira](#91-como-open-source-impulsiona-sua-carreira)
  - [9.2 GitHub Profile como Portfolio](#92-github-profile-como-portfolio)
  - [9.3 Programas de Incentivo](#93-programas-de-incentivo)
- [10. Seguranca e Responsabilidade em Open Source](#10-seguranca-e-responsabilidade-em-open-source)
  - [10.1 Supply Chain Security](#101-supply-chain-security)
  - [10.2 Dependabot e Atualizacoes](#102-dependabot-e-atualizacoes)
- [Resumo -- O que Aprendemos na Fase 3-5](#resumo----o-que-aprendemos-na-fase-3-5)
- [Referencias](#referencias)

---

## Prologo: O Mundo dos Niveis Customizados

Sofia terminou de jogar uma fase incrivel no Super Mario Maker. O design era genial -- plataformas que se moviam em sincronia com a musica, segredos escondidos em cada canto, uma boss battle surpreendente no final. E o melhor: a fase foi criada por um jogador como ela, do outro lado do mundo.

*"Como alguem pode criar algo tao bom e disponibilizar DE GRACA?"* pensou Sofia.

Toadette -- a Code Reviewer do time -- apareceu ao lado dela.

*"Isso se chama **Open Source**,"* disse Toadette. *"No mundo dos jogos, e como o Mario Maker: pessoas criam niveis e compartilham para todos jogarem e aprenderem. No mundo do software, e a mesma coisa. Alguem cria um programa, disponibiliza o **codigo fonte** (a receita completa), e qualquer pessoa pode usar, estudar, modificar, e melhorar."*

*"Mas e se alguem pegar o codigo e vender como se fosse dele?"*

*"Otima pergunta! Por isso existem **licencas**. Sao as regras de compartilhamento. Algumas dizem 'faca o que quiser'. Outras dizem 'use, mas de credito'. Outras dizem 'use, mas se modificar, compartilhe tambem'. Cada projeto escolhe suas regras."*

Sofia pensou em todos os programas que ela usava: VS Code, Node.js, React, PostgreSQL, Docker, Git. *"Espere... tudo isso e Open Source?"*

*"TUDO. O ecossistema inteiro que voce usa para desenvolver software foi construido por comunidades de pessoas compartilhando seu trabalho. Bem-vinda a Fase 3-5. Aqui voce vai entender como esse mundo funciona -- e como fazer parte dele."*

---

## 1. O Que e Open Source?

### 1.1 Codigo Aberto: A Receita Visivel

**Open Source** (codigo aberto) significa que o **codigo fonte** de um software esta disponivel publicamente. Qualquer pessoa pode:

1. **Ver** o codigo (ler a receita)
2. **Usar** o software (cozinhar o prato)
3. **Modificar** o codigo (adaptar a receita)
4. **Distribuir** suas modificacoes (compartilhar a receita adaptada)

> **ANALOGIA MARIO:** Open Source e como o **Mario Maker** -- um universo onde jogadores criam e compartilham suas proprias fases. O "codigo" de cada fase (a disposicao dos blocos, inimigos, power-ups) e visivel para todos. Voce pode jogar a fase, estudar como foi feita, copiar elementos para suas proprias fases, e ate criar uma versao melhorada.

**Contraste com Closed Source:**

| Aspecto | Open Source | Closed Source |
|---------|-----------|--------------|
| Codigo visivel | Sim, para todos | Nao, so a empresa |
| Quem pode modificar | Qualquer pessoa | So a empresa |
| Custo | Geralmente gratuito | Geralmente pago |
| Transparencia | Total | Zero |
| Exemplos | Linux, VS Code, React | Windows (kernel), Photoshop |

### 1.2 Open Source vs Closed Source vs Free Software

Esses termos sao relacionados mas diferentes:

| Termo | Significado | Analogia Mario |
|-------|-----------|----------------|
| **Open Source** | Codigo fonte visivel e modificavel | Fase do Mario Maker: visivel, jogavel, editavel |
| **Closed Source** | Codigo fonte escondido | Fase oficial da Nintendo: jogue, mas nao veja como foi feita |
| **Free Software** | Enfatiza liberdade (nao preco) | "Free as in freedom, not as in free beer" |
| **Freeware** | Gratuito mas codigo fechado | Jogo gratis que voce nao pode modificar |
| **Source Available** | Codigo visivel mas nao editavel livremente | Fase que voce pode ver, mas nao editar |

**Free Software vs Open Source:** A diferenca e filosofica. Free Software (Richard Stallman, FSF) enfatiza a **liberdade** do usuario. Open Source (OSI) enfatiza os **beneficios praticos** do codigo aberto. Na pratica, as licencas costumam ser as mesmas.

### 1.3 Por Que Empresas Investem em Open Source?

Parece contraintuitivo -- por que uma empresa daria codigo de graca? As razoes sao estrategicas:

1. **Adocao**: Mais pessoas usam quando e gratuito (VS Code vs IDE paga)
2. **Qualidade**: Milhares de olhos encontram mais bugs que uma equipe interna
3. **Inovacao**: A comunidade contribui funcionalidades que a empresa nao pensou
4. **Talento**: Devs querem trabalhar em empresas que contribuem para open source
5. **Ecossistema**: O produto pago depende de ferramentas open source saudaveis

**Exemplos reais:**

| Empresa | Projeto Open Source | Produto Pago Relacionado |
|---------|-------------------|------------------------|
| Microsoft | VS Code, TypeScript | Azure, GitHub Enterprise |
| Meta | React, Jest | Plataforma de ads |
| Google | Kubernetes, Angular, Go | Google Cloud |
| Vercel | Next.js | Vercel Platform |
| HashiCorp | Terraform | Terraform Cloud |

---

## 2. A Historia que Mudou o Mundo

### 2.1 Dos Laboratorios ao Linux

- **1969-1970:** Unix nasce nos Bell Labs. Codigo compartilhado com universidades.
- **1983:** Richard Stallman lanca o projeto GNU. "Software deve ser livre."
- **1991:** Linus Torvalds cria o **Linux** -- o kernel que hoje roda em 90%+ dos servidores do mundo, Android, e ate geladeiras inteligentes.
- **1998:** O termo "Open Source" e oficializado pela OSI.

### 2.2 A Revolucao GitHub

- **2008:** GitHub lanca. Contribuir para Open Source se torna tao facil quanto clicar em "Fork".
- **2018:** Microsoft compra GitHub por US$ 7.5 bilhoes (a mesma Microsoft que em 2001 chamou Linux de "cancer").
- **Hoje:** GitHub tem 100M+ desenvolvedores e 420M+ repositorios.

### 2.3 Open Source Hoje: Numeros que Impressionam

- **97%** do software comercial usa componentes open source
- **90%+** dos servidores do mundo rodam Linux
- **100%** dos top 500 supercomputadores rodam Linux
- **73%+** dos websites usam JavaScript (open source)
- O valor estimado do software open source global ultrapassa **US$ 8 trilhoes**

---

## 3. Licencas: As Regras de Compartilhamento

### 3.1 Por Que Licencas Importam?

Sem licenca, o codigo fonte disponivel publicamente **NAO e automaticamente** open source. Legalmente, sem licenca explicita, **ninguem** tem permissao para usar, copiar, ou modificar.

> **ANALOGIA MARIO:** Imagine que voce cria uma fase no Mario Maker e posta online. Sem regras claras, surgem perguntas: "Posso copiar sua fase?" "Posso modificar e postar como minha?" "Posso usar suas ideias em uma compilacao comercial?" A licenca responde TODAS essas perguntas antecipadamente.

### 3.2 MIT: Compartilhe Livremente

A **licenca MIT** e a mais popular do mundo. Simples e permissiva.

**Regra:** Faca o que quiser, so mantenha o copyright original.

```
MIT License

Copyright (c) 2026 Sofia Developer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

**O que PODE:**
- Usar comercialmente
- Modificar livremente
- Distribuir
- Usar em projetos privados

**O que DEVE:**
- Incluir a licenca e copyright original

**O que NAO precisa:**
- Compartilhar suas modificacoes
- Dar credito alem da licenca

> **ANALOGIA MARIO:** MIT e como postar uma fase com a regra: **"Faca o que quiser com minha fase. Use, modifique, venda. So nao apague meu nome dos creditos."** E a licenca mais generosa.

**Projetos famosos com MIT:** React, jQuery, Vue.js, Express.js, Rails, .NET

### 3.3 Apache 2.0: Compartilhe com Credito

A **licenca Apache 2.0** e similar a MIT, mas com protecoes adicionais de patentes.

**Regra:** Use livremente, mas de credito e documente mudancas.

**Diferenca da MIT:**
- Inclui cláusula de **protecao de patentes**
- Exige **documentacao de mudancas** significativas
- Oferece mais protecao legal para o contribuidor

> **ANALOGIA MARIO:** Apache e como: **"Use minha fase livremente. Se modificar, anote o que mudou. E ninguem pode te processar por usar minhas ideias de design."**

**Projetos famosos com Apache 2.0:** Kubernetes, Android (AOSP), TypeScript, Terraform

### 3.4 GPL: Compartilhe e Todos Devem Compartilhar

A **GPL** (GNU General Public License) e a licenca **copyleft** mais famosa. Ela garante que o software e TODAS as suas modificacoes permanecam open source.

**Regra:** Use e modifique, mas se distribuir, o codigo DEVE permanecer open source com a mesma licenca.

**Versoes:**
- **GPLv2:** Usada pelo Linux kernel
- **GPLv3:** Versao mais moderna com protecoes extras
- **LGPL:** Versao "leve" que permite linking com software proprietario
- **AGPL:** Versao para servidores (se rodar no servidor, deve compartilhar)

> **ANALOGIA MARIO:** GPL e como: **"Use minha fase. Modifique livremente. MAS se voce publicar sua versao modificada, TODA a fase (incluindo suas modificacoes) deve ser aberta para todos. Ninguem pode fechar o que foi aberto."** E o "copyleft" -- o contrario de copyright.

**Projetos famosos com GPL:** Linux (kernel), GCC, WordPress, MySQL

### 3.5 BSD: A Mais Simples de Todas

A **licenca BSD** e extremamente permissiva -- ate mais que MIT em algumas variantes.

**Variantes:**
- **BSD 2-Clause (Simplified):** Use livremente, mantenha copyright
- **BSD 3-Clause:** + nao use o nome do autor para promover seu produto

**Projetos famosos com BSD:** FreeBSD, OpenBSD, Nginx (originalmente)

### 3.6 ISC e Unlicense: O Minimo Possivel

- **ISC:** Equivalente funcional da MIT, mas com texto mais curto
- **Unlicense:** Dedica ao dominio publico -- sem restricao NENHUMA

### 3.7 Tabela Comparativa de Licencas

| Licenca | Pode usar comercial? | Precisa manter copyright? | Precisa abrir modificacoes? | Protecao de patente? | Analogia Mario |
|---------|---------------------|--------------------------|---------------------------|---------------------|----------------|
| **MIT** | Sim | Sim | Nao | Nao | "Faca o que quiser, so mantenha meu nome" |
| **Apache 2.0** | Sim | Sim | Nao (mas documente) | Sim | "Use, documente mudancas, sem processo" |
| **GPL v3** | Sim | Sim | SIM (obrigatorio!) | Sim | "Use, mas tudo deve ficar aberto" |
| **LGPL** | Sim | Sim | So se modificar a lib | Sim | "Use na sua fase, so abra se mudar meus blocos" |
| **BSD 2** | Sim | Sim | Nao | Nao | "Vai la, diverte-se" |
| **Unlicense** | Sim | Nao | Nao | Nao | "Faca o que quiser. Sem regras." |

### 3.8 Como Escolher a Licenca Certa

**Fluxograma rapido:**

```
Voce quer que modificacoes sejam obrigatoriamente open source?
├── SIM → GPL v3
│         └── So para bibliotecas? → LGPL
│         └── Inclui uso em servidor? → AGPL
└── NAO → Voce quer protecao de patentes?
          ├── SIM → Apache 2.0
          └── NAO → MIT (mais popular, mais simples)
```

---

## 4. Projetos Open Source Essenciais para Devs

### 4.1 Linguagens e Runtimes

| Projeto | Licenca | O que e | GitHub Stars |
|---------|---------|---------|-------------|
| Node.js | MIT | Runtime JavaScript | 110k+ |
| TypeScript | Apache 2.0 | Superset tipado de JS | 105k+ |
| Python | PSF | Linguagem de programacao | 65k+ |
| Rust | MIT/Apache 2.0 | Linguagem de sistemas | 100k+ |
| Go | BSD 3 | Linguagem do Google | 125k+ |

### 4.2 Frameworks e Bibliotecas

| Projeto | Licenca | O que e | GitHub Stars |
|---------|---------|---------|-------------|
| React | MIT | Biblioteca UI | 230k+ |
| Next.js | MIT | Framework React | 130k+ |
| Vue.js | MIT | Framework progressivo | 210k+ |
| Express.js | MIT | Framework Node.js | 66k+ |
| Tailwind CSS | MIT | Framework CSS utilitario | 85k+ |

### 4.3 Ferramentas e Infraestrutura

| Projeto | Licenca | O que e | GitHub Stars |
|---------|---------|---------|-------------|
| VS Code | MIT | Editor de codigo | 165k+ |
| Git | GPL v2 | Controle de versao | 53k+ |
| Docker | Apache 2.0 | Containerizacao | 70k+ |
| Kubernetes | Apache 2.0 | Orquestracao | 112k+ |
| PostgreSQL | PostgreSQL (permissiva) | Banco de dados | 16k+ |
| Linux | GPL v2 | Sistema operacional | 185k+ |

---

## 5. Como Contribuir: Ajudando a Construir Niveis Comunitarios

### 5.1 Formas de Contribuir (Nao So Codigo!)

Muitas pessoas acham que contribuir para open source e so escrever codigo. Existem MUITAS outras formas:

| Tipo de Contribuicao | Dificuldade | Exemplo |
|---------------------|------------|---------|
| **Reportar bugs** | Facil | Abrir issue descrevendo o problema |
| **Documentacao** | Facil | Corrigir typo, melhorar explicacao |
| **Traducao** | Facil | Traduzir docs para portugues |
| **Responder issues** | Facil | Ajudar quem tem duvida |
| **Testes** | Media | Adicionar testes que faltam |
| **Bug fix** | Media | Corrigir um bug existente |
| **Feature** | Dificil | Implementar funcionalidade nova |
| **Code review** | Dificil | Revisar PRs de outros |
| **Mentoria** | Dificil | Ajudar novos contribuidores |
| **Design** | Media | Melhorar UI/UX, criar icones |

> **ANALOGIA MARIO:** Contribuir para open source e como ajudar a melhorar fases no Mario Maker. Voce nao precisa construir a fase inteira. Pode: reportar que um bloco esta bugado (bug report), melhorar a descricao da fase (documentacao), traduzir a descricao (traducao), corrigir um bloco mal posicionado (bug fix), ou adicionar uma area secreta (feature).

### 5.2 Encontrando Seu Primeiro Projeto

**Dicas para encontrar projetos acolhedores:**

1. **Procure labels "good first issue" ou "help wanted"** no GitHub
2. **Comece com projetos que voce usa** (React, Next.js, Jest, etc.)
3. **Use o GitHub Explore** (github.com/explore)
4. **Participe de eventos** como Hacktoberfest
5. **Foque em documentacao primeiro** -- e o caminho mais facil

**Onde buscar:**

- [GitHub "good first issue" search](https://github.com/topics/good-first-issue)
- [First Timers Only](https://www.firsttimersonly.com/)
- [Up For Grabs](https://up-for-grabs.net/)
- [Good First Issues](https://goodfirstissues.com/)

### 5.3 O Fluxo Completo de Contribuicao

```
1. ENCONTRAR  → Achar um projeto e uma issue para trabalhar
2. FORK       → Criar uma copia do projeto no seu GitHub
3. CLONE      → Baixar a copia para seu computador
4. BRANCH     → Criar uma branch para sua mudanca
5. CODIFICAR  → Fazer a mudanca
6. TESTAR     → Rodar os testes do projeto
7. COMMIT     → Salvar suas mudancas
8. PUSH       → Enviar para SEU fork no GitHub
9. PR         → Abrir Pull Request para o projeto original
10. REVISAR   → Responder comentarios dos mantenedores
11. MERGE     → Sua contribuicao e aceita!
```

**Comandos correspondentes:**

```bash
# 2. Fork: Clique em "Fork" no GitHub (interface web)

# 3. Clone
$ git clone https://github.com/SEU-USUARIO/projeto-legal.git
$ cd projeto-legal

# 4. Adicionar upstream (projeto original)
$ git remote add upstream https://github.com/ORIGINAL/projeto-legal.git

# 5. Criar branch
$ git checkout -b fix/corrigir-typo-readme

# 6-7. Fazer mudancas, testar, commitar
$ git add README.md
$ git commit -m "docs: fix typo in installation instructions"

# 8. Push para SEU fork
$ git push origin fix/corrigir-typo-readme

# 9. Abrir PR: Va ao GitHub e clique em "Compare & pull request"
```

### 5.4 Anatomia de um Bom Pull Request

```markdown
## Descricao
Corrigido typo na secao de instalacao do README.
"instale" estava escrito como "instal".

## Mudancas
- README.md: Linha 42 - corrigido "instal" para "instale"

## Issue relacionada
Closes #123

## Checklist
- [x] Li o CONTRIBUTING.md
- [x] Testes passando
- [x] Documentacao atualizada (se aplicavel)
```

### 5.5 Etiqueta e Boas Praticas

**DOs (Faca):**
- Leia o CONTRIBUTING.md ANTES de comecar
- Pergunte antes de implementar features grandes
- Seja respeitoso e paciente
- Aceite feedback com humildade
- Mantenha PRs pequenos e focados
- Escreva mensagens de commit claras

**DON'Ts (Nao faca):**
- Nao abra PR sem testar
- Nao ignore o code style do projeto
- Nao fique ofendido com rejeicoes
- Nao faca PRs gigantes que mudam tudo
- Nao mande spam de PRs triviais so para "contribuir"

---

## 6. Fork: Criando Sua Versao Alternativa

### 6.1 O Que e um Fork?

Um **fork** e uma copia completa de um repositorio para sua conta. A partir dessa copia, voce pode fazer qualquer modificacao sem afetar o projeto original.

> **ANALOGIA MARIO:** Fork e como **copiar uma fase do Mario Maker** para sua conta e modificar livremente. A fase original continua intacta. Sua copia e so sua. Se sua versao ficar melhor, voce pode sugerir as mudancas de volta ao criador original (Pull Request).

```bash
# Fork: Feito pelo botao no GitHub

# Clone do SEU fork
$ git clone https://github.com/sofia/react.git

# Agora voce tem uma copia completa do React!
# Pode modificar o que quiser sem afetar o Facebook/Meta
```

### 6.2 Fork para Contribuir vs Fork para Divergir

| Tipo | Intencao | Exemplo |
|------|---------|---------|
| **Fork para contribuir** | Fazer mudancas e propor de volta (PR) | 99% dos forks |
| **Fork para divergir** | Criar versao propria com direcao diferente | Raro, mas acontece |

### 6.3 Forks Famosos que Mudaram o Mundo

| Fork | Original | O que aconteceu |
|------|---------|----------------|
| **MariaDB** | MySQL | Oracle comprou MySQL; comunidade fez fork |
| **LibreOffice** | OpenOffice | Oracle mal-gerenciou; comunidade fez fork |
| **io.js** | Node.js | Comunidade queria governanca aberta; depois uniram de novo |
| **Chromium → Chrome** | Chromium (open source) | Google adicionou features proprietarias |

---

## 7. Comunidades Open Source: Os Reinos do Mushroom Kingdom

### 7.1 Como Comunidades Funcionam

Projetos open source sao mantidos por **comunidades** -- grupos de pessoas que voluntariamente dedicam tempo para melhorar o software.

**Canais comuns:**
- **GitHub Issues:** Bugs e feature requests
- **GitHub Discussions:** Conversas e perguntas
- **Discord/Slack:** Comunicacao em tempo real
- **Forums:** Discussoes longas e detalhadas
- **Conferencias:** Encontros presenciais ou online

### 7.2 Papeis na Comunidade

| Papel | Descricao | Analogia Mario |
|-------|----------|----------------|
| **Creator/Author** | Criou o projeto original | Criador da fase |
| **Maintainer** | Mantém o projeto ativo, aceita PRs | Moderador que aprova fases |
| **Contributor** | Ja teve PR aceito | Jogador que melhorou uma fase |
| **Committer** | Tem permissao de merge | Editor oficial do mundo |
| **User** | Usa mas nao contribui (ok!) | Jogador que so joga |

### 7.3 Codigo de Conduta

A maioria dos projetos tem um **Code of Conduct** -- regras de convivencia. Os principios basicos:

1. Seja respeitoso e inclusivo
2. Aceite criticas construtivas
3. Foque no que e melhor para a comunidade
4. Nao assedie, insulte, ou discrimine
5. Conflitos sao resolvidos pelos mantenedores

---

## 8. Criando Seu Proprio Projeto Open Source

### 8.1 Checklist de Lancamento

```
[ ] Codigo limpo e funcional
[ ] README.md detalhado
[ ] LICENSE (escolha uma licenca!)
[ ] CONTRIBUTING.md
[ ] CODE_OF_CONDUCT.md
[ ] .gitignore adequado
[ ] Testes basicos passando
[ ] CI/CD configurado (GitHub Actions)
[ ] Issues templates (bug report, feature request)
[ ] PR template
```

### 8.2 README: O Manual da Fase

Um bom README tem:

```markdown
# Nome do Projeto

Descricao curta e clara do que o projeto faz.

## Instalacao

Passo a passo para instalar.

## Uso

Exemplos de como usar.

## Contribuindo

Link para CONTRIBUTING.md.

## Licenca

MIT / Apache 2.0 / etc.
```

### 8.3 CONTRIBUTING.md: O Guia para Novos Jogadores

```markdown
# Como Contribuir

## Setup Local
1. Fork o repositorio
2. Clone: `git clone ...`
3. Instale dependencias: `npm install`
4. Rode testes: `npm test`

## Fluxo de Trabalho
1. Crie uma branch: `git checkout -b feat/minha-feature`
2. Faca suas mudancas
3. Rode os testes
4. Abra um Pull Request

## Convencoes
- Commits: Conventional Commits
- Code Style: ESLint + Prettier (configurados)
- Testes: Obrigatorios para features novas
```

---

## 9. Open Source e Carreira

### 9.1 Como Open Source Impulsiona Sua Carreira

1. **Portfolio visivel:** Contribuicoes ficam publicas no seu GitHub
2. **Networking:** Voce conhece devs do mundo inteiro
3. **Aprendizado:** Ler codigo de projetos maduros e a melhor escola
4. **Reputacao:** Contribuidores ativos sao reconhecidos pela comunidade
5. **Entrevistas:** Muitas empresas valorizam (e pedem) contribuicoes open source
6. **Mentoria:** Mantenedores revisam seu codigo e dao feedback de alta qualidade

### 9.2 GitHub Profile como Portfolio

Seu perfil do GitHub e seu **portfolio tecnico**. Recrutadores olham:

- Contribution graph (frequencia de atividade)
- Repositorios publicos (projetos pessoais)
- PRs aceitos em projetos relevantes
- Quality das mensagens de commit
- README profile (pin de repos importantes)

### 9.3 Programas de Incentivo

| Programa | Organizador | O que e |
|----------|-----------|---------|
| **Hacktoberfest** | DigitalOcean | 4 PRs em outubro → camiseta/arvore plantada |
| **Google Summer of Code** | Google | Bolsa para contribuir em projetos open source |
| **GitHub Sponsors** | GitHub | Receber dinheiro por manter projetos |
| **MLH Fellowship** | Major League Hacking | Bolsa para contribuir em open source |
| **Outreachy** | Software Freedom Conservancy | Estagio para grupos sub-representados |

---

## 10. Seguranca e Responsabilidade em Open Source

### 10.1 Supply Chain Security

Quando voce instala um pacote npm, voce confia em **toda a cadeia de dependencias**. Um pacote pode depender de dezenas de outros pacotes, que dependem de outros...

```bash
$ npm install express
# Instala express + 57 dependencias!

# Se UMA dessas 57 dependencias tiver codigo malicioso...
# Seu projeto esta comprometido.
```

**Como se proteger:**

1. **Use `npm audit`** regularmente
2. **Habilite Dependabot** no GitHub (atualizacoes automaticas)
3. **Use lockfiles** (package-lock.json) -- garante versoes exatas
4. **Verifique antes de instalar** -- o pacote e popular? Mantido? Seguro?
5. **Habilite GitHub Advanced Security** para code scanning

### 10.2 Dependabot e Atualizacoes

O **Dependabot** (do GitHub) automaticamente:
- Verifica suas dependencias por vulnerabilidades
- Cria PRs para atualizar pacotes inseguros
- Mantem suas dependencias atualizadas

> **ANALOGIA MARIO:** Dependabot e como o **Toad inspetor** que verifica seu inventario regularmente. *"Esse Mushroom esta vencido! Essa Fire Flower tem um defeito! Esse Shell pode explodir!"* Ele nao so avisa -- ele ja traz o item atualizado para voce trocar.

---

## Resumo -- O que Aprendemos na Fase 3-5

| Conceito | Analogia Mario | Ponto-Chave |
|---------|----------------|-------------|
| Open Source | Niveis customizados do Mario Maker | Codigo visivel, usavel, modificavel |
| MIT | "Faca o que quiser, mantenha credito" | Mais popular, mais simples |
| Apache 2.0 | "Use, documente, sem processos" | Protecao de patentes |
| GPL | "Use, mas tudo fica aberto" | Copyleft -- compartilhamento obrigatorio |
| Fork | Copiar fase para modificar | Copia independente do repositorio |
| Pull Request | Sugerir melhoria de volta | Proposta de mudanca ao original |
| Contribuicao | Melhorar fases comunitarias | Nao so codigo -- docs, bugs, traducao |
| Comunidade | Reinos de jogadores | Mantenedores, contribuidores, usuarios |
| Dependabot | Toad inspetor de inventario | Seguranca de dependencias automatica |

**A grande licao:** Open Source nao e caridade -- e o modelo mais eficiente de desenvolvimento de software ja inventado. O ecossistema inteiro que voce usa (VS Code, Node.js, React, PostgreSQL, Docker, Git, Linux) e open source. Contribuir nao e so "dar de graca" -- e aprender com os melhores, construir reputacao, e fazer parte de algo maior que voce. Todo o Mushroom Kingdom foi construido por jogadores como voce.

---

## Referencias

- [Open Source Initiative (OSI)](https://opensource.org/)
- [Choose a License -- GitHub](https://choosealicense.com/)
- [Open Source Guide -- GitHub](https://opensource.guide/pt/)
- [First Timers Only](https://www.firsttimersonly.com/)
- [Good First Issues](https://goodfirstissues.com/)
- [Hacktoberfest](https://hacktoberfest.com/)
- [GitHub Sponsors](https://github.com/sponsors)
- [GNU Licenses Explained](https://www.gnu.org/licenses/licenses.html)
- [npm Security Best Practices](https://docs.npmjs.com/packages-and-modules/securing-your-code)
- [GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security)

---

*Fase 3-5 completa! Voce entendeu o mundo do Open Source -- o ecossistema que construiu praticamente tudo que voce usa. Na proxima e ultima fase deste World, vamos entrar no Castelo dos Dados: Bancos de Dados.*

---

<div align="center">

⬅️ [Anterior: Fase 3-4: Testes](3-4-testes.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 3-6: Banco de Dados](3-6-banco_dados.md)

</div>
