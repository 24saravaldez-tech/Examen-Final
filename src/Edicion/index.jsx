
import { useContext } from "react"
import './styles.css'
import { MascotasContext } from "../Context"

function EditarMascota() {
    const { onCerrar,
        onChange,
        onEdad,
        onTamano,
        onTipo,
        onEstado,
        onEditar,
        onGuardarCambios,
        id,
        nombre,
        edad,
        tamano,
        tipo,
        estadoD
    } = useContext(MascotasContext)

    return (
        <div className="contenedorFormulario">

            <form name='formIngresarMascota' className="formulario">

                <div className="encabezado">
                    <button type="button" className="btn btn-danger" onClick={onCerrar}>X</button>
                </div>

                <div className="contenido">

                    <p>Edite el nombre de la mascota:</p>
                    <input
                        type="text"
                        name='nombreMascota'
                        placeholder='Ej.: Oliver'
                        className="form-control"
                        value={nombre}
                        onChange={onChange}
                    />

                    <p>Edite el tipo de mascota:</p>
                    <select className="form-select" onChange={onTipo}>
                        <option>Seleccionar</option>
                        <option>Perro</option>
                        <option>Gato</option>
                        <option>Otro</option>
                    </select>

                    <p>Edite la edad de la mascota:</p>
                    <input
                        type="number"
                        className="form-control"
                        name='edad'
                        value={edad}
                        placeholder='Edite la edad'
                        onChange={onEdad}
                    />

                    <p>Edite el tamaño de la mascota:</p>
                    <select className="form-select" onChange={onTamano}>
                        <option>Seleccionar</option>
                        <option>Pequeno</option>
                        <option>Mediano</option>
                        <option>Grande</option>
                    </select>

                    <button
                        type='button'
                        className="btn btn-primary"
                        onClick={() => onGuardarCambios(id, nombre, edad, tamano, tipo, estadoD)}
                    >
                        Guardar Cambios
                    </button>

                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={onCerrar}
                    >
                        Cancelar
                    </button>

                </div>

            </form>
        </div>
    )
}


export { EditarMascota }