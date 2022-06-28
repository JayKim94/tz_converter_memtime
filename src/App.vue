<script setup lang="ts">
// @ts-ignore
import Times from "./components/Times.vue";
// @ts-ignore
import YourCities from "./components/YourCities.vue";
// @ts-ignore
import ModeButton from "./components/ModeButton.vue";
// @ts-ignore
import Logo from "./assets/logo.png";
</script>

<template>
  <div
    class="w-screen min-h-screen flex flex-col items-center lg:pt-36 pt-20 pb-14 background"
  >
    <header class="flex flex-col items-center relative">
      <img
        class="absolute lg:-top-16 -left-16 -top-12"
        :src="Logo"
        width="96"
        height="96"
      />
      <div class="flex flex-col items-center text-white relative">
        <h1 class="lg:text-6xl text-4xl font-bold">Memtime</h1>
        <h3
          class="absolute -right-10 -top-5 text-indigo-200 opacity-80 px-1 text-xs"
        >
          TZ-Converter by Jay
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
