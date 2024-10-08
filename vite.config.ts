import type { CommonServerOptions } from 'vite'
import fs from 'node:fs'
import process from 'node:process'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import TurboConsole from 'unplugin-turbo-console/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv, version } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log(`
    Vite: ${version}
    Command: ${command}
    Mode: ${mode}
    `)
  const env = loadEnv(mode, process.cwd())

  // The entry file for the micro-frontend.
  // Default: "./public/entry.json"
  const entryPath = './public/entry.json'

  // Read the entry file.
  let entryJson
  if (fs.existsSync(entryPath)) {
    const entryFileJson = JSON.parse(fs.readFileSync(entryPath, 'utf-8'))
    entryJson = entryFileJson.entry
  }

  // The base path for the development server.
  // Usally it's like "/modules/app-name" depending on the /public/entry.json file.
  const devBase = entryJson ? entryJson.substring(0, entryJson.lastIndexOf('/')) : './'

  // The base path for the production server.
  // Default: "./"
  const prodBase = './'

  // Enable the global proxy for the development server.
  // Default: based on the VITE_REMOTE_SERVER_IP environment variable.
  const enableGlobalProxy = env.VITE_REMOTE_SERVER_IP ?? false

  // Enable the proxy for the development server.
  const useProxy = false

  // Custom proxy settings
  const proxy = {
    // "^/chat.*": { target: "http://10.0.0.65:8001", changeOrigin: true },
  } as CommonServerOptions['proxy']

  // globalProxyTarget:
  // The target server for the global proxy. except the custom proxy settings.
  const globalProxyTarget = `http://${env.VITE_REMOTE_SERVER_IP}:${env.VITE_REMOTE_SERVER_PORT ?? 80}`
  const globalProxy = (() => {
    const result = {} as CommonServerOptions['proxy']
    const excludePaths = [
      devBase,
      ...Object.keys(proxy).map(key => key.replace('^', '').replace('.*', '')),
    ].join('|')
    result[`^(?!${excludePaths})/.*`] = {
      target: globalProxyTarget,
      changeOrigin: true,
      ws: true,
    }
    return result
  })()

  // The mode of the current build.
  const isDevMode = mode === 'development'
  // The base path for the current build.
  const base = isDevMode ? devBase : prodBase

  // Display the proxy settings.
  isDevMode && enableGlobalProxy && console.log('Global Proxy Target:', globalProxyTarget)
  isDevMode && console.log('Dev Base:', base)

  return {
    base,
    plugins: [
      vue(),
      vueJsx(),
      UnoCSS(),
      Components({
        dts: 'src/types/components.d.ts',
        resolvers: [IconsResolver({})],
      }),
      AutoImport({
        dts: 'src/types/auto-imports.d.ts',
        imports: ['vue', 'vue-router', 'vue-i18n'],
      }),
      VueI18nPlugin({
        include: ['./src/locales/**'],
      }),
      Icons({
        autoInstall: true,
        compiler: 'vue3',
      }),
      TurboConsole({}),
    ],
    server: {
      proxy: {
        ...(enableGlobalProxy ? globalProxy : {}),
        ...(useProxy ? proxy : {}),
      },
    },
  }
})
