// El watch id referencia al actual 'watchAcceleration'
var watchID = null;

document.getElementById("button").addEventListener("click", function() {
  startView();
});

document.getElementById("button2").addEventListener("click", function() {
  stopView();
});

function startView() {
  // Importante el manejador de eventos para que cargue las librerías
  document.addEventListener("deviceready", onDeviceReady, false);
}

// Las APIs del dispositivo listas
//
function onDeviceReady() {
  alert("ready");
  startWatch();
}

// Empezar a ver la aceleracion
//
function startWatch() {
  // Actualizar la aceleracion cada 0.5s
  var options = {
    frequency: 100
  };

  watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

// Detener la aceleracion
//
function stopView() {
  alert("Stop");
  navigator.accelerometer.clearWatch(watchID);
  watchID = null;
}

// onSuccess: Captura la aceleracion actual
//
function onSuccess(acceleration) {
  var Suma = Math.abs(acceleration.x) + Math.abs(acceleration.y) + Math.abs(acceleration.z);
  if (Suma >= 30 && Suma <= 50) {
    var reproductor1 = new reproductor();
    reproductor1.reproducir();
  }
}

// onError: Al fallar el captor
//
function onError() {
  alert("ERROR!");
}
