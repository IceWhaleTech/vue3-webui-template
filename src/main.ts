import App from "./App.vue";
import { i18n } from "./i18n";
import router from "./router";
import "./style.css";
import { pt } from "./tailwind";
import PrimeVue, { PrimeVueConfiguration } from "primevue/config";
// import "primevue/resources/themes/lara-dark-blue/theme.css";
import Tooltip from "primevue/tooltip";
import { createApp } from "vue";

let app: ReturnType<typeof createApp>;
function mountApp() {
  app = createApp(App);
  app.use(i18n);
  app.use(router);
  app.use(PrimeVue, { unstyled: true, pt: pt } as PrimeVueConfiguration);
  app.directive("tooltip", Tooltip);
  app.mount("#app");
}
function unmountApp() {
  app.unmount();
}

// Handle App Mount and Unmount
if (window.__POWERED_BY_WUJIE__) {
  window.__WUJIE_MOUNT = mountApp;
  window.__WUJIE_UNMOUNT = unmountApp;
} else {
  mountApp();
}
