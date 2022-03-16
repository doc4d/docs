---
id: advanced-customization
title: Advanced customization with Javascript
---

A 4D View Pro Area is a [Web Area form object](../FormObjects/webArea_overview.md) that uses the [embedded web rendering engine](../FormObjects/properties_WebArea.md#use-embedded-web-rendering-engine). As such, you can further customize your 4D View Pro Areas with Javascript code by calling the `WA Evaluate Javascript` command. 

## Example: Hiding the 4D View Pro Ribbon

To hide the 4D View Pro Ribbon:

1. Create a `VPDocument` class with a `hideRibbon` function written in Javascript:

```4d
Function hideRibbon($hide : Boolean)
	var $js; $answer : Text
	
	If (Bool($hide))
		$js:="document.getElementsByClassName('ribbon')[0].setAttribute('style','display: none');"
	Else 
		$js:="document.getElementsByClassName('ribbon')[0].setAttribute('style','display: block');"
	End if 
	$js:=$js+"window.dispatchEvent(new Event('resize'));"
	
	$answer:=WA Evaluate JavaScript(*; This.areaName; $js)
```

2. In your 4D View Pro Area, instantiate the `VPDocument` class and Execute the `hideRibbon` function:

```4d 
cs.VPDocument.new("ViewProArea").hideRibbon(True)
```

## The Utils class

`Utils` is a Javascript class built in 4D View Pro that makes it easier to perform several actions inside a 4D View Pro area, such as retrieving the current sheet.

For example, you could write a function that makes sure the content is validated in the current sheet:

```4d 
Function validateValue()
	var $js; $answer : Text
	
	$js:=This.activeSheet
	$js:=$js+"Utils.spread.commandManager().execute({cmd: 'commitArrayFormula', sheetName: activeSheet.name()})"
	$answer:=WA Evaluate JavaScript(*; This.areaName; $js)
```

## GitHub repository with examples

More examples are available in the [4D-View-Pro-Tips](https://github.com/4d-depot/4D-View-Pro-Tips) GitHub repository. Feel free to clone it and experiment with the project. 


