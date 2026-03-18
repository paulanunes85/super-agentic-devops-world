---
title: "Fase 4-8 -- Correio do Mushroom Kingdom: Mensageria e Filas"
description: "Message queues, RabbitMQ, Azure Service Bus, pub/sub, comunicacao assincrona e dead letter queues — o sistema postal do Mushroom Kingdom"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agentic-devops
  - mario
  - world-4
  - mensageria
  - filas
  - rabbitmq
  - service-bus
  - pub-sub
  - async
---

# Fase 4-8 -- Correio do Mushroom Kingdom: Mensageria e Filas

---

## Change Log

| Versao | Data       | Autor                                  | Descricao          |
|--------|------------|----------------------------------------|--------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial    |

---

## Sumario

- [Prologo: O Problema das Entregas Diretas](#prologo-o-problema-das-entregas-diretas)
- [1. Comunicacao Sincrona vs Assincrona](#1-comunicacao-sincrona-vs-assincrona)
  - [1.1 O Problema da Comunicacao Sincrona](#11-o-problema-da-comunicacao-sincrona)
  - [1.2 A Solucao: Comunicacao Assincrona](#12-a-solucao-comunicacao-assincrona)
  - [1.3 Quando Usar Cada Uma](#13-quando-usar-cada-uma)
- [2. Message Queues: Parakoopas Carteiros](#2-message-queues-parakoopas-carteiros)
  - [2.1 O Que E uma Fila de Mensagens](#21-o-que-e-uma-fila-de-mensagens)
  - [2.2 Como Funciona](#22-como-funciona)
  - [2.3 Garantias de Entrega](#23-garantias-de-entrega)
  - [2.4 Quando Usar Filas](#24-quando-usar-filas)
- [3. RabbitMQ: O Correio Central](#3-rabbitmq-o-correio-central)
  - [3.1 O Que E RabbitMQ](#31-o-que-e-rabbitmq)
  - [3.2 Conceitos Fundamentais](#32-conceitos-fundamentais)
  - [3.3 Tipos de Exchange](#33-tipos-de-exchange)
  - [3.4 RabbitMQ na Pratica: TodoApp](#34-rabbitmq-na-pratica-todoapp)
  - [3.5 RabbitMQ com Docker](#35-rabbitmq-com-docker)
- [4. Azure Service Bus: O Correio Real Express](#4-azure-service-bus-o-correio-real-express)
  - [4.1 O Que E Azure Service Bus](#41-o-que-e-azure-service-bus)
  - [4.2 Queues vs Topics](#42-queues-vs-topics)
  - [4.3 Azure Service Bus na Pratica](#43-azure-service-bus-na-pratica)
  - [4.4 Quando Escolher Service Bus vs RabbitMQ](#44-quando-escolher-service-bus-vs-rabbitmq)
- [5. Pub/Sub: O Quadro de Avisos](#5-pubsub-o-quadro-de-avisos)
  - [5.1 O Padrao Publish/Subscribe](#51-o-padrao-publishsubscribe)
  - [5.2 Pub/Sub vs Queue](#52-pubsub-vs-queue)
  - [5.3 Implementacao Pratica](#53-implementacao-pratica)
  - [5.4 Event-Driven com Pub/Sub](#54-event-driven-com-pubsub)
- [6. Dead Letter Queue: Correio Devolvido](#6-dead-letter-queue-correio-devolvido)
  - [6.1 O Que E Dead Letter Queue](#61-o-que-e-dead-letter-queue)
  - [6.2 Quando Mensagens Vao para DLQ](#62-quando-mensagens-vao-para-dlq)
  - [6.3 Tratando Dead Letters](#63-tratando-dead-letters)
- [7. Padroes de Mensageria](#7-padroes-de-mensageria)
  - [7.1 Request-Reply](#71-request-reply)
  - [7.2 Competing Consumers](#72-competing-consumers)
  - [7.3 Saga Pattern](#73-saga-pattern)
  - [7.4 Outbox Pattern](#74-outbox-pattern)
- [8. Mensageria na Pratica: TodoApp Completo](#8-mensageria-na-pratica-todoapp-completo)
  - [8.1 Arquitetura com Mensageria](#81-arquitetura-com-mensageria)
  - [8.2 Fluxo Completo: Criar Tarefa](#82-fluxo-completo-criar-tarefa)
  - [8.3 Fluxo Completo: Completar Tarefa](#83-fluxo-completo-completar-tarefa)
- [9. Boas Praticas de Mensageria](#9-boas-praticas-de-mensageria)
  - [9.1 Idempotencia](#91-idempotencia)
  - [9.2 Ordering e Deduplication](#92-ordering-e-deduplication)
  - [9.3 Monitoramento](#93-monitoramento)
- [10. Tabela Final de Resumo](#10-tabela-final-de-resumo)
- [Referencias](#referencias)

---

## Prologo: O Problema das Entregas Diretas

O TodoApp de Sofia agora tinha multiplos servicos: autenticacao, tarefas, notificacoes e relatorios. Mas toda vez que um usuario criava uma tarefa, o Todo Service precisava chamar diretamente o Notification Service para enviar email E o Analytics Service para registrar a metrica.

Problema: se o Notification Service estivesse fora do ar, a criacao da tarefa **falhava inteira**. O usuario nao conseguia criar tarefa so porque o servico de email estava com problemas.

Yoshi desenhou um diagrama no quadro.

*"Sofia, imagine que no Mushroom Kingdom, toda vez que Mario quer mandar uma carta para Luigi, Mario precisa ir PESSOALMENTE ate a casa do Luigi, entregar a carta na mao e esperar Luigi ler. Se Luigi nao estiver em casa, Mario fica parado na porta. Nao pode fazer mais nada ate Luigi aparecer."*

*"Isso e ridiculo!"* disse Sofia.

*"Exatamente. E por isso que existe o **correio**. Mario coloca a carta na caixa do correio. O **Parakoopa carteiro** pega a carta e entrega para Luigi quando puder. Mario segue sua vida. Luigi le quando estiver disponivel. Se Luigi nao estiver em casa, o carteiro tenta de novo mais tarde."*

*"Isso e **mensageria** — sistemas de filas de mensagens que desacoplam quem envia de quem recebe."*

---

## 1. Comunicacao Sincrona vs Assincrona

### 1.1 O Problema da Comunicacao Sincrona

Na comunicacao **sincrona**, o remetente espera a resposta do destinatario antes de continuar.

```
SINCRONO:
  Todo Service ──[cria tarefa]──→ Notification Service ──[envia email]──→ Resposta
       │                                    │                               │
       │          ESPERANDO...              │         PROCESSANDO...         │
       │←─────── Bloqueado ────────────────→│←──────── 2 segundos ─────────→│
       │                                                                     │
       └──────── Total: 2.5 segundos (usuario esperando) ──────────────────→│

  Se Notification Service estiver FORA DO AR:
  Todo Service ──[cria tarefa]──→ Notification Service ──→ TIMEOUT (30s) ──→ ERRO!
       │                                                                     │
       └──────── Tarefa NAO foi criada. Usuario frustrado. ─────────────────→│
```

### 1.2 A Solucao: Comunicacao Assincrona

Na comunicacao **assincrona**, o remetente envia a mensagem e segue em frente, sem esperar resposta.

```
ASSINCRONO:
  Todo Service ──[cria tarefa]──→ Fila ──→ Resposta ao usuario (200ms)
       │                           │
       │    LIVRE!                 └──→ Notification Service ──[envia email]
       │                           └──→ Analytics Service ──[registra metrica]
       │
       └── Total para o usuario: 200ms (10x mais rapido!)

  Se Notification Service estiver FORA DO AR:
  Todo Service ──[cria tarefa]──→ Fila ──→ Resposta ao usuario (200ms) ✅
       │                           │
       │    Tarefa CRIADA!         └──→ Mensagem ESPERA na fila
       │                                 └──→ Quando Notification voltar, processa
```

### 1.3 Quando Usar Cada Uma

| Cenario | Sincrono | Assincrono |
|---------|:--------:|:----------:|
| Login (precisa da resposta imediata) | Sim | |
| Enviar email apos criar tarefa | | Sim |
| Buscar lista de tarefas | Sim | |
| Gerar relatorio PDF | | Sim |
| Validar dados do formulario | Sim | |
| Processar pagamento | Sim* | |
| Sincronizar dados entre servicos | | Sim |
| Notificacoes push | | Sim |

*Pagamento e sincrono ate a confirmacao, assincrono para notificacoes posteriores.

---

## 2. Message Queues: Parakoopas Carteiros

### 2.1 O Que E uma Fila de Mensagens

Uma **Message Queue** e um mecanismo de comunicacao assincrona onde mensagens sao armazenadas em uma fila ate serem processadas.

> **Analogia Mario**: Uma fila de mensagens e como uma fila de **Parakoopas carteiros**. Cada carta (mensagem) e colocada na fila. Os Parakoopas pegam as cartas em ordem (FIFO — First In, First Out) e entregam uma por uma. Se o destinatario nao estiver em casa, o Parakoopa guarda a carta e tenta novamente depois.


### 2.2 Como Funciona

```
Producer           Queue              Consumer
(Remetente)        (Fila/Correio)     (Destinatario)

┌──────────┐      ┌──────────────┐    ┌──────────┐
│ Todo Svc │─────→│ [msg1][msg2] │───→│ Email Svc│
└──────────┘      │ [msg3][msg4] │    └──────────┘
                  └──────────────┘

1. Producer cria mensagem e coloca na fila
2. Mensagem fica armazenada na fila (persistente)
3. Consumer le a mensagem da fila
4. Consumer processa a mensagem
5. Consumer confirma processamento (ACK)
6. Fila remove a mensagem
```

**Codigo conceitual:**

```javascript
// Producer: coloca mensagem na fila
async function createTodo(req, res) {
  // 1. Criar tarefa no banco (operacao principal)
  const todo = await db.todos.create({ data: req.body });

  // 2. Enviar mensagem para a fila (NAO espera processamento)
  await queue.send('todo-notifications', {
    type: 'TODO_CREATED',
    todoId: todo.id,
    userId: todo.userId,
    title: todo.title
  });

  // 3. Responder ao usuario IMEDIATAMENTE
  res.status(201).json(todo);
  // Total: ~200ms (sem esperar email)
}

// Consumer: processa mensagens da fila
queue.consume('todo-notifications', async (message) => {
  const { type, todoId, userId, title } = message;

  if (type === 'TODO_CREATED') {
    const user = await db.users.findById(userId);
    await sendEmail(user.email, `Nova tarefa: ${title}`);
  }

  // ACK: confirmar que processou com sucesso
  message.ack();
});
```

### 2.3 Garantias de Entrega

| Garantia | Descricao | Mario |
|----------|-----------|-------|
| **At-most-once** | Entrega no maximo 1 vez (pode perder) | Parakoopa tenta 1 vez, se nao conseguir, desiste |
| **At-least-once** | Entrega pelo menos 1 vez (pode duplicar) | Parakoopa tenta ate conseguir (pode entregar 2 vezes) |
| **Exactly-once** | Entrega exatamente 1 vez (ideal, mas difícil) | Parakoopa entrega 1 vez com certeza (muito difícil) |

> **Na pratica**: A maioria dos sistemas usa **at-least-once** + **idempotencia** (o consumer sabe lidar com mensagens duplicadas).

### 2.4 Quando Usar Filas

| Use Quando | Nao Use Quando |
|------------|----------------|
| Operacao pode ser feita em segundo plano | Precisa de resposta imediata |
| Picos de carga (fila absorve o pico) | Operacao e simples e rapida |
| Servicos podem estar temporariamente fora | Transacao precisa ser atomica |
| Processamento demorado (relatorios, emails) | Poucos usuarios, sistema simples |
| Multiplos consumers precisam processar | Latencia e critica |

---

## 3. RabbitMQ: O Correio Central

### 3.1 O Que E RabbitMQ

**RabbitMQ** e um message broker open-source que implementa o protocolo AMQP (Advanced Message Queuing Protocol).

> **Analogia Mario**: RabbitMQ e o **correio central** do Mushroom Kingdom. Toda carta passa por ele. Ele sabe para qual caixa postal (queue) enviar, pode copiar cartas para multiplas caixas (exchanges), e garante que nenhuma carta se perca.

### 3.2 Conceitos Fundamentais

| Conceito | Descricao | Mario |
|----------|-----------|-------|
| **Producer** | Envia mensagens | Mario escrevendo cartas |
| **Exchange** | Recebe mensagens e roteia para queues | Sala de triagem do correio |
| **Queue** | Armazena mensagens | Caixa postal do destinatario |
| **Consumer** | Le e processa mensagens | Luigi lendo suas cartas |
| **Binding** | Regra que liga exchange a queue | Endereco na carta |
| **Routing Key** | Chave para decidir a rota | CEP da carta |
| **ACK** | Confirmacao de recebimento | Assinatura de recebimento |

```
Producer → Exchange → Binding → Queue → Consumer

Mario ──→ [Sala de    ──→ [Caixa     ──→ Luigi (le)
            Triagem]       Postal]
```

### 3.3 Tipos de Exchange

| Tipo | Como Roteia | Mario | Quando Usar |
|------|-------------|-------|-------------|
| **Direct** | Routing key exata | Carta para um endereco especifico | Uma fila para cada tipo de mensagem |
| **Fanout** | Para TODAS as queues ligadas | Aviso no mural — todos leem | Notificar multiplos servicos |
| **Topic** | Pattern matching na routing key | Carta com "*.urgente" vai para todos que cuidam de urgentes | Filtrar por categoria/padrão |
| **Headers** | Baseado nos headers da mensagem | Carta filtrada por remetente/prioridade | Roteamento complexo |

```
DIRECT: "email.send" → vai APENAS para a fila de emails
FANOUT: mensagem → vai para TODAS as filas conectadas
TOPIC:  "todo.created.high" → vai para filas que escutam "todo.created.*" ou "todo.#"
```

### 3.4 RabbitMQ na Pratica: TodoApp

```javascript
const amqp = require('amqplib');

// PRODUCER: Servico de Tarefas
class TodoEventProducer {
  constructor() {
    this.connection = null;
    this.channel = null;
  }

  async connect() {
    this.connection = await amqp.connect(process.env.RABBITMQ_URL || 'amqp://localhost');
    this.channel = await this.connection.createChannel();

    // Declarar exchange do tipo topic
    await this.channel.assertExchange('todo-events', 'topic', { durable: true });
  }

  async publishTodoCreated(todo) {
    const message = {
      type: 'TODO_CREATED',
      data: todo,
      timestamp: new Date().toISOString(),
      messageId: generateUUID()
    };

    this.channel.publish(
      'todo-events',                        // exchange
      'todo.created',                       // routing key
      Buffer.from(JSON.stringify(message)), // payload
      {
        persistent: true,                   // Sobrevive a restart do RabbitMQ
        messageId: message.messageId,
        contentType: 'application/json'
      }
    );
  }

  async publishTodoCompleted(todo) {
    const message = {
      type: 'TODO_COMPLETED',
      data: todo,
      timestamp: new Date().toISOString(),
      messageId: generateUUID()
    };

    this.channel.publish(
      'todo-events',
      'todo.completed',
      Buffer.from(JSON.stringify(message)),
      { persistent: true }
    );
  }
}

// CONSUMER: Servico de Notificacoes
class NotificationConsumer {
  async start() {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();

    // Declarar exchange e queue
    await channel.assertExchange('todo-events', 'topic', { durable: true });
    const { queue } = await channel.assertQueue('notification-queue', {
      durable: true,
      deadLetterExchange: 'todo-events-dlx'  // Dead letter exchange
    });

    // Binding: escutar todos os eventos de todo
    await channel.bindQueue(queue, 'todo-events', 'todo.*');

    // Processar mensagens (1 de cada vez)
    channel.prefetch(1);

    channel.consume(queue, async (msg) => {
      try {
        const event = JSON.parse(msg.content.toString());
        console.log(`Processando: ${event.type}`);

        switch (event.type) {
          case 'TODO_CREATED':
            await this.handleTodoCreated(event.data);
            break;
          case 'TODO_COMPLETED':
            await this.handleTodoCompleted(event.data);
            break;
        }

        // ACK: processou com sucesso
        channel.ack(msg);
      } catch (error) {
        console.error('Erro ao processar mensagem:', error);
        // NACK: rejeitar e reenviar para dead letter queue
        channel.nack(msg, false, false);
      }
    });
  }

  async handleTodoCreated(todo) {
    const user = await getUser(todo.userId);
    await sendEmail(user.email, {
      subject: `Nova tarefa: ${todo.title}`,
      body: `Voce criou a tarefa "${todo.title}" com prioridade ${todo.priority}.`
    });
  }

  async handleTodoCompleted(todo) {
    const user = await getUser(todo.userId);
    await sendEmail(user.email, {
      subject: `Tarefa concluida: ${todo.title}`,
      body: `Parabens! Voce concluiu "${todo.title}".`
    });
  }
}
```

### 3.5 RabbitMQ com Docker

```yaml
# docker-compose.yml
services:
  rabbitmq:
    image: rabbitmq:3-management
    ports:
      - "5672:5672"     # AMQP
      - "15672:15672"   # Management UI
    environment:
      RABBITMQ_DEFAULT_USER: mario
      RABBITMQ_DEFAULT_PASS: mushroom123
    volumes:
      - rabbitmq_data:/var/lib/rabbitmq

volumes:
  rabbitmq_data:
```

```bash
# Acessar management UI: http://localhost:15672
# Usuario: mario / Senha: mushroom123
```

---

## 4. Azure Service Bus: O Correio Real Express

### 4.1 O Que E Azure Service Bus

**Azure Service Bus** e um servico de mensageria enterprise totalmente gerenciado na nuvem Azure.

> **Analogia Mario**: Se RabbitMQ e o correio central que voce constroi e gerencia, o Azure Service Bus e o **correio real express** do Mushroom Kingdom — gerenciado pelo proprio reino (Azure). Voce so usa, nao precisa manter a infraestrutura. Mais confiavel, mais recursos, sem dor de cabeca.

### 4.2 Queues vs Topics

| Recurso | Queue | Topic + Subscriptions |
|---------|-------|----------------------|
| **Padrao** | Point-to-point | Pub/Sub |
| **Consumers** | 1 (competing consumers) | Multiplos |
| **Mensagem** | Consumida por UM consumer | Copiada para CADA subscription |
| **Mario** | Carta para 1 pessoa | Aviso no mural — todos leem |

```
QUEUE:                              TOPIC:
Producer → [Queue] → Consumer       Producer → [Topic] → Subscription A → Consumer A
                                                      → Subscription B → Consumer B
                                                      → Subscription C → Consumer C
```

### 4.3 Azure Service Bus na Pratica

```javascript
const { ServiceBusClient } = require('@azure/service-bus');

const connectionString = process.env.SERVICE_BUS_CONNECTION_STRING;
const client = new ServiceBusClient(connectionString);

// PRODUCER: Enviar mensagem para Topic
async function publishEvent(topicName, event) {
  const sender = client.createSender(topicName);

  await sender.sendMessages({
    body: event,
    contentType: 'application/json',
    subject: event.type,            // Usado para filtrar nas subscriptions
    messageId: event.messageId,
    applicationProperties: {
      priority: event.data.priority || 'medium',
      source: 'todo-service'
    }
  });

  await sender.close();
}

// Uso:
await publishEvent('todo-events', {
  type: 'TODO_CREATED',
  messageId: generateUUID(),
  data: { todoId: '123', userId: 'mario-001', title: 'Salvar Peach', priority: 'high' }
});

// CONSUMER: Receber mensagens de Subscription
async function startConsumer(topicName, subscriptionName, handler) {
  const receiver = client.createReceiver(topicName, subscriptionName, {
    receiveMode: 'peekLock'  // Mensagem fica "trancada" ate ser processada
  });

  receiver.subscribe({
    processMessage: async (message) => {
      try {
        console.log(`Recebido: ${message.subject}`);
        await handler(message.body);

        // Completar: remove da fila
        await receiver.completeMessage(message);
      } catch (error) {
        console.error('Erro:', error);
        // Abandonar: volta para a fila (retry)
        await receiver.abandonMessage(message);
      }
    },
    processError: async (error) => {
      console.error('Erro no receiver:', error);
    }
  });
}

// Iniciar consumers
startConsumer('todo-events', 'notification-sub', async (event) => {
  await sendNotification(event);
});

startConsumer('todo-events', 'analytics-sub', async (event) => {
  await recordAnalytics(event);
});
```

```bash
# Criar recursos no Azure
az servicebus namespace create \
  --name mushroom-kingdom-bus \
  --resource-group mushroom-kingdom \
  --sku Standard

az servicebus topic create \
  --namespace-name mushroom-kingdom-bus \
  --resource-group mushroom-kingdom \
  --name todo-events

az servicebus topic subscription create \
  --namespace-name mushroom-kingdom-bus \
  --resource-group mushroom-kingdom \
  --topic-name todo-events \
  --name notification-sub

az servicebus topic subscription create \
  --namespace-name mushroom-kingdom-bus \
  --resource-group mushroom-kingdom \
  --topic-name todo-events \
  --name analytics-sub
```

### 4.4 Quando Escolher Service Bus vs RabbitMQ

| Criterio | RabbitMQ | Azure Service Bus |
|----------|----------|-------------------|
| **Gerenciamento** | Voce gerencia | Azure gerencia |
| **Custo** | Gratis (self-hosted) | Pago (por operacao) |
| **Complexidade** | Precisa configurar | Pronto para usar |
| **SLA** | Depende de voce | 99.9% garantido |
| **Integracao Azure** | Manual | Nativa |
| **Escalabilidade** | Voce configura | Automatica |
| **Dead Letter** | Configuravel | Nativo |
| **Tamanho mensagem** | Configuravel | Ate 256KB (Standard) / 100MB (Premium) |
| **Melhor para** | Dev local, controle total | Producao enterprise, Azure |

---

## 5. Pub/Sub: O Quadro de Avisos

### 5.1 O Padrao Publish/Subscribe

No padrao **Pub/Sub**, um produtor **publica** um evento e multiplos consumidores **se inscrevem** para receber copias independentes.

> **Analogia Mario**: Pub/Sub e como o **quadro de avisos** na praca central do Mushroom Kingdom. Quando Mario coloca um aviso no quadro ("Nova missao disponivel!"), TODOS que se inscreveram para receber avisos de missao leem sua propria copia. O carteiro das notificacoes le. O carteiro dos relatorios le. O carteiro do audit le. Cada um recebe sua copia independente.

### 5.2 Pub/Sub vs Queue

```
QUEUE (Point-to-Point):
  Mensagem → [Fila] → Consumer A (pega a mensagem)
                       Consumer B (NAO recebe — A ja pegou)

  Uma mensagem = UM processamento

PUB/SUB:
  Mensagem → [Topic] → Subscription A → Consumer A (recebe COPIA)
                      → Subscription B → Consumer B (recebe COPIA)
                      → Subscription C → Consumer C (recebe COPIA)

  Uma mensagem = MULTIPLOS processamentos independentes
```

> **Analogia Mario**:
> - **Queue** = carta que vai para UMA caixa postal. Primeiro que pegar, le.
> - **Pub/Sub** = aviso no mural. Cada pessoa faz sua copia e le independentemente.

### 5.3 Implementacao Pratica

```javascript
// EventBus simples com Pub/Sub
class EventBus {
  constructor() {
    this.subscriptions = new Map();
  }

  subscribe(eventType, handler) {
    if (!this.subscriptions.has(eventType)) {
      this.subscriptions.set(eventType, []);
    }
    this.subscriptions.get(eventType).push(handler);
  }

  async publish(eventType, data) {
    const handlers = this.subscriptions.get(eventType) || [];
    const promises = handlers.map(handler =>
      handler(data).catch(err => console.error(`Handler error: ${err.message}`))
    );
    await Promise.allSettled(promises);
  }
}

// Uso
const bus = new EventBus();

// Subscriber 1: Notificacoes
bus.subscribe('todo.created', async (todo) => {
  await sendEmail(todo.userId, `Nova tarefa: ${todo.title}`);
});

// Subscriber 2: Analytics
bus.subscribe('todo.created', async (todo) => {
  await analytics.track('todo_created', { userId: todo.userId, priority: todo.priority });
});

// Subscriber 3: Audit Log
bus.subscribe('todo.created', async (todo) => {
  await auditLog.write({ action: 'CREATE', entity: 'todo', entityId: todo.id });
});

// Publisher
async function createTodo(data) {
  const todo = await db.todos.create({ data });
  await bus.publish('todo.created', todo);  // Todos os 3 subscribers recebem!
  return todo;
}
```

### 5.4 Event-Driven com Pub/Sub

```javascript
// Eventos do TodoApp — catálogo completo
const EVENTS = {
  // Todo events
  'todo.created': 'Tarefa criada',
  'todo.updated': 'Tarefa atualizada',
  'todo.completed': 'Tarefa concluida',
  'todo.deleted': 'Tarefa removida',

  // User events
  'user.registered': 'Usuario cadastrado',
  'user.login': 'Usuario logou',
  'user.password_changed': 'Senha alterada',

  // Team events
  'team.member_added': 'Membro adicionado ao time',
  'team.member_removed': 'Membro removido do time'
};

// Cada servico se inscreve nos eventos que lhe interessam
// Notification Service
bus.subscribe('todo.created', sendNewTodoNotification);
bus.subscribe('todo.completed', sendCompletionNotification);
bus.subscribe('user.registered', sendWelcomeEmail);
bus.subscribe('user.password_changed', sendPasswordChangeAlert);

// Analytics Service
bus.subscribe('todo.created', trackTodoCreated);
bus.subscribe('todo.completed', trackTodoCompleted);
bus.subscribe('user.login', trackLogin);

// Audit Service (se inscreve em TUDO)
Object.keys(EVENTS).forEach(eventType => {
  bus.subscribe(eventType, (data) => auditLog.write({ eventType, data }));
});
```

---

## 6. Dead Letter Queue: Correio Devolvido

### 6.1 O Que E Dead Letter Queue

**Dead Letter Queue (DLQ)** e uma fila especial que recebe mensagens que nao puderam ser processadas com sucesso.

> **Analogia Mario**: DLQ e como a **caixa de cartas devolvidas** do correio. Se o Parakoopa tentou entregar a carta 3 vezes e Luigi nunca estava em casa (ou a casa nao existe), a carta vai para a caixa de devolvidos. Alguem verifica periodicamente essa caixa para investigar o que deu errado.

### 6.2 Quando Mensagens Vao para DLQ

| Motivo | Descricao | Mario |
|--------|-----------|-------|
| **Max retries** | Mensagem falhou N vezes | Parakoopa tentou 3 vezes, desistiu |
| **TTL expirado** | Mensagem ficou tempo demais na fila | Carta muito velha, ja nao vale |
| **Rejeicao explicita** | Consumer rejeitou a mensagem | Destinatario recusou a carta |
| **Fila cheia** | Fila atingiu capacidade maxima | Caixa postal transbordando |
| **Mensagem invalida** | Formato da mensagem e incorreto | Carta sem endereco |

### 6.3 Tratando Dead Letters

```javascript
// Consumer para Dead Letter Queue
async function processDLQ() {
  const receiver = client.createReceiver('todo-events', 'notification-sub', {
    subQueueType: 'deadLetter'  // Azure Service Bus DLQ
  });

  receiver.subscribe({
    processMessage: async (message) => {
      console.log('Dead Letter encontrada:');
      console.log('  Razao:', message.deadLetterReason);
      console.log('  Descricao:', message.deadLetterErrorDescription);
      console.log('  Corpo:', message.body);
      console.log('  Tentativas:', message.deliveryCount);

      // Opcoes:
      // 1. Corrigir e reenviar
      if (message.deadLetterReason === 'MaxDeliveryCountExceeded') {
        await fixAndResend(message);
      }

      // 2. Registrar para investigacao
      await alertTeam('Dead letter encontrada', message);

      // 3. Completar (remover da DLQ)
      await receiver.completeMessage(message);
    },
    processError: async (error) => {
      console.error('Erro ao processar DLQ:', error);
    }
  });
}

async function fixAndResend(deadMessage) {
  // Tentar corrigir o problema e reenviar
  const sender = client.createSender('todo-events');
  await sender.sendMessages({
    body: deadMessage.body,
    subject: deadMessage.subject,
    applicationProperties: {
      ...deadMessage.applicationProperties,
      retriedFromDLQ: true,
      originalDeliveryCount: deadMessage.deliveryCount
    }
  });
  await sender.close();
}
```

---

## 7. Padroes de Mensageria

### 7.1 Request-Reply

Simular comunicacao sincrona sobre filas assincronas.

```
Requestor → [Request Queue] → Processor
                                   │
                                   ▼
Requestor ← [Reply Queue] ←───── Processor
```

### 7.2 Competing Consumers

Multiplos consumers processam mensagens da mesma fila para escalar.

> **Analogia Mario**: Em vez de 1 Parakoopa entregando cartas, 5 Parakoopas competem para pegar cartas da mesma pilha. Resultado: 5x mais rapido.

```
                    ┌── Consumer A (pega msg 1, 3, 5)
[Queue] ──────────→├── Consumer B (pega msg 2, 4, 6)
                    └── Consumer C (pega msg 7, 8, 9)
```

### 7.3 Saga Pattern

Para transacoes distribuidas entre multiplos servicos.

> **Analogia Mario**: Saga e como uma missao em multiplas etapas. Se a etapa 3 falha, voce precisa desfazer as etapas 2 e 1 (compensacao).

```
Passo 1: Criar tarefa no Todo Service       ✅
Passo 2: Reservar slot no Calendar Service   ✅
Passo 3: Enviar notificacao                  ❌ FALHOU!

Compensacao:
  → Cancelar slot no Calendar Service
  → Deletar tarefa no Todo Service
```

### 7.4 Outbox Pattern

Garantir que a escrita no banco e o envio da mensagem aconteçam juntos (consistencia).

```javascript
// PROBLEMA: E se o banco salvar mas a mensagem nao for enviada?
await db.todos.create(data);    // ✅ Salvou
await queue.send(message);      // ❌ Falhou! (mensagem perdida)

// SOLUCAO: Outbox Pattern
// 1. Salvar tarefa E mensagem na MESMA transacao do banco
await db.$transaction([
  db.todos.create(data),
  db.outbox.create({
    eventType: 'TODO_CREATED',
    payload: JSON.stringify(data),
    processed: false
  })
]);

// 2. Um job separado le o outbox e envia para a fila
async function processOutbox() {
  const pending = await db.outbox.findMany({ where: { processed: false } });
  for (const entry of pending) {
    await queue.send(entry.eventType, JSON.parse(entry.payload));
    await db.outbox.update({ where: { id: entry.id }, data: { processed: true } });
  }
}
```

---

## 8. Mensageria na Pratica: TodoApp Completo

### 8.1 Arquitetura com Mensageria

```
┌──────────┐     ┌────────────┐     ┌──────────────────┐
│ Frontend  │────→│ Todo API   │────→│ Service Bus       │
└──────────┘     │            │     │                    │
                 │  Cria todo │     │ Topic: todo-events │
                 │  no banco  │     │                    │
                 └────────────┘     └───────┬────────────┘
                                       │    │    │
                               ┌───────┘    │    └───────┐
                               ▼            ▼            ▼
                        ┌──────────┐ ┌──────────┐ ┌──────────┐
                        │ Email    │ │Analytics │ │ Audit    │
                        │ Service  │ │ Service  │ │ Service  │
                        └──────────┘ └──────────┘ └──────────┘
```

### 8.2 Fluxo Completo: Criar Tarefa

```
1. Usuario clica "Criar Tarefa" no frontend
2. Frontend envia POST /api/todos para o Todo API
3. Todo API:
   a. Valida os dados
   b. Salva no banco de dados (PostgreSQL)
   c. Publica evento "todo.created" no Service Bus
   d. Retorna 201 Created ao frontend (200ms)
4. Frontend mostra "Tarefa criada!" ao usuario
5. Em paralelo (assincrono):
   a. Email Service recebe evento → envia email
   b. Analytics Service recebe evento → registra metrica
   c. Audit Service recebe evento → grava log de auditoria
   d. Cache Service recebe evento → invalida cache
```

### 8.3 Fluxo Completo: Completar Tarefa

```
1. Usuario clica "Concluir" na tarefa
2. Frontend envia PUT /api/todos/123 { completed: true }
3. Todo API:
   a. Atualiza no banco
   b. Publica "todo.completed" no Service Bus
   c. Retorna 200 OK
4. Em paralelo:
   a. Email Service → "Parabens! Tarefa concluida"
   b. Analytics → registra conclusao, calcula metricas
   c. Gamification → verifica conquistas, adiciona XP
   d. Report Service → atualiza relatorio diario
```

---

## 9. Boas Praticas de Mensageria

### 9.1 Idempotencia

Processar a mesma mensagem 2 vezes deve ter o mesmo resultado que processar 1 vez.

```javascript
// NAO idempotente ❌ (duplica o email)
async function handleTodoCreated(event) {
  await sendEmail(event.userId, `Tarefa: ${event.title}`);
}

// Idempotente ✅ (verifica se ja processou)
async function handleTodoCreated(event) {
  const alreadyProcessed = await redis.get(`processed:${event.messageId}`);
  if (alreadyProcessed) {
    console.log('Mensagem ja processada, ignorando.');
    return;
  }

  await sendEmail(event.userId, `Tarefa: ${event.title}`);
  await redis.set(`processed:${event.messageId}`, 'true', 'EX', 86400);
}
```

### 9.2 Ordering e Deduplication

```javascript
// Message com metadata completo
const message = {
  messageId: generateUUID(),          // ID unico para deduplicacao
  correlationId: 'flow-abc-123',      // ID do fluxo completo
  timestamp: new Date().toISOString(),// Quando foi criada
  source: 'todo-service',            // Quem criou
  type: 'TODO_CREATED',              // Tipo do evento
  version: '1.0',                    // Versao do schema
  data: {                            // Dados do evento
    todoId: 'todo-123',
    userId: 'mario-001',
    title: 'Salvar Peach'
  }
};
```

### 9.3 Monitoramento

| Metrica | O Que Monitorar | Alerta Se |
|---------|----------------|-----------|
| **Queue depth** | Mensagens na fila | > 1000 (consumers lentos) |
| **Processing rate** | Mensagens/segundo | Caiu 50% (problema) |
| **Error rate** | % de erros | > 5% |
| **DLQ size** | Mensagens na dead letter | > 0 (investigar) |
| **Consumer lag** | Atraso do consumer | > 5 minutos |

---

## 10. Tabela Final de Resumo

| Conceito | O Que E | Analogia Mario |
|----------|---------|----------------|
| **Message Queue** | Fila de mensagens assincronas | Parakoopas carteiros em fila |
| **RabbitMQ** | Message broker open-source | Correio central do Mushroom Kingdom |
| **Azure Service Bus** | Message broker gerenciado | Correio real express |
| **Producer** | Quem envia mensagens | Mario escrevendo cartas |
| **Consumer** | Quem recebe e processa | Luigi lendo cartas |
| **Pub/Sub** | Publicar para multiplos assinantes | Quadro de avisos — todos leem |
| **Dead Letter Queue** | Fila de mensagens que falharam | Caixa de cartas devolvidas |
| **ACK** | Confirmacao de processamento | Assinatura de recebimento |
| **Exchange** | Roteador de mensagens | Sala de triagem do correio |
| **Idempotencia** | Processar 2x = mesmo resultado | Entregar carta 2x nao duplica efeito |
| **Saga** | Transacao distribuida com compensacao | Missao multi-etapas com desfazer |
| **Outbox** | Garantir consistencia banco + fila | Registrar no livro E enviar carta |

---

## Referencias

- [RabbitMQ — Documentacao Oficial](https://www.rabbitmq.com/documentation.html)
- [Azure Service Bus — Documentacao](https://learn.microsoft.com/en-us/azure/service-bus-messaging/)
- [Azure Service Bus — Node.js SDK](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-nodejs-how-to-use-queues)
- [Microsoft — Cloud Design Patterns: Competing Consumers](https://learn.microsoft.com/en-us/azure/architecture/patterns/competing-consumers)
- [Microsoft — Saga Pattern](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga)
- [Microsoft — Outbox Pattern](https://learn.microsoft.com/en-us/azure/architecture/best-practices/transactional-outbox-cosmos)
- [CloudAMQP — RabbitMQ Tutorials](https://www.cloudamqp.com/blog/part1-rabbitmq-for-beginners-what-is-rabbitmq.html)
- [Martin Fowler — Event-Driven Architecture](https://martinfowler.com/articles/201701-event-driven.html)
- [amqplib — Node.js AMQP Client](https://www.npmjs.com/package/amqplib)

---

*Fase 4-8 completa! Voce aprendeu como sistemas se comunicam de forma assincrona usando filas e mensageria. Agora, prepare-se para a Boss Battle do World 4 — desafios de arquitetura que vao testar tudo que voce aprendeu!*

---

<div align="center">

⬅️ [Anterior: Fase 4-7: Cache e Performance](4-7-cache_performance.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 4-BOSS: Glossario Parcial](4-BOSS-glossario_parcial.md)

</div>
