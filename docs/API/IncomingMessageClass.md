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
|[<!-- INCLUDE #IncomingMessageClass.getBlob().Syntax -->](#getblob)<br/><!-- INCLUDE #IncomingMessageClass.getBlob().Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.getHeader().Syntax -->](#getheader)<br/><!-- INCLUDE #IncomingMessageClass.getHeader().Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.getJSON().Syntax -->](#getjson)<br/><!-- INCLUDE #IncomingMessageClass.getJSON().Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.getPicture().Syntax -->](#getpicture)<br/><!-- INCLUDE #IncomingMessageClass.getPicture().Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.getText().Syntax -->](#gettext)<br/><!-- INCLUDE #IncomingMessageClass.getText().Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #IncomingMessageClass.headers.Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.url.Syntax -->](#url)<br/><!-- INCLUDE #IncomingMessageClass.url.Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.urlPath.Syntax -->](#urlPath)<br/><!-- INCLUDE #IncomingMessageClass.urlPath.Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.urlQuery.Syntax -->](#urlQuery)<br/><!-- INCLUDE #IncomingMessageClass.urlQuery.Summary -->|
|[<!-- INCLUDE #IncomingMessageClass.verb.Syntax -->](#verb)<br/><!-- INCLUDE #IncomingMessageClass.verb.Summary -->|

:::note

A 4D.IncomingMessage object is a [non-sharable](../Concepts/shared.md) object.

:::


<!-- REF #IncomingMessageClass.getBlob().Desc -->
## .getBlob()

<!-- REF #IncomingMessageClass.getBlob().Syntax -->**.getBlob**() : Blob<!-- END REF -->

<!-- REF #IncomingMessageClass.getBlob().Params -->
|Parameter|Type||Description|
|---|--- |---|------|
|Result|Blob|<-|Body of the request as a Blob|
<!-- END REF -->

#### Description

The `.getBlob()` function <!-- REF #IncomingMessageClass.getBlob().Summary -->returns the body of the request as a Blob<!-- END REF -->. 

If the body has not been given as a binary content, the function tries to convert the value but it can give unexpected results. 

<!-- END REF -->


<!-- REF #IncomingMessageClass.getHeader().Desc -->
## .getHeader()

<!-- REF #IncomingMessageClass.getHeader().Syntax -->**.getHeader**( *key* : Text ) : Text<!-- END REF -->

<!-- REF #IncomingMessageClass.getHeader().Params -->
|Parameter|Type||Description|
|---|--- |---|------|
|key|Text|->|Header property to get|
|Result|Text|<-|Value of the header property|
<!-- END REF -->

#### Description

The `.getHeader()` function <!-- REF #IncomingMessageClass.getHeader().Summary -->returns the value of the *key* header<!-- END REF -->. 

:::note

The *key* parameter is not case sensitive. 

:::

#### Example

```4d
var $request; $value : Text
$value := $request.getHeader("content-type")
```

<!-- END REF -->


<!-- REF #IncomingMessageClass.getJSON().Desc -->
## .getJSON()

<!-- REF #IncomingMessageClass.getJSON().Syntax -->**.getJSON**() : Variant<!-- END REF -->

<!-- REF #IncomingMessageClass.getJSON().Params -->
|Parameter|Type||Description|
|---|--- |---|------|
|Result|Variant|<-|JSON resolution of the body of the request|
<!-- END REF -->

#### Description

The `.getJSON()` function <!-- REF #IncomingMessageClass.getJSON().Summary -->returns the body of the request as a JSON resolution<!-- END REF -->. 

 If the body has not been given as JSON valid content, an error is raised.

<!-- END REF -->

:::note

Parameters given directly in the request with GET verb are handled the [`urlQuery`](#urlquery) property.

:::

<!-- REF #IncomingMessageClass.getPicture().Desc -->
## .getPicture()

<!-- REF #IncomingMessageClass.getPicture().Syntax -->**.getPicture**() : Picture<!-- END REF -->

<!-- REF #IncomingMessageClass.getPicture().Params -->
|Parameter|Type||Description|
|---|--- |---|------|
|Result|Picture|<-|Body of the request as picture|
<!-- END REF -->

#### Description

The `.getPicture()` function <!-- REF #IncomingMessageClass.getPicture().Summary -->returns the body of the request as a picture (in case of a body sent as a picture)<!-- END REF -->. 

The content-type must be given in the headers to indicate that the body is a picture. 

:::note

If the request is built using the [`HTTPRequest` class](HTTPRequestClass.md), the picture must be sent in the body as a Blob with the appropriate content-type. 

:::

If the body is not received as a valid picture, the function returns null.

:::note

Parameters given directly in the request with GET verb are handled the [`urlQuery`](#urlquery) property.

:::

<!-- END REF -->




<!-- REF #IncomingMessageClass.getText().Desc -->
## .getText()

<!-- REF #IncomingMessageClass.getText().Syntax -->**.getText**() : Text<!-- END REF -->

<!-- REF #IncomingMessageClass.getText().Params -->
|Parameter|Type||Description|
|---|--- |---|------|
|Result|Text|<-|Body of the request as text|
<!-- END REF -->

#### Description

The `.getText()` function <!-- REF #IncomingMessageClass.getText().Summary -->returns the body of the request as a text value<!-- END REF -->. 

If the body has not been given as a string value, the function tries to convert the value but it can give unexpected results. 

:::note

Parameters given directly in the request with GET verb are handled the [`urlQuery`](#urlquery) property.

:::

<!-- END REF -->





<!-- REF #IncomingMessageClass.headers.Desc -->
## .headers

<!-- REF #IncomingMessageClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Description

The `.headers` property contains <!-- REF #IncomingMessageClass.headers.Summary -->the current headers of the incoming message as key/value pairs (strings)<!-- END REF -->. 

The `.headers` property is read-only. 

Header names (keys) are lowercased. Note header names are case sensitive. 


<!-- END REF -->



<!-- REF #IncomingMessageClass.url.Desc -->
## .url

<!-- REF #IncomingMessageClass.url.Syntax -->**url** : Text<!-- END REF -->

#### Description

The `.url` property contains <!-- REF #IncomingMessageClass.url.Summary -->the URL of the request without the *IP:port* part and as a string<!-- END REF -->. 

For example, if the request is addressed to: "http://127.0.0.1:80/docs/invoices/today", the `.url` property is "/docs/invoices/today".

The `.url` property is read-only. 

:::note

The "host" part of the request (*IP:port*) is provided by the [`host` header](#headers).

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

Parameters given in the body of the request with POST or PUT verbs are handled through dedicated functions: [`getText()`](#gettext), [`getPicture()`](#getpicture), [`getBlob()`](#getblob), [`getJSON()`](#getjson).

:::


<!-- END REF -->


<!-- REF #IncomingMessageClass.verb.Desc -->
## .verb

<!-- REF #IncomingMessageClass.verb.Syntax -->**verb** : Text<!-- END REF -->

#### Description

The `.verb` property contains <!-- REF #IncomingMessageClass.verb.Summary -->the HTTP verb used by the request<!-- END REF -->. 

HTTP request verbs include for example "get", "post", "put", etc.   

The `.verb` property is read-only. 

<!-- END REF -->

