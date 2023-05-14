import { usersRoute } from '@/pages/Home/SubPages/UserManagement/Users'
import { rolesRoute } from '@/pages/Home/SubPages/UserManagement/Roles'
import type { RouteRecordRaw } from 'vue-router'

const userManagementRoute: RouteRecordRaw[] = [
  {
    path: '/user-management',
    name: 'user-management',
    meta: {
      menuItem: true,
      icon: 'UsergroupAddOutlined'
    },
    children: [...usersRoute, ...rolesRoute]
  }
]

export { userManagementRoute }
