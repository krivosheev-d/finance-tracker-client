<script lang="ts" setup>
// https://primevue.org/password/

import Password from 'primevue/password';
import type { PasswordProps } from 'primevue/password/Password';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputPasswordPropsIgnore extends /* @vue-ignore */ PasswordProps { }

const props = defineProps<InputPasswordPropsIgnore>();
defineEmits<{ input: [value: string] }>();
</script>

<template>
  <Password :modelValue="modelValue" :promptLabel="promptLabel" :mediumRegex="mediumRegex" :strongRegex="strongRegex"
    :weakLabel="weakLabel" :mediumLabel="mediumLabel" :strongLabel="strongLabel" :feedback="feedback" :appendTo="appendTo"
    :toggleMask="toggleMask" :hideIcon="hideIcon" :showIcon="showIcon" :disabled="disabled" :placeholder="placeholder"
    :required="required" :inputId="inputId" :inputStyle="inputStyle" :inputClass="inputClass" :inputProps="inputProps"
    :panelId="panelId" :panelClass="panelClass" :panelStyle="panelStyle" :panelProps="panelProps" :pt="pt"
    :aria-labelledby="props['aria-labelledby']" :aria-label="props['aria-label']"
    @input="$emit('update:modelValue', $event)">
    <slot></slot>
  </Password>
</template>

<style lang="scss" scoped></style>
