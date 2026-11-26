---
id: object-set-flyout-mode
title: OBJECT SET FLYOUT MODE
slug: /commands/object-set-flyout-mode
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FLYOUT MODE.Syntax-->**OBJECT SET FLYOUT MODE** ( * ; *objeto* : Text ; *modo* : Text )<br/>**OBJECT SET FLYOUT MODE** ( *objeto* : Variable, Field ; *modo* : Text )<!-- END REF-->
<!--REF #_command_.OBJECT SET FLYOUT MODE.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Si se especifica, *objeto* es un nombre de objeto de formulario |
| objeto | Text, Variable, Field | &#8594; | Nombre del objeto lista desplegable (si se especifica *) o <br/>Variable o campo (si se omite *) |
| modo | Text | &#8594; | Modo flyout: "automatic", "popup" o "pulldown" |

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

<!--REF #_command_.OBJECT SET FLYOUT MODE.Summary-->**OBJECT SET FLYOUT MODE** define el modo de visualización flyout de un objeto lista desplegable en tiempo de ejecución.<!-- END REF-->

:::note

En Windows, este comando requiere que se utilice el [modo de renderizado FluentUI](../../FormEditor/forms.md#fluent-ui-rendering).

:::

En *modo* puede utilizar una de las siguientes constantes:

| Constante      |  Valor | Comentario   |
| ------------- | ------ | ------- |
| `Flyout automatic`|"automatic"|pop-up o pull-down, según el sistema operativo y la fuente de datos (heredado)|
| `Flyout pop up` |"popup"|modo flyout pop-up|
| `Flyout pull down`|"pulldown"|modo flyout tipo menú|

Ver [Modo flyout](../../FormObjects/properties_Display.md#flyout-mode) para más información sobre los modos de visualización. 

Si especifica el parámetro opcional *\**, indica un nombre de objeto (una cadena) en *objeto*. Si omite el parámetro opcional *\**, indica un campo o una variable en *objeto*. En este caso, se pasa una referencia de campo o de variable de formulario.

Cuando se llama con un valor soportado, la apariencia del objeto se actualiza inmediatamente; no es necesario refrescar el formulario.

Si *modo* contiene cualquier otro valor texto, no se genera ningún error, el valor se ignora y el modo flyout actual permanece sin cambios.

## Ejemplo

```4d
// Forzar el modo pull-down
OBJECT SET FLYOUT MODE(*; "myDrop"; Flyout pull down)

// Más tarde, volver al comportamiento automático heredado
OBJECT SET FLYOUT MODE(*; "myDrop"; Flyout automatic)
```

## Ver también

[OBJECT Get flyout mode](../commands/object-get-flyout-mode)  
[Lista desplegable](../FormObjects/dropdownList_Overview.md)  
[Modo flyout](../FormObjects/properties_Display.md#flyout-mode)

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1869 |
| Hilo seguro | no |
