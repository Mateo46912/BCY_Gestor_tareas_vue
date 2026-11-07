import { createRouter, createWebHistory } from 'vue-router'
import ListaTareas from '../views/ListaTareas.vue'
import DetalleTarea from '../views/DetalleTarea.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/tareas'
    },
    {
      path: '/tareas',
      component: ListaTareas
    },
    {
      path: '/tareas/:id',
      component: DetalleTarea
    }
  ]
})

export default router

