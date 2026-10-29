class dom_fields extends dom_form{

    constructor(){
		super();
    }

/**
	 * crea un elemento del DOM y lo devuelve
	 * 
	 * @param {string} tag html a crear
	 * @param {string} tipo del tag si corresponde 
	 * @param {string} nombrecampo name e id del tag html a crear
	 * @param {object} valores objeto con los valores a colocar en el tad
	 * @returns el objeto dom creado
	 */
	crearElementoHtml(tag, tipo, nombrecampo, valores){

		switch (tag){
			case 'input':
				//si tiene mas de un valor, creo y relleno todos los campos con sus valores y devuelvo el primero
				//let counter = 0;
				for (var clave in valores){
					
					var nombrecampo = clave;
					var valorcampo = valores[nombrecampo];
					var element = this.createInput(nombrecampo, tipo);
					this.fillElementValue(element, valorcampo);
					this.colocarelemento(element, 'form');
					/*if (counter == 0){
						var elementToReturn = element;
					}
					counter++;*/

				}
				
				//return elementToReturn;
				break;
			case 'file':
				element = this.createInput(nombrecampo, tipo);
				this.fillElementFile(element, valores);
				//return element;
				this.colocarelemento(element, 'form');
				break;
			default: // este lo uso para crear los span y los a de los errores sin valor
				element = document.createElement(tag);
				element.type = tipo;
				element.id = nombrecampo;
				this.fillElementValue(element, '');
				this.colocarelemento(element, 'form');
				return element;
				break;	
		}

	}

	/**
	 * 
	 * crea un elemento input proporcionandole su nombre y su tipo
	 * @name createInput
	 * @param {string} nombre nombre el elemento input, se usa tambien como id 
	 * @param {string} tipo del input
	 * @returns elemento input creado
	 */

	createInput(nombre, tipo){
		var newElement = document.createElement('input');
		newElement.type = tipo;
		newElement.id = nombre;
		newElement.name = nombre;
		return newElement;
	}

	/**
	 * rellena el valor de un objeto simple del DOM
	 * @name fillElementValue
	 * @param {object} elemento se le pasa el objeto del DOM 
	 * @param {string} valor valor a colocar en el objeto DOM
	 */

	fillElementValue(elemento, valor){
		elemento.setAttribute('value', valor);
	}

	/**
	 * Rellena el valor de un objeto file para ponerselo a un elemento DOM input file
	 * @name fillElementFile
	 * @param {*} elemento elemento input file DOM
	 * @param {*} valores del fichero que se incluye en el elemento.
	 */
	fillElementFile(elemento, valores){
	
		// creo objeto html sino tengo cargado el formulario (para crear cada elemento dinamicamente dentro del form)
        // construyo objeto file y relleno valor para prueba
        if (Object.values(valores).length > 0){
                              
			var fichero = Object.keys(valores)[0];			
			
			var nombrefichero = valores[fichero].format_name_file;
			var tipomime = valores[fichero].type_file;
			var maxsize = valores[fichero].max_size_file;   

			var file = new File([new ArrayBuffer(maxsize)], nombrefichero ,{type:tipomime, webkitRelativePath:"C:\\fakepath\\"+nombrefichero});
					
			// Create a data transfer object. Similar to what you get from a `drop` event as `event.dataTransfer`
			const dataTransfer = new DataTransfer();

			// Add your file to the file list of the object
			dataTransfer.items.add(file);

			// Save the file list to a new variable
			const fileList = dataTransfer.files;

			// Set your input `files` to the file list
			elemento.files = fileList;

        }
		else{
			const dataTransfer = new DataTransfer();
			const fileList = dataTransfer.files;
			elemento.files = fileList;
		}
	
	}

	

}