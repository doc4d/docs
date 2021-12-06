---
id: SystemWorkerClass
title: SystemWorker
---

System workers allow the 4D code to call any external process (a shell command, PHP, etc.) on the same machine. System workers are called asynchronously. By using callbacks, 4D makes it possible to communicate both ways. 

The `SystemWorker` class is available from the `4D` class store.

### Example

```4d
    // Windows example to get access to the ipconfig window
var $myWinWorker : 4D.SystemWorker
$myWinWorker:= 4D.SystemWorker.new("C:\\windows\\System32\\ipconfig.exe")
$myWinWorker.wait(1000)

    // macOS example to change the permissions for a file on macOS
    // chmod is the macOS command used to modify file access
var $myMacWorker : 4D.SystemWorker
$myMacWorker:= 4D.SystemWorker.new("chmod +x /folder/myfile.sh")

```


### Summary


||
|---|
|[<!-- INCLUDE #4D.SystemWorker.new().Syntax -->](#4d-systemworker-new)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.SystemWorker.new().Summary -->|
|[<!-- INCLUDE #SystemWorkerClass.closeInput().Syntax -->](#closeinput)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.closeInput().Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.commandLine.Syntax -->](#commandline)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.commandLine.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.currentDirectory.Syntax -->](#currentdirectory)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.currentDirectory.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.dataType.Syntax -->](#dataype)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.dataType.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.encoding.Syntax -->](#encoding)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.encoding.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.errors.Syntax -->](#errors)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.errors.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.exitCode.Syntax -->](#exitcode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.exitCode.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.hideConsole.Syntax -->](#hideconsole)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.hideConsole.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.pid.Syntax -->](#pid)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.pid.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.postMessage().Syntax -->](#postmessage)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.postMessage().Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.response.Syntax -->](#response)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.response.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.responseError.Syntax -->](#responseerror)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.responseError.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.terminate().Syntax -->](#terminate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.terminate().Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.terminated.Syntax -->](#terminated)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.terminated.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.timeout.Syntax -->](#timeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.timeout.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.wait().Syntax -->](#wait)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.wait().Summary --> |




<!-- REF 4D.SystemWorker.new().Desc -->
## 4D.SystemWorker.new()


<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R4|Added|
</details>

<!-- REF #4D.SystemWorker.new().Syntax -->**4D.SystemWorker.new** ( *commandLine* : Text { ; options : Object } ) : 4D.SystemWorker<!-- END REF -->

<!-- REF #4D.SystemWorker.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|commandLine|Text|->|Command line to execute|
|options|Object|<-|Worker parameters|
|result|4D.SystemWorker|<-|New asynchronous System worker or Null if process not started|  
<!-- END REF -->


#### Description

The `4D.SystemWorker.new()` function <!-- REF #4D.SystemWorker.new().Summary -->creates and returns a `4D.SystemWorker` proxy object that will execute the *commandLine* you passed as parameter to launch an external process<!-- END REF -->. 

The returned system worker proxy object can be used to communicate with the worker and get the command output. 

If an error occurs during the creation of the proxy object, the function returns `null` and an error is thrown.

> The `4D.SystemWorker.new()` function only launches system processes; it does not create interface objects, such as windows.

In the *commandLine* parameter, pass the application's absolute file path to be executed, as well as any required arguments (if necessary). Under macOS, if you pass only the application name, 4D will use the PATH environment variable to locate the executable.

#### *options* Object

In the *options* parameter, pass an object that can contain the following properties:

|Property|Type|Default|Description|
|---|---|---|---|
|onResponse|Formula|undefined|Callback for system worker messages. The function waits for the end of the reception and returns the full message. The callback receives two objects in $1 and $2: <li>$1: SystemWorker object</li><li>$2.type: always "response"</li>|
|onData|Formula|undefined|Callback for system worker data. The function is called each time the system worker receives data. The callback receives two objects in $1 and $2:<li>$1: SystemWorker object</li><li>$2.type: always "data"</li><li>$2.data: receives data</li>|
|onDataError|Formula|undefined|Callback for system worker errors. The callback receives two objects in $1 and $2:<li>$1: SystemWorker object</li><li>$2.type: always "error"</li><li>$2.data: receives error data</li>|
|onError|Formula|undefined|Callback for execution errors. The callback receives two objects in $1 and $2:<li>$1: SystemWorker object</li><li>$2.type: always "error"</li>|
|onTerminate|Formula|undefined|Callback when the external process is terminated. The callback receives two objects in $1 and $2:<li>$1: SystemWorker object</li><li>$2.type: always "termination"</li>|
|timeout|Number|undefined|Time in seconds before killing a process that is still alive|
|dataType|Text|"blob"|Type of the response body content. Possible values: "blob" (default), "text", "image".|
|encoding|Text|"UTF-8"|Only if `dataType="text"`. Encoding of the response body content. Default is "UTF-8".|
|variables|Object||Sets custom environment variables for the system worker. <li>variables.key=value</i>Values are converted into strings when possible. The value cannot contain a '='. If not defined, the system worker inherits from the 4D environment. To get the general list of environment variables and possible values, please refer to the technical documentation of your operating system.|
|currentDirectory|Folder||Working directory in which the process is executed|
|hideConsole|Boolean|true|(Windows) Hide the window of the DOS console|



#### Example 


<!-- END REF -->


<!-- REF SystemWorkerClass.closeInput().Desc -->
## .closeInput()   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R4|Added|

</details>

<!-- REF #SystemWorkerClass.closeInput().Syntax -->**.closeInput**()<!-- END REF -->

<!-- REF #SystemWorkerClass.closeInput().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.closeInput()` function <!-- REF #SystemWorkerClass.closeInput().Summary -->closes the input stream (*stdin*) of the external process<!-- END REF -->. 

This function is useful when an attempt to write in the *stdin* of the external process using the `postMessage()` is blocked for some reason. A call to `.closeInput()` will release the execution.


<!-- END REF -->



<!-- REF SystemWorkerClass.commandLine.Desc -->
## .commandLine   

<!-- REF #SystemWorkerClass.commandLine.Syntax -->**.commandLine** : Text<!-- END REF -->


#### Description

The `.commandLine` property <!-- REF #SystemWorkerClass.commandLine.Summary -->contains the command line passed as parameter to the [`new()`](#4d-systemworker-new) function<!-- END REF -->. 

This property is **read-only**. 

<!-- END REF -->


<!-- REF SystemWorkerClass.currentDirectory.Desc -->
## .currentDirectory   

<!-- REF #SystemWorkerClass.currentDirectory.Syntax -->**.currentDirectory** : 4D.Folder<!-- END REF -->


#### Description

The `.currentDirectory` property <!-- REF #SystemWorkerClass.currentDirectory.Summary -->contains the working directory in which the external process is executed<!-- END REF -->. 

<!-- END REF -->



<!-- REF SystemWorkerClass.dataType.Desc -->
## .dataType   

<!-- REF #SystemWorkerClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->


#### Description

The `.dataType` property <!-- REF #SystemWorkerClass.dataType.Summary -->contains the type of the response body content<!-- END REF -->. Possible values : "text" or "blob".
 

This property is **read-only**. 

<!-- END REF -->

<!-- REF SystemWorkerClass.encoding.Desc -->
## .encoding   

<!-- REF #SystemWorkerClass.encoding.Syntax -->**.encoding** : Text<!-- END REF -->


#### Description

The `.encoding` property <!-- REF #SystemWorkerClass.encoding.Summary -->contains the encoding of the response body content<!-- END REF -->. This property is only available if the [`dataType`](#datatype) is "text". 

This property is **read-only**. 

<!-- END REF -->


<!-- REF SystemWorkerClass.errors.Desc -->
## .errors   

<!-- REF #SystemWorkerClass.errors.Syntax -->**.errors** : Collection<!-- END REF -->


#### Description

The `.errors` property <!-- REF #SystemWorkerClass.errors.Summary -->contains a collection of 4D errors stack in case of execution error(s)<!-- END REF -->. 

Each element of the collection is an object with the following properties:

|Property|Type|Description|
|---|---|---|
|[].errorCode|number|4D error code|
|[].message|text|Description of the 4D error|
|[ ].componentSignature|text|Signature of the internal component which returned the error|

If no error occured, `.errors` contains an empty collection. 

<!-- END REF -->



<!-- REF SystemWorkerClass.exitCode.Desc -->
## .exitCode   

<!-- REF #SystemWorkerClass.exitCode.Syntax -->**.exitCode** : Integer<!-- END REF -->


#### Description

The `.exitCode` property <!-- REF #SystemWorkerClass.exitCode.Summary -->contains the exit code returned by the external process<!-- END REF -->. If the process did not terminate normaly, `exitCode` is *undefined*.

This property is **read-only**. 

<!-- END REF -->



<!-- REF SystemWorkerClass.hideConsole.Desc -->
## .hideConsole   

<!-- REF #SystemWorkerClass.hideConsole.Syntax -->**.hideConsole** : Boolean<!-- END REF -->


#### Description

The `.hideConsole` property <!-- REF #SystemWorkerClass.hideConsole.Summary -->can be used to hide the window of the DOS console or the window of the launched executable (**Windows only**)<!-- END REF -->. 

<!-- END REF -->

This property is **read-write**. 



<!-- REF SystemWorkerClass.pid.Desc -->
## .pid   

<!-- REF #SystemWorkerClass.pid.Syntax -->**.pid** : Integer<!-- END REF -->


#### Description

The `.pid` property <!-- REF #SystemWorkerClass.pid.Summary -->contains the process ID of the `SystemWorker` object<!-- END REF -->. 

This property is **read-only**. 

<!-- END REF -->


<!-- REF SystemWorkerClass.postMessage().Desc -->
## .postMessage() 


<!-- REF #SystemWorkerClass.postMessage().Syntax -->**.postMessage**( *message* : Text)<br>**.postMessage**( *messageBLOB* : Blob)<!-- END REF -->


<!-- REF #SystemWorkerClass.postMessage().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|message|Text|->|Text to write on the input stream (stdin) of the external process|
|messageBLOB|Blob|->|Bytes write on the input stream|
<!-- END REF -->

#### Description

The `.postMessage()` function <!-- REF #SystemWorkerClass.postMessage().Summary -->allows you to write on the input stream (stdin) of the external process<!-- END REF -->. In the *message* parameter, pass the text to write in *stdin*.

The `.postMessage()` function also accepts a Blob type value in *messageBLOB* to pass in *stdin*, so that you can post binary data. 

You can use the `.dataType` property of the [options object](#options-object) to make response body return Blob values.

<!-- END REF -->


<!-- REF SystemWorkerClass.response.Desc -->
## .response   

<!-- REF #SystemWorkerClass.response.Syntax -->**.response** : Text<br>**.response** : Blob<!-- END REF -->


#### Description

The `.response` property <!-- REF #SystemWorkerClass.response.Summary -->contains the data returned once the request is terminated<!-- END REF -->, i.e. the full message received from the process output.

The type of the message is defined according to the [`dataType`](#datatype) attribute.


This property is **read-only**. 

<!-- END REF -->



<!-- REF SystemWorkerClass.responseError.Desc -->
## .responseError   

<!-- REF #SystemWorkerClass.responseError.Syntax -->**.responseError** : Text<!-- END REF -->


#### Description

The `.responseError` property <!-- REF #SystemWorkerClass.responseError.Summary -->contains the concatenation of all the errors returned, once the request is terminated<!-- END REF -->.

<!-- END REF -->



<!-- REF SystemWorkerClass.terminate().Desc -->
## .terminate()   

<!-- REF #SystemWorkerClass.terminate().Syntax -->**.terminate**()<!-- END REF -->

<!-- REF #SystemWorkerClass.terminate().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.terminate()` function <!-- REF #SystemWorkerClass.terminate().Summary -->forces the `SystemWorker` to terminate its execution<!-- END REF -->. 

This function sends the instruction to terminate and give control back to the executing script.


<!-- END REF -->



<!-- REF SystemWorkerClass.terminated.Desc -->
## .terminated   

<!-- REF #SystemWorkerClass.terminated.Syntax -->**.terminated** : Boolean<!-- END REF -->


#### Description

The `.terminated` property <!-- REF #SystemWorkerClass.terminated.Summary -->contains **true** if the external process is terminated<!-- END REF -->. 

This property is **read-only**. 

<!-- END REF -->




<!-- REF SystemWorkerClass.timeout.Desc -->
## .timeout   

<!-- REF #SystemWorkerClass.timeout.Syntax -->**.timeout** : Integer<!-- END REF -->


#### Description

The `.timeout` property <!-- REF #SystemWorkerClass.timeout.Summary -->contains the duration in seconds before the external process will be killed if it is still alive<!-- END REF -->. 

This property is **read-only**. 

<!-- END REF -->


<!-- REF SystemWorkerClass.wait().Desc -->
## .wait()   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R4|Added|

</details>

<!-- REF #SystemWorkerClass.wait().Syntax -->**.wait**( {*timeout* : Integer} ) : Boolean<!-- END REF -->

<!-- REF #SystemWorkerClass.wait().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|timeout|Integer|->|Waiting time (in seconds)|
|Result|Boolean|<-|True if external process has terminated|
<!-- END REF -->


#### Description

The `.wait()` function <!-- REF #SystemWorkerClass.wait().Summary -->waits until the end of the `SystemWorker` execution or the specified *timeout*<!-- END REF -->. 

In *timeout*, pass a value in seconds. The `SystemWorker` script will wait for the external process for the amount of time defined in the *timeout* parameter. If you pass 0 or omit the *timeout* parameter, the script execution will wait indefinitely. 

Actually, `.wait()` waits until the end of processing of the `onTerminate` formula, except if the *timeout* is reached. If *timeout* is reached, the `SystemWorker` is not killed.

During a `.wait()` execution, callback functions are executed, especially callbacks from other events or from other `SystemWorker` instances.

This function returns `true` if the external process has terminated. 

You can exit from a `.wait()` by calling [`terminate()`](#terminate).


<!-- END REF -->


<style> h2 { background: #d9ebff;}</style>
