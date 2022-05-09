---
id: Directory
title: Directory Class
---

## Descrição


<!-- REF directory.creationDate.Desc -->
## .creationDate

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.creationDate.Syntax -->
**.creationDate** : Date<!-- END REF -->


#### Descrição

A propriedade `.creationDate` devolve <!-- REF #directory.creationDate.Summary -->a data de criação da pasta<!-- END REF -->.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->
 
--- 
 
 <!-- REF directory.creationTime.Desc -->
## .creationTime

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.creationTime.Syntax -->
**.creationTime** : Time<!-- END REF -->



#### Descrição

A propriedade `.creationTime` devolve <!-- REF #directory.creationTime.Summary -->a hora de criação da pasta<!-- END REF --> (expressada como um número de segundos que começa em 00:00).

Essa propriedade é**apenas leitura**. 

<!-- END REF -->

---


<!-- REF directory.exists.Desc -->
## .exists

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.exists.Syntax -->
**.exists** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.exists` devolve <!-- REF #directory.exists.Summary -->true se a pasta existir no disco<!-- END REF -->, e falso em caso contrário.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->


---


<!-- REF directory.extension.Desc -->
## .extension

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.extension.Syntax -->
**.extension** : Text<!-- END REF -->


#### Descrição

A propriedade `.extension` <!-- REF #directory.extension.Summary -->devolve a extensão do nome da pasta (se houver)<!-- END REF -->. Uma extensão sempre começa com "." A propriedade devolve uma string vazia se o nome da pasta não tiver extensão.

Essa propriedade é **apenas leitura**. 

<!-- END REF -->


---

<!-- REF directory.fullName.Desc -->
## .fullName

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.fullName.Syntax -->
**.fullName** : Text<!-- END REF -->


#### Descrição

A propriedade `.fullName` <!-- REF #directory.fullName.Summary -->devolve o nome completo da pasta, incluindo sua extensão (se houver)<!-- END REF -->.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->


---

<!-- REF directory.hidden.Desc -->
## .hidden

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.hidden.Syntax -->
**.hidden** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.hidden` devolve <!-- REF #directory.hidden.Summary --> true se a pasta existir no disco ao nível do sistema<!-- END REF -->, e falso em caso contrário.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->

---


<!-- REF directory.isAlias.Desc -->
## .isAlias

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.isAlias.Syntax -->
**.isAlias** : Boolean<!-- END REF -->



#### Descrição

A propriedade `.isAlias` retorna <!-- REF #directory.isAlias.Summary -->sempre**false** para um objeto `Folder`<!-- END REF -->.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->

---

<!-- REF directory.isFile.Desc -->
## .isFile

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.isFile.Syntax -->
**.isFile** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.isFile` devolve <!-- REF #directory.isFile.Summary -->sempre **false** para uma pasta<!-- END REF -->.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->

---

<!-- REF directory.isFolder.Desc -->
## .isFolder

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.isFolder.Syntax -->
**.isFolder** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.isFolder` devolve <!-- REF #directory.isFolder.Summary -->sempre **false** para uma pasta<!-- END REF -->.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->

---

<!-- REF directory.isPackage.Desc -->
## .isPackage

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.isPackage.Syntax -->
**.isPackage** : Boolean<!-- END REF -->


#### Descrição

A propriedade `.isPackage` devolve <!-- REF #directory.isPackage.Summary -->true se a pasta for um pacote em macOS (e existir no disco)<!-- END REF -->. senão devolve false

Em Windows, `.isPackage` sempre devolve **false**.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->


---

<!-- REF directory.modificationDate.Desc -->
## .modificationDate

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.modificationDate.Syntax -->
**.modificationDate** : Date<!-- END REF -->


#### Descrição

A propriedade `.modificationDate` devolve <!-- REF #directory.modificationDate.Summary --> a data da última modificação da pasta<!-- END REF -->.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->


---

<!-- REF directory.modificationTime.Desc -->
## .modificationTime

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.modificationTime.Syntax -->
**.modificationTime** : Time<!-- END REF -->


#### Descrição

A propriedade `.modifficationTime` devolve <!-- REF #directory.modificationTime.Summary -->a hora de úlltima modificação da pasta<!-- END REF --> (expressada como um número de segundos que começa em 00:00).

Essa propriedade é**apenas leitura**. 

<!-- END REF -->

---

<!-- REF directory.name.Desc -->
## .name

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>



<!-- REF #directory.name.Syntax -->
**.name** : Text<!-- END REF -->


#### Descrição

A propriedade `.name` devolve <!-- REF #directory.name.Summary --> o nome da pasta, sem extensão (se houver)<!-- END REF -->.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->

---

<!-- REF directory.original.Desc -->
## .original

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.original.Syntax -->
**.original** : 4D.Folder<!-- END REF -->


#### Descrição

A propriedade `.original` devolve <!-- REF #directory.original.Summary -->o mesmo objeto Pasta que a Pasta<!-- END REF -->.

Essa propriedade é**apenas leitura**.
> Esta propriedade está disponible nas pastas para permitir que o código genérico processe pastas ou arquivos.

<!-- END REF -->

---


<!-- REF directory.parent.Desc -->
## .parent

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.parent.Syntax -->
**.parent** : 4D.Folder<!-- END REF -->


#### Descrição

A propriedade `.parent` devolve <!-- REF #directory.parent.Summary -->o objeto pasta pai da pasta<!-- END REF -->. Se a rota representa uma rota de sistema (por exemplo, "/DATA/"), se devolve a rota de sistema.

Se a rota não tiver um parente (raiz) o valor null é retornado.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->


---

<!-- REF directory.path.Desc -->
## .path

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.path.Syntax -->
**.path** : Text<!-- END REF -->


#### Descrição

A propriedade `.path` devolve <!-- REF #directory.path.Summary -->a rota POSIX da pasta<!-- END REF -->. Se a rota representa uma rota de arquivo (por exemplo, "/DATA/"), se devolve a rota de arquivo.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->

---

<!-- REF directory.platformPath.Desc -->
## .platformPath

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.platformPath.Syntax -->
**.platformPath** : Text<!-- END REF -->


#### Descrição

A propriedade `.platformPath` devolve <!-- REF #directory.platformPath.Summary -->a rota da pasta expressa com a sintaxe da plataforma atual<!-- END REF -->.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->


---





<!-- REF directory.copyTo().Desc -->
## .copyTo()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.copyTo().Syntax -->
**.copyTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } { ; *overwrite* : Integer } ) : 4D Folder<!-- END REF -->

<!-- REF #directory.copyTo().Params -->
| Parâmetros        | Tipo      |    | Descrição                                              |
| ----------------- | --------- |:--:| ------------------------------------------------------ |
| destinationFolder | 4D.Folder | -> | Pasta de destino                                       |
| newName           | Texto     | -> | Nome para a copia                                      |
| overwrite         | Integer   | -> | `fk overwrite` para substituir os elementos existentes |
| Resultados        | 4D.Folder | <- | Pasta ou arquivo copiado                               |
<!-- END REF -->


#### Descrição

A função `.copyTo()` <!-- REF #directory.copyTo().Summary -->copia o objeto `Folder` na *destinationFolder* especificado><!-- END REF -->.

A *destinationFolder* deve existir em disco, senão um erro é gerado.

Como padrão, a pasta é copiada com o nome da pasta original. If you want to rename the copy, pass the new name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.

If a folder with the same name already exists in the *destinationFolder*, by default 4D generates an error. You can pass the `fk overwrite` constant in the *overwrite* parameter to ignore and overwrite the existing file

| Constant       | Value | Comment                             |
| -------------- | ----- | ----------------------------------- |
| `fk overwrite` | 4     | Overwrite existing elements, if any |


**Returned value**

The copied `Folder` object.

#### Exemplo

You want to copy a Pictures *folder* from the user's Document folder to the Database folder:

```4d
var $userImages; $copiedImages : 4D.Folder
$userImages:=Folder(fk documents folder+"/Pictures/")
$copiedImages:=$userImages.copyTo(Folder(fk database folder);fk overwrite)
```
 
<!-- END REF -->

---


<!-- REF directory.file().Desc -->
## .file()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.file().Syntax -->
**.file**( *path* : Text ) : 4D.File<!-- END REF -->

<!-- REF #directory.file().Params -->
| Parameter | Type    |    | Description                          |
| --------- | ------- | -- | ------------------------------------ |
| path      | Texto   | -> | Relative POSIX file pathname         |
| Result    | 4D.File | <- | `File` object (null if invalid path) |
<!-- END REF -->

#### Description

The `.file()` function creates <!-- REF #directory.file().Summary -->a `File` object inside the `Folder` object and returns its reference<!-- END REF -->.

In *path*, pass a relative POSIX path to designate the file to return. The path will be evaluated from the parent folder as root.

**Returned value**

A `File` object or null if *path* is invalid.

#### Exemplo

```4d
var $myPDF : 4D.File
$myPDF:=Folder(fk documents folder).file("Pictures/info.pdf")
```

<!-- END REF -->

---

<!-- REF directory.files().Desc -->
## .files()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.files().Syntax -->
**.files**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.files().Params -->
| Parameter | Type    |    | Description                         |
| --------- | ------- | -- | ----------------------------------- |
| options   | Integer | -> | File list options                   |
| Result    | Coleção | <- | Collection of children file objects |
<!-- END REF -->

#### Description

The `.files()` function returns <!-- REF #directory.files().Summary -->a collection of `File` objects contained in the folder<!-- END REF -->.
> Aliases or symbolic links are not resolved.

By default, if you omit the *options* parameter, only the files at the first level of the folder are returned in the collection, as well as invisible files or folders. You can modify this by passing, in the *options* parameter, one or more of the following constants:

| Constant              | Value | Comment                                                                  |
| --------------------- | ----- | ------------------------------------------------------------------------ |
| `fk recursive`        | 1     | The collection contains files of the specified folder and its subfolders |
| `fk ignore invisible` | 8     | Invisible files are not listed                                           |

**Returned value**

Collection of `File` objects.

#### Exemplo 1

You want to know if there are invisible files in the Database folder:

```4d
 var $all; $noInvisible : Collection
 $all:=Folder(fk database folder).files()
 $noInvisible:=Folder(fk database folder).files(fk ignore invisible)
 If($all.length#$noInvisible.length)
    ALERT("Database folder contains hidden files.")
 End if
```

#### Exemplo 2

You want to get all files that are not invisible in the Documents folder:

```4d
 var $recursive : Collection
 $recursive:=Folder(fk documents folder).files(fk recursive+fk ignore invisible)
```

<!-- END REF -->

---

<!-- REF directory.folder().Desc -->
## .folder()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.folder().Syntax -->
**.folder**( *path* : Text ) : 4D.Folder<!-- END REF -->

<!-- REF #directory.folder().Params -->
| Parameter | Type      |    | Description                                    |
| --------- | --------- | -- | ---------------------------------------------- |
| path      | Texto     | -> | Relative POSIX file pathname                   |
| Result    | 4D.Folder | <- | Created folder object (null if invalid *path*) |
<!-- END REF -->

#### Description

The `.folder()` function <!-- REF #directory.folder().Summary -->creates a `Folder` object inside the parent `Folder` object and returns its reference<!-- END REF -->.

In *path*, pass a relative POSIX path to designate the folder to return. The path will be evaluated from the parent folder as root.

**Returned value**

A `Folder` object or null if *path* is invalid.

#### Exemplo

```4d
 var $mypicts : 4D.Folder
 $mypicts:=Folder(fk documents folder).folder("Pictures")
```

<!-- END REF -->

---

<!-- REF directory.folders().Desc -->
## .folders()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.folders().Syntax -->
**.folders**( { *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #directory.folders().Params -->
| Parameter | Type    |    | Description                           |
| --------- | ------- | -- | ------------------------------------- |
| options   | Integer | -> | Folder list options                   |
| Result    | Coleção | <- | Collection of children folder objects |
<!-- END REF -->

#### Description

The `.folders()` function <!-- REF #directory.folders().Summary -->returns a collection of `Folder` objects contained in the parent folder<!-- END REF -->.

By default, if you omit the *options* parameter, only the folders at the first level of the folder are returned in the collection. You can modify this by passing, in the *options* parameter, one or more of the following constants:

| Constant              | Value | Comment                                                                    |
| --------------------- | ----- | -------------------------------------------------------------------------- |
| `fk recursive`        | 1     | The collection contains folders of the specified folder and its subfolders |
| `fk ignore invisible` | 8     | Invisible folders are not listed                                           |

**Returned value**

Collection of `Folder` objects.

#### Exemplo

You want the collection of all folders and subfolders of the database folder:

```4d
 var $allFolders : Collection
 $allFolders:=Folder("/PACKAGE").folders(fk recursive)
```

<!-- END REF -->

---

<!-- REF directory.getIcon().Desc -->
## .getIcon()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R5 | Adicionado |
</details>

<!-- REF #directory.getIcon().Syntax -->
**.getIcon**( { *size* : Integer } ) : Picture<!-- END REF -->

<!-- REF #directory.getIcon().Params -->
| Parameter | Type    |    | Description                                   |
| --------- | ------- | -- | --------------------------------------------- |
| size      | Integer | -> | Side length for the returned picture (pixels) |
| Result    | Imagem  | <- | Icon                                          |
<!-- END REF -->


#### Description

The `.getIcon()` function <!-- REF #directory.getIcon().Summary -->returns the icon of the folder<!-- END REF -->.

The optional *size* parameter specifies the dimensions in pixels of the returned icon. This value actually represents the length of the side of the square containing the icon. Icons are usually defined in 32x32 pixels ("large icons") or 16x16 pixels ("small icons"). If you pass 0 or omit this parameter, the "large icon" version is returned.

If the folder does not exist on disk, a default blank icon is returned.

**Returned value**

Folder icon [picture](Concepts/dt_picture.md).

<!-- END REF -->



