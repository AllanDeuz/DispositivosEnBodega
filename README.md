# DispositivosEnBodega

## Test | Mundo Pacífico

### Funcionalidades disponibles:

- _Ingresar dispositivo al sistema_.
- _Ingresar dispositivo en bodega_.
- _Enlistar dispositivos en sistema_.
- _Enlistar dipositivos en bodega_.
- _Aplicacion de filtros_.
    - _Filtro por bodega_.
    - _Filtro por marca_.
    - _Filtro por modelo_.
    - El sistema detecta todas las bodegas, marcas y modelos ingresados en la base de datos y los enlista como opcion de filtro.
- _Eliminar dispositivo_.
- _Eliminar dispositivo de bodega_.

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
        2. escribir _php artisan serve_ en consola de comandos dentro del directorio actual.

- __Consideraciones__.
    - Se tomaron en cuenta las siguientes entiedades y atributos para desarrollar la base de datos:
        - _Dispositivo (id, nombre, marca, modelo)_.
        - _Bodega (id, nombre)_.
    - Se considero que la relacion entre Dispositivo y Bodega es de muchos a muchos.
<br>
<br>

_Desarrollador_ : **_Allan Arroyo Rodriguez_**.