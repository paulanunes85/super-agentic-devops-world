---
title: "Level 4-1 -- Advanced Protection: Auth, JWT, OAuth"
description: "Authentication, authorization, JWT tokens, OAuth 2.0, social login, and RBAC — how to prove you are Mario and not Bowser in disguise"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
tags:
  - agentic-devops
  - mario
  - world-4
  - authentication
  - authorization
  - jwt
  - oauth
  - rbac
sidebar_position: 1
format: md
---

# Level 4-1 -- Advanced Protection: Auth, JWT, OAuth

---

## Change Log

| Version | Date       | Author                                  | Description        |
|---------|------------|----------------------------------------|--------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Software Global Black Belt, Microsoft Americas | Initial creation   |

---

## Table of Contents

- [Prologue: Who Are You, Anyway?](#prologue-who-are-you-anyway)
- [1. Authentication vs Authorization](#1-authentication-vs-authorization)
  - [1.1 Authentication: Proving Who You Are](#11-authentication-proving-who-you-are)
  - [1.2 Authorization: Proving What You Can Do](#12-authorization-proving-what-you-can-do)
  - [1.3 Comparison Table](#13-comparison-table)
- [2. Passwords and Hashing: The Secret Vault](#2-passwords-and-hashing-the-secret-vault)
  - [2.1 Why Never Store Passwords in Plain Text](#21-why-never-store-passwords-in-plain-text)
  - [2.2 Hashing: The Irreversible Transformation](#22-hashing-the-irreversible-transformation)
  - [2.3 Salt: The Protective Seasoning](#23-salt-the-protective-seasoning)
  - [2.4 bcrypt in Practice](#24-bcrypt-in-practice)
- [3. JWT: The Magic Token](#3-jwt-the-magic-token)
  - [3.1 What Is a JWT](#31-what-is-a-jwt)
  - [3.2 Anatomy of a JWT](#32-anatomy-of-a-jwt)
  - [3.3 How JWT Works in Practice](#33-how-jwt-works-in-practice)
  - [3.4 Access Token vs Refresh Token](#34-access-token-vs-refresh-token)
  - [3.5 Code Example: Generating a JWT](#35-code-example-generating-a-jwt)
- [4. OAuth 2.0: Asking the King to Confirm Your Identity](#4-oauth-20-asking-the-king-to-confirm-your-identity)
  - [4.1 The Problem OAuth Solves](#41-the-problem-oauth-solves)
  - [4.2 The 4 Roles of OAuth](#42-the-4-roles-of-oauth)
  - [4.3 The Authorization Code Flow](#43-the-authorization-code-flow)
  - [4.4 OAuth Flow Diagram](#44-oauth-flow-diagram)
- [5. Social Login: The Kings Vouch for You](#5-social-login-the-kings-vouch-for-you)
  - [5.1 Login with Google, Microsoft, GitHub](#51-login-with-google-microsoft-github)
  - [5.2 How to Implement Social Login](#52-how-to-implement-social-login)
  - [5.3 Advantages and Disadvantages](#53-advantages-and-disadvantages)
- [6. RBAC: Different Keys for Different Rooms](#6-rbac-different-keys-for-different-rooms)
  - [6.1 What Is RBAC](#61-what-is-rbac)
  - [6.2 Common Roles in Applications](#62-common-roles-in-applications)
  - [6.3 Implementing RBAC](#63-implementing-rbac)
  - [6.4 Authorization Middleware](#64-authorization-middleware)
- [7. Sessions vs Tokens: Two Philosophies](#7-sessions-vs-tokens-two-philosophies)
  - [7.1 Session-Based: The Guard Who Remembers You](#71-session-based-the-guard-who-remembers-you)
  - [7.2 Token-Based: The Passport You Carry](#72-token-based-the-passport-you-carry)
  - [7.3 When to Use Each One](#73-when-to-use-each-one)
- [8. Advanced Security: Extra Protections](#8-advanced-security-extra-protections)
  - [8.1 CORS: Who Can Knock on the Door](#81-cors-who-can-knock-on-the-door)
  - [8.2 Rate Limiting: Attempt Limits](#82-rate-limiting-attempt-limits)
  - [8.3 MFA: Double Verification](#83-mfa-double-verification)
  - [8.4 HTTPS: The Secret Tunnel](#84-https-the-secret-tunnel)
- [9. Auth in Practice: TodoApp with JWT](#9-auth-in-practice-todoapp-with-jwt)
  - [9.1 Complete Registration Flow](#91-complete-registration-flow)
  - [9.2 Complete Login Flow](#92-complete-login-flow)
  - [9.3 Protecting Routes](#93-protecting-routes)
- [10. Final Summary Table](#10-final-summary-table)
- [References](#references)

---

## Prologue: Who Are You, Anyway?

Sofia was proud of her TodoApp. It worked perfectly — users could create, edit, and delete tasks. But then something terrible happened: someone discovered the API URL and started deleting ALL users' tasks.

Toadette — the team's Code Reviewer — appeared with a serious look.

*"Sofia,"* said Toadette, *"your application is like a castle without doors. Anyone can walk in and do whatever they want. You need **authentication** — knowing WHO is entering — and **authorization** — knowing WHAT that person can do."*

Sofia looked confused. *"Aren't they the same thing?"*

Toadette smiled. *"Imagine the Mushroom Kingdom. **Authentication** is proving you are Mario — and not Bowser in disguise with a fake mustache. **Authorization** is verifying whether Mario has the key to that specific room. Mario can enter the castle (authenticated), but he cannot enter the treasure room without the right key (not authorized)."*

*"Welcome to the Aquatic World, Sofia. Here the challenges are deeper — literally."*

---

## 1. Authentication vs Authorization

### 1.1 Authentication: Proving Who You Are

**Authentication** is the process of verifying someone's **identity**. It answers the question: *"Are you really who you say you are?"*

> **Mario Analogy**: Authentication is like the guard at the castle door asking: *"Prove you're Mario!"* Mario can show his mustache, his red cap, jump and smash a block. If the guard is convinced, Mario enters.

**Common forms of authentication:**

| Method | How It Works | Mario Analogy |
|--------|--------------|---------------|
| **Username + Password** | You provide credentials only you should know | Mario says the secret password at the castle door |
| **Token (JWT)** | You present a digitally signed token | Mario shows a magic seal that Peach gave him |
| **Biometrics** | Fingerprint, face, voice | The castle recognizes Mario's mustache |
| **Certificate** | A digital document signed by a trusted authority | A letter sealed with Peach's royal seal |

**Conceptual code:**

```javascript
// Authentication = verify identity
async function authenticate(email, password) {
  // 1. Find user by email
  const user = await db.users.findByEmail(email);
  if (!user) throw new Error('User not found');

  // 2. Compare password with stored hash
  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) throw new Error('Incorrect password');

  // 3. Generate identity token
  const token = jwt.sign({ userId: user.id, role: user.role }, SECRET);
  return token;
}
```

### 1.2 Authorization: Proving What You Can Do

**Authorization** is the process of verifying whether an authenticated user has **permission** to perform a certain action.

> **Mario Analogy**: Mario has already proven he is Mario (authenticated). Now he wants to enter the treasure room. The guard checks: *"Does Mario have the golden key? No? Then he cannot enter. Only the Admin (Peach) has that key."*

**Authorization levels:**

```
Visitor (not authenticated)     → Can only see the home page
Authenticated user              → Can see their own tasks
Authenticated admin             → Can see ALL tasks, can delete any
Super Admin                     → Can do everything, including creating other admins
```

**Conceptual code:**

```javascript
// Authorization = verify permission
function authorize(requiredRole) {
  return (req, res, next) => {
    const userRole = req.user.role; // already authenticated

    const hierarchy = { 'user': 1, 'moderator': 2, 'admin': 3, 'superadmin': 4 };

    if (hierarchy[userRole] >= hierarchy[requiredRole]) {
      next(); // has permission, can proceed
    } else {
      res.status(403).json({ error: 'Access denied. You do not have the key to this room.' });
    }
  };
}

// Usage:
app.delete('/api/users/:id', authorize('admin'), deleteUser);
```

### 1.3 Comparison Table

| Aspect | Authentication | Authorization |
|--------|---------------|---------------|
| **Question** | Who are you? | What can you do? |
| **Mario** | Prove you are Mario | Does Mario have the key? |
| **When** | First (before) | Second (after) |
| **Failure** | HTTP 401 Unauthorized | HTTP 403 Forbidden |
| **Data** | Credentials (email/password) | Roles, permissions |
| **Result** | Token/session | Access granted/denied |

> **Golden Rule**: Authentication ALWAYS comes before Authorization. You cannot verify someone's permissions if you don't know who that person is.

---

## 2. Passwords and Hashing: The Secret Vault

### 2.1 Why Never Store Passwords in Plain Text

Imagine Peach's castle has a book with all residents' passwords:

```
Mario: mamamia123
Luigi: luigismansion
Toad: mushroom456
```

If Bowser steals that book, he knows ALL the passwords. Game Over.

**That is exactly what happens when you store passwords in plain text in the database.** In 2024, billions of leaked passwords from data breaches came from databases that stored passwords without protection.

### 2.2 Hashing: The Irreversible Transformation

A **hash** is a mathematical function that transforms any input into a fixed-size output, and **it cannot be reversed**.

> **Mario Analogy**: Imagine that each castle resident, instead of storing their password, stores a **fingerprint** of the password. Even if Bowser steals the fingerprint book, he cannot get back to the original password. But when Mario says his password, the castle can create a new fingerprint and compare it with the stored one.

```
Input:         "mamamia123"
Hash (SHA256): "a3f2b7c8d9e1f0a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7"

Impossible to reverse: "a3f2b7c8..." → ???
```

### 2.3 Salt: The Protective Seasoning

The problem with simple hashing is that attackers can use **rainbow tables** — pre-computed tables of hashes of common passwords.

**Salt** is a random value added to each password before hashing:

```
Without salt:  hash("mamamia123")          → always the same result
With salt:     hash("mamamia123" + "xK9p") → unique result
               hash("mamamia123" + "mR2q") → DIFFERENT result
```

> **Mario Analogy**: It's as if each resident mixed a personal secret seasoning into the fingerprint ink. Even if two residents have the same password, the fingerprints are different because the seasoning is different.

### 2.4 bcrypt in Practice

**bcrypt** is the most recommended algorithm for passwords. It includes salt automatically and is intentionally **slow** (to make brute-force attacks difficult).

```javascript
const bcrypt = require('bcrypt');

// Register user — create password hash
async function registerUser(email, password) {
  const saltRounds = 12; // the higher, the more secure (and slower)
  const passwordHash = await bcrypt.hash(password, saltRounds);

  await db.users.create({
    email: email,
    password: passwordHash // NEVER store the original password!
  });
}

// Login — verify password
async function loginUser(email, password) {
  const user = await db.users.findByEmail(email);
  if (!user) throw new Error('User not found');

  // bcrypt compares the password with the stored hash
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Incorrect password');

  return user;
}
```

**What is stored in the database:**

```
// WRONG ❌ — never do this
{ email: "mario@mushroom.com", password: "mamamia123" }

// RIGHT ✅ — password is never stored
{ email: "mario@mushroom.com", password: "$2b$12$LJ3m5..." }
```

---

## 3. JWT: The Magic Token

### 3.1 What Is a JWT

**JWT (JSON Web Token)** is an open standard (RFC 7519) for securely transmitting information between parties as a digitally signed JSON object.

> **Mario Analogy**: JWT is a **magic seal** that Peach gives Mario after he proves his identity. This seal glows with a unique color, cannot be forged, and contains information about Mario (name, powers, role). Any guard in the castle can verify the seal without needing to call Peach.

**JWT characteristics:**

- **Self-contained**: carries all necessary information within itself
- **Signed**: cannot be altered without invalidating the signature
- **Compact**: can be sent in HTTP headers, URLs, or cookies
- **Stateless**: the server does not need to store sessions

### 3.2 Anatomy of a JWT

A JWT has three parts separated by dots:

```
xxxxx.yyyyy.zzzzz
  |      |      |
  |      |      └── Signature
  |      └── Payload (Data)
  └── Header
```

**Header:**

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

**Payload (Data):**

```json
{
  "sub": "mario-001",
  "name": "Mario",
  "role": "hero",
  "iat": 1710720000,
  "exp": 1710806400
}
```

> **Important Payload fields:**
> - `sub` (subject): user identifier
> - `iat` (issued at): when the token was created
> - `exp` (expiration): when the token expires
> - `role`: user role (custom claim)

**Signature:**

```
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```

> **Mario Analogy**: The Header is the seal's cover (type of magic used). The Payload is the message inside (who Mario is, what he can do). The Signature is Peach's magic glow — if someone tries to alter the message, the glow disappears and the seal is invalid.

### 3.3 How JWT Works in Practice

```
1. Mario arrives at the castle → POST /api/login { email, password }
2. Guard verifies credentials → Checks in the database
3. Credentials valid → Guard creates JWT and hands it to Mario
4. Mario stores the JWT → Stored on the client (localStorage, cookie)
5. Mario wants to enter a room → GET /api/todos (with JWT in header)
6. Room guard verifies JWT → Decodes, validates signature
7. JWT valid → Mario enters! JWT invalid → 401 Unauthorized
```

**Implementation with Passport.js:**

```javascript
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    // Find or create user in the database
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

// Routes
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

## 5. Social Login: The Kings Vouch for You

### 5.1 Login with Google, Microsoft, GitHub

Social Login is the practical implementation of OAuth 2.0 with popular identity providers.

| Provider | When to Use | Mario Analogy |
|----------|-------------|---------------|
| **Google** | Apps for the general public | King of the Mushroom Kingdom — everyone knows him |
| **Microsoft** | Corporate apps, Azure AD | King of the Ice Kingdom — the business world |
| **GitHub** | Apps for developers | King of the Star Kingdom — the devs' world |
| **Apple** | iOS apps | King of the Cloud Kingdom — Apple's world |

### 5.2 How to Implement Social Login

**Step 1: Register your app with the provider**

```
Google Cloud Console → APIs & Services → Credentials
  - Name: TodoApp
  - Redirect URI: https://todoapp.com/api/auth/google/callback
  - Result: CLIENT_ID and CLIENT_SECRET
```

**Step 2: Configure environment variables**

```env
# .env — NEVER commit this file!
GOOGLE_CLIENT_ID=123456789.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-abcdefgh
MICROSOFT_CLIENT_ID=abcd-efgh-ijkl
MICROSOFT_CLIENT_SECRET=secret123
GITHUB_CLIENT_ID=Iv1.abc123
GITHUB_CLIENT_SECRET=secret456
```

**Step 3: Frontend buttons**

```jsx
function LoginPage() {
  return (
    <div className="login-container">
      <h1>Welcome to TodoApp</h1>
      <button onClick={() => window.location.href = '/api/auth/google'}>
        Login with Google
      </button>
      <button onClick={() => window.location.href = '/api/auth/microsoft'}>
        Login with Microsoft
      </button>
      <button onClick={() => window.location.href = '/api/auth/github'}>
        Login with GitHub
      </button>
    </div>
  );
}
```

### 5.3 Advantages and Disadvantages

| Advantage | Disadvantage |
|-----------|-------------|
| User doesn't need to create yet another password | Dependency on external service |
| Passwords are managed by Google/Microsoft (more secure) | If the provider goes down, login goes down |
| Less friction in registration (more conversions) | Less control over data |
| Email already verified by provider | Privacy — provider knows where the user logs in |
| MFA usually already active | Not all users have accounts with the providers |

---

## 6. RBAC: Different Keys for Different Rooms

### 6.1 What Is RBAC

**RBAC (Role-Based Access Control)** is an access control model where permissions are assigned to **roles**, and users receive one or more roles.

> **Mario Analogy**: In Peach's castle, there are several rooms. Each character has different keys:
> - **Mario (admin)** = master key — opens all doors
> - **Luigi (moderator)** = intermediate key — opens most doors
> - **Toad (user)** = basic key — only opens their own room
> - **Visitor** = no key — can only stay in the lobby

### 6.2 Common Roles in Applications

```
Super Admin (Peach)
  └── Can do everything: create admins, delete accounts, configure system
      │
Admin (Mario)
  └── Manage users, view all data, moderate content
      │
Moderator (Luigi)
  └── Edit/remove inappropriate content, view reports
      │
User (Toad)
  └── CRUD on their own data only
      │
Viewer (Visitor)
  └── Read-only on public data
```

**Permissions table:**

| Action | Super Admin | Admin | Moderator | User | Viewer |
|--------|:-----------:|:-----:|:---------:|:----:|:------:|
| View own tasks | X | X | X | X | - |
| Create tasks | X | X | X | X | - |
| Edit own tasks | X | X | X | X | - |
| Delete own tasks | X | X | X | X | - |
| View everyone's tasks | X | X | X | - | - |
| Edit others' tasks | X | X | X | - | - |
| Delete others' tasks | X | X | - | - | - |
| Manage users | X | X | - | - | - |
| Create admins | X | - | - | - | - |
| Configure system | X | - | - | - | - |

### 6.3 Implementing RBAC

**In the database:**

```sql
-- Roles table
CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  description TEXT
);

-- Permissions table
CREATE TABLE permissions (
  id SERIAL PRIMARY KEY,
  action VARCHAR(100) NOT NULL, -- 'create:todo', 'delete:user'
  description TEXT
);

-- Role <-> permissions relationship (many to many)
CREATE TABLE role_permissions (
  role_id INTEGER REFERENCES roles(id),
  permission_id INTEGER REFERENCES permissions(id),
  PRIMARY KEY (role_id, permission_id)
);

-- User has a role
ALTER TABLE users ADD COLUMN role_id INTEGER REFERENCES roles(id);

-- Initial data
INSERT INTO roles (name, description) VALUES
  ('superadmin', 'Full system access'),
  ('admin', 'User and content management'),
  ('moderator', 'Content moderation'),
  ('user', 'Basic access'),
  ('viewer', 'Read-only');
```

### 6.4 Authorization Middleware

```javascript
// Generic RBAC middleware
function requirePermission(action) {
  return async (req, res, next) => {
    const userRole = req.user.role;

    // Fetch role permissions
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
        error: 'Access denied',
        message: `Role "${userRole}" does not have permission for "${action}"`
      });
    }
  };
}

// Usage in routes
app.get('/api/todos', verifyToken, requirePermission('read:todos'), getTodos);
app.post('/api/todos', verifyToken, requirePermission('create:todo'), createTodo);
app.delete('/api/users/:id', verifyToken, requirePermission('delete:user'), deleteUser);
```

---

## 7. Sessions vs Tokens: Two Philosophies

### 7.1 Session-Based: The Guard Who Remembers You

In session-based authentication, the server **stores** the user's login state.

```
1. Mario logs in → Server creates session (ID: abc123)
2. Server stores: { abc123: { userId: 'mario-001', role: 'admin' } }
3. Server sends cookie: Set-Cookie: sessionId=abc123
4. Mario makes requests → Sends cookie automatically
5. Server looks up session by ID → Knows who Mario is
```

> **Mario Analogy**: The castle guard has a **list** of everyone who entered. When Mario returns, the guard checks the list: *"Ah yes, Mario entered at 2 PM. You may pass."*

### 7.2 Token-Based: The Passport You Carry

In token-based authentication (JWT), the server **stores nothing** — all information is in the token.

```
1. Mario logs in → Server creates JWT with Mario's data
2. Server stores NOTHING
3. Mario receives JWT and stores it on the client
4. Mario makes requests → Sends JWT in header
5. Server decodes JWT → Knows who Mario is (without querying anything)
```

> **Mario Analogy**: Mario carries a **magic passport** that any guard in any castle can verify. No list needed — the passport contains everything.

### 7.3 When to Use Each One

| Criteria | Session | Token (JWT) |
|----------|---------|-------------|
| **Scalability** | Difficult (state on server) | Easy (stateless) |
| **Multiple servers** | Needs session store | Works on any server |
| **Logout** | Easy (delete session) | Difficult (token valid until it expires) |
| **Mobile** | Cookies can be problematic | Tokens work well |
| **Security** | Server controls the session | Token can be stolen |
| **Best for** | Traditional apps (SSR) | SPAs, APIs, microservices |

---

## 8. Advanced Security: Extra Protections

### 8.1 CORS: Who Can Knock on the Door

**CORS (Cross-Origin Resource Sharing)** defines which domains can make requests to your API.

> **Mario Analogy**: CORS is the castle's guest list. Only those on the list can enter. If someone from an unknown domain tries to access, the castle refuses.

```javascript
const cors = require('cors');

app.use(cors({
  origin: ['https://todoapp.com', 'https://admin.todoapp.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
```

### 8.2 Rate Limiting: Attempt Limits

**Rate Limiting** prevents brute-force attacks by limiting how many requests a user can make.

> **Mario Analogy**: It's as if the castle said: *"You can only try the password 5 times per minute. After that, wait 15 minutes."* Bowser can't test thousands of passwords.

```javascript
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // maximum 5 attempts
  message: { error: 'Too many login attempts. Try again in 15 minutes.' }
});

app.post('/api/login', loginLimiter, loginHandler);
```

### 8.3 MFA: Double Verification

**MFA (Multi-Factor Authentication)** requires two or more factors to authenticate:

1. **Something you know** (password)
2. **Something you have** (phone, physical key)
3. **Something you are** (biometrics)

> **Mario Analogy**: Besides proving he is Mario (password), the castle sends a magic code to Mario's phone. Even if Bowser discovers the password, he doesn't have Mario's phone.

### 8.4 HTTPS: The Secret Tunnel

**HTTPS** encrypts all communication between the browser and the server.

> **Mario Analogy**: Without HTTPS, it's like sending open letters through the Mushroom Kingdom — any Goomba can read them. With HTTPS, letters are sent through a secret underground tunnel — only the sender and recipient can read them.

```
HTTP:  Mario → [password in plain text] → Server
       Any enemy along the way can read it!

HTTPS: Mario → [🔒 encrypted data 🔒] → Server
       Enemies see only incomprehensible gibberish
```

---

## 9. Auth in Practice: TodoApp with JWT

### 9.1 Complete Registration Flow

```javascript
// POST /api/register
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Validate data
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }

    // 2. Check if email already exists
    const existingUser = await db.users.findByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    // 3. Hash the password
    const passwordHash = await bcrypt.hash(password, 12);

    // 4. Create user
    const user = await db.users.create({
      name,
      email,
      password: passwordHash,
      role: 'user'
    });

    // 5. Generate tokens
    const tokens = generateTokens(user);

    // 6. Return
    res.status(201).json({
      message: 'User created successfully',
      user: { id: user.id, name: user.name, email: user.email },
      ...tokens
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

### 9.2 Complete Login Flow

```javascript
// POST /api/login
app.post('/api/login', loginLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find user
    const user = await db.users.findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
      // Generic message to not reveal if the email exists
    }

    // 2. Verify password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // 3. Generate tokens
    const tokens = generateTokens(user);

    // 4. Set refresh token as httpOnly cookie
    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    // 5. Return access token
    res.json({
      message: 'Login successful',
      user: { id: user.id, name: user.name, role: user.role },
      accessToken: tokens.accessToken
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

### 9.3 Protecting Routes

```javascript
// Protected routes with authentication + authorization
const router = express.Router();

// Any authenticated user can view their tasks
router.get('/api/todos', verifyToken, async (req, res) => {
  const todos = await db.todos.findByUserId(req.user.userId);
  res.json(todos);
});

// Any authenticated user can create tasks
router.post('/api/todos', verifyToken, async (req, res) => {
  const todo = await db.todos.create({
    ...req.body,
    userId: req.user.userId
  });
  res.status(201).json(todo);
});

// Only admin can view ALL users
router.get('/api/users', verifyToken, requirePermission('read:users'), async (req, res) => {
  const users = await db.users.findAll();
  res.json(users);
});

// Only admin can delete users
router.delete('/api/users/:id', verifyToken, requirePermission('delete:user'), async (req, res) => {
  await db.users.delete(req.params.id);
  res.status(204).send();
});
```

---

## 10. Final Summary Table

| Concept | What It Is | Mario Analogy |
|---------|---------|----------------|
| **Authentication** | Prove identity | Prove you're Mario, not Bowser |
| **Authorization** | Verify permission | Does Mario have the room key? |
| **Hashing** | Irreversible password transformation | Magic fingerprint |
| **Salt** | Random seasoning in the hash | Each fingerprint is unique |
| **JWT** | Self-contained signed token | Peach's magic seal |
| **Access Token** | Short-lived token for access | Castle daily pass |
| **Refresh Token** | Token to renew access token | Annual card |
| **OAuth 2.0** | Delegated authentication | Ask the King to confirm |
| **Social Login** | OAuth with Google/Microsoft/GitHub | Kings from different kingdoms |
| **RBAC** | Role-based control | Different keys per character |
| **Session** | State on the server | Guard with guest list |
| **CORS** | Origin control | Castle guest list |
| **Rate Limiting** | Attempt limits | Maximum password attempts |
| **MFA** | Two-factor authentication | Password + phone code |
| **HTTPS** | Encrypted communication | Secret underground tunnel |

---

## References

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

*Level 4-1 complete! You learned that authentication and authorization are the pillars of security. In the next level, we'll explore cloud models — IaaS, PaaS, SaaS, and Serverless. Get ready for Level 4-2!*
