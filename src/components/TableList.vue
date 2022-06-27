<script setup lang="ts">
// @ts-ignore
import { ref, defineProps, PropType, watchEffect, defineEmits } from "vue";
// @ts-ignore
import store, { City } from "../store";
import Fn from "../functions";
import { AppMode } from "../store";
// @ts-ignore
import DeleteIcon from "../assets/delete.png";

const props = defineProps({
  headers: Array as PropType<string[]>,
  list: Array as PropType<any[]>,
});

const emit = defineEmits(["delete"]);

watchEffect(() => store.currentTime);
</script>
<template>
  <table class="text-center mt-4">
    <tr class="text-indigo-200 opacity-80">
      <th v-for="(h, i) in props.headers" :key="i" class="text-sm lg:text-md">
        {{ h }}
      </th>
      <th></th>
    </tr>
    <tr v-if="list?.length === 0">
      <td colspan="3" class="text-indigo-200 none">No Selected City</td>
    </tr>
    <tr v-for="(city, index) in list" :key="index">
      <td class="text-white">{{ city.city }}</td>
      <td class="text-indigo-100">
        {{ Fn.FormatTime(store.GetTime(city.timezone), "HH:MM") }}
        <span v-if="store.mode === AppMode.Current" class="opacity-60 text-xs">
          {{ Fn.FormatTime(store.GetTime(city.timezone), ":SS") }}
        </span>
      </td>
      <td class="text-indigo-200 text-sm truncate">
        {{ Fn.GetTimeZone(city.timezone) }}
      </td>
      <td
        class="opacity-60 cursor-pointer hover:opacity-100"
        @click="emit('delete', city.city)"
      >
        <img :src="DeleteIcon" width="16" height="16" />
      </td>
    </tr>
  </table>
</template>

<style scoped>
table {
  table-layout: fixed;
  width: min(36rem, 80%);
}

th {
  padding: 0 0 10px 0;
}

td {
  padding: 7px 0;
  border-top: 1px solid #ccccccaa;
}

th:nth-of-type(4) {
  width: 30px;
}

@media only screen and (max-width: 1024px) {
  td:nth-of-type(2) {
    width: 30px;
  }

  td:nth-of-type(3) {
    width: 60px;
  }
}

td.none {
  padding: 25px 0;
  border: none;
}
</style>
