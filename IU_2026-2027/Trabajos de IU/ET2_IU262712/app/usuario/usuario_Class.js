class usuario extends AbstractEntidad{

	constructor(esTest=null){

		super();

		this.columnasamostrar = ['dni', 'usuario', 'id_rol'];
		this.mostrarespecial = ['contrasena', 'id_rol'];
		this.nombreentidad = 'usuario';

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

				<label id="label_dni" class="label_dni">dni</label>
				<input type='text' id='dni' name='dni'></input>
				<span id="span_error_dni"><a id="error_dni"></a></span>
				<br>

				<label id="label_usuario" class="label_usuario">usuario</label>
				<input type='text' id='usuario' name='usuario'></input>
				<span id="span_error_usuario"><a id="error_usuario"></a></span>
				<br>

				<label id="label_contrasena" class="label_contrasena">contrasena</label>
				<input type='password' id='contrasena' name='contrasena'></input>
				<span id="span_error_contrasena"><a id="error_contrasena"></a></span>
				<br>

				<label id="label_id_rol" class="label_id_rol">id_rol</label>
				<select id='id_rol' name='id_rol'></select>
				<span id="span_error_id_rol"><a id="error_id_rol"></a></span>
				<br>

			</form>
		`;
		return form_content;
	}

	/**
	 * pide al back todos los roles y rellena con ellos el select id_rol
	 * @param {string} valorseleccionado id_rol a dejar seleccionado
	 * @param {bool} opcionvacia si se incluye la opcion vacia
	 */
	async cargarselect_id_rol(valorseleccionado='', opcionvacia=true){
		let respuesta = await this.access_functions.peticionBackGeneral('', 'rol', 'SEARCH');
		// el formulario puede haberse cerrado mientras se esperaba la respuesta
		if (document.getElementById('id_rol') === null){ return; }
		let datos = (respuesta['code'] == 'RECORDSET_DATOS') ? respuesta['resource'] : [];
		this.dom.rellenarselect('id_rol', datos, 'id_rol', 'rol_name', valorseleccionado, opcionvacia);
	}

	/**
	 * deja en el select id_rol solo el rol de la tupla (para formularios no editables)
	 * y devuelve la fila con id_rol como valor simple para poder rellenar el formulario
	 * @param {Object} fila tupla recibida del back (id_rol puede venir como objeto)
	 * @returns {Object} copia de la fila con id_rol como valor
	 */
	preparar_fila_id_rol(fila){
		let filaform = Object.assign({}, fila);
		let datosrol = (typeof fila.id_rol === 'object' && fila.id_rol !== null) ? fila.id_rol : {id_rol: fila.id_rol, rol_name: ''};
		filaform.id_rol = datosrol.id_rol;
		this.dom.rellenarselect('id_rol', [datosrol], 'id_rol', 'rol_name', datosrol.id_rol, false);
		return filaform;
	}

	/**********************************************************************************************
		createForm
	***********************************************************************************************/

	createForm_ADD(){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_usuario_ADD');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.ADD_submit_'+this.nombreentidad+'())');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

		// cargar los roles en el select
		this.cargarselect_id_rol('', true);

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','ADD');

		// colocar boton de submit
		this.dom.colocarboton('ADD');

		setLang();
	}

	createForm_SEARCH(){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_usuario_SEARCH');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.SEARCH_submit_'+this.nombreentidad+'())');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

		// cargar los roles en el select (opcion vacia = sin filtrar por rol)
		this.cargarselect_id_rol('', true);

		// en SEARCH la contraseña se escribe como texto
		this.dom.assign_property_value('contrasena', 'type', 'text');

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
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_usuario_EDIT');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.EDIT_submit_'+this.nombreentidad+'())');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		// rellenar valores (el rol actual queda seleccionado y despues se cargan el resto de roles)
		let filaform = this.preparar_fila_id_rol(fila);
		this.dom.rellenarvaloresform(filaform);
		this.cargarselect_id_rol(filaform.id_rol, false);

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','EDIT');

		// la clave primaria no se puede modificar
		this.dom.assign_property_value('dni','readonly','true');

		// colocar boton de submit
		this.dom.colocarboton('EDIT');

		setLang();
	}

	/**
	 * @param {Object} fila objeto con los datos de la tupla a eliminar
	 */
	createForm_DELETE(fila){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_usuario_DELETE');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// rellenar valores
		let filaform = this.preparar_fila_id_rol(fila);
		this.dom.rellenarvaloresform(filaform);

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
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_usuario_SHOWCURRENT');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// rellenar valores
		let filaform = this.preparar_fila_id_rol(fila);
		this.dom.rellenarvaloresform(filaform);

		// poner inactivos todos los campos
		this.dom.colocartodosreadonly('form_iu');

		setLang();
	}

	/**********************************************************************************************
		validaciones de campo ADD
		@return {string} codigo de error del campo (campo_validacion_ko) o
		@return {bool} true si el valor del campo es correcto
	***********************************************************************************************/

	ADD_dni_validation(){
		if (!(this.validations.min_size('dni',9))){
			this.dom.mostrar_error_campo('dni','dni_min_size_ko');
			return "dni_min_size_ko";
		}
		if (!(this.validations.max_size('dni',9))){
			this.dom.mostrar_error_campo('dni','dni_max_size_ko');
			return "dni_max_size_ko";
		}
		// 8 digitos y una letra mayuscula
		if (!(this.validations.format('dni','^[0-9]{8}[A-Z]$'))){
			this.dom.mostrar_error_campo('dni','dni_format_ko');
			return "dni_format_ko";
		}
		if (!(this.personalize_dni_letra())){
			this.dom.mostrar_error_campo('dni','dni_letra_ko');
			return "dni_letra_ko";
		}
		this.dom.mostrar_exito_campo('dni');
		return true;
	}

	/**
	 * validacion personalizada: la letra del dni corresponde con el numero
	 * @returns {bool} true si la letra es la correcta, false si no
	 */
	personalize_dni_letra(){
		let dni = document.getElementById('dni').value;
		let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
		let letra = letras.charAt(parseInt(dni.substring(0,8), 10) % 23);
		return (letra == dni.charAt(8));
	}

	ADD_usuario_validation(){
		if (!(this.validations.min_size('usuario',5))){
			this.dom.mostrar_error_campo('usuario','usuario_min_size_ko');
			return "usuario_min_size_ko";
		}
		if (!(this.validations.max_size('usuario',45))){
			this.dom.mostrar_error_campo('usuario','usuario_max_size_ko');
			return "usuario_max_size_ko";
		}
		// solo letras sin ñ ni acentos
		if (!(this.validations.format('usuario','^[a-zA-Z]+$'))){
			this.dom.mostrar_error_campo('usuario','usuario_format_ko');
			return "usuario_format_ko";
		}
		this.dom.mostrar_exito_campo('usuario');
		return true;
	}

	ADD_contrasena_validation(){
		if (!(this.validations.min_size('contrasena',8))){
			this.dom.mostrar_error_campo('contrasena','contrasena_min_size_ko');
			return "contrasena_min_size_ko";
		}
		if (!(this.validations.max_size('contrasena',45))){
			this.dom.mostrar_error_campo('contrasena','contrasena_max_size_ko');
			return "contrasena_max_size_ko";
		}
		// solo letras sin ñ ni acentos
		if (!(this.validations.format('contrasena','^[a-zA-Z]+$'))){
			this.dom.mostrar_error_campo('contrasena','contrasena_format_ko');
			return "contrasena_format_ko";
		}
		this.dom.mostrar_exito_campo('contrasena');
		return true;
	}

	ADD_id_rol_validation(){
		if (!(this.validations.min_size('id_rol',1))){
			this.dom.mostrar_error_campo('id_rol','id_rol_min_size_ko');
			return "id_rol_min_size_ko";
		}
		if (!(this.validations.max_size('id_rol',11))){
			this.dom.mostrar_error_campo('id_rol','id_rol_max_size_ko');
			return "id_rol_max_size_ko";
		}
		if (!(this.validations.format('id_rol','^[0-9]+$'))){
			this.dom.mostrar_error_campo('id_rol','id_rol_format_ko');
			return "id_rol_format_ko";
		}
		this.dom.mostrar_exito_campo('id_rol');
		return true;
	}

	ADD_submit_usuario(){

		var set_result = {};
		set_result.dni = this.ADD_dni_validation();
		set_result.usuario = this.ADD_usuario_validation();
		set_result.contrasena = this.ADD_contrasena_validation();
		set_result.id_rol = this.ADD_id_rol_validation();

		let result = Boolean(
					(set_result.dni) &
					(set_result.usuario) &
					(set_result.contrasena) &
					(set_result.id_rol)
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

	EDIT_dni_validation(){
		return this.ADD_dni_validation();
	}

	EDIT_usuario_validation(){
		return this.ADD_usuario_validation();
	}

	EDIT_contrasena_validation(){
		return this.ADD_contrasena_validation();
	}

	EDIT_id_rol_validation(){
		return this.ADD_id_rol_validation();
	}

	EDIT_submit_usuario(){

		var set_result = {};
		set_result.dni = this.EDIT_dni_validation();
		set_result.usuario = this.EDIT_usuario_validation();
		set_result.contrasena = this.EDIT_contrasena_validation();
		set_result.id_rol = this.EDIT_id_rol_validation();

		let result = Boolean(
					(set_result.dni) &
					(set_result.usuario) &
					(set_result.contrasena) &
					(set_result.id_rol)
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

	SEARCH_dni_validation(){
		if (!(this.validations.max_size('dni',9))){
			this.dom.mostrar_error_campo('dni','dni_max_size_ko');
			return "dni_max_size_ko";
		}
		// numeros y, al final, una letra mayuscula
		if (!(this.validations.format('dni','^[0-9]*[A-Z]?$'))){
			this.dom.mostrar_error_campo('dni','dni_format_ko');
			return "dni_format_ko";
		}
		this.dom.mostrar_exito_campo('dni');
		return true;
	}

	SEARCH_usuario_validation(){
		if (!(this.validations.max_size('usuario',45))){
			this.dom.mostrar_error_campo('usuario','usuario_max_size_ko');
			return "usuario_max_size_ko";
		}
		if (!(this.validations.format('usuario','^[a-zA-Z]*$'))){
			this.dom.mostrar_error_campo('usuario','usuario_format_ko');
			return "usuario_format_ko";
		}
		this.dom.mostrar_exito_campo('usuario');
		return true;
	}

	SEARCH_contrasena_validation(){
		if (!(this.validations.max_size('contrasena',45))){
			this.dom.mostrar_error_campo('contrasena','contrasena_max_size_ko');
			return "contrasena_max_size_ko";
		}
		if (!(this.validations.format('contrasena','^[a-zA-Z]*$'))){
			this.dom.mostrar_error_campo('contrasena','contrasena_format_ko');
			return "contrasena_format_ko";
		}
		this.dom.mostrar_exito_campo('contrasena');
		return true;
	}

	SEARCH_id_rol_validation(){
		if (!(this.validations.max_size('id_rol',11))){
			this.dom.mostrar_error_campo('id_rol','id_rol_max_size_ko');
			return "id_rol_max_size_ko";
		}
		if (!(this.validations.format('id_rol','^[0-9]*$'))){
			this.dom.mostrar_error_campo('id_rol','id_rol_format_ko');
			return "id_rol_format_ko";
		}
		this.dom.mostrar_exito_campo('id_rol');
		return true;
	}

	SEARCH_submit_usuario(){

		var set_result = {};
		set_result.dni = this.SEARCH_dni_validation();
		set_result.usuario = this.SEARCH_usuario_validation();
		set_result.contrasena = this.SEARCH_contrasena_validation();
		set_result.id_rol = this.SEARCH_id_rol_validation();

		let result = Boolean(
					(set_result.dni) &
					(set_result.usuario) &
					(set_result.contrasena) &
					(set_result.id_rol)
					);

		if ((typeof result === 'boolean') && (result == true)){
			return result;
		}
		else{
			return set_result;
		}
	}

	/**********************************************************************************************
		muestra especial de atributos en la tabla
	***********************************************************************************************/

	/**
	 * devuelve el valor a mostrar en la tabla para los atributos de mostrarespecial
	 * @param {string} atributo nombre del atributo
	 * @param {any} valorentrada valor del atributo en la tupla
	 * @returns {string} valor a mostrar
	 */
	mostrarcambioatributo(atributo, valorentrada){
		switch(atributo){
			case 'contrasena':
				return '********';
			case 'id_rol':
				if (typeof valorentrada === 'object' && valorentrada !== null){
					return valorentrada.id_rol + ' - ' + valorentrada.rol_name;
				}
				return valorentrada;
			default:
				return valorentrada;
		}
	}

	/**
	 * metodo invocado por AbstractEntidad al crear la tabla de datos
	 */
	cambiarmostrarespecial(atributo, valorentrada){
		return this.mostrarcambioatributo(atributo, valorentrada);
	}

}
