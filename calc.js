function calculate() {
	var n1 = parseInt(document.getElementById('nt1').value);
	var	n2 = parseInt(document.getElementById('nt2').value);
	var	n3 = parseInt(document.getElementById('nt3').value);
	var	n4 = parseInt(document.getElementById('nt4').value);
	var	n5 = parseInt(document.getElementById('nt5').value);
	var	n6 = parseInt(document.getElementById('nt6').value);
	var	n7 = parseInt(document.getElementById('nt7').value);
	var	n8 = parseInt(document.getElementById('nt8').value);
	var	n9 = parseInt(document.getElementById('nt9').value);
	var	n10 = parseInt(document.getElementById('nt10').value);
	var	n11 = parseInt(document.getElementById('nt11').value);
	var	n12 = parseInt(document.getElementById('nt12').value);
	var	n13 = parseInt(document.getElementById('nt13').value);
	var	n14 = parseInt(document.getElementById('nt14').value);
	var	n15 = parseInt(document.getElementById('nt15').value);
	var	n16 = parseInt(document.getElementById('nt16').value);
	var	n17 = parseInt(document.getElementById('nt17').value);
	var	n18 = parseInt(document.getElementById('nt18').value);
	var	n19 = parseInt(document.getElementById('nt19').value);
	var	n20 = parseInt(document.getElementById('nt20').value);
	var	fa1 = parseInt(document.getElementById('fat1').value);
	var	fa2 = parseInt(document.getElementById('fat2').value);
	var	fa3 = parseInt(document.getElementById('fat3').value);
	var	fa4 = parseInt(document.getElementById('fat4').value);
	var	fa5 = parseInt(document.getElementById('fat5').value);
	var	fa6 = parseInt(document.getElementById('fat6').value);
	var	fa7 = parseInt(document.getElementById('fat7').value);
	var	fa8 = parseInt(document.getElementById('fat8').value);
	var	fa9 = parseInt(document.getElementById('fat9').value);
	var	fa10 = parseInt(document.getElementById('fat10').value);
	var interval = document.getElementById('sinal').innerHTML;
	
	var xi = [];
	var xifi = [];
	var Fi = [];

	var sumxifi = 0;
	var sumfi = 0;
	var p = 0;
	var xbar = 0;

	var middleClass = 0;
	var	posMiddleClass = 0;
	var posBigF = 0;
	var posLittleF = 0;
	var posInferiorLimit = 0;

	var inferiorLimit = 0;
	var littleF = 0;
	var bigF = 0;
	var h = 0;
	var md = 0;
	var posModalBrutal = 0;
	var modalBrutal = 0;
	var modalClass1 = 0;
	var modalClass2 = 0;
	var d1 = 0;
	var d2 = 0;
	var modaZer = 0;
	var xBarra = 0;
	var variancia = 0;
	var standardDeviation = 0;
	var coefficient = 0;

	var sum = 0;



	var	total = [n1 ,n2 ,n3 ,n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15, n16, n17, n18, n19, n20,
			fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, fa10];
	
	//checa todas as variáveis e atribui valor '0' para as que possuem NaN
	for(var k = 0; k < total.length; k++){
		if(isNaN(total[k])){
			total[k] = 0;
		}
	}

	var vazio = 0;
	//cálculo para obter xi
	for(var a = 0; a < 19; a++){
		var vazio;
		var aux = total[a];
		a++
		xi[vazio] = ((aux + total[a]) / 2);
		vazio++;
		console.log(xi)
	}

	//cálculo para obter xifi
	var pos = 20;//variável aux
	for(var b = 0; b < 9; b++){
		xifi[b] = total[pos] * xi[b];
		pos++;
		console.log(xifi);
	}
	
	//soma os valores de xifi
	for(var c = 0; c < xifi.length; c++){
		sumxifi = sumxifi + xifi[c];
		console.log(sumxifi); 
	}

	//soma os valores de fi
	pos = 20;//reset variável
	for(var d = 0; d < 9; d++){
		sumfi = sumfi + total[pos];
		pos++
	}
	console.log('Sumfi '+sumfi)//PRINT

	xbar = sumxifi / sumfi;
	console.log('Média: ' + xbar)

	p = (sumfi + 1) / 2;
	console.log('Valor P: ' + p)

	//achar valores de Fi
	pos = 21; //reset variável
	Fi[0] = total[20];
	var Fitotal = total[20];
	for(var e = 1; e < 9; e++){
		if(total[pos] != 0){
			Fitotal = Fitotal + total[pos];
			Fi[e] = Fitotal; 
		}	
		pos++;
	}

	//checar classe middleClass

	for(var f = 0; f < Fi.length; f++){
		if(Fi[f] > p){
			middleClass = Fi[f];
			posMiddleClass = [f];
			break;
		}
	}

	if(posMiddleClass > 0){
		posBigF = parseInt(posMiddleClass) - 1;
	}

	posLittleF = parseInt(posMiddleClass) + 20;

	posInferiorLimit = parseInt(posMiddleClass) * 2;

	bigF = Fi[posBigF];
	littleF = total[posLittleF];
	inferiorLimit = total[posInferiorLimit];
	var limitAux = posInferiorLimit + 1;
	h = (total[limitAux] - total[posInferiorLimit]);
	//funcionando basta preencher os valores
	md = inferiorLimit + ( ( ( (sumfi / 2) - bigF) / littleF) * h)

	modalBrutal = total[20];
	posModalBrutal = 20;
	for(var forza = 21; forza < 29; forza++){
		if(total[forza] > modalBrutal){
			modalBrutal = total[forza];
			posModalBrutal = [forza];
		}
	}	

	modalClass1 = posModalBrutal - 20;
	modalClass1 = modalClass1 * 2;
	modalClass2 = posModalBrutal - 20;
	modalClass2 = (modalClass2 * 2) + 1;
	modalClass1 = total[modalClass1];
	modalClass2 = total[modalClass2];
	
	d1 = modalBrutal;
	d2 = modalBrutal;
	var auxD1 = parseInt(posModalBrutal) - 1;
	var auxD2 = parseInt(posModalBrutal) + 1; 

	if(posModalBrutal > 20){
		d1 = d1 - total[auxD1];
	}

	if(posModalBrutal < 29){
		d2 = d2 - total[auxD2];
	}

	modaZer = modalClass1 + ((d1 / (d1 + d2)) * h);

	for(var forza2 = 0; forza2 < xifi.length; forza2++){
		xBarra = xBarra + xifi[forza2];
	}

	xBarra = xBarra / sumfi;

	var pos1 = 20;

	for(var forza3 = 0; forza3 < xi.length; forza3++){
		if(xi[forza3] != 0){	
			variancia = variancia + (total[pos1] * ((xi[forza3] * xi[forza3]) - (xBarra * xBarra)));
			console.log(variancia)
		}
		pos1++;
	}

	variancia = variancia / (sumfi - 1);
	
	standardDeviation = Math.sqrt (variancia);

	coefficient = (standardDeviation / xBarra) * 100;//porcentagem

	console.log('Valor de h ' + h)
	console.log('Limite inferior ' + inferiorLimit)
	console.log('Valor Fzao ' + bigF)
	console.log('Posição Fzao ' + posBigF)
	console.log('Valor fzinho ' + littleF)
	console.log('Posição fzinho ' + posLittleF)
	console.log('Posição limite inferior ' + posInferiorLimit)
	console.log('Posição classe média ' + posMiddleClass)
	console.log('Valor middleClass ' + middleClass)
	console.log('Valor da mediana ' + md)
	console.log('moda bruta ' + modalBrutal)
	console.log('Posição moda bruta ' + posModalBrutal)
	console.log('Posição classe modal ' + modalClass1 +' '+ interval +' '+ modalClass2)
	console.log('Moda de Zer ' + modaZer)
	console.log('D1 ' + d1)
	console.log('D2 ' + d2)
	console.log('Xbarra ' + xBarra)
	console.log('Variancia ' + variancia)
	console.log('Desvio padrão ' + standardDeviation)
	console.log('Coeficiente de variação ' + coefficient)

	for(var j = 0; j < 9; j++){
		console.log(Fi[j])
	}

	for(var i = 0; i < total.length; i++){
		sum = sum + total[i];
	}

	document.getElementById('resultadoMedia').innerHTML = parseFloat(xBarra.toFixed(2));	
	document.getElementById('resultadoMediana').innerHTML = parseFloat(md.toFixed(2));
	document.getElementById('resultadoClasseModal').innerHTML = modalClass1 +' '+ interval +' '+ modalClass2;
	document.getElementById('resultadoModaBruta').innerHTML = modalBrutal;
	document.getElementById('resultadoModaCzuber').innerHTML = parseFloat(modaZer.toFixed(2));
	document.getElementById('resultadoDesvioPadrao').innerHTML = parseFloat(standardDeviation.toFixed(2));
	document.getElementById('resultadoVariancia').innerHTML = parseFloat(variancia.toFixed(2));
	document.getElementById('resultadoCoeficienteVariacao').innerHTML = parseFloat(coefficient.toFixed(2));
}

function intervalLeft(){
	document.getElementById('sinal').innerHTML = '|-';
}

function intervalRight(){
	document.getElementById('sinal').innerHTML = '-|';
}

function clear(){
	//zerar as variáveis
}

