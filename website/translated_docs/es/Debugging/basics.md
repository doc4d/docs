---
id: basics
title: Básicos
---

Los errores son comunes. Sería inusual escribir un número importante de líneas de código sin generar errores. Por el contrario, tratar y/o corregir errores también es normal.

El entorno de desarrollo 4D ofrece varias herramientas de depuración para todo tipo de errores.

## Tipos de error

### Errores de digitación

El editor de métodos detecta errores de digitación. Se muestran en rojo y se ofrece información adicional en la parte inferior de la ventana. He aquí un error de escritura:

![punto de ruptura](assets/en/Debugging/typing-error.png)


Estos errores de escritura suelen causar errores de sintaxis (en la imagen anterior, el nombre de la tabla es desconocido). Se obtiene la descripción del error cuando se valida la línea de código. Cuando esto ocurre, corrija el error de digitación y escriba Enter para validar la solución.

### Errores de sintaxis

Algunos errores sólo se pueden capturar cuando se ejecuta el método. La [ventana de error de sintáxis](#syntax-error-window) aparece cuando ocurre un error durante la ejecución del código. Por ejemplo:

![syntax-error](assets/en/Debugging/syntax-error.png)

Expanda el área **Detalles** para mostrar el último error y su número.

### Errores del entorno

Ocasionalmente, puede que no haya suficiente memoria para crear un BLOB. O, cuando acceda a un documento en el disco, el documento puede no existir o ya estar abierto por otra aplicación. Estos errores en el entorno no se producen directamente por su código o por la forma en que lo escribe. La mayoría de las veces estos errores son fáciles de tratar con un [método de captura de errores](Concepts/error-handling.md) instalado utilizando el comando `ON ERR CALL`.

### Errores de diseño o de lógica

Estos son generalmente los tipos de errores más difíciles de encontrar. A excepción de los errores de digitación, todos los tipos de errores listados arriba están cubiertos hasta cierto punto por la expresión "error de diseño o de lógica". Utilice el [depurador ](debugger.md) para detectarlos. Por ejemplo:

- Puede ocurrir un *error de sintaxis* cuando intenta utilizar una variable que aún no está inicializada.
- Puede ocurrir un *error de entorno* cuando intenta abrir un documento, porque el nombre de ese documento es recibido por una subrutina que no obtuvo el valor correcto como parámetro.

Los errores de diseño o de lógica también incluyen situaciones como:

- Un registro no está correctamente actualizado porque, mientras se llama a `SAVE RECORD`, se olvidó de la primera prueba de si el registro estaba bloqueado o no.
- Un método no hace exactamente lo que espera, ya que la presencia de un parámetro opcional no está probada.

A veces el código que muestra el error puede ser diferente al código que en realidad es el origen del problema.

### Errores de ejecución

En modo Aplicación, puede obtener errores que no ve en modo interpretado. Aquí un ejemplo:

![runtime-error](assets/en/Debugging/runtimeError.png)

Para encontrar rápidamente el origen del problema, vuelva a abrir la versión interpretada del archivo de estructura, abra el método y vaya a la línea correspondiente.

## Ventana de error de sintaxis

La ventana de error de sintaxis aparece automáticamente cuando se interrumpe la ejecución de un método. Esto puede ocurrir cuando:

- un error impide que el código siga ejecutándose
- el método produce una afirmación falsa (ver el comando `ASSERT`)

![syntax-error](assets/en/Debugging/syntax-error.png)

The upper text area displays a message describing the error. The lower text area shows the line that was executing when the error occurred; the area where the error occurred is highlighted. The expanded Details section contains the "stack" of errors related to the process.

The syntax error window proposes several options:

- **Edit**: Stops all method execution. 4D switches to the Design environment and the method with the error opens in the Method editor, allowing you to fix it. Use this option when you immediately recognize the mistake and can fix it without further investigation.

- **Trace**: Enters Trace/Debugger mode. The [Debugger](debugger.md) window is displayed. If the current line has only executed partially, you may have to click the **Trace** button several times.

- **Continue**: Execution continues. The line with the error may be partially executed, depending on where the error is located. Continue with caution: the error may prevent the rest of your method from executing properly. We recommend clicking **Continue** only if the error is in a trivial call (such as `SET WINDOW TITLE`) that does not prevent executing and testing the rest of your code.

> Tip: To ignore an error that occurs repeatedly (for example, in loops), you can turn the **Continue** button into an **Ignore** button. Hold down **Alt** (Windows) or **Option** (macOS) key and click the **Continue** button the first time it appears. The button label changes to **Ignore** if the dialog is called again for the same error.

- **Abort**: Stops method execution and returns to the state before the method started executing:

    - If a form method or object method is executing in response to an event, it is stopped and you return to the form.
    - If the method is executing from within the Application environment, you return to that environment.

- **Copy**: Copies the debugging information into the clipboard. The info describes the internal environment of the error (number, internal component, etc.). Está formateado como texto tabulado.

- **Save...**: Saves the contents of the syntax error window and the call chain in a `.txt` file.

## Depurador

A common beginner mistake in dealing with error detection is to click **Abort** in the Syntax Error Window, go back to the Method Editor, and try to figure out what's going by looking at the code. ¡No lo haga! You will save plenty of time and energy by always using the **Debugger**.

The Debugger allows you to step through methods slowly. It displays all the information you need in order to understand why an error occurred. Once you have this information, you know how to fix the error.

Another reason to use the Debugger is for developing code. Sometimes you may write an algorithm that is more complex than usual. Despite all feelings of accomplishment, you can't be totally sure that your coding is 100% correct. Instead of running it "blind", you can use the `TRACE` command at the beginning of your code, then execute it step by step to keep an eye on what happens.

## Rupturas

In the debugging process, you may need to skip the tracing of some parts of the code until a certain line. Or, you may want to trace the code when a given expression has a certain value (e.g. "$myVar > 1000"), or every time a specific 4D command is called.

These needs are covered by **breakpoints** and **command catching** features. They can be configured from the method editor, the debugger, or the Runtime Explorer.