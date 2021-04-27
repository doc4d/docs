---
id: fundamentals
title: Fundamentals
---


## Defining a 4D View Pro area     

4D View Pro allows you to insert and display a spreadsheet area in your 4D forms. A spreadsheet is an application containing a grid of cells into which you can enter information, execute calculations, or display pictures.

Once you use 4D View Pro areas in your forms, you can import and export spreadsheets documents using the 4D View Pro commands.

### Creating the area  

4D View Pro documents are displayed and edited manually in a 4D form object named 4D View Pro. This object is available as part of the last tool (Plug-in Area, Web Area, etc.) found in the object bar:

![](assets/en/ViewPro/vpArea.PNG)

A 4D View Pro form area is configured by means of standard properties found in the Property List, such as **Object Name** and **Variable or Expression**, **Coordinates**, **Display**, **Action**, and **Events**. 

![](assets/en/ViewPro/vpPropertyList.PNG)

*	**Object Name**: name of the 4D form area that contains and displays the 4D View Pro document.
*	**Variable or Expression**: name of the 4D View Pro form area variable.

When the form is executed, the 4D View Pro area displays a spreadsheet by default:

![](assets/en/ViewPro/vpSpreadsheet.PNG)


### User Interfaces  

You can add an interface to 4D View Pro areas to allow end users to perform basic modifications and data manipulations. 4D offers two optional interfaces to choose from, Ribbon and Toolbar. These interfaces can be enabled or disabled from either the Property List or dynamically with code:

*	**Property List**: In the Appearance section:  
	![](assets/en/ViewPro/vpUserInterface.PNG)
	
*	**Dynamically**: Via a JSON file (see Dynamic Forms)
	*	"userInterface": Default value is "none". To enable a toolbar, it can be set to "ribbon" or "toolbar".
	*	"withFormulaBar": Default value is "false". To enable the formular bar, it can be set to "true" . **Note**: Available only for the "toolbar" interface. 

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

#### Ribbon  

The Ribbon interface allows end users to perform comprehensive modifications and data manipulations:

![](assets/en/ViewPro/vpRibbon.PNG)

#### Toolbar  

The Toolbar interface allows end users to perform basic modifications and data manipulations. 

Enabling the Toolbar interface displays the Show Formula Bar option. When selected, the formula bar is visible below the Toolbar interface. If not selected, the formula bar is hidden.

With visible formula bar:

![](assets/en/ViewPro/vpToolbar1.PNG)

With formula bar hidden:

![](assets/en/ViewPro/vpToolbar2.PNG)





## Form Events


The following form events are available in the Property List for 4D View Pro areas.

Some of the events are standard form events (available to all active objects) and some are specific 4D View Pro form events. The specific 4D View Pro form events provide additional information in the object returned by the `FORM Event` command when they are generated for 4D View Pro areas. The following table shows which events are standard and which are specific 4D View Pro form events:

|Standard 4D events (see `Form event code`)	|Specific 4D View Pro events|
|---|---|
|[On Load](../Events/onLoad.md) 	|[On VP Ready](../Events/onVpReady.md)|
|[On Getting Focus](../Events/onGettingFocus.md)	|[On Clicked](../Events/onClicked.md)|
|[On Losing Focus](../Events/onLosingFocus.md) 	|[On Double Clicked](../Events/onDoubleClicked.md)|
|[On Unload](../Events/onUnload.md) 	|[On Header Click](../Events/onHeaderClick.md)|
| 	|[On After Edit](../Events/onAfterEdit.md)|
| 	|[On Selection Change](../Events/onSelectionChange.md)|
| 	|[On Column Resize](../Events/onColumnResize.md)|
| 	|[On Row Resize](../Events/onRowResize.md)|
| 	|[On VP Range Changed](../Events/onVpRangeChanged.md)|




## Using the 4D View Pro Language


The 4D View Pro spreadsheet feature is a built-in 4D component. Thus, the 4D ViewPro element appears on the Methods page of the database Explorer, in the "Component Methods" section:

![](assets/en/ViewPro/lang_overview.PNG)

You can expand this element in order to view all the component commands. These commands can be used in the 4D Method editor just like 4D language commands.


## Handling 4D View Pro areas

### Architecture  

When working with 4D View Pro areas in your forms, you need to handle several elements:

*	The **4D View Pro form area** (4D form object): contains and displays the 4D View Pro object. This area is defined by a name ("Object name" field in the Property list).
*	The **4D View Pro object** ([C_OBJECT](Concepts/dt_object.md) type variable or expression): stores the whole spreadsheet contents (see below). You can get or set this object using the [VP IMPORT FROM OBJECT](languageReference.md#vp-import-from-object) or [VP Export to object](languageReference.md#vp-export-to-object) commands.
*	The **4D View Pro document** (.4vp documents): stores the whole spreadsheet contents in JSON format.

![](assets/en/ViewPro/vpDocument.PNG)


When loading a 4D View Pro object in a form area, 4D generates the [On VP Ready](../Events/onVpReady.md) form event once the whole area is loaded. You must execute any 4D View Pro code handling the area in this event, otherwise an error is returned.

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
|commandBuffers|	Collection|	Stores sequentially the commands called by the method and executes them as a batch (rather than individually) upon exiting the method, or if a command returns a value or the [VP FLUSH COMMANDS](languageReference.md#vp-flush-commands) is called. This mechanism increases performance by reducing the number of requests sent.|
|formulaBar|	Boolean|	Indicates whether or not the formula bar is displayed. Available only for the "toolbar" interface.|
|inited|	Boolean|	Indicates whether or not the 4D View Pro area has been initialized (see On VP Ready).|
|interface|	Text|	Specifies the type of user interface:"ribbon", "toolbar", "none".|

>The 4D View Pro form object variable is for information purposes only (i.e., debugging). Under no circumstances should it be modified.

