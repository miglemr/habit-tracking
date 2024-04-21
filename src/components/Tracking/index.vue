<script setup>
import { useHabitStore } from '../../stores/habits';
import { useHabitTrackingStore } from '../../stores/habitTracking';
import TrackingItem from './TrackingItem.vue';

const habits = useHabitStore();
const habitTracking = useHabitTrackingStore();
</script>

<template>
  <h1
    v-if="habitTracking.items.length === 0"
    class="flex justify-center mb-10 text-lg font-[500]"
  >
    Nothing to show
  </h1>
  <div v-else>
    <TrackingItem
      v-for="item in habitTracking.items"
      :key="item.id"
      :isDone="item.isDone"
      :id="item.id"
      :text="habits.getText(item.id)"
    ></TrackingItem>
  </div>
</template>
