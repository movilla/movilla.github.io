  var nodeList = document.getElementsByClassName('draggable');
 
  for(var i=0;i<nodeList.length;i++) {
    var obj = nodeList[i];
    obj.addEventListener('touchmove', function(event) {
      var touch = event.targetTouches[0];
 
      // Place element where the finger is
      event.target.style.left = touch.pageX + 'rem';
      event.target.style.top = touch.pageY + '0.1rem';
      event.preventDefault();
    }, false);
  }
