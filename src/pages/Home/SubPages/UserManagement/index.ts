import { usersRoute } from '@/pages/Home/SubPages/UserManagment/Users'
import { rolesRoute } from '@/pages/Home/SubPages/UserManagment/Roles'
import type { RouteRecordRaw } from 'vue-router'

const userManagmentRoute: RouteRecordRaw[] = [
  {
    path: '/user-managment',
    name: 'user-managment',
    meta: {
      menuItem: true,
      icon: 'UsergroupAddOutlined'
    },
    children: [...usersRoute, ...rolesRoute]
  }
]

export { userManagmentRoute }
