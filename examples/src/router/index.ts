import { createRouter, createWebHistory } from 'vue-router'
import ButtonView from '../views/ButtonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'button',
      component: ButtonView,
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../views/CardView.vue'),
    },
  ],
  linkActiveClass:"active"
})

export default router
