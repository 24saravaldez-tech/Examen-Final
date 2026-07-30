import React, { useContext, useReducer, useState } from "react";
import './styles.css'
import { MascotasContext } from "../Context";
import { tipoDeAccion } from "../Reducer/actionTypes";
import { reducer } from "../Reducer/reducer";
import { initialState } from "../Reducer/initialState";

const Formulario = () => {

    const [estado, dispatch] = useReducer(reducer, initialState)
    const { onCerrar,
        onChange,
        onEdad,
        onTamano,
        onTipo,
        onGuardar,
        nombre,
        edad,
        tipo,
        tamano,
        estadoD } = useContext(MascotasContext)

    return (
        <div className="contenedorFormulario">
            <button type="button" className="btn btn-danger" onClick={onCerrar}>X</button>

            <form name='formIngresarMascota' className="container d-flex flex-column formulario">
                <p>Ingrese el nombre de la mascota: </p>
                <input type="text"
                    name='nombreMascota'
                    placeholder='Ej.: Oliver'
                    className="inputNombre"
                    value={nombre}
                    onChange={onChange} />
                <br />

                <p>Ingrese el tipo de mascota: </p>
                <select onClick={onTipo}>
                    <option defaultValue={'Seleccionar'}>Seleccionar</option>
                    <option>Perro</option>
                    <option>Gato</option>
                    <option>Otro</option>
                </select>
                <br />

                <p>Ingrese la edad de la mascota: </p>
                <input
                    type="number"
                    name='edad'
                    value={edad}
                    placeholder='ingrese la edad'
                    onChange={onEdad} />
                <br />

                <p>Ingrese el tamaño de la mascota: </p>
                <select onClick={onTamano}>
                    <option defaultValue={'Seleccionar'}>Seleccionar</option>
                    <option>Pequeno</option>
                    <option>Mediano</option>
                    <option>Grande</option>
                </select>
                <br />

                <button type='button'
                    name='agregar-mascota'
                    onClick={() => onGuardar(nombre, edad, tamano, tipo, estadoD)}
                    style={{ width: 150 }}>Agregar Mascota</button>
                <button type="button" className="btn btn-danger" onClick={onCerrar}>Cancelar</button>

            </form>
        </div>
    )
}

export { Formulario }