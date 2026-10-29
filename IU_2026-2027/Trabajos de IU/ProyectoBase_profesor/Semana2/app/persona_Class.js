class persona extends Validations{

	/**
	 * ejecuta el constructor de la clase de donde hereda
	 * crea como atributo propio la clase de manejo visual del dom para poder utilizar los métodos de modificación de estructura definidos
	 */
	constructor(){
		super();
		this.dom = new dom();
	}	

	/*
		fields validations for ADD
	*/

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

	/** 
		
		@param 
		@return {bool/string} true if field value is ok or  Error code of field value (fieldname_validationfunction_KO) if field value is not ok
			{string} Error code of field value (fieldname_validationfunction_KO) 
			or
			{bool} true due the field value is correct

	*/

	ADD_nombre_persona_validation(){
		
		if (!(this.min_size('nombre_persona',4))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_min_size_KO');
			return "nombre_persona_min_size_KO";
		}
		if (!(this.max_size('nombre_persona',8))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_max_size_KO');
			return "nombre_persona_max_size_KO";
		}
		// allowed format aA to zZ letter
		if (!(this.format('nombre_persona', '^[a-zA-Z]'))){
			this.dom.mostrar_error_campo('nombre_persona','nombre_persona_format_KO');
			return "nombre_persona_format_KO";
		}
		this.dom.mostrar_exito_campo('nombre_persona');
		return true;
	}

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
	


}
