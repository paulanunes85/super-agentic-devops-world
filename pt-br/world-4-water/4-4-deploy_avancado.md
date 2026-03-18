---
title: "Fase 4-4 -- Estrategias de Lancamento: Deploy Avancado"
description: "Blue-green, canary, rolling, feature flags, A/B testing e rollback — como trocar as portas do castelo sem que os visitantes percebam"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agentic-devops
  - mario
  - world-4
  - deploy
  - blue-green
  - canary
  - rolling
  - feature-flags
  - rollback
---

# Fase 4-4 -- Estrategias de Lancamento: Deploy Avancado

---

## Change Log

| Versao | Data       | Autor                                  | Descricao          |
|--------|------------|----------------------------------------|--------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial    |

---

## Sumario

- [Prologo: A Troca de Guarda Invisivel](#prologo-a-troca-de-guarda-invisivel)
- [1. O Problema do Deploy Tradicional](#1-o-problema-do-deploy-tradicional)
  - [1.1 O Deploy "Big Bang"](#11-o-deploy-big-bang)
  - [1.2 Downtime: O Inimigo](#12-downtime-o-inimigo)
  - [1.3 O Que Queremos: Zero Downtime](#13-o-que-queremos-zero-downtime)
- [2. Blue-Green Deployment: Dois Castelos Identicos](#2-blue-green-deployment-dois-castelos-identicos)
  - [2.1 Como Funciona](#21-como-funciona)
  - [2.2 Diagrama do Fluxo](#22-diagrama-do-fluxo)
  - [2.3 Implementacao no Azure](#23-implementacao-no-azure)
  - [2.4 Vantagens e Desvantagens](#24-vantagens-e-desvantagens)
- [3. Canary Deployment: O Explorador Toad](#3-canary-deployment-o-explorador-toad)
  - [3.1 Como Funciona](#31-como-funciona)
  - [3.2 Progressao Gradual](#32-progressao-gradual)
  - [3.3 Metricas para Decisao](#33-metricas-para-decisao)
  - [3.4 Implementacao Pratica](#34-implementacao-pratica)
- [4. Rolling Deployment: Troca de Guardas Gradual](#4-rolling-deployment-troca-de-guardas-gradual)
  - [4.1 Como Funciona](#41-como-funciona)
  - [4.2 Rolling Update no Kubernetes](#42-rolling-update-no-kubernetes)
  - [4.3 Configuracoes Importantes](#43-configuracoes-importantes)
- [5. Feature Flags: Portas Invisiveis](#5-feature-flags-portas-invisiveis)
  - [5.1 O Que Sao Feature Flags](#51-o-que-sao-feature-flags)
  - [5.2 Tipos de Feature Flags](#52-tipos-de-feature-flags)
  - [5.3 Implementacao Simples](#53-implementacao-simples)
  - [5.4 Ferramentas de Feature Flag](#54-ferramentas-de-feature-flag)
  - [5.5 Boas Praticas](#55-boas-praticas)
- [6. A/B Testing: Duas Versoes do Castelo](#6-ab-testing-duas-versoes-do-castelo)
  - [6.1 O Que E A/B Testing](#61-o-que-e-ab-testing)
  - [6.2 Como Funciona Tecnicamente](#62-como-funciona-tecnicamente)
  - [6.3 Metricas e Decisoes](#63-metricas-e-decisoes)
- [7. Rollback: O Portal de Emergencia](#7-rollback-o-portal-de-emergencia)
  - [7.1 Quando Fazer Rollback](#71-quando-fazer-rollback)
  - [7.2 Estrategias de Rollback](#72-estrategias-de-rollback)
  - [7.3 Rollback Automatico](#73-rollback-automatico)
  - [7.4 Database Rollback: O Problema Mais Dificil](#74-database-rollback-o-problema-mais-dificil)
- [8. GitOps: O Mapa E a Verdade](#8-gitops-o-mapa-e-a-verdade)
  - [8.1 O Principio do GitOps](#81-o-principio-do-gitops)
  - [8.2 Como GitOps Funciona](#82-como-gitops-funciona)
- [9. Comparacao de Estrategias](#9-comparacao-de-estrategias)
  - [9.1 Tabela Comparativa](#91-tabela-comparativa)
  - [9.2 Arvore de Decisao](#92-arvore-de-decisao)
- [10. Tabela Final de Resumo](#10-tabela-final-de-resumo)
- [Referencias](#referencias)

---

## Prologo: A Troca de Guarda Invisivel

Sofia acabou de adicionar uma funcionalidade incrivel ao TodoApp — notificacoes por email. Fez todos os testes, revisou o codigo, estava confiante. Clicou "deploy" e... 500 usuarios ficaram sem acesso por 3 minutos enquanto o novo codigo era instalado.

Yoshi — o DevOps — apareceu balancando a cabeca.

*"Sofia, imagine que voce e a rainha do Mushroom Kingdom e precisa trocar todos os guardas do castelo. Se voce demitir os guardas antigos e so DEPOIS contratar os novos, o castelo fica desprotegido durante a troca. Os invasores aproveitam."*

*"Mas como eu troco sem deixar o castelo desprotegido?"*

*"Existem varias estrategias,"* Yoshi abriu um mapa com diagramas. *"Voce pode ter **dois castelos identicos** e simplesmente trocar para qual os visitantes sao direcionados. Ou enviar um **explorador** primeiro para testar se o caminho e seguro. Ou trocar os guardas **um de cada vez**, sem que ninguem perceba."*

*"Bem-vinda ao deploy avancado. Aqui, ninguem percebe que algo mudou — e esse e o objetivo."*

---

## 1. O Problema do Deploy Tradicional

### 1.1 O Deploy "Big Bang"

O deploy tradicional funciona assim:

```
1. Parar a aplicacao antiga        → Usuarios sem acesso
2. Instalar versao nova            → Usuarios sem acesso
3. Iniciar versao nova             → Usuarios sem acesso
4. Verificar se funciona           → Talvez usuarios com acesso
5. Se nao funcionar → reverter     → Mais tempo sem acesso
```

> **Analogia Mario**: E como fechar o Mushroom Kingdom inteiro para reformar uma unica sala. Ninguem pode jogar durante a reforma.

### 1.2 Downtime: O Inimigo

**Downtime** e o tempo em que a aplicacao fica indisponivel.

| Nivel | Downtime/Ano | Disponibilidade | Mario |
|-------|-------------|-----------------|-------|
| Ruim | 87.6 horas | 99% | Castelo fecha 1 hora por semana |
| Bom | 8.76 horas | 99.9% | Castelo fecha 1 hora por mes |
| Muito bom | 52.56 min | 99.99% | Castelo fecha 5 min por mes |
| Excelente | 5.26 min | 99.999% | Castelo fecha 30 seg por mes |

### 1.3 O Que Queremos: Zero Downtime

**Zero Downtime Deployment** significa atualizar a aplicacao sem que NENHUM usuario perceba que algo mudou.

```
ANTES:  v1.0 rodando → [DOWNTIME] → v2.0 rodando

DEPOIS: v1.0 rodando → v1.0 + v2.0 rodando → v2.0 rodando
                        (transicao suave)
```

---

## 2. Blue-Green Deployment: Dois Castelos Identicos

### 2.1 Como Funciona

No **Blue-Green Deployment**, voce mantem **dois ambientes identicos**: um ativo (Blue) e um inativo (Green).

> **Analogia Mario**: Imagine dois castelos identicos lado a lado — Castelo Azul e Castelo Verde. Os visitantes estao todos no Castelo Azul. Voce reforma o Castelo Verde em silencio. Quando a reforma esta pronta e testada, voce simplesmente muda a placa de direcao — agora os visitantes vao para o Castelo Verde. Se algo der errado, mude a placa de volta em segundos.

### 2.2 Diagrama do Fluxo

```
Estado 1: Blue ativo, Green inativo
                    ┌─────────────────┐
  Usuarios ──────→  │  BLUE (v1.0)    │  ← Ativo
                    │  Castelo Azul   │
                    └─────────────────┘
                    ┌─────────────────┐
                    │  GREEN (v1.0)   │  ← Inativo
                    │  Castelo Verde  │
                    └─────────────────┘

Estado 2: Deploy v2.0 no Green (usuarios nao percebem)
                    ┌─────────────────┐
  Usuarios ──────→  │  BLUE (v1.0)    │  ← Ainda ativo
                    └─────────────────┘
                    ┌─────────────────┐
  Testers ───────→  │  GREEN (v2.0)   │  ← Testando
                    └─────────────────┘

Estado 3: Switch! Green vira ativo
                    ┌─────────────────┐
                    │  BLUE (v1.0)    │  ← Inativo (backup)
                    └─────────────────┘
                    ┌─────────────────┐
  Usuarios ──────→  │  GREEN (v2.0)   │  ← Ativo!
                    └─────────────────┘

Problemas? Switch de volta em segundos!
```

### 2.3 Implementacao no Azure

```bash
# Azure App Service tem "Deployment Slots" nativos para Blue-Green

# 1. Criar o App Service (Blue — producao)
az webapp create \
  --name todoapp-mario \
  --resource-group mushroom-kingdom \
  --plan mario-plan

# 2. Criar um slot de staging (Green)
az webapp deployment slot create \
  --name todoapp-mario \
  --resource-group mushroom-kingdom \
  --slot staging

# 3. Fazer deploy da nova versao no slot staging (Green)
az webapp deployment source config-local-git \
  --name todoapp-mario \
  --resource-group mushroom-kingdom \
  --slot staging

git push azure-staging main

# 4. Testar o slot staging
curl https://todoapp-mario-staging.azurewebsites.net/health

# 5. SWAP! Trocar staging <-> producao (zero downtime)
az webapp deployment slot swap \
  --name todoapp-mario \
  --resource-group mushroom-kingdom \
  --slot staging \
  --target-slot production

# 6. Problemas? Swap de volta!
az webapp deployment slot swap \
  --name todoapp-mario \
  --resource-group mushroom-kingdom \
  --slot staging \
  --target-slot production
```

### 2.4 Vantagens e Desvantagens

| Vantagens | Desvantagens |
|-----------|-------------|
| Zero downtime | Custo dobrado (dois ambientes) |
| Rollback instantaneo | Banco de dados precisa ser compativel com ambas versoes |
| Ambiente de teste identico a producao | Sessoes de usuario podem ser perdidas no swap |
| Simples de entender | Nao escala bem para microservicos (muitos pares) |

---

## 3. Canary Deployment: O Explorador Toad

### 3.1 Como Funciona

No **Canary Deployment**, a nova versao e liberada primeiro para uma **pequena porcentagem** de usuarios. Se tudo correr bem, aumenta gradualmente ate 100%.

> **Analogia Mario**: Antes de Mario entrar na caverna perigosa, ele manda **Toad** primeiro — o explorador. Toad entra, verifica se e seguro, volta e reporta. Se estiver tudo bem, Mario entra com confianca. Se Toad encontrar problemas, Mario toma outro caminho.

### 3.2 Progressao Gradual

```
Fase 1 (Canario):     5% → nova versao    95% → versao antiga
                       └── Monitorar metricas por 30 min

Fase 2 (Expansao):   25% → nova versao    75% → versao antiga
                       └── Monitorar metricas por 1 hora

Fase 3 (Maioria):    50% → nova versao    50% → versao antiga
                       └── Monitorar metricas por 2 horas

Fase 4 (Quase la):   90% → nova versao    10% → versao antiga
                       └── Monitorar metricas por 1 hora

Fase 5 (Completo):  100% → nova versao     0% → versao antiga
                       └── Deploy completo!
```

### 3.3 Metricas para Decisao

Quais metricas monitorar para decidir se avanca ou reverte:

| Metrica | Limite Aceitavel | Se Exceder |
|---------|-----------------|------------|
| **Taxa de erro (HTTP 5xx)** | < 1% | Reverter imediatamente |
| **Latencia P95** | < 500ms | Investigar, possivelmente reverter |
| **CPU/Memoria** | < 80% | Investigar |
| **Logs de erro** | Sem erros novos | Investigar |
| **Satisfacao do usuario** | Sem reclamacoes | Investigar |

### 3.4 Implementacao Pratica

```yaml
# Kubernetes: Canary com Ingress NGINX
# canary-deployment.yaml

apiVersion: apps/v1
kind: Deployment
metadata:
  name: todoapp-canary
  labels:
    app: todoapp
    version: v2.0
spec:
  replicas: 1  # Poucos pods para canary
  selector:
    matchLabels:
      app: todoapp
      version: v2.0
  template:
    metadata:
      labels:
        app: todoapp
        version: v2.0
    spec:
      containers:
      - name: todoapp
        image: todoapp:v2.0
        ports:
        - containerPort: 3000

---
# Ingress com anotacao de canary
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: todoapp-canary
  annotations:
    nginx.ingress.kubernetes.io/canary: "true"
    nginx.ingress.kubernetes.io/canary-weight: "10"  # 10% do trafego
spec:
  rules:
  - host: todoapp.mushroom.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: todoapp-canary
            port:
              number: 3000
```

```bash
# Progressao gradual do canary
# Fase 1: 5%
kubectl annotate ingress todoapp-canary \
  nginx.ingress.kubernetes.io/canary-weight="5" --overwrite

# Monitorar... tudo bem? Avancar para 25%
kubectl annotate ingress todoapp-canary \
  nginx.ingress.kubernetes.io/canary-weight="25" --overwrite

# Monitorar... tudo bem? Avancar para 50%
kubectl annotate ingress todoapp-canary \
  nginx.ingress.kubernetes.io/canary-weight="50" --overwrite

# Tudo bem? Promover canary para producao
kubectl set image deployment/todoapp-stable todoapp=todoapp:v2.0
kubectl delete deployment todoapp-canary
```

---

## 4. Rolling Deployment: Troca de Guardas Gradual

### 4.1 Como Funciona

No **Rolling Deployment**, as instancias sao atualizadas **uma de cada vez** (ou em lotes), mantendo as demais rodando.

> **Analogia Mario**: Imagine 10 guardas protegendo o castelo. Em vez de trocar todos de uma vez (castelo desprotegido), voce troca **um guarda por vez**. O guarda antigo sai, o novo entra e assume o posto. Enquanto isso, os outros 9 continuam trabalhando. Ninguem percebe a troca.

```
Tempo 0:  [v1] [v1] [v1] [v1] [v1]  ← 5 instancias v1
Tempo 1:  [v2] [v1] [v1] [v1] [v1]  ← 1 atualizada
Tempo 2:  [v2] [v2] [v1] [v1] [v1]  ← 2 atualizadas
Tempo 3:  [v2] [v2] [v2] [v1] [v1]  ← 3 atualizadas
Tempo 4:  [v2] [v2] [v2] [v2] [v1]  ← 4 atualizadas
Tempo 5:  [v2] [v2] [v2] [v2] [v2]  ← Todas atualizadas!
```

### 4.2 Rolling Update no Kubernetes

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: todoapp
spec:
  replicas: 5
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1     # No maximo 1 pod indisponivel
      maxSurge: 1            # No maximo 1 pod extra
  selector:
    matchLabels:
      app: todoapp
  template:
    metadata:
      labels:
        app: todoapp
    spec:
      containers:
      - name: todoapp
        image: todoapp:v2.0
        ports:
        - containerPort: 3000
        readinessProbe:        # So recebe trafego quando estiver pronto
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 10
        livenessProbe:         # Reinicia se nao estiver saudavel
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 15
          periodSeconds: 20
```

### 4.3 Configuracoes Importantes

| Parametro | O Que Faz | Analogia Mario |
|-----------|-----------|----------------|
| **maxUnavailable** | Quantas instancias podem estar fora ao mesmo tempo | Quantos guardas podem estar em troca ao mesmo tempo |
| **maxSurge** | Quantas instancias extras podem existir durante o update | Quantos guardas extras podem ficar temporariamente |
| **readinessProbe** | Verifica se a instancia esta pronta para receber trafego | Novo guarda pronto para o servico? |
| **livenessProbe** | Verifica se a instancia esta viva e saudavel | Guarda ainda esta de pe? |

---


---

## 5. Feature Flags: Portas Invisiveis

### 5.1 O Que Sao Feature Flags

**Feature Flags** (ou feature toggles) sao chaves que permitem **ligar ou desligar funcionalidades** sem fazer deploy.

> **Analogia Mario**: Feature flags sao **portas invisiveis** no castelo. A porta existe, mas so alguns jogadores podem ve-la e abri-la. Para os outros, e so uma parede normal. Quando voce decide que a porta esta pronta, torna ela visivel para todos — sem precisar reconstruir nada.

### 5.2 Tipos de Feature Flags

| Tipo | Duracao | Uso | Mario |
|------|---------|-----|-------|
| **Release Flag** | Temporario | Esconder feature inacabada | Porta que sera revelada na proxima atualizacao |
| **Experiment Flag** | Temporario | A/B testing | Metade dos jogadores ve a porta azul, metade ve a vermelha |
| **Ops Flag** | Permanente | Desligar feature em emergencia | Botao de panico que fecha uma sala em caso de incendio |
| **Permission Flag** | Permanente | Liberar para grupos especificos | Porta que so abre para membros VIP |

### 5.3 Implementacao Simples

```javascript
// feature-flags.js — Implementacao basica
const featureFlags = {
  'new-notification-system': {
    enabled: true,
    percentage: 50,          // 50% dos usuarios
    allowedUsers: ['mario-001', 'luigi-002'],  // Usuarios especificos
    allowedRoles: ['admin', 'beta-tester']     // Roles especificos
  },
  'dark-mode': {
    enabled: true,
    percentage: 100           // Todos os usuarios
  },
  'experimental-ai': {
    enabled: true,
    percentage: 5,            // Apenas 5% dos usuarios
    allowedRoles: ['admin']
  }
};

function isFeatureEnabled(featureName, user) {
  const flag = featureFlags[featureName];
  if (!flag || !flag.enabled) return false;

  // Usuario especifico tem acesso?
  if (flag.allowedUsers?.includes(user.id)) return true;

  // Role do usuario tem acesso?
  if (flag.allowedRoles?.includes(user.role)) return true;

  // Porcentagem: usar hash do userId para consistencia
  const hash = hashCode(user.id);
  const userPercentile = Math.abs(hash) % 100;
  return userPercentile < flag.percentage;
}

// Uso no codigo
app.get('/api/notifications', verifyToken, async (req, res) => {
  if (isFeatureEnabled('new-notification-system', req.user)) {
    // Novo sistema de notificacoes
    const notifications = await newNotificationService.getAll(req.user.id);
    res.json(notifications);
  } else {
    // Sistema antigo
    const notifications = await legacyNotificationService.getAll(req.user.id);
    res.json(notifications);
  }
});
```

```jsx
// No frontend
function TodoApp({ user }) {
  return (
    <div>
      <TodoList />

      {isFeatureEnabled('dark-mode', user) && (
        <DarkModeToggle />
      )}

      {isFeatureEnabled('experimental-ai', user) && (
        <AIAssistant />
      )}
    </div>
  );
}
```

### 5.4 Ferramentas de Feature Flag

| Ferramenta | Tipo | Destaque |
|------------|------|----------|
| **Azure App Configuration** | Servico Azure | Integracao nativa com Azure |
| **LaunchDarkly** | SaaS | Lider de mercado, muitos recursos |
| **Unleash** | Open Source | Self-hosted, gratuito |
| **Flagsmith** | Open Source/SaaS | Simples e flexivel |
| **Split.io** | SaaS | Foco em experimentacao |

### 5.5 Boas Praticas

1. **Limpe flags temporarios**: Feature flags que nao sao removidas viram debito tecnico
2. **Nomeie de forma descritiva**: `enable-notification-v2` > `flag-123`
3. **Documente**: Quem criou, por que existe, quando remover
4. **Teste ambos os caminhos**: Teste com flag ON e OFF
5. **Tenha um kill switch**: Para features criticas, poder desligar instantaneamente

---

## 6. A/B Testing: Duas Versoes do Castelo

### 6.1 O Que E A/B Testing

**A/B Testing** e a pratica de apresentar duas versoes diferentes de algo para diferentes grupos de usuarios, medir qual performa melhor e escolher a vencedora.

> **Analogia Mario**: Imagine que a Nintendo esta em duvida sobre o design de uma nova fase. Metade dos jogadores recebe a versao A (com mais moedas) e metade recebe a versao B (com mais power-ups). Depois de 1 semana, a Nintendo verifica qual versao os jogadores gostaram mais e adota aquela.

### 6.2 Como Funciona Tecnicamente

```javascript
// A/B Test: Botao de "Completar Tarefa"
// Versao A: Botao verde com texto "Concluir"
// Versao B: Botao azul com texto "Feito!"

function getExperimentVariant(userId, experimentId) {
  // Hash consistente — mesmo usuario sempre ve a mesma versao
  const hash = hashCode(`${userId}-${experimentId}`);
  return hash % 2 === 0 ? 'A' : 'B';
}

// No frontend
function CompleteButton({ todo, user }) {
  const variant = getExperimentVariant(user.id, 'complete-button-redesign');

  if (variant === 'A') {
    return (
      <button className="btn-green" onClick={() => completeTodo(todo.id)}>
        Concluir
      </button>
    );
  } else {
    return (
      <button className="btn-blue" onClick={() => completeTodo(todo.id)}>
        Feito!
      </button>
    );
  }
}

// Tracking
async function completeTodo(todoId) {
  await api.put(`/todos/${todoId}`, { completed: true });

  // Registrar metrica para o A/B test
  analytics.track('todo_completed', {
    experiment: 'complete-button-redesign',
    variant: getExperimentVariant(currentUser.id, 'complete-button-redesign')
  });
}
```

### 6.3 Metricas e Decisoes

| Metrica | Versao A | Versao B | Vencedora |
|---------|----------|----------|-----------|
| Taxa de clique | 45% | 52% | B |
| Tempo ate clicar | 3.2s | 2.1s | B |
| Taxa de erro | 0.5% | 0.3% | B |
| **Resultado** | | | **Versao B vence!** |

---

## 7. Rollback: O Portal de Emergencia

### 7.1 Quando Fazer Rollback

**Rollback** e reverter para a versao anterior quando algo da errado.

> **Analogia Mario**: Rollback e o **portal de emergencia** que te leva de volta ao castelo antigo. Se o castelo novo esta pegando fogo, voce nao fica tentando apagar — voce pula no portal e volta para o seguro. Depois, com calma, investiga o que deu errado.

**Indicadores para rollback imediato:**

- Taxa de erro > 5%
- Latencia > 3x do normal
- Crash loops (aplicacao reiniciando infinitamente)
- Perda de dados
- Vulnerabilidade de seguranca descoberta

### 7.2 Estrategias de Rollback

| Estrategia | Como | Velocidade | Mario |
|------------|------|------------|-------|
| **Blue-Green swap** | Trocar para ambiente anterior | Segundos | Virar a placa de direcao |
| **Redeploy versao anterior** | Fazer deploy da imagem/tag anterior | Minutos | Reconstruir o castelo antigo |
| **Git revert** | Reverter commit no Git, redeploy | Minutos | Voltar no tempo |
| **Feature flag off** | Desligar a flag da feature problematica | Segundos | Fechar a porta invisivel |
| **Kubernetes rollback** | Voltar para revision anterior | Segundos | Restaurar checkpoint |

```bash
# Kubernetes: rollback instantaneo
kubectl rollout undo deployment/todoapp

# Rollback para uma revisao especifica
kubectl rollout history deployment/todoapp
kubectl rollout undo deployment/todoapp --to-revision=3

# Azure App Service: swap de volta
az webapp deployment slot swap \
  --name todoapp-mario \
  --resource-group mushroom-kingdom \
  --slot staging \
  --target-slot production

# Docker: usar tag anterior
docker pull todoapp:v1.9.0
docker stop todoapp-current
docker run -d --name todoapp-current todoapp:v1.9.0
```

### 7.3 Rollback Automatico

```yaml
# GitHub Actions: rollback automatico se health check falha
name: Deploy with Auto-Rollback

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy nova versao
        run: |
          az webapp deployment slot swap \
            --name todoapp-mario \
            --resource-group mushroom-kingdom \
            --slot staging \
            --target-slot production

      - name: Health check (espera 60s)
        run: |
          sleep 60
          STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://todoapp-mario.azurewebsites.net/health)
          if [ "$STATUS" != "200" ]; then
            echo "Health check falhou! Status: $STATUS"
            echo "ROLLBACK_NEEDED=true" >> $GITHUB_ENV
          fi

      - name: Rollback automatico
        if: env.ROLLBACK_NEEDED == 'true'
        run: |
          echo "Executando rollback de emergencia..."
          az webapp deployment slot swap \
            --name todoapp-mario \
            --resource-group mushroom-kingdom \
            --slot staging \
            --target-slot production
          echo "Rollback completo! Versao anterior restaurada."
          exit 1  # Falhar a pipeline para alertar o time
```

### 7.4 Database Rollback: O Problema Mais Dificil

Rollback de aplicacao e simples. Rollback de banco de dados e **perigoso**.

> **Analogia Mario**: Reverter o codigo e como trocar os moveis do castelo de volta. Reverter o banco de dados e como tentar "des-construir" uma parede que voce derrubou — os tijolos nao voltam ao lugar facilmente.

**Regras para migrations seguras:**

1. **Migrations devem ser compativeis com versao anterior e nova** (forward-compatible)
2. **Nunca delete colunas imediatamente** — deprecie primeiro, delete no proximo deploy
3. **Adicione colunas como nullable** — a versao antiga nao quebra
4. **Teste rollback da migration antes de fazer deploy**

```javascript
// Migration segura: adicionar coluna
// Funciona com v1.0 E v2.0
exports.up = async (knex) => {
  await knex.schema.alterTable('todos', (table) => {
    table.string('category').nullable().defaultTo(null);
    // nullable! A versao antiga nao sabe dessa coluna, e tudo bem.
  });
};

exports.down = async (knex) => {
  await knex.schema.alterTable('todos', (table) => {
    table.dropColumn('category');
  });
};
```

---

## 8. GitOps: O Mapa E a Verdade

### 8.1 O Principio do GitOps

**GitOps** e a pratica de usar Git como **unica fonte de verdade** para a infraestrutura e deploy.

> **Analogia Mario**: No Mushroom Kingdom, o **mapa oficial** (Git) e a verdade absoluta. Se o mapa diz que o castelo tem 5 torres, o castelo DEVE ter 5 torres. Se alguem construir uma torre extra sem atualizar o mapa, a torre e demolida automaticamente. O mapa SEMPRE reflete a realidade, e a realidade SEMPRE reflete o mapa.

### 8.2 Como GitOps Funciona

```
1. Desenvolvedor faz mudanca no repositorio Git
2. Pull Request e revisado e aprovado
3. Merge para branch main
4. Agente GitOps (ArgoCD/Flux) detecta mudanca
5. Agente aplica mudancas no cluster automaticamente
6. Se o estado real divergir do Git, agente corrige automaticamente
```

```
Git (Fonte de Verdade)          Cluster (Estado Real)
┌──────────────────┐            ┌──────────────────┐
│ replicas: 3      │ ──sync──→  │ pods: 3          │
│ image: v2.0      │            │ image: v2.0      │
│ memory: 512Mi    │            │ memory: 512Mi    │
└──────────────────┘            └──────────────────┘

Se alguem mudar manualmente o cluster para 5 pods,
o GitOps detecta e REVERTE para 3 (como diz o Git).
```

---

## 9. Comparacao de Estrategias

### 9.1 Tabela Comparativa

| Estrategia | Zero Downtime | Rollback | Custo | Complexidade | Melhor Para |
|------------|:------------:|:--------:|:-----:|:------------:|-------------|
| **Big Bang** | Nao | Lento | Baixo | Baixa | Projetos simples |
| **Blue-Green** | Sim | Instantaneo | Alto | Media | Apps criticos |
| **Canary** | Sim | Rapido | Medio | Alta | Apps com muito trafego |
| **Rolling** | Sim | Medio | Baixo | Media | Kubernetes/containers |
| **Feature Flag** | Sim | Instantaneo | Baixo | Media | Features arriscadas |

### 9.2 Arvore de Decisao

```
Quanto downtime e aceitavel?
├── "Nenhum" → Usuarios sao muitos e diversos?
│              ├── SIM → Canary Deployment
│              └── NAO → Blue-Green Deployment
│
├── "Poucos segundos" → Usando Kubernetes?
│                       ├── SIM → Rolling Update
│                       └── NAO → Blue-Green
│
└── "Alguns minutos" → Big Bang (simples e funciona)
```

---

## 10. Tabela Final de Resumo

| Conceito | O Que E | Analogia Mario |
|----------|---------|----------------|
| **Blue-Green** | Dois ambientes, troca instantanea | Dois castelos, virar a placa |
| **Canary** | Liberar para poucos primeiro | Mandar Toad explorar antes |
| **Rolling** | Atualizar instancias uma a uma | Trocar guardas um por um |
| **Feature Flag** | Ligar/desligar funcionalidade | Portas invisiveis no castelo |
| **A/B Testing** | Duas versoes, medir qual e melhor | Duas fases, ver qual jogadores preferem |
| **Rollback** | Reverter para versao anterior | Portal de emergencia para o castelo antigo |
| **GitOps** | Git como fonte de verdade | Mapa oficial e a realidade |
| **Zero Downtime** | Deploy sem interrupcao | Trocar sem fechar o castelo |
| **Health Check** | Verificar se a app esta saudavel | Guarda verificando se esta tudo bem |

---

## Referencias

- [Azure App Service — Deployment Slots](https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots)
- [Kubernetes — Rolling Updates](https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/)
- [Microsoft — Canary Deployments](https://learn.microsoft.com/en-us/azure/architecture/framework/devops/release-engineering-cd#canary-deployment)
- [Martin Fowler — Feature Toggles](https://martinfowler.com/articles/feature-toggles.html)
- [Azure App Configuration — Feature Flags](https://learn.microsoft.com/en-us/azure/azure-app-configuration/concept-feature-management)
- [LaunchDarkly — Feature Flags Best Practices](https://launchdarkly.com/blog/feature-flag-best-practices/)
- [ArgoCD — GitOps](https://argo-cd.readthedocs.io/en/stable/)
- [Flux — GitOps Toolkit](https://fluxcd.io/)
- [Microsoft — Blue-Green Deployments](https://learn.microsoft.com/en-us/azure/architecture/example-scenario/blue-green-spring/blue-green-spring)

---

*Fase 4-4 completa! Voce aprendeu as principais estrategias de deploy avancado. Na proxima fase, vamos explorar Git Workflows — como organizar o fluxo de trabalho do time. Prepare-se para o Nivel 4-5!*

---

<div align="center">

⬅️ [Anterior: Fase 4-3: Arquitetura](4-3-arquitetura.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 4-5: Git Workflows](4-5-git_workflows.md)

</div>
