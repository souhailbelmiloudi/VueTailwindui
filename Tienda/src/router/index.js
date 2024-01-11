import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: "GridArticl"
    },
    {
      path: '/about',
      name: 'about',
     
      component: () => import('../components/GridArticl.vue')
    }
  ]
})

export default router
