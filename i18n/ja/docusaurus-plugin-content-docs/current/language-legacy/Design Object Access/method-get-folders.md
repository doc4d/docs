---
id: method-get-folders
title: METHOD GET FOLDERS
slug: /commands/method-get-folders
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET FOLDERS.Syntax-->**METHOD GET FOLDERS** ( *arrNames* : Text array {; *filter* : Text}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET FOLDERS.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| arrNames | Text array | &#8592; | ホームページのフォルダー名配列 |
| filter | Text | &#8594; | 名前フィルター |
| * | 演算子 | &#8594; | 指定時 = コンポーネントで実行されたとき、コマンドはホストデータベースに適用される (コンポーネントのコンテキスト以外ではこの引数は無視されます) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|21 R6|ディスクフォルダープロジェクトのサポート|
|13|初出|

</details>
</div>

## 説明 

<!--REF #_command_.METHOD GET FOLDERS.Summary-->**METHOD GET FOLDERS**コマンドは4Dエクスプローラーのホームページに作成されたフォルダー名を*arrNames*配列に返します。<!-- END REF-->

![](../../assets/en/commands/pict837666.en.png)

フォルダー名はユニークでなければならないため、この配列に階層は返されません。 

*filter*引数に比較文字列を渡して、このフォルダーリストを絞り込むことができます。この場合コマンドは名前がフィルターにマッチするフォルダーのみを返します。"@"をワイルドカードとして使用することができます。空の文字列を渡すと*filter*引数は無視されます。 

このコマンドがコンポーネントから呼ばれると、デフォルトでコンポーネントのフォルダー名が返されます。*\** 引数を渡すと配列にはホストデータベースのフォルダーが返されます。

[ディスクフォルダープロジェクト](../../Project/architecture.md#disk-folder-projects) においては、コマンドは `Project/Sources` 下のディスク上にあるフォルダー(空のフォルダーを含む)、および `tableFolders.json` ファイル内で指定されているフォルダーの名前を返します。タイプ別フォルダー(`Methods`、`Classes`、`Forms`、`WebForms`)と固定フォルダー(`DatabaseMethods`、`TableForms`、`Triggers`、`Shared`)は返されません。`folders.json` ファイルは無視されます。

## 例題

`Sources/Invoices` と `Sources/Invoices/Archive` フォルダーを持つディスクフォルダープロジェクトにおいて、ホームページのフォルダー名を取得したい場合を考えます:

```4d
ARRAY TEXT($folders; 0)
METHOD GET FOLDERS($folders)
// $folders には "Invoices" と "Archive" が格納されます
```

## 参照 

[METHOD GET PATHS](../commands/method-get-paths)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1206 |
| スレッドセーフである | no |


