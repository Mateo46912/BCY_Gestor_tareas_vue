import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usarTareasStore = defineStore('tareas', () => {

  const tareas = ref([
    'Investigación Estandares HTML',
    'Conexion Api Simpson',
    'Practica. - Desarrollo interactivo de app',
  ])

  return { tareas }

})