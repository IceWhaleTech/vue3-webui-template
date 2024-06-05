import { PrimeVuePTOptions } from "primevue/config";
import { usePassThrough } from "primevue/passthrough";
import Aura from "./presets/aura";

export const pt = usePassThrough(Aura, {
  // Custom PassThrough
} as PrimeVuePTOptions);
