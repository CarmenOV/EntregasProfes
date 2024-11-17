//  enlaces de la página
const enlaces = document.querySelectorAll('a');
console.log(`Número de enlaces de la página: ${enlaces.length}`);

// Mostramos la direccióndel  penúltimo enlace
const penultimoEnlace = enlaces.slice(-2, -1)[0];
console.log(`Dirección a la que enlaza el penúltimo enlace: ${penultimoEnlace.href}`);



//  Google
let enlacesAGoogle = 0;
for (const enlace of enlaces) {
  if (enlace.href.includes('google.com')) {
    enlacesAGoogle++;
  }
}
console.log(`Número de enlaces que enlazan a Google: ${enlacesAGoogle}`);


// Numero de enlaces del tercer parrafo
const tercerParrafo = document.getElementsByTagName('p')[2];
