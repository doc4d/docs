---
id: defining-a-4d-write-pro-area
title: Definir une zone 4D Write Pro
displayed_sidebar: docs
---

#### Création de la zone 

Dans 4D, les documents 4D Write Pro sont affichés et modifiés manuellement dans un objet de formulaire appelé **4D Write Pro**. Cet objet est sélectionnable dans le dernier groupe d'outils (zone de plug-in, zone Web, etc.) de la barre d'objets de l'éditeur de formulaires :

![](../../assets/en/WritePro/pict4101210.fr.png)

Une zone de formulaire 4D Write Pro est configurée via les options standard de la Liste des propriétés, telles que **nom** et **nom de** **variable**, **coordonnées**, **saisie**, **affichage**, **apparence** et/ou **événements**.

![](../../assets/en/WritePro/pict4101242.fr.png)

La propriété **Nom de variable** peut être utilisée dans le langage comme référence de la zone 4D Write Pro. Notez bien que cette variable doit être du type [objet](# "Données structurées sous forme d'objet natif 4D") (pour plus d'informations, reportez-vous à la commande [C\_OBJET](../../commands/c-objet)).

Les propriétés du thème "Saisie" contrôlent les fonctions élémentaires de saisie de texte :

* **Saisissable** : vous permet de verrouiller/déverrouiller la zone afin d'autoriser ou d'interdire la saisie.
* **Correction orthographique** : disponible pour les zones 4D Write Pro
* **Menu contextuel** : vous permet d'activer/désactiver le menu contextuel lorsque le formulaire est lancé au moment de l'exécution (voir la section *Utiliser une zone 4D Write Pro*)
* **Sélection toujours visible** : contrôle la sélection de texte comme dans les zones de texte standard.

#### Utiliser le Widget 4D Write Pro de la Bibliothèque d'objets 

Il est possible de créer directement des zones 4D Write Pro préconfigurées via des objets **4D Write Pro** de la Bibliothèque d'objets (thème "Zones de saisie") :

![](../../assets/en/WritePro/pict4101252.fr.png)

Les zone ainsi créées sont automatiquement dotées d'un panneau de contrôle ou d'une barre d'outils permettant de gérer tous les attributs de la zone (polices, couleurs, styles...) :

![](../../assets/en/WritePro/pict3254912.fr.png)

Pour plus d'informations, reportez-vous à la section *Zone 4D Write Pro*.

#### Configuration du glisser-déposer 

Pour configurer les fonctionnalités de glisser-déposer dans vos zones 4D Write Pro, vous devez sélectionner les options appropriées dans le thème "Action" de la Liste des propriétés :

![](../../assets/en/WritePro/pict4101267.fr.png)

Les zones 4D Write Pro prennent en charge deux modes de glisser-déposer :

* **Mode personnalisé** : lorsque seules les options "Glissable" et "Déposable" sont cochées.  
Dans ce mode, vous pouvez sélectionner du texte et commencer à le déplacer. La méthode objet est alors appelée avec l'événement Sur début glisser, et vous pouvez alors définir l'action de déposer via du code personnalisé.
* **Mode automatique** : lorsque toutes les options sont cochées ("Glissable", "Déposable", "Glisser automatique" et "Déposer automatique").  
Dans ce mode, Vous pouvez automatiquement déplacer ou copier (en maintenant la touche **Alt/Option**) le texte sélectionné. L'événement Sur début glisser n'est pas généré.

**Note :** Sélectionner uniquement les options "Glisser automatique" et "Déposer automatique" n'aura pas d'effet sur la zone 4D Write Pro. 

#### Configurer les propriétés d'affichage 

Les propriétés de vue des documents 4D Write Pro sont accessibles dans la Liste des propriétés pour les zones 4D Write Pro. Elles vous permettent de définir la façon dont un document sera visualisé par défaut dans cette zone. Ces propriétés définissent, par exemple, si les documents 4D Write Pro doivent être affichés en vue "impression" ou en vue "Web". Vous pouvez définir différentes vues pour un document 4D Write Pro dans le même formulaire.

**Note :** Les propriétés de vue peuvent être gérées dynamiquement à l'aide des commandes [WP FIXER PROPRIETES VUE](../commands/wp-fixer-proprietes-vue) et [WP Lire proprietes vue](../commands/wp-lire-proprietes-vue).

Les propriétés de vue des documents sont gérées via des options spécifiques dans le thème **Apparence** de la Liste des propriétés pour les objets de formulaire 4D Write Pro :

![](../../assets/en/WritePro/pict4101278.fr.png)

* **Résolution** : Définit la résolution écran pour le contenu de la zone 4D Write Pro. Par défaut, elle est fixée à **72 dpi (Mac OS)**, qui est la résolution standard des formulaires 4D sur toutes les plates-formes. Définir une valeur de dpi fixe permet d'obtenir un rendu de document identique sur les plates-formes Mac OS et Windows. L'option Automatique adapte la résolution à la plate-forme courante, ce qui signifie que le rendu du document sera différent entre les plates-formes Mac OS et Windows.
* **Zoom** : Définit le pourcentage de zoom pour l'affichage du contenu de la zone 4D Write Pro area.
* **Mode d'affichage** : Définit le type de vue à utiliser pour l'affichage du document 4D Write Pro dans la zone du formulaire. Trois modes sont disponibles :  
   * **Page** : vue la plus complète, incluant le cadre de page, l'orientation, les marges, les sauts de page, les en-têtes et les pieds de page, etc. Pour plus d'informations, veuillez vous reporter au paragraphe *Fonctionnalités de l'affichage en page*.  
   * **Brouillon** : mode brouillon avec des propriétés de document basiques.  
   * **Inclus** : mode adapté aux zones incluses ; les marges, en-têtes, pieds de pages, cadre de page, etc. ne sont pas affichés.  
   Ce mode permet également d'obtenir une vue "Web" (en l'associant à la résolution **96 dpi** et à l'option **Montrer HTML WYSIWYG**).  
         
   **Note** : La propriété **Mode d'affichage** est utilisée uniquement pour le rendu écran. Pour l'impression, des règles de rendu spécifiques sont automatiquement mises en oeuvre (cf. *Imprimer des documents 4D Write Pro*).
* **Montrer le cadre de page** : Affiche/masque les limites des pages lorsque le mode d'affichage est "Page".
* **Montrer les références** : Affiche en tant que *références* toutes les formules (ou expressions) 4D insérées dans le document (voir *Gérer des formules*). Lorsque cette option est désélectionnée, les formules 4D sont affichées en tant que *valeurs*.  
**Note** : Les références aux formules peuvent être affichées sous forme de symboles (voir ci-dessous).
* **Montrer les entêtes / pieds de page** : Affiche/masque les en-têtes et les pieds de page lorsque le mode d'affichage est "Page". Pour plus d'informations sur les en-têtes et les pieds de page, veuillez vous reporter à la section *Utiliser une zone 4D Write Pro*.
* **Montrer le fond et les éléments ancrés** : Affiche/masque les images de fond, les couleurs de fond, les images ancrées et les zones de texte.
* Montrer les caractères cachés : Affiche/masque les caractères invisibles.
* **Montrer HTML WYSIWYG** : Active/désactive la vue WYSIWYG HTML, dans laquelle les attributs 4D Write Pro avancés qui ne sont pas compatibles avec tous les navigateurs sont supprimés.
* **Montrer la règle horizontale** : Affiche/masque la règle horizontale dans le document. Pour plus d'informations sur les règles dans 4D Write Pro, reportez-vous à la section *Utiliser les règles*.
* **Montrer la règle verticale :** Affiche/masque la règle verticale lorsque le document est en mode Page. Pour plus d'informations sur les règles dans 4D Write Pro, reportez-vous à la section *Utiliser les règles*.
* **Montrer les images vides ou non prises en charge :** Affiche/masque un rectangle noir pour les images qui ne peuvent pas être chargées ou calculées (images vides ou dans un format non pris en charge). Pour plus d'informations, consultez la section *Empty pictures*.
* **Afficher la formule source avec un symbole :** Affiche le texte source des formules sous forme de symboles ![](../../assets/en/WritePro/pict6013182.en.png) lorsque les expressions sont affichées comme références (voir ci-dessus). L'affichage des formules sous forme de symboles rend les documents de modèle plus compacts et plus wysiwyg(Ce que vous voyez est ce que vous obtenez).

**Notes de compatibilité :**

* Pour les documents 4D Write Pro créés avec des versions antérieures à 4D v16, les valeurs par défaut de ces propriétés sont utilisées, à l'exception de la propriété **Résolution**, qui a pour valeur **Automatique** dans ce cas.
* La règle horizontale est affichée dans les bases de données créées à compter de 4D v16 R2 ; pour les bases converties depuis des versions précédentes, cette propriété n'est pas sélectionnée par défaut.