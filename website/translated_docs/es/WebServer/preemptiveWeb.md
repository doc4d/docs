---
id: preemptiveWeb
title: Uso de procesos web apropiativos
---


El servidor web de 4D le permite aprovechar al máximo los ordenadores multinúcleo utilizando procesos web apropiativos en sus aplicaciones. Puede configurar su código relacionado con la web, incluyendo las etiquetas 4D, los métodos base Web o las funciones de clase REST de ORDA para que se ejecuten simultáneamente en tantos núcleos como sea posible.

Para obtener información detallada sobre los procesos apropiativos en 4D, consulte la sección *Procesos 4D apropiativos* del [*manual de lenguaje*](https://doc.4d.com).

## Disponibilidad del modo apropiativo para los procesos web

La siguiente tabla indica si el modo apropiativo se utiliza o está disponible, dependiendo del contexto de ejecución:

| 4D Server             | Interpretado ([asociado al depurador](../Debugging/debugging-remote.md)) | Interpretado (no asociado al depurador) | Compilado       |
| --------------------- | ------------------------------------------------------------------------ | --------------------------------------- | --------------- |
| Servidor REST         | cooperativo                                                              | apropiativo                             | apropiativo     |
| Servidor Web          | cooperativo                                                              | *parámetro web*                         | *parámetro web* |
| Servidor Web Services | cooperativo                                                              | *parámetro web*                         | *parámetro web* |

| 4D remoto/monopuesto  | Interpretado | Compilado       |
| --------------------- | ------------ | --------------- |
| Servidor REST         | cooperativo  | apropiativo     |
| Servidor Web          | cooperativo  | *parámetro web* |
| Servidor Web Services | cooperativo  | *parámetro web* |

- Servidor REST: gestiona las [funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md)
- Servidor web: maneja las [plantillas web](templates.md), [4DACTION y los métodos base](httpRequests.md)
- Servidor de servicios web: gestiona las peticiones SOAP
- ***web setting*** significa que el modo apropiativo depende de un valor de configuración:
    - cuando la opción [**sesiones escalables**](sessions.md#enabling-sessions) está seleccionada, el [modo apropiativo se utiliza automáticamente](sessions.md#preemptive-mode) para los procesos web.
    - de lo contrario, la opción [**Utilizar procesos apropiativos**](webServerConfig.md#use-preemptive-processes) se tiene en cuenta.
    - regarding Web service processes (server or client), preemptive mode is supported at method level. You just have to select "Can be run in preemptive processes" property for published SOAP server methods (see [Publishing a Web Service with 4D](https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.en.html)) or proxy client methods (see [Subscribing to a Web Service in 4D](https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.en.html)) and make sure they are confirmed thread-safe by the compiler.




## Writing thread-safe web server code

All 4D code executed by the web server must be thread-safe if you want your web processes to be run in preemptive mode. When the [preemptive mode is enabled](#availability-of-preemptive-mode-for-web-processes), the following parts of the application will be automatically evaluated by the 4D compiler:

*   All web-related database methods:
    *   [`On Web Authentication`](authentication.md#on-web-authentication)
    *   [`On Web Connection`](httpRequests.md#on-web-connection)
    *   [`On REST Authentication`](REST/configuration.md#using-the-on-rest-authentication-database-method)
    *   [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) and [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action)

*   The `compiler_web` project method (regardless of its actual "Execution mode" property);

*   Basically any code processed by the [`PROCESS 4D TAGS`](https://doc.4d.com/4dv19R/help/command/en/page816.html) command in the web context, for example through .shtml pages

*   Any project method with the "Available through 4D tags and URLS (`4DACTION`, etc.)" attribute

*   Triggers for tables with "Expose as REST resource" attribute

*   [ORDA data model class functions](../REST/ClassFunctions.md) called via REST

For each of these methods and code parts, the compiler will check if the thread-safety rules are respected, and will return errors in case of issues. For more information about thread-safety rules, please refer to the *Writing a thread-safe method* paragraph in the *Processes* chapter of the [4D Language Reference](https://doc.4d.com) manual.

## Código web 4D hilo seguro

Most of the web-related 4D commands and functions, database methods and URLs are thread-safe and can be used in preemptive mode.

### 4D commands and database methods

All 4D web-related commands are thread-safe, *i.e.*:

*   all commands from the *Web Server* theme,
*   all commands from the *HTTP Client* theme.

The web-related database methods are thread-safe and can be used in preemptive mode (see above): `On Web Authentication`, `On Web Connection`, `On REST Authentication`...).

Of course, the code executed by these methods must also be thread-safe.


### URLs del servidor web

The following 4D Web Server URLs are thread-safe and can be used in preemptive mode:

*   *4daction/* (the called project method must also be thread-safe)
*   *4dcgi/* (the called database methods must also be thread-safe)
*   *4dwebtest/*
*   *4dblank/*
*   *4dstats/*
*   *4dhtmlstats/*
*   *4dcacheclear/*
*   *rest/*
*   *4dimgfield/* (generated by `PROCESS 4D TAGS` for web request on picture fields)
*   *4dimg/* (generated by `PROCESS 4D TAGS` for web request on picture variables)

### Preemptive web process icon

Both the Runtime Explorer and the 4D Server administration window display a specific icon for preemptive web processes:

| Tipo de proceso                  | Icono                                    |
| -------------------------------- | ---------------------------------------- |
| Método Web (proceso apropiativo) | ![](assets/en/WebServer/processIcon.png) |


