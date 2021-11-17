---
id: getting-started
title: Prise en main
---


4D View Pro est un [composant 4D](Concepts/components.md) qui comprend une [zone de formulaire 4D](FormObjects/viewProArea_overview.md) et des [méthodes](method-list.md) spécifiques. Il vous permet d'intégrer des fonctionnalités avancées de tableur dans vos projets.


![](assets/en/ViewPro/vpSpreadsheet.PNG)

Une tableur est une application contenant une grille de cellules dans lesquelles vous pouvez saisir des informations, effectuer des calculs ou afficher des images. 4D View Pro est alimenté par la [solution de tableur SpreadJS](https://www.grapecity.com/spreadjs/docs/v14/online/overview.html) intégrée à 4D.

L'intégration de zones 4D View Pro dans vos formulaires vous permet d'importer et d'exporter des documents de type tableur à l'aide des commandes 4D View Pro.


## Installation et activation

Les fonctionnalités de 4D View Pro sont directement inclues dans 4D, ce qui en facilite le déploiement et la gestion. Aucune installation supplémentaire n'est nécessaire.

Cependant, 4D View Pro nécessite une licence. Vous devez activer cette licence dans votre application afin d'utiliser ses fonctionnalités. Lorsque vous utilisez ce composant sans licence, le contenu d'un objet nécessitant une fonctionnalité 4D View Pro ne s'affiche pas au moment de l'exécution; au lieu de cela, un message d'erreur :

![](assets/en/ViewPro/licenseError.PNG)


## Insertion d'une zone 4D View Pro

Les documents 4D View Pro sont affichés et modifiés manuellement dans un [objet du formulaire 4D](FormObjects/viewProArea_overview.md) nommé 4D View Pro. Pour sélectionner cet objet, cliquez sur le dernier outil de la barre d'objets :

![](assets/en/ViewPro/vpArea.PNG)

Vous pouvez également sélectionner une zone 4D View Pro préconfigurée dans la [bibliothèque d'objets](FormEditor/objectLibrary.md).

> Les zones 4D View Pro peuvent également être [créées et utilisées hors écran](method-list.md#vp-run-offscreen-area).

Vous pouvez [configurer la zone](configuring.md) à l'aide de la liste de propriétés et des méthodes 4D View Pro.


## Fondamentaux de la sélection, de la saisie et de la navigation

Les feuilles de calcul sont composées de lignes et de colonnes. Un numéro est associé à chaque ligne. Une lettre (ou un groupe de lettres lorsque le nombre de colonnes est supérieur au nombre de lettres de l'alphabet) est associée à chaque colonne. L'intersection d'une ligne et d'une colonne constitue une cellule. Les cellules peuvent être sélectionnées et leur contenu modifié.

### Sélection des cellules, des colonnes et des lignes

*   Pour sélectionner une cellule, il suffit de cliquer dessus ou d'utiliser les flèches de direction du clavier. Son contenu (ou sa formule) s'affiche dans la cellule.

*   Pour sélectionner plusieurs cellules continues, faites glisser la souris d'une extrémité à l'autre de la sélection. Vous pouvez également cliquer sur les deux extrémités de la sélection tout en maintenant la touche Maj enfoncée.

*   Pour sélectionner toutes les cellules de la feuille de calcul, cliquez sur la cellule en haut à gauche de la zone :  ![](assets/en/ViewPro/vpSelectAll.PNG)

*   Pour sélectionner une colonne, cliquez sur la lettre (ou le groupe de lettres) correspondant(e).

*   Pour sélectionner une ligne, cliquez sur le chiffre correspondant.

*   Pour sélectionner un groupe de cellules non continues, maintenez la touche **Ctrl** (Windows) ou **Command** (macOS) enfoncée et cliquez sur chaque cellule à sélectionner.

*   Pour désélectionner des cellules, il suffit de cliquer n'importe où dans la feuille de calcul.

### Saisie de donnéesx

Un double-clic sur une cellule permet de passer en mode saisie dans la cellule concernée. Si la cellule n'est pas vide, le curseur d'insertion se place après le contenu de la cellule.

![](assets/en/ViewPro/vpInput.PNG)

Data can be entered directly once a cell is already selected, even if the insertion cursor is not visible. The input then replaces the content of the cell.

The **Tab** key validates the cell input and selects the cell to its right. Combining the **Shift + Tab** keys validates the cell input and selects the cell to its left.


The **Carriage return** key validates the cell input and selects the cell below it. Combining the **Shift + Carriage return** keys validates the cell input and selects the cell above it.

The direction keys (arrows) allow you to move a cell in the direction indicated by the arrow.


### Using the Context Menu

4D View Pro areas benefit from an automatic context menu that offers standard editing features such as copy and paste, but also basic spreadsheet features:

![](assets/en/ViewPro/vpContext.PNG)
> The Copy/Cut and Paste features of the context menu only work within the spreadsheet area, they do not have access to the system pasteboard. System shortcuts such as **Ctrl+c/Ctrl+v** works however and can be used to exchange data between the area and other applications.

 Depending on the clicked area, the following options are also available:

*   click on a column or row header: **Insert**, **Delete**, **Hide**, or **Unhide** the contents
*   click on a cell or a cell range:
    *   **Filter**: allows hiding row through filters (see [Filtering rows](http://help.grapecity.com/spread/SpreadSheets11/webframe.html#filter.html) in the SpreadJS documentation).
    *   **Sort**: sorts the column contents.
    *   **Insert Comment**: allows user to enter a comment for an area. When a comment has been entered for an area, the top left cell of the area displays a small red triangle:  
      ![](assets/en/ViewPro/vpContext2.PNG)


## Using 4D View Pro methods

4D View Pro methods can be used in the 4D Method editor, just like 4D language commands.

Since 4D View Pro is a built-in 4D component, you can access its list of methods from the Explorer, in the **Component Methods** section:

![component-methods](assets/en/ViewPro/explorer-methods.PNG)

For a detailed list of component methods, see [Method list](method-list.md).

### Addressing a 4D View Pro area

A 4D View Pro area handles several objects and elements.

![](assets/en/ViewPro/vpDocument.PNG)

Most of 4D View Pro methods require a *vpAreaName* parameter, which is the [**4D View Pro form area name**](FormObjects/viewProArea_overview.md) (4D form object). This name is the [object name](FormObjects/properties_Object.md#object-name) property.

For example, if you want to set the total number of columns of an area named "myVpArea", you write:

```4d
VP SET COLUMN COUNT("myVpArea";5)
```



> When loading a 4D View Pro object in a form area, 4D generates the [On VP Ready](../Events/onVpReady.md) form event once the whole area is loaded. You must execute any 4D View Pro code handling the area in this event, otherwise an error is returned.


### Using range objects

Some 4D View Pro methods require a *rangeObj* parameter. In 4D View Pro, a range is an object that references an area in a spreadsheet. This area can be composed of one or several cells. Using 4D View Pro methods, you can create ranges and pass them to other methods to read from or write to specific locations in your document.

For example, to create a range object for the following cells:

![](assets/en/ViewPro/vp-cells.png)

You can use the [VP Cells](method-list.md#vp-cells) method:

```4d 
var $myRange : Object
$myRange:=VP Cells("ViewProArea";2;4;2;3) // C5 to D7
```

You can then pass `$myRange` to another 4D View Pro method to modify these cells (for example add a border to the set of cells with [VP SET BORDER](method-list.md#vp-set-border)).

4D View Pro range objects are composed of several properties:

*   area - The name of the 4D View Pro area
*   ranges - A collection of range object(s). Available properties within each range object depend on the range object type. For example, a column range object will only include the *.column* and *.sheet* properties.

| Propriété |                   | Type       | Description                                                         | Available for                                      |
| --------- | ----------------- | ---------- | ------------------------------------------------------------------- | -------------------------------------------------- |
| area      |                   | Texte      | 4D View Pro area form object name                                   | always available                                   |
| ranges    |                   | collection | Collection of range(s)                                              | always available                                   |
|           | \[ ].name        | Texte      | Range name                                                          | name                                               |
|           | \[ ].sheet       | number     | Sheet index (current sheet index by default) (counting begins at 0) | cell, cells, row, rows, column, columns, all, name |
|           | \[ ].row         | number     | Row index (counting begins at 0)                                    | cell, cells, row, rows                             |
|           | \[ ].rowCount    | number     | Row count                                                           | cells, rows                                        |
|           | \[ ].column      | number     | Column index (counting begins at 0)                                 | cell, cells, column, columns                       |
|           | \[ ].columnCount | number     | Column count                                                        | cells, columns                                     |







## Importing and exporting documents

4D View Pro supports the import and export of several document formats:

* .4vp
* .xlsx
* .txt et .csv
* .pdf (à des fins d'export uniquement)

For more details, check out the description of [VP IMPORT DOCUMENT](method-list.md#vp-import-document) and [VP EXPORT DOCUMENT](method-list.md#vp-export-document).
