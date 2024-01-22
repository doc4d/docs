---
id: buttonOverview
title: ボタン
---

A button is an active object that can be assigned an action (_e.g._, a database task or an interface function) to perform when a user clicks on it.

![](../assets/en/FormObjects/button_regular.png)

割り当てられたスタイルやアクションに応じて、ボタンはさまざまな役割を果たします。 たとえば、ユーザーがアンケートやフォーム内を移動したり、選択したりといった操作を可能にします。 設定によって、ボタンをワンクリックすることでコマンド実行することもできれば、複数回クリックすることで望む結果を得られるようにすることもできます。

## ボタンの使用

The actions assigned to buttons can originate from predefined [standard actions](properties_Action.md#standard-action) or from custom object methods. 典型的なアクションの例は、レコードの受け入れ・削除・編集キャンセルのほか、データのコピー / ペースト、複数ページあるフォームにおけるページ移動、サブフォームのレコード操作、テキストエリアのフォント属性の操作、などです。

フォーム実行時、標準アクションが設定されたボタンは必要に応じてグレー表示されます。 For example, if the first record of a table is displayed, a button with the `firstRecord` standard action would appear dimmed.

標準アクションとして提供されていない動作をボタンに実行させたい場合には、標準アクションのフィールドは空欄にしておき、ボタンのアクションを指定するオブジェクトメソッドを書きます For more information about object methods and how to create and associate them, see [Using object methods](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-object-methods.300-4163733.en.html).
Normally, you would activate the `On Clicked` event and the method would run only when the button is clicked. どのタイプのボタンにもメソッドを割り当てることができます。

The [variable](properties_Object.md#variable-or-expression) associated with a button is automatically set to **0** when the form is executed for the first time in Design or Application mode. When the user clicks a button, its variable is set to **1**.

> ボタンには標準アクションとメソッドの両方を割り当てることもできます。 この場合、標準アクションによってボタンが無効化されていなければ、標準アクションより先にメソッドが実行されます。

## ボタンスタイル

ボタンスタイルは、ボタンの外観を制御すると同時に、提供されるプロパティをも決定します。 ボタンには、あらかじめ定義されたスタイルやポップアップメニューを割り当てることができます。 これらのプロパティや動作を組み合わせることで、多数のバリエーションが得られます。

With the exception of the [available properties](#supported-properties), many button objects are _structurally_ identical. 違いは、関連づけられた変数の処理にあります。

次の既定スタイルが提供されています:

### 通常

The Regular button style is a standard system button (_i.e._, a rectangle with a descriptive label) which executes code when a user clicks on it.

![](../assets/en/FormObjects/button_regular.png)

通常ボタンは、明るいグレーの背景に中央配置のラベルがデフォルトで付いています。 Windowsの場合は、通常ボタンの上にマウスオーバーすると、境界線色と背景色が変わります。 また、プラットフォームによって表現が異なりますが、クリック時にも背景色が変わるなどして、物理的なボタンを模倣します。

#### JSON 例:

```4d

	"myButton": {
		"type": "button",	//define the type of object
		"style":"regular",	//define the style of the button
		"defaultButton":"true"	//define button as the default choice
		"text": "OK",	//text to appear on the button
		"action": "Cancel", //action to be be performed 
		"left": 60,	 //left position on the form  
		"top": 160, //top position on the form 
	  	"width": 100,  //width of the button
		"height": 20 //height of the button
		}
```

Only the Regular and Flat styles offer the [Default Button](properties_Appearance.md#default-button) property.

### フラット

The Flat button style is a standard system button (_i.e._, a rectangle with a descriptive label) which executes code when a user clicks on it.

![](../assets/en/FormObjects/button_flat.png)

フラットボタンは、白の背景に中央配置のラベルがデフォルトで付いており、角が丸くなっています。 フラットボタンのグラフィック的な装飾は最小限であるため、印刷されるフォームでの使用に適しています。

#### JSON 例:

```4d

	"myButton": {
                "type": "button",	
                "style":"flat",	
                "defaultButton":"true"	
                "text": "OK",	
                "action": "Cancel", 
                "left": 60,			
                "top": 160,			
                "width": 100,	
                "height": 20	
                }
```

Only the Regular and Flat styles offer the [Default Button](properties_Appearance.md#default-button) property.

### ツールバー

ツールバースタイルのボタンは、主としてツールバーで使用するためのものです。 このスタイルには、複数の選択肢を提示するためのポップアップメニュー (逆三角形で示されます) を追加するオプションがあります。

ツールバーボタンは、透明の背景に中央配置のラベルがデフォルトで付いています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

- _Windows_ - the button is highlighted when it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button.

![](../assets/en/FormObjects/button_toolbar.png)

- _macOS_ - the highlight of the button never appears. "ポップアップメニューあり" プロパティを使用していると、ボタンの右側に三角形が表示されます。

#### JSON 例:

```4d
	"myButton": {
                "type": "button",	
                "style":"toolbar",	
                "text": "OK",		
                "popupPlacement":"separated"	
                "action": "Cancel", 	
                "left": 60,				
                "top": 160,				
                "width": 100,			
                "height": 20		
                }
```

### ベベル

The Bevel button style combines the appearance of the [Regular](#regular) (_i.e._, a rectangle with a descriptive label) style with the [Toolbar](#toolbar) style's pop-up menu property option.

ベベルボタンは、明るいグレーの背景に中央配置のラベルがデフォルトで付いています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

- _Windows_ - the button is highlighted. "ポップアップメニューあり" プロパティを使用していると、ボタンの右側に三角形が表示されます。

![](../assets/en/FormObjects/button_bevel.png)

- _macOS_ - the highlight of the button never appears. "ポップアップメニューあり" プロパティを使用していると、ボタンの右側に三角形が表示されます。

#### JSON 例:

```4d
	"myButton": {
                "type": "button",
                "style":"bevel",	
                "text": "OK",		
                "popupPlacement":"linked"	
                "action": "Cancel", 
                "left": 60,		
                "top": 160,		
                "width": 100,	
                "height": 20	
                }
```

### 角の丸いベベル

The Rounded Bevel button style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, the corners of the button may be rounded. As with the Bevel style, the Rounded Bevel style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's pop-up menu property option.

角の丸いベベルボタンは、明るいグレーの背景に中央配置のラベルがデフォルトで付いています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

- _Windows_ - the button is identical to the Bevel style. "ポップアップメニューあり" プロパティを使用していると、ボタンの右側に三角形が表示されます。

![](../assets/en/FormObjects/button_roundedbevel.png)

- _macOS_ - the corners of the button are rounded. "ポップアップメニューあり" プロパティを使用していると、ボタンの右側に三角形が表示されます。

#### JSON 例:

```4d
	"myButton": {
                "type": "button",
                "style":"roundedBevel",	
                "text": "OK",	
                "popupPlacement":"none"	/
                "action": "Cancel", 
                "left": 60,			
                "top": 160,	
                "width": 100,	
                "height": 20	
                }
```

### OS Xグラデーション

The OS X Gradient button style is nearly identical to the [Bevel](#bevel) style. As with the Bevel style, the OS X Gradient style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's pop-up menu property option.

OS Xグラデーションボタンは、明るいグレーの背景に中央配置のラベルがデフォルトで付いています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

- _Windows_ - the button is identical to the Bevel style. "ポップアップメニューあり" プロパティを使用していると、ボタンの右側に三角形が表示されます。

![](../assets/en/FormObjects/button_osxgradient.png)

- _macOS_ - the button is displayed as a two-tone system button. "ポップアップメニューあり" プロパティを使用していると、ボタンの右側に三角形が表示されます。

#### JSON 例:

```4d
	"myButton": {
                "type": "button",	
                "style":"gradientBevel",
                "text": "OK",	
                "popupPlacement":"linked"
                "action": "Cancel", 	
                "left": 60,		
                "top": 160,	
                "width": 100,	
                "height": 20	
                }
```

### OS Xテクスチャー

The OS X Textured button style is nearly identical to the [Bevel](#bevel) style but with a smaller size (maximum size is the size of a standard macOS system button). As with the Bevel style, the OS X Textured style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's pop-up menu property option.

デフォルトで、OS Xテクスチャーボタンの外観は次の通りです:

- _Windows_ - a standard system button with a light gray background with a label in the center. Vistaにおいては透明になる特別機能を持っています。

![](../assets/en/FormObjects/button_osxtextured.png)

- _macOS_ - a standard system button displaying a color change from light to dark gray. 高さは定義済みで、変更できません。

#### JSON 例:

```4d
	"myButton": {
                "type": "button",	
                "style":"texturedBevel",	
                "text": "OK",	
                "popupPlacement":"separated"	
                "action": "Cancel", 
                "left": 60,			
                "top": 160,		
                "width": 100,	
                "height": 20	
                }
```

### Office XP

The Office XP button style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's transparency and pop-up menu property option.

Office XPボタンの反転表示と背景のカラーはシステムカラーに基づいています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

- _Windows_ - its background only appears when the mouse rolls over it.

![](../assets/en/FormObjects/button_officexp.png)

- _macOS_ - its background is always displayed.

#### JSON 例:

```4d
	"myButton": {
                "type": "button",	
                "style":"office",
                "text": "OK",
                "popupPlacement":"none"	
                "action": "Cancel", 
                "left": 60,		
                "top": 160,	
                "width": 100,
                "height": 20	
                }
```

### ヘルプ

このスタイルはシステム標準のヘルプボタンを表示するために使用します。 デフォルトで、ヘルプボタンは丸の中に表示されたハテナマーク (疑問符) です。

![](../assets/en/FormObjects/button_help.png)

#### JSON 例:

```4d
	"myButton": {
                "type": "button",
                "style":"help",		
                "text": "OK",	
                "dropping": "custom", 
                "left": 60,	
                "top": 160,		
                "width": 100,	
                "height": 20	
                }
```

> The Help style does not support [Number of States](properties_TextAndPicture.md#number-of-states), [Picture pathname](properties_TextAndPicture.md#picture-pathname), and [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) basic properties.

### サークル

サークルスタイルのボタンは、円形のシステムボタンとして表示されます。 このボタンスタイルは macOS 用に用意されています。

![](../assets/en/FormObjects/button_circleM.png)

Windows の場合、サークルは表示されません。

#### JSON 例:

```
	"myButton": {
                "type": "button",	
                "style":"circular",	
                "text": "OK",	
                "dropping": "custom", 
                "left": 60,	
                "top": 160,		
                "width": 100,
                "height": 20	
                }
```

### カスタム

カスタムスタイルのボタンは、背景ピクチャーを使用できるほか、さまざまな追加パラメーターを管理することができます (アイコンオフセットやマージン)。

![](../assets/en/FormObjects/button_custom.png)

#### JSON 例:

```code
	"myButton": {
                "type": "button",	
                "style":"custom",	
                "text": "",	
                "customBackgroundPicture": "/RESOURCES/bkgnd.png",
                "icon": "/RESOURCES/custom.png",  
                "textPlacement": "center",
                "left": 60,	
                "top": 160,		
                "width": 100,	
                "height": 20
                }
```

## プロパティ一覧

すべてのボタンは次の基本プロパティを共有します:

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Droppable](properties_Action.md#droppable) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Image hugs title](properties_TextAndPicture.md#image-hugs-title)(1) - [Left](properties_CoordinatesAndSizing.md#left) - [Not rendered](properties_Display.md#not-rendered) - [Number of States](properties_TextAndPicture.md#number-of-states)(1) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname)(1) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position)(1) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) - [With pop-up menu](properties_TextAndPicture.md#with-pop-up-menu)(2)

> (1) Not supported by the [Help](#help) style.<br/>
> (2) Not supported by the [Help](#help), [Flat](#flat) and [Regular](#regular) styles.

Additional specific properties are available, depending on the [button style](#button-styles):

- Custom: [Background pathname](properties_TextAndPicture.md#backgroundPathname) - [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) - [Icon Offset](properties_TextAndPicture.md#icon-offset) - [Vertical Margin](properties_TextAndPicture.md#verticalMargin)
- Flat, Regular: [Default Button](properties_Appearance.md#default-button)
