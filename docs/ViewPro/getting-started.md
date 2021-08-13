---
id: getting-started
title: Getting Started
---

To start using 4D View Pro, the first step consists of inserting and configuring a spreadsheet area in your 4D form.

> 4D View Pro areas can also be [created and used offscreen](method-list.md#vp-run-offscreen-area).

## Inserting a 4D View Pro area  

4D View Pro documents are displayed and edited manually in a [4D form object](FormObjects/viewProArea_overview.md) named 4D View Pro. To select this object, click on the last tool in the object bar:

![](assets/en/ViewPro/vpArea.PNG)

You can also select a preconfigured 4D View Pro area in the [Object library](FormEditor/objectLibrary.md). 

## Setting area properties

Using the area's property list, you can set [4D View Pro object properties](FormObjects/viewProArea_overview.md#supported-properties) such as **Object Name**, [**Variable or Expression**](overview.md#about-the-4d-view-pro-form-object-variable), **Appearance**, **Action**, and **Events**.

![](assets/en/ViewPro/vpPropertyList.PNG)

## Adding a user interface

You can select the interface to use with your 4D View Pro areas. For example, the following 4D View Pro area displays a spreadsheet with a Ribbon interface:

![](assets/en/ViewPro/vpSpreadsheet.PNG)

Interfaces allow for basic modifications and data manipulation. 

These interfaces can be enabled or disabled in the **Property List**, under **Appearance**:  

![](assets/en/ViewPro/vpUserInterface.PNG)

> You can also use the [`userInterface`](FormObjects/properties_Appearance.md#user-interface) and [`withFormulaBar`](FormObjects/properties_Appearance.md#show-formula-bar)(only with the "toolbar" interface) JSON properties.  

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

Enabling the Toolbar interface displays the [**Show Formula Bar**](FormObjects/properties_Appearance.md#show-formula-bar) option. When selected, the formula bar is visible below the Toolbar interface. 

With visible formula bar:

![](assets/en/ViewPro/vpToolbar.PNG)

## Manipulating data with code

You can manipulate the data inside a 4D View Pro document using 4D View Pro methods. 

### Ranges 

In 4D View Pro, a range is an object that references an area in a spreadsheet. This area can be composed of one or several cells. 

Using 4D View pro commands, you can create ranges and pass them to other commands to read from or write to specific locations in your document.

For example, to create a range object for the following cells:

![](assets/en/ViewPro/vp-cells.png)

You can use the [VP Cells](method-list.md#vp-cells) method:

```4d 
var $myRange : Object
$myRange:=VP Cells("ViewProArea";2;4;2;3) // C5 to D7
```

You can then pass `$myRange` to another 4D View Pro method to modify these cells (for example add a border to the set of cells with [VP SET BORDER](method-list.md#vp-set-border)).

## Import and export formats 

4D View Pro supports the import and export of several document formats:
* .4vp
* .xlsx
* .txt and .csv
* .pdf (for export only)

For more details, check out the description of [VP IMPORT DOCUMENT](method-list.md#vp-import-document) and [VP EXPORT DOCUMENT](method-list.md#vp-export-document).