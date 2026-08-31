let nombreUsuario = prompt("Escriba nombre: ");

nombreUsuario = nombreUsuario.toLocaleLowerCase();
nombreUsuario = nombreUsuario.replaceAll(/\s+/g, "");
nombreUsuario = nombreUsuario.concat("_dev");

console.log(nombreUsuario);
alert(nombreUsuario);
