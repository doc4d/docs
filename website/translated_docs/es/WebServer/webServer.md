---
id: webServer
title: Generalidades
---

4D en modo local y remoto y 4D Server incluyen un motor de servidor web (también conocido como servidor http) que le permite diseñar y publicar poderosas aplicaciones web que pueden aprovechar al máximo sus bases de datos 4D.

## Fácil de supervisar

Puede iniciar o detener la publicación de la aplicación web en cualquier momento. Para ello, basta con seleccionar un comando del menú o ejecutar una sola línea de código.

Supervisar el servidor web 4D es fácil y se puede hacer utilizando la ventana de administración de 4D Server o a través de [ URLs especiales](webServerAdmin.md#administration-urls).

## Listo para usar

El servidor web 4D crea automáticamente una carpeta raíz y una página de inicio por defecto, disponibles inmediatamente.

## Seguridad

La seguridad de los datos está presente en todas las etapas de las implementaciones del servidor web 4D. Los niveles de seguridad son escalables y la configuración por defecto suele seleccionar las opciones más seguras. La seguridad del servidor web 4D se basa en los elementos siguientes:

* Soporte extendido del [**protocolo TLS (HTTPS)**](Admin/tls.md),

*   **Autenticación**: [funciones de autenticación](authentication.md) flexibles y personalizables basadas en la configuración integrada, así como también métodos base de reserva ([`On Web Authentication`](authentication.md#on-web-authentication) para el servidor web y [`On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method) para el servidor REST),

*   **Control de los contenidos expuestos**: sólo los elementos que exponga explícitamente pueden estar disponibles desde peticiones web directaso peticiones REST. Debe declarar:
    -   [Los métodos proyecto](templates.md#allowing-project-methods) expuestos a través de peticiones HTTP
    -   [Las funciones ORDA](ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) expuestas a través de peticiones REST
    -   [Tablas y campos](REST/configuration.md#exposing-tables-and-fields) que no quiere que estén disponibles para las peticiones REST.

*   **Sandboxing** mediante la definición de una [carpeta HTML raíz](webServerConfig.md#root-folder) por defecto,

* **Control del uso de los recursos del servidor** (por ejemplo, vía la opción [máximo de procesos web concurrentes](webServerConfig.html#maximum-concurrent-web-processes)).
> Para una visión general de las funciones de seguridad de 4D, consulte la [Guía de seguridad de 4D](https://blog.4d.com/4d-security-guide/).


## Sesiones usuario

El servidor web 4D incluye completas funcionalidades automáticas para gestionar fácilmente las [sesiones web](sessions.md) (sesiones de usuario) basadas en cookies.


## Punto de acceso para las peticiones REST

El servidor web 4D permite acceder a los datos almacenados en sus aplicaciones 4D a través de peticiones REST. Las peticiones REST ofrecen acceso directo a cualquier operación de la base de datos, como añadir, leer, editar, ordenar o buscar datos.

Las peticiones REST se detallan en la sección [Servidor REST](REST/gettingStarted.md).

## Extensión de los parámetros

The 4D web server configuration is defined through a comprehensive set of application-level settings that can also be customized for the session using the `webServer` object properties or the `WEB SET OPTION` command.

## Plantillas y URLs

The 4D web server supports access to data stored in your 4D applications through template pages and specific URLs.

- Template pages contain [special tags](templates.md) that initiate web server processing at the time when they are sent to browsers.

- [specific URLs](httpRequests) enable 4D to be called in order to execute any action; these URLs can also be used as form actions to trigger processing when the user posts HTML forms.

## Dedicated Database Methods

`On Web Authentication`, `On Web Connection`, as well as `On REST Authentication` database methods are the entry points of requests in the web server; they can be used to evaluate and route any type of request.
