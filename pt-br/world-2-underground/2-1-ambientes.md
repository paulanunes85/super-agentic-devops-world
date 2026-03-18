---
title: "Fase 2-1 -- Mundos Paralelos: Ambientes (Dev, Staging, Producao)"
description: "Entenda por que existem copias diferentes do seu jogo e como Dev, Staging e Producao funcionam como mundos paralelos no Mushroom Kingdom"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - ambientes
  - dev
  - staging
  - producao
  - infraestrutura
  - world-2
  - mario
---

# Fase 2-1 -- Mundos Paralelos: Ambientes (Dev, Staging, Producao)

---

## Change Log

| Versao | Data       | Autor                                  | Descricao          |
|--------|------------|----------------------------------------|--------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial    |

---

## Sumario

- [Prologo: As Tres Copias do Mushroom Kingdom](#prologo-as-tres-copias-do-mushroom-kingdom)
- [1. Por Que Precisamos de Ambientes Diferentes?](#1-por-que-precisamos-de-ambientes-diferentes)
  - [1.1 O Problema de Testar no Mundo Real](#11-o-problema-de-testar-no-mundo-real)
  - [1.2 A Solucao: Mundos Paralelos](#12-a-solucao-mundos-paralelos)
- [2. Os Tres Mundos: Dev, Staging e Producao](#2-os-tres-mundos-dev-staging-e-producao)
  - [2.1 World 1 -- Development (Dev): O Campo de Treino](#21-world-1----development-dev-o-campo-de-treino)
  - [2.2 World 2 -- Staging: O Ensaio Geral](#22-world-2----staging-o-ensaio-geral)
  - [2.3 World 3 -- Production (Producao): O Castelo de Verdade](#23-world-3----production-producao-o-castelo-de-verdade)
- [3. Tabela Comparativa: Os Tres Mundos](#3-tabela-comparativa-os-tres-mundos)
- [4. Como o Codigo Viaja Entre Mundos](#4-como-o-codigo-viaja-entre-mundos)
  - [4.1 O Pipeline de Promocao](#41-o-pipeline-de-promocao)
  - [4.2 As Regras de Passagem](#42-as-regras-de-passagem)
  - [4.3 Diagrama: A Jornada do Codigo](#43-diagrama-a-jornada-do-codigo)
- [5. Ambientes na Pratica: Azure e GitHub](#5-ambientes-na-pratica-azure-e-github)
  - [5.1 Branches como Portais](#51-branches-como-portais)
  - [5.2 Azure App Service Slots](#52-azure-app-service-slots)
  - [5.3 Variaveis de Ambiente por Mundo](#53-variaveis-de-ambiente-por-mundo)
- [6. Ambientes Locais vs Ambientes na Nuvem](#6-ambientes-locais-vs-ambientes-na-nuvem)
  - [6.1 Seu Computador: O Mundo Tutorial](#61-seu-computador-o-mundo-tutorial)
  - [6.2 Docker: Embalando o Mundo na Caixa](#62-docker-embalando-o-mundo-na-caixa)
- [7. Erros Classicos e Como Evitar](#7-erros-classicos-e-como-evitar)
  - [7.1 Os 5 Pecados Mortais dos Ambientes](#71-os-5-pecados-mortais-dos-ambientes)
  - [7.2 Historias de Terror: Deploys Direto em Producao](#72-historias-de-terror-deploys-direto-em-producao)
- [8. Feature Flags: Segredos Escondidos nos Mundos](#8-feature-flags-segredos-escondidos-nos-mundos)
- [9. Ambientes Efemeros: Mundos Temporarios](#9-ambientes-efemeros-mundos-temporarios)
- [10. Tabela Final de Resumo](#10-tabela-final-de-resumo)
- [Referencias](#referencias)

---

## Prologo: As Tres Copias do Mushroom Kingdom

Sofia estava animada. Ela havia criado sua primeira aplicacao -- um TodoApp simples mas funcional -- e queria mostrar para o mundo inteiro. Sem pensar duas vezes, ela fez deploy direto para os usuarios reais.

Resultado? Desastre total.

A aplicacao tinha um bug que apagava todas as tarefas quando o usuario clicava em "Salvar". Centenas de pessoas perderam seus dados. Sofia ficou desesperada.

Yoshi -- o Engenheiro DevOps do time -- apareceu voando e pousou ao lado dela.

*"Sofia,"* disse Yoshi com calma, *"voce cometeu o erro mais classico de todos: testou no mundo real. Imagine se no Mario voce pudesse praticar as fases antes de jogar de verdade. Sem perder vidas. Sem Game Over. Sem consequencias. Pois e -- nos temos isso no desenvolvimento de software. Chamamos de **ambientes**."*

Yoshi abriu um mapa com tres versoes do Mushroom Kingdom, lado a lado. Pareciam identicas, mas cada uma tinha um proposito diferente.

*"Bem-vinda a Fase 2-1. Aqui voce vai aprender que nunca -- NUNCA -- se testa no mundo real."*

---

## 1. Por Que Precisamos de Ambientes Diferentes?

### 1.1 O Problema de Testar no Mundo Real

Imagine que a Nintendo quisesse testar uma nova mecanica no Super Mario Bros. Em vez de testar internamente, eles mandaram a atualizacao direto para todos os jogadores do mundo. A nova mecanica tinha um bug: Mario caiu infinitamente no primeiro buraco e nunca mais saiu. Milhoes de jogadores presos. Ninguem consegue jogar. Caos total.

Isso e **exatamente** o que acontece quando voce faz alteracoes diretamente em producao.

**Problemas de alterar o mundo real diretamente:**

- Usuarios reais sao afetados imediatamente
- Nao da para "desfazer" facilmente -- o dano ja foi feito
- Bugs podem causar perda de dados, dinheiro, ou confianca
- Voce nao tem tempo para investigar com calma -- esta todo mundo gritando
- O estresse e enorme e leva a mais erros

### 1.2 A Solucao: Mundos Paralelos

A solucao que a industria de software adotou ha decadas e simples e genial: **criar copias do mundo**.

Em vez de ter apenas um Mushroom Kingdom (o real, onde os jogadores estao), voce cria **tres versoes**:

1. **Uma copia para voce brincar livremente** (Dev)
2. **Uma copia quase identica ao real para testar a serio** (Staging)
3. **O mundo real, onde jogadores de verdade estao** (Producao)

> **ANALOGIA MARIO:** Pense nos mundos paralelos como aquelas fases secretas do Super Mario World. World 1 (Dev) e como o **Star Road** -- um lugar seguro onde voce pode testar coisas malucas sem consequencias. World 2 (Staging) e como o **Special World** -- parece o mundo real mas com menos gente, perfeito para ensaio geral. World 3 (Producao) e o **Mushroom Kingdom real** -- com jogadores de verdade, Toads contando com voce, e a Princesa esperando no castelo. Se voce errar aqui, todo mundo sente.

---

## 2. Os Tres Mundos: Dev, Staging e Producao

### 2.1 World 1 -- Development (Dev): O Campo de Treino

O ambiente de **Development** (Dev) e o seu playground pessoal. Aqui voce pode:

- Escrever codigo novo sem medo
- Quebrar coisas e consertar com calma
- Testar ideias malucas
- Usar dados falsos (nao dados reais de usuarios)
- Fazer deploy quantas vezes quiser

**Caracteristicas do ambiente Dev:**

```
Ambiente: Development
URL tipica: dev.meuapp.com ou localhost:3000
Banco de dados: Copia com dados falsos/simulados
Usuarios: Apenas desenvolvedores do time
Consequencia de bug: Nenhuma -- so voce e afetado
Frequencia de deploy: Varias vezes por dia
```

> **ANALOGIA MARIO:** Dev e como o **World 1-1 no modo treino**. Voce tem vidas infinitas, pode morrer quantas vezes quiser, e ninguem esta te avaliando. E o lugar para aprender a pular, experimentar power-ups novos, e entender as mecanicas sem pressao.

**O que roda no ambiente Dev?**

- Seu codigo local (no seu computador)
- Um banco de dados local (geralmente com dados inventados)
- Servicos simulados (mocks) no lugar de servicos reais
- Ferramentas de debug ativadas
- Logs detalhados para ajudar a investigar problemas

**Exemplo pratico:**

```bash
# Rodando a aplicacao em Dev (seu computador)
npm run dev

# A aplicacao roda em localhost:3000
# Banco de dados local com dados de teste
# Se voce quebrar algo, so voce ve
```

### 2.2 World 2 -- Staging: O Ensaio Geral

O ambiente de **Staging** e uma copia (quase) identica do mundo real, mas sem usuarios de verdade. E como um ensaio geral de uma peca de teatro: cenario real, figurino real, iluminacao real -- mas a plateia esta vazia.

**Caracteristicas do ambiente Staging:**

```
Ambiente: Staging
URL tipica: staging.meuapp.com
Banco de dados: Copia da estrutura de producao, dados anonimizados
Usuarios: Time de QA, gerentes de produto, stakeholders
Consequencia de bug: Encontrado antes de chegar ao usuario real
Frequencia de deploy: Varias vezes por semana
```

> **ANALOGIA MARIO:** Staging e como o **dress rehearsal antes da Boss Battle**. O castelo e identico ao castelo final -- mesmos inimigos, mesmas armadilhas, mesma lava. Mas se voce morrer, nao perde o jogo. E a chance de praticar a luta contra o Bowser nas condicoes reais antes de enfrentar ele de verdade.

**Por que Staging e importante?**

1. **Testa integracao**: Em Dev, cada desenvolvedor testa seu pedaco. Em Staging, tudo funciona junto.
2. **Testa com dados realistas**: Dados que se parecem com os dados reais (mas anonimizados).
3. **Testa performance**: Em Dev voce roda tudo no seu computador. Em Staging, roda na nuvem como em producao.
4. **Validacao de negocio**: O gerente de produto pode ver e aprovar antes de lancar.
5. **Testes de aceitacao**: A equipe de QA (Princesa Peach!) faz os testes finais.

**Exemplo pratico:**

```bash
# Deploy automatico para Staging via GitHub Actions
# Quando o PR e aprovado e mergeado na branch 'staging':
git checkout staging
git merge feature/nova-funcionalidade
git push origin staging
# GitHub Actions automaticamente faz deploy para staging.meuapp.com
```

### 2.3 World 3 -- Production (Producao): O Castelo de Verdade

O ambiente de **Producao** e o **mundo real**. E onde seus usuarios estao. Onde dinheiro real muda de mao. Onde dados reais sao armazenados. Onde reputacao e construida ou destruida.

**Caracteristicas do ambiente Producao:**

```
Ambiente: Production
URL tipica: meuapp.com (sem prefixo)
Banco de dados: Dados reais de usuarios
Usuarios: Todos os usuarios finais -- gente de verdade
Consequencia de bug: Perda de receita, dados, confianca, reputacao
Frequencia de deploy: Controlada (semanal, quinzenal, ou continuous)
```

> **ANALOGIA MARIO:** Producao e o **Mushroom Kingdom real com jogadores reais**. A Princesa esta no castelo, os Toads estao nas vilas, e os jogadores estao correndo pelas fases. Se voce introduzir um bug aqui, os Goombas comecam a voar, os canos levam para o lugar errado, e os jogadores ficam furiosos. TUDO que voce faz aqui tem consequencias reais.

**Regras sagradas de Producao:**

1. **NUNCA faca mudancas diretamente em producao** -- sempre passe por Dev e Staging primeiro
2. **NUNCA use dados de producao em Dev ou Staging** sem anonimizar
3. **SEMPRE tenha um plano de rollback** -- como reverter se algo der errado
4. **SEMPRE monitore apos o deploy** -- observe metricas, logs, alertas
5. **SEMPRE tenha backups** -- se o castelo pegar fogo, voce pode reconstruir

---


---

## 3. Tabela Comparativa: Os Tres Mundos

| Aspecto | Dev (Treino) | Staging (Ensaio) | Producao (Real) |
|---------|-------------|-------------------|-----------------|
| **Analogia Mario** | Star Road -- pratica livre | Special World -- ensaio geral | Mushroom Kingdom real |
| **Quem usa** | Desenvolvedores | QA, PMs, stakeholders | Usuarios finais |
| **Dados** | Falsos/simulados | Anonimizados/realistas | Reais |
| **Consequencia de bug** | Nenhuma | Encontrado a tempo | Desastre |
| **URL** | localhost ou dev.app.com | staging.app.com | app.com |
| **Deploy** | Varias vezes/dia | Varias vezes/semana | Controlado |
| **Debug** | Ativado | Parcialmente ativado | Desativado |
| **Logs** | Super detalhados | Detalhados | Essenciais |
| **Performance** | Nao importa muito | Testada | Critica |
| **Custo** | Baixo (local) | Medio (nuvem menor) | Alto (nuvem completa) |
| **Acesso** | Aberto para devs | Restrito ao time | Super restrito |

---

## 4. Como o Codigo Viaja Entre Mundos

### 4.1 O Pipeline de Promocao

O codigo nasce em Dev e vai "subindo" ate chegar em Producao. Esse processo se chama **promocao** (ou **promotion**). O codigo nunca pula etapas -- e como no Mario, voce nao pode ir direto do World 1-1 para o castelo final.

```
Dev  ──────>  Staging  ──────>  Producao
 |               |                  |
 | Testes        | Testes de        | Monitoramento
 | Unitarios     | Integracao       | Contínuo
 | Code Review   | Testes de QA     | Alertas
 |               | Performance      | Rollback pronto
```

### 4.2 As Regras de Passagem

Para o codigo "passar de fase" (ser promovido), ele precisa cumprir criterios:

**De Dev para Staging:**
- Todos os testes unitarios passam
- Code Review aprovado por pelo menos 1 pessoa
- Nenhum erro de lint ou tipagem
- Branch mergeada na branch de staging

**De Staging para Producao:**
- Todos os testes de integracao passam
- Testes de aceitacao (QA) aprovados
- Performance testada e dentro dos limites
- Aprovacao do gerente de produto
- Branch mergeada na branch main/production

> **ANALOGIA MARIO:** Pense nas **checkpoint flags** do Mario. Para passar de um World para o proximo, voce precisa derrotar o boss do World atual. Da mesma forma, para seu codigo ir de Dev para Staging, ele precisa "derrotar" os testes unitarios. Para ir de Staging para Producao, precisa derrotar os testes de integracao e a aprovacao do QA.

### 4.3 Diagrama: A Jornada do Codigo

```
+-------------------+     +-------------------+     +-------------------+
|   DEV (World 1)   |     | STAGING (World 2) |     | PRODUCAO (World 3)|
|                   |     |                   |     |                   |
|  Desenvolvedor    |     |  Testes de QA     |     |  Usuarios reais   |
|  escreve codigo   |     |  Testes de carga  |     |  Dados reais      |
|  Testes locais    |     |  Validacao de PM  |     |  Monitoramento    |
|  Code Review      |     |  Performance      |     |  Alertas          |
|                   |     |                   |     |                   |
+--------+----------+     +--------+----------+     +-------------------+
         |                         |                         ^
         | PR aprovado             | Testes OK               |
         | Testes passam           | QA aprova               |
         +------------------------>+------------------------>+
                                                    Deploy controlado
```

---

## 5. Ambientes na Pratica: Azure e GitHub

### 5.1 Branches como Portais

No Git, cada ambiente geralmente corresponde a uma **branch** (galho) especifica:

```
main (ou production)  ──>  Producao
staging               ──>  Staging
develop               ──>  Dev (integracao)
feature/*             ──>  Dev (local)
```

> **ANALOGIA MARIO:** Branches sao como **Warp Pipes** (canos verdes) que levam a mundos diferentes. O cano `main` leva ao Mushroom Kingdom real (Producao). O cano `staging` leva ao Special World (Staging). O cano `develop` leva ao Star Road (Dev). Cada cano tem um destino diferente.

**Exemplo com GitHub:**

```bash
# Criar uma feature nova (voce esta em Dev)
git checkout -b feature/adicionar-filtro

# Desenvolver, testar localmente, commitar
git add .
git commit -m "feat: adicionar filtro de tarefas por data"

# Enviar para GitHub e criar Pull Request
git push origin feature/adicionar-filtro
# PR: feature/adicionar-filtro -> develop

# Apos aprovacao, merge em develop -> staging
# Apos testes em staging, merge staging -> main
# Deploy em producao!
```

### 5.2 Azure App Service Slots

O Azure tem um recurso chamado **Deployment Slots** que e perfeito para gerenciar ambientes:

```
Azure App Service: meuapp
├── Slot: production (meuapp.azurewebsites.net)
├── Slot: staging (meuapp-staging.azurewebsites.net)
└── Slot: dev (meuapp-dev.azurewebsites.net)
```

A magia dos slots e o **swap**: quando tudo esta OK em staging, voce pode "trocar" staging e producao instantaneamente. Se algo der errado, troca de volta.

> **ANALOGIA MARIO:** Deployment Slots sao como **portas magicas** no castelo. Voce prepara tudo na sala de staging, e quando esta pronto, a porta magica TROCA as salas -- o que era staging vira producao, e o que era producao vira staging (backup). Se algo der errado, troca de novo.

```bash
# Swap de staging para producao no Azure CLI
az webapp deployment slot swap \
  --resource-group meu-grupo \
  --name meuapp \
  --slot staging \
  --target-slot production
```

### 5.3 Variaveis de Ambiente por Mundo

Cada ambiente tem suas proprias **variaveis de ambiente** -- configuracoes que mudam de um mundo para outro:

```bash
# Ambiente Dev
DATABASE_URL=postgresql://localhost:5432/todoapp_dev
API_KEY=dev-fake-key-12345
LOG_LEVEL=debug
FEATURE_FLAG_NOVO_FILTRO=true

# Ambiente Staging
DATABASE_URL=postgresql://staging-db.azure.com:5432/todoapp_staging
API_KEY=staging-key-abc-456
LOG_LEVEL=info
FEATURE_FLAG_NOVO_FILTRO=true

# Ambiente Producao
DATABASE_URL=postgresql://prod-db.azure.com:5432/todoapp
API_KEY=prod-real-key-xyz-789
LOG_LEVEL=warn
FEATURE_FLAG_NOVO_FILTRO=false  # Ainda nao ativado para usuarios reais!
```

> **ANALOGIA MARIO:** Variaveis de ambiente sao como as **regras que mudam entre mundos**. No World 1 (Dev), Mario tem vidas infinitas e os inimigos sao fracos. No World 2 (Staging), os inimigos sao mais fortes mas ainda ha checkpoints extras. No World 3 (Producao), e o jogo real -- sem vidas extras, sem facilidades.

---

## 6. Ambientes Locais vs Ambientes na Nuvem

### 6.1 Seu Computador: O Mundo Tutorial

Antes mesmo de chegar ao ambiente Dev na nuvem, existe um nivel ainda mais basico: seu **ambiente local**.

```
Nivel 0: Seu computador (localhost)  ──  O tutorial do jogo
Nivel 1: Dev na nuvem               ──  World 1
Nivel 2: Staging na nuvem           ──  World 2
Nivel 3: Producao na nuvem          ──  World 3
```

No seu computador voce:
- Edita codigo no VS Code
- Roda a aplicacao com `npm run dev`
- Acessa em `http://localhost:3000`
- Usa um banco de dados local (ou container Docker)
- Tem controle total sobre tudo

### 6.2 Docker: Embalando o Mundo na Caixa

Docker permite que voce rode uma "miniatura" do ambiente de producao no seu computador. E como ter um Mushroom Kingdom portatil dentro de uma caixa.

```yaml
# docker-compose.yml -- Seu Mushroom Kingdom portatil
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:senha@db:5432/todoapp
      - NODE_ENV=development

  db:
    image: postgres:16
    environment:
      - POSTGRES_DB=todoapp
      - POSTGRES_PASSWORD=senha
    ports:
      - "5432:5432"
```

```bash
# Subir o mundo inteiro com um comando
docker-compose up

# Agora voce tem app + banco de dados rodando localmente
# Identico (ou muito proximo) ao que roda em producao
```

---

## 7. Erros Classicos e Como Evitar

### 7.1 Os 5 Pecados Mortais dos Ambientes

| Pecado | O que Acontece | Analogia Mario | Como Evitar |
|--------|---------------|----------------|-------------|
| **Deploy direto em Producao** | Usuarios afetados por bugs | Jogar a Boss Battle sem treinar | Sempre passe por Dev e Staging |
| **Usar dados reais em Dev** | Vazamento de dados sensiveis | Usar moedas reais no treino | Anonimize dados ou use dados falsos |
| **Configuracoes erradas** | App em Producao apontando para DB de Dev | Cano verde levando ao mundo errado | Use variaveis de ambiente separadas |
| **Pular Staging** | Bugs descobertos so em Producao | Enfrentar Bowser sem ensaiar | Nunca pule o ensaio geral |
| **Nao ter rollback** | Sem como voltar atras | Sem checkpoint antes do boss | Sempre tenha swap/rollback pronto |

### 7.2 Historias de Terror: Deploys Direto em Producao

**Historia 1: O banco que apagou dados**
Um desenvolvedor rodou um script de limpeza de banco de dados. Ele ACHOU que estava em Dev, mas estava em Producao. Milhares de registros financeiros foram apagados. Levou 48 horas para restaurar o backup.

**Historia 2: A feature inacabada**
Uma desenvolvedora commitou codigo pela metade direto na branch main. O deploy automatico mandou para producao. Metade dos usuarios viu um botao que nao fazia nada. A outra metade viu erros na tela.

**Historia 3: A senha no codigo**
Um dev colocou a senha do banco de producao diretamente no codigo (hardcoded) e mandou para o repositorio publico. Robos automaticos encontraram a senha em minutos e invadiram o banco.

> **LICAO MARIO:** Todas essas historias poderiam ser evitadas com ambientes separados, variaveis de ambiente, e um pipeline de promocao adequado. E como morrer no Mario por nao usar o checkpoint -- doloroso e totalmente evitavel.

---

## 8. Feature Flags: Segredos Escondidos nos Mundos

**Feature Flags** sao interruptores que permitem ativar ou desativar funcionalidades sem fazer um novo deploy. E como blocos secretos no Mario que so aparecem quando voce sabe onde bater.

```javascript
// Verificando uma Feature Flag
if (featureFlags.isEnabled('novo-filtro-por-data')) {
  // Mostra o novo filtro (feature nova)
  renderNovoFiltro();
} else {
  // Mostra o filtro antigo (feature existente)
  renderFiltroAntigo();
}
```

**Como Feature Flags funcionam com ambientes:**

```
Dev:       novo-filtro-por-data = TRUE   (devs testando)
Staging:   novo-filtro-por-data = TRUE   (QA testando)
Producao:  novo-filtro-por-data = FALSE  (ainda nao para usuarios)

# Quando tudo estiver OK:
Producao:  novo-filtro-por-data = TRUE   (ativado para todos!)
```

> **ANALOGIA MARIO:** Feature Flags sao como os **blocos invisiveis** do Mario. O bloco esta la, mas so aparece quando voce pula no lugar certo. Da mesma forma, a feature esta no codigo, mas so aparece para quem tem a flag ativada. Voce pode ativar para 1% dos usuarios, depois 10%, depois 50%, depois 100% -- como revelar os blocos secretos gradualmente.

---

## 9. Ambientes Efemeros: Mundos Temporarios

Uma pratica moderna e criar ambientes **efemeros** (temporarios) para cada Pull Request. Quando voce abre um PR, um ambiente automatico e criado. Quando o PR e fechado, o ambiente e destruido.

```
PR #123: feature/novo-filtro
  └── Ambiente automatico: pr-123.meuapp.com
      (criado automaticamente, destruido ao fechar o PR)

PR #124: feature/dark-mode
  └── Ambiente automatico: pr-124.meuapp.com
      (outro ambiente isolado, independente)
```

> **ANALOGIA MARIO:** Ambientes efemeros sao como as **fases bonus** que aparecem e desaparecem. Voce entra, testa, coleta o que precisa, e a fase some. Cada PR tem sua propria fase bonus exclusiva -- sem interferir nas fases dos outros jogadores.

**Ferramentas que criam ambientes efemeros:**
- **Vercel** -- Preview Deployments automaticos para cada PR
- **Netlify** -- Deploy Preview para frontend
- **Azure Static Web Apps** -- Staging environments por PR
- **GitHub Codespaces** -- Ambiente de desenvolvimento completo na nuvem

---

## 10. Tabela Final de Resumo

| Conceito | Explicacao Tecnica | Analogia Mario |
|----------|-------------------|----------------|
| **Ambiente Dev** | Onde desenvolvedores escrevem e testam codigo | World 1 -- campo de treino com vidas infinitas |
| **Ambiente Staging** | Copia de producao para ensaio final | World 2 -- dress rehearsal antes da Boss Battle |
| **Ambiente Producao** | O mundo real com usuarios reais | World 3 -- o Mushroom Kingdom real |
| **Pipeline de Promocao** | Codigo sobe de Dev para Staging para Producao | Checkpoint flags entre mundos |
| **Deployment Slots** | Slots no Azure para cada ambiente | Portas magicas que trocam salas |
| **Variaveis de Ambiente** | Configuracoes especificas por ambiente | Regras que mudam entre mundos |
| **Feature Flags** | Interruptores para funcionalidades | Blocos invisiveis que aparecem quando ativados |
| **Ambientes Efemeros** | Ambientes temporarios por PR | Fases bonus que aparecem e desaparecem |
| **Rollback** | Reverter para versao anterior | Voltar ao checkpoint apos morrer |
| **Swap** | Trocar staging e producao instantaneamente | Porta magica que troca duas salas |

---

## Referencias

1. Microsoft Azure -- Deployment Slots: https://learn.microsoft.com/azure/app-service/deploy-staging-slots
2. GitHub Docs -- Environments: https://docs.github.com/actions/deployment/targeting-different-environments
3. Martin Fowler -- Feature Toggles: https://martinfowler.com/articles/feature-toggles.html
4. The Twelve-Factor App -- Config: https://12factor.net/config
5. Vercel -- Preview Deployments: https://vercel.com/docs/deployments/preview-deployments

---

*"No Mario, voce NUNCA enfrenta o Bowser sem treinar primeiro. No software, voce NUNCA lanca para usuarios sem testar em Dev e Staging. A regra e a mesma: pratique, ensaie, e so entao va para o mundo real."*

---

<div align="center">

⬅️ [Anterior: Fase 1-BOSS: Exercicios](../world-1-green-plains/1-boss-exercises.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 2-2: APIs](2-2-apis.md)

</div>
