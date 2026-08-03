import React, { useContext, useReducer, useState } from "react";
import './styles.css'
import { MascotasContext } from "../Context";
import { tipoDeAccion } from "../Reducer/actionTypes";
import { reducer } from "../Reducer/reducer";
import { initialState } from "../Reducer/initialState";

const Formulario = () => {

    const { onCerrar,
        onChange,
        onEdad,
        onTamano,
        onTipo,
        onEstado,
        onGuardar,
        id,
        nombre,
        edad,
        tipo,
        tamano,
        estadoD } = useContext(MascotasContext)

    return (
        <div className="contenedorFormulario">

            <form name='formIngresarMascota' className="container d-flex flex-column formulario">

                <div className="encabezado">
                    <button type="button" className="btn btn-danger" onClick={onCerrar}>X</button>
                </div>


                <div className="contenido">

                    <p>Ingrese el nombre de la mascota: </p>
                    <input type="text"
                        name='nombreMascota'
                        placeholder='Ej.: Oliver'
                        className="inputNombre"
                        value={nombre}
                        onChange={onChange} />
                    <br />

                    <p>Ingrese el tipo de mascota: </p>
                    <select onClick={onTipo} className="inputNombre">
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
                        className="inputNombre"
                        placeholder='ingrese la edad'
                        onChange={onEdad} />
                    <br />

                    <p>Ingrese el tamaño de la mascota: </p>
                    <select onClick={onTamano} className="inputNombre ultimoDiv">
                        <option defaultValue={'Seleccionar'}>Seleccionar</option>
                        <option>Pequeno</option>
                        <option>Mediano</option>
                        <option>Grande</option>
                    </select>
                    <br />

                    <div className="buttons">
                        <button type='button'
                            className="btn btn-success boton"
                            name='agregar-mascota'
                            onClick={() => onGuardar(id, nombre, edad, tamano, tipo, estadoD)}
                        >Agregar Mascota</button>
                        <button type="button" className="btn btn-danger boton" onClick={onCerrar}>Cancelar</button>
                    </div>
                </div >
            </form>
        </div>

    )
}

export { Formulario }