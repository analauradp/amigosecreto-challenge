// Array que almacenará los nombres de los amigos
let amigos = [];

// Implementa la funcionalidad de agregar amigos
const inputNombre = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoSorteo = document.getElementById("resultado");

// Permitir agregar un nombre usando la tecla Enter
inputNombre.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

function agregarAmigo() {
    const nombre = inputNombre.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Es necesario ingresar un nombre.");
        return;
    }

    // Validar que se ingresen nombres utilizando solo letras y espacios
    const nombreRegex = /^(?!\s*$)[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if (!nombreRegex.test(nombre)) {
        alert("Por favor, introduce un nombre válido.");
        return;
    }

    // Evitar la duplicación de nombres (insensible a mayúsculas y minúsculas)
    if (amigos.some((amigo) => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("Nombre duplicado. Por favor, introduce un nombre diferente.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);
    actualizarLista();

    // Limpiar el campo de entrada
    inputNombre.value = "";
    // Colocar el foco en el campo de entrada
    inputNombre.focus();
}

// Implementa la funcionalidad para actualizar la lista de amigos
function actualizarLista() {
    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Recorrer el array y crear elementos de la lista para cada título
    for (let amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

// Implementa la funcionalidad para sortear los amigos
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado
    mostrarResultado(amigoSeleccionado);
}

// Funcionalidad para mostrar el amigo secreto
function mostrarResultado(amigoSeleccionado) {
    // Limpiar cualquier resultado anterior
    resultadoSorteo.innerHTML = "";

    // Crear y agregar el mensaje con el nombre sorteado "Amigo secreto"
    const p = document.createElement("p");
    p.textContent = `El amigo secreto es: ${amigoSeleccionado}`;
    resultadoSorteo.appendChild(p);
}
