## Get process activity


<!-- REF #_command_.Get process activity.Syntax-->Get process activity {( options )} -> Function result<!-- END REF-->


<!-- REF #_command_.Get process activity.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|options|Longint|->|Return options|
|Function result|Object|<-|Snapshot of running processes and/or (4D Server only) user sessions|
<!-- END REF -->


#### Description


The **Get process activity** command returns a snapshot of connected user sessions and/or related running processes at a given time. This command returns all processes, including internal processes that were not reachable by the command. 

* When executed on the server, by default if you omit the options parameter, **Get process activity** returns both user session and process lists, as shown below: 

```
{
"sessions": [
          {
             "type": "remote",
             "userName": "Designer",
             "machineName": "iMac27caroline",
             "systemUserName": "Caroline Briaud",
             "IPAddress": "192.168.18.18",
             "hostType": "mac",
             "creationDateTime": "2017-09-22T12:46:39Z",
             "state": "postponed",
             "ID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5"
           },...
       ],
"processes": [
          {
             "name": "Application process",
             "sessionID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5",
             "number": 4,
             "ID": 4,
             "visible": true,
             "systemID": "123145476132864",
             "type": -18,
             "state": 0,
             "cpuUsage": 0,
             "cpuTime": 0.006769,
             "preemptive": false,
             "session": {  
                      "type": "remote",
                      "userName": "Designer",
                      "machineName": "iMac27caroline",
                      "systemUserName": "Caroline Briaud",
                      "IPAddress": "192.168.18.18",
                      "hostType": "mac",
                      "creationDateTime": "2017-09-22T12:46:39Z",
                      "state": "postponed",
                      "ID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5"
                       }
           },...
    ]
}
```


You can select the list to return by passing one of the following constants of the "4D Environment" theme in the options parameter: <br/>

 **Constant**   | **Type** | **Value** | **Comment**                        
----------------|----------|-----------|------------------------------------
 Processes only | Longint  | 1         | Returns only the process list      
 Sessions only  | Longint  | 2         | Returns only the user session list 


* When executed on 4D in remote or local mode, **Get process activity** only returns the process list (options parameter is useless). 


#### Sessions 


The "sessions" property contains a collection of objects describing all running user sessions on the server.

Each session object contains the following properties:

 **Property name** | **Type**      | **Description**                                                           
-------------------|---------------|-----------
 type              | Text (enum)   | Session type. Possible values: "remote", "storedProcedure", "web", "rest" 
 userName          | Text          | User name                                                                 
 machineName       | Text          | Name of the remote machine                                                
 systemUserName    | Text          | Name of the system session opened on the remote machine                   
 IPAddress         | Text          | IP address of the remote machine                                          
 hostType          | Text (enum)   | Host type. Possible values: "windows", "mac", "browser"                   
 creationDateTime  | Date ISO 8601 | Date and time of connection of the remote machine                         
 state             | Text (enum)   | Session state. Possible values: "active", "postponed", "sleeping"         
 ID                | Text          | Session UUID                                                              
 persistentID      | Text          | Session's persistent ID                                                   



#### Processes


The "processes" property contains a collection of objects describing all running processes on the server.


Each process object contains the following properties:

<table class="rte4d_table"><tr><td><strong>Property name</strong></td><td><strong>Type</strong></td><td><strong>Description</strong></td></tr><tr><td>name</td><td>Text</td><td>Process name</td></tr><tr><td>sessionID</td><td>Text</td><td>Session UUID</td></tr><tr><td>number</td><td>Longint</td><td>Process number</td></tr><tr><td>ID</td><td>Longint</td><td>Process unique ID</td></tr><tr><td>visible</td><td>Boolean</td><td>True if visible, false otherwise </td></tr><tr><td>systemID</td><td>Text</td><td>ID for the user process, 4D process or spare process</td></tr><tr><td>type</td><td>Longint</td><td>Running process type. You can use the following constants from the "Process Type" theme: <table class="constant_table"><tr><td>Constant</td><td>Value</td><td class="width50">Comment</td></tr><tr><td id="constantName_3512527">HTTP Log flusher</td>                                                <td>-58</td>                        <td></td></tr><tr><td id="constantName_3423089">Logger process</td>                                                <td>-57</td>                        <td></td></tr><tr><td id="constantName_3423082">HTTP Listener</td>                                                <td>-56</td>                        <td></td></tr><tr><td id="constantName_3423075">HTTP Worker pool server</td>                                                <td>-55</td>                        <td></td></tr><tr><td id="constantName_3423068">SQL Listener</td>                                                <td>-54</td>                        <td></td></tr><tr><td id="constantName_3423061">SQL Net Session manager</td>                                                <td>-53</td>                        <td></td></tr><tr><td id="constantName_3423054">SQL Worker pool server</td>                                                <td>-52</td>                        <td></td></tr><tr><td id="constantName_3423047">DB4D Listener</td>                                                <td>-51</td>                        <td></td></tr><tr><td id="constantName_3423039">DB4D Mirror</td>                                                <td>-50</td>                        <td></td></tr><tr><td id="constantName_3423032">DB4D Cron</td>                                                <td>-49</td>                        <td></td></tr><tr><td id="constantName_3423025">DB4D Worker pool user</td>                                                <td>-48</td>                        <td></td></tr><tr><td id="constantName_3423018">DB4D Garbage collector</td>                                                <td>-47</td>                        <td></td></tr><tr><td id="constantName_3423010">DB4D Flush cache</td>                                                <td>-46</td>                        <td></td></tr><tr><td id="constantName_3423003">DB4D Index builder</td>                                                <td>-45</td>                        <td></td></tr><tr><td id="constantName_3422996">ServerNet Session manager</td>                                                <td>-44</td>                        <td></td></tr><tr><td id="constantName_3422989">ServerNet Listener</td>                                                <td>-43</td>                        <td></td></tr><tr><td id="constantName_3422982">Worker pool spare</td>                                                <td>-42</td>                        <td></td></tr><tr><td id="constantName_3422973">Worker pool in use</td>                                                <td>-41</td>                        <td></td></tr><tr><td id="constantName_3422966">Other internal process</td>                                                <td>-40</td>                        <td></td></tr><tr><td id="constantName_3512520">Main 4D process</td>                                                <td>-39</td>                        <td></td></tr><tr><td id="constantName_4177757">SOAP process</td>                                                <td>-33</td>                        <td></td></tr><tr><td id="constantName_6020178">Web server spare process</td>                                                <td>-32</td>                        <td></td></tr><tr><td id="constantName_4843">Client manager process</td>                                                <td>-31</td>                        <td></td></tr><tr><td id="constantName_3776671">Compiler process</td>                                                <td>-29</td>                        <td></td></tr><tr><td id="constantName_4855">Monitor process</td>                                                <td>-26</td>                        <td></td></tr><tr><td id="constantName_4851">Internal timer process</td>                                                <td>-25</td>                        <td></td></tr><tr><td id="constantName_4847">SQL Method execution process</td>                                                <td>-24</td>                        <td></td></tr><tr><td id="constantName_4839">MSC process</td>                                                <td>-22</td>                        <td></td></tr><tr><td id="constantName_4835">Restore Process</td>                                                <td>-21</td>                        <td></td></tr><tr><td id="constantName_4831">Log file process</td>                                                <td>-20</td>                        <td></td></tr><tr><td id="constantName_4827">Backup process</td>                                                <td>-19</td>                        <td></td></tr><tr><td id="constantName_4823">Internal 4D server process</td>                                                <td>-18</td>                        <td></td></tr><tr><td id="constantName_4819">Method editor macro process</td>                                                <td>-17</td>                        <td></td></tr><tr><td id="constantName_4815">On exit process</td>                                                <td>-16</td>                        <td></td></tr><tr><td id="constantName_4811">Server interface process</td>                                                <td>-15</td>                        <td></td></tr><tr><td id="constantName_4807">Execute on client process</td>                                                <td>-14</td>                        <td></td></tr><tr><td id="constantName_4803">Web server process</td>                                                <td>-13</td>                        <td></td></tr><tr><td id="constantName_861936">Web process on 4D remote</td>                                                <td>-12</td>                        <td></td></tr><tr><td id="constantName_4739">Other 4D process</td>                                                <td>-10</td>                        <td></td></tr><tr><td id="constantName_4743">External task</td>                                                <td>-9</td>                        <td></td></tr><tr><td id="constantName_4747">Event manager</td>                                                <td>-8</td>                        <td></td></tr><tr><td id="constantName_4751">Apple event manager</td>                                                <td>-7</td>                        <td></td></tr><tr><td id="constantName_4755">Serial Port Manager</td>                                                <td>-6</td>                        <td></td></tr><tr><td id="constantName_4759">Indexing process</td>                                                <td>-5</td>                        <td></td></tr><tr><td id="constantName_4763">Cache manager</td>                                                <td>-4</td>                        <td></td></tr><tr><td id="constantName_4799">Web process with no context</td>                                                <td>-3</td>                        <td></td></tr><tr><td id="constantName_4771">Design process</td>                                                <td>-2</td>                        <td></td></tr><tr><td id="constantName_4775">Main process</td>                                                <td>-1</td>                        <td></td></tr><tr><td id="constantName_4779">None</td>                                                <td>0</td>                        <td></td></tr><tr><td id="constantName_4783">Execute on server process</td>                                                <td>1</td>                        <td></td></tr><tr><td id="constantName_4787">Created from menu command</td>                                                <td>2</td>                        <td></td></tr><tr><td id="constantName_4791">Created from execution dialog</td>                                                <td>3</td>                        <td></td></tr><tr><td id="constantName_4795">Other user process</td>                                                <td>4</td>                        <td></td></tr><tr><td id="constantName_2965346">Worker process</td>                                                <td>5</td>                        <td>Worker process launched by user</td></tr></table></td></tr><tr><td>state</td><td>Longint</td><td>Current status (see Process State constant list)</td></tr><tr><td>cpuUsage</td><td>Real</td><td>Percentage of time devoted to this process (between 0 and 1)</td></tr><tr><td>cpuTime</td><td>Real</td><td>Running time (seconds)</td></tr><tr><td>preemptive</td><td>Boolean</td><td>True if run preemptive, false otherwise</td></tr><tr><td>session</td><td>Object</td><td>The specific session in which the process is running. Undefined if the <U>Processes only</U> parameter is passed.</td></tr><tr><td>url</td><td>Text</td><td>URL with path and parameters (if any) of the web (-3) and SOAP (-33) processes running on the web server. Not returned for other types of processes.</td></tr></table>


#### Example


You want to get the collection of all user sessions:


```4d
//To be executed on the server

C_OBJECT($o)
C_LONGINT($i)

$o:=Get process activity //Get process &amp; session info
For ($i;0;($o.processes.length)-1) //Iterate over the "processes" collection
$processName:=$o.processes[$i].name
$userName:=String($o.processes[$i].session.userName) // Easy access to userName
//use String because session object might be undefined
End for
```



