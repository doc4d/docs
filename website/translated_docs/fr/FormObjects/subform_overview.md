---
id: subformOverview
title: Sous-formulaire
---


Un sous-formulaire est un formulaire inclus dans un autre formulaire.


## Terminologie

Afin de bien définir les notions mises en oeuvre avec les sous-formulaires, voici quelques définitions relatives aux termes employés :

*   **Subform**: a form intended for inclusion in another form, itself called the parent form.
*   **Parent form**: a form containing one or more subform(s).
*   **Subform container**: an object included in the parent form, displaying an instance of the subform.
*   **Subform instance**: the representation of a subform in a parent form. Cette notion est importante car il est possible d’afficher plusieurs instances d’un même sous-formulaire dans un formulaire parent.
*   **List form**: instance of subform displayed as a list.
*   **Detail form**: page-type input form associated with a list-type subform that can be accessed by double-clicking in the list.


## Sous-formulaires en liste

Un sous-formulaire en liste vous permet de saisir, visualiser et modifier des données dans d’autres tables. Les sous-formulaires en liste sont généralement utilisés avec les bases de données utilisant des liens de type 1 vers N. Un sous-formulaire en liste affiche les enregistrements de la table N liée par un lien automatique de type 1 vers N. Vous pouvez disposer de plusieurs sous-formulaires provenant de différentes tables dans le même formulaire. En revanche, il n’est pas possible de placer deux sous-formulaires appartenant à la même table dans une même page de formulaire.

Par exemple, une base de gestion de contacts peut utiliser une instance de sous-formulaire en liste pour afficher tous les contacts d’une société. Bien que les contacts apparaissent dans l’écran général, l’information est en fait stockée dans la table liée. A l’aide d’un lien 1 vers N, la conception de cette base de données rend facile le stockage d’un nombre illimité de contacts pour chacune des sociétés. Avec des liens automatiques, vous pouvez permettre la saisie de données dans la table liée sans programmation.

Bien que les sous-formulaires en liste soient généralement associés aux tables N, une instance de sous-formulaire peut afficher des enregistrements de toute autre table de la base de données.

Vous pouvez également permettre à l’utilisateur de saisir des données dans le formulaire liste. Suivant la configuration du sous-formulaire, l’utilisateur pourra afficher le formulaire détaillé en double-cliquant sur un sous-enregistrement ou en utilisant les commandes d’ajout et de modification des sous-enregistrements.

> 4D propose trois actions standard, permettant de répondre aux besoins élémentaires de gestion des sous-enregistrements : `Modifier sous-enregistrement`, `Supprimer sous-enregistrement` et `Ajouter sous-enregistrement`. Lorsque le formulaire comporte plusieurs instances de sous-formulaires, l’action s’applique au sous-formulaire ayant le focus.


## Sous-formulaires en page

Les sous-formulaires en mode page peuvent afficher des données relatives à l'enregistrement courant ou toute valeur pertinente en fonction du contexte (variables, images, etc.). Il peuvent également, et c'est là leur intérêt majeur, comporter des fonctionnalités avancées et interagir avec le formulaire parent (widgets). Les sous-formulaires en page bénéficient de propriétés et d'événements spécifiques, et peuvent être entièrement contrôlés par programmation.

Le sous-formulaire en page utilise le formulaire entrée désigné par la propriété [Formulaire détaillé](properties_Subform.md#detail-form). A la différence d’un sous-formulaire en mode liste, le formulaire utilisé peut provenir de la même table que le formulaire parent. Il est également possible d’utiliser un formulaire projet. En exécution, un sous-formulaire en mode page dispose des caractéristiques d’affichage standard d’un formulaire entrée.

> Les widgets 4D sont des objets composés prédéfinis. Pour plus de détails sur les widgets, consultez le manuel [4D Widgets](https://doc.4d.com/4Dv17R6/4D/17-R6/4D-Widgets.100-4465257.en.html).

### Utiliser l'objet associé au sous-formulaire

4D automatically binds a variable of type object to each subform. Le contenu de cet objet peut être lu et/ou modifié depuis le contexte du sous-formulaire, ce qui vous permet de partager des valeurs dans un contexte local.

The object can be created automatically or be the parent container's variable, if explicitely named and typed as Object (see below). This object is returned by the `Form` command, which can be called directly in the subform (using a pointer is useless in this case). Comme les objets sont toujours passés par référence, si l'utilisateur modifie une valeur de propriété dans le sous-formulaire, elle sera automatiquement mise à jour dans l'objet lui-même.

Par exemple, dans votre sous-formulaire, les libellés des champs sont stockés dans l'objet associé afin de vous permettre d'afficher différentes langues :

![](assets/en/FormObjects/subforms4.png)

You can modify the labels from the subform by assigning values to the *InvoiceAddress* object:

```4d
 C_OBJECT($lang)
 $lang:=New object
 If(<>lang="fr")
    $lang.CompanyName:="Société :"
    $lang.LastName:="Nom :"
 Else
    $lang.CompanyName:="Company:"
    $lang.LastName:="Name:"
 End if
 InvoiceAddress.Label:=$lang
```

![](assets/en/FormObjects/subforms5.png)

### Managing the bound variable or expression

The [variable or expression](properties_Object.md#variable-or-expression) bound to a page subform lets you link the parent form and subform contexts to put the finishing touches on sophisticated interfaces. Imaginons par exemple un sous-formulaire représentant une pendule dynamique, inséré dans un formulaire parent contenant une variable saisissable de type heure :

![](assets/en/FormObjects/subforms1.png)

Both objects (time variable and subform container) *have the same variable name or expression*. Dans ce cas, à l’ouverture du formulaire parent, les deux valeurs sont automatiquement synchronisées par 4D. Si la valeur de la variable est définie à plusieurs emplacements, la valeur utilisée sera celle qui aura été chargée en dernier lieu. L’ordre de chargement suivant est appliqué : 1-Méthodes objet du sous-formulaire 2-Méthode formulaire du sous-formulaire 3-Méthodes objet du formulaire parent 4-Méthode formulaire du formulaire parent

A l’exécution du formulaire parent, la synchronisation des variables doit être effectuée par le développeur à l’aide des événements formulaires adéquats. Deux types d’interactions peuvent se produire : du formulaire vers le sous-formulaire et inversement.

### Programmation inter-formulaires avancée
La communication entre le formulaire parent et les instances des sous-formulaires peut nécessiter d’aller au-delà de l’échange d’une valeur via la variable associée. En effet, vous pouvez souhaiter mettre à jour des variables dans les sous-formulaires en fonction d’actions effectuées dans le formulaire parent et inversement. Si l’on reprend l’exemple du sous-formulaire de type "pendule dynamique", on peut souhaiter définir une ou plusieurs heures d’alerte par pendule.

Pour répondre à ces besoins, 4D propose les mécanismes suivants :

- Use of the `OBJECT Get subform container value` and `OBJECT SET SUBFORM CONTAINER VALUE`
- Calling of a container object from the subform using the `CALL SUBFORM CONTAINER` command
- Execution of a method in the context of the subform via the `EXECUTE METHOD IN SUBFORM` command

#### Updating the contents of a subform

Case 1: The value of the parent form variable or expression is modified and this modification must be passed on to a subform. f In this example:
* `Form.parisTime` is an expression of type Time attached to the Input object and the subform container.
* `Form.parisTime` changes to 12:15:00, either because the user entered it, or because it was updated dynamically (via the `Current time` command for example). This triggers the On Bound Variable change from the subform's Form method, which updates the value of `Form.clockValue` in the subform:

![](assets/en/FormObjects/update-subform.png)

L’événement formulaire `Sur modif variable liée` est généré :

- as soon as a value is assigned to the variable of the parent form, even if the same value is reassigned
- si le sous-formulaire appartient à la page formulaire courante ou à la page 0.

Note that, as in the above example, it is preferable to use the `OBJECT Get subform container value` command which returns the value of the expression in the subform container rather than its variable because it is possible to insert several subforms in the same parent form (for example, a window displaying different time zones contains several clocks).

> In versions prior to v19 R5, you had to use the `OBJECT Get pointer` command to perform such operations.

#### Updating the contents of a parent form

Scénario 2 : Le contenu du sous-formulaire est modifié et cette modification doit être répercutée dans le formulaire parent.

Inside the subform, the button changes the value of the `Form.clockValue` expression of type Time attached to the clock object. This triggers the On Data Change event inside the clock object, which updates the `Form.parisTime` value in the main form:

![](assets/en/FormObjects/update-main-form.png)

Everytime the value of `Form.clockValue` changes in the subform, `Form.parisTime` in the subform container is also updated.

> In versions prior to v19 R5, you had to use the `OBJECT Get pointer` command to perform such operations.


#### OBJECT get pointer and Object get name commands
Outre le sélecteur `Objet conteneur sous formulaire`, la commande `OBJECT Get pointer` admet un paramètre permettant de préciser dans quel sous-formulaire chercher l’objet dont le nom est passé en deuxième paramètre. Cette syntaxe n’est utilisable que lorsque le sélecteur Objet nommé est passé.

Par exemple, l’instruction suivante :

```4d
 $ptr:=OBJECT Get pointer(Object named;"MyButton";"MySubForm")
```

... retrieves a pointer to the "MyButton" variable that is located in the "MySubForm" subform object. Cette syntaxe permet d’accéder depuis le formulaire parent à tout objet se trouvant dans un sous-formulaire. A noter également la commande `OBJECT Get name` qui permet de récupérer le nom de l’objet ayant le focus.

#### Commande CALL SUBFORM CONTAINER

La commande `CALL SUBFORM CONTAINER` permet à une instance de sous-formulaire d’envoyer un événement à l’objet conteneur du sous-formulaire, qui peut alors le traiter dans le contexte du formulaire parent. L’événement est reçu dans la méthode de l’objet conteneur. Il peut s’agir à l’origine de tout événement détecté par le sous-formulaire (clic, glisser-déposer, etc.).

Le code de l’événement est libre (par exemple, 20000 ou -100). Vous pouvez soit utiliser un code correspondant à un événement existant (par exemple, 3 pour `Sur validation`), soit utiliser un code personnalisé. Dans le premier cas, seuls les événements présents dans la liste des événements "cochables" des conteneurs de sous-formulaire peuvent être utilisés (cf. Liste des propriétés). Dans le second cas, le code ne doit correspondre à aucun événement formulaire existant. Il est conseillé d’utiliser une valeur négative pour avoir l’assurance que 4D n’utilisera pas ce code dans les versions futures.

Pour plus d'informations, reportez-vous à la description de la commande `CALL SUBFORM CONTAINER`.

#### Commande EXECUTE METHOD IN SUBFORM
La commande `EXECUTE METHOD IN SUBFORM` permet à un formulaire ou à l’un de ses objets de demander l’exécution d’une méthode dans le contexte de l’instance du sous-formulaire, ce qui lui donne accès aux variables, objets, etc., du sous-formulaire. Cette méthode peut en outre recevoir des paramètres.

Ce mécanisme est illustré dans le schéma suivant :

![](assets/en/FormObjects/subforms6.png)

Pour plus d'informations, reportez-vous à la description de la commande `EXECUTE METHOD IN SUBFORM`.

#### Commande GOTO OBJECT
La commande `GOTO OBJECT` peut rechercher l’objet de destination dans le formulaire parent même si elle exécutée depuis un sous-formulaire.



## Propriétés prises en charge

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Detail Form](properties_Subform.md#detail-form) - [Double click on empty row](properties_Subform.md#double-click-on-empty-row) - [Double click on row](properties_Subform.md#double-click-on-row) - [Enterable in list](properties_Subform.md#enterable-in-list) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Height](properties_CoordinatesAndSizing.md#height) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [List Form](properties_Subform.md#list-form) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Print Frame](properties_Print.md#print-frame) - [Right](properties_CoordinatesAndSizing.md#right) - [Selection mode](properties_Subform.md#selection-mode) - [Source](properties_Subform.md#source) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 
