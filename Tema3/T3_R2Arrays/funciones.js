// ejercicio1
/**Realiza un script que solicite 5 números al usuario, almacenaremos estos números en un array y
 * posteriormente ofreceremos la siguiente información:
 * Valor mínimo
 * Valor máximo
 * Valor medio. */
function valores() {
    let num1 =parseInt(prompt("Introduce el cuarto número"));
    let num2 = parseInt(prompt("Introduce el cuarto número"));
    let num3 = parseInt(prompt("Introduce el cuarto número"));
    let  num4 = parseInt(prompt("Introduce el cuarto número"));
    let num5 = parseInt(prompt("Introduce el cuarto número"));

    const numeros = [num1, num2, num3, num4, num5];
    let total = num1+ num2+num3+num4+num5;

    maximo = Math.max(...numeros);
    minimo = Math.min(...numeros);
    media = total / 5;
    document.write("el valor maximo es:  " + maximo + " el valor minimo es : " + minimo + " el valor media es :  " + media); 
}

// ejercicio2
/**
 * Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un
 * color introducido por el usuario a través de un prompt se encuentra dentro del array o no
 */
function color() {
    let color = prompt("Introduce un color");
    let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
    if (colores.includes(color)) {
        document.write("si esta");
    } else {
        document.write("no esta");
    }
}

// ejercicio3
/*
*Crear un array vacío, luego generar 20 números al azar (utiliza random del objeto Math ) y
*guardarlos en un array, N es introducido por el usuario
*/
function arrayvacio() {
    let array = [];
    for (let i = 0; i < 20; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    document.write(array);
    
}

// ejercicio4
/**Existen dos arrays, cada uno con 5 palabras, generar los siguientes array:
 * Intersección
 * Unión
 * Diferencia
 */
function datosprimitivosmates() {
    const primeraarray = [hola, rojo, amarillo, adios , azul, very ];
    const segundaarray = [hola, rojo, verde, good, azul, marron];
    
    const interseccion = [...primeraarray, ...segundaarray];
    const union = [...primeraarray, ...segundaarray];
    const diferencia = [...primeraarray, ...segundaarray];
   alert("interseccion " + interseccion + " union " + union + " diferencia " + diferencia);
}


// EJERCICIO 7
/**
 * Utilizando el método random del objeto Math carga con valores aleatorios un array de 20
 * lementos con valores enteros entre el 0 y el 100. Muestra los valores sin ordenar y ordenados
 * (eliminando duplicados), para ello deberás implementar alguno de los algoritmos de ordenación,
 * se recomienda el burbuja por su fácil implementación.
 */
function arrayaleatorios() {
    let arrayaleatorios = [];
    for (let i = 0; i < 20; i++) {
        arrayaleatorios.push(Math.floor(Math.random() * 100));
    }
    document.write("array aleatorio" + arrayaleatorios) + "<br>";

    arrayaleatorios.sort();
    document.write("array ordenado" + arrayaleatorios) + "<br>";
    
   
}