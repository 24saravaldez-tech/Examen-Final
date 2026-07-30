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
                mascotas: state.mascotas.filter(animal => animal.id != accion.infoExtra.id)
            }

        // case 'EDITAR_MASCOTA':
        //     return {
        //         ...state,
        //         mascotas: [...state.mascotas, accion.infoExtra]
        //     }
        // case 'EDITAR_ESTADO':
        //     let buscada = state.mascotas.filter(animal => animal.id == accion.infoExtra.id)
        //     buscada.estado = (buscada.estado == 'Disponible' ? 'Adoptar' : 'Disponible')
        //     return {
        //         mascotas: [...state.mascotas, buscada]
        //     }
    }

}

export { reducer }