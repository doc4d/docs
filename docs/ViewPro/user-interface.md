---
id: user-interface
title: User Interfaces
---

You can add interfaces to 4D View Pro areas. They allow for basic modifications and data manipulation. The Ribbon is set by default in the property list. 

These interfaces can be enabled or disabled either:

*	in the **Property List**, under **Appearance**:  
	![](assets/en/ViewPro/vpUserInterface.PNG)
	
*	using a **JSON file** (see  [Dynamic Forms](https://doc.4d.com/4Dv19/4D/19/Dynamic-Forms.300-5416668.en.html)) with the following properties:
	*	"userInterface": Default value is "none". To enable a toolbar, set it to "Ribbon" or "Toolbar".
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

## Ribbon

The Ribbon interface allows end users to perform comprehensive modifications and data manipulations:

![](assets/en/ViewPro/vpRibbon.PNG)

## Toolbar

The Toolbar interface allows end users to perform basic modifications and data manipulations. 

Enabling the Toolbar interface displays the Show Formula Bar option. When selected, the formula bar is visible below the Toolbar interface. If not selected, the formula bar is hidden.

With visible formula bar:

![](assets/en/ViewPro/vpToolbar.PNG)