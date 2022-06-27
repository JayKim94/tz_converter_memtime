<script setup lang="ts">
import Fn from "../functions";
import { onMounted } from "@vue/runtime-core";
import store, { AppMode } from "../store";
import Box from "./Box.vue";
// @ts-ignore
import Heading from "./Heading.vue";

onMounted(() => {
  setInterval(() => {
    if (store.mode !== AppMode.Current) return;
    store.currentTime = new Date();
  }, 1000);
});
</script>

<template>
  <div class="flex gap-2">
    <div
      class="relative cursor-pointer"
      :class="{ 'opacity-40': store.mode !== AppMode.Current }"
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
            <span class="text-4xl font-semibold tracking-wide">
              {{ Fn.FormatTime(store.currentTime, "HH:MM") }}
            </span>
            <span class="text-sm ml-1 text-indigo-900">
              {{ Fn.FormatTime(store.currentTime, ":SS") }}
            </span>
          </p>
          <p
            v-if="store.mode === AppMode.Custom"
            class="text-4xl text-center font-bold opacity-40"
          >
            Paused
          </p>
        </template>
      </Box>
    </div>
    <form
      class="cursor-pointer"
      :class="{ 'opacity-40': store.mode !== AppMode.Custom }"
      @click="store.mode = AppMode.Custom"
      @submit.prevent="store.SetTime()"
    >
      <Heading
        :title="'Enter Time'"
        :subtitle="'Based on ' + store.currentTimezone"
      />
      <Box>
        <template #content>
          <input
            class="text-4xl font-semibold"
            :class="store.GetStyle('border')"
            name="time_input"
            type="time"
            v-model="store.timeInput"
          />
        </template>
      </Box>
    </form>
  </div>
</template>
