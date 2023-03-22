import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const useRoutes = ({ routes, BASE_URL }: { routes: RouteRecordRaw[], BASE_URL: string }) => {

  const router = createRouter({
    history: createWebHistory(BASE_URL),
    routes
  })

  router.beforeEach((to, _from, next) => {

    const token = window.localStorage.getItem('rich-token')

    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!token) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else if (to.fullPath.includes('/login') && token) {
      next({
        path: '/',
      })
    } else {
      next()
    }

  })

  return {
    router
  }
}

export default useRoutes