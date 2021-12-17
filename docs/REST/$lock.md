---
id: lock
title: $lock 
---


Locks and unlocks an entity using the [pessimistic mechanism](../ORDA/entities.md#pessimistic-lock).


## Syntax

To lock and entity the entity for other sessions and 4D processes:

```
/?$lock=true
```


To unlock the entity for other sessions and 4D processes:

```
/?$lock=false
```


The [`lockKindText` property](../API/EntityClass.html#lock) is "Locked by session".


### Description

The locks triggered by the REST API are put at the [session](authUsers.md#opening-sessions) level. 

A locked entity is seen as *locked* (i.e. lock / unlock / update / delete actions are not possible) by:

- other REST sessions
- 4D processes (client/server, remote datastore, standalone) running on the REST server. 

A locked entity can only be unlocked:

- by its locker, i.e. a `/?$lock=false` in the REST session that sets `/?$lock=true`
- or if the session's [inactivity timeout]($directory.md) is reached (the session is closed)
- or if there are no more references to the locked entity in memory

### Response

A `?$lock` request returns a JSON object with `"result"=true` if the lock operation was successful and `"result"=false` if it failed. 

The returned "__STATUS" object has the following properties: 

|Property|	|	Type|	Description|
|---|---|---|---|
||||***Available only in case of success:***|
|success|	|	boolean|true if the lock action is successful (or if the entity is already locked in the current session), false otherwise (not returned in this case).|
||||***Available only in case of error:***|
|status| 	|number|Error code, see below|
|statusText||text|Description of the error, see below|
|lockKind|	|number|Lock code|
|lockKindText|	|	text|"Locked by session" if locked by a REST session, "Locked by record" if locked by a 4D process|
|lockInfo|	|	object|	Information about the lock origin. Returned properties depend on the lock origin (4D process or REST session)|
||task_id|	number|4D: Process ID|
||user_name	|text|4D: Session user name on the machine|
||user4d_alias|	text|4D: Name or alias of the 4D user|
||user4d_id	|number	|4D: User id in the 4D database directory|
||host_name|	text|4D: Machine name
||task_name	|text	|4D: Process name|
||client_version|	text	||

The following values can be returned in the *status* and *statusText* properties of the *__STATUS* object in case of error: 

|status|	Comment|
|---|---|
|2|The internal stamp value of the entity does not match the one of the entity stored in the data (optimistic lock). **statusText**: "Stamp has changed"|
|3	|The entity is locked by a pessimistic lock. **statusText**: "Already locked"
|4 |A serious error is a low-level database error (e.g. duplicated key), a hardware error, etc. **statusText**: "Other error"|
|5	|The entity no longer exists in the data. **statusText**: "Entity does not exist anymore"|




## Example


We lock an entity in a first browser:

```
GET /rest/Customers(1)/?$lock=true
```

**Response:**

```
{
	"result": true,
	"__STATUS": {
		"success": true
	}
}
```
	
In a second browser (other session), we send the same request.

**Response:**

```
{
	"result":false,
	"__STATUS":{
		"status":3,
		"statusText":"Already Locked",
		"lockKind":7,
		"lockKindText":"Locked By Session"
	}
}
```

