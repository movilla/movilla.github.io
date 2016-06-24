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

document.querySelector('#b01a').onclick = function () {
        var audio = confirm('¿Quieres comenzar con la narración?');
        if (audio == true) {
                document.getElementById('sonido_1').play();
                var activar = document.getElementById('b01a');
                activar.style.visibility ='hidden';  
                document.querySelector('#b02a').style.visibility ='visible';
        }
        else { 
                alert('Cancelado')
        }
};

document.querySelector('#b02a').onclick = function () {
                document.getElementById('sonido_1').pause();
                document.querySelector('#b02a').style.visibility ='hidden';
                document.querySelector('#b01a').style.visibility ='visible';    
};
