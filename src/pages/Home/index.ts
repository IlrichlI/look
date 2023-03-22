import type { RouteRecordRaw } from 'vue-router'


const homeRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./HomePage.vue'),
    meta: {
      sidebar: true
    },
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../Login/LoginPage.vue'),
        meta: {
          menuitem: true,
          icon: 'pie-chart-outlined'
        },
      }
    ]
  }
]


export { homeRoute }