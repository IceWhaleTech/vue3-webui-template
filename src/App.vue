<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import RouterDemo from "./components/RouterDemo.vue";
import TheHeroes from "./components/TheHeroes.vue";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

onMounted(() => {
  window.document.title = t("title");
});
</script>

<template>
  <div class="flex flex-col gap-16 text-center">
    <h1 class="text-5xl font-light tracking-widest">{{ $t("title") }}</h1>
    <TheHeroes />
    <HelloWorld :msg="$t('helloworld')" />
    <RouterDemo />
    <i18n-t class="font-serif text-lg tracking-wider drop-shadow-md" keypath="checkFileToGetStarted" tag="p">
      <code>README.md</code>
    </i18n-t>
  </div>
</template>
