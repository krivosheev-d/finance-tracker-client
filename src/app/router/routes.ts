const routes = [
  {
    path: '/',
    name: 'homePage',
    component: () => import('~/shared/components/Home.vue'),
  },
  {
    path: '/second',
    name: 'secondPage',
    component: () => import('~/shared/components/SecondPage.vue'),
  },
];

export default routes;
