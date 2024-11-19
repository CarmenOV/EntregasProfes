
import { arrArticulos } from "./modulos/articulos.js";


(function Main() {
  // un 'div' general para meter todos los artículos
  const contenedor = document.createElement('div');
  document.body.appendChild(contenedor);

  // para cada artículo del array se cogerán los datos y se irán colocando de forma visual en el documento .html
  arrArticulos.forEach((articulo) => {
    const articuloElemento = document.createElement('div');
    articuloElemento.classList.add('articulo');
    
    // título
    const tituloElemento = document.createElement('h2');
    tituloElemento.textContent = articulo.title;

    // descripción
    const descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = articulo.description;

    // precio
    const precioElemento = document.createElement('p');
    precioElemento.innerHTML = '<strong>Precio: </strong>' + articulo.price;

    // imagen
    const imagenElemento = document.createElement('img');
    imagenElemento.src = articulo.image;
    imagenElemento.alt = articulo.title;

    // rating
    const ratingElemento = document.createElement('p');
    ratingElemento.innerHTML = '<strong>Calificación: </strong>' + articulo.rating.rate + ' (' + articulo.rating.count + ' reseñas)';

    // se agregan todos los elementos obtenidos en el HTML
    articuloElemento.appendChild(tituloElemento);
    articuloElemento.appendChild(descripcionElemento);
    articuloElemento.appendChild(precioElemento);
    articuloElemento.appendChild(imagenElemento);
    articuloElemento.appendChild(ratingElemento);

    // y finalmente se añade el contenedor al HTML
    contenedor.appendChild(articuloElemento);
  });
})();