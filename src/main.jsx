import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { MascotasProvider } from './Context/index.jsx'

createRoot(document.getElementById('root')).render(
  <MascotasProvider>
    <App />
  </MascotasProvider>
  ,
)
