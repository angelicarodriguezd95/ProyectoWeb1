let n;
let fact;
let resultado;

n= parseInt(prompt("Ingresar numero"));

 fact = 1;
for( i = 1; i <= n; i++ ) {
  resultado= fact *= i;
}

    alert("El  factorial del numero  es : " + resultado);
