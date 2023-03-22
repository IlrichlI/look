import { homeRoute } from '@/pages/Home'
import { loginRoute } from '@/pages/Login'
import { useRoutes } from '@rich/layout'

export const routes = [
  ...loginRoute,
  ...homeRoute
]


const { router } = useRoutes({
  routes,
  BASE_URL: import.meta.env.BASE_URL
})

export default router
