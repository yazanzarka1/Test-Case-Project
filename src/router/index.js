import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user/:username',
      name: 'user-index',
      component: () => import('../views/UserIndexView.vue')
    },
    {
      path: '/error',
      name: 'not-found',
      component: () => import('../views/404.vue')
    },
    { path: '/:catchAll(.*)', redirect: "/error" },
  ]
})

export default router