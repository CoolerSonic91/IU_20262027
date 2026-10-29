class dom extends dom_table {

	constructor(){
		super()
	}

		/**
	 * pone visible block el elemento con el id proporcionado
	 * @name show_element
	 * @param {string} id id de un elemento html
	 */
	show_element(id){
		document.getElementById(id).style.display = 'block';
	}

	/**
	 * pone la propiedad style.display del elemento id a none
	 * @param {String} id 
	 */
	hide_element(id){
		document.getElementById(id).style.display = 'none';
	}
	
	/**
	 * 
	 * Oculta el id y el label_id elementos de un formulario relacionado con un atributo
	 * 
	 * 
	 * @param {String} id 
	 * 
	 */
	hide_element_form(id){
		this.hide_element('label_'+id);
		this.hide_element(id);
	}

	/**
	 	Modifica el aspecto del campo en función de si tiene un error. Borde rojo y mensaje de error si tiene error
		@name mostrar_error_campo
		@param {string} id es el id del campo del formulario al cual se va mostrar el error 
		@param {string} codigoerror es el código del error a mostrar para ese campo del formulario
		
	*/
	mostrar_error_campo(id, codigoerror){
		document.getElementById('span_error_'+id).style.display = 'inline';
		document.getElementById('error_'+id).innerHTML = codigoerror;
		document.getElementById(id).style.borderBlockColor = 'red';
		document.getElementById('submit_button').focus();
	}
	/**
	 	Modifica el aspecto del campo en función de si no tiene un error. Borde verde si correcto
		
		@param {string} id es el id del campo del formulario al cual se va mostrar el error 
		@param {string} codigoerror es el código del error a mostrar para ese campo del formulario
		
	*/
	mostrar_exito_campo(id){
		document.getElementById('span_error_'+id).style.display = 'none';
		document.getElementById('error_'+id).innerHTML = '';
		document.getElementById(id).style.borderBlockColor = 'green';
	}

	/**
		coloca el contenido html en un contenedor visible inline 
		@param {string} contenido html
		@param {string} id del contenedor donde colocar el contenido
	*/
	fillHtmlContent(contenido, idcontenedor){
		document.getElementById(idcontenedor).innerHTML = contenido;
		document.getElementById(idcontenedor).style.display = 'inline';
	}
	/**
		coloca el contenido html en el div 
		@param {string} contenido html
		@param {string} id del div donde colocar el contenido
	*/
	fillform(formdata, idform){
		document.getElementById(idform).innerHTML = formdata;
		document.getElementById(idform).style.display = 'block';
	}

	/**
	 * se indica el id de un elemento, se pasa un atributo a modificar y el 
	 * valor que quiere que tenga
	 * 
	 * @param {String} id 
	 * @param {String} propiedad 
	 * @param {String} valor 
	 */
	assign_property_value(id, propiedad, valor){
		document.getElementById(id).setAttribute(propiedad, valor);
	}

	/**
	 * abrir el modal de error de accion indicando el codigo de error
	 * @param {*} errorMsg 
	 */
	abrirModalError(errorMsg) {
        document.getElementById('error_action_modal').style.display = 'block';
        document.getElementById('modal_action_overlay').style.display = 'block';
		//mientras no tenemos multiidioma, el mensaje de error es el codigo de error, en el futuro se traducira
		document.getElementById('error_action_msg').innerHTML = errorMsg;
		//cuando ya tengamos el multiidioma, se pondra la clase del mensaje de error para que se traduzca
        document.getElementById('error_action_msg').className = errorMsg;
        //setLang();
    }

		
	/**
	 * cerrar el modal de error de accion
	 */
    cerrarModalError(){
        document.getElementById('error_action_modal').style.display = 'none';
        document.getElementById('modal_action_overlay').style.display = 'none';
        //document.getElementById('error_action_msg').removeAttribute('class');
    }
	/**
	 * vacia el contenido de un div
	 * @name vaciarDiv
	 * @param {string} iddiv id del un contenedor div
	 */
	vaciarDiv(iddiv){
		document.getElementById(iddiv).innerHTML = '';
	}

	/**
	 * coloca el elemento en el contenedor con el div indicado
	 * @name colocarelemento
	 * @param {object} elemento elemento DOM a colocar 
	 * @param {string} divdestino id del contenedor donde se va colocar el elemento
	 */
	colocarelemento(elemento, divdestino){
		document.getElementById(divdestino).append(elemento);
	}

	/**
	 * Redibuja el select en funcion del contenido de columnasamostrar
	 * 
	 * @param {*} columnasamostrar 
	 * @param {*} atributos 
	 */
	crearSeleccionablecolumnas(columnasamostrar,atributos){

		document.getElementById("seleccioncolumnas").innerHTML = '';
		
		for (let atributo of atributos){

			var optionselect = document.createElement('option');
			optionselect.className = atributo;
			optionselect.innerHTML = atributo;
			var textofuncion = "entidad.modificarcolumnasamostrar('"+atributo+"');";
			optionselect.setAttribute("onclick",textofuncion);
			if (columnasamostrar.includes(atributo)){
				optionselect.selected = true;
			}
			document.getElementById("seleccioncolumnas").append(optionselect);
		}
		//setLang();

	}

	/**
	 * muestra o no las columnas de la tabla segun indique columnasamostrar
	 */
	mostrarocultarcolumnas(columnasamostrar, atributos){

		var estadodisplay = '';
		// recorro todos los atributos de la tabla
		for (let columna of atributos){
			// si el atributo esta en columnas a mostrar 
			// lo dejo como esta
			if (columnasamostrar.includes(columna)){
				estadodisplay = '';
			}
			// si el atributo no esta en columnas a mostrar lo oculto
			else{
				estadodisplay = 'none';
			}
			document.querySelector("th[class='tabla-th-"+columna+"']").style.display = estadodisplay;
			let arraytds = document.querySelectorAll("td[class='tabla-td-"+columna+"']");
			for (let i=0;i<arraytds.length;i++){
				arraytds[i].style.display = estadodisplay;
			}
		}


	}
}

	/**
 * if id and mode switch the state of display of html element(id) to 'none' or 'block'/'inline'
 * if 'on'/'off' force html element (id) to show or hide
 * 
 * 
 * @param {string} id  id of html element to show/hide
 * @param {string} mode 'block'/'inline'
 * @param {string} ponerestado 'on'/'off'
 */

	function switch_display_mode(id,mode, ponerestado=null){

	if (ponerestado == 'on'){
		document.getElementById(id).style.display = mode;
	}
	else{
		if (ponerestado == 'off'){
		document.getElementById(id).style.display = 'none';
		}
		else{ 
			if (document.getElementById(id).style.display == 'none'){
				document.getElementById(id).style.display = mode;
			}
			else{
				document.getElementById(id).style.display = 'none';
			}
		}
	}
}
