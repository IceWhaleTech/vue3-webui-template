import { usePassThrough } from 'primevue/passthrough'
import type { ZexPrimeVuePTOptions } from 'zexui/primevue'
import ZexPassthrough from 'zexui/primevue/passthrough'

export const pt = usePassThrough(ZexPassthrough, {
  // Custom PassThrough
} as ZexPrimeVuePTOptions)
