---
id: overview
title: クラス関数について
---

この章では、ビルトインの 4D クラス関数および関連するコンストラクターコマンドを説明します。 4Dクラス関数およびプロパティは、クラスインスタンス オブジェクトによって提供されます。

- functions must be called on instances with the `()` operator. For example, `collection.sort()`.
- properties are accessed without parentheses, for example `file.creationTime`. You can also use the \[] syntax, for example `file["creationTime"]`.
- コマンドは独立して、引数付きあるいは引数なしで呼び出すことができます。 For example `Folder(fk database folder)`.

## 表記規則

関数シンタックスでは、次の表記が使われています:

- the `{ }` characters (braces) indicate optional parameters. For example, `.delete( { option : Integer } )` means that the _option_ parameter may be omitted when calling the function.
- the `{ ; ...param }` notation indicates an unlimited number of parameters. For example, `.concat( value : any { ;...valueN } ) : Collection` means that an unlimited number of values of any type can be passed to the function.
- the `any` keyword is used for parameters that can be of any type that can be stored within attributes (number, text, boolean, date, time, object, collection...).
