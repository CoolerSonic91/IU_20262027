// ===============================================================
// DEFINICION DE TESTS: funcionalidad_def_tests (9 columnas)
// [entidad, campo, elemento, num_test, descripcion, validacion, accion, resultado, mensaje]
//
// Criterio comun:
//  - ADD y EDIT: min_size, max_size, format y valid
//  - SEARCH: max_size, format y valid (se permite vacio o valor parcial)
// ===============================================================

let funcionalidad_def_tests = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: id_funcionalidad (input, numerico, min 1 max 11 digitos)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['funcionalidad', 'id_funcionalidad', 'input', 1, 'cumple tamaño minimo', 'min_size', 'ADD', 'id_funcionalidad_min_size_ko', 'Identificador de funcionalidad vacío. Debe tener entre 1 y 11 dígitos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 2, 'cumple tamaño maximo', 'max_size', 'ADD', 'id_funcionalidad_max_size_ko', 'Identificador de funcionalidad demasiado largo. Debe tener entre 1 y 11 dígitos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 3, 'cumple formato', 'format', 'ADD', 'id_funcionalidad_format_ko', 'Formato inválido. El identificador de funcionalidad solo admite dígitos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 4, 'es correcto', 'valid', 'ADD', true, 'Identificador de funcionalidad correcto'],

    // ---------EDIT----------------------------
    ['funcionalidad', 'id_funcionalidad', 'input', 5, 'cumple tamaño minimo', 'min_size', 'EDIT', 'id_funcionalidad_min_size_ko', 'Identificador de funcionalidad vacío. Debe tener entre 1 y 11 dígitos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 6, 'cumple tamaño maximo', 'max_size', 'EDIT', 'id_funcionalidad_max_size_ko', 'Identificador de funcionalidad demasiado largo. Debe tener entre 1 y 11 dígitos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 7, 'cumple formato', 'format', 'EDIT', 'id_funcionalidad_format_ko', 'Formato inválido. El identificador de funcionalidad solo admite dígitos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 8, 'es correcto', 'valid', 'EDIT', true, 'Identificador de funcionalidad correcto'],

    // ---------SEARCH--------------------------
    ['funcionalidad', 'id_funcionalidad', 'input', 9, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'id_funcionalidad_max_size_ko', 'Identificador de funcionalidad demasiado largo. Como máximo 11 dígitos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 10, 'cumple formato', 'format', 'SEARCH', 'id_funcionalidad_format_ko', 'Formato inválido. El identificador de funcionalidad solo admite dígitos'],
    ['funcionalidad', 'id_funcionalidad', 'input', 11, 'es correcto', 'valid', 'SEARCH', true, 'Identificador de funcionalidad correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: nombre_funcionalidad (input, min 5 max 48, letras con ñ, sin acentos ni espacios)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['funcionalidad', 'nombre_funcionalidad', 'input', 12, 'cumple tamaño minimo', 'min_size', 'ADD', 'nombre_funcionalidad_min_size_ko', 'Nombre de funcionalidad demasiado corto. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 13, 'cumple tamaño maximo', 'max_size', 'ADD', 'nombre_funcionalidad_max_size_ko', 'Nombre de funcionalidad demasiado largo. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 14, 'cumple formato', 'format', 'ADD', 'nombre_funcionalidad_format_ko', 'Formato inválido. Solo letras (incluida la ñ), sin acentos ni espacios'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 15, 'es correcto', 'valid', 'ADD', true, 'Nombre de funcionalidad correcto'],

    // ---------EDIT----------------------------
    ['funcionalidad', 'nombre_funcionalidad', 'input', 16, 'cumple tamaño minimo', 'min_size', 'EDIT', 'nombre_funcionalidad_min_size_ko', 'Nombre de funcionalidad demasiado corto. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 17, 'cumple tamaño maximo', 'max_size', 'EDIT', 'nombre_funcionalidad_max_size_ko', 'Nombre de funcionalidad demasiado largo. Debe tener entre 5 y 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 18, 'cumple formato', 'format', 'EDIT', 'nombre_funcionalidad_format_ko', 'Formato inválido. Solo letras (incluida la ñ), sin acentos ni espacios'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 19, 'es correcto', 'valid', 'EDIT', true, 'Nombre de funcionalidad correcto'],

    // ---------SEARCH--------------------------
    ['funcionalidad', 'nombre_funcionalidad', 'input', 20, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'nombre_funcionalidad_max_size_ko', 'Nombre de funcionalidad demasiado largo. Como máximo 48 caracteres'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 21, 'cumple formato', 'format', 'SEARCH', 'nombre_funcionalidad_format_ko', 'Formato inválido. Solo letras (incluida la ñ), sin acentos ni espacios'],
    ['funcionalidad', 'nombre_funcionalidad', 'input', 22, 'es correcto', 'valid', 'SEARCH', true, 'Nombre de funcionalidad correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: descrip_funcionalidad (input, min 5 max 200, letras con ñ, espacios y signos de puntuacion)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['funcionalidad', 'descrip_funcionalidad', 'input', 23, 'cumple tamaño minimo', 'min_size', 'ADD', 'descrip_funcionalidad_min_size_ko', 'Descripción demasiado corta. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 24, 'cumple tamaño maximo', 'max_size', 'ADD', 'descrip_funcionalidad_max_size_ko', 'Descripción demasiado larga. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 25, 'cumple formato', 'format', 'ADD', 'descrip_funcionalidad_format_ko', 'Formato inválido. Solo letras (incluida la ñ, sin acentos), espacios y signos de puntuación'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 26, 'es correcto', 'valid', 'ADD', true, 'Descripción de funcionalidad correcta'],

    // ---------EDIT----------------------------
    ['funcionalidad', 'descrip_funcionalidad', 'input', 27, 'cumple tamaño minimo', 'min_size', 'EDIT', 'descrip_funcionalidad_min_size_ko', 'Descripción demasiado corta. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 28, 'cumple tamaño maximo', 'max_size', 'EDIT', 'descrip_funcionalidad_max_size_ko', 'Descripción demasiado larga. Debe tener entre 5 y 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 29, 'cumple formato', 'format', 'EDIT', 'descrip_funcionalidad_format_ko', 'Formato inválido. Solo letras (incluida la ñ, sin acentos), espacios y signos de puntuación'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 30, 'es correcto', 'valid', 'EDIT', true, 'Descripción de funcionalidad correcta'],

    // ---------SEARCH--------------------------
    ['funcionalidad', 'descrip_funcionalidad', 'input', 31, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'descrip_funcionalidad_max_size_ko', 'Descripción demasiado larga. Como máximo 200 caracteres'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 32, 'cumple formato', 'format', 'SEARCH', 'descrip_funcionalidad_format_ko', 'Formato inválido. Solo letras (incluida la ñ, sin acentos), espacios y signos de puntuación'],
    ['funcionalidad', 'descrip_funcionalidad', 'input', 33, 'es correcto', 'valid', 'SEARCH', true, 'Descripción de funcionalidad correcta']
);


// ===============================================================
// BATERIA DE PRUEBAS: funcionalidad_pruebas (7 columnas)
// [entidad, campo, num_test, num_prueba, accion, valores, resultado_esperado]
// ===============================================================

let funcionalidad_pruebas = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: id_funcionalidad
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['funcionalidad', 'id_funcionalidad', 1, 1, 'ADD', { id_funcionalidad: '' }, 'id_funcionalidad_min_size_ko'],
    ['funcionalidad', 'id_funcionalidad', 2, 2, 'ADD', { id_funcionalidad: '1'.repeat(12) }, 'id_funcionalidad_max_size_ko'],
    ['funcionalidad', 'id_funcionalidad', 3, 3, 'ADD', { id_funcionalidad: '1234567890a' }, 'id_funcionalidad_format_ko'],
    ['funcionalidad', 'id_funcionalidad', 3, 4, 'ADD', { id_funcionalidad: '123456#7890' }, 'id_funcionalidad_format_ko'],
    ['funcionalidad', 'id_funcionalidad', 4, 5, 'ADD', { id_funcionalidad: '1' }, true],
    ['funcionalidad', 'id_funcionalidad', 4, 6, 'ADD', { id_funcionalidad: '12345678901' }, true],

    // ---------EDIT----------------------------
    ['funcionalidad', 'id_funcionalidad', 5, 7, 'EDIT', { id_funcionalidad: '' }, 'id_funcionalidad_min_size_ko'],
    ['funcionalidad', 'id_funcionalidad', 6, 8, 'EDIT', { id_funcionalidad: '1'.repeat(12) }, 'id_funcionalidad_max_size_ko'],
    ['funcionalidad', 'id_funcionalidad', 7, 9, 'EDIT', { id_funcionalidad: '12 34' }, 'id_funcionalidad_format_ko'],
    ['funcionalidad', 'id_funcionalidad', 8, 10, 'EDIT', { id_funcionalidad: '12345678901' }, true],

    // ---------SEARCH--------------------------
    ['funcionalidad', 'id_funcionalidad', 9, 11, 'SEARCH', { id_funcionalidad: '1'.repeat(12) }, 'id_funcionalidad_max_size_ko'],
    ['funcionalidad', 'id_funcionalidad', 10, 12, 'SEARCH', { id_funcionalidad: '12a' }, 'id_funcionalidad_format_ko'],
    ['funcionalidad', 'id_funcionalidad', 11, 13, 'SEARCH', { id_funcionalidad: '' }, true],
    ['funcionalidad', 'id_funcionalidad', 11, 14, 'SEARCH', { id_funcionalidad: '12' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: nombre_funcionalidad
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['funcionalidad', 'nombre_funcionalidad', 12, 15, 'ADD', { nombre_funcionalidad: 'abcd' }, 'nombre_funcionalidad_min_size_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 13, 16, 'ADD', { nombre_funcionalidad: 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 14, 17, 'ADD', { nombre_funcionalidad: 'abcd1' }, 'nombre_funcionalidad_format_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 14, 18, 'ADD', { nombre_funcionalidad: 'ab cd' }, 'nombre_funcionalidad_format_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 14, 19, 'ADD', { nombre_funcionalidad: 'abcdá' }, 'nombre_funcionalidad_format_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 15, 20, 'ADD', { nombre_funcionalidad: 'abcde' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 15, 21, 'ADD', { nombre_funcionalidad: 'a'.repeat(48) }, true],
    ['funcionalidad', 'nombre_funcionalidad', 15, 22, 'ADD', { nombre_funcionalidad: 'GestionAño' }, true],

    // ---------EDIT----------------------------
    ['funcionalidad', 'nombre_funcionalidad', 16, 23, 'EDIT', { nombre_funcionalidad: 'abcd' }, 'nombre_funcionalidad_min_size_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 17, 24, 'EDIT', { nombre_funcionalidad: 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 18, 25, 'EDIT', { nombre_funcionalidad: 'ab-cd' }, 'nombre_funcionalidad_format_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 19, 26, 'EDIT', { nombre_funcionalidad: 'GestionUsuarios' }, true],

    // ---------SEARCH--------------------------
    ['funcionalidad', 'nombre_funcionalidad', 20, 27, 'SEARCH', { nombre_funcionalidad: 'a'.repeat(49) }, 'nombre_funcionalidad_max_size_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 21, 28, 'SEARCH', { nombre_funcionalidad: 'ab cd' }, 'nombre_funcionalidad_format_ko'],
    ['funcionalidad', 'nombre_funcionalidad', 22, 29, 'SEARCH', { nombre_funcionalidad: '' }, true],
    ['funcionalidad', 'nombre_funcionalidad', 22, 30, 'SEARCH', { nombre_funcionalidad: 'Ges' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: descrip_funcionalidad
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['funcionalidad', 'descrip_funcionalidad', 23, 31, 'ADD', { descrip_funcionalidad: 'abcd' }, 'descrip_funcionalidad_min_size_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 24, 32, 'ADD', { descrip_funcionalidad: 'a'.repeat(201) }, 'descrip_funcionalidad_max_size_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 25, 33, 'ADD', { descrip_funcionalidad: 'abcd1' }, 'descrip_funcionalidad_format_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 25, 34, 'ADD', { descrip_funcionalidad: 'abcd#' }, 'descrip_funcionalidad_format_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 25, 35, 'ADD', { descrip_funcionalidad: 'Gestión' }, 'descrip_funcionalidad_format_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 26, 36, 'ADD', { descrip_funcionalidad: 'abcde' }, true],
    ['funcionalidad', 'descrip_funcionalidad', 26, 37, 'ADD', { descrip_funcionalidad: 'a'.repeat(200) }, true],
    ['funcionalidad', 'descrip_funcionalidad', 26, 38, 'ADD', { descrip_funcionalidad: 'Texto valido con signos, comas; y punto. ¡Correcto!' }, true],

    // ---------EDIT----------------------------
    ['funcionalidad', 'descrip_funcionalidad', 27, 39, 'EDIT', { descrip_funcionalidad: 'abcd' }, 'descrip_funcionalidad_min_size_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 28, 40, 'EDIT', { descrip_funcionalidad: 'a'.repeat(201) }, 'descrip_funcionalidad_max_size_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 29, 41, 'EDIT', { descrip_funcionalidad: 'abcd 2' }, 'descrip_funcionalidad_format_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 30, 42, 'EDIT', { descrip_funcionalidad: 'Gestiona los usuarios del sistema.' }, true],

    // ---------SEARCH--------------------------
    ['funcionalidad', 'descrip_funcionalidad', 31, 43, 'SEARCH', { descrip_funcionalidad: 'a'.repeat(201) }, 'descrip_funcionalidad_max_size_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 32, 44, 'SEARCH', { descrip_funcionalidad: 'abcd#' }, 'descrip_funcionalidad_format_ko'],
    ['funcionalidad', 'descrip_funcionalidad', 33, 45, 'SEARCH', { descrip_funcionalidad: '' }, true],
    ['funcionalidad', 'descrip_funcionalidad', 33, 46, 'SEARCH', { descrip_funcionalidad: 'Ges' }, true]
);
