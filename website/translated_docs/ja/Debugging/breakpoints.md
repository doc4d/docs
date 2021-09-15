---
id: breakpoints
title: ブレークポイントとキャッチコマンド
---

## 概要


ブレークポイントとキャッチコマンドは、非常に効率的なデバッグ手法です。 どちらも、コードの実行を任意のステップで一時停止させる (まだ表示されていない場合はデバッガーウィンドウを表示させる) という同じ効果があります。

ブレークポイントは、実行を一時停止させたいコードの任意の行に設定します。 ブレークポイントには条件を関連付けることができます。

キャッチコマンドは、特定のコマンドが呼び出された時点で、呼び出し元プロセスの実行をトレース開始することができます。



## ブレークポイント


ブレークポイントを設定するには、デバッガーまたはメソッドエディターのソースコードエリアの左マージン内をクリックします。

次の図では、ブレークポイント (赤い点) がデバッガー内で、`If ($in.dataClass#Null)` の行に設定されています:

![ブレークポイント](assets/en/Debugging/break.png)

上の状態で [**トレース終了**](./debugger.md/#トレース終了) ボタンをクリックすると、ブレークポイントが設定された行まで実行が再開されます。 その後、ブレークポイントで示された行は実行されずに、トレースモードへ 戻ります。 プログラムカウンターより下方の (後に実行される) 行にブレークポイントを設定し、**トレース終了** ボタンをクリックすると、ブレークポイントまでのメソッドをスキップすることができます。

赤色の点をクリックすると、ブレークポイントは削除されます。


### ブレークポイントプロパティ

ブレークポイントプロパティウィンドウを使って、ブレークポイントのふるまいを変更することができます:

![breakpoint-properties](assets/en/Debugging/breakpoint-properties.png)

このウィンドウはメソッドエディターおよびデバッガーの [ソースコードエリア](debugger.md#ソースコードエリア) からアクセスします。 次の操作がおこなえます:

- 任意の行を右クリックして、コンテキストメニューから **ブレークポイントを編集...** を選択する。
- 左マージン内で `Alt+クリック` (Windows) または `Option+クリック` (macOS) を実行する。

ブレークポイントが既に存在する場合、そのブレークポイントについてのウィンドウが表示されます。 それ以外の場合は、ブレークポイントが新規作成され、そのブレークポイントに関するウィンドウを表示します。

プロパティは、次の通りです:

* **場所**: メソッド名とブレークポイントが設定されている行番号を示します。
* **次の式が真のときブレーク**: `True` または `False` を返す 4Dフォーミュラを入力することによって、**条件付きブレークポイント** を作成することができます。 たとえば、`Records in selection(\[aTable])=0` と入力すると、テーブル \[aTable] のレコードが選択されていない場合に限ってブレークが発生します。 ブレークポイントの条件は、[ブレークリスト](#ブレークリスト)の **条件** カラムでも確認できます。
* **ブレークの前にスキップする回数**: ループ構造 (While、Repeat、For) 内、またはループから呼び出されているサブルーチンや関数内のコード行にブレークポイントを設定することができます。
* **ブレークポイントが無効です**: ブレークポイントが現在は必要でないものの、後で必要になるかもしれない場合には、一時的に無効にしておくことができます。 無効なブレークポイントは、点 (･) ではなくダッシュ記号 (-) で表示されます。


### リモートデバッグでのブレークポイント

ブレークポイントの一覧はローカルに保存されています。 リモートデバッグモードでは、起動したデバッガーがリモート4D だった場合、デバッグセッションの間はリモートのブレークポイント一覧がサーバーのブレークポイント一覧を一時的に置き換えます。

サーバーのブレークポイント一覧は、サーバー上でデバッガーが起動した場合には自動的に復元され使用されます。

### ブレークリスト

ブレークリストは、デバッガーウィンドウ又はメソッドエディターで作成したブレークポイントを管理することが出来るランタイムエクスプローラのページです。 ランタイムエクスプローラーの詳細については、[デザインリファレンスマニュアル](https://doc.4d.com/4Dv19/4D/19/Runtime-Explorer.200-5416614.ja.html) を参照ください。

ブレークリストのページを開くには:

1. **実行** メニューから **ランタイムエクスプローラー...** を選択します。

2. **ブレーク** タブをクリックして、ブレークリストを表示させます:

![break-list-runtime-explorer](assets/en/Debugging/break-list.png)

このウィンドウを使用して、以下のことが可能です:

* ブレークポイントの **条件** を設定する。
* マージンの赤い点をクリックして、ブレークポイントをそれぞれ有効・無効化する。 無効化されたブレークポイントは透明な (薄い赤の) 点で表されます。
* `Delete` または `Backspace` キーを押すか、リスト下の**削除** ボタンをクリックして、ブレークポイントを削除する。
* ブレークポイントをダブルクリックして、メソッドエディターで対象メソッドを開く。

このウィンドウから新しいブレークポイントを追加することはできません。 ブレークポイントは、デバッガーウィンドウかメソッドエディターでのみ設定できます。


## コマンドのキャッチ

**キャッチ** コマンドリストは、4Dコマンドの呼び出しを捕捉し、デバッガーウィンドウを表示するよう指示することができるランタイムエクスプローラのページです。 特定メソッドの特定行に効果が限定されるブレークポイントとは異なり、キャッチコマンドは、すべてのプロセスおよびメソッドが対象となります。

キャッチコマンド (コマンド捕捉) は、各所にブレークポイントを設定することなく、大きな範囲でトレースをおこなえる便利な方法です。 たとえば、いくつかのプロセスを実行した後に、削除すべきでないレコードが削除されてしまう場合には、`DELETE RECORD` や `DELETE SELECTION` といったコマンドの処理をキャッチすることにより、調査の範囲を狭めることができます。 キャッチ対象のコマンドが呼び出されるたびにデバッガーが起動されるので、問題のレコードが削除されてしまう経緯を調べ、コードの誤った箇所を突き止めることができます。

ブレークポイントとキャッチコマンドは組み合わせて使うことができます。

キャッチコマンドページを開くには:

1. **実行** メニューから **ランタイムエクスプローラ...** を選択します。

2. **キャッチ** タブをクリックすると、キャッチコマンドリストが表示されます:

![runtime-explorer-window](assets/en/Debugging/catch-command.png)

このページは、実行中にキャッチされるコマンドをリスト表示します。 リストは 2つの列で構成されています:

* The left column displays the Enable/Disable status of the caught command, followed by the name of the command
* The right column displays the condition associated with the caught command, if any

To add a command to be caught:

1. Click on the **Add New Catch** button (in the shape of a +) located below the list. A new entry is added to the list with the `ALERT` command as default
2. Click the **ALERT** label, type the name of the command you want to catch, then press **Enter**.

To enable or disable a caught command, click on the bullet (•) in front of the command label. The bullet is transparent when the command is disabled.

> Disabling a caught command has almost the same effect as deleting it. During execution, the debugger spends almost no time on the entry. The advantage of disabling an entry is that you do not have to recreate it when you need it again.

To delete a caught command:

1. Select a command in the list.
2. Press **Backspace** or **Delete** on your keyboard or click on the **Delete** button beneath the list (**Delete All** removes all commands in the list).

### Setting a Condition for catching a command

1. Click on the entry in the right column
2. Enter a 4D formula (expression, command call or project method) that returns a Boolean value.

> To remove a condition, delete its formula.

Adding conditions allows you to stop execution when the command is invoked only if the condition is met. For example, if you associate the condition `Records in selection(\[Emp]>10)` with the break point on the `DELETE SELECTION` command, the code will not be stopped during execution of the `DELETE SELECTION` command if the current selection of the \[Emp] table only contains 9 records (or less).

Adding conditions to caught commands slows the execution, because the condition has to be evaluated each time an exception is met. On the other hand, adding conditions accelerates the debugging process, because 4D automatically skips occurrences that do not match the conditions.

