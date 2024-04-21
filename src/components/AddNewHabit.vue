<script setup>
import { ref } from 'vue';
import SubmitButton from './Buttons/SubmitButton.vue';
import CancelButton from './Buttons/CancelButton.vue';
import { useHabitStore } from '../stores/habits';
import { useModesStore } from '../stores/modes';

const habits = useHabitStore();
const modes = useModesStore();

const newItemText = ref('');

function addItem(text) {
  const textToAdd = text.trim();
  if (textToAdd !== '') habits.add(text);
  modes.add = false;
  newItemText.value = '';
}
</script>

<template>
  <form
    class="flex container mx-auto max-w-md rounded-lg shadow-md bg-white mb-4 p-2"
    @submit.prevent="addItem(newItemText)"
  >
    <label for="new" class="hidden"></label>
    <input
      v-model="newItemText"
      type="text"
      class="grow px-1 mx-1 outline-none border-r-0 border-t-0 border-l-0 border-b-1 border-slate-200 focus:border-slate-400 focus:ring-0 focus:ring-offset-0"
      id="new"
      required
      maxlength="33"
    />

    <div class="self-center">
      <SubmitButton />
      <CancelButton
        @cancel="
          modes.add = false;
          newItemText = '';
        "
      />
    </div>
  </form>
</template>
