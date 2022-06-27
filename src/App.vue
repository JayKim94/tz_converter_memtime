<script setup lang="ts">
// @ts-ignore
import Times from "./components/Times.vue";
// @ts-ignore
import YourCities from "./components/YourCities.vue";
// @ts-ignore
import ModeButton from "./components/ModeButton.vue";
import { onBeforeMount } from "@vue/runtime-core";
import store from "./store";

onBeforeMount(() => {
  fetch("./cityList.json")
    .then((res) => res.json())
    .then((json) => (store.cityList = json));
});
</script>

<template>
  <div
    class="w-screen min-h-screen flex flex-col items-center lg:pt-48 pt-20 background"
  >
    <header class="flex flex-col items-center">
      <div class="flex flex-col items-center text-white relative">
        <h1 class="lg:text-6xl text-4xl font-bold">Memtime</h1>
        <h3
          class="absolute right-0 -top-5 text-indigo-200 opacity-80 px-1 text-xs"
        >
          Timezone Converter by Kim
        </h3>
      </div>
      <ModeButton />
    </header>
    <div class="flex flex-col lg:items-center lg:gap-4 gap-0">
      <Times />
      <YourCities />
    </div>
  </div>
</template>
