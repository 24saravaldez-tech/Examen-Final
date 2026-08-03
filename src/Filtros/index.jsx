import React, { useContext } from "react";
import { useState } from "react";
import { MascotasContext } from "../Context"
import './styles.css'


function Filtros() {
    const {
        tipoFiltrar,
        nombreFiltrar,
        estadoFiltrar,
        tamanoFiltrar,
        onFiltrarEstado,
        onFiltrarNombre,
        onFiltrarTamano,
        onFiltrarTipo
    } = useContext(MascotasContext)

    return (
        <div className="filtros container">

            <h4 className="text-center">Filtros</h4>

                <div className="titulo-filtro">Tipo de mascota</div>
                <select className="selecciones" onChange={onFiltrarTipo}  value={tipoFiltrar}>
                    <option value="">Todos</option>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                    <option value="Otro">Otro</option>
                </select>
        

           
                <div className="titulo-filtro">Tamaño</div>
                <select
                    className="selecciones"
                    onChange={onFiltrarTamano}
                    value={tamanoFiltrar}
                >
                    <option value="">Todos</option>
                    <option value="Grande">Grande</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Pequeno">Pequeño</option>
                </select>
         

            
                <div className="titulo-filtro">Estado</div>
                <select
                    className="selecciones"
                    onChange={onFiltrarEstado}
                    value={estadoFiltrar}
                >
                    <option value="">Todos</option>
                    <option value="Disponible">Disponible</option>
                    <option value="Adoptada">Adoptada</option>
                </select>
           

           
                <div className="titulo-filtro">Nombre</div>
                <input
                    className="texto"
                    type="text"
                    value={nombreFiltrar}
                    onChange={onFiltrarNombre}
                    placeholder="Buscar por nombre"
                />
           

        </div>
    )
}

export { Filtros }