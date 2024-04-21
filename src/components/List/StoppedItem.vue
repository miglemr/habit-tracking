<script setup>
import ResumeButton from './Buttons/ResumeButton.vue';
import { useHabitStore } from '../../stores/habits';
import { useModesStore } from '../../stores/modes';

defineProps(['text', 'id']);

const habits = useHabitStore();
const modes = useModesStore();
</script>

<template>
  <div
    class="container mx-auto max-w-md rounded-lg shadow-md bg-gray-100 mb-4 px-4 py-4"
  >
    <div class="flex justify-between">
      <span class="text-gray-500">
        {{ text }}
      </span>
      <ResumeButton
        v-show="!modes.add && !modes.edit && !modes.delete"
        @resume="habits.resume(id)"
      />
    </div>
  </div>
</template>
