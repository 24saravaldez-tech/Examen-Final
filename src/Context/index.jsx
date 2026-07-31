import React, { createContext, useReducer, useState } from "react";
import { reducer } from "../Reducer/reducer";
import { initialState } from "../Reducer/initialState";
import { tipoDeAccion } from "../Reducer/actionTypes";
import { EditarMascota } from "../Edicion";

const MascotasContext = createContext()

function MascotasProvider({ children }) {
    const [estado, dispatch] = useReducer(reducer, initialState)
    const [pantalla, setCambioPantalla] = useState('General')
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState(0)
    const [tamano, setTamano] = useState('')
    const [tipo, setTipo] = useState('')
    const [estadoD, setEstadoD] = useState('Disponible')


    const onChange = (event) => {
        let string = event.target.value
        setNombre(string)
    }
    const onEdad = (event) => {
        setEdad(event.target.value)

    }

    const onTipo = (event) => {
        setTipo(event.target.value)
    }

    const onTamano = (event) => {
        setTamano(event.target.value)
    }

    const onEliminarMascota = () => {
        dispatch({ type: tipoDeAccion.ELIMINAR_MASCOTA, infoExtra: { id: event.target.id } })
    }

    const onCerrar = () => {
        setCambioPantalla('General')
    }

    const onFormulario = () => {
        setCambioPantalla('Formulario')
    }

    const onEstadoD = (value) => {
        setEstadoD(value)
    }

    const onAdoptar = (id) => {
        dispatch({ type: tipoDeAccion.MARCAR_ADOPTADA, infoExtra: { id: id } })
    }

    const onDisponible = (id) => {
        dispatch({ type: tipoDeAccion.MARCAR_DISPONIBLE, infoExtra: { id: id } })
    }

    const onEditar = (id, nombre, edad, tamano, tipo, estadoD) => {
        {setCambioPantalla('Edicion')}
        <EditarMascota
            id={id}
            nombre={nombre}
            edad={edad}
            tamano={tamano}
            tipo={tipo}
            estadoD={estadoD}
        />

    }

    const onGuardar = (id, nombre, edad, tamano, tipo, estadoD) => {
        dispatch({
            type: tipoDeAccion.AGREGAR_MASCOTA,
            infoExtra: {
                id: id || Date.now() * Math.floor(Math.random() * 1000),
                nombre: nombre,
                edad: edad,
                tamano: tamano,
                tipo: tipo,
                estadoD: estadoD
            }
        })
        console.log(estado.mascotas)
        setEdad(0)
        setNombre('')
        setTamano('')
        setTipo('')
        setEstadoD('Disponible')
        setCambioPantalla('General')
    }


    return (
        <MascotasContext.Provider value={{
            dispatch,
            estado,
            onAdoptar,
            onCerrar,
            onChange,
            onDisponible,
            onEdad,
            onEditar,
            onEstadoD,
            onEliminarMascota,
            onFormulario,
            onGuardar,
            onTamano,
            onTipo,
            pantalla,
            estadoD,
            nombre,
            edad,
            tipo,
            tamano,
        }}>
            {children}
        </MascotasContext.Provider>
    )
}

export { MascotasContext, MascotasProvider }