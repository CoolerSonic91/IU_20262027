class Validations{

	constructor(){
		
	}
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

	/**
		devuelve true si el valor del id cumple el criterio

		@name max_size
		@param {string} id Id objeto dom
		@param {number} maxsize tamaño maximo a validar
		@return {bool} true si correcto false si no correcto

	*/
	
	max_size(id, maxsize){
		let elemento = document.getElementById(id);
		switch (elemento.tagName){
			case 'INPUT':
				switch (elemento.type){
					case 'number':
					case 'email':
					case 'text':
						let valorelemento = elemento.value;
						if (valorelemento.length>maxsize){
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

	/**
		devuelve true si el valor del elemento id satisface la expresion regular

		@name format

		@param {string} id of html element
		@param {string} regular expression to testing id html element value
		@return {bool} result of regular expression testing  

	*/
	format(id, exprreg){
		let expresionregular = new RegExp(exprreg);
		let valor = document.getElementById(id).value;
		return expresionregular.test(valor);
	}

	/**
		devuelve true si el elemento id contiene un fichero

		@name exits_file

		@param {string} id of html element
		@return {bool} true if there is a file in the element   

	*/
	exist_file(id){
		let objfile = document.getElementById(id);
		if (objfile.files.length == 0){
			return false;
		}
		return true;
	}

	/**
		devuelve true si el fichero no sobrepasa el tamaño en bytes indicado

		@name max_size_file

		@param {string} id of html file element
		@param {number} maxsize max size allowed for file in bytes
		@return {bool} result of size comparison

	*/
	max_size_file(id, maxsize){
		let objfile = document.getElementById(id);
		if (objfile.files[0].size>maxsize){
			return false;
		}
		return true;
	}

	/**
		devuelve true si el tipo del fichero está dentro de los tipos indicados

		@name type_file

		@param {string} id of html file element
		@param {object} array_tipos lista de los tipos de ficheros permitidos
		@return {bool} true si el tipo del fichero está en los tipos de fichero permitidos

	*/

	type_file(id, array_tipos){
		let objfile = document.getElementById(id);
		if (!(array_tipos.includes(objfile.files[0].type))){
			return false;
		}
		return true;
	}

	/**
		devuelve true si el nombre del fichero corresponde con la expresión regular proporcionada

		@name format_name_file

		@param {string} id of html file element
		@param {string} regular expresion
		@return {bool} result of regular expression testing

	*/
	format_name_file(id, exprreg){
		let objfile = document.getElementById(id);
		let expresionregular = new RegExp(exprreg);
		let valor = objfile.files[0].name;
		return expresionregular.test(valor);
	}

}