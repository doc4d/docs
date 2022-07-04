---
id: FileHandleClass
title: FileHandle
---

The `FileHandle` class has functions that allow you to sequentially read from or append contents to an opened [`File`](FileClass) object. A file handle can access any part of a document. 

File handle objects are created with the [`file.open()`](FileClass#open) function. 

> To read or write a whole document at once, you might consider usign the [file.getText()](FileClass.md#gettext) and [file.setText()](FileClass.md#settext) functions. 

### Example

```code4d
var $f : 4D.File
var $fhandle : 4D.FileHandle
$f:=Folder(Database folder).file("example.txt") 

//reading line by line
$lines:=New collection
$fhandle:=$f.open("read")
While (Not($fhandle.eof))
	$lines.push($fhandle.readLine())
End while

//Writing line by line
$fhandle:=$f.open("write")
$fhandle.offset:=$fhandle.getSize()
$text:="Hello World"
For ($line; 1; 4)
    $fhandle.writeLine($text+String($line))
End for

//Specifying a stop character, reading a file content until the stop character is reached
$stopChar:=Char(Double quote)
$fhandle:=$f.open("read")
$text:=$fhandle.readText($stopChar)


//Append to file
$fhandle:=$f.open("append")
$fhandle.writeLine($text+String($line))//Will add this at the end of the file content
```

### FileHandle object

||
|---|
|[<!-- INCLUDE #FileHandleClass.eof.Syntax -->](#eof)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.eof.Summary -->|
|[<!-- INCLUDE #FileHandleClass.getSize().Syntax -->](#getsize)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.getSize().Summary -->|
|[<!-- INCLUDE #FileHandleClass.readBlob().Syntax -->](#readblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.readBlob().Summary -->|
|[<!-- INCLUDE #FileHandleClass.readLine().Syntax -->](#readline)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.readLine().Summary -->|
|[<!-- INCLUDE #FileHandleClass.readText().Syntax -->](#readtext)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.readText().Summary -->|
|[<!-- INCLUDE #FileHandleClass.setSize().Syntax -->](#setsize)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.setSize().Summary -->|
|[<!-- INCLUDE #FileHandleClass.writeBlob().Syntax -->](#writeblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.writeBlob().Summary -->|
|[<!-- INCLUDE #FileHandleClass.writeLine().Syntax -->](#writeline)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.writeLine().Summary -->|
|[<!-- INCLUDE #FileHandleClass.writeText().Syntax -->](#writetext)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileHandleClass.writeText().Summary -->|




<!-- REF FileHandleClass.eof.Desc -->
## .eof

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R7|Added
</details>

<!-- REF #FileHandleClass.eof.Syntax -->
**.eof** : Boolean<!-- END REF -->


#### Description

The `.eof` property returns <!-- REF #FileHandleClass.eof.Summary -->True is the `offset` reached the end of the file, and False otherwise<!-- END REF -->.

This property is **read-only**. 

<!-- END REF -->



<!-- REF FileHandleClass.getSize().Desc -->
## .getSize()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R7|Added
</details>

<!--REF #FileHandleClass.getSize().Syntax -->
**.getSize()** : Real <!-- END REF -->

<!--REF #FileHandleClass.getSize().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|Real|<-|Size of the document in bytes|
<!-- END REF -->

#### Description

The `.getSize()` function <!-- REF #FileHandleClass.getSize().Summary -->returns the current size of the document, expressed in bytes<!-- END REF -->.

> This function returns the same value as the ([.size](FileClass#size)) property of the `File` class.

#### See also

[.setSize()](#setsize), [file.size](FileClass#size)

<!-- END REF -->


<!-- REF FileHandleClass.offset.Desc -->
## .offset

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R7|Added
</details>

<!-- REF #FileHandleClass.offset.Syntax -->
**.offset** : Real<!-- END REF -->


#### Description

The `.offset` property returns <!-- REF #FileHandleClass.offset.Summary -->the current offset of the data stream (position inside the document)<!-- END REF -->. The offset value is automatically updated after read and write operations.

Setting the `.offset` will change its value.
 
- If the passed value is negative, the `.offset` is set to the start (zero). 
- If the passed value is higher than the size of the file,  the `.offset` is set to the end of the file (size of file).

This property is **read/write**. 

<!-- END REF -->



<!-- REF FileHandleClass.readBlob().Desc -->
## .readBlob()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R7|Added
</details>

<!--REF #FileHandleClass.readBlob().Syntax -->
**.readBlob**( *bytes* : Real ) : [4D.Blob](BlobClass) <!-- END REF -->

<!--REF #FileHandleClass.readBlob().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|*bytes*|Real|->|Number of bytes to be read|
|Result|[4D.Blob](BlobClass)|<-|Bytes read from the file|
<!-- END REF -->

#### Description

The `.readBlob()` function <!-- REF #FileHandleClass.readBlob().Summary -->returns a blob a *bytes* size from the file, starting from the current position <!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte read.

#### See also

[.writeBlob()](#writeblob)

<!-- END REF -->




<!-- REF FileHandleClass.readLine().Desc -->
## .readLine()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R7|Added
</details>

<!--REF #FileHandleClass.readLine().Syntax -->
**.readLine()** : Text <!-- END REF -->

<!--REF #FileHandleClass.readLine().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|Text|<-|Line of text|
<!-- END REF -->

#### Description

The `.readLine()` function <!-- REF #FileHandleClass.readLine().Summary -->returns a line of text from the current position until an end-of-line delimiter is encountered or the end of the document is reached<!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated.

#### See also

[.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->


<!-- REF FileHandleClass.readText().Desc -->
## .readText()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R7|Added
</details>

<!--REF #FileHandleClass.readText().Syntax -->
**.readText**( *stopChar* : Text ) : Text <!-- END REF -->

<!--REF #FileHandleClass.readText().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|*stopChar*|Text|->|Character(s) at which to stop reading|
|Result|Text|<-|Text from the file|
<!-- END REF -->

#### Description

The `.readText()` function <!-- REF #FileHandleClass.readText().Summary -->returns text from the file, starting from the current position until the first *stopChar* string is encountered<!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated after the *stopChar* string.

#### See also

[.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->


<!-- REF FileHandleClass.setSize().Desc -->

## .setSize()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R7|Added
</details>

<!--REF #FileHandleClass.setSize().Syntax -->  
**.setSize**( *size* : Real ) <!-- END REF -->

<!--REF #FileHandleClass.setSize().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|setSize|Real|->|New size of the document in bytes|
<!-- END REF -->

#### Description

The `.setSize()` function <!-- REF #FileHandleClass.setSize().Summary -->sets a new *size* in bytes for the document<!-- END REF -->.

If the *size* value is less than the current document size, the document content is truncated from the beginning to get the new *size* .  
If the *size* value is greater than the current document size, spaces characters (" ") are added at the end of the document until the requested *size* is reached.

#### See also

[.getSize()](#getsize), [file.size](FileClass#size)

<!-- END REF -->


<!-- REF FileHandleClass.writeBlob().Desc -->
## .writeBlob()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R7|Added
</details>

<!--REF #FileHandleClass.writeBlob().Syntax -->
**.writeBlob**( *blob* : 4D.Blob ) <!-- END REF -->

<!--REF #FileHandleClass.writeBlob().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|*blob*|[4D.Blob](BlobClass)|->|Blob to write in the file|
<!-- END REF -->

#### Description

The `.writeBlob()` function <!-- REF #FileHandleClass.writeBlob().Summary -->writes *blob* into the file, starting from the current position <!-- END REF -->.

When this function is executed, the current position ([.offset](#offset)) is updated after the last byte written.

#### See also

[.readBlob()](#readblob)

<!-- END REF -->



<!-- REF FileHandleClass.writeLine().Desc -->
## .writeLine()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R7|Added
</details>

<!--REF #FileHandleClass.writeLine().Syntax -->
**.writeLine**( *lineOfText* : Text ) <!-- END REF -->

<!--REF #FileHandleClass.writeLine().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|*lineOfText*|Text|->|Text to write (with end-of-line delimiter)|
<!-- END REF -->

#### Description

The `.writeLine()` function <!-- REF #FileHandleClass.writeLine().Summary -->writes *lineOfText* content at the current position and inserts an end-of-line delimiter<!-- END REF --> (unlike the [.writeText()](#writetext) function).

When this function is executed, the current position ([.offset](#offset)) is updated after the end-of-line delimiter.

#### See also

[.readLine()](#readline), [.writeText()](#writetext)

<!-- END REF -->


<!-- REF FileHandleClass.writeText().Desc -->
## .writeText()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R7|Added
</details>

<!--REF #FileHandleClass.writeText().Syntax -->
**.writeText**( *lineOfText* : Text )<!-- END REF -->

<!--REF #FileHandleClass.writeText().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|*lineOfText*|Text|->|Text to write (without end-of-line delimiter)|
<!-- END REF -->

#### Description

The `.writeText()` function <!-- REF #FileHandleClass.writeText().Summary -->writes *lineOfText* content at the current position and does not insert an end-of-line delimiter<!-- END REF --> (unlike the [.writeLine()](#writeline) function).

When this function is executed, the current position ([.offset](#offset)) is updated after the next end-of-line delimiter.

#### See also

[.readText()](#readtext), [.writeLine()](#writeline)

<!-- END REF -->



















<!-- REF file.createAlias().Desc -->
## .createAlias()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


<!--REF #FileClass.createAlias().Syntax -->
**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->

<!--REF #FileClass.createAlias().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|destinationFolder|4D.Folder|->|Destination folder for the alias or shortcut|
|aliasName|Text|->|Name of the alias or shortcut|
|aliasType|Integer|->|Type of the alias link|
|Result|4D.File|<-|Alias or shortcut file reference|
<!-- END REF -->


#### Description

The `.createAlias()` function <!-- REF #FileClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the file with the specified *aliasName* name in the folder designated by the *destinationFolder* object.

Pass the name of the alias or shortcut to create in the *aliasName* parameter.

By default on macOS, the function creates a standard alias. You can also create a symbolic link by using the *aliasType* parameter. The following constants are available:

|Constant|Value|Comment|
|--------|-----|-------|
|`fk alias link`|0|Alias link (default)|
|`fk symbolic link`|1|Symbolic link (macOS only)|

On Windows, a shortcut (.lnk file) is always created (the *aliasType* parameter is ignored).


**Returned object**

A `4D.File` object with the `isAlias` property set to **true**.

#### Example

You want to create an alias to a file in your database folder:

```4d
 $myFile:=Folder(fk documents folder).file("Archives/ReadMe.txt")
 $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")
```
<!-- END REF -->




<!-- INCLUDE document.creationDate.Desc -->




<!-- INCLUDE document.creationTime.Desc -->



<!-- REF file.delete().Desc -->
## .delete()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


<!--REF #FileClass.delete().Syntax -->
**.delete( )**<!-- END REF -->


<!-- REF #FileClass.delete().Params -->
|Parameter|Type||Description|
|---|----|---|---|
| |  ||Does not require any parameters|
<!-- END REF -->


#### Description

The `.delete()` function <!-- REF #FileClass.delete().Summary -->deletes the file<!-- END REF -->.

If the file is currently open, an error is generated.

If the file does not exist on disk, the function does nothing (no error is generated).

>**WARNING**: `.delete( )` can delete any file on a disk. This includes documents created with other applications, as well as the applications themselves. `.delete( )` should be used with extreme caution. Deleting a file is a permanent operation and cannot be undone.

#### Example

You want to delete a specific file in the database folder:

```4d
 $tempo:=File("/PACKAGE/SpecialPrefs/"+Current user+".prefs")
 If($tempo.exists)
    $tempo.delete()
    ALERT("User preference file deleted.")
 End if
```
<!-- END REF -->




<!-- INCLUDE document.exists.Desc -->




<!-- INCLUDE document.extension.Desc -->




<!-- INCLUDE document.fullName.Desc -->


<!-- REF file.getAppInfo().Desc -->
## .getAppInfo()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19|Added
</details>

<!--REF #FileClass.getAppInfo().Syntax -->
**.getAppInfo**() : Object<!-- END REF -->

<!--REF #FileClass.getAppInfo().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|Result|Object|<-|Contents of .exe/.dll version resource or .plist file|
<!-- END REF -->


#### Description

The `.getAppInfo()` function <!-- REF #FileClass.getAppInfo().Summary -->returns the contents of a **.exe**, **.dll** or **.plist** file information as an object<!-- END REF -->.

The function must be used with an existing .exe, .dll or .plist file. If the file does not exist on disk or is not a valid .exe, .dll or .plist file, the function returns an empty object (no error is generated). 

> The function only supports .plist files in xml format (text-based). An error is returned if it is used with a .plist file in binary format.  

**Returned object with a .exe or .dll file**

> Reading a .exe or .dll is only possible on Windows.

All property values are Text.

|Property|Type|
|---|---|
|InternalName|Text|
|ProductName|Text|
|CompanyName|Text|
|LegalCopyright|Text|
|ProductVersion|Text|
|FileDescription|Text|
|FileVersion|Text|
|OriginalFilename|Text|

**Returned object with a .plist file**

The xml file contents is parsed and keys are returned as properties of the object, preserving their types (text, boolean, number). `.plist dict` is returned as a JSON object and `.plist array` is returned as a JSON array.

#### Example

```4d
	// display copyright info of application .exe file (windows)
var $exeFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=$exeFile.getAppInfo()
ALERT($info.LegalCopyright)

  // display copyright info of an info.plist (any platform)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=$infoPlistFile.getAppInfo()
ALERT($info.Copyright)
```

#### See also

[.setAppInfo()](#setappinfo)

<!-- END REF -->


<!-- INCLUDE document.getContent().Desc -->




<!-- INCLUDE document.getIcon().Desc -->


<!-- INCLUDE document.getText().Desc -->




<!-- INCLUDE document.hidden.Desc -->



<!-- INCLUDE document.isAlias.Desc -->



<!-- INCLUDE document.isFile.Desc -->




<!-- INCLUDE document.isFolder.Desc -->




<!-- INCLUDE document.isWritable.Desc -->




<!-- INCLUDE document.modificationDate.Desc -->




<!-- INCLUDE document.modificationTime.Desc -->




<!-- REF file.moveTo().Desc -->
## .moveTo()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


<!--REF #FileClass.moveTo().Syntax -->
**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File<!-- END REF -->

<!--REF #FileClass.moveTo().Params -->
|Parameter|Type||Description|
|---|----|---|---|
|destinationFolder|4D.Folder|->|Destination folder|
|newName|Text|->|Full name for the moved file|
|Result|4D.File|<-|Moved file|
<!-- END REF -->


#### Description

The `.moveTo()` function <!-- REF #FileClass.moveTo().Summary -->moves or renames the `File` object into the specified *destinationFolder*<!-- END REF -->.

The *destinationFolder* must exist on disk, otherwise an error is generated.  

By default, the file retains its name when moved. If you want to rename the moved file, pass the new full name in the *newName* parameter. The new name must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned.


**Returned object**

The moved `File` object.

#### Example


```4d
$DocFolder:=Folder(fk documents folder)
$myFile:=$DocFolder.file("Current/Infos.txt")
$myFile.moveTo($DocFolder.folder("Archives");"Infos_old.txt")
```
<!-- END REF -->




<!-- INCLUDE document.name.Desc -->



<!-- INCLUDE document.original.Desc -->



<!-- INCLUDE document.parent.Desc -->



<!-- INCLUDE document.path.Desc -->



<!-- INCLUDE document.platformPath.Desc -->



<!-- REF file.rename().Desc -->
## .rename()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


<!--REF #FileClass.rename().Syntax -->
**.rename**( *newName* : Text ) : 4D.File<!-- END REF -->

<!--REF #FileClass.rename().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|newName|Text|->|New full name for the file|
|Result|4D.File|<-|Renamed file|
<!-- END REF -->

#### Description

The `.rename()` function <!-- REF #FileClass.rename().Summary -->renames the file with the name you passed in *newName* and returns the renamed `File` object<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.

Note that the function modifies the full name of the file, i.e. if you do not pass an extension in *newName*, the file will have a name without an extension.


**Returned object**

The renamed `File` object.

#### Example

You want to rename "ReadMe.txt" in "ReadMe_new.txt":

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```
<!-- END REF -->


<!-- REF file.setAppInfo().Desc -->
## .setAppInfo()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19|Added
</details>

<!--REF #FileClass.setAppInfo().Syntax -->
**.setAppInfo**( *info* : Object )<!-- END REF -->

<!--REF #FileClass.setAppInfo().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|info|Object|->|Properties to write in .exe/.dll version resource or .plist file|
<!-- END REF -->


#### Description

The `.setAppInfo()` function <!-- REF #FileClass.setAppInfo().Summary -->writes the *info* properties as information contents of a **.exe**, **.dll** or **.plist** file<!-- END REF -->.

The function must be used with an existing .exe, .dll or .plist file. If the file does not exist on disk or is not a valid .exe, .dll or .plist file, the function does nothing (no error is generated).

> The function only supports .plist files in xml format (text-based). An error is returned if it is used with a .plist file in binary format.

***info* parameter object with a .exe or .dll file**

> Writing a .exe or .dll file information is only possible on Windows.

Each valid property set in the *info* object parameter is written in the version resource of the .exe or .dll file. Available properties are (any other property will be ignored):

|Property|Type|
|---|---|
|InternalName|Text|
|ProductName|Text|
|CompanyName|Text|
|LegalCopyright|Text|
|ProductVersion|Text|
|FileDescription|Text|
|FileVersion|Text|
|OriginalFilename|Text|

If you pass a null or empty text as value, an empty string is written in the property. If you pass a value type different from text, it is stringified.


***info* parameter object with a .plist file**

Each valid property set in the *info* object parameter is written in the .plist file as a key. Any key name is accepted. Value types are preserved when possible.

If a key set in the *info* parameter is already defined in the .plist file, its value is updated while keeping its original type. Other existing keys in the .plist file are left untouched.  

> To define a Date type value, the format to use is a json timestamp string formated in ISO UTC without milliseconds ("2003-02-01T01:02:03Z") like in the Xcode plist editor.

#### Example

```4d
  // set copyright and version of a .exe file (Windows)
var $exeFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=New object
$info.LegalCopyright:="Copyright 4D 2021"
$info.ProductVersion:="1.0.0"
$exeFile.setAppInfo($info)
```

```4d
  // set some keys in an info.plist file (all platforms)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=New object
$info.Copyright:="Copyright 4D 2021" //text
$info.ProductVersion:=12 //integer
$info.ShipmentDate:="2021-04-22T06:00:00Z" //timestamp
$infoPlistFile.setAppInfo($info)
```

#### See also

[.getAppInfo()](#getappinfo)

<!-- REF file.setContent().Desc -->
## .setContent()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added
</details>


<!--REF #FileClass.setContent().Syntax -->
**.setContent** ( *content* : Blob ) <!-- END REF -->

<!--REF #FileClass.setContent().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|content|BLOB|->|New contents for the file|
<!-- END REF -->


#### Description

The `.setContent( )` function <!-- REF #FileClass.setContent().Summary -->rewrites the entire content of the file using the data stored in the *content* BLOB<!-- END REF -->. For information on BLOBs, please refer to the [BLOB](Concepts/dt_blob.md) section.


#### Example

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```
<!-- END REF -->





<!-- REF file.setText().Desc -->
## .setText()


<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R3|Default for new projects: no BOM and (macOS) LF for EOL|
|v17 R5|Added|
</details>


<!--REF #FileClass.setText().Syntax -->
**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } ) <!-- END REF -->


<!--REF #FileClass.setText().Params -->
|Parameter|Type||Description|
|---------|----|---|--------|
|text|Text|->|Text to store in the file|
|charSetName|Text|->|Name of character set|
|charSetNum|Integer|->|Number of character set|
|breakMode|Integer|->|Processing mode for line breaks|<!-- END REF -->

#### Description

The `.setText()` function <!-- REF #FileClass.setText().Summary -->writes *text* as the new contents of the file<!-- END REF -->.

If the file referenced in the `File` object does not exist on the disk, it is created by the function. When the file already exists on the disk, its prior contents are erased, except if it is already open, in which case, its contents are locked and an error is generated.

In *text*, pass the text to write to the file. It can be a literal ("my text"), or a 4D text field or variable.

Optionally, you can designate the character set to be used for writing the contents. You can pass either:

- in *charSetName*, a string containing the standard set name (for example "ISO-8859-1" or "UTF-8"),
- or in *charSetNum*, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.

If a Byte Order Mark (BOM) exists for the character set, 4D inserts it into the file unless the character set used contains the suffix "-no-bom" (e.g. "UTF-8-no-bom"). If you do not specify a character set, by default 4D uses the "UTF-8" character set without BOM.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters before saving them in the file. The following constants, found in the **System Documents** theme, are available:

|Constant|Value|Comment|
|--------|-----|-------|
|`Document unchanged`|0|No processing|
|`Document with native format`|1|(Default) Line breaks are converted to the native format of the operating system: LF (line feed) on macOS, CRLF (carriage return + line feed) on Windows|
|`Document with CRLF`|2|Line breaks are converted to CRLF (carriage return + line feed), the default Windows format|
|`Document with CR`|3|Line breaks are converted to CR (carriage return), the default Classic Mac OS format|
|`Document with LF`|4|Line breaks are converted to LF (line feed), the default Unix and macOS format|

By default, when you omit the *breakMode* parameter, line breaks are processed in native mode (1).

> **Compatibility Note**: Compatibility options are available for EOL and BOM management. See [Compatibility page](https://doc.4d.com/4dv19R/help/title/en/page3239.html) on doc.4d.com.

#### Example

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```
<!-- END REF -->





<!-- INCLUDE document.size.Desc -->



<style> h2 { background: #d9ebff;}</style>
