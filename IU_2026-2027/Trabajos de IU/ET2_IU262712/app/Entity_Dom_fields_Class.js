/**
 * clase para refactorizar los metodos de dom_fields que se consideren necesarios sin modificar su definición y para inclusión de nuevos métodos
 */
class entity_dom_fields extends dom_fields{
    constructor(){
        super();
    }

	/**
	 * Refactorizado: ademas de los tags que trata dom_fields se crean los select
	 * (claves foraneas) con una opcion que tiene el valor de la prueba seleccionada.
	 *
	 * @param {string} contenedor componente donde debe colocarse el elemento
	 * @param {string} tag html a crear
	 * @param {string} nombrecampo name e id del tag html a crear
	 * @param {object} valores objeto con los valores a colocar en el tag
	 * @param {object} extra objeto opcional
	 */
	crearElementoHtml(contenedor, tag, nombrecampo, valores, extra=null){

		if (tag == 'select'){
			let element = document.createElement('select');
			element.id = nombrecampo;
			element.name = nombrecampo;
			let valor = (valores[nombrecampo] === undefined) ? '' : valores[nombrecampo];
			let opcion = document.createElement('option');
			opcion.value = valor;
			opcion.innerHTML = valor;
			opcion.selected = true;
			element.append(opcion);
			this.colocarelemento(element, contenedor);
		}
		else{
			super.crearElementoHtml(contenedor, tag, nombrecampo, valores, extra);
		}

	}

	/**
	 * Refactorizado: muestra el error del campo sustituyendo el codigo de error anterior
	 * (si se añaden varias class el texto traducido puede ser el de un error anterior)
	 * y marca todo el borde del campo en rojo.
	 *
	 * @param {string} id id del campo del formulario
	 * @param {string} codigoerror codigo del error a mostrar
	 */
	mostrar_error_campo(id, codigoerror){
		document.getElementById('span_error_'+id).style.display = 'inline';
		document.getElementById('error_'+id).className = codigoerror;
		document.getElementById('error_'+id).innerHTML = codigoerror;
		document.getElementById(id).style.border = '2px solid red';
		setLang();
	}

	/**
	 * Refactorizado: oculta el error del campo, borra su codigo de error y marca el borde en verde.
	 *
	 * @param {string} id id del campo del formulario
	 */
	mostrar_exito_campo(id){
		document.getElementById('span_error_'+id).style.display = 'none';
		document.getElementById('error_'+id).className = '';
		document.getElementById('error_'+id).innerHTML = '';
		document.getElementById(id).style.border = '2px solid green';
	}

	/**
	 * Refactorizado: en dom se usaba classList.add = errorMsg (no añade la class) y el modal
	 * aparecia vacio. Se coloca el codigo de error como class para que setLang lo traduzca
	 * (si no hay traduccion se ve el codigo de error devuelto por el back).
	 *
	 * @param {string} errorMsg codigo de error devuelto por el back
	 */
	abrirModalError(errorMsg){
		document.getElementById('error_action_modal').style.display = 'block';
		document.getElementById('modal_action_overlay').style.display = 'block';
		document.getElementById('error_action_msg').innerHTML = errorMsg;
		document.getElementById('error_action_msg').className = errorMsg;
		setLang();
	}

	/**
	 * Nuevo: rellena un select con las filas recibidas (por ejemplo las de una entidad
	 * referenciada por una clave foranea) y deja seleccionada la opcion indicada.
	 *
	 * @param {string} idselect id del select
	 * @param {Array} datos filas con las que crear las opciones
	 * @param {string} campovalor atributo de la fila que se usa como value de la opcion
	 * @param {string} campotexto atributo de la fila que se muestra junto al value
	 * @param {string} valorseleccionado value de la opcion a seleccionar
	 * @param {bool} opcionvacia si es true se añade una primera opcion vacia (sin seleccion)
	 */
	rellenarselect(idselect, datos, campovalor, campotexto, valorseleccionado='', opcionvacia=true){

		let select = document.getElementById(idselect);
		select.innerHTML = '';

		if (opcionvacia){
			let vacia = document.createElement('option');
			vacia.value = '';
			vacia.innerHTML = '--';
			select.append(vacia);
		}

		for (let fila of datos){
			let opcion = document.createElement('option');
			opcion.value = fila[campovalor];
			opcion.innerHTML = fila[campovalor] + ' - ' + fila[campotexto];
			if (String(fila[campovalor]) == String(valorseleccionado)){
				opcion.selected = true;
			}
			select.append(opcion);
		}

	}
}
