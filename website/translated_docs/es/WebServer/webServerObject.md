---
id: webServerObject
title: Objeto servidor web
---


A 4D project can start and monitor a web server for the main (host) application as well as each hosted component.

For example, if you installed two components in your main application, you can start and monitor up to three independant web servers from your application:

- one web server for the host application,
- one web server for the component #1,
- one web server for the component #2.

Other than memory, there is no limit to the number of components and thus, of web servers, that can be attached to a single 4D application project.

Each 4D web server, including the main application's web server, is exposed as a specific **object** of the `4D.WebServer` class. Once instantiated, a web server object can be handled from the current application or from any component using a [large number of properties and functions](API/WebServerClass.md).

> The legacy [WEB commands](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) of the 4D language are supported but cannot select the web server to which they apply (see below).

Each web server (host application or component) can be used in its own separate context, including:
- `On Web Authentication` and `On Web Connection` database method calls
- 4D tags processing and method calls,
- web sessions and TLS protocol management.

This allows you to develop independant components and features that come with their own web interfaces.


## Instantiating a web server object

The web server object of the host application (default web server) is automatically loaded by 4D at startup. Thus, if you write in a newly created project:

```4d
$nbSrv:=WEB Server list.length   
//el valor de $nbSrv es 1
```

To instantiate a web server object, call the [`WEB Server`](API/WebServerClass.md#web-server) command:

```4d
    //create an object variable of the 4D.WebServer class
var webServer : 4D.WebServer 
    //call the web server from the current context
webServer:=WEB Server  

    //equivalent to
webServer:=WEB Server(Web server database)
```

If the application uses components and you want to call:
- the host application's web server from a component or
- the server that received the request (whatever the server),

también se puede utilizar:

```4d
var webServer : 4D.WebServer 
    //call the host web server from a component  
webServer:=WEB Server(Web server host database)  
    //call the target web server
webServer:=WEB Server(Web server receiving request)  
```


## Funciones del servidor web

A [web server class object](API/WebServerClass.md#web-server-object) contains the following functions:

| Funciones                                | Parámetros       | Valor devuelto  | Descripción             |
| ---------------------------------------- | ---------------- | --------------- | ----------------------- |
| [`start()`](API/WebServerClass.md#start) | settings (objet) | status (objeto) | Iniciar el servidor web |
| [`stop()`](API/WebServerClass.md#start)  | -                | -               | Detener el servidor Web |

To start and stop a web server, just call the [`start()`](API/WebServerClass.md#start) and [`stop()`](API/WebServerClass.md#stop) functions of the web server object:

```4d
var $status : Object
    //to start a web server with default settings
$status:=webServer.start()
    //to start the web server with custom settings  
    //$settings object contains web server properties
webServer.start($settings)

    //to stop the web server
$status:=webServer.stop()
```


## Propiedades del servidor web

A web server object contains [various properties](API/WebServerClass.md#web-server-object) which configure the web server.

These properties are defined:

1. using the `settings` parameter of the [`.start()`](API/WebServerClass.md#start) function (except for read-only properties, see below),
2. if not used, using the `WEB SET OPTION` command (host applications only),
3. if not used, in the settings of the host application or the component.

- If the web server is not started, the properties contain the values that will be used at the next web server startup.
- If the web server is started, the properties contain the actual values used by the web server (default settings could have been overriden by the `settings` parameter of the [`.start()`](API/WebServerClass.md#start) function.

> *isRunning*, *name*, *openSSLVersion*, and *perfectForwardSecrecy* are read-only properties that cannot be predefined in the `settings` object parameter for the [`start()`](API/WebServerClass.md#start) function.


## Scope of the 4D Web commands

The 4D Language contains [several commands](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) that can be used to control the web server. However, these commands are designed to work with a single (default) web server. When using these commands in the context of web server objects, make sure their scope is appropriate.

| Comando                         | Alcance                                  |
| ------------------------------- | ---------------------------------------- |
| `SET DATABASE PARAMETER`        | Aplicación local del servidor web        |
| `WEB CLOSE SESSION`             | Servidor web que ha recibido la petición |
| `WEB GET BODY PART`             | Servidor web que ha recibido la petición |
| `WEB Get body part count`       | Servidor web que ha recibido la petición |
| `WEB Get Current Session ID`    | Servidor web que ha recibido la petición |
| `WEB GET HTTP BODY`             | Servidor web que ha recibido la petición |
| `WEB GET HTTP HEADER`           | Servidor web que ha recibido la petición |
| `WEB GET OPTION`                | Aplicación local del servidor web        |
| `WEB Get server info`           | Aplicación local del servidor web        |
| `WEB GET SESSION EXPIRATION`    | Servidor web que ha recibido la petición |
| `WEB Get session process count` | Servidor web que ha recibido la petición |
| `WEB GET STATISTICS`            | Aplicación local del servidor web        |
| `WEB GET VARIABLES`             | Servidor web que ha recibido la petición |
| `WEB Is secured connection`     | Servidor web que ha recibido la petición |
| `WEB Is server running`         | Aplicación local del servidor web        |
| `WEB SEND BLOB`                 | Servidor web que ha recibido la petición |
| `WEB SEND FILE`                 | Servidor web que ha recibido la petición |
| `WEB SEND HTTP REDIRECT`        | Servidor web que ha recibido la petición |
| `WEB SEND RAW DATA`             | Servidor web que ha recibido la petición |
| `WEB SEND TEXT`                 | Servidor web que ha recibido la petición |
| `WEB SET HOME PAGE`             | Aplicación local del servidor web        |
| `WEB SET HTTP HEADER`           | Servidor web que ha recibido la petición |
| `WEB SET OPTION`                | Aplicación local del servidor web        |
| `WEB SET ROOT FOLDER`           | Aplicación local del servidor web        |
| `WEB START SERVER`              | Aplicación local del servidor web        |
| `WEB STOP SERVER`               | Aplicación local del servidor web        |
| `WEB Validate digest`           | Servidor web que ha recibido la petición |
