import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [
        {
          path: '',
          component: () => import('../views/LogInView.vue')
        },
        {
          path: 'login',
          component: () => import('../views/LogInView.vue')
        },
        {
          path: 'signup',
          component: () => import('../views/SignUpView.vue')
        }
      ]
    },
    {
      path: '/todolist',
      component: () => import('../views/TodolistView.vue'),
      beforeEnter: (to, from) => {
        if (!['/', '/login'].includes(from.fullPath)) router.push('/login')
      },
      children: [
        { path: '/todolist/:status', component: () => import('../views/TodolistView.vue') }
      ]
    }
  ]
})

export default router
