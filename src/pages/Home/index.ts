import type { RouteRecordRaw } from 'vue-router'
import { dashboardRoute } from '@/pages/Home/SubPages/Dashboard'
import { userManagementRoute } from '@/pages/Home/SubPages/UserManagement'
import { systemRoute } from '@/pages/Home/SubPages/System'

const homeRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./HomePage.vue'),
    redirect: { name: 'dashboard' },
    meta: {
      sidebar: true
    },
    children: [...dashboardRoute, ...userManagementRoute, ...systemRoute]
  }
]

export { homeRoute }
