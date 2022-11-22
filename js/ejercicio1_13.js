
let nota1;
let nota2;
let nota3;
let suma;
let prom;

nota1 =  parseInt(prompt("Ingresar calificacion 1",""));
nota2 = parseInt(prompt("Ingresar calificacion 2",""));
nota3 = parseInt(prompt("Ingresar calificacion 3",""));

suma = nota1 + nota2 + nota3;
prom = suma / 3;

document.write("<br>Su promedio es: "+prom.toFixed(2));
