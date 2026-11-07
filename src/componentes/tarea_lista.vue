<script setup>
import TareaItem from './tarea_item.vue'

defineProps({
  tareas: Array
})

defineEmits(['editar', 'eliminar', 'completar'])
</script>

<template>
  <ul v-if="tareas.length > 0" class="lista">
    <TareaItem
      v-for="tarea in tareas"
      :key="tarea.id"
      :tarea="tarea"
      @editar="$emit('editar', $event)"
      @eliminar="$emit('eliminar', $event)"
      @completar="$emit('completar', $event)"
    />
  </ul>

  <p v-else>No hay tareas para mostrar.</p>
</template>