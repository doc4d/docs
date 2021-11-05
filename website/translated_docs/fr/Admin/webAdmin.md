---
id: webAdmin
title: Administration Web
---


4D et 4D Server ont un composant intégré appelé `WebAdmin` qui permet de lancer un serveur web qui fournit un accès sécurisé à des outils de gestion de données, tel que l'[Explorateur de données Web](dataExplorer.md). Ce serveur est accessible en local ou à distance, depuis un navigateur ou une application web, et permet d'accéder à l'application 4D associée.

Le WebAdmin gère l'authentification des utilisateurs via des privilèges "WebAdmin", leur permettant d'ouvrir des sessions en tant qu'administrateurs et d'accéder à des interfaces dédiées.

Cette fonctionnalité est disponible pour les applications 4D avec ou sans interfaces.


## Démarrer le WebAdmin web server

Par défaut, le serveur web `WebAdmin` ne démarre pas automatiquement. Il faut configurer son lancement automatique au démarrage, ou (dans les versions avec une interface) le lancer manuellement via un menu.


### Lancement au démarrage

Vous pouvez configurer le server web `WebAdmin` pour qu'il se lance au démarrage de 4D ou 4D Server (avant l'ouverture d'un projet).

- Si vous utilisez une application 4D avec une interface, sélectionnez **Fichier > Administration Web > Paramètres...**.

![alt-text](assets/en/Admin/waMenu1.png)

Cochez l'option **Démarrage de l'admin du serveur web** dans la fenêtre des paramètres :

![alt-text](assets/en/Admin/waSettings.png)

- Que vous utilisiez une application 4D avec ou sans interface, vous pouvez activer le lancement automatique au démarrage en utilisant l'argument suivant dans *L'interface de ligne de commande* :


```
open ~/Desktop/4D.app --webadmin-auto-start true
```

> Si le port TCP utilisé par le serveur web `WebAdmin` ([HTTPS](#https-port) ou [HTTP](#http-port) selon les paramètres) n'est pas disponible au démarrage, 4D essaiera avec les 20 ports suivants et utilisera le premier disponible. Si aucun port n'est disponible, le serveur web ne se lance pas et un message d'erreur s'affiche. Pour les applications sans interface, il apparaît dans la console.


### Démarrage et arrêt

Si vous utilisez une application 4D avec une interface, vous pouvez démarrer ou arrêter le serveur web `WebAdmin` de votre projet à tout moment :

Sélectionnez **Fichier> Administration web > Démarrer le serveur**.

![alt-text](assets/en/Admin/waMenu2.png)

Le menu affiche **Arrêter le Server** une fois le serveur lancé. Sélectionnez **Arrêter le Server** pour arrêter le serveur web `WebAdmin`.



## Propriétés WebAdmin

La configuration du composant `WebAdmin` est obligatoire, en particulier pour définir la [**clé d'accès**](#access-key). By default when the access key is not set, access via a URL is not allowed.

Vous pouvez configurer le composant `WebAdmin` dans la [fenêtre de configuration](#settings-dialog-box)(voir ci-dessous).

> Si vous utilisez une application 4D sans interface, vous pouvez utiliser des [arguments de *l'interface de ligne de commande*](#webadmin-headless-configuration) pour définir des paramètres de base. La définition de paramètres avancés se fait via le fichier de paramètres.


### Fenêtre de configuration

Pour ouvrir la fenêtre de configuration des paramètres d'administration web, sélectionnez **Fichier > Administration web > Paramètres...**.

![alt-text](assets/en/Admin/waMenu1.png)

La fenêtre suivante s'affiche :

![alt-text](assets/en/Admin/waSettings2.png)

#### Démarrage automatique de l'admin du serveur web

Cochez cette option pour lancer le serveur web `WebAdmin` automatiquement au démarrage de 4D ou 4D Server (voir [ci-dessus](#launching-at-startup)). Cette option n'est pas cochée par défaut.

#### Connexions HTTP sur localhost acceptées

Quand cette option est cochée, il est possible de se connecter au serveur `WebAdmin` via HTTP sur la même machine que l'application 4D. Cette option est activée par défaut.

**Notes :**
- Les connections HTTP autres que sur localhost ne sont jamais acceptées.
- Même si cette option est activée, quand [HTTPS Accepté](#accept-https) est activé et que la configuration TLS est valide, les connections sur localhost se font via HTTPS.


#### Port HTTP

Numéro de port utilisé pour les connexions au serveur web `WebAdmin` via HTTP quand **Connexions HTTP sur localhost acceptées** est activé. La valeur par défaut est 7080.


#### HTTPS Accepté

Lorsque cette option est activé, vous pourrez vous connecter au serveur web `WebAdmin` via HTTPS. Cette option est activée par défaut.

#### Port HTTPS

Numéro de port utilisé pour les connexions au serveur web `WebAdmin` via HTTPS quand **HTTPS accepté** est activé. La valeur par défaut est 7443.


#### Chemin du dossier de certificat

Chemin du dossier qui contient les fichiers de certificat TLS. By default, the certificate folder path is empty and 4D or 4D Server uses the certificate files embedded in the 4D application (custom certificates must be stored next to the project folder).

#### Mode du debug log

Status or format of the HTTP request log file (HTTPDebugLog_*nn*.txt, stored in the "Logs" folder of the application -- *nn* is the file number). Les options suivantes sont disponibles :

- **Disable** (default)
- **With all body parts** - enabled with body parts in response and request
- **Without body parts** - enabled without body parts (body size is provided)
- **With request body** - enabled with body part in request only
- **With response body** - enabled with body part in response only

#### Clé d'accès

Defining an access key is mandatory to unlock access to the `WebAdmin` web server through a URL (access via a 4D menu command does not require an access key). When no access key is defined, no web client is allowed to connect through a URL to a web administration interface like the [Data Explorer page](dataExplorer.md). An error page is returned in case of connection request:

![alt-text](assets/en/Admin/accessKey.png)

An access key is similar to a password but not associated to a login.

- To define a new access key: click the **Define** button, enter the access key string in the dialog box and click **OK**. The button label becomes **Modify**.
- To modify the access key: click the **Modify** button, enter the new access key string in the dialog box and click **OK**.
- To delete the access key: click the **Modify** button, let the access key area empty and click **OK**.


## WebAdmin Headless Configuration

All [WebAdmin settings](#webadmin-settings) are stored in the `WebAdmin.4DSettings` file. There is one default `WebAdmin.4DSettings` file per 4D and 4D Server application, so that it is possible to deploy multiple applications on the same host machine.

When running a 4D or 4D Server application headless, you can set and use the default `WebAdmin.4DSettings` file, or designate a custom `.4DSettings` file.

To set the file contents, you can use the [WebAdmin settings dialog](#settings-dialog-box) of the 4D application with interface and run it headless afterwards. The default `WebAdmin.4DSettings` file is then used.

Or, you can set a custom `.4DSettings` file (xml format) and use it instead of the default file. Plusieurs arguments dédiés sont disponibles dans [l'interface de ligne de commande](cli.md) pour prendre en charge cette fonctionnalité.

> The access key is not stored in clear in the `.4DSettings` file.

Exemple :

```
"%HOMEPATH%\Desktop\4D Server.exe" MyApp.4DLink --webadmin-access-key 
    "my Fabulous AccessKey" --webadmin-auto-start true   
    --webadmin-store-settings

```


## Authentication and Session

- Lorsqu'on accède à une page de gestion web en entrant une URL et sans identification préalable, une authentification est nécessaire. The user must enter the [access key](#access-key) in an authentication dialog box. If the access key was not defined in the `WebAdmin` settings, no access via URL is possible.

- When a web management page is accessed directly from a 4D or 4D Server menu item (such as **Records > Data Explorer** or **Window > Data Explorer** (4D Server)), access is granted without authentication, the user is automatically authenticated.

Once the access is granted, a web [session](WebServer/sessions.md) with the "WebAdmin" privilege is created on the 4D application. As long as the current session has "WebAdmin" privilege, the `WebAdmin` component delivers requested pages.


