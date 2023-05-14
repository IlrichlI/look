import type { RouteRecordRaw } from 'vue-router'
import { permissionsRoute } from './Permissions'

const rolesRoute: RouteRecordRaw[] = [
  {
    path: '/user-management/roles',
    name: 'roles',
    component: () => import('./RolesPage.vue'),
    meta: {
      menuItem: true
    },
    children: [...permissionsRoute]
  }
]

export { rolesRoute }
