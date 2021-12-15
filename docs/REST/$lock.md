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

A `?$lock` request returns the same object (in JSON) as [`entity.lock()`](../API/EntityClass.md#lock) and [`entity.unlock()`](../API/EntityClass.md#unlock) class functions. 

The [`lockKindText` property](../API/EntityClass.html#lock) is "Locked by session".


### Description

The locks triggered by the REST API are put at the [session](authUsers.md#opening-sessions) level. 

A locked entity is seen as *locked* (i.e. lock / unlock / update / delete actions are not possible) by:

- other REST sessions
- 4D processes (client/server, remote datastore, standalone) running on the REST server.


A lock is removed when:

- the entity is explicitly unlocked by its locker (`/?$lock=false` in the REST session or [`entity.unlock()`](../API/EntityClass.md#unlock) if locked by ORDA)
- the session's [inactivity timeout]($directory.md) is reached (the session is closed)
- there are no more references to the locked entity in memory


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

