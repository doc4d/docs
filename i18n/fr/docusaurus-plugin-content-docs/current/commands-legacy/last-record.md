---
id: last-record
title: LAST RECORD
slug: /commands/last-record
displayed_sidebar: docs
---

<!--REF #_command_.LAST RECORD.Syntax-->**LAST RECORD** ({ *laTable* : Table })<!-- END REF-->
<!--REF #_command_.LAST RECORD.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594; | Table de laquelle vous voulez aller au dernier enregistrement ou Table par défaut si ce paramètre est omis |
</div>
<!-- END REF-->

#### Description 

<!--REF #_command_.LAST RECORD.Summary-->**LAST RECORD** désigne le dernier enregistrement de la sélection de *laTable* comme enregistrement courant et le charge en mémoire.<!-- END REF--> Si la sélection est vide ou si l'enregistrement courant est déjà le dernier de la sélection, **LAST RECORD** ne fait rien.

#### Exemple 

L'exemple suivant désigne le dernier enregistrement de la table \[Contacts\] comme enregistrement courant :

```4d
 LAST RECORD([Contacts])
```

#### Voir aussi 

[Before selection](before-selection)  
[End selection](end-selection)  
[FIRST RECORD](first-record)  
[NEXT RECORD](next-record)  
[PREVIOUS RECORD](previous-record)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 200 |
| Thread safe | yes |
| Change l'enregistrement courant ||


