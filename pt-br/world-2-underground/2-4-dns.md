---
title: "Fase 2-4 -- O Mapa do Mundo: DNS e Dominios"
description: "Como a internet encontra seu castelo: DNS, dominios, IPs, resolucao de nomes e como tudo se conecta no Mushroom Kingdom digital"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags:
  - dns
  - dominios
  - ip
  - name-resolution
  - networking
  - world-2
  - mario
---

# Fase 2-4 -- O Mapa do Mundo: DNS e Dominios

---

## Change Log

| Versao | Data       | Autor                                  | Descricao          |
|--------|------------|----------------------------------------|--------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial    |

---

## Sumario

- [Prologo: O Castelo Sem Endereco](#prologo-o-castelo-sem-endereco)
- [1. Enderecos IP: As Coordenadas Exatas](#1-enderecos-ip-as-coordenadas-exatas)
  - [1.1 O Que e um IP?](#11-o-que-e-um-ip)
  - [1.2 IPv4 vs IPv6](#12-ipv4-vs-ipv6)
  - [1.3 IPs Publicos vs Privados](#13-ips-publicos-vs-privados)
- [2. Dominios: O Nome Amigavel do Castelo](#2-dominios-o-nome-amigavel-do-castelo)
  - [2.1 Anatomia de um Dominio](#21-anatomia-de-um-dominio)
  - [2.2 TLDs: Os Reinos de Primeiro Nivel](#22-tlds-os-reinos-de-primeiro-nivel)
  - [2.3 Subdominios: As Alas do Castelo](#23-subdominios-as-alas-do-castelo)
- [3. DNS: O Sistema de Traducao do Mushroom Kingdom](#3-dns-o-sistema-de-traducao-do-mushroom-kingdom)
  - [3.1 O Que e DNS?](#31-o-que-e-dns)
  - [3.2 Como Funciona a Resolucao de Nomes](#32-como-funciona-a-resolucao-de-nomes)
  - [3.3 Os 4 Servidores DNS: A Cadeia de Toads](#33-os-4-servidores-dns-a-cadeia-de-toads)
  - [3.4 Diagrama Completo: Do Nome ao IP](#34-diagrama-completo-do-nome-ao-ip)
- [4. Registros DNS: As Instrucoes no Mapa](#4-registros-dns-as-instrucoes-no-mapa)
  - [4.1 Registro A: O Endereco Principal](#41-registro-a-o-endereco-principal)
  - [4.2 Registro CNAME: O Apelido](#42-registro-cname-o-apelido)
  - [4.3 Registro MX: O Correio](#43-registro-mx-o-correio)
  - [4.4 Registro TXT: As Notas](#44-registro-txt-as-notas)
  - [4.5 Tabela Completa de Registros DNS](#45-tabela-completa-de-registros-dns)
- [5. Registrando um Dominio: Comprando Seu Castelo](#5-registrando-um-dominio-comprando-seu-castelo)
  - [5.1 Registradores de Dominio](#51-registradores-de-dominio)
  - [5.2 O Processo de Registro](#52-o-processo-de-registro)
  - [5.3 WHOIS: A Ficha do Dono do Castelo](#53-whois-a-ficha-do-dono-do-castelo)
- [6. DNS na Pratica com Azure](#6-dns-na-pratica-com-azure)
  - [6.1 Azure DNS Zones](#61-azure-dns-zones)
  - [6.2 Configurando Dominio Custom no Azure](#62-configurando-dominio-custom-no-azure)
- [7. Cache DNS: O Toad com Boa Memoria](#7-cache-dns-o-toad-com-boa-memoria)
  - [7.1 TTL: Tempo de Validade da Informacao](#71-ttl-tempo-de-validade-da-informacao)
  - [7.2 Por Que Cache Importa](#72-por-que-cache-importa)
  - [7.3 Problemas com Cache: Informacao Desatualizada](#73-problemas-com-cache-informacao-desatualizada)
- [8. DNS e Seguranca](#8-dns-e-seguranca)
  - [8.1 DNS Spoofing: O Toad Impostor](#81-dns-spoofing-o-toad-impostor)
  - [8.2 DNSSEC: O Selo Anti-Falsificacao](#82-dnssec-o-selo-anti-falsificacao)
- [9. Ferramentas de Diagnostico DNS](#9-ferramentas-de-diagnostico-dns)
- [10. Tabela Final de Resumo](#10-tabela-final-de-resumo)
- [Referencias](#referencias)

---

## Prologo: O Castelo Sem Endereco

Sofia acabou de fazer deploy do seu TodoApp na nuvem Azure. A aplicacao estava rodando e acessivel pelo endereco `https://meu-todoapp.azurewebsites.net`. Funcionava perfeitamente. Mas Sofia queria algo melhor.

*"Ninguem vai lembrar esse endereco,"* reclamou ela. *"Eu quero que as pessoas acessem pelo **todoapp.com.br**. Simples, bonito, memoravel."*

Toad apareceu com um mapa enorme do Mushroom Kingdom. No mapa, cada castelo tinha dois tipos de informacao: um **nome amigavel** (Castelo da Princesa Peach) e umas **coordenadas numericas** (World 8, Quadrante 4, Bloco 7).

*"Sofia, no mundo digital e a mesma coisa,"* explicou Toad. *"Seu castelo (servidor) tem coordenadas numericas chamadas **endereco IP** -- por exemplo, `20.119.45.123`. Mas ninguem quer decorar numeros. Entao existe um sistema magico que traduz nomes bonitos como `todoapp.com.br` em coordenadas como `20.119.45.123`. Esse sistema se chama **DNS** -- o Mapa do Mundo."*

---

## 1. Enderecos IP: As Coordenadas Exatas

### 1.1 O Que e um IP?

Um **endereco IP** (Internet Protocol) e um numero unico que identifica cada computador conectado a internet. E como as coordenadas GPS de um castelo -- preciso, unico, numerico.

```
Endereco IP do servidor da Sofia: 20.119.45.123
Endereco IP do Google:            142.250.79.14
Endereco IP do GitHub:            140.82.121.4
```

> **ANALOGIA MARIO:** O endereco IP e a **coordenada exata de um castelo** no mapa do Mushroom Kingdom. "World 8, Quadrante 4, Setor 7, Bloco 123." E preciso e unico -- nenhum outro castelo tem a mesma coordenada. Mas ninguem quer navegar por coordenadas. Voce prefere dizer "Castelo da Princesa Peach" em vez de "W8-Q4-S7-B123".

### 1.2 IPv4 vs IPv6

| Aspecto | IPv4 | IPv6 |
|---------|------|------|
| **Formato** | 4 numeros (0-255) separados por ponto | 8 grupos hexadecimais separados por dois-pontos |
| **Exemplo** | `192.168.1.1` | `2001:0db8:85a3:0000:0000:8a2e:0370:7334` |
| **Total de enderecos** | ~4.3 bilhoes | ~340 undecilhoes (340 seguido de 36 zeros) |
| **Analogia Mario** | Mapa com 4 bilhoes de castelos | Mapa com mais castelos do que estrelas no universo |
| **Status** | Esgotando | O futuro |

### 1.3 IPs Publicos vs Privados

```
IP Publico: Visivel pela internet toda
  Exemplo: 20.119.45.123
  Analogia: Endereco do castelo no mapa oficial do reino

IP Privado: So visivel dentro da rede local
  Exemplo: 192.168.1.10
  Analogia: Numero do quarto DENTRO do castelo

Faixas de IPs Privados:
  10.0.0.0 - 10.255.255.255
  172.16.0.0 - 172.31.255.255
  192.168.0.0 - 192.168.255.255
```

> **ANALOGIA MARIO:** O IP publico e o endereco do **castelo no mapa do mundo** -- qualquer pessoa pode encontrar. O IP privado e o **numero do quarto dentro do castelo** -- so faz sentido para quem ja esta dentro. De fora, voce ve "Castelo da Princesa" (IP publico). De dentro, voce ve "Quarto 42 do 3o andar" (IP privado).

---

## 2. Dominios: O Nome Amigavel do Castelo

### 2.1 Anatomia de um Dominio

```
https://api.todoapp.com.br/tarefas
|_____|  |_| |______| |__| |_|  |______|
  |      |      |      |   |      |
protocolo |   dominio  TLD  pais  caminho
      subdominio  (2o nivel)
```

Componentes:
- **Protocolo**: `https://` -- como a comunicacao acontece
- **Subdominio**: `api` -- uma ala especifica do castelo
- **Dominio (2o nivel)**: `todoapp` -- o nome do castelo
- **TLD (Top-Level Domain)**: `.com` -- o tipo/reino
- **ccTLD (Country Code)**: `.br` -- o pais
- **Caminho**: `/tarefas` -- a sala dentro do castelo

### 2.2 TLDs: Os Reinos de Primeiro Nivel

| TLD | Significado | Analogia Mario | Uso |
|-----|-----------|----------------|-----|
| `.com` | Comercial | Reino Comercial do Mushroom Kingdom | Sites comerciais |
| `.org` | Organizacao | Guilda de Aventureiros | ONGs, projetos open source |
| `.net` | Network | Rede de Warp Pipes | Infraestrutura, tecnologia |
| `.dev` | Developer | Oficina dos Construtores | Sites de desenvolvedores |
| `.io` | Indian Ocean (virou tech) | Laboratorio Experimental | Startups, apps |
| `.br` | Brasil | Mushroom Kingdom do Brasil | Sites brasileiros |
| `.gov` | Government | Castelo Real Oficial | Sites governamentais |
| `.edu` | Education | Escola de Aventureiros | Universidades |

### 2.3 Subdominios: As Alas do Castelo

Subdominios permitem organizar diferentes servicos sob o mesmo dominio:

```
todoapp.com.br       = O castelo principal (site)
api.todoapp.com.br   = A ala da API (backend)
app.todoapp.com.br   = A ala da aplicacao web
docs.todoapp.com.br  = A biblioteca (documentacao)
blog.todoapp.com.br  = O salao de anuncios
mail.todoapp.com.br  = O correio do castelo
```

> **ANALOGIA MARIO:** Subdominios sao como as **diferentes alas de um castelo**. O castelo `todoapp.com.br` e enorme. A ala `api` e onde os Toads Mensageiros trabalham. A ala `app` e onde os visitantes interagem. A ala `docs` e a biblioteca. Todos fazem parte do mesmo castelo, mas cada ala tem uma funcao diferente.

---

## 3. DNS: O Sistema de Traducao do Mushroom Kingdom

### 3.1 O Que e DNS?

**DNS** (Domain Name System) e o sistema que traduz nomes de dominio (que humanos entendem) em enderecos IP (que computadores entendem). E a **agenda telefonica da internet**.

```
Voce digita:    todoapp.com.br
DNS traduz para: 20.119.45.123
Navegador acessa: 20.119.45.123
Voce ve:        O TodoApp carregando na tela
```

> **ANALOGIA MARIO:** DNS e a **legenda do mapa** do Mushroom Kingdom. No mapa, cada castelo tem um nome bonito ("Castelo da Princesa Peach") e coordenadas numericas (W8-Q4-S7-B123). O DNS e o sistema que traduz um para o outro. Voce diz "quero ir ao Castelo da Princesa Peach" e o DNS responde "as coordenadas sao W8-Q4-S7-B123. Siga por ali."

### 3.2 Como Funciona a Resolucao de Nomes

Quando voce digita `todoapp.com.br` no navegador, uma cadeia de consultas acontece:

```
1. Seu navegador: "Alguem sabe o IP de todoapp.com.br?"

2. Cache local: "Deixa eu ver... ja acessei antes? Sim? Toma: 20.119.45.123"
   Se nao souber:

3. Servidor DNS do seu provedor (Recursive Resolver):
   "Hmm, nao sei. Deixa eu perguntar para quem sabe."

4. Root DNS Server (Servidor Raiz):
   "Nao sei o IP, mas sei que .br e gerenciado pelo servidor X."

5. TLD Server (.br):
   "Nao sei o IP exato, mas todoapp.com.br e gerenciado pelo servidor Y."

6. Authoritative Server (Servidor Autoritativo):
   "todoapp.com.br? Claro! O IP e 20.119.45.123!"

7. A resposta volta pelo caminho: Autoritativo -> TLD -> Recursive -> Seu navegador
8. Navegador acessa 20.119.45.123 e o TodoApp aparece!
```

### 3.3 Os 4 Servidores DNS: A Cadeia de Toads

| Servidor | Funcao | Analogia Mario | Quantidade |
|----------|--------|----------------|------------|
| **DNS Recursive Resolver** | Primeiro ponto de contato. Pergunta para os outros | Toad da vila que conhece outros Toads | Milhares (um por provedor) |
| **Root Name Server** | Sabe quem cuida de cada TLD (.com, .br, .org) | Toad Anciao que conhece todos os reinos | 13 no mundo todo |
| **TLD Name Server** | Sabe quem cuida de cada dominio dentro do TLD | Toad Administrador do reino .com.br | Centenas |
| **Authoritative Name Server** | Sabe o IP real do dominio | Toad Guardiao que sabe o endereco exato | Um por dominio |

### 3.4 Diagrama Completo: Do Nome ao IP

```
Voce: "todoapp.com.br"
  |
  v
[Cache Local] -- "Ja sei? Sim -> retorna IP"
  |                              Nao ->
  v
[Recursive Resolver] -- "Sei? Nao. Vou perguntar."
  |
  v
[Root Server] -- "Nao sei o IP, mas .br esta no servidor X"
  |
  v
[TLD Server .br] -- "Nao sei o IP, mas todoapp.com.br esta no servidor Y"
  |
  v
[Authoritative Server] -- "todoapp.com.br = 20.119.45.123!"
  |
  v
[Recursive Resolver] -- "Achei! Vou guardar no cache. Toma, navegador."
  |
  v
[Navegador] -- Acessa 20.119.45.123 -> TodoApp carrega!

Tempo total: ~20-120 milissegundos (sem cache)
Tempo com cache: ~1-5 milissegundos
```

---

## 4. Registros DNS: As Instrucoes no Mapa

### 4.1 Registro A: O Endereco Principal

O registro **A** (Address) e o mais basico: mapeia um nome para um endereco IPv4.

```
Tipo: A
Nome: todoapp.com.br
Valor: 20.119.45.123
TTL: 3600 (1 hora)
```

> **ANALOGIA MARIO:** "O Castelo todoapp esta nas coordenadas 20.119.45.123."

### 4.2 Registro CNAME: O Apelido

O registro **CNAME** (Canonical Name) cria um apelido para outro dominio.

```
Tipo: CNAME
Nome: www.todoapp.com.br
Valor: todoapp.com.br
TTL: 3600

Tipo: CNAME
Nome: app.todoapp.com.br
Valor: meu-todoapp.azurewebsites.net
TTL: 3600
```

> **ANALOGIA MARIO:** "O `www.todoapp.com.br`? Ah, e so outro nome para `todoapp.com.br`. E o mesmo castelo!" Como chamar o Mario de "Super Mario" -- mesmo personagem, nomes diferentes.

### 4.3 Registro MX: O Correio

O registro **MX** (Mail Exchange) define para onde vao os emails do dominio.

```
Tipo: MX
Nome: todoapp.com.br
Valor: mail.todoapp.com.br
Prioridade: 10
```

> **ANALOGIA MARIO:** "Cartas para @todoapp.com.br devem ser entregues no Correio do Castelo (mail server)."

### 4.4 Registro TXT: As Notas

O registro **TXT** armazena texto arbitrario -- usado para verificacao de propriedade, configuracoes de email, etc.

```
Tipo: TXT
Nome: todoapp.com.br
Valor: "v=spf1 include:_spf.google.com ~all"
```

> **ANALOGIA MARIO:** "Uma nota colada no mapa: 'Emails deste castelo so podem ser enviados pelo Google.'"

### 4.5 Tabela Completa de Registros DNS

| Registro | O que Faz | Analogia Mario | Exemplo |
|----------|---------|----------------|---------|
| **A** | Nome -> IPv4 | "Castelo X esta em coordenada Y" | `todoapp.com.br -> 20.119.45.123` |
| **AAAA** | Nome -> IPv6 | Coordenada no mapa expandido | `todoapp.com.br -> 2001:db8::1` |
| **CNAME** | Nome -> Outro nome | "Esse castelo tambem e chamado de..." | `www -> todoapp.com.br` |
| **MX** | Email -> Servidor de email | "Cartas vao para o Correio" | `@ -> mail.todoapp.com.br` |
| **TXT** | Texto informativo | Nota colada no mapa | SPF, DKIM, verificacao |
| **NS** | Quem gerencia este dominio | "Toad Y cuida deste castelo" | `@ -> ns1.azure-dns.com` |
| **SOA** | Autoridade sobre a zona | "Este Toad e o chefe da regiao" | Informacoes administrativas |
| **SRV** | Servico especifico | "O servico X esta na porta Y" | `_sip._tcp -> sipserver` |

---

## 5. Registrando um Dominio: Comprando Seu Castelo

### 5.1 Registradores de Dominio

Para ter um dominio, voce precisa **registra-lo** com um **registrador** (registrar). E como comprar o terreno do seu castelo.

| Registrador | Especialidade | Preco Medio (.com) |
|-------------|-------------|---------------------|
| **Registro.br** | Dominios .br | R$ 40/ano |
| **Namecheap** | Internacional, bom preco | ~US$ 10/ano |
| **GoDaddy** | Popular, muitas extensoes | ~US$ 12/ano |
| **Google Domains** (Squarespace) | Integrado ao Google | ~US$ 12/ano |
| **Cloudflare Registrar** | Preco de custo, sem markup | ~US$ 9/ano |

### 5.2 O Processo de Registro

```
1. Escolha o nome: todoapp.com.br
2. Verifique disponibilidade (alguem ja tem?)
3. Compre o registro (geralmente por 1 ano)
4. Configure os Name Servers (quem gerencia seus registros DNS)
5. Adicione registros DNS (A, CNAME, MX, etc.)
6. Espere a propagacao (ate 48 horas, geralmente minutos)
7. Pronto! Seu castelo tem um nome!
```

### 5.3 WHOIS: A Ficha do Dono do Castelo

O **WHOIS** e um registro publico que mostra informacoes sobre o dono de um dominio:

```bash
$ whois todoapp.com.br

Domain Name: todoapp.com.br
Registrant: Sofia Developer Ltda
Created: 2026-03-18
Expires: 2027-03-18
Name Servers: ns1.azure-dns.com, ns2.azure-dns.net
```

---

## 6. DNS na Pratica com Azure

### 6.1 Azure DNS Zones

O Azure tem seu proprio servico de DNS chamado **Azure DNS**:

```bash
# Criar uma zona DNS no Azure
az network dns zone create \
  --resource-group meu-grupo \
  --name todoapp.com.br

# Adicionar um registro A
az network dns record-set a add-record \
  --resource-group meu-grupo \
  --zone-name todoapp.com.br \
  --record-set-name "@" \
  --ipv4-address 20.119.45.123

# Adicionar um CNAME para www
az network dns record-set cname set-record \
  --resource-group meu-grupo \
  --zone-name todoapp.com.br \
  --record-set-name "www" \
  --cname todoapp.com.br

# Adicionar um CNAME para a API
az network dns record-set cname set-record \
  --resource-group meu-grupo \
  --zone-name todoapp.com.br \
  --record-set-name "api" \
  --cname meu-todoapp-api.azurewebsites.net
```

### 6.2 Configurando Dominio Custom no Azure

```
Passo a passo:
1. Registre o dominio (ex: Registro.br)
2. Crie uma zona DNS no Azure
3. No registrador, aponte os Name Servers para o Azure:
   - ns1-01.azure-dns.com
   - ns2-01.azure-dns.net
   - ns3-01.azure-dns.org
   - ns4-01.azure-dns.info
4. No Azure App Service, va em "Custom domains"
5. Adicione todoapp.com.br
6. O Azure verifica que voce e o dono (via registro TXT)
7. Pronto! todoapp.com.br agora aponta para seu app!
```

---

## 7. Cache DNS: O Toad com Boa Memoria

### 7.1 TTL: Tempo de Validade da Informacao

**TTL** (Time To Live) define por quanto tempo um registro DNS pode ficar no cache antes de ser consultado novamente.

```
Registro A: todoapp.com.br -> 20.119.45.123
TTL: 3600 segundos (1 hora)

Significado: "Por 1 hora, confie nessa informacao.
Depois, pergunte de novo."
```

| TTL | Duracao | Quando Usar | Analogia Mario |
|-----|---------|-------------|----------------|
| 60 | 1 minuto | Migracoes, mudancas frequentes | Toad precisa confirmar a cada minuto |
| 300 | 5 minutos | Balanceamento de carga | Toad confere a cada 5 minutos |
| 3600 | 1 hora | Uso normal | Toad memoriza por 1 hora |
| 86400 | 1 dia | Registros estaveis | Toad memoriza o dia inteiro |

### 7.2 Por Que Cache Importa

Sem cache, TODA requisicao teria que percorrer a cadeia completa (Root -> TLD -> Authoritative). Com bilhoes de requisicoes por dia, os servidores raiz entrariam em colapso.

### 7.3 Problemas com Cache: Informacao Desatualizada

Quando voce muda o IP do seu servidor, o mundo nao sabe imediatamente. Os caches ainda apontam para o IP antigo ate o TTL expirar.

```
Antes: todoapp.com.br -> 20.119.45.123 (IP antigo)
Voce muda: todoapp.com.br -> 40.87.12.56 (IP novo)

Problema: Alguns usuarios ainda veem o IP antigo
(porque o cache deles ainda nao expirou)

Solucao: Reduzir o TTL ANTES da migracao
  1. Mude TTL para 60 segundos (24h antes da migracao)
  2. Espere 24h (caches antigos expiram)
  3. Mude o IP
  4. Em 60 segundos, todos veem o novo IP
  5. Volte o TTL ao normal (3600)
```

---

## 8. DNS e Seguranca

### 8.1 DNS Spoofing: O Toad Impostor

**DNS Spoofing** (ou DNS Poisoning) e quando um atacante faz o DNS retornar um IP falso, redirecionando usuarios para um site malicioso.

```
Normal:
  todoapp.com.br -> 20.119.45.123 (seu servidor real)

Com DNS Spoofing:
  todoapp.com.br -> 666.666.666.1 (servidor do atacante!)
  O usuario acha que esta no TodoApp, mas esta num site falso
  que rouba senhas!
```

> **ANALOGIA MARIO:** DNS Spoofing e um **Koopa disfarado de Toad** dando direcoes erradas. Voce pergunta "Como chego ao Castelo da Princesa?" e o Koopa responde com as coordenadas do Castelo do Bowser. Voce vai la achando que esta seguro... e cai numa armadilha.

### 8.2 DNSSEC: O Selo Anti-Falsificacao

**DNSSEC** (DNS Security Extensions) adiciona assinaturas criptograficas aos registros DNS, garantindo que a resposta e autentica.

> **ANALOGIA MARIO:** DNSSEC e como se cada Toad Mensageiro carregasse um **selo real verificavel**. Se um Koopa se disfarcar de Toad, o selo nao bate e o impostor e desmascarado. Cada resposta DNS vem assinada, e so o servidor legitimo tem a chave para assinar.

---

## 9. Ferramentas de Diagnostico DNS

```bash
# nslookup -- Consulta basica de DNS
nslookup todoapp.com.br
# Resposta: 20.119.45.123

# dig -- Consulta detalhada (mais informacoes)
dig todoapp.com.br
# Mostra registros, TTL, servidor autoritativo, tempo de resposta

# dig para registro especifico
dig todoapp.com.br MX    # Consulta registros de email
dig todoapp.com.br TXT   # Consulta registros de texto
dig todoapp.com.br NS    # Consulta name servers

# ping -- Verifica se o IP responde
ping todoapp.com.br
# Traduz para IP e testa conectividade

# traceroute -- Mostra o caminho ate o servidor
traceroute todoapp.com.br
# Lista cada "salto" (router) no caminho

# host -- Consulta simples
host todoapp.com.br
# todoapp.com.br has address 20.119.45.123
```

---

## 10. Tabela Final de Resumo

| Conceito | Explicacao Tecnica | Analogia Mario |
|----------|-------------------|----------------|
| **Endereco IP** | Numero unico que identifica um computador | Coordenadas exatas do castelo no mapa |
| **Dominio** | Nome amigavel para um IP | Nome do castelo ("Castelo da Princesa") |
| **DNS** | Sistema que traduz nomes em IPs | Legenda do mapa que traduz nomes em coordenadas |
| **TLD** | Extensao do dominio (.com, .br) | O reino ao qual o castelo pertence |
| **Subdominio** | Subdivisao de um dominio | Alas diferentes do castelo (api, www, mail) |
| **Registro A** | Nome -> IP | "O Castelo esta nestas coordenadas" |
| **Registro CNAME** | Nome -> Outro nome (apelido) | "Esse castelo tambem se chama..." |
| **TTL** | Tempo de validade do cache | Quanto tempo o Toad confia na informacao |
| **Root Server** | Servidor raiz do DNS | Toad Anciao que conhece todos os reinos |
| **Authoritative Server** | Servidor que tem a resposta definitiva | Toad Guardiao que sabe o endereco exato |
| **DNS Spoofing** | Ataque que falsifica respostas DNS | Koopa disfarado de Toad dando direcoes erradas |
| **DNSSEC** | Assinaturas criptograficas no DNS | Selo real verificavel em cada resposta |
| **Propagacao** | Tempo para mudancas DNS se espalharem | Tempo para todos os Toads saberem do novo endereco |

---

## Referencias

1. Cloudflare -- What is DNS: https://www.cloudflare.com/learning/dns/what-is-dns/
2. Microsoft Learn -- Azure DNS: https://learn.microsoft.com/azure/dns/
3. IANA -- Root Servers: https://www.iana.org/domains/root/servers
4. Registro.br: https://registro.br/
5. MDN Web Docs -- Understanding domain names: https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name
6. DNSSEC: https://www.icann.org/resources/pages/dnssec-what-is-it-why-important-2019-03-05-en

---

*"Sem DNS, a internet seria um livro de coordenadas numericas impossivel de memorizar. Com DNS, cada castelo tem um nome bonito que qualquer jogador pode lembrar. E como a magia que transforma numeros sem sentido em nomes que contam historias."*

*Proximo Warp Pipe: Fase 2-5 -- As Regras do Torneio: Metodologias Ageis*
