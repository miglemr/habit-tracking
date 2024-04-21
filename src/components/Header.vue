<script setup>
import { useHabitTrackingStore } from '../stores/habitTracking';

defineProps(['title', 'showDate']);

const habitTracking = useHabitTrackingStore();
</script>

<template>
  <header class="py-10 mb-5">
    <div
      class="container mx-auto max-w-sm grid grid-cols-2 gap-5 justify-items-center items-center"
    >
      <div>
        <h1 class="text-3xl mb-10 font-black text-dark-blue">{{ title }}</h1>
        <h2 v-show="showDate" class="text-xl font-bold text-dark-blue">
          {{ habitTracking.formattedDate }}
        </h2>
      </div>
      <img src="../assets/calendar.png" alt="calendar-img" />
    </div>
  </header>
</template>
