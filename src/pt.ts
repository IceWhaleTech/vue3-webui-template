import type { ZexPrimeVuePTOptions } from 'zexui/primevue'
import { usePassThrough } from 'primevue/passthrough'
import ZexPassthrough from 'zexui/primevue/passthrough'

export const pt = usePassThrough(ZexPassthrough, {
  // Custom PassThrough
} as ZexPrimeVuePTOptions)
