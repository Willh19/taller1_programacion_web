let temperatura;
let flag;

do {
    temperatura = prompt("Ingrese una temperatura en Celsius: ");
    
    if (isNaN(temperatura) || temperatura === "") {
        flag = confirm("Entrada inválida. ¿Desea intentarlo de nuevo?");
    } else {
        flag = false;
    }
} while (isNaN(temperatura) || temperatura === "" || flag);

var fahrenheit = (temperatura * 1.8) + 32;
console.log("La temperatura en Fahrenheit es: " + fahrenheit);
