# Contenido #

## Semana 2 ##

### Propósito ###

Se pretende hacer una página html que contenga todos los componentes visuales necesarios para hacer la gestión (altas, bajas, modificaciones, borrados y detalle) de una entidad de la base de datos.
El menú se usa para acceder a cada entidad que se quiere manejar instanciando la clase de la entidad.
El menú se debe ocultar o mostrar según se desee.
En este ejemplo se plantea para una entidad solamente la validación de una operación de alta de usuario.
La validación se hará a nivel de cada campo del formulario mediante un evento asociado al campo después de que el usuario introduzca el valor.
Existirá tambien una validación a nivel de submit que comprobará que todos los campos son correctos para poder dejar ejecutar el action del formulario.
El ejemplo no esta completo para que se pueda completar por los alumnos.

### index.html ###

html con un conjunto de divs semánticos en el body que estructuran la página con:

- header para poner la cabecera de la página

- nav para mostrar/ocultar menu

- aside para las opciones del menu

- section para el formulario

- article por si es necesario

- footer para pie de pagina

- script js para ocultar los elementos necesarios cuando se cargan y declarar la función para ocultar y mostrar las opciones de menú.

En el header se carga:

- la clase js de la entidad persona

- el css que se usa para formatear la apariencia

- la clase para definir las operaciones sobre los objetos del dom

- la clase para definir las validaciones atomicas estandar disponibles para todos los campos de formulario.

Algunos detalles en el index.html:

Los campos del formulario tienen un evento asociado para llamar al método de validación del campo del formulario. El evento onblur() es un evento que se dispara cuando el foco del apuntador sale del campo, en ese momento invoca el método. 
Ademas para cada campo de formulario se indica la estructura donde se mostrará la información del error cometido en el campo si es necesario. 
Si se produce un error se mostrará un texto con el error y se pondrá el borde del campo en rojo. En caso contrario no se mostrará texto de error y se pondrá el borde en verde (se vera cuando se explique la clase dom)

``` html

            <label class="label_dni">dni</label>
			<input type='text' id='dni' name='dni' onblur=" return entidad.ADD_dni_validation();"></input>
			<span id="span_error_dni"><a id="error_dni"></a></span>
			<br>

```

Existe un evento onsubmit() asociado al formulario que se dispara cuando el usuario realiza el submit y que en función de su respuesta (true/false) enviará la información al action o bien la paralizará.

``` html

<form action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="if (typeof entidad.ADD_submit_persona() === 'object') {return false} else {return true};">


```

En este caso, como la función de validación de submit devuelve un true si todos los campños son correctos o un objeto con todos los errores de los campos del formulario si existen errores. El código en el evento submit comprueba si lo que llega es un objeto en cuyo caso devuelve un false o si devuelve un true en cuyo caso devuelve el true y permite que se ejecute el action.

### persona_Class.js ###

Esta es la clase que se crea para definir la funcionalidad que tendrá la entidad persona. Por el momento, se establecerá la funcionalidad completa de la entidad en la clase que la contiene, pero según se vaya identificando funcionalidad común a todas las entidades estas se irán colocando en una clase superior de la cual puedan heredar todas las entidades simplificando el desarrollo y mantenimiento y dejando en cada entidad solo la funcionalidad que sea exclusiva y particular de dicha entidad.

Esta clase persona debe contener:
- los métodos para validar cada uno de los campos y validar el submit del formulario para todas las acciones
- los metodos para la visualización de información resultado de SEARCH y la gestión de menús para la propia entidad. (por el momento se incluyen en la página index.html, pero eso tendra que pasar a propia entidad en el momento que se manejen varias entidades)

En la clase está el código para la acción ADD la validación de dos atributos y la validación de submit.

Este es el código correspondiente a la validación para el ADD del campo con id dni.

``` js

    /**
		
		@param 
		@return {string/bool} Error code of field value (fieldname_validationfunction_KO) or true due the field value is correct

	*/

	ADD_dni_validation(){
		
		if (!(this.min_size('dni',9))){
			this.dom.mostrar_error_campo('dni','dni_min_size_KO');
			return "dni_min_size_KO";
		}
		if (!(this.max_size('dni',9))){
			this.dom.mostrar_error_campo('dni','dni_max_size_KO');
			return "dni_max_size_KO";
		}
		if (!(this.format('dni', '[0-9]{8}[A-Z]{1}'))){
			this.dom.mostrar_error_campo('dni','dni_format_KO');
			return "dni_format_KO";
		}
		this.dom.mostrar_exito_campo('dni');
		return true;

	}

```

El método ADD_dni_validation() lo que hace es realizar todas las comprobaciones sobre el valor del campo (usando los métodos generales de la clase Validaciones) y si alguna falla llama al método del dom que muestra el error en el campo y devuelve el codigo de error asociado al error encontrado. En caso de que no se encuentre ningún error se muestra la información de campo correcto y se devuelve un true para la validación de ese campo en esa acción.

Este el código correspondiente a la validación de submit, en el cual se realizan las validaciones de todos los campos del formulario y se devuelve un true si todos son correctas y un objeto con la información de validación de todos los campos si alguno no es correcto. En la ejecución dinámica (con los usuarios) de la validación de los formularios no se utiliza el objeto con la información de error de los campos, pero es necesaria para la ejecución automática de tests.

``` js

/**
	 
		@param
		@return	{bool/object} true if all fields validations are ok or object with the ids of elements and error code if field validation is not ok and true if field validation is ok
	
	*/

	ADD_submit_persona(){

		// object to store de fields validations
		var set_result = {};

		// store in key (id element) value (result of field validation method)
		set_result.dni = this.ADD_dni_validation();
		set_result.nombre_persona = this.ADD_nombre_persona_validation();

		// calculate combination of all field validations
		let result = (
					(set_result.dni) &
					(set_result.nombre_persona)
					)
		
		// convert the result to boolean
		result = Boolean(result);

		// if boolean and true return true
		if ((typeof result === 'boolean') && (result == true)){
			return result;
		}// if not boolean or false return the object with id element as key and code error as value
		else{
			return set_result;
		}
		

	}

```

### Dom_Class.js ###

En esta clase se encuentran los métodos para la modificación dinámica del DOM con el objeto de separarlos del javascript de comportamiento y del html de estructuración de contenidos.

El método mostrar_error_campo recibe un id y un codigo de error. Cambia el borde del elemento con ese id y pone al lado el código de error. Cuando hagamos el módulo multiidioma modificaremos este método para que sea capaz de trabajar con las traducciones del código de error a cada idioma.

``` js

    /**
	 	Modifica el aspecto del campo en función de si tiene un error. Borde rojo y mensaje de error si tiene error
		
		@param 
	  		{string} id es el id del campo del formulario al cual se va mostrar el error 
			{string} codigoerror es el código del error a mostrar para ese campo del formulario
		
	*/
	mostrar_error_campo(id, codigoerror){
		document.getElementById('span_error_'+id).style.display = 'inline';
		document.getElementById('error_'+id).innerHTML = codigoerror;
		document.getElementById(id).style.borderBlockColor = 'red';
		document.getElementById('submit_button').focus();
	}


```

### Validations_Class.js ###

En esta clase se definen las validaciones básicas sobre los valores de manera que puedan ser utilizadas en todos los campos del formulario si son necesarias. Todas ellas reciben un id de un elemento y un valor de comparación (si es necesario) y devuelven true si el valor de elemento cumple el valor de comparación y false si no lo cumple.

Como el acceso al valor de los campos del formulario no es la misma en todos los campos se hace una discriminación interna para en función del tipo de campo de formulario acceder a su valor. Cada uno puede modificar el contenido y estructura de esta clase si considera que se ajusta mejor a su modo de programación pero deben mantenerse obligatoriamente el nombre de los métodos que se invocan desde la validación de campos y la respuesta que proporcionan.

``` js

    /**
		devuelve true si el valor del id cumple el criterio

		@name min_size
		@param {string} id Id objeto dom
		@param {number} minsize tamaño minimo a validar
		@return {bool} true si correcto false si no correcto

	*/
	min_size(id, minsize){
		let elemento = document.getElementById(id);
		switch (elemento.tagName){
			case 'INPUT':
				switch (elemento.type){
					case 'number':
					case 'email':
					case 'text':
						let valorelemento = elemento.value;
						if (valorelemento.length<minsize){
							return false;
						}
						else{
							return true;
						}
						break;
					case 'file':
						break;
					default:
						break;
				
				}
				break;
			case 'SELECT':
				break;
			default:
				break;
		}

	}

```


