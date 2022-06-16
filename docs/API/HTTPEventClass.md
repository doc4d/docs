---
id: HTTPEventClass
title: HTTPEvent
---

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R6|Class added|
</details>


A `HTTPEvent` object is returned when a [`HTTPRequest`](HTTPRequestClass.md) callback is called. See also [callbacks order](HTTPRequestClass.md#callbacks-order). 


### HTTPEvent Object

A `HTTPEvent` object is a non-sharable object. 

`HTTPEvent` objects provide the following properties:

||
|---|
|[<!-- INCLUDE #4D.HTTPEvent.type.Syntax -->](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPEvent.type.Summary -->|
|[<!-- INCLUDE #4D.HTTPEvent.data.Syntax -->](#encoding)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.HTTPEvent.data.Summary -->|




<!-- REF #4D.HTTPEvent.type.Desc -->
## .type


<!-- REF #4D.HTTPEvent.type.Syntax -->
**type** : Text<!-- END REF -->

#### Description

The `.type` property contains <!-- REF #4D.HTTPEvent.type.Summary -->the type of event. Possible values: "response", "error", "headers", "data", or "terminate"<!-- END REF -->. 

<!-- END REF -->

<!-- REF #4D.HTTPEvent.data.Desc -->
## .data

<!-- REF #4D.HTTPEvent.data.Syntax -->
**data** : blob<!-- END REF -->

#### Description

The `.data` property <!-- REF #4D.HTTPEvent.data.Summary -->contains the data received. It is always *undefined* except in the `onData` callback<!-- END REF -->. 

<!-- END REF -->




<style> h2 { background: #d9ebff;}</style>
