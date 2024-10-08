function ageCalculator(fnacimiento) {
    // para poder obtener el año actual 
    let a= new Date();
    let factual = a.getFullYear();

    let edad = (factual - fnacimiento);
    let poribleedad = edad;
    let posibleedad1 = edad - 1;
   // return edad;
    return (" o tienes " + poribleedad  + " o tienes " + posibleedad1);
    
}

function supplyCalculator() {
    let edadactual=20;
    let edadmaxima = 80;
    let cantidadpordia = 3;

    let aniosquedan = edadmaxima - edadactual; 
    let cantidadtotal = aniosquedan * cantidadpordia;
    
    return ("te quedan " + aniosquedan + " y te vas a comer en esos años " + cantidadtotal);

}
 
function convertTemperature() {
    let valorcelsius = prompt("dime una temperatura en celsius y te la paso a fahrenheit ");
    let fahrenheit = (valorcelsius * 9 / 5) + 32;
    document.write(valorcelsius + "C son " + fahrenheit+ " f")

    let varlofahrenheit = prompt("dime una temperatura en fahrenheit  y te la paso a celsius");
    let celsius = (varlofahrenheit - 32) * 5 / 9;
    document.write(varlofahrenheit + "f " + celsius + " c");
    
}