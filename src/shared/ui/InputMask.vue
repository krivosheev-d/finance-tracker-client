<script lang="ts" setup>
//https://primevue.org/inputmask/

import InputMask from 'primevue/inputmask';
import type { InputMaskProps } from 'primevue/inputmask/InputMask';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputMaskPropsIgnore extends /* @vue-ignore */ InputMaskProps { }

defineProps<InputMaskPropsIgnore>();

const emit = defineEmits<{
  inputMask: [value: string],
  focus: [],
  blur: [],
  keydown: [],
  complete: [],
  keypress: [],
  paste: []
}>();
</script>

<template>
  <InputMask :modelValue="modelValue" :slotChar="slotChar" :mask="mask" :autoClear="autoClear" :unmask="unmask"
    :readonly="readonly" :pt="pt" @focus="emit('focus')" @blur="emit('blur')" @keydown="emit('keydown')"
    @complete="emit('complete')" @keypress="emit('keypress')" @paste="emit('paste')"
    @inputMask="$emit('update:modelValue', $event)">
    <slot></slot>
  </InputMask>
</template>

<style lang="scss" scoped></style>
