---
id: radiobuttonOverview
title: ラジオボタン
---

ラジオボタンは、ボタングループの中から1つを選択することができるオブジェクトです。

ラジオボタンは通常、小さな目玉状の円とテキストを表示します。 However, radio buttons can have [various appearances](#button-styles).

![](../assets/en/FormObjects/radio1.png)

ラジオボタンを選択するには二つの方法があります:

- ラジオボタンをクリックする
- when it has the focus and the user presses the **Space bar** key.

## ラジオボタンの設定

ラジオボタンは組織的な集合の中で使用されます。その集合のなかから一度にひとつのボタンしか選択できません。 In order to operate in a coordinated manner, a set of radio buttons must share the same [Radio Group](properties_Object.md#radio-group) property.

ラジオボタンの結果はメソッドを用いて管理します。 あらゆるボタンと同様に、フォームが初めて開かれる時ラジオボタンは 0 に初期化されています。 ラジオボタンが選択されると、ラジオボタンに割り当てられたメソッドが実行されます。 次の例では、ビデオ収集データベースでラジオボタンを使用し、レコーディングの速さ (SP、LP、EP) を入力します:

![](../assets/en/FormObjects/radio2.png)

グループのなかから 1つのラジオボタンを選択すると、そのボタンには 1 が代入され、グループ内の他のすべてのボタンには 0 が代入されます。 一度に1つのラジオボタンしか選択できません。

> You can associate [Boolean type expressions](properties_Object.md#variable-or-expression) with radio buttons. この場合、グループ内で選択されたラジオボタンの変数には true が代入され、残りのラジオボタンの変数には false が代入されます。

ラジオボタンオブジェクトに格納された値は (ブールフィールドの場合を除き) 自動保存されません。変数に格納されたラジオボタンの値はメソッドで管理しなければなりません。

## ボタンスタイル

Radio [button styles](properties_TextAndPicture.md#button-style) control radio button's general appearance as well as its available properties. ラジオボタンには、あらかじめ定義されたスタイルを割り当てることができます。 しかし、ラジオボタンが適切に動作するには、同じグループに所属するラジオボタンはすべて同じボタンスタイルに設定されている必要があります。

次の既定スタイルが提供されています:

### 通常

The Regular radio button style is a standard system button (_i.e._, a small bullseye with text) which executes code when a user clicks on it.

![](../assets/en/FormObjects/radio_regular.png)

通常スタイルのラジオボタンにマウスオーバーすると、"目玉" の色が変化します。

### フラット

The Flat radio button style is a standard system button (_i.e._, a small bullseye with text) which executes code when a user clicks on it.

![](../assets/en/FormObjects/radio_flat.png)

フラットスタイルでは、装飾が最小限に抑えられています。 フラットボタンのグラフィック的な装飾は最小限であるため、印刷されるフォームでの使用に適しています。

### ツールバー

ツールバースタイルのラジオボタンは、主としてツールバーで使用するためのものです。

ツールバーボタンは、透明の背景に中央配置のラベルがデフォルトで付いています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

- _Windows_ - the button is highlighted.

![](../assets/en/FormObjects/radio_toolbar.png)

- _macOS_ - the highlight of the button never appears.

### ベベル

The Bevel radio button style is similar to the [Toolbar](#toolbar) style's behavior, except that it has a light gray background and a gray outline. ボタンにマウスオーバーしたときの表示は OS によって異なります:

- _Windows_ - the button is highlighted.

![](../assets/en/FormObjects/radio_bevel.png)

- _macOS_ - the highlight of the button never appears.

### 角の丸いベベル

The Rounded Bevel button style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, the corners of the button may be rounded.

- _Windows_ - the button is identical to the [Bevel](#bevel) style.

- _macOS_ - the corners of the button are rounded.
  ![](../assets/en/FormObjects/roundedBevel.png)

### OS Xグラデーション

The OS X Gradient button style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, it may have a two-toned appearance.

- _Windows_ - the button is identical to the [Bevel](#bevel) style.

- _macOS_ - the button is displayed as a two-tone system button.

### OS Xテクスチャー

The OS X Textured radio button style is nearly identical to the [Toolbar](#toolbar) style except, depending on the OS, it may have a different appearance and does not display hover.

デフォルトで、OS Xテクスチャーボタンの外観は次の通りです:

- _Windows_ - a toolbar-like button with a label in the center and the background is always displayed.

- _macOS_ - a standard system button displaying a color change from light to dark gray. 高さは定義済みで、変更できません。

![](../assets/en/FormObjects/OSXTextured.png)

### Office XP

The Office XP button style combines the appearance of the [Regular](#regular) style (standard system button) with the [Toolbar](#toolbar) style's behavior.

Office XPボタンの反転表示と背景のカラーはシステムカラーに基づいています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

- _Windows_ - its background only appears when the mouse rolls over it.

![](../assets/en/FormObjects/radio_xp.png)

- _macOS_ - its background is always displayed.

### 折りたたみ/展開

このスタイルは標準の折りたたみ/展開アイコンを表示するのに使用します。 これらは階層リストで使用されます。 Windows では [+] または [-] のように表示されます。macOS では、右や下を指す三角として表示されます。

![](../assets/en/FormObjects/checkbox_collapse.png)

:::info

The Collapse/Expand style is named "disclosure" in the [button style JSON Grammar](properties_TextAndPicture.md#button-style).

:::

### 開示ボタン

開示ボタンスタイルが適用されると、詳細情報の表示/非表示にするのに使われる標準的な開示ボタンとして描画されます。 値が 0 のときにはボタンの矢印が下向き、値が 1 のときは上向きになります。

![](../assets/en/FormObjects/checkbox_disclosure.png)

:::info

The Disclosure style is named "roundedDisclosure" in the [button style JSON Grammar](properties_TextAndPicture.md#button-style).

:::

### カスタム

The Custom radio button style accepts a personalized background picture and allows managing additional parameters such as [icon offset](properties_TextAndPicture.md#icon-offset) and [margins](properties_TextAndPicture.md#horizontalMargin).

## プロパティ一覧

すべてのラジオボタンは次の基本プロパティを共有します:

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment)(1) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Image hugs title](properties_TextAndPicture.md#image-hugs-title)(2) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Number of States](properties_TextAndPicture.md#number-of-states)(2) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Radio Group](properties_Object.md#radio-group) - [Picture pathname](properties_TextAndPicture.md#picture-pathname)(2) - [Right](properties_CoordinatesAndSizing.md#right) - [Save value](properties_Object.md#save-value) - [Shortcut](properties_Entry.md#shortcut) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position)(2) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

> (1) Not supported by the [Regular](#regular) and [Flat](#flat) styles.<br/>
> (2) Not supported by the [Regular](#regular), [Flat](#flat), [Disclosure](#disclosure) and [Collapse/Expand](#collapseexpand) styles.

Additional specific properties are available depending on the [button style](#button-styles):

- Custom: [Background pathname](properties_TextAndPicture.md#backgroundPathname) - [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) - [Icon Offset](properties_TextAndPicture.md#icon-offset) - [Vertical Margin](properties_TextAndPicture.md#verticalMargin)
