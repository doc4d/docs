---
id: picturePopupMenuOverview
title: ピクチャーポップアップメニュー
---

ピクチャーポップアップメニューは、画像の二次元配列を表示するポップアップメニューです。 A picture pop-up menu can be used instead of a [picture button](pictureButton_overview.md). ピクチャーポップアップメニューで使用するピクチャーの作成方法は、ピクチャーボタン用のピクチャーと似ています。 The concept is the same as for [button grids](buttonGrid_overview.md), except that the graphic is used as a pop-up menu instead of a form object.

## ピクチャーポップアップメニューの使用

To create a picture pop-up menu, you need to [refer to a picture](properties_Picture.md#pathname). 次の例は、ピクチャーポップアップメニューからインタフェース言語を選ぶことができます。 各言語は対応する国旗で表わされています:

![](../assets/en/FormObjects/picturePopupMenu_example.png)

### プログラミング

ピクチャーポップアップメニューは、メソッドを使用して管理できます。 As with [button grids](buttonGrid_overview.md), variables associated with picture pop-up menus are set to the value of the selected element in the picture pop-up menu. 項目が選択されなければ、この値は 0 になります。 各ピクチャーには上の行から順に左から右へと番号が振られます。

### ページ指定アクション

You can assign the `gotoPage` [standard action](https://doc.4d.com/4Dv19R4/4D/19-R4/Standard-actions.300-5736871.en.html) to a picture pop-up menu. このアクションを選択すると、4D はピクチャー配列で選択されたピクチャー位置に相当するフォームのページを自動的に表示します。 要素は左から右、上から下に向かって番号が割り当てられます。

たとえば、ユーザーが3番目の要素をクリックすると、4D はカレントフォームの 3ページ目 (存在する場合) を表示します。
If you want to manage the effect of a click yourself, select `No action`.

## プロパティ一覧

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows)- [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
