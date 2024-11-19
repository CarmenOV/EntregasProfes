import { arrArticulos } from "./modulos/articulos.js";

(function Main() {
  // crear un 'div' general para meter todos los artículos
  const contenedor = document.createElement('div');

  // crear un DocumentFragment para agrupar los elementos
  const fragmento = document.createDocumentFragment();

  // para cada artículo del array se cogerán los datos y
  // se irán colocando de forma visual en el DocumentFragment
  arrArticulos.forEach((articulo) => {
    const articuloElemento = document.createElement('div');
    articuloElemento.classList.add('articulo');

    const tituloElemento = document.createElement('h2');
    tituloElemento.textContent = articulo.title;

    const descripcionElemento = document.createElement('p');
    descripcionElemento.textContent = articulo.description;

    const precioElemento = document.createElement('p');
    precioElemento.innerHTML = '<strong>Precio: </strong>' + articulo.price;

    const imagenElemento = document.createElement('img');
    imagenElemento.src = articulo.image;
    imagenElemento.alt = articulo.title;

    const ratingElemento = document.createElement('p');
    ratingElemento.innerHTML = '<strong>Calificación: </strong>' + articulo.rating.rate + ' (' + articulo.rating.count + ' reseñas)';

    articuloElemento.appendChild(tituloElemento);
    articuloElemento.appendChild(descripcionElemento);
    articuloElemento.appendChild(precioElemento);
    articuloElemento.appendChild(imagenElemento);
    articuloElemento.appendChild(ratingElemento);

    fragmento.appendChild(articuloElemento);
  });

  // agregar el DocumentFragment al contenedor
  contenedor.appendChild(fragmento);

  // agregar el contenedor al body
  document.body.appendChild(contenedor);
})();