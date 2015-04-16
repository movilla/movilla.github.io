document.querySelector('#boton').onclick = function () {
	var canvas = document.getElementById('canvas');
	var cnx = null;
	if (canvas.getContext) {
	        cnx = canvas.getContext('2d');
	        creacnx();
	}
        	function creacnx () {
        	cnx.clearRect(0,0,canvas.width,canvas.height); // limpiando
        	var image = document.getElementById('fondo'); // fondo
        	cnx.drawImage(image, 0, 0, 744, 1039);         
        	var texto = document.getElementById('titulo').value; // título
        	cnx.font = '54px HEADOH';
        	cnx.textAlign= "center";
        	cnx.fillText(texto, 372, 80);
        	var condicion = document.getElementById('condicion').value; // condición
        	cnx.font = 'italic 22px Ingleby';
        	cnx.textAlign= 'left';
	        var start = 0;
	        var currentLine = 0;
	        var jumpAt = 60;
	        var lineHeight = 30;
	        var str;
	        while (start < condicion.length) {
	                str = condicion.substr(start,jumpAt);
	                start += jumpAt;
	                cnx.fillText(str, 50, 130+(lineHeight*currentLine++));
	        }
	        var narracion = document.getElementById('narracion').value;  // narración
	        cnx.font = '22px Ingleby';
	        cnx.textAlign= 'left';
	        var start = 0;
        	var jumpAt = 60;
	        var lineHeight = 30;
	        var str;
	        while (start < narracion.length) {
	                str = narracion.substr(start,jumpAt);
	                start += jumpAt;
	                cnx.fillText(str, 50, 130+(lineHeight*currentLine++));
	        }
	        if (document.getElementById('option1').value == '1') { // opción 1 
	                var opcion1 = document.getElementById('opcion1');
	                cnx.drawImage(opcion1, 35, 130+(lineHeight*currentLine++), 672, 41);
	        }
	        if (document.getElementById('option1').value == '2') { // opción unica
	                var unica_op = document.getElementById('unica_op');
	                cnx.drawImage(unica_op, 35, 130+(lineHeight*currentLine++), 672, 41);
	        }
	        if (document.getElementById('option1').value == '3') { // opción 1 pulgares arriba
	                var oparriba = document.getElementById('op1parriba');
	                cnx.drawImage(oparriba, 35, 130+(lineHeight*currentLine++), 672, 41);
	        }
	        if (document.getElementById('option1').value == '4') { // opción 1 pulgares abajo
	                var opabajo = document.getElementById('op2pabajo');
	                cnx.drawImage(opabajo, 35, 130+(lineHeight*currentLine++), 672, 41);
	        }
	        if (document.getElementById('option1').value == '5') { // alternativa
	                var alter = document.getElementById('alterna');
	                cnx.drawImage(alter, 35, 130+(lineHeight*currentLine++), 672, 41);
	        }
	        var opcion1 = document.getElementById('option1');
	        if (opcion1.value != '0') { // texto opción 1
	        var primera_opcion = document.getElementById('primera_opcion').value;
	        cnx.font = "22px Ingleby";
	        cnx.textAlign= "left";
	        var start = 0;
	        var jumpAt = 60;
	        var lineHeight = 30;
	        var str;
	        while (start < primera_opcion.length) {
	                str = primera_opcion.substr(start,jumpAt);
	                start += jumpAt;
	                cnx.fillText(str, 50, 180+(lineHeight*currentLine++));
	                }
	        }
	        if (document.getElementById('option2').value == '1') { // opción 2
	        var opcion2 = document.getElementById('opcion2');
	        cnx.drawImage(opcion2, 35, 180+(lineHeight*currentLine++), 672, 41);
	        }
	        if (document.getElementById('option2').value == '2') { // opción unica
	                var unica_op = document.getElementById('unica_op');
	                cnx.drawImage(unica_op, 35, 180+(lineHeight*currentLine++), 672, 41);
	        }
	        if (document.getElementById('option2').value == '3') { // opción 1 pulgares arriba
	                var oparriba = document.getElementById('op1parriba');
	                cnx.drawImage(oparriba, 35, 180+(lineHeight*currentLine++), 672, 41);
	        }
	        if (document.getElementById('option2').value == '4') { // opción 1 pulgares abajo
	                var opabajo = document.getElementById('op2pabajo');
	                cnx.drawImage(opabajo, 35, 180+(lineHeight*currentLine++), 672, 41);
	        }
	        if (document.getElementById('option2').value == '5') { // alternativa
	                var alter = document.getElementById('alterna');
	                cnx.drawImage(alter, 35, 180+(lineHeight*currentLine++), 672, 41);
	        }
	        var opcion2 = document.getElementById('option2');
	        if (opcion2.value != '0') { // texto opción 2
	                var segunda_opcion = document.getElementById('segunda_opcion').value;
	                cnx.font = "22px Ingleby";
	                cnx.textAlign= "left";
	                var start = 0;
	                var jumpAt = 60;
	                var lineHeight = 30;
	                var str;
	                while (start < segunda_opcion.length) {
	                        str = segunda_opcion.substr(start,jumpAt);
	                        start += jumpAt;
	                        cnx.fillText(str, 50, 230+(lineHeight*currentLine++));
	                }
	        }
	        if (document.getElementById('option3').value == '1') { // opción 3
	                var opcion3 = document.getElementById('opcion3');
	                cnx.drawImage(opcion3, 35, 230+(lineHeight*currentLine++), 672, 41);
	        }
	        if (document.getElementById('option3').value == '2') { // opción unica
	                var unica_op = document.getElementById('unica_op');
	                cnx.drawImage(unica_op, 35, 230+(lineHeight*currentLine++), 672, 41);
	        }
	        if (document.getElementById('option3').value == '3') { // opción 3 pulgares arriba
	                var oparriba = document.getElementById('op1parriba');
	                cnx.drawImage(oparriba, 35, 230+(lineHeight*currentLine++), 672, 41);
	        }
	        if (document.getElementById('option3').value == '4') { // opción 3 pulgares abajo
	                var opabajo = document.getElementById('op2pabajo');
	                cnx.drawImage(opabajo, 35, 230+(lineHeight*currentLine++), 672, 41);
	        }
	        if (document.getElementById('option3').value == '5') { // alternativa
	                var alter = document.getElementById('alterna');
	                cnx.drawImage(alter, 35, 230+(lineHeight*currentLine++), 672, 41);
	        }
	                var opcion3 = document.getElementById('option3');
	                if (opcion3.value != '0') { // texto opción 3
	                var tercera_opcion = document.getElementById('tercera_opcion').value;
	                cnx.font = "22px Ingleby";
	                cnx.textAlign= "left";
	                var start = 0;
	                var jumpAt = 60;
	                var lineHeight = 30;
	                var str;
	                while (start < tercera_opcion.length) {
	                        str = tercera_opcion.substr(start,jumpAt);
	                        start += jumpAt;
	                        cnx.fillText(str, 50, 280+(lineHeight*currentLine++));
	                }
	        }
	};
	var bedit = document.getElementById('bedit');
        var sino = bedit.getAttribute('data-arriba');
        var hide = document.getElementById('hide');
        	if (sino == 'si' ) {
			bedit.style.animation = 'girapabajo 2s forwards';
			bedit.setAttribute('data-arriba', 'no');
			canvas.style.zIndex = '5';
			canvas.style.animation = 'parriba 2s forwards';
			hide.style.animation = 'parriba2 2s forwards';
        	        var nav = document.getElementById('nav');
        	        var imagen = canvas.toDataURL('image/jpeg', 0.8);
		        nav.innerHTML = '<a class="descarga" id="bdescarga" data-mostrar="si" href="'+imagen+'" download="carta_encrucijada.jpeg"><input class="desc" id="botondex" type="button" value="Descargar"/></a>';
			var bdescarga = document.getElementById('bdescarga');
			bdescarga.style.animation = 'mostar 2s forwards';
		}
		else {
			bedit.style.animation = 'giraparriba 1s forwards';
			bedit.setAttribute('data-arriba', 'si');
			canvas.style.animation = 'pabajo 1s forwards';
			hide.style.animation = 'pabajo2 1s forwards';
			var bdescarga = document.getElementById('bdescarga')
			bdescarga.style.animation = 'nomostar 1s forwards';
		}
};
