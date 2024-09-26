import type { ZexPrimeVueConfiguration } from 'zexui/primevue'
import Tooltip from 'primevue/tooltip'
import { createApp } from 'vue'
import ZexPrimeVue from 'zexui/primevue'
import App from './App.vue'
import { i18n } from './i18n'
import router from './router'

import '@unocss/reset/tailwind-compat.css'
import './style.css'
import 'virtual:uno.css'

let app: ReturnType<typeof createApp>
function mountApp() {
  app = createApp(App)
  app.use(i18n)
  app.use(router)
  app.use(ZexPrimeVue, {} as ZexPrimeVueConfiguration)
  app.directive('tooltip', Tooltip)
  app.mount('#app')
}
function unmountApp() {
  app.unmount()
}

// Handle App Mount and Unmount
if (window.__POWERED_BY_WUJIE__) {
  window.__WUJIE_MOUNT = mountApp
  window.__WUJIE_UNMOUNT = unmountApp
}
else {
  mountApp()
}
