let reloj;

reloj = setInterval(procesar, 1000);
document.getElementById("correr").addEventListener("click", presionBoton);
console.log(presionBoton);
function procesar() {
  let nro = parseInt(document.getElementById("cronometro").innerHTML);
  nro++;
  document.getElementById("cronometro").innerHTML = nro;
}
function presionBoton() {
  if (document.getElementById("correr").value == "detener") {
    clearInterval(reloj);
    document.getElementById("correr").value = "Continuar";
  } else {
    reloj = setInterval(procesar, 1000);
    document.getElementById("correr").value = "detener";
  }
}
