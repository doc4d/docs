---
id: vp-set-date-time-value
title: VP SET DATE TIME VALUE
---

<!-- REF #_method_.VP SET DATE TIME VALUE.Syntax -->

**VP SET DATE TIME VALUE** ( _rangeObj_ : Object ; _dateValue_ : Date ; _timeValue_ : Time {; _formatPattern_ : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET DATE TIME VALUE.Params -->

| Parámetros    | Tipo   |    | Descripción          |                  |
| ------------- | ------ | -- | -------------------- | ---------------- |
| rangeObj      | Object | -> | Objeto rango         |                  |
| dateValue     | Fecha  | -> | Valor date a definir |                  |
| timeValue     | Hora   | -> | Valor hora a definir |                  |
| formatPattern | Text   | -> | Formato del valor    | <!-- END REF --> |

#### Descripción

El comando `VP SET DATE TIME VALUE` <!-- REF #_method_.VP SET DATE TIME VALUE.Summary -->asigna un valor especificado de fecha y hora a un rango de celdas designado<!-- END REF -->.

In _rangeObj_, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell.md) or [`VP Column`](vp-column.md)) whose value you want to specify. Si _rangeObj_ incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

El parámetro _dateValue_ indica un valor de fecha que se asignará a _rangeObj_.

El parámetro _timeValue_ indica un valor hora (expresado en segundos) que se asignará al _rangeObj_.

El parámetro opcional _formatPattern_ define un modelo para los parámetros _dateValue_ y _timeValue_. For information on patterns and formatting characters, please refer to the [Date and time formats](../configuring.md#date-and-time-formats) section.

#### Ejemplo

```4d
//Definir el valor de la celda como la fecha y hora actuales
VP SET DATE TIME VALUE(VP Cell("ViewProArea";6;2);Current time;Current date;vk pattern full date time)
 
//Definir el valor de la celda como 18 de diciembre
VP SET DATE TIME VALUE(VP Cell("ViewProArea";3;9);!2024-12-18!;?14:30:10?;vk pattern sortable date time)
```

#### Ver también

[Formato de celdas 4D View Pro](../configuring.md#cell-format)<br/>
[VP SET DATE VALUE](vp-set-date-value.md)<br/>
[VP SET TIME VALUE](vp-set-time-value.md)<br/>
[VP SET VALUE](vp-set-value.md)
