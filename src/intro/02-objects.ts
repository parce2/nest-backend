export const pokemonsId = [ 1, 20 , 30 ,34 ,60];

interface Pokemon {
  id: number,
  name: string,
  age?: number
}

export const bulbasaur: Pokemon = {
  id: 1,
  name: "Bulbasaur",
}

export const sharmander: Pokemon = {
  id: 1,
  name: "Sharmander",
}


export const pokemons: Pokemon [] = [];

pokemons.push(bulbasaur, sharmander);