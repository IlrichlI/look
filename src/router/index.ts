import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import { loginRoute } from '@/pages/Login'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...loginRoute,
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true, permission: '' }
    },
  ]
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

export default router
