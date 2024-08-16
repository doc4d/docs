---
id: drop-remote-user
title: DROP REMOTE USER
displayed_sidebar: docs
---


<!-- REF #_command_.DROP REMOTE USER.Syntax-->**DROP REMOTE USER** ( userSession )<!-- END REF-->


<!-- REF #_command_.DROP REMOTE USER.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|userSession|Text|->|User's session ID|
<!-- END REF -->


#### Description




The **DROP REMOTE USER** command disconnects a specific user remotely connected to the 4D Server. 

In `userSession`, pass the session ID of the user you want to disconnect from the server. You can retrieve the session ID with the [`Get process activity`](get-process-activity.md)  command.

**Note:** This command is executed asynchronously and can only be executed on 4D Server. If the  method calling the command is executed locally on a remote client or in  4D single user, **DROP REMOTE USER** does nothing.


#### Example


You want to drop a specific remote user:


```4d
// Method to be executed on server
C_COLLECTION($userCol)
C_OBJECT($element)

//disconnect the remote user Vanessa Talbot
$userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")
For each ($element;$userCol)
DROP REMOTE USER($element.ID)
End for each

```



