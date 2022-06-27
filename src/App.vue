<script setup lang="ts">
// @ts-ignore
import TimeInput from "./components/TimeInput.vue";
// @ts-ignore
import TimezoneList from "./components/TimezoneList.vue";
// @ts-ignore
import ModeButton from "./components/ModeButton.vue";
</script>

<template>
  <div class="w-screen h-screen flex flex-col items-center pt-48 background">
    <header class="flex flex-col items-center">
      <div class="flex flex-col items-center text-white relative">
        <h1 class="text-6xl font-bold">Memtime</h1>
        <h3
          class="absolute right-0 -top-5 text-indigo-200 opacity-80 px-1 text-xs"
        >
          Timezone Converter by Kim
        </h3>
      </div>
      <ModeButton />
    </header>
    <div class="flex flex-col gap-4">
      <TimeInput />
      <TimezoneList />
    </div>
  </div>
</template>
