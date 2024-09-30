import miImagen from './assets/img/descarga.jpeg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <img src='/mi_imagen.ico'/>
      </div>
      <h1>Me llamo carlos</h1>
      <img src={miImagen}/>
      <p className="read-the-docs">
        Mi primer taller del segundo Corte
      </p>
    </>
  )
}

export default App
