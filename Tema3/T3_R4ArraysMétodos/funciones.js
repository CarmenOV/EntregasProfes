
// encontrar el número más grande

function encontrarNumeroMasGrande() {
    var numeros = [3, 5, 7, 1, 9, 8, 2, 4, 6];
    var maximo = Math.max(...numeros);
    document.write("el valor maximo es:  " + maximo);
}
//encontrar la cadena más larga

function encontrarCadenaMasLarga() {
    var cadena = "hola mundo";
    var palabras = cadena.split(" ");
    var palabraMasLarga = palabras[0];
    for (var i = 1; i < palabras.length; i++) {
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }
    document.write("la cadena mas larga es:  " + palabraMasLarga);
}


//• encontrar números pares

function encontrarNumerosPares() {
    var numeros = [3, 5, 7, 1, 9, 8, 2, 4, 6];
    var pares = [];
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }
    document.write("los numeros pares son:  " + pares);
}


//encontrar números impares

function encontrarNumerosImpares() {
    var numeros = [3, 5, 7, 1, 9, 8, 2, 4, 6];
    var impares = [];
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            impares.push(numeros[i]);
        }
    }
    document.write("los numeros impares son:  " + impares);
}

// • buscar palabras que contengan "es"

function encontrarCadenasQueContenganEs() {
    var cadena = "hola mundo esplicame como es la escavadora de escolastico";
    var palabras = cadena.split(" ");
    var cadenasQueContenganEs = [];
    for (var i = 0; i < palabras.length; i++) {
        if (palabras[i].includes("es")) {
            cadenasQueContenganEs.push(palabras[i]);
        }
    }
    document.write("las cadenas que contienen es son:  " + cadenasQueContenganEs);
}


//• afirmar que todos los números son divisibles por tres

function todosLosNumerosSonDivisiblesPorTres() {
    var numeros = [3, 5, 7, 1, 9, 8, 2, 4, 6];
    var divisiblesPorTres = true;
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 3 !== 0) {
            divisiblesPorTres = false;
            break;
        }
    }    
    if (divisiblesPorTres) {
        document.write("todos los numeros son divisibles por 3");
    } else {
        document.write("no todos los numeros son divisibles por 3");
    }
}


// • comprime dos matrices juntas

function comprimirDosMatricesJuntas() {
    var matriz1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    var matriz2 = [[10, 11, 12], [13, 14, 15], [16, 17, 18]];
    var matrizComprimida = [];
    for (var i = 0; i < 3; i++) {
        var nuevaFila = [];
        for (var j = 0; j < 3; j++) {
            nuevaFila.push(matriz1[i][j], matriz2[i][j]);
        }
        matrizComprimida.push(nuevaFila);
    }
    document.write("la matriz comprimida es:  " + matrizComprimida);
}


// • ordenar la matriz unida de menor a mayor

function ordenarMatrizUnidaDeMenorAMayor() {
    var matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    var matrizUnida = [];
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            matrizUnida.push(matriz[i][j]);
        }
    }
    matrizUnida.sort(function(a, b) {
        return a - b;
    });
    document.write("la matriz unida de menor a mayor es:  " + matrizUnida);
}


// • eliminar la primera palabra de la matriz

function eliminarPrimeraPalabra() {
    var matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    var nuevaMatriz = [];
    for (var i = 0; i < 3; i++) {
        nuevaMatriz.push(matriz[i][1]);
    }
    document.write("la nueva matriz es:  " + nuevaMatriz);
}

//• colocar una nueva palabra al comienzo de la matriz

function colocarNuevaPalabraAlComienzo() {
    var matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    var nuevaMatriz = [[], [], []];
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            nuevaMatriz[j].push(matriz[i][j]);
        }
    }
    document.write("la nueva matriz es:  " + nuevaMatriz);
}