---
id: propertiesResizingOptions
title: リサイズオプション
---

## カラム自動リサイズ

When this property is enabled (`rightToLeft` value in JSON), list box columns are automatically resized along with the list box, within the limits of the [minimum](properties_CoordinatesAndSizing.md#minimum-width) and [maximum](properties_CoordinatesAndSizing.md#maximum-width) widths defined.

When this property is disabled (`legacy` value in JSON), only the rightmost column of the list box is resized, even if its width exceeds the maximum value defined.

### カラムの自動リサイズの仕組み

- As the list box width increases, its columns are enlarged, one by one, starting from right to left, until each reaches its [maximum width](properties_CoordinatesAndSizing.md#maximum-width). Only columns with the [Resizable](#resizable) property selected are resized.

- The same procedure applies when the list box width decreases, but in reverse order (_i.e._, columns are resized starting from left to right). When each column has reached its [minimum width](properties_CoordinatesAndSizing.md#minimum-width), the horizontal scroll bar becomes active again.

- Columns are resized only when the horizontal scroll bar is not "active"; _i.e._, all columns are fully visible in the list box at its current size. **Note**: If the horizontal scroll bar is hidden, this does not alter its state: a scroll bar may still be active, even though it is not visible.

- すべての列が最大幅に到達すると、これらはそれ以上拡大されず、余分な空白を埋める形で空の列が右に追加されます。 この余白カラムがあるときにリストボックスの幅を縮小させた場合、余白カラムから先に縮小されていきます。

![](../assets/en/FormObjects/property_columnAutoResizing.png)

#### 余白カラムについて

余白カラムの見た目は既存の列と同じになります。既存のリストボックスカラムにヘッダー/フッターがある場合には余白カラムにもこれらの要素があり、同じ背景色が適用されます。

The fake header and/or footer can be clicked but this does not have any effect on the other columns (e.g.: no sort is performed); nevertheless, the `On Clicked`, `On Header Click` and `On Footer Click` events are generated accordingly.

If a cell in the fake column is clicked, the [LISTBOX GET CELL POSITION](https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-GET-CELL-POSITION.301-4311145.en.html) command returns "X+1" for its column number (where X is the number of existing columns).

#### JSON 文法

| 名称           | データタイプ | とりうる値                   |
| ------------ | ------ | ----------------------- |
| resizingMode | string | "rightToLeft", "legacy" |

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## 横方向サイズ変更

このプロパティは、ユーザーがフォームの幅をサイズ変更したときの、当該オブジェクトの挙動を指定します。 It can also be set dynamically by the `OBJECT SET RESIZING OPTIONS` language command.

次の値が提供されています:

| オプション | JSON 値  | 戻り値                                            |
| ----- | ------- | ---------------------------------------------- |
| 拡大    | "grow"  | ユーザーがウィンドウの幅を変更すると、オブジェクトの幅にも同じ割合を適用します。       |
| 移動    | "move"  | ユーザーがウィンドウの幅を変更すると、幅の増加分と同じだけオブジェクトを左か右に移動します。 |
| なし    | "fixed" | フォームサイズが変更されても、オブジェクトは固定されたままです。               |

> This property works in conjunction with the [Vertical Sizing](#vertical-sizing) property.

#### JSON 文法

| 名称      | データタイプ | とりうる値                   |
| ------- | ------ | ----------------------- |
| sizingX | string | "grow", "move", "fixed" |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md#overview)

---

## 縦方向サイズ変更

このプロパティは、ユーザーがフォームの高さをサイズ変更したときの、当該オブジェクトの挙動を指定します。 It can also be set dynamically by the `OBJECT SET RESIZING OPTIONS` language command.

次の値が提供されています:

| オプション | JSON 値  | 戻り値                                              |
| ----- | ------- | ------------------------------------------------ |
| 拡大    | "grow"  | ユーザーがウィンドウの高さを変更すると、オブジェクトの高さにも同じ割合を適用します。       |
| 移動    | "move"  | ユーザーがウィンドウの高さを変更すると、高さの変更分と同じだけオブジェクトを上か下に移動します。 |
| なし    | "fixed" | フォームサイズが変更されても、オブジェクトは固定されたままです。                 |

> This property works in conjunction with the [Horizontal Sizing](#horizontal-sizing) property.

#### JSON 文法

| 名称      | データタイプ | とりうる値                   |
| ------- | ------ | ----------------------- |
| sizingY | string | "grow", "move", "fixed" |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md#overview)

---

## 以降のオブジェクトを移動する

プロパティを適用するとスプリッターオブジェクトは "プッシャー" になり、そのオブジェクトの右側 (垂直スプリッター) または下側 (水平スプリッター) にある他のオブジェクトは、スプリッターと一緒に押し出されて移動します。

Here is the result of a “pusher” splitter being moved:
![](../assets/en/FormObjects/splitter_pusher1.png)

![](../assets/en/FormObjects/splitter_pusher3.png)

スプリッターに対してこのプロパティを指定しない場合、結果は次のようになります:

![](../assets/en/FormObjects/splitter_pusher2.png)

#### JSON 文法

| 名称           | データタイプ |                                とりうる値                                |
| :----------- | :----: | :-----------------------------------------------------------------: |
| splitterMode | string | "move" (プッシャー), "resize" (標準) |

#### 対象オブジェクト

[Splitter](splitters.md)

---

## サイズ変更可

このオプションが選択されていると、ユーザーはヘッダーエリアの右側をドラッグすることで列のサイズを変更できます。

#### JSON 文法

| 名称        |  データタイプ |      とりうる値      |
| :-------- | :-----: | :-------------: |
| resizable | boolean | "true", "false" |

#### 対象オブジェクト

[List Box Column](listbox_overview.md#list-box-columns)
