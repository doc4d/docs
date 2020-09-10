---
id: webServerObject
title: Objet Serveur Web
---

## Aperçu

Un projet 4D peut démarrer et surveiller un serveur Web pour la base de données principale (hôte) ainsi que chaque composant hébergé.

Par exemple, si vous avez installé deux composants dans votre base de données principale, vous pouvez démarrer et contrôler jusqu'à trois serveurs Web indépendants à partir de votre application :

- un serveur web pour la base hôte,
- un serveur web pour le composant n°1,
- un serveur web pour le composant n°2.

En dehors de la mémoire, il n'y a pas de limite au nombre de composants et donc, de serveurs Web, pouvant être rattachés à un seul projet de base de données 4D.

Chaque serveur web 4D, y compris le serveur web de la base de données principale, est exposé comme un **objet** spécifique. Une fois instancié, un objet serveur Web peut être géré à partir de la base de données courante ou de n'importe quel composant.

> Les [commandes WEB](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) héritées du langage 4D sont prises en charge mais ne peuvent pas contrôler le serveur Web auquel elles s'appliquent (voir ci-dessous).

Chaque serveur web (base hôte ou composant) peut être utilisé dans son propre contexte, notamment :
- les appels vers la méthode base `On Web Authentication` et `On Web Connection`
- le traitement des balises 4D et les appels de méthodes,
- la gestion de sessions web et des protocoles TLS.

Cette fonctionnalité vous permet de développer des composants indépendants et des fonctionnalités qui accompagnent leurs propres interfaces Web.


## Instancier un objet serveur web

L'objet serveur Web de la base de données hôte (serveur Web par défaut) est automatiquement chargé par 4D au démarrage. Ainsi, si vous écrivez dans une base de données nouvellement créée :

```4d
$nbSrv:=WEB Server list.length   
//la valeur de $nbSrv est 1
```

Pour instancier un objet serveur web, appelez la commande `WEB Server` :

```4d
C_OBJECT(webServer)
    //appeler le serveur web depuis le contexte courant
webServer:=WEB Server  
    //équivalent à
webServer:=WEB Server(Web server database)
```

If the database uses components and you want to call:
- the host database's web server from a component or
- le serveur qui a reçu la requête (quel que soit le serveur)

vous pouvez également utiliser :

```4d
C_OBJECT(webServer)  
    //appler le serveur web hôte depuis un composant  
webServer:=WEB Server(Web server host database)  
    //appeler le serveur web cible
webServer:=WEB Server(Web server receiving request)  
```


## Méthodes du serveur web

Un objet serveur Web contient les méthodes membres suivantes :

| Méthode   | Paramètres       | Valeur retournée | Description            |
| --------- | ---------------- | ---------------- | ---------------------- |
| `start()` | settings (objet) | status (object)  | Démarre le serveur web |
| `stop()`  | -                | -                | Stoppe le serveur web  |

Pour démarrer et arrêter un serveur Web, il suffit d'appeler les méthodes membres `start()` et `stop()` de l'objet serveur Web :

```4d
C_OBJECT($status)
    //pour démarrer un serveur web avec les paramètres par défaut
$status:=webServer.start()
    //pour démarrer un serveur web avec des paramètres personnalisés   
    //objet $settings contenant des propriétés du serveur web
webServer.start($settings)

    //pour stopper le serveur web
$status:=webServer.stop()
```


## Propriétés du serveur web

Un objet serveur Web contient les propriétés suivantes.

| Propriété                  | Type               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| certificateFolder          | Texte              | Dossier dans lequel les fichiers de certificat sont sauvegardés. Format POSIX du chemin d'accès complet à l'aide de filesystem. Peut être passé comme objet `Folder` dans le paramètre `settings`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| characterSet               | Numérique ou texte | Jeu de caractères devant être utilisé par 4D Web Server pour communiquer avec les navigateurs connectés à la base. La valeur par défaut dépend de la langue du système d'exploitation. Peut être une chaîne MIBEnum longint ou Name, identifiants [définis par l'IANA](http://www.iana.org/assignments/character-sets) pris en charge par le serveur Web 4D : <li>4 = ISO-8859-1</li><li>12 = ISO-8859-9</li><li>13 = ISO-8859-10</li><li>17 = Shift-JIS</li><li>2024 = Windows-31J</li><li>2026 = Big5</li><li>38 = euc-kr</li><li>106 = UTF-8</li><li>2250 = Windows-1250</li><li>2251 = Windows-1251</li><li>2253 = Windows-1253</li><li>2255 = Windows-1255</li><li>2256 = Windows-1256                               |
| cipherSuite                | Texte              | Liste de chiffrement utilisée pour le protocole sécurisé. Définit la priorité des algorithmes de chiffrement mis en œuvre par le serveur Web. Peut être une séquence de chaînes séparées par des deux-points (par exemple "ECDHE-RSA-AES128 -..."). Voir la [page des chiffrements](https://www.openssl.org/docs/manmaster/man1/ciphers.html) sur le site OpenSSL.                                                                                                                                                                                                                                                                                                                                                                                     |
| debugLog                   | number             | Etat du fichier journal des requêtes HTTP (HTTPDebugLog_nn.txt, stocké dans le dossier "Logs" de l'application - nn est le numéro de fichier). <li>0 = désactivé</li><li>1 = activé sans les parties du corps (la taille du corps est fournie dans ce cas)</li><li>3 = activé avec les parties du corps en réponse uniquement</li><li>5 = activé avec des parties du corps sur requête uniquement</li><li>7 = activé avec des parties du corps en réponse et requête</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| defaultHomepage            | Texte              | Nom de la page d'accueil par défaut ou "" pour ne pas envoyer la page d'accueil personnalisée                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| HSTSEnabled                | boolean            | État de HTTP Strict Transport Security (HSTS). HSTS permet au serveur Web de déclarer que les navigateurs doivent interagir avec uniquement via des connexions HTTPS sécurisées. Les navigateurs enregistreront les informations HSTS la première fois qu'ils recevront une réponse du serveur Web, puis toutes les futures requêtes HTTP seront automatiquement transformées en requêtes HTTPS. La durée de stockage de ces informations par le navigateur est indiquée avec la propriété `HSTSMaxAge`. HSTS nécessite l'activation de HTTPS sur le serveur. HTTP doit également être activé pour permettre des connexions client initiales.                                                                                                          |
| HSTSMaxAge                 | number             | Durée maximale (en secondes) d'activation de HSTS pour chaque nouvelle connexion client. Ces informations sont stockées côté client pendant la durée spécifiée. <p><p>Valeur par défaut : 63072000 (2 ans)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| HTTPCompressionLevel       | number             | Niveau de compression pour tous les échanges HTTP compressés pour le serveur HTTP 4D (requêtes clients ou réponses serveur). Ce sélecteur vous permet d'optimiser les échanges en priorisant soit la vitesse d'exécution (moins de compression), soit la quantité de compression (moins de vitesse). <p><p>Valeurs possibles : <ul><li>1 à 9 (où 1 correspond à la compression la plus rapide et 9 la plus élevée).</li><li> -1 = définir un compromis entre la vitesse et le taux de compression.</li></ul> Par défaut = 1 (compression plus rapide).                                                                                                                                                                                                                                                                                                        |
| HTTPCompressionThreshold   | number             | Seuil de taille (octets) pour les requêtes en dessous desquelles les échanges ne doivent pas être compressés. Ce paramètre est utile pour éviter de perdre du temps machine en compressant les petits échanges. <p><p>Seuil de compression par défaut = 1024 octets                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| HTTPEnabled                | boolean            | État du protocole HTTP                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| HTTPPort                   | number             | Numéro de port IP d'écoute pour HTTP. <p><p>Par défaut = 80                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| HTTPTrace                  | boolean            | Activation HTTP TRACE. Pour des raisons de sécurité, le serveur Web rejette par défaut les requêtes HTTP TRACE avec une erreur 405. Lorsqu'il est activé, le serveur Web répond aux requêtes HTTP TRACE avec la ligne de requête, l'en-tête et le corps.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| HTTPSEnabled               | boolean            | État du protocole HTTPS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| HTTPSPort                  | number             | Numéro de port IP d'écoute pour HTTPS. <p><p>Par défaut = 443                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| inactiveProcessTimeout     | number             | Durée de vie (en minutes) des process de session inactives. À la fin du délai d'attente (tiemout), le process est tué sur le serveur, la méthode base `On Web Close Process` est appelée, puis le contexte de session est détruit. <p><p>Par déefaut = 480 minutes                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| inactiveSessionTimeout     | number             | Life duration (in minutes) of inactive sessions (duration set in cookie). At the end of this period, the session cookie expires and is no longer sent by the HTTP client. <p><p>Par déefaut = 480 minutes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| IPAddressToListen          | Texte              | IP address on which the 4D Web Server will receive HTTP requests. Both IPv6 string formats and IPv4 string formats are supported.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| *isRunning*                | boolean            | Web server running state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| keepSession                | boolean            | Session management enabling status <p><p>Default = true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| logRecording               | number             | Log requests (logweb.txt) recording value. <li>0 = Do not record (default)</li><li>1 = Record in CLF format</li><li>2 = Record in DLF format</li><li>3 = Record in ELF format</li><li>4 = Record in WLF format</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| maxConcurrentProcesses     | number             | Maximum number of concurrent web processes supported by the web server. When this number (minus one) is reached, 4D will not create any other processes and returns the HTTP status 503 - Service Unavailable to all new requests. <p><p>Valeurs possibles : 10 - 32000 <p><p>Par défaut = 100                                                                                                                                                                                                                                                                                                                                                             |
| maxRequestSize             | number             | Maximum size (in bytes) of incoming HTTP requests (POST) that the Web server is allowed to process. Passing the maximum value (2147483648) means that, in practice, no limit is set. This limit is used to avoid web server saturation due to incoming requests that are too large. If a request reaches this limit, the web server rejects it. <p><p>Valeurs possibles : 500000 - 2147483648                                                                                                                                                                                                                                                                                                          |
| maxSessions                | number             | Maximum number of simultaneous sessions. When you reach the limit, the oldest session is closed (and `On Web Close Process` database method is called) if the web server needs to create a new one. The number of simultaneous sessions cannot exceed the total number of web processes (`maxConcurrentProcesses` property, 100 by default)                                                                                                                                                                                                                                                                                                                                                                                                            |
| minTLSVersion              | number             | Minimum TLS version accepted for connections. Connection attempts from clients supporting only versions below the minimum will be rejected. <p><p>Valeurs possibles :<li>1 = `TLSv1_0`</li><li>2 = `TLSv1_1`</li><li>3 = `TLSv1_2` (par défaut)</li><p><p>If modified, the server must be restarted to use the new value.                                                                                                                                                                                                                                                                                                                               |
| *name*                     | Texte              | Nom de la base du serveur Web                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| *openSSLVersion*           | Texte              | Version of the OpenSSL library used                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| *perfectForwardSecrecy*    | boolean            | PFS availability on the server                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| rootFolder                 | Texte              | Path of web server root folder. Format POSIX du chemin d'accès complet à l'aide de filesystem. Peut être passé comme objet `Folder` dans le paramètre `settings`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| sessionCookieDomain        | Texte              | "domain" field of the session cookie. Used to control the scope of the session cookies. If you set, for example, the value "/*.4d.fr" for this selector, the client will only send a cookie when the request is addressed to the domain ".4d.fr", which excludes servers hosting external static data.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| sessionCookieName          | Texte              | Name of the cookie used for storing the session ID. <p><p>Par défaut = "4DSID"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| sessionCookiePath          | Texte              | "path" field of the session cookie. Used to control the scope of the session cookies. If you set, for example, the value "/4DACTION" for this selector, the client will only send a cookie for dynamic requests beginning with 4DACTION, and not for pictures, static pages, etc.                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| sessionIPAddressValidation | boolean            | IP address validation for session cookies. For security reasons, by default the web server checks the IP address of each request containing a session cookie and rejects it if this address does not match the IP address used to create the cookie. In some specific applications, you may want to disable this validation and accept session cookies, even when their IP addresses do not match. For example when mobile devices switch between Wifi and 3G/4G networks, their IP address will change. In this case, you can allow clients to be able to continue using their web sessions even when the IP addresses change. <p><p>Note: this setting lowers the security level of your application |

Ces propriétés sont définies :

1. à l'aide du paramètre `settings` de la méthode `webServer.start()` (sauf pour les propriétés en lecture seule, voir ci-dessous),
2. si elles ne sont pas utilisées, à l'aide de la commande `WEB SET OPTION` (bases de données hôtes uniquement),
3. si elles ne sont pas utilisées, dans les paramètres de la base hôte ou du composant.

- Si le serveur Web n'est pas démarré, les propriétés contiennent les valeurs qui seront utilisées au prochain démarrage du serveur Web.
- Si le serveur Web est démarré, les propriétés contiennent les valeurs réelles utilisées par le serveur Web (les paramètres par défaut peuvent avoir été remplacés par le paramètre `settings` de la méthode `webServer.start()`.

> *isRunning*, *name*, *openSSLVersion* et *perfectForwardSecrecy* sont des propriétés en lecture seule qui ne peuvent pas être prédéfinies dans le paramètre objet `settings` pour la méthode `start()`.


## Portée des commandes 4D Web

Le langage 4D contient [plusieurs commandes](https://doc.4d.com/4Dv18/4D/18/Web-Server.201-4504301.en.html) permettant de contrôler le serveur Web. Cependant, ces commandes sont destinées à fonctionner avec un seul serveur Web (par défaut). Lorsque vous utilisez ces commandes dans le contexte d'objets serveur Web, assurez-vous que leur portée est appropriée.

| Commande                        | Portée                            |
| ------------------------------- | --------------------------------- |
| `SET DATABASE PARAMETER`        | Serveur Web de la base hôte       |
| `WEB CLOSE SESSION`             | Serveur Web ayant reçu la requête |
| `WEB GET BODY PART`             | Serveur Web ayant reçu la requête |
| `WEB Get body part count`       | Serveur Web ayant reçu la requête |
| `WEB Get Current Session ID`    | Serveur Web ayant reçu la requête |
| `WEB GET HTTP BODY`             | Serveur Web ayant reçu la requête |
| `WEB GET HTTP HEADER`           | Serveur Web ayant reçu la requête |
| `WEB GET OPTION`                | Serveur Web de la base hôte       |
| `WEB Get server info`           | Serveur Web de la base hôte       |
| `WEB GET SESSION EXPIRATION`    | Serveur Web ayant reçu la requête |
| `WEB Get session process count` | Serveur Web ayant reçu la requête |
| `WEB GET STATISTICS`            | Serveur Web de la base hôte       |
| `WEB GET VARIABLES`             | Serveur Web ayant reçu la requête |
| `WEB Is secured connection`     | Serveur Web ayant reçu la requête |
| `WEB Is server running`         | Serveur Web de la base hôte       |
| `WEB SEND BLOB`                 | Serveur Web ayant reçu la requête |
| `WEB SEND FILE`                 | Serveur Web ayant reçu la requête |
| `WEB SEND HTTP REDIRECT`        | Serveur Web ayant reçu la requête |
| `WEB SEND RAW DATA`             | Serveur Web ayant reçu la requête |
| `WEB SEND TEXT`                 | Serveur Web ayant reçu la requête |
| `WEB SET HOME PAGE`             | Serveur Web de la base hôte       |
| `WEB SET HTTP HEADER`           | Serveur Web ayant reçu la requête |
| `WEB SET OPTION`                | Serveur Web de la base hôte       |
| `WEB SET ROOT FOLDER`           | Serveur Web de la base hôte       |
| `WEB START SERVER`              | Serveur Web de la base hôte       |
| `WEB STOP SERVER`               | Serveur Web de la base hôte       |
| `WEB Validate digest`           | Serveur Web ayant reçu la requête |
