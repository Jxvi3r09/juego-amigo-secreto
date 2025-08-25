let amigoSecreto = [];

// funcion para agregar un nuevo amigo
function agregarAmigo() {
  // obtenemos el valor de entrada
  let nombre = document.getElementById("amigo").value;
  // validamos que el campo no este vacio
  if (nombre === "") {
    alert("Por favor, ingrese un nombre.");
    return;
    // agregamos el valor
  } else {
    amigoSecreto.push(nombre);
    // limpiamos el campo de entrada, despues de agregar un nuevo amigo
    document.getElementById("amigo").value = "";
    actualizarAmigos();
    console.log(amigoSecreto);
  }
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
