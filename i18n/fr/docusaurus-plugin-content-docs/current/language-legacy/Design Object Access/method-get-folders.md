---
id: method-get-folders
title: METHOD GET FOLDERS
slug: /commands/method-get-folders
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET FOLDERS.Syntax-->**METHOD GET FOLDERS** ( *tabNoms* : Text array {; *filtre* : Text}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET FOLDERS.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tabNoms | Text array | &#8592; | Tableau des noms de dossiers de la page Démarrage |
| filtre | Text | &#8594;  | Filtrage des noms |
| * | Opérateur | &#8594;  | Si passé = la commande s’applique à la base hôte lorsqu’elle est exécutée depuis un composant (paramètre ignoré hors de ce contexte) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|21 R6|Prise en charge des projets à dossiers disque|
|13|Créé|

</details>
</div>

## Description 

<!--REF #_command_.METHOD GET FOLDERS.Summary-->La commande **METHOD GET FOLDERS** retourne dans le tableau *tabNoms* les noms des dossiers créés dans la page Démarrage de l’Explorateur de 4D <!-- END REF-->:

![](../../assets/en/commands/pict837666.fr.png)

Comme les noms des dossiers doivent être uniques, la hiérarchie n’est pas retournée dans le tableau. 

Vous pouvez restreindre la liste des dossiers en passant une chaîne de comparaison dans le paramètre *filtre* : dans ce cas, seuls les dossiers dont le nom correspond au filtre seront retournés. Vous pouvez utiliser le caractère @ afin de définir des filtres de type "commence par", "se termine par" ou "contient". Si vous passez une chaîne vide, le paramètre *filtre* est ignoré. 

Si la commande est exécutée depuis un composant, elle retourne par défaut les chemins des méthodes du composant. Si vous passez le paramètre *\**, le tableau contiendra les chemins des méthodes de la base hôte.

Dans un [projet à dossiers disque](../../Project/architecture.md#disk-folder-projects), la commande retourne les noms des dossiers trouvés sur le disque sous `Project/Sources`, y compris les dossiers vides, ainsi que les dossiers nommés dans le fichier `tableFolders.json`. Les dossiers de type (`Methods`, `Classes`, `Forms`, `WebForms`) et les dossiers fixes (`DatabaseMethods`, `TableForms`, `Triggers`, `Shared`) ne sont pas retournés. Le fichier `folders.json` est ignoré.

## Exemple

Dans un projet à dossiers disque contenant les dossiers `Sources/Invoices` et `Sources/Invoices/Archive`, vous souhaitez obtenir les noms des dossiers de la page Démarrage :

```4d
ARRAY TEXT($folders; 0)
METHOD GET FOLDERS($folders)
// $folders contient "Invoices" et "Archive"
```

## Voir aussi 

[METHOD GET PATHS](../commands/method-get-paths)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1206 |
| Thread safe | no |


