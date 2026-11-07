<script setup>
import { usarTareasStore } from '../stores/tareas'

const store = usarTareasStore()
</script>

<template>
  <h2>Lista invertida</h2>

  <ul>
    <li v-for="tarea in store.tareas.toReversed()" :key="tarea">
      {{ tarea }}
    </li>
  </ul>
</template>