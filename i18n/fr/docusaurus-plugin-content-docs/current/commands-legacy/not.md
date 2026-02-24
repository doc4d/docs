---
id: not
title: Not
slug: /commands/not
displayed_sidebar: docs
---

<!--REF #_command_.Not.Syntax-->**Not** ( *booléen* : Boolean ) : Boolean<!-- END REF-->
<!--REF #_command_.Not.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| booléen | Boolean | &#8594; | Valeur booléenne à inverser |
| Résultat | Boolean | &#8592; | Inverse de booléen |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.Not.Summary-->La fonction **Not** retourne la valeur inverse de *booléen*, changeant un [True](true) en [False](false) ou un [False](false) en [True](true).<!-- END REF--> 

## Exemple 

Dans l'exemple suivant, la valeur [True](true) est assignée à une variable. Cette valeur est alors modifiée en [False](false) puis de nouveau en [True](true) : 

```4d
 Résultat:=True // Résultat prend la valeur VRAI
 Résultat:=Not(Résultat) // Résultat prend la valeur FAUX
 Résultat:=Not(Résultat) // Résultat prend la valeur VRAI
```

## Voir aussi 

[False](false)  
[True](true)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 34 |
| Thread safe | yes |


