---
id: previous-record
title: PREVIOUS RECORD
slug: /commands/previous-record
displayed_sidebar: docs
---

<!--REF #_command_.PREVIOUS RECORD.Syntax-->**PREVIOUS RECORD** ({ *aTable* : Table })<!-- END REF-->
<!--REF #_command_.PREVIOUS RECORD.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to move to the previous selected record, or Default table, if omitted |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.PREVIOUS RECORD.Summary-->**PREVIOUS RECORD** moves the current record pointer to the previous record in the current selection of *aTable* for the current process.<!-- END REF--> If the current selection is empty, or if [Before selection](before-selection) or [End selection](end-selection) is TRUE, **PREVIOUS RECORD** has no effect.

If **PREVIOUS RECORD** moves the current record pointer before the current selection, [End selection](end-selection) returns TRUE, and there is no current record. If [End selection](end-selection) returns TRUE, use [FIRST RECORD](first-record), [LAST RECORD](last-record) or [GOTO SELECTED RECORD](goto-selected-record) to move the current record pointer back into the current selection.

## See also 

[Before selection](before-selection)  
[End selection](end-selection)  
[FIRST RECORD](first-record)  
[LAST RECORD](last-record)  
[NEXT RECORD](next-record)  

## Properties

|  |  |
| --- | --- |
| Command number | 110 |
| Thread safe | yes |
| Changes current record ||


