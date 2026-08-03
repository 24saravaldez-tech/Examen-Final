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
    const [edad, setEdad] = useState('')
    const [tamano, setTamano] = useState('')
    const [tipo, setTipo] = useState('')
    const [estadoD, setEstadoD] = useState('Disponible')
    const [id, setId] = useState(0)
    const [tipoFiltrar, setTipoFltrar] = useState('')
    const [estadoFiltrar, setEstadoFltrar] = useState('')
    const [nombreFiltrar, setNombreFltrar] = useState('')
    const [tamanoFiltrar, setTamanoFltrar] = useState('')


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

    const onEliminarMascota = (id) => {
        dispatch({ type: tipoDeAccion.ELIMINAR_MASCOTA, infoExtra: { id: id } })
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
        setId(id)
        setEstadoD(estadoD)
        setNombre(nombre)
        setEdad(parseInt(edad))
        setTamano(tamano)
        setTipo(tipo)
        setCambioPantalla('Edicion')

    }

    const onGuardar = (id, nombre, edad, tamano, tipo, estadoD) => {
        try {
            if (nombre.trim() == '') {
                throw new Error('Escoja un nombre valido (con letras y no vacio)')
            }

            if (edad.toString().trim() == '' || parseInt(edad) < 0) {
                throw new Error('Escoja una edad valida (no vacia, con numeros y mayor o igual a 0)')
            }


            if (tamano != 'Pequeno' && tamano != 'Mediano' && tamano != 'Grande') {
                throw new Error('Escoja un tamano valido (con letras y no vacio)')
            }


            if (tipo != 'Gato' && tipo != 'Perro' && tipo != 'Otro') {
                throw new Error('Escoja un tipo valido (no vacio, entre gato, perro u otro)')
            }

            dispatch({
                type: tipoDeAccion.AGREGAR_MASCOTA,
                infoExtra: {
                    id: Date.now() * Math.floor(Math.random() * 1000),
                    nombre: nombre,
                    edad: edad,
                    tamano: tamano,
                    tipo: tipo,
                    estadoD: estadoD
                }
            })
            console.log(estado.mascotas)
            setEdad('')
            setNombre('')
            setTamano('')
            setTipo('')
            setEstadoD('Disponible')
            setCambioPantalla('General')
        } catch (error) {
            alert(error.message)
            return
        }

    }


    const onGuardarCambios = (id, nombre, edad, tamano, tipo, estadoD) => {
        try {
            if (nombre.trim() == '') {
                throw new Error('Escoja un nombre valido (con letras y no vacio)')
            }

            if (edad.toString().trim() == '' || parseInt(edad) < 0) {
                throw new Error('Escoja una edad valida (no vacia, con numeros y mayor o igual a 0)')
            }


            if (tamano != 'Pequeno' && tamano != 'Mediano' && tamano != 'Grande') {
                throw new Error('Escoja un tamano valido (con letras y no vacio)')
            }


            if (tipo != 'Gato' && tipo != 'Perro' && tipo != 'Otro') {
                throw new Error('Escoja un tipo valido (no vacio, entre gato, perro u otro)')
            }

            dispatch({
                type: tipoDeAccion.EDITAR_MASCOTA,
                infoExtra: {
                    id: id ,
                    nombre: nombre,
                    edad: edad,
                    tamano: tamano,
                    tipo: tipo,
                    estadoD: estadoD
                }
            })
            console.log(estado.mascotas)
            setEdad('')
            setNombre('')
            setTamano('')
            setTipo('')
            setEstadoD('Disponible')
            setCambioPantalla('General')
        } catch (error) {
            alert(error.message)
            return
        }

    }

    const onFiltrarNombre = (event) => {
        setNombreFltrar(event.target.value)
    }

    const onFiltrarEstado = (event) => {
        setEstadoFltrar(event.target.value)
    }

    const onFiltrarTamano = (event) => {
        setTamanoFltrar(event.target.value)
    }

    const onFiltrarTipo = (event) => {
        setTipoFltrar(event.target.value)
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
            onGuardarCambios,
            onTamano,
            onTipo,
            pantalla,
            estadoD,
            id,
            nombre,
            edad,
            tipo,
            tamano,
            tipoFiltrar,
            nombreFiltrar,
            estadoFiltrar,
            tamanoFiltrar,
            onFiltrarEstado,
            onFiltrarNombre,
            onFiltrarTamano,
            onFiltrarTipo
        }}>
            {children}
        </MascotasContext.Provider>
    )
}

export { MascotasContext, MascotasProvider }