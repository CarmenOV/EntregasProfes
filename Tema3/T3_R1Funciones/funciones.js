// ejercicio1
/**1. Define una función máximo que dados 4 valores devuelva el máximo de ellos.
 * Llámala con un ejemplo pidiendo los 4 valores al usuario.
*/
    function valoresMaximos() {
        var valor1 = prompt("Introduce el primer valor");
        var valor2 = prompt("Introduce el segundo valor");
        var valor3 = prompt("Introduce el tercer valor");
        var valor4 = prompt("Introduce el cuarto valor");
        var maximo = Math.max(valor1, valor2, valor3, valor4);
        alert("El valor maximo es " + maximo);
    }

// ejercicio2
/**
 * 2. Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
 * define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6. 
 */
    function lanzamiento() {
        var resultado = Math.floor(Math.random() * 6)+1;
        alert("Has sacado un " + resultado);
    }


// ejercicio3
/**
 * 3. Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
 * modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
 * de ocurrencias de cada uno de los valores.
 */
function lanzamiento2() {
    var ocurrencias = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 6000; i++) {
        var resultado = Math.floor(Math.random() * 6) + 1;
        document.write("Has sacado un " + resultado + "<br> <br>");
        ocurrencias[resultado - 1]++; 
        
    }
    for (var j = 0; j < ocurrencias.length; j++) {
        document.write("Número " + (j + 1) + " ocurrió " + ocurrencias[j] + " veces." + " <br>");
    }
}
 

// ejercicio4
/**
 * Crea una web para calcular el volumen de una esfera. Para ello diseña una función
 * que dado el radio de ésta devuelva el volumen.
 */
function volumenEsfera() {
    var radio = prompt("Introduce el radio de la esfera");
    var volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
    alert("El volumen de la esfera es " + volumen);
    
}

// ejercicio 5
/**
 * 5. Mejora el ejercicio anterior permitiendo calcular también el área de un circulo.
 */
function volumenYarea() {

    var radio = prompt("Introduce el radio de la esfera");
    var circulo = prompt("introduce el radio para calcular el area del circulo");
            
    var volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
    alert("El volumen de la esfera es " + volumen);
    
    var circulo2= Math.PI * Math.pow(circulo, 2);
    alert("El area del circulo es " + circulo2);  
}

// ejercicio 6
/**6. Crea una función para calcular potencias de un modo recursivo. */
function calcupotencias() {
    let base = prompt("dame la base para calcular la potencia");
    let exponente = prompt("dame un numero para que sea el exponente");
    let potencia = Math.pow(base, exponente -1);
    let resultado = base * potencia;
    alert(resultado);
 }


// ejercicio 7
/**
 * Crea una función que calcule el factorial de un número dado. Para comprobarlo,
 * diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10.
 */
function factorial() {
    let numero = prompt("dame un numero para calcular su factorial");
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    alert(factorial);
}
    
   

    
   
