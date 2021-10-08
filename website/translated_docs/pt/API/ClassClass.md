---
id: ClassClass
title: Class
---


Quando uma classe de usuário for [definida](Concepts/classes.md#class-definition) no projeto, é carregada no ambiente da linguagem 4D. Uma classe é um objeto em si mesmo, da classe "Class", que tem propriedades e uma função.



### Resumo


|                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ClassClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.name.Summary -->|
| [<!-- INCLUDE #ClassClass.new().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.new().Summary --> |
| [<!-- INCLUDE #ClassClass.superclass.Syntax -->](#superclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ClassClass.superclass.Summary --> |



<!-- REF ClassClass.name.Desc -->
## .name

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R3 | Adicionado |

</details>

<!-- REF #ClassClass.name.Syntax -->
**.name** : Text<!-- END REF -->

#### Descrição

A propriedade `.name` property <!-- REF #ClassClass.name.Summary -->contém o nome do objeto `4D.Class`<!-- END REF -->. Nomes de classe diferenciam minúsculas de maiúsculas.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->



<!-- REF ClassClass.new().Desc -->
## .new()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R3 | Adicionado |
</details>

<!-- REF #ClassClass.new().Syntax -->
**.new**( *param* : any { *;...paramN* } ) : 4D.Class<!-- END REF -->

<!-- REF #ClassClass.new().Params -->
| Parâmetros | Tipo     |    | Descrição                                |
| ---------- | -------- |:--:| ---------------------------------------- |
| param      | any      | -> | Parâmetros a passar à função constructor |
| Resultado  | 4D.Class | <- | Novo objeto da classe                    |
<!-- END REF -->


#### Descrição

A função `.new()` <!-- REF #ClassClass.new().Summary -->cria e retorna um objeto `cs.className` que é uma nova instância da classe da qual é chamada<!-- END REF -->. Essa função está disponível automaticamente para todas as classes da classe store [`cs`](Concepts/classes.md#cs).

Pode passar um ou mais parâmetros opcionais *param*, que serão passados para a função [class constructor](Concepts/classes.md#class-constructor)  (se houver) na definição de classe className. Dentro da função constructor, [`This`](Concepts/classes.md#this) é conectado ao novo objeto sendo construído.

If `.new()` is called on a non-existing class, an error is returned.

#### Examples

To create a new instance of the Person class:

```4d
var $person : cs.Person  
$person:=cs.Person.new() //create the new instance  
//$person contains functions of the class
```

To create a new instance of the Person class with parameters:

```4d
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text; $age : Integer)
    This.firstName:=$firstname
    This.lastName:=$lastname
    This.age:=$age
```

```4d
//In a method
var $person : cs.Person  
$person:=cs.Person.new("John";"Doe";40)  
//$person.firstName = "John"
//$person.lastName = "Doe"
//$person.age = 40
```


<!-- END REF -->



<!-- REF ClassClass.superclass.Desc -->
## .superclass

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R3  | Added   |

</details>

<!-- REF #ClassClass.superclass.Syntax -->
**.superclass** : 4D.Class<!-- END REF -->

#### Description

The `.superclass` property <!-- REF #ClassClass.superclass.Summary -->returns the parent class of the class<!-- END REF -->. A superclass can be a `4D.Class` object, or a `cs.className` object. If the class does not have a parent class, the property returns **null**.

A superclass of a user class is declared in a class by using the [`Class extends <superclass>`](Concepts/classes.md#class-extends-classname) keyword.

This property is **read-only**.

#### Examples

```4d
$sup:=4D.File.superclass //Document
$sup:=4D.Document.superclass //Object
$sup:=4D.Object.superclass //null

// If you created a MyFile class  
// with `Class extends File`
$sup:=cs.MyFile.superclass //File 

```



**See also:** [Super](Concepts/classes.md#super)
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
