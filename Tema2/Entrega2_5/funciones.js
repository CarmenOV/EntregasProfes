// ejercicio 1 T3_ej12.html
/**
 * Escribe un programa en el que se solicite al usuario que escriba un título para una
 * página. A continuación se abrirá una nueva ventana de 400 píxeles de alto por 500
 * píxeles de ancho, en la que se podrá leer el título ingresado por el usuario.
 *  La nueva ventana ha de visualizarse arriba y a la derecha de la pantalla del
 * usuario.
 *  La ventana principal ha de contener un botón cerrar ventana, que permita
 * cerrar la ventana secundaria.

 */

    let nuevaVentana;

// Función para abrir o cerrar la ventana
function gestionarVentana(accion) {
    if (accion === 'abrir') {
        // Obtener el título ingresado por el usuario
        const titulo = document.getElementById('titulo').value;
        nuevaVentana = window.open("", "nuevaVentana", "width=400,height=300");


        // Escribir el título en la nueva ventana
        nuevaVentana.document.write(`
            <html>
            <head>
                <title>${titulo}</title>
            </head>
            <body>
                <h1>${titulo}</h1>
            </body>
            </html>
        `);
    } else if (accion === 'cerrar') {
        // Cerrar la ventana si está abierta
        if (nuevaVentana && !nuevaVentana.closed) {
            nuevaVentana.close();
        }
    }
}

// ejercicio 2 
/**
 * Escribe un programa que tenga un botón abrir ventana. Al pulsar sobre el botón ha de
 * aparecer una nueva ventana secundaria.
 *  La ventana secundaria ha de contener un botón cerrar ventana, que permita
 * cerrarse a sí misma.
 *  La ventana principal también tendrá un botón cerrar ventana secundaria, para
 * poder cerrar la ventana secundaria.
 */
let ventanaSecundaria; // Variable para almacenar la referencia de la ventana secundaria

// Función para abrir o cerrar la ventana secundaria
function gestionarVentana(accion) {
    if (accion === 'abrir') {
        // Abrir la ventana secundaria
        ventanaSecundaria = window.open("", "ventanaSecundaria", "width=400,height=300");

        // Escribir contenido en la ventana secundaria
        ventanaSecundaria.document.write(`
            <html>
            <head>
                <title>Ventana Secundaria</title>
            </head>
            <body>
                <h1>Esta es la Ventana Secundaria</h1>
                <button onclick="window.close()">Cerrar Ventana</button>
            </body>
            </html>
        `);
    } else if (accion === 'cerrar') {
        // Cerrar la ventana secundaria si está abierta
        if (ventanaSecundaria && !ventanaSecundaria.closed) {
            ventanaSecundaria.close();
        }
    }
}

// ejercicio 3
 /**
  *Crea una nueva página que contenga el texto Haz clic aquí.
   Cuando el usuario haga clic sobre alguna parte del texto se han de generar
  cinco ventanas emergentes de Google, de tamaño 350x350px.
   En cada ventana aparecerá el texto ventana 1, ventana 2… ventana 5.
   Cada ventana tendrá un botón Cerrar que permita cerrarla. 
  */
// Función para generar las ventanas emergentes
function iniciarGeneradorDeAlertas() {
    const button = document.getElementById("generateButton");
    
    button.onclick = function() {
        for (let i = 1; i <= 5; i++) {
            alert(`Ventana ${i}`);
        }
    };
}