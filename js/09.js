/**Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.
 */

class Animal {
  constructor(nombre, edad, tipo) {
    this.nombre = nombre;
    this.edad = edad;
    this.tipo = tipo;
  }

  emitirSonido() {
    console.log(`Soy ${this.nombre} y tengo ${this.edad}`);
  }
}

class Perro extends Animal {
  constructor(pirueta, nombre) {
    super(nombre);
    this.pirueta = pirueta;
  }

  emitirSonido() {
    console.log(
      `Mi nombre es ${this.nombre} soy un Perro y mi sonido es un ladrido y mi pirueta es ${this.pirueta}`
    );
  }
}

class Gato extends Animal {
  constructor(pirueta, nombre) {
    super(nombre);
    this.pirueta = pirueta;
  }

  emitirSonido() {
    console.log(
      `Mi nombre es ${this.nombre} soy un Gato y mi sonido es un Maullido y mi pirueta es ${this.pirueta}`
    );
  }
}

const perro01 = new Perro("Hacerme el Muerto", "Firulais");
const gato01 = new Gato("Dormir", "Alix");

perro01.emitirSonido();
gato01.emitirSonido();
