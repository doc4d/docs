---
id: webServerAdmin
title: Administración
---

4D provides several integrated tools to start, stop, or monitor the integrated web server.


## Iniciar el servidor Web 4D

> To be able to launch the web server of 4D or 4D Server, you must have a "4D Web Application" license. For more information, please refer to the [4D Web site](https://www.4d.com).


A 4D project can start and monitor a web server for the main (host) application as well as for each hosted component.

The main 4D web server can be started in different ways:

*   Using a button/menu command.
    *   4D: **Run\>Start Web Server** menu<br>![](assets/en/WebServer/start1.png)
    *   4D Server: **Start HTTP server** button of the HTTP Server page<br>![](assets/en/WebServer/start2.png)

*   Automatically starting it each time the 4D application is opened. To do this, display the **Web\/Configuration** page of the Settings and select the **Launch Web Server at Startup** check box:<br>![](assets/en/WebServer/config.png)

*   Programmatically, by calling the [`webServer.start()`](API/WebServerClass.md#start) function or `WEB START SERVER` command.

The web server of any component can be launched by calling the [`webServer.start()`](API/WebServerClass.md#start) function on the component's web server object.
> You do not need to relaunch the 4D application to start or stop the web server.

## Detener el servidor Web 4D

The main 4D web server can be stopped in different ways:

*   Using the **Run\>Stop Web Server** menu of 4D or the **Stop HTTP server** button of the HTTP Server page of 4D Server (both items show **Start...** when the server is not already started).

*   Programmatically, by calling the [`webServer.stop()`](API/WebServerClass.md#stop) function or `WEB STOP SERVER` command.

The web server of any component can be stopped by calling the `webServer.stop()` function on the component's web server object.


## Testing the 4D Web Server

The **Test Web Server** command can be used to make sure the built-in web server is functioning correctly (4D only). This command is accessible in the **Run** menu when the web server is launched:

![](assets/en/WebServer/test1.png)


When you select this command, the home page of the website published by the 4D application is displayed in a window of your default web browser:

![](assets/en/WebServer/defaultHomePage.png)


This command lets you verify that the web server, home page display, etc. work correctly. The page is called using the *localhost* URL, which is the standard shortcut designating the IP address of the machine on which the web browser is executed. The command takes into account the [TCP publication port](#http-port) number specified in the settings.



## Borrar la caché

At any moment, you can clear the cache of the pages and images that it contains (if, for example, you have modified a static page and you want to reload it in the cache).

Para ello, puede:

-   4D: click on the **Clear Cache** button in the Web/Options (I) page of the Settings dialog box.
-   4D Server: click on the **Clear Cache** button in the HTTP page of the [4D Server Administration window](Admin/server-admin.md#http-server-page).

The cache is then immediately cleared.
> You can also use the [/4DCACHECLEAR](#cacheclear) URL.



## Explorador de ejecución

The **Watch** page (**Web** heading) in the Runtime Explorer displays web server information, particularly:

*   **Web Cache Usage**: indicates the number of pages present in the web cache as well as its use percentage. This information is only available if the web server is active and if the cache size is greater than 0.

*   **Web Server Elapsed Time**: indicates the duration of use (in hours:minutes:seconds format) of the Web server. This information is only available if the web server is active.

*   **Web Hits Count**: indicates the total number of HTTP requests received since the web server boot, as well as an instantaneous number of requests per second (measure taken between two Runtime Explorer updates). This information is only available if the web server is active.




## URL para la administración

Website administration URLS allow you to control the website published on your server. 4D Web Server accepts four particular URLs: */4DSTATS*, */4DHTMLSTATS*, /*4DCACHECLEAR* and */4DWEBTEST*.

> */4DSTATS*, */4DHTMLSTATS* and */4DCACHECLEAR* are only available to the Designer and Administrator of the database. If the 4D password system has not been activated, these URLs are available to all the users. /4DWEBTEST está siempre disponible.


### /4DSTATS

The **/4DSTATS** URL returns several items of information in an HTML table (displayable in a browser):

| Elemento                  | Descripción                                                        |
| ------------------------- | ------------------------------------------------------------------ |
| Tamaño actual de la caché | Tamaño actual de la caché del servidor web (en bytes)              |
| Tamaño máximo de la caché | Tamaño máximo de la caché (en bytes)                               |
| Cached Object Max Size    | Tamaño máximo de cada objeto en la caché (en bytes)                |
| Cache Use                 | Porcentaje de caché utilizado                                      |
| Cached Objects            | Número de objetos encontrados en la caché, **incluyendo imágenes** |

This information can allow you to check the functioning of your server and eventually adapt the corresponding parameters.
> The `WEB GET STATISTICS` command allows you to also obtain information about how the cache is being used for static pages.

### /4DHTMLSTATS

The */4DHTMLSTATS* URL returns, also as an HTML table, the same information as the */4DSTATS* URL. The difference is that the **Cached Objects** field only counts HTML pages (without counting picture files). Moreover, this URL returns the **Filtered Objects** field.

| Elemento                  | Descripción                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------ |
| Tamaño actual de la caché | Tamaño actual de la caché del servidor web (en bytes)                                |
| Tamaño máximo de la caché | Tamaño máximo de la caché (en bytes)                                                 |
| Cached Object Max Size    | Tamaño máximo de cada objeto en la caché (en bytes)                                  |
| Cache Use                 | Porcentaje de caché utilizado                                                        |
| Cached Objects            | Número de objetos encontrados en la caché, **sin imágenes**                          |
| Objetos filtrados         | Número de objetos en la caché que no se cuentan por URL, en particular, las imágenes |


### /4DCACHECLEAR

The */4DCACHECLEAR* URL immediately clears the cache of the static pages and images. It allows you to therefore “force” the update of the pages that have been modified.

### /4DWEBTEST

The */4DWEBTEST* URL is designed to check the web server status. When this URL is called, 4D returns a text file with the following HTTP fields filled:

| Campo HTTP | Descripción                          | Ejemplo                                                                                                                         |
| ---------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Fecha      | current date at the RFC 822 format   | Mon, 7 Dec 2020 13:12:50 GMT                                                                                                    |
| Server     | 4D/Número de versión                 | 4D/18.5.0 (Build 18R5.257368)                                                                                                   |
| User-Agent | name and version @ IP client address | Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36 @ 127.0.0.1 |



## Logs

4D allows you to generate two logs of web requests:

- a debug log, useful in the web server development phase (*HTTPDebugLog.txt*),
- a standardized web request log, rather used for statistic purposes (*logweb.txt*).

Both log files are automatically created in the **Logs** folder of the application project.

### HTTPDebugLog.txt

The [http debug file](webServerConfig.md#debug-log) can be enabled using the [`web server` object](webServerObject.md) or the `WEB SET OPTION` command.

Este archivo de historial registra cada petición HTTP y cada respuesta en modo crudo. Whole requests, including headers, are logged; optionally, body parts can be logged as well.

Los siguientes campos se registran tanto para la solicitud como para la respuesta:

| Nombre del campo | Descripción                                                        |
| ---------------- | ------------------------------------------------------------------ |
| SocketID         | ID del socket utilizado para la comunicación                       |
| PeerIP           | Dirección IPv4 del host (cliente)                                  |
| PeerPort         | Puerto utilizado por el host (cliente)                             |
| TimeStamp        | Timestamp en milisegundos (desde el inicio del sistema)            |
| ConnectionID     | Conexión UUID (UUID del VTCPSocket utilizado para la comunicación) |
| SequenceNumber   | Número de operación único y secuencial en la sesión de historial   |


### logweb.txt

The [web log recording file](webServerConfig.md#log-recording) can be enabled using the [`web server` object](webServerObject.md), the `WEB SET OPTION` command, or the **Web/Log (type)** page of the settings. You need to select the log format.

#### CLF/DLF

Each line of the file represents a request, such as: *host rfc931 user \[DD/MMM/YYYY:HH:MM:SS] "request" state length* Each field is separated by a space and each line ends by the CR/LF sequence (character 13, character 10).

DLF (Combined Log Format) format is similar to CLF (Common Log Format) format and uses exactly the same structure. It simply adds two additional HTTP fields at the end of each request: Referer and User-agent. Here is the description of CLF/DLF formats (not customizable):

| Nombre del campo     | Descripción                                                                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| host                 | Dirección IP del cliente (por ejemplo: "192.100.100.10)                                                                                                             |
| rfc931               | information not generated by 4D, it’s always - (a minus sign                                                                                                        |
| user                 | user name as it is authenticated, or else it is - (a minus sign). If the user name contains spaces, they will be replaced by _ (an underscore).                     |
| DD/MMM/YYYY:HH:MM:SS | DD: day, MMM: a 3-letter abbreviation for the month name (Jan, Feb,...), YYYY: year, HH: hour, MM: minutes, SS: seconds. The date and time are local to the server. |
| request              | request sent by the client (ex. GET /index.htm HTTP/1.0                                                                                                             |
| state                | reply given by the server                                                                                                                                           |
| length               | size of the data returned (except the HTTP header) or 0                                                                                                             |
| Referer              | DLF only- Contains the URL of the page pointing to the requested document.                                                                                          |
| User-agent           | DLF only- Contains the name and version of the browser or software of the client at the origin of the request                                                       |

#### ELF/WLF

The ELF (Extended Log Format) format is very widespread in the world of HTTP browsers. It can be used to build sophisticated logs that meet specific needs. For this reason, the ELF format can be customized: it is possible to choose the fields to be recorded as well as their order of insertion into the file.

The WLF (WebStar Log Format) was developed specifically for the 4D WebSTAR server.

##### Configurar los campos

When you choose the ELF or WLF format, the “Web Log Token Selection” area displays the fields available for the chosen format. You will need to select each field to be included in the log. To do so, check the desired fields.
> No puede seleccionar el mismo campo dos veces.

The following table lists the fields available for each format (in alphabetical order) and describes its contents:

| Campo          | ELF | WLF | Valor                                                                                                                                                 |
| -------------- | --- | --- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| BYTES_RECEIVED |     | X   | Número de bytes recibidos por el servidor                                                                                                             |
| BYTES_SENT     | X   | X   | Número de bytes enviados por el servidor al cliente                                                                                                   |
| C_DNS          | X   | X   | Dirección IP del DNS (ELF: campo idéntico al campo C_IP)                                                                                              |
| C_IP           | X   | X   | Dirección IP del cliente (por ejemplo 192.100.100.10)                                                                                                 |
| CONNECTION_ID  |     | X   | Número de identificación de la conexión                                                                                                               |
| CS(COOKIE)     | X   | X   | Información sobre las cookies contenidas en la petición HTTP                                                                                          |
| CS(HOST)       | X   | X   | Campo Host de la petición HTTP                                                                                                                        |
| CS(REFERER)    | X   | X   | URL de la página que apunta al documento solicitado                                                                                                   |
| CS(USER_AGENT) | X   | X   | Información sobre el software y el sistema operativo del cliente                                                                                      |
| CS_SIP         | X   | X   | Dirección IP del servidor                                                                                                                             |
| CS_URI         | X   | X   | URI sobre el que se realiza la petición                                                                                                               |
| CS_URI_QUERY | X   | X   | Parámetros de consulta de la petición                                                                                                                 |
| CS_URI_STEM  | X   | X   | Parte de la solicitud sin los parámetros de la consulta                                                                                               |
| DATE           | X   | X   | DD: día, MMM: abreviación de 3 letras para el mes (Jan, Feb,...), YYYY: año                                                                           |
| METHOD         | X   | X   | Método HTTP utilizado para la solicitud enviada al servidor                                                                                           |
| PATH_ARGS      |     | X   | Parámetros CGI: cadena situada después del caracter "$"                                                                                               |
| STATUS         | X   | X   | Respuesta ofrecida por el servidor                                                                                                                    |
| TIME           | X   | X   | HH: hora, MM: minutos, SS: segundos                                                                                                                   |
| TRANSFER_TIME  | X   | X   | Tiempo solicitado por el servidor para generar la respuesta                                                                                           |
| USER           | X   | X   | Nombre de usuario si está autenticado; en caso contrario, - (signo menos). Si el nombre de usuario contiene espacios, se sustituyen por _ (subrayado) |
| URL            |     | X   | URL solicitado por el cliente                                                                                                                         |

> Las fechas y horas se indican en GMT.


#### Frecuencia del backup

Since a *logweb.txt* file can become considerably large, it is possible to set up an automatic archiving mechanism. The triggering of a backup can be based on a certain period of time (expressed in hours, days, week or months), or based on the file size; when the set deadline (or file size) is reached, 4D automatically closes and archives the current log file and creates a new one.

When the web log file backup is triggered, the log file is archived in a folder named "Logweb Archives," which is created at the same level as the *logweb.txt* file.

The archived file is renamed based on the following example: “DYYYY_MM_DD_Thh_mm_ss.txt.” For instance, for a file archived on September 4, 2020 at 3:50 p.m. and 7 seconds: “D2020_09_04_T15_50_07.txt.”

#### Parámetros de backup

The automatic backup parameters for the logweb.txt are set on the **Web/Log (backup)** page of the Settings:

![](assets/en/WebServer/backup.png)

First you must choose the frequency (days, weeks, etc.) or the file size limit criterion by clicking on the corresponding radio button. You must then specify the precise moment of the backup if necessary.

*   **Sin copia de seguridad**: la función de copia de seguridad programada está desactivada.

*   **Cada X hora(s)**: esta opción se utiliza para programar las copias de seguridad con una base horaria. Puede introducir un valor entre 1 y 24 .
    *   **starting at**: Used to set the time at which the first back up will begin.

*   **Cada X día(s) a las X**: esta opción se utiliza para programar las copias de seguridad con una base diaria. Introduzca 1 si desea realizar una copia de seguridad diaria. Cuando esta opción está marcada, debe indicar la hora a la que debe comenzar la copia de seguridad.

*   **Cada X semana(s), día a las X**: esta opción se utiliza para programar las copias de seguridad con una base semanal. Introduzca 1 si desea realizar una copia de seguridad semanal. Cuando esta opción está marcada, debe indicar el día(s) de la semana y la hora que debe comenzar cada copia de seguridad. Si lo desea, puede seleccionar varios días de la semana. Por ejemplo, puede utilizar esta opción para definir dos copias de seguridad semanales: una el miércoles y una el viernes.

*   **Cada X mes(es), el día X a las X**: esta opción se utiliza para programar las copias de seguridad con una base mensual. Introduzca 1 si desea realizar una copia de seguridad mensual. Cuando esta opción está marcada, debe indicar el día de cada mes y la hora a la cual debe comenzar la copia de seguridad.

*   **Every X MB**: This option is used to program backups based on the size of the current request log file. A backup is automatically triggered when the file reaches the set size. You can set a size limit of 1, 10, 100 or 1000 MB.
