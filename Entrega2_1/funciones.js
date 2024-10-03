// Ejercicio1 
function diasnavidad () {
    const hoy = new Date();

    // PONGO 11 PORQUE EL TIPO DATE VA DESDE EL 0 AL 11 SIENDO EL 0 ENERO Y EL 11 EL DICIEMBRE
    const diciembre = new Date('2024-12-19');

    const diastotales = diciembre.getTime() - hoy.getTime();

    document.write( " quedan :" + Math.round(diastotales/(1000*60*60*24)));

}

// Ejercicio2 
function cumple() {
    // Pedimos la fecha de nacimiento al usuario
    const fcumple = new Date(prompt("Introduce tu fecha de nacimiento como YYYY-MM-DD"));

    //  día y mes del cumpleaños
    const mesCumple = fcumple.getMonth(); // mes
    const diaCumple = fcumple.getDate(); // día

    // año de nacimiento 
    let anio = fcumple.getFullYear();

    for (let i = anio; i <= 2100; i++) {
        // Creamos una nueva fecha con el año actual del bucle, pero con el mismo mes y día
        let cumpleActual = new Date(i, mesCumple, diaCumple);
    
        // Verificamos si ese año el cumpleaños cae en domingo (0 es domingo)
        if (cumpleActual.getDay() === 0) {
            console.log("Tu cumpleaños cae en domingo en el año: " + i);
    

        }
    }
}


//ejercicio4
function pedirNombre() {
    const econtador = new Date();

    // Pedimos al usuario que ingrese su nombre y apellidos
    const nombre = prompt("Introduce tu nombre:");
    const apellido1 = prompt("Introduce tu primer apellido:");
    const apellido2 = prompt("Introduce tu segundo apellido:");

    const fcontador = new Date();

    const tiempoTotal = Math.round((fcontador - econtador)/60);

    const nombreCompleto = nombre + apellido1 + apellido2;
    alert(" el nombre completo es   " + nombreCompleto + " k has tardao " + tiempoTotal);
}


// ejercicio 5
function opcionesMatematicas() {
    // Pedimos al usuario que elija una opción
    const opcion = prompt("Elige una opción:\n1. Potencia\n2. Raíz cuadrada\n3. Redondeo\n4. Valores trigonométricos");

    // Variable para mostrar el resultado
    let resultado = "";

    switch (opcion) {
        case '1':
            //  Potencia
            const base = prompt("Introduce la base:");
            const exponente = prompt("Introduce el exponente:");
            const potencia = Math.pow(base, exponente);
           alert( resultado = "la potencia de " + base + "elevado a " + exponente + "es " + potencia);
            break;

        case '2':
            //  Raíz cuadrada
            const numeroRaiz = prompt("Introduce un número (no negativo):");
            if (numeroRaiz < 0) {
               alert( resultado = "No se puede ");
            } else {
                const raiz = Math.sqrt(numeroRaiz);
                alert (resultado = "la raiz del numero es " + raiz);
            }
            break;

        case '3':
            //  Redondeo
            const numeroDecimal = prompt("Introduce un número decimal:");
            const redondeoCercano = Math.round(numeroDecimal);
            const redondeoAlAlza = Math.ceil(numeroDecimal);
            const redondeoABaja = Math.floor(numeroDecimal);
            alert(resultado = " el mas cercano es "+ redondeoCercano + " el que es al alza es " + redondeoAlAlza + " y el de abajo es " + redondeoABaja);
            break;

        case '4':
            // Valores trigonométricos
            const angulo = parseFloat(prompt("Introduce un ángulo entre 0º y 360º:"));
            if (angulo < 0 || angulo > 360) {
                resultado = "El ángulo debe estar entre 0 y 360 grados.";
            } else {
               
            }
            break;

      
    }

   
}


// ejercicio 6
function procesarNombreApellidos() {
    // Pedimos al usuario que ingrese su nombre y apellidos
    const nombre = prompt("Introduce tu nombre:");
    const apellido1 = prompt("Introduce tu primer apellido:");
    const apellido2 = prompt("Introduce tu segundo apellido:");

    // Concatenamos nombre y apellidos
    const nombreCompleto = nombre + " " + apellido1 + " " + apellido2;

    // 1. El tamaño del nombre más los apellidos
    const tamano = nombreCompleto.length;
    console.log("El tamaño del nombre completo es: " + tamano + " caracteres.");

    //La cadena en minúsculas y en mayúsculas
    console.log("En minúsculas: " + nombreCompleto.toLowerCase());
    console.log("En mayúsculas: " + nombreCompleto.toUpperCase());

    // Mostramos el nombre y los apellidos por separado en tres líneas
    console.log("Nombre: " + nombre);
    console.log("Apellido 1: " + apellido1);
    console.log("Apellido 2: " + apellido2);
}

// ejerciiciio 7 
function encontrarMayor() {
    const num1 = prompt("Introduce el primer número:");
    const num2 = prompt("Introduce el segundo número:");
    const num3 = prompt("Introduce el tercer número:");

    let mayor;
    
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }
    alert("el mayor de todos es " + mayot)
}

// ejerc8
function contarletra() {
    const frase = prompt("Introduce una frase:");

    // Inicializamos el contador
    let contador = 0;

    // Recorremos la frase y contamos cuántas veces aparece la letra "a" (mayúscula o minúscula)
    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    alert("la letra a aparece " + contador); 
}

// ejer9 
function invertirTexto() {
    const texto = prompt("Introduce una cadena de texto:");

    let textoInvertido = "";

    // Usamos un bucle for para recorrer la cadena al revés
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    alert(textoInvertido);

}

