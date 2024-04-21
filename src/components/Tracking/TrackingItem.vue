<script setup>
import { useHabitTrackingStore } from '../../stores/habitTracking';

defineProps(['id', 'isDone', 'text']);

const habitTracking = useHabitTrackingStore();
</script>

<template>
  <div
    class="container mx-auto max-w-md rounded-lg shadow-md mb-4 p-4 bg-white"
    :class="{ 'ring-2 ring-light-orange/[.55]': isDone }"
  >
    <input
      type="checkbox"
      :id="id"
      class="rounded-full mr-4 w-5 h-5 cursor-pointer"
      @click="habitTracking.toggleDone(id)"
      :checked="isDone"
    />
    <label :for="id">{{ text }}</label>
  </div>
</template>

<style scoped>
input {
  color: #f1854f;

  --tw-ring-shadow: 0 0 #000 !important;
}
</style>
