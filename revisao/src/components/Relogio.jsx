import { useState, useEffect } from 'react' 

export function Relogio() {
  const [horario, setHorario] = useState(new Date().toLocaleTimeString())

  function atualizaHora() {
    setHorario(new Date().toLocaleTimeString()) 
  }

  useEffect(()=> {
    setInterval(atualizaHora, 1000) 
  }, [])

  return(
    <h2>{horario}</h2>
  )
}