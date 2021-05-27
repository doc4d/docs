---
id: constant-list
title: Constant List
---

[C](#c) - 
[F](#f) - 
[H](#h) - 
[I](#i) - 
[L](#l) - 
[M](#m) - 
[P](#p) - 
[V](#v) - 
[W](#w) 

--



### vk 4D View Pro format 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|.4VP|
</details>

#### Description

4D View Pro format (default format)

#### Used by

[VP EXPORT DOCUMENT](command-list.md#vp-export-document)


## C

### vk clipboard paste options all

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

Pastes all data objects, including values, formatting, and formulas.



### vk clipboard paste options formatting

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|2|
</details>

#### Description

Pastes only formatting.



### vk clipboard paste options formulas

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|3|
</details>

#### Description

Pastes only formulas.



### vk clipboard paste options formulas and formatting

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|5|
</details>

#### Description

Pastes formulas and formatting.



###  vk clipboard paste options values 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Pastes only values.



### vk clipboard paste options values and formatting 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|4|
</details>

#### Description

Pastes values and formatting.



### vk current sheet 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|-1|
</details>

#### Description

Designates current sheet of the 4D View Pro area (default)

#### Used by

[VP ADD FORMULA NAME](command-list.md#vp-add-formula-name) - [VP ADD RANGE NAME](command-list.md#vp-add-range-name) - [VP ADD STYLESHEET](command-list.md#vp-add-stylesheet) - [VP ALL](command-list.md#vp-all) - [VP Cell](command-list.md#vp-cell) - [VP Cells](command-list.md#vp-cells) - [VP Column](command-list.md#vp-column) - [VP Get active cell](command-list.md#vp-get-active-cell) - [VP Get column count](command-list.md#vp-get-column-count) - [VP Get default style](command-list.md#vp-get-default-style) - [VP Get formula by name](command-list.md#vp-get-formula-by-name) - [VP Get frozen panes](command-list.md#vp-get-frozen-panes) - [VP Get names](command-list.md#vp-get-names) - [VP Get print info](command-list.md#vp-get-print-info) - [VP Get row count](command-list.md#vp-get-row-count) - [VP Get selection](command-list.md#vp-get-selection) - [VP Get sheet options](command-list.md#vp-get-sheet-options) - [VP Get stylesheet](command-list.md#vp-get-stylesheet) - [VP Get stylesheets](command-list.md#vp-get-stylesheets) - [VP Name](command-list.md#vp-name) - [VP REMOVE NAME](command-list.md#vp-remove-name) - [VP REMOVE STYLESHEET](command-list.md#vp-remove-stylesheet) - [VP RESET SELECTION](command-list.md#vp-reset-selection) - [VP Row](command-list.md#vp-row) - [VP SET COLUMN COUNT](command-list.md#vp-set-column-count) - [VP SET DEFAULT STYLE](command-list.md#vp-set-default-style) - [VP SET FROZEN PANES](command-list.md#vp-set-frozen-panes) - [VP SET PRINT INFO](command-list.md#vp-set-print-info) - [VP SET ROW COUNT](command-list.md#vp-set-row-count) - [VP SET SHEET OPTIONS](command-list.md#vp-set-sheet-options)


## F


### vk find flag exact match 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|2|
</details>

#### Description

Specifies that the entire content of the cell must completely match the search value.

#### Used by

[VP Find](command-list.md#vp-find)



### vk find flag ignore case 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Specifies that capital and lower-case letters are considered the same. Ex: "a" is the same as "A".

#### Used by

[VP Find](command-list.md#vp-find)



### vk find flag none 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

Specifies that no search flags are considered. (default)

#### Used by

[VP Find](command-list.md#vp-find)



### vk find flag use wild cards 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|4|
</details>

#### Description

Specifies that wildcard characters (\*,?) can be used in the search string. Wildcard characters can be used in any string comparison to match any number of characters.
*	\*  - For zero or multiple characters. For example, searching for "bl*"  can find "bl", "black", "blue", and "blob".
*	? - For a single character. For example, searching for "h?t" can find "hot", "hat", and "hit".

#### Used by

[VP Find](command-list.md#vp-find)



### vk find order by columns 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Specifies that the search is performed by columns. Each row of a column is searched before the search continues to the next column. 

#### Used by

[VP Find](command-list.md#vp-find)



### vk find order by rows 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

Specifies that the search is performed by rows. Each column of a row is searched before the search continues to the next row. (default)

#### Used by

[VP Find](command-list.md#vp-find)



### vk find target formula 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|8|
</details>

#### Description

Specifies that the search is performed in the cell formula.

#### Used by

[VP Find](command-list.md#vp-find)



### vk find target tag 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|4|
</details>

#### Description

Specifies that the search is performed in the cell tag.

#### Used by

[VP Find](command-list.md#vp-find)



### vk find target text 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Specifies that the search is performed in the cell text. (default)

#### Used by

[VP Find](command-list.md#vp-find)



### vk font size large

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|large|
</details>

#### Description

Large text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font size larger

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|larger|
</details>

#### Description

Larger text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font size medium

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|medium|
</details>

#### Description

Medium sized text



### vk font size small

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|small|
</details>

#### Description

Small text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font size smaller

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|smaller|
</details>

#### Description

Smaller text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font size x large

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|x-large|
</details>

#### Description

Extra large sized text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font size x small

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|x-small|
</details>

#### Description

Extra small sized text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)


### vk font size xx small

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|x-small|
</details>

#### Description

Extra small sized text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font size xx large

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|xx-large|
</details>

#### Description

Extra extra large sized text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font size xx small

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|xx-small|
</details>

#### Description

Extra extra small sized text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font style italic

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|italic|
</details>

#### Description

Italic text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font style oblique

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|oblique|
</details>

#### Description

Oblique text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font variant small caps

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|small-caps|
</details>

#### Description

Text displayed in small capital letters.

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font weight 100

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|100|
</details>

#### Description

Thin text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font weight 200

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|200|
</details>

#### Description

Extra light text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font weight 300

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|300|
</details>

#### Description

Light text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font weight 400

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|400|
</details>

#### Description

Normal weight text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font weight 500

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|500|
</details>

#### Description

Medium weight text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font weight 600

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|600|
</details>

#### Description

Semi-bold text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font weight 700

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|700|
</details>

#### Description

Bold text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font weight 800

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|800|
</details>

#### Description

Extra bold text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font weight 900

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|900|
</details>

#### Description

Ultra bold text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font weight bold

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|bold|
</details>

#### Description

Bold text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font weight bolder

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|bolder|
</details>

#### Description

Heavier bold text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)



### vk font weight lighter

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|lighter|
</details>

#### Description

Lighter text

#### Used by

[VP Object to font](command-list.md#vp-object-to-font)

## H

### vk header auto text letters

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

Displays letters in the headers.



### vk header auto text numbers

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Displays numbers in the headers.



### vk horizontal align center

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Cell contents are horizontally aligned to the center.



### vk horizontal align general 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|5|
</details>

#### Description

Cell contents are horizontally aligned according to their value type.



### vk horizontal align left

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

Cell contents are horizontally aligned to the left.



### vk horizontal align right 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|2|
</details>

#### Description

Cell contents are horizontally aligned to the right

## I

### vk image layout center

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Background image is displayed in the center of the 4D View Pro area.


### vk image layout none

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|3|
</details>

#### Description

Original-sized background image is displayed in the upper left corner of the 4D View Pro area.


### vk image layout stretch

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

Background image fills the entire 4D View Pro area.



### vk image layout zoom

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|2|
</details>

#### Description

Background image is displayed with its original aspect ratio.

## L

### vk label alignment bottom center

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|4|
</details>

#### Description

Cell label is center-aligned on the bottom.



### vk label alignment bottom left

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|3|
</details>

#### Description

Cell label is left-aligned on the bottom.



### vk label alignment bottom right

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|5|
</details>

#### Description

Cell label is right-aligned on the bottom.



### vk label alignment top center

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Cell label is center-aligned on the top.



### vk label alignment top left

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

Cell label is left-aligned on the top.



### vk label alignment top right 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|2|
</details>

#### Description

Cell label is right-aligned on the top.



### vk label visibility auto

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|2|
</details>

#### Description

Displays a watermark in padding area (if cell has a value) or in the cell (if cell has no value).



### vk label visibility hidden

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Displays a watermark in cell area based on a value condition.



### vk label visibility visible

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

Watermark is always shown in padding area, regardless of cell value.



### vk line style dash dot

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|9|
</details>

#### Description

Line made from a single dash and a single dot.

#### Used by

[VP SET BORDER](command-list.md#vp-set-border)



### vk line style dash dot dot

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|11|
</details>

#### Description

Line made from a single dash and two dots.

#### Used by

[VP SET BORDER](command-list.md#vp-set-border)



### vk line style dashed

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|3|
</details>

#### Description

Line made from dashes.

#### Used by

[VP SET BORDER](command-list.md#vp-set-border)



### vk line style dotted 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|4|
</details>

#### Description

Line made from dots.

#### Used by

[VP SET BORDER](command-list.md#vp-set-border)



### vk line style double

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|6|
</details>

#### Description

Line made from two lines.

#### Used by

[VP SET BORDER](command-list.md#vp-set-border)



### vk line style empty

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

A simple, un-styled line.

#### Used by

[VP SET BORDER](command-list.md#vp-set-border)



### vk line style hair

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|7|
</details>

#### Description

Line made from dots.

#### Used by

[VP SET BORDER](command-list.md#vp-set-border)



### vk line style medium

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|2|
</details>

#### Description

Solid, medium-weight line.

#### Used by

[VP SET BORDER](command-list.md#vp-set-border)



### vk line style medium dash dot

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|10|
</details>

#### Description

Medium-weight line made from a single dash and a single dot.

#### Used by

[VP SET BORDER](command-list.md#vp-set-border)



### vk line style medium dash dot dot

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|12|
</details>

#### Description

Medium-weight line made from a single dash and two dots.

#### Used by

[VP SET BORDER](command-list.md#vp-set-border)



### vk line style medium dashed

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|8|
</details>

#### Description

Medium-weight line mad from dashes.

#### Used by

[VP SET BORDER](command-list.md#vp-set-border)



### vk line style slanted dash dot

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|13|
</details>

#### Description

Line made from a slanted dash and a slanted dot.

#### Used by

[VP SET BORDER](command-list.md#vp-set-border)



### vk line style thick

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|5|
</details>

#### Description

Heavy-weight solid line.

#### Used by

[VP SET BORDER](command-list.md#vp-set-border)



### vk line style thin

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Light-weight solid line.

#### Used by

[VP SET BORDER](command-list.md#vp-set-border)

## M

### vk MS Excel format 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|.xlsx|
</details>

#### Description

Microsoft Excel format.

#### Used by
[VP EXPORT DOCUMENT](command-list.md#vp-export-document)

## P

### vk pattern full date time

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|\_fullDateTimePattern\_|
</details>

#### Description

ISO 8601 format for the full date and time in current localization.

USA default pattern: "dddd, dd MMMM yyyy HH:mm:ss"


#### Used by

[VP SET DATE TIME VALUE](command-list.md#vp-set-date-time-value)



### vk pattern long date

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|\_longDatePattern\_|
</details>

#### Description

ISO 8601 format for the full date in current localization.

USA default pattern: "dddd, dd MMMM yyyy"

#### Used by

[VP SET DATE TIME VALUE](command-list.md#vp-set-date-time-value) - [VP SET DATE VALUE](command-list.md#vp-set-date-value)



### vk pattern long time

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|\_longTimePattern\_|
</details>

#### Description

ISO 8601 format for the time in current localization.

USA default pattern: "HH:mm:ss"

#### Used by

[VP SET DATE TIME VALUE](command-list.md#vp-set-date-time-value) 



### vk pattern month day

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|\_monthDayPattern\_|
</details>

#### Description

ISO 8601 format for the month and day in current localization.

USA default pattern: "MMMM dd"

#### Used by

[VP SET DATE TIME VALUE](command-list.md#vp-set-date-time-value) - [VP SET DATE VALUE](command-list.md#vp-set-date-value)



### vk pattern short date

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|\_shortDatePattern\_|
</details>

#### Description

Abbreviated ISO 8601 format for the date in current localization.

USA default pattern: "MM/dd/yyyy"

#### Used by

[VP SET DATE TIME VALUE](command-list.md#vp-set-date-time-value) - [VP SET DATE VALUE](command-list.md#vp-set-date-value)



### vk pattern short time

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|\_shortTimePattern\_|
</details>

#### Description

Abbreviated ISO 8601 format for the time in current localization.

USA default pattern: "HH:mm"

#### Used by

[VP SET DATE TIME VALUE](command-list.md#vp-set-date-time-value)



### vk pattern sortable date time

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|\_sortableDateTimePattern\_|
</details>

#### Description

ISO 8601 format for the date and time in current localization which can be sorted.

USA default pattern: "yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss"

#### Used by

[VP SET DATE TIME VALUE](command-list.md#vp-set-date-time-value)



### vk pattern universal sortable date time

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|\_universalSortableDateTimePattern\_|
</details>

#### Description

ISO 8601 format for the date and time in current localization using UTC which can be sorted.

USA default pattern: "yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'"

#### Used by

[VP SET DATE TIME VALUE](command-list.md#vp-set-date-time-value)



### vk pattern year month

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|\_yearMonthPattern\_|
</details>

#### Description

ISO 8601 format for the month and year in current localization.

USA default pattern: "yyyy MMMM"

#### Used by

[VP SET DATE TIME VALUE](command-list.md#vp-set-date-time-value) - [VP SET DATE VALUE](command-list.md#vp-set-date-value)



### vk pdf format 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|string|pdf|
</details>

#### Description

PDF format.

#### Used by

[VP EXPORT DOCUMENT](command-list.md#vp-export-document)



### vk position bottom

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|2|
</details>

#### Description

Vertical alignment to the bottom of cell or row.

#### Used by

[VP SHOW CELL](command-list.md#vp-show-cell)



### vk position center

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Alignment to the center. The alignment will be to the cell, row, or column limit according to the view position indicated: 

*	Vertical view position - cell or row
*	Horizontal view position - cell or column


#### Used by

[VP SHOW CELL](command-list.md#vp-show-cell)



### vk position left

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

Horizontal alignment to the left of the cell or column.

#### Used by

[VP SHOW CELL](command-list.md#vp-show-cell)
 


### vk position nearest

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|3|
</details>

#### Description

Alignment to the closest limit (top, bottom, left, right, center). The alignment will be to the cell, row, or column limit according to the view position indicated: 

*	Vertical view position (top, center, bottom) - cell or row 
*	Horizontal view position (left, center, right) - cell or column

#### Used by

[VP SHOW CELL](command-list.md#vp-show-cell)



### vk position right 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|2|
</details>

#### Description

Horizontal alignment to the right of the cell or column.

#### Used by

[VP SHOW CELL](command-list.md#vp-show-cell)



### vk position top 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

Vertical alignment to the top of cell or row.

#### Used by

[VP SHOW CELL](command-list.md#vp-show-cell)



### vk print centering both 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|3|
</details>

#### Description

Printing is centered both horizontally and vertically on the page.

#### Used by

[VP Get print info](command-list.md#vp-get-print-info) - [VP PRINT](command-list.md#vp-print) - [VP SET PRINT INFO](command-list.md#vp-set-print-info)



### vk print centering horizontal

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Printing is centered horizontally on the page.


#### Used by

[VP Get print info](command-list.md#vp-get-print-info) - [VP PRINT](command-list.md#vp-print) - [VP SET PRINT INFO](command-list.md#vp-set-print-info)



### vk print centering none

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

Printing is not centered. (default)


#### Used by

[VP Get print info](command-list.md#vp-get-print-info) - [VP PRINT](command-list.md#vp-print) - [VP SET PRINT INFO](command-list.md#vp-set-print-info)



### vk print centering vertical

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|2|
</details>

#### Description

Printing is centered vertically on the page.

#### Used by

[VP Get print info](command-list.md#vp-get-print-info) - [VP PRINT](command-list.md#vp-print) - [VP SET PRINT INFO](command-list.md#vp-set-print-info)



### vk print page order auto

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

Printing order is determined automatically. (default)

#### Used by

[VP Get print info](command-list.md#vp-get-print-info) - [VP PRINT](command-list.md#vp-print) - [VP SET PRINT INFO](command-list.md#vp-set-print-info)



### vk print page order down then over

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Pages are printed in descending order, then across.

#### Used by

[VP Get print info](command-list.md#vp-get-print-info) - [VP PRINT](command-list.md#vp-print) - [VP SET PRINT INFO](command-list.md#vp-set-print-info)



### vk print page order over then down

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|2|
</details>

#### Description

Pages are printed across, then descending order.

#### Used by

[VP Get print info](command-list.md#vp-get-print-info) - [VP PRINT](command-list.md#vp-print) - [VP SET PRINT INFO](command-list.md#vp-set-print-info)



### vk print page orientation landscape

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|2|
</details>

#### Description

Landscape orientation.

#### Used by

[VP Get print info](command-list.md#vp-get-print-info) - [VP PRINT](command-list.md#vp-print) - [VP SET PRINT INFO](command-list.md#vp-set-print-info)



### vk print page orientation portrait

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Portrait orientation. (default)

#### Used by

[VP Get print info](command-list.md#vp-get-print-info) - [VP PRINT](command-list.md#vp-print) - [VP SET PRINT INFO](command-list.md#vp-set-print-info)



### vk print visibility hide 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

The header is not visible.

#### Used by

[VP Get print info](command-list.md#vp-get-print-info) - [VP PRINT](command-list.md#vp-print) - [VP SET PRINT INFO](command-list.md#vp-set-print-info)



### vk print visibility inherit 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

Inherits the settings from the sheet (default)

#### Used by

[VP Get print info](command-list.md#vp-get-print-info) - [VP PRINT](command-list.md#vp-print) - [VP SET PRINT INFO](command-list.md#vp-set-print-info)



### vk print visibility show 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|2|
</details>

#### Description

The header is visible on every page.

#### Used by

[VP Get print info](command-list.md#vp-get-print-info) - [VP PRINT](command-list.md#vp-print) - [VP SET PRINT INFO](command-list.md#vp-set-print-info)



### vk print visibility show once 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|3|
</details>

#### Description

The header is visible once.

#### Used by

[VP Get print info](command-list.md#vp-get-print-info) - [VP PRINT](command-list.md#vp-print) - [VP SET PRINT INFO](command-list.md#vp-set-print-info)

## T

### vk text decoration double underline

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|8|
</details>

#### Description

Displays a double line below text.



### vk text decoration line through

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|2|
</details>

#### Description

Displays a line through text.



### vk text decoration none 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

Displays text without decoration.



### vk text decoration overline 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|4|
</details>

#### Description

Displays a line above text.



### vk text decoration underline

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Displays a single line below text.

## V

### vk vertical align bottom 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|2|
</details>

#### Description

Cell contents are vertically aligned to the bottom.



### vk vertical align bottom 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|1|
</details>

#### Description

Cell contents are vertically aligned to the center.



### vk vertical align bottom 

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|0|
</details>

#### Description

Cell contents are vertically aligned to the top.

## W

### vk workbook	

<details><summary>Type/Value</summary>
|Type|Value|
|---|---|
|longint|-2|
</details>

#### Description

Designates the entire workbook of the 4D View Pro area.

#### Used by
[VP ADD FORMULA NAME](command-list.md#vp-add-formula-name) - [VP ADD RANGE NAME](command-list.md#vp-add-range-name) - [VP ADD STYLESHEET](command-list.md#vp-add-stylesheet) - [VP Get formula by name](command-list.md#vp-get-formula-by-name) - [VP Get names](command-list.md#vp-get-names) - [VP Get stylesheet](command-list.md#vp-get-stylesheet) - [VP Get stylesheets](command-list.md#vp-get-stylesheets) - [VP Name](command-list.md#vp-name) - [VP REMOVE NAME](command-list.md#vp-remove-name) - [VP REMOVE STYLESHEET](command-list.md#vp-remove-stylesheet)




