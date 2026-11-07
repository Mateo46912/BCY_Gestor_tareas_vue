
<script setup>
import { ref, onMounted } from 'vue'

const tareas = ref([])
const cargando = ref(true)
const error = ref('')

async function obtenerTareas() {
  try {
    const respuesta = await fetch('http://localhost:3000/tareas')

    if (!respuesta.ok) {
      throw new Error('No se pudieron obtener las tareas')
    }

    tareas.value = await respuesta.json()

  } catch (e) {
    error.value = 'Error al consultar la API: ' + e.message

  } finally {
    cargando.value = false
  }
}

onMounted(obtenerTareas)
</script>

<template>
  <h2>Lista de tareas</h2>

  <p v-if="cargando">Cargando tareas...</p>

  <p v-else-if="error">{{ error }}</p>

  <ul v-else>
    <li v-for="tarea in tareas" :key="tarea.id">
      {{ tarea.titulo }} - {{ tarea.estado }}

      <RouterLink :to="'/tareas/' + tarea.id">
        Ver detalle
      </RouterLink>
    </li>
  </ul>
</template>
