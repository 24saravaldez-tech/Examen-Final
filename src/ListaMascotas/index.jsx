import { useContext, useState } from "react"
import { MascotasContext } from "../Context"
import { initialState } from "../Reducer/initialState"
import { Tarjeta } from "../Tarjetas"
import { Estadisticas } from "../Estadistica"
import { Filtros } from "../Filtros"
import './styles.css'

function ListaMascotas({ mascotas }) {
    const { onEliminarMascota, onFormulario, onEditar, tipoFiltrar,
        nombreFiltrar,
        estadoFiltrar,
        tamanoFiltrar } = useContext(MascotasContext)

    console.log(mascotas.mascotas)

    let count1 = 0
    let count2 = 0


    let mascotasFiltradas = mascotas.mascotas.filter((animal) => {
        let tipoFiltrado = (tipoFiltrar == "" || animal.tipo == tipoFiltrar)

        let estadoDFiltrado = (estadoFiltrar == "" || animal.estadoD == estadoFiltrar)

        let nombreFiltrado = (nombreFiltrar == "" || animal.nombre.toLowerCase().includes(nombreFiltrar.toLowerCase()))

        let tamanoFiltrado = (tamanoFiltrar == "" || animal.tamano == tamanoFiltrar)

        return (tipoFiltrado && estadoDFiltrado && nombreFiltrado && tamanoFiltrado)
    })


    let noHayMascotas = (
        <p className="mensaje">No hay mascotas registradas.</p>
    )

    let noHayConcidencias = (
        <p className="mensaje">No hay mascotas registradas que cumplan con los filtros aplicado.</p>
    )

    let siHayMascots = (
        <>
            {mascotasFiltradas.map((animal) => (
                <Tarjeta
                    key={animal.id}
                    id={animal.id}
                    nombre={animal.nombre}
                    tipo={animal.tipo}
                    tamano={animal.tamano}
                    edad={animal.edad}
                    estadoD={animal.estadoD}
                />
            ))}

            {mascotasFiltradas.forEach((animal) => { animal.estadoD === "Disponible" ? count1++ : count2++ })}
        </>
    )


    return (
        <div className="pantallaPrincipal">
            <h1 className="titulo">LISTA DE MASCOTAS</h1>

            <Filtros />

            <Estadisticas total={mascotasFiltradas.length} adoptadas={count2} disponibles={count1} />
           
            <div className="contenedor-cards">
                {mascotas.mascotas.length > 0 && mascotasFiltradas.length <= 0 ? noHayConcidencias : mascotasFiltradas.length > 0 ? siHayMascots : mascotas.mascotas.length <= 0 ? noHayMascotas : ''}

            </div>

            <footer>
                <button className="btn btn-warning boton-agregar" onClick={onFormulario}>Agregar mascota</button>
            </footer>
        </div>

    )

}


export { ListaMascotas }