function iniciar() {
  if (document.getElementById("inicial").value == "") {
    alert("El campo tiempo esta vacio");
  } else {
    contador(document.getElementById("inicial").value);
  }
}
function contador(inicial) {
  if (inicial <= 0) {
    document.getElementById("tiempo").innerText = "Finalizado";
  } else {
    document.getElementById("tiempo").innerText = inicial;
    setTimeout(contador, 1000, inicial - 1);
  }
}
document.getElementById("iniciar").addEventListener("click", iniciar);
