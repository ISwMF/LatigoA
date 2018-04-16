// El watch id referencia al actual 'watchAcceleration'
var watchID = null;

document.getElementById("button2").addEventListener("click", function(){
    startView();
});

   function startView(){
     // Importante el manejador de eventos para que cargue las librerías
     document.addEventListener("deviceready", onDeviceReady, false);

   }

   // Las APIs del dispositivo listas
   //
   function onDeviceReady() {
     alert ("ready");
       startWatch();
   }

   // Empezar a ver la aceleracion
   //
   function startWatch() {
       // Actualizar la aceleracion cada 0.5s
       var options = { frequency: 500 };

       watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
   }

   // Detener la aceleracion
   //
   function stopView(){
       navigator.accelerometer.clearWatch(watchID);
       watchID = null;
   }

   // onSuccess: Captura la aceleracion actual
   //
   function onSuccess(acceleration) {
       document.getElementById("x").innerHTML=acceleration.x;
       document.getElementById("y").innerHTML=acceleration.y;
       document.getElementById("z").innerHTML=acceleration.z;
   }

   // onError: Al fallar el captor
   //
   function onError() {
       alert("ERROR!");
   }
