<script setup>
defineProps({
  filtro: String
})

defineEmits(['filtrar'])
</script>

<template>
  <div class="filtro">
    <label for="filtro">Mostrar:</label>

    <select
      id="filtro"
      :value="filtro"
      @change="$emit('filtrar', $event.target.value)"
    >
      <option value="todas">Todas</option>
      <option value="pendientes">Pendientes</option>
      <option value="completadas">Completadas</option>
    </select>
  </div>
</template>