let mujeres;
let hombres;
let total;
let porceH;
let porceM;

mujeres=  parseInt(prompt("Ingresar el numero de mujeres",""));
hombres=  parseInt(prompt("Ingresar el numero de hombres",""));


total= hombres+mujeres;

porceH= (hombres/total) * 100;
porceM= (mujeres/total) * 100;


document.write("<br>El porcentaje de mujeres es: "  + porceM);

document.write("<br>El porcentaje de varones es: "  + porceH);

