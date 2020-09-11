---
id: datastores
title: Utiliser un datastore distant
---

Un [datastore](dsMapping.md#datastore) exposé sur une application 4D Server est accessible simultanément via différents clients :

- Les applications 4D distantes utilisant ORDA pour accéder au datastore principal à l’aide de la commande `ds`. A noter que l'application 4D distante peut toujours accéder à la base de données en mode classique. Ces accès sont gérés par le **serveur d'applications 4D**.
- D'autres applications 4D (4D Remote, 4D Server) ouvrant une session sur le datastore distant via la commande `Open datastore`. Ces accès sont transmis par le **serveur HTTP REST**.
- Les requêtes 4D for iOS pour la mise à jour des applications iOS. Ces accès sont remis par le **serveur HTTP**.


Lorsque vous travaillez avec un datastore distant référencé par des appels à la commande `Open datastore`, la connexion entre les process qui effectuent la requête et le datastore distant est gérée par des sessions.


## Ouverture des sessions

Lorsqu'une application 4D (c'est-à-dire un process) ouvre un datastore externe à l'aide de la commande `Open datastore`, une session est créée sur le datastore distant pour gérer la connexion. Cette session est identifiée à l'aide d'un ID de session interne, associé au `localID` de l'application 4D. Cette session gère automatiquement l'accès aux données, aux sélections d'entités ou aux entités.

Le `localID` est local à la machine qui se connecte au datastore distant, ce qui signifie :

*   Que si d'autres process de la même application doivent accéder au même datastore distant, ils peuvent utiliser le même `localID` et partager alors la même session.
*   Que si un autre process de la même application ouvre le même datastore distant, mais avec un autre `localID`, il créera une nouvelle session sur le datastore distant.
*   Que si un autre poste se connecte au même datastore distant avec le même `localID`, il créera une autre session avec un autre cookie.

Ces principes sont illustrés dans les graphiques suivants :

![](assets/en/Orda/sessions.png)

> Pour les sessions ouvertes par des requêtes REST, veuillez consulter aux [Utilisateurs et sessions](REST/authUsers.md).

## Visionnage des sessions

Les process qui gèrent les sessions d'accès aux datastore apparaissent dans la fenêtre d'administration de 4D Server :

*   nom : "Gestionnaire REST: \<process name>"
*   type : type Worker Server HTTP
*   session : le nom de session est le nom d'utilisateur passé à la commande Open datastore.

Dans l'exemple suivant, deux process sont en cours d'exécution pour la même session :

![](assets/en/Orda/sessionAdmin.png)

## Verrouillage et transactions

ORDA features related to entity locking and transaction are managed at process level in remote datastores, just like in ORDA client/server mode:

*   If a process locks an entity from a remote datastore, the entity is locked for all other processes, even when these processes share the same session (see [Entity locking](entities.md#entity-locking)). If several entities pointing to a same record have been locked in a process, they must be all unlocked in the process to remove the lock. If a lock has been put on an entity, the lock is removed when there is no more reference to this entity in memory.
*   Transactions can be started, validated or cancelled separately on each remote datastore using the `dataStore.startTransaction()`, `dataStore.cancelTransaction()`, and `dataStore.validateTransaction()` functions. They do not impact other datastores.
*   Classic 4D language commands (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) only apply to the main datastore (returned by `ds`). If an entity from a remote datastore is hold by a transaction in a process, other processes cannot update it, even if these processes share the same session.
*   Locks on entities are removed and transactions are rollbacked:
    *   when the process is killed.
    *   when the session is closed on the server
    *   when the session is killed from the server administration window.

## Fermeture des sessions

A session is automatically closed by 4D when there has been no activity during its timeout period. The default timeout is 60 mn, but this value can be modified using the `connectionInfo` parameter of the `Open datastore` command.

If a request is sent to the remote datastore after the session has been closed, it is automatically re-created if possible (license available, server not stopped...). However, keep in mind that the context of the session regarding locks and transactions is lost (see above). 
