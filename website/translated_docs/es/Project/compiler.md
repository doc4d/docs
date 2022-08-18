---
id: compiler
title: Compilación
---

Puede compilar sus proyectos, es decir, traducir todos sus métodos a lenguaje máquina. La compilación de un proyecto permite verificar la coherencia del código y acelerar su ejecución, además de posibilitar ocultar el código en su totalidad. La compilación es un paso indispensable entre el desarrollo de proyectos con 4D y su despliegue como aplicaciones independientes.


## Compilar

La compilación se realiza desde su aplicación 4D y es totalmente automática.

> En macOS, la compilación requiere que instale `Xcode`. Consulte [esta sección](#silicon-compiler) para obtener más información sobre este requisito.

1. Abra la ventana de compilación seleccionando el comando **Compilador...** en el menú **Diseño** o el botón **Compilador** de la barra de herramientas.

    ![](assets/en/Project/compilerWin1.png)

    ![](assets/en/Project/comp1.png)

> También puede lanzar directamente la compilación seleccionando el elemento de menú **Iniciar compilación** en el menú **Diseño**.

2. Haga clic en el botón **Compilar** para lanzar la compilación utilizando los [parámetros ded compilación](#compiler-settings) actuales.

Si no se detecta ningún error, se inicia la compilación y se muestra el mensaje "Compilación exitosa" en la parte inferior de la ventana cuando se completa la compilación:

![](assets/en/Project/success.png)

Puede inmediatamente [ejecutar su aplicación en modo compilado](#run-compiled) y ver lo rápido que es.

Si se detectan errores, se detiene el proceso y se muestra el mensaje "Compilación fallida". El área de información de la ventana muestra los nombres de los métodos y los números de línea correspondientes en una lista jerárquica:

![](assets/en/Project/compilerWin2.png)

Double-click on each error detected to open the method or class concerned directly in the 4D method editor. La línea que contiene el error se resalta y el tipo de error se muestra en el área de sintaxis de la ventana.

Utilice los comandos **Error anterior** / **Error siguiente** del menú **Método** para navegar de un error a otro.

El número de errores encontrados durante las primeras compilaciones puede ser desalentador, pero no deje que esto lo desanime. Pronto descubrirá que a menudo proceden de la misma fuente, es decir, el incumplimiento de ciertas convenciones del proyecto. El compilador siempre ofrece un [diagnóstico preciso](#error-files) de los errores para ayudarle a corregirlos.

> La compilación requiere una licencia apropiada. Sin esta licencia, no es posible llevar a cabo una compilación (los botones están desactivados). Sin embargo, aún es posible comprobar la sintaxis y generar métodos de digitación.

## Ejecutar la compilación

Una vez compilado un proyecto, es posible pasar del [modo interpretado al modo compilado](Concepts/interpreted.md), y viceversa, en cualquier momento y sin tener que salir de la aplicación 4D (excepto cuando se ha eliminado el código interpretado). Para ello, utilice los comandos **Reiniciar en interpretado** y **Reiniciar en compilado** del menú **Ejecución**. The [Open project dialog box](GettingStarted/creating.md#options) also offers a choice between interpreted or compiled mode for database startup.

Cuando pasa de un modo al otro, 4D cierra el modo actual y abre el nuevo. Esto equivale a salir y volver a abrir la aplicación. Cada vez que se cambia de un modo a otro, 4D ejecuta los dos métodos base siguientes (si se especifican) en este orden: `On Exit` -> `On Startup`.

Si modifica su proyecto en modo interpretado, debe recompilarlo para que sus modificaciones sean tenidas en cuenta en modo compilado.

## Características de la ventana del compilador

Además del botón [**Compilar**](#compile), la ventana del compilador ofrece otras funcionalidades útiles durante la fase de desarrollo del proyecto.

### Verificar la sintaxis

The **Check Syntax** button starts the execution of the syntax-checking phase. At the end of the checking process, any errors detected are listed in the information area. You can double–click on an error line in order to display the corresponding method.

Syntax checking can also be launched directly using the **Check Syntax** command associated with the **Compiler** toolbar button. This option is the only one available if you do not have a suitable license to allow the compilation of applications.

### Generar definiciones de variables

The **Generate Typing** button creates or updates typing compiler methods. Compiler methods are project methods that group together all the variable and array typing declarations (process and interprocess), as well as the method parameters. These methods, when they exist, are used directly by the compiler during code compilation, resulting in faster compilation times.

El nombre de estos métodos debe comenzar por `Compiler_`. You can set the default name for each of the 5 compiler methods in the [compiler settings window](#compiler-methods-for). The compiler methods that are generated and maintained by 4D automatically have the `Invisible` attribute:

![](assets/en/Project/compilerWin3.png)

Only the necessary compiler methods (i.e., those for which items already exist in the project) are generated.

The information area indicates any errors found during method creation or updating. Double-clicking on an error line causes the method and line concerned to be displayed in the Method editor.


### Eliminar el código de compilación

The **Clear compiled code** button deletes the compiled code of the project. When you click on it, all of the [code generated during compilation](#classic-compiler) is deleted, the **Restart Compiled** command of the **Run** menu is disabled and the "Compiled Project" option is not available at startup.


### Mostrar/Ocultar advertencias

Warnings are specific messages generated by the compiler when it checks the syntax. These messages are intended to draw your attention to statements that might lead to execution errors. No impiden la compilación.

Depending on circumstances and the programming style used, these warnings may be more or less relevant. You can toggle the warnings on or off by clicking the **Show/Hide Warnings** button:

![](assets/en/Project/compilerWin4.png)

When this option is checked, the warnings (if any) are displayed in the window, after the other error types. Aparecen en itálica:

![](assets/en/Project/compilerWin5.png)

Al hacer doble clic en un aviso se abre el método correspondiente.

#### Desactivar las advertencias durante la compilación

You can selectively disable certain warnings during compilation by inserting the following into the code of a 4D method:

```4d
  //%W-<warning number>
```

Sólo se pueden desactivar los avisos con números. Warning numbers are specified at the end of each message in the list of compilation errors. Por ejemplo, para desactivar la siguiente advertencia:

*1: Puntero en una declaración de array (518.5)*

... you just need to write the following comment in a 4D method, preferably a `COMPILER_xxx` method (method compiled first):

```4d
  //%W-518.5
```



## Parámetros del compilador

The "Compiler" page of the Settings dialog box lets you set parameters related to project compilation. You can directly open this page from the [compiler window](#compiler-window) by clicking on the **Compiler Settings** button:

![](assets/en/Project/compilerWin6.png)


### Opciones de compilación

This area groups the generic options used during the compilation process.

#### Generar el archivo de símbolos

Used to generate the error file (see [error file](#symbol-file)) at the time of syntax checking. Used to generate the symbol file (see [symbol file](#symbol-file)).

#### Generar archivo de errores

Used to generate the error file (see [error file](#symbol-file)) at the time of syntax checking. The error file is created in the [Logs folder](Project/architecture.md#logs) of the project with the name `ProjectName_errors.xml`.


#### Ruta de compilación

Used to set the number of passes (code parsing) performed by the compiler and thus the duration of compilation.

- **Type the variables**: Passes by all the stages that make compilation possible.
- **Process and interprocess variables are typed**: The pass for typing process and interprocess variables is not carried out. This option can be used when you have already carried out the typing of all your process and interprocess variables either yourself or using the function for automatic generation of compiler methods.
- **All variables are typed**: The pass for typing local, process and interprocess variables is not carried out. Use this option when you are certain that all the process, interprocess and local variables have been clearly typed.

#### Objetivo de compilación

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v19     | Añadidos       |
</details>

This setting allows you to select the processor family for which your 4D project must be natively compiled. El compilador 4D puede generar código nativo para dos familias de procesadores:

- Los procesadores **Intel/AMD** (todas las máquinas),
- los procesadores **Apple Silicon**.

Se proponen dos opciones de objetivo. The result depends on the processor of the machine on which 4D is running.

| *Option*                                               | *en Windows Intel/AMD*                                                                    | *macOS Intel*                                                                               | *macOS Silicon*                                                                             |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Todos los procesadores (Intel/AMD y Apple Silicon)** | Code for Intel/AMD<br>*It is not possible to produce Apple Silicon code on Windows* | Code for Apple Silicon + Code for Intel/AMD<br>*Two compiled codes will be available* | Code for Apple Silicon + Code for Intel/AMD<br>*Two compiled codes will be available* |
| **Mi procesador (procesador)**                         | Código para Intel/AMD                                                                     | Código para Intel/AMD                                                                       | Código para Apple Silicon                                                                   |

> Apple Silicon compiler target requires that the **Clang** application be installed on your machine. Clang viene con la última versión de Xcode. See the [Silicon compiler requirements](#requirements) for more information.

### Digitación por defecto

Use this area to set the default type for ambiguous database objects.

- **Numeric**: Used to force numeric typing in an unambiguous manner, either in real or longint. This will not override the directives you may have set in your project. Puede optimizar el funcionamiento de su base de datos eligiendo el tipo Longint.
- **Button**: Used to force button typing in an unambiguous manner, either in real or longint. This will not override the directives you may have set in your project. This type applies to buttons as well as check boxes, picture buttons, button grids, radio buttons, picture pop-up menus and drop-down lists.

### Métodos Compilador para...

This area lets you rename the Compiler methods that are generated automatically by the compiler when you click [Generate Typing](#generate-typing).

Up to 5 compiler methods may be generated; a compiler method is only generated if the project contains the following items:

- **Variables**: Groups together process variable declarations;
- **Interprocess Variables**: Groups together interprocess variable declarations;
- **Arrays**: Groups together process array declarations;
- **Interprocess Arrays**: Groups together interprocess array declarations;
- **Methods**: Groups together method parameter declarations (for instance, `C_LONGINT(mymethod;$1;$2)`).

You can rename each of these methods in the corresponding areas, but they will always be preceded by the label `Compiler_` (non-modifiable). The name of each method (prefix included) must be no longer than 31 characters. It must also be unique and comply with [4D rules for naming methods](Concepts/identifiers.md#project-methods).


## Herramientas de compilación

### Archivo Symbol

If you check the [**Generate the symbol file**](#generate-the-symbol-file) option in the compiler settings, a symbol file called `ProjectName_symbols.txt` is created in the [Logs folder](Project/architecture.md#logs) of the project during compilation. Está dividido en varias partes:

#### Lista de las variables proceso e interproceso

Estas dos listas contienen cuatro columnas:

- Names of process and interprocess variables and arrays used in your project. Estas variables están listadas en orden alfabético.
- Tipo de la variable. Types are set by compiler directive commands or are determined by the compiler based on the use of the variable. If the type of a variable cannot be determined, the column is empty.
- Número de dimensiones si la variable es un array.
- Reference to the context in which the compiler established the type of the variable. If the variable is used in several contexts, the context mentioned is the one used by the compiler to determine its type.
    - If the variable was found in a database method, the database method name is given, preceded by (M)*.
    - If the variable was found in a project method, the method is identified as it has been defined in 4D, preceded by (M).
    - If the variable was found in a trigger, the table name is given, preceded by (TM).
    - If the variable was found in a form method, the form name is given, preceded by the table name and (FM).
    - If the variable was found in an object method, the object method’s name is given, preceded by the form name, table name, and by (OM).
    - If the variable is an object in a form and does not appear in any project, form, object method, or trigger, the name of the form in which it appears is given, preceded by (F). At the end of each list, you can find the sizes of the process and interprocess variables in bytes.

> When compiling, the compiler cannot determine in which process a given process variable is used. Una variable proceso puede tener un valor diferente en cada proceso. Consequently, all process variables are systematically duplicated as each new process is launched: it is thus advisable to watch out for the amount of memory that they will take up. Also, keep in mind that the space for process variables is not related to the stack size for the process.

#### Lista de las variables locales

The list of local variables is sorted by database method, project method, trigger, form method, and object method, in the same order as in 4D.

Esta lista está dividida en tres columnas:

- la lista de las variables locales utilizadas en el método;
- tipo de la variable;
- número de dimensiones si la variable es un array.

#### Lista completa de los métodos

A complete list of your database and project methods is given at the end of the file with:

- su tipo (procedimiento o función que devuelve un valor)
- los tipos de datos de sus parámetros y del resultado devuelto
- el número de llamadas
- la propiedad Thread Safe o Thread Unsafe.

Esta información aparece así:

```
Procedure or Function <Method name>(parameter data types):
result data type, number of calls, Thread Safe or Thread Unsafe
```

### Archivo de errores

You can choose whether or not to generate an error file during compilation using the [**Generate error file**](#generate-error-file) option in the compiler settings. The error file is automatically named `projectName_errors.xml` and is placed in the [Logs folder](Project/architecture.md#logs) of the project.

Although the errors can be accessed directly via the [compiler window](#compile), it can be useful to have an error file that can be transmitted from one machine to another. The error file is generated in XML format in order to facilitate automatic parsing of its contents. También permite la creación de interfaces personalizadas de visualización de errores.

The length of the error file depends on the number of errors and warnings issued by the compiler.

La estructura del archivo de errores es la siguiente:

- At the top of the file is the list of errors and warnings, sorted by method and in their order of creation in 4D.
- In the ***General errors*** section, all the typing impossibilities and identity ambiguities are grouped together. Estos errores y advertencias se listan utilizando el siguiente formato:
    - el número de línea en el método (0 indica errores generales)
    - warning attribute indicating whether the detected anomaly is a warning (warning="true") or an error (warning="false")
    - diagnóstico que describe el error

If your project does not have any general errors, the file will not have a *General errors* section.

Un archivo de error puede contener tres tipos de mensajes:

- **Errors linked to a specific line**: these errors are displayed in context — the line in which they were found — with an explanation. The compiler reports this type of error when it encounters an expression in which it sees an inconsistency related to data type or syntax. In the compiler window, double–click on each error detected in order to open the method concerned directly in the 4D Method editor, with the line containing the error highlighted.

- **General errors**: These are errors that make it impossible to compile the project. Hay dos casos en los que el compilador informa de un error general:
    - No se ha podido determinar el tipo de datos de una variable proceso.
    - Dos tipos diferentes de objetos tienen el mismo nombre.

General errors are so named because they cannot be linked to any specific method. In the first case, the compiler could not perform a specified typing anywhere in the project. In the second, it was unable to decide whether to associate a given name with one object rather than with another.

- **Avisos**: los avisos no son errores. They do not prevent the project from being compiled, but simply point out potential code errors. En la ventana del compilador, las advertencias aparecen en itálica. Double-click on each warning to open the method concerned directly in the 4D Method editor, with the line containing the warning highlighted.




### Control de ejecución

The code generated by the 4D compiler automatically checks that every access to an array element or a character reference is done within the actual range of array elements or string characters. Los accesos fuera de rango provocarán errores durante la ejecución.

In some cases, you might prefer range checking not to apply to certain parts of the code that are considered to be reliable. More particularly, in the case of loops that are repeated a great number of times, and when running the compiled database on older machines, range checking can significantly slow down processing. If you are absolutely certain that the code concerned is reliable and cannot cause system errors, you can disable range checking locally.

To do this, you must surround the code to be excluded from range checking with the special comments `//%R-` and `//%R+`. The `//%R-` comment disables range checking and `//%R+` enables it again:

```4d
  // %R-   to disable range checking

 ... //Place the code to be excluded from range checking here

  // %R+   to enable range checking again for the rest
```

## Acerca de los compiladores

4D incluye dos compiladores:

- un compilador "clásico", utilizado para compilar código nativo para los procesadores Intel/AMD;
- a Silicon compiler, used to compile native code for Apple Silicon processors.

The classic compiler can be used on any platform, while the Silicon compiler can only be used on a Mac machine:

|             | Compilar para Windows | Compilación para Intel Mac | Compilación para Mac Silicon |
| ----------- |:---------------------:|:--------------------------:|:----------------------------:|
| En Windows  |       &#10003;        |          &#10003;          |           &#10007;           |
| Intel Mac   |       &#10003;        |          &#10003;          |           &#10003;           |
| Silicon Mac |       &#10003;        |          &#10003;          |           &#10003;           |


Ambos compiladores están integrados en 4D. The appropriate compiler is automatically selected depending on the [compilation target](#compilation-target) option.



### Compilador clásico

The classic compiler generates native compiled code for Intel/AMD processors on any machines. No requiere ninguna configuración específica.

Resulting compiled code is stored in the [DerivedData](architecture.md#deriveddata) folder of the project.


### Compilador Silicon

The Silicon compiler generates native compiled code for Apple Silicon processors, such as *Apple M1*.

Resulting compiled code is stored in the [Libraries](architecture.md#libraries) folder of the project.


#### Requisitos

- **Apple machine**: The Silicon compiler can only be run from an Apple machine.
- **4D Project architecture**: The Silicon compiler is only available for 4D developments using [project architecture](architecture.md).
- **Xcode or Developer Tools**: The Silicon compiler calls the **Clang** open-source macOS compiler to compile the project from C++ code at the [second step](#incremental-compiler) of compilation. **Xcode or Developer Tools**: The Silicon compiler calls the **Clang** open-source macOS compiler to compile the project from C++ code at the [second step](#incremental-compiler) of compilation.
    - **If you already have** Xcode or Developer Tools installed on your computer, you only need to make sure that its version is compliant with 4D requirements.
    - **If you do not have** any of these tools installed on your computer, you will need to download one of them from the Apple Developer web site.

> We recommend to install **Xcode**, which is quite simple to install. You can decide to install **Developer Tools** which is more compact, however its installation is a little more complex.

In any cases, the 4D Silicon compiler will warn you if your configuration does not comply with its requirements.


#### Compilador incremental

El compilador Silicon es incremental, lo que significa que:

- During the very first compilation, **all 4D methods** are compiled. Este paso podría tomar un cierto tiempo. Sin embargo, sólo ocurre una vez.
- During all subsequent compilations, only **new or modified methods** are processed, thus reducing drastically the compilation time. 