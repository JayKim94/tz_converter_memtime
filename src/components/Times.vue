<script setup lang="ts">
// @ts-ignore
import Heading from "../shared/Heading.vue";
import Fn from "../functions";
import Box from "../shared/Box.vue";
import store, { AppMode } from "../store";
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
  setInterval(() => {
    if (store.mode !== AppMode.Current) return;
    store.currentTime = new Date();
  }, 1000);
});
</script>

<template>
  <div class="flex flex-col items-center lg:items-start lg:flex-row lg:gap-2">
    <div
      class="relative cursor-pointer transition-opacity"
      :class="{
        'lg:opacity-40 lg:block hidden': store.mode !== AppMode.Current,
      }"
      @click="store.mode = AppMode.Current"
    >
      <Heading
        :icon="true"
        :title="'Current Time'"
        :subtitle="store.currentTimezone"
      />
      <Box>
        <template #content>
          <p
            v-if="store.mode === AppMode.Current"
            class="text-4xl text-center font-semibold tracking-wide"
          >
            <span class="text-5xl font-semibold tracking-wide">
              {{ Fn.FormatTime(store.currentTime, "HH:MM") }}
            </span>
            <span class="text-sm ml-1 text-indigo-900">
              {{ Fn.FormatTime(store.currentTime, ":SS") }}
            </span>
          </p>
          <p
            v-if="store.mode === AppMode.Custom"
            class="text-4xl text-center font-bold opacity-20"
          >
            Paused
          </p>
        </template>
      </Box>
    </div>
    <div
      class="relative cursor-pointer transition-opacity"
      :class="{
        'lg:opacity-40 lg:block hidden': store.mode !== AppMode.Custom,
      }"
      @click="store.mode = AppMode.Custom"
    >
      <Heading
        :title="'Enter Time'"
        :subtitle="'Based on ' + Fn.GetTimeZone(store.currentTimezone)"
      />
      <Box>
        <template #content>
          <input
            class="text-5xl font-semibold"
            name="time_input"
            type="time"
            v-model="store.timeInput"
          />
        </template>
      </Box>
    </div>
  </div>
</template>
