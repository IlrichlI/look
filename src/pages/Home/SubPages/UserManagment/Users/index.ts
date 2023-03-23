import type { RouteRecordRaw } from 'vue-router'


const usersRoute: RouteRecordRaw[] = [
  {
    path: '/user-managment/users',
    name: 'users',
    component: () => import('./usersPage.vue'),
    meta: {
      menuItem: true
    }
  }
]


export { usersRoute }