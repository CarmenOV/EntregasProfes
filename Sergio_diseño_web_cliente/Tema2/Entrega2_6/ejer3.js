// Mostrar el nombre del host
document.getElementById('show-host').addEventListener('click', function() {
    alert('Nombre del host: ' + window.location.hostname);
});

// Mostrar la URL completa
document.getElementById('show-url').addEventListener('click', function() {
    alert('URL completa: ' + window.location.href);
});

// Preguntar por una dirección y activarla
document.getElementById('go-to-url').addEventListener('click', function() {
    const url = prompt('Introduce una URL (con http:// o https://)');
    if (url) {
        window.location.href = url; // Navegar a la URL introducida
    }
});

// Mostrar el protocolo
document.getElementById('show-protocol').addEventListener('click', function() {
    alert('Protocolo: ' + window.location.protocol);
});

// Recargar la página
document.getElementById('reload-page').addEventListener('click', function() {
    location.reload(); // Recargar la página
});
