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

# Bloque 4: Estado y reactividad en Vue

## Reactividad y `ref()`

### ¿Qué es?

La reactividad en Vue permite que la interfaz o el HTML que estamos usando, se actualice automáticamente cuando se cambian los datos de una variable que se esté usando. Para esto, Vue proporciona la función `ref()`, la cual permite crear variables o valores reactivos y detectar cuando estos cambien. A diferencia de JavaScript sin Vue, no hace falta actualizar de forma manual los elementos del HTML que se encargan de mostrar los valores de estas variables.

### ¿Para qué sirve?

`ref()` sirve para guardar valores que pueden variar a lo largo de la ejecución, como contadores, datos de formularios o listas. Se usa JavaScript para acceder y modificar el valor de esta `ref` usando `.value`, cuando se hace esto Vue actualiza automáticamente la interfaz para que muestre este nuevo valor de forma automática sin necesidad de hacerlo nosotros usando JavaScript.

### Ejemplo práctico: Cambiar el estado de una tarea

Se desarrolló un componente en Vue llamado `Ejemplo_Ref.vue`, en el cual se creó una variable reactiva `estado_tarea` utilizando `ref()`, con el valor inicial `"Pendiente"`.

Se implementó un botón que ejecuta la función `actualizar_estado_tarea()` mediante el evento `@click`. Esta función usa un `if/else` para alternar el valor de la variable entre `"Pendiente"` y `"Completada"`.

El estado se muestra en el HTML mediante `{{ estado_tarea }}`, se puede observar cómo Vue actualiza el valor en el HTML cada vez que cambia el valor de la variable reactiva, no se necesitó de JavaScript para actualizar la vista de ese valor en el HTML.

### Error que nos pasó y solución

Durante el desarrollo del ejemplo el botón no cambiaba el valor de la variable, esto pasaba porque se usó el operador: `==` en lugar del operador `=` que es el que sirve para asignar valores.

Para solucionar este error, se reemplazó `==` por `=` al cambiar el estado de la variable, esto se hizo consultando a ChatGPT, sobre el porqué el botón no funcionaba y él nos dio feedback de cuál era el problema.

### Código del ejemplo:

![Código de Ejemplo_Ref.vue](capturas/Ejemplo_Ref_Evidencia_Codigo.png)

### Evidencia de funcionamiento:

**Estado inicial de la tarea:**

![Estado pendiente](capturas/Ejemplo_Ref_Evidencia_Web_1.png)

**Estado después de presionar el botón:**

![Estado completado](capturas/Ejemplo_Ref_Evidencia_Web_2.png)

### Fuente:

[Documentación oficial de Vue — Fundamentos de reactividad](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)

## Estado local y global

### ¿Qué es?

El estado local consiste en tener variables, como contadores, listas o datos en sí, pero de manera local por ejemplo que si cambian de valor este cambio solo afecta al componente que los contiene es decir, si un componente tiene un contador y se instancia dos veces este componente, pues el contador de la primera instancia no será el mismo que el de la segunda.

Por otro lado un estado global consiste en que estas variables o listas, son globales es decir si se cambian sus valores todos los elementos u otros componentes que las usen pues se verán reflejados con este valor, es decir compartirán la información.

### ¿Para qué sirve?

El estado local sirve para trabajar con un componente específico en el que queremos que esa variable solo cambie en la instancia del componente que estamos usando.

En cambio el estado global es útil cuando queremos que los cambios en esa variable sean reflejados en los demás componentes que la usen, por ejemplo tenemos un contador que funciona como un reloj, hacemos que cambie su valor para que esta variable se actualice y se use en el reloj de la aplicación y en una variable que usa la hora para calcular algo, básicamente necesitan tener el mismo valor en esa variable y por ello es de estado global.

### Ejemplo práctico

Para demostrar el funcionamiento del estado global, se realizó una práctica utilizando Pinia, en la cual dos componentes diferentes acceden a una misma lista de tareas almacenada en un store.

El primer componente muestra las tareas en su orden original, mientras que el segundo las muestra en orden inverso. De esta manera, ambos utilizan la misma información compartida, pero la presentan de formas diferentes.

El código y las evidencias de esta práctica se encuentran en el siguiente apartado, **Pinia y estado compartido**.

## Pinia y estado compartido

### ¿Qué es?

Pinia es una biblioteca que se importa, básicamente permite aplicar el concepto de estado global que se vio en el punto anterior, nos permite crear una store, que básicamente es el contenedor o como un almacén de estado compartido que va a contener la variable o las variables y también funciones que cambien esa variable.

Después los componentes van a importar una función para poder acceder a la store y poder usar la variable o variables que entregue esta store, además de las funciones que tenga.

### ¿Para qué sirve?

Es muy útil y sirve para poder usar estas variables o arreglos en varios componentes que lo necesiten como el ejemplo del reloj de antes o incluso para la app de gestión de tareas cuando varios componentes necesiten acceder a cada tarea o al arreglo de tareas para cambiar sus propiedades, agregar tareas o eliminarlas.

### Ejemplo práctico: Lista de tareas compartida mediante Pinia

Se desarrolló un ejemplo utilizando Pinia para compartir un arreglo de tareas entre dos componentes diferentes de Vue.

Primero, se creó un store en el archivo `tareas.js`, utilizando `defineStore()` de Pinia y `ref()` de Vue para almacenar una lista de tareas de forma reactiva. Mediante `return { tareas }`, se permite que otros componentes puedan acceder al arreglo.

Después, se crearon dos componentes llamados `Lista_Tareas_Normal.vue` y `Lista_Tareas_Invertida.vue`. Ambos importan la función `usarTareasStore()` para acceder al mismo store.

En el primer componente se utiliza `v-for` para recorrer y mostrar las tareas en su orden original. En el segundo componente se utiliza el mismo arreglo, pero aplicando el método `toReversed()`, que permite mostrar las tareas en orden inverso sin modificar el arreglo original.

De esta forma se demuestra cómo Pinia permite que dos componentes diferentes utilicen la misma información para fines diferentes.

### Código del store de Pinia

En esta captura se muestra el archivo `tareas.js`, donde está la lista compartida.

![Código del store de Pinia](capturas/Evidencia_Pinia_Store_Codigo.png)

### Componentes que utilizan el store

En la siguiente captura se muestran los dos componentes, los cuales acceden al mismo store y utilizan `v-for` para mostrar las tareas en diferente orden.

![Componentes que utilizan el store](capturas/Evidencia_Componentes_Usando_Store.png)

### Evidencia de funcionamiento

Como se puede observar se ven las dos listas en la pagina web, con la store creada en el momento en el que la lista dentro de la store cambie se agregue o elimine un valor, imediatamente se reflejara el cambio en las dos listas de la web

Se demuestra asi el funcionamiento de este estado global.

![Resultado de las listas compartidas](capturas/Evidencia_Store_Web.png)

### Error que nos pasó y solución

Durante el desarrollo del ejemplo, las listas aparecían desordenadas en la página, con un fondo negro y con un orden que no se programó.

Esto ocurrió porque el proyecto Vue que utilizamos para las pruebas todavía tenía los estilos CSS que vienen por defecto como ejemplo que da Vue. Esto hacía que la presentación creada se vea diferente y desordenada.

Para solucionar el problema, se revisó el archivo `main.js` y se comentó la importación de `main.css`, así no se aplicaron estos estilos en la app.

Después de estos cambios la página web se mostró tal cual se deseaba y el ejemplo se vio bien.

### Fuentes:

[Documentación oficial de Pinia](https://pinia.vuejs.org/)

[Documentación oficial de Vue — Renderizado de listas](https://vuejs.org/guide/essentials/list.html)

