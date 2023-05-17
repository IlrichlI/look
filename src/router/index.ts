import { homeRoute } from '@/pages/Home'
import { loginRoute } from '@/pages/Login'
import { useRoutes } from '@rich/layout'

export const routes = [...loginRoute, ...homeRoute]

const { router } = useRoutes({
  routes,
  BASE_URL: import.meta.env.BASE_URL
})

router.beforeEach((to, from, next) => {
  const token = !!localStorage.getItem('token')
  if (to.path !== '/login' && !token) {
    next('/login')
  } else if (to.path === '/login' && token) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router
