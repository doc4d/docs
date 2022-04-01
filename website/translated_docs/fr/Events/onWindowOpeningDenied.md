---
id: onWindowOpeningDenied
title: On Window Opening Denied
---

| Code | Peut être appelé par                        | Définition                       |
| ---- | ------------------------------------------- | -------------------------------- |
| 53   | [Zone Web](FormObjects/webArea_overview.md) | Une fenêtre pop-up a été bloquée |

<details><summary>Historique</summary>
| Version | Modifications     |
| ------- | ----------------- |
| v19 R5  | Triggered on drop |
</details>

## Description

Cet événement est généré lorsque l'ouverture d'une fenêtre pop-up est bloquée par la zone Web. Les zones Web de 4D ne permettent pas l'ouverture de fenêtres contextuelles.

Vous pouvez identifier l'URL bloquée à l'aide de la commande `WA Get last filtered URL`.

This event is also triggered when a drop operation has been done in the Web area (with embedded and Wwindows system [engines](properties_WebArea.md#use-embedded-web-rendering-engine)) if the [Drag and drop](FormObjects/webArea_Overview.md#user-interface) option is also enabled for the area. You can accept the drop by calling:

```4d
//web area object method
If (FORM Event.code=On Window Opening Denied)
    WA OPEN URL(*; "WebArea"; WA Get last filtered URL(*; "WebArea"))
End if 

```


### Voir aussi
[`On Open External Link`](onOpenExternalLink.md)