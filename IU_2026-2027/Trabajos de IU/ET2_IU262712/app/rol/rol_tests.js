// ===============================================================
// DEFINICION DE TESTS: rol_def_tests (9 columnas)
// [entidad, campo, elemento, num_test, descripcion, validacion, accion, resultado, mensaje]
//
// Criterio comun:
//  - ADD y EDIT: min_size, max_size, format y valid
//  - SEARCH: max_size, format y valid (se permite vacio o valor parcial)
// ===============================================================

let rol_def_tests = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: id_rol (input, numerico, min 1 max 11 digitos)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['rol', 'id_rol', 'input', 1, 'cumple tama\u00f1o minimo', 'min_size', 'ADD', 'id_rol_min_size_ko', 'Identificador de rol vac\u00edo. Debe tener entre 1 y 11 d\u00edgitos'],
    ['rol', 'id_rol', 'input', 2, 'cumple tama\u00f1o maximo', 'max_size', 'ADD', 'id_rol_max_size_ko', 'Identificador de rol demasiado largo. Debe tener entre 1 y 11 d\u00edgitos'],
    ['rol', 'id_rol', 'input', 3, 'cumple formato', 'format', 'ADD', 'id_rol_format_ko', 'Formato inv\u00e1lido. El identificador de rol solo admite d\u00edgitos'],
    ['rol', 'id_rol', 'input', 4, 'es correcto', 'valid', 'ADD', true, 'Identificador de rol correcto'],

    // ---------EDIT----------------------------
    ['rol', 'id_rol', 'input', 5, 'cumple tama\u00f1o minimo', 'min_size', 'EDIT', 'id_rol_min_size_ko', 'Identificador de rol vac\u00edo. Debe tener entre 1 y 11 d\u00edgitos'],
    ['rol', 'id_rol', 'input', 6, 'cumple tama\u00f1o maximo', 'max_size', 'EDIT', 'id_rol_max_size_ko', 'Identificador de rol demasiado largo. Debe tener entre 1 y 11 d\u00edgitos'],
    ['rol', 'id_rol', 'input', 7, 'cumple formato', 'format', 'EDIT', 'id_rol_format_ko', 'Formato inv\u00e1lido. El identificador de rol solo admite d\u00edgitos'],
    ['rol', 'id_rol', 'input', 8, 'es correcto', 'valid', 'EDIT', true, 'Identificador de rol correcto'],

    // ---------SEARCH--------------------------
    ['rol', 'id_rol', 'input', 9, 'cumple tama\u00f1o maximo', 'max_size', 'SEARCH', 'id_rol_max_size_ko', 'Identificador de rol demasiado largo. Como m\u00e1ximo 11 d\u00edgitos'],
    ['rol', 'id_rol', 'input', 10, 'cumple formato', 'format', 'SEARCH', 'id_rol_format_ko', 'Formato inv\u00e1lido. El identificador de rol solo admite d\u00edgitos'],
    ['rol', 'id_rol', 'input', 11, 'es correcto', 'valid', 'SEARCH', true, 'Identificador de rol correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: rol_name (input, min 5 max 48, solo letras sin ñ, acentos ni espacios)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['rol', 'rol_name', 'input', 12, 'cumple tama\u00f1o minimo', 'min_size', 'ADD', 'rol_name_min_size_ko', 'Nombre de rol demasiado corto. Debe tener entre 5 y 48 caracteres'],
    ['rol', 'rol_name', 'input', 13, 'cumple tama\u00f1o maximo', 'max_size', 'ADD', 'rol_name_max_size_ko', 'Nombre de rol demasiado largo. Debe tener entre 5 y 48 caracteres'],
    ['rol', 'rol_name', 'input', 14, 'cumple formato', 'format', 'ADD', 'rol_name_format_ko', 'Formato inv\u00e1lido. Solo letras sin \u00f1, sin acentos y sin espacios'],
    ['rol', 'rol_name', 'input', 15, 'es correcto', 'valid', 'ADD', true, 'Nombre de rol correcto'],

    // ---------EDIT----------------------------
    ['rol', 'rol_name', 'input', 16, 'cumple tama\u00f1o minimo', 'min_size', 'EDIT', 'rol_name_min_size_ko', 'Nombre de rol demasiado corto. Debe tener entre 5 y 48 caracteres'],
    ['rol', 'rol_name', 'input', 17, 'cumple tama\u00f1o maximo', 'max_size', 'EDIT', 'rol_name_max_size_ko', 'Nombre de rol demasiado largo. Debe tener entre 5 y 48 caracteres'],
    ['rol', 'rol_name', 'input', 18, 'cumple formato', 'format', 'EDIT', 'rol_name_format_ko', 'Formato inv\u00e1lido. Solo letras sin \u00f1, sin acentos y sin espacios'],
    ['rol', 'rol_name', 'input', 19, 'es correcto', 'valid', 'EDIT', true, 'Nombre de rol correcto'],

    // ---------SEARCH--------------------------
    ['rol', 'rol_name', 'input', 20, 'cumple tama\u00f1o maximo', 'max_size', 'SEARCH', 'rol_name_max_size_ko', 'Nombre de rol demasiado largo. Como m\u00e1ximo 48 caracteres'],
    ['rol', 'rol_name', 'input', 21, 'cumple formato', 'format', 'SEARCH', 'rol_name_format_ko', 'Formato inv\u00e1lido. Solo letras sin \u00f1, sin acentos y sin espacios'],
    ['rol', 'rol_name', 'input', 22, 'es correcto', 'valid', 'SEARCH', true, 'Nombre de rol correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: rol_description (input, min 5 max 200, letras con ñ, espacios y signos de puntuacion)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['rol', 'rol_description', 'input', 23, 'cumple tama\u00f1o minimo', 'min_size', 'ADD', 'rol_description_min_size_ko', 'Descripci\u00f3n demasiado corta. Debe tener entre 5 y 200 caracteres'],
    ['rol', 'rol_description', 'input', 24, 'cumple tama\u00f1o maximo', 'max_size', 'ADD', 'rol_description_max_size_ko', 'Descripci\u00f3n demasiado larga. Debe tener entre 5 y 200 caracteres'],
    ['rol', 'rol_description', 'input', 25, 'cumple formato', 'format', 'ADD', 'rol_description_format_ko', 'Formato inv\u00e1lido. Solo letras (incluida la \u00f1, sin acentos), espacios y signos de puntuaci\u00f3n'],
    ['rol', 'rol_description', 'input', 26, 'es correcto', 'valid', 'ADD', true, 'Descripci\u00f3n de rol correcta'],

    // ---------EDIT----------------------------
    ['rol', 'rol_description', 'input', 27, 'cumple tama\u00f1o minimo', 'min_size', 'EDIT', 'rol_description_min_size_ko', 'Descripci\u00f3n demasiado corta. Debe tener entre 5 y 200 caracteres'],
    ['rol', 'rol_description', 'input', 28, 'cumple tama\u00f1o maximo', 'max_size', 'EDIT', 'rol_description_max_size_ko', 'Descripci\u00f3n demasiado larga. Debe tener entre 5 y 200 caracteres'],
    ['rol', 'rol_description', 'input', 29, 'cumple formato', 'format', 'EDIT', 'rol_description_format_ko', 'Formato inv\u00e1lido. Solo letras (incluida la \u00f1, sin acentos), espacios y signos de puntuaci\u00f3n'],
    ['rol', 'rol_description', 'input', 30, 'es correcto', 'valid', 'EDIT', true, 'Descripci\u00f3n de rol correcta'],

    // ---------SEARCH--------------------------
    ['rol', 'rol_description', 'input', 31, 'cumple tama\u00f1o maximo', 'max_size', 'SEARCH', 'rol_description_max_size_ko', 'Descripci\u00f3n demasiado larga. Como m\u00e1ximo 200 caracteres'],
    ['rol', 'rol_description', 'input', 32, 'cumple formato', 'format', 'SEARCH', 'rol_description_format_ko', 'Formato inv\u00e1lido. Solo letras (incluida la \u00f1, sin acentos), espacios y signos de puntuaci\u00f3n'],
    ['rol', 'rol_description', 'input', 33, 'es correcto', 'valid', 'SEARCH', true, 'Descripci\u00f3n de rol correcta']
);

// ===============================================================
// BATERIA DE PRUEBAS: rol_pruebas (7 columnas)
// [entidad, campo, num_test, num_prueba, accion, valores, resultado_esperado]
// ===============================================================

let rol_pruebas = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: id_rol
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['rol', 'id_rol', 1, 1, 'ADD', { id_rol: '' }, 'id_rol_min_size_ko'],
    ['rol', 'id_rol', 2, 2, 'ADD', { id_rol: '123456789012' }, 'id_rol_max_size_ko'],
    ['rol', 'id_rol', 3, 3, 'ADD', { id_rol: 'abc' }, 'id_rol_format_ko'],
    ['rol', 'id_rol', 3, 4, 'ADD', { id_rol: '12a' }, 'id_rol_format_ko'],
    ['rol', 'id_rol', 4, 5, 'ADD', { id_rol: '1' }, true],
    ['rol', 'id_rol', 4, 6, 'ADD', { id_rol: '12345678901' }, true],

    // ---------EDIT----------------------------
    ['rol', 'id_rol', 5, 7, 'EDIT', { id_rol: '' }, 'id_rol_min_size_ko'],
    ['rol', 'id_rol', 6, 8, 'EDIT', { id_rol: '123456789012' }, 'id_rol_max_size_ko'],
    ['rol', 'id_rol', 7, 9, 'EDIT', { id_rol: 'invalido' }, 'id_rol_format_ko'],
    ['rol', 'id_rol', 8, 10, 'EDIT', { id_rol: '2' }, true],

    // ---------SEARCH--------------------------
    ['rol', 'id_rol', 9, 11, 'SEARCH', { id_rol: '123456789012' }, 'id_rol_max_size_ko'],
    ['rol', 'id_rol', 10, 12, 'SEARCH', { id_rol: 'error' }, 'id_rol_format_ko'],
    ['rol', 'id_rol', 11, 13, 'SEARCH', { id_rol: '' }, true],
    ['rol', 'id_rol', 11, 14, 'SEARCH', { id_rol: '4' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: rol_name
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['rol', 'rol_name', 12, 15, 'ADD', { rol_name: 'user' }, 'rol_name_min_size_ko'],
    ['rol', 'rol_name', 13, 16, 'ADD', { rol_name: 'a'.repeat(49) }, 'rol_name_max_size_ko'],
    ['rol', 'rol_name', 14, 17, 'ADD', { rol_name: 'rolcon\u00f1' }, 'rol_name_format_ko'],
    ['rol', 'rol_name', 14, 18, 'ADD', { rol_name: 'rolcon\u00e1' }, 'rol_name_format_ko'],
    ['rol', 'rol_name', 14, 19, 'ADD', { rol_name: 'rol123' }, 'rol_name_format_ko'],
    ['rol', 'rol_name', 14, 20, 'ADD', { rol_name: 'rol admin' }, 'rol_name_format_ko'],
    ['rol', 'rol_name', 15, 21, 'ADD', { rol_name: 'admin' }, true],
    ['rol', 'rol_name', 15, 22, 'ADD', { rol_name: 'a'.repeat(48) }, true],
    ['rol', 'rol_name', 15, 23, 'ADD', { rol_name: 'Administrador' }, true],

    // ---------EDIT----------------------------
    ['rol', 'rol_name', 16, 24, 'EDIT', { rol_name: 'abc' }, 'rol_name_min_size_ko'],
    ['rol', 'rol_name', 17, 25, 'EDIT', { rol_name: 'a'.repeat(49) }, 'rol_name_max_size_ko'],
    ['rol', 'rol_name', 18, 26, 'EDIT', { rol_name: 'rol_editor' }, 'rol_name_format_ko'],
    ['rol', 'rol_name', 19, 27, 'EDIT', { rol_name: 'Supervisor' }, true],

    // ---------SEARCH--------------------------
    ['rol', 'rol_name', 20, 28, 'SEARCH', { rol_name: 'a'.repeat(49) }, 'rol_name_max_size_ko'],
    ['rol', 'rol_name', 21, 29, 'SEARCH', { rol_name: 'rol%' }, 'rol_name_format_ko'],
    ['rol', 'rol_name', 22, 30, 'SEARCH', { rol_name: '' }, true],
    ['rol', 'rol_name', 22, 31, 'SEARCH', { rol_name: 'adm' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: rol_description
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['rol', 'rol_description', 23, 32, 'ADD', { rol_description: 'desc' }, 'rol_description_min_size_ko'],
    ['rol', 'rol_description', 24, 33, 'ADD', { rol_description: 'd'.repeat(201) }, 'rol_description_max_size_ko'],
    ['rol', 'rol_description', 25, 34, 'ADD', { rol_description: 'Rol con numeros 123' }, 'rol_description_format_ko'],
    ['rol', 'rol_description', 25, 35, 'ADD', { rol_description: 'Gesti\u00f3n completa' }, 'rol_description_format_ko'],
    ['rol', 'rol_description', 26, 36, 'ADD', { rol_description: 'roles' }, true],
    ['rol', 'rol_description', 26, 37, 'ADD', { rol_description: 'd'.repeat(200) }, true],
    ['rol', 'rol_description', 26, 38, 'ADD', { rol_description: 'Permite gestionar el a\u00f1o, punto y coma; total.' }, true],

    // ---------EDIT----------------------------
    ['rol', 'rol_description', 27, 39, 'EDIT', { rol_description: 'abc' }, 'rol_description_min_size_ko'],
    ['rol', 'rol_description', 28, 40, 'EDIT', { rol_description: 'd'.repeat(201) }, 'rol_description_max_size_ko'],
    ['rol', 'rol_description', 29, 41, 'EDIT', { rol_description: 'Descripcion con digito 9' }, 'rol_description_format_ko'],
    ['rol', 'rol_description', 30, 42, 'EDIT', { rol_description: 'Descripcion modificada con exito.' }, true],

    // ---------SEARCH--------------------------
    ['rol', 'rol_description', 31, 43, 'SEARCH', { rol_description: 'd'.repeat(201) }, 'rol_description_max_size_ko'],
    ['rol', 'rol_description', 32, 44, 'SEARCH', { rol_description: 'desc#invalida' }, 'rol_description_format_ko'],
    ['rol', 'rol_description', 33, 45, 'SEARCH', { rol_description: '' }, true],
    ['rol', 'rol_description', 33, 46, 'SEARCH', { rol_description: 'admin' }, true]
);
