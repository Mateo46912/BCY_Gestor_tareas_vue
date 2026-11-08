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
    const tareaLocal = tareas.value.find((t) => String(t.id) === String(id));
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

  async function ActualizarTareasPorID(datos, tituloOpcional) {
    error.value = "";
    try {
      const id = typeof datos === "object" ? datos.id : datos;
      const nuevoTitulo = typeof datos === "object" ? datos.title : tituloOpcional;

      const tareaActual = tareas.value.find((t) => String(t.id) === String(id));
      const estadoActual =
        datos && typeof datos === "object" && datos.completed !== undefined
          ? Boolean(datos.completed)
          : tareaActual
          ? Boolean(tareaActual.completed)
          : false;

      const respuesta = await fetch(`${API_BASE}/tareas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: nuevoTitulo,
          completed: estadoActual,
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

  async function CambiarEstadoEntregaPorID(datos, estadoOpcional) {
    error.value = "";
    try {
      const id = typeof datos === "object" ? datos.id : datos;
      const nuevoEstado =
        typeof datos === "object" ? datos.completed : estadoOpcional;

      const tareaActual = tareas.value.find((t) => String(t.id) === String(id));
      const tituloActual = tareaActual ? tareaActual.title : "";

      const respuesta = await fetch(`${API_BASE}/tareas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: tituloActual,
          completed: Boolean(nuevoEstado),
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

  async function EliminarTareaPorID(datos) {
    error.value = "";
    try {
      const id = typeof datos === "object" ? datos.id : datos;

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