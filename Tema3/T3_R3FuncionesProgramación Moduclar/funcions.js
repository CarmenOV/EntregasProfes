// 1. Filtra los números de un array que son mayores a un número específico
function filterNumbersGreaterThan(numbers, filter) {
    return numbers.filter(number => number > filter);   

}
function filterNumbersExample() {
    const result = filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7);
    document.getElementById("filterResult").innerText = `Resultado: [${result}]`;
}



// 4. Aplana un array 2D
function flatArray(arr) {
    return arr.flat();
}

// Ejemplo para aplanar un array
function flatArrayExample() {
    const result = flatArray([[1, 5, 4], [3, 10], [2, 5]]);
    document.getElementById("flatArrayResult").innerText = `Resultado: [${result}]`;
}

// 5. Remueve duplicados de un array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Ejemplo para remover duplicados
function removeDuplicatesExample() {
    const result = removeDuplicates([4, 5, 10, 4, 10, 2]);
    document.getElementById("removeDuplicatesResult").innerText = `Resultado: [${result}]`;
}

// 6. Cuenta la cantidad de veces que una letra aparece en un string
function countLetter(letter, text) {
    return text.split('').filter(char => char === letter).length;
}

// Ejemplo para contar letras
function countLetterExample() {
    const result = countLetter("a", "javascript");
    document.getElementById("countLetterResult").innerText = `hola buenos dias: ${result}`;
}

