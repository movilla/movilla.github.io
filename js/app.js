/*  var nodeList = document.getElementsByClassName('draggable');
 
  for(var i=0;i<nodeList.length;i++) {
    var obj = nodeList[i];
    obj.addEventListener('touchmove', function(event) {
      var touch = event.targetTouches[0];
 
      // Place element where the finger is
      event.target.style.left = touch.pageX-40 + 'px';
      event.target.style.top = touch.pageY-40 + 'px';
      event.preventDefault();
    }, false);
  }
*/
var obj = document.getElementById('draggable');
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
