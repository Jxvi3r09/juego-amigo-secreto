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
    console.log(amigoSecreto);
  }
}

