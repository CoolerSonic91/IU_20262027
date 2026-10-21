class persona extends Validations {
  constructor(esTest) {
    super();
    this.dom = new dom();
    this.nombreentidad = "persona";

    if (esTest != "test") {
      this.dom.fillform(this.manual_form_creation(), "IU_form");
    }
  }

  /**
   * creates a variable with a form for a particular entity menu
   * @returns a variable with the form definition
   */
  manual_form_creation() {
    var form_content = `
			<form action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="if (typeof entidad.ADD_submit_persona() === 'object') {return false} else {return true};">

			<label class="label_dni">DNI</label>
			<input type='text' id='dni' name='dni' onblur=" return entidad.ADD_dni_validation();"></input>
			<span id="span_error_dni"><a id="error_dni"></a></span>
			<br>

			<label class="label_nombre_persona">Nombre de pila</label>
			<input type='text' id='nombre_persona' name='nombre_persona' onblur=" return entidad.ADD_nombre_persona_validation();"></input>
			<span id="span_error_nombre_persona" ><a id="error_nombre_persona"></a></span>
			<br>

			<label class="label_apellidos_persona">Apellidos</label>
			<input type='text' id='apellidos_persona' name='apellidos_persona' onblur=" return entidad.ADD_apellidos_persona_validation();"></input>
			<span id="span_error_apellidos_persona" ><a id="error_apellidos_persona"></a></span>
			<br>

			<label class="label_fechaNacimiento_persona">Fecha de Nacimiento</label>
			<input type='text' id='fechaNacimiento_persona' name='fechaNacimiento_persona' onblur=" return entidad.ADD_fechaNacimiento_persona_validation();"></input>
			<span id="span_error_fechaNacimiento_persona" ><a id="error_fechaNacimiento_persona"></a></span>
			<br>

			<label class="label_direccion_persona">Dirección Postal</label>
			<input type='text' id='direccion_persona' name='direccion_persona' onblur=" return entidad.ADD_direccion_persona_validation();"></input>
			<span id="span_error_direccion_persona" ><a id="error_direccion_persona"></a></span>
			<br>

			<label class="label_telefono_persona">Teléfono Persona</label>
			<input type='text' id='telefono_persona' name='telefono_persona' onblur=" return entidad.ADD_telefono_persona_validation();"></input>
			<span id="span_error_telefono_persona" ><a id="error_telefono_persona"></a></span>
			<br>

			<label class="label_email_persona">Correo Electronico</label>
			<input type='text' id='email_persona' name='email_persona' onblur=" return entidad.ADD_email_persona_validation();"></input>
			<span id="span_error_email_persona" ><a id="error_email_persona"></a></span>
			<br>

			<label id="label_nuevo_foto_persona" class="label_nuevo_foto_persona">Nueva Foto Persona</label>
			<input type='file' id='nuevo_foto_persona' name='nuevo_foto_persona' onchange=" return entidad.ADD_nuevo_foto_persona_validation();"></input>
			<span id="span_error_nuevo_foto_persona"><a id="error_nuevo_foto_persona"></a></span>
			<br>

			<input id="submit_button" type="submit" value="Submit">

		</form>
		`;
    return form_content;
  }

  /**********************************************************************************************
    expresiones regulares y limites de cada campo (una sola definicion para ADD, EDIT y SEARCH)
  ***********************************************************************************************/

  static LETRAS = "A-Za-zÁÉÍÓÚáéíóúÜüÑñ";
  static TAM_MAX_FOTO = 2097152; // 2 MB en bytes

  /**
   * Ejecuta en orden una lista de comprobaciones sobre un campo.
   * @param {string} id id del campo
   * @param {Array} comprobaciones lista de [funcion que devuelve true si es correcto, codigo de error]
   * @returns {bool|string} true si todas son correctas o el codigo de error de la primera que falla
   */
  comprobar_campo(id, comprobaciones) {
    for (const [es_correcto, codigo] of comprobaciones) {
      if (!es_correcto()) {
        this.dom.mostrar_error_campo(id, codigo);
        return codigo;
      }
    }
    this.dom.mostrar_exito_campo(id);
    return true;
  }

  /**
   * Comprobaciones de un campo de texto: tamaño minimo, maximo y formato.
   * En SEARCH no se comprueba el minimo y se usa la expresion de busqueda (permite vacio y valores parciales).
   */
  validar_texto(id, min, max, formato) {
    const comprobaciones = [];
    if (min !== null) {
      comprobaciones.push([() => this.min_size(id, min), id + "_min_size_ko"]);
    }
    comprobaciones.push([() => this.max_size(id, max), id + "_max_size_ko"]);
    comprobaciones.push([() => this.format(id, formato), id + "_format_ko"]);
    return comprobaciones;
  }

  /**********************************************************************************************
    fields validations for ADD
    @return {string} Error code of field value (fieldname_validationfunction_ko) or
    @return {bool} true due the field value is correct
  ***********************************************************************************************/

  ADD_dni_validation() {
    return this.comprobar_campo("dni", [
      ...this.validar_texto("dni", 9, 9, "^[0-9]{8}[A-Z]$"),
      [() => this.verificar_letra_dni("dni"), "dni_letra_ko"],
    ]);
  }

  ADD_nombre_persona_validation() {
    return this.comprobar_campo("nombre_persona",
      this.validar_texto("nombre_persona", 2, 45, "^[" + persona.LETRAS + ". -]+$"));
  }

  ADD_apellidos_persona_validation() {
    return this.comprobar_campo("apellidos_persona",
      this.validar_texto("apellidos_persona", 3, 100, "^[" + persona.LETRAS + ". -]+$"));
  }

  ADD_fechaNacimiento_persona_validation() {
    const id = "fechaNacimiento_persona";
    return this.comprobar_campo(id, [
      ...this.validar_texto(id, 10, 10, "^[0-9]{2}/[0-9]{2}/[0-9]{4}$"),
      [() => this.verificar_fecha_valida(id), id + "_fecha_valida_ko"],
      [() => this.verificar_fecha_anterior_actual(id), id + "_fecha_anterior_actual_ko"],
    ]);
  }

  ADD_direccion_persona_validation() {
    return this.comprobar_campo("direccion_persona",
      this.validar_texto("direccion_persona", 10, 200, "^[" + persona.LETRAS + "0-9.;/ -]+$"));
  }

  ADD_telefono_persona_validation() {
    return this.comprobar_campo("telefono_persona",
      this.validar_texto("telefono_persona", 9, 9, "^[6789][0-9]{8}$"));
  }

  ADD_email_persona_validation() {
    return this.comprobar_campo("email_persona",
      this.validar_texto("email_persona", null, 45, "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"));
  }

  ADD_nuevo_foto_persona_validation() {
    const id = "nuevo_foto_persona";
    return this.comprobar_campo(id, [
      [() => this.exist_file(id), id + "_exist_file_ko"],
      ...this.validar_fichero_foto(id),
    ]);
  }

  // foto_persona guarda el nombre de la foto ya subida; no lo escribe el usuario,
  // pero si viene relleno debe cumplir las mismas reglas que el nombre del fichero
  ADD_foto_persona_validation() {
    return this.SEARCH_foto_persona_validation();
  }

  /**
    @return	{bool} true if all fields validations are ok or
    @return {object} object with the ids of elements and error code if field validation is not ok and true if field validation is ok
  */
  ADD_submit_persona() {
    var set_result = {};
    set_result.dni = this.ADD_dni_validation();
    set_result.nombre_persona = this.ADD_nombre_persona_validation();
    set_result.apellidos_persona = this.ADD_apellidos_persona_validation();
    set_result.fechaNacimiento_persona = this.ADD_fechaNacimiento_persona_validation();
    set_result.direccion_persona = this.ADD_direccion_persona_validation();
    set_result.telefono_persona = this.ADD_telefono_persona_validation();
    set_result.email_persona = this.ADD_email_persona_validation();
    set_result.nuevo_foto_persona = this.ADD_nuevo_foto_persona_validation();

    if (Object.values(set_result).every((resultado) => resultado === true)) {
      return true;
    }
    return set_result;
  }

  /**********************************************************************************************
    fields validations for EDIT
  ***********************************************************************************************/

  EDIT_dni_validation() {
    return this.ADD_dni_validation();
  }

  EDIT_nombre_persona_validation() {
    return this.ADD_nombre_persona_validation();
  }

  EDIT_apellidos_persona_validation() {
    return this.ADD_apellidos_persona_validation();
  }

  EDIT_fechaNacimiento_persona_validation() {
    return this.ADD_fechaNacimiento_persona_validation();
  }

  EDIT_direccion_persona_validation() {
    return this.ADD_direccion_persona_validation();
  }

  EDIT_telefono_persona_validation() {
    return this.ADD_telefono_persona_validation();
  }

  EDIT_email_persona_validation() {
    return this.ADD_email_persona_validation();
  }

  EDIT_foto_persona_validation() {
    return this.ADD_foto_persona_validation();
  }

  // En EDIT la foto nueva es opcional: si no se sube ninguna se mantiene la actual
  EDIT_nuevo_foto_persona_validation() {
    const id = "nuevo_foto_persona";
    if (!this.exist_file(id)) {
      this.dom.mostrar_exito_campo(id);
      return true;
    }
    return this.comprobar_campo(id, this.validar_fichero_foto(id));
  }

  EDIT_submit_persona() {
    return this.ADD_submit_persona();
  }

  /**********************************************************************************************
    fields validations for SEARCH (sin tamaño minimo; se admite vacio y valores parciales)
  ***********************************************************************************************/

  SEARCH_dni_validation() {
    return this.comprobar_campo("dni",
      this.validar_texto("dni", null, 9, "^[0-9]{0,8}[A-Z]?$"));
  }

  SEARCH_nombre_persona_validation() {
    return this.comprobar_campo("nombre_persona",
      this.validar_texto("nombre_persona", null, 45, "^[" + persona.LETRAS + ". -]*$"));
  }

  SEARCH_apellidos_persona_validation() {
    return this.comprobar_campo("apellidos_persona",
      this.validar_texto("apellidos_persona", null, 100, "^[" + persona.LETRAS + ". -]*$"));
  }

  SEARCH_fechaNacimiento_persona_validation() {
    return this.comprobar_campo("fechaNacimiento_persona",
      this.validar_texto("fechaNacimiento_persona", null, 10, "^[0-9/]*$"));
  }

  SEARCH_direccion_persona_validation() {
    return this.comprobar_campo("direccion_persona",
      this.validar_texto("direccion_persona", null, 200, "^[" + persona.LETRAS + "0-9.;/ -]*$"));
  }

  SEARCH_telefono_persona_validation() {
    return this.comprobar_campo("telefono_persona",
      this.validar_texto("telefono_persona", null, 9, "^[0-9]*$"));
  }

  SEARCH_email_persona_validation() {
    return this.comprobar_campo("email_persona",
      this.validar_texto("email_persona", null, 45, "^[A-Za-z0-9._%+@-]*$"));
  }

  SEARCH_foto_persona_validation() {
    return this.comprobar_campo("foto_persona",
      this.validar_texto("foto_persona", null, 15, "^[A-Za-z.]*$"));
  }

  // En una busqueda no se sube ningun fichero
  SEARCH_nuevo_foto_persona_validation() {
    return true;
  }

  SEARCH_submit_persona() {
    return true;
  }

  /**********************************************************************************************
    métodos adicionales
  ***********************************************************************************************/

  /**
   * Comprobaciones comunes de la foto (ADD y EDIT), en el orden en que se aplican.
   * Nombre: letras sin acentos y puntos, terminado en .jpg o .jpeg, entre 3 y 15 caracteres.
   */
  validar_fichero_foto(id) {
    const nombre = () => document.getElementById(id).files[0].name;
    return [
      [() => this.type_file(id, ["image/jpeg"]), id + "_type_file_ko"],
      [() => this.max_size_file(id, persona.TAM_MAX_FOTO), id + "_max_size_file_ko"],
      [() => nombre().length >= 3, id + "_min_size_name_file_ko"],
      [() => nombre().length <= 15, id + "_max_size_name_file_ko"],
      [() => this.format_name_file(id, "^[A-Za-z.]+\\.([jJ][pP][eE]?[gG])$"), id + "_format_name_file_ko"],
    ];
  }

  // Comprueba que la letra del DNI corresponde con su numero (resto de dividir entre 23)
  verificar_letra_dni(id) {
    const dni = document.getElementById(id).value;
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    return letras.charAt(parseInt(dni.substring(0, 8), 10) % 23) === dni.charAt(8);
  }

  // Convierte un valor dd/mm/aaaa en fecha (sin comprobar si existe)
  leer_fecha(id) {
    const [dia, mes, anio] = document.getElementById(id).value.split("/").map(Number);
    return { dia, mes, anio, fecha: new Date(anio, mes - 1, dia) };
  }

  // La fecha existe en el calendario (descarta 31/04, 29/02 en años no bisiestos, mes 13...)
  verificar_fecha_valida(id) {
    const { dia, mes, anio, fecha } = this.leer_fecha(id);
    return fecha.getFullYear() === anio && fecha.getMonth() === mes - 1 && fecha.getDate() === dia;
  }

  // La fecha es anterior al dia de hoy
  verificar_fecha_anterior_actual(id) {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    return this.leer_fecha(id).fecha < hoy;
  }
}
