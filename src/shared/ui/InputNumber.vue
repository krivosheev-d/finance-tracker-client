<script lang="ts" setup>
//https://primevue.org/inputnumber/"

import InputNumber from 'primevue/inputnumber';
import type { InputNumberProps } from 'primevue/inputnumber/InputNumber';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputNumberPropsIgnore extends /* @vue-ignore */ InputNumberProps { }

const props = defineProps<InputNumberPropsIgnore>();
const emit = defineEmits<{
  inputNumber: [value: string],
  input: [],
  focus: [],
  blur: [],
}>();
</script>

<template>
  <InputNumber :format="format" :showButtons="showButtons" :buttonLayout="buttonLayout"
    :incrementButtonClass="incrementButtonClass" :decrementButtonClass="decrementButtonClass"
    :decrementButtonIcon="decrementButtonIcon" :locale="locale" :localeMatcher="localeMatcher" :mode="mode"
    :prefix="prefix" :suffix="suffix" :currency="currency" :currencyDisplay="currencyDisplay" :useGrouping="useGrouping"
    :minFractionDigits="minFractionDigits" :maxFractionDigits="maxFractionDigits" :min="min" :max="max" :step="step"
    :allowEmpty="allowEmpty" :highlightOnFocus="highlightOnFocus" :disabled="disabled" :readonly="readonly"
    :placeholder="placeholder" :inputId="inputId" :inputClass="inputClass" :inputStyle="inputStyle"
    :inputProps="inputProps" :incrementButtonProps="incrementButtonProps" :decrementButtonProps="decrementButtonProps"
    :aria-labelledby="props['aria-labelledby']" :aria-label="props['aria-label']" :pt="pt" @input="emit('input')"
    @focus="emit('focus')" @blur="emit('blur')" @inputNumber="$emit('update:modelValue', $event)">
    <slot></slot>
  </InputNumber>
</template>

<style lang="scss" scoped></style>
