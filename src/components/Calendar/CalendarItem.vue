<script setup>
import { useHabitTrackingStore } from '../../stores/habitTracking';

defineProps(['day', 'dayShort', 'fulldate']);

const habitTracking = useHabitTrackingStore();
</script>

<template>
  <div
    class="justify-around content-center text-center h-18 w-10 border-2 border-white rounded-lg m-1 py-2 bg-white shadow-sm hover:ring-2 transition ease-in-out delay-50 hover:-translate-y-1 duration-300"
    :class="{ 'ring-2': habitTracking.day === fulldate }"
  >
    <h1 class="font-medium">{{ day }}</h1>
    <p class="text-xs text-gray-300">{{ dayShort }}</p>
  </div>
</template>
