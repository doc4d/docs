---
id: REST_requests
title: About REST Requests
---


The following structures are supported for REST requests:

|URI	|Resource (Input)| /? or &\{filter\} (Output)|
|---|---|---|
|http://{servername}:{port}/rest/	|[\{dataClass\}](dataClass.md)|[$filter]($filter.md), [$attributes]($attributes.md), [$skip]($skip.md), [$method=...]($method.md)...|
| |[\{dataClass\}](dataClass.md)/[$entityset/\{entitySetID\}]($entityset.md#entitysetentitysetid)|[$method=...]($method.md)|
| |[\{dataClass\}({key})](dataClass.md#dataclasskey)|[$attributes]($attributes.md)|
| |[\{dataClass\}:\{attribute\}(value)](dataClass.md#dataclassattributevalue)||

While all REST requests must contain the URI and Resource parameters, the Output (which filters the data returned) is optional.

As with all URIs, the first parameter is delimited by a “?” and all subsequent parameters by a “&”. For example:

 `GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600`

>You can place all values in quotes in case of ambiguity. For example, in our above example, we could have put the value for the last name in single quotes: "lastName!='Jones'".

The parameters allow you to manipulate data in dataclasses in your 4D project. Besides retrieving data using `GET` HTTP methods, you can also add, update, and delete entities in a dataclass using `POST` HTTP methods.

If you want the data to be returned in an array instead of JSON, use the [`$asArray`]($asArray.md) parameter.


## REST Status and Response  
With each REST request, the server returns the status and a response (with or without an error).

### Request Status  
With each REST request, you get the status along with the response. Below are a few of the statuses that can arise:

|Status|Description|
|---|---|
|0	|Request not processed (server might not be started).|
|200 OK	|Request processed without error.|
|401 Unauthorized	|Permissions error (check user's permissions).|
|402 No session	|Maximum number of sessions has been reached.|
|404 Not Found	|The data class is not accessible via REST or the entity set doesn't exist.|
|500 Internal Server Error	|Error processing the REST request.|

### Response  

The response (in JSON format) varies depending on the request.

If an error arises, it will be sent along with the response from the server or it will be the response from the server.


## Dates

<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R6|ISO date format in responses|

</details>

### Dates in responses

The format of Date values in REST responses depends on the **REST server: return dates in ISO format** [compatibility option](../settings/compatibility.md):

|Value|ISO format (option checked)|Legacy format (option unchecked)|
|---|---|---|
|Date attribute|`"1971-07-18"`|`"18!7!1971"`|
|Other Date values (in object attributes, returned by functions, computed attributes...)|`"1971-07-18"`|`"!!1971-07-18!!"`|
|Empty date|`null`|`"0!0!0"` (attribute) or `"!!0000-00-00!!"`|

In ISO format, dates are returned as `"YYYY-MM-DD"` strings, without time or time zone, so that a client in any time zone reads the same calendar day. This format can be used directly by standard JSON tools, for example JavaScript `Date` objects or date pickers.

The option is checked by default in projects created with 4D 21 R6 and higher, and unchecked in converted projects. It is always enabled in Qodly applications. It is read when the REST server starts: if you change it, restart the web server.

:::note

The ISO format applies to REST requests sent over HTTP. Requests sent by 4D applications through [`Open datastore`](../commands/open-datastore) and 4D client/server requests always use the legacy format, so date attributes of [remote datastores](../ORDA/remoteDatastores.md) are always received as Date values.

:::

Dates that are stored as strings in object attributes (depending on the [*Dates inside objects*](../commands/set-database-parameter#dates-inside-objects-85) setting) are strings, not Date values: they are returned unchanged.

### Dates in requests

When you send dates to the REST server, for example in [`$method=update`]($method.md#methodupdate) bodies or in [function parameters](ClassFunctions.md#scalar-value-parameter), you can use the ISO format (`"1971-07-18"`, or a full date-time such as `"1971-07-18T00:00:00Z"`, of which only the date part is kept for a date-only attribute) or the legacy format (`"18!7!1971"`), whatever the compatibility option.

### Example

You read a date attribute returned by the REST server of a project created with 4D 21 R6:

```4d
var $request : 4D.HTTPRequest
$request:=4D.HTTPRequest.new("http://localhost/rest/Employee(12)"; {method: "GET"})
$request.wait()

var $birth : Text
$birth:=$request.response.body.birthDate  // "1971-07-18" (it was "18!7!1971" in legacy format)
```


