---
id: onDisplayDetail
title: Sur affichage corps
---

| Code | Peut être appelé par                                     | Définition                                                                                                                                       |
| ---- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 8    | Formulaire - [List Box](FormObjects/listbox_overview.md) | Un enregistrement est sur le point d'être affiché dans un formulaire liste ou bien une ligne est sur le point d'être affichée dans une list box. |


## Description

L'événement `On Display Detail` peut être utilisé dans les contextes suivants :

### Formulaire de sortie

A record is about to be displayed in a list form displayed via `DISPLAY SELECTION` and `MODIFY SELECTION`.

> Cet événement ne peut pas être sélectionné pour les formulaires projet, il est uniquement disponible avec les **formulaires table**.

Dans ce contexte, la séquence d'appels de méthodes et d'événements de formulaire suivante est déclenchée :

- Pour chaque enregistrement :
    - Pour chaque objet de la zone détaillée :
        - Méthode objet avec l'événement `On Display Detail`
    - Méthode formulaire avec l'événement `On Display Detail`

> La zone d'en-tête est gérée à l'aide de l'événement [`On Header`](onHeader.md).

Calling a 4D command that displays a dialog box from the `On Display Detail` event is not allowed and will cause a syntax error to occur. More particularly, the commands concerned are: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, and `MODIFY SELECTION`.


### Liste box sélection

This event is generated when a row of a [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes) list box is displayed.


### Displayed line number

The `Displayed line number` 4D command works with the `On Display Detail` form event. It returns the number of the row being processed while a list of records or list box rows is displayed on screen.
