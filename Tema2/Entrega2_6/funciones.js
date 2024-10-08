// Función para llenar la tabla con información del navegador
function funcioninfo() {
    const info = [
        ["Window Width", window.innerWidth],
        ["Window Height", window.innerHeight],
        ["Outer Width", window.outerWidth],
        ["Outer Height", window.outerHeight],
        ["Location", window.location.href],
        ["Title", document.title],
        ["User Agent", navigator.userAgent],
        ["Language", navigator.language],
        ["Cookies Enabled", navigator.cookieEnabled],
        ["Online", navigator.onLine],
        ["Screen Width", screen.width],
        ["Screen Height", screen.height],
        ["Color Depth", screen.colorDepth],
        ["Pixel Depth", screen.pixelDepth]
    ];
    
    // Obtener referencia al tbody donde se insertarán las filas
    const tbody = document.getElementById('info-rows');

    // Recorrer la lista de información y crear filas dinámicamente
    for (let i = 0; i < info.length; i++) {
        const row = document.createElement('tr');  // Crear una fila <tr>

        const cell1 = document.createElement('td');  // Crear la primera celda <td>
        cell1.textContent = info[i][0];  // Establecer el nombre del atributo
        row.appendChild(cell1);  // Añadir la primera celda a la fila

        const cell2 = document.createElement('td');  // Crear la segunda celda <td>
        cell2.textContent = info[i][1];  // Establecer el valor del atributo
        row.appendChild(cell2);  // Añadir la segunda celda a la fila

        tbody.appendChild(row);  // Añadir la fila al tbody
    }
}

//ejercicio 2
 // Función para llenar la tabla con información de la pantalla
function funcioninfo() {
    const info = [
        ["Screen Width", screen.width],
        ["Screen Height", screen.height],
        ["Available Width", screen.availWidth],
        ["Available Height", screen.availHeight],
        ["Color Depth", screen.colorDepth],
        ["Pixel Depth", screen.pixelDepth],
        ["Orientation", screen.orientation.type],
        ["Screen X", screenX], // La posición de la pantalla respecto a la ventana
        ["Screen Y", screenY]  // La posición de la pantalla respecto a la ventana
    ];
    
    // Obtener referencia al tbody donde se insertarán las filas
    const tbody = document.getElementById('info-rows');

    // Recorrer la lista de información y crear filas dinámicamente
    for (let i = 0; i < info.length; i++) {
        const row = document.createElement('tr');  // Crear una fila <tr>

        const cell1 = document.createElement('td');  // Crear la primera celda <td>
        cell1.textContent = info[i][0];  // Establecer el nombre del atributo
        row.appendChild(cell1);  // Añadir la primera celda a la fila

        const cell2 = document.createElement('td');  // Crear la segunda celda <td>
        cell2.textContent = info[i][1];  // Establecer el valor del atributo
        row.appendChild(cell2);  // Añadir la segunda celda a la fila

        tbody.appendChild(row);  // Añadir la fila al tbody
    }
}
