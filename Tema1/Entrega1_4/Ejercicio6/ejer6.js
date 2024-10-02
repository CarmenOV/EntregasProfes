function divisor(){
    //Pido el número
    var numero = prompt("Escribe un número:");
    //Mostramos el resultado
    if (numero % 3 === 0)
        document.write("Es divisible por 3");
    else
        document.write("No es divisible por 3");
}