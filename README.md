# IceWhale Vue3 WebUI Template

> ## Vite + Vue3 + TypeScript + PrimeVue + TailwindCSS + Wujie

## Usage

```bash
pnpx degit IceWhaleTech/vue3-webui-template my-project

cd my-project
pnpm i
```

### Recommended VSCode Setup

1. Open `.code-workspace` in VSCode
2. Disable all extensions (at least in workspace)
3. Disable `@builtin TypeScript and JavaScript Language Features` (workspace)
4. Install all recommended extensions from `.vscode/extensions.json` (workspace)
5. Change `Format Document` to `Prettier - Code formatter`


## Features

- Base Framework
  - [x] Vite
  - [x] Vue3
  - [x] TypeScript
- UI Framework
   - [x] PrimeVue
      - PrimeIcons
   - [x] TailwindCSS
      - @tailwindcss/typography
      - @tailwindcss/container-queries
      - tailwindcss-animate
- Micro Frontend
   - [x] Wujie
- Developer Experience
   - VSCode
      - settings.json
      - extensions.json
      - .code-workspace
   - [x] Prettier
      - prettier-plugin-organize-attributes
      - @trivago/prettier-plugin-sort-imports
      - prettier-plugin-tailwindcss





This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
