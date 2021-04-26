function calculaImc() {
	
	var peso = document.getElementById("inputPeso").value;
	var altura = document.getElementById("inputAltura").value;
		
	var imc = peso / (altura*altura);
	var padrao = "teste";
	
		if(imc < 18.5){
			padrao = "Abaixo do Peso";
			}else if(imc >= 18.5 && imc <= 24.9){
				padrao = "Peso Normal";
			}else if (imc >= 25 && imc <= 29.9){
				padrao = "Sobrepeso";
			}else if (imc > 29.9) {
				padrao = "Obesidade";
			}
		
	alert("Seu IMC é: " + imc);
	alert("Seu Status atual  é: " + padrao);
	
}
