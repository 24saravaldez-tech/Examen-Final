
import { Formulario } from './Formulario'
import { ListaMascotas } from './ListaMascotas'
import './scss/styles.scss'
import 'bootstrap'
import { useContext, useReducer } from 'react'
import { reducer } from './Reducer/reducer'
import { MascotasContext } from './Context'
import { EditarMascota } from './Edicion'

function App() {
  const { estado } = useContext(MascotasContext)
  const { pantalla } = useContext(MascotasContext)

  if (pantalla == 'Formulario') {
    return (
      <>
        <Formulario />
      </>
    )
  } else if (pantalla == 'General') {
    return (
      <>

        <ListaMascotas mascotas={estado} />

      </>
    )
  } else if(pantalla == 'Edicion'){
    return (
      <>
        <EditarMascota />
      </>
    )
  }

}

export default App
