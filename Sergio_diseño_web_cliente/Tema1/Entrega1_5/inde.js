function squareAndSum() {
    // Prompt the user for input (comma separated values)
    const input = prompt("Enter numbers (comma separated):");

    // If the user cancels or enters nothing, stop
    if (!input) {
        return;
    }

    // Split input into an array, convert to numbers, and filter out invalid inputs
    let argsArray = input.split(',').map(item => parseFloat(item.trim())).filter(item => !isNaN(item));

    // Square each number and sum them
    let sumOfSquares = argsArray.reduce((sum, num) => sum + num ** 2, 0);

    // Use document.write to display the result
    document.write(`<h2>Sum of squares: ${sumOfSquares}</h2>`);
}
