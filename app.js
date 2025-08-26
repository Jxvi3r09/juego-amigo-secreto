let amigoSecreto = [];

// funcion para agregar un nuevo amigo
function agregarAmigo() {
  // Obtenemos el valor de entrada y eliminamos espacios y convertimos los nombres a minusculas
  let nombre = document.getElementById("amigo").value.trim().toLowerCase();
  // Verificamos si el campo está vacío
  if (nombre === "") {
    alert("Por favor, ingrese un nombre.");
    return; // Detenemos la función aquí
  }
  // Verificamos si el nombre ya existe
  if (amigoSecreto.includes(nombre)) {
    alert("Ese nombre ya ha sido agregado.");
    return; // Detenemos la función aquí
  }
  // Si las validaciones pasaron, agregamos el nombre
  amigoSecreto.push(nombre);
  // Limpiamos el campo y actualizamos la lista
  document.getElementById("amigo").value = "";
  actualizarAmigos();
  console.log(amigoSecreto);
}

// funcion para mostrar la lista de amigos
function actualizarAmigos() {
  // limpiamos el contenido actual de la lista
  document.getElementById("listaAmigos").innerHTML = "";
  // Si la lista no está vacía, crea un título y agrégalo
  if (amigoSecreto.length > 0) {
    let titulo = document.createElement("h3");
    titulo.textContent = "Lista de Amigos";
    document.getElementById("listaAmigos").appendChild(titulo);
  }
  // iteramos sobre la lista y creamos la lista
  for (let i = 0; i < amigoSecreto.length; i++) {
    // creamos un nuevo elemento en la lista
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(amigoSecreto[i]));
    document.getElementById("listaAmigos").appendChild(li);
  }
}

function sortearAmigo() {
  // Validamos que haya amigos disponibles
  if (amigoSecreto.length < 2) {
    alert("Debe haber al menos 2 amigos para realizar el sorteo.");
    return;
  }

  // Generamos un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigoSecreto.length);

  // Obtenemos el nombre sorteado
  let amigoSorteado = amigoSecreto[indiceAleatorio];

  // Mostramos el resultado en el HTML
  // Obtenemos el elemento de resultado
  let resultadoElemento = document.getElementById("resultado");

  // Actualizamos el contenido con el nombre sorteado
  resultadoElemento.innerHTML = `
        <p>¡Tu amigo secreto es:</p>
        <p class="amigo-sorteado">${amigoSorteado}</p>
    `;
}

function reiniciarSorteo() {
  // Limpiamos la lista de amigos y el resultado
  amigoSecreto = [];
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}