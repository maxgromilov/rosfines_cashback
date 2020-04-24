import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/companys/:id',
    name: 'Company',
    component: () => import('../views/Company.vue'),
  },
  {
    path: '/companys',
    name: 'company',
    component: () => import('../views/Company.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Company.vue'),
  },
  {
    path: '/receipt',
    name: 'Receipt',
    component: () => import('../views/Receipt.vue'),
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('../views/Success.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;