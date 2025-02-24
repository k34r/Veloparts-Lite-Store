import { createRouter, createWebHistory } from 'vue-router'
import Cards from '@/pages/Cards.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cards',
      component: Cards,
    }
  ],
})

export default router
