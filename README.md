# DispositivosEnBodega

## Test | Mundo

**_Test de evaluación programador inicial_**

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

______________________________________________________________________________________________________________________
### Partes del proyecto:

- __FrontEnd__.

    __Iniciar el FrontEnd del proyecto__.

    - El FrontEnd se realizo con __Reactjs__ y se encuentra almacenado en el directorio llamado "_Client_".
    - Para ejecutar el FrontEnd debemos seguir los siguientes pasos:
        1. escribir "_cd Client_" en consola de comandos dentro del directorio del proyecto.
        2. escribir "_npm install_" en consola de comandos dentro de "_Client_".
        3. escribir "_npm start_" en consola de comandos dentro de "_Client_".

        _Si se siguieron todos los pasos el __FrontEnd__ deberia iniciarse sin problemas_

- __BackEnd__.

    __Precondiciones__: 
    <br/>
    <br/>
    _Se recomienda testear el proyecto en localhost_
    <br/>
    <br/>
    - __Si se usa en _localhost_ entonces:__ <br/>
        - Se requiere una base de datos mysql llamada: _"apirest"_. <br/>
        - Credenciales: username: _"root"_ y password: **Sin password**.

    - __Si se usara otra base de datos o se usan otras credenciales entonces:__ <br/>
        - Dirigirse al archivo llamado __".env"__ en el directorio _"Server"_. <br/>
        - En el archivo __".env"__ se encuentra la siguiente informacion: <br/> 

        +---------------------------------+<br/>
        DB_CONNECTION=mysql <br/>
        DB_HOST=127.0.0.1 <br/>
        DB_PORT=3306 <br/>
        DB_DATABASE=apirest <br/>
        DB_USERNAME=root <br/>
        DB_PASSWORD=
        <br/>+--------------------------------+<br/>
    _En esa seccion se ingresarian las credenciales de la base de datos que se desea vincular_
    <br/>

    - __Si se usa con un servidor externo entonces:__
        - Se requiere realizar una refactorizacion de los "_endpoint_" en cualquier lugar donde este.

    <br/>
    __Iniciar el BackEnd del proyecto__.

    - El BackEnd se realizo con __Laravel__ y se encuentra almacenado en el directorio llamado "_Server_".
    - Para ejecutar el BackEnd debemos seguir los siguientes pasos:
        1. escribir "_cd Server_" en consola de comandos dentro del directorio del proyecto.
        2. escribir "_php artisan migrate_" en consola de comandos dentro del directorio recien ingresado.
        3. escribir "_php artisan serve_" en consola de comandos dentro del directorio actual.

        _Si se siguieron todos los pasos el __BackEnd__ deberia iniciarse sin problemas_

______________________________________________________________________________________________________________________

- __Consideraciones__.
    - Se tomaron en cuenta las siguientes **entiedades** y **atributos** para modelar la base de datos:
        - _Dispositivos (id, nombre, marca, modelo)_.
        - _Bodega (id, nombre)_.
    - Se considera que la relacion entre _Dispositivo_ y _Bodega_ es de **muchos a muchos**.
<br>

_Desarrollador_ : **_Allan Arroyo Rodriguez_**.