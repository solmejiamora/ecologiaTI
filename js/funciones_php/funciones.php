<?php
	$conexion = mysqli_connect('localhost', 'root', '', 'tecnologiasemergentes');
	if(!$conexion){
		die('Conexion failed'. mysqli_error($conexion));
	}
	if(isset($_POST['save'])){
		$nom = $_POST['name'];
		$correo = $_POST['email'];
		$tel = $_POST['phone'];
		$comen = $_POST['comment'];
		$fecha = $_POST['date'];

		$insertar = "INSERT INTO comentarios (nombre, fecha, comentario, correo, telefono) VALUES ('{$nom}', '{$fecha}', '{$comen}', '{$correo}', '{$tel}')";
		if(mysqli_query($conexion, $insertar)){
			$id = mysqli_insert_id($conexion);
			$guardado = '
			<li>
			<article>
			<header>
			<figure class="avatar"><img src="../images/demo/avatar.png" alt=""></figure>
			<address>
			By <a href="#">"'. $nom .'"</a>
			</address>
			<time datetime="2045-04-06T08:15+00:00">"'. $fecha .'"</time>
			</header>
			<div class="comcont">
			<p> "'. $comen .'" </p>
			</div>
			</article>
			</li>

			';
			echo $guardado;
		}else{
			echo "Error: ". mysqli_error($conexion);
		}
		exit();
	}

	$consulta = "SELECT * FROM comentarios";
	$resultado = mysqli_query($conexion, $consulta);
	$mostrar = "";
	while ($fila = mysqli_fetch_array($resultado)){
		$mostrar .='
			<p>
			<header>
			<div>
			By: <a>'. $fila['nombre'] .'</a>
			</div>
			<div>
			Fecha: <time datetime="2045-04-06T08:15+00:00">'. $fila['fecha'] .'</time>
			</div>
			</header>
			<div class="comcont">
			Mensaje:<p> '. $fila['comentario'] .'</p>
			</div>
			</p>
			';
			
	}


?>