<h1 align="center">✨ I work with Redux ✨</h1>

<p align="center">
  <img src="https://img.shields.io/badge/22.14.0-white?logo=node.js&logoColor=white&label=Node.js&labelColor=5FA04E" />
  <img src="https://img.shields.io/badge/^19-white?logo=react&logoColor=white&label=React&labelColor=61DAFB" />
  <img src="https://img.shields.io/badge/5.0.1-white?logo=redux&label=Redux&labelColor=764abc" />
  <img src="https://img.shields.io/badge/9.2.0-white?logo=redux&label=React%20Redux&labelColor=764abc" />
  <img src="https://img.shields.io/github/license/edvein-rin/who-wants-to-be-a-millionaire.svg?color=white" />
<p>

<p align="center">
A simple cash register challenge game to showcase <b>Redux</b> skills.</br>
Covers <b>stores</b>, <b>reducers</b>, <b>actions</b>, <b>action creators</b>, <b>selectors</b>, <b>middlewares</b> and <b>thunks</b>.
</p>

## Implemented concepts

**Store**: holds information about loaded products, current customer, etc.  
**Actions**: represents cashier actions (add a bill to exchange, remove a bill from exchange, give exchange to customer etc).  
**Reducers**: a single reducer to operate over all actions.  
**Selectors**: get customer basket price, get customer money, get customer change.  
**Middlewares**: logger.  
**Thunks**: loads products with prices from a free API.

## Setup

Requires [nvm](https://github.com/nvm-sh/nvm) and [pnpm](https://pnpm.io/installation).

```bash
nvm install
nvm use
pnpm install
```

## Run

```
pnpm dev
```
