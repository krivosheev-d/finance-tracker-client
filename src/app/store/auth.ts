import { defineStore } from 'pinia';

type TProfile = {
  name: string,
  email: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    profile: {
      name: 'User',
      email: 'test@test.com'
    }
  }),
  getters: {
    getProfile: (state): TProfile | null => state.profile,
    isLoggedIn: (state): boolean => Boolean(state.profile)
  },
  actions: {},
});
