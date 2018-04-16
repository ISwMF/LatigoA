function reproductor(){

}

reproductor.prototype.reproducir =  function() {
  var audio = new Audio('sonido.mp3');
  audio.play();
}
