import type { RouteRecordRaw } from 'vue-router'
import { dashboardRoute } from '@/pages/Home/SubPages/Dashboard'
import { userManagmentRoute } from '@/pages/Home/SubPages/UserManagment'
import { systemRoute } from '@/pages/Home/SubPages/System'

const homeRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./HomePage.vue'),
    redirect: { name: 'dashboard' } ,
    meta: {
      sidebar: true
    },
    children: [
      ...dashboardRoute,
      ...userManagmentRoute,
      ...systemRoute
    ]
  }
]


export { homeRoute }