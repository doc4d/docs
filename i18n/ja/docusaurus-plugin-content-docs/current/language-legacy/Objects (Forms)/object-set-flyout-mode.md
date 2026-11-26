---
id: object-set-flyout-mode
title: OBJECT SET FLYOUT MODE
slug: /commands/object-set-flyout-mode
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FLYOUT MODE.Syntax-->**OBJECT SET FLYOUT MODE** ( * ; *object* : Text ; *mode* : Text )<br/>**OBJECT SET FLYOUT MODE** ( *object* : Variable, Field ; *mode* : Text )<!-- END REF-->
<!--REF #_command_.OBJECT SET FLYOUT MODE.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時、*object* はフォームオブジェクト名 |
| object | Text, Variable, Field | &#8594; | ドロップダウンリストのオブジェクト名 (* 指定時) または <br/>変数またはフィールド (* 省略時) |
| mode | Text | &#8594; | フライアウトモード: "automatic", "popup", または "pulldown" |

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

<!--REF #_command_.OBJECT SET FLYOUT MODE.Summary-->**OBJECT SET FLYOUT MODE** コマンドは、ドロップダウンリストオブジェクトのフライアウト表示モードをランタイムで設定します。<!-- END REF-->

:::note

Windows では、このコマンドを使用するには [FluentUI レンダリングモード](../../FormEditor/forms.md#fluent-ui-レンダリング) が使用されている必要があります。

:::

*mode* には、以下の定数のいずれかを使用できます:

| 定数      |  値 | 説明   |
| ------------- | ------ | ------- |
| `Flyout automatic`|"automatic"|OS とデータソースに応じてポップアップまたはプルダウン (旧式)|
| `Flyout pop up` |"popup"|ポップアップ・フライアウトモード|
| `Flyout pull down`|"pulldown"|メニュー形式のフライアウトモード|

表示モードの詳細については、[フライアウトモード](../../FormObjects/properties_Display.md#flyout-mode) を参照してください。 

オプションの *\** 引数を渡した場合、*object* にはオブジェクト名 (文字列) を指定します。*\** 引数を省略した場合、*object* にはフィールドまたは変数を指定します。この場合、フィールドまたはフォーム変数への参照を渡します。

サポートされている値で呼び出された場合、オブジェクトの外観は即座に更新されます。フォームの再描画は必要ありません。

*mode* にその他のテキスト値が渡された場合、エラーは生成されず、値は無視され、カレントのフライアウトモードは変更されません。

## 例題

```4d
// プルダウンモードを強制
OBJECT SET FLYOUT MODE(*; "myDrop"; Flyout pull down)

// その後、旧式の自動動作に戻す
OBJECT SET FLYOUT MODE(*; "myDrop"; Flyout automatic)
```

## 参照

[OBJECT Get flyout mode](../commands/object-get-flyout-mode)  
[ドロップダウンリスト](../FormObjects/dropdownList_Overview.md)  
[フライアウトモード](../FormObjects/properties_Display.md#flyout-mode)

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1869 |
| スレッドセーフである | no |
