/**Coding a JavaScript stopwatch is an easy little project you can build in one day even as
a beginner. Your stopwatch needs three buttons for user interaction:
Start Stop Reset */
/// Obtén los elementos del DOM
var tiempoDiv = document.getElementsByClassName('tiempo')[0]; // Accede al primer elemento con la clase "tiempo"

// Variables para controlar el temporizador
var tiempo = 0;
var intervalo = null;

// Función para iniciar el temporizador
function start() {
        intervalo = setInterval(function() {
            tiempo++;
            tiempoDiv.innerText = tiempo;
        }, 1000);
    
}

// Función para detener el temporizador
function stop() {
    clearInterval(intervalo);
}

// Función para resetear el temporizador
function reset() {
    clearInterval(intervalo);
    intervalo = null;
    tiempo = 0;
    tiempoDiv.innerText = "0"; 
}
