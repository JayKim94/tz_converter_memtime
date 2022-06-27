<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import store, { AppMode } from "./store";
import Fn from "./functions";
// @ts-ignore
import TimeInput from "./components/TimeInput.vue";
// @ts-ignore
import TimezoneList from "./components/TimezoneList.vue";

const timeInput = ref<string>(Fn.GetCurrentTime());
const cityInput = ref<string>("");
</script>

<template>
  <div
    class="w-screen h-screen flex flex-col gap-10 justify-center items-center background"
  >
    <header>
      <div class="flex flex-col items-center text-white">
        <h1 class="text-6xl font-bold">Memtime</h1>
        <h3 class="opacity-80 border-t pt-1 mt-4 px-1 text-sm">
          Timezone Converter
        </h3>
      </div>
    </header>
    <div class="flex flex-col gap-4">
      <TimeInput />
      <TimezoneList />
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: linear-gradient(112.1deg, #202639 11.4%, #3f4c77 70.2%);
}
input:focus {
  outline: none;
}
</style>
