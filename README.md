# DispositivosEnBodega

## Test | Mundo

### Funcionalidades disponibles:

- Ingresar un nuevo dispositivo al sistema.
- Ingresar un dispositivo en alguna bodega.
- Enlistar dispositivos en sistema.
- Enlistar dipositivos en bodega.
- Aplicacion de filtros:
    - Filtro por bodega.
    - Filtro por marca.
    - Filtro por modelo.
    - _El sistema detecta todas las bodegas, marcas y modelos ingresados en la base de datos y los enlista como opcion de filtro y de ingreso de dispositivo en bodega._
- Eliminar dispositivo del sistema.
- Eliminar dispositivo de una bodega.
- Diseño responsivo.

______________________________________________________________________________________________________________________
### Partes del proyecto:

- __FrontEnd__.

    __Iniciar el FrontEnd del proyecto__.

    - El FrontEnd se realizo con __Reactjs__ y se encuentra almacenado en el directorio llamado _"Client"_.
    - Para ejecutar el FrontEnd debemos seguir los siguientes pasos:
        1. escribir _"cd Client"_ en consola de comandos dentro del directorio del proyecto.
        2. escribir _"npm install"_ en consola de comandos dentro de _"Client"_.
        3. escribir _"npm start"_ en consola de comandos dentro de _"Client"_.

        _Si se siguieron todos los pasos el __FrontEnd__ deberia iniciarse sin problemas_

- __BackEnd__.

    __Precondiciones:__ 
    <br/>
    <br/>
    _Se recomienda testear el proyecto en localhost_
    <br/>
    <br/>
    - __Si se usa en _localhost_ entonces:__ <br/>
        - Se requiere una base de datos mysql llamada: _"apirest"_. <br/>
        - Credenciales: username: _"root"_ y password: **Sin password**.

    - __Si se usara otra base de datos o se usan otras credenciales entonces:__ <br/>
        1. Dirigirse al archivo llamado __".env"__ en el directorio _"Server"_. <br/>
        2. En el archivo __".env"__ se encuentra la siguiente informacion: <br/> 

        +---------------------------------+<br/>
        DB_CONNECTION=mysql <br/>
        DB_HOST=127.0.0.1 <br/>
        DB_PORT=3306 <br/>
        DB_DATABASE=apirest <br/>
        DB_USERNAME=root <br/>
        DB_PASSWORD=
        <br/>+--------------------------------+<br/>

        3. En esa seccion se ingresarian las credenciales de la base de datos que se desea vincular. <br/>

    - __Si se usa con un servidor externo entonces:__
        - Se requiere realizar una refactorizacion de los "_endpoint_" en cualquier lugar donde este. <br/>

    __Iniciar el BackEnd del proyecto__.

    - El BackEnd se realizo con __Laravel__ y se encuentra almacenado en el directorio llamado "_Server_".
    - Para ejecutar el BackEnd debemos seguir los siguientes pasos:
        1. escribir "_cd Server_" en consola de comandos dentro del directorio del proyecto.
        2. escribir "_composer.phar install_" en consola de comandos dentro de "_Server_".
        3. escribir "_php artisan migrate_" en consola de comandos dentro de "_Server_".
        4. escribir "_php artisan serve_" en consola de comandos dentro de "_Server_".

        _Si se siguieron todos los pasos el __BackEnd__ deberia iniciarse sin problemas_

______________________________________________________________________________________________________________________
### Consideraciones:

- Se tomaron en cuenta las siguientes **entidades** y **atributos** para modelar la base de datos:
    - _Dispositivos (id, nombre, marca, modelo)_.
    - _Bodega (id, nombre)_.
- Se considero que la relacion entre _Dispositivo_ y _Bodega_ es de **muchos a muchos**.
<br>

**_Test de evaluación programador inicial_**

_Desarrollador_ : **_Allan Arroyo Rodriguez_**.