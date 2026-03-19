---
title: "Capitulo 4C — Custom Instructions / O Manual de Regras"
description: "Como configurar Custom Instructions para definir as regras permanentes que o Copilot segue em todos os contextos."
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "2.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-6", "instructions"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 2.0.0 | 2026-03-18 | Paula Silva | Versao Mario Bros — reescrita completa com analogias Super Mario |
| 1.0.0 | 2026-03-06 | Paula Silva | Versao original com analogias RPG |

# Capitulo 4C — Custom Instructions / O Manual de Regras — Leis do Jogo que o Copilot Segue Sempre

---

**Preparado para:** Sofia
**Versao:** 2.0 (Edicao Mario)
**Autora:** Paula Silva | Software Global Black Belt, Microsoft Americas
**Data:** Marco 2026
**Idioma:** Portugues do Brasil (pt-BR)
**Colecao:** Agentic DevOps

---

## SUMARIO

- [Introducao: O Manual de Regras do Jogo](#introducao-o-manual-de-regras-do-jogo)
- [Secao 1: O Que Sao Custom Instructions](#secao-1-o-que-sao-custom-instructions)
- [Secao 2: Os 3 Niveis de Instructions](#secao-2-os-3-niveis-de-instructions)
  - [Nivel 1: Regras Universais (gravidade)](#nivel-1-regras-universais-gravidade)
  - [Nivel 2: Regras da Fase (agua/ceu/castelo)](#nivel-2-regras-da-fase)
  - [Nivel 2B: Regras da Fase Aerea (Frontend)](#nivel-2b-regras-da-fase-aerea-frontend)
  - [Nivel 2C: Regras do Castelo (Banco de Dados)](#nivel-2c-regras-do-castelo-banco-de-dados)
- [Secao 3: O Campo applyTo em Detalhe](#secao-3-o-campo-applyto-em-detalhe)
- [Secao 4: Hierarquia de Prioridade](#secao-4-hierarquia-de-prioridade)
- [Secao 5: Tabela Comparativa — Instructions vs Skills vs Agents vs Prompts](#secao-5-tabela-comparativa)
- [Secao 6: Checklist de Boas Praticas](#secao-6-checklist-de-boas-praticas)
- [Bonus: Estrutura Recomendada de Arquivos](#bonus-estrutura-recomendada-de-arquivos)
- [Exemplo Pratico: Criar Instructions para um Projeto Real](#exemplo-pratico-criar-instructions-para-um-projeto-real)
- [Dicas Finais & Erros Comuns a Evitar](#dicas-finais--erros-comuns-a-evitar)

---

## Introducao: O Manual de Regras do Jogo

Sofia abriu o **Manual de Regras do Jogo**. Era um livro grosso que ficava ao lado de cada console — as Regras do Jogo que todo jogador obedece automaticamente. Nao importa em qual fase voce esteja, nao importa se voce e o Mario, o Luigi ou o Toad — essas regras se aplicam universalmente. Voce nao precisa ler o manual a cada pulo. Elas fazem parte do proprio jogo — como a **gravidade** que sempre puxa o Mario para baixo, como a **lava** que sempre mata, como as **moedas** que sempre curam.

Sofia percebeu que seu Copilot (um misterioso companheiro de jogo) tambem segue um conjunto de regras como essas. Essas regras especiais chamam-se **Custom Instructions**. E hoje, ela aprenderia como cria-las e domina-las para que o Copilot fizesse exatamente o que ela desejasse — sem ter que repetir os mesmos comandos fase apos fase.

---

## Secao 1: O Que Sao Custom Instructions

Custom Instructions sao **regras que o Copilot segue em CADA INTERACAO sem serem lembradas**. Elas formam o comportamento padrao do seu companheiro de jogo — verdades universais que se aplicam a todo projeto, codigo, documento ou conversacao.

> **REGRA CRUCIAL:** Instructions sao **PASSIVAS** (sempre ativas em todo lugar, como a gravidade no Mario), enquanto Skills sao **ATIVAS** (power-ups que voce ativa quando precisa, como pegar um Super Mushroom).

Pense em Instructions como as **REGRAS DO JOGO** — toda acao que acontece dentro do Mushroom Kingdom segue essas regras. Ninguem precisa ler o manual antes de cada pulo. A regra esta embutida no proprio motor do jogo. Se a regra diz "use TypeScript com strict mode", entao todo codigo escrito sera TypeScript com strict mode — automaticamente, em cada arquivo. Assim como a gravidade nao precisa ser "ativada" — ela simplesmente esta la, o tempo todo, em toda fase.

Em contraste, Skills sao como **POWER-UPS** que Sofia pode pegar quando precisar. "Peguei o Super Mushroom!" e o Copilot entra em modo especial para criar features. Mas quando o power-up acaba, volta ao comportamento padrao (as regras normais do jogo continuam valendo).

**As Instructions sao a GRAVIDADE DO MUSHROOM KINGDOM** — sempre la, invisivel, mas determinando tudo o que acontece. Voce nao "ativa" a gravidade. Ela simplesmente existe.

---

## Secao 2: Os 3 Niveis de Instructions

Assim como no Super Mario existem diferentes niveis de regras (regras que valem em TODO o jogo, regras que so valem em fases especificas, e o seu jeito pessoal de jogar), as Custom Instructions tambem funcionam em tres niveis:

### Nivel 1: Regras Universais (gravidade)

**Instrucoes em Toda a Repositorio** — `.github/copilot-instructions.md`

Este e o nivel da **GRAVIDADE** — as regras universais que governam todo o Mushroom Kingdom. Um arquivo unico que se aplica a TODA A REPOSITORIO, em todo arquivo, em toda interacao. Assim como a gravidade funciona igual no World 1-1, no World 4-3 e no World 8-4, essas instrucoes funcionam em todo canto do projeto.

**Localizacao:** `.github/copilot-instructions.md`

**Analogia Mario:** A gravidade — o documento fundamental que governa tudo. Voce nao pensa nela, mas ela esta sempre la.

```markdown
# Arquivo: .github/copilot-instructions.md
# Este arquivo contem as regras universais para TODO projeto

## Regras Universais da TodoApp (Gravidade do Jogo)

### 1. Linguagem de Programacao
- Use SEMPRE TypeScript com `strict: true` no tsconfig.json
- Declare tipos explicitamente para todas as funcoes
- Proiba `any` — use `unknown` e faca type narrowing

### 2. Framework React
- Use APENAS React Hooks (functional components)
- Proiba class components — sao magia proibida
- Use `useState`, `useEffect`, `useContext` — sao os tres pilares

### 3. Banco de Dados
- Use SEMPRE Prisma ORM
- Arquivo de schema: prisma/schema.prisma
- Nunca escreva SQL bruto — Prisma faz isso por voce

### 4. Estilos
- Use TailwindCSS — nada de CSS em JS
- Configure em tailwind.config.ts
- Cada classe deve ser justificada — sem bloat

### 5. Versionamento de Codigo
- Commits seguem Conventional Commits
- Prefixos: feat:, fix:, docs:, style:, refactor:, test:
- Exemplo: "feat: add user authentication flow"

### 6. Padroes de Codigo
- Funcoes puras quando possivel
- Error handling com try-catch e tipos Result<T, E>
- Logging com pino ou winston

### 7. Estrutura de Pastas
src/
├── components/          # Componentes React (apenas .tsx)
├── pages/               # Pages do Next.js
├── utils/               # Funcoes utilitarias
├── hooks/               # Custom React hooks
├── types/               # Tipos TypeScript globais
├── api/                 # Route handlers (API Routes)
└── prisma/              # Schema do banco
```

Este exemplo mostra uma repositorio TodoApp com regras universais. Cada personagem do time, ao comecar a jogar, automaticamente segue essas regras — assim como Mario automaticamente cai quando pula, sem ninguem precisar apertar um botao de "ativar gravidade".

### Nivel 2: Regras da Fase

**Instrucoes Especificas por Caminho** — `.github/instructions/backend.instructions.md`

Este e o nivel das **REGRAS DA FASE SUBAQUATICA** — regras regionais que se aplicam apenas a certas areas do jogo. Quando Mario entra numa fase debaixo d'agua, as regras mudam: ele nada em vez de correr, os pulos funcionam diferente, e inimigos como o Cheep Cheep aparecem. Mas a gravidade (regras universais) continua valendo!

**Localizacao:** `.github/instructions/backend.instructions.md` (para `backend/**/*.ts`)

**Analogia Mario:** Regras da fase subaquatica — a area de "Backend" tem suas proprias regras especializadas, mas a gravidade continua funcionando.

```markdown
# Arquivo: .github/instructions/backend.instructions.md
# applyTo: "backend/**/*.ts"
# Aplica-se APENAS a arquivos TypeScript na pasta backend/

## Regras da Fase Subaquatica: Backend

### 1. Estrutura de API
- Use Express.js ou Fastify como framework
- Endpoints seguem RESTful: GET /api/v1/users, POST /api/v1/users, etc.
- Versione sua API com /v1/, /v2/, etc.

### 2. Validacao de Entrada
- Use Zod para validacao de schemas
- Sempre valide req.body, req.params, req.query
- Retorne 400 Bad Request com mensagem de erro clara

### 3. Tratamento de Erros
- Crie uma classe AppError customizada
- Retorne sempre { success: boolean, data?, error? }
- Status codes: 200 (ok), 201 (criado), 400 (erro cliente), 500 (erro servidor)

### 4. Autenticacao & Autorizacao
- JWT com RS256 (assimetrico)
- Token no header: Authorization: Bearer <token>
- Middleware de verificacao em todas as rotas protegidas

### 5. Logging
- Use winston com niveis: error, warn, info, debug
- Log todas as operacoes criticas (login, pagamento, exclusao)
- Inclua requestId para rastreamento distribuido

### 6. Database
- Modelos Prisma no arquivo prisma/schema.prisma
- Migrations antes de fazer push: npx prisma migrate dev
- Nunca altere schema em producao sem planejar

### 7. Testes
- Teste unitario com Jest
- Cobertura minima de 80%
- Use fixtures para dados de teste
```

Com o atributo `applyTo`, essa instrucao se aplica APENAS quando voce trabalha com arquivos em `backend/**/*.ts` — como as regras de natacao que so valem quando Mario esta debaixo d'agua. Arquivos no frontend nao conhecem essas regras, assim como regras de fase aerea nao se aplicam debaixo d'agua.

### Nivel 2B: Regras da Fase Aerea (Frontend)

```markdown
# Arquivo: .github/instructions/frontend.instructions.md
# applyTo: "frontend/**/*.tsx"
# Aplica-se APENAS a arquivos React em frontend/

## Regras da Fase Aerea: Frontend

### 1. Componentes React
- Componentes funcionais APENAS
- Um componente por arquivo
- Nomes PascalCase: Button.tsx, UserCard.tsx

### 2. State Management
- useState para estado local
- useContext para estado global simples
- Zustand ou Redux para estado complexo

### 3. Props
- Use TypeScript interfaces para props
- Sempre destructure props no parametro
- Props sao readonly

### 4. Hooks Customizados
- Arquivo em src/hooks/useNome.ts
- Comecam com 'use'
- Documentados com comentarios JSDoc

### 5. Formularios
- Use react-hook-form + Zod
- Validacao em tempo real
- Mensagens de erro amigaveis

### 6. Estilos
- TailwindCSS em className=""
- Responsive design mobile-first
- Sem CSS modules a menos que absolutamente necessario

### 7. Performance
- Lazy load componentes grandes com React.lazy
- Memoize callbacks com useCallback
- useSelector apenas se necessario
```

### Nivel 2C: Regras do Castelo (Banco de Dados)

```markdown
# Arquivo: .github/instructions/database.instructions.md
# applyTo: "prisma/**/*"
# Aplica-se APENAS a arquivos Prisma

## Regras do Castelo: Banco de Dados

### 1. Schema Prisma
- Model nomes em PascalCase (User, Product, Order)
- Campos em camelCase (firstName, createdAt)
- Use tipos apropriados: String, Int, DateTime, Boolean

### 2. Relacionamentos
- Implemente relacionamentos sempre em ambas as direcoes
- One-to-Many com @relation
- Many-to-Many com @relation e join model

### 3. Timestamps
- Sempre inclua createdAt DateTime @default(now())
- Sempre inclua updatedAt DateTime @updatedAt
- Use para auditoria

### 4. Validacoes
- Campo unico: @unique
- Required vs optional: String vs String?
- Valores padrao com @default

### 5. Migracoes
- Nome descritivo: npx prisma migrate dev --name add_user_email
- Nunca delete colunas sem considerar dados existentes
- Teste migracoes localmente primeiro

### 6. Indices
- Indice em campos frequentemente buscados
- @@index([email]) para queries rapidas
- Indices compostos para queries complexas
```

---

## Secao 3: O Campo applyTo em Detalhe

O campo `applyTo` usa padroes glob para definir EXATAMENTE quais arquivos uma instrucao se aplica. Pense nisso como definir as **fronteiras de cada fase do Mario** — as regras da fase subaquatica so valem dentro da agua, as regras da fase aerea so valem no ceu.

Um padrao glob e um curinga que combina caminho de arquivo. Exemplos:

| Padrao Glob | O Que Combina | Caso de Uso |
|---|---|---|
| `backend/**/*.ts` | Todos .ts em backend/ e subpastas | Arquivos de backend TypeScript |
| `frontend/**/*.tsx` | Todos .tsx em frontend/ | Componentes React |
| `**/*.test.ts` | Qualquer .test.ts em qualquer lugar | Testes unitarios |
| `prisma/**/*` | Qualquer arquivo em prisma/ | Schema e migrations Prisma |
| `*.md` | Markdown na raiz apenas | Documentacao root (README.md) |
| `.github/workflows/**` | Arquivos de CI/CD | GitHub Actions workflows |
| `docker-compose*.yml` | docker-compose.yml e variantes | Arquivo Docker Compose |
| `**/*.css` | Arquivos CSS em qualquer lugar | Estilos globais |
| `src/**` | Tudo em src/ (inclusive subpastas) | Codigo fonte principal |
| `**/*.json` | JSON em qualquer lugar | Configuracoes (package.json, tsconfig.json) |

> **Dica:** Um padrao glob pode ser bem especifico (um unico arquivo, como um bloco especifico na fase) ou amplo (todo o mapa). Use-o para aplicar instrucoes apenas onde relevante — assim como regras de natacao so fazem sentido debaixo d'agua.

---

## Secao 4: Hierarquia de Prioridade

Quando multiplas instrucoes se aplicam a um arquivo, qual delas o Copilot segue? A resposta e uma hierarquia clara, como os niveis de regras no Mario:

**Regras Pessoais (seu estilo de jogar)** — PRIORIDADE MAXIMA: Suas instrucoes pessoais tem a maior prioridade. Sao arquivos em `~/.copilot/instructions.md` (macOS/Linux) ou equivalente no Windows. Elas SEMPRE vencem sobre qualquer outra. E como o seu estilo pessoal de jogar — se voce prefere speedrun, isso sobrescreve tudo.

**Regras da Fase (este projeto)** — PRIORIDADE MEDIA: As instrucoes no `.github/` da repositorio tem a segunda prioridade. Todos que jogam nesse projeto as seguem. E como as regras especificas de cada fase — todo mundo que joga aquela fase segue as mesmas regras.

**Regras Universais (gravidade - sua organizacao)** — PRIORIDADE BASE: A organizacao no GitHub pode definir instrucoes padrao para todos os projetos. Elas tem a menor prioridade e se aplicam se nenhuma outra mais especifica existir. E a gravidade — afeta tudo, mas pode ser "ajustada" por regras mais especificas.

> **Analogia Mario:** Pense assim: a gravidade (organizacao) puxa voce para baixo. As regras da fase subaquatica (repositorio) mudam como voce se move na agua. E o seu estilo pessoal de jogar (personal) determina como VOCE especificamente se move dentro de tudo isso. Seu estilo sempre vence!

---

## Secao 5: Tabela Comparativa


**Instructions vs Skills vs Agents vs Prompts**

| Dimensao | Instructions | Skills | Agents | Prompts |
|---|---|---|---|---|
| **O que e?** | Regras do Jogo que sempre valem (gravidade, lava mata) | Power-Ups que voce ativa quando precisa | Personagens jogaveis com habilidades unicas | Warp Pipes — atalhos para areas especificas |
| **Formato de arquivo** | .md (Markdown) | .md com metadata | .yaml + .js/.ts | Texto na conversa |
| **Localizacao** | .github/copilot-instructions.md | .github/copilot-skills/ | .github/copilot-workflows/ | Nao salvo (ephemeral) |
| **Ativacao** | Automatica (sempre ativa, como gravidade) | Manual ("peguei o Mushroom!") | Automatica por event/schedule | Manual (entra no Warp Pipe) |
| **Escopo** | Todo arquivo (ou com applyTo por fase) | Durante a execucao do power-up | Contexto especifico + data/time | Uma conversa |
| **Portabilidade** | Compartilhada com equipe | Compartilhada com equipe | Pode incluir scripts executaveis | Pessoal, nao compartilhado |
| **Quando usar** | Padroes codebase-wide | Tarefas repetitivas especificas | CI/CD, automacao continua | Exploracao, brainstorm |
| **Analogia Mario** | Gravidade — sempre ativa, invisivel | Super Mushroom — pega quando precisa | Mario, Luigi, Toad — cada um com poderes | Warp Pipe — atalho direto |

Use esta tabela para decidir quando criar uma Instruction vs Skill vs Agent. Cada ferramenta tem seu proposito no arsenal do jogo:
- **Instructions** = Regras que SEMPRE estao ativas, como gravidade no Mario
- **Skills** = Power-Ups que voce ativa quando precisa, como o Super Mushroom
- **Agents** = Personagens com habilidades unicas, como Luigi ou Toad
- **Prompts** = Warp Pipes que te levam direto onde voce precisa

---

## Secao 6: Checklist de Boas Praticas

Ao criar ou revisar suas Custom Instructions, use este checklist para garantir qualidade e efetividade:

- [x] As instrucoes sao claras e nao ambiguas — o Copilot entende o que fazer
- [x] Use exemplos de codigo — "assim NAO" e "assim SIM"
- [x] Padroes glob em applyTo sao precisos — nao afetam arquivos desnecessarios
- [x] Hierarquia entendida — voce sabe qual instruction vencera em conflitos
- [x] Versione as instrucoes — tenha historico de mudancas no git
- [x] Instrua sobre o "por que" — nao apenas "o que" — contexto ajuda
- [x] Atualize regularmente — conforme o projeto evolve, instrucoes tambem devem
- [x] Teste as instrucoes — crie um arquivo novo e veja se Copilot as segue
- [x] Documente excecoes — "normalmente X, mas exceto quando Y"
- [x] Mantenha concisao — nao crie docs gigantescos, seja direto

> **Dica de Ouro:** Custom Instructions funcionam melhor quando combinadas com Skills (Power-Ups) e bom Git workflow. Instructions definem as Regras do Jogo; Skills sao os Power-Ups especiais; Git e o save point. Assim como no Mario — a gravidade (Instructions) esta sempre ativa, os Power-Ups (Skills) voce pega quando precisa, e os checkpoints (Git) garantem que voce nunca perca progresso!

---

## Bonus: Estrutura Recomendada de Arquivos

Aqui esta a estrutura ideal para organizar suas Custom Instructions — pense nela como o **mapa do jogo** que mostra onde cada regra mora:

```
.github/
├── copilot-instructions.md           # Gravidade — regras universais (toda repo)
├── instructions/
│   ├── backend.instructions.md       # Regras subaquaticas (applyTo: "backend/**/*.ts")
│   ├── frontend.instructions.md      # Regras aereas (applyTo: "frontend/**/*.tsx")
│   ├── database.instructions.md      # Regras do castelo (applyTo: "prisma/**/*")
│   ├── testing.instructions.md       # Regras de treino (applyTo: "**/*.test.ts")
│   └── docs.instructions.md         # Regras de documentacao (applyTo: "**/*.md")
├── copilot-skills/
│   ├── RefactorCode.md               # Power-Up de refatoracao
│   ├── GenerateTests.md              # Power-Up de testes (1-UP Mushroom)
│   └── DocumentAPI.md                # Power-Up de documentacao
├── workflows/
│   ├── ci.yaml
│   └── cd.yaml
└── CODEOWNERS                         # Define quem reviews qual arquivo
```

Este layout torna facil encontrar e modificar instrucoes. Cada arquivo tem um proposito claro — assim como no mapa do Mario, onde voce sabe exatamente qual fase e de agua, qual e de ceu e qual e de castelo.

---

## Exemplo Pratico: Criar Instructions para um Projeto Real

Vamos criar Custom Instructions para um projeto Next.js + Prisma real (uma app de e-commerce). Pense nisso como **configurar as regras de um novo jogo** antes de comecar a jogar.

### PASSO 1: Crie o arquivo `.github/copilot-instructions.md`

Esse arquivo e a **gravidade do jogo** — as regras universais que valem em TUDO, em toda fase, para todo personagem.

```markdown
# Universal Instructions for TechStore E-commerce

## Projeto
- Nome: TechStore
- Stack: Next.js 15, TypeScript, Prisma, TailwindCSS, Stripe
- Objetivo: Plataforma de vendas de eletronicos

## 1. TypeScript Obrigatorio
- Todos os arquivos devem ser .ts ou .tsx
- tsconfig.json: strict: true
- Tipo any e PROIBIDO — use unknown e faca type narrowing
- Interfaces para estruturas de dados

## 2. Next.js 15 Best Practices
- App Router (nao Pages Router)
- Server Components por padrao
- Client Components com 'use client' quando necessario
- API Routes em app/api/
- Middleware em middleware.ts

## 3. Prisma ORM
- Schema em prisma/schema.prisma
- Migrations com npx prisma migrate dev
- Use Prisma Client em server actions apenas
- Sempre valide input de usuario

## 4. TailwindCSS
- Estilos APENAS com TailwindCSS
- Arquivo tailwind.config.ts configurado
- Responsive design mobile-first
- Paleta de cores customizada em tailwind.config.ts

## 5. Tratamento de Erros
- Use Error Boundaries para React
- Logging com pino ou winston
- Respostas de erro padronizadas

## 6. Seguranca
- Nunca exponha API keys no client
- CORS headers configurados
- Validacao de JWT nos endpoints

## 7. Commits
- feat: nova feature
- fix: correcao de bug
- docs: documentacao
- style: formatacao
- refactor: refatoracao
- test: testes
```

### PASSO 2: Crie `.github/instructions/backend.instructions.md`

Aplica-se apenas a arquivos backend — como as **regras da fase subaquatica** que so valem debaixo d'agua. (`applyTo: "app/api/**"`)

```markdown
# Backend Instructions — TechStore

## API Design
- RESTful endpoints em /api/v1/
- GET /api/v1/products — listar
- GET /api/v1/products/:id — detalhe
- POST /api/v1/products — criar
- PUT /api/v1/products/:id — atualizar
- DELETE /api/v1/products/:id — deletar

## Validacao
- Use Zod para validar req.body
- Retorne 400 Bad Request com erro detalhado se invalido
- Nunca confie em input do cliente

## Autenticacao
- JWT Bearer token no header
- Verificacao em middleware
- Roles: admin, seller, customer

## Exemplos

// BOM
async function GET(request) {
  const schema = z.object({ id: z.string() })
  const { id } = schema.parse(request.nextUrl.searchParams)
  const product = await db.product.findUnique({ where: { id } })
  return Response.json(product)
}

// RUIM
async function GET(request: any) {
  const id = request.nextUrl.searchParams.get('id')
  const product = await db.product.findUnique({ where: { id } })
  return Response.json(product)
}
```

### PASSO 3: Crie `.github/instructions/frontend.instructions.md`

Aplica-se apenas a frontend — como as **regras da fase aerea** que so valem quando Mario esta voando nas nuvens. (`applyTo: "app/**/*.tsx"`, excludes: `"app/api/**"`)

```markdown
# Frontend Instructions — TechStore

## Componentes
- PascalCase filenames
- Um componente por arquivo
- Props sao readonly

## Exemplo Componente

'use client'
import { FC } from 'react'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
  onAddToCart: (productId: string) => void
}

const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={() => onAddToCart(product.id)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  )
}

export default ProductCard
```

Com esses tres arquivos, o Copilot sabera exatamente como se comportar em cada parte do projeto TechStore — assim como o Mario sabe automaticamente que deve nadar na fase subaquatica, voar na fase aerea e tomar cuidado com a lava no castelo. Sem repetir instrucoes fase apos fase.

---

## Dicas Finais & Erros Comuns a Evitar

Assim como todo jogador de Mario ja caiu no mesmo buraco varias vezes antes de aprender, aqui estao os erros mais comuns com Custom Instructions:

- **Instructions muito vagas:** "use boas praticas" — seja especifico! E como uma regra de jogo que diz "jogue bem" em vez de "pular com o botao A"
- **Conflito de instructions:** dois arquivos se contradizem — use hierarquia claramente (pessoal > fase > universal)
- **applyTo muito amplo:** `applyTo: **` — quase nunca e intencional. E como aplicar regras subaquaticas no jogo inteiro — Mario ficaria nadando em terra firme!
- **Nao versiona-las:** instrucoes mudam, use git para rastrear (como save points)
- **Esquecer que sao PASSIVAS:** instructions nao "ativam" como power-ups — elas sao a gravidade, nao o Super Mushroom
- **Instructions nao servem para 'commands':** use Skills (Power-Ups) para isso
- **Nao comunicar ao time:** documentar as instrucoes em CONTRIBUTING.md — todo jogador precisa conhecer as regras!

---

**Anterior:** 4B — Agent Skills | **Proximo:** 4D — Prompt Files

**Fonte:** GitHub Copilot Documentation — https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot

---

### Habilidade Desbloqueada!

Sofia agora domina Custom Instructions e as Regras do Jogo.
Ela guardou esse conhecimento no seu **Manual de Regras do Jogo** e seguiu para a proxima fase...

**Resumo da Analogia Mario neste capitulo:**
- **Instructions** = Regras que sempre estao ativas, como a **gravidade** no Mario
- **Skills** = **Power-Ups** que voce ativa quando precisa
- **Regras Universais** = Gravidade (afeta todo o Mushroom Kingdom)
- **Regras da Fase** = Regras da agua / ceu / castelo (afetam so aquela area)
- **Regras Pessoais** = Seu estilo de jogar (so afeta voce)
- **Manual de Regras do Jogo** = O lugar onde todas as regras estao escritas

---

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Customizing Copilot](https://docs.github.com/en/copilot/customizing-copilot)
- [Copilot Custom Instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)

---

<div align="center">

⬅️ [Anterior: Fase 6-2: Agent Skills](6-2-agent-skills.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 6-4: Prompt Files](6-4-prompt-files.md)

</div>
