/**crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
 */

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = [];
  }

  abordarPasajero(pasajero) {
    if (this.listaPasajeros.length < this.capacidad) {
      this.listaPasajeros.push(pasajero);
      console.log(
        `Pasajero : ${pasajero} abordo el avio : ${this.nombre} la capacidad actual es de ${this.listaPasajeros.length}`
      );
    } else {
      console.log(`El vuelo Esta lleno, buscar otro Avion`);
    }
  }
}
class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = [];
  }

  agregarAvion(avion) {
    this.listaAviones.push(avion);
  }

  buscarAvion(avionNombre) {
    const buquedaExistente = this.listaAviones.find(
      (avion) => avion.nombre === avionNombre
    );

    if (buquedaExistente) {
      console.log(
        `Avión encontrado:\nNombre: ${buquedaExistente.nombre}\nCapacidad: ${buquedaExistente.capacidad}\nDestino: ${buquedaExistente.destino}`
      );
    } else {
      console.log(`El avion ${avionNombre} no se encontro.`);
    }
  }
}

const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

function mostrarMenu() {
  while (true) {
    const opcion = prompt(
      "Seleccione una opción:\n1. Agregar Avión\n2. Buscar Avión\n3. Abordar Avión\n4. Salir"
    );

    switch (opcion) {
      case "1":
        const nombreNuevoAvion = prompt("Ingrese el nombre del Avion");
        const capacidadAvion = parseInt(prompt("Ingrese la capacidad"));
        const detinoAvion = prompt("Ingrese el destino");
        const nuevoAvionIngresado = new Avion(
          nombreNuevoAvion,
          capacidadAvion,
          detinoAvion
        );
        aeropuertoInternacional.agregarAvion(nuevoAvionIngresado);
        break;
      case "2":
        const nombreABuscar = prompt("Ingrese nombre del avion a Buscar");
        aeropuertoInternacional.buscarAvion(nombreABuscar);
        break;
      case "3":
        const nombreAbordarAvion = prompt(
          "Ingrese el nombre del avión para abordar:"
        );
        const avionAAbordar = aeropuertoInternacional.listaAviones.find(
          (avion) => avion.nombre === nombreAbordarAvion
        );
        if (avionAAbordar) {
          const pasajeroAAgregar = prompt(
            "Ingrese el nombre del pasajero para abordar:"
          );

          if (avionAAbordar.listaPasajeros.length < avionAAbordar.capacidad) {
            avionAAbordar.abordar(pasajeroAAgregar);
          } else {
            console.log(`El avión ${avionAAbordar.nombre} está lleno. `);
          }
        } else {
          console.log(
            `No se encontró el avión con nombre ${nombreAbordarAvion}.`
          );
        }
        break;
      case "4":
        console.log("Adios");
        return;

      default:
        console.log("Opción no válida.");
    }
  }
}

mostrarMenu();
