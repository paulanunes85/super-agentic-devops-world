---
title: "Level 2-4 -- The World Map: DNS and Domains"
description: "How the internet finds your castle: DNS, domains, IPs, name resolution, and how everything connects in the digital Mushroom Kingdom"
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

# Level 2-4 -- The World Map: DNS and Domains

---

## Change Log

| Version | Date       | Author                                  | Description          |
|---------|------------|----------------------------------------|----------------------|
| 1.0.0   | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Initial creation    |

---

## Table of Contents

- [Prologue: The Castle Without an Address](#prologue-the-castle-without-an-address)
- [1. IP Addresses: The Exact Coordinates](#1-ip-addresses-the-exact-coordinates)
  - [1.1 What Is an IP?](#11-what-is-an-ip)
  - [1.2 IPv4 vs IPv6](#12-ipv4-vs-ipv6)
  - [1.3 Public vs Private IPs](#13-public-vs-private-ips)
- [2. Domains: The Castle's Friendly Name](#2-domains-the-castles-friendly-name)
  - [2.1 Anatomy of a Domain](#21-anatomy-of-a-domain)
  - [2.2 TLDs: The Top-Level Kingdoms](#22-tlds-the-top-level-kingdoms)
  - [2.3 Subdomains: The Castle Wings](#23-subdomains-the-castle-wings)
- [3. DNS: The Mushroom Kingdom Translation System](#3-dns-the-mushroom-kingdom-translation-system)
  - [3.1 What Is DNS?](#31-what-is-dns)
  - [3.2 How Name Resolution Works](#32-how-name-resolution-works)
  - [3.3 The 4 DNS Servers: The Chain of Toads](#33-the-4-dns-servers-the-chain-of-toads)
  - [3.4 Complete Diagram: From Name to IP](#34-complete-diagram-from-name-to-ip)
- [4. DNS Records: The Instructions on the Map](#4-dns-records-the-instructions-on-the-map)
  - [4.1 A Record: The Main Address](#41-a-record-the-main-address)
  - [4.2 CNAME Record: The Alias](#42-cname-record-the-alias)
  - [4.3 MX Record: The Post Office](#43-mx-record-the-post-office)
  - [4.4 TXT Record: The Notes](#44-txt-record-the-notes)
  - [4.5 Complete DNS Records Table](#45-complete-dns-records-table)
- [5. Registering a Domain: Buying Your Castle](#5-registering-a-domain-buying-your-castle)
  - [5.1 Domain Registrars](#51-domain-registrars)
  - [5.2 The Registration Process](#52-the-registration-process)
  - [5.3 WHOIS: The Castle Owner's Record](#53-whois-the-castle-owners-record)
- [6. DNS in Practice with Azure](#6-dns-in-practice-with-azure)
  - [6.1 Azure DNS Zones](#61-azure-dns-zones)
  - [6.2 Configuring a Custom Domain on Azure](#62-configuring-a-custom-domain-on-azure)
- [7. DNS Cache: The Toad with Good Memory](#7-dns-cache-the-toad-with-good-memory)
  - [7.1 TTL: Information Expiration Time](#71-ttl-information-expiration-time)
  - [7.2 Why Cache Matters](#72-why-cache-matters)
  - [7.3 Cache Problems: Outdated Information](#73-cache-problems-outdated-information)
- [8. DNS and Security](#8-dns-and-security)
  - [8.1 DNS Spoofing: The Impostor Toad](#81-dns-spoofing-the-impostor-toad)
  - [8.2 DNSSEC: The Anti-Forgery Seal](#82-dnssec-the-anti-forgery-seal)
- [9. DNS Diagnostic Tools](#9-dns-diagnostic-tools)
- [10. Final Summary Table](#10-final-summary-table)
- [References](#references)

---

## Prologue: The Castle Without an Address

Sofia had just deployed her TodoApp to the Azure cloud. The application was running and accessible at the address `https://meu-todoapp.azurewebsites.net`. It worked perfectly. But Sofia wanted something better.

*"No one is going to remember this address,"* she complained. *"I want people to access it at **todoapp.com.br**. Simple, clean, memorable."*

Toad appeared with a huge map of the Mushroom Kingdom. On the map, each castle had two types of information: a **friendly name** (Princess Peach's Castle) and some **numeric coordinates** (World 8, Quadrant 4, Block 7).

*"Sofia, in the digital world it's the same thing,"* Toad explained. *"Your castle (server) has numeric coordinates called an **IP address** -- for example, `20.119.45.123`. But no one wants to memorize numbers. So there's a magical system that translates pretty names like `todoapp.com.br` into coordinates like `20.119.45.123`. This system is called **DNS** -- the World Map."*

---

## 1. IP Addresses: The Exact Coordinates

### 1.1 What Is an IP?

An **IP address** (Internet Protocol) is a unique number that identifies each computer connected to the internet. It's like the GPS coordinates of a castle -- precise, unique, numeric.

```
Sofia's server IP address: 20.119.45.123
Google's IP address:       142.250.79.14
GitHub's IP address:       140.82.121.4
```

> **MARIO ANALOGY:** The IP address is the **exact coordinate of a castle** on the Mushroom Kingdom map. "World 8, Quadrant 4, Sector 7, Block 123." It's precise and unique -- no other castle has the same coordinate. But no one wants to navigate by coordinates. You'd rather say "Princess Peach's Castle" instead of "W8-Q4-S7-B123".

### 1.2 IPv4 vs IPv6

| Aspect | IPv4 | IPv6 |
|--------|------|------|
| **Format** | 4 numbers (0-255) separated by dots | 8 hexadecimal groups separated by colons |
| **Example** | `192.168.1.1` | `2001:0db8:85a3:0000:0000:8a2e:0370:7334` |
| **Total addresses** | ~4.3 billion | ~340 undecillion (340 followed by 36 zeros) |
| **Mario Analogy** | Map with 4 billion castles | Map with more castles than stars in the universe |
| **Status** | Running out | The future |

### 1.3 Public vs Private IPs

```
Public IP: Visible to the entire internet
  Example: 20.119.45.123
  Analogy: Castle address on the kingdom's official map

Private IP: Only visible within the local network
  Example: 192.168.1.10
  Analogy: Room number INSIDE the castle

Private IP Ranges:
  10.0.0.0 - 10.255.255.255
  172.16.0.0 - 172.31.255.255
  192.168.0.0 - 192.168.255.255
```

> **MARIO ANALOGY:** The public IP is the **castle's address on the world map** -- anyone can find it. The private IP is the **room number inside the castle** -- it only makes sense for those already inside. From outside, you see "Princess's Castle" (public IP). From inside, you see "Room 42, 3rd floor" (private IP).

---

## 2. Domains: The Castle's Friendly Name

### 2.1 Anatomy of a Domain

```
https://api.todoapp.com.br/tarefas
|_____|  |_| |______| |__| |_|  |______|
  |      |      |      |   |      |
protocol |   domain   TLD country  path
      subdomain (2nd level)
```

Components:
- **Protocol**: `https://` -- how the communication happens
- **Subdomain**: `api` -- a specific wing of the castle
- **Domain (2nd level)**: `todoapp` -- the castle's name
- **TLD (Top-Level Domain)**: `.com` -- the type/kingdom
- **ccTLD (Country Code)**: `.br` -- the country
- **Path**: `/tarefas` -- the room inside the castle

### 2.2 TLDs: The Top-Level Kingdoms

| TLD | Meaning | Mario Analogy | Usage |
|-----|---------|---------------|-------|
| `.com` | Commercial | Commercial Kingdom of the Mushroom Kingdom | Commercial sites |
| `.org` | Organization | Adventurers' Guild | NGOs, open source projects |
| `.net` | Network | Warp Pipe Network | Infrastructure, technology |
| `.dev` | Developer | Builder's Workshop | Developer sites |
| `.io` | Indian Ocean (became tech) | Experimental Laboratory | Startups, apps |
| `.br` | Brazil | Mushroom Kingdom of Brazil | Brazilian sites |
| `.gov` | Government | Official Royal Castle | Government sites |
| `.edu` | Education | Adventurer Academy | Universities |

### 2.3 Subdomains: The Castle Wings

Subdomains allow you to organize different services under the same domain:

```
todoapp.com.br       = The main castle (website)
api.todoapp.com.br   = The API wing (backend)
app.todoapp.com.br   = The web application wing
docs.todoapp.com.br  = The library (documentation)
blog.todoapp.com.br  = The announcement hall
mail.todoapp.com.br  = The castle's post office
```

> **MARIO ANALOGY:** Subdomains are like the **different wings of a castle**. The castle `todoapp.com.br` is huge. The `api` wing is where the Messenger Toads work. The `app` wing is where visitors interact. The `docs` wing is the library. They all belong to the same castle, but each wing has a different function.

---

## 3. DNS: The Mushroom Kingdom Translation System

### 3.1 What Is DNS?

**DNS** (Domain Name System) is the system that translates domain names (that humans understand) into IP addresses (that computers understand). It's the **internet's phone book**.

```
You type:        todoapp.com.br
DNS translates:  20.119.45.123
Browser accesses: 20.119.45.123
You see:         The TodoApp loading on screen
```

> **MARIO ANALOGY:** DNS is the **map legend** of the Mushroom Kingdom. On the map, each castle has a pretty name ("Princess Peach's Castle") and numeric coordinates (W8-Q4-S7-B123). DNS is the system that translates one into the other. You say "I want to go to Princess Peach's Castle" and DNS responds "the coordinates are W8-Q4-S7-B123. Head that way."

### 3.2 How Name Resolution Works

When you type `todoapp.com.br` in the browser, a chain of queries happens:

```
1. Your browser: "Does anyone know the IP for todoapp.com.br?"

2. Local cache: "Let me check... have I accessed it before? Yes? Here: 20.119.45.123"
   If it doesn't know:

3. Your provider's DNS server (Recursive Resolver):
   "Hmm, I don't know. Let me ask someone who does."

4. Root DNS Server:
   "I don't know the IP, but I know that .br is managed by server X."

5. TLD Server (.br):
   "I don't know the exact IP, but todoapp.com.br is managed by server Y."

6. Authoritative Server:
   "todoapp.com.br? Of course! The IP is 20.119.45.123!"

7. The response travels back: Authoritative -> TLD -> Recursive -> Your browser
8. Browser accesses 20.119.45.123 and the TodoApp appears!
```

### 3.3 The 4 DNS Servers: The Chain of Toads

| Server | Function | Mario Analogy | Quantity |
|--------|---------|---------------|----------|
| **DNS Recursive Resolver** | First point of contact. Asks the others | Village Toad who knows other Toads | Thousands (one per provider) |
| **Root Name Server** | Knows who manages each TLD (.com, .br, .org) | Elder Toad who knows all the kingdoms | 13 worldwide |
| **TLD Name Server** | Knows who manages each domain within the TLD | Administrator Toad for the .com.br kingdom | Hundreds |
| **Authoritative Name Server** | Knows the actual IP of the domain | Guardian Toad who knows the exact address | One per domain |

### 3.4 Complete Diagram: From Name to IP

```
You: "todoapp.com.br"
  |
  v
[Local Cache] -- "Do I already know? Yes -> return IP"
  |                              No ->
  v
[Recursive Resolver] -- "Do I know? No. I'll ask around."
  |
  v
[Root Server] -- "I don't know the IP, but .br is at server X"
  |
  v
[TLD Server .br] -- "I don't know the IP, but todoapp.com.br is at server Y"
  |
  v
[Authoritative Server] -- "todoapp.com.br = 20.119.45.123!"
  |
  v
[Recursive Resolver] -- "Found it! I'll save it in cache. Here you go, browser."
  |
  v
[Browser] -- Accesses 20.119.45.123 -> TodoApp loads!

Total time: ~20-120 milliseconds (without cache)
Time with cache: ~1-5 milliseconds
```

---

## 4. DNS Records: The Instructions on the Map

### 4.1 A Record: The Main Address

The **A** (Address) record is the most basic: it maps a name to an IPv4 address.

```
Type: A
Name: todoapp.com.br
Value: 20.119.45.123
TTL: 3600 (1 hour)
```

> **MARIO ANALOGY:** "Castle todoapp is at coordinates 20.119.45.123."

### 4.2 CNAME Record: The Alias

The **CNAME** (Canonical Name) record creates an alias for another domain.

```
Type: CNAME
Name: www.todoapp.com.br
Value: todoapp.com.br
TTL: 3600

Type: CNAME
Name: app.todoapp.com.br
Value: meu-todoapp.azurewebsites.net
TTL: 3600
```

> **MARIO ANALOGY:** "`www.todoapp.com.br`? Oh, that's just another name for `todoapp.com.br`. It's the same castle!" Like calling Mario "Super Mario" -- same character, different names.

### 4.3 MX Record: The Post Office

The **MX** (Mail Exchange) record defines where the domain's emails go.

```
Type: MX
Name: todoapp.com.br
Value: mail.todoapp.com.br
Priority: 10
```

> **MARIO ANALOGY:** "Letters for @todoapp.com.br should be delivered to the Castle Post Office (mail server)."

### 4.4 TXT Record: The Notes

The **TXT** record stores arbitrary text -- used for ownership verification, email configurations, etc.

```
Type: TXT
Name: todoapp.com.br
Value: "v=spf1 include:_spf.google.com ~all"
```

> **MARIO ANALOGY:** "A note stuck on the map: 'Emails from this castle can only be sent through Google.'"

### 4.5 Complete DNS Records Table

| Record | What It Does | Mario Analogy | Example |
|--------|-------------|---------------|---------|
| **A** | Name -> IPv4 | "Castle X is at coordinate Y" | `todoapp.com.br -> 20.119.45.123` |
| **AAAA** | Name -> IPv6 | Coordinate on the expanded map | `todoapp.com.br -> 2001:db8::1` |
| **CNAME** | Name -> Another name | "This castle is also known as..." | `www -> todoapp.com.br` |
| **MX** | Email -> Mail server | "Letters go to the Post Office" | `@ -> mail.todoapp.com.br` |
| **TXT** | Informational text | Note stuck on the map | SPF, DKIM, verification |
| **NS** | Who manages this domain | "Toad Y takes care of this castle" | `@ -> ns1.azure-dns.com` |
| **SOA** | Authority over the zone | "This Toad is the boss of the region" | Administrative information |
| **SRV** | Specific service | "Service X is on port Y" | `_sip._tcp -> sipserver` |

---

## 5. Registering a Domain: Buying Your Castle

### 5.1 Domain Registrars

To have a domain, you need to **register** it with a **registrar**. It's like buying the land for your castle.

| Registrar | Specialty | Average Price (.com) |
|-----------|---------|---------------------|
| **Registro.br** | .br domains | R$ 40/year |
| **Namecheap** | International, good price | ~US$ 10/year |
| **GoDaddy** | Popular, many extensions | ~US$ 12/year |
| **Google Domains** (Squarespace) | Integrated with Google | ~US$ 12/year |
| **Cloudflare Registrar** | At-cost pricing, no markup | ~US$ 9/year |

### 5.2 The Registration Process

```
1. Choose the name: todoapp.com.br
2. Check availability (does someone already own it?)
3. Purchase the registration (usually for 1 year)
4. Configure the Name Servers (who manages your DNS records)
5. Add DNS records (A, CNAME, MX, etc.)
6. Wait for propagation (up to 48 hours, usually minutes)
7. Done! Your castle has a name!
```

### 5.3 WHOIS: The Castle Owner's Record

**WHOIS** is a public registry that shows information about the owner of a domain:

```bash
$ whois todoapp.com.br

Domain Name: todoapp.com.br
Registrant: Sofia Developer Ltda
Created: 2026-03-18
Expires: 2027-03-18
Name Servers: ns1.azure-dns.com, ns2.azure-dns.net
```

---

## 6. DNS in Practice with Azure

### 6.1 Azure DNS Zones

Azure has its own DNS service called **Azure DNS**:

```bash
# Create a DNS zone in Azure
az network dns zone create \
  --resource-group meu-grupo \
  --name todoapp.com.br

# Add an A record
az network dns record-set a add-record \
  --resource-group meu-grupo \
  --zone-name todoapp.com.br \
  --record-set-name "@" \
  --ipv4-address 20.119.45.123

# Add a CNAME for www
az network dns record-set cname set-record \
  --resource-group meu-grupo \
  --zone-name todoapp.com.br \
  --record-set-name "www" \
  --cname todoapp.com.br

# Add a CNAME for the API
az network dns record-set cname set-record \
  --resource-group meu-grupo \
  --zone-name todoapp.com.br \
  --record-set-name "api" \
  --cname meu-todoapp-api.azurewebsites.net
```

### 6.2 Configuring a Custom Domain on Azure

```
Step by step:
1. Register the domain (e.g., Registro.br)
2. Create a DNS zone in Azure
3. At the registrar, point the Name Servers to Azure:
   - ns1-01.azure-dns.com
   - ns2-01.azure-dns.net
   - ns3-01.azure-dns.org
   - ns4-01.azure-dns.info
4. In Azure App Service, go to "Custom domains"
5. Add todoapp.com.br
6. Azure verifies that you are the owner (via TXT record)
7. Done! todoapp.com.br now points to your app!
```

---

## 7. DNS Cache: The Toad with Good Memory

### 7.1 TTL: Information Expiration Time

**TTL** (Time To Live) defines how long a DNS record can stay in cache before being queried again.

```
A Record: todoapp.com.br -> 20.119.45.123
TTL: 3600 seconds (1 hour)

Meaning: "For 1 hour, trust this information.
After that, ask again."
```

| TTL | Duration | When to Use | Mario Analogy |
|-----|---------|-------------|---------------|
| 60 | 1 minute | Migrations, frequent changes | Toad needs to confirm every minute |
| 300 | 5 minutes | Load balancing | Toad checks every 5 minutes |
| 3600 | 1 hour | Normal use | Toad memorizes for 1 hour |
| 86400 | 1 day | Stable records | Toad memorizes for the entire day |

### 7.2 Why Cache Matters

Without cache, EVERY request would have to traverse the full chain (Root -> TLD -> Authoritative). With billions of requests per day, the root servers would collapse.

### 7.3 Cache Problems: Outdated Information

When you change your server's IP, the world doesn't know immediately. Caches still point to the old IP until the TTL expires.

```
Before: todoapp.com.br -> 20.119.45.123 (old IP)
You change: todoapp.com.br -> 40.87.12.56 (new IP)

Problem: Some users still see the old IP
(because their cache hasn't expired yet)

Solution: Reduce the TTL BEFORE the migration
  1. Change TTL to 60 seconds (24h before the migration)
  2. Wait 24h (old caches expire)
  3. Change the IP
  4. In 60 seconds, everyone sees the new IP
  5. Restore TTL to normal (3600)
```

---

## 8. DNS and Security

### 8.1 DNS Spoofing: The Impostor Toad

**DNS Spoofing** (or DNS Poisoning) is when an attacker makes DNS return a fake IP, redirecting users to a malicious site.

```
Normal:
  todoapp.com.br -> 20.119.45.123 (your real server)

With DNS Spoofing:
  todoapp.com.br -> 666.666.666.1 (attacker's server!)
  The user thinks they're on TodoApp, but they're on a fake site
  that steals passwords!
```

> **MARIO ANALOGY:** DNS Spoofing is a **Koopa disguised as Toad** giving wrong directions. You ask "How do I get to Princess's Castle?" and the Koopa answers with the coordinates to Bowser's Castle. You go there thinking you're safe... and fall into a trap.

### 8.2 DNSSEC: The Anti-Forgery Seal

**DNSSEC** (DNS Security Extensions) adds cryptographic signatures to DNS records, ensuring that the response is authentic.

> **MARIO ANALOGY:** DNSSEC is as if each Messenger Toad carried a **verifiable royal seal**. If a Koopa disguises as Toad, the seal doesn't match and the impostor is exposed. Every DNS response comes signed, and only the legitimate server has the key to sign it.

---

## 9. DNS Diagnostic Tools

```bash
# nslookup -- Basic DNS query
nslookup todoapp.com.br
# Response: 20.119.45.123

# dig -- Detailed query (more information)
dig todoapp.com.br
# Shows records, TTL, authoritative server, response time

# dig for specific record
dig todoapp.com.br MX    # Query email records
dig todoapp.com.br TXT   # Query text records
dig todoapp.com.br NS    # Query name servers

# ping -- Check if the IP responds
ping todoapp.com.br
# Translates to IP and tests connectivity

# traceroute -- Shows the path to the server
traceroute todoapp.com.br
# Lists each "hop" (router) along the way

# host -- Simple query
host todoapp.com.br
# todoapp.com.br has address 20.119.45.123
```

---

## 10. Final Summary Table

| Concept | Technical Explanation | Mario Analogy |
|---------|---------------------|---------------|
| **IP Address** | Unique number that identifies a computer | Exact coordinates of the castle on the map |
| **Domain** | Friendly name for an IP | Castle name ("Princess's Castle") |
| **DNS** | System that translates names into IPs | Map legend that translates names into coordinates |
| **TLD** | Domain extension (.com, .br) | The kingdom the castle belongs to |
| **Subdomain** | Subdivision of a domain | Different wings of the castle (api, www, mail) |
| **A Record** | Name -> IP | "The Castle is at these coordinates" |
| **CNAME Record** | Name -> Another name (alias) | "This castle is also known as..." |
| **TTL** | Cache validity time | How long Toad trusts the information |
| **Root Server** | DNS root server | Elder Toad who knows all the kingdoms |
| **Authoritative Server** | Server that has the definitive answer | Guardian Toad who knows the exact address |
| **DNS Spoofing** | Attack that forges DNS responses | Koopa disguised as Toad giving wrong directions |
| **DNSSEC** | Cryptographic signatures in DNS | Verifiable royal seal on each response |
| **Propagation** | Time for DNS changes to spread | Time for all Toads to learn the new address |

---

## References

1. Cloudflare -- What is DNS: https://www.cloudflare.com/learning/dns/what-is-dns/
2. Microsoft Learn -- Azure DNS: https://learn.microsoft.com/azure/dns/
3. IANA -- Root Servers: https://www.iana.org/domains/root/servers
4. Registro.br: https://registro.br/
5. MDN Web Docs -- Understanding domain names: https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name
6. DNSSEC: https://www.icann.org/resources/pages/dnssec-what-is-it-why-important-2019-03-05-en

---

*"Without DNS, the internet would be a book of numeric coordinates impossible to memorize. With DNS, each castle has a beautiful name that any player can remember. It's like magic that transforms meaningless numbers into names that tell stories."*

*Next Warp Pipe: Level 2-5 -- The Tournament Rules: Agile Methodologies*

---

<div align="center">

⬅️ [Previous: Level 2-3: Security](2-3-seguranca.md) · 🗺️ [World Map](../INDEX.md) · ➡️ [Next: Level 2-5: Methodologies](2-5-metodologias.md)

</div>
