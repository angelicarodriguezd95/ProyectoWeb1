
let importe;
let descuento;
let importeFinal;

importe= parseInt(prompt("Ingresar importe de su compra"));
   

if (importe>=150) {
    descuento= importe*0.12;
} else { descuento = 0;
    
}
 importeFinal= importe-descuento;

document.write("<br>El importe de descuento otorgado: %"  + descuento.toFixed(2));

document.write("<br>El importe de compra final:S/ "  + importeFinal);
