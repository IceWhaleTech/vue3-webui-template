import { PrimeVuePTOptions } from "primevue/config";
import { usePassThrough } from "primevue/passthrough";
import Tailwind from "primevue/passthrough/tailwind";

export const pt = usePassThrough(Tailwind, {
  // Custom Tailwind PassThrough
} as PrimeVuePTOptions);
