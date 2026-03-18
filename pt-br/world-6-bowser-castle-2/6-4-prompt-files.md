---
title: "Capitulo 4D — Prompt Files (.prompt.md) / Os Warp Pipes"
description: "Como criar Prompt Files reutilizaveis usando .prompt.md para automatizar tarefas recorrentes como atalhos magicos."
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "2.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-6", "prompts", "prompt-md"]
---

## Change Log

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 2.0.0 | 2026-03-18 | Paula Silva | Versao Mario Bros — reescrita completa com analogias Super Mario |
| 1.0.0 | 2026-03-06 | Paula Silva | Versao original com analogias RPG |

# Capitulo 4D — Prompt Files (.prompt.md)
## Os Warp Pipes — Atalhos Magicos Reutilizaveis

---

**Preparado para:** Sofia
**Versao:** 2.0 — Edicao Mario
**Autora:** Paula Silva | Microsoft Latam Software GBB
**Data:** Marco 2026
**Idioma:** Portugues do Brasil (pt-BR)
**Colecao:** Agentic DevOps

---

## SUMARIO

- Introducao: A Sala dos Warp Pipes
- O que sao Prompt Files
- Formato do .prompt.md
- Exemplo 1: new-component.prompt.md
- Exemplo 2: add-endpoint.prompt.md
- Exemplo 3: create-migration.prompt.md
- Modos de Execucao: Agent vs Ask
- Prompt vs Instruction — A Diferenca
- Tabela Comparativa Detalhada
- Os 3 Prompts do TodoApp
- Boas Praticas para Warp Pipes
- Navegacao
- Habilidade Desbloqueada

---

## Introducao: A Sala dos Warp Pipes

Sofia entrou na Sala dos Warp Pipes.

Ao seu redor, dezenas de canos verdes saiam do chao e do teto, cada um com um brilho diferente na borda. Alguns pulsavam em verde-claro, outros em azul, outros em dourado. De dentro de cada cano vinha um som familiar — aquele "fwoop!" classico que todo mundo conhece do Mario.

"Bem-vinda a sala dos Warp Pipes," disse Yoshi, apontando para os canos reluzentes. "Cada cano desses te leva direto para um lugar especifico. Em vez de percorrer a fase inteira a pe, voce entra no cano e SAI exatamente onde precisa. E o melhor: voce pode usar o mesmo cano quantas vezes quiser!"

Sofia olhou para os canos, curiosa. Cada um tinha uma plaquinha na frente: "Novo Componente", "Novo Endpoint", "Nova Migracao"...

"Entao eu nao preciso andar a fase toda de novo cada vez que quero criar algo parecido?"

"Exatamente!" Yoshi sorriu. "Voce entra no Warp Pipe, diz o que precisa, e ele te leva la. Rapido, eficiente, sem chance de se perder no caminho."

---

## O que sao Prompt Files

Os Prompt Files sao prompts reutilizaveis salvos em arquivos com extensao `.prompt.md`, armazenados no diretorio `.github/prompts/` de seu repositorio. Eles funcionam como **Warp Pipes** no mundo do Mario — em vez de percorrer toda a fase (escrever tudo do zero), voce entra no cano e sai direto onde precisa, pronto para agir.

### ANALOGIA MARIO — O Warp Pipe Reutilizavel

Imagine que voce esta jogando Super Mario Bros. Voce ja passou pelo World 1-1 varias vezes e sabe que precisa chegar naquela area secreta subterranea cheia de moedas. Voce tem duas opcoes:

**Opcao A (sem Warp Pipe):** Correr a fase inteira desde o inicio, pular todos os obstaculos, desviar dos Goombas, ate finalmente chegar la. Toda. Vez.

**Opcao B (com Warp Pipe):** Entrar no cano verde que ja sabe onde fica, dizer "quero ir para a area de moedas", e POOF — voce esta la. Rapido, eficiente, sem risco de errar o caminho.

Cada Warp Pipe aceita **ingredientes** (variaveis) — voce diz o nome do componente, o tipo de endpoint, o nome da migracao — e o cano te leva exatamente ao lugar certo, ja com tudo preparado.

Os Prompt Files funcionam exatamente assim no mundo do Agentic DevOps! Voce escreve o Warp Pipe uma vez, reutiliza multiplas vezes, sempre com consistencia perfeita.

### ESTRUTURA DE UM PROMPT FILE

Cada Warp Pipe (arquivo .prompt.md) possui:

1. **Nome do Warp Pipe** — Nome descritivo do arquivo (ex: `new-component.prompt.md`)
2. **Ingredientes (Inputs)** — Variaveis que voce fornecera ao entrar no cano
3. **Destino (Prompt Body)** — O corpo principal com instrucoes e variaveis
4. **Modo de Transporte** — Como o cano funciona (`agent` ou `ask`)
5. **Descricao** — Para onde este Warp Pipe te leva

Todos sao armazenados na sala secreta: `.github/prompts/`

---

## Formato do .prompt.md

Os Prompt Files seguem um formato estruturado com duas partes principais: o **Frontmatter** (a plaquinha do cano em YAML) e o **Body** (o destino do Warp Pipe).

**FRONTMATTER (Plaquinha do Cano):**
```yaml
---
mode: agent   # ou "ask"
description: "Descricao clara de para onde este Warp Pipe te leva"
---
```

**BODY (Destino do Warp Pipe):**
O corpo contem instrucoes para o Claude Agent, com variaveis dinamicas no formato: `${{input:label}}` onde "label" e o nome do ingrediente.

- **MODO 'agent':** O cano te leva E constroi a fase para voce (cria arquivos, faz commits, etc.)
- **MODO 'ask':** O cano te leva E te mostra o mapa (explica, analisa, responde)

---

## Exemplo 1: new-component.prompt.md

Este Warp Pipe te transporta direto para a criacao de um novo componente React com testes automaticos:

```markdown
---
mode: agent
description: "Cria um novo componente React com arquivo de testes correspondente.
O componente inclui tipagem TypeScript, propriedades bem definidas e testes
unitarios com Jest."
---

Voce e um especialista em desenvolvimento React. Crie um novo componente
React chamado **${{input:componentName}}** com as seguintes caracteristicas:

REQUISITOS:
1. O componente deve ser funcional (React functional component)
2. Deve usar TypeScript com interfaces bem definidas
3. Deve ter propriedades (props) claramente documentadas
4. Deve seguir as convencoes de nomeacao PascalCase
5. Incluir comentarios JSDoc explicando o proposito
6. Usar valores padrao para props quando apropriado

ESTRUTURA DE PASTAS:
- Criar arquivo do componente em: src/components/${{input:componentName}}/index.tsx
- Criar arquivo de estilos em: src/components/${{input:componentName}}/styles.css
- Criar arquivo de testes em: src/components/${{input:componentName}}/${{input:componentName}}.test.tsx

ARQUIVO DE TESTES:
- Usar Jest e React Testing Library
- Incluir no minimo 3 testes basicos: renderizacao, props, eventos
- Todos os testes devem passar

PADRAO DE CODIGO:
- Usar hooks React modernos
- Incluir propTypes ou interface TypeScript
- Comentarios explicativos para logica complexa
- Formatacao com Prettier (2 espacos)

Crie os tres arquivos e certifique-se de que tudo esta pronto para uso.
```

---

## Exemplo 2: add-endpoint.prompt.md

Este Warp Pipe te transporta direto para a criacao de um novo endpoint Express com validacao:

```markdown
---
mode: agent
description: "Cria um novo endpoint Express.js com validacao de entrada,
tratamento de erros e documentacao. O endpoint inclui validacao com Joi,
tipagem TypeScript e testes com Supertest."
---

Voce e um especialista em desenvolvimento backend com Express.js.
Crie um novo endpoint HTTP conforme as especificacoes abaixo:

Endpoint: ${{input:method}} /${{input:path}}
Descricao: ${{input:description}}

REQUISITOS:
1. Implementar validacao de entrada usando Joi ou Zod
2. Incluir tratamento robusto de erros
3. Retornar mensagens de erro claras em JSON
4. Usar TypeScript com tipos bem definidos
5. Incluir middleware de autenticacao se necessario
6. Adicionar logging de requisicoes importantes

ESTRUTURA:
- Arquivo do controlador: src/controllers/${{input:controllerName}}.ts
- Arquivo de rota: src/routes/${{input:routeName}}.ts
- Arquivo de validacao: src/validators/${{input:validatorName}}.ts
- Arquivo de testes: src/routes/__tests__/${{input:routeName}}.test.ts

VALIDACAO:
- Campo obrigatorio: ${{input:requiredFields}}
- Tipos esperados: ${{input:fieldTypes}}
- Limites (min/max): ${{input:fieldLimits}}

RESPOSTAS ESPERADAS:
- Sucesso (200): Retornar objeto JSON com dados criados
- Erro de validacao (400): Retornar mensagem de erro clara
- Nao autorizado (401): Se autenticacao falhar
- Nao encontrado (404): Se recurso nao existir
- Erro interno (500): Log de erro e mensagem generica

Crie todos os arquivos necessarios, integre com as rotas existentes
e garanta que os testes passem.
```

---

## Exemplo 3: create-migration.prompt.md

Este Warp Pipe te transporta direto para a criacao de uma migracao Prisma:

```markdown
---
mode: agent
description: "Cria uma nova migracao Prisma com alteracoes no schema do banco
de dados. Inclui validacao de integridade referencial, indices apropriados
e rollback seguro."
---

Voce e um especialista em modelagem de dados com Prisma ORM.
Crie uma nova migracao de banco de dados com as seguintes caracteristicas:

Nome da Migracao: ${{input:migrationName}}
Tipo de Alteracao: ${{input:alterationType}}
Descricao: ${{input:description}}

MUDANCAS NO SCHEMA:
- Nova tabela/modelo: ${{input:modelName}}
- Novos campos: ${{input:newFields}}
- Relacionamentos: ${{input:relationships}}
- Indices: ${{input:indexes}}

REQUISITOS:
1. Atualizar arquivo prisma/schema.prisma com novo modelo ou alteracoes
2. Garantir relacionamentos corretos (um-para-muitos, muitos-para-muitos)
3. Adicionar indices para campos frequentemente consultados
4. Definir valores padrao apropriados
5. Usar tipos de dados corretos (String, Int, DateTime, Boolean, etc.)
6. Marcar campos obrigatorios vs. opcionais

VALIDACOES:
- Chaves primarias definidas
- Chaves estrangeiras com integridade referencial
- Restricoes unicas onde necessario
- Timestamps (createdAt, updatedAt) quando apropriado

MIGRACAO PRISMA:
- Executar: npx prisma migrate dev --name ${{input:migrationName}}
- O arquivo de migracao sera criado em prisma/migrations/
- Arquivo SQL sera gerado automaticamente

Crie a migracao, execute-a e valide que o schema esta correto.
```

---

## Modos de Execucao: Agent vs Ask

### MODE: agent — O cano te leva E constroi a fase

O Claude Agent executara acoes diretas no seu repositorio:
- Criar novos arquivos
- Modificar codigo existente
- Fazer commits automaticos
- Executar testes
- Implementar funcionalidades completas

Pense assim: voce entra no Warp Pipe e ele nao so te leva ao destino, mas **constroi a fase inteira para voce**. Voce sai do cano e tudo ja esta pronto — blocos posicionados, moedas no lugar, inimigos removidos.

**Ideal para:** Automacao de desenvolvimento, criacao de boilerplate, refatoracao estruturada.

### MODE: ask — O cano te leva E mostra o mapa

O Claude apenas respondera a perguntas, oferecendo analises e sugestoes:
- Explicar conceitos
- Analisar codigo
- Fornecer recomendacoes
- Responder duvidas

Pense assim: voce entra no Warp Pipe e ele te leva a uma sala com o **mapa completo da fase**. Voce pode ver tudo — onde estao os inimigos, onde estao as moedas, qual o melhor caminho. Mas quem vai jogar a fase e **voce**.

**Ideal para:** Consultas, analises, aprendizado, revisao.

### ESCOLHA DO MODO

- Use **agent** para tarefas que geram codigo/arquivos/commits (o cano constroi)
- Use **ask** para tarefas informacionais ou consultivas (o cano mostra o mapa)

---

## Prompt vs Instruction — A Diferenca

No Mushroom Kingdom, existem dois tipos fundamentais de mecanismo:

**PROMPTS — Warp Pipes (Atalhos Manuais)**
Sao canos que voce escolhe quando usar. Voce decide em qual cano entrar, combinando-os conforme necessario para resolver problemas especificos. Voce ve o cano, aperta "para baixo" no controle, e entra.

**INSTRUCTIONS — Gravidade (Automatica, Sempre Ativa)**
Sao as regras do jogo que afetam tudo, o tempo todo. A gravidade nao precisa ser "invocada" — ela sempre esta em vigor. Da mesma forma, Instructions nao precisam ser ativadas. Elas SEMPRE se aplicam.

### Tabela Comparativa Detalhada

| Aspecto | PROMPT (.prompt.md) | INSTRUCTION (instructions.md) |
|---|---|---|
| **O que e** | Warp Pipe (atalho para area especifica) | Gravidade (regra permanente do Mushroom Kingdom) |
| **Quando Ativado** | Manualmente, quando voce entra no cano | Sempre ativo, afeta todas interacoes |
| **Como e Invocado** | Via menu Copilot ou comando | Carregado automaticamente |
| **Escopo** | Invocacao especifica apenas | Afeta todo comportamento do agente |
| **Persistencia** | Reutilizavel, isolado por invocacao | Persistente atraves conversas |
| **Variaveis/Inputs** | Suporta `${{input:variableName}}` | Geralmente estaticos, sem inputs |
| **Modo Execucao** | agent (constroi a fase) ou ask (mostra o mapa) | Contexto/comportamento apenas |
| **Arquivo** | `.github/prompts/nome.prompt.md` | `.github/instructions.md` |
| **Exemplo Mario** | Warp Pipe que te leva a area secreta | Gravidade — sempre puxa para baixo |
| **Uso Ideal** | Tarefas especificas repetidas | Contexto global e padrao |

---

## Os 3 Warp Pipes do TodoApp

A aplicacao TodoApp utilizara tres Warp Pipes principais para gerenciar seu desenvolvimento. Cada um te leva a um destino especifico e e usado em momentos diferentes do ciclo de desenvolvimento.

| Nome do Warp Pipe | Arquivo | Modo | Descricao | Quando Usar |
|---|---|---|---|---|
| Cano do Componente | `new-component.prompt.md` | agent | Cria componente React com testes | Novo componente UI necessario |
| Cano do Endpoint | `add-endpoint.prompt.md` | agent | Cria endpoint Express com validacao | Adicionar novas rotas API |
| Cano da Migracao | `create-migration.prompt.md` | agent | Cria migracao Prisma para DB | Alterar esquema do banco |

**WARP PIPE 1: new-component.prompt.md**
- Destino: Criacao de um novo componente React reutilizavel
- Exemplos: Modal de confirmacao, Card de tarefa, Formulario de entrada
- Resultado: Componente + Estilos + Testes (3 arquivos criados)

**WARP PIPE 2: add-endpoint.prompt.md**
- Destino: Adicionar uma nova funcionalidade a API
- Exemplos: Listar tarefas, Criar tarefa, Atualizar status, Deletar tarefa
- Resultado: Rota + Controlador + Validador + Testes (4 arquivos criados)

**WARP PIPE 3: create-migration.prompt.md**
- Destino: Alterar a estrutura do banco de dados
- Exemplos: Adicionar campo de prioridade, Criar tabela de tags, Adicionar relacionamentos
- Resultado: Schema atualizado + Migracao SQL + Validacao (2-3 arquivos criados)

**FLUXO DE USO NO TodoApp:**
1. Precisamos de novo componente -> Entrar no Warp Pipe `new-component.prompt.md`
2. Precisamos de nova API -> Entrar no Warp Pipe `add-endpoint.prompt.md`
3. Precisamos alterar DB -> Entrar no Warp Pipe `create-migration.prompt.md`
4. Repeat para cada feature nova

E como ter um Warp Zone com tres canos — cada um te leva ao mundo exato que voce precisa visitar!

---

## Boas Praticas para Warp Pipes

Para dominar a arte dos Prompt Files e criar Warp Pipes realmente poderosos, siga estas praticas essenciais:

1. **NOMES DESCRITIVOS E CLAROS** — BOM: `new-react-component.prompt.md` | RUIM: `prompt1.md`
   - O nome do cano deve dizer para onde ele leva!

2. **DESCRICAO CLARA** — Explicar proposito E tecnologias usadas (ex: "Cria componente React com TypeScript, estilos CSS e testes Jest")

3. **USAR INPUTS PARA FLEXIBILIDADE** — `${{input:componentName}}`, `${{input:fieldType}}` tornam o Warp Pipe reutilizavel para diferentes destinos

4. **DEFINIR MODO CORRETAMENTE** — Use `agent` quando o cano deve construir a fase, `ask` quando deve mostrar o mapa

5. **DOCUMENTAR REQUISITOS EXPLICITAMENTE** — Listar cada requisito em bullet points, ser especifico

6. **INCLUIR EXEMPLOS NO CORPO** — Mostrar estrutura esperada, exemplos entrada/saida

7. **ESPECIFICAR ESTRUTURA DE PASTAS** — Ex: "Criar em `src/components/${{input:componentName}}/`"

8. **VALIDACAO E TRATAMENTO DE ERROS** — Especificar comportamento em todos cenarios (200, 400, 401, 404, 500)

9. **TESTES OBRIGATORIOS** — Exigir minimo 3 testes com Jest e React Testing Library

10. **VERSIONAR SEUS WARP PIPES** — `new-component.v2.prompt.md` para mudancas significativas

---

## Navegacao

**<- CAPITULO 4C — Custom Instructions**
Explore as regras do jogo (a Gravidade e as regras de cada tipo de fase) que governam o comportamento de seu agente.

**-> CAPITULO 4E — Hooks (Os Blocos "?")**
Aprenda sobre os Blocos "?" — gatilhos automaticos que disparam quando voce bate neles durante o desenvolvimento.

**Referencia Oficial:**
https://docs.github.com/en/copilot/reference/customization-cheat-sheet

---

## Habilidade Desbloqueada!

**Sofia agora domina os Warp Pipes e Prompt Files.**
Ela encontrou a Sala dos Warp Pipes e agora sabe criar atalhos reutilizaveis para qualquer destino no Mushroom Kingdom...

Voce completou o capitulo sobre Prompt Files e agora domina a arte de criar Warp Pipes reutilizaveis!

**CONHECIMENTO ADQUIRIDO:**
- O que sao Prompt Files e como funcionam
- Formato .prompt.md com frontmatter e body
- Diferenca entre Prompts (Warp Pipes) e Instructions (Gravidade)
- Os 3 Warp Pipes principais do TodoApp
- Boas praticas para criar canos poderosos
- Como implementar em seu repositorio
- Padroes de reuso e composicao

**PROXIMA MISSAO:**
Implemente os Prompt Files em seu repositorio GitHub e use-os para acelerar seu desenvolvimento agentico. Combine os tres Warp Pipes (componente, endpoint, migracao) para criar features completas — como usar o Warp Zone para viajar entre mundos e coletar tudo que precisa!

Parabens, Sofia! Voce esta cada vez mais forte no Mushroom Kingdom do Agentic DevOps!

---

## References

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Customizing Copilot](https://docs.github.com/en/copilot/customizing-copilot)
- [Using Copilot Agent Mode](https://docs.github.com/en/copilot/using-github-copilot/using-copilot-agent-mode)
