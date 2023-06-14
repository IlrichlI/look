<template>
  <div class="jalali-date-picker">
    <div class="flex flex-col items-center">
      <div class="flex items-center mb-4">
        <button
          @click="previousYear"
          class="bg-blue-500 text-white px-[5px] mx-1 py-[3px] text-[8px]"
        >
          Previous Year
        </button>
        <button
          @click="previousMonth"
          class="bg-blue-500 text-white px-[5px] mx-1 py-[3px] text-[8px]"
        >
          Previous Month
        </button>
        <div class="mx-4">{{ dateName }}</div>
        <button
          @click="nextMonth"
          class="bg-blue-500 text-white px-[5px] mx-1 py-[3px] text-[8px]"
        >
          Next Month
        </button>
        <button
          @click="nextYear"
          class="bg-blue-500 text-white px-[5px] mx-1 py-[3px] text-[8px]"
        >
          Next Year
        </button>
      </div>
      <div class="grid grid-cols-7 gap-2">
        <template v-for="day in daysInMonth" :key="day">
          <button
            class="bg-blue-500 text-white w-8 h-8 rounded-full"
            @click="selectDate(day)"
          >
            {{ currentMonth.clone().jDate(day).format('jD') }}
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import moment from 'moment-jalaali';

const emit = defineEmits(['select-day']);

const selectedDate = ref(moment());
const currentMonth = ref(moment().startOf('jMonth'));
const daysInMonth = computed(() => currentMonth.value.daysInMonth());
const dateName = computed(() => currentMonth.value.format('jMMMM jYYYY'));

function previousMonth() {
  currentMonth.value = currentMonth.value.subtract(1, 'jMonth');
}

function nextMonth() {
  currentMonth.value = currentMonth.value.add(1, 'jMonth');
}

function previousYear() {
  currentMonth.value = currentMonth.value.subtract(1, 'jYear');
}

function nextYear() {
  currentMonth.value = currentMonth.value.add(1, 'jYear');
}

function selectDate(day: number) {
  selectedDate.value = currentMonth.value.clone().jDate(day);
  emit('select-day', { date: selectedDate.value });
}
</script>
