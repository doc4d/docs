---
id: onPrintingFooter
title: On Printing Footer
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Définition                                                     |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| 7    | [Zone 4D Write Pro](FormObjects/writeProArea_overview) - [Bouton](FormObjects/button_overview.md) - [Grille de boutons](FormObjects/buttonGrid_overview.md) - [Case à cocher](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Liste déroulante](FormObjects/dropdownList_Overview.md) -Formulaire - [Liste hiérarchique](FormObjects/list_overview.md) - [Zone de saisie](FormObjects/input_overview.md) - [Bouton image](FormObjects/pictureButton_overview.md) - [Pop up menu image](FormObjects/picturePopupMenu_overview.md) - [Zone de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicateur de progression](FormObjects/progressIndicator.md) - [Bouton radio](FormObjects/radio_overview.md) - [Règle](FormObjects/ruler.md) -[Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Onglet](FormObjects/tabControl.md) | La zone de pied du formulaire est sur le point d’être imprimée |


## Description

L'événement `On Printing Footer` ne peut être utilisé que dans le contexte d'un **formulaire de sortie**. Il est déclenché lorsqu'une zone de pied du formulaire de sortie est sur le point d'être imprimée, afin que vous puissiez évaluer les valeurs du pied.

Cet événement peut être déclenché dans le cadre d'une commande `PRINT SELECTION`.

> Cet événement ne peut pas être sélectionné pour les formulaires projet, il est uniquement disponible avec les **formulaires table**.

