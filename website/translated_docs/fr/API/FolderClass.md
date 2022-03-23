---
id: FolderClass
title: Folder
---



Les objets `Folder` sont créés avec la commande [`Folder`](#folder). Ils contiennent des références à des dossiers qui peuvent exister réellement ou non sur le disque. Par exemple, lorsque vous exécutez la commande `Folder` pour créer un nouveau dossier, un objet `Folder` valide est créé mais rien n'est réellement stocké sur le disque jusqu'à ce que vous appeliez la fonction [`folder.create( )`](#create-).

### Exemple

L'exemple suivant crée un dossier "JohnSmith" :

```code4d
Form.curfolder:=Folder(fk database folder)
Form.curfolder:=Folder("C:\\Users\\JohnSmith\\";fk platform path)
```

### Objet Folder

|                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #directory.copyTo().Syntax -->](#copyto)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.copyTo().Summary -->|
| [<!-- INCLUDE #FolderClass.create().Syntax -->](#create)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.create().Summary -->|
| [<!-- INCLUDE #FolderClass.createAlias().Syntax -->](#createalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.createAlias().Summary --> |
| [<!-- INCLUDE #directory.creationDate.Syntax -->](#creationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.creationDate.Summary -->|
| [<!-- INCLUDE #directory.creationTime.Syntax -->](#creationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.creationTime.Summary -->|
| [<!-- INCLUDE #FolderClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.delete().Summary -->|
| [<!-- INCLUDE #directory.exists.Syntax -->](#exists)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.exists.Summary -->|
| [<!-- INCLUDE #directory.extension.Syntax -->](#extension)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.extension.Summary -->|
| [<!-- INCLUDE #directory.fullName.Syntax -->](#fullname)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.fullName.Summary -->|
| [<!-- INCLUDE #directory.getIcon().Syntax -->](#geticon)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.getIcon().Summary -->|
| [<!-- INCLUDE #directory.hidden.Syntax -->](#hidden)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.hidden.Summary -->|
| [<!-- INCLUDE #directory.isAlias.Syntax -->](#isalias)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isAlias.Summary -->|
| [<!-- INCLUDE #directory.isFile.Syntax -->](#isfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFile.Summary -->|
| [<!-- INCLUDE #directory.isFolder.Syntax -->](#isfolder)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isFolder.Summary -->|
| [<!-- INCLUDE #directory.isPackage.Syntax -->](#ispackage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.isPackage.Summary -->|
| [<!-- INCLUDE #directory.modificationDate.Syntax -->](#modificationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationDate.Summary -->|
| [<!-- INCLUDE #directory.modificationTime.Syntax -->](#modificationtime)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.modificationTime.Summary -->|
| [<!-- INCLUDE #directory.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.name.Summary -->|
| [<!-- INCLUDE #directory.original.Syntax -->](#original)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.original.Summary -->|
| [<!-- INCLUDE #directory.parent.Syntax -->](#parent)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.parent.Summary -->|
| [<!-- INCLUDE #directory.path.Syntax -->](#path)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.path.Summary -->|
| [<!-- INCLUDE #directory.platformPath.Syntax -->](#platformpath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #directory.platformPath.Summary -->|
| [<!-- INCLUDE #FolderClass.moveTo().Syntax -->](#moveto)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.moveTo().Summary -->|
| [<!-- INCLUDE #FolderClass.rename().Syntax -->](#rename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FolderClass.rename().Summary -->|



## Folder

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!-- REF #_command_.Folder.Syntax -->
**Folder** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.Folder<br>**Folder** ( *folderConstant* : Integer { ; *\** } ) : 4D.Folder<!-- END REF -->


<!-- REF FolderClass.Folder.Params -->
| Paramètres     | Type      |    | Description                                        |
| -------------- | --------- |:--:| -------------------------------------------------- |
| path           | Text      | -> | Chemin du dossier                                  |
| folderConstant | Integer   | -> | Constante de dossier 4D                            |
| pathType       | Integer   | -> | `fk posix path` (par défaut) ou `fk platform path` |
| *              |           | -> | * pour retourner le dossier de la base hôte        |
| Résultat       | 4D.Folder | <- | Nouvel objet dossier                               |
<!-- END REF -->


#### Description

La commande `Folder` <!-- REF #_command_.Folder.Summary -->crée et retourne un nouvel objet de type `4D.Folder`<!-- END REF -->. La commande accepte deux syntaxes :

**Folder ( path { ; pathType } { ; \* } )**

Dans le paramètre *path*, passez un chemin de dossier. Vous pouvez utiliser une chaine personnalisée ou un "filesystem" (ex : "/DATA").

> Seuls les noms de chemin absolus sont pris en charge par la commande `Folder`.

Par défaut, 4D attend un chemin exprimé avec la syntaxe POSIX. Si vous travaillez avec des chemins de plate-forme (Windows ou macOS), vous devez les déclarer à l'aide du paramètre *pathType*. Les constantes suivantes sont disponibles :

| Constante        | Valeur | Commentaire                                                                                               |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------- |
| fk platform path | 1      | Chemin exprimé dans une syntaxe spécifique à la plate-forme (obligatoire en cas de chemin de plate-forme) |
| fk posix path    | 0      | Chemin exprimé avec la syntaxe POSIX (par défaut)                                                         |

**Folder ( folderConstant { ; \* } )**

Dans le paramètre *folderConstant*, passez un dossier 4D interne ou un dossier système, à l'aide d'une des constantes suivantes :

| Constante                  | Valeur | Commentaire                                                                                                                 |
| -------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| fk applications folder     | 116    |                                                                                                                             |
| fk data folder             | 9      | Filesystem associé : "/DATA"                                                                                                |
| fk database folder         | 4      | Filesystem associé : "/PACKAGE"                                                                                             |
| fk desktop folder          | 115    |                                                                                                                             |
| fk documents folder        | 117    | Dossier Documents de l'utilisateur                                                                                          |
| fk licenses folder         | 1      | Dossier contenant les fichiers de licence 4D de la machine                                                                  |
| fk logs folder             | 7      | Filesystem associé : "/LOGS"                                                                                                |
| fk mobileApps folder       | 10     |                                                                                                                             |
| fk remote database folder  | 3      | Dossier de la base de données 4D créé sur chaque machine 4D distante                                                        |
| fk resources folder        | 6      | Filesystem associé : "/RESOURCES"                                                                                           |
| fk system folder           | 100    |                                                                                                                             |
| fk user preferences folder | 0      | Dossier 4D qui stocke les préférences utilisateur dans le <userName> répertoire de l'utilisateur.                           |
| fk web root folder         | 8      | Dossier racine web courant du projet : "/PACKAGE/chemin" si son emplacement se trouve dans le package, sinon chemin complet |

Si la commande est appelée à partir d'un composant, passez le paramètre optionnel * pour lire le chemin de la base hôte. Sinon, si vous omettez le paramètre *, un objet null est systématiquement retourné.


## 4D.Folder.new()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |
</details>

<!-- REF #4D.Folder.new().Syntax -->**4D.Folder.new** ( *path* : Text { ; *pathType* : Integer }{ ; *\** } ) : 4D.Folder<br>**4D.Folder.new** ( *folderConstant* : Integer { ; *\** } ) : 4D.Folder<!-- END REF -->


#### Description

The `4D.Folder.new()` function <!-- REF #4D.Folder.new().Summary -->creates and returns a new object of the `4D.Folder` type<!-- END REF -->. It is identical to the [`Folder`](#folder) command (shortcut).

> Il est recommandé d'utiliser la commande raccourci [`Folder`](#folder) au lieu de `4D.Folder.new()`. 


<!-- INCLUDE directory.copyTo().Desc -->



<!-- REF folder.create().Desc -->
## .create()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>



<!--REF #FolderClass.create().Syntax -->
**.create()** : Boolean<!-- END REF -->

<!--REF #FolderClass.create().Params -->
| Paramètres | Type    |    | Description                                                  |
| ---------- | ------- | -- | ------------------------------------------------------------ |
| Résultat   | Booléen | <- | True if the folder was created successfully, false otherwise |
<!-- END REF -->



#### Description

The `.create()` function <!-- REF #FolderClass.create().Summary -->creates a folder on disk according to the properties of the `Folder` object<!-- END REF -->.

Le cas échéant, la fonction crée la hiérarchie du dossier en se basant sur la description des propriétés [platformPath](#platformpath) ou [path](#path). If the folder already exists on disk, the function does nothing (no error is thrown) and returns false.

**Valeur retournée**

*   **Vrai** si le dossier est créé avec succès ;
*   **Faux** si un dossier du même nom existe déjà ou si une erreur s'est produite.

#### Exemple 1

Create an empty folder in the database folder:

```4d
var $created : Boolean
$created:=Folder("/PACKAGE/SpecialPrefs").create()
```

#### Exemple 2

Creation of the "/Archives2019/January/" folder in the database folder:

```4d
$newFolder:=Folder("/PACKAGE/Archives2019/January")
If($newFolder.create())
    ALERT("The "+$newFolder.name+" folder was created.")
Else
    ALERT("Impossible to create a "+$newFolder.name+" folder.")
End if
```

<!-- END REF -->




<!-- REF folder.createAlias().Desc -->
## .createAlias()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>



<!--REF #FolderClass.createAlias().Syntax -->
**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->


<!--REF #FolderClass.createAlias().Params -->
| Paramètres        | Type      |    | Description                                         |
| ----------------- | --------- | -- | --------------------------------------------------- |
| destinationFolder | 4D.Folder | -> | Dossier de destination pour l'alias ou le raccourci |
| aliasName         | Text      | -> | Nom de l'alias ou du raccourci                      |
| aliasType         | Integer   | -> | Type de lien de l'alias                             |
| Résultat          | 4D.File   | <- | Alias or shortcut reference                         |
<!-- END REF -->


#### Description

The `.createAlias()` function <!-- REF #FolderClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the folder with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Passez le nom de l'alias ou du raccourci à créer dans le paramètre *aliasName*.

Par défaut sur macOS, la fonction crée un alias standard. Vous pouvez également créer un lien symbolique à l'aide du paramètre *aliasType*. Les constantes suivantes sont disponibles :

| Constante          | Valeur | Commentaire                               |
| ------------------ | ------ | ----------------------------------------- |
| `fk alias link`    | 0      | Lien alias (macOS uniquement)(par défaut) |
| `fk symbolic link` | 1      | Lien symbolique (macOS uniquement)        |

Sur Windows, un raccourci (fichier .lnk) est toujours créé (le paramètre *aliasType* est ignoré).

**Objet retourné**

Un objet `4D.File` avec la propriété `isAlias` mise à **true**.

#### Exemple

You want to create an alias to an archive folder in your database folder:

```4d
$myFolder:=Folder("C:\\Documents\\Archives\\2019\\January";fk platform path)
$aliasFile:=$myFolder.createAlias(Folder("/PACKAGE");"Jan2019")
```
<!-- END REF -->


<!-- INCLUDE directory.creationDate.Desc -->


<!-- INCLUDE directory.creationTime.Desc -->



<!-- REF folder.delete().Desc -->
## .delete()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>



<!--REF #FolderClass.delete().Syntax -->
**.delete**( { *option* : Integer } )<!-- END REF -->


<!-- REF #FolderClass.delete().Params -->
| Paramètres | Type    |    | Description            |
| ---------- | ------- | -- | ---------------------- |
| option     | Integer | -> | Folder deletion option |
<!-- END REF -->



#### Description

The `.delete()` function <!-- REF #FolderClass.delete().Summary -->deletes the folder<!-- END REF -->.

By default, for security reasons, if you omit the option parameter, `.delete( )` only allows empty folders to be deleted. If you want the command to be able to delete folders that are not empty, you must use the option parameter with one of the following constants:

| Constante              | Valeur | Commentaire                                      |
| ---------------------- | ------ | ------------------------------------------------ |
| `Delete only if empty` | 0      | Deletes folder only when it is empty             |
| `Delete with contents` | 1      | Deletes folder along with everything it contains |

When `Delete only if empty` is passed or if you omit the option parameter:

*   Le dossier n'est supprimé que s'il est vide ; sinon, la commande ne fait rien et une erreur -47 est générée.
*   Si le dossier n'existe pas, l'erreur -120 est générée.

When `Delete with contents` is passed:

*   Le dossier, ainsi que tout son contenu, est supprimé. **Attention** : Même si ce dossier et/ou son contenu sont verrouillés ou définis comme étant en lecture seule, si l'utilisateur dispose des droits d'accès appropriés, le dossier (et son contenu) est supprimé malgré tout.
*   Si ce dossier, ou l'un des fichiers qu'il contient, ne peut être supprimé, la suppression est interrompue dès que le premier élément inaccessible est détecté, et une erreur(*) est retournée. Dans ce cas, le dossier ne peut être que partiellement supprimé. Lorsque la suppression est interrompue, vous pouvez utiliser la commande `GET LAST ERROR STACK` pour récupérer le nom et le chemin d'accès du dossier incriminé.
*   Si le dossier n'existe pas, la commande ne fait rien et aucune erreur n'est retournée. (*) Windows : -54 (Tentative d'ouverture en écriture d'un fichier verrouillé) macOS : -45 (Le fichier est verrouillé ou le chemin d'accès n'est pas correct)

<!-- END REF -->
 
 

<!-- INCLUDE directory.exists.Desc -->



<!-- INCLUDE directory.extension.Desc -->



<!-- INCLUDE directory.file().Desc -->



<!-- INCLUDE directory.files().Desc -->



<!-- INCLUDE directory.folder().Desc -->



<!-- INCLUDE directory.folders().Desc -->



<!-- INCLUDE directory.fullName.Desc -->



<!-- INCLUDE directory.getIcon().Desc -->



<!-- INCLUDE directory.hidden.Desc -->




<!-- INCLUDE directory.isAlias.Desc -->




<!-- INCLUDE directory.isFile.Desc -->




<!-- INCLUDE directory.isFolder.Desc -->




<!-- INCLUDE directory.isPackage.Desc -->




<!-- INCLUDE directory.modificationDate.Desc -->




<!-- INCLUDE directory.modificationTime.Desc -->




<!-- REF folder.moveTo().Desc -->
## .moveTo()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>


<!--REF #FolderClass.moveTo().Syntax -->
**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.Folder<!-- END REF -->

<!--REF #FolderClass.moveTo().Params -->
| Paramètres        | Type      |    | Description                    |
| ----------------- | --------- | -- | ------------------------------ |
| destinationFolder | 4D.Folder | -> | Dossier de destination         |
| newName           | Text      | -> | Full name for the moved folder |
| Résultat          | 4D.Folder | <- | Moved folder                   |
<!-- END REF -->


#### Description

The `.moveTo( )` function <!-- REF #FolderClass.moveTo().Summary -->moves or renames the `Folder` object (source folder) into the specified *destinationFolder*<!-- END REF -->.

Le *destinationFolder* doit exister sur disque, sinon une erreur est générée.

By default, the folder retains its name when moved. If you want to rename the moved folder, pass the new full name in the *newName* parameter. Le nouveau nom doit être conforme aux règles de nommage (ex : il ne doit pas contenir de caractères tels que ":", "/", etc.), sinon une erreur est retournée.

**Objet retourné**

The moved `Folder` object.

#### Exemple

You want to move and rename a folder:

```4d
 var $tomove; $moved : Object
 $docs:=Folder(fk documents folder)
 $tomove:=$docs.folder("Pictures")
 $tomove2:=$tomove.moveTo($docs.folder("Archives");"Pic_Archives")
```
<!-- END REF -->


<!-- INCLUDE directory.name.Desc -->




<!-- INCLUDE directory.original.Desc -->




<!-- INCLUDE directory.parent.Desc -->




<!-- INCLUDE directory.path.Desc -->



<!-- INCLUDE directory.platformPath.Desc -->



<!-- REF folder.rename().Desc --> 
## .rename()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!--REF #FolderClass.rename().Syntax -->
**.rename**( *newName* : Text ) : 4D.Folder<!-- END REF -->


<!--REF #FolderClass.rename().Params -->
| Paramètres | Type      |    | Description                  |
| ---------- | --------- | -- | ---------------------------- |
| newName    | Text      | -> | New full name for the folder |
| Résultat   | 4D.Folder | <- | Renamed folder               |
<!-- END REF -->



#### Description

The `.rename()` function <!-- REF #FolderClass.rename().Summary -->renames the folder with the name you passed in *newName* and returns the renamed `Folder` object<!-- END REF -->.

Le paramètre *newName* doit être conforme aux règles de nommage (ex : il ne doit pas contenir des caractères tels que ":", "/", etc.), sinon une erreur est retournée. S'il existe déjà un fichier portant le même nom, une erreur est retournée.


**Objet retourné**

The renamed `Folder` object.

#### Exemple


```4d
 var $toRename : 4D.Folder
 $toRename:=Folder("/RESOURCES/Pictures").rename("Images")
```
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>

