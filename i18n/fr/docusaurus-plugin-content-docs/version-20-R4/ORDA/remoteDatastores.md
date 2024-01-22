---
id: datastores
title: Utiliser un datastore distant
---

A [datastore](dsMapping.md#datastore) exposed on a 4D application can be accessed simultaneously through different clients:

- 4D remote applications using ORDA to access the main datastore with the `ds` command. A noter que l'application 4D distante peut toujours accéder à la base de données en mode classique. These accesses are handled by the **4D application server**.

- Other 4D applications (4D remote, 4D Server) opening a session on the remote datastore through the [`Open datastore`](../API/DataStoreClass.md#open-datastore) command. These accesses are handled by the **HTTP REST server**.

- [4D for iOS or 4D for Android](https://developer.4d.com/go-mobile/) queries for updating mobile applications. These accesses are handled by the **HTTP server**.

## Ouverture des sessions

When you work with a remote datastore referenced through calls to the `Open datastore` command, the connection between the requesting processes and the remote datastore is handled via sessions.

Une session est créée sur le datastore distant pour gérer la connexion. This session is identified using a internal session ID which is associated to the `localID` on the 4D application side. Cette session gère automatiquement l'accès aux données, aux sélections d'entités ou aux entités.

The `localID` is local to the machine that connects to the remote datastore, which means:

- If other processes of the same application need to access the same remote datastore, they can use the same `localID` and thus, share the same session.
- If another process of the same application opens the same remote datastore but with another `localID`, it will create a new session on the remote datastore.
- If another machine connects to the same remote datastore with the same `localID`, it will create another session with another cookie.

Ces principes sont illustrés dans les graphiques suivants :

![](../assets/en/ORDA/sessions.png)

> For sessions opened by REST requests, please refer to [Users and sessions](REST/authUsers.md).

### Visualiser les sessions

Les process qui gèrent les sessions d'accès aux datastore apparaissent dans la fenêtre d'administration de 4D Server :

- name: "REST Handler: \<process name>"
- type : type Worker Server HTTP
- session: session name is the user name passed to the `Open datastore` command.

Dans l'exemple suivant, deux process sont en cours d'exécution pour la même session :

![](../assets/en/ORDA/sessionAdmin.png)

### Verrouillage et transactions

Les fonctionnalités ORDA relatives au verrouillage d'entité et aux transactions sont gérées au niveau du process dans les datastore distants, tout comme en mode client/serveur ORDA :

- If a process locks an entity from a remote datastore, the entity is locked for all other processes, even when these processes share the same session (see [Entity locking](entities.md#entity-locking)). Si plusieurs entités pointant vers le même enregistrement ont été verrouillées dans un process, elles doivent toutes être déverrouillées dans le process pour supprimer le verrou. Si un verrou a été mis sur une entité, il est supprimé lorsqu'il n'existe plus de référence à cette entité en mémoire.
- Transactions can be started, validated or cancelled separately on each remote datastore using the `dataStore.startTransaction()`, `dataStore.cancelTransaction()`, and `dataStore.validateTransaction()` functions. Elles n’ont pas d’incidences sur les autres datastore.
- Classic 4D language commands (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) only apply to the main datastore (returned by `ds`).
  Si une entité d'un datastore distant est verrouillée par une transaction dans un process, les autres process ne peuvent pas la mettre à jour, même si ces process partagent la même session.
- Les verrous sur les entités sont supprimés et les transactions sont annulées :
  - lorsque le process est tué.
  - quand la session est fermée sur le serveur
  - lorsque la session est arrêtée à partir de la fenêtre d’administration du serveur.

### Fermeture des sessions

Une session est automatiquement fermée par 4D lorsqu'il n'y a pas eu d'activité durant son timeout. The default timeout is 60 mn, but this value can be modified using the _connectionInfo_ parameter of the `Open datastore` command.

Si une demande est envoyée au datastore distant après la fermeture de la session, elle est automatiquement recréée si possible (licence disponible, serveur non arrêté, etc.). A noter cependant que le contexte de la session des verrous et des transactions est perdu (voir ci-dessus).

## Optimisation client/serveur

4D provides optimizations for ORDA requests that use entity selections or load entities in client/server configurations (datastore accessed remotely through `ds` or via `Open datastore`). Ces optimisations accélèrent l'exécution de votre application 4D en réduisant drastiquement le volume d'informations transmises sur le réseau. Elles incluent :

- the **optimization context**
- the **ORDA cache**

### Contexte

Le contexte d'optimisation est fondé sur ce qui suit :

- Lorsqu'un client demande une sélection d'entité au serveur, 4D "apprend" automatiquement attributs de la sélection d'entité sont réellement utilisés côté client lors de l'exécution du code, et génère un "contexte d'optimisation" correspondant. Ce contexte est relié à la sélection d'entité et stocke les attributs utilisés. Il sera mis à jour dynamiquement si d'autres attributs sont utilisés par la suite. Les méthodes et fonctions suivantes déclenchent la phase d'apprentissage :
  - [`Create entity selection`](../API/EntitySelectionClass.md#create-entity-selection)
  - [`dataClass.fromCollection()`](../API/DataClassClass.md#fromcollection)
  - [`dataClass.all()`](../API/DataClassClass.md#all)
  - [`dataClass.get()`](../API/DataClassClass.md#get)
  - [`dataClass.query()`](../API/DataClassClass.md#query)
  - [`entitySelection.query()`](../API/EntitySelectionClass.md#query)

- Les requêtes ultérieures envoyées au serveur sur la même sélection d'entité réutilisent automatiquement le contexte d'optimisation et lisent uniquement les attributs nécessaires depuis le serveur, ce qui accélère le traitement. For example, in an [entity selection-based list box](#entity-selection-based-list-box), the learning phase takes place during the display of the first row. L'affichage des lignes suivantes est optimisé. Les fonctions suivantes associent automatiquement le contexte d'optimisation de l'entity selection d'origine à l'entity selection retournée :
  - [`entitySelection.and()`](../API/EntitySelectionClass.md#and)
  - [`entitySelection.minus()`](../API/EntitySelectionClass.md#minus)
  - [`entitySelection.or()`](../API/EntitySelectionClass.md#or)
  - [`entitySelection.orderBy()`](../API/EntitySelectionClass.md#orderBy)
  - [`entitySelection.slice()`](../API/EntitySelectionClass.md#slice)
  - [`entitySelection.drop()`](../API/EntitySelectionClass.md#drop)

- An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see [Using the context property](#reusing-the-context-property) below).

- You can build optimization contexts manually using the [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function (see [Preconfiguring contexts](#preconfiguring-contexts)).

![](../assets/en/ORDA/cs-optimization-process.png)

:::warning Compatibility Note

Contexts handled in connections established through [`Open datastore`](../API/DataStoreClass.md#open-datastore) can only be used between similar main versions of 4D. For example, a 4D v20.x remote application can only use contexts of a 4D Server v20.x datastore.

:::

#### Exemple

Considérons le code suivant :

```4d
 $sel:=$ds.Employee.query("firstname = ab@")
 For each($e;$sel)
    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refers to Company table
 End for each
```

Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in _$sel_ from the second iteration of the loop.

#### Réutiliser la propriété context

You can increase the benefits of the optimization by using the **context** property. Cette propriété référence un contexte d'optimisation "appris" pour une sélection d'entités. Elle peut être passée comme paramètre aux fonctions ORDA qui retournent de nouvelles sélections d'entités, afin que les sélections d'entités demandent directement au serveur les attributs utilisés, sans passer par la phase d'apprentissage.

> You can also create contexts using the [`.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function.

All ORDA functions that handle entity selections support the <strong x-id="1">context</strong> property (for example <a href="../API/DataClassClass.md#query"><code>dataClass.query()</code></a> or <a href="../API/DataClassClass.md#all"><code>dataClass.all()</code></a>). All ORDA functions that handle entity selections support the **context** property (for example [`dataClass.query()`](../API/DataClassClass.md#query) or [`dataClass.all()`](../API/DataClassClass.md#all)). Il est toutefois important de garder à l'esprit qu'un contexte est automatiquement mis à jour lorsque de nouveaux attributs sont utilisés dans d'autres parties du code. Si le même contexte est réutilisé dans différents codes, il risque d'être surchargé et de perdre en efficacité.

> A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the [`dataClass.get()`](../API/DataClassClass.md#get) function).

**Example with `dataClass.query()`:**

```4d
 var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object
 var $data : Collection
 $querysettings:=New object("context";"shortList")
 $querysettings2:=New object("context";"longList")
 
 $sel1:=ds.Employee.query("lastname = S@";$querysettings)
 $data:=extractData($sel1) // In extractData method an optimization is triggered   
 // and associated to context "shortList"
 
 $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)
 $data:=extractData($sel2) // In extractData method the optimization associated   
 // to context "shortList" is applied
 
 $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)
 $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization  
 // is triggered and associated to context "longList"
 
 $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)
 $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization  
 // associated to context "longList" is applied
```

#### List box de type entity selection

L'optimisation d'entity selection s'applique automatiquement aux listbox basées sur une entity selection dans les configurations client/serveur, au moment d'afficher et de dérouler le contenu d'une listbox : seuls les attributs affichés dans la listbox sont demandés depuis le serveur.

A specific "page mode" context is also provided when loading the current entity through the **Current item** property expression of the list box (see [Collection or entity selection type list boxes](FormObjects/listbox_overview.md#list-box-types)). Cette fonctionnalité vous permet de ne pas surcharger le contexte initial de la listbox dans ce cas précis, notamment si la "page" requiert des attributs supplémentaires. Note that only the use of **Current item** expression will create/use the page context (access through `entitySelection\[index]` will alter the entity selection context).

Les requêtes ultérieures adressées au serveur par les fonctions de navigation parmi les entités prendront également en charge cette optimisation. Les fonctions suivantes associent automatiquement le contexte d'optimisation de l'entité source à l'entité retournée :

- [`entity.next()`](../API/EntityClass.md#next)
- [`entity.first()`](../API/EntityClass.md#first)
- [`entity.last()`](../API/EntityClass.md#last)
- [`entity.previous()`](../API/EntityClass.md#previous)

Par exemple, le code suivant charge l'entité sélectionnée et permet de naviguer dans l'entity selection. Les entités sont chargées dans un contexte séparé et le contexte initial de la listbox demeure inchangé :

```4d
 $myEntity:=Form.currentElement //current item expression
  //... do something
 $myEntity:=$myEntity.next() //loads the next entity using the same context
```

#### Préconfiguration des contextes

Un contexte d'optimisation doit être défini pour chaque fonctionnalité ou algorithme de votre application, afin d'obtenir les meilleures performances. Par exemple, un contexte peut être utilisé pour les requêtes sur les clients, un autre contexte pour les requêtes sur les produits, etc.

Si vous souhaitez livrer des applications finales avec le plus haut niveau d'optimisation, vous pouvez préconfigurer vos contextes et ainsi économiser des phases d'apprentissage en suivant ces étapes :

1. Concevez vos algorithmes.
2. Exécutez votre application et laissez le mécanisme d'apprentissage automatique remplir les contextes d'optimisation.
3. Call the [`dataStore.getRemoteContextInfo()`](../API/DataStoreClass.md#getremotecontextinfo) or [`dataStore.getAllRemoteContexts()`](../API/DataStoreClass.md#getallremotecontexts) function to collect  contexts. You can use the [`entitySelection.getRemoteContextAttributes()`](../API/EntitySelectionClass.md#getremotecontextattributes) and [`entity.getRemoteContextAttributes()`](../API/EntityClass.md#getremotecontextattributes) functions to analyse how your algorithms use attributes.
4. In the final step, call the [`dataStore.setRemoteContextInfo()`](../API/DataStoreClass.md#setremotecontextinfo) function to build contexts at application startup and [use them](#reusing-the-context-property) in your algorithms.

### Cache ORDA

Pour des raisons d'optimisation, les données demandées au serveur via ORDA sont chargées dans le cache distant ORDA (qui est différent du cache 4D). Le cache ORDA est organisé par dataclass et expire au bout de 30 secondes.

Les données contenues dans le cache sont considérées comme expirées lorsque le délai d'attente est atteint. Tout accès à des données périmées provoquera l'envoi d'une requête au serveur. Les données périmées restent dans le cache jusqu'à ce que l'on ait besoin d'espace.

Par défaut, le cache ORDA est géré de manière transparente par 4D. Cependant, vous pouvez contrôler son contenu en utilisant les fonctions ORDA suivantes :

- [dataClass.setRemoteCacheSettings()](../API/DataClassClass.md#setremotecachesettings)
- [dataClass.getRemoteCache()](../API/DataClassClass.md#getremotecache)
- [dataClass.clearRemoteCache()](../API/DataClassClass.md#clearremotecache)
