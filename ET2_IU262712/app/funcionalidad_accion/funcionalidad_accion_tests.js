// ===============================================================
// DEFINICION DE TESTS: funcionalidad_accion_def_tests (9 columnas)
// [entidad, campo, elemento, num_test, descripcion, validacion, accion, resultado, mensaje]
//
// Los dos campos son claves foraneas: se eligen en un desplegable (select).
// Criterio comun:
//  - ADD y EDIT: min_size, max_size, format y valid
//  - SEARCH: max_size, format y valid (se permite vacio)
// ===============================================================

let funcionalidad_accion_def_tests = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: id_funcionalidad (select, numerico, min 1 max 11 digitos)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['funcionalidad_accion', 'id_funcionalidad', 'select', 1, 'cumple tama\u00f1o minimo', 'min_size', 'ADD', 'id_funcionalidad_min_size_ko', 'Debe seleccionar una funcionalidad. El identificador debe tener entre 1 y 11 d\u00edgitos'],
    ['funcionalidad_accion', 'id_funcionalidad', 'select', 2, 'cumple tama\u00f1o maximo', 'max_size', 'ADD', 'id_funcionalidad_max_size_ko', 'Identificador de funcionalidad demasiado largo. Debe tener entre 1 y 11 d\u00edgitos'],
    ['funcionalidad_accion', 'id_funcionalidad', 'select', 3, 'cumple formato', 'format', 'ADD', 'id_funcionalidad_format_ko', 'Formato inv\u00e1lido. El identificador de funcionalidad solo admite d\u00edgitos'],
    ['funcionalidad_accion', 'id_funcionalidad', 'select', 4, 'es correcto', 'valid', 'ADD', true, 'Funcionalidad correcta'],

    // ---------EDIT----------------------------
    ['funcionalidad_accion', 'id_funcionalidad', 'select', 5, 'cumple tama\u00f1o minimo', 'min_size', 'EDIT', 'id_funcionalidad_min_size_ko', 'Debe seleccionar una funcionalidad. El identificador debe tener entre 1 y 11 d\u00edgitos'],
    ['funcionalidad_accion', 'id_funcionalidad', 'select', 6, 'cumple tama\u00f1o maximo', 'max_size', 'EDIT', 'id_funcionalidad_max_size_ko', 'Identificador de funcionalidad demasiado largo. Debe tener entre 1 y 11 d\u00edgitos'],
    ['funcionalidad_accion', 'id_funcionalidad', 'select', 7, 'cumple formato', 'format', 'EDIT', 'id_funcionalidad_format_ko', 'Formato inv\u00e1lido. El identificador de funcionalidad solo admite d\u00edgitos'],
    ['funcionalidad_accion', 'id_funcionalidad', 'select', 8, 'es correcto', 'valid', 'EDIT', true, 'Funcionalidad correcta'],

    // ---------SEARCH--------------------------
    ['funcionalidad_accion', 'id_funcionalidad', 'select', 9, 'cumple tama\u00f1o maximo', 'max_size', 'SEARCH', 'id_funcionalidad_max_size_ko', 'Identificador de funcionalidad demasiado largo. Como m\u00e1ximo 11 d\u00edgitos'],
    ['funcionalidad_accion', 'id_funcionalidad', 'select', 10, 'cumple formato', 'format', 'SEARCH', 'id_funcionalidad_format_ko', 'Formato inv\u00e1lido. El identificador de funcionalidad solo admite d\u00edgitos'],
    ['funcionalidad_accion', 'id_funcionalidad', 'select', 11, 'es correcto', 'valid', 'SEARCH', true, 'Funcionalidad correcta'],

    // -------------------------------------------------------------
    // ATRIBUTO: id_accion (select, numerico, min 1 max 11 digitos)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['funcionalidad_accion', 'id_accion', 'select', 12, 'cumple tama\u00f1o minimo', 'min_size', 'ADD', 'id_accion_min_size_ko', 'Debe seleccionar una acci\u00f3n. El identificador debe tener entre 1 y 11 d\u00edgitos'],
    ['funcionalidad_accion', 'id_accion', 'select', 13, 'cumple tama\u00f1o maximo', 'max_size', 'ADD', 'id_accion_max_size_ko', 'Identificador de acci\u00f3n demasiado largo. Debe tener entre 1 y 11 d\u00edgitos'],
    ['funcionalidad_accion', 'id_accion', 'select', 14, 'cumple formato', 'format', 'ADD', 'id_accion_format_ko', 'Formato inv\u00e1lido. El identificador de acci\u00f3n solo admite d\u00edgitos'],
    ['funcionalidad_accion', 'id_accion', 'select', 15, 'es correcto', 'valid', 'ADD', true, 'Acci\u00f3n correcta'],

    // ---------EDIT----------------------------
    ['funcionalidad_accion', 'id_accion', 'select', 16, 'cumple tama\u00f1o minimo', 'min_size', 'EDIT', 'id_accion_min_size_ko', 'Debe seleccionar una acci\u00f3n. El identificador debe tener entre 1 y 11 d\u00edgitos'],
    ['funcionalidad_accion', 'id_accion', 'select', 17, 'cumple tama\u00f1o maximo', 'max_size', 'EDIT', 'id_accion_max_size_ko', 'Identificador de acci\u00f3n demasiado largo. Debe tener entre 1 y 11 d\u00edgitos'],
    ['funcionalidad_accion', 'id_accion', 'select', 18, 'cumple formato', 'format', 'EDIT', 'id_accion_format_ko', 'Formato inv\u00e1lido. El identificador de acci\u00f3n solo admite d\u00edgitos'],
    ['funcionalidad_accion', 'id_accion', 'select', 19, 'es correcto', 'valid', 'EDIT', true, 'Acci\u00f3n correcta'],

    // ---------SEARCH--------------------------
    ['funcionalidad_accion', 'id_accion', 'select', 20, 'cumple tama\u00f1o maximo', 'max_size', 'SEARCH', 'id_accion_max_size_ko', 'Identificador de acci\u00f3n demasiado largo. Como m\u00e1ximo 11 d\u00edgitos'],
    ['funcionalidad_accion', 'id_accion', 'select', 21, 'cumple formato', 'format', 'SEARCH', 'id_accion_format_ko', 'Formato inv\u00e1lido. El identificador de acci\u00f3n solo admite d\u00edgitos'],
    ['funcionalidad_accion', 'id_accion', 'select', 22, 'es correcto', 'valid', 'SEARCH', true, 'Acci\u00f3n correcta']
);


// ===============================================================
// BATERIA DE PRUEBAS: funcionalidad_accion_pruebas (7 columnas)
// [entidad, campo, num_test, num_prueba, accion, valores, resultado_esperado]
// ===============================================================

let funcionalidad_accion_pruebas = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: id_funcionalidad
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['funcionalidad_accion', 'id_funcionalidad', 1, 1, 'ADD', { id_funcionalidad: '' }, 'id_funcionalidad_min_size_ko'],
    ['funcionalidad_accion', 'id_funcionalidad', 2, 2, 'ADD', { id_funcionalidad: '1'.repeat(12) }, 'id_funcionalidad_max_size_ko'],
    ['funcionalidad_accion', 'id_funcionalidad', 3, 3, 'ADD', { id_funcionalidad: '1234567890a' }, 'id_funcionalidad_format_ko'],
    ['funcionalidad_accion', 'id_funcionalidad', 3, 4, 'ADD', { id_funcionalidad: '-1' }, 'id_funcionalidad_format_ko'],
    ['funcionalidad_accion', 'id_funcionalidad', 4, 5, 'ADD', { id_funcionalidad: '1' }, true],
    ['funcionalidad_accion', 'id_funcionalidad', 4, 6, 'ADD', { id_funcionalidad: '12345678901' }, true],

    // ---------EDIT----------------------------
    ['funcionalidad_accion', 'id_funcionalidad', 5, 7, 'EDIT', { id_funcionalidad: '' }, 'id_funcionalidad_min_size_ko'],
    ['funcionalidad_accion', 'id_funcionalidad', 6, 8, 'EDIT', { id_funcionalidad: '1'.repeat(12) }, 'id_funcionalidad_max_size_ko'],
    ['funcionalidad_accion', 'id_funcionalidad', 7, 9, 'EDIT', { id_funcionalidad: '123456#7890' }, 'id_funcionalidad_format_ko'],
    ['funcionalidad_accion', 'id_funcionalidad', 8, 10, 'EDIT', { id_funcionalidad: '3' }, true],

    // ---------SEARCH--------------------------
    ['funcionalidad_accion', 'id_funcionalidad', 9, 11, 'SEARCH', { id_funcionalidad: '1'.repeat(12) }, 'id_funcionalidad_max_size_ko'],
    ['funcionalidad_accion', 'id_funcionalidad', 10, 12, 'SEARCH', { id_funcionalidad: 'abc' }, 'id_funcionalidad_format_ko'],
    ['funcionalidad_accion', 'id_funcionalidad', 11, 13, 'SEARCH', { id_funcionalidad: '' }, true],
    ['funcionalidad_accion', 'id_funcionalidad', 11, 14, 'SEARCH', { id_funcionalidad: '4' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: id_accion
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['funcionalidad_accion', 'id_accion', 12, 15, 'ADD', { id_accion: '' }, 'id_accion_min_size_ko'],
    ['funcionalidad_accion', 'id_accion', 13, 16, 'ADD', { id_accion: '1'.repeat(12) }, 'id_accion_max_size_ko'],
    ['funcionalidad_accion', 'id_accion', 14, 17, 'ADD', { id_accion: '1a1b1c' }, 'id_accion_format_ko'],
    ['funcionalidad_accion', 'id_accion', 14, 18, 'ADD', { id_accion: '1.5' }, 'id_accion_format_ko'],
    ['funcionalidad_accion', 'id_accion', 15, 19, 'ADD', { id_accion: '1' }, true],
    ['funcionalidad_accion', 'id_accion', 15, 20, 'ADD', { id_accion: '1'.repeat(11) }, true],

    // ---------EDIT----------------------------
    ['funcionalidad_accion', 'id_accion', 16, 21, 'EDIT', { id_accion: '' }, 'id_accion_min_size_ko'],
    ['funcionalidad_accion', 'id_accion', 17, 22, 'EDIT', { id_accion: '1'.repeat(12) }, 'id_accion_max_size_ko'],
    ['funcionalidad_accion', 'id_accion', 18, 23, 'EDIT', { id_accion: '2A2B' }, 'id_accion_format_ko'],
    ['funcionalidad_accion', 'id_accion', 19, 24, 'EDIT', { id_accion: '8' }, true],

    // ---------SEARCH--------------------------
    ['funcionalidad_accion', 'id_accion', 20, 25, 'SEARCH', { id_accion: '1'.repeat(12) }, 'id_accion_max_size_ko'],
    ['funcionalidad_accion', 'id_accion', 21, 26, 'SEARCH', { id_accion: '1ab' }, 'id_accion_format_ko'],
    ['funcionalidad_accion', 'id_accion', 22, 27, 'SEARCH', { id_accion: '' }, true],
    ['funcionalidad_accion', 'id_accion', 22, 28, 'SEARCH', { id_accion: '9' }, true]
);
