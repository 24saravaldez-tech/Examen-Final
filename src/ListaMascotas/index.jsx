import { useContext, useState } from "react"
import { MascotasContext } from "../Context"
import { initialState } from "../Reducer/initialState"
import { Tarjeta } from "../Tarjetas"
import { Estadisticas } from "../Estadistica"

function ListaMascotas({ mascotas }) {
    const { onEliminarMascota, onFormulario, onEditar } = useContext(MascotasContext)

    console.log(mascotas.mascotas)

    let count1 = 0
    let count2 = 0

    let noHayMascotas = (
        <p>No hay mascotas registradas.</p>
    )

    let siHayMascots = (
        <>
            {mascotas.mascotas.map(animal => (
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

            {mascotas.mascotas.map(animal => (
                animal.estadoD == 'Disponible' ? count1++ : count2++
            ))}
        </>
    )



    return (
        <div className="justify-content-center align-items-center">
            <h1>LISTA DE MASCOTAS</h1>

            <Estadisticas total={mascotas.mascotas.length} adoptadas={count2} disponibles={count1} />

            {mascotas.mascotas.length > 0 ? siHayMascots : noHayMascotas}

            <footer>
                <button className="btn btn-warning" onClick={onFormulario}>Agregar mascota</button>
            </footer>
        </div>

    )

}


export { ListaMascotas }