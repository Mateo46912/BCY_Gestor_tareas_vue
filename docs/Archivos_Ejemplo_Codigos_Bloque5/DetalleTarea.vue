
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const tarea = ref(null)
const cargando = ref(true)
const error = ref('')

async function obtenerTarea() {
  try {
    const respuesta = await fetch(
      'http://localhost:3000/tareas/' + route.params.id
    )

    if (!respuesta.ok) {
      throw new Error('No se encontró la tarea')
    }

    tarea.value = await respuesta.json()

  } catch (e) {
    error.value = 'Error al consultar la API: ' + e.message

  } finally {
    cargando.value = false
  }
}

onMounted(obtenerTarea)
</script>

<template>
  <h2>Detalle de tarea</h2>

  <p v-if="cargando">Cargando tarea...</p>

  <p v-else-if="error">{{ error }}</p>

  <div v-else-if="tarea">
    <p><strong>ID:</strong> {{ tarea.id }}</p>
    <p><strong>Título:</strong> {{ tarea.titulo }}</p>
    <p><strong>Estado:</strong> {{ tarea.estado }}</p>
  </div>

  <RouterLink to="/tareas">Volver a la lista</RouterLink>
</template>
