---
id: FunctionClass
title: Formula
---



Les commandes [Formula](#formula) et [Formula from string](#formula-from-string) vous permettent de créer des [objets `4D.Function`](#about-4dfunction-objects) natifs pour exécuter toute expression ou code 4D exprimé sous forme de texte.


### Objets Formula

Les objets Formula peuvent être encapsulés dans des propriétés d'objet :

```4d
 var $f : 4D.Function
 $f:=New object
 $f.message:=Formula(ALERT("Hello world"))
```

Cette propriété est une "fonction objet", c'est-à-dire une fonction qui est liée à son objet parent. Pour exécuter une fonction stockée dans une propriété objet, utilisez l'opérateur **()** après le nom de la propriété, comme par exemple :

```4d
 $f.message() //affiche"Hello world"
```

La syntaxe avec des crochets est également prise en charge :

```4d
 $f["message"]() //affiche "Hello world"
```

A noter que, même si elle n'a pas de paramètres (voir ci-dessous), une fonction objet à exécuter doit être appelée avec des parenthèses (). En appelant uniquement une seule propriété, une nouvelle référence à la formule sera retournée (et ne sera pas exécutée) :

```4d
 $o:=$f.message //retourne l'objet formule en $o 
```

Vous pouvez également exécuter une fonction à l'aide des fonctions [`apply()`](#apply) et [`call()`](#call) :

```4d
 $f.message.apply() //affiche "Hello world"
```

#### Passer des paramètres

Vous pouvez passer des paramètres à vos formules en utilisant [la syntaxe séquentielle des paramètres](Concepts/parameters.md#sequential-parameters) basée sur $1, $2...$n. Par exemple, vous pouvez écrire :

```4d
 var $f : Object
 $f:=New object
 $f.message:=Formula(ALERT("Hello "+$1))
 $f.message("John") //affiche "Hello John"
```

Ou en utilisant la fonction [.call()](#call) :

```4d
 var $f : Object
 $f:=Formula($1+" "+$2)
 $text:=$f.call(Null;"Hello";"World") //retourne "Hello World"
 $text:=$f.call(Null;"Welcome to";String(Year of(Current date))) //retourne "Welcome to 2019" (par exemple)
```

#### Paramètres d'une seule méthode

Pour plus de commodité, lorsque la formule est constituée d'une seule méthode projet, les paramètres peuvent être omis dans l'initialisation de l'objet formule. Ils peuvent simplement être passés lorsque la formule est appelée. Par exemple :

```4d
 var $f : 4D.Function

 $f:=Formula(myMethod)
  //Ecrire Formula(myMethod($1;$2)) n'est pas nécessaire
 $text:=$f.call(Null;"Hello";"World") //retourne "Hello World"
 $text:=$f.call() //retourne "How are you?"

  //myMethod
 #DECLARE ($param1 : Text; $param2 : Text)->$return : Text
 If(Count parameters=2)
    $return:=$param1+" "+$param2
 Else
    $return:="How are you?"
 End if
```

Les paramètres sont reçus dans la méthode, dans l'ordre où ils sont spécifiés dans l'appel.

### À propos des objets 4D.Function

Un objet `4D.Function` contient un morceau de code qui peut être exécuté à partir d'un objet, soit en utilisant l'opérateur `()`, soit en utilisant les fonctions [`apply()`](#apply) et [`call()`](#call). 4D propose trois types d'objets Function :

- les fonctions natives, c'est-à-dire les fonctions intégrées de diverses classes 4D telles que `collection.sort()` ou `file.copyTo()`.
- les fonctions utilisateur, créées dans les [classes](Concepts/classes.md) utilisateur à l'aide du [mot-clé Function](Concepts/classes.md#function).
- les fonctions de formule, c'est-à-dire les fonctions qui peuvent exécuter n'importe quelle formule 4D.



### Sommaire


|                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.apply().Summary -->|
| [<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.call().Summary --> |
| [<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.source.Summary --> |




## Formula

<details><summary>Historique</summary>
| Version | Modifications                    |
| ------- | -------------------------------- |
| v17 R6  | Renamed (New formula -> Formula) |
| v17 R3  | Ajout                            |
</details>

<!-- REF #_command_.Formula.Syntax -->
**Formula** ( *formulaExp* : Expression ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula.Params -->
| Paramètres | Type        |    | Description                            |
| ---------- | ----------- |:--:| -------------------------------------- |
| formulaExp | Expression  | -> | Formule à retourner comme objet        |
| Résultat   | 4D.Function | <- | Fonction native encapsulant la formule |
<!-- END REF -->


#### Description

La commande `Formula` <!-- REF #_command_.Formula.Summary -->crée un objet `4D Function` basé sur l'expression *formulaExp*<!-- END REF -->. *formulaExp* peut être aussi simple qu'une valeur unique ou complexe, comme une méthode projet avec des paramètres.

Le fait d'avoir une formule en tant qu'objet permet de la passer en tant que paramètre (champ calculé) à des commandes ou à des méthodes ou de l'exécuter à partir de divers composants sans avoir à les déclarer comme "partagés par les composants et la base de données hôte". Lorsqu'il est appelé, l'objet formula est évalué dans le contexte de la base de données ou du composant qui l'a créé.

La formule retournée peut être appelée avec :

*   les méthodes [`.call()`](#call) ou [`.apply()`](#apply), ou
*   la syntaxe de la notation objet (voir [objet formula](#formula-object)).

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)
 $o:=New object("myFormula";$f)

  //three different ways to call the formula
 $f.call($o) //retourne 3
 $f.apply($o) //retourne 3
 $o.myFormula() //retourne 3
```

Vous pouvez passer des [paramètres](#passing-parameters) à `Formula`, comme le montre l'[exemple 4](#example-4) ci-dessous.

Vous pouvez indiquer l'objet sur lequel la formule est exécutée, comme le montre l'[exemple 5](#example-5). Les propriétés de l'objet sont alors accessibles via la commande `This`.

Si *formuleExp* utilise des variables locales, leurs valeurs sont copiées et stockées dans l'objet formule retourné lors de sa création. Lors de son exécution, la formule utilise ces valeurs copiées plutôt que la valeur courante des variables locales. A noter que l'utilisation de tableaux comme variables locales n'est pas prise en charge.

L'objet créé par `Formula` peut être enregistré par exemple, dans un champ de base de données ou dans un document blob.


#### Exemple 1

Une formule simple :

```4d
 var $f : 4D.Function
 $f:=Formula(1+2)

 var $o : Object
 $o:=New object("f";$f)

 $result:=$o.f() // retourne 3
```

#### Exemple 2

A formula using local variables:

```4d


 $value:=10
 $o:=New object("f";Formula($value))
 $value:=20

 $result:=$o.f() // retourne 10
```


#### Exemple 3

A simple formula using parameters:

```4d
 $o:=New object("f";Formula($1+$2))
 $result:=$o.f(10;20) //retourne 30
```


#### Example 4

A formula using a project method with parameters:

```4d
 $o:=New object("f";Formula(myMethod))
 $result:=$o.f("param1";"param2") // equivalent to $result:=myMethod("param1";"param2")
```


#### Example 5

Using `This`:

```4d
 $o:=New object("fullName";Formula(This.firstName+" "+This.lastName))
 $o.firstName:="John"
 $o.lastName:="Smith"
 $result:=$o.fullName() //retourne "John Smith"
```

#### Example 6

Calling a formula using object notation:

```4d
 var $feta; $robot : Object
 var $calc : 4D.Function
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

  //définit la formule aux propriétés d'objet
 $feta.calc:=$calc
 $robot.calc:=$calc

  //appeler la formule
 $feta.calc() // $feta={name:Feta,price:12.5,quantity:5,total:62.5,calc:"[object Formula]"}
 $robot.calc() // $robot={name:Robot,price:543,quantity:2,total:1086,calc:"[object Formula]"}
```




## Formula from string

<details><summary>Historique</summary>
| Version | Modifications                                          |
| ------- | ------------------------------------------------------ |
| v17 R6  | Renamed New formula from string -> Formula from string |
| v17 R3  | Ajout                                                  |
</details>

<!-- REF #_command_.Formula from string.Syntax -->
**Formula from string**( *formulaString* : Text ) : 4D.Function<!-- END REF -->

<!-- REF #_command_.Formula from string.Params -->
| Paramètres    | Type        |    | Description                             |
| ------------- | ----------- |:--:| --------------------------------------- |
| formulaString | Texte       | -> | Text formula to be returned as object   |
| Résultat      | 4D.Function | <- | Native object encapsulating the formula |
<!-- END REF -->


#### Description

The `Formula from string` command <!-- REF #_command_.Formula from string.Summary -->creates a 4D.Function object based upon the *formulaString*<!-- END REF -->.  *formulaString* can be as simple as a single value or complex, such as a project method with parameters.

This command is similar to [`Formula`](#formula), except that it handles a text-based formula. In most cases, it is recommended to use the `Formula` command. `Formula from string` should only be used when the original formula was expressed as text (e.g., stored externally in a JSON file). In this context, using syntax with tokens is highly advised.
> Because local variable contents can not be accessed by name in compiled mode, they can not be used in *formulaString*. An attempt to access a local variable with `Formula from string` will result in an error (-10737).


#### Exemple

The following code will create a dialog accepting a formula in text format:

```4d
 var $textFormula : Text
 var $f : 4D.Function
 $textFormula:=Request("Please type a formula")
 If(ok=1)
    $f:=Formula from string($textFormula)
    ALERT("Result = "+String($f.call()))
 End if
```

![](assets/en/API/formulaDialog.png)


... et exécute la formule :


![](assets/en/API/formulaAlert.png)






<!-- REF FunctionClass.apply().Desc -->
## .apply()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R3  | Ajout         |
</details>

<!-- REF #FunctionClass.apply().Syntax -->
**.apply**() : any<br>**.apply**( *thisObj* : Object { ; *formulaParams* : Collection } ) : any<!-- END REF -->

<!-- REF #FunctionClass.apply().Params -->
| Paramètres    | Type       |    | Description                                                             |
| ------------- | ---------- |:--:| ----------------------------------------------------------------------- |
| thisObj       | Objet      | -> | Object to be returned by the This command in the formula                |
| formulaParams | Collection | -> | Collection of values to be passed as $1...$n when `formula` is executed |
| Résultat      | any        | <- | Value from formula execution                                            |
<!-- END REF -->


#### Description

The `.apply()` function <!-- REF #FunctionClass.apply().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `Formula` or `Formula from string` commands.


In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the formula.

You can also pass a collection to be used as $1...$n parameters in the formula using the optional *formulaParams* parameter.

Note that `.apply()` is similar to [`.call()`](#call) except that parameters are passed as a collection. This can be useful for passing calculated results.


#### Exemple 1

```4d
 var $f : 4D.Function
 $f:=Formula($1+$2+$3)

 $c:=New collection(10;20;30)
 $result:=$f.apply(Null;$c) // retourne 60
```


#### Exemple 2

```4d
 var $calc : 4D.Function
 var $feta; $robot : Object
 $robot:=New object("name";"Robot";"price";543;"quantity";2)
 $feta:=New object("name";"Feta";"price";12.5;"quantity";5)

 $calc:=Formula(This.total:=This.price*This.quantity)

 $calc.apply($feta) // $feta={name:Feta,price:12.5,quantity:5,total:62.5}
 $calc.apply($robot) // $robot={name:Robot,price:543,quantity:2,total:1086}
``` 

<!-- END REF -->


<!-- REF FunctionClass.call().Desc -->
## .call()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R3  | Ajout         |
</details>

<!-- REF #FunctionClass.call().Syntax -->
**.call**() : any<br>**.call**( *thisObj* : Object { ; ...*params* : any } ) : any<!-- END REF -->

<!-- REF #FunctionClass.call().Params -->
| Paramètres | Type  |    | Description                                               |
| ---------- | ----- | -- | --------------------------------------------------------- |
| thisObj    | Objet | -> | Object to be returned by the This command in the formula  |
| params     | any   | -> | Value(s) to be passed as $1...$n when formula is executed |
| Résultat   | any   | <- | Value from formula execution                              |
<!-- END REF -->


#### Description

The `.call()` function <!-- REF #FunctionClass.call().Summary -->executes the `formula` object to which it is applied and returns the resulting value<!-- END REF -->. The formula object can be created using the `Formula` or `Formula from string` commands.

In the *thisObj* parameter, you can pass a reference to the object to be used as `This` within the formula.

You can also pass values to be used as *$1...$n* parameters in the formula using the optional *params* parameter(s).

Note that `.call()` is similar to [`.apply()`](#apply) except that parameters are passed directly.

#### Exemple 1

```4d
 var $f : 4D.Function
 $f:=Formula(Uppercase($1))
 $result:=$f.call(Null;"hello") // retourne "HELLO"
```

#### Exemple 2

```4d
 $o:=New object("value";50)
 $f:=Formula(This.value*2)
 $result:=$f.call($o) // retourne 100
``` 

<!-- END REF -->



<!-- REF FunctionClass.source.Desc -->
## .source

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R2  | Ajout         |
</details>

<!-- REF #FunctionClass.source.Syntax -->
**.source** : Text <!-- END REF -->


#### Description

The `.source` property <!-- REF #FunctionClass.source.Summary -->contains the source expression of the `formula` as text<!-- END REF -->.

Cette propriété est en **lecture seule**.

#### Exemple

```4d
 var $of : 4D.Function
 var $tf : Text
 $of:=Formula(String(Current time;HH MM AM PM))
 $tf:=$of.source //"String(Current time;HH MM AM PM)"
``` 



<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
