---
id: http-responses
title: HTTP Response Headers
---

You can customize HTTP response headers for any requests received by the 4D web server, including REST requests. You can add or remove HTTP headers, send redirections or set the HTTP status. This feature is useful to implement security policies based upon the control of headers. 

To customize HTTP response headers, you just need to write some ReGex to declare the URL patterns you want to control, as well as how to modify response headers. You can set these rules using a `HTTPRules.json` file stored in the project folder, or using the *settings* parameter of the web server object [start()](../API/WebServerClass.md#start) function.  


## Requirements

HTTP response header customization is supported in the following contexts:

- [scalable sessions](./sessions.md#enabling-web-sessions) or [no sessions](../settings/web.md#no-sessions) are enabled,
- a web server run locally by 4D or 4D Server, including those [run by components](./webServerObject.md). 

:::note

Using a web server on a remote 4D is **deprecated** and is not supported by this feature. 

:::

## How to set rules

You can declare HTTP response rules:

- in a configuration file named **HTTPRules.json** stored in the [`Project/Sources`](../Project/architecture.md#sources) folder of the project. Rules are loaded and applied in the main Web server once it is started.
- using the [`.rules`](../API/WebServerClass.md#rules) property of the *settings* parameter of the [start()](../API/WebServerClass.md#start) function: 

```4d
WEB Server.start($settings.rules) //set rules at web server startup
```

If both a **HTTPRules.json** file and a call to the [`WEB Server`](../commands/web-server.md) command with a valid `$settings.rules` are used, the `WEB Server` command has priority. 

If the URI of the request does not match any of the RegEx patterns, the web server returns a default response.



## Rules Definition

The **HTTPRules.json** file or the [`.rules`](../API/WebServerClass.md#rules) property must contain a collection of **rule objects**.

A rule object is defined by:

- a RegEx describing a URL pattern, e.g. "^(.*\\.(jpg|jpeg|png|gif))"
- the name of the action to execute for the HTTP response, e.g. "removedHeaders"
- the value of the action, e.g. "X-Unwanted-Header1"


### URL patterns

URL patterns are given using **regular expressions**. To declare a regular expression pattern, use the "RegExPattern" property name.

Ex: `"RegExPattern": "/Test/Authorized/(.*)"`

When the web server receives a request, **all** URL patterns are triggered sequentially in the given order, and all matching patterns are executed. In case of several actions modifying similar resources, the last executed action is taken into account. 

### Actions

The following action keywords are supported:

|Keyword|Value type|Description|
|---|---|----|
|`removedHeaders`|Text or Collection of texts|Header(s) to remove from the HTTP responses. If a header to remove does not exist in the response header, it is ignored.|
|`addedHeaders`|Object|Name (text) and value (text) of header(s) to add to the HTTP responses. If a header to add already exists in the response header, its value is replaced.|
|`denyAccess`|Boolean|true to deny access to the resource, false to allow access. When the access to a resource is denied, the web server returns a 403 status by default  |
|`redirection`|Text|Redirection URL. When a redirection is triggered, the web server returns a 302 status by default|
|`status`|Number|HTTP status|


### Non-modifiable headers

The following headers could not be modified by the `removedHeaders` or `addHeaders` actions: 

- "Date", 
- "Content-Type"
- "Content-Length"

Modifying these headers do not generate errors, however modifications will be ignored.   

### Current rules

You can know the current rules using the [`.rules` property of the Web Server object](../API/WebServerClass.md#rules):

```
var $rules : Collection
$rules:=WEB Server.rules //current rules
```

## Example

Here is an example of HTTPRules.json file:

```json

[
    {
        "regexPattern": "/(.*)",
        "removedHeaders": [
            "X-Unwanted-Header1"
        ],
        "addedHeaders": {
            "X-Custom-Header1": "MyHeader1Value",
            "X-Custom-Header2": "MyHeader2Value"
        }
    },
    {
        "regexPattern": "/(.*).html",
        "removedHeaders": [
            "X-Unwanted-Header2",
             "X-Unwanted-Header3"
        ],
        "addedHeaders": {
          "X-Custom-Header3": "MyHeader3Value"
        }
    },
    {
        "regexPattern": "/Test/(.*)",
        "denyAccess": true,
        "status": 403
    },
    {
        "regexPattern": "/Test/Authorized/(.*)",
        "denyAccess": false
    },
    {
        "regexPattern": "/Test/Authorized_Bis/(.*)",
        "denyAccess": false
    },
    {
        "regexPattern": "^(.*\\.(jpg|jpeg|png|gif))",
        "redirection": "http://cdn1.example.com/",
        "status": 301
    },
    {
        "regexPattern": "^(.*\\.(css|js))",
        "redirection": "http://cdn2.example.com/",
        "status": 302
    }
]



```

:::tip Related blog post

[XX](https://blog.4d.com/master-http-requests-with-4d-request-handlers/)

:::
