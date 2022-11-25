import { useState, useEffect } from 'react' 
import Axios from 'axios' 

export function Busca() {
  const [pokemons, setPokemons] = useState([]) 
  const [termoBuscado, setTermoBuscado] = useState('')
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([])

  const baseURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(baseURL) 
      setPokemons(response.data.results) 
    }
    getData()
  }, []) 

  function handleSearch(event) {
    setTermoBuscado(event.target.value)
  }

  
  useEffect(()=> {
    const filtered = pokemons.filter(pokemon => {
      return pokemon.name.includes(termoBuscado)
    })
    setPokemonsFiltrados(filtered)
  }, [pokemons, termoBuscado]) 

  return(
    <>
      <input placeholder="Digite sua busca" onChange={handleSearch} />
      {termoBuscado && 
        pokemonsFiltrados.map(pokemon => {
          return(
            <div>
              <p key={pokemon.name}>{pokemon.name}</p>
              <a href={pokemon.url}>conferir</a>
            </div>
          )
      })}
    </>
  )
}