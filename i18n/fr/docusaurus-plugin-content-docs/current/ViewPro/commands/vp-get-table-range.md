---
id: vp-get-table-range
title: VP Get table range
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!-- REF #_method_.VP Get table range.Syntax -->

**VP Get table range** ( *vpAreaName* : Text ; *tableName* : Text {; *onlyData* : Integer {; *sheet* : Integer }} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get table range.Params -->

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| tableName  | Text    | -> | Nom de table                                                                |                  |
| onlyData   | Integer | -> | `vk table full range` (default) or `vk table data range` |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) |                  |
| Résultat   | Object  | <- | Plage contenant la table                                                    | <!-- END REF --> |

#### Description

The `VP Get table range` command <!-- REF #_method_.VP Get table range.Summary -->returns the range of *tableName*<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area.

In the *onlyData* parameter, you can pass one of the following constants to indicate if you want to get the data only:

| Constante             | Valeur | Description                                                                                          |
| --------------------- | ------ | ---------------------------------------------------------------------------------------------------- |
| `vk table full range` | 0      | Get the cell range for the table area with footer and header (default if omitted) |
| `vk table data range` | 1      | Get the cell range for the table data area only                                                      |

In *sheet*, pass the index of the target sheet. Si aucun numéro n'est spécifié, la commande s'applique à la feuille en cours.

> La numérotation démarre à 0.

If *tableName* is not found, the command returns **null**.

#### Voir également

[VP RESIZE TABLE](vp-resize-table.md)<br/>
[VP Find table](vp-find-table.md)
