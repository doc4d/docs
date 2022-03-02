---
id: propertiesRangeOfValues
title: Rango de valores
---

---
## Valor por defecto

Puede asignar un valor por defecto para ser introducido en un objeto de entrada. Esta propiedad es útil, por ejemplo, cuando la entrada [fuente de datos](properties_Object.md#variable-or-expression) es un campo: el valor por defecto se introduce cuando se muestra un nuevo registro por primera vez. Puede cambiar el valor a menos que el área de entrada se haya definido como [no editable](properties_Entry.md#enterable).

El valor por defecto sólo puede utilizarse si el [tipo de fuente de datos](properties_Object.md#expression-type) es:
- texto/cadena
- number/integer
- fecha
- time
- booleano

4D ofrece sellos para generar valores por defecto para la fecha, la hora y el número de secuencia. La fecha y la hora se toman de la fecha y la hora del sistema. 4D genera automáticamente los números de secuencia necesarios. La siguiente tabla muestra el sello a utilizar para generar valores por defecto de forma automática:

| Sello | Significado         |
| ----- | ------------------- |
| #D    | Fecha actual        |
| #H    | Hora actual         |
| #N    | Número de secuencia |

Puede utilizar un número de secuencia para crear un número único para cada registro de la tabla para el archivo de datos actual. Un número de secuencia es un longint que se genera para cada nuevo registro. The numbers start at one (1) and increase incrementally by one (1). A sequence number is never repeated even if the record it is assigned to is deleted from the table. Each table has its own internal counter of sequence numbers. For more information, refer to the [Autoincrement](https://doc.4d.com/4Dv17R6/4D/17-R6/Field-properties.300-4354738.en.html#976029) paragraph.

> Do not make confusion between this property and the "[default values](properties_DataSource.md#default-list-of-values)" property that allows to fill a list box column with static values.

#### Gramática JSON

| Nombre       | Tipos de datos                      | Valores posibles                           |
| ------------ | ----------------------------------- | ------------------------------------------ |
| defaultValue | string, number, date, time, boolean | Any value and/or a stamp: "#D", "#H", "#N" |

#### Objetos soportados

[Entrada](input_overview.md)



---

## Excluded List

Allows setting a list whose values cannot be entered in the object. Si se introduce un valor excluido, no se acepta y se muestra un mensaje de error.
> If a specified list is hierarchical, only the items of the first level are taken into account.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles                 |
| ------------ | -------------- | -------------------------------- |
| excludedList | lista          | A list of values to be excluded. |

#### Objetos soportados

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)



---

## Required List

Restricts the valid entries to the items on the list. For example, you may want to use a required list for job titles so that valid entries are limited to titles that have been approved by management.

Making a list required does not automatically display the list when the field is selected. If you want to display the required list, assign the same list to the [Choice List](properties_DataSource.md#choice-list) property. However, unlike the [Choice List](properties_DataSource.md#choice-list) property, when a required list is defined, keyboard entry is no longer possible, only the selection of a list value using the pop-up menu is allowed. If different lists are defined using the [Choice List](properties_DataSource.md#choice-list) and Required List properties, the Required List property has priority.
> If a specified list is hierarchical, only the items of the first level are taken into account.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles                   |
| ------------ | -------------- | ---------------------------------- |
| requiredList | lista          | Una lista de valores obligatorios. |

#### Objetos soportados

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)





