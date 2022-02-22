function alerta(elementoA) {
  var ciudad =elementoA.innerText;
  alert(`Cargando la ciudad: ${ciudad}`);
}

function aceptar() {
  var cookie = document.querySelector('.cookie');
  cookie.remove();
}

// function cambioEscala(elemento) {
//   if (elemento.value === "F") {
//    var t = document.getElementsByClassName("tempMaxx").innerText;
//    console.log(t);
//   }
// }

function cambioEscala(elementoSelect) {
  var fOc = elementoSelect.value;

  for (var i=1; i<=8; i++) {
    var temperatura = document.querySelector('#temperatura'+i);
    var temperaturaValue = temperatura.innerText;
    temperaturaValue = parseInt(temperaturaValue);
    console.log(temperaturaValue);
    var newTemp = 0;
    if (fOc === "C") {
      //F => C
      newTemp = Math.round((temperaturaValue-32)*5/9);
    } else {
      newTemp = Math.round(temperaturaValue*9/5+32);
    }
    temperatura.innerText = newTemp;
  }
}
