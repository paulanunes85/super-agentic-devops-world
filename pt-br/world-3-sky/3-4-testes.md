---
title: "Fase 3-4 -- Treinando Antes da Batalha: Testes de Software"
description: "Testes de software desmistificados com analogia Mario — testes unitarios como bonecos de treino, integracao como duplas de inimigos, E2E como simulacao completa de batalha, e TDD como planejar a luta antes de lutar"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-3", "testes", "jest", "tdd", "qa", "test-pyramid"]
---

# Fase 3-4 -- Treinando Antes da Batalha: Testes de Software

---

## Change Log

| Versao | Data       | Autor                                      | Descricao                     |
|--------|------------|--------------------------------------------|-------------------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial (Edicao Mario)|

---

## Sumario

- [Prologo: O Dojo de Treinamento](#prologo-o-dojo-de-treinamento)
- [1. Por Que Testar?](#1-por-que-testar)
  - [1.1 O Custo de Nao Testar](#11-o-custo-de-nao-testar)
  - [1.2 Confianca para Mudar](#12-confianca-para-mudar)
  - [1.3 Documentacao Viva](#13-documentacao-viva)
- [2. A Piramide de Testes: Muitos Pequenos, Poucos Grandes](#2-a-piramide-de-testes-muitos-pequenos-poucos-grandes)
  - [2.1 Base: Testes Unitarios (Muitos)](#21-base-testes-unitarios-muitos)
  - [2.2 Meio: Testes de Integracao (Alguns)](#22-meio-testes-de-integracao-alguns)
  - [2.3 Topo: Testes End-to-End (Poucos)](#23-topo-testes-end-to-end-poucos)
  - [2.4 Diagrama da Piramide](#24-diagrama-da-piramide)
- [3. Testes Unitarios: Acertando um Dummy de Cada Vez](#3-testes-unitarios-acertando-um-dummy-de-cada-vez)
  - [3.1 O Que e um Teste Unitario?](#31-o-que-e-um-teste-unitario)
  - [3.2 Anatomia de um Teste: Arrange-Act-Assert](#32-anatomia-de-um-teste-arrange-act-assert)
  - [3.3 Jest: A Arena de Treinamento](#33-jest-a-arena-de-treinamento)
  - [3.4 Primeiro Teste com Jest](#34-primeiro-teste-com-jest)
  - [3.5 Matchers: As Verificacoes](#35-matchers-as-verificacoes)
  - [3.6 Testando Funcoes Reais do TodoApp](#36-testando-funcoes-reais-do-todoapp)
- [4. Testes de Integracao: Dois Dummies ao Mesmo Tempo](#4-testes-de-integracao-dois-dummies-ao-mesmo-tempo)
  - [4.1 O Que e um Teste de Integracao?](#41-o-que-e-um-teste-de-integracao)
  - [4.2 Testando API + Banco de Dados](#42-testando-api--banco-de-dados)
  - [4.3 Supertest: Testando APIs HTTP](#43-supertest-testando-apis-http)
  - [4.4 Banco de Dados de Teste](#44-banco-de-dados-de-teste)
- [5. Testes End-to-End: Simulacao Completa de Batalha](#5-testes-end-to-end-simulacao-completa-de-batalha)
  - [5.1 O Que e um Teste E2E?](#51-o-que-e-um-teste-e2e)
  - [5.2 Cypress e Playwright: Os Simuladores](#52-cypress-e-playwright-os-simuladores)
  - [5.3 Exemplo de Teste E2E](#53-exemplo-de-teste-e2e)
- [6. TDD: Planejar a Luta Antes de Lutar](#6-tdd-planejar-a-luta-antes-de-lutar)
  - [6.1 O Que e TDD?](#61-o-que-e-tdd)
  - [6.2 O Ciclo Red-Green-Refactor](#62-o-ciclo-red-green-refactor)
  - [6.3 TDD na Pratica: Criando uma Funcao de Filtro](#63-tdd-na-pratica-criando-uma-funcao-de-filtro)
  - [6.4 Quando Usar TDD e Quando Nao Usar](#64-quando-usar-tdd-e-quando-nao-usar)
- [7. Mocks, Stubs e Spies: Bonecos de Substituicao](#7-mocks-stubs-e-spies-bonecos-de-substituicao)
  - [7.1 Mock: O Dublê de Acao](#71-mock-o-duble-de-acao)
  - [7.2 Stub: A Resposta Programada](#72-stub-a-resposta-programada)
  - [7.3 Spy: O Espiao](#73-spy-o-espiao)
  - [7.4 Quando Usar Cada Um](#74-quando-usar-cada-um)
- [8. Coverage: Porcentagem de Dummies Testados](#8-coverage-porcentagem-de-dummies-testados)
  - [8.1 O Que e Coverage?](#81-o-que-e-coverage)
  - [8.2 Gerando Relatorio de Coverage com Jest](#82-gerando-relatorio-de-coverage-com-jest)
  - [8.3 Qual Porcentagem Mirar?](#83-qual-porcentagem-mirar)
  - [8.4 Coverage Nao e Tudo](#84-coverage-nao-e-tudo)
- [9. Testes de Componentes React](#9-testes-de-componentes-react)
  - [9.1 Testing Library: Testando Como o Usuario](#91-testing-library-testando-como-o-usuario)
  - [9.2 Testando Renderizacao](#92-testando-renderizacao)
  - [9.3 Testando Interacoes](#93-testando-interacoes)
  - [9.4 Testando Estados e Efeitos](#94-testando-estados-e-efeitos)
- [10. Testes no CI/CD: Automatizando o Dojo](#10-testes-no-cicd-automatizando-o-dojo)
  - [10.1 Testes no GitHub Actions](#101-testes-no-github-actions)
  - [10.2 Bloqueando PRs sem Testes](#102-bloqueando-prs-sem-testes)
- [11. QA: A Princesa Peach em Acao](#11-qa-a-princesa-peach-em-acao)
  - [11.1 O Papel do QA](#111-o-papel-do-qa)
  - [11.2 QA Manual vs QA Automatizado](#112-qa-manual-vs-qa-automatizado)
- [Resumo -- O que Aprendemos na Fase 3-4](#resumo----o-que-aprendemos-na-fase-3-4)
- [Referencias](#referencias)

---

## Prologo: O Dojo de Treinamento

Sofia estava prestes a fazer deploy do TodoApp. Tudo parecia funcionar. Ela clicou em "Adicionar Tarefa" -- funcionou. Clicou em "Marcar como Concluida" -- funcionou. Clicou em "Deletar" -- funcionou.

*"Pronto! Funciona perfeitamente!"* disse Sofia, ja com o dedo no botao de deploy.

Peach -- a Engenheira de QA -- apareceu voando com seu guarda-chuva e pousou suavemente.

*"Espere, Sofia. Voce testou com tarefa vazia? Com texto de 10.000 caracteres? Com caracteres especiais? Com dois usuarios ao mesmo tempo? Com internet lenta? Com o banco de dados fora do ar?"*

Sofia ficou calada.

*"Voce fez 3 testes manuais e achou que estava pronta,"* disse Peach gentilmente. *"Mas um TodoApp tem centenas de cenarios possiveis. Testar manualmente cada um levaria dias. E toda vez que voce mudar uma linha de codigo, teria que testar TUDO de novo."*

*"Entao como eu testo tudo isso?"*

Peach sorriu e abriu a porta de um dojo. Dentro, havia centenas de bonecos de treinamento (dummies), cada um representando um cenario diferente.

*"Voce nao testa manualmente. Voce escreve **codigo que testa o codigo**. Cada boneco de treino e um teste automatizado. Uma vez escrito, ele testa para voce PARA SEMPRE. Toda vez que voce muda algo, os bonecos testam tudo em segundos."*

*"Bem-vinda a Fase 3-4. Aqui voce vai aprender a treinar antes de qualquer batalha."*

---

## 1. Por Que Testar?

### 1.1 O Custo de Nao Testar

| Quando o Bug e Encontrado | Custo para Corrigir | Analogia Mario |
|--------------------------|--------------------|-----------------|
| Durante o desenvolvimento | 1x (barato) | Morrer no treino -- sem consequencias |
| No code review | 5x | Morrer no ensaio geral -- time percebe |
| Em staging/QA | 10x | Morrer na fase antes do boss -- atrasa tudo |
| Em producao | 100x | Morrer na Boss Battle final -- Game Over publico |
| Descoberto pelo usuario | 1000x | Game Over + jogadores desinstalam o jogo |

**Dados reais da industria:**
- Empresas gastam **30-50% do tempo de desenvolvimento** corrigindo bugs
- Bugs encontrados em producao custam **6-100x mais** que bugs encontrados em testes
- Software bem testado tem **40-90% menos bugs** em producao

### 1.2 Confianca para Mudar

O beneficio mais subestimado dos testes e a **confianca para mudar codigo**.

Sem testes: *"Vou mudar essa funcao... mas e se quebrar algo? Melhor nao mexer."*

Com testes: *"Vou mudar essa funcao. Se eu quebrar algo, os testes vao me avisar em 30 segundos."*

> **ANALOGIA MARIO:** Testes sao como ter um **campo de treinamento** antes de cada boss battle. Voce pode experimentar estrategias, testar ataques diferentes, ver o que funciona -- tudo sem perder vidas de verdade. Quando voce entra na batalha real, ja sabe exatamente o que fazer.

### 1.3 Documentacao Viva

Testes bem escritos funcionam como **documentacao** do seu codigo. Alguem novo no projeto pode ler os testes e entender:

- O que cada funcao faz
- Quais inputs sao aceitos
- Quais outputs sao esperados
- Quais casos extremos foram considerados

```javascript
// Este teste e tambem documentacao:
describe('calcularDesconto', () => {
  it('deve aplicar 10% de desconto para compras acima de R$100', () => {
    expect(calcularDesconto(150)).toBe(135);
  });

  it('nao deve aplicar desconto para compras abaixo de R$100', () => {
    expect(calcularDesconto(50)).toBe(50);
  });

  it('deve retornar 0 para valores negativos', () => {
    expect(calcularDesconto(-10)).toBe(0);
  });
});
// Lendo esses testes, voce sabe EXATAMENTE como calcularDesconto funciona!
```

---

## 2. A Piramide de Testes: Muitos Pequenos, Poucos Grandes

### 2.1 Base: Testes Unitarios (Muitos)

- **O que testam:** Uma funcao, um metodo, uma unidade isolada
- **Quantidade:** Centenas a milhares
- **Velocidade:** Milissegundos cada
- **Custo de manutencao:** Baixo

### 2.2 Meio: Testes de Integracao (Alguns)

- **O que testam:** Duas ou mais partes funcionando juntas
- **Quantidade:** Dezenas a centenas
- **Velocidade:** Segundos cada
- **Custo de manutencao:** Medio

### 2.3 Topo: Testes End-to-End (Poucos)

- **O que testam:** O sistema inteiro, do inicio ao fim
- **Quantidade:** Dezenas
- **Velocidade:** Minutos cada
- **Custo de manutencao:** Alto

### 2.4 Diagrama da Piramide

```
        /\
       /  \          E2E (poucos, lentos, caros)
      / E2E\         = Simulacao completa de batalha
     /______\
    /        \       Integracao (alguns, medios)
   /Integracao\      = Dois dummies ao mesmo tempo
  /____________\
 /              \    Unitarios (muitos, rapidos, baratos)
/ Testes Unitarios\  = Um dummy de cada vez
/==================\
```

> **ANALOGIA MARIO:** A piramide de testes e como o treinamento antes de enfrentar o Bowser:
>
> **Base (Unitarios):** Treinar CADA golpe individualmente. Pulo? Perfeito. Fireball? Perfeito. Corrida? Perfeita. Centenas de repeticoes de cada movimento isolado.
>
> **Meio (Integracao):** Combinar golpes. Pulo + fireball em sequencia. Corrida + pulo longo sobre buraco. Dezenas de combinacoes.
>
> **Topo (E2E):** Simular a batalha inteira contra o Bowser. Do comeco ao fim, como se fosse de verdade. So algumas vezes, porque demora e cansa.
>
> Se voce so treinar golpes isolados (unitarios), pode falhar na combinacao. Se voce so treinar a batalha completa (E2E), nao melhora os golpes individuais. O segredo e a **piramide**: muita base, algum meio, pouco topo.


---

## 3. Testes Unitarios: Acertando um Dummy de Cada Vez

### 3.1 O Que e um Teste Unitario?

Um teste unitario verifica UMA coisa. Uma funcao. Um metodo. Uma unidade de comportamento. Se a funcao recebe X, deve retornar Y. Ponto.

```javascript
// Funcao a testar
function somar(a, b) {
  return a + b;
}

// Teste unitario
test('somar 2 + 3 deve retornar 5', () => {
  expect(somar(2, 3)).toBe(5);
});
```

> **ANALOGIA MARIO:** Teste unitario = acertar **um boneco de treinamento** de cada vez. Voce nao esta lutando contra o boss. Voce esta praticando um golpe especifico num alvo especifico. "O pulo atinge o Goomba?" Sim? Proximo boneco.

### 3.2 Anatomia de um Teste: Arrange-Act-Assert

Todo teste segue o padrao **AAA** (Arrange-Act-Assert):

```javascript
test('deve marcar tarefa como concluida', () => {
  // ARRANGE (Preparar) -- Montar o cenario
  const tarefa = { id: 1, titulo: 'Estudar', concluida: false };

  // ACT (Agir) -- Executar a acao
  const resultado = concluirTarefa(tarefa);

  // ASSERT (Verificar) -- Conferir o resultado
  expect(resultado.concluida).toBe(true);
});
```

> **ANALOGIA MARIO:**
> - **Arrange** = Posicionar o dummy (boneco de treino) no lugar certo
> - **Act** = Desferir o golpe
> - **Assert** = Verificar se o dummy caiu / se o ataque acertou

### 3.3 Jest: A Arena de Treinamento

**Jest** e o framework de testes mais popular para JavaScript/TypeScript. E rapido, simples, e vem com tudo embutido (runner, matchers, mocks, coverage).

**Instalacao:**

```bash
$ npm install -D jest @types/jest ts-jest
```

**Configuracao basica (`jest.config.js`):**

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts', '**/*.spec.ts'],
  collectCoverageFrom: ['src/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
```

**Scripts no `package.json`:**

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### 3.4 Primeiro Teste com Jest

**Arquivo de codigo (`src/utils/tarefa.ts`):**

```typescript
export interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
  criadaEm: Date;
}

export function criarTarefa(titulo: string): Tarefa {
  if (!titulo || titulo.trim() === '') {
    throw new Error('Titulo nao pode ser vazio');
  }

  return {
    id: Date.now(),
    titulo: titulo.trim(),
    concluida: false,
    criadaEm: new Date(),
  };
}

export function concluirTarefa(tarefa: Tarefa): Tarefa {
  return { ...tarefa, concluida: true };
}

export function filtrarConcluidas(tarefas: Tarefa[]): Tarefa[] {
  return tarefas.filter(t => t.concluida);
}

export function filtrarPendentes(tarefas: Tarefa[]): Tarefa[] {
  return tarefas.filter(t => !t.concluida);
}
```

**Arquivo de teste (`src/utils/tarefa.test.ts`):**

```typescript
import {
  criarTarefa,
  concluirTarefa,
  filtrarConcluidas,
  filtrarPendentes,
  Tarefa,
} from './tarefa';

describe('criarTarefa', () => {
  it('deve criar uma tarefa com titulo correto', () => {
    const tarefa = criarTarefa('Estudar TypeScript');
    expect(tarefa.titulo).toBe('Estudar TypeScript');
  });

  it('deve criar tarefa como nao concluida', () => {
    const tarefa = criarTarefa('Fazer deploy');
    expect(tarefa.concluida).toBe(false);
  });

  it('deve remover espacos extras do titulo', () => {
    const tarefa = criarTarefa('  Limpar codigo  ');
    expect(tarefa.titulo).toBe('Limpar codigo');
  });

  it('deve lancar erro com titulo vazio', () => {
    expect(() => criarTarefa('')).toThrow('Titulo nao pode ser vazio');
  });

  it('deve lancar erro com titulo so de espacos', () => {
    expect(() => criarTarefa('   ')).toThrow('Titulo nao pode ser vazio');
  });

  it('deve gerar ID unico', () => {
    const t1 = criarTarefa('Tarefa 1');
    const t2 = criarTarefa('Tarefa 2');
    expect(t1.id).not.toBe(t2.id);
  });
});

describe('concluirTarefa', () => {
  it('deve marcar tarefa como concluida', () => {
    const tarefa = criarTarefa('Testar app');
    const concluida = concluirTarefa(tarefa);
    expect(concluida.concluida).toBe(true);
  });

  it('nao deve modificar a tarefa original (imutabilidade)', () => {
    const tarefa = criarTarefa('Imutavel');
    concluirTarefa(tarefa);
    expect(tarefa.concluida).toBe(false); // original inalterada
  });
});

describe('filtrarConcluidas', () => {
  const tarefas: Tarefa[] = [
    { id: 1, titulo: 'A', concluida: true, criadaEm: new Date() },
    { id: 2, titulo: 'B', concluida: false, criadaEm: new Date() },
    { id: 3, titulo: 'C', concluida: true, criadaEm: new Date() },
  ];

  it('deve retornar apenas tarefas concluidas', () => {
    const resultado = filtrarConcluidas(tarefas);
    expect(resultado).toHaveLength(2);
    expect(resultado.every(t => t.concluida)).toBe(true);
  });

  it('deve retornar array vazio se nenhuma concluida', () => {
    const pendentes = [
      { id: 1, titulo: 'A', concluida: false, criadaEm: new Date() },
    ];
    expect(filtrarConcluidas(pendentes)).toHaveLength(0);
  });
});

describe('filtrarPendentes', () => {
  it('deve retornar apenas tarefas pendentes', () => {
    const tarefas: Tarefa[] = [
      { id: 1, titulo: 'A', concluida: true, criadaEm: new Date() },
      { id: 2, titulo: 'B', concluida: false, criadaEm: new Date() },
    ];
    const resultado = filtrarPendentes(tarefas);
    expect(resultado).toHaveLength(1);
    expect(resultado[0].titulo).toBe('B');
  });
});
```

**Rodando os testes:**

```bash
$ npm test

 PASS  src/utils/tarefa.test.ts
  criarTarefa
    ✓ deve criar uma tarefa com titulo correto (2 ms)
    ✓ deve criar tarefa como nao concluida (1 ms)
    ✓ deve remover espacos extras do titulo
    ✓ deve lancar erro com titulo vazio (3 ms)
    ✓ deve lancar erro com titulo so de espacos (1 ms)
    ✓ deve gerar ID unico (1 ms)
  concluirTarefa
    ✓ deve marcar tarefa como concluida
    ✓ nao deve modificar a tarefa original (imutabilidade)
  filtrarConcluidas
    ✓ deve retornar apenas tarefas concluidas
    ✓ deve retornar array vazio se nenhuma concluida
  filtrarPendentes
    ✓ deve retornar apenas tarefas pendentes

Tests: 11 passed, 11 total
Time:  1.2 s
```

### 3.5 Matchers: As Verificacoes

Jest oferece dezenas de **matchers** (verificacoes):

| Matcher | O que verifica | Exemplo |
|---------|---------------|---------|
| `toBe(x)` | Igualdade exata | `expect(2+2).toBe(4)` |
| `toEqual(x)` | Igualdade profunda (objetos) | `expect(obj).toEqual({a:1})` |
| `toBeTruthy()` | Valor verdadeiro | `expect('texto').toBeTruthy()` |
| `toBeFalsy()` | Valor falso | `expect(0).toBeFalsy()` |
| `toBeNull()` | Valor null | `expect(null).toBeNull()` |
| `toBeUndefined()` | Valor undefined | `expect(undefined).toBeUndefined()` |
| `toContain(x)` | Array contem item | `expect([1,2,3]).toContain(2)` |
| `toHaveLength(n)` | Array tem N itens | `expect([1,2]).toHaveLength(2)` |
| `toThrow()` | Funcao lanca erro | `expect(fn).toThrow()` |
| `toMatch(regex)` | String combina regex | `expect('abc').toMatch(/b/)` |
| `toBeGreaterThan(n)` | Maior que | `expect(10).toBeGreaterThan(5)` |
| `toHaveBeenCalled()` | Mock foi chamado | `expect(mockFn).toHaveBeenCalled()` |

### 3.6 Testando Funcoes Reais do TodoApp

```typescript
describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(); // Reset antes de cada teste
  });

  describe('adicionar', () => {
    it('deve adicionar tarefa a lista', () => {
      service.adicionar('Nova tarefa');
      expect(service.listar()).toHaveLength(1);
    });

    it('deve rejeitar tarefa duplicada', () => {
      service.adicionar('Estudar');
      expect(() => service.adicionar('Estudar')).toThrow('Tarefa ja existe');
    });

    it('deve aceitar tarefa com ate 200 caracteres', () => {
      const titulo = 'a'.repeat(200);
      expect(() => service.adicionar(titulo)).not.toThrow();
    });

    it('deve rejeitar tarefa com mais de 200 caracteres', () => {
      const titulo = 'a'.repeat(201);
      expect(() => service.adicionar(titulo)).toThrow('Titulo muito longo');
    });
  });

  describe('remover', () => {
    it('deve remover tarefa existente', () => {
      service.adicionar('Para remover');
      service.remover(1);
      expect(service.listar()).toHaveLength(0);
    });

    it('deve lancar erro ao remover tarefa inexistente', () => {
      expect(() => service.remover(999)).toThrow('Tarefa nao encontrada');
    });
  });
});
```

---

## 4. Testes de Integracao: Dois Dummies ao Mesmo Tempo

### 4.1 O Que e um Teste de Integracao?

Testes de integracao verificam se **duas ou mais partes** funcionam corretamente juntas. Uma funcao pode funcionar perfeita isolada, mas falhar ao se comunicar com o banco de dados.

> **ANALOGIA MARIO:** Treinar o pulo funciona perfeito no ar (unitario). Mas e o pulo SOBRE uma plataforma movel? E o pulo seguido de fireball? Integracao testa a combinacao: duas pecas do jogo interagindo.

### 4.2 Testando API + Banco de Dados

```typescript
import { app } from '../src/app';
import { prisma } from '../src/database';
import request from 'supertest';

describe('API de Tarefas (integracao)', () => {
  // Limpar banco antes de cada teste
  beforeEach(async () => {
    await prisma.tarefa.deleteMany();
  });

  // Fechar conexao depois de todos os testes
  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('POST /api/tarefas', () => {
    it('deve criar tarefa e salvar no banco', async () => {
      const response = await request(app)
        .post('/api/tarefas')
        .send({ titulo: 'Tarefa de teste' })
        .expect(201);

      expect(response.body.titulo).toBe('Tarefa de teste');
      expect(response.body.id).toBeDefined();

      // Verificar que realmente salvou no banco
      const tarefaNoBanco = await prisma.tarefa.findUnique({
        where: { id: response.body.id },
      });
      expect(tarefaNoBanco).not.toBeNull();
      expect(tarefaNoBanco?.titulo).toBe('Tarefa de teste');
    });

    it('deve retornar 400 com titulo vazio', async () => {
      const response = await request(app)
        .post('/api/tarefas')
        .send({ titulo: '' })
        .expect(400);

      expect(response.body.error).toBe('Titulo nao pode ser vazio');
    });
  });

  describe('GET /api/tarefas', () => {
    it('deve listar todas as tarefas', async () => {
      // Arrange: criar 3 tarefas direto no banco
      await prisma.tarefa.createMany({
        data: [
          { titulo: 'Tarefa 1' },
          { titulo: 'Tarefa 2' },
          { titulo: 'Tarefa 3' },
        ],
      });

      // Act + Assert
      const response = await request(app)
        .get('/api/tarefas')
        .expect(200);

      expect(response.body).toHaveLength(3);
    });
  });

  describe('PATCH /api/tarefas/:id/concluir', () => {
    it('deve marcar tarefa como concluida', async () => {
      const tarefa = await prisma.tarefa.create({
        data: { titulo: 'Para concluir' },
      });

      const response = await request(app)
        .patch(`/api/tarefas/${tarefa.id}/concluir`)
        .expect(200);

      expect(response.body.concluida).toBe(true);
    });
  });
});
```

### 4.3 Supertest: Testando APIs HTTP

**Supertest** permite testar endpoints HTTP sem precisar subir o servidor:

```bash
$ npm install -D supertest @types/supertest
```

Ele envia requisicoes HTTP reais para seu app Express/Fastify e verifica as respostas.

### 4.4 Banco de Dados de Teste

**Regra de ouro:** NUNCA use o banco de producao para testes. Use um banco separado.

```bash
# .env.test
DATABASE_URL="postgresql://user:pass@localhost:5432/todoapp_test"
```

```json
// package.json
{
  "scripts": {
    "test:integration": "DATABASE_URL=postgresql://... jest --config jest.integration.config.js"
  }
}
```

---

## 5. Testes End-to-End: Simulacao Completa de Batalha

### 5.1 O Que e um Teste E2E?

Testes E2E (End-to-End) simulam **um usuario real** usando sua aplicacao. Abrem um navegador, clicam em botoes, preenchem formularios, e verificam se tudo funciona.

> **ANALOGIA MARIO:** E2E e a **simulacao completa de batalha**. Nao e treinar um golpe (unitario). Nao e combinar dois golpes (integracao). E jogar a fase INTEIRA, do inicio ao fim, como se fosse de verdade. Entrar no castelo, passar pelos inimigos, pegar o power-up, desviar da lava, e derrotar o boss.

### 5.2 Cypress e Playwright: Os Simuladores

| Ferramenta | Vantagem | Desvantagem |
|-----------|----------|-------------|
| **Cypress** | Facil de aprender, debug visual | So Chrome (por padrao) |
| **Playwright** | Multi-browser, rapido, Microsoft | Curva um pouco maior |

### 5.3 Exemplo de Teste E2E

**Com Playwright:**

```typescript
import { test, expect } from '@playwright/test';

test.describe('TodoApp - Fluxo completo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('deve adicionar, concluir e remover uma tarefa', async ({ page }) => {
    // 1. Adicionar tarefa
    await page.fill('[data-testid="input-nova-tarefa"]', 'Comprar leite');
    await page.click('[data-testid="btn-adicionar"]');

    // Verificar que apareceu na lista
    await expect(page.locator('[data-testid="lista-tarefas"]'))
      .toContainText('Comprar leite');

    // 2. Marcar como concluida
    await page.click('[data-testid="checkbox-tarefa-1"]');

    // Verificar que esta riscada
    await expect(page.locator('[data-testid="tarefa-1"]'))
      .toHaveClass(/concluida/);

    // 3. Remover tarefa
    await page.click('[data-testid="btn-remover-1"]');

    // Verificar que sumiu
    await expect(page.locator('[data-testid="lista-tarefas"]'))
      .not.toContainText('Comprar leite');
  });

  test('deve mostrar mensagem quando lista esta vazia', async ({ page }) => {
    await expect(page.locator('[data-testid="mensagem-vazia"]'))
      .toContainText('Nenhuma tarefa cadastrada');
  });

  test('deve persistir tarefas apos recarregar pagina', async ({ page }) => {
    // Adicionar tarefa
    await page.fill('[data-testid="input-nova-tarefa"]', 'Persistente');
    await page.click('[data-testid="btn-adicionar"]');

    // Recarregar pagina
    await page.reload();

    // Tarefa deve continuar la
    await expect(page.locator('[data-testid="lista-tarefas"]'))
      .toContainText('Persistente');
  });
});
```

---

## 6. TDD: Planejar a Luta Antes de Lutar

### 6.1 O Que e TDD?

**TDD** (Test-Driven Development) e uma tecnica onde voce escreve o **teste ANTES do codigo**. Parece estranho? E como planejar a estrategia de batalha antes de entrar na arena.

### 6.2 O Ciclo Red-Green-Refactor

```
1. RED    → Escreva um teste que FALHA (o codigo ainda nao existe)
2. GREEN  → Escreva o MINIMO de codigo para o teste PASSAR
3. REFACTOR → Melhore o codigo mantendo os testes passando
```

```
    ┌──────────┐
    │   RED    │ ← Escrever teste que falha
    │  (falha) │
    └────┬─────┘
         │
    ┌────▼─────┐
    │  GREEN   │ ← Escrever codigo minimo
    │ (passa)  │
    └────┬─────┘
         │
    ┌────▼─────┐
    │ REFACTOR │ ← Melhorar codigo
    │(continua)│   (testes continuam passando)
    └────┬─────┘
         │
         └──────→ Volta para RED (proximo teste)
```

> **ANALOGIA MARIO:** TDD e como **planejar a luta antes de lutar**:
>
> **RED:** Voce desenha no papel: "O pulo deve atingir o Goomba a 3 blocos de distancia." O teste existe, mas Mario ainda nao sabe pular assim -- FALHA.
>
> **GREEN:** Voce ensina Mario a pular exatamente 3 blocos. Agora o teste PASSA.
>
> **REFACTOR:** Voce melhora a animacao do pulo, otimiza a fisica -- mas o pulo continua atingindo 3 blocos. Testes continuam passando.

### 6.3 TDD na Pratica: Criando uma Funcao de Filtro

**Passo 1 -- RED:** Escrever o teste primeiro

```typescript
// filtro.test.ts
import { filtrarPorPrioridade } from './filtro';

describe('filtrarPorPrioridade', () => {
  it('deve retornar tarefas de prioridade alta', () => {
    const tarefas = [
      { id: 1, titulo: 'A', prioridade: 'alta' },
      { id: 2, titulo: 'B', prioridade: 'baixa' },
      { id: 3, titulo: 'C', prioridade: 'alta' },
    ];

    const resultado = filtrarPorPrioridade(tarefas, 'alta');
    expect(resultado).toHaveLength(2);
  });
});
```

```bash
$ npm test
FAIL  filtro.test.ts
  ✕ deve retornar tarefas de prioridade alta
  # Cannot find module './filtro'
```

**Passo 2 -- GREEN:** Escrever o minimo de codigo

```typescript
// filtro.ts
export function filtrarPorPrioridade(tarefas: any[], prioridade: string) {
  return tarefas.filter(t => t.prioridade === prioridade);
}
```

```bash
$ npm test
PASS  filtro.test.ts
  ✓ deve retornar tarefas de prioridade alta
```

**Passo 3 -- REFACTOR:** Melhorar com tipos e seguranca

```typescript
// filtro.ts (refatorado)
type Prioridade = 'alta' | 'media' | 'baixa';

interface TarefaComPrioridade {
  id: number;
  titulo: string;
  prioridade: Prioridade;
}

export function filtrarPorPrioridade(
  tarefas: TarefaComPrioridade[],
  prioridade: Prioridade
): TarefaComPrioridade[] {
  return tarefas.filter(t => t.prioridade === prioridade);
}
```

```bash
$ npm test
PASS  # Testes continuam passando! ✓
```

### 6.4 Quando Usar TDD e Quando Nao Usar

| Cenario | TDD? | Por Que |
|---------|------|---------|
| Logica de negocio complexa | Sim | Precisa de clareza antes de implementar |
| Funcoes utilitarias | Sim | Comportamento bem definido |
| Correcao de bug | Sim | Escreva teste que reproduz o bug primeiro |
| Prototipo rapido | Nao | Priorize velocidade, teste depois |
| Interface visual/CSS | Nao | Dificil de testar aparencia com codigo |
| Exploracao/pesquisa | Nao | Voce ainda nao sabe o que quer |

---

## 7. Mocks, Stubs e Spies: Bonecos de Substituicao

### 7.1 Mock: O Duble de Acao

Um **mock** substitui uma dependencia real por uma versao falsa controlada. Util quando voce nao quer chamar o banco de dados ou API real durante o teste.

```typescript
// Mock do servico de email
const enviarEmail = jest.fn();

test('deve enviar email ao criar tarefa urgente', () => {
  criarTarefaUrgente('Deploy urgente', enviarEmail);

  expect(enviarEmail).toHaveBeenCalledWith(
    'time@empresa.com',
    'Nova tarefa urgente: Deploy urgente'
  );
});
```

> **ANALOGIA MARIO:** Um mock e como um **boneco de treino que imita um inimigo real**. Voce nao quer lutar contra o Bowser de verdade no treino. Voce usa um boneco que se parece com o Bowser, se move como o Bowser, mas nao e o Bowser de verdade.

### 7.2 Stub: A Resposta Programada

Um **stub** e uma funcao que retorna um valor fixo, sem logica real.

```typescript
// Stub do banco de dados
const buscarTarefa = jest.fn().mockResolvedValue({
  id: 1,
  titulo: 'Tarefa mockada',
  concluida: false,
});

test('deve exibir tarefa do banco', async () => {
  const tarefa = await buscarTarefa(1);
  expect(tarefa.titulo).toBe('Tarefa mockada');
});
```

### 7.3 Spy: O Espiao

Um **spy** observa uma funcao real sem substitui-la. Ele registra se foi chamada, com quais argumentos, quantas vezes.

```typescript
test('deve chamar console.log ao concluir tarefa', () => {
  const spy = jest.spyOn(console, 'log');

  concluirTarefa(tarefa);

  expect(spy).toHaveBeenCalledWith('Tarefa concluida:', tarefa.titulo);
  spy.mockRestore(); // Restaurar original
});
```

### 7.4 Quando Usar Cada Um

| Ferramenta | Quando Usar | Analogia Mario |
|-----------|------------|----------------|
| **Mock** | Substituir dependencia externa (DB, API, email) | Boneco de treino imitando o boss |
| **Stub** | Fornecer resposta fixa controlada | Boneco que sempre cai no mesmo lugar |
| **Spy** | Observar sem modificar | Camera escondida no treino |

---

## 8. Coverage: Porcentagem de Dummies Testados

### 8.1 O Que e Coverage?

Coverage (cobertura) mede **qual porcentagem do seu codigo e executada pelos testes**.

- **Lines Coverage:** % de linhas executadas
- **Branch Coverage:** % de caminhos if/else testados
- **Functions Coverage:** % de funcoes chamadas
- **Statements Coverage:** % de instrucoes executadas

### 8.2 Gerando Relatorio de Coverage com Jest

```bash
$ npm test -- --coverage

--------------------|---------|----------|---------|---------|
File                | % Stmts | % Branch | % Funcs | % Lines |
--------------------|---------|----------|---------|---------|
All files           |   92.5  |    85.7  |   100   |   91.3  |
 tarefa.ts          |   100   |    100   |   100   |   100   |
 filtro.ts          |   100   |    100   |   100   |   100   |
 todoService.ts     |   85    |    71.4  |   100   |   83.3  |
--------------------|---------|----------|---------|---------|
```

### 8.3 Qual Porcentagem Mirar?

| Coverage | Significado | Recomendacao |
|----------|------------|-------------|
| 0-30% | Quase sem testes | Perigoso. Comece ja. |
| 30-50% | Cobrindo o basico | Minimo aceitavel para projetos pequenos |
| 50-70% | Boa cobertura | Padrao para maioria dos projetos |
| 70-80% | Muito boa cobertura | Ideal para projetos importantes |
| 80-90% | Excelente | Padrao para projetos criticos |
| 90-100% | Quase perfeito | Cuidado: 100% nao garante zero bugs |

### 8.4 Coverage Nao e Tudo

**CUIDADO:** Coverage alta nao significa testes bons. Voce pode ter 100% de coverage com testes ruins:

```typescript
// Teste com 100% coverage MAS inutil:
test('funcao existe', () => {
  calcularDesconto(100); // Executou a funcao (100% lines coverage)
  // Mas nao verificou o resultado! Sem expect!
});

// Teste com coverage E qualidade:
test('deve aplicar desconto correto', () => {
  expect(calcularDesconto(100)).toBe(90);   // Verificou!
  expect(calcularDesconto(50)).toBe(50);    // Testou edge case!
  expect(calcularDesconto(-1)).toBe(0);     // Testou erro!
});
```

> **ANALOGIA MARIO:** Coverage e como a **porcentagem de bonecos de treino que voce testou**. Ter testado 80% dos bonecos e otimo. Mas se voce so deu um tapinha leve em cada boneco (sem verificar se caiu), o treino nao valeu. Coverage mede QUANTIDADE. A qualidade dos `expect()` mede EFICACIA.

---

## 9. Testes de Componentes React

### 9.1 Testing Library: Testando Como o Usuario

**React Testing Library** testa componentes da perspectiva do usuario -- nao da perspectiva da implementacao.

```bash
$ npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

**Filosofia:** "Quanto mais seus testes se parecem com a forma que o usuario usa, mais confianca eles dao."

### 9.2 Testando Renderizacao

```typescript
import { render, screen } from '@testing-library/react';
import { TodoItem } from './TodoItem';

test('deve renderizar titulo da tarefa', () => {
  render(<TodoItem titulo="Comprar leite" concluida={false} />);

  expect(screen.getByText('Comprar leite')).toBeInTheDocument();
});

test('deve mostrar riscado quando concluida', () => {
  render(<TodoItem titulo="Feito" concluida={true} />);

  const elemento = screen.getByText('Feito');
  expect(elemento).toHaveStyle('text-decoration: line-through');
});
```

### 9.3 Testando Interacoes

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoForm } from './TodoForm';

test('deve chamar onSubmit ao adicionar tarefa', async () => {
  const handleSubmit = jest.fn();
  render(<TodoForm onSubmit={handleSubmit} />);

  // Digitar no input
  await userEvent.type(screen.getByRole('textbox'), 'Nova tarefa');

  // Clicar no botao
  await userEvent.click(screen.getByRole('button', { name: /adicionar/i }));

  // Verificar que a funcao foi chamada
  expect(handleSubmit).toHaveBeenCalledWith('Nova tarefa');
});

test('deve limpar input apos adicionar', async () => {
  render(<TodoForm onSubmit={jest.fn()} />);

  const input = screen.getByRole('textbox');
  await userEvent.type(input, 'Tarefa');
  await userEvent.click(screen.getByRole('button', { name: /adicionar/i }));

  expect(input).toHaveValue('');
});
```

### 9.4 Testando Estados e Efeitos

```typescript
import { render, screen, waitFor } from '@testing-library/react';
import { TodoList } from './TodoList';

// Mock da API
jest.mock('../api', () => ({
  fetchTarefas: jest.fn().mockResolvedValue([
    { id: 1, titulo: 'Tarefa do mock', concluida: false },
  ]),
}));

test('deve carregar tarefas da API ao montar', async () => {
  render(<TodoList />);

  // Aguardar carregamento assincrono
  await waitFor(() => {
    expect(screen.getByText('Tarefa do mock')).toBeInTheDocument();
  });
});

test('deve mostrar loading enquanto carrega', () => {
  render(<TodoList />);
  expect(screen.getByText('Carregando...')).toBeInTheDocument();
});
```

---

## 10. Testes no CI/CD: Automatizando o Dojo

### 10.1 Testes no GitHub Actions

```yaml
# .github/workflows/test.yml
name: Testes

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_PASSWORD: teste
          POSTGRES_DB: todoapp_test
        ports:
          - 5432:5432
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Instalar dependencias
        run: npm ci

      - name: Rodar testes unitarios
        run: npm test -- --coverage

      - name: Rodar testes de integracao
        run: npm run test:integration
        env:
          DATABASE_URL: postgresql://postgres:teste@localhost:5432/todoapp_test

      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

### 10.2 Bloqueando PRs sem Testes

Configure branch protection rules no GitHub para exigir que TODOS os testes passem antes de fazer merge:

1. Settings > Branches > Add rule
2. Branch name pattern: `main`
3. Marcar "Require status checks to pass"
4. Selecionar o job "test"

Agora, nenhum PR entra em `main` sem testes passando.

> **ANALOGIA MARIO:** E como colocar um **checkpoint obrigatorio** antes da Boss Battle. O jogo nao deixa voce entrar no castelo sem ter completado o treino. Da mesma forma, o GitHub nao deixa codigo entrar em `main` sem testes passando.

---

## 11. QA: A Princesa Peach em Acao

### 11.1 O Papel do QA

Peach -- a Engenheira de QA -- nao so roda testes automatizados. Ela:

1. **Planeja cenarios de teste** que devs nao pensaram
2. **Testa casos extremos** (edge cases)
3. **Faz testes exploratorios** (usa a app como usuario real)
4. **Verifica acessibilidade** (a app funciona para todos?)
5. **Testa performance** (a app aguenta muitos usuarios?)
6. **Documenta bugs** com passos para reproduzir

### 11.2 QA Manual vs QA Automatizado

| Tipo | Quando Usar | Feito por |
|------|------------|-----------|
| **Manual exploratorio** | Explorar fluxos novos, UX, acessibilidade | Humano (QA) |
| **Automatizado unitario** | Logica de negocio, funcoes puras | Codigo (Jest) |
| **Automatizado integracao** | API + Banco, servicos interagindo | Codigo (Supertest) |
| **Automatizado E2E** | Fluxos criticos (login, pagamento) | Codigo (Playwright) |
| **Visual regression** | Detectar mudancas visuais | Codigo (Percy, Chromatic) |
| **Performance** | Carga, stress, latencia | Ferramenta (k6, Artillery) |

---

## Resumo -- O que Aprendemos na Fase 3-4

| Conceito | Analogia Mario | Ferramenta |
|---------|----------------|-----------|
| Teste unitario | Um boneco de treino | Jest |
| Teste de integracao | Dois bonecos ao mesmo tempo | Jest + Supertest |
| Teste E2E | Simulacao completa de batalha | Playwright, Cypress |
| TDD | Planejar a luta antes | Red-Green-Refactor |
| Mock | Boneco imitando o boss | jest.fn() |
| Stub | Boneco com resposta fixa | mockResolvedValue |
| Spy | Camera escondida | jest.spyOn() |
| Coverage | % de bonecos testados | jest --coverage |
| Piramide | Muitos pequenos, poucos grandes | Estrategia |
| QA | Princesa Peach inspecionando | Manual + Automatizado |

**A grande licao:** Testes nao sao extras. Sao tao importantes quanto o codigo em si. Codigo sem testes e como um Mario que nunca treinou entrando na Boss Battle -- pode ate dar sorte uma vez, mas eventualmente vai perder. Testes dao a confianca para mudar, a seguranca para lancar, e a documentacao para entender. Escreva testes. Sempre.

---

## Referencias

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Cypress Documentation](https://docs.cypress.io/)
- [Testing Trophy -- Kent C. Dodds](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)
- [Test Pyramid -- Martin Fowler](https://martinfowler.com/articles/practical-test-pyramid.html)
- [TDD by Example -- Kent Beck](https://www.oreilly.com/library/view/test-driven-development/0321146530/)
- [Supertest -- GitHub](https://github.com/ladjs/supertest)
- [Jest Mocking -- Official Guide](https://jestjs.io/docs/mock-functions)
- [Microsoft Testing Best Practices](https://learn.microsoft.com/pt-br/dotnet/core/testing/unit-testing-best-practices)

---

*Fase 3-4 completa! Voce aprendeu a treinar antes de cada batalha. Na proxima fase, vamos explorar o mundo do Open Source -- onde desenvolvedores compartilham suas criacoes como niveis customizados do Mario.*

---

<div align="center">

⬅️ [Anterior: Fase 3-3: Docker](3-3-docker.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 3-5: Open Source](3-5-open_source.md)

</div>
