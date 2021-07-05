---
id: webFormObject
title: WEB Form Object
---

The object returned by the [WEB Form](https://doc.4d.com/4dv19R/help/command/en/page1735.html) command lets you handle, on the server side, the behavior of your WebForm and its components. See [Handling components from the server](#).

## Accessing a web form's components

When you call the [WEB Form](https://doc.4d.com/4dv19R/help/command/en/page1735.html) command, each property in the returned object is a [web form component](#), and the property name is the server reference of the web form component.

For example, the following code sample hides the component that has `firstName` as server reference.

```4d
$input:=WebForm.firstName 
$input.hide()
```

## Setting the behavior of web form components using functions

To set the behavior of a web form component, call one of the following WebForm object functions:

| Function | Description |
|----|----|
| show() | displays the component |
| hide() | hides the component |
| addCSSClass($className) |  adds the specified CSS class to the component
| removeCSSClass($className) | removes the specified CSS class from the component

