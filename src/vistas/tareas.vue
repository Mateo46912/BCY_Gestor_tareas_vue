<script setup>
import { ref, computed } from 'vue'

import TareaForm from '../componentes/tarea_form.vue'
import TareaLista from '../componentes/tarea_lista.vue'
import TareaFiltro from '../componentes/tarea_filtro.vue'

const tareas = [
  {
    id: 1,
    title: 'Investigar sobre Vue',
    completed: true
  },
  {
    id: 2,
    title: 'Crear los componentes',
    completed: false
  },
  {
    id: 3,
    title: 'Revisar el diseño en celular',
    completed: false
  }
]

const filtro = ref('todas')
const tareaEditando = ref(null)
const mensaje = ref('')

const tareasFiltradas = computed(() => {
  if (filtro.value === 'pendientes') {
    return tareas.filter(tarea => !tarea.completed)
  }

  if (filtro.value === 'completadas') {
    return tareas.filter(tarea => tarea.completed)
  }

  return tareas
})

function mostrarEvento(nombre, datos) {
  mensaje.value = `Evento ${nombre}: ${JSON.stringify(datos)}`
}

function guardarEdicion(datos) {
  mostrarEvento('editar', datos)
  tareaEditando.value = null
}
</script>

<template>
  <main class="contenedor">
    <header>
      <h1>Mis tareas</h1>
      <p>Organiza tus actividades.</p>
    </header>

    <p class="aviso">
      Vista de ejemplo: los cambios todavía no se guardan.
    </p>

    <div class="contenido">
      <TareaForm
        :tarea="tareaEditando"
        @crear="mostrarEvento('crear', $event)"
        @editar="guardarEdicion"
        @cancelar="tareaEditando = null"
      />

      <section class="panel">
        <h2>Lista de tareas</h2>

        <TareaFiltro
          :filtro="filtro"
          @filtrar="filtro = $event"
        />

        <TareaLista
          :tareas="tareasFiltradas"
          @editar="tareaEditando = $event"
          @eliminar="mostrarEvento('eliminar', $event)"
          @completar="mostrarEvento('completar', $event)"
        />
      </section>
    </div>

    <p class="mensaje" role="status">{{ mensaje }}</p>
  </main>
</template>