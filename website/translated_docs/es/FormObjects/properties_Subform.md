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
- Añadir registro: crea un nuevo registro en el subformulario y cambia al modo edición. El registro se creará directamente en la lista si la propiedad [Editable en la lista] está activada. En caso contrario, se creará en modo página, en el [formulario detallado](detail-form) asociado al subformulario.


#### Gramática JSON

| Nombre                       | Tipos de datos | Valores posibles                  |
| ---------------------------- | -------------- | --------------------------------- |
| doubleClickInEmptyAreaAction | cadena         | "addSubrecord" o "" to do nothing |

#### Objetos soportados

[Subformulario](subform_overview.md)

#### Ver también
[Doble clic en línea](#double-click-on-row)

---
## Doble clic en línea

`Sub-formularios lista`

Define la acción a realizar cuando un usuario haga doble clic en una línea en un subformulario lista. The available options are:

*   **Do nothing** (default): Double-clicking a row does not trigger any automatic action.
*   **Editar registro**: al hacer doble clic en una línea se muestra el registro correspondiente en el [formulario detallado](#detail-form) definido para el subformulario lista. The record is opened in read-write mode so it can be modified.
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
[Doble clic en línea vacía](#double-click-on-empty-row)

---
## Editable en lista

Cuando un subformulario lista tiene esta propiedad activada, el usuario puede modificar los datos del registro directamente en la lista, sin tener que utilizar el [formulario detallado asociado](#detail-form).

> Para ello, basta con hacer dos clics en el campo a modificar para que pase al modo edición (asegúrese de dejar suficiente tiempo entre los dos clics para no generar un doble clic).


#### Gramática JSON

| Nombre          | Tipos de datos | Valores posibles |
| --------------- | -------------- | ---------------- |
| enterableInList | booleano       | true, false      |


#### Objetos soportados

[Subformulario](subform_overview.md)


---
## Formulario listado

Esta propiedad se utiliza para declarar el formulario listado que se utilizará en el subformulario. Un subformulario lista le permite introducir, ver y modificar datos en otras tablas.

Los subformularios de lista pueden utilizarse para la entrada de datos de dos maneras: el usuario puede introducir los datos directamente en el subformulario, o introducirlos en un [formulario de entrada](#detail-form). En esta configuración, el formulario utilizado como subformulario se denomina formulario Lista. El formulario de entrada se denomina formulario detallado.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles                                                                                                                                                 |
| -------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| listForm | cadena         | Nombre (cadena) de la tabla o formulario proyecto, una ruta POSIX (cadena) a un archivo .json que describa el formulario, o un objeto que describa el formulario |

#### Objetos soportados

[Subformulario](subform_overview.md)



---
## Source

Especifica la tabla a la que pertenece el subformulario Lista (si la hay).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                             |
| ------ | -------------- | -------------------------------------------- |
| tabla  | cadena         | Nombre de la tabla 4D, o "" si no hay tabla. |

#### Objetos soportados

[Subformulario](subform_overview.md)

---
## Modo de selección

Designates the option for allowing users to select rows:
- **None**: Rows cannot be selected if this mode is chosen. Hacer clic en la lista no tendrá ningún efecto a menos que la opción [Editable en lista](subform_overview.md#enterable-in-list) esté activada. The navigation keys only cause the list to scroll; the `On Selection Change` form event is not generated.
- **Single**: One row at a time can be selected in this mode. Clicking on a row will select it. A **Ctrl+click** (Windows) or **Command+click** (macOS) on a row toggles its state (between selected or not).  
  The Up and Down arrow keys select the previous/next row in the list. The other navigation keys scroll the list. The `On Selection Change` form event is generated every time the current row is changed.
- **Multiple**: Several rows can be selected simultaneously in this mode.
    - Los subregistros seleccionados son devueltos por el comando `GET HIGHLIGHTED RECORDS`.
    - Al hacer clic en el registro se selecciona, pero no se modifica el registro actual.
    - Un **Ctrl+clic** (Windows) o **Comando+clic** (macOS) en un registro cambia su estado (entre seleccionado o no). Las teclas de flecha arriba y abajo seleccionan el registro anterior/siguiente en la lista. The other navigation keys scroll the list. El evento de formulario `On Selection Change` se genera cada vez que el registro seleccionado se modifica.


#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles             |
| ------------- | -------------- | ---------------------------- |
| selectionMode | cadena         | "multiple", "single", "none" |

#### Objetos soportados

[Subformulario](subform_overview.md)
