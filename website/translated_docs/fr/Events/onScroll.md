---
id: onScroll
title: Sur défilement
---

| Code | Peut être appelé par                                                                                                                                | Définition                                                                                 |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 59   | [Input](FormObjects/input_overview.md) of the `picture` [Type](FormObjects/properties_Object.md#type) - [List Box](FormObjects/listbox_overview.md) | The user scrolls the contents of a picture object or list box using the mouse or keyboard. |


## Description

Cet événement peut être généré dans le contexte d'une entrée d'image ou d'une list box.

Il est déclenché après tout autre événement utilisateur lié à l'action de défilement ([On Clicked](onClicked.md), [On After Keystroke](onAfterKeystroke.md), etc.). L'événement est uniquement généré dans la méthode objet (pas dans la méthode formulaire).

L'événement est déclenché lorsque le défilement est le résultat d'une action de l'utilisateur : à l'aide des barres de défilement et/ou des curseurs, à l'aide de la molette de la souris ou du [clavier](FormObjects/properties_Appearance.md#vertical-scroll-bar). It is not generated when the object is scrolled due to the execution of the `OBJECT SET SCROLL POSITION` command.


### Picture input

The event is generated as soon as a user scrolls a picture within the picture input (field or variable) that contains it. You can scroll the contents of a picture area when the size of the area is smaller than its contents and the [display format](FormObjects/properties_Display.md#picture-format) is "Truncated (non Centered)".


### List box

The event is generated as soon as a user scrolls the rows or columns of the list box. 
