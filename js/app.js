var nodeList = document.getElementsByClassName('draggable');

for(var i=0;i<nodeList.length;i++) {
    var obj = nodeList[i];
    obj.addEventListener('touchmove', function(event) {

      var touch = event.targetTouches[0];
      var izq = document.getElementById('mano_izq');
      var ancho = obj.offsetWidth;
      var alto = obj.offsetHeight;
      event.target.style.left = touch.pageX-(ancho/2) + 'px';
      event.target.style.top = touch.pageY-(alto/2) + 'px';
      var posicion = Math.floor(touch.pageX+ancho);
      var muestra = document.getElementById('muestra');
      muestra.innerHTML = '<a>'+posicion+'</a><br><a>'+izq.offsetLeft+'</a>';
      if ((posicion >= (izq.offsetLeft-10)) && (posicion <= (izq.offsetLeft+10))) {
        this.style.boxShadow = '-9px 9px 5px 0px rgba(0,0,0,0.75)';
      }
      else {
        this.style.boxShadow = '';
      }
      event.preventDefault();
  }, false);
}

/*
var obj = document.getElementById('d1');
obj.addEventListener('touchmove', function(event) {
  // If there's exactly one finger inside this element
  if (event.targetTouches.length == 1) {
    var touch = event.targetTouches[0];
    // Place element where the finger is
    obj.style.left = touch.pageX-40 + 'px';
    obj.style.top = touch.pageY-40 + 'px';
  }
  event.preventDefault();
}, false);
*/
