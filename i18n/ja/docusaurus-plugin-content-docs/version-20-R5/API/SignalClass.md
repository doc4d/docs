---
id: SignalClass
title: Signal
---

シグナルは、マルチプロセスアプリケーションにおいてプロセス間でのやり取りを管理し衝突を避けるために 4Dランゲージが提供するツールです。 シグナルは、1つ以上のプロセスが実行を一時停止し、特定のタスクが完了するまで待つようにする仕組みです。 どのプロセスもシグナルを待機またはリリースすることができます。

> プロセス間のやり取りを管理するには、セマフォーも使用できます。 Semaphores allow you to make sure that two or more processes do not modify the same resource (file, record...) at the same time. セマフォーを解除できるのは、それを設定したプロセスのみです。

### Signal オブジェクト

シグナルは、ワーカーやプロセスを呼び出す/作成するコマンドに対して引数として渡す必要のある共有オブジェクトです。

A `4D.Signal` object contains the following built-in methods and properties:

- [`.wait()`](#wait)
- [`.trigger()`](#trigger)
- [`.signaled`](#signaled)
- [`.description`](#description).

Any worker/process calling the `.wait()` method will suspend its execution until the `.signaled` property is true. シグナルを待っている間、呼び出したプロセスは CPU を消費しません。 これはマルチプロセスアプリケーションのパフォーマンスを鑑みると有意義な仕組みです。 The `.signaled` property becomes true when any worker/process calls the `.trigger()` method.

Note that to avoid blocking situations, the `.wait()` can also return after a defined timeout has been reached.

Signal objects are created with the [New signal](#new-signal) command.

### シグナルの使い方

In 4D, you create a new signal object by calling the [`New signal`](#new-signal) command. Once created, this signal must be passed as a parameter to the `New process` or `CALL WORKER` commands so that they can modify it when they have finished the task you want to wait for.

- `signal.wait()` must be called from the worker/process that needs another worker/process to finish a task in order to continue.
- `signal.trigger()` must be called from the worker/process that finished its execution in order to release all others.

![](../assets/en/API/signal.png)

Once a signal has been released using a `signal.trigger()` call, it cannot be reused again. If you want to set another signal, you need to call the `New signal` command again.

Since a signal object is a [shared object](Concepts/shared.md), you can use it to return results from called workers/processes, provided that you do not forget to write values within a `Use...End use` structure (see example).

### 例題

```4d
 var $signal : 4D.Signal

  // Creation of a signal
 $signal:=New signal

  // call main process and execute OpenForm method
 CALL WORKER(1;"OpenForm";$signal)
  // do another calculation
 ...
  // Waiting for the end of the process
 $signaled:=$signal.wait()

  // Processing of the results
 $calc:=$signal.result+...
```

_**OpenForm**_ method :

```4d
 #DECLARE ($signal : 4D.Signal)  
 var $form : Object
 $form:=New object("value";0)

  // フォームを開きます
 $win:=Open form window("Information";Movable form dialog box)
 DIALOG("Information";$form)
 CLOSE WINDOW($win)

  // $signal 共有オブジェクトに新しい属性を追加することで、他のプロセスに返り値を受け渡します:
 Use($signal)
    $signal.result:=$form.value
 End use

  // 待機プロセスに向けてシグナルをトリガーします
 $signal.trigger()
```

### 概要

|                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SignalClass.description.Syntax -->](#description)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SignalClass.description.Summary --> |
| [<!-- INCLUDE #SignalClass.signaled.Syntax -->](#signaled)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SignalClass.signaled.Summary -->          |
| [<!-- INCLUDE #SignalClass.trigger().Syntax -->](#trigger)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SignalClass.trigger().Summary -->         |
| [<!-- INCLUDE #SignalClass.wait().Syntax -->](#wait)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SignalClass.wait().Summary -->                  |

<!-- REF SignalClass.New signal.Desc -->

## New signal

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #_command_.New signal.Syntax -->**New signal** { ( *description* : Text ) } : 4D.Signal<!-- END REF -->

<!-- REF #_command_.New signal.Params -->

| 引数          | タイプ                       |     | 説明                   |
| ----------- | ------------------------- | :-: | -------------------- |
| description | Text                      |  -> | シグナルの詳細              |
| 戻り値         | 4D.Signal |  <- | シグナルを格納するネイティブオブジェクト |

<!-- END REF -->

#### 説明

The `New signal` command <!-- REF #_command_.New signal.Summary -->creates a `4D.Signal` object<!-- END REF -->.

シグナルは、ワーカー/プロセスから他のワーカー/プロセスへと引数のように渡せる共有オブジェクトです。 そのため、以下のようなことが可能になります:

- 呼び出されたワーカー/プロセスは特定の処理が完了した後に Signal オブジェクトを更新することができます。
- 呼び出し元のワーカー/プロセスは CPUリソースを消費することなく、実行を停止してシグナルが更新されるまで待つことができます。

Optionally, in the _description_ parameter you can pass a custom text describing the signal. テキストは、シグナルの作成後に定義することも可能です。

Since the signal object is a shared object, it can also be used to maintain user properties, including the [`.description`](#description) property, by calling the `Use...End use` structure.

**戻り値**

A new [`4D.Signal` object](#signal-object).

#### 例題

以下は、シグナルを設定するワーカーの典型的な例です:

```4d
 var $signal : 4D.Signal
 $signal:=New signal("This is my first signal")

 CALL WORKER("myworker";"doSomething";$signal)
 $signaled:=$signal.wait(1) //wait for 1 second max

 If($signaled)
    ALERT("myworker finished the work. Result: "+$signal.myresult)
 Else
    ALERT("myworker has not finished in less than 1s")
 End if
```

The _**doSomething**_ method could be like:

```4d
 #DECLARE ($signal : 4D.Signal)
  //any processing
  //...
 Use($signal)
    $signal.myresult:=$processingResult  //return the result
 End use
 $signal.trigger() // The work is finished
```

<!-- END REF -->

<!-- REF SignalClass.description.Desc -->

## .description

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #SignalClass.description.Syntax -->**.description** : Text<!-- END REF -->

#### 説明

The `.description` property <!-- REF #SignalClass.description.Summary -->contains a custom description for the `Signal` object.<!-- END REF -->.

`.description` can be set at the creation of the signal object or at any moment. Note that since the `Signal` object is a shared object, any write-mode access to the `.description` property must be surrounded by a `Use...End use` structure.

This property is **read-write**.

<!-- END REF -->

<!-- REF SignalClass.signaled.Desc -->

## .signaled

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #SignalClass.signaled.Syntax -->**.signaled** : Boolean<!-- END REF -->

#### 説明

The `.signaled` property <!-- REF #SignalClass.signaled.Summary -->contains the current state of the `Signal` object<!-- END REF -->. When the signal is created, `.signaled` is **False**. It becomes **True** when the `.trigger( )` is called on the object.

This property is **read-only**.

<!-- END REF -->

<!-- REF SignalClass.trigger().Desc -->

## .trigger()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #SignalClass.trigger().Syntax -->**.trigger( )**<!-- END REF -->

<!-- REF #SignalClass.trigger().Params -->

| 引数 | タイプ |     | 説明         |
| -- | --- | :-: | ---------- |
|    |     |     | 引数を必要としません |

<!-- END REF -->

#### 説明

The `.trigger( )` function <!-- REF #SignalClass.trigger().Summary -->sets the `signaled` property of the signal object to **true**<!-- END REF --> and awakens all workers or processes waiting for this signal.

If the signal is already in the signaled state (i.e., the `signaled` property is already **true**), the function does nothing.

<!-- END REF -->

<!-- REF SignalClass.wait().Desc -->

## .wait()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #SignalClass.wait().Syntax -->**.wait**( { *timeout* : Real } ) : Boolean <!-- END REF -->

<!-- REF #SignalClass.wait().Params -->

| 引数      | タイプ     |    | 説明                                   |
| ------- | ------- | -- | ------------------------------------ |
| timeout | Real    | -> | シグナルの最大待機時間 (秒単位) |
| 戻り値     | Boolean | <- | State of the `.signaled` property    |

<!-- END REF -->

#### 説明

The `.wait( )` function <!-- REF #SignalClass.wait().Summary -->makes the current process wait until the `.signaled` property of the signal object to become **true** or the optional _timeout_ to expire<!-- END REF -->.

To prevent blocking code, you can pass a maximum waiting time in seconds in the _timeout_ parameter (decimals are accepted).

> **Warning**: Calling `.wait( )` without a _timeout_ in the 4D main process is not recommended because it could freeze the whole 4D application.

If the signal is already in the signaled state (i.e. the `.signaled` property is already **true**), the function returns immediately, without waiting.

The function returns the value of the `.signaled` property. Evaluating this value allows knowing if the function returned because the `.trigger( )` has been called (`.signaled` is **true**) or if the _timeout_ expired (`.signaled` is **false**).

> The state of a process that waits for a signal is `Waiting for internal flag`.

<!-- END REF -->
