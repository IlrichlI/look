import type { RouteRecordRaw } from 'vue-router'
import { dashboardRoute } from '@/pages/Home/Dashboard'


const homeRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./HomePage.vue'),
    meta: {
      sidebar: true
    },
    children: [
      ...dashboardRoute
    ]
  }
]


export { homeRoute }