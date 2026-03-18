---
title: "Fase 2-7 -- Os Sentidos do Personagem: Observabilidade"
description: "Logs, metricas, alertas, Azure Monitor e Application Insights -- como monitorar a saude do seu mundo com os sentidos do Mario"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - observabilidade
  - logs
  - metricas
  - alertas
  - azure-monitor
  - application-insights
  - world-2
  - mario
---

# Fase 2-7 -- Os Sentidos do Personagem: Observabilidade

---

## Change Log

| Versao | Data       | Autor                                  | Descricao          |
|--------|------------|----------------------------------------|--------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial    |

---

## Sumario

- [Prologo: O Jogador Cego](#prologo-o-jogador-cego)
- [1. O Que e Observabilidade?](#1-o-que-e-observabilidade)
  - [1.1 Os 3 Pilares da Observabilidade](#11-os-3-pilares-da-observabilidade)
  - [1.2 Monitoramento vs Observabilidade](#12-monitoramento-vs-observabilidade)
- [2. Logs: O Diario do Mario](#2-logs-o-diario-do-mario)
  - [2.1 O Que Sao Logs?](#21-o-que-sao-logs)
  - [2.2 Niveis de Log](#22-niveis-de-log)
  - [2.3 Structured Logging: O Diario Organizado](#23-structured-logging-o-diario-organizado)
  - [2.4 O Que Logar (e o Que NAO Logar)](#24-o-que-logar-e-o-que-nao-logar)
- [3. Metricas: A Barra de Vida e o Contador de Moedas](#3-metricas-a-barra-de-vida-e-o-contador-de-moedas)
  - [3.1 O Que Sao Metricas?](#31-o-que-sao-metricas)
  - [3.2 Os 4 Golden Signals](#32-os-4-golden-signals)
  - [3.3 Metricas de Negocio vs Metricas Tecnicas](#33-metricas-de-negocio-vs-metricas-tecnicas)
  - [3.4 RED e USE: Dois Frameworks de Metricas](#34-red-e-use-dois-frameworks-de-metricas)
- [4. Traces: O Mapa da Jornada](#4-traces-o-mapa-da-jornada)
  - [4.1 O Que Sao Traces?](#41-o-que-sao-traces)
  - [4.2 Distributed Tracing: Seguindo o Toad](#42-distributed-tracing-seguindo-o-toad)
- [5. Alertas: O Jingle de Perigo](#5-alertas-o-jingle-de-perigo)
  - [5.1 O Que Sao Alertas?](#51-o-que-sao-alertas)
  - [5.2 Configurando Alertas Inteligentes](#52-configurando-alertas-inteligentes)
  - [5.3 Alert Fatigue: O Menino que Gritava Lobo](#53-alert-fatigue-o-menino-que-gritava-lobo)
- [6. Dashboards: A Tela de Pause](#6-dashboards-a-tela-de-pause)
  - [6.1 O Que e um Dashboard?](#61-o-que-e-um-dashboard)
  - [6.2 Dashboard Ideal para o TodoApp](#62-dashboard-ideal-para-o-todoapp)
- [7. Azure Monitor: O Centro de Comando](#7-azure-monitor-o-centro-de-comando)
  - [7.1 O Que e Azure Monitor?](#71-o-que-e-azure-monitor)
  - [7.2 Componentes do Azure Monitor](#72-componentes-do-azure-monitor)
- [8. Application Insights: O Raio-X da Aplicacao](#8-application-insights-o-raio-x-da-aplicacao)
  - [8.1 O Que e Application Insights?](#81-o-que-e-application-insights)
  - [8.2 Configurando no TodoApp](#82-configurando-no-todoapp)
  - [8.3 O Que Voce Ganha Automaticamente](#83-o-que-voce-ganha-automaticamente)
- [9. Pratica: Implementando Observabilidade no TodoApp](#9-pratica-implementando-observabilidade-no-todoapp)
  - [9.1 Adicionando Logs Estruturados](#91-adicionando-logs-estruturados)
  - [9.2 Metricas Custom](#92-metricas-custom)
  - [9.3 Health Checks](#93-health-checks)
- [10. Tabela Final de Resumo](#10-tabela-final-de-resumo)
- [Referencias](#referencias)

---

## Prologo: O Jogador Cego

O TodoApp da Sofia estava em producao havia uma semana. Tudo parecia tranquilo. Ate que o telefone tocou.

*"Sofia, o app esta lento!"* reclamou um usuario.

Sofia abriu o app. Para ela, funcionava normalmente. *"Estranho, aqui esta rapido..."*

Trinta minutos depois, outro usuario: *"Nao consigo salvar tarefas!"*

Sofia tentou salvar uma tarefa. Funcionou. *"Que estranho..."*

Uma hora depois, DEZ usuarios reclamando. Sofia entrou em panico. Ela nao sabia:
- Quantos usuarios estavam sendo afetados?
- Qual era o erro exato?
- Quando comecou?
- O que causou?

Ela estava **cega**. O app estava doente, mas ela nao tinha como ver os sintomas.

Yoshi apareceu e diagnosticou o problema em 2 minutos. *"O banco de dados esta com 98% de CPU porque uma query esta travando. Comecou as 14:32 quando voce fez aquele deploy."*

*"Como voce sabe tudo isso?!"* perguntou Sofia, espantada.

Yoshi mostrou seu **dashboard** -- uma tela cheia de graficos, numeros e indicadores.

*"Esses sao os **sentidos** do seu app, Sofia. Sem eles, voce e como o Mario jogando com a tela desligada. Voce nao ve inimigos, nao ve buracos, nao ve o timer acabando. Voce precisa de **observabilidade**."*

---

## 1. O Que e Observabilidade?

**Observabilidade** e a capacidade de entender o estado interno de um sistema a partir de seus dados externos (logs, metricas, traces).

Em termos simples: e a capacidade de responder **qualquer pergunta** sobre seu sistema, mesmo perguntas que voce nao previu.

> **ANALOGIA MARIO:** Observabilidade e como os **sentidos do Mario** durante o jogo. Os olhos veem inimigos e obstaculos (logs). A barra de vida mostra saude, moedas e tempo (metricas). O jingle de perigo avisa quando o tempo esta acabando (alertas). A tela de pause mostra todas as estatisticas (dashboard). Sem esses sentidos, Mario esta cego, surdo e mudo -- correndo no escuro.

### 1.1 Os 3 Pilares da Observabilidade

| Pilar | O que E | Analogia Mario | Exemplo |
|-------|---------|----------------|---------|
| **Logs** | Registro detalhado de eventos | Diario do Mario: "14:32 - Entrei no World 2. 14:33 - Pisei num Goomba." | `[ERROR] 14:32:15 - Falha ao conectar banco de dados` |
| **Metricas** | Numeros que representam o estado do sistema | Barra de vida + contador de moedas + timer | CPU: 87%, Memoria: 4.2GB, Requests/s: 342 |
| **Traces** | Caminho completo de uma requisicao | Mapa mostrando por onde Mario passou na fase | Request -> API -> DB -> Cache -> Response (250ms) |


### 1.2 Monitoramento vs Observabilidade

| Aspecto | Monitoramento | Observabilidade |
|---------|-------------|-----------------|
| **Pergunta** | "O sistema esta funcionando?" | "POR QUE o sistema nao esta funcionando?" |
| **Abordagem** | Verifica coisas CONHECIDAS | Permite investigar coisas DESCONHECIDAS |
| **Analogia Mario** | Olhar se Mario esta vivo ou morto | Entender POR QUE Mario morreu (inimigo? buraco? tempo?) |
| **Exemplo** | Alerta: "Servidor fora do ar" | Investigacao: "O servidor caiu porque a query X travou o banco" |

---

## 2. Logs: O Diario do Mario

### 2.1 O Que Sao Logs?

**Logs** sao registros textuais de eventos que acontecem no sistema. Cada log e uma "anotacao no diario" com timestamp, nivel, e mensagem.

```
2026-03-18T14:32:15.123Z [INFO]  Servidor iniciado na porta 3000
2026-03-18T14:32:16.456Z [INFO]  Conexao com banco de dados estabelecida
2026-03-18T14:33:01.789Z [WARN]  Query lenta detectada: 1.5s (limite: 1.0s)
2026-03-18T14:33:45.012Z [ERROR] Falha ao salvar tarefa: connection timeout
2026-03-18T14:34:00.345Z [ERROR] Banco de dados nao responde apos 3 tentativas
```

> **ANALOGIA MARIO:** Logs sao o **diario de aventura do Mario**. Cada linha e uma entrada: "14:32 - Entrei no World 2-1. 14:33 - Pisei num Goomba e ganhei 100 pontos. 14:34 - CUIDADO! Quase cai no buraco. 14:35 - ERRO! Fui atingido por um Hammer Bro, perdi 1 vida." Quando algo da errado, voce abre o diario e investiga o que aconteceu.

### 2.2 Niveis de Log

| Nivel | Quando Usar | Analogia Mario | Cor |
|-------|------------|----------------|-----|
| **DEBUG** | Detalhes tecnicos para desenvolvedores | Coordenadas exatas de cada passo do Mario | Cinza |
| **INFO** | Eventos normais e esperados | "Mario entrou no World 2" "Mario pegou moeda" | Verde |
| **WARN** | Algo suspeito, mas nao critico | "Mario com apenas 1 vida restante" | Amarelo |
| **ERROR** | Algo deu errado, afeta funcionalidade | "Mario caiu no buraco!" | Vermelho |
| **FATAL** | Sistema vai cair/parar | "Game Over -- todas as vidas perdidas" | Vermelho escuro |

```javascript
// Exemplos no codigo:
const logger = require('winston');

// DEBUG -- detalhe tecnico
logger.debug('Query executada: SELECT * FROM tarefas WHERE user_id=42');

// INFO -- evento normal
logger.info('Tarefa criada com sucesso', { tarefaId: 123, userId: 42 });

// WARN -- atencao
logger.warn('Query lenta detectada', { duracao: '1.5s', query: 'SELECT...' });

// ERROR -- algo deu errado
logger.error('Falha ao salvar tarefa', { erro: 'Connection timeout', tarefaId: 123 });

// FATAL -- sistema caindo
logger.fatal('Banco de dados inacessivel. Encerrando aplicacao.');
```

### 2.3 Structured Logging: O Diario Organizado

**Logs estruturados** usam formato JSON em vez de texto puro, facilitando busca e analise:

```json
// Log estruturado (BOM -- facil de filtrar e buscar)
{
  "timestamp": "2026-03-18T14:33:45.012Z",
  "level": "error",
  "message": "Falha ao salvar tarefa",
  "service": "todoapp-api",
  "traceId": "abc-123-def-456",
  "userId": 42,
  "tarefaId": 123,
  "erro": "Connection timeout",
  "duracao_ms": 5023
}

// Log nao estruturado (RUIM -- dificil de filtrar)
// "2026-03-18 14:33:45 ERROR - Falha ao salvar tarefa 123 do usuario 42: timeout"
```

> **ANALOGIA MARIO:** Log estruturado e como um diario **bem organizado com tabelas**: Data, Local, Evento, Resultado. Log nao estruturado e um diario rabiscado onde voce escreve tudo corrido e depois nao encontra nada.

### 2.4 O Que Logar (e o Que NAO Logar)

| LOGAR | NAO LOGAR |
|-------|-----------|
| Requisicoes recebidas | Senhas e tokens |
| Erros e excecoes | Dados pessoais (CPF, cartao) |
| Tempo de resposta | Informacoes medicas |
| Acoes do usuario (o que, nao dados) | Conteudo completo de requisicoes |
| Conexoes e desconexoes | API Keys e secrets |
| Mudancas de estado | Dados de cartao de credito |

---

## 3. Metricas: A Barra de Vida e o Contador de Moedas

### 3.1 O Que Sao Metricas?

**Metricas** sao valores numericos que representam o estado do sistema ao longo do tempo. Sao coletadas em intervalos regulares e armazenadas como series temporais.

```
Metrica: cpu_percent
  14:30 -> 45%
  14:31 -> 47%
  14:32 -> 62%
  14:33 -> 87%   <-- Algo esta errado!
  14:34 -> 98%   <-- ALERTA!
  14:35 -> 95%
```

> **ANALOGIA MARIO:** Metricas sao a **HUD (Heads-Up Display)** do Mario -- as informacoes que aparecem na tela o tempo todo: **barra de vida** (CPU), **contador de moedas** (requests por segundo), **timer** (tempo de resposta), **contador de vidas** (instancias disponiveis). Voce olha para esses numeros e sabe instantaneamente como esta o jogo.

### 3.2 Os 4 Golden Signals

O Google definiu os **4 Golden Signals** -- as 4 metricas mais importantes para qualquer servico:

| Signal | O que Mede | Analogia Mario | Exemplo |
|--------|-----------|----------------|---------|
| **Latency** | Tempo de resposta | Tempo que o Mario leva para completar a fase | API responde em 200ms |
| **Traffic** | Volume de requisicoes | Quantos jogadores estao jogando | 500 requests por segundo |
| **Errors** | Taxa de erros | Quantas vezes o Mario morre | 2% das requisicoes falham |
| **Saturation** | Quao cheio o sistema esta | Quantos inimigos na tela ao mesmo tempo | CPU em 85%, memoria em 70% |

### 3.3 Metricas de Negocio vs Metricas Tecnicas

| Tipo | Exemplos | Analogia Mario | Quem Olha |
|------|---------|----------------|-----------|
| **Tecnicas** | CPU, memoria, disco, latencia | Saude do console (fps, temperatura) | Engenheiros |
| **Negocio** | Usuarios ativos, tarefas criadas, revenue | Numero de jogadores, fases completadas, moedas | Produto/Negocio |

```
Metricas Tecnicas do TodoApp:
  cpu_percent: 45%
  memory_used_mb: 512
  requests_per_second: 342
  error_rate: 0.5%
  p95_latency_ms: 180

Metricas de Negocio do TodoApp:
  usuarios_ativos_agora: 1.234
  tarefas_criadas_hoje: 5.678
  tarefas_concluidas_hoje: 3.456
  taxa_de_conclusao: 61%
  novos_usuarios_hoje: 89
```

### 3.4 RED e USE: Dois Frameworks de Metricas

**RED Method** (para servicos):
- **R**ate: Quantas requisicoes por segundo?
- **E**rrors: Quantas falham?
- **D**uration: Quanto tempo demoram?

**USE Method** (para recursos):
- **U**tilization: Quao ocupado esta? (CPU 85%)
- **S**aturation: Ha fila de espera? (Queue: 50 items)
- **E**rrors: Algo esta falhando? (Disk errors: 3)

---

## 4. Traces: O Mapa da Jornada

### 4.1 O Que Sao Traces?

Um **trace** e o registro do caminho completo que uma requisicao percorre pelo sistema, com o tempo gasto em cada etapa.

```
Trace ID: abc-123-def-456
Total: 250ms

[Browser] --(15ms)--> [API Gateway] --(5ms)--> [Auth Service]
                           |
                           +--(30ms)--> [Todo Service] --(150ms)--> [PostgreSQL]
                                              |
                                              +--(20ms)--> [Cache Redis]
                           |
                           +--(30ms)--> [Response formatado e enviado]
```

> **ANALOGIA MARIO:** Um trace e o **mapa mostrando por onde Mario passou** durante a fase, com o tempo gasto em cada trecho: "Entrou pelo cano (15ms), correu pela area dos Goombas (30ms), PAROU na sala do Toad (150ms -- GARGALO!), pegou o item (20ms), saiu pelo mastro (30ms). Tempo total: 250ms. O gargalo foi a sala do Toad -- precisa investigar."

### 4.2 Distributed Tracing: Seguindo o Toad

Em sistemas com muitos servicos (microservicos), uma unica requisicao pode passar por 5, 10, 20 servicos diferentes. **Distributed Tracing** segue essa requisicao por TODOS os servicos.

```
Requisicao "Criar Tarefa":
  [Frontend] -> [API Gateway] -> [Auth] -> [TodoService] -> [DB] -> [Notification]

Sem tracing: "A tarefa demorou 5 segundos. Onde esta o problema?"
             Ninguem sabe.

Com tracing: "A tarefa demorou 5 segundos.
              Frontend: 50ms
              API Gateway: 10ms
              Auth: 30ms
              TodoService: 100ms
              DB: 4700ms  <-- O PROBLEMA ESTA AQUI!
              Notification: 110ms"
```

---

## 5. Alertas: O Jingle de Perigo

### 5.1 O Que Sao Alertas?

**Alertas** sao notificacoes automaticas disparadas quando uma metrica ultrapassa um limite definido.

```
Regra de Alerta:
  SE cpu_percent > 90% POR MAIS DE 5 minutos
  ENTAO envia notificacao para o time

Regra de Alerta:
  SE error_rate > 5% POR MAIS DE 2 minutos
  ENTAO envia notificacao URGENTE + liga para o plantonista
```

> **ANALOGIA MARIO:** Alertas sao o **jingle de perigo** do Mario. Quando o timer esta acabando, a musica acelera -- ALERTA! Quando Mario tem 1 vida, o jogo muda o tom -- ATENCAO! Voce nao precisa ficar olhando os numeros o tempo todo; o proprio sistema AVISA quando algo esta errado.

### 5.2 Configurando Alertas Inteligentes

| Metrica | Limite Warning | Limite Critico | Acao |
|---------|---------------|----------------|------|
| CPU | > 70% por 10 min | > 90% por 5 min | Slack + Email |
| Memoria | > 80% por 10 min | > 95% por 5 min | Slack + Email + Pager |
| Error Rate | > 2% por 5 min | > 5% por 2 min | Slack + Pager |
| Latencia P95 | > 500ms por 10 min | > 2s por 5 min | Slack + Email |
| Disco | > 80% | > 90% | Email |
| Health Check | 1 falha | 3 falhas consecutivas | Pager + Auto-restart |

### 5.3 Alert Fatigue: O Menino que Gritava Lobo

**Alert Fatigue** e quando voce tem TANTOS alertas que o time para de prestar atencao. E o equivalente ao menino que gritava "Lobo!" toda hora.

**Sintomas de Alert Fatigue:**
- Time ignora alertas no Slack
- "Ah, e so aquele alerta de sempre..."
- Alerta critico perdido entre 50 alertas insignificantes

**Como evitar:**
1. **Poucos alertas, bem calibrados** -- so alerte quando PRECISA de acao humana
2. **Niveis claros** -- Warning (pode esperar) vs Critico (precisa agir AGORA)
3. **Agrupe alertas** -- 10 alertas do mesmo problema viram 1
4. **Revise regularmente** -- delete alertas que nunca levam a acao

> **ANALOGIA MARIO:** Se o jingle de perigo tocasse a CADA segundo, Mario pararia de prestar atencao. O jingle so toca quando o timer REALMENTE esta acabando -- raramente, e quando toca, voce SABE que precisa correr. Alertas bons sao assim: raros, significativos e acionaveis.

---

## 6. Dashboards: A Tela de Pause

### 6.1 O Que e um Dashboard?

Um **dashboard** e uma tela visual que mostra as metricas mais importantes do seu sistema em tempo real. E como a tela de pause do Mario que mostra todas as estatisticas.

> **ANALOGIA MARIO:** O dashboard e a **tela de pause** do jogo. Quando voce aperta PAUSE, ve: vidas restantes, moedas coletadas, tempo restante, mundo atual, power-ups ativos. Um dashboard faz a mesma coisa para sua aplicacao: mostra saude, performance, erros e uso -- tudo num unico olhar.

### 6.2 Dashboard Ideal para o TodoApp

```
+================================================================+
|                    TodoApp -- Dashboard                         |
+================================================================+
|                                                                |
|  SAUDE GERAL: [===VERDE===]  Tudo OK                         |
|                                                                |
+----------------+----------------+----------------+--------------+
| Usuarios       | Requests/s     | Error Rate     | Latencia P95 |
| Ativos: 1.234  | 342 req/s      | 0.5%           | 180ms        |
| [grafico]      | [grafico]      | [grafico]      | [grafico]    |
+----------------+----------------+----------------+--------------+
|                                                                |
| CPU: [====45%====         ]  Memoria: [========72%=====      ] |
| Disco: [==30%=              ]  Conexoes DB: 23/100            |
|                                                                |
+----------------------------------------------------------------+
|                                                                |
| ULTIMOS ERROS:                                                 |
| 14:33:45 [ERROR] Timeout ao salvar tarefa (userId: 42)        |
| 14:31:12 [WARN]  Query lenta: 1.5s (tarefas por status)      |
| 14:28:00 [INFO]  Deploy v2.3.1 realizado com sucesso          |
|                                                                |
+----------------------------------------------------------------+
| METRICAS DE NEGOCIO:                                          |
| Tarefas criadas hoje: 5.678  | Concluidas: 3.456 (61%)       |
| Novos usuarios: 89           | Retencao 7 dias: 72%          |
+----------------------------------------------------------------+
```

---

## 7. Azure Monitor: O Centro de Comando

### 7.1 O Que e Azure Monitor?

**Azure Monitor** e a plataforma completa de monitoramento da Microsoft Azure. E o "centro de comando" que coleta, analisa e visualiza dados de toda a infraestrutura.

> **ANALOGIA MARIO:** Azure Monitor e o **centro de controle do Mushroom Kingdom** -- uma sala com telas mostrando TODOS os mundos simultaneamente. Operadores (Lakitus) observam tudo: saude dos castelos, trafego nos canos, inimigos invadindo, recursos acabando. Se algo da errado em qualquer mundo, o centro de controle sabe primeiro.

### 7.2 Componentes do Azure Monitor

| Componente | O que Faz | Analogia Mario |
|-----------|---------|----------------|
| **Metrics** | Coleta e exibe metricas numericas | Os contadores na HUD do jogo |
| **Logs (Log Analytics)** | Armazena e consulta logs com KQL | A biblioteca de diarios de todos os Toads |
| **Alerts** | Dispara notificacoes automaticas | O sistema de alarme do castelo |
| **Dashboards** | Telas visuais customizaveis | A tela de pause personalizada |
| **Application Insights** | Monitoramento profundo de aplicacoes | Raio-X detalhado do Mario |
| **Workbooks** | Relatorios interativos | Relatorios semanais do reino |

**Exemplo de query KQL (Kusto Query Language):**

```kusto
// Encontrar erros nos ultimos 30 minutos
traces
| where timestamp > ago(30m)
| where severityLevel >= 3  // ERROR e FATAL
| project timestamp, message, customDimensions
| order by timestamp desc
| take 50

// Calcular taxa de erro por hora
requests
| summarize
    totalRequests = count(),
    failedRequests = countif(success == false),
    errorRate = round(100.0 * countif(success == false) / count(), 2)
  by bin(timestamp, 1h)
| order by timestamp desc
```

---

## 8. Application Insights: O Raio-X da Aplicacao

### 8.1 O Que e Application Insights?

**Application Insights** e um servico do Azure Monitor especifico para monitorar aplicacoes. Ele coleta automaticamente:

- Requisicoes HTTP (tempo de resposta, status codes)
- Excecoes e erros
- Dependencias (banco de dados, APIs externas)
- Performance do navegador (frontend)
- Traces distribuidos

> **ANALOGIA MARIO:** Se Azure Monitor e o centro de controle do reino inteiro, Application Insights e o **raio-X detalhado do Mario** -- mostra TUDO que esta acontecendo internamente: batimentos cardiacos (requests), ossos quebrados (erros), temperatura (CPU), fluxo sanguineo (traces entre servicos).

### 8.2 Configurando no TodoApp

```javascript
// 1. Instalar o pacote
// npm install applicationinsights

// 2. Configurar no inicio da aplicacao
const appInsights = require('applicationinsights');
appInsights.setup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING)
  .setAutoCollectRequests(true)       // Coleta requisicoes automaticamente
  .setAutoCollectPerformance(true)    // Coleta metricas de performance
  .setAutoCollectExceptions(true)     // Coleta excecoes
  .setAutoCollectDependencies(true)   // Coleta chamadas a banco, APIs, etc.
  .setAutoCollectConsole(true)        // Coleta console.log como traces
  .start();

// 3. Pronto! Application Insights ja esta monitorando tudo.

// 4. Opcionalmente, adicione telemetria custom:
const client = appInsights.defaultClient;

// Registrar evento custom
client.trackEvent({
  name: "TarefaCriada",
  properties: { userId: "42", prioridade: "alta" }
});

// Registrar metrica custom
client.trackMetric({
  name: "TarefasPendentes",
  value: 23
});
```

### 8.3 O Que Voce Ganha Automaticamente

```
Apos configurar Application Insights, voce ganha DE GRACA:

+------------------------------------------+
| Application Map                          |
| (mapa visual de todos os servicos        |
|  e suas dependencias)                    |
+------------------------------------------+

+------------------------------------------+
| Live Metrics                             |
| (metricas em tempo real --               |
|  requests, erros, CPU, memoria)          |
+------------------------------------------+

+------------------------------------------+
| Failure Analysis                         |
| (analise automatica de erros --          |
|  agrupa por tipo, mostra tendencias)     |
+------------------------------------------+

+------------------------------------------+
| Performance Analysis                     |
| (identifica operacoes lentas e           |
|  gargalos automaticamente)              |
+------------------------------------------+

+------------------------------------------+
| Smart Detection                          |
| (IA que detecta anomalias               |
|  antes de voce perceber)                |
+------------------------------------------+
```

---

## 9. Pratica: Implementando Observabilidade no TodoApp

### 9.1 Adicionando Logs Estruturados

```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()  // Logs estruturados!
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

// Usando nos endpoints:
app.post('/tarefas', (req, res) => {
  const inicio = Date.now();

  logger.info('Criando tarefa', {
    userId: req.user.id,
    titulo: req.body.titulo
  });

  try {
    const tarefa = criarTarefa(req.body);
    const duracao = Date.now() - inicio;

    logger.info('Tarefa criada com sucesso', {
      tarefaId: tarefa.id,
      userId: req.user.id,
      duracao_ms: duracao
    });

    res.status(201).json(tarefa);
  } catch (erro) {
    logger.error('Falha ao criar tarefa', {
      userId: req.user.id,
      erro: erro.message,
      stack: erro.stack,
      duracao_ms: Date.now() - inicio
    });

    res.status(500).json({ erro: 'Erro interno' });
  }
});
```

### 9.2 Metricas Custom

```javascript
const client = require('prom-client');

// Contador de tarefas criadas
const tarefasCriadas = new client.Counter({
  name: 'todoapp_tarefas_criadas_total',
  help: 'Total de tarefas criadas',
  labelNames: ['prioridade']
});

// Histograma de tempo de resposta
const tempoResposta = new client.Histogram({
  name: 'todoapp_request_duration_seconds',
  help: 'Tempo de resposta das requisicoes',
  labelNames: ['metodo', 'rota', 'status'],
  buckets: [0.05, 0.1, 0.25, 0.5, 1, 2.5, 5]
});

// Gauge de tarefas pendentes (sobe e desce)
const tarefasPendentes = new client.Gauge({
  name: 'todoapp_tarefas_pendentes',
  help: 'Numero atual de tarefas pendentes'
});

// Usando:
app.post('/tarefas', (req, res) => {
  const timer = tempoResposta.startTimer();

  // ... criar tarefa ...

  tarefasCriadas.inc({ prioridade: req.body.prioridade || 'normal' });
  tarefasPendentes.inc();
  timer({ metodo: 'POST', rota: '/tarefas', status: '201' });
});
```

### 9.3 Health Checks

**Health Checks** sao endpoints que indicam se a aplicacao esta saudavel:

```javascript
// Health check basico
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.APP_VERSION || '1.0.0',
    uptime: process.uptime()
  });
});

// Health check detalhado (verifica dependencias)
app.get('/health/detailed', async (req, res) => {
  const checks = {
    database: await checkDatabase(),
    redis: await checkRedis(),
    externalApi: await checkExternalApi()
  };

  const allHealthy = Object.values(checks).every(c => c.status === 'up');

  res.status(allHealthy ? 200 : 503).json({
    status: allHealthy ? 'healthy' : 'degraded',
    timestamp: new Date().toISOString(),
    checks
  });
});

// Funcoes de verificacao
async function checkDatabase() {
  try {
    await db.query('SELECT 1');
    return { status: 'up', latency: '5ms' };
  } catch (e) {
    return { status: 'down', error: e.message };
  }
}
```

> **ANALOGIA MARIO:** Health Checks sao como o **teste rapido** que Mario faz antes de comecar a fase: "Tenho vidas? Check. Power-up ativo? Check. Timer funcionando? Check. Controles respondendo? Check. Tudo OK -- vamos jogar!" Se algo falhar no check, melhor investigar antes de comecar.

---

## 10. Tabela Final de Resumo

| Conceito | Explicacao Tecnica | Analogia Mario |
|----------|-------------------|----------------|
| **Observabilidade** | Capacidade de entender o estado interno do sistema | Os sentidos do Mario durante o jogo |
| **Logs** | Registro textual de eventos | Diario de aventura do Mario |
| **Metricas** | Valores numericos ao longo do tempo | Barra de vida + moedas + timer (HUD) |
| **Traces** | Caminho completo de uma requisicao | Mapa de por onde Mario passou na fase |
| **Alertas** | Notificacoes automaticas ao ultrapassar limites | Jingle de perigo quando o tempo acaba |
| **Dashboard** | Tela visual com metricas em tempo real | Tela de pause mostrando todas as stats |
| **Azure Monitor** | Plataforma completa de monitoramento | Centro de controle do Mushroom Kingdom |
| **Application Insights** | Monitoramento profundo de aplicacoes | Raio-X detalhado do Mario |
| **Health Check** | Endpoint que verifica saude da aplicacao | Teste rapido antes de comecar a fase |
| **4 Golden Signals** | Latencia, Trafego, Erros, Saturacao | Tempo de fase, jogadores ativos, mortes, inimigos na tela |
| **KQL** | Linguagem de consulta de logs no Azure | Consulta na biblioteca de diarios |
| **Alert Fatigue** | Excesso de alertas que leva a ignorar todos | Jingle de perigo tocando o tempo todo |
| **Structured Logging** | Logs em formato JSON organizadao | Diario com tabelas organizadas |

---

## Referencias

1. Microsoft Learn -- Azure Monitor: https://learn.microsoft.com/azure/azure-monitor/
2. Microsoft Learn -- Application Insights: https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview
3. Google SRE Book -- Monitoring: https://sre.google/sre-book/monitoring-distributed-systems/
4. OpenTelemetry: https://opentelemetry.io/
5. Grafana: https://grafana.com/
6. Winston (Node.js logger): https://github.com/winstonjs/winston
7. The 4 Golden Signals: https://sre.google/sre-book/monitoring-distributed-systems/#xref_monitoring_golden-signals

---

*"No Mario, a tela te mostra TUDO que voce precisa saber: vidas, moedas, tempo, power-ups. Imagine jogar com a tela desligada -- impossivel. Observabilidade e a 'tela ligada' do seu software. Sem ela, voce esta jogando no escuro."*

---

<div align="center">

⬅️ [Anterior: Fase 2-6: DevOps](2-6-devops.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 2-BOSS: Exercicios](2-BOSS-exercicios.md)

</div>
