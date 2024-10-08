function divisibleEntre() {
    var numero1 = parseInt(prompt(" primer número:"));
    var numero2 = parseInt(prompt(" segundo número:"));

    // Verificar si el segundo número es 0 
    if (numero2 === 0) {
        alert("No se puede dividir por cero.");
    } else {
        // Comprobar si el número 1 es divisible por el número 2
        if (numero1 % numero2 === 0) {
            alert(numero1 + " es divisible por " + numero2);
        } else {
            alert(numero1 + " no es divisible por " + numero2);
        }
    }
}