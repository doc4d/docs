---
id: windowSize
title: ウィンドウサイズ
---

## 固定高さ

このオプションを選択するとウィンドウの高さが固定され、ユーザーは変更できなくなります。

このオプションを選択しない場合、フォームのウィンドウの高さを変更することができます。 In this case, the [Minimum Height and Maximum Height](#maximum-height-minimum-height) properties can be used to determine the resizing limits.

#### JSON 文法

| 名称            | データタイプ | とりうる値               |
| ------------- | ------ | ------------------- |
| windowSizingY | string | "fixed", "variable" |

---&#x20;

## 固定幅

このオプションを選択するとウィンドウの幅が固定され、ユーザーは変更できなくなります。

このオプションを選択しない場合、フォームのウィンドウの高さを変更することができます。 In this case, the [Minimum Width and Maximum Width](#maximum-width-minimum-width) properties can be used to determine the resizing limits.

#### JSON 文法

| 名称            | データタイプ | とりうる値               |
| ------------- | ------ | ------------------- |
| windowSizingX | string | "fixed", "variable" |

---&#x20;

## 最大高さ, 最小高さ

Maximum and minimum height (in pixels) of a resizeable form window if the [Fixed Height](#fixed-height) option is not set.

##### JSON 文法

| 名称              | データタイプ | とりうる値 |
| --------------- | ------ | ----- |
| windowMinHeight | number | 整数値   |
| windowMaxHeight | number | 整数値   |

## 最大幅, 最小幅

Maximum and minimum width (in pixels) of a resizeable form window if the [Fixed Width](#fixed-width) option is not set.

#### JSON 文法

| 名称             | データタイプ | とりうる値 |
| -------------- | ------ | ----- |
| windowMinWidth | number | 整数値   |
| windowMaxWidth | number | 整数値   |
