<script setup>
import Tracking from '../components/Tracking/index.vue';
import Calendar from '../components/Calendar/index.vue';
import Header from '../components/Header.vue';
</script>

<template>
  <Header :title="'Habit Tracking'" :show-date="true" />
  <div
    class="container mx-auto max-w-lg min-h-min py-10 rounded-3xl bg-white/40"
  >
    <Calendar />
    <Tracking />
  </div>
</template>
