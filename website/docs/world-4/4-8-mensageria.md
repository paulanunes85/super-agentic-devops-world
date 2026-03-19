---
title: "Level 4-8 -- Mushroom Kingdom Mail: Messaging and Queues"
description: "Message queues, RabbitMQ, Azure Service Bus, pub/sub, asynchronous communication and dead letter queues — the Mushroom Kingdom postal system"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
tags:
  - agentic-devops
  - mario
  - world-4
  - messaging
  - queues
  - rabbitmq
  - service-bus
  - pub-sub
  - async
sidebar_position: 8
format: md
---

# Level 4-8 -- Mushroom Kingdom Mail: Messaging and Queues

---

## Change Log

| Version | Date       | Author                                  | Description          |
|---------|------------|----------------------------------------|----------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation    |

---

## Table of Contents

- [Prologue: The Problem with Direct Deliveries](#prologue-the-problem-with-direct-deliveries)
- [1. Synchronous vs Asynchronous Communication](#1-synchronous-vs-asynchronous-communication)
  - [1.1 The Problem with Synchronous Communication](#11-the-problem-with-synchronous-communication)
  - [1.2 The Solution: Asynchronous Communication](#12-the-solution-asynchronous-communication)
  - [1.3 When to Use Each](#13-when-to-use-each)
- [2. Message Queues: Parakoopa Mail Carriers](#2-message-queues-parakoopa-mail-carriers)
  - [2.1 What Is a Message Queue](#21-what-is-a-message-queue)
  - [2.2 How It Works](#22-how-it-works)
  - [2.3 Delivery Guarantees](#23-delivery-guarantees)
  - [2.4 When to Use Queues](#24-when-to-use-queues)
- [3. RabbitMQ: The Central Post Office](#3-rabbitmq-the-central-post-office)
  - [3.1 What Is RabbitMQ](#31-what-is-rabbitmq)
  - [3.2 Fundamental Concepts](#32-fundamental-concepts)
  - [3.3 Exchange Types](#33-exchange-types)
  - [3.4 RabbitMQ in Practice: TodoApp](#34-rabbitmq-in-practice-todoapp)
  - [3.5 RabbitMQ with Docker](#35-rabbitmq-with-docker)
- [4. Azure Service Bus: The Royal Express Mail](#4-azure-service-bus-the-royal-express-mail)
  - [4.1 What Is Azure Service Bus](#41-what-is-azure-service-bus)
  - [4.2 Queues vs Topics](#42-queues-vs-topics)
  - [4.3 Azure Service Bus in Practice](#43-azure-service-bus-in-practice)
  - [4.4 When to Choose Service Bus vs RabbitMQ](#44-when-to-choose-service-bus-vs-rabbitmq)
- [5. Pub/Sub: The Bulletin Board](#5-pubsub-the-bulletin-board)
  - [5.1 The Publish/Subscribe Pattern](#51-the-publishsubscribe-pattern)
  - [5.2 Pub/Sub vs Queue](#52-pubsub-vs-queue)
  - [5.3 Practical Implementation](#53-practical-implementation)
  - [5.4 Event-Driven with Pub/Sub](#54-event-driven-with-pubsub)
- [6. Dead Letter Queue: Returned Mail](#6-dead-letter-queue-returned-mail)
  - [6.1 What Is a Dead Letter Queue](#61-what-is-a-dead-letter-queue)
  - [6.2 When Messages Go to the DLQ](#62-when-messages-go-to-the-dlq)
  - [6.3 Handling Dead Letters](#63-handling-dead-letters)
- [7. Messaging Patterns](#7-messaging-patterns)
  - [7.1 Request-Reply](#71-request-reply)
  - [7.2 Competing Consumers](#72-competing-consumers)
  - [7.3 Saga Pattern](#73-saga-pattern)
  - [7.4 Outbox Pattern](#74-outbox-pattern)
- [8. Messaging in Practice: Complete TodoApp](#8-messaging-in-practice-complete-todoapp)
  - [8.1 Architecture with Messaging](#81-architecture-with-messaging)
  - [8.2 Complete Flow: Create Task](#82-complete-flow-create-task)
  - [8.3 Complete Flow: Complete Task](#83-complete-flow-complete-task)
- [9. Messaging Best Practices](#9-messaging-best-practices)
  - [9.1 Idempotency](#91-idempotency)
  - [9.2 Ordering and Deduplication](#92-ordering-and-deduplication)
  - [9.3 Monitoring](#93-monitoring)
- [10. Final Summary Table](#10-final-summary-table)
- [References](#references)

---

## Prologue: The Problem with Direct Deliveries

<div align="center">
<img src="/img/diagrams/message-queue.svg" alt="Message queue pattern" width="780" />
<br/><em>Message queue pattern</em>
</div>

Sofia's TodoApp now had multiple services: authentication, tasks, notifications, and reports. But every time a user created a task, the Todo Service needed to directly call the Notification Service to send an email AND the Analytics Service to record the metric.

Problem: if the Notification Service was down, the task creation **failed entirely**. The user couldn't create a task just because the email service was having problems.

Yoshi drew a diagram on the board.

*"Sofia, imagine that in the Mushroom Kingdom, every time Mario wants to send a letter to Luigi, Mario has to go PERSONALLY to Luigi's house, deliver the letter by hand, and wait for Luigi to read it. If Luigi isn't home, Mario stands at the door. He can't do anything else until Luigi shows up."*

*"That's ridiculous!"* said Sofia.

*"Exactly. And that's why the **post office** exists. Mario puts the letter in the mailbox. The **Parakoopa mail carrier** picks up the letter and delivers it to Luigi when he can. Mario goes on with his life. Luigi reads it when he's available. If Luigi isn't home, the carrier tries again later."*

*"That's **messaging** — message queue systems that decouple who sends from who receives."*

---

## 1. Synchronous vs Asynchronous Communication

### 1.1 The Problem with Synchronous Communication

In **synchronous** communication, the sender waits for the recipient's response before continuing.

```
SYNCHRONOUS:
  Todo Service ──[creates task]──→ Notification Service ──[sends email]──→ Response
       │                                    │                               │
       │          WAITING...               │         PROCESSING...         │
       │←─────── Blocked ────────────────→│←──────── 2 seconds ──────────→│
       │                                                                     │
       └──────── Total: 2.5 seconds (user waiting) ─────────────────────→│

  If Notification Service is DOWN:
  Todo Service ──[creates task]──→ Notification Service ──→ TIMEOUT (30s) ──→ ERROR!
       │                                                                     │
       └──────── Task was NOT created. User frustrated. ─────────────────→│
```

### 1.2 The Solution: Asynchronous Communication

In **asynchronous** communication, the sender sends the message and moves on, without waiting for a response.

```
ASYNCHRONOUS:
  Todo Service ──[creates task]──→ Queue ──→ Response to user (200ms)
       │                           │
       │    FREE!                  └──→ Notification Service ──[sends email]
       │                           └──→ Analytics Service ──[records metric]
       │
       └── Total for user: 200ms (10x faster!)

  If Notification Service is DOWN:
  Todo Service ──[creates task]──→ Queue ──→ Response to user (200ms) ✅
       │                           │
       │    Task CREATED!          └──→ Message WAITS in queue
       │                                 └──→ When Notification comes back, processes
```

### 1.3 When to Use Each

| Scenario | Synchronous | Asynchronous |
|----------|:----------:|:------------:|
| Login (needs immediate response) | Yes | |
| Send email after creating task | | Yes |
| Fetch task list | Yes | |
| Generate PDF report | | Yes |
| Validate form data | Yes | |
| Process payment | Yes* | |
| Sync data between services | | Yes |
| Push notifications | | Yes |

*Payment is synchronous until confirmation, asynchronous for subsequent notifications.

---

## 2. Message Queues: Parakoopa Mail Carriers

### 2.1 What Is a Message Queue

A **Message Queue** is an asynchronous communication mechanism where messages are stored in a queue until they are processed.

> **Mario Analogy**: A message queue is like a line of **Parakoopa mail carriers**. Each letter (message) is placed in the queue. The Parakoopas pick up letters in order (FIFO — First In, First Out) and deliver them one by one. If the recipient isn't home, the Parakoopa keeps the letter and tries again later.

### 2.2 How It Works

```
Producer           Queue              Consumer
(Sender)           (Queue/Post Office) (Recipient)

┌──────────┐      ┌──────────────┐    ┌──────────┐
│ Todo Svc │─────→│ [msg1][msg2] │───→│ Email Svc│
└──────────┘      │ [msg3][msg4] │    └──────────┘
                  └──────────────┘

1. Producer creates message and places it in the queue
2. Message stays stored in the queue (persistent)
3. Consumer reads the message from the queue
4. Consumer processes the message
5. Consumer confirms processing (ACK)
6. Queue removes the message
```

**Conceptual code:**

```javascript
// Producer: places message in the queue
async function createTodo(req, res) {
  // 1. Create task in database (main operation)
  const todo = await db.todos.create({ data: req.body });

  // 2. Send message to the queue (does NOT wait for processing)
  await queue.send('todo-notifications', {
    type: 'TODO_CREATED',
    todoId: todo.id,
    userId: todo.userId,
    title: todo.title
  });

  // 3. Respond to user IMMEDIATELY
  res.status(201).json(todo);
  // Total: ~200ms (without waiting for email)
}

// Consumer: processes messages from the queue
queue.consume('todo-notifications', async (message) => {
  const { type, todoId, userId, title } = message;

  if (type === 'TODO_CREATED') {
    const user = await db.users.findById(userId);
    await sendEmail(user.email, `New task: ${title}`);
  }

  // ACK: confirm successful processing
  message.ack();
});
```

### 2.3 Delivery Guarantees

| Guarantee | Description | Mario |
|-----------|------------|-------|
| **At-most-once** | Delivers at most 1 time (may lose) | Parakoopa tries 1 time, gives up if it fails |
| **At-least-once** | Delivers at least 1 time (may duplicate) | Parakoopa tries until successful (may deliver 2 times) |
| **Exactly-once** | Delivers exactly 1 time (ideal but difficult) | Parakoopa delivers 1 time for sure (very difficult) |

> **In practice**: Most systems use **at-least-once** + **idempotency** (the consumer knows how to handle duplicate messages).

### 2.4 When to Use Queues

| Use When | Don't Use When |
|----------|---------------|
| Operation can be done in the background | Need immediate response |
| Load spikes (queue absorbs the peak) | Operation is simple and fast |
| Services may be temporarily down | Transaction needs to be atomic |
| Time-consuming processing (reports, emails) | Few users, simple system |
| Multiple consumers need to process | Latency is critical |

---

## 3. RabbitMQ: The Central Post Office

### 3.1 What Is RabbitMQ

**RabbitMQ** is an open-source message broker that implements the AMQP (Advanced Message Queuing Protocol).

> **Mario Analogy**: RabbitMQ is the **central post office** of the Mushroom Kingdom. Every letter goes through it. It knows which mailbox (queue) to send to, can copy letters to multiple boxes (exchanges), and ensures no letter is lost.

### 3.2 Fundamental Concepts

| Concept | Description | Mario |
|---------|------------|-------|
| **Producer** | Sends messages | Mario writing letters |
| **Exchange** | Receives messages and routes to queues | Post office sorting room |
| **Queue** | Stores messages | Recipient's mailbox |
| **Consumer** | Reads and processes messages | Luigi reading his letters |
| **Binding** | Rule that links exchange to queue | Address on the letter |
| **Routing Key** | Key to decide the route | Letter's ZIP code |
| **ACK** | Delivery confirmation | Signature of receipt |

```
Producer → Exchange → Binding → Queue → Consumer

Mario ──→ [Sorting    ──→ [Mailbox]   ──→ Luigi (reads)
            Room]
```

### 3.3 Exchange Types

| Type | How It Routes | Mario | When to Use |
|------|--------------|-------|-------------|
| **Direct** | Exact routing key | Letter to a specific address | One queue per message type |
| **Fanout** | To ALL bound queues | Notice on the bulletin board — everyone reads | Notify multiple services |
| **Topic** | Pattern matching on routing key | Letter with "*.urgent" goes to all who handle urgent items | Filter by category/pattern |
| **Headers** | Based on message headers | Letter filtered by sender/priority | Complex routing |

```
DIRECT: "email.send" → goes ONLY to the email queue
FANOUT: message → goes to ALL connected queues
TOPIC:  "todo.created.high" → goes to queues listening for "todo.created.*" or "todo.#"
```

### 3.4 RabbitMQ in Practice: TodoApp

```javascript
const amqp = require('amqplib');

// PRODUCER: Task Service
class TodoEventProducer {
  constructor() {
    this.connection = null;
    this.channel = null;
  }

  async connect() {
    this.connection = await amqp.connect(process.env.RABBITMQ_URL || 'amqp://localhost');
    this.channel = await this.connection.createChannel();

    // Declare topic exchange
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
        persistent: true,                   // Survives RabbitMQ restart
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

// CONSUMER: Notification Service
class NotificationConsumer {
  async start() {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();

    // Declare exchange and queue
    await channel.assertExchange('todo-events', 'topic', { durable: true });
    const { queue } = await channel.assertQueue('notification-queue', {
      durable: true,
      deadLetterExchange: 'todo-events-dlx'  // Dead letter exchange
    });

    // Binding: listen for all todo events
    await channel.bindQueue(queue, 'todo-events', 'todo.*');

    // Process messages (1 at a time)
    channel.prefetch(1);

    channel.consume(queue, async (msg) => {
      try {
        const event = JSON.parse(msg.content.toString());
        console.log(`Processing: ${event.type}`);

        switch (event.type) {
          case 'TODO_CREATED':
            await this.handleTodoCreated(event.data);
            break;
          case 'TODO_COMPLETED':
            await this.handleTodoCompleted(event.data);
            break;
        }

        // ACK: processed successfully
        channel.ack(msg);
      } catch (error) {
        console.error('Error processing message:', error);
        // NACK: reject and send to dead letter queue
        channel.nack(msg, false, false);
      }
    });
  }

  async handleTodoCreated(todo) {
    const user = await getUser(todo.userId);
    await sendEmail(user.email, {
      subject: `New task: ${todo.title}`,
      body: `You created the task "${todo.title}" with priority ${todo.priority}.`
    });
  }

  async handleTodoCompleted(todo) {
    const user = await getUser(todo.userId);
    await sendEmail(user.email, {
      subject: `Task completed: ${todo.title}`,
      body: `Congratulations! You completed "${todo.title}".`
    });
  }
}
```

### 3.5 RabbitMQ with Docker

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
# Access management UI: http://localhost:15672
# User: mario / Password: mushroom123
```

---

## 4. Azure Service Bus: The Royal Express Mail

### 4.1 What Is Azure Service Bus

**Azure Service Bus** is a fully managed enterprise messaging service in the Azure cloud.

> **Mario Analogy**: If RabbitMQ is the central post office that you build and manage, Azure Service Bus is the **royal express mail** of the Mushroom Kingdom — managed by the kingdom itself (Azure). You just use it, no need to maintain the infrastructure. More reliable, more features, no headaches.

### 4.2 Queues vs Topics

| Resource | Queue | Topic + Subscriptions |
|----------|-------|----------------------|
| **Pattern** | Point-to-point | Pub/Sub |
| **Consumers** | 1 (competing consumers) | Multiple |
| **Message** | Consumed by ONE consumer | Copied to EACH subscription |
| **Mario** | Letter to 1 person | Notice on the bulletin board — everyone reads |

```
QUEUE:                              TOPIC:
Producer → [Queue] → Consumer       Producer → [Topic] → Subscription A → Consumer A
                                                      → Subscription B → Consumer B
                                                      → Subscription C → Consumer C
```

### 4.3 Azure Service Bus in Practice

```javascript
const { ServiceBusClient } = require('@azure/service-bus');

const connectionString = process.env.SERVICE_BUS_CONNECTION_STRING;
const client = new ServiceBusClient(connectionString);

// PRODUCER: Send message to Topic
async function publishEvent(topicName, event) {
  const sender = client.createSender(topicName);

  await sender.sendMessages({
    body: event,
    contentType: 'application/json',
    subject: event.type,            // Used to filter in subscriptions
    messageId: event.messageId,
    applicationProperties: {
      priority: event.data.priority || 'medium',
      source: 'todo-service'
    }
  });

  await sender.close();
}

// Usage:
await publishEvent('todo-events', {
  type: 'TODO_CREATED',
  messageId: generateUUID(),
  data: { todoId: '123', userId: 'mario-001', title: 'Save Peach', priority: 'high' }
});

// CONSUMER: Receive messages from Subscription
async function startConsumer(topicName, subscriptionName, handler) {
  const receiver = client.createReceiver(topicName, subscriptionName, {
    receiveMode: 'peekLock'  // Message is "locked" until processed
  });

  receiver.subscribe({
    processMessage: async (message) => {
      try {
        console.log(`Received: ${message.subject}`);
        await handler(message.body);

        // Complete: remove from queue
        await receiver.completeMessage(message);
      } catch (error) {
        console.error('Error:', error);
        // Abandon: return to queue (retry)
        await receiver.abandonMessage(message);
      }
    },
    processError: async (error) => {
      console.error('Receiver error:', error);
    }
  });
}

// Start consumers
startConsumer('todo-events', 'notification-sub', async (event) => {
  await sendNotification(event);
});

startConsumer('todo-events', 'analytics-sub', async (event) => {
  await recordAnalytics(event);
});
```

```bash
# Create resources in Azure
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

### 4.4 When to Choose Service Bus vs RabbitMQ

| Criterion | RabbitMQ | Azure Service Bus |
|-----------|----------|-------------------|
| **Management** | You manage | Azure manages |
| **Cost** | Free (self-hosted) | Paid (per operation) |
| **Complexity** | Needs configuration | Ready to use |
| **SLA** | Depends on you | 99.9% guaranteed |
| **Azure Integration** | Manual | Native |
| **Scalability** | You configure | Automatic |
| **Dead Letter** | Configurable | Native |
| **Message size** | Configurable | Up to 256KB (Standard) / 100MB (Premium) |
| **Best for** | Local dev, full control | Enterprise production, Azure |

---

## 5. Pub/Sub: The Bulletin Board

### 5.1 The Publish/Subscribe Pattern

In the **Pub/Sub** pattern, a producer **publishes** an event and multiple consumers **subscribe** to receive independent copies.

> **Mario Analogy**: Pub/Sub is like the **bulletin board** in the Mushroom Kingdom's central square. When Mario posts a notice on the board ("New mission available!"), EVERYONE who subscribed to receive mission notices reads their own copy. The notification carrier reads it. The reports carrier reads it. The audit carrier reads it. Each one receives their own independent copy.

### 5.2 Pub/Sub vs Queue

```
QUEUE (Point-to-Point):
  Message → [Queue] → Consumer A (picks up the message)
                       Consumer B (does NOT receive — A already picked it up)

  One message = ONE processing

PUB/SUB:
  Message → [Topic] → Subscription A → Consumer A (receives COPY)
                      → Subscription B → Consumer B (receives COPY)
                      → Subscription C → Consumer C (receives COPY)

  One message = MULTIPLE independent processings
```

> **Mario Analogy**:
> - **Queue** = letter that goes to ONE mailbox. First to pick it up reads it.
> - **Pub/Sub** = notice on the bulletin board. Each person makes their own copy and reads independently.

### 5.3 Practical Implementation

```javascript
// Simple EventBus with Pub/Sub
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

// Usage
const bus = new EventBus();

// Subscriber 1: Notifications
bus.subscribe('todo.created', async (todo) => {
  await sendEmail(todo.userId, `New task: ${todo.title}`);
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
  await bus.publish('todo.created', todo);  // All 3 subscribers receive it!
  return todo;
}
```

### 5.4 Event-Driven with Pub/Sub

```javascript
// TodoApp events — complete catalog
const EVENTS = {
  // Todo events
  'todo.created': 'Task created',
  'todo.updated': 'Task updated',
  'todo.completed': 'Task completed',
  'todo.deleted': 'Task removed',

  // User events
  'user.registered': 'User registered',
  'user.login': 'User logged in',
  'user.password_changed': 'Password changed',

  // Team events
  'team.member_added': 'Member added to team',
  'team.member_removed': 'Member removed from team'
};

// Each service subscribes to the events it cares about
// Notification Service
bus.subscribe('todo.created', sendNewTodoNotification);
bus.subscribe('todo.completed', sendCompletionNotification);
bus.subscribe('user.registered', sendWelcomeEmail);
bus.subscribe('user.password_changed', sendPasswordChangeAlert);

// Analytics Service
bus.subscribe('todo.created', trackTodoCreated);
bus.subscribe('todo.completed', trackTodoCompleted);
bus.subscribe('user.login', trackLogin);

// Audit Service (subscribes to EVERYTHING)
Object.keys(EVENTS).forEach(eventType => {
  bus.subscribe(eventType, (data) => auditLog.write({ eventType, data }));
});
```

---

## 6. Dead Letter Queue: Returned Mail

### 6.1 What Is a Dead Letter Queue

**Dead Letter Queue (DLQ)** is a special queue that receives messages that could not be successfully processed.

> **Mario Analogy**: DLQ is like the **returned mail box** at the post office. If the Parakoopa tried to deliver the letter 3 times and Luigi was never home (or the house doesn't exist), the letter goes to the returned mail box. Someone periodically checks this box to investigate what went wrong.

### 6.2 When Messages Go to the DLQ

| Reason | Description | Mario |
|--------|------------|-------|
| **Max retries** | Message failed N times | Parakoopa tried 3 times, gave up |
| **TTL expired** | Message was in the queue too long | Letter too old, no longer valid |
| **Explicit rejection** | Consumer rejected the message | Recipient refused the letter |
| **Queue full** | Queue reached maximum capacity | Mailbox overflowing |
| **Invalid message** | Message format is incorrect | Letter without an address |

### 6.3 Handling Dead Letters

```javascript
// Consumer for Dead Letter Queue
async function processDLQ() {
  const receiver = client.createReceiver('todo-events', 'notification-sub', {
    subQueueType: 'deadLetter'  // Azure Service Bus DLQ
  });

  receiver.subscribe({
    processMessage: async (message) => {
      console.log('Dead Letter found:');
      console.log('  Reason:', message.deadLetterReason);
      console.log('  Description:', message.deadLetterErrorDescription);
      console.log('  Body:', message.body);
      console.log('  Attempts:', message.deliveryCount);

      // Options:
      // 1. Fix and resend
      if (message.deadLetterReason === 'MaxDeliveryCountExceeded') {
        await fixAndResend(message);
      }

      // 2. Log for investigation
      await alertTeam('Dead letter found', message);

      // 3. Complete (remove from DLQ)
      await receiver.completeMessage(message);
    },
    processError: async (error) => {
      console.error('Error processing DLQ:', error);
    }
  });
}

async function fixAndResend(deadMessage) {
  // Try to fix the problem and resend
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

## 7. Messaging Patterns

### 7.1 Request-Reply

Simulate synchronous communication over asynchronous queues.

```
Requestor → [Request Queue] → Processor
                                   │
                                   ▼
Requestor ← [Reply Queue] ←───── Processor
```

### 7.2 Competing Consumers

Multiple consumers process messages from the same queue to scale.

> **Mario Analogy**: Instead of 1 Parakoopa delivering letters, 5 Parakoopas compete to pick up letters from the same pile. Result: 5x faster.

```
                    ┌── Consumer A (picks msg 1, 3, 5)
[Queue] ──────────→├── Consumer B (picks msg 2, 4, 6)
                    └── Consumer C (picks msg 7, 8, 9)
```

### 7.3 Saga Pattern

For distributed transactions across multiple services.

> **Mario Analogy**: Saga is like a multi-step mission. If step 3 fails, you need to undo steps 2 and 1 (compensation).

```
Step 1: Create task in Todo Service        ✅
Step 2: Reserve slot in Calendar Service   ✅
Step 3: Send notification                  ❌ FAILED!

Compensation:
  → Cancel slot in Calendar Service
  → Delete task in Todo Service
```

### 7.4 Outbox Pattern

Ensure that the database write and the message send happen together (consistency).

```javascript
// PROBLEM: What if the database saves but the message fails to send?
await db.todos.create(data);    // ✅ Saved
await queue.send(message);      // ❌ Failed! (message lost)

// SOLUTION: Outbox Pattern
// 1. Save task AND message in the SAME database transaction
await db.$transaction([
  db.todos.create(data),
  db.outbox.create({
    eventType: 'TODO_CREATED',
    payload: JSON.stringify(data),
    processed: false
  })
]);

// 2. A separate job reads the outbox and sends to the queue
async function processOutbox() {
  const pending = await db.outbox.findMany({ where: { processed: false } });
  for (const entry of pending) {
    await queue.send(entry.eventType, JSON.parse(entry.payload));
    await db.outbox.update({ where: { id: entry.id }, data: { processed: true } });
  }
}
```

---

## 8. Messaging in Practice: Complete TodoApp

### 8.1 Architecture with Messaging

```
┌──────────┐     ┌────────────┐     ┌──────────────────┐
│ Frontend  │────→│ Todo API   │────→│ Service Bus       │
└──────────┘     │            │     │                    │
                 │  Creates   │     │ Topic: todo-events │
                 │  todo in DB│     │                    │
                 └────────────┘     └───────┬────────────┘
                                       │    │    │
                               ┌───────┘    │    └───────┐
                               ▼            ▼            ▼
                        ┌──────────┐ ┌──────────┐ ┌──────────┐
                        │ Email    │ │Analytics │ │ Audit    │
                        │ Service  │ │ Service  │ │ Service  │
                        └──────────┘ └──────────┘ └──────────┘
```

### 8.2 Complete Flow: Create Task

```
1. User clicks "Create Task" on the frontend
2. Frontend sends POST /api/todos to the Todo API
3. Todo API:
   a. Validates the data
   b. Saves to the database (PostgreSQL)
   c. Publishes "todo.created" event to Service Bus
   d. Returns 201 Created to the frontend (200ms)
4. Frontend shows "Task created!" to the user
5. In parallel (asynchronous):
   a. Email Service receives event → sends email
   b. Analytics Service receives event → records metric
   c. Audit Service receives event → writes audit log
   d. Cache Service receives event → invalidates cache
```

### 8.3 Complete Flow: Complete Task

```
1. User clicks "Complete" on the task
2. Frontend sends PUT /api/todos/123 { completed: true }
3. Todo API:
   a. Updates in the database
   b. Publishes "todo.completed" to Service Bus
   c. Returns 200 OK
4. In parallel:
   a. Email Service → "Congratulations! Task completed"
   b. Analytics → records completion, calculates metrics
   c. Gamification → checks achievements, adds XP
   d. Report Service → updates daily report
```

---

## 9. Messaging Best Practices

### 9.1 Idempotency

Processing the same message 2 times should have the same result as processing it 1 time.

```javascript
// NOT idempotent ❌ (duplicates the email)
async function handleTodoCreated(event) {
  await sendEmail(event.userId, `Task: ${event.title}`);
}

// Idempotent ✅ (checks if already processed)
async function handleTodoCreated(event) {
  const alreadyProcessed = await redis.get(`processed:${event.messageId}`);
  if (alreadyProcessed) {
    console.log('Message already processed, ignoring.');
    return;
  }

  await sendEmail(event.userId, `Task: ${event.title}`);
  await redis.set(`processed:${event.messageId}`, 'true', 'EX', 86400);
}
```

### 9.2 Ordering and Deduplication

```javascript
// Message with complete metadata
const message = {
  messageId: generateUUID(),          // Unique ID for deduplication
  correlationId: 'flow-abc-123',      // Complete flow ID
  timestamp: new Date().toISOString(),// When it was created
  source: 'todo-service',            // Who created it
  type: 'TODO_CREATED',              // Event type
  version: '1.0',                    // Schema version
  data: {                            // Event data
    todoId: 'todo-123',
    userId: 'mario-001',
    title: 'Save Peach'
  }
};
```

### 9.3 Monitoring

| Metric | What to Monitor | Alert If |
|--------|----------------|----------|
| **Queue depth** | Messages in queue | > 1000 (slow consumers) |
| **Processing rate** | Messages/second | Dropped 50% (problem) |
| **Error rate** | % of errors | > 5% |
| **DLQ size** | Messages in dead letter | > 0 (investigate) |
| **Consumer lag** | Consumer delay | > 5 minutes |

---

## 10. Final Summary Table

| Concept | What It Is | Mario Analogy |
|---------|-----------|---------------|
| **Message Queue** | Asynchronous message queue | Parakoopa mail carriers in line |
| **RabbitMQ** | Open-source message broker | Mushroom Kingdom central post office |
| **Azure Service Bus** | Managed message broker | Royal express mail |
| **Producer** | Who sends messages | Mario writing letters |
| **Consumer** | Who receives and processes | Luigi reading letters |
| **Pub/Sub** | Publish to multiple subscribers | Bulletin board — everyone reads |
| **Dead Letter Queue** | Queue for failed messages | Returned mail box |
| **ACK** | Processing confirmation | Signature of receipt |
| **Exchange** | Message router | Post office sorting room |
| **Idempotency** | Processing 2x = same result | Delivering letter 2x doesn't duplicate the effect |
| **Saga** | Distributed transaction with compensation | Multi-step mission with undo |
| **Outbox** | Ensure consistency between database + queue | Register in the book AND send the letter |

---

## References

- [RabbitMQ — Official Documentation](https://www.rabbitmq.com/documentation.html)
- [Azure Service Bus — Documentation](https://learn.microsoft.com/en-us/azure/service-bus-messaging/)
- [Azure Service Bus — Node.js SDK](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-nodejs-how-to-use-queues)
- [Microsoft — Cloud Design Patterns: Competing Consumers](https://learn.microsoft.com/en-us/azure/architecture/patterns/competing-consumers)
- [Microsoft — Saga Pattern](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga)
- [Microsoft — Outbox Pattern](https://learn.microsoft.com/en-us/azure/architecture/best-practices/transactional-outbox-cosmos)
- [CloudAMQP — RabbitMQ Tutorials](https://www.cloudamqp.com/blog/part1-rabbitmq-for-beginners-what-is-rabbitmq.html)
- [Martin Fowler — Event-Driven Architecture](https://martinfowler.com/articles/201701-event-driven.html)
- [amqplib — Node.js AMQP Client](https://www.npmjs.com/package/amqplib)

---

*Level 4-8 complete! You learned how systems communicate asynchronously using queues and messaging. Now, get ready for the Boss Battle of World 4 — architecture challenges that will test everything you've learned!*
