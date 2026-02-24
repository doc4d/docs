---
id: messages-off
title: MESSAGES OFF
slug: /commands/messages-off
displayed_sidebar: docs
---

<!--REF #_command_.MESSAGES OFF.Syntax-->**MESSAGES OFF**<!-- END REF-->
<!--REF #_command_.MESSAGES OFF.Params-->
<div class="no-index">

| Ne requiert pas de paramètre |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|17 R4|Modifié|
|11 SQL Release 3|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.MESSAGES OFF.Summary-->Les commandes **MESSAGES OFF** et [MESSAGES ON](messages-on) suppriment ou font apparaître les thermomètres de progression affichés par 4D lorsque le programme exécute des opérations de longue durée.<!-- END REF--> Par défaut, les messages sont affichés. 

Voici la liste des opérations qui peuvent provoquer l'affichage d'un thermomètre de progression : Application d'une formule, Génération d'un état rapide, Export de données, Import de données, Tri, Génération d'un graphe, Recherche, Recherche par formulaire, Recherche par formule.

Voici les commandes qui peuvent provoquer l'affichage d'un thermomètre de progression : 

[APPLY TO SELECTION](apply-to-selection)   
[QUERY](query)  
[QUERY SELECTION](query-selection)  
[QUERY BY EXAMPLE](query-by-example)  
[QUERY BY FORMULA](query-by-formula)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula)  
[EXPORT DIF](export-dif)  
[EXPORT SYLK](export-sylk)  
[EXPORT TEXT](export-text)  
[BUILD APPLICATION](build-application)  
  
[IMPORT TEXT](import-text)  
[RELATE ONE SELECTION](relate-one-selection)  
[IMPORT DIF](import-dif)  
[IMPORT SYLK](import-sylk)  
[Max](max)  
[Min](min)  
[Average](average)   
[QR REPORT](qr-report)  
[REDUCE SELECTION](reduce-selection)  
[SCAN INDEX](scan-index)  
[RELATE MANY SELECTION](relate-many-selection)  
[Sum](sum)  
[ORDER BY](order-by)  
[ORDER BY FORMULA](order-by-formula)  
[DISTINCT VALUES](distinct-values) 

**Note 4D Server :** A compter de 4D Server v14 R3, les fenêtres de messages de progression ne sont plus affichées sur le serveur, ces opérations étant automatiquement listées dans la *Fenêtre d'administration de 4D Server* de la fenêtre d'administration. Si vous souhaitez forcer l'affichage de ces fenêtres de progression, vous devez appeler la commande [MESSAGES ON](messages-on) sur le serveur. 

## Exemple 

L'exemple suivant supprime les thermomètres de progression avant d'effectuer un tri, puis les rétablit après l'opération :

```4d
 MESSAGES OFF
 ORDER BY([Adresses];[Adresses]CP;>;[Adresses]Nom2;>)
 MESSAGES ON
```

## Voir aussi 

[MESSAGES ON](messages-on)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 175 |
| Thread safe | yes |


