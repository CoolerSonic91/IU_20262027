
# Contenido #

## Semana 6 ##

### Propósito ###

Puede verse la inclusión de código en la carpeta de arquitectura que se utilizará como base para la ET2.

En el código correspondiente a la semana seis vamos a incluir un soporte multiidioma en nuestro interfaz de usuario. Para ello tenemos que identificar todos aquellos textos de nuestro código HTML, que se presentan en la interfaz y que son susceptibles de ser traducidos por cada idioma que incorporemos. El primer caso lo vemos en el index.html en el cual tenemos un título general de la aplicación. Después tenemos un título para las opciones de menú también tenemos un texto para cada una de las opciones del menú y una vez que se abre la gestión de una entidad, tenemos un título para la gestión de dicha entidad. Los textos relacionados con los nombres de los atributos que aparecen en la tabla de muestra de datos y los de los formularios los gestionaremos dinámicamente según la entidad que gestionemos.

Tratemos cada uno de ellos por separado. Lo primero es colocar los elementos de traducción del index y que son estáticos y no varian al cambiar la entidad.

``` html

	<header id='header_page' class='bordeado'>
		<span class='text_titulo_app'></span>
		<img src="./iconos/Spain.png" onclick="setLang('ES');" />
        <img src="./iconos/United-Kingdom.png" onclick="setLang('EN');" />
	</header>
	<nav class='bordeado'><span class = 'text_titulo_menu' onclick="menu_work();"></span>
	</nav>
	<aside id='div-menu'>
		<ol>
		    <li class="opcionmenu"><span class = 'text_menu_persona' onclick="entidad = new persona();"></span></li>
		    <li class="opcionmenu"><span onclick="entidad = new entidad();">Gestionar otra entidad</span></li>
	  	</ol>
	</aside>
	<section id="IU_manage_entity">
		<section id="IU_manage_head">
			<div id='title_page' class='bordeado'><span id = "text_title_page"></span>
			</div>
			<div id="add_search_columns">
        		<img id="botonADD" src="./iconos/ADD.png" onclick="entidad.createForm_ADD();" />
        		<img id="botonSEARCH" src="./iconos/SEARCH.png" onclick="entidad.createForm_SEARCH();"/>
				
				<label id="label_seleccioncolumnas" class ="label_seleccioncolumnas"></label>
				<select id="seleccioncolumnas" multiple>
				</select>
				
        	</div>
		</section>

```

Como se puede observar los elementos textuales que tienen que ser traducidos, se van colocando en donde corresponde. Por ejemplo para el titulo de la página que está en el dentro del header en un span se le ha colocado una class = text_titulo_menú. Este class que se le coloca es el que está relacionado con el código de texto que vamos a introducir en el array de traducciones. Por lo tanto en el fichero textos_ES.js habrá un Array que contiene un código text_titulo_app y que tienen una traducción puede ser por ejemplo 'Interfaz ET2 IU'.

``` js
var textos_ES = {

	// textos titulos generales
	'text_titulo_app': 'Interfaz ET2 IU',
	'text_titulo_menu': 'Opciones  Menú',
	'text_titulo_pie': 'Pie de página',
    'label_seleccioncolumnas': 'Seleccionar columnas',

```

Lo mismo hacemos por ejemplo con el título del menú. Al elemento 

``` js
<nav class='bordeado'><span class = 'text_titulo_menu' onclick="menu_work();"></span>
```

se le ha colocado un class 'text_titulo_menu', que en función del idioma cambia el texto del span.

Asi vamos colocando a todos los elementos con texto a mostrar un class con un código para poder cambiar el texto del elemento en función del idioma.

La forma de realizar el cambio de idioma es a través de la función setLang(idioma = ''). Está función lo que hace es lo siguiente:

- si no recibe un parámetro de dos letras que indica el idioma a seleccionar se comprueba si ya hay un idioma seleccionado mirando si existe una cookie de idioma. Si existe la cookie de idioma se establece ese idioma y si no existe se asigna un idioma por defecto. Si no existe cookie de idioma utiliza el que se pasa en la llamada como parámetro.

- una vez establecido el idioma a usar, se crea una cookie de idioma con el idioma seleccionado y ademas se carga en una variable "traduccion" la variable que contiene todo el array de textos del idioma seleccionado.

- Después de ello se recorren todos los elementos de la página buscando un class que coincida con un codigo del array de textos de idioma. Si lo encuentra cambia el contenido html del elemento.

```js

/**
 * funcion de idioma
 * Si no hay idioma establecido lo establece por defecto
 * crea la cookie del idioma seleccionado
 * carga la variable de traducciones correspondiente al idioma seleccionado
 * recorre todos los elementos buscando un class que exista en las traducciones
 * para aplicar el texto de idioma
 * 
 * @param {String} lang Indicación del idioma mediante dos letras (ES, EN, GA..)
 */
function setLang(lang=''){

    if (lang=='') {
        if (getCookie('lang') != '') {
          lang = getCookie('lang');
        } else {    
            lang= 'ES';
        }

    }

    setCookie('lang', lang, 1);
    var traduccion;


    switch(lang) {
        case 'ES' : 
           traduccion=textos_ES;
        break;
        case 'EN' :
           traduccion=textos_EN;
        break;
        default:
           traduccion=textos_ES;
        break;
    }

       
   //**Se recorre el array de traducciones buscando coincidencias una por una*/
   for(var clave in traduccion) {

 		var elementos = document.getElementsByClassName(clave);
        var etiquetas =document.getElementsByTagName('label');
        var inputs = document.getElementsByTagName('input');
        var imgs = document.getElementsByTagName('img');
        var options = document.getElementsByTagName('option');

        for (var elem in elementos) {
            elementos[elem].innerHTML = traduccion[clave];
        }

        for (var i = 0; i < etiquetas.length; i++) {
            if (etiquetas[i].htmlFor == clave) {
                etiquetas[i].innerHTML = traduccion[clave];
            }
        }

        for (var i = 0; i < inputs.length; i++) {
            var list = inputs[i].classList;
            for (var j = 0; j < list.length; j++) {
                if (list[j] == clave) {
                    inputs[i].placeholder = traduccion[clave];
                    inputs[i].title = traduccion[clave];
                }            
            }
        }

        for (var i = 0; i < imgs.length; i++) {
            var list = imgs[i].classList;
            for (var j = 0; j < list.length; j++) {
                 if (list[j] == clave) {
                    imgs[i].alt = traduccion[clave]; // texto alternativo si no se ve la imagen
                    imgs[i].title = traduccion[clave]; // texto superpuesto a la imagen al pasar sobre ella
                }
            } 
        } 

        for (var i = 0; i < options.length; i++) { 
            if (options[i].className == clave) {
                options[i].label = traduccion[clave];
            }
        }
	}
}

```