---
id: EntityClass
title: Entity
---

An [entity](ORDA/dsMapping.md#entity) is an instance of a [Dataclass](ORDA/dsMapping.md#dataclass), like a record of the table matching the dataclass in its associated datastore. エンティティはデータクラスと同じ属性を持つほか、データ値や、特有のプロパティおよび関数を持ちます。

### 概要

|                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntityClass.attributeName.Syntax -->](#attributename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntityClass.attributeName.Summary -->                                              |
| [<!-- INCLUDE #EntityClass.clone().Syntax -->](#clone)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.clone().Summary -->                                                                |
| [<!-- INCLUDE #EntityClass.diff().Syntax -->](#diff)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.diff().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.drop().Syntax -->](#drop)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.drop().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.first().Syntax -->](#first)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.first().Summary -->                                                                |
| [<!-- INCLUDE #EntityClass.fromObject().Syntax -->](#fromobject)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.fromObject().Summary -->                                                 |
| [<!-- INCLUDE #EntityClass.getDataClass().Syntax -->](#getdataclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getDataClass().Summary -->                                           |
| [<!-- INCLUDE #EntityClass.getKey().Syntax -->](#getkey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getKey().Summary -->                                                             |
| [<!-- INCLUDE #EntityClass.getRemoteContextAttributes().Syntax -->](#getremotecontextattributes)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getRemoteContextAttributes().Summary --> |
| [<!-- INCLUDE #EntityClass.getSelection().Syntax -->](#getselection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getSelection().Summary -->                                           |
| [<!-- INCLUDE #EntityClass.getStamp().Syntax -->](#getstamp)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.getStamp().Summary -->                                                       |
| [<!-- INCLUDE #EntityClass.indexOf().Syntax -->](#indexof)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.indexOf().Summary -->                                                          |
| [<!-- INCLUDE #EntityClass.isNew().Syntax -->](#isnew)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.isNew().Summary -->                                                                |
| [<!-- INCLUDE #EntityClass.last().Syntax -->](#last)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.last().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.lock().Syntax -->](#lock)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.lock().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.next().Syntax -->](#next)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.next().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.previous().Syntax -->](#previous)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.previous().Summary -->                                                       |
| [<!-- INCLUDE #EntityClass.reload().Syntax -->](#reload)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.reload().Summary -->                                                             |
| [<!-- INCLUDE #EntityClass.save().Syntax -->](#save)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.save().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.toObject().Syntax -->](#toobject)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.toObject().Summary -->                                                       |
| [<!-- INCLUDE #EntityClass.touched().Syntax -->](#touched)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.touched().Summary -->                                                          |
| [<!-- INCLUDE #EntityClass.touchedAttributes().Syntax -->](#touchedattributes)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.touchedAttributes().Summary -->                            |
| [<!-- INCLUDE #EntityClass.unlock().Syntax -->](#unlock)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntityClass.unlock().Summary -->                                                             |

<!-- REF EntityClass.attributeName.Desc -->

## ._attributeName_

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF EntityClass.attributeName.Syntax -->***.attributeName*** : any<!-- END REF -->

#### 説明

Any dataclass attribute is available as a property of an entity, which <!-- REF EntityClass.attributeName.Summary -->stores the attribute value for the entity<!-- END REF -->.

> データクラス属性は [ ] を使用したシンタックスを使用することでもアクセス可能です。

The attribute value type depends on the attribute [kind](DataClassClass.md#attributename) (relation or storage):

- If _attributeName_ kind is **storage**:
  `.attributeName` returns a value of the same type as _attributeName_.
- If _attributeName_ kind is **relatedEntity**:
  `.attributeName` returns the related entity. リレートエンティティの値は、ドット記法でプロパティを繋げることでアクセス可能です。例: "myEntity.employer.employees[0].lastname"
- If _attributeName_ kind is **relatedEntities**:
  `.attributeName` returns a new entity selection of related entities. 重複しているエンティティは取り除かれます (返されるのは順列なしのエンティティセレクションです)。

#### 例題

```4d
 var $myEntity : cs.EmployeeEntity
 $myEntity:=ds.Employee.new() //Create a new entity
 $myEntity.name:="Dupont" // assign 'Dupont' to the 'name' attribute
 $myEntity.firstname:="John" //assign 'John' to the 'firstname' attribute
 $myEntity.save() //save the entity
```

<!-- END REF -->

<!-- REF EntityClass.clone().Desc -->

## .clone()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.clone().Syntax -->**.clone()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.clone().Params -->

| 引数  | タイプ       |     | 説明                  |                  |
| --- | --------- | :-: | ------------------- | ---------------- |
| 戻り値 | 4D.Entity |  <- | 同レコードを参照する新しいエンティティ | <!-- END REF --> |

#### 説明

The `.clone()` function <!-- REF #EntityClass.clone().Summary -->creates in memory a new entity referencing the same record as the original entity<!-- END REF -->. このメソッドを使用するとエンティティを個別に更新することができます。

> Keep in mind that any modifications done to entities will be saved in the referenced record only when the [`.save( )`](#save) function is executed.

この関数は、すでにデータベースに保存されているエンティティに対してのみ使用可能です。 It cannot be called on a newly created entity (for which [`.isNew()`](#isnew) returns **True**).

#### 例題

```4d
 var $emp; $empCloned : cs.EmployeeEntity
 $emp:=ds.Employee.get(672)
 $empCloned:=$emp.clone()

 $emp.lastName:="Smith" //Updates done on $emp are not done on $empCloned

```

<!-- END REF -->

<!-- REF EntityClass.diff().Desc -->

## .diff()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.diff().Syntax -->**.diff**( *entityToCompare* : 4D.Entity { ; *attributesToCompare* : Collection } ) : Collection<!-- END REF -->

<!-- REF #EntityClass.diff().Params -->

| 引数                  | タイプ        |     | 説明                               |                  |
| ------------------- | ---------- | :-: | -------------------------------- | ---------------- |
| entityToCompare     | 4D.Entity  |  -> | 対象エンティティと比較するエンティティ              |                  |
| attributesToCompare | Collection |  -> | 比較する属性の名称                        |                  |
| 戻り値                 | Collection |  <- | Differences between the entities | <!-- END REF --> |

#### 説明

The `.diff()` function <!-- REF #EntityClass.diff().Summary -->compares the contents of two entities and returns their differences<!-- END REF -->.

In _entityToCompare_, pass the entity to be compared to the original entity.

In _attributesToCompare_, you can designate specific attributes to compare. これを渡した場合、指定された属性に対してのみ比較がおこなわれます。 省略時には、エンティティ間の差異がすべて返されます。

エンティティの差異は、以下のプロパティを持つオブジェクトのコレクションとして返されます:

| プロパティ名        | タイプ           | 説明                                          |
| ------------- | ------------- | ------------------------------------------- |
| attributeName | String        | 属性名                                         |
| value         | any - 属性の型による | オリジナルエンティティの属性値                             |
| otherValue    | any - 属性の型による | Value of the attribute in _entityToCompare_ |

コレクションに含まれるのは異なる値を持っていた属性のみです。 If no differences are found, `.diff()` returns an empty collection.

The function applies for properties whose [kind](DataClassClass.md#attributename) is **storage** or **relatedEntity**. In case a related entity has been updated (meaning the foreign key), the name of the related entity and its primary key name are returned as _attributeName_ properties (_value_ and _otherValue_ are empty for the related entity name).

If one of the compared entities is **Null**, an error is raised.

#### 例題 1

```4d
 var $diff1; $diff2 : Collection
 employee:=ds.Employee.query("ID=1001").first()
 $clone:=employee.clone()
 employee.firstName:="MARIE"
 employee.lastName:="SOPHIE"
 employee.salary:=500
 $diff1:=$clone.diff(employee) // All differences are returned
 $diff2:=$clone.diff(employee;New collection("firstName";"lastName"))
  // Only differences on firstName and lastName are returned
```

$diff1:

```4d
[
    {
        "attributeName": "firstName",
        "value": "Natasha",
        "otherValue": "MARIE"
    },
    {
        "attributeName": "lastName",
        "value": "Locke",
        "otherValue": "SOPHIE"
    },
    {
        "attributeName": "salary",
        "value": 66600,
        "otherValue": 500
    }
]
$diff2:

[
    {
        "attributeName": "firstName",
        "value": "Natasha",
        "otherValue": "MARIE"
    },
    {
        "attributeName": "lastName",
        "value": "Locke",
        "otherValue": "SOPHIE"
    }
]
```

#### 例題 2

```4d
 var vCompareResult1; vCompareResult2; vCompareResult3; $attributesToInspect : Collection
 vCompareResult1:=New collection
 vCompareResult2:=New collection
 vCompareResult3:=New collection
 $attributesToInspect:=New collection

 $e1:=ds.Employee.get(636)
 $e2:=ds.Employee.get(636)

 $e1.firstName:=$e1.firstName+" update"
 $e1.lastName:=$e1.lastName+" update"

 $c:=ds.Company.get(117)
 $e1.employer:=$c
 $e2.salary:=100

 $attributesToInspect.push("firstName")
 $attributesToInspect.push("lastName")

 vCompareResult1:=$e1.diff($e2)
 vCompareResult2:=$e1.diff($e2;$attributesToInspect)
 vCompareResult3:=$e1.diff($e2;$e1.touchedAttributes())
```

vCompareResult1 (すべての差異が返されています):

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    },
    {
        "attributeName": "salary",
        "value": 33500,
        "otherValue": 100
    },
    {
        "attributeName": "employerID", // プライマリーキー名
        "value": 117,
        "otherValue": 118
    },
  {
        "attributeName": "employer", // リレーション名
        "value": "[object Entity]",// Company のエンティティ 117
        "otherValue": "[object Entity]"// Company のエンティティ 118
    }
]
```

vCompareResult2 ($attributesToInspect についての差異のみ返されます)

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    }
]
```

vCompareResult3 ($e1 において更新された (touch された) 属性のみが返されます)

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    },
    {
        "attributeName": "employerID", // プライマリーキー名
        "value": 117,
        "otherValue": 118
    },
     {
        "attributeName": "employer", // リレーション名
        "value": "[object Entity]",// Company のエンティティ 117
        "otherValue": "[object Entity]"// Company のエンティティ 118

    }
]
```

<!-- END REF -->

<!-- REF EntityClass.drop().Desc -->

## .drop()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.drop().Syntax -->**.drop**( {*mode* : Integer} ) : Object<!-- END REF -->

<!-- REF #EntityClass.drop().Params -->

| 引数   | タイプ     |     | 説明                                                                              |                  |
| ---- | ------- | :-: | ------------------------------------------------------------------------------- | ---------------- |
| mode | Integer |  -> | `dk force drop if stamp changed`: Forces the drop even if the stamp has changed |                  |
| 戻り値  | Object  |  <- | Result of drop operation                                                        | <!-- END REF --> |

#### 説明

The `.drop()` function <!-- REF #EntityClass.drop().Summary -->deletes the data contained in the entity from the datastore<!-- END REF -->, from the table related to its Dataclass. エンティティそのものはメモリ内に残るという点に注意してください。

In a multi-user or multi-process application, the `.drop()` function is executed under an ["optimistic lock"](ORDA/entities.md#entity-locking) mechanism, wherein an internal locking stamp is automatically incremented each time the record is saved.

By default, if the _mode_ parameter is omitted, the function will return an error (see below) if the same entity was modified (i.e. the stamp has changed) by another process or user in the meantime.

Otherwise, you can pass the `dk force drop if stamp changed` option in the _mode_ parameter: in this case, the entity is dropped even if the stamp has changed (and the primary key is still the same).

**Result**

The object returned by `.drop( )` contains the following properties:

| プロパティ                             |                                     | タイプ                 | 説明                                                                                                                                       |
| --------------------------------- | ----------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| success                           |                                     | boolean             | ドロップが成功した場合には true、それ以外は false                                                                                                           |
|                                   |                                     |                     | _**Available only in case of error:**_                                                                                                   |
| status(\*)     |                                     | number              | エラーコード、以下参照                                                                                                                              |
| statusText(\*) |                                     | text                | エラーの詳細、以下参照                                                                                                                              |
|                                   |                                     |                     | _**Available only in case of pessimistic lock error:**_                                                                                  |
| lockKindText                      |                                     | text                | "Locked by record"                                                                                                                       |
| lockInfo                          |                                     | object              | ロック元についての情報                                                                                                                              |
|                                   | task_id        | number              | ```
プロセスID
```                                                                                                                           |
|                                   | user_name      | text                | マシン上でのセッションユーザー名                                                                                                                         |
|                                   | user4d_alias   | text                | User alias if defined by `SET USER ALIAS`, otherwise user name in the 4D directory                                                       |
|                                   | host_name      | text                | マシン名                                                                                                                                     |
|                                   | task_name      | text                | プロセス名                                                                                                                                    |
|                                   | client_version | text                |                                                                                                                                          |
|                                   |                                     |                     | _**Available only in case of serious error (serious error can be trying to duplicate a primary key, disk full...):**_ |
| errors                            |                                     | Object の Collection |                                                                                                                                          |
|                                   | message                             | text                | エラーメッセージ                                                                                                                                 |
|                                   | component signature                 | text                | 内部コンポーネント署名 (例 "dmbg" はデータベースコンポーネントを表します)                                                                            |
|                                   | errCode                             | number              | エラーコード                                                                                                                                   |

(\*) The following values can be returned in the _status_ and _statusText_ properties of _Result_ object in case of error:

| 定数                                        | 値 | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------- | - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5 | エンティティはもうデータ内に存在していません。 This error can occur in the following cases:<br/><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). entity.drop( ) を使用するとき、このエラーは dk force drop if stamp changed オプションを使用した場合に返されることがあります。 When using entity.lock( ), this error can be returned when dk reload if stamp changed option is used</li> **Associated statusText**: "Entity does not exist anymore" |
| `dk status locked`                        | 3 | The entity is locked by a pessimistic lock.<br/> **Associated statusText**: "Already locked"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `dk status serious error`                 | 4 | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<br/>**Associated statusText**: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `dk status stamp has changed`             | 2 | The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<br/><li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock( )`: error only if the `dk reload if stamp changed` option is not used</li><li>**Associated statusText**: "Stamp has changed"</li>                                                                                                                                                                                               |
| `dk status wrong permission`              | 1 | 現在の権限では、エンティティを削除することはできません。 **Associated statusText**: "Permission Error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### 例題 1

Example without `dk force drop if stamp changed` option:

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop()
 Case of
    :($status.success)
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //The dropped entity remains in memory
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### 例題 2

Example with `dk force drop if stamp changed` option:

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop(dk force drop if stamp changed)
 Case of
    :($status.success)
       ALERT("You have dropped "+$employee.firstName+" "+$employee.lastName) //The dropped entity remains in memory
    :($status.status=dk status entity does not exist anymore)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->

<!-- REF EntityClass.first().Desc -->

## .first()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.first().Syntax -->**.first()**: 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.first().Params -->

| 引数  | タイプ       |     | 説明                                                                                      |                  |
| --- | --------- | :-: | --------------------------------------------------------------------------------------- | ---------------- |
| 戻り値 | 4D.Entity |  <- | Reference to first entity of an entity selection (Null if not found) | <!-- END REF --> |

#### 説明

The `.first()` function <!-- REF #EntityClass.first().Summary -->returns a reference to the entity in first position of the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection( )](#getselection) returns Null), the function returns a Null value.

#### 例題

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $firstEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[2]
 $firstEmployee:=$employee.first() //$firstEmployee is the first entity of the $employees entity selection
```

<!-- END REF -->

<!-- REF EntityClass.fromObject().Desc -->

## .fromObject()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.fromObject().Syntax -->**.fromObject**( *filler* : Object )<!-- END REF -->

<!-- REF #EntityClass.fromObject().Params -->

| 引数     | タイプ    |     | 説明                                   |                  |
| ------ | ------ | :-: | ------------------------------------ | ---------------- |
| filler | Object |  -> | Object from which to fill the entity | <!-- END REF --> |

#### 説明

The `.fromObject()` function <!-- REF #EntityClass.fromObject().Summary -->fills an entity with the _filler_ content<!-- END REF -->.

> このコマンドは、元のエンティティを変更します。

オブジェクトとエンティティ間のマッピングは属性名でおこなわれます:

- オブジェクトのプロパティがデータクラスに存在しない場合、それは無視されます。
- データタイプは同じである必要があります。 If there is a type mismatch between the object and dataclass, 4D tries to convert the data whenever possible (see [`Converting data types`](Concepts/data-types.md#converting-data-types)), otherwise the attribute is left untouched.
- プライマリーキーはそのまま、あるいは "__KEY" プロパティを (プライマリーキー値とともに) 使って指定することができます。 If it does not already exist in the dataclass, the entity is created with the given value when [.save()](#save) is called. プライマリーキーを指定していない場合、エンティティは作成され、データベースのルールに基づいてプライマリーキー値が割り当てられます。 自動インクリメント機能はプライマリーキーが null の場合にのみ計算されます。

_filler_ can handle a related entity under the following conditions:

- _filler_ contains the foreign key itself, or
- _filler_ contains a property object with the same name as the related entity, containing a single property named "__KEY".
- リレートエンティティが存在しない場合、無視されます。

#### 例題

以下のような $o オブジェクトがある場合:

```4d
{
    "firstName": "Mary",
    "lastName": "Smith",
    "salary": 36500,
    "birthDate": "1958-10-27T00:00:00.000Z",
    "woman": true,
    "managerID": 411,// リレートエンティティを主キー属性値で指定します
    "employerID": 20 // リレートエンティティを主キー属性値で指定します
}
```

以下のコードを実行すると、manager および employerというリレートエンティティを持つエンティティを作成します。

```4d
 var $o : Object
 var $entity : cs.EmpEntity
 $entity:=ds.Emp.new()
 $entity.fromObject($o)
 $entity.save()
```

また、オブジェクトとして提供されたリレートエンティティを使用することもできます:

```4d

{
    "firstName": "Marie",
    "lastName": "Lechat",
    "salary": 68400,
    "birthDate": "1971-09-03T00:00:00.000Z",
    "woman": false,
    "employer": {// relatedEntity given as an object
        "__KEY": "21"
    },
    "manager": {// relatedEntity given as an object
        "__KEY": "411"
    }
}
```

<!-- END REF -->

<!-- REF EntityClass.getDataClass().Desc -->

## .getDataClass()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #EntityClass.getDataClass().Syntax -->**.getDataClass()** : 4D.DataClass<!-- END REF -->

<!-- REF #EntityClass.getDataClass().Params -->

| 引数  | タイプ          |     | 説明                                           |                  |
| --- | ------------ | :-: | -------------------------------------------- | ---------------- |
| 戻り値 | 4D.DataClass |  <- | DataClass object to which the entity belongs | <!-- END REF --> |

#### 説明

The `.getDataClass()` function <!-- REF #EntityClass.getDataClass().Summary -->returns the dataclass of the entity<!-- END REF -->. この関数は汎用的なコードを書くのに有用です。

#### 例題

以下の汎用的なコードは、あらゆるエンティティを複製します:

```4d
  //duplicate_entity method
  //duplicate_entity($entity)

 #DECLARE($entity : 4D.Entity)  
 var $entityNew : 4D.Entity
 var $status : Object

 $entityNew:=$entity.getDataClass().new() //create a new entity in the parent dataclass
 $entityNew.fromObject($entity.toObject()) //get all attributes
 $entityNew[$entity.getDataClass().getInfo().primaryKey]:=Null //reset the primary key
 $status:=$entityNew.save() //save the duplicated entity
```

<!-- END REF -->

<!-- REF EntityClass.getKey().Desc -->

## .getKey()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.getKey().Syntax -->**.getKey**( { *mode* : Integer } ) : Text<br/>**.getKey**( { *mode* : Integer } ) : Integer<!-- END REF -->

<!-- REF #EntityClass.getKey().Params -->

| 引数   | タイプ     |     | 説明                                                                                      |
| ---- | ------- | :-: | --------------------------------------------------------------------------------------- |
| mode | Integer |  -> | `dk key as string`: primary key is returned as a string, no matter the primary key type |
| 戻り値  | Text    |  <- | エンティティのテキスト型プライマリーキーの値                                                                  |
| 戻り値  | Integer |  <- | エンティティの数値型プライマリーキーの値                                                                    |

<!-- END REF -->

#### 説明

The `.getKey()` function <!-- REF #EntityClass.getKey().Summary -->returns the primary key value of the entity<!-- END REF -->.

プライマリーキーは数値 (倍長整数) あるいは文字列です。 You can "force" the returned primary key value to be a string, no matter the actual primary key type, by passing the `dk key as string` option in the _mode_ parameter.

#### 例題

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees[0]
 ALERT("The primary key is "+$employee.getKey(dk key as string))
```

<!-- END REF -->

<!-- REF EntityClass.getRemoteContextAttributes().Desc -->

## .getRemoteContextAttributes()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v19R5 | 追加 |

</details>

<!-- REF #EntityClass.getRemoteContextAttributes().Syntax -->**.getRemoteContextAttributes()** : Text<!-- END REF -->

<!-- REF #EntityClass.getRemoteContextAttributes().Params -->

| 引数     | タイプ  |    | 説明                                                            |                  |
| ------ | ---- | -- | ------------------------------------------------------------- | ---------------- |
| result | Text | <- | Context attributes linked to the entity, separated by a comma | <!-- END REF --> |

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. ほとんどの場合、使用する必要はないでしょう。

#### 説明

The `.getRemoteContextAttributes()` function <!-- REF #EntityClass.getRemoteContextAttributes().Summary -->returns information about the optimization context used by the entity <!-- END REF -->.

If there is no [optimization context](../ORDA/remoteDatastores.md#clientserver-optimization) for the entity, the function returns an empty Text.

#### 例題

```4d
var $ds : 4D.DataStoreImplementation
var $address : cs.AddressEntity
var $p : cs.PersonsEntity
var $contextA : Object
var $info : Text
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$contextA:=New object("context"; "contextA")

$address:=$ds.Address.get(1; $contextA)
$text:=""
For each ($p; $address.persons)
    $text:=$p.firstname+" "+$p.lastname
End for each 

$info:=$address.getRemoteContextAttributes()

//$info = "persons,persons.lastname,persons.firstname"
```

#### 参照

[EntitySelection.getRemoteContextAttributes()](./EntitySelectionClass.md#getRemoteContextAttributes)<br/>[.clearAllRemoteContexts()](./DataStoreClass.md#clearallremotecontexts)<br/>[.getRemoteContextInfo()](./DataStoreClass.md#getremotecontextinfo)<br/>[.getAllRemoteContexts()](./DataStoreClass.md#getallremotecontexts)<br/>[.setRemoteContextInfo()](./DataStoreClass.md#setremotecontextinfo)

<!-- REF EntityClass.getSelection().Desc -->

## .getSelection()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.getSelection().Syntax -->**.getSelection()**: 4D.EntitySelection<!-- END REF -->

<!-- REF #EntityClass.getSelection().Params -->

| 引数  | タイプ                |     | 説明                                                                                  |                  |
| --- | ------------------ | :-: | ----------------------------------------------------------------------------------- | ---------------- |
| 戻り値 | 4D.EntitySelection |  <- | Entity selection to which the entity belongs (Null if not found) | <!-- END REF --> |

#### 説明

The `.getSelection()` function <!-- REF #EntityClass.getSelection().Summary -->returns the entity selection which the entity belongs to<!-- END REF -->.

対象エンティティがエンティティセレクションに所属していない場合、関数は Null値を返します。

#### 例題

```4d
 var $emp : cs.EmployeeEntity
 var $employees; $employees2 : cs.EmployeeSelection
 $emp:=ds.Employee.get(672) // This entity does not belong to any entity selection
 $employees:=$emp.getSelection() // $employees is Null

 $employees2:=ds.Employee.query("lastName=:1";"Smith") //This entity selection contains 6 entities
 $emp:=$employees2[0]  // This entity belongs to an entity selection

 ALERT("The entity selection contains "+String($emp.getSelection().length)+" entities")
```

<!-- END REF -->

<!-- REF EntityClass.getStamp().Desc -->

## .getStamp()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.getStamp().Syntax -->**.getStamp()** : Integer<!-- END REF -->

<!-- REF #EntityClass.getStamp().Params -->

| 引数  | タイプ     |     | 説明                                                                         |                  |
| --- | ------- | :-: | -------------------------------------------------------------------------- | ---------------- |
| 戻り値 | Integer |  <- | Stamp of the entity (0 if entity has just been created) | <!-- END REF --> |

#### 説明

The `.getStamp()` function <!-- REF #EntityClass.getStamp().Summary --> returns the current value of the stamp of the entity<!-- END REF -->.

内部スタンプは、エンティティが保存されるたびに 4D によって自動的にインクリメントされます。 It manages concurrent user access and modifications to the same entities (see [**Entity locking**](ORDA/entities.md#entity-locking)).

> (一度も保存されていない) 新規エンティティに対しては、このメソッドは 0 を返します。 To know if an entity has just been created, it is recommended to use [.isNew()](#isnew).

#### 例題

```4d
 var $entity : cs.EmployeeEntity
 var $stamp : Integer

 $entity:=ds.Employee.new()
 $entity.lastname:="Smith"
 $entity.save()
 $stamp:=$entity.getStamp() //$stamp=1

 $entity.lastname:="Wesson"
 $entity.save()
 $stamp:=$entity.getStamp() //$stamp=2
```

<!-- END REF -->

<!-- REF EntityClass.indexOf().Desc -->

## .indexOf()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.indexOf().Syntax -->**.indexOf**( { *entitySelection* : 4D.EntitySelection } ) : Integer<!-- END REF -->

<!-- REF #EntityClass.indexOf().Params -->

| 引数              | タイプ                |     | 説明                                            |                  |
| --------------- | ------------------ | :-: | --------------------------------------------- | ---------------- |
| entitySelection | 4D.EntitySelection |  -> | エンティティの位置を取得する対象のエンティティセレクション                 |                  |
| 戻り値             | Integer            |  <- | Position of the entity in an entity selection | <!-- END REF --> |

#### 説明

The `.indexOf()` function <!-- REF #EntityClass.indexOf().Summary -->returns the position of the entity in an entity selection<!-- END REF -->.

By default if the _entitySelection_ parameter is omitted, the function returns the entity's position within its own entity selection. Otherwise, it returns the position of the entity within the specified _entitySelection_.

戻り値は、0 と、エンティティセレクションの length より 1 を引いた値の範囲内の数値です。

- If the entity does not have an entity selection or does not belong to _entitySelection_, the function returns -1.
- If _entitySelection_ is Null or does not belong to the same dataclass as the entity, an error is raised.

#### 例題

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[1] //This entity belongs to an entity selection
 ALERT("The index of the entity in its own entity selection is "+String($employee.indexOf())) //1

 $employee:=ds.Employee.get(725) //This entity does not belong to an entity selection
 ALERT("The index of the entity is "+String($employee.indexOf())) // -1
```

<!-- END REF -->

<!-- REF EntityClass.isNew().Desc -->

## .isNew()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.isNew().Syntax -->**.isNew()** : Boolean<!-- END REF -->

<!-- REF #EntityClass.isNew().Params -->

| 引数  | タイプ     |     | 説明                                              |                  |
| --- | ------- | :-: | ----------------------------------------------- | ---------------- |
| 戻り値 | Boolean |  <- | エンティティが作成されたばかりで未保存の場合は true。 Otherwise, False. | <!-- END REF --> |

#### 説明

The `.isNew()` function <!-- REF #EntityClass.isNew().Summary --> returns True if the entity to which it is applied has just been created and has not yet been saved in the datastore<!-- END REF -->. そうでない場合には、false を返します。

#### 例題

```4d
 var $emp : cs.EmployeeEntity

 $emp:=ds.Employee.new()

 If($emp.isNew())
    ALERT("This is a new entity")
 End if
```

<!-- END REF -->

<!-- REF EntityClass.last().Desc -->

## .last()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.last().Syntax -->**.last()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.last().Params -->

| 引数  | タイプ       |     | 説明                                                                                     |                  |
| --- | --------- | :-: | -------------------------------------------------------------------------------------- | ---------------- |
| 戻り値 | 4D.Entity |  <- | Reference to last entity of an entity selection (Null if not found) | <!-- END REF --> |

#### 説明

The `.last()` function <!-- REF #EntityClass.last().Summary -->returns a reference to the entity in last position of the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection( )](#getselection) returns Null), the function returns a Null value.

#### 例題

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $lastEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[0]
 $lastEmployee:=$employee.last() //$lastEmployee is the last entity of the $employees entity selection
```

<!-- END REF -->

<!-- REF EntityClass.lock().Desc -->

## .lock()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.lock().Syntax -->**.lock**( { *mode* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.lock().Params -->

| 引数   | タイプ     |     | 説明                                                                   |                  |
| ---- | ------- | :-: | -------------------------------------------------------------------- | ---------------- |
| mode | Integer |  -> | `dk reload if stamp changed`: Reload before locking if stamp changed |                  |
| 戻り値  | Object  |  <- | Result of lock operation                                             | <!-- END REF --> |

#### 説明

The `.lock()` function <!-- REF #EntityClass.lock().Summary -->puts a pessimistic lock on the record referenced by the entity<!-- END REF -->. The [lock is set](ORDA/entities.md#entity-locking) for a record and all the references of the entity in the current process.

Other processes will see this record as locked (the `result.success` property will contain False if they try to lock the same entity using this function). ロックをおこなったセッション内で実行される関数のみが、当該エンティティの属性を編集・保存できます。 他のセッションは同エンティティを読み取り専用にロードできますが、値の入力・保存はできません。

A record locked by `.lock()` is unlocked:

- when the [`unlock()`](#unlock) function is called on a matching entity in the same process
- メモリ内のどのエンティティからも参照されなくなった場合、自動的にロックが解除されます。 たとえば、エンティティのローカル参照に対してのみロックがかかっていた場合、関数の実行が終了すればロックは解除されます。 メモリ内にエンティティへの参照がある限り、レコードはロックされたままです。

> An entity can also be [locked by a REST session](../REST/$lock.md), in which case it can only be unlocked by the session.

By default, if the _mode_ parameter is omitted, the function will return an error (see below) if the same entity was modified (i.e. the stamp has changed) by another process or user in the meantime.

Otherwise, you can pass the `dk reload if stamp changed` option in the _mode_ parameter: in this case, no error is returned and the entity is reloaded when the stamp has changed (if the entity still exists and the primary key is still the same).

**Result**

The object returned by `.lock( )` contains the following properties:

| プロパティ                             |                                     | タイプ                 | 説明                                                                                                                                                                                                                                                 |
| --------------------------------- | ----------------------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| success                           |                                     | boolean             | ロックに成功した場合 (あるいはエンティティがすでにカレントプロセスでロックされていた場合) には true、それ以外は false                                                                                                                                                              |
|                                   |                                     |                     | _**Available only if `dk reload if stamp changed` option is used:**_                                                                                                                                                                               |
| **wasReloaded**                   |                                     | boolean             | エンティティがリロードされ、かつリロードに成功した場合には true、それ以外は false                                                                                                                                                                                                     |
|                                   |                                     |                     | _**Available only in case of error:**_                                                                                                                                                                                                             |
| status(\*)     |                                     | number              | エラーコード、以下参照                                                                                                                                                                                                                                        |
| statusText(\*) |                                     | text                | エラーの詳細、以下参照                                                                                                                                                                                                                                        |
|                                   |                                     |                     | _**Available only in case of pessimistic lock error:**_                                                                                                                                                                                            |
| lockKindText                      |                                     | text                | "Locked by record" 4Dプロセスによるロック、"Locked by session" RESTセッションによるロック                                                                                                                                                                                |
| lockInfo                          |                                     | object              | ロック元についての情報。 返されるプロパティはロック元 (4Dプロセスまたは RESTセッション) によって異なります。                                                                                                                                                                    |
|                                   |                                     |                     | _**Available only for a 4D process lock:**_                                                                                                                                                                                                        |
|                                   | task_id        | number              | ```
プロセスID
```                                                                                                                                                                                                                                     |
|                                   | user_name      | text                | マシン上でのセッションユーザー名                                                                                                                                                                                                                                   |
|                                   | user4d_alias   | text                | 4D ユーザーの名前またはエイリアス                                                                                                                                                                                                                                 |
|                                   | user4d_id      | number              | 4DデータベースディレクトリでのユーザーID                                                                                                                                                                                                                             |
|                                   | host_name      | text                | マシン名                                                                                                                                                                                                                                               |
|                                   | task_name      | text                | プロセス名                                                                                                                                                                                                                                              |
|                                   | client_version | text                | クライアントのバージョン                                                                                                                                                                                                                                       |
|                                   |                                     |                     | _**Available only for a REST session lock:**_                                                                                                                                                                                                      |
|                                   | host                                | text                | \|URL that locked the entity (e.g. "www\.myserver.com")\|                                                                                                                                                                       |
|                                   | IPAddr                              | text                | ロック元の IPアドレス (例: "127.0.0.1")                                                                                                                                                                                                   |
|                                   | userAgent                           | text                | ロック元の userAgent (例: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |
|                                   |                                     |                     | _**Available only in case of serious error**_ (primary key already exists, disk full...):                                                                                                                                       |
| errors                            |                                     | Object の Collection |                                                                                                                                                                                                                                                    |
|                                   | message                             | text                | エラーメッセージ                                                                                                                                                                                                                                           |
|                                   | component signature                 | text                | 内部コンポーネント署名 (例 "dmbg" はデータベースコンポーネントを表します)                                                                                                                                                                                      |
|                                   | errCode                             | number              | エラーコード                                                                                                                                                                                                                                             |

(\*) The following values can be returned in the _status_ and _statusText_ properties of the _Result_ object in case of error:

| 定数                                        | 値 | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------- | - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dk status entity does not exist anymore` | 5 | エンティティはもうデータ内に存在していません。 This error can occur in the following cases:<li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). entity.drop( ) を使用するとき、このエラーは dk force drop if stamp changed オプションを使用した場合に返されることがあります。 When using `.lock( )`, this error can be returned when `dk reload if stamp changed` option is used</li><br/>**Associated statusText**: "Entity does not exist anymore" |
| `dk status locked`                        | 3 | The entity is locked by a pessimistic lock.**Associated statusText**: "Already locked"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `dk status serious error`                 | 4 | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.**Associated statusText**: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `dk status stamp has changed`             | 2 | The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock( )`: error only if the `dk reload if stamp changed` option is not used</li><br/>**Associated statusText**: "Stamp has changed"                                                                                                                                                                                  |

#### 例題 1

エラーのある例題:

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employee:=ds.Employee.get(716)
 $status:=$employee.lock()
 Case of
    :($status.success)
       ALERT("You have locked "+$employee.firstName+" "+$employee.lastName)
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### 例題 2

Example with `dk reload if stamp changed` option:

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employee:=ds.Employee.get(717)
 $status:=$employee.lock(dk reload if stamp changed)
 Case of
    :($status.success)
       ALERT("You have locked "+$employee.firstName+" "+$employee.lastName)
    :($status.status=dk status entity does not exist anymore)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->

<!-- REF EntityClass.next().Desc -->

## .next()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.next().Syntax -->**.next()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.next().Params -->

| 引数  | タイプ       |     | 説明                                                                                      |                  |
| --- | --------- | :-: | --------------------------------------------------------------------------------------- | ---------------- |
| 戻り値 | 4D.Entity |  <- | Reference to next entity in the entity selection (Null if not found) | <!-- END REF --> |

#### 説明

The `.next()` function <!-- REF #EntityClass.next().Summary -->returns a reference to the next entity in the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection()](#getselection) returns Null), the function returns a Null value.

エンティティセレクション内に有効な次のエンティティが存在しない場合 (セレクションの最終エンティティの場合)、関数は Null を返します。 次のエンティティがドロップされていた場合、関数はその次の有効なエンティティを返します (セレクションの最後に辿り着くと Null を返します)。

#### 例題

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $nextEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[0]
 $nextEmployee:=$employee.next() //$nextEmployee is the second entity of the $employees entity selection

```

<!-- END REF -->

<!-- REF EntityClass.previous().Desc -->

## .previous()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.previous().Syntax -->**.previous()**  : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.previous().Params -->

| 引数  | タイプ       |     | 説明                                                                                          |                  |
| --- | --------- | :-: | ------------------------------------------------------------------------------------------- | ---------------- |
| 戻り値 | 4D.Entity |  <- | Reference to previous entity in the entity selection (Null if not found) | <!-- END REF --> |

#### 説明

The `.previous()` function <!-- REF #EntityClass.previous().Summary --> returns a reference to the previous entity in the entity selection which the entity belongs to<!-- END REF -->.

If the entity does not belong to any existing entity selection (i.e. [.getSelection()](#getselection) returns Null), the function returns a Null value.

エンティティセレクション内に有効な前のエンティティが存在しない場合 (セレクションの先頭エンティティの場合)、関数は Null を返します。 前のエンティティがドロップされていた場合、関数はその前の有効なエンティティを返します (セレクションの先頭に辿り着くと Null を返します)。

#### 例題

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $previousEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") //This entity selection contains 3 entities
 $employee:=$employees[1]
 $previousEmployee:=$employee.previous() //$previousEmployee is the first entity of the $employees entity selection
```

<!-- END REF -->

<!-- REF EntityClass.reload().Desc -->

## .reload()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.reload().Syntax -->**.reload()** : Object<!-- END REF -->

<!-- REF #EntityClass.reload().Params -->

| 引数  | タイプ    |     | 説明          |                  |
| --- | ------ | :-: | ----------- | ---------------- |
| 戻り値 | Object |  <- | ステータスオブジェクト | <!-- END REF --> |

#### 説明

The `.reload()` function <!-- REF #EntityClass.reload().Summary -->reloads the content of the entity in memory<!-- END REF -->, according to information stored in the table related to the dataclass in the datastore. エンティティが同じプライマリーキーで存在している場合にのみリロードは実行されます。

**Result**

The object returned by `.reload( )` contains the following properties:

| プロパティ                             | タイプ     | 説明                                                                                              |
| --------------------------------- | ------- | ----------------------------------------------------------------------------------------------- |
| success                           | boolean | True if the reload action is successful, False otherwise._**Available only in case of error**_: |
| status(\*)     | number  | エラーコード、以下参照                                                                                     |
| statusText(\*) | text    | エラーの詳細、以下参照                                                                                     |

(\*) The following values can be returned in the _status_ and _statusText_ properties of _Result_ object in case of error:

| 定数                                        | 値 | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------- | - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5 | エンティティはもうデータ内に存在していません。 This error can occur in the following cases:<br/><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). entity.drop( ) を使用するとき、このエラーは dk force drop if stamp changed オプションを使用した場合に返されることがあります。 When using `.lock( )`, this error can be returned when `dk reload if stamp changed` option is used</li><br/>_**Associated statusText**_: "Entity does not exist anymore" |
| `dk status serious error`                 | 4 | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.<br/>_**Associated statusText**_: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### 例題

```4d
 var $employee : cs.EmployeeEntity
 var $employees : cs.EmployeeSelection
 var $result : Object

 $employees:=ds.Employee.query("lastName=:1";"Hollis")
 $employee:=$employees[0]
 $employee.firstName:="Mary"
 $result:=$employee.reload()
 Case of
    :($result.success)
       ALERT("Reload has been done")
    :($result.status=dk status entity does not exist anymore)
       ALERT("The entity has been dropped")
 End case
```

<!-- END REF -->

<!-- REF EntityClass.save().Desc -->

## .save()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.save().Syntax -->**.save**( { *mode* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.save().Params -->

| 引数   | タイプ     |     | 説明                                                |                  |
| ---- | ------- | :-: | ------------------------------------------------- | ---------------- |
| mode | Integer |  -> | `dk auto merge`: Enables the automatic merge mode |                  |
| 戻り値  | Object  |  <- | Result of save operation                          | <!-- END REF --> |

#### 説明

The `.save()` function <!-- REF #EntityClass.save().Summary -->saves the changes made to the entity<!-- END REF --> in the table related to its dataClass. エンティティを作成したあと、あるいはエンティティに対して保存したい変更をおこなったあとにはこの関数を呼び出す必要があります。

The save operation is executed only if at least one entity attribute has been "touched" (see the [`.touched()`](#touched) and [`.touchedAttributes()`](#touchedattributes) functions). そうでない場合、関数は何もしません (トリガーは呼び出されません)。

In a multi-user or multi-process application, the `.save()` function is executed under an ["optimistic lock"](ORDA/entities.md#entity-locking) mechanism, wherein an internal locking stamp is automatically incremented each time the record is saved.

By default, if the _mode_ parameter is omitted, the method will return an error (see below) whenever the same entity has been modified by another process or user in the meantime, no matter the modified attribute(s).

Otherwise, you can pass the `dk auto merge` option in the _mode_ parameter: when the automatic merge mode is enabled, a modification done concurrently by another process/user on the same entity but on a different attribute will not result in an error. エンティティに保存されるデータは、別々の変更処理の組み合わせ ("マージ (併合)") になります (同じ属性に対して変更がおこなわれた場合には、自動マージモードであっても保存は失敗し、エラーが返されます)。

> ピクチャー・オブジェクト・テキスト型属性で、データを外部保存にしている場合には、自動マージモードは利用できません。 Concurrent changes in these attributes will result in a `dk status stamp has changed` error.

**Result**

The object returned by `.save()` contains the following properties:

| プロパティ        |                                     | タイプ                 | 説明                                                                                                                                         |
| ------------ | ----------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| success      |                                     | boolean             | 保存に成功した場合には true、それ以外は false                                                                                                               |
|              |                                     |                     | _**Available only if `dk auto merge` option is used**_:                                                                                    |
| autoMerged   |                                     | boolean             | 自動マージが実行された場合には true、それ以外は false                                                                                                           |
|              |                                     |                     | _**Available only in case of error**_:                                                                                                     |
| status       |                                     | number              | Error code, [see below](#status-and-statustext)                                                                                            |
| statusText   |                                     | text                | Description of the error, [see below](#status-and-statustext)                                                                              |
|              |                                     |                     | _**Available only in case of pessimistic lock error**_:                                                                                    |
| lockKindText |                                     | text                | "Locked by record"                                                                                                                         |
| lockInfo     |                                     | object              | ロック元についての情報                                                                                                                                |
|              | task_id        | number              | ```
プロセスID
```                                                                                                                             |
|              | user_name      | text                | マシン上でのセッションユーザー名                                                                                                                           |
|              | user4d_alias   | text                | User alias if defined by `SET USER ALIAS`, otherwise user name in the 4D directory                                                         |
|              | host_name      | text                | マシン名                                                                                                                                       |
|              | task_name      | text                | プロセス名                                                                                                                                      |
|              | client_version | text                |                                                                                                                                            |
|              |                                     |                     | _**Available only in case of serious error**_ (serious error - can be trying to duplicate a primary key, disk full...): |
| errors       |                                     | Object の Collection |                                                                                                                                            |
|              | message                             | text                | エラーメッセージ                                                                                                                                   |
|              | componentSignature                  | text                | 内部コンポーネント署名 (例 "dmbg" はデータベースコンポーネントを表します)                                                                              |
|              | errCode                             | number              | エラーコード                                                                                                                                     |

##### status と statusText

The following values can be returned in the `status` and `statusText` properties of Result object in case of error:

| 定数                                        | 値 | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------- | - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status automerge failed`              | 6 | (Only if the `dk auto merge` option is used) The automatic merge option failed when saving the entity.**Associated statusText**: "Auto merge failed"                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `dk status entity does not exist anymore` | 5 | エンティティはもうデータ内に存在していません。 This error can occur in the following cases:<br/><li>the entity has been dropped (the stamp has changed and the memory space is now free)</li><li>the entity has been dropped and replaced by another one with another primary key (the stamp has changed and a new entity now uses the memory space). entity.drop( ) を使用するとき、このエラーは dk force drop if stamp changed オプションを使用した場合に返されることがあります。 When using `.lock( )`, this error can be returned when `dk reload if stamp changed` option is used</li><br/>**Associated statusText**: "Entity doesnot exist anymore" |
| `dk status locked`                        | 3 | The entity is locked by a pessimistic lock.**Associated statusText**: "Already locked"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `dk status serious error`                 | 4 | A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc.**Associated statusText**: "Other error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `dk status stamp has changed`             | 2 | The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock).<br/><li>with `.save( )`: error only if the `dk auto merge` option is not used</li><li>with `.drop( )`: error only if the `dk force drop if stamp changed` option is not used</li><li>with `.lock( )`: error only if the `dk reload if stamp changed` option is not used</li><br/>**Associated statusText**: "Stamp has changed"                                                                                                                                                                                 |
| `dk status wrong permission`              | 1 | 現在の権限では、エンティティを保存することはできません。 **Associated statusText**: "Permission Error"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### 例題 1

新しいエンティティを作成します:

```4d
 var $status : Object
 var $employee : cs.EmployeeEntity
 $employee:=ds.Employee.new()
 $employee.firstName:="Mary"
 $employee.lastName:="Smith"
 $status:=$employee.save()
 If($status.success)
    ALERT("Employee created")
 End if
```

#### 例題 2

Updating an entity without `dk auto merge` option:

```4d
 var $status : Object
 var $employee : cs.EmployeeEntity
 var $employees : cs.EmployeeSelection
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $employee.lastName:="Mac Arthur"
 $status:=$employee.save()
 Case of
    :($status.success)
       ALERT("Employee updated")
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### 例題 3

Updating an entity with `dk auto merge` option:

```4d
 var $status : Object

 var $employee : cs.EmployeeEntity
 var $employees : cs.EmployeeSelection

 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $employee.lastName:="Mac Arthur"
 $status:=$employee.save(dk auto merge)
 Case of
    :($status.success)
       ALERT("Employee updated")
    :($status.status=dk status automerge failed)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->

<!-- REF EntityClass.toObject().Desc -->

## .toObject()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.toObject().Syntax -->**.toObject**() : Object<br/>**.toObject**( *filterString* : Text { ; *options* : Integer}  ) : Object<br/>**.toObject**( *filterCol* : Collection { ; *options* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.toObject().Params -->

| 引数           | タイプ        |     | 説明                                                                                                                                                           |                  |
| ------------ | ---------- | :-: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| filterString | Text       |  -> | 取得する属性 (カンマ区切り)                                                                                                                           |                  |
| filterCol    | Collection |  -> | 取得する属性のコレクション                                                                                                                                                |                  |
| options      | Integer    |  -> | `dk with primary key`: adds the __KEY property;<br/>`dk with stamp`: adds the _STAMP property |                  |
| 戻り値          | Object     |  <- | Object built from the entity                                                                                                                                 | <!-- END REF --> |

#### 説明

The `.toObject()` function <!-- REF #EntityClass.toObject().Summary -->returns an object which has been built from the entity<!-- END REF -->. オブジェクト内部のプロパティ名はエンティティの属性名と合致します。

If no filter is specified, or if the _filterString_ parameter contains an empty string or "\*", the returned object will contain:

- すべてのストレージエンティティ属性
- attributes of the `relatedEntity` [kind](DataClassClass.md#attributename): you get a property with the same name as the related entity (name of the many-to-one link). 属性は単純な形式で取得されます。
- attributes of the `relatedEntities` [kind](DataClassClass.md#attributename): attribute is not returned.

最初の引数として、取得するエンティティ属性を渡します。 以下のものを渡すことができます:

- _filterString_: a string with property paths separated with commas: "propertyPath1, propertyPath2, ...", or
- _filterCol_: a collection of strings: ["propertyPath1","propertyPath2";...]

If a filter is specified for attributes of the relatedEntity [kind](DataClassClass.md#attributename):

- propertyPath = "relatedEntity" -> it is extracted with simple form: an object with property __KEY (primary key).
- propertyPath = "relatedEntity.\*" -> all the properties are extracted
- propertyPath = "relatedEntity.propertyName1; relatedEntity.propertyName2; ..." -> only those properties are extracted

If a filter is specified for attributes of the relatedEntities [kind](DataClassClass.md#attributename):

- propertyPath = "relatedEntities.\*" -> all the properties are extracted
- propertyPath = "relatedEntities.propertyName1; relatedEntities.propertyName2; ..." -> only those properties are extracted

In the _options_ parameter, you can pass the `dk with primary key` and/or`dk with stamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.

:::caution Warning

リレーションの 1側の属性に主キー以外の属性を使用した場合、その属性の値が "__KEY" プロパティに書き込まれます。 Keep in mind that it is recommended to use the primary key as One attribute in your relations, especially when you use `.toObject()` and `.fromObject()` functions.

:::

#### 例題 1

このセクションの例題では、以下のストラクチャーを使います:

![](../assets/en/API/dataclassAttribute4.png)

filter 引数を渡さない場合:

```4d
employeeObject:=employeeSelected.toObject()
```

戻り値:

```4d
{
    "ID": 413,
    "firstName": "Greg",
    "lastName": "Wahl",
    "salary": 0,
    "birthDate": "1963-02-01T00:00:00.000Z",
    "woman": false,
    "managerID": 412,
    "employerID": 20,
    "photo": "[object Picture]",
    "extra": null,
    "employer": { // 単純な形式で取得されたリレートエンティティ
        "__KEY": 20
    },
    "manager": {
        "__KEY": 412
    }
}
```

#### 例題 2

プライマリーキーとスタンプを取得します:

```4d
employeeObject:=employeeSelected.toObject("";dk with primary key+dk with stamp)
```

戻り値:

```4d
{
    "__KEY": 413,
   "__STAMP": 1,
    "ID": 413,
    "firstName": "Greg",
    "lastName": "Wahl",
    "salary": 0,
    "birthDate": "1963-02-01T00:00:00.000Z",
    "woman": false,
    "managerID": 412,
    "employerID": 20,
    "photo": "[object Picture]",
    "extra": null,
    "employer": {
        "__KEY": 20
    },
    "manager": {
        "__KEY": 412
    }
}
```

#### 例題 3

Expanding all the properties of `relatedEntities`:

```4d
employeeObject:=employeeSelected.toObject("directReports.*")
```

```4d
{
    "directReports": [
        {
            "ID": 418,
            "firstName": "Lorena",
            "lastName": "Boothe",
            "salary": 44800,
            "birthDate": "1970-10-02T00:00:00.000Z",
            "woman": true,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        },
        {
            "ID": 419,
            "firstName": "Drew",
            "lastName": "Caudill",
            "salary": 41000,
            "birthDate": "2030-01-12T00:00:00.000Z",
            "woman": false,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        },
        {
            "ID": 420,
            "firstName": "Nathan",
            "lastName": "Gomes",
            "salary": 46300,
            "birthDate": "2010-05-29T00:00:00.000Z",
            "woman": false,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        }
    ]
}
```

#### 例題 4

Extracting some properties of `relatedEntities`:

```4d
 employeeObject:=employeeSelected.toObject("firstName, directReports.lastName")
```

戻り値:

```4d
{
    "firstName": "Greg",
    "directReports": [
        {
            "lastName": "Boothe"
        },
        {
            "lastName": "Caudill"
        },
        {
            "lastName": "Gomes"
        }
    ]
}
```

#### 例題 5

Extracting a `relatedEntity` with simple form:

```4d
 $coll:=New collection("firstName";"employer")
 employeeObject:=employeeSelected.toObject($coll)
```

戻り値:

```4d
{
    "firstName": "Greg",
    "employer": {
        "__KEY": 20
    }
}
```

#### 例題 6

Extracting all the properties of a `relatedEntity`:

```4d
 employeeObject:=employeeSelected.toObject("employer.*")
```

戻り値:

```4d
{
    "employer": {
        "ID": 20,
        "name": "India Astral Secretary",
        "creationDate": "1984-08-25T00:00:00.000Z",
        "revenues": 12000000,
        "extra": null
    }
}
```

#### 例題 7

Extracting some properties of a `relatedEntity`:

```4d
 $col:=New collection
 $col.push("employer.name")
 $col.push("employer.revenues")
 employeeObject:=employeeSelected.toObject($col)
```

戻り値:

```4d
{
    "employer": {
        "name": "India Astral Secretary",
        "revenues": 12000000
    }
}
```

<!-- END REF -->

<!-- REF EntityClass.touched().Desc -->

## .touched( )

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.touched().Syntax -->**.touched()** : Boolean<!-- END REF -->

<!-- REF #EntityClass.touched().Params -->

| 引数  | タイプ     |     | 説明                                                                                    |                  |
| --- | ------- | :-: | ------------------------------------------------------------------------------------- | ---------------- |
| 戻り値 | Boolean |  <- | True if at least one entity attribute has been modified and not yet saved, else False | <!-- END REF --> |

#### 説明

The `.touched()` function <!-- REF #EntityClass.touched().Summary -->tests whether or not an entity attribute has been modified since the entity was loaded into memory or saved<!-- END REF -->.

属性が更新あるいは計算されていた場合、関数は true を返し、それ以外は false を返します。 この関数を使用することで、エンティティを保存する必要があるかどうかを確認することができます。

This function returns False for a new entity that has just been created (with [`.new( )`](DataClassClass.md#new)). Note however that if you use a function which calculates an attribute of the entity, the `.touched()` function will then return True. For example, if you call [`.getKey()`](#getkey) to calculate the primary key, `.touched()` returns True.

#### 例題

エンティティを保存する必要があるかどうかをチェックします:

```4d
 var $emp : cs.EmployeeEntity
 $emp:=ds.Employee.get(672)
 $emp.firstName:=$emp.firstName //Even if updated with the same value, the attribute is marked as touched

 If($emp.touched()) //if at least one of the attributes has been changed
    $emp.save()
 End if // otherwise, no need to save the entity
```

<!-- END REF -->

<!-- REF EntityClass.touchedAttributes().Desc -->

## .touchedAttributes( )

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.touchedAttributes().Syntax -->**.touchedAttributes()** : Collection<!-- END REF -->

<!-- REF #EntityClass.touchedAttributes().Params -->

| 引数  | タイプ        |     | 説明                                               |                  |
| --- | ---------- | :-: | ------------------------------------------------ | ---------------- |
| 戻り値 | Collection |  <- | Names of touched attributes, or empty collection | <!-- END REF --> |

#### 説明

The `.touchedAttributes()` function <!-- REF #EntityClass.touchedAttributes().Summary -->returns the names of the attributes that have been modified since the entity was loaded into memory<!-- END REF -->.

This applies for attributes of the [kind](DataClassClass.md#attributename) `storage` or `relatedEntity`.

リレート先のエンティティそのものが更新されていた場合 (外部キーの変更)、リレートエンティティの名称とそのプライマリーキー名が返されます。

エンティティ属性がいずれも更新されていなかった場合、関数は空のコレクションを返します。

#### 例題 1

```4d
 var $touchedAttributes : Collection
 var $emp : cs.EmployeeEntity

 $touchedAttributes:=New collection
 $emp:=ds.Employee.get(725)
 $emp.firstName:=$emp.firstName //Even if updated with the same value, the attribute is marked as touched
 $emp.lastName:="Martin"
 $touchedAttributes:=$emp.touchedAttributes()
  //$touchedAttributes: ["firstName","lastName"]
```

#### 例題 2

```4d
 var $touchedAttributes : Collection
 var $emp : cs.EmployeeEntity
 var $company : cs.CompanyEntity

 $touchedAttributes:=New collection

 $emp:=ds.Employee.get(672)
 $emp.firstName:=$emp.firstName
 $emp.lastName:="Martin"

 $company:=ds.Company.get(121)
 $emp.employer:=$company

 $touchedAttributes:=$emp.touchedAttributes()

  //collection $touchedAttributes: ["firstName","lastName","employer","employerID"]
```

この場合において:

- firstName and lastName have a `storage` kind
- employer has a `relatedEntity` kind
- employerID は、employer リレートエンティティの外部キーです

<!-- END REF -->

<!-- REF EntityClass.unlock().Desc -->

## .unlock()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntityClass.unlock().Syntax -->**.unlock()** : Object<!-- END REF -->

<!-- REF #EntityClass.unlock().Params -->

| 引数  | タイプ    |     | 説明          |                  |
| --- | ------ | :-: | ----------- | ---------------- |
| 戻り値 | Object |  <- | ステータスオブジェクト | <!-- END REF --> |

#### 説明

The `.unlock()` function <!-- REF #EntityClass.unlock().Summary -->removes the pessimistic lock on the record matching the entity<!-- END REF --> in the datastore and table related to its dataclass.

> For more information, please refer to [Entity locking](ORDA/entities.md#entity-locking) section.

ロックしているプロセス内のどのエンティティからもレコードが参照されなくなった場合、自動的にレコードロックが解除されます (たとえば、エンティティのローカル参照に対してのみロックがかかっていた場合、プロセスが終了すればエンティティおよびレコードのロックは解除されます)。

> レコードがロックされている場合、ロックしているプロセスから、ロックされたエンティティ参照に対してロックを解除する必要があります: 例:

```4d
 $e1:=ds.Emp.all()[0]
 $e2:=ds.Emp.all()[0]
 $res:=$e1.lock() //$res.success=true
 $res:=$e2.unlock() //$res.success=false
 $res:=$e1.unlock() //$res.success=true
```

**Result**

The object returned by `.unlock()` contains the following property:

| プロパティ   | タイプ     | 説明                                                                                                                                     |
| ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| success | Boolean | ロック解除が成功した場合には true、それ以外は false ドロップされたエンティティや、ロックされてないレコード、あるいは他のプロセスや他のエンティティによってロックされたレコードに対してロック解除を実行した場合、success には false が返されます。 |

#### 例題

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object

 $employee:=ds.Employee.get(725)
 $status:=$employee.lock()
 ... //processing
 $status:=$employee.unlock()
 If($status.success)
    ALERT("The entity is now unlocked")
 End if
```

<!-- END REF -->
