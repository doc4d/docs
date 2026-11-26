---
id: object-get-flyout-mode
title: OBJECT Get flyout mode
slug: /commands/object-get-flyout-mode
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get flyout mode.Syntax-->**OBJECT Get flyout mode** ( * ; *objeto* : Text ) : Text<br/>**OBJECT Get flyout mode** ( *objeto* : Variable, Field ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get flyout mode.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Si se especifica, *objeto* es un nombre de objeto de formulario |
| objeto | Text, Variable, Field | &#8594; | Nombre del objeto lista desplegable (si se especifica *) o <br/>Variable o campo (si se omite *) |
| Resultado | Text | &#8592; | Modo flyout actual |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|21 R6|Creado|

</details>
</div>

## Descripción

<!--REF #_command_.OBJECT Get flyout mode.Summary-->**OBJECT Get flyout mode** devuelve el modo flyout actual de un objeto lista desplegable.<!-- END REF--> 

Si especifica el parámetro opcional *\**, indica un nombre de objeto (una cadena) en *objeto*. Si omite el parámetro opcional *\**, indica un campo o una variable en *objeto*. En este caso, se pasa una referencia de campo o de variable de formulario.

El modo flyout actual de una lista desplegable puede haber sido [definido a nivel del formulario](../../FormObjects/properties_Display.md#flyout-mode) en la Lista de propiedades, o para el proceso actual mediante el comando [`OBJECT SET FLYOUT MODE`](../commands/object-set-flyout-mode).

Se pueden devolver los siguientes valores:

| Constante      |  Valor | Comentario   |
| ------------- | ------ | ------- |
| `Flyout automatic`|"automatic"|pop-up o pull-down, según el sistema operativo y la fuente de datos (heredado)|
| `Flyout pop up` |"popup"|modo flyout pop-up|
| `Flyout pull down`|"pulldown"|modo flyout tipo menú|

Ver [Modo flyout](../../FormObjects/properties_Display.md#flyout-mode) para más información.  

## Ejemplo

```4d
var $mode : Text
$mode:=OBJECT Get flyout mode(*; "myDrop")
```

## Ver también 

[OBJECT SET FLYOUT MODE](../commands/object-set-flyout-mode)  
[Lista desplegable](../FormObjects/dropdownList_Overview.md)  
[Modo flyout](../FormObjects/properties_Display.md#flyout-mode)

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1870 |
| Hilo seguro | no |
