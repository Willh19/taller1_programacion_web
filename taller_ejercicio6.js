class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

const producto_1 = new Producto("Mouse", 25, 19);
const producto_2 = new Producto("Laptop" , 30, 5);

console.log("Producto: "+producto_1.nombre+"\nPrecio: $"+producto_1.precio+"\nStock: "+producto_1.stock);
console.log("Producto: "+producto_2.nombre+"\nPrecio: $"+producto_2.precio+"\nStock: "+producto_2.stock);
