class rolaccionfuncionalidad extends AbstractEntidad{

	constructor(esTest=null){

		super();

		this.columnasamostrar = ['id_funcionalidad', 'id_accion', 'id_rol'];
		this.mostrarespecial = ['id_funcionalidad', 'id_accion', 'id_rol'];
		this.nombreentidad = 'rolaccionfuncionalidad';

		// claves foraneas: entidad referenciada y atributo de texto que se muestra junto al id
		this.clavesforaneas = {
			id_funcionalidad: {entidad: 'funcionalidad', texto: 'nombre_funcionalidad'},
			id_accion: {entidad: 'accion', texto: 'nombre_accion'},
			id_rol: {entidad: 'rol', texto: 'rol_name'}
		};

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
	 * formulario de la entidad con todos los atributos (todos son claves foraneas: select)
	 * @returns {string} html del formulario
	 */
	manual_form_creation(){
		var form_content = `
			<form id='form_iu' action="" method="POST" enctype="multipart/form-data" onsubmit="" class='formulario'>

				<label id="label_id_funcionalidad" class="label_id_funcionalidad">id_funcionalidad</label>
				<select id='id_funcionalidad' name='id_funcionalidad'></select>
				<span id="span_error_id_funcionalidad"><a id="error_id_funcionalidad"></a></span>
				<br>

				<label id="label_id_accion" class="label_id_accion">id_accion</label>
				<select id='id_accion' name='id_accion'></select>
				<span id="span_error_id_accion"><a id="error_id_accion"></a></span>
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
	 * pide al back las tuplas de la entidad referenciada y rellena con ellas el select
	 * @param {string} idselect id del select (nombre de la clave foranea)
	 * @param {string} controlador entidad referenciada
	 * @param {string} campotexto atributo de la entidad referenciada a mostrar
	 * @param {string} valorseleccionado valor a dejar seleccionado
	 * @param {bool} opcionvacia si se incluye la opcion vacia
	 */
	async cargarselect(idselect, controlador, campotexto, valorseleccionado='', opcionvacia=true){
		let respuesta = await this.access_functions.peticionBackGeneral('', controlador, 'SEARCH');
		// el formulario puede haberse cerrado mientras se esperaba la respuesta
		if (document.getElementById(idselect) === null){ return; }
		let datos = (respuesta['code'] == 'RECORDSET_DATOS') ? respuesta['resource'] : [];
		this.dom.rellenarselect(idselect, datos, idselect, campotexto, valorseleccionado, opcionvacia);
	}

	/**
	 * carga en todos los select las tuplas de su entidad referenciada
	 * @param {bool} opcionvacia si se incluye la opcion vacia
	 */
	cargarselects(opcionvacia=true){
		this.cargarselect('id_funcionalidad', 'funcionalidad', 'nombre_funcionalidad', '', opcionvacia);
		this.cargarselect('id_accion', 'accion', 'nombre_accion', '', opcionvacia);
		this.cargarselect('id_rol', 'rol', 'rol_name', '', opcionvacia);
	}

	/**
	 * deja en cada select solo el valor de la tupla (las claves no son modificables)
	 * y devuelve la fila con los ids como valores simples para poder rellenar el formulario
	 * @param {Object} fila tupla recibida del back (las claves foraneas pueden venir como objeto)
	 * @returns {Object} copia de la fila con los ids como valores
	 */
	preparar_fila(fila){
		let filaform = Object.assign({}, fila);
		for (let campo in this.clavesforaneas){
			let texto = this.clavesforaneas[campo].texto;
			let datos = fila[campo];
			if (!(typeof datos === 'object' && datos !== null)){
				datos = {};
				datos[campo] = fila[campo];
				datos[texto] = '';
			}
			filaform[campo] = datos[campo];
			this.dom.rellenarselect(campo, [datos], campo, texto, datos[campo], false);
		}
		return filaform;
	}

	/**********************************************************************************************
		createForm
	***********************************************************************************************/

	createForm_ADD(){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_rolaccionfuncionalidad_ADD');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.ADD_submit_'+this.nombreentidad+'())');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

		// cargar los valores posibles de cada clave foranea
		this.cargarselects(true);

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','ADD');

		// colocar boton de submit
		this.dom.colocarboton('ADD');

		setLang();
	}

	createForm_SEARCH(){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_rolaccionfuncionalidad_SEARCH');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.SEARCH_submit_'+this.nombreentidad+'())');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

		// cargar los valores posibles de cada clave foranea (opcion vacia = sin filtrar)
		this.cargarselects(true);

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','SEARCH');

		// colocar boton de submit
		this.dom.colocarboton('SEARCH');

		setLang();
	}

	/**
	 * todos los atributos forman la clave primaria, por lo que ninguno es modificable
	 * @param {Object} fila objeto con los datos de la tupla a modificar
	 */
	createForm_EDIT(fila){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_rolaccionfuncionalidad_EDIT');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.EDIT_submit_'+this.nombreentidad+'())');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		// rellenar valores
		let filaform = this.preparar_fila(fila);
		this.dom.rellenarvaloresform(filaform);

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','EDIT');

		// la clave primaria no se puede modificar
		this.dom.colocartodosreadonly('form_iu');

		// colocar boton de submit
		this.dom.colocarboton('EDIT');

		setLang();
	}

	/**
	 * @param {Object} fila objeto con los datos de la tupla a eliminar
	 */
	createForm_DELETE(fila){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_rolaccionfuncionalidad_DELETE');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// rellenar valores
		let filaform = this.preparar_fila(fila);
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
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_rolaccionfuncionalidad_SHOWCURRENT');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// rellenar valores
		let filaform = this.preparar_fila(fila);
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

	ADD_id_accion_validation(){
		if (!(this.validations.min_size('id_accion',1))){
			this.dom.mostrar_error_campo('id_accion','id_accion_min_size_ko');
			return "id_accion_min_size_ko";
		}
		if (!(this.validations.max_size('id_accion',11))){
			this.dom.mostrar_error_campo('id_accion','id_accion_max_size_ko');
			return "id_accion_max_size_ko";
		}
		if (!(this.validations.format('id_accion','^[0-9]+$'))){
			this.dom.mostrar_error_campo('id_accion','id_accion_format_ko');
			return "id_accion_format_ko";
		}
		this.dom.mostrar_exito_campo('id_accion');
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

	ADD_submit_rolaccionfuncionalidad(){

		var set_result = {};
		set_result.id_funcionalidad = this.ADD_id_funcionalidad_validation();
		set_result.id_accion = this.ADD_id_accion_validation();
		set_result.id_rol = this.ADD_id_rol_validation();

		let result = Boolean(
					(set_result.id_funcionalidad) &
					(set_result.id_accion) &
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

	EDIT_id_funcionalidad_validation(){
		return this.ADD_id_funcionalidad_validation();
	}

	EDIT_id_accion_validation(){
		return this.ADD_id_accion_validation();
	}

	EDIT_id_rol_validation(){
		return this.ADD_id_rol_validation();
	}

	EDIT_submit_rolaccionfuncionalidad(){

		var set_result = {};
		set_result.id_funcionalidad = this.EDIT_id_funcionalidad_validation();
		set_result.id_accion = this.EDIT_id_accion_validation();
		set_result.id_rol = this.EDIT_id_rol_validation();

		let result = Boolean(
					(set_result.id_funcionalidad) &
					(set_result.id_accion) &
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
		validaciones de campo SEARCH (se permite vacio)
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

	SEARCH_id_accion_validation(){
		if (!(this.validations.max_size('id_accion',11))){
			this.dom.mostrar_error_campo('id_accion','id_accion_max_size_ko');
			return "id_accion_max_size_ko";
		}
		if (!(this.validations.format('id_accion','^[0-9]*$'))){
			this.dom.mostrar_error_campo('id_accion','id_accion_format_ko');
			return "id_accion_format_ko";
		}
		this.dom.mostrar_exito_campo('id_accion');
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

	SEARCH_submit_rolaccionfuncionalidad(){

		var set_result = {};
		set_result.id_funcionalidad = this.SEARCH_id_funcionalidad_validation();
		set_result.id_accion = this.SEARCH_id_accion_validation();
		set_result.id_rol = this.SEARCH_id_rol_validation();

		let result = Boolean(
					(set_result.id_funcionalidad) &
					(set_result.id_accion) &
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
	 * las claves foraneas llegan del back como objeto con la tupla referenciada:
	 * se muestra el id y el atributo de texto de la entidad referenciada
	 * @param {string} atributo nombre del atributo
	 * @param {any} valorentrada valor del atributo en la tupla
	 * @returns {string} valor a mostrar
	 */
	mostrarcambioatributo(atributo, valorentrada){
		switch(atributo){
			case 'id_funcionalidad':
			case 'id_accion':
			case 'id_rol':
				if (typeof valorentrada === 'object' && valorentrada !== null){
					return valorentrada[atributo] + ' - ' + valorentrada[this.clavesforaneas[atributo].texto];
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
