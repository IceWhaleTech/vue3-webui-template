import messages from '@intlify/unplugin-vue-i18n/messages'
import { createI18n } from 'vue-i18n'

export const selectedLocale
  = localStorage.getItem('locale') || navigator.language.toLocaleLowerCase().replace('-', '_')
export const locale = Object.prototype.hasOwnProperty.call(messages, selectedLocale) ? selectedLocale : 'en_us'

export const i18n = createI18n({
  legacy: false, // for composition API
  locale,
  fallbackLocale: 'en_us',
  messages,
})
