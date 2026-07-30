import React, { createContext, useReducer, useState } from "react";
import { reducer } from "../Reducer/reducer";
import { initialState } from "../Reducer/initialState";
import { tipoDeAccion } from "../Reducer/actionTypes";

const MascotasContext = createContext()

function MascotasProvider({ children }) {
    const [estado, dispatch] = useReducer(reducer, initialState)
    const [pantalla, setCambioPantalla] = useState('General')
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState(0)
    const [tamano, setTamano] = useState('')
    const [tipo, setTipo] = useState('')

    let estadoD = 'Dispoble'


    const onChange = (event) => {
        setNombre(event.target.value.toString().trim())
    }

    const validar = (nombre, edad, tamano, tipo, estadD) => {
        let banderitas = [nombre, edad, tamano, tipo, estadD]

        if (banderitas.every(item => item == true)) {
            return console.log('todos los datos son correctos')

        } else {
            //validacion de nombre
            if (nombre === '') {
                alert('No se puede enviar un nombre vacio')
                setNombre('')
            } else {
                setNombre(nombre)

            }
            //validacion edad
            if (edad < 0 || edad == '') {
                alert('No se puede enviar una edad vacia o menor a cero')
                setEdad(0)
            } else {
                setEdad(edad)
            }

            //validacion tamano
            if (tamano != 'Pequeno' && tamano != 'Mediano' && tamano != 'Grande') {
                alert('Debe seleccionar un tamano valido')
                setTamano('')

            } else {
                setTamano(tamano)
            }

            //validacion tipo
            if (tipo != 'Perro' && tipo != 'Gato' && tipo != 'Otro') {
                alert('Debe seleccionar un tipo valido')
                setTipo('')

            } else {
                setTipo(tipo)
            }
        }
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

    const onGuardar = (nombre, edad, tamano, tipo) => {
        validar(nombre, edad, tamano, tipo)
        dispatch({
            type: tipoDeAccion.AGREGAR_MASCOTA,
            infoExtra: {
                id: Date.now() * Math.floor(Math.random() * 1000),
                nombre: nombre,
                edad: edad,
                tamano: tamano,
                tipo: tipo,
                estadoD: 'Disponible'
            }
        })
        console.log(estado.mascotas)
        setEdad(0)
        setNombre('')
        setTamano('')
        setTipo('')
        setCambioPantalla('General')
    }


    return (
        <MascotasContext.Provider value={{
            dispatch,
            estado,
            onCerrar,
            onChange,
            onEdad,
            onGuardar,
            onTamano,
            onTipo,
            onEliminarMascota,
            onFormulario,
            pantalla,
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