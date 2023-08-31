import { MyDecorator } from "./05-decorator";

const Deprecated = (deprecationReason: string) => {
  return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
     //console.log({target})
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
          //! Llamar la función propiamente con sus argumentos
          propertyDescriptor.value.apply(this, args); 
        }
        return wrapperFn;
      }
    }
  }   
}


@MyDecorator()
export class Pokemon {

  constructor(
    public readonly id: number,
    public readonly name: string
  ) {
  }

  @Deprecated('No use')
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