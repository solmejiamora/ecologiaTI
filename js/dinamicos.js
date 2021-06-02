function mover(){
	window.scrollBy({
		top:2100,
		left:0,
		behaviour:"smoth"

	});
}
function pintar(){
	let simbolo=document.getElementById("simbolo");
	simbolo.style.color='#66D37E';
}
function despintar(){
	let simbolo=document.getElementById("simbolo");
	simbolo.style.color='#000';
}
window.onscroll=function(){desaparecer();};

function desaparecer(){
	let simb=document.getElementById("simbolo3");
	if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 500){
		simb.style.color='#66D37E';
		$("#imagen2").show(1000);
		
	}else{
		simb.style.color='#CCFFDD';
	}
	
}
function ocultar(){
	$("#imagen3").hide(2000);
}