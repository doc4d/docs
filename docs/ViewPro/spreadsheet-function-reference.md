---
id: spreadsheet-function-reference
title: Spreadsheet Function Reference
---

A large number of functions are available in 4D View Pro. This section describes a subset of essential functions. The complete list of functions supported by 4D View Pro can be found in the [Spreadsheets documentation](http://help.grapecity.com/spread/SpreadSheets11/webframe.html#FormulaFunctions.html).

>If a 4D project method in a formula has the same name as a SpreadJS function, 4D View Pro will use the function and the project method will not be called.  

## ABS

**ABS**( *value* : Real )<br>**ABS**( *value* : Expression )


|Parameter|Type||Description|
|---|---|----|---|
|value|Real|->|Number whose absolute value is returned|  

The `ABS` function calculates the absolute value(s) of the specified *value*. If *value* is negative, a positive value will be returned. It accepts numeric data as values or expressions and returns numeric data.

**Example**

```4d
ABS(-6) //result:= 6

ABS(16-26) //result:= 10

ABS(6) //result:= 6
```


---


## ACOS

**ACOS**( *value* : Real )


|Parameter|Type||Description|
|---|---|----|---|
|value|Real|->|Angle whose arccosine is returned. Must be between –1 and +1|  

The `ACOS` function calculates the angle of the arccosine specified in *value*. *value* must be included in the range -1 to +1. 

The returned angle is in radians between 0 and PI . To convert the result to degrees, multiply the result by 180/PI.

**Example** 

```4d
ACOS(0.5) //result:= 1.0471975512
```


---


## AND

**AND**( *logicalValue* : Boolean {, *logicalValue* : Boolean , ... , *logicalValueN* : Boolean } )<br>**AND**( *logicalValue* : Number {, *logicalValue* : Number , ... , *logicalValueN* : Number } )<br>**AND**( *logicalValue* : Expression {, *logicalValue* : Expression , ... , *logicalValueN* : Expression } )


|Parameter|Type||Description|
|---|---|----|---|
|logicalValue |Boolean, Number, Expression	|->|Value(s) to evaluate|  

The `AND` function returns **TRUE** if all arguments are true; otherwise, it returns **FALSE** if at least one argument is false.

It accepts boolean values as numeric (0 or 1) or logical expressions (**TRUE** or **FALSE**) for up to 255 arguments. You can also specify a single array instead of listing the values separately, or up to 255 arrays. You can also specify the *logicalValue* as an expression.


**Example** 

```4d
AND(D12,E12)  //True if D12 and E12 cell values are true or 1, False otherwise

AND(D2:D12)  //True if D12 to D12 cell values are true or 1, False otherwise

AND(5+3=8,5+1=6) //TRUE

AND(1,TRUE) //TRUE
```


---


## ASIN

**ASIN**( *value* : Real )


|Parameter|Type||Description|
|---|---|----|---|
|value  |Real|->|Sine of angle (must be between –1 and +1)|  

The `ASIN` function calculates the arcsine, the angle whose sine is specified in *value*. It accepts and returns numeric data.

In *value*, specify the sine of the angle. The sine must be a value between -1 and +1.

The angle is returned in radians between -PI/2 and PI/2. To convert the result to degrees, multiply it by 180/PI.


**Example** 

```4d
ASIN(0.5) //0.5235987756
```


---


## ATAN

**ATAN**( *value* : Real )


|Parameter|Type||Description|
|---|---|----|---|
|value  |Real|->|Tangent of an angle  (must be between –1 and +1)|  

The `ATAN` function calculates the arctangent, i.e. the angle whose tangent is specified in *value*. It accepts and returns numeric data.

In *value*, specify the tangent of the angle to return. It must be between -1 and +1.

The angle is returned in radians between -PI/2 and PI/2. To convert the result to degrees, multiply the result by 180/PI.


**Example** 

```4d
ATAN(1) //result:= 0.7853981634
```

   
---
   

## AVERAGE

**AVERAGE**( *value* : Real )<br>**AVERAGE**( *value* : Array )


|Parameter|Type||Description|
|---|---|----|---|
|value  |Real, Array|->|Number(s) whose mean is to be calculated|  

The `AVERAGE` function calculates the average of value.

In *value*, you can pass:

*	real or longint values,
*	a range or several ranges of cells.

Up to 255 arguments may be included.


**Example** 

```4d
ATAN(1) //result:= 0.7853981634
```  

   
---

   
## COLUMNLETTER

**COLUMNLETTER**( *reference* : CellRef )


|Parameter|Type||Description|
|---|---|----|---|
|reference  |CellRef|->|A cell or a range of cells|  

The `COLUMNLETTER` function returns the column letter of *reference*.

*reference* can be a cell or a range of cells. If the *reference* argument is omitted, the default argument is the reference of the cell in which the `COLUMNLETTER` function is placed.


**Example** 

```4d
ATAN(1) //result:= 0.7853981634
```  

   
---

## COS

**COS**( *value* : Real  )


|Parameter|Type||Description|
|---|---|----|---|
|value   |Real |->|Angle whose cosine is returned|  

The `COS` function returns the cosine of the angle specified in *value*. It accepts and returns numeric data.

In *value*, pass any real number (an angle) for which to return the cosine. It must be expressed in radians. If the angle is in degrees, multiply it by PI/180 to convert it to radians.


**Example** 

```4d
COS(45*PI()/180) //0.7071067812
```  

   
---

## COUNTA

**COUNTA**( *value* : Real {, *value2* : Real , ... , *valueN* : Real} )<br>**COUNTA**( *value* : Array {, *value2* : Array , ... , *valueN* : Array} )


|Parameter|Type||Description|
|---|---|----|---|
|value   |Real, Array |->|Cells or cell range to be counted|  

The `COUNTA` function counts the number of cells specified in *value* that are not empty (i.e. cells that contain numbers, text, or logical values). It accepts cell references and returns numeric data.

In *value*, you can pass up to 255 separate cells or a single array of values.


**Example** 

```4d
COUNTA(B2,D2,E4,E5,E6)

COUNTA(A1:G5)
```  
   

---

## EXP

**EXP**( *value* : Number )

|Parameter|Type||Description|
|---|---|----|---|
|value   |Number |->|Number to evaluate|  

The `EXP` function returns the natural log base (e = 2.71828...) raised to the power of the number specified in *value*. It accepts and returns numeric data.

This function is the inverse of [LN](#ln), so EXP(LN(x)) results in x.


**Example** 

```4d
EXP(B3)

EXP(1)  //2.17828...
```  
      

---

## FALSE

**FALSE()**

|Parameter|Type||Description|
|---|---|----|---|
|   | ||Does not require any parameters|  

The `FALSE` function returns the logical **FALSE** value (0).


**Example** 

```4d
NOT(FALSE) //TRUE
```     

   
---

## FINDCELL

**FINDCELL**(*toFind* : CellRef, *searchRange* : CellRef)

|Parameter|Type||Description|
|---|---|----|---|
|toFind   |CellRef |->|Value to find|  
|searchRange   |CellRef |->|Cells to search|  
 

The `FINDCELL` function searches for the *toFind* value in the *searchRange* range of cells and returns the reference of the cell in which it was found. This reference cannot be displayed, but can be used by other spreadsheet functions that accept a cell reference (*CellRef*) as parameter. 

*toFind* must contain the reference of a cell that actually contains the value to find.


**Example** 

Assuming cell C3 contains 10:

```4d
FINDCELL(C3,A1:B9) //returns 10 if the value is actually found in the A1:B9 cell range, otherwise it returns an error.
```     


---

## FV

**FINDCELL**(*i* : Number , *n* : Number , *m* : Number {, *f* : Number} )

|Parameter|Type||Description|
|---|---|----|---|
|i   |Number |->|The interest rate for a period|  
|n   |Number |->|The number of periods|  
|m   |Number |->|For compound interest: the monthly payment at the end of each period (use a negative value).<p>For single interest: pass an empty parameter (see example)	|  
|f   |Number |->|For single interest rate: the final value at the end of a period (use a negative value)|   

The `FV` function calculates:

*	the final value of a sum using compound interest, or
*	the final value of a sum using single interest

To calculate the value acquired during an investment, if the monthly payments are paid at the end of the period, pass the m parameter and omit the f parameter. Here is the formula for this calculation:

![](assets/en/ViewPro/func_FV1.PNG)

To calculate the final value of a sum using single interest, pass the f parameter and pass an empty parameter (,,) for the m placeholder. Here is the formula for this calculation:

![](assets/en/ViewPro/func_FV2.PNG)


**Example 1**

Compound interest: you plan on depositing €1,000 each month in a savings account, which earns you 12% annual interest, for 35 months.

```4d
FV(1%,35,-1000) //41660.275603126
```        

**Example 2**

Single interest rates: same type of scenario as above.

```4d
FV(12%,35,,-35*1000) //1847986.69
```           


---

## IF

**IF**(*valueTest* : Expression , *valueTrue* : Expression , *valueFalse* : Expression )

|Parameter|Type||Description|
|---|---|----|---|
|valueTest|Expression |->|Value or expression to evaluate|  
|valueTrue|Expression |->|Value to return if the test evaluates to true|  
|valueFalse|Expression |->|Value to return if the test evaluates to false or 0|    

The `IF` function performs a comparison and returns one of two provided values based on that comparison. It accepts numeric (boolean) data and returns any data type.

The value of *valueTest* is evaluated. It must be or evaluate to numeric data, where non-zero values indicate **TRUE**, and a value of zero indicates **FALSE**. It may contain one of the relational operators: greater than (>), less than (<), equal to (=), or not equal to (<>). If *valueTest* is:

*	not zero (TRUE), then *valueTrue* is returned.
*	zero (FALSE), then *valueFalse* is returned.


**Example** 

You want to evaluate B1, giving the value of sales. 

```4d
IF(B1<200,"Declining result","Good result") //"Good result" is written if B1>200
```        
      

---

## INDIRECT

**INDIRECT**(*cell* : CellRef )<br>**INDIRECT**(*cellRange* : CellRef )

|Parameter|Type||Description|
|---|---|----|---|
|cell &#124; cellRange|CellRef|->|Reference to a cell, a name defined as a reference, or a text string reference to a cell or to a range|  

The `INDIRECT` function returns the contents of *cell*. The *cell* parameter (mandatory) can be any cell reference, including absolute reference such as $A$1 or a character string. Use `INDIRECT` when you want to change the reference to a cell within a formula without changing the formula itself.

The `INDIRECT` function can also return the internal reference of a range of cells (reference cannot be displayed but can be used by other spreadsheet functions).


**Example** 

```4d
INDIRECT("A1") //returns the contents of cell A1
```     


```4d
COLUMN(INDIRECT("A1:A3")) //column 1
ROW(INDIRECT("A1:F1")) //row 1
```     

   
---

## ISBLANK

**ISBLANK**(*value* : CellRef )<br>**ISBLANK**(*value* : Expression )<br>**ISBLANK**(*value* : Number )<br>**ISBLANK**(*value* : Text )


|Parameter|Type||Description|
|---|---|----|---|
|value|CellRef, Expression, Number, Text|->|Value to evaluate|  

The `ISBLANK` function tests if the contents of a cell, a number, a text, or any expression, is empty. This function returns **TRUE** if the value refers to an empty cell or to no data.

>Cells containing an empty string ("") are considered as blank.


**Example** 

```4d
IF(ISBLANK(A1);”Error”;0) //"Error" if cell A1 is empty

ISBLANK(B1)

ISBLANK(A4-52)

ISBLANK(4) //FALSE
```     
   

---

## LEN

**LEN**(*value* : Text )<br>**LEN**(*value* : CellRef )


|Parameter|Type||Description|
|---|---|----|---|
|value|Text, CellRef|->|Text whose character length to count|  

The `LEN` function returns the number of characters in the *value* string.

In *value*, pass the text whose length you want to find. It must be a string or a cell reference to a string value.

>Spaces count as characters.


**Example** 

```4d
LEN("4D, Inc.") //8
```        

   
---

## LN

**LN**(*value* : Number )


|Parameter|Type||Description|
|---|---|----|---|
|value|Number|->|Number greater than 0 to evaluate|  

The `LN` function returns the natural logarithm of *value*. It accepts and returns numeric data.

In *value*, pass a positive number (greater than zero).

>`LN` is the inverse of `EXP`, so LN(EXP(x)) is x.


**Example** 

```4d
LN(10) //2.30258509...

LN(EXP(1)) //1
```   


---

## LOOKUP

**LOOKUP**(*toFind* : CellRef ,*intervalToSearch* : CellRef, *returnInterval* : CellRef )<br>**LOOKUP**(*toFind* : Text ,*intervalToSearch* : CellRef, *returnInterval* : CellRef )<br>**LOOKUP**(*toFind* : Number ,*intervalToSearch* : CellRef, *returnInterval* : CellRef )<br>**LOOKUP**(*toFind* : Boolean ,*intervalToSearch* : CellRef, *returnInterval* : CellRef )


|Parameter|Type||Description|
|---|---|----|---|
|toFind|CellRef, Text, Number, Boolean|->|Value to find|  
|intervalToSearch|CellRef|->|Cell range to search| 
|returnInterval|CellRef|->|Cell range to find corresponding value| 

The `LOOKUP` function searches for the value *toFind* in the *intervalToSearch* cell range and returns the corresponding value used in the *returnInterval* range.

*toFind* must contain the reference of a cell that actually contains the value to find.

*intervalToSearch* must be sorted in ascending order since LOOKUP uses the first value higher or equal to the value set as *toFind*.

If *toFind* cannot be found, it matches the largest value in *intervalToSearch* that is less than or equal to *toFind*.


**Example** 

![](assets/en/ViewPro/func_lookup.PNG)

"3", located in the A8 cell, is the value to find. B1:B6 is the interval to search. C1:C6 is the return interval. The B3 cell contains the value to find. The corresponding value in the return interval is in the C3 cell, that is, "697".



---

## MAX

**MAX**(*value* : Real {, *value2* : Real, ... , *valueN* : Real} )<br>**MAX**(*value* : Array {, *value2* : Array, ... , *valueN* : Array} )


|Parameter|Type||Description|
|---|---|----|---|
|value|Real, Array|->|Number or numeric array to evaluate|  

The `MAX` function returns the greatest (maximum) value of *value*. It accepts and returns numeric data.

In *value*, pass the values to evaluate. Each argument can be a number or an array of numbers. You can use a single array (cell range) or multiple arrays (cell ranges).

If an array or reference contains text, logical values, or empty cells, `MAX` ignores those values; however, cells with the value zero are included in calculations.


**Example** 

```4d
MAX(A1,B2,C3,D4,E5)

MAX(A1:A9)

MAX(2,15,12,3,7,19,4) //19
```   
   

---

## MID

**MID**(*value* : Text , *startFrom*  : Number {, *numChars* : Number } )<br>**MID**(*value* : CellRef , *startFrom*  : Number {, *numChars* : Number } )<br>**MID**(*value* : Expression , *startFrom*  : Number {, *numChars* : Number } )


|Parameter|Type||Description|
|---|---|----|---|
|value|Text, CellRef, Expression|->|Text containing the characters to extract|  
|startFrom |Number|->|Number designating the first character to extract in text| 
|numChars |Number|->|Number of characters to return| 

The `MID` function returns the requested number of characters from *value* starting at the position specified in *startFrom*. It accepts text data for *value* and numeric data for *startFrom* and *numChars*. It returns text data.

In *value*, pass the text string containing the characters you want to extract. It can be a string, a formula that returns a string, or a reference to a cell containing a string.

In *startFrom*, pass a number representing the first character you want to extract in text, with the first character in the text having a value of one (1); if not an integer, the number is truncated. It can be a string, a formula that returns a string, or a reference to a cell containing a string. If *startFrom*:

*	is greater than the length of *value*, an empty string (" ") is returned
*	is less than the length of *value*, but *startFrom* + *numChars* exceeds the length of *value*, the characters up to the end of text are returned.

In *numChars*, pass the number of characters to return from *value*; if an integer is not specified, the number is truncated.


**Example** 

```4d
MID(B17,5,8)

MID("hello world",7,20) //"world"
```   
      

---

## MIN

**MIN**(*value* : Real {, *value2* : Real  , ... , *valueN* : Real } )<br>**MIN**(*value* : Array {, *value2* : Real  , ... , *valueN* : Real } )


|Parameter|Type||Description|
|---|---|----|---|
|value|Real, Array|->|Number or numeric array to evaluate|  

The `MIN` function returns the lowest (minimum) value of *value*. It accepts and returns numeric data.

In *value*, pass the values to evaluate. Each argument can be a number, or an array of numbers (a single array (cell range) or multiple arrays (cell ranges)).

If an array or reference contains text, logical values, or empty cells, `MIN` ignores those values; however, cells with the value zero are included in calculations.

**Example** 

```4d
MIN(2,15,12,3,7,19,4) //2
```      

   
---

## NOT

**NOT**(*logicalValue* : Boolean )<br>**NOT**(*logicalValue* : Number )<br>**NOT**(*logicalValue* : Expression )


|Parameter|Type||Description|
|---|---|----|---|
|logicalValue |Boolean, Number, Expression|->|Value to evaluate|  

The `NOT` function reverses the logical value of its parameter.

*logicalValue* can be a boolean or a number. If its value is zero, then the function returns **TRUE**. If it is a value other than zero, then the function returns **FALSE**.

**Example** 

```4d
NOT(A3)

NOT(D5>100)

NOT(0) //TRUE

NOT(TRUE) //FALSE

NOT(12) //FALSE
```     
   

---

## NOW

**NOW()**


|Parameter|Type||Description|
|---|---|----|---|
| |||Does not require any parameters|  

The `NOW` function returns the time of the current date. It returns a `DateTime` object.

This function is updated when the spreadsheet or cell containing the function is recalculated.

**Example** 

If today is Monday 8 January 2018 at 11:25:42:

```4d
NOW() //1/8/2018 11:25:42
```     
   

---

## NPER

**NPER**( *i* : Number, *m* : Number, *p* : Number {, *f* : Number } )


|Parameter|Type||Description|
|---|---|----|---|
|i |Number|->|The interest rate for a period|  
|m |Number|->|The monthly payment paid at the end of the period (use a negative value).<p>For acquired value: pass an empty parameter (see example)| 
|p |Number|->|The current value of the loan| 
|f |Number|->|The future value of the loan (use a negative value)| 

The `NPER` function returns the number of periods needed to reimburse a loan. Two formulas can be used:

*	First formula, when you know the monthly payment:

![](assets/en/ViewPro/func_NPER1.PNG)

*	Second formula, when you know the total payment:

![](assets/en/ViewPro/func_NPER2.PNG)

**Example 1**

You borrowed 6,500 euros with 10.5% annual interest and you reimburse 166.42 euros per month:

```4d
NPER(10.5%/12,-166.42,6500) //48
```        

**Example  2**

You borrowed 3,000 euros with 10.5% annual interest and you know that the total monthly payments will be 5,000 euros:

```4d
NPER(10.5%/12,,3000,-5000) //58
```           


---

## OR

**OR**(*logicalValue* : Boolean {, *logicalValue2* : Boolean , ... , *logicalValueN* : Boolean } )<br>**OR**(*logicalValue* : Array {, *logicalValue2* : Array , ... , *logicalValueN* : Array } )<br>**OR**(*logicalValue* : Expression {, *logicalValue2* : Expression , ... , *logicalValueN* : Expression } )


|Parameter|Type||Description|
|---|---|----|---|
|logicalValue  |Boolean, Array, Expression|->|Value(s) to evaluate|  

The `OR` function returns **False** if the evaluation of all parameters is false. It returns **True** if the evaluation of at least one the parameters is true.

The function accepts boolean values as numeric (0 or 1) or logical expressions (**TRUE** or **FALSE**) for up to 255 arguments. You can also specify a single array instead of listing the values separately, or up to 255 arrays. You can also specify the *logicalValue* as an expression.

**Example** 

```4d
OR(B3,B6,B9)

OR(D2:D12)

OR(TRUE,FALSE,FALSE) //TRUE

OR(TRUE()) //TRUE

OR(FALSE(),FALSE()) //FALSE

OR(1+1=1,2+2=5) //FALSE

OR(5+3=8,5+4=12) //TRUE
```        
         

---

## PI

**PI()**


|Parameter|Type||Description|
|---|---|----|---|
|  | ||Does not require any parameters|  

The `PI` function returns the value of Pi as 3.1415926536.


---

## PMT

**PMT**(*i* : Number , *n* : Number , *p* : Number )


|Parameter|Type||Description|
|---|---|----|---|
|i  |Number|->|The interest rate for a period|  
|n  |Number|->|The number of periods| 
|p  |Number|->|The current value of the loan (use a negative value)	| 

The `PMT` function returns the value of monthly loan payments.

Here is the formula for PMT:


![](assets/en/ViewPro/func_PMT.PNG)

**Example** 

You borrowed 6,500 euros over 48 months with 10.5% interest:

```4d
PMT(10.5%/12,48,-6500) //166.42
```        
            

---

## PV

**PV**(*i* : Number , *n* : Number , *m* : Number  {, *f* : Number }  )


|Parameter|Type||Description|
|---|---|----|---|
|i  |Number|->|The interest rate for a period|  
|n  |Number|->|The number of periods| 
|m  |Number|->|For compound interest: the monthly payment at the end of each period (use a negative value).<p>For single interest: pass an empty parameter (see example)| 
|f  |Number|->|For single interest rate: the final value at the end of a period (use a negative value)	| 

The `PV` function calculates:

*	the current value of a sum using the compound interest, or
*	the current value of a sum using single interest rates.

To calculate the current value of a sum using the compound interest, pass the *m* parameter and omit the *f* parameter. Here is the formula for this calculation:

![](assets/en/ViewPro/func_PV1.PNG)

To calculate the current value of a sum using single interest rates, pass the *f* parameter and pass an empty parameter (,,) for the *m* placeholder. Here is the formula for this calculation:

![](assets/en/ViewPro/func_PV2.PNG)

**Example 1**

**Compound interest**: you have a loan with an 12% annual interest rate (thus 1% per month) over 5 months with a monthly payment of €1,000.

```4d
PV(1%,5,-1000) //4853,4312393251
```           

**Example 2**

**Single interest rates**: you have a loan with an 12% annual interest rate (thus 1% per month) over 5 months with a monthly payment of €1,000.

>Pay attention to the double ",," inside the syntax.

```4d
PV(1%,5,,-5*1000) //4757,328438033744
```              

   
---

## RAND

**RAND()**


|Parameter|Type||Description|
|---|---|----|---|
| |||Does not require any parameters|  


The `RAND` function returns a random number between 0 and 0,9999999...

**Example**

```4d
RAND()
RAND()*100

INT(RAND()*100)
```           


---

## RATE

**RATE**(*n* : Number , *m* : Number , *p* : Number  {, *f* : Number }  )


|Parameter|Type||Description|
|---|---|----|---|
|n  |Number|->|The number of periods|  
|m  |Number|->|The monthly payment paid at the end of the period (use a negative number).<p>For future value: pass an empty parameter (see example)| 
|p  |Number|->|The current value of the loan| 
|f  |Number|->|The future value (use a negative number)| 

The `RATE` function returns the interest rate corresponding to the values passed in parameters. Two formulas can be used:

*	First formula, when you know the monthly payment paid at the end of the period:

![](assets/en/ViewPro/func_RATE1.PNG)

*	Second formula, when you know the acquired value:

![](assets/en/ViewPro/func_RATE2.PNG)


**Example 1**

You borrowed 3,000 euros and your monthly payments are 1,000 euros over 5 months:

```4d
RATE(5,-1000,3000) //0.19
```           

**Example 2**

You borrowed 2,800 euros and the total paid value is 6,000 euros over 5 months:

```4d
RATE(5,,2800,-6000) //0.16
```              


---

## ROUND

**ROUND**(*value* : Number , *places* : Number )


|Parameter|Type||Description|
|---|---|----|---|
|value |Number|->|Number to round|  
|places |Number|->|Number of decimal places| 

The `ROUND` function rounds the specified *value* to the nearest number, using the specified number of decimal places.

Use the *value* parameter to specify the number to round. You can pass any numeric data (or cell reference containing numeric data).

>The result may be rounded up or rounded down.

Use the *places* parameter to specify the number of decimal places. The places argument has these rules:

*	Set places to a value >0 to round to the specified number of decimal places.
*	Set places to zero to round to the nearest whole number.
*	Set places to a value <0 to round the value left of the decimal to the nearest ten, hundred, etc.


**Example** 

```4d
ROUND(A3,-2)

ROUND(C4,B2)

ROUND(PI(),5) //3.14159

ROUND(29.2,-2) //0 because 29.2 is closer to 0 than to 100.

ROUND(-1.963,0) //-2
```           


---

## ROW

**ROW**( { *reference* : CellRef } )


|Parameter|Type||Description|
|---|---|----|---|
|reference  |CellRef|->|A cell or a range of cells|  

The `ROW` function returns the row number of *reference*.

*reference* can be a cell or a range of cells. If the *reference* argument is omitted, the default argument is the reference of the cell in which the `ROW` function is placed.


**Example** 

```4d
ROW(B2) // 2

ROW(B1:B5) //1
```       

   

---

## RUNTIME\_CURRENT\_TIME 

**RUNTIME\_CURRENT\_TIME**


|Parameter|Type||Description|
|---|---|----|---|
|  ||Does not require any parameters| 

>**Compatibility Note**: This function is intended to be used when converting 4D View documents to 4D View Pro documents. It other contexts, it is useless.

The `RUNTIME_CURRENT_TIME` function returns the current time from the system clock as a standard JS datetime object, with the date part containing "30/12/1989". It internally calls the `Current time` 4D command.
        

---

## RUNTIME\_DATE

**RUNTIME\_DATE**( *dateString*  : Text )


|Parameter|Type||Description|
|---|---|----|---|
|dateString   |Text|->|Date in short format of current language|  

>**Compatibility**  
This function is intended to be used when converting 4D View documents to 4D View Pro documents. It other contexts, it is useless.

The `RUNTIME_DATE` function returns *dateString* as a standard js datetime object, with the hour part at 00:00:00. This function internally calls the 4D `Date` command.

*dateString* must be a string containing a date value in "short" format of the current language (culture).

   
---

## RUNTIME\_STRING

**RUNTIME\_STRING**( *expression* : Expression; *format* : Text )<br>**RUNTIME\_STRING**( *expression* : Expression; *format* : Number )


|Parameter|Type||Description|
|---|---|----|---|
|expression   |Text|->|Expression for which to return the string form (can be number, datetime, string, boolean)|  
|format   |String, Number|->|Display format|  

>**Compatibility**  
This function is intended to be used when converting 4D View documents to 4D View Pro documents. It other contexts, it is useless.

The `RUNTIME_STRING` function returns *expression* as a string with the defined *format*. It internally calls the 4D `String` command; it takes the same parameters and returns the same result.
  

---

## RUNTIME\_TIME

**RUNTIME\_TIME**( *timeString*  : Text )


|Parameter|Type||Description|
|---|---|----|---|
|timeString    |Text|->|Time string|  
 

>**Compatibility**  
This function is intended to be used when converting 4D View documents to 4D View Pro documents. It other contexts, it is useless.

The `RUNTIME_TIME` function returns *timeString* as a standard js datetime object, with the date part containing "30/12/1989". This function internally calls the 4D `Time` command.

   
---

## RUNTIME\_VIEW\_STRING

**RUNTIME\_VIEW\_STRING**( *value*  : Number; *format* : Number )<br>**RUNTIME\_VIEW\_STRING**( *value*  : Date; *format* : Number )<br>**RUNTIME\_VIEW\_STRING**( *value*  : Time; *format* : Number )


|Parameter|Type||Description|
|---|---|----|---|
|value    |Text|->|Number or date or time to format as string|  
|format   |String, Number|->|Format number|   

>**Compatibility**  
This function is intended to be used when converting 4D View documents to 4D View Pro documents. It other contexts, it is useless.

The `RUNTIME_VIEW_STRING` function returns *value* as a string formatted according to *format*. It provides the same feature as the 4D View `String` function.  

Here are the values for the format parameter:

*	For numbers:
	
	|format number|	Format|
	|---|---|
	|1|	##0|
	|2|	####0|
	|3|	## ##0,00|
	|4|	## ##0,00 €|
	|5|	## ## ##0,00 €|
	|6|	## ## ##0|
	|7|	##0,00 %|
	|8|	0000|
	|9|	00000000|
	|10| 00 00 00 00|
	|11| ## ##0;(## ##0)|
	|12| ## ##0,00 €;(## ##0,00) €|
	|13| \^\^ \^\^0,00|
	|14| \^\^ \^0,00 €|
	|15| \^\^\^\^\^\^\^0|
	|16| \^\^ \^\^0|
	|17| Positive;Negative;Null|
	|18| ##\_##\_##\_##|

*	For dates: 

	|format number|	Format|
	|---|---|
	|19|short|
	|20|abbreviated|
	|21|long|
	|22|special|
	|23|day, month year|
	|24|abbreviated day, month year|
	|25|day of the week|
	|26|day of the month|
	|27|month|
	|28|month of year|
	|29|year|
	|30|long h:mn AM/PM|
	|31|abbreviated at h:mn AM/PM|
	|32|short at H:MN:SEC|
	|33|month, day year at H:MN AM/PM|
	|34|special and H:MN:SEC|

*	For times:  

	|format number|	Format|
	|---|---|
	|35|h:mn:sec|
	|36|h:mn|
	|37|Hour Minute Second|
	|38|Hour Minute|
	|39|h:mn AM/PM|


---

## SIN

**SIN**( *value* : Real )


|Parameter|Type||Description|
|---|---|----|---|
|value  |Real|->|Angle whose sine is returned|  

The `SIN` function returns the sine of the angle specified in *value*. It accepts and returns numeric data.

In *value*, pass any real number (an angle) for which to return the sine. It must be expressed in radians. If the angle is in degrees, multiply it by PI/180 to convert it to radians.


**Example** 

```4d
SIN(B4)

SIN(30*PI()/180) //0.5
```       
   

---

## SQRT

**SQRT**( *value* : Number )


|Parameter|Type||Description|
|---|---|----|---|
|value  |Number|->|Number >= 0 to get the square root|  

The `SQRT` function returns the positive square root of the specified *value*.

*value* must be a positive number (or 0), otherwise an error is returned.


**Example** 

```4d
SQRT(B4)

SQRT(256) //16
```          

   
---

## STDEV.P

**STDEV.P**( *value* : Number {, *value2*  : Number, ... , *valueN*  : Number} )<br>**STDEV.P**( *value* : CellRef {, *value2*  : CellRef, ... , *valueN*  : CellRef} )


|Parameter|Type||Description|
|---|---|----|---|
|value  |Number, CellRef|->|Values to evaluate|  

The `STDEV.P` function returns the standard deviation for an entire population of numeric values. Standard deviation is a measure of the dispersion of values in relation to the average (average value).

In *value*, *value2*..., pass numeric arguments corresponding to the population. Each argument can be a cell, a cell range, or a number. This function can have up to 255 arguments.

>If your data represents a sample of the population, then compute the standard deviation using the [STDEV](http://help.grapecity.com/spread/SpreadJSWeb/STDEV.html) function.

The `STDEV.P` is calculated using the "biased" or "n" method. The `STDEV.P` function uses the following formula:

![](assets/en/ViewPro/func_STDEVP.PNG)


**Example** 

```4d
STDEV.P(A1,B2,C3,D4,E5,F6)

STDEV.P(A1:A9)

STDEV.P(95,89,73,87,85,76,100,96,96) gives the result 8.8079649700473
```          


---

## SUBSTITUTE

**SUBSTITUTE**( *str* : CellRef ; *toReplace* : Text, *replacement* : Text {; *instance* : Number}  )


|Parameter|Type||Description|
|---|---|----|---|
|str   |CellRef|->|String or reference to a cell containing the string in which you want to replace characters|  
|toReplace  |Text|->|String to replace|  
|replacement  |Text|->|New string to use instead of existing string|  
|instance  |Number|->|Which occurrence of the existing string to replace; otherwise every occurrence is replaced|  


The `SUBSTITUTE` function replaces *toReplace* in the *str* text with *replacement* and returns the edited text.

By default, `SUBSTITUTE` replaces the first occurrence of *toReplace*. Pass *instance* to define which occurrence you want to replace.

If no occurrence of *toReplace* is found, `SUBSTITUTE` returns *str*.


**Example** 

```4d
SUBSTITUTE("Hello You","You","World") //Hello World
```          

   
---

## SUM

**SUM**( *value* : Number {, *value2*  : Number, ... , *valueN*  : Number} )<br>**SUM**( *value* : CellRef {, *value2*  : CellRef, ... , *valueN*  : CellRef} )

|Parameter|Type||Description|
|---|---|----|---|
|value  |Number, CellRef|->|Number(s) to be added together|  


The `SUM` function returns the sum of cells or range of cells.

In *value*, pass the values to evaluate. Each argument can be a number, or an array of numbers (a single array (cell range) or multiple arrays (cell ranges)).

>The + operator provides an auto-conversion for non-numeric values passed by constant and for non-numeric values passed by reference. The `SUM` function provides an auto-conversion for non-numeric values passed by constant but, ignores non-numeric values passed by reference.


**Example** 

```4d
SUM(A1,B7,C11)

SUM(A1:A9)

SUM(A2:A14,B2:B18,D12:D30)

SUM(95,89,73,87,85,76,100,96,96) //797
```  


---

## TAN

**TAN**( *value* : Real )

|Parameter|Type||Description|
|---|---|----|---|
|value  |Real|->|Angle whose tangent is returned|  


The `TAN` function returns the tangent of the angle specified in value. It accepts and returns numeric data.

In *value*, pass any real number (an angle) for which to return the tangent. It must be expressed in radians. If the angle is in degrees, multiply it by PI/180 to convert it to radians.


**Example** 

```4d
TAN(B3)

TAN(45*PI()/180) //1
```  
   

---

## TEXT

**TEXT**( *value* : Number; *format* : Text )<br>**TEXT**( *value* : CellRef; *format* : Text )

|Parameter|Type||Description|
|---|---|----|---|
|value  |Number, CellRef|->|Numeric value to format to text|  
|format   |Text|->|Format to apply to value|  


The `TEXT` function returns a string composed of *value* number formatted according to format.

Pass a numeric data or a reference to a cell that contains numeric data in value and a text argument in *format*.


**Example** 

```4d
TEXT(A1,"$0.00") //$10.00 if A1 contains 10

TEXT(100,"0.00€") //100.00€
```     


---

## TODAY

**TODAY()**

|Parameter|Type||Description|
|---|---|----|---|
|  | ||Does not require any parameters|  


The `TODAY` function  returns the date and time of the current date. It returns a DateTime object.

This function is updated when the spreadsheet or cell containing the function is recalculated.


**Example** 

If the current day is Monday 8 January 2018:

```4d
TODAY() //1/8/2018 0:00:00
```     


---

## TRUE

**TRUE()**

|Parameter|Type||Description|
|---|---|----|---|
|  | ||Does not require any parameters|  

The `TRUE` function returns the logical TRUE value (1).


**Example** 


```4d
TRUE() //TRUE
```     
   

---

## TYPE

**TYPE**( *value* )

|Parameter|Type||Description|
|---|---|----|---|
|value  ||->|Numeric value to format to text|   

The `TYPE` function returns the type of value as a number.

Returned types are listed below:

|Type of value|	Returned number|
|---|---|
|Number|	1|
|DateTime object|	1|
TimeSpan object|	1|
|Text	|2|
|Boolean|	4|
|Error	|16|
|Array	|64|

Use the `TYPE` function when the execution of another function depends on the type of value contained in a specific cell. The `TYPE` function is particularly useful when calling functions that accept different types of data.


**Example** 


```4d
TYPE(G15)

TYPE(42) //1

TYPE("String") //2

TYPE(TRUE) //4
```        

   
---

## VAR.P

**VAR.P**( *value* : Number {; value2 : Number; ... ; valueN : Number } )<br>**VAR.P**( *value* : Array {; value2 : Array; ... ; valueN : Array } )

|Parameter|Type||Description|
|---|---|----|---|
|value  |Number, Array|->|Values to get the variance|   

The `VAR.P` function returns the variance based on the entire population, which uses numeric values.

In *value*, pass the values to evaluate. Each argument can be a number, or an array of numbers (a single array (cell range) or multiple arrays (cell ranges)).

>This function assumes that its arguments are the entire population. If your data represents only a sample of the population, then compute the variance using the [VAR.S](http://help.grapecity.com/spread/SpreadJSWeb/VAR.html) function.

**Example** 


```4d
VAR.P(B3,C4,B2,D10,E5)

VAR.P(A1:A9)

VAR.P(98,85,76,87,92,89,90) //39.265306122449
```       
   

   