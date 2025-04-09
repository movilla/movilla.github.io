document.querySelector('#preg1').onclick = function escribe(pregunta) {
var predestino = document.getElementById('respuesta');
predestino.innerHTML = '<article><a id="texto_int" class="txt_intro_explicacion_cuater">Bien, pero… y la lengua ¿No la usas?</a></article>';
}

document.querySelector('#preg2').onclick = function escribe(pregunta) {
var predestino = document.getElementById('respuesta');
predestino.innerHTML = '<article><a id="texto_int" class="txt_intro_explicacion_cuater">Bien, pero… y las manos ¿No la usas?</a></article>';
}


document.querySelector('#preg3').onclick = function escribe(pregunta) {
var predestino = document.getElementById('respuesta');
predestino.innerHTML = '<article><a id="texto_int" class="txt_intro_explicacion_cuater">Ohhhh esa en realidad es la correcta… Pero ¿Por qué elegir, pudiendo tenerlas todas?</a></article>';
}

document.querySelector('#preg4').onclick = function escribe(pregunta) {
var predestino = document.getElementById('respuesta');
predestino.innerHTML = '<article><a id="texto_int" class="txt_intro_explicacion_cuater" href="./index_3.html">Correcto!!! pincha en el relago para continuar<img  id="icon_dest" class="icono_destino_2" data-arriba="si" src="./style/img/regalo_2_.webp"></a></article>';
}
