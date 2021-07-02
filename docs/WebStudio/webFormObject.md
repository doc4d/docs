---
id: webFormObject
title: WebForm
---

The `WebForm` object lets you handle, from the server, the behavior of your WebForm and its components. See [Handling components from the server](#)

## Instantiating a `WebForm` object

To instantiate a `WebForm` object, call the `WebForm` command:

```4d
var $myWebForm : Object

$myWebForm:= WebForm 
```

## Accessing the `WebForm`'s components

Each component in your WebForm has a server reference. You can use it to access the component and modify its behavior, using dot notation:

```4d
$myComponent:= $WebForm.firstName 
```

In the example above, `$myComponent` is an object variable used to handle the component with `firstName` as server reference:

## WebForm Component Functions

To set the behavior of your web form's components, you can use the built-in functions of the `WebForm` object.

### Summary 
||
|---|
|[<!-- INCLUDE #WebForm.component.show().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebForm.component.show().Summary --> |
|[<!-- INCLUDE #WebForm.component.hide().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebForm.component.hide().Summary --> |
|[<!-- INCLUDE #WebForm.component.addCSSClass().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebForm.component.addCSSClass().Summary --> |
|[<!-- INCLUDE #WebForm.component.removeCSSClass().Syntax -->](#new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebForm.component.removeCSSClass().Summary --> |


### WebForm.component.show()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R2|Added|
</details>

<!-- REF #WebForm.component.show().Syntax -->
**WebForm.component.show()**<!-- END REF -->

#### Description
`WebForm.component.show()` <!-- REF #WebForm.component.show().Summary --> displays the WebForm component.<!-- END REF -->

#### Example

`WebForm.firstName.show()` <!-- REF #WebForm.component.show().Summary --> displays the WebForm component with `firstName` as server reference.

### .hide()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R2|Added|
</details>

<!-- REF #WebForm.component.hide().Syntax -->
**WebForm.component.hide()**<!-- END REF -->

#### Description
`WebForm.component.hide()` <!-- REF #WebForm.component.hide().Summary --> hides the WebForm component.<!-- END REF --> 

### .addCSSClass()

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

### .removeCSSClass()

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