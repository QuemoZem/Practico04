/**Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();      auto encendido
objeto.apadar()         El auto se apagó


 */

class Auto {
  constructor(color, marca, modelo) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = false;
  }

  encender() {
    this.encendido = true;
    console.log("El auto encendio Correctamente");
  }
  apagar() {
    this.encendido = false;
    console.log("El auto se apago correctamente");
  }
}

const autoNuevo = new Auto("Verde", "Volswagen", "Gol trend");

autoNuevo.encender();
autoNuevo.apagar();
