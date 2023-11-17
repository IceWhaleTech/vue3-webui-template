<script setup lang="ts">
import Button from "primevue/button";
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <p class="text-5xl">{{ msg }}</p>

    <div class="flex w-fit flex-col items-center gap-4 rounded-md bg-slate-700 p-6 shadow-md">
      <Button class="w-fit" :label="`Count: ${count}`" @click="count++" />
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
