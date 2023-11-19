/**Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

class Producto {
  constructor(codigo, precio, nombre) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    console.log(
      `Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`
    );
  }
}

const producto1 = new Producto(2023, 500, "Polenta");
const producto2 = new Producto(2021, 480, "Arroz");
const producto3 = new Producto(2022, 510, "Coca-Cola");

const arrayProductos = [producto1, producto2, producto3];

arrayProductos.forEach((producto) => {
  producto.imprimeDatos();
});
