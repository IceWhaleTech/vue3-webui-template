import messages from "@intlify/unplugin-vue-i18n/messages";
import { createI18n } from "vue-i18n";

const selectedLocale =
  localStorage.getItem("locale") || navigator.language.toLocaleLowerCase().replace("-", "_");
const locale = messages?.hasOwnProperty(selectedLocale) ? selectedLocale : "en_us";

export const i18n = createI18n({
  legacy: false, // for composition API
  locale: locale,
  messages: messages,
});
