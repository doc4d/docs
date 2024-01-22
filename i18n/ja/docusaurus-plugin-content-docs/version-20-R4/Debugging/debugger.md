---
id: debugger
title: デバッガー
---

デバッガーは、エラーを発見したり、メソッドの実行を監視する必要がある場合に便利です。 デバッガーを使って、コードをステップごとにゆっくり確認して情報を検証することができます。 このようにメソッドをステップごとに確認する処理はトレースと呼ばれます。

![debugger-window-local](../assets/en/Debugging/debugger-window-intro.png)

## デバッガーの呼び出し

デバッガーを開くには、次のような方法があります:

- Clicking the **Trace** button in the [Syntax Error window](basics.md#syntax-error-window)
- Using the [`TRACE`](https://doc.4d.com/4dv19/help/command/en/page157.html) command
- Clicking the **Debug** button in the Execute Method window or selecting **Run and debug...** button in the Code Editor
- Using **Alt+Shift+Right click** (Windows) or **Ctrl+Option+Cmd+Click** (macOS) while a method is executing, then selecting the process to trace in the pop-up menu:

![open-debugger](../assets/en/Debugging/openDebugger.png)

- Clicking the **Trace** button when a process is selected in the Process page of the Runtime Explorer.
- コードエディターウィンドウ、またはランタイムエクスプローラーのブレークおよびキャッチページでブレークポイントを作成する。

デバッガーウィンドウは、現在トレースしているメソッドまたはクラス関数の名前や、デバッガーが表示される原因となったアクションの情報を表示します。 上のウィンドウの例では、次の情報が表示されています:

- _Clients_BuildLogo_ is the method being traced
- The debugger window appeared because it detected a call to the `C_PICTURE` command and this command was one of the commands to be caught

新しいデバッガーウィンドウの表示には、同じセッション内で表示された最後のデバッガーウィンドウと同じ構成 (ウィンドウのサイズと位置、分割線の配置および式評価エリアの内容) を使用します。 複数のユーザープロセスを実行した場合には、それぞれのプロセスを個別にトレースできます。つまり、各プロセスにつき 1つのデバッガーウィンドウを表示できます。

デバッガーウィンドウは、一般的にそのコードが実行されているマシン上に表示されます。 シングルユーザー版アプリケーションの場合、デバッガーは常にアプリケーションを実行しているマシン上に表示されます。 クライアント/サーバー版アプリケーションの場合は:

- ローカルで実行されているコードの場合には、リモート4D 上に表示されます。
- on the server machine for code running on the server (for example, a method with the **execute on server** option).

> ヘッドレスモードで実行中のサーバーでは、デバッガーウィンドウを表示することはできません。この場合はリモートデバッガーを使用する必要があります。 See [Debugging from remote machines](./debugging-remote.md).

## ツールバーボタン

デバッガーウィンドウの上部にある実行制御ツールバーには、デフォルトショートカットが設定された複数のボタンがあります:

![execution-control-toolbar-buttons](../assets/en/Debugging/executionToolbarButtons.png)

> デフォルトのショートカットは、環境設定ダイアログボックスのショートカットページで変更できます。

#### トレース終了

トレースが停止され、通常のメソッド実行が再開されます。

> **Shift** + **F5** or **Shift** + clicking the **No Trace** button resumes execution. この操作により、以降のカレントプロセスでの全ての TRACE 呼び出しが無効になります。

#### 次行に進む

現在のメソッド行 (プログラムカウンターと呼ばれる黄色い矢印で示されている行) が実行されます。 その後、デバッガは次の行に移動します。

"次の行に進む" ボタンは、サブルーチンや関数に移動することはなく、現在トレースの対象となっているメソッドのレベルにとどまります。 If you want to also trace subroutines and functions calls, use the **Step Into** button.

リモートデバッグにおいて、メソッドがサーバー上で実行されていた場合には、メソッドの最後の行の実行後にその親メソッドが呼ばれます。 If the parent method is executed on the remote side, the **Step Over** button has the same effect as the **No Trace** button.

#### 呼び出しメソッドもトレース

別のメソッド (サブルーチンまたは関数) を呼び出す行が実行される時にこのボタンを使用すると、呼び出されたメソッドがデバッガーウィンドウに表示され、ステップ実行できます。

The new method becomes the current (top) method in the [Call Chain Pane](#call-chain-pane) of the Debugger window.

When executing a line that does not call another method, this button has the same effect as the **Step Over** button.

#### 中断

メソッドは中断され、メソッドの実行を開始する前の状態に戻ります。

- イベントに対して実行しているフォームメソッドまたはオブジェクトメソッドをトレースしている場合には、いずれの場合にも停止され、フォームに戻ります。
- アプリケーションモードから実行しているメソッドをトレースしていた場合には、停止後そのモードに戻ります。

#### 中断＆編集

メソッドは中断されます。 The method that is executing when you click the **Abort and Edit** button opens in the Code Editor.

> **Tip**: Use this button when you know which changes are required in your code, and when these changes are required to pursue the testing of your methods. 変更が完了したら、メソッドを再実行できます。

#### 編集

メソッドは中断されます。 コードエディターウィンドウが開いて、編集ボタンがクリックされた時点で実行していたメソッドを表示します。

このボタンをクリックしてメソッドを編集した場合には、現在の実行は中断されないため、編集内容の反映は次回実行時になります。

> **Tip:** Use this button when you know which changes are required in your code and when they don't interfere with the rest of the code to be executed or traced.

#### 設定保存

現在のデバッガウィンドウの構成を、デフォルト構成として保存します。 構成には次の内容が含まれます:

- ウィンドウのサイズと位置
- 分割線の配置および式評価エリアの内容

これらは、プロジェクト内に保存されます。

This action is not available in remote debugging mode (see [Debugging from Remote Machines](./debugging-remote)).

## ウォッチエリア

The **Watch pane** is displayed in the top left corner of the Debugger window, below the Execution Control Tool Bar. 次に例を示します:

![watch-pane](../assets/en/Debugging/watchPane.png)

> このエリアはリモートデバッグモードでは使用できません。

The **Watch Pane** displays useful general information about the system, the 4D environment, and the execution environment.

The **Expression** column displays the names of the objects and expressions. The **Value** column displays their current corresponding values. エリア右側の値をクリックすると、その値が変更可能な場合には、要素の値を修正できます。

At any point, you can drag and drop themes, theme sublists (if any), and theme items to the [Custom Watch Pane](#custom-watch-pane).

### 式リスト

#### ラインオブジェクト

このテーマには、次のような要素や式の値が表示されます:

- used in the line of code to be executed (the one marked with the program counter—the yellow arrow in the [Source Code Pane](#source-code-pane)),
- コードの前の行で使用されている。

コードの前の行とは実行直後の行であるため、ラインオブジェクトテーマでは、その行が実行される前または後の現在の行の要素や式が表示されます。  たとえば、次のメソッドを実行した場合を想定します:

```4d
TRACE
$a:=1
$b:=$a+1
$c:=$a+$b
```

1. A Debugger window opens with the program counter set to the line with `a:=1`. At this point the **Line Objects** theme displays:

   | $a | 未定義 |
   | -- | --- |

   The `$a` variable is not yet initialized, but it is displayed because it is used in the line to be executed.

2. You click the **Step Over** button. The program counter is now set to the line `b:=a+1`. この時点では、ラインオブジェクトテーマに次のように表示されます:

   | $a | 1   |
   | -- | --- |
   | $b | 未定義 |

   The value of the `$a` variable is now 1. The `$b` variable is not yet initialized, but it is displayed because it is used in the line to be executed.

3. You click the **Step Over** button again. プログラムカウンターは <code>$c:=$a+$b</code> の行に設定されます。 この時点では、ラインオブジェクトテーマに次のように表示されます:

   | $c | 未定義 |
   | -- | --- |
   | $a | 1   |
   | $b | 2   |

   The value of the `$b` variable is now 2. The `$c` variable is not yet initialized, but it is displayed because it is used in the line to be executed.

#### 変数

このテーマは、次のサブテーマから構成されます:

| サブテーマ    | 説明                                       | 値は編集可能？ |
| -------- | ---------------------------------------- | ------- |
| インタープロセス | この時点で使用されているインタープロセス変数のリスト               | ◯       |
| プロセス     | カレントプロセスで使用されているプロセス変数のリスト               | ◯       |
| ローカル     | 現在トレースしているメソッドで使用されているローカル変数のリスト         | ◯       |
| 引数       | メソッドが受け取った引数のリスト                         | ◯       |
| Self     | オブジェクトメソッドをトレースしている場合には、現在のオブジェクトへのポインター | ×       |

他の変数と同様に、配列はそのスコープによって、インタープロセス、プロセス、およびローカルサブテーマに表示されます。 デバッガーは要素ゼロと最初の 100要素を表示します。 Inside the **Value** column, you can modify the values of array elements, but not the size of the arrays.

To display the variable types and their internal names, right click and check the **Show Types** option in the context menu:

![show-types-menu-item](../assets/en/Debugging/showTypes.png)

このようになります:

![dynamic-variable-names](../assets/en/Debugging/dynamicVariableNames.png)

#### カレントフォーム値

このテーマには、カレントフォームに含まれる各動的オブジェクトの名前に加えて、そこに関連付けられている値が表示されます:

![current-form-value](../assets/en/Debugging/current-form-values.png)

リストボックス配列などの一部のオブジェクトは、二つの異なる項目として表示されることがあります (オブジェクト自身の変数と、そのデータソース)。

#### 定数

エクスプローラーウィンドウの定数ページのように、4D が提供する定義済み定数を表示します。 このテーマの式を修正することはできません。

#### セマフォー

現在設定されているローカルセマフォーのリストを表示します。 各セマフォーの値欄には、自身を設定したプロセスの名前が表示されます。 このテーマの式を修正することはできません。 グローバルセマフォーは表示されません。

#### プロセス

作業セッションを開始してから起動されたプロセスのリストを表示します。 値欄には、各プロセスの現在の状態 (実行中、一時停止等) および使用した時間が表示されます。 このテーマの式を修正することはできません。

#### テーブルとフィールド

4Dデータベースのテーブルやフィールドのリストを表示します。 For each Table item, the Value column displays the size of the current selection for the current process as well as the number of **locked records**.

各フィールド項目については、カレントレコードのフィールドの値 (ピクチャーと BLOB は除く) が値欄に表示されます。 フィールドの値を修正することはできますが、テーブル情報を修正することはできません。

#### セット

カレント (トレース中の) プロセスで定義されているセットとインタープロセスセットのリストを表示します。 各セットについて、レコード数とテーブル名が値欄に表示されます。 このテーマの式を修正することはできません。

#### 命名セレクション

カレント (トレース中の) プロセスで定義されている命名セレクションとインタープロセス命名セレクションのリストを表示します。 各命名セレクションについて、レコード数とテーブル名が値欄に表示されます。 このテーマの式を修正することはできません。

#### 情報

このテーマは、データベースのオペレーションに関わる一般的な情報を表示します。カレントのデフォルトテーブル (あれば)、物理メモリ、仮想メモリ、空きメモリ、使用中メモリ、クエリ格納先、などです。

#### Web

このテーマは、アプリケーションの メインWebサーバーに関する情報が表示されます (Webサーバーが起動している場合のみ):

- 送信するWebファイル: 送信待機中の Webファイルの名前 (あれば)
- Webキャッシュ利用: Webキャッシュ内のページ数と、使用率
- Webサーバー起動時間: Webサーバーの起動時間 ("時間:分:秒" 形式)
- Webヒット回数: Webサーバー起動以降に受信した HTTPリクエストの総数と、1秒毎の受信数
- 動作中のWebプロセス数: アクティブな Webプロセスの数と、全Webプロセスの数

このテーマの式を修正することはできません。

### コンテキストメニュー

ウォッチエリアのコンテキストメニューでは、追加オプションが提供されています。

![context-menu](../assets/en/Debugging/contextual-menu.png)

- **Collapse All**: Collapses all levels of the hierarchical list.
- **Expand All**: Expand all levels of the hierarchical list.
- **Show Types**: Displays the type of each item (when appropriate).
- **Show Field and Table Numbers**: Displays the number of each table or field. Useful if you work with table or field numbers, or with pointers using commands such as `Table` or `Field`.
- **Show Icons**: Displays an icon denoting the object type for each object. You can turn this option off in order to speed up the display, or just because you prefer to use only the **Show Types** option.
- **Sorted Tables and Fields**: Sorts the tables and fields in alphabetical order within their respective lists.
- **Show Integers in Hexadecimal**: Numbers are usually displayed in decimal notation. このオプションを使用すると、数値が 16進法表記で表示されます。 注: 数値を 16進法で入力するには、0x (ゼロの後にx) とタイプし、その後に 16進数を続けます。
- **Enable activity monitoring**: Activates the monitoring of activity (advanced checking of internal activity of the application) and displays the information retrieved in the additional themes: **Scheduler**, **Web** and **Network**.

## 呼び出し連鎖エリア

1つのメソッドから他のメソッドまたはクラス関数が呼び出される場合があります。 このエリアは、この呼び出し連鎖のリストを表示します。

![call-chain-pane](../assets/en/Debugging/call-chain-example.png)

それぞれのメインレベルの項目は、メソッドまたはクラス関数の名前です。 最も上にある項目は、現在トレース中のメソッド、次の項目は呼び出し元 (トレース中メソッドを呼び出したメソッドまたはクラス関数)、その次の項目は呼び出し元の呼び出し元、のように続きます。

上図の例では:

- `thirdMethod` has not received any parameter
- `$0` is currently undefined, as the method did not assign any value to `$0` (because it has not executed this assignment yet or because the method is a subroutine and not a function)
- `secondMethod` has received three parameters from `firstMethod`:
  - $1 is a pointer to the `[Employee]` table
  - $2 is a pointer to the `ID` field in the  `[Employee]` table
  - $3 は値が "Z" の英数字の引数です。

You can double-click the name of any method to display its contents in the [Source Code Pane](#source-code-pane).

メソッドまたは関数名の隣にあるアイコンをクリックすると、引数および戻り値のリストが展開または縮小されます。 値はエリアの右側に表示されます。 右の値をクリックすると、引数や戻り値の値を変更することができます。

To display the parameter type, check the **Show types** option in the contextual menu:

![call-chain-show-types](../assets/en/Debugging/callChainShowTypes.png)

After you deploy the list of parameters, you can drag and drop parameters and function results to the [Custom Watch Pane](#custom-watch-pane).

You can also use the [Get call chain](https://doc.4d.com/4dv19/help/command/en/page1662.html) command to retrieve the call chain programmatically.

## カスタムウォッチエリア

カスタムウォッチエリアは、式を評価するために使用します。 It is similar to the [Watch Pane](#watch-pane), except here you decide which expressions are displayed. どのようなタイプの式でも評価できます:

- フィールド
- 変数
- pointer
- 演算
- 4Dコマンド
- method
- ほか値を返すものなら何でも

![custom-Watch-pane](../assets/en/Debugging/custom-watch-pane.png)

テキスト形式で表示できる式であれば、どのような式でも評価することができます。 ピクチャーや BLOBフィールドおよび変数は表示できません。 To display BLOB contents, you can use BLOB commands, such as [BLOB to text](https://doc.4d.com/4dv19/help/command/en/page555.html).

### 新しい式の挿入

リストに式を追加する方法は複数あります:

- ウォッチエリアまたは呼び出し連鎖エリアから項目や式をドラッグ＆ドロップします。
- Select an expression in the [Source Code pane](#source-code-pane) and press **ctrl+D**  (Windows) or **cmd+D** (macOS)
- カスタムウォッチエリアの空スペースのどこかをダブルクリックします (プレースホルダー名を持つ編集可能な式が追加されます)。

値を返すフォーミュラであれば、なんでも追加できます。

To edit an expression, click on it to select it, then click again or press **Enter** on your keyboard.

To delete an expression, click on it to select it, then press **Backspace** or **Delete** on your keyboard.

> **Warning:** Be careful when you evaluate a 4D expression modifying the value of one of the System Variables (for instance, the OK variable) because the execution of the rest of the method may be altered.

### コンテキストメニュー

カスタムウォッチエリアのコンテキストメニューを使って、4D のフォーミュラエディターにアクセスできます:

![custom-watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-context-menu.png)

**New Expression**: This inserts a new expression and displays the 4D Formula Editor.

![custom-Watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-formula-editor.png)

For more information on the Formula Editor, see the <a href="https://doc.4d.com/4Dv19/4D/19/4D-Design-Reference.100-5416591.en.html" target="_blank">4D Design Reference manual.</a>

- **Insert Command**: Shortcut for inserting a 4D command as a new expression.
- **Delete All**: Removes all expressions from the Custom Watch Pane.
- **Standard Expressions**: Copies the Watch Pane's list of expressions.

> This option is not available in remote debugging mode (see [Debugging from Remote Machines](https://doc.4d.com/4Dv19/4D/19/Debugging-from-Remote-Machines.300-5422483.en.html)).

- **Collapse All/Expand All**: Collapses or Expands all the hierarchical lists.
- **Show Types**: Displays the type of each item in the list (when appropriate).
- **Show Field and Table Numbers**: Displays the number of each table or field of the **Fields**. Useful if you work with tables, field numbers or pointers using the commands such as `Table` or `Field`.
- **Show Icons**: Displays an icon denoting the type of each item.
- **Sorted Tables and Fields**: Displays the table and fields in alphabetical order.
- **Show Integers in Hexadecimal**: Displays numbers using hexadecimal notation. 数値を 16進法で入力するには、0x (ゼロの後にx) とタイプし、その後に 16進数を続けます。

## ソースコードエリア

ソースコードエリアには、トレース中のメソッドや関数のソースコードが表示されます。

This area also allows you to add or remove [**break points**](breakpoints.md).

### Tips

式の上にマウスカーソルを移動すると、Tipsとして次の内容が表示されます:

- 宣言された式の型
- 式のカレント値

![source-code-pane](../assets/en/Debugging/sourceCodePane.png)

これはセレクションの場合も機能します:

![source-code-pane-tip](../assets/en/Debugging/sourcePaneTip.png)

### カスタムウォッチエリアへの式の追加

You can copy any selected expression from the Source Code Pane to the [Custom Watch Pane](#custom-watch-pane).

1. ソースコードエリア内で評価する式を選択します。
2. 次のいずれかの方法をおこないます:
   - 選択したテキストをカスタムウォッチエリアの式欄へドラッグ＆ドロップする。
   - Press **Ctrl+D** (Windows) or **Cmd+D** (macOS)
   - Right-click the selected text **>** **Copy to Expression Pane**

### プログラムカウンター

ソースコードエリアの左マージンにある黄色の矢印は、プログラムカウンターと呼ばれます。 これは、実行される次の行を表しています。

デフォルトでは、プログラムカウンター行 (実行行とも呼ばれます) がデバッガー内でハイライトされています。 You can customize the highlight color in the [Methods page of the Preferences](Preferences/methods.md).

#### プログラムカウンターの移動

デバッグのために、呼び出し連鎖のトップにあるメソッド (実行中のメソッド) のプログラムカウンターの位置を変更することができます。 これには、黄色の矢印をクリックして目的の行まで上下にドラッグします。

これは、その位置からのトレースや実行を追跡するようにデバッガーに指示しているに過ぎません。 カウンターの移動そのものはコードを実行したり、実行をキャンセルしたりしません。 すべての現在の設定内容、フィールド、変数などに影響はありません。

例:

```4d
  // ...
 If(This condition)
    DO_SOMETHING
 Else
    DO_SOMETHING_ELSE
 End if
  // ...
```

Say the program counter is set to the line `If (This condition)`.
When you click the **Step over** button, the program counter moves directly to the `DO_SOMETHING_ELSE` line.
To examine the results of the `DO_SOMETHING` line, you can move the program counter to that line and execute it.

### コンテキストメニュー

ソースコードエリア のコンテキストメニューを使って、トレースモードでメソッドを実行する際に便利な機能にアクセスできます:

![source-code-pane-context-window](../assets/en/Debugging/sourceCodePaneContext.png)

- **Goto Definition**: Goes to where the selected object is defined. このコマンドは以下の要素に使用できます:
  - _Project methods:_ displays method contents in a new window of the Code Editor
  - _Fields:_ Displays field properties in the inspector of the Structure window
  - _Tables:_ Displays table properties in the inspector of the Structure window
  - _Forms:_ Displays form in the Form editor
  - _Variables_ (local, process, interprocess or $n parameter): displays the line in the current method or among the compiler methods where the variable is declared
- **Search References** (also available in Code Editor): Searches all project objects (methods and forms) in which the current element of the method is referenced. 現在の要素とは、選択されているものまたはカーソルが置かれているものをいいます。 これにはフィールド、変数、コマンド、文字列等が含まれます。 検索結果は、標準の検索結果ウィンドウに表示されます。
- **Copy**: Standard copy of the selected expression to the pasteboard.
- **Copy to Expression Pane**: Copy the selected expression to the Custom Watch Pane.
- **Run to Cursor**:Executes statements found between the program counter and the selected line of the method (where the cursor is found).
- **Set Next Statement**:Moves program counter to the selected line without executing this line or any intermediate ones. 選択行は、ユーザーが実行ボタンのいずれかをクリックした際に実行されます。
- **Toggle Breakpoint** (also available in Code Editor): Alternately inserts or removes the breakpoint corresponding to the selected line. これによりメソッドエディターのブレークポイントの有無も切り替わります。
- **Edit Breakpoint** (also available in Code Editor): Displays the Breakpoint Properties dialog box. ここでおこなわれた変更はメソッドエディターにも反映されます。

### 次/前を検索

専用のショートカットを使用することで選択された文字列を検索することができます:

- To search for the next identical strings, press **Ctrl+E** (Windows) or **Cmd+E** (macOS)
- To search for the previous identical strings, press **Ctrl+Shift+E** (Windows) or **Cmd+Shift+E** (macOS)

この検索は、ソースコードエリアにて少なくとも 1文字以上を選択している場合に実行されます。

## ショートカット

この節ではデバッグウィンドウで　利用可能なショートカットをリストしています。

> The tool bar also has [shortcuts](#tool-bar-buttons).

#### Watch Pane & Custom Watch Pane

- **Double-click** an item in the Watch Pane to copy it to the Custom Watch Pane
- **Double-Click** in the Custom Watch Pane to create a new expression

#### ソースコードエリア

- 左マージンをクリックすると、ブレークポイントが設定・削除されます。
- **Alt+Shift+Click** (Windows) or **Option+Shift+Click** (macOS) sets a temporary break point.
- **Alt-Click** (Windows) or **Option-Click** displays the Edit Break window for a new or existing break point.
- 選択された式や要素をドラック＆ドロップして、カスタムウォッチエリアにコピーできます。
- **Ctrl+D** (Windows) or **Cmd+D** (macOS) key combinations copy the selected text to the Custom Watch Pane.
- **Ctrl+E** (Windows) or **Cmd+E** (macOS) key combinations find the next strings identical to the one selected.
- **Ctrl+Shift+E** (Windows) or **Cmd+Shift+E** (macOS) key combinations find the previous strings identical to the one selected.

#### すべてのエリア

- **Ctrl** + **+/-** (Windows) or **Command** + **+/-** (macOS) increases or decreases the font size for a better readability. 変更されたフォントサイズはコードエディターにも適用され、環境設定に保存されます。
- **Ctrl + \*** (Windows) or **Command + \*** (macOS) forces the updating of the Watch Pane.
- When no item is selected in any pane, press **Enter** to step over.
- 項目の値が選択されている場合には、矢印キーでリスト内を移動します。
- 項目を編集中の場合には、矢印キーでカーソルが移動します。 Ctrl-A/X/C/V (Windows) または Command-A/X/C/V (macOS) を、編集メニューのすべてを選択/切り取り/コピー/貼り付けコマンドへのショートカットとして使用できます。
