# Evaluación práctica de React

# 🐾 Registro de Mascotas para Adopción

## Objetivo

Desarrollar una aplicación en React que permita registrar y administrar mascotas disponibles para adopción.

La aplicación deberá permitir practicar los siguientes temas:

- Componentes
- Props
- Estados con `useState`
- Manejo de estado con `useReducer`
- Context API
- Formularios
- Eventos
- Renderizado de listas
- Renderizado condicional
- Métodos de arreglos

---

## Descripción de la aplicación

Deberás crear una aplicación para un centro de adopción de mascotas.

La aplicación se mostrará en una sola pantalla y deberá contener:

1. Un formulario para registrar mascotas.
2. Un filtro para mostrar mascotas según su estado.
3. Un resumen de estadísticas.
4. Una lista con las mascotas registradas.

---

## Datos de cada mascota

Cada mascota deberá tener la siguiente información:

- Identificador único.
- Nombre.
- Tipo de mascota.
- Edad.
- Tamaño.
- Estado de adopción.

### Tipos de mascota

- Perro
- Gato
- Otro

### Tamaños

- Pequeño
- Mediano
- Grande

### Estados

- Disponible
- Adoptada

> Toda mascota nueva deberá registrarse inicialmente con el estado **Disponible**.

---

# Funcionalidades obligatorias

## 1. Registrar una mascota

La aplicación deberá incluir un formulario con los siguientes campos:

- Nombre
- Tipo de mascota
- Edad
- Tamaño

Al enviar el formulario:

- Agregar la mascota a la lista.
- Generar un identificador único.
- Asignar el estado inicial **Disponible**.
- Limpiar el formulario.
- Actualizar la lista sin recargar la página.

### Validaciones

No se deberá permitir registrar una mascota cuando:

- El nombre esté vacío.
- No se haya seleccionado un tipo.
- No se haya seleccionado un tamaño.
- La edad esté vacía.
- La edad sea menor que cero.

Cuando exista un error, se deberá mostrar un mensaje al usuario.

---

## 2. Mostrar las mascotas

Las mascotas deberán mostrarse mediante tarjetas.

Cada tarjeta deberá mostrar:

- Nombre
- Tipo
- Edad
- Tamaño
- Estado

Si no existen mascotas registradas, deberá mostrarse el siguiente mensaje:

> **No hay mascotas registradas.**

---

## 3. Cambiar el estado de adopción

Cada tarjeta deberá incluir un botón para cambiar el estado de la mascota.

Si la mascota está disponible, el botón deberá mostrar:

`Marcar como adoptada`

Si la mascota está adoptada, el botón deberá mostrar:

`Marcar como disponible`

Al presionar el botón:

- Se deberá ejecutar una acción del reducer.
- El estado de la mascota deberá actualizarse.
- La interfaz deberá cambiar inmediatamente.
- No se deberá recargar la página.

---

## 4. Eliminar una mascota

Cada tarjeta deberá tener un botón para eliminar la mascota.

Al confirmar:

- La mascota deberá eliminarse del arreglo.
- La lista deberá actualizarse automáticamente.
- La eliminación deberá realizarse mediante una acción del reducer.

---

## 5. Filtrar las mascotas

La aplicación deberá incluir un selector con las siguientes opciones:

- Todas
- Disponibles
- Adoptadas

El filtro deberá mostrar únicamente las mascotas que correspondan con la opción seleccionada.

El estado del filtro puede manejarse utilizando `useState`.

El filtro deberá funcionar sin modificar el arreglo original de mascotas.

---

## 6. Mostrar estadísticas

La aplicación deberá mostrar un resumen con:

- Total de mascotas registradas.
- Total de mascotas disponibles.
- Total de mascotas adoptadas.

Los valores deberán calcularse automáticamente utilizando la información del arreglo de mascotas.

> **No se permite escribir cantidades fijas.**

---

# Uso obligatorio de `useReducer`

El reducer deberá estar ubicado en un archivo separado.

## Acciones mínimas del reducer

El reducer deberá manejar como mínimo las siguientes acciones:

```text
AGREGAR_MASCOTA
ELIMINAR_MASCOTA
MARCAR_ADOPTADA
MARCAR_DISPONIBLE
```

También se permite crear una sola acción llamada:

```text
CAMBIAR_ESTADO
```

Siempre que funcione correctamente.

Cada acción deberá enviar la información necesaria mediante `payload`.

---

# Uso de `useState`

`useState` deberá utilizarse para manejar estados pequeños o locales, por ejemplo:

- Los campos del formulario.
- El filtro seleccionado.
- Los mensajes de error.
- La confirmación de alguna acción.

> **La lista principal de mascotas no deberá manejarse con `useState`, ya que deberá administrarse con `useReducer`.**

---

# Uso de Context API

El estado del reducer deberá compartirse mediante Context API.

El contexto podrá compartir:

- La lista de mascotas.
- El `dispatch`.
- La función para agregar mascotas.
- La función para eliminar mascotas.
- La función para cambiar el estado de adopción.

Esto permitirá que diferentes componentes accedan a la información sin pasarla mediante props por demasiados niveles.

---

# Uso de Props

Aunque se utilizará Context API, también deberá demostrarse el uso de props.

Por ejemplo:

- `ListaMascotas` puede enviar una mascota a `TarjetaMascota`.
- `TarjetaMascota` puede recibir el nombre, edad, tipo, tamaño y estado.
- También pueden enviarse funciones mediante props cuando sea necesario.

---

# Componentes mínimos

La aplicación deberá tener como mínimo los siguientes componentes:

- `App`
- `FormularioMascota`
- `FiltroMascotas`
- `EstadisticasMascotas`
- `ListaMascotas`
- `TarjetaMascota`

Además, deberá incluir:

- Un archivo para el Context.
- Un archivo separado para el Reducer.

Los estudiantes pueden crear componentes adicionales si lo consideran necesario.

---

# Requisitos obligatorios

1. La aplicación deberá desarrollarse con React.
2. Toda la aplicación deberá mostrarse en una sola pantalla.
3. Se deberán utilizar componentes.
4. Se deberán utilizar props.
5. Se deberá utilizar `useState`.
6. Se deberá utilizar `useReducer`.
7. Se deberá utilizar Context API.
8. El reducer deberá estar en un archivo separado.
9. No se deberá modificar directamente el arreglo de mascotas.
10. Cada mascota deberá tener un identificador único.
11. La interfaz deberá actualizarse sin recargar la página.
12. Se deberán validar los campos del formulario.
13. Se deberá mostrar un mensaje cuando la lista esté vacía.
14. El código deberá estar ordenado y correctamente indentado.
15. Los nombres de variables, componentes y funciones deberán ser claros.
16. Cada estudiante deberá realizar su propio diseño visual.

---

# Restricciones

Durante la evaluación:

- No se permite copiar una aplicación completa de Internet.
- No se permite utilizar código de otro compañero.
- No es obligatorio utilizar `localStorage`.
- No es obligatorio utilizar `useEffect`.

---

# Entrega

Cada estudiante deberá entregar:

1. El enlace del repositorio de GitHub.
2. La aplicación funcionando.
3. Un archivo `README.md`.
4. Una breve explicación de los componentes creados.
5. Una explicación de las acciones implementadas en el reducer.

---

# Recomendación final

Antes de entregar, verifica que:

- ✅ Puedes registrar mascotas.
- ✅ El formulario se limpia después de registrar.
- ✅ Las mascotas aparecen correctamente.
- ✅ El filtro funciona.
- ✅ El estado puede cambiarse.
- ✅ Las mascotas pueden eliminarse.
- ✅ Las estadísticas se actualizan.
- ✅ No aparecen errores en la consola.
- ✅ La aplicación funciona sin recargar la página.