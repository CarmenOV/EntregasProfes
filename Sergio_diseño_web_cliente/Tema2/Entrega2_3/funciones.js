// ejercicio 2
/* 
*2. Definir una función que muestre información sobre una cadena de texto que se le
*pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa
*cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de
*ambas.
*/
function cadena2() {
    
    // Solicitar la cadena al usuario
    var cadena = prompt("Introduce una cadena de texto:");

    // Comprobar la cadena y generar el resultado
    var resultado = '';

    if (cadena === cadena.toUpperCase()) {
        resultado = "La cadena está formada solo por mayúsculas.";
    } else if (cadena === cadena.toLowerCase()) {
        resultado = "La cadena está formada solo por minúsculas.";
    } else {
        resultado = "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
    }

    // Mostrar el resultado en un alert
    alert(resultado);
}

// ejercicio 3
/**
 * Realizar un función que permita localizar todas las apariciones de una subcadena
*dentro de otra.
 */
function ejer3() {
    var cadena = prompt("Introduce la cadena principal:");
    var subcadena = prompt("Introduce la subcadena a buscar:");

    var indices = []; // Array para almacenar los índices
    var index = 0;    // Índice inicial para la búsqueda

    // Buscar la subcadena en la cadena principal
    for (var index = 0; index < cadena.length; index++) {
        if (cadena(index, subcadena.length) === subcadena) {
            // Agregar el índice al resultado
            resultado += index + " ";
        }
    }


    // Mostrar el resultado
    if (indices.length > 0) {
        alert("La subcadena '" + subcadena + "' aparece en los índices: ");
    } else {
        alert("La subcadena '" + subcadena + "' no se encontró en la cadena principal.");
    }

}

// ejercicio 4
/**
 * Crea una función que tomando una cadena de texto como entrada coloque todas sus
 * consonantes al principio y todas sus vocales al final de la misma, eliminando los blancos
 */

function ejer4() {
     // Solicitar al usuario la cadena de texto
     var cadena = prompt("Introduce una cadena de texto:");
            
     // Inicializar las variables para consonantes y vocales
     var consonantes = "";
     var vocales = "";
     
     // Definir las vocales
     var vocalesList = "aeiouAEIOU";

     // Recorrer cada carácter de la cadena
     for (var i = 0; i < cadena.length; i++) {
         var char = cadena[i];

         // Verificar si el carácter es un espacio
         if (char === " ") {
             continue; // Saltar los espacios en blanco
         }

         // Verificar si el carácter es una vocal o consonante
         if (vocalesList.includes(char)) {
             vocales += char; // Agregar a vocales
         } else {
             consonantes += char; // Agregar a consonantes
         }
     }

     // Concatenar consonantes y vocales
     var resultado = consonantes + vocales;

     // Mostrar el resultado
     alert("Cadena reorganizada: " + resultado);
}

// ejercicio 5
/**
 * Desarrolla una función que elimine los caracteres repetidos de una cadena de
 * texto, incluidos los blancos.

 */
function ejer5() {
    // Solicitar al usuario la cadena de texto
    var cadena = prompt("Introduce una cadena de texto:");

    // Inicializar un conjunto para almacenar caracteres únicos
    var caracteresUnicos = "";

    // Recorrer cada carácter de la cadena
    for (var i = 0; i < cadena.length; i++) {
        var char = cadena[i];

        // Si el carácter no está ya en caracteresUnicos, añadirlo
        if (caracteresUnicos.indexOf(char) === -1) {
            caracteresUnicos += char;
        }
    }

    // Mostrar el resultado
    alert("Cadena sin caracteres repetidos: " + caracteresUnicos);
}

//ejercicio 6
/**
 * Implementa una función que tomando dos cadenas como entrada nos diga si la
 * segunda es una subcadena de la primera y cuál es la primera posición a partir de la que
 * esto ocurre.
 */

function ejercico6() {
    // Solicitar al usuario la primera y la segunda cadena
    var cadenaPrincipal = prompt("Introduce la cadena principal:");
    var subcadena = prompt("Introduce la subcadena a buscar:");

    // Encontrar la posición de la subcadena en la cadena principal
    var posicion = cadenaPrincipal.indexOf(subcadena);

    // Verificar si la subcadena fue encontrada
    if (posicion !== -1) {
        alert("La subcadena '" + subcadena + "' es una subcadena de '" + cadenaPrincipal + "' y comienza en la posición: " + posicion);
    } else {
        alert("La subcadena '" + subcadena + "' no es una subcadena de '" + cadenaPrincipal + "'.");
    }

}

//ejercicio 7
/**
 * Desarrolla una función que tomando como entrada una cadena de texto nos
 * devuelva si es o no un palíndromo.
 */
function ejer7() {
     // Solicitar al usuario la cadena de texto
     var cadena = prompt("Introduce una cadena de texto:");

     // Eliminar espacios en blanco y convertir a minúsculas
     var cadenaLimpia = cadena.replace(/\s+/g, '').toLowerCase();

     // Invertir la cadena limpia
     var cadenaInvertida = cadenaLimpia.split('').reverse().join('');

     // Comparar la cadena limpia con la cadena invertida
     if (cadenaLimpia === cadenaInvertida) {
         alert("La cadena '" + cadena + "' es un palíndromo.");
     } else {
         alert("La cadena '" + cadena + "' no es un palíndromo.");
     }
}