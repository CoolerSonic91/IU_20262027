class persona extends AbstractEntidad{

	constructor(esTest=null){
		
		super();

		this.columnasamostrar = ['dni','nombre_persona', 'foto_persona'];
		this.mostrarespecial = ['foto_persona','fechaNacimiento_persona'];
		this.nombreentidad = 'persona';

		this.dom = new dom();
		this.validations = new Validations();
		this.access_functions = new ExternalAccess();


		//init
		if (esTest == 'test'){}
		else{
			//visualizar seccion tabla y botones
			document.getElementById('IU_manage_entity').style.display = 'block';
			
			//crear el formulario vacio
			document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();

			//invocar busqueda en back con el formulario vacio
			this.SEARCH();
		}

	}	

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

	/**********************************************************************************************
		fields validations for ADD
	***********************************************************************************************/

	/** 
		
		@return	{string} Error code of field value (fieldname_validationfunction_ko) or
		@return {bool} true due the field value is correct

	*/
	ADD_dni_validation(){
		
		if (!(this.validations.min_size('dni',9))){
			this.dom.mostrar_error_campo('dni','dni_min_size_ko');
			return "dni_min_size_ko";
		}
		if (!(this.validations.max_size('dni',9))){
			this.dom.mostrar_error_campo('dni','dni_max_size_ko');
			return "dni_max_size_ko";
		}
				
		if (!(this.validations.format('dni', '^[0-9]{8}[A-Z]'))){
			this.dom.mostrar_error_campo('dni','dni_format_ko');
			return "dni_format_ko";
		}

		if (!(this.dni_personalized_validation('dni'))){
			this.dom.mostrar_error_campo('dni','dni_personalized_validate_dni_ko');
			return "dni_personalized_validate_dni_ko";
		}
		
		this.dom.mostrar_exito_campo('dni');
		return true;

	}

	/**
	 * 
	 * @param {string} dni id of the field to validate
	 * @returns {bool} true if the dni is valid or false if the dni is not valid
	 */
	dni_personalized_validation(dni){
		
		dni = document.getElementById('dni').value;
		var dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    	var letter = dni_letters.charAt( parseInt( dni, 10 ) % 23 );
		
    	return letter == dni.charAt(8);
	}

	/**
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_ko) 
			or
			{bool} true due the field value is correct

	*/

	ADD_nombre_persona_validation(){
		
		if (!(this.validations.min_size('nombre_persona',4))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_min_size_ko');
			return "nombre_persona_min_size_ko";
		}
		if (!(this.validations.max_size('nombre_persona',15))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_max_size_ko');
			return "nombre_persona_max_size_ko";
		}
		// allowed format aA to zZ letter
		if (!(this.validations.format('nombre_persona', '^[A-Za-z]*$'))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_format_ko');
			return "nombre_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('nombre_persona');
		return true;
	}

	ADD_nuevo_foto_persona_validation(){

		if (!(this.validations.exist_file('nuevo_foto_persona'))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_exist_file_ko');
			return "nuevo_foto_persona_exist_file_ko";
		}
		if (!(this.validations.max_size_file('nuevo_foto_persona',2000))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_max_size_file_ko');
			return "nuevo_foto_persona_max_size_file_ko";
		}
		if (!(this.validations.type_file('nuevo_foto_persona',['image/jpeg']))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_type_file_ko');
			return "nuevo_foto_persona_type_file_ko";
		}
		if (!(this.validations.format_name_file('nuevo_foto_persona','^[a-zA-Z.]*$'))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_format_name_file_ko');
			return "nuevo_foto_persona_format_name_file_ko";
		}
		this.dom.mostrar_exito_campo('nuevo_foto_persona');
		return true;


	}

	/**
	 
		@param
		@return	{bool} true if all fields validations are ok or 
		@return {object} object with the ids of elements and error code if field validation is not ok and true if field validation is ok
	*/
	ADD_submit_persona(){

		// object to store de fields validations
		var set_result = {};

		// store in key (id element) value (result of field validation method)
		set_result.dni = this.ADD_dni_validation();
		set_result.nombre_persona = this.ADD_nombre_persona_validation();
		set_result.nuevo_foto_persona = this.ADD_nuevo_foto_persona_validation();

		// calculate combination of all field validations
		let result = (
					(set_result.dni) &
					(set_result.nombre_persona) &
					(set_result.nuevo_foto_persona)
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

	EDIT_nombre_persona_validation(){

		return this.ADD_nombre_persona_validation();

	}

	EDIT_nuevo_foto_persona_validation(){

		if (!(this.validations.exist_file('nuevo_foto_persona'))){
			this.dom.mostrar_exito_campo('nuevo_foto_persona');
			return true;
		}
		if (!(this.validations.max_size_file('nuevo_foto_persona',2000))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_max_size_file_ko');
			return "nuevo_foto_persona_max_size_file_ko";
		}
		if (!(this.validations.type_file('nuevo_foto_persona',['image/jpeg']))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_type_file_ko');
			return "nuevo_foto_persona_type_file_ko";
		}
		if (!(this.validations.format_name_file('nuevo_foto_persona','[a-zA-Z.]'))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_format_name_file_ko');
			return "nuevo_foto_persona_format_name_file_ko";
		}
		this.dom.mostrar_exito_campo('nuevo_foto_persona');
		return true;


	}

	/**
	 
		@param
		@return	{bool} true if all fields validations are ok or 
		@return {object} object with the ids of elements and error code if field validation is not ok and true if field validation is ok
	*/
	EDIT_submit_persona(){

		// object to store de fields validations
		var set_result = {};

		// store in key (id element) value (result of field validation method)
		set_result.nombre_persona = this.EDIT_nombre_persona_validation();
		set_result.nuevo_foto_persona = this.EDIT_nuevo_foto_persona_validation();

		// calculate combination of all field validations
		let result = (
					(set_result.nombre_persona) &
					(set_result.nuevo_foto_persona)
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

	SEARCH_dni_validation(){
		return {mierror:'dni_mierror_ko'};
	}

	SEARCH_submit_persona(){
		alert('entro');
		return this.SEARCH_dni_validation();
	}

	
	createForm_EDIT(fila){

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		// rellenar onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.EDIT_submit_'+this.nombreentidad+'())');
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

	createForm_DELETE(fila){

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		// rellenar y action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_foto_persona (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_foto_persona');
		this.dom.assign_property_value('link_foto_persona', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+fila.foto_persona);
		
		// modificar presentacion (en este caso concreto para fecha)
		fila.fechaNacimiento_persona = this.cambiarformatoFecha(fila.fechaNacimiento_persona);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);


		// poner inactivos los campos correspondientes
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		this.dom.colocarboton('DELETE');

	}

	createForm_SHOWCURRENT(fila){

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		// rellenar y action
		//this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// poner no visible el campo nuevo_foto_persona (solo se puede ver el nombre de fichero)
		this.dom.hide_element_form('nuevo_foto_persona');
		this.dom.assign_property_value('link_foto_persona', 'href', 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/'+fila.foto_persona);
		
		// modificar presentacion (en este caso concreto para fecha)
		fila.fechaNacimiento_persona = this.cambiarformatoFecha(fila.fechaNacimiento_persona);

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos los campos correspondientes
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		//this.colocarboton('SHOWCURRENT');

	}

	createForm_ADD(){
		// poner titulo al formulario

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		// poner onsubmit
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.ADD_submit_'+this.nombreentidad+'())');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');
		
		// poner no visible el campo foto_persona (solo se puede subir fichero)
		this.dom.hide_element_form('foto_persona');
		this.dom.hide_element('link_foto_persona');

		// rellenar valores
		// en ADD no hay valores que rellenar

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','ADD');

		// poner inactivos los campos correspondientes
		// en ADD no hay inactivos... si hubiese un autoincremental ya no se mostraria

		// colocar boton de submit
		this.dom.colocarboton('ADD');
	}

	createForm_SEARCH(){
		// poner titulo al formulario

		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form','block');

		// poner onsubmit
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.SEARCH_submit_'+this.nombreentidad+'())');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');
		
		// poner no visible el campo foto_persona (solo se puede subir fichero)
		this.dom.hide_element_form('nuevo_foto_persona');
		this.dom.hide_element('link_foto_persona');

		// rellenar valores
		// en SEARCH no hay valores que rellenar

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','SEARCH');

		// colocar boton de submit
		this.dom.colocarboton('SEARCH');

	}

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

	/**
	 * transforma el valor de la columna a mostrar en la tabla de datos de la entidad del back
	 * 
	 * @param {string} columna nombre de la columna a modificar
	 * @param {any} valor valor inicial de la columna
	 * @returns {any} nuevo valor transformado de la columna
	 */

	cambiarmostrarespecial(columna, valor){
		var nuevovalor = valor;
		switch(columna){
			case 'foto_persona':
				nuevovalor = `<a href='http://193.147.87.202/ET2/filesuploaded/files_foto_persona/`+valor+`'>`+valor+`</a>`;
				return nuevovalor;
				break;
			case 'fechaNacimiento_persona':
				nuevovalor = this.cambiarformatoFecha(valor);
				return nuevovalor;
				break;
			default:
				return nuevovalor;
		}
	}


	//ADD
	//
	//ADD_dni_validation(){return true;}
	//ADD_nombre_persona_validation(){return true;}
	ADD_apellidos_persona_validation(){return true;}
	ADD_fechaNacimiento_persona_validation(){return true;}
	ADD_direccion_persona_validation(){return true;}
	ADD_telefono_persona_validation(){return true;}
	ADD_email_persona_validation(){return true;}
	ADD_foto_persona_validation(){return true;}
	//ADD_nuevo_foto_persona_validation(){return true;}

	//
	//EDIT
	//
	EDIT_dni_validation(){return true;}
	//EDIT_nombre_persona_validation(){return true;}
	EDIT_apellidos_persona_validation(){return true;}
	EDIT_fechaNacimiento_persona_validation(){return true;}
	EDIT_direccion_persona_validation(){return true;}
	EDIT_telefono_persona_validation(){return true;}
	EDIT_email_persona_validation(){return true;}
	EDIT_foto_persona_validation(){return true;}
	//EDIT_nuevo_foto_persona_validation(){return true;}

	//
	//SEARCH
	//

	SEARCH_nombre_persona_validation(){return true;}
	SEARCH_apellidos_persona_validation(){return true;}
	SEARCH_fechaNacimiento_persona_validation(){return true;}
	SEARCH_direccion_persona_validation(){return true;}
	SEARCH_telefono_persona_validation(){return true;}
	SEARCH_email_persona_validation(){return true;}
	SEARCH_foto_persona_validation(){return true;}
	SEARCH_nuevo_foto_persona_validation(){return true;}

		
}


