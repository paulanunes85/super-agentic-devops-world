---
title: "Fase 4-1 -- Protecao Avancada: Auth, JWT, OAuth"
description: "Autenticacao, autorizacao, JWT tokens, OAuth 2.0, social login e RBAC — como provar que voce e Mario e nao Bowser disfarçado"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - agentic-devops
  - mario
  - world-4
  - autenticacao
  - autorizacao
  - jwt
  - oauth
  - rbac
---

# Fase 4-1 -- Protecao Avancada: Auth, JWT, OAuth

---

## Change Log

| Versao | Data       | Autor                                  | Descricao          |
|--------|------------|----------------------------------------|--------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial    |

---

## Sumario

- [Prologo: Quem E Voce, Afinal?](#prologo-quem-e-voce-afinal)
- [1. Authentication vs Authorization](#1-authentication-vs-authorization)
  - [1.1 Authentication: Provar Quem Voce E](#11-authentication-provar-quem-voce-e)
  - [1.2 Authorization: Provar O Que Voce Pode Fazer](#12-authorization-provar-o-que-voce-pode-fazer)
  - [1.3 Tabela Comparativa](#13-tabela-comparativa)
- [2. Senhas e Hashing: O Cofre Secreto](#2-senhas-e-hashing-o-cofre-secreto)
  - [2.1 Por Que Nunca Guardar Senhas em Texto Puro](#21-por-que-nunca-guardar-senhas-em-texto-puro)
  - [2.2 Hashing: A Transformacao Irreversivel](#22-hashing-a-transformacao-irreversivel)
  - [2.3 Salt: Tempero Que Protege](#23-salt-tempero-que-protege)
  - [2.4 bcrypt na Pratica](#24-bcrypt-na-pratica)
- [3. JWT: O Token Magico](#3-jwt-o-token-magico)
  - [3.1 O Que E um JWT](#31-o-que-e-um-jwt)
  - [3.2 Anatomia de um JWT](#32-anatomia-de-um-jwt)
  - [3.3 Como o JWT Funciona na Pratica](#33-como-o-jwt-funciona-na-pratica)
  - [3.4 Access Token vs Refresh Token](#34-access-token-vs-refresh-token)
  - [3.5 Exemplo de Codigo: Gerando um JWT](#35-exemplo-de-codigo-gerando-um-jwt)
- [4. OAuth 2.0: Pedindo ao Rei que Confirme Sua Identidade](#4-oauth-20-pedindo-ao-rei-que-confirme-sua-identidade)
  - [4.1 O Problema que OAuth Resolve](#41-o-problema-que-oauth-resolve)
  - [4.2 Os 4 Papeis do OAuth](#42-os-4-papeis-do-oauth)
  - [4.3 O Fluxo Authorization Code](#43-o-fluxo-authorization-code)
  - [4.4 Diagrama do Fluxo OAuth](#44-diagrama-do-fluxo-oauth)
- [5. Social Login: Os Reis Confirmam por Voce](#5-social-login-os-reis-confirmam-por-voce)
  - [5.1 Login com Google, Microsoft, GitHub](#51-login-com-google-microsoft-github)
  - [5.2 Como Implementar Social Login](#52-como-implementar-social-login)
  - [5.3 Vantagens e Desvantagens](#53-vantagens-e-desvantagens)
- [6. RBAC: Chaves Diferentes para Salas Diferentes](#6-rbac-chaves-diferentes-para-salas-diferentes)
  - [6.1 O Que E RBAC](#61-o-que-e-rbac)
  - [6.2 Roles Comuns em Aplicacoes](#62-roles-comuns-em-aplicacoes)
  - [6.3 Implementando RBAC](#63-implementando-rbac)
  - [6.4 Middleware de Autorizacao](#64-middleware-de-autorizacao)
- [7. Sessions vs Tokens: Duas Filosofias](#7-sessions-vs-tokens-duas-filosofias)
  - [7.1 Session-Based: O Guarda que Lembra de Voce](#71-session-based-o-guarda-que-lembra-de-voce)
  - [7.2 Token-Based: O Passaporte que Voce Carrega](#72-token-based-o-passaporte-que-voce-carrega)
  - [7.3 Quando Usar Cada Um](#73-quando-usar-cada-um)
- [8. Seguranca Avancada: Protecoes Extras](#8-seguranca-avancada-protecoes-extras)
  - [8.1 CORS: Quem Pode Bater na Porta](#81-cors-quem-pode-bater-na-porta)
  - [8.2 Rate Limiting: Limite de Tentativas](#82-rate-limiting-limite-de-tentativas)
  - [8.3 MFA: Dupla Verificacao](#83-mfa-dupla-verificacao)
  - [8.4 HTTPS: O Tunel Secreto](#84-https-o-tunel-secreto)
- [9. Auth na Pratica: TodoApp com JWT](#9-auth-na-pratica-todoapp-com-jwt)
  - [9.1 Fluxo Completo de Registro](#91-fluxo-completo-de-registro)
  - [9.2 Fluxo Completo de Login](#92-fluxo-completo-de-login)
  - [9.3 Protegendo Rotas](#93-protegendo-rotas)
- [10. Tabela Final de Resumo](#10-tabela-final-de-resumo)
- [Referencias](#referencias)

---

## Prologo: Quem E Voce, Afinal?

Sofia estava orgulhosa do seu TodoApp. Funcionava perfeitamente — usuarios podiam criar, editar e deletar tarefas. Mas entao algo terrivel aconteceu: alguem descobriu a URL da API e comecou a deletar as tarefas de TODOS os usuarios.

Toadette — a Code Reviewer do time — apareceu com um olhar serio.

*"Sofia,"* disse Toadette, *"sua aplicacao e como um castelo sem portas. Qualquer pessoa entra e faz o que quiser. Voce precisa de **autenticacao** — saber QUEM esta entrando — e **autorizacao** — saber O QUE essa pessoa pode fazer."*

Sofia olhou confusa. *"Nao e a mesma coisa?"*

Toadette sorriu. *"Imagine o Mushroom Kingdom. **Autenticacao** e provar que voce e Mario — e nao Bowser disfarçado com bigode falso. **Autorizacao** e verificar se Mario tem a chave daquela sala especifica. Mario pode entrar no castelo (autenticado), mas nao pode entrar na sala do tesouro sem a chave certa (nao autorizado)."*

*"Bem-vinda ao Mundo Aquatico, Sofia. Aqui os desafios sao mais profundos — literalmente."*

---

## 1. Authentication vs Authorization

### 1.1 Authentication: Provar Quem Voce E

**Authentication** (autenticacao) e o processo de verificar a **identidade** de alguem. E responder a pergunta: *"Voce e realmente quem diz ser?"*

> **Analogia Mario**: Autenticacao e como o guarda na porta do castelo pedindo: *"Prove que voce e Mario!"* Mario pode mostrar seu bigode, seu bone vermelho, pular e esmagar um bloco. Se o guarda estiver convencido, Mario entra.

**Formas comuns de autenticacao:**

| Metodo | Como Funciona | Analogia Mario |
|--------|---------------|----------------|
| **Usuario + Senha** | Voce fornece credenciais que so voce deveria saber | Mario diz a senha secreta na porta do castelo |
| **Token (JWT)** | Voce apresenta um token assinado digitalmente | Mario mostra um selo magico que Peach deu a ele |
| **Biometria** | Impressao digital, rosto, voz | O castelo reconhece o bigode do Mario |
| **Certificado** | Um documento digital assinado por autoridade confiavel | Uma carta selada com o selo real de Peach |

**Codigo conceitual:**

```javascript
// Autenticacao = verificar identidade
async function authenticate(email, password) {
  // 1. Buscar usuario pelo email
  const user = await db.users.findByEmail(email);
  if (!user) throw new Error('Usuario nao encontrado');

  // 2. Comparar senha com hash armazenado
  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) throw new Error('Senha incorreta');

  // 3. Gerar token de identidade
  const token = jwt.sign({ userId: user.id, role: user.role }, SECRET);
  return token;
}
```

### 1.2 Authorization: Provar O Que Voce Pode Fazer

**Authorization** (autorizacao) e o processo de verificar se um usuario autenticado tem **permissao** para realizar determinada acao.

> **Analogia Mario**: Mario ja provou que e Mario (autenticado). Agora ele quer entrar na sala do tesouro. O guarda verifica: *"Mario tem a chave dourada? Nao? Entao nao pode entrar. So o Admin (Peach) tem essa chave."*

**Niveis de autorizacao:**

```
Visitante (nao autenticado)  → So ve a pagina inicial
Usuario autenticado          → Ve suas proprias tarefas
Admin autenticado            → Ve TODAS as tarefas, pode deletar qualquer uma
Super Admin                  → Pode tudo, inclusive criar outros admins
```

**Codigo conceitual:**

```javascript
// Autorizacao = verificar permissao
function authorize(requiredRole) {
  return (req, res, next) => {
    const userRole = req.user.role; // ja autenticado

    const hierarchy = { 'user': 1, 'moderator': 2, 'admin': 3, 'superadmin': 4 };

    if (hierarchy[userRole] >= hierarchy[requiredRole]) {
      next(); // tem permissao, pode passar
    } else {
      res.status(403).json({ error: 'Acesso negado. Voce nao tem a chave desta sala.' });
    }
  };
}

// Uso:
app.delete('/api/users/:id', authorize('admin'), deleteUser);
```

### 1.3 Tabela Comparativa

| Aspecto | Authentication | Authorization |
|---------|---------------|---------------|
| **Pergunta** | Quem e voce? | O que voce pode fazer? |
| **Mario** | Prove que e Mario | Mario tem a chave? |
| **Quando** | Primeiro (antes) | Segundo (depois) |
| **Falha** | HTTP 401 Unauthorized | HTTP 403 Forbidden |
| **Dados** | Credenciais (email/senha) | Roles, permissions |
| **Resultado** | Token/sessao | Acesso concedido/negado |

> **Regra de Ouro**: Authentication SEMPRE vem antes de Authorization. Voce nao pode verificar as permissoes de alguem se nao sabe quem e essa pessoa.

---

## 2. Senhas e Hashing: O Cofre Secreto

### 2.1 Por Que Nunca Guardar Senhas em Texto Puro

Imagine que o castelo de Peach tem um livro com todas as senhas dos moradores:

```
Mario: mamamia123
Luigi: mansaodoluigi
Toad: cogumelo456
```

Se Bowser roubar esse livro, ele sabe TODAS as senhas. Game Over.

**Isso e exatamente o que acontece quando voce guarda senhas em texto puro no banco de dados.** Em 2024, bilhoes de senhas vazadas em data breaches vieram de bancos que armazenavam senhas sem protecao.

### 2.2 Hashing: A Transformacao Irreversivel

**Hash** e uma funcao matematica que transforma qualquer entrada em uma saida de tamanho fixo, e **nao e possivel reverter**.

> **Analogia Mario**: Imagine que cada morador do castelo, em vez de guardar a senha, guarda uma **impressao digital** da senha. Mesmo que Bowser roube o livro de impressoes digitais, ele nao consegue voltar para a senha original. Mas quando Mario diz sua senha, o castelo pode criar uma nova impressao digital e comparar com a guardada.

```
Entrada:       "mamamia123"
Hash (SHA256): "a3f2b7c8d9e1f0a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7"

Impossivel reverter: "a3f2b7c8..." → ???
```

### 2.3 Salt: Tempero Que Protege

O problema com hash simples e que atacantes podem usar **rainbow tables** — tabelas pre-calculadas de hashes de senhas comuns.

**Salt** e um valor aleatorio adicionado a cada senha antes de fazer o hash:

```
Sem salt:  hash("mamamia123")          → sempre o mesmo resultado
Com salt:  hash("mamamia123" + "xK9p") → resultado unico
           hash("mamamia123" + "mR2q") → resultado DIFERENTE
```

> **Analogia Mario**: E como se cada morador misturasse um tempero secreto pessoal na tinta da impressao digital. Mesmo que dois moradores tenham a mesma senha, as impressoes sao diferentes porque o tempero e diferente.

### 2.4 bcrypt na Pratica

**bcrypt** e o algoritmo mais recomendado para senhas. Ele inclui salt automaticamente e e propositalmente **lento** (para dificultar ataques de forca bruta).

```javascript
const bcrypt = require('bcrypt');

// Registrar usuario — criar hash da senha
async function registerUser(email, password) {
  const saltRounds = 12; // quanto maior, mais seguro (e mais lento)
  const passwordHash = await bcrypt.hash(password, saltRounds);

  await db.users.create({
    email: email,
    password: passwordHash // NUNCA guardar a senha original!
  });
}

// Login — verificar senha
async function loginUser(email, password) {
  const user = await db.users.findByEmail(email);
  if (!user) throw new Error('Usuario nao encontrado');

  // bcrypt compara a senha com o hash armazenado
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Senha incorreta');

  return user;
}
```

**O que fica no banco de dados:**

```
// ERRADO ❌ — nunca faca isso
{ email: "mario@mushroom.com", password: "mamamia123" }

// CERTO ✅ — senha nunca e armazenada
{ email: "mario@mushroom.com", password: "$2b$12$LJ3m5..." }
```

---

## 3. JWT: O Token Magico

### 3.1 O Que E um JWT

**JWT (JSON Web Token)** e um padrao aberto (RFC 7519) para transmitir informacoes de forma segura entre partes como um objeto JSON assinado digitalmente.

> **Analogia Mario**: JWT e um **selo magico** que Peach entrega a Mario depois que ele prova sua identidade. Esse selo brilha com uma cor unica, nao pode ser falsificado, e contem informacoes sobre Mario (nome, poderes, papel). Qualquer guarda do castelo pode verificar o selo sem precisar ligar para Peach.

**Caracteristicas do JWT:**

- **Autocontido**: carrega todas as informacoes necessarias dentro dele
- **Assinado**: nao pode ser alterado sem invalidar a assinatura
- **Compacto**: pode ser enviado em headers HTTP, URLs, ou cookies
- **Sem estado (stateless)**: o servidor nao precisa guardar sessoes

### 3.2 Anatomia de um JWT

Um JWT tem tres partes separadas por pontos:

```
xxxxx.yyyyy.zzzzz
  |      |      |
  |      |      └── Signature (Assinatura)
  |      └── Payload (Dados)
  └── Header (Cabecalho)
```

**Header (Cabecalho):**

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

**Payload (Dados):**

```json
{
  "sub": "mario-001",
  "name": "Mario",
  "role": "hero",
  "iat": 1710720000,
  "exp": 1710806400
}
```

> **Campos importantes do Payload:**
> - `sub` (subject): identificador do usuario
> - `iat` (issued at): quando o token foi criado
> - `exp` (expiration): quando o token expira
> - `role`: papel do usuario (custom claim)

**Signature (Assinatura):**

```
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```

> **Analogia Mario**: O Header e a capa do selo (tipo de magia usada). O Payload e a mensagem dentro (quem e Mario, o que pode fazer). A Signature e o brilho magico de Peach — se alguem tentar alterar a mensagem, o brilho some e o selo e invalido.

### 3.3 Como o JWT Funciona na Pratica

```
1. Mario chega no castelo → POST /api/login { email, password }
2. Guarda verifica credenciais → Confere no banco de dados
3. Credenciais validas → Guarda cria JWT e entrega ao Mario
4. Mario guarda o JWT → Armazenado no cliente (localStorage, cookie)
5. Mario quer entrar numa sala → GET /api/todos (com JWT no header)
6. Guarda da sala verifica JWT → Decodifica, valida assinatura
7. JWT valido → Mario entra! JWT invalido → 401 Unauthorized
```


**Header HTTP:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXJpby0wMDEiLCJuYW1lIjoiTWFyaW8iLCJyb2xlIjoiaGVybyJ9.abc123
```

### 3.4 Access Token vs Refresh Token

| Aspecto | Access Token | Refresh Token |
|---------|-------------|---------------|
| **Duracao** | Curta (15min - 1h) | Longa (7 - 30 dias) |
| **Uso** | Acesso a recursos protegidos | Gerar novos Access Tokens |
| **Armazenamento** | Memoria ou cookie httpOnly | Cookie httpOnly seguro |
| **Se roubado** | Dano limitado (expira rapido) | Mais perigoso (revogar imediatamente) |
| **Mario** | Passe diario para o castelo | Carteirinha anual que renova o passe |

```javascript
// Gerando ambos os tokens
function generateTokens(user) {
  const accessToken = jwt.sign(
    { userId: user.id, role: user.role },
    ACCESS_SECRET,
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign(
    { userId: user.id },
    REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  return { accessToken, refreshToken };
}

// Renovando o access token
app.post('/api/refresh', (req, res) => {
  const { refreshToken } = req.cookies;

  try {
    const decoded = jwt.verify(refreshToken, REFRESH_SECRET);
    const user = await db.users.findById(decoded.userId);
    const newAccessToken = jwt.sign(
      { userId: user.id, role: user.role },
      ACCESS_SECRET,
      { expiresIn: '15m' }
    );
    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(401).json({ error: 'Refresh token invalido' });
  }
});
```

### 3.5 Exemplo de Codigo: Gerando um JWT

```javascript
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET; // NUNCA hardcode o secret!

// Gerar token apos login bem-sucedido
function createToken(user) {
  return jwt.sign(
    {
      userId: user.id,
      email: user.email,
      role: user.role
    },
    SECRET,
    {
      expiresIn: '1h',
      issuer: 'mushroom-kingdom-auth'
    }
  );
}

// Middleware para verificar token
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token nao fornecido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded; // Dados do usuario disponiveis nas rotas
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expirado' });
    }
    return res.status(401).json({ error: 'Token invalido' });
  }
}
```

---

## 4. OAuth 2.0: Pedindo ao Rei que Confirme Sua Identidade

### 4.1 O Problema que OAuth Resolve

Imagine que voce quer acessar um servico novo — por exemplo, um app de gerenciamento de tarefas. Sem OAuth, voce precisaria criar MAIS uma conta com email e senha. Com OAuth, voce pode pedir ao Google, Microsoft ou GitHub para confirmar quem voce e.

> **Analogia Mario**: OAuth e como Mario pedindo ao **Rei do Mushroom Kingdom (Google/Microsoft)** para confirmar sua identidade. Em vez de Mario provar quem e em cada castelo que visita, ele diz: *"Pergunte ao Rei! Ele me conhece!"* O Rei confirma: *"Sim, esse e o Mario. Pode confiar."*

### 4.2 Os 4 Papeis do OAuth

| Papel | Descricao | Analogia Mario |
|-------|-----------|----------------|
| **Resource Owner** | O usuario dono dos dados | Mario (dono do perfil) |
| **Client** | A aplicacao que quer acessar os dados | TodoApp (quer saber quem e Mario) |
| **Authorization Server** | Quem emite tokens de acesso | Rei do Mushroom Kingdom (Google) |
| **Resource Server** | Onde os dados protegidos estao | Castelo com o perfil do Mario |

### 4.3 O Fluxo Authorization Code

O fluxo mais seguro e recomendado para aplicacoes web:

```
1. Mario clica "Login com Google" no TodoApp
2. TodoApp redireciona Mario para o Google
3. Google pergunta: "TodoApp quer acessar seu nome e email. Permitir?"
4. Mario clica "Permitir"
5. Google redireciona de volta ao TodoApp com um CODIGO temporario
6. TodoApp envia esse codigo ao Google (server-to-server)
7. Google retorna um Access Token
8. TodoApp usa o token para buscar nome e email do Mario
9. TodoApp cria sessao/JWT para Mario
```

### 4.4 Diagrama do Fluxo OAuth

```
Mario (Browser)          TodoApp (Backend)         Google (Auth Server)
    |                         |                          |
    |-- Clica "Login" ------->|                          |
    |                         |-- Redireciona ---------->|
    |<-- Pagina de login -----|                          |
    |                         |                          |
    |-- Permite acesso ------>|                          |
    |                         |<-- Codigo temporario ----|
    |                         |                          |
    |                         |-- Troca codigo por ----->|
    |                         |   token (server-to-      |
    |                         |   server)                |
    |                         |<-- Access Token ---------|
    |                         |                          |
    |                         |-- Busca perfil --------->|
    |                         |<-- Nome, email ----------|
    |                         |                          |
    |<-- JWT do TodoApp ------|                          |
    |                         |                          |
```


**Implementacao com Passport.js:**

```javascript
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    // Buscar ou criar usuario no banco
    let user = await db.users.findByGoogleId(profile.id);
    if (!user) {
      user = await db.users.create({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value,
        role: 'user'
      });
    }
    done(null, user);
  }
));

// Rotas
app.get('/api/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/api/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    const token = createToken(req.user);
    res.redirect(`/dashboard?token=${token}`);
  }
);
```

---

## 5. Social Login: Os Reis Confirmam por Voce

### 5.1 Login com Google, Microsoft, GitHub

Social Login e a implementacao pratica do OAuth 2.0 com provedores de identidade populares.

| Provedor | Quando Usar | Analogia Mario |
|----------|-------------|----------------|
| **Google** | Apps para publico geral | Rei do Mushroom Kingdom — todos o conhecem |
| **Microsoft** | Apps corporativos, Azure AD | Rei do Ice Kingdom — mundo empresarial |
| **GitHub** | Apps para desenvolvedores | Rei do Star Kingdom — mundo dos devs |
| **Apple** | Apps iOS | Rei do Cloud Kingdom — mundo Apple |

### 5.2 Como Implementar Social Login

**Passo 1: Registrar sua app no provedor**

```
Google Cloud Console → APIs & Services → Credentials
  - Nome: TodoApp
  - Redirect URI: https://todoapp.com/api/auth/google/callback
  - Resultado: CLIENT_ID e CLIENT_SECRET
```

**Passo 2: Configurar variaveis de ambiente**

```env
# .env — NUNCA commitar este arquivo!
GOOGLE_CLIENT_ID=123456789.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-abcdefgh
MICROSOFT_CLIENT_ID=abcd-efgh-ijkl
MICROSOFT_CLIENT_SECRET=secret123
GITHUB_CLIENT_ID=Iv1.abc123
GITHUB_CLIENT_SECRET=secret456
```

**Passo 3: Botoes no frontend**

```jsx
function LoginPage() {
  return (
    <div className="login-container">
      <h1>Bem-vindo ao TodoApp</h1>
      <button onClick={() => window.location.href = '/api/auth/google'}>
        Login com Google
      </button>
      <button onClick={() => window.location.href = '/api/auth/microsoft'}>
        Login com Microsoft
      </button>
      <button onClick={() => window.location.href = '/api/auth/github'}>
        Login com GitHub
      </button>
    </div>
  );
}
```

### 5.3 Vantagens e Desvantagens

| Vantagem | Desvantagem |
|----------|-------------|
| Usuario nao precisa criar mais uma senha | Dependencia de servico externo |
| Senhas ficam com Google/Microsoft (mais seguro) | Se o provedor cair, login cai |
| Menos fricao no cadastro (mais conversoes) | Menos controle sobre os dados |
| Email ja verificado pelo provedor | Privacidade — provedor sabe onde o usuario loga |
| MFA geralmente ja ativo | Nem todos os usuarios tem conta nos provedores |

---

## 6. RBAC: Chaves Diferentes para Salas Diferentes

### 6.1 O Que E RBAC

**RBAC (Role-Based Access Control)** e um modelo de controle de acesso onde permissoes sao atribuidas a **papeis (roles)**, e usuarios recebem um ou mais papeis.

> **Analogia Mario**: No castelo de Peach, existem varias salas. Cada personagem tem chaves diferentes:
> - **Mario (admin)** = chave mestra — abre todas as portas
> - **Luigi (moderator)** = chave intermediaria — abre a maioria das portas
> - **Toad (user)** = chave basica — so abre sua propria sala
> - **Visitante** = sem chave — so fica no saguao

### 6.2 Roles Comuns em Aplicacoes

```
Super Admin (Peach)
  └── Pode tudo: criar admins, deletar contas, configurar sistema
      │
Admin (Mario)
  └── Gerenciar usuarios, ver todos os dados, moderar conteudo
      │
Moderator (Luigi)
  └── Editar/remover conteudo inapropriado, ver relatorios
      │
User (Toad)
  └── CRUD nos proprios dados apenas
      │
Viewer (Visitante)
  └── Apenas leitura em dados publicos
```

**Tabela de permissoes:**

| Acao | Super Admin | Admin | Moderator | User | Viewer |
|------|:-----------:|:-----:|:---------:|:----:|:------:|
| Ver proprias tarefas | X | X | X | X | - |
| Criar tarefas | X | X | X | X | - |
| Editar proprias tarefas | X | X | X | X | - |
| Deletar proprias tarefas | X | X | X | X | - |
| Ver tarefas de todos | X | X | X | - | - |
| Editar tarefas de outros | X | X | X | - | - |
| Deletar tarefas de outros | X | X | - | - | - |
| Gerenciar usuarios | X | X | - | - | - |
| Criar admins | X | - | - | - | - |
| Configurar sistema | X | - | - | - | - |

### 6.3 Implementando RBAC

**No banco de dados:**

```sql
-- Tabela de roles
CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT
);

-- Tabela de permissoes
CREATE TABLE permissions (
  id SERIAL PRIMARY KEY,
  action VARCHAR(100) NOT NULL, -- 'create:todo', 'delete:user'
  description TEXT
);

-- Relacao role <-> permissoes (muitos para muitos)
CREATE TABLE role_permissions (
  role_id INTEGER REFERENCES roles(id),
  permission_id INTEGER REFERENCES permissions(id),
  PRIMARY KEY (role_id, permission_id)
);

-- Usuario tem um role
ALTER TABLE users ADD COLUMN role_id INTEGER REFERENCES roles(id);

-- Dados iniciais
INSERT INTO roles (name, description) VALUES
  ('superadmin', 'Acesso total ao sistema'),
  ('admin', 'Gerenciamento de usuarios e conteudo'),
  ('moderator', 'Moderacao de conteudo'),
  ('user', 'Acesso basico'),
  ('viewer', 'Apenas leitura');
```

### 6.4 Middleware de Autorizacao

```javascript
// Middleware generico de RBAC
function requirePermission(action) {
  return async (req, res, next) => {
    const userRole = req.user.role;

    // Buscar permissoes do role
    const permissions = await db.query(`
      SELECT p.action FROM permissions p
      JOIN role_permissions rp ON p.id = rp.permission_id
      JOIN roles r ON r.id = rp.role_id
      WHERE r.name = $1
    `, [userRole]);

    const hasPermission = permissions.some(p => p.action === action);

    if (hasPermission) {
      next();
    } else {
      res.status(403).json({
        error: 'Acesso negado',
        message: `Role "${userRole}" nao tem permissao para "${action}"`
      });
    }
  };
}

// Uso nas rotas
app.get('/api/todos', verifyToken, requirePermission('read:todos'), getTodos);
app.post('/api/todos', verifyToken, requirePermission('create:todo'), createTodo);
app.delete('/api/users/:id', verifyToken, requirePermission('delete:user'), deleteUser);
```

---

## 7. Sessions vs Tokens: Duas Filosofias

### 7.1 Session-Based: O Guarda que Lembra de Voce

Na autenticacao baseada em sessao, o servidor **guarda** o estado de login do usuario.

```
1. Mario faz login → Servidor cria sessao (ID: abc123)
2. Servidor guarda: { abc123: { userId: 'mario-001', role: 'admin' } }
3. Servidor envia cookie: Set-Cookie: sessionId=abc123
4. Mario faz requisicoes → Envia cookie automaticamente
5. Servidor busca sessao pelo ID → Sabe quem e Mario
```

> **Analogia Mario**: O guarda do castelo tem uma **lista** com o nome de todos que entraram. Quando Mario volta, o guarda consulta a lista: *"Ah sim, Mario entrou as 14h. Pode passar."*

### 7.2 Token-Based: O Passaporte que Voce Carrega

Na autenticacao baseada em token (JWT), o servidor **nao guarda** nada — toda a informacao esta no token.

```
1. Mario faz login → Servidor cria JWT com dados do Mario
2. Servidor NAO guarda nada
3. Mario recebe JWT e guarda no cliente
4. Mario faz requisicoes → Envia JWT no header
5. Servidor decodifica JWT → Sabe quem e Mario (sem consultar nada)
```

> **Analogia Mario**: Mario carrega um **passaporte magico** que qualquer guarda em qualquer castelo pode verificar. Nao precisa de lista — o passaporte contem tudo.

### 7.3 Quando Usar Cada Um

| Criterio | Session | Token (JWT) |
|----------|---------|-------------|
| **Escalabilidade** | Dificil (estado no servidor) | Facil (stateless) |
| **Multiplos servidores** | Precisa de session store | Funciona em qualquer servidor |
| **Logout** | Facil (deletar sessao) | Dificil (token valido ate expirar) |
| **Mobile** | Cookies podem ser problematicos | Tokens funcionam bem |
| **Seguranca** | Servidor controla a sessao | Token pode ser roubado |
| **Melhor para** | Apps tradicionais (SSR) | SPAs, APIs, microservicos |

---

## 8. Seguranca Avancada: Protecoes Extras

### 8.1 CORS: Quem Pode Bater na Porta

**CORS (Cross-Origin Resource Sharing)** define quais dominios podem fazer requisicoes a sua API.

> **Analogia Mario**: CORS e a lista de convidados do castelo. So quem esta na lista pode entrar. Se alguem de um dominio desconhecido tentar acessar, o castelo recusa.

```javascript
const cors = require('cors');

app.use(cors({
  origin: ['https://todoapp.com', 'https://admin.todoapp.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
```

### 8.2 Rate Limiting: Limite de Tentativas

**Rate Limiting** previne ataques de forca bruta limitando quantas requisicoes um usuario pode fazer.

> **Analogia Mario**: E como se o castelo dissesse: *"Voce so pode tentar a senha 5 vezes por minuto. Depois disso, espere 15 minutos."* Bowser nao consegue testar milhares de senhas.

```javascript
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // maximo 5 tentativas
  message: { error: 'Muitas tentativas de login. Tente novamente em 15 minutos.' }
});

app.post('/api/login', loginLimiter, loginHandler);
```

### 8.3 MFA: Dupla Verificacao

**MFA (Multi-Factor Authentication)** exige dois ou mais fatores para autenticar:

1. **Algo que voce sabe** (senha)
2. **Algo que voce tem** (celular, chave fisica)
3. **Algo que voce e** (biometria)

> **Analogia Mario**: Alem de provar que e Mario (senha), o castelo envia um codigo magico para o celular do Mario. Mesmo que Bowser descubra a senha, ele nao tem o celular do Mario.

### 8.4 HTTPS: O Tunel Secreto

**HTTPS** criptografa toda a comunicacao entre o navegador e o servidor.

> **Analogia Mario**: Sem HTTPS, e como mandar cartas abertas pelo Mushroom Kingdom — qualquer Goomba pode ler. Com HTTPS, as cartas sao enviadas por um tunel secreto subterraneo — so o remetente e o destinatario podem ler.

```
HTTP:  Mario → [senha em texto puro] → Servidor
       Qualquer inimigo no caminho pode ler!

HTTPS: Mario → [🔒 dados criptografados 🔒] → Servidor
       Inimigos veem apenas lixo incompreensivel
```

---

## 9. Auth na Pratica: TodoApp com JWT

### 9.1 Fluxo Completo de Registro

```javascript
// POST /api/register
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Validar dados
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Todos os campos sao obrigatorios' });
    }

    if (password.length < 8) {
      return res.status(400).json({ error: 'Senha deve ter no minimo 8 caracteres' });
    }

    // 2. Verificar se email ja existe
    const existingUser = await db.users.findByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: 'Email ja cadastrado' });
    }

    // 3. Hash da senha
    const passwordHash = await bcrypt.hash(password, 12);

    // 4. Criar usuario
    const user = await db.users.create({
      name,
      email,
      password: passwordHash,
      role: 'user'
    });

    // 5. Gerar tokens
    const tokens = generateTokens(user);

    // 6. Retornar
    res.status(201).json({
      message: 'Usuario criado com sucesso',
      user: { id: user.id, name: user.name, email: user.email },
      ...tokens
    });
  } catch (err) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
```

### 9.2 Fluxo Completo de Login

```javascript
// POST /api/login
app.post('/api/login', loginLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Buscar usuario
    const user = await db.users.findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Credenciais invalidas' });
      // Mensagem generica para nao revelar se o email existe
    }

    // 2. Verificar senha
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: 'Credenciais invalidas' });
    }

    // 3. Gerar tokens
    const tokens = generateTokens(user);

    // 4. Configurar refresh token como cookie httpOnly
    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 dias
    });

    // 5. Retornar access token
    res.json({
      message: 'Login realizado com sucesso',
      user: { id: user.id, name: user.name, role: user.role },
      accessToken: tokens.accessToken
    });
  } catch (err) {
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
```

### 9.3 Protegendo Rotas

```javascript
// Rotas protegidas com autenticacao + autorizacao
const router = express.Router();

// Qualquer usuario autenticado pode ver suas tarefas
router.get('/api/todos', verifyToken, async (req, res) => {
  const todos = await db.todos.findByUserId(req.user.userId);
  res.json(todos);
});

// Qualquer usuario autenticado pode criar tarefas
router.post('/api/todos', verifyToken, async (req, res) => {
  const todo = await db.todos.create({
    ...req.body,
    userId: req.user.userId
  });
  res.status(201).json(todo);
});

// Apenas admin pode ver TODOS os usuarios
router.get('/api/users', verifyToken, requirePermission('read:users'), async (req, res) => {
  const users = await db.users.findAll();
  res.json(users);
});

// Apenas admin pode deletar usuarios
router.delete('/api/users/:id', verifyToken, requirePermission('delete:user'), async (req, res) => {
  await db.users.delete(req.params.id);
  res.status(204).send();
});
```

---

## 10. Tabela Final de Resumo

| Conceito | O Que E | Analogia Mario |
|----------|---------|----------------|
| **Authentication** | Provar identidade | Provar que e Mario, nao Bowser |
| **Authorization** | Verificar permissao | Mario tem a chave da sala? |
| **Hashing** | Transformacao irreversivel de senha | Impressao digital magica |
| **Salt** | Tempero aleatorio no hash | Cada impressao digital e unica |
| **JWT** | Token autocontido assinado | Selo magico de Peach |
| **Access Token** | Token de curta duracao para acesso | Passe diario do castelo |
| **Refresh Token** | Token para renovar access token | Carteirinha anual |
| **OAuth 2.0** | Delegacao de autenticacao | Pedir ao Rei para confirmar |
| **Social Login** | OAuth com Google/Microsoft/GitHub | Reis de diferentes reinos |
| **RBAC** | Controle baseado em papeis | Chaves diferentes por personagem |
| **Session** | Estado no servidor | Guarda com lista de convidados |
| **CORS** | Controle de origem | Lista de convidados do castelo |
| **Rate Limiting** | Limite de tentativas | Maximo de tentativas de senha |
| **MFA** | Duplo fator de autenticacao | Senha + codigo no celular |
| **HTTPS** | Comunicacao criptografada | Tunel secreto subterraneo |

---

## Referencias

- [JWT.io — JSON Web Tokens](https://jwt.io/)
- [OAuth 2.0 — RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
- [bcrypt — npm](https://www.npmjs.com/package/bcrypt)
- [Passport.js — Authentication Middleware](https://www.passportjs.org/)
- [Microsoft Identity Platform](https://learn.microsoft.com/en-us/entra/identity-platform/)
- [Azure Active Directory B2C](https://learn.microsoft.com/en-us/azure/active-directory-b2c/)
- [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit)
- [CORS — MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

*Fase 4-1 completa! Voce aprendeu que autenticacao e autorizacao sao os pilares da seguranca. No proximo nivel, vamos explorar os modelos de nuvem — IaaS, PaaS, SaaS e Serverless. Prepare-se para o Nivel 4-2!*

---

<div align="center">

⬅️ [Anterior: Fase 3-BOSS: Exercicios](../world-3-sky/3-BOSS-exercicios.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 4-2: Cloud Models](4-2-cloud_models.md)

</div>
