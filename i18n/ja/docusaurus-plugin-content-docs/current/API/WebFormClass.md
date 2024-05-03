---
id: WebFormClass
title: WebForm
---

`WebForm` クラスには、Qodly の Webフォームコンポーネント (Webフォームの構成要素) を処理するための関数とプロパティが含まれています。 このクラスについては、[Qodly ドキュメンテーション](https://developer.qodly.com/docs/language/WebFormClass) (英語) で詳しく説明されています。

<details><summary>履歴</summary>

| リリース  | 内容                                                                           |
| ----- | ---------------------------------------------------------------------------- |
| 20 R6 | Added enableState() and disableState() |
| 20 R2 | 追加                                                                           |

</details>

### コマンドと関数

|                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormClass.componentName.Syntax -->](#componentname)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormClass.componentName.Summary -->  |
| [<!-- INCLUDE #WebFormClass.disableState().Syntax -->](#disablestate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormClass.disableState().Summary --> |
| [<!-- INCLUDE #WebFormClass.enableState().Syntax -->](#enablestate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormClass.enableState().Summary -->    |
| [<!-- INCLUDE #WebFormClass.setError().Syntax -->](#seterror)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormClass.setError().Summary -->             |
| [<!-- INCLUDE #WebFormClass.setMessage().Syntax -->](#setmessage)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormClass.setMessage().Summary -->       |
| [<!-- INCLUDE #WebFormClass.setWarning().Syntax -->](#setwarning)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormClass.setWarning().Summary -->       |
| [<!-- INCLUDE #_command_.Web Form.Syntax -->](#web-form)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #_command_.Web Form.Summary -->                       |
| [<!-- INCLUDE #_command_.Web Event.Syntax -->](#web-event)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #_command_.Web Event.Summary -->                    |

### _.componentName_

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](WebFormItemClass.md)<!-- END REF -->

#### 説明

Webフォームのコンポーネント (構成要素) とは、これらの Webフォームの<!-- REF #WebFormClass.componentName.Summary -->プロパティとして直接利用可能なオブジェクトです<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `.componentName` の説明](https://developer.qodly.com/docs/language/WebFormClass#componentname) を参照ください。

### .disableState()

<!-- REF #WebFormClass.disableState().Syntax -->

**.disableState**( _state_ : string)<!-- END REF -->

<!-- REF #WebFormClass.disableState().Params -->

| 引数    | タイプ    |     | 説明                                         |
| ----- | ------ | :-: | ------------------------------------------ |
| state | string |  -> | Name of state to disable from the web form |

<!-- END REF -->

#### 説明

The `.disableState()` function <!-- REF #WebFormClass.disableState().Summary -->disables the rendering of the _state_ in the current web form<!-- END REF -->.

This function does nothing if:

- the _state_ is currently not enabled in the web form,
- the _state_ does not exist for the web form.

If you [enable](#enablestate) or disable several states in the same user function, all modifications are sent at the same time to the client once the function ends.

For more information on web form states, please refer to [developer.qodly.com](https://developer.qodly.com/docs/studio/design-webforms/states).

### .enableState()

<!-- REF #WebFormClass.enableState().Syntax -->

**.enableState**( _state_ : string )<!-- END REF -->

<!-- REF #WebFormClass.enableState().Params -->

| 引数    | タイプ    |     | 説明                                      |
| ----- | ------ | :-: | --------------------------------------- |
| state | string |  -> | Name of state to enable on the web form |

<!-- END REF -->

#### 説明

The `.enableState()` function <!-- REF #WebFormClass.enableState().Summary -->enables the rendering of the _state_ in the current web form<!-- END REF -->.

This function does nothing if:

- the _state_ has already been enabled on the web form,
- the _state_ does not exist for the web form.

If you enable or [disable](#disablestate) several states within the same user function, all modifications are sent at the same time to the client once the function ends.

For more information on web form states, please refer to [developer.qodly.com](https://developer.qodly.com/docs/studio/design-webforms/states).

#### 例題

You enable a specific state named "wrongCredentials" in case of error in your login page:

```4d
Function authenticationError()
	If (Session.info.type#"remote")
		Web Form.enableState("wrongCredentials")
	End if
```

### .setError()

<!-- REF #WebFormClass.setError().Syntax -->

**.setError**( _msg_ : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->

| 引数  | タイプ    |     | 説明                   |
| --- | ------ | :-: | -------------------- |
| msg | string |  -> | Webフォームに表示するエラーメッセージ |

<!-- END REF -->

#### 説明

`.setError()` 関数は、<!-- REF #WebFormClass.setError().Summary -->_msg_ をエラーメッセージとして Webフォームに送信します<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `.setError()` の説明](https://developer.qodly.com/docs/language/WebFormClass#seterror) を参照ください。

### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->

**.setMessage**( _msg_ : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->

| 引数  | タイプ    |     | 説明                  |
| --- | ------ | :-: | ------------------- |
| msg | string |  -> | Webフォームに表示する情報メッセージ |

<!-- END REF -->

#### 説明

`.setMessage()` 関数は、<!-- REF #WebFormClass.setMessage().Summary -->_msg_ を情報メッセージとして Webフォームに送信します<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `.setMessage()` の説明](https://developer.qodly.com/docs/language/WebFormClass#setmessage) を参照ください。

### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->

**.setWarning**( _msg_ : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->

| 引数  | タイプ    |     | 説明                  |
| --- | ------ | :-: | ------------------- |
| msg | string |  -> | Webフォームに表示する警告メッセージ |

<!-- END REF -->

#### 説明

`.setWarning()` 関数は、<!-- REF #WebFormClass.setWarning().Summary -->_msg_ を警告メッセージとして Webフォームに送信します<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `.setWarning()` の説明](https://developer.qodly.com/docs/language/WebFormClass#setwarning) を参照ください。

## Web Form

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->

| 引数  | タイプ                        |     | 説明                       |
| --- | -------------------------- | :-: | ------------------------ |
| 戻り値 | 4D.WebForm |  <- | 新しい `WebForm` プロキシオブジェクト |

<!-- END REF -->

#### 説明

`Web Form` コマンドは、<!-- REF #_command_.Web Form.Summary -->Webフォームとの対話を可能にする `4D.WebForm` プロキシオブジェクトを返します<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `webForm` コマンドの説明](https://developer.qodly.com/docs/language/WebFormClass#webform) を参照ください。

## Web Event

<!-- REF #_command_.Web Event.Syntax -->**Web Event** : object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->

| 引数  | タイプ    |     | 説明     |
| --- | ------ | :-: | ------ |
| 戻り値 | object |  <- | object |

<!-- END REF -->

#### 説明

`Web Event` コマンドは、<!-- REF #_command_.Web Event.Summary -->Webフォームコンポーネントにリンクして発生したイベントの情報を持つオブジェクトを返します<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `webEvent` コマンドの説明](https://developer.qodly.com/docs/language/WebFormClass#webevent) を参照ください。
