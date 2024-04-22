---
id: formEditor
slug: overview
title: フォームエディター
---

4D が提供するフォームエディターを使用して、必要とされる機能に達するまでフォームを完全にカスタマイズできます。 フォームエディターでは、オブジェクトの作成や削除、操作、フォームやオブジェクトのプロパティの設定がおこなえます。

## インターフェース

フォームエディターは各JSONフォームを個別のウィンドウに表示し、ウィンドウごとにオブジェクトバーとツールバーがあります。 複数のフォームを同時に開くことができます。

### 表示オプション

フォームのカレントページの大部分のインタフェース要素は、表示したり非表示にしたりすることができます。

- **Inherited Form**: Inherited form objects (if there is an [inherited form](forms.md#inherited-forms)).
- **Page 0**: Objects from [page 0](forms.md#form-pages). このオプションで、フォームのカレントページのオブジェクトとページ0 のオブジェクトを区別することができます。
- **Paper**: Borders of the printing page, which are shown as gray lines. This element can only be displayed by default in ["for printing" type](properties_FormProperties.md#form-type) forms.
- **Rulers**: Rulers of the Form editor’s window.
- **Markers**: Output control lines and associated markers that show the limits of the form’s different areas. This element can only be displayed by default in [list forms](properties_FormProperties.md#form-type).
- **Marker Labels**: Marker labels, available only when the output control lines are displayed. This element can only be displayed by default in [list forms](properties_FormProperties.md#form-type).
- **Limits**: Form’s limits. このオプションが選択されていると、アプリケーションモードで表示されるとおりに、フォームがフォームエディターに表示されます。 これによりアプリケーションモードに移動しなくてもフォームを調整しやすくなります。

> The [**Size Based on**](properties_FormSize.md#size-based-on), [**Hor margin**](properties_FormSize.md#hor-margin) and [**Vert margin**](properties_FormSize.md#vert-margin) settings of the form properties affect the form’s limits. これらの設定を使用すると、フォーム上のオブジェクトに基づいて境界を設定できます。 フォームの境界を決定する位置にオブジェクトを配置したり、サイズを変更したりすると、境界も変更されます。

#### デフォルト表示

エディターでフォームを開いたとき、インターフェース要素は、以下に応じてデフォルトで表示または非表示になります:

- the **New form default display** options set in the Preferences - unchecked options cannot be displayed by default.
- the current [form type](properties_FormProperties.md#form-type):
  - リストフォームでは、マーカーとマーカーラベルはデフォルトで常に表示されます。
  - 用紙は "印刷用" のフォームの場合、デフォルトで表示されます。

#### 要素の表示/非表示

You can display or hide elements at any moment in the Form editor’s current window by selecting **Display** from the **Form** menu or the Form editor's context menu:

![](../assets/en/FormEditor/showHideElements.png)

### ルーラー

右と下にあるルーラーが、オブジェクトの配置を手助けします。 They can be [displayed or hidden](#display-options).

Select **Ruler definition...** from the **Form** menu to change measurement units so that the form displays inches, centimeters, or pixels.

### ツールバー

フォームエディターのツールバーはフォームを操作・更新するための一連のツールを提供します。 ウィンドウごとに固有のツールバーを持ちます。

![](../assets/en/FormEditor/toolbar.png)

ツールバーには以下の要素があります:

| アイコン                                             | 名称                                                   | 説明                                                                                                                                                                                                                                        |
| ------------------------------------------------ | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](../assets/en/FormEditor/execute.png)         | フォーム実行                                               | フォームの実行をテストするために使用します。 このボタンをクリックすると、4D は新しいウィンドウを開き、そのコンテキストでフォームを表示します (リストフォームの場合レコードリスト、詳細フォームの場合カレントレコード)。 フォームはメインプロセスで実行されます。                                                                                   |
| ![](../assets/en/FormEditor/selection.png)       | [Selection tool](#selecting-objects)                 | Allows selecting, moving and resizing form objects.<p>**Note**: When an object of the Text or Group Box type is selected, pressing the **Enter** key lets you switch to editing mode.</p> |
| ![](../assets/en/FormEditor/zOrder.png)          | [Entry order](#data-entry-order)                     | "入力順" モードに切り替わり、フォームの現在の入力順を表示・変更できます。 入力順は、バッジを使用して確認することもできます。                                                                                                                                                                          |
| ![](../assets/en/FormEditor/moving.png)          | [Moving](#moving-objects)                            | "移動" モードに移行し、ウィンドウ中をドラッグ＆ドロップすることで素早くフォームの表示部分を移動することができます。 このモードでカーソルは手の形になります。 このモードは、フォームを拡大表示している時に特に便利です。                                                                                                                            |
| ![](../assets/en/FormEditor/zoom.png)            | [Zoom](#zoom)                                        | フォーム表示の拡大/縮小率を変更できます (デフォルトで100%)。 "拡大/縮小" モードにするには虫眼鏡をクリックするか、拡大/縮小率バーをクリックします。 この機能は前節で説明しています。                                                                                                                      |
| ![](../assets/en/FormEditor/alignment.png)       | [Alignment](#aligning-objects)                       | このボタンには、フォーム中でオブジェクトを均等に配置するためのメニューがリンクされています。 It is enabled (or not) depending on the objects selected.<p>Available only with CSS Preview None</p>                                                    |
| ![](../assets/en/FormEditor/distribution.png)    | [Distribution](#distributing-objects)                | このボタンには、フォーム中でオブジェクトの並びを揃えるためのメニューがリンクされています。 It is enabled (or not) depending on the objects selected.<p>Available only with CSS Preview None</p>                                                     |
| ![](../assets/en/FormEditor/level.png)           | [Level](#layering-objects)                           | このボタンには、フォーム上のオブジェクトの階層を変更するためのメニューが関連付けられています。 このボタンは選択されているオブジェクトに応じて有効/無効になります。                                                                                                                                                        |
| ![](../assets/en/FormEditor/group.png)           | [Group/Ungroup](#grouping-objects)                   | このボタンには、フォーム上の選択オブジェクトのグループ化やグループ解除をおこなうためのメニューが関連付けられています。 このボタンは選択されているオブジェクトに応じて有効/無効になります。                                                                                                                                            |
| ![](../assets/en/FormEditor/displyAndPage.png)   | [Display and page management](forms.html#form-pages) | このエリアを使用して、フォームページ間の移動やページの追加ができます。 フォームページを移動するには矢印ボタンをクリックするか、または中央のエリアをクリックすると現われるメニューから表示したいページを選択します。 最終ページが表示されている状態で、右矢印ボタンをクリックすると、4D はページを追加します。                                                                                 |
| ![](../assets/en/FormEditor/cssPreviewicon.png)  | [CSS Preview](#css-preview)                          | このボタンで、使用する CSSモードを選択します。                                                                                                                                                                                                                 |
| ![](../assets/en/FormEditor/views.png)           | [Managing views](#views)                             | このボタンは、ビューパレットの表示や非表示をおこないます。 この機能については "オブジェクトビューを使用する" で説明しています。                                                                                                                                                                        |
| ![](../assets/en/FormEditor/shields2.png)        | [Displaying shields](#shields)                       | このボタンをクリックするたびに、すべてのタイプのフォームバッジが順に表示されます。 また、このボタンには、表示するバッジタイプを直接選択できるメニューが関連付けられています。                                                                                                                                                   |
| ![](../assets/en/FormEditor/library.png)         | [Preconfigured object library](objectLibrary.html)   | このボタンは定義済みオブジェクトライブラリを表示します。 このライブラリは定義済みのプロパティを持つオブジェクトを多数提供します。                                                                                                                                                                         |
| ![](../assets/en/FormEditor/listBoxBuilder1.png) | [List Box Builder](#list-box-builder)                | このボタンは、新しいエンティティセレクション型リストボックスを作成します。                                                                                                                                                                                                     |
| ![](../assets/en/FormEditor/insertFields.png)    | [Insert fields](#insert-fields)                      | このボタンは、テーブルフォームにおいて、親テーブルの全フィールド (オブジェクト型と BLOB型を除く) をインターフェース標準に従ってラベル付きで挿入します。                                                                                                                                       |

### オブジェクトバーを使用する

オブジェクトバーには、4Dフォーム上で使用できるアクティブオブジェクトや非アクティブオブジェクトがすべて含まれています。 一部のオブジェクトは、テーマ別にまとめられています。 各テーマでは、複数の項目のなかから選択することができます。 オブジェクトバーにフォーカスがある場合、キーボードのキーを使用してボタンを選択できます。 以下の表で利用可能なオブジェクトグループとショートカットを示します。

| ボタン                                        | グループ                                                                                                                                                                                                                                                      |  キー |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-: |
| ![](../assets/en/FormEditor/text.png)      | [Text](FormObjects/text.md) / [Group Box](FormObjects/groupBox.md)                                                                                                                                                                                        |  T  |
| ![](../assets/en/FormEditor/input.png)     | [Input](FormObjects/input_overview.md)                                                                                                                                                                                                                    |  F  |
| ![](../assets/en/FormEditor/listbox.png)   | [Hierarchical List](FormObjects/list_overview.md) / [List Box](FormObjects/listbox_overview.md)                                                                                                                                                           |  L  |
| ![](../assets/en/FormEditor/combo.png)     | [Combo Box](FormObjects/comboBox_overview.md) / [Drop-down List](FormObjects/dropdownList_Overview.md) / [Picture Pop-up Menu](FormObjects/picturePopupMenu_overview.md)                                                                                  |  P  |
| ![](../assets/en/FormEditor/button.png)    | [Button](FormObjects/button_overview.md) / [Picture Button](FormObjects/pictureButton_overview.md) / [Button Grid](FormObjects/buttonGrid_overview.md)                                                                                                    |  B  |
| ![](../assets/en/FormEditor/radio.png)     | [Radio Button](FormObjects/radio_overview.md)                                                                                                                                                                                                             |  R  |
| ![](../assets/en/FormEditor/checkbox.png)  | [Check Box](FormObjects/checkbox_overview.md)                                                                                                                                                                                                             |  C  |
| ![](../assets/en/FormEditor/indicator.png) | [Progress Indicator](FormObjects/progressIndicator.md) / [Ruler](FormObjects/ruler.md) / [Stepper](FormObjects/stepper.md) / [Spinner](FormObjects/spinner.md)                                                                                            |  I  |
| ![](../assets/en/FormEditor/rectangle.png) | [Rectangle](FormObjects/shapes_overview.md#rectangle) / [Line](FormObjects/shapes_overview.md#line) / [Oval](FormObjects/shapes_overview.md#oval)                                                                                                         |  S  |
| ![](../assets/en/FormEditor/splitter.png)  | [Splitter](FormObjects/splitters.md) / [Tab Control](FormObjects/tabControl.md)                                                                                                                                                                           |  D  |
| ![](../assets/en/FormEditor/plugin.png)    | [Plug-in Area](FormObjects/pluginArea_overview.md) / [Subform](FormObjects/subform_overview.md) / [Web Area](FormObjects/webArea_overview.md) / [4D Write Pro](FormObjects/writeProArea_overview.md) / [4D View Pro](FormObjects/viewProArea_overview.md) |  X  |

任意のオブジェクトタイプを描画するには、該当するボタンを選択してから、フォーム上でそのオブジェクトを描きます。 オブジェクトを作成した後でも、プロパティリストを用いてオブジェクトのタイプを変更することができます。 Hold down the **Shift** key as you draw to constrain the object to a regular shape. この場合、線は水平方向、45度、または垂直方向に引かれます。また、四角は正方形に、楕円は正円に固定されます。

そのテーマで現在選択されているオブジェクトがフォームに挿入されます。 ボタンの右側をクリックすると、バリエーションメニューが表示されます:

![](../assets/en/FormEditor/objectBar.png)

ボタンを 2回クリックすると、フォーム上にオブジェクトを描画した後も、そのボタンが選択されたままになります (連続選択)。 この機能により、同じタイプのオブジェクトを複数連続して作成しやすくなります。 連続選択を解除したい場合は、別のオブジェクトやツールをクリックします。

### プロパティリスト

フォームおよびフォームオブジェクトはプロパティを持ち、フォームへのアクセスやフォームの外観、およびフォーム使用時の動作が制御されます。 フォームプロパティには、たとえばフォーム名、メニューバー、フォームサイズなどがあります。 またオブジェクトプロパティには、たとえばオブジェクト名、オブジェクトサイズ、背景色、フォントなどがあります。

プロパティリストを使用して、フォームおよびオブジェクトプロパティを表示・変更できます。 エディター上でオブジェクト選択していればそのプロパティが、オブジェクトを選択していない場合はフォームのプロパティがプロパティリストに表示されます。

To display/hide the Property List, choose **Property List** from the **Form** menu or from the context menu of the Form editor. さらに、フォームの空のエリアをダブルクリックすることでも表示させることができます。

#### ショートカット

プロパティリストでは、以下のショートカットを使用できます:

- **Arrow key**s ↑ ↓: Used to go from one cell to another.
- **Arrow keys** ← →: Used to expand/collapse themes or enter edit mode.
- **PgUp** and **PgDn**: Used to scroll the Property List contents.
- **Home** and **End**: Used to scroll the Property List so that the first or last cell is displayed.
- **Ctrl+click** (Windows) or **Command+click** (macOS) on an event: Used to select/deselect every event in the list, according to the initial state of the event on which you clicked.
- **Ctrl+click** (Windows) or **Command+click** (macOS) on a theme label: Used to Collapse/Expand every theme in the list.
- **Ctrl+click** (Windows) or **Command+click** (macOS) on a property value displayed in **bold**: Resets the property to its default.

## フォームオブジェクトの操作

### オブジェクトの追加

フォームにオブジェクトを追加する方法は複数あります:

- By drawing the object directly in the form after selecting its type in the object bar (see [Using the object bar](#using-the-object-bar))
- オブジェクトバーからオブジェクトをドラッグ＆ドロップする。
- By drag-and-drop or copy-paste operations on an object selected from the preconfigured [object library](objectLibrary.md),
- 他のフォームからオブジェクトをドラッグ＆ドロップする。
- エクスプローラー (フィールド) やデザインモードの他のエディター (リストやピクチャー等) からオブジェクトをドラッグ＆ドロップする。

オブジェクトをフォームに配置したら、フォームエディターを使用してそのオブジェクトのプロパティを編集できます。

フォームでは 2つのタイプのオブジェクトを扱います:

- **Static objects** (lines, frames, background pictures, etc.): These objects are generally used for setting the appearance of the form and its labels as well as for the graphic interface. これらはフォームエディターのオブジェクトバーから利用できます。 You can also set their graphic attributes (size, color, font, etc.) and their resizing properties using the Property List. アクティブオブジェクトと異なり、スタティックオブジェクトには変数や式が割り当てられません。 しかし、スタティックオブジェクトにダイナミックオブジェクトを挿入することは可能です。

- **Active objects**: These objects perform tasks or functions in the interface and can take many forms: fields, buttons, scrollable lists, etc. 各アクティブオブジェクトにはフィールドまたは変数が割り当てられます。

### オブジェクトの選択

オブジェクトの操作 (線幅やフォントの変更など) をおこなう前に、対象のオブジェクトを選択する必要があります。

ツールバーを使用してオブジェクトを選択するには:

1. Click the Arrow tool  in the toolbar.<p>![](../assets/en/FormEditor/selection.png)</p>

<p>マウスカーソルをフォームエリアに移動すると、カーソルは標準の矢印の形をしたポインターに変わります</p>。

2. 選択したいオブジェクトをクリックします。 Resizing handles identify the selected object.<p>![](../assets/en/FormEditor/selectResize.png)</p>

プロパティリストを使用してオブジェクトを選択するには:

1. プロパティリストの一番上にあるオブジェクトリストドロップダウンリストからオブジェクト名を選択します。 この方法では、他のオブジェクトの下に隠れているオブジェクトや、カレントウィンドウの表示領域外に置かれているオブジェクトを選択することができます。
   To deselect an object, click outside the object’s boundary or **Shift+click** the object.

> "デザインモードを検索" の結果ウィンドウでオブジェクトをダブルクリックして選択することもできます。

### 複数オブジェクトの選択

複数のフォームオブジェクトに関して同じ操作を適用したい場合があります。 たとえば、オブジェクトの移動や整列、外観の変更をおこなう場合などです。 4D では一度に複数のオブジェクトを選択することができます。 複数のオブジェクトを選択する方法はいくつかあります:

- Choose **Select All** from the Edit menu to select all the objects.
- Right-click on the object and choose the **Select Similar Objects** command in the context menu.
- Hold down the **Shift** key and click the objects you want to select.
- 選択したいオブジェクトグループの外側から各オブジェクトを囲むようにマーキー (選択矩形とも呼ばれます) を描画する。 マウスボタンを離すと、マーキー内及びマーキーに重なるオブジェクトが選択されます。
- Hold down the **Alt** key (Windows) or the **Option** key (macOS) and draw a marquee. マーキーに完全に囲まれたオブジェクトが選択されます。

次の図はマーキーが描画され、2つのオブジェクトが選択されている様子を示しています:

![](../assets/en/FormEditor/selectMultiple.png)

To deselect an object that is part of a set of selected objects, hold down the **Shift** key and click the object. この場合、他のオブジェクトは選択されたままになります。 選択されているオブジェクトをすべて選択解除するには、いずれのオブジェクトの境界にもかからない場所をクリックします。

### オブジェクトの複製

アクティブオブジェクトを含む任意のオブジェクトをフォーム上で複製できます。 アクティブオブジェクトのコピーはオブジェクト名を除き、変数名、型、標準アクション、表示フォーマット、オブジェクトメソッドなどすべてのプロパティが保持されます。

ツールパレットの複製ツールを使用してオブジェクトを直接複製するか、"行列を指定して複製" ダイアログボックスでオブジェクトを複数一気に作成できます。 このダイアログでは、2つのコピー間の間隔も指定できます。

オブジェクトを複製するには:

1. 複製したいオブジェクトを選択します。
2. Choose **Duplicate** from the **Edit** menu. 4D は選択されたオブジェクトのコピーを作成し、オリジナルオブジェクトの基点から右下に配置します。複製されたコピーはオリジナルの前面におかれます。　
3. コピーを適切な場所に配置します。
   ここで複製メニュー項目を再び選択すると、4D はもう一つコピーを作成し、最初のコピーと元のオブジェクトの間との同じ距離同じ方向に配置します。 これを活かし、オブジェクトのコピーをあるライン上に配置する必要がある場合は、以下の手順でおこないます。 元のオブジェクトを複製し、そのコピーをフォーム内の別の場所に移動させてから、コピーを複製します。 1つ目のコピーと元のオブジェクトの位置関係を再現する形で、2つ目のコピーも 1つ目のコピーに対して、自動的に配置されます。 後続のコピーも、それぞれのコピー元オブジェクトと同じ位置関係に配置されます。 以下の図は、この相対的なコピーの配置が動作する様子を示しています:

![](../assets/en/FormEditor/duplicateObjects.png)

#### 行列を指定して複製

The "Duplicate Many" dialog box appears when you select one or more object(s) and choose the **Duplicate Many...** command from the **Object** menu.

![](../assets/en/FormEditor/duplcateMany.png)

- 上のエリアには、作成したいオブジェクトの列数と行数を入力します。 たとえば、3列 2行のオブジェクトを作成したい場合、列に 3 を、行に 2 を入力します。 横に 3つの新しいコピーを作成したい場合は、列欄に 4 を入力し、行はデフォルトの 1 のままにします。

- 列と行それぞれに、コピー間のオフセットを指定できます。 値はポイント単位で指定します。 オフセットは、元のオブジェクトに対して相対的に、コピー毎に適用されます。たとえば、元のオブジェクトの高さが 50ポイントである場合、オブジェクトごとに 20ポイント縦オフセットするには、列の "オフセット" エリアに 70 を入力します。

- If you wish to create a matrix of variables, select the **Number Variables** option and select the direction in which the variables are to be numbered, either by line(s) or by column(s).
  選択したオブジェクトが変数の場合にのみ、このオプションは有効になります。 For more information on this option, refer to **Duplicating on a matrix** in the _Design Reference_.

### オブジェクトの移動

テンプレートで作成されたフィールドやオブジェクトを含め、フォーム上のグラフィックやアクティブオブジェクトはすべて移動可能です。 オブジェクトを移動するには、次のような方法があります:

- オブジェクトをドラッグして移動する。
- 矢印キーを使用して、オブジェクトを 1ピクセルずつ移動する。
- Shiftキーと矢印キーを使用して、オブジェクトを 1ステップずつ移動する (デフォルトで 1ステップ=20ピクセル)。

選択したオブジェクトのドラッグを開始すると、ハンドルが消えます。 4D はルーラーにオブジェクトの座標を示すマーカーを表示するので、適切な位置にオブジェクトを配置することができます。 このとき、ハンドルをドラッグしないようにしてください。 ハンドルをドラッグすると、オブジェクトのサイズが変更されます。 You can press the **Shift** key to carry out the move with a constraint.

When the [Magnetic Grid](#using-the-magnetic-grid) is on, objects are moved in stages indicating noticeable locations.

オブジェクトを 1ピクセルずつ移動するには:

- 移動したいオブジェクトを選択し、キーボード上の矢印キーを使用してオブジェクトを移動します。 矢印キーを押すたびに、矢印の方向へオブジェクトが 1ピクセルずつ移動します。

オブジェクトを 1ステップずつ移動するには:

- Select the object or objects you want to move  and hold down the **Shift** key and use the arrow keys to move the object by steps. デフォルトで 1ステップにつき 20ピクセル移動します。 このピクセル数は、環境設定のフォームページで変更できます。

### オブジェクトのグループ化

4D ではオブジェクトをグループ化して、そのグループを一つのオブジェクトとして選択・移動・変更することができます。 グループ化されたオブジェクト同士の相対位置は保持されます。 一般的には、フィールドとそのラベル、透明ボタンとそのアイコン等をグループ化するでしょう。

グループの大きさを変更すると、そのグループ内の全オブジェクトのサイズが同じ比率で変更されます (テキストエリアは除きます。 テキストエリアのサイズは、そのフォントサイズに合わせて変更されます)。

グループ化を解除すると、再び個々にオブジェクトを扱えるようになります。

グループ化されたアクティブオブジェクトのプロパティやメソッドにアクセスするには、グループ化を解除しなければなりません。 However, it is possible to select an object belonging to a group without degrouping the set: to do this, **Ctrl+click** (Windows) or **Command+click** (macOS) on the object (the group must be selected beforehand).

グループ化はフォームエディター上でのみ意味を持ちます。 フォームの実行中は、グループ化されたすべてのオブジェクトが、グループ化されていないのと同じに動作します。

> It is not possible to group objects belonging to different views and only those objects belonging to the current view can be grouped (see [Views](#views) ).

オブジェクトをグループ化するには:

1. グループ化したいオブジェクトを選択します。
2. Choose **Group** from the Object menu. OR
   Click the Group button  in the toolbar of the Form editor:<p>![](../assets/en/FormEditor/group.png)</p>
   4D marks the boundary of the newly grouped objects with handles. グループ内の各オブジェクトの境界にはハンドルが表示されません。 これ以降、グループ化されたオブジェクトを編集すると、グループを構成する全オブジェクトが変更されます。

オブジェクトのグループ化を解除するには:

1. グループ化を解除したいグループオブジェクトを選択します。
2. Choose **Ungroup** from the **Object** menu.<p>OR</p><p>Click the **Ungroup** button (variant of the **Group** button) in the toolbar of the Form editor.</p><p>If **Ungroup** is dimmed, this means that the selected object is already separated into its simplest form.</p>4D marks the boundaries of the individual objects with handles.

### オブジェクトの整列

フォーム上のオブジェクトを互いに整列させたり、または透明グリッドを用いて揃えることができます。

- オブジェクト同士を整列させる場合、オブジェクトの上端、下端、側面で揃えたり、または別のオブジェクトの縦や横の中心線に沿って揃えることができます。 整列ツールを使用して選択オブジェクトを直接揃えたり、または整列アシスタントを用いてさらに詳細な整列を適用することも可能です。 整列アシスタントを使用した場合、たとえば、整列の基準となるオブジェクトを選択したり、整列を適用する前にフォーム上の整列状態をプレビューできるようになります。
- その際、移動中のオブジェクトが別のオブジェクトに接近すると、"目に見える" 位置ガイドとして点線が表示され、これに基づいて各オブジェクトの整列を実行することができます。

#### 即時整列ツールを使用する

ツールバーの整列ツール、またはオブジェクトメニューの整列サブメニューを使用して、選択したオブジェクトを瞬時に揃えることができます。

![](../assets/en/FormEditor/alignmentMenu.png)

4D がオブジェクトを揃える場合、選択オブジェクトのうち 1つを定位置に置いたまま、そのオブジェクトを基準に残りのオブジェクトを整列させます。 この基準オブジェクトが "アンカー" となります。 整列をおこなう方向で最も離れた位置にあるオブジェクトがアンカーとして使用され、他のオブジェクトはこのオブジェクトに合わせられます。 たとえば、一連のオブジェクトに対して右揃えを実行したい場合、一番右側に位置するオブジェクトがアンカーとして使用されます。
次の図は整列なし、左揃え、縦中央揃え、右揃えの状態を示しています:

![](../assets/en/FormEditor/alignmentTools.png)

#### 整列アシスタントを使用する

整列アシスタントを使用すると、オブジェクトに関するあらゆるタイプの整列や均等配置を実行することができます。

![](../assets/en/FormEditor/alignmentAssistant.png)

To display this dialog box, select the objects you want to align then choose the **Alignment** command from the **Align** submenu in the **Object** menu or from the context menu of the editor.

- In the “Left/Right Alignment” and/or “Top/Bottom Alignment” areas, click the icon that corresponds to the alignment you want to perform.<p>The example area displays the results of your selection.</p>

- To perform an alignment that uses the standard anchor scheme, click **Preview** or **Apply**. この場合、整列をおこなう方向で最も離れた位置にあるオブジェクトがアンカーとして使用され、他のオブジェクトはこのオブジェクトに合わせられます。 たとえば、一連のオブジェクトに対して右揃えを実行したい場合、一番右側に位置するオブジェクトがアンカーとして使用されます。 OR:<p>To align objects to a specific object, select the **Align on** option and select the object to which you want the other objects to be aligned from the object list. In this case, the position of the reference object will not be altered.</p>

You can preview the results of the alignment by clicking the **Preview** button. するとフォームエディター上のオブジェクトは見かけ上整列しますが、ダイアログボックスが表示されたままなので、この整列のキャンセルや適用をおこなうことができます。

> このダイアログボックスでは、整列と均等配置を合わせて実行することができます。 For more information on how to distribute objects, refer to [Distributing objects](#distributing-objects).

#### マグネティックグリッドを使用する

フォームエディターには仮想的なマグネティックグリッド機能があります。 オブジェクトのマグネティック整列は、オブジェクト同士の相対位置に基づいておこなわれます。 マグネティックグリッドは、2つ以上のオブジェクトがフォーム上に存在する場合のみ使用可能です。

フォーム上のあるオブジェクトを移動する際、4D は他のフォームオブジェクトとの相対的な位置関係に基づき、このオブジェクトの位置候補を示します。 次のような場合に候補が示されます: 次のような場合に候補が示されます:

- 水平方向に 2つのオブジェクトの端または中央が同じ位置になる場合。
- 垂直方向に 2つのオブジェクトの端が同じ位置になる場合。

この状況になると、4D はその位置にオブジェクトを配置し、そこが候補位置であることを示す赤いラインを表示します:

![](../assets/en/FormEditor/magneticGrid1.png)

オブジェクトを均等配置する場合、4D はインターフェース標準に基づいてオブジェクト間の距離を提示します。 マグネティック整列と同様に、配置が決定した時点で、その間隔が赤いラインで表わされます。

![](../assets/en/FormEditor/magneticGrid2.png)

この処理は、あらゆるタイプのフォームオブジェクトに対して適用されます。 The Magnetic Grid can be enabled or disabled at any time using the **Magnetic Grid** command in the **Form** menu or in the editor context menu. It is also possible to set the activation of this feature by default on the **Preferences** > **Forms** page (**Activate auto alignment by default** option). You can manually activate or deactivate the magnetic grid when an object is selected by pressing the **Ctrl** (Windows) or **Control** (macOS) key .

> 複数のオブジェクトが重なっている場合、<strong x-id="1">Ctrl+Shift+クリック</strong> / <strong x-id="1">Command+Shift+クリック</strong> ショートカットを使用して、クリックするたびに下のレイヤーにあるオブジェクトを選択できます。

### オブジェクトの均等配置

各オブジェクトが同じ間隔で配置されるように、オブジェクトを均等配置することができます。 これには、ツールパレットまたは整列アシスタントの均等配置ツールを用います。 整列アシスタントを使用すると、1回の操作でオブジェクトの整列や均等配置をおこなえます。

> When the [Magnetic Grid](#using-the-magnetic-grid) is on, a visual guide is also provided for distribution when an object is moved manually.

同じ間隔を空けてオブジェクトを配置するには:

1. 3つ以上のオブジェクトを選択し、希望する均等配置ツールをクリックします。

2. In the toolbar, click on the distribution tool that corresponds to the distribution you want to apply.<p>![](../assets/en/FormEditor/distributionTool.png)</p> OR<p>Select a distribution menu command from the **Align** submenu in the **Object** menu or from the context menu of the editor.</p>4D distributes the objects accordingly. 各オブジェクトの中心までの間隔、および隣接する 2つのオブジェクトの間隔のうち最も広い間隔が基準として用いられます。

"整列と均等配置" ダイアログボックスを用いてオブジェクトを均等に配置するには:

1. 均等配置したいオブジェクトを選択します。

2. Choose the **Alignment** command from the **Align** submenu in the **Object** menu or from the context menu of the editor. 次のダイアログボックスが表示されます: 

3. In the Left/Right Alignment and/or Top/Bottom Alignment areas, click the standard distribution icon: ![](../assets/en/FormEditor/horizontalDistribution.png) <p>(Standard horizontal distribution icon)</p>The example area displays the results of your selection.

4. To perform a distribution that uses the standard scheme, click **Preview** or _Apply_.<p>In this case 4D will perform a standard distribution, so that the objects are set out with an equal amount of space between them.</p>OR:<p>To execute a specific distribution, select the **Distribute** option (for example if you want to distribute the objects based on the distance to their right side). このオプションはスイッチのように機能します。 If the Distribute check box is selected, the icons located below it perform a different function:</p>

- Horizontally, the icons correspond to the following distributions: evenly with respect to left sides, centers (hor.) and right sides of the selected objects.
- Vertically, the icons correspond to the following distributions: evenly with respect to top edges, centers (vert.) and bottom edges of the selected objects.

You can preview the actual result of your settings by clicking on the **Preview** button: the operation is carried out in the Form editor but the dialog box stays in the foreground. You can then **Cancel** or **Apply** the modifications.

> 整列アシスタントを使用すると、1回の操作でオブジェクトの整列や均等配置をおこなえます。 For more information about alignment, refer to [Aligning objects](#aligning-objects).

### オブジェクトを重ねる

フォーム上で他のオブジェクトを隠しているオブジェクトの配置を調整する必要が生じることもあります。 たとえば、フォーム上のフィールドの背景にグラフィックを配置したい場合です。 4D provides four menu items, **Move to Back**, **Move to Front**, **Up One Level** and **Down One Level** that let you “layer” objects on the form. この重なりは、デフォルトの入力順も規定します (下の データの入力順 参照)。 次の図は、他のオブジェクトの前面/背面に置かれたオブジェクトを示しています:

![](../assets/en/FormEditor/layering.png)

選択したオブジェクトのレベルを変更するには、以下のいずれかの作業をおこないます:

- One of the **Move to Back**, **Move to Front**, **Up One Level** and **Down One Level** commands of the Object menu,
- One of the commands in the **Level>** submenu in the context menu of the editor,
- ツールバーのレベル管理ボタンに割り当てられたコマンドのいずれかを選択します。

![](../assets/en/FormEditor/level2.png)

> When several objects are superimposed, the **Ctrl+Shift+click** / **Command+Shift+click** shortcut can be used to select each object successively by going down a layer with each click.

レベルの順序を考えるにあたって、4D は常に背面から全面へと進みます。 したがって、前・次で表現した場合、"前レベル" は 1つ背面のレベルのことになります。 "次レベルは" 1つ前面のレベルのことです。

### データの入力順

The data entry order is the order in which fields, subforms, and other active objects are selected as you hit the **Tab** or the **Carriage return** key in an input form. It is possible to move through the form in the opposite direction (reverse data entry order) by pressing the **Shift+Tab** or **Shift+Carriage** return keys.

> You can change the entry order at runtime using the `FORM SET ENTRY ORDER` and `FORM GET ENTRY ORDER` commands.

フォーカス可プロパティをサポートするすべてのオブジェクトが、デフォルトでデータ入力順序に含まれます。

Setting the entry order for a JSON form is done with the [`entryOrder`](properties_JSONref.md) property.

独自の入力順を指定しない場合、4D はオブジェクトの階層に従い、"背面から前面" へ向けてデフォルトの入力順を決定します。 したがって、標準の入力順はフォーム上でのオブジェクトの作成順になります。

フォームでは度々、独自の入力順が必要になります。 たとえば、次の図ではフォームの作成後に、住所に関連するフィールドが追加されています。 この結果、標準の入力順が意味をなさなくなり、扱いづらい順番でデータを入力しなければなりません:

![](../assets/en/FormEditor/entryOrder1.png)

このようなケースでは、独自のデータ入力順を指定すると、より理にかなった順序でデータを入力できるようになります:

![](../assets/en/FormEditor/entryOrder2.png)

#### データ入力順の表示と変更

"入力順" バッジまたは "入力順" モードを使用して、現在の入力順を表示することができます。 しかし、入力順を変更するには、"入力順" モードを使用しなければなりません。

この節では "入力順" モードを用いて、入力順の表示と変更をおこなう方法について説明します。 For more information about viewing the entry order using shields, refer to [Using shields](#using-shields).

入力順モードに切り替え、入力順を変更するには:

1. Choose **Entry Order** from the **Form** menu or click on the Entry Order button in the toolbar of the window:<p>![](../assets/en/FormEditor/zOrder.png)</p>

   ポインターが入力順ポインターに変わり、4D はフォーム上に線を引いて、データ入力時にオブジェクトが選択される順序を示します。 ツールパレット上の他のツールをクリックするまでは、入力順序の表示と変更操作しかおこなえません。

2. To change the data entry order, position the pointer on an object in the form and, while holding down the mouse button, drag the pointer to the object you want next in the data entry order.<p>![](../assets/en/FormEditor/entryOrder3.png)</p>4D will adjust the entry order accordingly.

3. 入力順を設定したいだけ、ステップ2 を繰り返します。

4. When you are satisfied with the data entry order, click any unselected tool in the toolbar or choose **Entry Order** from the **Form** menu. 4Dは、フォームエディターの通常操作に戻ります。

> フォームのカレントページの入力順だけが表示されます。 If the form contains enterable objects on page 0 or coming from an inherited form, the default entry order is as follows: Objects from page 0 of the inherited form > Objects from page 1 of the inherited form > Objects from page 0 of the open form > Objects from the current page of the open form.

#### データ入力グループを使用する

入力順序を変更する際に、フォーム上のオブジェクトグループを選択し、そのグループ内のオブジェクトに対して標準の入力順序を適用することも可能です。 これにより、フィールドがグループや列に分かれているフォーム上で、データ入力順序を簡単に設定することができます。

データ入力グループを作成するには:

1. Choose **Entry Order** from the _Form_ menu or click the  button in the toolbar.
2. データ入力用のグループに指定したいオブジェクトの周囲をマーキーで囲みます。

マウスボタンを放すと、マーキーに囲まれているオブジェクトや、その矩形に接しているオブジェクトが標準入力順に設定されます。 それ以外のオブジェクトのデータ入力順は、必要に応じて調整されます。

#### フィールドを入力順から除外する

デフォルトでは、すべてのフォーカス可オブジェクトが入力順に組み込まれています。 任意のオブジェクトを入力順から除外するには:

1. 入力順モードに切り替えます。

2. **shift-click** on the object

3. **right-click** on the object and select **Remove from entry order** option from the context menu

## CSSプレビュー

フォームエディターでは、CSSの値を適用した状態、または適用しない状態でフォームを表示することができます。

When [style sheets](createStylesheet.md) have been defined, forms (including inherited forms and subforms) are opened in the CSS Preview mode for your operating system by default.

### CSSプレビューモードの選択

フォームエディターのツールバーには、スタイル付きオブジェクトを表示するための CSSボタンがあります:

![](../assets/en/FormEditor/cssToolbar.png)

メニューから、以下のプレビューモードのいずれかを選択します:

| ツールバーアイコン                               | CSSプレビューモード | 説明                                                               |
| --------------------------------------- | ----------- | ---------------------------------------------------------------- |
| ![](../assets/en/FormEditor/cssNo.png)  | なし          | CSS の値はフォームに適用されず、CSS の値やアイコンはプロパティリストに表示されません。                  |
| ![](../assets/en/FormEditor/cssWin.png) | Windows     | Windowsプラットフォーム用の CSS値がフォームに適用されます。 プロパティリストに CSSの値とアイコンが表示されます。 |
| ![](../assets/en/FormEditor/cssMac.png) | macOS       | macOSプラットフォーム用の CSS値がフォームに適用されます。 プロパティリストに CSSの値とアイコンが表示されます。   |

> アプリケーション環境設定のフォームページで、デフォルトで表示するバッジを設定できます。

The CSS preview mode reflects the priority order applied to style sheets vs JSON attributes as defined in the [JSON vs Style Sheet](stylesheets.html#json-vs-style-sheet) section.

CSSプレビューモードを選択すると、オブジェクトは自動的にスタイルシートで定義されたスタイル (あれば) で表示されます。

> 選択したオブジェクトは異なるビューに属していることがあります。

### プロパティリストの CSSサポート

CSSプレビューモードでは、スタイルシートで属性値が定義されている場合、その属性名が表示され、その横に CSSアイコンが表示されます。 たとえば、このスタイルシートで定義されている属性値は:

```4d
.myButton {
font-family: comic sans;
font-size: 14;
stroke: #800080;
}
```

プロパティリストに CSSアイコンとともに表示されます:

![](../assets/en/FormEditor/cssPpropList.png)

An attribute value defined in a style sheet can be overridden in the JSON form description (except if the CSS includes the `!important` declaration, see below). In this case, the Property List displays the JSON form value in **bold**. You can reset the value to its style sheet definition with the **Ctrl + click** (Windows) or **Command + click** (macOs) shortcuts.

> If an attribute has been defined with the `!important` declaration for a group, an object within a group, or any object within a selection of multiple objects, that attribute value is locked and cannot be changed in the Property List.

#### プロパティリスト CSSアイコン

| アイコン                                          | 説明                                                                                                    |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| ![](../assets/en/FormEditor/cssIcon.png)      | 属性値がスタイルシートで定義されていることを示します                                                                            |
| ![](../assets/en/FormEditor/cssImportant.png) | Indicates that an attribute value has been defined in a style sheet with the `!important` declaration |
| ![](../assets/en/FormEditor/cssIconMixed.png) | グループまたは複数のオブジェクトの選択項目のうち、少なくとも 1つのオブジェクトについて、スタイルシートで定義された属性値が他のオブジェクトと異なる場合に表示されます。                  |

## リストボックスビルダー

You can create new entity selection list boxes quickly with the **List box builder**. 作成したリストボックスは、すぐに使用することも、フォームエディターで編集することもできます。

リストボックスビルダーでは、いくつかの簡単な操作で、エンティティセレクション型リストボックスの作成と入力ができます。

### リストボックスビルダーを使用する

1. フォームエディターツールバーのリストボックスビルダーアイコンをクリックします:

![](../assets/en/FormEditor/listboxBuilderIcon.png)

リストボックスビルダーが表示されます:

![](../assets/en/FormEditor/listboxBuilder.png)

2. Select a table from the **Table** dropdown list:

![](../assets/en/FormEditor/listboxBuilderTable.png)

3. Select the fields for the list box in the **Fields** area:

![](../assets/en/FormEditor/listboxBuilderFields.png)

デフォルトでは、すべてのフィールドが選択されています。 You can select or deselect fields individually or use **Ctrl+click** (Windows) or **Cmd+click** (macOS) to select or deselect them all at once.

また、フィールドをドラッグ＆ドロップすることで、フィールドの順番を変更することができます。

4. リストボックスをエンティティセレクションと紐づけるための式があらかじめ入力されています:

![](../assets/en/FormEditor/listboxBuilderExpression.png)

この式は必要に応じて変更できます。

5. Clicking on the **Copy** button will copy the expression for loading all records into memory:

![](../assets/en/FormEditor/listboxBuilderCode.png)

6. Click the the **Build widget** button to create the list box.

![](../assets/en/FormEditor/listboxBuilderBuild.png)

結果のリストボックスです:

![](../assets/en/FormEditor/listboxBuilderListbox.png)

## フィールドを挿入

The **Insert fields** button inserts all fields (except object and blob type fields) of the form table in the form, along with their labels and with respect to interface standards. このウィザードは、基本的な入力フォームやリストフォームを作成するためのショートカットです。

The **Insert fields** button is only available with table forms.

結果のレイアウトは、フォームタイプによって異なります:

- **Detail form**: clicking on the **Insert fields** button generates a form with a page design:

![](../assets/en/FormEditor/insertFields2.png)

- **List form**: clicking on the **Insert fields** button generates a list form design with fields organized on a single line and area markers:

![](../assets/en/FormEditor/insertFields3.png)

## バッジ

フォームエディターではバッジを使用してオブジェクトプロパティの表示を容易にできます。 バッジは、フォームのツールバーで選択します:

![](../assets/en/FormEditor/shields.png)

This function works as follows: Each shield is associated with a property (for example, **Views**, which means the object “is in the current view”). バッジを有効にすると、4D はバッジとして選択されたプロパティが割り当てられているフォームオブジェクトの左上に小さなアイコン (バッジ) を表示します。

![](../assets/en/FormEditor/shield.png)

### バッジを使用する

To activate a shield, click the _Shield_ icon from the toolbar until the desired shield is selected. また、ボタンの右側をクリックして表示されるメニューから、バッジの種類を直接選択することもできます。

If you don't want to display shields, select **No Shields** in the selection menu.

> <a href="#ビューを使い始める前に">カレントビュー</a> は非表示にできません。

### 各バッジの説明

各バッジの説明は以下の通りです:

| アイコン                                            | 名称                              | 表示                                                                                                                   |
| ----------------------------------------------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| ![](../assets/en/FormEditor/objectMethod.png)   | オブジェクトメソッド                      | オブジェクトメソッドが割り当てられたオブジェクト                                                                                             |
| ![](../assets/en/FormEditor/standardAction.png) | 標準アクション                         | 標準アクションが割り当てられたオブジェクト                                                                                                |
| ![](../assets/en/FormEditor/resizing.png)       | リサイズ                            | リサイズプロパティが 1つ以上割り当てられたオブジェクトについて、カレントプロパティの組み合わせを表します                                                                |
| ![](../assets/en/FormEditor/entryOrder.png)     | 入力順                             | 入力可能なオブジェクトの入力順を表示します                                                                                                |
| ![](../assets/en/FormEditor/viewNumber.png)     | カレントビュー                         | カレントビュー内にあるオブジェクト                                                                                                    |
| ![](../assets/en/FormEditor/cssShield.png)      | [Style Sheet](stylesheets.html) | 1つ以上の属性値がスタイルシートにより上書きされたオブジェクト                                                                                      |
| ![](../assets/en/FormEditor/filter.png)         | フィルター                           | 入力フィルターが割り当てられた入力可オブジェクト                                                                                             |
| ![](../assets/en/FormEditor/helpTip.png)        | ヘルプTips                         | ヘルプTips が割り当てられたオブジェクト                                                                                               |
| ![](../assets/en/FormEditor/localized.png)      | ローカライズ済み                        | ラベルに参照が割り当てられたオブジェクト (“:”で始まるラベル)。 参照はリソース (STR#) または XLIFFタイプ |
| ![](../assets/en/FormEditor/noShields.png)      | バッジなし                           | バッジは表示されません                                                                                                          |

## オブジェクトビュー

フォームエディターでは、必要に応じて表示/非表示が可能な異なるビューにそれぞれオブジェクトを配置することで、複雑なフォーム作成が容易になります。

たとえば、タイプごと (フィールド、変数、スタティックオブジェクト等) にオブジェクトを異なるビューに分けることができます。 サブフォームやプラグインエリアを含むすべてのタイプのオブジェクトをビューに含めることができます。

フォームごとのビューの数に制限はありません。 必要なだけ、ビューを作成することができます。 それぞれのビューごとに、表示/非表示とロックが切り換えられます。

ビューの管理はビューパレットを使用しておこないます。

![](../assets/en/FormEditor/viewEditor.png)

### ビューパレットの表示

ビューパレットを表示するには、次の 3つの方法があります:

- **Toolbar**: Click on the Views icon in the Form Editor toolbar. (1つ以上のオブジェクトがデフォルトビュー以外のビューに属している場合、このアイコンは塗り潰し表示されます)。

|                        デフォルトビューのみ                       |                        追加のビューあり                       |
| :-----------------------------------------------------: | :---------------------------------------------------: |
| ![](../assets/en/FormEditor/icon.png "No views in use") | ![](../assets/en/FormEditor/icon2.png "Views in use") |

- **Context menu** (form or object): Right-click anywhere in the Form Editor or an object, and select **Current View**

![](../assets/en/FormEditor/contextMenu.png)

The current view is indicated with a check mark (_e.g._, "Work Address" in the image above)

- **Form menu**: Click on the **Form** menu and select **View List**

![](../assets/en/FormEditor/formMenu.png)

### ビューを使い始める前に

ビューを使用する前に知っておくべき重要なことをいくつか紹介します:

- **Context of use**: Views are a purely graphic tool which can only be used in the Form Editor; you cannot access views programmatically or in the Application environment.

- **Views and pages**: Objects of the same view can belong to different form pages; only objects of the current page (and of page 0 if it is visible) can be displayed, regardless of the view configuration.

- **Views and levels**: Views are independent of object levels; there is no display hierarchy among different views.

- **Views and groups**: Only objects belonging to the current view can be grouped.

- **Current and Default** views: The Default view is the first view of a form and cannot be deleted; the Current view is the view that is being edited and the name is displayed in bold text.

### ビュー管理

#### ビューの作成

フォーム内で作成されたオブジェクトは、そのフォームの最初のビュー ("View 1") に配置されます。 The first view is **always** the default view, indicated by (Default) after the name. The view's name can be changed (see [Renaming views](#renaming-views)), however it remains the default view.

![](../assets/en/FormEditor/createView.png)

ビューを追加するには 2つの方法があります。

- Click on the **Add a new view** button at the bottom of the View palette:

![](../assets/en/FormEditor/addView.png)

- Right-click on an existing view and select **Insert view**:

![](../assets/en/FormEditor/addView2.png)

ビューの数に制限はありません。

#### ビューの名称変更

デフォルトでは、ビューの名前は "View" + ビュー番号となっていますが、可読性のためまたは必要性に応じて、これらの名前を変更することができます。

ビューを削除するには、以下のいずれかの方法があります:

- ビュー名を直接ダブルクリックする (ビューが選択されます)。 すると、名前が編集可能になります:

![](../assets/en/FormEditor/rename.png)

- ビューの名前を右クリックする。 すると、名前が編集可能になります:

![](../assets/en/FormEditor/rename2.png)

#### ビューの並べ替え

ビューパレット内のビューをドラッグ＆ドロップすることで、ビューの表示順を変更することができます。

ただし、デフォルトのビューは変更されません:

![](../assets/en/FormEditor/reorderView.png)

#### ビューの削除

ビューを削除するには、以下のいずれかの方法があります:

- Click on the **Delete the selected view** button at the bottom of the View palette:

![](../assets/en/FormEditor/deleteView.png)

- Right-click on the view name, and select **Delete View**:

![](../assets/en/FormEditor/deleteView2.png)

> <a href="#ビューを使い始める前に">カレントビュー</a> はロックできません。

### ビューを使用する

ビューを作成したら、ビューパレットを使用して以下のことがおこなえます:

- ビューにオブジェクトを追加する。
- オブジェクトを他のビューに移動する。
- 同じビュー内の全オブジェクトを 1クリックで選択する。
- ビューごとに表示/非表示を切り替える。
- ビューのオブジェクトをロックする。

#### ビューにオブジェクトを追加する

1つのオブジェクトは、1つのビューにのみ属することができます。

To create an object in another view, simply select the view in the View palette (prior to creating the object) by clicking its name (an Edit icon is displayed for the [Current view](#before-you-begin) and the name appears in bold text):

![](../assets/en/FormEditor/addObject.png)

#### ビュー間のオブジェクト移動

1つ以上のオブジェクトを他のビューに移動することもできます。 これをおこなうには、ビューを変更したいオブジェクトをフォーム上で選択します。 それらのオブジェクトが属するビューが、ビューリスト上に記号で示されます:

![](../assets/en/FormEditor/symbol.png)

> 選択したオブジェクトは異なるビューに属していることがあります。

Simply select the destination view, right-click, and select **Move to**:

![](../assets/en/FormEditor/moveObject.png)

OR

Select the destination view of the selection and click **Move to** button at the bottom of the View palette:

![](../assets/en/FormEditor/moveObject3.png)

選択されているオブジェクトは新しいビューに移動されます:

![](../assets/en/FormEditor/objNewView.png)

また、オブジェクトのコンテキストメニューから、オブジェクトを別のビューに移動することもできます。 Right-click on the object, select **Move to view**, and select a view from the list of available views:

![](../assets/en/FormEditor/moveObject2.png)

> The [Current view](#before-you-begin) is shown in bold text.

#### ビューの全オブジェクトを選択する

フォームのカレントページ上で、同じビューに属するすべてのオブジェクトを選択できます。 一連のオブジェクトに同じ変更を適用する場合に、この機能は便利です。

To do this, right-click on the view in which you wish to select all the objects, click on **Select All**:

![](../assets/en/FormEditor/selectAll.png)

ビューパレットの下部にある <strong x-id="1">カレントビューの全てのオブジェクトを選択</strong> ボタンを使用することもできます。

![](../assets/en/FormEditor/selectAll2.png)

#### ビューのオブジェクトを表示/非表示にする

フォームのカレントページ上で、ビューに属するオブジェクトの表示/非表示を切り替えることができます。 この方法で、フォームの特定オブジェクトに集中して操作することができます。

By default, all views are shown, as indicated by the _Show/Hide_ icon:

![](../assets/en/FormEditor/showHide.png)

To hide a view, click the _Show/Hide_ icon. アイコンがグレーになり、そのビューに属するオブジェクトが非表示となります:

![](../assets/en/FormEditor/hidden.png)

> The [Current view](#before-you-begin) cannot be hidden.

To show a view that is hidden, simply select it or click on the _Show/Hide_ icon for that view.

#### ビューのオブジェクトをロックする

ビューのオブジェクトをロックすることができます。 ロックされたオブジェクトは選択・変更・削除できなくなります。 Once locked, an object cannot be selected by a click, a rectangle, or the **Select Similar Objects** command of the context menu. この機能は、操作ミスを防ぐのに役立ちます。

By default, all views are unlocked, as indicated by the _Lock/Unlock_ icon next to each view:

![](../assets/en/FormEditor/lockUnlock.png)

To lock the objects of a view, click the _Lock/Unlock_ icon. 南京錠が閉まり、ビューがロックされます:

![](../assets/en/FormEditor/locked.png)

> The [Current view](#before-you-begin) cannot be locked.

To unlock a view that is locked, simply select it or click on the _Lock/Unlock_ icon for that view.

## 拡大

カレントフォームを拡大/縮小表示することができます。 これをおこなうにはツールバーの虫眼鏡をクリックするか、拡大率を直接クリックします。拡大/縮小率は 50%, 100%, 200%, 400% そして 800%です。

![](../assets/en/FormEditor/zoom.png)

- 虫眼鏡ボタンをクリックすると、カーソルも虫眼鏡に変わります。 フォーム中をクリックすれば拡大表示され、Shiftキーを押しながらクリックすれば縮小表示されます。
- 拡大率バーをクリックすると、即座に表示が変更されます。

拡大/縮小表示中もフォームエディターの機能は利用できます (\*)。

(\*) 技術的な理由から、フォームエディターがズームモードの時にはリストボックスの要素 (ヘッダー、カラム、フッター) を選択することはできません。
