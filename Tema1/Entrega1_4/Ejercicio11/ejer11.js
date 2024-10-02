function imc() {
    var peso = prompt("Introduce tu peso en kilogramos:");
    var altura = prompt("Introduce tu altura en metros:");

    // Calcular el IMC
    var imct = peso / (altura * altura);

    // Mostrar el resultado en un alert
    alert("Tu IMC es: " + imct); 
}