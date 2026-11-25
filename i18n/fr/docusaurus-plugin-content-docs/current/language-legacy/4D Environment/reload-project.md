---
id: reload-project
title: RELOAD PROJECT
slug: /commands/reload-project
displayed_sidebar: docs
---

<!--REF #_command_.RELOAD PROJECT.Syntax-->**RELOAD PROJECT**<!-- END REF-->
<!--REF #_command_.RELOAD PROJECT.Params-->
<div class="no-index">

| Ne requiert pas de paramètre |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|21 R6|Recharge la hiérarchie des dossiers des projets à dossiers disque|
|18 R4|Créé|

</details>
</div>

## Description 

<!--REF #_command_.RELOAD PROJECT.Summary-->La commande **RELOAD PROJECT** recharge les définitions du fichier source (méthodes, formulaires, etc.) à partir du disque, pour exécuter le projet dans l'environnement 4D courant.<!-- END REF--> Elle peut être utilisée uniquement avec des projets 4D exécutés en **mode** **interprété**. L'exécution de la commande est asynchrone. 

Généralement, un projet est automatiquement rechargé lorsque l'application 4D détecte qu'un fichier source a été ajouté, modifié ou supprimé. C'est le cas lorsqu'un fichier a été directement édité depuis un IDE 4D Developer, ou après le déplacement d'une fenêtre d'application 4D de l'arrière-plan vers le premier plan du système d'exploitation.

L'appel de la commande **RELOAD PROJECT** est nécessaire lorsque les mécanismes de rechargement automatique du projet ne s'appliquent pas, c'est-à-dire, dans les contextes suivants : 

* Le projet est exécuté par le 4D Server ou 4D Developer et les fichiers source sont modifiés par un moyen externe, tel qu'une action *pull* depuis un répertoire de gestion de version ; et vous ne pouvez pas (ou vous ne souhaitez pas) déplacer manuellement la fenêtre de l'application, car vous souhaitez, par exemple, que l'exécution soit automatique.
* le projet est exécuté par 4D Server en mode headless et les fichiers source ont été modifiés.

La commande ne fait rien si l'environnement de développement (Design) n'est pas ouvert.

Lorsque la commande est appelée depuis :

* un 4D Developer connecté à un 4D Server sur la même machine, elle est d'abord exécutée sur un 4D Server, puis sur 4D Developer.
* un 4D Developer connecté à distance à un 4D Server, elle est exécutée uniquement sur un 4D Server.
* un 4D monoposte ou un 4D Server, elle est exécutée localement.

Dans un [projet à dossiers disque](../../Project/architecture.md#disk-folder-projects), la commande recharge également la hiérarchie des dossiers de la page Démarrage de l'Explorateur à partir des dossiers trouvés sur le disque sous `Project/Sources` : dossiers ajoutés, renommés, déplacés ou supprimés, et éléments déplacés d'un dossier à l'autre. Une méthode déplacée vers un autre dossier conserve son identité (les éditeurs ouverts et les points d'arrêt la suivent). Les [fichiers en anomalie](../../Develop/explorer.md#files-at-fault) trouvés sur le disque sont signalés dans une boîte de dialogue, ou dans le journal de diagnostic en l'absence d'IDE.

## Exemple

Dans un projet à dossiers disque, vous souhaitez ajouter un dossier contenant une méthode en dehors de l'Explorateur, puis l'afficher dans la page Démarrage :

```4d
var $folder : 4D.Folder:=Folder(fk database folder).folder("Project/Sources/Reports/Methods")
$folder.create()
$folder.file("monthlyReport.4dm").setText("//%attributes = {}\r#DECLARE()\r")
RELOAD PROJECT  // le dossier Reports et sa méthode monthlyReport apparaissent dans la page Démarrage
```

## Voir aussi 

  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1739 |
| Thread safe | yes |


