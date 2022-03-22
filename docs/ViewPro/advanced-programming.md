---
id: advanced-programming
title: Advanced programming with Javascript
---

A 4D View Pro Area is a [Web Area form object](../FormObjects/webArea_overview.md) that uses the [embedded web rendering engine](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine). As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the [`WA Evaluate Javascript`](https://doc.4d.com/4dv19/help/command/en/page1029.html) 4D command. 

Since 4D View Pro is powered by the [SpreadJS spreadsheet solution](https://www.grapecity.com/spreadjs/docs/versions/v14/online/overview.html), you can also call SpreadJS Javascript methods in a 4D View Pro area.

## Hands-on example: Hiding the Ribbon

Executing Javascript code in a 4D View Pro area allows you to select elements and modify their behavior. For example, you can create a button that hides the spreadJS **Ribbon**: 

```4d
//Button's object method

var $js; $answer : Text

$js:="document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');"

$js+="window.dispatchEvent(new Event('resize'));"

$answer:=WA Evaluate JavaScript(*; "ViewProArea"; $js)
```


## Calling SpreadJS Javascript methods

You can tap into the SpreadJS library of Javascript methods and call them directly to control your spreadsheets. 

To simplify the process of calling these methods on the current Area, 4D provides a built-in `Utils.spread` expression that points at the spreadJS [Workbook](https://www.grapecity.com/spreadjs/docs/latest/online/SpreadJS~GC.Spread.Sheets.Workbook.html).

#### Example

To create an "Undo" action in your area, you could create a method with the following code:

```4d
var $areaName : Text

$areaName:="ViewProArea"
WA Evaluate JavaScript(*; $areaName; "Utils.spread.undoManager().undo()")
```

## 4D View Pro Tips repository

[4D-View-Pro-Tips](https://github.com/4d-depot/4D-View-Pro-Tips) is a GitHub repository that contains a project full of useful functions, allowing to manage floating pictures, sort columns or rows, create a custom culture, and much more! Feel free to clone it and experiment with the project. 
