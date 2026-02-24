---
id: set-query-limit
title: SET QUERY LIMIT
slug: /commands/set-query-limit
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY LIMIT.Syntax-->**SET QUERY LIMIT** ( *limit* : Integer )<!-- END REF-->
<!--REF #_command_.SET QUERY LIMIT.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| limit | Integer | &#8594;  | Number of records, or 0 for no limit |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.SET QUERY LIMIT.Summary-->**SET QUERY LIMIT** allows you to tell 4D to stop any subsequent query for the current process as soon as at least the number of records you pass in *limit* has been found.<!-- END REF--> 

For example, if you pass *limit* equal to 1, any subsequent query will stop browsing an index or the data file as soon as one record that matches the query conditions has been found.

To restore queries with no limit, call **SET QUERY LIMIT** again with *limit* equal to 0.

**Warning:** **SET QUERY LIMIT** affects all the subsequent queries made within the current process. REMEMBER to always counterbalance a call to **SET QUERY LIMIT**(limit) (where *limit>0*) with a call to **SET QUERY LIMIT**(0) in order to restore queries with no limit.

**SET QUERY LIMIT** changes the behavior of the query commands:

* [QUERY](query)
* [QUERY SELECTION](query-selection)
* [QUERY BY EXAMPLE](query-by-example)
* [QUERY BY FORMULA](query-by-formula)
* [QUERY BY SQL](query-by-sql)
* [QUERY SELECTION BY FORMULA](query-selection-by-formula)
* [QUERY SELECTION WITH ARRAY](query-selection-with-array)
* [QUERY WITH ARRAY](query-with-array)
* [QUERY BY ATTRIBUTE](query-by-attribute)
* [QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute)

On the other hand, **SET QUERY LIMIT** does not affect the other commands that may change the current selection of a table, such as [ALL RECORDS](all-records), [RELATE MANY](relate-many), and so on.

## Example 1 

To perform a query corresponding to the request “...give me any ten customers whose gross sales are greater than $1 M...”, you would write:

```4d
 SET QUERY LIMIT(10)
 QUERY([Customers];[Customers]Gross sales>1000000)
 SET QUERY LIMIT(0)
```

## Example 2 

See the second example for the [SET QUERY DESTINATION](set-query-destination) command.

## See also 

[Get query limit](get-query-limit)  
[QUERY](query)  
[QUERY BY EXAMPLE](query-by-example)  
[QUERY BY FORMULA](query-by-formula)  
[QUERY BY SQL](query-by-sql)  
[QUERY SELECTION](query-selection)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula)  
[QUERY WITH ARRAY](query-with-array)  
[SET QUERY DESTINATION](set-query-destination)  

## Properties

|  |  |
| --- | --- |
| Command number | 395 |
| Thread safe | yes |


