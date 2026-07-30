import { useContext } from "react"
import { MascotasContext } from "../Context"

function Tarjeta({ id, nombre, edad, tipo, tamano, estado }) {
    const { onEliminarMascota } = useContext(MascotasContext)
    return (
        <div className="card d-flex flex-column bg-secondary" style={{ maxWidth: 400 }}>
            <div className="tarjeta" key={id}>
                <p className="card-title">Nombre: {nombre}</p>
                <p className="card-text">Tipo: {tipo}</p>
                <p className="card-text">Tamaño: {tamano}</p>
                <p className="card-text">Edad: {edad}</p>
                <button id={id} className="btn btn-info">Estado: {estado}</button>
                <button type="button"  className="btn btn-danger" id={id} onClick={() => onEliminarMascota()}>Eliminar</button>
            </div>

        </div>

    )
}

export { Tarjeta }