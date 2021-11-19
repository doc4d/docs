---
id: formulas
title: Formules et fonctions
---
   
## Utilisation des formules

Une formule de feuille de calcul est une expression qui calcule la valeur d'une cellule.

### Saisie des formules

Pour saisir une formule dans une zone de 4D View Pro :

1.  Sélectionnez la cellule dans laquelle vous allez saisir la formule ou la fonction.
2.  Saisissez = (le signe égal).
3.  Tapez la formule et appuyez sur la touche **Entrée**.

Lorsque vous écrivez une formule, vous pouvez utiliser différents raccourcis :

- cliquez sur une cellule pour entrer sa référence dans la formule :

![](assets/en/ViewPro/formulas.PNG)

- tapez la première lettre d'une fonction à saisir. Un menu contextuel listant les fonctions et références disponibles apparaît, pour vous permettre de sélectionner les éléments souhaités :

![](assets/en/ViewPro/formula2.PNG)

Vous pouvez également créer des formules nommées qui peuvent être appelées via leur nom. Pour ce faire, saisissez ces formules à l'aide de la commande [VP ADD FORMULA NAME](method-list.md#vp-add-formula-name).

### Opérateurs et opérandes

Toutes les formules ont des opérandes et des opérateurs :

*   **Opérateurs** : voir [Valeurs et opérateurs](#values-and-operators) ci-dessous.
*   Les **opérandes** comprennent plusieurs catégories :
    *   Les [valeurs](#values-and-operators) (5 types de données sont pris en charge)
    *   Les [références](#cell-references) à d'autres cellules (relatives, absolues, mixtes ou par nom)
    *   [fonctions standard de tableur](#using-functions)
    *   Les [fonctions 4D](#4d-functions) basées sur des formules 4D et donnant accès à des variables, champs, méthodes, commandes ou expressions 4D.

## Valeurs et opérateurs

4D View Pro prend en charge cinq types de données. Pour chaque type de données, des valeurs littérales et des opérateurs spécifiques sont pris en charge.

| Types de données                  | Valeurs                                            | Opérateurs                                                                                                                                                                                                                                                  |
| --------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Nombre](Concepts/dt_number.md)   | 1.2<br>1.2 E3<br>1.2E-3<br>10.3x | + (addition)<br>- (soustraction)<br>* (multiplication)<br>/ (division)<br>^ (exposant, le nombre de fois qu'il faut multiplier un nombre par lui-même)<br>% (pourcentage -- diviser par cent le nombre précédant l'opérateur) |
| [Date](Concepts/dt_date.md)       | 10/24/2017                                         | + (date + nombre de jours -> date)<br>+ (date + heure -> date + heure)<br>- (date - nombre de jours -> date)<br>- (date - date -> nombre de jours entre les deux)                                                                         |
| [Heure](Concepts/dt_time.md)      | 10:12:10                                           | Opérateurs sur les durées :<p>+ (addition)<br>- (soustraction)<br>* (durée * nombre -> durée)<br>/ (durée/ nombre-> durée)                                                                                       |
| [Chaine](Concepts/dt_string.md)   | 'Sophie' ou "Sophie"                               | & (concaténation)                                                                                                                                                                                                                                           |
| [Booléen](Concepts/dt_boolean.md) | TRUE ou FALSE                                      | -                                                                                                                                                                                                                                                           |


### Opérateurs de comparaison

Les opérateurs suivants peuvent être utilisés avec deux opérandes de même type :

| Opérateur | Comparison          |
| --------- | ------------------- |
| =         | est égal à          |
| <>        | est différent de    |
| >         | supérieur à         |
| <         | inférieur à         |
| >=        | supérieur ou égal à |
| <=        | inférieur ou égal à |


### Préséance des opérateurs

Liste des opérateurs, du plus important au moins important :

| Opérateur       | Description                 |
| --------------- | --------------------------- |
| ()              | Parenthèse (pour regrouper) |
| -               | Négatif                     |
| +               | Plus                        |
| %               | Pourcentage                 |
| ^               | Exposant                    |
| * et /          | Multiplier et diviser       |
| + et -          | Ajouter et soustraire       |
| &               | Concaténer                  |
| =  > < >= <= <> | Comparer                    |




## Références de cellules

Les formules font souvent référence à d'autres cellules par des adresses de cellule. Vous pouvez copier ces formules dans d'autres cellules. Par exemple, la formule suivante, saisie dans la cellule C8, additionne les valeurs des deux cellules situées au-dessus et affiche le résultat.

```
= C6 + C7
```

Cette formule fait référence aux cellules C6 et C7. En d'autres termes, le logiciel 4D View Pro reçoit l'instruction de se référer à ces autres cellules pour trouver les valeurs à utiliser dans la formule.

Lorsque vous copiez ou déplacez ces formules vers de nouveaux emplacements, chaque adresse de cellule dans cette formule change ou reste la même, selon la façon dont elle est tapée.

*   Une référence qui change est appelée **référence relative** et fait référence à une cellule en fonction de sa distance à gauche/droite et en haut/bas par rapport à la cellule contenant la formule.
*   Une référence qui pointe toujours vers une cellule particulière est appelée **référence absolue**.
*   Vous pouvez également créer une référence mixte qui pointe toujours vers une ligne ou une colonne fixe.



### Notation des références

Si vous utilisez uniquement des coordonnées de cellule, telle qu'une cellule `C5` par exemple, 4D View Pro interprète la référence comme étant relative. Vous pouvez faire de la référence une référence absolue en précédant la lettre et le chiffre du signe dollar, comme dans `$C$5`.

Vous pouvez combiner les références absolues et relatives en insérant un signe dollar devant la lettre ou le chiffre seul, par exemple, `$C5` ou `C$5`. Une référence mixte vous permet de spécifier la ligne ou la colonne comme absolue, tout en permettant à l'autre partie de l'adresse de se référer de manière relative.

Un moyen pratique, rapide et précis de spécifier une référence absolue consiste à nommer la cellule et à utiliser ce nom à la place de l'adresse de la cellule. Une référence à une cellule nommée est toujours absolue. Vous pouvez créer ou modifier des cellules ou des plages de cellules nommées à l'aide de la méthode [`VP ADD RANGE NAME`](method-list.md#vp-add-range-name).

Le tableau suivant montre l'effet des différentes notations :

| Exemple        | Type de référence | Description                                                                                                                                                                          |
| -------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| C5             | Relative          | La référence concerne l'emplacement relatif de la cellule C5, en fonction de l'emplacement de la cellule dans laquelle la référence est utilisée pour la première fois               |
| $C$5           | Absolue           | La référence est absolue. Elle fait toujours référence à la cellule C5, quel que soit l'endroit où elle est utilisée.                                                                |
| $C5            | Mixed             | La référence est toujours faite à la colonne C, mais la référence de ligne est relative à l'emplacement de la cellule dans laquelle la référence est utilisée pour la première fois. |
| C$5            | Mixed             | La référence est toujours la ligne 5, mais la référence de la colonne est relative à l'emplacement de la cellule dans laquelle la référence est utilisée pour la première fois       |
| Nom de cellule | Absolue           | La référence est absolue. Elle fait toujours référence à la [cellule ou à la plage nommée](method-list.md#vp-add-range-name), quel que soit l'endroit où la référence est utilisée.  |



## Fonctions intégrées

Les fonctions de tableur sont des formules prédéfinies utilisées pour calculer les valeurs des cellules. Lorsque vous tapez la première lettre de la fonction à saisir, un menu contextuel répertoriant les fonctions et références disponibles apparaît, vous permettant de sélectionner les éléments souhaités :

![](assets/en/ViewPro/vpFormula2.PNG)

Consultez la [**liste étendue des fonctions de SpreadJS**](https://www.grapecity.com/spreadjs/docs/v14/online/FormulaFunctions.html) pour obtenir des détails et des exemples.


## Fonctions 4D

4D View Pro vous permet de définir et d'appeler **des fonctions 4D personnalisées**, qui exécutent des [formules 4D](API/FunctionClass.md). L'utilisation de fonctions personnalisées 4D étend les possibilités de vos documents 4D View Pro et permet des interactions avancées avec la base de données 4D.

Les fonctions personnalisées 4D permettent d'accéder, à partir de vos formules 4D View Pro :

- aux variables process 4D,
- aux champs,
- aux méthodes projet,
- aux commandes de langage 4D,
- ou à toute autre expression 4D valide.

Les fonctions personnalisées 4D peuvent recevoir des [paramètres](#parameters) de la zone 4D View Pro, et retourner des valeurs.

Déclarez toutes vos fonctions à l'aide de la méthode [`VP SET CUSTOM FUNCTIONS`](method-list.md#vp-set-custom-functions). Voici quelques exemples :

```4d
o:=New object

//Nom de la fonction dans 4D View Pro : "DRIVERS_LICENCE"
$o.DRIVERS_LICENCE:=New object

/variable process
$o.DRIVERS_LICENCE.formula:=Formula(DriverLicence)

//champ table
$o.DRIVERS_LICENCE.formula:=Formula([Users]DriverLicence)

//méthode projet
$o.DRIVERS_LICENCE.formula:=Formula(DriverLicenceState)

//Commande 4D
$o.DRIVERS_LICENCE:=Formula(Choose(DriverLicence; "Obtained"; "Failed"))

//expression et paramètre 4D 
$o.DRIVERS_LICENCE.formula:=Formula(ds.Users.get($1).DriverLicence)
$o.DRIVERS_LICENCE.parameters:=New collection
$o.DRIVERS_LICENCE.parameters.push(New object("name"; "ID"; "type"; Is longint))
```

> **Voir également** [4D View Pro : Utilisation des formules 4D dans votre feuille de calcul (article de blog)](https://blog.4d.com/4d-view-pro-use-4d-formulas-in-your-spreadsheet/)


### Exemple avec Hello World

Nous souhaitons imprimer "Hello World" dans une cellule de la zone 4D View Pro en utilisant une méthode projet 4D :

1.  Créez une méthode projet "myMethod" avec le code suivant :

```4d
 #DECLARE->$hw Text
 $hw:="Hello World"

```

2.  Exécutez le code suivant avant d'ouvrir tout formulaire contenant une zone 4D View Pro :

```4d
  Case of
    :(Form event code=On Load)
       var $o : Object
       $o:=New object
  // Définir la fonction "vpHello" à partir de la méthode "myMethod"
       $o.vpHello:=New object
       $o.vpHello.formula:=Formula(myMethod)
       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)
 End case
```

3.  Modifiez le contenu d'une cellule dans une zone 4D View Pro et saisissez :

    ![](assets/en/ViewPro/vpProjMeth1.PNG)

    "myMethod" est alors appelé par 4D et la cellule s'affiche :

    ![](assets/en/ViewPro/vpProjMeth2.PNG)



### Paramètres

Les paramètres peuvent être passés aux fonctions 4D qui appellent les méthodes projet en utilisant la syntaxe suivante :

```
=METHODNAME(param1,param2,...,paramN)
```

These parameters are received in *methodName* in $1, $2...$N.

Note that the ( ) are mandatory, even if no parameters are passed:

```
=METHODWITHOUTNAME()
```

You can declare the name, type, and number of parameters through the *parameters* collection of the function you declared using the [VP SET CUSTOM FUNCTIONS](method-list.md#vp-set-custom-functions) method. Optionally, you can control the number of parameters passed by the user through *minParams* and *maxParams* properties.

For more information on supported incoming parameter types, please refer to the [VP SET CUSTOM FUNCTIONS](method-list.md#vp-set-custom-functions) method description.

> If you do not declare parameters, values can be sequentially passed to methods (they will be received in $1, $2...) and their type will be automatically converted. Dates in *jstype* will be passed as [object](Concepts/dt_object.md) in 4D code with two properties:   
> |Property|    Type|   Description| |---|---|---| |value|   Date|   Date value| |time |Real|  Time in seconds|

4D project methods can also return values in the 4D View Pro cell formula via $0. The following data types are supported for returned parameters:

* [text](Concepts/dt_string.md) (converted to string in 4D View Pro)
* [real](Concepts/dt_number.md)/[longint](Concepts/dt_number.md) (converted to number in 4D View Pro)
* [date](Concepts/dt_date.md) (converted to JS Date type in 4D View Pro - hour, minute, sec = 0)
* [time](Concepts/dt_time.md) (converted to JS Date type in 4D View Pro - date in base date, i.e. 12/30/1899)
* [boolean](Concepts/dt_boolean.md) (converted to bool in 4D View Pro)
* [picture](Concepts/dt_picture.md) (jpg,png,gif,bmp,svg other types converted into png) creates a URI (data:image/png;base64,xxxx) and then used as the background in 4D View Pro in the cell where the formula is executed
* [object](Concepts/dt_object.md) with the following two properties (allowing passing a date and time):

    | Propriété | Type | Description     |
    | --------- | ---- | --------------- |
    | value     | Date | Valeur date     |
    | time      | Réel | Time in seconds |

If the 4D method returns nothing, an empty string is automatically returned.

An error is returned in the 4D View Pro cell if:

*   the 4D method returns another type other than those listed above,
*   an error occurred during 4D method execution (when user clicks on "abort" button).

#### Exemple

```4d
var $o : Object

$o.BIRTH_INFORMATION:=New object
$o.BIRTH_INFORMATION.formula:=Formula(BirthInformation)
$o.BIRTH_INFORMATION.parameters:=New collection
$o.BIRTH_INFORMATION.parameters.push(New object("name";"First name";"type";Is text))
$o.BIRTH_INFORMATION.parameters.push(New object("name";"Birthday";"type";Is date))
$o.BIRTH_INFORMATION.parameters.push(New object("name";"Time of birth";"type";Is time))
$o.BIRTH_INFORMATION.summary:="Returns a formatted string from given information"

VP SET CUSTOM FUNCTIONS("ViewProArea"; $o)
```

![](assets/en/ViewPro/params.PNG)


## Compatibility

Alternate solutions are available to declare fields or methods as functions in your 4D View Pro areas. These solutions are maintained for compatibility reasons and can be used in specific cases. However, using the [`VP SET CUSTOM FUNCTIONS`](method-list.md#vp-set-custom-functions) method is recommended.

### Referencing fields using the virtual structure


4D View Pro allows you to reference 4D fields using the virtual structure of the database, i.e. declared through the [`SET TABLE TITLES`](https://doc.4d.com/4dv19/help/command/en/page601.html) and/or [`SET FIELD TITLES`](https://doc.4d.com/4dv19/help/command/en/page602.html) commands with the \* parameter. This alternate solution could be useful if your application already relies on a virtual structure (otherwise, [using `VP SET CUSTOM FUNCTIONS`](#4d-functions) is recommended).

> **WARNING:** You cannot use the virtual structure and `VP SET CUSTOM FUNCTIONS` simultaneously. As soon as `VP SET CUSTOM FUNCTIONS` is called, the functions based upon `SET TABLE TITLES` and `SET FIELD TITLES` commands are ignored in the 4D View Pro area.

#### Pré-requis

*   The field must belong to the virtual structure of the database, i.e. it must be declared through the [`SET TABLE TITLES`](https://doc.4d.com/4dv19/help/command/en/page601.html) and/or [`SET FIELD TITLES`](https://doc.4d.com/4dv19/help/command/en/page602.html) commands with the \* parameter (see example),
*   Table and field names must be ECMA compliant (see [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)),
*   The field type must be supported by 4D View Pro (see above).

An error is returned in the 4D View Pro cell if the formula calls a field which is not compliant.

#### Calling a virtual field in a formula

To insert a reference to a virtual field in a formula, enter the field with the following syntax:

```
TABLENAME_FIELDNAME()
```

For example, if you declared the "Name" field of the "People" table in the virtual structure, you can call the following functions:

```
=PEOPLE_NAME()
=LEN(PEOPLE_NAME())
```

> If a field has the same name as a [4D method], it takes priority over the method.

#### Exemple

We want to print the name of a person in a 4D View Pro area cell using a 4D virtual field:

1.  Create an "Employee" table with a "L_Name" field:

![](assets/en/ViewPro/vpFieldMeth1.PNG)


2.  Execute the following code to initialize a virtual structure:

    ```4d
    ARRAY TEXT($tableTitles;1)
    ARRAY LONGINT($tableNum;1)
    $tableTitles{1}:="Emp"
    $tableNum{1}:=2
    SET TABLE TITLES($tableTitles;$tableNum;*)

    ARRAY TEXT($fieldTitles;1)
    ARRAY LONGINT($fieldNum;1)
    $fieldTitles{1}:="Name"
    $fieldNum{1}:=2 //last name
    SET FIELD TITLES([Employee];$fieldTitles;$fieldNum;*)
    ```

3.  Edit the content of a cell in the 4D View Pro area and enter "=e":

![](assets/en/ViewPro/vpFieldMeth2.PNG)


4.  Select EMP_NAME (use the Tab key) and enter the closing ).

![](assets/en/ViewPro/vpFieldMeth3.PNG)


5.  Validate the field to display the name of the current employee:

![](assets/en/ViewPro/vpFieldMeth4.PNG)
> The \[Employee] table must have a current record.


### Declaring allowed methods

You can call directly 4D project methods from within your 4D View Pro formulas. For security reasons, you must declare explicitly methods that can be called by the user with the [VP SET ALLOWED METHODS](method-list.md#vp-set-allowed-methods) method.


#### Pré-requis

To be called in a 4D View Pro formula, a project method must be:

*   **Allowed**: it was explicitly declared using the [VP SET ALLOWED METHODS](method-list.md#vp-set-allowed-methods) method.
*   **Runnable**: it belongs to the host project or a loaded component with the "Shared by components and host project" option enabled (see [Sharing of project methods](../Concepts/components.md#sharing-of-project-methods)).
*   **Not in conflict** with an existing 4D View Pro spreadsheet function: if you call a project method with the same name as a 4D View Pro built-in function, the function is called.
> If neither the [VP SET CUSTOM FUNCTIONS](method-list.md#vp-set-custom-functions) nor the [VP SET ALLOWED METHODS](method-list.md#vp-set-allowed-methods) method has been executed during the session, 4D View Pro custom functions rely on allowed methods defined by 4D's generic `SET ALLOWED METHODS` command. In this case, the project method names must comply with JavaScript Identifier Grammar (see [ECMA Script standard](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)). The global filtering option in the Settings dialog box (see *Data Access*) is ignored in all cases.

