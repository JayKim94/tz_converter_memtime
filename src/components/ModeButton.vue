<script setup lang="ts">
import store, { AppMode } from "../store";
</script>

<template>
  <label class="relative inline-block w-[70px] h-[34px] drop-shadow my-8">
    <span
      class="absolute -top-6 left-1/2 -translate-x-1/2 z-50 text-xs"
      :class="{
        'text-indigo-200': store.mode === AppMode.Current,
        'text-yellow-200': store.mode === AppMode.Custom,
      }"
    >
      {{ store.mode }}
    </span>
    <input
      class="opacity-0 h-0 w-0"
      type="checkbox"
      :checked="store.mode === AppMode.Custom"
      @change="store.ToggleMode()"
    />
    <span
      class="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] transition-all"
    ></span>
  </label>
</template>

<style scoped>
.slider {
  background-color: #2196fe;
  border-radius: 34px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-color: #ccc;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196fe;
}
input:checked + .slider:before {
  -webkit-transform: translateX(36px);
  -ms-transform: translateX(36px);
  transform: translateX(36px);
}
</style>
