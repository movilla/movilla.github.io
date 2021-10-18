document.querySelector('#click').onclick = function () {
	var mostrar_carta = document.getElementById('muestra');
	var k_carta = document.getElementById("que_carta").value;
	//mostrar_carta.innerHTML = ''+k_carta+'';
	
	
	if ( k_carta >= '600' && k_carta <= '623') {
    var eliminar_carta = document.getElementById('muestra_reverso');
    eliminar_carta.innerHTML = '';
	
	mostrar_carta.innerHTML = '<img id="" class= "carta" src="./anverso/'+k_carta+'.jpg">';
	//mostrar_carta.innerHTML = '<img id="" class= "" src="./anverso/608.jpg">';
	}
	else {
		alert('Ingrese solo números del 601 a 623');
	}
	
}

document.querySelector('#reverso').onclick = function () {
	var mostrar_carta = document.getElementById('muestra_reverso');
	var k_carta = document.getElementById("que_carta").value;
	//mostrar_carta.innerHTML = ''+k_carta+'';
	
	
	if ( k_carta >= '600' && k_carta <= '623') {
    var eliminar_carta = document.getElementById('muestra');
    eliminar_carta.innerHTML = '';
	
	mostrar_carta.innerHTML = '<img id="" class= "carta" src="./reverso/'+k_carta+'b.jpg">';
	//mostrar_carta.innerHTML = '<img id="" class= "" src="./anverso/608.jpg">';
	}
	else {
		alert('Ingrese solo números del 601 a 623');
	}
	
}

