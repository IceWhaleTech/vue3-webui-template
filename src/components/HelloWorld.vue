<script setup lang="ts">
import { NButton } from 'naive-ui'
import Button from 'primevue/button'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <p class="text-4xl">
      {{ msg }}
    </p>

    <div class="w-fit flex flex-col items-center gap-4 rounded-md bg-slate-700 p-6 shadow-md">
      <div class="flex flex-col">
        PrimeVue
        <Button class="w-fit" :label="$t('count', { count })" @click="count++" />
      </div>
      <div class="flex flex-col">
        Naive UI
        <NButton type="primary" @click="count++">
          {{ $t('count', { count }) }}
        </NButton>
      </div>
      <i18n-t keypath="editFileToTestHMR" tag="p">
        <code>components/HelloWorld.vue</code>
      </i18n-t>
    </div>
  </div>
</template>
