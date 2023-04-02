<template>
  <button
    :class="[
      'base-button',
      props.outlined ? `${getVariantClass()}_outlined` : getVariantClass()
    ]"
  >
    <span
      v-if="props.icon && props.iconParams.position === 'left'"
      class="material-symbols-outlined"
    >
      {{ props.icon }}
    </span>

    <span class="base-button__text button-text">
      <slot>
        {{ props.text }}
      </slot>
    </span>


    <span
      v-if="props.icon && props.iconParams.position === 'right'"
      class="material-symbols-outlined"
    >
      {{ props.icon }}
    </span>
  </button>
</template>

<script lang="ts" setup>
type TIconParams = {
  position?: 'left' | 'right',
}

interface IProps {
    outlined?: boolean,
    icon?: string,
    iconParams?: TIconParams,
    text?: string,
    variant?: 'default' | 'primary' | 'success' | 'error',
}

const props = withDefaults(defineProps<IProps>(), {
  outlined: false,
  iconParams: ():TIconParams => ({
    position: 'left',
  }),
  variant: 'default',
});

const getVariantClass = () => `base-button_${props.variant}`;
</script>

<script lang="ts">
export default {
  name: 'BaseButton'
};
</script>

<style lang="scss" scoped>
@import "@/app/styles/colors";

.base-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 24px;
  width: fit-content;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;

  &__text {
    align-self: center;
  }

  &:before {
    position: absolute;
    content: '';
    left: -2px;
    top: -2px;
    right: -2px;
    bottom: -2px;
    opacity: 0;
    border-radius: 4px;
    transition: 0.2s all;
  }
  &:hover {
    &:before {
      opacity: 0.1;
    }
  }
}

.dark {
  .base-button {
    &:before {
      background-color: #FFFFFF;
    }

    &_default {
      background-color: $btn-neutral-text;
      border-color: $btn-neutral-text;
      color: $btn-neutral;

      &_outlined {
        background-color: transparent;
        border-color: $btn-neutral;
        color: $btn-neutral;
      }
    }

    &_primary {
      background-color: $btn-primary;
      border-color: $btn-primary;
      color: $btn-text-default;

      &_outlined {
        background-color: transparent;
        border-color: $btn-primary;
        color: $btn-primary-enlightened;
      }
    }

    &_success {
      background-color: $btn-green;
      border-color: $btn-green;
      color: $btn-text-default;

      &_outlined {
        background-color: transparent;
        border-color: $btn-green;
        color: $btn-green;
      }
    }

    &_error {
      background-color: $btn-red;
      border-color: $btn-red;
      color: $btn-text-default;

      &_outlined {
        background-color: transparent;
        border-color: $btn-red;
        color: $btn-red;
      }
    }
  }
}

.light {
  .base-button {
    &:before {
      background-color: #000000;
    }

    &_default {
      background-color: $btn-neutral;
      border-color: $btn-neutral;
      color: $btn-neutral-text;

      &_outlined {
        background-color: transparent;
        border-color: $btn-neutral-text;
        color: $btn-neutral-text;
      }
    }

    &_primary {
      background-color: $btn-primary;
      border-color: $btn-primary;
      color: $btn-text-default;

      &_outlined {
        background-color: transparent;
        border-color: $btn-primary;
        color: $btn-primary;
      }
    }

    &_success {
      background-color: $btn-green;
      border-color: $btn-green;
      color: $btn-text-default;

      &_outlined {
        background-color: transparent;
        border-color: $btn-green;
        color: $btn-green;
      }
    }

    &_error {
      background-color: $btn-red;
      border-color: $btn-red;
      color: $btn-text-default;

      &_outlined {
        background-color: transparent;
        border-color: $btn-red;
        color: $btn-red;
      }
    }
  }
}
</style>
