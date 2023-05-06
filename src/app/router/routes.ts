const routes = [
  {
    path: '/',
    name: 'homePage',
    component: () => import('~/pages/HomePage.vue'),
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('~/pages/RegistrationPage.vue'),
  },
  {
    path: '/authorization',
    name: 'authorization',
    component: () => import('~/pages/AuthorizationPage.vue'),
  },
  {
    path: '/second',
    name: 'secondPage',
    component: () => import('~/pages/SecondPage.vue'),
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: () => import('~/pages/StatisticsPage.vue'),
  },
  {
    path: '/management',
    name: 'management',
    component: () => import('~/pages/FinManagementPage.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('~/pages/ProfilePage.vue'),
  },
];

export default routes;
