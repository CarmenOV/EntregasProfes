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

    const fcumple = new Date(prompt("introduce tu fecha de nacimiento como YYYY-MM-DD"));
    console.log("tu cumpleaños es " + fcumple);

    let dcumple = fcumple.getDay();
    console.log("el getday es " + dcumple);

    let fcumpleanio = fcumple.getFullYear();
    console.log("el año solo es " + fcumpleanio);
 
    for (fcumpleanio; fcumpleanio <= 2100; fcumpleanio++){
        if (dcumple === 0) {
            console.log("es")
        }
    }
    if (dcumple != 0) {
        console.log ("no cae en domingo");
    }

  


}



