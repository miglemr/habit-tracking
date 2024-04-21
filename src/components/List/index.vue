<script setup>
import { useHabitStore } from '../../stores/habits';
import ListItem from './ListItem.vue';

const habits = useHabitStore();
</script>

<template>
  <h1
    v-if="habits.items.length === 0"
    class="flex justify-center mb-10 text-lg font-[500]"
  >
    Add a new habit
  </h1>
  <div v-else>
    <ListItem
      v-for="item in habits.items"
      :key="item.id"
      :id="item.id"
      :text="item.text"
      :stopped="habits.isItemStoped(item.id)"
      v-model="item.text"
    ></ListItem>
  </div>
</template>
