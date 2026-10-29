# Contenido #

## Semana 5 ##

### Propósito ###
Esta semana se van a crear los formularios para cada accion a realizar. El código de la semana pasada dejaba una tabla con las tuplas de la entidad resultado de un SEARCH. Para cada tupla existe un icono que al hacer click sobre el llama al método createForm_accion correspondiente pasandole la fila de datos a la cual pertenece. 

Se ha realizado una actualización de métodos para descargar la clase de entidad y pasar métodos invocables a sus correspondientes clases. 

Se ha creado la clase dom_fields para tratar los elementos de formulario que hacemos en los test. Se ha creado la clase dom_form para tratar los formularios mas facilmente en los createForm. Ambas se han colocado en herencia entre ellas hasta llegar al dom para poder usarlas todas instanciando la clase dom.

Se ha creado la clase AbstractEntidad para tener todos lo métodos comunes al manejo de todas la entidades y que puedan invocar los métodos personalizados de las clases de entidad.

También crea un icono para las acciones de ADD y SEARCH que llaman a sus métodos correspondientes de createForm_accion pero sin datos como parámetros.

Se ha modificado el método manual_form_creation(), para que sea una representación simplificada y sin parámetros del formulario que queremos crear acerca de la entidad. Este formulario servirá para poder añadir todos los atributos en particular. En el mismo se ha eliminado el boton de submit para sustituirlo por una imagen acorde a la acción.

``` js

/**
	 * replace the content of section element with a particular entity menu
	 * @returns 
	 */
	manual_form_creation(){
		var form_content = `
			<form id = 'form_iu' action="" method="POST" enctype="multipart/form-data" onsubmit="" class='formulario'>

				<label class="label_dni">dni</label>
				<input type='text' id='dni' name='dni'></input>
				<span id="span_error_dni"><a id="error_dni"></a></span>
				<br>
				
				<label class="label_nombre_persona">Nombre de pila</label>
				<input type='text' id='nombre_persona' name='nombre_persona' ></input>
				<span id="span_error_nombre_persona" ><a id="error_nombre_persona"></a></span>
				<br>
				
				<label class="label_apellidos_persona">apellidos</label>
				<input type='text' id='apellidos_persona' name='apellidos_persona'></input>
				<span id="span_error_apellidos_persona" ><a id="error_apellidos_persona"></a></span>
				<br>
				
				<label class="label_fechaNacimiento_persona">Fecha de Nacimiento</label>
				<input type='text' id='fechaNacimiento_persona' name='fechaNacimiento_persona'></input>
				<span id="span_error_fechaNacimiento_persona" ><a id="error_fechaNacimiento_persona"></a></span>
				
				<br>
				<label class="label_direccion_persona">Dirección Postal</label>
				<textarea rows="5" cols="33" type='text' id='direccion_persona' name='direccion_persona'></textarea>
				<span id="span_error_direccion_persona" ><a id="error_direccion_persona"></a></span>
				<br>

				<label class="label_telefono_persona">Teléfono Persona</label>
				<input type='text' id='telefono_persona' name='telefono_persona'></input>
				<span id="span_error_telefono_persona" ><a id="error_telefono_persona"></a></span>
				
				<br>
				<label class="label_email_persona">Correo Electronico</label>
				<input type='text' id='email_persona' name='email_persona'></input>
				<span id="span_error_email_persona" ><a id="error_email_persona"></a></span>

				<br>
				<label id="label_foto_persona" class="label_foto_persona">Foto Persona</label>
				<input type='text' id='foto_persona' name='foto_persona'></input>
				<span id="span_error_foto_persona"><a id="error_foto_persona"></a></span>
				<a id="link_foto_persona" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/"><img src="./iconos/FILE.png" /></a>
				
				<label id="label_nuevo_foto_persona" class="label_nuevo_foto_persona">Nueva Foto Persona</label>
				<input type='file' id='nuevo_foto_persona' name='nuevo_foto_persona'></input>
				<span id="span_error_nuevo_foto_persona"><a id="error_nuevo_foto_persona"></a></span>
				<br>

			</form>
		`;
		return form_content;
		
	}


```


``` js

	createForm_EDIT(fila){

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		// rellenar onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.EDIT_submit_'+this.nombreentidad);
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		//activar el link al fichero
		this.dom.assign_property_value('link_foto_persona', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+fila.foto_persona);
		
		// modificar presentacion (en este caso concreto para fecha)
		fila.fechaNacimiento_persona = this.cambiarformatoFecha(fila.fechaNacimiento_persona);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);
		
		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','EDIT');

		// poner inactivos los campos correspondientes
		this.dom.assign_property_value('dni','readonly','true');
		this.dom.assign_property_value('foto_persona','readonly','true');

		// colocar boton de submit
		this.dom.colocarboton('EDIT');

	}

```

El Create Form Edit recibe como parámetro la fila de datos correspondiente a la dupla, en la cual hacemos la acción de editar. 

Lo primero que hacemos en este método, es poner la versión limpia del formulario de la entidad en su div correspondiente y ponerlo visible. 

A continuación, rellenamos los atributos action y onsubmit. Para no tener que estar accediendo al documento en la entidad, he creado un método (assign_property_value()). En él, indicándole el elemento HTML, la propiedad y el valor se le asigna fuera de la clase entidad con este método.

Después, dado que es una acción Edit, y por lo tanto lleva tanto el elemento HTML de foto_persona como el elemento HTML de nuevo_foto_persona, tenemos que asignar un valor de hiperenlace al elemento HTML, que representa el link al fichero de foto_persona. Para ello, construimos el hiperenlace que tiene la base de la URL (http://193.147.87.202/ET2/filesuploaded/files_foto_persona/) y le concatenamos el contenido de foto_persona que viene en la fila de la tupla y con lo cual hemos creado un hiperenlace al fichero asociado a esta dupla.

Después de ello modificamos la presentación de fechaNacimiento_persona. El atributo fechaNacimiento_persona viene de la base de datos en formato año-mes-día separado por guiones y queremos mostrarlo como día/mes/año separado por barras. Por eso antes de introducirlo en el formulario modificamos el objeto fila en su propiedad fechaNacimiento_persona por su valor cambiado de formato para hecho. Para eso se ha hecho un método (cambiarformatoFecha()) que estará en la propia clase, porque es dependiente de la entidad.

``` js

/**
	 * Modifica el formato del string de fecha recibido como parametro a la salida que queremos
	 * recibe aaaa-mm-dd y devuelve dd/mm/aaaa
	 * 
	 * @param {*} stringfecha 
	 * @returns fecha en formato dd/mm/aaaa
	 */
	cambiarformatoFecha(stringfecha){

		var elementos = stringfecha.split('-');

		var day = elementos[2];
		var month = elementos[1];
		var year = elementos[0];
		
		return day+'/'+month+'/'+year;

	}

```


A continuación vamos a rellenar los elementos del formulario que permiten recoger información en cada uno de ellos. Le asignaremos el valor que tiene el atributo en la dupla a su correspondiente elemento HTML de introducción de información, en vez de poner los todos los valores de los elementos del formulario en el método createForm_EDIT, hemos creado un método (rellenarvaloresform()) que recorre todos los elementos del formulario que recogen valores y dependiendo de su Tag y de su tipo, introduce su valor dentro del elemento.

``` js
/**
	 * rellena cada elemento del formulario con el valor que viene en la fila
	 * 
	 * @param {Object} parametros el objeto con la información de la fila
	 * trae por cada atributo su id y su valor
	 */
	rellenarvaloresform(parametros){
		
		//obtener campos del formulario
        	let campos = document.forms['form_iu'].elements;
        	//recorrer todos los campos
        	for (let i=0;i<campos.length;i++) {
				switch (document.getElementById(campos[i].id).type){
					case 'file':
						break;
					case 'submit':
						break;
					case 'textarea':
						document.getElementById(campos[i].id).innerHTML = parametros[campos[i].id];
					default:
						document.getElementById(campos[i].id).value = parametros[campos[i].id];
				}
        	}
	}

```

A continuación, colocamos las validaciones correspondientes al Edit. Para ello también hemos creado un método (colocarvalidaciones()) que recorre todos los elementos que tiene el formulario. Dependiendo de su Tag le asigna un evento u otro y asocia al evento la función de validación de ese atributo para esa acción.

``` js
/**
	 * Coloca en el formulario para cada elemento de entrada un evento (dependiente
	 * del tipo de elemento) al cual enlaza la validacion de ese campo para la accion
	 * que se le indica
	 * 
	 * @param {String} accion  accion a realizar en el formulario
	 */
	colocarvalidaciones(idform, accion){
		
		let evento;
		//obtener campos del formulario
        	let campos = document.forms[idform].elements;
        	//recorrer todos los campos
        	for (let i=0;i<campos.length;i++) {
			if ((document.getElementById(campos[i].id).tagName == 'INPUT') && 
				(document.getElementById(campos[i].id).type !== 'file')){
		                evento = 'onblur';
			}
			else{
				evento = 'onchange';
			}
			
			if (document.getElementById(campos[i].id).type == 'submit'){}
			else{
				document.getElementById(campos[i].id).setAttribute (evento,'entidad.'+accion+'_'+campos[i].id+'_validation'+'();');
			}		        
		}
	}

``` 

Después tenemos que colocar los elementos que no son editables en el formulario para la acción que estamos tratando. En este caso como es un Edit la clave primaria no puede modificarse por el usuario y además como tenemos un campo fichero el nombre del campo en el input text contiene el nombre del campo que está almacenando en la tupla tampoco es modificable. Si el usuario quiere modificar el fichero tiene que subir un fichero nuevo por eso se ponen las propiedades readonly a true en ambos campos.

A continuación colocamos el boton de submit con la imagen adecuada para la acción del formulario. Para ello creamos un metodo (colocarboton()) que crea un botón, se coloca una imagen, y se pone de tipo submit.

``` js

/**
	 * Construye un boton de submit con el icono correspondiente 
	 * 
	 * @param {String} accion accion a realizar
	 */
	colocarboton(accion){

		let divboton = document.createElement('div');
		divboton.id = 'div_boton';
		//divboton.stype.display = 'block';
		document.getElementById('form_iu').append(divboton);
		let boton = document.createElement('button');
		boton.id = 'submit_button';
		boton.type = 'submit';
		let img = document.createElement('img');
		img.src = './iconos/'+accion+'.png';
		boton.append(img);
		document.getElementById('div_boton').append(boton);

	}


```


En los createForm para DELETE y SHOWCURRENT a diferencia de los formularios anteriores es que en estos formularios todos los campos son presentados con su información, pero todos ellos se ponen desactivados para que el usuario no pueda modificarlos. En el caso del delete, se coloca el botón correspondiente a la acción, pero en el caso del Show current como la muestra de detalle de una tupla, no conlleva una acción en la base de datos y no se presenta botón de acción y se deja simplemente el botón de volver atrás.

Se ha creado un método para poder recorrer todos los elementos del formulario y ponerlos todos con la propiedad readonly igual a true.


``` js
	/**
	 * 
	 * @param {String} idform id del formulario en donde se van a colocar todos sus elementos a readlonly true
	 */
	colocartodosreadonly(idform){
		let campos = document.forms[idform].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
			document.getElementById(campos[i].id).setAttribute('readonly',true);
		}
	}

```

Se habia indicado en la Semana 4 en el código de la clase, qué métodos son susceptibles de ser llevados a la clase Dom, y cuáles son susceptibles de estar en una superclase de la de la clase de la entidad particular. Es interesante que los métodos generales que están en la superclase y son usados por todas las entidades, pueden ser refactorizados en la clase de la entidad para personalizar su funcionamiento.

En el código de la semana anterior, creamos el método de la acción Search, que nos permitía llamar a la clase external Access a su método peticiónBackGeneral en donde se realizaba la acción. Si venían tuplas en la petición de Search, se mostraban en una tabla y si no venían tuplas se colocaba un texto de no existen tuplas en lugar de la tabla. Se han desarrollado los métodos correspondientes a la acción ADD, EDIT y DELETE, las cuales son acciones atómicas y que no devuelven nada. Por ello los tres métodos funcionan de forma similar, si la acción se ejecuta sin problema se elimina el formulario y se llaman Search() y si dan un error en el Back se muestra ese error mediante un modal. En la semana cinco como no está todavía incorporado el código de traducción de textos no se ve el texto del código de error, sino que se sitúa simplemente en el class de la ventana modal, que incorpora un boton de cerrar el modal.

``` js

/**
	 * el método realiza una petición de ADD al back enviando un formulario con datos, enviando 
	 * el nombre de la entidad del back y la acción a realizar sobre la misma.
	 * los datos respondidos se usan para indicar si se realizo la accion con lo mostramos la
	 * tabla de datos o bien se muestra el error proporcionado por el back
	 */
	async ADD(){
    
        await this.access_functions.peticionBackGeneral('form_iu', this.nombreentidad, 'ADD')
        .then((respuesta) => {
            
            if (respuesta['ok']){
            
				//limpiar el formulario
				document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();

	            //poner el div del formulario no visible
				//limpiar titulo formulario

	            this.dom.hide_element("Div_IU_form");

	            this.SEARCH();

	        }
	        else{

	        	// mostrar mensaje error accion
	        	// alert('error : '+respuesta['code']);

				// Usando modal
				this.dom.abrirModalError(respuesta['code']);
	        }

			//setLang();

        });
    
    }

```
