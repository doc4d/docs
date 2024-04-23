---
id: write-class-method
title: コードエディター
---

4Dは、インテリジェントなコード補完、コードナビゲーション、デバッグ、検索など、生産性の高いコード編集のための幅広い機能を提供する強力なコードエディターを搭載しています。

![](../assets/en/code-editor/code-editor-overview.png)

コードエディターはテキストエディターのように動作します。 メソッドやクラスの記述は通常、テキストの入力、コンポーネントの選択、そしてエクスプローラーやその他のウィンドウからのドラッグ操作によりおこないます。 メソッドの記述をより効率的におこなうために、タイプアヘッド機能も提供されています。

メソッド、クラス、関数の内容はスクロールして確認することができ、最大32,000行、2GBのコードを記述できます。

4Dのコードエディターは基本的なシンタックスチェック機能を提供します。 メソッド実行時には追加のエラーチェックがおこなわれます。 エラーハンドリングについての詳細は、[デバッガー](../Debugging/basics.md) の章を参照ください。

## インターフェース

### ツールバー

コードエディターにはメソッドの実行と編集に関連する基本的な機能に素早くアクセスするためのツールバーがあります。

| 機能                            | アイコン                                                                              | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **メソッド実行**                    | ![execute-method](../assets/en/code-editor/execute-method.png)                    | コードエディターウィンドウには、そのエディターで開かれているメソッドを実行するためのボタンがあります。 Using the menu associated with this button, you can choose the type of execution:<ul><li> **Run new process**: Creates a process and runs the method in standard mode in this process.</li><li>**Run and debug new process**: Creates a new process and displays the method in the Debugger window for step by step execution in this process.</li><li>**Run in Application process**: Runs the method in standard mode in the context of the Application process (in other words, the record display window).</li><li>**Run and debug in Application process**: Displays the method in the Debugger window for step by step execution in the context of the Application process (in other words, the record display window).</li></ul>For more information on method execution, see [Calling Project Methods](../Concepts/methods.md#calling-project-methods). |
| **Find in method**            | ![search-icon](../assets/en/code-editor/search.png)                               | [_検索_ エリア](#検索と置換) を表示します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Macros**                    | ![macros-button](../assets/en/code-editor/macros.png)                             | 選択対象にマクロを挿入します。 ドロップダウンの矢印をクリックすると、利用可能なマクロがすべて表示されます。 マクロの作成とインスタンス化についの詳細は、 [マクロ](#マクロ) を参照ください。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Expand all / Collapse all** | ![expand-collapse-button](../assets/en/code-editor/expand-collapse-all.png)       | これらのボタンを使用してコードの制御フロー構造を折りたたんだり展開したりできます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Method information**        | ![method-information-icon](../assets/en/code-editor/method-information.png)       | [メソッドプロパティ](../Concepts/methods.md#プロジェクトメソッドプロパティ) ダイアログボックスを表示します (プロジェクトメソッドのみ)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Last clipboard values**     | ![last-clipboard-values-icon](../assets/en/code-editor/last-clipboard-values.png) | 直近でクリップボードに保存された値を表示します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Clipboards**                | ![clipboard icons](../assets/en/code-editor/clipboards.png)                       | コードエディターで利用可能な 9つのクリップボードです。 クリップボードのアイコンをクリックするか、あるいはキーボードショートカットによって、[これらのクリップボードを利用](./write-class-method.md#コピーペースト文字列を複数記憶する) できます。 [環境設定オプション](Preferences/methods.md#options-1) を使用するとそれらを非表示にすることができます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Navigation dropdown**       | ![code-navigation-icons](../assets/en/code-editor/tags.png)                       | 自動的にタグ付けされたコンテンツや手動で宣言されたマーカーを使用して、メソッドやクラス内を移動できます。 後述参照。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

### 編集エリア

このエリアを使用してコードを 入力/編集 します。 エディターは、コードテキストのインデントを自動で設定し、異なるシンタックス要素ごとに色を付けて、コード構造を明確に表示します。

この編集エリアの表示はカスタマイズできます。 カスタマイズした内容は、すべてのコードエディターに反映されます:

| オプション                                  | 説明                                                                                                                                                                                                | 設定場所                                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **フォント** と **フォントサイズ**                 | 編集エリアの文字フォントとサイズを設定します                                                                                                                                                                            | **Preferences** > [**Methods**](../Preferences/methods.md) or **Method > View** > **Bigger Font** or **Smaller Font**                                       |
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
- リストの **表示内容を変更** するには、リストのタイトルエリアをクリックすると現れるポップアップメニューから表示したい項目を選択します。

![](../assets/en/code-editor/list-area.png)

- リストを追加/削除するには、リストのタイトルエリアをクリックし、一番下の対応するメニューを選択します。
  **このリストを取り除く** コマンドは、リストが残り1つのときは無効になります。 すべてのリストを非表示にするには、ウィンドウ右下の **リストを表示\非表示** ボタンをクリックするか、**環境設定** でデフォルトで非表示にする必要があります。

- すべてのウィンドウでリストを非表示にするには、次の方法があります:
  - Select the **View > Lists** option in the **Method** menu (a check mark indicates whether lists are displayed)
  - Uncheck the **Preferences** > **Methods** > **Options** > **Show Lists** option. **環境設定** ダイアログボックスでおこなった変更は、開かれているメソッドやクラス、関数を一度閉じて再度開いたときに反映されます。

#### リストのタイプ

コードエディターウィンドウのリストエリアには以下の項目を表示できます:

- **すべてのテーブルとフィールド**: データベーステーブルとフィールドの名前 (階層リスト形式)。 ダブルクリックでフィールド名をコードに挿入すると、4D はシンタックスに合わせてテーブル名も挿入します。
- **テーブル** (サブメニュー): サブメニューを使用して選択したテーブルのフィールド名。
- **カレントテーブル**: カレントテーブルのフィールド名 (トリガー、フォームメソッド、オブジェクトメソッドで利用可能)。
- **プロジェクトフォーム**: データベースのプロジェクトフォーム名。 プロジェクトフォーム名をダブルクリックすると、4D はダブルクォートで囲まれたフォーム名を挿入します。
- **テーブルフォーム**: データベースのテーブルフォーム名 (階層リスト形式)。 ダブルクリックでテーブルフォーム名を挿入すると、4D はテーブル名の後にセミコロン、そしてダブルクォートで囲まれたフォーム名を挿入します。 例: [Table];"Form"。
- **メソッド**: データベースに定義されたプロジェクトメソッド名。
- **すべてのフォルダー**: データベースに定義されたオブジェクトフォルダーおよびサブフォルダー名 (階層リスト形式)。 フォルダーは、カスタマイズされた方法でオブジェクトをグループ化するために使用します。 フォルダーは、エクスプローラーのホームページで管理します。
- **フォルダー** (サブメニュー): サブメニューを使用して選択されたフォルダーの中身。
- **マクロ**: データベースに定義されたマクロ名 ([マクロの作成と利用](creating-and-using-macros.md) 参照)。
- **コマンド**: 4Dランゲージコマンド (文字順)。
- **コマンドリスト (テーマ順)**: テーマごとにグループ化された 4Dランゲージコマンド (階層リスト形式)。
- **メニューバー**: [4Dメニューバーエディターで作成した](../Menus/creating.md) メニューバーの名前と番号。
- **定数**: 4D やプラグインに定義された定数 (テーマ別階層リスト形式)。
- **リスト**: リスト名。
- **すべてのプラグインコマンド**: データベースにインストールされたプラグインのコマンド名 (テーマ別階層リスト形式)。
- **SQLキーワード**: 4D の SQLシンタックスパーサーが解釈可能なキーワードのリスト。 このリストには、コマンド (例: SELECT)、句 (例: WHERE)、関数 (ABS) が含まれます。
- **SQL関数**: 4D SQL 関数。

**注**: マクロ要素を除き、すべてのリストは文字順です。

#### テンプレートとして保存

コードエディターウィンドウに設定したリストをテンプレートとして保存できます。 テンプレートとして保存すると、新規にコードエディターを開くたびにその設定が使用されます。

テンプレートには以下のパラメーターが保存されます:

- 編集とリストエリアの相対サイズ
- リストの数
- 各リストの位置と表示内容
- 各リストの相対幅

To save a Code Editor window as a template, choose **Method** > **Save As Template**. テンプレートは即座に保存されます (ダイアログボックスは表示されません)。 設定は、4Dアプリケーションの **環境設定** に保存されます。 既存のテンプレートがあれば、上書きされます。

### ブレークポイントエリア

編集エリアの左にあるこのエリアでは、行番号を表示したり、ブレークポイントを直接挿入したりできます。 ブレークポイントはプログラムのデバッグに使用します。 ブレークポイントが設定された場所でコード実行が停止し、デバッガーを表示します。

ブレークポイントに関する詳細は、[デバッガー](../Debugging/breakpoints.md#ブレークポイント) の章を参照ください。

コードエディターの各ウィンドウごとに、ブレークポイントエリアにおける行番号の表示/非表示を切り替えられます。

- To enable or disable the display of line numbers by default,  choose **Preferences** > **Methods** > **Show line numbers**.
- To modify this display separately for each window of the Code Editor, choose **Method** > **View** > **Line Numbers**.

行番号を表示すると、ウィンドウ内で特定の行を見つけやすくなります。 The **Method** > **Go to Line Number...** command in the also lets you take advantage of this display.

このような検索は、実行時エラーで [コンパイラー](../Project/compiler.md) が示すエラー行を表示するのに便利です。

### ステータスバー

エディターウィンドウの右下にはステータスバーがあり、カーソルの位置を表示します:

![](../assets/en/code-editor/status-bar.png)

- **行**: 行番号
- **階層**: 階層番号 (プログラム構造の階層レベル)。 先頭のレベルは 0 です。 この数値は、コード中でエラーが発生した際にインタープリターから提供されるのでデバッグ時に利用できます。
- **文字**: 行内の文字位置。
- ![](../assets/en/code-editor/show-hide-list.png): Hide/display lists.

4Dコマンド、関数や変数にカーソルを置くと、ステータスバーにコマンドのシンタックスが表示されます。 If you write or select a parameter, the area shows the current parameter in **bold**:
![](../assets/en/code-editor/status-bar-bold.png)

### ナビゲーションドロップダウン

ナビゲーションドロップダウンは、コードを整理し、クラスやメソッド内の移動を助けるツールです。

![dropdown-list](../assets/en/code-editor/dropdown-list.png)

いくつかのタグは自動的に追加されますが、[マーカー](#手動タグ) を使ってドロップダウンリストを補完することもできます。

#### コードのナビゲーション

ドロップダウンリストの項目をクリックすると、当該項目のコードの先頭行に移動します。 また、矢印キーで項目を選択し **Enter** キーで決定して移動することもできます。

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

タグ宣言の際、文字の大小は区別されません。 `fixme:` と記述することもできます。

`MARK:` タグの後にハイフンを付けると、コードエディターとドロップダウンメニューに区切り線が引かれます。 つまり、次のように書くと:

![mark-hyphen-image](../assets/en/code-editor/mark-hyphen-editor.png)

このような結果になります:

![mark-hyphen-image](../assets/en/code-editor/dropdown-organize.png)

関数内のマーカーはドロップダウンリスト内でインデント (字下げ) されますが、関数末尾の `MARK:` タグの後に指示がない場合を除きます。 この場合は、インデントなしで表示されます。

#### 表示順

タグは、メソッド/クラス内の出現順に表示されます。

メソッドやクラスのタグをアルファベット順に表示するには、次のいずれかを実行します:

- ドロップダウンツールを **右クリックする**
- macOS では **option**、Windows では **Alt** を押しながら、ドロップダウンツールをクリックします。

> 関数内のタグは、親項目と一緒に移動します。

### ショートカット

4D コードエディターの複数の機能について、デフォルトのキーボードショートカットを使って利用できます。

:::info macOS

macOSでは **Ctrl** の代わりに **Command** を使用してください。

:::

| **Shortcut**                                                                                                                                                                       | **Action**                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Selection and navigation**                                                                                                                                                       |                                                                                                  |
| ダブルクリック                                                                                                                                                                            | ランゲージ要素名を選択します。                                                                                  |
| [Alt]+ダブルクリック                                                                                                                  | スペースを含むランゲージ要素名 (定数、メソッドなど) を選択します。                                           |
| [Shift]+[右矢印]                                                              | 選択範囲を作成し、一文字ずつ右に拡大します。または、選択範囲を一文字ずつ左から縮小します。                                                    |
| [Shift]+[左矢印]                                                              | 選択範囲を作成し、一文字ずつ左に拡大します。または、選択範囲を一文字ずつ右から縮小します。                                                    |
| [Shift]+[下矢印]                                                              | 選択範囲を作成し、上から下へと 1行ずつ拡大します。                                                                       |
| [Shift]+[上矢印]                                                              | 選択範囲を作成し、下から上へと 1行ずつ拡大します。                                                                       |
| [Ctrl]+[Shift]+[右矢印]   | 選択範囲を単語単位で右方向に作成・拡大します。                                                                          |
| [Ctrl]+[Shift]+[左矢印]   | 選択範囲を作成し、単語単位で左に拡大します。または、選択範囲を単語単位で右から縮小します。                                                    |
| [Ctrl]+[右矢印]                                                               | 挿入カーソルを単語単位で左から右に移動します。                                                                          |
| [Ctrl]+[左矢印]                                                               | 挿入カーソルを単語単位で右から左に移動します。                                                                          |
| [Alt]+[下矢印]                                                                | カーソルのある行を下へ移動します。                                                                                |
| [Alt]+[上矢印]                                                                | カーソルのある行を上へ移動します。                                                                                |
| [Home]                                                                                                                         | 挿入カーソルを行の先頭に移動します。                                                                               |
| [End]                                                                                                                          | 挿入カーソルを行の最後に移動します。                                                                               |
| [Ctrl]+[Home]                                                              | 挿入カーソルをメソッドの先頭に移動します。                                                                            |
| [Ctrl]+[End]                                                               | 挿入カーソルをメソッドの最後に移動します。                                                                            |
| [Shift]+[Home]                                                             | 行の先頭からカーソルまでを選択します。                                                                              |
| [Shift]+[End]                                                              | カーソルから行の最後までを選択します。                                                                              |
| [PgUp]                                                                                                                         | メソッドをページ単位で上にスクロールします (挿入カーソル位置は変更されません)。                                     |
| [PgDn]                                                                                                                         | メソッドをページ単位で下にスクロールします (挿入カーソル位置は変更されません)。                                     |
| [**Introspection**](#goto-definition)                                                                                                                                              |                                                                                                  |
| [Ctrl]+K または [Alt]+ダブルクリック                                                 | [**定義を開く**](#定義を開く) コマンドと同じ。                                                                     |
| トークン上で [Ctrl] (Windows) または [Alt] を押しながらマウスオーバー         | トークン (認識されたランゲージ要素) に下線を引きます。 下線が引かれたトークンをクリック = [**定義を開く**](#定義を開く) コマンドと同じ。 |
| [**Find and replace**](#find-and-replace)                                                                                                                                          |                                                                                                  |
| [Ctrl]+F                                                                                                                       | 検索                                                                                               |
| [Ctrl]+G                                                                                                                       | 次を検索                                                                                             |
| [Ctrl]+[Shift]+G                                                           | 前を検索                                                                                             |
| [Ctrl]+E                                                                                                                       | 次の同じものを検索                                                                                        |
| [Ctrl]+[Shift]+E                                                           | 前の同じものを検索                                                                                        |
| [Ctrl]+[Alt]+F                                                             | 置換                                                                                               |
| [Ctrl]+[Alt]+G                                                             | 次を置換                                                                                             |
| [Ctrl]+[Alt]+[Shift]+G | 前を置換                                                                                             |
| [**Clipboards**](#clipboards)                                                                                                                                                      |                                                                                                  |
| クリップボードアイコン上で [Shift]+クリック または [Alt]+クリック                                  | 選択したテキストをクリップボードにコピー                                                                             |
| [Ctrl]+[Shift]+数値キー                                                        | 選択したテキストを、その番号のクリップボードにコピー                                                                       |
| クリップボードアイコン上で [Ctrl]+クリック                                                                                                      | カーソル位置にクリップボードの内容をペースト                                                                           |
| [Ctrl]+数値キー                                                                                                                    | その番号のクリップボードの内容をカーソル位置にペースト                                                                      |

:::tip

これらのショートカットのほとんどは、[4D 環境設定](../Preferences/shortcuts.md) ダイアログボックスでカスタマイズすることができます。

:::

## コードの編集

コードエディターへの入力と編集には標準のテキスト編集テクニックを使用します。

コードエディターは、シンタックス要素ごとに、指定されたスタイルやカラーを使用した表示をおこないます。 この設定は[変更できます](#編集エリア)。 入力を確定するごとに、また改行を挿入する際に、4D は行のテキストを評価して適切な表示フォーマットを適用します。 また、If や End if などのプログラム構造が使用された場合、4D は自動でインデントをおこないます。

行に移動するには矢印キーを使用します。 矢印による移動では行の評価がおこなわれないため、クリックよりもすばやく移動できます。

Windows では、日本語や中国語を入力するために IME (Input Method Editor) がサポートされています。

コードエディターでは、複数の [ナビゲーションショートカット](#ショートカット) がサポートされています。

#### バックスラッシュの使用

バックスラッシュ文字 (`\`) は、4Dランゲージでは次の通りにサポートされています:

- 行末に挿入すると、一つのステートメントを [複数行](../Concepts/quick-tour.md#行を分割する) に分割して書くことができます。
- [エスケープシーケンス](../Concepts/quick-tour.md#エスケープシーケンス) に使用します。

:::caution

バックスラッシュ文字 (`\`) は、[Windows のパス名](../Concepts/paths.md#windows) において区切り文字として使用されます。 通常、4D はコードエディターに入力された Windows のパス名のバックスラッシュを自動で <code>\\</code> に置き換えることで、これを正しく解釈します。 For instance, `C:\MyDocuments` will become `C:\\MyDocuments`. However, if you write `"C:\MyDocuments\New"`, 4D will display `"C:\\MyDocuments\New"`. In this case, the second backslash is interpreted incorrectly as `\N` (an existing [escape sequence](../Concepts/quick-tour.md#escape-sequences)). このようなケースでは、開発者がバックスラッシュを 2つ入力するようにしなければなりません。

:::

### ドラッグ＆ドロップ

エクスプローラーから、テーブル、フィールド、フォーム、プロジェクトメソッド、定数、4Dコマンドをドラッグ＆ドロップすることができます。 ドラッグ＆ドロップをおこなうと、4D は常に正しいシンタックスでオブジェクトを挿入します。 たとえば、`[People]`テーブルから "FirstName" フィールドをドロップすると、コードエディターには `[People]FirstName` が表示されます。 同様に、`[People]`テーブルから "Input" フォームをドロップすると、`[People];"Input"` と挿入されます。

エクスプローラーの **コマンド** ページからコマンドをドラッグすると、コードエディターにはシンタックス (すべての引数が含まれる) も挿入されます。 この機能は、コマンドが期待する引数を確認するために存在します。 挿入されたシンタックスは、用途に合わせて編集できます。

メソッド・クラス・関数内あるいはその間のドラッグ＆ドロップも可能です。 コードエディターでテキストの一部を選択すると、ドラッグ＆ドロップメカニズムが有効になります。
デフォルトではドラッグ＆ドロップによりテキストが **移動** されます。 **コピー** をおこなうには **Ctrl** キー (Windows) または **Option** キー (macOS) を押しながら操作します。

### 文字種の変換

You can automatically modify the case of selected characters using the commands in **Methods** > **Case** or the context menu of the editor:

- **大文字** / **小文字**: 選択した文字を大文字または小文字に変換します。
- **キャメルケース (先頭小文字)** / **キャメルケース (先頭大文字)** : 選択した文字をキャメルケースに変換します。 これは複数の単語を結合し、頭文字をそれぞれ大文字に変換するものです。 このような表記は、変数の命名法としてよく用いられます。 hireDate と PurchaseDate は、キャメルケース表記の 2つのバリエーションの例です。

テキストにこれらのコマンドを適用すると、スペースと "_" 文字は取り除かれ、 各単語の先頭文字が大文字になります。

### 式の入れ替え

**式の入れ替え** 機能を使用すると、代入式の左辺と右辺が入れ替わります。 たとえば:

`variable1:=variable2`

は以下のようになります。

`variable2:=variable1`

この機能は、プロパティを取得したり設定したりする一連の代入式を逆にする場合や、入力間違いを訂正するのに便利です。 To use this function, select the line(s) to be modified, then choose **Method** > **Swap Expression** or use the context menu of the area. 選択された行のうち、値を代入する行だけが更新されます。

### クリップボード

標準のコピー/ペースト処理に加え、4D は異なるクリップボードの内容を操作するための 2つの追加機能を提供しています:

- 4D は現在のセッション中にコードエディター中でおこなわれた最新の 10個の "コピー" や "カット" アクションをメモリに格納します。 格納されたこれらの内容はいつでも再利用できます。 これには、コードエディターのコンテキストメニューから **クリップボード履歴** コマンドを使用するか、ツールバーの "最新のクリップボードの値" ボタンを使用します:

  ![](../assets/en/code-editor/last-clipboard-values-2.png)

  コピー/カットされたテキストの最初の数文字が表示されます。 項目を選択すると、保存されていたテキストがカーソル位置に挿入されます。

- また、9つの番号付きクリップボードが用意されており、コードエディターツールバーのボタンあるいは [キーボードショートカット](#ショートカット) で使用します:

![](../assets/en/code-editor/clipboards-2.png)

### 行の移動

カーソルのある行を選択せずに、上下に移動することができます。これには、**メソッド** メニューの **行を上に移動** / **行を下に移動** コマンドを使用します。 また、**Alt/Option** + **上矢印** / **下矢印** の [キーボードショートカット](#ショートカット) でも同様に操作できます。

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

複数の候補がある場合、**Tab** キーを押すと 4D はそのポップアップリストを表示します:

![](../assets/en/code-editor/autocomplete-popup.png)

リストは文字順になっています。 ダブルクリックまたは矢印キーで値を選択してから、**Enter**、**Carriage Return** または **Tab** キーを押すと、その値が挿入されます。

By default, you can also insert a suggested value by hitting one of the following delimiter `( ; : = < [ {` keys after selecting a value: the value inserted is then followed by the delimiter, ready for data entry.

![](../assets/en/code-editor/autocomplete-delimiter.png)  +  **(** key --> ![](../assets/en/code-editor/autocomplete-delimiter-2.png)

> You can disable the use of delimiters for inserting suggested values in **Preferences** > **Methods** > **Options**.

**Esc** キーを押すとポップアップが閉じられます。また、ポップアップが開いたままの状態で入力を継続することもできます。 文字が入力されるに伴い、ポップアップで提案される内容も更新されます。

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

> `length` プロパティは、コレクションに対する提案に常に含まれます。

ひとたび作成されたプロパティ名は内部のグローバルなリストに登録され、メソッド/クラス/関数が開かれたり閉じられたり、フォーカスが変わるたびに利用可能です。

![](../assets/en/code-editor/autocomplete-object-attributes-2.png)

提案の一覧は、コード変更中にも動的に更新されます。 ウィンドウ間を切り替えるときに、新しい/編集されたプロパティ名は常にグローバルなリストに追加されます。 このリストはエクスプローラー内でメソッドやクラス、関数をプレビューする際にも更新されます。

データベースが再起動されると、リストは再度初期化されます。

> You can disable the automatic display of object properties in **Preferences** > **Methods** > **suggestions**.

## 検索と置換

コードエディターには、カレントウィンドウに適用される強力な **検索/置換** 機能があります。

任意のメソッドウィンドウのツールバーに、検索/置換エリアを表示することができます:

![search-area](../assets/en/code-editor/search-area.png)

To display this area, click on the **Find in method** icon of the [toolbar](#toolbar) or select a find or replace function either through a [**shortcut**](#shortcuts) or a command from the **Edit > Find** submenu. このエリアは、ツールバー右端の **x** ボタンをクリックすることで、いつでも閉じることができます。

:::tip

4Dツールバーや **編集** メニューの **デザインモードを検索** 機能は、コードエディター専用の機能ではなく、すべてのメソッドやクラスの中から値を検索するのに使用します。

:::

### 検索

Select **Find > Find...** in the **Edit** menu or type **Ctrl+F** (Windows)/**Cmd+F** (macOS) to display/enable the _Search_ area.

このエリア内で定義された検索は、同じウィンドウ内のコードに対して適用されます。

**検索** 入力エリアには、検索したい文字列を入力します: このエリアはコンボボックスで、最新の検索文字列を 10個、4D が終了するまで保持します。 **検索...** コマンドを選択する前にエディター中でテキストをハイライトすると、このエリアにそのテキストが表示されます。 このテキストを使用するか、別のテキストに置き換えることができます。

文字列を入力または選択すると、同ウィンドウ内で見つかったすべての検出箇所がハイライト表示され、エリアの右側には検出件数が表示されます。 また、検出件数のうちの、現在のカーソルの位置も表示します。

**Enter** キーを押すと、カーソルに最も近い箇所を選択します。 You can also click on the **Next / Previous** buttons ![find-next-previous](../assets/en/code-editor/find-next.png) to select all occurrences sequentially towards the beginning or end of the current method, starting from the initial location of the cursor, or use the **Find Next** and **Find Previous** commands of the [**Edit** menu](#shortcuts).

#### オプション

- **Case Sensitive** ![case-sensitive](../assets/en/code-editor/case-sensitive.png): Take the case of characters as they were entered in the find area into account. このオプションでは、アクセントも区別されます。 たとえば、"MyVar" を検索した場合 "myVar" は検出されませんし、"dej" を検索した場合 "déjà" は見つかりません。
- **Whole Word** ![full-word](../assets/en/code-editor/full-word.png): Limit the search to exact occurrences of the word being searched for. たとえば、"client" を検索する場合、"clients" や "myclient" は検出されません。 デフォルトでは、このオプションは無効です。したがって、"var" を検索すると、"Myvar"、"variation" などが検出されます。

### 置換

_検索_ エリアの左にある **v** トグルボタンをクリックすると、_置換_ エリアの表示/非表示を切り替えることができます。 You can also select **Find > Replace...** in the **Edit** menu or type **Ctrl+Alt+F** (Windows)/**Cmd+Alt+F** (macOS) .

_置換_ エリアには、上の検索エリアの文字を置換する文字列を入力します。

**置換** ボタンをクリックすると、設定したオプションに応じて検索をおこない、最初に見つかった語句に対する置換が実行されます。 4D は現在のカーソル位置から検索を実行します。 その後は、[**編集** メニュー](#ショートカット) の **次を置換** / **前を置換** コマンドを使用して、同じ条件の検索/置換を繰り返すことができます。

**すべて置換** ボタンをクリックすると、開かれているメソッド内で検索条件に合致するすべての語句が一度に置換されます。

### 同じものを検索

**同じものを検索** コマンドを使用すると、選択した文字列と同じ文字列を検索することができます。 このコマンドは、コードエディター内で一文字以上選択した場合に利用可能となります。

実行される検索は、現在のコードエディターウィンドウ内の "次を検索" と同じです。

**次の同じものを検索** と **前の同じものを検索** コマンドは、選択された文字列と _厳密に_ 一致する文字列を検索するのに使用されます。 たとえば、文字の大小は一致しなければなりません。

### すべてをブックマーク

The **Edit > Bookmark All** command is enabled when a search has already been specified in the find or replace dialog box. このコマンドを選択すると、4D は現在設定されている検索条件に当てはまる行にブックマークを設定します。 これにより、すべての検索結果に簡単に印をつけられます。 詳細については [ブックマーク](#ブックマーク) を参照ください。

## 警告とエラー

実行エラーを防ぐため、入力されたコードのシンタックス、一貫性、および構造が 4Dコードライブチェッカーにより自動的にチェックされます。 たとえば、コードライブチェッカーは、適切な閉じる括弧がないこと、または不明なデータクラス属性を使用したことを検出できます。

コードライブチェッカーは 3つの段階で作動します:

- コードエディターでコードを書いているとき
- コンパイラーで [シンタックスをチェック](../Project/compiler.md#シンタックスチェック) するとき
- プロジェクトを [コンパイル](../Project/compiler.md) するとき

4D はコードのシンタックスが正しいかどうかを自動的にチェックします。 シンタックスが正しくない場合、4D はそのことを示す記号を表示します 。

2種類の記号が表示されます:

- **warnings** ![warning](../assets/en/code-editor/incorrect-expression-icon.png): Warnings are intended to draw your attention to statements that might lead to execution errors. 警告によりコンパイルが中断されることはありません。
- **errors**![error](../assets/en/code-editor/error-icon.png): errors are anomalies that prevent the code from being executed correctly. これらを修正しないかぎり、プロジェクトはコンパイルされません。

マウスを記号に重ねるとエラーの内容が表示されます:

![](../assets/en/code-editor/incorrect-expression-message.png)

コードライブチェッカーは、コードを入力するときに作動します。 メソッドやクラス、関数の行にエラーがあると表示された場合には、それを修正してください。 正しく修正されると、4D はエラー記号を削除します。 保存したりウィンドウを閉じたりしたときはメソッド全体が評価されます。

コードを入力する際、テンキー側の **Enter** を押すと、改行されることなく現在の行のシンタックスチェックをおこなえます。 4D は行を評価し、フォーマットし、エラーがあればそれを表示し、挿入カーソルを行の最後に移動します。

コードライブチェッカーは、次のことをチェックします:

- 基本的なシンタックスエラー (演算子が間違っている、スペルミスなど)
- ステートメントの構造 (`If`, `End if` など)
- 括弧やクォーテーションマークなどの対応 (ペアになっているか) (後述の tip 参照)
- 属性や関数の呼び出しが、モデル (ORDA) やユーザークラス定義に準じていること。 たとえば、データクラスの計算属性への呼び出しが宣言された同属性の型と互換性がない場合に、コードライブチェッカーはエラーを生成します。

:::tip

閉じる文字を入力すると、4D は開始と終了文字を灰色 (デフォルト) の四角で囲み、それらがペアであることを示します:

![](../assets/en/code-editor/matching-enclosing-characters.png)

これら括弧のマッチングに関する振る舞いは [**環境設定**](../Preferences/methods.md#オプション-1) で変更できます。

:::

コードライブチェッカーは、実行時にのみ発生するようなエラーは検出することができません。 実行時エラーは、コードが実行されているときに 4D が検出します。 しかし、エラー検出にあたっては、[コンパイラー](../Project/compiler.md) も不可欠な助けを提供していることに留意してください。

## ヘルプTips

コードエディターは、カーソルの位置に応じた様々な情報をヘルプTip で提供します。 これらは、オブジェクトにマウスオーバーすると表示されます。

:::tip

[ステータスバー](#ステータスバー) にも、コンテキストに応じた情報が表示されます。

:::

- **エラー**: ブレークポイントエリアにエラーアイコンが表示されているとき、マウスをアイコンに重ねるとエラーの内容が表示されます ([シンタックスエラー](#シンタックスエラー) 参照)。

- **4D コマンドドキュメンテーション**: 4D のコマンドや関数にマウスを重ねると、コマンドシンタックスと簡単な説明がヘルプTip に表示されます。
  ![](../assets/en/code-editor/status-bar-description.png)

- **変数型と詳細**: 変数にマウスを重ねると、その変数の型と (メソッド内で明示的に宣言されている場合)、付随したコメントが (あれば) ヘルプTip に表示されます。
  ![](../assets/en/code-editor/variable-type.png)

- **プロジェクトメソッドまたは関数**: プロジェクトメソッドまたはクラス関数にマウスを重ねると、以下の内容がヘルプTip に表示されます:

  - エクスプローラーで設定されたコメント、
  - または、メソッドまたはクラス関数の先頭コメント (// で始まる行、あるいは /_..._/ コメントブロック)。 メソッドの先頭に、そのメソッドや引数の説明をコメント形式で記述するのは一般的な方法です。 エクスプローラーコメントを削除すれば、こちらの内容をヘルプTip に表示できます。
    Comments at the beginning of a method:
    ![](../assets/en/code-editor/comments-method.png)
    Help tip in another method:
    ![](../assets/en/code-editor/help-tip.png)

- You can also create a **dedicated documentation file** named `<MethodName>.md` in the `<package>/documentation` folder. [コードエディターでドキュメンテーションを表示する](../Project/documentation.md#コードエディターでドキュメンテーションを表示する) を参照ください。

## コメント/アンコメント

4Dランゲージは [コメント](../Concepts/quick-tour.md#コメント) をサポートしています。コメントとは、コード内の実行されない行のことです。 コードエディターは、コメントに特定のスタイルを適用しません。 コメントの長さは、各行につき最大32,000文字までです。

コメントの書き方は 2通りあります: `//コメント` (単一行のコメント) と `/*コメント*/` (インラインコメントや複数行のコメントブロック)。

`/` 文字を手入力することで、コメントを作成できます。 Or, the **Comment/Uncomment** command, found in the **Method** menu as well as in the Code Editor context menu is used to mark a group of selected lines of code as single line comments, or, on the contrary, to remove the single line comment characters from a selection. このコマンドを使用するには適用したい行を選択し、**コメント/アンコメント** を選択します:

![](../assets/en/code-editor/comment-uncomment-1.png) --> ![](../assets/en/code-editor/comment-uncomment-2.png)

選択行がアクティブなコードの場合、**コメント** コマンドが適用されます。 選択行にアクティブコードとコメントの両方が含まれる場合、すべての行に "//" が追加されます。この動作により、複数回コマンドを適用しても、その後のアンコメント時に初期のコメントが維持されます。 選択行がすべてコメントのみの場合、**アンコメント** コマンドが適用されます。

> **コメント/アンコメント** コマンドは行全体に適用されます。行の一部のみをコメント化することはできません。

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

  - **選択部を折りたたむ** / **選択部を展開する**: 選択されたテキスト中にあるすべてのコードを折りたたむまたは展開します。
  - **現在のレベルを折りたたむ** / **現在のレベルを展開する**: カーソルが存在するレベルのコードを折りたたむまたは展開します。 このコマンドはエディターの **コンテキストメニュー** からもアクセスできます。
  - **すべてを折りたたむ** / **すべてを展開する**: メソッド中のすべてのループと条件ブロックを折りたたむまたは展開します。 このコマンドはエディターのツールバーからもアクセスできます:。

## コードブロック

コードブロックは以下により定義されます:

- 引用符 (クォーテーションマーク)
- 括弧
- 論理構造 (If/Else/End if, While/End while, Repeat/Until, Case of/End case)
- 中括弧

### コードブロックの選択

**ブロックを選択** 機能で、挿入カーソルが含まれるコードブロックを選択できます。

すでにブロックを選択している状態でこの機能を使用すると、さらに上のレベルのブロックが選択されます。

**Ctrl+Shift+B** (Windows) または **Command+Shift+B** (macOS) を使用するとこの逆の操作をおこなうことができ、最後に選択されたブロックの選択が解除されます。

**注:** 挿入カーソルが `If` または `Else` タイプの構造の中にある場合、`If` または `Else` 構造ブロックが選択されます。

### ブロックの先頭/ブロックの終端

コード構造 (例: `If...Else...End if`) の中を移動することを容易にするための、2つのコマンドがあります:

- **ブロックの先頭**: 現在のブロックの先頭にカーソルを移動します。
- **ブロックの終端**: 現在のブロックの終端にカーソルを移動します。

このコマンドには **メソッド** メニューとエディターのコンテキストメニューからアクセスできます。 以下のショートカットも利用できます:

- Windows: **Ctrl** + **上矢印** または **Ctrl** + **下矢印**
- macOS: **Command** + **上矢印** または **Command** + **下矢印**.

## ブックマーク

4Dでは、メソッドの特定の行にブックマークを付けることができます。 ブックマークを付けると、特別なコマンドを使用してブックマーク間を素早く移動できます。

![](../assets/en/code-editor/bookm.png)

コードが挿入されたり削除されたりしてブックマーク行が移動すると、ブックマークもそれに伴って移動します。 ブックマークはメソッドとともに保存されます。

ブックマークは **メソッド** メニューの **ブックマーク** サブメニューから管理します:

- **切り替える**: カーソルが存在する行にブックマークを設定します (まだブックマークが設定されていない場合)。すでにブックマークが設定されていれば、それを削除します。 エディターのコンテキストメニューの **ブックマークをトグル**、または **Ctrl+F3** (Windows) / **Command+F3** (macOS) キーボードショートカットからもこのコマンドにアクセスできます。
- **すべてを削除**: 最前面のエディターのブックマークをすべて削除します。
- **次に進む** / **前に戻る**: ウィンドウ内でブックマーク間を移動するのに使用します。 コマンドを選択すると、該当するブックマーク行の先頭にカーソルが移動します。 **F3** (次に進む) や **Shift+F3** (前に戻る) ショートカットも使用できます。

:::info

[検索で見つかった項目](#検索) を含む行のマーカーとしてブックマークを使用できます。 この場合、4D は自動でブックマークを追加します。 詳細は [すべてをブックマーク](#すべてをブックマーク) を参照ください。

:::

## エクスプローラーに表示

**エクスプローラーに表示...** コマンドは、ターゲット要素が選択された状態のエクスプローラーウィンドウを開きます。 To do this, place the cursor inside the element's name or select it, then choose **Method** > **Reveal in Explorer...** .

## 呼出し元を検索

**メソッド** メニューの **呼出し元を検索...** コマンドはプロジェクトメソッドでのみ利用可能です。 このコマンドは、開かれているプロジェクトメソッドを参照しているすべてのオブジェクト (他のメソッドやメニュー) を検索します。

**Note:** The **Search Callers...** command is also available in **Explorer** > **Methods**

このコマンドの結果は新規ウィンドウに表示されます。

## 定義を開く

**定義を開く...** コマンドは、コードエディター内で参照されている要素の定義を開きます。 To do this, place the cursor inside the object name or select it, and choose **Method** > **Goto Definition...** or use the context menu of the editor.

:::tip

この機能は **Ctrl+K** (Windows) / **Command+K** (macOS) または **Alt+ダブルクリック** のキーボードショートカットでも利用できます。

:::

**定義を開く.....** コマンドの効果は、ターゲット要素によって異なります:

- プロジェクトメソッドの場合、コードエディターの新しいウィンドウ内にメソッドのコンテンツが表示されます。
- クラス名またはクラス関数の場合、コードエディター内にクラスが表示されます。
- ビルトイン 4D コマンドまたは関数の場合、[**ドキュメンテーションを表示**](#ドキュメンテーションを表示) コマンドと同じ効果があります。

## ドキュメンテーションを表示

**ドキュメンテーションを表示...** コマンドは、ターゲット要素のドキュメンテーションを開きます。 To do this, place the cursor inside the element's name or select it, then choose **Method** > **Show documentation...** or use the contextual menu. このコマンドは、ターゲットとなる要素によって効果が変化します。 例:

- プロジェクトメソッドまたはユーザークラスを選択した状態で **ドキュメンテーションを表示...** を選択すると、エクスプローラー内でメソッドを選択し、ドキュメンテーションタブを表示します。
- 4Dコマンド、関数、または 4Dクラス名を選択した状態で **ドキュメンテーションを表示...** を選択すると、オンラインドキュメントを開きます。
- 何も要素が選択されていない場合、コマンドは現在コードエディターで開かれているメソッドのドキュメンテーションを開きます ([あれば](../Project/documentation.md))。

:::tip

4D の "クラシック" ランゲージコマンドのドキュメントを表示するには、コマンド名を選択、またはその途中にカーソルを挿入し、**F1** を押します。 デフォルトブラウザーの新しいウィンドウにコマンドのドキュメントが表示されます。 環境設定 ([ドキュメントの場所](../Preferences/general.md#ドキュメントの場所)) に基づき、4D はドキュメントを探します。

:::

## 参照を検索

**参照を検索...** コマンドは、**メソッド** メニューまたはコードエディターのコンテキストメニューにあり、プロジェクト内で、メソッドの現在の項目が参照されているすべてのオブジェクト (メソッドやフォーム) を検索します。

現在の項目とは、選択されているもの、あるいはカーソルが置かれているものです。 フィールド名、変数名、コマンド、文字列等が該当します。 たとえば、以下のアクションを実行するとデータベース中で _vlNbCmd_ 変数のオカレンスを探します:

![find-dialog](../assets/en/code-editor/search-references.png)

このコマンドの結果は新規ウィンドウに表示されます。

## マクロ

メソッド内でマクロコマンドを利用することができます。 マクロを利用すれば、コードの入力にかかる時間を大幅に短縮することができます。

マクロコマンドは 4Dコードのパーツで、どのデータベースが開かれているかにかかわらず、あらゆるメソッドのどんな場所にでも挿入することができます。 マクロにはすべてのタイプの 4Dテキスト、コマンド、定数、さらにマクロ実行時のメソッドコンテキストにより値が置換される特別なタグを記述することができます。 For instance, a macro may contain the tag `<method_name/>;` at the time of macro insertion, this tag will be replaced by the name of the current project method.

マクロは 1つ以上の XMLフォーマットのテキストファイルに格納されます。 マクロはコードエディターリスト、またはエディター内のコンテキストメニュー、さらに自動補完機能から呼び出すことが可能です。

4Dマクロは XMLフォーマットで記述されます。 4Dが提供するデフォルトのマクロファイルをそのまま使用することも、変更することもできます。

### マクロの場所

4D は **Macros v2** という名前のフォルダーからマクロを読み込みます。 マクロは XMLファイルとしてこのフォルダーに配置しなければなりません。

"Macros v2" フォルダーは以下の場所に配置できます:

- マシンのアクティブ4Dフォルダー。 この場合、マクロはすべてのデータベースで共有されます。
  **注:** アクティブ4Dフォルダーの位置は OS により異なります。 詳細については、_4Dランゲージリファレンス_ マニュアルの [Get 4D folder](https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.ja.html) コマンドの説明を参照ください。
- データベースストラクチャーファイルと同階層。 マクロは、このストラクチャーにのみ読み込まれます。
- コンポーネントの場合: データベースの **Components** フォルダーと同階層。 この場合マクロは、コンポーネントがインストールされている場合のみ利用できます。

これら 3つの場所は同時に利用可能です。各場所に "Macros v2" フォルダーをインストールできます。 The macros will be loaded in the following order: 4D folder, structure file, component 1... component X.

### デフォルトマクロ

4D はデフォルトで、制御フローキーワードなどに対応するマクロを提供しています。 このマクロは 4Dを初回起動する際、マシンのアクティブ4Dフォルダー内の "Macros v2" フォルダーに作成される_Macros.xml_ ファイルに含まれます。

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
| `<method_path/>`     | カレントメソッドのパスシンタックス ([`METHOD Get path`](https://doc.4d.com/4dv19R/help/command/ja/page1164.html) が返すものと同じ) で置換されるタグ。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
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

The `<method>` tag allows you to generate and use macro-commands that execute 4D project methods. これにより開発者はコンポーネントにマクロコマンドを添付して配布し、洗練された機能を提供することが可能になります。 たとえば、以下のマクロはカレントのメソッド名を引数にとり、_MyMethod_ メソッドを実行します:

`<method>MyMethod("<method_name/>")</method>`

呼び出されたメソッドコードは新規プロセスで実行されます。 このプロセスはメソッド実行後に消失します。

> 呼び出されたメソッドの実行が終了するまでストラクチャープロセスは停止されます。 メソッドの実行は素早く終了し、アプリケーションをブロックするリスクがないことを確認しなければなりません。 ブロックしてしまった場合には、**Ctrl+F8** (Windows) または **Command+F8** (macOS) でこのプロセスをアボートできます。

### マクロを呼び出す

デフォルトでマクロはコードエディターのコンテキストメニューまたはツールバー、自動補完機能、またはコードエディターウィンドウ下部のマクロリストから呼び出すことができます。

各マクロごとにコンテキストメニューや自動補完機能を使用した呼び出しを禁止できる点に留意してください。

#### コンテキストメニューとツールバー

デフォルトでは、すべてのマクロをコードエディターのコンテキストメニュー (**マクロ挿入** 階層コマンド) またはツールバーの **マクロ** ボタンから呼び出すことができます。

The _in_menu_ attribute of the `<macro>` tag is used to set whether or not the macro appears in this menu.

コンテキストメニュー内で、マクロは "Macros.xml" ファイル (および追加の XMLファイル) に記述された順番で表示されます。 つまりファイルを編集することでこの順番を変更できます。

#### 自動補完

デフォルトでは、すべてのマクロは自動補完 (タイプアヘッド) 機能からアクセスできます ([コードエディター](./write-class-method.md) 参照)。 The _type_ahead_ attribute of the `<macro>` tag can be used to exclude a macro from this type of operation.

**Note:** If the macro contains the `<selection/>` tag, it will not appear in the autocomplete pop-up window.

#### コードエディターリスト

コードエディターのリストにマクロを表示させることができます ([コードエディター](./write-class-method.md) 参照)。 リスト中でマクロをダブルクリックし、呼び出すことができます。 特定のマクロをこのリストから除外することはできません。

### 互換性に関する注意

マクロのサポートは 4Dのバージョンごとに変わることがあります。 カスタマイズされたマクロを管理しつつ、異なるバージョンの互換性を保持するために、4Dは以前のバージョンのマクロを取り除くことはしません。 最新機能を使用したい場合は、適切にバージョンを調整する必要があります。

#### method の選択テキスト変数

選択されたテキストは [GET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/ja/page997.html) と [SET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/ja/page998.html) コマンドを使用して管理することが推奨されます。 これらのコマンドを使用すると、ホストプロジェクトとコンポーネント間でテキストを相互に交換することができ、マクロの管理専用のコンポーネントを作成することができます。 マクロでこのモードを有効にするには、macro 要素内で version 属性に値 2 を指定しなければなりません。 In this case, 4D no longer manages the predefined variables _textSel,_textReplace, etc. and the [GET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page997.html) and [SET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page998.html) commands are used. 属性は以下のように定義します:

`<macro name="MyMacro" version="2">`<br/>
`--- Text of the macro ---`<br/>
`</macro>`

この属性を指定しない場合、以前のモードが保持されます。

#### XML標準に関連する非互換性

マクロファイルは XML標準に準拠しなければならず、厳密なシンタックスルールが適用されます。 以前のバージョンで作成されたマクロコードの場合、これにより非互換が発生することがあり、また XMLファイルの読み込みが妨げられる可能性があります。 異常な動作が起こるのは以下のケースです:

- Comments of the "// my comment" type, allowed inside `<macro>` elements in previous versions of 4D, are not compatible with the XML syntax. The lines of comments must respect the standard `"<!-- my comment -->"` form.
- The `<>` symbols used more particularly for interprocess object names must be encoded. For example, the `<>params` variable must be written `&lt;>params`.
- The initial `<macros>` declaration tag could be omitted in previous versions of 4D. 現在このタグは必須です。このタグがない場合、ファイルをロードできません。
