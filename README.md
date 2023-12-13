# IceWhale Vue3 WebUI Template

## Vite + Vue3 + TypeScript + PrimeVue + TailwindCSS + Wujie

This template should help get you started developing with [Vue 3](https://vuejs.org/) and TypeScript in [Vite](https://vitejs.dev/).

[PrimeVue](https://primevue.org/) and [Tailwind CSS](https://tailwindcss.com/) are also pre-built to accelerate UI development.

Uses the [Wujie](https://wujie-micro.github.io/doc/) framework to allow WebApp to run independently or embedded in any WebUI project. Including [CasaOS](https://www.casaos.io) and `ZimaOS`.

Plugins for Tailwind CSS and [Prettier](https://prettier.io/) have been configured to enhance the development experience.

The template uses Vue 3 `<script setup>` SFCs , check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Usage

### `degit` Template

The recommended package manager is [pnpm](https://pnpm.io/)

```bash
pnpx degit IceWhaleTech/vue3-webui-template my-project

cd my-project
pnpm i
```

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
  - Settings:
    - Use Workspace ([vue3-webui.code-workspace](./vue3-webui.code-workspace))
    - Change `Format Document` to `Prettier - Code formatter`
  - Extensions:
    - Disable
      - Unused extensions (workspace)
      - Vetur (workspace)
      - `@builtin TypeScript and JavaScript Language Features` (workspace)
    - Install all recommended extensions from `.vscode/extensions.json` (workspace)
      - [Vue Volar extension Pack](https://marketplace.visualstudio.com/items?itemName=MisterJ.vue-volar-extention-pack)
      - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
      - [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

#### Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Features

- Base Framework
  - Vite
    - @vitejs/plugin-vue [📖](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue)
    - @vitejs/plugin-vue-jsx [📖](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx)
    - @intlify/unplugin-vue-i18n/vite [📖](https://www.npmjs.com/package/@intlify/unplugin-vue-i18n)
  - Vue3
    - @vueuse/core [📖](https://vueuse.org/functions.html)
    - vue-i18n [📖](https://vue-i18n.intlify.dev/)
  - TypeScript
- UI Framework
  - PrimeVue [📖](https://primevue.org/installation/)
    - PrimeIcons [📖](https://primevue.org/icons)
  - Tailwind CSS [📖](https://tailwindcss.com/docs)
    - @tailwindcss/typography [📖](https://tailwindcss.com/docs/typography-plugin)
    - @tailwindcss/container-queries [📖](https://github.com/tailwindlabs/tailwindcss-container-queries)
    - tailwindcss-animate [📖](https://github.com/jamiebuilds/tailwindcss-animate)
    - tailwind-scrollbar [📖](https://adoxography.github.io/tailwind-scrollbar/examples)
- Micro Frontend
  - Wujie [📖](https://wujie-micro.github.io/doc/)
- Developer Experience
  - VSCode
    - settings.json
    - extensions.json
    - .code-workspace
  - Prettier
    - prettier-plugin-organize-attributes [📖](https://github.com/NiklasPor/prettier-plugin-organize-attributes)
    - @trivago/prettier-plugin-sort-imports [📖](https://github.com/trivago/prettier-plugin-sort-imports)
    - prettier-plugin-tailwindcss [📖](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
