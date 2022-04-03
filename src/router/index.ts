import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('@/views/home.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('@/views/about.vue')
  // },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    redirect: { name: 'Login' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router