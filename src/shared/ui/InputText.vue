<script lang="ts" setup>
//https://primevue.org/inputtext/

import InputText from 'primevue/inputtext';
import type { InputTextProps } from 'primevue/inputtext/InputText';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputTextPropsIgnore extends /* @vue-ignore */ InputTextProps { }

const props = defineProps<InputTextPropsIgnore>();
defineEmits<{ inputText: [value: string] }>();
</script>

<template>
  <InputText :pt="pt" @inputText="$emit('update:modelValue', $event)">
    <slot></slot>
  </InputText>
</template>

<style lang="scss" scoped></style>
