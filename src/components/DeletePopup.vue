<script setup>
import { useHabitTrackingStore } from '../stores/habitTracking';
import { useHabitStore } from '../stores/habits';
import CancelButton from './Buttons/CancelButton.vue';
import ConfirmButton from './Buttons/ConfirmButton.vue';
import { useModesStore } from '../stores/modes';

const habits = useHabitStore();
const modes = useModesStore();

function deleteItem() {
  const habitTracking = useHabitTrackingStore();

  const id = habits.itemToDelete;

  habits.remove(id);
  habitTracking.remove(id);
  habits.itemToDelete = null;
  modes.delete = false;
}
</script>

<template>
  <div
    class="flex justify-between container mx-auto mb-10 py-1 px-4 max-w-md bg-indigo-200/30 rounded-lg border border-indigo-200/50"
  >
    <p class="py-2 text-sm">Are you sure you want to delete this item?</p>
    <div>
      <ConfirmButton @confirm="deleteItem" />
      <CancelButton
        @cancel="
          habits.itemToDelete = null;
          modes.delete = false;
        "
      />
    </div>
  </div>
</template>
