<script setup>
import { usarTareasStore } from '../stores/tareas'

const store = usarTareasStore()
</script>

<template>
  <h2>Lista normal</h2>

  <ul>
    <li v-for="tarea in store.tareas" :key="tarea">
      {{ tarea }}
    </li>
  </ul>
</template>