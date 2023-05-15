import app from './app';
import router from './router';
import store from './store';
import http from './http';
import PrimeVue from 'primevue/config';

app.use(store).use(router).use(PrimeVue);
router.isReady().then(() => {
  app.mount('#app');
});
