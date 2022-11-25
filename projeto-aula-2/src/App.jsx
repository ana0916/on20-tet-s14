import './App.css'
import { Lista } from './components/Lista'
import { Contador } from './components/Contador'
import { Eventos } from './components/Eventos'
import { Repositorios } from './components/Repositorios'

function App() {
  return (
    <div className="App">
      <Contador/>
      <Lista />
      <Eventos />
      <Repositorios />
    </div>
  )
}

export default App
