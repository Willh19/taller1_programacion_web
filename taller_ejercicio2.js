let calificacion = Number(prompt("Ingrese calificacion: "));

if (calificacion < 0 || calificacion > 100) {
  alert("Ingresar un valor entre 0 y 100");
  calificacion = 0;
}

let clasificacion = clasificacionNota(calificacion);

alert(`Clasificacion de nota: ${clasificacion}`);
console.log("La clasificacion de la nota es:", clasificacion);

function clasificacionNota(califacion) {
  if (califacion >= 90) {
    return "Excelente";
  } else if (califacion >= 80) {
    return "Muy bueno";
  } else if (califacion >= 70) {
    return "Bueno";
  } else if (califacion >= 60) {
    return "Regular";
  } else {
    return "Reprobado";
  }
}
