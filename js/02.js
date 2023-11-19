/**2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

Rectángulos
 */

class Cuenta {
  constructor(nombre) {
    this.nombre = nombre;
    this.saldo = 0;
  }

  ingresar(monto) {
    if (monto > 0) {
      this.saldo += monto;
      console.log(`Se ingresaron ${monto} pesos. Saldo actual: ${this.saldo}`);
    } else {
      console.log("Isngrese un monto valido");
    }
  }
  extraer(monto) {
    if (monto > 0 && this.saldo >= monto) {
      this.saldo -= monto;
      console.log(`Se extrajeron ${monto} pesos. Saldo actual: ${this.saldo}`);
    } else {
      console.log("Monto inválido o saldo insuficiente");
    }
  }
  informar() {
    console.log(
      `Saldo actual de la cuenta de ${this.nombre}: ${this.saldo} pesos`
    );
  }
}

const nuevoUser = new Cuenta("Alex");

nuevoUser.ingresar(1000);

nuevoUser.extraer(100);

nuevoUser.informar();
console.log(nuevoUser);
