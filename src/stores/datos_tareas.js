import { ref } from "vue";
import { defineStore } from "pinia";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const TareasCompartidasStore = defineStore("tareas", () => {
  const tareas = ref([]);
  const EstaCargando = ref(false);
  const error = ref("");

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
    const tareaLocal = tareas.value.find((t) => t.id == id);
    if (tareaLocal) {
      return tareaLocal;
    }

    const respuesta = await fetch(`${API_BASE}/tareas/${id}`);
    if (!respuesta.ok) {
      throw new Error("No se encontró la tarea buscada");
    }
    return await respuesta.json();
  }

  async function CrearTareaNueva(nuevaTarea) {
    error.value = "";
    try {
      const respuesta = await fetch(`${API_BASE}/tareas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: nuevaTarea.title,
          completed: Boolean(nuevaTarea.completed),
        }),
      });

      if (!respuesta.ok) {
        throw new Error("No se pudo crear la tarea");
      }

      await ObtenerLasTareasAPI();
    } catch (e) {
      error.value = "Error al crear la tarea: " + e.message;
    }
  }

  async function ActualizarTareasPorID(datos) {
    error.value = "";

    try {
      const tareaActual = tareas.value.find((t) => t.id == datos.id);

      if (!tareaActual) {
        throw new Error("No se encontró la tarea");
      }

      const respuesta = await fetch(`${API_BASE}/tareas/${datos.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: datos.title,
          completed: tareaActual.completed,
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

  async function CambiarEstadoEntregaPorID(datos) {
    error.value = "";

    try {
      const tareaActual = tareas.value.find((t) => t.id == datos.id);

      if (!tareaActual) {
        throw new Error("No se encontró la tarea");
      }

      const respuesta = await fetch(`${API_BASE}/tareas/${datos.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: tareaActual.title,
          completed: datos.completed,
        }),
      });

      if (!respuesta.ok) {
        throw new Error("No se pudo cambiar el estado de la tarea");
      }

      await ObtenerLasTareasAPI();
    } catch (e) {
      error.value = "Error al cambiar el estado de la tarea: " + e.message;
    }
  }

  async function EliminarTareaPorID(id) {
    error.value = "";

    try {
      const respuesta = await fetch(`${API_BASE}/tareas/${id}`, {
        method: "DELETE",
      });

      if (!respuesta.ok) {
        throw new Error("No se pudo eliminar la tarea");
      }

      await ObtenerLasTareasAPI();
    } catch (e) {
      error.value = "Error al eliminar la tarea: " + e.message;
    }
  }

  return {
    tareas,
    EstaCargando,
    error,
    ObtenerLasTareasAPI,
    obtenerTareaPorID,
    CrearTareaNueva,
    ActualizarTareasPorID,
    CambiarEstadoEntregaPorID,
    EliminarTareaPorID,
  };
});