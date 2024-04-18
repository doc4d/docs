---
id: propertiesTextAndPicture
title: テキスト、ピクチャー
---

## 背景パス名

オブジェクトの背景として使用するピクチャーのパスを指定します。 If the object uses an [icon](#picture-pathname) with [different states](#number-of-states), the background picture will automatically support the same number of states.

The pathname to enter is similar as for the [Pathname property for static pictures](properties_Picture.md#pathname).

#### JSON 文法

| 名称                      | データタイプ | とりうる値                                                       |
| ----------------------- | ------ | ----------------------------------------------------------- |
| customBackgroundPicture | string | POSIX シンタックスの相対パス。 style プロパティの "custom" オプションと併用する必要があります。 |

#### 対象オブジェクト

[Custom Button](button_overview.md#custom) - [Custom Check Box](checkbox_overview.md#custom) - [Custom Radio Button](radio_overview.md#custom)

---

## ボタンスタイル

ボタンの外観を設定します。 スタイルによっては、特定のオプションが利用できなくなることもあります。

#### JSON 文法

|   名称  | データタイプ | とりうる値                                                                                                                                                              |
| :---: | :----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| style |  text  | "regular", "flat", "toolbar", "bevel", "roundedBevel", "gradientBevel", "texturedBevel", "office", "help", "circular", "disclosure", "roundedDisclosure", "custom" |

#### 対象オブジェクト

[Button](button_overview.md) - [Radio Button](radio_overview.md) - [Check Box](checkbox_overview.md) - [Radio Button](radio_overview.md)

---

## 横方向マージン

ボタン内側の横方向のマージンサイズ (ピクセル単位) を指定します。 マージンにより、ボタンアイコンとタイトルの領域を制限します。

背景ピクチャーに境界が含まれるような場合に、このパラメーターを利用します:

| マージン指定       | 例題                                                           |
| ------------ | ------------------------------------------------------------ |
| マージンなし       | ![](../assets/en/FormObjects/property_horizontalMargin1.png) |
| 13 ピクセルのマージン | ![](../assets/en/FormObjects/property_horizontalMargin2.png) |

> This property works in conjunction with the [Vertical Margin](#vertical-margin) property.

#### JSON 文法

| 名称            | データタイプ | とりうる値                                   |
| ------------- | ------ | --------------------------------------- |
| customBorderX | number | "カスタム" スタイルで利用可。 最小値: 0 |

#### 対象オブジェクト

[Custom Button](button_overview.md#custom) - [Custom Check Box](checkbox_overview.md#custom) - [Custom Radio Button](radio_overview.md#custom)

---

## アイコンの場所

フォームオブジェクトに対するアイコンの配置を指定します。

#### JSON 文法

| 名称            | データタイプ | とりうる値                   |
| ------------- | ------ | ----------------------- |
| iconPlacement | string | "none", "left", "right" |

#### 対象オブジェクト

[List Box Header](listbox_overview.md#list-box-headers)

---

## アイコンオフセット

ボタンクリック時のオフセット値をピクセル単位で指定します。

このプロパティを使用すると、指定したピクセル数だけボタンタイトルが右下へシフトされます。 この機能により、ボタンのクリック時に独自の3D 効果を適用することができます。

#### JSON 文法

| 名称           | データタイプ | とりうる値                  |
| ------------ | ------ | ---------------------- |
| customOffset | number | 最小値: 0 |

#### 対象オブジェクト

[Custom Button](button_overview.md#custom) - [Custom Check Box](checkbox_overview.md#custom) - [Custom Radio Button](radio_overview.md#custom)

---

## 状態の数

This property sets the exact number of states present in the picture used as the icon for a [button with icon](button_overview.md), a [check box](checkbox_overview.md) or a custom [radio button](radio_overview.md).

ピクチャーには 2～6 の状態を含めることができます。

- 2つの状態: false、true
- 3つの状態: false、true、ロールオーバー
- 4つの状態: false、true、ロールオーバー、無効
- 5つの状態 (チェックボックスとラジオボタンのみ): false、true、false時ロールオーバー, true時ロールオーバー、無効
- 6つの状態 (チェックボックスとラジオボタンのみ): false、true、false時ロールオーバー, true時ロールオーバー、false時無効、true時無効

:::note

- "false" とは "ボタン未クリック / 未選択"、あるいは "チェックボックス未選択" という意味です (変数値=0)
- "true" とは "ボタンクリック / 選択" あるいは "チェックボックス選択" という意味です (変数値=1)

:::

一つの状態につき、一つの画像を割り当てます。 ソースピクチャーでは、状態を表すアイコンは縦に並んでいなければなりません:

![](../assets/en/FormObjects/six-states.png)

#### JSON 文法

| 名称         | データタイプ | とりうる値                                     |
| ---------- | ------ | ----------------------------------------- |
| iconFrames | number | ソースピクチャーに含まれる状態の数。 最小値: 1 |

#### 対象オブジェクト

[Button](button_overview.md) (all styles except [Help](button_overview.md#help)) - [Check Box](checkbox_overview.md) - [Radio Button](radio_overview.md)

---

## ピクチャーパス名

オブジェクトのアイコンに使用するピクチャーのパスを指定します。

The pathname to enter is similar as for the [Pathname property for static pictures](properties_Picture.md#pathname).

> When used as icon for active objects, the picture must be designed to support a variable [number of states](#number-of-states).

#### JSON 文法

| 名称   | データタイプ  | とりうる値                           |
| ---- | ------- | ------------------------------- |
| icon | picture | POSIX シンタックスの相対パス、またはファイルシステムパス |

#### 対象オブジェクト

[Button](button_overview.md) (all styles except [Help](button_overview.md#help)) - [Check Box](checkbox_overview.md) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md)

---

## タイトル/ピクチャー位置

このプロパティはアイコンに対するボタンタイトルの相対的な位置を指定します。 ボタン内に、タイトルのみ (関連ピクチャーなし)、またはピクチャーのみ (タイトルなし) が含まれている場合、このプロパティは効果ありません。 デフォルトでは、ピクチャーの下部にタイトルが置かれます。

このプロパティの各種オプションの結果を次に示します:

| オプション        | 説明                                                        | 例題                                                                |
| ------------ | --------------------------------------------------------- | ----------------------------------------------------------------- |
| **Left**     | テキストはアイコンの左に置かれます。 ボタンの内容は右揃えされます。                        | ![](../assets/en/FormObjects/property_titlePosition_left.en.png)  |
| **Top**      | テキストはアイコンの上に置かれます。 ボタンの内容は中央揃えされます。                       | ![](../assets/en/FormObjects/property_titlePosition_top.png)      |
| **Right**    | テキストはアイコンの右に置かれます。 ボタンの内容は左揃えされます。                        | ![](../assets/en/FormObjects/property_titlePosition_right.png)    |
| **Bottom**   | テキストはアイコンの下に置かれます。 ボタンの内容は中央揃えされます。                       | ![](../assets/en/FormObjects/property_titlePosition_bottom.png)   |
| **Centered** | アイコンのテキストはボタン内で縦と横に中央揃えされます。 テキストをアイコンの中に組み込むような場合に利用します。 | ![](../assets/en/FormObjects/property_titlePosition_centered.png) |

#### JSON 文法

| 名称            | データタイプ | とりうる値                                      |
| ------------- | ------ | ------------------------------------------ |
| textPlacement | string | "left", "top", "right", "bottom", "center" |

#### 対象オブジェクト

[Button](button_overview.md) (all styles except [Help](button_overview.md#help)) - [Check Box](checkbox_overview.md) - [Radio Button](radio_overview.md)

---

## タイトルと画像を隣接させる

This property allows you to define whether the title and the picture of the button should be visually adjoined or separated, according to the [Title/Picture position](#titlepicture-position) and [Horizontal Alignment](#horizontal-alignment) properties.

ボタン内に、タイトルのみ (関連ピクチャーなし)、またはピクチャーのみ (タイトルなし) が含まれている場合、このプロパティは効果ありません。

ボタンがタイトルと画像を持つ場合、デフォルトでは、それらは隣接して表示されます。 The following graphic shows the effect of the `imageHugsTitle` property (true when property is enabled) with different button alignments:

![](../assets/en/FormObjects/hugs.png)

#### JSON 文法

| 名称             | データタイプ  | とりうる値                                  |
| -------------- | ------- | -------------------------------------- |
| imageHugsTitle | boolean | true (デフォルト), false |

#### 対象オブジェクト

[Button](button_overview.md) (all styles except Help) - [Check Box](checkbox_overview.md) (all styles except Regular, Flat, Disclosure and Collapse/Expand) - [Radio Button](radio_overview.md) (all styles except Regular, Flat, Disclosure and Collapse/Expand).

---

## 縦方向マージン

ボタン内側の縦方向のマージンサイズ (ピクセル単位) を指定します。 マージンにより、ボタンアイコンとタイトルの領域を制限します。

背景ピクチャーに境界が含まれるような場合に、このパラメーターを利用します。

> This property works in conjunction with the [Horizontal Margin](#horizontal-margin) property.

#### JSON 文法

| 名称            | データタイプ | とりうる値                                   |
| ------------- | ------ | --------------------------------------- |
| customBorderY | number | "カスタム" スタイルで利用可。 最小値: 0 |

#### 対象オブジェクト

[Custom Button](button_overview.md#custom) - [Custom Check Box](checkbox_overview.md#custom) - [Custom Radio Button](radio_overview.md#custom)

---

## ポップアップメニューあり

このプロパティを使用すると、ボタン内に逆三角形として表われるシンボルを表示することができます。このシンボルは、ポップアップメニューが付属することを示します:

![](../assets/en/FormObjects/property_popup.png)

このシンボルの外観と位置は、ボタンスタイルとプラットフォームによって変わります。

### リンクと分離

ポップアップメニューシンボルをボタンに付加する際に、リンクと分離という2つのオプションから選択することができます:

|                           リンク                           |                             分離                             |
| :-----------------------------------------------------: | :--------------------------------------------------------: |
| ![](../assets/en/FormObjects/property_popup_linked.png) | ![](../assets/en/FormObjects/property_popup_separated.png) |

> 実際に "分離" モードを利用できるかどうかは、ボタンスタイルとプラットフォームによって決まります。

それぞれのオプションにより、ボタンとポップアップメニューとの関係が指定されます:

- ポップアップメニューが **分離** している場合、ボタンの左部分をクリックするとボタンのカレントアクションが直接実行されます。このアクションは、ボタンの右側からアクセスできるポップアップメニューを使用して変更することができます。
- ポップアップメニューが **リンク** している場合、ボタンをクリックしてもポップアップメニューが表示されるだけです。 このポップアップメニュー上のアクションを選択しないと、実行はおこなわれません。

:::info

Refer to the [`On Alternative Click` event description](../Events/onAlternativeClick.md) for more information on the handling of events in this case.

:::

### ポップアップメニューの管理

"ポップアップメニューあり" プロパティは、ボタンのグラフィック面だけを管理するという点に注意が必要です。 The display of the pop-up menu and its values must be handled entirely by the developer, more particularly using `form events` and the [`Dynamic pop up menu`](https://doc.4d.com/4dv19R7/help/command/en/page1006.html) and [`Pop up menu`](https://doc.4d.com/4dv19R7/help/command/en/page542.html) commands.

#### JSON 文法

| 名称             | データタイプ | とりうる値                                                |
| :------------- | ------ | ---------------------------------------------------- |
| popupPlacement | string | <li>"none"</li><li>"linked"</li><li>"separated"</li> |

#### 対象オブジェクト

[Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Circle Button](button_overview.md#circle) - [Custom](button_overview.md#custom)
