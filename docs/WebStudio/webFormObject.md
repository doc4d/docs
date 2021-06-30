---
id: webFormObject
title: WebForm
---

The WebForm class lets you handle, from the server, the behavior of your WebForm and its components. See [Handling components from the server](#)

In the following sections, `.component` is an object. It refers to the server reference of a component inside the webform.

In the following example, `$input` is an object variable used to handle the component with `firstName` as server reference:

```4d
$input:=WebForm.firstName 
```

### Summary 
||
|---|
|[<!-- INCLUDE #WebForm.component.show().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebForm.component.show().Summary --> |
|[<!-- INCLUDE #WebForm.component.hide().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebForm.component.hide().Summary --> |
|[<!-- INCLUDE #WebForm.component.addCSSClass().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebForm.component.addCSSClass().Summary --> |
|[<!-- INCLUDE #WebForm.component.removeCSSClass().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebForm.component.removeCSSClass().Summary --> |

## WebForm.component.show()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R2|Added|
</details>

<!-- REF #WebForm.component.show().Syntax -->
**WebForm.component.show()**<!-- END REF -->

#### Description
`WebForm.component.show()` <!-- REF #WebForm.component.show().Summary --> displays the WebForm component.<!-- END REF -->

## .hide()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R2|Added|
</details>

<!-- REF #WebForm.component.hide().Syntax -->
**WebForm.component.hide()**<!-- END REF -->

#### Description
`WebForm.component.hide()` <!-- REF #WebForm.component.hide().Summary --> hides the WebForm component.<!-- END REF --> 

## .addCSSClass()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R2|Added|
</details>

<!-- REF #WebForm.component.addCSSClass().Syntax -->
**WebForm.component.addCSSClass( className )**<!-- END REF -->

<!-- REF #WebForm.component.addCSSClass().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|className| Text|->|name of the CSS class to add to the WebForm component|
<!-- END REF -->

#### Description
`WebForm.component.addCSSClass()` <!-- REF #WebForm.component.addCSSClass().Summary --> adds the CSS class specified in `className` to the WebForm component.<!-- END REF --> 

## .removeCSSClass()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R2|Added|
</details>

<!-- REF #WebForm.component.removeCSSClass().Syntax -->
**WebForm.component.removeCSSClass( className )**<!-- END REF -->

<!-- REF #WebForm.component.removeCSSClass().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|className| Text|->|name of the CSS class to remove from the component|
<!-- END REF -->

#### Description
`WebForm.component.removeCSSClass()` <!-- REF #WebForm.component.removeCSSClass().Summary -->  removes the CSS class specified in `className` from the WebForm component.<!-- END REF --> 