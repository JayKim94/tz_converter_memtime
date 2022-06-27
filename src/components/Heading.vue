<script setup lang="ts">
import store from "../store";

const props = defineProps({
  title: String,
  subtitle: String,
});
</script>

<template>
  <div class="flex flex-col">
    <label class="text-2xl text-indigo-100">{{ props.title }}</label>
    <div class="pb-1 flex">
      <p class="text-xs text-indigo-200">
        {{ props.subtitle }}
      </p>
    </div>
  </div>
</template>
