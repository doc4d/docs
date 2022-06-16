---
id: HTTPResponseClass
title: HTTPResponse
---

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R6|Class added|
</details>


A `HTTPResponse` object contains the response to a [`HTTPRequest`](HTTPRequestClass.md). 


### HTTPResponse Object

A `HTTPResponse` object is a non-sharable object. 

`HTTPResponse` objects provide the following properties:

||
|---|
|[<!-- INCLUDE #4D.HTTPResponse.body.Syntax -->](#body)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPResponse.body.Summary -->|
|[<!-- INCLUDE #4D.HTTPResponse.headers.Syntax -->](#headers)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPResponse.headers.Summary -->|
|[<!-- INCLUDE #4D.HTTPResponse.status.Syntax -->](#status)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPResponse.status.Summary -->|
|[<!-- INCLUDE #4D.HTTPResponse.statusText.Syntax -->](#statusText)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPResponse.statusText.Summary -->|


<!-- REF #4D.HTTPResponse.body.Desc -->
## .body

<!-- REF #4D.HTTPResponse.body.Syntax -->
**body** : Variant<!-- END REF -->

#### Description

The `.body` property contains <!-- REF #4D.HTTPResponse.body.Summary -->the body of the response<!-- END REF -->. Undefined if the body has not been received yet.

<!-- END REF -->


<!-- REF #4D.HTTPResponse.headers.Desc -->
## .headers

<!-- REF #4D.HTTPResponse.headers.Syntax -->
**headers** : Object<!-- END REF -->

#### Description

The `.headers` property contains <!-- REF #4D.HTTPResponse.headers.Summary -->the headers of the response<!-- END REF -->. `headers.key` = value (value can be a Collection if the same key appears multiple times). Undefined if the headers have not been received yet.

<!-- END REF -->

<!-- REF #4D.HTTPResponse.status.Desc -->
## .status


<!-- REF #4D.HTTPResponse.status.Syntax -->
**status** : Number<!-- END REF -->

#### Description

The `.status` property contains <!-- REF #4D.HTTPResponse.status.Summary -->the status code of the response<!-- END REF -->. 

<!-- END REF -->

<!-- REF #4D.HTTPResponse.statusText.Desc -->
## .statusText

<!-- REF #4D.HTTPResponse.statusText.Syntax -->
**statusText** : Text<!-- END REF -->

#### Description

The `.statusText` property contains<!-- REF #4D.HTTPResponse.statusText.Summary -->a message explaining the status code<!-- END REF -->. 

<!-- END REF -->




<style> h2 { background: #d9ebff;}</style>
