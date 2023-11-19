/**Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
 */

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
    this.perimetro = 0;
    this.area = 0;
  }

  calcularPerimetro() {
    if (this.alto > 0 && this.ancho > 0) {
      this.perimetro = this.alto * 2 + this.ancho * 2;
      console.log(`El perimetro del rectangulo es : ${this.perimetro}`);
    } else {
      console.log("Ingrese numeros no negativos");
    }
  }

  calcularArea() {
    if (this.alto > 0 && this.ancho > 0) {
      this.area = this.alto * this.ancho;
      console.log(`El Area del rectangulo es : ${this.area}`);
    } else {
      console.log("Ingrese numeros no negativos");
    }
  }
}

const rectanguloNuevo = new Rectangulo(5, 3);
rectanguloNuevo.calcularArea();
rectanguloNuevo.calcularPerimetro();
