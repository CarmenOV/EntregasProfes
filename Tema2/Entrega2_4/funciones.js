    // ejercicio1
    /*
    Ejercicio1 1. Crea una p gina en la que se muestre: á
        • Un n mero aleatorio entre 0 y 1. ú
        • Igual pero entre 100 y 200.
        • Pide dos valores al usuario y genera un n aleatorio entre esos dos º
        valores
    */
    function aleatorionumero() {

        var numero = Math.random() * 10;
        alert(" este numero puede tener decimales" + numero);

        var numerosindecimales = Math.floor(Math.random() * 10);
        alert(" numero sin decimales" + numerosindecimales);


        var numeromediano = Math.floor(Math.random() * (200 - 100));
        alert(" el numero entre 100  y 200 " + numeromediano);


        var numeroUsuario = prompt("dame primer numero");
        var numeroUsuario2 = prompt("dame otro numero ");
        var numerousuariototal = Math.floor(Math.random() * (numeroUsuario - numeroUsuario2));
        alert(" el numero que esta entre " + numeroUsuario + " y " + numeroUsuario2 + " es  " + numerousuariototal)

    }

    // ejercicio 2
    /*       
    *En un nueva pagina web, pide al usuario un angulo y calcula su seno, á á
    *coseno y tangente.
    */
    function calculo() {
        var angulo = prompt("Dame un angulo para calcular el seno y el coseno, tangente");

        //calculo el seno
        alert(Math.sin(angulo * Math.PI / 180));

        // calculo el coseno
        alert(Math.cos(angulo * Math.PI / 180));

        var radio = angulo * Math.PI / 180;
        alert(radio);



    }

    // ejercicio 3  
    /*
    *Ejercicio 3 Crea una web que e calcula la hipotenusa de un triangulo rectangulo
    *(pidiendo al usuario el tama o de los dos catetos).
    */
    function hipotenusa() {
        var cateto1 = prompt("Dime el primer cateto");
        var cateto2 = prompt(" dime el segundo cateto");

        var sumacatetos = (cateto1 * cateto1) + (cateto2 * cateto2);
        alert("La suma de los catetos al cuadrado es " + sumacatetos);

        var hipotenusa = Math.sqrt(sumacatetos);
        alert(" la hipotenusa es  : " + hipotenusa);


    }

    // ejercicio 4
    /*
    *4. Mejora el ejercicio anterior para que contin e realizando el mismo c lculo ú á
    *hasta que el usuario decida que no quiere continuar.
    */

function mejorarhipotenusa() {
    
        var continuar = true;
        
        while (continuar) {
            var cateto1 = prompt("Dime el primer cateto");
            var cateto2 = prompt("Dime el segundo cateto");
    
            var sumacatetos = (cateto1 * cateto1) + (cateto2 * cateto2);
            var hipotenusa = Math.sqrt(sumacatetos);
            
            alert("La hipotenusa es: " + hipotenusa);
    
            continuar = confirm("¿Quieres calcular otra hipotenusa?");
        }
    }
 

    // ejercicio 6
    /*
    *6. Crea una web que calcule potencias.
    */
    function calcupotencias() {
        let base = prompt("dame la base para calcular la potencia");
        let exponente = prompt("dame un numero para que sea el exponente");
        let potencia = Math.pow(base, exponente);
        alert("la base es " + base + " y el exponente es " + exponente + " por tanto la potencia es " + potencia);
       
    }
        

        
    // ejercicio 8
    /*
    *8. Crea una web en la que cada vez que se accede se muestre una imagen
    *(de modo aleatorio) de entre 3 posibles.
    */
function fotosmostrar() {
    var imagenes = [
        '1366_2000.jpg',
        'images.png',
        'sol-23313.jpg'
    ];

    // Seleccionar una imagen aleatoria
    var indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    var imagenSeleccionada = imagenes[indiceAleatorio];
    // Cambiar la fuente de la imagen en el HTML
    var img = document.getElementById("imagen-aleatoria");
    img.src = imagenSeleccionada;
   }