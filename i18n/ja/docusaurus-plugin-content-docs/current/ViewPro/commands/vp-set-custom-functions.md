---
id: vp-set-custom-functions
title: VP SET CUSTOM FUNCTIONS
---

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Syntax -->

**VP SET CUSTOM FUNCTIONS** ( _vpAreaName_ : Text ; _formulaObj_ : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Params -->

| 引数         | タイプ    |    | 説明                      |                  |
| ---------- | ------ | -- | ----------------------- | ---------------- |
| vpAreaName | Text   | -> | 4D View Pro フォームオブジェクト名 |                  |
| formulaObj | Object | -> | フォーミュラオブジェクト            | <!-- END REF --> |

#### 説明

`VP SET CUSTOM FUNCTIONS` コマンドは、<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Summary -->4D View Pro フォーミュラから直接呼び出し可能な 4Dフォーミュラを指定します<!-- END REF -->。 カスタムのファンクションはドキュメント内に保存されていないので、`VP SET CUSTOM FUNCTIONS` は `On Load` フォームイベント内で呼び出される必要があります。

`VP SET CUSTOM FUNCTIONS` で指定されたフォーミュラは、最初の文字が入力されるとポップアップメニューに表示されます。 See the [Formulas and Functions](../formulas.md) page.

> `VP SET CUSTOM FUNCTIONS` が同一セッション中に同じエリアに対して複数回呼び出された場合、最後の呼び出しのみが有効になります。

_vpAreaName_ には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

_formulaObj_ 引数として、4D View Pro フォーミュラから呼び出し可能な 4Dフォーミュラと、その追加のプロパティを格納したオブジェクトを渡します。 _formulaObj_ 引数の各 `customFunction` プロパティが 4D View Pro エリア内でのファンクション名になります。

| プロパティ              |            |                                                              | タイプ                 | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------ | ---------- | ------------------------------------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<customFunction>` |            |                                                              | Object              | カスタムファンクションの名前。 `<customFunction>` は、4D View Pro フォーミュラで表示するカスタムファンクションの名前を定義します (スペースは使用できません)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                    | formula    |                                                              | Object              | 4Dフォーミュラオブジェクト (必須)。 `Formula` コマンド参照。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                    | parameters |                                                              | Object の Collection | 引数のコレクション (フォーミュラ内で定義されている順). For more information, please refer to the [Parameters](../formulas.md#parameters) section.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                    |            | [ ].name | Text                | 4D View Pro に表示する引数の名前。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                    |            | [ ].type | Number              | 引数の型。 Supported types:<li>`Is Boolean`</li><li>`Is collection`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>_type_ can be omitted or the default value (-1) can be passed (except when at least one parameter is of collection type, in which case parameter's type declaration is mandatory). <br/> If _type_ is omitted or -1, the value is automatically sent with its type, except date or time values which are sent as an object. If _type_ is `Is object`, the object is sent in a `.value` property. See [Parameters](../formulas.md#parameters) section. |
|                    | summary    |                                                              | Text                | 4D View Pro に表示するフォーミュラの説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                    | minParams  |                                                              | Number              | 引数の最小の数                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                    | maxParams  |                                                              | Number              | 引数の最大の数。 ここに _parameters_ の length より大きな値を渡すことによって、デフォルトの型を持つ "任意の" 引数を宣言できるようになります。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

> **警告**

> - As soon as `VP SET CUSTOM FUNCTIONS` is called, the methods allowed by the [VP SET ALLOWED METHODS](vp-set-allowed-methods.md) command (if any) are ignored in the 4D View Pro area.
> - `VP SET CUSTOM FUNCTIONS` が呼び出されると、4D View Pro エリアは `SET TABLE TITLES` や `SET FIELD TITLES` コマンドに基づく機能を無視します。

#### 例題

You want to use formula objects in a 4D View Pro area to add numbers, retrieve a customer's last name and gender and the company's peak month:

```4d
Case of
    :(FORM Event.code=On Load)
 
       var $o : Object
       $o:=New object
 
// Define "addnum" function from a method named "addnum"
       $o.addnum:=New object
       $o.addnum.formula:=Formula(addnum)
       $o.addnum.parameters:=New collection
       $o.addnum.parameters.push(New object("name";"num1";"type";Is Integer))
       $o.addnum.parameters.push(New object("name";"num2";"type";Is Integer))
 
// Define "ClientLastName" function from a database field
       $o.ClientLastName:=New object
       $o.ClientLastName.formula:=Formula([Customers]lastname)
       $o.ClientLastName.summary:="Lastname of the current client"
 
// Define "label" function from a 4D expression with one parameter
       $o.label:=New object
       $o.label.formula:=Formula(ds.Customers.get($1).label)
       $o.label.parameters:=New collection
       $o.label.parameters.push(New object("name";"ID";"type";Is Integer))
 
// Define "AverageValues" function from a method named "AverageValues"
       $o.AverageValues:=New object
       $o.AverageValues.formula:=Formula(AverageValues)
       $o.AverageValues.parameters:=New collection
       $o.AverageValues.parameters.push(New object("name";"Mycollection";"type";Is collection))
        
// Define "Title" function from a variable named "Title"
       $o.Title:=New object
       $o.Title.formula:=Formula(Title)
 
       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)
 
End case
```

#### 参照

[4D functions](../formulas.md#4d-functions)<br/>
[VP SET ALLOWED METHODS](vp-set-allowed-methods.md)<br/>
[4D View Pro: enhancement of custom functions (blog post)](https://blog.4d.com/4d-view-pro-enhancement-of-custom-functions)
