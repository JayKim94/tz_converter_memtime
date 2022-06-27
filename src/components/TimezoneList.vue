<script setup lang="ts">
// @ts-ignore
import store, { City } from "../store";
// @ts-ignore
import Heading from "./Heading.vue";
// @ts-ignore
import AddIcon from "../assets/add.png";
// @ts-ignore
import TableList from "./TableList.vue";
import { onBeforeMount, onMounted, ref, watchEffect } from "vue";
import Fn from "../functions";

const cityInput = ref<string>("");
const selectedCities = ref<City[]>([] as City[]);

onBeforeMount(() => {
  fetch("./cityList.json")
    .then((res) => res.json())
    .then((json) => (store.cityList = json));
});

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
            :value="city.city"
            @click="cityInput = city.city"
          />
        </datalist>
        <button @click="onAddCity">
          <img :src="AddIcon" width="40" height="40" />
        </button>
      </div>
    </div>
    <TableList :headers="['City', 'Time', 'Timezone']" :list="selectedCities" />
  </div>
</template>
