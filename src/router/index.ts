import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component:  () => import('@/pages/Login/login.vue'),
  },
  {
    path: '/hello',
    name: 'hello',
    component:  () => import('@/components/HelloWorld.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;