<script lang="ts" setup>
import InputNumber from '@/shared/ui/InputNumber.vue';
import { ref } from 'vue';

const testValue = ref(12);
</script>

<template>
  <div>
    FinManagement
    {{ testValue }} <br>
    <InputNumber v-model="testValue" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />

    <a href="https://primevue.org/inputnumber/" target="_blank" rel="noopener noreferrer">inputnumber</a>
  </div>
</template>

<style scoped></style>
