let num;
let porcentaje

num= parseInt(prompt("Ingresar el numero"));



    if (num > 500) {
        porcentaje= (num * 0.18);
        if(num < 500){
           
        }
        alert("El numero ingresado es : " + num);
        alert("El 18% de el numero ingresado es : " + porcentaje);
    }else{
        alert("el numero ingresado no es valido");
    }