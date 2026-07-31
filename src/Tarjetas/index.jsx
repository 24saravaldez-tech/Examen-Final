import { useContext } from "react"
import { MascotasContext } from "../Context"

function Tarjeta({ id, nombre, edad, tipo, tamano, estadoD }) {
    const { onEliminarMascota, onAdoptar, onDisponible, onEditar } = useContext(MascotasContext)
    return (
        <div className="card d-flex flex-column bg-secondary" style={{ maxWidth: 400 }}>
            <div className="tarjeta" key={id}>
                <p className="card-title">Nombre: {nombre}</p>
                <p className="card-text">Tipo: {tipo}</p>
                <p className="card-text">Tamaño: {tamano}</p>
                <p className="card-text">Edad: {edad}</p>
                <button id={id} className="btn btn-info">Estado: {estadoD}</button>
                <button type="button" className="btn btn-danger" id={id} onClick={() => onEliminarMascota()}>Eliminar</button>
                {estadoD == 'Disponible' ?
                    <button type="button" className="btn btn-success" id={id} onClick={() => onAdoptar(id)}>Marcar Adoptada</button>
                  :  <button type="button" className="btn btn-success" id={id} onClick={() => onDisponible(id)}>Marcar Disponible</button> 
               }
                <button type="button" className="btn btn-dark" id={id} onClick={() => onEditar(id, nombre, tipo, tamano, edad, estadoD)}>Editar</button>

            </div>

        </div>

    )
}

export { Tarjeta }