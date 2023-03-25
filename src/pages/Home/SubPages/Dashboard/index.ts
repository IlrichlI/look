import type { RouteRecordRaw } from 'vue-router'


const dashboardRoute: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('./DashboardPage.vue'),
    meta: {
      menuItem: true,
      icon: 'DashboardOutlined'
    }
  }
]


export { dashboardRoute }