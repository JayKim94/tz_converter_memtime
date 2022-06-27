<script setup lang="ts">
import store from "../store";
// @ts-ignore
import MapIcon from "../assets/map.png";

const props = defineProps({
  title: String,
  subtitle: String,
  icon: Boolean,
});
</script>

<template>
  <div class="flex flex-col w-[300px]">
    <label class="text-2xl text-indigo-100">{{ props.title }}</label>
    <div class="pb-1 flex gap-1">
      <img v-if="icon" :src="MapIcon" width="16" height="16" />
      <p class="text-xs text-indigo-200">
        {{ props.subtitle }}
      </p>
    </div>
  </div>
</template>
