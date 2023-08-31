//import { templateString } from './intro/01-types.ts'
//import { pokemonsId, pokemons } from "./intro/02-objects";
//import { shamander } from './intro/03-classes.ts'
import { charmander } from './intro/06-decorators-metho'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   
  <h1> ${charmander.name} - ${charmander.id}</h1> 
   
  </div>
`

