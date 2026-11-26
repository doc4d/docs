---
id: reload-project
title: RELOAD PROJECT
slug: /commands/reload-project
displayed_sidebar: docs
---

<!--REF #_command_.RELOAD PROJECT.Syntax-->**RELOAD PROJECT**<!-- END REF-->
<!--REF #_command_.RELOAD PROJECT.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|21 R6|ディスクフォルダープロジェクトのフォルダー階層を再読み込み|
|18 R4|初出|

</details>
</div>

## 説明 

<!--REF #_command_.RELOAD PROJECT.Summary-->**RELOAD PROJECT** コマンドは、カレントの4D 環境で実行中のプロジェクトに対して、ソースファイル定義(メソッド、ファイル、等)をディスクから再読み込みします。<!-- END REF-->このコマンドは**インタープリタモード**で実行中の4D プロジェクトに対してのみ使用可能です。コマンドの実行は非同期となります。

通常、ソースファイルが追加/変更/削除されたことを4D アプリケーションが検知すると、プロジェクトは自動的にリロード(再読み込み)されます。これは例えばファイルが4D Developer 環境から直接編集された場合や、4D アプリケーションウィンドウがバックグラウンドからOSのフォアグラウンドに移動した直後などのタイミングです。

**RELOAD PROJECT** コマンドの呼び出しが必要になるのは、これらの自動プロジェクトリロード機構が適用されない、以下のようなコンテキストです:

* プロジェクトが4D Server または4D Developer で実行中で、ソースファイルが外部的な手段、例えばソースコントロールレポジトリからのpull アクションなどによって編集され、そして(自動実行を行なっているなどの理由で)アプリケーションウィンドウを手動で動かすことができないまたは動かしたくない場合。
* プロジェクトがヘッドレスモードの4D Server で実行中にソースファイルが編集された場合。

デザイン環境が開かれていない場合には、コマンドは何もしません。

このコマンドは呼び出される環境によって、以下のように動作が異なります:

* 同じマシンの4D Server に接続している4D Developer から呼び出された場合、コマンドはまず4D Server で実行され、そのあとに4D Developer 側で実行されます。
* 異なるマシンの4D Server にリモート接続している4D Developer から呼び出された場合、コマンドは4D Server でのみ実行されます。
* シングルユーザー版4D または4D Server で呼び出された場合、コマンドはローカルに実行されます。

[ディスクフォルダープロジェクト](../../Project/architecture.md#disk-folder-projects) においては、コマンドはさらに、`Project/Sources` 下のディスク上にあるフォルダーから、エクスプローラーのホームページのフォルダー階層も再読み込みします: 追加・名前変更・移動・削除されたフォルダー、およびフォルダー間で移動された要素が対象です。別のフォルダーに移動されたメソッドは、その同一性を保持します(開いているエディターとブレークポイントはメソッドに追従します)。ディスク上で見つかった[問題のあるファイル](../../Develop/explorer.md#files-at-fault) はダイアログで報告されます。IDE がない場合は診断ログに報告されます。

## 例題

ディスクフォルダープロジェクトにおいて、エクスプローラーの外でメソッドを含むフォルダーを追加し、それをホームページに表示したい場合を考えます:

```4d
var $folder : 4D.Folder:=Folder(fk database folder).folder("Project/Sources/Reports/Methods")
$folder.create()
$folder.file("monthlyReport.4dm").setText("//%attributes = {}\r#DECLARE()\r")
RELOAD PROJECT  // Reports フォルダーとその monthlyReport メソッドがホームページに表示されます
```

## 参照 

  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1739 |
| スレッドセーフである | yes |


