function Rango() {
    var valor = prompt("Introduce el valor a comprobar:");
    var rangoInf = prompt("Introduce el rango inferior:");
    var rangoSup = prompt("Introduce el rango superior:");

    // Verificar si el valor está dentro del rango
    if (valor >= rangoInf && valor <= rangoSup) {
        alert(valor + " está dentro del rango [" + rangoInf + ", " + rangoSup + "]");
    } else {
        alert(valor + " no está dentro del rango [" + rangoInf + ", " + rangoSup + "]");
    }
}