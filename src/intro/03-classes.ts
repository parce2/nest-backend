import axios from 'axios'
import { PokeapiReponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`
  }
  constructor(
    public readonly id: number, // readonly no deja que se establezca un nuevo valor
    public  name: string,
    //public imageUrl: string
    ) {}

    scream() {
      console.log(`${this.name.toLowerCase()}!!!!`);
    }

    speak() {
      console.log(`${this.name}, ${this.name}!!`);
    }

    async getMoves(): Promise<number> {
      const {data: { moves } } = await axios.get<PokeapiReponse>('https://pokeapi.co/api/v2/pokemon/4');

      return moves.length;
    }
}

export const shamander = new Pokemon(1, 'shamander');

//shamander.id = 5;


shamander.scream();
shamander.speak();
shamander.getMoves();