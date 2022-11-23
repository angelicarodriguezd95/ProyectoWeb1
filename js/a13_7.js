
let num;

num = parseInt(prompt('Ingrese un número de 1,2 o 3 dígitos'));

if (num < 10) {
    document.write('Tiene un dígito');
} else {
    if (num < 100) {
        document.write('Tiene dos dígitos');
    } else {
        document.write('Tiene tres dígitos');
    }
}

document.write("<br>Sus cifras elevada al cuadrado "+num);