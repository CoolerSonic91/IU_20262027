/**
 * clase para poder refactorizar los metodos que se considere adecuados manteniendo la definición de los mismos y para inclusión de nuevos métodos
 */

class entity_Test_Data extends Data_Test{
    constructor(entidad){
        super(entidad);
    }

    /**
     * Refactorizado: ejecuta las pruebas definidas para la entidad y muestra el resultado
     * en una ventana nueva (en Data_Test se mostraba en el div IU_Test_result_nofile).
     *
     * - usa entity_dom_fields para poder crear los select de las claves foraneas en las pruebas
     * - vacia el contenedor del formulario antes de las pruebas (si no, los campos del formulario
     *   oculto tienen los mismos id que los elementos de prueba) y lo vuelve a crear al terminar
     *
     * @return {bool} true
     */
    data_test_class(){

        this.dom = new entity_dom_fields();
        this.dom.vaciarDiv('contenedor_IU_form');

        var salidapruebas = this.data_test_data();

        // se vuelve a dejar el formulario vacio de la entidad como estaba
        document.getElementById('contenedor_IU_form').innerHTML = this.entidad.manual_form_creation();

        // se construye la tabla de resultados con showData en el div auxiliar y se lleva a la ventana nueva
        let marcados = {
            pruebastatus: {value:'INCORRECTO', style:'background-color: red'},
            traduccionError : {value:'sintraduccion', style:'background-color: red'}
        };
        this.dom.showData('IU_Test_result_nofile', salidapruebas, marcados);
        let tablaresultados = document.getElementById('IU_Test_result_nofile').innerHTML;
        this.dom.vaciarDiv('IU_Test_result_nofile');
        this.dom.hide_element('IU_Test_result_nofile');

        this.mostrarventanaresultados(salidapruebas, tablaresultados);

        return true;
    }

    /**
     * Nuevo: abre una ventana nueva con el resumen y la tabla de resultado de las pruebas
     *
     * @param {Array} salidapruebas resultado de cada prueba
     * @param {string} tablaresultados html de la tabla de resultados
     */
    mostrarventanaresultados(salidapruebas, tablaresultados){

        let total = salidapruebas.length;
        let correctas = salidapruebas.filter(prueba => prueba.pruebastatus == 'CORRECTO').length;
        let sintraduccion = salidapruebas.filter(prueba => prueba.traduccionError == 'sintraduccion').length;
        let nombreentidad = this.entidad.nombreentidad;

        let contenido = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Test ${nombreentidad}</title>
    <style>
        body { font-family: sans-serif; margin: 20px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid black; padding: 4px; font-size: 13px; vertical-align: top; word-break: break-all; max-width: 300px; }
        th { background-color: #ffff99; }
        .resumen { margin-bottom: 15px; font-weight: bold; }
    </style>
</head>
<body>
    <h2>Test ${nombreentidad}</h2>
    <div class="resumen">
        Pruebas: ${total} &nbsp;|&nbsp; CORRECTO: ${correctas} &nbsp;|&nbsp; INCORRECTO: ${total - correctas} &nbsp;|&nbsp; sintraduccion: ${sintraduccion}
    </div>
    ${tablaresultados}
</body>
</html>`;

        let ventana = window.open('', 'test_'+nombreentidad);
        if (ventana === null){
            alert('El navegador ha bloqueado la ventana de resultados de test. Permita las ventanas emergentes para esta p\u00e1gina.');
            return;
        }
        ventana.document.open();
        ventana.document.write(contenido);
        ventana.document.close();
        ventana.focus();
    }

}
