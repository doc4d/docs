---
id: onMouseUp
title: On Mouse Up
---

| Code | Peut être appelé par                                                                                     | Définition                                                                        |
| ---- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 2    | [Zone de saisie](FormObjects/input_overview.md) de [type](FormObjects/properties_Object.md#type) `image` | L'utilisateur vient de relâcher le bouton gauche de la souris dans un objet Image |


## Description

L'événement `On Mouse Up` est généré lorsque l'utilisateur vient de relâcher le bouton gauche de la souris tout en faisant glisser une image. Cet événement est utile, par exemple, lorsque vous souhaitez que l'utilisateur puisse déplacer, redimensionner ou dessiner des objets dans une zone SVG.

Lorsque l'événement `On Mouse Up` est généré, vous pouvez obtenir les coordonnées locales où le bouton de la souris a été relâché. Ces coordonnées sont retournées dans les variables système `MouseX` et `MouseY`. Les coordonnées sont exprimées en pixels par rapport à l'angle supérieur gauche de l'image (0,0).

When using this event, you must also use the `Is waiting mouse up` command to handle cases where the "state manager" of the form is desynchronized, i.e. when the `On Mouse Up` event is not received after a click. This is the case for example when an alert dialog box is displayed above the form while the mouse button has not been released. For more information and an example of use of the `On Mouse Up` event, please refer to the description of the `Is waiting mouse up` command.

> If the [Draggable](FormObjects/properties_Action.md#draggable) option is enabled for the picture object, the `On Mouse Up` event is never generated. 
