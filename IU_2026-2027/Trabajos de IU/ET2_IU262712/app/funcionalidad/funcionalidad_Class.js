class funcionalidad extends AbstractEntidad{

	constructor(esTest=null){

		super();

		this.columnasamostrar = ['id_funcionalidad', 'nombre_funcionalidad', 'descrip_funcionalidad'];
		this.mostrarespecial = [];
		this.nombreentidad = 'funcionalidad';

		this.dom = new entity_dom_fields();
		this.validations = new entity_validations();
		this.access_functions = new ExternalAccess();

		//init
		if (esTest == 'test'){}
		else{
			//visualizar seccion tabla y botones
			document.getElementById('IU_manage_entity').style.display = 'block';
			document.getElementById('text_title_page').className = 'text_titulo_page_'+this.nombreentidad;

			//crear el formulario vacio
			document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();

			//invocar busqueda en back con el formulario vacio
			this.SEARCH();
		}

	}

	/**
	 * formulario de la entidad con todos los atributos
	 * @returns {string} html del formulario
	 */
	manual_form_creation(){
		var form_content = `
			<form id='form_iu' action="" method="POST" enctype="multipart/form-data" onsubmit="" class='formulario'>

				<label id="label_id_funcionalidad" class="label_id_funcionalidad">id_funcionalidad</label>
				<input type='text' id='id_funcionalidad' name='id_funcionalidad'></input>
				<span id="span_error_id_funcionalidad"><a id="error_id_funcionalidad"></a></span>
				<br>

				<label id="label_nombre_funcionalidad" class="label_nombre_funcionalidad">nombre_funcionalidad</label>
				<input type='text' id='nombre_funcionalidad' name='nombre_funcionalidad'></input>
				<span id="span_error_nombre_funcionalidad"><a id="error_nombre_funcionalidad"></a></span>
				<br>

				<label id="label_descrip_funcionalidad" class="label_descrip_funcionalidad">descrip_funcionalidad</label>
				<textarea rows="4" cols="50" id='descrip_funcionalidad' name='descrip_funcionalidad'></textarea>
				<span id="span_error_descrip_funcionalidad"><a id="error_descrip_funcionalidad"></a></span>
				<br>

			</form>
		`;
		return form_content;
	}

	/**********************************************************************************************
		createForm
	***********************************************************************************************/

	createForm_ADD(){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_funcionalidad_ADD');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.ADD_submit_'+this.nombreentidad+'())');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

		// id_funcionalidad es autoincremental: no se muestra en ADD
		this.dom.hide_element_form('id_funcionalidad');

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','ADD');

		// colocar boton de submit
		this.dom.colocarboton('ADD');

		setLang();
	}

	createForm_SEARCH(){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_funcionalidad_SEARCH');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.SEARCH_submit_'+this.nombreentidad+'())');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','SEARCH');

		// colocar boton de submit
		this.dom.colocarboton('SEARCH');

		setLang();
	}

	/**
	 * @param {Object} fila objeto con los datos de la tupla a modificar
	 */
	createForm_EDIT(fila){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_funcionalidad_EDIT');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.EDIT_submit_'+this.nombreentidad+'())');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','EDIT');

		// la clave primaria no se puede modificar
		this.dom.assign_property_value('id_funcionalidad','readonly','true');

		// colocar boton de submit
		this.dom.colocarboton('EDIT');

		setLang();
	}

	/**
	 * @param {Object} fila objeto con los datos de la tupla a eliminar
	 */
	createForm_DELETE(fila){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_funcionalidad_DELETE');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos todos los campos
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		this.dom.colocarboton('DELETE');

		setLang();
	}

	/**
	 * @param {Object} fila objeto con los datos de la tupla a mostrar
	 */
	createForm_SHOWCURRENT(fila){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_funcionalidad_SHOWCURRENT');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// rellenar valores
		this.dom.rellenarvaloresform(fila);

		// poner inactivos todos los campos
		this.dom.colocartodosreadonly('form_iu');

		setLang();
	}

	/**********************************************************************************************
		validaciones de campo ADD
		@return {string} codigo de error del campo (campo_validacion_ko) o
		@return {bool} true si el valor del campo es correcto
	***********************************************************************************************/

	ADD_id_funcionalidad_validation(){
		if (!(this.validations.min_size('id_funcionalidad',1))){
			this.dom.mostrar_error_campo('id_funcionalidad','id_funcionalidad_min_size_ko');
			return "id_funcionalidad_min_size_ko";
		}
		if (!(this.validations.max_size('id_funcionalidad',11))){
			this.dom.mostrar_error_campo('id_funcionalidad','id_funcionalidad_max_size_ko');
			return "id_funcionalidad_max_size_ko";
		}
		if (!(this.validations.format('id_funcionalidad','^[0-9]+$'))){
			this.dom.mostrar_error_campo('id_funcionalidad','id_funcionalidad_format_ko');
			return "id_funcionalidad_format_ko";
		}
		this.dom.mostrar_exito_campo('id_funcionalidad');
		return true;
	}

	ADD_nombre_funcionalidad_validation(){
		if (!(this.validations.min_size('nombre_funcionalidad',5))){
			this.dom.mostrar_error_campo('nombre_funcionalidad','nombre_funcionalidad_min_size_ko');
			return "nombre_funcionalidad_min_size_ko";
		}
		if (!(this.validations.max_size('nombre_funcionalidad',48))){
			this.dom.mostrar_error_campo('nombre_funcionalidad','nombre_funcionalidad_max_size_ko');
			return "nombre_funcionalidad_max_size_ko";
		}
		// solo letras (incluida la ñ), sin acentos y sin espacios
		if (!(this.validations.format('nombre_funcionalidad','^[a-zA-Z\u00f1\u00d1]+$'))){
			this.dom.mostrar_error_campo('nombre_funcionalidad','nombre_funcionalidad_format_ko');
			return "nombre_funcionalidad_format_ko";
		}
		this.dom.mostrar_exito_campo('nombre_funcionalidad');
		return true;
	}

	ADD_descrip_funcionalidad_validation(){
		if (!(this.validations.min_size('descrip_funcionalidad',5))){
			this.dom.mostrar_error_campo('descrip_funcionalidad','descrip_funcionalidad_min_size_ko');
			return "descrip_funcionalidad_min_size_ko";
		}
		if (!(this.validations.max_size('descrip_funcionalidad',200))){
			this.dom.mostrar_error_campo('descrip_funcionalidad','descrip_funcionalidad_max_size_ko');
			return "descrip_funcionalidad_max_size_ko";
		}
		// letras con ñ (sin acentos), espacios y signos de puntuacion
		if (!(this.validations.format('descrip_funcionalidad','^[a-zA-Z\u00f1\u00d1 .,;:\u00bf?\u00a1!()-]+$'))){
			this.dom.mostrar_error_campo('descrip_funcionalidad','descrip_funcionalidad_format_ko');
			return "descrip_funcionalidad_format_ko";
		}
		this.dom.mostrar_exito_campo('descrip_funcionalidad');
		return true;
	}

	/**
	 * id_funcionalidad es autoincremental y no se envia en ADD
	 * @return {bool|object} true si todos los campos son correctos o el objeto con el resultado de cada campo
	 */
	ADD_submit_funcionalidad(){

		var set_result = {};
		set_result.nombre_funcionalidad = this.ADD_nombre_funcionalidad_validation();
		set_result.descrip_funcionalidad = this.ADD_descrip_funcionalidad_validation();

		let result = Boolean(
					(set_result.nombre_funcionalidad) &
					(set_result.descrip_funcionalidad)
					);

		if ((typeof result === 'boolean') && (result == true)){
			return result;
		}
		else{
			return set_result;
		}
	}

	/**********************************************************************************************
		validaciones de campo EDIT
	***********************************************************************************************/

	EDIT_id_funcionalidad_validation(){
		return this.ADD_id_funcionalidad_validation();
	}

	EDIT_nombre_funcionalidad_validation(){
		return this.ADD_nombre_funcionalidad_validation();
	}

	EDIT_descrip_funcionalidad_validation(){
		return this.ADD_descrip_funcionalidad_validation();
	}

	EDIT_submit_funcionalidad(){

		var set_result = {};
		set_result.id_funcionalidad = this.EDIT_id_funcionalidad_validation();
		set_result.nombre_funcionalidad = this.EDIT_nombre_funcionalidad_validation();
		set_result.descrip_funcionalidad = this.EDIT_descrip_funcionalidad_validation();

		let result = Boolean(
					(set_result.id_funcionalidad) &
					(set_result.nombre_funcionalidad) &
					(set_result.descrip_funcionalidad)
					);

		if ((typeof result === 'boolean') && (result == true)){
			return result;
		}
		else{
			return set_result;
		}
	}

	/**********************************************************************************************
		validaciones de campo SEARCH (se permite vacio y valores parciales)
	***********************************************************************************************/

	SEARCH_id_funcionalidad_validation(){
		if (!(this.validations.max_size('id_funcionalidad',11))){
			this.dom.mostrar_error_campo('id_funcionalidad','id_funcionalidad_max_size_ko');
			return "id_funcionalidad_max_size_ko";
		}
		if (!(this.validations.format('id_funcionalidad','^[0-9]*$'))){
			this.dom.mostrar_error_campo('id_funcionalidad','id_funcionalidad_format_ko');
			return "id_funcionalidad_format_ko";
		}
		this.dom.mostrar_exito_campo('id_funcionalidad');
		return true;
	}

	SEARCH_nombre_funcionalidad_validation(){
		if (!(this.validations.max_size('nombre_funcionalidad',48))){
			this.dom.mostrar_error_campo('nombre_funcionalidad','nombre_funcionalidad_max_size_ko');
			return "nombre_funcionalidad_max_size_ko";
		}
		if (!(this.validations.format('nombre_funcionalidad','^[a-zA-Z\u00f1\u00d1]*$'))){
			this.dom.mostrar_error_campo('nombre_funcionalidad','nombre_funcionalidad_format_ko');
			return "nombre_funcionalidad_format_ko";
		}
		this.dom.mostrar_exito_campo('nombre_funcionalidad');
		return true;
	}

	SEARCH_descrip_funcionalidad_validation(){
		if (!(this.validations.max_size('descrip_funcionalidad',200))){
			this.dom.mostrar_error_campo('descrip_funcionalidad','descrip_funcionalidad_max_size_ko');
			return "descrip_funcionalidad_max_size_ko";
		}
		if (!(this.validations.format('descrip_funcionalidad','^[a-zA-Z\u00f1\u00d1 .,;:\u00bf?\u00a1!()-]*$'))){
			this.dom.mostrar_error_campo('descrip_funcionalidad','descrip_funcionalidad_format_ko');
			return "descrip_funcionalidad_format_ko";
		}
		this.dom.mostrar_exito_campo('descrip_funcionalidad');
		return true;
	}

	SEARCH_submit_funcionalidad(){

		var set_result = {};
		set_result.id_funcionalidad = this.SEARCH_id_funcionalidad_validation();
		set_result.nombre_funcionalidad = this.SEARCH_nombre_funcionalidad_validation();
		set_result.descrip_funcionalidad = this.SEARCH_descrip_funcionalidad_validation();

		let result = Boolean(
					(set_result.id_funcionalidad) &
					(set_result.nombre_funcionalidad) &
					(set_result.descrip_funcionalidad)
					);

		if ((typeof result === 'boolean') && (result == true)){
			return result;
		}
		else{
			return set_result;
		}
	}

}
