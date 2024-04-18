---
id: write-class-method
title: コードエディター
---

4Dは、インテリジェントなコード補完、コードナビゲーション、デバッグ、検索など、生産性の高いコード編集のための幅広い機能を提供する強力なコードエディターを搭載しています。

![](../assets/en/code-editor/code-editor-overview.png)

コードエディターはテキストエディターのように動作します。 メソッドやクラスの記述は通常、テキストの入力、コンポーネントの選択、そしてエクスプローラーやその他のウィンドウからのドラッグ操作によりおこないます。 メソッドの記述をより効率的におこなうために、タイプアヘッド機能も提供されています。

メソッド、クラス、関数の内容はスクロールして確認することができ、最大32,000行、2GBのコードを記述できます。

4Dのコードエディターは基本的なシンタックスチェック機能を提供します。 メソッド実行時には追加のエラーチェックがおこなわれます。 For more information on how to handle errors, see [Debugging](../Debugging/basics.md).

## インターフェース

### ツールバー

コードエディターにはメソッドの実行と編集に関連する基本的な機能に素早くアクセスするためのツールバーがあります。

| 機能                            | アイコン                                                                              | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **メソッド実行**                    | ![execute-method](../assets/en/code-editor/execute-method.png)                    | コードエディターウィンドウには、そのエディターで開かれているメソッドを実行するためのボタンがあります。 Using the menu associated with this button, you can choose the type of execution:<ul><li> **Run new process**: Creates a process and runs the method in standard mode in this process.</li><li>**Run and debug new process**: Creates a new process and displays the method in the Debugger window for step by step execution in this process.</li><li>**Run in Application process**: Runs the method in standard mode in the context of the Application process (in other words, the record display window).</li><li>**Run and debug in Application process**: Displays the method in the Debugger window for step by step execution in the context of the Application process (in other words, the record display window).</li></ul>For more information on method execution, see [Calling Project Methods](../Concepts/methods.md#calling-project-methods). |
| **Find in method**            | ![search-icon](../assets/en/code-editor/search.png)                               | Displays the [_Search_ area](#find-and-replace).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Macros**                    | ![macros-button](../assets/en/code-editor/macros.png)                             | 選択対象にマクロを挿入します。 ドロップダウンの矢印をクリックすると、利用可能なマクロがすべて表示されます。 For more information on how to create and instantiate macros, see [Macros](#macros).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Expand all / Collapse all** | ![expand-collapse-button](../assets/en/code-editor/expand-collapse-all.png)       | これらのボタンを使用してコードの制御フロー構造を折りたたんだり展開したりできます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Method information**        | ![method-information-icon](../assets/en/code-editor/method-information.png)       | Displays the [Method Properties](../Concepts/methods.md#project-method-properties) dialog box (project methods only).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Last clipboard values**     | ![last-clipboard-values-icon](../assets/en/code-editor/last-clipboard-values.png) | 直近でクリップボードに保存された値を表示します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Clipboards**                | ![clipboard icons](../assets/en/code-editor/clipboards.png)                       | コードエディターで利用可能な 9つのクリップボードです。 You can [use these clipboards](./write-class-method.md#multiple-copy-paste-and-numbering-of-clipboards) by clicking on them directly or by using keyboard shortcuts. You can use a [Preferences option](Preferences/methods.md#options-1) to hide them.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Navigation dropdown**       | ![code-navigation-icons](../assets/en/code-editor/tags.png)                       | 自動的にタグ付けされたコンテンツや手動で宣言されたマーカーを使用して、メソッドやクラス内を移動できます。 後述参照。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### 編集エリア

このエリアを使用してコードを 入力/編集 します。 エディターは、コードテキストのインデントを自動で設定し、異なるシンタックス要素ごとに色を付けて、コード構造を明確に表示します。

この編集エリアの表示はカスタマイズできます。 カスタマイズした内容は、すべてのコードエディターに反映されます:

| オプション                                  | 説明                                                                                                                                                                                                | 設定場所                                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **font** and **font size**             | 編集エリアの文字フォントとサイズを設定します                                                                                                                                                                            | **Preferences** > [**Methods**](../Preferences/methods.md) or **Method > View** > **Bigger Font** or **Smaller Font**                                       |
| **style and color of syntax elements** | 4Dランゲージの要素タイプごとに異なる色やスタイルを割り当てることができます。  また、編集エリアのインターフェースで使用されている色 (ハイライト、背景色など) を変更することができます。                                                                                | ランゲージ要素 (変数、キーワード等) 上でコンテキストメニューを表示し、 > **Style** submenu. Or **Preferences** > [**Methods**](../Preferences/methods.md) |
| **spaces**                             | You can display the spaces between words using dots (.) instead of blank spaces. この設定は、すべてのコード要素 (コマンド名、変数、コメントなど) に適用されます。 | **Method > View > White Spaces**                                                                                                                            |
| **themes**                             | Dark または Light テーマが選択できるほか、カスタムテーマも設定可能です                                                                                                                                                         | **Preferences** > [**Methods**](../Preferences/methods.md)                                                                                                  |
| **width of code indentations**         | コードのインデント幅を設定します                                                                                                                                                                                  | **Preferences** > [**Methods**](../Preferences/methods.md)                                                                                                  |

#### 更新行の通知

エディターで開いた後に更新されたコードの行には色つきのバーが表示されます:

![](../assets/en/code-editor/change-bars.png)

変更が保存されたかどうかは、バーの色で表されます:

- 黄色: 行は変更されたが、保存されていない。
- 緑色: 行は変更され、保存された。

### リストエリア

リストエリアにはメソッドやクラスの記述に必要となるコード要素 (コマンド、定数、フォーム等) のリストを 1つ以上表示できます。 表示するリストの数や種類は変更することができます。

デフォルトで、コードエディターには 4つのリストが表示されます。 ウィンドウの右下にあるアイコンをクリックすると、すべてのリストを表示/非表示にすることができます。 ![](../assets/en/code-editor/show-hide-list.png)

リストの境界をドラッグして、リストの幅を相対的に調整できます。 また、編集エリアとの境界線をドラッグして、リストエリアの高さを調整できます。

- リストの項目をダブルクリックすると、現在のカーソル位置にその項目が挿入されます。
- To **modify the contents** of a list, click on the title area of the list concerned: a pop-up menu appears, enabling you to choose the type of item to be displayed.

![](../assets/en/code-editor/list-area.png)

- リストを追加/削除するには、リストのタイトルエリアをクリックし、一番下の対応するメニューを選択します。
  The **Remove this list** command is disabled when you click on the last list. If you want to hide all the lists, you must either click on the **show or hide lists**  button at the bottom right of the window or hide them by default in the **Preferences**.

- すべてのウィンドウでリストを非表示にするには、次の方法があります:
  - Select the **View > Lists** option in the **Method** menu (a check mark indicates whether lists are displayed)
  - Uncheck the **Preferences** > **Methods** > **Options** > **Show Lists** option. For the modifications made in the **Preferences** dialog box to be taken into account, any open methods, classes or functions must first be closed then reopened.

#### リストのタイプ

コードエディターウィンドウのリストエリアには以下の項目を表示できます:

- **All tables and fields**: Database table and field names in the form of a hierarchical list. ダブルクリックでフィールド名をコードに挿入すると、4D はシンタックスに合わせてテーブル名も挿入します。
- **Table** (submenu): Field names of the table selected using the submenu.
- **Current table**: Field names of the current table (available in triggers, form methods and object methods).
- **Project forms**: Database project form names. プロジェクトフォーム名をダブルクリックすると、4D はダブルクォートで囲まれたフォーム名を挿入します。
- **Table forms**: Database table and form names in the form of a hierarchical list. ダブルクリックでテーブルフォーム名を挿入すると、4D はテーブル名の後にセミコロン、そしてダブルクォートで囲まれたフォーム名を挿入します。 例: [Table];"Form"。
- **Methods**: Database project method names.
- **All folders**: Names of object folders and subfolders set in the database displayed in the form of a hierarchical list. フォルダーは、カスタマイズされた方法でオブジェクトをグループ化するために使用します。 フォルダーは、エクスプローラーのホームページで管理します。
- **Folders** (submenu): Contents of the folder selected using the submenu.
- **Macros**: Macro names defined for the database (see [Creating and using macros](#creating-and-using-macros)).
- **Commands**: 4D language commands in alphabetical order.
- **Commands by themes**: 4D language commands classified by theme in the form of a hierarchical list.
- **Menu bars**: Names and numbers of menu bars [created with the 4D Menu bar editor](../Menus/creating.md).
- **Constants**: 4D constants and those of any plug-ins, classified by theme in the form of a hierarchical list.
- **Lists**: Names of lists.
- **All plug-in commands**: Commands for all the plug-ins installed in the database (if any), classified by theme in the form of a hierarchical list.
- **SQL Keywords**: set of keywords recognized by the 4D SQL syntax parser. このリストには、コマンド (例: SELECT)、句 (例: WHERE)、関数 (ABS) が含まれます。
- **SQL Functions**: 4D SQL functions.

**Note:** Except for the Macros element, all the lists are in alphabetical order.

#### テンプレートとして保存

コードエディターウィンドウに設定したリストをテンプレートとして保存できます。 テンプレートとして保存すると、新規にコードエディターを開くたびにその設定が使用されます。

テンプレートには以下のパラメーターが保存されます:

- 編集とリストエリアの相対サイズ
- リストの数
- 各リストの位置と表示内容
- 各リストの相対幅

To save a Code Editor window as a template, choose **Method** > **Save As Template**. テンプレートは即座に保存されます (ダイアログボックスは表示されません)。 It is stored in the **Preferences** of the 4D application. 既存のテンプレートがあれば、上書きされます。

### ブレークポイントエリア

編集エリアの左にあるこのエリアでは、行番号を表示したり、ブレークポイントを直接挿入したりできます。 ブレークポイントはプログラムのデバッグに使用します。 ブレークポイントが設定された場所でコード実行が停止し、デバッガーを表示します。

For more information on break points, see the [Debugging](../Debugging/breakpoints.md#breakpoints) section.

コードエディターの各ウィンドウごとに、ブレークポイントエリアにおける行番号の表示/非表示を切り替えられます。

- To enable or disable the display of line numbers by default,  choose **Preferences** > **Methods** > **Show line numbers**.
- To modify this display separately for each window of the Code Editor, choose **Method** > **View** > **Line Numbers**.

行番号を表示すると、ウィンドウ内で特定の行を見つけやすくなります。 The **Method** > **Go to Line Number...** command in the also lets you take advantage of this display.

This type of search is useful when used in conjunction with the [compiler](../Project/compiler.md), which flags runtime errors by the line number in which they occur.

### ステータスバー

エディターウィンドウの右下にはステータスバーがあり、カーソルの位置を表示します:

![](../assets/en/code-editor/status-bar.png)

- **Ln**: Line number
- **Col**: Column number, i.e., the level in the hierarchy of programming structures. 先頭のレベルは 0 です。 この数値は、コード中でエラーが発生した際にインタープリターから提供されるのでデバッグ時に利用できます。
- **Ch**: Location of character in the line.
- ![](../assets/en/code-editor/show-hide-list.png): Hide/display lists.

4Dコマンド、関数や変数にカーソルを置くと、ステータスバーにコマンドのシンタックスが表示されます。 If you write or select a parameter, the area shows the current parameter in **bold**:
![](../assets/en/code-editor/status-bar-bold.png)

### ナビゲーションドロップダウン

ナビゲーションドロップダウンは、コードを整理し、クラスやメソッド内の移動を助けるツールです。

![dropdown-list](../assets/en/code-editor/dropdown-list.png)

Some tags are added automatically, and you can complement the dropdown list using [markers](#manual-tagging).

#### コードのナビゲーション

ドロップダウンリストの項目をクリックすると、当該項目のコードの先頭行に移動します。 You can also navigate with arrow-keys and press **Enter**.

#### 自動タグ

コンストラクター、メソッド宣言、関数、計算属性は自動的にタグ付けされ、ドロップダウンリストに追加されます。

クラス/メソッドにタグがない場合、ツールは "タグなし" アイコンを表示します。

次の項目が自動的に追加されます:

| アイコン                                                                        | 項目                                                 |
| --------------------------------------------------------------------------- | -------------------------------------------------- |
| ![no-tag-icon](../assets/en/code-editor/no-tag.png)                         | タグなし                                               |
| ![constructor-icon](../assets/en/code-editor/constructor.png)               | クラスコンストラクターまたはメソッド宣言                               |
| ![computed-attribute-icon](../assets/en/code-editor/computed-attribute.png) | 計算属性 (get, set, orderBy, query) |
| ![function-icon](../assets/en/code-editor/function.png)                     | クラス関数名                                             |

#### 手動タグ

コードにマーカーを追加して、以下のタグをドロップダウンに追加できます:

| アイコン                                                    | 項目                        |
| ------------------------------------------------------- | ------------------------- |
| ![mark-tag-icon](../assets/en/code-editor/mark-tag.png) | MARK: タグ  |
| ![todo-tag-icon](../assets/en/code-editor/todo-tag.png) | TODO: タグ  |
| ![fixme-icon](../assets/en/code-editor/fixme-tag.png)   | FIXME: タグ |

タグは、次のようにコメントを付けて宣言します:

```4d
// FIXME: 要修正
```

Declarations are not case-sensitive; writing `fixme:` has the same effect.

Adding a hyphen after the `MARK:` tag draws a separating line in the code editor and the dropdown menu. つまり、次のように書くと:

![mark-hyphen-image](../assets/en/code-editor/mark-hyphen-editor.png)

このような結果になります:

![mark-hyphen-image](../assets/en/code-editor/dropdown-organize.png)

All markers located inside functions are indented in the dropdown list, except for the `MARK:` tags located at the end of functions and not followed by instructions. この場合は、インデントなしで表示されます。

#### 表示順

タグは、メソッド/クラス内の出現順に表示されます。

メソッドやクラスのタグをアルファベット順に表示するには、次のいずれかを実行します:

- **right-click** the dropdown tool
- hold **Cmd** on macOS or **Alt** on Windows, and click the dropdown tool

> 関数内のタグは、親項目と一緒に移動します。

### ショートカット

4D コードエディターの複数の機能について、デフォルトのキーボードショートカットを使って利用できます。

:::info macOS

Under macOS, use the **Command** key instead of the **Ctrl** key mentioned (Windows).

:::

| **Shortcut**                                                                                                                                                                       | **Action**                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Selection and navigation**                                                                                                                                                       |                                                                                                                                          |
| ダブルクリック                                                                                                                                                                            | ランゲージ要素名を選択します。                                                                                                                          |
| [Alt]+ダブルクリック                                                                                                                  | スペースを含むランゲージ要素名 (定数、メソッドなど) を選択します。                                                                                   |
| [Shift]+[右矢印]                                                              | 選択範囲を作成し、一文字ずつ右に拡大します。または、選択範囲を一文字ずつ左から縮小します。                                                                                            |
| [Shift]+[左矢印]                                                              | 選択範囲を作成し、一文字ずつ左に拡大します。または、選択範囲を一文字ずつ右から縮小します。                                                                                            |
| [Shift]+[下矢印]                                                              | 選択範囲を作成し、上から下へと 1行ずつ拡大します。                                                                                                               |
| [Shift]+[上矢印]                                                              | 選択範囲を作成し、下から上へと 1行ずつ拡大します。                                                                                                               |
| [Ctrl]+[Shift]+[右矢印]   | 選択範囲を単語単位で右方向に作成・拡大します。                                                                                                                  |
| [Ctrl]+[Shift]+[左矢印]   | 選択範囲を作成し、単語単位で左に拡大します。または、選択範囲を単語単位で右から縮小します。                                                                                            |
| [Ctrl]+[右矢印]                                                               | 挿入カーソルを単語単位で左から右に移動します。                                                                                                                  |
| [Ctrl]+[左矢印]                                                               | 挿入カーソルを単語単位で右から左に移動します。                                                                                                                  |
| [Alt]+[下矢印]                                                                | カーソルのある行を下へ移動します。                                                                                                                        |
| [Alt]+[上矢印]                                                                | カーソルのある行を上へ移動します。                                                                                                                        |
| [Home]                                                                                                                         | 挿入カーソルを行の先頭に移動します。                                                                                                                       |
| [End]                                                                                                                          | 挿入カーソルを行の最後に移動します。                                                                                                                       |
| [Ctrl]+[Home]                                                              | 挿入カーソルをメソッドの先頭に移動します。                                                                                                                    |
| [Ctrl]+[End]                                                               | 挿入カーソルをメソッドの最後に移動します。                                                                                                                    |
| [Shift]+[Home]                                                             | 行の先頭からカーソルまでを選択します。                                                                                                                      |
| [Shift]+[End]                                                              | カーソルから行の最後までを選択します。                                                                                                                      |
| [PgUp]                                                                                                                         | メソッドをページ単位で上にスクロールします (挿入カーソル位置は変更されません)。                                                                             |
| [PgDn]                                                                                                                         | メソッドをページ単位で下にスクロールします (挿入カーソル位置は変更されません)。                                                                             |
| [**Introspection**](#goto-definition)                                                                                                                                              |                                                                                                                                          |
| [Ctrl]+K または [Alt]+ダブルクリック                                                 | Same as [**Goto definition**](#goto-definition) command                                                                                  |
| トークン上で [Ctrl] (Windows) または [Alt] を押しながらマウスオーバー         | トークン (認識されたランゲージ要素) に下線を引きます。 Click on the underlined token = same as [**Goto definition**](#goto-definition) command |
| [**Find and replace**](#find-and-replace)                                                                                                                                          |                                                                                                                                          |
| [Ctrl]+F                                                                                                                       | 検索                                                                                                                                       |
| [Ctrl]+G                                                                                                                       | 次を検索                                                                                                                                     |
| [Ctrl]+[Shift]+G                                                           | 前を検索                                                                                                                                     |
| [Ctrl]+E                                                                                                                       | 次の同じものを検索                                                                                                                                |
| [Ctrl]+[Shift]+E                                                           | 前の同じものを検索                                                                                                                                |
| [Ctrl]+[Alt]+F                                                             | 置換                                                                                                                                       |
| [Ctrl]+[Alt]+G                                                             | 次を置換                                                                                                                                     |
| [Ctrl]+[Alt]+[Shift]+G | 前を置換                                                                                                                                     |
| [**Clipboards**](#clipboards)                                                                                                                                                      |                                                                                                                                          |
| クリップボードアイコン上で [Shift]+クリック または [Alt]+クリック                                  | 選択したテキストをクリップボードにコピー                                                                                                                     |
| [Ctrl]+[Shift]+数値キー                                                        | 選択したテキストを、その番号のクリップボードにコピー                                                                                                               |
| クリップボードアイコン上で [Ctrl]+クリック                                                                                                      | カーソル位置にクリップボードの内容をペースト                                                                                                                   |
| [Ctrl]+数値キー                                                                                                                    | その番号のクリップボードの内容をカーソル位置にペースト                                                                                                              |

:::tip

Most of these shortcuts can be customized in the [4D Preferences](../Preferences/shortcuts.md) dialog box.

:::

## コードの編集

コードエディターへの入力と編集には標準のテキスト編集テクニックを使用します。

コードエディターは、シンタックス要素ごとに、指定されたスタイルやカラーを使用した表示をおこないます。 You can [customize these conventions](#customizing-the-editing-area). 入力を確定するごとに、また改行を挿入する際に、4D は行のテキストを評価して適切な表示フォーマットを適用します。 また、If や End if などのプログラム構造が使用された場合、4D は自動でインデントをおこないます。

行に移動するには矢印キーを使用します。 矢印による移動では行の評価がおこなわれないため、クリックよりもすばやく移動できます。

Windows では、日本語や中国語を入力するために IME (Input Method Editor) がサポートされています。

The Code Editor includes numerous [navigation shortcuts](#shortcuts).

#### バックスラッシュの使用

The backslash character (`\`) has a specific support in the 4D language:

- inserted at the end of lines, it allows to write a single statement on [several lines](../Concepts/quick-tour.md#code-on-several-lines).
- it allows to define [escape sequences](../Concepts/quick-tour.md#escape-sequences).

:::caution

The backslash character (`\`) is used as a separator in [pathnames under Windows](../Concepts/paths.md#windows). 通常、4D はコードエディターに入力された Windows のパス名のバックスラッシュを自動で <code>\\</code> に置き換えることで、これを正しく解釈します。 For instance, `C:\MyDocuments` will become `C:\\MyDocuments`. However, if you write `"C:\MyDocuments\New"`, 4D will display `"C:\\MyDocuments\New"`. In this case, the second backslash is interpreted incorrectly as `\N` (an existing [escape sequence](../Concepts/quick-tour.md#escape-sequences)). このようなケースでは、開発者がバックスラッシュを 2つ入力するようにしなければなりません。

:::

### ドラッグ＆ドロップ

エクスプローラーから、テーブル、フィールド、フォーム、プロジェクトメソッド、定数、4Dコマンドをドラッグ＆ドロップすることができます。 ドラッグ＆ドロップをおこなうと、4D は常に正しいシンタックスでオブジェクトを挿入します。 For example, if you drag the field name First Name from the `[People]` table, it appears in the Code Editor as `[People]First Name`. Similarly, if you drag the Form name Input from the People table, it appears in the Code Editor as `[People];"Input"`.

When you insert a command by dragging it from the **Commands** page of the Explorer, it appears with its syntax (which consists of all of its parameters) in the Code Editor. この機能は、コマンドが期待する引数を確認するために存在します。 挿入されたシンタックスは、用途に合わせて編集できます。

メソッド・クラス・関数内あるいはその間のドラッグ＆ドロップも可能です。 コードエディターでテキストの一部を選択すると、ドラッグ＆ドロップメカニズムが有効になります。
By default, the drag-and-drop mechanism **moves** the selected text. In order to **copy** it, hold down the **Ctrl** key (Windows) or the **Option** key (macOS) during the operation.

### 文字種の変換

You can automatically modify the case of selected characters using the commands in **Methods** > **Case** or the context menu of the editor:

- **Uppercase** / **Lowercase**: Switch the selected characters to uppercase or lowercase.
- **camelCase** / **CamelCase** : Switch the selected characters to "camel case". これは複数の単語を結合し、頭文字をそれぞれ大文字に変換するものです。 このような表記は、変数の命名法としてよく用いられます。 hireDate と PurchaseDate は、キャメルケース表記の 2つのバリエーションの例です。

テキストにこれらのコマンドを適用すると、スペースと "_" 文字は取り除かれ、 各単語の先頭文字が大文字になります。

### 式の入れ替え

The **Swap Expression** function can be used to reverse the arguments of an expression assigning a value. たとえば:

`variable1:=variable2`

は以下のようになります。

`variable2:=variable1`

この機能は、プロパティを取得したり設定したりする一連の代入式を逆にする場合や、入力間違いを訂正するのに便利です。 To use this function, select the line(s) to be modified, then choose **Method** > **Swap Expression** or use the context menu of the area. 選択された行のうち、値を代入する行だけが更新されます。

### クリップボード

標準のコピー/ペースト処理に加え、4D は異なるクリップボードの内容を操作するための 2つの追加機能を提供しています:

- 4D は現在のセッション中にコードエディター中でおこなわれた最新の 10個の "コピー" や "カット" アクションをメモリに格納します。 格納されたこれらの内容はいつでも再利用できます。 To do this, use the **Clipboard History** command of the Code Editor context menu or the "Last Clipboard values" button of the toolbar:

  ![](../assets/en/code-editor/last-clipboard-values-2.png)

  コピー/カットされたテキストの最初の数文字が表示されます。 項目を選択すると、保存されていたテキストがカーソル位置に挿入されます。

- Nine additional numbered clipboards are available and can be employed directly using the buttons of the Code Editor toolbar or [using keyboard shortcuts](#shortcuts):

![](../assets/en/code-editor/clipboards-2.png)

### 行の移動

You can move the line where the cursor is directly without selecting it first using the **Move Lines Up** and **Move Lines Down** commands in the **Method** menu. You can also do this using the **Alt/Option** + **Up Arrow** or **Down Arrow** [keyboard shorcut](#shortcuts).

### 自動補完機能

コードエディターでは自動補完機能が提供されています。 4D は入力された最初の文字に基づき、自動で候補を提案します。

以下の例では、"cop" と入力したことにより三角が表示されています。これは複数の候補があることを示します:

![](../assets/en/code-editor/autocomplete-1.png)

When the characters you enter correspond to a single possibility, this suggested value appears greyed out (and is inserted if you hit the **Tab** key):
![](../assets/en/code-editor/autocomplete-2.png) ---> ![](../assets/en/code-editor/autocomplete-3.png)

> If you checked the **Insert () and closing } ) ] "** option in the **Methods** page of the **Preferences**, 4D will also automatically add **()** after a 4D command, keyword or project method that requires one or more mandatory arguments (after accepting a suggestion or completion):
> ![](../assets/en/code-editor/insert-and-closing-1.png) -> ![](../assets/en/code-editor/insert-and-closing-2.png)

Autocompletion also works with code structures (e.g. If..End if, For each...End for each): when you enter the first part of the structure, the Code Editor will automatically suggest the closing part:
![](../assets/en/code-editor/autocomplete-code-structures.png)

If there are several suggestions available, 4D displays them in a pop-up list when you hit the **Tab** key:

![](../assets/en/code-editor/autocomplete-popup.png)

リストは文字順になっています。 Choose the value by double-clicking it or scroll the list using the arrow keys of the keyboard and then hit **Enter**, **Carriage Return** or **Tab** to insert the selected value.

By default, you can also insert a suggested value by hitting one of the following delimiter `( ; : = < [ {` keys after selecting a value: the value inserted is then followed by the delimiter, ready for data entry.

![](../assets/en/code-editor/autocomplete-delimiter.png)  +  **(** key --> ![](../assets/en/code-editor/autocomplete-delimiter-2.png)

> You can disable the use of delimiters for inserting suggested values in **Preferences** > **Methods** > **Options**.

You can press the **Esc** key to close the pop-up list or you can continue typing while it is open. 文字が入力されるに伴い、ポップアップで提案される内容も更新されます。

入力された文字が複数の異なるオブジェクトに対応する場合、それらは対応するスタイルでリスト中に表示されます。 以下のタイプのオブジェクトが表示されます:

- 4Dコマンド
- SQLコマンド
- プロジェクトメソッド
- テーブル名
- フィールド名
- 定数
- メソッドで宣言された変数
- オブジェクトのプロパティ名
- プラグインコマンド
- 4Dキーワード
- SQLキーワード
- マクロ (&lt; &gt; の間に表示）

> For practical reasons, you can disable the automatic display of the list of suggestions for **constants**, **(local or interprocess) variables and object attributes**, **tables** and/or **prototypes**. These options are found in **Preferences** > **Methods** > **Options**

#### オブジェクトのプロパティ名

4D は以下のタイミングで、4Dコード内にある有効なオブジェクトプロパティ名の、文字の大小の区別された提案を自動的に表示します:

- オブジェクトの後にドット "." を入力した
- use the Tab key after a dereferenced object pointer "->".

![](../assets/en/code-editor/autocomplete-object-attributes.png)

> The `length` property is always included for use with collections.

ひとたび作成されたプロパティ名は内部のグローバルなリストに登録され、メソッド/クラス/関数が開かれたり閉じられたり、フォーカスが変わるたびに利用可能です。

![](../assets/en/code-editor/autocomplete-object-attributes-2.png)

提案の一覧は、コード変更中にも動的に更新されます。 ウィンドウ間を切り替えるときに、新しい/編集されたプロパティ名は常にグローバルなリストに追加されます。 このリストはエクスプローラー内でメソッドやクラス、関数をプレビューする際にも更新されます。

データベースが再起動されると、リストは再度初期化されます。

> You can disable the automatic display of object properties in **Preferences** > **Methods** > **suggestions**.

## 検索と置換

The Code editor has powerful **find and replace** features that apply to the current window.

任意のメソッドウィンドウのツールバーに、検索/置換エリアを表示することができます:

![search-area](../assets/en/code-editor/search-area.png)

To display this area, click on the **Find in method** icon of the [toolbar](#toolbar) or select a find or replace function either through a [**shortcut**](#shortcuts) or a command from the **Edit > Find** submenu. You can close this area at any moment by clicking on the **x** button at the rightmost side of the toolbar.

:::tip

The **Find in Design** feature in the 4D toolbar or in the **Edit** menu is not specific to the Code editor but may be used to search for a value among all the methods and classes.

:::

### 検索

Select **Find > Find...** in the **Edit** menu or type **Ctrl+F** (Windows)/**Cmd+F** (macOS) to display/enable the _Search_ area.

このエリア内で定義された検索は、同じウィンドウ内のコードに対して適用されます。

The **find** entry area enables you to enter the string to be searched for. このエリアはコンボボックスで、最新の検索文字列を 10個、4D が終了するまで保持します。 If you highlight text before choosing the **Find...** command, it will appear in this area. このテキストを使用するか、別のテキストに置き換えることができます。

文字列を入力または選択すると、同ウィンドウ内で見つかったすべての検出箇所がハイライト表示され、エリアの右側には検出件数が表示されます。 また、検出件数のうちの、現在のカーソルの位置も表示します。

Hit the **Enter** key to select closest occurrence to the cursor. You can also click on the **Next / Previous** buttons ![find-next-previous](../assets/en/code-editor/find-next.png) to select all occurrences sequentially towards the beginning or end of the current method, starting from the initial location of the cursor, or use the **Find Next** and **Find Previous** commands of the [**Edit** menu](#shortcuts).

#### オプション

- **Case Sensitive** ![case-sensitive](../assets/en/code-editor/case-sensitive.png): Take the case of characters as they were entered in the find area into account. このオプションでは、アクセントも区別されます。 たとえば、"MyVar" を検索した場合 "myVar" は検出されませんし、"dej" を検索した場合 "déjà" は見つかりません。
- **Whole Word** ![full-word](../assets/en/code-editor/full-word.png): Limit the search to exact occurrences of the word being searched for. たとえば、"client" を検索する場合、"clients" や "myclient" は検出されません。 デフォルトでは、このオプションは無効です。したがって、"var" を検索すると、"Myvar"、"variation" などが検出されます。

### 置換

Click on the **v** toggle button on the left side of the _Search_ area to display/hide the _Replace_ area. You can also select **Find > Replace...** in the **Edit** menu or type **Ctrl+Alt+F** (Windows)/**Cmd+Alt+F** (macOS) .

The _Replace_ entry area is used to define the character string that will replace the one defined above.

Click the **Replace** button to launch the search with all defined options and replace the first occurrence found. 4D は現在のカーソル位置から検索を実行します。 It is then possible to continue finding/replacing using the **Replace Next** and **Replace Previous** commands of the [**Edit** menu](#shortcuts).

Click the **Replace all** button to replace all the occurrences corresponding to the search criteria directly in the open method.

### 同じものを検索

The **Find Same** command is used to find character strings identical to the one selected. このコマンドは、コードエディター内で一文字以上選択した場合に利用可能となります。

実行される検索は、現在のコードエディターウィンドウ内の "次を検索" と同じです。

The **Find Same Next** and **Find Same Previous** commands are used to find character strings _strictly_ identical to the ones selected. たとえば、文字の大小は一致しなければなりません。

### すべてをブックマーク

The **Edit > Bookmark All** command is enabled when a search has already been specified in the find or replace dialog box. このコマンドを選択すると、4D は現在設定されている検索条件に当てはまる行にブックマークを設定します。 これにより、すべての検索結果に簡単に印をつけられます。 For more information about bookmarks, refer to [Bookmarks](#bookmarks).

## 警告とエラー

実行エラーを防ぐため、入力されたコードのシンタックス、一貫性、および構造が 4Dコードライブチェッカーにより自動的にチェックされます。 たとえば、コードライブチェッカーは、適切な閉じる括弧がないこと、または不明なデータクラス属性を使用したことを検出できます。

コードライブチェッカーは 3つの段階で作動します:

- コードエディターでコードを書いているとき
- when you [check the syntax](../Project/compiler.md#check-syntax) in the compiler,
- when you [compile](../Project/compiler.md) the project.

4D はコードのシンタックスが正しいかどうかを自動的にチェックします。 シンタックスが正しくない場合、4D はそのことを示す記号を表示します 。

2種類の記号が表示されます:

- **warnings** ![warning](../assets/en/code-editor/incorrect-expression-icon.png): Warnings are intended to draw your attention to statements that might lead to execution errors. 警告によりコンパイルが中断されることはありません。
- **errors**![error](../assets/en/code-editor/error-icon.png): errors are anomalies that prevent the code from being executed correctly. これらを修正しないかぎり、プロジェクトはコンパイルされません。

マウスを記号に重ねるとエラーの内容が表示されます:

![](../assets/en/code-editor/incorrect-expression-message.png)

コードライブチェッカーは、コードを入力するときに作動します。 メソッドやクラス、関数の行にエラーがあると表示された場合には、それを修正してください。 正しく修正されると、4D はエラー記号を削除します。 保存したりウィンドウを閉じたりしたときはメソッド全体が評価されます。

You can format the current line (without advancing to the next line) by pressing the **Enter** key on the numeric keypad. 4D は行を評価し、フォーマットし、エラーがあればそれを表示し、挿入カーソルを行の最後に移動します。

コードライブチェッカーは、次のことをチェックします:

- 基本的なシンタックスエラー (演算子が間違っている、スペルミスなど)
- the structure of statements (`If`, `End if` and so on)
- 括弧やクォーテーションマークなどの対応 (ペアになっているか) (後述の tip 参照)
- 属性や関数の呼び出しが、モデル (ORDA) やユーザークラス定義に準じていること。 たとえば、データクラスの計算属性への呼び出しが宣言された同属性の型と互換性がない場合に、コードライブチェッカーはエラーを生成します。

:::tip

閉じる文字を入力すると、4D は開始と終了文字を灰色 (デフォルト) の四角で囲み、それらがペアであることを示します:

![](../assets/en/code-editor/matching-enclosing-characters.png)

You can modify the way 4D indicates matching enclosing characters or disable this feature in the [**Preferences**](../Preferences/methods.md#options-1).

:::

コードライブチェッカーは、実行時にのみ発生するようなエラーは検出することができません。 実行時エラーは、コードが実行されているときに 4D が検出します。 However, keep in mind that the [compiler](../Project/compiler.md) also provides indispensable help for detecting errors.

## ヘルプTips

コードエディターは、カーソルの位置に応じた様々な情報をヘルプTip で提供します。 これらは、オブジェクトにマウスオーバーすると表示されます。

:::tip

The [status bar](#status-bar) also provides contextual information.

:::

- **Errors**: When you mouse over the symbol indicating an error to the left of the editing area, a help tip displays the cause of the error (see [Syntax errors](#syntax-errors)).

- **4D command documentation**: When you move the mouse over a 4D command or function, a help tip provides its syntax along with a brief description of how it works.
  ![](../assets/en/code-editor/status-bar-description.png)

- **Variable type and description**: When you mouse over a variable, a help tip shows its type (if it has been explicitly defined in the method) and associated comment, if any.
  ![](../assets/en/code-editor/variable-type.png)

- **Project methods or functions**: When you mouse over a project method or class function, a help tip displays:

  - エクスプローラーで設定されたコメント、
  - or the first few lines of the method or class function if it includes comments (lines beginning with // or /_..._/ comment block). メソッドの先頭に、そのメソッドや引数の説明をコメント形式で記述するのは一般的な方法です。 エクスプローラーコメントを削除すれば、こちらの内容をヘルプTip に表示できます。
    Comments at the beginning of a method:
    ![](../assets/en/code-editor/comments-method.png)
    Help tip in another method:
    ![](../assets/en/code-editor/help-tip.png)

- You can also create a **dedicated documentation file** named `<MethodName>.md` in the `<package>/documentation` folder. See [Viewing documentation in the code editor](../Project/documentation.md#viewing-documentation-in-the-code-editor)

## コメント/アンコメント

The 4D language supports [comments](../Concepts/quick-tour.md#comments), which are inactive lines of code. コードエディターは、コメントに特定のスタイルを適用しません。 コメントの長さは、各行につき最大32,000文字までです。

There are two kinds of comments: `//comment` (single line comment) and `/*comment*/`(inline comments or multiline comment blocks).

Comments can be created by typing `/` characters. Or, the **Comment/Uncomment** command, found in the **Method** menu as well as in the Code Editor context menu is used to mark a group of selected lines of code as single line comments, or, on the contrary, to remove the single line comment characters from a selection. To use this command, select the code to be marked as commented, then select the **Comment/Uncomment** command:

![](../assets/en/code-editor/comment-uncomment-1.png) --> ![](../assets/en/code-editor/comment-uncomment-2.png)

When the selection contains only active code, the **Comment** command is applied. 選択行にアクティブコードとコメントの両方が含まれる場合、すべての行に "//" が追加されます。この動作により、複数回コマンドを適用しても、その後のアンコメント時に初期のコメントが維持されます。 When the selection contains only commented lines, the **Uncomment** command is applied.

> The **Comment/Uncomment** command only operates with full lines --- it cannot be used to comment only part of a line.

## 展開 / 折りたたみ

ループや条件文の中にあるコードを折りたたんだり展開したりして、メソッドの可読性を高めることができます:

- Expanded code:
  ![](../assets/en/code-editor/expanded-code.png)

- Collapsed code:
  ![](../assets/en/code-editor/collapsed-code.png)

展開ボタン [...] の上にマウスを重ねるとヘルプTip が表示され、非表示になっているコードの先頭部分を見ることができます。

折りたたまれたコード部分は、選択・コピー・ペースト・削除することができます。 折りたたみに含まれるすべての行が操作の対象となります。 このようなコードがペーストされると、自動で展開されます。

コードを折りたたみ、展開する方法はいくつかあります:

- 折りたたみ/展開アイコンまたは (Windows では [+] と [-]、macOSでは三角) をクリックする、または閉じられた状態では開くボタン [...] をクリックする
- Use the commands of the **Method > Collapse/Expand** submenu:

  - **Collapse Selection** / **Expand Selection**: collapses or expands all the code structures found in the text selection.
  - **Collapse Current Level** / **Expand Current Level**: collapses or expands the code structure at the level where the cursor is located. These commands are also available in the **context menu** of the editor.
  - **Collapse All** / **Expand All**: collapses or expands all the loops and conditions of a method. このコマンドはエディターのツールバーからもアクセスできます:。

## コードブロック

コードブロックは以下により定義されます:

- 引用符 (クォーテーションマーク)
- 括弧
- 論理構造 (If/Else/End if, While/End while, Repeat/Until, Case of/End case)
- 中括弧

### コードブロックの選択

The **Select Enclosing Block** function is used to select the "enclosing block" of the code containing the insertion point.

すでにブロックを選択している状態でこの機能を使用すると、さらに上のレベルのブロックが選択されます。

Pressing **Ctrl+Shift+B** (Windows) or **Command+Shift+B** (macOS) enables you to reverse this operation and deselect the last enclosing block selected.

**Note:** If the insertion point is placed in an `If` or `Else` type structure, the enclosing block will be the one containing, respectively, the `If` or `Else` statement.

### ブロックの先頭/ブロックの終端

Two commands make it easier to move around within code structures (e.g. `If...Else...End if`):

- **Start Of Block**: places the cursor at the start of the current structure, just before the initial keyword.
- **End Of Block**: places the cursor at the end of the current structure, just after the final keyword.

These commands are found in the **Method** menu as well as the context menu of the editor. 以下のショートカットも利用できます:

- Windows: **Ctrl + up arrow** or **Ctrl** + **down arrow**‚
- macOS: **Command** + **up arrow** or **Command** +**down arrow**.

## ブックマーク

4Dでは、メソッドの特定の行にブックマークを付けることができます。 ブックマークを付けると、特別なコマンドを使用してブックマーク間を素早く移動できます。

![](../assets/en/code-editor/bookm.png)

コードが挿入されたり削除されたりしてブックマーク行が移動すると、ブックマークもそれに伴って移動します。 ブックマークはメソッドとともに保存されます。

Bookmarks are managed using the **Bookmarks** submenu of the **Method** menu:

- **Toggle**: Associates a bookmark with the current line (where the cursor is located) if it does not already have one or removes the existing bookmark if it does. This function is also available using the **Toggle Bookmark** command of the editor's context menu or using the **Ctrl+F3** (Windows) or **Command+F3** (macOS) keyboard shortcut.
- **Remove All**: Removes all bookmarks from the foreground window.
- **Goto Next** / **Goto Previous**: Enables browsing among bookmarks in the window. コマンドを選択すると、該当するブックマーク行の先頭にカーソルが移動します。 You can also use the keyboard shortcuts **F3** (go to next) or **Shift+F3** (go to previous).

:::info

You can use bookmarks as markers for lines that contain an [item found by a search](#find). この場合、4D は自動でブックマークを追加します。 For more information, refer to [Bookmark all](#bookmark-all).

:::

## エクスプローラーに表示

The **Reveal in Explorer...** command opens an Explorer window with the target element selected. To do this, place the cursor inside the element's name or select it, then choose **Method** > **Reveal in Explorer...** .

## 呼出し元を検索

The **Search Callers** command in the **Method** menu is only enabled for project methods. このコマンドは、開かれているプロジェクトメソッドを参照しているすべてのオブジェクト (他のメソッドやメニュー) を検索します。

**Note:** The **Search Callers...** command is also available in **Explorer** > **Methods**

このコマンドの結果は新規ウィンドウに表示されます。

## 定義を開く

The **Goto Definition** command opens the definition of an element referenced in the Code Editor. To do this, place the cursor inside the object name or select it, and choose **Method** > **Goto Definition...** or use the context menu of the editor.

:::tip

This feature is also available through the keyboard shortcut **Ctrl+K** (Windows) / **Command+K** (macOS) or  **Alt+double-click**.

:::

The effect of the **Goto Definition...** command varies depending on the target element:

- プロジェクトメソッドの場合、コードエディターの新しいウィンドウ内にメソッドのコンテンツが表示されます。
- クラス名またはクラス関数の場合、コードエディター内にクラスが表示されます。
- with a built-in 4D command or function, it has the same effect as the [**Show documentation**](#show-documentation) command.

## ドキュメンテーションを表示

The **Show documentation...** command opens the documentation for the target element. To do this, place the cursor inside the element's name or select it, then choose **Method** > **Show documentation...** or use the contextual menu. このコマンドは、ターゲットとなる要素によって効果が変化します。 例:

- Selecting a project method or a user class and choosing **Show documentation...** selects the method in the Explorer and switches to the documentation tab
- Selecting a 4D command, function, or class name and choosing **Show documentation...** displays the online documentation.
- If no element is selected, the command opens the documentation of the method currently opened in the Code Editor, [if any](../Project/documentation.md).

:::tip

To display the documentation of a 4D "classic" language command, select the command name or simply place the cursor in the name and press **F1**. デフォルトブラウザーの新しいウィンドウにコマンドのドキュメントが表示されます。 4D looks for the documentation depending on the settings made in the Preferences (see [Documentation location](../Preferences/general.md#documentation-location)).

:::

## 参照を検索

The **Search References...** command found in the **Method** menu or the context menu of the Code Editor finds all the objects (methods and forms) in the project where the current item of the method is referenced (used).

現在の項目とは、選択されているもの、あるいはカーソルが置かれているものです。 フィールド名、変数名、コマンド、文字列等が該当します。 For example, the following action looks for all the occurrences of the _vlNbCmd_ variable in the database:

![find-dialog](../assets/en/code-editor/search-references.png)

このコマンドの結果は新規ウィンドウに表示されます。

## マクロ

メソッド内でマクロコマンドを利用することができます。 マクロを利用すれば、コードの入力にかかる時間を大幅に短縮することができます。

マクロコマンドは 4Dコードのパーツで、どのデータベースが開かれているかにかかわらず、あらゆるメソッドのどんな場所にでも挿入することができます。 マクロにはすべてのタイプの 4Dテキスト、コマンド、定数、さらにマクロ実行時のメソッドコンテキストにより値が置換される特別なタグを記述することができます。 For instance, a macro may contain the tag `<method_name/>;` at the time of macro insertion, this tag will be replaced by the name of the current project method.

マクロは 1つ以上の XMLフォーマットのテキストファイルに格納されます。 マクロはコードエディターリスト、またはエディター内のコンテキストメニュー、さらに自動補完機能から呼び出すことが可能です。

4Dマクロは XMLフォーマットで記述されます。 4Dが提供するデフォルトのマクロファイルをそのまま使用することも、変更することもできます。

### マクロの場所

4D loads the macros from a folder named **Macros v2**. マクロは XMLファイルとしてこのフォルダーに配置しなければなりません。

"Macros v2" フォルダーは以下の場所に配置できます:

- マシンのアクティブ4Dフォルダー。 この場合、マクロはすべてのデータベースで共有されます。
  **Note:** The location of the active 4D folder varies according to the operating system used. For more information, refer to the description of the [Get 4D folder](https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.en.html) command in the 4D _Language Reference_ manual.
- データベースストラクチャーファイルと同階層。 マクロは、このストラクチャーにのみ読み込まれます。
- For components: in the **Components** folder of the database. この場合マクロは、コンポーネントがインストールされている場合のみ利用できます。

これら 3つの場所は同時に利用可能です。各場所に "Macros v2" フォルダーをインストールできます。 The macros will be loaded in the following order: 4D folder, structure file, component 1... component X.

### デフォルトマクロ

4D はデフォルトで、制御フローキーワードなどに対応するマクロを提供しています。 These macros are included in the default "_Macros.xml_" file, placed in the "Macros v2" folder that is created in the active 4D folder of the machine during the initial startup of 4D.

このファイルを変更することができます。また、フォルダー内に別のマクロファイルを追加することもできます (後述参照)。 このフォルダーに問題が発生した場合は、フォルダーを削除すると次回の 4D起動時に新たに作成されます。

### カスタマイズしたマクロを追加する

標準のテキストエディターやプログラムを使用して、"Macros.xml" ファイルにカスタマイズしたマクロを追加できます。 またフォルダー内に、カスタマイズしたマクロを記述した XMLファイルを追加することもできます。

ローカルモードでは、4D を使用中にマクロファイルを開くことができます。 利用可能なマクロのリストは 4Dがアクティブになるたびに更新されます。 たとえば、テキストエディターを最前面にしてマクロファイルを更新し、その後メソッドの編集に戻ると、新しいマクロがコードエディターで利用可能になっています。

空およびエラーのあるマクロは表示されません。

#### カスタマイズしたマクロのシンタックスを検証する

4Dのマクロコマンドファイルは XML標準に準拠していなければなりません。 This means more particularly that XML declaration `<?xml version="1.0" ...?>` and document declaration `<!DOCTYPE macros SYSTEM "http://www.4d.com/dtd/2007/macros.dtd">` statements are mandatory at the beginning of a macro file in order for it to be loaded. 異なるタイプの XMLエンコーディングがサポートされています。 しかし、Mac/PC (UTF-8) 互換のエンコーディングを使用することが推奨されます。 4D はマクロファイルを検証するための DTD を提供しています。 ファイルは以下の場所にあります:

- Windows: \Resources\DTD\macros.dtd
- macOS: :Contents:Resources:DTD:macros.dtd

マクロファイルに宣言文が含まれない場合や検証に失敗する場合、マクロはロードされません。

#### 4Dマクロのシンタックス

4Dマクロは "要素" と呼ばれるカスタマイズされた XMLタグを使用して構築されます。

Some tags indicate the start and end of the definition (double tags of the type `<tag> </tag>`), others are replaced by insertion context values (`<tag/>`).

XML仕様に準拠し、いくつかのタグは属性を含むことがあります。 明示されない限り属性の指定は任意であり、省略された場合はデフォルト値が使用されます。 要素および属性のシンタックスは以下の通りです:

- Double tags: `<tag attribute="value"> </macro>`
- Single tags: `<tag attribute="value"/>`

If the element accepts several attributes, you can group them in the same line of command, separated by a space:
`\<tag attribute1="value" attribute2="value" attribute3="value"... >`

利用可能なタグのリストと利用モードは以下の通りです:

| **要素タグ**             | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<macros> </macros>` | マクロファイルの開始と終了 (必須)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `<macro> </macro>`   | マクロとその属性の定義の開始と終了。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                      | _属性_:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                      | - name: メニューやコードエディターリストに表示されるマクロの名前\*\* (必須)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                      | * type_ahead_text: タイプアヘッド (自動補完) 機能\*を使用してマクロを呼び出すために入力する文字列\*\*。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                      | - in_menu: コンテキストメニュー\*からマクロを呼び出すことを許可するかを指定するブール値。 値は "true" (デフォルト) または "false"。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                      | * type_ahead: タイプアヘッド (自動補完) 機能\*を使用してマクロを呼び出すことを許可するかを指定するブール値。 値は "true" (デフォルト) または "false"。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                      | - method_event: メソッドごとの現在の処理フェーズ (作成、閉じる等) に応じてマクロの自動呼出しを実行するために使用します。 Values = "on_load": The macro is triggered on the opening of each method, "on_save": The macro is triggered when each method is saved (closing of a modified method or saving using the File>Save command, "on_create": The macro is triggered when each method is created, "on_close": The macro is triggered when each method is closed. |
|                      | "on_save" と "on_close" は組み合わせて使用できます — 言い換えれば、これらのイベントは更新されたメソッドが閉じられるときに両方とも生成されます。 他方、"on_create" と "on_load" が連続して実行されることはありません。 この属性は、たとえばメソッド作成時にデフォルトのフォーマット (ヘッダーエリアのコメント等) を適用したり、メソッドを閉じる際にタイムスタンプを記録するために使用することができます。                                                                                                                                                                                                                                                                                                                           |
|                      | * version: Used to activate the new mode of supporting text selections for the macro (see the "About the `<method>` Tag" section below). 新しいモードを有効にするには "2" を指定します。 この属性を省略するか version="1" を指定すると、以前のモードが保持されます。                                                                                                                                                                                                                                                                                                                                                                                              |
|                      | - in_toolbar: ツールバーのマクロボタンメニューにマクロを表示するかどうかを指定するブール値。 値="true" (デフォルト) または "false"。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `<selection/>`       | マクロが挿入される時点で選択されていたテキストを使用して、タグが置換されます。 選択テキストは空の場合もあります。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `<text> </text>`     | メソッドに挿入されるコードの開始と終了タグ。 コードの先頭と最後には改行が追加されます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `<method> </method>` | プロジェクトメソッド名とその引数 (オプション) の開始と終了。 マクロが呼び出されたとき、メソッドが実行されます。 ("param1;param2;...") の形式で引数を渡せます。 この引数は、呼び出されたメソッド内で $1, $2...変数に渡されます。 For additional information about this tag, refer to the "About the `<method>` Tag" section below.                                                                                                                                                                                                                                                                      |
| `<caret/>`           | マクロが挿入された後のコード中の挿入ポイントの場所。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `<user_4D/>`         | カレント4Dユーザー名で置換されるタグ。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `<user_os/>`         | カレントのシステムユーザー名で置換されるタグ。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `<method_name/>`     | カレントメソッド名で置換されるタグ。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `<method_path/>`     | Tag replaced by path syntax (as returned by [`METHOD Get path`](https://doc.4d.com/4dv19R/help/command/en/page1164.html) of the current method.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `<date/>`            | カレントの日付で置換されるタグ。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                      | _属性_:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                      | * format: 4D の日付フォーマット。 フォーマットが設定されていない場合、デフォルトのフォーマットが使用されます。 値 = 4Dフォーマットの数字 (0 - 8)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `<time/>`            | カレントの時間で置換されるタグ。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                      | _属性_:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                      | - format: 4D の時間フォーマット。 フォーマットが設定されていない場合、デフォルトのフォーマットが使用されます。 値 = 4Dフォーマットの数字 (0 - 6)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `<clipboard/>`       | クリップボードの内容で置換されるタグ。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                      | _属性_:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                      | * index: ペーストするクリップボード。 値 = クリップボード番号 (0 - 9)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

- - マクロは、コードエディターのコンテキストメニューやタイプアヘッド機能を使用して呼び出すことができます (後述参照)。

- \*\* XML言語仕様に準拠するには、拡張文字 (アクセント文字や引用符など) を使用してはなりません。

以下はマクロ定義の例です:

| **マクロの内容**                                                                           | **Comments**                                                                                                                                                 |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<?xml version="1.0"...?>`                                                           | XML宣言                                                                                                                                                        |
| `<!DOCTYPE macros SYSTEM>`                                                           | ドキュメント宣言                                                                                                                                                     |
| `<macros>`                                                                           | マクロXMLファイルの開始                                                                                                                                                |
| `<macro name="RecordLoop">`                                                          | マクロ定義の開始と名前                                                                                                                                                  |
| `<text>`                                                                             | マクロコードの開始                                                                                                                                                    |
| For($i;1;Records in selection(`<Selection/>`)) | The `<Selection/>` tag will be replaced by the selected code in the 4D method at the time of macro insertion (for instance, a table name) |
| SAVE RECORD(`<Selection/>`)                                       |                                                                                                                                                              |
| NEXT RECORD(`<Selection/>`)                                       |                                                                                                                                                              |
| End for                                                                              |                                                                                                                                                              |
| `</text>`                                                                            | マクロコードの終了                                                                                                                                                    |
| `</macro>`                                                                           | マクロ定義の終了                                                                                                                                                     |
| `</macros>`                                                                          | マクロXMLファイルの終了                                                                                                                                                |

#### About the `<method>` tag

The `<method>` tag allows you to generate and use macro-commands that execute 4D project methods. これにより開発者はコンポーネントにマクロコマンドを添付して配布し、洗練された機能を提供することが可能になります。 For example, the following macro will cause the _MyMethod_ method to be executed with the name of the current method as parameter:

`<method>MyMethod("<method_name/>")</method>`

呼び出されたメソッドコードは新規プロセスで実行されます。 このプロセスはメソッド実行後に消失します。

> 呼び出されたメソッドの実行が終了するまでストラクチャープロセスは停止されます。 メソッドの実行は素早く終了し、アプリケーションをブロックするリスクがないことを確認しなければなりません。 If this occurs, use the **Ctrl+F8** (Windows) or **Command+F8** (Mac OS) command to "kill" the process.

### マクロを呼び出す

デフォルトでマクロはコードエディターのコンテキストメニューまたはツールバー、自動補完機能、またはコードエディターウィンドウ下部のマクロリストから呼び出すことができます。

各マクロごとにコンテキストメニューや自動補完機能を使用した呼び出しを禁止できる点に留意してください。

#### コンテキストメニューとツールバー

By default, all macros can be called via the context menu of the Code Editor (using the **Insert macro** hierarchical command) or the **Macros** button of the toolbar.

The _in_menu_ attribute of the `<macro>` tag is used to set whether or not the macro appears in this menu.

コンテキストメニュー内で、マクロは "Macros.xml" ファイル (および追加の XMLファイル) に記述された順番で表示されます。 つまりファイルを編集することでこの順番を変更できます。

#### 自動補完

By default, all macros are accessible using the autocomplete (aka type-ahead) function (see [Writing a method](./write-class-method.md)). The _type_ahead_ attribute of the `<macro>` tag can be used to exclude a macro from this type of operation.

**Note:** If the macro contains the `<selection/>` tag, it will not appear in the autocomplete pop-up window.

#### コードエディターリスト

You can display your macros in a list of the Code Editor (see [Writing a method](./write-class-method.md)). リスト中でマクロをダブルクリックし、呼び出すことができます。 特定のマクロをこのリストから除外することはできません。

### 互換性に関する注意

マクロのサポートは 4Dのバージョンごとに変わることがあります。 カスタマイズされたマクロを管理しつつ、異なるバージョンの互換性を保持するために、4Dは以前のバージョンのマクロを取り除くことはしません。 最新機能を使用したい場合は、適切にバージョンを調整する必要があります。

#### method の選択テキスト変数

It is recommended to manage text selections using the [GET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page997.html) and [SET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page998.html) commands. これらのコマンドを使用すると、ホストプロジェクトとコンポーネント間でテキストを相互に交換することができ、マクロの管理専用のコンポーネントを作成することができます。 マクロでこのモードを有効にするには、macro 要素内で version 属性に値 2 を指定しなければなりません。 In this case, 4D no longer manages the predefined variables _textSel,_textReplace, etc. and the [GET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page997.html) and [SET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page998.html) commands are used. 属性は以下のように定義します:

`<macro name="MyMacro" version="2">`<br/>
`--- Text of the macro ---`<br/>
`</macro>`

この属性を指定しない場合、以前のモードが保持されます。

#### XML標準に関連する非互換性

マクロファイルは XML標準に準拠しなければならず、厳密なシンタックスルールが適用されます。 以前のバージョンで作成されたマクロコードの場合、これにより非互換が発生することがあり、また XMLファイルの読み込みが妨げられる可能性があります。 異常な動作が起こるのは以下のケースです:

- Comments of the "// my comment" type, allowed inside `<macro>` elements in previous versions of 4D, are not compatible with the XML syntax. The lines of comments must respect the standard `"<!-- my comment -->"` form.
- The `<>` symbols used more particularly for interprocess object names must be encoded. For example, the `<>params` variable must be written `&lt;>params`.
- The initial `<macros>` declaration tag could be omitted in previous versions of 4D. 現在このタグは必須です。このタグがない場合、ファイルをロードできません。
