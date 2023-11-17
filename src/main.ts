import App from "./App.vue";
import "./style.css";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-dark-blue/theme.css";
import { createApp } from "vue";

let app: ReturnType<typeof createApp>;
function mountApp() {
  app = createApp(App);
  app.use(PrimeVue, { ripple: false });
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
