function pessoa (nome, idade, peso, altura){
		this.nome = nome;
		this.idade = idade;
		this.peso = peso;
		this.altura = altura;
		this.imc = function (){
			return  (this.peso) /((this.altura) * (this.altura));
		};
		
		this.status1 = function (){
			if(this.imc() < 18.5){
				return "Abaixo do Peso";
			}else if(this.imc() >= 18.5 && this.imc() <= 24.9){
				return "Peso Normal";
			}else if (this.imc() >= 25 && this.imc() <= 29.9){
				return "Sobrepeso";
			}else if (this.imc() > 29.9) {
				return "Obesidade";
			}
		}	

}

function calculaImc() {

	var nome  = document.getElementById("nome").value;
	var idade = document.getElementById("idade").value;	
	var peso = document.getElementById("peso").value;
	var altura = document.getElementById("altura").value;
		
	var p1 = new pessoa (nome, idade, peso, altura);
		
	document.getElementById("resultado").innerHTML = "IMC: " + p1.imc();
	document.getElementById("status").innerHTML = "STATUS: " + p1.status1();

}