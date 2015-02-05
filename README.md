<h1>Documentación de Náutica Barata</h1>



<h2>ÍNDICE</h2>

<ol>

<li>ESTRUCTURA DE FICHEROS</li>
<li>MODELO VISTA CONTROLADOR</li>
<li>BOOTSTRAP</li>
<li>ANGULAR JS</li>
<li>PREPROCESADORES</li>
<li>HEROKU</li>
<li>GIT</li>
<li>PROBLEMAS ENCONTRADOS</li>
<li>REPARTO DE TAREAS</li>

</ol>

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
Además se ha implementado el diseño de forma que es Responsive.
	

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
Vista de login y controladores de login.js así como users.json, estos elementos están encargados de controlar el acceso de usuarios, para ello se permite registrarse, iniciar sesión y cerrar sesión, se controla que no se pueda crear dos usuarios con el mismo username, así como se restringe el acceso a la vista cuenta a cualquier persona no logeada. Tambien se controla que solo el administrador pueda acceder a añadir productos.


5.PREPROCESADORES
-----------------
Se ha empleado la versión sass de bootstrap. Y se han cambiado algunos colores de la plantilla en estos archivos.



6.HEROKU
--------
Se incluyen en el proyecto varios archivos necesarios para el despliegue de la
aplicación en el servidor Heroku. Estos archivos son Procfile, donde se indica "el punto de entrada" de la web y web.js, archivo necesario para que heroku funcione.



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

<h4>ANTONIO:</h4>
<ul>
<li>Encargado del "routeo" de la web</li>
<li>Encargado de la implementación de login.js</li>
<li>Encargado de la implementación de la vista login</li>
<li>Encargado de la realización del json users</li>
<li>Encargado del la implementación de todas las vistas del footer(vistas: condiciones generales, política de privacidad...)</li>
<li>Encargado de la implementación de la vista add-prod</li>
<li>Encargado de la implementación de productos.js</li>
<li>Encargado de la implementacion de la vista contact us</li>
<li>Encargado de la implementacion de sendemail.php</li>
<li>Encargado de la implementacion de emailventa.php</li>
<li>Encargado de la implementacion de la vista venta.html</li>
<li>Encargado de la implementacion de la vista cuenta.html</li>
</ul>

<h4>AMANDA:</h4>
<ul>
<li>Encargada de la parte "visual" de la web, estilo, colores, estructura...</li>
<li>Encargada de la adaptación del módulo ngcart (carrito) a la aplicación, traducción e implementación</li>
<li>Encargada de la implementación de la vista Carrito</li>
<li>Encargada de la implementación de la distribución por categorías de los productos</li>
<li>Encargada de la realización del json de productos</li>
<li>Encargada de realizar el despliegue en el servidor</li>
			</ul>

<h4>DIEGO:</h4>
<ul>
<li>Encargado de la implementación, implantación y manejo de la base de datos.</li>
<li>Encargado de redactar la documentación.</li>
<li>Diferentes tareas en la implementación de Angular (filtrado, selección...)</li>
			</ul>


