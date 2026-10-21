// ===============================================================
// DEFINICION DE TESTS: persona_def_tests (9 columnas)
// [entidad, campo, elemento, num_test, descripcion, validacion, accion, resultado, mensaje]
//
// Criterio comun:
//  - ADD y EDIT: min_size, max_size, format, validaciones personalizadas y valid
//  - SEARCH: max_size, format y valid (se permite vacio o valor parcial)
// ===============================================================

let persona_def_tests = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: dni (input, 8 digitos y 1 letra mayuscula, letra valida)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'dni', 'input', 1, 'cumple tamaño minimo', 'min_size', 'ADD', 'dni_min_size_ko', 'DNI demasiado corto. Debe tener 9 caracteres: 8 números y una letra'],
    ['persona', 'dni', 'input', 2, 'cumple tamaño maximo', 'max_size', 'ADD', 'dni_max_size_ko', 'DNI demasiado largo. Debe tener 9 caracteres: 8 números y una letra'],
    ['persona', 'dni', 'input', 3, 'cumple formato', 'format', 'ADD', 'dni_format_ko', 'Formato inválido. Debe tener 8 números seguidos de una letra mayúscula'],
    ['persona', 'dni', 'input', 4, 'la letra corresponde con el numero', 'personalized', 'ADD', 'dni_letra_ko', 'La letra del DNI no se corresponde con los números'],
    ['persona', 'dni', 'input', 5, 'es correcto', 'valid', 'ADD', true, 'DNI correcto'],

    // ---------EDIT----------------------------
    ['persona', 'dni', 'input', 6, 'cumple tamaño minimo', 'min_size', 'EDIT', 'dni_min_size_ko', 'DNI demasiado corto. Debe tener 9 caracteres: 8 números y una letra'],
    ['persona', 'dni', 'input', 7, 'cumple tamaño maximo', 'max_size', 'EDIT', 'dni_max_size_ko', 'DNI demasiado largo. Debe tener 9 caracteres: 8 números y una letra'],
    ['persona', 'dni', 'input', 8, 'cumple formato', 'format', 'EDIT', 'dni_format_ko', 'Formato inválido. Debe tener 8 números seguidos de una letra mayúscula'],
    ['persona', 'dni', 'input', 9, 'la letra corresponde con el numero', 'personalized', 'EDIT', 'dni_letra_ko', 'La letra del DNI no se corresponde con los números'],
    ['persona', 'dni', 'input', 10, 'es correcto', 'valid', 'EDIT', true, 'DNI correcto'],

    // ---------SEARCH--------------------------
    ['persona', 'dni', 'input', 11, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'dni_max_size_ko', 'DNI demasiado largo. Como máximo 9 caracteres'],
    ['persona', 'dni', 'input', 12, 'cumple formato', 'format', 'SEARCH', 'dni_format_ko', 'Formato inválido. Solo números y, al final, una letra mayúscula'],
    ['persona', 'dni', 'input', 13, 'es correcto', 'valid', 'SEARCH', true, 'DNI correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: nombre_persona (input, min 2 max 45, letras con ñ, acentos, puntos, guiones y espacio)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'nombre_persona', 'input', 14, 'cumple tamaño minimo', 'min_size', 'ADD', 'nombre_persona_min_size_ko', 'Nombre demasiado corto. Debe tener entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 15, 'cumple tamaño maximo', 'max_size', 'ADD', 'nombre_persona_max_size_ko', 'Nombre demasiado largo. Debe tener entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 16, 'cumple formato', 'format', 'ADD', 'nombre_persona_format_ko', 'Formato inválido. Solo letras (con ñ y acentos), puntos, guiones y espacios'],
    ['persona', 'nombre_persona', 'input', 17, 'es correcto', 'valid', 'ADD', true, 'Nombre correcto'],

    // ---------EDIT----------------------------
    ['persona', 'nombre_persona', 'input', 18, 'cumple tamaño minimo', 'min_size', 'EDIT', 'nombre_persona_min_size_ko', 'Nombre demasiado corto. Debe tener entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 19, 'cumple tamaño maximo', 'max_size', 'EDIT', 'nombre_persona_max_size_ko', 'Nombre demasiado largo. Debe tener entre 2 y 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 20, 'cumple formato', 'format', 'EDIT', 'nombre_persona_format_ko', 'Formato inválido. Solo letras (con ñ y acentos), puntos, guiones y espacios'],
    ['persona', 'nombre_persona', 'input', 21, 'es correcto', 'valid', 'EDIT', true, 'Nombre correcto'],

    // ---------SEARCH--------------------------
    ['persona', 'nombre_persona', 'input', 22, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'nombre_persona_max_size_ko', 'Nombre demasiado largo. Como máximo 45 caracteres'],
    ['persona', 'nombre_persona', 'input', 23, 'cumple formato', 'format', 'SEARCH', 'nombre_persona_format_ko', 'Formato inválido. Solo letras (con ñ y acentos), puntos, guiones y espacios'],
    ['persona', 'nombre_persona', 'input', 24, 'es correcto', 'valid', 'SEARCH', true, 'Nombre correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: apellidos_persona (input, min 3 max 100, letras con ñ, acentos, puntos, guiones y espacio)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'apellidos_persona', 'input', 25, 'cumple tamaño minimo', 'min_size', 'ADD', 'apellidos_persona_min_size_ko', 'Apellidos demasiado cortos. Deben tener entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 26, 'cumple tamaño maximo', 'max_size', 'ADD', 'apellidos_persona_max_size_ko', 'Apellidos demasiado largos. Deben tener entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 27, 'cumple formato', 'format', 'ADD', 'apellidos_persona_format_ko', 'Formato inválido. Solo letras (con ñ y acentos), puntos, guiones y espacios'],
    ['persona', 'apellidos_persona', 'input', 28, 'es correcto', 'valid', 'ADD', true, 'Apellidos correctos'],

    // ---------EDIT----------------------------
    ['persona', 'apellidos_persona', 'input', 29, 'cumple tamaño minimo', 'min_size', 'EDIT', 'apellidos_persona_min_size_ko', 'Apellidos demasiado cortos. Deben tener entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 30, 'cumple tamaño maximo', 'max_size', 'EDIT', 'apellidos_persona_max_size_ko', 'Apellidos demasiado largos. Deben tener entre 3 y 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 31, 'cumple formato', 'format', 'EDIT', 'apellidos_persona_format_ko', 'Formato inválido. Solo letras (con ñ y acentos), puntos, guiones y espacios'],
    ['persona', 'apellidos_persona', 'input', 32, 'es correcto', 'valid', 'EDIT', true, 'Apellidos correctos'],

    // ---------SEARCH--------------------------
    ['persona', 'apellidos_persona', 'input', 33, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'apellidos_persona_max_size_ko', 'Apellidos demasiado largos. Como máximo 100 caracteres'],
    ['persona', 'apellidos_persona', 'input', 34, 'cumple formato', 'format', 'SEARCH', 'apellidos_persona_format_ko', 'Formato inválido. Solo letras (con ñ y acentos), puntos, guiones y espacios'],
    ['persona', 'apellidos_persona', 'input', 35, 'es correcto', 'valid', 'SEARCH', true, 'Apellidos correctos'],

    // -------------------------------------------------------------
    // ATRIBUTO: fechaNacimiento_persona (input, dd/mm/aaaa, fecha existente y anterior a hoy)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'fechaNacimiento_persona', 'input', 36, 'cumple tamaño minimo', 'min_size', 'ADD', 'fechaNacimiento_persona_min_size_ko', 'Fecha demasiado corta. Debe tener 10 caracteres con el formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 37, 'cumple tamaño maximo', 'max_size', 'ADD', 'fechaNacimiento_persona_max_size_ko', 'Fecha demasiado larga. Debe tener 10 caracteres con el formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 38, 'cumple formato', 'format', 'ADD', 'fechaNacimiento_persona_format_ko', 'Formato inválido. Debe seguir el formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 39, 'la fecha existe en el calendario', 'personalized', 'ADD', 'fechaNacimiento_persona_fecha_valida_ko', 'La fecha no existe. Revise el día y el mes'],
    ['persona', 'fechaNacimiento_persona', 'input', 40, 'la fecha es anterior a la actual', 'personalized', 'ADD', 'fechaNacimiento_persona_fecha_anterior_actual_ko', 'La fecha de nacimiento debe ser anterior a la fecha actual'],
    ['persona', 'fechaNacimiento_persona', 'input', 41, 'es correcto', 'valid', 'ADD', true, 'Fecha de nacimiento correcta'],

    // ---------EDIT----------------------------
    ['persona', 'fechaNacimiento_persona', 'input', 42, 'cumple tamaño minimo', 'min_size', 'EDIT', 'fechaNacimiento_persona_min_size_ko', 'Fecha demasiado corta. Debe tener 10 caracteres con el formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 43, 'cumple tamaño maximo', 'max_size', 'EDIT', 'fechaNacimiento_persona_max_size_ko', 'Fecha demasiado larga. Debe tener 10 caracteres con el formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 44, 'cumple formato', 'format', 'EDIT', 'fechaNacimiento_persona_format_ko', 'Formato inválido. Debe seguir el formato dd/mm/aaaa'],
    ['persona', 'fechaNacimiento_persona', 'input', 45, 'la fecha existe en el calendario', 'personalized', 'EDIT', 'fechaNacimiento_persona_fecha_valida_ko', 'La fecha no existe. Revise el día y el mes'],
    ['persona', 'fechaNacimiento_persona', 'input', 46, 'la fecha es anterior a la actual', 'personalized', 'EDIT', 'fechaNacimiento_persona_fecha_anterior_actual_ko', 'La fecha de nacimiento debe ser anterior a la fecha actual'],
    ['persona', 'fechaNacimiento_persona', 'input', 47, 'es correcto', 'valid', 'EDIT', true, 'Fecha de nacimiento correcta'],

    // ---------SEARCH--------------------------
    ['persona', 'fechaNacimiento_persona', 'input', 48, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'fechaNacimiento_persona_max_size_ko', 'Fecha demasiado larga. Como máximo 10 caracteres'],
    ['persona', 'fechaNacimiento_persona', 'input', 49, 'cumple formato', 'format', 'SEARCH', 'fechaNacimiento_persona_format_ko', 'Formato inválido. Solo números y el separador /'],
    ['persona', 'fechaNacimiento_persona', 'input', 50, 'es correcto', 'valid', 'SEARCH', true, 'Fecha de nacimiento correcta'],

    // -------------------------------------------------------------
    // ATRIBUTO: direccion_persona (input, min 10 max 200, letras con ñ y acentos, numeros, puntos, guiones, punto y coma, espacio y /)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'direccion_persona', 'input', 51, 'cumple tamaño minimo', 'min_size', 'ADD', 'direccion_persona_min_size_ko', 'Dirección demasiado corta. Debe tener entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 52, 'cumple tamaño maximo', 'max_size', 'ADD', 'direccion_persona_max_size_ko', 'Dirección demasiado larga. Debe tener entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 53, 'cumple formato', 'format', 'ADD', 'direccion_persona_format_ko', 'Formato inválido. Solo letras (con ñ y acentos), números, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 54, 'es correcto', 'valid', 'ADD', true, 'Dirección correcta'],

    // ---------EDIT----------------------------
    ['persona', 'direccion_persona', 'input', 55, 'cumple tamaño minimo', 'min_size', 'EDIT', 'direccion_persona_min_size_ko', 'Dirección demasiado corta. Debe tener entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 56, 'cumple tamaño maximo', 'max_size', 'EDIT', 'direccion_persona_max_size_ko', 'Dirección demasiado larga. Debe tener entre 10 y 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 57, 'cumple formato', 'format', 'EDIT', 'direccion_persona_format_ko', 'Formato inválido. Solo letras (con ñ y acentos), números, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 58, 'es correcto', 'valid', 'EDIT', true, 'Dirección correcta'],

    // ---------SEARCH--------------------------
    ['persona', 'direccion_persona', 'input', 59, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'direccion_persona_max_size_ko', 'Dirección demasiado larga. Como máximo 200 caracteres'],
    ['persona', 'direccion_persona', 'input', 60, 'cumple formato', 'format', 'SEARCH', 'direccion_persona_format_ko', 'Formato inválido. Solo letras (con ñ y acentos), números, puntos, guiones, punto y coma, espacios y /'],
    ['persona', 'direccion_persona', 'input', 61, 'es correcto', 'valid', 'SEARCH', true, 'Dirección correcta'],

    // -------------------------------------------------------------
    // ATRIBUTO: telefono_persona (input, 9 digitos, empieza por 6, 7, 8 o 9)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'telefono_persona', 'input', 62, 'cumple tamaño minimo', 'min_size', 'ADD', 'telefono_persona_min_size_ko', 'Teléfono demasiado corto. Debe tener 9 dígitos'],
    ['persona', 'telefono_persona', 'input', 63, 'cumple tamaño maximo', 'max_size', 'ADD', 'telefono_persona_max_size_ko', 'Teléfono demasiado largo. Debe tener 9 dígitos'],
    ['persona', 'telefono_persona', 'input', 64, 'cumple formato', 'format', 'ADD', 'telefono_persona_format_ko', 'Formato inválido. Deben ser 9 dígitos empezando por 6, 7, 8 o 9'],
    ['persona', 'telefono_persona', 'input', 65, 'es correcto', 'valid', 'ADD', true, 'Teléfono correcto'],

    // ---------EDIT----------------------------
    ['persona', 'telefono_persona', 'input', 66, 'cumple tamaño minimo', 'min_size', 'EDIT', 'telefono_persona_min_size_ko', 'Teléfono demasiado corto. Debe tener 9 dígitos'],
    ['persona', 'telefono_persona', 'input', 67, 'cumple tamaño maximo', 'max_size', 'EDIT', 'telefono_persona_max_size_ko', 'Teléfono demasiado largo. Debe tener 9 dígitos'],
    ['persona', 'telefono_persona', 'input', 68, 'cumple formato', 'format', 'EDIT', 'telefono_persona_format_ko', 'Formato inválido. Deben ser 9 dígitos empezando por 6, 7, 8 o 9'],
    ['persona', 'telefono_persona', 'input', 69, 'es correcto', 'valid', 'EDIT', true, 'Teléfono correcto'],

    // ---------SEARCH--------------------------
    ['persona', 'telefono_persona', 'input', 70, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'telefono_persona_max_size_ko', 'Teléfono demasiado largo. Como máximo 9 dígitos'],
    ['persona', 'telefono_persona', 'input', 71, 'cumple formato', 'format', 'SEARCH', 'telefono_persona_format_ko', 'Formato inválido. Solo dígitos'],
    ['persona', 'telefono_persona', 'input', 72, 'es correcto', 'valid', 'SEARCH', true, 'Teléfono correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: email_persona (input, max 45 por la tabla, formato email)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'email_persona', 'input', 73, 'cumple tamaño maximo', 'max_size', 'ADD', 'email_persona_max_size_ko', 'Email demasiado largo. Como máximo 45 caracteres'],
    ['persona', 'email_persona', 'input', 74, 'cumple formato', 'format', 'ADD', 'email_persona_format_ko', 'Formato inválido. Debe ser del tipo usuario@dominio.com'],
    ['persona', 'email_persona', 'input', 75, 'es correcto', 'valid', 'ADD', true, 'Email correcto'],

    // ---------EDIT----------------------------
    ['persona', 'email_persona', 'input', 76, 'cumple tamaño maximo', 'max_size', 'EDIT', 'email_persona_max_size_ko', 'Email demasiado largo. Como máximo 45 caracteres'],
    ['persona', 'email_persona', 'input', 77, 'cumple formato', 'format', 'EDIT', 'email_persona_format_ko', 'Formato inválido. Debe ser del tipo usuario@dominio.com'],
    ['persona', 'email_persona', 'input', 78, 'es correcto', 'valid', 'EDIT', true, 'Email correcto'],

    // ---------SEARCH--------------------------
    ['persona', 'email_persona', 'input', 79, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'email_persona_max_size_ko', 'Email demasiado largo. Como máximo 45 caracteres'],
    ['persona', 'email_persona', 'input', 80, 'cumple formato', 'format', 'SEARCH', 'email_persona_format_ko', 'Formato inválido. Solo letras sin acentos, números y los símbolos . _ % + - @'],
    ['persona', 'email_persona', 'input', 81, 'es correcto', 'valid', 'SEARCH', true, 'Email correcto'],

    // -------------------------------------------------------------
    // ATRIBUTO: nuevo_foto_persona (file, jpg o jpeg, nombre alfabetico y punto min 3 max 15, hasta 2 MB)
    // En ADD la foto es obligatoria. En EDIT es opcional (si no se sube, se mantiene la actual).
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'nuevo_foto_persona', 'file', 82, 'existe fichero', 'exist_file', 'ADD', 'nuevo_foto_persona_exist_file_ko', 'No se ha subido ninguna foto. Debe subir una foto en jpg o jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 83, 'tipo de fichero jpg o jpeg', 'type_file', 'ADD', 'nuevo_foto_persona_type_file_ko', 'Tipo de fichero no permitido. Solo jpg o jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 84, 'tamaño de fichero maximo 2 MB', 'max_size_file', 'ADD', 'nuevo_foto_persona_max_size_file_ko', 'Fichero demasiado grande. Como máximo 2 MB'],
    ['persona', 'nuevo_foto_persona', 'file', 85, 'tamaño minimo del nombre', 'min_size_name_file', 'ADD', 'nuevo_foto_persona_min_size_name_file_ko', 'Nombre de fichero demasiado corto. Debe tener entre 3 y 15 caracteres'],
    ['persona', 'nuevo_foto_persona', 'file', 86, 'tamaño maximo del nombre', 'max_size_name_file', 'ADD', 'nuevo_foto_persona_max_size_name_file_ko', 'Nombre de fichero demasiado largo. Debe tener entre 3 y 15 caracteres'],
    ['persona', 'nuevo_foto_persona', 'file', 87, 'formato del nombre', 'format_name_file', 'ADD', 'nuevo_foto_persona_format_name_file_ko', 'Nombre de fichero inválido. Solo letras sin acentos y puntos, terminado en .jpg o .jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 88, 'es correcto', 'valid', 'ADD', true, 'Foto correcta'],

    // ---------EDIT----------------------------
    ['persona', 'nuevo_foto_persona', 'file', 89, 'tipo de fichero jpg o jpeg', 'type_file', 'EDIT', 'nuevo_foto_persona_type_file_ko', 'Tipo de fichero no permitido. Solo jpg o jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 90, 'tamaño de fichero maximo 2 MB', 'max_size_file', 'EDIT', 'nuevo_foto_persona_max_size_file_ko', 'Fichero demasiado grande. Como máximo 2 MB'],
    ['persona', 'nuevo_foto_persona', 'file', 91, 'tamaño minimo del nombre', 'min_size_name_file', 'EDIT', 'nuevo_foto_persona_min_size_name_file_ko', 'Nombre de fichero demasiado corto. Debe tener entre 3 y 15 caracteres'],
    ['persona', 'nuevo_foto_persona', 'file', 92, 'tamaño maximo del nombre', 'max_size_name_file', 'EDIT', 'nuevo_foto_persona_max_size_name_file_ko', 'Nombre de fichero demasiado largo. Debe tener entre 3 y 15 caracteres'],
    ['persona', 'nuevo_foto_persona', 'file', 93, 'formato del nombre', 'format_name_file', 'EDIT', 'nuevo_foto_persona_format_name_file_ko', 'Nombre de fichero inválido. Solo letras sin acentos y puntos, terminado en .jpg o .jpeg'],
    ['persona', 'nuevo_foto_persona', 'file', 94, 'es correcto', 'valid', 'EDIT', true, 'Foto correcta'],

    // -------------------------------------------------------------
    // ATRIBUTO: foto_persona (input de texto con el nombre de la foto guardada; solo se escribe al buscar)
    // -------------------------------------------------------------
    // ---------SEARCH--------------------------
    ['persona', 'foto_persona', 'input', 95, 'cumple tamaño maximo', 'max_size', 'SEARCH', 'foto_persona_max_size_ko', 'Nombre de foto demasiado largo. Como máximo 15 caracteres'],
    ['persona', 'foto_persona', 'input', 96, 'cumple formato', 'format', 'SEARCH', 'foto_persona_format_ko', 'Formato inválido. Solo letras sin acentos y puntos'],
    ['persona', 'foto_persona', 'input', 97, 'es correcto', 'valid', 'SEARCH', true, 'Nombre de foto correcto']
);


// ===============================================================
// BATERIA DE PRUEBAS: persona_pruebas (7 columnas)
// [entidad, campo, num_test, num_prueba, accion, valores, resultado_esperado]
// ===============================================================

let persona_pruebas = Array(

    // -------------------------------------------------------------
    // ATRIBUTO: dni
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'dni', 1, 1, 'ADD', { dni: '1234567L' }, 'dni_min_size_ko'],
    ['persona', 'dni', 2, 2, 'ADD', { dni: '539124560L' }, 'dni_max_size_ko'],
    ['persona', 'dni', 3, 3, 'ADD', { dni: '5391245LL' }, 'dni_format_ko'],
    ['persona', 'dni', 3, 4, 'ADD', { dni: '53912456l' }, 'dni_format_ko'],
    ['persona', 'dni', 4, 5, 'ADD', { dni: '53912456Z' }, 'dni_letra_ko'],
    ['persona', 'dni', 5, 6, 'ADD', { dni: '53912456L' }, true],
    ['persona', 'dni', 5, 7, 'ADD', { dni: '00000000T' }, true],

    // ---------EDIT----------------------------
    ['persona', 'dni', 6, 8, 'EDIT', { dni: '1234567L' }, 'dni_min_size_ko'],
    ['persona', 'dni', 7, 9, 'EDIT', { dni: '539124560L' }, 'dni_max_size_ko'],
    ['persona', 'dni', 8, 10, 'EDIT', { dni: 'A5391245L' }, 'dni_format_ko'],
    ['persona', 'dni', 8, 11, 'EDIT', { dni: '5391-456L' }, 'dni_format_ko'],
    ['persona', 'dni', 9, 12, 'EDIT', { dni: '53912456Z' }, 'dni_letra_ko'],
    ['persona', 'dni', 10, 13, 'EDIT', { dni: '53912456L' }, true],

    // ---------SEARCH--------------------------
    ['persona', 'dni', 11, 14, 'SEARCH', { dni: '539124560L' }, 'dni_max_size_ko'],
    ['persona', 'dni', 12, 15, 'SEARCH', { dni: '5391-456' }, 'dni_format_ko'],
    ['persona', 'dni', 12, 16, 'SEARCH', { dni: 'L5391' }, 'dni_format_ko'],
    ['persona', 'dni', 13, 17, 'SEARCH', { dni: '' }, true],
    ['persona', 'dni', 13, 18, 'SEARCH', { dni: '5391' }, true],
    ['persona', 'dni', 13, 19, 'SEARCH', { dni: '53912456L' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: nombre_persona
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'nombre_persona', 14, 20, 'ADD', { nombre_persona: 'J' }, 'nombre_persona_min_size_ko'],
    ['persona', 'nombre_persona', 15, 21, 'ADD', { nombre_persona: 'a'.repeat(46) }, 'nombre_persona_max_size_ko'],
    ['persona', 'nombre_persona', 16, 22, 'ADD', { nombre_persona: 'Javier1' }, 'nombre_persona_format_ko'],
    ['persona', 'nombre_persona', 16, 23, 'ADD', { nombre_persona: 'Ana_María' }, 'nombre_persona_format_ko'],
    ['persona', 'nombre_persona', 17, 24, 'ADD', { nombre_persona: 'Jo' }, true],
    ['persona', 'nombre_persona', 17, 25, 'ADD', { nombre_persona: 'a'.repeat(45) }, true],
    ['persona', 'nombre_persona', 17, 26, 'ADD', { nombre_persona: 'José-María Ñ. Núñez' }, true],

    // ---------EDIT----------------------------
    ['persona', 'nombre_persona', 18, 27, 'EDIT', { nombre_persona: 'J' }, 'nombre_persona_min_size_ko'],
    ['persona', 'nombre_persona', 19, 28, 'EDIT', { nombre_persona: 'a'.repeat(46) }, 'nombre_persona_max_size_ko'],
    ['persona', 'nombre_persona', 20, 29, 'EDIT', { nombre_persona: 'Javier1' }, 'nombre_persona_format_ko'],
    ['persona', 'nombre_persona', 21, 30, 'EDIT', { nombre_persona: 'Jo' }, true],
    ['persona', 'nombre_persona', 21, 31, 'EDIT', { nombre_persona: 'a'.repeat(45) }, true],

    // ---------SEARCH--------------------------
    ['persona', 'nombre_persona', 22, 32, 'SEARCH', { nombre_persona: 'a'.repeat(46) }, 'nombre_persona_max_size_ko'],
    ['persona', 'nombre_persona', 23, 33, 'SEARCH', { nombre_persona: 'Ana3' }, 'nombre_persona_format_ko'],
    ['persona', 'nombre_persona', 24, 34, 'SEARCH', { nombre_persona: '' }, true],
    ['persona', 'nombre_persona', 24, 35, 'SEARCH', { nombre_persona: 'J' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: apellidos_persona
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'apellidos_persona', 25, 36, 'ADD', { apellidos_persona: 'Li' }, 'apellidos_persona_min_size_ko'],
    ['persona', 'apellidos_persona', 26, 37, 'ADD', { apellidos_persona: 'a'.repeat(101) }, 'apellidos_persona_max_size_ko'],
    ['persona', 'apellidos_persona', 27, 38, 'ADD', { apellidos_persona: 'García2' }, 'apellidos_persona_format_ko'],
    ['persona', 'apellidos_persona', 27, 39, 'ADD', { apellidos_persona: 'García, Pérez' }, 'apellidos_persona_format_ko'],
    ['persona', 'apellidos_persona', 28, 40, 'ADD', { apellidos_persona: 'Paz' }, true],
    ['persona', 'apellidos_persona', 28, 41, 'ADD', { apellidos_persona: 'a'.repeat(100) }, true],
    ['persona', 'apellidos_persona', 28, 42, 'ADD', { apellidos_persona: 'Señoráns Ferreiro-Gómez' }, true],

    // ---------EDIT----------------------------
    ['persona', 'apellidos_persona', 29, 43, 'EDIT', { apellidos_persona: 'Li' }, 'apellidos_persona_min_size_ko'],
    ['persona', 'apellidos_persona', 30, 44, 'EDIT', { apellidos_persona: 'a'.repeat(101) }, 'apellidos_persona_max_size_ko'],
    ['persona', 'apellidos_persona', 31, 45, 'EDIT', { apellidos_persona: 'García2' }, 'apellidos_persona_format_ko'],
    ['persona', 'apellidos_persona', 32, 46, 'EDIT', { apellidos_persona: 'Paz' }, true],
    ['persona', 'apellidos_persona', 32, 47, 'EDIT', { apellidos_persona: 'a'.repeat(100) }, true],

    // ---------SEARCH--------------------------
    ['persona', 'apellidos_persona', 33, 48, 'SEARCH', { apellidos_persona: 'a'.repeat(101) }, 'apellidos_persona_max_size_ko'],
    ['persona', 'apellidos_persona', 34, 49, 'SEARCH', { apellidos_persona: 'Pér3z' }, 'apellidos_persona_format_ko'],
    ['persona', 'apellidos_persona', 35, 50, 'SEARCH', { apellidos_persona: '' }, true],
    ['persona', 'apellidos_persona', 35, 51, 'SEARCH', { apellidos_persona: 'Pé' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: fechaNacimiento_persona
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'fechaNacimiento_persona', 36, 52, 'ADD', { fechaNacimiento_persona: '1/1/2000' }, 'fechaNacimiento_persona_min_size_ko'],
    ['persona', 'fechaNacimiento_persona', 37, 53, 'ADD', { fechaNacimiento_persona: '01/01/20000' }, 'fechaNacimiento_persona_max_size_ko'],
    ['persona', 'fechaNacimiento_persona', 38, 54, 'ADD', { fechaNacimiento_persona: '01-01-2000' }, 'fechaNacimiento_persona_format_ko'],
    ['persona', 'fechaNacimiento_persona', 38, 55, 'ADD', { fechaNacimiento_persona: '2000/01/01' }, 'fechaNacimiento_persona_format_ko'],
    ['persona', 'fechaNacimiento_persona', 39, 56, 'ADD', { fechaNacimiento_persona: '32/01/2000' }, 'fechaNacimiento_persona_fecha_valida_ko'],
    ['persona', 'fechaNacimiento_persona', 39, 57, 'ADD', { fechaNacimiento_persona: '15/13/2000' }, 'fechaNacimiento_persona_fecha_valida_ko'],
    ['persona', 'fechaNacimiento_persona', 39, 58, 'ADD', { fechaNacimiento_persona: '29/02/2021' }, 'fechaNacimiento_persona_fecha_valida_ko'],
    ['persona', 'fechaNacimiento_persona', 40, 59, 'ADD', { fechaNacimiento_persona: '01/01/2099' }, 'fechaNacimiento_persona_fecha_anterior_actual_ko'],
    ['persona', 'fechaNacimiento_persona', 41, 60, 'ADD', { fechaNacimiento_persona: '29/02/2000' }, true],
    ['persona', 'fechaNacimiento_persona', 41, 61, 'ADD', { fechaNacimiento_persona: '07/10/1985' }, true],

    // ---------EDIT----------------------------
    ['persona', 'fechaNacimiento_persona', 42, 62, 'EDIT', { fechaNacimiento_persona: '1/1/2000' }, 'fechaNacimiento_persona_min_size_ko'],
    ['persona', 'fechaNacimiento_persona', 43, 63, 'EDIT', { fechaNacimiento_persona: '01/01/20000' }, 'fechaNacimiento_persona_max_size_ko'],
    ['persona', 'fechaNacimiento_persona', 44, 64, 'EDIT', { fechaNacimiento_persona: '03 12 2000' }, 'fechaNacimiento_persona_format_ko'],
    ['persona', 'fechaNacimiento_persona', 45, 65, 'EDIT', { fechaNacimiento_persona: '31/04/2000' }, 'fechaNacimiento_persona_fecha_valida_ko'],
    ['persona', 'fechaNacimiento_persona', 46, 66, 'EDIT', { fechaNacimiento_persona: '01/01/2099' }, 'fechaNacimiento_persona_fecha_anterior_actual_ko'],
    ['persona', 'fechaNacimiento_persona', 47, 67, 'EDIT', { fechaNacimiento_persona: '05/10/2000' }, true],

    // ---------SEARCH--------------------------
    ['persona', 'fechaNacimiento_persona', 48, 68, 'SEARCH', { fechaNacimiento_persona: '01/01/20000' }, 'fechaNacimiento_persona_max_size_ko'],
    ['persona', 'fechaNacimiento_persona', 49, 69, 'SEARCH', { fechaNacimiento_persona: '07.12.2020' }, 'fechaNacimiento_persona_format_ko'],
    ['persona', 'fechaNacimiento_persona', 50, 70, 'SEARCH', { fechaNacimiento_persona: '' }, true],
    ['persona', 'fechaNacimiento_persona', 50, 71, 'SEARCH', { fechaNacimiento_persona: '/2000' }, true],
    ['persona', 'fechaNacimiento_persona', 50, 72, 'SEARCH', { fechaNacimiento_persona: '17/09/2000' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: direccion_persona
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'direccion_persona', 51, 73, 'ADD', { direccion_persona: 'Calle 1/2' }, 'direccion_persona_min_size_ko'],
    ['persona', 'direccion_persona', 52, 74, 'ADD', { direccion_persona: 'a'.repeat(201) }, 'direccion_persona_max_size_ko'],
    ['persona', 'direccion_persona', 53, 75, 'ADD', { direccion_persona: 'Calle Rosa, 12' }, 'direccion_persona_format_ko'],
    ['persona', 'direccion_persona', 53, 76, 'ADD', { direccion_persona: 'Calle Rosa #12' }, 'direccion_persona_format_ko'],
    ['persona', 'direccion_persona', 54, 77, 'ADD', { direccion_persona: 'Calle Real' }, true],
    ['persona', 'direccion_persona', 54, 78, 'ADD', { direccion_persona: 'a'.repeat(200) }, true],
    ['persona', 'direccion_persona', 54, 79, 'ADD', { direccion_persona: 'Rúa Peña 3-B; piso 2/A.' }, true],

    // ---------EDIT----------------------------
    ['persona', 'direccion_persona', 55, 80, 'EDIT', { direccion_persona: 'Calle 1/2' }, 'direccion_persona_min_size_ko'],
    ['persona', 'direccion_persona', 56, 81, 'EDIT', { direccion_persona: 'a'.repeat(201) }, 'direccion_persona_max_size_ko'],
    ['persona', 'direccion_persona', 57, 82, 'EDIT', { direccion_persona: 'Calle Rosa, 12' }, 'direccion_persona_format_ko'],
    ['persona', 'direccion_persona', 58, 83, 'EDIT', { direccion_persona: 'Calle Real' }, true],
    ['persona', 'direccion_persona', 58, 84, 'EDIT', { direccion_persona: 'a'.repeat(200) }, true],

    // ---------SEARCH--------------------------
    ['persona', 'direccion_persona', 59, 85, 'SEARCH', { direccion_persona: 'a'.repeat(201) }, 'direccion_persona_max_size_ko'],
    ['persona', 'direccion_persona', 60, 86, 'SEARCH', { direccion_persona: 'Rosa, 12' }, 'direccion_persona_format_ko'],
    ['persona', 'direccion_persona', 61, 87, 'SEARCH', { direccion_persona: '' }, true],
    ['persona', 'direccion_persona', 61, 88, 'SEARCH', { direccion_persona: 'Rúa' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: telefono_persona
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'telefono_persona', 62, 89, 'ADD', { telefono_persona: '62345678' }, 'telefono_persona_min_size_ko'],
    ['persona', 'telefono_persona', 63, 90, 'ADD', { telefono_persona: '6234567890' }, 'telefono_persona_max_size_ko'],
    ['persona', 'telefono_persona', 64, 91, 'ADD', { telefono_persona: '123456789' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 64, 92, 'ADD', { telefono_persona: '62345678a' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 65, 93, 'ADD', { telefono_persona: '623456789' }, true],
    ['persona', 'telefono_persona', 65, 94, 'ADD', { telefono_persona: '988123456' }, true],

    // ---------EDIT----------------------------
    ['persona', 'telefono_persona', 66, 95, 'EDIT', { telefono_persona: '62345678' }, 'telefono_persona_min_size_ko'],
    ['persona', 'telefono_persona', 67, 96, 'EDIT', { telefono_persona: '6234567890' }, 'telefono_persona_max_size_ko'],
    ['persona', 'telefono_persona', 68, 97, 'EDIT', { telefono_persona: '512345678' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 69, 98, 'EDIT', { telefono_persona: '723456789' }, true],

    // ---------SEARCH--------------------------
    ['persona', 'telefono_persona', 70, 99, 'SEARCH', { telefono_persona: '6234567890' }, 'telefono_persona_max_size_ko'],
    ['persona', 'telefono_persona', 71, 100, 'SEARCH', { telefono_persona: '6234a' }, 'telefono_persona_format_ko'],
    ['persona', 'telefono_persona', 72, 101, 'SEARCH', { telefono_persona: '' }, true],
    ['persona', 'telefono_persona', 72, 102, 'SEARCH', { telefono_persona: '6234' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: email_persona
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'email_persona', 73, 103, 'ADD', { email_persona: 'a'.repeat(37) + '@mail.com' }, 'email_persona_max_size_ko'],
    ['persona', 'email_persona', 74, 104, 'ADD', { email_persona: 'javi' }, 'email_persona_format_ko'],
    ['persona', 'email_persona', 74, 105, 'ADD', { email_persona: 'javi@ejemplo' }, 'email_persona_format_ko'],
    ['persona', 'email_persona', 74, 106, 'ADD', { email_persona: '' }, 'email_persona_format_ko'],
    ['persona', 'email_persona', 75, 107, 'ADD', { email_persona: 'javi@ejemplo.com' }, true],
    ['persona', 'email_persona', 75, 108, 'ADD', { email_persona: 'a'.repeat(36) + '@mail.com' }, true],

    // ---------EDIT----------------------------
    ['persona', 'email_persona', 76, 109, 'EDIT', { email_persona: 'a'.repeat(37) + '@mail.com' }, 'email_persona_max_size_ko'],
    ['persona', 'email_persona', 77, 110, 'EDIT', { email_persona: 'javi@@ejemplo.com' }, 'email_persona_format_ko'],
    ['persona', 'email_persona', 78, 111, 'EDIT', { email_persona: 'javi.perez@ejemplo.es' }, true],

    // ---------SEARCH--------------------------
    ['persona', 'email_persona', 79, 112, 'SEARCH', { email_persona: 'a'.repeat(37) + '@mail.com' }, 'email_persona_max_size_ko'],
    ['persona', 'email_persona', 80, 113, 'SEARCH', { email_persona: 'javi ejemplo' }, 'email_persona_format_ko'],
    ['persona', 'email_persona', 81, 114, 'SEARCH', { email_persona: '' }, true],
    ['persona', 'email_persona', 81, 115, 'SEARCH', { email_persona: 'javi@' }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: nuevo_foto_persona (max_size_file es el tamaño del fichero en bytes; 2 MB = 2097152)
    // -------------------------------------------------------------
    // ---------ADD-----------------------------
    ['persona', 'nuevo_foto_persona', 82, 116, 'ADD', {}, 'nuevo_foto_persona_exist_file_ko'],
    ['persona', 'nuevo_foto_persona', 83, 117, 'ADD', { nuevo_foto_persona: { format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 1000 } }, 'nuevo_foto_persona_type_file_ko'],
    ['persona', 'nuevo_foto_persona', 83, 118, 'ADD', { nuevo_foto_persona: { format_name_file: 'foto.jpg', type_file: 'application/pdf', max_size_file: 1000 } }, 'nuevo_foto_persona_type_file_ko'],
    ['persona', 'nuevo_foto_persona', 84, 119, 'ADD', { nuevo_foto_persona: { format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2097153 } }, 'nuevo_foto_persona_max_size_file_ko'],
    ['persona', 'nuevo_foto_persona', 85, 120, 'ADD', { nuevo_foto_persona: { format_name_file: 'ab', type_file: 'image/jpeg', max_size_file: 1000 } }, 'nuevo_foto_persona_min_size_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 86, 121, 'ADD', { nuevo_foto_persona: { format_name_file: 'abcdefghijkl.jpg', type_file: 'image/jpeg', max_size_file: 1000 } }, 'nuevo_foto_persona_max_size_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 87, 122, 'ADD', { nuevo_foto_persona: { format_name_file: 'foto1.jpg', type_file: 'image/jpeg', max_size_file: 1000 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 87, 123, 'ADD', { nuevo_foto_persona: { format_name_file: 'foto_a.jpg', type_file: 'image/jpeg', max_size_file: 1000 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 87, 124, 'ADD', { nuevo_foto_persona: { format_name_file: 'foto.png', type_file: 'image/jpeg', max_size_file: 1000 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 88, 125, 'ADD', { nuevo_foto_persona: { format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2097152 } }, true],
    ['persona', 'nuevo_foto_persona', 88, 126, 'ADD', { nuevo_foto_persona: { format_name_file: 'abcdefghij.jpeg', type_file: 'image/jpeg', max_size_file: 1000 } }, true],

    // ---------EDIT----------------------------
    ['persona', 'nuevo_foto_persona', 89, 127, 'EDIT', { nuevo_foto_persona: { format_name_file: 'foto.jpg', type_file: 'image/png', max_size_file: 1000 } }, 'nuevo_foto_persona_type_file_ko'],
    ['persona', 'nuevo_foto_persona', 90, 128, 'EDIT', { nuevo_foto_persona: { format_name_file: 'foto.jpg', type_file: 'image/jpeg', max_size_file: 2097153 } }, 'nuevo_foto_persona_max_size_file_ko'],
    ['persona', 'nuevo_foto_persona', 91, 129, 'EDIT', { nuevo_foto_persona: { format_name_file: 'ab', type_file: 'image/jpeg', max_size_file: 1000 } }, 'nuevo_foto_persona_min_size_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 92, 130, 'EDIT', { nuevo_foto_persona: { format_name_file: 'abcdefghijkl.jpg', type_file: 'image/jpeg', max_size_file: 1000 } }, 'nuevo_foto_persona_max_size_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 93, 131, 'EDIT', { nuevo_foto_persona: { format_name_file: 'foto1.jpg', type_file: 'image/jpeg', max_size_file: 1000 } }, 'nuevo_foto_persona_format_name_file_ko'],
    ['persona', 'nuevo_foto_persona', 94, 132, 'EDIT', {}, true],
    ['persona', 'nuevo_foto_persona', 94, 133, 'EDIT', { nuevo_foto_persona: { format_name_file: 'foto.jpeg', type_file: 'image/jpeg', max_size_file: 2097152 } }, true],

    // -------------------------------------------------------------
    // ATRIBUTO: foto_persona
    // -------------------------------------------------------------
    // ---------SEARCH--------------------------
    ['persona', 'foto_persona', 95, 134, 'SEARCH', { foto_persona: 'abcdefghijkl.jpg' }, 'foto_persona_max_size_ko'],
    ['persona', 'foto_persona', 96, 135, 'SEARCH', { foto_persona: 'foto1.jpg' }, 'foto_persona_format_ko'],
    ['persona', 'foto_persona', 97, 136, 'SEARCH', { foto_persona: '' }, true],
    ['persona', 'foto_persona', 97, 137, 'SEARCH', { foto_persona: 'foto.jpg' }, true]
);
