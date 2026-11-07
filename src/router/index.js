import { createRouter, createWebHistory } from 'vue-router'
import Tareas from '../vistas/tareas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Tareas
    }
  ]
})

export default router
