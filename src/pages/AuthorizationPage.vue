<script lang="ts" setup>
import { ref } from 'vue';
import InputMask from '~/shared/ui/InputMask.vue';

const textValue = ref('dsafsd');

function ooo() {
  alert('ooo');
}

</script>

<template>
  <div>
    <a href="https://primevue.org/inputmask/" target="_blank" rel="noopener noreferrer">inputmask</a>
    <div>
      <span>tel</span><br>
      <InputMask mask="+7(999)999-99-99" placeholder="+7(999)999-99-99" />
    </div>
    <div>
      <span>email</span><br>{{ textValue }} <br>
      <InputMask mask="+7(999)999-99-99" v-model="textValue" placeholder="+7(999)999-99-99" />
    </div>
    <div>
      <span>password</span><br>
      <InputMask mask="+7(999)999-99-99" placeholder="+7(999)999-99-99" />
    </div>


  </div>
</template>

<style scoped></style>
