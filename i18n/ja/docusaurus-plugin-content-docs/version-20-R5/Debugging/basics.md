---
id: basics
title: デバッガー
---

エラーは日常的なものです。 相当行数のコードを書いているのに、1つもエラーが出ないというのは非常にまれです。 むしろ、エラーに対応・修正することは普通のことなのです。

4D の開発環境には、あらゆる種類のエラーに対応するためのデバッグツールが用意されています。

## エラーの種類

### タイプミス

タイプミスはコードエディターによって検出されます。 これらは赤色で示され、ウィンドウ下部に追加情報が表示されます。 以下はタイプミスの例です:

![break-point](../assets/en/Debugging/typing-error.png)

このようなタイプミスは通常、シンタックスエラーの原因となります (上の例では、テーブル名が間違っています)。 コードの該当行の編集を確定すると、エラーの説明が表示されます。 このような場合タイプミスを修正して Enterキーを押すと、再度コードの検証がおこなわれます。

### シンタックスエラー

メソッドの実行時に限って、とらえることのできるエラーがあります。 The [Syntax Error Window](#syntax-error-window) appears when an error occurs during code execution. 例:

![syntax-error](../assets/en/Debugging/syntax-error.png)

Expand the **Details** area to display the last error and its number.

### 環境エラー

時に、BLOB を作成するための十分なメモリがない場合があります。 ディスク上のドキュメントにアクセスしようとした時にドキュメントが存在しないか、他のアプリケーションにより既に開かれていることもあります。 このようなエラーは、コードやその書き方を直接の原因として発生するわけではありません。 Most of the time, these errors are easy to treat with an [error catching method](Concepts/error-handling.md) installed using the `ON ERR CALL` command.

### 設計またはロジックエラー

一般に、これらは発見が最も難しいタイプのエラーです。 これまでに説明しているエラーは、タイプミスを除いて、"設計またはロジックのエラー" という範疇に該当します。 Use the [Debugger](debugger.md) to detect them. 例:

- A _syntax error_ may occur when you try to use a variable that is not yet initialized.
- An _environmental error_ can occur when you try to open a document, because that document's name is received by a subroutine that did not get the right value as a parameter.

設計またはロジックのエラーには、次のような場合もあります:

- A record is not properly updated because, while calling `SAVE RECORD`, you forgot to first test whether or not the record was locked.
- オプション引数を追加した状態がテストされていないため、メソッドが想定通りに動作しない。

場合によって問題の原因は、実際に中断が発生しているコード部分ではなく、外部にあることもあります。

### ランタイムエラー

アプリケーションモードでは、インタープリターモードでは決して見られないエラーが発生する場合があります。 次に例を示します:

![runtime-error](../assets/en/Debugging/runtimeError.png)

問題の原因を迅速に発見するには、メソッドの名前と行番号を記録し、ストラクチャーファイルのインタープリター版を再び開いて、メソッドの該当行を確認します。

## シンタックスエラーウィンドウ

メソッドの実行が停止されるとシンタックスエラーウィンドウが表示されます。 これは以下の理由で起こります:

- 以降のメソッド実行を妨げるエラーが発生した。
- the method produces a false assertion (see the `ASSERT` command)

![syntax-error](../assets/en/Debugging/syntax-error.png)

上部テキストエリアには、エラーの説明メッセージが表示されます。 下部テキストエリアには、エラーが発生した時の実行行が表示されます。エラーが発生したエリアはハイライトされます。 詳細ボタンをクリックすると、プロセスのエラースタックを表示するエリアを展開できます。

シンタックスエラーウィンドウにはいくつかのオプションが用意されています:

- **Edit**: Stops all method execution. 4D はデザインモードに切り替わり、エラーが発生したメソッドがコードエディターで表示され、エラーを修正することができます。 原因に心当たりがあり、これ以上調査しなくても修正できる場合にこのオプションを使用します。

- **Trace**: Enters Trace/Debugger mode. The [Debugger](debugger.md) window is displayed. If the current line has only executed partially, you may have to click the **Trace** button several times.

- **Continue**: Execution continues. エラーが発生した行は、エラーの位置によっては一部のみ実行済みである場合があります。 慎重に実行を継続してください: エラーが原因で、メソッドの残り部分が正常に実行できない場合があります。 We recommend clicking **Continue** only if the error is in a trivial call (such as `SET WINDOW TITLE`) that does not prevent executing and testing the rest of your code.

> Tip: To ignore an error that occurs repeatedly (for example, in loops), you can turn the **Continue** button into an **Ignore** button. Hold down **Alt** (Windows) or **Option** (macOS) key and click the **Continue** button the first time it appears. The button label changes to **Ignore** if the dialog is called again for the same error.

- **Abort**: Stops method execution and returns to the state before the method started executing:

  - イベントに対してフォームメソッドまたはオブジェクトメソッドが実行されている場合には、これらは停止され、フォームに戻ります。
  - メソッドがアプリケーションモードから実行されている場合には、このモードに戻ります。

- **Copy**: Copies the debugging information into the clipboard. この情報はエラーの内部環境 (番号や内部コンポーネント等) を説明します。 情報はタブ区切り形式で記述されます。

- **Save...**: Saves the contents of the syntax error window and the call chain in a `.txt` file.

## デバッガー

A common beginner mistake in dealing with error detection is to click **Abort** in the Syntax Error Window, go back to the Code Editor, and try to figure out what's going by looking at the code. これは止めてください。 You will save plenty of time and energy by always using the **Debugger**.

デバッガーを使うと、メソッドをステップごとにゆっくりと実行することができます。 デバッガーは、エラーが発生した理由を知るために必要な情報を表示できます。 この情報があれば、エラーの修正方法はわかります。

デバッガーを使用するもう 1つの理由は、コードの作成です。 いつも以上に複雑なアルゴリズムを作成してしまう場合があります。 達成感こそありますが、コーディングが正しいかどうかは 100%確かとはいえません。 Instead of running it "blind", you can use the `TRACE` command at the beginning of your code, then execute it step by step to keep an eye on what happens.

## ブレーク

デバッグ作業では、コードの一部のトレースを特定の行までスキップする必要がある場合があります。 Or, you may want to trace the code when a given expression has a certain value (e.g. "$myVar > 1000"), or every time a specific 4D command is called.

These needs are covered by **breakpoints** and **command catching** features. これらの機能は、コードエディター、デバッガー、ランタイムエクスプローラーから設定できます。
