import { PokeapiAdapter, PokeapiFetchAdapter, httpAdapter } from '../api/pokeapi.adapter';
import { PokeapiReponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`
  }
  constructor(
    public readonly id: number, 
    public  name: string,
    private readonly http: httpAdapter
    ) {}

    scream() {
      console.log(`${this.name.toLowerCase()}!!!!`);
    }

    speak() {
      console.log(`${this.name}, ${this.name}!!`);
    }

    async getMoves(): Promise<PokeapiReponse> {
      const resp = await this.http.get<PokeapiReponse>('https://pokeapi.co/api/v2/pokemon/4');
      console.log(resp);
      
      return resp;
    }
}

const pokeAxios = new PokeapiAdapter();
const pokeFecth: httpAdapter = new PokeapiFetchAdapter();

export const shamander = new Pokemon(4 , 'shamander', pokeFecth);

shamander.scream();
shamander.speak();
shamander.getMoves();