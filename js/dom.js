//SELECCIONAR ELEMENTOS DEL DOM

let parrafos= document.getElementById('parrafo');

parrafos.innerHTML = '<ul> <li> Método para obtener un elemento por su ID </li></ul>';

let encabezados  = document.getElementsByClassName("desc")
encabezados[0].style.color= 'blue';

let inputs =document.getElementsByName('email');
inputs[0].style.marginBottom  = '25px';
inputs[0].style.background = 'blue';

let tags = document.getElementsByTagName("p");
tags[0].style.fontSize='xx-large';
tags[1].style.fontSize='xx-small';
tags[2].style.fontSize='small';
tags[3].style.fontSize='50px';


//TAREA EN ESTA PRACTICA
//AGREGAR LOS METODOS querySelector() y querySelectorAll()
function myFunction() {
    document.querySelector(".example").style.color = "red";
}

//QUERY SELECTORALL()
let color = document.querySelectorAll('#prueba .clase');
color[0].style.backgroundColor='blue';
color[1].style.backgroundColor='green';
color[2].style.backgroundColor='purple';
color[3].style.backgroundColor='orange';
color[4].style.backgroundColor='red';
    
//funciones para crear elementos en el dom
const div = document.createElement("div");
const p= document.createElement("p");
const span= document.createElement("span");
const comentario = document.createComment("Las etiquetas anteriores se crearon en JS");
const texto=document.createTextNode("Un texto de JS");    
    
div.textContent="Es un perrito muy tierno"; //Este es el primer div
p.innerHTML='<b>Es  de color blanco y muy chiquito</b>';
span.innerHTML='<i>Perritos 28</i>';
const div2= div.cloneNode(); //Clonar un nodo
div2.textContent="Este es el segundo DIV que esta clonado";

//alert(span.isConnected());
div.id="creado";
div.className="desc";
div.style="color: red;";


const contenedor = document.getElementsByClassName('imagenes');
contenedor[0].appendChild(div);//Agregar los nodos a un elemento
div.onclick=tarea;
function tarea(){
const imagen =document.createElement("img");
imagen.src="https://i.pinimg.com/originals/70/fa/97/70fa97bac09e524bae4c006a1ead5512.jpg";
imagen.alt="Imagen de perritos";
contenedor[0].appendChild(imagen);
contenedor[0].appendChild(p);
contenedor[0].appendChild(span);}
//TAREA PROGRAMAR PARA QUE CUANDO LE DEMOS CLIC EN EL TITULO DE ES UN PERRITO MUY TIERNO APAREZCA LA IMAGEN 

//EDICION DE CLASES EN EL DOM 
const parrafo=document.querySelector(".estilo1");
console.log(parrafo.className);
parrafo.className="estilo2 mensaje-activo mensaje-exito";
parrafo.style='display:block; color:purple;';
console.log(parrafo.className);

const clasess= document.getElementById('parrafo');
clasess.classList.remove("mensaje-exito");
clasess.classList.remove("estilo2");
clasess.classList.add("estilo1");
clasess.classList.toggle("mensaje-activo");
clasess.classList.replace("estilo1", "estilo2");
console.log(clasess.classList.contains("estilo1"));
console.log(clasess.classList.item(0));

//Navegacion de elementos 

$(document).ready(function(){
	ocultar();
	mostrar();
});
//Callbacks
function ocultar(){
	setTimeout(function(){
		$('.imagenes').hide(2000, function(){
			console.log("Ya desaparecio la imagen");
		});
	}, 3000);
}

function mostrar(){
	setTimeout(function(){
		$('.imagenes').show(3000);
	}, 3000);
	flecha();
}

function flecha(){
	const myCallback = () => console.log("Este es un callback de flecha.");
	setTimeout(myCallback, 2000);
	promesa1();
}

// Promesas
function promesa1(){
	const direccionActual = document.URL.toString();
	const promise = fetch(direccionActual);
	promise.then(resultado => console.log(resultado), error => console.log("Error: " + error ));
	promesa2();
}

function promesa2(){
	fetch(document.URL.toString()).then(resultado => console.log(resultado)).then( ()=> console.log("Pagina mostrada bien")).catch( e => console.log('Error pasa algo: ' + e) );
	asincrono();
}

//Asyc / Await
function asincrono(){
	const revisarUrl = async (url) => {
		const respuesta = await fetch(url);
		return `Estado del sitio: ${respuesta.status === 200 ? "OK" : "NOT OK"}`; 
	}
	revisarUrl("https://www.facebook.com").then(result => console.log(result));
}