/**que muestre por consola todos los h2 el lorem ipsum */
function muestra() {
    let h2parrafos = document.getElementsByTagName('p');
    for (let i = 0; i <h2parrafos.length; i++) {
        console.log(h2parrafos.item(i).textContent);
    }
}

/**quiero que con esta funcion me desglose todos los nodos que tiene  */
function muestraarticulo() {
    let article = document.getElementsByTagName("article")[0]; 
        console.log(article.childNodes);
  
}

//otra forma de hacerlo
function OtraFormaMuestraArticulo() {
    let article = document.getElementsByTagName("article")[0]; 
    console.log(article.children);
}

let filtro=0;
function muestraarticulo2(filtro) {
    
    let article = document.getElementsByTagName("article")[0];
    if (filtro === 0) { 
        for (const element of article.childNodes) {
            if (element.nodeName !== "#text") {
                console.log(element);
            }
        }
    } else {
        console.log(article.childNodes);
    }
}


/**funcion que muestra todos los nodos article, div, img */
function muestraElementosDelDOM(elemento) {
        console.log(elemento.tagName);
        for (const ele of elemento.children) {
                console.log(ele.tagName); 
        }
}


/**funcion para crear un nuevo articulo, a raiz del padre, pasas padre y url */
function crearArticuloNuevo(padre, src) {
    let nuevoArticulo = document.createElement('article');
    let divnuevo = document.createElement('div');
    let nuevoh2 = document.createElement('h2');
    let nuevoparrafo = document.createElement('p');
    let nuevaimg = document.createElement('img');
    
    nuevaimg.src = src;

    nuevoArticulo.appendChild(divnuevo);
    divnuevo.appendChild(nuevoh2);
    divnuevo.appendChild(nuevoparrafo);
    divnuevo.appendChild(nuevaimg);

    padre.appendChild(nuevoArticulo);
}


/**ahora lo mismo que antes pero con un arr */
(() => {
    const padreSection = document.querySelector('section:last-of-type');

    const articulos = [
        {
            titulo: 'Artículo 1',
            contenido: 'Contenido del artículo 1',
            url: 'https://picsum.photos/200/300'
        },
        {
            titulo: 'Artículo 2',
            contenido: 'Contenido del artículo 2',
            url: 'https://picsum.photos/200/300'
        },
        {
            titulo: 'Artículo 3',
            contenido: 'Contenido del artículo 3',
            url: 'https://picsum.photos/200/300'
        }
    ];

    function subirListaDeArticulos(padre,lista) {
        const fragment = document.createDocumentFragment();
        
        //recorro todos los elemetnos de nuestra "DB"
        lista.forEach((article, articleIdx) => {
            const articulo = createArticle(article, articleIdx);
            fragment.appendChild(articulo);
        });

        padre.appendChild(fragment);
    }

    function createArticle(article, articleIdx) {
        const { titulo, contenido, url } = article;

        const articulo = document.createElement('ARTICLE');
        const div = document.createElement('DIV');
        const p = document.createElement('P');
        const h2 = document.createElement('H2');
        const img = document.createElement('IMG');

        img.src = url;
        h2.textContent = titulo;
        p.textContent = contenido;

        div.appendChild(h2);
        div.appendChild(p);

        //si es par o impar lo pongo a la izquierda o derecha la imagen
        if (articleIdx % 2 === 0) {
            articulo.appendChild(img);
            articulo.appendChild(div);
        } else {
            articulo.appendChild(div);
            articulo.appendChild(img);
        }

        return articulo;
    }

    subirListaDeArticulos(padreSection,articulos);
})();
