<script lang="ts" setup>
import { ref } from 'vue';
import InputMask from '~/shared/ui/InputMask.vue';
import InputText from '~/shared/ui/InputText.vue';
import InputPassword from '~/shared/ui/InputPassword.vue';

const testValue = ref('');

</script>

<template>
  <div>

    <div>
      <span>tel</span><br>
      <InputMask mask="+7(999)999-99-99" placeholder="+7(999)999-99-99" type="tel" />
      <a href="https://primevue.org/inputmask/" target="_blank" rel="noopener noreferrer"> inputmask</a>
    </div>
    <div>
      <span>email</span><br>
      <InputText type="email" />
    </div>
    <div>
      <span>username</span><br>
      <InputText type="text" v-model="testValue" /> {{ testValue }}
      <a href="https://primevue.org/inputtext/" target="_blank" rel="noopener noreferrer">inputtext</a>
    </div>

    <div>
      <span>password</span><br>
      <InputPassword /><a href="https://primevue.org/password/" target="_blank" rel="noopener noreferrer"> password</a>
    </div>


  </div>
</template>

<style scoped></style>
