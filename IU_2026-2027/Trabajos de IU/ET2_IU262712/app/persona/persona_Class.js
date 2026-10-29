class persona extends AbstractEntidad{

	constructor(esTest=null){

		super();

		this.columnasamostrar = ['dni', 'nombre_persona', 'apellidos_persona', 'email_persona', 'foto_persona'];
		this.mostrarespecial = ['fechaNacimiento_persona', 'foto_persona'];
		this.nombreentidad = 'persona';

		// direccion del servidor donde estan los ficheros subidos de foto_persona
		this.urlfotos = 'http://193.147.87.202/ET2/filesuploaded/files_foto_persona/';

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

				<label id="label_nombre_persona" class="label_nombre_persona">nombre_persona</label>
				<input type='text' id='nombre_persona' name='nombre_persona'></input>
				<span id="span_error_nombre_persona"><a id="error_nombre_persona"></a></span>
				<br>

				<label id="label_apellidos_persona" class="label_apellidos_persona">apellidos_persona</label>
				<input type='text' id='apellidos_persona' name='apellidos_persona'></input>
				<span id="span_error_apellidos_persona"><a id="error_apellidos_persona"></a></span>
				<br>

				<label id="label_fechaNacimiento_persona" class="label_fechaNacimiento_persona">fechaNacimiento_persona</label>
				<input type='text' id='fechaNacimiento_persona' name='fechaNacimiento_persona' placeholder='dd/mm/aaaa'></input>
				<span id="span_error_fechaNacimiento_persona"><a id="error_fechaNacimiento_persona"></a></span>
				<br>

				<label id="label_direccion_persona" class="label_direccion_persona">direccion_persona</label>
				<textarea rows="4" cols="50" id='direccion_persona' name='direccion_persona'></textarea>
				<span id="span_error_direccion_persona"><a id="error_direccion_persona"></a></span>
				<br>

				<label id="label_telefono_persona" class="label_telefono_persona">telefono_persona</label>
				<input type='text' id='telefono_persona' name='telefono_persona'></input>
				<span id="span_error_telefono_persona"><a id="error_telefono_persona"></a></span>
				<br>

				<label id="label_email_persona" class="label_email_persona">email_persona</label>
				<input type='text' id='email_persona' name='email_persona'></input>
				<span id="span_error_email_persona"><a id="error_email_persona"></a></span>
				<br>

				<label id="label_foto_persona" class="label_foto_persona">foto_persona</label>
				<input type='text' id='foto_persona' name='foto_persona'></input>
				<span id="span_error_foto_persona"><a id="error_foto_persona"></a></span>
				<a id="link_foto_persona" href="${this.urlfotos}" target="_blank"><img src="./iconos/FILE.png" /></a>
				<br>

				<label id="label_nuevo_foto_persona" class="label_nuevo_foto_persona">nuevo_foto_persona</label>
				<input type='file' id='nuevo_foto_persona' name='nuevo_foto_persona' accept='.jpg,.jpeg'></input>
				<span id="span_error_nuevo_foto_persona"><a id="error_nuevo_foto_persona"></a></span>
				<br>

			</form>
		`;
		return form_content;
	}

	/**
	 * devuelve una copia de la fila con la fecha en formato dd/mm/aaaa para el formulario
	 * y coloca en el link_foto_persona la direccion del fichero en el servidor
	 * @param {Object} fila tupla recibida del back
	 * @returns {Object} copia de la fila para rellenar el formulario
	 */
	preparar_fila(fila){
		let filaform = Object.assign({}, fila);
		filaform.fechaNacimiento_persona = this.cambiarformatoFecha(fila.fechaNacimiento_persona);
		this.dom.assign_property_value('link_foto_persona', 'href', this.urlfotos+fila.foto_persona);
		return filaform;
	}

	/**********************************************************************************************
		createForm
	***********************************************************************************************/

	createForm_ADD(){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_persona_ADD');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.ADD_submit_'+this.nombreentidad+'())');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.ADD();');

		// foto_persona no se muestra en ADD (solo se puede subir el fichero)
		this.dom.hide_element_form('foto_persona');
		this.dom.hide_element('link_foto_persona');
		this.dom.show_element('label_nuevo_foto_persona');
		this.dom.show_element('nuevo_foto_persona');

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','ADD');

		// colocar boton de submit
		this.dom.colocarboton('ADD');

		setLang();
	}

	createForm_SEARCH(){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_persona_SEARCH');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.SEARCH_submit_'+this.nombreentidad+'())');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.SEARCH();');

		// en SEARCH se busca por el nombre del fichero: no se sube fichero ni hay link
		this.dom.hide_element_form('nuevo_foto_persona');
		this.dom.hide_element('link_foto_persona');

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
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_persona_EDIT');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner onsubmit y action
		this.dom.assign_property_value('form_iu','onsubmit','return entidad.dom.validarsubmit(entidad.EDIT_submit_'+this.nombreentidad+'())');
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.EDIT();');

		// se muestra el campo para subir la nueva foto
		this.dom.show_element('label_nuevo_foto_persona');
		this.dom.show_element('nuevo_foto_persona');

		// rellenar valores
		this.dom.rellenarvaloresform(this.preparar_fila(fila));

		// poner las validaciones
		this.dom.colocarvalidaciones('form_iu','EDIT');

		// la clave primaria y el nombre del fichero guardado no se pueden modificar
		this.dom.assign_property_value('dni','readonly','true');
		this.dom.assign_property_value('foto_persona','readonly','true');

		// colocar boton de submit
		this.dom.colocarboton('EDIT');

		setLang();
	}

	/**
	 * @param {Object} fila objeto con los datos de la tupla a eliminar
	 */
	createForm_DELETE(fila){
		// poner titulo al formulario
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_persona_DELETE');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// poner action
		this.dom.assign_property_value('form_iu', 'action', 'javascript:entidad.DELETE();');

		// no se sube fichero en DELETE (solo se ve el nombre del fichero y su link)
		this.dom.hide_element_form('nuevo_foto_persona');

		// rellenar valores
		this.dom.rellenarvaloresform(this.preparar_fila(fila));

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
		this.dom.assign_property_value('class_contenido_titulo_form','class','text_contenido_titulo_form_persona_SHOWCURRENT');
		// limpiar y poner visible el formulario
		document.getElementById('contenedor_IU_form').innerHTML = this.manual_form_creation();
		this.dom.show_element('Div_IU_form');

		// no se sube fichero en SHOWCURRENT (solo se ve el nombre del fichero y su link)
		this.dom.hide_element_form('nuevo_foto_persona');

		// rellenar valores
		this.dom.rellenarvaloresform(this.preparar_fila(fila));

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

	ADD_nombre_persona_validation(){
		if (!(this.validations.min_size('nombre_persona',2))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_min_size_ko');
			return "nombre_persona_min_size_ko";
		}
		if (!(this.validations.max_size('nombre_persona',45))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_max_size_ko');
			return "nombre_persona_max_size_ko";
		}
		// letras con ñ y acentos, puntos, guiones y espacios
		if (!(this.validations.format('nombre_persona','^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00fc\u00dc\u00f1\u00d1. -]+$'))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_format_ko');
			return "nombre_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('nombre_persona');
		return true;
	}

	ADD_apellidos_persona_validation(){
		if (!(this.validations.min_size('apellidos_persona',3))){
			this.dom.mostrar_error_campo('apellidos_persona','apellidos_persona_min_size_ko');
			return "apellidos_persona_min_size_ko";
		}
		if (!(this.validations.max_size('apellidos_persona',100))){
			this.dom.mostrar_error_campo('apellidos_persona','apellidos_persona_max_size_ko');
			return "apellidos_persona_max_size_ko";
		}
		// letras con ñ y acentos, puntos, guiones y espacios
		if (!(this.validations.format('apellidos_persona','^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00fc\u00dc\u00f1\u00d1. -]+$'))){
			this.dom.mostrar_error_campo('apellidos_persona','apellidos_persona_format_ko');
			return "apellidos_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('apellidos_persona');
		return true;
	}

	ADD_fechaNacimiento_persona_validation(){
		if (!(this.validations.min_size('fechaNacimiento_persona',10))){
			this.dom.mostrar_error_campo('fechaNacimiento_persona','fechaNacimiento_persona_min_size_ko');
			return "fechaNacimiento_persona_min_size_ko";
		}
		if (!(this.validations.max_size('fechaNacimiento_persona',10))){
			this.dom.mostrar_error_campo('fechaNacimiento_persona','fechaNacimiento_persona_max_size_ko');
			return "fechaNacimiento_persona_max_size_ko";
		}
		// formato dd/mm/aaaa
		if (!(this.validations.format('fechaNacimiento_persona','^[0-9]{2}/[0-9]{2}/[0-9]{4}$'))){
			this.dom.mostrar_error_campo('fechaNacimiento_persona','fechaNacimiento_persona_format_ko');
			return "fechaNacimiento_persona_format_ko";
		}
		if (!(this.personalize_fechaNacimiento_persona_fecha_valida())){
			this.dom.mostrar_error_campo('fechaNacimiento_persona','fechaNacimiento_persona_fecha_valida_ko');
			return "fechaNacimiento_persona_fecha_valida_ko";
		}
		if (!(this.personalize_fechaNacimiento_persona_fecha_anterior_actual())){
			this.dom.mostrar_error_campo('fechaNacimiento_persona','fechaNacimiento_persona_fecha_anterior_actual_ko');
			return "fechaNacimiento_persona_fecha_anterior_actual_ko";
		}
		this.dom.mostrar_exito_campo('fechaNacimiento_persona');
		return true;
	}

	ADD_direccion_persona_validation(){
		if (!(this.validations.min_size('direccion_persona',10))){
			this.dom.mostrar_error_campo('direccion_persona','direccion_persona_min_size_ko');
			return "direccion_persona_min_size_ko";
		}
		if (!(this.validations.max_size('direccion_persona',200))){
			this.dom.mostrar_error_campo('direccion_persona','direccion_persona_max_size_ko');
			return "direccion_persona_max_size_ko";
		}
		// letras con ñ y acentos, numeros, puntos, guiones, punto y coma, espacios y /
		if (!(this.validations.format('direccion_persona','^[a-zA-Z0-9\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00fc\u00dc\u00f1\u00d1.;/ -]+$'))){
			this.dom.mostrar_error_campo('direccion_persona','direccion_persona_format_ko');
			return "direccion_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('direccion_persona');
		return true;
	}

	ADD_telefono_persona_validation(){
		if (!(this.validations.min_size('telefono_persona',9))){
			this.dom.mostrar_error_campo('telefono_persona','telefono_persona_min_size_ko');
			return "telefono_persona_min_size_ko";
		}
		if (!(this.validations.max_size('telefono_persona',9))){
			this.dom.mostrar_error_campo('telefono_persona','telefono_persona_max_size_ko');
			return "telefono_persona_max_size_ko";
		}
		// solo digitos
		if (!(this.validations.format('telefono_persona','^[0-9]+$'))){
			this.dom.mostrar_error_campo('telefono_persona','telefono_persona_format_ko');
			return "telefono_persona_format_ko";
		}
		if (!(this.personalize_telefono_persona_prefijo())){
			this.dom.mostrar_error_campo('telefono_persona','telefono_persona_prefijo_ko');
			return "telefono_persona_prefijo_ko";
		}
		this.dom.mostrar_exito_campo('telefono_persona');
		return true;
	}

	ADD_email_persona_validation(){
		if (!(this.validations.min_size('email_persona',6))){
			this.dom.mostrar_error_campo('email_persona','email_persona_min_size_ko');
			return "email_persona_min_size_ko";
		}
		if (!(this.validations.max_size('email_persona',45))){
			this.dom.mostrar_error_campo('email_persona','email_persona_max_size_ko');
			return "email_persona_max_size_ko";
		}
		// usuario@dominio.ext
		if (!(this.validations.format('email_persona','^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'))){
			this.dom.mostrar_error_campo('email_persona','email_persona_format_ko');
			return "email_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('email_persona');
		return true;
	}

	/**
	 * foto_persona no se muestra en ADD (el nombre lo pone el back al subir nuevo_foto_persona)
	 */
	ADD_foto_persona_validation(){
		return true;
	}

	ADD_nuevo_foto_persona_validation(){
		if (!(this.validations.exist_file('nuevo_foto_persona'))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_exist_file_ko');
			return "nuevo_foto_persona_exist_file_ko";
		}
		if (!(this.validations.type_file('nuevo_foto_persona',['image/jpeg','image/jpg']))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_type_file_ko');
			return "nuevo_foto_persona_type_file_ko";
		}
		// 2 MB
		if (!(this.validations.max_size_file('nuevo_foto_persona',2097152))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_max_size_file_ko');
			return "nuevo_foto_persona_max_size_file_ko";
		}
		// nombre del fichero entre 3 y 15 caracteres
		if (!(this.validations.format_name_file('nuevo_foto_persona','^.{3,}$'))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_min_size_name_file_ko');
			return "nuevo_foto_persona_min_size_name_file_ko";
		}
		if (!(this.validations.format_name_file('nuevo_foto_persona','^.{0,15}$'))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_max_size_name_file_ko');
			return "nuevo_foto_persona_max_size_name_file_ko";
		}
		// letras sin acentos y puntos, terminado en .jpg o .jpeg
		if (!(this.validations.format_name_file('nuevo_foto_persona','^[a-zA-Z.]+\\.(jpg|jpeg)$'))){
			this.dom.mostrar_error_campo('nuevo_foto_persona','nuevo_foto_persona_format_name_file_ko');
			return "nuevo_foto_persona_format_name_file_ko";
		}
		this.dom.mostrar_exito_campo('nuevo_foto_persona');
		return true;
	}

	ADD_submit_persona(){

		var set_result = {};
		set_result.dni = this.ADD_dni_validation();
		set_result.nombre_persona = this.ADD_nombre_persona_validation();
		set_result.apellidos_persona = this.ADD_apellidos_persona_validation();
		set_result.fechaNacimiento_persona = this.ADD_fechaNacimiento_persona_validation();
		set_result.direccion_persona = this.ADD_direccion_persona_validation();
		set_result.telefono_persona = this.ADD_telefono_persona_validation();
		set_result.email_persona = this.ADD_email_persona_validation();
		set_result.nuevo_foto_persona = this.ADD_nuevo_foto_persona_validation();

		let result = Boolean(
					(set_result.dni) &
					(set_result.nombre_persona) &
					(set_result.apellidos_persona) &
					(set_result.fechaNacimiento_persona) &
					(set_result.direccion_persona) &
					(set_result.telefono_persona) &
					(set_result.email_persona) &
					(set_result.nuevo_foto_persona)
					);

		if ((typeof result === 'boolean') && (result == true)){
			return result;
		}
		else{
			return set_result;
		}
	}

	/**********************************************************************************************
		validaciones personalizadas
	***********************************************************************************************/

	/**
	 * la letra del dni corresponde con el numero
	 * @returns {bool} true si la letra es la correcta, false si no
	 */
	personalize_dni_letra(){
		let dni = document.getElementById('dni').value;
		let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
		let letra = letras.charAt(parseInt(dni.substring(0,8), 10) % 23);
		return (letra == dni.charAt(8));
	}

	/**
	 * la fecha dd/mm/aaaa existe en el calendario
	 * @returns {bool} true si la fecha existe, false si no
	 */
	personalize_fechaNacimiento_persona_fecha_valida(){
		let partes = document.getElementById('fechaNacimiento_persona').value.split('/');
		let dia = parseInt(partes[0], 10);
		let mes = parseInt(partes[1], 10);
		let anio = parseInt(partes[2], 10);
		let fecha = new Date(anio, mes-1, dia);
		return ((fecha.getFullYear() == anio) && (fecha.getMonth() == mes-1) && (fecha.getDate() == dia));
	}

	/**
	 * la fecha dd/mm/aaaa es anterior a la fecha actual
	 * @returns {bool} true si es anterior a hoy, false si no
	 */
	personalize_fechaNacimiento_persona_fecha_anterior_actual(){
		let partes = document.getElementById('fechaNacimiento_persona').value.split('/');
		let fecha = new Date(parseInt(partes[2], 10), parseInt(partes[1], 10)-1, parseInt(partes[0], 10));
		let hoy = new Date();
		hoy.setHours(0,0,0,0);
		return (fecha < hoy);
	}

	/**
	 * el telefono es valido en España: empieza por 6, 7, 8 o 9
	 * @returns {bool} true si el prefijo es valido, false si no
	 */
	personalize_telefono_persona_prefijo(){
		let telefono = document.getElementById('telefono_persona').value;
		return ['6','7','8','9'].includes(telefono.charAt(0));
	}

	/**********************************************************************************************
		validaciones de campo EDIT
	***********************************************************************************************/

	EDIT_dni_validation(){
		return this.ADD_dni_validation();
	}

	EDIT_nombre_persona_validation(){
		return this.ADD_nombre_persona_validation();
	}

	EDIT_apellidos_persona_validation(){
		return this.ADD_apellidos_persona_validation();
	}

	EDIT_fechaNacimiento_persona_validation(){
		return this.ADD_fechaNacimiento_persona_validation();
	}

	EDIT_direccion_persona_validation(){
		return this.ADD_direccion_persona_validation();
	}

	EDIT_telefono_persona_validation(){
		return this.ADD_telefono_persona_validation();
	}

	EDIT_email_persona_validation(){
		return this.ADD_email_persona_validation();
	}

	/**
	 * foto_persona es readonly en EDIT (es el nombre del fichero guardado en el servidor)
	 */
	EDIT_foto_persona_validation(){
		return true;
	}

	/**
	 * en EDIT tambien es obligatorio subir la foto (definicion de tests de la ET1)
	 */
	EDIT_nuevo_foto_persona_validation(){
		return this.ADD_nuevo_foto_persona_validation();
	}

	EDIT_submit_persona(){

		var set_result = {};
		set_result.dni = this.EDIT_dni_validation();
		set_result.nombre_persona = this.EDIT_nombre_persona_validation();
		set_result.apellidos_persona = this.EDIT_apellidos_persona_validation();
		set_result.fechaNacimiento_persona = this.EDIT_fechaNacimiento_persona_validation();
		set_result.direccion_persona = this.EDIT_direccion_persona_validation();
		set_result.telefono_persona = this.EDIT_telefono_persona_validation();
		set_result.email_persona = this.EDIT_email_persona_validation();
		set_result.nuevo_foto_persona = this.EDIT_nuevo_foto_persona_validation();

		let result = Boolean(
					(set_result.dni) &
					(set_result.nombre_persona) &
					(set_result.apellidos_persona) &
					(set_result.fechaNacimiento_persona) &
					(set_result.direccion_persona) &
					(set_result.telefono_persona) &
					(set_result.email_persona) &
					(set_result.nuevo_foto_persona)
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

	SEARCH_nombre_persona_validation(){
		if (!(this.validations.max_size('nombre_persona',45))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_max_size_ko');
			return "nombre_persona_max_size_ko";
		}
		if (!(this.validations.format('nombre_persona','^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00fc\u00dc\u00f1\u00d1. -]*$'))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_format_ko');
			return "nombre_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('nombre_persona');
		return true;
	}

	SEARCH_apellidos_persona_validation(){
		if (!(this.validations.max_size('apellidos_persona',100))){
			this.dom.mostrar_error_campo('apellidos_persona','apellidos_persona_max_size_ko');
			return "apellidos_persona_max_size_ko";
		}
		if (!(this.validations.format('apellidos_persona','^[a-zA-Z\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00fc\u00dc\u00f1\u00d1. -]*$'))){
			this.dom.mostrar_error_campo('apellidos_persona','apellidos_persona_format_ko');
			return "apellidos_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('apellidos_persona');
		return true;
	}

	SEARCH_fechaNacimiento_persona_validation(){
		if (!(this.validations.max_size('fechaNacimiento_persona',10))){
			this.dom.mostrar_error_campo('fechaNacimiento_persona','fechaNacimiento_persona_max_size_ko');
			return "fechaNacimiento_persona_max_size_ko";
		}
		// solo numeros y el separador /
		if (!(this.validations.format('fechaNacimiento_persona','^[0-9/]*$'))){
			this.dom.mostrar_error_campo('fechaNacimiento_persona','fechaNacimiento_persona_format_ko');
			return "fechaNacimiento_persona_format_ko";
		}
		// si la fecha esta completa tiene que existir
		if ((this.validations.format('fechaNacimiento_persona','^[0-9]{2}/[0-9]{2}/[0-9]{4}$')) &&
			(!(this.personalize_fechaNacimiento_persona_fecha_valida()))){
			this.dom.mostrar_error_campo('fechaNacimiento_persona','fechaNacimiento_persona_fecha_valida_ko');
			return "fechaNacimiento_persona_fecha_valida_ko";
		}
		this.dom.mostrar_exito_campo('fechaNacimiento_persona');
		return true;
	}

	SEARCH_direccion_persona_validation(){
		if (!(this.validations.max_size('direccion_persona',200))){
			this.dom.mostrar_error_campo('direccion_persona','direccion_persona_max_size_ko');
			return "direccion_persona_max_size_ko";
		}
		if (!(this.validations.format('direccion_persona','^[a-zA-Z0-9\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00fc\u00dc\u00f1\u00d1.;/ -]*$'))){
			this.dom.mostrar_error_campo('direccion_persona','direccion_persona_format_ko');
			return "direccion_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('direccion_persona');
		return true;
	}

	SEARCH_telefono_persona_validation(){
		if (!(this.validations.max_size('telefono_persona',9))){
			this.dom.mostrar_error_campo('telefono_persona','telefono_persona_max_size_ko');
			return "telefono_persona_max_size_ko";
		}
		if (!(this.validations.format('telefono_persona','^[0-9]*$'))){
			this.dom.mostrar_error_campo('telefono_persona','telefono_persona_format_ko');
			return "telefono_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('telefono_persona');
		return true;
	}

	SEARCH_email_persona_validation(){
		if (!(this.validations.max_size('email_persona',45))){
			this.dom.mostrar_error_campo('email_persona','email_persona_max_size_ko');
			return "email_persona_max_size_ko";
		}
		// letras sin acentos, numeros y los simbolos . _ % + - @
		if (!(this.validations.format('email_persona','^[a-zA-Z0-9._%+@-]*$'))){
			this.dom.mostrar_error_campo('email_persona','email_persona_format_ko');
			return "email_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('email_persona');
		return true;
	}

	SEARCH_foto_persona_validation(){
		if (!(this.validations.max_size('foto_persona',15))){
			this.dom.mostrar_error_campo('foto_persona','foto_persona_max_size_ko');
			return "foto_persona_max_size_ko";
		}
		// letras sin acentos y puntos
		if (!(this.validations.format('foto_persona','^[a-zA-Z.]*$'))){
			this.dom.mostrar_error_campo('foto_persona','foto_persona_format_ko');
			return "foto_persona_format_ko";
		}
		this.dom.mostrar_exito_campo('foto_persona');
		return true;
	}

	/**
	 * nuevo_foto_persona no se muestra en SEARCH
	 */
	SEARCH_nuevo_foto_persona_validation(){
		return true;
	}

	SEARCH_submit_persona(){

		var set_result = {};
		set_result.dni = this.SEARCH_dni_validation();
		set_result.nombre_persona = this.SEARCH_nombre_persona_validation();
		set_result.apellidos_persona = this.SEARCH_apellidos_persona_validation();
		set_result.fechaNacimiento_persona = this.SEARCH_fechaNacimiento_persona_validation();
		set_result.direccion_persona = this.SEARCH_direccion_persona_validation();
		set_result.telefono_persona = this.SEARCH_telefono_persona_validation();
		set_result.email_persona = this.SEARCH_email_persona_validation();
		set_result.foto_persona = this.SEARCH_foto_persona_validation();

		let result = Boolean(
					(set_result.dni) &
					(set_result.nombre_persona) &
					(set_result.apellidos_persona) &
					(set_result.fechaNacimiento_persona) &
					(set_result.direccion_persona) &
					(set_result.telefono_persona) &
					(set_result.email_persona) &
					(set_result.foto_persona)
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
	 * recibe aaaa-mm-dd y devuelve dd/mm/aaaa
	 * @param {string} stringfecha fecha en formato aaaa-mm-dd
	 * @returns {string} fecha en formato dd/mm/aaaa
	 */
	cambiarformatoFecha(stringfecha){
		if ((stringfecha === undefined) || (stringfecha === null) || (!stringfecha.includes('-'))){
			return stringfecha;
		}
		let elementos = stringfecha.split('-');
		return elementos[2]+'/'+elementos[1]+'/'+elementos[0];
	}

	/**
	 * devuelve el valor a mostrar en la tabla para los atributos de mostrarespecial
	 * @param {string} atributo nombre del atributo
	 * @param {any} valorentrada valor del atributo en la tupla
	 * @returns {string} valor a mostrar
	 */
	mostrarcambioatributo(atributo, valorentrada){
		switch(atributo){
			case 'fechaNacimiento_persona':
				return this.cambiarformatoFecha(valorentrada);
			case 'foto_persona':
				return `<a href='`+this.urlfotos+valorentrada+`' target='_blank'><img src='./iconos/FILE.png' width='20'> `+valorentrada+`</a>`;
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
