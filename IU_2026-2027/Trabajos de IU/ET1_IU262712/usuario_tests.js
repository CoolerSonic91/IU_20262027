// ===============================================================
// DEFINICION DE TESTS: usuario_def_tests (9 columnas)
// [entidad, campo, elemento, num_test, descripcion, validacion, accion, resultado, mensaje]
//
// Criterio comun:
//  - ADD y EDIT: min_size, max_size, format, validaciones personalizadas y valid
//  - SEARCH: max_size, format y valid (se permite vacio o valor parcial)
//  - La contraseña no es un criterio de busqueda, por eso no tiene tests en SEARCH
// ===============================================================

let usuario_def_tests = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: dni (input, 8 digitos y 1 letra mayuscula, letra valida)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['usuario', 'dni', 'input', 1, 'cumple tamaño minimo', 'min_size', 'ADD', 'dni_min_size_ko', 'DNI demasiado corto. Debe tener 9 caracteres: 8 números y una letra'],
    ['usuario', 'dni', 'input', 2, 'cumple tamaño maximo', 'max_size', 'ADD', 'dni_max_size_ko', 'DNI demasiado largo. Debe tener 9 caracteres: 8 números y una letra'],
    ['usuario', 'dni', 'input', 3, 'cumple formato', 'format', 'ADD', 'dni_format_ko', 'Formato inválido. Debe tener 8 números seguidos de una letra mayúscula'],
    ['usuario', 'dni', 'input', 4, 'la letra corresponde con el numero', 'personalized', 'ADD', 'dni_letra_ko', 'La letra del DNI no se corresponde con los números'],
    ['usuario', 'dni', 'input', 5, 'es correcto', 'valid', 'ADD', true, 'DNI correcto'],

    // ---------EDIT----------------------------
    ['usuario', 'dni', 'input', 6, 'cumple tamaño minimo', 'min_size', 'EDIT', 'dni_min_size_ko', 'DNI demasiado corto. Debe tener 9 caracteres: 8 números y una letra'],
    ['usuario', 'dni', 'input', 7, 'cumple tamaño maximo', 'max_size', 'EDIT', 'dni_max_size_ko', 'DNI demasiado largo. Debe tener 9 caracteres: 8 números y una letra'],
    ['usuario', 'dni', 'input', 8, 'cumple formato', 'format', 'EDIT', 'dni_format_ko', 'Formato inválido. Debe tener 8 números seguidos de una letra mayúscula'],
    ['usuario', 'dni', 'input', 9, 'la letra corresponde con el numero', 'personalized', 'EDIT', 'dni_letra_ko', 'La letra del DNI no se corresponde con los números'],
    ['usuario', 'dni', 'input', 10, 'es correcto', 'valid', 'EDIT', true, 'DNI correcto'],

    // ---------SEARCH--------------------------
    ['usuario', 'dni', 'input', 11, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'dni_max_size_ko', 'DNI demasiado largo. Como máximo 9 caracteres'],
    ['usuario', 'dni', 'input', 12, 'cumple formato', 'format', 'SEARCH', 'dni_format_ko', 'Formato inválido. Solo números y, al final, una letra mayúscula'],
    ['usuario', 'dni', 'input', 13, 'es correcto', 'valid', 'SEARCH', true, 'DNI correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: usuario (input, min 5 max 45, solo letras sin ñ ni acentos)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['usuario', 'usuario', 'input', 14, 'cumple tamaño minimo', 'min_size', 'ADD', 'usuario_min_size_ko', 'Nombre de usuario demasiado corto. Debe tener entre 5 y 45 caracteres'],
    ['usuario', 'usuario', 'input', 15, 'cumple tamaño maximo', 'max_size', 'ADD', 'usuario_max_size_ko', 'Nombre de usuario demasiado largo. Debe tener entre 5 y 45 caracteres'],
    ['usuario', 'usuario', 'input', 16, 'cumple formato', 'format', 'ADD', 'usuario_format_ko', 'Formato inválido. Solo letras sin ñ, sin acentos y sin espacios'],
    ['usuario', 'usuario', 'input', 17, 'es correcto', 'valid', 'ADD', true, 'Nombre de usuario correcto'],

    // ---------EDIT----------------------------
    ['usuario', 'usuario', 'input', 18, 'cumple tamaño minimo', 'min_size', 'EDIT', 'usuario_min_size_ko', 'Nombre de usuario demasiado corto. Debe tener entre 5 y 45 caracteres'],
    ['usuario', 'usuario', 'input', 19, 'cumple tamaño maximo', 'max_size', 'EDIT', 'usuario_max_size_ko', 'Nombre de usuario demasiado largo. Debe tener entre 5 y 45 caracteres'],
    ['usuario', 'usuario', 'input', 20, 'cumple formato', 'format', 'EDIT', 'usuario_format_ko', 'Formato inválido. Solo letras sin ñ, sin acentos y sin espacios'],
    ['usuario', 'usuario', 'input', 21, 'es correcto', 'valid', 'EDIT', true, 'Nombre de usuario correcto'],

    // ---------SEARCH--------------------------
    ['usuario', 'usuario', 'input', 22, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'usuario_max_size_ko', 'Nombre de usuario demasiado largo. Como máximo 45 caracteres'],
    ['usuario', 'usuario', 'input', 23, 'cumple formato', 'format', 'SEARCH', 'usuario_format_ko', 'Formato inválido. Solo letras sin ñ, sin acentos y sin espacios'],
    ['usuario', 'usuario', 'input', 24, 'es correcto', 'valid', 'SEARCH', true, 'Nombre de usuario correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: contrasena (input, min 8 max 45, solo letras sin ñ ni acentos)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['usuario', 'contrasena', 'input', 25, 'cumple tamaño minimo', 'min_size', 'ADD', 'contrasena_min_size_ko', 'Contraseña demasiado corta. Debe tener entre 8 y 45 caracteres'],
    ['usuario', 'contrasena', 'input', 26, 'cumple tamaño maximo', 'max_size', 'ADD', 'contrasena_max_size_ko', 'Contraseña demasiado larga. Debe tener entre 8 y 45 caracteres'],
    ['usuario', 'contrasena', 'input', 27, 'cumple formato', 'format', 'ADD', 'contrasena_format_ko', 'Formato inválido. Solo letras sin ñ, sin acentos y sin espacios'],
    ['usuario', 'contrasena', 'input', 28, 'es correcto', 'valid', 'ADD', true, 'Contraseña correcta'],

    // ---------EDIT----------------------------
    ['usuario', 'contrasena', 'input', 29, 'cumple tamaño minimo', 'min_size', 'EDIT', 'contrasena_min_size_ko', 'Contraseña demasiado corta. Debe tener entre 8 y 45 caracteres'],
    ['usuario', 'contrasena', 'input', 30, 'cumple tamaño maximo', 'max_size', 'EDIT', 'contrasena_max_size_ko', 'Contraseña demasiado larga. Debe tener entre 8 y 45 caracteres'],
    ['usuario', 'contrasena', 'input', 31, 'cumple formato', 'format', 'EDIT', 'contrasena_format_ko', 'Formato inválido. Solo letras sin ñ, sin acentos y sin espacios'],
    ['usuario', 'contrasena', 'input', 32, 'es correcto', 'valid', 'EDIT', true, 'Contraseña correcta'],

    // ---------SEARCH--------------------------
    ['usuario', 'contrasena', 'input', 33, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'contrasena_max_size_ko', 'Contraseña demasiado larga. Como máximo 45 caracteres'],
    ['usuario', 'contrasena', 'input', 34, 'cumple formato', 'format', 'SEARCH', 'contrasena_format_ko', 'Formato inválido. Solo letras sin ñ, sin acentos y sin espacios'],
    ['usuario', 'contrasena', 'input', 35, 'es correcto', 'valid', 'SEARCH', true, 'Contraseña correcta'],

    // -------------------------------------------------------------
    // ATRIBUTO: id_rol (select, clave foranea, numerico, min 1 max 11 digitos)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['usuario', 'id_rol', 'select', 36, 'cumple tamaño minimo', 'min_size', 'ADD', 'id_rol_min_size_ko', 'Debe seleccionar un rol. El identificador debe tener entre 1 y 11 dígitos'],
    ['usuario', 'id_rol', 'select', 37, 'cumple tamaño maximo', 'max_size', 'ADD', 'id_rol_max_size_ko', 'Identificador de rol demasiado largo. Debe tener entre 1 y 11 dígitos'],
    ['usuario', 'id_rol', 'select', 38, 'cumple formato', 'format', 'ADD', 'id_rol_format_ko', 'Formato inválido. El identificador de rol solo admite dígitos'],
    ['usuario', 'id_rol', 'select', 39, 'es correcto', 'valid', 'ADD', true, 'Rol correcto'],

    // ---------EDIT----------------------------
    ['usuario', 'id_rol', 'select', 40, 'cumple tamaño minimo', 'min_size', 'EDIT', 'id_rol_min_size_ko', 'Debe seleccionar un rol. El identificador debe tener entre 1 y 11 dígitos'],
    ['usuario', 'id_rol', 'select', 41, 'cumple tamaño maximo', 'max_size', 'EDIT', 'id_rol_max_size_ko', 'Identificador de rol demasiado largo. Debe tener entre 1 y 11 dígitos'],
    ['usuario', 'id_rol', 'select', 42, 'cumple formato', 'format', 'EDIT', 'id_rol_format_ko', 'Formato inválido. El identificador de rol solo admite dígitos'],
    ['usuario', 'id_rol', 'select', 43, 'es correcto', 'valid', 'EDIT', true, 'Rol correcto'],

    // ---------SEARCH--------------------------
    ['usuario', 'id_rol', 'select', 44, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'id_rol_max_size_ko', 'Identificador de rol demasiado largo. Como máximo 11 dígitos'],
    ['usuario', 'id_rol', 'select', 45, 'cumple formato', 'format', 'SEARCH', 'id_rol_format_ko', 'Formato inválido. El identificador de rol solo admite dígitos'],
    ['usuario', 'id_rol', 'select', 46, 'es correcto', 'valid', 'SEARCH', true, 'Rol correcto']
);


// ===============================================================
// BATERIA DE PRUEBAS: usuario_pruebas (7 columnas)
// [entidad, campo, num_test, num_prueba, accion, valores, resultado_esperado]
// ===============================================================

let usuario_pruebas = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: dni
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['usuario', 'dni', 1, 1, 'ADD', { dni: '' }, 'dni_min_size_ko'],
    ['usuario', 'dni', 1, 2, 'ADD', { dni: '1234567L' }, 'dni_min_size_ko'],
    ['usuario', 'dni', 2, 3, 'ADD', { dni: '1234567890' }, 'dni_max_size_ko'],
    ['usuario', 'dni', 3, 4, 'ADD', { dni: '1234567-A' }, 'dni_format_ko'],
    ['usuario', 'dni', 4, 5, 'ADD', { dni: '53912456Z' }, 'dni_letra_ko'],
    ['usuario', 'dni', 5, 6, 'ADD', { dni: '53912456L' }, true],

    // ---------EDIT----------------------------
    ['usuario', 'dni', 6, 7, 'EDIT', { dni: '1234' }, 'dni_min_size_ko'],
    ['usuario', 'dni', 7, 8, 'EDIT', { dni: '1234567890' }, 'dni_max_size_ko'],
    ['usuario', 'dni', 8, 9, 'EDIT', { dni: '53912456l' }, 'dni_format_ko'],
    ['usuario', 'dni', 9, 10, 'EDIT', { dni: '53912456Z' }, 'dni_letra_ko'],
    ['usuario', 'dni', 10, 11, 'EDIT', { dni: '53912456L' }, true],

    // ---------SEARCH--------------------------
    ['usuario', 'dni', 11, 12, 'SEARCH', { dni: '123456789A' }, 'dni_max_size_ko'],
    ['usuario', 'dni', 12, 13, 'SEARCH', { dni: '5391_456' }, 'dni_format_ko'],
    ['usuario', 'dni', 13, 14, 'SEARCH', { dni: '' }, true],
    ['usuario', 'dni', 13, 15, 'SEARCH', { dni: '5391' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: usuario
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['usuario', 'usuario', 14, 16, 'ADD', { usuario: 'abcd' }, 'usuario_min_size_ko'],
    ['usuario', 'usuario', 15, 17, 'ADD', { usuario: 'a'.repeat(46) }, 'usuario_max_size_ko'],
    ['usuario', 'usuario', 16, 18, 'ADD', { usuario: 'usuariño' }, 'usuario_format_ko'],
    ['usuario', 'usuario', 16, 19, 'ADD', { usuario: 'usuarió' }, 'usuario_format_ko'],
    ['usuario', 'usuario', 16, 20, 'ADD', { usuario: 'user123' }, 'usuario_format_ko'],
    ['usuario', 'usuario', 16, 21, 'ADD', { usuario: 'user space' }, 'usuario_format_ko'],
    ['usuario', 'usuario', 17, 22, 'ADD', { usuario: 'abcde' }, true],
    ['usuario', 'usuario', 17, 23, 'ADD', { usuario: 'a'.repeat(45) }, true],
    ['usuario', 'usuario', 17, 24, 'ADD', { usuario: 'GestorValido' }, true],

    // ---------EDIT----------------------------
    ['usuario', 'usuario', 18, 25, 'EDIT', { usuario: 'test' }, 'usuario_min_size_ko'],
    ['usuario', 'usuario', 19, 26, 'EDIT', { usuario: 'a'.repeat(46) }, 'usuario_max_size_ko'],
    ['usuario', 'usuario', 20, 27, 'EDIT', { usuario: 'user_edit' }, 'usuario_format_ko'],
    ['usuario', 'usuario', 21, 28, 'EDIT', { usuario: 'usuariomod' }, true],

    // ---------SEARCH--------------------------
    ['usuario', 'usuario', 22, 29, 'SEARCH', { usuario: 'a'.repeat(46) }, 'usuario_max_size_ko'],
    ['usuario', 'usuario', 23, 30, 'SEARCH', { usuario: 'user#' }, 'usuario_format_ko'],
    ['usuario', 'usuario', 24, 31, 'SEARCH', { usuario: '' }, true],
    ['usuario', 'usuario', 24, 32, 'SEARCH', { usuario: 'adm' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: contrasena
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['usuario', 'contrasena', 25, 33, 'ADD', { contrasena: 'abcdefg' }, 'contrasena_min_size_ko'],
    ['usuario', 'contrasena', 26, 34, 'ADD', { contrasena: 'p'.repeat(46) }, 'contrasena_max_size_ko'],
    ['usuario', 'contrasena', 27, 35, 'ADD', { contrasena: 'contraseña' }, 'contrasena_format_ko'],
    ['usuario', 'contrasena', 27, 36, 'ADD', { contrasena: 'clavesegurá' }, 'contrasena_format_ko'],
    ['usuario', 'contrasena', 27, 37, 'ADD', { contrasena: 'pass1234' }, 'contrasena_format_ko'],
    ['usuario', 'contrasena', 27, 38, 'ADD', { contrasena: 'pass word' }, 'contrasena_format_ko'],
    ['usuario', 'contrasena', 28, 39, 'ADD', { contrasena: 'abcdefgh' }, true],
    ['usuario', 'contrasena', 28, 40, 'ADD', { contrasena: 'p'.repeat(45) }, true],
    ['usuario', 'contrasena', 28, 41, 'ADD', { contrasena: 'ClaveDificil' }, true],

    // ---------EDIT----------------------------
    ['usuario', 'contrasena', 29, 42, 'EDIT', { contrasena: 'pass' }, 'contrasena_min_size_ko'],
    ['usuario', 'contrasena', 30, 43, 'EDIT', { contrasena: 'p'.repeat(46) }, 'contrasena_max_size_ko'],
    ['usuario', 'contrasena', 31, 44, 'EDIT', { contrasena: 'passw@rd' }, 'contrasena_format_ko'],
    ['usuario', 'contrasena', 32, 45, 'EDIT', { contrasena: 'nuevapassword' }, true],

    // ---------SEARCH--------------------------
    ['usuario', 'contrasena', 33, 46, 'SEARCH', { contrasena: 'p'.repeat(46) }, 'contrasena_max_size_ko'],
    ['usuario', 'contrasena', 34, 47, 'SEARCH', { contrasena: 'clave12' }, 'contrasena_format_ko'],
    ['usuario', 'contrasena', 35, 48, 'SEARCH', { contrasena: '' }, true],
    ['usuario', 'contrasena', 35, 49, 'SEARCH', { contrasena: 'clav' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: id_rol
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['usuario', 'id_rol', 36, 50, 'ADD', { id_rol: '' }, 'id_rol_min_size_ko'],
    ['usuario', 'id_rol', 37, 51, 'ADD', { id_rol: '123456789012' }, 'id_rol_max_size_ko'],
    ['usuario', 'id_rol', 38, 52, 'ADD', { id_rol: 'abc' }, 'id_rol_format_ko'],
    ['usuario', 'id_rol', 38, 53, 'ADD', { id_rol: '12a' }, 'id_rol_format_ko'],
    ['usuario', 'id_rol', 39, 54, 'ADD', { id_rol: '1' }, true],
    ['usuario', 'id_rol', 39, 55, 'ADD', { id_rol: '12345678901' }, true],

    // ---------EDIT----------------------------
    ['usuario', 'id_rol', 40, 56, 'EDIT', { id_rol: '' }, 'id_rol_min_size_ko'],
    ['usuario', 'id_rol', 41, 57, 'EDIT', { id_rol: '123456789012' }, 'id_rol_max_size_ko'],
    ['usuario', 'id_rol', 42, 58, 'EDIT', { id_rol: 'texto' }, 'id_rol_format_ko'],
    ['usuario', 'id_rol', 43, 59, 'EDIT', { id_rol: '3' }, true],

    // ---------SEARCH--------------------------
    ['usuario', 'id_rol', 44, 60, 'SEARCH', { id_rol: '123456789012' }, 'id_rol_max_size_ko'],
    ['usuario', 'id_rol', 45, 61, 'SEARCH', { id_rol: 'rolErroneo' }, 'id_rol_format_ko'],
    ['usuario', 'id_rol', 46, 62, 'SEARCH', { id_rol: '' }, true],
    ['usuario', 'id_rol', 46, 63, 'SEARCH', { id_rol: '2' }, true]
);
