## Get application info


<!-- REF #_command_.Get application info.Syntax-->Get application info -> Function result<!-- END REF-->


<!-- REF #_command_.Get application info.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Function result|Object|<-|Information about the active application activity|
<!-- END REF -->


#### Description


The **Get application info** command returns an object providing detailed information about the active application's activity and network configuration.<br/>The command can be executed on applications running in both standalone and client/server environments. The information returned depends on where **Get application info** is executed. For example, if executed from a remote 4D, the information applies only to the remote workstation. If the command is called in a method that is executed on the server, the information returned applies to the the server.<br/>The returned object contains the following properties:<br/> 


<table class="rte4d_table"><tr><td><strong>Property</strong></td><td></td><td><strong>Type</strong></td><td><strong>Description</strong></td><td><strong>Example</strong></td></tr><tr><td>cpuUsage(*)</td><td></td><td>number</td><td>Percentage of processor used by 4D. Note, for Macs, the number displayed is for 1 core and represents an average for the processor.</td><td>10.03</td></tr><tr><td>headless</td><td></td><td>boolean</td><td>True if the application is running in headless mode. Possible values: true, false. For more information, see Command Line Interface.</td><td>false</td></tr><tr><td>IPAddressesAllowDeny</td><td></td><td>collection</td><td>4D Server only. Returns a collection of IP addresses that are allowed or denied in the database's settings. For more information, see IP configuration. </td><td>[&lbrace; "mode": "allow", "ip": "192.168.*"&rbrace; ,&lbrace; ...&rbrace; ]</td></tr><tr><td></td><td>[&nbsp;].mode</td><td>string</td><td>Property describing whether the IP address is allowed or not. Possible values: "allow" or "deny"</td><td>"allow"</td></tr><tr><td></td><td>[ ].ip</td><td>string</td><td>IP address</td><td>"192.167.1.2"&nbsp;</td></tr><tr><td>IPAddressesToListen</td><td></td><td>collection</td><td>4D Server only. Returns the IP addresses that 4D Server listens for. For more information, see IP configuration.</td><td>["192.168.18.12","192.168.18.10"]</td></tr><tr><td>launchedAsService</td><td></td><td>boolean</td><td>True if application launched as a service. Possible values: true, false. For more information, see Registering a Database as a Service.</td><td>false&nbsp;</td></tr><tr><td>networkInputThroughput(*)</td><td></td><td>number</td><td>The data rate (bytes/seconds) for network input of the machine running the application. In remote mode, the rate for the remote machine is returned. For more information, see Monitor Page.</td><td>37311495</td></tr><tr><td>networkOutputThroughput(*)</td><td></td><td>number</td><td>The data rate (bytes/seconds) for network output of the machine running the application. In remote mode, the rate for the remote machine is returned. For more information, see Monitor Page.</td><td>88058023</td></tr><tr><td>newConnectionsAllowed</td><td></td><td>boolean</td><td>4D Server only. True if new connections allowed. Possible values: true, false. For more information, see .</td><td>true&nbsp;</td></tr><tr><td>pid</td><td></td><td>number</td><td>ID of the 4D application instance process (provided by the OS) -- allows identifying each running 4D instance, for example from an external script</td><td>16600</td></tr><tr><td>portID</td><td></td><td>number</td><td>4D Server: port for active listening, 4D remote: port for remote connections. Not returned in standalone environment. Minimum: 1. For more information, see Port Number.</td><td>19814&nbsp;</td></tr><tr><td>remoteDebuggerSessionID</td><td></td><td>text</td><td>Session ID of the remote application to which the server debugger is attached. This ID is also returned by .</td><td>"A838A40BJN3NJKH..."</td></tr><tr><td>SDIMode</td><td></td><td>boolean</td><td>True if the application is running in SDI mode on Windows (useless on macOS). Possible values: true, false. For more information, see SDI mode&nbsp;on <em>developer.4d.com</em></td><td>true</td></tr><tr><td>TLSEnabled</td><td></td><td>boolean</td><td>True if TLS enabled for client/server communications. Not returned in standalone environment. Possible values: true, false. For more information, see TLS Protocol and Client/Server Connections.</td><td>true </td></tr><tr><td>uptime</td><td></td><td>number</td><td>Time elapsed (in seconds) since local 4D database was opened. For remote connections, returns the time elapsed since the connection was made.</td><td>143 </td></tr><tr><td>useLegacyNetworkLayer</td><td></td><td>boolean</td><td>True if legacy network layer used for the application server. Not returned in standalone environment. Possible values: true, false. For more information, see Activating or deactivating the legacy network layer.</td><td>false </td></tr><tr><td>useQUICNetworkLayer</td><td></td><td>boolean</td><td>True if QUIC network layer used for the application server and db4d server (<em>beta</em> in 4D v20, see Compatibility page).&nbsp;Not returned in standalone environment. Possible values: true, false. For more information, see this blog post.</td><td>false</td></tr><tr><td>volumeShadowCopyStatus</td><td></td><td>string</td><td>Returns the status of the Volume Shadow Copy Service. Windows only. For more information, see Using Volume Shadow Copy Service on Windows. <p> Possible values: <table class="constant_table"><tr><td>Constant</td><td>Value</td><td class="width50">Comment</td></tr><tr><td id="constantName_3972042">vss available</td>                                                <td>available</td>                        <td>The service is available.</td></tr><tr><td id="constantName_3972027">vss error</td>                                                <td>error</td>                        <td>The service experienced an error.</td></tr><tr><td id="constantName_3972021">vss not available</td>                                                <td>notAvailable</td>                        <td>The service is unavailable.</td></tr><tr><td id="constantName_3972036">vss update required</td>                                                <td>updateRequired</td>                        <td>The service needs to be updated.</td></tr></table></p> </td><td>"available"&nbsp;</td></tr></table> 

(*) On Windows, you need to get this counter previously initialized, for example by a call to the **Get application info** command in the [`On Startup database method`](on-startup-database-method.md). 


#### Example


The following code returns an object containing information about the running application:


```4d

C_OBJECT($appInfo)
$appInfo:= Get application info

```

If the code is executed from a standalone environment, the object contains (for example):

``` 
&lbrace; 
&nbsp;&nbsp;&nbsp; "launchedAsService": false,
&nbsp;&nbsp;&nbsp; "volumeShadowCopyStatus": "notAvailable",
&nbsp;&nbsp;&nbsp; "cpuUsage": 10.035875,
&nbsp;&nbsp;&nbsp; "uptime": 469,
&nbsp; &nbsp; "headless": false,
&nbsp; &nbsp; "pid": 16500,
&nbsp; &nbsp; "networkInputThroughput": 377263157,
&nbsp;&nbsp;&nbsp; "networkOutputThroughput": 12345242236 
&rbrace; 
```


If the code is executed from a 4D remote client, the object contains (for example):

```
&lbrace; 
&nbsp;&nbsp;&nbsp; "launchedAsService": false,
&nbsp;&nbsp;&nbsp; "volumeShadowCopyStatus": "notAvailable",
&nbsp;&nbsp;&nbsp; "cpuUsage": 10.035875,
&nbsp;&nbsp;&nbsp; "portID": 19814,
&nbsp;&nbsp;&nbsp; "TLSEnabled": false,
&nbsp;&nbsp;&nbsp; "uptime": 143,
&nbsp; &nbsp; "headless": false,
&nbsp; &nbsp; "pid": 1550,
&nbsp; &nbsp; "useLegacyNetworkLayer": true,
&nbsp;&nbsp;&nbsp; "networkInputThroughput": 268047058,
&nbsp;&nbsp;&nbsp; "networkOutputThroughput": 12207686274 
&rbrace; 
```


If the code is executed on 4D Server, the object contains (for example):

```
&lbrace; 
&nbsp;&nbsp;&nbsp; "launchedAsService": false,
&nbsp;&nbsp;&nbsp; "volumeShadowCopyStatus": "notAvailable",
&nbsp;&nbsp;&nbsp; "cpuUsage": 10.016125,
&nbsp;&nbsp;&nbsp; "portID": 19814,
&nbsp;&nbsp;&nbsp; "TLSEnabled": false,
&nbsp;&nbsp;&nbsp; "uptime": 192,
&nbsp; &nbsp; "headless": false,
&nbsp; &nbsp; "pid": 9560,
&nbsp; &nbsp; "useLegacyNetworkLayer": true,
&nbsp; &nbsp; "useQUICNetworkLayer": false,
&nbsp;&nbsp;&nbsp; "newConnectionsAllowed": true,
&nbsp;&nbsp;&nbsp; "IPAddressesToListen": [
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "192.168.18.8",
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "192.168.18.7" 
&nbsp;&nbsp;&nbsp; ],

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "IPAddressesAllowDeny": [
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lbrace; "mode": "allow", "ip": "192.168.*"&rbrace; ,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lbrace; "mode": "deny", "ip": "192.167.15.3"&rbrace; ,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lbrace; "mode": "allow", "ip": "192.167.1.2" &rbrace; 
&nbsp;&nbsp;&nbsp; ],

&nbsp;&nbsp;&nbsp; "networkInputThroughput": 149014925,
&nbsp;&nbsp;&nbsp; "networkOutputThroughput": 80238805 
&rbrace; 
```




