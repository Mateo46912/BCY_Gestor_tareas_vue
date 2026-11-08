import { createRouter, createWebHistory } from "vue-router";
import Tareas from "../vistas/tareas.vue";
import DetalleTareaEspecifica from "../vistas/DetalleTareaEspecifica.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/tareas",
    },

    {
      path: "/tareas",
      component: Tareas,
    },

    {
      path: "/tareas/:id",
      component: DetalleTareaEspecifica,
    },
  ],
});

export default router;
