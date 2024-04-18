---
id: WebFormItemClass
title: WebFormItem
---

`4D.WebFormItem` objects are properties of the [`4D.WebForm`](WebFormItemClass.md) object returned by the [`Web Form`](WebFormClass.md#web-form) command.

The `WebFormItem` class is detailed in the [Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass).

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R2 | 追加 |

</details>

### WebFormItem オブジェクト

|                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormItemClass.addCSSClass().Syntax -->](#addclass)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormItemClass.addCSSClass().Summary -->          |
| [<!-- INCLUDE #WebFormItemClass.hide().Syntax -->](#hide)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormItemClass.hide().Summary -->                            |
| [<!-- INCLUDE #WebFormItemClass.removeCSSClass().Syntax -->](#removeclass)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormItemClass.removeCSSClass().Summary --> |
| [<!-- INCLUDE #WebFormItemClass.show().Syntax -->](#show)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormItemClass.show().Summary -->                            |

### .hide()

<!-- REF #WebFormItemClass.hide().Syntax -->

**.hide**()<!-- END REF -->

<!-- REF #WebFormItemClass.hide().Params -->

| 引数 | タイプ |     | 説明         |
| -- | --- | :-: | ---------- |
|    |     |     | 引数を必要としません |

<!-- END REF -->

#### 説明

The `.hide()` function <!-- REF #WebFormItemClass.hide().Summary -->hides the component<!-- END REF -->.

For more information, please refer to the [`.hide()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#hide).

### .show()

<!-- REF #WebFormItemClass.show().Syntax -->

**.show**()<!-- END REF -->

<!-- REF #WebFormItemClass.show().Params -->

| 引数 | タイプ |     | 説明         |
| -- | --- | :-: | ---------- |
|    |     |     | 引数を必要としません |

<!-- END REF -->

#### 説明

The `.show()` function <!-- REF #WebFormItemClass.show().Summary -->makes the component visible<!-- END REF -->.

For more information, please refer to the [`.show()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#show).

### .addCSSClass()

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->

**.addCSSClass**(_className_ : string)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->

| 引数        | タイプ    |     | 説明                      |
| --------- | ------ | :-: | ----------------------- |
| className | string |  -> | コンポーネントに追加する CSSクラスの名前。 |

<!-- END REF -->

#### 説明

The `.addCSSClass` function <!-- REF #WebFormItemClass.addCSSClass().Summary -->adds the class specified in _className_ to the component<!-- END REF -->.

For more information, please refer to the [`.addCSSClass` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#addcssclass).

### .removeCSSClass()

<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->

**.removeCSSClass**(_className_: string)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->

| 引数        | タイプ    |     | 説明                       |
| --------- | ------ | :-: | ------------------------ |
| className | string |  -> | コンポーネントから削除する CSSクラスの名前。 |

<!-- END REF -->

#### 説明

The `.removeCSSClass()` function <!-- REF #WebFormItemClass.removeCSSClass().Summary -->removes the class specified in _className_ from the component<!-- END REF -->.

For more information, please refer to the [`.removeCSSClass()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#removecssclass).
