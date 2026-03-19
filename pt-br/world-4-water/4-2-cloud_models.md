---
title: "Fase 4-2 -- Niveis de Servico: Modelos de Nuvem"
description: "IaaS, PaaS, SaaS e Serverless explicados como niveis de castelo no Mushroom Kingdom — do terreno vazio ao castelo mobiliado"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agentic-devops
  - mario
  - world-4
  - cloud
  - iaas
  - paas
  - saas
  - serverless
---

# Fase 4-2 -- Niveis de Servico: Modelos de Nuvem

---

## Change Log

| Versao | Data       | Autor                                  | Descricao          |
|--------|------------|----------------------------------------|--------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Criacao inicial    |

---

## Sumario

- [Prologo: O Dilema da Construcao](#prologo-o-dilema-da-construcao)
- [1. O Que E Computacao em Nuvem?](#1-o-que-e-computacao-em-nuvem)
  - [1.1 Antes da Nuvem: O Mundo On-Premises](#11-antes-da-nuvem-o-mundo-on-premises)
  - [1.2 A Revolucao da Nuvem](#12-a-revolucao-da-nuvem)
  - [1.3 Os Tres Grandes Reinos da Nuvem](#13-os-tres-grandes-reinos-da-nuvem)
- [2. IaaS: Terreno Vazio — Construa Tudo](#2-iaas-terreno-vazio--construa-tudo)
  - [2.1 O Que Voce Recebe](#21-o-que-voce-recebe)
  - [2.2 O Que Voce Precisa Fazer](#22-o-que-voce-precisa-fazer)
  - [2.3 Exemplos Reais de IaaS](#23-exemplos-reais-de-iaas)
  - [2.4 Quando Usar IaaS](#24-quando-usar-iaas)
- [3. PaaS: Castelo Pre-Construido — So Decore](#3-paas-castelo-pre-construido--so-decore)
  - [3.1 O Que Voce Recebe](#31-o-que-voce-recebe)
  - [3.2 O Que Voce Precisa Fazer](#32-o-que-voce-precisa-fazer)
  - [3.3 Exemplos Reais de PaaS](#33-exemplos-reais-de-paas)
  - [3.4 Quando Usar PaaS](#34-quando-usar-paas)
- [4. SaaS: Castelo Mobiliado — Mude-se](#4-saas-castelo-mobiliado--mude-se)
  - [4.1 O Que Voce Recebe](#41-o-que-voce-recebe)
  - [4.2 O Que Voce Precisa Fazer](#42-o-que-voce-precisa-fazer)
  - [4.3 Exemplos Reais de SaaS](#43-exemplos-reais-de-saas)
  - [4.4 Quando Usar SaaS](#44-quando-usar-saas)
- [5. Serverless: Magia — Aparece Quando Precisa](#5-serverless-magia--aparece-quando-precisa)
  - [5.1 O Conceito de Serverless](#51-o-conceito-de-serverless)
  - [5.2 Como Serverless Funciona](#52-como-serverless-funciona)
  - [5.3 Azure Functions: Exemplo Pratico](#53-azure-functions-exemplo-pratico)
  - [5.4 Vantagens e Limitacoes](#54-vantagens-e-limitacoes)
- [6. Comparacao Visual: A Pizza como Servico](#6-comparacao-visual-a-pizza-como-servico)
- [7. Shared Responsibility Model](#7-shared-responsibility-model)
  - [7.1 O Que E Responsabilidade Compartilhada](#71-o-que-e-responsabilidade-compartilhada)
  - [7.2 Tabela de Responsabilidades](#72-tabela-de-responsabilidades)
  - [7.3 Por Que Isso Importa](#73-por-que-isso-importa)
- [8. Modelos de Implantacao: Onde Fica o Castelo](#8-modelos-de-implantacao-onde-fica-o-castelo)
  - [8.1 Public Cloud](#81-public-cloud)
  - [8.2 Private Cloud](#82-private-cloud)
  - [8.3 Hybrid Cloud](#83-hybrid-cloud)
  - [8.4 Multi-Cloud](#84-multi-cloud)
- [9. Custos na Nuvem: Economia do Mushroom Kingdom](#9-custos-na-nuvem-economia-do-mushroom-kingdom)
  - [9.1 Pay-as-you-go](#91-pay-as-you-go)
  - [9.2 Reserved Instances](#92-reserved-instances)
  - [9.3 Spot Instances](#93-spot-instances)
  - [9.4 Free Tiers](#94-free-tiers)
- [10. Escolhendo o Modelo Certo](#10-escolhendo-o-modelo-certo)
  - [10.1 Arvore de Decisao](#101-arvore-de-decisao)
  - [10.2 Tabela Final de Resumo](#102-tabela-final-de-resumo)
- [Referencias](#referencias)

---

## Prologo: O Dilema da Construcao

Sofia precisava colocar seu TodoApp no ar para usuarios reais. Mas quando comecou a pesquisar, ficou perdida com tantas opcoes: maquinas virtuais, servicos de app, funcoes serverless, containers...

Yoshi — o Engenheiro DevOps — apareceu voando e pousou ao lado dela.

*"Sofia, pense assim,"* disse Yoshi. *"Voce quer morar num lugar novo. Quais sao suas opcoes?"*

Sofia pensou. *"Comprar um terreno e construir do zero?"*

*"Isso e **IaaS** — Infrastructure as a Service. Voce recebe o terreno vazio. Precisa construir tudo: fundacao, paredes, telhado, encanamento, eletrica..."*

*"Ou... comprar um apartamento semi-mobiliado?"*

*"Isso e **PaaS** — Platform as a Service. O castelo ja esta construido. Voce so precisa decorar — colocar seus moveis, quadros, suas coisas."*

*"Ou alugar um Airbnb completamente mobiliado?"*

*"Isso e **SaaS** — Software as a Service. Tudo pronto. Voce chega com sua mala e comeca a usar."*

*"E tem mais uma opcao,"* Yoshi piscou. *"Imagine um castelo **magico** que so aparece quando alguem bate na porta e desaparece quando todos saem. Voce so paga pelos minutos que alguem esteve dentro."*

Sofia arregalou os olhos. *"Isso existe?"*

*"Bem-vinda ao **Serverless**."*

---

## 1. O Que E Computacao em Nuvem?

### 1.1 Antes da Nuvem: O Mundo On-Premises

Antes da nuvem, toda empresa precisava ter seus **proprios servidores fisicos**. Imagine que para cada castelo no Mushroom Kingdom, voce precisava:

- Comprar o terreno (datacenter)
- Construir o predio (servidores fisicos)
- Instalar toda a infraestrutura (rede, eletrica, refrigeracao)
- Contratar guardas 24/7 (equipe de TI)
- Fazer manutencao constante (atualizacoes, reparos)

**Problemas do on-premises:**

| Problema | Analogia Mario |
|----------|----------------|
| **Alto custo inicial** | Comprar terreno + construir castelo antes de ter moradores |
| **Desperdicio** | Castelo enorme com 90% dos quartos vazios |
| **Escalabilidade lenta** | Precisa construir nova ala do castelo (leva meses) |
| **Manutencao constante** | Telhado vaza, parede trinca, canos entopem |
| **Risco de desastre** | Incendio no castelo = perda total |

### 1.2 A Revolucao da Nuvem

A computacao em nuvem resolve esses problemas oferecendo recursos computacionais **sob demanda, pela internet**.

> **Analogia Mario**: Em vez de cada personagem construir seu proprio castelo, existe um **reino enorme** (Azure, AWS, GCP) com milhares de castelos prontos. Voce aluga o que precisa, pelo tempo que precisa. Se precisar de mais espaco, e so pedir. Se nao precisar mais, devolve.

**As 5 caracteristicas essenciais da nuvem (NIST):**

1. **Self-service on-demand**: Pedir recursos sem precisar de aprovacao humana
2. **Broad network access**: Acessar de qualquer lugar via internet
3. **Resource pooling**: Recursos compartilhados entre muitos usuarios
4. **Rapid elasticity**: Escalar rapidamente para cima ou para baixo
5. **Measured service**: Pagar apenas pelo que usar

### 1.3 Os Tres Grandes Reinos da Nuvem

| Provedor | Analogia Mario | Forca |
|----------|----------------|-------|
| **Microsoft Azure** | Mushroom Kingdom — vasto e organizado | Integracao com Microsoft, hibrido, enterprise |
| **Amazon AWS** | Koopa Kingdom — o maior e mais antigo | Variedade de servicos, market share |
| **Google Cloud** | Star Kingdom — inovador e agil | IA/ML, Kubernetes, BigQuery |

---

## 2. IaaS: Terreno Vazio — Construa Tudo

### 2.1 O Que Voce Recebe

Com **IaaS (Infrastructure as a Service)**, o provedor de nuvem fornece a infraestrutura basica:

> **Analogia Mario**: IaaS e receber um **terreno vazio** no Mushroom Kingdom. O terreno ja tem acesso a agua e eletricidade (rede e internet), mas voce precisa construir TUDO: fundacao, paredes, telhado, decoracao, seguranca.

**O que o provedor cuida:**

- Hardware fisico (servidores, storage, rede)
- Virtualizacao (hypervisor)
- Datacenter (energia, refrigeracao, seguranca fisica)

**O que VOCE cuida:**

- Sistema operacional (Linux, Windows)
- Middleware e runtime
- Aplicacao
- Dados
- Seguranca da aplicacao
- Patches e atualizacoes do SO
- Configuracao de rede virtual

### 2.2 O Que Voce Precisa Fazer

```bash
# Exemplo: Criar uma VM no Azure (IaaS)
az vm create \
  --resource-group mushroom-kingdom \
  --name mario-server \
  --image Ubuntu2204 \
  --size Standard_B2s \
  --admin-username mario \
  --generate-ssh-keys

# Agora VOCE precisa:
# 1. Conectar via SSH
ssh mario@<ip-do-servidor>

# 2. Instalar Node.js
sudo apt update && sudo apt install -y nodejs npm

# 3. Instalar dependencias
npm install

# 4. Configurar NGINX como reverse proxy
sudo apt install -y nginx

# 5. Configurar certificado SSL
sudo certbot --nginx -d todoapp.mushroom.com

# 6. Configurar firewall
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# 7. Configurar monitoramento
# 8. Configurar backups
# 9. Configurar auto-restart
# ... e MUITO mais
```

### 2.3 Exemplos Reais de IaaS

| Servico | Provedor | O Que Faz |
|---------|----------|-----------|
| **Azure Virtual Machines** | Microsoft | Maquinas virtuais com qualquer SO |
| **Amazon EC2** | AWS | Instancias de computacao elastica |
| **Google Compute Engine** | Google | VMs customizaveis |
| **Azure Virtual Network** | Microsoft | Redes virtuais privadas |
| **Azure Disk Storage** | Microsoft | Discos para VMs |

### 2.4 Quando Usar IaaS

**Use IaaS quando:**

- Precisa de controle total sobre o sistema operacional
- Tem aplicacoes legadas que nao rodam em PaaS
- Precisa de configuracoes muito especificas de hardware/software
- Tem equipe de infraestrutura para gerenciar
- Precisa de compliance especifico que exige controle do SO

**NAO use IaaS quando:**

- Quer simplesmente colocar um app web no ar
- Nao tem equipe para gerenciar servidores
- Quer focar no codigo, nao na infraestrutura

---

## 3. PaaS: Castelo Pre-Construido — So Decore

### 3.1 O Que Voce Recebe

Com **PaaS (Platform as a Service)**, o provedor cuida de toda a infraestrutura E da plataforma. Voce so precisa trazer sua aplicacao.

> **Analogia Mario**: PaaS e como receber um **castelo ja construido** no Mushroom Kingdom. Paredes, telhado, encanamento, eletrica — tudo pronto. Voce so precisa colocar seus moveis (codigo) e decorar (configurar).

**O que o provedor cuida:**

- Tudo do IaaS (hardware, rede, virtualizacao)
- Sistema operacional
- Middleware e runtime (Node.js, Python, .NET)
- Patches e atualizacoes
- Escalabilidade automatica
- Balanceamento de carga

**O que VOCE cuida:**

- Sua aplicacao (codigo)
- Seus dados
- Configuracoes da aplicacao

### 3.2 O Que Voce Precisa Fazer

```bash
# Exemplo: Deploy no Azure App Service (PaaS)

# 1. Criar o App Service
az webapp create \
  --resource-group mushroom-kingdom \
  --plan mario-plan \
  --name todoapp-mario \
  --runtime "NODE:18-lts"

# 2. Fazer deploy do codigo
az webapp deployment source config-local-git \
  --name todoapp-mario \
  --resource-group mushroom-kingdom

git remote add azure <url-do-azure>
git push azure main

# PRONTO! Sem instalar Node.js, sem configurar NGINX,
# sem SSL, sem firewall. Tudo automatico.
```

**Compare com IaaS**: no IaaS foram ~9 passos manuais. No PaaS, foram 2 comandos.

### 3.3 Exemplos Reais de PaaS

| Servico | Provedor | O Que Faz |
|---------|----------|-----------|
| **Azure App Service** | Microsoft | Hospedagem de web apps |
| **Azure SQL Database** | Microsoft | Banco SQL gerenciado |
| **Heroku** | Salesforce | PaaS simples para devs |
| **AWS Elastic Beanstalk** | AWS | Deploy automatizado |
| **Google App Engine** | Google | Apps escalaveis |
| **Azure Container Apps** | Microsoft | Containers gerenciados |

### 3.4 Quando Usar PaaS

**Use PaaS quando:**

- Quer focar no codigo, nao na infraestrutura
- Precisa de deploy rapido e simples
- Quer escalabilidade automatica sem configuracao
- Nao tem ou nao quer uma equipe de infraestrutura dedicada
- Esta construindo apps web, APIs, ou microservicos

**NAO use PaaS quando:**

- Precisa de controle total sobre o SO
- Tem requisitos muito especificos de hardware
- Aplicacao legada que nao se adapta ao PaaS

---

## 4. SaaS: Castelo Mobiliado — Mude-se

### 4.1 O Que Voce Recebe

Com **SaaS (Software as a Service)**, voce recebe uma aplicacao **completa e pronta para usar**. Nao precisa instalar, configurar ou manter nada.

> **Analogia Mario**: SaaS e como chegar num **castelo completamente mobiliado** no Mushroom Kingdom. Cama feita, comida na geladeira, guardas na porta. Voce so precisa entrar e comecar a viver. Nao precisa saber como a eletrica funciona ou quem faz a manutencao.

**O que o provedor cuida:**

- TUDO: hardware, SO, plataforma, aplicacao, dados (backup), seguranca, atualizacoes

**O que VOCE cuida:**

- Seus dados dentro da aplicacao
- Configuracoes de usuario
- Quem tem acesso

### 4.2 O Que Voce Precisa Fazer

```
1. Abrir o navegador
2. Acessar o site
3. Criar uma conta (ou login com OAuth)
4. Comecar a usar

Nao tem deploy. Nao tem codigo. Nao tem servidor.
```

### 4.3 Exemplos Reais de SaaS

| Servico | O Que Faz | Voce Usa Para |
|---------|-----------|---------------|
| **Microsoft 365** | Suite de produtividade | Email, Word, Excel, Teams |
| **GitHub** | Plataforma de codigo | Repositorios, CI/CD, Issues |
| **Slack** | Comunicacao | Mensagens do time |
| **Salesforce** | CRM | Gerenciar clientes |
| **Notion** | Documentacao | Wiki do projeto |
| **Vercel** | Deploy frontend | Hospedar sites Next.js |
| **Figma** | Design | Criar interfaces |

### 4.4 Quando Usar SaaS

**Use SaaS quando:**

- A solucao pronta atende suas necessidades
- Nao quer construir algo que ja existe
- Quer comecar a usar imediatamente
- Prefere pagar assinatura mensal a desenvolver internamente

**NAO use SaaS quando:**

- Precisa de customizacao profunda
- Tem requisitos de seguranca que exigem controle total
- O custo da assinatura e maior que construir internamente
- A solucao pronta nao atende seu caso de uso especifico

---

## 5. Serverless: Magia — Aparece Quando Precisa

### 5.1 O Conceito de Serverless

**Serverless** nao significa "sem servidor" — os servidores existem, mas voce **nao precisa pensar neles**. O provedor gerencia tudo automaticamente.

> **Analogia Mario**: Serverless e como um castelo **magico** no Mushroom Kingdom. Os quartos so aparecem quando alguem precisa deles e **desaparecem** quando ninguem mais esta usando. Voce nao paga pelo castelo inteiro — paga apenas pelos quartos que foram usados e pelo tempo que ficaram abertos.

**Caracteristicas do Serverless:**

- **Event-driven**: Codigo executa em resposta a eventos
- **Auto-scaling**: Escala de 0 a milhares automaticamente
- **Pay-per-execution**: Paga apenas quando o codigo roda
- **No server management**: Zero gerenciamento de servidor
- **Ephemeral**: Instancias sao temporarias

### 5.2 Como Serverless Funciona

```
Modelo Tradicional (IaaS/PaaS):
  Servidor rodando 24/7 → Mesmo sem ninguem usando → $$$ por hora

Modelo Serverless:
  Ninguem usando → Nada rodando → $0
  Requisicao chega → Funcao inicia → Processa → Responde → Desliga → $0.0001
  1000 requisicoes simultaneas → 1000 instancias → Processam → $0.10
```

```
Tempo -->  00:00        06:00        12:00        18:00        00:00
            |            |            |            |            |
Tradicional: [=========SERVIDOR RODANDO 24H=========] = $72/dia

Serverless:  [_]  [_]   [|||]  [||||||||||] [|||]  [_] = $2/dia
              ^    ^       ^         ^          ^    ^
              1    3      50       500        100    5
              req  req    req      req        req   req
```

### 5.3 Azure Functions: Exemplo Pratico

```javascript
// Azure Function: Enviar email quando tarefa e criada
// Arquivo: CreateTodoNotification/index.js

module.exports = async function (context, req) {
  context.log('Nova tarefa criada! Enviando notificacao...');

  const { title, userId, priority } = req.body;

  // Buscar email do usuario
  const user = await getUser(userId);

  // Enviar email
  await sendEmail({
    to: user.email,
    subject: `Nova tarefa: ${title}`,
    body: `Voce criou a tarefa "${title}" com prioridade ${priority}.`
  });

  context.res = {
    status: 200,
    body: { message: 'Notificacao enviada com sucesso' }
  };
};
```

```json
// function.json — configuracao do trigger
{
  "bindings": [
    {
      "authLevel": "function",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": ["post"]
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}
```

**Outros tipos de trigger:**

| Trigger | Quando Dispara | Analogia Mario |
|---------|---------------|----------------|
| **HTTP** | Requisicao HTTP chega | Alguem bate na porta do castelo |
| **Timer** | Em horarios programados | O relogio do castelo bate (a cada hora) |
| **Blob** | Arquivo adicionado ao storage | Nova carta chega no correio |
| **Queue** | Mensagem chega na fila | Parakoopa entrega uma encomenda |
| **Database** | Dado alterado no banco | Toad registra mudanca no livro de registros |

### 5.4 Vantagens e Limitacoes

| Vantagem | Limitacao |
|----------|-----------|
| Paga so pelo uso real | Cold start (demora para "acordar") |
| Escala automaticamente de 0 a infinito | Limite de tempo de execucao (5-10 min) |
| Zero gerenciamento de servidor | Dificil debugar localmente |
| Deploy simples (so o codigo) | Vendor lock-in |
| Ideal para microservicos | Nao ideal para processos longos |

---

## 6. Comparacao Visual: A Pizza como Servico

Uma analogia classica da industria, adaptada para Mario:

```
                On-Premises    IaaS          PaaS          SaaS         Serverless
                (Seu castelo)  (Terreno)     (Castelo)     (Hotel)      (Magia)
Aplicacao       [VOCE]         [VOCE]        [VOCE]        [provedor]   [VOCE*]
Dados           [VOCE]         [VOCE]        [VOCE]        [provedor]   [VOCE]
Runtime         [VOCE]         [VOCE]        [provedor]    [provedor]   [provedor]
Middleware      [VOCE]         [VOCE]        [provedor]    [provedor]   [provedor]
SO              [VOCE]         [VOCE]        [provedor]    [provedor]   [provedor]
Virtualizacao   [VOCE]         [provedor]    [provedor]    [provedor]   [provedor]
Servidores      [VOCE]         [provedor]    [provedor]    [provedor]   [provedor]
Storage         [VOCE]         [provedor]    [provedor]    [provedor]   [provedor]
Rede            [VOCE]         [provedor]    [provedor]    [provedor]   [provedor]

* No serverless voce escreve APENAS funcoes individuais, nao a app inteira
```

> **Analogia Mario**:
> - **On-Premises** = Voce constroi o Mushroom Kingdom inteiro do zero
> - **IaaS** = Voce recebe o terreno no Mushroom Kingdom, constroi o castelo
> - **PaaS** = Voce recebe o castelo pronto, traz seus moveis
> - **SaaS** = Voce se muda para o castelo do Rei, tudo pronto
> - **Serverless** = Quartos magicos que aparecem e somem conforme necessidade


---

## 7. Shared Responsibility Model

### 7.1 O Que E Responsabilidade Compartilhada

O **modelo de responsabilidade compartilhada** define quem cuida do que entre voce e o provedor de nuvem.

> **Analogia Mario**: No Mushroom Kingdom, existem guardas reais (provedor) e guardas pessoais (voce). Os guardas reais protegem as muralhas externas, mas o que acontece DENTRO do seu quarto e sua responsabilidade. Se voce deixar a porta do quarto aberta, a culpa nao e dos guardas reais.

### 7.2 Tabela de Responsabilidades

| Camada | On-Prem | IaaS | PaaS | SaaS |
|--------|---------|------|------|------|
| **Dados e acesso** | Voce | Voce | Voce | Voce |
| **Aplicacao** | Voce | Voce | Voce | Provedor |
| **Identidade** | Voce | Compartilhado | Compartilhado | Compartilhado |
| **Runtime/SO** | Voce | Voce | Provedor | Provedor |
| **Rede** | Voce | Compartilhado | Provedor | Provedor |
| **Infra fisica** | Voce | Provedor | Provedor | Provedor |

### 7.3 Por Que Isso Importa

**Voce SEMPRE e responsavel por:**

1. **Seus dados** — criptografia, classificacao, retencao
2. **Controle de acesso** — quem pode acessar o que
3. **Gestao de identidades** — senhas, MFA, roles
4. **Configuracao de seguranca** — firewalls da aplicacao, CORS

**Erro classico**: achar que "se esta na nuvem, o provedor cuida de tudo". NAO. A nuvem protege a infraestrutura, mas a seguranca da SUA aplicacao e responsabilidade SUA.

> **Analogia Mario**: O Mushroom Kingdom pode ter as melhores muralhas do mundo, mas se Mario deixar a porta do cofre aberta com um cartaz "Senha: 1234", Bowser entra.

---

## 8. Modelos de Implantacao: Onde Fica o Castelo

### 8.1 Public Cloud

Infraestrutura compartilhada, acessivel pela internet, gerenciada pelo provedor.

> **Analogia Mario**: Um condominio no Mushroom Kingdom. Varios moradores compartilham a infraestrutura (elevador, portaria, piscina), mas cada um tem seu apartamento privado.

**Exemplos**: Azure, AWS, GCP

**Vantagens**: Custo baixo, escalabilidade rapida, zero manutencao fisica

### 8.2 Private Cloud

Infraestrutura dedicada exclusivamente para uma organizacao.

> **Analogia Mario**: Um castelo particular. So voce e seus convidados usam. Mais privacidade, mais controle, mais custo.

**Exemplos**: Azure Stack, VMware Private Cloud

**Vantagens**: Controle total, compliance rigoroso, dados sensiveis

### 8.3 Hybrid Cloud

Combinacao de public e private cloud, conectadas entre si.

> **Analogia Mario**: Mario mora no castelo particular, mas usa servicos do condominio (piscina, academia). Dados sensiveis ficam no castelo; aplicacoes comuns ficam no condominio.

**Exemplos**: Azure Arc, AWS Outposts

**Vantagens**: Flexibilidade, migracao gradual, melhor dos dois mundos

### 8.4 Multi-Cloud

Usar mais de um provedor de nuvem publica simultaneamente.

> **Analogia Mario**: Mario tem apartamento no Mushroom Kingdom (Azure) E no Star Kingdom (GCP). Usa o melhor de cada reino para diferentes necessidades.

**Vantagens**: Evitar vendor lock-in, usar o melhor servico de cada provedor
**Desvantagens**: Complexidade de gerenciamento, custo operacional maior

---

## 9. Custos na Nuvem: Economia do Mushroom Kingdom

### 9.1 Pay-as-you-go

Pague apenas pelo que usar, como uma conta de agua.

```
Uso em janeiro:  100 horas de VM + 50 GB storage = $25
Uso em fevereiro: 200 horas de VM + 50 GB storage = $45
Uso em marco:    10 horas de VM + 50 GB storage = $8
```

> **Analogia Mario**: Como pagar por moeda coletada. Se voce coletou 100 moedas, paga 100. Se coletou 10, paga 10.

### 9.2 Reserved Instances

Comprometimento de 1 ou 3 anos em troca de desconto (ate 72%).

> **Analogia Mario**: Comprar um passe anual para o Mushroom Kingdom em vez de pagar por dia. Mais barato no total, mas voce se compromete.

### 9.3 Spot Instances

Usar capacidade ociosa do provedor por preco muito baixo (ate 90% desconto), mas pode ser interrompido a qualquer momento.

> **Analogia Mario**: Quartos que estao vazios no castelo. Voce pode usa-los por quase nada, mas se o dono original voltar, voce precisa sair imediatamente.

### 9.4 Free Tiers

Recursos gratuitos para experimentar.

| Servico Azure | Free Tier |
|---------------|-----------|
| **App Service** | 10 apps, 1 GB storage |
| **Azure Functions** | 1 milhao de execucoes/mes |
| **Azure SQL** | 100,000 vCPU-seconds/mes |
| **Cosmos DB** | 1000 RU/s, 25 GB |
| **Azure DevOps** | 5 usuarios, pipelines gratuitos |

---

## 10. Escolhendo o Modelo Certo

### 10.1 Arvore de Decisao

```
Voce precisa de controle total sobre o SO?
  ├── SIM → Precisa de hardware especifico?
  │         ├── SIM → On-Premises
  │         └── NAO → IaaS (Azure VM)
  │
  └── NAO → Voce esta construindo uma aplicacao?
            ├── SIM → E uma aplicacao web/API completa?
            │         ├── SIM → PaaS (App Service)
            │         └── NAO → Sao funcoes individuais event-driven?
            │                   ├── SIM → Serverless (Azure Functions)
            │                   └── NAO → PaaS ou Containers (Container Apps)
            │
            └── NAO → Voce quer usar uma solucao pronta?
                      └── SIM → SaaS (Microsoft 365, GitHub, etc.)
```

### 10.2 Tabela Final de Resumo

| Modelo | Analogia Mario | Voce Gerencia | Provedor Gerencia | Exemplo Azure | Custo | Complexidade |
|--------|----------------|---------------|-------------------|---------------|-------|--------------|
| **On-Prem** | Construir o reino | TUDO | Nada | Azure Stack | Alto | Muito alta |
| **IaaS** | Terreno vazio | SO, app, dados | Infra fisica | Azure VM | Medio | Alta |
| **PaaS** | Castelo pronto | App, dados | Infra + plataforma | App Service | Medio | Baixa |
| **SaaS** | Hotel luxo | Configuracao | TUDO | Microsoft 365 | Variavel | Muito baixa |
| **Serverless** | Magia | Funcoes | TUDO (ate escala) | Azure Functions | Baixo* | Media |

*Baixo para uso intermitente; pode ser alto para uso constante.

---

## Referencias

- [Azure — O que e computacao em nuvem?](https://azure.microsoft.com/pt-br/resources/cloud-computing-dictionary/what-is-cloud-computing/)
- [Azure — Modelos de servico de nuvem](https://learn.microsoft.com/pt-br/training/modules/describe-cloud-service-types/)
- [Azure — Modelo de responsabilidade compartilhada](https://learn.microsoft.com/pt-br/azure/security/fundamentals/shared-responsibility)
- [Azure App Service — Documentacao](https://learn.microsoft.com/pt-br/azure/app-service/)
- [Azure Functions — Documentacao](https://learn.microsoft.com/pt-br/azure/azure-functions/)
- [Azure Virtual Machines — Documentacao](https://learn.microsoft.com/pt-br/azure/virtual-machines/)
- [NIST — Definition of Cloud Computing](https://csrc.nist.gov/publications/detail/sp/800-145/final)
- [Azure Pricing Calculator](https://azure.microsoft.com/pt-br/pricing/calculator/)
- [Azure Free Account](https://azure.microsoft.com/pt-br/free/)

---

*Fase 4-2 completa! Agora voce sabe a diferenca entre construir do zero (IaaS), decorar um castelo pronto (PaaS), morar num hotel (SaaS) e usar magia (Serverless). Na proxima fase, vamos explorar Arquitetura de Software — como projetar a planta do castelo. Prepare-se para o Nivel 4-3!*

---

<div align="center">

⬅️ [Anterior: Fase 4-1: Auth](4-1-auth.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 4-3: Arquitetura](4-3-arquitetura.md)

</div>
