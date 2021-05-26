---
id: method-reference
title: Method Reference
---

[A](#a) - 
[C](#c) - 
[D](#d) - 
[E](#e) - 
[F](#f) - 
[G](#g) - 
[I](#i) - 
[N](#n) - 
[O](#o) - 
[P](#p) - 
[R](#r) - 
[S](#s) 

## A



### VP ADD FORMULA NAME


<!-- REF _command_.VP_ADD_FORMULA_NAME.Syntax -->**VP ADD FORMULA NAME** ( *vpAreaName* : Text ; *vpFormula* : Text ; *name* : Text { ; *options* : Object } )<!-- END REF -->  

<!-- REF _command_.VP_ADD_FORMULA_NAME.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|vpFormula|Text|->	|4D View Pro formula	
|name|Text|->|Name for the fomula|	
|options|Object|->|Options for the named formula|
<!-- END REF -->  

#### Description

The `VP ADD FORMULA NAME` command <!-- REF _command_.VP_ADD_FORMULA_NAME.Summary -->creates or modifies a named formula in the open document<!-- END REF -->.

>Named formulas created by this command are saved with the document.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

Pass the 4D View Pro formula that you want to name in *vpFormula*. For detailed information about formula syntax, please refer to the [4D View Pro Formulas](formulas-and-functions.md) section.

Pass the new name for the formula in *name*. If the name is already used within the same scope, the new named formula replaces the existing one. Note that you can use the same name for different scopes (see below).

You can pass an object with additional properties for the named formula in *options*. The following properties are supported:

 
|Property	|Type|Description|
|---|---|---|
|scope|	Number|	Scope for the formula. You can pass the sheet index (counting begins at 0) or use the following constants: <p><li>[`vk current sheet`](constant-reference.md#vk-current-sheet)</li><li>[`vk workbook`](constant-reference.md#vk-workbook)</li><p><p>**Note**: The scope determines whether a formula name is local to a given worksheet (*scope*=sheet index or `vk current sheet`), or global across the entire workbook (*scope*=`vk workbook`).|
|comment|Text|Comment associated to named formula


#### Example  

```4d
VP ADD FORMULA NAME("ViewProArea";"SUM($A$1:$A$10)";"Total2")
```



###  VP ADD RANGE NAME


<!-- REF _command_.VP_ADD_RANGE_NAME.Syntax -->**VP ADD RANGE NAME** ( *rangeObj* : Object ; *name* : Text { ; *options* : Object } )<!-- END REF -->  

<!-- REF _command_.VP_ADD_RANGE_NAME.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Text|->|Range object |
|name|Text|->|Name for the fomula|	
|options|Object|->|Options for the named formula|
<!-- END REF -->  

#### Description


The `VP ADD RANGE NAME` command <!-- REF _command_.VP_ADD_RANGE_NAME.Summary -->creates or modifies a named range in the open document<!-- END REF -->.

>Named ranges created by this command are saved with the document.

In *rangeObj*, pass the range that you want to name and in *name*, pass the new name for the range. If the name is already used within the same scope, the new named range replaces the existing one. Note that you can use the same name for different scopes (see below).

You can pass an object with additional properties for the named range in *options*. The following properties are supported:

 
|Property	|Type|Description|
|---|---|---|
|scope|	Number|	Scope for the range. You can pass the sheet index (counting begins at 0) or use the following constants: <p><li>[`vk current sheet`](constant-reference.md#vk-current-sheet)</li><li>[`vk workbook`](constant-reference.md#vk-workbook)</li><p><p>**Note**: The scope determines whether a range name is local to a given worksheet (*scope*=sheet index or `vk current sheet`), or global across the entire workbook (*scope*=`vk workbook`).|
|comment|Text|Comment associated to named range|

>*	A named range is actually a named formula containing coordinates. `VP ADD RANGE NAM`E facilitates the creation of named ranges, but you can also use the [VP ADD FORMULA NAME](#vp-add-formula-name) command to create named ranges.
*	Formulas defining named ranges can be retrieved with the [VP Get formula by name](#vp-get-formula-by-name) command.


#### Example  

You want to create a named range for a cell range:

```4d
$range:=VP Cell("ViewProArea";2;10)
 VP ADD RANGE NAME($range;"Total1")
```



### VP ADD SELECTION

<!-- REF _command_.VP_ADD_SELECTION.Syntax -->**VP ADD SELECTION** ( *rangeObj* : Object )<!-- END REF -->  

<!-- REF _command_.VP_ADD_SELECTION.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Text|->|Range object |
<!-- END REF -->  

#### Description

The `VP ADD SELECTION` command <!-- REF _command_.VP_ADD_SELECTION.Summary -->adds the specified cells to the currently selected cells<!-- END REF -->.

In *rangeObj*, pass a range object of cells to add to the current selection. 

>The active cell is not modified.

#### Example  

You have cells currently selected:

![](assets/en/ViewPro/cmd_vpAddSelection1.PNG)

The following code will add cells to your selection:

```4d
$currentSelection:=VP Cells("myVPArea";3;4;2;3)
VP ADD SELECTION($currentSelection)
```

will display:

![](assets/en/ViewPro/cmd_vpAddSelection2.PNG)



### VP ADD STYLESHEET

<!-- REF _command_.VP_ADD_STYLESHEET.Syntax -->**VP ADD STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text ; *styleObj* : Object { ; *scope* : Longint } )<!-- END REF -->  

<!-- REF _command_.VP_ADD_STYLESHEET.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|styleName|Text|->	|Name of style|	
|styleObj|Object|->|Object defining attribute settings|	
|scope|Longint|->|Target scope (default = current sheet)|
<!-- END REF -->  

#### Description

The `VP ADD STYLESHEET` command <!-- REF _command_.VP_ADD_STYLESHEET.Summary -->creates or modifies the *styleName* style sheet based upon the combination of the properties specified in *styleObj* in the open document<!-- END REF -->. If a style sheet with the same name and scope already exists in the document, this command will overwrite it with the new values. 

>Style sheets created by this command are saved with the document.


In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned. 

The *styleName* parameter lets you assign a name to the style sheet. If the name is already used within the same scope, the new style sheet replaces the existing one. Note that you can use the same name for different scopes (see below). 

Within the *styleObj*, designate the settings for the style sheet (e.g., font, text decoration, alignment, borders, etc.). For the full list of style properties, see [4D View Pro Style Objects and Style Sheets](configuring.md#style-objects-and-style-sheets).

You can designate where to define the style sheet in the optional *scope* parameter using the sheet index (counting begins at 0) or with the following constants:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)
*	[`vk workbook`](constant-reference.md#vk-workbook)
 
If a *styleName* style sheet is defined at the workbook level and at a sheet level, the sheet level has priority over the workbook level when the style sheet is set. 

To apply the style sheet, use the [VP SET DEFAULT STYLE](#vp-set-default-style) or [VP SET CELL STYLE](#vp-set-cell-style) commands. 


#### Example  

The following code:

```4d
$styles:=New object
$styles.backColor:="green"
 
//Line Border Object
$borders:=New object("color";"green";"style";vk line style medium dash dot)
 
$styles.borderBottom:=$borders
$styles.borderLeft:=$borders
$styles.borderRight:=$borders
$styles.borderTop:=$borders
 
VP ADD STYLESHEET("ViewProArea";"GreenDashDotStyle";$styles)
 
//To apply the style
VP SET CELL STYLE(VP Cells("ViewProArea";1;1;2;2);New object("name";"GreenDashDotStyle"))
```

will create and apply the following style object named *GreenDashDotStyle*:

```4d
{
backColor:green,
borderBottom:{color:green,style:10},
borderLeft:{color:green,style:10},
borderRight:{color:green,style:10},
borderTop:{color:green,style:10}
}
```



### VP All

<!-- REF _command_.VP_ALL.Syntax -->**VP All** ( *vpAreaName* : Text { ; *sheet* : Longint } )  : Object<!-- END REF -->  

<!-- REF _command_.VP_ALL.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|sheet|Longint|->|Sheet index (current sheet if omitted)|	
|Result|Object|<-|Range object of all cells|
<!-- END REF -->  

#### Description


The `VP ALL` command <!-- REF _command_.VP_ALL.Summary -->returns a new range object referencing all cells<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)


#### Example  

You want to define a range object for all of the cells of the current spreadsheet:

```4d
$all:=VP All("ViewProArea") // all cells of the current sheet
```




## C

### VP Cell

<!-- REF _command_.VP_Cell.Syntax -->**VP Cell** ( *vpAreaName* : Text { ; *sheet* : Longint } )  : Object<!-- END REF -->  

<!-- REF _command_.VP_Cell.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|sheet|Longint|->|Sheet index (current sheet if omitted)|	
|Result|Object|<-|Range object of all cells|
<!-- END REF -->  

#### Description


The `VP Cell` command <!-- REF _command_.VP_Cell.Summary -->returns a new range object referencing a specific cell<!-- END REF -->. 

>This command is intended for ranges of a single cell. To create a range object for multiple cells, use the [VP Cells](#vp-cells) command.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)


#### Example  

You want to define a range object for all of the cells of the current spreadsheet:

```4d
$all:=VP All("ViewProArea") // all cells of the current sheet
```



### VP Cells

<!-- REF _command_.VP_Cells.Syntax -->**VP Cells** ( *vpAreaName* : Text ; *column*: Longint ; *row*: Longint ; *columnCount* : Longint ; *rowCount* : Longint { ; *sheet* : Longint } ) : Object<!-- END REF -->  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added
</details>

<!-- REF _command_.VP_Cells.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|column| Longint|->|Column index|
|row| Longint|->|Row index|
|columnCount| Longint|->|Number of columns|
|rowCount| Longint|->|Number of rows|
|sheet|Longint|->|Sheet index (current sheet if omitted)|	
|Result|Object|<-|Range object of cells|
<!-- END REF -->  

#### Description


The `VP Cells` command <!-- REF _command_.VP_Cells.Summary -->returns a new range object referencing specific cells<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *column* parameter defines the first column of the cell range. Pass the column index (counting begins at 0) in this parameter. If the range is within multiple columns, you should also use the *columnCount* parameter.

In the *row* parameter, you can define the row(s) of the cell range's position. Pass the row index (counting begins at 0) in this parameter. If the range is within multiple rows, you should also use the *rowCount* parameter.

The *columnCount* parameter allows you to define the total number of columns the range is within. *columnCount* must be greater than 0.

The *rowCount* parameter allows you to define the total number of rows the range is within. *rowCount* must be greater than 0.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)


#### Example  

You want to define a range object for the following cells (on the current sheet):

![](assets/en/ViewPro/cmd_vpCells.PNG)

The code would be:

```4d
$cells:=VP Cells("ViewProArea";2;4;2;3) // C5 to D7
```



### VP Column

<!-- REF _command_.VP_Column.Syntax -->**VP Column** ( *vpAreaName* : Text ; *column*: Longint ; *columnCount* : Longint { ; *sheet* : Longint } ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Column.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|column| Longint|->|Column index|
|columnCount| Longint|->|Number of columns|
|sheet|Longint|->|Sheet index (current sheet if omitted)|	
|Result|Object|<-|Range object of cells|
<!-- END REF -->  

#### Description


The `VP Column` command <!-- REF _command_.VP_Column.Summary -->returns a new range object referencing a specific column or columns<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *column* parameter defines the first column of the column range. Pass the column index (counting begins at 0)  in this parameter. If the range contains multiple columns, you should also use the optional *columnCount* parameter.

The optional *columnCount* parameter allows you to define the total number of columns of the range. *columnCount* must be greater than 0. If omitted, the value will be set to 1 by default and a column type range is created.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)


#### Example  

You want to define a range object for the column shown below (on the current spreadsheet):

![](assets/en/ViewPro/cmd_vpColumn.PNG)

The code would be:

```4d
 $column:=VP Column("ViewProArea";3) // column D
```



### VP COLUMN AUTOFIT

<!-- REF _command_.VP_COLUMN_AUTOFIT.Syntax -->**VP COLUMN AUTOFIT** ( *rangeObj* : Object )<!-- END REF -->  

<!-- REF _command_.VP_COLUMN_AUTOFIT.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Object|->|Range object|

<!-- END REF -->  

#### Description

The `VP COLUMN AUTOFIT` command <!-- REF _command_.VP_COLUMN_AUTOFIT.Summary -->automatically sizes the column(s) in rangeObj according to their contents<!-- END REF -->. 

In *rangeObj*, pass a range object containing a range of the columns whose size will be automatically handled.


#### Example  

The following columns are all the same size and don't display some of the text: 

![](assets/en/ViewPro/cmd_vpColumnAutoFit1.PNG)

Selecting the columns and running this code:

```4d
 VP COLUMN AUTOFIT(VP Get selection("ViewProarea"))
```

Resizes the columns to fit the size of the contents: 

![](assets/en/ViewPro/cmd_vpColumnAutoFit2.PNG)




### VP Combine Ranges


<!-- REF _command_.VP_Combine_Ranges.Syntax -->**VP Combine Ranges** ( *rangeObj* : Object ; *otherRangeObj* : Object {; *otherRangeObj2* : Object ; ... ; *otherRangeObjN* : Object }  ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Combine_Ranges.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Object|->|Range object|
|otherRangeObj| Object|->|Range object|
|Result| Object|<-|Object containing a combined range|

<!-- END REF -->  

#### Description

The `VP Combine Ranges` command <!-- REF _command_.VP_Combine_Ranges.Summary -->returns a new range object that incorporates two or more existing range objects<!-- END REF -->. All of the ranges must be from the same 4D View Pro area.

In *rangeObj*, pass the first range object.

In *otherRangeObj*, pass another range object(s) to combine with *rangeObj*.

>The command incorporates *rangeObj* and *otherRangeObj* objects by reference.

#### Example  

You want to combine cell, column, and row range objects in a new, distinct range object:


```4d
 $cell:=VP Cell("ViewProArea";2;4) // C5
 $column:=VP Column("ViewProArea";3) // column D
 $row:=VP Row("ViewProArea";9) // row 10
 
 $combine:=VP Combine ranges($cell;$column;$row)
```



### VP Convert from 4D View

<!-- REF _command_.VP_Convert_from_4D_View.Syntax -->**VP Convert from 4D View** ( *4DViewDocument* : Blob ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Convert_from_4D_View.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|4DViewDocument| Blob|->|4D View document|
|Result| Object|<-|4D View Pro object	


<!-- END REF -->  

#### Description

The `VP Convert from 4D View` command <!-- REF _command_.VP_Convert_from_4D_View.Summary -->allows you to convert a legacy 4D View document into a 4D View Pro object<!-- END REF -->. 

>This command does not require that the legacy 4D View plug-in be installed in your environment.


In the *4DViewDocument* parameter, pass a BLOB variable or field containing the 4D View document to convert. The command returns a 4D View Pro object into which all the information originally stored within the 4D View document is converted to 4D View Pro attributes.

#### Example  


You want to get a 4D View Pro object from a 4D View area stored in a BLOB:


```4d
C_OBJECT($vpObj)
$vpObj:=VP Convert from 4D View($pvblob)
```



### VP Convert to picture

<!-- REF _command_.VP_Convert_to_picture.Syntax -->**VP Convert to picture** ( *vpObject* : Object {; *rangeObj* : Object} ) : Picture<!-- END REF -->  

<!-- REF _command_.VP_Convert_to_picture.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpObject| Object|->|4D View Pro object containing the area to convert|
|rangeObj| Object|->|Range object|
|Result| Object|<-|SVG picture of the area|	


<!-- END REF -->  

#### Description

The `VP Convert to picture` command <!-- REF _command_.VP_Convert_to_picture.Summary -->converts the *vpObject* 4D View Pro object (or the *rangeObj* range within *vpObject*) to a SVG picture<!-- END REF -->. 

This command is useful, for example:

*	to embed a 4D View Pro document in an other document such as a 4D Write Pro document
*	to print a 4D View Pro document without having to load it into a 4D View Pro area.

In *vpObject*, pass the 4D View Pro object that you want to convert. This object must have been previously parsed using [VP Export to object](#vp-export-to-object) or saved using [VP EXPORT DOCUMENT](#vp-export-document).  

>SVG conversion process requires that expressions and formats (cf. [4D View Pro Cell Format](configuring.md#cell-format)) included in the 4D View Pro area be evaluated at least once, so that they can be correctly exported. If you convert a document that was not evaluated beforehand, expressions or formats may be rendered in an unexpected way. 

In *rangeObj*, pass a range of cells to convert. By default, if this parameter is omitted, the whole document contents are converted. 

Document contents are converted with respect to their viewing attributes, including formats (see note above), visibility of headers, columns and rows. The conversion of the following elements is supported:

*	Text : style / font / size / alignment / orientation / rotation / format
*	Cell background : color / image
*	Cell borders : thickness / color / style
*	Cell merge
*	Pictures
*	Row height
*	Column width
*	Hidden columns / rows. 

>Gridline visibility depends on document attribute defined with [VP SET PRINT INFO](#vp-set-print-info). 

#### Function result

The command returns a picture in SVG format.


#### Example  

You want to convert a 4D View Pro area in SVG, preview the result, and send it to a picture variable:


```4d
C_OBJECT($vpAreaObj)
C_PICTURE($vPict)
$vpAreaObj:=VP Export to object("ViewProArea")
$vPict:=VP Convert to picture($vpAreaObj) //export the whole area
```


## D

### VP DELETE COLUMNS

<!-- REF _command_.VP_DELETE_COLUMNS.Syntax -->**VP DELETE COLUMNS** ( *rangeObj* : Object )<!-- END REF -->  

<!-- REF _command_.VP_DELETE_COLUMNS.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Object|->|Range object|
<!-- END REF -->  

#### Description

The `VP DELETE COLUMNS` command <!-- REF _command_.VP_DELETE_COLUMNS.Summary -->removes the columns in the *rangeObj*<!-- END REF -->. 

In *rangeObj*, pass an object containing a range of columns to remove. If the passed range contains:

*	both columns and rows, only the columns are removed. 
*	only rows, the command does nothing.

>Columns are deleted from right to left.

#### Function result

The command returns a picture in SVG format.


#### Example  

To delete columns selected by the user (in the image below columns B, C, and D):

![](assets/en/ViewPro/cmd_vpDeleteColumns.PNG)

use the following code:

```4d
VP DELETE COLUMNS(VP Get selection("ViewProArea"))
```



### VP DELETE ROWS

<!-- REF _command_.VP_DELETE_ROWS.Syntax -->**VP DELETE ROWS** ( *rangeObj* : Object )<!-- END REF -->  

<!-- REF _command_.VP_DELETE_ROWS.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Object|->|Range object|
<!-- END REF -->  

#### Description

The `VP DELETE ROWS` command <!-- REF _command_.VP_DELETE_ROWS.Summary -->removes the rows  in the *rangeObj*<!-- END REF -->. 

In *rangeObj*, pass an object containing a range of rows  to remove. If the passed range contains:

*	both columns and rows, only the rows  are removed. 
*	only columns, the command does nothing.

>Rows are deleted from bottom to top.

#### Function result

The command returns a picture in SVG format.


#### Example  

To delete rows selected by the user (in the image below rows 1, 2, and 3):

![](assets/en/ViewPro/cmd_vpDeleteRows.PNG)

use the following code:

```4d
 VP DELETE ROWS(VP Get selection("ViewProArea"))
```



## E

### VP EXPORT DOCUMENT

<!-- REF _command_.VP_EXPORT_DOCUMENT.Syntax -->**VP EXPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text {; *paramObj* : Object} )<!-- END REF -->  

<!-- REF _command_.VP_EXPORT_DOCUMENT.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|filePath| Text|->|Pathname of the document|
|paramObj| Object|->|Export options|
<!-- END REF -->  

#### Description

The `VP EXPORT DOCUMENT` command <!-- REF _command_.VP_EXPORT_DOCUMENT.Summary -->exports the 4D View Pro object attached to the 4D View Pro area *vpAreaName* to a document on disk according to the *filePath* and *paramObj* parameters<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In *filePath*, pass the destination path and name of the document to be exported. You can specify the document format by including its extension, 4D View Pro (".4vp"), Microsoft Excel (".xlsx"), or PDF (".pdf") after the document's name. If you pass only the document name, it will be saved at the same level as the 4D structure file with the default ".4vp" extension.

The optional *paramObj* parameter allows you to define multiple properties for the exported 4D View Pro object, as well as launch a callback method when the export has completed.
 
 
|Property|	Type|	Description|
|---|---|---
|format|	text|	(optional) When present, designates the exported file format: ".4vp" (default), ".xlsx", or ".pdf". You can pass a constant from the 4D View Pro Constants theme in the format parameter. In this case, 4D adds the appropriate extension to the file name if needed.<p>The following formats are supported:<p><table><tr><td>[`vk 4D View_Pro format`](constant-reference.md#vk-4d-view-pro-format)</td></tr><tr><td>[`vk MS Excel format`](constant-reference.md#vk-ms-excel-format)</td></tr><tr><td>[`vk pdf format`](constant-reference.md#vk-pdf-format)</td></tr></table><br><p>If the format specified doesn't correspond with the extension in *filePath*, it will be added to the end of *filePath*. If a format is not specified and no extension is provided in *filePath*, the default file format is used.|
|password|	text|	Microsoft Excel only (optional) - Password used to protect the MS Excel document|
|formula|	object	|Callback method to be launched when the export has completed. Using a callback method is necessary when the export is asynchronous (which is the case for PDF and Excel formats) if you need some code to be executed after the export. The callback method must be used with the `Formula` command (see below for more information).|
|valuesOnly|	boolean|	Specifies that only the values from formulas (if any) will be exported.|
|includeFormatInfo|	boolean|	True to include formatting information, false otherwise (default is true). Formatting information is useful in some cases, e.g. for export to SVG. On the other hand, setting this property to **false** allows reducing export time.|
|sheetIndex|	number|	PDF only (optional) - Index of sheet to export (starting from 0). -2=all visible sheets (**default**), -1=current sheet only|
|pdfOptions|	object|	PDF only (optional) - Options for the pdf export <p><table><tr><th>Property</th><th>Type</yh><th>Description</th></tr><tr><td>creator</td><td>text</td><td>name of the application that created the original document from which it was converted.</td></tr><tr><td>title</td><td>text</td><td>title of the document.</td></tr><tr><td>author</td><td>text</td><td>name of the person who created that document.</td></tr><tr><td>keywords</td><td>text</td><td>keywords associated with the document.</td></tr><tr><td>subject</td><td>text</td><td>subject of the document.</td></tr></table>|
|\<customProperty>|	any|	Any custom property that will be available through the $3 parameter in the callback method.|

>**Notes about Excel format**: 
>
>*	When exporting a 4D View Pro document into a Microsoft Excel-formatted file, some settings may be lost. For example, 4D methods and formulas are not supported by Excel. You can verify other settings with [this list](http://help.grapecity.com/spread/SpreadSheets10/webframe.html#excelexport.html) from GrapeCity.
>
>*	Exporting in this format is run asynchronously, use the *formula* property of the *paramObj* for code to be executed after the export. 


>**Notes about PDF format**: 
>
>*	When exporting a 4D View Pro document in PDF, the fonts used in the document are automatically embedded in the PDF file. Only OpenType fonts (.OTF or .TTF files) having a Unicode map can be embedded. If no valid font file is found for a font, a default font is used instead. 
>
>*	Exporting in this format is run asynchronously, use the *formula* property of the *paramObj* for code to be executed after the export.

Once the export operation is finished, `VP EXPORT DOCUMENT` automatically triggers the execution of the method set in the *formula* property of the *paramObj*, if used. 


#### Passing a callback method (formula)  

When including the optional *paramObj* parameter, the `VP EXPORT DOCUMENT` command allows you to use the `Formula` command to call a 4D method which will be executed once the export has completed. The callback method will receive the following values in local variables:

|Variable|		|Type|	Description|
|---|---|---|---|
|$1|		|text|	The name of the 4D View Pro object|
|$2|		|text|	The filepath of the exported 4D View Pro object|
|$3|		|object|	A reference to the command's *paramObj*|
$4|		|object|	An object returned by the method with a status message|
||.success	|boolean|	True if export with success, False otherwise.|
||.errorCode	|integer|	Error code. May be returned by 4D or JavaScript.|
||.errorMessage	|text|	Error message. May be returned by 4D or JavaScript.|


#### Example 1 

You want to export the contents of the "VPArea" area to a 4D View Pro document on disk:

```4d
C_TEXT($docPath)
 
$docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
VP EXPORT DOCUMENT("VPArea";$docPath)
//MyExport.4VP is saved on your disk
```


#### Example 2 

You want to export the current sheet in PDF:

```4d
C_OBJECT($params)
$params:=New object
$params.format:=vk pdf format
$params.sheetIndex:=-1
$params.pdfOptions:=New object("title";"Annual Report";"author";Current user)
VP EXPORT DOCUMENT("VPArea";"report.pdf";$params)
```


#### Example 3 

You want to export a 4D View Pro document in ".xlsx" format and call a method that will launch Microsoft Excel with the document open once the export has completed:

```4d
 $params:=New object
 $params.formula:=Formula(AfterExport)
 $params.format:=vp MS Excel format //".xlsx"
 $params.valuesOnly:=True
 
 VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\convertedfile";$params)
```

***AfterExport*** method:

```4d
 C_TEXT($1;$2)
 C_OBJECT($3;$4)
 $areaName:=$1
 $filePath:=$2
 $params:=$3
 $status:=$4
 
 If($status.success=False)
    ALERT($status.errorMessage)
 Else
    LAUNCH EXTERNAL PROCESS("C:\\Program Files\\Microsoft Office\\Office15\\excel "+$filePath)
 End if
```



### VP Export to object

<!-- REF _command_.VP_Export_to_object.Syntax -->**VP Export to object** ( *vpAreaName* : Text {; *option* : Object} ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Export_to_object.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|

|option| Object|->|Export option|
|Result| Object|<-|4D View Pro object|
<!-- END REF -->  

#### Description

The `VP Export to object` command <!-- REF _command_.VP_Export_to_object.Summary --> returns the 4D View Pro object attached to the 4D View Pro area *vpAreaName*<!-- END REF -->. You can use this command for example to store the 4D View Pro area in a 4D database object field.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In the *option* parameter, you can pass the following export option, if required:
 
 
|Property|	Type|	Description|
|---|---|---
|includeFormatInfo|	boolean|True to include formatting information, false otherwise (default is **true**). Formatting information is useful in some cases, e.g. for export to SVG. On the other hand, setting this property to **false** allows reducing export time.	|

For more information on 4D View Pro objects, please refer to the [4D View Pro object](architecture.md#automatic-handling-of-the-4d-view-pro-object) paragraph.


#### Example 1 

You want to get the "version" property of the current 4D View Pro area:

```4d
C_OBJECT($vpAreaObj)
C_LONGINT($vpVersion)
$vpAreaObj:=VP Export to object("vpArea")
 // $vpVersion:=OB Get($vpAreaObj;"version")
$vpVersion:=$vpAreaObj.version
```


#### Example 2 

You want to export the area, excluding formatting information:

```4d
C_OBJECT($vpObj)
$vpObj:=VP Export to object("vpArea";New object("includeFormatInfo";False))
```



## F

### VP Find


<!-- REF _command_.VP_Find.Syntax -->**VP Find** (  *rangeObj* : Object ; *searchValue* : Text { ; *searchCondition* : Object {; *replaceValue* : Text } } ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Find.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj |Object|->|Range object|
|searchValue |Text|->|Search value|
|searchCondition |Object|->|Object containing search condition(s)|
|replaceValue  |Text|->|Replacement value|
|Result|Object|<-|Range object|
<!-- END REF -->  

#### Description
The `VP Find` command <!-- REF _command_.VP_Find.Summary -->searches the *rangeObj* for the *searchValue*<!-- END REF -->. Optional parameters can be used to refine the search and/or replace any results found.  

In the *rangeObj* parameter, pass an object containing a range to search.  

The *searchValue* parameter lets you pass the text to search for within the *rangeObj*.  

You can pass the optional *searchCondition* parameter to specify how the search is performed. The following properties are supported:  
 
 
|Property|	Type|	Description|
|---|---|---
|afterColumn|Longint|The number of the column just before the starting column of the search. If the *rangeObj* is a combined range, the column number given must be from the first range. Default value: -1 (beginning of the *rangeObj*)|
|afterRow|Longint|The number of the row just before the starting row of the search. If the *rangeObj* is a combined range, the row number given must be from the first range. Default value: -1 (beginning of the *rangeObj*) |
|all|Boolean |<li>True - All cells in *rangeObj* corresponding to *searchValue* are returned</li><li>False - (default value) Only the first cell in *rangeObj* corresponding to *searchValue* is returned</li>|
|flags|	Longint|<table><tr><td>[`vk find flag exact match`](constant-reference.md#vk-find-flag-exact-match)</td></tr><tr><td>[`vk find flag ignore case`](constant-reference.md#vk-find-flag-ignore-case)</td></tr><tr><td>[`vk find flag none`](constant-reference.md#vk-find-flag-none)</td></tr><tr><td>[`vk find flag use wild cards`](constant-reference.md#vk-find-flag-use-wild-cards)</td></tr></table><p>These flags can be combined. For example:<p> <code>$search.flags:=vk find flag use wild cards+vk find flag ignore case</code>|
|order|	Longint |<table><tr><td>[`vk find order by columns`](constant-reference.md#vk-find-order-by-columns)</td></tr><tr><td>[`vk find order by rows`](constant-reference.md#vk-find-order-by-rows)</td></tr></table> |
|target|Longint|<table><tr><td>[`vk find target formula`](constant-reference.md#vk-find-target-formula)</td></tr><tr><td>[`vk find target tag`](constant-reference.md#vk-find-target-tag)</td></tr><tr><td>[`vk find target text`](constant-reference.md#vk-find-target-text)</td></tr></table><p>These flags can be combined. For example:<p> <code>$search.target:=vk find target formula+vk find target text</code>|

In the optional *replaceValue* parameter, you can pass text to take the place of any instance of the text in *searchValue* found in the *rangeObj*.


#### Returned Object

The function returns a range object describing each search value that was found or replaced. An empty range object is returned if no results are found.


#### Example 1 

To find the first cell containing the word "Total": 

```4d
var $range;$result : Object
 
$range:=VP All("ViewProArea")
 
$result:=VP Find($range;"Total")
```


#### Example 2 

To find "Total" and replace it with "Grand Total":  

```4d
var $range;$condition;$result : Object
 
$range:=VP All("ViewProArea")
 
$condition:=New object
$condition.target:=vk find target text
$condition.all:=True //Search entire document
$condition.flags:=vk find flag exact match
 
  // Replace the cells containing only 'Total' in the current sheet with "Grand Total"
$result:=VP Find($range;"Total";$condition;"Grand Total")
 
  // Check for empty range object 
If($result.ranges.length=0)
    ALERT("No result found")
Else
    ALERT($result.ranges.length+" results found")
End if
```




### VP FLUSH COMMANDS

<!-- REF _command_.VP_FLUSH_COMMANDS.Syntax -->**VP FLUSH COMMANDS** (  *vpAreaName* : Text )<!-- END REF -->  

<!-- REF _command_.VP_FLUSH_COMMANDS.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area form object name|
<!-- END REF -->  

#### Description

The `VP FLUSH COMMANDS` command <!-- REF _command_.VP_FLUSH_COMMANDS.Summary -->immediately executes stored commands and clears the command buffer<!-- END REF -->.  

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In order to increase performance and reduce the number of requests sent, the 4D View Pro commands called by the developer are stored in a command buffer. When called, `VP FLUSH COMMANDS` executes the commands as a batch when leaving the method and empties the contents of the command buffer.

#### Example

You want to trace the execution of the commands and empty the command buffer:

```4d
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")
 
 VP FLUSH COMMANDS(("ViewProArea1")
 TRACE
```



### VP Font to object

<!-- REF _command_.VP_Font_to_object.Syntax -->**VP Font to object** (  *font* : Text ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Font_to_object.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|font  |Text|->|Font shorthand string|
<!-- END REF -->  

#### Description

The `VP Font to object` utility command <!-- REF _command_.VP_Font_to_object.Summary -->returns an object from a font shorthand string<!-- END REF -->. This object can then be used to set or get font property settings via object notation. 

In the *font* parameter, pass a font shorthand string to specify the different properties of a font (e.g., "12 pt Arial"). You can learn more about font shorthand strings [here](https://www.w3schools.com/cssref/pr_font_font.asp).

The returned object contains defined font attributes as properties. For more information about the available properties, see the [VP Object to font](#vp-object-to-font) command.

#### Example 1

This code:

```4d
$font:=VP Font to object("16pt arial")
```

will return the following $font object:

```4d
{
family:arial
size:16pt
}
```

#### Example 2  

See example for [`VP Object to font`](#vp-object-to-font).



## G

### VP Get active cell

<!-- REF _command_.VP_Get_active_cell.Syntax -->**VP Get active cell** (  *vpAreaName* : Text { ; *sheet* : Longint } ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Get_active_cell.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area form object name|
|sheet  |Longint|->|Sheet index (current sheet if omitted)|
|Result  |Object|<-|Range object of single cell|
<!-- END REF -->  

#### Description

The `VP Get active cell` command <!-- REF _command_.VP_Get_active_cell.Summary -->returns a new range object referencing the cell which has the focus and where new data will be entered (the active cell)<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)


#### Example 

The following code:

```4d
$activeCell:=VP Get active cell("myVPArea")
 
  //returns a range object containing: 
  //$activeCell.ranges[0].column=3
  //$activeCell.ranges[0].row=4
  //$activeCell.ranges[0].sheet=0
```

will retrieve the coordinates of the active cell:

![](assets/en/ViewPro/cmd_vpGetActiveCell.PNG)



### VP Get cell style

<!-- REF _command_.VP_Get_cell_style.Syntax -->**VP Get cell style** (  *rangeObj* : Object ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Get_cell_style.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj  |Object|->|Range object|
|Result  |Object|<-|Style object|
<!-- END REF -->  

#### Description

The `VP Get cell style` command <!-- REF _command_.VP_Get_cell_style.Summary -->returns a style object for the first cell in the *rangeObj*<!-- END REF -->. 

In *rangeObj*, pass a range containing the style to retrieve. 

*	If *rangeObj* contains a cell range, the cell style is returned.
*	If *rangeObj* contains a range that is not a cell range, the style of the first cell in the range is returned.
*	If *rangeObj* contains several ranges, only the style of the first cell in the first range is returned.


#### Example 

To get the details about the style in the selected cell (B2): 

![](assets/en/ViewPro/cmd_vpGetCellStyle.PNG)

This code:

```4d
$cellStyle:=VP Get cell style(VP Get selection("myDoc"))
```

Will return this object:

```4d
{
  "backColor":"Azure",
  "borderBottom":
   {
     "color":#800080,
     "style":5
   }
  "font":"8pt Arial",
  "foreColor":"red",
  "hAlign":1,
  "isVerticalText":"true",
  "vAlign":0
}
```



### VP Get column attributes

<!-- REF _command_.VP_Get_column_attributes.Syntax -->**VP Get column attributes** (  *rangeObj* : Object ) : Collection<!-- END REF -->  

<!-- REF _command_.VP_Get_column_attributes.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj  |Object|->|Range object|
|Result  |Collection|<-|Collection of column properties|
<!-- END REF -->  

#### Description

The `VP Get column attributes` command <!-- REF _command_.VP_Get_column_attributes.Summary -->returns a collection of properties for any column in the *rangeObj*<!-- END REF -->. 

In *rangeObj*, pass an object containing a range of the columns whose attributes will be retrieved.

The returned collection contains any properties for the columns, whether or not they have been set by the [VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes) command.


#### Example 

The following code:

```4d
C_OBJECT($range)
C_COLLECTION($attr)
 
$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get column attributes($range)
```

will return a collection of the attributes within the given range:

![](assets/en/ViewPro/cmd_vpGetColumnAttributes.PNG)



### VP Get column count

<!-- REF _command_.VP_Get_column_count.Syntax -->**VP Get column count** ( *vpAreaName* : Text { ; *sheet* :  Longint } ) : Longint<!-- END REF -->  

<!-- REF _command_.VP_Get_column_count.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area from object name|
|sheet  |Longint|->|Sheet index (current sheet if omitted)|
|Result  |Longint|<-|Total number of columns	|
<!-- END REF -->  

#### Description

The `VP Get column count` command <!-- REF _command_.VP_Get_column_count.Summary -->returns the total number of columns from the designated *sheet*<!-- END REF -->. 

In *vpAreaName*, pass the name property of the 4D View Pro area. If you pass a name that does not exist, an error is returned. 

You can define where to get the column count in the optional *sheet* parameter using the sheet index (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

 
*	[`vk current sheet`](constant-reference.md#vk-current-sheet)

#### Example 

The following code returns the number of columns in the 4D View Pro area:

```4d
C_LONGINT($colCount)
$colCount:=VP Get column count("ViewProarea")
```



### VP Get default style

<!-- REF _command_.VP_Get_default_style.Syntax -->**VP Get default style** ( *vpAreaName* : Text { ; *sheet* :  Longint } ) : Longint<!-- END REF -->  

<!-- REF _command_.VP_Get_default_style.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area from object name|
|sheet  |Longint|->|Sheet index (current sheet if omitted)|
|Result  |Longint|<-|Total number of columns	|
<!-- END REF -->  

#### Description

The `VP Get default style` command <!-- REF _command_.VP_Get_default_style.Summary -->returns a default style object for a sheet<!-- END REF -->. The returned object contains basic document rendering properties as well as the default style settings (if any) previously set by the [VP SET DEFAULT STYLE](#vp-set-default-style) command. For more information about style properties, see [4D View Pro Style Objects and Style Sheets](configuring.md#style-objects-and-style-sheets).

In *vpAreaName*, pass the name property of the 4D View Pro area. If you pass a name that does not exist, an error is returned. 

You can define where to get the column count in the optional *sheet* parameter using the sheet index (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

 
*	[`vk current sheet`](constant-reference.md#vk-current-sheet)

#### Example 

To get the details about the default style for this document:

![](assets/en/ViewPro/cmd_vpGetDefaultStyle.PNG)

This code: 

```4d
$defaultStyle:=VP Get default style("myDoc")
```

will return this information in the *$defaultStyle* object:

```4d
{
backColor:#E6E6FA,
hAlign:0,
vAlign:0,
font:12pt papyrus
}
```



### VP Get formula

<!-- REF _command_.VP_Get_formula.Syntax -->**VP Get formula** ( *rangeObj* : Object) : Text<!-- END REF -->  

<!-- REF _command_.VP_Get_formula.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj  |Object|->|Range object|
|Result  |Text|<-|Formula|
<!-- END REF -->  

#### Description

The `VP Get formula` command <!-- REF _command_.VP_Get_formula.Summary -->retrieves the formula from a designated cell range<!-- END REF -->. 

In *rangeObj*, pass a range whose formula you want to retrieve. If *rangeObj* designates multiple cells or multiple ranges, the formula of the first cell is returned. If *rangeObj* is a cell that does not contain a formula, the command returns an empty string.

#### Example 

```4d
  //set a formula
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
 
$result:=VP Get formula(VP Cell("ViewProArea";5;2)) // $result="SUM($A$1:$C$10)"
```



### VP Get formula by name

<!-- REF _command_.VP_Get_formula_by_name.Syntax -->**VP Get formula by name** ( *vpAreaName* : Text ; *name* : Text { ; *scope* : Number } ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Get_formula_by_name.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area form object name|
|name  |Text|->|Name of the named range|
|scope  |Number|->|Target scope (default=current sheet)|
|Result  |Text|<-|Named formula or named range definition|
<!-- END REF -->  

#### Description

The `VP Get formula by name` command <!-- REF _command_.VP_Get_formula_by_name.Summary --> returns the formula and comment corresponding to the named range or named formula passed in the *name* parameter, or **null** if it does not exist in the defined scope<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned. 

Pass the named range or named formula that you want to get in *name*. Note that named ranges are returned as formulas containing absolute cell references.

You can define where to get the formula in *scope* using either the sheet index (counting begins at 0) or the following constants:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet) 
*	[`vk workbook`](constant-reference.md#vk-workbook)  
 
 
##### Returned Object

The returned object contains the following properties:

|Property|	Type|	Description|
|---|---|---|
|formula	|Text	|Text of the formula corresponding to the named formula or named range. For named ranges, the formula is a sequence of absolute coordinates.|
|comment|	Text|	Comment corresponding to the named formula or named range |
 
#### Example 

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)
 
$formula:=VP Get formula by name("ViewProArea";"Total1")
  //$formula.formula=Sheet1!$A$1
 
$formula:=VP Get formula by name("ViewProArea";"Total")
  //$formula=null (if not existing)
```



### VP Get formulas

<!-- REF _command_.VP_Get_formulas.Syntax -->**VP Get formulas** ( *rangeObj* : Object ) : Collection<!-- END REF -->  

<!-- REF _command_.VP_Get_formulas.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj  |Object|->|Range object|
|Result  |Collection|<-|Collection of formula values|
<!-- END REF -->  

#### Description

The `VP Get formulas` command <!-- REF _command_.VP_Get_formulas.Summary -->retrieves the formulas from a designated *rangeObj*<!-- END REF -->. 

In *rangeObj*, pass a range whose formulas you want to retrieve. If *rangeObj* designates multiple ranges, the formula of the first range is returned. If *rangeObj* does not contain any formulas, the command returns an empty string.

The returned collection is two-dimensional: 

*	The first-level collection contains subcollections of formulas. Each subcollection reprensents a row.
*	Each subcollection defines cell values for the row. Values are text elements containing the cell formulas. 
 
#### Example 

You want to retrieve the formulas in the Sum and Average columns from this document:

![](assets/en/ViewPro/cmd_vpGetFormulas.PNG)

You can use this code:

```4d
$formulas:=VP Get formulas(VP Cells("ViewProArea";5;1;2;3))
//$formulas[0]=[Sum(B2:D2),Average(B2:D2)]
//$formulas[1]=[Sum(B3:D3),Average(B3:D3)]
//$formulas[2]=[Sum(B4:D4),Average(C4:D4)]
```



### VP Get frozen panes

<!-- REF _command_.VP_Get_frozen_panes.Syntax -->**VP Get frozen panes** ( vpAreaName : Text { ; sheet : Longint } ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Get_frozen_panes.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area form object name|
|sheet  |Longint|->|Sheet index (current sheet if omitted)|
|Result  |Object|<-|Object containing frozen column and row information|
<!-- END REF -->  

#### Description

The `VP Get frozen panes` command <!-- REF _command_.VP_Get_frozen_panes.Summary -->returns an object with information about the frozen columns and rows in *vpAreaName*<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)

##### Returned object

The command returns an object describing the frozen columns and rows. This object can contain the following properties:

|Property| 	Type| 	Description|
|---|---|---| 
|columnCount| 	Longint| 	The number of frozen columns on the left of the sheet|
|trailingColumnCount|	Longint| 	The number of frozen columns on the right of the sheet| 
|rowCount| 	Longint|  	The number of frozen rows on the top of the sheet| 
|trailingRowCount| 	Longint|  	The number of frozen rows on the bottom of the sheet| 
 
#### Example 

You want to retrieve information about the number of frozen columns and rows:

```4d
C_OBJECT($panesObj)
 
$panesObj:=VP Get frozen panes("ViewProArea")
```

The returned object contains, for example:

![](assets/en/ViewPro/cmd_vpGetFrozenpanes.PNG)



### VP Get names

<!-- REF _command_.VP_Get_names.Syntax -->**VP Get names** ( vpAreaName : Text { ; scope : Number } ) : Collection<!-- END REF -->  

<!-- REF _command_.VP_Get_names.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area form object name|
|scope  |Number|->|Target scope (default= current sheet)|
|Result  |Collection|<-|Existing names in the defined scope|
<!-- END REF -->  

#### Description

The `VP Get names` command <!-- REF _command_.VP_Get_names.Summary -->returns a collection of all defined "names" in the current sheet or in the scope designated by the *scope* parameter*<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

You can define where to get the names in *scope* using either the sheet index (counting begins at 0) or the following constants:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)
*	[`vk workbook`](constant-reference.md#vk-workbook)

##### Returned collection

The returned collection contains one object per name. The following object properties can be returned:

|Property|	Type|	Description|
|---|---|---|
|result\[ ].name|	Text|	cell or range name|
|result\[ ].formula|	Text|	formula|
|result\[ ].comment|	Text|	Comment associated to the name|
 
Available properties depend on the type of the named element (named cell, named range, or named formula). 
 
#### Example 

```4d
C_COLLECTION($list)
$list:=VP Get names("ViewProArea";2) //names in 3rd sheet
```



### VP Get print info

<!-- REF _command_.VP_Get_print_info.Syntax -->**VP Get print info** ( vpAreaName : Text { ; sheet : Longint } ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Get_print_info.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area form object name|
|sheet  |Longint|->|Sheet index (current sheet if omitted)|
|Result  |Object|<-|Object of printing information|
<!-- END REF -->  

#### Description

The `VP Get print info` command <!-- REF _command_.VP_Get_print_info.Summary -->returns an object containing the print attributes of the *vpAreaName*<!-- END REF -->. 


Pass the the name of the 4D View Pro area in *vpAreaName*. If you pass a name that does not exist, an error is returned.

In the optional *sheet* parameter, you can designate a specific spreadsheet (counting begins at 0) whose printing attributes you want returned. If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)

 
#### Example 

This code:

```4d
$pinfo:=VP Get print info("ViewProArea")
```

Returns the print attributes of the 4D View Pro area set in the [VP SET PRINT INFO](#vp-set-print-info) command:

```4d
{
bestFitColumns:false,
bestFitRows:false,
blackAndWhite:false,
centering:0,
columnEnd:8,
columnStart:0,
firstPageNumber:1,
fitPagesTall:1,
fitPagesWide:1,
footerCenter:"&BS.H.I.E.L.D. &A Sales Per Region",
footerCenterImage:,
footerLeft:,
footerLeftImage:,
footerRight:"page &P of &N",
footerRightImage:,
headerCenter:,
headerCenterImage:,
headerLeft:"&G",
headerLeftImage:logo.png,
headerRight:,
headerRightImage:,
margin:{top:75,bottom:75,left:70,right:70,header:30,footer:30},
orientation:2,
pageOrder:0,
pageRange:,
paperSize:{width:850,height:1100,kind:1},
qualityFactor:2,
repeatColumnEnd:-1,
repeatColumnStart:-1,
repeatRowEnd:-1,
repeatRowStart:-1,
rowEnd:24,
rowStart:0,
showBorder:false,
showColumnHeader:0,
showGridLine:false,
showRowHeader:0,
useMax:true,
watermark:[],
zoomFactor:1
}
```



### VP Get row attributes

<!-- REF _command_.VP_Get_row_attributes.Syntax -->**VP Get row attributes** ( rangeObj : Object ) : Collection<!-- END REF -->  

<!-- REF _command_.VP_Get_row_attributes.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj  |Object|->|Range object|
|Result  |Collection|<-|Collection of row properties|
<!-- END REF -->  

#### Description

The `VP Get row attributes` command <!-- REF _command_.VP_Get_row_attributes.Summary -->returns a collection of properties for any row in the *rangeObj*<!-- END REF -->. 

In *rangeObj*, pass an object containing a range of the rows whose attributes will be retrieved.

The returned collection contains any properties for the rows, whether or not they have been set by the [VP SET ROW ATTRIBUTES](#vp-set-row-attributes) command.

 
#### Example 

The following code:

```4d
C_OBJECT($range)
C_COLLECTION($attr)
 
$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get row attributes($range)
```

will return a collection of the attributes within the given range:

![](assets/en/ViewPro/cmd_vpGetRowAttributes.PNG)



### VP Get row count

<!-- REF _command_.VP_Get_row_count.Syntax -->**VP Get row count** ( *vpAreaName* : Text {; *sheet* : Longint } ) ) : Longint<!-- END REF -->  

<!-- REF _command_.VP_Get_row_count.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area from object name|
|sheet  |Longint|->|Sheet index (current sheet if omitted)|
|Result  |Longint|<-|Total number of rows|
<!-- END REF -->  

#### Description

The `VP Get row count` command <!-- REF _command_.VP_Get_row_count.Summary -->returns the total number of rows from the designated *sheet*<!-- END REF -->. 

In *vpAreaName*, pass the name property of the 4D View Pro area. If you pass a name that does not exist, an error is returned. 

You can define where to get the row count in the optional *sheet* parameter using the sheet index (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)

 
#### Example 

The following code returns the number of rows in the 4D View Pro area:

```4d
C_LONGINT($rowCount)
$rowCount:=VP Get row count("ViewProarea")
```



### VP Get selection

<!-- REF _command_.VP_Get_selection.Syntax -->**VP Get selection** ( *vpAreaName* : Text {; *sheet* : Longint } ) ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Get_selection.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area from object name|
|sheet  |Longint|->|Sheet index (current sheet if omitted)|
|Result  |Object|<-|Range object of cells|
<!-- END REF -->  

#### Description

The `VP Get selection` command <!-- REF _command_.VP_Get_selection.Summary -->returns a new range object referencing the current selected cells<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)

 
#### Example 

The following code: 

```4d
$currentSelection:=VP Get selection("myVPArea")
 
//returns a range object containing:  
//$currentSelection.ranges[0].column=5
//$currentSelection.ranges[0].columnCount=2
//$currentSelection.ranges[0].row=8
//$currentSelection.ranges[0].rowCount=6
```

will retrieve the coordinates of all the cells in the current selection:

![](assets/en/ViewPro/cmd_vpGetSelection.PNG)



### VP Get sheet options

<!-- REF _command_.VP_Get_sheet_options.Syntax -->**VP Get sheet options** ( *vpAreaName* : Text {; *sheet* : Longint } ) ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Get_sheet_options.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area from object name|
|sheet  |Longint|->|Sheet index (current sheet if omitted)|
|Result  |Object|<-|Sheet options object|
<!-- END REF -->  

#### Description

The `VP Get sheet options` command <!-- REF _command_.VP_Get_sheet_options.Summary -->returns an object containing the current sheet options of the *vpAreaName* area<!-- END REF -->. 

Pass the name of the 4D View Pro area in *vpAreaName*. If you pass a name that does not exist, an error is returned.

In the optional *sheet* parameter, you can designate a specific spreadsheet (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant: 

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)

##### Returned object

The command returns an object containing the current values for all available sheet options. An option value may have been modified by the user or by the [VP SET SHEET OPTIONS](#vp-set-sheet-options) command.

To view the full list of the options, see [4D View Pro Sheet Options](configuring.md#sheet-options).  
 
#### Example 

```4d
$options:=VP Get sheet options("ViewProArea")
If($options.colHeaderVisible) //column headers are visible
    ... //do somethnig
End if
```




### VP Get spans

<!-- REF _command_.VP_Get_spans.Syntax -->**VP Get spans** ( *rangeObj* : Object ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Get_spans.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj  |Object|->|Range object|
|Result  |Object|<-|Object of cell spans in the defined range|
<!-- END REF -->  

#### Description

The `VP Get spans` command <!-- REF _command_.VP_Get_spans.Summary -->retrieves the cell spans in the designated *rangeObj*<!-- END REF -->. 

In *rangeObj*, pass a range of cell spans you want to retrieve. If *rangeObj* does not contain a cell span, an empty range is returned.
 
#### Example 

To center the text for the spanned cells in this document:

![](assets/en/ViewPro/cmd_vpGetSpans.PNG)

use this code:

```4d
// Search for all cell spans 
$range:=VP Get spans(VP All("ViewProArea"))
 
//center text
$style:=New object("vAlign";vk vertical align center;"hAlign";vk horizontal align center)
VP SET CELL STYLE($range;$style)
```



### VP Get stylesheet

<!-- REF _command_.VP_Get_stylesheet.Syntax -->**VP Get stylesheet** ( *vpAreaName* : Text ; *styleName* : Text { ; *scope* : Longint } ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Get_stylesheet.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area form object name|
|styleName  |Text|->|Name of style|
|scope  |Longint|->|Target scope (default = current sheet)|
|Result  |Object|<-|Style sheet object|
<!-- END REF -->  

#### Description

The `VP Get stylesheet` command <!-- REF _command_.VP_Get_stylesheet.Summary -->returns the *styleName* style sheet object containing the property values which have been defined<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In *styleName*, pass the name of the style sheet to get.

You can define where to get the style sheet in the optional *scope* parameter using the sheet index (counting begins at 0) or with the following constants:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)
*	[`vk workbook`](constant-reference.md#vk-workbook)  
 
#### Example 

The following code:

```4d
$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")
```

will return the GreenDashDotStyle style object from the current sheet:

```4d
{
backColor:green,
borderBottom:{color:green,style:10},
borderLeft:{color:green,style:10},
borderRight:{color:green,style:10},
borderTop:{color:green,style:10}
}
```



### VP Get stylesheets

<!-- REF _command_.VP_Get_stylesheets.Syntax -->**VP Get stylesheets** ( *vpAreaName* : Text { ; *scope* : Longint } ) : Collection<!-- END REF -->  

<!-- REF _command_.VP_Get_stylesheets.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area form object name|
|scope  |Longint|->|Target scope (default = current sheet)|
|Result  |Collection|<-|Collection of style sheet objects|
<!-- END REF -->  

#### Description

The `VP Get stylesheets` command <!-- REF _command_.VP_Get_stylesheets.Summary -->returns the collection of defined style sheet objects from the designated *scope*<!-- END REF -->. 

In *vpAreaName*, pass the name property of the 4D View Pro area. If you pass a name that does not exist, an error is returned. 

You can define where to get the style sheets in the optional *scope* parameter using the sheet index (counting begins at 0) or with the following constants:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)
*	[`vk workbook`](constant-reference.md#vk-workbook)  
 
#### Example 

The following code will return a collection of all the style objects in the current sheet:

```4d
$styles:=VP Get stylesheets("ViewProArea")
```

In this case, the current sheet uses two style objects:

```4d
[
   {
     backColor:green,
     borderLeft:{color:green,style:10}, 
     borderTop:{color:green,style:10}, 
     borderRight:{color:green,style:10}, 
     borderBottom:{color:green,style:10}, 
     name:GreenDashDotStyle
   },
   {
     backColor:red,
     textIndent:10,
     name:RedIndent
   }
]
```



### VP Get value

<!-- REF _command_.VP_Get_value.Syntax -->**VP Get value** ( *rangeObj* : Object ) : Object<!-- END REF -->  

<!-- REF _command_.VP_Get_value.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj   |Object|->|Range object|
|Result  |Object|<-|Object containing a cell value|
<!-- END REF -->  

#### Description

The `VP Get value` command <!-- REF _command_.VP_Get_value.Summary -->retrieves a cell value from a designated cell range<!-- END REF -->. 

In *rangeObj*, pass a range whose value you want to retrieve. 

The object returned will contain the value property, as well as a time property in case of date value:

|Property	|Type	|Description|
|---|---|---|
|value	|Longint, Real, Boolean, Text, Date	|Value in the rangeObj (except- time)|
|time	|Real	|Time value (in seconds) if rangeObj if the value is of the js date type|

If the object returned includes a date or time, it is treated as a datetime and completed as follows:

*	time value - the date portion is completed as December 30, 1899 in dd/MM/yyyy format (30/12/1899)
*	date value - the time portion is completed as midnight in HH:mm:ss format (00:00:00)

If *rangeObj* contains multiple cells or multiple ranges, the value of the first cell is returned. The command returns a null object if the cell is empty.
 
#### Example 

```4d
$cell:=VP Cell("ViewProArea";5;2)
$value:=VP Get value($cell)
If(Value type($value.value)=Is text)
    VP SET TEXT VALUE($cell;New object("value";Uppercase($value.value))
End if
```



### VP Get values

<!-- REF _command_.VP_Get_values.Syntax -->**VP Get values** ( *rangeObj* : Object ) : Collection<!-- END REF -->  

<!-- REF _command_.VP_Get_values.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj   |Object|->|Range object|
|Result  |Collection|<-|Collection of values|
<!-- END REF -->  

#### Description

The `VP Get values` command <!-- REF _command_.VP_Get_values.Summary --> retrieves the values from the designated *rangeObj*<!-- END REF -->. 

In *rangeObj*, pass a range whose values you want to retrieve. If *rangeObj* includes multiple ranges, only the first range is used.

The collection returned by VP Get values contains a two-dimensional collection:

*	Each element of the first-level collection represents a row and contains a subcollection of values
*	Each subcollection contains cell values for the row. Values can be Longint, Real, Boolean, Text, Null. If a value is a date or time, it is returned in an object with the following properties:
 
	|Property	|Type|	Description|
	|---|---|---|
	|value	|Date|	Value in the cell (except- time)|
	|time	|Real|	Time value (in seconds) if the value 	is of the js date type|
 

	Dates or times are treated as a datetime and completed as follows:
	*	time value - the date portion is completed as December 30, 1899 
	*	date value - the time portion is completed as midnight (00:00:00:000)
 
#### Example 

You want to get values from C4 to G6:

![](assets/en/ViewPro/cmd_vpGetValues.PNG)

```4d
$result:=VP Get values(VP Cells("ViewProArea";2;3;5;3))
// $result[0]=[4,5,null,hello,world]
// $result[1]=[6,7,8,9,null]
// $result[2]=[null,{time:42,value:2019-05-29T00:00:00.000Z},null,null,null]
```


## I

### VP IMPORT DOCUMENT

<!-- REF _command_.VP_IMPORT_DOCUMENT.Syntax -->**VP IMPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text { ; *paramObj* : Object} ) <!-- END REF -->  

<!-- REF _command_.VP_IMPORT_DOCUMENT.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|filePath   |Text|->|Pathname of the document|
|paramObj   |Object|->|Import options|

<!-- END REF -->  

#### Description

The `VP IMPORT DOCUMENT` command <!-- REF _command_.VP_IMPORT_DOCUMENT.Summary -->imports and displays the 4D View Pro or Microsoft Excel document designated by *filePath* in the 4D View Pro area *vpAreaName*<!-- END REF -->. The imported document replaces any data already inserted in the area.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In *filePath*, pass the path and name of the document to be imported. 4D View Pro documents (extension ".4vp") and Microsoft Excel (extension ".xlsx") are supported by the command. You must pass a full path, unless the document is located at the same level as the database structure file, in which case you can just pass its name.

>When importing a Microsoft Excel-formatted file into a 4D View Pro document, some settings may be lost. You can verify your settings with [this list](http://help.grapecity.com/spread/SpreadSheets10/webframe.html#excelexport.html) from GrapeCity.

An error is returned if the *filePath* parameter is invalid, or if the file is missing or malformed.

The optional *paramObj* parameter allows you to define properties for the imported document:

|Parameter|Type|Description|
|---|---|---|
|formula|	object|	A callback method name to be launched when the import has completed. The method must use the Formula command. See Passing a callback method (formula).|
|password|	text|	Microsoft Excel only (optional) - The password used to protect a MS Excel document. |
 
 
#### Example 1

You want to import a default 4D View Pro document stored on the disk when the form is open:

```4d
C_TEXT($docPath)
If(Form event code=On VP Ready) //4D View Pro area loaded and ready
    $docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
    VP IMPORT DOCUMENT("VPArea";$docPath)
End if
```

#### Example 2

You want to import a password protected Microsoft Excel document into a 4D View Pro area:


```4d
$o:=New object
$o.password:="excel123"
 
VP IMPORT DOCUMENT("ViewProArea";"c:\\tmp\\excelfilefile.xlsx";$o)
```



### VP IMPORT FROM OBJECT

<!-- REF _command_.VP_IMPORT_FROM_OBJECT.Syntax -->**VP IMPORT FROM OBJECT** ( *vpAreaName* : Text ;  { ; *viewPro* : Object} ) <!-- END REF -->  


<!-- REF _command_.VP_IMPORT_FROM_OBJECT.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|viewPro   |Object|->|4D View Pro object|

<!-- END REF -->  

#### Description

The `VP IMPORT FROM OBJECT` command <!-- REF _command_.VP_IMPORT_FROM_OBJECT.Summary -->imports and displays the *viewPro* 4D View Pro object in the *vpAreaName* 4D View Pro area<!-- END REF -->. The imported object contents replaces any data already inserted in the area.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In *viewPro*, pass a valid 4D View Pro object. This object can have been created using [VP Export to object](#vp-export-to-object) or manually. For more information on 4D View Pro objects, please refer to the [4D View Pro object](languageOverview.html#4d-view-pro-object) section.

An error is returned if the *viewPro* object is invalid.
 
 
#### Example

You want to import a spreadsheet that was previously saved in an object field:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)
VP IMPORT FROM OBJECT("ViewProArea1";[VPWorkBooks]SPBook)
```



### VP INSERT COLUMNS

<!-- REF _command_.VP_INSERT_COLUMNS.Syntax -->**VP INSERT COLUMNS** ( *rangeObj* : Object ) <!-- END REF -->  

<!-- REF _command_.VP_INSERT_COLUMNS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj   |Object|->|Range object|

<!-- END REF -->  

#### Description

The `VP INSERT COLUMNS` command <!-- REF _command_.VP_INSERT_COLUMNS.Summary -->inserts columns into the *rangeObj*<!-- END REF -->. 

In *rangeObj*, pass an object containing a range of the starting column (the column which designates where the new column will be inserted) and the number of columns to insert. If the number of column to insert is omitted (not defined), a single column is inserted.

New columns are inserted on the left, directly before the starting column in the *rangeObj*. 
 
 
#### Example

To insert three columns before the second column:

```4d
VP INSERT COLUMNS(VP Column("ViewProArea";1;3))
```

The results is:

![](assets/en/ViewPro/cmd_vpInsertColumns.PNG)



### VP INSERT ROWS

<!-- REF _command_.VP_INSERT_ROWS.Syntax -->**VP INSERT ROWS** ( *rangeObj* : Object ) <!-- END REF -->  

<!-- REF _command_.VP_INSERT_ROWS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj   |Object|->|Range object|

<!-- END REF -->  

#### Description

The `VP INSERT ROWS` command <!-- REF _command_.VP_INSERT_ROWS.Summary -->inserts rows defined by the *rangeObj*<!-- END REF -->. 

In *rangeObj*, pass an object containing a range of the starting row (the row which designates where the new row will be inserted) and the number of rows to insert. If the number of rows to insert is omitted (not defined), a single row is inserted. 

New rows are inserted directly before the first row in the *rangeObj*.
 
 
#### Example

To insert 3 rows before the first row:

```4d
VP INSERT ROWS(VP Row("ViewProArea";0;3))
```

The results is:

![](assets/en/ViewPro/cmd_vpInsertRows.PNG)



## N

### VP Name

<!-- REF _command_.VP_Name.Syntax -->**VP Name** ( *vpAreaName* : Text ; *rangeName* : Text { ; *scope* : Longint }  ) : Object <!-- END REF -->  

<!-- REF _command_.VP_Name.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|rangeName   |Text|->|Existing range name|
|scope   |Longint|->|Range location (current sheet if omitted)|
|Result   |Object|<-|Range object of name|

<!-- END REF -->  

#### Description

The `VP Name` command <!-- REF _command_.VP_Name.Summary -->returns a new range object referencing a named range<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *rangeName* parameter specifies an existing named cell range.

In the optional *scope* parameter, you can designate a specific spreadsheet where *rangeName* is defined. If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet or the entire workbook with the following constants:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)
*	[`vk workbook`](constant-reference.md#vk-workbook)  
 
 
#### Example

You want to give a value to the "Total" named range.

```4d
// name the B5 cell as Total
VP ADD RANGE NAME(VP Cell("ViewProArea";1;4);"Total")
$name:=VP Name("ViewProArea";" Total")
VP SET NUM VALUE($name;285;"$#,###.00")
```



### VP NEW DOCUMENT

<!-- REF _command_.VP_NEW_DOCUMENT.Syntax -->**VP NEW DOCUMENT** ( *vpAreaName* : Text ) <!-- END REF -->  

<!-- REF _command_.VP_NEW_DOCUMENT.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|

<!-- END REF -->  

#### Description

The `VP NEW DOCUMENT` command <!-- REF _command_.VP_NEW_DOCUMENT.Summary -->loads and display a new, default document in the 4D View Pro form area object *vpAreaName*<!-- END REF -->. The new empty document replaces any data already inserted in the area.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.  
 
 
#### Example

You want to display an empty document in the "myVPArea" form object:

```4d
VP NEW DOCUMENT("myVPArea")
```

---

## O

### VP Object to font

<!-- REF _command_.VP_Object_to_font.Syntax -->**VP Object to font** ( *fontObj* : Object ) : Text <!-- END REF -->  

<!-- REF _command_.VP_Object_to_font.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|fontObj   |Object|->|Font object|
|Result   |Text|->|Font shorthand|

<!-- END REF -->  

#### Description

The `VP Object to font` command <!-- REF _command_.VP_Object_to_font.Summary -->returns a font shorthand string from *fontObj*<!-- END REF -->. 

In *fontObj*, pass an object containing the font properties. The following properties are supported:

|Property|Type|Description|Possible values|	Mandatory|
|---|---|---|---|---|
|family	|text|	Specifies the font.| any standard or generic font family. Ex. "Arial", "Helvetica", "serif", "arial,sans-serif"	|Yes|
|size	|text|	Defines the size of the font.<p><p>The line-height can be added to the font-size: font-size/line-height: Ex: "15pt/20pt"	|a number with one of the following units: <li>"em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc", "ch", "rem", "vh", "vw", "vmin", "vmax"</li><p><p>or one of the following:<li>[`vk font size large`](constant-reference.md#vk-font-size-large)</li><li>[`vk font size larger`](constant-reference.md#vk-font-size-larger)</li><li>[`vk font size x large`](constant-reference.md#vk-font-size-x-large)</li><li>[`vk font size xx large`](constant-reference.md#vk-font-size-xx-large)</li><li>[`vk font size small`](constant-reference.md#vk-font-size-small)</li><li>[`vk font size smaller`](constant-reference.md#vk-font-size-smaller)</li><li>[`vk font size x small`](constant-reference.md#vk-font-size-x-small)</li><li>[`vk font size xx small`](constant-reference.md#vk-font-size-xx-small)</li>|	Yes|
|style	|text	|The style of the font. |<li>[`vk font style italic`](constant-reference.md#vk-font-style-italic)</li><li>[`vk font style oblique`](constant-reference.md#vk-font-style-oblique)</li>|	No|
|variant	|text	|Specifies font in small capital letters.	|<li>[`vk font variant small caps`](constant-reference.md#vk-font-variant-small-caps)</li>|	No|
|weight	|text|	Defines the thickness of the font.|<li>[`vk font weight 100`](constant-reference.md#vk-font-weight-100)</li><li>[`vk font weight 200`](constant-reference.md#vk-font-weight-200)</li><li>[`vk font weight 300`](constant-reference.md#vk-font-weight-300)</li><li>[`vk font weight 400`](constant-reference.md#vk-font-weight-400)</li><li>[`vk font weight 500`](constant-reference.md#vk-font-weight-500)</li><li>[`vk font weight 600`](constant-reference.md#vk-font-weight-600)</li><li>[`vk font weight 700`](constant-reference.md#vk-font-weight-700)</li><li>[`vk font weight 800`](constant-reference.md#vk-font-weight-800)</li><li>[`vk font weight 900`](constant-reference.md#vk-font-weight-900)</li><li>[`vk font weight bold`](constant-reference.md#vk-font-weight-bold)</li><li>[`vk font weight bolder`](constant-reference.md#vk-font-weight-bolder)</li><li>[`vk font weight lighter`](constant-reference.md#vk-font-weight-lighter)</li>|	No|
 

This object can be created with the [VP Font to object](#vp-font-to-object) command. 

The returned shorthand string can be assigned to the "font" property of a cell with the [VP SET CELL STYLE](#vp-set-cell-style), for example.
 
 
#### Example

```4d
$cellStyle:=VP Get cell style($range)
 
$font:=VP Font to object($cellStyle.font)
$font.style:=vk font style oblique
$font.variant:=vk font variant small caps
$font.weight:=vk font weight bolder
 
$cellStyle.font:=VP Object to font($font)
//$cellStyle.font contains "bolder oblique small-caps 16pt arial"
```




## P

### VP PRINT

<!-- REF _command_.VP_PRINT.Syntax -->**VP PRINT** ( *vpAreaName* : Text  { ; *sheet* : Longint } ) <!-- END REF -->  

<!-- REF _command_.VP_PRINT.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|sheet   |Longint|->|Sheet index (current sheet if omitted)|

<!-- END REF -->  

#### Description

The `VP PRINT` command <!-- REF _command_.VP_PRINT.Summary -->opens a print dialog window to print *vpAreaName*<!-- END REF -->. 

Pass the 4D View Pro area to be printed in *vpAreaName*. The command will open the system print dialog window where the printer can be specified and the page properties can be defined. 

>The properties defined in the print dialog window are for the printer paper, they are not the printing properties for the 4D View Pro area. Printing properties for 4D View Pro areas are defined using the [VP SET PRINT INFO](#vp-set-print-info) command. It is highly recommended that the properties for both the printer and the 4D View Pro area match, otherwise the printed document may not correspond to your expectations.

In the optional *sheet* parameter, you can designate a specific spreadsheet to print (counting begins at 0). If omitted, the current sheet is used by default. You can explicitly select the current spreadsheet or entire workbook with the following constants: 

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)
*	[`vk workbook`](constant-reference.md#vk-workbook)  
 

>*	4D View Pro areas can only be printed with the `VP PRINT` command. 
*	Commands from the 4D **Printing** theme are not supported by `VP PRINT`.
*	This command is intended for individual printing by the final end user. For automated print jobs, it is advised to export the 4D View Pro area as a PDF with the [VP EXPORT DOCUMENT](#vp-export-document) command.
 
 
#### Example

The following code: 

```4d
 VP PRINT("myVPArea")
```

Will open a print dialog window:

![](assets/en/ViewPro/cmd_vpPrint.PNG)



## R

### VP RECOMPUTE FORMULAS

<!-- REF _command_.VP_RECOMPUTE_FORMULAS.Syntax -->**VP RECOMPUTE FORMULAS** ( *vpAreaName* : Text ) <!-- END REF -->  

<!-- REF _command_.VP_RECOMPUTE_FORMULAS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|


<!-- END REF -->  

#### Description

The `VP RECOMPUTE FORMULAS` command <!-- REF _command_.VP_RECOMPUTE_FORMULAS.Summary -->immediately evaluates all formulas in *vpAreaName*<!-- END REF -->. By default, 4D automatically computes formulas when they are inserted, imported, or exported. `VP RECOMPUTE FORMULAS` allows you to force the compute at any time (e.g, in case modifications are made to the formulas or if the formulas contain calls to the database). The command launches the execution of the [VP FLUSH COMMANDS](#vp-flush-commands) command to execute any stored commands and clear the command buffer, then calculates all formulas in the workbook.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

>Be sure the  command has not been executed before using `VP RECOMPUTE FORMULAS`, otherwise the command does nothing.
 
 
#### Example

To refresh all formulas in the workbook, use this code:

```4d
VP RECOMPUTE FORMULAS("ViewProArea")
```



### VP REMOVE NAME

<!-- REF _command_.VP_REMOVE_NAME.Syntax -->**VP REMOVE NAME** ( *vpAreaName* : Text  ; *name*  : Text { ; *scope* : Longint } ) <!-- END REF -->  

<!-- REF _command_.VP_REMOVE_NAME.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|name   |Text|->|Name of the named range or named formula to remove|
|scope   |Text|->|Target scope (default=current sheet)|

<!-- END REF -->  

#### Description

The `VP REMOVE NAME` command <!-- REF _command_.VP_REMOVE_NAME.Summary -->removes the named range or named formula passed in the name parameter in the defined scope<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

Pass the named range or named formula that you want to remove in *name*.

You can define where to remove the name in *scope* using either the sheet index (counting begins at 0) or the following constants:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)
*	[`vk workbook`](constant-reference.md#vk-workbook)  
 
 
#### Example


```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)
 
VP REMOVE NAME("ViewProArea";"Total1")
$formula:=VP Get formula by name("ViewProArea";"Total1")
//$formula=null
```



### VP REMOVE SPAN

<!-- REF _command_.VP_REMOVE_SPAN.Syntax -->**VP REMOVE SPAN** ( *rangeObj* : Object ) <!-- END REF -->  

<!-- REF _command_.VP_REMOVE_SPAN.Params -->

|Parameter|Type||Description|
|---|---|---|---|

|rangeObj   |Object|->|Range object|

<!-- END REF -->  

#### Description

The `VP REMOVE SPAN` command <!-- REF _command_.VP_REMOVE_SPAN.Summary -->removes the span from the cells in *rangeObj*<!-- END REF -->. 

In *rangeObj*, pass a range object of the cell span. The spanned cells in the range are divided into individual cells.  
 
 
#### Example

To remove all cell spans from this document:

![](assets/en/ViewPro/cmd_vpRemoveSpan1.PNG)

use this code:

```4d
 //find all cell spans
 $span:=VP Get spans(VP All("ViewProArea"))
 
  //remove the cell spans
 VP REMOVE SPAN($span)
```

The result:

![](assets/en/ViewPro/cmd_vpRemoveSpan2.PNG)



### VP REMOVE STYLESHEET

<!-- REF _command_.VP_REMOVE_STYLESHEET.Syntax -->**VP REMOVE STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text { ; *scope* : Longint } ) <!-- END REF -->  

<!-- REF _command_.VP_REMOVE_STYLESHEET.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|styleName   |Text|->|Name of style to remove|
|scope   |Longint|->|Target scope (default = current sheet)|

<!-- END REF -->  

#### Description

The `VP REMOVE STYLESHEET` command <!-- REF _command_.VP_REMOVE_STYLESHEET.Summary -->removes the style sheet passed in the *styleName* from the *vpAreaName*<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

Pass the style sheet to remove in the *styleName* parameter.

You can define where to remove the style in the optional *scope* parameter using the sheet index (counting begins at 0) or with the following constants:
 
*	[`vk current sheet`](constant-reference.md#vk-current-sheet)
*	[`vk workbook`](constant-reference.md#vk-workbook)   
 
#### Example

To remove the *GreenDashDotStyle* style object from the current sheet:

```4d
VP REMOVE STYLESHEET("ViewProArea";"GreenDashDotStyle")
```



### VP RESET SELECTION

<!-- REF _command_.VP_RESET_SELECTION.Syntax -->**VP RESET SELECTION** ( *vpAreaName* : Text { ; *sheet * : Longint } ) <!-- END REF -->  

<!-- REF _command_.VP_RESET_SELECTION.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|sheet    |Longint|->|Sheet index (current sheet if omitted)|

<!-- END REF -->  

#### Description

The `VP RESET SELECTION` command <!-- REF _command_.VP_RESET_SELECTION.Summary -->deselects all cells, resulting in no current selection or visible active cell<!-- END REF -->. 

>A default active cell (cell A1) remains defined for 4D View Pro commands. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:
 
*	[`vk current sheet`](constant-reference.md#vk-current-sheet)
  
 
#### Example

You want to deselect all cells (the active cell and any selected cells):

```4d
VP RESET SELECTION("myVPArea")
```



### VP RESUME COMPUTING

<!-- REF _command_.VP_RESUME_COMPUTING.Syntax -->**VP RESUME COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->  

<!-- REF _command_.VP_RESUME_COMPUTING.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|

<!-- END REF -->  

#### Description

The `VP RESUME COMPUTING` command <!-- REF _command_.VP_RESUME_COMPUTING.Summary --> restarts the calculation of formulas in *vpAreaName*<!-- END REF -->.

The command reactivates the calculation service in 4D View Pro. Any formulas impacted by changes made while calculations were suspended are updated, and formulas added after `VP RESUME COMPUTING` is executed are calculated.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

>The 4D View Pro calculation service maintains a counter of suspend/resume actions. Therefore, each execution of `VP RESUME COMPUTING` must be balanced by a corresponding execution of the command. 
  
 
#### Example

See example in [VP SUSPEND COMPUTING](#vp-suspend-computing).




### VP Row

<!-- REF _command_.VP_Row.Syntax -->**VP Row** ( *vpAreaName* : Text; *row* : Longint { ; *rowCount* : Longint { ; *sheet* : Longint } } ) : Object <!-- END REF -->  

<!-- REF _command_.VP_Row.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|row|Longint|->|Row index|
|rowCount  |Longint|->|Number of rows|
|sheet  |Longint|->|Sheet index (current sheet if omitted)|
|Result |Object|<-|Range object of row(s)|

<!-- END REF -->  

#### Description

The `VP Row` command <!-- REF _command_.VP_Row.Summary -->returns a new range object referencing a specific row or rows<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *row* parameter defines the first row of the row range. Pass the row index (counting begins at 0) in this parameter. If the range contains multiple rows, you should also use the optional *rowCount* parameter.

The optional *rowCount* parameter allows you to define the total number of rows of the range. *rowCount* must be greater than 0. If omitted, the value will be set to 1 by default.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If not specified, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:
 
*	[`vk current sheet`](constant-reference.md#vk-current-sheet)
  
 
#### Example

You want to define a range object for the row shown below (on the current spreadsheet):

![](assets/en/ViewPro/cmd_vpRow.PNG)

The code would be:

```4d
$row:=VP Row("ViewProArea";9) // row 10
```



### VP ROW AUTOFIT

<!-- REF _command_.VP_ROW_AUTOFIT.Syntax -->**VP ROW AUTOFIT** ( *rangeObj* : Object) <!-- END REF -->  

<!-- REF _command_.VP_ROW_AUTOFIT.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj   |Object|->|Range object|

<!-- END REF -->  

#### Description

The `VP ROW AUTOFIT` command <!-- REF _command_.VP_ROW_AUTOFIT.Summary -->automatically sizes the row(s) in *rangeObj* according to their contents<!-- END REF -->. 

In *rangeObj*, pass a range object containing a range of the rows whose size will be automatically handled.
  
 
#### Example

The following rows don't correctly display the text:

![](assets/en/ViewPro/cmd_vpRowAutoFit1.PNG)


```4d
$row:=VP Row("ViewProArea";9) // row 10
```

Result: 

![](assets/en/ViewPro/cmd_vpRowAutoFit2.PNG)



### VP Run offscreen area

<!-- REF _command_.VP_Run_offscreen_area.Syntax -->**VP Run offscreen area** ( *parameters* : Object) :  Mixed<!-- END REF -->  

<!-- REF _command_.VP_Run_offscreen_area.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|parameters   |Object|->|Object containing the offscreen area's attributes|
|Result   |Mixed|<-|.result property of the onEvent object, or Null if does not return a value|

<!-- END REF -->  

#### Description

The `VP Run offscreen area` command <!-- REF _command_.VP_Run_offscreen_area.Summary -->creates an offscreen area in memory which can be used to process 4D View Pro area commands and functions<!-- END REF -->. 

In *parameters* object, pass any of the following optional properties. These properties will be available through the This command within the onEvent method and reference the instance: 

|Property 	|Type 	|Description|
|---|---|---|
|area |	text |	The name of the offscreen area. If omitted or null, a generic name is assigned (e.g., OffscreenArea1). |
|onEvent |	object (formula)|	A callback method that will be launched when the offscreen area is ready. It can be either:<p><p><li>an *onEvent* function of a class, or</li><li>a `Formula` object</li><p><p>By default, the callback method is called on the [`On VP Ready`](Events/onVpReady.md), [`On Load`](Events/onLoad.md), [`On Unload`](Events/onUnload.md), [`On End URL Loading`](Events/onEndUrlLoading.md), [`On URL Loading Error`](Events/onUrlLoadingError.md), [`On VP Range Changed`](Events/onVpRangeChanged.md), or [`On Timer`](Events/onTimer.md) events. <p><p>The callback method can be used to access the 4D View Pro object. See [4D View Pro form object variable](languageOverview.html#4d-view-pro-form-object-variable).|
|autoQuit |	boolean |	True (default value) if the command must stop the formula execution when the [`On End URL Loading`](Events/onEndUrlLoading.md) or [`On URL Loading Error`](Events/onUrlLoadingError.md) events occur.<p><p>If false, you must use the `CANCEL` or `ACCEPT` commands in the *onEvent* callback method. |
|timeout |	real |	Maximum time (expressed in seconds) before the area automatically closes if no event is generated. If set to 0, no limitation is applied. Default value: 60 |
|result|	mixed|	Result of the processing (if any)|
|<customProperty> |	mixed| 	Any custom attribute to be available in the *onEvent* callback method. |
 

The following property is automatically added by the command if necessary: 

|Property 	|Type 	|Description|
|---|---|---|
|timeoutReached|	boolean| 	Added with true value if timeout has been exceeded|
 

>The offscreen area is only available during the execution of the `VP Run offscreen area` command. It will automatically be destroyed once execution has ended.

 

The following commands can be used in the callback method:

*	`ACCEPT`
*	`CANCEL`
*	`SET TIMER`
*	`WA Evaluate JavaScript`
*	`WA EXECUTE JAVASCRIPT FUNCTION`
  
 
#### Example 1

You want to create an offscreen 4D View Pro area and get the value of a cell:


```4d
// OffscreenArea class declaration 
Class constructor;
C_TEXT($1);
This.filePath:=$1
 
// This function will be called on each event of the offscreen area 
Function onEvent
Case of:(FORM Event.code=On VP Ready)
     VP IMPORT DOCUMENT(This.area;This.filePath)
     This.result:=VP Get value(VP Cell(This.area;6;22));
 
     ALERT("The G23 cell contains the value: "+String(This.result))&nbsp;
End case
```

The *OffscreenArea* callback method:  

 
```4d
$o:=cs.OffscreenArea.new();
 
$result:=VP Run offscreen area($o)
```
 
#### Example 2

You want to load a large document offscreen, wait for all calculations to complete evaluating, and export it as a PDF:


```4d
//OffscreenArea class declaration
class constructor($pdfPath Text)
This.pdfPath:=$pdfPath
This.autoQuit:=False
This.isWaiting:=False
 
Function onEvent
Case of;
    :(FORM Event.code=On VP Ready)
 // Document import
       VP IMPORT DOCUMENT(This.area;$largeDocument4VP)
       This.isWaiting:=True;
 
  // Start a timer to verify if all calculations are finished.
  // If during this period the "On VP Range Changed" is thrown, the timer will be restarted
  // The time must be defined according to the computer configuration.
       SET TIMER(60)
 
    :(FORM Event.code=On VP Range Changed)
  // End of calculation detected. Restarts the timer
       If(This.isWaiting)
          SET TIMER(60)
       End if
 
    :(FORM Event.code=On Timer)
  // To be sure to not restart the timer if you call others 4D View command after this point
       This.isWaiting:=False
 
  // Stop the timer
       SET TIMER(0)
 
  // Start the PDF export
       VP EXPORT DOCUMENT(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))
 
    :(FORM Event.code=On URL Loading Error)
       CANCEL End case
```

The *OffscreenArea* callback method:  

 
```4d
$o:=cs.OffscreenArea.new();
 
$result:=VP Run offscreen area($o)
```



## S

### VP SET ACTIVE CELL

<!-- REF _command_.VP_SET_ACTIVE_CELL.Syntax -->**VP SET ACTIVE CELL** ( *rangeObj* : Object) <!-- END REF -->  

<!-- REF _command_.VP_SET_ACTIVE_CELL.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj   |Object|->|Range object|

<!-- END REF -->  

#### Description

The `VP SET ACTIVE CELL` command <!-- REF _command_.VP_SET_ACTIVE_CELL.Summary -->defines a specified cell as active<!-- END REF -->. 

In *rangeObj*, pass a range containing a single cell as an object. See [VP Cell](#vp-cell). If *rangeObj* is not a cell range or contains multiple ranges, only the first cell of the first range is used. 
  
 
#### Example

The following code: 


```4d
$activeCell:=VP Cell("myVPArea";3;4)
VP SET ACTIVE CELL($activeCell)
```

will set the cell in column D, row 5 as the active cell: 

![](assets/en/ViewPro/cmd_vpSetActiveCell.PNG)



### VP SET ALLOWED METHODS

<!-- REF _command_.VP_SET_ALLOWED_METHODS.Syntax -->**VP SET ALLOWED METHODS** ( *methodObj* : Object) <!-- END REF -->  

<!-- REF _command_.VP_SET_ALLOWED_METHODS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|methodObj   |Object|->|Allowed methods in the 4D View Pro areas|

<!-- END REF -->  

#### Description

The `VP SET ALLOWED METHODS` command <!-- REF _command_.VP_SET_ALLOWED_METHODS.Summary -->designates the project methods that can be called in 4D View Pro formulas<!-- END REF -->. This command applies to all 4D View Pro areas initialized after its call during the session. It can be called multiple times in the same session to initialize different configurations. 

By default for security reasons, if you do not execute the `VP SET ALLOWED METHODS` command, no method call is allowed in 4D View Pro areas -- except if 4D's generic `SET ALLOWED METHODS` command was used (see compatibility note). Using an unauthorized method in a formula prints a #NAME? error in the 4D View Pro area. 

>**Compatibility**  
4D View Pro supports 4D's generic `SET ALLOWED METHODS` command if `VP SET ALLOWED METHODS` is not called, however using `VP SET ALLOWED METHODS` is recommended. As soon as it has been called, the `SET ALLOWED METHODS` command no longer has an effect on any 4D View Pro areas. 

In the *methodObj* parameter, pass an object in which each property is the name of a function to define in the 4D View Pro areas:

|Property	|	|	|Type	|Description|
|---|---|---|---|---|
|<functionName>	||		|Object	|Name of the custom function to display in 4D View Pro formulas (no spaces allowed)|
||method|		|text	|(mandatory) Name of the existing 4D project method to allow|
||parameters|		|Collection of objects	|Collection of parameters (in the order they are defined in the method).| 
|||\[ ].name|	Text|	Name of a parameter to display for the <functionName>.<p><p>**Note**: Parameter names must not contain space characters.|
|||\[ ].type|	Number|	Type of the parameter. Supported types:<p><p><table><tr><th>Constant</th></tr><tr><td>`Is Boolean`</td></tr><tr><td>`Is date`</td></tr><tr><td>`Is longint`</td></tr><tr><td>`Is object`</td></tr><tr><td>`Is real`</td></tr><tr><td>`Is text`</td></tr><tr><td>`Is time`</td></tr></table><p>If omitted, by default the value is automatically sent with its type, except date or time values which are sent as an object (see Parameters section). If type is Is object, the object has the same structure as the object returned by VP Get value.
||summary	|	|Text	|Function description to display in 4D View Pro|
||minParams|		|Number	|Minimum number of parameters|
||maxParams|		|Number	|Maximum number of parameters. Passing a number higher than the length of parameters allows declaring "optional" parameters with default type|
 
For greater flexiblity, it is recommended to use the [VP SET CUSTOM FUNCTIONS](#vp-set-custom-functions) command which allows you to designate 4D formulas that can be called from 4D View Pro areas.
 
#### Example

You want to allow two methods in your 4D View Pro areas:


```4d
C_OBJECT($allowed)
$allowed:=New object //parameter for the command
 
$allowed.Hello:=New object //create a first simple function named "Hello"
$allowed.Hello.method:="My_Hello_Method" //sets the 4D method
$allowed.Hello.summary:="Hello prints hello world"
 
$allowed.Byebye:=New object //create a second function with parameters named "Byebye"
$allowed.Byebye.method:="My_ByeBye_Method"
$allowed.Byebye.parameters:=New collection
$allowed.Byebye.parameters.push(New object("name";"Message";"type";Is text))
$allowed.Byebye.parameters.push(New object("name";"Date";"type";Is date))
$allowed.Byebye.parameters.push(New object("name";"Time";"type";Is time))
$allowed.Byebye.summary:="Byebye prints a custom timestamp"
$allowed.Byebye.minParams:=3
$allowed.Byebye.maxParams:=3
 
VP SET ALLOWED METHODS($allowed)
```

After this code is executed, the defined functions can be used in 4D View Pro formulas:

![](assets/en/ViewPro/cmd_vpSetAllowedMethods.PNG)


>In 4D View Pro formulas, function names are automatically displayed in uppercase.



### VP SET BOOLEAN VALUE

<!-- REF _command_.VP_SET_BOOLEAN_VALUE.Syntax -->**VP SET BOOLEAN VALUE** ( *rangeObj* : Object  ; *boolValue* : Boolean) <!-- END REF -->  

<!-- REF _command_.VP_SET_BOOLEAN_VALUE.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj   |Object|->|Range object|
|boolValue    |Boolean|->|Boolean value to set|

<!-- END REF -->  

#### Description

The `VP SET BOOLEAN VALUE` command <!-- REF _command_.VP_SET_BOOLEAN_VALUE.Summary -->assigns a specified boolean value to a designated cell range<!-- END REF -->. 

In *rangeObj*, pass a range of the cell(s) (created for example with VP Cell or VP Column) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *boolValue* parameter allows you to pass the boolean value (**True** or **False**) that will be assigned to the rangeObj.
  
 
#### Example

```4d
//Set the cell value as False
VP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)
```



### VP SET BORDER

<!-- REF _command_.VP_SET_BORDER.Syntax -->**VP SET BORDER** ( *rangeObj* : Object ; *borderStyleObj* : Object  ; *borderPosObj* : Object ) <!-- END REF -->  

<!-- REF _command_.VP_SET_BORDER.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj   |Object|->|Range object|
|borderStyleObj    |Object|->|Object containing border line style|
|borderPosObj    |Object|->|Object containing border placement|

<!-- END REF -->  

#### Description

The `VP SET BORDER` command <!-- REF _command_.VP_SET_BORDER.Summary -->applies the border style(s) defined in the *borderStyleObj* and *borderPosObj* to the range defined in the *rangeObj*<!-- END REF -->. 

In *rangeObj*, pass a range of cells where the border style will be applied. If the *rangeObj* contains multiple cells, borders applied with `VP SET BORDER` will be applied to the *rangeObj* as a whole (as opposed to the [VP SET CELL STYLE](#vp-set-cell-style) command which applies borders to each cell of the *rangeObj*). If a style sheet has already been applied, `VP SET BORDER` will override the previously applied border settings for the *rangeObj*.

The *borderStyleObj* parameter allows you to define the style for the lines of the border. The *borderStyleObj* supports the following properties:

|Property|	Type|	Description	|Possible values|
|---|---|---|---|
|color|	text|	Defines the color of the border. Default = black.|	CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)|
|style|	longint|	Defines the style of the border. Default = empty.|<li>[`vk line style dash dot`](constant-reference.md#vk-line-style-dash-dot)</li><li>[`vk line style dash dot dot`](constant-reference.md#vk-line-style-dash-dot-dot)</li><li>[`vk line style dashed`](constant-reference.md#vk-line-style-dashed)</li> <li>[`vk line style dotted`](constant-reference.md#vk-line-style-dotted)</li><li>[`vk line style double`](constant-reference.md#vk-line-style-double)</li><li>[`vk line style empty`](constant-reference.md#vk-line-style-empty)</li><li>[`vk line style hair`](constant-reference.md#vk-line-style-hair)</li> <li>[`vk line style medium`](constant-reference.md#vk-line-style-medium)</li><li>[`vk line style medium dash dot`](constant-reference.md#vk-line-style-medium-dash-dot)</li><li>[`vk line style medium dash dot dot`](constant-reference.md#vk-line-style-medium-dash-dot-dot)</li><li>[`vk line style medium dashed`](constant-reference.md#vk-line-style-medium-dashed)</li><li>[`vk line style slanted dash dot`](constant-reference.md#vk-line-style-slanted-dash-dot)</li><li>[`vk line style thick`](constant-reference.md#vk-line-style-thick)</li><li>[`vk line style thin`](constant-reference.md#vk-line-style-thin)</li>|
 

You can define the position of the *borderStyleObj* (i.e., where the line is applied) with the *borderPosObj*:

 

|Property|	Type|	Description|
|---|---|---|
|all|boolean|Border line style applied to all borders.|
|left|boolean|Border line style applied to left border. |
|top|boolean|Border line style applied to top border. |
|right	|boolean|Border line style applied to right border.|
|bottom	|boolean|Border line style applied to bottom border.|
|outline|boolean|Border line style applied to outer borders only.|
|inside	|boolean|Border line style applied to inner borders only. |
|innerHorizontal|boolean|Border line style applied to inner horizontal borders only. |
|innerVertical|	boolean|Border line style applied to inner vertical borders only.|
  
 
#### Example 1

This code:

```4d
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)
```

produces the following border around the entire range:

![](assets/en/ViewPro/cmd_vpSETBORDER1.PNG)
 
#### Example 2

This code:

```4d
// Set borders using VP SET BORDER
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)
 
// // Set borders using VP SET CELL STYLE
$cellStyle:=New object
$cellStyle.borderBottom:=New object("color";"blue";"style";vk line style thick)
$cellStyle.borderRight:=New object("color";"blue";"style";vk line style thick)
VP SET CELL STYLE(VP Cells("ViewProArea";4;4;3;3);$cellStyle)
```

demonstrates the difference between `VP SET BORDER` and setting borders with the [VP SET CELL STYLE](#vp-set-cell-style) command.

![](assets/en/ViewPro/cmd_vpSETBORDER2.PNG)



### VP SET CELL STYLE

<!-- REF _command_.VP_SET_CELL_STYLE.Syntax -->**VP SET CELL STYLE** ( *rangeObj* : Object  ; *styleObj*  : Object) <!-- END REF -->  

<!-- REF _command_.VP_SET_CELL_STYLE.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj   |Object|->|Range object|
|styleObj    |Object|->|Style object|

<!-- END REF -->  

#### Description

The `VP SET CELL STYLE` command <!-- REF _command_.VP_SET_CELL_STYLE.Summary -->applies the style(s) defined in the *styleObj* to the cells defined in the *rangeObj*<!-- END REF -->. 

In *rangeObj*, pass a range of cells where the style will be applied. If the *rangeObj* contains multiple cells, the style is applied to each cell.

The *styleObj* parameter lets you pass an object containing style settings. You can use an existing style sheet or create a new style. If the *styleObj* contains both an existing style sheet and additional style settings, the existing style sheet is applied first, followed by the additional settings. Giving the *styleObj* parameter a NULL value will remove any style settings from the *rangeObj* and revert to the default style settings (if any).

For more information about style objects and style sheets, see [4D View Pro Style Objects and Style Sheets](configuring.md#style-objects-and-style-sheets).
  
 
#### Example

The following code: 

```4d
$style:=New object
$style.font:="8pt Arial"
$style.backColor:="Azure"
$style.foreColor:="red"
$style.hAlign:=1
$style.isVerticalText:=True
$style.borderBottom:=New object("color";"#800080";"style";vk line style thick)
 
VP SET CELL STYLE(VP Cell("ViewProArea";1;1);$style)
```

Will result in the following display:

 
![](assets/en/ViewPro/cmd_vpSetCellStyle.PNG)



>Borders applied with `VP SET CELL STYLE` will be applied to each cell of the *rangeObj*, as opposed to the [VP SET BORDER](#vp-set-border) command which applies borders to the *rangeObj* as a whole. 



### VP SET COLUMN ATTRIBUTES

<!-- REF _command_.VP_SET_COLUMN_ATTRIBUTES.Syntax -->**VP SET COLUMN ATTRIBUTES** ( *rangeObj* : Object  ; *propertyObj*  : Object) <!-- END REF -->  

<!-- REF _command_.VP_SET_COLUMN_ATTRIBUTES.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj   |Object|->|Range object|
|propertyObj |Object|->|Object containing column properties|

<!-- END REF -->  

#### Description

The `VP SET COLUMN ATTRIBUTES` command <!-- REF _command_.VP_SET_COLUMN_ATTRIBUTES.Summary --> applies the attributes defined in the *propertyObj* to the columns in the *rangeObj*<!-- END REF -->. 

In *rangeObj*, pass an object containing a range. If the range contains both columns and rows, attributes are applied only to the columns.

The *propertyObj* parameter lets you specify the attributes to apply to the columns in the *rangeObj*. These attributes are:

|Property| 	Type 	|Description |
|---|---|---|
|width 	|number|	Column width expressed in pixels |
|pageBreak 	|boolean| 	True to insert a page break before the first column of the range, else false |
|visible|	boolean |	True if the column is visible, else false |
|resizable |	boolean |	True if the column can be resized, else false |
|header| 	text |	Column header text|
  
 
#### Example

To change the size of the second column and set the header, the following code:

```4d
C_OBJECT($column;$properties)
 
$column:=VP Column("ViewProArea";1) //column B
$properties:=New object("width";100;"header";"Hello World")
 
VP SET COLUMN ATTRIBUTES($column;$properties)
```

Will result in:

 
![](assets/en/ViewPro/cmd_vpSetColumnAttributes.PNG)



### VP SET COLUMN COUNT

<!-- REF _command_.VP_SET_COLUMN_COUNT.Syntax -->**VP SET COLUMN COUNT** ( *vpAreaName* : Text , *columnCount* : Longint { , *sheet* : Longint } ) <!-- END REF -->  

<!-- REF _command_.VP_SET_COLUMN_COUNT.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|columnCount |Longint|->|Number of columns|
|sheet |Longint|->|Sheet index (current sheet if omitted)|

<!-- END REF -->  

#### Description

The `VP SET COLUMN COUNT` command <!-- REF _command_.VP_SET_COLUMN_COUNT.Summary -->defines the total number of columns in *vpAreaName*<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

Pass the total number of columns in the *columnCount* parameter. *columnCount* must be greater than 0. 

In the optional *sheet* parameter, you can designate a specific spreadsheet where the *columnCount* will be applied (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)
 
#### Example

The following code defines five columns in the 4D View Pro area:

```4d
VP SET COLUMN COUNT("ViewProArea";5)
```

The result:

 
![](assets/en/ViewPro/cmd_vpSetColumnCount.PNG)



### VP SET CUSTOM FUNCTIONS

<!-- REF _command_.VP_SET_CUSTOM_FUNCTIONS.Syntax -->**VP SET CUSTOM FUNCTIONS** ( *vpAreaName* : Text ; *formulaObj* : Object  ) <!-- END REF -->  

<!-- REF _command_.VP_SET_CUSTOM_FUNCTIONS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|formulaObj |Object|->|Formula object|

<!-- END REF -->  

#### Description

The `VP SET CUSTOM FUNCTIONS` command <!-- REF _command_.VP_SET_CUSTOM_FUNCTIONS.Summary -->designates the 4D formulas that can be called directly from 4D View Pro formulas<!-- END REF -->. Because custom functions are not stored in the document,`VP SET CUSTOM FUNCTIONS` must be executed in the On Load form event.

The formulas specified by `VP SET CUSTOM FUNCTIONS` appear in a pop-up menu when the first letter of their name is entered. See [Entering a Formula, a Function or a Reference](overview.md#entering-a-formula-a-function-or-a-reference). 

>If `VP SET CUSTOM FUNCTIONS` is called multiple times for the same area, in the same session, only the last call is taken into account. 

Pass the name of the 4D View Pro area in *vpAreaName*. If you pass a name that does not exist, an error is returned.

In the *formulaObj* parameter, pass an object containing the 4D formulas that can be called from 4D View Pro formulas as well as additional properties. Each `customFunction` property passed in *formulaObj* becomes the name of a function in the 4D View Pro area. 

|Property |	 	| 	|Type |	Description |
|---|---|---|---|---|
|\<customFunction>	| |	 	|Object|	Custom functions to define in 4D View Pro|
| |	formula	| |Object|4D formula object (mandatory). See the `Formula` command.|
| |parameters| 	|Collection of objects	|Collection of parameters (in the order they are defined in the formula)|
 | |	| 	\[ ].name|	Text|	Name of parameter to display in 4D View Pro|
 | | 	|	\[ ].type|	Number|	Type of the parameter. Supported types:<p><p><table><tr><th>Constant</th></tr><tr><td>`Is Boolean`</td></tr><tr><td>`Is date`</td></tr><tr><td>`Is longint`</td></tr><tr><td>`Is object`</td></tr><tr><td>`Is real`</td></tr><tr><td>`Is text`</td></tr><tr><td>`Is time`</td></tr></table><p><p>If *type* is omitted or if the default value (-1) is passed, the value is automatically sent with its type, except date or time values which are sent as an object (see [Parameters](calling-project-methods-fields.md#parameters) section).<p><p>If *type* is `Is object`, the object has the same structure as the object returned by [VP Get value](#vp-get-value).|
| | 	summary |	 	|Text |	Formula description to display in 4D View Pro|
| | 	minParams|	 	|Number| 	Minimum number of parameters |
| | 	maxParams |	 	|Number |	Maximum number of parameters. Passing a number higher than the length of *parameters* allows declaring "optional" parameters with default type |
 

>**WARNING**
>
>*	If a *formula* has the same name as a function defined by the [VP SET ALLOWED METHODS](#vp-set-allowed-methods) command, the *formula* is created and the method ignored.
>*	As soon as `VP SET CUSTOM FUNCTIONS` is called, the methods allowed by `SET ALLOWED METHODS` are ignored in the 4D View Pro area.
>*	As soon as `VP SET CUSTOM FUNCTIONS` is called, the functions based upon `SET TABLE TITLES` and `SET FIELD TITLES` commands are ignored in the 4D View Pro area.
 
#### Example

You want to use formula objects in a 4D View Pro area to add numbers, retrieve a customer's last name and gender:

```4d
Case of
    :(Form event code=On Load)
 
       var $o : Object
 
       $o:=New object
 
// Define “addnum“ function from a method named "addnum"
       $o.addnum:=New object
       $o.addnum.formula:=Formula(addnum)
       $o.addnum.parameters:=New collection
       $o.addnum.parameters.push(New object("name";"num1";"type";Is longint))
       $o.addnum.parameters.push(New object("name";"num2";"type";Is longint))
 
// Define “ClientLastName“ function from a database field
       $o.ClientLastName:=New object
       $o.ClientLastName.formula:=Formula([Customers]lastname)
       $o.ClientLastName.summary:="Lastname of the current client"
 
// Define “label“ function from a 4D expression with one parameter
       $o.label:=New object
       $o.label.formula:=Formula(ds.Customers.get($1).label)
       $o.label.parameters:=New collection
       $o.label.parameters.push(New object("name";"ID";"type";Is longint))
 
// Define “Title“ function from a variable named "Title"
       $o.Title:=New object
       $o.Title.formula:=Formula(Title)
 
       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)
 
end case
```



### VP SET DATE TIME VALUE

<!-- REF _command_.VP_SET_DATE_TIME_VALUE.Syntax -->**VP SET DATE TIME VALUE** ( *rangeObj* : Object ; *dateValue* : Date ; *timeValue* : Time {; *formatPattern* : Text } ) <!-- END REF -->  

<!-- REF _command_.VP_SET_DATE_TIME_VALUE.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj |Object|->|Range object|
|dateValue |Date|->|Date value to set|
|timeValue |Time|->|Time value to set|
|formatPattern |Text|->|Format of value|

<!-- END REF -->  

#### Description

The `VP SET DATE TIME VALUE` command <!-- REF _command_.VP_SET_DATE_TIME_VALUE.Summary -->assigns a specified date and time value to a designated cell range<!-- END REF -->. 

In *rangeObj*, pass a range of the cell(s) (created for example with [VP Cell](#vp-cell) or [VP Column](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *dateValue* parameter specifies a date value to be assigned to the *rangeObj*.

The *timeValue* parameter specifies a time value (expressed in seconds) to be assigned to the *rangeObj*.

The optional *formatPattern* defines a pattern for the *dateValue* and *timeValue* parameters. For information on patterns and formatting characters, please refer to the [4D View Pro Cell Format](configuring.md#cell-format) section.
 
#### Example


```4d
//Set the cell value as the current date and time
VP SET DATE TIME VALUE(VP Cell("ViewProArea";6;2);Current time;Current date;vk pattern full date time)
 
//Set the cell value as the 18th of December
VP SET DATE TIME VALUE(VP Cell("ViewProArea";3;9);!2024-12-18!;?14:30:10?;vk pattern sortable date time)
```




### VP SET DATE VALUE

<!-- REF _command_.VP_SET_DATE_VALUE.Syntax -->**VP SET DATE VALUE** ( *rangeObj* : Object ; *dateValue* : Date ;  { ; *formatPattern* : Text } ) <!-- END REF -->  

<!-- REF _command_.VP_SET_DATE_VALUE.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj |Object|->|Range object|
|dateValue |Date|->|Date value to set|
|formatPattern |Text|->|Format of value|

<!-- END REF -->  

#### Description

The `VP SET DATE VALUE` command <!-- REF _command_.VP_SET_DATE_VALUE.Summary -->assigns a specified date value to a designated cell range<!-- END REF -->. 

In *rangeObj*, pass a range of the cell(s) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *dateValue* parameter specifies a date value to be assigned to the *rangeObj*.

The optional *formatPattern* defines a pattern for the *dateValue* parameter. Pass any custom format or you can use one of the following constants:

*	[`vk pattern long date`](constant-reference.md#vk-pattern-long-date)	
*	[`vk pattern month day`](constant-reference.md#vk-pattern-month-day)
*	[`vk pattern short date`](constant-reference.md#vk-pattern-short-date)
*	[`vk pattern year month`](constant-reference.md#vk-pattern-year-month)

For information on patterns and formatting characters, please refer to the [4D View Pro Cell Format](configuring.md#cell-format) section.

 
#### Example


```4d
//Set the cell value to the current date
VP SET DATE VALUE(VP Cell("ViewProArea";4;2);Current date))
 
//Set the cell value to a specific date with a designated format
VP SET DATE VALUE(VP Cell("ViewProArea";4;4);Date("12/25/94");"d/m/yy ")
VP SET DATE VALUE(VP Cell("ViewProArea";4;6);!2005-01-15!;vk pattern month day)
```



### VP SET DEFAULT STYLE

<!-- REF _command_.VP_SET_DEFAULT_STYLE.Syntax -->**VP SET DEFAULT STYLE** ( *vpAreaName* : Text ; *styleObj* : Object { ; *sheet* : Longint } ) <!-- END REF -->  

<!-- REF _command_.VP_SET_DEFAULT_STYLE.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|styleObj |Object|->|Style object|
|sheet |Longint|->|Sheet index (default = current sheet)|

<!-- END REF -->  

#### Description

The `VP SET DEFAULT STYLE` command <!-- REF _command_.VP_SET_DEFAULT_STYLE.Summary -->defines the style in the *styleObj* as the default style for a *sheet*<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned. 

The *styleObj* lets you pass an object containing style settings. You can use an existing style sheet or you can create a new style. For more information, see [4D View Pro Style Objects and Style Sheets](configuring.md#style-objects-and-style-sheets).

In the optional *sheet* parameter, you can designate a specific spreadsheet where the style will be defined. If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)
 
#### Example

This code:

```4d
$style:=New object
$style.hAlign:=vk horizontal align left
$style.font:="12pt papyrus"
$style.backColor:="#E6E6FA" //light purple color
 
VP SET DEFAULT STYLE("myDoc";$style)
```

will set the document's default style to: 

![](assets/en/ViewPro/cmd_vpSetDefaultStyle.PNG)



### VP SET FIELD

<!-- REF _command_.VP_SET_FIELD.Syntax -->**VP SET FIELD** ( *rangeObj* : Object ; *field* : Pointer { ; *formatPattern* : Text } ) <!-- END REF -->  

<!-- REF _command_.VP_SET_FIELD.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj |Object|->|Range object|
|field |Pointer|->|Reference to field in virtual structure|
|formatPattern |Text|->|Format of field|

<!-- END REF -->  

#### Description

The `VP SET FIELD` command <!-- REF _command_.VP_SET_FIELD.Summary -->assigns a specified 4D database field to a designated cell range<!-- END REF -->. 

In *rangeObj*, pass a range of the cell(s) whose value you want to specify. If *rangeObj* includes multiple cells, the specified field will be linked in each cell.

The *field* parameter specifies a 4D database field to be assigned to the *rangeObj*. The virtual structure name for *field* can be viewed in the formula bar. For information about the supported field types and the virtual structure, see [Field references](calling-project-methods-fields.md#field-references). If any of the cells in *rangeObj* have existing content, it will be replaced by *field*.

The optional *formatPattern* defines a pattern for the field parameter. Pass any custom format (for information on patterns and formatting characters, please refer to the [4D View Pro Cell Format](configuring.md#cell-format) section).
 
#### Example

```4d
VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)
```



### VP SET FORMULA

<!-- REF _command_.VP_SET_FORMULA.Syntax -->**VP SET FORMULA** ( *rangeObj* : Object ; *formula* : Text { ; *formatPattern* : Text } ) <!-- END REF -->  

<!-- REF _command_.VP_SET_FORMULA.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj |Object|->|Range object|
|formula |Text|->|Formula or 4D method|
|formatPattern |Text|->|Format of field|

<!-- END REF -->  

#### Description

The `VP SET FORMULA` command <!-- REF _command_.VP_SET_FORMULA.Summary -->assigns a specified formula or 4D method to a designated cell range<!-- END REF -->. 

In *rangeObj*, pass a range of the cell(s) (created for example with VP Cell or VP Column) whose value you want to specify. If *rangeObj* includes multiple cells, the formula specified will be linked in each cell.

The *formula* parameter specifies a formula or 4D method name to be assigned to the *rangeObj*. If a 4D method is used, it must be allowed with the `SET ALLOWED METHODS` command (see Project method references).

The optional *formatPattern* defines a pattern for the *formula*. For information on patterns and formatting characters, please refer to the [4D View Pro Cell Format](configuring.md#cell-format) section.

>You can remove the formula in *rangeObj* by replacing it with an empty string ("").
 
#### Example 1

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
```

#### Example 2

To remove the formula:

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"")
```



### VP SET FORMULAS

<!-- REF _command_.VP_SET_FORMULAS.Syntax -->**VP SET FORMULA** ( *rangeObj* : Object ; *formulasCol* : Collection ) <!-- END REF -->  

<!-- REF _command_.VP_SET_FORMULAS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj |Object|->|Cell range object|
|formulasCol |Collection|->|Collection of formulas|

<!-- END REF -->  

#### Description

The `VP SET FORMULAS` command <!-- REF _command_.VP_SET_FORMULAS.Summary -->assigns a collection of formulas starting at the specified cell range<!-- END REF -->. 

In *rangeObj*, pass a range of the cell (created with [VP Cell](#vp-cell)) whose formula you want to specify. If *rangeObj* includes multiple ranges, only the first range is used.

The *formulasCol* is a two-dimensional collection:

*	The first-level collection contains subcollections of formulas. Each subcollection defines a row.
*	Each subcollection defines cell values for the row. Values must be text elements containing the formulas to assign to the cells. 
	>If a 4D method is used, it must be allowed with the `SET ALLOWED METHODS` command (see [Project method references](calling-project-methods-fields.md#project-method-references). 

>You can remove the formulas in *rangeObj* by replacing them with an empty string ("").
 
#### Example 1

This code:

```4d
$formulas:=New collection
$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // First row
$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // Second row
 
VP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // Set the cells with the formulas
```


will set the formulas in the designated range:

![](assets/en/ViewPro/cmd_vpSetFormulas.PNG)

*myMethod*:

```4d
$0:=$1*3.33
```

#### Example 2

To remove formulas:

```4d
$formulas:=New collection
$formulas.push(New collection("";"")) // first collection
$formulas.push(New collection("";"")) // second collection
 
VP SET FORMULAS(VP Cell("ViewProArea";0;0);$formulas) // Assign to cells
```



### VP SET FROZEN PANES

<!-- REF _command_.VP_SET_FROZEN PANES.Syntax -->**VP SET FROZEN PANES** ( *vpAreaName* : Text ; *paneObj* : Object { ; *sheet* : Longint } ) <!-- END REF -->  

<!-- REF _command_.VP_SET_FROZEN PANES.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|paneObj |Object|->|Object containing frozen column and row information|
|sheet |Longint|->|Sheet index (current sheet if omitted)|

<!-- END REF -->  

#### Description

The `VP SET FROZEN PANES` command <!-- REF _command_.VP_SET_FROZEN PANES.Summary -->sets the frozen status of the columns and rows in the *paneObj* so they are always displayed in the *vpAreaName*<!-- END REF -->. Frozen columns and rows are fixed in place and do not move when the rest of the document is scrolled. A solid line is displayed to indicate that columns and rows are frozen. The location of the line depends on where the frozen column or row is on the sheet:

*	**Columns on the left or right**: For columns on the left of the sheet, the line is displayed on the right side of the last frozen column. For columns on the right side of the sheet, the line is displayed on the left side of the first frozen column.
*	**Rows on the top or bottom**: For rows at the top of the sheet, the line is displayed below the last frozen row. For rows at the bottom of the sheet, the line is displayed above the first frozen row.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

You can pass an object defining the columns and rows to freeze in the *paneObj* parameter. Setting the value of any of the column or row properties equal to zero resets (unfreezes) the property. If a property is set to less than zero, the command does nothing. You can pass:
 
|Property |	Type| 	Description|
|---|---|---|
|columnCount |	Longint |	The number of frozen columns on the left of the sheet|
|trailingColumnCount	|Longint |	The number of frozen columns on the right of the sheet 
|rowCount |	Longint | 	The number of frozen rows on the top of the sheet |

|trailingRowCount |	Longint | 	The number of frozen rows on the bottom of the sheet|
 
In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)
 
#### Example 

You want to freeze the first three columns on the left, two columns on the right, and the first row:  

```4d
C_OBJECT($panes)
 
$panes:=New object
$panes.columnCount:=3
$panes.trailingColumnCount:=2
$panes.rowCount:=1
 
VP SET FROZEN PANES("ViewProArea";$panes)
```

The result: 

![](assets/en/ViewPro/cmd_vpSetFrozenPanes.PNG)



### VP SET NUM VALUE

<!-- REF _command_.VP_SET_NUM_VALUE.Syntax -->**VP SET NUM VALUE** ( *rangeObj* : Object ; *numberValue* : Number { ; *formatPattern* : Text } ) <!-- END REF -->  

<!-- REF _command_.VP_SET_NUM_VALUE.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj |Object|->|Range object|
|numberValue |Number|->|Number value to set|
|formatPattern |Text|->|Format of value|

<!-- END REF -->  

#### Description

The `VP SET NUM VALUE` command <!-- REF _command_.VP_SET_NUM_VALUE.Summary -->assigns a specified numeric value to a designated cell range<!-- END REF -->. 

In *rangeObj*, pass a range of the cell(s) (created for example with VP Cell or VP Column) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *numberValue* parameter specifies a numeric value to be assigned to the *rangeObj*.

The optional *formatPattern* defines a pattern for the *numberValue* parameter. For information on patterns and formatting characters, please refer to the [4D View Pro Cell Format](configuring.md#cell-format) section.
 
#### Example 

```4d
//Set the cell value to 2
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);2)
 
//Set the cell value and format it in dollars
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);12.356;"_($* #,##0.00_)")
```



### VP SET PRINT INFO

<!-- REF _command_.VP_SET_PRINT_INFO.Syntax -->**VP SET PRINT INFO** ( *vpAreaName* : Text ; *printInfo* : Object { ; *sheet* : Longint }  ) <!-- END REF -->  

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|Added|
</details>

<!-- REF _command_.VP_SET_PRINT_INFO.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area name|
|printInfo |Object|->|Object containing printing attributes|
|sheet |Longint|->|Sheet index (current sheet if omitted)|

<!-- END REF -->  

#### Description

The `VP SET PRINT INFO` command <!-- REF _command_.VP_SET_PRINT_INFO.Summary -->defines the attributes to use when printing the *vpAreaName*<!-- END REF -->. 

Pass the name of the 4D View Pro area to print in *vpAreaName*. If you pass a name that does not exist, an error is returned.

You can pass an object containing definitions for various printing attributes in the *printInfo* parameter. To view the full list of the available attributes, see [4D View Pro Print Attributes](configuring.md#print-aAttributes). 

In the optional *sheet* parameter, you can designate a specific spreadsheet to print (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant: 

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)
 
#### Example 

The following code will print a 4D View Pro area to a PDF document: 

```4d
C_OBJECT($printInfo)

//declare print attributes object
$printInfo:=New object

//define print attributes
$printInfo.headerCenter:="&BS.H.I.E.L.D. &A Sales Per Region"
$printInfo.firstPageNumber:=1
$printInfo.footerRight:="page &P of &N"
$printInfo.orientation:=vk print page orientation landscape
$printInfo.centering:=vk print centering horizontal
$printInfo.columnStart:=0
$printInfo.columnEnd:=8
$printInfo.rowStart:=0
$printInfo.rowEnd:=24

$printInfo.showGridLine:=True

//Add corporate logo
$printInfo.headerLeftImage:=logo.png
$printInfo.headerLeft:="&G"

$printInfo.showRowHeader:=vk print visibility hide
$printInfo.showColumnHeader:=vk print visibility hide
$printInfo.fitPagesWide:=1
$printInfo.fitPagesTall:=1

//print PDF document
VP SET PRINT INFO ("ViewProArea";$printInfo)

//export the PDF
VP EXPORT DOCUMENT("ViewProArea";"Sales2018.pdf";new object("formula";formula(alert("PDF ready!"))))
```

The PDF:

![](assets/en/ViewPro/cmd_vpSetPrintInfo.PNG)



### VP SET ROW ATTRIBUTES

<!-- REF _command_.VP_SET_ROW_ATTRIBUTES.Syntax -->**VP SET ROW ATTRIBUTES** ( *rangeObj* : Object ; *propertyObj* : Object  ) <!-- END REF -->  

<!-- REF _command_.VP_SET_ROW_ATTRIBUTES.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj |Object|->|Range of rows|
|propertyObj |Object|->|Object containing row properties|

<!-- END REF -->  

#### Description

The `VP SET ROW ATTRIBUTES` command <!-- REF _command_.VP_SET_ROW_ATTRIBUTES.Summary -->applies the attributes defined in the *propertyObj* to the rows in the *rangeObj*<!-- END REF -->. 

In the *rangeObj*, pass an object containing a range. If the range contains both columns and rows, attributes are applied only to the rows.

The *propertyObj* parameter lets you specify the attributes to apply to the rows in the *rangeObj*. These attributes are:

|Property |	Type| 	Description |
|---|---|---|
|height|	number|	Row height expressed in pixels |
|pageBreak| 	boolean| 	True to insert a page break before the first row of the range, else false|
|visible|	boolean| 	True if the row is visible, else false |
|resizable| 	boolean| 	True if the row can be resized, else false |
|header |	text |	Row header text|
 
 
#### Example 

To change the size of the second row and set the header, the following code:

```4d
C_OBJECT($row;$properties)
 
$row:=VP Row("ViewProArea";1)
$properties:=New object("height";75;"header";"June")
 
VP SET ROW ATTRIBUTES($row;$properties)
```

will result in:

![](assets/en/ViewPro/cmd_vpSetRowAttributes.PNG)



### VP SET ROW COUNT

<!-- REF _command_.VP_SET_ROW_COUNT.Syntax -->**VP SET ROW COUNT** ( *vpAreaName* : Text ; *rowCount* : Longint { ; *sheet* : Longint }  ) <!-- END REF -->  

<!-- REF _command_.VP_SET_ROW_COUNT.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|rowCount |Longint|->|Number of rows|
|sheet |Longint|->|Sheet index (current sheet if omitted)|

<!-- END REF -->  

#### Description

The `VP SET ROW COUNT` command <!-- REF _command_.VP_SET_ROW_COUNT.Summary -->defines the total number of rows in *vpAreaName*<!-- END REF -->. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

Pass the total number of rows in the *rowCount* parameter. *rowsCount* must be greater than 0. 

In the optional *sheet* parameter, you can designate a specific spreadsheet where the *rowCount* will be applied (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)
 
 
#### Example 

The following code defines five rows in the 4D View Pro area:

```4d
VP SET ROW COUNT("ViewProArea";5)
```

The result:

![](assets/en/ViewPro/cmd_vpSetRowCount.PNG)



### VP SET SELECTION

<!-- REF _command_.VP_SET_SELECTION.Syntax -->**VP SET SELECTION** ( *rangeObj* : Object  ) <!-- END REF -->  

<!-- REF _command_.VP_SET_SELECTION.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj |Object|->|Range object of cells|

<!-- END REF -->  

#### Description

The `VP SET SELECTION` command <!-- REF _command_.VP_SET_SELECTION.Summary -->defines the specified cells as the selection and the first cell as the active cell<!-- END REF -->. 

In *rangeObj*, pass a range object of cells to designate as the current selection. 
 
#### Example 

The following code:

```4d
$currentSelection:=VP Combine ranges(VP Cells("myVPArea";3;2;1;6);VP Cells("myVPArea";5;7;1;7))
VP SET SELECTION($currentSelection)
```

will set this selection:

![](assets/en/ViewPro/cmd_vpSetSelection.PNG)



### VP SET SHEET OPTIONS

<!-- REF _command_.VP_SET_SHEET_OPTIONS.Syntax -->**VP SET SHEET OPTIONS** ( *vpAreaName* : Text; *sheetOptions* : Object { ; *sheet* : Longint}  ) <!-- END REF -->  

<!-- REF _command_.VP_SET_SHEET_OPTIONS.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Object|->|4D View Pro area name|
|sheetOptions |Object|->|Sheet option(s) to set|
|sheet |Object|->|Sheet index (current sheet if omitted)|

<!-- END REF -->  

#### Description

The `VP SET SHEET OPTIONS` command <!-- REF _command_.VP_SET_SHEET_OPTIONS.Summary -->allows defining various sheet options of the *vpAreaName* area<!-- END REF -->. 

Pass the name of the 4D View Pro area in *vpAreaName*. If you pass a name that does not exist, an error is returned.

Pass an object containing definitions for the options to set in the *sheetOptions* parameter. To view the full list of the available options, see [4D View Pro Sheet Options](configuring.md#sheet-options). 

In the optional *sheet* parameter, you can designate a specific spreadsheet (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant: 

*	[`vk current sheet`](constant-reference.md#vk-current-sheet)

 
#### Example 1

You want to protect all cells except the range C5:D10:

```4d
// Activate protection on the current sheet
C_OBJECT($options)
  
$options:=New object
$options.isProtected:=True
VP SET SHEET OPTIONS("ViewProArea";$options)
  
// mark cells C5:D10 as 'unlocked'
VP SET CELL STYLE(VP Cells("ViewProArea";2;4;2;6);New object("locked";False))
```


#### Example 2

You need to protect your document while your users can resize rows and columns:

```4d
C_OBJECT($options)
  
$options:=New object
// Activate protection
$options.isProtected:=True
$options.protectionOptions:=New object
// Allow user to resize rows
$options.protectionOptions.allowResizeRows=True;
// Allow user to resize columns
$options.protectionOptions.allowResizeColumns=True;
    
// Apply protection on the current sheet
VP SET SHEET OPTIONS("ViewProArea";$options)
```


#### Example 3

You want to customize the colors of your sheet tabs, frozen lines, grid lines, selection background and selection border:

```4d
C_OBJECT($options)
   
$options:=New object
// Customize color of Sheet 1 tab
$options.sheetTabColor:="Black"
$options.gridline:=New object("color";"Purple")
$options.selectionBackColor:="rgb(255,128,0,0.4)"
$options.selectionBorderColor:="Yellow"
$options.frozenlineColor:="Gold"
   
VP SET SHEET OPTIONS("ViewProArea";$options;0)
 
// Customize color of Sheet 2 tab
$options.sheetTabColor:="red"
   
VP SET SHEET OPTIONS("ViewProArea";$options;1)
 
// Customize color of Sheet 3 tab
$options.sheetTabColor:="blue"
  
VP SET SHEET OPTIONS("ViewProArea";$options;2)
```

Result:

![](assets/en/ViewPro/cmd_vpSetSheetOptions1.PNG)

#### Example 4

You want to hide the grid lines as well as the row and column headers.

```4d
C_OBJECT($options)
  
$options:=New object
$options.gridline:=New object()
$options.gridline.showVerticalGridline:=False
$options.gridline.showHorizontalGridline:=False
$options.rowHeaderVisible:=False
$options.colHeaderVisible:=False
  
VP SET SHEET OPTIONS("ViewProArea";$options)
```

Here is the result:

![](assets/en/ViewPro/cmd_vpSetSheetOptions2.PNG)



### VP SET TEXT VALUE

<!-- REF _command_.VP_SET_TEXT_VALUE.Syntax -->**VP SET TEXT VALUE** ( *rangeObj* : Object ; *textValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->  

<!-- REF _command_.VP_SET_TEXT_VALUE.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj |Object|->|Range object|
|textValue |Text|->|Text value to set|
|formatPattern |Text|->|Format of value|

<!-- END REF -->  

#### Description

The `VP SET TEXT VALUE` command <!-- REF _command_.VP_SET_TEXT_VALUE.Summary -->assigns a specified text value to a designated cell range<!-- END REF -->. 

In *rangeObj*, pass a range of the cell(s) (created for example with [VP Cell](#vp-cell) or [VP Column](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *textValue* parameter specifies a text value to be assigned to the *rangeObj*.

The optional *formatPattern* defines a pattern for the *textValue* parameter. For information on patterns and formatting characters, please refer to the [4D View Pro Cell Format](configuring.md#cell-format) section.

 
#### Example

```4d
VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")
```



### VP SET TIME VALUE

<!-- REF _command_.VP_SET_TIME_VALUE.Syntax -->**VP SET TIME VALUE** ( *rangeObj* : Object ; *timeValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->  

<!-- REF _command_.VP_SET_TIME_VALUE.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj |Object|->|Range object|
|timeValue |Text|->|Time value to set|
|formatPattern |Text|->|Format of value|

<!-- END REF -->  

#### Description

The `VP SET TIME VALUE` command <!-- REF _command_.VP_SET_TIME_VALUE.Summary -->assigns a specified time value to a designated cell range<!-- END REF -->. 

In *rangeObj*, pass a range of the cell(s) (created for example with [VP Cell](#vp-cell) or [VP Column](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *timeValue* parameter specifies a time expressed in seconds to be assigned to the *rangeObj*.

The optional *formatPattern* defines a pattern for the *timeValue* parameter. For information on patterns and formatting characters, please refer to the [4D View Pro Cell Format](configuring.md#cell-format) section.

 
#### Example

```4d
//Set the value to the current time
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);Current time)
 
//Set the value to a specific time with a designated format
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);?12:15:06?;vk pattern long time)
```



### VP SET VALUE

<!-- REF _command_.VP_SET_VALUE.Syntax -->**VP SET VALUE** ( *rangeObj* : Object ; *valueObj* : Object ) <!-- END REF -->  

<!-- REF _command_.VP_SET_VALUE.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj |Object|->|Range object|
|valueObj  |Object|->|Cell values and format options|

<!-- END REF -->  

#### Description

The `VP SET VALUE` command <!-- REF _command_.VP_SET_VALUE.Summary -->assigns a specified value to a designated cell range<!-- END REF -->. 

The command allows you to use a generic code to set and format the types of values in *rangeObj*, whereas other commands, such as [VP SET TEXT VALUE](#vp-set-text-value) and [VP SET NUM VALUE](#vp-set-num-value), reduce the values to specific types.

In *rangeObj*, pass a range of the cell(s) (created for example with [VP Cell](#vp-cell) or [VP Column](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The parameter *valueObj* is an object that includes properties for the value and the format to assign to *rangeObj*. It can include the following properties :

|Property|	Type	|Description|
|---|---|---|
|value|	Longint, Real, Boolean, Text, Date, Null|	Value to assign to *rangeObj* (except- time). Pass null to erase the content of the cell.|
|time	|Real	|Time value (in seconds) to assign to *rangeObj*|
|format	|Text|	Pattern for value/time property. For information on patterns and formatting characters, please refer to the [4D View Pro Cell Format](configuring.md#cell-format) section.


 
#### Example

```4d
//Set the cell value as False
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";False))
 
//Set the cell value as 2
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";2))
 
//Set the cell value as $125,571.35
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)"))
 
//Set the cell value as Hello World!
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))
 
//Set the cell value as current date
VP SET VALUE(VP Cell("ViewProArea";4;2);New object("value";Current date))
 
//Set the cell value as current hour
VP SET VALUE(VP Cell("ViewProArea";5;2);New object("time";Current hour))
 
//Set the cell value as specific date and time
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))
 
//Erase cell content
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";Null))
```



### VP SET VALUES

<!-- REF _command_.VP_SET_VALUES.Syntax -->**VP SET VALUES** ( *rangeObj* : Object ; *valuesCol* : Collection ) <!-- END REF -->  

<!-- REF _command_.VP_SET_VALUES.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj |Object|->|Range object|
|valuesCol  |Collection|->|Collection of values|

<!-- END REF -->  

#### Description

The `VP SET VALUES` command <!-- REF _command_.VP_SET_VALUES.Summary -->assigns a collection of values starting at the specified cell range<!-- END REF -->. 

In *rangeObj*, pass a range of the cell (created with VP Cell) whose value you want to specify. The cell defined in the *rangeObj* is used to determine the starting point.

>*	If *rangeObj* is not a cell range, only the first cell of the range is used. 
>*	If *rangeObj* includes multiple ranges, only the first cell of the first range is used.

The *valuesCol* parameter is two-dimensional:

*	The first-level collection contains subcollections of values. Each subcollection defines a row. Pass an empty collection to skip a row. 
*	Each subcollection defines cell values for the row. Values can be Longint, Real, Boolean, Text, Date, Null, or Object. If the value is an object, it can have the following properties:
 
	|Property|	Type	|Description|
	|---|---|---|
	|value|	Longint, Real, Boolean, Text, Date, Null|		Value in the cell (except- time)|
	|time|	Real|	Time value (in seconds)|
 
#### Example

The following code:

```4d
$param:=New collection
$param.push(New collection(1;2;3;False)) //first row, 4 values
$param.push(New collection) //second row, untouched
$param.push(New collection(4;5;Null;"hello";"world")) // third row, 5 values
$param.push(New collection(6;7;8;9)) // fourth row, 4 values
$param.push(New collection(Null;New object("value";Current date;"time";42))) //fifth row, 1 value
   
VP SET VALUES(VP Cell("ViewProArea";2;1);$param)
```

... produces the following result:

![](assets/en/ViewPro/cmd_vpSetValues.PNG)



### VP SHOW CELL

<!-- REF _command_.VP_SHOW_CELL.Syntax -->**VP SHOW CELL** ( *rangeObj* : Object { ; *vPos* : Longint; *hPos* : Longint } ) <!-- END REF -->  

<!-- REF _command_.VP_SHOW_CELL.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj |Object|->|Range object|
|vPos  |Longint|->|Vertical view position of cell or row|
|hPos  |Longint|->|Horizontal view position of cell or row|

<!-- END REF -->  

#### Description

The `VP SHOW CELL` command <!-- REF _command_.VP_SHOW_CELL.Summary -->vertically and horizontally repositions the view of the *rangeObj*<!-- END REF -->. 

In *rangeObj*, pass a range of cells as an object to designate the cells to be viewed. The view of the *rangeObj* will be positioned vertically or horizontally (i.e., where *rangeObj* appears) based on the *vPos* and *hPos* parameters. 

The *vPos* parameter defines the desired vertical position to display the *rangeObj*. The following selectors are available:

*	[`vk position top`](constant-reference.md#vk-position-top)
*	[`vk position bottom`](constant-reference.md#vk-position-bottom)

The *hPos* parameter defines the desired horizontal position to display the *rangeObj*. The following selectors are available:

*	[`vk position left`](constant-reference.md#vk-position-left)
*	[`vk position right`](constant-reference.md#vk-position-right)

Both *vPos* and *hPos* accept the following selectors:

*	[`vk position center`](constant-reference.md#vk-position-center)
*	[`vk position nearest`](constant-reference.md#vk-position-nearest)

>This command is only effective if repositioning the view is possible. For example, if the *rangeObj* is in cell A1 (the first column and the first row) of the current sheet, repositioning the view will make no difference because the vertical and horizontal limits have already been reached (i.e., it is not possible to scroll any higher or any more to the left). The same is true if *rangeObj* is in cell C3 and the view is repositioned to the center or the bottom right. The view remains unaltered. 
 
#### Example

You want to view the cell in column AY, row 51 in the center of the 4D View Pro area. The following code:

```4d
$displayCell:=VP Cell("myVPArea";50;50)
// Move the view to show the cell
VP SHOW CELL($displayCell;vk position center;vk position center)
```

will display:

![](assets/en/ViewPro/cmd_vpShowCell1.PNG)

The same code with the vertical and horizontal selectors changed to show the same cell positioned at the top right of the 4D View Pro area:

```4d
$displayCell:=VP Cell("myVPArea";50;50)
  // Move the view to show the cell
VP SHOW CELL($displayCell;vk position top;vk position right)
```

will display: 

![](assets/en/ViewPro/cmd_vpShowCell2.PNG)



### VP SUSPEND COMPUTING

<!-- REF _command_.VP_SUSPEND_COMPUTING.Syntax -->**VP SUSPEND COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->  

<!-- REF _command_.VP_SUSPEND_COMPUTING.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|

<!-- END REF -->  

#### Description

The `VP SUSPEND COMPUTING` command <!-- REF _command_.VP_SUSPEND_COMPUTING.Summary -->stops the calculation of all formulas in *vpAreaName*<!-- END REF -->. This command is useful when you want to suspend calculations in this 4D View Pro area so you can manually make modifications to formulas without encountering errors before you've finished making the changes.

The command pauses the calculation service in 4D View Pro. Formulas that have already been calculated remain unchanged, however any formulas added after `VP SUSPEND COMPUTING` command  is executed are not calculated. 

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

>The 4D View Pro calculation service maintains a counter of suspend/resume actions. Therefore, each execution of `VP SUSPEND COMPUTING` command  must be balanced by a corresponding execution of the command. Any formula impacted by modifications made while calculations are suspended will be recalculated when the command is executed.
 
#### Example

You've added two buttons to the form so that the user can suspend/resume calculations: 

![](assets/en/ViewPro/cmd_vpStopCalculations.PNG)

The Suspend Computing button code:

```4d
 //pause calculations while users enter information
 If(FORM Event.code=On Clicked)
 
    VP SUSPEND COMPUTING("ViewProArea")
 
 End if
```


```4d
If(FORM Event.code=On Clicked)
 
    VP RESUME COMPUTING("ViewProArea")
 
End if
```


