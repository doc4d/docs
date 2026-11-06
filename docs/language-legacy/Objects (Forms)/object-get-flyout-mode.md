---
id: object-get-flyout-mode
title: OBJECT Get flyout mode
slug: /commands/object-get-flyout-mode
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get flyout mode.Syntax-->**OBJECT Get flyout mode** ( * ; *object* : Text ) : Text<br/>**OBJECT Get flyout mode** ( *object* : Variable, Field ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get flyout mode.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, *objectName* is a form object name |
| object | Text, Variable, Field | &#8594;  | Ddrop-down list object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| Function result | Text | <- | Current flyout mode |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R6|Created|

</details>
</div>

## Description

<!--REF #_command_.OBJECT Get flyout mode.Summary-->**OBJECT Get flyout mode** returns the current flyout mode of a drop-down list object.<!-- END REF--> 

If you specify the optional *\** parameter, you indicate an object name (a string) in *object*. If you omit the optional \* parameter, you indicate a field or a variable in *object*. In this case, you specify a field or form variable reference.


The current flyout mode of a drop-down list can have been be [set at the form level](../../FormObjects/properties_Display.md#flyout-mode) in the Property list, or for the current process using the [`OBJECT SET FLYOUT MODE`](../commands/object-set-flyout-mode) command.

The following values can be returned:

| Constant      |  Value | Comment   |
| ------------- | ------ | ------- |
| `Flyout automatic`|"automatic"|pop-up or pulldown, depending on the OS and data source (legacy)|
| `Flyout pop up` |"popup"|pop-up flyout mode|
| `Flyout pull down`|"pulldown"|menu-like flyout mode|


See [Flyout mode](../../FormObjects/properties_Display.md#flyout-mode) for more information.  


## Example

```4d
var $mode : Text
$mode:=OBJECT Get flyout mode(*; "myDrop")
```

## See also 

[OBJECT SET FLYOUT MODE](../commands/object-set-flyout-mode)  
[Drop-down List](../FormObjects/dropdownList_Overview.md)  
[Flyout mode](../FormObjects/properties_Display.md#flyout-mode)


## Properties

|  |  |
| --- | --- |
| Command number | 1870 |
| Thread safe | no |


