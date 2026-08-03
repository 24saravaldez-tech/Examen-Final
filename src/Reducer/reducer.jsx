import { ListaMascotas } from "../ListaMascotas"
import { tipoDeAccion } from "./actionTypes"
import { initialState } from "./initialState"


const reducer = (state, accion) => {
    switch (accion.type) {
        case 'AGREGAR_MASCOTA':
            return {
                ...state,
                mascotas: [...state.mascotas, accion.infoExtra]
            }

        case 'ELIMINAR_MASCOTA':
            return {
                ...state,
                mascotas: state.mascotas.filter(animal => animal.id != accion.infoExtra.id)
            }

        case 'MARCAR_ADOPTADA':
            //no se muta el estado directamente, sino que se hace mediante una copia. entonces:

            let buscarAdoptar = [...state.mascotas]
            //guardo en una variable el id que me pasan en infoEstra.
            let idDeAdopcion = accion.infoExtra.id


            //mapeo todos los objetos dentro buscando una coicidencia de id con el de la mascota a adoptar.
            //al emcontrarlo, cambio su estado.

            buscarAdoptar = buscarAdoptar.map((animal) => (
                animal.id == idDeAdopcion ? { ...animal, estadoD: 'Adoptada' } : animal
            ))

            //retorno el nuevo resultado.

            return {
                ...state,
                mascotas: [...buscarAdoptar]
            }

        case 'MARCAR_DISPONIBLE':

            let buscarDisponible = [...state.mascotas]
            let infoDdeBuscada = accion.infoExtra.id

            buscarDisponible = buscarDisponible.map((animal) => (
                animal.id == infoDdeBuscada ? { ...animal, estadoD: 'Disponible' } : animal
            ))

            return {
                ...state,
                mascotas: [...buscarDisponible]
            }

        case 'EDITAR_MASCOTA':

            let buscarEditar = [...state.mascotas]
            let idEditar = accion.infoExtra

            buscarEditar = buscarEditar.map((animal) => (
                animal.id == idEditar.id ? 
                {
                    id: idEditar.id,
                    nombre: idEditar.nombre,
                    tipo: idEditar.tipo,
                    tamano: idEditar.tamano,
                    estadoD: idEditar.estadoD,
                    edad: idEditar.edad
                } : animal
            ))

            return {
                ...state,
                mascotas: [...buscarEditar]
            }
    }

}

export { reducer }