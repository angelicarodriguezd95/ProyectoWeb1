let examen1;
let examen2;
let examen3;
let promedio;


examen1 = parseInt(prompt("Ingresar la nota de su perimer examen"));
examen2 = parseInt(prompt("Ingresar la nota de su segundo examen"));
examen3 = parseInt(prompt("Ingresar la nota de su tercer examen"));

promedio= (examen1*0.30)+(examen2*0.30)+ (examen3*0.40);



document.write("<br>El promedio final es: "+ promedio);

