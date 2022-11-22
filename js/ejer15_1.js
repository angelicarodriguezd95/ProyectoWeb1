let hijos;
let sueldo;
let bonificacion;
let suelF;

sueldo = parseInt(prompt("Ingresar el sueldo"));
hijos = parseInt(prompt("Ingresar el numero de hijos"));

bonificacion = hijos * 0.70;
suelF = sueldo + bonificacion;

if (hijos > 0) {
    alert ("La bonificacion por hijo es: "+bonificacion);  
 } else{ (hijos<=0) 
        alert ("La bonificacion por hijo es: "+bonificacion);  
} 

document.write("<br>Su bonificacion es:  "+ bonificacion);
document.write("<br>EL sueldo final es:  "+ suelF);