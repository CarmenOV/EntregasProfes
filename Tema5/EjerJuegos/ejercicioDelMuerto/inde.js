// Lista de palabras
const palabras = ["javascript", "programar", "ahorcado", "proyecto", "desarrollo"];
let palabraSeleccionada = "";
let letrasAdivinadas = [];
let intentosIncorrectos = 0;
const maxIntentos = 6;

// Elementos del DOM
const palabraContenedor = document.getElementById("palabra-contenedor");
const mensaje = document.getElementById("mensaje");
const dibujoAhorcado = document.getElementById("dibujo-ahorcado");

// Inicializar el juego
function iniciarJuego() {
    palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
    letrasAdivinadas = [];
    intentosIncorrectos = 0;

    actualizarPalabra();
    mensaje.textContent = "";
    dibujoAhorcado.textContent = `Intentos que quedan: ${maxIntentos}`;
}

// Actualiza la palabra oculta en pantalla
function actualizarPalabra() {
    const palabraMostrada = palabraSeleccionada
        .split("")
        .map((letra) => (letrasAdivinadas.includes(letra) ? letra : "_"))
        .join(" ");
    palabraContenedor.textContent = palabraMostrada;

    if (!palabraMostrada.includes("_")) {
        mensaje.textContent = "acertas";
    }
}

// Maneja la lógica al seleccionar una letra
function adivinarLetra(letra) {
    if (palabraSeleccionada.includes(letra)) {
        letrasAdivinadas.push(letra);
    } else {
        intentosIncorrectos++;
        dibujoAhorcado.textContent = `Intentos que te quedan : ${maxIntentos - intentosIncorrectos}`;
    }

    if (intentosIncorrectos >= maxIntentos) {
        mensaje.textContent = `mal la palabra es "${palabraSeleccionada}".`;
    }

    actualizarPalabra();
}

// Reinicia el juego
function reiniciarJuego() {
    iniciarJuego();
}

// Inicia el juego al cargar la página
iniciarJuego();
