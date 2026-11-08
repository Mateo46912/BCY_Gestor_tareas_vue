<script setup>
import { ref, computed, onMounted } from 'vue'
import { TareasCompartidasStore } from '../stores/datos_tareas'

import TareaForm from '../componentes/tarea_form.vue'
import TareaLista from '../componentes/tarea_lista.vue'
import TareaFiltro from '../componentes/tarea_filtro.vue'


const store_compartida = TareasCompartidasStore()

onMounted(() => {
  store_compartida.ObtenerLasTareasAPI()
})


const filtro = ref('todas')
const tareaEditando = ref(null)
const mensaje = ref('')

const tareasFiltradas = computed(() => {
  if (filtro.value === 'pendientes') {
    return store_compartida.tareas.filter(tarea => !tarea.completed)
  }

  if (filtro.value === 'completadas') {
    return store_compartida.tareas.filter(tarea => tarea.completed)
  }

  return store_compartida.tareas
})

function mostrarEvento(nombre, datos) {
  mensaje.value = `Evento ${nombre}: ${JSON.stringify(datos)}`
}

async function guardarEdicion(datos) {
  await store_compartida.ActualizarTareasPorID(datos)

  tareaEditando.value = null
}
</script>

<template>
  <main class="contenedor">
    <header>
      <h1>Mis tareas</h1>
      <p>Organiza tus actividades.</p>
    </header>


    <div class="contenido">
      <TareaForm
        :tarea="tareaEditando"
        @crear="store_compartida.CrearTareaNueva($event)"
        @editar="guardarEdicion"
        @cancelar="tareaEditando = null"
      />

      <section class="panel">
        <h2>Lista de tareas</h2>
        <p v-if="store_compartida.EstaCargando">Cargando tareas...</p>
        <p v-else-if="store_compartida.error">{{ store_compartida.error }}</p>

        <TareaFiltro
          :filtro="filtro"
          @filtrar="filtro = $event"
        />

       <TareaLista
          v-if="!store_compartida.EstaCargando && !store_compartida.error"
          :tareas="tareasFiltradas"
          @editar="tareaEditando = $event"
          @eliminar="store_compartida.EliminarTareaPorID($event)"
          @completar="store_compartida.CambiarEstadoEntregaPorID($event)"
        />
      </section>
    </div>

    <p class="mensaje" role="status">{{ mensaje }}</p>
  </main>
</template>