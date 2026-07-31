
import { useContext } from "react"
import './styles.css'
import { MascotasContext } from "../Context"

function EditarMascota({id, nombre, edad, tamano, tipo, estadoD }) {
    const { onCerrar,
        onChange,
        onEdad,
        onTamano,
        onTipo,
        onEstado,
        onGuardar,
        onEditar,
    } = useContext(MascotasContext)

    return (
        <div className="contenedorFormulario">
            <button type="button" className="btn btn-danger" onClick={onCerrar}>X</button>

            <form name='formIngresarMascota' className="container d-flex flex-column formulario">
                <p>Edite el nombre de la mascota: </p>
                <input type="text"
                    name='nombreMascota'
                    placeholder='Ej.: Oliver'
                    className="inputNombre"
                    value={nombre}
                    onChange={onChange} />
                <br />

                <p>Edite el tipo de mascota: </p>
                <select onClick={onTipo}>
                    <option defaultValue={'Seleccionar'}>Seleccionar</option>
                    <option>Perro</option>
                    <option>Gato</option>
                    <option>Otro</option>
                </select>
                <br />

                <p>Edite la edad de la mascota: </p>
                <input
                    type="number"
                    name='edad'
                    value={edad}
                    placeholder='Edite la edad'
                    onChange={onEdad} />
                <br />

                <p>Edite el tamaño de la mascota: </p>
                <select onClick={onTamano}>
                    <option defaultValue={'Seleccionar'}>Seleccionar</option>
                    <option>Pequeno</option>
                    <option>Mediano</option>
                    <option>Grande</option>
                </select>
                <br />

                <button type='button'
                    name='agregar-mascota'
                    onClick={() => onGuardar(id, nombre, edad, tamano, tipo, estadoD)}
                    style={{ width: 150 }}>Guardar Cambios</button>
                <button type="button" className="btn btn-danger" onClick={onCerrar}>Cancelar</button>

            </form>
        </div>
    )
}


export { EditarMascota }