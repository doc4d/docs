---
id: web-form
title: Web Form
---

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.Web Form<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->
|Parameter|Type| |Description|
|---------|--- |:---:|------|
|Result|4D.WebForm|&#8592;|New `Web Form` proxy object
<!-- END REF -->

#### Description

The `Web Form` command <!-- REF #_command_.Web Form.Summary --> returns a `4D.Web Form` proxy object, providing a means to work with and effectively emulates the Page's properties and functions<!-- END REF -->.


:::info

Keep in mind that a `4D.Web Form` object  is a **proxy object**, and not a direct reference to the web form object itself. As a consequence for example, the `4D.Web Form` object does not expose all Page properties in the Debugger. 

:::

Each property of the returned object is an object of the [4D.WebFormItem](../WebFormItemClass.md) class.

The command returns `null` if it is called in a request that does not originate from Qodly Studio.


## See also 

[Web Event](web-event.md)  
[WebForm class](../API/WebFormClass.md)
[WebFormItem class](../API/WebFormItemClass.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 1735 |
| Thread safe | &cross; |




