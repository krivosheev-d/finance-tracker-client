
<script lang="ts" setup>
import { useAuthStore } from '~/app/store/auth';

const authStore = useAuthStore();
const isLoggedIn = authStore.isLoggedIn ? 'Logged as' : 'Not logged';
const profileNmae = authStore.getProfile ? `: ${authStore.getProfile.name}` : '';
</script>

<template>
  <nav class="navbar">
    <router-link :to="{ name: 'homePage' }" class="navbar__link">
      Home page
    </router-link>
    |
    <router-link :to="{ name: 'secondPage' }" class="navbar__link">
      Second page
    </router-link>
    |
    <router-link :to="{ name: 'registration' }" class="navbar__link">
      registration
    </router-link>
    |
    <router-link :to="{ name: 'authorization' }" class="navbar__link">
      authorization
    </router-link>
    |
    <router-link :to="{ name: 'statistics' }" class="navbar__link">
      statistics
    </router-link>
    |
    <router-link :to="{ name: 'management' }" class="navbar__link">
      management
    </router-link>
    |
    <router-link :to="{ name: 'profile' }" class="navbar__link">
      profile
    </router-link>
    |

  </nav>
  {{ isLoggedIn }}
  {{ profileNmae }}
</template>


<style lang="scss" scoped>
.navbar {
  &__link {
    color: red !important;
  }
}
</style>
