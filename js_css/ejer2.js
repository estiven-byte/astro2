let distancias = [];

function agregarDistancia() {
    let valor = parseFloat(document.getElementById("distancia").value);
    let lista = document.getElementById("lista-distancias");

    if (isNaN(valor) || valor <= 0) {
        return; // no muestra alert, simplemente ignora
    }

    distancias.push(valor);

    let item = document.createElement("li");
    item.textContent = valor + " millones de km";
    lista.appendChild(item);

    document.getElementById("distancia").value = "";
}

function calcularDistancias() {
    let resultado = document.getElementById("resultado-ej2");

    if (distancias.length === 0) {
        resultado.innerHTML = "No hay distancias registradas.";
        return;
    }

    let suma = 0;
    let min = distancias[0];
    let max = distancias[0];

    // CICLO FOR que solicita el ejercicio
    for (let i = 0; i < distancias.length; i++) {
        suma += distancias[i];

        if (distancias[i] < min) min = distancias[i];
        if (distancias[i] > max) max = distancias[i];
    }

    let promedio = suma / distancias.length;

    resultado.innerHTML = `
        Promedio: ${promedio.toFixed(2)} millones de km <br>
        Distancia mínima: ${min} <br>
        Distancia máxima: ${max}
    `;
}