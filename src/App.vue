<script setup>
import { watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { useHabitTrackingStore } from './stores/habitTracking';

const habitTracking = useHabitTrackingStore();
const route = useRoute();

if (!localStorage.getItem('habit-tracking')) localStorage.setItem('habit-tracking', '[]');
if (!localStorage.getItem('habit-list')) localStorage.setItem('habit-list', '[]');

watch(route, newValue => {
  if (route.fullPath === '/') {
    const today = new Date(Date.now()).toLocaleDateString('lt-LT');
    habitTracking.day = today;
    habitTracking.getItems();
  } else if (route.name === 'day') {
    habitTracking.day = newValue.params.date;
    habitTracking.getItems();
  }
});
</script>

<template>
  <nav class="shadow-lg py-4 bg-white font-[700]">
    <div class="container mx-auto px-4">
      <RouterLink to="/" class="mr-5">Home</RouterLink>
      <RouterLink to="/habits">Habits</RouterLink>
    </div>
  </nav>
  <RouterView />
</template>
