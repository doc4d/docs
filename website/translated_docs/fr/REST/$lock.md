---
id: lock
title: '$lock'
---


Locks and unlocks an entity using the [pessimistic mechanism](../ORDA/entities.md#pessimistic-lock).


## Syntaxe

To lock an entity for other sessions and 4D processes:

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

An entity locked by the REST API can only be unlocked:

- by its locker, i.e. a `/?$lock=false` in the REST session that sets `/?$lock=true`
- or if the session's [inactivity timeout]($directory.md) is reached (the session is closed).

### Réponse

A `?$lock` request returns a JSON object with `"result"=true` if the lock operation was successful and `"result"=false` if it failed.

The returned "__STATUS" object has the following properties:

| Propriété    |                | Type    | Description                                                                                                                                                 |
| ------------ | -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|              |                |         | ***Available only in case of success:***                                                                                                                    |
| success      |                | boolean | true if the lock action is successful (or if the entity is already locked in the current session), false otherwise (not returned in this case).             |
|              |                |         | ***Disponible uniquement en cas d'erreur :***                                                                                                               |
| status       |                | number  | Code d'erreur, voir ci-dessous                                                                                                                              |
| statusText   |                | Texte   | Description de l'erreur, voir ci-dessous                                                                                                                    |
| lockKind     |                | number  | Lock code                                                                                                                                                   |
| lockKindText |                | Texte   | "Locked by session" if locked by a REST session, "Locked by record" if locked by a 4D process                                                               |
| lockInfo     |                | object  | Information about the lock origin. Returned properties depend on the lock origin (4D process or REST session).                                              |
|              |                |         | ***Available only for a 4D process lock:***                                                                                                                 |
|              | task_id        | number  | ID du process                                                                                                                                               |
|              | user_name      | Texte   | Nom d'utilisateur de la session sur la machine                                                                                                              |
|              | user4d_alias   | Texte   | Nom ou alias de l'utilisateur 4D                                                                                                                            |
|              | user4d_id      | number  | Identifiant utilisateur dans le répertoire de la base 4D                                                                                                    |
|              | host_name      | Texte   | Nom de la machine                                                                                                                                           |
|              | task_name      | Texte   | Nom du process                                                                                                                                              |
|              | client_version | Texte   | Version of the client                                                                                                                                       |
|              |                |         | ***Available only for a REST session lock:***                                                                                                               |
|              | host           | Texte   | URL that locked the entity (e.g. "127.0.0.1:8043")                                                                                                          |
|              | IPAddr         | Texte   | IP address of the locker (e.g. "127.0.0.1")                                                                                                                 |
|              | recordNumber   | number  | Record number of the locked record                                                                                                                          |
|              | userAgent      | Texte   | userAgent of the locker (e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |


The following values can be returned in the *status* and *statusText* properties of the *__STATUS* object in case of error:

| status | statusText                      | Commentaire                                                                                                                                |
| ------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 2      | "Stamp has changed"             | La valeur du marqueur interne (stamp) de l'entité ne correspond pas à celle de l'entité stockée dans les données (verrouillage optimiste). |
| 3      | "Already locked"                | L'entité est verrouillée par un verrou pessimiste.                                                                                         |
| 4      | "Other error"                   | Une erreur critique peut être une erreur de bas niveau de la base de données (ex. clé dupliquée), une erreur matérielle, etc.              |
| 5      | "Entity does not exist anymore" | L'entité n'existe plus dans les données.                                                                                                   |




## Exemple


We lock an entity in a first browser:

```
GET /rest/Customers(1)/?$lock=true
```

**Réponse :**

```
{
    "result": true,
    "__STATUS": {
        "success": true
    }
}
```

In a second browser (other session), we send the same request.

**Réponse :**

```
{
    "result":false,
    "__STATUS":{
        "status":3,
        "statusText":"Already Locked",
        "lockKind":7,
        "lockKindText":"Locked By Session",
        "lockInfo":{
            "host":"127.0.0.1:8043",
            "IPAddr":"127.0.0.1",
            "recordNumber": 7,
            "userAgent": ""Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36..."
        }
    }
}
```

