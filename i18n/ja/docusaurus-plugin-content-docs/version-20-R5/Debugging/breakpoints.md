---
id: breakpoints
title: ブレークポイントとキャッチコマンド
---

## 概要

ブレークポイントとキャッチコマンドは、非常に効率的なデバッグ手法です。 どちらも、コードの実行を任意のステップで一時停止させる (まだ表示されていない場合はデバッガーウィンドウを表示させる) という同じ効果があります。

ブレークポイントは、実行を一時停止させたいコードの任意の行に設定します。 ブレークポイントには条件を関連付けることができます。

キャッチコマンドは、特定のコマンドが呼び出された時点で、呼び出し元プロセスの実行をトレース開始することができます。

## ブレークポイント

ブレークポイントを設定するには、デバッガーまたはコードエディターのソースコードエリアの左マージン内をクリックします。

In the following example, a break point (the red bullet) has been set, in the debugger, on the line `If ($in.dataClass#Null)`:

![break-point](../assets/en/Debugging/break.png)

In the above example, clicking the [**No Trace**](./debugger.md/#no-trace) button resumes normal execution up to the line marked with the break point. その後、ブレークポイントで示された行は実行されずに、トレースモードへ 戻ります。 Setting a break point beyond the program counter and clicking the **No Trace** button allows you to skip portions of the method being traced.

赤色の点をクリックすると、ブレークポイントは削除されます。

### ブレークポイントプロパティ

ブレークポイントプロパティウィンドウを使って、ブレークポイントのふるまいを変更することができます:

![breakpoint-properties](../assets/en/Debugging/breakpoint-properties.png)

This window is available from the Code Editor or the [Source Code Pane](debugger.md#source-code-pane). 次のことが可能です:

- right-click a line and select **Edit Breakpoint** in the contextual menu, or
- `Alt+click` (Windows) or `Option+click` (macOS) in the left margin.

ブレークポイントが既に存在する場合、そのブレークポイントについてのウィンドウが表示されます。 それ以外の場合は、ブレークポイントが新規作成され、そのブレークポイントに関するウィンドウを表示します。

プロパティは、次の通りです:

- **Location**: indicates the name of the method and the line number attached to the breakpoint.
- **Break when following expression is true**: You can create **conditional breakpoints** by entering a 4D formula that returns `True` or `False`. For example, insert `Records in selection(\[aTable])=0` to make sure the break occurs only if there no record selected for the table \[aTable]. Breakpoint conditions are available in the **Condition** column of the [Break list](#break-list).
- **Number of times to skip before breaking**: You can attach a breakpoint to a line located in a loop structure (While, Repeat, or For) or located in subroutine or function called from within a loop.
- **Breakpoint is disabled**: If you currently do not need a break point, but might need it later, you can temporarily disable it. 無効なブレークポイントは、点 (･) ではなくダッシュ記号 (-) で表示されます。

### リモートデバッグでのブレークポイント

ブレークポイントの一覧はローカルに保存されています。 リモートデバッグモードでは、起動したデバッガーがリモート4D だった場合、デバッグセッションの間はリモートのブレークポイント一覧がサーバーのブレークポイント一覧を一時的に置き換えます。

サーバーのブレークポイント一覧は、サーバー上でデバッガーが起動した場合には自動的に復元され使用されます。

### ブレークリスト

ブレークリストは、デバッガーウィンドウ又はコードエディターで作成したブレークポイントを管理することが出来るランタイムエクスプローラのページです。 For more information on the Runtime Explorer, see its dedicated page in [the Design reference manual](https://doc.4d.com/4Dv19/4D/19/Runtime-Explorer.200-5416614.en.html).

ブレークリストのページを開くには:

1. From the **Run menu**, click **Runtime Explorer...**

2. Click the **Break** tab to display the Break list:

![break-list-runtime-explorer](../assets/en/Debugging/break-list.png)

このウィンドウを使用して、以下のことが可能です:

- Set conditions for breakpoints in the **Conditions** column
- マージンの赤い点をクリックして、ブレークポイントをそれぞれ有効・無効化する。 無効化されたブレークポイントは透明な (薄い赤の) 点で表されます。
- Delete breakpoints by pressing the `Delete` or `Backspace` key, or click on the **Delete** button below the list.
- ブレークポイントをダブルクリックして、対象メソッドをエディターで開く。

このウィンドウから新しいブレークポイントを追加することはできません。 ブレークポイントは、デバッガーウィンドウかコードエディターでのみ設定できます。

## コマンドのキャッチ

The **Catch** tab of the Runtime Explorer lets you add additional breaks to your code by catching calls to 4D commands. 特定メソッドの特定行に効果が限定されるブレークポイントとは異なり、キャッチコマンドは、すべてのプロセスおよびメソッドが対象となります。

キャッチコマンド (コマンド捕捉) は、各所にブレークポイントを設定することなく、大きな範囲でトレースをおこなえる便利な方法です。 For example, if a record that should not be deleted is deleted after you've executed one or several processes, you can try to reduce the field of your investigation by catching commands such as `DELETE RECORD` and `DELETE SELECTION`. キャッチ対象のコマンドが呼び出されるたびにデバッガーが起動されるので、問題のレコードが削除されてしまう経緯を調べ、コードの誤った箇所を突き止めることができます。

ブレークポイントとキャッチコマンドは組み合わせて使うことができます。

キャッチコマンドページを開くには:

1. Choose **Run** > **Runtime explorer...** to open the Runtime Explorer.

2. Click **Catch** to display the Caught Commands List:

![runtime-explorer-window](../assets/en/Debugging/catch-command.png)

このページは、実行中にキャッチされるコマンドをリスト表示します。 リストは 2つの列で構成されています:

- 左の列には、キャッチするコマンドの有効/無効状況と、コマンド名が表示されます。
- 右の列には、コマンドに関連する条件 (あれば) が表示されます。

キャッチするコマンドを新しく追加するには:

1. Click on the **Add New Catch** button (in the shape of a +) located below the list. A new entry is added to the list with the `ALERT` command as default
2. Click the **ALERT** label, type the name of the command you want to catch, then press **Enter**.

キャッチコマンドを無効、あるいは有効にするには、コマンドラベルの前にある点 (•) をクリックします。
透明な (薄い赤の) 点は、キャッチが無効化されていることを表します。

> コマンドキャッチの無効化は、削除するのとほぼ同等の効果があります。 実行中、デバッガーはほぼ全くと言っていいほどエントリーに時間を使いません。 エントリーを無効化することの利点は、それが再び必要になったとき一から作り直さなくて良いという点です。

キャッチコマンドを削除するには:

1. リスト中のコマンド選択します。
2. Press **Backspace** or **Delete** on your keyboard or click on the **Delete** button beneath the list (**Delete All** removes all commands in the list).

### キャッチコマンドに条件を設定する

1. エントリーの右の列をクリックします。
2. ブール値を返す 4Dフォーミュラ (式、コマンドやプロジェクトメソッド) を入力する。

> 条件を削除するにはフォーミュラを削除します。

条件の設定により、コマンド呼び出し時に特定の条件が満たされている場合にのみ、実行を中止する事ができます。 For example, if you associate the condition `Records in selection(\[Emp]>10)` with the break point on the `DELETE SELECTION` command, the code will not be stopped during execution of the `DELETE SELECTION` command if the current selection of the \[Emp] table only contains 9 records (or less).

例外のたびに条件を評価することになるため、キャッチコマンドに条件を追加すると実行速度は遅くなります。 その一方で、条件を追加するとデバッグプロセスは早くなります。条件に合致しないオカレンスを、4D が自動的にスキップしていくからです。
