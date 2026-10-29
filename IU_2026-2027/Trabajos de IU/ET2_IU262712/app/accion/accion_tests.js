// ===============================================================
// DEFINICION DE TESTS: accion_def_tests (9 columnas)
// [entidad, campo, elemento, num_test, descripcion, validacion, accion, resultado, mensaje]
//
// Criterio comun:
//  - ADD y EDIT: min_size, max_size, format y valid
//  - SEARCH: max_size, format y valid (se permite vacio o valor parcial)
// ===============================================================

let accion_def_tests = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: id_accion (input, numerico, min 1 max 11 digitos)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['accion', 'id_accion', 'input', 1, 'cumple tama\u00f1o minimo', 'min_size', 'ADD', 'id_accion_min_size_ko', 'Identificador de acci\u00f3n vac\u00edo. Debe tener entre 1 y 11 d\u00edgitos'],
    ['accion', 'id_accion', 'input', 2, 'cumple tama\u00f1o maximo', 'max_size', 'ADD', 'id_accion_max_size_ko', 'Identificador de acci\u00f3n demasiado largo. Debe tener entre 1 y 11 d\u00edgitos'],
    ['accion', 'id_accion', 'input', 3, 'cumple formato', 'format', 'ADD', 'id_accion_format_ko', 'Formato inv\u00e1lido. El identificador de acci\u00f3n solo admite d\u00edgitos'],
    ['accion', 'id_accion', 'input', 4, 'es correcto', 'valid', 'ADD', true, 'Identificador de acci\u00f3n correcto'],

    // ---------EDIT----------------------------
    ['accion', 'id_accion', 'input', 5, 'cumple tama\u00f1o minimo', 'min_size', 'EDIT', 'id_accion_min_size_ko', 'Identificador de acci\u00f3n vac\u00edo. Debe tener entre 1 y 11 d\u00edgitos'],
    ['accion', 'id_accion', 'input', 6, 'cumple tama\u00f1o maximo', 'max_size', 'EDIT', 'id_accion_max_size_ko', 'Identificador de acci\u00f3n demasiado largo. Debe tener entre 1 y 11 d\u00edgitos'],
    ['accion', 'id_accion', 'input', 7, 'cumple formato', 'format', 'EDIT', 'id_accion_format_ko', 'Formato inv\u00e1lido. El identificador de acci\u00f3n solo admite d\u00edgitos'],
    ['accion', 'id_accion', 'input', 8, 'es correcto', 'valid', 'EDIT', true, 'Identificador de acci\u00f3n correcto'],

    // ---------SEARCH--------------------------
    ['accion', 'id_accion', 'input', 9, 'cumple tama\u00f1o maximo', 'max_size', 'SEARCH', 'id_accion_max_size_ko', 'Identificador de acci\u00f3n demasiado largo. Como m\u00e1ximo 11 d\u00edgitos'],
    ['accion', 'id_accion', 'input', 10, 'cumple formato', 'format', 'SEARCH', 'id_accion_format_ko', 'Formato inv\u00e1lido. El identificador de acci\u00f3n solo admite d\u00edgitos'],
    ['accion', 'id_accion', 'input', 11, 'es correcto', 'valid', 'SEARCH', true, 'Identificador de acci\u00f3n correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: nombre_accion (input, min 5 max 48, letras con ñ, sin acentos ni espacios)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['accion', 'nombre_accion', 'input', 12, 'cumple tama\u00f1o minimo', 'min_size', 'ADD', 'nombre_accion_min_size_ko', 'Nombre de acci\u00f3n demasiado corto. Debe tener entre 5 y 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 13, 'cumple tama\u00f1o maximo', 'max_size', 'ADD', 'nombre_accion_max_size_ko', 'Nombre de acci\u00f3n demasiado largo. Debe tener entre 5 y 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 14, 'cumple formato', 'format', 'ADD', 'nombre_accion_format_ko', 'Formato inv\u00e1lido. Solo letras (incluida la \u00f1), sin acentos ni espacios'],
    ['accion', 'nombre_accion', 'input', 15, 'es correcto', 'valid', 'ADD', true, 'Nombre de acci\u00f3n correcto'],

    // ---------EDIT----------------------------
    ['accion', 'nombre_accion', 'input', 16, 'cumple tama\u00f1o minimo', 'min_size', 'EDIT', 'nombre_accion_min_size_ko', 'Nombre de acci\u00f3n demasiado corto. Debe tener entre 5 y 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 17, 'cumple tama\u00f1o maximo', 'max_size', 'EDIT', 'nombre_accion_max_size_ko', 'Nombre de acci\u00f3n demasiado largo. Debe tener entre 5 y 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 18, 'cumple formato', 'format', 'EDIT', 'nombre_accion_format_ko', 'Formato inv\u00e1lido. Solo letras (incluida la \u00f1), sin acentos ni espacios'],
    ['accion', 'nombre_accion', 'input', 19, 'es correcto', 'valid', 'EDIT', true, 'Nombre de acci\u00f3n correcto'],

    // ---------SEARCH--------------------------
    ['accion', 'nombre_accion', 'input', 20, 'cumple tama\u00f1o maximo', 'max_size', 'SEARCH', 'nombre_accion_max_size_ko', 'Nombre de acci\u00f3n demasiado largo. Como m\u00e1ximo 48 caracteres'],
    ['accion', 'nombre_accion', 'input', 21, 'cumple formato', 'format', 'SEARCH', 'nombre_accion_format_ko', 'Formato inv\u00e1lido. Solo letras (incluida la \u00f1), sin acentos ni espacios'],
    ['accion', 'nombre_accion', 'input', 22, 'es correcto', 'valid', 'SEARCH', true, 'Nombre de acci\u00f3n correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: descrip_accion (input, min 5 max 200, letras con ñ, espacios y signos de puntuacion)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['accion', 'descrip_accion', 'input', 23, 'cumple tama\u00f1o minimo', 'min_size', 'ADD', 'descrip_accion_min_size_ko', 'Descripci\u00f3n demasiado corta. Debe tener entre 5 y 200 caracteres'],
    ['accion', 'descrip_accion', 'input', 24, 'cumple tama\u00f1o maximo', 'max_size', 'ADD', 'descrip_accion_max_size_ko', 'Descripci\u00f3n demasiado larga. Debe tener entre 5 y 200 caracteres'],
    ['accion', 'descrip_accion', 'input', 25, 'cumple formato', 'format', 'ADD', 'descrip_accion_format_ko', 'Formato inv\u00e1lido. Solo letras (incluida la \u00f1, sin acentos), espacios y signos de puntuaci\u00f3n'],
    ['accion', 'descrip_accion', 'input', 26, 'es correcto', 'valid', 'ADD', true, 'Descripci\u00f3n de acci\u00f3n correcta'],

    // ---------EDIT----------------------------
    ['accion', 'descrip_accion', 'input', 27, 'cumple tama\u00f1o minimo', 'min_size', 'EDIT', 'descrip_accion_min_size_ko', 'Descripci\u00f3n demasiado corta. Debe tener entre 5 y 200 caracteres'],
    ['accion', 'descrip_accion', 'input', 28, 'cumple tama\u00f1o maximo', 'max_size', 'EDIT', 'descrip_accion_max_size_ko', 'Descripci\u00f3n demasiado larga. Debe tener entre 5 y 200 caracteres'],
    ['accion', 'descrip_accion', 'input', 29, 'cumple formato', 'format', 'EDIT', 'descrip_accion_format_ko', 'Formato inv\u00e1lido. Solo letras (incluida la \u00f1, sin acentos), espacios y signos de puntuaci\u00f3n'],
    ['accion', 'descrip_accion', 'input', 30, 'es correcto', 'valid', 'EDIT', true, 'Descripci\u00f3n de acci\u00f3n correcta'],

    // ---------SEARCH--------------------------
    ['accion', 'descrip_accion', 'input', 31, 'cumple tama\u00f1o maximo', 'max_size', 'SEARCH', 'descrip_accion_max_size_ko', 'Descripci\u00f3n demasiado larga. Como m\u00e1ximo 200 caracteres'],
    ['accion', 'descrip_accion', 'input', 32, 'cumple formato', 'format', 'SEARCH', 'descrip_accion_format_ko', 'Formato inv\u00e1lido. Solo letras (incluida la \u00f1, sin acentos), espacios y signos de puntuaci\u00f3n'],
    ['accion', 'descrip_accion', 'input', 33, 'es correcto', 'valid', 'SEARCH', true, 'Descripci\u00f3n de acci\u00f3n correcta']
);

// ===============================================================
// BATERIA DE PRUEBAS: accion_pruebas (7 columnas)
// [entidad, campo, num_test, num_prueba, accion, valores, resultado_esperado]
// ===============================================================

let accion_pruebas = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: id_accion
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['accion', 'id_accion', 1, 1, 'ADD', { id_accion: '' }, 'id_accion_min_size_ko'],
    ['accion', 'id_accion', 2, 2, 'ADD', { id_accion: '1'.repeat(12) }, 'id_accion_max_size_ko'],
    ['accion', 'id_accion', 3, 3, 'ADD', { id_accion: '1a1b1c' }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 3, 4, 'ADD', { id_accion: '-1' }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 4, 5, 'ADD', { id_accion: '1' }, true],
    ['accion', 'id_accion', 4, 6, 'ADD', { id_accion: '1'.repeat(11) }, true],

    // ---------EDIT----------------------------
    ['accion', 'id_accion', 5, 7, 'EDIT', { id_accion: '' }, 'id_accion_min_size_ko'],
    ['accion', 'id_accion', 6, 8, 'EDIT', { id_accion: '1'.repeat(12) }, 'id_accion_max_size_ko'],
    ['accion', 'id_accion', 7, 9, 'EDIT', { id_accion: '2A2B' }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 7, 10, 'EDIT', { id_accion: '1.5' }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 8, 11, 'EDIT', { id_accion: '7' }, true],
    ['accion', 'id_accion', 8, 12, 'EDIT', { id_accion: '1'.repeat(11) }, true],

    // ---------SEARCH--------------------------
    ['accion', 'id_accion', 9, 13, 'SEARCH', { id_accion: '1'.repeat(12) }, 'id_accion_max_size_ko'],
    ['accion', 'id_accion', 10, 14, 'SEARCH', { id_accion: '1ab' }, 'id_accion_format_ko'],
    ['accion', 'id_accion', 11, 15, 'SEARCH', { id_accion: '' }, true],
    ['accion', 'id_accion', 11, 16, 'SEARCH', { id_accion: '12' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: nombre_accion
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['accion', 'nombre_accion', 12, 17, 'ADD', { nombre_accion: 'abcd' }, 'nombre_accion_min_size_ko'],
    ['accion', 'nombre_accion', 13, 18, 'ADD', { nombre_accion: 'a'.repeat(49) }, 'nombre_accion_max_size_ko'],
    ['accion', 'nombre_accion', 14, 19, 'ADD', { nombre_accion: 'anadir1' }, 'nombre_accion_format_ko'],
    ['accion', 'nombre_accion', 14, 20, 'ADD', { nombre_accion: 'anadir dato' }, 'nombre_accion_format_ko'],
    ['accion', 'nombre_accion', 14, 21, 'ADD', { nombre_accion: 'b\u00fasqueda' }, 'nombre_accion_format_ko'],
    ['accion', 'nombre_accion', 15, 22, 'ADD', { nombre_accion: 'abcde' }, true],
    ['accion', 'nombre_accion', 15, 23, 'ADD', { nombre_accion: 'a'.repeat(48) }, true],
    ['accion', 'nombre_accion', 15, 24, 'ADD', { nombre_accion: 'A\u00f1adir' }, true],

    // ---------EDIT----------------------------
    ['accion', 'nombre_accion', 16, 25, 'EDIT', { nombre_accion: 'abcd' }, 'nombre_accion_min_size_ko'],
    ['accion', 'nombre_accion', 17, 26, 'EDIT', { nombre_accion: 'b'.repeat(49) }, 'nombre_accion_max_size_ko'],
    ['accion', 'nombre_accion', 18, 27, 'EDIT', { nombre_accion: 'editar_dato' }, 'nombre_accion_format_ko'],
    ['accion', 'nombre_accion', 19, 28, 'EDIT', { nombre_accion: 'Modificar' }, true],

    // ---------SEARCH--------------------------
    ['accion', 'nombre_accion', 20, 29, 'SEARCH', { nombre_accion: 'c'.repeat(49) }, 'nombre_accion_max_size_ko'],
    ['accion', 'nombre_accion', 21, 30, 'SEARCH', { nombre_accion: 'bus car' }, 'nombre_accion_format_ko'],
    ['accion', 'nombre_accion', 22, 31, 'SEARCH', { nombre_accion: '' }, true],
    ['accion', 'nombre_accion', 22, 32, 'SEARCH', { nombre_accion: 'A\u00f1' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: descrip_accion
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['accion', 'descrip_accion', 23, 33, 'ADD', { descrip_accion: 'abcd' }, 'descrip_accion_min_size_ko'],
    ['accion', 'descrip_accion', 24, 34, 'ADD', { descrip_accion: 'c'.repeat(201) }, 'descrip_accion_max_size_ko'],
    ['accion', 'descrip_accion', 25, 35, 'ADD', { descrip_accion: 'Permite a\u00f1adir $' }, 'descrip_accion_format_ko'],
    ['accion', 'descrip_accion', 25, 36, 'ADD', { descrip_accion: 'Accion numero 3' }, 'descrip_accion_format_ko'],
    ['accion', 'descrip_accion', 25, 37, 'ADD', { descrip_accion: 'Acci\u00f3n de alta' }, 'descrip_accion_format_ko'],
    ['accion', 'descrip_accion', 26, 38, 'ADD', { descrip_accion: 'abcde' }, true],
    ['accion', 'descrip_accion', 26, 39, 'ADD', { descrip_accion: 'c'.repeat(200) }, true],
    ['accion', 'descrip_accion', 26, 40, 'ADD', { descrip_accion: 'Permite a\u00f1adir registros; \u00bfnecesita permisos? Si, del administrador.' }, true],

    // ---------EDIT----------------------------
    ['accion', 'descrip_accion', 27, 41, 'EDIT', { descrip_accion: 'abcd' }, 'descrip_accion_min_size_ko'],
    ['accion', 'descrip_accion', 28, 42, 'EDIT', { descrip_accion: 'd'.repeat(201) }, 'descrip_accion_max_size_ko'],
    ['accion', 'descrip_accion', 29, 43, 'EDIT', { descrip_accion: 'Eliminar registro %' }, 'descrip_accion_format_ko'],
    ['accion', 'descrip_accion', 30, 44, 'EDIT', { descrip_accion: 'Elimina registros del sistema.' }, true],

    // ---------SEARCH--------------------------
    ['accion', 'descrip_accion', 31, 45, 'SEARCH', { descrip_accion: 'e'.repeat(201) }, 'descrip_accion_max_size_ko'],
    ['accion', 'descrip_accion', 32, 46, 'SEARCH', { descrip_accion: 'buscar #' }, 'descrip_accion_format_ko'],
    ['accion', 'descrip_accion', 33, 47, 'SEARCH', { descrip_accion: '' }, true],
    ['accion', 'descrip_accion', 33, 48, 'SEARCH', { descrip_accion: 'Per' }, true]
);
