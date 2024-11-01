# IceWhale Vue3 WebUI Template

## Vite + Vue3 + TypeScript + ZexUI + UnoCSS + Wujie

This template should help get you started developing with [Vue 3](https://vuejs.org/) and TypeScript in [Vite](https://vitejs.dev/).

`ZexUI` (with [PrimeVue](https://primevue.org/) & [Naivue UI](https://www.naiveui.com/)) and [UnoCSS](https://unocss.dev/) are also pre-built to accelerate UI development.

Uses the [Wujie](https://wujie-micro.github.io/doc/) framework to allow WebApp to run independently or embedded in any WebUI project. Including [CasaOS](https://www.casaos.io) and `ZimaOS`.

Plugins for [UnoCSS](https://unocss.dev/), [Iconify](https://iconify.design/) and [ESLint](https://eslint.org/) have been configured to enhance the development experience.

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

[VS Code](https://code.visualstudio.com/)
- Workspace (Recommended):
  1. Rename `vue3-webui.code-workspace` to `my-project-name.code-workspace`
  2. Open `my-project-name.code-workspace`
- Settings:
  - Follow the `my-project-name.code-workspace` settings (recommended)
  - Copy `vue3-webui.code-workspace` settings section to `.vscode/settings.json`
- Extensions:
  1. Disable
    - Non-essential Extensions (Recommended)
  2. Install all recommended extensions
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

**UI Framework**
- ZexUI [📖](https://zexui.pages.dev) [📦](https://github.com/IceWhaleTech/zexui)
  - PrimeVue [📖](https://primevue.org/)
  - Naive UI [📖](https://www.naiveui.com/)
- UnoCSS ([📖](https://unocss.dev/), [Taiwind 📖](https://tailwindcss.com/docs))
  - preset-zex [📦](https://github.com/IceWhaleTech/preset-zex)
    - ZexUI Colors [📖](https://github.com/IceWhaleTech/preset-zex/blob/main/src/colors.ts)
    - presetUno [📖](https://unocss.dev/presets/uno)
    - presetIcons [📖](https://unocss.dev/presets/icons) [🎭](https://icones.js.org/)
      - Recommended Format: `i-pkg-name:icon-name`
      - autoInstall enabled
      - `icewhale-icons-json` included as `iw`
    - presetTypography [📖](https://unocss.dev/presets/typography)

**Micro Frontend**
- Wujie [📖](https://wujie-micro.github.io/doc/)

**Developer Experience**
- VSCode
  - extensions.json
  - .code-workspace
- ESLint
  - antfu/eslint-config [📖](https://github.com/antfu/eslint-config)
