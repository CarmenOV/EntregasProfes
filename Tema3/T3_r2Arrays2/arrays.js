/**EJERCICIO 1
 * 
 * Diseña una web que cree un Array llamado clase que contenga información de una clase.
 * Cada elemento del array debe ser una tupla de 4 campos: nombre, edad, nota primer
 * trimestre, nota segundo trimestre y nota tercer trimestre (todos separados por comas). 
 * Porejemplo: clase[0] = “Angel Garcia, 20, 6, 7, 10”
 */

function ejercicio1() {
    var clase = [
        ["Angel Garcia", 20, 6, 7, 10],
        ["Carmen Ortega Vazquez ", 19, 8, 9, 7],
        ["Adolfo Sanchez ", 21, 10, 10, 10],
        ["Erik tortaroad", 18, 8, 9, 7],
        ["bego", 20, 6, 7, 10]
    ];

    console.log(clase);
    console.log(clase[4]);

}


/**EJERCICIO 2
 * Escribe una función que dado un número de estudiante y un trimestre, devuelva su nota.
 * Sobreescribe esa función de tal modo que si no se indica el trimestre se devuelva la nota
 * media de los exámenes.
 */

function ejercicio2(estudiante, trimestre) {
    var clase = [
        ["Angel Garcia", 20, 6, 7, 10],
        ["Carmen Ortega Vazquez ", 19, 8, 9, 7],
        ["Adolfo Sanchez ", 21, 10, 10, 10],
        ["Erik tortaroad", 18, 8, 9, 7],
        ["bego", 20, 6, 7, 10]
    ];

    if (trimestre === undefined) {   
        var media = (clase[estudiante][2] + clase[estudiante][3] + clase[estudiante][4]) / 3;
        return media;
    } else {
        return clase[estudiante][trimestre];
    }   
}


/**EJERCICIO 3
 * Escribe una función que devuelva la edad media de los alumnos de la clase.
 */

function ejercicio3() {
    var clase = [
        ["Angel Garcia", 28, 6, 7, 10],
        ["Carmen Ortega Vazquez ", 19, 8, 9, 7],
        ["Adolfo Sanchez ", 21, 10, 10, 10],    
        ["Erik tortaroad", 34, 8, 9, 7],
        ["bego", 29, 6, 7, 10]    
    ];

    var media = (clase[0][1] + clase[1][1] + clase[2][1] + clase[3][1] + clase[4][1]) / 5;
    return media;
    
}

/**EJERCICIO 4
 * . A veces para elegir un estudiante al que preguntar en clase necesitamos hacerlo al azar.
 * Escribe una función que aleatoriamente vaya devolviendo el nombre de un estudiante cada
 * vez.
 */

function ejercicio4() {
    var clase = [
        ["Angel Garcia", 28, 6, 7, 10], 
        ["Carmen Ortega Vazquez ", 19, 8, 9, 7],    
        ["Adolfo Sanchez ", 21, 10, 10, 10],    
        ["Erik tortaroad", 34, 8, 9, 7],
        ["bego", 29, 6, 7, 10]    
    ];

    var aleatorio = Math.floor(Math.random() * 5);
    return clase[aleatorio][0];
}

/**EJERCICIO 5
 * Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1al 1000. 
 * Una vez creado, mostrar el contenido y después organizarlo de forma que estén
 * juntos los elementos pares y los impares. Después, volver a mostrar el array
 */

function ejercicio5() {
    var paresImpares = [];
    for (let i = 0; i < 100; i++) {
        paresImpares[i] = Math.floor(Math.random() * 1000);
    }
    console.log(paresImpares);
    paresImpares.sort();
    console.log(paresImpares);
}


/**EJERCICIO 6
 * Utiliza Arrays para resolver el siguiente problema: Una empresa paga a sus vendedores en
 * base a comisiones. Los vendedores reciben $ 200 por semana, más el 9% de sus ventas
 * brutas de esa semana. Por ejemplo, un vendedor que gana en total $ 5000 en ventas en una
 * semana recibe $ 200 más el 9 por ciento de $ 5000, o sea un total de $ 650.
 * Diseña una web que permita dar de alta a vendedores, introducir sus ventas e indique cual
 * sería su sueldo final.

 */
function ejercicio6(vendedorI, ventas) {
    const vendedores = [
        { nombre: "Angel Garcia" },
        { nombre: "Carmen Ortega Vazquez" },
        { nombre: "Adolfo Sanchez" },
        { nombre: "Erik Tortaroad" },
        { nombre: "Bego" }
    ];

    // Obtener el vendedor sin verificar el índice
    const vendedor = vendedores[vendedorI];

    // Calcular el sueldo
    const sueldoBase = 200;
    const comision = ventas * 0.09;
    const sueldoFinal = sueldoBase + comision;

    // Mostrar los resultados en la consola
    console.log(`Vendedor: ${vendedor.nombre}`);
    console.log(`Ventas Semanales: $${ventas}`);
    console.log(`Comisión: $${comision.toFixed(2)}`);
    //REDONFDEA A 2 DECEUIAES
    console.log(`Sueldo Total: $${sueldoFinal.toFixed(2)}`);
}


/**EJERCICIO 7
 * Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios
 */

function ejercicio7() {
    var array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = 0;
    }
    console.log(array);
    for (let i = 0; i < 10; i++) {
        array[i] = array[i] + 1;
    }
    console.log(array);
    for (let i = 0; i < 10; i++) {
        console.log(array[i]);
    }
}


/**
 * EJERCICIO 8
 * Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
 * dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
 * dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
 * valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
 * lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.
 */

function ejercicio8() {
    var array = [];
    for (let i = 0; i < 36000; i++) {
        var dado1 = Math.floor(Math.random() * 6) + 1;
        var dado2 = Math.floor(Math.random() * 6) + 1;
        var suma = dado1 + dado2;
        array[suma] = array[suma] + 1;
    }
    console.log(array);
}

