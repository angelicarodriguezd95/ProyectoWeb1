let av1;
let av2;
let av3;
let av4;
let av5;

let montoD;

montoD=  parseInt(prompt("Ingresar el monto de dinero para la reparacion",""));

av1= montoD*0.35;
av2=montoD*0.25;
av3=montoD*0.10;
av4=montoD*0.15;
av5=montoD-av1-av2-av3-av4;

document.write("<br>Avenida La Mar recibira:s/ "  + av1);
document.write("<br>Avenida Abancay recibira:s/ "  + av2);
document.write("<br>Avenida 28 de Julio  recibira:s/ "  + av3);
document.write("<br>Avenida Aviación  recibira:s/ "  + av4);
document.write("<br>Avenida Tacna recibira:s/ "  + av5);