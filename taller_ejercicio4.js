let numero1 = Number(prompt("Primer numero: "));
let numero2 = Number(prompt("Segundo numero: "));
let opcion = Number(
  prompt(
    "1. Suma     2. Resta    3.Multiplicacion    4.Division, Eliga una opcion: ",
  ),
);

elegirOperacion(numero1, numero2, opcion);

function elegirOperacion(numero1, numero2, operacion) {
  if (operacion < 1 || operacion > 4) {
    alert("Elija una de las opciones");
  }

  let resultado;

  switch (operacion) {
    case 1:
      resultado = suma(numero1, numero2);
      break;
    case 2:
      resultado = resta(numero1, numero2);
      break;
    case 3:
      resultado = multiplicacion(numero1, numero2);
      break;
    case 4:
      resultado = division(numero1, numero2);
      break;
  }

  if (!resultado) {
    resultado = 0;
  }

  console.log("El resultado es: ", resultado);
  alert(`El resultado es: ${resultado}`);
}

function resta(a, b) {
  return a - b;
}

function division(a, b) {
  if (a == 0 || b == 0) {
    alert("Elija un numero diferente de 0!");
    b = 1;
    a = 0;
  }

  return a / b;
}

function multiplicacion(a, b) {
  return a * b;
}

function suma(a, b) {
  return a + b;
}
