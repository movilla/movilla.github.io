var nodeList = document.getElementsByClassName('draggable');

for(var i=0;i<nodeList.length;i++) {
    var obj = nodeList[i];
    obj.addEventListener('touchmove', function(event) {

    var touch = event.targetTouches[0];
    
    var ancho = this.offsetWidth;
    var alto = this.offsetHeight;
    event.target.style.left = touch.pageX-(ancho/2) + 'px';
    event.target.style.top = touch.pageY-(alto/2) + 'px';
    event.preventDefault();
  }, false);
};
