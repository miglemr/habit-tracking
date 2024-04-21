<script setup>
import StoppedItem from './StoppedItem.vue';
import EditButton from './Buttons/EditButton.vue';
import DeleteButton from './Buttons/DeleteButton.vue';
import StopButton from './Buttons/StopButton.vue';
import SubmitButton from '../Buttons/SubmitButton.vue';
import { useHabitStore } from '../../stores/habits';
import { useModesStore } from '../../stores/modes';

defineProps(['id', 'text', 'stopped', 'modelValue']);

const habits = useHabitStore();
const modes = useModesStore();

function submitEdit(id, text) {
  habits.edit(id, text);
  modes.edit = false;
}
</script>

<template>
  <div
    v-if="!stopped"
    class="container mx-auto max-w-md rounded-lg shadow-md bg-white mb-4 px-4"
    :class="{
      'py-2': modes.edit === id,
      'py-4': modes.edit !== id,
      'ring-2 ring-light-orange/[.55]': habits.itemToDelete === id,
    }"
  >
    <!-- Edit mode on -->
    <form
      v-if="modes.edit === id"
      class="flex"
      @submit.prevent="submitEdit(id, text)"
    >
      <label :for="id" class="hidden"></label>
      <input
        type="text"
        class="grow px-1 mx-1 outline-none border-r-0 border-t-0 border-l-0 border-b-1 border-slate-200 bg-transparent focus:border-slate-400 focus:ring-0 focus:ring-offset-0"
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        required
      />
      <SubmitButton />
    </form>

    <!-- Edit mode off -->
    <div v-else class="flex justify-between">
      <span>{{ text }}</span>

      <div
        v-show="!modes.add && !modes.edit && !modes.delete"
        class="flex items-center"
      >
        <EditButton @edit="modes.edit = id" />
        <DeleteButton
          @delete="
            habits.itemToDelete = id;
            modes.delete = true;
          "
        />
        <StopButton @stop="habits.stop(id)" />
      </div>
    </div>
  </div>

  <StoppedItem v-else :text="text" :id="id" />
</template>
