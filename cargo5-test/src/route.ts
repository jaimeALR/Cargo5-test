// src/router/index.ts

import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import Homepage from './components/Homepage.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/',
    name: 'Homepage',
    component: Homepage,
    meta: { requiresAuth: true } // Indicates that this route requires authentication
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guard to check for required authentication
router.beforeEach((to, from, next) => {
  const authToken = localStorage.getItem('authToken');
  if (to.matched.some(record => record.meta.requiresAuth) && !authToken) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
