---
id: dropdownListOverview
title: Liste déroulante
---

Les listes déroulantes sont des objets de formulaire qui permettent à l'utilisateur de sélectionner un élément dans une liste. Vous gérez les éléments qui apparaissent dans les listes déroulantes à l’aide d'un objet, d'un tableau, d’une énumération ou d'une action standard.

Sous macOS, les listes déroulantes sont aussi parfois appelées "pop-up menu". Les deux noms font référence aux mêmes objets. As the following example shows, the appearance of these objects can differ slightly according to the platform and the selected [flyout mode](./properties_Display.md#flyout-mode):

- macOS with "pop-up" flyout mode:  
  ![](../assets/en/FormObjects/dropdown-mac.png)

- Windows with "pull-down" flyout mode ([FluentUI rendering](../FormEditor/forms.md#fluent-ui-rendering) required):  
  ![](../assets/en/FormObjects/dropdown-windows.png)

- Windows (Classic rendering):  
  ![](../assets/en/FormObjects/dropdown-windows-classic.png)

## Types de listes déroulantes

Vous pouvez créer différents types de listes déroulantes avec différentes fonctionnalités. Pour définir un type, sélectionnez les valeurs **Type d'expression** et **Type de données** dans la liste des Propriétés, ou utilisez leur équivalent JSON.

| Type                                          | Fonctionnalités                                                                            | Type d’expression | Type de données                    | Définition JSON                                                                                                                       |
| --------------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Object                                        | Construit sur une collection                                                               | Object            | Numérique, texte, date ou heure    | `dataSourceTypeHint: object` + `numberFormat: <format>` ou `textFormat: <format>` ou `dateFormat: <format>` ou `timeFormat: <format>` |
| Tableau                                       | Construit sur un tableau                                                                   | Tableau           | Numérique, texte, date ou heure    | `dataSourceTypeHint: arrayNumber` ou `arrayText` ou `arrayDate` ou `arrayTime`                                                        |
| Enumération enregistrée en tant que valeur    | Construit sur une liste de choix (standard)                             | Liste             | Valeur de l'élément sélectionné    | `dataSourceTypeHint: text` + `saveAs: value`                                                                                          |
| Enumération enregistrée en tant que référence | Construit sur une liste de choix. La position de l'élément est sauvegardée | Liste             | Référence de l'élément sélectionné | `dataSourceTypeHint: integer` + `saveAs: reference`                                                                                   |
| Enumération hiérarchique                      | Peut afficher un contenu hiérarchique                                                      | Liste             | Référence de liste                 | `dataSourceTypeHint: integer`                                                                                                         |
| Action standard                               | Construit automatiquement par l'action                                                     | *any*             | *any except List reference*        | toute définition + `action: <action>` (+ `focusable : false` pour les actions s'appliquant à d'autres domaines)    |

## Gestion des listes déroulantes

### Utiliser un objet

> Cette fonctionnalité n'est disponible que dans les projets 4D.

<details><summary>Historique</summary>

| Release | Modifications                     |
| ------- | --------------------------------- |
| 21 R6   | Support of styled, editable items |

</details>

Un [objet](Concepts/dt_object.md) encapsulant une [collection](Concepts/dt_collection.md) peut être utilisé comme source de données d'une liste déroulante. Cet objet doit avoir les propriétés suivantes :

| Propriété      | Type                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `values`       | Collection                         | Mandatory - Collection of entries used to build the list. Entries can be either scalar values or objects ([see below](#customizing-items-with-object-entries)). Scalar values must use one consistent data type across selectable values (`text`, `integer`, `boolean`, `date`, or `time`). If empty or undefined, the drop-down displays no items. |
| `index`        | number                             | Index of the currently selected item in the full `values` collection (0-based). Non-selectable items and separator items keep their position and are counted in `index`. Si vous passez -1, `currentValue` est affiché sous la forme d'un texte exemple                                                                                                                                                |
| `currentValue` | Same scalar type as selected value | Currently selected scalar value (used as placeholder value if set by code). For object entries, this is the entry's `value` property, not the whole object.                                                                                                                                                                                                                                            |

Additional properties at the top level of the data source object are ignored by the drop-down renderer.

Pour initialiser l'objet associé à la liste déroulante, vous pouvez :

- Enter a list of default values in the object properties by selecting `<Static List>` in the [Data Source](properties_DataSource.md) theme of the Property List. Les valeurs par défaut sont chargées automatiquement dans un objet.

- Exécuter le code qui crée l'objet et ses propriétés.

#### Example with scalar values

If "Form.myDrop" is the [expression](properties_Object.md#variable-or-expression) associated to the drop-down list, you can write in the [On Load](Events/onLoad.md) form event:

```4d
// Form.myDrop est la source de données de l'objet formulaire
 
Form.myDrop:=New object
Form.myDrop.values:=New collection("apples"; "nuts"; "pears"; "oranges"; "carrots")
Form.myDrop.index:=-1 //currentValue est un caractère générique
Form.myDrop.currentValue:="Select a fruit" 
```

La liste déroulante est affichée avec le texte d'exemple :

![](../assets/en/FormObjects/fruits2.png)

Après que l'utilisateur sélectionne une valeur :

![](../assets/en/FormObjects/fruits3.png)

```4d
Form.myDrop.values // ["apples","nuts","pears","oranges","carrots"]
Form.myDrop.currentValue //"oranges"
Form.myDrop.index //3
```

### Customizing items with object entries

:::note Compatibilité

On Windows, item customization is only available in forms rendererd with [Fluent UI](../FormEditor/forms.md#fluent-ui-rendering).

:::

Inside the `values` collection of objects, each entry can be an object which defines item-level presentation and behavior:

| Item property         | Type                                      | Description                                                                                                                                                                                                               |
| --------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `values[].value`      | Text, Integer, Boolean, Date, or Time     | Scalar value represented by the item. If selectable, this value can become `currentValue`. If omitted and `separator` is not `true`, the item is displayed with no label. |
| `values[].selectable` | Boolean                                   | Optionnel. Default: `true`. When `false`, the item is visible but cannot be selected.                                                                     |
| `values[].picture`    | 4D.File, Picture, or Text | Optional icon/picture. A text value must be a valid picture path.                                                                                                                         |
| `values[].fontWeight` | Text                                      | Optionnel. "normal" or "bold".                                                                                                                                                            |
| `values[].fontStyle`  | Text                                      | Optionnel. "normal" or "italic".                                                                                                                                                          |
| `values[].color`      | Text or Integer                           | Optional text color. Supports CSS color names, hexadecimal color strings, RGB strings, and RGB integer values.                                                                            |
| `values[].separator`  | Boolean                                   | Optionnel. Default: `false`. When `true`, the item is rendered as a separator and all other item properties are ignored.                                  |

#### Rendering and precedence rules

- If `separator = true`, the item is always rendered as a non-selectable divider. In this case `value`, `selectable`, `picture`, `color`, `fontWeight`, and `fontStyle` are ignored.
- A "-" scalar text value is interpreted as a separator (compatibility). A "-" as a `.value` property in an object entry is interpreted as a regular label, not a separator.
- If `value` is omitted and `separator` is not `true`, the item has no text label.
- `color`, `fontWeight`, and `fontStyle` are applied only when a `value` is displayed.
- If `selectable` is omitted, it behaves as `true`.
- Non-selectable items and separator items remain in the `values` collection and keep their original index positions.

#### Platform notes for non-selectable items

When `selectable` is false:

- On **Windows**, if `color` is explicitly set, that color is rendered unchanged; if `color` is not set, the item appears gray.
- On **macOS**, non-selectable items are alpha-blended, including when `color` is set.

#### Picture placement

For non-separator items with a `picture`:

- Left/center-aligned items: picture is displayed on the left of the value.
- Right-aligned items: picture is displayed on the right of the value.
- If `value` is omitted, the picture is displayed alone.

:::note Technical limitation

The picture is always displayed **on the left** with hierarchical list data source on Windows or macOS.

:::

#### Example with mixed scalar and object entries

```4d
// Form.myDrop is the datasource of the form object

Form.myDrop:=New object
Form.myDrop.values:=New collection

// Non-selectable title
Form.myDrop.values.push({value: "Priority"; selectable: False})

// Selectable styled items
Form.myDrop.values.push({value: "Urgent"; picture: File("/RESOURCES/icons/urgent.png"); color: "#C42B1C"; fontWeight: "bold"})
Form.myDrop.values.push({value: "Normal"; fontWeight: "bold"})
Form.myDrop.values.push("Low")

// Visual separator
Form.myDrop.values.push({separator: True})

// Non-selectable message
Form.myDrop.values.push({value: "Information"; selectable: False; fontStyle: "italic"})

// Placeholder mode
Form.myDrop.index:=-1
Form.myDrop.currentValue:="Select a level"
```

![](../assets/en/FormObjects/dropdown-example.png)

Après que l'utilisateur sélectionne une valeur :

![](../assets/en/FormObjects/dropdown-example-2.png)

```4d
//Form.myDrop.currentValue = "Normal"
//Form.myDrop.index = 2 
```

### Utiliser un tableau

Un [tableau](Concepts/arrays.md) est une liste de valeurs gardées en mémoire qui sont référencées par le nom du tableau. Une liste déroulante peut afficher un tableau comme une liste de valeurs lorsque vous cliquez dessus.

Pour initialiser le tableau associé à la liste déroulante, vous pouvez :

- Entrer une liste de valeurs par défaut dans les propriétés de l'objet en sélectionnant `<Static List>` dans le thème [Data Source](properties_DataSource.md) de la liste des propriétés. Les valeurs par défaut sont automatiquement chargées dans un tableau. Vous pouvez faire référence à ce tableau par l’intermédiaire du nom de la variable associée à l’objet.

- Avant que l’objet ne soit affiché, exécuter une méthode qui affecte des valeurs au tableau. Par exemple :

```4d
  ARRAY TEXT(aCities;6) 
  aCities{1}:="Philadelphia" 
  aCities{2}:="Pittsburg" 
  aCities{3}:="Grand Blanc" 
  aCities{4}:="Bad Axe" 
  aCities{5}:="Frostbite Falls" 
  aCities{6}:="Green Bay" 
```

Dans ce cas, le nom de la [variable](properties_Object.md#variable-or-expression) associée à l'objet dans le formulaire doit être `aCities`. Ce code peut être placé dans la méthode formulaire et être exécuté lorsque l’événement formulaire `Sur chargement` se produit.

- Avant d'afficher l'objet, charger les valeurs d'une liste dans le tableau à l'aide de la commande [`LIST TO ARRAY`](../commands/list-to-array). Par exemple :

```4d
   LIST TO ARRAY("Cities";aCities)
```

Dans ce cas également, le nom de la [variable](properties_Object.md#variable-or-expression) associée à l'objet dans le formulaire doit être `aCities`. Ce code peut être exécuté à la place de celui proposé plus haut.

Si vous voulez stocker dans un champ le choix de l’utilisateur, il est nécessaire d’écrire du code pour affecter les valeurs et de l’exécuter après la validation de l’enregistrement. Ce code pourrait être le suivant :

```4d
  Case of
    :(Form event=On Load)
       LIST TO ARRAY("Cities";aCities)
       If(Record number([People])<0) //nouvel enregistrement
          aCities:=3 //affiche une valeur par défaut
       Else //enregistrement existant, affiche sa valeur
          aCities:=Find in array(aCities;City)
       End if
    :(Form event=On Clicked) //sélection modifiée par l'utilisateur
       City:=aCities{aCities} //nouvelle valeur dans le champ
    :(Form event=On Validate)
       City:=aCities{aCities}
    :(Form event=On Unload)
       CLEAR VARIABLE(aCities)
 End case
```

Vous devez sélectionner chaque événement que vous testez dans votre Au cas où. Les tableaux contiennent toujours un nombre fini d’éléments. La liste des éléments est dynamique et peut être modifiée par programmation. Les éléments d’un tableau peuvent être modifiés et triés.

### Utiliser une énumération

Si vous souhaitez utiliser une liste déroulante pour gérer les valeurs d'une zone de saisie (champ ou variable avec liste), 4D vous permet de référencer directement le champ ou la variable en tant que [source de données](properties_Object.md#variable-or-expression) de la liste déroulante. Cette possibilité facilite la gestion des champs/variables énuméré(e)s.

Par exemple, dans le cas d'un champ "Couleur" qui ne peut contenir que les valeurs "Blanc", "Bleu", "Vert" ou "Rouge", il est possible de créer une liste contenant ces valeurs et de l'associer à une liste déroulante qui fait référence au champ "Couleur" 4D. 4D se charge alors de gérer automatiquement la saisie et l’affichage de la valeur courante dans le formulaire.

> Si vous utilisez une énumération hiérarchique, seul le premier niveau sera affiché et sélectionnable. Si vous souhaitez afficher un contenu hiérarchique, vous devez utiliser une [liste hiérarchique](#using-a-hierarchical-choice-list).

Pour associer une liste déroulante à un champ ou à une variable, saisissez le nom du champ ou de la variable directement dans le champ [Variable ou expression](properties_Object.md#variable-or-expression) de la liste déroulante dans la liste des propriétés.

> Il n'est pas possible d'utiliser cette fonctionnalité avec un objet ou une liste déroulante de tableaux. Si vous entrez un nom de champ dans la zone "Variable ou Expression", vous devez utiliser une énumération.

Lorsque le formulaire est exécuté, 4D gère automatiquement la liste déroulante lors de la saisie ou de l'affichage : lorsque l'utilisateur choisit une valeur, celle-ci est enregistrée dans le champ ; cette valeur de champ est affichée dans la liste déroulante lors de l'affichage du formulaire :

![](../assets/en/FormObjects/popupDropdown_choiceList.png)

#### Valeur de l'élément sélectionné ou Référence de l'élément sélectionné

Lorsque vous avez associé une liste déroulante à une énumération et à un champ ou une variable, vous pouvez définir la propriété [**Type de données**](properties_DataSource.md#data-type-list) sur **Valeur de l'élément sélectionné** ou **Référence de l'élément sélectionné**. Cette option permet d'optimiser la taille des données stockées.

### Utiliser une énumération hiérarchique

Une liste déroulante hiérarchique a une sous-liste associée à chaque élément de la liste. Voici un exemple de liste déroulante hiérarchique :

![](../assets/en/FormObjects/popupDropdown_hierar.png)

Vous pouvez affecter la liste hiérarchique à l'objet liste déroulante en utilisant le champ [Enumération](properties_DataSource.md#choice-list) de la liste des propriétés.

Les listes déroulantes hiérarchiques sont gérées à l'aide des commandes **Listes hiérarchiques** du langage 4D. Toutes les commandes qui prennent en charge la syntaxe `(* ; "name")` peuvent être utilisées avec des listes déroulantes hiérarchiques, par exemple [`List item parent`](../commands/list-item-parent).

### Utiliser une action standard

Vous pouvez construire automatiquement une liste déroulante en utilisant une [action standard](properties_Action.md#standard-action). Cette fonctionnalité est prise en charge dans les contextes suivants :

- Utilisation de l'action standard `gotoPage`. Dans ce cas, 4D affichera automatiquement la [page du formulaire](FormEditor/forms.md#form-pages) correspondant au numéro de l'élément sélectionné. Par exemple, si l’utilisateur clique sur le 3e élément, 4D affichera la page 3 du formulaire courant (si elle existe). Au moment de l'exécution, la liste déroulante affiche par défaut les numéros de page (1, 2...).

- Utilisation d'une action standard qui affiche une sous-liste d'éléments, par exemple `backgroundColor`. Cette fonctionnalité nécessite que :
  - une zone de texte stylée (zone [4D Write Pro](writeProArea_overview.md) ou [input](input_overview.md) avec propriété [multistyle](properties_Text.md#multi-style)) soit présente dans le formulaire comme cible de l'action standard.
  - la propriété [focusable](properties_Entry.md#focusable) n'est pas attribuée à la liste déroulante.
    Lors de l'exécution, la liste déroulante affichera une liste automatique de valeurs, par exemple les couleurs d'arrière-plan. Vous pouvez remplacer cette liste automatique par une liste personnalisée en associant à l'objet une énumération dans laquelle chaque élément a lui-même été assigné à une action standard.

> Cette fonctionnalité ne peut pas être utilisée avec une liste déroulante hiérarchique.

## Actions standard prises en charge

Les actions suivantes sont disponibles dans la liste déroulante du sélecteur d'actions standard. Consultez les pages [Actions standard](../Desktop-legacy/standard-actions.md) et [Actions standard de 4D Write Pro](../WritePro/user-legacy/standard-actions.md) pour obtenir la description des actions et connaître leurs prérequis.

[`gotoPage`](../Desktop-legacy/standard-actions.md#gotopage) - [`fontSize`](../Desktop-legacy/standard-actions.md#fontsize) - [`color`](../Desktop-legacy/standard-actions.md#color) - [`backgroundColor`](../WritePro/user-legacy/standard-actions.md#action-backgroundcolor) - [`textUnderlineStyle`](../WritePro/user-legacy/standard-actions.md#action-textunderlinestyle) - [`textUnderlineColor`](../WritePro/user-legacy/standard-actions.md#action-textunderlinecolor) - [`textLinethroughStyle`](../WritePro/user-legacy/standard-actions.md#action-textlinethroughstyle) - [`textLinethroughColor`](../WritePro/user-legacy/standard-actions.md#action-textlinethroughcolor) - [`textShadowOffset`](../WritePro/user-legacy/standard-actions.md#action-textshadowoffset) - [`textShadowColor`](../WritePro/user-legacy/standard-actions.md#action-textshadowcolor) - [`textTransform`](../WritePro/user-legacy/standard-actions.md#action-texttransform) - [`dpi`](../WritePro/user-legacy/standard-actions.md#action-dpi) - [`zoom`](../WritePro/user-legacy/standard-actions.md#action-zoom) - [`userUnit`](../WritePro/user-legacy/standard-actions.md#action-userunit) - [`pageMode`](../WritePro/user-legacy/standard-actions.md#action-pagemode) - [`pageSize`](../WritePro/user-legacy/standard-actions.md#action-pagesize) - [`tabDecimalSeparator`](../WritePro/user-legacy/standard-actions.md#action-tabdecimalseparator) - [`pageOrientation`](../WritePro/user-legacy/standard-actions.md#action-pageorientation) - [`section/pageOrientation`](../WritePro/user-legacy/standard-actions.md#action-pageorientation) - [`columnCount`](../WritePro/user-legacy/standard-actions.md#action-columncount) - [`section/columnCount`](../WritePro/user-legacy/standard-actions.md#action-columncount) - [`columnSpacing`](../WritePro/user-legacy/standard-actions.md#action-columnspacing) - [`section/columnSpacing`](../WritePro/user-legacy/standard-actions.md#action-columnspacing) - [`columnRuleStyle`](../WritePro/user-legacy/standard-actions.md#action-columnrulestyle) - [`section/columnRuleStyle`](../WritePro/user-legacy/standard-actions.md#action-columnrulestyle) - [`columnRuleColor`](../WritePro/user-legacy/standard-actions.md#action-columnrulecolor) - [`section/columnRuleColor`](../WritePro/user-legacy/standard-actions.md#action-columnrulecolor) - [`columnRuleWidth`](../WritePro/user-legacy/standard-actions.md#action-columnrulewidth) - [`section/columnRuleWidth`](../WritePro/user-legacy/standard-actions.md#action-columnrulewidth) - [`bookmark`](../WritePro/user-legacy/standard-actions.md#action-bookmark) - [`width`](../WritePro/user-legacy/standard-actions.md#action-width) - [`paragraph/width`](../WritePro/user-legacy/standard-actions.md#action-width) - [`image/width`](../WritePro/user-legacy/standard-actions.md#action-width) - [`column/width`](../WritePro/user-legacy/standard-actions.md#action-width) - [`image/height`](../WritePro/user-legacy/standard-actions.md#action-height) - [`row/height`](../WritePro/user-legacy/standard-actions.md#action-height) - [`minWidth`](../WritePro/user-legacy/standard-actions.md#action-minwidth) - [`paragraph/minWidth`](../WritePro/user-legacy/standard-actions.md#action-minwidth) - [`image/minWidth`](../WritePro/user-legacy/standard-actions.md#action-minwidth) - [`minHeight`](../WritePro/user-legacy/standard-actions.md#action-minheight) - [`paragraph/minHeight`](../WritePro/user-legacy/standard-actions.md#action-minheight) - [`image/minHeight`](../WritePro/user-legacy/standard-actions.md#action-minheight) - [`margin`](../WritePro/user-legacy/standard-actions.md#action-margin) - [`doc/margin`](../WritePro/user-legacy/standard-actions.md#action-margin) - [`paragraph/margin`](../WritePro/user-legacy/standard-actions.md#action-margin) - [`paragraph/inside/margin`](../WritePro/user-legacy/standard-actions.md#action-margin) - [`paragraph/outside/margin`](../WritePro/user-legacy/standard-actions.md#action-margin) - [`image/margin`](../WritePro/user-legacy/standard-actions.md#action-margin) - [`section/margin`](../WritePro/user-legacy/standard-actions.md#action-margin) - [`header/margin`](../WritePro/user-legacy/standard-actions.md#action-margin) - [`footer/margin`](../WritePro/user-legacy/standard-actions.md#action-margin) - [`table/margin`](../WritePro/user-legacy/standard-actions.md#action-margin) - [`padding`](../WritePro/user-legacy/standard-actions.md#action-padding) - [`doc/padding`](../WritePro/user-legacy/standard-actions.md#action-padding) - [`paragraph/padding`](../WritePro/user-legacy/standard-actions.md#action-padding) - [`paragraph/inside/padding`](../WritePro/user-legacy/standard-actions.md#action-padding) - [`paragraph/outside/padding`](../WritePro/user-legacy/standard-actions.md#action-padding) - [`image/padding`](../WritePro/user-legacy/standard-actions.md#action-padding) - [`section/padding`](../WritePro/user-legacy/standard-actions.md#action-padding) - [`header/padding`](../WritePro/user-legacy/standard-actions.md#action-padding) - [`footer/padding`](../WritePro/user-legacy/standard-actions.md#action-padding) - [`cell/padding`](../WritePro/user-legacy/standard-actions.md#action-padding) - [`column/padding`](../WritePro/user-legacy/standard-actions.md#action-padding) - [`doc/backgroundColor`](../WritePro/user-legacy/standard-actions.md#action-backgroundcolor) - [`paragraph/backgroundColor`](../WritePro/user-legacy/standard-actions.md#action-backgroundcolor) - [`image/backgroundColor`](../WritePro/user-legacy/standard-actions.md#action-backgroundcolor) - [`section/backgroundColor`](../WritePro/user-legacy/standard-actions.md#action-backgroundcolor) - [`header/backgroundColor`](../WritePro/user-legacy/standard-actions.md#action-backgroundcolor) - [`footer/backgroundColor`](../WritePro/user-legacy/standard-actions.md#action-backgroundcolor) - [`table/backgroundColor`](../WritePro/user-legacy/standard-actions.md#action-backgroundcolor) - [`row/backgroundColor`](../WritePro/user-legacy/standard-actions.md#action-backgroundcolor) - [`cell/backgroundColor`](../WritePro/user-legacy/standard-actions.md#action-backgroundcolor) - [`column/backgroundColor`](../WritePro/user-legacy/standard-actions.md#action-backgroundcolor) - [`backgroundPositionH`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionh) - [`doc/backgroundPositionH`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionh) - [`paragraph/backgroundPositionH`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionh) - [`image/backgroundPositionH`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionh) - [`section/backgroundPositionH`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionh) - [`header/backgroundPositionH`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionh) - [`footer/backgroundPositionH`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionh) - [`table/backgroundPositionH`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionh) - [`row/backgroundPositionH`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionh) - [`cell/backgroundPositionH`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionh) - [`column/backgroundPositionH`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionh) - [`backgroundPositionV`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionv) - [`doc/backgroundPositionV`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionv) - [`paragraph/backgroundPositionV`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionv) - [`image/backgroundPositionV`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionv) - [`section/backgroundPositionV`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionv) - [`header/backgroundPositionV`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionv) - [`footer/backgroundPositionV`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionv) - [`table/backgroundPositionV`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionv) - [`row/backgroundPositionV`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionv) - [`cell/backgroundPositionV`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionv) - [`column/backgroundPositionV`](../WritePro/user-legacy/standard-actions.md#action-backgroundpositionv) - [`backgroundRepeat`](../WritePro/user-legacy/standard-actions.md#action-backgroundrepeat) - [`doc/backgroundRepeat`](../WritePro/user-legacy/standard-actions.md#action-backgroundrepeat) - [`paragraph/backgroundRepeat`](../WritePro/user-legacy/standard-actions.md#action-backgroundrepeat) - [`image/backgroundRepeat`](../WritePro/user-legacy/standard-actions.md#action-backgroundrepeat) - [`section/backgroundRepeat`](../WritePro/user-legacy/standard-actions.md#action-backgroundrepeat) - [`header/backgroundRepeat`](../WritePro/user-legacy/standard-actions.md#action-backgroundrepeat) - [`footer/backgroundRepeat`](../WritePro/user-legacy/standard-actions.md#action-backgroundrepeat) - [`table/backgroundRepeat`](../WritePro/user-legacy/standard-actions.md#action-backgroundrepeat) - [`row/backgroundRepeat`](../WritePro/user-legacy/standard-actions.md#action-backgroundrepeat) - [`cell/backgroundRepeat`](../WritePro/user-legacy/standard-actions.md#action-backgroundrepeat) - [`column/backgroundRepeat`](../WritePro/user-legacy/standard-actions.md#action-backgroundrepeat) - [`backgroundClip`](../WritePro/user-legacy/standard-actions.md#action-backgroundclip) - [`doc/backgroundClip`](../WritePro/user-legacy/standard-actions.md#action-backgroundclip) - [`paragraph/backgroundClip`](../WritePro/user-legacy/standard-actions.md#action-backgroundclip) - [`image/backgroundClip`](../WritePro/user-legacy/standard-actions.md#action-backgroundclip) - [`section/backgroundClip`](../WritePro/user-legacy/standard-actions.md#action-backgroundclip) - [`header/backgroundClip`](../WritePro/user-legacy/standard-actions.md#action-backgroundclip) - [`table/backgroundClip`](../WritePro/user-legacy/standard-actions.md#action-backgroundclip) - [`row/backgroundClip`](../WritePro/user-legacy/standard-actions.md#action-backgroundclip) - [`cell/backgroundClip`](../WritePro/user-legacy/standard-actions.md#action-backgroundclip) - [`column/backgroundClip`](../WritePro/user-legacy/standard-actions.md#action-backgroundclip) - [`backgroundOrigin`](../WritePro/user-legacy/standard-actions.md#action-backgroundorigin) - [`doc/backgroundOrigin`](../WritePro/user-legacy/standard-actions.md#action-backgroundorigin) - [`paragraph/backgroundOrigin`](../WritePro/user-legacy/standard-actions.md#action-backgroundorigin) - [`image/backgroundOrigin`](../WritePro/user-legacy/standard-actions.md#action-backgroundorigin) - [`section/backgroundOrigin`](../WritePro/user-legacy/standard-actions.md#action-backgroundorigin) - [`header/backgroundOrigin`](../WritePro/user-legacy/standard-actions.md#action-backgroundorigin) - [`footer/backgroundOrigin`](../WritePro/user-legacy/standard-actions.md#action-backgroundorigin) - [`table/backgroundOrigin`](../WritePro/user-legacy/standard-actions.md#action-backgroundorigin) - [`row/backgroundOrigin`](../WritePro/user-legacy/standard-actions.md#action-backgroundorigin) - [`cell/backgroundOrigin`](../WritePro/user-legacy/standard-actions.md#action-backgroundorigin) - [`column/backgroundOrigin`](../WritePro/user-legacy/standard-actions.md#action-backgroundorigin) - [`backgroundSizeH`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizeh) - [`doc/backgroundSizeH`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizeh) - [`paragraph/backgroundSizeH`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizeh) - [`image/backgroundSizeH`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizeh) - [`section/backgroundSizeH`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizeh) - [`header/backgroundSizeH`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizeh) - [`footer/backgroundSizeH`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizeh) - [`table/backgroundSizeH`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizeh) - [`row/backgroundSizeH`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizeh) - [`cell/backgroundSizeH`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizeh) - [`column/backgroundSizeH`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizeh) - [`backgroundSizeV`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizev) - [`doc/backgroundSizeV`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizev) - [`paragraph/backgroundSizeV`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizev) - [`image/backgroundSizeV`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizev) - [`section/backgroundSizeV`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizev) - [`header/backgroundSizeV`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizev) - [`footer/backgroundSizeV`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizev) - [`table/backgroundSizeV`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizev) - [`row/backgroundSizeV`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizev) - [`cell/backgroundSizeV`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizev) - [`column/backgroundSizev`](../WritePro/user-legacy/standard-actions.md#action-backgroundsizev) - [`borderStyle`](../WritePro/user-legacy/standard-actions.md#action-borderstyle) - [`doc/borderStyle`](../WritePro/user-legacy/standard-actions.md#action-borderstyle) - [`paragraph/borderStyle`](../WritePro/user-legacy/standard-actions.md#action-borderstyle) - [`paragraph/inside/borderStyle`](../WritePro/user-legacy/standard-actions.md#action-borderstyle) - [`paragraph/outside/borderStyle`](../WritePro/user-legacy/standard-actions.md#action-borderstyle) - [`image/borderStyle`](../WritePro/user-legacy/standard-actions.md#action-borderstyle) - [`section/borderStyle`](../WritePro/user-legacy/standard-actions.md#action-borderstyle) - [`header/borderStyle`](../WritePro/user-legacy/standard-actions.md#action-borderstyle) - [`footer/borderStyle`](../WritePro/user-legacy/standard-actions.md#action-borderstyle) - [`table/borderStyle`](../WritePro/user-legacy/standard-actions.md#action-borderstyle) - [`row/borderStyle`](../WritePro/user-legacy/standard-actions.md#action-borderstyle) - [`cell/borderStyle`](../WritePro/user-legacy/standard-actions.md#action-borderstyle) - [`column/borderStyle`](../WritePro/user-legacy/standard-actions.md#action-borderstyle) - [`borderColor`](../WritePro/user-legacy/standard-actions.md#action-bordercolor) - [`doc/borderColor`](../WritePro/user-legacy/standard-actions.md#action-bordercolor) - [`paragraph/borderColor`](../WritePro/user-legacy/standard-actions.md#action-bordercolor) - [`paragraph/inside/borderColor`](../WritePro/user-legacy/standard-actions.md#action-bordercolor) - [`paragraph/outside/borderColor`](../WritePro/user-legacy/standard-actions.md#action-bordercolor) - [`image/borderColor`](../WritePro/user-legacy/standard-actions.md#action-bordercolor) - [`section/borderColor`](../WritePro/user-legacy/standard-actions.md#action-bordercolor) - [`header/borderColor`](../WritePro/user-legacy/standard-actions.md#action-bordercolor) - [`footer/borderColor`](../WritePro/user-legacy/standard-actions.md#action-bordercolor) - [`table/borderColor`](../WritePro/user-legacy/standard-actions.md#action-bordercolor) - [`row/borderColor`](../WritePro/user-legacy/standard-actions.md#action-bordercolor) - [`cell/borderColor`](../WritePro/user-legacy/standard-actions.md#action-bordercolor) - [`column/borderColor`](../WritePro/user-legacy/standard-actions.md#action-bordercolor) - [`borderWidth`](../WritePro/user-legacy/standard-actions.md#action-borderwidth)- [`doc/borderWidth`](../WritePro/user-legacy/standard-actions.md#action-borderwidth) - [`paragraph/borderWidth`](../WritePro/user-legacy/standard-actions.md#action-borderwidth) - [`paragraph/inside/borderWidth`](../WritePro/user-legacy/standard-actions.md#action-borderwidth) - [`paragraph/outside/borderWidth`](../WritePro/user-legacy/standard-actions.md#action-borderwidth) - [`image/borderWidth`](../WritePro/user-legacy/standard-actions.md#action-borderwidth) - [`section/borderWidth`](../WritePro/user-legacy/standard-actions.md#action-borderwidth) - [`header/borderWidth`](../WritePro/user-legacy/standard-actions.md#action-borderwidth) - [`footer/borderWidth`](../WritePro/user-legacy/standard-actions.md#action-borderwidth) - [`table/borderWidth`](../WritePro/user-legacy/standard-actions.md#action-borderwidth) - [`row/borderWidth`](../WritePro/user-legacy/standard-actions.md#action-borderwidth) - [`cell/borderWidth`](../WritePro/user-legacy/standard-actions.md#action-borderwidth) - [`column/borderWidth`](../WritePro/user-legacy/standard-actions.md#action-borderwidth) - [`borderRadius`](../WritePro/user-legacy/standard-actions.md#action-borderradius) - [`doc/borderRadius`](../WritePro/user-legacy/standard-actions.md#action-borderradius) - [`paragraph/borderRadius`](../WritePro/user-legacy/standard-actions.md#action-borderradius) - [`image/borderRadius`](../WritePro/user-legacy/standard-actions.md#action-borderradius) - [`section/borderRadius`](../WritePro/user-legacy/standard-actions.md#action-borderradius) - [`header/borderRadius`](../WritePro/user-legacy/standard-actions.md#action-borderradius) - [`footer/borderRadius`](../WritePro/user-legacy/standard-actions.md#action-borderradius) - [`direction`](../WritePro/user-legacy/standard-actions.md#action-direction) - [`textAlign`](../WritePro/user-legacy/standard-actions.md#action-textalign) - [`lineHeight`](../WritePro/user-legacy/standard-actions.md#action-lineheight) - [`listStyleType`](../WritePro/user-legacy/standard-actions.md#action-liststyletype) - [`listStartNumber`](../WritePro/user-legacy/standard-actions.md#action-liststartnumber) - [`listNumberFormat`](../WritePro/user-legacy/standard-actions.md#action-listnumberformat) - [`textIndent`](../WritePro/user-legacy/standard-actions.md#action-textindent) - [`verticalAlign`](../WritePro/user-legacy/standard-actions.md#action-verticalalign) - [`image/verticalAlign`](../WritePro/user-legacy/standard-actions.md#action-image-verticalalign) - [`cell/verticalAlign`](../WritePro/user-legacy/standard-actions.md#action-verticalalign) - [`column/verticalAlign`](../WritePro/user-legacy/standard-actions.md#action-verticalalign) - [`tableAlign`](../WritePro/user-legacy/standard-actions.md#action-tablealign) - [`table/tableAlign`](../WritePro/user-legacy/standard-actions.md#action-tablealign) - [`emptyDatasource`](../WritePro/user-legacy/standard-actions.md#action-emptydatasource) - [`table/emptyDatasource`](../WritePro/user-legacy/standard-actions.md#action-emptydatasource) - [`styleSheet`](../WritePro/user-legacy/standard-actions.md#action-stylesheet) - [`paragraph/styleSheet`](../WritePro/user-legacy/standard-actions.md#action-stylesheet) - [`image/styleSheet`](../WritePro/user-legacy/standard-actions.md#action-stylesheet) - [`newLineStyleSheet`](../WritePro/user-legacy/standard-actions.md#action-newlinestylesheet) - [`anchorLayout`](../WritePro/user-legacy/standard-actions.md#action-anchorlayout) - [`anchorHorizontalAlign`](../WritePro/user-legacy/standard-actions.md#action-anchorhorizontalalign) - [`anchorVerticalAlign`](../WritePro/user-legacy/standard-actions.md#action-anchorverticalalign) - [`anchorOrigin`](../WritePro/user-legacy/standard-actions.md#action-anchororigin) - [`anchorSection`](../WritePro/user-legacy/standard-actions.md#action-anchorsection) - [`anchorPage`](../WritePro/user-legacy/standard-actions.md#action-anchorpage) - [`image/displayMode`](../WritePro/user-legacy/standard-actions.md#action-image-displaymode) - [`backgroundDisplayMode`](../WritePro/user-legacy/standard-actions.md#action-backgrounddisplaymode) - [`doc/backgroundDisplayMode`](../WritePro/user-legacy/standard-actions.md#action-backgrounddisplaymode) - [`paragraph/backgroundDisplayMode`](../WritePro/user-legacy/standard-actions.md#action-backgrounddisplaymode) - [`image/backgroundDisplayMode`](../WritePro/user-legacy/standard-actions.md#action-backgrounddisplaymode) - [`section/backgroundDisplayMode`](../WritePro/user-legacy/standard-actions.md#action-backgrounddisplaymode) - [`header/backgroundDisplayMode`](../WritePro/user-legacy/standard-actions.md#action-backgrounddisplaymode) - [`footer/backgroundDisplayMode`](../WritePro/user-legacy/standard-actions.md#action-backgrounddisplaymode) - [`table/backgroundDisplayMode`](../WritePro/user-legacy/standard-actions.md#action-backgrounddisplaymode) - [`row/backgroundDisplayMode`](../WritePro/user-legacy/standard-actions.md#action-backgrounddisplaymode) - [`cell/backgroundDisplayMode`](../WritePro/user-legacy/standard-actions.md#action-backgrounddisplaymode) - [`column/backgroundDisplayMode`](../WritePro/user-legacy/standard-actions.md#action-backgrounddisplaymode) - [`formulaHighlight`](../WritePro/user-legacy/standard-actions.md#action-formulahighlight) - [`formulaHighlightColor`](../WritePro/user-legacy/standard-actions.md#action-formulahighlightcolor) - [`headerRowCount`](../WritePro/user-legacy/standard-actions.md#action-headerrowcount)

:::note

Pour les listes à mise en forme automatique, consultez la section [Utilisation d'une action standard](#using-a-standard-action) afin de connaître les exigences relatives à la zone cible et au focus, ainsi que les restrictions concernant les listes déroulantes hiérarchiques. Les exigences relatives à la zone cible et au focus pour la mise en forme du texte ne s'appliquent pas à `gotoPage`.

Les actions associées aux éléments individuels de la liste de sélection sont distinctes de l'action associée à la liste déroulante.

:::

Voir le [tableau de compatibilité des actions standard](../Desktop-legacy/standard-actions.md#supported-form-objects).

## Propriétés prises en charge

[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Data Type (expression type)](properties_DataSource.md#data-type-expression-type) - [Data Type (list)](properties_DataSource.md#data-type-list) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Not rendered](properties_Display.md#not-rendered) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Standard action](properties_Action.md#standard-action) - [Save value](properties_Object.md#save-value) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Événements pris en charge

[On After Edit](../Events/onAfterEdit.md) - [On After Keystroke](../Events/onAfterKeystroke.md) - [On Before Keystroke](../Events/onBeforeKeystroke.md) - [On Begin Drag Over](../Events/onBeginDragOver.md) - [On Clicked](../Events/onClicked.md) - [On Data Change](../Events/onDataChange.md) - [On Drag Over](../Events/onDragOver.md) - [On Drop](../Events/onDrop.md) - [On Header](../Events/onHeader.md) - [On Load](../Events/onLoad.md) - [On Mouse Enter](../Events/onMouseEnter.md) - [On Mouse Leave](../Events/onMouseLeave.md) - [On Mouse Move](../Events/onMouseMove.md) - [On Printing Break](../Events/onPrintingBreak.md) - [On Printing Detail](../Events/onPrintingDetail.md) - [On Printing Footer](../Events/onPrintingFooter.md) - [On Unload](../Events/onUnload.md) - [On Validate](../Events/onValidate.md)

