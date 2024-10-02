function precioFinal() {
    // Solicitar el precio original y el descuento al usuario
    var precioo = parseFloat(prompt("Introduce el precio original del producto:"));
    var descuento = parseFloat(prompt("Introduce el porcentaje de descuento:"));

    // Calcular el precio final
    var precioConDescuento = precioo - (precioo * (descuento / 100));

    // Mostrar el resultado en un alert
    alert("El precio final después del descuento es: " + precioConDescuento.toFixed(2));
}