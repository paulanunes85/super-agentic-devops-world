---
title: "Fase 2-3 -- Feiticos de Protecao: Seguranca"
description: "Seguranca em desenvolvimento de software: secrets, variaveis de ambiente, HTTPS, SSL/TLS, Azure Key Vault e como proteger seu reino de invasores"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - seguranca
  - secrets
  - https
  - ssl-tls
  - key-vault
  - env-vars
  - world-2
  - mario
---

# Fase 2-3 -- Feiticos de Protecao: Seguranca

---

## Change Log

| Versao | Data       | Autor                                  | Descricao          |
|--------|------------|----------------------------------------|--------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial    |

---

## Sumario

- [Prologo: O Invasor no Castelo](#prologo-o-invasor-no-castelo)
- [1. Por Que Seguranca Importa?](#1-por-que-seguranca-importa)
  - [1.1 O Mushroom Kingdom Sem Protecao](#11-o-mushroom-kingdom-sem-protecao)
  - [1.2 Os 3 Pilares da Seguranca: CIA](#12-os-3-pilares-da-seguranca-cia)
- [2. Secrets: As Chaves do Castelo](#2-secrets-as-chaves-do-castelo)
  - [2.1 O Que Sao Secrets?](#21-o-que-sao-secrets)
  - [2.2 Exemplos de Secrets no Dia a Dia](#22-exemplos-de-secrets-no-dia-a-dia)
  - [2.3 O Erro Fatal: Secrets no Codigo](#23-o-erro-fatal-secrets-no-codigo)
- [3. Variaveis de Ambiente: O Bolso Secreto](#3-variaveis-de-ambiente-o-bolso-secreto)
  - [3.1 O Que Sao Variaveis de Ambiente?](#31-o-que-sao-variaveis-de-ambiente)
  - [3.2 O Arquivo .env: Seu Bolso Secreto](#32-o-arquivo-env-seu-bolso-secreto)
  - [3.3 O .gitignore: O Feitico de Invisibilidade](#33-o-gitignore-o-feitico-de-invisibilidade)
- [4. HTTPS e SSL/TLS: O Escudo Invisivel](#4-https-e-ssltls-o-escudo-invisivel)
  - [4.1 HTTP vs HTTPS](#41-http-vs-https)
  - [4.2 Como SSL/TLS Funciona](#42-como-ssltls-funciona)
  - [4.3 O Handshake: Aperto de Maos Secreto](#43-o-handshake-aperto-de-maos-secreto)
  - [4.4 Certificados: O Selo Real](#44-certificados-o-selo-real)
- [5. Azure Key Vault: A Sala do Tesouro do Toad](#5-azure-key-vault-a-sala-do-tesouro-do-toad)
  - [5.1 O Que e o Key Vault?](#51-o-que-e-o-key-vault)
  - [5.2 O Que Guardar no Key Vault?](#52-o-que-guardar-no-key-vault)
  - [5.3 Como Funciona na Pratica](#53-como-funciona-na-pratica)
  - [5.4 Comparacao: .env vs Key Vault](#54-comparacao-env-vs-key-vault)
- [6. GitHub Secrets: Protegendo o Pipeline](#6-github-secrets-protegendo-o-pipeline)
  - [6.1 Secrets em GitHub Actions](#61-secrets-em-github-actions)
  - [6.2 Environments Secrets](#62-environments-secrets)
- [7. Autenticacao e Autorizacao: Quem Voce E e O Que Pode Fazer](#7-autenticacao-e-autorizacao-quem-voce-e-e-o-que-pode-fazer)
  - [7.1 Autenticacao vs Autorizacao](#71-autenticacao-vs-autorizacao)
  - [7.2 Tokens e API Keys](#72-tokens-e-api-keys)
- [8. Os 10 Mandamentos da Seguranca](#8-os-10-mandamentos-da-seguranca)
- [9. Ataques Comuns e Como se Defender](#9-ataques-comuns-e-como-se-defender)
  - [9.1 Os Viloes do Mushroom Kingdom](#91-os-viloes-do-mushroom-kingdom)
- [10. Tabela Final de Resumo](#10-tabela-final-de-resumo)
- [Referencias](#referencias)

---

## Prologo: O Invasor no Castelo

Sofia estava orgulhosa. Seu TodoApp estava no ar, funcionando, com usuarios reais. Ate que uma manha, ela abriu o painel de monitoramento e viu: **10.000 requisicoes por segundo** vindas de um unico IP. Alguem estava bombardeando sua API. E pior: as requisicoes estavam chegando com a senha do banco de dados.

*"Como eles conseguiram a senha?!"* gritou Sofia.

Toad apareceu com uma expressao sombria. Ele mostrou o repositorio do GitHub. La, no arquivo `config.js`, em texto puro, para todo mundo ver:

```javascript
// NAO FACA ISSO!!!
const DATABASE_PASSWORD = "super-secreta-123";
```

*"Sofia,"* disse Toad, *"voce deixou a chave do castelo pendurada na porta. Qualquer Koopa Troopa que passasse podia pegar."*

Yoshi pousou ao lado, olhando os danos. *"E por isso que existe a Fase 2-3: Feiticos de Protecao. Seguranca nao e opcional, Sofia. E como as muralhas do castelo -- sem elas, qualquer Goomba entra."*

---

## 1. Por Que Seguranca Importa?

### 1.1 O Mushroom Kingdom Sem Protecao

Imagine o Mushroom Kingdom sem muralhas, sem guardas, sem portas trancadas. Qualquer Koopa poderia:
- Entrar no castelo e roubar moedas (dados)
- Se disfarcar de Toad e enganar todo mundo (phishing)
- Sabotar os canos de agua (infraestrutura)
- Destruir os blocos "?" (deletar recursos)

No mundo do software, os equivalentes sao:
- **Vazamento de dados** de usuarios
- **Invasao** de servidores
- **Roubo** de credenciais e secrets
- **Ransomware** -- sequestro de dados com pedido de resgate
- **Negacao de servico (DDoS)** -- derrubar o sistema com excesso de requisicoes

### 1.2 Os 3 Pilares da Seguranca: CIA

Todo profissional de seguranca conhece a triade **CIA** (nada a ver com a agencia americana!):

| Pilar | Significado | Analogia Mario | Exemplo |
|-------|-----------|----------------|---------|
| **Confidentiality** (Confidencialidade) | So quem deve ver, ve | So o Toad guardiao pode entrar na sala do tesouro | Senhas criptografadas, dados protegidos |
| **Integrity** (Integridade) | Dados nao podem ser alterados sem autorizacao | Ninguem pode mudar o placar de moedas sem jogar | Hashes, assinaturas digitais |
| **Availability** (Disponibilidade) | O sistema deve estar acessivel quando necessario | O castelo deve estar aberto para os Toads | Redundancia, backups, protecao DDoS |

> **ANALOGIA MARIO:** O Castelo da Princesa Peach tem os tres pilares: **Confidencialidade** (so Mario e aliados entram no castelo), **Integridade** (ninguem pode mover a Princesa sem autorizacao), e **Disponibilidade** (o castelo esta sempre acessivel para os herois). Bowser tenta violar os tres: invade (quebra confidencialidade), sequestra a Princesa (quebra integridade), e fecha o castelo (quebra disponibilidade).

---

## 2. Secrets: As Chaves do Castelo

### 2.1 O Que Sao Secrets?

**Secrets** (segredos) sao qualquer informacao sensivel que, se exposta, pode comprometer a seguranca do sistema. Sao as **chaves do castelo** -- sem elas voce nao entra, e com elas um invasor tambem entra.

> **ANALOGIA MARIO:** Secrets sao as **chaves que abrem portas dos castelos**. A chave do World 2 so abre as portas do World 2. Se Bowser roubar essa chave, ele pode entrar em qualquer sala. Por isso, as chaves NUNCA ficam expostas -- sao guardadas em bolsos secretos, cofres protegidos, e salas trancadas.

### 2.2 Exemplos de Secrets no Dia a Dia

| Secret | O que E | Se Vazar... | Analogia Mario |
|--------|---------|-------------|----------------|
| **Senha do banco de dados** | Credencial de acesso ao DB | Invasor le/apaga todos os dados | Chave da sala do tesouro |
| **API Key** | Chave de acesso a servicos externos | Invasor usa o servico em seu nome (e voce paga) | Chave do Warp Zone |
| **JWT Secret** | Chave para gerar tokens de autenticacao | Invasor cria tokens falsos (se faz passar por qualquer usuario) | Selo real falsificado |
| **SSH Key** | Chave de acesso a servidores | Invasor acessa seus servidores diretamente | Chave mestra do castelo |
| **Encryption Key** | Chave para criptografar/descriptografar dados | Invasor le dados que deveriam estar protegidos | Feitico de decodificacao |

### 2.3 O Erro Fatal: Secrets no Codigo

O erro mais comum e colocar secrets diretamente no codigo-fonte:

```javascript
// ERRADO! NUNCA FACA ISSO!
const db = new Client({
  host: 'producao-db.azure.com',
  user: 'admin',
  password: 'MinhaSenha@Super$ecreta123',  // PERIGO!
  database: 'todoapp'
});

// ERRADO! API Key exposta no codigo!
const OPENAI_KEY = 'sk-abc123xyz456...';  // PERIGO!
```

**Por que isso e terrivel?**
1. Qualquer pessoa com acesso ao repositorio ve a senha
2. Se o repo e publico, o MUNDO INTEIRO ve a senha
3. Bots automaticos varrem o GitHub procurando por padroes de senhas
4. Uma vez commitada, a senha fica no historico do Git PARA SEMPRE
5. Mesmo que voce delete depois, o commit antigo ainda tem a senha

> **ANALOGIA MARIO:** Colocar a senha no codigo e como **pendurar a chave do castelo na porta com uma plaquinha "CHAVE AQUI"**. Qualquer Koopa que passe ve, copia, e entra quando quiser.

---

## 3. Variaveis de Ambiente: O Bolso Secreto

### 3.1 O Que Sao Variaveis de Ambiente?

**Variaveis de ambiente** (environment variables) sao valores configurados FORA do codigo, no sistema operacional ou no servico de hospedagem. O codigo le esses valores em tempo de execucao.

```javascript
// CERTO! Le a senha de uma variavel de ambiente
const db = new Client({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,  // Vem do ambiente, nao do codigo!
  database: process.env.DATABASE_NAME
});
```

> **ANALOGIA MARIO:** Variaveis de ambiente sao como o **bolso secreto do Mario**. A chave nao fica visivel para ninguem -- esta guardada num bolso que so Mario pode acessar. O codigo sabe que existe uma chave (`process.env.DATABASE_PASSWORD`), mas nao sabe QUAL e a chave. O valor e fornecido pelo ambiente na hora de rodar.

### 3.2 O Arquivo .env: Seu Bolso Secreto

Para desenvolvimento local, criamos um arquivo `.env` na raiz do projeto:

```bash
# .env -- NUNCA COMMITAR ESTE ARQUIVO!
DATABASE_HOST=localhost
DATABASE_USER=postgres
DATABASE_PASSWORD=senha-local-dev
DATABASE_NAME=todoapp_dev
OPENAI_API_KEY=sk-dev-fake-key-para-testes
JWT_SECRET=meu-secret-local-dev
PORT=3000
```

**Como usar no codigo (Node.js com dotenv):**

```javascript
// No inicio da aplicacao
require('dotenv').config();

// Agora process.env tem todas as variaveis do .env
console.log(process.env.DATABASE_HOST); // "localhost"
```

### 3.3 O .gitignore: O Feitico de Invisibilidade

O arquivo `.gitignore` diz ao Git para IGNORAR certos arquivos -- nunca commitar, nunca rastrear, nunca enviar para o repositorio.

```bash
# .gitignore
.env
.env.local
.env.production
*.key
*.pem
credentials.json
```

> **ANALOGIA MARIO:** O `.gitignore` e um **Feitico de Invisibilidade** aplicado ao arquivo `.env`. Quando o Git olha para a pasta, ele simplesmente nao ve o `.env`. E como se o arquivo nao existisse. Ninguem que clonar o repo vai ter acesso a ele.

**Dica profissional: .env.example**

Crie um arquivo `.env.example` com as variaveis necessarias, mas SEM os valores reais:

```bash
# .env.example -- ESTE arquivo vai no repositorio
# Copie para .env e preencha com seus valores
DATABASE_HOST=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=
OPENAI_API_KEY=
JWT_SECRET=
PORT=3000
```

Isso ajuda novos desenvolvedores a saberem quais variaveis configurar, sem expor valores reais.

---

## 4. HTTPS e SSL/TLS: O Escudo Invisivel

### 4.1 HTTP vs HTTPS

| Aspecto | HTTP | HTTPS |
|---------|------|-------|
| **Significado** | HyperText Transfer Protocol | HyperText Transfer Protocol **Secure** |
| **Seguranca** | Nenhuma -- texto puro | Criptografado -- ninguem le no caminho |
| **Porta padrao** | 80 | 443 |
| **Analogia Mario** | Toad carregando carta ABERTA | Toad carregando carta em **cofre trancado** |
| **URL** | `http://site.com` | `https://site.com` (com cadeado) |

**O perigo do HTTP puro:**

```
HTTP (sem criptografia):
  Sofia ----[carta aberta]----> Servidor

  Qualquer Koopa no caminho pode:
  - LER a carta (espionar dados, senhas, cookies)
  - ALTERAR a carta (injetar codigo malicioso)
  - COPIAR a carta (roubar credenciais)

HTTPS (com criptografia):
  Sofia ----[cofre trancado]----> Servidor

  Koopas no caminho veem apenas:
  - Um cofre trancado que nao conseguem abrir
  - Nao sabem o que tem dentro
  - Nao podem alterar o conteudo
```

> **ANALOGIA MARIO:** HTTP e como o Toad correndo pelo Mushroom Kingdom com uma **carta aberta** nas maos. Qualquer Koopa Troopa que ele cruzar no caminho pode ler a carta. HTTPS e como o Toad correndo com a carta dentro de um **cofre trancado com magia** -- mesmo que um Koopa pegue o cofre, ele nao consegue abrir. O escudo invisivel protege a mensagem do ponto A ao ponto B.

### 4.2 Como SSL/TLS Funciona

**SSL** (Secure Sockets Layer) e **TLS** (Transport Layer Security) sao protocolos de criptografia. TLS e a versao moderna do SSL (mas todo mundo ainda diz "SSL" por habito).

A criptografia funciona com um par de chaves:
- **Chave publica**: qualquer um pode ter (e como o endereco do castelo)
- **Chave privada**: so o servidor tem (e como a chave do cofre)

```
1. Sofia quer falar com o Servidor (HTTPS)
2. Servidor envia sua CHAVE PUBLICA para Sofia
3. Sofia usa a chave publica para CRIPTOGRAFAR a mensagem
4. A mensagem viaja pela internet como texto ilegivel
5. Servidor usa sua CHAVE PRIVADA para DESCRIPTOGRAFAR
6. Ninguem no meio do caminho consegue ler!
```

### 4.3 O Handshake: Aperto de Maos Secreto

O **TLS Handshake** e o processo de negociacao entre cliente e servidor:

```
1. Cliente: "Ola Servidor! Quero falar em modo seguro"  (ClientHello)
2. Servidor: "Ola! Aqui esta meu certificado e chave publica"  (ServerHello)
3. Cliente: "Verifiquei seu certificado. E valido! Vamos combinar um segredo?"
4. Servidor: "Combinado! A partir de agora, tudo criptografado!"
5. [Comunicacao segura estabelecida]
```

> **ANALOGIA MARIO:** O TLS Handshake e como o **aperto de maos secreto** entre dois Toads aliados. Antes de trocar mensagens sensiveis, eles fazem um ritual: mostram seus selos reais (certificados), combinam uma lingua secreta (chave de sessao), e so depois comecam a conversar. Se um impostor tentar se passar por Toad, o selo real nao bate e a comunicacao e recusada.

### 4.4 Certificados: O Selo Real

Um **certificado SSL/TLS** e como um documento oficial que prova a identidade do servidor. E emitido por uma **Autoridade Certificadora** (CA -- Certificate Authority).

```
Certificado SSL para: todoapp.com
Emitido por: Let's Encrypt (Autoridade Certificadora)
Valido de: 01/01/2026
Valido ate: 01/04/2026
Chave publica: [dados criptograficos]
Assinatura digital: [prova de autenticidade]
```

> **ANALOGIA MARIO:** Um certificado e como o **selo real da Princesa Peach**. Qualquer Toad pode afirmar que e do castelo, mas so um Toad com o selo real (certificado) emitido pela Princesa (Autoridade Certificadora) e confiavel. Se o selo for falso, o navegador mostra um aviso: "CUIDADO! Este castelo pode ser uma armadilha do Bowser!"

---

## 5. Azure Key Vault: A Sala do Tesouro do Toad

### 5.1 O Que e o Key Vault?

**Azure Key Vault** e um servico de nuvem da Microsoft para guardar secrets de forma ultra-segura. E como um cofre-forte digital com multiplas camadas de protecao.

> **ANALOGIA MARIO:** O Key Vault e a **Sala do Tesouro do Toad** -- uma sala blindada dentro do castelo mais protegido do Mushroom Kingdom. So entra quem tem autorizacao. Tudo que esta la dentro e criptografado. Ha cameras em todas as paredes (logs de auditoria). E se alguem tentar arrombar, alarmes disparam imediatamente.

### 5.2 O Que Guardar no Key Vault?

| Tipo | Exemplos | Analogia Mario |
|------|----------|----------------|
| **Secrets** | Senhas de banco, API keys, connection strings | Chaves dos castelos |
| **Keys** | Chaves de criptografia, signing keys | Selos reais magicos |
| **Certificates** | Certificados SSL/TLS | Documentos de identidade oficial |

### 5.3 Como Funciona na Pratica

**Criando um Key Vault e guardando um secret:**

```bash
# 1. Criar o Key Vault (a sala do tesouro)
az keyvault create \
  --name meu-cofre-todoapp \
  --resource-group meu-grupo \
  --location brazilsouth

# 2. Guardar um secret (a chave do castelo)
az keyvault secret set \
  --vault-name meu-cofre-todoapp \
  --name "DatabasePassword" \
  --value "MinhaSenha@Super$ecreta123"

# 3. Buscar o secret (quando precisar)
az keyvault secret show \
  --vault-name meu-cofre-todoapp \
  --name "DatabasePassword" \
  --query value -o tsv
```

**Usando no codigo (Node.js com Azure SDK):**

```javascript
const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

// Conectar ao Key Vault
const client = new SecretClient(
  "https://meu-cofre-todoapp.vault.azure.net",
  new DefaultAzureCredential()
);

// Buscar o secret
async function getDatabasePassword() {
  const secret = await client.getSecret("DatabasePassword");
  return secret.value;
  // A senha NUNCA aparece no codigo!
  // Ela e buscada do cofre na hora que a aplicacao precisa.
}
```

### 5.4 Comparacao: .env vs Key Vault

| Aspecto | .env (Local) | Azure Key Vault (Nuvem) |
|---------|-------------|------------------------|
| **Analogia Mario** | Bolso secreto do Mario | Sala do Tesouro blindada |
| **Onde fica** | No seu computador | Na nuvem Azure |
| **Quem acessa** | Voce (e quem tiver acesso ao computador) | So servicos autorizados (RBAC) |
| **Auditoria** | Nenhuma | Logs de quem acessou o que |
| **Rotacao** | Manual | Automatica (pode trocar a senha automaticamente) |
| **Criptografia** | Nao (texto puro no arquivo) | Sim (criptografado em repouso e em transito) |
| **Ideal para** | Desenvolvimento local | Staging e Producao |
| **Custo** | Gratis | Baixo (centavos por operacao) |

> **ANALOGIA MARIO:** `.env` e guardar a chave no **bolso** -- funciona para andar pelo seu quintal (desenvolvimento local), mas nao e seguro o suficiente para proteger o tesouro real. **Key Vault** e guardar a chave na **Sala do Tesouro blindada** -- com guardas (RBAC), cameras (logs), alarmes (alertas), e portas magicas que so abrem para quem tem autorizacao.

---

## 6. GitHub Secrets: Protegendo o Pipeline

### 6.1 Secrets em GitHub Actions

Quando seu CI/CD pipeline precisa de secrets (para fazer deploy, acessar servicos, etc.), voce configura **GitHub Secrets** -- que sao variaveis de ambiente criptografadas no GitHub.

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Deploy para Azure
        env:
          AZURE_CLIENT_ID: ${{ secrets.AZURE_CLIENT_ID }}
          AZURE_TENANT_ID: ${{ secrets.AZURE_TENANT_ID }}
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
        run: |
          echo "Fazendo deploy..."
          # Os valores NUNCA aparecem nos logs!
          # GitHub automaticamente mascara: ***
```

**Configurando GitHub Secrets:**
1. Va ao repositorio no GitHub
2. Settings > Secrets and variables > Actions
3. New repository secret
4. Nome: `DATABASE_URL`, Valor: `postgresql://user:pass@host/db`

### 6.2 Environments Secrets

Voce pode ter secrets DIFERENTES para cada ambiente:

```
Repository Secrets (compartilhados):
  - AZURE_CLIENT_ID
  - AZURE_TENANT_ID

Environment: "staging"
  - DATABASE_URL = postgresql://staging-db/todoapp
  - API_KEY = staging-key-abc

Environment: "production"
  - DATABASE_URL = postgresql://prod-db/todoapp
  - API_KEY = prod-key-xyz
```

---

## 7. Autenticacao e Autorizacao: Quem Voce E e O Que Pode Fazer

### 7.1 Autenticacao vs Autorizacao

| Conceito | Pergunta | Analogia Mario | Exemplo |
|----------|---------|----------------|---------|
| **Autenticacao** (AuthN) | **Quem e voce?** | Guarda na porta: "Mostre sua identidade" | Login com email e senha |
| **Autorizacao** (AuthZ) | **O que voce pode fazer?** | Guarda na sala: "Voce pode entrar no tesouro?" | Permissao de admin vs usuario |

```
Autenticacao:
  Mario chega no castelo.
  Guarda: "Quem e voce?"
  Mario: "Sou Mario, aqui esta meu cracha" (token)
  Guarda: "Conferido. Pode entrar."

Autorizacao:
  Mario quer entrar na Sala do Tesouro.
  Guarda interno: "Mario, voce e autenticado. Mas so Toad
                    tem permissao para esta sala. Acesso negado."
  Mario: "..." (403 Forbidden)
```

### 7.2 Tokens e API Keys

| Mecanismo | O que E | Analogia Mario | Duracao |
|-----------|---------|----------------|---------|
| **API Key** | Chave fixa para acessar uma API | Chave do portao do castelo -- sempre a mesma | Longa (meses/anos) |
| **JWT Token** | Token temporario com informacoes do usuario | Cracha de visitante com data de validade | Curta (minutos/horas) |
| **OAuth Token** | Token obtido via terceiro confiavel | Carta de recomendacao da Princesa Peach | Media (horas/dias) |
| **Session Cookie** | Identificador de sessao no navegador | Pulseira de acesso ao parque do Mushroom Kingdom | Sessao (ate fechar o navegador) |

---

## 8. Os 10 Mandamentos da Seguranca

| # | Mandamento | Analogia Mario |
|---|-----------|----------------|
| 1 | **NUNCA** coloque secrets no codigo | Nunca pendure a chave na porta |
| 2 | **SEMPRE** use HTTPS | Sempre mande cartas em cofre trancado |
| 3 | **SEMPRE** adicione `.env` ao `.gitignore` | Sempre use o feitico de invisibilidade |
| 4 | Use **Key Vault** em producao | Guarde tesouros na sala blindada |
| 5 | **Rotacione** secrets periodicamente | Troque as fechaduras regularmente |
| 6 | Use **principio do menor privilegio** | Cada Toad so acessa as salas que precisa |
| 7 | **Valide** toda entrada do usuario | Verifique cada pacote que o Toad traz |
| 8 | **Monitore** acessos suspeitos | Cameras em todas as portas do castelo |
| 9 | Mantenha **dependencias atualizadas** | Conserte rachaduras nas muralhas |
| 10 | Tenha um **plano de incidente** | Saiba o que fazer se Bowser invadir |

---

## 9. Ataques Comuns e Como se Defender

### 9.1 Os Viloes do Mushroom Kingdom

| Ataque | Como Funciona | Analogia Mario | Defesa |
|--------|-------------|----------------|--------|
| **SQL Injection** | Invasor injeta comandos no banco de dados | Koopa escreve "ABRA A PORTA" na carta do Toad | Queries parametrizadas |
| **XSS** (Cross-Site Scripting) | Invasor injeta scripts na pagina | Koopa cola um Boo invisivel na parede | Sanitizacao de input |
| **CSRF** | Invasor faz voce executar acoes sem saber | Koopa disfarca uma armadilha de bloco "?" | Tokens CSRF |
| **Brute Force** | Tenta milhares de senhas ate acertar | Koopa testa todas as chaves do molho | Rate limiting, 2FA |
| **DDoS** | Milhares de requisicoes para derrubar o servidor | Exercito de Goombas lotando o castelo | CDN, WAF, auto-scaling |
| **Man-in-the-Middle** | Intercepta comunicacao entre cliente e servidor | Lakitu espiando a carta do Toad no caminho | HTTPS/TLS |
| **Phishing** | Engana usuario para revelar credenciais | Koopa disfarado de Toad pedindo a chave | Educacao, 2FA |

**Exemplo de SQL Injection:**

```javascript
// VULNERAVEL! Koopa pode injetar SQL!
const query = `SELECT * FROM usuarios WHERE nome = '${nomeDoUsuario}'`;
// Se nomeDoUsuario = "'; DROP TABLE usuarios; --"
// O banco de dados DELETA a tabela inteira!

// SEGURO! Query parametrizada
const query = 'SELECT * FROM usuarios WHERE nome = $1';
const values = [nomeDoUsuario];
// O banco trata o valor como TEXTO, nao como SQL
```

---

## 10. Tabela Final de Resumo

| Conceito | Explicacao Tecnica | Analogia Mario |
|----------|-------------------|----------------|
| **Secrets** | Informacoes sensiveis (senhas, chaves) | Chaves dos castelos do Mushroom Kingdom |
| **.env** | Arquivo local com variaveis de ambiente | Bolso secreto do Mario |
| **.gitignore** | Impede arquivos de serem commitados | Feitico de invisibilidade |
| **HTTPS** | HTTP com criptografia | Toad carregando carta em cofre trancado |
| **SSL/TLS** | Protocolo de criptografia | Magia que tranca o cofre |
| **Certificado** | Prova de identidade do servidor | Selo real da Princesa Peach |
| **TLS Handshake** | Negociacao de seguranca | Aperto de maos secreto entre Toads |
| **Key Vault** | Cofre digital na nuvem | Sala do Tesouro blindada do Toad |
| **GitHub Secrets** | Variaveis criptografadas no CI/CD | Cofre de seguranca do Lakitu |
| **Autenticacao** | Provar quem voce e | "Quem e voce?" -- mostre o cracha |
| **Autorizacao** | Provar o que pode fazer | "Pode entrar aqui?" -- verifique permissao |
| **SQL Injection** | Ataque via banco de dados | Koopa escrevendo comandos na carta do Toad |
| **Principio do menor privilegio** | Dar so o acesso necessario | Cada Toad so acessa as salas que precisa |

---

## Referencias

1. OWASP Top 10: https://owasp.org/www-project-top-ten/
2. Microsoft Learn -- Azure Key Vault: https://learn.microsoft.com/azure/key-vault/
3. GitHub Docs -- Encrypted Secrets: https://docs.github.com/actions/security-guides/encrypted-secrets
4. Let's Encrypt -- Free SSL/TLS: https://letsencrypt.org/
5. MDN Web Docs -- HTTPS: https://developer.mozilla.org/pt-BR/docs/Glossary/HTTPS
6. NIST Cybersecurity Framework: https://www.nist.gov/cyberframework
7. dotenv (Node.js): https://github.com/motdotla/dotenv

---

*"No Mushroom Kingdom, seguranca nao e paranoia -- e sobrevivencia. Bowser esta SEMPRE tentando invadir. Proteja suas chaves, tranque seus cofres, e nunca, NUNCA deixe a senha pendurada na porta."*

---

<div align="center">

⬅️ [Anterior: Fase 2-2: APIs](2-2-apis.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 2-4: DNS](2-4-dns.md)

</div>
