// Función de suma transformada a función flecha
const sum = (num1, num2) => num1 + num2;

console.log("La suma de 40 y 2 es:", sum(40, 2)); 
console.log("La suma de 42 y 0 es:", sum(42, 0)); 






// Función para obtener la longitud de una cadena transformada a función flecha
const stringLength = (str) => {
    console.log(`La longitud de "${str}" es:`, str.length);
    return str.length;
};

// Demostración de uso de la función stringLength
let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";
stringLength(longestCityNameInTheWorld);
stringLength("willynilly");

// Array de alertas
let alerts = [
    "Hey, you are awesome",
    "You are so wonderful",
    "What a marvel you are",
    "You're so lovely",
    "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"
];

// Función para mostrar una alerta transformada a función flecha
const showAlert = (name) => {
    alert(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
};

// Demostración de uso de la función showAlert
showAlert("you ball of fluff");





        const introduce = (name, age) => `Hello, I am ${name}, and I am ${age} years old.`;

        // Llamadas de ejemplo
        console.log(introduce("Alice", 30)); // Muestra: Hello, I am Alice, and I am 30 years old.
        console.log(introduce("Bob", 25));   // Muestra: Hello, I am Bob, and I am 25 years old.
    