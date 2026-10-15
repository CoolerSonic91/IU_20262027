// Definicion de tests: usuario_def_tests (9 columnas)

var usuario_def_tests = [

	// -------------------------------------------------------------
	// ATRIBUTO: dni (input, min 9 max 9, 8 digitos y 1 letra)
	// -------------------------------------------------------------
	// ---------ADD-------------------------
	['usuario', 'dni', 'input', 1, 'Validar min size dni en ADD (min 9)', 'min_size', 'ADD', 'dni_min_size_ko', 'El DNI es demasiado corto (minimo 9 caracteres)'],
	['usuario', 'dni', 'input', 2, 'Validar max size dni en ADD (max 9)', 'max_size', 'ADD', 'dni_max_size_ko', 'El DNI es demasiado largo (maximo 9 caracteres)'],
	['usuario', 'dni', 'input', 3, 'Validar formato dni en ADD', 'format', 'ADD', 'dni_format_ko', 'El Formato del DNI debe ser 8 numeros y una letra'],
	['usuario', 'dni', 'input', 4, 'Validar letra dni en ADD (modulo 23)', 'personalized', 'ADD', 'dni_letra_ko', 'La letra del DNI no se corresponde con los numeros'],
	['usuario', 'dni', 'input', 5, 'Validar dni correcto en ADD', 'valid', 'ADD', true, 'DNI correcto'],

	// ---------EDIT-------------------------
	['usuario', 'dni', 'input', 6, 'Validar min size dni en EDIT (min 9)', 'min_size', 'EDIT', 'dni_min_size_ko', 'El DNI es demasiado corto en EDIT (minimo 9 caracteres)'],
	['usuario', 'dni', 'input', 7, 'Validar max size dni en EDIT (max 9)', 'max_size', 'EDIT', 'dni_max_size_ko', 'El DNI es demasiado largo en EDIT (maximo 9 caracteres)'],
	['usuario', 'dni', 'input', 8, 'Validar formato dni en EDIT', 'format', 'EDIT', 'dni_format_ko', 'El Formato del DNI debe ser 8 numeros y una letra'],
	['usuario', 'dni', 'input', 9, 'Validar letra dni en EDIT (modulo 23)', 'personalized', 'EDIT', 'dni_letra_ko', 'La letra del DNI no se corresponde con los numeros'],
	['usuario', 'dni', 'input', 10, 'Validar dni correcto en EDIT', 'valid', 'EDIT', true, 'DNI correcto en EDIT'],

	// ---------SEARCH-------------------------
	['usuario', 'dni', 'input', 11, 'Validar max size dni en SEARCH (max 9)', 'max_size', 'SEARCH', 'dni_max_size_ko', 'El DNI excede el maximo permitido en SEARCH (maximo 9 caracteres)'],
	['usuario', 'dni', 'input', 12, 'Validar formato dni en SEARCH', 'format', 'SEARCH', 'dni_format_ko', 'Formato de DNI no valido en SEARCH'],
	['usuario', 'dni', 'input', 13, 'Validar dni correcto en SEARCH', 'valid', 'SEARCH', true, 'Busqueda por DNI correcta'],

	// -------------------------------------------------------------
	// ATRIBUTO: usuario (input, min 5 max 45, alfabetico sin ñ ni acentos)
	// -------------------------------------------------------------
	// ---------ADD-------------------------
	['usuario', 'usuario', 'input', 14, 'Validar min size usuario en ADD (min 5)', 'min_size', 'ADD', 'usuario_min_size_ko', 'El nombre de usuario es demasiado corto (minimo 5)'],
	['usuario', 'usuario', 'input', 15, 'Validar max size usuario en ADD (max 45)', 'max_size', 'ADD', 'usuario_max_size_ko', 'El nombre de usuario es demasiado largo (maximo 45)'],
	['usuario', 'usuario', 'input', 16, 'Validar format usuario en ADD (solo letras sin acentos ni ñ)', 'format', 'ADD', 'usuario_format_ko', 'El usuario solo permite caracteres alfabeticos sin acentos ni ñ'],
	['usuario', 'usuario', 'input', 17, 'Validar usuario correcto en ADD', 'valid', 'ADD', true, 'Usuario correcto'],

	// ---------EDIT-------------------------
	['usuario', 'usuario', 'input', 18, 'Validar min size usuario en EDIT (min 5)', 'min_size', 'EDIT', 'usuario_min_size_ko', 'El nombre de usuario es demasiado corto en EDIT (minimo 5)'],
	['usuario', 'usuario', 'input', 19, 'Validar max size usuario en EDIT (max 45)', 'max_size', 'EDIT', 'usuario_max_size_ko', 'El nombre de usuario es demasiado largo en EDIT (maximo 45)'],
	['usuario', 'usuario', 'input', 20, 'Validar format usuario en EDIT', 'format', 'EDIT', 'usuario_format_ko', 'Caracteres no permitidos en usuario en EDIT'],
	['usuario', 'usuario', 'input', 21, 'Validar usuario correcto en EDIT', 'valid', 'EDIT', true, 'Usuario correcto en EDIT'],

	// ---------SEARCH-------------------------
	['usuario', 'usuario', 'input', 22, 'Validar max size usuario en SEARCH (max 45)', 'max_size', 'SEARCH', 'usuario_max_size_ko', 'El usuario excede el maximo permitido en SEARCH'],
	['usuario', 'usuario', 'input', 23, 'Validar format usuario en SEARCH', 'format', 'SEARCH', 'usuario_format_ko', 'Caracteres no permitidos en SEARCH'],
	['usuario', 'usuario', 'input', 24, 'Validar usuario correcto en SEARCH', 'valid', 'SEARCH', true, 'Busqueda de usuario correcta'],

	// -------------------------------------------------------------
	// ATRIBUTO: contrasena (input, min 8 max 45, alfabetico sin ñ ni acentos)
	// -------------------------------------------------------------
	// ---------ADD------------------------------------
	['usuario', 'contrasena', 'input', 25, 'Validar min size contrasena en ADD (min 8)', 'min_size', 'ADD', 'contrasena_min_size_ko', 'La contrasena es demasiado corta (minimo 8)'],
	['usuario', 'contrasena', 'input', 26, 'Validar max size contrasena en ADD (max 45)', 'max_size', 'ADD', 'contrasena_max_size_ko', 'La contrasena es demasiado larga (maximo 45)'],
	['usuario', 'contrasena', 'input', 27, 'Validar format contrasena en ADD (solo letras sin acentos ni n)', 'format', 'ADD', 'contrasena_format_ko', 'La contrasena solo permite caracteres alfabeticos sin acentos ni n'],
	['usuario', 'contrasena', 'input', 28, 'Validar contrasena correcta en ADD', 'valid', 'ADD', true, 'Contrasena correcta'],

	// ---------EDIT-----------------------------------
	['usuario', 'contrasena', 'input', 29, 'Validar min size contrasena en EDIT (min 8)', 'min_size', 'EDIT', 'contrasena_min_size_ko', 'La contrasena es demasiado corta en EDIT (minimo 8)'],
	['usuario', 'contrasena', 'input', 30, 'Validar max size contrasena en EDIT (max 45)', 'max_size', 'EDIT', 'contrasena_max_size_ko', 'La contrasena es demasiado larga en EDIT (maximo 45)'],
	['usuario', 'contrasena', 'input', 31, 'Validar format contrasena en EDIT', 'format', 'EDIT', 'contrasena_format_ko', 'Caracteres no permitidos en la contrasena en EDIT'],
	['usuario', 'contrasena', 'input', 32, 'Validar contrasena correcta en EDIT', 'valid', 'EDIT', true, 'Contrasena correcta en EDIT'],

	// ---------SEARCH---------------------------------
	['usuario', 'contrasena', 'input', 33, 'Validar contrasena en SEARCH devuelve true', 'valid', 'SEARCH', true, 'Contrasena neutra en SEARCH correcta'],

	// -------------------------------------------------------------
	// ATRIBUTO: id_rol (select, max 11 digitos)
	// -------------------------------------------------------------
	// ---------ADD----------------------------------------
	['usuario', 'id_rol', 'select', 34, 'Validar format numerico id_rol en ADD', 'format', 'ADD', 'id_rol_format_ko', 'El identificador de rol debe ser numerico'],
	['usuario', 'id_rol', 'select', 35, 'Validar max size id_rol en ADD (max 11 digitos)', 'max_size', 'ADD', 'id_rol_max_size_ko', 'El identificador de rol no puede superar 11 digitos'],
	['usuario', 'id_rol', 'select', 36, 'Validar id_rol correcto en ADD', 'valid', 'ADD', true, 'Rol correcto'],

	// ---------EDIT---------------------------------------
	['usuario', 'id_rol', 'select', 37, 'Validar format numerico id_rol en EDIT', 'format', 'EDIT', 'id_rol_format_ko', 'El rol seleccionado no es numerico en EDIT'],
	['usuario', 'id_rol', 'select', 38, 'Validar max size id_rol en EDIT (max 11 digitos)', 'max_size', 'EDIT', 'id_rol_max_size_ko', 'El rol excede el tamano maximo en EDIT'],
	['usuario', 'id_rol', 'select', 39, 'Validar id_rol correcto en EDIT', 'valid', 'EDIT', true, 'Rol correcto en EDIT'],

	// ---------SEARCH-------------------------------------
	['usuario', 'id_rol', 'select', 40, 'Validar format numerico id_rol en SEARCH', 'format', 'SEARCH', 'id_rol_format_ko', 'Rol invalido en SEARCH'],
	['usuario', 'id_rol', 'select', 41, 'Validar id_rol correcto en SEARCH', 'valid', 'SEARCH', true, 'Busqueda por rol correcta']
];


// ===============================================================
// BATERIA DE PRUEBAS: usuario_pruebas (7 columnas)
// ===============================================================

var usuario_pruebas = [

	// -------------------------------------------------------------
	// ATRIBUTO: dni (input, min 9 max 9, 8 digitos y 1 letra)
	// -------------------------------------------------------------
	// ---------ADD-------------------------------------------
	['usuario', 'dni', 1, 1, 'ADD', { 'dni': '12345678' }, 'dni_min_size_ko'],
	['usuario', 'dni', 1, 2, 'ADD', { 'dni': '53912456L' }, true],
	['usuario', 'dni', 2, 3, 'ADD', { 'dni': '1234567890' }, 'dni_max_size_ko'],
	['usuario', 'dni', 2, 4, 'ADD', { 'dni': '53912456L' }, true],
	['usuario', 'dni', 3, 5, 'ADD', { 'dni': '123456789' }, 'dni_format_ko'],
	['usuario', 'dni', 3, 6, 'ADD', { 'dni': '12345678-A' }, 'dni_format_ko'],
	['usuario', 'dni', 3, 7, 'ADD', { 'dni': '53912456L' }, true],
	['usuario', 'dni', 4, 8, 'ADD', { 'dni': '53912456Z' }, 'dni_letra_ko'],
	['usuario', 'dni', 4, 9, 'ADD', { 'dni': '53912456L' }, true],
	['usuario', 'dni', 5, 10, 'ADD', { 'dni': '53912456L' }, true],
	['usuario', 'dni', 5, 11, 'ADD', { 'dni': '' }, 'dni_min_size_ko'],

	// ---------EDIT------------------------------------------
	['usuario', 'dni', 6, 12, 'EDIT', { 'dni': '1234' }, 'dni_min_size_ko'],
	['usuario', 'dni', 6, 13, 'EDIT', { 'dni': '53912456L' }, true],
	['usuario', 'dni', 7, 14, 'EDIT', { 'dni': '1234567890' }, 'dni_max_size_ko'],
	['usuario', 'dni', 7, 15, 'EDIT', { 'dni': '53912456L' }, true],
	['usuario', 'dni', 8, 16, 'EDIT', { 'dni': '123456789' }, 'dni_format_ko'],
	['usuario', 'dni', 8, 17, 'EDIT', { 'dni': '53912456L' }, true],
	['usuario', 'dni', 9, 18, 'EDIT', { 'dni': '53912456Z' }, 'dni_letra_ko'],
	['usuario', 'dni', 9, 19, 'EDIT', { 'dni': '53912456L' }, true],
	['usuario', 'dni', 10, 20, 'EDIT', { 'dni': '53912456L' }, true],

	// ---------SEARCH----------------------------------------
	['usuario', 'dni', 11, 21, 'SEARCH', { 'dni': '123456789A_LARGO' }, 'dni_max_size_ko'],
	['usuario', 'dni', 11, 22, 'SEARCH', { 'dni': '53912456L' }, true],
	['usuario', 'dni', 12, 23, 'SEARCH', { 'dni': '12345678!' }, 'dni_format_ko'],
	['usuario', 'dni', 12, 24, 'SEARCH', { 'dni': '53912456L' }, true],
	['usuario', 'dni', 13, 25, 'SEARCH', { 'dni': '' }, true],
	['usuario', 'dni', 13, 26, 'SEARCH', { 'dni': '53912456L' }, true],

	// -------------------------------------------------------------
	// ATRIBUTO: usuario (input, min 5 max 45, alfabetico sin ñ ni acentos)
	// -------------------------------------------------------------
	// ---------ADD---------------------------------------
	['usuario', 'usuario', 14, 27, 'ADD', { 'usuario': 'a' }, 'usuario_min_size_ko'],
	['usuario', 'usuario', 14, 28, 'ADD', { 'usuario': 'abcd' }, 'usuario_min_size_ko'],
	['usuario', 'usuario', 14, 29, 'ADD', { 'usuario': 'abcde' }, true],
	['usuario', 'usuario', 15, 30, 'ADD', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_ko'],
	['usuario', 'usuario', 15, 31, 'ADD', { 'usuario': 'a'.repeat(45) }, true],
	['usuario', 'usuario', 16, 32, 'ADD', { 'usuario': 'usuariño' }, 'usuario_format_ko'],
	['usuario', 'usuario', 16, 33, 'ADD', { 'usuario': 'usuarió' }, 'usuario_format_ko'],
	['usuario', 'usuario', 16, 34, 'ADD', { 'usuario': 'user123' }, 'usuario_format_ko'],
	['usuario', 'usuario', 16, 35, 'ADD', { 'usuario': 'user space' }, 'usuario_format_ko'],
	['usuario', 'usuario', 16, 36, 'ADD', { 'usuario': 'validuser' }, true],
	['usuario', 'usuario', 17, 37, 'ADD', { 'usuario': 'gestorvalido' }, true],
	['usuario', 'usuario', 17, 38, 'ADD', { 'usuario': '' }, 'usuario_min_size_ko'],

	// ---------EDIT--------------------------------------
	['usuario', 'usuario', 18, 39, 'EDIT', { 'usuario': 'test' }, 'usuario_min_size_ko'],
	['usuario', 'usuario', 18, 40, 'EDIT', { 'usuario': 'abcde' }, true],
	['usuario', 'usuario', 19, 41, 'EDIT', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_ko'],
	['usuario', 'usuario', 19, 42, 'EDIT', { 'usuario': 'a'.repeat(45) }, true],
	['usuario', 'usuario', 20, 43, 'EDIT', { 'usuario': 'user_edit!' }, 'usuario_format_ko'],
	['usuario', 'usuario', 20, 44, 'EDIT', { 'usuario': 'usuariomod' }, true],
	['usuario', 'usuario', 21, 45, 'EDIT', { 'usuario': 'usuarioeditadook' }, true],

	// ---------SEARCH------------------------------------
	['usuario', 'usuario', 22, 46, 'SEARCH', { 'usuario': 'a'.repeat(46) }, 'usuario_max_size_ko'],
	['usuario', 'usuario', 22, 47, 'SEARCH', { 'usuario': 'a'.repeat(45) }, true],
	['usuario', 'usuario', 23, 48, 'SEARCH', { 'usuario': 'user#1' }, 'usuario_format_ko'],
	['usuario', 'usuario', 23, 49, 'SEARCH', { 'usuario': 'user' }, true],
	['usuario', 'usuario', 24, 50, 'SEARCH', { 'usuario': '' }, true],
	['usuario', 'usuario', 24, 51, 'SEARCH', { 'usuario': 'admin' }, true],

	// -------------------------------------------------------------
	// ATRIBUTO: contrasena (input, min 8 max 45, alfabetico sin ñ ni acentos)
	// -------------------------------------------------------------
	// ---------ADD------------------------------------
	['usuario', 'contrasena', 25, 52, 'ADD', { 'contrasena': 'corta' }, 'contrasena_min_size_ko'],
	['usuario', 'contrasena', 25, 53, 'ADD', { 'contrasena': 'abcdefg' }, 'contrasena_min_size_ko'],
	['usuario', 'contrasena', 25, 54, 'ADD', { 'contrasena': 'abcdefgh' }, true],
	['usuario', 'contrasena', 26, 55, 'ADD', { 'contrasena': 'p'.repeat(46) }, 'contrasena_max_size_ko'],
	['usuario', 'contrasena', 26, 56, 'ADD', { 'contrasena': 'p'.repeat(45) }, true],
	['usuario', 'contrasena', 27, 57, 'ADD', { 'contrasena': 'usuariño' }, 'contrasena_format_ko'],
	['usuario', 'contrasena', 27, 58, 'ADD', { 'contrasena': 'usuarió' }, 'contrasena_format_ko'],
	['usuario', 'contrasena', 27, 59, 'ADD', { 'contrasena': 'pass1234' }, 'contrasena_format_ko'],
	['usuario', 'contrasena', 27, 60, 'ADD', { 'contrasena': 'pass word' }, 'contrasena_format_ko'],
	['usuario', 'contrasena', 27, 61, 'ADD', { 'contrasena': 'passwordsegura' }, true],
	['usuario', 'contrasena', 28, 62, 'ADD', { 'contrasena': 'clavedificil' }, true],
	['usuario', 'contrasena', 28, 63, 'ADD', { 'contrasena': '' }, 'contrasena_min_size_ko'],

	// ---------EDIT-----------------------------------
	['usuario', 'contrasena', 29, 64, 'EDIT', { 'contrasena': 'pass' }, 'contrasena_min_size_ko'],
	['usuario', 'contrasena', 29, 65, 'EDIT', { 'contrasena': 'abcdefgh' }, true],
	['usuario', 'contrasena', 30, 66, 'EDIT', { 'contrasena': 'p'.repeat(46) }, 'contrasena_max_size_ko'],
	['usuario', 'contrasena', 30, 67, 'EDIT', { 'contrasena': 'p'.repeat(45) }, true],
	['usuario', 'contrasena', 31, 68, 'EDIT', { 'contrasena': 'passw@rd' }, 'contrasena_format_ko'],
	['usuario', 'contrasena', 31, 69, 'EDIT', { 'contrasena': 'nuevapassword' }, true],
	['usuario', 'contrasena', 32, 70, 'EDIT', { 'contrasena': 'modificadacorrecta' }, true],

	// ---------SEARCH---------------------------------
	['usuario', 'contrasena', 33, 71, 'SEARCH', { 'contrasena': '' }, true],
	['usuario', 'contrasena', 33, 72, 'SEARCH', { 'contrasena': 'password' }, true],

	// -------------------------------------------------------------
	// ATRIBUTO: id_rol (select, max 11 digitos)
	// -------------------------------------------------------------
	// ---------ADD----------------------------------------
	['usuario', 'id_rol', 34, 73, 'ADD', { 'id_rol': 'abc' }, 'id_rol_format_ko'],
	['usuario', 'id_rol', 34, 74, 'ADD', { 'id_rol': '12a' }, 'id_rol_format_ko'],
	['usuario', 'id_rol', 34, 75, 'ADD', { 'id_rol': '1' }, true],
	['usuario', 'id_rol', 35, 76, 'ADD', { 'id_rol': '123456789012' }, 'id_rol_max_size_ko'],
	['usuario', 'id_rol', 35, 77, 'ADD', { 'id_rol': '12345678901' }, true],
	['usuario', 'id_rol', 35, 78, 'ADD', { 'id_rol': '1' }, true],
	['usuario', 'id_rol', 36, 79, 'ADD', { 'id_rol': '2' }, true],
	['usuario', 'id_rol', 36, 80, 'ADD', { 'id_rol': '' }, 'id_rol_format_ko'],

	// ---------EDIT---------------------------------------
	['usuario', 'id_rol', 37, 81, 'EDIT', { 'id_rol': 'texto' }, 'id_rol_format_ko'],
	['usuario', 'id_rol', 37, 82, 'EDIT', { 'id_rol': '3' }, true],
	['usuario', 'id_rol', 38, 83, 'EDIT', { 'id_rol': '123456789012' }, 'id_rol_max_size_ko'],
	['usuario', 'id_rol', 38, 84, 'EDIT', { 'id_rol': '12345678901' }, true],
	['usuario', 'id_rol', 39, 85, 'EDIT', { 'id_rol': '1' }, true],

	// ---------SEARCH-------------------------------------
	['usuario', 'id_rol', 40, 86, 'SEARCH', { 'id_rol': 'rolErroneo' }, 'id_rol_format_ko'],
	['usuario', 'id_rol', 40, 87, 'SEARCH', { 'id_rol': '1' }, true],
	['usuario', 'id_rol', 41, 88, 'SEARCH', { 'id_rol': '' }, true],
	['usuario', 'id_rol', 41, 89, 'SEARCH', { 'id_rol': '2' }, true]
];