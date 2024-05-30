<script setup lang="ts">
const router = useRouter();
const route = useRoute();
</script>
<template>
  <div class="flex flex-col items-center gap-4">
    <h2 class="text-4xl">vue-router</h2>
    <div class="flex flex-row gap-4">
      <RouterLink
        v-for="rl in router.getRoutes()"
        :to="rl.path"
        :class="[route.path === rl.path ? 'font-semibold' : 'underline']"
      >
        {{ rl.name }}
      </RouterLink>
    </div>
    <div class="mx-auto flex w-fit flex-col items-center gap-4 rounded-md bg-slate-700 p-6 shadow-md">
      <RouterView></RouterView>
    </div>
  </div>
</template>
