<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  tarea: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['crear', 'editar', 'cancelar'])

const titulo = ref('')

watch(
  () => props.tarea,
  (tarea) => {
    titulo.value = tarea ? tarea.title : ''
  },
  { immediate: true }
)

function enviar() {
  const title = titulo.value.trim()

  if (title === '') return

  if (props.tarea) {
    emit('editar', {
      id: props.tarea.id,
      title
    })
  } else {
    emit('crear', {
      title,
      completed: false
    })

    titulo.value = ''
  }
}
</script>

<template>
  <form class="panel formulario" @submit.prevent="enviar">
    <h2>{{ tarea ? 'Editar tarea' : 'Nueva tarea' }}</h2>

    <label for="titulo">Título</label>

    <input
      id="titulo"
      v-model="titulo"
      type="text"
      placeholder="Escribe una tarea"
      maxlength="120"
      required
    >

    <button type="submit" :disabled="titulo.trim() === ''">
      {{ tarea ? 'Guardar cambios' : 'Agregar tarea' }}
    </button>

    <button
      v-if="tarea"
      type="button"
      @click="emit('cancelar')"
    >
      Cancelar
    </button>
  </form>
</template>