---
id: object-get-flyout-mode
title: OBJECT Get flyout mode
slug: /commands/object-get-flyout-mode
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get flyout mode.Syntax-->**OBJECT Get flyout mode** ( * ; *object* : Text ) : Text<br/>**OBJECT Get flyout mode** ( *object* : Variable, Field ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get flyout mode.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時、*object* はフォームオブジェクト名 |
| object | Text, Variable, Field | &#8594; | ドロップダウンリストのオブジェクト名 (* 指定時) または <br/>変数またはフィールド (* 省略時) |
| 戻り値 | Text | &#8592; | カレントのフライアウトモード |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|21 R6|初出|

</details>
</div>

## 説明

<!--REF #_command_.OBJECT Get flyout mode.Summary-->**OBJECT Get flyout mode** コマンドは、ドロップダウンリストオブジェクトのカレントのフライアウトモードを返します。<!-- END REF--> 

オプションの *\** 引数を渡した場合、*object* にはオブジェクト名 (文字列) を指定します。*\** 引数を省略した場合、*object* にはフィールドまたは変数を指定します。この場合、フィールドまたはフォーム変数への参照を渡します。

ドロップダウンリストのカレントのフライアウトモードは、プロパティリストで [フォームレベルで設定](../../FormObjects/properties_Display.md#flyout-mode) されているか、[`OBJECT SET FLYOUT MODE`](../commands/object-set-flyout-mode) コマンドを使用してカレントプロセスに対して設定されている可能性があります。

以下の値が返される可能性があります:

| 定数      |  値 | 説明   |
| ------------- | ------ | ------- |
| `Flyout automatic`|"automatic"|OS とデータソースに応じてポップアップまたはプルダウン (旧式)|
| `Flyout pop up` |"popup"|ポップアップ・フライアウトモード|
| `Flyout pull down`|"pulldown"|メニュー形式のフライアウトモード|

詳細については、[フライアウトモード](../../FormObjects/properties_Display.md#flyout-mode) を参照してください。  

## 例題

```4d
var $mode : Text
$mode:=OBJECT Get flyout mode(*; "myDrop")
```

## 参照 

[OBJECT SET FLYOUT MODE](../commands/object-set-flyout-mode)  
[ドロップダウンリスト](../FormObjects/dropdownList_Overview.md)  
[フライアウトモード](../FormObjects/properties_Display.md#flyout-mode)

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1870 |
| スレッドセーフである | no |
