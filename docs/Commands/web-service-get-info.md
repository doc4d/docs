---
id: web-service-get-info
title: WEB SERVICE Get info
displayed_sidebar: docs
---


<!-- REF #_command_.WEB SERVICE Get info.Syntax-->WEB SERVICE Get info ( infoType ) -> Function result<!-- END REF-->


<!-- REF #_command_.WEB SERVICE Get info.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|infoType|Longint|->|Information to be retrieved|
|Function result|String|<-|Information about the last SOAP error
|
<!-- END REF -->


#### Description




The **WEB SERVICE Get info** command returns information about any error generated during the execution of the last SOAP request sent to a remote Web Service. This command should generally be called within an error-handling method installed by the [`ON ERR CALL`](on-err-call.md) command.

The `infoType `parameter allows you to indicate the type of information that you want to obtain. You must pass one of the constants listed below:

| Constant                     | Type    | Value | Comment|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
|------------------------------|---------|-------|------|
| Web Service detailed message | Longint | 1     | Detailed message describing the error. The type of message differs according to the main error type. <li>If the main error = 9910 (Soap fault): the cause of the SOAP fault is returned (e.g.: “the remote method does not exist”).<li/><li>If the main error = 9911 (Parser fault): the location of the error in the XML document is returned.<li/><li>If the main error = 9912 (HTTP fault):<li/><li>if the HTTP error is located in the interval [300-400] (problems linked to the location of the requested document), the new location of the requested URL is returned.  <li/><li>for any other HTTP error code, the `<body>` is returned. <li/><li>If the main error = 9913 (Network fault): the cause of the network fault is returned (e.g.: “ServerAddress: DNS lookup failure”)<li/><li>If the main error = 9914 (Internal fault): the cause of the internal fault is returned<li/> |
| Web Service error code       | Longint | 0     | Main error code (defined by 4D). This code is also returned in the Error system variable.List of codes that may be returned:<li>9910: Soap fault (see also Web Service Fault Actor)<li/><li>9911: Parser fault<li/><li>9912: HTTP fault (see also Web Service HTTP Error code)<li/><li>9913: Network fault<li/><li>9914: Internal fault<li/>.|                                                                                                                                                                                                                                                                                                                                                                                                                                              
| Web Service fault actor      | Longint | 3     | Cause of the error (returned by the SOAP protocol — to be used in the case of main error 9910).<li>Version Mismatch<li/><li>Must Understand (the server was unable to interpret a parameter defined as mandatory)<li/><li>Sender Fault<li/><li>Receiver Fault<li/><li>Encoding Unknown<li/>
| Web Service HTTP status code | Longint | 2 |HTTP error code (to be used in case of main error 9912).|

An empty string is returned when no information is available, more particularly when the last SOAP request did not generate any errors.


