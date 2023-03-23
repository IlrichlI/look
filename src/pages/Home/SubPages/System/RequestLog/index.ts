import type { RouteRecordRaw } from 'vue-router'


const requestLogRoute: RouteRecordRaw[] = [
  {
    path: '/system/request-log',
    name: 'request-log',
    component: () => import('./RequestLogPage.vue'),
    meta: {
      menuItem: true
    }
  }
]


export { requestLogRoute }