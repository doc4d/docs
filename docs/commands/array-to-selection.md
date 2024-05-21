---
id: array-to-selection
title: ARRAY TO SELECTION
---


<!-- REF #_command_.ARRAY TO SELECTION.Syntax-->ARRAY TO SELECTION {( array ; aField {; array2 ; aField2 ; ... ; arrayN ; aFieldN}{; *} )}<!-- END REF-->


<!-- REF #_command_.ARRAY TO SELECTION.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|array|Array|->|Array to copy to the selection|
|aField|Field|<-|Field to receive the array data|
|*|Operator|->|Await execution|
<!-- END REF -->


#### Description


<p>The <strong>ARRAY TO SELECTION</strong> command copies one or more arrays into a selection of records. All fields listed must belong to the same table.</p> <p>If a selection exists at the time of the call, the elements of the array are put into the records, based on the order of the array and the order of the records. If there are more elements than records, new records are created. The records, whether new or existing, are automatically saved.</p><p><strong>Note:</strong> Since it can create new records, this command does not take a table's read-only state (if any) into account (see Record Locking). </p> <p>All the arrays must have the same number of elements. If the arrays are of different sizes, a syntax error is generated.</p> <p>This command does the reverse of [`SELECTION TO ARRAY`](selection-to-array.md). However, the <strong>ARRAY TO SELECTION</strong> command does not allow fields from different tables, including related tables, even when an automatic relation exists.</p><p>When you pass the * parameter, 4D does not execute the corresponding statement line immediately but instead stores it in memory; this way you can stack several lines ending with an *. All of these lines awaiting execution are executed by one final <strong>ARRAY TO SELECTION</strong> statement that does not have the * parameter. For this reason, the command can now be called without any parameters.<br/>As with the [`QUERY`](query.md) command, this lets you break up a complex statement into a set of lines, which is easier to read and to maintain. You can also insert intermediary statements. </p> <p><strong>WARNING:</strong> Use <strong>ARRAY TO SELECTION</strong> with caution, because it overwrites information in existing records. If a record is locked by another process during the execution of <strong>ARRAY TO SELECTION</strong>, that record is not modified. Any locked records are put into the process set called <span class="rte4d_typ">LockedSet</span>. After <strong>ARRAY TO SELECTION</strong> has executed, you can test the set <span class="rte4d_typ">LockedSet</span> to see if any records were locked.</p><p><strong>Note</strong>: This command does not take into account the read-only/read-write state of the table containing the field. </p> <p><strong>4D Server:</strong> The command is optimized for 4D Server. Arrays are sent by the client machine to the server, and the records are modified or created on the server machine. As such a request is handled synchronously, the client machine must wait for the operation to be completed successfully. In the multi-user or multi-process environment, any records that are locked will not be overwritten.</p>


#### Example


In the following example, the two arrays <span class="rte4d_prm">asLastNames</span> and <span class="rte4d_prm">asCompanies</span> place data in the <span class="rte4d_prm">[People]</span> table. The values from the array <span class="rte4d_prm">asLastNames</span>  area placed in the field <span class="rte4d_prm">[People]Last Name</span> and the values from the array <span class="rte4d_prm">asCompanies</span> are placed in the field <span class="rte4d_prm">[People]Company</span>:
```4d
ARRAY TO SELECTION (asLastNames;[People]Last Name;asCompanies;[People]Company)
```



#### Example


You want to copy a selection of records to an archive table by selecting the fields according to the option value:


```4d
ARRAY TEXT($_name;0)
ARRAY TEXT($_firstname;0)
ARRAY TEXT($_cv;0)
ARRAY PICTURE($_photo;0)

SELECTION TO ARRAY([Candidate]Name;$_name;*)
SELECTION TO ARRAY([Candidate]Firstname;$_firstname;*)
If (withCV) //load the CV field
SELECTION TO ARRAY([Candidate]cv;$_cv;*)
End if
If (withPhoto) //load the photo field
SELECTION TO ARRAY([Candidate]photo;$_photo;*)
End if
SELECTION TO ARRAY //execute copy

REDUCE SELECTION ([Candidate_Archive];0)
ARRAY TO SELECTION ($_name;[Candidate_Archive]Name;*)
ARRAY TO SELECTION ($_prenom;[Candidate_Archive]Firstname;*)
If (withCV)
ARRAY TO SELECTION ($_cv;[Candidate_Archive]cv;*)
End if
If (withPhoto)
ARRAY TO SELECTION ($_photo;[Candidate_Archive]photo;*)
End if
ARRAY TO SELECTION
```



