import presetZex from '@icewhale/preset-zex'
import { defineConfig, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [presetZex()],
  transformers: [transformerDirectives()],
  content: {
    filesystem: [
      './node_modules/zexui/dist/primevue/passthrough/**/*.{vue,js,ts,jsx,tsx}',
    ],
    pipeline: {
      include: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './node_modules/zexui/**/*.{vue,js,ts,jsx,tsx}',
      ],
    },
  },
})
