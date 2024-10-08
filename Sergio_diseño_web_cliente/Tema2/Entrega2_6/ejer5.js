// Mostrar la fecha de la última actualización
document.getElementById('show-last-updated').addEventListener('click', function() {
    const lastUpdated = document.lastModified;
    alert('Última actualización: ' + lastUpdated);
});

// Mostrar la URL desde la que se ha activado el enlace
document.getElementById('show-referrer').addEventListener('click', function() {
    alert('URL del enlace que activó este documento: ' + document.referrer);
});

// Mostrar el título del documento actual
document.getElementById('show-title').addEventListener('click', function() {
    alert('Título del documento actual: ' + document.title);
});

// Mostrar la dirección URL completa
document.getElementById('show-full-url').addEventListener('click', function() {
    alert('URL completa: ' + window.location.href);
});

// Abrir documento antes de cargar
document.getElementById('open-doc-before').addEventListener('click', function() {
    const newWindowBefore = window.open('', 'newWindowBefore', 'width=300,height=200');
    newWindowBefore.document.write('Este contenido se muestra antes de que se cargue completamente.');
    newWindowBefore.document.close(); // Cierra el documento para que se pueda ver el contenido
});

// Abrir documento después de cargar
document.getElementById('open-doc-after').addEventListener('click', function() {
    const newWindowAfter = window.open('', 'newWindowAfter', 'width=300,height=200');
    newWindowAfter.document.write('Este contenido se muestra después de que se carga completamente.');
    // No se cierra aquí, lo que significa que se puede sobrescribir si se hace clic después
});
