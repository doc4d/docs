---
id: spreadsheet-features
title: Spreadsheet Features
---
   
When executed in forms, 4D View Pro areas provide basic spreadsheet features including cell editing and formula entry. More advanced features are available through the 4D View Pro language.

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

## Using Formulas

A spreadsheet formula is an expression that calculates the value of a cell.

To enter a formula in a 4D View Pro area:

1.	Select the cell into which you will enter the formula or function.
2.	Enter = (the equal sign).
3.	Type the formula and hit the **Enter** key.   

When typing a formula, click on a cell to enter that cell's reference in the formula.

![](assets/en/ViewPro/vpFormula1.PNG) 

You can also create named formulas that can be called via their name. In this case, the formula is entered using the [VP ADD FORMULA NAME](method-reference.md#vp-add-formula-name) command. 

### Operators and Operands
All formulas have operands and operators:

*	**Operators**: see [Operators and values](#operators-and-values)
*	**Operands** are divided into several categories:
	*	values
	*	references to other cells (relatives, absolutes, mixed or by name)
	*	4D variables, fields and functions
	*	4D methods (registered by [VP SET ALLOWED METHODS](method-reference.md#vp-set-allowed-methods)) 
	*	4D formulas (via [VP SET CUSTOM FUNCTIONS](method-reference.md#vp-set-custom-functions))
	*	Spreadsheet functions 
 
### Operators by data types  

4D View Pro supports five types of data. For each data type, specific literal values and operators are supported.

|Data types	|Values|	Operators|
|---|---|---|
|[Number](Concepts/dt_number.md)	|1.2<br>1.2 E3<br>1.2E-3<br>10.3x|+ (addition)<br>- (subtraction)<br>* (multiplication)<br>/ (division)<br>^ (exponent, the number of times to multiply a number by itself)<br>% (percentage -- divide the number before the operator by one hundred)|
|[Date](Concepts/dt_date.md)|	10/24/2017	|+ (date + number of days -> date)<br>+ (date + time -> date + time of day)<br>- (date - number of days -> date)<br>- (date - date -> number of days between the two)|
|[Time](Concepts/dt_time.md)|	10:12:10	|Duration operators:<p>+ (addition)<br>- (subtraction)<br>* (duration * number -> duration)<br>/ (duration / number -> duration)|
|[String](Concepts/dt_string.md)|	'Sophie' or "Sophie"	|& (concatenation)|
|[Boolean](Concepts/dt_boolean.md)|	TRUE or FALSE|	-|


### Comparison operators 
 
The following operators can be used with two operands of the same type:

|Operator	|Comparison|
|---|---|
|=	|equal to|
|<>	|different than|
|>	|greater than|
|<	|less than|
|>=	|greater than or equal to|
|<=	|less than or equal to|


### Operator precedence  

List of operators from most to least important:

|Operator|	Description|
|---|---|
|()|	Parenthesis (for grouping)|
|-	|Negate|
|+	|Plus|
|%|	Percent|
|^	|Exponent|
|* and /|	Multiply and divide|
|+ and -|	Add and Subtract|
|&|	Concatenate
|=  > < >= <= <>|	Compare|



### Operand precedence in formulas  

When two or more different operands have the same name, 4D View Pro determines the type of each element according to the following order:

|Priority|	Element type|
|---|---|
|1|	Cell reference|
|2|	Cell name|
|3|	Spreadsheet function|
|4|	Project method|
|5|	4D command|
|6|	Variable|




### Cell references 
 
 Formulas often refer to other cells by cell addresses. You can copy these formulas into other cells. For example, the following formula, entered in cell C8, adds the values in the two cells above it and displays the result.
= C6 + C7

This formula refers to cells C6 and C7. That is, 4D View Pro is instructed to refer to these other cells for values to use in the formula.

When you copy or move these formulas to new locations, each cell address in that formula will either change or stay the same, depending on how it is typed.

*	A reference that changes is called a relative reference, and refers to a cell by how far left/right and up/down it is from the cell with the formula.

*	A reference that always points to a particular cell is called an absolute reference.

*	You can also create a mixed reference which always points to a fixed row or column.



#### Reference Notation  

If you use only cell coordinates, for example, C5, 4D View Pro interprets the reference as relative. You may make the reference an absolute reference by putting a dollar sign in front of the letter and the number, as in $C$5.

You can mix absolute and relative references by inserting a dollar sign in front of the letter or the number alone, for example, $C5 or C$5. A mixed reference allows you to specify either the row or the column as absolute, while allowing the other portion of the address to refer relatively.

A convenient, fast and accurate way to specify an absolute reference is to name the cell and use that name in place of the cell address. A reference to a named cell is always absolute. You can create or modify named cells or named cell ranges using the `VP ADD RANGE NAME` command.

The following table shows the effect of the different notations:

|Example	|Type of reference	|Description|
|---|---|---|
|C5	|Relative	|Reference is to the relative location of cell C5, depending on the location of the cell in which the reference is first used
|$C$5	|Absolute	|Reference is absolute. Will always refer to cell C5 no matter where it is used.|
|$C5	|Mixed	|Reference is always to column C, but the row reference is relative to the location of the cell in which the reference is first used.|
|C$5	|Mixed	|Reference is always to row 5, but the column reference is relative to the location of the cell in which the reference is first used|
|Cell name	|Absolute	|Reference is absolute. Will always refer to the named cell no matter where the reference is used.|


## Using Functions

Spreadsheet functions are pre-defined formulas. To enter a function in a formula:

1.	Select the cell into which you will enter the function.
2.	Enter = (the equal sign).
3.	Type the first letter of the function to enter. A pop-up menu listing the available functions and references appears, allowing you to select the desired elements:  

![](assets/en/ViewPro/vpFormula2.PNG)

 See the [list of spreadsheet functions](spreadsheet-function-reference.md) for details and examples.
	
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