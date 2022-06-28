<script setup lang="ts">
// @ts-ignore
import store, { City } from "../store";
// @ts-ignore
import Heading from "../shared/Heading.vue";
// @ts-ignore
import AddIcon from "../assets/add.png";
// @ts-ignore
import TableList from "../shared/TableList.vue";
import { ref } from "vue";

const cityInput = ref<string>("");
const error = ref<string>("");
const selectedCities = ref<City[]>([] as City[]);

function onAddCity(): void {
  const city = store.cityList.find(
    (c) => c.city.toLowerCase() === cityInput.value.toLowerCase()
  );

  if (city === null || city === undefined) {
    error.value = "Not a valid city name";
    return;
  }

  if (selectedCities.value.findIndex((c) => c.city === city.city) > -1) {
    error.value = "Already on the list.";
    return;
  }

  selectedCities.value.push(city);
  cityInput.value = "";
  error.value = "";
}

function onDeleteCity(name: string): void {
  selectedCities.value = [
    ...selectedCities.value.filter((c) => c.city !== name),
  ];
}
</script>

<template>
  <div class="flex flex-col items-center gap-4 mt-4">
    <div
      class="flex flex-col lg:gap-9 gap-6 lg:flex-row justify-between lg:justify-start"
    >
      <Heading :title="'Your Cities'" :subtitle="'Add a city from the list'" />
      <div
        class="relative flex items-center justify-between lg:justify-start gap-2"
      >
        <input
          type="text"
          name="city"
          class="py-2 px-3 rounded font-semibold"
          v-model="cityInput"
          list="cityDatalist"
          @keydown.enter="onAddCity"
        />
        <p class="absolute -bottom-5 lg:-bottom-3 left-0 text-xs text-red-300">
          {{ error }}
        </p>
        <datalist id="cityDatalist">
          <option
            v-for="(city, index) in store.cityList"
            :key="index"
            :value="city.city"
            @click="cityInput = city.city"
          />
        </datalist>
        <button
          @click="onAddCity"
          class="transition-opacity opacity-60 hover:opacity-100"
        >
          <img :src="AddIcon" width="40" height="40" />
        </button>
      </div>
    </div>
    <TableList
      :headers="['City', 'Time', 'Timezone']"
      :list="selectedCities"
      @delete="onDeleteCity"
    />
  </div>
</template>
