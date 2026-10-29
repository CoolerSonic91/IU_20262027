/**
 * clase para refactorizar los metodos existentes en Validations. NO se pueden crear metodos nuevos.
 *
 * Se refactorizan min_size y max_size porque en Validations solo comprueban los input de tipo
 * text, number y email. En los formularios de la ET2 tambien hay textarea (descripciones y direccion),
 * select (claves foraneas) e input password (contrasena), y para todos ellos se comprueba
 * la longitud del valor del elemento.
 */
class entity_validations extends Validations{
    constructor(){
        super();
    }

    /**
     * comprueba que el valor del elemento tiene como minimo minsize caracteres
     * @param {string} id id del elemento del formulario
     * @param {number} minsize tamaño minimo
     * @returns {bool} true si cumple el tamaño minimo, false si no
     */
    min_size(id, minsize){
        let elemento = document.getElementById(id);
        if ((elemento.tagName == 'INPUT') && (elemento.type == 'file')){
            return true;
        }
        return (elemento.value.length >= minsize);
    }

    /**
     * comprueba que el valor del elemento tiene como maximo maxsize caracteres
     * @param {string} id id del elemento del formulario
     * @param {number} maxsize tamaño maximo
     * @returns {bool} true si cumple el tamaño maximo, false si no
     */
    max_size(id, maxsize){
        let elemento = document.getElementById(id);
        if ((elemento.tagName == 'INPUT') && (elemento.type == 'file')){
            return true;
        }
        return (elemento.value.length <= maxsize);
    }
}
