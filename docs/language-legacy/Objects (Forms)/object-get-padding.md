---
id: object-get-padding
title: OBJECT GET PADDING
slug: /commands/object-get-padding
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET PADDING.Syntax-->\**OBJECT GET PADDING** ( * ; *object* : Text ) : Object<br/>**OBJECT GET PADDING** ( *object* : Variable, Field ) : Object<!-- END REF-->

<!--REF #_command_.OBJECT GET PADDING.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594; | If specified, object is an object name (string)<br/>If omitted, object is a variable or field |
| object | Text, Variable, Field | &#8594; | Object name (if * is specified) or<br/>Variable or field (if * is omitted) |
| Function result | Object | &#8592; | Padding values |

</div>
<!-- END REF-->

<div class="no-index">

<details><summary>History</summary>

| Release | Changes |
| --- | --- |
| 21 Rx | Created |

</details>

</div>

## Description

<!--REF #_command_.OBJECT GET PADDING.Summary-->The **OBJECT GET PADDING** command returns an object containing the padding values applied to the object designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that *object* is a variable or field. In this case, you pass a variable or field reference instead of a string.

The returned object contains the following properties:

| Property | Type | Description |
| --- | --- | --- |
| `top` | Integer | Top padding |
| `bottom` | Integer | Bottom padding |
| `left` | Integer | Left padding |
| `right` | Integer | Right padding |

Padding values are expressed in pixels.

For List Box objects, the command returns the stored values unchanged. However, only the `top` and `left` properties are taken into account for rendering:

- `top` is applied as both top and bottom padding,
- `left` is applied as both left and right padding.

If you apply this command to a set of objects, only the padding values for the last object are returned.

Padding can be retrieved for the following types of form objects:

* list boxes,
* static text,
* input text.

## See also

[OBJECT SET PADDING](../commands/object-set-padding)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)

## Properties

|  |  |
| --- | --- |
| Command number | 1866 |
| Thread safe | no |