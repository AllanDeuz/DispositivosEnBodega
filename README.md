# DispositivosEnBodega

## Test | Mundo Pacífico

### Funcionalidades disponibles:

- Ingresar dispositivo al sistema.
- Ingresar dispositivo en bodega.
- Enlistar dispositivos en sistema.
- Enlistar dipositivos en bodega.
- Aplicacion de filtros.
    - Filtro por bodega.
    - Filtro por marca.
    - Filtro por modelo.
    - _El sistema detecta todas las bodegas, marcas y modelos ingresados en la base de datos y los enlista como opcion de filtro._
- Eliminar dispositivo.
- Eliminar dispositivo de bodega.

______________________________________________________________________________________________________________________
### Partes del proyecto:

- __FrontEnd__.
    - El FrontEnd se realizo con __Reactjs__ y se encuentra almacenado en _Client_
    - Para ejecutar el FrontEnd debemos seguir los siguientes pasos:
        1. escribir _cd Client_ en consola de comandos dentro del directorio del proyecto.
        2. escribir _npm start_ en consola de comandos dentro del directorio recien ingresado.

- __BackEnd__.
    - El BackEnd se realizo con __Laravel__ y se encuentra almacenado en _Server_
    - Para ejecutar el BackEnd debemos seguir los siguientes pasos:
        1. escribir _cd Server_ en consola de comandos dentro del directorio del proyecto.
        2. escribir _php artisan migrate_ en consola de comandos dentro del directorio recien ingresado.
        3. escribir _php artisan serve_ en consola de comandos dentro del directorio actual.

- __Consideraciones__.
    - Se tomaron en cuenta las siguientes entiedades y atributos para desarrollar la base de datos:
        - _Dispositivo (id, nombre, marca, modelo)_.
        - _Bodega (id, nombre)_.
    - Se considero que la relacion entre Dispositivo y Bodega es de muchos a muchos.
<br>
<br>

_Desarrollador_ : **_Allan Arroyo Rodriguez_**.