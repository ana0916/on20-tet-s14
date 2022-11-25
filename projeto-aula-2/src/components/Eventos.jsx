export function Eventos() {
  function ligaClick() {
    console.log('estou clicando')
  }

  function pegaInput(event) {
    console.log(event.target.value)
  }

  return(
    <div className="eventos">
      <input placeholder="Digite seu número" onChange={pegaInput} />
      <button onClick={ligaClick}>count</button>
    </div>
  )
}