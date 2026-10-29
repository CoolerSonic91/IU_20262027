let persona_def_tests = Array(

    //se entiende que por defecto "alfabético" significa "alfabético con acentos y ñ". En caso de que alguno de estos no se permita, se dirá explícitamente en el test.
   //campos no ficheros

 /*   Array("persona","dni","input",1,"cumple formato","format","ADD","dni_format_ko","Formato inválido. Debe estar compuesto por 8 dígitos y una letra mayúscula"),
    Array("persona","dni","input",2,"coincide la letra","personalized","ADD","dni_personalized_ko","DNI inválido. La letra no coincide con los 8 dígitos"),
    Array("persona","dni","input",3,"es correcto","valid","ADD",true,"DNI correcto"),

    Array("persona","dni","input",4,"cumple formato","format","EDIT","dni_format_ko","Formato inválido. Debe estar compuesto por 8 dígitos y una letra mayúscula"),
    Array("persona","dni","input",5,"coincide la letra","personalized","EDIT","dni_personalized_ko","DNI inválido. La letra no coincide con los 8 dígitos"),*/
    Array("persona","dni","input",6,"es correcto","valid","ADD",true,"DNI correcto"),
    
    Array("persona","nombre_persona","input",7,"cumple tamaño mínimo","min_size","ADD","nombre_persona_min_size_ko","Tamaño muy corto. Debe estar entre 2 y 45 caracteres"),
    Array("persona","nombre_persona","input",8,"cumple tamaño máximo","max_size","ADD","nombre_persona_max_size_ko","Tamaño muy grande. Debe estar entre 2 y 45 caracteres"),
    Array("persona","nombre_persona","input",9,"cumple formato","format","ADD","nombre_persona_format_ko","Formato inválido. Debe estar entre 2 y 45 caracteres alfabéticos, puntos, guiones y espacio"),
    Array("persona","nombre_persona","input",10,"es correcto","valid","ADD",true,"Nombre persona correcto"),

    Array("persona","nombre_persona","input",11,"cumple tamaño mínimo","min_size","EDIT","nombre_persona_min_size_ko","Tamaño muy corto. Debe estar entre 2 y 45 caracteres"),
    Array("persona","nombre_persona","input",12,"cumple tamaño máximo","max_size","EDIT","nombre_persona_max_size_ko","Tamaño muy grande. Debe estar entre 2 y 45 caracteres"),
    Array("persona","nombre_persona","input",13,"cumple formato","format","EDIT","nombre_persona_format_ko","Formato inválido. Debe estar entre 2 y 45 caracteres alfabéticos, puntos, guiones y espacio"),
    Array("persona","nombre_persona","input",14,"es correcto","valid","EDIT",true,"Nombre persona correcto"),

 /*   Array("persona","apellidos_persona","input",15,"cumple tamaño mínimo","min_size","ADD","apellidos_persona_min_size_ko","Tamaño muy corto. Debe estar entre 3 y 100 caracteres"),
    Array("persona","apellidos_persona","input",16,"cumple tamaño máximo","max_size","ADD","apellidos_persona_max_size_ko","Tamaño muy grande. Debe estar entre 3 y 100 caracteres"),
    Array("persona","apellidos_persona","input",17,"cumple formato","format","ADD","apellidos_persona_format_ko","Formato inválido. Debe estar entre 3 y 100 caracteres alfabéticos, puntos, guiones y espacio"),
    Array("persona","apellidos_persona","input",18,"es correcto","valid","ADD",true,"Apellidos persona correctos"),

    Array("persona","apellidos_persona","input",19,"cumple tamaño mínimo","min_size","EDIT","apellidos_persona_min_size_ko","Tamaño muy corto. Debe estar entre 3 y 100 caracteres"),
    Array("persona","apellidos_persona","input",20,"cumple tamaño máximo","max_size","EDIT","apellidos_persona_max_size_ko","Tamaño muy grande. Debe estar entre 3 y 100 caracteres"),
    Array("persona","apellidos_persona","input",21,"cumple formato","format","EDIT","apellidos_persona_format_ko","Formato inválido. Debe estar entre 3 y 100 caracteres alfabéticos, puntos, guiones y espacio"),
    Array("persona","apellidos_persona","input",22,"es correcto","valid","EDIT",true,"Apellidos persona correctos"),

    Array("persona","fechaNacimiento_persona","input",23,"cumple formato","format","ADD","fechaNacimiento_persona_format_ko","Formato inválido. Debe ser una fecha válida en formato dd/mm/aaaa"),
    Array("persona","fechaNacimiento_persona","input",24,"fecha existe","personalized","ADD","fechaNacimiento_persona_fecha_existe_ko","Fecha inválida. Debe ser una fecha válida en formato dd/mm/aaaa"),
    Array("persona","fechaNacimiento_persona","input",25,"fecha futura","personalized","ADD","fechaNacimiento_persona_fecha_futura_ko","Fecha inválida. La fecha debe ser anterior a la actual, en formato dd/mm/aaaa"),
    Array("persona","fechaNacimiento_persona","input",26,"es correcto","valid","ADD",true,"Fecha nacimiento persona correcta"),

    Array("persona","fechaNacimiento_persona","input",27,"cumple formato","format","EDIT","fechaNacimiento_persona_format_ko","Formato inválido. Debe ser una fecha válida en formato dd/mm/aaaa"),
    Array("persona","fechaNacimiento_persona","input",28,"fecha existe","personalized","EDIT","fechaNacimiento_persona_fecha_existe_ko","Fecha inválida. Debe ser una fecha válida en formato dd/mm/aaaa"),
    Array("persona","fechaNacimiento_persona","input",29,"fecha futura","personalized","EDIT","fechaNacimiento_persona_fecha_futura_ko","Fecha inválida. La fecha debe ser anterior a la actual, en formato dd/mm/aaaa"),
    Array("persona","fechaNacimiento_persona","input",30,"es correcto","valid","EDIT",true,"Fecha nacimiento persona correcta"),

    Array("persona","direccion_persona","input",31,"cumple tamaño mínimo","min_size","ADD","direccion_persona_min_size_ko","Tamaño muy corto. Debe estar entre 10 y 200 caracteres"),
    Array("persona","direccion_persona","input",32,"cumple tamaño máximo","max_size","ADD","direccion_persona_max_size_ko","Tamaño muy grande. Debe estar entre 10 y 200 caracteres"),
    Array("persona","direccion_persona","input",33,"cumple formato","format","ADD","direccion_persona_format_ko","Formato inválido. Debe estar entre 10 y 200 caracteres alfanuméricos, puntos, guiones, espacio y '/'"),
    Array("persona","direccion_persona","input",34,"es correcto","valid","ADD",true,"Dirección persona correcta"),

    Array("persona","direccion_persona","input",35,"cumple tamaño mínimo","min_size","EDIT","direccion_persona_min_size_ko","Tamaño muy corto. Debe estar entre 10 y 200 caracteres"),
    Array("persona","direccion_persona","input",36,"cumple tamaño máximo","max_size","EDIT","direccion_persona_max_size_ko","Tamaño muy grande. Debe estar entre 10 y 200 caracteres"),
    Array("persona","direccion_persona","input",37,"cumple formato","format","EDIT","direccion_persona_format_ko","Formato inválido. Debe estar entre 10 y 200 caracteres alfanuméricos, puntos, guiones, espacio y '/'"),
    Array("persona","direccion_persona","input",38,"es correcto","valid","EDIT",true,"Dirección persona correcta"),

    Array("persona","telefono_persona","input",39,"cumple formato","format","ADD","telefono_persona_format_ko","Formato inválido. Debe estar compuesto por 9 dígitos"),
    Array("persona","telefono_persona","input",40,"es correcto","valid","ADD",true,"Teléfono persona correcto"),

    Array("persona","telefono_persona","input",41,"cumple formato","format","EDIT","telefono_persona_format_ko","Formato inválido. Debe estar compuesto por 9 dígitos"),
    Array("persona","telefono_persona","input",42,"es correcto","valid","EDIT",true,"Teléfono persona correcto"),*/

);

let persona_pruebas = Array(

 /*   Array("persona","dni",1,1,"ADD",{dni:'1234ABC8A'},"dni_format_ko"),
    Array("persona","dni",2,2,"ADD",{dni:'12345678B'},"dni_personalized_ko"),
    Array("persona","dni",3,3,"ADD",{dni:'12345678Z'},true),

    Array("persona","dni",4,4,"EDIT",{dni:'1234ABC8A'},"dni_format_ko"),
    Array("persona","dni",5,5,"EDIT",{dni:'12345678B'},"dni_personalized_ko"),*/
    Array("persona","dni",6,6,"ADD",{dni:'12345678Z'},true),

    Array("persona","nombre_persona",7,7,"ADD",{nombre_persona:'aa'},"nombre_persona_min_size_ko"),
    Array("persona","nombre_persona",8,8,"ADD",{nombre_persona:'a'.repeat(20)},"nombre_persona_max_size_ko"),
    Array("persona","nombre_persona",9,9,"ADD",{nombre_persona:'aaaaaa1'},"nombre_persona_format_ko"),
    Array("persona","nombre_persona",10,10,"ADD",{nombre_persona:'javi'},true),

    Array("persona","nombre_persona",11,11,"EDIT",{nombre_persona:'aa'},"nombre_persona_min_size_ko"),
    Array("persona","nombre_persona",12,12,"EDIT",{nombre_persona:'aaaaaaaaaaaaaaaaaaaaa'},"nombre_persona_max_size_ko"),
    Array("persona","nombre_persona",13,13,"EDIT",{nombre_persona:'aaaaaa1'},"nombre_persona_format_ko"),
    Array("persona","nombre_persona",14,14,"EDIT",{nombre_persona:'javi'},true),

 /*   Array("persona","apellidos_persona",15,15,"ADD",{apellidos_persona:'aa'},"apellidos_persona_min_size_ko"),
    Array("persona","apellidos_persona",16,16,"ADD",{apellidos_persona:'a'.repeat(101)},"apellidos_persona_max_size_ko"),
    Array("persona","apellidos_persona",17,17,"ADD",{apellidos_persona:'aaaaaa1'},"apellidos_persona_format_ko"),
    Array("persona","apellidos_persona",18,18,"ADD",{apellidos_persona:'javi'},true),

    Array("persona","apellidos_persona",19,19,"EDIT",{apellidos_persona:'aa'},"apellidos_persona_min_size_ko"),
    Array("persona","apellidos_persona",20,20,"EDIT",{apellidos_persona:'a'.repeat(101)},"apellidos_persona_max_size_ko"),
    Array("persona","apellidos_persona",21,21,"EDIT",{apellidos_persona:'aaaaaa1'},"apellidos_persona_format_ko"),
    Array("persona","apellidos_persona",22,22,"EDIT",{apellidos_persona:'javi'},true),

    //Debería usarse un "const d = new Date();" o similares para tomar dinámicamente la fecha actual y sumarle un par de días para la prueba de fecha
    Array("persona","fechaNacimiento_persona",23,23,"ADD",{fechaNacimiento_persona:'12-AB 2022'},"fechaNacimiento_persona_format_ko"),
    Array("persona","fechaNacimiento_persona",24,24,"ADD",{fechaNacimiento_persona:'31/02/2022'},"fechaNacimiento_persona_fecha_existe_ko"),
    Array("persona","fechaNacimiento_persona",25,25,"ADD",{fechaNacimiento_persona:'31/12/2077'},"fechaNacimiento_persona_fecha_futura_ko"),
    Array("persona","fechaNacimiento_persona",26,26,"ADD",{fechaNacimiento_persona:'31/12/2022'},true),

    Array("persona","fechaNacimiento_persona",27,27,"EDIT",{fechaNacimiento_persona:'12-AB 2022'},"fechaNacimiento_persona_format_ko"),
    Array("persona","fechaNacimiento_persona",28,28,"EDIT",{fechaNacimiento_persona:'31/02/2022'},"fechaNacimiento_persona_fecha_existe_ko"),
    Array("persona","fechaNacimiento_persona",29,29,"EDIT",{fechaNacimiento_persona:'31/12/2077'},"fechaNacimiento_persona_fecha_futura_ko"),
    Array("persona","fechaNacimiento_persona",30,30,"EDIT",{fechaNacimiento_persona:'31/12/2022'},true),

    Array("persona","direccion_persona",31,31,"ADD",{direccion_persona:'aa'},"direccion_persona_min_size_ko"),
    Array("persona","direccion_persona",32,32,"ADD",{direccion_persona:'a'.repeat(201)},"direccion_persona_max_size_ko"),
    Array("persona","direccion_persona",33,33,"ADD",{direccion_persona:'aaaaaa1'},"direccion_persona_format_ko"),
    Array("persona","direccion_persona",34,34,"ADD",{direccion_persona:'javi'},true),

    Array("persona","direccion_persona",35,35,"EDIT",{direccion_persona:'aa'},"direccion_persona_min_size_ko"),
    Array("persona","direccion_persona",36,36,"EDIT",{direccion_persona:'a'.repeat(201)},"direccion_persona_max_size_ko"),
    Array("persona","direccion_persona",37,37,"EDIT",{direccion_persona:'aaaaaa1'},"direccion_persona_format_ko"),
    Array("persona","direccion_persona",38,38,"EDIT",{direccion_persona:'javi'},true),

    Array("persona","telefono_persona",39,39,"ADD",{telefono_persona:'12345AB8'},"telefono_persona_format_ko"),
    Array("persona","telefono_persona",40,40,"ADD",{telefono_persona:'123456789'},true),

    Array("persona","telefono_persona",41,41,"EDIT",{telefono_persona:'12345AB8'},"telefono_persona_format_ko"),
    Array("persona","telefono_persona",42,42,"EDIT",{telefono_persona:'123456789'},true),*/

);