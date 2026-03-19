---
title: "Fase 5-9 -- O Escudo Estelar: GitHub Advanced Security"
description: "GitHub Advanced Security: Code Scanning, Secret Scanning e Dependabot com analogias Mario"
author: "Paula Silva | Software Global Black Belt, Microsoft Americas"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-5", "ghas", "security", "code-scanning"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0.0 | 2026-03-18 | Paula Silva | Versao inicial — Edicao Super Mario Bros |

# Fase 5-9 -- O Escudo Estelar: GitHub Advanced Security

---

**Preparado para:** Sofia
**Versao:** 1.0 (Edicao Mushroom Kingdom)
**Autora:** Paula Silva | Software Global Black Belt, Microsoft Americas
**Data:** Marco 2026
**Idioma:** Portugues do Brasil (pt-BR)
**Colecao:** Agentic DevOps -- Guia Completo de Desenvolvimento de Software

---

## SUMARIO

- [Introducao -- O Castelo Precisa de Mais que Paredes](#introducao--o-castelo-precisa-de-mais-que-paredes)
- [Secao 1 -- O que e GitHub Advanced Security (GHAS)](#secao-1--o-que-e-github-advanced-security-ghas)
  - [Visao Geral do GHAS](#visao-geral-do-ghas)
  - [Os 4 Pilares de Seguranca](#os-4-pilares-de-seguranca)
  - [Tabela: Os 4 Pilares vs Defesas do Castelo](#tabela-os-4-pilares-vs-defesas-do-castelo)
- [Secao 2 -- Code Scanning (CodeQL): O Detector de Armadilhas](#secao-2--code-scanning-codeql-o-detector-de-armadilhas)
  - [O que e Code Scanning](#o-que-e-code-scanning)
  - [Como CodeQL Funciona](#como-codeql-funciona)
  - [Tipos de Vulnerabilidades que CodeQL Detecta](#tipos-de-vulnerabilidades-que-codeql-detecta)
  - [Configurando Code Scanning](#configurando-code-scanning)
  - [Copilot Autofix: O Reparador Automatico](#copilot-autofix-o-reparador-automatico)
- [Secao 3 -- Secret Scanning: O Alarme Anti-Roubo](#secao-3--secret-scanning-o-alarme-anti-roubo)
  - [O que e Secret Scanning](#o-que-e-secret-scanning)
  - [O que Conta como "Segredo"](#o-que-conta-como-segredo)
  - [Como Secret Scanning Funciona](#como-secret-scanning-funciona)
  - [Push Protection: A Barreira Final](#push-protection-a-barreira-final)
  - [Configurando Secret Scanning](#configurando-secret-scanning)
- [Secao 4 -- Dependabot: O Toad Inspetor](#secao-4--dependabot-o-toad-inspetor)
  - [O que e Dependabot](#o-que-e-dependabot)
  - [As 3 Funcoes do Dependabot](#as-3-funcoes-do-dependabot)
  - [Como Dependabot Funciona](#como-dependabot-funciona)
  - [Configurando Dependabot](#configurando-dependabot)
- [Secao 5 -- Supply Chain Security: A Loja de Itens Confiavel](#secao-5--supply-chain-security-a-loja-de-itens-confiavel)
  - [O que e Supply Chain Security](#o-que-e-supply-chain-security)
  - [Tipos de Ataques a Supply Chain](#tipos-de-ataques-a-supply-chain)
  - [Defesas do GitHub](#defesas-do-github)
  - [Dependency Graph e SBOM](#dependency-graph-e-sbom)
- [Secao 6 -- Security Overview Dashboard: A Sala de Controle](#secao-6--security-overview-dashboard-a-sala-de-controle)
  - [O que e o Security Overview](#o-que-e-o-security-overview)
  - [Metricas do Dashboard](#metricas-do-dashboard)
  - [Usando o Dashboard na Pratica](#usando-o-dashboard-na-pratica)
- [Secao 7 -- Push Protection: O Portao que Nao Abre pra Segredos](#secao-7--push-protection-o-portao-que-nao-abre-pra-segredos)
  - [O que e Push Protection](#o-que-e-push-protection)
  - [Como Push Protection Funciona](#como-push-protection-funciona)
  - [O que Acontece Quando Push Protection Bloqueia](#o-que-acontece-quando-push-protection-bloqueia)
- [Secao 8 -- Tabela Mestra: Tudo Junto](#secao-8--tabela-mestra-tudo-junto)
- [Secao 9 -- Por Que Isso Importa: Um Segredo Vazado = Game Over](#secao-9--por-que-isso-importa-um-segredo-vazado--game-over)
  - [Historias Reais de Game Over](#historias-reais-de-game-over)
  - [O Custo de NAO Ter Seguranca](#o-custo-de-nao-ter-seguranca)
  - [O Custo de TER Seguranca](#o-custo-de-ter-seguranca)
- [O que Aprendemos -- Tabela de Resumo](#o-que-aprendemos--tabela-de-resumo)

---

## Introducao -- O Castelo Precisa de Mais que Paredes

Sofia tinha acabado de construir algo incrivel. Seu castelo no Mushroom Kingdom estava completo -- paredes solidas, torre alta, bandeira no topo, ponte levadica funcionando. Ela estava orgulhosa. "Meu castelo esta perfeito!" disse, admirando a construcao.

O Toad de seguranca apareceu ao lado dela, com uma lanterna e uma prancheta. Ele olhou para o castelo, depois para Sofia, e balancou a cabeca.

"O castelo esta bonito, Sofia. Mas... voce verificou se tem armadilhas escondidas nas paredes? Alguem pode ter plantado uma bomba no bloco 47 sem voce saber."

Sofia franziu a testa. "Armadilhas? Eu construi cada bloco!"

"Sim, mas voce usou blocos de terceiros, certo? Pacotes prontos da Loja de Itens? Voce verificou se algum deles veio com uma armadilha escondida?" Ele olhou para a porta. "E a chave do castelo... onde esta?"

"Ali, no meu inventario--" Sofia parou. A chave estava jogada no chao, visivel para qualquer um que passasse.

"Exatamente," disse o Toad. "Sua chave do castelo esta exposta. Qualquer Koopa que passe aqui pode pegar e entrar. E sabe aqueles blocos que voce pegou na Loja? Tres deles estao desatualizados e tem vulnerabilidades conhecidas. Um invasor poderia usar qualquer uma dessas brechas pra entrar."

Sofia empalideceu. "O que eu faco?"

O Toad sorriu. "Voce ativa o **Escudo Estelar** -- o GitHub Advanced Security. Ele e como ter um sistema de seguranca completo pro seu castelo: detectores de armadilhas, alarmes anti-roubo, inspetores de itens, e uma sala de controle onde voce ve tudo. Vem comigo."

---

## Secao 1 -- O que e GitHub Advanced Security (GHAS)

### Visao Geral do GHAS

O **GitHub Advanced Security (GHAS)** e um conjunto de ferramentas de seguranca integradas diretamente ao GitHub que protegem seu codigo, suas dependencias, e seus segredos. Ele nao e uma ferramenta separada que voce precisa instalar -- ele esta DENTRO do GitHub, funcionando como uma camada de protecao invisivel e constante.

GHAS funciona em tres frentes simultaneas:
1. **Encontrar problemas no SEU codigo** (Code Scanning)
2. **Encontrar segredos vazados** (Secret Scanning)
3. **Encontrar problemas nas suas DEPENDENCIAS** (Dependabot)

E tudo isso acontece **automaticamente**, sem voce precisar lembrar de rodar scans. E como ter guardas patrulhando o castelo 24 horas por dia, 7 dias por semana.

> **ANALOGIA MARIO:** GHAS e o **Escudo Estelar** -- aquele power-up lendario que da protecao total ao castelo. Nao e UM item so. E um SISTEMA de defesa completo: cameras (Code Scanning), alarmes (Secret Scanning), inspetores (Dependabot), e uma sala de controle (Security Dashboard). Cada componente protege contra um tipo diferente de ameaca. Juntos, eles formam uma fortaleza.

### Os 4 Pilares de Seguranca


### Tabela: Os 4 Pilares vs Defesas do Castelo

| Pilar GHAS | O que Protege | Contra O Que | Analogia Mario | Status |
|---|---|---|---|---|
| **Code Scanning (CodeQL)** | Seu codigo fonte | Vulnerabilidades no codigo que voce escreveu | **Visor de armadilhas** -- revela bombas escondidas nos blocos | Disponivel para todos os repos publicos; GHAS para privados |
| **Secret Scanning** | Credenciais e segredos | Senhas, API keys, tokens vazados no codigo | **Alarme anti-roubo** -- dispara se a chave do castelo for exposta | Disponivel para todos os repos publicos; GHAS para privados |
| **Dependabot** | Suas dependencias | Vulnerabilidades em pacotes de terceiros | **Toad inspetor** -- verifica se seus itens comprados estao seguros | Disponivel gratuitamente para todos |
| **Security Overview** | Visao geral | Falta de visibilidade sobre o estado de seguranca | **Sala de controle** -- ve tudo de cima, todos os alertas em um lugar | Disponivel com GHAS |

---

## Secao 2 -- Code Scanning (CodeQL): O Detector de Armadilhas

### O que e Code Scanning

**Code Scanning** e a capacidade de analisar automaticamente seu codigo-fonte em busca de vulnerabilidades de seguranca, bugs, e padroes perigosos. A ferramenta principal por tras do Code Scanning e o **CodeQL** -- um motor de analise semantica que entende seu codigo como um banco de dados pesquisavel.

CodeQL nao apenas procura padroes de texto (como um `grep`). Ele **entende** o fluxo do seu codigo: de onde os dados vem, por onde passam, e onde terminam. Isso permite encontrar vulnerabilidades complexas que ferramentas mais simples nao conseguem detectar.

> **ANALOGIA MARIO:** Code Scanning e como ter um **visor especial** que revela armadilhas escondidas na fase ANTES de voce pisar nelas. Sem o visor, voce ve uma fase normal -- blocos, moedas, plataformas. Com o visor, voce ve: "CUIDADO! Esse bloco ali na posicao 47 tem uma bomba escondida. Aquele cano verde leva para uma armadilha. Aquela moeda e uma isca." O visor nao muda a fase -- ele te mostra o que estava escondido.

### Como CodeQL Funciona

```
SEU CODIGO                    CodeQL                    RESULTADO
    │                           │                          │
    v                           v                          v
┌──────────┐            ┌──────────────┐           ┌───────────┐
│ function │            │ Transforma   │           │ ALERTA:   │
│ login(   │  ────────> │ codigo em    │ ────────> │ SQL       │
│   user,  │            │ banco de     │           │ Injection │
│   pass   │            │ dados        │           │ na linha  │
│ ) {      │            │ pesquisavel  │           │ 42        │
│  query(  │            │              │           │           │
│   "SELECT│            │ Executa      │           │ SUGESTAO: │
│   * FROM │            │ queries de   │           │ Use       │
│   users  │            │ seguranca    │           │ prepared  │
│   WHERE  │            │              │           │ statements│
│   name=" │            │ Encontra     │           │           │
│   + user │            │ padroes      │           │           │
│  )       │            │ perigosos    │           │           │
│ }        │            │              │           │           │
└──────────┘            └──────────────┘           └───────────┘
```

Etapas do Code Scanning:
1. **Trigger:** Um push ou PR dispara o scan automaticamente
2. **Build:** CodeQL compila seu codigo e cria um banco de dados semantico
3. **Analise:** Queries de seguranca rodam sobre o banco de dados
4. **Resultados:** Vulnerabilidades encontradas aparecem como alertas no PR ou na aba Security
5. **Correcao:** Voce (ou o Copilot Autofix) corrige o problema

### Tipos de Vulnerabilidades que CodeQL Detecta

| Vulnerabilidade | O que E | Risco | Analogia Mario | Exemplo |
|---|---|---|---|---|
| **SQL Injection** | Atacante injeta comandos SQL via input do usuario | CRITICO -- acesso total ao banco de dados | Koopa que entra pelo cano de entrada e chega direto ao tesouro | `query("SELECT * FROM users WHERE name=" + userInput)` |
| **Cross-Site Scripting (XSS)** | Atacante injeta JavaScript malicioso na pagina | ALTO -- roubo de sessao, dados do usuario | Goomba disfarçado de moeda -- voce pega e perde vida | `<div>{userInput}</div>` sem sanitizacao |
| **Path Traversal** | Atacante acessa arquivos fora do diretorio permitido | ALTO -- leitura de arquivos sensiveis | Koopa que descobre passagem secreta pra fora do castelo | `readFile("/data/" + userInput)` onde input e `../../etc/passwd` |
| **Insecure Deserialization** | Atacante envia objeto malicioso que e executado | CRITICO -- execucao de codigo remoto | Presente de Trojan -- parece item, mas e uma bomba | `JSON.parse(untrustedInput)` com eval |
| **Hard-coded Credentials** | Senhas ou chaves escritas diretamente no codigo | CRITICO -- acesso direto ao sistema | Chave do castelo pendurada na porta da frente | `password = "admin123"` |
| **Broken Authentication** | Falhas na verificacao de identidade | ALTO -- acesso nao autorizado | Porta do castelo que qualquer um pode abrir | Falta de verificacao de token em rotas protegidas |

### Configurando Code Scanning

Para ativar Code Scanning no seu repositorio, basta adicionar um workflow do GitHub Actions:

```yaml
# .github/workflows/codeql-analysis.yml
name: "CodeQL Analysis"

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 8 * * 1'  # Segunda-feira as 8h (scan semanal)

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      security-events: write
    strategy:
      matrix:
        language: [ 'javascript', 'typescript' ]
        # Linguagens suportadas: javascript, typescript, python,
        # java, csharp, cpp, go, ruby, swift, kotlin

    steps:
    - name: Checkout repository
      uses: actions/checkout@v4

    - name: Initialize CodeQL
      uses: github/codeql-action/init@v3
      with:
        languages: ${{ matrix.language }}
        # queries: +security-extended  # Para mais deteccoes

    - name: Autobuild
      uses: github/codeql-action/autobuild@v3

    - name: Perform CodeQL Analysis
      uses: github/codeql-action/analyze@v3
```

> **ANALOGIA MARIO:** Configurar CodeQL e como instalar o **sistema de deteccao de armadilhas** no seu castelo. Voce define: "Escaneie TODA VEZ que alguem entrar pela porta principal (push para main), TODA VEZ que alguem pedir permissao pra entrar (Pull Request), e TODA segunda-feira de manha como inspecao de rotina (schedule)." Uma vez instalado, o sistema funciona sozinho. Voce so precisa prestar atencao quando ele toca o alarme.

### Copilot Autofix: O Reparador Automatico

Quando o CodeQL encontra uma vulnerabilidade, o **Copilot Autofix** pode gerar automaticamente uma sugestao de correcao. Ele analisa a vulnerabilidade, entende o contexto do codigo, e propoe a mudanca minima necessaria para resolver o problema.

```
CODEQL ENCONTROU:
  Vulnerabilidade: SQL Injection na linha 42
  Arquivo: src/api/users.ts
  Codigo vulneravel:
    const result = await db.query(
      `SELECT * FROM users WHERE email = '${email}'`
    );

COPILOT AUTOFIX SUGERE:
  Correcao: Usar prepared statement
  Codigo corrigido:
    const result = await db.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
  Explicacao: "Substituido concatenacao de string por
               parametro preparado ($1) para prevenir
               SQL Injection."
```

> **ANALOGIA MARIO:** CodeQL e o visor que encontra a armadilha. Copilot Autofix e o Toad que diz: *"Encontrei uma bomba no bloco 47. Aqui esta o bloco seguro pra colocar no lugar. Quer que eu troque?"* Voce pode aceitar a troca ou fazer a correcao voce mesmo.

---

## Secao 3 -- Secret Scanning: O Alarme Anti-Roubo

### O que e Secret Scanning

**Secret Scanning** e a capacidade de detectar automaticamente quando credenciais, chaves de API, tokens, senhas, ou outros segredos sao acidentalmente commitados no repositorio. Ele monitora cada push, cada commit, cada arquivo, procurando padroes que correspondam a segredos conhecidos.

O Secret Scanning funciona em parceria com mais de 200 provedores de servico (AWS, Azure, Google Cloud, Stripe, Twilio, etc.) que fornecem os padroes dos seus segredos. Quando um segredo e detectado, o provedor pode ser notificado automaticamente para revogar o acesso.

> **ANALOGIA MARIO:** Secret Scanning e um **alarme anti-roubo** instalado em todo o castelo. Se alguem deixar a chave do castelo caindo no chao (commit com API key), o alarme dispara IMEDIATAMENTE. Mas nao para ai -- o alarme tambem avisa o chaveiro (provedor do servico) para trocar a fechadura (revogar o segredo). Tudo automatico, tudo instantaneo.

### O que Conta como "Segredo"

| Tipo de Segredo | Exemplo | Risco se Vazado | Analogia Mario |
|---|---|---|---|
| **API Key** | `AKIAIOSFODNN7EXAMPLE` (AWS) | Atacante usa seus recursos cloud (e voce paga) | Chave que abre o bau de moedas -- invasor pega todas as moedas |
| **Token de Acesso** | `ghp_xxxxxxxxxxxxxxxxxxxx` (GitHub) | Atacante acessa seus repos, codigo, configuracoes | Chave mestra do castelo -- abre TODAS as portas |
| **Senha de Banco** | `DATABASE_URL=postgres://user:senha@host/db` | Atacante acessa, modifica, ou deleta seus dados | Chave do tesouro -- acesso direto ao cofre |
| **Chave Privada** | `-----BEGIN RSA PRIVATE KEY-----` | Atacante se passa por voce em qualquer sistema | Selo real -- invasor pode se passar pelo Rei |
| **Token OAuth** | `ya29.xxxxxxxxxxxxxxxxxxxx` (Google) | Atacante acessa contas Google vinculadas | Passe VIP -- acesso a areas restritas |
| **Webhook Secret** | `whsec_xxxxxxxxxxxxxxxxxx` (Stripe) | Atacante pode forjar transacoes financeiras | Carimbo oficial -- pode falsificar documentos do reino |

### Como Secret Scanning Funciona

```
VOCE FAZ PUSH DO CODIGO
         │
         v
  ┌──────────────────┐
  │ SECRET SCANNING   │
  │ analisa cada      │
  │ arquivo, cada     │
  │ linha, cada       │
  │ commit            │
  └────────┬─────────┘
           │
      ┌────┴────┐
   LIMPO     SEGREDO DETECTADO!
     │              │
     v              v
  ┌──────┐   ┌──────────────────────┐
  │ OK   │   │ 1. Alerta no GitHub  │
  │ Nada │   │ 2. Email para voce   │
  │ mais │   │ 3. Notifica provedor │
  └──────┘   │ 4. Provedor revoga   │
             │    o segredo         │
             └──────────────────────┘
```

O processo acontece em milissegundos:

| Etapa | O que Acontece | Tempo | Analogia Mario |
|---|---|---|---|
| **1. Deteccao** | Scan encontra padrao de segredo no codigo | Milissegundos | Alarme detecta a chave no chao |
| **2. Validacao** | Verifica se o segredo e real (nao e placeholder) | Milissegundos | Alarme confirma que e a chave REAL, nao uma copia |
| **3. Alerta** | Cria alerta na aba Security do repo | Segundos | Sirene toca no castelo |
| **4. Notificacao** | Envia email para admins e quem fez o commit | Segundos | Mensageiro corre ate voce |
| **5. Parceiro** | Notifica o provedor do servico (AWS, Azure, etc.) | Segundos | Mensageiro corre ate o chaveiro |
| **6. Revogacao** | Provedor revoga automaticamente o segredo | Minutos | Chaveiro troca a fechadura |

### Push Protection: A Barreira Final

**Push Protection** e uma camada EXTRA de seguranca que bloqueia o push ANTES do segredo chegar ao repositorio. Em vez de detectar depois que o segredo ja foi commitado, Push Protection impede que ele seja enviado.

```
SEM PUSH PROTECTION:
  Voce faz push → segredo vai pro repo → scan detecta → alerta → voce remove
  (Mas o segredo ja esteve publico por algum tempo!)

COM PUSH PROTECTION:
  Voce faz push → scan detecta ANTES de aceitar → BLOQUEIA → segredo nunca chega
  (O segredo nunca ficou publico!)
```

> **ANALOGIA MARIO:** Push Protection e como um **portao com detector de metais** na entrada do castelo. SEM o portao, voce entra no castelo carregando uma bomba (segredo) sem querer, a bomba e detectada DENTRO do castelo, e todo mundo entra em panico pra remove-la. COM o portao, voce tenta entrar, o detector apita, e o guarda diz: *"Ei, voce tem algo perigoso ai. Tire isso antes de entrar."* A bomba nunca entra no castelo.

### Configurando Secret Scanning

Secret Scanning e ativado na pagina de Settings do repositorio:

```
Repository → Settings → Code security and analysis

  Secret scanning:                    [Enable]
  Push protection:                    [Enable]

  ☑ Scan for generic secrets (AI-powered)
  ☑ Alert on exposure of partner patterns
  ☑ Notify partners for automatic revocation
```

Para protecao adicional, adicione um `.gitignore` robusto e use variaveis de ambiente:

```bash
# .gitignore -- NUNCA commite esses arquivos
.env
.env.local
.env.production
*.key
*.pem
credentials.json
service-account.json
```

```bash
# Use variaveis de ambiente em vez de hardcoded
# ERRADO (segredo no codigo):
API_KEY = "sk-xxxxxxxxxxxxxxxxxxxxx"

# CERTO (segredo em variavel de ambiente):
API_KEY = os.environ.get("API_KEY")
# O valor real esta no .env (que esta no .gitignore)
# ou nos Secrets do GitHub (Settings → Secrets)
```

---

## Secao 4 -- Dependabot: O Toad Inspetor

### O que e Dependabot

**Dependabot** e um bot integrado ao GitHub que monitora suas dependencias (pacotes, bibliotecas, frameworks que voce usa) e te avisa quando alguma delas tem uma vulnerabilidade conhecida ou esta desatualizada. Alem de avisar, ele pode criar Pull Requests automaticos com a atualizacao necessaria.

Na pratica, quase todo projeto moderno usa dezenas a centenas de dependencias. E cada uma dessas dependencias tem suas PROPRIAS dependencias. E uma cadeia enorme. Monitorar tudo manualmente seria impossivel -- e ai entra o Dependabot.

> **ANALOGIA MARIO:** Dependabot e o **Toad Inspetor** que verifica seu inventario regularmente. Imagine que voce comprou uma espada na Loja de Itens do Mushroom Kingdom. Meses depois, descobre-se que aquele lote de espadas tinha um defeito -- elas quebram no meio da batalha. O Toad Inspetor bate na sua porta e diz: *"Sofia, aquela espada que voce comprou no mes passado? Ela tem um defeito conhecido. Aqui esta a versao corrigida. Quer que eu troque pra voce?"* Ele monitora TODOS os seus itens, TODOS os dias, e te avisa quando qualquer um deles tem problema.

### As 3 Funcoes do Dependabot

| Funcao | O que Faz | Quando Ativa | Analogia Mario |
|---|---|---|---|
| **Dependabot Alerts** | Avisa quando uma dependencia tem vulnerabilidade conhecida | Quando uma nova CVE e publicada para uma dependencia sua | Toad inspetor batendo na porta: "Sua espada tem defeito!" |
| **Dependabot Security Updates** | Cria PR automatico com a correcao de seguranca | Quando uma correcao existe para a vulnerabilidade | Toad inspetor trazendo a espada nova: "Posso trocar pra voce?" |
| **Dependabot Version Updates** | Cria PRs para manter dependencias na ultima versao | Periodicamente (diario, semanal, mensal) | Toad inspetor fazendo revisao geral: "Esses 5 itens tem versao mais nova" |

### Como Dependabot Funciona

```
SEU PROJETO                    DEPENDABOT                  RESULTADO
    │                              │                          │
    v                              v                          v
┌──────────┐              ┌──────────────┐            ┌───────────┐
│ package  │              │ Compara suas │            │ ALERTA:   │
│ .json:   │  ─────────>  │ dependencias │ ─────────> │ lodash    │
│          │              │ com banco    │            │ 4.17.20   │
│ lodash:  │              │ de           │            │ tem CVE   │
│  4.17.20 │              │ vulnerabili- │            │           │
│ express: │              │ dades        │            │ PR criado │
│  4.18.1  │              │ (GitHub      │            │ atuali-   │
│ react:   │              │  Advisory    │            │ zando     │
│  18.2.0  │              │  Database)   │            │ para      │
│          │              │              │            │ 4.17.21   │
└──────────┘              └──────────────┘            └───────────┘
```

Exemplo de PR criado pelo Dependabot:

```
PR #312: Bump lodash from 4.17.20 to 4.17.21

Dependabot atualizou lodash de 4.17.20 para 4.17.21.

Changelog:
  - Corrige vulnerabilidade de Prototype Pollution (CVE-2021-23337)
  - Severidade: ALTA
  - CVSS Score: 7.2

Compatibilidade:
  - Sem breaking changes
  - Todos os testes passaram

────────────────────────────
Este PR foi criado automaticamente pelo Dependabot.
```

> **ANALOGIA MARIO:** O Toad Inspetor fez todo o trabalho: encontrou o item com problema, buscou a versao corrigida na Loja, trouxe ate voce, e disse exatamente qual era o defeito e como a versao nova resolve. Voce so precisa aprovar a troca (merge do PR). Se quiser, pode testar a espada nova antes de aceitar (rodar os testes).

### Configurando Dependabot

Crie um arquivo `.github/dependabot.yml` no seu repositorio:

```yaml
# .github/dependabot.yml
version: 2
updates:
  # Dependencias do npm (frontend e backend JavaScript/TypeScript)
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"       # Verificar semanalmente
      day: "monday"            # Toda segunda-feira
      time: "09:00"            # As 9h
      timezone: "America/Sao_Paulo"
    open-pull-requests-limit: 10  # Maximo 10 PRs abertos
    labels:
      - "dependencies"
      - "automated"
    commit-message:
      prefix: "chore(deps):"  # Prefixo no commit message
    # Agrupar atualizacoes menores para reduzir PRs
    groups:
      dev-dependencies:
        patterns:
          - "@types/*"
          - "eslint*"
          - "jest*"
          - "typescript"
        update-types:
          - "minor"
          - "patch"

  # GitHub Actions
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "weekly"
    labels:
      - "ci/cd"
      - "automated"

  # Docker
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
    labels:
      - "infrastructure"
      - "automated"
```

> **ANALOGIA MARIO:** Configurar o Dependabot e como dar instrucoes ao Toad Inspetor: "Inspecione meu inventario toda segunda-feira as 9h. Verifique itens de combate (npm), itens de transporte (GitHub Actions), e itens de construcao (Docker). Se encontrar mais de 10 problemas, resolva os 10 mais criticos primeiro. E agrupe as atualizacoes pequenas pra nao me sobrecarregar com muitos avisos."

---

## Secao 5 -- Supply Chain Security: A Loja de Itens Confiavel

### O que e Supply Chain Security

**Supply Chain Security** e a pratica de garantir que todas as dependencias, ferramentas, e componentes que voce usa no seu projeto sao **seguros, autenticos, e livres de codigo malicioso**. O nome "supply chain" (cadeia de suprimentos) vem da analogia com o mundo fisico: assim como voce confia que a comida no supermercado nao esta envenenada, voce confia que os pacotes no npm/PyPI/Maven nao tem malware.

Mas e se a cadeia de suprimentos for comprometida? E se alguem colocar codigo malicioso num pacote popular? E se a Loja de Itens do Mushroom Kingdom comecar a vender itens amaldicoados?

> **ANALOGIA MARIO:** Supply Chain Security e garantir que a **Loja de Itens do Mushroom Kingdom** nao esta vendendo itens amaldicoados. Voce compra um Super Mushroom achando que vai crescer... mas na verdade e um Poison Mushroom disfarçado que te encolhe. A Loja parecia confiavel, o item parecia legitimo, mas alguem adulterou o produto antes de chegar na prateleira. Supply Chain Security e ter inspetores verificando cada item antes de entrar na Loja.

### Tipos de Ataques a Supply Chain

| Ataque | Como Funciona | Risco | Analogia Mario |
|---|---|---|---|
| **Typosquatting** | Pacote com nome parecido ao original (ex: `loadsh` em vez de `lodash`) | Voce instala o pacote errado com malware | Loja vende "Super Mushron" (quase igual a Super Mushroom) -- parece real, mas e veneno |
| **Dependency Confusion** | Pacote publico com mesmo nome de um pacote interno da sua empresa | Build system instala o publico (malicioso) em vez do interno | Loja vende copia barata de um item exclusivo do castelo -- parece igual, mas e falso |
| **Maintainer Takeover** | Atacante assume controle de um pacote popular | Proxima atualizacao vem com malware | Novo dono da Loja substitui itens reais por amaldicoados |
| **Build System Compromise** | Atacante compromete o sistema de build de um pacote | Pacote compilado contem malware mesmo com codigo fonte limpo | Fabrica de itens adultera o produto DEPOIS de sair da receita original |

### Defesas do GitHub

| Defesa | Como Protege | O que Voce Ve | Analogia Mario |
|---|---|---|---|
| **Dependency Graph** | Mapeia TODAS as suas dependencias (diretas e transitivas) | Grafo visual de quem depende de quem | Mapa de TODOS os itens do seu inventario, incluindo o que esta dentro de cada um |
| **Dependency Review** | Mostra quais dependencias um PR adiciona/remove e seus riscos | Alertas no PR: "Esta dependencia tem 3 vulnerabilidades" | Inspetor que analisa cada item novo antes de entrar no castelo |
| **Advisory Database** | Banco de dados de vulnerabilidades conhecidas em pacotes | Base usada pelo Dependabot para comparar | Livro com lista de todos os itens defeituosos ja descobertos |
| **npm Provenance** | Verifica que o pacote foi construido pelo CI oficial do autor | Selo de autenticidade no pacote | Carimbo oficial de autenticidade -- "Este item foi feito na fabrica original" |
| **SBOM (Software Bill of Materials)** | Lista completa de todos os componentes do seu software | Documento exportavel com todas as dependencias | Inventario oficial do castelo -- lista de TODOS os itens usados na construcao |

### Dependency Graph e SBOM

O **Dependency Graph** e como um raio-X do seu projeto -- mostra tudo que seu codigo usa, incluindo dependencias de dependencias (transitivas):

```
SEU PROJETO
├── react 18.2.0          (voce escolheu)
│   ├── react-dom 18.2.0  (react precisa)
│   └── scheduler 0.23.0  (react precisa)
├── express 4.18.1         (voce escolheu)
│   ├── body-parser 1.20.0 (express precisa)
│   │   └── bytes 3.1.2    (body-parser precisa)
│   ├── cookie 0.5.0       (express precisa)
│   └── qs 6.11.0          (express precisa)
├── lodash 4.17.21         (voce escolheu)
└── prisma 5.0.0           (voce escolheu)
    ├── @prisma/client     (prisma precisa)
    └── @prisma/engines    (prisma precisa)

Total: 4 dependencias diretas, 10+ transitivas
Qualquer uma pode ter vulnerabilidade!
```

> **ANALOGIA MARIO:** Voce comprou 4 itens na Loja (react, express, lodash, prisma). Mas DENTRO de cada item, existem outros componentes menores que voce nao escolheu diretamente. O express, por exemplo, veio com body-parser, cookie, e qs embutidos. Se qualquer um desses componentes internos tiver um defeito, SEU castelo esta em risco. O Dependency Graph mostra toda essa cadeia. E o SBOM e a lista oficial: "Meu castelo foi construido com ESTES 14 componentes."

---

## Secao 6 -- Security Overview Dashboard: A Sala de Controle

### O que e o Security Overview

O **Security Overview** e um dashboard centralizado que mostra o estado de seguranca de todos os seus repositorios em um unico lugar. Em vez de entrar em cada repositorio individualmente para checar alertas, voce ve tudo de cima -- como uma sala de controle com monitores mostrando cada setor do castelo.

> **ANALOGIA MARIO:** O Security Overview e a **Sala de Controle** do castelo. Imagine uma sala no topo da torre com monitores mostrando cada porta, cada corredor, cada janela. Um monitor mostra: "Porta Leste: SEGURA." Outro: "Corredor Norte: ALERTA -- item defeituoso detectado." Outro: "Tesouro: SEGURO -- ultima inspecao ha 2 horas." Voce nao precisa andar pelo castelo inteiro pra saber o que esta acontecendo -- tudo esta na sua frente.

### Metricas do Dashboard

| Metrica | O que Mostra | Por Que Importa | Analogia Mario |
|---|---|---|---|
| **Alertas abertos** | Quantas vulnerabilidades ainda nao foram corrigidas | Saber o tamanho do problema | Quantas portas estao com defeito no castelo |
| **Alertas por severidade** | Critico, Alto, Medio, Baixo | Priorizar o que corrigir primeiro | Quais portas dao acesso ao tesouro (critico) vs despensa (baixo) |
| **Tempo medio de correcao (MTTR)** | Quanto tempo leva pra corrigir vulnerabilidades | Medir velocidade de resposta | Quanto tempo entre detectar porta quebrada e consertar |
| **Cobertura de scanning** | Quantos repos tem scanning ativado | Saber se todos os castelos estao protegidos | Quantos castelos tem o sistema de alarme instalado |
| **Tendencia** | Alertas aumentando ou diminuindo ao longo do tempo | Saber se a situacao esta melhorando | O castelo esta ficando mais seguro ou menos seguro? |
| **Segredos expostos** | Quantas credenciais foram detectadas no codigo | Alerta critico imediato | Quantas chaves do castelo estao jogadas no chao |

### Usando o Dashboard na Pratica

```
SECURITY OVERVIEW -- Mushroom Kingdom Corp
─────────────────────────────────────────────

ALERTAS TOTAIS:  23
  Criticos:       2  ████░░░░░░  (ATENCAO!)
  Altos:          5  ██████████
  Medios:        10  ████████████████████
  Baixos:         6  ████████████

COBERTURA:
  Code Scanning:    45/50 repos (90%)  ██████████████████░░
  Secret Scanning:  50/50 repos (100%) ████████████████████
  Dependabot:       48/50 repos (96%)  ███████████████████░

TENDENCIA (ultimos 30 dias):
  Alertas abertos:  ↓ 15%  (melhorando!)
  MTTR:             ↓ 20%  (mais rapido!)
  Novos alertas:    → 0%   (estavel)

TOP REPOSITORIOS COM MAIS ALERTAS:
  1. todo-app-backend     (8 alertas -- 2 criticos)
  2. payment-service      (5 alertas -- 0 criticos)
  3. auth-gateway         (4 alertas -- 0 criticos)

ACOES RECOMENDADAS:
  ⚡ 2 alertas CRITICOS no todo-app-backend precisam de
     atencao imediata (SQL Injection + Segredo exposto)
  📋 5 repos sem Code Scanning -- ativar essa semana
```

> **ANALOGIA MARIO:** A Sala de Controle te diz: "Sofia, seu castelo principal (todo-app-backend) tem 2 PROBLEMAS CRITICOS -- uma armadilha na sala do trono e uma chave exposta na entrada. Os outros castelos estao razoaveis mas 5 deles nao tem sistema de alarme instalado ainda. No geral, a seguranca melhorou 15% no ultimo mes. Mas aqueles 2 problemas criticos precisam ser resolvidos AGORA."

---

## Secao 7 -- Push Protection: O Portao que Nao Abre pra Segredos

### O que e Push Protection

**Push Protection** e uma funcionalidade do Secret Scanning que impede que segredos sejam enviados para o repositorio. Em vez de detectar depois (e ter que remediar), ele **bloqueia na origem**.

Push Protection funciona tanto no `git push` via terminal quanto na interface web do GitHub. E a ultima linha de defesa antes de um segredo se tornar publico.

### Como Push Protection Funciona

```
VOCE NO TERMINAL:

$ git add .
$ git commit -m "feat: add payment integration"
$ git push origin main

PUSH PROTECTION ENTRA EM ACAO:

Remote: ╔═════════════════════════════════════════════════╗
Remote: ║        PUSH BLOCKED -- SECRET DETECTED          ║
Remote: ╠═════════════════════════════════════════════════╣
Remote: ║                                                 ║
Remote: ║  Secret type: Stripe API Key                    ║
Remote: ║  File: src/services/payment.ts                  ║
Remote: ║  Line: 12                                       ║
Remote: ║                                                 ║
Remote: ║  To push, you must first remove the secret      ║
Remote: ║  from your commits.                             ║
Remote: ║                                                 ║
Remote: ║  See: https://docs.github.com/secret-scanning   ║
Remote: ╚═════════════════════════════════════════════════╝

! [remote rejected] main -> main (push declined due to secret detection)
```

### O que Acontece Quando Push Protection Bloqueia

| Passo | O que Fazer | Comando | Analogia Mario |
|---|---|---|---|
| **1. Entender** | Ler a mensagem de erro -- qual segredo, qual arquivo, qual linha | (ler a mensagem) | Guarda mostra o item perigoso: "Isso aqui nao pode entrar" |
| **2. Remover** | Tirar o segredo do codigo e usar variavel de ambiente | Mover pra `.env` ou GitHub Secrets | Guardar a chave no bolso secreto em vez de carregar na mao |
| **3. Limpar historico** | Remover o segredo do historico de commits | `git rebase` ou BFG Repo Cleaner | Apagar as pegadas pra ninguem seguir o rastro |
| **4. Re-push** | Enviar novamente sem o segredo | `git push origin main` | Passar pelo portao limpo -- sem itens proibidos |

```bash
# Passo pratico para resolver:

# 1. Remova o segredo do arquivo
# Em vez de:
#   STRIPE_KEY = "sk_live_xxxxx"
# Use:
#   STRIPE_KEY = process.env.STRIPE_KEY

# 2. Adicione ao .env (que esta no .gitignore):
echo 'STRIPE_KEY=sk_live_xxxxx' >> .env

# 3. Adicione ao GitHub Secrets (para CI/CD):
gh secret set STRIPE_KEY --body "sk_live_xxxxx"

# 4. Faca commit da correcao e push:
git add src/services/payment.ts
git commit -m "fix: move Stripe key to environment variable"
git push origin main
# Agora passa!
```

> **ANALOGIA MARIO:** O portao detectou que voce estava carregando a chave do castelo de forma visivel. O guarda te parou: *"Nao pode entrar com a chave assim! Guarda no bolso secreto (.env) e registra na sala de chaves segura (GitHub Secrets). Depois pode entrar."* Voce guarda a chave no lugar certo, e o portao abre. Simples assim.

---

## Secao 8 -- Tabela Mestra: Tudo Junto

| Feature GHAS | O que Faz | Contra O Que | Analogia Mario | Como Ativar |
|---|---|---|---|---|
| **Code Scanning (CodeQL)** | Escaneia seu codigo em busca de vulnerabilidades | SQL Injection, XSS, Path Traversal, e 200+ padroes | **Visor de armadilhas** -- revela bombas escondidas nos blocos | Adicionar workflow `.github/workflows/codeql-analysis.yml` |
| **Copilot Autofix** | Sugere correcoes automaticas para vulnerabilidades | Vulnerabilidades encontradas pelo Code Scanning | **Toad reparador** -- traz o bloco substituto e oferece pra trocar | Ativado automaticamente com Code Scanning + Copilot |
| **Secret Scanning** | Detecta credenciais vazadas no codigo | API keys, tokens, senhas, chaves privadas expostas | **Alarme anti-roubo** -- dispara quando a chave e exposta | Settings → Code security → Enable Secret Scanning |
| **Push Protection** | Bloqueia push que contem segredos | Segredos sendo commitados acidentalmente | **Portao com detector** -- barra entrada de itens proibidos | Settings → Code security → Enable Push Protection |
| **Dependabot Alerts** | Avisa sobre vulnerabilidades em dependencias | Pacotes desatualizados com CVEs conhecidas | **Toad inspetor** -- avisa que seu item tem defeito | Automatico para repos publicos; Settings para privados |
| **Dependabot Updates** | Cria PRs para atualizar dependencias | Dependencias desatualizadas | **Toad inspetor** -- traz a versao corrigida pra voce | Criar `.github/dependabot.yml` |
| **Dependency Graph** | Mapeia todas as dependencias do projeto | Falta de visibilidade sobre componentes usados | **Raio-X do inventario** -- mostra tudo que tem dentro de cada item | Automatico para todos os repos |
| **Security Overview** | Dashboard centralizado de seguranca | Falta de visao geral do estado de seguranca | **Sala de controle** -- monitores mostrando todo o castelo | Disponivel na Organization → Security |

---

## Secao 9 -- Por Que Isso Importa: Um Segredo Vazado = Game Over

### Historias Reais de Game Over

Esses nao sao cenarios hipoteticos. Sao coisas que aconteceram de verdade:

| Incidente | O que Aconteceu | Consequencia | Poderia Ter Sido Evitado com... |
|---|---|---|---|
| **Uber (2016)** | Desenvolvedores commitaram credenciais AWS num repo GitHub | Dados de 57 milhoes de usuarios e motoristas vazados. Uber pagou $148 milhoes em acordo. | Secret Scanning + Push Protection |
| **Samsung (2022)** | Chaves de assinatura vazaram em repositorio publico | Atacantes poderiam assinar malware como se fosse app oficial Samsung | Secret Scanning |
| **Log4Shell (2021)** | Vulnerabilidade critica na biblioteca Log4j (usada por milhoes de projetos) | Execucao remota de codigo em QUALQUER sistema com Log4j | Dependabot (alertou horas apos a CVE ser publicada) |
| **event-stream (2018)** | Novo maintainer de pacote npm injetou malware | Malware roubava Bitcoin de carteiras de desenvolvedores | Dependency Review + Supply Chain Security |
| **Codecov (2021)** | Supply chain attack no CI do Codecov | Credenciais de milhares de repositorios expostas | Supply Chain Security + Secret rotation |

### O Custo de NAO Ter Seguranca

| O que Acontece | Custo Financeiro | Custo de Reputacao | Custo de Tempo |
|---|---|---|---|
| **API key vazada** | Centenas a milhares de dolares em uso fraudulento | Comunicado de incidente para clientes | Dias para investigar, revogar, rotacionar |
| **Dados de usuarios vazados** | Multas de LGPD/GDPR (ate 4% do faturamento global) | Perda de confianca, usuarios abandonam | Meses de investigacao e remediacao |
| **Vulnerabilidade explorada** | Custo de incident response, forense, restauracao | Manchete negativa na midia | Semanas de recuperacao |
| **Supply chain attack** | Comprometimento de todos os clientes downstream | Crise de confianca em todo o ecossistema | Meses para identificar e limpar |

> **ANALOGIA MARIO:** Um segredo vazado e como deixar a chave do castelo na porta. Nao importa quao grossas sao as paredes, quao fortes sao os guardas, quao profundo e o fosso. Se a chave esta na porta, qualquer Koopa entra. E quando entra, pode roubar o tesouro (dados), sequestrar a princesa (derrubar o servico), ou plantar bombas (malware). **Uma unica chave exposta anula TODA a seguranca do castelo.** E por isso que GHAS nao e opcional -- e ESSENCIAL. E o custo de ativar GHAS e infinitamente menor que o custo de um incidente.

### O Custo de TER Seguranca

| Investimento | O que Custa | O que Previne | ROI |
|---|---|---|---|
| **Ativar GHAS** | Tempo de configuracao (minutos a horas) | Todos os incidentes listados acima | Astronomico |
| **Code Scanning** | Minutos de CI a cada push | Vulnerabilidades em producao | Cada vulnerabilidade encontrada = semanas de remediacao economizadas |
| **Secret Scanning** | Zero custo de performance | Vazamento de credenciais | Cada segredo barrado = potencialmente milhoes economizados |
| **Dependabot** | PRs para revisar (minutos) | Dependencias vulneraveis em producao | Cada atualizacao de seguranca = risco eliminado |
| **Push Protection** | Segundos de delay no push (quando detecta) | Segredos chegando ao repo | Prevencao total vs remediacao custosa |

---

## O que Aprendemos -- Tabela de Resumo

| Topico | Conceito-Chave | Analogia Mario | Aplicacao Pratica |
|---|---|---|---|
| **GHAS** | Suite completa de seguranca integrada ao GitHub | Escudo Estelar -- sistema de defesa completo para o castelo | Ativar todas as features disponíveis para seus repositorios |
| **Code Scanning** | Detecta vulnerabilidades no seu codigo | Visor de armadilhas que revela bombas escondidas | Configurar workflow CodeQL + habilitar Copilot Autofix |
| **Secret Scanning** | Detecta credenciais vazadas no repositorio | Alarme anti-roubo que dispara quando a chave e exposta | Ativar + habilitar Push Protection |
| **Push Protection** | Bloqueia push contendo segredos | Portao com detector na entrada do castelo | Ativar para prevencao (muito melhor que remediacao) |
| **Dependabot** | Monitora e atualiza dependencias vulneraveis | Toad inspetor que verifica se seus itens estao seguros | Configurar `dependabot.yml` com schedule e agrupamento |
| **Supply Chain** | Garantir que dependencias sao seguras e autenticas | Certificacao de que a Loja de Itens nao vende itens amaldicoados | Usar Dependency Graph, Dependency Review, SBOM |
| **Security Dashboard** | Visao centralizada do estado de seguranca | Sala de controle com monitores de todo o castelo | Revisar regularmente, priorizar alertas criticos |
| **Game Over Real** | Um segredo vazado pode custar milhoes | Uma chave na porta anula todas as defesas do castelo | Seguranca nao e opcional -- e a primeira coisa a configurar |

---

**Anterior:** Fase 5-8    |    **Proximo:** Fase 5-10

---

### POWER-UP DESBLOQUEADO!

Sofia agora entende GitHub Advanced Security como um sistema completo de defesa -- nao uma ferramenta isolada, mas um escudo em camadas que protege codigo, segredos, dependencias, e toda a cadeia de suprimentos. Ela sabe que seguranca nao e algo que voce adiciona no final -- e algo que voce ativa no INICIO e monitora SEMPRE.

Ela olhou para seu castelo no Mushroom Kingdom. Agora ele tinha o visor de armadilhas (Code Scanning), o alarme anti-roubo (Secret Scanning), o portao com detector (Push Protection), o Toad inspetor (Dependabot), a certificacao da Loja de Itens (Supply Chain Security), e a sala de controle (Security Overview). Nao era mais apenas um castelo bonito. Era uma fortaleza.

"Antes eu achava que seguranca era chato e complicado," Sofia admitiu. "Agora eu vejo que e como trancar a porta de casa. Voce nao faz porque e divertido -- faz porque a alternativa e muito pior."

O Toad de seguranca sorriu. "Exatamente, Sofia. E a melhor parte? Uma vez configurado, funciona sozinho. Voce pode voltar a jogar suas fases em paz, sabendo que o castelo esta protegido."

Ela guardou esse power-up no inventario e seguiu para a proxima fase do Mushroom Kingdom...

*Press START to continue...*

---

## References

- [GitHub Code Security](https://docs.github.com/en/code-security)
- [GitHub Code Scanning](https://docs.github.com/en/code-security/code-scanning)
- [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning)
- [GitHub Dependabot](https://docs.github.com/en/code-security/dependabot)

---

<div align="center">

⬅️ [Anterior: Fase 5-8: Three Horizons](5-8-three-horizons.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 5-10: SDD](5-10-sdd.md)

</div>
