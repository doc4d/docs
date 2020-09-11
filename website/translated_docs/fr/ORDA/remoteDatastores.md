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

*   <process name\>nom : "Gestionnaire REST : < nom du process > "
*   type : type Worker Server HTTP
*   session : le nom de session est le nom d'utilisateur passé à la commande Open datastore.

Dans l'exemple suivant, deux process sont en cours d'exécution pour la même session :

![](assets/en/Orda/sessionAdmin.png)

## Verrouillage et transactions

Les fonctionnalités ORDA relatives au verrouillage d'entité et aux transactions sont gérées au niveau du process dans les datastore distants, tout comme en mode client/serveur ORDA :

*   Si un process verrouille une entité à partir d'un datastore distant, l'entité est verrouillée pour tous les autres process, même lorsque ces process partagent la même session (voir [Verrouillage d'entités](entities.md#entity-locking)). Si plusieurs entités pointant vers le même enregistrement ont été verrouillées dans un process, elles doivent toutes être déverrouillées dans le process pour supprimer le verrou. Si un verrou a été mis sur une entité, il est supprimé lorsqu'il n'existe plus de référence à cette entité en mémoire.
*   Les transactions peuvent être lancées, validées ou annulées séparément sur chaque datastore distant à l'aide des méthodes `dataStore.startTransaction( )`, `dataStore.cancelTransaction( )`, et `dataStore.validateTransaction( )`. They do not impact other datastores.
*   Classic 4D language commands (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) only apply to the main datastore (returned by `ds`). If an entity from a remote datastore is hold by a transaction in a process, other processes cannot update it, even if these processes share the same session.
*   Locks on entities are removed and transactions are rollbacked:
    *   when the process is killed.
    *   when the session is closed on the server
    *   when the session is killed from the server administration window.

## Fermeture des sessions

A session is automatically closed by 4D when there has been no activity during its timeout period. The default timeout is 60 mn, but this value can be modified using the `connectionInfo` parameter of the `Open datastore` command.

If a request is sent to the remote datastore after the session has been closed, it is automatically re-created if possible (license available, server not stopped...). However, keep in mind that the context of the session regarding locks and transactions is lost (see above). 
