---
id: QuotaManagerClass
title: QuotaManager
---


The `4D.QuotaManager` class provides you with an interface to configure and monitor the usage limits you apply to the server. Thresholds are useful for example to protect the server from poorly optimized requests or excessive use of server resources. 

Typically, the quota manager allows you to provide thresholds to ORDA resources a REST server session can access.  



<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R4|Class added|

</details>

### Example



### QuotaManager Object


4D.QuotaManager objects provide the following properties and functions:

||
|---|
|[<!-- INCLUDE #OutgoingMessageClass.body.Syntax -->](#body)<br/><!-- INCLUDE #OutgoingMessageClass.body.Summary -->|
|[<!-- INCLUDE #OutgoingMessageClass.headers.Syntax -->](#headers)<br/><!-- INCLUDE #OutgoingMessageClass.headers.Summary -->|
|[<!-- INCLUDE #OutgoingMessageClass.setBody().Syntax -->](#setbody)<br/><!-- INCLUDE #OutgoingMessageClass.setBody().Summary -->|
|[<!-- INCLUDE #OutgoingMessageClass.setHeader().Syntax -->](#setheader)<br/><!-- INCLUDE #OutgoingMessageClass.setHeader().Summary -->|
|[<!-- INCLUDE #OutgoingMessageClass.setStatus().Syntax -->](#setstatus)<br/><!-- INCLUDE #OutgoingMessageClass.setStatus().Summary -->|
|[<!-- INCLUDE #OutgoingMessageClass.status.Syntax -->](#status)<br/><!-- INCLUDE #OutgoingMessageClass.status.Summary -->|

:::note

A 4D.OutgoingMessage object is a [non-sharable](../Concepts/shared.md) object.

:::





<!-- REF OutgoingMessageClass.body.Desc -->
## .body

<!-- REF #OutgoingMessageClass.body.Syntax -->**body** : any<!-- END REF -->

#### Description

The `.body` property contains <!-- REF #OutgoingMessageClass.body.Summary -->the outgoing message body<!-- END REF -->. The following data types are supported in the `.body` property:

- text
- blob
- object
- image

The `.body` property is read-write.

You can also set the `.body` property using the [`setBody()`](#setbody) function, in which case the `content-type` header is automatically set. 

<!-- END REF -->


<!-- REF OutgoingMessageClass.headers.Desc -->
## .headers

<!-- REF #OutgoingMessageClass.headers.Syntax -->**headers** : Object<!-- END REF -->

#### Description

The `.headers` property contains <!-- REF #OutgoingMessageClass.headers.Summary -->the current headers of the outgoing message as key/value pairs<!-- END REF -->. 

The `.headers` property is read-only. To set a header, use the [`setHeader()`](#setheader) function. 

<!-- END REF -->


<!-- REF OutgoingMessageClass.setBody().Desc -->
## .setBody()

<!-- REF #OutgoingMessageClass.setBody().Syntax -->**.setBody**( *body* : any )<!-- END REF -->


<!-- REF #OutgoingMessageClass.setBody().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---|--- |---|------|
|body|any |->|Body of the outgoing message|
</div>
<!-- END REF -->

#### Description

The `.setBody()` function <!-- REF #OutgoingMessageClass.setBody().Summary -->sets the outgoing message *body*<!-- END REF -->.

 The following data types are supported in the *body*:

- Text
- Blob
- Object
- Image

When this function is used, the content-type header is automatically set depending on the *body* type:

- Content-Type:text/plain if the body is a Text
- Content-Type:application/octet-stream if body is a Blob
- Content-Type:application/json if body is an Object
- Content-Type:image/jpeg, image/gif... if body is an Image

If *body* is not of a supported value type, an error is returned.

<!-- END REF -->


<!-- REF OutgoingMessageClass.setHeader().Desc -->
## .setHeader()

<!-- REF #OutgoingMessageClass.setHeader().Syntax -->**.setHeader**( *key* : Text ; *value* : Text )<!-- END REF -->


<!-- REF #OutgoingMessageClass.setHeader().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---|--- |---|------|
|key|Text|->|Header property to set|
|value|Text|->|Value of the header property|
</div>
<!-- END REF -->

#### Description

The `.setHeader()` function <!-- REF #OutgoingMessageClass.setHeader().Summary -->sets the outgoing message header *key* with the provided *value*<!-- END REF -->. If both parameters are not Text values, an error is raised.

When returning a 4D.OutgoingMessage object instance, 4D automatically sets some headers (e.g. `Set-Cookie` with `4DSID__ProjectName_=....`). 

:::note

If you set a *value* for the "Content-Type" header *key*, make sure you call this function after the call to [`setBody()`](#setbody), because `setBody()` automatically fills this header. For a list of "Content-Type" header values, please refer to the [`WEB SEND BLOB`](../commands/web-send-blob) documentation. 

:::


<!-- END REF -->

<!-- REF OutgoingMessageClass.setStatus().Desc -->
## .setStatus()

<!-- REF #OutgoingMessageClass.setStatus().Syntax -->**.setStatus**( *status* : Integer )<!-- END REF -->


<!-- REF #OutgoingMessageClass.setStatus().Params -->
<div class="no-index">

|Parameter|Type||Description|
|---|--- |---|------|
|status|Integer|->|Status to set|
</div>
<!-- END REF -->

#### Description

The `.setStatus()` function <!-- REF #OutgoingMessageClass.setStatus().Summary -->sets the `status` property with the given *status*<!-- END REF -->.

If *status* is not an integer value, an error is raised.

For a list of HTTP status codes, please refer the [HTTP status code list on Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).  


<!-- END REF -->



<!-- REF OutgoingMessageClass.status.Desc -->
## .status

<!-- REF #OutgoingMessageClass.status.Syntax -->**status** : Integer<!-- END REF -->

#### Description

The `.status` property contains <!-- REF #OutgoingMessageClass.status.Summary -->the current status of the outgoing message<!-- END REF -->. This property can be set using the [`setStatus()`](setstatus) function.

<!-- END REF -->

