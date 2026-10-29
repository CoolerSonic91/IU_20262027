# Contenido #

## Arquitectura ##

### Propósito ###
Esta es la arquitectura base para el desarrollo de la ET2

Los únicos ficheros que son modificables en esta entrega son los que estan en el directorio app.
Dentro de app

Puede modificarse entity_dom_fields es una clase que hereda de dom_fields y que es comun a todas la entidades que se manejan. 
Puede modificarse entity_Test_Data que hereda de Test_Data. 
Pueden refactorizarse metodos de la clase superior pero no modificar su definición y tambien pueden crearse metodos nuevos.

Sin embargo en entity_validations no se pueden crear nuevos metodos sino modificar los actuales si se quieren incluir nuevos elementos para su comprobación.

Las traducciones tambien estan a nivel del proyecto. En los ficheros de traducciones deben estar los textos para todas las entidades.

A nivel de entidades a tratar los ficheros de clase de entidad y de definición de test y de pruebas estan en un directorio correspondiente al de la entidad.

En el fichero index.html no hay nada que cambiar. Ya se han incluido las llamadas a todos los ficheros que son necesarios en la entrega ET2. Queda un div para mostrar los test y verificar que funcionan correctamente pero que no puede usarse ya que los resultados de test deben ir a una ventana nueva.

Resumen:

Todos el codigo desarrollado (a menos que se detecte error) estará en el directorio app y el resto de elemento de la arquitectura no se puede modificar. La evaluación se realizará con la arquitectura incluyendo el directorio app proporcionado por el grupo de trabajo.




