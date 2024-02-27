import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Icons from "unplugin-icons/vite";
import { CommonServerOptions, defineConfig } from "vite";

// The base path for the development server.
// Usally it's like "/modules/app-name" depending on the /public/entry.json file.
const devBase = "./";

// The base path for the production server.
// Default: "./"
const prodBase = "./";

// Enable the proxy for the development server.
const useProxy = false;
// Enable the global proxy for the development server.
const useGlobalProxy = false;

// Custom proxy settings
const proxy = {
  // "^/chat.*": { target: "http://10.0.0.65:8001", changeOrigin: true },
} as CommonServerOptions["proxy"];

// globalProxyTarget:
// The target server for the global proxy. except the custom proxy settings.
const globalProxyTarget = "http://10.0.0.65";
const globalProxy = (() => {
  const result = {} as CommonServerOptions["proxy"];
  const excludePaths = [
    devBase,
    ...Object.keys(proxy).map((key) => key.replace("^", "").replace(".*", "")),
  ].join("|");
  result[`^(?!${excludePaths})/.*`] = {
    target: globalProxyTarget,
    changeOrigin: true,
    ws: true,
  };
  return result;
})();

const isDevMode = process.env.NODE_ENV === "development";
const base = isDevMode ? devBase : prodBase;
console.log("base:", base);

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [
    vue(),
    vueJsx(),
    VueI18nPlugin({
      include: ["./src/locales/**"],
    }),
    Icons({
      autoInstall: true,
      compiler: "vue3",
    }),
  ],
  server: {
    proxy: {
      ...(useGlobalProxy ? globalProxy : {}),
      ...(useProxy ? proxy : {}),
    },
  },
});
