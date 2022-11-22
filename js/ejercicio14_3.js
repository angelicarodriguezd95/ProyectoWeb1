let entradaG;
let entradaMy;
let entradaMen;

let totalG;
let totalMy;
let totalMe;

let recaudado;

entradaG=  parseInt(prompt("Ingresar cantidad entradas generales",""));
entradaMy=  parseInt(prompt("Ingresar cantidad entradas a mayores de edad",""));
entradaMen= parseInt(prompt("Ingresar cantidad entradas  a menores de edad",""));

totalG= entradaG*150;
totalMy= entradaMy*50;
totalMe= entradaMen*80;

recaudado= totalG+totalMy+totalMe;

document.write("<br>EL total de entradas generales es:  "+ totalG);
document.write("<br>EL total de entradas para mayores de edad es:  "+ totalMy);
document.write("<br>EL total de entradas para menores de edad es:  "+ totalMe);

document.write("<br>EL total del monto recaudado es:  "+ recaudado);






