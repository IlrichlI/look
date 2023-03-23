import type { RouteRecordRaw } from 'vue-router'
import { dashboardRoute } from '@/pages/Home/SubPages/Dashboard'
import { userManagmentRoute } from '@/pages/Home/SubPages/UserManagment'

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
      ...userManagmentRoute
    ]
  }
]


export { homeRoute }