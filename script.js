// FunciÃ³n que cambia los inputs segÃºn la figura seleccionada
function showInputs() {
    const figure = document.getElementById('figure').value;
    const inputsDiv = document.getElementById('inputs');
    inputsDiv.innerHTML = ''; // Limpiar inputs anteriores

    if (figure === 'circle') {
        inputsDiv.innerHTML = `
            <label for="radius">Radio del circulo:</label>
            <input type="number" id="radius" placeholder="Introduce el radio" required>
        `;
    } else if (figure === 'square') {
        inputsDiv.innerHTML = `
            <label for="side">Lado del cuadrado:</label>
            <input type="number" id="side" placeholder="Introduce el lado" required>
        `;
    } else if (figure === 'rectangle') {
        inputsDiv.innerHTML = `
            <label for="length">Largo del rectangulo:</label>
            <input type="number" id="length" placeholder="Introduce el largo" required>
            <label for="width">Ancho del rectangulo:</label>
            <input type="number" id="width" placeholder="Introduce el ancho" required>
        `;
    } else if (figure === 'triangle') {
        inputsDiv.innerHTML = `
            <label for="base">Base del triangulo:</label>
            <input type="number" id="base" placeholder="Introduce la base" required>
            <label for="height">Altura del triangulo:</label>
            <input type="number" id="height" placeholder="Introduce la altura" required>
        `;
    }
}

// FunciÃ³n para calcular el Ã¡rea segÃºn la figura
function calculateArea() {
    const figure = document.getElementById('figure').value;
    let area = 0;

    if (figure === 'circle') {
        const radius = parseFloat(document.getElementById('radius').value);
        if (radius > 0) {
            area = Math.PI * Math.pow(radius, 2);
        }
    } else if (figure === 'square') {
        const side = parseFloat(document.getElementById('side').value);
        if (side > 0) {
            area = Math.pow(side, 2);
        }
    } else if (figure === 'rectangle') {
        const length = parseFloat(document.getElementById('length').value);
        const width = parseFloat(document.getElementById('width').value);
        if (length > 0 && width > 0) {
            area = length * width;
        }
    } else if (figure === 'triangle') {
        const base = parseFloat(document.getElementById('base').value);
        const height = parseFloat(document.getElementById('height').value);
        if (base > 0 && height > 0) {
            area = (base * height) / 2;
        }
    }

    // Mostrar el resultado sin decimales si es un nÃºmero entero
    if (Number.isInteger(area)) {
        document.getElementById('result').textContent = area; // Mostrar el nÃºmero entero
    } else {
        document.getElementById('result').textContent = area.toFixed(2); // Mostrar con dos decimales
    }
}

// Inicializar con los inputs para cÃ­rculo
window.onload = showInputs;