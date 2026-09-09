---
id: menus
title: Menús
---

La interfaz de la aplicación 4D Server está compuesta por los siguientes menús: **Archivo**, **Edición**, **Ventana**, **Ayuda**. En macOS, algunos comandos se encuentran en el menú **4D Server** (menú aplicación).

## File

### New

Este comando jerárquico cuenta con submenús que se pueden utilizar para [crear un proyecto](../GettingStarted/creating.md#creating-a-project) o un nuevo archivo de datos en la máquina servidor.

### Abrir.../Abrir Reciente

Estos comandos se pueden utilizar para [abrir un proyecto con 4D Server](../Desktop/clientServer.md#opening-a-remote-project). El comando **Abrir recientes>** muestra un submenú con la lista de proyectos que 4D Server ha abierto recientemente. Para restablecer este menú, seleccione el comando **Limpiar menú**.

### Cerrar el proyecto...

Este comando cierra el proyecto actual sin salir de la aplicación 4D Server. Al seleccionar este comando, aparece el cuadro de diálogo de apagado del servidor para que pueda [definir el modo de desconexión](../server/exit.md) de los clientes que estén conectados.

### Cerrar ventana

Este comando cierra la ventana que se encuentra en primer plano en la aplicación 4D Server.

### Cerrar todas las ventanas

Este comando cierra todas las ventanas de la aplicación 4D Server. Tenga en cuenta que, en este caso, solo el hecho de que el comando **Cerrar el proyecto...** esté habilitado en el menú **Archivo** indicará si el proyecto sigue publicado.

### Registrar la aplicación actual como un servicio / Anular el registro de la aplicación actual / Anular el registro de todos los servicios del servidor

(Comandos disponibles en Windows) Estos comandos permiten gestionar el [registro de la aplicación como servicio](./service.md).

### Vaciar los búferes de datos

Este comando se puede utilizar para "forzar" el guardado de los datos de la caché en el disco. Por defecto, 4D Server vacía automáticamente la caché transcurrido el [límite de tiempo establecido en la configuración](../settings/database.md#database-cache-settings).

### Copia de seguridad

Este comando permite iniciar una copia de seguridad del proyecto en cualquier momento. Al seleccionar este comando, aparece el siguiente cuadro de diálogo:

![](../assets/en/server/backup.png)

- El botón **Copia de seguridad** inicia inmediatamente una copia de seguridad que tiene en cuenta las [opciones definidas en la Configuración](../settings/backup.md) de la aplicación (archivos incluidos en la copia de seguridad, ubicación de los archivos, número de conjuntos que se conservan, etc.).
- El botón **Propiedades de la base de datos** abre la [sección Copia de seguridad de la configuración](../settings/backup.md), que le permite ver y, si es necesario, modificar los parámetros actuales de la copia de seguridad.
- El botón **Cancelar** interrumpe el proceso de copia de seguridad.

### Restore...

Este comando muestra un cuadro de diálogo para abrir un archivo, de modo que pueda seleccionar la copia de seguridad que desea restaurar.

### Salir

Este comando le permite [cerrar la aplicación 4D Server](./exit.md).

:::note

Bajo macOS, el comando **Salir** se encuentra en el menú **4D Server** (menú aplicación).

:::

## Acción de edición

El menú **Edición** de 4D Server incluye los comandos clásicos de copiar/pegar, el comando **Mostrar el portapapeles**, etc.

Este menú también incluye los comandos **Preferencias...** (en Windows) y **Ajustes**, que muestran los cuadros de diálogo correspondientes de la aplicación. Estos cuadros de diálogo sirven para definir las [preferencias](../Preferences/overview.md) del desarrollador y diversos [ajustes](../settings/overview.md) del proyecto.

:::note

En macOS, el comando **Preferencias...** se encuentra en el menú **4D Server** (menú aplicación).

:::

El menú **Edición** también incluye los comandos **Desconectar depurador** y **Conectar depurador al iniciar**, que le permiten controlar la depuración del código:

### Desconectar depurador

Si selecciona esta opción, el depurador se puede adjuntar a un 4D remoto. El comando del menú pasa a ser **Conectar depurador**, de modo que pueda volver a conectar el depurador al servidor (si aún no está conectado a un cliente 4D remoto).

### Conectar el depurador al iniciar

(selected by default) This option automatically attaches the debugger to the server each time the project is launched. Deselect this option if you want to attach permanently the debugger to a remote 4D.

*Warning*: If this option is selected for a server which is subsequently launched in headless mode, it will not be possible to use the debugger on this server.

For more information, please refer to [Debugging from Remote Machines](../Debugging/debugging-remote.md).

## Window

The first part of the **Window** menu includes standard commands for organizing workspace windows (these commands differ depending on the platform).

It also contains display commands for windows specific to 4D Server:

### Administración

This command displays the [4D Server Administration window](../ServerWindow/overview.md) if it has been closed or minimized.

### Project Dependencies

Displays the [Dependency manager](../Project/components.md).

### Explorador de ejecución

This command displays the 4D Server Runtime Explorer window.

![](../assets/en/server/runtime-explorer.png)

The Runtime Explorer enables you to view the status of the database various structural elements and to check that the available resources are correctly managed. The Runtime Explorer is particularly useful while developing or analyzing a database.

The Runtime Explorer window contains four pages that can be accessed by clicking on the following buttons: **Watch**, **Process**, **Break** and **Catch**. The Runtime Explorer works the same way in 4D Server and 4D.

### Data Explorer in Browser

Displays the [Data Explorer](../Admin/dataExplorer.md) in your default browser.

### Qodly Studio

Displays the [Qodly Studio interface](https://developer.4d.com/qodly/4DQodlyPro/qodlyStudioInterface) in your default browser on the server machine.

### Vista previa de la aplicación Qodly

Displays the start page of your Qodly application in your default browser on the server machine. See [this section](https://developer.4d.com/qodly/4DQodlyPro/gettingStarted#preview-qodly-application) for more information.

## Ayuda

### Maintenance Security Center

This command displays the [Maintenance and Security Center](../MSC/overview.md) (MSC) which groups together all the tools required for verification, analysis, maintenance, back-up, compacting and encryption of data and structure files.
This command is available even when no project is opened by 4D Server: in this case, it can be used to open a project in "maintenance mode" (it displays the standard open file dialog box so that you can designate the project to be opened). Maintenance mode is used more particularly for operations such as compacting or opening damaged projects.

### Online documentation

Opens the 4D documentation home page.

### License manager...

This command displays the License manager, used to view, manage, and activate [licenses](../Admin/licenses.md) in your 4D environment.

### About 4D Server...

Displays the 4D Server **About...** window.
