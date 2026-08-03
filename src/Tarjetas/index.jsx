import { useContext } from "react"
import { MascotasContext } from "../Context"
import './styles.css'

function Tarjeta({ id, nombre, edad, tipo, tamano, estadoD }) {
    const { onEliminarMascota, onAdoptar, onDisponible, onEditar } = useContext(MascotasContext)
    return (
        <div className="card d-flex flex-column bg-secondary cuerpo" style={{ maxWidth: 400 }}>
            <div className="tarjeta" key={id}>
                <p className="card-title">Nombre: {nombre}</p>
                <p className="card-text"><strong>Tipo:</strong> {tipo}</p>
                <p className="card-text"><strong>Tamaño:</strong> {tamano}</p>
                <p className="card-text"><strong>Edad:</strong> {edad}</p>
                <p id={id} className="btn btn-info align-self-start disabled mb-3">{estadoD}</p>
                <br />
                <button type="button" className="btn btn-danger" onClick={() => onEliminarMascota(id)}>Eliminar</button>
                {estadoD == 'Disponible' ?
                    <button type="button" className="btn btn-success" id={id} onClick={() => onAdoptar(id)}>Marcar Adoptada</button>
                    : <button type="button" className="btn btn-success" id={id} onClick={() => onDisponible(id)}>Marcar Disponible</button>
                }
                <button type="button" className="btn btn-dark" onClick={() => onEditar(id, nombre, edad, tamano, tipo, estadoD)}>Editar</button>

            </div>

        </div>

    )
}

export { Tarjeta }