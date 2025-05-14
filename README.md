<h1 align="center">✨ I work with Redux ✨</h1>

<p align="center">
  <img src="https://img.shields.io/badge/22.14.0-white?logo=node.js&logoColor=white&label=Node.js&labelColor=5FA04E" />
  <img src="https://img.shields.io/badge/^19-white?logo=react&logoColor=white&label=React&labelColor=61DAFB" />
  <img src="https://img.shields.io/badge/5.0.1-white?logo=redux&label=Redux&labelColor=764abc" />
  <img src="https://img.shields.io/badge/9.2.0-white?logo=redux&label=React Redux&labelColor=764abc" />
  <img src="https://img.shields.io/github/license/edvein-rin/who-wants-to-be-a-millionaire.svg?color=white" />
<p>

<p align="center">
A simple clicker game to showcase <b>Redux</b> skills.</br>
Covers <b>stores</b>, <b>reducers</b>, <b>actions</b>, <b>action creators</b>, <b>selectors</b>, <b>middlewares</b> and <b>thunks</b>.
</p>

## Details

I tried to pick a project to showcase all main possibilities of **Redux**.

**Store**: holds current money, money per second, modifiers, etc.  
**Actions**: add money on click, add money per second.  
**Reducers**: a single reducer to operate over all actions.  
**Selectors**: get current money, get stats for money over time.  
**Middlewares**: logger.  
**Thunks**: add money over time.

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
