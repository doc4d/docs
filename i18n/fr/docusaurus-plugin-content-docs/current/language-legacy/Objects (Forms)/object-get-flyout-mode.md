---
id: object-get-flyout-mode
title: OBJECT Get flyout mode
slug: /commands/object-get-flyout-mode
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get flyout mode.Syntax-->**OBJECT Get flyout mode** ( * ; *objet* : Text ) : Text<br/>**OBJECT Get flyout mode** ( *objet* : Variable, Field ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get flyout mode.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594; | Si spécifié, *objet* est un nom d'objet de formulaire |
| objet | Text, Variable, Field | &#8594;  | Nom d'objet liste déroulante (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| Résultat | Text | &#8592; | Mode de déroulement courant |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|21 R6|Créé|

</details>
</div>

## Description

<!--REF #_command_.OBJECT Get flyout mode.Summary-->**OBJECT Get flyout mode** retourne le mode de déroulement courant d'un objet liste déroulante.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous omettez le paramètre *\**, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous passez une référence de champ ou de variable de formulaire.

Le mode de déroulement courant d'une liste déroulante peut avoir été [défini au niveau du formulaire](../../FormObjects/properties_Display.md#flyout-mode) dans la Liste des propriétés, ou pour le process courant à l'aide de la commande [`OBJECT SET FLYOUT MODE`](../commands/object-set-flyout-mode).

Les valeurs suivantes peuvent être retournées :

| Constante      |  Valeur | Commentaire   |
| ------------- | ------ | ------- |
| `Flyout automatic`|"automatic"|pop-up ou pull-down, selon l'OS et la source de données (historique)|
| `Flyout pop up` |"popup"|mode de déroulement pop-up|
| `Flyout pull down`|"pulldown"|mode de déroulement de type menu|

Voir [Mode de déroulement](../../FormObjects/properties_Display.md#flyout-mode) pour plus d'informations.  

## Exemple

```4d
var $mode : Text
$mode:=OBJECT Get flyout mode(*; "myDrop")
```

## Voir aussi 

[OBJECT SET FLYOUT MODE](../commands/object-set-flyout-mode)  
[Liste déroulante](../FormObjects/dropdownList_Overview.md)  
[Mode de déroulement](../FormObjects/properties_Display.md#flyout-mode)

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1870 |
| Thread safe | no |
