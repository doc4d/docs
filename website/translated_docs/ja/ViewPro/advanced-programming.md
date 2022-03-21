---
id: advanced-programming
title: Advanced programming with Javascript
---

A 4D View Pro Area is a [Web Area form object](../FormObjects/webArea_overview.md) that uses the [embedded web rendering engine](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine). As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the [`WA Evaluate Javascript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) 4D command.

## Hands-on example: Hiding the Ribbon

To create a button that allows your users to dynamically hide the 4D View Pro **Ribbon**, create a button in your 4D View Pro area, and insert the following code in its object method:

```4d
    //button object method

var $js; $answer : Text

$js:="document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');"

$js:=$js+"window.dispatchEvent(new Event('resize'));"

$answer:=WA Evaluate JavaScript(*; "ViewProArea"; $js)
```
## Using the SpreadJS Javascript methods

Since 4D View Pro is powered by the [SpreadJS spreadsheet solution](https://www.grapecity.com/spreadjs/docs/versions/v14/online/overview.html), you can tap into the SpreadJS library of Javascript methods and call them directly in a 4D View Pro area to control your spreadsheets.

#### 例題

To create a function that validates the values in the current sheet:

1. Create a `VPCellManagement` [4D class](../Concepts/classes.md) that contains the following code:

```4d
Class constructor($areaName : Text)

    This.areaName:=$areaName
    This.activeSheet:="var activeSheet=Utils.spread.getActiveSheet();"

Function validateValue()-> $answer : Text
    var $js : Text

    $js:=This.activeSheet
    $js:=$js+"Utils.spread.commandManager().execute({cmd: 'commitArrayFormula', sheetName: activeSheet.name()})"
    $answer:=WA Evaluate JavaScript(*; This.areaName; $js)
```
**Note:** `Utils` is a Javascript class built in 4D View Pro.

2. You can then call the `validateValue()` function:

```4d
cs.VPCellManagement.new("ViewProArea").validateValue()
```



## 4D View Pro Tips repository

[4D-View-Pro-Tips](https://github.com/4d-depot/4D-View-Pro-Tips) is a GitHub repository that contains a project full of useful functions, allowing to manage floating pictures, sort columns or rows, create a custom culture, and much more! Feel free to clone it and experiment with the project. 
