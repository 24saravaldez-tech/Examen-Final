
import { Formulario } from './Formulario'
import { ListaMascotas } from './ListaMascotas'
import './scss/styles.scss'
import 'bootstrap'
import { useContext, useReducer } from 'react'
import { reducer } from './Reducer/reducer'
import { MascotasContext } from './Context'

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
  } 

}

export default App
