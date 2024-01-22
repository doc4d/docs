---
id: checkboxOverview
title: チェックボックス
---

チェックボックスはボタンの一種で、バイナリ (true-false) データの入力や表示をおこないます。 Basically, it is either checked or unchecked, but a [third state](#three-states-check-box) can be defined.

![](../assets/en/FormObjects/checkbox.png)

Check boxes are controlled by methods or [standard actions](#using-a-standard-action). チェックボックスが選択されると、チェックボックスに割り当てられたメソッドが実行されます。 他のボタンと同じように、フォームが初めて開かれると、チェックボックスの変数は 0 に初期化されます。

チェックボックスは小さな四角形の右側にテキストを表示します。 This text is set in the [Title](properties_Object.md#title) property of the check box. You can enter a title in the form of an XLIFF reference in this area (see [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).

## チェックボックスの使用

A check box can be associated to a [variable or expression](properties_Object.md#variable-or-expression) of type integer or boolean.

- **integer:** if the box is checked, the variable has the value 1. チェックボックスが選択されていない場合の値は 0 です。 チェックボックスが 3番目の状態 (後述参照) のとき、変数値は 2 になります。
- **boolean:** if the box is checked, the variable has the value `True`. When not checked, it has the value `False`.

フォーム上のすべてのチェックボックスは選択/未選択のいずれかの状態にすることができます。 チェックボックスを複数使用することで、複数の候補を同時に選択できるようになります。

### スリーステートチェックボックス

Check box objects with [Regular](checkbox_overview.md#regular) and [Flat](checkbox_overview.md#flat) [button style](properties_TextAndPicture.md#button-style) accept a third state. この 3番目の状態は中間的な状態であり、一般的には表示のために用いられます。 たとえば、選択されたオブジェクトが複数あるうち、一部のオブジェクトにのみ特定のプロパティが存在することを表すのに使用されます。

![](../assets/en/FormObjects/checkbox_3states.png)

To enable this third state, you must select the [Three-States](properties_Display.md#three-states) property.

This property is only available for regular and flat check boxes associated with numeric [variables or expressions](properties_Object.md#variable-or-expression) — check boxes for Boolean expressions cannot use the [Three-States](properties_Display.md#three-states) property (a Boolean expression cannot be in an intermediary state).

チェックボックスが 3番目の状態になると、チェックボックスに関連付けられた変数は値2を返します。

> スリーステートチェックボックスは入力モードにおいて、チェックなし / チェック / 中間状態 / チェックなし、という順に状態表示を切り替えます。 一般的にこの中間状態は入力モードではあまり役に立たないため、2という値になった場合は、コード上で変数の値を強制的に 0 に設定し、チェックされた状態からチェックなしの状態へ直接移行します。

## 標準アクションの使用

You can assign a [standard action](properties_Action.md#standard-action) to a check box to handle attributes of text areas. For example, if you assign the `fontBold` standard action, at runtime the check box will manage the "bold" attribute of the selected text in the current area.

true/false ステータスで表すことのできるアクション ("checkable" アクション) のみがサポートされます:

| サポートされるアクション                        | 使用条件 (あれば) |
| ----------------------------------- | ----------------------------- |
| avoidPageBreakInsideEnabled         | 4D Write Proエリアのみ             |
| fontItalic                          |                               |
| fontBold                            |                               |
| fontLinethrough                     |                               |
| fontSubscript                       | 4D Write Proエリアのみ             |
| fontSuperscript                     | 4D Write Proエリアのみ             |
| fontUnderline                       |                               |
| font/showDialog                     | macOS のみ                      |
| htmlWYSIWIGEnabled                  | 4D Write Proエリアのみ             |
| section/differentFirstPage          | 4D Write Proエリアのみ             |
| section/differentLeftRightPages     | 4D Write Proエリアのみ             |
| spell/autoCorrectionEnabled         |                               |
| spell/autoDashSubstitutionsEnabled  | macOS のみ                      |
| spell/autoLanguageEnabled           | macOS のみ                      |
| spell/autoQuoteSubstitutionsEnabled | macOS のみ                      |
| spell/autoSubstitutionsEnabled      |                               |
| spell/enabled                       |                               |
| spell/grammarEnabled                | macOS のみ                      |
| spell/showDialog                    | macOS のみ                      |
| spell/visibleSubstitutions          |                               |
| visibleBackground                   | 4D Write Proエリアのみ             |
| visibleFooters                      | 4D Write Proエリアのみ             |
| visibleHeaders                      | 4D Write Proエリアのみ             |
| visibleHiddenChars                  | 4D Write Proエリアのみ             |
| visibleHorizontalRuler              | 4D Write Proエリアのみ             |
| visiblePageFrames                   | 4D Write Proエリアのみ             |
| visibleReferences                   |                               |
| widowAndOrphanControlEnabled        | 4D Write Proエリアのみ             |

For detailed information on these actions, please refer to the [Standard actions](properties_Action.md#standard-action) section.

## チェックボックスのボタンスタイル

Check boxes use [button styles](properties_TextAndPicture.md#button-style) to control a check box's general appearance as well as its available properties. チェックボックスには、あらかじめ定義されたスタイルを割り当てることができます。 これらのプロパティや動作を組み合わせることで、多数のバリエーションが得られます。

With the exception of the [available properties](#supported-properties), many check box objects are _structurally_ identical. 違いは、関連づけられた変数の処理にあります。

次の既定スタイルが提供されています:

### 通常

The Regular check box button style is a standard system check box (_i.e._, a rectangle with a descriptive title):

![](../assets/en/FormObjects/checkbox_regular.png)

#### JSON 例:

```
	"myCheckBox": {
		"type": "checkbox",	
		"style":"regular",
		"text": "Cancel",	
		"action": "Cancel", 	
		"left": 60,			
		"top": 160,		
		"width": 100,			
		"height": 20		
		"dataSourceTypeHint":"boolean"
		}
```

### フラット

フラットスタイルのチェックボックスでは、装飾が最小限に抑えられています。 このグラフィック的特性により、フラットスタイルは印刷フォームでの使用に適しています。

![](../assets/en/FormObjects/checkbox_flat.png)

#### JSON 例:

```
	"myCheckBox": {
			"type": "checkbox",	
			"style":"flat",
			"text": "Cancel",	
			"action": "cancel", 
			"left": 60,		
 			"top": 160,	
 			"width": 100,			
			"height": 20			
			}
```

### ツールバーボタン

チェックボックスのツールバーボタンスタイルは、主としてツールバーで使用するためのものです。

ツールバーボタンスタイルは、透明の背景にラベルが付いています。 It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).

チェックなし / チェック / ハイライト状態の例です:

![](../assets/en/FormObjects/checkbox_toolbar.png)

#### JSON 例:

```
	"myCheckBox": {
                "type": "checkbox",
                "style":"toolbar",	
                "text": "Checkbox",
				"icon": "/RESOURCES/File.png", 
				"iconFrames": 4 
                "left": 60,	
                "top": 160,	
                "width": 100,					
                "height": 20					
                }
```

### ベベル

The Bevel check box button style combines the appearance of the [Regular](#regular) button style (_i.e._, a rectangle with a descriptive title) with the [Toolbar Button](#toolbar-button) button style's behavior.

ベベルスタイルは、明るいグレーの背景にラベルが付いています。 It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).

チェックなし / チェック / ハイライト状態の例です:

![](../assets/en/FormObjects/checkbox_bevel.png)

#### JSON 例:

```
	"myCheckBox": {
                "type": "checkbox",	
                "style":"bevel",
                "text": "Checkbox",	 
 				"icon": "/RESOURCES/File.png", 
				"iconFrames": 4 
              	"left": 60,	
                "top": 160,	
                "width": 100,				
                "height": 20				
                }
```

### 角の丸いベベル

The Rounded Bevel check box button style is nearly identical to the [Bevel](#bevel) button style except, depending on the OS, the corners of the button may be rounded. As with the Bevel button style, the Rounded Bevel button style combines the appearance of the [Regular](#regular) button style with the [Toolbar Button](#toolbar-button) button style's behavior.

角の丸いベベルスタイルは、明るいグレーの背景にラベルが付いています。 It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).

macOS の例:

![](../assets/en/FormObjects/checkbox_roundedbevel_mac.png)

> On Windows, the Rounded Bevel button style is identical to the [Bevel](#bevel) button style.

#### JSON 例:

```4d
	"myCheckBox": {
                "type": "checkbox",	
                "style":"roundedBevel",	 
                "text": "Checkbox",	
 				"icon": "/RESOURCES/File.png", 
				"iconFrames": 4 
                "left": 60,	
                "top": 160,	
                "width": 100,			
                "height": 20			
                }
```

### OS Xグラデーション

The OS X Gradient check box button style is nearly identical to the [Bevel](#bevel) button style. As with the Bevel button style, the OS X Gradient button style combines the appearance of the [Regular](#regular) button style with the [Toolbar Button](#toolbar-button) button style's behavior.

OS X グラデーションスタイルは明るいグレーの背景にラベルが付いています。macOS 上では2トーンのシステムボタンとして表示されることがあります。 It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).

![](../assets/en/FormObjects/checkbox_osxgradient_mac.png)

> On Windows, this check box button style is identical to the [Bevel](#bevel) button style.

#### JSON 例:

```
	"myCheckBox": {
			"type": "checkbox",	
			"style":"gradientBevel", 
			"text": "Checkbox",	
			"icon": "/RESOURCES/File.png",
			"iconFrames": 4
			"left": 60,		
			"top": 160,		
			"width": 100,				
			"height": 20				
           }
```

### OS Xテクスチャー

The OS X Textured button style is similar to the [Bevel](#bevel) button style but with a smaller size (maximum size is the size of a standard macOS system button). As with the Bevel button style, the OS X Textured button style combines the appearance of the [Regular](#regular) button style with the [Toolbar Button](#toolbar-button) button style's behavior.

デフォルトで、OS Xテクスチャースタイルの外観は次の通りです:

- _Windows_ - a standard system button with a light blue background with a title in the center.

![](../assets/en/FormObjects/checkbox_osxtextured.png)

- _macOS_ - a standard system button. 高さは定義済みで、変更できません。

![](../assets/en/FormObjects/checkbox_osxtextured_mac.png)

#### JSON 例:

```
	"myCheckBox": {
			"type": "checkbox",	
			"style":"texturedBevel", 
			"text": "Checkbox",	
			"left": 60,	
			"top": 160,	
			"width": 100,					
			"height": 20					
			}
```

### Office XP

The Office XP button style combines the appearance of the [Regular](#regular) button style with the [Toolbar Button](#toolbar-button) button style's behavior.

Office XP スタイルのチェックボックスの反転表示と背景のカラーはシステムカラーに基づいています。 チェックボックスにマウスオーバーしたときの表示は OS によって異なります:

- _Windows_ - its background only appears when the mouse rolls over it. チェックなし / チェック / ハイライト状態の例です:

![](../assets/en/FormObjects/checkbox_officexp.png)

- _macOS_ - its background is always displayed. チェックなし / チェック状態の例です:

![](../assets/en/FormObjects/checkbox_officexp_mac.png)

#### JSON 例:

```
	"myCheckBox": {
                "type": "checkbox",	
                "style":"office",
                "text": "Checkbox",	 
                "action": "fontBold",
 				"icon": "/RESOURCES/File.png", 
				"iconFrames": 4 	
               "left": 60,	
                "top": 160,		
                "width": 100,			
                "height": 20			
                }
```

### 折りたたみ/展開

このチェックボックススタイルは標準の折りたたみ/展開アイコンを表示するのに使用します。 これらは階層リストで使用されます。

- _Windows_ - the icon looks like a [+] or a [-]

![](../assets/en/FormObjects/checkbox_collapse.png)

- _macOS_ - it looks like a triangle pointing right or down.

![](../assets/en/FormObjects/checkbox_collapse_mac.png)

:::info

The Collapse/Expand style is named "disclosure" in the [button style JSON Grammar](properties_TextAndPicture.md#button-style).

:::

#### JSON 例:

```
	"myCheckBox": {
                "type": "checkbox",	
                "style":"disclosure",
				"method": "m_collapse",
				"left": 60,	
                "top": 160,	
                "width": 100,			
                "height": 20			
                }
```

### 開示ボタン

開示ボタンスタイルが適用されたチェックボックスは macOS および Windowsにおいて、詳細情報の表示/非表示にするのに使われる標準的な開示ボタンとして描画されます。 値が 0 のときにはボタンの矢印が下向き、値が 1 のときは上向きになります。

- _Windows_

  ![](../assets/en/FormObjects/checkbox_disclosure.png)

- _macOS_

  ![](../assets/en/FormObjects/checkbox_disclosure_mac.png)

:::info

The Disclosure style is named "roundedDisclosure" in the [button style JSON Grammar](properties_TextAndPicture.md#button-style).

:::

#### JSON 例:

```
	"myCheckBox": {
                "type": "checkbox",		
                "style":"roundedDisclosure",	
				"method": "m_disclose",
                "left": 60,		
                "top": 160,	
                "width": 100,			
                "height": 20			
                }
```

### カスタム

カスタムスタイルのチェックボックスは、背景ピクチャーを使用できるほか、さまざまな追加パラメーターを管理することができます:

- [Background pathname](properties_TextAndPicture.md#backgroundPathname)
- [Icon Offset](properties_TextAndPicture.md#icon-offset)
- [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) and [Vertical Margin](properties_TextAndPicture.md#verticalMargin)

It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states), that can be used in conjunction with a [4-state](properties_TextAndPicture.md#number-of-states) [background picture](properties_TextAndPicture.md#backgroundPathname).

#### JSON 例:

```
	"myCheckbox": {
		"type": "checkbox",
		"style":"custom",
		"text": "OK", 
		"icon": "/RESOURCES/smiley.jpg", 
		"iconFrame": 4, 
		"customBackgroundPicture": "/RESOURCES/paper.jpg", 
		"iconOffset": 5, //custom icon offset when clicked
		"left": 60,	
		"top": 160,	
		"width": 100,		
		"height": 20,
		"customBorderX": 20,
		"customBorderY": 5
		}
```

## プロパティ一覧

すべてのチェックボックスは次の基本プロパティを共有します:

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Enterable](properties_Entry.md#enterable) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment)(1) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Image hugs title](properties_TextAndPicture.md#image-hugs-title)(2) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Number of States](properties_TextAndPicture.md#number-of-states)(2) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname)(2) - [Right](properties_CoordinatesAndSizing.md#right) - [Save value](properties_Object.md#save-value) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position)(2) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

> (1) Not supported by the [Regular](#regular) and [Flat](#flat) styles.<br/>
> (2) Not supported by the [Regular](#regular), [Flat](#flat), [Disclosure](#disclosure) and [Collapse/Expand](#collapseexpand) styles.

Additional specific properties are available, depending on the [button style](#button-styles):

- Custom: [Background pathname](properties_TextAndPicture.md#backgroundPathname) - [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) - [Icon Offset](properties_TextAndPicture.md#icon-offset) - [Vertical Margin](properties_TextAndPicture.md#verticalMargin)
- Flat, Regular: [Three-States](properties_Display.md#three-states)
