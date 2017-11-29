import axios from 'axios'

const API_URL = 'https://www.pokemon.com/us/api'

export function getPokemon () {
  return axios.get(`${API_URL}/pokedex/kalos`)
}
