---
id: get-restore-information
title: GET RESTORE INFORMATION
displayed_sidebar: docs
---


<!-- REF #_command_.GET RESTORE INFORMATION.Syntax-->**GET RESTORE INFORMATION** ( selector ; info1 ; info2 )<!-- END REF-->


<!-- REF #_command_.GET RESTORE INFORMATION.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|selector|Longint|->|Type of information to get|
|info1|Longint, Date|<-|Value 1 of the selector|
|info2|String, Time|<-|Value 2 of the selector|
<!-- END REF -->


#### Description




The **GET RESTORE INFORMATION** command gets information related to the last automatic database restore. 

Pass the type of information to get in `selector`. You can use one of the following constants:


| Constant            | Type    | Value |
|---------------------|---------|-------|
| Last restore date   | Longint | 0     |
| Last restore status | Longint | 2     |

The type and content of the `info1` and `info2` parameters depend on the value of `selector`.

* If `selector` = 0 (*Last Restore Date*), `info1` returns the date and `info2` the time of the last automatic database restore.

* If `selector` = 2 (*Last Restore Status*), `info1` returns the number and `info2` the text of the status of the last automatic database restore. 

**Note:** This command does not take manual database restores into account.


