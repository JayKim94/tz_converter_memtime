<script setup lang="ts">
import store from "../store";
// @ts-ignore
import Heading from "./Heading.vue";
// @ts-ignore
import AddIcon from "../assets/add.png";
import { ref } from "vue";

const cityInput = ref("");

function onAddCity() {
  if (cityInput.value === "") return;
  store.AddCity(cityInput.value);
}
</script>

<template>
  <div class="flex flex-col gap-4 mt-4">
    <div class="flex justify-between">
      <Heading
        :title="'Your Timezones'"
        :subtitle="'Add a city from the list.'"
      />
      <div class="flex items-center gap-2">
        <input
          type="text"
          name="city"
          class="py-2 px-3 rounded font-semibold"
          v-model="cityInput"
        />
        <button @click="onAddCity">
          <img :src="AddIcon" width="40" height="40" />
        </button>
      </div>
    </div>
    <table class="text-center mt-4">
      <tr class="text-indigo-200 opacity-80">
        <th>City</th>
        <th>Time</th>
        <th>Timezone</th>
      </tr>
      <tr v-for="(city, index) in store.selectedCities" :key="index">
        <td class="text-white">{{ city.name }}</td>
        <td class="text-indigo-100">{{ city.time }}</td>
        <td class="text-indigo-200">{{ city.timezone }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
th {
  padding: 0 0 10px 0;
}

td {
  padding: 5px 0;
}
</style>
