---
id: soap-request
title: SOAP Request
displayed_sidebar: docs
---


<!-- REF #_command_.SOAP Request.Syntax-->SOAP Request -> Function result<!-- END REF-->


<!-- REF #_command_.SOAP Request.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Function result|Boolean|<-|True if the request is SOAP; otherwise, False|
<!-- END REF -->


#### Description




The **SOAP Request** command returns `True` if the code being executed is part of a SOAP request. 

This command can be used for security reasons in the `On Web Authentication Database Method` in order to determine the nature of the received requests.




