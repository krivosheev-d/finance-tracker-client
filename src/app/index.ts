import app from './app';
import router from './router';
import store from './store';
import http from './http';

app.use(store);
app.use(router);
router.isReady().then(() => {
  app.mount('#app');
});
