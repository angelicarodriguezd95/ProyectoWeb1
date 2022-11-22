let mm;
let pulgadas;

pulgadas= parseInt(prompt("Ingresar la medida en pulgadas ",""));

mm= 25.4*pulgadas;

document.write("<br> El equivalente en milímetros es: " + mm.toFixed(2));