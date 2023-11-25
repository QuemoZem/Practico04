/**Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
 */

class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.profesion}`);
  }

  despedirse() {
    document.write(`Ha sido un placer conocerte. Espero verte pronto.<br>`);
  }
}

const primeraPersona = new Persona("Francisco", 35, "Tecnico");
const segundaPersona = new Persona("Angel", 42, "Chofer");

primeraPersona.saludar();
segundaPersona.saludar();
primeraPersona.despedirse();
segundaPersona.despedirse();
