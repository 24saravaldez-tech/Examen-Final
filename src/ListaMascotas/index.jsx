import { useContext, useEffect } from "react"
import { MascotasContext } from "../Context"
import { initialState } from "../Reducer/initialState"
import { Tarjeta } from "../Tarjetas"

function ListaMascotas({ mascotas }) {
    const { onEliminarMascota, onFormulario, onEditar } = useContext(MascotasContext)

    console.log(mascotas.mascotas)

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
        </>
    )

    return (
        <div className="justify-content-center align-items-center">
            <h1>LISTA DE MASCOTAS</h1>
            <p>Cantidad de mascotas registradas: {mascotas.mascotas.length} </p> 

            {mascotas.mascotas.length > 0 ? siHayMascots : noHayMascotas}

            <footer>
                <button className="btn btn-warning" onClick={onFormulario}>Agregar mascota</button>
            </footer>
        </div>



    )

}


export { ListaMascotas }