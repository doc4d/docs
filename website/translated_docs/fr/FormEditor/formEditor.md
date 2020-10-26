---
id: formEditor
title: Éditeur de formulaire
---

## Création de list box

Vous pouvez créer rapidement de nouvelles list box de type sélection d'entités avec le **générateur de list box**. La nouvelle list box peut être utilisée immédiatement ou elle peut être modifiée via l'éditeur de formulaires.

Le générateur de list box vous permet de créer et de remplir des list box de type sélection d'entités en quelques opérations simples.



### Utilisation du générateur de list box


1.  Dans la barre d'outils de l'éditeur de formulaire, cliquez sur l'icône du générateur de zone de liste :

    ![](assets/en/FormEditor/listboxBuilderIcon.png)

    Le générateur de list box s'affiche :

    ![](assets/en/FormEditor/listboxBuilder.png)

2.  Sélectionnez une table dans la liste déroulante **Table** :

    ![](assets/en/FormEditor/listboxBuilderTable.png)

3.  Sélectionnez les champs de la list box dans la zone **Champs** :

    ![](assets/en/FormEditor/listboxBuilderFields.png)

    Par défaut, tous les champs sont sélectionnés. Vous pouvez sélectionner ou désélectionner les champs individuellement ou utiliser **Ctrl+clic** (Windows) ou **Cmd+clic** (macOS) pour les sélectionner ou les désélectionner tous à la fois.

    Vous pouvez modifier l'ordre des champs via un glisser-déposer.

4.  L'expression qui permet de remplir les lignes de la list box à partir de la sélection d'entité est préremplie :

    ![](assets/en/FormEditor/listboxBuilderExpression.png)

    Cette expression peut être modifiée si nécessaire.

5.  En cliquant sur le bouton **Copier**, l'expression sera copiée pour charger tous les enregistrements en mémoire :

    ![](assets/en/FormEditor/listboxBuilderCode.png)

6.  Cliquez sur le bouton **Créer un widget** pour créer la list box.

    ![](assets/en/FormEditor/listboxBuilderBuild.png)

La list box finale :

![](assets/en/FormEditor/listboxBuilderListbox.png)


## Badges

L’éditeur de formulaires 4D permet d’utiliser des badges afin de faciliter la visualisation des propriétés des objets. Ils se trouvent dans la barre d'outils du formulaire :

![](assets/en/FormEditor/shields.png)


Le principe de cette fonction est le suivant : chaque badge est associé à une propriété (par exemple **Vues**, signifiant que l'objet “est dans la vue courante”). Lorsque vous activez un badge, 4D affiche une petite icône (un badge) en haut à gauche de chaque objet du formulaire auquel s’applique la propriété.

![](assets/en/FormEditor/shield.png)

### Utilisation des badges

Pour activer un badge, cliquez sur l'icône *badge* jusqu’à ce que le badge souhaité soit sélectionné. Vous pouvez également cliquer sur la partie droite du bouton et sélectionner directement le type de badge à afficher dans le menu associé :


Pour ne pas afficher de badges, choisissez la ligne **Pas de badges** dans le menu de sélection.
> Vous pouvez définir les badges à afficher par défaut dans la Préférences de l’application.

### Description du badge

Voici la description de chaque type de badge :

| Icône                                        | Nom               | Est affiché...                                                                                                                                |
| -------------------------------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](assets/en/FormEditor/objectMethod.png)   | Méthode objet     | Pour les objets auxquels une méthode objet est associée                                                                                       |
| ![](assets/en/FormEditor/standardAction.png) | Action standard   | Pour les objets auxquels une action standard est associée                                                                                     |
| ![](assets/en/FormEditor/resizing.png)       | Redimensionnement | Pour les objets disposant d’au moins une propriété de redimensionnement, indique la combinaison de propriétés courante                        |
| ![](assets/en/FormEditor/entryOrder.png)     | Ordre de saisie   | Pour les objets saisissables, indique le numéro d’ordre de saisie                                                                             |
| ![](assets/en/FormEditor/viewNumber.png)     | Vue courante      | Pour tous les objets de la vue courante                                                                                                       |
| ![](assets/en/FormEditor/filter.png)         | Filtre            | Pour les objets saisissables auxquels un filtre de saisie est associé                                                                         |
| ![](assets/en/FormEditor/helpTip.png)        | Infobulle         | Pour les objets auxquels une infobulle (message d’aide) est associée                                                                          |
| ![](assets/en/FormEditor/localized.png)      | Localisé          | Pour les objets dont le libellé provient d’une référence (libellé débutant par “:”). La référence peut être de type ressource (STR#) ou XLIFF |
| ![](assets/en/FormEditor/noShields.png)      | Pas de badge      | Aucun badge n’apparaît                                                                                                                        |

## Vues

The 4D Form Editor enables you to build complex forms by distributing form objects among separate views that can then be hidden or shown as needed.

For example, you can distribute objects according to type (fields, variables, static objects, etc.). Any type of form object, including subforms and plug-in areas, can be included in views.

There is no limit on the number of views per form. You can create as many different views as you need. Additionally, each view can be displayed, hidden, and/or locked.




View management is handled via the View palette.

![](assets/en/FormEditor/viewEditor.png)


### Accessing the View palette

There are three ways to access the View palette:

*   **Toolbar**: Click on the Views icon in the Form Editor toolbar. (This icon appears gray when at least one object belongs to a view other than the default view.)

    |                  Default view only                   |               With additional views                |
    |:----------------------------------------------------:|:--------------------------------------------------:|
    | ![](assets/en/FormEditor/icon.png "No views in use") | ![](assets/en/FormEditor/icon2.png "Views in use") |

*   **Context menu** (form or object): Right-click anywhere in the Form Editor or an object, and select **Current View**

    ![](assets/en/FormEditor/contextMenu.png)

The current view is indicated with a check mark (*e.g.*, "Work Address" in the image above)


*   **Form menu**: Click on the **Form** menu and select **View List**

![](assets/en/FormEditor/formMenu.png)


### Avant de commencer

Voici quelques éléments importants à connaitre avant de commencer à travailler avec les vues :

*   **Contexte d’utilisation** : les vues sont un outil purement graphique, utilisable uniquement dans l’éditeur de formulaires ; il n’est pas possible d’accéder aux vues par programmation ou en mode Application.

*   **Vues et pages** : Les objets d’une même vue peuvent appartenir à des pages différentes d’un formulaire ; seuls les objets de la page courante (et de la page 0 si elle est visible) peuvent être affichés, quelle que soit la configuration des vues.

*   **Vues et plans** : Les vues sont indépendantes des plans des objets, il n’y a pas de hiérarchie d’affichage entre les différentes vues.

*   **Vues et groupes** : Seuls les objets appartenant à la vue courante peuvent être groupés.

*   **Current and Default** views: The Default view is the first view of a form and cannot be deleted; the Current view is the view that is being edited and the name is displayed in bold text.



### Gestion des vues

#### Créer des vues

Tout objet créé dans un formulaire est placé dans la première vue ("Vue 1") du formulaire. La première vue 1 est **toujours** la vue par défaut, indiquée par (par défaut) après le nom. Le nom de la vue peut être modifié (voir [Renommer les vues](#renaming-views)), mais il demeure la vue par défaut.


![](assets/en/FormEditor/createView.png)

Il existe deux façons d'ajouter des vues supplémentaires :

*   Cliquez sur le bouton **Ajouter une nouvelle vue** en bas de la palette Vue :

![](assets/en/FormEditor/addView.png)

*   Faites un clic droit sur une vue existante et sélectionnez **Insérer une vue** :

![](assets/en/FormEditor/addView2.png)

Il n'y a pas de limitation du nombre de vues.

#### Renommer des vues

By default views are named as "View" + the view number, however you can change these names to improve readability and better suit your needs.

To rename a view, you can use either:

*   Double-cliquer directement sur le nom de la vue (dans ce cas, la vue est sélectionnée). Le nom devient alors éditable :

    ![](assets/en/FormEditor/rename.png)

*   Clic droit sur le nom de la vue. Le nom devient alors éditable :

    ![](assets/en/FormEditor/rename2.png)

#### Reordering views

You can change the display order of views by dragging/dropping them within the View palette.

Note that the Default view does not change:

![](assets/en/FormEditor/reorderView.png)


#### Deleting views

To rename a view, you can use either:

*   Click on the **Delete the selected view** button at the bottom of the View palette:

    ![](assets/en/FormEditor/deleteView.png)


*   Right-click on the view name, and select **Delete View**:

    ![](assets/en/FormEditor/deleteView2.png)
> If a view is deleted, any objects in it are automatically moved to the Default view.




### Using views

Once views are created, you can use the View palette to:

*   Add object to views,
*   Move objects from one view to another,
*   Select all objects of the same view in a single click,
*   Display or hide objects for each view,
*   Lock the objects of a view.

#### Ajouter des objets aux vues

Un objet ne peut appartenir qu’à une seule vue.

To create an object in another view, simply select the view in the View palette (prior to creating the object) by clicking its name (an Edit icon is displayed for the [Current view](#before-you-begin) and the name appears in bold text):

![](assets/en/FormEditor/addObject.png)

#### Moving objects between views

It's also possible to move one or more objects from one view to another. In the form, select the object(s) whose view you wish to change. The view list indicates, using a symbol, the view to which the selection belongs:

![](assets/en/FormEditor/symbol.png)
> The selection can contain several objects belonging to different views.

Simply select the destination view, right-click, and select **Move to**:

![](assets/en/FormEditor/moveObject.png)

OU

Select the destination view of the selection and click **Move to** button at the bottom of the View palette:

![](assets/en/FormEditor/moveObject3.png)

The selection is then placed in the new view:

![](assets/en/FormEditor/objNewView.png)

You can also move an object to another view via the object's context menu. Right-click on the object, select **Move to view**, and select a view from the list of available views:

![](assets/en/FormEditor/moveObject2.png)
> The [Current view](#before-you-begin) is shown in bold text.



#### Sélectionner tous les objets d’une vue

Vous pouvez sélectionner dans la page courante du formulaire tous les objets appartenant à une même vue. Cette fonction est utile pour appliquer des modifications globales à un ensemble d’objets.

Pour cela, faites un clic droit sur la vue dans laquelle vous souhaitez sélectionner tous les objets et cliquez sur le bouton **Tout sélect. dans vue**:

![](assets/en/FormEditor/selectAll.png)

You can also use the button at the bottom of the View palette:


![](assets/en/FormEditor/selectAll2.png)


#### Afficher ou masquer les objets d’une vue

Vous pouvez à tout moment afficher ou masquer les objets d’une vue dans la page courante du formulaire. Cette fonction permet par exemple de se concentrer sur certains objets lors de la modification du formulaire.

Par défaut, toutes les vues sont affichées, comme l’indique l’icône en regard de chaque vue dans la palette des vues:

![](assets/en/FormEditor/showHide.png)

Pour masquer une vue, cliquez sur cette icône. Elle est alors grisée et les objets de la vue correspondante ne sont plus affichés dans le formulaire :

![](assets/en/FormEditor/hidden.png)
> Il n’est pas possible de masquer la [vue courante](#before-you-begin).

Pour afficher une vue masquée, il suffit de la sélectionner ou de cliquer de nouveau sur l’icône de visualisation.



#### Verrouiller les objets d’une vue

Vous pouvez verrouiller les objets d’une vue. Cela empêche leur sélection, leur modification ou leur suppression dans le formulaire. Une fois verrouillé, un objet ne peut pas être sélectionné par un clic, un rectangle de sélection ou la commande **Sélectionner objets de même type** du menu contextuel. Cette fonction est utile pour éviter les erreurs de manipulation.

Par défaut, toutes les vues sont déverrouillées, comme l’indique l’icône en regard de chaque vue dans la palette des vues:

![](assets/en/FormEditor/lockUnlock.png)

Pour verrouiller les objets d’une vue, cliquez sur cette icône. Le cadenas est alors refermé, ce qui indique que la vue est verrouillée :

![](assets/en/FormEditor/locked.png)
> Il n’est pas possible de verrouiller la [vue courante](#before-you-begin).

Pour déverrouiller une vue, il suffit de la sélectionner ou de cliquer à nouveau sur l’icône de verrouillage.




