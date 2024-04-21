<script setup>
import { ref } from 'vue';
import * as Dates from './dates';
import CalendarItem from './CalendarItem.vue';

const dates = ref(Dates.getCurrentDates(6));

function toPrevious() {
  const firstDate = dates.value[0].fulldate;
  dates.value = Dates.getDates(firstDate, 6, 'prev');
}

function toNext() {
  const lastDate = dates.value[dates.value.length - 1].fulldate;
  const today = new Date(Date.now()).toLocaleDateString('lt-LT');
  if (lastDate === today) return;
  dates.value = Dates.getDates(lastDate, 6, 'next');
}
</script>

<template>
  <div class="flex justify-between container mx-auto max-w-md m-10">
    <button type="button" @click="toPrevious">
      <img src="../../components/icons/left-chevron.png" alt="left-arrow" />
    </button>
    <div class="flex">
      <RouterLink
        v-for="(date, index) in dates"
        :to="{ name: 'day', params: { date: date.fulldate } }"
        :key="index"
      >
        <CalendarItem
          :day="date.day"
          :dayShort="date.dayShort"
          :fulldate="date.fulldate"
        ></CalendarItem>
      </RouterLink>
    </div>
    <button type="button" @click="toNext">
      <img src="../../components/icons/chevron.png" alt="right-arrow" />
    </button>
  </div>
</template>
