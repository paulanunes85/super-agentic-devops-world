---
title: "Capitulo 4F — MCP (Model Context Protocol) / Os Warp Zones"
description: "Como usar o Model Context Protocol para conectar seus agentes de IA a ferramentas e servicos externos."
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "2.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-6", "mcp", "model-context-protocol"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 2.0.0 | 2026-03-18 | Paula Silva | Versao Mario Bros — reescrita completa com analogias Super Mario |
| 1.0.0 | 2026-03-06 | Paula Silva | Versao original com analogias RPG |

# Capitulo 4F — MCP (Model Context Protocol)
## Os Warp Zones — Conectando seus Personagens a Outros Mundos

---

**Preparado para:** Sofia
**Versao:** 2.0 — Edicao Mushroom Kingdom
**Autora:** Paula Silva | Microsoft Latam Software GBB
**Data:** Marco 2026
**Idioma:** Portugues do Brasil (pt-BR)
**Colecao:** Agentic DevOps — Edicao Super Mario Bros

---

## SUMARIO

1. [Introducao: A Sala dos Warp Zones](#introducao)
2. [O que e MCP?](#o-que-e-mcp)
3. [Arquitetura MCP: Os 4 Pilares](#arquitetura-mcp)
4. [Como Configurar MCP](#como-configurar-mcp)
5. [Servidores MCP Populares](#servidores-mcp-populares)
6. [Seguranca em MCP](#seguranca-em-mcp)
7. [MCP + Agents = Agentic DevOps Completo](#mcp-agents)
8. [Proximos Passos](#proximos-passos)

---

## Introducao: A Sala dos Warp Zones

Sofia chegou a uma sala secreta no Mushroom Kingdom — aquela sala escondida atras de um muro de blocos que todo mundo ja viu no World 1-2 do Super Mario Bros. La estavam tres canos brilhantes, cada um levando a um mundo completamente diferente. O primeiro cano, com brilho azulado, levava ao **Mundo Figma**, onde designs ganham vida em cores e tipografia. O segundo cano, verde escuro, levava ao **Mundo Subterraneo do PostgreSQL**, onde dados ancestrais ficam guardados em tabelas e colunas. No canto, o cano purpura levava ao **Mundo dos Azure Boards**, onde tarefas e projetos fluem como moedas numa fase bonus.

Cada cano representa uma **Warp Zone** — uma conexao para ferramentas externas, mundos paralelos que normalmente ficariam isolados da realidade do seu personagem (seu agente de IA). Mas com MCP, esses Warp Zones se abrem. Seu personagem pode agora **viajar** atraves deles, buscar informacoes, executar acoes e retornar com o conhecimento de outros mundos.

Bem-vinda ao capitulo onde voce aprende a construir e usar esses **Warp Zones**.

> Lembra no Super Mario Bros original, quando voce encontrava aquela sala secreta que dizia "WELCOME TO WARP ZONE" e tinha canos que te levavam direto para mundos avancados? MCP e exatamente isso — so que em vez de pular mundos, voce CONECTA mundos!

---

## O que e MCP?

**MCP** e o acronimo de **Model Context Protocol** — um protocolo aberto e padronizado que permite que agentes de IA se conectem a ferramentas e dados externos. Nao e exclusivo do GitHub Copilot ou de uma unica plataforma. MCP e um contrato universal que diz: *"Se voce segue essas regras, eu consigo me conectar a voce."*

Pense em MCP como um acordo entre seu personagem e o mundo externo. O personagem diz: *"Eu quero informacoes sobre designs, ou dados do banco, ou status de tarefas."* E o MCP responde: *"Otimo! Aqui estao as ferramentas que voce pode usar para acessar isso."*

### A Analogia Mario: Warp Zones

Seu personagem (Mario) vive no **World 1** — ele conhece tudo dentro desse mundo (arquivos de codigo, documentacao local, contexto do seu projeto). Mas esse conhecimento e limitado. Ele nao consegue ver designs na Figma, nao consegue executar queries no banco de dados, nao consegue atualizar um card no Azure Boards.

Com MCP, voce abre **Warp Zones** para outros mundos. Cada Warp Zone leva a um **MCP Server** — um mundo especial onde existem recursos unicos. O **Figma MCP Server** vive no Mundo dos Designs. O **PostgreSQL MCP Server** vive no Mundo Subterraneo dos Dados. E assim por diante.

Quando seu personagem precisa de informacao de outro mundo, ele **entra no Warp Zone** (faz uma requisicao MCP), **pega a informacao**, e **volta com ela**. De repente, ele nao e mais um Mario preso no World 1. E um Mario que pode viajar entre TODOS os mundos, coletando power-ups e recursos de cada um!

| Situacao | Analogia Mario |
|---|---|
| **Sem MCP** | Mario preso no World 1. Limitado. So ve o que esta na frente dele. |
| **Com MCP** | Mario viaja entre World 1, 2, 3, 4... Ilimitado! Coleta recursos de todos os mundos. |

### Sem MCP vs Com MCP

**Sem MCP:** O agente esta isolado. Ele ve codigo, documentacao, mensagens de erro. Mas nao consegue checar um design no Figma, nao consegue rodar uma query SQL, nao consegue atualizar uma tarefa. Ele precisa pedir ao usuario para fazer isso. E como Mario sem Warp Zones — anda fase por fase, sem atalhos.

**Com MCP:** O agente e um verdadeiro membro do time. Ele pode ler designs, fazer queries, criar tarefas, atualizar status. Ele vira um DevOps agent completo. E como Mario com acesso a TODOS os Warp Zones — viaja livremente entre mundos, coleta o que precisa e volta mais poderoso!

### MCP e um Padrao Aberto

Uma coisa crucial: **MCP nao pertence a ninguem.** Nao e exclusivo do GitHub Copilot. Nao e da Microsoft, nao e da Anthropic. E um padrao aberto — qualquer ferramenta pode implementar um servidor MCP, e qualquer agente que entenda MCP pode se conectar a ele.

Isso significa que voce nao fica presa a um ecossistema. Se voce criar um MCP Server para sua ferramenta custom, qualquer agente de IA que suporte MCP (Claude, GitHub Copilot, e muitos outros) pode usa-lo.

> Pense assim: o Warp Zone e um padrao universal. Nao importa se voce esta jogando no NES, SNES, Switch ou emulador — o Warp Zone funciona igual. MCP e assim: funciona em qualquer agente que suporte o protocolo.

---

## Arquitetura MCP: Os 4 Pilares

MCP nao e complicado. Tem 4 componentes principais. Vamos explorar cada um deles.

### 1. MCP Server (O Outro Mundo)

O MCP Server e o **mundo** do outro lado do Warp Zone. E um processo (geralmente rodando na maquina ou em um servidor remoto) que expoe ferramentas e dados para serem acessados via MCP.

**Exemplos:**
- Um servidor Figma MCP que expoe a API da Figma (Mundo dos Designs)
- Um servidor PostgreSQL MCP que permite fazer queries no banco (Mundo Subterraneo dos Dados)
- Um servidor GitHub MCP que pega informacoes de repositorios (Mundo dos Repos)

O servidor implementa a logica: quando um client pede uma ferramenta, o servidor executa e retorna o resultado.

> Cada MCP Server e como um mundo diferente no Mario. O Mundo Aquatico tem peixes e corais. O Mundo do Castelo tem lava e Bowser. Cada mundo tem seus proprios recursos e desafios unicos.

### 2. MCP Client (Mario Viajando pelo Warp Zone)

O MCP Client e seu **personagem** — o agente de IA. Ele e o lado que FAZ requisicoes. Quando o personagem precisa de dados (ex: *"quero saber as cores do design"*), ele entra no Warp Zone e faz uma chamada MCP para o servidor.

O client (seu agente) nao implementa nenhuma logica do outro mundo. Ele so sabe como **viajar pelo Warp Zone** e conversar com os servers via MCP, e entao usa as ferramentas que eles expoem.

> Mario nao precisa saber construir o Mundo Aquatico. Ele so precisa saber nadar quando chega la! Da mesma forma, o MCP Client nao precisa implementar a logica do Figma — so precisa saber se comunicar com o servidor Figma.

### 3. Tools (Itens Disponiveis naquele Mundo)

Tools sao os **itens** que o server oferece. Cada tool e uma acao ou consulta que o client pode fazer — como os itens especificos que existem em cada mundo do Mario.

**Exemplos:**
- Uma tool `read_file` no servidor de arquivos (como encontrar um cogumelo no bloco)
- Uma tool `query_database` no PostgreSQL MCP (como encontrar moedas escondidas)
- Uma tool `get_design_colors` no Figma MCP (como encontrar a Fire Flower)

O client descobre quais tools estao disponiveis quando se conecta ao server, e entao pode usa-las.

> Quando Mario entra no Mundo Aquatico, ele descobre que pode nadar, coletar estrelas do mar e derrotar peixes Cheep Cheep. No Mundo do Castelo, pode pular sobre lava e enfrentar Bowser. Cada mundo tem seus proprios "itens" e acoes disponiveis!

### 4. Context (Recursos Coletados)

Context e a informacao que flui entre client e server. Quando o client manda uma requisicao, ele envia context (dados, parametros). O server processa e retorna context (resultado).

MCP tambem suporta **resources** — informacoes que o server disponibiliza continuamente (como um arquivo, um design, dados de um banco). O client pode acessar essas resources para ler dados.

> E como a mochila do Mario. Quando ele viaja para outro mundo, leva informacoes sobre o que precisa. Quando volta, traz os recursos que coletou. O context e essa troca de informacoes entre mundos!

### Tabela Resumo: Os 4 Pilares

| Componente | O que e | Analogia Mario | Exemplo | Detalhe Tecnico |
|---|---|---|---|---|
| **MCP Server** | Provedor de ferramentas | O outro mundo alem do Warp Zone | Figma MCP Server fornecendo acesso a designs | Processo que implementa handlers para tools e resources |
| **MCP Client** | Consumidor de ferramentas | Mario viajando pelo Warp Zone | Seu agente IA fazendo requisicoes | Conecta-se ao server e usa as tools disponiveis |
| **Tools** | Acoes disponiveis | Itens disponiveis naquele mundo | `read_design`, `query_data`, `create_task` | Funcao com parametros de entrada e output estruturado |
| **Context / Resources** | Dados compartilhados | Recursos coletados entre mundos | Design files, database rows, task lists | Informacao que flui entre client e server |

---

## Como Configurar MCP

MCP e configurado via arquivo JSON. No VS Code com Copilot, voce edita `.vscode/mcp.json`. Nele, voce declara os servers MCP (os Warp Zones) que quer usar e como conectar a eles.

> Pense no `mcp.json` como o **Mapa dos Warp Zones**. Nele esta escrito: quais mundos existem, como chegar em cada um, e qual e a senha de entrada (API Key).

### Estrutura do Arquivo mcp.json

```json
{
  "mcpServers": {
    "server-id": {
      "type": "stdio" | "sse",
      "command": "node | python | bash | ...",
      "args": ["path/to/script.js", "arg1", "arg2"],
      "env": {
        "VAR_NAME": "${input:varName}",
        "API_KEY": "${env:FIGMA_API_KEY}"
      },
      "alwaysAllow": ["tool-name"]
    }
  }
}
```

### Campos Explicados

| Campo | O que faz | Analogia Mario |
|---|---|---|
| **type** | Como o client se conecta ao server. `"stdio"` = process local (padrao). `"sse"` = HTTP streaming. | Tipo de cano: verde (local) ou dourado (remoto) |
| **command** | Qual programa executar. Pode ser `node`, `python`, `bash`, etc. | Qual personagem entra no cano |
| **args** | Argumentos do comando. Geralmente o caminho do script e parametros. | Coordenadas do mundo destino |
| **env** | Variaveis de ambiente. Use `${env:VAR_NAME}` para ler do sistema ou `${input:varName}` para perguntar ao usuario. | Chaves secretas para abrir o Warp Zone |
| **alwaysAllow** | Tools que nao precisam de confirmacao do usuario. Use com cuidado. | Itens que Mario pode pegar sem precisar confirmar |

### Exemplo 1: Figma MCP Server (Warp Zone para o Mundo dos Designs)

Conectando-se ao Figma para ler designs e cores diretamente.

```json
{
  "mcpServers": {
    "figma": {
      "type": "stdio",
      "command": "node",
      "args": [
        "~/.local/share/npm/lib/node_modules/figma-mcp-server/index.js"
      ],
      "env": {
        "FIGMA_API_KEY": "${input:figmaApiKey}",
        "FIGMA_FILE_ID": "${input:figmaFileId}"
      }
    }
  }
}
```

**O que faz:** Quando seu personagem precisar de informacoes sobre designs (cores, tipografia, componentes), ele pode entrar nesse Warp Zone e usar a tool `get_design_data` do Figma MCP Server. E como Mario entrando num cano que leva ao Mundo dos Designs e voltando com uma paleta de cores!

### Exemplo 2: PostgreSQL MCP Server (Warp Zone para o Mundo Subterraneo dos Dados)

Conectando-se a um banco PostgreSQL para fazer queries direto.

```json
{
  "mcpServers": {
    "postgres": {
      "type": "stdio",
      "command": "node",
      "args": [
        "~/.local/share/npm/lib/node_modules/@modelcontextprotocol/server-postgres/dist/index.js"
      ],
      "env": {
        "PGHOST": "${input:pgHost}",
        "PGPORT": "${input:pgPort}",
        "PGUSER": "${input:pgUser}",
        "PGPASSWORD": "${input:pgPassword}",
        "PGDATABASE": "${input:pgDatabase}"
      }
    }
  }
}
```

**O que faz:** Seu personagem pode executar queries SQL e explorar a estrutura do banco. Tools como `query`, `get_schema`, `list_tables` ficam disponiveis. E como Toad (o guardiao dos dados) viajando pelo Warp Zone subterraneo para buscar tesouros escondidos nas tabelas!

### Exemplo 3: Azure Boards MCP Server (Warp Zone para o Mundo das Tarefas)

Conectando-se ao Azure Boards para gerenciar work items e projetos.

```json
{
  "mcpServers": {
    "azure-devops": {
      "type": "stdio",
      "command": "node",
      "args": [
        "~/.local/share/npm/lib/node_modules/@modelcontextprotocol/server-azure-devops/dist/index.js"
      ],
      "env": {
        "AZURE_DEVOPS_ORG": "${input:azureOrg}",
        "AZURE_DEVOPS_PROJECT": "${input:azureProject}",
        "AZURE_DEVOPS_TOKEN": "${input:azureToken}",
        "AZURE_DEVOPS_PAT": "${env:AZURE_DEVOPS_PAT}"
      }
    }
  }
}
```

**O que faz:** Seu personagem pode criar, atualizar e listar work items. Pode checar sprints, assignees, status. Tools como `create_work_item`, `update_work_item`, `list_work_items`. E como ter acesso ao quadro de missoes do Mushroom Kingdom — ver quais quests estao pendentes, quais estao em andamento, e quais foram completadas!

---

## Servidores MCP Populares

Existem varios servidores MCP (Warp Zones) prontos para usar. Aqui estao os principais:

| Nome | NPM Package | O que faz (Mundo que abre) | Tools Principais | Use Case |
|---|---|---|---|---|
| **filesystem** | `@anthropic/mcp-server-filesystem` | Warp Zone para o Mundo dos Arquivos | `read_file`, `write_file`, `list_directory`, `delete_file` | Seu personagem gerencia arquivos como um humano |
| **PostgreSQL** | `@modelcontextprotocol/server-postgres` | Warp Zone para o Mundo Subterraneo dos Dados | `query`, `get_schema`, `list_tables`, `describe_table` | Agente pode explorar e fazer queries em DBs |
| **GitHub** | `@anthropic/mcp-server-github` | Warp Zone para o Mundo dos Repos | `list_repos`, `get_issue`, `create_pull_request`, `list_files` | Integracao completa com seu workflow GitHub |
| **Figma** | `figma-mcp-server` (comunidade) | Warp Zone para o Mundo dos Designs | `get_design_data`, `list_files`, `get_colors`, `get_typography` | Designs sao acessiveis como contexto |
| **Azure DevOps** | `@modelcontextprotocol/server-azure-devops` | Warp Zone para o Mundo das Tarefas | `create_work_item`, `update_work_item`, `list_work_items` | Agente gerencia tasks e projetos |
| **Slack** | `@modelcontextprotocol/server-slack` | Warp Zone para o Mundo da Comunicacao | `send_message`, `list_channels`, `get_conversation_history` | Agente pode se comunicar com o time |
| **Docker** | `docker-mcp-server` (comunidade) | Warp Zone para o Mundo dos Containers | `list_containers`, `run_container`, `stop_container`, `exec_command` | DevOps agent controla sua infraestrutura |
| **Memory** | `@modelcontextprotocol/server-memory` | Warp Zone para o Mundo das Memorias | `save_memory`, `retrieve_memory`, `list_memories` | Agente mantem contexto entre conversas |

---

## Seguranca em MCP

Quando voce conecta um agente a ferramentas externas, seguranca e critico. Aqui estao as praticas essenciais.

### Regra de Ouro: Nunca Hardcode Secrets

**NUNCA faca isso:**
```
"FIGMA_API_KEY": "sk-fgkjf983jf983jf"
```
Secrets hardcoded podem vazar. E como gritar a localizacao de um Warp Zone secreto no meio do Mushroom Kingdom — todo mundo ouve, inclusive os Koopas!

**SEMPRE faca assim:**
Use `${input:varName}` ou `${env:VAR_NAME}` para ler de variaveis de ambiente ou perguntar ao usuario.

### A Analogia Mario: A Chave do Warp Zone

Imagine que a senha do banco de dados e a **chave secreta de um Warp Zone**. Voce nunca grita essa chave no meio de uma fase cheia de inimigos. Voce a guarda no **bolso secreto** (arquivo `.env`), e so mostra quando precisa entrar no Warp Zone.

Com MCP e igual. Seu `API_KEY` e a chave do Warp Zone. Voce nao a coloca no arquivo `mcp.json`, nao a coloca no git, nao a coloca em lugar nenhum visivel. Voce a armazena em um `.env` file (que voce **NUNCA** faz commit ao git), ou voce pede ao usuario para inserir quando necessario (`${input:varName}`).

### Tabela de Boas Praticas de Seguranca

| Pratica | Por que | Exemplo Ruim | Exemplo Bom |
|---|---|---|---|
| Use `${env:VAR_NAME}` | Le variaveis de ambiente do sistema | `PGPASSWORD: "senha123"` | `PGPASSWORD: ${env:POSTGRES_PASSWORD}` |
| Use `.env` files | `.env` e um arquivo local que nao e commitado ao git | Secrets no git | Secrets no `.env`, `.gitignore` inclui `.env` |
| Use `${input:varName}` | Pede ao usuario para inserir o valor | API_KEY visivel no arquivo | `API_KEY: ${input:apiKey}` (pergunta ao usar) |
| `alwaysAllow` com cuidado | Tools que rodam sem confirmacao | `delete_database` em alwaysAllow | So tools de leitura em alwaysAllow |
| Tokens com expiracao | Use tokens que expiram, nao senha permanente | Senha permanente | JWT token com TTL de 1 hora |
| Logs e auditoria | Registre quem usou qual tool e quando | Nenhum log | Logs em `/var/log/mcp/` com timestamps |

> **Regra do Mario:** A Star (estrela de invencibilidade) tem duracao limitada. Seus tokens devem ser assim tambem — temporarios, nao eternos!

---

## MCP + Agents = Agentic DevOps Completo

Agora voce entende MCP isoladamente. Mas qual e o grande quadro? Como MCP se encaixa em Agentic DevOps?

### O Time Completo do Mushroom Kingdom

| Componente | Analogia Mario | O que faz |
|---|---|---|
| **Agent** (Quem) | Personagem jogavel (Mario, Luigi, Toad...) | Seu personagem, o agente de IA |
| **Skill** (Como) | Power-Up (Super Mushroom, Fire Flower...) | Uma competencia especifica que o agente tem |
| **Instruction** (Regras) | Regras do jogo (gravidade, lava mata...) | Como o agente deve se comportar |
| **Prompt** (Atalhos) | Warp Pipe (cano verde para area secreta) | A acao que voce invoca para fazer o agente agir |
| **Hook** (Automacoes) | Bloco "?" (bate e algo acontece) | Gatilhos automaticos |
| **MCP** (Conexoes) | Warp Zone (portal para outro mundo) | As conexoes para outros mundos |

### A Visao Completa

**Sem MCP:** Seu personagem vira um jogador solo preso no World 1. Ele le codigo, sugere mudancas, mas nao consegue verificar designs, nao consegue consultar o banco, nao consegue atualizar tarefas. Ele precisa pedir ao humano fazer essas coisas. Mario sem Warp Zones.

**Com MCP:** Seu personagem vira um campeao do Mushroom Kingdom inteiro. Ele le codigo, checa designs no Mundo Figma, consulta o banco no Mundo Subterraneo, atualiza tasks no Mundo das Tarefas, notifica o time no Mundo do Slack, tudo automaticamente. Ele e um membro completo da sua equipe. Mario COM Warp Zones — viajando livremente entre todos os mundos!

> **A Magia do MCP:** Transforma um Mario preso no World 1 em um Mario que viaja por TODOS os mundos. Multiplica sua capacidade de impacto em ordens de magnitude.

---

## Proximos Passos: Construindo Seu Proprio MCP Server

Agora que voce entende como usar Warp Zones prontos, e se voce precisar criar um Warp Zone para um mundo custom? Voce pode criar seu proprio MCP Server!

Um MCP Server e um Node.js script (ou Python, ou qualquer linguagem) que implementa o protocolo MCP. Precisa expor tools e resources que o client pode chamar.

**Para criar seu proprio server, voce precisa:**

1. **Instalar o SDK MCP:** `npm install @modelcontextprotocol/sdk`
2. **Criar um script** que implementa a classe Server
3. **Definir as tools** que voce quer expor (os itens do seu mundo)
4. **Adicionar handlers** para cada tool
5. **Publicar no npm** (opcional) ou usar localmente
6. **Configurar no seu `mcp.json`** com `command: "node"` e `args: ["path/to/server.js"]`

> E como construir seu proprio mundo no Mario Maker! Voce define o cenario, os blocos, os itens, os inimigos — e depois conecta esse mundo ao mapa principal para que Mario possa visitar.

---

## Sofia Desbloqueou os Warp Zones!

Sofia entrou na sala dos Warp Zones como uma iniciante que so conhecia o World 1. Saiu como uma **Mestra dos Warp Zones** que compreende como conectar seus personagens a qualquer mundo, abrir portais para ferramentas externas, e criar um ambiente de desenvolvimento totalmente conectado e automatizado.

Os Warp Zones estao abertos. Os mundos estao ao seu alcance. Seus personagens agora podem viajar livremente entre todos eles!

**Proxima parada:** Modo Multiplayer Coordenado — jogando em time!

---

| Anterior: 4E Hooks | Proximo: 4G Orquestracao |
|---|---|

---

**Habilidade Desbloqueada!**
Sofia agora domina MCP e Warp Zones.
Ela coletou a Star Coin deste mundo e seguiu para o proximo...

**Fonte:** Model Context Protocol - Documentacao Oficial — https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp

---

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Extending Copilot Chat with MCP](https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-with-mcp)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [MCP Specification](https://spec.modelcontextprotocol.io)

---

<div align="center">

⬅️ [Anterior: Fase 6-5: Hooks](6-5-hooks.md) · 🗺️ [Mapa dos Mundos](../INDEX.md) · ➡️ [Proximo: Fase 6-7: Orchestration](6-7-orchestration.md)

</div>
