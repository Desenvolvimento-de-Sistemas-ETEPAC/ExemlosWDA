$(document).ready(function(){
	// CLICANDO NO PRIMEIRO BOTÃO
	$("#button01").click(function(){
		$("#ret1").animate({
			opacity: '1',
			height: '80px',
			width: '80px'	
		});
		$("#ret2").animate({
			opacity: '0.2',
			height: '40px',
			width: '40px'
		});
		$("#ret3").animate({
			opacity: '0.2',
			height: '40px',
			width: '40px'
		});			
	});
	
	// CLICANDO NO SEGUNDO BOTÃO
	$("#button02").click(function(){
		$("#ret1").animate({
			opacity: '0.2',
			height: '40px',
			width: '40px'
		});
	$("#ret2").animate({
			opacity: '1',
			height: '80px',
			width: '80px'	
		});
	$("#ret3").animate({
			opacity: '0.2',
			height: '40px',
			width: '40px'
		});			
	});
	
	// CLICANDO NO TERCEIRO BOTÃO
	$("#button03").click(function(){
		$("#ret1").animate({
			opacity: '0.2',
			height: '40px',
			width: '40px'
		});
		$("#ret2").animate({
			opacity: '0.2',
			height: '40px',
			width: '40px'
		});
		$("#ret3").animate({
			opacity: '1',
			height: '80px',
			width: '80px'		
		});			
	});
});