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

Para trabajar con Vue utilizamos Node.js y npm. Node.js permite ejecutar JavaScript fuera del navegador y npm nos ayuda a instalar las herramientas del proyecto.

Primero comprobamos las versiones con estos comandos:

```powershell
node -v
npm.cmd -v
```

Al ejecutar `npm -v`, PowerShell bloqueó la ejecución del archivo `npm.ps1`. Lo solucionamos usando `npm.cmd`, sin cambiar la configuración del sistema.

Después iniciamos el asistente para crear el proyecto:

```powershell
npm.cmd create vue@latest
```

Usamos temporalmente el nombre `base-vue`. Elegimos JavaScript y seleccionamos Router, Pinia y Vitest para preparar las rutas, el manejo de datos compartidos y las pruebas.

![Selección de herramientas del proyecto](capturas/conf_1.png)

Dejamos sin seleccionar las funciones experimentales y elegimos comenzar sin código de ejemplo.

![Configuración del proyecto](capturas/conf_2.png)

Después movimos los archivos generados a nuestra carpeta principal `Practica_VUE`, conservando las carpetas y archivos que ya habíamos creado.

Desde esa carpeta instalamos las dependencias:

```powershell
npm.cmd install
```

La instalación agregó 231 paquetes. También mostró un aviso de cinco vulnerabilidades moderadas, que quedaron pendientes de revisión.

![Instalación de las dependencias](capturas/instalacion.png)

## Vite

Vite es la herramienta que utilizamos para ejecutar el proyecto mientras trabajamos. Nos permite ver los cambios en el navegador al guardar los archivos.

Iniciamos el servidor con:

```powershell
npm.cmd run dev
```

Después abrimos la dirección `http://localhost:5173/` en el navegador para ver nuestra aplicación.

![Servidor de Vite iniciado](capturas/servidor_iniciado.png)

El tiempo que aparece junto a “ready” corresponde al arranque del servidor, no al tiempo total de configuración del proyecto.

Vite también permite preparar los archivos para publicar la aplicación con el comando:

```powershell
npm.cmd run build
```

## Estructura de carpetas

Organizamos el proyecto con nombres sencillos para encontrar nuestros archivos fácilmente:

- **src:** contiene el código de la aplicación.
- **src/componentes:** guarda `tarea_item.vue`, `tarea_form.vue`, `tarea_lista.vue` y `tarea_filtro.vue`.
- **src/estilos:** contiene `estilos.css`, donde colocaremos el diseño.
- **src/vistas:** contiene `tareas.vue`, que será nuestra pantalla principal.
- **docs:** guarda la investigación del proyecto.
- **docs/capturas:** contiene las imágenes que usamos como evidencias.

También utilizamos estos archivos principales:

- **App.vue:** es el componente principal de la aplicación.
- **main.js:** inicia Vue y registra las herramientas del proyecto.
- **index.html:** contiene el elemento donde se monta la aplicación.
- **package.json:** contiene las dependencias y los comandos.
- **package-lock.json:** registra las versiones exactas de las dependencias instaladas.

## Hola Mundo

Para comprobar que Vue funcionaba, escribimos este ejemplo en `src/App.vue`:

```vue
<script setup>
const saludo = 'Hola Mundo'
</script>

<template>
  <h1>{{ saludo }}</h1>
</template>
```

En `script setup` creamos la variable `saludo`. Dentro de `template` colocamos el título que queremos mostrar. Las llaves dobles `{{ saludo }}` permiten mostrar el contenido de la variable en la página.

![Código de Hola Mundo en App.vue](capturas/codigo_app.png)

Guardamos el archivo y revisamos el navegador. Al aparecer el mensaje “Hola Mundo”, comprobamos que la aplicación iniciaba y mostraba el contenido correctamente.

![Hola Mundo funcionando en el navegador](capturas/hola_mundo.png)