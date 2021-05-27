---
id: overview
title: Overview
---

4D View Pro is a both a 4D component and a 4D form area. It allows you to embed advanced spreadsheet features in your forms.


![](assets/en/ViewPro/vpSpreadsheet.PNG)

A spreadsheet is an application containing a grid of cells into which you can enter information, execute calculations, or display pictures. 4D View Pro is powered by the [SpreadJS spreadsheet solution](https://www.grapecity.com/spreadjs/docs/v14/online/overview.html) integrated in 4D.

Embedding 4D View Pro areas in your forms allows you to import and export spreadsheets documents using the 4D View Pro commands.

## Installation and activation  

4D View Pro features are directly included in 4D, making it easy to deploy and manage. No additional installation is required.

However, 4D View Pro requires a license. You need to activate this license in your application in order to use its features. When using this component without a license, the contents of an object that requires a 4D View Pro feature are not displayed at runtime, an error message is displayed instead:

![](assets/en/ViewPro/licenseError.PNG)

## Using 4D View Pro Methods

4D View Pro methods can be used in the 4D Method editor, just like 4D language commands. 

Since 4D View Pro is a built-in 4D component, you can access its list of methods from the Explorer, in the **Component Methods** section:

![](assets/en/ViewPro/explorer-methods.PNG)

For a detailed list of methods, see [Method Reference](command-list.md).

## Area Architecture Overview

When working with 4D View Pro areas in your forms, you need to handle several elements:

*	The **4D View Pro form area** (4D form object): contains and displays the 4D View Pro object. This area is defined by a name ("Object name" field in the Property list).
*	The **4D View Pro object** ([C_OBJECT](Concepts/dt_object.md) type variable or expression): stores the whole spreadsheet contents (see below). You can get or set this object using the [VP IMPORT FROM OBJECT](command-list.md#vp-import-from-object) or [VP Export to object](command-list.md#vp-export-to-object) commands.
*	The **4D View Pro document** (.4vp documents): stores the whole spreadsheet contents in JSON format.

![](assets/en/ViewPro/vpDocument.PNG)


When loading a 4D View Pro object in a form area, 4D generates the [On VP Ready](../Events/onVpReady.md) form event once the whole area is loaded. You must execute any 4D View Pro code handling the area in this event, otherwise an error is returned.

### Automatic handling of the 4D View Pro object

The 4D View Pro object describes the document and is automatically handled by the 4D View Pro commands. It contains the following properties:

|Property|	Value type|	Description|
|---|---|---|
|version|Longint|Internal component version|
|dateCreation|Timestamp|Creation date|
|dateModified|Timestamp|Last modification date|
|meta|Object|Free contents, reserved for the 4D developer|
|spreadJS|Object|Reserved for the 4D View Pro component|


### About the 4D View Pro form object variable  

The 4D View Pro form object variable manages information used by the 4D View Pro object. It contains the following variables:

|Property|	Value type|	Description|
|---|---|---|
|area|	Text|	4D View Pro area name
|callbacks|	Object|	Stores temporary information necessary for commands requiring callbacks such as importing and exporting.| 
|commandBuffers|	Collection|	Stores sequentially the commands called by the method and executes them as a batch (rather than individually) upon exiting the method, or if a command returns a value or the [VP FLUSH COMMANDS](command-list.md#vp-flush-commands) is called. This mechanism increases performance by reducing the number of requests sent.|
|formulaBar|	Boolean|	Indicates whether or not the formula bar is displayed. Available only for the "toolbar" interface.|
|inited|	Boolean|	Indicates whether or not the 4D View Pro area has been initialized (see On VP Ready).|
|interface|	Text|	Specifies the type of user interface:"ribbon", "toolbar", "none".|

>The 4D View Pro form object variable is for information purposes only (i.e., debugging). Under no circumstances should it be modified.