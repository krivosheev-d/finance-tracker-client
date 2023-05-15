<script lang="ts" setup>
// https://primevue.org/button/#basic

import Button from 'primevue/button';
import type { ButtonProps } from 'primevue/button/Button';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonPropsIgnore extends /* @vue-ignore */ ButtonProps { }

defineProps<ButtonPropsIgnore>();

</script>

<template>
  <Button :label="label" :icon="icon" :iconPos="iconPos" :iconClass="iconClass" :badge="badge" :badgeClass="badgeClass"
    :loading="loading" :loadingIcon="loadingIcon" :link="link" :severity="severity" :raised="raised" :rounded="rounded"
    :text="text" :outlined="outlined" :size="size" :plain="plain">
    <slot>

    </slot>
  </Button>
</template>

<style lang="scss" scoped></style>
