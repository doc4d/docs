---
id: WebFormClass
title: WebForm
---


The `WebForm` class contains functions and properties allowing to handle your Qodly webform components. `4D.WebForm` objects are instantiated with the [`webForm`](commands/web-form.md) command.

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R6|Added enableState() and disableState()|
|20 R2|Added|

</details>




### Commands and functions

||
|---|
|[<!-- INCLUDE WebFormClass.componentName.Syntax -->](#componentname)<br/><!-- INCLUDE #WebFormClass.componentName.Summary -->|
|[<!-- INCLUDE #WebFormClass.disableState().Syntax -->](#disablestate)<br/><!-- INCLUDE #WebFormClass.disableState().Summary -->|
|[<!-- INCLUDE #WebFormClass.enableState().Syntax -->](#enablestate)<br/><!-- INCLUDE #WebFormClass.enableState().Summary -->|
|[<!-- INCLUDE #WebFormClass.setError().Syntax -->](#seterror)<br/><!-- INCLUDE #WebFormClass.setError().Summary -->|
|[<!-- INCLUDE #WebFormClass.setMessage().Syntax -->](#setmessage)<br/><!-- INCLUDE #WebFormClass.setMessage().Summary -->|
|[<!-- INCLUDE #WebFormClass.setWarning().Syntax -->](#setwarning)<br/><!-- INCLUDE #WebFormClass.setWarning().Summary -->|


### *.componentName*

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](WebFormItemClass.md)<!-- END REF -->

#### Description

The components of webforms are <!-- REF #WebFormClass.componentName.Summary -->objects that are available directly as properties<!-- END REF --> of these webforms.

The returned objects are of the [`4D.WebFormItem`](WebFormItemClass.md) class. These objects have functions that you can use to manage your components dynamically.

#### Example

```4d  
// to update
var myForm: 4D.WebForm
var component: 4D.WebFormItem

myForm = webForm //returns the page as an object, each property is a component
component = myForm.myImage //returns the myImage component of the page

```
:::info

While `myForm` may not display typical object properties when examined in the debugger, it behaves as if it were the actual `webForm` object. You can interact with the underlying `webForm` object's properties and functions through `myForm`. For example, you can dynamically manipulate page components or transmit messages to web pages using specialized functions like `myForm.setMessage()`.

:::

### .disableState()

<!-- REF #WebFormClass.disableState().Syntax -->**.disableState**( *state* : string)<!-- END REF -->

<!-- REF #WebFormClass.disableState().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|state|string|->|Name of state to disable from the web form|
<!-- END REF -->

#### Description

The `.disableState()` function <!-- REF #WebFormClass.disableState().Summary -->disables the rendering of the *state* in the current web form<!-- END REF -->.

This function does nothing if:
- the *state* is currently not enabled in the web form,
- the *state* does not exist for the web form.

If you [enable](#enablestate) or disable several states in the same user function, all modifications are sent at the same time to the client once the function ends.

For more information on web form states, please refer to [States section on developer.qodly.com](https://developer.qodly.com/docs/studio/pageLoaders/states).




### .enableState()

<!-- REF #WebFormClass.enableState().Syntax -->**.enableState**( *state* : string )<!-- END REF -->

<!-- REF #WebFormClass.enableState().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|state|string|->|Name of state to enable on the web form|
<!-- END REF -->

#### Description

The `.enableState()` function <!-- REF #WebFormClass.enableState().Summary -->enables the rendering of the *state* in the current web form<!-- END REF -->.

This function does nothing if:
- the *state* has already been enabled on the web form,
- the *state* does not exist for the web form.

If you enable or [disable](#disablestate) several states within the same user function, all modifications are sent at the same time to the client once the function ends.

For more information on web form states, please refer to [States section on developer.qodly.com](https://developer.qodly.com/docs/studio/pageLoaders/states).

#### Example

You enable a specific state named "wrongCredentials" in case of error in your login page:

```4d
Function authenticationError()
	If (Session.info.type#"remote")
		Web Form.enableState("wrongCredentials")
	End if
```


### .setError()

<!-- REF #WebFormClass.setError().Syntax -->**.setError**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msg|string|->|Error message to display in the web form|
<!-- END REF -->

#### Description

The `.setError()` function <!-- REF #WebFormClass.setError().Summary -->sends *msg* as an error message to the web form<!-- END REF -->.

For more information, please refer to the [`.setError()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#seterror).

### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->**.setMessage**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msg|string|->|Information message to display in the web form|
<!-- END REF -->

#### Description

The `.setMessage()` function <!-- REF #WebFormClass.setMessage().Summary -->sends *msg* as an information message to the web form<!-- END REF -->.

For more information, please refer to the [`.setMessage()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#setmessage).


### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->**.setWarning**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|msg|string|->|Warning message to display in the web form|
<!-- END REF -->

#### Description

The `.setWarning()` function  <!-- REF #WebFormClass.setWarning().Summary -->sends *msg* as a warning message to the web form<!-- END REF -->.

For more information, please refer to the [`.setWarning()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#setwarning).

## See also 

[Web Form](web-form.md)</br>  
[Web Event](web-event.md)</br>
[WebFormItem class](../API/WebFormItemClass.md)