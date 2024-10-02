function tieneTresDigitos() {
    var numero = prompt("Introduce un número:");

    // Verificar si el número tiene tres dígitos
    if (numero >= 100 && numero <= 999) {
        //(numero <= -100 && numero >= -999))
        alert(  numero + " tiene tres ");
    } else {
        alert( numero + " no tiene tres ");
    }
}