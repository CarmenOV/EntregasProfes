let lista = [];

// Función para agregar un ítem
function agregarCosa() {
    const input = document.getElementById("cosa"); 
    const listaUl = document.getElementById("lista"); // Obtiene la lista <ul>
    const nuevoItem = input.value; // Valor del input

    lista.push(nuevoItem); // Agrega el ítem al array
    const li = document.createElement("li"); // Crea un elemento <li>
    li.textContent = nuevoItem; // Asigna el texto del ítem
    listaUl.appendChild(li); // Agrega el <li> al <ul>
    input.value = ""; // Limpia el input
}


