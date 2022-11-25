import { useState } from 'react' 

export function Contador() {
  const [contador, setContador] = useState(0) 
  
  function diminui() {
    setContador(contador - 1)
  }

  function soma() {
    setContador(contador + 1)
  }

  return(
    <div className="contador"> 
      <button onClick={diminui}>-</button>
      <h2>{contador}</h2>
      <button onClick={soma}>+</button>
    </div>
  )
}