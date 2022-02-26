---
id: subformOverview
title: Subformulario
---


Un subformulario es un formulario incluido en otro formulario.


## Terminología

Con el fin de definir claramente los conceptos implementados con los subformularios, aquí hay algunas definiciones para ciertos términos utilizados:

*   **Subformulario**: un formulario destinado a ser incluido en otro formulario, llamado a su vez formulario padre.
*   **Formulario padre**: un formulario que contiene uno o más subformularios.
*   **Contenedor de subformulario**: un objeto incluido en el formulario padre, que muestra una instancia del subformulario.
*   **Instancia de subformulario**: la representación de un subformulario en un formulario padre. Este concepto es importante porque es posible mostrar varias instancias del mismo subformulario en un formulario padre.
*   **Formulario listado**: instancia de subformulario mostrada como una lista.
*   **Formulario detallado**: formulario de entrada tipo página asociado a un subformulario tipo lista al que se accede haciendo doble clic en la lista.


## Sub-formularios en lista

A list subform lets you enter, view, and modify data in other tables. Normalmente se utilizan subformularios lista en bases de datos en las que se han establecido relaciones Uno a Muchos. Un subformulario lista en un formulario de una tabla Uno relacionada le permite ver, introducir y modificar datos en una tabla Muchos relacionada. Puede tener varios subformularios procedentes de diferentes tablas en el mismo formulario. Sin embargo, no es posible colocar dos subformularios que pertenecen a la misma tabla en la misma página de un formulario.

Por ejemplo, una base de datos del gestor de contactos puede utilizar un subformulario lista para mostrar todos los números de teléfono de un contacto. Aunque los números de teléfono aparecen en la pantalla Contactos, la información se almacena realmente en una tabla relacionada. Utilizando una relación de Uno a Muchos, este diseño de base de datos facilita el almacenamiento de un número ilimitado de números de teléfono por contacto. Con las relaciones automáticas, se puede soportar la entrada de datos directamente en la tabla Muchos relacionada sin programar.

Aunque los subformularios lista suelen estar asociados a muchas tablas, una instancia de subformulario puede mostrar los registros de cualquier otra tabla de la base de datos.

También puede permitir que el usuario introduzca datos en el formulario lista. Dependiendo de la configuración del subformulario, el usuario puede mostrar el formulario detallado haciendo doble clic en un subregistro o utilizando los comandos para añadir y editar subregistros.

> 4D ofrece tres acciones estándar para satisfacer las necesidades básicas de gestión de los subregistros: `Edit Subrecord`, `Delete Subrecord` y `Add Subrecord`. Cuando el formulario incluye varias instancias de subformulario, la acción se aplicará al subformulario que tenga el foco.


## Sub-formularios en página

Los subformularios en modo página pueden mostrar los datos del subregistro actual o todo valor pertinente en función del contexto (variables, imágenes, etc.). Una de las principales ventajas de utilizar subformularios página es que pueden incluir funcionalidades avanzadas y pueden interactuar directamente con el formulario padre (widgets). Los subformularios en página también tienen sus propiedades y eventos específicos; puede gestionarlos completamente por programación.

El subformulario en página utiliza el formulario de entrada indicado por la propiedad [Formulario detallado](properties_Subform.md#detail-form). A diferencia de un subformulario en modo lista, el formulario utilizado puede proceder de la misma tabla que el formulario padre. También es posible utilizar un formulario proyecto. Cuando se ejecuta, un subformulario en modo página tiene las mismas características de visualización estándar que un formulario de entrada.

> Los widgets 4D son objetos compuestos predefinidos basados en subformularios página. Se describen detalladamente en un manual aparte, [4D Widgets](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-Widgets.100-4465257.en.html).

### Gestión de la variable vinculada

La [variable](properties_Object.md#variable-or-expression) vinculada a un subformulario página le permite vincular los contextos del formulario padre y del subformulario para dar el toque final de las interfaces sofisticadas. Por ejemplo, imagine un subformulario que represente un reloj dinámico, insertado en un formulario padre que contenga una variable introducible de tipo hora:

![](assets/en/FormObjects/subforms1.png)

Ambos objetos (variable de tiempo y contenedor de subformulario) *tienen el mismo nombre de variable*. En este caso, al abrir el formulario padre, 4D sincroniza ambos valores automáticamente. Si el valor de la variable se define en varias ubicaciones, 4D utiliza el valor que se cargó en último lugar. Aplica el siguiente orden de carga: 1-Métodos objeto del subformulario 2-Método formulario del subformulario 3-Métodos objeto del formulario padre 4-Método formulario padre del formulario padre

Cuando se ejecuta el formulario principal, el desarrollador debe tener cuidado de sincronizar las variables utilizando los eventos formularios apropiados. Pueden darse dos tipos de interacciones: de formulario a subformulario y viceversa.

#### Actualización del contenido del subformulario
Caso 1: se modifica el valor de la variable del formulario padre y esta modificación debe pasarse al subformulario. En nuestro ejemplo, la hora de Paris cambia a 12:15:00, ya sea porque el usuario la ha introducido o porque se ha actualizado dinámicamente (a través del comando `Current time`, por ejemplo).

En este caso, debe utilizar el evento formulario On Bound Variable Change. Este evento debe ser seleccionado en las propiedades del subformulario; se genera en el método formulario del subformulario.

![](assets/en/FormObjects/subforms2.png)

Se genera el evento formulario `On Bound Variable Change`:

- en cuanto se asigna un valor a la variable del formulario padre, incluso si se reasigna el mismo valor,
- si el subformulario pertenece a la página formulario actual o a la página 0.

Tenga en cuenta que, como en el ejemplo anterior, es preferible utilizar el comando `OBJECT Get pointer` que devuelve un puntero al contenedor del subformulario en lugar de su variable porque es posible insertar varios subformularios en el mismo formulario padre (por ejemplo, una ventana que muestra diferentes zonas horarias contiene varios relojes). En este caso, sólo un puntero permite saber qué contenedor de subformulario está en el origen del evento.

#### Actualización del contenido del formulario padre

Caso 2: se modifica el contenido del subformulario y esta modificación debe pasar al formulario padre. En nuestro ejemplo, imagine que la interfaz del subformulario permite al usuario mover "manualmente" las agujas del reloj.

En este caso, desde el subformulario, debe asignar el valor del objeto a la variable del contenedor del subformulario padre. Al igual que en el ejemplo anterior, se recomienda utilizar el comando `OBJECT Get pointer` con el selector `Object subform container` que devuelve un puntero al contenedor del subformulario.

Al asignar el valor a la variable se genera el evento formulario `On Data Change` en el método del objeto del contenedor del subformulario padre, que permite realizar todo tipo de acción. El evento debe estar seleccionado en las propiedades del contenedor del subformulario.

![](assets/en/FormObjects/subforms3.png)

> Si mueve "manualmente" las manecillas del reloj, esto también genera el evento de formulario `On Data Change` en el método del objeto de la variable *clockValue* en el subformulario.

### Utilizar el objeto asociado al subformulario

4D vincula automáticamente un objeto (`C_OBJECT`) a cada subformulario. El contenido de este objeto puede ser leído y/o modificado desde el contexto del subformulario, lo que permite compartir valores en un contexto local.

El objeto puede crearse automáticamente o ser la variable del contenedor padre, si se nombra explícitamente y se teclea como Object (ver abajo). En todos los casos, el objeto es devuelto por el comando `Form`, que puede ser llamado directamente al subformulario (utilizando un puntero es inútil). Como los objetos se pasan siempre por referencia, si el usuario modifica el valor de una propiedad en el subformulario, se guardará automáticamente en el propio objeto.

Por ejemplo, en su subformulario, las etiquetas de los campos se almacenan en el objeto vinculado para poder mostrar diferentes lenguajes:

![](assets/en/FormObjects/subforms4.png)

Puede modificar las etiquetas desde el subformulario asignando valores al objeto *InvoiceAddress*:

```4d
 C_OBJECT($lang)
 $lang:=New object
 If(<>lang="fr")
    $lang.CompanyName:="Société :"
    $lang.LastName:="Nom :"
 Else
    $lang.CompanyName:="Company:"
    $lang.LastName:="Name:"
 End if
 InvoiceAddress. Label:=$lang
```

![](assets/en/FormObjects/subforms5.png)

### Programación entre formularios avanzada
La comunicación entre el formulario padre y las instancias del subformulario puede requerir ir más allá del intercambio de un valor a través de la variable asociada. De hecho, es posible que desee actualizar las variables de los subformularios en función de las acciones realizadas en el formulario principal y viceversa. Si utilizamos el ejemplo anterior del subformulario de tipo "reloj dinámico", es posible que queramos definir una o varias horas de alarma para cada reloj.

4D ha implementado los siguientes mecanismos para satisfacer estas necesidades:

- Uso del parámetro "subform" con el comando `OBJECT Get name` para especificar el objeto subformulario y el comando `OBJECT Get pointer`.
- Llamada de un objeto contenedor desde el subformulario utilizando el comando `CALL SUBFORM CONTAINER`,
- Ejecución de un método en el contexto del subformulario mediante el comando `EXECUTE METHOD IN SUBFORM`.


#### Object get pointer and Object get name commands
In addition to the `Object subform container` selector, the `OBJECT Get pointer` command accepts a parameter that indicates in which subform to search for the object whose name is specified in the second parameter. This syntax can only be used when the Object named selector is passed.

For example, the following statement:

```4d
 $ptr:=OBJECT Get pointer(Object named;"MyButton";"MySubForm")
```

... retrieves a pointer to the "MyButton" variable that is located in the "MySubForm" subform object. This syntax can be used to access from the parent form any object found in a subform. Also note the `OBJECT Get name` command which can be used to retrieve the name of the object that has the focus.

#### CALL SUBFORM CONTAINER command

The `CALL SUBFORM CONTAINER` command lets a subform instance send an event to the subform container object, which can then process it in the context of the parent form. The event is received in the container object method. It may be at the origin of any event detected by the subform (click, drag-and-drop, etc.).

The code of the event is unrestricted (for example, 20000 or -100). You can use a code that corresponds to an existing event (for example, 3 for `On Validate`), or use a custom code. In the first case, you can only use events that you have checked in the Property List for subform containers. In the second case, the code must not correspond to any existing form event. It is recommended to use a negative value to be sure that this code will not be used by 4D in future versions.

For more information, refer to the description of the `CALL SUBFORM CONTAINER` command.

#### EXECUTE METHOD IN SUBFORM command
The `EXECUTE METHOD IN SUBFORM` command lets a form or one of its objects request the execution of a method in the context of the subform instance, which gives it access to the subform variables, objects, etc. This method can also receive parameters.

This mechanism is illustrated in the following diagram:

![](assets/en/FormObjects/subforms6.png)

For more information, refer to the description of the `EXECUTE METHOD IN SUBFORM` command.

#### GOTO OBJECT command
The `GOTO OBJECT` command looks for the destination object in the parent form even if it is executed from a subform.



## Propiedades soportadas

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Detail Form](properties_Subform.md#detail-form) - [Double click on empty row](properties_Subform.md#double-click-on-empty-row) - [Double click on row](properties_Subform.md#double-click-on-row) - [Enterable in list](properties_Subform.md#enterable-in-list) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Height](properties_CoordinatesAndSizing.md#height) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [List Form](properties_Subform.md#list-form) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Print Frame](properties_Print.md#print-frame) - [Right](properties_CoordinatesAndSizing.md#right) - [Selection mode](properties_Subform.md#selection-mode) - [Source](properties_Subform.md#source) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 
