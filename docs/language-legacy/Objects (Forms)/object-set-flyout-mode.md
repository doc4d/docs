---
id: object-set-flyout-mode
title: OBJECT SET FLYOUT MODE
slug: /commands/object-set-flyout-mode
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FLYOUT MODE.Syntax-->**OBJECT SET FLYOUT MODE** ( * ; *object* : Text ; *mode* : Text )<br/>**OBJECT SET FLYOUT MODE** ( *object* : Variable, Field ; *mode* : Text )<!-- END REF-->
<!--REF #_command_.OBJECT SET FLYOUT MODE.Params-->
<div class="no-index">

## Parameters

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594; | If specified, *objectName* is a form object name |
| object | Text, Variable, Field | &#8594;  | Ddrop-down list object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| mode | Text | &#8594; | Flyout mode: "automatic", "popup", or "pulldown" |

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

<!--REF #_command_.OBJECT SET FLYOUT MODE.Summary-->**OBJECT SET FLYOUT MODE** sets the flyout display mode of a drop-down list object at runtime.<!-- END REF-->

:::note

On Windows, this command requires that the [FluentUI rendering mode](../../FormEditor/forms.md#fluent-ui-rendering) is used. 

:::


In *mode* you can use one of the following constants:

| Constant      |  Value | Comment   |
| ------------- | ------ | ------- |
| `Flyout automatic`|"automatic"|pop-up or pulldown, depending on the OS and data source (legacy)|
| `Flyout pop up` |"popup"|pop-up flyout mode|
| `Flyout pull down`|"pulldown"|menu-like flyout mode|

See [Flyout mode](../../FormObjects/properties_Display.md#flyout-mode) for more information on the display modes. 

If you specify the optional *\** parameter, you indicate an object name (a string) in *object*. If you omit the optional \* parameter, you indicate a field or a variable in *object*. In this case, you specify a field or form variable reference.

When called with a supported value, the object appearance is updated immediately; no form refresh is required.

If *mode* is any other text value, no error is raised, the value is ignored, and the current flyout mode remains unchanged.

## Example

```4d
// Force pull-down mode
OBJECT SET FLYOUT MODE(*; "myDrop"; Flyout pull down)

// Later, switch back to legacy automatic behavior
OBJECT SET FLYOUT MODE(*; "myDrop"; Flyout automatic)
```

## See also

[OBJECT Get flyout mode](../commands/object-get-flyout-mode)  
[Drop-down List](../FormObjects/dropdownList_Overview.md)  
[Flyout mode](../FormObjects/properties_Display.md#flyout-mode)

## Properties

|  |  |
| --- | --- |
| Command number | 1869 |
| Thread safe | no |