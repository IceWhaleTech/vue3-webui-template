import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import fs from "node:fs";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import TurboConsole from "unplugin-turbo-console/vite";
import Components from "unplugin-vue-components/vite";
import { CommonServerOptions, defineConfig, loadEnv } from "vite";

// The mode of the current build.
const mode =
  process.env.NODE_ENV === "development"
    ? "development"
    : process.env.NODE_ENV === "production"
      ? "production"
      : "";

// Load the environment variables from the .env file.
process.env = {
  ...process.env,
  ...loadEnv(mode, process.cwd()),
};

// The entry file for the micro-frontend.
// Default: "./public/entry.json"
const entryPath = "./public/entry.json";

// Read the entry file.
let entryJson;
if (fs.existsSync(entryPath)) {
  const entryFileJson = JSON.parse(fs.readFileSync(entryPath, "utf-8"));
  entryJson = entryFileJson.entry;
}

// The base path for the development server.
// Usally it's like "/modules/app-name" depending on the /public/entry.json file.
const devBase = entryJson ? entryJson.substring(0, entryJson.lastIndexOf("/")) : "./";

// The base path for the production server.
// Default: "./"
const prodBase = "./";

// Enable the proxy for the development server.
const useProxy = false;
// Enable the global proxy for the development server.
const useGlobalProxy = process.env.VITE_REMOTE_SERVER_IP ?? false;

// Custom proxy settings
const proxy = {
  // "^/chat.*": { target: "http://10.0.0.65:8001", changeOrigin: true },
} as CommonServerOptions["proxy"];

// globalProxyTarget:
// The target server for the global proxy. except the custom proxy settings.
const globalProxyTarget = `http://${process.env.VITE_REMOTE_SERVER_IP}:${process.env.VITE_REMOTE_SERVER_PORT ?? 80}`;
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

// The mode of the current build.
const isDevMode = process.env.NODE_ENV === "development";
// The base path for the current build.
const base = isDevMode ? devBase : prodBase;

// Display the proxy settings.
isDevMode && useGlobalProxy && console.log("Global Proxy Target:", globalProxyTarget);
isDevMode && console.log("Dev Base:", base);

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dts: "src/types/components.d.ts",
      resolvers: [IconsResolver({})],
    }),
    AutoImport({
      dts: "src/types/auto-imports.d.ts",
      imports: ["vue", "vue-router", "vue-i18n"],
    }),
    VueI18nPlugin({
      include: ["./src/locales/**"],
    }),
    Icons({
      autoInstall: true,
      compiler: "vue3",
    }),
    TurboConsole({}),
  ],
  server: {
    proxy: {
      ...(useGlobalProxy ? globalProxy : {}),
      ...(useProxy ? proxy : {}),
    },
  },
});
