import { requestLogRoute } from '@/pages/Home/SubPages/System/RequestLog'
import type { RouteRecordRaw } from 'vue-router'

const systemRoute: RouteRecordRaw[] = [
  {
    path: '/system',
    name: 'system',
    meta: {
      menuItem: true,
      icon: 'WarningOutlined'
    },
    children: [
      ...requestLogRoute,
    ]
  }
]


export { systemRoute }