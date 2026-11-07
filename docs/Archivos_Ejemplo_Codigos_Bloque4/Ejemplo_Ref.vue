<script setup>
    import {ref} from 'vue'

    const estado_tarea = ref('Pendiente')

    function actualizar_estado_tarea(){
        if (estado_tarea.value == 'Pendiente'){
            estado_tarea.value = 'completada   '
        }else {
            estado_tarea.value = 'Pendiente'
        }
    }

</script>


<template>
  <h2>Estado de la tarea: {{ estado_tarea }}</h2>

  <button @click="actualizar_estado_tarea">
    Cambiar estado
  </button>
</template>