---
id: configuring
title: Configuring an Area
---

Using 4D events, commands, and attributes, you can set the behavior and appearance of your 4D View Pro areas.

## 4D View Pro Form Events

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

## Sheet Options

The 4D View Pro sheet options object allows you to control various options of your 4D View Pro areas. This object is handled by the following commands:

*	[VP SET SHEET OPTIONS](command-list.md#vp-set-sheet-options)
*	[VP Get sheet options](command-list.md#vp-get-sheet-options) 

### Sheet appearance  

|Property|	|	Type|	Description|
|---|---|---|---|
|allowCellOverflow|	|	boolean|	Specifies whether data can overflow into adjacent empty cells.|
|sheetTabColor|	|	string|	A color string used to represent the sheet tab color, such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", and so on.|
|frozenlineColor|	|	string|	A color string used to represent the frozen line color, such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", and so on.|
|clipBoardOptions|	|	longint|	The clipboard option.<p><table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>[`vk clipboard paste options all`](constant-list.md#vk-clipboard-paste-options-all)</td><td>0</td><td>Pastes all data objects, including values, formatting, and formulas.</td></tr><tr><td>[`vk clipboard paste options formatting`](constant-list.md#vk-clipboard-paste-options-formatting)</td><td>2</td><td>Pastes only formatting.</td></tr><tr><td>[`vk clipboard paste options formulas`](constant-list.md#vk-clipboard-paste-options-formulas)</td><td>3</td><td>Pastes only formulas.</td></tr><tr><td>[`vk clipboard paste options formulas and formatting`](constant-list.md#vk-clipboard-paste-options-formulas-and-formatting)</td><td>5</td><td>Pastes formulas and formatting.</td></tr><tr><td>[`vk clipboard paste options values`](constant-list.md#vk-clipboard-paste-options-values)</td><td>1</td><td>Pastes only values.</td></tr><tr><td>[`vk clipboard paste options values and formatting`](constant-list.md#vk-clipboard-paste-options-values-and-formatting)</td><td>4</td><td>Pastes values and formatting.</td></tr></table>|
|gridline|	|	object|	The grid line's options.|
||color|	string|	A color string used to represent the grid line color, such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", and so on.|
||showVerticalGridline|	boolean|	Specifies whether to show the vertical grid line.
||showHorizontalGridline|	boolean|	Specifies whether to show the horizontal grid line.|
|rowHeaderVisible|	|	boolean|	Specifies whether the row header is visible.|
|colHeaderVisible|	|	boolean|	Specifies whether the column header is visible.|
|rowHeaderAutoText|		|longint|	Specifies whether the row header displays letters or numbers or is blank.<p><table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>[`vk header auto text blank`](constant-list.md#vk-header-auto-text-blank)</td><td>0</td><td>Displays blanks in the headers.</td></tr><tr><td>[`vk header auto text letters`](constant-list.md#vk-header-auto-text-letters)</td><td>2</td><td>Displays letters in the headers.</td></tr><tr><td>[`vk header auto text numbers`](constant-list.md#vk-header-auto-text-numbers)</td><td>1</td><td>Displays numbers in the headers.</td></tr></table>|
|colHeaderAutoText|		|longint|	Specifies whether the column header displays letters or numbers or is blank.<p><table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>[`vk header auto text blank`](constant-list.md#vk-header-auto-text-blank)</td><td>0</td><td>Displays blanks in the headers.</td></tr><tr><td>[`vk header auto text letters`](constant-list.md#vk-header-auto-text-letters)</td><td>2</td><td>Displays letters in the headers.</td></tr><tr><td>[`vk header auto text numbers`](constant-list.md#vk-header-auto-text-numbers)</td><td>1</td><td>Displays numbers in the headers.</td></tr></table>|
|selectionBackColor|	|	string|	The selection's background color for the sheet. (preferred RGBA format)
|selectionBorderColor|		|string|	The selection's border color for the sheet.|
|sheetAreaOffset|		|object|	The sheetAreaOffset's options.|
||left|	longint|	The offset left of sheet from host.|
||top|	longint|	The offset top of sheet from host.|

>All properties are optional.

### Sheet protection  

To lock the whole sheet, you only need to set the *isProtected* property to **true**. You can then unlock cells individually by setting the locked cell style property (see [4D View Pro Style Objects and Style Sheets](#style-objects-and-style-sheets)). 
 

|Property|	|	Type|	Description|
|---|---|---|---|
|isProtected|		|boolean	|Specifies whether cells on this sheet that are marked as protected cannot be edited.|
|protectionOptions|		|object	|A value that indicates the elements that you want users to be able to change. If null : the protectionOptions parameter is reset.|
||allowSelectLockedCells	|boolean	|Specifies whether the user can select locked cells, optional. True by default.|
||allowSelectUnlockedCells	|boolean	|Specifies whether the user can select unlocked cells, optional. True by default.|
||allowSort	|boolean	|Specifies whether the user can sort ranges, optional. False by default.|
||allowFilter	|boolean	|Specifies whether the user can filter ranges, optional. False by default.|
||allowEditObjects	|boolean	|Specifies whether the user can edit floating objects, optional. False by default.|
||allowResizeRows	|boolean	|Specifies whether the user can resize rows, optional. False by default.|
||allowResizeColumns	|boolean	|Specifies whether the user can resize columns, optional. False by default.|
||allowDragInsertRows	|boolean	|Specifies whether the user can perform the drag operation to insert rows, optional. False by default.|
||allowDragInsertColumns	|boolean	|Specifies whether the user can perform the drag operation to insert columns, optional. False by default.|
||allowInsertRows	|boolean	|Specifies whether the user can insert rows, optional. False by default.|
||allowInsertColumns	|boolean	|Specifies whether the user can insert columns, optional. False by default.|
||allowDeleteRows	|boolean	|Specifies whether the user can delete rows, optional. False by default.|
||allowDeleteColumns	|boolean	|Specifies whether the user can delete columns, optional. False by default.|


>All properties are optional.


## Range Object Properties

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




## Cell Format


Defining a format pattern ensures that the content of your 4D View Pro documents is displayed the way you intended. 4D View Pro has built-in formats for numbers, dates, times, and text, but you can also create your own patterns to format the contents of cells using special characters and codes.

For example, when using the [VP SET VALUE](command-list.md#vp-set-value) or [VP SET NUM VALUE](command-list.md#vp-set-num-value) commands to enter amounts in an invoice, you may want the currency symbols ($, €, ¥, etc.) to be aligned regardless of the space required by the number (i.e., whether the amount is $5.00 or $5,000.00). You could use formatting characters and spectify the pattern _($* #,##0.00_) which would display amounts as shown:

![](assets/en/ViewPro/apx_vpCellFormat1.PNG)

Note that when creating your own format patterns, only the display of the data is modified. The value of the data remains unchanged.

### Number and text formats  

Number formats apply to all number types (e.g., positive, negative, and zeros).


|Character|	Description|	Example|
|---|---|---|
|0|	Placeholder that displays zeros.|	#.00 will display 1.1 as 1.10  |
|.|	Displays a decimal point|	0.00 will display 1999 as 1999.00|
|,	|Displays the thousands separator in a number.<p><p> Thousands are separated by commas if the format contains a comma enclosed by number signs "#" or by zeros. A comma following a digit placeholder scales the number by 1,000.|	#,0 will display 12200000 as 12,200,000|
|\_	|Skips the width of the next character.	|Usually used in combination with parentheses to add left and right indents, \_( and _) respectively.|
|@|	Formatter for text. Applies the format to all text in the cell|	"\[Red]@" applies the red font color for text values.|
|*	|Repeats the next character to fill the column width.|	0*- will include enough dashes after a number to fill the cell, whereas *0 before any format will include leading zeros.|
|" "	|Displays the text within the quotes without interpreting it.|	"8%" will display as: 8%|
|%	|Displays numbers as a percentage of 100.|	8% will be displayed as .08|
|\#	|Digit placeholder that does not display extra zeros. If a number has more digits to the right of the decimal than there are placeholders, the number is rounded up.|	#.# will display 1.54 as 1.5 |
|?|	Digit placeholder that leaves space for extra zeros, but does not display them. Typically used to align numbers by decimal point.|	$?? displays a maximum of 2 decimals and causes dollar signs to line up for varying amounts.|
|\	|Displays the character following it.|	#.00\? will display 123 as 123.00?|
|/	|When used with numbers, displays them as fractions. When used with text, date or time codes, displayed "as-is".	|#/# will display .75 as 3/4|
|\[ ]	|Creates conditional formats.	|\[>100]\[GREEN]#,##0;\[<=-100]\[YELLOW]#,##0;\[BLUE]#,##0|
|E|	Scientific notation format.	|#E+# - will display 1,500,500 as 2E+6|
|\[color]	|Formats the text or number in the color specified|	\[Green]###.##\[Red]-###.###|


#### Example  


```4d
//Set the cell value as $125,571.35
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)")
```

### Date and time formats  

4D View Pro provides the following constants for ISO 8601 date and time patterns:

|Constant|	Value|	Comment|
|---|---|---|
|[`vk pattern full date time`](constant-list.md#vk-pattern-full-date-time)|	"_fullDateTimePattern_"	|ISO 8601 format for the full date and time in current localization.<p><p>USA default pattern: "dddd, dd MMMM yyyy HH:mm:ss"|
|[`vk pattern long date`](constant-list.md#vk-pattern-long-date)|	"_longDatePattern_"	|ISO 8601 format for the full date in current localization.<p><p>USA default pattern: "dddd, dd MMMM yyyy"|
|[`vk pattern long time`](constant-list.md#vk-pattern-long-time)|	"_longTimePattern_"	|ISO 8601 format for the time in current localization.<p><p>USA default pattern: "HH:mm:ss"|
|[`vk pattern month day`](constant-list.md#vk-pattern-month-day)|	"_monthDayPattern_"	|ISO 8601 format for the month and day in current localization.<p><p>USA default pattern: "MMMM dd"|
|[`vk pattern short date`](constant-list.md#vk-pattern-short-date)|	"_shortDatePattern_"	|Abbreviated ISO 8601 format for the date in current localization.<p><p>USA default pattern: "MM/dd/yyyy"|
|[`vk pattern short time`](constant-list.md#vk-pattern-short-time)|	"_shortTimePattern_"|	Abbreviated ISO 8601 format for the time in current localization.<p><p>USA default pattern: "HH:mm"|
|[`vk pattern sortable date time`](constant-list.md#vk-pattern-sortable-date-time)|	"_sortableDateTimePattern_"	|ISO 8601 format for the date and time in current localization which can be sorted.<p><p>USA default pattern: "yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss"|
|[`vk pattern universal sortable date time`](constant-list.md#vk-pattern-universal-sortable-date-time)|	"_universalSortableDateTimePattern_"	|ISO 8601 format for the date and time in current localization using UTC which can be sorted.<p><p>USA default pattern: "yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'"|
|[`vk pattern year month`](constant-list.md#vk-pattern-year-month)	|"_yearMonthPattern_"|	ISO 8601 format for the month and year in current localization.<p><p>USA default pattern: "yyyy MMMM"|


#### Example  


```4d
//Set the cell value as specific date and time
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))
```

### Custom date and time formats  

To create your own date and time patterns, in your current localization, you can use combinations of the following codes:
 

||Code<br>(not case-sensitive)|	Description|Example|
|---|---|---|---|
|Date|		|	|(January 1, 2019)|
||m	|Month number without leading zero|	1|
||mm	|Month number with leading zero	|01|
||mmm	|Month name, short	|Jan|
||mmmm	|Month name, long	|January|
||d	|Day number without leading zero|	1|
||dd	|Day number with leading zero|	01|
||ddd	|Day of week, short	|Tue|
||dddd	|Day of week, long|	Tuesday|
||yy	|Year, short	|19|
||yyyy	|Year, long|	2019|
|Time	||		|(2:03:05 PM)|
||h	|Hour without leading zero. 0-23|	2|
||hh	|Hour with leading zero. 00-23|	02|
||m	|Minutes without leading zero. 0-59|	3|
||mm|	Minutes with leading zero. 00-59|	03|
||s	|Seconds without leading zero. 0-59|	5|
||ss	|Seconds with leading zero. 00-59|	05|
||\[h]	|Elapsed time in hours	|14 (can exceed 24)|
||\[mm]|	Elapsed time in minutes|	843|
||\[ss]|	Elapsed time in seconds|	50585|
||AM/PM|	Periods of day. 24 hour fomat used if omitted.|	PM|

>The code 'm' is interpreted depending on its position in the pattern. If it's immediately after 'h' or 'hh' or immediately before 's' or 'ss', it will be interpreted as minutes, otherwise it will be interpreted as months.

### Additional symbols  

In addition to the special characters and codes described in the previous sections, there are additional characters and symbols that can be used in your format patterns. These additional characters and symbols do not require a \ or "" and do not impact the interpretation of the format pattern. They appear "as-is" within the pattern.

|Character|	Description|Example|
|---|---|---|
|+ and -	|Plus and minus signs|	### + ### = ###,###|
|( )	|Left and right parenthesis|	(-###.##)|
|:	|Colon|	hh:mm:ss|
|^	|Caret|	#\^#|
|'	|Apostrophe|	'######|
|{ }	|Curly brackets|	{###,###,###}|
|< >	|Less-than and greater than signs|	## >##|
|=	|Equal sign|	#+#=##|
|/	|Forward slash. When used with numbers, displays them as fractions.|	mm/dd/yyyy|
|!	|Exclamation point|	$###.00!|
|&	|Ampersand|	"Hello" & "Welcome"|
|~	|Tilde|	~##|
| 	|Space character|	|
|€	|Euro|	€###.00|
|£	|British Pound|	£###.00|
|¥	|Japanese Yen|	¥###.00|
|$	|Dollar sign|	$###.00|
|¢	|Cent sign|	.00¢|



## Print Attributes

4D View Pro print attributes allow you to control all aspects of printing 4D View Pro areas. These attributes are handled by the following commands:

*	[VP SET PRINT INFO](command-list.md#vp-set-print-info) 
*	[VP Get print info](command-list.md#vp-get-print-info) 
*	[VP PRINT](command-list.md#vp-print)

### Columns / Rows  

Column and row attributes are used to specify the beginning, end, and repetition of columns and rows.

|Property|	Type|	Description|
|---|---|---|
|columnEnd|	longint|	The last column to print in a cell range.<p><p>Default value = -1 (all columns)|
|columnStart|	longint|	The first column to print in a cell range.<p><p>Default value = -1 (all columns)|
|repeatColumnEnd|	longint	|The last column of a range of columns to print on the left of each page.<p><p>Default value = -1 (all columns)|
|repeatColumnStart|	longint	|The first column of a range of columns to print on the left of each page.<p><p>Default value = -1 (all columns)|
|repeatRowEnd|	longint	|The last row of a range of rows to print on the top of each page.<p><p>Default value = -1 (all rows)|
|repeatRowStart|	longint	|The first row of a range of rows to print at the top of each page.<p><p>Default value = -1 (all rows)|
|rowEnd|	longint	|The last row to print in a cell range.<p><p>Default value = -1 (all rows)|
|rowStart|	longint	|The first row to print in a cell range.<p><p>Default value = -1 (all rows)|

### Headers / Footers  

Header and footer attributes are used to specify text or images in the left, right, and center header/footer sections.

|Property|	Type|	Description|
|---|---|---|
|footerCenter|	text	|The text and format of the center footer on printed pages.|
|footerCenterImage|	picture &#124; text*|	The image for the center section of the footer.|
|footerLeft	|text	|The text and format of the left footer on printed pages.|
|footerLeftImage|	picture &#124; text*|	The image for the left section of the footer.|
|footerRight|	text|	The text and format of the right footer on printed pages.|
|footerRightImage|	picture &#124; text*|	The image for the right section of the footer. | 
|headerCenter|	text|	The text and format of the center header on printed pages.|
|headerCenterImage|	picture &#124; text*|	The image for the center section of the header.|
|headerLeft|	text	|The text and format of the left header on printed pages. |
|headerLeftImage|	picture &#124; text*	|The image for the left section of the header.|
|headerRight|	text	|The text and format of the right header on printed pages.|
|headerRightImage|	picture &#124; text*|	The image for the right section of the header.|

\* If using text type, pass the filepath (absolute or relative) of the image. If you pass a relative path, the file should be located next to the database structure file. In Windows, the file extension must be indicated. No matter the type used to set an image, the image itself (not a reference) is stored in the 4D View Pro area and is returned by [VP Get print info](command-list.md#vp-get-print-info)
.

### Special Characters  

The following special characters allow the automatic addition or formatting of information in the header and footer when the 4D View Pro area is printed. 


|Character|	Description	|Example|	Result|
|---|---|---|---|
|&	|Escape character|	(see examples below)   |	 |
|P|	Current page|	printInfo.headerLeft:="This is page &P."|	This is page 5.|| 
|N	|Page count|	printInfo.headerLeft:="There are &N pages."|	There are 10 pages. |
|D	|Current date (yyyy/mm/dd format)|	printInfo.headerLeft:="It is &D."|	It is 2015/6/19. |
|T	|Current time|	printInfo.headerLeft:="It is &T."|	It is 16:30:36.|
|G	|Image|	printInfo.headerLeftImage:=smiley<br>printInfo.headerLeft:="&G"	|![](assets/en/ViewPro/apx_vpPrintAttributes1.PNG) |
|S	|Strikethrough|	printInfo.headerLeft:="&SThis is text."	|~~This is text.~~|
|U	|Underline	|printInfo.headerLeft:="&UThis is text."|	<ins>This is text.</ins>|
|B|	Bold|	printInfo.headerLeft:="&BThis is text."	|**This is text.**|
|I	|Italic|	printInfo.headerLeft:="&IThis is text."	|*This is text.*|
|"	|Font prefix|	printInfo.headerLeft:="&\"Lucida Console\"&14This is text."	|![](assets/en/ViewPro/apx_vpPrintAttributes2.PNG)|
|K|	Text Color prefix|	printInfo.headerLeft:="&KFF0000This is text."|	<span style="color:red">This is text</span>. 
|F|	Workbook name|	printInfo.headerLeft:="&F"|	2019 Monthly Revenue Forecasts|
|A|	Spreadsheet name|	printInfo.headerLeft:="&A"|	June 2019 revenue forecast |

### Margins  

Margin attributes are used to specify the 4D View Pro area margins for printing. Expressed in hundreds of an inch.  

|Property|	Type|	Description|
|---|---|---|
|margin	|object	|The print margins|
||| <table> <tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td>top</td><td> longint</td><td>Top margin, in hundredths of an inch.<p><p>Default value = 75</td></tr> <tr><td>bottom</td><td>longint</td><td>Bottom margin, in hundredths of an inch.<p><p>Default value = 75</td></tr> <tr><td>left</td><td>longint</td><td>Left margin, in hundredths of an inch.<p><p>Default value = 70</td></tr> <tr><td>right</td><td>longint</td><td>Right margin, in hundredths of an inch.<p><p>Default value = 70</td></tr><tr><td> header</td><td>longint</td><td>Header offset, in hundredths of an inch.<p><p>Default value = 30</td></tr> <tr><td>footer</td><td>longint</td><td>Footer offset, in hundredths of an inch.<p><p>Default value = 30</td></tr> </table>|

### Orientation  

Orientation attributes are used to specify the direction the printed page layout. 

>This attribute defines rendering information only.

|Property|	Type|	Description|
|---|---|---|
|orientation|	longint|	Page orientation |
|||<table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>[`vk print page orientation landscape`](constant-list.md#vk-print-page-orientation-landscape)</td><td>2</td><td>Landscape orientation</td></tr><tr><td>[`vk print page orientation portrait`](constant-list.md#vk-print-page-orientation-portrait)</td><td>1</td><td>Portrait orientation. (default)</td></tr></table>|

### Page  

Page attributes are used to specify general document print settings.

|Property|	Type|	Description|
|---|---|---|
|blackAndWhite|	boolean	|Printing in black and white only.<p><p>**Note**: PDFs are not affected by this attribute. Colors in PDFs remain.<p><p>Default value = "false"|
|centering|	longint|	How the contents are centered on the printed page:|
| 	|	|<table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>[`vk print centering both`](constant-list.md#vk-print-centering-both)</td><td>3</td><td>Printing is centered both horizontally and vertically on the page</td></tr><tr><td>[`vk print centering horizontal`](constant-list.md#vk-print-centering-horizontal)</td><td>1</td><td>Printing is centered horizontally on the page.</td></tr><tr><td>[`vk print centering none`](constant-list.md#vk-print-centering-none)</td><td>0</td><td>Printing is not centered. (default)</td></tr><tr><td>[`vk print centering vertical`](constant-list.md#vk-print-centering-vertical)</td><td>2</td><td>Printing is centered vertically on the page.</td></tr></table>|
|firstPageNumber|longint|The page number to print on the first page.<p><p>Default value = 1|
|pageOrder|	longint	|The order pages are printed:|
| |		|<table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td>[`vk print page order auto`](constant-list.md#vk-print-page-order-auto)</td><td>0</td><td>Printing order is determined automatically. (default)</td></tr><tr><td>[`vk print page order down then over`](constant-list.md#vk-print-page-order-down-then-over)</td><td>1</td><td>Pages are printed in descending order, then across.</td></tr><tr><td>[`vk print page order over then down`](constant-list.md#vk-print-page-order-over-then-down)</td><td>2</td><td>Pages are printed across, then descending order.</td></tr></table>|
|pageRange	|text|	The range of pages for printing|
|qualityFactor	|longint|	The quality factor for printing (1 - 8).  The higher the quality factor, the better the printing quality, however printing performance may be affected.<p><p>Default value = 2|
|useMax	|boolean|	Only columns and rows with data are printed.<p><p>Default value = "true"|
|zoomFactor	|real|	The amount to enlarge or reduce the printed page.<p><p>Default value = 1|

### Paper Size  

Paper size attributes are used to specify the dimensions or model of paper to use for printing. There are two ways to define paper size:

*	Custom size - height and width attributes 
*	Standard size - kind attribute 
 
|Property|	Type|	Description|
|---|---|---|
|paperSize	|object	|Paper dimensions (height, width) or specific format (kind) for printing.|  
|||<table><tr><th>Property</th><th>Type</th><th>Description</th></tr> <tr><td>height</td><td> longint</td><td>Height of the paper, in hundredths of an inch.</td></tr> <tr><td>width</td><td>longint</td><td>Width of the paper, in hundredths of an inch.</td></tr> <tr><td>kind</td><td>text</td><td>Name of standard paper size (e.g., A2, A4, legal, etc.) returned by `Get Print Option`.<p><p>Default value = "letter"</td></tr></table>|

### Scale
  
Scale attributes are used to specify printing optimization and adjustments.

|Property|	Type|	Description|
|---|---|---|
|bestFitColumns|	boolean|	Column width is adjusted to fit the largest text width for printing.<p><p>Default value = "false"|
|bestFitRows|	boolean|	Row height is adjusted to fit the tallest text height for printing. <p><p>Default value = "false"  | 
|fitPagesTall|	longint|	The number of vertical pages (portrait orientation) to check when optimizing printing.<p><p> Default value = -1|
|fitPagesWide	|longint|	The number of horizontal pages (landscape orientation) to check when optimizing printing. <p><p>Default value = -1|

### Show / Hide 
 
Show / Hide attributes are used to specify the visibility (printing) of 4D View Pro area elements.  

|Property|	Type|	Description|
|---|---|---|
|showBorder|	boolean	|Prints the outline border.<p><p>Default value = "true"|
|showColumnHeader	|longint	|Column header print settings|
| |	|	<table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td><tr><td>[`vk print visibility hide`](constant-list.md#vk-print-visibility-hide)</td><td>1</td><td>The header is not visible.</td></tr><tr><td>[`vk print visibility inherit`](constant-list.md#vk-print-visibility-inherit)</td><td>0</td><td>Inherits the settings from the sheet (default)</td></tr><tr><td>[`vk print visibility show`](constant-list.md#vk-print-visibility-show)</td><td>2</td><td>The header is visible on every page.</td></tr><tr><td>[`vk print visibility show once`](constant-list.md#vk-print-visibility-show-once)</td><td>3</td><td>	The header is visible once.</td></tr></table>|
|showGridLine|	boolean	|Prints the gridlines.<p><p>Default value = "false"|
|showRowHeader	|longint	|Row headers print settings|
| 	|	|<table><tr><th>Constant</th><th>Value</th><th>Comment</th></tr><tr><td><tr><td>[`vk print visibility hide`](constant-list.md#vk-print-visibility-hide)</td><td>1</td><td>The header is not visible.</td></tr><tr><td>[`vk print visibility inherit`](constant-list.md#vk-print-visibility-inherit)</td><td>0</td><td>Inherits the settings from the sheet (default)</td></tr><tr><td>[`vk print visibility show`](constant-list.md#vk-print-visibility-show)</td><td>2</td><td>The header is visible on every page.</td></tr><tr><td>[`vk print visibility show once`](constant-list.md#vk-print-visibility-show-once)</td><td>3</td><td>	The header is visible once.</td></tr></table>|

### Watermark  

Watermark attributes are used to superimpose text or an image onto the 4D View Pro area.

|Property|	Type|	Description|
|---|---|---|
|watermark|	collection	|Collection of watermark settings.<p><p>Default value: undefined|
|||<table><tr><th>Property</th><th>Type</th><th>Description</th></tr><tr><td> \[ ].height</td><td>longint</td><td>The height of the watermark text / image.</td></tr> <tr><td>\[ ].imageSrc</td><td>picture &#124; text*</td><td>The watermark text / image.</td></tr><tr><td> \[ ].page</td><td>text</td><td>The page(s) where the watermark is printed.<p><p>For all pages: "all"<p><p>For specific pages: page numbers or page ranges separated by commas. Ex.: "1,3,5-12"</td></tr><tr><td> \[ ].width</td><td>longint</td><td>The width of the watermark text / image.</td></tr><tr><td> \[ ].x</td><td>longint</td><td>The horizontal coordinate of the top left point of the watermark text / image.</td></tr>
<tr><td> \[ ].y</td><td>longint</td><td>The vertical coordinate of the top left point of the watermark text / image.</td></tr></table>|
||| 		* If using text type, pass the filepath (absolute or relative) of the image. If you pass a relative path, the file should be located next to the database structure file. In Windows, the file extension must be indicated. No matter the type used to set an image, the image itself (not a reference) is stored in the 4D View Pro area and is returned by [VP Get print info](command-list.md#vp-get-print-info).|



## Style Objects and Style Sheets


4D View Pro style objects and style sheets allow you to control the graphical aspects and the look of your 4D View Pro documents. 

### Style objects

Style objects contain the style property settings. They can be used either in a style sheet or on their own. Style objects can also be used in addition to a style sheet so that different settings can be specified for individual cell ranges without affecting the rest of the document. 

You can use style objects directly with the [VP SET CELL STYLE](command-list.md#vp-set-cell-style)) and [VP SET DEFAULT STYLE](command-list.md#vp-set-default-style) commands.

### Style sheets 

A style sheet groups together a combination of properties in a style object (see below) to specify the look of all of the cells in your 4D View Pro documents. Style sheets saved with the document can be used to set the properties for a single sheet, multiple sheets, or an entire workbook.

When created, a 4D View Pro style sheet is given a name which is saved within the style sheet in the "name" property. This allows a style sheet to be easily used and, if thoughtfully selected, can facilitate its identification and purpose (e.g., Letterhead\_internal, Letterhead_external).

Style sheets are created with the [VP ADD STYLESHEET](command-list.md#vp-add-stylesheet) command and applied with the the [VP SET DEFAULT STYLE](command-list.md#vp-set-default-style) or [VP SET CELL STYLE](command-list.md#vp-set-cell-style) commands. You can  remove a style sheet with the [VP REMOVE STYLESHEET](command-list.md#vp-remove-stylesheet) command.

The [VP Get stylesheet](command-list.md#vp-get-stylesheet) command can be used to return the style object of a single style sheet or you can use the [VP Get stylesheets](command-list.md#vp-get-stylesheets) command to retrieve a collection of style objects for multiple style sheets.

### Style properties

 
You can find detailed descriptions of the possible values below on the [4D View Pro Constants](constant-list.md) page.

#### Background & Foreground  

|Property|	Type|	Description|	Possible values|
|---|---|---|---|
|backColor|	text|Defines the color of the background.|CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)|
|backgroundImage|picture, text|Specifies a background image.|Can be specified directly or via the image path (full path or file name only). If the file name only is used, the file must be located next to the database structure file. No matter how set (picture or text), a picture is saved with the document. This could impact the size of a document if the image is large. Note for Windows: File extension must be included.| 
|backgroundImageLayout|	longint|	Defines the layout for the background image.|	vk image layout center, vk image layout none, vk image layout stretch, vk image layout zoom|
|foreColor|	text|Defines the color of the foreground.|CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)|

#### Borders  

|Property|	SubProperty|Type|	Description|	Possible values|
|---|---|---|---|---|
|borderBottom, borderLeft, borderRight, borderTop, diagonalDown,diagonalUp|object|	Defines the corresponding border line|	 |
||color|	text|	Defines the color of the border. Default = black.|CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)|
||style|	longint|	Defines the style of the border. Default = empty. Cannot be null or undefined.|	vk line style dash dot, vk line style dash dot dot, vk line style dashed, vk line style dotted, vk line style double, vk line style empty, vk line style hair, vk line style medium, vk line style medium dash dot, vk line style medium dash dot dot, vk line style medium dashed, vk line style slanted dash dot, vk line style thick, vk line style thick|

#### Fonts and text 

|Property|Subproperty|	Type|	Description|	Possible values|
|---|---|---|---|---|
|font|		|text|	Specifies the font characteristics in CSS font shorthand ("font-style font-variant font-weight font-size/line-height font-family"). Example: "14pt Century Gothic". The font-size and font-family values are mandatory. If one of the other values is missing, their default values are used. Note: If a font name contains a space, the name must be within quotes.|	A CSS font shorthand.<p>4D provides utility commands to handle font characteristics as objects: [`VP Font to object`](command-list.md#vp-font-to-object) and [`VP Object to font`](command-list.md#vp-object-to-font)|
|formatter|		|text|Pattern for value/time property.|Number/text/date/time formats, special characters. See [4D View Pro Cell Format](configuring.md#cell-format) section.|
|isVerticalText|		|boolean|Specifies text direction.|True = vertical text, False = horizontal text.|
|labelOptions|		|object|	Defines cell label options (watermark options).| |	
||alignment|	longint|Specifies the position of the cell label. Optional property.|	vk label alignment top left, vk label alignment bottom left, vk label alignment top center, vk label alignment bottom center, vk label alignment top right, vk label alignment bottom right|
||visibility|	longint|	Specifies the visibility of the cell label. Optional property.|	vk label visibility auto, vk label visibility hidden, vk label visibility visible|
||foreColor|	text|Defines the color of the foreground. Optional property.|	CSS color "#rrggbb" syntax (preferred syntax), CSS color "rgb(r,g,b)" syntax (alternate syntax), CSS color name (alternate syntax)|
||font|	text|Specifies the font characteristics with CSS font shorthand ("font-style font-variant font-weight font-size/line-height font-family"). The font-size and font-family values are mandatory.|	|
|textDecoration|		|longint|Specifies the decoration added to text.|	vk text decoration double underline, vk text decoration line through, vk text decoration none, vk text decoration overline, vk text decoration underline|
|textIndent|		|longint|Defines the unit of text indention. 1 = 8 pixels	||
|textOrientation|		|longint|	Defines the rotation angle of the text in a cell.	Number between -90 and 90| |
|watermark|		|text|Defines the watermark (cell label) content|	|
|wordWrap|		|boolean|Specifies if text should be wrapped.|True = wrapped text, False = unwrapped text|

#### Layout  

|Property|	Type|	Description|	Possible values|
|---|---|---|---|
|cellPadding	|text	|Defines the cell padding|	| 
|hAlign	|longint	|Defines the horizontal alignment of cell contents.	|vk horizontal align center, vk horizontal align general, vk horizontal align left, vk horizontal align right|
|locked	|boolean	|Specifies cell protection status. Note, this is only available if sheet protection is enabled (see Sheet protection section).|True = locked, False = unlocked.|
|shrinkToFit	|boolean	|Specifies if the contents of the cell should be reduced.	|True = reduced content, False = no reduction.|
|tabStop	|boolean	|Specifies if the focus to the cell can be set using the Tab key.	|True = Tab key sets focus, False = Tab key does not set focus.|
|vAlign	|longint	|Specifies the vertical alignment of cell contents.	|vk vertical align bottom, vk vertical align center, vk vertical align top|


#### Style information  

|Property|	Type|	Description|
|---|---|---|
|name	|text	|Defines the name of the style| 
|parentName	|text	|Specifies the style that the current style is based on. Values from the parent style will be applied, then any values from the current style are applied. Changes made in the current style will not be refelected in the parent style. Only available when using a style sheet.|