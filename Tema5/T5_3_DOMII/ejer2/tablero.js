// Función para crear el tablero
function crearTablero() {
    const tablero = document.getElementById('tablero');
    const casillas = [];

    for (let i = 0; i < 16; i++) {
        const casilla = document.createElement('div');
        casilla.classList.add('casilla');
        
        if (i === 15) {
            casilla.textContent = '';  // Casilla vacía
            casilla.classList.add('vacía');  
        } else {
            casilla.textContent = (i + 1).toString();  //  número del 1 al 15
        }

        tablero.appendChild(casilla);
        casillas.push(casilla);
    }

    return casillas;
}
    





// Función para desordenar las casillas
function desordenarTablero() {
    const tablero = document.getElementById('tablero');
    const casillas = Array.from(tablero.children);  
    
    for (let i = casillas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  
        [casillas[i].textContent, casillas[j].textContent] = [casillas[j].textContent, casillas[i].textContent];  // Intercambia 
    }

    // Vuelve a asignar los elementos desordenados al tablero
    casillas.forEach(casilla => tablero.appendChild(casilla));
}






// Función para reiniciar el tablero
function reiniciarTablero() {
    const tablero = document.getElementById('tablero');
    tablero.innerHTML = '';
    crearTablero();
    desordenarTablero();
}

crearTablero();
desordenarTablero();
