class dom_form {

    constructor(){
    }

    /**
	 * Coloca en el formulario para cada elemento de entrada un evento (dependiente
	 * del tipo de elemento) al cual enlaza la validacion de ese campo para la accion
	 * que se le indica
	 * 
	 * @param {String} accion  accion a realizar en el formulario
	 */
	colocarvalidaciones(idform, accion){
		
		let evento;
		//obtener campos del formulario
        	let campos = document.forms[idform].elements;
        	//recorrer todos los campos
        	for (let i=0;i<campos.length;i++) {
			if ((document.getElementById(campos[i].id).tagName == 'INPUT') && 
				(document.getElementById(campos[i].id).type !== 'file')){
		                evento = 'onblur';
			}
			else{
				evento = 'onchange';
			}
			
			if (document.getElementById(campos[i].id).type == 'submit'){}
			else{
				document.getElementById(campos[i].id).setAttribute (evento,'entidad.'+accion+'_'+campos[i].id+'_validation'+'();');
			}		        
		}
	}

	/**
	 * Construye un boton de submit con el icono correspondiente 
	 * 
	 * @param {String} accion accion a realizar
	 */
	colocarboton(accion){

		let divboton = document.createElement('div');
		divboton.id = 'div_boton';
		//divboton.stype.display = 'block';
		document.getElementById('form_iu').append(divboton);
		let boton = document.createElement('button');
		boton.id = 'submit_button';
		boton.type = 'submit';
		let img = document.createElement('img');
		img.src = './iconos/'+accion+'.png';
		boton.append(img);
		document.getElementById('div_boton').append(boton);

	}

	/**
	 * rellena cada elemento del formulario con el valor que viene en la fila
	 * 
	 * @param {Object} parametros el objeto con la información de la fila
	 * trae por cada atributo su id y su valor
	 */
	rellenarvaloresform(parametros){
		
		//obtener campos del formulario
        	let campos = document.forms['form_iu'].elements;
        	//recorrer todos los campos
        	for (let i=0;i<campos.length;i++) {
				switch (document.getElementById(campos[i].id).type){
					case 'file':
						break;
					case 'submit':
						break;
					case 'textarea':
						document.getElementById(campos[i].id).innerHTML = parametros[campos[i].id];
					default:
						document.getElementById(campos[i].id).value = parametros[campos[i].id];
				}
        	}
	}

	/**
	 * 
	 * @param {String} idform id del formulario en donde se van a colocar todos sus elementos a readlonly true
	 */
	colocartodosreadonly(idform){
		let campos = document.forms[idform].elements;
        //recorrer todos los campos
        for (let i=0;i<campos.length;i++) {
			document.getElementById(campos[i].id).setAttribute('readonly',true);
		}
	}

	/**
	 * 
	 * @param {bool} return value of action_submit_validation if is correct OR
	 * @param {object} retun value of action_submit_validation if is not correct
	 * @returns {bool} return true if value is true and return false if value is object
	 */
	validarsubmit(value){
		if (typeof value === 'object') {return false} else {return true};
	}

}