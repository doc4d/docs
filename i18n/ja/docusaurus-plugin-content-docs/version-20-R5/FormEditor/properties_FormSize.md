---
id: formSize
title: フォームサイズ
---

4D lets you set the size of both the form and the [window](properties_WindowSize.md). これらのプロパティは相互に依存しており、アプリケーションのインターフェースはこれらの相互作用によってもたらされます。

Size options depend on the value of the **Size based on** option.

---

## サイズを決めるもの

- **Automatic Size**: The size of the form will be that necessary to display all the objects, to which will be added the margin values (in pixels) entered in the [**Hor Margin**](#hor-margin) and [**Vert Margin**](#vert-margin) fields.

  You can choose this option when you want to use active objects placed in an offscreen area (_i.e._, outside the bounding rectangle of the window) with an automatic size window. このオプションを選択すると、これらのオブジェクトによりウィンドウサイズが変更されなくなります。

- **Set Size**: The size of the form will be based on what you enter (in pixels) in the [**Width**](#width) and [**Height**](#height) fields.

- `<object name>`: The size of the form will be based on the position of the selected form object. たとえば、表示されるエリアの右下部分に置かれているオブジェクトを選択した場合は、左上端が起点であり、右下端が選択したオブジェクトの右下端となる矩形にマージン値を加算したものがフォームサイズになります。

> For output forms, only the [**Hor margin**](#hor-margin) or [**Width**](#width) fields are available.

#### JSON 文法

| 名称             | データタイプ | とりうる値                        |
| -------------- | ------ | ---------------------------- |
| formSizeAnchor | string | フォームサイズを定義するために使用するオブジェクトの名前 |

---&#x20;

## 高さ

Height of the form (in pixels) when the [form size](#size-based-on) is **Set size**.

#### JSON 文法

| 名称     | データタイプ | とりうる値 |
| ------ | ------ | ----- |
| height | number | 整数値   |

---&#x20;

## 水平 マージン

Value to add (in pixels) to the right margin of the form when the [form size](#size-based-on) is **Automatic size** or `\<object name>`

この値は、ラベルエディターで使用されるフォームの右マージンも決定します。

#### JSON 文法

| 名称          | データタイプ | とりうる値 |
| ----------- | ------ | ----- |
| rightMargin | number | 整数値   |

---

## 垂直 マージン

Value to add (in pixels) to the bottom margin of the form when the [form size](#size-based-on) is **Automatic size** or `\<object name>`.

この値は、ラベルエディターで使用されるフォームの上マージンも決定します。

#### JSON 文法

| 名称           | データタイプ | とりうる値 |
| ------------ | ------ | ----- |
| bottomMargin | number | 整数値   |

---&#x20;

## 幅

Width of the form (in pixels) when the [form size](#size-based-on) is **Set size**.

#### JSON 文法

| 名称    | データタイプ | とりうる値 |
| ----- | ------ | ----- |
| width | number | 整数値   |
