<script setup>
import Header from '../components/Header.vue';
import List from '../components/List/index.vue';
import DeletePopup from '../components/DeletePopup.vue';
import AddNewHabit from '../components/AddNewHabit.vue';
import AddButton from '../components/Buttons/AddButton.vue';
import { useModesStore } from '../stores/modes';

const modes = useModesStore();
</script>

<template>
  <Header :title="'Habit List'" :show-date="false" />
  <DeletePopup v-show="modes.delete" />
  <div
    class="container mx-auto max-w-lg min-h-min py-10 rounded-3xl bg-white/40"
  >
    <List />
    <AddNewHabit v-show="modes.add" />
    <AddButton v-show="!modes.add && !modes.edit && !modes.delete" />
  </div>
</template>
