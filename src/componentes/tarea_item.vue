<script setup>
defineProps({
  tarea: Object
})

defineEmits(['editar', 'eliminar', 'completar'])
</script>

<template>
  <li class="tarea">
    <p :class="{ completada: tarea.completed }">
      {{ tarea.title }}
    </p>

    <span>
      {{ tarea.completed ? 'Completada' : 'Pendiente' }}
    </span>

    <div class="botones">
      <button
        type="button"
        @click="$emit('completar', {
          id: tarea.id,
          completed: !tarea.completed
        })"
      >
        {{ tarea.completed ? 'Marcar pendiente' : 'Completar' }}
      </button>

      <button type="button" @click="$emit('editar', tarea)">
        Editar
      </button>

      <button
        type="button"
        class="eliminar"
        @click="$emit('eliminar', tarea.id)"
      >
        Eliminar
      </button>
    </div>
  </li>
</template>