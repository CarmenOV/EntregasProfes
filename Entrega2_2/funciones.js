function iniciarContador() {
    let tiempo= 60; // Tiempo en segundos

    // setInterval para crear el contador
    const intervalo = setInterval() => {
        // Mostrar el tiempo restante en un alert
        document.write("Tiempo restante:"+tiempo+" segundos");

        // Disminuir el tiempo restante
        tiempo--;

        if (tiempo < 0) {
            document.write("¡Tiempo agotado!");
        }
    } // Cada segundo
}

