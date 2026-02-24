---
id: messages-off
title: MESSAGES OFF
slug: /commands/messages-off
displayed_sidebar: docs
---

<!--REF #_command_.MESSAGES OFF.Syntax-->**MESSAGES OFF**<!-- END REF-->
<!--REF #_command_.MESSAGES OFF.Params-->
<div class="no-index">

| Does not require any parameters |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R4|Modified|
|11 SQL Release 3|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.MESSAGES OFF.Summary-->The MESSAGES OFF and [MESSAGES ON](messages-on) commands turn on and off the progress meters displayed by 4D while executing time-consuming operations.<!-- END REF--> By default, messages are on. 

The following table shows operations that display the progress meter:

| Apply Formula | Quick Report     | Order by     |
| ------------- | ---------------- | ------------ |
| Export Data   | Import Data      | Graph        |
| Query by Form | Query by Formula | Query Editor |

The following table lists the commands that display the progress meter:

[APPLY TO SELECTION](apply-to-selection)  
[Average](average)  
[BUILD APPLICATION](build-application)  
[DISTINCT VALUES](distinct-values)  
[EXPORT DIF](export-dif)  
[EXPORT SYLK](export-sylk)  
[EXPORT TEXT](export-text)  
  
[IMPORT DIF](import-dif)  
[IMPORT SYLK](import-sylk)  
[IMPORT TEXT](import-text)  
[Max](max)  
[Min](min)  
[ORDER BY](order-by)  
[ORDER BY FORMULA](order-by-formula)  
[QR REPORT](qr-report)  
[QUERY](query)  
[QUERY BY FORMULA](query-by-formula)  
[QUERY BY EXAMPLE](query-by-example)  
[QUERY SELECTION](query-selection)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula)  
[REDUCE SELECTION](reduce-selection)  
[RELATE MANY SELECTION](relate-many-selection)  
[RELATE ONE SELECTION](relate-one-selection)  
[SCAN INDEX](scan-index)  
[Sum](sum)

**Note for 4D Server:** Progress message windows are not shown on the server since these operations are automatically listed on the *\_o\_PAGE SETUP* of the administration window. If you want to force these progress windows to be displayed, you must call the [MESSAGES ON](messages-on) command on the server. 

## Example 

The following example turns off the progress meter before doing a sort, and then turns it back on after completing the sort:

```4d
 MESSAGES OFF
 ORDER BY([Addresses];[Addresses]ZIP;>;[Addresses]Name2;>)
 MESSAGES ON
```

## See also 

[MESSAGES ON](messages-on)  

## Properties

|  |  |
| --- | --- |
| Command number | 175 |
| Thread safe | yes |


