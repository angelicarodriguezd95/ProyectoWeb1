let precio;
let igv;
let igp;

precio=  parseInt(prompt("Ingresar el precio del producto ",""));

igv= 0.19*p;
igp= p + igv;

document.write("<br>El precio de IGV es % "+igv);

document.write("<br>El precio a pagar final es: S/"+igp);
