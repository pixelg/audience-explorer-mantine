# Audience Explorer - Mantine UI

------------------------------

## Purpose
_SparrowTV's Audience Explorer enables media companies to create and manage precise audience segments, combining sophisticated ad performance analytics with demographic insights to discover untapped markets and deliver more relevant content to viewers._

## Tech Stack
- **Frontend Library:** [React v19](https://react.dev/blog/2024/12/05/react-19#whats-new-in-react-19)
- **Runtime:** [Nodejs v23](https://nodejs.org/en)
- **Package/Dependency manager:** [pnpm v10](https://pnpm.io)
- **Language:** [Typescript v5](https://www.typescriptlang.org)
- **UI Components:** [Mantine Components Library](https://mantine.dev/), [Storybook v8.5](https://storybook.js.org/)
- **Libraries:** [Tanstack Router](https://tanstack.com/router/latest)
- **Tooling, testing, build:** [Vite](https://vite.dev/), vite-test, [Playwright](https://playwright.dev/)
- **SCM CI/CD:** Git, GitHub, GitHub Actions, GitHub Projects
- **Chart/Graph** TODO: [nivo](https://nivo.rocks/bar/)
---

## Run Locally

```bash
# clone the repository
git clone https://github.com/pixelg/audience-explorer-mantine.git .
# change into project directory
cd audience-explorer
# install dependencies NOTE: npm install can also be used, but pnpm usually has much better performance
pnpm install
# run in dev mode
pnpm dev
```
--------------------
## Adding/Editing Features

```bash
git checkout dev
git checkout -b my-feature-branch
```
## Setting Up Local Environment

The environment can be setup in multiple ways. The project was initialized using the nvm (node version manager) environment with the node 20 runtime target (currently using nodejs v23). The following commands were used to complete the initialization:

```bash
    # install pnpm globally 
    npm install pnpm -g
    # create a vite react/ts project
    pnpm create vite audience-explore --template react-ts
    # install dependencies
    pnpm install
```

As of FEB 2025 this is the preferred way [pnpm install docs](https://pnpm.io/installation):

```aiignore
# install corepack globally
npm install --global corepack@latest
# corepack method
corepack enable pnpm
# (OPTIONAL) to pin the pnpm version used in the project
corepack use pnpm@latest-10
# (OPTIONAL) upgrade to latest pnpm
pnpm add pnpm -g
```
_Note: maybe go back to using yarn or try out bun_
