---
title: "Fase 3-2 -- O Console de Comandos: Terminal"
description: "Domine o Terminal — o menu de debug/cheats do desenvolvedor. Bash, PowerShell, comandos essenciais e o poder dos Warp Pipes (|) que conectam comandos"
author: "Paula Silva | Microsoft Latam Software GBB"
date: "2026-03-18"
version: "1.0.0"
status: "draft"
tags: ["agentic-devops", "mario", "world-3", "terminal", "bash", "powershell", "cli"]
---

# Fase 3-2 -- O Console de Comandos: Terminal

---

## Change Log

| Versao | Data       | Autor                                      | Descricao                     |
|--------|------------|--------------------------------------------|-------------------------------|
| 1.0.0  | 2026-03-18 | Paula Silva - Microsoft Latam Software GBB | Criacao inicial (Edicao Mario)|

---

## Sumario

- [Prologo: O Menu Secreto](#prologo-o-menu-secreto)
- [1. O Que e o Terminal?](#1-o-que-e-o-terminal)
  - [1.1 A Interface Antes da Interface](#11-a-interface-antes-da-interface)
  - [1.2 Terminal vs GUI: Controle vs Botao](#12-terminal-vs-gui-controle-vs-botao)
  - [1.3 Por Que Todo Desenvolvedor Precisa do Terminal?](#13-por-que-todo-desenvolvedor-precisa-do-terminal)
- [2. Shells: Os Diferentes Controles](#2-shells-os-diferentes-controles)
  - [2.1 Bash -- O Controle Classico](#21-bash----o-controle-classico)
  - [2.2 Zsh -- O Controle Pro](#22-zsh----o-controle-pro)
  - [2.3 PowerShell -- O Controle da Microsoft](#23-powershell----o-controle-da-microsoft)
  - [2.4 Tabela Comparativa: Shells](#24-tabela-comparativa-shells)
  - [2.5 Qual Shell Escolher?](#25-qual-shell-escolher)
- [3. Navegacao: Andando pelo Mushroom Kingdom](#3-navegacao-andando-pelo-mushroom-kingdom)
  - [3.1 pwd -- Onde Estou?](#31-pwd----onde-estou)
  - [3.2 ls -- Olhar ao Redor](#32-ls----olhar-ao-redor)
  - [3.3 cd -- Caminhar Ate um Lugar](#33-cd----caminhar-ate-um-lugar)
  - [3.4 Caminhos Absolutos vs Relativos](#34-caminhos-absolutos-vs-relativos)
  - [3.5 Diagrama: O Sistema de Arquivos como Mapa](#35-diagrama-o-sistema-de-arquivos-como-mapa)
- [4. Manipulacao de Arquivos: Construindo e Destruindo Blocos](#4-manipulacao-de-arquivos-construindo-e-destruindo-blocos)
  - [4.1 mkdir -- Construir um Bloco](#41-mkdir----construir-um-bloco)
  - [4.2 touch -- Criar um Item](#42-touch----criar-um-item)
  - [4.3 cp -- Duplicar um Item](#43-cp----duplicar-um-item)
  - [4.4 mv -- Mover/Renomear um Item](#44-mv----moverenomear-um-item)
  - [4.5 rm -- Destruir um Bloco](#45-rm----destruir-um-bloco)
  - [4.6 Tabela Completa: Manipulacao de Arquivos](#46-tabela-completa-manipulacao-de-arquivos)
- [5. Leitura de Arquivos: Investigando Conteudo](#5-leitura-de-arquivos-investigando-conteudo)
  - [5.1 cat -- Ler Tudo de Uma Vez](#51-cat----ler-tudo-de-uma-vez)
  - [5.2 head e tail -- Espiar o Comeco e o Final](#52-head-e-tail----espiar-o-comeco-e-o-final)
  - [5.3 less -- Ler Pagina por Pagina](#53-less----ler-pagina-por-pagina)
  - [5.4 wc -- Contar Linhas, Palavras, Caracteres](#54-wc----contar-linhas-palavras-caracteres)
- [6. Busca: Encontrando Segredos Escondidos](#6-busca-encontrando-segredos-escondidos)
  - [6.1 grep -- O Detector de Padroes](#61-grep----o-detector-de-padroes)
  - [6.2 find -- O Explorador de Mapas](#62-find----o-explorador-de-mapas)
  - [6.3 which -- Onde Esta o Programa?](#63-which----onde-esta-o-programa)
- [7. Pipes e Redirecionamento: Warp Pipes Conectando Comandos](#7-pipes-e-redirecionamento-warp-pipes-conectando-comandos)
  - [7.1 O Pipe (|) -- O Warp Pipe dos Comandos](#71-o-pipe----o-warp-pipe-dos-comandos)
  - [7.2 Redirecionamento (> e >>) -- Salvar em Arquivo](#72-redirecionamento--e-----salvar-em-arquivo)
  - [7.3 Exemplos Praticos de Pipes Encadeados](#73-exemplos-praticos-de-pipes-encadeados)
- [8. Permissoes: Quem Pode Fazer O Que](#8-permissoes-quem-pode-fazer-o-que)
  - [8.1 O Sistema de Permissoes do Linux/macOS](#81-o-sistema-de-permissoes-do-linuxmacos)
  - [8.2 chmod -- Mudar Permissoes](#82-chmod----mudar-permissoes)
  - [8.3 sudo -- O Star Power](#83-sudo----o-star-power)
- [9. Variaveis de Ambiente: Configuracoes Secretas](#9-variaveis-de-ambiente-configuracoes-secretas)
  - [9.1 O Que Sao Variaveis de Ambiente?](#91-o-que-sao-variaveis-de-ambiente)
  - [9.2 PATH -- O Mapa de Atalhos](#92-path----o-mapa-de-atalhos)
  - [9.3 Arquivos .env -- O Bolso Secreto](#93-arquivos-env----o-bolso-secreto)
- [10. Scripts: Automatizando Combos](#10-scripts-automatizando-combos)
  - [10.1 Seu Primeiro Script Bash](#101-seu-primeiro-script-bash)
  - [10.2 Scripts com Parametros](#102-scripts-com-parametros)
  - [10.3 Condicionais e Loops](#103-condicionais-e-loops)
- [11. Comandos Essenciais para Desenvolvedores](#11-comandos-essenciais-para-desenvolvedores)
  - [11.1 Git no Terminal](#111-git-no-terminal)
  - [11.2 npm/Node.js no Terminal](#112-npmnodejs-no-terminal)
  - [11.3 Docker no Terminal](#113-docker-no-terminal)
- [12. Dicas Pro: Atalhos e Truques](#12-dicas-pro-atalhos-e-truques)
  - [12.1 Os 10 Atalhos que Salvam Tempo](#121-os-10-atalhos-que-salvam-tempo)
  - [12.2 Historico de Comandos](#122-historico-de-comandos)
  - [12.3 Aliases: Criando Seus Proprios Atalhos](#123-aliases-criando-seus-proprios-atalhos)
- [Resumo -- O que Aprendemos na Fase 3-2](#resumo----o-que-aprendemos-na-fase-3-2)
- [Referencias](#referencias)

---

## Prologo: O Menu Secreto

Sofia estava frustrada. Ela sabia clicar em botoes, arrastar pastas, e usar menus. Mas toda vez que um tutorial dizia "abra o terminal e digite...", ela sentia um frio na barriga. A tela preta com um cursor piscando parecia hostil, como uma porta trancada para uma dimensao desconhecida.

Yoshi apareceu voando e pousou ao lado dela.

*"Sofia, voce tem medo do terminal?"* perguntou Yoshi com um sorriso.

*"Parece coisa de hacker. Eu nao sei o que estou fazendo la."*

Yoshi riu. *"Sabe aqueles menus secretos de cheat nos jogos? Aqueles que voce abre com um combo de botoes e de repente tem poderes infinitos? O terminal e EXATAMENTE isso. E o menu de debug/cheat do seu computador. Enquanto outros usuarios ficam limitados aos botoes que alguem desenhou para eles, voce -- com o terminal -- tem acesso a TUDO."*

*"Tudo?"*

*"Tudo. Cada arquivo, cada processo, cada configuracao. E mais: voce pode COMBINAR comandos como combos de luta. Um comando sozinho e um soco. Dois comandos conectados por um pipe sao um combo devastador. Tres? Fatality."*

Sofia abriu o terminal. O cursor piscava, esperando.

*"Vamos comecar pelo basico,"* disse Yoshi. *"ls = olhar ao redor. cd = caminhar. mkdir = construir um bloco. Simples como A, B, Start."*

---

## 1. O Que e o Terminal?

### 1.1 A Interface Antes da Interface

Antes dos icones, antes das janelas, antes do mouse -- existia o terminal. E assim que humanos se comunicavam com computadores por decadas: digitando comandos de texto e recebendo respostas de texto.

O terminal e uma **interface de linha de comando** (CLI -- Command Line Interface). Em vez de clicar em botoes, voce **digita instrucoes**. Em vez de ver icones bonitos, voce **le respostas em texto**.

> **ANALOGIA MARIO:** O terminal e o **menu de debug/cheat** do jogo. A GUI (interface grafica) e o jogo normal -- bonito, intuitivo, com botoes e menus. O terminal e o modo onde voce digita codigos secretos e tem acesso a funcoes que o jogo normal esconde. Na GUI voce clica em "Criar Pasta". No terminal voce digita `mkdir minha-pasta` -- mais rapido, mais poderoso, e com muito mais opcoes.

**O que o terminal NÃO e:**

- Nao e perigoso (a menos que voce delete coisas sem pensar)
- Nao e so para hackers (todo dev usa diariamente)
- Nao e dificil (os comandos basicos sao simples)
- Nao e ultrapassado (e MAIS eficiente que a GUI para muitas tarefas)

### 1.2 Terminal vs GUI: Controle vs Botao

| Caracteristica | GUI (Interface Grafica) | Terminal (CLI) |
|---------------|------------------------|----------------|
| **Como funciona** | Clica em botoes | Digita comandos |
| **Velocidade** | Limitada por menus | Rapida apos aprender |
| **Poder** | So o que esta visivel | Acesso a TUDO |
| **Automacao** | Dificil | Facil (scripts) |
| **Curva de aprendizado** | Baixa | Media (depois fica facil) |
| **Precisao** | Boa para tarefas simples | Excelente para tarefas complexas |
| **Reprodutibilidade** | Dificil de repetir | Facil (copie o comando) |

> **ANALOGIA MARIO:** GUI e como jogar Mario com **botoes na tela touch** -- funciona, mas e limitado e lento. Terminal e como jogar com um **controle de verdade** -- no inicio voce precisa aprender onde ficam os botoes, mas depois de decorar, voce e 10x mais rapido e preciso.

### 1.3 Por Que Todo Desenvolvedor Precisa do Terminal?

1. **Git funciona no terminal** -- commits, branches, merges
2. **npm/Node.js funciona no terminal** -- instalar pacotes, rodar projetos
3. **Docker funciona no terminal** -- containers, imagens, volumes
4. **Deploy funciona no terminal** -- cloud CLIs (az, aws, gcloud)
5. **Automacao so e possivel no terminal** -- scripts, CI/CD
6. **Debug avancado precisa do terminal** -- logs, processos, rede
7. **Servidores so tem terminal** -- nada de GUI na nuvem
8. **Tutoriais usam terminal** -- 90% das instrucoes sao comandos

**Fato importante:** Servidores em producao (onde sua aplicacao roda na nuvem) **nao tem interface grafica**. So terminal. Se voce nao sabe usar terminal, voce nao consegue gerenciar sua aplicacao em producao.

---

## 2. Shells: Os Diferentes Controles

### 2.1 Bash -- O Controle Classico

**Bash** (Bourne Again SHell) e o shell mais usado no mundo. E o padrao em Linux e era o padrao em macOS ate recentemente.

```bash
# Bash e como o controle do SNES -- classico, confiavel, todo mundo conhece
$ echo "Eu sou o Bash!"
Eu sou o Bash!
```

**Onde encontrar:**
- Linux: Ja vem instalado
- macOS: Disponivel (Zsh e o padrao agora)
- Windows: Via WSL (Windows Subsystem for Linux) ou Git Bash

**Caracteristicas:**
- Simples e direto
- Toneladas de documentacao e tutoriais
- Funciona em qualquer servidor Linux
- Sintaxe de script amplamente conhecida

### 2.2 Zsh -- O Controle Pro

**Zsh** (Z Shell) e o shell padrao do macOS moderno. E como um Bash turbinado com auto-complete inteligente, temas visuais, e plugins.

```zsh
# Zsh e como o controle do Switch Pro -- tudo do classico + extras
$ echo "Eu sou o Zsh!"
Eu sou o Zsh!
```

**Diferencial:** Com o framework **Oh My Zsh**, voce ganha:
- Auto-complete avancado (digita metade, aperta Tab)
- Temas visuais (seu terminal fica bonito)
- Plugins para Git, Docker, Node, etc.
- Historico inteligente

### 2.3 PowerShell -- O Controle da Microsoft

**PowerShell** e o shell da Microsoft. Diferente de Bash/Zsh, ele trabalha com **objetos** em vez de texto puro.

```powershell
# PowerShell e como o controle do Xbox -- ecossistema Microsoft
PS> Write-Output "Eu sou o PowerShell!"
Eu sou o PowerShell!
```

**Diferencial:**
- Nativo no Windows
- Integrado com Azure e Microsoft 365
- Cmdlets descritivos (Get-Process, Set-Location)
- Trabalha com objetos (mais estruturado que texto)

### 2.4 Tabela Comparativa: Shells

| Caracteristica | Bash | Zsh | PowerShell |
|---------------|------|-----|-----------|
| **Sistema padrao** | Linux | macOS | Windows |
| **Tipo de dados** | Texto | Texto | Objetos |
| **Auto-complete** | Basico | Excelente | Bom |
| **Plugins** | Poucos | Muitos (Oh My Zsh) | Modulos |
| **Scripts** | .sh | .zsh | .ps1 |
| **Uso em servidores** | Dominante | Raro | Windows Server |
| **Curva de aprendizado** | Baixa | Baixa | Media |
| **Analogia Mario** | Controle SNES | Controle Switch Pro | Controle Xbox |

### 2.5 Qual Shell Escolher?

**Recomendacao para iniciantes:**
- **macOS:** Use Zsh (ja e o padrao) + instale Oh My Zsh
- **Windows:** Instale WSL2 + use Bash/Zsh dentro do Linux
- **Linux:** Use Bash (ja vem) ou instale Zsh

**Regra de ouro:** Aprenda Bash primeiro. Os comandos basicos (ls, cd, mkdir, etc.) funcionam em Bash E Zsh. PowerShell tem comandos diferentes, mas muitos aliases que imitam Bash.

---

## 3. Navegacao: Andando pelo Mushroom Kingdom

O sistema de arquivos do seu computador e como o **mapa do Mushroom Kingdom**. Tem pastas (mundos), subpastas (fases), e arquivos (itens). Navegar e andar por esse mapa.

### 3.1 pwd -- Onde Estou?

`pwd` (**P**rint **W**orking **D**irectory) mostra onde voce esta agora.

```bash
$ pwd
/home/sofia/projetos

# Analogia: Voce apertou SELECT e o mapa mostrou sua posicao
# Voce esta no mundo "home", no reino "sofia", na fase "projetos"
```

> **ANALOGIA MARIO:** `pwd` e como **abrir o mapa** no jogo. Voce ve exatamente em qual mundo e fase esta. Antes de caminhar para qualquer lugar, sempre bom saber onde voce esta.

### 3.2 ls -- Olhar ao Redor

`ls` (**L**i**S**t) mostra o que existe no lugar onde voce esta.

```bash
$ ls
README.md  package.json  src/  node_modules/  .gitignore

# Analogia: Voce olhou ao redor e viu os itens e caminhos disponiveis
```

**Variacoes uteis:**

```bash
# ls -la = visao completa (itens escondidos + detalhes)
$ ls -la
total 48
drwxr-xr-x   8 sofia  staff   256 Mar 18 10:00 .
drwxr-xr-x   5 sofia  staff   160 Mar 17 09:00 ..
-rw-r--r--   1 sofia  staff    40 Mar 18 10:00 .gitignore    # item escondido!
-rw-r--r--   1 sofia  staff   890 Mar 18 10:00 README.md
-rw-r--r--   1 sofia  staff  1200 Mar 18 10:00 package.json
drwxr-xr-x  12 sofia  staff   384 Mar 18 10:00 src

# ls -lh = tamanhos legiveis (KB, MB em vez de bytes)
$ ls -lh
-rw-r--r--  1 sofia  staff   890B Mar 18 10:00 README.md
-rw-r--r--  1 sofia  staff   1.2K Mar 18 10:00 package.json
```

> **ANALOGIA MARIO:** `ls` e como **olhar ao redor na fase**. Voce ve os blocos, moedas, canos e inimigos. `ls -la` e olhar com a lupa -- revela itens escondidos (arquivos ocultos como `.gitignore`) que normalmente sao invisiveis.

### 3.3 cd -- Caminhar Ate um Lugar

`cd` (**C**hange **D**irectory) te move para outra pasta.

```bash
# Entrar numa pasta (caminhar para uma fase)
$ cd src
$ pwd
/home/sofia/projetos/src

# Voltar uma pasta (voltar para o mapa do mundo)
$ cd ..
$ pwd
/home/sofia/projetos

# Voltar para Home (teleportar para o inicio)
$ cd ~
$ pwd
/home/sofia

# Ir para qualquer lugar (caminho absoluto)
$ cd /home/sofia/projetos/src/components
```

> **ANALOGIA MARIO:** `cd` e como **andar pelo mapa**. `cd pasta` = entrar numa fase. `cd ..` = voltar para o mapa do mundo. `cd ~` = voltar para o castelo inicial. `cd /caminho/completo` = warp pipe direto para qualquer ponto do mapa.

**Dica profissional:** Use **Tab** para auto-completar nomes de pastas. Comece a digitar e aperte Tab:

```bash
$ cd pro[TAB]
$ cd projetos/    # completa automaticamente!
```

### 3.4 Caminhos Absolutos vs Relativos

**Caminho Absoluto** = endereco completo desde a raiz:
```bash
$ cd /home/sofia/projetos/meu-app/src
# E como dar o endereco completo: "Mushroom Kingdom > World 3 > Fase 2 > Area Secreta"
```

**Caminho Relativo** = endereco a partir de onde voce esta:
```bash
$ cd src/components
# E como dizer: "A partir de onde estou, va para src, depois components"
```

**Atalhos de caminho:**

| Atalho | Significado | Analogia Mario |
|--------|-----------|----------------|
| `.` | Pasta atual | Onde voce esta agora |
| `..` | Pasta pai (acima) | Voltar um nivel no mapa |
| `~` | Pasta Home do usuario | Castelo inicial |
| `/` | Raiz do sistema | O Mushroom Kingdom inteiro |
| `-` | Pasta anterior | Voltar para onde voce estava |

### 3.5 Diagrama: O Sistema de Arquivos como Mapa

```
/ (raiz -- O Mushroom Kingdom inteiro)
├── home/
│   └── sofia/ (~  -- Seu castelo)
│       ├── projetos/
│       │   ├── todo-app/          -- Projeto principal
│       │   │   ├── src/           -- Codigo fonte
│       │   │   │   ├── components/ -- Fases aereas
│       │   │   │   ├── pages/      -- Mundos
│       │   │   │   └── utils/      -- Itens uteis
│       │   │   ├── package.json   -- Inventario
│       │   │   └── .gitignore     -- Lista de itens escondidos
│       │   └── portfolio/         -- Segundo projeto
│       ├── Downloads/             -- Loja de itens
│       └── .bashrc                -- Configuracoes secretas
├── usr/
│   └── bin/                       -- Ferramentas instaladas
├── tmp/                           -- Itens temporarios
└── etc/                           -- Regras do sistema
```

---

## 4. Manipulacao de Arquivos: Construindo e Destruindo Blocos

### 4.1 mkdir -- Construir um Bloco

`mkdir` (**M**a**K**e **DIR**ectory) cria pastas.

```bash
# Criar uma pasta
$ mkdir meu-projeto

# Criar pastas aninhadas de uma vez (-p = parents)
$ mkdir -p meu-projeto/src/components

# Analogia: Construir um bloco. Com -p, construir uma torre de blocos.
```

> **ANALOGIA MARIO:** `mkdir` e como **construir um bloco** no modo editor. Voce cria estrutura para organizar sua fase. `mkdir -p` e construir uma escadaria inteira de uma vez -- cria todos os blocos intermediarios automaticamente.

### 4.2 touch -- Criar um Item

`touch` cria arquivos vazios.

```bash
# Criar um arquivo
$ touch index.html

# Criar varios arquivos de uma vez
$ touch style.css script.js README.md

# Analogia: Colocar itens vazios (moedas, blocos "?") prontos para preencher
```

### 4.3 cp -- Duplicar um Item

`cp` (**C**o**P**y) copia arquivos ou pastas.

```bash
# Copiar arquivo
$ cp original.txt copia.txt

# Copiar pasta inteira (-r = recursivo)
$ cp -r pasta-original/ pasta-copia/

# Analogia: Duplicar um bloco. O original continua onde esta.
```

### 4.4 mv -- Mover/Renomear um Item

`mv` (**M**o**V**e) move OU renomeia.

```bash
# Mover arquivo para outra pasta
$ mv arquivo.txt pasta/

# Renomear arquivo (mover para o mesmo lugar com nome diferente)
$ mv nome-velho.txt nome-novo.txt

# Analogia: Arrastar um bloco para outra posicao na fase
```

### 4.5 rm -- Destruir um Bloco

`rm` (**R**e**M**ove) deleta arquivos e pastas. **CUIDADO: nao tem lixeira no terminal!**

```bash
# Deletar arquivo
$ rm arquivo-inutil.txt

# Deletar pasta e todo conteudo (-r = recursivo, -f = force)
$ rm -rf pasta-inteira/

# PERIGO: NUNCA faca isso
$ rm -rf /    # Isso DESTROI o sistema inteiro. NUNCA.
```

> **ANALOGIA MARIO:** `rm` e como **destruir um bloco permanentemente**. Diferente do jogo, nao tem "desfazer". O bloco some para sempre. `rm -rf /` e como destruir o Mushroom Kingdom inteiro -- Game Over permanente. **SEMPRE** pense duas vezes antes de usar `rm`.

**Dica de seguranca:** Antes de deletar, use `ls` para ver o que esta na pasta. Melhor verificar do que lamentar.

### 4.6 Tabela Completa: Manipulacao de Arquivos

| Comando | O que faz | Analogia Mario | Exemplo |
|---------|----------|----------------|---------|
| `mkdir` | Cria pasta | Construir bloco | `mkdir src` |
| `mkdir -p` | Cria pastas aninhadas | Torre de blocos | `mkdir -p a/b/c` |
| `touch` | Cria arquivo vazio | Colocar item vazio | `touch app.js` |
| `cp` | Copia | Duplicar bloco | `cp a.txt b.txt` |
| `cp -r` | Copia pasta | Duplicar mundo | `cp -r src/ backup/` |
| `mv` | Move/Renomeia | Arrastar bloco | `mv old.js new.js` |
| `rm` | Deleta arquivo | Destruir item | `rm temp.txt` |
| `rm -rf` | Deleta pasta toda | Destruir mundo | `rm -rf build/` |
| `rmdir` | Deleta pasta vazia | Destruir bloco vazio | `rmdir pasta-vazia/` |

---

## 5. Leitura de Arquivos: Investigando Conteudo

### 5.1 cat -- Ler Tudo de Uma Vez

`cat` (**C**onc**AT**enate) mostra o conteudo inteiro de um arquivo.

```bash
$ cat package.json
{
  "name": "todo-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  }
}

# Analogia: Abrir um bau e ver todo o conteudo de uma vez
```

**Quando usar:** Arquivos pequenos (ate 50 linhas). Para arquivos grandes, use `less`.

### 5.2 head e tail -- Espiar o Comeco e o Final

```bash
# Ver as primeiras 10 linhas
$ head arquivo.txt

# Ver as primeiras 5 linhas
$ head -n 5 arquivo.txt

# Ver as ultimas 10 linhas
$ tail arquivo.txt

# Ver as ultimas 20 linhas
$ tail -n 20 arquivo.txt

# SUPERPODER: Ver logs em tempo real (-f = follow)
$ tail -f logs/app.log
# Mostra novas linhas conforme aparecem! Perfeito para debug.
```

> **ANALOGIA MARIO:** `head` e como espiar o **comeco de uma fase** antes de entrar. `tail` e como ver o **final** (onde esta o boss?). `tail -f` e como ter uma **camera ao vivo** mostrando o que esta acontecendo na fase em tempo real.

### 5.3 less -- Ler Pagina por Pagina

```bash
$ less arquivo-grande.txt

# Dentro do less:
# Espaco    = proxima pagina
# b         = pagina anterior
# /palavra  = buscar "palavra"
# q         = sair
```

### 5.4 wc -- Contar Linhas, Palavras, Caracteres

```bash
$ wc arquivo.txt
  100   450  3200 arquivo.txt
# 100 linhas, 450 palavras, 3200 caracteres

# So linhas
$ wc -l arquivo.txt
100 arquivo.txt

# Contar arquivos numa pasta
$ ls | wc -l
15
```

---

## 6. Busca: Encontrando Segredos Escondidos

### 6.1 grep -- O Detector de Padroes

`grep` (**G**lobal **R**egular **E**xpression **P**rint) busca texto dentro de arquivos. E o comando mais poderoso para encontrar coisas.

```bash
# Buscar a palavra "error" em um arquivo
$ grep "error" logs/app.log

# Buscar em todos os arquivos de uma pasta (-r = recursivo)
$ grep -r "TODO" src/

# Buscar ignorando maiusculas/minusculas (-i)
$ grep -ri "password" .

# Buscar e mostrar numero da linha (-n)
$ grep -rn "function" src/*.js

# Buscar e contar ocorrencias (-c)
$ grep -c "import" src/App.tsx
12
```

> **ANALOGIA MARIO:** `grep` e como o **detector de blocos secretos**. Voce sabe que tem algo escondido mas nao sabe onde. O `grep` varre toda a fase e marca exatamente onde encontrou o que voce procura. `grep -r "bug"` e como pedir: "mostre-me todos os bugs escondidos no reino inteiro."

**Exemplos praticos para devs:**

```bash
# Encontrar todos os TODOs no projeto
$ grep -rn "TODO" src/

# Encontrar onde uma funcao e usada
$ grep -rn "handleSubmit" src/

# Encontrar imports de um pacote
$ grep -rn "from 'react'" src/

# Encontrar variaveis de ambiente sendo usadas
$ grep -rn "process.env" src/
```

### 6.2 find -- O Explorador de Mapas

`find` busca **arquivos e pastas** pelo nome, tipo, tamanho, data, etc.

```bash
# Encontrar todos os arquivos .tsx na pasta src
$ find src -name "*.tsx"

# Encontrar todos os arquivos modificados nas ultimas 24h
$ find . -mtime -1

# Encontrar arquivos maiores que 1MB
$ find . -size +1M

# Encontrar e deletar todos os .log (CUIDADO!)
$ find . -name "*.log" -delete
```

> **ANALOGIA MARIO:** `grep` busca **conteudo dentro dos blocos** (texto dentro de arquivos). `find` busca **os blocos em si** (arquivos por nome, tipo, tamanho). Use `grep` para "o que tem dentro?" e `find` para "onde esta?".

### 6.3 which -- Onde Esta o Programa?

```bash
# Onde o Node.js esta instalado?
$ which node
/usr/local/bin/node

# Onde o Git esta?
$ which git
/usr/bin/git

# O programa esta instalado?
$ which docker
/usr/local/bin/docker
```

---

## 7. Pipes e Redirecionamento: Warp Pipes Conectando Comandos

### 7.1 O Pipe (|) -- O Warp Pipe dos Comandos

O **pipe** (`|`) e o conceito mais poderoso do terminal. Ele pega a **saida de um comando** e manda como **entrada para outro comando**. Exatamente como um **Warp Pipe** no Mario: voce entra num cano e sai em outro lugar.

```bash
# Sem pipe (dois comandos separados)
$ ls -la           # Lista todos os arquivos
$ grep ".tsx"      # Procura .tsx (mas procura em que?)

# Com pipe (conectados pelo Warp Pipe!)
$ ls -la | grep ".tsx"
# ls lista tudo → pipe envia a lista → grep filtra so .tsx
```

> **ANALOGIA MARIO:** O pipe `|` e literalmente um **Warp Pipe verde**. O Mario (dados) entra pela abertura de cima (saida do primeiro comando) e sai pela abertura de baixo (entrada do segundo comando). Voce pode encadear quantos pipes quiser -- como uma rede de canos subterraneos transportando Mario por toda a fase.

**Exemplos progressivos:**

```bash
# 1 pipe: Listar processos e filtrar node
$ ps aux | grep node

# 2 pipes: Listar, filtrar e contar
$ ps aux | grep node | wc -l

# 3 pipes: Buscar, filtrar, ordenar e pegar top 5
$ grep -r "import" src/ | grep ".tsx" | sort | head -5

# Pipe completo de um dev no dia a dia:
$ git log --oneline | head -10
# Mostra os 10 ultimos commits de forma limpa
```

### 7.2 Redirecionamento (> e >>) -- Salvar em Arquivo

```bash
# > salva em arquivo (SOBRESCREVE)
$ echo "Hello World" > hello.txt

# >> adiciona ao final (APPEND)
$ echo "Outra linha" >> hello.txt

# Salvar saida de um comando em arquivo
$ ls -la > lista-arquivos.txt

# Salvar erros em um arquivo separado
$ npm build 2> erros.log

# Salvar tudo (saida + erros) em um arquivo
$ npm build &> build-completo.log
```

> **ANALOGIA MARIO:** `>` e como um **Warp Pipe que leva para um bau** -- tudo que sai do comando e guardado no arquivo. `>>` e um pipe que **adiciona ao bau** sem apagar o que ja tinha. `>` sozinho **esvazia o bau primeiro**.

### 7.3 Exemplos Praticos de Pipes Encadeados

```bash
# Contar quantos arquivos TypeScript existem no projeto
$ find . -name "*.ts" -o -name "*.tsx" | wc -l

# Ver quais pacotes estao instalados e buscar um especifico
$ npm list | grep react

# Encontrar os 5 maiores arquivos do projeto
$ find . -type f -exec du -h {} + | sort -rh | head -5

# Ver quem mais contribuiu (commits por autor)
$ git log --format='%an' | sort | uniq -c | sort -rn

# Buscar TODOs e organizar por arquivo
$ grep -rn "TODO" src/ | sort

# Monitorar logs filtrando so erros
$ tail -f app.log | grep "ERROR"
```

---

## 8. Permissoes: Quem Pode Fazer O Que

### 8.1 O Sistema de Permissoes do Linux/macOS

Cada arquivo tem tres tipos de permissao para tres grupos de usuarios:

```
-rwxr-xr--  1  sofia  staff  arquivo.sh
│├─┤├─┤├─┤
│ │   │  └── Others (todos os outros): r-- (so leitura)
│ │   └───── Group (grupo): r-x (leitura + execucao)
│ └───────── Owner (dono): rwx (leitura + escrita + execucao)
└─────────── Tipo (- = arquivo, d = diretorio)
```

| Letra | Permissao | Numero | Analogia Mario |
|-------|----------|--------|----------------|
| `r` | Read (ler) | 4 | Ver a fase |
| `w` | Write (escrever) | 2 | Modificar a fase |
| `x` | Execute (executar) | 1 | Jogar a fase |
| `-` | Sem permissao | 0 | Fase bloqueada |

### 8.2 chmod -- Mudar Permissoes

```bash
# Dar permissao de execucao ao dono
$ chmod u+x script.sh

# Dar todas as permissoes ao dono (rwx = 7)
$ chmod 755 script.sh
# 7 = dono (rwx), 5 = grupo (r-x), 5 = outros (r-x)

# Tornar arquivo somente leitura
$ chmod 444 importante.txt
```

**Tabela de numeros comuns:**

| Numero | Permissao | Uso Tipico |
|--------|----------|-----------|
| `755` | rwxr-xr-x | Scripts executaveis |
| `644` | rw-r--r-- | Arquivos normais |
| `700` | rwx------ | Arquivos privados |
| `600` | rw------- | Chaves SSH, .env |

### 8.3 sudo -- O Star Power

`sudo` (**S**uper **U**ser **DO**) executa um comando como administrador. E o **Star Power** do terminal.

```bash
# Instalar programa (precisa de permissao admin)
$ sudo apt install docker
[sudo] password for sofia: ****

# Editar arquivo do sistema
$ sudo nano /etc/hosts
```

> **ANALOGIA MARIO:** `sudo` e como pegar a **Star** (estrela de invencibilidade). Temporariamente, voce tem poder absoluto sobre o sistema. Pode ir onde quiser, fazer o que quiser. Mas assim como a Star, use com CUIDADO -- poder absoluto significa que voce pode destruir coisas absolutamente.

**Regra de seguranca:** Nunca use `sudo` sem entender o que o comando faz. E como usar a Star para correr pela fase sem olhar -- voce pode derrubar coisas que nao deveria.

---

## 9. Variaveis de Ambiente: Configuracoes Secretas

### 9.1 O Que Sao Variaveis de Ambiente?

Variaveis de ambiente sao **configuracoes que o sistema e seus programas consultam**. Sao como as **regras escondidas** do jogo que afetam o comportamento sem voce ver.

```bash
# Ver uma variavel de ambiente
$ echo $HOME
/home/sofia

$ echo $USER
sofia

# Ver TODAS as variaveis de ambiente
$ env

# Criar uma variavel temporaria
$ export MEU_NOME="Sofia"
$ echo $MEU_NOME
Sofia
```

### 9.2 PATH -- O Mapa de Atalhos

A variavel `PATH` e a mais importante. Ela diz ao terminal **onde procurar programas**.

```bash
$ echo $PATH
/usr/local/bin:/usr/bin:/bin:/home/sofia/.local/bin

# O terminal procura programas nessas pastas, na ordem:
# 1. /usr/local/bin
# 2. /usr/bin
# 3. /bin
# 4. /home/sofia/.local/bin
```

> **ANALOGIA MARIO:** O `PATH` e como o **mapa de Warp Zones**. Quando voce digita `node`, o terminal nao sabe onde `node` esta. Ele consulta o `PATH` e verifica cada localizacao na lista ate encontrar. Se `node` nao esta em nenhuma pasta do `PATH`, o terminal diz "comando nao encontrado" -- como tentar entrar num Warp Zone que nao existe no mapa.

### 9.3 Arquivos .env -- O Bolso Secreto

Arquivos `.env` guardam configuracoes sensiveis (senhas, chaves de API, URLs de banco de dados):

```bash
# Arquivo .env
DATABASE_URL=postgresql://user:senha@localhost:5432/meubanco
API_KEY=sk-abc123def456
SECRET_KEY=minha-chave-super-secreta
NODE_ENV=development
```

**REGRA DE OURO:** Arquivos `.env` NUNCA vao para o Git. Sempre adicione ao `.gitignore`:

```bash
$ echo ".env" >> .gitignore
```

> **ANALOGIA MARIO:** O `.env` e o **bolso secreto** do Mario. Guarda chaves do castelo, senhas de portas secretas, e credenciais de acesso. Voce NUNCA mostra o conteudo do bolso para ninguem (nunca faz commit do `.env`). Se alguem roubar suas chaves, pode entrar em todos os seus castelos.

---

## 10. Scripts: Automatizando Combos

### 10.1 Seu Primeiro Script Bash

Um script e uma sequencia de comandos salvos em um arquivo. Em vez de digitar 10 comandos toda vez, voce roda 1 script.

```bash
#!/bin/bash
# setup-projeto.sh -- Configura um novo projeto

echo "Criando estrutura do projeto..."
mkdir -p src/{components,pages,utils}
mkdir -p tests
mkdir -p docs

echo "Criando arquivos iniciais..."
touch src/index.ts
touch src/components/.gitkeep
touch tests/.gitkeep
touch README.md
touch .gitignore
touch .env.example

echo "Inicializando Git..."
git init
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore

echo "Projeto criado com sucesso!"
```

Para rodar:

```bash
$ chmod +x setup-projeto.sh    # Dar permissao de execucao
$ ./setup-projeto.sh           # Rodar o script
```

> **ANALOGIA MARIO:** Um script e como **gravar um combo de botoes** e depois executar tudo com um unico botao. Em vez de apertar Cima, Cima, Baixo, Baixo, Esquerda, Direita, A, B, Start... voce aperta um botao e o combo executa sozinho. Quanto mais combos voce grava, menos trabalho repetitivo voce tem.

### 10.2 Scripts com Parametros

```bash
#!/bin/bash
# criar-componente.sh -- Cria um componente React

NOME=$1  # Primeiro parametro

if [ -z "$NOME" ]; then
    echo "Uso: ./criar-componente.sh NomeDoComponente"
    exit 1
fi

mkdir -p "src/components/$NOME"

cat > "src/components/$NOME/$NOME.tsx" << EOF
import React from 'react';

interface ${NOME}Props {
  // props aqui
}

export const $NOME: React.FC<${NOME}Props> = () => {
  return (
    <div>
      <h1>$NOME</h1>
    </div>
  );
};
EOF

cat > "src/components/$NOME/$NOME.test.tsx" << EOF
import { render, screen } from '@testing-library/react';
import { $NOME } from './$NOME';

describe('$NOME', () => {
  it('deve renderizar corretamente', () => {
    render(<$NOME />);
    expect(screen.getByText('$NOME')).toBeInTheDocument();
  });
});
EOF

echo "Componente $NOME criado com sucesso!"
```

### 10.3 Condicionais e Loops

```bash
#!/bin/bash
# verificar-projeto.sh -- Verifica se o projeto esta saudavel

echo "Verificando projeto..."

# Condicional: verificar se node_modules existe
if [ -d "node_modules" ]; then
    echo "node_modules encontrado"
else
    echo "node_modules NAO encontrado. Rodando npm install..."
    npm install
fi

# Loop: verificar cada arquivo obrigatorio
ARQUIVOS=("package.json" "tsconfig.json" ".gitignore" "README.md")

for arquivo in "${ARQUIVOS[@]}"; do
    if [ -f "$arquivo" ]; then
        echo "[OK] $arquivo encontrado"
    else
        echo "[FALTA] $arquivo nao encontrado!"
    fi
done

# Verificar se Git esta inicializado
if [ -d ".git" ]; then
    echo "[OK] Git inicializado"
    echo "Branch atual: $(git branch --show-current)"
else
    echo "[FALTA] Git nao inicializado!"
fi

echo "Verificacao completa!"
```

---

## 11. Comandos Essenciais para Desenvolvedores

### 11.1 Git no Terminal

```bash
# Fluxo diario de Git
$ git status                    # Ver o que mudou
$ git add .                     # Adicionar tudo ao staging
$ git commit -m "feat: add login page"  # Salvar snapshot
$ git push                      # Enviar para GitHub
$ git pull                      # Baixar atualizacoes
$ git log --oneline -10         # Ver ultimos 10 commits
$ git branch                    # Ver branches
$ git checkout -b nova-feature  # Criar e trocar de branch
```

### 11.2 npm/Node.js no Terminal

```bash
# Gerenciamento de projetos Node.js
$ npm init -y                   # Criar package.json
$ npm install react             # Instalar pacote
$ npm install -D jest           # Instalar como dev dependency
$ npm run dev                   # Rodar script de desenvolvimento
$ npm run build                 # Compilar para producao
$ npm test                      # Rodar testes
$ npx create-next-app@latest    # Executar sem instalar globalmente
```

### 11.3 Docker no Terminal

```bash
# Comandos Docker essenciais (preview da Fase 3-3!)
$ docker build -t meu-app .     # Construir imagem
$ docker run -p 3000:3000 meu-app  # Rodar container
$ docker ps                     # Ver containers rodando
$ docker stop <id>              # Parar container
$ docker-compose up             # Subir todos os servicos
$ docker-compose down           # Derrubar todos os servicos
```

---

## 12. Dicas Pro: Atalhos e Truques

### 12.1 Os 10 Atalhos que Salvam Tempo

| Atalho | O que faz | Tempo economizado |
|--------|----------|-------------------|
| `Tab` | Auto-completa | 50% de digitacao |
| `Ctrl+C` | Cancela comando em execucao | Salva da espera infinita |
| `Ctrl+L` | Limpa a tela | Organizacao visual |
| `Ctrl+R` | Busca no historico | Nao precisa redigitar |
| `Ctrl+A` | Vai para o inicio da linha | Navegacao rapida |
| `Ctrl+E` | Vai para o final da linha | Navegacao rapida |
| `Ctrl+W` | Apaga palavra anterior | Edicao rapida |
| `Ctrl+U` | Apaga a linha inteira | Reset rapido |
| `!!` | Repete ultimo comando | Reexecucao |
| `sudo !!` | Repete com sudo | Correcao rapida de permissao |

### 12.2 Historico de Comandos

```bash
# Ver historico completo
$ history

# Buscar no historico (interativo)
$ Ctrl+R  # digite parte do comando

# Reexecutar comando especifico
$ !42     # executa o comando numero 42 do historico

# Ver ultimos 20 comandos
$ history | tail -20
```

### 12.3 Aliases: Criando Seus Proprios Atalhos

Aliases sao atalhos personalizados. Adicione ao seu `~/.bashrc` ou `~/.zshrc`:

```bash
# Aliases uteis para devs
alias ll='ls -la'
alias gs='git status'
alias gc='git commit -m'
alias gp='git push'
alias gl='git log --oneline -20'
alias dev='npm run dev'
alias build='npm run build'
alias dc='docker-compose'
alias dcu='docker-compose up -d'
alias dcd='docker-compose down'

# Aliases criativos
alias please='sudo'                # please apt install docker
alias oops='git reset --soft HEAD~1'  # desfazer ultimo commit (mantendo alteracoes)
```

Depois de adicionar, ative:

```bash
$ source ~/.zshrc    # ou ~/.bashrc
```

> **ANALOGIA MARIO:** Aliases sao como **remapear os botoes do controle**. Em vez de apertar L+R+A+B para um combo, voce mapeia tudo para um unico botao. `gs` em vez de `git status`. `dcu` em vez de `docker-compose up -d`. Seu controle, suas regras.

---

## Resumo -- O que Aprendemos na Fase 3-2

| Conceito | Comando(s) | Analogia Mario |
|---------|-----------|----------------|
| Terminal | CLI | Menu de debug/cheat |
| Shell | Bash, Zsh, PowerShell | Tipos de controle |
| Onde estou | `pwd` | Abrir mapa |
| Olhar ao redor | `ls` | Observar a fase |
| Caminhar | `cd` | Mover pelo mapa |
| Construir bloco | `mkdir` | Criar estrutura |
| Criar item | `touch` | Posicionar item vazio |
| Copiar | `cp` | Duplicar bloco |
| Mover | `mv` | Arrastar bloco |
| Destruir | `rm` | Destruir permanentemente |
| Ler conteudo | `cat`, `less`, `head`, `tail` | Abrir bau |
| Buscar texto | `grep` | Detector de segredos |
| Buscar arquivo | `find` | Explorador de mapa |
| Pipe (`\|`) | Conectar comandos | Warp Pipe entre comandos |
| Permissoes | `chmod`, `sudo` | Chaves e Star Power |
| Variaveis | `export`, `.env` | Configuracoes secretas |
| Scripts | `.sh` | Combos automatizados |
| Aliases | `alias` | Remapear controle |

**A grande licao:** O terminal nao e seu inimigo -- e seu superpoder. Cada comando que voce aprende e um novo botao no seu controle. E quanto mais botoes voce domina, mais combos devastadores voce pode executar. Nenhum desenvolvedor de verdade sobrevive sem o terminal. Abrace-o.

---

## Referencias

- [Bash Reference Manual -- GNU](https://www.gnu.org/software/bash/manual/bash.html)
- [Linux Command Line Basics -- Ubuntu](https://ubuntu.com/tutorials/command-line-for-beginners)
- [The Linux Command Line -- William Shotts (livro gratuito)](https://linuxcommand.org/tlcl.php)
- [Oh My Zsh -- Framework para Zsh](https://ohmyz.sh/)
- [PowerShell Documentation -- Microsoft](https://learn.microsoft.com/pt-br/powershell/)
- [ExplainShell -- Explica qualquer comando](https://explainshell.com/)
- [tldr pages -- Documentacao simplificada de comandos](https://tldr.sh/)
- [Bash Scripting Tutorial -- Ryan's Tutorials](https://ryanstutorials.net/bash-scripting-tutorial/)
- [WSL Documentation -- Microsoft](https://learn.microsoft.com/pt-br/windows/wsl/)
- [Terminal Tips -- VS Code Docs](https://code.visualstudio.com/docs/terminal/basics)

---

*Fase 3-2 completa! Voce dominou o Terminal -- o menu secreto que transforma qualquer pessoa em power user. Na proxima fase, vamos aprender a empacotar aplicacoes inteiras com Docker -- a lunchbox magica do desenvolvedor.*
