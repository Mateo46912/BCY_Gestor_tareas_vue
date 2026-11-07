# Bloque 1: origen, versión, licencia y características de Vue

## Origen

Al investigar sobre Vue encontramos que fue creado por Evan You en 2014 su objetivo era hacer más sencilla la creación de interfaces web basadas en HTML, CSS, y JavaScript sin tener que complicarse con todas las modificaciones de la página manualmente.

## Versión

Para nuestro proyecto usamos **Vue 3** porque con esta versión se hace la interfaz y los componentes que deben mostrar las tareas, escribir sus títulos y los botones precisos para ello.


## Licencia

Vue tiene la licencia **MIT** esto quiere decir que podemos usarlo gratuitamente, podemos modificarlo gratuitamente, podemos compartirlo gratuitamente siempre que conservemos los avisos de derechos de autor y de la licencia.

## Características

Las características que más nos sirven para este proyecto son:

- **Componentes reutilizables:** podemos crear un componente para mostrar una tarea y usarlo varias veces.
- **Reactividad:** cuando cambiamos un dato reactivo, Vue actualiza lo que aparece en la pantalla.
- **Directivas:** podemos usar `v-if` para mostrar elementos según una condición y `v-for` para recorrer la lista de tareas.
- **Archivos `.vue`:** podemos reunir la estructura, la lógica y los estilos de un componente en un mismo archivo.
- **Uso progresivo:** podemos empezar con una interfaz sencilla y agregar más funciones conforme avance el proyecto.

# Bloque 2: instalación, Vite, estructura de carpetas y Hola Mundo

## Instalación

Primero revisamos que Node.js y npm estuvieran instalados usando estos comandos:

```powershell
node -v
npm.cmd -v
```

Después creamos el proyecto con:

```powershell
npm.cmd create vue@latest
```

Le pusimos temporalmente el nombre `base-vue` y elegimos JavaScript, marcamos Router, Pinia y Vitest, que usaremos para las rutas, los datos compartidos y las pruebas.

![Opciones seleccionadas](capturas/conf_1.png)

No marcamos las opciones experimentales y elegimos empezar sin código de ejemplo para agregar nuestros propios componentes.

![Configuración del proyecto](capturas/conf_2.png)

Luego pasamos los archivos a nuestra carpeta `Practica_VUE` e instalamos las dependencias:

```powershell
npm.cmd install
```

Se instalaron 231 paquetes ademas también apareció un aviso de cinco vulnerabilidades moderadas que quedaron pendientes de revisar.

![Instalación terminada](capturas/instalacion.png)

## Vite

Vite nos permite abrir el proyecto en el navegador y ver los cambios mientras trabajamos para poder realizar esta vista tenemos que iniciarlo con:

```powershell
npm.cmd run dev
```

La terminal nos mostró la dirección `http://localhost:5173/`, que abrimos para ver la página.

![Servidor iniciado](capturas/servidor_iniciado.png)

El tiempo que aparece junto a “ready” es lo que tardó en arrancar el servidor, no todo el tiempo que nos tomó configurar el proyecto.

Cuando necesitemos preparar la aplicación para publicarla, podremos usar:

```powershell
npm.cmd run build
```

## Tiempo de configuración

La configuración del proyecto nos tomó aproximadamente unos 24 minutos, incluyendo la organización de los archivos y estimamos este tiempo a partir de un cronometro.

![Tiempo](capturas/cronometro.png)

## Estructura de carpetas

Separamos los archivos para encontrar más fácil cada parte del proyecto:

- **src/componentes:** aquí van los cuatro componentes de las tareas.
- **src/estilos:** aquí está `estilos.css`, donde pondremos los colores, tamaños y diseño.
- **src/vistas:** aquí está `tareas.vue`, que será la pantalla principal.
- **docs:** aquí guardamos la investigación.
- **docs/capturas:** aquí guardamos las imágenes del proceso.

También tenemos estos archivos:

- **App.vue:** es el componente principal.
- **main.js:** inicia la aplicación y conecta las herramientas.
- **index.html:** es la página donde se muestra la aplicación.
- **package.json:** guarda las dependencias y los comandos del proyecto.
- **package-lock.json:** guarda las versiones exactas de las dependencias instaladas.

## Hola Mundo

Para comprobar que Vue funcionaba, pusimos este código en `App.vue`:

```vue
<script setup>
const saludo = 'Hola Mundo'
</script>

<template>
  <h1>{{ saludo }}</h1>
</template>
```

Creamos la variable `saludo` con el texto “Hola Mundo”. Después usamos `{{ saludo }}` para mostrar ese texto dentro de un título.

![Código en App.vue](capturas/codigo_app.png)

Guardamos el archivo y revisamos el navegador y al ver el mensaje “Hola Mundo” comprobamos que la aplicación estaba funcionando.

![Hola Mundo en el navegador](capturas/hola_mundo.png)

# Bloque 3: componentes, props, eventos, v-if, v-for y ciclo de vida

## Componentes

Los componentes son partes de la página que podemos usar varias veces. Nos ayudan a separar el código y no tener que escribir lo mismo para cada tarea.

En nuestro proyecto vamos a usar estos cuatro:

- **tarea_item.vue:** muestra una tarea con sus botones.
- **tarea_form.vue:** permite escribir el título de una tarea o editarlo.
- **tarea_lista.vue:** muestra las tareas.
- **tarea_filtro.vue:** permite ver todas las tareas, solo las pendientes o las completadas.

Usamos el mismo componente para mostrar las tres tareas.

![Tres tareas con el mismo componente](capturas/tres_tareas.png)

## Props

Los props permiten pasar información de un componente a otro únicamente del componente de tipo padre al componente de tipo hijo.

De ese modo la lista pasará a `tarea_item.vue` la información de cada tarea y con ello estaremos utilizando el mismo componente pero cada uno de ellos mostrará su propio título y estado.

Cada tarea tendrá un identificador `id`, un título `title` y un valor que indica si está completada `completed`.

Recibimos los datos de cada tarea mediante una prop.

![Props de la tarea](capturas/props.png)

## Eventos

Los eventos permiten que un componente notifique a los demás sobre algún acontecimiento, como presionar la tecla Eliminar, enviar un formulario, etc.

Así que vamos a preparar eventos para crear, modificar, eliminar y marcar tareas como completadas en esta primera parte solo mostraremos que el aviso llega correctamente más adelante lo uniremos con Pinia y la API para efectuar los cambios.

Los componentes envían eventos y la vista muestra los datos recibidos.

![Código del evento 1](capturas/eventos_1.png)

![Código del evento 2](capturas/eventos_2.png)

![Evento recibido](capturas/evento_recibido.png)

## v-if

`v-if`  sirve para mostrar algo si se cumple una condición. 

Lo utilizaremos para mostrar la lista cuando haya tareas en ella y si la lista no tiene tareas con `v-else` fijaremos que se muestre otro mensaje distinto ademas de que también servirá para poder mostrar el botón Cancelar solo cuando estemos editando.

## v-for

`v-for` sirve para recorrer una lista y repetir un elemento por cada dato.

Por esta razón utilizaremos `v-for` para mostrar las tres tareas de ejemplo sin necesidad de escribir tres veces el mismo código en si cada tarea se mostrará con el componente `tarea_item.vue` también agregaremos `:key="tarea.id"` para ayudar a Vue a poder identificar cada tarea.

Usamos v-if para comprobar si hay tareas y v-for para mostrarlas.

![Uso de v-if y v-for](capturas/lista_codigo.png)

## Ciclo de vida

Un componente pasa por varias etapas las cuales son se prepara, aparece en la página, puede actualizarse y finalmente retirarse.

Vue tiene funciones que nos permiten hacer algo en esos momentos:

- **onMounted:** podemos ejecutar una acción cuando el componente ya aparece en la página.
- **onUpdated:** podemos ejecutar una acción después de que se actualiza lo que muestra el componente.
- **onUnmounted:** podemos hacer una limpieza cuando el componente se retira, como detener un temporizador.

Por ahora no necesitamos usar estas funciones, porque trabajaremos con tres tareas de ejemplo y no cargaremos datos desde una API.


