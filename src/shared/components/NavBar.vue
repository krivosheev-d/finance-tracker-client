<template>
  <nav class="navbar">
    <router-link
      :to="{
        name: 'homePage'
      }"
      class="navbar__link"
    >
      Home page
    </router-link>

    <router-link
      :to="{
        name: 'secondPage'
      }"
      class="navbar__link"
    >
      Second page
    </router-link>
  </nav>
  {{ isLoggedIn ? 'Logged as' : 'Not logged' }}
  {{ isLoggedIn ? `: ${profile.name}` : '' }}
</template>

<script lang="ts" setup>
import { useAuthStore } from '~/app/store/auth';

const authStore = useAuthStore();
const isLoggedIn = authStore.isLoggedIn;
const profile = authStore.getProfile;
</script>

<style lang="scss" scoped>
.navbar {
  &__link {
    color: red!important;
  }
}
</style>
