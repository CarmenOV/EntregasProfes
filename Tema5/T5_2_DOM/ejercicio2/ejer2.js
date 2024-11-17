
document.getElementById('ver-articulo').addEventListener('click', function(event) {
    event.preventDefault(); 

    document.getElementById('texto-completo').style.display = 'block';

    document.getElementById('ver-articulo').style.display = 'none';
});
