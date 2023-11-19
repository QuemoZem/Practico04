/** Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

 */

class Persona {
  constructor(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = this.generarDNI();
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = new Date().getFullYear() - edad;
  }
  calcularGeneracion() {
    const añoActual = new Date().getFullYear();
    const añoNacimiento = this.añoNacimiento;

    if (añoNacimiento > añoActual) {
      return -1;
    } else if (añoNacimiento >= 1994 && añoNacimiento <= 2010) {
      return 0;
    } else if (añoNacimiento >= 1981 && añoNacimiento <= 1993) {
      return 1;
    } else if (añoNacimiento >= 1969 && añoNacimiento <= 1980) {
      return 2;
    } else if (añoNacimiento >= 1949 && añoNacimiento <= 1968) {
      return 3;
    } else if (añoNacimiento >= 1930 && añoNacimiento <= 1948) {
      return 4;
    } else {
      return 5;
    }
  }

  mostrarGeneracion() {
    const generacion = this.calcularGeneracion();
    switch (generacion) {
      case -1:
        console.log("Aún no ha nacido");
        break;
      case 0:
        console.log(
          `Generación Z: Personas nacidas a partir de 1994 Rasgo "Irreverencia"`
        );
        break;
      case 1:
        console.log(
          `Generación Y: Personas nacidas entre 1981 y 1993 Rasgo "Frustracion"`
        );
        break;
      case 2:
        console.log(
          `Generación X: Personas nacidas entre 1969 y 1980 Rasgo "Obsesion por el exito"`
        );
        break;
      case 3:
        console.log(
          `Baby Boom: Personas nacidas entre 1949 y 1968 Rasgo "Ambicion"`
        );
        break;
      case 4:
        console.log(
          `Silent Generation: Personas nacidas entre 1930 y 1948 Rasgo "Austeridad"`
        );
        break;
      default:
        console.log("Otra generación");
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      console.log("Es mayor de Edad");
    } else {
      console.log("Es mejor de Edad");
    }
  }

  mostrarDatos() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`DNI: ${this.dni}`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Peso: ${this.peso}`);
    console.log(`Altura: ${this.altura}`);
    console.log(`Año de nacimiento: ${this.añoNacimiento}`);
  }

  generarDNI() {
    return Math.floor(Math.random() * 90000000) + 10000000;
  }
}

const personaNueva = new Persona("Maria", 55, "M", 60, 160);
console.log(personaNueva);
personaNueva.esMayorDeEdad();
personaNueva.mostrarGeneracion();
