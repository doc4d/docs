---
id: onMouseUp
title: On Mouse Up
---

| Code | Puede ser llamado por                                                                                      | Definición                                                                  |
| ---- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 2    | [Área de entrada](FormObjects/input_overview.md) de [Tipo](FormObjects/properties_Object.md#type) `imagen` | El usuario acaba de soltar el botón izquierdo del ratón en un objeto Imagen |


## Descripción

El evento `On Mouse Up` se genera cuando el usuario acaba de soltar el botón izquierdo del ratón mientras arrastra una imagen. This event is useful, for example, when you want the user to be able to move, resize or draw objects in a SVG area.

When the `On Mouse Up` event is generated, you can get the local coordinates where the mouse button was released. These coordinates are returned in the `MouseX` and `MouseY` System variables. The coordinates are expressed in pixels with respect to the top left corner of the picture (0,0).

When using this event, you must also use the `Is waiting mouse up` command to handle cases where the "state manager" of the form is desynchronized, i.e. when the `On Mouse Up` event is not received after a click. This is the case for example when an alert dialog box is displayed above the form while the mouse button has not been released. For more information and an example of use of the `On Mouse Up` event, please refer to the description of the `Is waiting mouse up` command.

> If the [Draggable](FormObjects/properties_Action.md#draggable) option is enabled for the picture object, the `On Mouse Up` event is never generated. 
