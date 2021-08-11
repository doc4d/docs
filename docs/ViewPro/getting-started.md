---
id: getting-started
title: Getting Started
---

4D View Pro allows you to insert spreadsheet areas in your 4D forms.

## Creating the area  

4D View Pro documents are displayed and edited manually in a  [4D form object](FormObjects/formObjects_overview.md) named 4D View Pro. To access this object, click on the last tool in the object bar:

![](assets/en/ViewPro/vpArea.PNG)

## Setting standard area properties

Using the area's property list, you can set standard properties such as **Object Name**, **Variable or Expression**, **Appearance**, **Action**, and **Events**.

![](assets/en/ViewPro/vpPropertyList.PNG)

*	**Object Name**: name of the 4D form area that contains and displays the 4D View Pro document.
*	**Variable or Expression**: name of the 4D View Pro form area variable.

## Executing the form

By default, when the form is executed, the 4D View Pro area displays a spreadsheet with a Ribbon:

![](assets/en/ViewPro/vpSpreadsheet.PNG)

## Adding a user interface

You can add interfaces to 4D View Pro areas. They allow for basic modifications and data manipulation. The Ribbon is set by default in the property list. 

These interfaces can be enabled or disabled either:

*	in the **Property List**, under **Appearance**:  
	![](assets/en/ViewPro/vpUserInterface.PNG)
	
*	using a **JSON file** (see  [Dynamic Forms](https://doc.4d.com/4Dv19/4D/19/Dynamic-Forms.300-5416668.en.html)) with the following properties:
	*	"userInterface": Default value is "none". To add an interface, set it to "Ribbon" or "Toolbar".
	*	"withFormulaBar": Default value is "false". To enable the formula bar, set it to "true" . **Note**: Available only for the "Toolbar" interface. 

Both the Ribbon and the Toolbar interfaces group related actions into the following tabs: 	

|Tab| 	Actions	|Ribbon Interface|	Toolbar Interface|
|---|---|:---:|:---:|
|File|File manipulation|X| |	 
|Home|Text appearance|X|X|
|Insert|Add items| X| X|
|Formulas|Formula calculation and library|	 X|X|
|Data|Data manipulation|X| X|
|View|Visual presentation| X| X|
|Settings|Sheet presentation reference|X| |	 


User-defined modifications are saved in the 4D View Pro object when the user saves the document.

### Ribbon

![](assets/en/ViewPro/vpRibbon.PNG)

### Toolbar

Enabling the Toolbar interface displays the Show Formula Bar option. When selected, the formula bar is visible below the Toolbar interface. If not selected, the formula bar is hidden.

With visible formula bar:

![](assets/en/ViewPro/vpToolbar.PNG)

## Manipulating data with code

You can manipulate the data inside a 4D View Pro document using 4D View Pro methods. 

### Ranges 

In 4D View Pro, a range is an object that references an area in a spreadsheet. This area can be composed of one or several cells. 

Using 4D View pro commands, you can create ranges and pass them to other commands to read from or write to specific locations in your document.

For example, to create a range object for the following cells:

![](assets/en/ViewPro/vp-cells.png)

You can use the [VP Cells](component-method-list.md#vp-cells) method:

```4d 
$cells:=VP Cells("ViewProArea";2;4;2;3) // C5 to D7
```

You can then use this range to insert values.

## Importing and exporting different formats 

4D View Pro supports the import and export of several document formats:
* .4vp
* .xlsx
* .txt and .csv
* .pdf (for export only)

For more details, check out the description of the [VP IMPORT DOCUMENT](component-method-list.md#vp-import-document) and [VP EXPORT DOCUMENT](component-method-list.md#vp-export-document) commands.