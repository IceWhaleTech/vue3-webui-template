<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheHeroes from "./components/TheHeroes.vue";
</script>

<template>
  <div class="flex flex-col gap-16 text-center">
    <TheHeroes />
    <HelloWorld msg="Hello, World!" />
    <p class="font-serif text-lg tracking-wider drop-shadow-md">
      Check out
      <code>README.md</code>
      to get started and get better DX!
    </p>
  </div>
</template>
