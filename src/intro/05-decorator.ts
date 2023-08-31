class NewPokemon {
  constructor(
    public readonly id: number,
    public readonly name: string
  ) {
  }

  scream() {
    console.log(`NO QUIERO!!!!`);
  }

  speak() {
    console.log(`NO QUIERO HABLAR!`);
  }
}


export const MyDecorator = () => {
  return (target: Function) => {
    return NewPokemon;
  }
}

@MyDecorator()
export class Pokemon {

  constructor(
    public readonly id: number,
    public readonly name: string
  ) {
  }

  scream() {
    console.log(`${this.name.toLowerCase()}!!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}!`);
  }
}

export const charmander = new Pokemon(4, 'shamander')

charmander.scream();
charmander.speak();