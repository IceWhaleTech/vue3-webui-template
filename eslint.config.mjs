// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // Configures for antfu's config
    typescript: true,
    vue: true,
    unocss: true,
    markdown: true,
  },
  {
    // Configures for eslint
    name: 'vue3-webui-template',
    rules: {
      'no-console': 'off',
      'ts/no-unused-expressions': 'off',
    },
  },
)
