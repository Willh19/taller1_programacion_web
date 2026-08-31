let nombreProducto = prompt("Nombre del producto:");
let precioProducto = Number(prompt("Precio producto: "));
let porcentajeDescuento = Number(
  prompt("Porcentaje descuento:  (formato: 2, 13, ...)"),
);

if (!nombreProducto) {
  alert("Escriba un nombre valido!");
}

if (precioProducto < 0) {
  alert("Escriba un precio valido!");
  precioProducto = 0;
}

if (porcentajeDescuento < 0) {
  alert("Escriba un descuento valido!");
  porcentajeDescuento = 0;
}

const descuentoADecimal = porcentajeDescuento / 100;

const descuentoEnProducto = precioProducto * descuentoADecimal;

const precioTotal = precioProducto - descuentoEnProducto;

console.log("Producto: ", nombreProducto);
console.log("Precio total: ", precioTotal);

alert(`Producto: ${nombreProducto} Precio total: ${precioTotal}`);
