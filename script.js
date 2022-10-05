let reloj;

reloj = setInterval(procesar, 1000);
document.getElementById("boton1").addEventListener("click", presionBoton);
console.log(presionBoton);
function procesar() {
  let nro = parseInt(document.getElementById("cronometro").innerHTML);
  nro++;
  document.getElementById("cronometro").innerHTML = nro;
}
function presionBoton() {
  if (document.getElementById("boton1").value == "detener") {
    clearInterval(reloj);
    document.getElementById("boton1").value = "Continuar";
  } else {
    reloj = setInterval(procesar, 1000);
    document.getElementById("boton1").value = "detener";
  }
}
