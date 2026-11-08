<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { TareasCompartidasStore } from "../stores/datos_tareas";

const route = useRoute();
const store_compartida = TareasCompartidasStore();

const tarea = ref(null);
const EstaCargando = ref(true);
const error = ref("");

async function obtenerTarea() {
  try {
    tarea.value = await store_compartida.obtenerTareaPorID(route.params.id);
  } catch (e) {
    error.value = "Error al consultar la tarea en la API: " + e.message;
  } finally {
    EstaCargando.value = false;
  }
}

onMounted(obtenerTarea);
</script>

<template>
  <div class="contenedor">
    <section class="panel">
      <h2>Detalles de la tarea</h2>

      <p v-if="EstaCargando">Cargando la tarea...</p>

      <p v-else-if="error">{{ error }}</p>

      <div v-else-if="tarea">
        <p><strong>ID:</strong> {{ tarea.id }}</p>
        <p><strong>Título:</strong> {{ tarea.title }}</p>
        <p>
          <strong>Estado:</strong>
          {{ tarea.completed ? "Completada" : "Pendiente" }}
        </p>
      </div>

      <RouterLink id="EnlaceVolverDetalles" to="/tareas">Volver a la lista de tareas</RouterLink>
    </section>
  </div>
</template>
