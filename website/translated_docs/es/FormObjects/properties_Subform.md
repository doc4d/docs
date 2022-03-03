---
id: propertiesSubform
title: Subformulario
---

---
## Autorizar la eliminación

Especifica si el usuario puede eliminar subregistros en un subformulario listado.

#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles                |
| --------------- | -------------- | ------------------------------- |
| deletableInList | booleano       | true, false (por defecto: true) |

#### Objetos soportados

[Subformulario](subform_overview.md)


---
## Formulario detallado

Esta propiedad se utiliza para declarar el formulario detallado que se utilizará en el subformulario. Puede ser:

- un widget, es decir, un subformulario de tipo página dotado de funciones específicas. En este caso, las propiedades [subformulario de lista](#list-form) y [Fuente](#source) deben estar vacías o no estar presentes.   
  Se puede seleccionar el nombre de un formulario de componente cuando se publica en el componente.
> Puede generar [componentes](Concepts/components.md) que den funcionalidades adicionales a través de subformularios.

- el formulario detallado a asociar al [subformulario listado](#formulario-de-lista). El formulario detallado puede utilizarse para introducir o ver los subregistros. Generalmente contiene más información que el subformulario lista. Naturalmente, el formulario detallado debe pertenecer a la misma tabla que el subformulario. Normalmente se utiliza un formulario de salida como formulario lista y un formulario de entrada como formulario detallado. Si no especifica el formulario a utilizar para la entrada de la página completa, 4D utiliza automáticamente el formato de entrada por defecto de la tabla.


#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                                                                                                                 |
| ---------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| detailForm | cadena         | Nombre (cadena) de la tabla o formulario proyecto, una ruta POSIX (cadena) a un archivo .json que describa el formulario, o un objeto que describa el formulario |

#### Objetos soportados

[Subformulario](subform_overview.md)

---
## Doble clic en línea vacía

Acción a realizar en caso de doble clic en una línea vacía de un subformulario listado. Las siguientes opciones están disponibles:
- No hacer nada: ignora el doble clic.
- Añadir registro: crea un nuevo registro en el subformulario y cambia al modo edición. El registro se creará directamente en la lista si la propiedad [Editable en la lista] está activada. Otherwise, it will be created in page mode, in the [detail form](detail-form) associated with the subform.


#### Gramática JSON

| Nombre                       | Tipos de datos | Valores posibles                  |
| ---------------------------- | -------------- | --------------------------------- |
| doubleClickInEmptyAreaAction | cadena         | "addSubrecord" o "" to do nothing |

#### Objetos soportados

[Subformulario](subform_overview.md)

#### Ver también
[Double click on row](#double-click-on-row)

---
## Doble clic en línea

`Sub-formularios lista`

Sets the action to be performed when a user double-clicks on a row in a list subform. The available options are:

*   **Do nothing** (default): Double-clicking a row does not trigger any automatic action.
*   **Edit Record**: Double-clicking a row displays the corresponding record in the [detail form defined for the list subform](#detail-form). The record is opened in read-write mode so it can be modified.
*   **Display Record**: Identical to the previous action, except that the record is opened in read-only mode so it cannot be modified.

Regardless of the action selected/chosen, the `On Double clicked` form event is generated.

For the last two actions, the On `Open Detail` form event is also generated. The `On Close Detail` is then generated when a record displayed in the detail form associated with the list box is about to be closed (regardless of whether or not the record was modified).

#### Gramática JSON

| Nombre                 | Tipos de datos | Valores posibles                    |
| ---------------------- | -------------- | ----------------------------------- |
| doubleClickInRowAction | cadena         | "editSubrecord", "displaySubrecord" |

#### Objetos soportados

[Subformulario](subform_overview.md)


#### Ver también
[Double click on empty row](#double-click-on-empty-row)

---
## Editable en lista

When a list subform has this property enabled, the user can modify record data directly in the list, without having to use the [associated detail form](#detail-form).

> To do this, simply click twice on the field to be modified in order to switch it to editing mode (make sure to leave enough time between the two clicks so as not to generate a double-click).


#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles |
| --------------- | -------------- | ---------------- |
| enterableInList | booleano       | true, false      |


#### Objetos soportados

[Subformulario](subform_overview.md)


---
## List Form

You use this property to declare the list form to use in the subform. A list subform lets you enter, view, and modify data in other tables.

List subforms can be used for data entry in two ways: the user can enter data directly in the subform, or enter it in an [input form](#detail-form). In this configuration, the form used as the subform is referred to as the List form. The input form is referred to as the Detail form.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles                                                                                                                                                 |
| -------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| listForm | cadena         | Nombre (cadena) de la tabla o formulario proyecto, una ruta POSIX (cadena) a un archivo .json que describa el formulario, o un objeto que describa el formulario |

#### Objetos soportados

[Subformulario](subform_overview.md)



---
## Source

Specifies the table that the list subform belongs to (if any).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                  |
| ------ | -------------- | --------------------------------- |
| tabla  | cadena         | 4D table name, or "" if no table. |

#### Objetos soportados

[Subformulario](subform_overview.md)

---
## Modo de selección

Designates the option for allowing users to select rows:
- **None**: Rows cannot be selected if this mode is chosen. Clicking on the list will have no effect unless the [Enterable in list](subform_overview.md#enterable-in-list) option is enabled. The navigation keys only cause the list to scroll; the `On Selection Change` form event is not generated.
- **Single**: One row at a time can be selected in this mode. Clicking on a row will select it. A **Ctrl+click** (Windows) or **Command+click** (macOS) on a row toggles its state (between selected or not).  
  The Up and Down arrow keys select the previous/next row in the list. The other navigation keys scroll the list. The `On Selection Change` form event is generated every time the current row is changed.
- **Multiple**: Several rows can be selected simultaneously in this mode.
    - The selected subrecords are returned by the `GET HIGHLIGHTED RECORDS` command.
    - Clicking on the record will select it, but it does not modify the current record.
    - A **Ctrl+click** (Windows) or **Command+click** (macOS) on a record toggles its state (between selected or not). The Up and Down arrow keys select the previous/next record in the list. The other navigation keys scroll the list. The `On Selection Change` form event is generated every time the selected record is changed.


#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles             |
| ------------- | -------------- | ---------------------------- |
| selectionMode | cadena         | "multiple", "single", "none" |

#### Objetos soportados

[Subformulario](subform_overview.md)
