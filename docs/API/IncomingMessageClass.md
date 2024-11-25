---
id: IncomingMessageClass
title: IncomingMessage
---


The `4D.IncomingMessage` class allows you to handle the object received by a custom [HTTP request handler]. HTTP requests and their properties are automatically received as an instance of the `4D.IncomingMessage` class.

 object contains the HTTP request as well as its parameters, if any.

All properties of this class are read-only. They are automatically filled by the request handler. 


<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R8|Class added|

</details>


### IncomingMessage Object


4D.IncomingMessage objects provide the following properties and functions:

||
|---|
|[<!-- INCLUDE #IncomingMessageClass.body.Syntax -->](#body)<br/><!-- INCLUDE #IncomingMessageClass.body.Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #IncomingMessageClass.headers.Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.url.Syntax -->](#url)<br/><!-- INCLUDE #IncomingMessageClass.url.Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.urlPath.Syntax -->](#urlPath)<br/><!-- INCLUDE #IncomingMessageClass.urlPath.Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.urlQuery.Syntax -->](#urlQuery)<br/><!-- INCLUDE #IncomingMessageClass.urlQuery.Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.verb.Syntax -->](#verb)<br/><!-- INCLUDE #IncomingMessageClass.verb.Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.setBody().Syntax -->](#setbody)<br/><!-- INCLUDE #IncomingMessageClass.setBody().Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.setHeader().Syntax -->](#setheader)<br/><!-- INCLUDE #IncomingMessageClass.setHeader().Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.setStatus().Syntax -->](#setstatus)<br/><!-- INCLUDE #IncomingMessageClass.setStatus().Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.status.Syntax -->](#status)<br/><!-- INCLUDE #IncomingMessageClass.status.Summary -->|

:::note

A 4D.IncomingMessage object is a [non-sharable](../Concepts/shared.md) object.

:::





<!-- REF #IncomingMessageClass.body.Desc -->
## .body

<!-- REF #IncomingMessageClass.body.Syntax -->**body** : any<!-- END REF -->

#### Description

The `.body` property contains <!-- REF #IncomingMessageClass.body.Summary -->the incoming message body<!-- END REF -->. The following data types are supported in the `.body` property:

- text
- blob
- object
- image

The `.body` property is read-write.


<!-- END REF -->


<!-- REF #IncomingMessageClass.headers.Desc -->
## .headers

<!-- REF #IncomingMessageClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Description

The `.headers` property contains <!-- REF #IncomingMessageClass.headers.Summary -->the current headers of the incoming message as key/value pairs (strings)<!-- END REF -->. 

The `.headers` property is read-only. 

Header names (keys) are lowercased. 


<!-- END REF -->



<!-- REF #IncomingMessageClass.url.Desc -->
## .url

<!-- REF #IncomingMessageClass.url.Syntax -->**url** : Text<!-- END REF -->

#### Description

The `.url` property contains <!-- REF #IncomingMessageClass.url.Summary -->the URL of the request without the *IP:port* part and as a string<!-- END REF -->. 

For example, if the request is addressed to: "http://127.0.0.1:80/docs/invoices/today", the `.url` property is "/docs/invoices/today".

The `.url` property is read-only. 

:::note

The "host" part of the request (*IP:port*) is provided by the "host" [header](#headers).

:::

<!-- END REF -->

<!-- REF #IncomingMessageClass.urlPath.Desc -->
## .urlPath

<!-- REF #IncomingMessageClass.urlPath.Syntax -->**urlPath** : Collection<!-- END REF -->

#### Description

The `.urlPath` property contains <!-- REF #IncomingMessageClass.urlPath.Summary -->the URL of the request without the *IP:port* part and as a collection of strings<!-- END REF -->. 

For example, if the request is addressed to: "http://127.0.0.1:80/docs/invoices/today", the `.urlPath` property is ["docs", "invoices" ,"today"]. 

The `.urlPath` property is read-only. 

<!-- END REF -->



<!-- REF #IncomingMessageClass.urlQuery.Desc -->
## .urlQuery

<!-- REF #IncomingMessageClass.urlQuery.Syntax -->**urlQuery** : Object<!-- END REF -->

#### Description

The `.urlQuery` property contains <!-- REF #IncomingMessageClass.urlQuery.Summary -->the parameters of the request when they has been given in the URL as key/value pairs<!-- END REF -->. 

The `.urlQuery` property is read-only. 


Parameters can be passed in the URL of `GET` requests **directly** or **as JSON contents**.

#### Direct parameters

Example: `http://127.0.0.1:8044/myCall?firstname=Marie&id=2&isWoman=true`

In this case, parameters are received as stringified values in the `urlQuery` property: `urlQuery = {"firstname":"Marie" ,"id":"2" ,"isWoman":"true"}`


#### JSON contents parameters

Example: `http://127.0.0.1:8044/myCall/?myparams='[{"firstname": "Marie","isWoman": true,"id": 3}]`.

Parameters are passed in JSON format and enclosed within a collection.

In this case, parameters are received as JSON text in the `urlQuery` property and can be parsed using [`JSON Parse`](../commands-legacy/json-parse.md). 

```4d
 //urlQuery.myparams: "[{"firstname": "Marie","isWoman": true,"id": 3}]"
 $test:=Value type(JSON Parse($r.urlQuery.myparams))=Is collection) //true
```

Special characters such as simple quotes or carriage returns must be escaped.

Example: `http://127.0.0.1:8044/syntax/?mdcode=%60%60%604d`

```4d
//urlQuery.mdcode = ```4d
$test:=Length($r.urlQuery.mdcode) //5
```

:::note

Parameters given in the body of the request are handled by the dedicated functions: [`getText()`](#gettext), [`getPicture()`](#getpicture), [`getBlob()`](#getblob), [`getJSON()`](#getjson).

:::


<!-- END REF -->


<!-- REF #IncomingMessageClass.verb.Desc -->
## .verb

<!-- REF #IncomingMessageClass.verb.Syntax -->**verb** : Text<!-- END REF -->

#### Description

The `.verb` property contains <!-- REF #IncomingMessageClass.verb.Summary -->the HTTP verb used by the request<!-- END REF -->. 

HTTP request verbs are usually "GET" or "POST".   

The `.verb` property is read-only. 

<!-- END REF -->

