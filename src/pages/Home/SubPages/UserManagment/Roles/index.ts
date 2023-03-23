import type { RouteRecordRaw } from 'vue-router'


const rolesRoute: RouteRecordRaw[] = [
  {
    path: '/user-managment/roles',
    name: 'roles',
    component: () => import('./RolesPage.vue'),
    meta: {
      menuItem: true
    }
  }
]


export { rolesRoute }