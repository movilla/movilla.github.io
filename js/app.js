Array.prototype.shuffle = function() {
var input = this;

for (var i = input.length-1; i >=0; i--) {

    var randomIndex = Math.floor(Math.random()*(i+1)); 
    var itemAtIndex = input[randomIndex]; 

    input[randomIndex] = input[i]; 
    input[i] = itemAtIndex;
}
return input;
};



        cdestino = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42']
                cdestino.shuffle();
                var cdes_1 = cdestino[0]
                var cdes_2 = cdestino[1]
                var cdes_3 = cdestino[2]
                var cdes_4 = cdestino[3]
                var cdes_5 = cdestino[4]
                var cdes_6 = cdestino[5]
                var cdes_7 = cdestino[6]
                var cdes_8 = cdestino[7]
                var cdes_9 = cdestino[8]
                var cdes_10 = cdestino[9]
                var cdes_11 = cdestino[10]
                var cdes_12 = cdestino[11]
                var cdes_13 = cdestino[12]
                var cdes_14 = cdestino[13]
                var cdes_15 = cdestino[14]
                var cdes_16 = cdestino[15]
                var cdes_17 = cdestino[16]
                var cdes_18 = cdestino[17]
                var cdes_19 = cdestino[18]
                var cdes_20 = cdestino[19]
                var cdes_21 = cdestino[20]
                var cdes_22 = cdestino[21]
                var cdes_23 = cdestino[22]
                var cdes_24 = cdestino[23]
                var cdes_25 = cdestino[24]
                var cdes_26 = cdestino[25]
                var cdes_27 = cdestino[26]
                var cdes_28 = cdestino[27]
                var cdes_29 = cdestino[28]
                var cdes_30 = cdestino[29] 
                var cdes_31 = cdestino[30] 
                var cdes_32 = cdestino[31] 
                var cdes_33 = cdestino[32] 
                var cdes_34 = cdestino[33] 
                var cdes_35 = cdestino[34] 
                var cdes_36 = cdestino[35]
                var cdes_37 = cdestino[36]
                var cdes_38 = cdestino[37]
                var cdes_39 = cdestino[38]
                var cdes_40 = cdestino[39]
                var cdes_41 = cdestino[40]
                var cdes_42 = cdestino[41]

                var mazo_destino = new Array();
                mazo_destino[0] = 'style/img/back-alert.jpg';
                mazo_destino[1] = 'style/img/'+cdes_1+'.jpg';
                mazo_destino[2] = 'style/img/'+cdes_2+'.jpg';
                mazo_destino[3] = 'style/img/'+cdes_3+'.jpg';
                mazo_destino[4] = 'style/img/'+cdes_4+'.jpg';
                mazo_destino[5] = 'style/img/'+cdes_5+'.jpg';
                mazo_destino[6] = 'style/img/'+cdes_6+'.jpg';
                mazo_destino[7] = 'style/img/'+cdes_7+'.jpg';
                mazo_destino[8] = 'style/img/'+cdes_8+'.jpg';
                mazo_destino[9] = 'style/img/'+cdes_9+'.jpg';
                mazo_destino[10] = 'style/img/'+cdes_10+'.jpg';
                mazo_destino[11] = 'style/img/'+cdes_11+'.jpg';
                mazo_destino[12] = 'style/img/'+cdes_12+'.jpg';
                mazo_destino[13] = 'style/img/'+cdes_13+'.jpg';
                mazo_destino[14] = 'style/img/'+cdes_14+'.jpg';
                mazo_destino[15] = 'style/img/'+cdes_15+'.jpg';
                mazo_destino[16] = 'style/img/'+cdes_16+'.jpg';
                mazo_destino[17] = 'style/img/'+cdes_17+'.jpg';
                mazo_destino[18] = 'style/img/'+cdes_18+'.jpg';
                mazo_destino[19] = 'style/img/'+cdes_19+'.jpg';
                mazo_destino[20] = 'style/img/'+cdes_20+'.jpg';
                mazo_destino[21] = 'style/img/'+cdes_21+'.jpg';
                mazo_destino[22] = 'style/img/'+cdes_22+'.jpg';
                mazo_destino[23] = 'style/img/'+cdes_23+'.jpg';
                mazo_destino[24] = 'style/img/'+cdes_24+'.jpg';
                mazo_destino[25] = 'style/img/'+cdes_25+'.jpg';
                mazo_destino[26] = 'style/img/'+cdes_26+'.jpg';
                mazo_destino[27] = 'style/img/'+cdes_27+'.jpg';
                mazo_destino[28] = 'style/img/'+cdes_28+'.jpg';
                mazo_destino[29] = 'style/img/'+cdes_29+'.jpg';
                mazo_destino[30] = 'style/img/'+cdes_30+'.jpg';
                mazo_destino[31] = 'style/img/'+cdes_31+'.jpg';
                mazo_destino[32] = 'style/img/'+cdes_32+'.jpg';
                mazo_destino[33] = 'style/img/'+cdes_33+'.jpg';
                mazo_destino[34] = 'style/img/'+cdes_34+'.jpg';
                mazo_destino[35] = 'style/img/'+cdes_35+'.jpg';
                mazo_destino[36] = 'style/img/'+cdes_36+'.jpg';
                mazo_destino[37] = 'style/img/'+cdes_37+'.jpg';
                mazo_destino[38] = 'style/img/'+cdes_38+'.jpg';
                mazo_destino[39] = 'style/img/'+cdes_39+'.jpg';
                mazo_destino[40] = 'style/img/'+cdes_40+'.jpg';
                mazo_destino[41] = 'style/img/'+cdes_41+'.jpg';
                mazo_destino[42] = 'style/img/'+cdes_42+'.jpg';

                var botontras = document.getElementById('atras');


                var viendo = 0;
                if ( viendo == 0 ) { botontras.style.visibility ='hidden'; }
document.querySelector('#adelante').onclick = function () {
                        var botonlante = document.getElementById('adelante');
                        botonlante.style.visibility ='hidden';
                        var imagen_actual = document.getElementById('carta');
                        var imagen_siguiente = document.getElementById('cartasig');
                        var imagen_anterior = document.getElementById('cartaant');
                        var ultima = mazo_destino.length - 1;
                        var sentido = 1;
                        var auxiliar = viendo + sentido;
                                if ( auxiliar < 0) { auxiliar = ultima; }
                                if ( auxiliar > ultima) { auxiliar = 0; }
                        viendo = auxiliar;
                        if (viendo > 0 ) { botontras.style.visibility ='visible'; }
                        var total = document.getElementById('total');
                        total.innerHTML = '<a class="num_carta">'+viendo+'/'+ultima+'</a>'
                        imagen_actual.src = mazo_destino[viendo];
                        imagen_actual.style.animation = 'precarta 1s forwards';
                        
                        var sigauxiliar = auxiliar +1;
                        sigviendo = sigauxiliar;
                        imagen_siguiente.src = mazo_destino[sigviendo];

                        var preauxiliar = auxiliar -1;
                        previendo = preauxiliar;
                        imagen_anterior.src = mazo_destino[previendo];

                setTimeout(function(){
                          var imagen_fondo = document.getElementById('foncarta');
                          imagen_fondo.src = mazo_destino[viendo];
                          imagen_actual.style.animation = '';
                          botonlante.style.visibility ='visible';
                          if ( viendo == 42 ) { botonlante.style.visibility ='hidden'; }    
                },1200);
};



document.querySelector('#atras').onclick = function () {
                        botontras.style.visibility ='hidden';
                        var imagen_actual = document.getElementById('carta');
                        var imagen_siguiente = document.getElementById('cartasig');
                        var imagen_anterior = document.getElementById('cartaant');
                        var ultima = mazo_destino.length - 1;
                        var sentido = -1;
                        var auxiliar = viendo + sentido;
                                if ( auxiliar < 0) { auxiliar = ultima; }
                                if ( auxiliar > ultima) { auxiliar = 0; }
                        viendo = auxiliar;
                        var total = document.getElementById('total');
                        total.innerHTML = '<a class="num_carta">'+viendo+'/'+ultima+'</a>'

                        
                        var sigauxiliar = auxiliar +1;
                        sigviendo = sigauxiliar;
                        imagen_siguiente.src = mazo_destino[sigviendo];

                        var preauxiliar = auxiliar -1;
                        previendo = preauxiliar;
                        var imagen_fondo = document.getElementById('foncarta');
                        imagen_fondo.src = mazo_destino[viendo];
                        imagen_actual.style.animation = 'postcarta 1s forwards';
                        imagen_anterior.src = mazo_destino[previendo]; 

                setTimeout(function(){

                          imagen_actual.style.animation = '';
                          botontras.style.visibility ='visible';
                          if ( viendo == 0 ) { botontras.style.visibility ='hidden'; }
                          imagen_actual.src = mazo_destino[viendo];     
                },1200);
};


document.querySelector('#inicio').onclick = function () {
        var nuevo = confirm('¿Volver a barajar?');
        if (nuevo == true) { 
                location.href = 'index.html'
        }
};
