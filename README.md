<div align="center">
  <a style="margin-bottom:1rem" href="#" target="_blank">
    <img src="https://sistemas-shoetrak.github.io/shoetrak-assets/images/logo-primary-reduce.svg" alt="Shoetrak logo" width="250" height="auto" />
  </a>
  <h2 style="font-size:3rem">
    Shoetrak
  </h2>
</div>

Localize seus calçados!

# Shoetrak Monorepo

Mono repositório da Shoetrak, aqui todos os aplicativos e pacotes levam aos calçados!

Feito com muito ❤️👟🎯!

## Índice

- [Shoetrak Monorepo](#shoetrak-monorepo)
  - [Índice](#índice)
  - [1. Iniciando](#1-iniciando)
  - [2. Estrutura de Diretórios](#2-estrutura-de-diretórios)
  - [3. Aplicativos e Pacotes](#3-aplicativos-e-pacotes)
  - [4. Desenvolvendo](#4-desenvolvendo)
    - [4.1 Todos os Aplicativos e Pacotes](#41-todos-os-aplicativos-e-pacotes)
    - [4.2 Aplicativo Específico](#42-aplicativo-específico)
    - [4.3 Pacote Específico](#43-pacote-específico)
    - [4.4 Instalando/Removendo Depêndencias](#44-instalandoremovendo-depêndencias)
  - [5. Construindo](#5-construindo)
  - [6. Referências](#6-referências)
    - [6.1 Turbo Repo](#61-turbo-repo)
  - [7. Glosário](#7-glosário)
 

## 1. Iniciando

O repositório único da Shoetrak foi concebido para armazenar todos os pacotes cruciais e compartilhados para o desenvolvimento da plataforma SaaS voltada para o rastreamento e vendas de calçados, destinada a pequenos comércios.

Suas principais dependências são:

- [Node.Js](https://nodejs.org/en/) - motor javascript;
- [Npm.Js](https://www.npmjs.com/) - gerenciador de pacotes;
- [React.Js](https://pt-br.legacy.reactjs.org/) - construtor de interfaces declarativas e reativas;
- [Next.Js](https://nextjs.org/) - framework para o react;
- [Tailwind CSS](https://tailwindcss.com/) - motor css;
- [Shadcn UI](https://ui.shadcn.com/) - biblioteca de componentes baseados em tailwind;
- [Turbo Repo](https://turbo.build/repo) - gerenciador de mono repositórios;
- [Prisma ORM](https://www.prisma.io/) - gerenciador modelo objeto relacional de bancos de dados;
- [PostgreSQL](https://www.postgresql.org/) - sistema gerenciador de bancos de dados.

Suas principais funcionalidades são:

- Agrupar o desenvolvimento de pacotes para o Shoetrak SaaS.

**Setup Linux:**

Para configurar o projeto localmente, é necessário ter instalado o Git, uma conexão SSH com o GitHub, o NVM (Node Version Manager), o Node.js na versão 18.20.2 e o NPM (Node Package Manager) na versão 10.5.0. Após garantir que todas as dependências estejam instaladas, siga o guia passo a passo abaixo.

```shell
  # Clone o projeto do github. São necessárias permissões de acesso ao repositório do projeto.
  git clone git@github.com:sistemas-shoetrak/shoetrak-monorepo.git

  # Navegue até o diretório do projeto.
  cd shoetrak-monorepo

  # Ative o ambiente node na versão necessária. Ela será automaticamente inferida a partir do arquivo .nvmrc contido no projeto.
  nvm use

  # Instale as dependências do projeto.
  npm install
  # OU
  npm i

  # Copie e renomeia o exemplo de variáveis de ambiente
  cp .env.example .env
```

Após isso você já terá um ambiente de desenvolvimento pronto para o uso.

## 2. Estrutura de Diretórios

Representação ASCII da estrutura atual de diretórios do monorepositório.

```
<root>
├── apps
│   ├── shoetrak-app
│   └── shoetrak-docs
└── packages
    ├── data-domain
    ├── eslint-config
    ├── typescript-config
    └── ui
```

- **\<root\>** - raiz do projeto, equivalente a `shoetrak-monorepo`;
- **apps** - localização dos aplicativos;
- **packages** - localização dos pacotes reutilizáveis.


## 3. Aplicativos e Pacotes

Os aplicativos e pacotes atualmente contidos neste resporitório são:

- [**shoetrak-app**](./apps/shoetrak-app/): aplicativo web SaaS da Shoetrak;
- [**shoetrak-docs**](./apps/shoetrak-docs/): documentação de uso do aplicativo web da Shoetrak;
- [**@shoetrak/data-domain**](./packages/data-domain/): domínio de dados da Shoetrak, ele contém as migrações, DDL, DML, DQL, DTL, DCL e clientes orm tipados para realizar operações com dados;
- [**@shoetrak/eslint-config**](./packages/eslint-config/): configuração compartilhada de checagem semântica para typescript;
- [**@shoetrak/typescript-config**](./packages/typescript-config/): configuração compartilhada de typescript;
- [**@shoetrak/ui**](./packages/ui/): biblioteca de componentes de interface reutilizáveis.

Para entender melhor o contexto, desenvolvimento e construção de um aplicativo ou pacote, busque pelo seu arquivo ***README.md***.

## 4. Desenvolvendo

Considerando que este é um mono reposítório construido com o turbo, existem algumas formas diferentes de se desenvolver os pacotes e aplicações.

### 4.1 Todos os Aplicativos e Pacotes

Para desenvolver todos os aplicativos e pacotes contidos neste mono repositório ao mesmo tempo, siga o passo a passo abaixo.

**Linux:**

```shell
  cd shoetrak-monorepo

  npm run dev
```

Isso executará o comando dev em todos os aplicativos e pacotes existentes no repositório, após isso é só seguir com o desenvolvimento.

### 4.2 Aplicativo Específico

Para desenvolver um aplicativo específico, siga o passo a passo abaixo.

**Linux:**

```shell
  cd shoetrak-monorepo/app/<nome_do_aplicativo>

  npm run dev
```

Isso executará o comando dev apenas desse aplicativo, após isso é só seguir com o desenvolvimento.

### 4.3 Pacote Específico

Para desenvolver um pacote específico, siga o passo a passo abaixo.

**Linux:**

```shell
  cd shoetrak-monorepo/packages/<nome_do_pacote>

  npm run dev
```

Isso executará o comando dev apenas desse pacote, após isso é só seguir com o desenvolvimento.

### 4.4 Instalando/Removendo Depêndencias

Para instalar ou remover uma dependência de forma global no mono repositório basta estar na raiz do projeto (shoetrak monorepo) e executar o comando `npm {<install>,<remove>} [-D] <nome_da_dependencia>`, é recomendado que apenas dependências para uso de construção e desenvolvimento sejam instaladas de forma global.

Para instalar dependencias de forma individual nos aplicativos e pacotes, basta utilizar o comando `npm install [-D] <nome_da_dependencia> -w {<nome_do_aplicativo>,<nome_do_pacote>}`. Esta é a forma preferida de instalar depêndencias quando ela for ser utilizada em apenas um local específico.

## 5. Construindo

Para construir todos os pacotes e aplicativos, utilize o comando a seguir:

``` shell
  cd my-turborepo

  npm run build
```

## 6. Referências

Referências de documentações úteis.

### 6.1 Turbo Repo

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## 7. Glosário

- **\<valor\>:** Em um contexto de interface de linha de comandos (CLI), representa um valor requerido que deve ser substituído por aquilo que descreve. Exemplo: `npm run <task>` = `npm run dev`, neste caso o valor `dev`é o nome da `task`.
  
- **\[valor\]:** Em um contexto de interface de linha de comandos (CLI), representa um valor opcional e que deve ser substituído por aquilo que descreve. Exemplo: `npm install [-D] <nome_do_pacote>` = `npm run -D typescript` = `npm install typescript`, neste caso o valor `-D` é opcional e pode ser seguramente ignorado.
  
- **\(valorA|valorB&valorC\):** Em um contexto de interface de linha de comandos (CLI), representa o agrupamento de multiplos valores. Isso indica que aquilo contido deve ser tomado em conjunto, antes do que está fora dele. Exemplo: .

- **\{valorA|valorB&valorC\}:** Em um contexto de interface de linha de comandos (CLI), representam multiplos valores que devem ser substituídos por aquilo que descrevem. Um pipe (|) indica que deve ser utilizado um valor OU o outro. Já o ê comercial (&) indica que ambos valores devem ser utilizados. Exemplo: `npm install [-D] {pacote_a|pacote_c&pdacote_d}`, neste caso o pacote A OU o pacote B devem ser utilizados E o pacote C.

- **DDL (Data Definition Language):** Linguagem de Definição de Dados.
São os comandos que interagem com os objetos do banco. São comandos DDL: CREATE, ALTER e DROP.

- **DML (Data Manipulation Language):** Linguagem de Manipulação de Dados.
São os comandos que interagem com os dados dentro das tabelas. São comandos DML: INSERT, DELETE e UPDATE.

- **DQL (Data Query Language):** Linguagem de Consulta de dados.
São os comandos de consulta. São comandos DQL: SELECT (é o comando de consulta). Aqui cabe um parenteses. Em alguns livros o SELECT fica na DML em outros tem esse grupo próprio.

- **DTL (Data Transaction Language):** Linguagem de Transação de Dados.
São os comandos para controle de transação. São comandos DTL: BEGIN TRANSACTION, COMMIT E ROLLBACK.

- **DCL (Data Control Language):** Linguagem de Controle de Dados.
São os comandos para controlar a parte de segurança do banco de dados. São comandos DCL: GRANT, REVOKE E DENY.

---

[**⬆️ Voltar ao início**](#shoetrak-monorepo)
