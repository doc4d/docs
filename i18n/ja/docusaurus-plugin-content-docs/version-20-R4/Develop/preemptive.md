- - -
id: preemptive title: Preemptive Processes
- - -


The compiled 4D code can be executed in **preemptive processes**. この新機能のおかげで、コンパイルされた 4Dアプリケーションはマルチコアコンピューターの利点をすべて活かすことができ、それによって実行速度が向上し、またより多くのユーザーの接続をサポートすることができます。

## プリエンプティブプロセスとは？

When run in *preemptive* mode, a process is dedicated to a CPU. プロセス管理はシステムへと委任され、マルチコアのマシン上にてシステムはプロセスをそれぞれのCPUへと個別に割り当てます。

When run in *cooperative* mode, all processes are managed by the parent application thread and share the same CPU, even on a multi-core machine.

結果として、プリエンプティブモードでは、アプリケーションの全体的なパフォーマンスは向上します。マルチコアのマシン上では複数のプロセス (スレッド) が真実同時実行可能であるため、パフォーマンスの向上はさらに顕著になります。 (ただし、実際のパフォーマンスの差は、実行される処理に依存します。) その一方で、プリエンプティブモードではそれぞれのスレッドが他から独立しており、アプリケーションによって直接管理されている訳ではないため、プリエンプティブに準拠させるにあたってはメソッドに特定の制約が課されます。 それに加え、プリエンプティブ実行は特定のコンテキストでのみ使用可能です。

## プリエンプティブモードの利用可能状況

プリエンプティブモードの使用は、以下の実行コンテキストでサポートされています:

| コンテキスト      | プリエンプティブ実行                                                             |
| ----------- | ---------------------------------------------------------------------- |
| 4D Server   | ◯                                                                      |
| 4Dリモート      | yes, with [ServerNet or QUIC](../settings/client-server#network-layer) |
| 4D シングルユーザー | ◯                                                                      |
| コンパイルモード    | ◯                                                                      |
| インタープリターモード | ×                                                                      |

If the execution context supports preemptive mode and if the method is "thread-safe", a new 4D process launched using the `New process` or `CALL WORKER` commands, or the "Run method" menu item, will be executed in a preemptive thread.

Otherwise, if you call `New process` or `CALL WORKER` from an execution context that is not supported (i.e. from interpreted mode), the process is always cooperative.


## スレッドセーフとスレッドアンセーフ

4Dコードは、いくつかの特定の条件に合致していた場合に限りプリエンプティブスレッド内で実行することができます。 Each part of the code being executed (commands, methods, variables, functions, etc.) must be compliant with preemptive use. プリエンプティブスレッドで実行可能な要素はスレッドセーフと呼ばれ、プリエンプティブスレッドで実行できない要素はスレッドアンセーフと呼ばれます。

:::note

スレッドは、親プロセスメソッドをスタートとして独自に管理されているので、呼び出しチェーン全体のどこにおいてもスレッドアンセーフなコードが含まれていてはいけません。そのようなコードが含まれていた場合、プリエンプティブに実行することはできません。 This point is discussed [in this paragraph](#when-is-a-process-started-preemptively).

:::

要素毎の "スレッドセーフティ" プロパティは、その要素自身によります:

- 4Dコマンド: スレッドセーフティは内部プロパティです。 In the [4D Language Reference manual](https://doc.4d.com/4Dv20/4D/20.1/4D-Language-Reference.100-6479538.en.html), thread-safe commands are identified by the ![](../assets/en/Develop/thread-safe.png) icon. You can also use the [`Command name`](https://doc.4d.com/4dv20/help/command/en/page538.html) command to know if a command is thread-safe. 4Dコマンドの大部分はプリエンプティブモードで実行可能です。
- Project methods: conditions for being thread-safe are listed in [this paragraph](#writing-a-thread-safe-method).

原則として、プリエンプティブスレッド内で実行されるコードは外部との相互作用する部分、たとえばプラグインコードやインタープロセス変数などを呼び出すことはできません。 しかしながら、4Dデータサーバーと ORDA はプリエンプティブ実行をサポートしていることから、データアクセスは可能です。


## プリエンプティブ実行宣言

デフォルトでは、4D はアプリケーション内のプロジェクトメソッドをすべてコオペラティブモードで実行します。 プリエンプティブモードを利用したい場合は、まず最初に、可能な限りプリエンプティブモードで開始したいメソッドをすべて明示的に宣言することから始まります。これはつまり、プリエンプティブプロセスで実行可能なメソッドであるということです。 The compiler will [check that these methods are actually thread-safe](#writing-a-thread-safe-method) at compile time. また、必要であれば、一部のメソッドに対してプリエンプティブモードを禁止することもできます。

プリエンプティブで使用可能 ("capable") であると宣言することは、当該メソッドにプリエンプティブ実行の資格を与えますが、実行時にそのメソッドが実際にプリエンプティブモードで実行されることを保障するものではないことに留意が必要です。 Starting a process in preemptive mode results from an [evaluation performed by 4D](#when-is-a-process-started-preemptively) regarding the properties of all the methods in the call chain of the process.

メソッドがプリエンプティブモードに則していることを宣言するためには、メソッドプロパティダイアログボックスの "実行モード" 宣言オプションを使用する必要があります:

![](../assets/en/Develop/preemptif.png)

以下のオプションが提供されています:

- **Can be run in preemptive processes**: By checking this option, you declare that the method is able of being run in a preemptive process and therefore should be run in preemptive mode whenever possible. メソッドの "preemptive" プロパティは "capable" に設定されます。

    このオプションがチェックされている場合、4Dコンパイラーはメソッドが実際にプリエンプティブモードで実行可能かどうかを検証し、そうでない場合 (たとえば、プリエンプティブモードで実行不可能なコマンドやメソッドを直接的あるいは間接的に呼び出している場合など) にはエラーを返します。なお、コールチェーンはすべて解析されますが、最初のサブレベルに対してのみエラーが報告されます。 エラーの場合には、メソッドを編集してスレッドセーフにするか、あるいは別のオプションを選択します。

    メソッドのプリエンプティブ性が証明されると、内部で "thread safe" というタグ付けがされ、すべての要件が満たされればプリエンプティブモードで実行されます。 This property defines its eligibility for preemptive mode but does not guarantee that the method will actually be run in preemptive mode, since this execution mode requires a [specific context](#when-is-a-process-started-preemptively).

- **プリエンプティブプロセスでは実行不可**: このオプションをチェックすると、当該メソッドはプリエンプティブモードでの実行は不可能であると宣言し、以前の 4D のバージョンと同様に常にコオペラティブモードで実行されます。 メソッドの "preemptive" プロパティは "incapable" に設定されます。

    このオプションがチェックされている場合、4Dコンパイラーはメソッドがプリエンプティブ実行可能かどうかを検証しません。メソッドは内部で自動的に "thread unsafe" とタグ付けされます (たとえ、理論的にはスレッドセーフであってもです)。 ランタイムで呼び出された場合、このメソッドは同じスレッド内の他のメソッドを "汚染" し、他のメソッドがスレッドセーフであったとしても、スレッドはコオペラティブモードでの実行を強制されます。

- **特に設定しない** (デフォルト): このオプションをチェックすると、当該メソッドについてはプリエンプティブプロパティを管理しないことを宣言します。 メソッドの "preemptive" プロパティは "indifferent" に設定されます。

    このオプションがチェックされているとき、4Dコンパイラーはメソッドのプリエンプティブ性を評価し、内部的に "thread safe" あるいは "thread unsafe" のタグ付けをします。 プリエンプティブ実行に関するエラーは報告されません。 メソッドがスレッドセーフと評価されていれば、ランタイムでプリエンプティブコンテキストから呼び出された場合にはプリエンプティブスレッド実行を妨げません。 逆に、メソッドがスレッドアンセーフであると評価された場合には、ランタイムで呼び出された場合に、プリエンプティブなスレッド実行を不可能にします。

Note that with this option, whatever the internal thread safety evaluation, the method will always be executed in cooperative mode when called directly by 4D as the first parent method (for example through the `New process` command). 内部で "thread-safe" とタグ付けされている場合、そのタグはコールチェーン内で他のメソッドから呼び出された場合に限り考慮されます。

:::note Particular case

If the method has also the [**Shared by components and host database**](../Project/code-overview.md#shared-by-components-and-host-database) property, setting the **Indifferent** option will automatically tag the method as thread-unsafe. 共有コンポーネントメソッドをスレッドセーフにしたい場合には、**プリエンプティブプロセスで実行可能** オプションを明示的に選択する必要があります。

:::

## プロセスがプリエンプティブに実行される条件とは?

:::info リマインダー

プリエンプティブ実行はコンパイル済みモードでのみ利用可能です。

:::

In compiled mode, when starting a process created by either `New process` or `CALL WORKER` commands, 4D reads the preemptive property of the process method (also named *parent* method) and executes the process in preemptive or cooperative mode, depending on this property:

- プロセスメソッドが "thread safe" であった場合 (コンパイル時に評価)、プロセスはプリエンプティブスレッド内で実行されます。
- プロセスメソッドが "thread unsafe" であった場合、プロセスはコオペラティブスレッド内で実行されます。
- プロセスメソッドのプリエンプティブプロパティが "indifferent" であった場合、(メソッドが実際にはプリエンプティブに実行可能だったとしても) 互換性のためにプロセスはコオペラティブスレッド内で実行されます。 この互換性機能はメソッドがプロセスメソッドとして使用された場合にのみ適用されるという点に注意してください。また "indifferent" と宣言されたもののコンパイラーによって内部で "thread safe" とタグ付けされたメソッドに関しては、他のメソッドからプリエンプティブに呼び出すことが可能です (以下参照)。

実際のスレッドセーフプロパティは呼び出しチェーンによります。 "capable" と宣言されたプロパティを持つメソッドが、スレッドアンセーフなメソッドをサブレベル (どの階層でも) で呼び出した場合、コンパイルエラーが返されます。呼び出しチェーン全体の中で一つでもメソッドがスレッドアンセーフであれば、それは他のすべてのメソッドをいわば "汚染" し、プリエンプティブ実行はコンパイラーによって拒否されます。 プリエンプティブスレッドは、呼び出しチェーン全体がスレッドセーフであり、プロセスメソッドが "プリエンプティブプロセスで実行可能" と宣言されている場合にのみ作成可能です。 その一方で、同じスレッドセーフメソッドを、呼び出しチェーン内ではプリエンプティブスレッド内で実行し、他の呼び出しチェーン内ではコオペラティブスレッド内で実行することが可能です。

たとえば、次のプロジェクトメソッドの場合:

```4d
  //MyDialog project method
  //contains interface calls: will be internally thread unsafe
 $win:=Open form window("tools";Palette form window)
 DIALOG("tools")
```

```4d  
  //MyComp project method
  //contains simple computing: will be internally thread safe
 #DECLARE($value : Integer) -> $result : Integer
 $result:=$value*2
```

```4d
  //CallDial project method
 var $vName : Text
 MyDialog
```

```4d
  //CallComp project method
 var $vAge : Integer
 MyComp($vAge)
```

プリエンプティブモードでのメソッド実行は、"プリエンプティブ" プロパティや呼び出しチェーンに依存します。 以下の表は、これらの様々な状況をまとめたものです:

![](../assets/en/Develop/legend.png)


| 宣言と呼び出しチェーン                           | コンパイル | スレッドセーフの結果                             | 実行モード    | 説明                                                                                                                                                                                                                                                               |
| ------------------------------------- | ----- | -------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](../assets/en/Develop/scenar1.png) | OK    | ![](../assets/en/Develop/scenar2.png)  | プリエンプティブ | CallComp は親メソッドで、プリエンプティブな使用が "capable" (可能) と宣言されています。MyComp は内部的にスレッドセーフなので、CallComp も内部的にスレッドセーフとなり、プロセスはプリエンプティブになります                                                                                                                                        |
| ![](../assets/en/Develop/scenar3.png) | エラー発生 | ![](../assets/en/Develop/scenar4.png)  | 実行不可能    | CallDial は親メソッドでプリエンプティブ "capable" (可能)、MyDialog は "indifferent" と宣言されています。 しかし、MyDialog が内部的にはスレッドアンセーフのため、呼び出しチェーンを "汚染" してしまいます。 CallDial の宣言と実際の実効性が矛盾するためコンパイルは失敗します。 解決方法は、MyDialog を変更してスレッドセーフにして実行をプリエンプティブにするか、CallDial のプロパティを変更してコオペラティブに実行するようにします。 |
| ![](../assets/en/Develop/scenar5.png) | OK    | ![](../assets/en/Develop/scenar6.png)  | コオペラティブ  | CallDial はプリエンプティブな使用が "incapable"(不可) と宣言されているのでコンパイル時には内部的にスレッドアンセーフとなり、MyDialog の状況に関わらず実行はかならずコオペラティブになります。                                                                                                                                                  |
| ![](../assets/en/Develop/scenar7.png) | OK    | ![](../assets/en/Develop/scenar8.png)  | コオペラティブ  | CallComp が親メソッドでプロパティが "indifferent" のため、呼び出しチェーンがすべてスレッドセーフでも、プロセスはコオペラティブになります。                                                                                                                                                                                |
| ![](../assets/en/Develop/scenar9.png) | OK    | ![](../assets/en/Develop/scenar10.png) | コオペラティブ  | CallDial が親メソッドでプロパティが "indifferent" のため、プロセスはコオペラティブになり、コンパイルは成功します。                                                                                                                                                                                            |


### 実際の実行モードの調べ方

4Dではプロセスに対してコオペラティブ実行かプリエンプティブ実行かを識別する機能を提供しています:

- The [`PROCESS PROPERTIES`](https://doc.4d.com/4dv20/help/command/en/page336.html) command allows you to find out whether a process is run in preemptive or cooperative mode.
- Both the Runtime Explorer and the [4D Server administration window](../ServerWindow/processes.md#process-type) display specific icons for preemptive processes.


## スレッドセーフなメソッドの書き方

スレッドセーフであるためには、メソッドは以下のルールに従う必要があります:

- "プリエンプティブプロセスで実行可能" もしくは "特に設定しない" プロパティを持っている
- スレッドセーフでない 4Dコマンドを呼び出していない
- スレッドセーフでない他のプロジェクトメソッドを呼び出していない
- スレッドセーフでないプラグインを呼び出していない
- インタープロセス変数を使用していない(1)
- インターフェースオブジェクトを呼び出していない(2) (例外あり、以下参照)

(1) To exchange data between preemptive processes (and between all processes), you can pass [shared collections or shared objects](../Concepts/shared.md) as parameters to processes, and/or use the [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525.html) catalog. [Worker processes](processes.md#worker-processes) also allow you to exchange messages between any processes, including preemptive processes.

(2) The [`CALL FORM`](https://doc.4d.com/4dv20/help/command/en/page1391.html) command provides an elegant solution to call interface objects from a preemptive process.

:::note 注記

- "コンポーネントとホストデータベース間で共有" メソッドの場合、"プリエンプティブプロセスで実行可能" プロパティが選択されている必要があります。
- すべての SQLステートメントはスレッドセーフです。 SQL code inserted in `Begin SQL`/`End SQL` blocks must comply with the following conditions:
    + It must apply to the 4D Server or 4D local database (ODBC or remote databases via `SQL LOGIN` are thread-unsafe. However, local databases used with `USE DATABASE` are thread-safe).
    - Any trigger called by SQL statements must be thread-safe (see [Triggers](#triggers) below).

:::




"プリエンプティブプロセスで実行可能" プロパティを持つメソッドは、コンパイル時に 4D によってチェックされます。 メソッドがスレッドセーフになるのを妨げる要因をコンパイラーが見つけた場合にはコンパイルエラーが生成されます:

![](../assets/en/Develop/thread-unsafe.png)

:::info

It is possible to [disable locally the thread-safety verification](#).

:::

The [symbol file](../Project/compiler.md/#complete-list-of-methods), if enabled, also contains the thread safety status for each method.

### ユーザーインターフェース

厳密に言えば "外部" アクセスにあたるため、フォームやデバッガーなどのユーザーインターフェースオブジェクトへの呼び出しは、プリエンプティブスレッドでは許可されません。

プリエンプティブスレッドからアクセス可能なユーザーインターフェースは以下のものに限られます:

- [Standard error dialog](../Debugging/basics). ダイアログはユーザーモードプロセス (4D)、あるいはサーバーユーザーインターフェースプロセス (4D Server) 内で表示されます。 The **Trace** button is disabled.
- 標準の進捗インジケーター
- `ALERT`, `Request` and `CONFIRM` dialogs. ダイアログはユーザーモードプロセス (4D)、あるいはサーバーユーザーインターフェースプロセス (4D Server) 内で表示されます。 ただし、4D Server を Windows上でユーザー操作を許可しないサービスとしてローンチした場合には、ダイアログは表示されないという点に注意して下さい。


### Triggers

トリガーを呼び出すことのあるコマンドをメソッドが使用している場合、4Dコンパイラーはメソッドがスレッドセーフであるかどうかをチェックするために、トリガーがスレッドセーフかどうかを評価します:

```4d
 SAVE RECORD([Table_1]) //trigger on Table_1, if it exists, must be thread-safe
```

以下は、トリガーがスレッドセーフであるかどうかがコンパイル時にチェックされるコマンドの一覧です:

`SAVE RECORD`, `SAVE RELATED ONE`, `DELETE RECORD`, `DELETE SELECTION`, `ARRAY TO SELECTION`, `JSON TO SELECTION`, `APPLY TO SELECTION`, `IMPORT DATA`, `IMPORT DIF`, `IMPORT ODBC`, `IMPORT SYLK`, `IMPORT TEXT`.

テーブルが動的に渡された場合、コンパイラーはどのトリガーを評価すべきなのかが分からない場合があります。 以下はそのような状況の一例です:

```4d
 DEFAULT TABLE([Table_1])
 SAVE RECORD
 SAVE RECORD($ptrOnTable->)
 SAVE RECORD(Table(myMethodThatReturnsATableNumber())->)
```

この場合、すべてのトリガーが評価されます。 スレッドセーフでないコマンドの使用が検出されたトリガーが 1つでもあれば、グループ全体がチェックに失敗し、メソッドはスレッドアンセーフと宣言されます。

### エラー処理メソッド

[Error-catching methods](../Concepts/error-handling.md) installed by the `ON ERR CALL` command must be thread-safe if they are likely to be called from a preemptive process. In order to handle this case, the compiler checks the thread safety property of error-catching project methods passed to the `ON ERR CALL` command during compilation and returns appropriate errors if they do not comply with preemptive execution.

このチェックはメソッド名が定数として渡された場合にのみ可能であり、以下に示すような、計算された値の場合にはチェックされないという点に注意してください:

```4d
 ON ERR CALL("myErrMethod1") //will be checked by the compiler
 ON ERR CALL("myErrMethod"+String($vNum)) //will not be checked by the compiler
```

これに加え、エラーキャッチプロジェクトメソッドをランタイムで呼び出せない場合 (スレッドセーフに関する問題がある、あるいは "メソッドが見つかりません" などの理由の場合)、エラー -10532 "'methodName'というエラーハンドルメソッドを呼び出す事ができません" が生成されます。


### ポインターの互換性

あるプロセスにおいてポインターをデリファレンスし、別のプロセス変数の値へアクセスすることができますが、これは、両プロセスがともにコオペラティブである場合にかぎります。それ以外の場合、4D はエラーを生成します。 プリエンプティブプロセスにおいては、4Dコードがインタープロセス変数の値をポインター経由で照会しようとした場合、エラーが生成されます。

以下のメソッドでそのような例を考えます:

Method1:

```4d
 myVar:=42
 $pid:=New process("Method2";0;"process name";->myVar)
```

Method2:

```4d
 $value:=$1->
```

If either the process running Method1 or the process running Method2 is preemptive, then the expression `$value:=$1->` will throw an execution error.

### DocRef 参照番号

The use of DocRef type parameters (opened document reference, used or returned by `Open document`, `Create document`, `Append document`, `CLOSE DOCUMENT`, `RECEIVE PACKET`, `SEND PACKET`) is limited to the following contexts:

- When called from a preemptive process, a `DocRef` reference is only usable from that preemptive process.
- When called from a cooperative process, a `DocRef` reference is usable from any other cooperative process.


## 部分的なスレッドセーフ検証の無効化

スレッドセーフではないが、実行されることもないと分かっているコマンドがコードに含まれている場合など、コードの一部をスレッドセーフ検証から除外したい場合があるかもしれません。

To do this, you must surround the code to be excluded from command thread safety checking with the special directives `%T-` and `%T+` as comments. The `//%T-` comment disables thread safety checking and `//%T+` enables it again:

```4d
  // %T- to disable thread safety checking

  // Place the code containing commands to be excluded from thread safety checking here
 $w:=Open window(10;10;100;100) //for example

  // %T+ to enable thread safety checking again for the rest of the method
```

無効化および有効化用のディレクティブでコードを挟んだ場合、そのコードがスレッドセーフかどうかについては、開発者が熟知している必要があります。 プリエンプティブなスレッドでスレッドセーフでないコードが実行された場合には、ランタイムエラーが発生します。


