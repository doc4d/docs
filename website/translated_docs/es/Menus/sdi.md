---
id: sdi
title: Mode SDI bajo Windows
---


En Windows, los desarrolladores 4D pueden configurar sus aplicaciones fusionadas 4D para que funcionen como aplicaciones SDI (Single-Document Interface). En las aplicaciones SDI, cada ventana es independiente de las demás y puede tener su propia barra de menús. Las aplicaciones SDI se oponen a las aplicaciones MDI (Multiple Documents Interface), en las que todas las ventanas están contenidas y dependen de la ventana principal.

> El concepto de SDI/MDI no existe en macOS. Esta funcionalidad sólo afecta a las aplicaciones de Windows y las opciones relacionadas se ignoran en macOS.

## Disponibilidad del modo SDI

El modo SDI sólo está disponible en el siguiente entorno de ejecución:

- Windows
- Aplicación 4D fusionada, monopuesto o cliente

## Activación del modo SDI

La activación y el uso del modo SDI en su aplicación requieren los siguientes pasos:

1. Check the **Use SDI mode on Windows** option in the "Interface" page of the Settings dialog box.
2. Crear una aplicación fusionada (monopuesto y/o aplicación cliente).

Entonces, cuando se ejecute en un contexto soportado (ver arriba), la aplicación fusionada funcionará automáticamente en modo SDI.

## Gestión de aplicaciones en modo SDI

La ejecución de una aplicación 4D en modo SDI no requiere ninguna implementación específica: las barras de menú existentes se desplazan automáticamente en las propias ventanas SDI. Sin embargo, debe prestar atención a los principios específicos que se enumeran a continuación.

### Menús en las ventanas

En modo SDI, la barra de menú del proceso se muestra automáticamente en cada ventana de tipo de documento abierta durante la vida del proceso (esto excluye, por ejemplo, las paletas flotantes). Sin embargo, cuando la barra de menús del proceso no está visible, los accesos directos a los elementos del menú permanecen activos.

Los menús se añaden sobre las ventanas sin modificar el tamaño de su contenido:

![](assets/en/Menus/sdi1.png)

Así, las ventanas pueden utilizarse en los modos MDI o SDI sin tener que recalcular la posición de los objetos.

#### Sobre la pantalla de inicio

- If the **Splash screen** interface option was selected in the Settings, the splash window will contain any menus that would have been displayed in the MDI window. Tenga en cuenta también que al cerrar la ventana de la pantalla de inicio se saldrá de la aplicación, al igual que en el modo MDI.
- If the Splash screen option was not selected, menus will be displayed in opened windows only, depending on the programmer's choices.

### Salida automática

When executed in MDI mode, a 4D application simply quits when the user closes the application window (MDI window). However, when executed in SDI mode, 4D applications do not have an application window and, on the other hand, closing the last opened window does not necessarily mean that the user wants the application to quit (faceless processes can be running, for example) -- although it could be what they want.

To handle this case, 4D applications executed in SDI mode include a mechanism to automatically quit (by calling the `QUIT 4D` command) when the following conditions are met:

- the user cannot interact anymore with the application
- there are no live user processes
- 4D processes or worker processes are waiting for an event
- the Web server is not started.

> When a menu with an associated *quit* standard action is called, the application quits and all windows are closed, wherever the menu was called from.

## Lenguaje

Although it is transparently handled by 4D, the SDI mode introduces small variations in the application interface management. Specificities in the 4D language are listed below.

| Comando/funcionalidad             | Specificity in SDI mode on Windows                                                                                                                                                                                                                                                                              |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Open form window`                | Options to support floating windows in SDI (`Controller form window`) and to remove the menu bar (`Form has no menu bar`)                                                                                                                                                                                       |
| `Menu bar height`                 | Returns the height in pixels of a single menu bar line even if the menu bar has been wrapped on two or more lines. Returns 0 when the command is called from a process without a form window                                                                                                                    |
| `SHOW MENU BAR` / `HIDE MENU BAR` | Applied to the current form window only (from where the code is executed)                                                                                                                                                                                                                                       |
| `MAXIMIZE WINDOW`                 | The window is maximized to the screen size                                                                                                                                                                                                                                                                      |
| `CONVERT COORDINATES`             | `XY Screen` is the global coordinate system where the main screen is positioned at (0,0). Screens on its left side or on top of it can have negative coordinates and any screens on its right side or underneath it can have coordinates greater than the values returned by `Screen height` or `Screen width`. |
| `GET MOUSE`                       | Global coordinates are relative to the screen                                                                                                                                                                                                                                                                   |
| `GET WINDOW RECT`                 | When -1 is passed in window parameter, the command returns 0;0;0;0                                                                                                                                                                                                                                              |
| `On Drop database method`         | No soportado                                                                                                                                                                                                                                                                                                    |
