/**Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
 */

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  igualA(otroContacto) {
    return this.nombre === otroContacto.nombre;
  }
}

class AgendaTelefonica {
  constructor(espacio = 10) {
    this.espacio = espacio;
    this.contactos = [];
  }

  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      console.log("La agenda está llena. No se pueden agregar más contactos.");
    } else {
      if (!this.existeContacto(contacto)) {
        this.contactos.push(contacto);
        console.log("Contacto añadido correctamente.");
      } else {
        console.log("El contacto ya existe en la agenda.");
      }
    }
  }

  existeContacto(contacto) {
    return this.contactos.some((c) => c.igualA(contacto));
  }

  listarContactos() {
    console.log("Lista de contactos:");
    this.contactos.forEach((contacto) => {
      console.log(`${contacto.nombre}: ${contacto.telefono}`);
    });
  }

  buscarContacto(nombre) {
    const contactoEncontrado = this.contactos.find(
      (contacto) => contacto.nombre === nombre
    );
    if (contactoEncontrado) {
      console.log(`Teléfono de ${nombre}: ${contactoEncontrado.telefono}`);
    } else {
      console.log(`No se encontró el contacto con el nombre ${nombre}.`);
    }
  }

  eliminarContacto(contacto) {
    const indice = this.contactos.findIndex((c) => c.igualA(contacto));
    if (indice !== -1) {
      this.contactos.splice(indice, 1);
      console.log("Contacto eliminado correctamente.");
    } else {
      console.log("No se encontró el contacto en la agenda.");
    }
  }

  agendaLlena() {
    return this.contactos.length >= this.espacio;
  }

  huecosLibres() {
    return this.espacio - this.contactos.length;
  }
}

function mostrarMenu() {
  const agenda = new AgendaTelefonica();

  while (true) {
    const opcion = prompt(
      "Seleccione una opción:\n1. Añadir Contacto\n2. Buscar Contacto\n3. Lista Contactos\n4. Eliminar Contacto\n5. Huecos Libres\n6. Salir"
    );

    switch (opcion) {
      case "1":
        const nombreNuevo = prompt("Ingrese el nombre del contacto:");
        const telefonoNuevo = prompt("Ingrese el teléfono del contacto:");
        const nuevoContacto = new Contacto(nombreNuevo, telefonoNuevo);
        agenda.aniadirContacto(nuevoContacto);
        break;

      case "2":
        const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
        agenda.buscarContacto(nombreBuscar);
        break;

      case "3":
        agenda.listarContactos();
        break;

      case "4":
        const nombreEliminar = prompt(
          "Ingrese el nombre del contacto a eliminar:"
        );
        const contactoEliminar = new Contacto(nombreEliminar, "");
        agenda.eliminarContacto(contactoEliminar);
        break;

      case "5":
        console.log(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
        break;

      case "6":
        console.log("Saliendo del programa.");
        return;

      default:
        console.log("Opción no válida. Inténtelo de nuevo.");
    }
  }
}

mostrarMenu();
