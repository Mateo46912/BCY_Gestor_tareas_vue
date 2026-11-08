import { ref } from "vue";
import { defineStore } from "pinia";

export const TareasCompartidasStore = defineStore("tareas", () => {
  const tareas = ref([]);
  const EstaCargando = ref(false);
  const error = ref("");

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";

  async function ObtenerLasTareasAPI() {
    EstaCargando.value = true;
    error.value = "";

    try {
      const respuesta = await fetch(`${API_BASE}/tareas`);

      if (!respuesta.ok) {
        throw new Error("No se pudieron obtener las tareas");
      }

      tareas.value = await respuesta.json();
    } catch (e) {
      error.value = "Error al consultar la API: " + e.message;
    } finally {
      EstaCargando.value = false;
    }
  }

  async function obtenerTareaPorID(id) {
    const tareaEncontradaLocal = tareas.value.find((tarea) => String(tarea.id) === String(id));

    if (tareaEncontradaLocal) {
      return tareaEncontradaLocal;
    }

    const respuesta = await fetch(`${API_BASE}/tareas/${id}`);

    if (!respuesta.ok) {
      throw new Error("No se encontró la tarea buscada");
    }

    return await respuesta.json();
  }

  async function CrearTareaNueva(tareaNueva) {
    error.value = "";

    try {
      const respuesta = await fetch(`${API_BASE}/tareas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tareaNueva),
      });

      if (!respuesta.ok) {
        throw new Error("No fue posible crear la tarea");
      }

      await ObtenerLasTareasAPI();
    } catch (e) {
      error.value = "Se produjo un error al intentar crear la tarea: " + e.message;
    }
  }

  async function EliminarTareaPorID(id) {
    error.value = "";

    try {
      const respuesta = await fetch(`${API_BASE}/tareas/${id}`, {
        method: "DELETE",
      });

      if (!respuesta.ok) {
        throw new Error("No fue posible eliminar la tarea");
      }

      await ObtenerLasTareasAPI();
    } catch (e) {
      error.value = "Se produjo un error al intentar eliminar la tarea: " + e.message;
    }
  }

  async function ActualizarTareasPorID(tarea_por_actualizar) {
    error.value = "";

    try {
      const respuesta = await fetch(`${API_BASE}/tareas/${tarea_por_actualizar.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: tarea_por_actualizar.title,
        }),
      });

      if (!respuesta.ok) {
        throw new Error("No se pudo actualizar la tarea");
      }

      await ObtenerLasTareasAPI();
    } catch (e) {
      error.value = "Error al actualizar la tarea: " + e.message;
    }
  }

  async function CambiarEstadoEntregaPorID(tarea_por_cambiar_estado) {
    error.value = "";

    try {
      const respuesta = await fetch(`${API_BASE}/tareas/${tarea_por_cambiar_estado.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: tarea_por_cambiar_estado.completed,
        }),
      });

      if (!respuesta.ok) {
        throw new Error("No se pudo cambiar el estado");
      }

      await ObtenerLasTareasAPI();
    } catch (e) {
      error.value = "Error al cambiar el estado: " + e.message;
    }
  }

  return {
    tareas,
    EstaCargando,
    error,
    ObtenerLasTareasAPI,
    CrearTareaNueva,
    EliminarTareaPorID,
    ActualizarTareasPorID,
    CambiarEstadoEntregaPorID,
    obtenerTareaPorID,
  };
});