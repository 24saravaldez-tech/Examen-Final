# Explicacion



## App

En el componente App se encuentra una funcion que, basada en un estado titulado 'pantalla' decide que parte del programa muestra dependiendo de su valor.
Se podran encontrar dentro el componente ListaMascotas y Formulario.


## Context

El componente context maneja la mayoria de las funciones que se ejecutan en Formulario, tales como las validaciones de campos que no pueden ingresar en blanco. Tambien maneja eventos como onChange para manejar el valor del nombre o la edad. Todas las funciones se ejecutan dentro del formulario y, al obtener su valor, onGuardar llama al dispatch que se encarga de guardar la informacion.

Dentro del componente se podran encontar estados que ayudan a manejar el valor de atributos de mascotas tales como nombre, edad, tamaño, etc. Todos ellos usados de manera local para permitir que el useReducer se encarge de las acciones mas fuertes.

Al finalizar, se retornan todos los valores a los cuales queremos que otros componentes tengan un acceso rapido y asi evitar el pop drilling o repetir codigo demasiadas veces.

##  Formulario

El componente formulario es el encargado de recopilar la informacion que el usuario desea ingresar para el registro de una mascota. Dentro de la funcion se solicita informacion del contexto para poder pasarsela posteriormente a los eventos denro del formulario.

## Tarjetas

Tarjetas es el componente encargado de crear una tarjeta por cada objeto dentro de mascotas, entiendase una tarjeta por cada mascota registrada.

## ListaMascotas

El componente ListaMascotas se encarga de mapear todos los objetos dentro de mascotas y crear conn ellos un nuevo componente Tarjeta para mostralo en pantalla.

## Reducer

El reducer es el encargado de manejar las acciones a realizar dentro de la aplicacion. Dependiento del type asignado en el dispatch, se ejecuta una funcion especificada dentro del programa, como ELIMINAR o AGREGAR a las que se le llama por medio del dispatch dependiendo de cada situacion.
