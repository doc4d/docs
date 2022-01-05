---
id: webAdmin
title: Administración Web
---


Un componente de servidor web integrado, llamado `WebAdmin`, es utilizado por 4D y 4D Server para dar un acceso web seguro a funciones de gestión específicas como el [Explorador de datos](dataExplorer.md). Puede conectarse local o remotamente a este servidor web desde un navegador o cualquier aplicación web y acceder a la aplicación 4D asociada.

El WebAdmin se encarga de la autenticación de los usuarios con privilegios "WebAdmin", para que puedan abrir sesiones de administración y acceder a las interfaces dedicadas.

Esta funcionalidad se puede utilizar en aplicaciones 4D que se ejecutan con o sin interfaces.


## Iniciar el servidor web WebAdmin

Por defecto, el servidor web `WebAdmin` no se lanza. Es necesario configurar el lanzamiento al inicio, o (en las versiones con interfaz) lanzarlo manualmente mediante una opción de menú.


### Lanzamiento al inicio

Puede configurar el servidor web `WebAdmin` para que se lance al inicio de la aplicación 4D o 4D Server (antes de que se cargue cualquier proyecto).

- Si utiliza una aplicación 4D con interfaz, seleccione la opción de menú **Archivo > Administración web > Propiedades...**.

![alt-text](assets/en/Admin/waMenu1.png)

Seleccione la opción **Inicio automático de la administración del servidor web** en la caja de diálogo de configuración:

![alt-text](assets/en/Admin/waSettings.png)

- Tanto si utiliza la aplicación 4D con o sin interfaz, puede habilitar el modo de inicio automático utilizando el siguiente argumento *Interfaz de línea de comandos*:


```
open ~/Desktop/4D.app --webadmin-auto-start true
```

> Si el puerto TCP utilizado por el servidor web `WebAdmin` ([HTTPS](#https-port) o [HTTP](#http-port), según la configuración) no está disponible al inicio, 4D intentará sucesivamente los 20 puertos siguientes, y utilizará el primero que esté disponible. Si no hay ningún puerto disponible, el servidor web no se lanza y se muestra un error o para las aplicaciones sin interfaz, aparece en la consola.


### Iniciar y detener

Si utiliza una aplicación 4D con interfaz, puede iniciar o detener el servidor web `WebAdmin` de su proyecto en cualquier momento:

Seleccione la opción de menú **Archivo > Administración web > Iniciar el servidor**.

![alt-text](assets/en/Admin/waMenu2.png)

El elemento de menú se convierte en **Detener el servidor** cuando se lanza el servidor; seleccione **Detener el servidor** para detener el servidor web `WebAdmin`.



## Propiedades WebAdmin

La configuración del componente `WebAdmin` es obligatoria, en particular para definir la[** clave de acceso**](#access-key). Por defecto, cuando la clave de acceso no está configurada, no se permite el acceso a través de una url.

Puede configurar el componente `WebAdmin` en la [caja de diálogo Configuración de la administración web](#settings-dialog-box) (ver más abajo).

> Si utiliza una aplicación 4D sin interfaz, puede utilizar los [argumentos de *la interfaz de línea de comandos*](#webadmin-headless-configuration) para definir la configuración básica. Tendrá que personalizar el archivo de configuración para definir los parámetros avanzados.


### Caja de diálogo de parámetros

Para abrir la caja de diálogo de configuración de administración web, seleccione **Archivo > Administración Web > Configuración...**.

![alt-text](assets/en/Admin/waMenu1.png)

Se muestra la siguiente caja de diálogo:

![alt-text](assets/en/Admin/waSettings2.png)

#### Inicio automático de la administración del servidor web

Marque esta opción para lanzar el servidor web `WebAdmin` automáticamente cuando se inicie la aplicación 4D o 4D Server (ver [arriba](#lanzamiento-al-inicio)). Por defecto, esta opción no está seleccionada.

#### Conexiones HTTP en localhost aceptadas

Cuando esta opción está seleccionada, podrá conectarse al servidor web `WebAdmin` a través de HTTP en la misma máquina que la aplicación 4D. Por defecto, esta opción está seleccionada.

**Notas:**
- Nunca se aceptan conexiones con HTTP que no sean localhost.
- Incluso si esta opción está activada, cuando [HTTPS aceptada](#aceptar-https) está activada y la configuración TLS es válida, las conexiones localhost utilizan HTTPS.


#### Puerto HTTP

Número de puerto a utilizar para las conexiones al servidor web `WebAdmin` a través de HTTP cuando la opción **Conexiones HTTP en localhost aceptadas** está marcada. El valor por defecto es 7080.


#### Aceptar HTTPS

Cuando esta opción está seleccionada, podrá conectarse al servidor web `WebAdmin` a través de HTTPS. Por defecto, esta opción está seleccionada.

#### Puerto HTTPS

Número de puerto a utilizar para las conexiones al servidor web `WebAdmin` a través de HTTPS cuando la opción **HTTPS aceptada** está marcada. El valor por defecto es 7443.


#### Ruta de la carpeta de certificados

Ruta de la carpeta donde se encuentran los archivos del certificado TLS. Por defecto, la ruta de la carpeta de certificados está vacía y 4D o 4D Server utiliza los archivos de certificados contenidos en la aplicación 4D (los certificados personalizados deben almacenarse junto a la carpeta de proyecto).

#### Modo de registro de depuración

Estado o formato del archivo de registro de peticiones HTTP (HTTPDebugLog_*nn*.txt, almacenado en la carpeta "Logs" de la aplicación -- *nn* es el número de archivo). The following options are available:

- **Disable** (default)
- **With all body parts** - enabled with body parts in response and request
- **Without body parts** - enabled without body parts (body size is provided)
- **With request body** - enabled with body part in request only
- **With response body** - enabled with body part in response only

#### Access Key

Defining an access key is mandatory to unlock access to the `WebAdmin` web server through an URL (access via a 4D menu command does not require an access key). When no access key is defined, no web client is allowed to connect through an URL to a web administration interface like the [Data Explorer page](dataExplorer.md). An error page is returned in case of connection request:

![alt-text](assets/en/Admin/accessKey.png)

An access key is similar to a password but not associated to a login.

- To define a new access key: click the **Define** button, enter the access key string in the dialog box and click **OK**. The button label becomes **Modify**.
- To modify the access key: click the **Modify** button, enter the new access key string in the dialog box and click **OK**.
- To delete the access key: click the **Modify** button, let the access key area empty and click **OK**.


## WebAdmin Headless Configuration

All [WebAdmin settings](#webadmin-settings) are stored in the `WebAdmin.4DSettings` file. There is one default `WebAdmin.4DSettings` file per 4D and 4D Server application, so that it is possible to deploy multiple applications on the same host machine.

When running a 4D or 4D Server application headless, you can set and use the default `WebAdmin.4DSettings` file, or designate a custom `.4DSettings` file.

To set the file contents, you can use the [WebAdmin settings dialog](#settings-dialog-box) of the 4D application with interface and run it headless afterwards. The default `WebAdmin.4DSettings` file is then used.

Or, you can set a custom `.4DSettings` file (xml format) and use it instead of the default file. Several dedicated arguments are available in the [Command line interface](cli.md) to support this feature.

> The access key is not stored in clear in the `.4DSettings` file.

Ejemplo:

```
"%HOMEPATH%\Desktop\4D Server.exe" MyApp.4DLink --webadmin-access-key 
    "my Fabulous AccessKey" --webadmin-auto-start true   
    --webadmin-store-settings

```


## Authentication and Session

- When a web management page is accessed by entering an URL and without prior identification, an authentication is required. The user must enter the [access key](#access-key) in an authentication dialog box. If the access key was not defined in the `WebAdmin` settings, no access via URL is possible.

- When a web management page is accessed directly from a 4D or 4D Server menu item (such as **Records > Data Explorer** or **Window > Data Explorer** (4D Server)), access is granted without authentication, the user is automatically authenticated.

Once the access is granted, a web [session](WebServer/sessions.md) with the "WebAdmin" privilege is created on the 4D application. As long as the current session has "WebAdmin" privilege, the `WebAdmin` component delivers requested pages.


