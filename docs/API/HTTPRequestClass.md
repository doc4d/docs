---
id: HTTPRequestClass
title: HTTPRequest
---



The `HTTPRequest` class allows you to create [`HTTPRequest objects`](#httprequest-object) that can be used to configure and send  HTTP requests, as well as to process the HTTP server respones. 

An HTTPRequest object is a non-sharable object. 


### HTTPRequest Object

HTTPRequest objects provide the following properties and functions:

||
|---|
|[<!-- INCLUDE #FunctionClass.apply().Syntax -->](#apply)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.apply().Summary -->|
|[<!-- INCLUDE #FunctionClass.call().Syntax -->](#call)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.call().Summary --> |
|[<!-- INCLUDE #FunctionClass.source.Syntax -->](#source)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FunctionClass.source.Summary --> |



<!-- REF #4D.HTTPRequest.new().Desc -->
## 4D.HTTPRequest.new()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19 R6|Added|
</details>

<!-- REF #4D.HTTPRequest.new().Syntax -->
**4D.HTTPRequest.new()** ( *url* : Text { ; options : Object } ) : 4D.HTTPRequest<!-- END REF -->

<!-- REF #4D.HTTPRequest.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|url|Text|->|URL to which to send the request|
|options|Object|->|Request configuration properties|
|Result|4D.HTTPRequest|<-|New HTTPRequest object|
<!-- END REF -->


#### Description

The `4D.HTTPRequest.new()` function <!-- REF #4D.HTTPRequest.new().Summary -->creates and returns a `4D.HTTPRequest` object that will handle requests to the HTTP server defined in *url*<!-- END REF -->. 

The returned `HTTPRequest` object can be used to send requests to and process responses from the HTTP server. 

In *url*, pass the URL where you want to send the request. The syntax to use is:

```
http://[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
https://[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

For example, you can pass the following strings:

```
    http://www.myserver.com
    https://www.myserver.com/path
    http://www.myserver.com/path?name="jones"
    https://www.myserver.com/login
    http://123.45.67.89:8083
    http://john:smith@123.45.67.89:8083
    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]
    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)
```

#### `options` parameter

In the *options* parameter, pass an object containing properties to configure the HTTPRequest object:

|Property|Type|Description|Default|
|---|---|---|---|
|serverAuthentication|[authentication object](#authentication-object)|Object handling server authentication|undefined|
|proxyAuthentication|[authentication object](#authentication-object)|Object handling proxy authentication|undefined|
|minTLSVersion|Text|Sets the minimum version of TLS: "`TLSv1_0`", "`TLSv1_1`", "`TLSv1_2`", "`TLSv1_3`"|"`TLSv1_2`"|
|certificatesFolder|Folder|Sets the active client certificates folder|undefined|

#### authentication object

An authentication object handles the `options.serverAuthentication` or `options.proxyAuthentication` property. It can contain the following properties:

|Property|Type|Description|Default|
|---|---|---|---|
|name|Text|Name used for authentication|undefined|
|password|Text|Password used for authentication|undefined|
|method|Text|Method used for authentication:"basic", "digest", "auto"|"auto"|

<!-- END REF -->


<style> h2 { background: #d9ebff;}</style>
