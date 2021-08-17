---
id: getting-started
title: Getting Started
---


4D View Pro is a [4D component](Concepts/components.md) that includes a [4D form area](FormObjects/viewProArea_overview.md) an specific [methods](method-list.md). It allows you to embed advanced spreadsheet features in your projects.


![](assets/en/ViewPro/vpSpreadsheet.PNG)

A spreadsheet is an application containing a grid of cells into which you can enter information, execute calculations, or display pictures. 4D View Pro is powered by the [SpreadJS spreadsheet solution](https://www.grapecity.com/spreadjs/docs/v14/online/overview.html) integrated in 4D.

Embedding 4D View Pro areas in your forms allows you to import and export spreadsheets documents using the 4D View Pro commands.


## Installation and activation  

4D View Pro features are directly included in 4D, making it easy to deploy and manage. No additional installation is required.

However, 4D View Pro requires a license. You need to activate this license in your application in order to use its features. When using this component without a license, the contents of an object that requires a 4D View Pro feature are not displayed at runtime, an error message is displayed instead:

![](assets/en/ViewPro/licenseError.PNG)


## Inserting a 4D View Pro area  

4D View Pro documents are displayed and edited manually in a [4D form object](FormObjects/viewProArea_overview.md) named 4D View Pro. To select this object, click on the last tool in the object bar:

![](assets/en/ViewPro/vpArea.PNG)

You can also select a preconfigured 4D View Pro area in the [Object library](FormEditor/objectLibrary.md). 

> 4D View Pro areas can also be [created and used offscreen](method-list.md#vp-run-offscreen-area).

You can [configure the area](configuring.md) using the Property List and 4D View Pro methods.  

## Calling 4D View Pro methods

4D View Pro methods can be used in the 4D Method editor, just like 4D language commands. 

Since 4D View Pro is a built-in 4D component, you can access its list of methods from the Explorer, in the **Component Methods** section:

![component-methods](assets/en/ViewPro/explorer-methods.PNG)

For a detailed list of component methods, see [Method list](method-list.md).




## Area architecture

When working with 4D View Pro areas in your forms, you need to handle several elements:

*	The [**4D View Pro form area**](FormObjects/viewProArea_overview.md) (4D form object): contains and displays the 4D View Pro object. This area is defined by an [Object name](FormObjects/properties_Object.md#object-name) property.
*	The **4D View Pro object** ([object](Concepts/dt_object.md) type variable or expression): stores the whole spreadsheet contents (see below). You can get or set this object using the [VP IMPORT FROM OBJECT](method-list.md#vp-import-from-object) or [VP Export to object](method-list.md#vp-export-to-object) commands.
*	The **4D View Pro document** ([.4vp document](method-list.md#vp-export-document)): stores the whole spreadsheet contents in JSON format.

![](assets/en/ViewPro/vpDocument.PNG)


> When loading a 4D View Pro object in a form area, 4D generates the [On VP Ready](../Events/onVpReady.md) form event once the whole area is loaded. You must execute any 4D View Pro code handling the area in this event, otherwise an error is returned.

### 4D View Pro object

The 4D View Pro object describes the document and is automatically handled by the 4D View Pro commands. It contains the following properties:

|Property|	Value type|	Description|
|---|---|---|
|version|Longint|Internal component version|
|dateCreation|Timestamp|Creation date|
|dateModified|Timestamp|Last modification date|
|meta|Object|Free contents, reserved for the 4D developer|
|spreadJS|Object|Reserved for the 4D View Pro component|

### 4D View Pro form object variable  

The 4D View Pro form object variable manages information used by the 4D View Pro object. It contains the following variables:

|Property|	Value type|	Description|
|---|---|---|
|area|	Text|	4D View Pro area name
|callbacks|	Object|	Stores temporary information necessary for commands requiring callbacks such as importing and exporting.| 
|commandBuffers|	Collection|	Stores sequentially the commands called by the method and executes them as a batch (rather than individually) upon exiting the method, or if a command returns a value or the [VP FLUSH COMMANDS](method-list.md#vp-flush-commands) is called. This mechanism increases performance by reducing the number of requests sent.|
|formulaBar|	Boolean|	Indicates whether or not the formula bar is displayed. Available only for the "toolbar" interface.|
|inited|	Boolean|	Indicates whether or not the 4D View Pro area has been initialized (see [On VP Ready](Events/onVpReady.md) event).|
|interface|	Text|	Specifies the type of user interface:"ribbon", "toolbar", "none".|

>The 4D View Pro form object variable is for information purposes only (i.e., debugging). Under no circumstances should it be modified.


## Range objects

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

### Range object properties

4D View Pro range objects are composed of several properties:

*	area - The name of the 4D View Pro area
*	ranges - A collection of range object(s). Available properties within each range object depend on the range object type. For example, a column range object will only include the *.column* and *.sheet* properties. 

|Property|		|Type	|Description|	Available for|
|---|---|---|---|---|
|area||		text|	4D View Pro area form object name|	always available|
|ranges	||	collection|	Collection of range(s)|	always available
||\[ ].name	|text|	Range name	|name|
||\[ ].sheet|	number|	Sheet index (current sheet index by default) (counting begins at 0)	|cell, cells, row, rows, column, columns, all, name|
||\[ ].row	|number	|Row index (counting begins at 0)	|cell, cells, row, rows|
||\[ ].rowCount	|number	|Row count|	cells, rows|
||\[ ].column	|number	|Column index (counting begins at 0)	|cell, cells, column, columns
||\[ ].columnCount	|number	|Column count|	cells, columns


## Selection, Input and Navigation Basics  

Spreadsheets are composed of rows and columns. A number is associated with each row. A letter (or group of letters once the number of columns surpasses the number of letters in the alphabet) is associated with each column. The intersection of a row and a column makes a cell. Cells can be selected and their contents edited.

### Selecting cells, columns and rows

*	To select a cell, simply click on it or use the direction arrows on the keyboard. Its content (or formula) is displayed within the cell.

*	To select several continuous cells, drag the mouse from one end of the selection to the other. You can also click on the two ends of the selection while holding down the Shift key.

*	To select all cells in the spreadsheet, click on the cell at the top left of the area:
	![](assets/en/ViewPro/vpSelectAll.PNG)
	
*	To select a column, click on the corresponding letter (or set of letters).

*	To select a row, click on the corresponding number.

*	To select a group of cells that are not continuous, hold down the **Ctrl** key (Windows) or **Command** key (Mac) and click on each cell to be selected.

*	To deselect cells, simply click anywhere within the spreadsheet.

### Entering data

Double-clicking on a cell allows passing into input mode in the relevant cell. If the cell is not empty, the insertion cursor is placed after the content of the cell.

![](assets/en/ViewPro/vpInput.PNG)

Data can be entered directly once a cell is already selected, even if the insertion cursor is not visible. The input then
replaces the content of the cell.

The **Tab** key validates the cell input and selects the cell to its right. Combining the **Shift + Tab** keys validates the cell input and selects the cell to its left.


The **Carriage return** key validates the cell input and selects the cell below it. Combining the **Shift + Carriage return** keys validates the cell input and selects the cell above it.

The direction keys (arrows) allow you to move a cell in the direction indicated by the arrow.


## Using the Context Menu  

4D View Pro areas benefit from an automatic context menu that offers standard editing features such as copy and paste, but also basic spreadsheet features:

![](assets/en/ViewPro/vpContext.PNG)

>The Copy/Cut and Paste features of the context menu only work within the spreadsheet area, they do not have access to the system pasteboard. System shortcuts such as **Ctrl+c/Ctrl+v** works however and can be used to exchange data between the area and other applications.

 Depending on the clicked area, the following options are also available:

*	click on a column or row header: **Insert**, **Delete**, **Hide**, or **Unhide** the contents
*	click on a cell or a cell range:
	*	**Filter**: allows hiding row through filters (see [Filtering rows](http://help.grapecity.com/spread/SpreadSheets11/webframe.html#filter.html) in the SpreadJS documentation).
	*	**Sort**: sorts the column contents.
	*	**Insert Comment**: allows user to enter a comment for an area. When a comment has been entered for an area, the top left cell of the area displays a small red triangle:  
		![](assets/en/ViewPro/vpContext2.PNG)
		
		

## Import and export formats 

4D View Pro supports the import and export of several document formats:

* .4vp
* .xlsx
* .txt and .csv
* .pdf (for export only)

For more details, check out the description of [VP IMPORT DOCUMENT](method-list.md#vp-import-document) and [VP EXPORT DOCUMENT](method-list.md#vp-export-document).
