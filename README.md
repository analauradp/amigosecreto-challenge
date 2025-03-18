## Challenge Amigo Secreto

**Descripción del proyecto**

Proyecto que implementa un sistema sencillo para sortear amigos secretos. La aplicación permite ingresar nombres de participantes (utilizando sólo letras y espacios) para luego realizar un sorteo aleatorio y seleccionar un "amigo secreto".
El código JavaScript proporciona la lógica necesaria para manejar la entrada de datos, validar nombres, evitar duplicados y realizar el sorteo, todo dentro de una interfaz de usuario simple e intuitiva.

**Funcionalidades**

Agregar participantes: Ingresa un nombre y agregalo a la lista presionando la tecla "Enter" o el botón "Añadir".

Validación de nombres: El sistema verifica que los nombres sólo contengan letras, espacios y no se ingresen duplicados.  

Visualización: Muestra una lista de todos los nombres ingresados. 

Generación aleatoria: Selecciona un nombre de la lista al azar. 

Visualización de resultados: Muestra el nombre del "Amigo secreto" seleccionado. 

Entrada mediante tecla Enter: Se pueden agregar nombres sin utilizar el ratón. 

Campo de entrada: El campo se limpia y mantiene el foco después de cada adición. 

Validaciones: El código proporciona retroalimentación inmediata sobre la validez de los nombres. 

**Cómo utilizarlo**

Para ejecutar este proyecto segurate de seguir estos pasos:

1. Agregar participantes:

Escribe un nombre en el campo de texto. 

Presiona Enter o haz clic en el botón "Añadir".

Si el nombre es válido aparecerá en la lista color verde debajo del campo de texto. 

Si no es válido, recibirás un mensaje que lo indique. 

2. Realizar el sorteo:

Una vez hayas agregado todos los nombres presiona el botón de "Sortear amigo". 

Se leccionará un nombre de la lista al azar. 

El resultado se mostrará como "El amigo secreto es: Nombre seleccionado".

**Estructura del código**

El código consta de 4 funciones principales:

``agregarAmigo()``
Maneja la adicón y validación de los nombres. 

``actualizarLista()``
Actualiza la lista de nombres en la página. 

``sortearAmigo()``
Selecciona un nombre al azar. 

``mostrarResultado``
Muestra el resultado del sorteo. 
