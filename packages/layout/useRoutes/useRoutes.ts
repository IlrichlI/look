import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
const useRoutes = ({ routes, BASE_URL }: { routes: RouteRecordRaw[]; BASE_URL: string }) => {
  const router = createRouter({
    history: createWebHistory(BASE_URL),
    routes
  })

  return {
    router
  }
}

export default useRoutes
