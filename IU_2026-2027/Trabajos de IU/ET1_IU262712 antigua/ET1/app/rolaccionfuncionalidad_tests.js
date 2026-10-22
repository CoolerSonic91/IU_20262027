// ===============================================================
// DEFINICION DE TESTS: rolaccionfuncionalidad_def_tests (9 columnas)
// [entidad, campo, elemento, num_test, descripcion, validacion, accion, resultado, mensaje]
//
// Los tres campos son claves foraneas: se eligen en un desplegable (select).
// Criterio comun:
//  - ADD y EDIT: min_size, max_size, format y valid
//  - SEARCH: max_size, format y valid (se permite vacio)
// ===============================================================

let rolaccionfuncionalidad_def_tests = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: id_funcionalidad (select, numerico, min 1 max 11 digitos)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 1, 'cumple tamaño minimo', 'min_size', 'ADD', 'id_funcionalidad_min_size_ko', 'Debe seleccionar una funcionalidad. El identificador debe tener entre 1 y 11 dígitos'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 2, 'cumple tamaño maximo', 'max_size', 'ADD', 'id_funcionalidad_max_size_ko', 'Identificador de funcionalidad demasiado largo. Debe tener entre 1 y 11 dígitos'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 3, 'cumple formato', 'format', 'ADD', 'id_funcionalidad_format_ko', 'Formato inválido. El identificador de funcionalidad solo admite dígitos'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 4, 'es correcto', 'valid', 'ADD', true, 'Funcionalidad correcta'],

    // ---------EDIT----------------------------
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 5, 'cumple tamaño minimo', 'min_size', 'EDIT', 'id_funcionalidad_min_size_ko', 'Debe seleccionar una funcionalidad. El identificador debe tener entre 1 y 11 dígitos'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 6, 'cumple tamaño maximo', 'max_size', 'EDIT', 'id_funcionalidad_max_size_ko', 'Identificador de funcionalidad demasiado largo. Debe tener entre 1 y 11 dígitos'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 7, 'cumple formato', 'format', 'EDIT', 'id_funcionalidad_format_ko', 'Formato inválido. El identificador de funcionalidad solo admite dígitos'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 8, 'es correcto', 'valid', 'EDIT', true, 'Funcionalidad correcta'],

    // ---------SEARCH--------------------------
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 9, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'id_funcionalidad_max_size_ko', 'Identificador de funcionalidad demasiado largo. Como máximo 11 dígitos'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 10, 'cumple formato', 'format', 'SEARCH', 'id_funcionalidad_format_ko', 'Formato inválido. El identificador de funcionalidad solo admite dígitos'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 'select', 11, 'es correcto', 'valid', 'SEARCH', true, 'Funcionalidad correcta'],

    // -------------------------------------------------------------
    // ATRIBUTO: id_accion (select, numerico, min 1 max 11 digitos)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['rolaccionfuncionalidad', 'id_accion', 'select', 12, 'cumple tamaño minimo', 'min_size', 'ADD', 'id_accion_min_size_ko', 'Debe seleccionar una acción. El identificador debe tener entre 1 y 11 dígitos'],
    ['rolaccionfuncionalidad', 'id_accion', 'select', 13, 'cumple tamaño maximo', 'max_size', 'ADD', 'id_accion_max_size_ko', 'Identificador de acción demasiado largo. Debe tener entre 1 y 11 dígitos'],
    ['rolaccionfuncionalidad', 'id_accion', 'select', 14, 'cumple formato', 'format', 'ADD', 'id_accion_format_ko', 'Formato inválido. El identificador de acción solo admite dígitos'],
    ['rolaccionfuncionalidad', 'id_accion', 'select', 15, 'es correcto', 'valid', 'ADD', true, 'Acción correcta'],

    // ---------EDIT----------------------------
    ['rolaccionfuncionalidad', 'id_accion', 'select', 16, 'cumple tamaño minimo', 'min_size', 'EDIT', 'id_accion_min_size_ko', 'Debe seleccionar una acción. El identificador debe tener entre 1 y 11 dígitos'],
    ['rolaccionfuncionalidad', 'id_accion', 'select', 17, 'cumple tamaño maximo', 'max_size', 'EDIT', 'id_accion_max_size_ko', 'Identificador de acción demasiado largo. Debe tener entre 1 y 11 dígitos'],
    ['rolaccionfuncionalidad', 'id_accion', 'select', 18, 'cumple formato', 'format', 'EDIT', 'id_accion_format_ko', 'Formato inválido. El identificador de acción solo admite dígitos'],
    ['rolaccionfuncionalidad', 'id_accion', 'select', 19, 'es correcto', 'valid', 'EDIT', true, 'Acción correcta'],

    // ---------SEARCH--------------------------
    ['rolaccionfuncionalidad', 'id_accion', 'select', 20, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'id_accion_max_size_ko', 'Identificador de acción demasiado largo. Como máximo 11 dígitos'],
    ['rolaccionfuncionalidad', 'id_accion', 'select', 21, 'cumple formato', 'format', 'SEARCH', 'id_accion_format_ko', 'Formato inválido. El identificador de acción solo admite dígitos'],
    ['rolaccionfuncionalidad', 'id_accion', 'select', 22, 'es correcto', 'valid', 'SEARCH', true, 'Acción correcta'],

    // -------------------------------------------------------------
    // ATRIBUTO: id_rol (select, numerico, min 1 max 11 digitos)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['rolaccionfuncionalidad', 'id_rol', 'select', 23, 'cumple tamaño minimo', 'min_size', 'ADD', 'id_rol_min_size_ko', 'Debe seleccionar un rol. El identificador debe tener entre 1 y 11 dígitos'],
    ['rolaccionfuncionalidad', 'id_rol', 'select', 24, 'cumple tamaño maximo', 'max_size', 'ADD', 'id_rol_max_size_ko', 'Identificador de rol demasiado largo. Debe tener entre 1 y 11 dígitos'],
    ['rolaccionfuncionalidad', 'id_rol', 'select', 25, 'cumple formato', 'format', 'ADD', 'id_rol_format_ko', 'Formato inválido. El identificador de rol solo admite dígitos'],
    ['rolaccionfuncionalidad', 'id_rol', 'select', 26, 'es correcto', 'valid', 'ADD', true, 'Rol correcto'],

    // ---------EDIT----------------------------
    ['rolaccionfuncionalidad', 'id_rol', 'select', 27, 'cumple tamaño minimo', 'min_size', 'EDIT', 'id_rol_min_size_ko', 'Debe seleccionar un rol. El identificador debe tener entre 1 y 11 dígitos'],
    ['rolaccionfuncionalidad', 'id_rol', 'select', 28, 'cumple tamaño maximo', 'max_size', 'EDIT', 'id_rol_max_size_ko', 'Identificador de rol demasiado largo. Debe tener entre 1 y 11 dígitos'],
    ['rolaccionfuncionalidad', 'id_rol', 'select', 29, 'cumple formato', 'format', 'EDIT', 'id_rol_format_ko', 'Formato inválido. El identificador de rol solo admite dígitos'],
    ['rolaccionfuncionalidad', 'id_rol', 'select', 30, 'es correcto', 'valid', 'EDIT', true, 'Rol correcto'],

    // ---------SEARCH--------------------------
    ['rolaccionfuncionalidad', 'id_rol', 'select', 31, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'id_rol_max_size_ko', 'Identificador de rol demasiado largo. Como máximo 11 dígitos'],
    ['rolaccionfuncionalidad', 'id_rol', 'select', 32, 'cumple formato', 'format', 'SEARCH', 'id_rol_format_ko', 'Formato inválido. El identificador de rol solo admite dígitos'],
    ['rolaccionfuncionalidad', 'id_rol', 'select', 33, 'es correcto', 'valid', 'SEARCH', true, 'Rol correcto']
);

// ===============================================================
// BATERIA DE PRUEBAS: rolaccionfuncionalidad_pruebas (7 columnas)
// [entidad, campo, num_test, num_prueba, accion, valores, resultado_esperado]
// ===============================================================

let rolaccionfuncionalidad_pruebas = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: id_funcionalidad
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['rolaccionfuncionalidad', 'id_funcionalidad', 1, 1, 'ADD', { id_funcionalidad: '' }, 'id_funcionalidad_min_size_ko'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 2, 2, 'ADD', { id_funcionalidad: '123456789012' }, 'id_funcionalidad_max_size_ko'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 3, 3, 'ADD', { id_funcionalidad: 'abc' }, 'id_funcionalidad_format_ko'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 3, 4, 'ADD', { id_funcionalidad: '12a' }, 'id_funcionalidad_format_ko'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 4, 5, 'ADD', { id_funcionalidad: '1' }, true],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 4, 6, 'ADD', { id_funcionalidad: '12345678901' }, true],

    // ---------EDIT----------------------------
    ['rolaccionfuncionalidad', 'id_funcionalidad', 5, 7, 'EDIT', { id_funcionalidad: '' }, 'id_funcionalidad_min_size_ko'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 6, 8, 'EDIT', { id_funcionalidad: '123456789012' }, 'id_funcionalidad_max_size_ko'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 7, 9, 'EDIT', { id_funcionalidad: 'invalido' }, 'id_funcionalidad_format_ko'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 8, 10, 'EDIT', { id_funcionalidad: '2' }, true],

    // ---------SEARCH--------------------------
    ['rolaccionfuncionalidad', 'id_funcionalidad', 9, 11, 'SEARCH', { id_funcionalidad: '123456789012' }, 'id_funcionalidad_max_size_ko'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 10, 12, 'SEARCH', { id_funcionalidad: 'error' }, 'id_funcionalidad_format_ko'],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 11, 13, 'SEARCH', { id_funcionalidad: '' }, true],
    ['rolaccionfuncionalidad', 'id_funcionalidad', 11, 14, 'SEARCH', { id_funcionalidad: '4' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: id_accion
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['rolaccionfuncionalidad', 'id_accion', 12, 15, 'ADD', { id_accion: '' }, 'id_accion_min_size_ko'],
    ['rolaccionfuncionalidad', 'id_accion', 13, 16, 'ADD', { id_accion: '123456789012' }, 'id_accion_max_size_ko'],
    ['rolaccionfuncionalidad', 'id_accion', 14, 17, 'ADD', { id_accion: 'abc' }, 'id_accion_format_ko'],
    ['rolaccionfuncionalidad', 'id_accion', 14, 18, 'ADD', { id_accion: '12a' }, 'id_accion_format_ko'],
    ['rolaccionfuncionalidad', 'id_accion', 15, 19, 'ADD', { id_accion: '1' }, true],
    ['rolaccionfuncionalidad', 'id_accion', 15, 20, 'ADD', { id_accion: '12345678901' }, true],

    // ---------EDIT----------------------------
    ['rolaccionfuncionalidad', 'id_accion', 16, 21, 'EDIT', { id_accion: '' }, 'id_accion_min_size_ko'],
    ['rolaccionfuncionalidad', 'id_accion', 17, 22, 'EDIT', { id_accion: '123456789012' }, 'id_accion_max_size_ko'],
    ['rolaccionfuncionalidad', 'id_accion', 18, 23, 'EDIT', { id_accion: 'invalido' }, 'id_accion_format_ko'],
    ['rolaccionfuncionalidad', 'id_accion', 19, 24, 'EDIT', { id_accion: '2' }, true],

    // ---------SEARCH--------------------------
    ['rolaccionfuncionalidad', 'id_accion', 20, 25, 'SEARCH', { id_accion: '123456789012' }, 'id_accion_max_size_ko'],
    ['rolaccionfuncionalidad', 'id_accion', 21, 26, 'SEARCH', { id_accion: 'error' }, 'id_accion_format_ko'],
    ['rolaccionfuncionalidad', 'id_accion', 22, 27, 'SEARCH', { id_accion: '' }, true],
    ['rolaccionfuncionalidad', 'id_accion', 22, 28, 'SEARCH', { id_accion: '4' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: id_rol
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['rolaccionfuncionalidad', 'id_rol', 23, 29, 'ADD', { id_rol: '' }, 'id_rol_min_size_ko'],
    ['rolaccionfuncionalidad', 'id_rol', 24, 30, 'ADD', { id_rol: '123456789012' }, 'id_rol_max_size_ko'],
    ['rolaccionfuncionalidad', 'id_rol', 25, 31, 'ADD', { id_rol: 'abc' }, 'id_rol_format_ko'],
    ['rolaccionfuncionalidad', 'id_rol', 25, 32, 'ADD', { id_rol: '12a' }, 'id_rol_format_ko'],
    ['rolaccionfuncionalidad', 'id_rol', 26, 33, 'ADD', { id_rol: '1' }, true],
    ['rolaccionfuncionalidad', 'id_rol', 26, 34, 'ADD', { id_rol: '12345678901' }, true],

    // ---------EDIT----------------------------
    ['rolaccionfuncionalidad', 'id_rol', 27, 35, 'EDIT', { id_rol: '' }, 'id_rol_min_size_ko'],
    ['rolaccionfuncionalidad', 'id_rol', 28, 36, 'EDIT', { id_rol: '123456789012' }, 'id_rol_max_size_ko'],
    ['rolaccionfuncionalidad', 'id_rol', 29, 37, 'EDIT', { id_rol: 'invalido' }, 'id_rol_format_ko'],
    ['rolaccionfuncionalidad', 'id_rol', 30, 38, 'EDIT', { id_rol: '2' }, true],

    // ---------SEARCH--------------------------
    ['rolaccionfuncionalidad', 'id_rol', 31, 39, 'SEARCH', { id_rol: '123456789012' }, 'id_rol_max_size_ko'],
    ['rolaccionfuncionalidad', 'id_rol', 32, 40, 'SEARCH', { id_rol: 'error' }, 'id_rol_format_ko'],
    ['rolaccionfuncionalidad', 'id_rol', 33, 41, 'SEARCH', { id_rol: '' }, true],
    ['rolaccionfuncionalidad', 'id_rol', 33, 42, 'SEARCH', { id_rol: '4' }, true]
);
