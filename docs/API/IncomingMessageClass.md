---
id: IncomingMessageClass
title: IncomingMessage
---


The `4D.IncomingMessage` class allows you to handle the object received by a custom [HTTP request handler].

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

The `.headers` property contains <!-- REF #IncomingMessageClass.headers.Summary -->the current headers of the incoming message as key/value pairs<!-- END REF -->. 

The `.headers` property is read-only. 

The `.headers` object is formatted as follows:

- All header names are lowercased.
- Duplicates of `age`, `authorization`, `content-length`, `content-type`, `etag`, `expires`, `from`, `host`, `if-modified-since`, `if-unmodified-since`, `last-modified`, `location`, `max-forwards`, `proxy-authorization`, `referer`, `retry-after`, `server`, or `user-agent` are discarded.
- `set-cookie` is always an collection. Duplicates are added to the collection.
- For duplicate `cookie` headers, the values are joined together with '; '.
- For all other headers, the values are joined together with ', '.

<!-- END REF -->





<!-- REF #IncomingMessageClass.status.Desc -->
## .status

<!-- REF #IncomingMessageClass.status.Syntax -->**status** : Integer<!-- END REF -->

#### Description

The `.status` property contains <!-- REF #IncomingMessageClass.status.Summary -->the current status of the outgoing message<!-- END REF -->. This property can be set using the [`setStatus()`](setstatus) function.

<!-- END REF -->
