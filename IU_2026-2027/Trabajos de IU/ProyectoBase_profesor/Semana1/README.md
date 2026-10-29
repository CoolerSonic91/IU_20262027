# Contenido #

## Semana 1 ##

* practica1.html 

html con un elemento de lista ordenada lo,

donde cada elemento de lista li contine un elemento a con atributo href de hiperenlace llamando a otro fichero html y como contenido del elemento a se encuentra un string.

``` html
<!DOCTYPE html>
<html>

<head>
	
</head>

<body>
<!-- menu con listas en html -->	
		<ol>
		    <li class="opcionmenu"><a href="practica1-1.html">Formulario Base</a></li>
		    <li class="opcionmenu"><a href="practica1-2.html">Formulario Base con Divs semánticos</a></li>
		    <li class="opcionmenu"><a href="practica1-3.html">Colocando bordes CSS con clases</li>
	  	</ol>
		
</body>


</html>
```

* practica1-1.html

html con el mismo contenido que el fichero practica1.html. Se ha incorporado ademas un elemento form con sus atributos
action
method 
enctype

y una lista de elementos de formulario:

label
input (type: text, number, email, date)
input (type: file)
fielset
legend
input (type: submit)

``` html
<ol>
		    <li class="opcionmenu"><a href="practica1-1.html">Formulario Base</a></li>
		    <li class="opcionmenu"><a href="practica1-2.html">Formulario Base con Divs semánticos</a></li>
		    <li class="opcionmenu"><a href="practica1-3.html">Colocando bordes CSS con clases</a></li>
	  	</ol>
		<form action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data">
			<label for="name">Name:</label>
			<input type="text" id="name" name="name-enviado-por-javi" required>
			<br>
			<label for="age">Age:</label>
			<input type="number" id="age" name="age-enviado-por-javi" required>
			<br>
			<label for="email">Email:</label>
			<input type="email" id="email" name="email-enviado-por-javi" required>
			<br>
			<label for="date">Date:</label>
			<input type="date" id="date" name="date-enviado-por-javi" required>
			<br>
			<label for="photo">Photo:</label>
			<input type="file" id="file" name="file-enviado-por-javi[]" required>
			<br>
			<label for="photo1">Photo1:</label>
			<input type="file" id="file1" name="file-enviado-por-javi[]" required>
			<br>
			<fieldset>
				<legend>Selecciona tu opción</legend>
				Sin selección: <input type="checkbox" id='no_choice' name="eleccion_enviado_por_javi[]" value="no_choice" checked><br>
				Selección 1: <input type="checkbox" id='eleccion1' name="eleccion_enviado_por_javi[]" value="uno"><br>
				Selección 2: <input type="checkbox" id='eleccion2' name="eleccion_enviado_por_javi[]" value="dos"><br>
				Seleccion 3: <input type="checkbox" id='eleccion3' name="eleccion_enviado_por_javi[]" value="tres"><br>
			</fieldset>
			<input type="submit" value="Submit">
		</form>
```

Este es un formulario genérico unicamente para demostrar el uso de formularios con algunos tipos de elementos de formulario y el uso de elementos de formulario con múltiples valores.

Se ha proporcionado un punto de entrada a back en el cual se reciben los datos por POST y devuelve la información que se ha recibido del formulario a través de POST y de FILES. Siendo POST el método http de envío al back y FILES la variable de envio de ficheros a través del estándar http y POST.

* practica1-2.html

En esta página se han colocado elementos de html semántico en los elementos block que configuran la estrutura principal de la página html. Los elementos semánticos corresponden con elementos que cumpliendo la función de elementos div, proporcionan con su nombre una indicación semántica de su utilidad o propósito al ser utilizados en la página.

``` html

<header id='header_page' class='bordeado'>Título Superior</header>
	<nav class='bordeado'>Opciones de ménu
		<ol>
		    <li class="opcionmenu"><a href="practica1-1.html">Formulario Base</a></li>
		    <li class="opcionmenu"><a href="practica1-2.html">Formulario Base con Divs semánticos</a></li>
		    <li class="opcionmenu"><a href="practica1-3.html">Colocando bordes CSS con clases</li>
	  	</ol>
	</nav>
	<section class='bordeado'>
		<form action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data">

		  <label for="name">Name:</label>
		  <input type="text" id="name" name="name-enviado-por-javi" required>
		  <br>

		  <label for="age">Age:</label>
		  <input type="number" id="age" name="age-enviado-por-javi" required>
		  <br>
		  
		  <label for="email">Email:</label>
		  <input type="email" id="email" name="email-enviado-por-javi" required>
		  <br>

		  <label for="date">Date:</label>
		  <input type="date" id="date" name="date-enviado-por-javi" required>
		  <br>

		  <label for="photo">Photo:</label>
		  <input type="file" id="file" name="file-enviado-por-javi" required>
		  <br>

		  <fieldset>
				<legend>Selecciona tu opción</legend>
				Sin selección: <input type="checkbox" id='no_choice' name="eleccion_enviado_por_javi[]" value="no_choice" checked><br>
				Selección 1: <input type="checkbox" id='eleccion1' name="eleccion_enviado_por_javi[]" value="uno"><br>
				Selección 2: <input type="checkbox" id='eleccion2' name="eleccion_enviado_por_javi[]" value="dos"><br>
				Seleccion 3: <input type="checkbox" id='eleccion3' name="eleccion_enviado_por_javi[]" value="tres"><br>
			</fieldset>

		  <input type="submit" value="Submit">

		</form>
	</section>
	<article class='bordeado'>Sección article</article>
	<footer class='bordeado'>Pie de página</footer>

```


* practica1-3.html

En esta página se han incluido actuaciones sobre estilos y acciones de eventos.

Estilos: 

En el head de la página html se han definido dos estilos para aplicar sobre elementos html de la página. En el primero se ha definido mediante un "." un estilo sobre una clase. Este se aplicará a todos aquellos elementos que tengan este valor "bordeado" en el atributo class. Se le coloca un borde solido de 1 pixel de ancho. No se le coloca color y por lo tanto asumirá el color por defecto que se indique el navegador.

En el segundo se asigna al contenido de un elemento block las características de tamaño de fuente y de alineamiento de texto.

``` html
<style>
	.bordeado{
		border-width: 1px;
		border-style: solid;
	}
	#header_page{
		font-size: 26px;
		text-align: center;
	}
	</style>
```


