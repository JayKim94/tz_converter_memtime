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
    store.currentTime = Fn.GetCurrentTime();
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
      <Heading :title="'Current Time'" :subtitle="'Paderborn, Germany'" />
      <Box>
        <template #content>
          <p
            v-if="store.mode === AppMode.Current"
            class="text-4xl text-center font-semibold tracking-wide"
          >
            {{ store.currentTime }}
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
        :subtitle="'Based on your current location'"
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

<style scoped>
/* Wrapper around the hour, minute, second, and am/pm fields as well as 
the up and down buttons and the 'X' button */
input[type="time"]::-webkit-datetime-edit-fields-wrapper {
  display: flex;
}

/* The space between the fields - between hour and minute, the minute and 
second, second and am/pm */
input[type="time"]::-webkit-datetime-edit-text {
  padding: 10px 4px;
}

/* The naming convention for the hour, minute, second, and am/pm field is
`-webkit-datetime-edit-{field}-field` */

/* Hour */
input[type="time"]::-webkit-datetime-edit-hour-field {
  background-color: #f2f4f5;
  border-radius: 5px;
  padding: 10px 18px;
  border: 1px solid transparent;
}
input[type="time"]::-webkit-datetime-edit-hour-field:focus,
input[type="time"]::-webkit-datetime-edit-minute-field:focus,
input[type="time"]::-webkit-datetime-edit-second-field:focus,
input[type="time"]::-webkit-datetime-edit-ampm-field:focus {
  background-color: #1063ac22;
  color: #333;
  border: 1px solid #1a73e8;
}

input[type="time"]::-webkit-calendar-picker-indicator {
  font-size: 1.45rem;
  cursor: pointer;
  opacity: 0.5;
  width: 2rem;
}

/* Minute */
input[type="time"]::-webkit-datetime-edit-minute-field {
  background-color: #f2f4f5;
  border-radius: 5px;
  padding: 10px 18px;
  border: 1px solid transparent;
}

/* Seconds */
input[type="time"]::-webkit-datetime-edit-second-field {
  background-color: #f2f4f5;
  border-radius: 5px;
  padding: 10px 18px;
  border: 1px solid transparent;
}

/* AM/PM */
input[type="time"]::-webkit-datetime-edit-ampm-field {
  background-color: #1a73e8;
  border-radius: 5px;
  color: #fff;
  padding: 10px 18px;
  font-weight: 800;
  border: 1px solid transparent;
}

/* 'X' button for resetting/clearing time */
input[type="time"]::-webkit-clear-button {
  display: none;
}

/* Up/Down arrows for incrementing/decrementing the value */
input[type="time"]::-webkit-inner-spin-button {
  display: none;
}
</style>
