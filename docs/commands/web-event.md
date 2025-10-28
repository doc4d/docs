---
id: web-event
title: Web Event
---

<!-- REF #_command_.Web Event.Syntax -->**Web Event** : object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->
|Parameter|Type| |Description|
|---------|--- |:---:|------|
|Result|object|&#8592;| object
<!-- END REF -->

#### Description

`Web Event` <!-- REF #_command_.Web Event.Summary -->returns an object with information on a triggered event linked to a Page component<!-- END REF -->.

The command must be called in the context of a Page handled by the Qodly web server.

**Result**

The returned object contains the following properties:

| Property |  |Type| Description |
|----|---|----|----|
| caller |  |string| [Server-side reference](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview#data-access-category) of the component triggering the event |
| eventType |  |string| Type of event:<li>onblur</li><li>onfocus</li><li>onclick</li><li>onauxclick</li><li>onmouseenter</li><li>onmouseleave</li><li>onkeyup</li><li>onkeydown</li><li>onchange</li><li>unload</li><li>onload - triggered when the `Page` loads</li>|
| data	| |object|Additional information depending on the involved component|
| 	|index |number|<li>Tabs component: index of the tab (indexing starts at 0)</li><li>Data Table component: column number</li>|
| 	|row |number|Data Table component: row number |
| 	|name |string|Data Table component: qodlysource name of the column (e.g. "firstname", "address.city")|


## See also 

[Web Form](web-form.md)</br>
[WebForm class](../API/WebFormClass.md)</br>
[WebFormItem class](../API/WebFormItemClass.md)

## Properties

|  |  |
| --- | --- |
| Command number | 1734 |
| Thread safe | &cross; |

