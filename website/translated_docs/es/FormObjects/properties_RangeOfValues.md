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

## Lista de excluidos

Permite definir una lista cuyos valores no pueden introducirse en el objeto. Si se introduce un valor excluido, no se acepta y se muestra un mensaje de error.
> Si una lista especificada es jerárquica, sólo se tienen en cuenta los elementos del primer nivel.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles                |
| ------------ | -------------- | ------------------------------- |
| excludedList | lista          | Una lista de valores a excluir. |

#### Objetos soportados

[Combo Box](comboBox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns) - [Entrada](input_overview.md)



---

## Lista requerida

Restringe las entradas válidas a los elementos de la lista. Por ejemplo, es posible que desee utilizar una lista obligatoria para los títulos de los puestos de trabajo, de modo que las entradas válidas se limiten a los títulos que han sido aprobados por la dirección.

La creación de una lista obligatoria no muestra automáticamente la lista cuando se selecciona el campo. Si desea mostrar la lista requerida, asigne la misma lista a la propiedad [Lista de opciones](properties_DataSource.md#choice-list). Sin embargo, a diferencia de la propiedad [Lista de selección](properties_DataSource.md#choice-list), cuando se define una lista requerida, ya no es posible la introducción mediante el teclado, sólo se permite la selección de un valor de la lista mediante el menú emergente. Si se definen diferentes listas utilizando las propiedades [Lista de selección](properties_DataSource.md#choice-list) y Lista requerida, la propiedad Lista requerida tiene prioridad.
> Si una lista especificada es jerárquica, sólo se tienen en cuenta los elementos del primer nivel.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles                   |
| ------------ | -------------- | ---------------------------------- |
| requiredList | lista          | Una lista de valores obligatorios. |

#### Objetos soportados

[Combo Box](comboBox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns) - [Entrada](input_overview.md)





