<script setup lang="ts"></script>

<template>
  <div class="flex flex-col justify-center gap-4">
    <div class="flex flex-row items-center justify-center gap-6">
      <a class="flex flex-col" href="https://vitejs.dev" target="_blank">
        <img class="logo vite" src="../assets/vite.svg" alt="Vite">
        <span class="text-xl">Vite</span>
      </a>
      <a class="flex flex-col items-center" href="https://vuejs.org" target="_blank">
        <img class="logo vue" src="../assets/vue.svg" alt="Vue3">
        <span class="text-xl">Vue3</span>
      </a>
      <a class="flex flex-col items-center" href="https://www.typescriptlang.org/" target="_blank">
        <img class="logo typescript" src="../assets/typescript.svg" alt="TypeScript logo">
        <span class="text-xl">TypeScript</span>
      </a>
      <span class="text-5xl font-extralight motion-safe:animate-pulse">+</span>
      <a class="flex flex-col items-center" href="https://zexui.pages.dev" target="_blank">
        <span class="logo zexui flex items-center justify-center rounded-2xl rounded-full text-3xl">
          ZexUI
        </span>
      </a>
      <a class="relative flex flex-col items-center" href="https://unocss.dev" target="_blank">
        <img class="logo unocss" src="../assets/unocss.svg" alt="UnoCSS">
        <span class="text-xl">UnoCSS</span>
      </a>
      <span class="text-5xl font-extralight motion-safe:animate-pulse">+</span>
      <a class="flex flex-col items-center" href="https://wujie-micro.github.io/doc/" target="_blank">
        <img class="logo wujie" src="../assets/wujie.svg" alt="Wujie logo">
        <span class="text-xl">Wujie</span>
      </a>
    </div>
    <p class="text-gray-500 tracking-wide font-serif italic">
      {{ $t("logoDescription") }}
    </p>
  </div>
</template>

<style scoped>
.logo {
  --at-apply: 'h-24 w-24 p-5';
  --at-apply: 'transition-[filter] duration-300 will-change-[filter]';
}
.logo.vite:hover {
  --at-apply: 'drop-shadow-[0_0_2em_#646cff]';
}
.logo.vue:hover {
  --at-apply: 'drop-shadow-[0_0_2em_#42b883]';
}
.logo.primevue:hover {
  --at-apply: 'drop-shadow-[0_0_2em_#42b883]';
}
.logo.zexui:hover {
  --at-apply: 'drop-shadow-[0_0_2em_#fff]';
}
.logo.wujie:hover {
  --at-apply: 'drop-shadow-[0_0_2em_#ff0000aa]';
}
.logo.typescript:hover {
  --at-apply: 'drop-shadow-[0_0_2em_#007accaa]';
}
.logo.unocss:hover {
  --at-apply: 'drop-shadow-[0_0_2em_#aaaaaa]';
}
</style>
