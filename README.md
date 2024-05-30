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
    - Install all recommended extensions from `.vscode/extensions.json` (workspace)
      - [Vue Volar extension Pack](https://marketplace.visualstudio.com/items?itemName=MisterJ.vue-volar-extention-pack)
      - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
      - [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
      - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)
      - [NPM](https://marketplace.visualstudio.com/items?itemName=idered.npm)
      - [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
      - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally)

## Features

- Base Framework
  - Vite
    - @vitejs/plugin-vue [📖](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue)
    - @vitejs/plugin-vue-jsx [📖](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx)
    - @intlify/unplugin-vue-i18n/vite [📖](https://www.npmjs.com/package/@intlify/unplugin-vue-i18n)
    - unplugin-icons (autoInstall enabled) [📖](https://github.com/unplugin/unplugin-icons) [🎭](https://icones.js.org/)
    - unplugin-auto-import [📖](https://github.com/unplugin/unplugin-auto-import)
    - unplugin-vue-components [📖](https://github.com/unplugin/unplugin-vue-components)
  - Vue3
    - @vueuse/core [📖](https://vueuse.org/functions.html)
    - vue-i18n [📖](https://vue-i18n.intlify.dev/)
    - vue-router [📖](https://router.vuejs.org/)
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
