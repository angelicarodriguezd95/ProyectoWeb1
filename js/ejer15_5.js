
let alumno;
let parcial
let final;
let practicas;
let promedio;
let suma;


alumno= prompt("Ingresar el nombre del alumno:");
parcial= parseFloat(prompt("Ingresar la nota de su parcial:"));
final= parseFloat(prompt("Ingresar la nota de su examen final:"));
practicas= parseFloat(prompt("Ingresar la nota de sus practicas:"));


suma = parcial + final+ final+practicas;
promedio = suma / 4 ;

    if (promedio >= 11) {
        document.write("<br>Nombre del Alumno:  " + alumno);
        document.write("<br>Promedio final:  " + promedio.toFixed(2));
    }

