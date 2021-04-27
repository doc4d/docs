---
id: usingArea
title: Using a 4D View Pro area
---
   
When executed in forms, 4D View Pro areas provide basic spreadsheet features including cell editing and formula entry. More advanced features are available through the 4D View Pro language.

## Selection, Input and Navigation Basics  

Spreadsheets are composed of rows and columns. A number is associated with each row. A letter (or group of letters once the number of columns surpasses the number of letters in the alphabet) is associated with each column. The intersection of a row and a column makes a cell. Cells can be selected and their contents edited.

### Selection  

*	To select a cell, simply click on it or use the direction arrows on the keyboard. Its content (or formula) is displayed within the cell.

*	To select several continuous cells, drag the mouse from one end of the selection to the other. You can also click on the two ends of the selection while holding down the Shift key.

*	To select all cells in the spreadsheet, click on the cell at the top left of the area:
	![](assets/en/ViewPro/vpSelectAll.PNG)
	
*	To select a column, click on the corresponding letter (or set of letters).

*	To select a row, click on the corresponding number.

*	To select a group of cells that are not continuous, hold down the **Ctrl** key (Windows) or **Command** key (Mac) and click on each cell to be selected.

*	To deselect cells, simply click anywhere within the spreadsheet.

### Input and navigation  

Double-clicking on a cell allows passing into input mode in the relevant cell. If the cell is not empty, the insertion cursor is placed after the content of the cell.

![](assets/en/ViewPro/vpInput.PNG)

Data can be entered directly once a cell is already selected, even if the insertion cursor is not visible. The input then
replaces the content of the cell.

The **Tab** key validates the cell input and selects the cell to its right. Combining the **Shift + Tab** keys validates the cell input and selects the cell to its left.


The **Carriage return** key validates the cell input and selects the cell below it. Combining the **Shift + Carriage return** keys validates the cell input and selects the cell above it.

The direction keys (arrows) allow you to move a cell in the direction indicated by the arrow.

## Entering a Formula, a Function or a Reference  

To enter a formula or a function in a 4D View Pro area:

1.	Select the cell into which you will enter the formula or function.
2.	Enter = (the equal sign).
3.	Enter the formula.  
	OR  
	Click on a cell to enter its reference in the formula.  
	![](assets/en/ViewPro/vpFormula1.PNG)  
	OR  
	Type the first letter of the function to enter. A pop-up menu listing the available functions and references appears, allowing you to select the desired elements:  
	![](assets/en/ViewPro/vpFormula2.PNG)
	
	
## Context Menu  

4D View Pro areas benefit from an automatic context menu that provides users with standard editing features such as copy and paste, but also with basic spreadsheet features:

![](assets/en/ViewPro/vpContext.PNG)

>The Copy/Cut and Paste features of the context menu only work within the spreadsheet area, they do not have access to the system pasteboard. System shortcuts such as **Ctrl+c/Ctrl+v** works however and can be used to exchange data between the area and other applications.

This menu proposes additional features depending on the clicked area:

*	click on a column or row header: **Insert**, **Delete**, **Hide**, or **Unhide** the contents
*	click on a cell or a cell range:
	*	**Filter**: allows hiding row through filters (see [Filtering rows](http://help.grapecity.com/spread/SpreadSheets11/webframe.html#filter.html) in the SpreadJS documentation).
	*	**Sort**: sorts the column contents.
	*	**Insert Comment**: allows user to enter a comment for an area. When a comment has been entered for an area, the top left cell of the area displays a small red triangle:  
		![](assets/en/ViewPro/vpContext2.PNG)