/**Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */

class Libro {
  constructor(ISBN, titulo, autor, numeroPaginas) {
    this.isbn = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numeroPaginas = numeroPaginas;
  }

  get isbn() {
    return this._isbn;
  }

  set isbn(nuevoISBN) {
    this._isbn = nuevoISBN;
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  }
  get autor() {
    return this._autor;
  }

  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }
  get numeroPaginas() {
    return this._numeroPaginas;
  }

  set numeroPaginas(nuevoPaginas) {
    this._numeroPaginas = nuevoPaginas;
  }

  mostrarLibro() {
    console.log(
      `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.numeroPaginas}`
    );
  }
}

const nuevoLibro = new Libro("02", "Harry Potter", "No Recuerdo", 522);
const nuevoLibro2 = new Libro("23", "Diablo de la botella", "Edgar", 5122);

nuevoLibro.mostrarLibro();
nuevoLibro2.mostrarLibro();

if (nuevoLibro.numeroPaginas > nuevoLibro2.numeroPaginas) {
  console.log(`${nuevoLibro.titulo} tiene más páginas.`);
} else if (nuevoLibro.numeroPaginas < nuevoLibro2.numeroPaginas) {
  console.log(`${nuevoLibro2.titulo} tiene más páginas.`);
} else {
  console.log("Ambos libros tienen el mismo número de páginas.");
}
