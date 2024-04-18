---
id: error-handling
title: エラー処理
---

エラー処理とは、アプリケーション内で発生する可能性のあるエラーに備え、対処することです。 ランタイムにおけるエラーのキャッチや報告、またそれらの条件を検証するため、4Dは包括的なサポートを提供しています。

エラー処理は次の2つの要望に応えます:

- 開発フェーズにおいて、問題となりうるコードのエラーやバグを発見して修正したい。
- catching and recovering from unexpected errors in deployed applications; in particular, you can replace system error dialogs (disk full, missing file, etc.) with you own interface.

基本的に、4D でエラー処理する方法は 2つあります。 次のことが可能です:

- [install an error-handling method](#installing-an-error-handling-method), or
- use a [`Try()` keyword](#tryexpression) or a [`Try/Catch` structure](#trycatchend-try) before pieces of code that call a function, method, or expression that can throw an error.

:::tip Good practice

サーバー上で実行されるコードのため、4D Server にはグローバルなエラー処理メソッドを実装しておくことが強く推奨されます。 When 4D Server is not running [headless](../Admin/cli.md) (i.e. launched with its [administration window](../ServerWindow/overview.md)), this method would avoid unexpected dialog boxes to be displayed on the server machine. In headless mode, errors are logged in the [4DDebugLog file](../Debugging/debugLogFiles.md#4ddebuglogtxt-standard) for further analysis.

:::

## エラー/ステータス

Many 4D class functions, such as `entity.save()` or `transporter.send()`, return a _status_ object. ランタイムにおいて "想定される"、プログラムの実行を停止させないエラー (無効なパスワード、ロックされたエンティティなど) がこのオブジェクトに格納されます。 これらのエラーへの対応は、通常のコードによっておこなうことができます。

ディスク書き込みエラーやネットワークの問題などのイレギュラーな中断は "想定されない" エラーです。 This category of errors generates exceptions and needs to be handled through an error-handling method or a `Try()` keyword.

## エラー処理メソッドの実装

In 4D, all errors can be caught and handled by specific project methods, named **error-handling** (or **error-catching**) methods.

インストールされたエラーハンドラーは、4Dアプリケーションまたはそのコンポーネントでエラーが発生した場合、インタープリターモードまたはコンパイル済モードで自動的に呼び出されます。 実行コンテキストに応じて、異なるエラーハンドラーを呼び出すこともできます (後述参照)。

To _install_ an error-handling project method, you just need to call the [`ON ERR CALL`](https://doc.4d.com/4dv19/help/command/en/page155.html) command with the project method name and (optionnally) scope as parameters. 例:

```4d
ON ERR CALL("IO_Errors";ek local) // ローカルなエラー処理メソッドを実装します
```

To stop catching errors for an execution context and give back hand, call `ON ERR CALL` with an empty string:

```4d
ON ERR CALL("";ek local) // ローカルプロセスにおいてエラーの検知を中止します
```

The  [`Method called on error`](https://doc.4d.com/4dv20/help/command/en/page704.html) command allows you to know the name of the method installed by `ON ERR CALL` for the current process. このコマンドは汎用的なコードでとくに有用です。エラー処理メソッドを一時的に変更し、後で復元することができます:

```4d
 $methCurrent:=Method called on error(ek local)
 ON ERR CALL("NewMethod";ek local)
  //If the document cannot be opened, an error is generated
 $ref:=Open document("MyDocument")
  //Reinstallation of previous method
 ON ERR CALL($methCurrent;ek local)

```

### スコープとコンポーネント

エラー処理メソッドは、実行コンテキストごとに設定することができます:

- for the **current process**- a local error handler will be only called for errors that occurred in the current process of the current project,
- for the **whole application**- a global error handler will be called for all errors that occurred in the application execution context of the current project,
- from the **components**- this error handler is defined in a host project and will be called for all errors that occurred in the components when they were not already caught by a component handler.

例:

```4d
ON ERR CALL("IO_Errors";ek local) // ローカルなエラー処理メソッドをインストールします
ON ERR CALL("globalHandler";ek global) // グローバルなエラー処理メソッドをインストールします
ON ERR CALL("componentHandler";ek errors from components) // コンポーネント用のエラー処理メソッドをインストールします
```

"フォールバック" として機能するグローバルエラーハンドラーと、特定プロセス専用のローカルエラーハンドラーを同時にインストールすることができます。 グローバルなエラーハンドラーは、インターフェース付きでサーバーを実行している場合にエラーダイアログの表示を避けるためにも有効です。

アプリケーションにおいて一つのエラーキャッチメソッドを使うやり方もあれば、アプリケーションのモジュールごとに違うメソッドを定義する方法もあります。 ただし、一つのプロジェクトと一つの実行コンテキストにつき実装できるのは一つのメソッドのみです。

エラーが発生した場合、以下の図のように 1つのメソッドのみが呼び出されます:

![error management](../assets/en/Concepts/error-schema.png)

### メソッド内でのエラー処理

独自に作成したエラー処理メソッド内では、エラーを調査するための情報がいくつか提供されています:

- 専用のシステム変数:

  - `Error` (longint): error code
  - `Error method` (text): name of the method that triggered the error
  - `Error line` (longint): line number in the method that triggered the error
  - `Error formula` (text): formula of the 4D code (raw text) which is at the origin of the error.

:::info

4D automatically maintains a number of variables called **system variables**, meeting different needs. See the _4D Language Reference manual_.

:::

- the [`Last errors`](https://doc.4d.com/4dv19/help/command/en/page1799.html) command that returns a collection of the current stack of errors that occurred in the 4D application. You can also use the [`GET LAST ERROR STACK`](https://doc.4d.com/4dv19/help/command/en/page1015.html) command that returns the same information as arrays.
- the `Get call chain` command that returns a collection of objects describing each step of the method call chain within the current process.

#### 例題

簡単なエラー処理システムの例です:

```4d
// エラー処理メソッドをインストールします
 ON ERR CALL("errorMethod")
 //... コードの実行
 ON ERR CALL("") // エラーの検知を中止します
```

```4d
// errorMethod project method
 If(Error#1006) //this is not a user interruption
    ALERT("The error "+String(Error)+" occurred". The code in question is: \""+Error formula+"\"")
 End if
```

### 空のエラー処理メソッド

標準のエラーダイアログを表示させないようにするには、空のエラー処理メソッドを実装するだけで実現できます。 The `Error` system variable can be tested in any method, i.e. outside of the error-handling method:

```4d
ON ERR CALL("emptyMethod") //emptyMethod exists but is empty
$doc:=Open document( "myFile.txt")
If (Error=-43)
	ALERT("File not found.")
End if
ON ERR CALL("")
```

## Try(expression)

The `Try(expression)` statement allows you to test a single-line expression in its actual execution context (including, in particular, local variable values) and to intercept errors it throws so that the 4D error dialog box is not displayed. Using `Try(expression)` provides an easy way to handle simple error cases with a very low number of code lines, and without requiring an error-handling method.

:::note

If you want to try a more complex code than a single-line expression, you might consider using a [`Try/Catch` structure](#trycatchend-try).

:::

The formal syntax of the `Try(expression)` statement is:

```4d

Try (expression) : any | Undefined

```

_expression_ can be any valid expression.

If an error occurred during its execution, it is intercepted and no error dialog is displayed, whether an [error-handling method](#installing-an-error-handling-method) was installed or not before the call to `Try()`. If _expression_ returns a value, `Try()` returns the last evaluated value, otherwise it returns `Undefined`.

You can handle the error(s) using the [`Last errors`](https://doc.4d.com/4dv20/help/command/en/page1799.html) command. If _expression_ throws an error within a stack of `Try()` calls, the execution flow stops and returns to the latest executed `Try()` (the first found back in the call stack).

:::note

If an [error-handling method](#installing-an-error-handling-method) is installed by _expression_, it is called in case of error.

:::

### 例題

1. ファイルをエラーなく開くことができ、その内容が読み取り可能な場合に、ファイルの内容を表示します。 以下のように書くことができます:

```4d
var $text : Text
var $file : 4D.File := File("/RESOURCES/myFile.txt")
var $fileHandle : 4D.FileHandle := Try($file.open())
If ($fileHandle # Null)
  $text:=Try($fileHandle.readText()) || "ファイル読み込みエラー"
End if
```

2. ゼロ除算エラーを処理します。 ここでは 0 を返し、エラーをスローするようにします:

```4d
function divide( $p1: real; $p2: real)-> $result: real
  if ($p2=0)
     $result:=0 //only for clarity (0 is the default for reals)
     throw(-12345; "Division by zero")
  else
    $result:=$p1/$p2
  end if

function test()
  $result:=Try(divide($p1;$p2))
  If (Last errors # null)
    ALERT("Error")
  End if

```

3. You want to handle both [predictable and non-predictable](#error-or-status) errors:

```4d
var $e:=ds.Employee.new()
$e.name:="Smith"
$status:=Try($e.save()) //catch predictable and non-predictable errors
If ($status.success)
   ALERT( "Success")
Else
   ALERT( "Error: "+JSON Stringify($status.errors))
End if

```

## Try...Catch...End try

The `Try...Catch...End try` structure allows you to test a block code in its actual execution context (including, in particular, local variable values) and to intercept errors it throws so that the 4D error dialog box is not displayed.

Unlike the `Try(expression)` keyword that evaluates a single-line expression, the `Try...Catch...End try` structure allows you to evaluate any code block, from the most simple to the most complex, without requiring an error-handling method. In addition, the `Catch` block can be used to handle the error in any custom way.

The formal syntax of the `Try...Catch...End try` structure is:

```4d

Try 
	statement(s) // Code to evaluate
Catch
	statement(s) // Code to execute in case of error
End try

```

The code placed between the `Try` and the `Catch` keywords is first executed, then the flow depends on the error(s) encountered during this execution.

- If no error is thrown, the code execution continues after the corresponding `End try` keyword. The code placed between the `Catch` and the `End try` keywords is not executed.
- If the code block execution throws a _non-deferred error_, the execution flow stops and executes the corresponding `Catch` code block.
- If the code block execution throws a _deferred error_, the execution flow continues until the end of the `Try` block and then executes the corresponding `Catch` code block.

:::note

If a _deferred_ error is thrown outside of the `Try` block, the code execution continues until the end of the method or function.

:::

:::info

For more information on _deferred_ and _non-deferred_ errors, please refer to the [`throw`](https://doc.4d.com/4dv20R/help/command/en/page1805.html) command description.

:::

In the `Catch` code block, you can handle the error(s) using standard error handling commands. The [`Last errors`](https://doc.4d.com/4dv20/help/command/en/page1799.html) function contains the last errors collection. You can [declare an error-handling method](#installing-an-error-handling-method) in this code block, in which case it is called in case of error (otherwise the 4D error dialog box is displayed).

:::note

If an [error-handling method](#installing-an-error-handling-method) is installed in the code placed between the `Try` and the `Catch` keywords, it is called in case of error.

:::

### 例題

Combining transactions and `Try...Catch...End try` structures allows writing secured code for critical features.

```4d
Function createInvoice($customer : cs.customerEntity; $items : Collection; $invoiceRef : Text) : cs.invoiceEntity
	var $newInvoice : cs.invoiceEntity
	var $newInvoiceLine : cs.invoiceLineEntity
	var $item : Object
	ds.startTransaction()
	Try
		$newInvoice:=This.new()
		$newInvoice.customer:=$customer
		$newInvoice.invoiceRef:=$invoiceRef
		For each ($item; $items)
			$newInvoiceLine:=ds.invoiceLine.new()
			$newInvoiceLine.item:=$item.item
			$newInvoiceLine.amount:=$item.amount
			$newInvoiceLine.invoice:=$newInvoice
			//call other specific functions to validate invoiceline
			$newInvoiceLine.save()
		End for each 
		$newInvoice.save()
		ds.validateTransaction()
	Catch
		ds.cancelTransaction()
		ds.logErrors(Last errors)
		$newInvoice:=Null
	End try
	return $newInvoice

```
