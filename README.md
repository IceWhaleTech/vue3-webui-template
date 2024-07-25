# IceWhale Vue3 WebUI Template (ZexUI Preview)

## Vite + Vue3 + TypeScript + PrimeVue + UnoCSS + Wujie

This template should help get you started developing with [Vue 3](https://vuejs.org/) and TypeScript in [Vite](https://vitejs.dev/).

[PrimeVue](https://primevue.org/) and [UnoCSS](https://unocss.dev/) are also pre-built to accelerate UI development.

Uses the [Wujie](https://wujie-micro.github.io/doc/) framework to allow WebApp to run independently or embedded in any WebUI project. Including [CasaOS](https://www.casaos.io) and `ZimaOS`.

Plugins for [UnoCSS](https://unocss.dev/) and [ESLint](https://eslint.org/) have been configured to enhance the development experience.

The template uses Vue 3 `<script setup>` SFCs , check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Usage

### `degit` Template

The recommended package manager is [pnpm](https://pnpm.io/)

```bash
pnpx degit IceWhaleTech/vue3-webui-template#zexui my-project

cd my-project
pnpm i
```

### Recommended IDE Setup

[VS Code](https://code.visualstudio.com/)
- Workspace (Recommended):
  - Rename `vue3-webui.code-workspace` to `your-project-name.code-workspace`
  - Open `your-project-name.code-workspace`
- Settings:
  - Follow the `your-project-name.code-workspace` settings (recommended)
  - Copy `vue3-webui.code-workspace` settings section to `.vscode/settings.json`
- Extensions:
  - Disable
    - Non-essential Extensions (Recommended)
  - Install all recommended extensions
    - From `vue3-webui.code-workspace` (recommended)
    - From `.vscode/extensions.json`

## Features

**Base Framework**
- Vite
  - @vitejs/plugin-vue [📖](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue)
  - @vitejs/plugin-vue-jsx [📖](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx)
  - @intlify/unplugin-vue-i18n [📖](https://www.npmjs.com/package/@intlify/unplugin-vue-i18n)
  - unplugin-icons (autoInstall enabled) [📖](https://github.com/unplugin/unplugin-icons) [🎭](https://icones.js.org/)
  - unplugin-auto-import [📖](https://github.com/unplugin/unplugin-auto-import)
  - unplugin-vue-components [📖](https://github.com/unplugin/unplugin-vue-components)
  - unplugin-turbo-console [📖](https://github.com/unplugin/unplugin-turbo-console)
- Vue3
  - @vueuse/core [📖](https://vueuse.org/functions.html)
  - vue-i18n [📖](https://vue-i18n.intlify.dev/)
  - vue-router [📖](https://router.vuejs.org/)
- TypeScript
- UI Framework
- PrimeVue [📖](https://primevue.org/)
  - ZexUI [📖](https://github.com/IceWhaleTech/zexui)
- UnoCSS [📖](https://tailwindcss.com/docs)
  - preset-zex [📖](https://github.com/IceWhaleTech/preset-zex)
- Micro Frontend
- Wujie [📖](https://wujie-micro.github.io/doc/)

**Developer Experience**
- VSCode
  - settings.json
  - extensions.json
  - .code-workspace
- ESLint
  - antfu/eslint-config [📖](https://github.com/antfu/eslint-config)
