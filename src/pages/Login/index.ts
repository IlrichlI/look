import type { RouteRecordRaw } from 'vue-router'

const loginRoute: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('./LoginPage.vue')
  }
]

export { loginRoute }
