---
id: advanced-programming
title: Advanced programming with Javascript
---

A 4D View Pro Area is a [Web Area form object](../FormObjects/webArea_overview.md) that uses the [embedded web rendering engine](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine). As such, it behaves just like any other web area, and you can get it to execute Javascript code by calling the `WA Evaluate Javascript` command. 

## Hands-on example: Hiding the Ribbon

To create a button that allows your users to dynamically hide the 4D View Pro **Ribbon**, create a button in your 4D View Pro area, and insert the following code in its object method: 

```4d
var $js; $answer : Text

$js:="document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');"

$js:=$js+"window.dispatchEvent(new Event('resize'));"

$answer:=WA Evaluate JavaScript(*; "ViewProArea"; $js)
```
## Using the SpreadJS Javascript methods

 Since 4D View Pro is powered by the [SpreadJS spreadsheet solution](https://www.grapecity.com/spreadjs/docs/v14/online/overview.html), you can tap into the SpreadJS library of Javascript methods and call them directly in a 4D View Pro area to control your spreadsheets. 
#### Example

To create a function that validates the values in the current sheet: 

1. Create a `VPCellManagement` class that contains the following code: 

```4d
Class constructor($areaName : Text)
	
	This.areaName:=$areaName
	This.activeSheet:="var activeSheet=Utils.spread.getActiveSheet();"

Function validateValue()
	var $js; $answer : Text
	
	$js:=This.activeSheet
	$js:=$js+"Utils.spread.commandManager().execute({cmd: 'commitArrayFormula', sheetName: activeSheet.name()})"
	$answer:=WA Evaluate JavaScript(*; This.areaName; $js)
```

2. You can then call `validateValue()` inside your 4D View Pro Area:

```4d
cs.VPCellManagement.new("ViewProArea").validateValue()
```

`Utils` is a Javascript class built in 4D View Pro. See [Utils class](#utils-class).

## Resources 

To help you customize your areas, 4D provides you with the following resources.

### 4D View Pro Tips repository

[4D-View-Pro-Tips](https://github.com/4d-depot/4D-View-Pro-Tips) is a GitHub repository that contains a project full of useful functions and examples. Feel free to clone it and experiment with the project. 

### Utils class

`Utils` is a Javascript class built in 4D View Pro that makes it easier to perform several actions inside a 4D View Pro area, such as retrieving the current sheet.

For example, in the project inside [4D-View-Pro-Tips](https://github.com/4d-depot/4D-View-Pro-Tips), you'll see that classes that manage the current sheet include the following code in their constructor: 

```4D
Class constructor($areaName : Text)
	
	This.areaName:=$areaName
	This.activeSheet:="var activeSheet=Utils.spread.getActiveSheet();"
```




