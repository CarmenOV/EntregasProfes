//1. Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert. 
function clicalerta() {
    const miBoton = document.getElementById('miBoton');
    miBoton.addEventListener('click', function() {
      alert('¡Has hecho clic!');
    });
  }
clicalerta();
  
