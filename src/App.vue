<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import store, { AppMode } from "./store";

type City = {
  name: string;
  time: string | number;
  timezone: string;
};

function getCurrentTime(): string {
  let today = new Date(),
    hours: string | number = today.getHours(),
    minutes: string | number = today.getMinutes(),
    seconds: string | number = today.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

function onSetTime() {}

function onAddCity() {
  if (cityInput.value === "") return;

  cityList.value = [
    ...cityList.value,
    {
      name: cityInput.value,
      time: "00:00",
      timezone: "CEST",
    },
  ];
}

const cityList = ref<City[]>([
  {
    name: "Beijing",
    time: "00:00",
    timezone: "CEST",
  },
]);
const timeInput = ref<string>(getCurrentTime());
const cityInput = ref<string>("");

onMounted(() => {
  setInterval(() => {
    if (store.mode !== AppMode.Current) return;
    timeInput.value = getCurrentTime();
    console.log(timeInput.value);
  }, 1000);
});
</script>

<template>
  <div
    class="w-screen h-screen flex flex-col justify-center items-center background"
  >
    <header class="mb-20">
      <div class="flex flex-col items-center text-white">
        <h1 class="text-6xl font-bold">Memtime</h1>
        <h3 class="opacity-80 border-t pt-1 mt-4 px-1 text-sm">
          Timezone Converter
        </h3>
      </div>
    </header>
    <div>
      <form @submit.prevent="onSetTime">
        <label class="text-2xl text-indigo-100"> Standard Time </label>
        <div class="pb-1 flex">
          <p class="text-xs" :class="store.GetStyle('text')">
            {{ store.mode }}
          </p>
        </div>
        <input
          class="w-96 text-4xl px-8 py-3 drop-shadow border-4 font-semibold rounded"
          :class="store.GetStyle('border')"
          name="time_input"
          type="time"
          v-model="timeInput"
        />
      </form>
      <div class="flex flex-col my-4">
        <label class="text-2xl text-indigo-100"> Your Timezones </label>
        <table class="text-center mt-2">
          <tr class="text-indigo-200 opacity-80">
            <th>City</th>
            <th>Time</th>
            <th>Timezone</th>
          </tr>
          <tr v-for="(city, index) in cityList" :key="index" class="text-white">
            <td>{{ city.name }}</td>
            <td>{{ city.time }}</td>
            <td>{{ city.timezone }}</td>
          </tr>
        </table>
      </div>
      <form
        class="flex flex-col gap-2 pt-4 border-t"
        @submit.prevent="onAddCity"
      >
        <label class="text-2xl text-indigo-100"> Add </label>
        <div class="flex justify-between">
          <input
            class="border-2 px-2 py-1 rounded border-gray-600"
            name="time_input"
            type="text"
            v-model="cityInput"
          />
          <button
            class="text-black font-bold bg-white border-2 border-indigo-100 px-4 py-1 rounded shadow-md"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
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
  background-color: var(--light-blue-color);
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
