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
|[<!-- INCLUDE #4D.SystemWorker.new().Syntax -->](#description)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE ##4D.SystemWorker.new().Summary -->|
|[<!-- INCLUDE #SignalClass.signaled.Syntax -->](#signaled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.signaled.Summary --> |
|[<!-- INCLUDE #SignalClass.trigger().Syntax -->](#trigger)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.trigger().Summary --> |
|[<!-- INCLUDE #SignalClass.wait().Syntax -->](#wait)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.wait().Summary --> |




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
|result|4D.SystemWorker|<-|New asynchronous System worker|  
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



#### Returned SystemWorker proxy




A new [`4D.Signal` object](#signal-object).

#### Example 

Here is a typical example of a worker that sets a signal:

```4d
 var $signal : 4D.Signal
 $signal:=New signal("This is my first signal")
 
 CALL WORKER("myworker";"doSomething";$signal)
 $signaled:=$signal.wait(1) //wait for 1 second max
 
 If($signaled)
    ALERT("myworker finished the work. Result: "+$signal.myresult)
 Else
    ALERT("myworker has not finished in less than 1s")
 End if
```


The ***doSomething*** method could be like:

```4d
 #DECLARE ($signal : 4D.Signal)
  //any processing
  //...
 Use($signal)
    $signal.myresult:=$processingResult  //return the result
 End use
 $signal.trigger() // The work is finished
```

<!-- END REF -->


<!-- REF SignalClass.description.Desc -->
## .description 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF #SignalClass.description.Syntax -->
**.description** : Text<!-- END REF -->

#### Description

The `.description` property <!-- REF #SignalClass.description.Summary -->contains a custom description for the `Signal` object.<!-- END REF -->.  

`.description` can be set at the creation of the signal object or at any moment. Note that since the `Signal` object is a shared object, any write-mode access to the `.description` property must be surrounded by a `Use...End use` structure.

This property is **read-write**. 

<!-- END REF -->



<!-- REF SignalClass.signaled.Desc -->
## .signaled   

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|

</details>

<!-- REF #SignalClass.signaled.Syntax -->
**.signaled** : Boolean<!-- END REF -->

#### Description

The `.signaled` property <!-- REF #SignalClass.signaled.Summary -->contains the current state of the `Signal` object<!-- END REF -->. When the signal is created, `.signaled` is **False**. It becomes **True** when the `.trigger( )` is called on the object.

This property is **read-only**. 

<!-- END REF -->



<!-- REF SignalClass.trigger().Desc -->
## .trigger()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF #SignalClass.trigger().Syntax -->
**.trigger( )**<!-- END REF -->

<!-- REF #SignalClass.trigger().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.trigger( )` function <!-- REF #SignalClass.trigger().Summary -->sets the `signaled` property of the signal object to **true**<!-- END REF --> and awakens all workers or processes waiting for this signal.

If the signal is already in the signaled state (i.e., the `signaled` property is already **true**), the function does nothing.

<!-- END REF -->



<!-- REF SignalClass.wait().Desc -->
## .wait()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

<!-- REF #SignalClass.wait().Syntax -->
**.wait**( { *timeout* : Real } ) : Boolean <!-- END REF -->

<!-- REF #SignalClass.wait().Params -->
|Parameter|Type||Description|
|---|---|---|---|
|timeout|Real|->|Maximum waiting time for the signal in seconds|
|Result|Boolean|<-|State of the `.signaled` property|
<!-- END REF -->


#### Description

The `.wait( )` function <!-- REF #SignalClass.wait().Summary -->makes the current process wait until the `.signaled` property of the signal object to become **true** or the optional *timeout* to expire<!-- END REF -->. 

To prevent blocking code, you can pass a maximum waiting time in seconds in the *timeout* parameter (decimals are accepted). 

>**Warning**: Calling `.wait( )` without a *timeout* in the 4D main process is not recommended because it could freeze the whole 4D application.

If the signal is already in the signaled state (i.e. the `.signaled` property is already **true**), the function returns immediately, without waiting.

The function returns the value of the `.signaled` property. Evaluating this value allows knowing if the function returned because the `.trigger( )` has been called (`.signaled` is **true**) or if the *timeout* expired (`.signaled` is **false**).

>The state of a process that waits for a signal is `Waiting for internal flag`.


<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
