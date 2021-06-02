const formulario= document.getElementById('formulario');
const inputs= document.querySelectorAll('#formulario input');
const expresiones ={
	nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
	correo: /^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	

}
const campos={
	nombre:false,
	email:false,
	

}
const validarFormulario = (e) =>{
	switch (e.target.name) {
		case 'name':
			if (expresiones.nombre.test(e.target.value)){
				document.getElementById('errorname').classList.add('input-error');
				document.getElementById('errorname').classList.remove('input-error-activo');
				campos.nombre=true;
			}else{
				document.getElementById('errorname').classList.remove('input-error');
				document.getElementById('errorname').classList.add('input-error-activo');
				campos.nombre=false;
			}
			break;
		case 'email':
			if (expresiones.correo.test(e.target.value)){
				document.getElementById('erroremail').classList.add('input-error');
				document.getElementById('erroremail').classList.remove('input-error-activo');
				campos.email=true;
			}else{
				document.getElementById('erroremail').classList.remove('input-error');
				document.getElementById('erroremail').classList.add('input-error-activo');
				campos.email=false;
			}
			break;
		
		
		
	}
}
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if(campos.nombre && campos.email ){
		
		document.getElementById('exito').classList.add('mensaje-exito-activo');
		setTimeout( () =>{
			document.getElementById('exito').classList.remove('mensaje-exito-activo');
		}, 5000);
		formulario.reset();
		
				
	}else{
		document.getElementById('no-exito').classList.add('mensaje-activo');
		setTimeout( () =>{
			document.getElementById('no-exito').classList.remove('mensaje-activo');
		}, 5000);

	}
});


