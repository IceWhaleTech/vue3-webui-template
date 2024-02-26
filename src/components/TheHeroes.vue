<script setup lang="ts"></script>

<template>
  <div class="flex flex-col justify-center gap-4">
    <div class="flex flex-row items-center justify-center gap-6">
      <a class="flex flex-col" href="https://vitejs.dev" target="_blank">
        <img class="logo vite" src="../assets/vite.svg" alt="Vite" />
        <span class="text-xl">Vite</span>
      </a>
      <a class="flex flex-col items-center" href="https://vuejs.org" target="_blank">
        <img class="logo vue" src="../assets/vue.svg" alt="Vue3" />
        <span class="text-xl">Vue3</span>
      </a>
      <a class="flex flex-col items-center" href="https://www.typescriptlang.org/" target="_blank">
        <img class="logo typescript" src="../assets/typescript.svg" alt="TypeScript logo" />
        <span class="text-xl">TypeScript</span>
      </a>
      <span class="text-5xl font-extralight motion-safe:animate-pulse">+</span>
      <a class="flex flex-col items-center" href="https://primevue.org" target="_blank">
        <img class="logo primevue" src="../assets/primevue.svg" alt="PrimeVue" />
        <span class="text-xl">PrimeVue</span>
      </a>
      <a class="flex flex-col items-center" href="https://tailwindcss.com" target="_blank">
        <img class="logo tailwind" src="../assets/tailwind.svg" alt="TailwindCSS" />
        <span class="text-xl">TailwindCSS</span>
      </a>
      <span class="text-5xl font-extralight motion-safe:animate-pulse">+</span>
      <a class="flex flex-col items-center" href="https://wujie-micro.github.io/doc/" target="_blank">
        <img class="logo wujie" src="../assets/wujie.svg" alt="Wujie logo" />
        <span class="text-xl">Wujie</span>
      </a>
    </div>
    <p class="font-serif italic tracking-wide text-gray-500">{{ $t("logoDescription") }}</p>
  </div>
</template>

<style scoped>
.logo {
  @apply h-24 w-24 p-5;
  @apply transition-[filter] duration-300 will-change-[filter];
}
.logo.vite:hover {
  @apply drop-shadow-[0_0_2em_#646cff];
}
.logo.vue:hover {
  @apply drop-shadow-[0_0_2em_#42b883];
}
.logo.primevue:hover {
  @apply drop-shadow-[0_0_2em_#42b883];
}
.logo.tailwind:hover {
  @apply drop-shadow-[0_0_2em_#38bdf8];
}
.logo.wujie:hover {
  @apply drop-shadow-[0_0_2em_#ff0000aa];
}
.logo.typescript:hover {
  @apply drop-shadow-[0_0_2em_#007accaa];
}
</style>
