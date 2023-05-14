import type { RouteRecordRaw } from 'vue-router'
import { usersApiRoutes } from './usersService'

const usersRoute: RouteRecordRaw[] = [
  {
    path: '/user-managment/users',
    name: 'users',
    component: () => import('./UsersPage.vue'),
    meta: {
      menuItem: true,
      permissions: [usersApiRoutes.users]
    }
  }
]

export { usersRoute }
