import type { RouteRecordRaw } from 'vue-router'


const permissionsRoute: RouteRecordRaw[] = [
  {
    path: '/user-managment/roles/permissions',
    name: 'permissions',
    component: () => import('./PermissionsPage.vue'),
    meta: {
      menuItem: false
    }
  }
]


export { permissionsRoute }