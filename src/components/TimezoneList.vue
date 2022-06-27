<script setup lang="ts">
// @ts-ignore
import store, { City } from "../store";
// @ts-ignore
import Heading from "./Heading.vue";
// @ts-ignore
import AddIcon from "../assets/add.png";
import { onBeforeMount, onMounted, ref, watchEffect } from "vue";
import Fn from "../functions";

const cityInput = ref<string>("");
const selectedCities = ref<City[]>([] as City[]);

onBeforeMount(() => {
  fetch("./cityList.json")
    .then((res) => res.json())
    .then((json) => {
      store.cityList = json;
      console.log(json);
    });
});

watchEffect(() => store.currentTime);

function onAddCity() {
  const city = store.cityList.find(
    (c) => c.city.toLowerCase() === cityInput.value.toLowerCase()
  );

  cityInput.value = "";
  if (city === null || city === undefined) return;

  selectedCities.value.push(city);
}
</script>

<template>
  <div class="flex flex-col gap-4 mt-4">
    <div class="flex justify-between">
      <Heading :title="'Your Cities'" :subtitle="'Add a city from the list'" />
      <div class="flex items-center gap-2">
        <input
          type="text"
          name="city"
          class="py-2 px-3 rounded font-semibold"
          v-model="cityInput"
          list="cityDatalist"
        />
        <datalist id="cityDatalist">
          <option
            v-for="(city, index) in store.cityList"
            :key="index"
            :data-value="city.timezone"
            :value="city.city"
          />
        </datalist>
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
      <tr v-if="selectedCities.length === 0">
        <td colspan="3" class="text-indigo-200 none">No Selected City</td>
      </tr>
      <tr v-for="(city, index) in selectedCities" :key="index">
        <td class="text-white">{{ city.city }}</td>
        <td class="text-indigo-100">
          {{ Fn.FormatTime(store.GetTime(city.timezone), "HH:MM:SS") }}
        </td>
        <td class="text-indigo-200 text-sm truncate">
          {{ Fn.GetTimeZone(city.timezone) }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table {
  table-layout: fixed;
  width: 34rem;
}

th {
  padding: 0 0 10px 0;
}

td {
  padding: 5px 0;
}

td:nth-of-type(2) {
  width: 30px;
}

td:nth-of-type(3) {
  width: 60px;
}

td.none {
  padding: 25px 0;
}
</style>
