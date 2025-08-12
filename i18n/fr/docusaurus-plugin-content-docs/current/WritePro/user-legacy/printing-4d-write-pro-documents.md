---
id: printing-4d-write-pro-documents
title: Imprimer des documents 4D Write Pro
displayed_sidebar: docs
---

#### 

Les documents 4D Write Pro peuvent être imprimés de deux manières :

* en tant que parties de formulaires 4D
* en tant que documents indépendants

#### Impression de documents dans des formulaires 4D 

Vous pouvez imprimer des objets 4D Write Pro inclus dans des formulaires 4D de tout type (projet, table, entrée ou sortie), à l'aide des commandes d'impression standard de 4D telles que [IMPRIMER SELECTION](../../commands/imprimer-selection) ou [IMPRIMER ENREGISTREMENT](../../commands/imprimer-enregistrement). 

L'option standard *Impression taille variable* est également prise en charge(\*) pour les zones 4D Write Pro, vous permettant de gérer les variations de taille durant l'impression. Lorsque cette option est cochée, la marge (extérieure et intérieure) et la bordure hautes ne sont appliquées qu'à la première page. La marge (extérieure et intérieure) et la bordure basses ne sont appliquées qu'à la dernière page. Les propriétés de pagination du document sont ignorées : le contrôle des veuves et des orphelins est désactivé, et les sauts de page ne sont pas appliqués (ces propriétés sont utilisées uniquement pour le rendu des pages à l'écran ou l'impression autonome du document). Lorsque l'option **Impression taille variable** est sélectionnée, seuls les objets situés au-dessus de la zone dans le formulaire sont imprimés. Pour plus d'informations sur cette option, reportez-vous à la section "*Impression taille variable*" dans le manuel Mode Développement.

(\*) Les commandes [Imprimer objet](../../commands/imprimer-objet) et [Imprimer ligne](../../commands/imprimer-ligne) ne sont pas compatibles avec cette option. 

##### Mode d'affichage et impression 

Quel que soit le **Mode d'affichage** défini pour la zone 4D Write Pro (cf. *Configurer les propriétés d'affichage*), elle est toujours imprimée en mode **Inclus** lorsque vous utilisez une commande d'impression 4D telle que [Imprimer ligne](../../commands/imprimer-ligne). Dans ce contexte, les propriétés d'Apparence ne sont pas prises en charge pour les objets de formulaire 4D Write Pro : Mode d'affichage (toujours "Inclus"), Montrer les entêtes, Montrer les pieds de page, Montrer le cadre de page (toujours "non") et Montrer les caractères cachés (toujours "non").

##### Exemple 

L'exemple suivant illustre l'effet de l'option **Impression taille variable** sur une zone 4D Write Pro incluse dans le formulaire de sortie par défaut. Le code suivant est exécuté : 

```4d
 TOUT SELECTIONNER([Movies])
 TRIER([Movies]Title)
 IMPRIMER SELECTION([Movies])
```

* Avec l'option "Impression taille variable" **non cochée**, vous obtenez le résultat suivant :  
![](../../assets/en/WritePro/pict2646292.en.png)
* Avec l'option "Impression taille variable" **cochée**, vous obtenez le résultat suivant :  
![](../../assets/en/WritePro/pict2646294.en.png)  
*(Source des texte d'exemple : wikipedia)*

#### Impression de documents indépendants 

A partir de 4D v15 R5, 4D Write Pro inclut des fonctionnalités d'impression vous permettant d'imprimer des documents 4D Write Pro indépendants et de contrôler les options standard d'impression comme le format, l'orientation ou les numéros de page.

##### Commandes 4D Write Pro 

Essentiellement, deux commandes gèrent les fonctions d'impression avec 4D Write Pro : **WP IMPRIMER** et **WP UTILISER PARAMETRES IMPRESSION**.

* [WP IMPRIMER](../commands/wp-imprimer) lance une tâche d'impression pour le document 4D Write Pro ou ajoute le document dans la tâche d'impression courante.
* [WP UTILISER PARAMETRES IMPRESSION](../commands/wp-utiliser-parametres-impression) modifie les options d'impression de la page courante, sur la base des attributs du document 4D Write Pro pour la taille de page et l'orientation.

**Note :** Sur des machines avec Windows 7 ou Windows Server 2008 R2, vérifiez que le *Platform Update for Windows 7* a bien été installé pour que les fonctionnalités d'impression soient prises en charge.

##### Commandes 4D standard 

Les commandes 4D suivantes prennent en charge les fonctionnalités d'impression de 4D Write Pro :

* [FIXER OPTION IMPRESSION](../../commands/fixer-option-impression) et [LIRE OPTION IMPRESSION](../../commands/lire-option-impression) : Toutes les options sont prises en charge pour les documents 4D Write Pro imprimés avec [WP IMPRIMER](../commands/wp-imprimer).  
Pour Option papier et Option orientation, il sera généralement préférable d'appeler [WP UTILISER PARAMETRES IMPRESSION](../commands/wp-utiliser-parametres-impression) de façon à facilement synchroniser ces attributs avec les options du document 4D Write Pro. L'option Option intervalle de page (15) vous permet d'imprimer de la page *x* à la page *y* uniquement.
* [PARAMETRES IMPRESSION](../../commands/parametres-impression) : permet de fixer les paramètres d'impression pour l'imprimante courante ; si la commande [WP IMPRIMER](../commands/wp-imprimer)est appelée par la suite, elle utilisera les paramètres d'impression modifiés si certains ont été modifiés au moyen des dialogues de paramétrage d'impression (excepté pour les options de marges qui prennent toujours en compte les options du document 4D Write Pro).
* [OUVRIR TACHE IMPRESSION](../../commands/ouvrir-tache-impression) et [FERMER TACHE IMPRESSION](../../commands/fermer-tache-impression): [WP IMPRIMER](../commands/wp-imprimer) peut être appelée entre [OUVRIR TACHE IMPRESSION](../../commands/ouvrir-tache-impression)et [FERMER TACHE IMPRESSION](../../commands/fermer-tache-impression)de façon à insérer un ou plusieurs document(s) 4D Write Pro dans une tâche d'impression.