var contadorDiv = document.getElementById('contador');
var boton = document.getElementById('incrementar');

var contador = 0;

boton.onclick = function() {
    contador++; // Incrementar 
    contadorDiv.textContent = contador; // Actualizar 
};