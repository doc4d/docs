---
id: CollectionClass
title: Collection
---

The Collection class manages [Collection](Concepts/dt_collection.md) type variables.

コレクションは次のように初期化します:

|                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.New collection.Syntax -->](#new-collection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.New collection.Summary -->                      |
| [<!-- INCLUDE #_command_.New shared collection.Syntax -->](#new-shared-collection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.New shared collection.Summary --> |

### 例題

```4d
 var $colVar : Collection //creation of collection type 4D variable
 $colVar:=New collection //initialization of the collection and assignment to the 4D variable
```

### 概要

|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #collection.at().Syntax -->](#at)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.at().Summary -->                                  |
| [<!-- INCLUDE #collection.average().Syntax -->](#average)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.average().Summary -->                   |
| [<!-- INCLUDE #collection.clear().Syntax -->](#clear)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.clear().Summary -->                         |
| [<!-- INCLUDE #collection.combine().Syntax -->](#combine)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.combine().Summary -->                   |
| [<!-- INCLUDE #collection.concat().Syntax -->](#concat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.concat().Summary -->                      |
| [<!-- INCLUDE #collection.copy().Syntax -->](#copy)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.copy().Summary -->                            |
| [<!-- INCLUDE #collection.count().Syntax -->](#count)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.count().Summary -->                         |
| [<!-- INCLUDE #collection.countValues().Syntax -->](#countvalues)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.countValues().Summary -->       |
| [<!-- INCLUDE #collection.distinct().Syntax -->](#distinct)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.distinct().Summary -->                |
| [<!-- INCLUDE #collection.equal().Syntax -->](#equal)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.equal().Summary -->                         |
| [<!-- INCLUDE #collection.every().Syntax -->](#every)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.every().Summary -->                         |
| [<!-- INCLUDE #collection.extract().Syntax -->](#extract)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.extract().Summary -->                   |
| [<!-- INCLUDE #collection.fill().Syntax -->](#fill)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.fill().Summary -->                            |
| [<!-- INCLUDE #collection.filter().Syntax -->](#filter)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.filter().Summary -->                      |
| [<!-- INCLUDE #collection.find().Syntax -->](#find)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.find().Summary -->                            |
| [<!-- INCLUDE #collection.findIndex().Syntax -->](#find)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.findIndex().Summary -->                  |
| [<!-- INCLUDE #collection.first().Syntax -->](#first)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.first().Summary -->                         |
| [<!-- INCLUDE #collection.flat().Syntax -->](#flat)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.flat().Summary -->                            |
| [<!-- INCLUDE #collection.flatMap().Syntax -->](#flatMap)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.flatMap().Summary -->                   |
| [<!-- INCLUDE #collection.includes().Syntax -->](#includes)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.includes().Summary -->                |
| [<!-- INCLUDE #collection.indexOf().Syntax -->](#indexof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indexOf().Summary -->                   |
| [<!-- INCLUDE #collection.indices().Syntax -->](#indices)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indices().Summary -->                   |
| [<!-- INCLUDE #collection.insert().Syntax -->](#insert)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.insert().Summary -->                      |
| [<!-- INCLUDE #collection.join().Syntax -->](#join)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.join().Summary -->                            |
| [<!-- INCLUDE #collection.last().Syntax -->](#last)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.last().Summary -->                            |
| [<!-- INCLUDE #collection.lastIndexOf().Syntax -->](#lastindexof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.lastIndexOf().Summary -->       |
| [<!-- INCLUDE #collection.length.Syntax -->](#length)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.length.Summary -->                          |
| [<!-- INCLUDE #collection.map().Syntax -->](#map)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.map().Summary -->                               |
| [<!-- INCLUDE #collection.max().Syntax -->](#max)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.max().Summary -->                               |
| [<!-- INCLUDE #collection.min().Syntax -->](#min)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.min().Summary -->                               |
| [<!-- INCLUDE #collection.multiSort().Syntax -->](#multisort)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.multiSort().Summary -->             |
| [<!-- INCLUDE #collection.orderBy().Syntax -->](#orderby)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderBy().Summary -->                   |
| [<!-- INCLUDE #collection.orderByMethod().Syntax -->](#orderbymethod)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderByMethod().Summary --> |
| [<!-- INCLUDE #collection.pop().Syntax -->](#pop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.pop().Summary -->                               |
| [<!-- INCLUDE #collection.push().Syntax -->](#push)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.push().Summary -->                            |
| [<!-- INCLUDE #collection.query().Syntax -->](#query)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.query().Summary -->                         |
| [<!-- INCLUDE #collection.reduce().Syntax -->](#reduce)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reduce().Summary -->                      |
| [<!-- INCLUDE #collection.reduceRight().Syntax -->](#reduceRight)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reduceRight().Summary -->       |
| [<!-- INCLUDE #collection.remove().Syntax -->](#remove)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.remove().Summary -->                      |
| [<!-- INCLUDE #collection.resize().Syntax -->](#resize)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.resize().Summary -->                      |
| [<!-- INCLUDE #collection.reverse().Syntax -->](#reverse)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reverse().Summary -->                   |
| [<!-- INCLUDE #collection.shift().Syntax -->](#shift)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.shift().Summary -->                         |
| [<!-- INCLUDE #collection.slice().Syntax -->](#slice)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.slice().Summary -->                         |
| [<!-- INCLUDE #collection.some().Syntax -->](#some)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.some().Summary -->                            |
| [<!-- INCLUDE #collection.sort().Syntax -->](#sort)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sort().Summary -->                            |
| [<!-- INCLUDE #collection.sum().Syntax -->](#sum)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sum().Summary -->                               |
| [<!-- INCLUDE #collection.unshift().Syntax -->](#unshift)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.unshift().Summary -->                   |

## `New collection`

<!-- REF #_command_.New collection.Syntax -->**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New collection.Params -->

| 引数    | タイプ                                                                     |     | 説明             |                  |
| ----- | ----------------------------------------------------------------------- | :-: | -------------- | ---------------- |
| value | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer |  -> | コレクションの値       |                  |
| 戻り値   | Collection                                                              |  <- | New collection | <!-- END REF --> |

#### 説明

The `New collection` command <!-- REF #_command_.New collection.Summary --> creates a new empty or prefilled collection<!-- END REF --> and returns its reference.

If you do not pass any parameters, `New collection` creates an empty collection and returns its reference.

返された参照は、コレクション型の 4D変数に代入する必要があります。

> Keep in mind that `var : Collection` or `C_COLLECTION` statements declare a variable of the `Collection` type but does not create any collection.

Optionally, you can prefill the new collection by passing one or several _value_(s) as parameter(s).

または、あとから代入によって要素を一つずつ追加・編集していくことができます。 例:

```4d
 myCol[10]:="My new element"
```

If the new element index is beyond the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a **null** value.

サポートされている型 (数値、テキスト、日付、ピクチャー、ポインター、オブジェクト、コレクション等) であれば、個数に制限なく値を渡すことができます。 配列とは異なり、コレクションでは異なる型のデータを混ぜることができます。

ただし以下の変換問題については注意する必要があります:

- If you pass a pointer, it is kept "as is"; it is evaluated using the `JSON Stringify` command
- 日付は、"dates inside objects" データベース設定に応じて、"yyyy-mm-dd" という日付、または "YYYY-MM-DDTHH:mm:ss.SSSZ" というフォーマットの文字列で保存されます。 コレクションに保存する前に 4D日付をテキストに変換した場合、プログラムはデフォルトでローカルのタイムゾーンを使用します。 You can modify this behavior using the `Dates inside objects` selector of the `SET DATABASE PARAMETER` command.
- 時間を渡した場合、それはミリ秒の数 (実数) として保存されます。

#### 例題 1

新しい空のコレクションを作成し、それを 4Dコレクション変数に代入します:

```4d
 var $myCol : Collection
 $myCol:=New collection
  //$myCol=[]
```

#### 例題 2

あらかじめ値の入ったコレクションを作成します:

```4d
 var $filledColl : Collection
 $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)
  //$filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]
```

#### 例題 3

新しいコレクションを作成し、そこに新しい要素を追加します:

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  //$coll=["a","b","c"]
 $coll[9]:="z" //add a 10th element with value "z"
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```

## `New shared collection`

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #_command_.New shared collection.Syntax -->**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New shared collection.Params -->

| 引数    | タイプ                                                                 |     | 説明                    |                  |
| ----- | ------------------------------------------------------------------- | :-: | --------------------- | ---------------- |
| value | Number, Text, Date, Time, Boolean, Shared object, Shared collection |  -> | 共有コレクションの値            |                  |
| 戻り値   | Collection                                                          |  <- | New shared collection | <!-- END REF --> |

#### 説明

The `New shared collection` command <!-- REF #_command_.New shared collection.Summary --> creates a new empty or prefilled shared collection<!-- END REF --> and returns its reference.

Adding an element to this collection using the assignment operator must be surrounded by the [`Use...End use`](Concepts/shared.md#useend-use) structure, otherwise an error is generated (this is not necessary when adding elements using functions such as [`push()`](#push) or [`map()`](#map) because they automatically trigger an internal _Use...End use_). Reading an element without a _Use...End use_ structure is, however, possible.

:::info

For more information on shared collections, please refer to the [Shared objects and collections](Concepts/shared.md) page.

:::

If you do not pass any parameters, `New shared collection` creates an empty shared collection and returns its reference.

返された参照は、コレクション型の 4D変数に代入する必要があります。

> Keep in mind that `var : Collection` or `C_COLLECTION` statements declare a variable of the `Collection` type but do not create any collection.

Optionally, you can prefill the new shared collection by passing one or several _value_(s) as parameter(s). または、あとからオブジェクト記法による代入で要素を一つずつ追加・編集していくことができます (例題参照)。

If the new element index is beyond the last existing element of the shared collection, the collection is automatically resized and all new intermediary elements are assigned a **null** value.

以下のサポートされる型であれば、いくつでも値を渡すことができます:

- 数値 (実数、倍長整数...)。 数値は常に実数として保存されます。
- text
- boolean
- date
- 時間 (ミリ秒の数 (実数) として保存されます)。
- null
- 共有オブジェクト(\*)
- 共有コレクション(\*)

:::note

標準のコレクション (非共有コレクション) とは異なり、共有コレクションはピクチャーやポインター、共有でないオブジェクトおよびコレクションはサポートしていません。

:::

(\*)When a shared object or collection is added to a shared collection, they share the same _locking identifier_. For more information on this point, refer to [4D Doc Center](https://doc.4d.com).

#### 例題

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```

<!-- REF collection.at().Desc -->

## .at()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v20   | 追加 |

</details>

<!-- REF #collection.at().Syntax -->**.at**( *index* : Integer ) : any <!-- END REF -->

<!-- REF #collection.at().Params -->

| 引数    | タイプ     |     | 説明                        |                  |
| ----- | ------- | :-: | ------------------------- | ---------------- |
| index | Integer |  -> | 取得する要素のインデックス             |                  |
| 戻り値   | any     |  <- | The element at that index | <!-- END REF --> |

#### 説明

The `.at()` function <!-- REF #collection.at().Summary -->returns the item at position _index_, allowing for positive and negative integers<!-- END REF -->.

> このコマンドは、元のコレクションを変更しません。

負の整数が渡された場合、コレクションの最後の要素から逆向きに数えます。

The function returns Undefined if _index_ is beyond collection limits.

#### 例題

```4d
var $col : Collection 
$col:=New collection(10; 20; 30; 40; 50)
$element:=$col.at(0) // 10
$element:=$col.at(1) // 20
$element:=$col.at(-1) // 50
$element:=$col.at(-2) // 40
$element:=$col.at(10) // undefined
```

<!-- END REF -->

<!-- REF collection.average().Desc -->

## .average()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.average().Syntax -->**.average**( {*propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.average().Params -->

| 引数           | タイプ             |     | 説明                                                                |                  |
| ------------ | --------------- | :-: | ----------------------------------------------------------------- | ---------------- |
| propertyPath | Text            |  -> | 計算に使用するオブジェクトプロパティのパス                                             |                  |
| 戻り値          | Real, Undefined |  <- | Arithmetic mean (average) of collection values | <!-- END REF --> |

#### 説明

The `.average()` function <!-- REF #collection.average().Summary -->returns the arithmetic mean (average) of defined values in the collection instance<!-- END REF -->.

計算の対象となるのは数値のみです (他の型の要素は無視されます)。

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property to take into account.

`.average()` returns `undefined` if:

- コレクションが空の場合
- コレクションに数値が含まれていない場合
- _propertyPath_ is not found in the collection.

#### 例題 1

```4d
 var $col : Collection
 $col:=New collection(10;20;"Monday";True;6)
 $vAvg:=$col.average() //12
```

#### 例題 2

```4d
 var $col : Collection
 $col:=New collection
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500))
 $vAvg:=$col.average("salary") //23500
```

<!-- END REF -->

<!-- REF collection.clear().Desc -->

## .clear()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.clear().Syntax -->**.clear()** : Collection<!-- END REF -->

<!-- REF #collection.clear().Params -->

| 引数  | タイプ        |     | 説明                                            |                  |
| --- | ---------- | :-: | --------------------------------------------- | ---------------- |
| 戻り値 | Collection |  <- | Original collection with all elements removed | <!-- END REF --> |

#### 説明

The `.clear()` function <!-- REF #collection.clear().Summary -->removes all elements from the collection instance and returns an empty collection<!-- END REF -->.

> このコマンドは、元のコレクションを変更します。

#### 例題

```4d
var $col : Collection
$col:=New collection(1;2;5)
$col.clear()
$vSize:=$col.length //$vSize=0
```

<!-- END REF -->

<!-- REF collection.combine().Desc -->

## .combine()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.combine().Syntax -->**.combine**( *col2* : Collection {; *index* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.combine().Params -->

| 引数    | タイプ        |     | 説明                                                                    |                  |
| ----- | ---------- | :-: | --------------------------------------------------------------------- | ---------------- |
| col2  | Collection |  -> | 追加するコレクション                                                            |                  |
| index | Integer    |  -> | 追加要素を挿入する位置 (デフォルトは length+1)                      |                  |
| 戻り値   | Collection |  <- | Original collection containing combined element(s) | <!-- END REF --> |

#### 説明

The `.combine()` function <!-- REF #collection.combine().Summary -->inserts _col2_ elements at the end or at the specified _index_ position in the collection instance and returns the edited collection<!-- END REF -->. Unlike the `.insert()` function, `.combine()` adds each value of _col2_ in the original collection, and not as a single collection element.

> このコマンドは、元のコレクションを変更します。

By default, _col2_ elements are added at the end of the orginal collection. You can pass in _index_ the position where you want the _col2_ elements to be inserted in the collection.

> **Warning**: Keep in mind that collection elements are numbered from 0.

- If _index_ > the length of the collection, the actual starting _index_ will be set to the length of the collection.
- If _index_ < 0, it is recalculated as _index:=index+length_ (it is considered as the offset from the end of the collection).
- If the calculated value is negative, _index_ is set to 0.

#### 例題

```4d
var $c; $fruits : Collection
$c:=New collection(1;2;3;4;5;6)
$fruits:=New collection("Orange";"Banana";"Apple";"Grape")
$c.combine($fruits;3) //[1,2,3,"Orange","Banana","Apple","Grape",4,5,6]
```

<!-- END REF -->

<!-- REF collection.concat().Desc -->

## .concat()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.concat().Syntax -->**.concat**( *value* : any { *;...valueN* } ) : Collection<!-- END REF -->

<!-- REF #collection.concat().Params -->

| 引数    | タイプ                                                            |     | 説明                                                                                              |                  |
| ----- | -------------------------------------------------------------- | :-: | ----------------------------------------------------------------------------------------------- | ---------------- |
| value | Number, Text, Object, Collection, Date, Time, Boolean, Picture |  -> | 連結する値。 If _value_ is a collection, all collection elements are added to the original collection |                  |
| 戻り値   | Collection                                                     |  <- | New collection with value(s) added to the original collection                | <!-- END REF --> |

#### 説明

The `.concat()` function <!-- REF #collection.concat().Summary -->returns a new collection containing the elements of the original collection with all elements of the _value_ parameter added to the end<!-- END REF -->.

> このコマンドは、元のコレクションを変更しません。

If _value_ is a collection, all its elements are added as new elements at the end of the original collection. If _value_ is not a collection, it is added itself as a new element.

#### 例題

```4d
var $c : Collection
$c:=New collection(1;2;3;4;5)
$fruits:=New collection("Orange";"Banana";"Apple";"Grape")
$fruits.push(New object("Intruder";"Tomato"))
$c2:=$c.concat($fruits) //[1,2,3,4,5,"Orange","Banana","Apple","Grape",{"Intruder":"Tomato"}]
$c2:=$c.concat(6;7;8) //[1,2,3,4,5,6,7,8]
```

<!-- END REF -->

<!-- REF collection.copy().Desc -->

## .copy()

<details><summary>履歴</summary>

| バージョン  | 内容                                                 |
| ------ | -------------------------------------------------- |
| v18 R3 | New _ck shared_ option. New _groupWith_ parameters |
| v16 R6 | 追加                                                 |

</details>

<!-- REF #collection.copy().Syntax -->**.copy**() : Collection<br/>**.copy**( *option* : Integer ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection<!-- END REF -->

<!-- REF #collection.copy().Params -->

| 引数           | タイプ        |     | 説明                                                                                                  |                  |
| ------------ | ---------- | :-: | --------------------------------------------------------------------------------------------------- | ---------------- |
| option       | Integer    |  -> | `ck resolve pointers`: resolve pointers before copying,<br/>`ck shared`: return a shared collection |                  |
| groupWithCol | Collection |  -> | 結果のコレクションとグループする共有コレクション                                                                            |                  |
| groupWithObj | Object     |  -> | 結果のコレクションとグループする共有オブジェクト                                                                            |                  |
| 戻り値          | Collection |  <- | Deep copy of the original collection                                                                | <!-- END REF --> |

#### 説明

The `.copy()` function <!-- REF #collection.copy().Summary --> returns a deep copy of the collection instance<!-- END REF -->._**Deep copy**_ means that objects or collections within the original collection are duplicated and do not share any reference with the returned collection.

> このコマンドは、元のコレクションを変更しません。

If passed, the _option_ parameter can contain one of the following constants (or both):

| option                | 説明                                                                                                                                                                                                                                                                                                                                                              |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck resolve pointers` | オリジナルのコレクションがポインター型の値を格納している場合、デフォルトではコピー先のオブジェクトもポインターを格納します。 However, you can resolve pointers when copying by passing the `ck resolve pointers` constant. この場合、コレクション内の各ポインターはコピー時に解決され、解決済みの値が使用されます。                                                                                                                                                       |
| `ck shared`           | By default, `copy()` returns a regular (not shared) collection, even if the command is applied to a shared collection. Pass the `ck shared` constant to create a shared collection. In this case, you can use the _groupWith_ parameter to associate the shared collection with another collection or object (see below). |

The _groupWithCol_ or _groupWithObj_ parameters allow you to designate a collection or an object with which the resulting collection should be associated.

:::note

データストア、データクラス、およびエンティティオブジェクトはコピーできません。 If `.copy()` is called with them, `Null` values are returned.

:::

#### 例題 1

We want to copy the _$lastnames_ regular (non shared) collection into the _$sharedObject_ shared object. To do this, we must create a shared copy of the collection (_$sharedLastnames_).

```4d
var $sharedObject : Object
var $lastnames;$sharedLastnames : Collection
var $text : Text

$sharedObject:=New shared object

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) // $lastnames は通常のコレクションです

$sharedLastnames:=$lastnames.copy(ck shared) // $sharedLastnames は共有コレクションです

// $sharedLastnames は $sharedObject の中に入れられます
Use($sharedObject)
    $sharedObject.lastnames:=$sharedLastnames
End use
```

#### 例題 2

We want to combine _$sharedColl1_ and _$sharedColl2_. これらは異なる共有グループに所属しているため、直接結合した場合にはエラーが生成されます。 Therefore, we must make a shared copy of _$sharedColl1_ and designate _$sharedColl2_ as a shared group for the copy.

```4d
var $sharedColl1;$sharedColl2;$copyColl : Collection

$sharedColl1:=New shared collection(New shared object("lastname";"Smith"))
$sharedColl2:=New shared collection(New shared object("lastname";"Brown"))

// $copyColl を $sharedColl2  と同じ共有グループに所属させます
 $copyColl:=$sharedColl1.copy(ck shared;$sharedColl2)
 Use($sharedColl2)
    $sharedColl2.combine($copyColl)
 End use
```

#### 例題 3

We have a regular collection (_$lastnames_) and we want to put it in the **Storage** of the application. To do this, we must create a shared copy beforehand (_$sharedLastnames_).

```4d
var $lastnames;$sharedLastnames : Collection
var $text : Text

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) // $lastnames は通常の (非共有) コレクションです

$sharedLastnames:=$lastnames.copy(ck shared) // 共有コピー

Use(Storage)
    Storage.lastnames:=$sharedLastnames
End use
```

#### 例題 4

This example illustrates the use of the `ck resolve pointers` option:

```4d
 var $col : Collection
 var $p : Pointer
 $p:=->$what

 $col:=New collection
 $col.push(New object("alpha";"Hello";"num";1))
 $col.push(New object("beta";"You";"what";$p))

 $col2:=$col.copy()
 $col2[1].beta:="World!"
 ALERT($col[0].alpha+" "+$col2[1].beta) //displays "Hello World!"

 $what:="You!"
 $col3:=$col2.copy(ck resolve pointers)
 ALERT($col3[0].alpha+" "+$col3[1].what) //displays "Hello You!"
```

<!-- END REF -->

<!-- REF collection.count().Desc -->

## .count()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.count().Syntax -->**.count**( { *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.count().Params -->

| 引数           | タイプ  |     | 説明                                   |                  |
| ------------ | ---- | :-: | ------------------------------------ | ---------------- |
| propertyPath | Text |  -> | 計算に使用するオブジェクトプロパティのパス                |                  |
| 戻り値          | Real |  <- | Number of elements in the collection | <!-- END REF --> |

#### 説明

The `.count()` function <!-- REF #collection.count().Summary -->returns the number of non-null elements in the collection<!-- END REF -->.

If the collection contains objects, you can pass the _propertyPath_ parameter. In this case, only elements that contain the _propertyPath_ are taken into account.

#### 例題

```4d
 var $col : Collection
 var $count1;$count2 : Real
 $col:=New collection(20;30;Null;40)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500))
 $col.push(New object("lastName";"Henry";"salary";12000))
 $count1:=$col.count() //$count1=7
 $count2:=$col.count("name") //$count2=3

```

<!-- END REF -->

<!-- REF collection.countValues().Desc -->

## .countValues()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.countValues().Syntax -->**.countValues**( *value* : any {; *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.countValues().Params -->

| 引数           | タイプ                                             |     | 説明                                 |                  |
| ------------ | ----------------------------------------------- | :-: | ---------------------------------- | ---------------- |
| value        | Text, Number, Boolean, Date, Object, Collection |  -> | 数える値                               |                  |
| propertyPath | Text                                            |  -> | 計算に使用するオブジェクトプロパティのパス              |                  |
| 戻り値          | Real                                            |  <- | Number of occurrences of the value | <!-- END REF --> |

#### 説明

The `.countValues()` function <!-- REF #collection.countValues().Summary -->returns the number of times value is found in the collection<!-- END REF -->.

You can pass in _value_:

- スカラー値 (テキスト、数値、ブール、日付)
- オブジェクトあるいはコレクションの参照

For an element to be found, the type of _value_ must be equivalent to the type of the element; the method uses the equality operator.

The optional _propertyPath_ parameter allows you to count values inside a collection of objects: pass in _propertyPath_ the path of the property whose values you want to count.

> このコマンドは、元のコレクションを変更しません。

#### 例題 1

```4d
 var $col : Collection
 var $vCount : Integer
 $col:=New collection(1;2;5;5;5;3;6;4)
 $vCount:=$col.countValues(5) // $vCount=3
```

#### 例題 2

```4d
 var $col : Collection
 var $vCount : Integer
 $col:=New collection
 $col.push(New object("name";"Smith";"age";5))
 $col.push(New object("name";"Wesson";"age";2))
 $col.push(New object("name";"Jones";"age";3))
 $col.push(New object("name";"Henry";"age";4))
 $col.push(New object("name";"Gross";"age";5))
 $vCount:=$col.countValues(5;"age") //$vCount=2
```

#### 例題 3

```4d
 var $numbers; $letters : Collection
 var $vCount : Integer

 $letters:=New collection("a";"b";"c")
 $numbers:=New collection(1;2;$letters;3;4;5)

 $vCount:=$numbers.countValues($letters) //$vCount=1
```

<!-- END REF -->

<!-- REF collection.distinct().Desc -->

## .distinct()

<details><summary>履歴</summary>

| バージョン  | 内容                           |
| ------ | ---------------------------- |
| v20    | Support of `ck count values` |
| v16 R6 | 追加                           |

</details>

<!-- REF #collection.distinct().Syntax -->**.distinct**( {*options* : Integer} ) : Collection<br/>**.distinct**( *propertyPath* : Text {; *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.distinct().Params -->

| 引数           | タイプ        |     | 説明                                       |                  |
| ------------ | ---------- | :-: | ---------------------------------------- | ---------------- |
| propertyPath | Text       |  -> | 重複しない値を取得する属性のパス                         |                  |
| options      | Integer    |  -> | `ck diacritical`, `ck count values`      |                  |
| 戻り値          | Collection |  <- | New collection with only distinct values | <!-- END REF --> |

#### 説明

The `.distinct()` function <!-- REF #collection.distinct().Summary -->returns a collection containing only distinct (different) values from the original collection<!-- END REF -->.

> このコマンドは、元のコレクションを変更しません。

返されたコレクションは自動的に並べ替えられています。 **Null** values are not returned.

If the collection contains objects, you can pass the _propertyPath_ parameter to indicate the object property whose distinct values you want to get.

In the _options_ parameter, you can pass one or a combination of the following constants:

| 定数                | 値  | 説明                                                                                                                                                                                                         |
| ----------------- | -- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck diacritical`  | 8  | 文字の大小とアクセントを区別して評価をおこないます。 省略された場合のデフォルトでは、アクセント等の発音区別符号を無視した評価が実行されます。                                                                                                                                    |
| `ck count values` | 32 | 特定の値を持つ要素の数 (重複がなければ 1、重複があればその数) を返します。 When this option is passed, `.distinct()` returns a collection of objects containing a pair of `{"value":*value*;"count":*count*}` attributes. |

#### 例題

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("a";"b";"c";"A";"B";"c";"b";"b")
 $c.push(New object("size";1))
 $c.push(New object("size";3))
 $c.push(New object("size";1))
 $c2:=$c.distinct() //$c2=["a","b","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct(ck diacritical) //$c2=["a","A","b","B","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct("size") //$c2=[1,3]
 $c3:=$c.distinct("size";ck count values) //$c3=[{value:1,count:2},{value:3,count:1}]

```

<!-- END REF -->

<!-- REF collection.equal().Desc -->

## .equal()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.equal().Syntax -->**.equal**( *collection2* : Collection {; *option* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #collection.equal().Params -->

| 引数          | タイプ        |     | 説明                                                                                  |                  |
| ----------- | ---------- | :-: | ----------------------------------------------------------------------------------- | ---------------- |
| collection2 | Collection |  -> | 比較するコレクション                                                                          |                  |
| option      | Integer    |  -> | `ck diacritical`: diacritical evaluation ("A" # "a" for example) |                  |
| 戻り値         | Boolean    |  <- | True if collections are identical, false otherwise                                  | <!-- END REF --> |

#### 説明

The `.equal()` function <!-- REF #collection.equal().Summary -->compares the collection with collection2 <!-- END REF -->and returns **true** if they are identical (deep comparison).

デフォルトでは、アクセント等の発音区別符号を無視した評価が実行されます。 If you want the evaluation to be case sensitive or to differentiate accented characters, pass the `ck diacritical` constant in the option parameter.

> Elements with **Null** values are not equal to Undefined elements.

#### 例題

```4d
 var $c; $c2 : Collection
 var $b : Boolean

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"orange");2;3;4)
 $b:=$c.equal($c2) // false

 $c:=New collection(New object("1";"a";"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"orange");2;3)
 $b:=$c.equal($c2) // false

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"ORange");2;3)
 $b:=$c.equal($c2) // true

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"ORange");2;3)
 $b:=$c.equal($c2;ck diacritical) //false
```

<!-- END REF -->

<!-- REF collection.every().Desc -->

## .every()

<details><summary>履歴</summary>

| バージョン  | 内容          |
| ------ | ----------- |
| v19 R6 | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.every().Syntax -->**.every**( { *startFrom* : Integer ; } *formula* : 4D.Function { ;*...param* : any } ) : Boolean<br/>**.every**( { *startFrom* : Integer ; } *methodName* : Text { ;*...param* : any } ) : Boolean<!-- END REF -->

<!-- REF #collection.every().Params -->

| 引数         | タイプ         |     | 説明                                                                   |                  |
| ---------- | ----------- | :-: | -------------------------------------------------------------------- | ---------------- |
| startFrom  | Integer     |  -> | テストを開始するインデックス                                                       |                  |
| formula    | 4D.Function |  -> | フォーミュラオブジェクト                                                         |                  |
| methodName | Text        |  -> | メソッド名                                                                |                  |
| param      | Mixed       |  -> | Parameter(s) to pass to _formula_ or _methodName_ |                  |
| 戻り値        | Boolean     |  <- | True if all elements successfully passed the test                    | <!-- END REF --> |

#### 説明

The `.every()` function <!-- REF #collection.every().Summary -->returns **true** if all elements in the collection successfully passed a test implemented in the provided _formula_ object or _methodName_ name<!-- END REF -->.

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for every element fulfilling the test. It receives an `Object` in first parameter ($1).

コールバックは以下の引数を受け取ります:

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

また、コールバックは以下のパラメーターを設定できます:

- (mandatory if you used a method) _$1.result_ (Boolean): **true** if the element value evaluation is successful, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. 返された値は最後に計算されたものです。

In all cases, at the point when the `.every()` function encounters the first collection element evaluated to **false**, it stops calling the callback and returns **false**.

By default, `.every()` tests the whole collection. Optionally, you can pass in _startFrom_ the index of the element from which to start the test.

- If _startFrom_ >= the collection's length, **false** is returned, which means the collection is not tested.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection ( _startFrom:=startFrom+length_).
- If _startFrom_ = 0, the whole collection is searched (default).

#### 例題 1

```4d
var $c : Collection  
var $b : Boolean
var $f : 4D.Function

$f:=Formula($1.value>0)
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every($f) //returns true
$c.push(-1)
$b:=$c.every($f) //returns false
```

#### 例題 2

コレクション要素がすべて実数型であるかをテストします:

```4d
var $c : Collection
var $b : Boolean
var $f : 4D.Function

$f:=Formula(Value type($1.value)=$2
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every($f;Is real) //$b=true
$c:=$c.push(New object("name";"Cleveland";"zc";35049))
$c:=$c.push(New object("name";"Blountsville";"zc";35031))
$b:=$c.every($f;Is real) //$b=false
```

<!-- END REF -->

<!-- REF collection.extract().Desc -->

## .extract()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.extract().Syntax -->**.extract**( *propertyPath* : Text { ; *option* : Integer } ) : Collection<br/>**.extract**( *propertyPath* : Text ;  *targetPath* : Text  { ;...*propertyPathN* : Text ;... *targetPathN* : Text } ) : Collection<!-- END REF -->

<!-- REF #collection.extract().Params -->

| 引数           | タイプ        |     | 説明                                                                                                                                                    |                  |
| ------------ | ---------- | :-: | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| propertyPath | Text       |  -> | 新しいコレクションに抽出する値のオブジェクトプロパティパス                                                                                                                         |                  |
| targetpath   | Text       |  -> | 抽出先のプロパティパスあるいはプロパティ名                                                                                                                                 |                  |
| option       | Integer    |  -> | `ck keep null`: include null properties in the returned collection (ignored by default). Parameter ignored if _targetPath_ passed. |                  |
| 戻り値          | Collection |  <- | New collection containing extracted values                                                                                                            | <!-- END REF --> |

#### 説明

The `.extract()` function <!-- REF #collection.extract().Summary -->creates and returns a new collection containing _propertyPath_ values extracted from the original collection of objects<!-- END REF -->.

> このコマンドは、元のコレクションを変更しません。

The contents of the returned collection depends on the _targetPath_ parameter:

- If the _targetPath_ parameter is omitted, `.extract()` populates the new collection with the _propertyPath_ values of the original collection.

  By default, elements for which _propertyPath_ is null or undefined are ignored in the resulting collection. You can pass the `ck keep null` constant in the _option_ parameter to include these values as null elements in the returned collection.

- If one or more _targetPath_ parameter(s) are passed, `.extract()` populates the new collection with the _propertyPath_ properties and each element of the new collection is an object with _targetPath_ properties filled with the corresponding _propertyPath_ properties. Null values are kept (_option_ parameter is ignored with this syntax).

#### 例題 1

```4d
var $c : Collection
$c:=New collection
$c.push(New object("name";"Cleveland"))
$c.push(New object("zip";5321))
$c.push(New object("name";"Blountsville"))
$c.push(42)
$c2:=$c.extract("name") // $c2=[Cleveland,Blountsville]
$c2:=$c.extract("name";ck keep null) //$c2=[Cleveland,null,Blountsville,null]
```

#### 例題 2

```4d
var $c : Collection
$c:=New collection
$c.push(New object("zc";35060))
$c.push(New object("name";Null;"zc";35049))
$c.push(New object("name";"Cleveland";"zc";35049))
$c.push(New object("name";"Blountsville";"zc";35031))
$c.push(New object("name";"Adger";"zc";35006))
$c.push(New object("name";"Clanton";"zc";35046))
$c.push(New object("name";"Clanton";"zc";35045))
$c2:=$c.extract("name";"City") //$c2=[{City:null},{City:Cleveland},{City:Blountsville},{City:Adger},{City:Clanton},{City:Clanton}]
$c2:=$c.extract("name";"City";"zc";"Zip") //$c2=[{Zip:35060},{City:null,Zip:35049},{City:Cleveland,Zip:35049},{City:Blountsville,Zip:35031},{City:Adger,Zip:35006},{City:Clanton,Zip:35046},{City:Clanton,Zip:35045}]
```

<!-- END REF -->

<!-- REF collection.fill().Desc -->

## .fill()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.fill().Syntax -->**.fill**( *value* : any ) : Collection<br/>**.fill**( *value* : any ;  *startFrom*  : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.fill().Params -->

| 引数        | タイプ                                             |     | 説明                                     |                  |
| --------- | ----------------------------------------------- | :-: | -------------------------------------- | ---------------- |
| value     | number, Text, Collection, Object, Date, Boolean |  -> | 代入する値                                  |                  |
| startFrom | Integer                                         |  -> | 開始インデックス (含まれる)     |                  |
| end       | Integer                                         |  -> | 終了インデックス (含まれない)    |                  |
| 戻り値       | collection                                      |  <- | Original collection with filled values | <!-- END REF --> |

#### 説明

The `.fill()` function <!-- REF #collection.fill().Summary -->fills the collection with the specified _value_, optionally from _startFrom_ index to _end_ index, and returns the resulting collection<!-- END REF -->.

> このコマンドは、元のコレクションを変更します。

- If the _startFrom_ parameter is omitted, _value_ is set to all collection elements (_startFrom_=0).
- If the _startFrom_ parameter is passed and _end_ omitted, _value_ is set to collection elements starting at _startFrom_ to the last element of the collection (_end_=length).
- If both the _startFrom_ parameter and _end_ are passed, _value_ is set to collection elements starting at _startFrom_ to the element _end_.

引数に矛盾がある場合、次のように解釈されます:

- If _startFrom_ < 0, it is recalculated as _startFrom:=startFrom+length_ (it is considered as the offset from the end of the collection). If the calculated value is negative, _startFrom_ is set to 0.
- If _end_ < 0 , it is recalculated as _end:=end+length_.
- If _end_ < _startFrom_ (passed or calculated values), the method does nothing.

#### 例題

```4d
 var $c : Collection
 $c:=New collection(1;2;3;"Lemon";Null;"";4;5)
 $c.fill("2") // $c:=[2,2,2,2,2,2,2,2]
 $c.fill("Hello";5) // $c=[2,2,2,2,2,Hello,Hello,Hello]
 $c.fill(0;1;5) // $c=[2,0,0,0,0,Hello,Hello,Hello]
 $c.fill("world";1;-5) //-5+8=3 -> $c=[2,"world","world",0,0,Hello,Hello,Hello]
```

<!-- END REF -->

<!-- REF collection.filter().Desc -->

## .filter()

<details><summary>履歴</summary>

| バージョン  | 内容          |
| ------ | ----------- |
| v19 R6 | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.filter().Syntax -->**.filter**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.filter**( *methodName* : Text { ; *...param* : any } ) : Collection<!-- END REF -->

<!-- REF #collection.filter().Params -->

| 引数         | タイプ         |     | 説明                                                                            |                  |
| ---------- | ----------- | :-: | ----------------------------------------------------------------------------- | ---------------- |
| formula    | 4D.Function |  -> | フォーミュラオブジェクト                                                                  |                  |
| methodName | Text        |  -> | メソッド名                                                                         |                  |
| param      | any         |  -> | Parameter(s) to pass to _formula_ or _methodName_          |                  |
| 戻り値        | Collection  |  <- | New collection containing filtered elements (shallow copy) | <!-- END REF --> |

#### 説明

The `.filter()` function <!-- REF #collection.filter().Summary -->returns a new collection containing all elements of the original collection for which the _formula_ or _methodName_ result is **true**<!-- END REF -->. This function returns a _**shallow copy**_, which means that objects or collections in both collections share the same reference. また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素をフィルターするために実行されるコールバックを指定します:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional) and an object in first parameter (_$1_). The callback can perform any test, with or without the parameter(s) and must return **true** for each element fulfilling the condition and thus, to push to the new collection.

コールバックは以下の引数を受け取ります:

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

また、コールバックは以下のパラメーターを設定できます:

- _$1.result_ (Boolean): **true** if the element value matches the filter condition and must be kept, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. 返された値は最後に計算されたものです。

:::note

When using _methodName_ as callback, and if the method does not return any value, `.filter()` will look at the property _$1.result_ that you must set to **true** for each element fulfilling the condition.

:::

#### 例題 1

コレクションから、長さが 6未満であるテキスト要素を取得します:

```4d
var $col;$colNew : Collection
$col:=New collection("hello";"world";"red horse";66;"tim";"san jose";"miami")
$colNew:=$col.filter(Formula((Value type($1.value)=Is text) && (Length($1.value)<$2)); 6)
  //$colNew=["hello","world","tim","miami"]
```

#### 例題 2

値の型に応じて要素をフィルターします:

```4d
 var $c;$c2;$c3 : Collection
 var $f : 4D.Function

 $f:=Formula(OB Get type($1;"value")=$2)
 $c:=New collection(5;3;1;4;6;2)
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c2:=$c.filter($f;Is real) // $c2=[5,3,1,4,6,2]
 $c3:=$c.filter($f;Is object)
  // $c3=[{name:Cleveland,zc:35049},{name:Blountsville,zc:35031}]
```

<!-- END REF -->

<!-- REF collection.find().Desc -->

## .find()

<details><summary>履歴</summary>

| バージョン  | 内容          |
| ------ | ----------- |
| v19 R6 | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.find().Syntax -->**.find**( { *startFrom* : Integer ; }  *formula* : 4D.Function { ; *...param* : any } ) : any<br/>**.find**( { *startFrom* : Integer ; }  *methodName* : Text { ; *...param* : any } ) : any<!-- END REF -->

<!-- REF #collection.find().Params -->

| 引数         | タイプ         |     | 説明                                                                   |                  |
| ---------- | ----------- | :-: | -------------------------------------------------------------------- | ---------------- |
| startFrom  | Integer     |  -> | 検索を開始するインデックス                                                        |                  |
| formula    | 4D.Function |  -> | フォーミュラオブジェクト                                                         |                  |
| methodName | Text        |  -> | メソッド名                                                                |                  |
| param      | any         |  -> | Parameter(s) to pass to _formula_ or _methodName_ |                  |
| 戻り値        | any         |  <- | First value found, or Undefined if not found                         | <!-- END REF --> |

#### 説明

The `.find()` function <!-- REF #collection.find().Summary -->returns the first value in the collection for which _formula_ or _methodName_ result, applied on each element, returns **true**<!-- END REF -->.

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for the first element fulfilling the condition. It receives an `Object` in first parameter ($1).

コールバックは以下の引数を受け取ります:

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

また、コールバックは以下のパラメーターを設定できます:

- (mandatory if you used a method) _$1.result_ (Boolean): **true** if the element value matches the search condition, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. 返された値は最後に計算されたものです。

By default, `.find()` searches in the whole collection. Optionally, you can pass in _startFrom_ the index of element from which to start the search.

- If _startFrom_ >= the collection's length, -1 is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_).
  **Note**: Even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

#### 例題 1

長さが 5未満の最初のテキスト要素を取得します:

```4d
var $col : Collection
$col:=New collection("hello";"world";4;"red horse";"tim";"san jose")
$value:=$col.find(Formula((Value type($1.value)=Is text) && (Length($1.value)<$2)); 5) //$value="tim"
```

#### 例題 2

コレクション内を都市名で検索します:

```4d
var $c : Collection
var $c2 : Object
$c:=New collection
$c.push(New object("name"; "Cleveland"; "zc"; 35049))
$c.push(New object("name"; "Blountsville"; "zc"; 35031))
$c.push(New object("name"; "Adger"; "zc"; 35006))
$c.push(New object("name"; "Clanton"; "zc"; 35046))
$c.push(New object("name"; "Clanton"; "zc"; 35045))

$c2:=$c.find(Formula($1.value.name=$2); "Clanton")  //$c2={name:Clanton,zc:35046}

```

<!-- END REF -->

<!-- REF collection.findIndex().Desc -->

## .findIndex()

<details><summary>履歴</summary>

| バージョン  | 内容          |
| ------ | ----------- |
| v19 R6 | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.findIndex().Syntax -->**.findIndex**( { *startFrom* : Integer ; }  *formula* : 4D.Function { ; *...param* : any } ) : Integer<br/>**.findIndex**( { *startFrom* : Integer ; }  *methodName* : Text { ; *...param* : any } ) : Integer<!-- END REF -->

<!-- REF #collection.findIndex().Params -->

| 引数         | タイプ         |     | 説明                                                                   |                  |
| ---------- | ----------- | :-: | -------------------------------------------------------------------- | ---------------- |
| startFrom  | Integer     |  -> | 検索を開始するインデックス                                                        |                  |
| formula    | 4D.Function |  -> | フォーミュラオブジェクト                                                         |                  |
| methodName | Text        |  -> | メソッド名                                                                |                  |
| param      | any         |  -> | Parameter(s) to pass to _formula_ or _methodName_ |                  |
| 戻り値        | Integer     |  <- | Index of first value found, or -1 if not found                       | <!-- END REF --> |

#### 説明

The `.findIndex()` function <!-- REF #collection.findIndex().Summary -->returns the index, in the collection, of the first value for which _formula_ or _methodName_, applied on each element, returns **true**<!-- END REF -->.

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for the first element fulfilling the condition. It receives an `Object` in first parameter ($1).

コールバックは以下の引数を受け取ります:

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

また、コールバックは以下のパラメーターを設定できます:

- (mandatory if you used a method) _$1.result_ (Boolean): **true** if the element value matches the search condition, **false** otherwise.
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. 返された値は最後に計算されたものです。

By default, `.findIndex()` searches in the whole collection. Optionally, you can pass in _startFrom_ the index of element from which to start the search.

- If _startFrom_ >= the collection's length, -1 is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_).
  **Note**: Even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

#### 例題

コレクション内で最初に合致する都市名の位置を探します:

```4d
var $c : Collection
var $val2;$val3 : Integer
$c:=New collection
$c.push(New object("name";"Cleveland";"zc";35049))
$c.push(New object("name";"Blountsville";"zc";35031))
$c.push(New object("name";"Adger";"zc";35006))
$c.push(New object("name";"Clanton";"zc";35046))
$c.push(New object("name";"Clanton";"zc";35045))
$val2:=$c.findIndex(Formula($1.value.name=$2);"Clanton") // $val2=3
$val3:=$c.findIndex($val2+1;Formula($1.value.name=$2);"Clanton") //$val3=4
```

<!-- END REF -->

<!-- REF collection.first().Desc -->

## .first()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v20   | 追加 |

</details>

<!-- REF #collection.first().Syntax -->**.first**() : any <!-- END REF -->

<!-- REF #collection.first().Params -->

| 引数  | タイプ |     | 説明                          |                  |
| --- | --- | :-: | --------------------------- | ---------------- |
| 戻り値 | any |  <- | First element of collection | <!-- END REF --> |

#### 説明

The `.first()` function <!-- REF #collection.first().Summary -->returns the first element of the collection<!-- END REF -->.

> このコマンドは、元のコレクションを変更しません。

コレクションが空の場合、この関数は undefined を返します。

#### 例題

```4d
var $col; $emptyCol : Collection
var $first : Variant
$col:=New collection(10; 20; 30; "hello"; 50)
$first:=$col.first() // 10

$emptyCol:=New collection() // 空のコレクション
// $first:=$emptyCol[0] // このコードはエラーを返します
$first:=$emptyCol.first() // このコードは undefined を返します
```

<!-- END REF -->

<!-- REF collection.flat().Desc -->

## .flat()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v20   | 追加 |

</details>

<!-- REF #collection.flat().Syntax -->**.flat**( { *depth* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.flat().Params -->

| 引数    | タイプ        |     | 説明                                      |                  |
| ----- | ---------- | :-: | --------------------------------------- | ---------------- |
| depth | Integer    |  -> | ネストされたコレクションの階層をどの範囲まで平坦化するか。 デフォルト = 1 |                  |
| 戻り値   | Collection |  <- | Flattened collection                    | <!-- END REF --> |

#### 説明

The `.flat()` function <!-- REF #collection.flat().Summary -->creates a new collection with all sub-collection elements concatenated into it recursively up to the specified _depth_<!-- END REF -->.

By default, if the _depth_ parameter is omitted, only the first level of the nested collection structure will be flattened.

> このコマンドは、元のコレクションを変更しません。

#### 例題

```4d
$col:=New collection(1; 2; New collection(3; 4))
$col.flat()
// [1, 2, 3, 4]

$col:=New collection(1; 2; New collection(3; 4; New collection(5; 6)))
$col.flat() // $col.flat(1) と同じ
// [1, 2, 3, 4, [5, 6]]

$col:=New collection(1; 2; New collection(3; 4; New collection(5; 6)))
$col.flat(2)
// [1, 2, 3, 4, 5, 6]

$col:=New collection(1; 2; New collection(3; 4; 5; 6; New collection(7; 8; New collection(9; 10))))
$col.flat(MAXLONG)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

<!-- END REF -->

<!-- REF collection.flatMap().Desc -->

## .flatMap()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v20   | 追加 |

</details>

<!-- REF #collection.flatMap().Syntax -->**.flatMap**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.flatMap**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.flatMap().Params -->

| 引数         | タイプ         |     | 説明                                                                   |                  |
| ---------- | ----------- | :-: | -------------------------------------------------------------------- | ---------------- |
| formula    | 4D.Function |  -> | フォーミュラオブジェクト                                                         |                  |
| methodName | Text        |  -> | メソッド名                                                                |                  |
| param      | any         |  -> | Parameter(s) to pass to _formula_ or _methodName_ |                  |
| 戻り値        | Collection  |  <- | Collection of transformed values and flattened by a depth of 1       | <!-- END REF --> |

#### 説明

The `.flatMap()` function <!-- REF #collection.flatMap().Summary -->creates a new collection based upon the result of the call of the _formula_ 4D function or _methodName_ method on each element of the original collection and flattened by a depth of 1<!-- END REF -->. Optionally, you can pass parameters to _formula_ or _methodName_ using the _param_ parameter(s).

This function is identical to a [`map()`](#map) call followed by a [`flat()`](#flat) call of depth 1.

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). 引数の有無にかかわらず、コールバックは任意の処理を実行でき、結果のコレクションに追加する変換後の新しい値を返さなくてはなりません。 It receives an `Object` in first parameter ($1).

コールバックは以下の引数を受け取ります:

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

また、コールバックは以下のパラメーターを設定できます:

- (mandatory if you used a method) _$1.result_ (any type): new transformed value to add to the resulting collection
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. 返された値は最後に計算されたものです。

#### 例題 1

```4d
var $col ; $result : Collection
$col:=New collection(1; 2; 3; 4)

$result:=$col.map(Formula(New collection($1.value*2))
 // [[2],[4],[6],[8]]

$result:=$col.flatMap(Formula(New collection($1.value*2))
// [2,4,6,8]
```

#### 例題 2

```
var $col; $result : Collection
$col:=New collection("Hello how"; ""; "are you ?")

$result:=$col.map(Formula(Split string($1.value; " ")))
// [["Hello", "how"], [], ["are", "you", "?"]]

$result:=$col.flatMap(Formula(Split string($1.value; " ")))
// ["Hello", "how", "are", "you", "?"]
```

#### 例題 3

コレクションに含まれる各値の合計に対する割合を計算します:

```4d
var $c; $c2 : Collection
var $f : 4D.Function
$c:=New collection(1; 4; 9; 10; 20)
$f:=Formula(New collection($1.value;Round(($1.value/$2)*100; 2)))
$c2:=$c.flatMap($f; $c.sum())
  //$c2=[1, 2.27, 4, 9.09,9, 20.45,10, 22.73, 20, 45.45]
```

<!-- END REF -->

<!-- REF collection.includes().Desc -->

## .includes()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v20   | 追加 |

</details>

<!-- REF #collection.includes().Syntax -->**.includes**( *toSearch* : expression { ; *startFrom* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #collection.includes().Params -->

| 引数        | タイプ     |     | 説明                                            |                  |
| --------- | ------- | :-: | --------------------------------------------- | ---------------- |
| toSearch  | 式       |  -> | コレクション内を検索する式                                 |                  |
| startFrom | Integer |  -> | 検索を開始するインデックス                                 |                  |
| 戻り値       | Boolean |  <- | True if _toSearch_ is found in the collection | <!-- END REF --> |

#### 説明

The `.includes()` function <!-- REF #collection.includes().Summary -->returns True if the _toSearch_ expression is found among collection elements, otherwise False<!-- END REF -->.

> このコマンドは、元のコレクションを変更しません。

In _toSearch_, pass the expression to find in the collection. 以下のものを渡すことができます:

- スカラー値 (テキスト、数値、ブール、日付)
- null 値
- オブジェクトあるいはコレクションの参照

_toSearch_ must match exactly the element to find (the same rules as for the equality operator of the data type are applied).

Optionally, you can pass the index of collection from which to start the search in _startFrom_.

- If _startFrom_ >= collection's length, False is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_). Note that even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

#### 例題

```4d
 var $col : Collection
 var $in : Boolean
 var $obj : Object
 $obj:=New object("value"; 10)
 $col:=New collection(1;2;"Henry";5;3;"Albert";6;4;"Alan";5;$obj)
 $in:=$col.includes(3) //True
 $in:=$col.includes(5;6) //True
 $in:=$col.includes("al@") //True
 $in:=$col.includes("Hello") //False
 $in:=$col.includes($obj)  //True
 $in:=$col.includes(New object("value"; 10)) //False
```

<!-- END REF -->

<!-- REF collection.indexOf().Desc -->

## .indexOf()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.indexOf().Syntax -->**.indexOf**(  *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.indexOf().Params -->

| 引数        | タイプ     |     | 説明                                                                           |                  |
| --------- | ------- | :-: | ---------------------------------------------------------------------------- | ---------------- |
| toSearch  | 式       |  -> | コレクション内を検索する式                                                                |                  |
| startFrom | Integer |  -> | 検索を開始するインデックス                                                                |                  |
| 戻り値       | Integer |  <- | Index of the first occurrence of toSearch in the collection, -1 if not found | <!-- END REF --> |

#### 説明

The `.indexOf()` function <!-- REF #collection.indexOf().Summary -->searches the _toSearch_ expression among collection elements and returns the index of the first found occurrence, or -1 if it was not found<!-- END REF -->.

> このコマンドは、元のコレクションを変更しません。

In _toSearch_, pass the expression to find in the collection. 以下のものを渡すことができます:

- スカラー値 (テキスト、数値、ブール、日付)
- null 値
- オブジェクトあるいはコレクションの参照

_toSearch_ must match exactly the element to find (the same rules as for the equality operator of the data type are applied).

Optionally, you can pass the index of collection from which to start the search in _startFrom_.

- If _startFrom_ >= the collection's length, -1 is returned, which means the collection is not searched.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection (_startFrom:=startFrom+length_).
  **Note**: Even if _startFrom_ is negative, the collection is still searched from left to right.
- If _startFrom_ = 0, the whole collection is searched (default).

#### 例題

```4d
 var $col : Collection
 var $i : Integer
 $col:=New collection(1;2;"Henry";5;3;"Albert";6;4;"Alan";5)
 $i:=$col.indexOf(3) //$i=4
 $i:=$col.indexOf(5;5) //$i=9
 $i:=$col.indexOf("al@") //$i=5
 $i:=$col.indexOf("Hello") //$i=-1
```

<!-- END REF -->

<!-- REF collection.indices().Desc -->

## .indices()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.indices().Syntax -->**.indices**(  *queryString* : Text { ; *...value* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.indices().Params -->

| 引数          | タイプ        |     | 説明                                                                          |                  |
| ----------- | ---------- | :-: | --------------------------------------------------------------------------- | ---------------- |
| queryString | Text       |  -> | 検索条件                                                                        |                  |
| value       | any        |  -> | プレースホルダー使用時: 比較する値                                                          |                  |
| 戻り値         | Collection |  <- | Element index(es) matching queryString in the collection | <!-- END REF --> |

#### 説明

The `.indices()` function works exactly the same as the [`.query()`](#query) function but <!-- REF #collection.indices().Summary -->returns indexes, in the original collection, of object collection elements that match the _queryString_ search conditions<!-- END REF -->, and not elements themselves. インデックスは、昇順に返されます。

> このコマンドは、元のコレクションを変更しません。

The _queryString_ parameter uses the following syntax:

```4d
propertyPath 比較演算子 値 {logicalOperator propertyPath 比較演算子 値}
```

For a detailed description of the _queryString_ and _value_ parameters, please refer to the `dataClass.query()` function.

#### 例題

```4d
 var $c; $icol : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))

 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $icol:=$c.indices("name = :1";"Cleveland") // $icol=[0]
 $icol:=$c.indices("zc > 35040") // $icol=[0,3,4]
```

<!-- END REF -->

<!-- REF collection.insert().Desc -->

## .insert()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.insert().Syntax -->**.insert**( *index* : Integer ; *element* : any ) : Collection <!-- END REF -->

<!-- REF #collection.insert().Params -->

| 引数      | タイプ        |     | 説明                                              |                  |
| ------- | ---------- | :-: | ----------------------------------------------- | ---------------- |
| index   | Integer    |  -> | 要素の挿入位置                                         |                  |
| element | any        |  -> | コレクションに挿入する要素                                   |                  |
| 戻り値     | Collection |  <- | Original collection containing inserted element | <!-- END REF --> |

#### 説明

The `.insert()` function <!-- REF #collection.insert().Summary --> inserts _element_ at the specified _index_ position in the collection instance and returns the edited collection<!-- END REF -->.

> このコマンドは、元のコレクションを変更します。

In _index_, pass the position where you want the element to be inserted in the collection.

> **Warning**: Keep in mind that collection elements are numbered from 0.

- If _index_ > the length of the collection, actual starting index will be set to the length of the collection.
- If _index_ <0, it is recalculated as _index:=index+length_ (it is considered as the offset from the end of the collection).
- 計算結果も負の値である場合、index は 0 に設定されます。

コレクションが受け入れるものであれば、どんな型の要素も (たとえば他のコレクションでも) 挿入可能です。

#### 例題

```4d
 var $col : Collection
 $col:=New collection("a";"b";"c";"d") //$col=["a","b","c","d"]
 $col.insert(2;"X") //$col=["a","b","X","c","d"]
 $col.insert(-2;"Y") //$col=["a","b","X","Y","c","d"]
 $col.insert(-10;"Hi") //$col=["Hi","a","b","X","Y","c","d"]
```

<!-- END REF -->

<!-- REF collection.join().Desc -->

## .join()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.join().Syntax -->**.join**( *delimiter* : Text { ; *option* : Integer } ) : Text <!-- END REF -->

<!-- REF #collection.join().Params -->

| 引数        | タイプ     |     | 説明                                                                       |                  |
| --------- | ------- | :-: | ------------------------------------------------------------------------ | ---------------- |
| delimiter | Text    |  -> | 要素間に用いる区切り文字                                                             |                  |
| option    | Integer |  -> | `ck ignore null or empty`: ignore null and empty strings in the result   |                  |
| 戻り値       | Text    |  <- | String containing all elements of the collection, separated by delimiter | <!-- END REF --> |

#### 説明

The `.join()` function <!-- REF #collection.join().Summary -->converts all elements of the collection to strings and concatenates them using the specified _delimiter_ string as separator<!-- END REF -->.The function returns the resulting string.

> このコマンドは、元のコレクションを変更しません。

デフォルトで、コレクションの null あるいは空の要素も戻り値の文字列に含めます。 Pass the `ck ignore null or empty` constant in the _option_ parameter if you want to remove them from the resulting string.

#### 例題

```4d
 var $c : Collection
 var $t1;$t2 : Text
 $c:=New collection(1;2;3;"Paris";Null;"";4;5)
 $t1:=$c.join("|") //1|2|3|Paris|null||4|5
 $t2:=$c.join("|";ck ignore null or empty) //1|2|3|Paris|4|5
```

<!-- END REF -->

<!-- REF collection.last().Desc -->

## .last()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v20   | 追加 |

</details>

<!-- REF #collection.last().Syntax -->**.last**() : any <!-- END REF -->

<!-- REF #collection.last().Params -->

| 引数  | タイプ |     | 説明                         |                  |
| --- | --- | :-: | -------------------------- | ---------------- |
| 戻り値 | any |  <- | Last element of collection | <!-- END REF --> |

#### 説明

The `.last()` function <!-- REF #collection.last().Summary -->returns the last element of the collection<!-- END REF -->.

> このコマンドは、元のコレクションを変更しません。

コレクションが空の場合、この関数は undefined を返します。

#### 例題

```4d
var $col; $emptyCol : Collection
var $last : Variant
$col:=New collection(10; 20; 30; "hello"; 50)
$last:=$col.last() // 50

$emptyCol:=New collection() //empty
// $last:=$emptyCol[$emptyCol.length-1] //returns an error
$last:=$emptyCol.last() // returns Undefined

```

<!-- END REF -->

<!-- REF collection.lastIndexOf().Desc -->

## .lastIndexOf()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.lastIndexOf().Syntax -->**.lastIndexOf**( *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.lastIndexOf().Params -->

| 引数        | タイプ     |     | 説明                                                                      |                  |
| --------- | ------- | :-: | ----------------------------------------------------------------------- | ---------------- |
| toSearch  | 式       |  -> | コレクション内を検索する要素                                                          |                  |
| startFrom | Integer |  -> | 検索を開始するインデックス                                                           |                  |
| 戻り値       | Integer |  <- | Index of last occurrence of toSearch in the collection, -1 if not found | <!-- END REF --> |

#### 説明

The `.lastIndexOf()` function <!-- REF #collection.lastIndexOf().Summary -->searches the _toSearch_ expression among collection elements and returns the index of the last occurrence<!-- END REF -->, or -1 if it was not found.

> このコマンドは、元のコレクションを変更しません。

In _toSearch_, pass the expression to find in the collection. 以下のものを渡すことができます:

- スカラー値 (テキスト、数値、ブール、日付)
- null 値
- オブジェクトあるいはコレクションの参照

_toSearch_ must match exactly the element to find (the same rules as for the equality operator are applied).

Optionally, you can pass the index of collection from which to start a reverse search in _startFrom_.

- If _startFrom_ >= the collection's length minus one (coll.length-1), the whole collection is searched (default).
- If _startFrom_ < 0, it is recalculated as _startFrom:=startFrom+length_ (it is considered as the offset from the end of the collection). 計算結果も負の値である場合、-1 が返されます。これはコレクションが検索されていないことを意味します。
  **Note:** Even if _startFrom_ is negative, the collection is still searched from right to left.
- If _startFrom_ = 0, -1 is returned, which means the collection is not searched.

#### 例題

```4d
 var $col : Collection
 var $pos1;$pos2;$pos3;$pos4;$pos5 : Integer
 $col:=Split string("a,b,c,d,e,f,g,h,i,j,e,k,e";",") //$col.length=13
 $pos1:=$col.lastIndexOf("e") //returns 12
 $pos2:=$col.lastIndexOf("e";6) //returns 4
 $pos3:=$col.lastIndexOf("e";15) //returns 12
 $pos4:=$col.lastIndexOf("e";-2) //returns 10
 $pos5:=$col.lastIndexOf("x") //returns -1
```

<!-- END REF -->

<!-- REF collection.length.Desc -->

## .length

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R5 | 追加 |

</details>

<!-- REF #collection.length.Syntax -->**.length** : Integer<!-- END REF -->

#### 説明

The `.length` property <!-- REF #collection.length.Summary -->returns the number of elements in the collection<!-- END REF -->.

The `.length` property is initialized when the collection is created. 要素を追加・削除すると、必要に応じて length は更新されます。 This property is **read-only** (you cannot use it to set the size of the collection).

#### 例題

```4d
 var $col : Collection //$col.length initialized to 0
 $col:=New collection("one";"two";"three") //$col.length updated to 3
 $col[4]:="five" //$col.length updated to 5
 $vSize:=$col.remove(0;3).length //$vSize=2
```

<!-- END REF -->

<!-- REF collection.map().Desc -->

## .map()

<details><summary>履歴</summary>

| バージョン  | 内容          |
| ------ | ----------- |
| v19 R6 | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.map().Syntax -->**.map**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.map**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.map().Params -->

| 引数         | タイプ         |     | 説明                                                                   |                  |
| ---------- | ----------- | :-: | -------------------------------------------------------------------- | ---------------- |
| formula    | 4D.Function |  -> | フォーミュラオブジェクト                                                         |                  |
| methodName | Text        |  -> | メソッド名                                                                |                  |
| param      | any         |  -> | Parameter(s) to pass to _formula_ or _methodName_ |                  |
| 戻り値        | Collection  |  <- | Collection of transformed values                                     | <!-- END REF --> |

#### 説明

The `.map()` function <!-- REF #collection.map().Summary -->creates a new collection based upon the result of the call of the _formula_ 4D function or _methodName_ method on each element of the original collection<!-- END REF -->. Optionally, you can pass parameters to _formula_ or _methodName_ using the _param_ parameter(s). `.map()` always returns a collection with the same size as the original collection, except if _$1.stop_ was used (see below).

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). 引数の有無にかかわらず、コールバックは任意の処理を実行でき、結果のコレクションに追加する変換後の新しい値を返さなくてはなりません。 It receives an `Object` in first parameter ($1).

コールバックは以下の引数を受け取ります:

- in _$1.value_: element value to be evaluated
- in _$2_: param
- in _$N..._: paramN...

また、コールバックは以下のパラメーターを設定できます:

- (mandatory if you used a method) _$1.result_ (any type): new transformed value to add to the resulting collection
- _$1.stop_ (Boolean, optional): **true** to stop the method callback. 返された値は最後に計算されたものです。

#### 例題

```4d
var $c; $c2 : Collection
$c:=New collection(1; 4; 9; 10; 20)
$c2:=$c.map(Formula(Round(($1.value/$2)*100; 2)); $c.sum())
  //$c2=[2.27,9.09,20.45,22.73,45.45]
```

<!-- END REF -->

<!-- REF collection.max().Desc -->

## .max()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.max().Syntax -->**.max**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.max().Params -->

| 引数           | タイプ                                             |     | 説明                              |                  |
| ------------ | ----------------------------------------------- | :-: | ------------------------------- | ---------------- |
| propertyPath | Text                                            |  -> | 評価するオブジェクトプロパティのパス              |                  |
| 戻り値          | Boolean, Text, Number, Collection, Object, Date |  <- | Maximum value in the collection | <!-- END REF --> |

#### 説明

The `.max()` function <!-- REF #collection.max().Summary -->returns the element with the highest value in the collection<!-- END REF --> (the last element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).

> このコマンドは、元のコレクションを変更しません。

If the collection contains different types of values, the `.max()` function will return the maximum value within the last element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property whose maximum value you want to get.

If the collection is empty, `.max()` returns _Undefined_.

#### 例題

```4d
 var $col : Collection
 $col:=New collection(200;150;55)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Alabama";"salary";10500))
 $max:=$col.max() //{name:Alabama,salary:10500}
 $maxSal:=$col.max("salary") //50000
 $maxName:=$col.max("name") //"Wesson"
```

<!-- END REF -->

<!-- REF collection.min().Desc -->

## .min()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.min().Syntax -->**.min**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.min().Params -->

| 引数           | タイプ                                             |     | 説明                              |                  |
| ------------ | ----------------------------------------------- | :-: | ------------------------------- | ---------------- |
| propertyPath | Text                                            |  -> | 評価するオブジェクトプロパティのパス              |                  |
| 戻り値          | Boolean, Text, Number, Collection, Object, Date |  <- | Minimum value in the collection | <!-- END REF --> |

#### 説明

The `.min()` function <!-- REF #collection.min().Summary -->returns the element with the smallest value in the collection<!-- END REF --> (the first element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).

> このコマンドは、元のコレクションを変更しません。

If the collection contains different types of values, the `.min()` function will return the minimum value within the first element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property whose minimum value you want to get.

If the collection is empty, `.min()` returns _Undefined_.

#### 例題

```4d
 var $col : Collection
 $col:=New collection(200;150;55)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Alabama";"salary";10500))
 $min:=$col.min() //55
 $minSal:=$col.min("salary") //10000
 $minName:=$col.min("name") //"Alabama"
```

<!-- END REF -->

<!-- REF collection.multiSort().Desc -->

## .multiSort()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v20 R3 | 追加 |

</details>

<!-- REF #collection.multiSort().Syntax -->**.multiSort**() : Collection<br/>**.multiSort**( *colsToSort* : Collection ) : Collection<br/>**.multiSort**( *formula* : 4D.Function ; *colsToSort* : Collection ) : Collection<!-- END REF -->

<!-- REF #collection.multiSort().Params -->

| 引数         | タイプ         |     | 説明                                                                                                                            |                  |
| ---------- | ----------- | :-: | ----------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| formula    | 4D.Function |  -> | フォーミュラオブジェクト                                                                                                                  |                  |
| colsToSort | Collection  |  -> | Collection of collections and/or objects with {`collection`:_colToSort_;`order`:`ck ascending` or `ck descending`} properties |                  |
| 戻り値        | Collection  |  <- | Original collection sorted                                                                                                    | <!-- END REF --> |

#### 説明

The `.multiSort()` function <!-- REF #collection.multiSort().Summary -->enables you to carry out a multi-level synchronized sort on a set of collections<!-- END REF -->.

> This function modifies the original collection as well as all collections used in _colsToSort_ parameter.

If `.multiSort()` is called with no parameters, the function has the same effect as the [`.sort()`](#sort) function: the collection is sorted (only scalar values) in ascending order by default, according to their type. コレクションが異なる型の要素を格納している場合、それらはまず型ごとにグループ分けされ、そのあとで並べ替えられます。 型は以下の順番で返されます:

1. null
2. ブール
3. 文字列
4. 数値
5. オブジェクト
6. コレクション
7. 日付

**Single-level synchronized sort**

To sort several collections synchronously, just pass in _colsToSort_ a collection of collections to sort. 渡せるコレクションの数に制限はありません。 The original collection will be sorted in ascending order and all _colsToSort_ collections will be sorted in a synchronized manner.

:::note

All _colsToSort_ collections must have the same number of elements, otherwise an error is returned.

:::

If you want to sort the collections in some other order than ascending, you must supply a _formula_ ([Formula object](FunctionClass.md#formula) that defines the sort order. The return value should be a boolean that indicates the relative order of the two elements: **True** if _$1.value_ is less than _$1.value2_, **False** if _$1.value_ is greater than _$1.value2_. 必要に応じて、 追加の引数をフォーミュラに渡せます。

フォーミュラは以下の引数を受け取ります:

- $1 (オブジェクト):
  - _$1.value_ (any type): first element value to be compared
  - _$1.value2_ (any type): second element value to be compared
- $2...$N (任意の型): 追加の引数

**Multi-level synchronized sort**

Defining a multi-level synchronized sort requires that you pass an object containing {`collection`:_colToSort_;`order`:`ck ascending` or `ck descending`} properties instead of the _colToSort_ itself for every collection to use as sub-level.

The sort levels are determined by the order in which the collections are passed in the _colsToSort_ parameter: the position of a `collection`/`order` object in the syntax determines its sort level.

:::note

The `.multiSort()` function uses a [stable](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability) sort algorithm.

:::

#### 例題 1

異なる値の型を持つコレクションの単純な同期ソート:

```4d
var $col;$col2;$col3 : Collection
$col:=["A"; "C"; "B"]
$col2:=[1; 2; 3]
$col3:=[["Jim"; "Philip"; "Maria"]; ["blue"; "green"]; ["11"; 22; "33"]]

$col.multiSort([$col2; $col3])
//$col=["A","B","C"]
//$col2=[1,3,2]
//$col3[0]=["Jim","Philip","Maria"]
//$col3[1]=["11",22,"33"]
//$col3[2]=["blue","green"]

```

#### 例題 2

city (都市)、country (国)、continent (大陸) の 3つのコレクションを同期ソートします。 continent のコレクションを昇順にソートし、country のコレクションを同期ソートさせ、その次のレベルで city のコレクションを昇順にソートします:

```4d
var $city : Collection
var $country : Collection
var $continent : Collection

$city:=["Paris"; "Lyon"; "Rabat"; "Eching"; "San Diego"]
$country:=["France"; "France"; "Morocco"; "Germany"; "US"]
$continent:=["Europe"; "Europe"; "Africa"; "Europe"; "America"]

$continent.multiSort([$country; {collection: $city; order: ck ascending}])
//$continent=["Africa","America","Europe","Europe","Europe"]
//$country=["Morocco","US","France","France","Germany"]
//$city=["Rabat","San Diego","Lyon","Paris","Eching"]

```

#### 例題 3

オブジェクトのコレクションを同期させることもできます。

```4d
var $name : Collection
var $address : Collection
$name:=[]
$name.push({firstname: "John"; lastname: "Smith"})
$name.push({firstname: "Alain"; lastname: "Martin"})
$name.push({firstname: "Jane"; lastname: "Doe"})
$name.push({firstname: "John"; lastname: "Doe"})
$address:=[]
$address.push({city: "Paris"; country: "France"})
$address.push({city: "Lyon"; country: "France"})
$address.push({city: "Eching"; country: "Germany"})
$address.push({city: "Berlin"; country: "Germany"})

$name.multiSort(Formula($1.value.firstname<$1.value2.firstname); [$address])
//"Alain Martin","Jane Doe","John Smith","John Doe"
//"Lyon France","Eching Germany","Paris France","Berlin Germany"

```

<!-- END REF -->

<!-- REF collection.orderBy().Desc -->

## .orderBy()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.orderBy().Syntax -->**.orderBy**( ) : Collection<br/>**.orderBy**( *pathStrings* : Text ) : Collection<br/>**.orderBy**( *pathObjects* : Collection ) : Collection<br/>**.orderBy**( *ascOrDesc* : Integer ) : Collection <!-- END REF -->

<!-- REF #collection.orderBy().Params -->

| 引数          | タイプ        |     | 説明                                                                   |                  |
| ----------- | ---------- | :-: | -------------------------------------------------------------------- | ---------------- |
| pathStrings | Text       |  -> | コレクションの並べ替え基準とするプロパティパス                                              |                  |
| pathObjects | Collection |  -> | 条件オブジェクトのコレクション                                                      |                  |
| ascOrDesc   | Integer    |  -> | `ck ascending` or `ck descending` (scalar values) |                  |
| 戻り値         | Collection |  <- | Ordered copy of the collection (shallow copy)     | <!-- END REF --> |

#### 説明

The `.orderBy()` function <!-- REF #collection.orderBy().Summary -->returns a new collection containing all elements of the collection in the specified order<!-- END REF -->.

This function returns a _shallow copy_, which means that objects or collections in both collections share the same reference. また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。

> このコマンドは、元のコレクションを変更しません。

引数を渡さなかった場合、メソッドはコレクション内のスカラー値を昇順に並べ替えます (オブジェクトやコレクションなどの他の型は並べ替えされないまま返されます)。 You can modify this automatic order by passing the `ck ascending` or `ck descending` constants in the _ascOrDesc_ parameter (see below).

また、引数を渡すことで、コレクション要素をどのように並べ替えるかを指定することもできます。 次の 3つのシンタックスがサポートされています:

- _pathStrings_ : Text (formula). **Syntax**: `propertyPath1 {desc or asc}, propertyPath2 {desc or asc},...` (default order: asc). _pathStrings_ contains a formula made of 1 to x property paths and (optionally) sort orders, separated by commas. プロパティを渡す順番が、コレクション要素の並べ替えの優先順位を決定します。 デフォルトでは、プロパティは昇順に並べ替えられます。 並び順を設定するには、プロパティパスの後に半角スペースで区切ったあとに、昇順を指定するには "asc"、降順を指定するには "desc" を渡します。

- _pathObjects_ : Collection. You can add as many objects in the _pathObjects_ collection as necessary. デフォルトでは、プロパティは昇順に並べ替えられます ("descending" は false)。 コレクションの各要素は、以下の構造を持つオブジェクトを格納します:

```4d
{
    "propertyPath": string,
    "descending": boolean

}
```

- _ascOrDesc_ : Integer. You pass one of the following constants from the **Objects and collections** theme:

  | 定数            | タイプ     | 値 | 説明                                      |
  | ------------- | ------- | - | --------------------------------------- |
  | ck ascending  | Longint | 0 | 要素は昇順に並べられます (デフォルト) |
  | ck descending | Longint | 1 | 要素は降順に並べられます                            |

  このシンタックスは、コレクション内のスカラー値のみを並べ替えます (オブジェクトやコレクションなどの他の型は並べ替えされないまま返されます)。

コレクションが異なる型の要素を格納している場合、それらはまず型ごとにグループ分けされ、そのあとで並べ替えられます。 型は以下の順番で返されます:

1. null
2. ブール
3. 文字列
4. 数値
5. オブジェクト
6. コレクション
7. 日付

#### 例題 1

数値のコレクションを昇順および降順に並べ替えます:

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(Random)
 End for
 $c2:=$c.orderBy(ck ascending)
 $c3:=$c.orderBy(ck descending)
```

#### 例題 2

オブジェクトのコレクションを、テキストフォーミュラに指定したプロパティ名に基づいて並べ替えます:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(New object("id";$vCounter;"value";Random))
 End for
 $c2:=$c.orderBy("value desc")
 $c2:=$c.orderBy("value desc, id")
 $c2:=$c.orderBy("value desc, id asc")
```

オブジェクトのコレクションをプロパティパスで並べ替えます:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"phones";New object("p1";"01";"p2";"02")))
 $c.push(New object("name";"Blountsville";"phones";New object("p1";"00";"p2";"03")))

 $c2:=$c.orderBy("phones.p1 asc")
```

#### 例題 3

オブジェクトのコレクションを、<em x-id="3">pathObjects</em> コレクションを使用して並べ替えます:

```4d
 var $crit; $c; $c2 : COllection
 $crit:=New collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(New object("id";$vCounter;"value";Random))
 End for
 $crit.push(New object("propertyPath";"value";"descending";True))
 $crit.push(New object("propertyPath";"id";"descending";False))
 $c2:=$c.orderBy($crit)
```

プロパティパスで並べ替えます:

```4d

 var $crit; $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"phones";New object("p1";"01";"p2";"02")))
 $c.push(New object("name";"Blountsville";"phones";New object("p1";"00";"p2";"03")))
 $crit:=New collection(New object("propertyPath";"phones.p2";"descending";True))
 $c2:=$c.orderBy($crit)
```

<!-- END REF -->

<!-- REF collection.orderByMethod().Desc -->

## .orderByMethod()

<details><summary>履歴</summary>

| バージョン  | 内容          |
| ------ | ----------- |
| v19 R6 | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.orderByMethod().Syntax -->**.orderByMethod**( *formula* : 4D.Function { ; ...*extraParam* : expression } ) : Collection<br/>**.orderByMethod**( *methodName* : Text { ; ...*extraParam* : expression } ) : Collection<!-- END REF -->

<!-- REF #collection.orderByMethod().Params -->

| 引数         | タイプ         |     | 説明                                                              |                  |
| ---------- | ----------- | :-: | --------------------------------------------------------------- | ---------------- |
| formula    | 4D.Function |  -> | フォーミュラオブジェクト                                                    |                  |
| methodName | Text        |  -> | メソッド名                                                           |                  |
| extraParam | any         |  -> | 渡す引数                                                            |                  |
| 戻り値        | Collection  |  <- | Sorted copy of the collection (shallow copy) | <!-- END REF --> |

#### 説明

The `.orderByMethod()` function <!-- REF #collection.orderByMethod().Summary -->returns a new collection containing all elements of the collection in the order defined through the _formula_ 4D function or _methodName_ method<!-- END REF -->.

This function returns a _shallow copy_, which means that objects or collections in both collections share the same reference. また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;

- or _methodName_, the name of a project method (text).

In the callback, pass some code that compares two values and returns **true** if the first value is lower than the second value. You can provide _extraParam_ parameters to the callback if necessary.

コールバックは以下の引数を受け取ります:

- $1 (オブジェクト):
  - _$1.value_ (any type): first element value to be compared
  - _$1.value2_ (any type): second element value to be compared
  - $2...$N (任意の型): 追加の引数

メソッドを使用する場合、以下の引数を設定する必要があります:

- _$1.result_ (boolean): **true** if _$1.value < $1.value2_, **false** otherwise

#### 例題 1

文字列のコレクションをアルファベット順ではなく、数値順に並べ替えます:

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("33";"4";"1111";"222")
 $c2:=$c.orderBy() //$c2=["1111","222","33","4"], alphabetical order
 $c3:=$c.orderByMethod(Formula(Num($1.value)<Num($1.value2))) // $c3=["4","33","222","1111"]
```

#### 例題 2

文字列のコレクションを、文字列の長さを基準に並べ替えます:

```4d
 var $fruits; $c2 : Collection
 $fruits:=New collection("Orange";"Apple";"Grape";"pear";"Banana";"fig";"Blackberry";"Passion fruit")
 $c2:=$fruits.orderByMethod(Formula(Length(String($1.value))>Length(String($1.value2))))
  //$c2=[Passion fruit,Blackberry,Orange,Banana,Apple,Grape,pear,fig]
```

#### 例題 3

文字コード順またはアルファベット順にコレクション要素を並べ替えます:

```4d
var $strings1; $strings2 : Collection
$strings1:=New collection("Alpha";"Charlie";"alpha";"bravo";"Bravo";"charlie")

// 文字コード順:
$strings2:=$strings1.orderByMethod(Function(sortCollection);sk character codes)
// 結果 : ["Alpha","Bravo","Charlie","alpha","bravo","charlie"]

// アルファベット順:
$strings2:=$strings1.orderByMethod(Function(sortCollection);sk strict)
// 結果 : ["alpha","Alpha","bravo","Bravo","charlie","Charlie"]
```

The _**sortCollection**_ method:

```4d
var $1 : Object
var $2: Integer // sort option

$1.result:=(Compare strings($1.value;$1.value2;$2)<0)
```

<!-- END REF -->

<!-- REF collection.pop().Desc -->

## .pop()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.pop().Syntax -->**.pop()** : any <!-- END REF -->

<!-- REF #collection.pop().Params -->

| 引数  | タイプ |     | 説明                         |                  |
| --- | --- | :-: | -------------------------- | ---------------- |
| 戻り値 | any |  <- | Last element of collection | <!-- END REF --> |

#### 説明

The `.pop()` function <!-- REF #collection.pop().Summary -->removes the last element from the collection and returns it as the function result<!-- END REF -->.

> このコマンドは、元のコレクションを変更します。

When applied to an empty collection, `.pop()` returns _**undefined**_.

#### 例題

`.pop()`, used in conjunction with [`.push()`](#push), can be used to implement a first-in, last-out stack feature:

```4d
 var $stack : Collection
 $stack:=New collection //$stack=[]
 $stack.push(1;2) //$stack=[1,2]
 $stack.pop() //$stack=[1]  Returns 2
 $stack.push(New collection(4;5)) //$stack=[[1,[4,5]]
 $stack.pop() //$stack=[1]  Returns [4,5]
 $stack.pop() //$stack=[]  Returns 1
```

<!-- END REF -->

<!-- REF collection.push().Desc -->

## .push()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.push().Syntax -->**.push**( *element* : any { ;...*elementN* } ) : Collection <!-- END REF -->

<!-- REF #collection.push().Params -->

| 引数      | タイプ        |     | 説明                                            |                  |
| ------- | ---------- | :-: | --------------------------------------------- | ---------------- |
| element | Mixed      |  -> | コレクションに追加する要素                                 |                  |
| 戻り値     | Collection |  <- | Original collection containing added elements | <!-- END REF --> |

#### 説明

The `.push()` function <!-- REF #collection.push().Summary -->appends one or more _element_(s) to the end of the collection instance and returns the edited collection<!-- END REF -->.

> このコマンドは、元のコレクションを変更します。

#### 例題 1

```4d
 var $col : Collection
 $col:=New collection(1;2) //$col=[1,2]
 $col.push(3) //$col=[1,2,3]
 $col.push(6;New object("firstname";"John";"lastname";"Smith"))
  //$col=[1,2,3,6,{firstname:John,lastname:Smith}
```

#### 例題 2

戻り値のコレクションを並び替えます:

```4d
 var $col; $sortedCol : Collection
 $col:=New collection(5;3;9) //$col=[5,3,9]
 $sortedCol:=$col.push(7;50).sort()
  //$col=[5,3,9,7,50]
  //$sortedCol=[3,5,7,9,50]
```

<!-- END REF -->

<!-- REF collection.query().Desc -->

## .query()

<details><summary>履歴</summary>

| バージョン  | 内容                  |
| ------ | ------------------- |
| v17 R5 | querySettings をサポート |
| v16 R6 | 追加                  |

</details>

<!-- REF #collection.query().Syntax -->**.query**( *queryString* : Text ; *...value* : any ) : Collection<br/>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection <!-- END REF -->

<!-- REF #collection.query().Params -->

| 引数            | タイプ        |     | 説明                                                                   |                  |
| ------------- | ---------- | :-: | -------------------------------------------------------------------- | ---------------- |
| queryString   | Text       |  -> | 検索条件                                                                 |                  |
| value         | Mixed      |  -> | プレースホルダー使用時: 比較する値                                                   |                  |
| querySettings | Object     |  -> | クエリオプション: parameters, attributes 他                                   |                  |
| 戻り値           | Collection |  <- | Element(s) matching queryString in the collection | <!-- END REF --> |

#### 説明

The `.query()` function <!-- REF #collection.query().Summary -->returns all elements of a collection of objects that match the search conditions <!-- END REF -->defined by _queryString_ and (optionally) _value_ or _querySettings_. また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。

> このコマンドは、元のコレクションを変更しません。

The _queryString_ parameter uses the following syntax:

```4d
propertyPath 比較演算子 値 {logicalOperator propertyPath 比較演算子 値}
```

For detailed information on how to build a query using _queryString_, _value_ and _querySettings_ parameters, please refer to the [`dataClass.query()`](DataClassClass.md#query) function description.

> Formulas are not supported by the `collection.query()` function, neither in the _queryString_ parameter nor as _formula_ object parameter.

#### 例題 1

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $c2:=$c.query("name = :1";"Cleveland") //$c2=[{name:Cleveland,zc:35049}]
 $c3:=$c.query("zc > 35040") //$c3=[{name:Cleveland,zc:35049},{name:Clanton,zc:35046},{name:Clanton,zc:35045}]
```

#### 例題 2

```4d
 var $c : Collection
 $c:=New collection
 $c.push(New object("name";"Smith";"dateHired";!22-05-2002!;"age";45))
 $c.push(New object("name";"Wesson";"dateHired";!30-11-2017!))
 $c.push(New object("name";"Winch";"dateHired";!16-05-2018!;"age";36))

 $c.push(New object("name";"Sterling";"dateHired";!10-5-1999!;"age";Null))
 $c.push(New object("name";"Mark";"dateHired";!01-01-2002!))
```

上記のオブジェクトに対し、以下のクエリは名前に "in" が含まれている人物を返します:

```4d
 $col:=$c.query("name = :1";"@in@")
  //$col=[{name:Winch...},{name:Sterling...}]
```

以下のクエリは、変数に格納した文字列 (ユーザーが入力した文字列など) から名前が始まらない人物を返します:

```4d
 $col:=$c.query("name # :1";$aString+"@")
  //if $astring="W"
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}]
```

以下のクエリは、年齢が不明な (プロパティが null あるいは undefined に設定されている) 人物を返します:

```4d
 $col:=$c.query("age=null") //placeholders not allowed with "null"
  //$col=[{name:Wesson...},{name:Sterling...},{name:Mark...}]
```

以下のクエリは、採用から90日を超えている人物を返します:

```4d
 $col:=$c.query("dateHired < :1";(Current date-90))
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}] if today is 01/10/2018
```

#### 例題 3

More examples of queries can be found in the `dataClass.query()` page.

<!-- END REF -->

<!-- REF collection.reduce().Desc -->

## .reduce()

<details><summary>履歴</summary>

| バージョン  | 内容          |
| ------ | ----------- |
| v19 R6 | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.reduce().Syntax -->**.reduce**( *formula* : 4D.Function { ; *initValue* : any { ; *...param* : expression }} ) : any<br/>**.reduce**( *methodName* : Text { ; *initValue* : any { ; *...param* : expression }} ) : any <!-- END REF -->

<!-- REF #collection.reduce().Params -->

| 引数         | タイプ                                             |     | 説明                                                                                |                  |
| ---------- | ----------------------------------------------- | :-: | --------------------------------------------------------------------------------- | ---------------- |
| formula    | 4D.Function                                     |  -> | フォーミュラオブジェクト                                                                      |                  |
| methodName | Text                                            |  -> | メソッド名                                                                             |                  |
| initValue  | Text, Number, Object, Collection, Date, Boolean |  -> | Value to use as the first argument to the first call of _formula_ or _methodName_ |                  |
| param      | 式                                               |  -> | 渡す引数                                                                              |                  |
| 戻り値        | Text, Number, Object, Collection, Date, Boolean |  <- | Result of the accumulator value                                                   | <!-- END REF --> |

#### 説明

The `.reduce()` function <!-- REF #collection.reduce().Summary -->applies the _formula_ or _methodName_ callback against an accumulator and each element in the collection (from left to right) to reduce it to a single value<!-- END REF -->.

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback takes each collection element and performs any desired operation to accumulate the result into _$1.accumulator_, which is returned in _$1.value_.

You can pass the value to initialize the accumulator in _initValue_. If omitted, _$1.accumulator_ starts with _Undefined_.

コールバックは以下の引数を受け取ります:

- in _$1.value_: element value to be processed
- in _$2: param_
- in _$N..._: _paramN..._

コールバックは以下のパラメーターを設定します:

- _$1.accumulator_: value to be modified by the function and which is initialized by _initValue_.
- _$1.stop_ (boolean, optional): **true** to stop the method callback. 返された値は最後に計算されたものです。

#### 例題 1

```4d
var $c : Collection
$c:=New collection(5;3;5;1;3;4;4;6;2;2)
$r:=$c.reduce(Formula($1.accumulator*=$1.value); 1)  // 戻り値は 86400 です
```

#### 例題 2

複数のコレクション要素を単一の値にまとめます:

```4d
 var $c;$r : Collection
 $c:=New collection
 $c.push(New collection(0;1))
 $c.push(New collection(2;3))
 $c.push(New collection(4;5))
 $c.push(New collection(6;7))
 $r:=$c.reduce(Formula(Flatten)) //$r=[0,1,2,3,4,5,6,7]
```

With the following _**Flatten**_ method:

```4d
 If($1.accumulator=Null)
    $1.accumulator:=New collection
 End if
 $1.accumulator.combine($1.value)
```

<!-- END REF -->

<!-- REF collection.reduceRight().Desc -->

## .reduceRight()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v20   | 追加 |

</details>

<!-- REF #collection.reduceRight().Syntax -->**.reduceRight**( *formula* : 4D.Function { ; *initValue* : any { ; *...param* : expression }} ) : any<br/>**.reduceRight**( *methodName* : Text { ; *initValue* : any { ; *...param* : expression }} ) : any <!-- END REF -->

<!-- REF #collection.reduceRight().Params -->

| 引数         | タイプ                                             |     | 説明                                                                                |                  |
| ---------- | ----------------------------------------------- | :-: | --------------------------------------------------------------------------------- | ---------------- |
| formula    | 4D.Function                                     |  -> | フォーミュラオブジェクト                                                                      |                  |
| methodName | Text                                            |  -> | メソッド名                                                                             |                  |
| initValue  | Text, Number, Object, Collection, Date, Boolean |  -> | Value to use as the first argument to the first call of _formula_ or _methodName_ |                  |
| param      | 式                                               |  -> | 渡す引数                                                                              |                  |
| 戻り値        | Text, Number, Object, Collection, Date, Boolean |  <- | Result of the accumulator value                                                   | <!-- END REF --> |

#### 説明

The `.reduceRight()` function <!-- REF #collection.reduceRight().Summary -->applies the _formula_ or _methodName_ callback against an accumulator and each element in the collection (from right to left) to reduce it to a single value<!-- END REF -->.

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback takes each collection element and performs any desired operation to accumulate the result into _$1.accumulator_, which is returned in _$1.value_.

You can pass the value to initialize the accumulator in _initValue_. If omitted, _$1.accumulator_ starts with _Undefined_.

コールバックは以下の引数を受け取ります:

- in _$1.value_: element value to be processed
- in _$2: param_
- in _$N..._: _paramN..._

コールバックは以下のパラメーターを設定します:

- _$1.accumulator_: value to be modified by the function and which is initialized by _initValue_.
- _$1.stop_ (boolean, optional): **true** to stop the method callback. 返された値は最後に計算されたものです。

#### 例題 1

```4d
var $c : Collection
$c:=New collection(5;3;5;1;3;4;4;6;2;2)
$r:=$c.reduceRight(Formula($1.accumulator*=$1.value); 1)  //returns 86400

```

#### 例題 2

複数のコレクション要素を単一の値にまとめます:

```4d
 var $c;$r : Collection
 $c:=New collection
 $c.push(New collection(0;1))
 $c.push(New collection(2;3))
 $c.push(New collection(4;5))
 $c.push(New collection(6;7))
 $r:=$c.reduceRight(Formula(Flatten)) //$r=[6,7,4,5,2,3,0,1]
```

With the following _**Flatten**_ method:

```4d
	//Flatten project method
 If($1.accumulator=Null)
    $1.accumulator:=New collection
 End if
 $1.accumulator.combine($1.value)
```

<!-- END REF -->

<!-- REF collection.remove().Desc -->

## .remove()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.remove().Syntax -->**.remove**( *index* : Integer { ; *howMany* : Integer } ) : Collection <!-- END REF -->

<!-- REF #collection.remove().Params -->

| 引数      | タイプ        |     | 説明                                                                |                  |
| ------- | ---------- | :-: | ----------------------------------------------------------------- | ---------------- |
| index   | Integer    |  -> | 削除を開始する要素の位置                                                      |                  |
| howMany | Integer    |  -> | 削除する要素の数、省略時は 1要素を削除                                              |                  |
| 戻り値     | Collection |  <- | Original collection without removed element(s) | <!-- END REF --> |

#### 説明

The `.remove()` function <!-- REF #collection.remove().Summary -->removes one or more element(s) from the specified _index_ position in the collection and returns the edited collection<!-- END REF -->.

> このコマンドは、元のコレクションを変更します。

In _index_, pass the position where you want the element to be removed from the collection.

> **Warning**: Keep in mind that collection elements are numbered from 0. If _index_ is greater than the length of the collection, actual starting index will be set to the length of the collection.

- If _index_ < 0, it is recalculated as _index:=index+length_ (it is considered as the offset from the end of the collection).
- If the calculated value < 0, _index_ is set to 0.
- If the calculated value > the length of the collection, _index_ is set to the length.

In _howMany_, pass the number of elements to remove from _index_. If _howMany_ is not specified, then one element is removed.

空のコレクションから要素を削除しようとした場合、関数は何もしません (エラーは生成されません)。

#### 例題

```4d
 var $col : Collection
 $col:=New collection("a";"b";"c";"d";"e";"f";"g";"h")
 $col.remove(3) // $col=["a","b","c","e","f","g","h"]
 $col.remove(3;2) // $col=["a","b","c","g","h"]
 $col.remove(-8;1) // $col=["b","c","g","h"]
 $col.remove(-3;1) // $col=["b","g","h"]
```

<!-- END REF -->

<!-- REF collection.resize().Desc -->

## .resize()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.resize().Syntax -->**.resize**( *size* : Integer { ; *defaultValue* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.resize().Params -->

| 引数           | タイプ                                             |     | 説明                          |                  |
| ------------ | ----------------------------------------------- | :-: | --------------------------- | ---------------- |
| size         | Integer                                         |  -> | コレクションの新しいサイズ               |                  |
| defaultValue | Number, Text, Object, Collection, Date, Boolean |  -> | 新規要素のデフォルト値                 |                  |
| 戻り値          | Collection                                      |  <- | Resized original collection | <!-- END REF --> |

#### 説明

The `.resize()` function <!-- REF #collection.resize().Summary -->sets the collection length to the specified new size and returns the resized collection<!-- END REF -->.

> このコマンドは、元のコレクションを変更します。

- If _size_ < collection length, exceeding elements are removed from the collection.
- If _size_ > collection length, the collection length is increased to size.

By default, new elements are filled will **null** values. You can specify the value to fill in added elements using the _defaultValue_ parameter.

#### 例題

```4d
 var $c : Collection
 $c:=New collection
 $c.resize(10) // $c=[null,null,null,null,null,null,null,null,null,null]

 $c:=New collection
 $c.resize(10;0) // $c=[0,0,0,0,0,0,0,0,0,0]

 $c:=New collection(1;2;3;4;5)
 $c.resize(10;New object("name";"X")) //$c=[1,2,3,4,5,{name:X},{name:X},{name:X},{name:X},{name:X}]

 $c:=New collection(1;2;3;4;5)
 $c.resize(2) //$c=[1,2]

```

<!-- END REF -->

<!-- REF collection.reverse().Desc -->

## .reverse()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.reverse().Syntax -->**.reverse( )** : Collection <!-- END REF -->

<!-- REF #collection.reverse().Params -->

| 引数  | タイプ        |     | 説明                              |                  |
| --- | ---------- | :-: | ------------------------------- | ---------------- |
| 戻り値 | Collection |  <- | Inverted copy of the collection | <!-- END REF --> |

#### 説明

The `.reverse()` function <!-- REF #collection.reverse().Summary -->returns a deep copy of the collection with all its elements in reverse order<!-- END REF -->. また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。

> このコマンドは、元のコレクションを変更しません。

#### 例題

```4d
 var $c; $c2 : Collection
 $c:=New collection(1;3;5;2;4;6)
 $c2:=$c.reverse() //$c2=[6,4,2,5,3,1]
```

<!-- END REF -->

<!-- REF collection.shift().Desc -->

## .shift()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.shift().Syntax -->**.shift()** : any<!-- END REF -->

<!-- REF #collection.shift().Params -->

| 引数  | タイプ |     | 説明                          |                  |
| --- | --- | :-: | --------------------------- | ---------------- |
| 戻り値 | any |  <- | First element of collection | <!-- END REF --> |

#### 説明

The `.shift()` function <!-- REF #collection.shift().Summary -->removes the first element of the collection and returns it as the function result<!-- END REF -->.

> このコマンドは、元のコレクションを変更します。

コレクションが空の場合、 関数はなにもしません。

#### 例題

```4d
 var $c : Collection
 var $val : Variant
 $c:=New collection(1;2;4;5;6;7;8)
 $val:=$c.shift()
  // $val=1
  // $c=[2,4,5,6,7,8]
```

<!-- END REF -->

<!-- REF collection.slice().Desc -->

## .slice()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.slice().Syntax -->**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.slice().Params -->

| 引数        | タイプ        |     | 説明                                                                          |                  |
| --------- | ---------- | :-: | --------------------------------------------------------------------------- | ---------------- |
| startFrom | Integer    |  -> | 開始インデックス (含まれる)                                          |                  |
| end       | Integer    |  -> | 終了インデックス (含まれない)                                         |                  |
| 戻り値       | Collection |  <- | New collection containing sliced elements (shallow copy) | <!-- END REF --> |

#### 説明

The `.slice()` function <!-- REF #collection.slice().Summary -->returns a portion of a collection into a new collection<!-- END REF -->, selected from _startFrom_ index to _end_ index (end not included). This function returns a _shallow copy_ of the collection. また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。

> このコマンドは、元のコレクションを変更しません。

The returned collection contains the element specified by _startFrom_ and all subsequent elements up to, but not including, the element specified by _end_. If only the _startFrom_ parameter is specified, the returned collection contains all elements from _startFrom_ to the last element of the original collection.

- If _startFrom_ < 0, it is recalculated as _startFrom:=startFrom+length_ (it is considered as the offset from the end of the collection).
- If the calculated value < 0, _startFrom_ is set to 0.
- If _end_ < 0 , it is recalculated as _end:=end+length_.
- If _end < startFrom_ (passed or calculated values), the method does nothing.

#### 例題

```4d
 var $c; $nc : Collection
 $c:=New collection(1;2;3;4;5)
 $nc:=$c.slice(0;3) //$nc=[1,2,3]
 $nc:=$c.slice(3) //$nc=[4,5]
 $nc:=$c.slice(1;-1) //$nc=[2,3,4]
 $nc:=$c.slice(-3;-2) //$nc=[3]
```

<!-- END REF -->

<!-- REF collection.some().Desc -->

## .some()

<details><summary>履歴</summary>

| バージョン  | 内容          |
| ------ | ----------- |
| v19 R6 | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.some().Syntax -->**.some**( { *startFrom* : Integer ; } *formula* : 4D.Function { ; *...param* : any } ) : Boolean<br/>**.some**( { *startFrom* : Integer ; } *methodName* : Text { ; *...param* : any } ) : Boolean<!-- END REF -->

<!-- REF #collection.some().Params -->

| 引数         | タイプ         |     | 説明                                                        |                  |
| ---------- | ----------- | :-: | --------------------------------------------------------- | ---------------- |
| startFrom  | Integer     |  -> | テストを開始するインデックス                                            |                  |
| formula    | 4D.Function |  -> | フォーミュラオブジェクト                                              |                  |
| methodName | Text        |  -> | メソッド名                                                     |                  |
| param      | Mixed       |  -> | 渡す引数                                                      |                  |
| 戻り値        | Boolean     |  <- | True if at least one element successfully passed the test | <!-- END REF --> |

#### 説明

The `.some()` function <!-- REF #collection.some().Summary -->returns true if at least one element in the collection successfully passed a test implemented in the provided _formula_ or _methodName_ code<!-- END REF -->.

次のいずれかを使用して、コレクション要素を評価するために実行されるコード (コールバック) を指定します:

- _formula_ (recommended syntax), a [Formula object](FunctionClass.md) that can encapsulate any executable expressions, including functions and project methods;
- or _methodName_, the name of a project method (text).

The callback is called with the parameter(s) passed in _param_ (optional). The callback can perform any test, with or without the parameter(s) and must return **true** for every element fulfilling the test. It receives an `Object` in first parameter ($1).

コールバックは以下の引数を受け取ります:

- in _$1.value_: element value to be processed
- in _$2: param_
- in _$N..._: _paramN..._

また、コールバックは以下のパラメーターを設定できます:

- (mandatory if you used a method) _$1.result_ (boolean): **true** if the element value evaluation is successful, **false** otherwise.
- _$1.stop_ (boolean, optional): **true** to stop the method callback. 返された値は最後に計算されたものです。

In any case, at the point where `.some()` function encounters the first collection element returning true, it stops calling the callback and returns **true**.

By default, `.some()` tests the whole collection. Optionally, you can pass the index of an element from which to start the test in _startFrom_.

- If _startFrom_ >= the collection's length, **False** is returned, which means the collection is not tested.
- If _startFrom_ < 0, it is considered as the offset from the end of the collection.
- If _startFrom_ = 0, the whole collection is searched (default).

#### 例題

You want to know if at least one collection value is >0.

```4d
 var $c : Collection
 var $b : Boolean
 $c:=New collection
 $c.push(-5;-3;-1;-4;-6;-2)
 $b:=$c.some(Formula($1.value>0)) // $b=false
 $c.push(1)
 $b:=$c.some(Formula($1.value>0)) // $b=true

 $c:=New collection
 $c.push(1;-5;-3;-1;-4;-6;-2)
 $b:=$c.some(Formula($1.value>0)) //$b=true
 $b:=$c.some(1;Formula($1.value>0)) //$b=false
```

<!-- END REF -->

<!-- REF collection.sort().Desc -->

## .sort()

<details><summary>履歴</summary>

| バージョン  | 内容          |
| ------ | ----------- |
| v19 R6 | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.sort().Syntax -->**.sort**() : Collection<br/>**.sort**( *formula* : 4D.Function { ; *...extraParam* : any } ) : Collection<br/>**.sort**( *methodName* : Text { ; *...extraParam* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.sort().Params -->

| 引数         | タイプ         |     | 説明                         |                  |
| ---------- | ----------- | :-: | -------------------------- | ---------------- |
| formula    | 4D.Function |  -> | フォーミュラオブジェクト               |                  |
| methodName | Text        |  -> | メソッド名                      |                  |
| extraParam | any         |  -> | methodName に渡す引数           |                  |
| 戻り値        | Collection  |  <- | Original collection sorted | <!-- END REF --> |

#### 説明

The `.sort()` function <!-- REF #collection.sort().Summary -->sorts the elements of the original collection and also returns the sorted collection<!-- END REF --> .

> このコマンドは、元のコレクションを変更します。

If `.sort()` is called with no parameters, only scalar values (number, text, date, booleans) are sorted. デフォルトでは、要素はそれぞれの型に応じて昇順で並べ替えられます。 コレクションが異なる型の要素を格納している場合、それらはまず型ごとにグループ分けされ、そのあとで並べ替えられます。 型は以下の順番で返されます:

1. null
2. ブール
3. 文字列
4. 数値
5. オブジェクト
6. コレクション
7. 日付

If you want to sort the collection elements in some other order or sort any type of element, you must supply in _formula_ ([Formula object](FunctionClass.md)) or _methodName_ (Text) a callback that defines the sort order. The return value should be a boolean that indicates the relative order of the two elements: **True** if _$1.value_ is less than _$1.value2_, **False** if _$1.value_ is greater than _$1.value2_. 必要に応じて、 追加の引数をコールバックに渡せます。

コールバックは以下の引数を受け取ります:

- $1 (オブジェクト):
  - _$1.value_ (any type): first element value to be compared
  - _$1.value2_ (any type): second element value to be compared
- $2...$N (任意の型): 追加の引数

メソッドを使用する場合、以下の引数を設定する必要があります:

- _$1.result_ (boolean): **true** if _$1.value < $1.value2_, **false** otherwise.

#### 例題 1

```4d
 var $col; $col2 : Collection
 $col:=New collection("Tom";5;"Mary";3;"Henry";1;"Jane";4;"Artie";6;"Chip";2)
 $col2:=$col.sort() // $col2=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
  // $col=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
```

#### 例題 2

```4d
 var $col; $col2 : Collection
 $col:=New collection(10;20)
 $col2:=$col.push(5;3;1;4;6;2).sort() //$col2=[1,2,3,4,5,6,10,20]
```

#### 例題 3

```4d
var $col; $col2; $col3 : Collection
$col:=New collection(33;4;66;1111;222)
$col2:=$col.sort() //numerical sort: [4,33,66,222,1111]
$col3:=$col.sort(Formula(String($1.value)<String($1.value2))) //alphabetical sort: [1111,222,33,4,66]
```

<!-- END REF -->

<!-- REF collection.sum().Desc -->

## .sum()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.sum().Syntax -->**.sum**( { *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.sum().Params -->

| 引数           | タイプ  |     | 説明                       |                  |
| ------------ | ---- | :-: | ------------------------ | ---------------- |
| propertyPath | Text |  -> | 計算に使用するオブジェクトプロパティのパス    |                  |
| 戻り値          | Real |  <- | Sum of collection values | <!-- END REF --> |

#### 説明

The `.sum()` function <!-- REF #collection.sum().Summary -->returns the sum for all values in the collection instance<!-- END REF -->.

計算の対象となるのは数値のみです (他の型の要素は無視されます)。

If the collection contains objects, pass the _propertyPath_ parameter to indicate the object property to take into account.

`.sum()` returns 0 if:

- コレクションが空の場合
- コレクションに数値が含まれていない場合
- _propertyPath_ is not found in the collection.

#### 例題 1

```4d
 var $col : Collection
 var $vSum : Real
 $col:=New collection(10;20;"Monday";True;2)
 $vSum:=$col.sum() //32
```

#### 例題 2

```4d
 var $col : Collection
 var $vSum : Real
 $col:=New collection
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500,5))
 $vSum:=$col.sum("salary") //$vSum=70500,5
```

<!-- END REF -->

<!-- REF collection.unshift().Desc -->

## .unshift()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.unshift().Syntax -->**.unshift**( *value* : any { ;...*valueN* : any } ) : Collection<!-- END REF -->

<!-- REF #collection.unshift().Params -->

| 引数               | タイプ                                    |     | 説明               |
| ---------------- | -------------------------------------- | :-: | ---------------- |
| value            | Text, Number, Object, Collection, Date |  -> | コレクションの先頭に挿入する値  |
| 戻り値              | Real                                   |  <- | 要素の追加された元のコレクション |
| <!-- END REF --> |                                        |     |                  |

#### 説明

The `.unshift()` function <!-- REF #collection.unshift().Summary -->inserts the given _value_(s) at the beginning of the collection <!-- END REF -->and returns the modified collection.

> このコマンドは、元のコレクションを変更します。

複数の値が渡された場合、それらは一度に挿入されます。つまり、引数の順番と同じ順番で変更後のコレクションに格納されます。

#### 例題

```4d
 var $c : Collection
 $c:=New collection(1;2)
 $c.unshift(4) // $c=[4,1,2]
 $c.unshift(5) //$c=[5,4,1,2]
 $c.unshift(6;7) // $c=[6,7,5,4,1,2]
```

<!-- END REF -->
