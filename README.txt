 ----------------------------
| DOCUMENTACIÓN DEL PROYECTO |
 ----------------------------


ÍNDICE

1................ESTRUCTURA DE FICHEROS

2................MODELO VISTA CONTROLADOR

3................BOOTSTRAP

4................ANGULAR JS

5................PREPROCESADORES

6................HEROKU

7................GIT

8................PROBLEMAS ENCONTRADOS
 
9................REPARTO DE TAREAS



1.ESTRUCTURA DE FICHEROS:
-------------------------
	La estructura de ficheros ha sido desplegada con Yeoman. Se utiliza el modelo
vista controlador cuyas vistas están almacenadas en la carpeta views. Las imágenes
referentes a los productos están almacenadas en la carpeta images, mientras que las
imágenes referentes a la decoración de la página y el despliegue con Bootstrap se 
almacenan en la carpeta assets.

	En cuanto a javascript y angular (controladores, factorías...) está almacenado
en el directorio scripts. Además, en ese directorio podemos encontrar varios
archivos JSON que almacenan toda la información sobre productos, usuarios, carrito,
categorías... Hemos decidido almacenarlo en esa carpeta ya que estos archivos son 
accedidos desde los propios archivos de javascript.

	Por último podemos encontrar otros directorio que contienen módulos de node,
(node_modules), módulos de angularjs (bower_components) y directorios necesarios para el
despliegue de Bootstrap (styles, fonts...).



2.MODELO VISTA CONTROLADOR:
---------------------------
	Como ya se ha mencionado, se ha hecho uso del modelo vista controlador. Desde
la vista principal podemos acceder a las vistas restantes: página de login, condiciones
generales, checkout, blog, carrito, cuenta de usuario, horario, detalles de productos, 
envío de email, pantalla de error (404)...
	
	Para realizar este cambio de vistas se ha configurado la aplicación de angular 
mediante "$routeProvider", redirigiendo la vista a dónde se desee.


3.BOOTSRAP
----------
	Para la realización de este proyecto se ha partido de una plantilla de 
Bootstrap para una tienda electrónica y que ha sido adaptada a nuestras
necesidades.
	

4.ANGULAR JS
------------
	A continuación se describirá de manera general como hemos introducido angular
en nuesto proyecto.
	
	4.1. Carrito
		Se ha descargado e introducido un módulo de angular que simula un carrito de 
	la compra.
	
	4.2. Filtrado, repeticiones y otros.
		En diferentes puntos del código se hace uso de estructurs tipo ng-repeat,
	ng-model, filtros... entre otros.

	4.3. Factorías y Controladores
		Para cargar los datos almacenados en los ficheros JSON se usan factorías 
	que almacenan esos datos en variables persistentes que son accedidas desde los
	distintos controladores. Estos controladores se cargan desde distintos puntos 
	de la página.

	4.4. Modelo Vista Controlador
		Descrito anteriormente.

	4.5. Control de Usuarios
		PARA ANTONIO


5.PREPROCESADORES
-----------------
PARA EL QUE SEPA



6.HEROKU
--------
	Se incluyen en el proyecto varios archivos necesarios para el despliegue de la
aplicación en el servidor Heroku. Estos archivos son Procfile y web.js.



7.GIT
-----
	Se ha optado por almacenar el proyecto en el repositorio "www.github.com". 
Además se ha usado como editor el programa Brackets, al cual se le ha instalado un
plugin para poder acceder al repositorio de manera cómoda y simple.



8.PROBLEMAS ENCONTRADOS
-----------------------
	En un principio se intentó integrar la base de datos MongoDB con Angular, pero 
a la hora de acceder a los datos desde los controladores surgía un error que no 
se ha podido corregir de ninguna forma. A simple vista parecía que todo estaba
correcto y se ha indagado durante muchas horas en el tema, pero finalmente no se 
ha conseguido solventar este error y se decidió almacenar la información un ficheros 
JSON, aunque la información si que se almacenaba de forma correcta en la base de datos
de MongoDB.

	Existió además otro problema a la hora de sincronizar archivos modificados en
paralelo con git. Si más de una persona había modificado el archivo a la vez, una 
vez que se unía se generaba basura. La solución fue hacer un reparto concienzudo
de la tarea para que cada participante del proyecto no modificara un fichero que 
no le perteneciera.


9.REPARTO DE TAREAS
-------------------
El reparto de tareas ha quedado de la siguiente forma:

PONED ESTO BONITO:

ANTONIO -->

AMANDA -->

DIEGO --> -Encargado del la implementación, implantación y manejo de la base de datos.
		  -Encargado de redactar la documentación.
		  -Diferentes tareas en la implementación de Angular (filtrado, selección...)
			


