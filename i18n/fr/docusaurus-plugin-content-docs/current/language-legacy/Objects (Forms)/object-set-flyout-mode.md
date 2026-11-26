---
id: object-set-flyout-mode
title: OBJECT SET FLYOUT MODE
slug: /commands/object-set-flyout-mode
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FLYOUT MODE.Syntax-->**OBJECT SET FLYOUT MODE** ( * ; *objet* : Text ; *mode* : Text )<br/>**OBJECT SET FLYOUT MODE** ( *objet* : Variable, Field ; *mode* : Text )<!-- END REF-->
<!--REF #_command_.OBJECT SET FLYOUT MODE.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594; | Si spécifié, *objet* est un nom d'objet de formulaire |
| objet | Text, Variable, Field | &#8594;  | Nom d'objet liste déroulante (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| mode | Text | &#8594; | Mode de déroulement : "automatic", "popup" ou "pulldown" |

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

<!--REF #_command_.OBJECT SET FLYOUT MODE.Summary-->**OBJECT SET FLYOUT MODE** définit le mode de déroulement d'un objet liste déroulante à l'exécution.<!-- END REF-->

:::note

Sous Windows, cette commande nécessite l'utilisation du [mode de rendu FluentUI](../../FormEditor/forms.md#fluent-ui-rendering).

:::

Dans *mode*, vous pouvez utiliser l'une des constantes suivantes :

| Constante      |  Valeur | Commentaire   |
| ------------- | ------ | ------- |
| `Flyout automatic`|"automatic"|pop-up ou pull-down, selon l'OS et la source de données (historique)|
| `Flyout pop up` |"popup"|mode de déroulement pop-up|
| `Flyout pull down`|"pulldown"|mode de déroulement de type menu|

Voir [Mode de déroulement](../../FormObjects/properties_Display.md#flyout-mode) pour plus d'informations sur les modes de déroulement. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous omettez le paramètre *\**, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous passez une référence de champ ou de variable de formulaire.

Lorsque la commande est appelée avec une valeur prise en charge, l'apparence de l'objet est mise à jour immédiatement ; aucun rafraîchissement du formulaire n'est nécessaire.

Si *mode* contient toute autre valeur texte, aucune erreur n'est générée, la valeur est ignorée et le mode de déroulement courant reste inchangé.

## Exemple

```4d
// Forcer le mode pull-down
OBJECT SET FLYOUT MODE(*; "myDrop"; Flyout pull down)

// Plus tard, revenir au comportement automatique historique
OBJECT SET FLYOUT MODE(*; "myDrop"; Flyout automatic)
```

## Voir aussi

[OBJECT Get flyout mode](../commands/object-get-flyout-mode)  
[Liste déroulante](../FormObjects/dropdownList_Overview.md)  
[Mode de déroulement](../FormObjects/properties_Display.md#flyout-mode)

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1869 |
| Thread safe | no |
