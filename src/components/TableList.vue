<script setup lang="ts">
// @ts-ignore
import { ref, defineProps, PropType, watchEffect } from "vue";
// @ts-ignore
import store, { City } from "../store";
import Fn from "../functions";
import { AppMode } from "../store";

const props = defineProps({
  headers: Array as PropType<string[]>,
  list: Array as PropType<any[]>,
});

watchEffect(() => store.currentTime);
</script>
<template>
  <table class="text-center mt-4">
    <tr class="text-indigo-200 opacity-80">
      <th v-for="(h, i) in props.headers" :key="i">{{ h }}</th>
    </tr>
    <tr v-if="list?.length === 0">
      <td colspan="3" class="text-indigo-200 none">No Selected City</td>
    </tr>
    <tr v-for="(city, index) in list" :key="index">
      <td class="text-white">{{ city.city }}</td>
      <td class="text-indigo-100">
        {{
          Fn.FormatTime(
            store.GetTime(city.timezone),
            store.mode === AppMode.Current ? "HH:MM:SS" : "HH:MM"
          )
        }}
      </td>
      <td class="text-indigo-200 text-sm truncate">
        {{ Fn.GetTimeZone(city.timezone) }}
      </td>
    </tr>
  </table>
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
  border-top: 1px solid #ccccccaa;
}

td:nth-of-type(2) {
  width: 30px;
}

td:nth-of-type(3) {
  width: 60px;
}

td.none {
  padding: 25px 0;
  border: none;
}
</style>
