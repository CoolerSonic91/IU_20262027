class dom {

	/**
		@constructor
	*/
	constructor(){
		
	}

	/**
		Pone el elemento del DOM que se pasa como id visible  

		@param {string} id es el id del elemento del DOM que se quiere poner visible

	*/
	show_element(id){
		document.getElementById(id).style.display = 'block';
	}

	/**
	 	Modifica el aspecto del campo en función de si tiene un error. Borde rojo y mensaje de error si tiene error
		
		@param 
	  		{string} id es el id del campo del formulario al cual se va mostrar el error 
			{string} codigoerror es el código del error a mostrar para ese campo del formulario
		
	*/
	mostrar_error_campo(id, codigoerror){
		document.getElementById('span_error_'+id).style.display = 'inline';
		document.getElementById('error_'+id).innerHTML = codigoerror;
		document.getElementById(id).style.borderBlockColor = 'red';
		document.getElementById('submit_button').focus();
	}

	/**
	 	Modifica el aspecto del campo en función de si no tiene un error. Borde verde si correcto
		
		@param 
	  		{string} id es el id del campo del formulario al cual se va mostrar el error 
			{string} codigoerror es el código del error a mostrar para ese campo del formulario
		
	*/
	mostrar_exito_campo(id){
		document.getElementById('span_error_'+id).style.display = 'none';
		document.getElementById('error_'+id).innerHTML = '';
		document.getElementById(id).style.borderBlockColor = 'green';
	}

}