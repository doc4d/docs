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

L'appel d'une commande 4D qui affiche une boîte de dialogue à partir de l'événement `On Display Detail` n'est pas autorisé et générera une erreur de syntaxe. Plus particulièrement, les commandes concernées sont : `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, et `MODIFY SELECTION`.


### Liste box sélection

Cet événement est généré lorsqu'une ligne de list box [**de type sélection**](FormObjects/listbox_overview.md#selection-list-boxes) est affichée.


### Numéro de ligne affiché

The `Displayed line number` 4D command works with the `On Display Detail` form event. It returns the number of the row being processed while a list of records or list box rows is displayed on screen.
